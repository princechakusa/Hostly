/*!
 * PaMarket — Zimbabwe's Free Marketplace
 * © 2026 PaMarket. All rights reserved.
 * Unauthorised copying, modification, distribution or use of this
 * software without written permission from the owner is strictly prohibited.
 */
'use strict';
(function (H) {
  const pages = H.pages;
  const state = H.state;
  const { currentUser, escHtml, timeAgo, uid, toast, modal,
          innerTopbar, emptyState, openInner, goBack, renderPage,
          initials, pushNotif, fmtPrice, ICONS } = H;

  function conversations() {
    if (!Array.isArray(H.state.conversations)) {
      H.state.conversations = [];
      H.saveState();
    }
    return H.state.conversations;
  }

  function users() {
    if (!Array.isArray(H.state.users)) H.state.users = [];
    return H.state.users;
  }

  function conversationSignature() {
    const u = currentUser();
    if (!u) return '';
    return conversations()
      .filter(c => Array.isArray(c.members) && c.members.includes(u.id))
      .map(c => {
        const msgs = Array.isArray(c.messages) ? c.messages : [];
        const last = msgs[msgs.length - 1] || {};
        const unread = msgs.filter(m => m.from !== u.id && !m.read).length;
        const otherId = Array.isArray(c.members) ? c.members.find(m => m !== u.id) : '';
        const other = otherId ? users().find(x => x.id === otherId) : null;
        return [c.id, msgs.length, last.id || '', last.t || 0, unread, (other && other.name) || '', (other && other.avatar) || ''].join(':');
      })
      .sort()
      .join('|');
  }

  function otherAvatarFor(c, u) {
    const otherId = c && Array.isArray(c.members) ? c.members.find(m => m !== u.id) : null;
    const other = otherId ? users().find(x => x.id === otherId) : null;
    const ini = initials((other && other.name) || 'U');
    return (other && other.avatar)
      ? '<img src="' + escHtml(other.avatar) + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%">'
      : '<div style="width:100%;height:100%;background:linear-gradient(135deg,#1A3A8F,#2952cc);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff">' + ini + '</div>';
  }

  function appendThemMessage(thread, avatarHtml, m) {
    if (!thread || !m || thread.querySelector('[data-msg-id="' + escHtml(m.id) + '"]')) return;
    const wrap = document.createElement('div');
    wrap.setAttribute('data-msg-id', m.id);
    wrap.style.cssText = 'display:flex;align-items:flex-end;gap:6px';
    const avaEl = document.createElement('div');
    avaEl.style.cssText = 'width:28px;height:28px;flex-shrink:0';
    avaEl.innerHTML = avatarHtml;
    const div = document.createElement('div');
    div.className = 'chat-bubble them';
    div.innerHTML = escHtml(m.text) + '<div style="font-size:10px;opacity:.6;margin-top:3px">' + timeAgo(m.t) + '</div>';
    wrap.appendChild(avaEl);
    wrap.appendChild(div);
    thread.appendChild(wrap);
  }

  // ---------------------------------------------------
  // MESSAGES LIST
  // ---------------------------------------------------
  pages.Messages = function () {
    const u = currentUser();
    if (!u) {
      return `<div class="page active">${H.innerTopbar('Messages')}
        <div style="padding:20px">${H.emptyState('Sign in required', 'Sign in to view and send messages.', 'Sign In', "H.requireAuth('Sign in to view messages')")}</div>
      </div>`;
    }
    const convos = conversations()
      .filter(c => Array.isArray(c.members) && c.members.includes(u.id) && Array.isArray(c.messages) && c.messages.length)
      .sort((a, b) => {
        const am = a.messages[a.messages.length - 1] || {};
        const bm = b.messages[b.messages.length - 1] || {};
        return (bm.t || 0) - (am.t || 0);
      });

    return `<div class="page active">${H.innerTopbar('Messages')}
      <div style="padding:10px 14px;font-size:12px;color:var(--sub)">${convos.length} conversation${convos.length === 1 ? '' : 's'}</div>
      <div>
        ${convos.length ? convos.map(c => {
          const otherId = c.members.find(m => m !== u.id);
          const other   = users().find(x => x.id === otherId) || { name: (function(){ var lastMsg = c.messages.find(function(m){ return m.from===otherId; }); return lastMsg&&lastMsg.senderName ? lastMsg.senderName : 'User'; })() };
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
        }).join('') : H.emptyState('No messages yet', 'When buyers message you about a listing, it will show up here.', null, null)}
      </div>
    </div>`;
  };

  
  pages.Chat = function ({ id }) {
    const c = conversations().find(x => x.id === id);
    if (!c) return '<div class="page active">' + H.innerTopbar('Chat') + '<div class="empty-state"><div class="empty-title">Conversation not found</div></div></div>';
    const u = currentUser();
    if (!u) {
      return `<div class="page active">${H.innerTopbar('Chat')}
        <div style="padding:20px">${H.emptyState('Sign in required', 'Sign in to view and send messages.', 'Sign In', "H.requireAuth('Sign in to view messages')")}</div>
      </div>`;
    }
    if (!Array.isArray(c.members)) c.members = [];
    if (!Array.isArray(c.messages)) c.messages = [];
    const otherId = c.members.find(m => m !== u.id);
    const other = users().find(x => x.id === otherId) || { name: (function(){ var m = c.messages.find(function(msg){ return msg.from===otherId; }); return m&&m.senderName ? m.senderName : 'User'; })() };
    const listing = (state.listings || []).find(l => l.id === c.listingId);
    c.messages.forEach(m => { if (m.from !== u.id) m.read = true; });
    H.saveState();
    H._activeChat = id;

    const otherIni = initials(other.name || 'U');
    const otherAvatar = other.avatar
      ? '<img src="' + escHtml(other.avatar) + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%">'
      : '<div style="width:100%;height:100%;background:linear-gradient(135deg,#1A3A8F,#2952cc);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff">' + otherIni + '</div>';

    const msgs = c.messages.map(function(m) {
      const mine = m.from === u.id;
      if (mine) {
        return '<div class="chat-bubble me" data-msg-id="' + escHtml(m.id) + '">'
          + escHtml(m.text)
          + '<div style="font-size:10px;opacity:.6;margin-top:3px;text-align:right">' + timeAgo(m.t) + '</div>'
          + '</div>';
      }
      return '<div data-msg-id="' + escHtml(m.id) + '" style="display:flex;align-items:flex-end;gap:6px">'
        + '<div style="width:28px;height:28px;flex-shrink:0">' + otherAvatar + '</div>'
        + '<div class="chat-bubble them">'
        + escHtml(m.text)
        + '<div style="font-size:10px;opacity:.6;margin-top:3px">' + timeAgo(m.t) + '</div>'
        + '</div></div>';
    }).join('');

    return '<div class="page active" style="display:flex;flex-direction:column;overflow:hidden">'
      + '<div class="det-topbar" style="flex-shrink:0"><button class="back" onclick="H.goBack()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>'
      + '<div style="display:flex;align-items:center;gap:10px;flex:1;min-width:0">'
      + '<div style="width:34px;height:34px;flex-shrink:0">' + otherAvatar + '</div>'
      + '<div style="min-width:0"><div class="det-topbar-title" style="margin:0;text-align:left">' + escHtml(other.name) + '</div>'
      + (other.verified ? '<div style="font-size:10px;color:#22c55e;font-weight:600">✓ Verified</div>' : '') + '</div>'
      + '</div></div>'
      + (listing ? '<div style="flex-shrink:0;padding:8px 14px;background:var(--card);border-bottom:1px solid var(--border);font-size:13px;color:var(--sub)">Re: ' + escHtml(listing.title) + '</div>' : '')
      + '<div class="chat-thread" id="chatThread" style="flex:1;min-height:0;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px">' + (msgs || '<div style="text-align:center;color:var(--sub);padding:40px 20px;font-size:14px">No messages yet. Say hello! 👋</div>') + '</div>'
      + '<div class="chat-input-bar" style="flex-shrink:0">'
      + '<input id="chatIn" placeholder="Type a message..." onkeydown="if(event.keyCode===13&&!event.shiftKey){event.preventDefault();H.sendChat();}" style="flex:1">'
      + '<button class="chat-send" onclick="H.sendChat()"><svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>'
      + '</div></div>';
  };

  pages.Chat_after = function () {
    if (window._messagesPoll) { clearInterval(window._messagesPoll); window._messagesPoll = null; }
    const t = document.getElementById('chatThread');
    if (t) t.scrollTop = t.scrollHeight;
    setTimeout(() => document.getElementById('chatIn')?.focus(), 200);
    if (H.currentPageParams && H.currentPageParams.id) H.startChatPolling(H.currentPageParams.id);
  };


  H.openChat = function (id) { H.openInner('Chat', { id }); };

  H.startChatWith = function (otherId, listingId) {
    const u = currentUser();
    if (!u) { H.requireAuth('Sign in to message sellers'); return; }
    if (!otherId) { H.toast('Seller profile is not available yet'); return; }
    if (otherId === u.id) { H.toast('You cannot message yourself'); return; }
    // Use deterministic ID so both users get same conversation
    const ids = [u.id, otherId].sort();
    const convId = 'conv_' + ids[0].slice(-6) + '_' + ids[1].slice(-6) + '_' + (listingId||'').slice(-6);
    let c = conversations().find(x => x.id === convId);
    if (!c) {
      c = { id: convId, members: [u.id, otherId], listingId: listingId||null, messages: [] };
      conversations().push(c);
      H.saveState();
      if (typeof H.ensureConversationInCloud === 'function') H.ensureConversationInCloud(c);
    }
    H.openInner('Chat', { id: convId });
  };

  pages.Messages_after = function () {
    if (window._chatPoll) { clearInterval(window._chatPoll); window._chatPoll = null; }
    if (window._messagesPoll) clearInterval(window._messagesPoll);
    H._refreshMessagesPage();
    window._messagesPoll = setInterval(function () {
      if (H.currentPageName !== 'Messages') {
        clearInterval(window._messagesPoll);
        window._messagesPoll = null;
        return;
      }
      H._refreshMessagesPage();
    }, 5000);
  };

  H._refreshMessagesPage = function (opts) {
    opts = opts || {};
    if (H._syncingMessagesPage || !H.currentUser()) return Promise.resolve(false);
    if (opts.skipSync) {
      if (H.currentPageName === 'Messages') H.renderPage('Messages');
      return Promise.resolve(true);
    }
    if (typeof H.syncConversations !== 'function') return Promise.resolve(false);
    H._syncingMessagesPage = true;
    const before = conversationSignature();
    return H.syncConversations().then(function () {
      const after = conversationSignature();
      if (H.currentPageName === 'Messages' && after !== before) H.renderPage('Messages');
      return after !== before;
    }).finally(function () {
      H._syncingMessagesPage = false;
    });
  };

  H.startChatPolling = function(convId) {
    if (window._chatPoll) clearInterval(window._chatPoll);
    window._chatPoll = setInterval(async function() {
      if (H.currentPageName !== 'Chat' || H._activeChat !== convId) {
        clearInterval(window._chatPoll);
        return;
      }
      const conv = conversations().find(c => c.id === convId);
      const idsBefore = new Set(((conv && conv.messages) || []).map(m => m.id));
      if (typeof H.syncConversations === 'function') {
        await H.syncConversations();
      }
      const convAfter = conversations().find(c => c.id === convId);
      if (!convAfter) return;
      // Append only the new messages without a full page re-render
      const thread = document.getElementById('chatThread');
      if (!thread) return;
      const u = H.currentUser();
      if (!u) return;
      const ava2 = otherAvatarFor(convAfter, u);
      const newMsgs = (convAfter.messages || []).filter(m => !idsBefore.has(m.id));
      newMsgs.forEach(function(m) {
        if (m.from === u.id) return;
        m.read = true;
        appendThemMessage(thread, ava2, m);
      });
      thread.scrollTop = thread.scrollHeight;
      H.saveState();
    }, 4000);
  };

  H._appendChatMessages = function (convId, msgs) {
    if (H.currentPageName !== 'Chat' || !H.currentPageParams || H.currentPageParams.id !== convId) return false;
    const thread = document.getElementById('chatThread');
    const u = H.currentUser();
    const conv = conversations().find(c => c.id === convId);
    if (!thread || !u || !conv) return false;
    const ava = otherAvatarFor(conv, u);
    let appended = false;
    (msgs || []).forEach(function(m) {
      if (!m || m.from === u.id) return;
      m.read = true;
      appendThemMessage(thread, ava, m);
      appended = true;
    });
    if (appended) {
      thread.scrollTop = thread.scrollHeight;
      H.saveState();
    }
    return appended;
  };


  // syncConversations is defined in app.js (cloud-aware version)


  H.sendChat = async function () {
    if (H.checkBan && H.checkBan()) return;
    const inp = document.getElementById('chatIn');
    const text = inp ? inp.value.trim() : '';
    if (!text) return;
    const c = conversations().find(function(x){ return x.id === H._activeChat; });
    if (!c) return;
    const u = H.currentUser();
    var msgId = H.uid();
    var msgT = Date.now();
    c.messages.push({ id: msgId, from: u.id, senderName: u.name||'', text: text, t: msgT, read: false });
    H.saveState();
    inp.value = '';
    // Append to DOM directly — no full page re-render to avoid flicker
    const thread = document.getElementById('chatThread');
    if (thread) {
      const div = document.createElement('div');
      div.className = 'chat-bubble me';
      div.setAttribute('data-msg-id', msgId);
      div.innerHTML = escHtml(text) + '<div style="font-size:10px;opacity:.6;margin-top:3px">just now</div>';
      thread.appendChild(div);
      thread.scrollTop = thread.scrollHeight;
    }
    try {
      var cloudResult = { ok: true };
      if (typeof H.ensureConversationInCloud === 'function') {
        cloudResult = await H.ensureConversationInCloud(c);
        if (cloudResult && cloudResult.ok === false) throw new Error(cloudResult.error || 'Conversation sync failed');
      }
      if (typeof H.saveMessageToCloud === 'function') {
        cloudResult = await H.saveMessageToCloud(c.id, c.messages[c.messages.length - 1]);
        if (cloudResult && cloudResult.ok === false) throw new Error(cloudResult.error || 'Message sync failed');
      }
      else if (window.supabase && typeof window.supabase.from === 'function') {
        var r = await window.supabase.from('messages').insert({
          id: msgId, conversation_id: c.id,
          sender_id: u.id, sender_name: u.name || '',
          text: text, created_at: new Date(msgT).toISOString(), read: false
        });
        if(r&&r.error) console.warn('Msg save failed:', r.error.message);
      }
      var otherId = c.members.find(function(m){ return m !== u.id; });
      if (otherId && typeof H.pushNotif === 'function') H.pushNotif(otherId, 'New Message', (u.name || 'Someone') + ': ' + text.slice(0, 80), 'message');
    } catch(e) {
      console.warn('Msg cloud error:', e.message);
      H.toast('Message sent here, but could not sync. Check your connection and sign in again.', 5000, true);
    }
  };

})(window.H);
