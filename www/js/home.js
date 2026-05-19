'use strict';
(function (H) {
  const { escHtml, timeAgo, filterListings, renderListCard, renderFeatCard, CATEGORIES, ICONS } = H;

  let searchTimer;
  function debounce(fn, delay) {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(fn, delay);
  }

  const CAT_COLORS = {
    vehicles:'#e53935',property:'#1E88E5',electronics:'#8E24AA',
    fashion:'#F06292',furniture:'#6D4C41',services:'#00897B',
    jobs:'#F5A623',rooms:'#00838F',other:'#546E7A',
    agriculture:'#558B2F',pets:'#FB8C00',kids:'#E91E63',
  };

  H.pages.Home = function () {
    const u = H.currentUser();
    const unreadNotifs = u ? (H.state.notifs[u.id] || []).filter(n => !n.read).length : 0;
    const unreadMsgs   = u ? (H.state.conversations || []).filter(cv =>
      cv.members.includes(u.id) && cv.messages.some(m => m.from !== u.id && !m.read)).length : 0;
    const activeListings = (H.state.listings || []).filter(l => l.status === 'active');
    const filtered       = filterListings(activeListings);
    const featured       = filtered.filter(l => l.boost && l.boost.until > Date.now()).slice(0, 6);

    const catSections = CATEGORIES.map(c => ({
      ...c, items: filtered.filter(l => l.cat === c.id).slice(0, 10)
    })).filter(s => s.items.length > 0);

    return `<div class="page active" style="background:var(--bg)">

      <!-- HEADER -->
      <div style="background:#1A3A8F;padding-bottom:16px;position:sticky;top:0;z-index:100;box-shadow:0 2px 12px rgba(26,58,143,0.3)">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px 0">
          <div onclick="H.logoTap()" style="display:flex;align-items:center;gap:8px;cursor:pointer">
            <img src="img/icon-192.png" alt="" style="width:32px;height:32px;border-radius:8px">
            <span style="font-size:22px;font-weight:900;color:#fff;letter-spacing:-0.5px;font-family:Inter,sans-serif">Pa<em style="font-style:normal;color:#F5A623">Market</em></span>
          </div>
          <div style="display:flex;gap:6px">
            <div onclick="H.currentUser()?H.openInner('Notifications'):H.requireAuth('Sign in to view notifications')"
              style="position:relative;width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;cursor:pointer">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              <span data-notif-badge style="position:absolute;top:4px;right:4px;background:#F5A623;color:#1A3A8F;border-radius:50%;min-width:16px;height:16px;font-size:9px;font-weight:900;display:${unreadNotifs ? 'flex' : 'none'};align-items:center;justify-content:center;padding:0 2px">${unreadNotifs > 9 ? '9+' : unreadNotifs}</span>
            </div>
            <div onclick="H.currentUser()?H.openInner('Messages'):H.requireAuth('Sign in to view messages')"
              style="position:relative;width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;cursor:pointer">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              ${unreadMsgs ? `<span style="position:absolute;top:4px;right:4px;background:#F5A623;color:#1A3A8F;border-radius:50%;min-width:16px;height:16px;font-size:9px;font-weight:900;display:flex;align-items:center;justify-content:center;padding:0 2px">${unreadMsgs > 9 ? '9+' : unreadMsgs}</span>` : ''}
            </div>
          </div>
        </div>

        <div onclick="H.toggleCityPicker()" style="display:inline-flex;align-items:center;gap:5px;padding:8px 16px 10px;cursor:pointer">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span style="font-size:13px;color:rgba(255,255,255,0.9);font-weight:600">${escHtml(H.state.cityFilter)}</span>
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </div>

        <div style="margin:0 16px;background:#fff;border-radius:14px;display:flex;align-items:center;padding:0 12px;gap:8px;box-shadow:0 4px 20px rgba(0,0,0,0.18)">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#999" stroke-width="2.5" style="flex-shrink:0"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input id="searchIn" placeholder="Search cars, houses, jobs..."
            oninput="H.onSearch()" autocomplete="off"
            style="flex:1;border:none;outline:none;padding:14px 0;font-size:15px;font-family:Inter,sans-serif;color:#222;background:transparent">
          <button onclick="document.getElementById('searchIn').value='';H.onSearch()"
            style="background:none;border:none;padding:6px;cursor:pointer;color:#ccc;display:flex;align-items:center;flex-shrink:0">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>

      <div style="padding-bottom:88px">
        ${catSections.length ? catSections.map(s => `
          <div style="padding:20px 0 0">
            <div style="display:flex;align-items:center;justify-content:space-between;padding:0 16px;margin-bottom:12px">
              <div style="display:flex;align-items:center;gap:8px">
                <span style="font-size:20px">${s.icon}</span>
                <span style="font-size:16px;font-weight:800;color:var(--text)">Latest in ${s.name}</span>
              </div>
              <span onclick="H.filterByCat('${s.id}')" style="font-size:13px;font-weight:600;color:#1A3A8F;cursor:pointer">See all</span>
            </div>
          </div>
        `).join('') : ''}
      </div>
    </div>`;
  };

  H.onSearch = function () {
    debounce(() => {
      const q      = document.getElementById('searchIn')?.value || '';
      const catDiv = document.getElementById('catSections');
      const srDiv  = document.getElementById('searchResults');
      const srList = document.getElementById('searchResultsList');
      if (!catDiv || !srDiv || !srList) return;
      if (!q.trim()) { catDiv.style.display = ''; srDiv.style.display = 'none'; return; }
      catDiv.style.display = 'none'; srDiv.style.display = '';
      const results = filterListings((H.state.listings || []).filter(l => l.status === 'active'), q);
      srList.innerHTML = results.length
        ? results.map(l => `<div>${renderListCard(l)}</div>`).join('')
        : H.emptyState('No matches', 'Try different keywords', null, null);
    }, 300);
  };

  H.pages.Home_after = function () {
    if (typeof H.fetchListingsFromSupabase !== 'function') return;
    H.fetchListingsFromSupabase().catch(() => {});
  };

  H.toggleCityPicker = function () {
    const picker = document.getElementById('cityPicker');
    if (picker) picker.classList.toggle('open');
  };

  H.pickCity = function (c) {
    H.state.cityFilter = c;
    H.saveState();
    const picker = document.getElementById('cityPicker');
    if (picker) picker.classList.remove('open');
    H.renderPage('Home');
  };

})(window.H);