'use strict';
(function (H) {
  const { escHtml, timeAgo, emptyState, filterListings, renderListCard, renderFeatCard, CATEGORIES, ICONS } = H;

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

  function renderHCard(l) {
    const photo = (l.photos && l.photos[0]) || ('https://picsum.photos/seed/' + l.id + '/300/200');
    const price = l.price ? ('$' + Number(l.price).toLocaleString()) : 'Free';
    const title = escHtml((l.title || '').slice(0, 38));
    const loc   = escHtml(l.suburb || l.city || l.prov || '');
    return `<div onclick="openListing('${l.id}')" style="width:155px;flex-shrink:0;background:var(--card);border-radius:12px;overflow:hidden;border:1px solid var(--border);cursor:pointer;box-shadow:0 1px 6px rgba(0,0,0,0.07)">
      <div style="height:108px;overflow:hidden;background:#f0f0f0;position:relative">
        <img src="${photo}" style="width:100%;height:100%;object-fit:cover" loading="lazy" onerror="this.src='https://picsum.photos/seed/${l.id}/300/200'">
        ${l.negotiable ? '<span style="position:absolute;top:6px;right:6px;background:#F5A623;color:#fff;font-size:9px;font-weight:800;padding:2px 6px;border-radius:6px">NEG</span>' : ''}
      </div>
      <div style="padding:9px 10px 11px">
        <div style="font-size:15px;font-weight:800;color:#1A3A8F;margin-bottom:2px">${price}</div>
        <div style="font-size:12px;font-weight:600;color:var(--text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:2px">${title}</div>
        <div style="font-size:11px;color:var(--sub)">${loc}</div>
      </div>
    </div>`;
  }

  H.pages.Home = async function () {
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
            <span style="font-size:22px;font-weight:900;color:#fff;letter-spacing:-0.5px;font-family:Inter,sans-serif">Host<em style="font-style:normal;color:#F5A623">ly</em></span>
          </div>
          <div style="display:flex;gap:6px">
            <div onclick="H.currentUser()?H.openInner('Notifications'):H.requireAuth('Sign in to view notifications')"
              style="position:relative;width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;cursor:pointer">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              ${unreadNotifs ? `<span style="position:absolute;top:4px;right:4px;background:#F5A623;color:#1A3A8F;border-radius:50%;min-width:16px;height:16px;font-size:9px;font-weight:900;display:flex;align-items:center;justify-content:center;padding:0 2px">${unreadNotifs > 9 ? '9+' : unreadNotifs}</span>` : ''}
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

      <!-- CITY PICKER -->
      <div class="city-picker" id="cityPicker" role="dialog">
        <div class="city-picker-title">Select your city</div>
        <div class="city-grid">
          <div class="city-opt ${H.state.cityFilter === 'All Zimbabwe' ? 'sel' : ''}" onclick="H.pickCity('All Zimbabwe')">All Zimbabwe</div>
          ${['Harare','Bulawayo','Mutare','Gweru','Masvingo','Chinhoyi','Kwekwe','Kadoma'].map(c =>
            `<div class="city-opt ${H.state.cityFilter === c ? 'sel' : ''}" onclick="H.pickCity('${c}')">${c}</div>`
          ).join('')}
        </div>
      </div>

      <div style="padding-bottom:88px">

        <!-- CATEGORIES GRID -->
        <div style="background:var(--card);padding:18px 16px 20px;margin-bottom:8px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <span style="font-size:15px;font-weight:800;color:var(--text)">Browse Categories</span>
            <span onclick="H.navTo('Browse',null)" style="font-size:13px;font-weight:600;color:#1A3A8F;cursor:pointer">See all</span>
          </div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px">
            ${CATEGORIES.map(c => {
              const color = CAT_COLORS[c.id] || '#546E7A';
              return `<div onclick="H.filterByCat('${c.id}')" style="display:flex;flex-direction:column;align-items:center;gap:7px;cursor:pointer">
                <div style="width:56px;height:56px;border-radius:16px;background:${color}18;display:flex;align-items:center;justify-content:center;font-size:26px;border:1.5px solid ${color}22;transition:transform 0.15s"
                  onmousedown="this.style.transform='scale(0.9)'" onmouseup="this.style.transform=''" ontouchstart="this.style.transform='scale(0.9)'" ontouchend="this.style.transform=''">${c.icon}</div>
                <span style="font-size:11px;font-weight:600;color:var(--text);text-align:center;line-height:1.2">${c.name}</span>
              </div>`;
            }).join('')}
          </div>
        </div>

        <!-- BANNER -->
        <div style="margin:0 12px 8px;background:linear-gradient(135deg,#1A3A8F 0%,#2952cc 100%);border-radius:18px;padding:20px;display:flex;align-items:center;justify-content:space-between;overflow:hidden;position:relative">
          <div style="position:absolute;right:-24px;top:-24px;width:130px;height:130px;border-radius:50%;background:rgba(255,255,255,0.07)"></div>
          <div style="position:absolute;right:50px;bottom:-35px;width:90px;height:90px;border-radius:50%;background:rgba(255,255,255,0.05)"></div>
          <div>
            <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.65);text-transform:uppercase;letter-spacing:1px;margin-bottom:5px">Zimbabwe's #1 Free Platform</div>
            <div style="font-size:21px;font-weight:900;color:#fff;line-height:1.1;margin-bottom:4px">Buy. Sell. Hire.</div>
            <div style="font-size:12px;color:rgba(255,255,255,0.7)">Real people. Real deals.</div>
          </div>
          <div style="text-align:center;flex-shrink:0;margin-left:16px">
            <div style="font-size:30px;font-weight:900;color:#F5A623;line-height:1">${activeListings.length}</div>
            <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.75);text-transform:uppercase;margin-top:3px">Active Ads</div>
          </div>
        </div>

        <!-- POST AD BUTTON -->
        <div style="padding:8px 12px 0">
          <button onclick="H.navTo('Post',null)"
            style="width:100%;padding:14px;background:#F5A623;color:#fff;border:none;border-radius:14px;font-size:15px;font-weight:800;cursor:pointer;font-family:Inter,sans-serif;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 4px 14px rgba(245,166,35,0.35)">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Post a Free Ad
          </button>
        </div>

        <!-- FEATURED -->
        ${featured.length ? `
        <div style="padding:20px 0 0">
          <div style="display:flex;align-items:center;justify-content:space-between;padding:0 16px;margin-bottom:12px">
            <div style="display:flex;align-items:center;gap:6px">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#F5A623" stroke="#F5A623" stroke-width="1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              <span style="font-size:16px;font-weight:800;color:var(--text)">Featured Ads</span>
            </div>
            <span onclick="H.navTo('Browse',null)" style="font-size:13px;font-weight:600;color:#1A3A8F;cursor:pointer">See all</span>
          </div>
          <div style="display:flex;gap:12px;padding:0 16px 4px;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none">
            ${featured.map(l => `<div style="flex-shrink:0">${renderFeatCard(l)}</div>`).join('')}
          </div>
        </div>` : ''}

        <!-- SEARCH RESULTS (shown when typing) -->
        <div id="searchResults" style="display:none;padding:16px 12px 0">
          <div style="font-size:16px;font-weight:800;color:var(--text);margin-bottom:12px;padding:0 4px">Search Results</div>
          <div id="searchResultsList" style="display:flex;flex-direction:column;gap:10px"></div>
        </div>

        <!-- CATEGORY SECTIONS (Dubizzle style, shown by default) -->
        <div id="catSections">
          ${catSections.length ? catSections.map(s => `
            <div style="padding:20px 0 0">
              <div style="display:flex;align-items:center;justify-content:space-between;padding:0 16px;margin-bottom:12px">
                <div style="display:flex;align-items:center;gap:8px">
                  <span style="font-size:20px">${s.icon}</span>
                  <span style="font-size:16px;font-weight:800;color:var(--text)">Latest in ${s.name}</span>
                </div>
                <span onclick="H.filterByCat('${s.id}')" style="font-size:13px;font-weight:600;color:#1A3A8F;cursor:pointer">See all</span>
              </div>
              <div style="display:flex;gap:12px;padding:0 16px 4px;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none">
                ${s.items.map(l => renderHCard(l)).join('')}
              </div>
            </div>
          `).join('') : `<div style="padding:32px 16px">${emptyState('No listings yet', 'Be the first to post in your area!', 'Post your first ad', "H.navTo('Post',null)")}</div>`}
        </div>

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
      if (!q.trim()) {
        catDiv.style.display = '';
        srDiv.style.display  = 'none';
        return;
      }
      catDiv.style.display = 'none';
      srDiv.style.display  = '';
      const active   = (H.state.listings || []).filter(l => l.status === 'active');
      const results  = filterListings(active, q);
      srList.innerHTML = results.length
        ? results.map(l => `<div>${renderListCard(l)}</div>`).join('')
        : emptyState('No matches', 'Try different keywords or browse a category', null, null);
    }, 300);
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




