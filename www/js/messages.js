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
          const other   = state.users.find(x => x.id === otherId) || { name: 'Unknown' };
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
    const other   = state.users.find(x => x.id === otherId) || { name: 'Unknown' };
    const listing = (state.listings || []).find(l => l.id === c.listingId);
    c.messages.forEach(m => { if (m.from !== u.id) m.read = true; });
    saveState();
    H._activeChat = id;

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
    c.messages.push({ from: u.id, text, t: Date.now(), read: false });
    saveState();
    inp.value = '';
    H.renderPage('Chat', { id: c.id });
  };

})(window.H);
