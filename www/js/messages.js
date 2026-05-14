'use strict';
(function (H) {
  const pages = H.pages;
  const state = H.state;
  const { currentUser, escHtml, timeAgo, uid, toast, modal,
          innerTopbar, emptyState, openInner, goBack, renderPage,
          saveState, initials, pushNotif, fmtPrice, ICONS } = H;

  // ---------------------------------------------------
  // MESSAGES LIST
  // ---------------------------------------------------
  pages.Messages = function () {
    const u = currentUser();
    const convos = (state.conversations || [])
      .filter(c => c.members.includes(u.id) && c.messages.length)
      .sort((a, b) => b.messages[b.messages.length - 1].t - a.messages[a.messages.length - 1].t);

    return `<div class="page active">${innerTopbar('Messages')}
      <div style="padding:10px 14px;font-size:12px;color:var(--sub)">${convos.length} conversation${convos.length === 1 ? '' : 's'}</div>
      <div>
        ${convos.length ? convos.map(c => {
          const otherId = c.members.find(m => m !== u.id);
          const other   = state.users.find(x => x.id === otherId) || { name: (function(){ var lastMsg = c.messages.find(function(m){ return m.from===otherId; }); return lastMsg&&lastMsg.senderName ? lastMsg.senderName : 'User'; })() };
          const last    = c.messages[c.messages.length - 1];
          const unread  = c.messages.some(m => m.from !== u.id && !m.read);
          return `<div class="msg-item" onclick="H.openChat('${c.id}')">
            <div class="msg-av">${initials(other.name)}</div>
            <div class="msg-body">
              <div class="msg-name-row">
                <div class="msg-name">${escHtml(other.name)}</div>
                <div class="msg-time">${timeAgo(last.t)}</div>
              </div>
              <div class="msg-preview">${last.from === u.id ? 'You: ' : ''}${escHtml(last.text)}</div>
            </div>
            ${unread ? '<div class="msg-unread-dot"></div>' : ''}
          </div>`;
        }).join('') : emptyState('No messages yet', 'When buyers message you about a listing, it will show up here.', null, null)}
      </div>
    </div>`;
  };

  
  pages.Chat = function ({ id }) {
    const c = (state.conversations || []).find(x => x.id === id);
    if (!c) return '<div class="page active">' + innerTopbar('Chat') + '<div class="empty-state"><div class="empty-title">Conversation not found</div></div></div>';
    const u = currentUser();
    const otherId = c.members.find(m => m !== u.id);
    const other = state.users.find(x => x.id === otherId) || { name: (function(){ var m = c.messages.find(function(msg){ return msg.from===otherId; }); return m&&m.senderName ? m.senderName : 'User'; })() };
    const listing = (state.listings || []).find(l => l.id === c.listingId);
    c.messages.forEach(m => { if (m.from !== u.id) m.read = true; });
    saveState();
    H._activeChat = id;
    const msgs = c.messages.map(function(m) {
      const mine = m.from === u.id;
      return '<div class="chat-bubble ' + (mine ? 'me' : 'them') + '">'
        + escHtml(m.text)
        + '<div style="font-size:10px;opacity:.6;margin-top:3px">' + timeAgo(m.t) + '</div>'
        + '</div>';
    }).join('');
    return '<div class="page active">'
      + '<div class="det-topbar"><button class="back" onclick="H.goBack()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>'
      + '<div class="det-topbar-title">' + escHtml(other.name) + '</div></div>'
      + (listing ? '<div style="padding:8px 14px;background:var(--card);border-bottom:1px solid var(--border);font-size:13px;color:var(--sub)">Re: ' + escHtml(listing.title) + '</div>' : '')
      + '<div class="chat-thread" id="chatThread" style="height:calc(100vh - 200px);overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px">' + (msgs || '<div style="text-align:center;color:var(--sub);padding:40px 20px;font-size:14px">No messages yet. Say hello!</div>') + '</div>'
      + '<div class="chat-input-bar">'
      + '<input id="chatIn" placeholder="Message..." onkeydown="if(event.keyCode===13)H.sendChat()">'
      + '<button class="chat-send" onclick="H.sendChat()"><svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>'
      + '</div></div>';
  };

  pages.Chat_after = function () {
    const t = document.getElementById('chatThread');
    if (t) t.scrollTop = t.scrollHeight;
    setTimeout(() => document.getElementById('chatIn')?.focus(), 200);
    if (H.currentPageParams && H.currentPageParams.id) H.startChatPolling(H.currentPageParams.id);
  };


  H.openChat = function (id) { H.openInner('Chat', { id }); };

  H.startChatWith = function (otherId, listingId) {
    const u = currentUser();
    if (otherId === u.id) { H.toast('You cannot message yourself'); return; }
    // Use deterministic ID so both users get same conversation
    const ids = [u.id, otherId].sort();
    const convId = 'conv_' + ids[0].slice(-6) + '_' + ids[1].slice(-6) + '_' + (listingId||'').slice(-6);
    let c = (state.conversations || []).find(x => x.id === convId);
    if (!c) {
      c = { id: convId, members: [u.id, otherId], listingId: listingId||null, messages: [] };
      state.conversations = state.conversations || [];
      state.conversations.push(c);
      saveState();
    }
    H.openInner('Chat', { id: convId });
  };

  H.startChatPolling = function(convId) {
    if (window._chatPoll) clearInterval(window._chatPoll);
    window._chatPoll = setInterval(function() {
      if (H.currentPageName !== 'Chat') { clearInterval(window._chatPoll); return; }
      if (typeof H.fetchNewMessages === "function") H.fetchNewMessages(convId);
    }, 4000);
  };


  H.syncConversations = async function() {
    try {
      if (!window.supabase || typeof window.supabase.from !== 'function') return;
      var u = H.currentUser(); if (!u) return;
      var res = await window.supabase.from('messages').select('*').order('created_at', {ascending:false}).limit(100);
      if (res.error || !res.data) return;
      var convIds = [...new Set(res.data.map(function(r){ return r.conversation_id; }))];
      convIds.forEach(function(cid) {
        var msgs = res.data.filter(function(r){ return r.conversation_id===cid; }).reverse();
        var existing = (H.state.conversations||[]).find(function(c){ return c.id===cid; });
        if (!existing) {
          var otherSender = msgs.find(function(r){ return r.sender_id!==u.id; });
          var otherId = otherSender ? otherSender.sender_id : u.id;
          var newConv = { id: cid, members: [u.id, otherId], listingId: null, messages: [] };
          H.state.conversations = H.state.conversations || [];
          H.state.conversations.push(newConv);
          existing = newConv;
        }
        msgs.forEach(function(r) {
          var ex = existing.messages.find(function(m){ return m.id===r.id; });
          if (!ex) existing.messages.push({ id: r.id, from: r.sender_id, senderName: r.sender_name||'', text: r.text, t: new Date(r.created_at).getTime(), read: r.read||false });
        });
      });
      H.saveState();
      console.log('Conversations synced');
    } catch(e) { console.warn('syncConversations error:', e.message); }
  };


  H.sendChat = function () {
    const inp = document.getElementById('chatIn');
    const text = inp ? inp.value.trim() : '';
    if (!text) return;
    const c = (state.conversations || []).find(function(x){ return x.id === H._activeChat; });
    if (!c) return;
    const u = currentUser();
    var msgId = H.uid();
    var msgT = Date.now();
    c.messages.push({ id: msgId, from: u.id, senderName: u.name||'', text: text, t: msgT, read: false });
    saveState();
    inp.value = '';
    try {
      if (window.supabase && typeof window.supabase.from === 'function') {
        window.supabase.from('messages').insert({
          id: msgId,
          conversation_id: c.id,
          sender_id: u.id,
          sender_name: u.name || '',
          text: text,
          created_at: new Date(msgT).toISOString(),
          read: false
        }).then(function(r){ if(r&&r.error) console.warn('Msg save failed:', r.error.message); });
      }
    } catch(e) { console.warn('Msg cloud error:', e.message); }
    H.renderPage('Chat', { id: c.id });
  };

})(window.H);
