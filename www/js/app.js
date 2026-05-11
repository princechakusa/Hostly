'use strict';
window.H = {
  KEY:           'hostly.v2',
  ADMIN_PHONES:  ['+263770000000', '+971589772645'],

  PROVINCES: ['Harare','Bulawayo','Manicaland','Mashonaland West','Mashonaland East','Mashonaland Central','Midlands','Masvingo','Matabeleland North','Matabeleland South'],
  CITIES_BY_PROV: {
    'Harare':             ['Harare CBD','Borrowdale','Avondale','Mabelreign','Marlborough','Belvedere','Greendale','Hatfield','Highfield','Mbare','Glen View','Budiriro','Kuwadzana','Warren Park','Chitungwiza','Epworth','Norton','Ruwa'],
    'Bulawayo':           ['Bulawayo CBD','Hillside','Khumalo','Suburbs','Famona','Pumula','Cowdray Park','Nkulumane','Magwegwe','Plumtree'],
    'Manicaland':         ['Mutare','Chipinge','Chimanimani','Rusape','Nyanga','Birchenough Bridge'],
    'Mashonaland West':   ['Chinhoyi','Kadoma','Karoi','Kariba','Mhangura','Banket','Norton'],
    'Mashonaland East':   ['Marondera','Mutoko','Murehwa','Wedza','Hwedza'],
    'Mashonaland Central':['Bindura','Mt Darwin','Shamva','Concession','Mvurwi'],
    'Midlands':           ['Gweru','Kwekwe','Zvishavane','Shurugwi','Redcliff','Mberengwa'],
    'Masvingo':           ['Masvingo','Chiredzi','Bikita','Triangle','Mwenezi'],
    'Matabeleland North': ['Hwange','Victoria Falls','Lupane','Binga'],
    'Matabeleland South': ['Beitbridge','Gwanda','Plumtree','Filabusi']
  },

  // â”€â”€â”€ SVG Icons (Feather style) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  ICONS: {
    search:        `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    user:          `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    doc:           `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
    heart:         `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    wallet:        `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
    settings:      `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    help:          `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    logout:        `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
    close:         `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    location:      `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    boost:         `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    camera:        `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  },

  // Category icons â€“ now SVG based
  CATEGORIES: [
    {id:'property',    name:'Property',     icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'},
    {id:'vehicles',    name:'Vehicles',     icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>'},
    {id:'rooms',       name:'Rooms',        icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4h20v16H2z"/><path d="M2 12h20"/></svg>'},
    {id:'electronics', name:'Electronics',  icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'},
    {id:'jobs',        name:'Jobs',         icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="13" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>'},
    {id:'furniture',   name:'Furniture',    icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="10" rx="2"/><path d="M4 12h16v8H4z"/><line x1="8" y1="20" x2="16" y2="20"/></svg>'},
    {id:'fashion',     name:'Fashion',      icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 3l5 5 5-5"/><path d="M7 21l5-5 5 5"/><line x1="12" y1="8" x2="12" y2="16"/></svg>'},
    {id:'services',    name:'Services',     icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'},
    {id:'agriculture', name:'Agriculture',  icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4"/><path d="M12 10v4"/><path d="M4.93 10.93l3.54 3.54"/><path d="M15.07 10.93l-3.54 3.54"/></svg>'},
    {id:'pets',        name:'Pets',         icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2c-2 0-3 2-3 4 0 2 2 4 4 5s2 2 2 4-1 4-3 4"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="6" r="2"/></svg>'},
    {id:'kids',        name:'Baby & Kids',  icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="5"/><path d="M3 21v-2a7 7 0 0 1 4-6.33"/><path d="M21 21v-2a7 7 0 0 0-4-6.33"/></svg>'},
    {id:'other',       name:'Other',        icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="12" x2="15" y2="12"/></svg>'}
  ],

  BOOST_PLANS: [
    {id:'standard', name:'Standard Boost', price:2,  days:7,  desc:'Featured at the top of your category for 7 days.', badgeText:''},
    {id:'premium',  name:'Premium Boost',  price:5,  days:14, desc:'Prime placement across category and search for 14 days.', badge:'hot', badgeText:'Most Popular'},
    {id:'mega',     name:'Mega Boost',     price:10, days:30, desc:'30 days of maximum visibility across all sections.', badgeText:'Best Value'}
  ],

  // â”€â”€â”€ State â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  state: {},
  pageStack: [],
  currentPageName: 'Home',
  currentPageParams: {},
  _activeChat: null,
  camStream: null,
  livenessTimer: null,
  logoTaps: 0,
  logoTapsTimer: null,
  pages: {},

  defaultState: {
    users: [], listings: [], conversations: [], reports: [], txns: [],
    saves: {}, notifs: {}, currentUserId: null, cityFilter: 'All Zimbabwe',
    adminLogs: [], supportTickets: [], adminSession: null
  },

  // â”€â”€â”€ Persistence (localStorage + optional Supabase) â”€â”€â”€â”€â”€â”€
  loadState() {
    const root = window.H || this;
    try {
      const raw = localStorage.getItem(root.KEY);
      if (!raw) return JSON.parse(JSON.stringify(root.defaultState));
      return Object.assign(JSON.parse(JSON.stringify(root.defaultState)), JSON.parse(raw));
    } catch { return JSON.parse(JSON.stringify(root.defaultState)); }
  },

  saveState() {
    const root = window.H || this;
    // Always save to localStorage
    try { localStorage.setItem(root.KEY, JSON.stringify(root.state)); }
    catch (e) { if (e.name === 'QuotaExceededError') root.toast('Storage full â€” try deleting old listings'); }
    // Optionally sync to Supabase (fireâ€‘andâ€‘forget, never throws)
    root.syncToSupabase().catch(() => {});
  },

  // Attempt to push state to Supabase if client exists
  async syncToSupabase() {
    const root = window.H || this;
    if (!window.supabase || typeof window.supabase.from !== 'function') return;
    try {
      // Upsert the whole state into a single row (key-value)
      await window.supabase
        .from('app_state')
        .upsert({ id: root.KEY, data: root.state, updated_at: new Date().toISOString() });
    } catch (e) {
      // Silently fail â€“ local storage is the primary source
      console.warn('Supabase sync failed (will retry next save):', e.message);
    }
  },

  // â”€â”€â”€ Utilities â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  uid()        { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); },
  currentUser(){
    const root = window.H || this;
    return ((root.state && root.state.users) || []).find(u => u.id === (root.state && root.state.currentUserId)) || null;
  },
  isAdmin()    { const root = window.H || this; const u = root.currentUser(); return !!(u && u.role === 'admin'); },
  escHtml(s)   { return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); },
  initials(n)  { return (n || '?').split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase(); },

  // Return the SVG icon string for a category ID (fallback to generic box)
  categoryIcon(cid) {
    const cat = this.CATEGORIES.find(c => c.id === cid);
    return cat ? cat.icon : `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/></svg>`;
  },

  timeAgo(t) {
    const s = Math.floor((Date.now() - t) / 1000);
    if (s < 60)     return 'just now';
    if (s < 3600)   return Math.floor(s / 60) + 'm ago';
    if (s < 86400)  return Math.floor(s / 3600) + 'h ago';
    if (s < 604800) return Math.floor(s / 86400) + 'd ago';
    return new Date(t).toLocaleDateString();
  },
  fmtPrice(p, c) {
    if (!p && p !== 0) return c === 'USD' ? '$0' : '0 ZiG';
    const n = Number(p).toLocaleString();
    return c === 'USD' ? '$' + n : n + ' ZiG';
  },

  // â”€â”€â”€ Filtering â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  filterListings(list, q) { const _s = window.H ? window.H.state : {};
    const query = (q !== undefined ? q : (document.getElementById('searchIn')?.value || '')).toLowerCase().trim();
    return list.filter(l => {
      if (_s.cityFilter !== 'All Zimbabwe') {
        const city = (l.city + ' ' + l.prov).toLowerCase();
        if (!city.includes(_s.cityFilter.toLowerCase())) return false;
      }
      if (query && !(l.title + ' ' + (l.desc || '') + ' ' + l.city + ' ' + (l.suburb || '')).toLowerCase().includes(query)) return false;
      return true;
    }).sort((a, b) => {
      const ba = (a.boost && a.boost.until > Date.now()) ? 1 : 0;
      const bb = (b.boost && b.boost.until > Date.now()) ? 1 : 0;
      if (ba !== bb) return bb - ba;
      return b.createdAt - a.createdAt;
    });
  },

  // â”€â”€â”€ UI Components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  toast(msg, duration = 2600) {
    const el = document.getElementById('toastEl');
    if (!el) return;
    el.textContent = msg; el.classList.add('show');
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => el.classList.remove('show'), duration);
  },

  modal({ title, body, confirmText = 'OK', cancelText = 'Cancel', danger = false, onConfirm }) {
    const root = window.H || this;
    const bg  = document.getElementById('modalBg');
    const box = document.getElementById('modalBox');
    box.innerHTML = `
      <h3>${root.escHtml(title)}</h3>
      <div style="font-size:14px;color:var(--sub);line-height:1.6;margin-bottom:4px">${body || ''}</div>
      <div class="modal-btns">
        ${cancelText ? `<button class="modal-btn cancel" onclick="H.closeModal()">${cancelText}</button>` : ''}
        <button class="modal-btn ${danger ? 'danger' : 'confirm'}" id="mConfirm">${confirmText}</button>
      </div>`;
    bg.classList.add('open');
    document.getElementById('mConfirm').onclick = () => {
      const r = onConfirm ? onConfirm() : undefined;
      if (r !== false) H.closeModal();
    };
    setTimeout(() => document.getElementById('mConfirm')?.focus(), 50);
  },
  closeModal() { document.getElementById('modalBg').classList.remove('open'); },
  closeSheet() {
    document.getElementById('actionSheet').classList.remove('open');
    document.getElementById('sheetBg').classList.remove('open');
  },

  innerTopbar(title, hasAction = false, isHtml = false) {
    const root = window.H || this;
    return `<div class="inner-topbar">
      <button class="back" onclick="H.goBack()" aria-label="Go back">
        <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="inner-topbar-title">${isHtml ? title : root.escHtml(title)}</div>
      <div style="width:34px"></div>
    </div>`;
},

  emptyState(title, sub, btn, onclick) {
    const root = window.H || this;
    return `<div class="empty-state">
      <div class="empty-icon">${root.ICONS.search}</div>
      <div class="empty-title">${root.escHtml(title)}</div>
      <div class="empty-sub">${root.escHtml(sub)}</div>
      ${btn ? `<button class="btn-pri" style="max-width:240px" onclick="${onclick}">${btn}</button>` : ''}
    </div>`;
  },

  renderListCard(l) {
    const seller = H.state.users.find(u => u.id === l.sellerId);
    const photo  = (l.photos && l.photos[0])
      ? `<img src="${l.photos[0]}" alt="${H.escHtml(l.title)}" loading="lazy">`
      : `<div class="ph" aria-hidden="true">${H.categoryIcon(l.cat)}</div>`;
    const boosted = l.boost && l.boost.until > Date.now();
    return `<div class="list-card" onclick="H.openListing('${l.id}')" role="button" tabindex="0" aria-label="${H.escHtml(l.title)}">
      <div class="list-thumb">${photo}</div>
      <div class="list-body">
        <div class="list-title">${H.escHtml(l.title)}</div>
        <div class="list-price">${H.escHtml(H.fmtPrice(l.price, l.currency))}</div>
        <div class="list-tags">
          <span class="tag">${H.ICONS.location} ${H.escHtml(l.city)}</span>
          <span class="tag">Â· ${H.timeAgo(l.createdAt)}</span>
          ${seller && seller.verified ? `<span class="blue-check" title="ID Verified"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span>` : ''}
          ${boosted ? `<span class="boost-pill">${H.ICONS.boost} Boosted</span>` : ''}
        </div>
      </div>
    </div>`;
  },

  renderFeatCard(l) {
    const photo = (l.photos && l.photos[0])
      ? `<img src="${l.photos[0]}" alt="${H.escHtml(l.title)}" loading="lazy" style="width:100%;height:100%;object-fit:cover">`
      : `<div style="font-size:36px;display:flex;align-items:center;justify-content:center;height:100%">${H.categoryIcon(l.cat)}</div>`;
    return `<div class="feat-card" onclick="H.openListing('${l.id}')" role="button" tabindex="0" aria-label="${H.escHtml(l.title)}">
      <div class="feat-img">${photo}<div class="feat-badge">Featured</div></div>
      <div class="feat-body">
        <div class="feat-price">${H.escHtml(H.fmtPrice(l.price, l.currency))}</div>
        <div class="feat-title">${H.escHtml(l.title)}</div>
        <div class="feat-location">${H.ICONS.location} ${H.escHtml(l.city)}</div>
      </div>
    </div>`;
  },

  // â”€â”€â”€ Camera â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  stopCam() {
    if (this.camStream)    { this.camStream.getTracks().forEach(t => t.stop()); this.camStream = null; }
    if (this.livenessTimer){ clearInterval(this.livenessTimer); this.livenessTimer = null; }
  },

  // â”€â”€â”€ Image compression â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  compressImage(file, maxDim = 1200, q = 0.8) {
    return new Promise(res => {
      const r = new FileReader();
      r.onload = ev => {
        const img = new Image();
        img.onload = () => {
          let w = img.width, h = img.height;
          if (w > h && w > maxDim) { h = Math.round(h * maxDim / w); w = maxDim; }
          else if (h > maxDim)     { w = Math.round(w * maxDim / h); h = maxDim; }
          const c = document.createElement('canvas'); c.width = w; c.height = h;
          c.getContext('2d').drawImage(img, 0, 0, w, h);
          res(c.toDataURL('image/jpeg', q));
        };
        img.src = ev.target.result;
      };
      r.readAsDataURL(file);
    });
  },

  // â”€â”€â”€ Ban system â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  checkBan() {
    const u = this.currentUser();
    if (!u || u.role === 'admin') { document.getElementById('banScreen').classList.remove('show'); return false; }
    if (u.status === 'banned_temp' && u.banUntil && Date.now() > u.banUntil) {
      u.status = 'active'; u.banReason = null; u.banUntil = null; this.saveState();
    }
    if (u.status === 'banned_perm' || u.status === 'banned_temp') {
      this._showBanScreen(u); return true;
    }
    document.getElementById('banScreen').classList.remove('show');
    return false;
  },

  _showBanScreen(u) {
    const isTemp = u.status === 'banned_temp';
    let countdown = '';
    if (isTemp && u.banUntil) {
      const ms = u.banUntil - Date.now();
      const d = Math.floor(ms / 86400000), h = Math.floor((ms % 86400000) / 3600000), m = Math.floor((ms % 3600000) / 60000);
      countdown = `Lifted in ${d > 0 ? d + 'd ' : ''}${h > 0 ? h + 'h ' : ''}${m}m`;
    }
    document.getElementById('banScreen').innerHTML = `
      <div class="ic">${isTemp ? 'â³' : 'ðŸš«'}</div>
      <h1>${isTemp ? 'Account Suspended' : 'Account Banned'}</h1>
      <p>${isTemp ? 'Your account has been temporarily suspended.' : 'Your account has been permanently banned.'} Contact support if you believe this is in error.</p>
      <div class="reason"><strong>Reason:</strong> ${this.escHtml(u.banReason || 'Policy violation')}</div>
      ${countdown ? `<div class="countdown">${countdown}</div>` : ''}
      <button class="appeal" onclick="H.appealBan()">Submit Appeal</button>
      <button class="appeal" style="margin-top:8px;opacity:.7" onclick="H.logout()">Sign Out</button>`;
    document.getElementById('banScreen').classList.add('show');
    if (isTemp) { clearTimeout(window._banTick); window._banTick = setTimeout(() => this.checkBan(), 60000); }
  },

  appealBan() {
    this.modal({
      title: 'Submit Appeal',
      body: `<div class="fl">Your reason</div><textarea class="fi" id="appealText" rows="4" placeholder="Explain why this ban should be reviewedâ€¦"></textarea>`,
      confirmText: 'Submit',
      onConfirm: () => {
        const txt = document.getElementById('appealText')?.value.trim();
        if (!txt) { this.toast('Please describe your appeal'); return false; }
        this.state.reports.push({ id: this.uid(), reporterId: this.state.currentUserId, targetType: 'appeal', targetId: this.state.currentUserId, reason: txt, t: Date.now(), status: 'open' });
        this.saveState(); this.toast('Appeal submitted. We will review within 24h.');
      }
    });
  },

  isAdminPage(name) {
    return ['Admin'].includes(name);
  },
  canAccessPage(name) {
    if (!this.currentUser()) return false;
    if (this.isAdminPage(name) && !this.isAdmin()) return false;
    if (this.isAdminPage(name) && !this.state.adminSession) return false;
    return true;
  },
  adminLog(action, meta = {}) {
    const u = this.currentUser();
    if (!u) return;
    this.state.adminLogs.unshift({
      id: this.uid(),
      t: Date.now(),
      adminId: u.id,
      adminName: u.name || 'Admin',
      action,
      meta
    });
    this.state.adminLogs = this.state.adminLogs.slice(0, 300);
    this.saveState();
  },

  // â”€â”€â”€ Navigation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  async boot() {
    this.applyTheme();
    this.applyLanguage();
    if (!this.state.currentUserId) { this.authPage(); return; }
    if (this.checkBan()) return;
    document.getElementById('bottomNav').style.display = 'flex';
    await this.navTo('Home');
  },

  authPage() {
    document.getElementById('bottomNav').style.display = 'none';
    document.getElementById('mainArea').innerHTML = `
      <div class="auth-wrap">
        <div class="auth-logo">
          <img src="img/icon-192.png" alt="Hostly" onclick="H.authLogoTap && H.authLogoTap()" style="width:90px;height:90px;border-radius:22px;margin-bottom:16px;box-shadow:0 8px 24px rgba(0,0,0,.3);cursor:pointer">
          <div>Host<em>ly</em></div>
        </div>
        <div class="auth-tag">Zimbabwe's #1 Free Marketplace</div>
        <div class="auth-card" id="authCard"></div>
        <div class="auth-foot">
          By continuing you accept our
          <a href="#" onclick="event.preventDefault();H.authShowDoc('terms')">Terms</a> &amp;
          <a href="#" onclick="event.preventDefault();H.authShowDoc('privacy')">Privacy Policy</a>
        </div>
      </div>`;
    if (typeof H.authStepEmail === 'function') H.authStepEmail();
  },

  async navTo(name, btn) {
    if (!this.currentUser()) { this.authPage(); return; }
    if (this.isAdminPage(name) && (!this.isAdmin() || !this.state.adminSession)) { this.toast('Admin login required'); return; }
    this.pageStack = [];
    document.getElementById('bottomNav').style.display = 'flex';
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const target = btn || document.querySelector(`[data-nav="${name}"]`);
    if (target) target.classList.add('active');
    await this.renderPage(name);
  },

  async openInner(name, params) {
    const _h = window.H;
    if (!_h.currentUser()) { _h.authPage(); return; }
    if (_h.isAdminPage(name) && (!_h.isAdmin() || !_h.state.adminSession)) { _h.toast('Admin login required'); return; }
    this.pageStack.push({ name: this.currentPageName, params: this.currentPageParams });
    document.getElementById('bottomNav').style.display = 'none';
    await this.renderPage(name, params);
  },

  async goBack() {
    this.stopCam();
    if (this.pageStack.length) {
      const p = this.pageStack.pop();
      const isRoot = ['Home','Browse','Messages','Post'].includes(p.name);
      if (isRoot) {
        document.getElementById('bottomNav').style.display = 'flex';
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        const m = document.querySelector(`[data-nav="${p.name}"]`); if (m) m.classList.add('active');
      }
      await this.renderPage(p.name, p.params);
    } else {
      document.getElementById('bottomNav').style.display = 'flex';
      await this.navTo('Home');
    }
  },

  async renderPage(name, params) {
    if (!this.currentUser()) { this.authPage(); return; }
    if (!this.canAccessPage(name)) { this.toast('Access denied'); await this.navTo('Home'); return; }
    this.currentPageName = name; this.currentPageParams = params || {};
    const fn  = this.pages[name] || this.pages.Home;
    const res = fn(params || {});
    const html = (res instanceof Promise) ? await res : res;
    const area = document.getElementById('mainArea');
    area.scrollTop = 0;
    area.innerHTML = html;
    if (this.pages[name + '_after']) this.pages[name + '_after'](params || {});
  },

  openListing(id) {
    const l = this.state.listings.find(x => x.id === id); if (!l) return;
    l.views = (l.views || 0) + 1; this.saveState();
    this.openInner('Detail', { id });
  },

  filterByCat(cid) { this.openInner('CategoryView', { cid }); },

  // â”€â”€â”€ Theme / Language â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  applyTheme() {
    const u     = this.currentUser();
    const theme = (u && u.settings && u.settings.theme) || 'light';
    document.documentElement.setAttribute('data-theme', theme);
  },
  applyLanguage() {
    const u = this.currentUser();
    if (u && u.language) document.querySelectorAll('.current-lang').forEach(el => el.textContent = u.language);
  },

  // â”€â”€â”€ Logo easter egg â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  logoTap() {
    this.logoTaps++;
    clearTimeout(this.logoTapsTimer);
    this.logoTapsTimer = setTimeout(() => { this.logoTaps = 0; }, 4000);
    if (this.logoTaps >= 7) {
      this.logoTaps = 0;
      if (this.isAdmin()) this.openInner('Admin');
    }
  },

  // â”€â”€â”€ CategoryView stub â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  _registerCategoryView() {
    this.pages.CategoryView = function ({ cid }) {
      const cat  = H.CATEGORIES.find(c => c.id === cid) || { name: 'Category', icon: H.ICONS.close };
      const list = (H.state.listings || []).filter(l => l.status === 'active' && l.cat === cid);
return `<div class="page active">${H.innerTopbar(cat.icon + ' ' + cat.name, false, true)}        <div class="listing-list">
          ${list.length ? list.map(H.renderListCard).join('') : H.emptyState('No ' + cat.name + ' listings yet', 'Be the first to post in this category!', 'Post an Ad', "H.navTo('Post',null)")}
        </div>
      </div>`;
    };
  },

  // â”€â”€â”€ Account Menu (emojiâ€‘free) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  showAccountMenu(btn) {
    const u = this.currentUser();
    if (!u) return;
    const sheet = document.getElementById('actionSheet');
    const bg = document.getElementById('sheetBg');
    const I = this.ICONS;

    sheet.innerHTML = `
      <div class="sheet-header">Account Menu</div>
      <button class="sheet-item" onclick="H.closeSheet(); setTimeout(()=>H.openInner('Profile'),50)">
        <span class="sheet-icon">${I.user}</span>
        <span class="sheet-label">My Profile</span>
      </button>
      <button class="sheet-item" onclick="H.closeSheet(); setTimeout(()=>H.openInner('MyListings'),50)">
        <span class="sheet-icon">${I.doc}</span>
        <span class="sheet-label">My Listings</span>
      </button>
      <button class="sheet-item" onclick="H.closeSheet(); setTimeout(()=>H.openInner('Favorites'),50)">
        <span class="sheet-icon">${I.heart}</span>
        <span class="sheet-label">Saved & Favorites</span>
      </button>
      <button class="sheet-item" onclick="H.closeSheet(); setTimeout(()=>H.openInner('Wallet'),50)">
        <span class="sheet-icon">${I.wallet}</span>
        <span class="sheet-label">Wallet & Payments</span>
      </button>
      <button class="sheet-item" onclick="H.closeSheet(); setTimeout(()=>H.openInner('Settings'),50)">
        <span class="sheet-icon">${I.settings}</span>
        <span class="sheet-label">Settings</span>
      </button>
      <button class="sheet-item" onclick="H.closeSheet(); setTimeout(()=>H.openInner('Help'),50)">
        <span class="sheet-icon">${I.help}</span>
        <span class="sheet-label">Help & Support</span>
      </button>
      <button class="sheet-item danger" onclick="H.logout(); H.closeSheet()">
        <span class="sheet-icon">${I.logout}</span>
        <span class="sheet-label">Sign Out</span>
      </button>
      <button class="sheet-close" onclick="H.closeSheet()">${I.close} Close</button>
    `;

    sheet.classList.add('open');
    bg.classList.add('open');
},

  // â”€â”€â”€ Bootstrap â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  init() {
    this.state = this.loadState();
    this._registerCategoryView();

    document.addEventListener('DOMContentLoaded', () => {
      const nav = document.getElementById('bottomNav');
      if (nav) {
        nav.addEventListener('click', e => {
          const btn  = e.target.closest('[data-nav]');
          if (!btn) return;
          const name = btn.dataset.nav;
          if (name === 'Post') H.navTo('Post', btn);
          else if (name === 'Account') H.showAccountMenu(btn);
          else H.navTo(name, btn);
        });
      }
      window.addEventListener('popstate', () => H.goBack());
      window.addEventListener('beforeunload', () => H.stopCam());
      document.addEventListener('keydown', e => { if (e.key === 'Escape') H.closeModal(); });
      H.boot();
    });
  }
};

// â”€â”€â”€ Backward-compat globals â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
['navTo','openInner','goBack','toast','closeModal','closeSheet'].forEach(fn => {
  window[fn] = (...a) => H[fn](...a);
});
window.pushNotif = (uid, title, body) => H.pushNotif && H.pushNotif(uid, title, body);

H.init();











