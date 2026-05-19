'use strict';
(function (H) {
  const pages = H.pages;
  const state = H.state;
  const { currentUser, escHtml, timeAgo, uid, toast, modal,
          innerTopbar, emptyState, openInner, goBack, renderPage,
          saveState, fmtPrice, initials, renderListCard, navTo,
          pushNotif, CATEGORIES } = H;

  pages.Saved = function () {
    const u    = currentUser();
    const ids  = state.saves[u.id] || [];
    const list = ids.map(id => state.listings.find(l => l.id === id)).filter(Boolean);

    return `<div class="page active">
      <div class="app-header" style="padding-bottom:16px">
        <div class="app-header-row">
          <div class="logo">Saved <em>Ads</em></div>
          <div style="font-size:12px;font-weight:600;color:rgba(255,255,255,.6);padding:4px 10px;background:rgba(255,255,255,.1);border-radius:20px">
            ${list.length} saved
          </div>
        </div>
      </div>
      <div class="listing-list">
        ${list.length
          ? list.map(renderListCard).join('')
          : emptyState('Nothing saved yet', 'Tap the ♡ on any listing to save it for later', 'Browse Listings', "H.navTo('Browse',document.querySelector('[data-nav=Browse]'))")}
      </div>
    </div>`;
  };

  pages.Profile = function () {
    const u         = currentUser();
    const myListings = (state.listings || []).filter(l => l.sellerId === u.id);
    const active    = myListings.filter(l => l.status === 'active').length;
    const saves     = (state.saves[u.id] || []).length;
    const txns      = (state.txns || []).filter(t => t.userId === u.id);

    return `<div class="page active">
      <div class="prof-top">
        <div class="prof-av">${u.avatar ? `<img src="${u.avatar}">` : initials(u.name)}</div>
        <div class="prof-name">${escHtml(u.name)}</div>
        <div class="prof-phone-display">${escHtml(u.phone)}</div>
        <div class="prof-badges">
          ${u.verified ? `<span class="pbadge pbadge-verified">
            <span class="blue-check" style="width:12px;height:12px;margin-right:2px">
              <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
            </span>ID Verified</span>` : ''}
          ${u.role === 'admin' ? '<span class="pbadge pbadge-admin">Admin</span>' : ''}
        </div>
      </div>

      <div class="stats">
        <div class="stat"><div class="stat-n">${active}</div><div class="stat-l">Active Ads</div></div>
        <div class="stat"><div class="stat-n">${saves}</div><div class="stat-l">Saved</div></div>
        <div class="stat"><div class="stat-n">$${(u.walletUSD || 0).toFixed(0)}</div><div class="stat-l">Wallet</div></div>
      </div>

      <div class="menu-group-label">My Account</div>
      <div class="menu-items">
        <div class="mi" onclick="H.openInner('MyListings')">
          <div class="mi-icon blue-ic"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/></svg></div>
          <div class="mi-label">My Listings</div>
          <span class="mi-badge-green">${active}</span>
          <div class="mi-arrow">›</div>
        </div>
        <div class="mi" onclick="H.openInner('Payments')">
          <div class="mi-icon amber-ic"><svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div>
          <div class="mi-label">Wallet &amp; Payments</div>
          <div class="mi-arrow">›</div>
        </div>
        <div class="mi" onclick="H.openInner('Verify')">
          <div class="mi-icon ${u.verified ? 'blue-ic' : 'green-ic'}">
            <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div class="mi-label">${u.verified ? 'Verified ✓' : 'Get Verified'}</div>
          ${!u.verified ? '<span style="font-size:11px;color:var(--o);font-weight:700">Boost trust</span>' : ''}
          <div class="mi-arrow">›</div>
        </div>
      </div>

      <div class="menu-group-label">Preferences</div>
      <div class="menu-items">
        <div class="mi" onclick="H.openInner('NotifSettings')">
          <div class="mi-icon"><svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></div>
          <div class="mi-label">Notifications</div>
          <div class="mi-arrow">›</div>
        </div>
        <div class="mi" onclick="H.openInner('LanguageSettings')">
          <div class="mi-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
          <div class="mi-label">Language</div>
          <div class="mi-arrow">›</div>
        </div>
        <div class="mi" onclick="H.openInner('PrivacySettings')">
          <div class="mi-icon"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
          <div class="mi-label">Privacy Policy</div>
          <div class="mi-arrow">›</div>
        </div>
        <div class="mi" onclick="H.openInner('HelpTerms')">
          <div class="mi-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
          <div class="mi-label">Terms of Service</div>
          <div class="mi-arrow">›</div>
        </div>
        <div class="mi" onclick="H.openInner('About')">
          <div class="mi-icon green-ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
          <div class="mi-label">About PaMarket</div>
          <div class="mi-arrow">›</div>
        </div>
        ${u.role === 'admin' ? `
        <div class="mi" onclick="H.navTo('Admin',null)">
          <div class="mi-icon amber-ic"><svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div>
          <div class="mi-label">Admin Panel</div>
          <div class="mi-arrow">›</div>
        </div>` : ''}
      </div>

      <div class="menu-group-label">Danger Zone</div>
      <div class="menu-items" style="padding-bottom:90px">
        <div class="mi" onclick="H.logOut()">
          <div class="mi-icon red-ic"><svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg></div>
          <div class="mi-label red-lbl">Sign Out</div>
        </div>
        <div class="mi" onclick="H.openInner('DeleteAccount')">
          <div class="mi-icon red-ic"><svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg></div>
          <div class="mi-label red-lbl">Delete Account</div>
        </div>
      </div>
    </div>`;
  };

  pages.MyListings = function () {
    const u    = currentUser();
    const list = (state.listings || []).filter(l => l.sellerId === u.id).sort((a, b) => b.createdAt - a.createdAt);

    return `<div class="page active">${innerTopbar('My Listings')}
      <div style="padding-bottom:90px">
        ${list.length ? list.map(l => {
          const statusClass = l.status === 'active' ? 'status-active' : l.status === 'banned' ? 'status-banned' : 'status-pending';
          return `<div class="my-listing-card">
            <div class="ml-thumb">
              ${l.photos && l.photos[0] ? `<img src="${l.photos[0]}">` : (CATEGORIES.find(c => c.id === l.cat) || {}).icon || '📦'}
            </div>
            <div class="ml-body">
              <div class="ml-title">${escHtml(l.title)}</div>
              <div class="ml-price">${escHtml(fmtPrice(l.price, l.currency))}</div>
              <div class="ml-meta">
                <span class="status-pill ${statusClass}">${l.status}</span>
                · ${l.views || 0} views · ${timeAgo(l.createdAt)}
              </div>
              <div class="ml-actions">
                <button class="ml-act-btn" onclick="H.openListing('${l.id}')">View</button>
                <button class="ml-act-btn" onclick="H.openInner('Boost',{listingId:'${l.id}'})">⚡ Boost</button>
                ${l.status === 'active'
                  ? `<button class="ml-act-btn red" onclick="H.deleteListing('${l.id}')">Delete</button>`
                  : ''}
              </div>
            </div>
          </div>`;
        }).join('') : emptyState('No listings yet', 'Your posted ads will appear here.', 'Post an Ad', "H.navTo('Post',null)")}
      </div>
    </div>`;
  };

  H.logOut = function () {
    modal({
      title: 'Sign out?', body: 'You will be returned to the login screen.',
      confirmText: 'Sign Out',
      onConfirm: async () => {
        try {
          var sc = window.supabase;
          if (sc && sc.auth && typeof sc.auth.signOut === 'function') {
            await sc.auth.signOut();
          }
        } catch (e) {}
        state.currentUserId = null;
        state.adminSession = null;
        saveState();
        try { sessionStorage.clear(); } catch (e) {}
        location.reload();
      }
    });
  };

})(window.H);
