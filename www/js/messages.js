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

  H.openChat = function (id) { H.openInner('Chat', { id }); };

  H.startChatWith = function (otherId, listingId) {
    const u = currentUser();
    if (otherId === u.id) return;
    let c = (state.conversations || []).find(x => x.members.includes(u.id) && x.members.includes(otherId) && x.listingId === listingId);
    if (!c) {
      c = { id: uid(), members: [u.id, otherId], listingId, messages: [] };
      state.conversations.push(c); saveState();
    }
    H.openInner('Chat', { id: c.id });
  };

  // ---------------------------------------------------
  // CHAT THREAD
  // ---------------------------------------------------
  pages.Chat = function ({ id }) {
    const c = (state.conversations || []).find(x => x.id === id);
    // Use the same empty-state icon as the rest of the app
    const messageIcon = `<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
    if (!c) return `<div class="page active">${innerTopbar('Chat')}
      <div class="empty-state"><div class="empty-icon">${messageIcon}</div><div class="empty-title">Conversation not found</div></div></div>`;

    const u       = currentUser();
    const otherId = c.members.find(m => m !== u.id);
    const other   = state.users.find(x => x.id === otherId) || { name: (function(){ var lastMsg = c.messages.find(function(m){ return m.from===otherId; }); return lastMsg&&lastMsg.senderName ? lastMsg.senderName : 'User'; })() };
    const listing = (state.listings || []).find(l => l.id === c.listingId);
    c.messages.forEach(m => { if (m.from !== u.id) m.read = true; });
    saveState();
    H.startChatPolling && setTimeout(function(){ H.startChatPolling(id); }, 500);
    H._activeChat = id;
    // Start polling for new messages
    if (window._chatPoll) clearInterval(window._chatPoll);

    // Pinned listing snippet
    const pinnedIcon = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/><line x1="15" y1="5" x2="19" y2="9"/></svg>`;

    return `<div class="page active" style="display:flex;flex-direction:column;height:100%">
      ${innerTopbar(escHtml(other.name), true)}
      ${listing ? `<div onclick="H.openListing('${listing.id}')"
          style="background:var(--n4);padding:9px 14px;border-bottom:1px solid var(--border);font-size:12px;color:var(--n2);cursor:pointer;display:flex;align-items:center;gap:6px">
          ${pinnedIcon} <span><strong>${escHtml(listing.title)}</strong> · ${escHtml(fmtPrice(listing.price, listing.currency))}</span>
        </div>` : ''}
      <div class="chat-thread" id="chatThread">
        ${c.messages.map(m => `
          <div class="chat-bubble ${m.from === u.id ? 'me' : 'them'}">
            ${escHtml(m.text)}
            <span class="chat-time">${new Date(m.t).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>`).join('')}
      </div>
      <div class="chat-input-bar">
        <input id="chatIn" placeholder="Message..." onkeydown="if(event.key==='Enter')H.sendChat()">
        <button class="chat-send" onclick="H.sendChat()">
          <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    </div>`;
  };

  pages.Chat_after = function () {
    if (H.currentPageParams && H.currentPageParams.id) H.startChatPolling(H.currentPageParams.id);
    const t = document.getElementById('chatThread');
    if (t) t.scrollTop = t.scrollHeight;
    setTimeout(() => document.getElementById('chatIn')?.focus(), 200);
  };

  H.sendChat = function () {
    const inp  = document.getElementById('chatIn');
    const text = inp.value.trim();
    if (!text) return;
    const c = (state.conversations || []).find(x => x.id === H._activeChat); if (!c) return;
    const u = currentUser();
    var msgId = H.uid();
    var msgT = Date.now();
    c.messages.push({ id: msgId, from: u.id, text: text, t: msgT, read: false });
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
    // Poll for new messages every 5 seconds while in chat
    if (window._chatPoll) clearInterval(window._chatPoll);
    window._chatPoll = setInterval(async function() {
      if (H.currentPageName !== 'Chat') { clearInterval(window._chatPoll); return; }
      try {
        if (!window.supabase || typeof window.supabase.from !== 'function') return;
        var since = c.messages.length ? new Date(c.messages[c.messages.length-1].t).toISOString() : new Date(0).toISOString();
        var res = await window.supabase.from('messages').select('*').eq('conversation_id', c.id).gt('created_at', since);
        if (res.data && res.data.length) {
          res.data.forEach(function(r) {
            var exists = c.messages.find(function(mm){ return mm.id === r.id; });
            if (!exists) {
              c.messages.push({ id: r.id, from: r.sender_id, senderName: r.sender_name||'', text: r.text, t: new Date(r.created_at).getTime(), read: false });
            }
          });
          saveState();
          H.renderPage('Chat', { id: c.id });
        }
      } catch(e) {}
    }, 5000);
  };


  H.fetchNewMessages = async function(convId) {
    try {
      if (!window.supabase || typeof window.supabase.from !== 'function') return;
      var c = (H.state.conversations||[]).find(function(x){ return x.id===convId; });
      if (!c) return;
      var res = await window.supabase.from('messages').select('*').eq('conversation_id', convId).order('created_at', {ascending:true});
      if (res.error || !res.data || !res.data.length) return;
      var changed = false;
      res.data.forEach(function(r) {
        var exists = c.messages.find(function(m){ return m.id===r.id; });
        if (!exists) {
          c.messages.push({ id: r.id, from: r.sender_id, text: r.text, t: new Date(r.created_at).getTime(), read: false });
          changed = true;
        }
      });
      if (changed) {
        H.saveState();
        if (H.currentPageName === 'Chat' && H.currentPageParams && H.currentPageParams.id === convId) {
          H.renderPage('Chat', { id: convId });
        }
      }
    } catch(e) { console.warn('fetchNewMessages error:', e.message); }
  };

  H.startChatPolling = function(convId) {
    if (window._chatPoll) clearInterval(window._chatPoll);
    window._chatPoll = setInterval(function() {
      if (H.currentPageName !== 'Chat') { clearInterval(window._chatPoll); return; }
      H.fetchNewMessages(convId);
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

})(window.H);
