/*!
 * PaMarket — Zimbabwe's Free Marketplace
 * © 2026 PaMarket. All rights reserved.
 * Unauthorised copying, modification, distribution or use of this
 * software without written permission from the owner is strictly prohibited.
 */
'use strict';
(function (H) {
  const pages = H.pages;

  pages.Account = function () {
    const u = H.currentUser();
    if (!u) return H.guestAccountPage();
    return pages.AccountHub();
  };

  // ── Account Hub ───────────────────────────────────────────
  // A full-screen version of the account centre, reachable via
  // H.openInner('AccountHub') if needed; the bottom-nav tab still
  // opens the compact sheet via H.showAccountMenu().
  pages.AccountHub = function () {
    const u = H.currentUser();
    if (!u) {
      return `<div class="page active">
        ${H.innerTopbar('Account')}
        ${H.emptyState('Not signed in', 'Sign in to manage your account.', 'Sign In', 'H.authPage()')}
      </div>`;
    }

    const activeAds = (H.state.listings || []).filter(l => l.sellerId === u.id && l.status === 'active').length;
    const savedAds  = ((H.state.saves || {})[u.id] || []).length;
    const unread    = (H.state.conversations || []).reduce((n, c) =>
      c.members.includes(u.id) ? n + (c.messages || []).filter(m => m.from !== u.id && !m.read).length : n, 0);

    const row = (icon, label, page, badge) => `
      <div onclick="H.openInner('${page}')"
          style="display:flex;align-items:center;gap:14px;padding:14px 18px;background:var(--card);border-bottom:1px solid var(--border);cursor:pointer;-webkit-tap-highlight-color:transparent">
        <div style="width:38px;height:38px;border-radius:12px;background:#1A3A8F14;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#1A3A8F">${icon}</div>
        <div style="flex:1;font-size:15px;font-weight:600;color:var(--text)">${label}</div>
        ${badge ? `<span style="background:#F5A623;color:#1A3A8F;border-radius:10px;padding:2px 8px;font-size:11px;font-weight:800">${badge}</span>` : ''}
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--sub)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
      </div>`;

    return `<div class="page active">
      ${H.innerTopbar('Account')}

      <!-- Profile Hero -->
      <div style="background:linear-gradient(135deg,#1A3A8F 0%,#2952cc 100%);padding:24px 20px 28px;display:flex;align-items:center;gap:16px">
        <div style="width:64px;height:64px;border-radius:50%;overflow:hidden;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:24px;font-weight:800;color:#fff;border:2.5px solid rgba(255,255,255,.4)">
          ${u.avatar ? `<img src="${H.escHtml(u.avatar)}" style="width:100%;height:100%;object-fit:cover">` : H.initials(u.name)}
        </div>
        <div style="flex:1;min-width:0">
          <div style="font-size:18px;font-weight:800;color:#fff;margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${H.escHtml(u.name || 'User')}</div>
          <div style="font-size:13px;color:rgba(255,255,255,.8);margin-bottom:3px">${H.escHtml(u.email || '')}</div>
          <div style="font-size:12px;color:rgba(255,255,255,.65)">${H.escHtml(u.phone || 'No phone number')}</div>
        </div>
        ${u.verified ? '<span style="background:#22C55E;color:#fff;font-size:10px;font-weight:700;padding:3px 8px;border-radius:20px;flex-shrink:0">✓ Verified</span>' : ''}
      </div>

      <!-- Quick Stats -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);background:var(--card);border-bottom:1px solid var(--border)">
        ${[['Active Ads', activeAds, "H.openInner('MyListings')"], ['Saved', savedAds, "H.openInner('Favorites')"], ['Messages', unread || 0, "H.navTo('Messages')"]].map(([l, v, fn]) => `
          <div onclick="${fn}" style="padding:16px 8px;text-align:center;cursor:pointer;border-right:1px solid var(--border)">
            <div style="font-size:22px;font-weight:800;color:#1A3A8F">${v}</div>
            <div style="font-size:11px;color:var(--sub);font-weight:500;margin-top:2px">${l}</div>
          </div>`).join('')}
      </div>

      <!-- Menu Rows -->
      <div style="margin-top:12px">
        ${row('<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>', 'My Profile', 'Profile', '')}
        ${row('<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/></svg>', 'Edit Profile', 'EditProfile', '')}
        ${row('<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>', 'My Listings', 'MyListings', activeAds || '')}
        ${row('<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>', 'Saved & Favorites', 'Favorites', savedAds || '')}
        ${row('<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="13" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>', 'My Job Applications', 'AppliedJobs', ((H.state.applications||[]).filter(a=>a.applicantId===u.id).length || ''))}
        ${row('<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>', 'My Job Profile / CV', 'JobSeekerProfile', u.cv && u.cv.headline ? '✓' : '')}
        ${row('<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>', 'Wallet & Payments', 'Wallet', '')}
      </div>

      <div style="margin-top:12px">
        ${row('<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>', 'Settings', 'Settings', '')}
        ${row('<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', 'Security & Password', 'SecuritySettings', '')}
        ${row('<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>', 'Help & Support', 'Help', '')}
      </div>

      <div style="padding:20px 16px 36px">
        <button onclick="H.logout()" style="width:100%;padding:14px;background:#FFF1F0;color:#EF4444;border:1.5px solid #FECACA;border-radius:14px;font-size:15px;font-weight:700;cursor:pointer;font-family:Inter,sans-serif">
          Sign Out
        </button>
        <div style="text-align:center;margin-top:20px;font-size:11px;color:var(--sub);line-height:1.8">
          © ${new Date().getFullYear()} PaMarket · Made in Zimbabwe 🇿🇼<br>
          <span style="font-size:10px;color:var(--sub2,#bbb)">All rights reserved · <span onclick="H.openInner('HelpTerms')" style="cursor:pointer;text-decoration:underline">Terms</span> · <span onclick="H.openInner('HelpPrivacy')" style="cursor:pointer;text-decoration:underline">Privacy</span></span>
        </div>
      </div>
    </div>`;
  };

})(window.H = window.H || {});
