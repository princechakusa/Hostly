'use strict';
(function (H) {
  const pages = H.pages;
  const getState = () => H.state || {};
  const { currentUser, escHtml, timeAgo, uid, toast, modal, innerTopbar, emptyState, openInner, saveState, fmtPrice, initials, pushNotif, renderPage } = H;

  const S = {
    deny:     '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>',
    eye:      '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    ban:      '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>',
    unban:    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',
    verify:   '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',
    approve:  '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
    reject:   '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    delete:   '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
    suspend:  '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="8 12 12 12 16 12"/></svg>',
    restore:  '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>',
    edit:     '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/></svg>',
    download: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    trash:    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
    reload:   '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
    lock:     '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    wallet:   '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
    settings: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    support:  '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    broadcast:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>',
    admin:    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
  };

  if (!H.state.adminLogs) H.state.adminLogs = [];

  let _adminTab = 'overview';

  // ── ADMIN LOG HELPER ──────────────────────────────────────
  function alog(action) {
    H.state.adminLogs.unshift({ action, adminName: currentUser().name, t: Date.now() });
  }

  // ── MAIN PAGE ─────────────────────────────────────────────
  pages.Admin = function () {
    const u = currentUser();
    if (u.role !== 'admin') return `<div class="page active">${innerTopbar('Admin')}
      <div class="empty-state"><div class="empty-icon">${S.deny}</div><div class="empty-title">Access Denied</div></div>
    </div>`;

    const tabs = [
      ['overview',      'Overview'],
      ['users',         `Users (${(H.state.users||[]).length})`],
      ['listings',      `Listings (${(H.state.listings||[]).length})`],
      ['reports',       `Reports (${(H.state.reports||[]).filter(r=>r.status==='open').length})`],
      ['payments',      'Payments'],
      ['settings',      'Settings'],
      ['notifications', 'Notify'],
      ['support',       `Support (${(H.state.supportTickets||[]).filter(t=>t.status!=='closed').length})`],
      ['logs',          `Logs (${(H.state.adminLogs||[]).length})`]
    ];

    return `<div class="page active">${innerTopbar('Admin Panel')}
      <div style="display:flex;gap:6px;padding:12px 12px 10px;overflow-x:auto;scrollbar-width:none">
        ${tabs.map(([k,l]) => `<button class="admin-tab ${_adminTab===k?'on':''}" data-tab="${k}" onclick="H._admin.setTab('${k}')">${l}</button>`).join('')}
      </div>
      <div class="inner-content" style="padding-top:0" id="adminBody">${renderBody()}</div>
    </div>`;
  };

  function renderBody() {
    switch (_adminTab) {
      case 'overview':      return renderOverview();
      case 'users':         return renderUsers();
      case 'listings':      return renderListings();
      case 'reports':       return renderReports();
      case 'payments':      return renderPayments();
      case 'settings':      return renderSettings();
      case 'notifications': return renderNotifications();
      case 'support':       return renderSupport();
      case 'logs':          return renderLogs();
      default: return '';
    }
  }

  // ── OVERVIEW ──────────────────────────────────────────────
  function renderOverview() {
    const users    = H.state.users || [];
    const listings = H.state.listings || [];
    const reports  = H.state.reports || [];
    const txns     = H.state.txns || [];
    const revenue  = txns.filter(t=>t.type==='boost').reduce((s,t)=>s+Math.abs(t.amt),0);
    return `
      <div class="stats" style="margin:0 0 10px">
        <div class="stat"><div class="stat-n">${users.length}</div><div class="stat-l">Total Users</div></div>
        <div class="stat"><div class="stat-n">${users.filter(u=>u.verified).length}</div><div class="stat-l">Verified</div></div>
        <div class="stat"><div class="stat-n">${users.filter(u=>u.status!=='active').length}</div><div class="stat-l">Banned</div></div>
      </div>
      <div class="stats" style="margin:0 0 14px">
        <div class="stat"><div class="stat-n">${listings.filter(l=>l.status==='active').length}</div><div class="stat-l">Active Ads</div></div>
        <div class="stat"><div class="stat-n">${listings.filter(l=>l.status==='pending').length}</div><div class="stat-l">Pending</div></div>
        <div class="stat"><div class="stat-n">$${revenue.toFixed(0)}</div><div class="stat-l">Revenue</div></div>
      </div>
      <div class="section-card" style="padding:14px">
        <div class="menu-group-label" style="padding:0 0 10px">Open Reports: ${reports.filter(r=>r.status==='open').length}</div>
        <div class="menu-group-label" style="padding:0 0 10px">Open Tickets: ${(H.state.supportTickets||[]).filter(t=>t.status!=='closed').length}</div>
        <div class="menu-group-label" style="padding:0">Total Transactions: ${txns.length}</div>
      </div>`;
  }

  // ── USERS ─────────────────────────────────────────────────
  function userRow(u) {
    const listings = (H.state.listings||[]).filter(l=>l.sellerId===u.id);
    const status = u.status==='active'
      ? `<span class="status-pill status-active">Active</span>`
      : u.status==='banned_temp'
        ? `<span class="status-pill status-pending">Suspended</span>`
        : `<span class="status-pill status-banned">Banned</span>`;
    return `<div class="admin-row">
      <div class="admin-row-head">
        <div class="admin-row-name">${escHtml(u.name)} ${u.role==='admin'?'👑':''} ${u.verified?'✓':''}</div>
        ${status}
      </div>
      <div class="admin-row-meta">${escHtml(u.email||'no email')} · ${escHtml(u.phone||'no phone')} · ${listings.length} listings · Joined ${new Date(u.joinedAt||u.createdAt||Date.now()).toLocaleDateString()}</div>
      <div class="admin-actions">
        ${u.status==='active' ? `
          <button class="ml-act-btn" onclick="H._admin.banUser('${u.id}','temp')">${S.suspend} Suspend</button>
          <button class="ml-act-btn red" onclick="H._admin.banUser('${u.id}','perm')">${S.ban} Ban</button>
        ` : `<button class="ml-act-btn" onclick="H._admin.unban('${u.id}')">${S.unban} Unban</button>`}
        ${!u.verified?`<button class="ml-act-btn" onclick="H._admin.verifyUser('${u.id}')">${S.verify} Verify</button>`:''}
        ${u.role!=='admin'?`<button class="ml-act-btn" onclick="H._admin.makeAdmin('${u.id}')">${S.admin} Make Admin</button>`:''}
        ${u.id!==currentUser().id?`<button class="ml-act-btn red" onclick="H._admin.deleteUser('${u.id}')">${S.delete} Delete</button>`:''}
      </div>
    </div>`;
  }

  function renderUsers() {
    return `<input class="fi" placeholder="Search users..." oninput="H._admin.filterUsers(this.value)" style="margin-bottom:10px">
      <div id="adminUsersList">${(H.state.users||[]).map(userRow).join('')}</div>`;
  }

  // ── LISTINGS ──────────────────────────────────────────────
  function listingRow(l) {
    const seller = (H.state.users||[]).find(u=>u.id===l.sellerId)||{name:'?'};
    const statusClass = l.status==='active'?'status-active':l.status==='pending'?'status-pending':'status-banned';
    return `<div class="admin-row">
      <div class="admin-row-head">
        <div class="admin-row-name">${escHtml(l.title)}</div>
        <span class="status-pill ${statusClass}">${l.status}</span>
      </div>
      <div class="admin-row-meta">${escHtml(fmtPrice(l.price,l.currency))} · ${escHtml(l.city||'')} · by ${escHtml(seller.name)} · ${new Date(l.createdAt).toLocaleDateString()}</div>
      <div class="admin-actions">
        <button class="ml-act-btn" onclick="H.openListing('${l.id}')">${S.eye} View</button>
        ${l.status==='pending'?`
          <button class="ml-act-btn" onclick="H._admin.approveListing('${l.id}')">${S.approve} Approve</button>
          <button class="ml-act-btn red" onclick="H._admin.rejectListing('${l.id}')">${S.reject} Reject</button>
        `:''}
        ${l.status==='active'?`<button class="ml-act-btn red" onclick="H._admin.banListing('${l.id}')">${S.ban} Remove</button>`:''}
        ${l.status!=='active'&&l.status!=='pending'?`<button class="ml-act-btn" onclick="H._admin.restoreListing('${l.id}')">${S.restore} Restore</button>`:''}
      </div>
    </div>`;
  }

  function renderListings() {
    const all      = H.state.listings||[];
    const pending  = all.filter(l=>l.status==='pending').length;
    const active   = all.filter(l=>l.status==='active').length;
    const rejected = all.filter(l=>l.status==='rejected').length;
    const banned   = all.filter(l=>l.status==='banned').length;
    return `
      <input class="fi" placeholder="Search listings..." oninput="H._admin.filterListings(this.value)" style="margin-bottom:10px">
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px">
        <button class="admin-tab on" data-lstatus="all" onclick="H._admin.filterListingsByStatus('all')">All (${all.length})</button>
        <button class="admin-tab" data-lstatus="pending" onclick="H._admin.filterListingsByStatus('pending')">Pending (${pending})</button>
        <button class="admin-tab" data-lstatus="active" onclick="H._admin.filterListingsByStatus('active')">Active (${active})</button>
        <button class="admin-tab" data-lstatus="rejected" onclick="H._admin.filterListingsByStatus('rejected')">Rejected (${rejected})</button>
        <button class="admin-tab" data-lstatus="banned" onclick="H._admin.filterListingsByStatus('banned')">Removed (${banned})</button>
      </div>
      <div id="adminLList">${all.slice().sort((a,b)=>b.createdAt-a.createdAt).map(listingRow).join('')}</div>`;
  }

  // ── REPORTS ───────────────────────────────────────────────
  function renderReports() {
    const list = [...(H.state.reports||[])].sort((a,b)=>b.t-a.t);
    if (!list.length) return emptyState('No reports','All clear!',null,null);
    return list.map(r => {
      let target = '', actions = '';
      if (r.targetType==='listing') {
        const l = (H.state.listings||[]).find(x=>x.id===r.targetId);
        target = l ? `Listing: ${escHtml(l.title)}` : '(deleted listing)';
        if (l) actions = `
          <button class="ml-act-btn" onclick="H.openListing('${l.id}')">${S.eye} View</button>
          <button class="ml-act-btn red" onclick="H._admin.banListing('${l.id}','${r.id}')">${S.ban} Remove</button>`;
      } else {
        const u = (H.state.users||[]).find(x=>x.id===r.targetId);
        target = u ? `User: ${escHtml(u.name)}` : '(deleted user)';
        if (u) actions = `
          <button class="ml-act-btn" onclick="H._admin.banUser('${u.id}','temp','${r.id}')">${S.suspend} Suspend</button>
          <button class="ml-act-btn red" onclick="H._admin.banUser('${u.id}','perm','${r.id}')">${S.ban} Ban</button>
          ${u.status!=='active'?`<button class="ml-act-btn" onclick="H._admin.unban('${u.id}','${r.id}')">${S.unban} Unban</button>`:''}`;
      }
      return `<div class="admin-row" style="${r.status==='resolved'?'opacity:.55':''}">
        <div class="admin-row-head">
          <div class="admin-row-name">${target}</div>
          <span class="status-pill ${r.status==='open'?'status-pending':'status-active'}">${r.status}</span>
        </div>
        <div class="admin-row-meta">${escHtml(r.reason||r.description||'No reason given')} · ${new Date(r.t||r.createdAt||Date.now()).toLocaleDateString()}</div>
        <div class="admin-actions">
          ${actions}
          ${r.status==='open'?`<button class="ml-act-btn" onclick="H._admin.resolveReport('${r.id}')">${S.approve} Resolve</button>`:''}
        </div>
      </div>`;
    }).join('');
  }

  // ── PAYMENTS ──────────────────────────────────────────────
  function renderPayments() {
    const txns = [...(H.state.txns||[])].sort((a,b)=>b.t-a.t).slice(0,50);
    const revenue = txns.filter(t=>t.type==='boost').reduce((s,t)=>s+Math.abs(t.amt),0);
    const topups  = txns.filter(t=>t.type==='topup').reduce((s,t)=>s+Math.abs(t.amt),0);
    return `
      <div class="stats" style="margin:0 0 14px">
        <div class="stat"><div class="stat-n">$${revenue.toFixed(2)}</div><div class="stat-l">Boost Revenue</div></div>
        <div class="stat"><div class="stat-n">$${topups.toFixed(2)}</div><div class="stat-l">Total Top-ups</div></div>
        <div class="stat"><div class="stat-n">${txns.length}</div><div class="stat-l">Transactions</div></div>
      </div>
      <div class="section-card">
        ${txns.length ? txns.map(t => `
          <div class="tx-item">
            <div class="tx-icon ${t.type==='topup'?'green':t.type==='boost'?'amber':'red'}">${t.type==='topup'?'↓':t.type==='boost'?'⚡':'↑'}</div>
            <div class="tx-body">
              <div class="tx-title">${escHtml(t.note||t.type)}</div>
              <div class="tx-date">${new Date(t.t).toLocaleString()}</div>
            </div>
            <div class="tx-amount ${t.amt>=0?'plus':'minus'}">${t.amt>=0?'+':''}$${Math.abs(t.amt).toFixed(2)}</div>
          </div>`).join('')
        : '<div style="padding:24px;text-align:center;color:var(--ash)">No transactions yet</div>'}
      </div>`;
  }

  // ── SETTINGS ──────────────────────────────────────────────
  function renderSettings() {
    const tog = (key, label, sub) => `
      <div class="notif-toggle-row">
        <div class="notif-toggle-info">
          <div class="notif-toggle-title">${label}</div>
          <div class="notif-toggle-sub">${sub}</div>
        </div>
        <button class="toggle-sw ${state[key]?'on':''}" onclick="H._admin.toggleSetting('${key}')"></button>
      </div>`;
    return `<div class="section-card" style="padding:14px">
      <div class="menu-group-label" style="padding:0 0 10px">Listing Moderation</div>
      ${tog('requireListingApproval','Require listing approval','New ads start as pending before going live')}
      ${tog('autoApproveVerified','Auto-approve verified sellers','Skip moderation for verified users')}
      ${tog('allowImageUploads','Allow image uploads','Users can upload photos with listings')}
      <div class="menu-group-label" style="padding:16px 0 10px">Security & Access</div>
      ${tog('signupPaused','Pause new registrations','Temporarily disable new account signup')}
      ${tog('requirePhoneVerification','Require phone verification','Users must verify phone to post')}
      <div class="menu-group-label" style="padding:16px 0 10px">Monetization</div>
      ${tog('enablePremiumListings','Enable premium listings','Allow users to boost their listings')}
      ${tog('freeOnly','Free listings only','Disable all paid features')}
      <div class="menu-group-label" style="padding:16px 0 10px">System</div>
      <button class="btn-pri" style="margin-bottom:8px" onclick="H._admin.exportData()">${S.download} Export All Data</button>
      <button class="btn-sec" style="margin-bottom:8px" onclick="H._admin.clearOldData()">${S.trash} Clear Old Data (30+ days)</button>
      <button class="btn-sec" style="background:var(--red2);color:var(--red);border-color:rgba(192,57,43,.2)" onclick="H._admin.resetApp()">${S.reload} Reset App (Dangerous)</button>
    </div>`;
  }

  // ── NOTIFICATIONS ─────────────────────────────────────────
  function renderNotifications() {
    return `<div class="section-card" style="padding:14px">
      <div class="menu-group-label" style="padding:0 0 14px">Send to all users</div>
      <div class="fg">
        <div class="fl">Notification Title</div>
        <input class="fi" id="bcastTitle" placeholder="e.g. New feature available">
      </div>
      <div class="fg">
        <div class="fl">Message</div>
        <textarea class="fi" rows="4" id="bcastMsg" placeholder="Write your message to all users..."></textarea>
      </div>
      <button class="btn-pri" onclick="H._admin.broadcast()">${S.broadcast} Send Broadcast</button>
    </div>`;
  }

  // ── SUPPORT ───────────────────────────────────────────────
  function renderSupport(filter) {
    const tickets = (H.state.supportTickets||[]);
    const f = filter || 'all';
    const filtered = f==='open' ? tickets.filter(t=>t.status!=='closed')
                   : f==='closed' ? tickets.filter(t=>t.status==='closed') : tickets;
    return `
      <div style="display:flex;gap:6px;margin-bottom:10px">
        <button class="admin-tab ${f==='all'?'on':''}" onclick="H._admin.filterTickets('all')">All (${tickets.length})</button>
        <button class="admin-tab ${f==='open'?'on':''}" onclick="H._admin.filterTickets('open')">Open (${tickets.filter(t=>t.status!=='closed').length})</button>
        <button class="admin-tab ${f==='closed'?'on':''}" onclick="H._admin.filterTickets('closed')">Closed (${tickets.filter(t=>t.status==='closed').length})</button>
      </div>
      <div id="ticketsList">
        ${filtered.length ? filtered.map(t => {
          const u = (H.state.users||[]).find(x=>x.id===t.userId)||{name:'Unknown'};
          return `<div class="admin-row" style="${t.status==='closed'?'opacity:.6':''}">
            <div class="admin-row-head">
              <div class="admin-row-name">${escHtml(t.subject||'Support ticket')}</div>
              <span class="status-pill ${t.status==='open'?'status-pending':t.status==='in-progress'?'status-active':'status-active'}">${t.status}</span>
            </div>
            <div class="admin-row-meta">${escHtml(u.name)} · ${new Date(t.createdAt||Date.now()).toLocaleDateString()}</div>
            ${t.message?`<div style="font-size:13px;color:var(--charcoal-soft);padding:8px 0;border-top:1px solid var(--linen-dark);margin-top:6px">${escHtml(t.message)}</div>`:''}
            ${(t.replies||[]).map(r=>`<div style="background:var(--linen);border-radius:8px;padding:8px 10px;margin-top:6px;font-size:12px"><strong>Admin:</strong> ${escHtml(r.text)}</div>`).join('')}
            <div class="admin-actions" style="margin-top:8px">
              ${t.status!=='closed'?`
                <button class="ml-act-btn" onclick="H._admin.respondToTicket('${t.id}')">${S.support} Respond</button>
                <button class="ml-act-btn" onclick="H._admin.updateTicketStatus('${t.id}','in-progress')">In Progress</button>
                <button class="ml-act-btn" onclick="H._admin.updateTicketStatus('${t.id}','closed')">${S.approve} Close</button>
              `:`<button class="ml-act-btn" onclick="H._admin.reopenTicket('${t.id}')">${S.reload} Reopen</button>`}
            </div>
          </div>`;
        }).join('') : '<div style="padding:24px;text-align:center;color:var(--ash)">No tickets</div>'}
      </div>`;
  }

  // ── LOGS ──────────────────────────────────────────────────
  function renderLogs() {
    const logs = (H.state.adminLogs||[]).slice(0,50);
    return `
      <div style="display:flex;justify-content:flex-end;margin-bottom:8px">
        <button class="ml-act-btn red" onclick="H._admin.clearLogs()">${S.trash} Clear Logs</button>
      </div>
      <div class="section-card">
        ${logs.length ? logs.map(l=>`
          <div style="padding:10px 14px;border-bottom:1px solid var(--linen-dark)">
            <div style="font-size:13px;font-weight:500;color:var(--charcoal)">${escHtml(l.action)}</div>
            <div style="font-size:11px;color:var(--ash);margin-top:2px">${escHtml(l.adminName||'Admin')} · ${new Date(l.t).toLocaleString()}</div>
          </div>`).join('')
        : '<div style="padding:24px;text-align:center;color:var(--ash)">No logs yet</div>'}
      </div>`;
  }

  // ── ADMIN ACTIONS ─────────────────────────────────────────
  H._admin = {
    setTab(t) {
      _adminTab = t;
      document.querySelectorAll('[data-tab]').forEach(b => b.classList.toggle('on', b.dataset.tab===t));
      const body = document.getElementById('adminBody');
      if (body) body.innerHTML = renderBody();
    },

    filterUsers(q) {
      const ql = q.toLowerCase();
      const el = document.getElementById('adminUsersList');
      if (el) el.innerHTML = (H.state.users||[]).filter(u=>(u.name+u.email+u.phone).toLowerCase().includes(ql)).map(userRow).join('');
    },

    filterListings(q) {
      const ql = q.toLowerCase();
      const el = document.getElementById('adminLList');
      if (el) el.innerHTML = (H.state.listings||[]).filter(l=>(l.title+l.city).toLowerCase().includes(ql)).sort((a,b)=>b.createdAt-a.createdAt).map(listingRow).join('');
    },

    filterListingsByStatus(status) {
      const el = document.getElementById('adminLList');
      if (!el) return;
      const list = (H.state.listings||[]).filter(l=>status==='all'?true:l.status===status);
      el.innerHTML = list.sort((a,b)=>b.createdAt-a.createdAt).map(listingRow).join('');
      document.querySelectorAll('[data-lstatus]').forEach(b=>b.classList.toggle('on',b.dataset.lstatus===status));
    },

    filterTickets(f) {
      const body = document.getElementById('adminBody');
      if (body) body.innerHTML = renderSupport(f);
    },

    banUser(uid_, type, reportId) {
      modal({
        title: type==='perm' ? 'Permanently Ban User' : 'Suspend User 7 Days',
        body: '<div class="fl">Reason</div><input class="fi" id="banReason" placeholder="Enter reason for action">',
        confirmText: type==='perm' ? 'Ban Permanently' : 'Suspend 7 Days',
        onConfirm: () => {
          const reason = document.getElementById('banReason')?.value || 'Policy violation';
          const u = (H.state.users||[]).find(x=>x.id===uid_); if (!u) return;
          u.status = type==='perm' ? 'banned' : 'banned_temp';
          u.banReason = reason;
          if (type==='temp') u.banUntil = Date.now() + 7*86400000;
          if (reportId) { const r=(H.state.reports||[]).find(x=>x.id===reportId); if(r) r.status='resolved'; }
          alog(`${type==='perm'?'Banned':'Suspended'}: ${u.name} — ${reason}`);
          saveState(); toast(`User ${type==='perm'?'banned':'suspended'}`);
          this.setTab('users');
        }
      });
    },

    unban(uid_, reportId) {
      const u = (H.state.users||[]).find(x=>x.id===uid_); if (!u) return;
      u.status='active'; u.banReason=null; u.banUntil=null;
      if (reportId) { const r=(H.state.reports||[]).find(x=>x.id===reportId); if(r) r.status='resolved'; }
      alog(`Unbanned: ${u.name}`);
      saveState(); toast('User unbanned'); this.setTab('users');
    },

    deleteUser(uid_) {
      modal({
        title: 'Delete User',
        body: 'This permanently deletes this user and all their listings. Cannot be undone.',
        confirmText: 'Delete User',
        onConfirm: () => {
          const u = (H.state.users||[]).find(x=>x.id===uid_);
          alog(`Deleted user: ${u?u.name:uid_}`);
          H.state.users = (H.state.users||[]).filter(x=>x.id!==uid_);
          H.state.listings = (H.state.listings||[]).filter(x=>x.sellerId!==uid_);
          saveState(); toast('User deleted'); this.setTab('users');
        }
      });
    },

    makeAdmin(uid_) {
      const u = (H.state.users||[]).find(x=>x.id===uid_); if (!u) return;
      modal({
        title: 'Make Admin',
        body: `Give admin access to ${escHtml(u.name)}? They will have full control of the platform.`,
        confirmText: 'Make Admin',
        onConfirm: () => {
          u.role='admin';
          alog(`Made admin: ${u.name}`);
          saveState(); toast(`${u.name} is now an admin`); this.setTab('users');
        }
      });
    },

    verifyUser(uid_) {
      const u = (H.state.users||[]).find(x=>x.id===uid_); if (!u) return;
      u.verified=true; u.verifiedAt=Date.now();
      alog(`Verified: ${u.name}`);
      saveState(); toast(`${u.name} verified`); this.setTab('users');
    },

    approveListing(lid) {
      const l = (H.state.listings||[]).find(x=>x.id===lid); if (!l) return;
      l.status='active';
      pushNotif(l.sellerId,'Listing Approved',`Your listing "${l.title}" is now live!`);
      alog(`Approved listing: ${l.title}`);
      saveState(); toast('Listing approved and live'); this.setTab('listings');
    },

    rejectListing(lid) {
      const l = (H.state.listings||[]).find(x=>x.id===lid); if (!l) return;
      modal({
        title: 'Reject Listing',
        body: '<div class="fl">Reason for rejection</div><input class="fi" id="rejectReason" placeholder="e.g. Misleading content, prohibited item">',
        confirmText: 'Reject Listing',
        onConfirm: () => {
          const reason = document.getElementById('rejectReason')?.value || 'Policy violation';
          l.status='rejected'; l.rejectReason=reason;
          pushNotif(l.sellerId,'Listing Rejected',`Your listing "${l.title}" was rejected: ${reason}`);
          alog(`Rejected listing: ${l.title} — ${reason}`);
          saveState(); toast('Listing rejected'); this.setTab('listings');
        }
      });
    },

    banListing(lid, reportId) {
      const l = (H.state.listings||[]).find(x=>x.id===lid); if (!l) return;
      modal({
        title: 'Remove Listing',
        body: `Remove "${escHtml(l.title)}" from the marketplace? The seller will be notified.`,
        confirmText: 'Remove Listing',
        onConfirm: () => {
          l.status='banned';
          if (reportId) { const r=(H.state.reports||[]).find(x=>x.id===reportId); if(r) r.status='resolved'; }
          pushNotif(l.sellerId,'Listing Removed',`Your listing "${l.title}" was removed for policy violation.`);
          alog(`Removed listing: ${l.title}`);
          saveState(); toast('Listing removed'); this.setTab('listings');
        }
      });
    },

    restoreListing(lid) {
      const l = (H.state.listings||[]).find(x=>x.id===lid); if (!l) return;
      l.status='active';
      alog(`Restored listing: ${l.title}`);
      saveState(); toast('Listing restored'); this.setTab('listings');
    },

    resolveReport(rid) {
      const r = (H.state.reports||[]).find(x=>x.id===rid); if (!r) return;
      r.status='resolved';
      alog(`Resolved report: ${rid}`);
      saveState(); toast('Report resolved'); this.setTab('reports');
    },

    toggleSetting(k) {
      state[k] = !state[k];
      alog(`Toggled setting: ${k} = ${state[k]}`);
      saveState(); toast('Setting updated'); this.setTab('settings');
    },

    broadcast() {
      const title = document.getElementById('bcastTitle')?.value?.trim();
      const msg   = document.getElementById('bcastMsg')?.value?.trim();
      if (!title || !msg) { toast('Enter title and message'); return; }
      (H.state.users||[]).forEach(u => pushNotif(u.id, title, msg));
      alog(`Broadcast sent: ${msg.slice(0,50)}`);
      saveState();
      toast(`Broadcast sent to ${(H.state.users||[]).length} users`);
      document.getElementById('bcastTitle').value = '';
      document.getElementById('bcastMsg').value = '';
    },

    respondToTicket(tid) {
      const t = (H.state.supportTickets||[]).find(x=>x.id===tid); if (!t) return;
      const u = (H.state.users||[]).find(x=>x.id===t.userId)||{name:'User'};
      modal({
        title: `Reply to ${escHtml(u.name)}`,
        body: `<div class="fl">Ticket: ${escHtml(t.subject||'')}</div>
               <div class="fl" style="margin-top:10px">Your Response</div>
               <textarea class="fi" rows="4" id="ticketReply" placeholder="Type your response to the user..."></textarea>`,
        confirmText: 'Send Response',
        onConfirm: () => {
          const reply = document.getElementById('ticketReply')?.value?.trim();
          if (!reply) { toast('Enter a response'); return false; }
          if (!t.replies) t.replies = [];
          t.replies.push({ text: reply, from: 'admin', t: Date.now() });
          t.status = 'in-progress';
          pushNotif(t.userId, 'Support Reply', `Admin replied to: ${t.subject}`);
          alog(`Replied to ticket: ${t.subject}`);
          saveState(); toast('Response sent'); this.filterTickets('all');
        }
      });
    },

    updateTicketStatus(tid, status) {
      const t = (H.state.supportTickets||[]).find(x=>x.id===tid); if (!t) return;
      t.status = status;
      alog(`Ticket ${status}: ${t.subject||tid}`);
      saveState(); toast(`Ticket marked as ${status}`); this.filterTickets('all');
    },

    reopenTicket(tid) {
      const t = (H.state.supportTickets||[]).find(x=>x.id===tid); if (!t) return;
      t.status = 'open';
      alog(`Reopened ticket: ${t.subject||tid}`);
      saveState(); toast('Ticket reopened'); this.filterTickets('all');
    },

    exportData() {
      const data = JSON.stringify(state, null, 2);
      const blob = new Blob([data], {type:'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `hostly-backup-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
      alog('Exported all data');
      saveState(); toast('Data exported');
    },

    clearOldData() {
      modal({
        title: 'Clear Old Data',
        body: 'Delete listings, transactions, and logs older than 30 days. Active listings are kept. Cannot be undone.',
        confirmText: 'Clear Old Data',
        onConfirm: () => {
          const cutoff = Date.now() - 30*86400000;
          const before = (H.state.listings||[]).length;
          H.state.listings  = (H.state.listings||[]).filter(l=>l.createdAt>cutoff||l.status==='active');
          H.state.txns      = (H.state.txns||[]).filter(t=>t.t>cutoff);
          H.state.adminLogs = (H.state.adminLogs||[]).filter(l=>l.t>cutoff);
          H.state.reports   = (H.state.reports||[]).filter(r=>r.t>cutoff||r.status==='open');
          alog(`Cleared old data: ${before-(H.state.listings||[]).length} listings removed`);
          saveState(); toast('Old data cleared'); this.setTab('settings');
        }
      });
    },

    resetApp() {
      modal({
        title: 'Reset App',
        body: '<p style="color:var(--red);font-weight:700;margin-bottom:10px">WARNING: Deletes ALL data including users, listings, and messages. Irreversible.</p><div class="fl">Type RESET to confirm</div><input class="fi" id="resetConfirm" placeholder="Type RESET">',
        confirmText: 'Reset Everything',
        onConfirm: () => {
          if (document.getElementById('resetConfirm')?.value?.trim()!=='RESET') {
            toast('Type RESET to confirm'); return false;
          }
          const admin = currentUser();
          H.state.users = [admin];
          H.state.listings = [];
          H.state.conversations = [];
          H.state.reports = [];
          H.state.txns = [];
          H.state.saves = {};
          H.state.notifs = {};
          H.state.supportTickets = [];
          H.state.adminLogs = [{action:'App reset by admin',adminName:admin.name,t:Date.now()}];
          saveState(); toast('App reset complete'); this.setTab('overview');
        }
      });
    },

    clearLogs() {
      modal({
        title: 'Clear Logs',
        body: 'This will delete all admin logs. Cannot be undone.',
        confirmText: 'Clear Logs',
        onConfirm: () => {
          H.state.adminLogs = [];
          saveState(); toast('Logs cleared'); this.setTab('logs');
        }
      });
    }
  };

})(window.H = window.H || {});


