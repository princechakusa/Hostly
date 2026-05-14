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

  // Category icons "“ now SVG based
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
    saves: {}, notifs: {}, currentUserId: null, cityFilter: 'All Zimbabwe', _sortMode: 'newest', _priceMin: '', _priceMax: '',
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
    catch (e) { if (e.name === 'QuotaExceededError') root.toast('Storage full "” try deleting old listings'); }
    // Optionally sync to Supabase (fire"‘and"‘forget, never throws)
    root.syncToSupabase().catch(() => {});
  },

  // Attempt to push state to Supabase if client exists
  async syncToSupabase() { return; // state sync disabled - using per-listing sync instead
    const root = window.H || this;
    if (!window.supabase || typeof window.supabase.from !== 'function') return;
    try {
      // Upsert the whole state into a single row (key-value)
      await window.supabase
        .from('app_state')
        .upsert({ id: root.KEY, data: root.state, updated_at: new Date().toISOString() });
    } catch (e) {
      // Silently fail "“ local storage is the primary source
      console.warn('Supabase sync failed (will retry next save):', e.message);
    }
  },

  // â”€â”€â”€ Utilities â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  uid()        { if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID(); return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){ var r=Math.random()*16|0; return (c=='x'?r:(r&0x3|0x8)).toString(16); }); },
  currentUser(){
    const root = window.H || this;
    return ((root.state && root.state.users) || []).find(u => u.id === (root.state && root.state.currentUserId)) || null;
  },
  isAdmin()    { const root = window.H || this; const u = root.currentUser(); return !!(u && u.role === 'admin'); },
  escHtml(s)   { return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); },
  initials(n)  { return (n || '?').split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase(); },

  // Return the SVG icon string for a category ID (fallback to generic box)
  categoryIcon(cid) {
    const root = window.H || this;
    const cat = root.CATEGORIES.find(c => c.id === cid);
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
  filterListings(list, q) {
    const _s = window.H ? window.H.state : {};
    const query = (q !== undefined ? q : (document.getElementById('searchIn')?.value || '')).toLowerCase().trim();
    const priceMin = parseFloat(_s._priceMin) || 0;
    const priceMax = parseFloat(_s._priceMax) || Infinity;
    const sort = _s._sortMode || 'newest';
    return list.filter(l => {
      if (_s.cityFilter && _s.cityFilter !== 'All Zimbabwe') {
        const city = (l.city + ' ' + l.prov).toLowerCase();
        if (!city.includes(_s.cityFilter.toLowerCase())) return false;
      }
      if (query && !(l.title + ' ' + (l.desc || '') + ' ' + l.city + ' ' + (l.suburb || '')).toLowerCase().includes(query)) return false;
      if (l.price < priceMin) return false;
      if (l.price > priceMax) return false;
      return true;
    }).sort((a, b) => {
      const ba = (a.boost && a.boost.until > Date.now()) ? 1 : 0;
      const bb = (b.boost && b.boost.until > Date.now()) ? 1 : 0;
      if (ba !== bb) return bb - ba;
      if (sort === 'newest') return b.createdAt - a.createdAt;
      if (sort === 'oldest') return a.createdAt - b.createdAt;
      if (sort === 'price_asc') return (a.price||0) - (b.price||0);
      if (sort === 'price_desc') return (b.price||0) - (a.price||0);
      if (sort === 'views') return (b.views||0) - (a.views||0);
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
    return `<div class="list-card-wrap" style="position:relative" onclick="H.openListing('${l.id}')"><button class="share-card-btn" onclick="event.stopPropagation();H.shareListing('${l.id}')" title="Share"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg></button><div class="list-card" role="button" tabindex="0" aria-label="${H.escHtml(l.title)}">
      <div class="list-thumb">${photo}</div>
      <div class="list-body">
        <div class="list-title">${H.escHtml(l.title)}</div>
        <div class="list-price">${H.escHtml(H.fmtPrice(l.price, l.currency))}</div>
        <div class="list-tags">
          <span class="tag">${H.ICONS.location} ${H.escHtml(l.city)}</span>
          <span class="tag">· ${H.timeAgo(l.createdAt)}</span>
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
      body: `<div class="fl">Your reason</div><textarea class="fi" id="appealText" rows="4" placeholder="Explain why this ban should be reviewed"¦"></textarea>`,
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
    const root = window.H || this;
    if (root.isAdminPage(name) && (!root.isAdmin() || !root.state.adminSession)) return false;
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
  authLogoTap() { window.location.href = 'admin.html'; },

  async boot() {
    H.openInner = H.openInner.bind(H);
    H.goBack = H.goBack.bind(H);
    H.renderPage = H.renderPage.bind(H);
    H.navTo = H.navTo.bind(H);
    this.applyTheme();
    this.applyLanguage();
    if(this.state.currentUserId && this.checkBan()) return;
    document.getElementById("bottomNav").style.display="flex";
    await this.navTo('Home');
    try { await this.fetchListingsFromSupabase(); await this.renderPage(this.currentPageName, this.currentPageParams); } catch(e) { console.warn('Fetch on boot failed:', e); }
    // Auto-refresh disabled - user refreshes manually
    if (typeof H._setupRealtimeMessages === 'function') H._setupRealtimeMessages();
    if (typeof H.syncConversations === 'function') H.syncConversations();
  },

  authPage() {
    document.getElementById('bottomNav').style.display = 'none';
    document.getElementById('mainArea').innerHTML = `
      <div class="auth-wrap">
        <div class="auth-logo">
          <img src="img/icon-192.png" alt="Hostly" onclick="H.logoTap()" style="width:90px;height:90px;border-radius:22px;margin-bottom:16px;box-shadow:0 8px 24px rgba(0,0,0,.3);cursor:pointer">
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
    const _h = window.H;
    if(['Post'].includes(name)&&!_h.currentUser()){_h.requireAuth('Log in to post an ad');return;}
    if(name==='Account'&&!_h.currentUser()){_h.requireAuth('Sign in to your account');return;}
    if(_h.isAdminPage(name)&&(!_h.isAdmin()||!_h.state.adminSession)){_h.toast('Admin login required');return;}
    _h.pageStack=[];
    document.getElementById('bottomNav').style.display='flex';
    document.querySelectorAll('.nav-btn').forEach(function(b){b.classList.remove('active');});
    const target=btn||document.querySelector('[data-nav="'+name+'"]');
    if(target)target.classList.add('active');
    await _h.renderPage(name);
  },

  async openInner(name, params) {
    const _h = window.H;
    const _gated=["Messages","Chat","MyListings","Favorites","Profile","Settings","Wallet","Boost","Notifications","Security"];
    if(_gated.includes(name)&&!_h.currentUser()){_h.requireAuth("Sign in to continue");return;}
    if (_h.isAdminPage(name) && (!_h.isAdmin() || !_h.state.adminSession)) { _h.toast('Admin login required'); return; }
    this.pageStack.push({ name: this.currentPageName, params: this.currentPageParams });
    document.getElementById('bottomNav').style.display = 'none';
    await this.renderPage(name, params);
  },

  async goBack() {
    if (H.state._backToAccount) { H.state._backToAccount = false; this.pageStack.pop(); H.showAccountMenu(); return; }
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
    const _fadeEl = document.getElementById('mainArea');
    if (_fadeEl) { _fadeEl.style.opacity='0'; await new Promise(function(r){ setTimeout(r,80); }); _fadeEl.style.opacity='1'; }
    // guest browse enabled
    if (this.canAccessPage && !this.canAccessPage(name)) { this.toast('Access denied'); await this.navTo('Home'); return; }
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
    l.views = (l.views || 0) + 1;
    // Track recently viewed
    const rv = JSON.parse(localStorage.getItem('hostly_rv')||'[]');
    const filtered_rv = rv.filter(x => x !== l.id);
    filtered_rv.unshift(l.id);
    localStorage.setItem('hostly_rv', JSON.stringify(filtered_rv.slice(0,10)));
    this.saveState();
    this.openInner('Detail', { id });
  },

  toggleSort() {
    const sheet = document.getElementById('actionSheet');
    const bg = document.getElementById('sheetBg');
    const cur = H.state._sortMode || 'newest';
    const opts = [
      {id:'newest', label:'Newest First'},
      {id:'oldest', label:'Oldest First'},
      {id:'price_asc', label:'Price: Low to High'},
      {id:'price_desc', label:'Price: High to Low'},
      {id:'views', label:'Most Viewed'}
    ];
    let html = '<div class="sheet-header">Sort By</div>';
    opts.forEach(function(o) {
      const st = o.id === cur ? 'color:#1A3A8F;font-weight:700' : '';
      const ck = o.id === cur ? '&#10003; ' : '';
      html += '<button class="sheet-item" style="' + st + '" onclick="H.setSort(this.dataset.id)" data-id="' + o.id + '">' + ck + o.label + '</button>';
    });
    html += '<button class="sheet-close" onclick="H.closeSheet()">Cancel</button>';
    sheet.innerHTML = html;
    sheet.classList.add('open');
    bg.classList.add('open');
  },

  setSort(mode) {
    H.state._sortMode = mode;
    H.closeSheet();
    if (H.currentPageName === 'Browse') H.renderPage('Browse', H.currentPageParams);
    else H.navTo('Home');
  },

  showPriceFilter() {
    const sheet = document.getElementById('actionSheet');
    const bg = document.getElementById('sheetBg');
    const min = H.state._priceMin || '';
    const max = H.state._priceMax || '';
    sheet.innerHTML = '<div class="sheet-header">Filter by Price</div>'
      + '<div style="padding:0 16px 16px">'
      + '<label style="font-size:12px;color:var(--sub);display:block;margin-bottom:4px">Min Price (USD)</label>'
      + '<input id="priceMinIn" type="number" value="'+min+'" placeholder="0" class="fi" style="margin-bottom:12px">'
      + '<label style="font-size:12px;color:var(--sub);display:block;margin-bottom:4px">Max Price (USD)</label>'
      + '<input id="priceMaxIn" type="number" value="'+max+'" placeholder="Any" class="fi" style="margin-bottom:16px">'
      + '<button onclick="H.applyPriceFilter()" style="width:100%;padding:13px;background:#1A3A8F;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:Inter,sans-serif;cursor:pointer">Apply Filter</button>'
      + '<button onclick="H.clearPriceFilter()" style="width:100%;padding:13px;background:transparent;color:var(--sub);border:none;font-size:14px;font-family:Inter,sans-serif;cursor:pointer;margin-top:4px">Clear Filter</button>'
      + '</div>'
      + '<button class="sheet-close" onclick="H.closeSheet()">Cancel</button>';
    sheet.classList.add('open');
    bg.classList.add('open');
  },

  applyPriceFilter() {
    H.state._priceMin = document.getElementById('priceMinIn').value;
    H.state._priceMax = document.getElementById('priceMaxIn').value;
    H.closeSheet();
    if (H.currentPageName === 'Browse') H.renderPage('Browse', H.currentPageParams);
    else H.navTo('Home');
  },

  clearPriceFilter() {
    H.state._priceMin = '';
    H.state._priceMax = '';
    H.closeSheet();
    if (H.currentPageName === 'Browse') H.renderPage('Browse', H.currentPageParams);
    else H.navTo('Home');
  },

  setLocFilter(loc, btn) {
    this.state.cityFilter = loc;
    this.saveState();
    document.querySelectorAll('.loc-filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    this.navTo('Home');
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
    H.toast && H.toast('Tap ' + this.logoTaps + ' of 7');
    if (this.logoTaps >= 7) {
      this.logoTaps = 0;
      if (this.isAdmin()) this.openInner('Admin');
    }
  },

  // â”€â”€â”€ CategoryView stub â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  _registerExtraPages() {
    H.pages.About = function() {
      return '<div class="page active">' + H.innerTopbar('About Hostly')
        + '<div class="about-wrap">'
        + '<div class="about-hero"><div class="about-brand">Host<em>ly</em></div><div class="about-tag">Zimbabwe&#39;s #1 Free Marketplace</div></div>'
        + '<div class="about-card"><div class="about-sec-title">Our Mission</div><div class="about-body">Hostly connects buyers and sellers across Zimbabwe, making it easy to buy, sell, and discover products and services in your local community. We believe commerce should be simple, safe, and accessible to everyone.</div></div>'
        + '<div class="about-card"><div class="about-sec-title">What We Offer</div><div class="about-grid">'
        + ['Free Listings','Secure Messaging','WhatsApp Connect','All Categories','Province Filters','Boost Your Ads'].map(function(f){ return '<div class="about-feat">'+f+'</div>'; }).join('')
        + '</div></div>'
        + '<div class="about-card"><div class="about-sec-title">Contact Us</div>'
        + '<div class="about-contact-row" onclick="window.location.href=\'mailto:chakusaprince@gmail.com\'"><div class="about-contact-ic email-ic"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div><div class="about-contact-label">Support Email</div><div class="about-contact-val">chakusaprince@gmail.com</div></div></div>'
        + '<div class="about-contact-row" onclick="window.open(\'https://wa.me/971589772645\')"><div class="about-contact-ic wa-ic"><svg viewBox="0 0 24 24" width="20" height="20" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg></div><div><div class="about-contact-label">WhatsApp Support</div><div class="about-contact-val">+971 589 772 645</div></div></div>'
        + '</div>'
        + '<div class="about-ads-banner"><div class="about-ads-title">Advertise with Hostly</div><div class="about-ads-sub">Reach thousands of buyers across Zimbabwe</div><button class="about-ads-btn" onclick="H.openInner(\'Ads\')">View Packages</button></div>'
        + '</div></div>';
    };

    H.pages.Ads = function() {
      return '<div class="page active">' + H.innerTopbar('Advertise with Hostly')
        + '<div class="about-wrap">'
        + '<div class="ads-hero"><div class="ads-hero-title">Grow Your Business</div><div class="ads-hero-sub">Reach thousands of active buyers across all provinces of Zimbabwe</div></div>'
        + '<div class="ads-pkg"><div class="ads-pkg-name">Standard</div><div class="ads-pkg-price">$10/week</div><div class="ads-pkg-feat">&#10003; Featured listing for 7 days</div><div class="ads-pkg-feat">&#10003; Category placement</div><div class="ads-pkg-feat">&#10003; Basic analytics</div><button class="ads-pkg-btn" onclick="window.location.href=\'mailto:chakusaprince@gmail.com?subject=Standard Package\'">Get Started</button></div>'
        + '<div class="ads-pkg ads-pkg-hot"><div class="ads-pkg-badge">MOST POPULAR</div><div class="ads-pkg-name">Premium</div><div class="ads-pkg-price">$30/month</div><div class="ads-pkg-feat">&#10003; 30-day featured listing</div><div class="ads-pkg-feat">&#10003; Homepage banner</div><div class="ads-pkg-feat">&#10003; Priority support</div><div class="ads-pkg-feat">&#10003; Advanced analytics</div><button class="ads-pkg-btn ads-pkg-btn-hot" onclick="window.location.href=\'mailto:chakusaprince@gmail.com?subject=Premium Package\'">Get Started</button></div>'
        + '<div class="ads-pkg"><div class="ads-pkg-name">Enterprise</div><div class="ads-pkg-price">Contact Us</div><div class="ads-pkg-feat">&#10003; Custom campaign</div><div class="ads-pkg-feat">&#10003; All platforms</div><div class="ads-pkg-feat">&#10003; Dedicated manager</div><div class="ads-pkg-feat">&#10003; Full analytics</div><button class="ads-pkg-btn" onclick="window.location.href=\'mailto:chakusaprince@gmail.com?subject=Enterprise Package\'">Get Started</button></div>'
        + '<div class="ads-contact">Questions? <span onclick="window.location.href=\'mailto:chakusaprince@gmail.com\'" style="color:#1A3A8F;font-weight:600">chakusaprince@gmail.com</span> or <span onclick="window.open(\'https://wa.me/971589772645\')" style="color:#25D366;font-weight:600">WhatsApp us</span></div>'
        + '</div></div>';
    };
  },



  async saveListingToCloud(listing) {
    try {
      if (!window.supabase || typeof window.supabase.from !== 'function') return;
      const row = {
        id: listing.id,
        seller_id: listing.sellerId,
        seller_name: listing.sellerName || '',
        seller_phone: listing.sellerPhone || '',
        seller_phone: listing.sellerPhone || '',
        title: listing.title,
        description: listing.desc || '',
        price: listing.price || 0,
        currency: listing.currency || 'USD',
        category: listing.cat || 'other',
        province: listing.prov || '',
        city: listing.city || '',
        suburb: listing.suburb || '',
        photos: listing.photos || [],
        status: listing.status || 'active',
        boost: listing.boost || null,
        views: listing.views || 0,
        created_at: listing.createdAt ? new Date(listing.createdAt).toISOString() : new Date().toISOString()
      };
      const { error } = await window.supabase.from('listings').upsert(row);
      if (error) console.warn('Cloud save failed:', error.message);
      else console.log('Listing saved to cloud:', listing.id);
    } catch(e) { console.warn('saveListingToCloud error:', e.message); }
  },

  async deleteListingFromCloud(id) {
    try {
      if (!window.supabase || typeof window.supabase.from !== 'function') return;
      await window.supabase.from('listings').delete().eq('id', id);
      console.log('Listing deleted from cloud:', id);
    } catch(e) { console.warn('deleteListingFromCloud error:', e.message); }
  },

  async fetchListingsFromSupabase() {
    try {
      if (!window.supabase || typeof window.supabase.from !== 'function') return;
      const { data, error } = await window.supabase
        .from('listings')
        .select('*')
        .eq('status', 'active')
        .order('created_at', { ascending: false })
        .limit(200);
      if (error) { console.warn('Fetch failed:', error.message); return; }
      if (!data || !data.length) return;
      const cloudListings = data.map(function(r) {
        return {
          id: r.id,
          sellerId: r.seller_id,
          sellerName: r.seller_name || '',
          sellerPhone: r.seller_phone || '',
          sellerPhone: r.seller_phone || '',
          title: r.title,
          desc: r.description,
          price: r.price,
          currency: r.currency,
          cat: r.category,
          prov: r.province,
          city: r.city,
          suburb: r.suburb,
          photos: Array.isArray(r.photos) ? r.photos : (r.photos ? [r.photos] : []),
          status: r.status,
          boost: r.boost,
          views: r.views || 0,
          createdAt: r.created_at ? new Date(r.created_at).getTime() : Date.now()
        };
      });
      const localIds = new Set((H.state.listings||[]).map(function(l){ return l.id; }));
      cloudListings.forEach(function(cl) {
        if (!localIds.has(cl.id)) {
          H.state.listings.push(cl);
        } else {
          var idx = H.state.listings.findIndex(function(l){ return l.id===cl.id; });
          if (idx !== -1) H.state.listings[idx] = Object.assign(H.state.listings[idx], cl);
        }
      });
      H.saveState();
      console.log('Fetched', cloudListings.length, 'listings from cloud');
    } catch(e) { console.warn('fetchListingsFromSupabase error:', e.message); }
  },


  _registerJobPage() {
    H.pages.PostJob = function() {
      var u = H.currentUser();
      if (!u) return '<div class="page active">' + H.innerTopbar('Post a Job') + H.emptyState('Sign in required','Please sign in to post jobs',null,null) + '</div>';
      return '<div class="page active">' + H.innerTopbar('Post a Job')
        + '<div class="form-wrap" style="padding-bottom:40px">'
        + '<div style="background:linear-gradient(135deg,#1A3A8F,#2952cc);border-radius:16px;padding:20px;margin-bottom:20px;color:#fff">'
        + '<div style="font-size:18px;font-weight:800;margin-bottom:4px">Post a Job Opening</div>'
        + '<div style="font-size:13px;opacity:.85">Jobs are reviewed by admin within 24hrs before going live</div>'
        + '</div>'
        + '<div class="fg"><div class="fl">Company Name <span style="color:red">*</span></div><input class="fi" id="jCompany" placeholder="e.g. TechZim Solutions"></div>'
        + '<div class="fg"><div class="fl">Job Title <span style="color:red">*</span></div><input class="fi" id="jTitle" placeholder="e.g. Software Developer, Sales Manager"></div>'
        + '<div class="fg"><div class="fl">Job Type <span style="color:red">*</span></div>'
        + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">'
        + ['Full Time','Part Time','Contract','Freelance','Internship','Volunteer'].map(function(t){ var tid='jt_'+t.replace(' ','_'); return '<button class="filter-opt" id="'+tid+'" onclick="H._selectJobType(this)" data-type="'+t+'" style="padding:10px;border-radius:10px;border:2px solid var(--border);background:var(--card);font-size:13px;font-weight:600;cursor:pointer">'+t+'</button>'; }).join('')
        + '</div></div>'
        + '<div class="fg"><div class="fl">Industry <span style="color:red">*</span></div><select class="fi" id="jIndustry"><option value="">Select industry...</option>'
        + ['IT & Technology','Finance & Banking','Healthcare','Education','Construction','Hospitality & Tourism','Sales & Marketing','Admin & Office','Agriculture','Transport & Logistics','Manufacturing','Media & Communications','Legal','NGO & Non-profit','Other'].map(function(i){ return '<option>'+i+'</option>'; }).join('')
        + '</select></div>'
        + '<div class="fg"><div class="fl">Location <span style="color:red">*</span></div><select class="fi" id="jProv">'
        + H.PROVINCES.map(function(p){ return '<option>'+p+'</option>'; }).join('')
        + '</select></div>'
        + '<div class="fg"><div class="fl">Salary / Compensation</div>'
        + '<div style="display:flex;gap:8px">'
        + '<input class="fi" id="jSalaryMin" type="number" placeholder="Min (USD)" style="flex:1">'
        + '<input class="fi" id="jSalaryMax" type="number" placeholder="Max (USD)" style="flex:1">'
        + '</div>'
        + '<label style="display:flex;align-items:center;gap:8px;margin-top:8px;font-size:13px"><input type="checkbox" id="jNegotiable" onchange="H._toggleNegotiable(this)"> Negotiable / Not disclosed</label>'
        + '</div>'
        + '<div class="fg"><div class="fl">Job Description <span style="color:red">*</span></div><textarea class="fi" rows="5" id="jDesc" placeholder="Describe the role and responsibilities..."></textarea></div>'
        + '<div class="fg"><div class="fl">Requirements & Qualifications <span style="color:red">*</span></div><textarea class="fi" rows="4" id="jReqs" placeholder="e.g. Degree in Computer Science, 2+ years experience..."></textarea></div>'
        + '<div class="fg"><div class="fl">Application Deadline</div><input class="fi" id="jDeadline" type="date"></div>'
        + '<div class="fg"><div class="fl">How to Apply <span style="color:red">*</span></div><select class="fi" id="jApplyType" onchange="H._toggleApplyFields()">'
        + '<option value="email">Via Email</option><option value="whatsapp">Via WhatsApp</option><option value="both">Email & WhatsApp</option>'
        + '</select></div>'
        + '<div class="fg" id="jEmailWrap"><div class="fl">Contact Email</div><input class="fi" id="jEmail" type="email" placeholder="careers@company.com" value="'+H.escHtml(u.email||'')+'"></div>'
        + '<div class="fg" id="jPhoneWrap" style="display:none"><div class="fl">WhatsApp Number</div><input class="fi" id="jPhone" type="tel" placeholder="+263 77 123 4567" value="'+H.escHtml(u.phone||'')+'"></div>'
        + '<div style="background:#fff3cd;border:1px solid #ffc107;border-radius:12px;padding:14px;margin:16px 0;font-size:13px;color:#856404">'
        + '&#9888; By posting a job, you confirm this is a legitimate opportunity. Fraudulent postings will result in permanent account ban.'
        + '</div>'
        + '<button onclick="H._submitJob()" style="width:100%;padding:15px;background:#1A3A8F;color:#fff;border:none;border-radius:12px;font-size:16px;font-weight:700;cursor:pointer">Submit for Review</button>'
        + '<div style="font-size:12px;color:var(--sub);text-align:center;margin-top:10px">Jobs are reviewed within 24 hours</div>'
        + '</div></div>';
    };

    H._selectedJobType = '';
    H._selectJobType = function(el) {
      var type = el.dataset ? el.dataset.type : el;
      H._selectedJobType = type;
      document.querySelectorAll('[id^="jt_"]').forEach(function(b){ b.style.background='var(--card)'; b.style.color='var(--text)'; b.style.borderColor='var(--border)'; });
      var btn = typeof el === 'string' ? document.getElementById('jt_'+type.replace(' ','_')) : el;
      if (btn) { btn.style.background='#1A3A8F'; btn.style.color='#fff'; btn.style.borderColor='#1A3A8F'; }
    };

    H._toggleNegotiable = function(cb) { var d=cb.checked; document.getElementById('jSalaryMin').disabled=d; document.getElementById('jSalaryMax').disabled=d; };

    H._toggleApplyFields = function() {
      var type = document.getElementById('jApplyType').value;
      document.getElementById('jEmailWrap').style.display = type==='whatsapp' ? 'none' : '';
      document.getElementById('jPhoneWrap').style.display = type==='email' ? 'none' : '';
    };

    H._submitJob = function() {
      var u = H.currentUser();
      if (!u) { H.requireAuth('Sign in to post jobs'); return; }
      var company  = (document.getElementById('jCompany').value||'').trim();
      var title    = (document.getElementById('jTitle').value||'').trim();
      var type     = H._selectedJobType;
      var industry = (document.getElementById('jIndustry').value||'').trim();
      var prov     = (document.getElementById('jProv').value||'').trim();
      var salMin   = (document.getElementById('jSalaryMin').value||'').trim();
      var salMax   = (document.getElementById('jSalaryMax').value||'').trim();
      var negotiable = document.getElementById('jNegotiable').checked;
      var desc     = (document.getElementById('jDesc').value||'').trim();
      var reqs     = (document.getElementById('jReqs').value||'').trim();
      var deadline = (document.getElementById('jDeadline').value||'').trim();
      var applyType = document.getElementById('jApplyType').value;
      var email    = (document.getElementById('jEmail').value||'').trim();
      var phone    = (document.getElementById('jPhone').value||'').trim();
      if (!company)  { H.toast('Company name is required'); return; }
      if (!title)    { H.toast('Job title is required'); return; }
      if (!type)     { H.toast('Please select job type'); return; }
      if (!industry) { H.toast('Please select an industry'); return; }
      if (!desc)     { H.toast('Job description is required'); return; }
      if (!reqs)     { H.toast('Requirements are required'); return; }
      if (applyType !== 'whatsapp' && !email) { H.toast('Contact email is required'); return; }
      if (applyType !== 'email' && !phone)    { H.toast('WhatsApp number is required'); return; }
      var salary = negotiable ? 'Negotiable' : (salMin && salMax ? 'USD '+salMin+' - '+salMax : salMin ? 'From USD '+salMin : 'Not disclosed');
      var fullDesc = 'COMPANY: ' + company
        + '\nJOB TYPE: ' + type
        + '\nINDUSTRY: ' + industry
        + '\nSALARY: ' + salary
        + (deadline ? '\nDEADLINE: ' + deadline : '')
        + '\n\nDESCRIPTION:\n' + desc
        + '\n\nREQUIREMENTS:\n' + reqs
        + '\n\nHOW TO APPLY:'
        + (applyType !== 'whatsapp' ? '\nEmail: ' + email : '')
        + (applyType !== 'email' ? '\nWhatsApp: ' + phone : '');
      var job = {
        id: H.uid(),
        sellerId: u.id,
        sellerName: company,
        sellerPhone: phone || u.phone || '',
        title: title,
        desc: fullDesc,
        price: negotiable ? 0 : (parseInt(salMin)||0),
        currency: 'USD',
        cat: 'jobs',
        prov: prov,
        city: prov,
        suburb: company,
        photos: [],
        createdAt: Date.now(),
        status: 'pending',
        boost: null,
        views: 0,
        jobData: { company, type, industry, salary, email, phone, deadline }
      };
      H.state.listings.unshift(job);
      H.saveState();
      if (typeof H.saveListingToCloud === 'function') H.saveListingToCloud(job);
      H.toast('Job submitted for review!');
      H.goBack();
    };
  },

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

  // â”€â”€â”€ Account Menu (emoji"‘free) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  showAccountMenu(btn) {
    const u = this.currentUser();
    if (!u) return;
    const sheet = document.getElementById('actionSheet');
    const bg = document.getElementById('sheetBg');
    const I = this.ICONS;

    sheet.innerHTML = `
      <div class="sheet-header">Account Menu</div>
      <button class="sheet-item" onclick="H.closeSheet(); H.state._backToAccount=true; setTimeout(()=>H.openInner('Profile'),50)">
        <span class="sheet-icon">${I.user}</span>
        <span class="sheet-label">My Profile</span>
      </button>
      <button class="sheet-item" onclick="H.closeSheet(); H.state._backToAccount=true; setTimeout(()=>H.openInner('MyListings'),50)">
        <span class="sheet-icon">${I.doc}</span>
        <span class="sheet-label">My Listings</span>
      </button>
      <button class="sheet-item" onclick="H.closeSheet(); H.state._backToAccount=true; setTimeout(()=>H.openInner('Favorites'),50)">
        <span class="sheet-icon">${I.heart}</span>
        <span class="sheet-label">Saved & Favorites</span>
      </button>
      <button class="sheet-item" onclick="H.closeSheet(); H.state._backToAccount=true; setTimeout(()=>H.openInner('Wallet'),50)">
        <span class="sheet-icon">${I.wallet}</span>
        <span class="sheet-label">Wallet & Payments</span>
      </button>
      <button class="sheet-item" onclick="H.closeSheet(); H.state._backToAccount=true; setTimeout(()=>H.openInner('Settings'),50)">
        <span class="sheet-icon">${I.settings}</span>
        <span class="sheet-label">Settings</span>
      </button>
      <button class="sheet-item" onclick="H.closeSheet(); H.state._backToAccount=true; setTimeout(()=>H.openInner('Help'),50)">
        <span class="sheet-icon">${I.help}</span>
        <span class="sheet-label">Help & Support</span>
      </button>
      <button class="sheet-item" onclick="H.closeSheet(); H.state._backToAccount=true; setTimeout(function(){H.openInner('About');},50)">
        <span class="sheet-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></span>
        <span class="sheet-label">About Hostly</span>
      </button>
      <button class="sheet-item" onclick="H.closeSheet(); H.state._backToAccount=true; setTimeout(function(){H.openInner('Ads');},50)">
        <span class="sheet-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></span>
        <span class="sheet-label">Advertise with Us</span>
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
  requireAuth(msg) {
    const m = msg || 'Sign in to continue';
    const sheet = document.getElementById('actionSheet');
    const bg = document.getElementById('sheetBg');
    sheet.innerHTML = '<div style="text-align:center;padding:8px 0 16px">'
      + '<div style="width:56px;height:56px;background:#1A3A8F;border-radius:16px;display:flex;align-items:center;justify-content:center;margin:0 auto 16px"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#fff" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>'
      + '<div style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:6px">' + m + '</div>'
      + '<div style="font-size:13px;color:var(--sub);margin-bottom:24px">Join Zimbabwe\'s #1 free marketplace</div>'
      + '<button onclick="H.closeSheet();setTimeout(()=>H.authPage(),50)" style="display:block;width:100%;padding:14px;background:#1A3A8F;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;font-family:Inter,sans-serif;cursor:pointer;margin-bottom:10px">Sign In</button>'
      + '<button onclick="H.closeSheet()" style="display:block;width:100%;padding:12px;background:transparent;color:var(--sub);border:none;font-size:14px;font-family:Inter,sans-serif;cursor:pointer">Browse as Guest</button>'
      + '</div>';
    sheet.classList.add('open');
    bg.classList.add('open');
  },


  _showOnboarding() {
    if (localStorage.getItem('hostly_onboarded')) return;
    const slides = [
      {icon:'🏪', title:'Zimbabwe\'s Free Marketplace', sub:'Buy and sell anything across all provinces'},
      {icon:'📱', title:'Browse Without Signing Up', sub:'Explore listings freely. Sign in only when you\'re ready to buy or sell'},
      {icon:'💬', title:'Connect via WhatsApp', sub:'Chat directly with sellers via WhatsApp or in-app messaging'},
      {icon:'🚀', title:'Post Your Ad Free', sub:'List your items in minutes and reach thousands of buyers'}
    ];
    let cur = 0;
    const overlay = document.createElement('div');
    overlay.id = 'onboardOverlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:#1A3A8F;z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px;font-family:Inter,sans-serif';
    const render = () => {
      const s = slides[cur];
      overlay.innerHTML = `
        <div style="font-size:72px;margin-bottom:24px">${s.icon}</div>
        <div style="font-size:24px;font-weight:700;color:#fff;text-align:center;margin-bottom:12px">${s.title}</div>
        <div style="font-size:15px;color:rgba(255,255,255,.7);text-align:center;margin-bottom:48px;line-height:1.6">${s.sub}</div>
        <div style="display:flex;gap:8px;margin-bottom:40px">
          ${slides.map((_,i)=>`<div style="width:${i===cur?24:8}px;height:8px;border-radius:4px;background:${i===cur?'#F5A623':'rgba(255,255,255,.3)'}"></div>`).join('')}
        </div>
        ${cur < slides.length-1
          ? `<button onclick="window._onboardNext()" style="width:100%;padding:16px;background:#F5A623;color:#1A3A8F;border:none;border-radius:14px;font-size:16px;font-weight:700;font-family:Inter,sans-serif;cursor:pointer">Next</button>
             <button onclick="window._onboardSkip()" style="margin-top:12px;background:transparent;border:none;color:rgba(255,255,255,.6);font-size:14px;font-family:Inter,sans-serif;cursor:pointer">Skip</button>`
          : `<button onclick="window._onboardSkip()" style="width:100%;padding:16px;background:#F5A623;color:#1A3A8F;border:none;border-radius:14px;font-size:16px;font-weight:700;font-family:Inter,sans-serif;cursor:pointer">Get Started</button>`
        }
      `;
    };
    window._onboardNext = () => { cur++; render(); };
    window._onboardSkip = () => {
      localStorage.setItem('hostly_onboarded','1');
      overlay.remove();
    };
    document.body.appendChild(overlay);
    render();
  },

  _seedDemoData() {
    this.state._seeded = false;
    this.state.listings = (this.state.listings||[]).filter(l=>!l.id.startsWith("demo"));
    const now = Date.now();
    this.state.listings = [
      {id:'demo1',title:'iPhone 14 Pro Max 256GB',photos:['https://picsum.photos/id/1/600/400'],desc:'Excellent condition, bought 6 months ago. Comes with original box and accessories. No scratches.',price:850,currency:'USD',cat:'electronics',prov:'Harare',city:'Harare CBD',suburb:'Avondale',sellerId:'demo_seller1',status:'active',createdAt:now-3600000,views:24,photos:[]},
      {id:'demo2',title:'Toyota Vitz 2018 - Low Mileage',photos:['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600'],desc:'Well maintained, full service history. Fuel efficient. Negotiable for serious buyers.',price:7500,currency:'USD',cat:'vehicles',prov:'Harare',city:'Harare CBD',suburb:'Borrowdale',sellerId:'demo_seller2',status:'active',createdAt:now-7200000,views:56,photos:[]},
      {id:'demo3',title:'3 Bedroom House for Rent - Borrowdale',photos:['https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600'],desc:'Spacious 3 bed house with garden, garage, solar and borehole. Available immediately.',price:1200,currency:'USD',cat:'property',prov:'Harare',city:'Harare CBD',suburb:'Borrowdale',sellerId:'demo_seller3',status:'active',createdAt:now-86400000,views:103,photos:[]},
      {id:'demo4',title:'Samsung 55" Smart TV 4K',photos:['https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?w=600'],desc:'Barely used Samsung QLED TV. Perfect working condition with remote and stand.',price:450,currency:'USD',cat:'electronics',prov:'Bulawayo',city:'Bulawayo CBD',suburb:'Hillside',sellerId:'demo_seller1',status:'active',createdAt:now-172800000,views:31,photos:[]},
      {id:'demo5',title:'Sofa Set - 7 Seater L-Shape',photos:['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600'],desc:'Modern L-shape sofa in grey fabric. Good condition, selling due to relocation.',price:320,currency:'USD',cat:'furniture',prov:'Harare',city:'Harare CBD',suburb:'Greendale',sellerId:'demo_seller2',status:'active',createdAt:now-259200000,views:18,photos:[]},
      {id:'demo6',title:'Software Developer - Remote Job',photos:['https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600'],desc:'Looking for React/Node developer. 2+ years experience. USD salary. Apply with CV.',price:0,currency:'USD',cat:'jobs',prov:'Harare',city:'Harare CBD',suburb:'CBD',sellerId:'demo_seller3',status:'active',createdAt:now-43200000,views:89,photos:[]},
      {id:'demo7',title:'Fresh Farm Eggs - 30 Pack',photos:['https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=600'],desc:'Free range eggs from our farm. Delivery available in Harare. WhatsApp to order.',price:5,currency:'USD',cat:'agriculture',prov:'Mashonaland East',city:'Marondera',suburb:'Marondera',sellerId:'demo_seller1',status:'active',createdAt:now-21600000,views:12,photos:[]},
      {id:'demo8',title:'Room to Rent - Warren Park',photos:['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600'],desc:'Furnished single room, all utilities included. Quiet neighborhood, close to shops.',price:120,currency:'USD',cat:'rooms',prov:'Harare',city:'Harare CBD',suburb:'Warren Park',sellerId:'demo_seller2',status:'active',createdAt:now-108000000,views:44,photos:[]}
    ];
    this.state.users = this.state.users || [];
    const hasDemoUsers = this.state.users.some(u => u.id === 'demo_seller1');
    if (!hasDemoUsers) {
      this.state.users.push(
        {id:'demo_seller1',name:'Tafadzwa Moyo',phone:'+263771234567',email:'tafadzwa@demo.com',role:'user',status:'active',verified:true,joinedAt:now-2592000000,settings:{theme:'light'}},
        {id:'demo_seller2',name:'Rumbidzai Ncube',phone:'+263772345678',email:'rumbi@demo.com',role:'user',status:'active',verified:false,joinedAt:now-5184000000,settings:{theme:'light'}},
        {id:'demo_seller3',name:'Tatenda Dube',phone:'+263773456789',email:'tatenda@demo.com',role:'user',status:'active',verified:true,joinedAt:now-7776000000,settings:{theme:'light'}}
      );
    }
    this.saveState();
  },
  openPhotoViewer(photos, idx) {
    let cur = idx || 0;
    const ov = document.createElement('div');
    ov.style.cssText = 'position:fixed;inset:0;background:#000;z-index:9999;display:flex;align-items:center;justify-content:center;flex-direction:column';
    const btn = '<button onclick="document.getElementById(\'pvOv\').remove()" style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,.2);border:none;color:#fff;width:36px;height:36px;border-radius:50%;font-size:20px;cursor:pointer">&times;</button>';
    ov.id = 'pvOv';
    ov.innerHTML = btn + '<img id="pvImg" src="' + photos[cur] + '" style="max-width:100%;max-height:85vh;object-fit:contain">';
    document.body.appendChild(ov);
    ov.addEventListener('click', function(e) { if(e.target === ov) ov.remove(); });
  },

  init() {
    this.state = this.loadState();
    this._registerCategoryView();
    this._registerJobPage();
    this._registerExtraPages();
    this._seedDemoData();
    setTimeout(()=>this._showOnboarding(),800);

    document.addEventListener('DOMContentLoaded', () => {
      const nav = document.getElementById('bottomNav');
      if (nav) {
        nav.addEventListener('click', e => {
          const btn  = e.target.closest('[data-nav]');
          if (!btn) return;
          const name = btn.dataset.nav;
          if (name === 'Post') { if(!H.currentUser()){H.requireAuth('Log in to post an ad');return;} H.navTo('Post', btn); }
          else if (name === 'Account') { if(!H.currentUser()){H.requireAuth('Sign in to your account');return;} H.showAccountMenu(btn); }
          else if (name === 'Messages') { if(!H.currentUser()){H.requireAuth('Sign in to view messages');return;} H.navTo(name, btn); }
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

// Pull to refresh
H.initPullToRefresh = function() {
  var el = document.getElementById('mainArea');
  if (!el) return;
  var startY = 0, pulling = false, indicator = null;
  el.addEventListener('touchstart', function(e) {
    if (el.scrollTop === 0) { startY = e.touches[0].clientY; pulling = true; }
  }, {passive:true});
  el.addEventListener('touchmove', function(e) {
    if (!pulling) return;
    var dy = e.touches[0].clientY - startY;
    if (dy > 60) {
      if (!indicator) {
        indicator = document.createElement('div');
        indicator.style.cssText = 'position:fixed;top:60px;left:50%;transform:translateX(-50%);background:#1A3A8F;color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;font-family:Inter,sans-serif;z-index:9999';
        indicator.textContent = '↓ Release to refresh';
        document.body.appendChild(indicator);
      }
    }
  }, {passive:true});
  el.addEventListener('touchend', function(e) {
    if (!pulling) return;
    var dy = e.changedTouches[0].clientY - startY;
    pulling = false;
    if (indicator) { indicator.remove(); indicator = null; }
    if (dy > 80) {
      H.toast('Refreshing...');
      if (typeof H.fetchListingsFromSupabase === 'function') {
        H.fetchListingsFromSupabase().then(function() {
          H.renderPage(H.currentPageName, H.currentPageParams);
          H.toast('Updated');
        }).catch(function() {
          H.renderPage(H.currentPageName, H.currentPageParams);
        });
      } else {
        H.renderPage(H.currentPageName, H.currentPageParams);
      }
    }
  }, {passive:true});
};

H.init();
