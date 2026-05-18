'use strict';
(function (H) {
  const pages = H.pages;
  const state = H.state;
  const { escHtml, filterListings, renderListCard, CATEGORIES } = H;

  const I = (window.H && H.ICONS) || {};
  const S = {
    microphone: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',
    close: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    search: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    filter: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>'
  };

  let browseState = {
    showFilters: false,
    priceMin: 0,
    priceMax: 1000000,
    selectedCategory: null,
    condition: 'all',
    sortBy: 'recent',
    currency: 'all',
    lastSearch: ''
  };

  pages.Browse = function () {
    const activeListings = (state.listings || []).filter(l => l.status === 'active');
    const u = H.currentUser();
    const recentSearches = (u && u.recentSearches) || [];

    return `<div class="page active">
      <div class="app-header" style="padding-bottom:16px">
        <div class="app-header-row" style="margin-bottom:10px">
          <div class="logo">Browse <em>All</em></div>
          <div style="font-size:12px;font-weight:600;color:rgba(255,255,255,.6);padding:4px 10px;background:rgba(255,255,255,.1);border-radius:20px">
            ${activeListings.length} ads
          </div>
        </div>
        <div class="search-box">
          <span aria-hidden="true">${S.search}</span>
          <input id="searchIn" placeholder="Search all listings…" oninput="H._browse.onSearch()">
          <button class="voice-btn" onclick="H._browse.voiceSearch()" title="Voice search">${S.microphone}</button>
        </div>
      </div>

      <div class="browse-controls">
        <button class="filter-btn" onclick="H._browse.toggleFilters()">
          ${S.filter} Filters
        </button>
        <select class="sort-sel" id="sortBy" onchange="H._browse.onSortChange()">
          <option value="recent">Latest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="trending">Trending</option>
        </select>
      </div>

      ${recentSearches.length > 0 ? `
        <div class="recent-searches">
          <div class="section-title">Recent Searches</div>
          <div class="search-tags">
            ${recentSearches.slice(0, 5).map(s => `
              <button class="search-tag" onclick="H._browse.searchTag('${H.escHtml(s)}')">
                <span>${H.escHtml(s)}</span>
                <span onclick="H._browse.removeSearch('${H.escHtml(s)}'); event.stopPropagation()">${S.close}</span>
              </button>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div class="browse-filters-wrap" id="filterPanel">
        <div class="filter-section">
          <div class="filter-title">Categories</div>
          <div class="filter-options">
            ${CATEGORIES.map(c => `
              <label class="filter-checkbox">
                <input type="checkbox" value="${c.id}" onchange="H._browse.onFilterChange()">
                <span>${c.icon || ''} ${c.name}</span>
              </label>
            `).join('')}
          </div>
        </div>

        <div class="filter-section">
          <div class="filter-title">Price Range</div>
          <div class="price-inputs">
            <input type="number" class="price-input" id="priceMin" placeholder="Min" value="0">
            <span>to</span>
            <input type="number" class="price-input" id="priceMax" placeholder="Max" value="1000000">
          </div>
          <div class="currency-toggle">
            <button onclick="H._browse.setCurrency('all', event)" class="cur-opt ${browseState.currency === 'all' ? 'active' : ''}">All</button>
            <button onclick="H._browse.setCurrency('USD', event)" class="cur-opt ${browseState.currency === 'USD' ? 'active' : ''}">USD</button>
            <button onclick="H._browse.setCurrency('ZiG', event)" class="cur-opt ${browseState.currency === 'ZiG' ? 'active' : ''}">ZiG</button>
          </div>
        </div>

        <div class="filter-section">
          <div class="filter-title">Condition</div>
          <div class="filter-options">
            <label class="filter-radio"><input type="radio" name="condition" value="all" onchange="H._browse.onFilterChange()" checked><span>Any</span></label>
            <label class="filter-radio"><input type="radio" name="condition" value="new" onchange="H._browse.onFilterChange()"><span>New</span></label>
            <label class="filter-radio"><input type="radio" name="condition" value="like-new" onchange="H._browse.onFilterChange()"><span>Like New</span></label>
            <label class="filter-radio"><input type="radio" name="condition" value="used" onchange="H._browse.onFilterChange()"><span>Used</span></label>
            <label class="filter-radio"><input type="radio" name="condition" value="refurbished" onchange="H._browse.onFilterChange()"><span>Refurbished</span></label>
          </div>
        </div>

        <div class="filter-section">
          <div class="filter-title">Other</div>
          <label class="filter-checkbox"><input type="checkbox" id="verifiedOnly" onchange="H._browse.onFilterChange()"><span>Verified Sellers Only</span></label>
          <label class="filter-checkbox"><input type="checkbox" id="boostedOnly" onchange="H._browse.onFilterChange()"><span>Premium Ads Only</span></label>
        </div>

        <div class="filter-actions">
          <button class="btn-pri" onclick="H._browse.applyFilters()">Apply Filters</button>
          <button class="btn-sec" onclick="H._browse.resetFilters()">Reset</button>
        </div>
      </div>

      <div class="sec-head"><div class="sec-title">Results</div></div>
      <div class="listing-list" id="listingList">
        ${activeListings.length
          ? filterListings(activeListings, '').map(renderListCard).join('')
          : H.skeletonCards(6)}
      </div>
    </div>`;
  };

  pages.Browse_after = function () {
    if (typeof H.fetchListingsFromSupabase === 'function') {
      H.fetchListingsFromSupabase().then(() => {
        const el = document.getElementById('listingList');
        if (!el || H.currentPageName !== 'Browse') return;
        const q = document.getElementById('searchIn')?.value || '';
        const active = (state.listings || []).filter(l => l.status === 'active');
        el.innerHTML = active.length
          ? filterListings(active, q).map(renderListCard).join('')
          : H.emptyState('No listings yet', 'Listings will appear here once people start posting', null, null);
      }).catch(() => {
        const el = document.getElementById('listingList');
        if (el && !el.querySelector('.list-card-wrap')) {
          el.innerHTML = H.errorState('Could not load listings', 'Check your connection and pull down to retry.', "H.renderPage('Browse')");
        }
      });
    }
    H._browse = {
      toggleFilters: () => {
        const panel = document.getElementById('filterPanel');
        if (panel) panel.classList.toggle('open');
      },
      _searchTimer: null,
      onSearch: () => {
        clearTimeout(H._browse._searchTimer);
        H._browse._searchTimer = setTimeout(() => {
          const q = document.getElementById('searchIn')?.value || '';
          browseState.lastSearch = q;
          const activeListings = (state.listings || []).filter(l => l.status === 'active');
          const filtered = filterListings(activeListings, q);
          const el = document.getElementById('listingList');
          if (el) el.innerHTML = filtered.length
            ? filtered.map(renderListCard).join('')
            : H.emptyState('No matches', 'Try a different search term', null, null);
          if (q.trim()) {
            const u = H.currentUser();
            if (u) {
              if (!u.recentSearches) u.recentSearches = [];
              u.recentSearches = [q, ...u.recentSearches.filter(s => s !== q)].slice(0, 10);
              H.saveState();
            }
          }
        }, 250);
      },
      searchTag: (term) => {
        const inp = document.getElementById('searchIn');
        if (inp) { inp.value = term; H._browse.onSearch(); }
      },
      removeSearch: (term) => {
        const u = H.currentUser();
        if (u) {
          u.recentSearches = (u.recentSearches || []).filter(s => s !== term);
          H.saveState();
          H.renderPage('Browse');
        }
      },
      voiceSearch: () => { H.toast('Voice search coming soon!'); },
      saveSearch: () => {
        const q = document.getElementById('searchIn')?.value?.trim() || '';
        const u = H.currentUser();
        if (!u) { H.requireAuth('Sign in to save searches'); return; }
        if (!q && !browseState.selectedCategory) { H.toast('Type something to save as a search'); return; }
        state.savedSearches = state.savedSearches || {};
        state.savedSearches[u.id] = state.savedSearches[u.id] || [];
        const already = state.savedSearches[u.id].some(s => s.query === q && s.cat === browseState.selectedCategory);
        if (already) { H.toast('Search already saved'); return; }
        const newId = H.uid();
        state.savedSearches[u.id].unshift({ id: newId, query: q, cat: browseState.selectedCategory, savedAt: Date.now() });
        state.savedSearches[u.id] = state.savedSearches[u.id].slice(0, 10);
        H.saveState();
        var _sb = window.supabase;
        if (_sb && typeof _sb.from === 'function') {
          _sb.from('saved_searches').insert({
            user_id: u.id, query: q || null,
            category: browseState.selectedCategory || null
          }).then(function(res) { if (res && res.error) console.warn('Saved search sync failed:', res.error.message); });
        }
        H.toast('Search saved — we\'ll notify you of new matches');
      },
      removeSavedSearch: (id) => {
        const u = H.currentUser(); if (!u) return;
        state.savedSearches = state.savedSearches || {};
        state.savedSearches[u.id] = (state.savedSearches[u.id] || []).filter(s => s.id !== id);
        H.saveState();
        H.renderPage('Browse');
      },
      onFilterChange: () => {},
      onSortChange: () => {
        const sortVal = document.getElementById('sortBy')?.value;
        browseState.sortBy = sortVal;
        H._browse.onSearch();
      },
      setCurrency: (cur, ev) => {
        browseState.currency = cur;
        if (ev && ev.target) {
          document.querySelectorAll('.cur-opt').forEach(b => b.classList.remove('active'));
          ev.target.classList.add('active');
        }
      },
      applyFilters: () => { H._browse.toggleFilters(); H._browse.onSearch(); },
      resetFilters: () => {
        browseState = { showFilters:false, priceMin:0, priceMax:1000000, selectedCategory:null, condition:'all', sortBy:'recent', currency:'all', lastSearch:'' };
        document.querySelectorAll('.filter-checkbox input, .filter-radio input').forEach(input => { input.checked = false; });
        document.querySelectorAll('input[name="condition"]').forEach(input => { if (input.value === 'all') input.checked = true; });
        document.querySelectorAll('.cur-opt').forEach(b => b.classList.remove('active'));
        const defaultCurBtn = document.querySelector('.cur-opt.all') || document.querySelector('[onclick*="\'all\'"]');
        if (defaultCurBtn) defaultCurBtn.classList.add('active');
        H._browse.onSearch();
      }
    };

    if (browseState.lastSearch) {
      const inp = document.getElementById('searchIn');
      if (inp) { inp.value = browseState.lastSearch; H._browse.onSearch(); }
    }
  };

})(window.H);
