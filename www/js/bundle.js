/* Hostly bundle — built 2026-05-18T05:35:42Z */

;/* === www/js/app.js === */
﻿'use strict';
window.H = {
  KEY:          'hostly.v2',
  ADMIN_PHONES: ['+263770000000', '+971589772645'],

  // ── Provinces & Cities ───────────────────────────────────
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

  // ── Icons ────────────────────────────────────────────────
  ICONS: {
    search:   `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    user:     `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    doc:      `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
    heart:    `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    wallet:   `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
    settings: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    help:     `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    logout:   `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
    close:    `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    location: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    boost:    `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    eye:      `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    share:    `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  },

  // ── Categories ───────────────────────────────────────────
  CATEGORIES: [
    {id:'property',    name:'Property',    icon:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'},
    {id:'vehicles',    name:'Vehicles',    icon:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>'},
    {id:'rooms',       name:'Rooms',       icon:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4h20v16H2z"/><path d="M2 12h20"/></svg>'},
    {id:'electronics', name:'Electronics', icon:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'},
    {id:'jobs',        name:'Jobs',        icon:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="13" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>'},
    {id:'furniture',   name:'Furniture',   icon:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="10" rx="2"/><path d="M4 12h16v8H4z"/><line x1="8" y1="20" x2="16" y2="20"/></svg>'},
    {id:'fashion',     name:'Fashion',     icon:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 3l5 5 5-5"/><path d="M7 21l5-5 5 5"/><line x1="12" y1="8" x2="12" y2="16"/></svg>'},
    {id:'services',    name:'Services',    icon:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'},
    {id:'agriculture', name:'Agriculture', icon:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4"/><path d="M12 10v4"/><path d="M4.93 10.93l3.54 3.54"/><path d="M15.07 10.93l-3.54 3.54"/></svg>'},
    {id:'pets',        name:'Pets',        icon:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2c-2 0-3 2-3 4 0 2 2 4 4 5s2 2 2 4-1 4-3 4"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="6" r="2"/></svg>'},
    {id:'kids',        name:'Baby & Kids', icon:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="5"/><path d="M3 21v-2a7 7 0 0 1 4-6.33"/><path d="M21 21v-2a7 7 0 0 0-4-6.33"/></svg>'},
    {id:'other',       name:'Other',       icon:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="12" x2="15" y2="12"/></svg>'}
  ],

  BOOST_PLANS: [
    {id:'standard', name:'Standard Boost', price:2,  days:7,  desc:'Featured at the top of your category for 7 days.',  badgeText:''},
    {id:'premium',  name:'Premium Boost',  price:5,  days:14, desc:'Prime placement across category and search for 14 days.', badge:'hot', badgeText:'Most Popular'},
    {id:'mega',     name:'Mega Boost',     price:10, days:30, desc:'30 days of maximum visibility across all sections.', badgeText:'Best Value'}
  ],

  // ── App State ────────────────────────────────────────────
  state:            {},
  pageStack:        [],
  currentPageName:  'Home',
  currentPageParams:{},
  _activeChat:      null,
  camStream:        null,
  livenessTimer:    null,
  logoTaps:         0,
  logoTapsTimer:    null,
  pages:            {},

  defaultState: {
    users:[], listings:[], conversations:[], reports:[], txns:[],
    saves:{}, notifs:{}, savedSearches:{}, currentUserId:null, cityFilter:'All Zimbabwe',
    _sortMode:'newest', _priceMin:'', _priceMax:'',
    adminLogs:[], supportTickets:[], adminSession:null, topupRequests:[]
  },

  // ── Persistence ──────────────────────────────────────────
  loadState() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return JSON.parse(JSON.stringify(this.defaultState));
      return Object.assign(JSON.parse(JSON.stringify(this.defaultState)), JSON.parse(raw));
    } catch { return JSON.parse(JSON.stringify(this.defaultState)); }
  },

  saveState() {
    try {
      // Strip sensitive fields before persisting — passwords must never live in localStorage
      const safe = JSON.parse(JSON.stringify(this.state));
      if (safe.users) safe.users.forEach(u => { delete u._localPassword; });
      localStorage.setItem(this.KEY, JSON.stringify(safe));
    }
    catch(e) { if(e.name==='QuotaExceededError') this.toast('Storage full — try deleting old listings'); }
  },

  // ── Utilities ────────────────────────────────────────────
  uid() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random()*16|0; return (c==='x'?r:(r&0x3|0x8)).toString(16);
    });
  },
  currentUser() {
    const H = window.H || this;
    return ((H.state&&H.state.users)||[]).find(u=>u.id===(H.state&&H.state.currentUserId)) || null;
  },
  isAdmin() { const u=this.currentUser(); return !!(u&&u.role==='admin'); },
  escHtml(s) {
    return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  },
  initials(n) { return (n||'?').split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase(); },
  categoryIcon(cid) {
    const cat = this.CATEGORIES.find(c=>c.id===cid);
    return cat ? cat.icon : `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/></svg>`;
  },
  timeAgo(t) {
    const s = Math.floor((Date.now()-t)/1000);
    if (s<60)     return 'just now';
    if (s<3600)   return Math.floor(s/60)+'m ago';
    if (s<86400)  return Math.floor(s/3600)+'h ago';
    if (s<604800) return Math.floor(s/86400)+'d ago';
    return new Date(t).toLocaleDateString();
  },
  fmtPrice(p,c) {
    if (!p && p!==0) return c==='USD'?'$0':'0 ZiG';
    const n = Number(p).toLocaleString();
    return c==='USD' ? '$'+n : n+' ZiG';
  },

  // ── Filtering ────────────────────────────────────────────
  filterListings(list, q) {
    const _s   = window.H ? window.H.state : {};
    const qry  = (q!==undefined ? q : (document.getElementById('searchIn')?.value||'')).toLowerCase().trim();
    const pMin = parseFloat(_s._priceMin)||0;
    const pMax = parseFloat(_s._priceMax)||Infinity;
    const sort = _s._sortMode||'newest';
    return list.filter(l => {
      if (_s.cityFilter && _s.cityFilter!=='All Zimbabwe') {
        if (!(l.city+' '+l.prov).toLowerCase().includes(_s.cityFilter.toLowerCase())) return false;
      }
      if (qry && !(l.title+' '+(l.desc||'')+' '+l.city+' '+(l.suburb||'')).toLowerCase().includes(qry)) return false;
      if ((l.price||0)<pMin || (l.price||0)>pMax) return false;
      return true;
    }).sort((a,b) => {
      const ba = (a.boost&&a.boost.until>Date.now())?1:0;
      const bb = (b.boost&&b.boost.until>Date.now())?1:0;
      if (ba!==bb) return bb-ba;
      if (sort==='newest')     return b.createdAt-a.createdAt;
      if (sort==='oldest')     return a.createdAt-b.createdAt;
      if (sort==='price_asc')  return (a.price||0)-(b.price||0);
      if (sort==='price_desc') return (b.price||0)-(a.price||0);
      if (sort==='views')      return (b.views||0)-(a.views||0);
      return b.createdAt-a.createdAt;
    });
  },

  // ── UI Components ────────────────────────────────────────
  toast(msg, duration=2600) {
    const el = document.getElementById('toastEl'); if(!el) return;
    el.textContent=msg; el.classList.add('show');
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(()=>el.classList.remove('show'), duration);
  },

  modal({ title, body, confirmText='OK', cancelText='Cancel', danger=false, onConfirm }) {
    const bg  = document.getElementById('modalBg');
    const box = document.getElementById('modalBox');
    box.innerHTML = `
      <h3>${this.escHtml(title)}</h3>
      <div style="font-size:14px;color:var(--sub);line-height:1.6;margin-bottom:4px">${body||''}</div>
      <div class="modal-btns">
        ${cancelText?`<button class="modal-btn cancel" onclick="H.closeModal()">${cancelText}</button>`:''}
        <button class="modal-btn ${danger?'danger':'confirm'}" id="mConfirm">${confirmText}</button>
      </div>`;
    bg.classList.add('open');
    document.getElementById('mConfirm').onclick = () => {
      if (onConfirm && onConfirm()===false) return;
      H.closeModal();
    };
    setTimeout(()=>document.getElementById('mConfirm')?.focus(), 50);
  },
  closeModal() { document.getElementById('modalBg').classList.remove('open'); },
  closeSheet() {
    document.getElementById('actionSheet').classList.remove('open');
    document.getElementById('sheetBg').classList.remove('open');
  },

  innerTopbar(title, hasAction=false, isHtml=false) {
    return `<div class="inner-topbar">
      <button class="back" onclick="H.goBack()" aria-label="Go back">
        <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="inner-topbar-title">${isHtml?title:this.escHtml(title)}</div>
      <div style="width:34px"></div>
    </div>`;
  },

  emptyState(title, sub, btn, onclick) {
    return `<div class="empty-state">
      <div class="empty-icon">${this.ICONS.search}</div>
      <div class="empty-title">${this.escHtml(title)}</div>
      <div class="empty-sub">${this.escHtml(sub)}</div>
      ${btn?`<button class="btn-pri" style="max-width:240px" onclick="${onclick}">${btn}</button>`:''}
    </div>`;
  },

  errorState(title, sub, retryFn) {
    const fn = retryFn ? `onclick="${retryFn}"` : '';
    return `<div class="error-state">
      <div class="error-icon">⚠️</div>
      <div class="error-title">${this.escHtml(title)}</div>
      <div class="error-sub">${this.escHtml(sub)}</div>
      ${retryFn ? `<button class="error-retry" ${fn}>Try Again</button>` : ''}
    </div>`;
  },

  skeletonCards(n) {
    const card = `<div class="skel-card">
      <div class="skel skel-thumb"></div>
      <div class="skel-body">
        <div class="skel skel-line w80"></div>
        <div class="skel skel-line w50"></div>
        <div class="skel skel-line w35"></div>
      </div>
    </div>`;
    return Array(n || 5).fill(card).join('');
  },

  renderListCard(l) {
    const H      = window.H;
    const seller = (H.state.users||[]).find(u=>u.id===l.sellerId);
    const photo  = (l.photos&&l.photos[0])
      ? `<img src="${l.photos[0]}" alt="${H.escHtml(l.title)}" loading="lazy">`
      : `<div class="ph">${H.categoryIcon(l.cat)}</div>`;
    const boosted = l.boost&&l.boost.until>Date.now();
    return `<div class="list-card-wrap" onclick="H.openListing('${l.id}')">
      <button class="share-card-btn" onclick="event.stopPropagation();H.shareListing&&H.shareListing('${l.id}')" title="Share">${H.ICONS.share}</button>
      <div class="list-card">
        <div class="list-thumb">${photo}</div>
        <div class="list-body">
          <div class="list-title">${H.escHtml(l.title)}</div>
          <div class="list-price">${H.escHtml(H.fmtPrice(l.price,l.currency))}</div>
          <div class="list-tags">
            <span class="tag">${H.ICONS.location} ${H.escHtml(l.city||l.prov||'')}</span>
            <span class="tag">&middot; ${H.timeAgo(l.createdAt)}</span>
            <span class="tag">&middot; ${H.ICONS.eye} ${l.views||0}</span>
            ${seller&&seller.verified?`<span class="blue-check" title="ID Verified"><svg viewBox="0 0 24 24" width="12" height="12"><polyline points="20 6 9 17 4 12"/></svg></span>`:''}
            ${boosted?`<span class="boost-pill">${H.ICONS.boost} Boosted</span>`:''}
          </div>
        </div>
      </div>
    </div>`;
  },

  renderFeatCard(l) {
    const H     = window.H;
    const photo = (l.photos&&l.photos[0])
      ? `<img src="${l.photos[0]}" alt="${H.escHtml(l.title)}" loading="lazy" style="width:100%;height:100%;object-fit:cover">`
      : `<div style="font-size:36px;display:flex;align-items:center;justify-content:center;height:100%">${H.categoryIcon(l.cat)}</div>`;
    return `<div class="feat-card" onclick="H.openListing('${l.id}')">
      <div class="feat-img">${photo}<div class="feat-badge">Featured</div></div>
      <div class="feat-body">
        <div class="feat-price">${H.escHtml(H.fmtPrice(l.price,l.currency))}</div>
        <div class="feat-title">${H.escHtml(l.title)}</div>
        <div class="feat-location">${H.ICONS.location} ${H.escHtml(l.city||l.prov||'')}</div>
      </div>
    </div>`;
  },

  // ── Camera ───────────────────────────────────────────────
  stopCam() {
    if (this.camStream)     { this.camStream.getTracks().forEach(t=>t.stop()); this.camStream=null; }
    if (this.livenessTimer) { clearInterval(this.livenessTimer); this.livenessTimer=null; }
  },

  // ── Image Compression ────────────────────────────────────
  compressImage(file, maxDim=1200, q=0.8) {
    return new Promise(res => {
      const r = new FileReader();
      r.onload = ev => {
        const img = new Image();
        img.onload = () => {
          let w=img.width, h=img.height;
          if (w>h&&w>maxDim){h=Math.round(h*maxDim/w);w=maxDim;}
          else if(h>maxDim){w=Math.round(w*maxDim/h);h=maxDim;}
          const c=document.createElement('canvas'); c.width=w; c.height=h;
          c.getContext('2d').drawImage(img,0,0,w,h);
          res(c.toDataURL('image/jpeg',q));
        };
        img.src=ev.target.result;
      };
      r.readAsDataURL(file);
    });
  },

  // ── Ban System ───────────────────────────────────────────
  checkBan() {
    const u=this.currentUser();
    if(!u||u.role==='admin'){document.getElementById('banScreen').classList.remove('show');return false;}
    if(u.status==='banned_temp'&&u.banUntil&&Date.now()>u.banUntil){
      u.status='active';u.banReason=null;u.banUntil=null;this.saveState();
    }
    if(u.status==='banned_perm'||u.status==='banned_temp'){this._showBanScreen(u);return true;}
    document.getElementById('banScreen').classList.remove('show');
    return false;
  },

  _showBanScreen(u) {
    const isTemp = u.status==='banned_temp';
    let countdown='';
    if(isTemp&&u.banUntil){
      const ms=u.banUntil-Date.now();
      const d=Math.floor(ms/86400000),h=Math.floor((ms%86400000)/3600000),m=Math.floor((ms%3600000)/60000);
      countdown=`Lifted in ${d>0?d+'d ':''}${h>0?h+'h ':''}${m}m`;
    }
    document.getElementById('banScreen').innerHTML=`
      <div class="ic">${isTemp?'⏳':'🚫'}</div>
      <h1>${isTemp?'Account Suspended':'Account Banned'}</h1>
      <p>${isTemp?'Your account has been temporarily suspended.':'Your account has been permanently banned.'} Contact support if you believe this is in error.</p>
      <div class="reason"><strong>Reason:</strong> ${this.escHtml(u.banReason||'Policy violation')}</div>
      ${countdown?`<div class="countdown">${countdown}</div>`:''}
      <button class="appeal" onclick="H.appealBan()">Submit Appeal</button>
      <button class="appeal" style="margin-top:8px;opacity:.7" onclick="H.logout()">Sign Out</button>`;
    document.getElementById('banScreen').classList.add('show');
    if(isTemp){clearTimeout(window._banTick);window._banTick=setTimeout(()=>this.checkBan(),60000);}
  },

  appealBan() {
    this.modal({
      title:'Submit Appeal',
      body:`<div class="fl">Your reason</div><textarea class="fi" id="appealText" rows="4" placeholder="Explain why this ban should be reviewed"></textarea>`,
      confirmText:'Submit',
      onConfirm:()=>{
        const txt=document.getElementById('appealText')?.value.trim();
        if(!txt){this.toast('Please describe your appeal');return false;}
        this.state.reports.push({id:this.uid(),reporterId:this.state.currentUserId,targetType:'appeal',targetId:this.state.currentUserId,reason:txt,t:Date.now(),status:'open'});
        this.saveState();this.toast('Appeal submitted. We will review within 24h.');
      }
    });
  },

  isAdminPage(name) { return ['Admin'].includes(name); },
  canAccessPage(name) {
    const H=window.H||this;
    if(H.isAdminPage(name)&&(!H.isAdmin()||!H.state.adminSession)) return false;
    return true;
  },
  adminLog(action,meta={}) {
    const u=this.currentUser(); if(!u) return;
    this.state.adminLogs.unshift({id:this.uid(),t:Date.now(),adminId:u.id,adminName:u.name||'Admin',action,meta});
    this.state.adminLogs=this.state.adminLogs.slice(0,300);
    this.saveState();
  },

  // ── Navigation ───────────────────────────────────────────
  authLogoTap() { window.location.href='admin.html'; },

  async boot() {
    H.openInner  = H.openInner.bind(H);
    H.goBack     = H.goBack.bind(H);
    H.renderPage = H.renderPage.bind(H);
    H.navTo      = H.navTo.bind(H);
    this.applyTheme();
    this.applyLanguage();
    if(this.state.currentUserId&&this.checkBan()) return;
    document.getElementById('bottomNav').style.display='flex';
    await this.navTo('Home');
    try {
      await this.fetchListingsFromSupabase();
      await this.renderPage(this.currentPageName, this.currentPageParams);
    } catch(e) { console.warn('Boot fetch failed:', e); }
    if(typeof H._setupRealtimeMessages==='function') H._setupRealtimeMessages();
    if(typeof H.syncConversations==='function') H.syncConversations();
    if(typeof H.syncApplications==='function') H.syncApplications();
    if(typeof H.syncNotifications==='function') H.syncNotifications();
    if(typeof H._setupRealtimeNotifs==='function') H._setupRealtimeNotifs();
    this._initPullToRefresh();
    this._initOfflineDetection();
    this._initPushNotifications();
    this.checkSavedSearches();
  },

  authPage() {
    document.getElementById('bottomNav').style.display='none';
    document.getElementById('mainArea').innerHTML=`
      <div class="auth-wrap">
        <div class="auth-logo">
          <img src="img/icon-192.png" alt="Hostly" onclick="H.logoTap()" style="width:90px;height:90px;border-radius:22px;margin-bottom:16px;box-shadow:0 8px 24px rgba(0,0,0,.3);cursor:pointer">
          <div>Host<em>ly</em></div>
        </div>
        <div class="auth-tag">Zimbabwe&#39;s Free Marketplace</div>
        <div class="auth-card" id="authCard"></div>
        <div class="auth-foot">
          By continuing you accept our
          <a href="#" onclick="event.preventDefault();H.authShowDoc('terms')">Terms</a> &amp;
          <a href="#" onclick="event.preventDefault();H.authShowDoc('privacy')">Privacy Policy</a>
        </div>
      </div>`;
    if(typeof H.authStepEmail==='function') H.authStepEmail();
  },

  async navTo(name, btn) {
    const H=window.H;
    if(['Post'].includes(name)&&!H.currentUser()){H.requireAuth('Log in to post an ad');return;}
    if(name==='Account'&&!H.currentUser()){H.requireAuth('Sign in to your account');return;}
    if(H.isAdminPage(name)&&(!H.isAdmin()||!H.state.adminSession)){H.toast('Admin login required');return;}
    H.pageStack=[];
    document.getElementById('bottomNav').style.display='flex';
    document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
    const target=btn||document.querySelector('[data-nav="'+name+'"]');
    if(target)target.classList.add('active');
    await H.renderPage(name);
  },

  async openInner(name, params) {
    const H=window.H;
    const gated=['Messages','Chat','MyListings','Favorites','Profile','Settings','Wallet','Boost','Notifications','Security'];
    if(gated.includes(name)&&!H.currentUser()){H.requireAuth('Sign in to continue');return;}
    if(H.isAdminPage(name)&&(!H.isAdmin()||!H.state.adminSession)){H.toast('Admin login required');return;}
    try {
      const area=document.getElementById('mainArea');
      this.pageStack.push({name:this.currentPageName,params:this.currentPageParams,scrollY:area?area.scrollTop:0});
      document.getElementById('bottomNav').style.display='none';
      await this.renderPage(name,params);
    } catch(e) {
      console.error('openInner error:',e);
      document.getElementById('bottomNav').style.display='flex';
      H.toast('Something went wrong. Please try again.');
    }
  },

  async goBack() {
    if(H.state._backToAccount){
      H.state._backToAccount=false;
      this.pageStack.pop();
      H.showAccountMenu();
      return;
    }
    this.stopCam();
    if(this.pageStack.length){
      const p=this.pageStack.pop();
      const isRoot=['Home','Browse','Messages','Post'].includes(p.name);
      if(isRoot){
        document.getElementById('bottomNav').style.display='flex';
        document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
        const m=document.querySelector(`[data-nav="${p.name}"]`); if(m) m.classList.add('active');
      }
      await this.renderPage(p.name,p.params,{scrollTo:p.scrollY||0});
    } else {
      document.getElementById('bottomNav').style.display='flex';
      await this.navTo('Home');
    }
  },

  async renderPage(name, params, opts) {
    const area=document.getElementById('mainArea');
    const scrollTo=(opts&&opts.scrollTo)||0;
    if(this.canAccessPage&&!this.canAccessPage(name)){this.toast('Access denied');await this.navTo('Home');return;}
    this.currentPageName=name; this.currentPageParams=params||{};
    const fn=this.pages[name]||this.pages.Home;
    if(!area) return;
    const res=fn(params||{});
    if(res instanceof Promise) {
      area.style.opacity='0';
      const html=await res;
      if(this.currentPageName!==name) return; // navigated away while loading
      area.innerHTML=html;
      area.scrollTop=scrollTo;
      requestAnimationFrame(()=>{ area.style.opacity='1'; });
    } else {
      area.innerHTML=res;
      area.scrollTop=scrollTo;
      if(area.style.opacity!=='1') area.style.opacity='1';
    }
    if(this.pages[name+'_after']) this.pages[name+'_after'](params||{});
    this._initPullToRefresh();
  },

  openListing(id) {
    const l=this.state.listings.find(x=>x.id===id); if(!l) return;
    l.views=(l.views||0)+1;
    const rv=JSON.parse(localStorage.getItem('hostly_rv')||'[]');
    const filtered=[...new Set([id,...rv.filter(x=>x!==id)])].slice(0,10);
    localStorage.setItem('hostly_rv',JSON.stringify(filtered));
    this.saveState();
    this.openInner('Detail',{id});
  },

  // ── Category Navigation ──────────────────────────────────
  filterByCat(cid) {
    const map = {
      vehicles:    'Vehicles',
      property:    'Property',
      electronics: 'Electronics',
      fashion:     'Fashion',
      furniture:   'Furniture',
      services:    'Services',
      jobs:        'Jobs',
      rooms:       'Rooms'
    };
    const page = map[cid];
    if (page) { this.openInner(page, {cid}); }
    else { this.openInner('CategoryView', {cid}); }
  },

  // ── Sort & Filter ────────────────────────────────────────
  toggleSort() {
    const sheet=document.getElementById('actionSheet');
    const bg=document.getElementById('sheetBg');
    const cur=H.state._sortMode||'newest';
    const opts=[
      {id:'newest',    label:'Newest First'},
      {id:'oldest',    label:'Oldest First'},
      {id:'price_asc', label:'Price: Low to High'},
      {id:'price_desc',label:'Price: High to Low'},
      {id:'views',     label:'Most Viewed'}
    ];
    let html='<div class="sheet-header">Sort By</div>';
    opts.forEach(o=>{
      const active=o.id===cur;
      html+=`<button class="sheet-item" style="${active?'color:#1A3A8F;font-weight:700':''}" onclick="H.setSort('${o.id}')">${active?'✓ ':''}${o.label}</button>`;
    });
    html+='<button class="sheet-close" onclick="H.closeSheet()">Cancel</button>';
    sheet.innerHTML=html; sheet.classList.add('open'); bg.classList.add('open');
  },
  setSort(mode){H.state._sortMode=mode;H.closeSheet();H.currentPageName==='Browse'?H.renderPage('Browse',H.currentPageParams):H.navTo('Home');},

  showPriceFilter() {
    const sheet=document.getElementById('actionSheet');
    const bg=document.getElementById('sheetBg');
    sheet.innerHTML='<div class="sheet-header">Filter by Price</div>'
      +'<div style="padding:0 16px 16px">'
      +'<label style="font-size:12px;color:var(--sub);display:block;margin-bottom:4px">Min Price (USD)</label>'
      +'<input id="priceMinIn" type="number" value="'+(H.state._priceMin||'')+'" placeholder="0" class="fi" style="margin-bottom:12px">'
      +'<label style="font-size:12px;color:var(--sub);display:block;margin-bottom:4px">Max Price (USD)</label>'
      +'<input id="priceMaxIn" type="number" value="'+(H.state._priceMax||'')+'" placeholder="Any" class="fi" style="margin-bottom:16px">'
      +'<button onclick="H.applyPriceFilter()" style="width:100%;padding:13px;background:#1A3A8F;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;cursor:pointer">Apply</button>'
      +'<button onclick="H.clearPriceFilter()" style="width:100%;padding:13px;background:transparent;color:var(--sub);border:none;font-size:14px;cursor:pointer;margin-top:4px">Clear</button>'
      +'</div><button class="sheet-close" onclick="H.closeSheet()">Cancel</button>';
    sheet.classList.add('open'); bg.classList.add('open');
  },
  applyPriceFilter(){H.state._priceMin=document.getElementById('priceMinIn').value;H.state._priceMax=document.getElementById('priceMaxIn').value;H.closeSheet();H.currentPageName==='Browse'?H.renderPage('Browse',H.currentPageParams):H.navTo('Home');},
  clearPriceFilter(){H.state._priceMin='';H.state._priceMax='';H.closeSheet();H.currentPageName==='Browse'?H.renderPage('Browse',H.currentPageParams):H.navTo('Home');},

  setLocFilter(loc,btn){
    this.state.cityFilter=loc; this.saveState();
    document.querySelectorAll('.loc-filter-btn').forEach(b=>b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    this.navTo('Home');
  },

  // ── Theme / Language ─────────────────────────────────────
  applyTheme() {
    const u=this.currentUser();
    const stored=localStorage.getItem('hostly_theme');
    const theme=(u&&u.settings&&u.settings.theme)||stored||'light';
    document.documentElement.setAttribute('data-theme', theme);
  },
  toggleDarkMode() {
    const cur=document.documentElement.getAttribute('data-theme')||'light';
    const next=cur==='dark'?'light':'dark';
    localStorage.setItem('hostly_theme',next);
    const u=H.currentUser();
    if(u){u.settings=u.settings||{};u.settings.theme=next;H.saveState();}
    document.documentElement.setAttribute('data-theme',next);
    const toggle=document.getElementById('darkModeToggle');
    if(toggle) toggle.textContent=next==='dark'?'On':'Off';
  },
  isExpired(l) { return !!(l.expiresAt && Date.now() > l.expiresAt); },
  renewListing(id) {
    const l=(H.state.listings||[]).find(x=>x.id===id); if(!l) return;
    l.expiresAt=Date.now()+(30*24*60*60*1000);
    H.saveState();
    if(typeof H.saveListingToCloud==='function') H.saveListingToCloud(l);
    H.toast('Listing renewed for 30 days');
    H.renderPage('MyListings');
  },
  applyLanguage() {
    const u=this.currentUser();
    if(u&&u.language) document.querySelectorAll('.current-lang').forEach(el=>el.textContent=u.language);
  },

  // ── Logo easter-egg (7 taps → admin) ─────────────────────
  logoTap() {
    this.logoTaps++;
    clearTimeout(this.logoTapsTimer);
    this.logoTapsTimer=setTimeout(()=>{this.logoTaps=0;},4000);
    if(this.logoTaps>=7){this.logoTaps=0;window.location.href='admin.html';}
  },

  // ── Pull-to-Refresh ──────────────────────────────────────
  _initPullToRefresh() {
    const el=document.getElementById('mainArea'); if(!el) return;
    if(el._ptrCleanup) el._ptrCleanup();
    let startY=0, curY=0, pulling=false, refreshing=false;
    let ind=document.getElementById('ptr-ind');
    if(!ind){
      ind=document.createElement('div');
      ind.id='ptr-ind';
      ind.innerHTML='<div class="ptr-arc"></div><span class="ptr-txt">Pull to refresh</span>';
      ind.style.cssText='position:fixed;top:56px;left:50%;transform:translateX(-50%) translateY(-60px);background:#1A3A8F;color:#fff;padding:9px 18px;border-radius:24px;font-family:Inter,sans-serif;font-size:13px;font-weight:600;z-index:9000;display:flex;align-items:center;gap:8px;box-shadow:0 4px 16px rgba(26,58,143,.35);pointer-events:none;transition:transform .2s,opacity .2s;opacity:0;';
      document.body.appendChild(ind);
    }
    if(!document.getElementById('ptr-css')){
      const s=document.createElement('style'); s.id='ptr-css';
      s.textContent=`.ptr-arc{width:14px;height:14px;border:2px solid rgba(255,255,255,.35);border-top-color:#fff;border-radius:50%;}.ptr-arc.spin{animation:ptrspin .7s linear infinite;}@keyframes ptrspin{to{transform:rotate(360deg)}}`;
      document.head.appendChild(s);
    }
    function show(state, dist=0){
      const y=Math.min(Math.max(dist-50,0),28);
      ind.style.transform=`translateX(-50%) translateY(${y}px)`;
      ind.style.opacity='1';
      const arc=ind.querySelector('.ptr-arc');
      const txt=ind.querySelector('.ptr-txt');
      if(state==='pulling'){ arc.classList.remove('spin'); txt.textContent='Pull to refresh'; }
      else if(state==='release'){ arc.classList.remove('spin'); txt.textContent='Release to refresh ✓'; }
      else if(state==='refreshing'){ arc.classList.add('spin'); txt.textContent='Refreshing…'; ind.style.transform='translateX(-50%) translateY(0px)'; }
    }
    function hide(){ ind.style.opacity='0'; ind.style.transform='translateX(-50%) translateY(-60px)'; }
    async function doRefresh(){
      if(refreshing) return; refreshing=true;
      show('refreshing');
      try{
        const pageName=H.currentPageName;
        if(typeof H.fetchListingsFromSupabase==='function') await H.fetchListingsFromSupabase();
        if(H.currentUser()) {
          if(typeof H.syncConversations==='function') await H.syncConversations();
          if(typeof H.syncApplications==='function') H.syncApplications();
        }
        await H.renderPage(pageName, H.currentPageParams);
        H.toast('Updated');
      } catch(e){ console.warn('Pull refresh error:',e); }
      setTimeout(()=>{ hide(); refreshing=false; },500);
    }
    function onStart(e){
      if(el.scrollTop>0) return;
      startY=e.touches[0].clientY; curY=startY; pulling=true;
    }
    function onMove(e){
      if(!pulling) return;
      curY=e.touches[0].clientY;
      const dist=curY-startY;
      if(dist<0){ if(dist<-10) cleanup(); return; }
      if(dist>8) e.preventDefault();
      show(dist>80?'release':'pulling', dist);
    }
    function onEnd(){
      if(!pulling) return; pulling=false;
      const dist=curY-startY;
      if(dist>80&&!refreshing){ doRefresh(); }
      else { hide(); }
    }
    function cleanup(){ pulling=false; hide(); }
    el.addEventListener('touchstart',onStart,{passive:true});
    el.addEventListener('touchmove', onMove,{passive:false});
    el.addEventListener('touchend',  onEnd, {passive:true});
    el.addEventListener('touchcancel',cleanup,{passive:true});
    el._ptrCleanup=function(){
      el.removeEventListener('touchstart',onStart);
      el.removeEventListener('touchmove', onMove);
      el.removeEventListener('touchend',  onEnd);
      el.removeEventListener('touchcancel',cleanup);
    };
  },

  // ── Supabase Cloud Sync ──────────────────────────────────
  async saveListingToCloud(listing) {
    try {
      if(!window.supabase||typeof window.supabase.from!=='function') return;
      const {error}=await window.supabase.from('listings').upsert({
        id:listing.id, seller_id:listing.sellerId,
        seller_name:listing.sellerName||'', seller_phone:listing.sellerPhone||'',
        title:listing.title, description:listing.desc||'',
        price:listing.price||0, currency:listing.currency||'USD',
        category:listing.cat||'other', province:listing.prov||'',
        city:listing.city||'', suburb:listing.suburb||'',
        photos:listing.photos||[], status:listing.status||'active',
        boost:listing.boost||null, views:listing.views||0,
        created_at:listing.createdAt?new Date(listing.createdAt).toISOString():new Date().toISOString(),
        expires_at:listing.expiresAt?new Date(listing.expiresAt).toISOString():null
      });
      if(error) console.warn('Cloud save failed:',error.message);
    } catch(e){ console.warn('saveListingToCloud:',e.message); }
  },

  async deleteListingFromCloud(id) {
    try {
      if(!window.supabase||typeof window.supabase.from!=='function') return;
      await window.supabase.from('listings').delete().eq('id',id);
    } catch(e){ console.warn('deleteListingFromCloud:',e.message); }
  },

  async uploadPhotoToStorage(blob) {
    try {
      const sb = window.supabase;
      if (!sb || typeof sb.storage === 'undefined') return null;
      const u = H.currentUser();
      if (!u) return null;
      const path = `listings/${u.id}/${Date.now()}_${Math.random().toString(36).slice(2)}.jpg`;
      const { error } = await sb.storage.from('listings-photos').upload(path, blob, {
        contentType: 'image/jpeg', cacheControl: '31536000', upsert: false
      });
      if (error) { console.warn('uploadPhotoToStorage:', error.message); return null; }
      const { data } = sb.storage.from('listings-photos').getPublicUrl(path);
      return data.publicUrl || null;
    } catch(e) { console.warn('uploadPhotoToStorage:', e.message); return null; }
  },

  async fetchListingsFromSupabase() {
    try {
      if(!window.supabase||typeof window.supabase.from!=='function') return;
      const {data,error}=await window.supabase
        .from('listings').select('*')
        .eq('status','active')
        .order('created_at',{ascending:false})
        .limit(200);
      if(error||!data||!data.length) return;
      const cloud=data.map(r=>({
        id:r.id, sellerId:r.seller_id, sellerName:r.seller_name||'',
        sellerPhone:r.seller_phone||'', title:r.title, desc:r.description,
        price:r.price, currency:r.currency, cat:r.category,
        prov:r.province, city:r.city, suburb:r.suburb,
        photos:Array.isArray(r.photos)?r.photos:(r.photos?[r.photos]:[]),
        status:r.status, boost:r.boost, views:r.views||0,
        createdAt:r.created_at?new Date(r.created_at).getTime():Date.now(),
        expiresAt:r.expires_at?new Date(r.expires_at).getTime():null
      }));
      const ids=new Set((H.state.listings||[]).map(l=>l.id));
      cloud.forEach(cl=>{
        if(!ids.has(cl.id)) H.state.listings.push(cl);
        else {
          const i=H.state.listings.findIndex(l=>l.id===cl.id);
          if(i!==-1) H.state.listings[i]=Object.assign(H.state.listings[i],cl);
        }
      });
      H.saveState();
    } catch(e){ console.warn('fetchListingsFromSupabase:',e.message); }
  },

  _setupRealtimeMessages() {
    try {
      if(!window.supabase||typeof window.supabase.channel!=='function') return;
      if(window._msgChannel) window._msgChannel.unsubscribe();
      window._msgChannel=window.supabase.channel('messages-rt')
        .on('postgres_changes',{event:'INSERT',schema:'public',table:'messages'},payload=>{
          const msg=payload.new; if(!msg) return;
          const conv=(H.state.conversations||[]).find(c=>c.id===msg.conversation_id);
          if(conv){
            const ex=conv.messages.find(m=>m.id===msg.id);
            if(!ex){
              conv.messages.push({id:msg.id,from:msg.sender_id,senderName:msg.sender_name||'',text:msg.text,t:new Date(msg.created_at).getTime(),read:false});
              H.saveState();
              if(H.currentPageName==='Chat'&&H.currentPageParams&&H.currentPageParams.id===msg.conversation_id)
                H.renderPage('Chat',{id:msg.conversation_id});
              H.pushNotif&&H.pushNotif(H.state.currentUserId,'New message',msg.text||'');
            }
          }
        }).subscribe();
    } catch(e){ console.warn('Realtime setup failed:',e.message); }
  },

  // ── Sync job applications from Supabase ──────────────────
  async syncApplications() {
    try {
      const sb = window.supabase;
      if (!sb || typeof sb.from !== 'function') return;
      const u = H.currentUser(); if (!u) return;
      const { data, error } = await sb.from('applications')
        .select('*')
        .or(`applicant_id.eq.${u.id},employer_id.eq.${u.id}`)
        .order('applied_at', { ascending: false });
      if (error || !data) return;
      const remote = data.map(r => ({
        id: r.id, jobId: r.job_id, jobTitle: r.job_title,
        company: r.company, applicantId: r.applicant_id,
        applicantName: r.applicant_name, applicantPhone: r.applicant_phone,
        applicantEmail: r.applicant_email, message: r.message,
        status: r.status, employerId: r.employer_id,
        appliedAt: r.applied_at ? new Date(r.applied_at).getTime() : Date.now()
      }));
      const ids = new Set((H.state.applications || []).map(a => a.id));
      remote.forEach(a => {
        if (!ids.has(a.id)) (H.state.applications = H.state.applications || []).push(a);
        else {
          const i = H.state.applications.findIndex(x => x.id === a.id);
          if (i !== -1) H.state.applications[i] = Object.assign(H.state.applications[i], a);
        }
      });
      H.saveState();
    } catch(e) { console.warn('syncApplications:', e.message); }
  },

  async saveApplicationToCloud(app) {
    try {
      const sb = window.supabase;
      if (!sb || typeof sb.from !== 'function') return;
      const { error } = await sb.from('applications').upsert({
        id: app.id, job_id: app.jobId, job_title: app.jobTitle,
        company: app.company || '', applicant_id: app.applicantId,
        applicant_name: app.applicantName, applicant_phone: app.applicantPhone,
        applicant_email: app.applicantEmail, message: app.message,
        status: app.status || 'pending', employer_id: app.employerId,
        applied_at: app.appliedAt ? new Date(app.appliedAt).toISOString() : new Date().toISOString()
      });
      if (error) console.warn('saveApplicationToCloud:', error.message);
    } catch(e) { console.warn('saveApplicationToCloud:', e.message); }
  },

  async updateApplicationStatusCloud(appId, status) {
    try {
      const sb = window.supabase;
      if (!sb || typeof sb.from !== 'function') return;
      await sb.from('applications').update({ status }).eq('id', appId);
    } catch(e) { console.warn('updateApplicationStatusCloud:', e.message); }
  },

  // ── Sync conversations from Supabase ─────────────────────
  async syncConversations() {
    try {
      const sb = window.supabase;
      if (!sb || typeof sb.from !== 'function') return;
      const u = H.currentUser(); if (!u) return;
      const { data: convs, error } = await sb.from('conversations')
        .select('id, members, listing_id, created_at, updated_at')
        .contains('members', [u.id])
        .order('updated_at', { ascending: false })
        .limit(100);
      if (error || !convs) return;
      for (const c of convs) {
        let local = (H.state.conversations || []).find(x => x.id === c.id);
        if (!local) {
          local = { id: c.id, members: c.members, listingId: c.listing_id, messages: [] };
          (H.state.conversations = H.state.conversations || []).push(local);
        }
        // fetch recent messages for this conversation
        const { data: msgs } = await sb.from('messages')
          .select('id, sender_id, sender_name, text, read, created_at')
          .eq('conversation_id', c.id)
          .order('created_at', { ascending: true })
          .limit(200);
        if (msgs) {
          const existing = new Set(local.messages.map(m => m.id));
          msgs.forEach(m => {
            if (!existing.has(m.id)) {
              local.messages.push({
                id: m.id, from: m.sender_id, senderName: m.sender_name || '',
                text: m.text, t: new Date(m.created_at).getTime(), read: m.read
              });
            }
          });
        }
      }
      H.saveState();
    } catch(e) { console.warn('syncConversations:', e.message); }
  },

  async saveMessageToCloud(convId, msg) {
    try {
      const sb = window.supabase;
      if (!sb || typeof sb.from !== 'function') return;
      await sb.from('messages').upsert({
        id: msg.id, conversation_id: convId,
        sender_id: msg.from, sender_name: msg.senderName || '',
        text: msg.text, read: msg.read || false,
        created_at: new Date(msg.t || Date.now()).toISOString()
      });
    } catch(e) { console.warn('saveMessageToCloud:', e.message); }
  },

  async ensureConversationInCloud(conv) {
    try {
      const sb = window.supabase;
      if (!sb || typeof sb.from !== 'function') return;
      await sb.from('conversations').upsert({
        id: conv.id, members: conv.members,
        listing_id: conv.listingId || null
      });
    } catch(e) { console.warn('ensureConversationInCloud:', e.message); }
  },

  // ── Category View (fallback for unmapped categories) ─────
  _registerCategoryView() {
    this.pages.CategoryView=function({cid}){
      const cat=H.CATEGORIES.find(c=>c.id===cid)||{name:'Category',icon:''};
      const list=(H.state.listings||[]).filter(l=>l.status==='active'&&l.cat===cid);
      return `<div class="page active">${H.innerTopbar(cat.name)}
        <div class="listing-list">
          ${list.length?list.map(H.renderListCard).join(''):H.emptyState('No '+cat.name+' listings yet','Be the first to post in this category!','Post an Ad',"H.navTo('Post',null)")}
        </div>
      </div>`;
    };
  },

  // ── About & Ads Pages ────────────────────────────────────
  _registerExtraPages() {
    H.pages.About=function(){
      return '<div class="page active">'+H.innerTopbar('About Hostly')
        +'<div class="about-wrap">'
        +'<div class="about-hero"><div class="about-brand">Host<em>ly</em></div><div class="about-tag">Free Zimbabwean Online Marketplace</div></div>'
        +'<div class="about-card"><div class="about-sec-title">What is Hostly?</div><div class="about-body">Hostly is a free Zimbabwean online marketplace connecting buyers and sellers. Whether you are looking for goods, services, vehicles, property, or jobs, Hostly makes it easy to post, browse, and connect with people in your province and across Zimbabwe.</div></div>'
        +'<div class="about-card"><div class="about-sec-title">Who is it for?</div><div class="about-body">Hostly is for anyone in Zimbabwe — individuals selling personal items, small businesses promoting services, employers posting vacancies, and buyers searching for the best local deals. The app is free to download and free to use.</div></div>'
        +'<div class="about-card"><div class="about-sec-title">Key Features</div><div class="about-grid">'
        +['Free Listings','Secure Messaging','WhatsApp Connect','All Categories','Province Filters','Boost Your Ads','Job Board','Photo Uploads'].map(f=>'<div class="about-feat">'+f+'</div>').join('')
        +'</div></div>'
        +'<div class="about-card"><div class="about-sec-title">Legal &amp; Compliance</div><div class="about-body">Hostly operates as a platform for user-generated listings. We do not own, sell, or warrant any items listed. Users are responsible for ensuring their listings comply with applicable Zimbabwean law. Prohibited content (counterfeit goods, illegal services, misleading listings) will be removed and accounts suspended. By using Hostly you agree to our Terms of Service and Privacy Policy.</div></div>'
        +'<div class="about-card"><div class="about-sec-title">Contact Us</div>'
        +'<div class="about-contact-row" onclick="window.location.href=\'mailto:chakusaprince@gmail.com\'"><div class="about-contact-ic email-ic"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div><div class="about-contact-label">Support Email</div><div class="about-contact-val">chakusaprince@gmail.com</div></div></div>'
        +'<div class="about-contact-row" onclick="window.open(\'https://wa.me/971589772645\')"><div class="about-contact-ic wa-ic"><svg viewBox="0 0 24 24" width="20" height="20" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg></div><div><div class="about-contact-label">WhatsApp Support</div><div class="about-contact-val">+971 589 772 645</div></div></div>'
        +'</div>'
        +'<div class="about-ads-banner"><div class="about-ads-title">Advertise with Hostly</div><div class="about-ads-sub">Reach active buyers across all provinces of Zimbabwe</div><button class="about-ads-btn" onclick="H.openInner(\'Ads\')">Get in Touch</button></div>'
        +'<div style="text-align:center;font-size:12px;color:var(--text-muted,#999);padding:16px 0 4px">Hostly © 2026 · Made in Zimbabwe</div>'
        +'</div></div>';
    };

    H.pages.Ads=function(){
      return '<div class="page active">'+H.innerTopbar('Advertise with Hostly')
        +'<div class="about-wrap">'
        +'<div class="ads-hero"><div class="ads-hero-title">Grow Your Business</div><div class="ads-hero-sub">Connect with active buyers across all provinces of Zimbabwe. Tell us about your goals and we\'ll find the right fit for you.</div></div>'
        +'<div class="about-card"><div class="about-sec-title">What We Offer</div>'
        +'<div class="about-body" style="margin-bottom:0">'
        +'<div style="display:flex;flex-direction:column;gap:10px">'
        +[['Listing Boost','Get your listing seen first in search results and category pages.'],['Banner Ad','Eye-catching banner placement on the home screen.'],['Category Spotlight','Pin your business to the top of a category of your choice.'],['Custom Campaign','Tailored multi-placement campaign for maximum reach.']]
          .map(([t,d])=>'<div style="background:var(--bg,#f5f7fb);border-radius:10px;padding:12px 14px"><div style="font-weight:700;font-size:14px;color:var(--text,#1a1a1a);margin-bottom:3px">'+t+'</div><div style="font-size:13px;color:var(--text-muted,#666)">'+d+'</div></div>')
          .join('')
        +'</div></div></div>'
        +'<div class="about-card"><div class="about-sec-title">Send an Enquiry</div>'
        +'<div class="fg"><div class="fl">Business Name</div><input class="fi" id="adsBiz" placeholder="Your business name"></div>'
        +'<div class="fg"><div class="fl">Contact Email</div><input class="fi" id="adsEmail" type="email" placeholder="your@email.com"></div>'
        +'<div class="fg"><div class="fl">Ad Type</div><select class="fi" id="adsType"><option value="Listing Boost">Listing Boost</option><option value="Banner Ad">Banner Ad</option><option value="Category Spotlight">Category Spotlight</option><option value="Custom Campaign">Custom Campaign</option></select></div>'
        +'<div class="fg"><div class="fl">Message</div><textarea class="fi" rows="4" id="adsMsg" placeholder="Tell us about your product or service and what you\'d like to achieve..."></textarea></div>'
        +'<button onclick="H._submitAdsEnquiry()" style="width:100%;padding:15px;background:#1A3A8F;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;margin-top:4px">Send Enquiry</button>'
        +'</div>'
        +'<div class="about-card" style="text-align:center">'
        +'<div class="about-sec-title">Prefer WhatsApp?</div>'
        +'<div class="about-body" style="margin-bottom:12px">Chat with us directly on WhatsApp and we\'ll get back to you quickly.</div>'
        +'<button onclick="window.open(\'https://wa.me/971589772645?text=Hi%2C%20I\'m%20interested%20in%20advertising%20on%20Hostly\')" style="display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:#25D366;color:#fff;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer"><svg viewBox="0 0 24 24" width="18" height="18" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>Chat on WhatsApp</button>'
        +'</div>'
        +'</div></div>';
    };
    H._submitAdsEnquiry=function(){
      const biz=(document.getElementById('adsBiz').value||'').trim();
      const email=(document.getElementById('adsEmail').value||'').trim();
      const type=(document.getElementById('adsType').value||'').trim();
      const msg=(document.getElementById('adsMsg').value||'').trim();
      if(!biz){H.toast('Please enter your business name');return;}
      if(!email){H.toast('Please enter your contact email');return;}
      if(!msg){H.toast('Please add a message');return;}
      const subject=encodeURIComponent('Hostly Advertising Enquiry – '+type);
      const body=encodeURIComponent('Business: '+biz+'\nContact Email: '+email+'\nAd Type: '+type+'\n\nMessage:\n'+msg);
      window.location.href='mailto:chakusaprince@gmail.com?subject='+subject+'&body='+body;
    };
  },

  // ── Job Page ─────────────────────────────────────────────
  _registerJobPage() {
    H.pages.PostJob=function(){
      const u=H.currentUser();
      if(!u) return '<div class="page active">'+H.innerTopbar('Post a Job')+H.emptyState('Sign in required','Please sign in to post jobs',null,null)+'</div>';
      return '<div class="page active">'+H.innerTopbar('Post a Job')
        +'<div class="form-wrap" style="padding-bottom:40px">'
        +'<div style="background:linear-gradient(135deg,#1A3A8F,#2952cc);border-radius:16px;padding:20px;margin-bottom:20px;color:#fff"><div style="font-size:18px;font-weight:800;margin-bottom:4px">Post a Job Opening</div><div style="font-size:13px;opacity:.85">Jobs are reviewed by admin within 24hrs before going live</div></div>'
        +'<div class="fg"><div class="fl">Company Name <span style="color:red">*</span></div><input class="fi" id="jCompany" placeholder="e.g. TechZim Solutions"></div>'
        +'<div class="fg"><div class="fl">Job Title <span style="color:red">*</span></div><input class="fi" id="jTitle" placeholder="e.g. Software Developer"></div>'
        +'<div class="fg"><div class="fl">Job Type <span style="color:red">*</span></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">'
        +['Full Time','Part Time','Contract','Freelance','Internship','Volunteer'].map(t=>{
          const tid='jt_'+t.replace(' ','_');
          return '<button class="filter-opt" id="'+tid+'" onclick="H._selectJobType(this)" data-type="'+t+'" style="padding:10px;border-radius:10px;border:2px solid var(--border);background:var(--card);font-size:13px;font-weight:600;cursor:pointer">'+t+'</button>';
        }).join('')
        +'</div></div>'
        +'<div class="fg"><div class="fl">Industry <span style="color:red">*</span></div><select class="fi" id="jIndustry"><option value="">Select industry...</option>'
        +['IT & Technology','Finance & Banking','Healthcare','Education','Construction','Hospitality & Tourism','Sales & Marketing','Admin & Office','Agriculture','Transport & Logistics','Manufacturing','Media & Communications','Legal','NGO & Non-profit','Other'].map(i=>'<option>'+i+'</option>').join('')
        +'</select></div>'
        +'<div class="fg"><div class="fl">Location <span style="color:red">*</span></div><select class="fi" id="jProv">'+H.PROVINCES.map(p=>'<option>'+p+'</option>').join('')+'</select></div>'
        +'<div class="fg"><div class="fl">Salary</div><div style="display:flex;gap:8px"><input class="fi" id="jSalaryMin" type="number" placeholder="Min (USD)" style="flex:1"><input class="fi" id="jSalaryMax" type="number" placeholder="Max (USD)" style="flex:1"></div><label style="display:flex;align-items:center;gap:8px;margin-top:8px;font-size:13px"><input type="checkbox" id="jNegotiable" onchange="H._toggleNegotiable(this)"> Negotiable</label></div>'
        +'<div class="fg"><div class="fl">Job Description <span style="color:red">*</span></div><textarea class="fi" rows="5" id="jDesc" placeholder="Describe the role..."></textarea></div>'
        +'<div class="fg"><div class="fl">Requirements <span style="color:red">*</span></div><textarea class="fi" rows="4" id="jReqs" placeholder="Qualifications required..."></textarea></div>'
        +'<div class="fg"><div class="fl">Deadline</div><input class="fi" id="jDeadline" type="date"></div>'
        +'<div class="fg"><div class="fl">How to Apply</div><select class="fi" id="jApplyType" onchange="H._toggleApplyFields()"><option value="email">Via Email</option><option value="whatsapp">Via WhatsApp</option><option value="both">Both</option></select></div>'
        +'<div class="fg" id="jEmailWrap"><div class="fl">Contact Email</div><input class="fi" id="jEmail" type="email" value="'+H.escHtml(u.email||'')+'"></div>'
        +'<div class="fg" id="jPhoneWrap" style="display:none"><div class="fl">WhatsApp Number</div><input class="fi" id="jPhone" type="tel" value="'+H.escHtml(u.phone||'')+'"></div>'
        +'<div style="background:#fff3cd;border:1px solid #ffc107;border-radius:12px;padding:14px;margin:16px 0;font-size:13px;color:#856404">&#9888; Fraudulent job postings will result in a permanent ban.</div>'
        +'<button onclick="H._submitJob()" style="width:100%;padding:15px;background:#1A3A8F;color:#fff;border:none;border-radius:12px;font-size:16px;font-weight:700;cursor:pointer">Submit for Review</button>'
        +'</div></div>';
    };

    H._selectedJobType='';
    H._selectJobType=function(el){
      const type=el.dataset?el.dataset.type:el; H._selectedJobType=type;
      document.querySelectorAll('[id^="jt_"]').forEach(b=>{b.style.background='var(--card)';b.style.color='var(--text)';b.style.borderColor='var(--border)';});
      const btn=typeof el==='string'?document.getElementById('jt_'+type.replace(' ','_')):el;
      if(btn){btn.style.background='#1A3A8F';btn.style.color='#fff';btn.style.borderColor='#1A3A8F';}
    };
    H._toggleNegotiable=function(cb){document.getElementById('jSalaryMin').disabled=cb.checked;document.getElementById('jSalaryMax').disabled=cb.checked;};
    H._toggleApplyFields=function(){
      const t=document.getElementById('jApplyType').value;
      document.getElementById('jEmailWrap').style.display=t==='whatsapp'?'none':'';
      document.getElementById('jPhoneWrap').style.display=t==='email'?'none':'';
    };
    H._submitJob=function(){
      const u=H.currentUser(); if(!u){H.requireAuth('Sign in to post jobs');return;}
      const company=(document.getElementById('jCompany').value||'').trim();
      const title=(document.getElementById('jTitle').value||'').trim();
      const type=H._selectedJobType;
      const industry=(document.getElementById('jIndustry').value||'').trim();
      const prov=(document.getElementById('jProv').value||'').trim();
      const salMin=(document.getElementById('jSalaryMin').value||'').trim();
      const salMax=(document.getElementById('jSalaryMax').value||'').trim();
      const negotiable=document.getElementById('jNegotiable').checked;
      const desc=(document.getElementById('jDesc').value||'').trim();
      const reqs=(document.getElementById('jReqs').value||'').trim();
      const deadline=(document.getElementById('jDeadline').value||'').trim();
      const applyType=document.getElementById('jApplyType').value;
      const email=(document.getElementById('jEmail').value||'').trim();
      const phone=(document.getElementById('jPhone').value||'').trim();
      if(!company){H.toast('Company name required');return;}
      if(!title){H.toast('Job title required');return;}
      if(!type){H.toast('Select job type');return;}
      if(!industry){H.toast('Select an industry');return;}
      if(!desc){H.toast('Job description required');return;}
      if(!reqs){H.toast('Requirements required');return;}
      if(applyType!=='whatsapp'&&!email){H.toast('Contact email required');return;}
      if(applyType!=='email'&&!phone){H.toast('WhatsApp number required');return;}
      const salary=negotiable?'Negotiable':(salMin&&salMax?'USD '+salMin+' - '+salMax:salMin?'From USD '+salMin:'Not disclosed');
      const fullDesc='COMPANY: '+company+'\nJOB TYPE: '+type+'\nINDUSTRY: '+industry+'\nSALARY: '+salary+(deadline?'\nDEADLINE: '+deadline:'')+'\n\nDESCRIPTION:\n'+desc+'\n\nREQUIREMENTS:\n'+reqs+'\n\nHOW TO APPLY:'+(applyType!=='whatsapp'?'\nEmail: '+email:'')+(applyType!=='email'?'\nWhatsApp: '+phone:'');
      const job={id:H.uid(),sellerId:u.id,sellerName:company,sellerPhone:phone||u.phone||'',title,desc:fullDesc,price:negotiable?0:(parseInt(salMin)||0),currency:'USD',cat:'jobs',prov,city:prov,suburb:company,photos:[],createdAt:Date.now(),status:'pending',boost:null,views:0};
      H.state.listings.unshift(job);
      H.saveState();
      if(typeof H.saveListingToCloud==='function') H.saveListingToCloud(job);
      H.toast('Job submitted for review!');
      H.goBack();
    };
  },

  // ── Account Menu ─────────────────────────────────────────
  showAccountMenu(btn) {
    const u=this.currentUser(); if(!u) return;
    const sheet=document.getElementById('actionSheet');
    const bg=document.getElementById('sheetBg');
    const I=this.ICONS;
    const nav=(page)=>`H.closeSheet();H.state._backToAccount=true;setTimeout(()=>H.openInner('${page}'),50)`;
    const item=(label,icon,page,badge)=>`<button class="sheet-item" onclick="${nav(page)}"><span class="sheet-icon">${icon}</span><span class="sheet-label">${label}</span>${badge?`<span style="margin-left:auto;background:#F5A623;color:#1A3A8F;border-radius:10px;padding:1px 8px;font-size:11px;font-weight:800">${badge}</span>`:''}</button>`;

    const activeAds=(this.state.listings||[]).filter(l=>l.sellerId===u.id&&l.status==='active').length;
    const savedAds=((this.state.saves||{})[u.id]||[]).length;
    const unread=(this.state.conversations||[]).reduce((n,c)=>c.members.includes(u.id)?n+(c.messages||[]).filter(m=>m.from!==u.id&&!m.read).length:n,0);

    sheet.innerHTML=`
      <!-- User info header -->
      <div onclick="${nav('Profile')}" style="display:flex;align-items:center;gap:14px;padding:16px 18px 14px;border-bottom:1px solid var(--border);cursor:pointer">
        <div style="width:52px;height:52px;border-radius:50%;overflow:hidden;background:#1A3A8F14;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:20px;font-weight:800;color:#1A3A8F;border:2px solid #1A3A8F22">
          ${u.avatar?`<img src="${this.escHtml(u.avatar)}" style="width:100%;height:100%;object-fit:cover">`:this.initials(u.name)}
        </div>
        <div style="flex:1;min-width:0">
          <div style="font-size:15px;font-weight:800;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${this.escHtml(u.name||'User')}</div>
          <div style="font-size:12px;color:var(--sub);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${this.escHtml(u.email||'')}</div>
          <div style="font-size:11px;color:var(--sub);margin-top:1px">${this.escHtml(u.phone||'No phone')}</div>
        </div>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--sub)" stroke-width="2" style="flex-shrink:0"><polyline points="9 18 15 12 9 6"/></svg>
      </div>

      <!-- Quick stats -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);border-bottom:1px solid var(--border)">
        ${[['Ads',activeAds,'MyListings'],['Saved',savedAds,'Favorites'],['Inbox',unread,'Messages']].map(([l,v,p])=>`
          <div onclick="${p==='Messages'?'H.closeSheet();setTimeout(()=>H.navTo(\'Messages\'),50)':nav(p)}" style="padding:12px 4px;text-align:center;cursor:pointer;border-right:1px solid var(--border)">
            <div style="font-size:20px;font-weight:800;color:#1A3A8F">${v}</div>
            <div style="font-size:10px;color:var(--sub);font-weight:600">${l}</div>
          </div>`).join('')}
      </div>

      ${item('My Profile',I.user,'Profile','')}
      ${item('My Listings',I.doc,'MyListings',activeAds||'')}
      ${item('Saved & Favorites',I.heart,'Favorites',savedAds||'')}
      ${item('Wallet & Payments',I.wallet,'Wallet','')}
      ${item('Settings',I.settings,'Settings','')}
      ${item('Security & Password','<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>','SecuritySettings','')}
      ${item('Help & Support',I.help,'Help','')}
      ${item('About Hostly','<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>','About','')}
      ${item('Advertise with Us','<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>','Ads','')}
      <button class="sheet-item danger" onclick="H.closeSheet();setTimeout(()=>H.logout(),50)">
        <span class="sheet-icon">${I.logout}</span>
        <span class="sheet-label">Sign Out</span>
      </button>
      <button class="sheet-close" onclick="H.closeSheet()">${I.close} Close</button>`;
    sheet.classList.add('open'); bg.classList.add('open');
  },

  // ── Auth Gate ────────────────────────────────────────────
  requireAuth(msg) {
    const sheet=document.getElementById('actionSheet');
    const bg=document.getElementById('sheetBg');
    sheet.innerHTML='<div style="text-align:center;padding:8px 0 16px">'
      +'<div style="width:56px;height:56px;background:#1A3A8F;border-radius:16px;display:flex;align-items:center;justify-content:center;margin:0 auto 16px"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#fff" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>'
      +'<div style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:6px">'+(msg||'Sign in to continue')+'</div>'
      +'<div style="font-size:13px;color:var(--sub);margin-bottom:24px">Join Zimbabwe&#39;s free marketplace</div>'
      +'<button onclick="H.closeSheet();setTimeout(()=>H.authPage(),50)" style="display:block;width:100%;padding:14px;background:#1A3A8F;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:600;cursor:pointer;margin-bottom:10px">Sign In</button>'
      +'<button onclick="H.closeSheet()" style="display:block;width:100%;padding:12px;background:transparent;color:var(--sub);border:none;font-size:14px;cursor:pointer">Browse as Guest</button>'
      +'</div>';
    sheet.classList.add('open'); bg.classList.add('open');
  },

  // ── Onboarding ───────────────────────────────────────────
  // ── Offline Detection (#7) ───────────────────────────────
  _initOfflineDetection() {
    const show=()=>{
      if(document.getElementById('offlineBanner')) return;
      const b=document.createElement('div');
      b.id='offlineBanner'; b.className='offline-banner';
      b.innerHTML='<span>&#9888;&#65039; No internet connection</span>';
      (document.getElementById('app')||document.body).prepend(b);
    };
    const hide=()=>{const b=document.getElementById('offlineBanner');if(b)b.remove();};
    window.addEventListener('online',hide);
    window.addEventListener('offline',show);
    if(!navigator.onLine) show();
  },

  // ── Error Tracking (#13) ─────────────────────────────────
  _initErrorTracking() {
    window.onerror=(msg,src,line,col,err)=>{H._logError({type:'js',msg:String(msg),src,line,col,stack:err&&err.stack});};
    window.addEventListener('unhandledrejection',e=>{H._logError({type:'promise',msg:String(e.reason),stack:e.reason&&e.reason.stack});});
  },
  _logError(data) {
    try {
      console.warn('[Hostly]',data.type,data.msg);
      if(!window.supabase||typeof window.supabase.from!=='function') return;
      window.supabase.from('error_logs').insert({
        type:data.type, message:String(data.msg||'').slice(0,500),
        source:String(data.src||'').slice(0,200),
        stack:String(data.stack||'').slice(0,1000),
        user_id:(H.state&&H.state.currentUserId)||null,
        user_agent:navigator.userAgent.slice(0,300),
        created_at:new Date().toISOString()
      }).then(()=>{}).catch(()=>{});
    } catch(_){}
  },

  // ── Push Notifications (#3) ──────────────────────────────
  async _initPushNotifications() {
    if(typeof Capacitor==='undefined'||!Capacitor.isNativePlatform()) return;
    try {
      const PP=Capacitor.Plugins&&Capacitor.Plugins.PushNotifications;
      if(!PP) return;
      const perm=await PP.requestPermissions();
      if(perm.receive!=='granted') return;
      await PP.register();
      PP.addListener('registration',async({value:token})=>{
        const u=H.currentUser(); if(!u) return;
        u.pushToken=token; H.saveState();
        if(window.supabase) await window.supabase.from('profiles').update({push_token:token}).eq('id',u.id).catch(()=>{});
      });
      PP.addListener('pushNotificationReceived',n=>{H.toast((n.title||'')+(n.body?': '+n.body:''));});
      PP.addListener('pushNotificationActionPerformed',({notification:{data}})=>{
        if(data&&data.type==='message'&&data.convId) H.openInner('Chat',{id:data.convId});
        else if(data&&data.type==='listing'&&data.id) H.openListing(data.id);
      });
    } catch(e){console.warn('Push setup:',e);}
  },

  // ── Saved Searches check (#10) ───────────────────────────
  checkSavedSearches() {
    const u=H.currentUser(); if(!u) return;
    const searches=((H.state.savedSearches||{})[u.id]||[]);
    if(!searches.length) return;
    const listings=(H.state.listings||[]).filter(l=>l.status==='active'&&!H.isExpired(l));
    searches.forEach(s=>{
      const key='hostly_ss_'+s.id;
      const last=parseInt(localStorage.getItem(key)||'0',10);
      if(!last){localStorage.setItem(key,Date.now());return;}
      const q=(s.query||'').toLowerCase();
      const matches=listings.filter(l=>l.createdAt>last&&
        (!q||l.title.toLowerCase().includes(q)||(l.desc||'').toLowerCase().includes(q))&&
        (!s.cat||l.cat===s.cat));
      if(matches.length){
        const label=s.query||s.cat||'your search';
        H.pushNotif(u.id,`${matches.length} new match${matches.length>1?'es':''} for "${label}"`,
          matches[0].title+' and more');
      }
      localStorage.setItem(key,Date.now());
    });
  },

  _showOnboarding() {
    if(localStorage.getItem('hostly_onboarded')) return;
    const slides=[
      {icon:'🏪',title:'Zimbabwe\'s Free Marketplace',sub:'Buy and sell anything across all provinces'},
      {icon:'📱',title:'Browse Without Signing Up',sub:'Explore listings freely. Sign in only when ready'},
      {icon:'💬',title:'Connect via WhatsApp',sub:'Chat directly with sellers via WhatsApp or in-app'},
      {icon:'🚀',title:'Post Your Ad Free',sub:'List your items in minutes and reach thousands of buyers'}
    ];
    let cur=0;
    const ov=document.createElement('div');
    ov.id='onboardOverlay';
    ov.style.cssText='position:fixed;inset:0;background:#1A3A8F;z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px;font-family:Inter,sans-serif';
    const render=()=>{
      const s=slides[cur];
      ov.innerHTML=`
        <div style="font-size:72px;margin-bottom:24px">${s.icon}</div>
        <div style="font-size:24px;font-weight:700;color:#fff;text-align:center;margin-bottom:12px">${s.title}</div>
        <div style="font-size:15px;color:rgba(255,255,255,.7);text-align:center;margin-bottom:48px;line-height:1.6">${s.sub}</div>
        <div style="display:flex;gap:8px;margin-bottom:40px">
          ${slides.map((_,i)=>`<div style="width:${i===cur?24:8}px;height:8px;border-radius:4px;background:${i===cur?'#F5A623':'rgba(255,255,255,.3)'}"></div>`).join('')}
        </div>
        ${cur<slides.length-1
          ?`<button onclick="window._onboardNext()" style="width:100%;padding:16px;background:#F5A623;color:#1A3A8F;border:none;border-radius:14px;font-size:16px;font-weight:700;cursor:pointer">Next</button>
            <button onclick="window._onboardSkip()" style="margin-top:12px;background:transparent;border:none;color:rgba(255,255,255,.6);font-size:14px;cursor:pointer">Skip</button>`
          :`<button onclick="window._onboardSkip()" style="width:100%;padding:16px;background:#F5A623;color:#1A3A8F;border:none;border-radius:14px;font-size:16px;font-weight:700;cursor:pointer">Get Started</button>`
        }`;
    };
    window._onboardNext=()=>{cur++;render();};
    window._onboardSkip=()=>{localStorage.setItem('hostly_onboarded','1');ov.remove();};
    document.body.appendChild(ov);
    render();
  },

  // ── Demo Data ────────────────────────────────────────────
  _seedDemoData() {
    this.state.listings=(this.state.listings||[]).filter(l=>!l.id.startsWith('demo'));
    const now=Date.now();
    this.state.listings.push(
      {id:'demo1',title:'iPhone 14 Pro Max 256GB',photos:[],desc:'Excellent condition, bought 6 months ago. Comes with original box.',price:850,currency:'USD',cat:'electronics',prov:'Harare',city:'Harare CBD',suburb:'Avondale',sellerId:'demo_seller1',status:'active',createdAt:now-3600000,views:24,sellerName:'Tafadzwa Moyo',sellerPhone:'+263771234567'},
      {id:'demo2',title:'Toyota Vitz 2018 Low Mileage',photos:[],desc:'Well maintained, full service history. Fuel efficient.',price:7500,currency:'USD',cat:'vehicles',prov:'Harare',city:'Harare CBD',suburb:'Borrowdale',sellerId:'demo_seller2',status:'active',createdAt:now-7200000,views:56,sellerName:'Rumbidzai Ncube',sellerPhone:'+263772345678'},
      {id:'demo3',title:'3 Bed House for Rent — Borrowdale',photos:[],desc:'Spacious 3 bed house with garden, garage, solar and borehole.',price:1200,currency:'USD',cat:'property',prov:'Harare',city:'Harare CBD',suburb:'Borrowdale',sellerId:'demo_seller3',status:'active',createdAt:now-86400000,views:103,sellerName:'Tatenda Dube',sellerPhone:'+263773456789'},
      {id:'demo4',title:'Samsung 55" Smart TV 4K',photos:[],desc:'Barely used Samsung QLED TV with remote and stand.',price:450,currency:'USD',cat:'electronics',prov:'Bulawayo',city:'Bulawayo CBD',suburb:'Hillside',sellerId:'demo_seller1',status:'active',createdAt:now-172800000,views:31,sellerName:'Tafadzwa Moyo',sellerPhone:'+263771234567'},
      {id:'demo5',title:'Sofa Set 7 Seater L-Shape',photos:[],desc:'Modern L-shape sofa in grey fabric. Selling due to relocation.',price:320,currency:'USD',cat:'furniture',prov:'Harare',city:'Harare CBD',suburb:'Greendale',sellerId:'demo_seller2',status:'active',createdAt:now-259200000,views:18,sellerName:'Rumbidzai Ncube',sellerPhone:'+263772345678'},
      {id:'demo6',title:'Room to Rent — Warren Park',photos:[],desc:'Furnished single room, all utilities included.',price:120,currency:'USD',cat:'rooms',prov:'Harare',city:'Harare CBD',suburb:'Warren Park',sellerId:'demo_seller3',status:'active',createdAt:now-108000000,views:44,sellerName:'Tatenda Dube',sellerPhone:'+263773456789'}
    );
    const hasDemoUsers=(this.state.users||[]).some(u=>u.id==='demo_seller1');
    if(!hasDemoUsers){
      this.state.users=this.state.users||[];
      this.state.users.push(
        {id:'demo_seller1',name:'Tafadzwa Moyo',phone:'+263771234567',email:'tafadzwa@demo.com',role:'user',status:'active',verified:true,joinedAt:now-2592000000,settings:{theme:'light'}},
        {id:'demo_seller2',name:'Rumbidzai Ncube',phone:'+263772345678',email:'rumbi@demo.com',role:'user',status:'active',verified:false,joinedAt:now-5184000000,settings:{theme:'light'}},
        {id:'demo_seller3',name:'Tatenda Dube',phone:'+263773456789',email:'tatenda@demo.com',role:'user',status:'active',verified:true,joinedAt:now-7776000000,settings:{theme:'light'}}
      );
    }
    this.saveState();
  },

  openPhotoViewer(photos,idx=0){
    const ov=document.createElement('div');
    ov.style.cssText='position:fixed;inset:0;background:#000;z-index:9999;display:flex;align-items:center;justify-content:center;flex-direction:column';
    ov.id='pvOv';
    ov.innerHTML='<button onclick="document.getElementById(\'pvOv\').remove()" style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,.2);border:none;color:#fff;width:40px;height:40px;border-radius:50%;font-size:22px;cursor:pointer">&times;</button>'
      +'<img id="pvImg" src="'+photos[idx]+'" style="max-width:100%;max-height:85vh;object-fit:contain">';
    document.body.appendChild(ov);
    ov.addEventListener('click',e=>{if(e.target===ov)ov.remove();});
  },

  // ── Bootstrap ────────────────────────────────────────────
  init() {
    this.state=this.loadState();
    this._initErrorTracking();
    this._registerCategoryView();
    this._registerJobPage();
    this._registerExtraPages();
    this._seedDemoData();
    setTimeout(()=>this._showOnboarding(),800);

    document.addEventListener('DOMContentLoaded',()=>{
      const nav=document.getElementById('bottomNav');
      if(nav){
        nav.addEventListener('click',e=>{
          const btn=e.target.closest('[data-nav]'); if(!btn) return;
          const name=btn.dataset.nav;
          if(name==='Post')    {if(!H.currentUser()){H.requireAuth('Log in to post an ad');return;}H.navTo('Post',btn);}
          else if(name==='Account'){if(!H.currentUser()){H.requireAuth('Sign in to your account');return;}H.showAccountMenu(btn);}
          else if(name==='Messages'){if(!H.currentUser()){H.requireAuth('Sign in to view messages');return;}H.navTo(name,btn);}
          else H.navTo(name,btn);
        });
      }
      window.addEventListener('popstate',()=>H.goBack());
      window.addEventListener('beforeunload',()=>H.stopCam());
      document.addEventListener('keydown',e=>{if(e.key==='Escape')H.closeModal();});
      H.boot();
    });
  }
};

// ── Global shortcuts ──────────────────────────────────────
['navTo','openInner','goBack','toast','closeModal','closeSheet'].forEach(fn=>{
  window[fn]=(...a)=>H[fn](...a);
});
window.pushNotif=(uid,title,body)=>H.pushNotif&&H.pushNotif(uid,title,body);
window.openListing=id=>H.openListing(id);

H.init();
;/* === www/js/auth.js === */
'use strict';
(function(H) {
  const state = H.state;
  let authBusy = false;

  // Rate limiting — max 5 failed attempts then 30s lockout
  var _failCount  = 0;
  var _lockUntil  = 0;

  function sb() { return (window.supabase && window.supabase.auth) ? window.supabase : null; }

  function setAuthBusy(v) {
    authBusy = v;
    const r = document.getElementById('authCard');
    if (r) r.querySelectorAll('button').forEach(function(b){ b.disabled = v; });
  }

  function isLocked() {
    if (Date.now() < _lockUntil) {
      var secs = Math.ceil((_lockUntil - Date.now()) / 1000);
      H.toast('Too many attempts. Try again in ' + secs + 's');
      return true;
    }
    return false;
  }

  function recordFailure() {
    _failCount++;
    if (_failCount >= 5) {
      _lockUntil  = Date.now() + 30000;
      _failCount  = 0;
      H.toast('Too many failed attempts. Locked for 30 seconds.');
    }
  }

  function recordSuccess() {
    _failCount = 0;
    _lockUntil = 0;
  }

  function validateEmail(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
  }

  function validatePhone(p) {
    if (!p) return true;
    return /^(\+263|0)[0-9]{9}$/.test(p.replace(/\s/g,''));
  }

  function passwordStrength(p) {
    var s = 0;
    if (p.length >= 8) s++;
    if (p.length >= 12) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    if (s <= 1) return { label:'Weak',   color:'#ef4444', width:'25%'  };
    if (s <= 2) return { label:'Fair',   color:'#f97316', width:'50%'  };
    if (s <= 3) return { label:'Good',   color:'#eab308', width:'75%'  };
    return          { label:'Strong', color:'#22c55e', width:'100%' };
  }

  function updatePassStrength() {
    var p   = document.getElementById('newPass');
    var bar = document.getElementById('passStrengthBar');
    var lbl = document.getElementById('passStrengthLabel');
    if (!p || !bar || !lbl) return;
    if (!p.value) { bar.style.width='0'; lbl.textContent=''; return; }
    var s = passwordStrength(p.value);
    bar.style.width      = s.width;
    bar.style.background = s.color;
    lbl.textContent      = s.label;
    lbl.style.color      = s.color;
  }
  H._updatePassStrength = updatePassStrength;

  // ── LOGO TAP → ADMIN ─────────────────────────────
  H.authLogoTap = function() {
    H.logoTap && H.logoTap();
  };

  // ── MAIN AUTH PAGE ───────────────────────────────
  H.authStepEmail = function() {
    var card = document.getElementById('authCard');
    if (!card) return;
    card.innerHTML = ''
      + '<div style="text-align:center;margin-bottom:20px"><div style="font-size:22px;font-weight:700;color:var(--text)">Welcome</div><div style="font-size:14px;color:var(--sub);margin-top:4px">Sign in to buy and sell across Zimbabwe</div></div>'
      + '<button class="social-auth-btn google" onclick="H.authGoogle()"><svg viewBox="0 0 24 24" width="22" height="22"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>Continue with Google</button>'
      + '<button class="social-auth-btn facebook" onclick="H.authFacebook()"><svg viewBox="0 0 24 24" width="22" height="22" fill="#fff"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>Continue with Facebook</button>'
      + '<div class="auth-divider"><span>or</span></div>'
      + '<button class="social-auth-btn email" onclick="H.authShowEmailForm()"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#1A3A8F" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>Continue with Email</button>'
      + '<div style="text-align:center;margin-top:16px;font-size:13px;color:var(--sub)">Don\'t have an account? <span onclick="H.authShowRegister()" style="color:#F5A623;font-weight:600;cursor:pointer">Create one</span></div>';
  };

  H.authShowEmailForm = function() {
    var card = document.getElementById('authCard');
    if (!card) return;
    card.innerHTML = ''
      + '<div style="text-align:center;margin-bottom:16px"><div style="font-size:20px;font-weight:700;color:var(--text)">Sign In</div></div>'
      + '<div class="fg"><div class="fl">Email</div><input class="fi" id="emailIn" type="email" placeholder="you@example.com" autocomplete="email"></div>'
      + '<div class="fg"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span class="fl" style="margin-bottom:0">Password</span><span onclick="H.authForgotPassword()" style="font-size:12px;color:#F5A623;cursor:pointer;font-weight:500">Forgot password?</span></div><input class="fi" id="passIn" type="password" placeholder="Password" onkeydown="if(event.key===\'Enter\')H.authSignIn()" autocomplete="current-password"></div>'
      + '<button class="auth-btn" onclick="H.authSignIn()">Sign In</button>'
      + '<button class="auth-btn secondary" onclick="H.authStepEmail()">&larr; Back</button>';
    setTimeout(function(){ var e=document.getElementById('emailIn'); if(e) e.focus(); }, 100);
  };

  H.authShowRegister = function() { H.authStepSignUp(); };

  H.authStepSignUp = function() {
    var card = document.getElementById('authCard');
    if (!card) return;
    card.innerHTML = ''
      + '<div style="text-align:center;margin-bottom:16px"><div style="font-size:20px;font-weight:700;color:var(--text)">Create Account</div><div style="font-size:13px;color:var(--sub);margin-top:2px">Join Zimbabwe\'s marketplace</div></div>'
      + '<div class="fg"><div class="fl">Full Name</div><input class="fi" id="newName" placeholder="e.g. Tendai Moyo" autocomplete="name"></div>'
      + '<div class="fg"><div class="fl">Email</div><input class="fi" id="newEmail" type="email" placeholder="you@example.com" autocomplete="email"></div>'
      + '<div class="fg"><div class="fl">Phone (optional)</div><input class="fi" id="newPhone" type="tel" placeholder="+263 77 123 4567" autocomplete="tel"></div>'
      + '<div class="fg"><div class="fl">Password</div><input class="fi" id="newPass" type="password" placeholder="8+ chars, uppercase &amp; number" oninput="H._updatePassStrength()" autocomplete="new-password"><div style="height:4px;background:rgba(255,255,255,.12);border-radius:2px;margin-top:6px"><div id="passStrengthBar" style="height:100%;border-radius:2px;transition:all .3s;width:0"></div></div><div id="passStrengthLabel" style="font-size:11px;margin-top:3px;text-align:right;height:14px"></div></div>'
      + '<div class="fg"><div class="fl">Confirm Password</div><input class="fi" id="newPass2" type="password" placeholder="re-enter password" autocomplete="new-password"></div>'
      + '<label style="display:flex;gap:10px;align-items:flex-start;font-size:12px;color:rgba(255,255,255,.75);margin-bottom:10px;cursor:pointer"><input id="ageConsent" type="checkbox" style="margin-top:2px"><span>I am 18+ and agree to <span onclick="event.stopPropagation();H.authShowDoc(\'terms\')" style="color:#F5A623;text-decoration:underline;cursor:pointer">Terms</span> &amp; <span onclick="event.stopPropagation();H.authShowDoc(\'privacy\')" style="color:#F5A623;text-decoration:underline;cursor:pointer">Privacy Policy</span></span></label>'
      + '<button class="auth-btn" onclick="H.authSignUp()">Create Account</button>'
      + '<button class="auth-btn secondary" onclick="H.authStepEmail()">&larr; Back to Sign In</button>';
    setTimeout(function(){ var e=document.getElementById('newName'); if(e) e.focus(); }, 100);
  };

  // ── OTP VERIFICATION ─────────────────────────────
  H.authShowOtp = function(email) {
    var card = document.getElementById('authCard');
    if (!card) return;
    H._otpEmail = email;
    card.innerHTML = ''
      + '<div style="text-align:center;margin-bottom:20px">'
      + '<div style="font-size:42px;margin-bottom:10px">📧</div>'
      + '<div style="font-size:20px;font-weight:700;color:var(--text)">Verify Your Email</div>'
      + '<div style="font-size:13px;color:var(--sub);margin-top:8px;line-height:1.6">We sent a 6-digit code to<br><strong style="color:var(--text)">' + H.escHtml(email) + '</strong></div>'
      + '</div>'
      + '<div class="fg"><div class="fl" style="text-align:center">Verification Code</div><input class="fi" id="otpIn" type="text" inputmode="numeric" maxlength="6" placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" style="letter-spacing:10px;text-align:center;font-size:24px;font-weight:700" onkeydown="if(event.key===\'Enter\')H.authVerifyOtp()"></div>'
      + '<button class="auth-btn" onclick="H.authVerifyOtp()">Verify &amp; Continue</button>'
      + '<div style="text-align:center;margin-top:12px;font-size:13px;color:var(--sub)">Didn\'t get the code? <span onclick="H.authResendOtp()" style="color:#F5A623;font-weight:600;cursor:pointer">Resend</span></div>'
      + '<div style="text-align:center;margin-top:6px;font-size:12px;color:var(--sub)">Check spam if not received within 2 minutes</div>'
      + '<button class="auth-btn secondary" style="margin-top:16px" onclick="H.authStepEmail()">&larr; Back to Sign In</button>';
    setTimeout(function(){ var e=document.getElementById('otpIn'); if(e) e.focus(); }, 100);
  };

  H.authVerifyOtp = async function() {
    var otp = ((document.getElementById('otpIn')||{}).value||'').trim().replace(/\s/g,'');
    if (otp.length !== 6 || !/^\d{6}$/.test(otp)) { H.toast('Enter the 6-digit code from your email'); return; }
    var c = sb();
    if (!c) { H.toast('Connection error — try again'); return; }
    setAuthBusy(true);
    var res = await c.auth.verifyOtp({ email: H._otpEmail, token: otp, type: 'signup' });
    if (res.error) { H.toast('Invalid or expired code. Try resending.'); setAuthBusy(false); return; }
    state.currentUserId = res.data.user.id;
    await H.loadProfile(res.data.user.id);
    H.saveState();
    setAuthBusy(false);
    H.toast('Email verified! Welcome to Hostly');
    H.boot();
  };

  H.authResendOtp = async function() {
    if (!H._otpEmail) return;
    var c = sb();
    if (!c) { H.toast('Connection error'); return; }
    var res = await c.auth.resend({ type: 'signup', email: H._otpEmail });
    H.toast(res.error ? res.error.message : 'Code resent — check your inbox');
  };

  // ── FORGOT PASSWORD ──────────────────────────────
  H.authForgotPassword = function() {
    var card = document.getElementById('authCard');
    if (!card) return;
    card.innerHTML = ''
      + '<div style="text-align:center;margin-bottom:16px"><div style="font-size:20px;font-weight:700;color:var(--text)">Reset Password</div><div style="font-size:13px;color:var(--sub);margin-top:4px">Enter your email to receive a reset link</div></div>'
      + '<div class="fg"><div class="fl">Email</div><input class="fi" id="resetEmail" type="email" placeholder="you@example.com" autocomplete="email" onkeydown="if(event.key===\'Enter\')H.authSendReset()"></div>'
      + '<button class="auth-btn" onclick="H.authSendReset()">Send Reset Link</button>'
      + '<button class="auth-btn secondary" onclick="H.authShowEmailForm()">&larr; Back to Sign In</button>';
    setTimeout(function(){ var e=document.getElementById('resetEmail'); if(e) e.focus(); }, 100);
  };

  H.authSendReset = async function() {
    var email = ((document.getElementById('resetEmail')||{}).value||'').trim();
    if (!validateEmail(email)) { H.toast('Enter a valid email address'); return; }
    var c = sb();
    if (!c) { H.toast('Connection error — try again'); return; }
    setAuthBusy(true);
    var res = await c.auth.resetPasswordForEmail(email);
    setAuthBusy(false);
    if (res.error) { H.toast(res.error.message); return; }
    var card = document.getElementById('authCard');
    if (!card) return;
    card.innerHTML = ''
      + '<div style="text-align:center;padding:24px 0">'
      + '<div style="font-size:42px;margin-bottom:12px">✉️</div>'
      + '<div style="font-size:18px;font-weight:700;color:var(--text)">Check Your Email</div>'
      + '<div style="font-size:14px;color:var(--sub);margin-top:10px;line-height:1.6">A reset link was sent to<br><strong style="color:var(--text)">' + H.escHtml(email) + '</strong><br><br>Click the link in the email to set a new password. Check your spam folder if you don\'t see it.</div>'
      + '</div>'
      + '<button class="auth-btn secondary" onclick="H.authShowEmailForm()">&larr; Back to Sign In</button>';
  };

  // ── SIGN IN ──────────────────────────────────────
  H.authSignIn = async function() {
    if (authBusy) return;
    if (isLocked()) return;
    var email    = document.getElementById('emailIn').value.trim();
    var password = document.getElementById('passIn').value;
    if (!validateEmail(email)) { H.toast('Enter a valid email address'); return; }
    if (!password) { H.toast('Enter your password'); return; }
    setAuthBusy(true);
    var c = sb();
    if (c) {
      var res = await c.auth.signInWithPassword({email:email, password:password});
      if (res.error) {
        var msg = res.error.message;
        if (msg==='Invalid login credentials') msg = 'Wrong email or password';
        if (msg.includes('Email not confirmed')) msg = 'Please verify your email first';
        recordFailure();
        H.toast(msg); setAuthBusy(false); return;
      }
      state.currentUserId = res.data.user.id;
      await H.loadProfile(res.data.user.id);
      recordSuccess();
      H.saveState();
      setAuthBusy(false);
      H.boot();
      return;
    }
    var user = (state.users||[]).find(function(u){ return (u.email||'').toLowerCase()===email.toLowerCase() && u._localPassword===password; });
    if (!user) { recordFailure(); H.toast('Wrong email or password'); setAuthBusy(false); return; }
    recordSuccess();
    state.currentUserId = user.id;
    H.saveState(); setAuthBusy(false); H.boot();
  };

  // ── SIGN UP ──────────────────────────────────────
  H.authSignUp = async function() {
    if (authBusy) return;
    var name      = document.getElementById('newName').value.trim();
    var email     = document.getElementById('newEmail').value.trim();
    var phone     = document.getElementById('newPhone').value.trim();
    var password  = document.getElementById('newPass').value;
    var password2 = document.getElementById('newPass2').value;
    var consent   = document.getElementById('ageConsent').checked;

    if (name.length < 2)           { H.toast('Enter your full name'); return; }
    if (!validateEmail(email))     { H.toast('Enter a valid email address'); return; }
    if (!validatePhone(phone))     { H.toast('Enter a valid Zimbabwe phone number (+263 or 07X)'); return; }
    if (password.length < 8)       { H.toast('Password must be at least 8 characters'); return; }
    if (!/[A-Z]/.test(password))   { H.toast('Password must include at least one uppercase letter'); return; }
    if (!/[0-9]/.test(password) && !/[^A-Za-z0-9]/.test(password)) {
      H.toast('Password must include a number or special character'); return;
    }
    if (password !== password2)    { H.toast('Passwords do not match'); return; }
    if (!consent)                  { H.toast('Please confirm you are 18+ and agree to our policies'); return; }

    setAuthBusy(true);
    var c = sb();
    if (c) {
      var res = await c.auth.signUp({email:email, password:password, options:{data:{full_name:name}}});
      if (res.error) {
        var msg = res.error.message;
        if (msg.includes('already registered') || msg.includes('already exists') || msg.includes('unique constraint')) {
          msg = 'Email already registered. Sign in instead.';
        }
        H.toast(msg); setAuthBusy(false); return;
      }
      var userId = res.data.user.id;
      await c.from('profiles').upsert({id:userId, name:name, phone:phone||null, verified:false});
      var u = {id:userId,email:email,name:name,phone:phone||'',avatar:null,verified:false,walletUSD:0,language:'English',joinedAt:Date.now(),role:'user',status:'active',banReason:null,banUntil:null,blocked:[]};
      (state.users = state.users||[]).push(u);
      state.currentUserId = userId;
      H.saveState();
      setAuthBusy(false);
      if (res.data.session) {
        H.toast('Account created! Welcome to Hostly');
        H.boot();
      } else {
        H.authShowOtp(email);
      }
      return;
    }
    var exists = (state.users||[]).some(function(u){ return (u.email||'').toLowerCase()===email.toLowerCase(); });
    if (exists) { H.toast('Email already registered. Sign in instead.'); setAuthBusy(false); return; }
    var uid2 = H.uid();
    (state.users = state.users||[]).push({id:uid2,email:email,name:name,phone:phone||'',avatar:null,verified:false,walletUSD:0,language:'English',joinedAt:Date.now(),role:'user',status:'active',banReason:null,banUntil:null,blocked:[],_localPassword:password});
    state.currentUserId = uid2;
    H.saveState(); setAuthBusy(false);
    H.toast('Account created! Welcome to Hostly');
    H.boot();
  };

  // ── ADMIN LOGIN ──────────────────────────────────
  H.authAdminPage = function() {
    var card = document.getElementById('authCard');
    if (!card) return;
    card.innerHTML = ''
      + '<div style="text-align:center;margin-bottom:16px"><div style="font-size:20px;font-weight:700;color:var(--text)">Admin Portal</div><div style="font-size:13px;color:var(--sub)">Restricted access</div></div>'
      + '<div class="fg"><div class="fl">Admin Email</div><input class="fi" id="admEmailPage" type="email" autocomplete="username"></div>'
      + '<div class="fg"><div class="fl">Password</div><input class="fi" id="admPassPage" type="password" placeholder="Password" onkeydown="if(event.key===\'Enter\')H.authAdminSignInPage()" autocomplete="current-password"></div>'
      + '<button class="auth-btn" onclick="H.authAdminSignInPage()">Admin Sign In</button>'
      + '<button class="auth-btn secondary" onclick="H.authStepEmail()">&larr; Back</button>';
    setTimeout(function(){ var p=document.getElementById('admEmailPage'); if(p) p.focus(); }, 100);
  };

  H.authAdminSignInPage = async function() {
    if (isLocked()) return;
    var email = ((document.getElementById('admEmailPage')||{}).value||'').trim();
    var pass  = ((document.getElementById('admPassPage')||{}).value||'').trim();
    if (!email||!pass) { H.toast('Enter credentials'); return; }
    var c = sb();
    if (!c) { H.toast('Connection error - refresh page'); return; }
    H.toast('Signing in...');
    var res = await c.auth.signInWithPassword({email:email, password:pass});
    if (res.error) { recordFailure(); H.toast('Invalid credentials'); return; }
    state.currentUserId = res.data.user.id;
    await H.loadProfile(res.data.user.id);
    var cu = H.currentUser();
    if (!cu || cu.role !== 'admin') {
      if (c) { try { await c.auth.signOut(); } catch(e) {} }
      state.currentUserId = null;
      recordFailure();
      H.toast('Access denied. Not an admin account.');
      return;
    }
    recordSuccess();
    state.adminSession = {at:Date.now(),via:'supabase'};
    H.saveState();
    H.toast('Welcome Admin!');
    H.boot();
  };

  // ── LOAD PROFILE ─────────────────────────────────
  H.loadProfile = async function(userId) {
    var c = sb(); if (!c) return;
    var res = await c.from('profiles').select('*').eq('id',userId).single();
    if (res.error||!res.data) {
      var u = (state.users||[]).find(function(x){return x.id===userId;});
      if (!u) { u={id:userId,email:'',name:'User',phone:'',avatar:null,verified:false,walletUSD:0,language:'English',joinedAt:Date.now(),role:'user',status:'active',banReason:null,banUntil:null,blocked:[]}; state.users.push(u); }
      return;
    }
    var profile = res.data;
    var u = (state.users||[]).find(function(x){return x.id===userId;});
    if (!u) {
      u = {id:userId,email:'',name:profile.name||'User',phone:profile.phone||'',avatar:profile.avatar||null,verified:profile.verified||false,walletUSD:profile.wallet_usd||0,language:profile.language||'English',joinedAt:new Date(profile.created_at||Date.now()).getTime(),role:profile.role||'user',status:'active',banReason:null,banUntil:null,blocked:[]};
      state.users.push(u);
    } else {
      u.name=profile.name||u.name; u.phone=profile.phone||u.phone; u.avatar=profile.avatar||u.avatar; u.verified=profile.verified||false; u.role=profile.role||u.role||'user';
    }
    H.saveState();
  };

  // ── LOGOUT ───────────────────────────────────────
  H.logout = async function() {
    var c = sb();
    if (c) { try { await c.auth.signOut(); } catch(e) {} }
    state.currentUserId = null;
    state.adminSession = null;
    H.saveState();
    var ban = document.getElementById('banScreen');
    if (ban) ban.classList.remove('show');
    H.pageStack = [];
    H.authPage();
  };

  // ── SOCIAL AUTH ───────────────────────────────────
  H.authGoogle = async function() {
    const c = sb();
    if (!c) { H.toast('Sign-in service unavailable'); return; }
    const { error } = await c.auth.signInWithOAuth({ provider: 'google' });
    if (error) H.toast(error.message || 'Google sign-in failed');
  };

  H.authFacebook = async function() {
    const c = sb();
    if (!c) { H.toast('Sign-in service unavailable'); return; }
    const { error } = await c.auth.signInWithOAuth({ provider: 'facebook' });
    if (error) H.toast(error.message || 'Facebook sign-in failed');
  };

  // ── LEGAL DOCS ───────────────────────────────────
  // Opens a full-screen slide-up sheet with the actual legal document content.
  // Uses the same content as HelpTerms / HelpPrivacy pages so it's always in sync.
  H.authShowDoc = function(which) {
    var existing = document.getElementById('legalDocSheet');
    if (existing) existing.remove();

    var isTerms = which === 'terms';
    var title   = isTerms ? 'Terms of Service' : 'Privacy Policy';

    var content = isTerms ? H._fullTermsHTML() : H._fullPrivacyHTML();

    var sheet = document.createElement('div');
    sheet.id = 'legalDocSheet';
    sheet.style.cssText = [
      'position:fixed', 'inset:0', 'z-index:9990',
      'background:var(--bg,#F4F1EA)', 'display:flex', 'flex-direction:column',
      'animation:slideUp .28s ease'
    ].join(';');

    sheet.innerHTML = ''
      + '<div style="display:flex;align-items:center;justify-content:space-between;padding:calc(env(safe-area-inset-top,16px) + 16px) 16px 14px;background:linear-gradient(135deg,#1A3A8F,#2952cc);flex-shrink:0">'
      +   '<div style="font-size:18px;font-weight:800;color:#fff;letter-spacing:-.3px">' + title + '</div>'
      +   '<button onclick="document.getElementById(\'legalDocSheet\').remove()" style="background:rgba(255,255,255,.18);border:none;border-radius:50%;width:34px;height:34px;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0">'
      +     '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" width="16" height="16"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
      +   '</button>'
      + '</div>'
      + '<div style="overflow-y:auto;-webkit-overflow-scrolling:touch;flex:1;padding:0 0 calc(env(safe-area-inset-bottom,0px) + 32px)">'
      +   '<div class="doc-content">' + content + '</div>'
      + '</div>'
      + '<div style="flex-shrink:0;padding:12px 16px calc(env(safe-area-inset-bottom,0px) + 12px);background:var(--card,#fff);border-top:1px solid var(--border,#e5e0d6)">'
      +   '<button onclick="document.getElementById(\'legalDocSheet\').remove()" style="width:100%;padding:13px;background:#1A3A8F;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;font-family:inherit">Got it</button>'
      + '</div>';

    document.body.appendChild(sheet);
  };

  H._fullTermsHTML = function() {
    return ''
      + '<h2>1. Agreement to Terms</h2>'
      + '<p>By downloading, installing, or using the Hostly application ("App"), you agree to be legally bound by these Terms of Service. If you do not agree to these terms, you must not use the App. These terms govern all users: buyers, sellers, job seekers, employers, and visitors.</p>'
      + '<h2>2. Who Can Use Hostly</h2>'
      + '<p>You must be at least 18 years old to create an account or use Hostly. By registering, you confirm that you meet this age requirement and are legally competent to enter into contracts under Zimbabwean law.</p>'
      + '<h2>3. Account Responsibility</h2>'
      + '<p>You are responsible for keeping your account credentials confidential. All activity that occurs under your account is your responsibility. You must provide accurate and truthful information when registering.</p>'
      + '<h2>4. What Hostly Is</h2>'
      + '<p>Hostly is an online classifieds marketplace that connects buyers and sellers in Zimbabwe. We provide the platform — we are not a party to any transaction between users. We do not hold payments, guarantee delivery, or verify the condition of items unless stated.</p>'
      + '<h2>5. Listing Rules</h2>'
      + '<p>All listings must be honest, legal, and comply with Zimbabwean law. The following content is strictly prohibited:</p>'
      + '<ul><li>Stolen, counterfeit, or fraudulent goods of any kind</li><li>Weapons, firearms, ammunition, or explosive devices</li><li>Illegal drugs, controlled substances, or drug paraphernalia</li><li>Adult, sexually explicit, or pornographic content</li><li>Protected wildlife, animal products, or endangered species</li><li>Pyramid schemes, multi-level marketing, or investment fraud</li><li>Fake, misleading, or non-existent job listings</li><li>Fraudulent rental listings or advance deposit scams</li><li>Human trafficking, exploitation, or domestic workers without consent</li></ul>'
      + '<h2>6. Advertising Credits (Boost Feature)</h2>'
      + '<p>Hostly offers optional paid advertising credits ("Boost") to increase listing visibility. These credits are purchased via external payment methods (EcoCash, OneMoney, or bank transfer) and are not processed by Google Play or the Apple App Store. Credits are non-refundable once applied. Unused credits may be refunded at our discretion within 7 days — contact us to request a refund.</p>'
      + '<h2>7. User Conduct</h2>'
      + '<p>You agree not to harass or threaten other users, post false or deceptive information, send unsolicited messages, create multiple accounts to evade bans, impersonate any person or entity, or use automated tools to access the platform.</p>'
      + '<h2>8. User Content License</h2>'
      + '<p>By posting content on Hostly, you grant us a non-exclusive, worldwide, royalty-free license to display, reproduce, and distribute that content within the App and for promotional purposes. You confirm you own or have rights to all content posted.</p>'
      + '<h2>9. Intellectual Property</h2>'
      + '<p>All design, branding, logos, code, and content created by Hostly are protected by copyright. You may not copy, reproduce, or redistribute any part of the App without our written consent.</p>'
      + '<h2>10. Moderation and Enforcement</h2>'
      + '<p>We reserve the right to remove any listing, suspend, or permanently ban any account that violates these Terms at any time. Banned users may appeal by contacting chakusaprince@gmail.com within 14 days of the ban.</p>'
      + '<h2>11. Disclaimer of Warranties</h2>'
      + '<p>Hostly is provided "as is" and "as available" without any warranties, express or implied. We are not responsible for the quality, safety, legality, or availability of listed items.</p>'
      + '<h2>12. Limitation of Liability</h2>'
      + '<p>To the maximum extent permitted by law, Hostly and its operators shall not be liable for any indirect, incidental, punitive, or consequential damages arising from your use of the App.</p>'
      + '<h2>13. Governing Law</h2>'
      + '<p>These Terms are governed exclusively by the laws of the Republic of Zimbabwe. Any legal disputes shall be subject to the jurisdiction of the courts of Zimbabwe.</p>'
      + '<h2>14. Changes to These Terms</h2>'
      + '<p>We may update these Terms from time to time. Continued use of the App after any update constitutes your acceptance of the revised Terms.</p>'
      + '<h2>15. Contact Us</h2>'
      + '<p>Email: chakusaprince@gmail.com<br>WhatsApp: +971 589 772 645</p>';
  };

  H._fullPrivacyHTML = function() {
    return ''
      + '<h2>1. Who We Are</h2>'
      + '<p>Hostly is a Zimbabwean marketplace application. We are committed to protecting your privacy and handling your data responsibly. This policy explains what data we collect, why we collect it, and how we protect it.</p>'
      + '<h2>2. Data We Collect</h2>'
      + '<ul><li><strong>Account data:</strong> Name, email address, phone number, encrypted password</li><li><strong>Profile data:</strong> Profile photo, bio, city/province location</li><li><strong>Listing data:</strong> Photos, descriptions, prices, and location of items you post</li><li><strong>Messages:</strong> In-app conversations between buyers and sellers</li><li><strong>Transaction data:</strong> Advertising credit balance and top-up reference history</li><li><strong>Device data:</strong> Device type, operating system version, app version</li><li><strong>Usage data:</strong> Pages viewed, search queries, and listing interactions</li></ul>'
      + '<h2>3. How We Use Your Data</h2>'
      + '<ul><li>To create and manage your user account</li><li>To display your listings to other users across Zimbabwe</li><li>To facilitate secure in-app messaging between buyers and sellers</li><li>To detect, investigate, and prevent fraud and policy violations</li><li>To improve the App, fix bugs, and enhance user experience</li><li>To send you important notifications about your account and listings</li></ul>'
      + '<h2>4. Data We Do Not Collect</h2>'
      + '<ul><li>We do not collect your precise GPS or real-time location</li><li>We do not collect payment card numbers or banking credentials</li><li>We do not access your camera or photo library without your explicit action</li><li>We do not collect contacts, call logs, or SMS messages</li></ul>'
      + '<h2>5. Data Sharing</h2>'
      + '<p>We do not sell your personal data to third parties. We may share data with:</p>'
      + '<ul><li><strong>Other users:</strong> Your public profile name, phone number (if provided), and listings are visible to all users</li><li><strong>Supabase:</strong> Our secure database and authentication infrastructure provider</li><li><strong>Legal authorities:</strong> When required by Zimbabwean law, court order, or to protect public safety</li></ul>'
      + '<h2>6. Data Security</h2>'
      + '<p>We implement industry-standard security: HTTPS encryption for all data in transit, encrypted password storage (never stored in plain text), row-level security on our database, and access controls.</p>'
      + '<h2>7. Camera and Photo Permissions</h2>'
      + '<p>We request camera and photo library access only when you choose to upload a photo for a listing or your profile. The App never accesses your camera or photos passively.</p>'
      + '<h2>8. Notifications Permission</h2>'
      + '<p>We request permission to send push notifications to alert you about new messages, listing activity, and account updates. You may disable notifications at any time in your device settings.</p>'
      + '<h2>9. Data Retention</h2>'
      + '<p>We retain your data for as long as your account is active. When you delete your account, all personal data, listings, messages, and transaction records are permanently deleted within 30 days.</p>'
      + '<h2>10. Your Rights</h2>'
      + '<ul><li>Access and review your personal data at any time via your Profile page</li><li>Correct inaccurate information through your Profile Settings</li><li>Delete your account and all associated data via Settings → Delete Account</li><li>Opt out of promotional notifications via Settings → Notification Preferences</li><li>Request a copy of all data we hold about you by emailing chakusaprince@gmail.com</li></ul>'
      + '<h2>11. Children\'s Privacy</h2>'
      + '<p>Hostly is strictly for users aged 18 and over. We do not knowingly collect personal data from anyone under 18. If we discover that a minor has created an account, we will immediately delete their account and all associated data.</p>'
      + '<h2>12. Third-Party Links</h2>'
      + '<p>Listings may include links to WhatsApp or external websites. We are not responsible for the privacy practices or content of any third-party services.</p>'
      + '<h2>13. Changes to This Policy</h2>'
      + '<p>We will notify you of material changes to this Privacy Policy through the App at least 7 days before they take effect.</p>'
      + '<h2>14. Contact Us</h2>'
      + '<p>Email: chakusaprince@gmail.com<br>WhatsApp: +971 589 772 645</p>';
  };

})(window.H);

;/* === www/js/home.js === */
﻿'use strict';
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
            <span style="font-size:22px;font-weight:900;color:#fff;letter-spacing:-0.5px;font-family:Inter,sans-serif">Host<em style="font-style:normal;color:#F5A623">ly</em></span>
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
            <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.65);text-transform:uppercase;letter-spacing:1px;margin-bottom:5px">Zimbabwe's Free Marketplace</div>
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
          `).join('') : `<div style="padding:32px 16px">${H.emptyState('No listings yet', 'Be the first to post in your area!', 'Post your first ad', "H.navTo('Post',null)")}</div>`}
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
        : H.emptyState('No matches', 'Try different keywords or browse a category', null, null);
    }, 300);
  };

  H.pages.Home_after = function () {
    if (typeof H.fetchListingsFromSupabase !== 'function') return;
    const countBefore = (H.state.listings || []).filter(l => l.status === 'active').length;
    H.fetchListingsFromSupabase().then(() => {
      if (H.currentPageName !== 'Home') return;
      const countAfter = (H.state.listings || []).filter(l => l.status === 'active').length;
      if (countAfter > countBefore) H.toast('New listings loaded — pull down to refresh');
    }).catch(() => {});
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





;/* === www/js/browse.js === */
'use strict';
(function (H) {
  const pages = H.pages;
  const state = H.state;
  const { escHtml, filterListings, renderListCard, CATEGORIES } = H;

  // Icons (prefer shared set, fallback to inline SVGs)
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

  // ---------------------------------------------------
  // BROWSE PAGE
  // ---------------------------------------------------
  pages.Browse = function () {
    const activeListings = (state.listings || []).filter(l => l.status === 'active' && !H.isExpired(l));
    const u = H.currentUser();
    const recentSearches = (u && u.recentSearches) || [];
    const savedSearches = u ? ((state.savedSearches || {})[u.id] || []) : [];

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
          ${u ? `<button class="save-search-btn" onclick="H._browse.saveSearch()" title="Save search">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
          </button>` : ''}
          <button class="voice-btn" onclick="H._browse.voiceSearch()" title="Voice search">${S.microphone}</button>
        </div>
      </div>

      ${savedSearches.length ? `
        <div class="recent-searches">
          <div class="section-title">Saved Searches</div>
          <div class="search-tags">
            ${savedSearches.slice(0,5).map(s => `
              <button class="search-tag saved-search-tag" onclick="H._browse.searchTag('${H.escHtml(s.query||'')}')">
                <span>${H.escHtml(s.query||s.cat||'search')}</span>
                <span onclick="H._browse.removeSavedSearch('${s.id}');event.stopPropagation()">${S.close}</span>
              </button>
            `).join('')}
          </div>
        </div>
      ` : ''}

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
            <label class="filter-radio">
              <input type="radio" name="condition" value="all" onchange="H._browse.onFilterChange()" checked>
              <span>Any</span>
            </label>
            <label class="filter-radio">
              <input type="radio" name="condition" value="new" onchange="H._browse.onFilterChange()">
              <span>New</span>
            </label>
            <label class="filter-radio">
              <input type="radio" name="condition" value="like-new" onchange="H._browse.onFilterChange()">
              <span>Like New</span>
            </label>
            <label class="filter-radio">
              <input type="radio" name="condition" value="used" onchange="H._browse.onFilterChange()">
              <span>Used</span>
            </label>
            <label class="filter-radio">
              <input type="radio" name="condition" value="refurbished" onchange="H._browse.onFilterChange()">
              <span>Refurbished</span>
            </label>
          </div>
        </div>

        <div class="filter-section">
          <div class="filter-title">Other</div>
          <label class="filter-checkbox">
            <input type="checkbox" id="verifiedOnly" onchange="H._browse.onFilterChange()">
            <span>Verified Sellers Only</span>
          </label>
          <label class="filter-checkbox">
            <input type="checkbox" id="boostedOnly" onchange="H._browse.onFilterChange()">
            <span>Premium Ads Only</span>
          </label>
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
    // Background refresh from Supabase — fills skeleton if cache was empty
    if (typeof H.fetchListingsFromSupabase === 'function') {
      H.fetchListingsFromSupabase().then(() => {
        const el = document.getElementById('listingList');
        if (!el || H.currentPageName !== 'Browse') return;
        const q = document.getElementById('searchIn')?.value || '';
        const active = (state.listings || []).filter(l => l.status === 'active' && !H.isExpired(l));
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
          const activeListings = (state.listings || []).filter(l => l.status === 'active' && !H.isExpired(l));
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
        if (inp) {
          inp.value = term;
          H._browse.onSearch();
        }
      },
      removeSearch: (term) => {
        const u = H.currentUser();
        if (u) {
          u.recentSearches = (u.recentSearches || []).filter(s => s !== term);
          H.saveState();
          H.renderPage('Browse');
        }
      },
      voiceSearch: () => {
        H.toast('Voice search coming soon!');
      },
      saveSearch: () => {
        const q = document.getElementById('searchIn')?.value?.trim() || '';
        const u = H.currentUser();
        if (!u) { H.requireAuth('Sign in to save searches'); return; }
        if (!q && !browseState.selectedCategory) { H.toast('Type something to save as a search'); return; }
        state.savedSearches = state.savedSearches || {};
        state.savedSearches[u.id] = state.savedSearches[u.id] || [];
        const already = state.savedSearches[u.id].some(s => s.query === q && s.cat === browseState.selectedCategory);
        if (already) { H.toast('Search already saved'); return; }
        state.savedSearches[u.id].unshift({ id: H.uid(), query: q, cat: browseState.selectedCategory, savedAt: Date.now() });
        state.savedSearches[u.id] = state.savedSearches[u.id].slice(0, 10);
        H.saveState();
        H.toast('Search saved — we\'ll notify you of new matches');
      },
      removeSavedSearch: (id) => {
        const u = H.currentUser(); if (!u) return;
        state.savedSearches = state.savedSearches || {};
        state.savedSearches[u.id] = (state.savedSearches[u.id] || []).filter(s => s.id !== id);
        H.saveState();
        H.renderPage('Browse');
      },
      onFilterChange: () => {
        // Placeholder for future filter logic
      },
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
      applyFilters: () => {
        H._browse.toggleFilters();
        H._browse.onSearch();
      },
      resetFilters: () => {
        browseState = {
          showFilters: false,
          priceMin: 0,
          priceMax: 1000000,
          selectedCategory: null,
          condition: 'all',
          sortBy: 'recent',
          currency: 'all',
          lastSearch: ''
        };
        // Reset UI elements
        document.querySelectorAll('.filter-checkbox input, .filter-radio input').forEach(input => {
          input.checked = false;
        });
        document.querySelectorAll('input[name="condition"]').forEach(input => {
          if (input.value === 'all') input.checked = true;
        });
        // Update currency buttons visually
        document.querySelectorAll('.cur-opt').forEach(b => b.classList.remove('active'));
        const defaultCurBtn = document.querySelector('.cur-opt.all') || document.querySelector('[onclick*="\'all\'"]');
        if (defaultCurBtn) defaultCurBtn.classList.add('active');
        H._browse.onSearch();
      }
    };

    // Restore search query from previous visit (must be after H._browse is assigned)
    if (browseState.lastSearch) {
      const inp = document.getElementById('searchIn');
      if (inp) { inp.value = browseState.lastSearch; H._browse.onSearch(); }
    }
  };

})(window.H);
;/* === www/js/post.js === */
'use strict';
(function (H) {
  const pages = H.pages;
  
  const { CATEGORIES, PROVINCES, CITIES_BY_PROV } = H;

  let postState = {};

  pages.Post = function () {
    if (!H.currentUser()) {
      return `<div class="page active">${H.innerTopbar('Post a Listing')}<div style="padding: 20px;">${H.emptyState('Sign In Required', 'Sign in to post listings and reach millions of buyers.', 'Sign In', "H.requireAuth('Sign in to post listings')")}</div></div>`;
    }
    postState = {
      step: 1, cat: null, title: '', desc: '', price: '',
      currency: 'USD', prov: PROVINCES[0],
      city: CITIES_BY_PROV[PROVINCES[0]][0], suburb: '', photos: []
    };
    return renderPostShell();
  };

  function renderPostShell() {
    return `<div class="page active">
      <div class="post-header">
        <div class="post-h">Post a Free Ad</div>
        <div class="post-sub-txt">Reach buyers across Zimbabwe in minutes</div>
      </div>
      <div class="steps-bar" id="stepsBar">
        ${[1, 2, 3, 4].map(n => `<div class="sdot ${n < postState.step ? 'done' : n === postState.step ? 'cur' : ''}"></div>`).join('')}
      </div>
      <div class="form-wrap" id="postBody">${renderPostStep()}</div>
    </div>`;
  }

  function renderPostStep() {
    const s = postState;
    if (s.step === 1) return `
      <div class="fg">
        <div class="fl">Category</div>
        <div class="cat-3">
          ${CATEGORIES.map(c => `
            <div class="cat-opt ${s.cat === c.id ? 'sel' : ''}" onclick="H._post.setCat('${c.id}')">
              <div style="font-size:22px">${c.icon}</div>
              <div class="cat-opt-label">${c.name}</div>
            </div>`).join('')}
        </div>
      </div>
      <div class="fg"><div class="fl">Title</div>
        <input class="fi" id="postTitle" value="${H.escHtml(s.title)}" placeholder="e.g. 3 Bedroom Flat in Avondale" maxlength="80">
      </div>
      <div class="fg"><div class="fl">Description</div>
        <textarea class="fi" rows="4" id="postDesc" placeholder="Describe what you're selling · condition, features, why you're selling..." maxlength="2000">${H.escHtml(s.desc)}</textarea>
      </div>
      <div class="step-btns"><button class="btn-next" onclick="H._post.next()">Continue ?</button></div>`;

    if (s.step === 2) return `
      <div class="fg"><div class="fl">Price</div>
        <div class="price-row">
          <input class="fi" style="flex:1" type="number" placeholder="0" id="priceInput" value="${H.escHtml(s.price)}" min="0">
          <div class="cur-toggle">
            <button class="cur ${s.currency === 'USD' ? 'on' : ''}" onclick="H._post.setCur('USD')">USD</button>
            <button class="cur ${s.currency === 'ZiG' ? 'on' : ''}" onclick="H._post.setCur('ZiG')">ZiG</button>
          </div>
        </div>
      </div>
      <div class="fg"><div class="fl">Province</div>
        <select class="fi" id="provinceSel" onchange="H._post.onProv(this.value)">
          ${PROVINCES.map(p => `<option ${s.prov === p ? 'selected' : ''}>${p}</option>`).join('')}
        </select>
      </div>
      <div class="fg"><div class="fl">City / Town</div>
        <select class="fi" id="citySel">
          ${(CITIES_BY_PROV[s.prov] || []).map(c => `<option ${s.city === c ? 'selected' : ''}>${c}</option>`).join('')}
        </select>
      </div>
      <div class="fg"><div class="fl">Suburb / Area (optional)</div>
        <input class="fi" id="suburbIn" value="${H.escHtml(s.suburb)}" placeholder="e.g. Avondale West">
      </div>
      <div class="step-btns">
        <button class="btn-prev" onclick="H._post.prev()">? Back</button>
        <button class="btn-next" onclick="H._post.next()">Continue ?</button>
      </div>`;

    if (s.step === 3) return `
      <div class="fg">
        <div class="fl">Photos <span style="font-weight:400;text-transform:none;letter-spacing:0;color:var(--sub2)">(up to 8 · first is the cover)</span></div>
        <label class="img-upload-zone" for="photoFile">
          <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          <div class="img-upload-title">Tap to add photos</div>
          <div class="img-upload-sub">JPG, PNG · Max 8 photos · auto-compressed</div>
        </label>
        <input type="file" id="photoFile" accept="image/*" multiple capture="environment" style="display:none" onchange="H._post.onPhotos(event)">
        <div class="photo-grid" id="photoGrid">${renderPhotoGrid()}</div>
      </div>
      <div class="tip-box">
        <div class="tip-title">?? Photos sell 3× faster</div>
        <div class="tip-body">Listings with 5+ clear photos in good lighting get 3× more enquiries.</div>
      </div>
      <div class="step-btns">
        <button class="btn-prev" onclick="H._post.prev()">? Back</button>
        <button class="btn-next" onclick="H._post.next()">Preview ?</button>
      </div>`;

    if (s.step === 4) return `
      <div class="preview-card">
        <div class="preview-label">? Ad Preview</div>
        <div class="preview-title">${H.escHtml(s.title || 'Untitled')}</div>
        <div class="preview-price">${H.escHtml(H.fmtPrice(s.price, s.currency))}</div>
        <div class="preview-meta">?? ${H.escHtml(s.suburb || s.city)}, ${H.escHtml(s.prov)} · ${(CATEGORIES.find(c => c.id === s.cat) || {}).name || 'Other'} · ${s.photos.length} photo${s.photos.length === 1 ? '' : 's'}</div>
      </div>
      <div class="tip-box">
        <div class="tip-title">?? Listing Rules</div>
        <div class="tip-body">By posting you confirm this item is legal, you own it, and the photos are real. Scam listings result in account suspension.</div>
      </div>
      <div class="step-btns">
        <button class="btn-prev" onclick="H._post.prev()">? Back</button>
        <button class="btn-submit" onclick="H._post.submit()">Post Ad ?</button>
      </div>`;
  }

  function renderPhotoGrid() {
    return postState.photos.map((p, i) =>
      `<div class="photo-thumb"><img src="${p}"><button class="rm" onclick="H._post.removePhoto(${i})">·</button></div>`
    ).join('');
  }

  function refreshBody() {
    document.getElementById('postBody').innerHTML = renderPostStep();
  }

  function refreshSteps() {
    const bar = document.getElementById('stepsBar');
    if (bar) bar.innerHTML = [1, 2, 3, 4].map(n =>
      `<div class="sdot ${n < postState.step ? 'done' : n === postState.step ? 'cur' : ''}"></div>`).join('');
  }

  // Namespace for onclick calls
  H._post = {
    setCat(c)    { if(c==='jobs'){H.openInner('PostJob');return;} postState.cat = c; refreshBody(); },
    setCur(c)    { postState.currency = c; refreshBody(); },
    onProv(p)    { postState.prov = p; postState.city = CITIES_BY_PROV[p][0]; refreshBody(); },
    removePhoto(i) { postState.photos.splice(i, 1); document.getElementById('photoGrid').innerHTML = renderPhotoGrid(); },
    onPhotos(e)  {
      const files = Array.from(e.target.files || []);
      const remaining = 8 - postState.photos.length;
      files.slice(0, remaining).forEach(f => {
        compressImage(f, 1200, 0.78).then(({dataUrl, blob}) => {
          postState.photos.push(dataUrl);
          const idx = postState.photos.length - 1;
          document.getElementById('photoGrid').innerHTML = renderPhotoGrid();
          // Upload to Supabase Storage in the background; replace preview URL when done
          if (blob && typeof H.uploadPhotoToStorage === 'function') {
            H.uploadPhotoToStorage(blob).then(url => {
              if (url && postState.photos[idx] === dataUrl) postState.photos[idx] = url;
            }).catch(() => {});
          }
        });
      });
      e.target.value = '';
    },
    next() {
      const s = postState;
      if (s.step === 1) {
        s.title = document.getElementById('postTitle').value.trim();
        s.desc  = document.getElementById('postDesc').value.trim();
        if (!s.cat)               { H.toast('Pick a category'); return; }
        if (s.title.length < 5)   { H.toast('Title needs at least 5 characters'); return; }
        if (s.desc.length < 10)   { H.toast('Description needs at least 10 characters'); return; }
      } else if (s.step === 2) {
        s.price  = document.getElementById('priceInput').value;
        s.prov   = document.getElementById('provinceSel').value;
        s.city   = document.getElementById('citySel').value;
        s.suburb = document.getElementById('suburbIn').value.trim();
        if (!s.price || Number(s.price) <= 0) { H.toast('Enter a valid price'); return; }
      } else if (s.step === 3) {
        if (!s.photos.length) { H.toast('Add at least one photo'); return; }
      }
      s.step++;
      refreshSteps();
      refreshBody();
    },
    prev() {
      if (postState.step > 1) { postState.step--; refreshSteps(); refreshBody(); }
    },
    submit() {
      const s = postState;
      const u = H.currentUser();
      const l = {
        id: H.uid(), sellerId: u.id, sellerName: u.name || '', sellerPhone: u.phone || '', title: s.title, desc: s.desc,
        price: s.price, currency: s.currency, cat: s.cat,
        prov: s.prov, city: s.city, suburb: s.suburb,
        photos: s.photos, createdAt: Date.now(),
        expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000),
        status: (H.state.requireListingApproval || s.cat === 'jobs') ? 'pending' : 'active',
        boost: null, views: 0
      };
      H.state.listings.unshift(l);
      H.saveState();
      if (typeof H.saveListingToCloud === "function") H.saveListingToCloud(l);
      H.toast(H.state.requireListingApproval ? 'Ad submitted for admin approval' : '?? Your ad is live!');
      H.navTo('Home', document.querySelector('[data-nav="Home"]'));
    }
  };

  function compressImage(file, maxDim = 1200, q = 0.8) {
    return new Promise(res => {
      const r = new FileReader();
      r.onload = ev => {
        const img = new Image();
        img.onload = () => {
          let w = img.width, h = img.height;
          if (w > h && w > maxDim) { h = Math.round(h * maxDim / w); w = maxDim; }
          else if (h > maxDim)     { w = Math.round(w * maxDim / h); h = maxDim; }
          const c = document.createElement('canvas');
          c.width = w; c.height = h;
          c.getContext('2d').drawImage(img, 0, 0, w, h);
          const dataUrl = c.toDataURL('image/jpeg', q);
          c.toBlob(blob => res({dataUrl, blob}), 'image/jpeg', q);
        };
        img.src = ev.target.result;
      };
      r.readAsDataURL(file);
    });
  }

})(window.H);

;/* === www/js/detail.js === */
﻿'use strict';
(function (H) {
  const pages = H.pages;

  const S = {
    crossCircle: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    location:    '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    eye:         '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    boost:       '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    message:     '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    phone:       '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 2.1.74 3.26a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.16.38 2.3.61 3.26.74a2 2 0 0 1 1.72 2.03z"/></svg>',
    flag:        '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
    heart:       '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    heartFill:   '<svg viewBox="0 0 24 24" width="16" height="16" fill="#1A3A8F" stroke="#1A3A8F" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    user:        '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    wa:          '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.99 0C5.364 0 0 5.372 0 11.994c0 2.116.554 4.1 1.524 5.822L.057 24l6.304-1.654A11.978 11.978 0 0 0 11.99 24C18.626 24 24 18.628 24 12.006 24 5.372 18.626 0 11.99 0zm.01 21.818a9.886 9.886 0 0 1-5.031-1.375l-.361-.214-3.741.981.999-3.648-.235-.374A9.82 9.82 0 0 1 2.18 12c0-5.418 4.412-9.824 9.82-9.824 5.418 0 9.824 4.406 9.824 9.824 0 5.418-4.406 9.818-9.824 9.818z"/></svg>',
  };

  function getSeller(l) {
    const found = (H.state.users||[]).find(u => u.id === l.sellerId);
    if (found) return found;
    return {
      id:       l.sellerId   || '',
      name:     l.sellerName || 'Seller',
      phone:    l.sellerPhone|| '',
      verified: false,
      joinedAt: l.createdAt  || Date.now(),
      avatar:   null
    };
  }

  pages.Detail = function ({ id }) {
    const l = (H.state.listings||[]).find(x => x.id === id);
    if (!l) return `<div class="page active">${H.innerTopbar('Listing')}<div class="empty-state"><div class="empty-icon">${S.crossCircle}</div><div class="empty-title">Listing not found</div></div></div>`;

    const seller      = getSeller(l);
    const u           = H.currentUser();
    const saved       = u ? (H.state.saves[u.id]||[]).includes(id) : false;
    const isMine      = u && u.id && seller.id && seller.id === u.id;
    const photos      = l.photos && l.photos.length ? l.photos : [];
    const boosted     = l.boost && l.boost.until > Date.now();
    const sellerPhone = seller.phone || l.sellerPhone || '';
    const sellerName  = seller.name  || l.sellerName  || 'Seller';

    return `<div class="page active">
      <div class="det-topbar">
        <button class="back" onclick="H.goBack()">
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div class="det-topbar-title">${H.escHtml(l.title)}</div>
        <button class="share-btn" onclick="H.shareListing('${l.id}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        </button>
        <button class="fav-btn ${saved?'saved':''}" onclick="H.toggleSave('${l.id}')">
          ${saved ? S.heartFill : S.heart}
        </button>
      </div>

      <div class="det-photo" id="dPhoto">
        ${photos.length
          ? `<img src="${photos[0]}" id="dPhotoImg" onclick="H.openPhotoViewer(${JSON.stringify(photos)},0)" style="cursor:zoom-in">`
          : `<div class="ph">${H.categoryIcon(l.cat)}</div>`}
        ${photos.length > 1 ? `
          <div class="photo-dots">${photos.map((_,i)=>`<div class="pdot ${i===0?'on':''}" onclick="H.setPhoto('${l.id}',${i})"></div>`).join('')}</div>
          <div style="position:absolute;bottom:12px;right:12px;background:rgba(0,0,0,0.5);color:#fff;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600" id="photoCount">1 / ${photos.length}</div>
        ` : ''}
        ${boosted ? `<div style="position:absolute;top:12px;left:12px;background:#F5A623;color:#fff;padding:4px 10px;border-radius:20px;font-size:11px;font-weight:700">Featured</div>` : ''}
      </div>

      <div class="det-content">
        <div class="det-price-row">
          <div class="det-price">${H.escHtml(H.fmtPrice(l.price, l.currency))}</div>
          ${l.negotiable ? '<div class="nego-pill">Negotiable</div>' : ''}
        </div>
        <div class="det-listing-title">${H.escHtml(l.title)}</div>
        <div class="det-loc-row">${S.location} ${H.escHtml((l.suburb||l.city||'')+(l.prov?', '+l.prov:''))} · ${H.timeAgo(l.createdAt)} · ${S.eye} ${l.views||0} views</div>

        <div class="seller-card" onclick="H.openUserProfile('${seller.id}')">
          <div class="seller-av" style="background:#1A3A8F;color:#fff;font-weight:700;font-size:16px;display:flex;align-items:center;justify-content:center">
            ${seller.avatar
              ? `<img src="${seller.avatar}" style="width:100%;height:100%;border-radius:50%;object-fit:cover">`
              : H.initials(sellerName)}
          </div>
          <div class="seller-info">
            <div class="seller-name-row">
              <div class="seller-name">${H.escHtml(sellerName)}</div>
              ${seller.verified ? `<div class="blue-check" style="width:16px;height:16px"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>` : ''}
            </div>
            <div class="seller-phone" style="color:var(--sub);font-size:13px">${H.escHtml(sellerPhone)||'No phone listed'}</div>
            <div class="seller-meta">Member since ${new Date(seller.joinedAt||Date.now()).toLocaleDateString()}${seller.verified?' · ID Verified':''}</div>
          </div>
          <div style="color:var(--sub);font-size:20px">›</div>
        </div>

        <div class="desc-text" style="white-space:pre-line">${H.escHtml(l.desc||'No description provided.')}</div>

        ${isMine ? `
          <button class="btn-pri" onclick="H.openBoostPage('${l.id}')" style="margin-bottom:8px">${S.boost} Boost this Listing</button>
          <button style="width:100%;padding:13px;background:#fee2e2;color:#dc2626;border:none;border-radius:12px;font-size:14px;font-weight:700;cursor:pointer;font-family:Inter,sans-serif" onclick="H.deleteListing('${l.id}')">Delete Listing</button>
        ` : `
          <button class="wa-btn" onclick="H.openWA('${l.id}')">
            ${S.wa} Chat on WhatsApp
          </button>
          <button class="msg-btn" onclick="H.startChatWith('${seller.id}','${l.id}')">
            ${S.message} Message in App
          </button>
          <button class="call-btn" onclick="H.callSeller('${H.escHtml(sellerPhone)}')">
            ${S.phone} Call ${H.escHtml(sellerPhone||'Seller')}
          </button>
          <button class="report-btn" onclick="H.reportListing('${l.id}')">
            ${S.flag} Report this Listing
          </button>
        `}
      </div>
    </div>`;
  };

  H.pages.Detail_after = function(params) {
    H._initSwipe();
    const l = H.state.listings.find(x => x.id === params.id);
    if (!l) return;
    const similar = (H.state.listings||[]).filter(x => x.id!==l.id && x.cat===l.cat && x.status==='active').slice(0,4);
    if (!similar.length) return;
    const det = document.querySelector('.det-content');
    if (!det) return;
    const sec = document.createElement('div');
    sec.innerHTML = '<div class="sec-head" style="margin-top:24px"><div class="sec-title">Similar Listings</div></div><div class="listing-list">'+similar.map(H.renderListCard).join('')+'</div>';
    det.appendChild(sec);
  };

  H._initSwipe = function() {
    const el = document.getElementById('dPhoto'); if (!el) return;
    let sx = 0;
    el.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, {passive:true});
    el.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) < 40) return;
      const dots = document.querySelectorAll('.pdot');
      if (!dots.length) return;
      const cur  = Array.from(dots).findIndex(d => d.classList.contains('on'));
      const next = dx < 0 ? Math.min(cur+1, dots.length-1) : Math.max(cur-1, 0);
      const m = el.querySelector('[onclick*="setPhoto"]');
      if (m) { const match = m.getAttribute('onclick').match(/'([^']+)'/); if (match) H.setPhoto(match[1], next); }
    }, {passive:true});
  };

  H.setPhoto = function(id, i) {
    const l = H.state.listings.find(x => x.id === id);
    if (!l || !l.photos[i]) return;
    const img = document.getElementById('dPhotoImg');
    if (img) img.src = l.photos[i];
    document.querySelectorAll('.pdot').forEach((d,j) => d.classList.toggle('on', j===i));
    const cnt = document.getElementById('photoCount');
    if (cnt) cnt.textContent = (i+1)+' / '+l.photos.length;
  };

  H.shareListing = function(id) {
    const l = H.state.listings.find(x => x.id === id); if (!l) return;
    const text = l.title+' · '+H.fmtPrice(l.price, l.currency)+' on Hostly Zimbabwe';
    if (navigator.share) navigator.share({title:l.title, text, url:location.href}).catch(()=>{});
    else { if (navigator.clipboard) navigator.clipboard.writeText(text+' '+location.href); H.toast('Link copied'); }
  };

  H.toggleSave = function(id) {
    const u = H.currentUser();
    if (!u) { H.requireAuth('Sign in to save listings'); return; }
    H.state.saves[u.id] = H.state.saves[u.id] || [];
    const i = H.state.saves[u.id].indexOf(id);
    if (i >= 0) { H.state.saves[u.id].splice(i,1); H.toast('Removed from saved'); }
    else { H.state.saves[u.id].push(id); H.toast('Saved'); }
    H.saveState();
    H.renderPage('Detail', {id});
  };

  H.deleteListing = function(id) {
    H.modal({
      title:'Delete this listing?', body:'This cannot be undone.', confirmText:'Delete', danger:true,
      onConfirm:() => {
        H.state.listings = H.state.listings.filter(l => l.id !== id);
        H.saveState();
        if (typeof H.deleteListingFromCloud==='function') H.deleteListingFromCloud(id);
        H.toast('Listing deleted'); H.goBack();
      }
    });
  };

  H.openWA = function(id) {
    const l = H.state.listings.find(x => x.id === id); if (!l) return;
    const seller = getSeller(l);
    const phone  = (seller.phone||l.sellerPhone||'').replace(/[^\d+]/g,'');
    if (!phone) { H.toast('No WhatsApp number available'); return; }
    const txt = encodeURIComponent('Hi! I saw your "'+l.title+'" listing on Hostly Zimbabwe. Is it still available?');
    window.open('https://wa.me/'+phone.replace('+','')+'?text='+txt, '_blank');
  };

  H.callSeller = function(phone) {
    if (!phone || phone.trim()==='') { H.toast('No phone number available'); return; }
    const clean = phone.replace(/[^\d+\-() ]/g,'').trim();
    if (!clean) { H.toast('No phone number available'); return; }
    // window.open with '_system' works in Capacitor (routes through native intent)
    // and falls back gracefully in a browser
    window.open('tel:'+clean, '_system');
    // Also copy to clipboard as a backup so the number is always accessible
    if (navigator.clipboard) navigator.clipboard.writeText(clean).catch(()=>{});
    H.toast('Calling '+clean);
  };

  H.startChatWith = function(sellerId, listingId) {
    if (!H.currentUser()) { H.requireAuth('Sign in to message sellers'); return; }
    const u = H.currentUser();
    if (!sellerId || sellerId === u.id) { H.toast('You cannot message yourself'); return; }
    H.state.conversations = H.state.conversations || [];
    // Deterministic ID: sorted user IDs + listingId ensures same conv across sessions
    const ids = [u.id, sellerId].sort();
    const convId = 'conv_' + ids[0].slice(-6) + '_' + ids[1].slice(-6) + '_' + (listingId || '').slice(-6);
    let conv = H.state.conversations.find(c => c.id === convId);
    if (!conv) {
      conv = { id: convId, members: [u.id, sellerId], listingId: listingId || null, messages: [] };
      H.state.conversations.push(conv);
      H.saveState();
    }
    H.openInner('Chat', { id: convId });
  };

  H.reportListing = function(id) {
    if (!H.currentUser()) { H.requireAuth('Sign in to report'); return; }
    const reasons = ['Scam or fraud','Counterfeit or fake item','Wrong category','Prohibited item','Offensive content','Duplicate listing','Other'];
    H.modal({
      title:'Report this listing',
      body:`<select class="fi" id="reportReason" style="width:100%;margin-bottom:8px">${reasons.map(r=>`<option>${r}</option>`).join('')}</select>
            <textarea class="fi" id="reportNote" rows="3" placeholder="Tell us more (optional)" style="width:100%;margin-top:4px"></textarea>`,
      confirmText:'Submit Report',
      onConfirm:() => {
        const reason = document.getElementById('reportReason')?.value||'';
        const note   = document.getElementById('reportNote')?.value||'';
        H.state.reports = H.state.reports||[];
        H.state.reports.push({id:H.uid(), reporterId:H.currentUser().id, targetType:'listing', targetId:id, reason:reason+(note?' - '+note:''), t:Date.now(), status:'open'});
        H.saveState(); H.toast('Report submitted. Thank you.');
      }
    });
  };

  H.reportUser = function(id) {
    if (!H.currentUser()) { H.requireAuth('Sign in to report'); return; }
    const reasons = ['Scammer or fraudster','Harassment','Spam','Fake account','Impersonation','Other'];
    H.modal({
      title:'Report this user',
      body:`<select class="fi" id="reportReason" style="width:100%;margin-bottom:8px">${reasons.map(r=>`<option>${r}</option>`).join('')}</select>
            <textarea class="fi" id="reportNote" rows="3" placeholder="More details (optional)" style="width:100%;margin-top:4px"></textarea>`,
      confirmText:'Submit Report',
      onConfirm:() => {
        const reason = document.getElementById('reportReason')?.value||'';
        const note   = document.getElementById('reportNote')?.value||'';
        H.state.reports = H.state.reports||[];
        H.state.reports.push({id:H.uid(), reporterId:H.currentUser().id, targetType:'user', targetId:id, reason:reason+(note?' - '+note:''), t:Date.now(), status:'open'});
        H.saveState(); H.toast('Report submitted');
      }
    });
  };

  H.openBoostPage = function(listingId) { H.openInner('Boost', {listingId}); };

  // ── PHOTO VIEWER ──────────────────────────────────
  function pvHTML(photos, idx) {
    var dots = '';
    if (photos.length > 1) {
      dots = '<div style="position:absolute;bottom:calc(env(safe-area-inset-bottom,0px)+22px);left:0;right:0;display:flex;gap:8px;justify-content:center;z-index:2">';
      for (var di = 0; di < photos.length; di++) {
        dots += '<div data-dot="'+di+'" onclick="H._pvGoTo('+di+')" style="width:8px;height:8px;border-radius:50%;background:'+(di===idx?'#fff':'rgba(255,255,255,.35)')+';cursor:pointer;transition:background .2s"></div>';
      }
      dots += '</div>';
    }
    return '<div style="position:absolute;top:0;left:0;right:0;padding:calc(env(safe-area-inset-top,0px)+14px) 16px 14px;display:flex;justify-content:space-between;align-items:center;background:linear-gradient(rgba(0,0,0,.65),transparent);z-index:2">'
      + '<span id="pvCounter" style="color:#fff;font-size:14px;font-weight:600;text-shadow:0 1px 4px rgba(0,0,0,.6)">'+(idx+1)+' / '+photos.length+'</span>'
      + '<button onclick="H.closePhotoViewer()" style="background:rgba(0,0,0,.45);border:none;border-radius:50%;width:38px;height:38px;display:flex;align-items:center;justify-content:center;cursor:pointer;-webkit-tap-highlight-color:transparent">'
      + '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" width="18" height="18"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
      + '</button></div>'
      + '<img id="pvImg" src="'+photos[idx]+'" style="position:absolute;top:50%;left:50%;max-width:100%;max-height:100%;object-fit:contain;will-change:transform;pointer-events:none;-webkit-user-drag:none;user-select:none" draggable="false">'
      + dots;
  }

  function pvApply() {
    var pv = H._pv; if (!pv) return;
    var img = document.getElementById('pvImg'); if (!img) return;
    img.style.transform = 'translate(calc(-50% + '+pv.tx+'px), calc(-50% + '+pv.ty+'px)) scale('+pv.scale+')';
  }

  function pvClamp() {
    var pv = H._pv; if (!pv) return;
    if (pv.scale <= 1) { pv.tx = 0; pv.ty = 0; return; }
    var img = document.getElementById('pvImg'); if (!img) return;
    var ox = Math.max(0, img.offsetWidth  * pv.scale - window.innerWidth);
    var oy = Math.max(0, img.offsetHeight * pv.scale - window.innerHeight);
    pv.tx = Math.min(ox/2, Math.max(-ox/2, pv.tx));
    pv.ty = Math.min(oy/2, Math.max(-oy/2, pv.ty));
  }

  function pvDist(a, b) {
    var dx = b.clientX-a.clientX, dy = b.clientY-a.clientY;
    return Math.sqrt(dx*dx+dy*dy);
  }

  function pvTS(e) {
    e.preventDefault();
    var pv = H._pv; if (!pv) return;
    var ts = e.touches;
    pv.moved = false;
    if (ts.length === 1) {
      pv.x0 = ts[0].clientX; pv.y0 = ts[0].clientY;
      pv.txAtStart = pv.tx; pv.tyAtStart = pv.ty;
      pv.pinch = false;
      var now = Date.now();
      if (now - pv.lastTap < 300) { pvDoubleTap(ts[0].clientX, ts[0].clientY); pv.lastTap = 0; }
      else pv.lastTap = now;
    } else if (ts.length >= 2) {
      pv.pinch = true;
      pv.pinchDist0 = pvDist(ts[0], ts[1]);
      pv.scaleAtPinch = pv.scale;
      pv.x0 = (ts[0].clientX+ts[1].clientX)/2;
      pv.y0 = (ts[0].clientY+ts[1].clientY)/2;
      pv.txAtStart = pv.tx; pv.tyAtStart = pv.ty;
    }
  }

  function pvTM(e) {
    e.preventDefault();
    var pv = H._pv; if (!pv) return;
    var ts = e.touches;
    if (ts.length === 1 && !pv.pinch) {
      var dx = ts[0].clientX - pv.x0;
      var dy = ts[0].clientY - pv.y0;
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) pv.moved = true;
      if (pv.scale > 1) {
        pv.tx = pv.txAtStart + dx;
        pv.ty = pv.tyAtStart + dy;
        pvClamp(); pvApply();
      }
    } else if (ts.length >= 2) {
      var dist = pvDist(ts[0], ts[1]);
      pv.scale = Math.min(4, Math.max(1, pv.scaleAtPinch * (dist / pv.pinchDist0)));
      var mx = (ts[0].clientX+ts[1].clientX)/2;
      var my = (ts[0].clientY+ts[1].clientY)/2;
      pv.tx = pv.txAtStart + (mx - pv.x0);
      pv.ty = pv.tyAtStart + (my - pv.y0);
      pv.moved = true;
      pvClamp(); pvApply();
    }
  }

  function pvTE(e) {
    var pv = H._pv; if (!pv) return;
    if (e.touches.length === 0) {
      if (!pv.pinch && pv.scale <= 1 && pv.moved) {
        var dx = e.changedTouches[0].clientX - pv.x0;
        var dy = e.changedTouches[0].clientY - pv.y0;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2) pvNavDir(dx < 0 ? 1 : -1);
      }
      if (pv.scale < 1) { pv.scale = 1; pv.tx = 0; pv.ty = 0; pvApply(); }
      pv.pinch = false;
    } else if (e.touches.length === 1) {
      pv.pinch = false;
      pv.x0 = e.touches[0].clientX; pv.y0 = e.touches[0].clientY;
      pv.txAtStart = pv.tx; pv.tyAtStart = pv.ty;
    }
  }

  function pvDoubleTap(x, y) {
    var pv = H._pv; if (!pv) return;
    var img = document.getElementById('pvImg'); if (!img) return;
    img.style.transition = 'transform .25s ease';
    if (pv.scale > 1) {
      pv.scale = 1; pv.tx = 0; pv.ty = 0;
    } else {
      pv.scale = 2.5;
      pv.tx = (x - window.innerWidth/2)  * (1 - pv.scale);
      pv.ty = (y - window.innerHeight/2) * (1 - pv.scale);
      pvClamp();
    }
    pvApply();
    setTimeout(function(){ var i=document.getElementById('pvImg'); if(i) i.style.transition=''; }, 280);
  }

  function pvNavDir(dir) {
    var pv = H._pv; if (!pv) return;
    var ni = pv.idx + dir;
    if (ni < 0 || ni >= pv.photos.length) return;
    pv.idx = ni; pv.scale = 1; pv.tx = 0; pv.ty = 0;
    var img = document.getElementById('pvImg');
    if (img) {
      img.style.transition = 'opacity .1s';
      img.style.opacity = '0';
      setTimeout(function(){
        img.src = pv.photos[pv.idx];
        img.style.opacity = '1';
        setTimeout(function(){ img.style.transition = ''; }, 120);
      }, 80);
    }
    var cnt = document.getElementById('pvCounter');
    if (cnt) cnt.textContent = (pv.idx+1)+' / '+pv.photos.length;
    document.querySelectorAll('[data-dot]').forEach(function(d){
      d.style.background = parseInt(d.getAttribute('data-dot'))===pv.idx ? '#fff' : 'rgba(255,255,255,.35)';
    });
    pvApply();
  }

  H.openPhotoViewer = function(photos, startIdx) {
    if (!photos || !photos.length) return;
    var existing = document.getElementById('pvOverlay');
    if (existing) existing.remove();
    H._pv = { photos:photos, idx:startIdx||0, scale:1, tx:0, ty:0,
               pinch:false, x0:0, y0:0, txAtStart:0, tyAtStart:0,
               pinchDist0:0, scaleAtPinch:1, moved:false, lastTap:0 };
    var ov = document.createElement('div');
    ov.id = 'pvOverlay';
    ov.style.cssText = 'position:fixed;inset:0;z-index:9999;background:#000;overflow:hidden';
    ov.innerHTML = pvHTML(photos, H._pv.idx);
    document.body.appendChild(ov);
    ov.addEventListener('touchstart', pvTS, {passive:false});
    ov.addEventListener('touchmove',  pvTM, {passive:false});
    ov.addEventListener('touchend',   pvTE, {passive:false});
    H._pv.keyHandler = function(e) {
      if (!H._pv) return;
      if (e.key==='ArrowRight') pvNavDir(1);
      if (e.key==='ArrowLeft')  pvNavDir(-1);
      if (e.key==='Escape')     H.closePhotoViewer();
    };
    document.addEventListener('keydown', H._pv.keyHandler);
    pvApply();
  };

  H.closePhotoViewer = function() {
    var ov = document.getElementById('pvOverlay');
    if (ov) {
      ov.removeEventListener('touchstart', pvTS);
      ov.removeEventListener('touchmove',  pvTM);
      ov.removeEventListener('touchend',   pvTE);
      ov.remove();
    }
    if (H._pv && H._pv.keyHandler) document.removeEventListener('keydown', H._pv.keyHandler);
    H._pv = null;
  };

  H._pvNav   = pvNavDir;
  H._pvGoTo  = function(i) {
    var pv = H._pv; if (!pv) return;
    pv.idx = i; pv.scale = 1; pv.tx = 0; pv.ty = 0;
    var img = document.getElementById('pvImg');
    if (img) img.src = pv.photos[i];
    var cnt = document.getElementById('pvCounter');
    if (cnt) cnt.textContent = (i+1)+' / '+pv.photos.length;
    document.querySelectorAll('[data-dot]').forEach(function(d){
      d.style.background = parseInt(d.getAttribute('data-dot'))===i ? '#fff' : 'rgba(255,255,255,.35)';
    });
    pvApply();
  };

  H.openListing = window.openListing = function(id) {
    const l = (H.state.listings||[]).find(x => x.id === id); if (!l) return;
    if (l.cat === 'jobs') { l.views=(l.views||0)+1; H.saveState(); H.openInner('JobDetail',{id}); return; }
    l.views = (l.views||0)+1; H.saveState();
    H.openInner('Detail', {id});
  };

  H.openUserProfile = function(id) {
    if (!id) { H.toast('Profile not available'); return; }
    H.openInner('UserProfile', {id: String(id)});
  };

  H.pages.UserProfile = function(params) {
    const id = params && params.id ? String(params.id) : null;
    if (!id) return '<div class="page active">'+H.innerTopbar('User')+'<div class="empty-state"><div class="empty-title">User not found</div></div></div>';

    let u = (H.state.users||[]).find(x => String(x.id)===id);
    if (!u) {
      const listing = (H.state.listings||[]).find(l => String(l.sellerId)===id);
      if (listing) {
        u = {id, name:listing.sellerName||'Seller', phone:listing.sellerPhone||'', verified:false, joinedAt:listing.createdAt||Date.now(), avatar:null};
      } else {
        return '<div class="page active">'+H.innerTopbar('User')+'<div class="empty-state"><div class="empty-title">User not found</div></div></div>';
      }
    }

    const myListings = (H.state.listings||[]).filter(l => String(l.sellerId)===id && l.status==='active');
    const me   = H.currentUser();
    const isMe = !!(me && String(me.id)===id);

    return `<div class="page active">
      <div class="det-topbar">
        <button class="back" onclick="H.goBack()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>
        <div class="det-topbar-title">${H.escHtml(u.name)}</div>
        ${!isMe ? `<button class="share-btn" onclick="H.reportUser('${u.id}')" title="Report user">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><line x1="4" y1="22" x2="4" y2="15"/><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/></svg>
        </button>` : '<div style="width:40px"></div>'}
      </div>

      <div class="prof-top">
        <div class="prof-av" style="background:#1A3A8F;color:#fff;font-weight:700;font-size:22px;display:flex;align-items:center;justify-content:center">
          ${u.avatar ? `<img src="${u.avatar}" style="width:100%;height:100%;border-radius:50%;object-fit:cover">` : H.initials(u.name)}
        </div>
        <div class="prof-name">${H.escHtml(u.name)}</div>
        ${u.phone ? `<div style="font-size:13px;color:rgba(255,255,255,0.8);margin-top:4px">${H.escHtml(u.phone)}</div>` : ''}
        ${u.verified ? `<div class="prof-badges"><span class="pbadge pbadge-verified">ID Verified</span></div>` : ''}
        <div style="font-size:12px;color:rgba(255,255,255,.6);margin-top:8px">Member since ${new Date(u.joinedAt||Date.now()).toLocaleDateString()}</div>
        ${!isMe && me ? `<div style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap">
          <button onclick="H.startChatWith('${u.id}','')" style="flex:1;min-width:90px;padding:10px;background:rgba(255,255,255,0.15);color:#fff;border:1.5px solid rgba(255,255,255,0.3);border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:Inter,sans-serif">Message</button>
          ${u.phone ? `<button onclick="H.callSeller('${H.escHtml(u.phone)}')" style="flex:1;min-width:80px;padding:10px;background:rgba(255,255,255,0.15);color:#fff;border:1.5px solid rgba(255,255,255,0.3);border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:Inter,sans-serif">Call</button>` : ''}
          <button onclick="H.leaveReview('${u.id}')" style="flex:1;min-width:100px;padding:10px;background:rgba(245,166,35,0.25);color:#F5A623;border:1.5px solid rgba(245,166,35,0.4);border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:Inter,sans-serif">★ Review</button>
        </div>` : ''}
      </div>

      <div class="sec-head">
        <div class="sec-title">${myListings.length} active listing${myListings.length===1?'':'s'}</div>
        ${!isMe ? `<button onclick="H.openInner('Reviews',{id:'${u.id}'})" style="background:none;border:none;color:#1A3A8F;font-size:12px;font-weight:700;cursor:pointer;padding:0">See Reviews →</button>` : ''}
      </div>
      <div class="listing-list">
        ${myListings.length ? myListings.map(H.renderListCard).join('') : H.emptyState('No listings','This seller has no active listings',null,null)}
      </div>
    </div>`;
  };

  H.pages.SellerProfile = H.pages.UserProfile;

})(window.H);

;/* === www/js/messages.js === */
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

    return `<div class="page active">${H.innerTopbar('Messages')}
      <div style="padding:10px 14px;font-size:12px;color:var(--sub)">${convos.length} conversation${convos.length === 1 ? '' : 's'}</div>
      <div>
        ${convos.length ? convos.map(c => {
          const otherId = c.members.find(m => m !== u.id);
          const other   = state.users.find(x => x.id === otherId) || { name: (function(){ var lastMsg = c.messages.find(function(m){ return m.from===otherId; }); return lastMsg&&lastMsg.senderName ? lastMsg.senderName : 'User'; })() };
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
    const c = (state.conversations || []).find(x => x.id === id);
    if (!c) return '<div class="page active">' + H.innerTopbar('Chat') + '<div class="empty-state"><div class="empty-title">Conversation not found</div></div></div>';
    const u = currentUser();
    const otherId = c.members.find(m => m !== u.id);
    const other = state.users.find(x => x.id === otherId) || { name: (function(){ var m = c.messages.find(function(msg){ return msg.from===otherId; }); return m&&m.senderName ? m.senderName : 'User'; })() };
    const listing = (state.listings || []).find(l => l.id === c.listingId);
    c.messages.forEach(m => { if (m.from !== u.id) m.read = true; });
    saveState();
    H._activeChat = id;
    const msgs = c.messages.map(function(m) {
      const mine = m.from === u.id;
      return '<div class="chat-bubble ' + (mine ? 'me' : 'them') + '">'
        + escHtml(m.text)
        + '<div style="font-size:10px;opacity:.6;margin-top:3px">' + timeAgo(m.t) + '</div>'
        + '</div>';
    }).join('');
    return '<div class="page active">'
      + '<div class="det-topbar"><button class="back" onclick="H.goBack()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>'
      + '<div class="det-topbar-title">' + escHtml(other.name) + '</div></div>'
      + (listing ? '<div style="padding:8px 14px;background:var(--card);border-bottom:1px solid var(--border);font-size:13px;color:var(--sub)">Re: ' + escHtml(listing.title) + '</div>' : '')
      + '<div class="chat-thread" id="chatThread" style="height:calc(100vh - 200px);overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px">' + (msgs || '<div style="text-align:center;color:var(--sub);padding:40px 20px;font-size:14px">No messages yet. Say hello!</div>') + '</div>'
      + '<div class="chat-input-bar">'
      + '<input id="chatIn" placeholder="Message..." onkeydown="if(event.keyCode===13)H.sendChat()">'
      + '<button class="chat-send" onclick="H.sendChat()"><svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>'
      + '</div></div>';
  };

  pages.Chat_after = function () {
    const t = document.getElementById('chatThread');
    if (t) t.scrollTop = t.scrollHeight;
    setTimeout(() => document.getElementById('chatIn')?.focus(), 200);
    if (H.currentPageParams && H.currentPageParams.id) H.startChatPolling(H.currentPageParams.id);
  };


  H.openChat = function (id) { H.openInner('Chat', { id }); };

  H.startChatWith = function (otherId, listingId) {
    const u = currentUser();
    if (otherId === u.id) { H.toast('You cannot message yourself'); return; }
    // Use deterministic ID so both users get same conversation
    const ids = [u.id, otherId].sort();
    const convId = 'conv_' + ids[0].slice(-6) + '_' + ids[1].slice(-6) + '_' + (listingId||'').slice(-6);
    let c = (state.conversations || []).find(x => x.id === convId);
    if (!c) {
      c = { id: convId, members: [u.id, otherId], listingId: listingId||null, messages: [] };
      state.conversations = state.conversations || [];
      state.conversations.push(c);
      saveState();
      if (typeof H.ensureConversationInCloud === 'function') H.ensureConversationInCloud(c);
    }
    H.openInner('Chat', { id: convId });
  };

  H.startChatPolling = function(convId) {
    if (window._chatPoll) clearInterval(window._chatPoll);
    window._chatPoll = setInterval(async function() {
      if (H.currentPageName !== 'Chat' || H._activeChat !== convId) {
        clearInterval(window._chatPoll);
        return;
      }
      const conv = (H.state.conversations || []).find(c => c.id === convId);
      const countBefore = conv ? conv.messages.length : 0;
      if (typeof H.syncConversations === 'function') {
        await H.syncConversations();
      }
      const convAfter = (H.state.conversations || []).find(c => c.id === convId);
      if (!convAfter || convAfter.messages.length <= countBefore) return;
      // Append only the new messages without a full page re-render
      const thread = document.getElementById('chatThread');
      if (!thread) return;
      const u = H.currentUser();
      const newMsgs = convAfter.messages.slice(countBefore);
      newMsgs.forEach(function(m) {
        if (m.from === u.id) return; // we already added our own
        m.read = true;
        const div = document.createElement('div');
        div.className = 'chat-bubble them';
        div.innerHTML = escHtml(m.text) + '<div style="font-size:10px;opacity:.6;margin-top:3px">' + timeAgo(m.t) + '</div>';
        thread.appendChild(div);
      });
      thread.scrollTop = thread.scrollHeight;
      saveState();
    }, 4000);
  };


  // syncConversations is defined in app.js (cloud-aware version)


  H.sendChat = function () {
    const inp = document.getElementById('chatIn');
    const text = inp ? inp.value.trim() : '';
    if (!text) return;
    const c = (H.state.conversations || []).find(function(x){ return x.id === H._activeChat; });
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
      div.innerHTML = escHtml(text) + '<div style="font-size:10px;opacity:.6;margin-top:3px">just now</div>';
      thread.appendChild(div);
      thread.scrollTop = thread.scrollHeight;
    }
    try {
      if (window.supabase && typeof window.supabase.from === 'function') {
        window.supabase.from('messages').insert({
          id: msgId, conversation_id: c.id,
          sender_id: u.id, sender_name: u.name || '',
          text: text, created_at: new Date(msgT).toISOString(), read: false
        }).then(function(r){ if(r&&r.error) console.warn('Msg save failed:', r.error.message); });
      }
    } catch(e) { console.warn('Msg cloud error:', e.message); }
  };

})(window.H);

;/* === www/js/notifications.js === */
'use strict';
(function (H) {
  const { escHtml, timeAgo, uid, toast } = H;
  const saveState = () => H.saveState();
  const pages = H.pages;

  function sb() {
    return (window.supabase && typeof window.supabase.from === 'function') ? window.supabase : null;
  }

  // ── Push helper (called from anywhere) ────────────────────
  H.pushNotif = function (uid_, title, body, type) {
    H.state.notifs = H.state.notifs || {};
    H.state.notifs[uid_] = H.state.notifs[uid_] || [];
    const n = { id: uid(), t: Date.now(), read: false, title, body, type: type || _inferType(title) };
    H.state.notifs[uid_].unshift(n);
    if (H.state.notifs[uid_].length > 100) H.state.notifs[uid_].length = 100;
    saveState();
    H._updateNotifBadge();

    // Persist to Supabase so the user gets it on other devices
    const c = sb();
    if (c) {
      c.from('notifications').insert({
        id: n.id, user_id: uid_, title: n.title, body: n.body,
        type: n.type, read: false, created_at: new Date(n.t).toISOString()
      }).then(r => { if (r && r.error) console.warn('notif insert failed:', r.error.message); });
    }
  };

  H._updateNotifBadge = function () {
    const u = H.currentUser(); if (!u) return;
    const count = (H.state.notifs[u.id] || []).filter(n => !n.read).length;
    // Update the home header bell badge (rendered as span inside the bell div)
    document.querySelectorAll('[data-notif-badge]').forEach(b => {
      b.textContent = count > 9 ? '9+' : count;
      b.style.display = count ? '' : 'none';
    });
    // Legacy selectors
    const legacy = document.querySelector('[data-nav="Notifications"] .badge') || document.querySelector('.hdr-ic .badge');
    if (legacy) {
      legacy.textContent = count > 9 ? '9+' : count;
      legacy.style.display = count ? '' : 'none';
    }
  };

  // ── Hash-based change detection helpers ──────────────────
  function _notifHash(userId) {
    const list = (H.state.notifs && H.state.notifs[userId]) || [];
    return list.map(n => n.id + (n.read ? '1' : '0')).join(',');
  }

  let _notifRenderTimer = null;
  function _maybeRenderNotifs(userId) {
    if (H.currentPageName !== 'Notifications') return;
    const newHash = _notifHash(userId);
    if (newHash === H._lastNotifHash) return;
    H._lastNotifHash = newHash;
    if (_notifRenderTimer) clearTimeout(_notifRenderTimer);
    _notifRenderTimer = setTimeout(function () {
      _notifRenderTimer = null;
      if (H.currentPageName === 'Notifications') H.renderPage('Notifications');
    }, 300);
  }

  // ── Sync from Supabase ────────────────────────────────────
  H.syncNotifications = async function () {
    const c = sb(); if (!c) return;
    const u = H.currentUser(); if (!u) return;
    try {
      const res = await c.from('notifications')
        .select('*').eq('user_id', u.id)
        .order('created_at', { ascending: false }).limit(100);
      if (res.error || !res.data) return;
      H.state.notifs = H.state.notifs || {};
      const local = H.state.notifs[u.id] || [];
      const localIds = new Set(local.map(n => n.id));
      res.data.forEach(r => {
        const t = new Date(r.created_at).getTime();
        const existing = local.find(n => n.id === r.id);
        if (existing) {
          // Cloud read state wins if true (don't unread something the user read on another device)
          if (r.read && !existing.read) existing.read = true;
        } else if (!localIds.has(r.id)) {
          local.unshift({ id: r.id, t, read: !!r.read, title: r.title || '', body: r.body || '', type: r.type || _inferType(r.title) });
        }
      });
      // sort newest first, cap at 100
      local.sort((a, b) => b.t - a.t);
      if (local.length > 100) local.length = 100;
      H.state.notifs[u.id] = local;
      saveState();
      H._updateNotifBadge();
      // Re-render only if the notification list actually changed
      _maybeRenderNotifs(u.id);
    } catch (e) {
      console.warn('syncNotifications error:', e.message);
    }
  };

  // ── Real-time subscription ────────────────────────────────
  H._setupRealtimeNotifs = function () {
    const c = sb(); if (!c || typeof c.channel !== 'function') return;
    const u = H.currentUser(); if (!u) return;
    if (H._notifChannel) {
      try { c.removeChannel(H._notifChannel); } catch (e) {}
      H._notifChannel = null;
    }
    H._notifChannel = c.channel('notifications:' + u.id)
      .on('postgres_changes', {
        event: 'INSERT', schema: 'public', table: 'notifications',
        filter: 'user_id=eq.' + u.id
      }, payload => {
        const r = payload.new; if (!r) return;
        H.state.notifs = H.state.notifs || {};
        const list = H.state.notifs[u.id] = H.state.notifs[u.id] || [];
        if (!list.some(n => n.id === r.id)) {
          list.unshift({
            id: r.id, t: new Date(r.created_at).getTime(),
            read: !!r.read, title: r.title || '', body: r.body || '',
            type: r.type || _inferType(r.title)
          });
          if (list.length > 100) list.length = 100;
          saveState();
          H._updateNotifBadge();
          _maybeRenderNotifs(u.id);
        }
      })
      .subscribe();
  };

  // ── Mark single notification as read (cloud-aware) ────────
  H.markNotifRead = async function (notifId) {
    const u = H.currentUser(); if (!u) return;
    const list = H.state.notifs[u.id] || [];
    const n = list.find(x => x.id === notifId);
    if (!n || n.read) return;
    n.read = true;
    saveState();
    H._updateNotifBadge();
    const c = sb();
    if (c) {
      c.from('notifications').update({ read: true }).eq('id', notifId)
        .then(r => { if (r && r.error) console.warn('notif read update failed:', r.error.message); });
    }
  };

  // ── Mark all as read ──────────────────────────────────────
  H.markAllNotifsRead = async function () {
    const u = H.currentUser(); if (!u) return;
    const list = H.state.notifs[u.id] || [];
    const unreadIds = list.filter(n => !n.read).map(n => n.id);
    if (!unreadIds.length) { toast('No unread notifications'); return; }
    list.forEach(n => { n.read = true; });
    saveState();
    H._updateNotifBadge();
    H.renderPage('Notifications');
    toast('Marked all as read');
    const c = sb();
    if (c) {
      c.from('notifications').update({ read: true }).eq('user_id', u.id).eq('read', false)
        .then(r => { if (r && r.error) console.warn('mark-all update failed:', r.error.message); });
    }
  };

  // ── Pull-to-refresh handler hook ──────────────────────────
  H._refreshNotifications = async function () {
    // Force a re-render after pull-to-refresh by clearing the cached hash
    H._lastNotifHash = null;
    await H.syncNotifications();
    // If syncNotifications didn't trigger a re-render (no changes), force one
    if (H.currentPageName === 'Notifications') H.renderPage('Notifications');
  };

  // ── Type inference & visual mapping ───────────────────────
  function _inferType(title) {
    const t = (title || '').toLowerCase();
    if (t.includes('boost') || t.includes('featured')) return 'boost';
    if (t.includes('verif')) return 'verify';
    if (t.includes('message') || t.includes('reply')) return 'message';
    if (t.includes('ban') || t.includes('suspend')) return 'ban';
    if (t.includes('report')) return 'report';
    if (t.includes('sold') || t.includes('paid') || t.includes('payment')) return 'sale';
    if (t.includes('review') || t.includes('appeal')) return 'review';
    return 'info';
  }

  function _notifIcon(type) {
    const s = 'width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round';
    const map = {
      boost:   `<svg viewBox="0 0 24 24" style="${s}"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
      verify:  `<svg viewBox="0 0 24 24" style="${s}"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
      message: `<svg viewBox="0 0 24 24" style="${s}"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
      ban:     `<svg viewBox="0 0 24 24" style="${s}"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`,
      report:  `<svg viewBox="0 0 24 24" style="${s}"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`,
      sale:    `<svg viewBox="0 0 24 24" style="${s}"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
      review:  `<svg viewBox="0 0 24 24" style="${s}"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
      info:    `<svg viewBox="0 0 24 24" style="${s}"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`
    };
    return map[type] || map.info;
  }

  function _notifBg(type) {
    const map = {
      boost: 'rgba(245,166,35,.12)', verify: 'rgba(29,155,240,.12)',
      message: 'rgba(34,197,94,.12)', ban: 'rgba(255,59,48,.12)',
      report: 'rgba(255,149,0,.12)', sale: 'rgba(0,122,255,.12)',
      review: 'rgba(139,92,246,.12)', info: 'var(--bg2)'
    };
    return map[type] || 'var(--bg2)';
  }

  function _notifColor(type) {
    const map = {
      boost: '#F5A623', verify: '#1D9BF0', message: '#22C55E',
      ban: '#FF3B30', report: '#FF9500', sale: '#007AFF',
      review: '#8B5CF6', info: '#1A3A8F'
    };
    return map[type] || '#1A3A8F';
  }

  // ── Notifications page ────────────────────────────────────
  pages.Notifications = function () {
    const u = H.currentUser();
    if (!u) {
      return '<div class="page active">' + H.innerTopbar('Notifications')
        + H.emptyState('Sign in required', 'Sign in to view your notifications.', 'Sign In', "H.authPage()")
        + '</div>';
    }
    const list = (H.state.notifs[u.id] || []).slice().sort((a, b) => b.t - a.t);
    const unreadCount = list.filter(n => !n.read).length;

    const headerBar = `<div class="inner-topbar">
      <button class="back" onclick="H.goBack()" aria-label="Go back">
        <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="inner-topbar-title">Notifications${unreadCount ? ` <span style="background:#F5A623;color:#1A3A8F;border-radius:10px;padding:1px 8px;font-size:11px;font-weight:800;margin-left:6px">${unreadCount}</span>` : ''}</div>
      ${unreadCount ? '<button onclick="H.markAllNotifsRead()" style="background:none;border:none;color:#1A3A8F;font-size:13px;font-weight:600;cursor:pointer;padding:6px 10px">Mark all read</button>' : '<div style="width:34px"></div>'}
    </div>`;

    return `<div class="page active">${headerBar}
      <div id="notifList" style="padding-bottom:90px">
        ${list.length ? list.map(n => {
          const type = n.type || _inferType(n.title);
          const color = _notifColor(type);
          return `<div onclick="H.markNotifRead('${n.id}');this.querySelector('[data-unread-dot]')?.remove();this.style.background='var(--card)'"
              style="background:${n.read ? 'var(--card)' : 'rgba(26,58,143,.04)'};border-bottom:1px solid var(--border);padding:14px 16px;display:flex;gap:12px;align-items:flex-start;cursor:pointer;position:relative">
            <div style="width:38px;height:38px;border-radius:50%;background:${_notifBg(type)};display:flex;align-items:center;justify-content:center;flex-shrink:0;color:${color}">
              ${_notifIcon(type)}
            </div>
            <div style="flex:1;min-width:0">
              <div style="font-size:14px;font-weight:${n.read ? '600' : '800'};color:var(--text);margin-bottom:3px;line-height:1.3">${escHtml(n.title || '')}</div>
              <div style="font-size:13px;color:var(--sub);line-height:1.5;margin-bottom:4px">${escHtml(n.body || '')}</div>
              <div style="font-size:11px;color:var(--sub2);font-weight:500">${timeAgo(n.t)}</div>
            </div>
            ${n.read ? '' : `<span data-unread-dot style="width:9px;height:9px;border-radius:50%;background:${color};margin-top:6px;flex-shrink:0"></span>`}
          </div>`;
        }).join('') : H.emptyState('All caught up', 'New notifications about your listings and messages will appear here.', null, null)}
      </div>

      <div class="menu-group-label">Notification Settings</div>
      <div class="menu-items" style="padding-bottom:90px">
        <div class="mi" onclick="H.openInner('NotifSettings')">
          <div class="mi-icon blue-ic">
            <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          </div>
          <div class="mi-label">Notification Preferences</div>
          <div class="mi-arrow">›</div>
        </div>
      </div>
    </div>`;
  };

  pages.Notifications_after = function () {
    // Sync from Supabase whenever the page is opened
    if (typeof H.syncNotifications === 'function') H.syncNotifications();
    // Make sure real-time subscription is alive
    if (typeof H._setupRealtimeNotifs === 'function') H._setupRealtimeNotifs();
  };

  // ── Notification settings ─────────────────────────────────
  pages.NotifSettings = function () {
    const u = H.currentUser();
    if (!u) {
      return '<div class="page active">' + H.innerTopbar('Notification Preferences')
        + H.emptyState('Sign in required', 'Sign in to manage notification preferences.', null, null)
        + '</div>';
    }
    u.settings = u.settings || {};

    const rows = [
      ['newEnq',    'New Enquiries',          'When someone messages you about a listing',         'message'],
      ['priceDrop', 'Price Drops',            'When a saved ad drops in price',                    'dollar'],
      ['boostExp',  'Boost Expiry Reminders', '2 days before your boost ends',                     'clock'],
      ['sec',       'Security Alerts',        'New sign-in or suspicious account activity',        'shield'],
      ['promo',     'Tips & Promotions',      'Selling tips, platform updates, discounts',         'star'],
      ['sms',       'SMS Alerts',             'Critical alerts via SMS (carrier rates may apply)', 'smartphone']
    ];

    const settingsIcon = (iconKey) => {
      const style = 'width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;vertical-align:middle;margin-right:4px';
      const icons = {
        message:    `<svg viewBox="0 0 24 24" style="${style}"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        dollar:     `<svg viewBox="0 0 24 24" style="${style}"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
        clock:      `<svg viewBox="0 0 24 24" style="${style}"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
        shield:     `<svg viewBox="0 0 24 24" style="${style}"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        star:       `<svg viewBox="0 0 24 24" style="${style}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
        smartphone: `<svg viewBox="0 0 24 24" style="${style}"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`
      };
      return icons[iconKey] || '';
    };

    return `<div class="page active">${H.innerTopbar('Notification Preferences')}
      <div style="padding:12px 12px 100px">
        <div style="font-size:13px;color:var(--sub);padding:4px 2px 12px;line-height:1.5">
          Choose which notifications you receive. Push notifications require app permissions.
        </div>
        <div class="section-card">
          ${rows.map(([k, t, s, iconName]) => {
            const on = u.settings[k] !== false;
            const trackBg = on ? '#34C759' : 'rgba(120,120,128,0.3)';
            const knobLeft = on ? '22px' : '3px';
            return `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:13px 0;border-bottom:1px solid var(--border)">
              <div style="flex:1;min-width:0;padding-right:12px">
                <div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:2px">${settingsIcon(iconName)} ${t}</div>
                <div style="font-size:12px;color:var(--sub);line-height:1.4">${s}</div>
              </div>
              <button
                onclick="H.toggleSetting('${k}',this)"
                role="switch"
                aria-checked="${on ? 'true' : 'false'}"
                aria-label="${t}"
                style="position:relative;display:inline-block;width:46px;height:26px;border-radius:13px;background:${trackBg};border:none;cursor:pointer;flex-shrink:0;padding:0;transition:background 0.2s;outline:none;-webkit-tap-highlight-color:transparent">
                <span style="position:absolute;top:3px;left:${knobLeft};width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,0.3);transition:left 0.2s"></span>
              </button>
            </div>`;
          }).join('')}
        </div>

        <div style="background:var(--n4);border-radius:14px;padding:14px;margin-top:14px;border:1px solid var(--n5)">
          <div style="font-size:13px;font-weight:700;color:var(--n2);margin-bottom:4px">
            <svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;vertical-align:middle;margin-right:6px"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Privacy Note
          </div>
          <div style="font-size:12px;color:var(--sub);line-height:1.6">
            Hostly never sells your notification preferences or contact details to third parties.
            You can turn off all notifications at any time from your device settings.
          </div>
        </div>
      </div>
    </div>`;
  };

  H.toggleSetting = function (k, btn) {
    const u = H.currentUser(); if (!u) return;
    u.settings = u.settings || {};
    u.settings[k] = !(u.settings[k] !== false);
    const on = u.settings[k];
    // Update track background
    btn.style.background = on ? '#34C759' : 'rgba(120,120,128,0.3)';
    btn.setAttribute('aria-checked', on ? 'true' : 'false');
    // Slide the knob
    const knob = btn.querySelector('span');
    if (knob) knob.style.left = on ? '22px' : '3px';
    saveState();
    toast(on ? 'Enabled' : 'Disabled');
  };

})(window.H);

;/* === www/js/saved.js === */
'use strict';
(function (H) {
  const pages = H.pages;
  const state = H.state;
  const { currentUser, escHtml, timeAgo, uid, toast, modal,
          innerTopbar, emptyState, openInner, goBack, renderPage,
          saveState, fmtPrice, initials, renderListCard, navTo,
          pushNotif, CATEGORIES } = H;

  // ---------------------------------------------------
  // SAVED LISTINGS
  // ---------------------------------------------------
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
          : emptyState('Nothing saved yet', 'Tap the ? on any listing to save it for later', 'Browse Listings', "H.navTo('Browse',document.querySelector('[data-nav=Browse]'))")}
      </div>
    </div>`;
  };

  // ---------------------------------------------------
  // PROFILE (own)
  // ---------------------------------------------------
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
          <div class="mi-label">${u.verified ? 'Verified ?' : 'Get Verified'}</div>
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
        <div class="mi" onclick="H.toggleDarkMode()">
          <div class="mi-icon"><svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg></div>
          <div class="mi-label">Dark Mode</div>
          <span id="darkModeToggle" class="${(u.settings&&u.settings.theme)==='dark'?'mi-badge-green':''}" style="font-size:12px;font-weight:700;color:var(--sub2);margin-right:4px">${(u.settings&&u.settings.theme)==='dark'?'On':'Off'}</span>
          <div class="mi-arrow">›</div>
        </div>
        <div class="mi" onclick="H.openInner('LanguageSettings')">
          <div class="mi-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
          <div class="mi-label">Language</div>
          <div class="mi-arrow">›</div>
        </div>
        <div class="mi" onclick="H.openInner('PrivacySettings')">
          <div class="mi-icon"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
          <div class="mi-label">Privacy Settings</div>
          <div class="mi-arrow">›</div>
        </div>
        <div class="mi" onclick="H.openInner('HelpPrivacy')">
          <div class="mi-icon blue-ic"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
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
          <div class="mi-label">About Hostly</div>
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
          <div class="mi-label red-lbl">Log Out</div>
        </div>
        <div class="mi" onclick="H.openInner('DeleteAccount')">
          <div class="mi-icon red-ic"><svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg></div>
          <div class="mi-label red-lbl">Delete Account</div>
        </div>
      </div>
    </div>`;
  };

  // ---------------------------------------------------
  // MY LISTINGS
  // ---------------------------------------------------
  pages.MyListings = function () {
    const u    = currentUser();
    const list = (state.listings || []).filter(l => l.sellerId === u.id).sort((a, b) => b.createdAt - a.createdAt);

    return `<div class="page active">${innerTopbar('My Listings')}
      <div style="padding-bottom:90px">
        ${list.length ? list.map(l => {
          const statusClass = l.status === 'active' ? 'status-active' : l.status === 'banned' ? 'status-banned' : 'status-pending';
          const expiring = l.expiresAt && l.expiresAt - Date.now() < 7 * 24 * 60 * 60 * 1000;
          const expired  = H.isExpired(l);
          const daysLeft = l.expiresAt ? Math.max(0, Math.ceil((l.expiresAt - Date.now()) / 86400000)) : null;
          return `<div class="my-listing-card">
            <div class="ml-thumb">
              ${l.photos && l.photos[0] ? `<img src="${l.photos[0]}">` : (CATEGORIES.find(c => c.id === l.cat) || {}).icon || '??'}
            </div>
            <div class="ml-body">
              <div class="ml-title">${escHtml(l.title)}</div>
              <div class="ml-price">${escHtml(fmtPrice(l.price, l.currency))}</div>
              <div class="ml-meta">
                <span class="status-pill ${statusClass}">${l.status}</span>
                · ${l.views || 0} views · ${timeAgo(l.createdAt)}
                ${expired ? ' · <span style="color:#dc2626;font-weight:700">Expired</span>' : expiring ? ` · <span style="color:#f59e0b;font-weight:700">${daysLeft}d left</span>` : ''}
              </div>
              <div class="ml-actions">
                <button class="ml-act-btn" onclick="H.openListing('${l.id}')">View</button>
                <button class="ml-act-btn" onclick="H.openInner('Boost',{listingId:'${l.id}'})">? Boost</button>
                ${(expired || expiring) ? `<button class="ml-act-btn" onclick="H.renewListing('${l.id}')">Renew</button>` : ''}
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

  // Log out helper
  H.logOut = function () {
    modal({
      title: 'Log out?', body: 'You will be returned to the login screen.',
      confirmText: 'Log Out',
      onConfirm: () => {
        state.currentUserId = null;
        saveState();
        location.reload();
      }
    });
  };

})(window.H);
;/* === www/js/admin.js === */
'use strict';
(function (H) {
  const pages = H.pages;
  const getState = () => H.state || {};
  const { escHtml, timeAgo, uid, toast, modal, fmtPrice, initials, pushNotif } = H;
  // Methods that use `this` must go through H so binding is correct
  const currentUser = () => H.currentUser();
  const innerTopbar = (...a) => H.innerTopbar(...a);
  const emptyState  = (...a) => H.emptyState(...a);
  const saveState   = () => H.saveState();
  const renderPage  = (...a) => H.renderPage(...a);

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
      ['analytics',     'Analytics'],
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
      case 'analytics':     return renderAnalytics();
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
    const today    = Date.now() - 86400000;
    const newToday = listings.filter(l=>l.createdAt>today).length;
    const usersToday = users.filter(u=>(u.joinedAt||u.createdAt||0)>today).length;
    const openReports = reports.filter(r=>r.status==='open').length;
    const pending  = listings.filter(l=>l.status==='pending').length;
    const expiring = listings.filter(l=>l.expiresAt&&l.expiresAt-Date.now()<7*86400000&&l.expiresAt>Date.now()).length;
    const openTickets = (H.state.supportTickets||[]).filter(t=>t.status!=='closed').length;
    const topupQueue = (H.state.topupRequests||[]).filter(r=>r.status==='pending').length;

    return `
      <div class="stats" style="margin:0 0 10px">
        <div class="stat"><div class="stat-n">${users.length}</div><div class="stat-l">Users</div></div>
        <div class="stat"><div class="stat-n">+${usersToday}</div><div class="stat-l">New Today</div></div>
        <div class="stat"><div class="stat-n">${users.filter(u=>u.verified).length}</div><div class="stat-l">Verified</div></div>
      </div>
      <div class="stats" style="margin:0 0 10px">
        <div class="stat"><div class="stat-n">${listings.filter(l=>l.status==='active').length}</div><div class="stat-l">Active Ads</div></div>
        <div class="stat"><div class="stat-n">+${newToday}</div><div class="stat-l">New Today</div></div>
        <div class="stat"><div class="stat-n">$${revenue.toFixed(0)}</div><div class="stat-l">Revenue</div></div>
      </div>
      ${(pending||openReports||expiring||openTickets||topupQueue) ? `
      <div style="padding:12px 0 4px;font-size:11px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.6px">Needs Attention</div>
      <div class="section-card" style="padding:0">
        ${pending ? `<div class="admin-alert-row" onclick="H._admin.setTab('listings');H._admin.filterListingsByStatus('pending')">
          <span style="color:#f59e0b;font-weight:700">${pending} pending listing${pending>1?'s':''}</span> awaiting review
          <span style="color:#1A3A8F;font-weight:700;margin-left:auto">Review →</span>
        </div>` : ''}
        ${openReports ? `<div class="admin-alert-row" onclick="H._admin.setTab('reports')">
          <span style="color:#dc2626;font-weight:700">${openReports} open report${openReports>1?'s':''}</span> need action
          <span style="color:#1A3A8F;font-weight:700;margin-left:auto">View →</span>
        </div>` : ''}
        ${expiring ? `<div class="admin-alert-row" onclick="H._admin.setTab('listings');H._admin.filterListingsByStatus('active')">
          <span style="color:#f59e0b;font-weight:700">${expiring} listing${expiring>1?'s':''}</span> expiring within 7 days
          <span style="color:#1A3A8F;font-weight:700;margin-left:auto">View →</span>
        </div>` : ''}
        ${openTickets ? `<div class="admin-alert-row" onclick="H._admin.setTab('support')">
          <span style="color:#7c3aed;font-weight:700">${openTickets} support ticket${openTickets>1?'s':''}</span> open
          <span style="color:#1A3A8F;font-weight:700;margin-left:auto">View →</span>
        </div>` : ''}
        ${topupQueue ? `<div class="admin-alert-row" onclick="H._admin.setTab('payments')">
          <span style="color:#059669;font-weight:700">${topupQueue} top-up request${topupQueue>1?'s':''}</span> pending
          <span style="color:#1A3A8F;font-weight:700;margin-left:auto">View →</span>
        </div>` : ''}
      </div>` : ''}
      <div class="stats" style="margin:10px 0 0">
        <div class="stat"><div class="stat-n">${txns.length}</div><div class="stat-l">Transactions</div></div>
        <div class="stat"><div class="stat-n">${users.filter(u=>u.status!=='active').length}</div><div class="stat-l">Banned</div></div>
        <div class="stat"><div class="stat-n">${listings.filter(l=>l.status==='pending').length}</div><div class="stat-l">Pending</div></div>
      </div>`;
  }

  // ── ANALYTICS ─────────────────────────────────────────────
  function renderAnalytics() {
    const listings = H.state.listings || [];
    const users    = H.state.users || [];
    const txns     = H.state.txns || [];

    // Listings by category
    const catCounts = {};
    listings.forEach(l => { catCounts[l.cat] = (catCounts[l.cat]||0)+1; });
    const catEntries = Object.entries(catCounts).sort((a,b)=>b[1]-a[1]);
    const maxCat = catEntries[0]?.[1] || 1;

    // Revenue by type
    const boostRev = txns.filter(t=>t.type==='boost').reduce((s,t)=>s+Math.abs(t.amt),0);
    const topupRev = txns.filter(t=>t.type==='topup').reduce((s,t)=>s+Math.abs(t.amt),0);

    // New users by week (last 4 weeks)
    const now = Date.now();
    const weeks = [0,1,2,3].map(w => {
      const start = now - (w+1)*7*86400000;
      const end   = now - w*7*86400000;
      return { label: `${w===0?'This':w===1?'Last':w+'w ago'} week`, count: users.filter(u=>(u.joinedAt||u.createdAt||0)>start&&(u.joinedAt||u.createdAt||0)<=end).length };
    }).reverse();
    const maxWeek = Math.max(1, ...weeks.map(w=>w.count));

    // Listing status breakdown
    const active  = listings.filter(l=>l.status==='active').length;
    const pending = listings.filter(l=>l.status==='pending').length;
    const banned  = listings.filter(l=>l.status==='banned').length;
    const total   = listings.length || 1;

    return `
      <div style="padding:4px 0 10px;font-size:11px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.6px">Listings by Category</div>
      <div class="section-card" style="padding:14px">
        ${catEntries.length ? catEntries.map(([cat, count]) => {
          const pct = Math.round(count/maxCat*100);
          const catObj = (H.CATEGORIES||[]).find(c=>c.id===cat)||{name:cat,icon:''};
          return `<div style="margin-bottom:10px">
            <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:600;color:var(--text-mid);margin-bottom:4px">
              <span>${catObj.icon||''} ${escHtml(catObj.name)}</span><span>${count}</span>
            </div>
            <div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden">
              <div style="height:100%;width:${pct}%;background:#1A3A8F;border-radius:3px;transition:width .3s"></div>
            </div>
          </div>`;
        }).join('') : '<div style="color:var(--text-sub);font-size:13px">No listings yet</div>'}
      </div>

      <div style="padding:14px 0 10px;font-size:11px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.6px">Listing Status</div>
      <div class="section-card" style="padding:14px">
        <div style="display:flex;height:10px;border-radius:5px;overflow:hidden;margin-bottom:10px">
          <div style="width:${Math.round(active/total*100)}%;background:#059669" title="Active"></div>
          <div style="width:${Math.round(pending/total*100)}%;background:#f59e0b" title="Pending"></div>
          <div style="width:${Math.round(banned/total*100)}%;background:#dc2626" title="Banned"></div>
        </div>
        <div style="display:flex;gap:16px;font-size:12px">
          <span style="color:#059669;font-weight:600">● Active: ${active}</span>
          <span style="color:#f59e0b;font-weight:600">● Pending: ${pending}</span>
          <span style="color:#dc2626;font-weight:600">● Removed: ${banned}</span>
        </div>
      </div>

      <div style="padding:14px 0 10px;font-size:11px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.6px">New Users (weekly)</div>
      <div class="section-card" style="padding:14px">
        <div style="display:flex;align-items:flex-end;gap:8px;height:64px">
          ${weeks.map(w=>`<div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1">
            <div style="width:100%;background:#1A3A8F;border-radius:4px 4px 0 0;height:${Math.max(4,Math.round(w.count/maxWeek*52))}px"></div>
            <div style="font-size:10px;color:var(--text-sub);white-space:nowrap">${w.count}</div>
          </div>`).join('')}
        </div>
        <div style="display:flex;gap:8px;margin-top:4px">
          ${weeks.map(w=>`<div style="flex:1;font-size:10px;color:var(--text-hint);text-align:center">${w.label}</div>`).join('')}
        </div>
      </div>

      <div style="padding:14px 0 10px;font-size:11px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.6px">Revenue</div>
      <div class="stats" style="margin:0">
        <div class="stat"><div class="stat-n">$${boostRev.toFixed(0)}</div><div class="stat-l">Boost Revenue</div></div>
        <div class="stat"><div class="stat-n">$${topupRev.toFixed(0)}</div><div class="stat-l">Top-ups</div></div>
        <div class="stat"><div class="stat-n">$${(boostRev+topupRev).toFixed(0)}</div><div class="stat-l">Total</div></div>
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
  let _reportFilter = 'all';
  function renderReports(filter) {
    if (filter !== undefined) _reportFilter = filter;
    const all  = [...(H.state.reports||[])].sort((a,b)=>b.t-a.t);
    const open = all.filter(r=>r.status==='open');
    const list = _reportFilter==='open' ? open
               : _reportFilter==='listing' ? all.filter(r=>r.targetType==='listing')
               : _reportFilter==='user' ? all.filter(r=>r.targetType==='user')
               : all;
    if (!all.length) return emptyState('No reports','All clear!',null,null);
    const filterBar = `<div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap">
      <button class="admin-tab ${_reportFilter==='all'?'on':''}" onclick="H._admin.filterReports('all')">All (${all.length})</button>
      <button class="admin-tab ${_reportFilter==='open'?'on':''}" onclick="H._admin.filterReports('open')">Open (${open.length})</button>
      <button class="admin-tab ${_reportFilter==='listing'?'on':''}" onclick="H._admin.filterReports('listing')">Listings</button>
      <button class="admin-tab ${_reportFilter==='user'?'on':''}" onclick="H._admin.filterReports('user')">Users</button>
    </div>`;
    if (!list.length) return filterBar + emptyState('No reports','Nothing here',null,null);
    return filterBar + list.map(r => {
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
    const txns    = [...(H.state.txns||[])].sort((a,b)=>b.t-a.t).slice(0,50);
    const revenue = txns.filter(t=>t.type==='boost').reduce((s,t)=>s+Math.abs(t.amt),0);
    const topups  = txns.filter(t=>t.type==='topup').reduce((s,t)=>s+Math.abs(t.amt),0);
    const pending = (H.state.topupRequests||[]).filter(r=>r.status==='pending');
    return `
      <div class="stats" style="margin:0 0 14px">
        <div class="stat"><div class="stat-n">$${revenue.toFixed(2)}</div><div class="stat-l">Boost Revenue</div></div>
        <div class="stat"><div class="stat-n">$${topups.toFixed(2)}</div><div class="stat-l">Top-ups</div></div>
        <div class="stat"><div class="stat-n">${txns.length}</div><div class="stat-l">Transactions</div></div>
      </div>
      ${pending.length ? `
      <div style="font-size:11px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px">Pending Top-up Requests</div>
      <div class="section-card" style="margin-bottom:14px">
        ${pending.map(r => {
          const u = (H.state.users||[]).find(x=>x.id===r.userId)||{name:'Unknown'};
          return `<div class="admin-row" style="padding:12px 14px">
            <div class="admin-row-head">
              <div class="admin-row-name">${escHtml(u.name)}</div>
              <span class="status-pill status-pending">Pending</span>
            </div>
            <div class="admin-row-meta">$${r.amount} via ${escHtml(r.method||'EcoCash')} · Ref: ${escHtml(r.ref||'—')} · ${new Date(r.t||Date.now()).toLocaleDateString()}</div>
            <div class="admin-actions">
              <button class="ml-act-btn" onclick="H._admin.approveTopup('${r.id}')">${S.approve} Approve</button>
              <button class="ml-act-btn red" onclick="H._admin.rejectTopup('${r.id}')">${S.reject} Reject</button>
            </div>
          </div>`;
        }).join('')}
      </div>` : ''}
      <div style="font-size:11px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px">Transaction History</div>
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
        : '<div style="padding:24px;text-align:center;color:var(--text-sub)">No transactions yet</div>'}
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
        <button class="toggle-sw ${H.state[key]?'on':''}" onclick="H._admin.toggleSetting('${key}')"></button>
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
    const users = H.state.users || [];
    return `<div class="section-card" style="padding:14px">
      <div class="menu-group-label" style="padding:0 0 14px">Send Broadcast</div>
      <div class="fg">
        <div class="fl">Target Audience</div>
        <select class="fi" id="bcastTarget">
          <option value="all">All Users (${users.length})</option>
          <option value="verified">Verified Users Only (${users.filter(u=>u.verified).length})</option>
          <option value="unverified">Unverified Only (${users.filter(u=>!u.verified).length})</option>
          <option value="sellers">Users with Listings</option>
          <option value="inactive">Users with No Listings</option>
        </select>
      </div>
      <div class="fg">
        <div class="fl">Notification Title</div>
        <input class="fi" id="bcastTitle" placeholder="e.g. New feature available">
      </div>
      <div class="fg">
        <div class="fl">Message</div>
        <textarea class="fi" rows="4" id="bcastMsg" placeholder="Write your message..."></textarea>
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

    filterReports(f) {
      const body = document.getElementById('adminBody');
      if (body) body.innerHTML = renderReports(f);
    },

    approveTopup(rid) {
      const r = (H.state.topupRequests||[]).find(x=>x.id===rid); if (!r) return;
      const u = (H.state.users||[]).find(x=>x.id===r.userId); if (!u) return;
      r.status = 'approved';
      u.walletUSD = (u.walletUSD||0) + Number(r.amount);
      H.state.txns = H.state.txns||[];
      H.state.txns.unshift({id:uid(),userId:u.id,type:'topup',amt:Number(r.amount),note:`Top-up approved by admin (ref: ${r.ref||'—'})`,t:Date.now()});
      pushNotif(u.id,'Top-up Approved',`$${r.amount} has been added to your wallet`);
      alog(`Approved top-up $${r.amount} for ${u.name}`);
      saveState(); toast(`$${r.amount} credited to ${u.name}`); this.setTab('payments');
    },

    rejectTopup(rid) {
      const r = (H.state.topupRequests||[]).find(x=>x.id===rid); if (!r) return;
      const u = (H.state.users||[]).find(x=>x.id===r.userId);
      r.status = 'rejected';
      if (u) pushNotif(u.id,'Top-up Rejected','Your top-up could not be verified. Contact support if this is an error.');
      alog(`Rejected top-up ${rid}`);
      saveState(); toast('Top-up rejected'); this.setTab('payments');
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
      H.state[k] = !H.state[k];
      alog(`Toggled setting: ${k} = ${H.state[k]}`);
      saveState(); toast('Setting updated'); this.setTab('settings');
    },

    broadcast() {
      const title  = document.getElementById('bcastTitle')?.value?.trim();
      const msg    = document.getElementById('bcastMsg')?.value?.trim();
      const target = document.getElementById('bcastTarget')?.value || 'all';
      if (!title || !msg) { toast('Enter title and message'); return; }
      const allUsers = H.state.users||[];
      const sellerIds = new Set((H.state.listings||[]).map(l=>l.sellerId));
      const targets = allUsers.filter(u => {
        if (target==='verified')   return u.verified;
        if (target==='unverified') return !u.verified;
        if (target==='sellers')    return sellerIds.has(u.id);
        if (target==='inactive')   return !sellerIds.has(u.id);
        return true;
      });
      targets.forEach(u => pushNotif(u.id, title, msg));
      alog(`Broadcast (${target}) to ${targets.length} users: ${msg.slice(0,50)}`);
      saveState();
      toast(`Broadcast sent to ${targets.length} user${targets.length!==1?'s':''}`);
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
      const data = JSON.stringify(H.state, null, 2);
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



;/* === www/js/verify.js === */
'use strict';
(function (H) {
  const pages = H.pages;
  const state = H.state;
  const { escHtml, uid, toast, pushNotif } = H;
  // Methods that use `this` must go through H so binding is correct
  const currentUser = () => H.currentUser();
  const innerTopbar = (...a) => H.innerTopbar(...a);
  const saveState   = () => H.saveState();
  const goBack      = () => H.goBack();
  const renderPage  = (...a) => H.renderPage(...a);

  // Fallback SVG icons in case H.ICONS is not ready
  const icons = {
    check: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>',
    cross: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    lock:  '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    id:    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><path d="M10 14h4"/><circle cx="10" cy="17" r="1"/></svg>',
    camera:'<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
    phone: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 2.1.74 3.26a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.16.38 2.3.61 3.26.74a2 2 0 0 1 1.72 2.03z"/></svg>',
  };

  // Prefer H.ICONS if available, else fall back
  const I = window.H && H.ICONS ? { ...icons, ...H.ICONS } : icons;

  let camStream   = null;
  let livenessTimer = null;

  function stopCam() {
    if (livenessTimer) { clearInterval(livenessTimer); livenessTimer = null; }
    if (camStream) { camStream.getTracks().forEach(t => t.stop()); camStream = null; }
  }

  // ---------------------------------------------------
  // VERIFY PAGE
  // ---------------------------------------------------
  pages.Verify = function () {
    const u      = currentUser();
    const hasId  = !!u.idDocs;
    const hasSelfie = !!u.selfie;

    return `<div class="page active">${innerTopbar('Verify Identity')}
      <div class="inner-content">
        <div class="verify-badge-preview">
          <div class="vbp-icon">${I.shield || I.check}</div>
          <div>
            <div style="font-size:14px;font-weight:700">${u.verified ? 'You are verified' : 'Get your Blue Verified Badge'}</div>
            <div style="font-size:12px;color:var(--sub);margin-top:1px">${u.verified ? 'Buyers trust verified sellers more.' : 'Verified sellers get 4× more enquiries'}</div>
          </div>
        </div>

        <div class="verify-step">
          <div class="verify-num done">${I.check}</div>
          <div>
            <div class="verify-step-title">Phone verified</div>
            <div class="verify-step-sub">${escHtml(u.phone)}</div>
          </div>
        </div>

        <div class="verify-step">
          <div class="verify-num ${hasId ? 'done' : ''}">${hasId ? I.check : `<span style="font-size:15px;font-weight:600">2</span>`}</div>
          <div style="flex:1">
            <div class="verify-step-title">Upload ID document</div>
            <div class="verify-step-sub">National ID, passport or driver's licence. Both sides if applicable.</div>
            <input type="file" id="idFile" accept="image/*" capture="environment" style="display:none" onchange="H._verify.onIdUpload(event)">
            <button class="verify-step-btn" onclick="document.getElementById('idFile').click()">
              ${I.camera} ${hasId ? 'Replace ID' : 'Upload ID'}
            </button>
            ${hasId ? `<img src="${u.idDocs}" style="width:100%;max-width:240px;border-radius:12px;margin-top:10px">` : ''}
          </div>
        </div>

        <div class="verify-step">
          <div class="verify-num ${hasSelfie ? 'done' : ''}">${hasSelfie ? I.check : `<span style="font-size:15px;font-weight:600">3</span>`}</div>
          <div style="flex:1">
            <div class="verify-step-title">AI Liveness Selfie</div>
            <div class="verify-step-sub">We use on-device AI to confirm you're a real human. Blink and slowly turn your head when prompted.</div>
            <button class="verify-step-btn" onclick="H.openInner('SelfieCam')">
              ${I.camera} ${hasSelfie ? 'Re-take Selfie' : 'Start Liveness Check'}
            </button>
            ${hasSelfie ? `<img src="${u.selfie}" style="width:110px;height:110px;border-radius:50%;object-fit:cover;margin-top:10px;border:3px solid var(--n4)">` : ''}
          </div>
        </div>

        ${hasId && hasSelfie && !u.verified ? `
          <button class="btn-pri" onclick="H._verify.submitForReview()">Submit for Review</button>
          <div style="font-size:12px;color:var(--sub);text-align:center;margin-top:8px">Approval typically within minutes via our automated AI check.</div>
        ` : ''}

        <div class="tip-box" style="margin-top:14px">
          <div class="tip-title">${I.lock} Your data is secure</div>
          <div class="tip-body">ID and selfie data is stored encrypted on your device only and used solely for verification. Never sold or shared.</div>
        </div>
      </div>
    </div>`;
  };

  // ---------------------------------------------------
  // SELFIE CAM
  // ---------------------------------------------------
  pages.SelfieCam = function () {
    return `<div class="page active">${innerTopbar('AI Liveness Check')}
      <div class="inner-content">
        <div class="cam-wrap" id="camWrap">
          <video id="camVideo" playsinline autoplay muted></video>
          <div class="face-guide"></div>
          <div class="cam-state" id="camState">Initializing camera·</div>
          <div class="cam-instr" id="camInstr">Position your face inside the oval</div>
        </div>
        <canvas id="camCanvas" style="display:none"></canvas>
        <button class="btn-pri" id="capBtn" onclick="H._verify.captureSelfie()" disabled>Start Liveness Check</button>
        <button class="ml-act-btn" style="width:100%;padding:12px;margin-top:8px" onclick="H._verify.cancel()">Cancel</button>
        <div class="tip-box" style="margin-top:14px">
          <div class="tip-title">${I.info || '?'} How it works</div>
          <div class="tip-body">Our AI checks for face motion (turn head left & right) and blink to confirm you're a real human and not a static photo or screen.</div>
        </div>
      </div>
    </div>`;
  };

  pages.SelfieCam_after = async function () {
    try {
      camStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: 640, height: 640 }, audio: false });
      const v = document.getElementById('camVideo');
      v.srcObject = camStream;
      v.onloadedmetadata = () => {
        v.play();
        document.getElementById('camState').textContent = 'Ready';
        document.getElementById('capBtn').disabled = false;
        detectFace();
      };
    } catch (e) {
      document.getElementById('camState').textContent = 'Camera blocked';
      document.getElementById('camInstr').textContent = 'Please allow camera access in settings';
      toast('Camera permission denied');
    }
  };

  function detectFace() {
    const v = document.getElementById('camVideo');
    const c = document.getElementById('camCanvas');
    const ctx = c.getContext('2d');
    c.width = 160; c.height = 160;
    livenessTimer = setInterval(() => {
      if (!v.videoWidth) return;
      const sx = (v.videoWidth - Math.min(v.videoWidth, v.videoHeight)) / 2;
      const sy = (v.videoHeight - Math.min(v.videoWidth, v.videoHeight)) / 2;
      const sz = Math.min(v.videoWidth, v.videoHeight);
      ctx.drawImage(v, sx, sy, sz, sz, 0, 0, 160, 160);
      const d = ctx.getImageData(40, 30, 80, 100).data;
      let sumR = 0, sumG = 0, sumB = 0, count = 0;
      for (let i = 0; i < d.length; i += 4) { sumR += d[i]; sumG += d[i+1]; sumB += d[i+2]; count++; }
      const r = sumR / count, g = sumG / count, b = sumB / count;
      const skinish = (r > 95 && g > 40 && b > 20 && r > g && r > b && Math.abs(r - g) > 10);
      const el = document.getElementById('camState');
      if (el) el.textContent = skinish ? '? Face detected' : 'Show your face';
      // Use icon in innerHTML if you prefer:
      // if (el) el.innerHTML = skinish ? `${I.check} Face detected` : `${I.cross} Show your face`;
    }, 400);
  }

  // Namespace for onclick calls
  H._verify = {
    cancel() { stopCam(); goBack(); },

    onIdUpload(e) {
      const f = e.target.files[0]; if (!f) return;
      compressImage(f, 1400, 0.82).then(d => {
        const u = currentUser(); u.idDocs = d; saveState(); renderPage('Verify'); toast('ID uploaded');
      });
    },

    submitForReview() {
      const u = currentUser();
      if (!u.idDocs || !u.selfie) { toast('Complete both steps first'); return; }
      toast('Verifying with AI…');
      setTimeout(() => {
        u.verified = true;
        saveState();
        pushNotif(u.id, 'Verification complete', 'You now have a blue verified badge.');
        toast('You are verified!');
        renderPage('Verify');
      }, 1200);
    },

    async captureSelfie() {
      const btn = document.getElementById('capBtn');
      btn.disabled = true;
      const stages = [
        { instr: 'Look straight at the camera',   state: 'Hold still…',         ms: 1500 },
        { instr: 'Slowly turn your head LEFT',    state: 'Detecting motion…',   ms: 2200 },
        { instr: 'Now turn your head RIGHT',      state: 'Detecting motion…',   ms: 2200 },
        { instr: 'Blink twice',                   state: 'Detecting blink…',    ms: 2200 },
        { instr: 'Almost done…',                  state: 'Verifying with AI…',  ms: 1500 }
      ];
      const v = document.getElementById('camVideo');
      const c = document.getElementById('camCanvas');
      const ctx = c.getContext('2d');
      c.width = 320; c.height = 320;
      let motionScore = 0, blinkScore = 0, faceScore = 0, lastFrame = null;

      for (const stage of stages) {
        document.getElementById('camInstr').textContent = stage.instr;
        document.getElementById('camState').textContent = stage.state;
        const start = Date.now();
        while (Date.now() - start < stage.ms) {
          await new Promise(r => setTimeout(r, 150));
          if (!v.videoWidth) continue;
          const sz = Math.min(v.videoWidth, v.videoHeight);
          ctx.drawImage(v, (v.videoWidth - sz) / 2, (v.videoHeight - sz) / 2, sz, sz, 0, 0, 320, 320);
          const id   = ctx.getImageData(60, 80, 200, 160);
          const data = id.data;
          let skinPx = 0;
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i+1], b = data[i+2];
            if (r > 95 && g > 40 && b > 20 && r > g && r > b && Math.abs(r - g) > 10) skinPx++;
          }
          const eye = ctx.getImageData(80, 100, 140, 30).data;
          let sumEye = 0;
          for (let i = 0; i < eye.length; i += 4) sumEye += (eye[i] + eye[i+1] + eye[i+2]) / 3;
          const eyeBright = sumEye / (eye.length / 4);
          const skinPct = skinPx / (data.length / 4);
          if (skinPct > 0.15) faceScore++;
          if (lastFrame) {
            let diff = 0;
            for (let i = 0; i < data.length; i += 16) diff += Math.abs(data[i] - lastFrame[i]);
            const avg = diff / (data.length / 16);
            if (stage.instr.includes('LEFT') || stage.instr.includes('RIGHT')) { if (avg > 8) motionScore++; }
            if (stage.instr.includes('Blink')) { if (eyeBright < 60 || avg > 6) blinkScore++; }
          }
          lastFrame = new Uint8ClampedArray(data);
        }
      }

      const sz = Math.min(v.videoWidth, v.videoHeight);
      c.width = 480; c.height = 480;
      ctx.drawImage(v, (v.videoWidth - sz) / 2, (v.videoHeight - sz) / 2, sz, sz, 0, 0, 480, 480);
      const dataUrl = c.toDataURL('image/jpeg', 0.85);
      const passed  = faceScore > 4 && motionScore > 2 && blinkScore > 1;

      document.getElementById('camState').innerHTML = passed
        ? `${I.check} Liveness passed`
        : `${I.cross} Liveness failed`;
      document.getElementById('camInstr').textContent = passed
        ? 'Real human confirmed'
        : 'Could not confirm · please try again';
      await new Promise(r => setTimeout(r, 800));

      if (passed) {
        const u = currentUser(); u.selfie = dataUrl; saveState();
        toast('Liveness passed · selfie saved');
        stopCam(); goBack();
      } else {
        btn.disabled = false;
        btn.textContent = 'Try Again';
        toast('Liveness failed. Make sure your face is well lit and follow the prompts.');
      }
    }
  };

  function compressImage(file, maxDim = 1200, q = 0.8) {
    return new Promise(res => {
      const r = new FileReader();
      r.onload = ev => {
        const img = new Image();
        img.onload = () => {
          let w = img.width, h = img.height;
          if (w > h && w > maxDim) { h = h * maxDim / w; w = maxDim; }
          else if (h > maxDim)     { w = w * maxDim / h; h = maxDim; }
          const c = document.createElement('canvas'); c.width = w; c.height = h;
          c.getContext('2d').drawImage(img, 0, 0, w, h);
          res(c.toDataURL('image/jpeg', q));
        };
        img.src = ev.target.result;
      };
      r.readAsDataURL(file);
    });
  }

})(window.H);
;/* === www/js/jobs.js === */
'use strict';
(function (H) {

  var JOB_CATS = ['Accounting & Finance','Sales & Marketing','IT & Technology','Construction',
    'Healthcare','Education','Hospitality','Administration','Engineering','Driving & Logistics',
    'Legal','Media & Communications','Agriculture','Security','Domestic & Cleaning'];

  var EXP_LEVELS = [['any','Any Experience'],['entry','Entry Level (0-2 yrs)'],['mid','Mid Level (3-5 yrs)'],['senior','Senior (5-10 yrs)'],['expert','Expert (10+ yrs)']];
  var AVAIL_OPTS  = [['immediately','Immediately'],['2weeks','Within 2 weeks'],['1month','Within 1 month'],['negotiable','Negotiable']];
  var EDU_LEVELS  = [['any','Any'],['none','No formal qualification'],['certificate','Certificate / Diploma'],['degree','Bachelor\'s Degree'],['postgrad','Postgraduate']];

  // ── HELPERS ───────────────────────────────────────────────
  function parseLine(lines, key) {
    var found = lines.find(function(ln){ return ln.startsWith(key + ':'); });
    return found ? found.slice(key.length + 1).trim() : '';
  }

  function getJobData(l) {
    if (l.jobData) return l.jobData;
    var lines = (l.desc || '').split('\n');
    return {
      company:  l.company || l.sellerName || parseLine(lines,'COMPANY') || '',
      jobType:  parseLine(lines,'JOB TYPE') || '',
      industry: parseLine(lines,'INDUSTRY') || '',
      salary:   parseLine(lines,'SALARY')   || '',
      deadline: parseLine(lines,'DEADLINE') || '',
      exp:      '',  benefits: '',  positions: '1',  eduReq: '',
      applyEmail: '', applyPhone: '', applyUrl: '', applyMethod: 'inapp',
      description:     _extractSection(l.desc, 'DESCRIPTION',     ['RESPONSIBILITIES','REQUIREMENTS','HOW TO APPLY']),
      responsibilities: _extractSection(l.desc,'RESPONSIBILITIES', ['REQUIREMENTS','HOW TO APPLY']),
      requirements:    _extractSection(l.desc, 'REQUIREMENTS',    ['HOW TO APPLY'])
    };
  }

  function _extractSection(desc, key, ends) {
    if (!desc) return '';
    var start = desc.indexOf('\n' + key + ':\n');
    if (start < 0) return '';
    start += key.length + 3;
    var end = desc.length;
    ends.forEach(function(e){ var i = desc.indexOf('\n' + e + ':'); if (i > start) end = Math.min(end, i); });
    return desc.slice(start, end).trim();
  }

  function jobCard(l) {
    var jd = getJobData(l);
    var deadline = jd.deadline ? ' · Deadline: ' + jd.deadline : '';
    var daysLeft = '';
    if (jd.deadline) {
      var d = new Date(jd.deadline); var now = new Date();
      var days = Math.ceil((d - now) / 86400000);
      if (days >= 0 && days <= 7) daysLeft = '<span style="background:#fee2e2;color:#dc2626;font-size:10px;font-weight:700;padding:2px 6px;border-radius:6px;margin-left:4px">' + (days === 0 ? 'Today!' : days + 'd left') + '</span>';
    }
    var apps = (H.state.applications || []).filter(function(a){ return a.jobId === l.id; }).length;
    return '<div onclick="H.openInner(\'JobDetail\',{id:\'' + l.id + '\'})" style="background:var(--card);border-radius:14px;padding:16px;margin-bottom:10px;border:1px solid var(--border);cursor:pointer;box-shadow:0 1px 4px rgba(0,0,0,.06)">'
      + '<div style="display:flex;align-items:flex-start;gap:12px">'
      + '<div style="width:44px;height:44px;border-radius:12px;background:#F5A62320;display:flex;align-items:center;justify-content:center;flex-shrink:0">'
      + '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#c07800" stroke-width="2"><rect x="2" y="7" width="20" height="13" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg></div>'
      + '<div style="flex:1;min-width:0">'
      + '<div style="display:flex;align-items:center;flex-wrap:wrap;gap:4px;margin-bottom:2px">'
      + '<div style="font-size:15px;font-weight:700;color:var(--text-primary)">' + H.escHtml(l.title) + '</div>' + daysLeft + '</div>'
      + '<div style="font-size:13px;color:var(--text-sub);margin-bottom:8px">' + H.escHtml(jd.company || l.sellerName || '') + (jd.industry ? ' · ' + H.escHtml(jd.industry) : '') + '</div>'
      + '<div style="display:flex;flex-wrap:wrap;gap:5px">'
      + (jd.jobType ? '<span style="background:#1A3A8F18;color:#1A3A8F;font-size:11px;font-weight:700;padding:3px 8px;border-radius:6px">' + H.escHtml(jd.jobType) + '</span>' : '')
      + (jd.salary  ? '<span style="background:#F5A62318;color:#c07800;font-size:11px;font-weight:700;padding:3px 8px;border-radius:6px">' + H.escHtml(jd.salary) + '</span>' : '')
      + '<span style="background:var(--bg);color:var(--text-sub);font-size:11px;font-weight:600;padding:3px 8px;border-radius:6px">' + H.escHtml(l.city || 'Zimbabwe') + '</span>'
      + (apps > 0 ? '<span style="color:var(--text-sub);font-size:11px;padding:3px 0">' + apps + ' applied</span>' : '')
      + '<span style="color:var(--text-sub);font-size:11px;padding:3px 0">' + H.timeAgo(l.createdAt) + '</span>'
      + '</div></div></div></div>';
  }

  // ── JOBS LANDING ──────────────────────────────────────────
  H.pages.Jobs = function () {
    var u    = H.currentUser();
    var jobs = (H.state.listings || []).filter(function(l){ return l.status === 'active' && l.cat === 'jobs'; });
    var myApps = u ? (H.state.applications || []).filter(function(a){ return a.applicantId === u.id; }) : [];
    var candidates = (H.state.users || []).filter(function(u){ return u.openToWork; });
    var recent = jobs.slice().sort(function(a,b){ return b.createdAt - a.createdAt; }).slice(0,5);
    var myJobs = u ? jobs.filter(function(l){ return l.sellerId === u.id; }) : [];

    return '<div class="page active">'
      + '<div class="det-topbar" style="background:#F5A623">'
      + '<button class="back" onclick="H.goBack()" style="color:#1A3A8F"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>'
      + '<div class="det-topbar-title" style="color:#1A3A8F">Jobs in Zimbabwe</div>'
      + '<button onclick="H.openInner(\'PostJob\')" style="background:#1A3A8F;border:none;color:#fff;font-size:12px;font-weight:700;cursor:pointer;padding:6px 12px;border-radius:8px">+ Post Job</button>'
      + '</div>'
      + '<div style="background:linear-gradient(135deg,#F5A623,#f07b00);padding:20px 16px 24px">'
      + '<div style="font-size:22px;font-weight:900;color:#1A3A8F;margin-bottom:4px">Find Your Dream Job</div>'
      + '<div style="font-size:13px;color:rgba(26,58,143,.75);margin-bottom:16px">' + jobs.length + ' opening' + (jobs.length !== 1 ? 's' : '') + ' across Zimbabwe</div>'
      + '<div style="background:rgba(255,255,255,.95);border-radius:14px;display:flex;align-items:center;padding:0 14px;gap:8px">'
      + '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#999" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
      + '<input placeholder="Search job title, company, skills…" autocomplete="off" oninput="H.openInner(\'FindJobs\',{q:this.value})" style="flex:1;border:none;outline:none;padding:14px 0;font-size:14px;background:transparent;color:#1A3A8F;font-family:Inter,sans-serif">'
      + '</div></div>'
      + '<div style="padding:16px 14px;display:grid;grid-template-columns:1fr 1fr;gap:10px">'
      + '<div onclick="H.openInner(\'FindJobs\')" style="background:#1A3A8F;border-radius:16px;padding:18px 14px;cursor:pointer;box-shadow:0 4px 16px rgba(26,58,143,.25)">'
      + '<div style="font-size:26px;margin-bottom:8px">💼</div>'
      + '<div style="font-size:15px;font-weight:800;color:#fff;margin-bottom:2px">Find Jobs</div>'
      + '<div style="font-size:11px;color:rgba(255,255,255,.7)">' + jobs.length + ' openings</div></div>'
      + '<div onclick="H.openInner(\'HireTalent\')" style="background:#fff;border-radius:16px;padding:18px 14px;cursor:pointer;box-shadow:0 4px 16px rgba(0,0,0,.08);border:2px solid #F5A623">'
      + '<div style="font-size:26px;margin-bottom:8px">🔍</div>'
      + '<div style="font-size:15px;font-weight:800;color:#1A3A8F;margin-bottom:2px">Hire Talent</div>'
      + '<div style="font-size:11px;color:var(--text-sub)">' + candidates.length + ' candidate' + (candidates.length !== 1 ? 's' : '') + '</div></div>'
      + (u ? '<div onclick="H.openInner(\'AppliedJobs\')" style="background:var(--card);border-radius:16px;padding:18px 14px;cursor:pointer;border:1.5px solid var(--border)">'
        + '<div style="font-size:26px;margin-bottom:8px">📋</div>'
        + '<div style="font-size:15px;font-weight:800;color:var(--text-primary);margin-bottom:2px">My Applications</div>'
        + '<div style="font-size:11px;color:var(--text-sub)">' + myApps.length + ' submitted</div></div>' : '')
      + (u ? '<div onclick="H._toggleOpenToWork()" style="background:var(--card);border-radius:16px;padding:18px 14px;cursor:pointer;border:1.5px solid ' + (u.openToWork ? '#22c55e' : 'var(--border)') + '">'
        + '<div style="font-size:26px;margin-bottom:8px">' + (u.openToWork ? '🟢' : '⚪') + '</div>'
        + '<div style="font-size:15px;font-weight:800;color:var(--text-primary);margin-bottom:2px">Open to Work</div>'
        + '<div style="font-size:11px;color:' + (u.openToWork ? '#22c55e' : 'var(--text-sub)') + '">' + (u.openToWork ? 'Profile visible' : 'Tap to enable') + '</div></div>' : '')
      + '</div>'
      + (myJobs.length ? '<div style="padding:0 14px 12px"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px"><div style="font-size:15px;font-weight:800;color:var(--text-primary)">My Job Postings</div></div>'
        + myJobs.slice(0,3).map(function(l){
          var apps = (H.state.applications || []).filter(function(a){ return a.jobId === l.id; }).length;
          return '<div style="background:var(--card);border-radius:12px;padding:14px;margin-bottom:8px;border:1px solid var(--border);display:flex;align-items:center;gap:12px;cursor:pointer" onclick="H.openInner(\'JobApplications\',{jobId:\'' + l.id + '\'})">'
            + '<div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:700;color:var(--text-primary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + H.escHtml(l.title) + '</div>'
            + '<div style="font-size:12px;color:var(--text-sub);margin-top:2px">' + H.timeAgo(l.createdAt) + '</div></div>'
            + '<div style="text-align:center;flex-shrink:0"><div style="font-size:20px;font-weight:900;color:#1A3A8F">' + apps + '</div><div style="font-size:10px;color:var(--text-sub);font-weight:600">App' + (apps!==1?'s':'') + '</div></div></div>';
        }).join('') + '</div>' : '')
      + '<div style="padding:0 14px 12px">'
      + '<div style="font-size:15px;font-weight:800;color:var(--text-primary);margin-bottom:10px">Browse by Category</div>'
      + '<div style="display:flex;flex-wrap:wrap;gap:8px">'
      + JOB_CATS.map(function(cat){
        var cnt = jobs.filter(function(j){ return (j.title + ' ' + (j.desc || '') + ' ' + (j.jobData ? JSON.stringify(j.jobData) : '')).toLowerCase().includes(cat.split(' ')[0].toLowerCase()); }).length;
        return '<div onclick="H.openInner(\'FindJobs\',{cat:\'' + H.escHtml(cat) + '\'})" style="background:var(--card);border:1px solid var(--border);border-radius:20px;padding:7px 13px;cursor:pointer;font-size:12px;font-weight:600;color:var(--text-mid)">' + H.escHtml(cat) + '<span style="color:var(--text-sub);margin-left:4px">(' + cnt + ')</span></div>';
      }).join('') + '</div></div>'
      + (recent.length ? '<div style="padding:0 14px 16px"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px"><div style="font-size:15px;font-weight:800;color:var(--text-primary)">Recent Openings</div><button onclick="H.openInner(\'FindJobs\')" style="background:none;border:none;color:#1A3A8F;font-size:12px;font-weight:700;cursor:pointer;padding:0">View All →</button></div>' + recent.map(jobCard).join('') + '</div>' : '')
      + '<div style="margin:0 14px 88px;background:linear-gradient(135deg,#1A3A8F,#0f2460);border-radius:16px;padding:20px">'
      + '<div style="font-size:16px;font-weight:800;color:#fff;margin-bottom:6px">Hiring? Post a Job Free</div>'
      + '<div style="font-size:13px;color:rgba(255,255,255,.7);margin-bottom:14px">Reach thousands of qualified candidates across Zimbabwe</div>'
      + '<button onclick="H.openInner(\'PostJob\')" style="background:#F5A623;border:none;color:#1A3A8F;font-size:14px;font-weight:800;padding:12px 24px;border-radius:10px;cursor:pointer">Post a Job →</button>'
      + '</div></div>';
  };

  H._toggleOpenToWork = function() {
    var u = H.currentUser(); if (!u) { H.requireAuth('Sign in to set your availability'); return; }
    u.openToWork = !u.openToWork;
    H.saveState();
    H.toast(u.openToWork ? '🟢 You are now visible to employers' : 'Open to Work disabled');
    H.renderPage('Jobs');
  };

  // ── FIND JOBS ─────────────────────────────────────────────
  H.pages.FindJobs = function(params) {
    params = params || {};
    var jobs = (H.state.listings || []).filter(function(l){ return l.status === 'active' && l.cat === 'jobs'; })
      .sort(function(a,b){ return b.createdAt - a.createdAt; });

    var filterHtml = H._sel('findjobs','subcat','Category',[['all','All Categories']].concat(JOB_CATS.map(function(c){return [c,c];})))
      + H._sel('findjobs','fuelType','Job Type',[['all','All'],['full-time','Full-time'],['part-time','Part-time'],['contract','Contract'],['freelance','Freelance'],['internship','Internship']])
      + H._sel('findjobs','propType','Experience',EXP_LEVELS)
      + H._sel('findjobs','edu','Education',EDU_LEVELS)
      + H._citysel('findjobs') + H._priceRange('findjobs') + H._sortsel('findjobs');

    return '<div class="page active">'
      + '<div class="det-topbar" style="background:#F5A623">'
      + '<button class="back" onclick="H.goBack()" style="color:#1A3A8F"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>'
      + '<div class="det-topbar-title" style="color:#1A3A8F">Find Jobs</div>'
      + '<button onclick="H.openInner(\'PostJob\')" style="background:#1A3A8F;border:none;color:#fff;font-size:12px;font-weight:700;cursor:pointer;padding:6px 12px;border-radius:8px">+ Post</button>'
      + '</div>'
      + '<div style="background:#F5A623;padding:0 12px 12px">'
      + '<div style="display:flex;gap:8px;align-items:center">'
      + '<div style="background:rgba(255,255,255,.9);border-radius:12px;display:flex;align-items:center;padding:0 12px;gap:8px;flex:1">'
      + '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#999" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
      + '<input id="cs_findjobs" placeholder="Search jobs…" autocomplete="off" value="' + H.escHtml(params.q || '') + '" oninput="H._applyJobFilters()" style="flex:1;border:none;outline:none;padding:12px 0;font-size:14px;background:transparent;color:#1A3A8F;font-family:Inter,sans-serif"></div>'
      + '<button onclick="H._toggleFilters(\'findjobs\')" style="background:rgba(255,255,255,.25);border:none;color:#1A3A8F;padding:10px 12px;border-radius:12px;cursor:pointer;display:flex;align-items:center;gap:5px;font-size:13px;font-weight:700">'
      + '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="4" y1="6" x2="20" y2="6"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="8" y1="18" x2="16" y2="18"/></svg>Filter'
      + '<span id="fb_findjobs" style="display:none;background:#1A3A8F;color:#fff;font-size:10px;font-weight:800;min-width:16px;height:16px;border-radius:8px;align-items:center;justify-content:center;padding:0 4px"></span></button>'
      + '</div>'
      + '<div style="color:rgba(26,58,143,.75);font-size:12px;font-weight:600;margin-top:8px"><span id="cc_findjobs">' + jobs.length + ' jobs</span></div>'
      + '</div>'
      + '<div id="fp_findjobs" style="display:none;background:var(--card);border-bottom:2px solid #F5A623;padding:16px 14px">'
      + filterHtml
      + '<div style="display:flex;gap:8px;margin-top:4px"><button onclick="H._clearFilters(\'findjobs\')" style="flex:1;padding:10px;background:var(--bg);border:1px solid var(--border);border-radius:10px;font-size:13px;font-weight:600;color:var(--text-sub);cursor:pointer">Clear</button>'
      + '<button onclick="H._toggleFilters(\'findjobs\')" style="flex:2;padding:10px;background:#F5A623;border:none;border-radius:10px;font-size:13px;font-weight:700;color:#1A3A8F;cursor:pointer">Apply Filters</button>'
      + '</div></div>'
      + '<div id="cl_findjobs" style="padding:12px 12px 88px">'
      + (jobs.length ? jobs.map(jobCard).join('') : H.emptyState('No jobs yet','Check back soon!','Post a Job',"H.openInner('PostJob')"))
      + '</div></div>';
  };

  H.pages.FindJobs_after = function(params) {
    params = params || {};
    H._filters['findjobs'] = {};
    if (params.cat) H._filters['findjobs'].subcat = params.cat;
    H._applyJobFilters();
  };

  H._applyJobFilters = function() {
    var el = document.getElementById('cl_findjobs'); if (!el) return;
    var f = H._filters['findjobs'] || {};
    var jobs = (H.state.listings || []).filter(function(l){ return l.status === 'active' && l.cat === 'jobs'; });
    var q = ((document.getElementById('cs_findjobs') || {}).value || '').toLowerCase().trim();
    if (q) jobs = jobs.filter(function(l){
      var jd = l.jobData || {};
      return (l.title + ' ' + (l.desc||'') + ' ' + (l.city||'') + ' ' + (jd.company||l.sellerName||'') + ' ' + (jd.industry||'')).toLowerCase().includes(q);
    });
    if (f.city && f.city !== 'all') jobs = jobs.filter(function(l){ return (l.city+' '+(l.prov||'')).toLowerCase().includes(f.city.toLowerCase()); });
    if (f.subcat && f.subcat !== 'all') jobs = jobs.filter(function(l){ return (l.title+' '+(l.desc||'')+' '+JSON.stringify(l.jobData||{})).toLowerCase().includes(f.subcat.split(' ')[0].toLowerCase()); });
    if (f.fuelType && f.fuelType !== 'all') jobs = jobs.filter(function(l){ var jd=l.jobData||{}; return (jd.jobType||'').toLowerCase().includes(f.fuelType.replace('-',' '))||(l.desc||'').toLowerCase().includes(f.fuelType.replace('-',' ')); });
    if (f.priceMin) jobs = jobs.filter(function(l){ return (l.price||0) >= +f.priceMin; });
    if (f.priceMax) jobs = jobs.filter(function(l){ return (l.price||0) <= +f.priceMax; });
    jobs.sort(function(a,b){ return b.createdAt - a.createdAt; });
    el.innerHTML = jobs.length ? jobs.map(jobCard).join('') : H.emptyState('No jobs match','Try adjusting your filters',null,null);
    var cnt = document.getElementById('cc_findjobs');
    if (cnt) cnt.textContent = jobs.length + ' job' + (jobs.length!==1?'s':'');
    var n = Object.keys(f).filter(function(k){ return f[k] && f[k]!=='all' && f[k]!=='' && f[k]!=='newest'; }).length;
    var badge = document.getElementById('fb_findjobs');
    if (badge){ badge.textContent = n||''; badge.style.display = n?'flex':'none'; }
  };

  // ── POST JOB (ENHANCED) ───────────────────────────────────
  H.pages.PostJob = function() {
    var u = H.currentUser();
    if (!u) return '<div class="page active">' + H.innerTopbar('Post a Job') + H.emptyState('Sign in required','You must sign in to post a job','Sign In',"H.requireAuth('Post a job')") + '</div>';
    var ZW = H._ZW_CITIES || [];
    return '<div class="page active">'
      + '<div class="det-topbar"><button class="back" onclick="H.goBack()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button><div class="det-topbar-title">Post a Job</div></div>'
      + '<div style="margin:12px 14px;background:#1A3A8F18;border-radius:12px;padding:12px 14px;display:flex;gap:10px">'
      + '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1A3A8F" stroke-width="2" style="flex-shrink:0;margin-top:1px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
      + '<div style="font-size:12px;color:#1A3A8F;font-weight:600;line-height:1.6">Jobs are reviewed before going live. Posting is free. Complete all required fields for faster approval.</div>'
      + '</div>'
      + '<div style="padding:0 14px 110px">'

      // Company info
      + _sec('Company Information')
      + _field('jCompany','Company Name *','text','Your company or organisation name',H.escHtml(u.company||u.name||''))
      + '<div style="margin-bottom:14px;background:var(--card);border-radius:12px;padding:14px;border:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">'
      + '<div><div style="font-size:14px;font-weight:600;color:var(--text-primary)">Post Anonymously</div><div style="font-size:12px;color:var(--text-sub);margin-top:2px">Company name visible. Your personal identity hidden.</div></div>'
      + '<div id="anonTog" onclick="this.dataset.on=this.dataset.on===\'1\'?\'0\':\'1\';this.style.background=this.dataset.on===\'1\'?\'#1A3A8F\':\'var(--border)\';this.querySelector(\'div\').style.left=this.dataset.on===\'1\'?\'23px\':\'3px\';document.getElementById(\'jAnon\').value=this.dataset.on" data-on="0" style="width:46px;height:26px;border-radius:13px;background:var(--border);position:relative;cursor:pointer;transition:background .2s;flex-shrink:0"><div style="position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;transition:left .2s;box-shadow:0 1px 4px rgba(0,0,0,.2)"></div></div>'
      + '<input type="hidden" id="jAnon" value="0">'
      + '</div>'

      // Job details
      + _sec('Job Details')
      + _field('jTitle','Job Title *','text','e.g. Accountant, Driver, Sales Representative','')
      + _select('jCat','Job Category *',[['','Select category…']].concat(JOB_CATS.map(function(c){return [c,c];})))
      + _select('jLocation','Location *',[['','Select city…']].concat(ZW.map(function(c){return [c,c];})).concat([['Remote','Remote'],['Multiple Locations','Multiple Locations']]))
      + '<div style="margin-bottom:14px"><label style="font-size:12px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Job Type</label>'
      + '<div style="display:flex;flex-wrap:wrap;gap:10px">' + ['Full-time','Part-time','Contract','Freelance','Internship'].map(function(t,i){
        return '<label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="radio" name="jType" value="' + t + '"' + (i===0?' checked':'') + ' style="accent-color:#1A3A8F"><span style="font-size:13px;font-weight:600;color:var(--text-primary)">' + t + '</span></label>';
      }).join('') + '</div></div>'
      + '<div style="margin-bottom:14px;display:grid;grid-template-columns:1fr 1fr;gap:8px">'
      + '<div><label style="font-size:12px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Min Salary (USD)</label><input id="jSalMin" type="number" placeholder="e.g. 500" style="width:100%;padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text-primary);outline:none;box-sizing:border-box"></div>'
      + '<div><label style="font-size:12px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Max Salary (USD)</label><input id="jSalMax" type="number" placeholder="e.g. 1500" style="width:100%;padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text-primary);outline:none;box-sizing:border-box"></div>'
      + '</div>'
      + _select('jExpReq','Experience Required',EXP_LEVELS)
      + _select('jEdu','Minimum Education',EDU_LEVELS)
      + _field('jPositions','Number of Openings','number','1','1')
      + _field('jDeadline','Application Deadline','date','','')

      // Description
      + _sec('Job Description')
      + _textarea('jDesc','Job Description *','Describe the role, the company culture, what a typical day looks like…',6)
      + _textarea('jResp','Key Responsibilities','List the main duties and responsibilities…',4)
      + _textarea('jReqs','Requirements & Qualifications','Experience, education, skills, certifications required…',4)
      + _textarea('jBenefits','Benefits & Perks','Medical aid, leave days, transport, bonus, training…',3)

      // How to Apply
      + _sec('How to Apply')
      + '<div style="margin-bottom:14px"><label style="font-size:12px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:8px">Application Method</label>'
      + '<div style="display:flex;flex-direction:column;gap:8px">'
      + ['In-App (recommended)','Email','WhatsApp','External URL'].map(function(m,i){
        return '<label style="display:flex;align-items:center;gap:10px;background:var(--card);border-radius:10px;padding:12px 14px;border:1.5px solid var(--border);cursor:pointer">'
          + '<input type="radio" name="jApplyMethod" value="' + ['inapp','email','whatsapp','url'][i] + '"' + (i===0?' checked':'') + ' onclick="H._toggleApplyMethod(this.value)" style="accent-color:#1A3A8F">'
          + '<span style="font-size:13px;font-weight:600;color:var(--text-primary)">' + m + '</span></label>';
      }).join('') + '</div></div>'
      + '<div id="jApplyEmailWrap" style="display:none">' + _field('jEmail','Email to Receive Applications','email','e.g. hr@company.co.zw',H.escHtml(u.email||'')) + '</div>'
      + '<div id="jApplyPhoneWrap" style="display:none">' + _field('jPhone','WhatsApp Number','tel','e.g. +263771234567',H.escHtml(u.phone||'')) + '</div>'
      + '<div id="jApplyUrlWrap" style="display:none">' + _field('jApplyUrl','Application URL','url','https://company.com/apply','') + '</div>'
      + '</div>'

      + '<div style="position:fixed;bottom:0;left:0;right:0;background:var(--card);padding:12px 16px;padding-bottom:calc(12px + env(safe-area-inset-bottom));border-top:1px solid var(--border);z-index:200">'
      + '<button onclick="H._submitJob()" style="width:100%;padding:15px;background:linear-gradient(135deg,#1A3A8F,#0f2460);color:#fff;border:none;border-radius:14px;font-size:15px;font-weight:800;cursor:pointer">Submit Job for Review →</button>'
      + '</div></div>';
  };

  H._toggleApplyMethod = function(method) {
    ['Email','Phone','Url'].forEach(function(m){ var el = document.getElementById('jApply' + m + 'Wrap'); if (el) el.style.display = 'none'; });
    if (method === 'email')    { var e = document.getElementById('jApplyEmailWrap'); if (e) e.style.display = 'block'; }
    if (method === 'whatsapp') { var e = document.getElementById('jApplyPhoneWrap'); if (e) e.style.display = 'block'; }
    if (method === 'url')      { var e = document.getElementById('jApplyUrlWrap'); if (e) e.style.display = 'block'; }
  };

  function _sec(title) {
    return '<div style="font-size:11px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.6px;margin:18px 0 10px;padding-top:6px;border-top:1px solid var(--border)">' + title + '</div>';
  }

  function _field(id, label, type, placeholder, value) {
    return '<div style="margin-bottom:14px"><label style="font-size:12px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">' + label + '</label>'
      + '<input id="' + id + '" type="' + type + '" placeholder="' + H.escHtml(placeholder) + '" value="' + (value||'') + '" style="width:100%;padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text-primary);outline:none;box-sizing:border-box"></div>';
  }

  function _select(id, label, opts) {
    return '<div style="margin-bottom:14px"><label style="font-size:12px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">' + label + '</label>'
      + '<select id="' + id + '" style="width:100%;padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text-primary);outline:none">'
      + opts.map(function(o){ return '<option value="' + H.escHtml(o[0]) + '">' + H.escHtml(o[1]) + '</option>'; }).join('') + '</select></div>';
  }

  function _textarea(id, label, placeholder, rows) {
    return '<div style="margin-bottom:14px"><label style="font-size:12px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">' + label + '</label>'
      + '<textarea id="' + id + '" placeholder="' + H.escHtml(placeholder) + '" rows="' + rows + '" style="width:100%;padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text-primary);outline:none;box-sizing:border-box;resize:vertical;font-family:Inter,sans-serif"></textarea></div>';
  }

  function _val(id){ return ((document.getElementById(id)||{}).value||'').trim(); }

  H._submitJob = function() {
    var company  = _val('jCompany');
    var title    = _val('jTitle');
    var cat      = _val('jCat');
    var location = _val('jLocation');
    var desc     = _val('jDesc');
    if (!company)            { H.toast('Company name is required'); return; }
    if (!title)              { H.toast('Job title is required'); return; }
    if (!cat)                { H.toast('Please select a job category'); return; }
    if (!location)           { H.toast('Please select a location'); return; }
    if (desc.length < 30)    { H.toast('Job description must be at least 30 characters'); return; }
    var u = H.currentUser(); if (!u) { H.toast('Please sign in first'); return; }
    var jobType = 'Full-time';
    document.querySelectorAll('input[name="jType"]').forEach(function(r){ if (r.checked) jobType = r.value; });
    var applyMethod = 'inapp';
    document.querySelectorAll('input[name="jApplyMethod"]').forEach(function(r){ if (r.checked) applyMethod = r.value; });
    var salMin  = _val('jSalMin');
    var salMax  = _val('jSalMax');
    var salary  = salMin && salMax ? '$' + salMin + ' – $' + salMax + '/mo' : salMin ? 'From $' + salMin + '/mo' : 'Negotiable';
    var anon    = (document.getElementById('jAnon')||{}).value === '1';
    var jobData = {
      company:   company,
      jobType:   jobType,
      industry:  cat,
      salary:    salary,
      exp:       _val('jExpReq'),
      eduReq:    _val('jEdu'),
      positions: _val('jPositions') || '1',
      deadline:  _val('jDeadline'),
      benefits:  _val('jBenefits'),
      description:      _val('jDesc'),
      responsibilities: _val('jResp'),
      requirements:     _val('jReqs'),
      applyMethod: applyMethod,
      applyEmail:  applyMethod === 'email'    ? _val('jEmail')    : '',
      applyPhone:  applyMethod === 'whatsapp' ? _val('jPhone')    : '',
      applyUrl:    applyMethod === 'url'      ? _val('jApplyUrl') : ''
    };
    // Keep desc as legacy plain text too for search compatibility
    var fullDesc = 'COMPANY: ' + company + '\nJOB TYPE: ' + jobType + '\nINDUSTRY: ' + cat + '\nSALARY: ' + salary
      + (jobData.deadline ? '\nDEADLINE: ' + jobData.deadline : '')
      + '\n\nDESCRIPTION:\n' + desc
      + (jobData.responsibilities ? '\n\nRESPONSIBILITIES:\n' + jobData.responsibilities : '')
      + (jobData.requirements     ? '\n\nREQUIREMENTS:\n' + jobData.requirements : '')
      + (jobData.benefits         ? '\n\nBENEFITS:\n' + jobData.benefits : '')
      + (jobData.applyEmail || jobData.applyPhone || jobData.applyUrl ? '\n\nHOW TO APPLY:\n'
          + (jobData.applyEmail ? 'Email: ' + jobData.applyEmail + '\n' : '')
          + (jobData.applyPhone ? 'WhatsApp: ' + jobData.applyPhone + '\n' : '')
          + (jobData.applyUrl   ? 'URL: ' + jobData.applyUrl : '') : '');
    var listing = {
      id: H.uid(), cat: 'jobs', title: title, desc: fullDesc, jobData: jobData,
      price: salMin ? +salMin : 0, currency: 'USD', city: location, prov: location,
      sellerId: u.id, sellerName: anon ? company : (u.name||company),
      company: company, createdAt: Date.now(), expiresAt: Date.now() + 60*24*60*60*1000,
      status: 'pending', photos: []
    };
    H.state.listings = H.state.listings || [];
    H.state.listings.push(listing);
    H.saveState();
    if (typeof H.saveListingToCloud === 'function') H.saveListingToCloud(listing);
    H.toast('Job submitted for review! It will go live once approved.');
    H.goBack();
  };

  // ── JOB DETAIL ────────────────────────────────────────────
  H.pages.JobDetail = function(params) {
    var id = params && params.id;
    var l  = (H.state.listings||[]).find(function(x){ return x.id === id; });
    if (!l) return '<div class="page active">' + H.innerTopbar('Job') + H.emptyState('Job not found','This posting may have been removed.','Browse Jobs',"H.filterByCat('jobs')") + '</div>';
    var jd = getJobData(l);
    var u       = H.currentUser();
    var isMine  = u && l.sellerId === u.id;
    var apps    = (H.state.applications||[]);
    var myApp   = u ? apps.find(function(a){ return a.jobId===id && a.applicantId===u.id; }) : null;
    var appCount = apps.filter(function(a){ return a.jobId===id; }).length;
    var newApps  = apps.filter(function(a){ return a.jobId===id && a.status==='pending'; }).length;
    var ci = (jd.company||l.sellerName||'C').split(' ').slice(0,2).map(function(w){return w[0]||'';}).join('').toUpperCase();
    var chip = 'display:inline-flex;align-items:center;gap:4px;padding:5px 10px;border-radius:20px;font-size:12px;font-weight:700;margin-right:6px;margin-bottom:6px';

    // Deadline countdown
    var deadlineHtml = '';
    if (jd.deadline) {
      var dDate = new Date(jd.deadline); var now = new Date();
      var dDays = Math.ceil((dDate - now) / 86400000);
      var dColor = dDays <= 3 ? '#dc2626' : dDays <= 7 ? '#f59e0b' : '#22c55e';
      deadlineHtml = '<div style="background:' + dColor + '15;border:1px solid ' + dColor + '40;border-radius:10px;padding:10px 14px;margin-bottom:12px;display:flex;align-items:center;gap:8px">'
        + '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="' + dColor + '" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
        + '<span style="font-size:13px;font-weight:700;color:' + dColor + '">'
        + (dDays < 0 ? 'Applications closed' : dDays === 0 ? 'Deadline: Today!' : 'Deadline: ' + dDays + ' day' + (dDays!==1?'s':'') + ' left (' + jd.deadline + ')')
        + '</span></div>';
    }

    var similar = (H.state.listings||[]).filter(function(x){ return x.id!==id && x.cat==='jobs' && x.status==='active'; }).slice(0,3);

    return '<div class="page active">'
      + '<div class="det-topbar" style="background:#0a2558"><button class="back" onclick="H.goBack()" style="color:#fff"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>'
      + '<div class="det-topbar-title" style="color:#fff;font-size:14px">' + H.escHtml(l.title) + '</div>'
      + (isMine
        ? '<button onclick="H.openInner(\'JobApplications\',{jobId:\'' + id + '\'})" style="background:' + (newApps?'#F5A623':'rgba(255,255,255,.18)') + ';border:none;color:' + (newApps?'#1A3A8F':'#fff') + ';font-size:11px;font-weight:800;cursor:pointer;padding:5px 10px;border-radius:8px">' + appCount + ' App' + (appCount===1?'':'s') + (newApps?' ('+newApps+' new)':'') + '</button>'
        : '<button onclick="H._saveJob(\'' + id + '\')" style="background:rgba(255,255,255,.18);border:none;color:#fff;padding:6px;border-radius:8px;display:flex;align-items:center;cursor:pointer"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg></button>')
      + '</div>'

      + '<div style="background:linear-gradient(160deg,#0a2558 0%,#1A3A8F 60%,#2952cc 100%);padding:20px 16px 24px">'
      + '<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">'
      + '<div style="width:56px;height:56px;border-radius:14px;background:rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#fff;flex-shrink:0;border:2px solid rgba(255,255,255,.2)">' + ci + '</div>'
      + '<div style="flex:1;min-width:0">'
      + '<div style="font-size:19px;font-weight:800;color:#fff;line-height:1.2;margin-bottom:4px">' + H.escHtml(l.title) + '</div>'
      + '<div style="font-size:14px;color:rgba(255,255,255,.8);font-weight:600">' + H.escHtml(jd.company||l.sellerName||'') + '</div>'
      + '</div></div>'
      + '<div style="display:flex;flex-wrap:wrap;margin-bottom:4px">'
      + (jd.jobType  ? '<span style="' + chip + ';background:rgba(255,255,255,.18);color:#fff">'    + H.escHtml(jd.jobType)  + '</span>' : '')
      + (jd.industry ? '<span style="' + chip + ';background:#F5A62330;color:#F5A623">'             + H.escHtml(jd.industry) + '</span>' : '')
      + '<span style="' + chip + ';background:rgba(255,255,255,.12);color:rgba(255,255,255,.8)"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' + H.escHtml(l.city||'Zimbabwe') + '</span>'
      + '</div></div>'

      + '<div style="padding:0 12px">'
      + deadlineHtml

      + '<div style="background:var(--card);border-radius:16px;margin-top:-14px;padding:16px;border:1px solid var(--border);display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:12px">'
      + _ji('Salary',    jd.salary || 'Negotiable')
      + _ji('Location',  l.city || 'Zimbabwe')
      + _ji('Experience',jd.exp ? (EXP_LEVELS.find(function(e){return e[0]===jd.exp;})||[,''])[1] : 'Not specified')
      + _ji('Positions', (jd.positions || '1') + ' opening' + ((jd.positions||'1')!=='1'?'s':''))
      + _ji('Posted',    H.timeAgo(l.createdAt))
      + _ji('Applicants',appCount + ' so far')
      + '</div>'

      + (jd.description     ? _jb('About the Role',        jd.description)      : '')
      + (jd.responsibilities ? _jb('Key Responsibilities',  jd.responsibilities) : '')
      + (jd.requirements     ? _jb('Requirements',          jd.requirements)     : '')
      + (jd.benefits         ? _jb('Benefits & Perks',      jd.benefits)         : '')

      // How to Apply (external methods)
      + (jd.applyEmail||jd.applyPhone||jd.applyUrl ? '<div style="background:var(--card);border-radius:14px;padding:16px;margin-bottom:12px;border:1px solid var(--border)">'
        + '<div style="font-size:14px;font-weight:800;color:var(--text-primary);margin-bottom:12px;display:flex;align-items:center;gap:8px"><div style="width:3px;height:16px;background:#1A3A8F;border-radius:2px"></div>Also Apply Via</div>'
        + (jd.applyEmail ? '<a href="mailto:' + H.escHtml(jd.applyEmail) + '?subject=' + encodeURIComponent('Application: ' + l.title) + '" style="display:flex;align-items:center;gap:10px;padding:11px 14px;background:#1A3A8F15;border-radius:10px;margin-bottom:8px;text-decoration:none"><span style="font-size:16px">📧</span><span style="font-size:13px;font-weight:600;color:#1A3A8F">' + H.escHtml(jd.applyEmail) + '</span></a>' : '')
        + (jd.applyPhone ? '<button onclick="window.open(\'https://wa.me/' + jd.applyPhone.replace(/[^\d+]/g,'') + '?text=' + encodeURIComponent('Hi, I am applying for the ' + l.title + ' position at ' + (jd.company||'')) + '\',\'_blank\')" style="display:flex;align-items:center;gap:10px;padding:11px 14px;background:#25D36615;border-radius:10px;width:100%;border:none;cursor:pointer;margin-bottom:8px"><span style="font-size:16px">💬</span><span style="font-size:13px;font-weight:600;color:#25D366">' + H.escHtml(jd.applyPhone) + '</span></button>' : '')
        + (jd.applyUrl   ? '<button onclick="window.open(\'' + H.escHtml(jd.applyUrl) + '\',\'_system\')" style="display:flex;align-items:center;gap:10px;padding:11px 14px;background:#1A3A8F10;border-radius:10px;width:100%;border:none;cursor:pointer"><span style="font-size:16px">🔗</span><span style="font-size:13px;font-weight:600;color:#1A3A8F">Apply on Website</span></button>' : '')
        + '</div>' : '')

      + (similar.length ? '<div style="margin-bottom:12px"><div style="font-size:14px;font-weight:800;color:var(--text-primary);margin-bottom:10px;display:flex;align-items:center;gap:8px"><div style="width:3px;height:16px;background:#F5A623;border-radius:2px"></div>Similar Jobs</div>' + similar.map(jobCard).join('') + '</div>' : '')
      + '<div style="height:90px"></div></div>'

      // Fixed apply bar
      + '<div style="position:fixed;bottom:0;left:0;right:0;background:var(--card);padding:12px 16px;padding-bottom:calc(12px + env(safe-area-inset-bottom));border-top:1px solid var(--border);z-index:200">'
      + (isMine
        ? '<button onclick="H.openInner(\'JobApplications\',{jobId:\'' + id + '\'})" style="width:100%;padding:14px;background:#1A3A8F;color:#fff;border:none;border-radius:13px;font-size:15px;font-weight:800;cursor:pointer">View Applications (' + appCount + ')' + (newApps?' · ' + newApps + ' NEW':'') + '</button>'
        : l.status !== 'active'
          ? '<div style="padding:14px;background:var(--bg);border-radius:13px;text-align:center;font-size:14px;font-weight:700;color:var(--text-sub)">This position is no longer accepting applications</div>'
          : myApp
            ? '<div style="display:flex;gap:8px"><div style="flex:1;padding:14px;background:#dcfce7;border-radius:13px;text-align:center;font-size:13px;font-weight:700;color:#15803d">✓ Applied ' + H.timeAgo(myApp.appliedAt) + '</div>'
              + '<button onclick="H._withdrawApplication(\'' + myApp.id + '\',\'' + id + '\')" style="padding:14px;background:#fee2e2;color:#dc2626;border:none;border-radius:13px;font-size:13px;font-weight:700;cursor:pointer">Withdraw</button></div>'
            : '<button onclick="H._applyToJob(\'' + id + '\')" style="width:100%;padding:14px;background:linear-gradient(135deg,#1A3A8F,#2952cc);color:#fff;border:none;border-radius:13px;font-size:15px;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 2 15 22 11 13 2 9 22 2"/></svg>Apply Now — It\'s Free</button>'
      )
      + '</div></div>';
  };

  H._saveJob = function(id) {
    var u = H.currentUser(); if (!u) { H.requireAuth('Sign in to save jobs'); return; }
    H.state.saves = H.state.saves || {};
    H.state.saves[u.id] = H.state.saves[u.id] || [];
    var i = H.state.saves[u.id].indexOf(id);
    if (i >= 0) { H.state.saves[u.id].splice(i,1); H.toast('Job removed from saved'); }
    else        { H.state.saves[u.id].push(id);    H.toast('Job saved'); }
    H.saveState();
  };

  // ── APPLY TO JOB (ENHANCED) ───────────────────────────────
  H._applyToJob = function(jobId) {
    if (!H.currentUser()) { H.requireAuth('Sign in to apply for jobs'); return; }
    var l = (H.state.listings||[]).find(function(x){ return x.id === jobId; });
    if (!l) { H.toast('Job not found'); return; }
    var u       = H.currentUser();
    var jd      = getJobData(l);
    var company = jd.company || l.sellerName || 'Company';
    var existing = (H.state.applications||[]).find(function(a){ return a.jobId===jobId && a.applicantId===u.id; });
    if (existing) { H.toast('You have already applied for this position'); return; }

    H.modal({
      title: 'Apply: ' + H.escHtml(l.title),
      body:
        '<div style="background:#1A3A8F08;border-radius:10px;padding:10px 12px;margin-bottom:14px;font-size:13px;color:var(--text-sub)">'
        + '📌 <strong>' + H.escHtml(company) + '</strong> · ' + H.escHtml(l.city||'Zimbabwe') + '</div>'

        + '<div style="margin-bottom:6px"><label style="font-size:11px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.5px">Cover Letter <span style="color:#dc2626">*</span></label></div>'
        + '<textarea id="applyMsg" rows="6" placeholder="Tell the employer about yourself — your relevant experience, why you\'re the right fit, and what you bring to the role. Be specific and professional." style="width:100%;padding:12px;border:1.5px solid var(--border);border-radius:12px;font-size:13px;background:var(--card);color:var(--text-primary);outline:none;box-sizing:border-box;resize:vertical;font-family:Inter,sans-serif" oninput="var n=this.value.length;var c=document.getElementById(\'applyCharCnt\');if(c){c.textContent=n+\'/50 min\';c.style.color=n>=50?\'#22c55e\':\'#dc2626\';}"></textarea>'
        + '<div id="applyCharCnt" style="font-size:11px;color:#dc2626;text-align:right;margin-bottom:12px;margin-top:3px">0/50 min</div>'

        + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">'
        + '<div><label style="font-size:11px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:4px">Expected Salary (USD/mo)</label>'
        + '<input id="applySalary" type="number" placeholder="e.g. 700" style="width:100%;padding:10px;border:1.5px solid var(--border);border-radius:10px;font-size:13px;background:var(--card);color:var(--text-primary);outline:none;box-sizing:border-box"></div>'
        + '<div><label style="font-size:11px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:4px">Availability</label>'
        + '<select id="applyAvail" style="width:100%;padding:10px;border:1.5px solid var(--border);border-radius:10px;font-size:13px;background:var(--card);color:var(--text-primary);outline:none">'
        + AVAIL_OPTS.map(function(o){ return '<option value="' + o[0] + '">' + o[1] + '</option>'; }).join('') + '</select></div>'
        + '</div>'

        + '<div style="margin-bottom:12px"><label style="font-size:11px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:4px">CV / Portfolio Link (optional)</label>'
        + '<input id="applyCvLink" type="url" placeholder="https://drive.google.com/… or LinkedIn URL" style="width:100%;padding:10px;border:1.5px solid var(--border);border-radius:10px;font-size:13px;background:var(--card);color:var(--text-primary);outline:none;box-sizing:border-box"></div>'

        + '<div style="background:#F5A62310;border-radius:10px;padding:10px 12px;font-size:12px;color:var(--text-sub)">'
        + '📤 Shared with employer: <strong>' + H.escHtml(u.name||'Your name') + '</strong>'
        + (u.phone ? ' · ' + H.escHtml(u.phone) : ' (no phone — add in Profile)')
        + (u.email ? ' · ' + H.escHtml(u.email) : ' (no email — add in Profile)')
        + '</div>',

      confirmText: 'Submit Application',
      onConfirm: function() {
        var msg   = (_val('applyMsg'));
        if (msg.length < 50) { H.toast('Cover letter must be at least 50 characters. Tell the employer why you\'re right for this role.'); return false; }
        var salary = _val('applySalary');
        var avail  = (_val('applyAvail')) || 'immediately';
        var cvLink = _val('applyCvLink');
        H._submitJobApplication(jobId, msg, { salary: salary, avail: avail, cvLink: cvLink });
      }
    });
  };

  H._submitJobApplication = function(jobId, message, extras) {
    extras = extras || {};
    var u = H.currentUser(); if (!u) return;
    var l = (H.state.listings||[]).find(function(x){ return x.id === jobId; }); if (!l) return;
    var jd = getJobData(l);
    var company = jd.company || l.sellerName || 'Company';
    H.state.applications = H.state.applications || [];
    var existing = H.state.applications.find(function(a){ return a.jobId===jobId && a.applicantId===u.id; });
    if (existing) { H.toast('You already applied for this job'); return; }
    var app = {
      id: H.uid(), jobId: jobId, jobTitle: l.title, company: company,
      applicantId: u.id, applicantName: u.name||'Applicant',
      applicantPhone: u.phone||'', applicantEmail: u.email||'',
      message: message,
      expectedSalary: extras.salary || '',
      availability:   extras.avail  || 'immediately',
      cvLink:         extras.cvLink || '',
      status: 'pending', appliedAt: Date.now(), employerId: l.sellerId,
      statusHistory: [{status:'pending', t: Date.now(), note: 'Application submitted'}]
    };
    H.state.applications.push(app);
    H.saveState();
    if (typeof H.saveApplicationToCloud === 'function') H.saveApplicationToCloud(app);
    if (l.sellerId) H.pushNotif(l.sellerId, 'New Application 📩', u.name + ' applied for ' + l.title);
    H.toast('✅ Application submitted! The employer will be in touch.');
    H.renderPage('JobDetail', {id: jobId});
    // Create a private conversation thread
    H.state.conversations = H.state.conversations || [];
    var convId = 'job_' + app.id.slice(-8);
    if (!H.state.conversations.find(function(c){ return c.id === convId; })) {
      H.state.conversations.push({
        id: convId, members: [u.id, l.sellerId], listingId: jobId,
        appId: app.id, isJobThread: true, messages: []
      });
      H.saveState();
    }
  };

  H._withdrawApplication = function(appId, jobId) {
    H.modal({
      title: 'Withdraw Application',
      body: 'Are you sure? The employer will no longer see your application and you can reapply later.',
      confirmText: 'Withdraw',
      onConfirm: function() {
        H.state.applications = (H.state.applications||[]).filter(function(a){ return a.id !== appId; });
        H.saveState();
        H.toast('Application withdrawn');
        H.renderPage('JobDetail', {id: jobId});
      }
    });
  };

  // ── EMPLOYER: JOB APPLICATIONS DASHBOARD (ENHANCED) ───────
  var _appTab = 'all';
  H.pages.JobApplications = function(params) {
    var jobId = params && params.jobId;
    var u = H.currentUser();
    if (!u) return '<div class="page active">' + H.innerTopbar('Applications') + H.emptyState('Sign in required','',null,null) + '</div>';
    var l = (H.state.listings||[]).find(function(x){ return x.id === jobId; });
    if (!l || l.sellerId !== u.id) return '<div class="page active">' + H.innerTopbar('Applications') + H.emptyState('Access denied','',null,null) + '</div>';
    var jd = getJobData(l);
    var allApps = (H.state.applications||[]).filter(function(a){ return a.jobId === jobId; }).sort(function(a,b){ return b.appliedAt - a.appliedAt; });
    var counts  = {all:allApps.length, pending:0, reviewed:0, shortlisted:0, interview:0, rejected:0};
    allApps.forEach(function(a){ if (counts[a.status]!==undefined) counts[a.status]++; else counts.pending++; });
    var filtered = _appTab==='all' ? allApps : allApps.filter(function(a){ return a.status === _appTab; });
    var STATUS_C = {pending:'#F5A623',reviewed:'#1A3A8F',shortlisted:'#22c55e',interview:'#7c3aed',rejected:'#ef4444'};
    var STATUS_L = {pending:'New',reviewed:'Reviewed',shortlisted:'Shortlisted',interview:'Interview',rejected:'Rejected'};

    return '<div class="page active">'
      + H.innerTopbar('Applications — ' + H.escHtml(l.title))
      + '<div style="padding:14px;background:var(--card);border-bottom:1px solid var(--border)">'
      + '<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:14px">'
      + [['all','Total'],['pending','New'],['shortlisted','Listed'],['interview','Interview'],['rejected','Declined']].map(function(s){
        var c = s[0]==='all' ? allApps.length : counts[s[0]]||0;
        var col = s[0]==='all'?'#1A3A8F':(STATUS_C[s[0]]||'#999');
        return '<div style="text-align:center;background:' + col + '10;border-radius:10px;padding:8px 4px">'
          + '<div style="font-size:20px;font-weight:900;color:' + col + '">' + c + '</div>'
          + '<div style="font-size:10px;font-weight:600;color:var(--text-sub)">' + s[1] + '</div></div>';
      }).join('')
      + '</div>'
      + '<div style="display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;padding-bottom:2px">'
      + ['all','pending','reviewed','shortlisted','interview','rejected'].map(function(s){
        var lbl = s==='all'?'All ('+allApps.length+')':(STATUS_L[s]||s)+' ('+(s==='all'?allApps.length:counts[s]||0)+')';
        return '<button onclick="H._appTabSwitch(\'' + jobId + '\',\'' + s + '\')" style="flex-shrink:0;padding:7px 12px;border-radius:20px;border:1.5px solid ' + (_appTab===s?'#1A3A8F':'var(--border)') + ';background:' + (_appTab===s?'#1A3A8F':'var(--bg)') + ';color:' + (_appTab===s?'#fff':'var(--text-mid)') + ';font-size:12px;font-weight:700;cursor:pointer">' + lbl + '</button>';
      }).join('')
      + '</div>'
      + (allApps.length ? '<div style="margin-top:12px;display:flex;gap:8px"><button onclick="H._exportAppsCSV(\'' + jobId + '\')" style="flex:1;padding:9px;background:var(--bg);border:1px solid var(--border);border-radius:10px;font-size:12px;font-weight:700;color:var(--text-mid);cursor:pointer">⬇ Export CSV</button>'
        + '<button onclick="H._broadcastToApplicants(\'' + jobId + '\')" style="flex:1;padding:9px;background:#1A3A8F18;border:1px solid #1A3A8F30;border-radius:10px;font-size:12px;font-weight:700;color:#1A3A8F;cursor:pointer">📢 Message All</button></div>' : '')
      + '</div>'
      + '<div style="padding:12px 14px 88px">'
      + (filtered.length ? filtered.map(function(app) {
          var sc = STATUS_C[app.status]||'#999';
          var sl = STATUS_L[app.status]||app.status;
          var ini = (app.applicantName||'A').split(' ').map(function(w){return w[0]||'';}).join('').toUpperCase().slice(0,2);
          var availLabel = (AVAIL_OPTS.find(function(o){return o[0]===app.availability;})||['',''])[1]||app.availability||'';
          return '<div id="appcard_' + app.id + '" style="background:var(--card);border-radius:14px;padding:16px;margin-bottom:10px;border:1.5px solid ' + (app.status==='pending'?'#F5A62340':'var(--border)') + '">'
            + '<div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:12px">'
            + '<div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#1A3A8F,#3a6fd8);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;color:#fff;flex-shrink:0">' + ini + '</div>'
            + '<div style="flex:1;min-width:0">'
            + '<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:4px">'
            + '<div style="font-size:15px;font-weight:700;color:var(--text-primary)">' + H.escHtml(app.applicantName||'Applicant') + '</div>'
            + '<span style="background:' + sc + '20;color:' + sc + ';font-size:11px;font-weight:700;padding:3px 9px;border-radius:20px">' + sl + '</span>'
            + '</div>'
            + '<div style="font-size:12px;color:var(--text-sub);margin-top:3px">' + H.timeAgo(app.appliedAt) + '</div>'
            + (app.applicantPhone ? '<div style="font-size:12px;color:var(--text-sub);margin-top:1px">📱 ' + H.escHtml(app.applicantPhone) + '</div>' : '')
            + (app.applicantEmail ? '<div style="font-size:12px;color:var(--text-sub);margin-top:1px">✉️ ' + H.escHtml(app.applicantEmail) + '</div>' : '')
            + (app.expectedSalary ? '<div style="font-size:12px;color:var(--text-sub);margin-top:1px">💰 Expects $' + H.escHtml(app.expectedSalary) + '/mo</div>' : '')
            + (availLabel ? '<div style="font-size:12px;color:var(--text-sub);margin-top:1px">📅 Available: ' + H.escHtml(availLabel) + '</div>' : '')
            + (app.cvLink ? '<a href="' + H.escHtml(app.cvLink) + '" target="_blank" style="font-size:12px;color:#1A3A8F;font-weight:600;margin-top:3px;display:block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap">📎 View CV / Portfolio</a>' : '')
            + '</div></div>'
            + (app.message ? '<div style="font-size:13px;color:var(--text-mid);line-height:1.65;padding:12px;background:var(--bg);border-radius:10px;margin-bottom:12px;border-left:3px solid #1A3A8F40">'
              + '<div style="font-size:11px;font-weight:700;color:var(--text-sub);margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px">Cover Letter</div>'
              + H.escHtml(app.message) + '</div>' : '')
            + '<div style="display:flex;flex-wrap:wrap;gap:6px">'
            + '<button onclick="H._setAppStatus(\'' + app.id + '\',\'shortlisted\')" style="padding:8px 12px;background:#22c55e15;color:#15803d;border:1.5px solid #22c55e40;border-radius:9px;font-size:12px;font-weight:700;cursor:pointer">✓ Shortlist</button>'
            + '<button onclick="H._setAppStatus(\'' + app.id + '\',\'interview\')" style="padding:8px 12px;background:#7c3aed15;color:#7c3aed;border:1.5px solid #7c3aed40;border-radius:9px;font-size:12px;font-weight:700;cursor:pointer">📅 Interview</button>'
            + '<button onclick="H._setAppStatus(\'' + app.id + '\',\'rejected\')" style="padding:8px 12px;background:#ef444415;color:#dc2626;border:1.5px solid #ef444440;border-radius:9px;font-size:12px;font-weight:700;cursor:pointer">✗ Decline</button>'
            + (app.applicantPhone ? '<button onclick="window.open(\'https://wa.me/' + app.applicantPhone.replace(/[^\d]/g,'') + '\',\'_blank\')" style="padding:8px 12px;background:#25D36615;color:#25D366;border:1.5px solid #25D36640;border-radius:9px;font-size:12px;font-weight:700;cursor:pointer">WhatsApp</button>' : '')
            + '<button onclick="H._messageApplicant(\'' + app.applicantId + '\',\'' + app.jobId + '\')" style="padding:8px 12px;background:#1A3A8F15;color:#1A3A8F;border:1.5px solid #1A3A8F30;border-radius:9px;font-size:12px;font-weight:700;cursor:pointer">💬 Message</button>'
            + '</div></div>';
        }).join('')
        : H.emptyState('No ' + (_appTab==='all'?'':''+_appTab+' ') + 'applications','',null,null))
      + '</div></div>';
  };

  H._appTabSwitch = function(jobId, tab) {
    _appTab = tab;
    H.renderPage('JobApplications', {jobId: jobId});
  };

  H._messageApplicant = function(applicantId, jobId) {
    if (!H.currentUser()) return;
    H.startChatWith(applicantId, jobId);
  };

  H._exportAppsCSV = function(jobId) {
    var apps = (H.state.applications||[]).filter(function(a){ return a.jobId === jobId; });
    var rows = [['Name','Phone','Email','Status','Expected Salary','Availability','CV Link','Applied At','Cover Letter']];
    apps.forEach(function(a){
      rows.push([a.applicantName||'',a.applicantPhone||'',a.applicantEmail||'',a.status||'',a.expectedSalary||'',a.availability||'',a.cvLink||'',new Date(a.appliedAt).toLocaleString(),(a.message||'').replace(/\n/g,' ')]);
    });
    var csv = rows.map(function(r){ return r.map(function(c){ return '"' + String(c).replace(/"/g,'""') + '"'; }).join(','); }).join('\n');
    var blob = new Blob([csv], {type:'text/csv'});
    var url  = URL.createObjectURL(blob);
    var a    = document.createElement('a');
    a.href   = url; a.download = 'applications-' + jobId.slice(-6) + '.csv'; a.click();
    URL.revokeObjectURL(url);
    H.toast('CSV downloaded');
  };

  H._broadcastToApplicants = function(jobId) {
    var l = (H.state.listings||[]).find(function(x){ return x.id===jobId; }); if (!l) return;
    H.modal({
      title: 'Message All Applicants',
      body: '<div style="font-size:13px;color:var(--text-sub);margin-bottom:10px">All applicants for "' + H.escHtml(l.title) + '" will receive this notification.</div>'
        + '<textarea id="broadcastMsg" rows="4" placeholder="e.g. Thank you for applying. We are reviewing applications and will be in touch by Friday." style="width:100%;padding:12px;border:1.5px solid var(--border);border-radius:12px;font-size:13px;background:var(--card);color:var(--text-primary);outline:none;box-sizing:border-box;resize:vertical;font-family:Inter,sans-serif"></textarea>',
      confirmText: 'Send to All',
      onConfirm: function() {
        var msg = _val('broadcastMsg');
        if (!msg) { H.toast('Enter a message'); return false; }
        var apps = (H.state.applications||[]).filter(function(a){ return a.jobId===jobId; });
        apps.forEach(function(a){
          if (a.applicantId) H.pushNotif(a.applicantId, 'Update on your application', msg);
        });
        H.toast('Message sent to ' + apps.length + ' applicant' + (apps.length!==1?'s':''));
      }
    });
  };

  H._setAppStatus = function(appId, status) {
    var app = (H.state.applications||[]).find(function(a){ return a.id===appId; }); if (!app) return;
    app.status = status;
    app.statusHistory = app.statusHistory || [];
    app.statusHistory.push({status: status, t: Date.now()});
    H.saveState();
    if (typeof H.updateApplicationStatusCloud === 'function') H.updateApplicationStatusCloud(appId, status);
    var msgs = {shortlisted:'🎉 Congratulations! Your application for {title} has been shortlisted.', interview:'📅 You have been invited to interview for {title}. The employer will contact you with details.', rejected:'Thank you for applying for {title}. Unfortunately you have not been selected at this time. We wish you all the best.'};
    if (app.applicantId && msgs[status]) {
      H.pushNotif(app.applicantId, status==='rejected'?'Application Update':'Great news!', (msgs[status]||'').replace('{title}', app.jobTitle||'the position'));
    }
    var labels = {shortlisted:'Shortlisted ✓', interview:'Marked for Interview 📅', rejected:'Declined'};
    H.toast(labels[status]||'Updated');
    H.renderPage('JobApplications', {jobId: app.jobId});
  };

  // ── CANDIDATE: APPLIED JOBS (ENHANCED) ───────────────────
  H.pages.AppliedJobs = function() {
    var u = H.currentUser();
    if (!u) return '<div class="page active">' + H.innerTopbar('My Applications') + H.emptyState('Sign in required','',null,null) + '</div>';
    var apps = (H.state.applications||[]).filter(function(a){ return a.applicantId===u.id; }).sort(function(a,b){ return b.appliedAt-a.appliedAt; });
    var STATUS_C = {pending:'#F5A623',reviewed:'#1A3A8F',shortlisted:'#22c55e',interview:'#7c3aed',rejected:'#ef4444'};
    var STATUS_L = {pending:'Under Review',reviewed:'Reviewed',shortlisted:'✓ Shortlisted',interview:'Interview Invited',rejected:'Not Selected'};

    var stats = { total:apps.length, shortlisted:apps.filter(function(a){return a.status==='shortlisted';}).length, interview:apps.filter(function(a){return a.status==='interview';}).length, pending:apps.filter(function(a){return a.status==='pending';}).length };

    return '<div class="page active">'
      + H.innerTopbar('My Applications')
      + '<div style="padding:12px 14px;background:var(--card);border-bottom:1px solid var(--border)">'
      + '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">'
      + [['total','Total','#1A3A8F'],['pending','Pending','#F5A623'],['shortlisted','Shortlisted','#22c55e'],['interview','Interview','#7c3aed']].map(function(s){
        return '<div style="text-align:center;background:' + s[2] + '10;border-radius:10px;padding:8px 4px">'
          + '<div style="font-size:18px;font-weight:900;color:' + s[2] + '">' + stats[s[0]] + '</div>'
          + '<div style="font-size:10px;font-weight:600;color:var(--text-sub)">' + s[1] + '</div></div>';
      }).join('')
      + '</div></div>'
      + '<div style="padding:12px 14px 88px">'
      + (apps.length ? apps.map(function(app) {
          var sc = STATUS_C[app.status]||'#999';
          var sl = STATUS_L[app.status]||app.status;
          return '<div style="background:var(--card);border-radius:14px;padding:16px;margin-bottom:10px;border:1.5px solid ' + (app.status==='shortlisted'||app.status==='interview'?sc+'40':'var(--border)') + '">'
            + '<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;gap:8px">'
            + '<div style="flex:1;min-width:0"><div style="font-size:15px;font-weight:700;color:var(--text-primary);margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + H.escHtml(app.jobTitle||'Job') + '</div>'
            + '<div style="font-size:13px;color:var(--text-sub)">' + H.escHtml(app.company||'') + '</div></div>'
            + '<span style="background:' + sc + '20;color:' + sc + ';font-size:11px;font-weight:700;padding:3px 9px;border-radius:20px;flex-shrink:0">' + sl + '</span>'
            + '</div>'
            + (app.message ? '<div style="font-size:12px;color:var(--text-sub);background:var(--bg);border-radius:8px;padding:8px 10px;margin-bottom:8px;line-height:1.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical">' + H.escHtml(app.message) + '</div>' : '')
            + '<div style="display:flex;align-items:center;justify-content:space-between">'
            + '<span style="font-size:12px;color:var(--text-sub)">Applied ' + H.timeAgo(app.appliedAt) + '</span>'
            + '<div style="display:flex;gap:6px">'
            + '<button onclick="H.openInner(\'JobDetail\',{id:\'' + app.jobId + '\'})" style="padding:7px 12px;background:#1A3A8F15;color:#1A3A8F;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer">View Job</button>'
            + '<button onclick="H._withdrawApplication(\'' + app.id + '\',\'' + app.jobId + '\')" style="padding:7px 10px;background:#fee2e2;color:#dc2626;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer">Withdraw</button>'
            + '</div></div>'
            + (app.status==='interview' ? '<div style="margin-top:10px;background:#7c3aed15;border-radius:10px;padding:10px 12px;font-size:13px;color:#7c3aed;font-weight:600">📅 You\'ve been invited to interview! Check your phone and email for details from the employer.</div>' : '')
            + (app.status==='shortlisted' ? '<div style="margin-top:10px;background:#22c55e15;border-radius:10px;padding:10px 12px;font-size:13px;color:#15803d;font-weight:600">🎉 Congratulations! You have been shortlisted. The employer will be in touch.</div>' : '')
            + '</div>';
        }).join('')
        : H.emptyState('No applications yet','Browse jobs and apply directly in the app.','Browse Jobs',"H.openInner('FindJobs')"))
      + '</div></div>';
  };

  // ── HIRE TALENT (ENHANCED) ────────────────────────────────
  H.pages.HireTalent = function() {
    var candidates = (H.state.users||[]).filter(function(u){ return u.openToWork; });
    var sectors    = ['All'].concat(JOB_CATS);
    var ZW = H._ZW_CITIES || [];
    return '<div class="page active">'
      + '<div class="det-topbar" style="background:#1A3A8F"><button class="back" onclick="H.goBack()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button><div class="det-topbar-title">Hire Talent</div>'
      + '<button onclick="H.openInner(\'PostJob\')" style="background:rgba(255,255,255,.2);border:none;color:#fff;font-size:12px;font-weight:700;cursor:pointer;padding:6px 12px;border-radius:8px">+ Post Job</button></div>'
      + '<div style="background:#1A3A8F;padding:0 12px 14px">'
      + '<div style="background:rgba(255,255,255,.13);border-radius:12px;display:flex;align-items:center;padding:0 12px;gap:8px">'
      + '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
      + '<input id="talentQ" placeholder="Search by name, skill, title…" autocomplete="off" oninput="H._filterTalent()" style="flex:1;border:none;outline:none;padding:12px 0;font-size:14px;background:transparent;color:#fff;font-family:Inter,sans-serif"></div>'
      + '<div style="color:rgba(255,255,255,.65);font-size:12px;font-weight:600;margin-top:8px"><span id="talentCount">' + candidates.length + ' candidate' + (candidates.length!==1?'s':'') + ' open to work</span></div>'
      + '</div>'
      + '<div id="sectorTabs" style="background:var(--card);border-bottom:1px solid var(--border);overflow-x:auto;white-space:nowrap;padding:10px 14px;display:flex;gap:8px">'
      + sectors.map(function(s,i){ return '<button onclick="H._talentSector(\'' + H.escHtml(s) + '\')" style="flex-shrink:0;padding:7px 14px;border-radius:20px;border:1.5px solid ' + (i===0?'#1A3A8F':'var(--border)') + ';background:' + (i===0?'#1A3A8F':'var(--bg)') + ';color:' + (i===0?'#fff':'var(--text-mid)') + ';font-size:12px;font-weight:700;cursor:pointer">' + H.escHtml(s) + '</button>'; }).join('')
      + '</div>'
      + '<div style="padding:10px 14px;display:flex;gap:10px;border-bottom:1px solid var(--border);overflow-x:auto">'
      + '<div style="flex-shrink:0"><div style="font-size:10px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">City</div>'
      + '<select onchange="H._setFilter(\'talent\',\'city\',this.value);H._filterTalent()" style="padding:8px 10px;border:1px solid var(--border);border-radius:9px;font-size:13px;background:var(--bg);color:var(--text-primary);outline:none">'
      + '<option value="all">All Cities</option>' + ZW.map(function(c){ return '<option value="' + c + '">' + c + '</option>'; }).join('') + '</select></div>'
      + '<div style="flex-shrink:0"><div style="font-size:10px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Experience</div>'
      + '<select onchange="H._setFilter(\'talent\',\'exp\',this.value);H._filterTalent()" style="padding:8px 10px;border:1px solid var(--border);border-radius:9px;font-size:13px;background:var(--bg);color:var(--text-primary);outline:none">'
      + '<option value="all">Any</option>' + EXP_LEVELS.slice(1).map(function(e){ return '<option value="' + e[0] + '">' + e[1] + '</option>'; }).join('') + '</select></div>'
      + '</div>'
      + '<div id="talentList" style="padding:12px 14px 88px">'
      + (candidates.length ? candidates.map(_candidateCard).join('') : _emptyTalent())
      + '</div></div>';
  };

  H.pages.HireTalent_after = function(){ H._currentTalentSector = 'All'; };

  H._talentSector = function(sector) {
    H._currentTalentSector = sector;
    document.querySelectorAll('#sectorTabs button').forEach(function(btn){
      var active = btn.textContent.trim() === sector;
      btn.style.background   = active ? '#1A3A8F' : 'var(--bg)';
      btn.style.color        = active ? '#fff' : 'var(--text-mid)';
      btn.style.borderColor  = active ? '#1A3A8F' : 'var(--border)';
    });
    H._filterTalent();
  };

  H._filterTalent = function() {
    var el  = document.getElementById('talentList');
    var cnt = document.getElementById('talentCount');
    if (!el) return;
    var q      = ((document.getElementById('talentQ')||{}).value||'').toLowerCase();
    var sector = H._currentTalentSector || 'All';
    var f      = H._filters['talent'] || {};
    var list   = (H.state.users||[]).filter(function(u){ return u.openToWork; });
    if (q) list = list.filter(function(u){ return ((u.name||'')+(u.jobTitle||'')+(u.skills||'')+(u.city||'')+(u.bio||'')).toLowerCase().includes(q); });
    if (sector && sector !== 'All') list = list.filter(function(u){ return ((u.sector||u.jobTitle||'')).toLowerCase().includes(sector.split(' ')[0].toLowerCase()); });
    if (f.city && f.city !== 'all') list = list.filter(function(u){ return (u.city||'').toLowerCase().includes(f.city.toLowerCase()); });
    if (f.exp  && f.exp  !== 'all') list = list.filter(function(u){ return (u.experienceLevel||'') === f.exp; });
    if (cnt) cnt.textContent = list.length + ' candidate' + (list.length!==1?'s':'') + ' open to work';
    el.innerHTML = list.length ? list.map(_candidateCard).join('') : _emptyTalent();
  };

  function _candidateCard(u) {
    var ini    = H.initials(u.name||'U');
    var skills = (u.skills||'').split(',').slice(0,4).filter(Boolean);
    var expLabel = (EXP_LEVELS.find(function(e){return e[0]===u.experienceLevel;})||['',''])[1];
    return '<div style="background:var(--card);border-radius:14px;padding:16px;margin-bottom:10px;border:1px solid var(--border)">'
      + '<div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:10px">'
      + '<div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#1A3A8F,#3a6fd8);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:#fff;flex-shrink:0">' + ini + '</div>'
      + '<div style="flex:1;min-width:0">'
      + '<div style="display:flex;align-items:center;flex-wrap:wrap;gap:4px;margin-bottom:2px">'
      + '<div style="font-size:15px;font-weight:700;color:var(--text-primary)">' + H.escHtml(u.name||'Anonymous') + '</div>'
      + (u.verified ? '<span style="background:#1A3A8F;color:#fff;font-size:10px;font-weight:700;padding:2px 7px;border-radius:8px">✓ Verified</span>' : '')
      + '</div>'
      + '<div style="font-size:13px;color:#1A3A8F;font-weight:600;margin-bottom:2px">' + H.escHtml(u.jobTitle||'Open to Work') + '</div>'
      + '<div style="font-size:12px;color:var(--text-sub)">'
      + (u.city ? '📍 ' + H.escHtml(u.city) : '')
      + (expLabel ? ' · ' + H.escHtml(expLabel) : '')
      + '</div></div></div>'
      + (u.bio ? '<div style="font-size:13px;color:var(--text-mid);line-height:1.55;margin-bottom:10px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">' + H.escHtml(u.bio) + '</div>' : '')
      + (skills.length ? '<div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:12px">' + skills.map(function(s){ return '<span style="background:var(--bg);border:1px solid var(--border);font-size:11px;padding:3px 9px;border-radius:6px;color:var(--text-mid);font-weight:500">' + H.escHtml(s.trim()) + '</span>'; }).join('') + '</div>' : '')
      + '<div style="display:flex;gap:8px">'
      + '<button onclick="H.startChatWith(\'' + u.id + '\',null)" style="flex:1;padding:9px;background:#1A3A8F15;color:#1A3A8F;border:1.5px solid #1A3A8F30;border-radius:9px;font-size:12px;font-weight:700;cursor:pointer">💬 Message</button>'
      + (u.phone ? '<button onclick="window.open(\'https://wa.me/' + u.phone.replace(/[^\d+]/g,'') + '\',\'_blank\')" style="flex:1;padding:9px;background:#25D36615;color:#25D366;border:1.5px solid #25D36640;border-radius:9px;font-size:12px;font-weight:700;cursor:pointer">WhatsApp</button>' : '')
      + (u.email ? '<button onclick="window.location.href=\'mailto:' + H.escHtml(u.email) + '\'" style="flex:1;padding:9px;background:#F5A62315;color:#c07800;border:1.5px solid #F5A62330;border-radius:9px;font-size:12px;font-weight:700;cursor:pointer">Email</button>' : '')
      + '</div></div>';
  }

  function _emptyTalent() {
    return '<div style="text-align:center;padding:40px 20px">'
      + '<div style="font-size:48px;margin-bottom:12px">👥</div>'
      + '<div style="font-size:17px;font-weight:700;color:var(--text-primary);margin-bottom:6px">No candidates yet</div>'
      + '<div style="font-size:13px;color:var(--text-sub);margin-bottom:20px">Job seekers who enable "Open to Work" will appear here.</div>'
      + '<button onclick="H.toast(\'Share Hostly with job seekers!\')" style="padding:12px 24px;background:#1A3A8F;color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer">Invite Job Seekers</button>'
      + '</div>';
  }

  function _ji(label, value) {
    return '<div><div style="font-size:10px;color:var(--text-sub);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">' + label + '</div><div style="font-size:13px;font-weight:700;color:var(--text-primary)">' + H.escHtml(String(value||'—')) + '</div></div>';
  }

  function _jb(sectionTitle, text) {
    return '<div style="background:var(--card);border-radius:14px;padding:16px;margin-bottom:10px;border:1px solid var(--border)">'
      + '<div style="font-size:14px;font-weight:800;color:var(--text-primary);margin-bottom:10px;display:flex;align-items:center;gap:8px"><div style="width:3px;height:16px;background:#1A3A8F;border-radius:2px"></div>' + sectionTitle + '</div>'
      + '<div style="font-size:13px;color:var(--text-mid);line-height:1.8;white-space:pre-line">' + H.escHtml(text) + '</div></div>';
  }

})(window.H);

;/* === www/js/vehicles.js === */
'use strict';
(function (H) {

  H.pages.Vehicles = function () {
    var ls = (H.state.listings || []).filter(function (l) { return l.status === 'active' && l.cat === 'vehicles'; }).sort(function (a, b) { return b.createdAt - a.createdAt; });

    var f = H._sel('vehicles', 'subcat', 'Vehicle Type', [['all', 'All Types'], ['car', 'Car'], ['suv', 'SUV / 4x4'], ['truck', 'Truck / Pickup'], ['van', 'Van / Minibus'], ['motorcycle', 'Motorcycle'], ['bus', 'Bus'], ['tractor', 'Tractor'], ['boat', 'Boat']])
      + H._sel('vehicles', 'condition', 'Condition', [['all', 'All'], ['new', 'Brand New'], ['used', 'Used'], ['accident-free', 'Accident Free']])
      + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">'
      + '<div><div style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.5px;margin-bottom:5px">Year From</div>'
      + '<input type="number" min="1960" max="2026" placeholder="e.g. 2015" oninput="H._setFilter(\'vehicles\',\'yearMin\',this.value)" style="width:100%;padding:9px 10px;border:1px solid var(--border);border-radius:9px;font-size:13px;background:var(--bg);color:var(--text);outline:none;box-sizing:border-box"></div>'
      + '<div><div style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.5px;margin-bottom:5px">Year To</div>'
      + '<input type="number" min="1960" max="2026" placeholder="e.g. 2024" oninput="H._setFilter(\'vehicles\',\'yearMax\',this.value)" style="width:100%;padding:9px 10px;border:1px solid var(--border);border-radius:9px;font-size:13px;background:var(--bg);color:var(--text);outline:none;box-sizing:border-box"></div>'
      + '</div>'
      + H._sel('vehicles', 'fuelType', 'Fuel Type', [['all', 'All'], ['petrol', 'Petrol'], ['diesel', 'Diesel'], ['electric', 'Electric'], ['hybrid', 'Hybrid'], ['lpg', 'LPG']])
      + H._txtInput('vehicles', 'brand', 'Make / Brand', 'e.g. Toyota, Honda, BMW')
      + H._citysel('vehicles') + H._priceRange('vehicles') + H._sortsel('vehicles');

    return '<div class="page active">'
      + H._catTopbar('Vehicles', '#e53935')
      + H._catHeader('vehicles', 'Vehicles', '#e53935', f)
      + '<div id="cl_vehicles" style="padding-bottom:88px">'
      + (ls.length ? '<div class="listing-list">' + ls.map(H.renderListCard).join('') + '</div>' : H.emptyState('No vehicles listed', 'Be the first to sell!', 'Post an Ad', "H.navTo('Post')"))
      + '</div></div>';
  };

  H.pages.Vehicles_after = function () { H._applyFilters('vehicles'); };

})(window.H);

;/* === www/js/property.js === */
'use strict';
(function (H) {

  H.pages.Property = function () {
    var all = (H.state.listings || []).filter(function (l) { return l.status === 'active' && l.cat === 'property'; });
    var sale = all.filter(function (l) { return !l.rentalType; }).sort(function (a, b) { return b.createdAt - a.createdAt; });
    var rent = all.filter(function (l) { return !!l.rentalType; }).sort(function (a, b) { return b.createdAt - a.createdAt; });

    var fSale = H._sel('property_sale', 'propType', 'Property Type', [['all', 'All Types'], ['residential', 'Residential'], ['commercial', 'Commercial'], ['land', 'Land / Stand'], ['units', 'Units / Flats']])
      + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
      + H._sel('property_sale', 'beds', 'Bedrooms', [['any', 'Any'], ['1', '1+'], ['2', '2+'], ['3', '3+'], ['4', '4+'], ['5', '5+']])
      + H._sel('property_sale', 'baths', 'Bathrooms', [['any', 'Any'], ['1', '1+'], ['2', '2+'], ['3', '3+']])
      + '</div>'
      + H._sel('property_sale', 'furnishing', 'Furnishing', [['all', 'All'], ['furnished', 'Furnished'], ['unfurnished', 'Unfurnished'], ['semi-furnished', 'Semi-Furnished']])
      + H._citysel('property_sale') + H._priceRange('property_sale') + H._sortsel('property_sale');

    var fRent = H._sel('property_rent', 'propType', 'Category', [['all', 'All'], ['residential', 'Residential'], ['rooms', 'Rooms'], ['commercial', 'Commercial']])
      + H._sel('property_rent', 'rentalType', 'Rental Type', [['all', 'All'], ['monthly', 'Monthly'], ['daily', 'Daily'], ['nightly', 'Nightly']])
      + H._sel('property_rent', 'furnishing', 'Furnishing', [['all', 'All'], ['furnished', 'Furnished'], ['unfurnished', 'Unfurnished'], ['semi-furnished', 'Semi-Furnished']])
      + H._citysel('property_rent') + H._priceRange('property_rent') + H._sortsel('property_rent');

    return '<div class="page active">'
      + H._catTopbar('Property', '#1A3A8F')
      + '<div style="background:#1A3A8F;padding:0 14px">'
      + '<div style="display:flex;border-bottom:2px solid rgba(255,255,255,.15)">'
      + '<button id="ptab_sale" onclick="H._propTab(\'sale\')" style="flex:1;padding:12px 0;background:none;border:none;border-bottom:3px solid #F5A623;margin-bottom:-2px;color:#fff;font-size:14px;font-weight:700;cursor:pointer">For Sale</button>'
      + '<button id="ptab_rent" onclick="H._propTab(\'rent\')" style="flex:1;padding:12px 0;background:none;border:none;border-bottom:3px solid transparent;margin-bottom:-2px;color:rgba(255,255,255,.6);font-size:14px;font-weight:600;cursor:pointer">For Rent</button>'
      + '</div></div>'
      + '<div id="pp_sale">'
      + H._catHeader('property_sale', 'Property for Sale', '#1A3A8F', fSale)
      + '<div id="cl_property_sale" style="padding-bottom:88px">'
      + (sale.length ? '<div class="listing-list">' + sale.map(H.renderListCard).join('') + '</div>' : H.emptyState('No properties for sale', 'Be the first to list one!', 'Post an Ad', "H.navTo('Post')"))
      + '</div></div>'
      + '<div id="pp_rent" style="display:none">'
      + H._catHeader('property_rent', 'Property for Rent', '#1A3A8F', fRent)
      + '<div id="cl_property_rent" style="padding-bottom:88px">'
      + (rent.length ? '<div class="listing-list">' + rent.map(H.renderListCard).join('') + '</div>' : H.emptyState('No rental properties', 'Be the first to list one!', 'Post an Ad', "H.navTo('Post')"))
      + '</div></div>'
      + '</div>';
  };

  H.pages.Property_after = function () { H._propTab('sale'); };

  H._propTab = function (tab) {
    var ps = document.getElementById('pp_sale'), pr = document.getElementById('pp_rent');
    var ts = document.getElementById('ptab_sale'), tr = document.getElementById('ptab_rent');
    if (!ps) return;
    var isSale = tab === 'sale';
    ps.style.display = isSale ? '' : 'none';
    pr.style.display = isSale ? 'none' : '';
    ts.style.color = isSale ? '#fff' : 'rgba(255,255,255,.6)';
    ts.style.fontWeight = isSale ? '700' : '600';
    ts.style.borderBottomColor = isSale ? '#F5A623' : 'transparent';
    tr.style.color = isSale ? 'rgba(255,255,255,.6)' : '#fff';
    tr.style.fontWeight = isSale ? '600' : '700';
    tr.style.borderBottomColor = isSale ? 'transparent' : '#F5A623';
    H._applyFilters(isSale ? 'property_sale' : 'property_rent');
  };

})(window.H);

;/* === www/js/electronics.js === */
'use strict';
(function (H) {

  H.pages.Electronics = function () {
    var ls = (H.state.listings || []).filter(function (l) { return l.status === 'active' && l.cat === 'electronics'; }).sort(function (a, b) { return b.createdAt - a.createdAt; });

    var f = H._sel('electronics', 'subcat', 'Category', [['all', 'All'], ['phones', 'Phones & Tablets'], ['computers', 'Computers & Laptops'], ['tvs', 'TVs & Screens'], ['audio', 'Audio & Speakers'], ['cameras', 'Cameras'], ['gaming', 'Gaming'], ['appliances', 'Appliances'], ['accessories', 'Accessories']])
      + H._txtInput('electronics', 'brand', 'Brand', 'e.g. Samsung, Apple, Dell')
      + H._sel('electronics', 'condition', 'Condition', [['all', 'All'], ['new', 'Brand New'], ['like-new', 'Like New'], ['good', 'Good'], ['fair', 'Fair']])
      + H._citysel('electronics') + H._priceRange('electronics') + H._sortsel('electronics');

    return '<div class="page active">'
      + H._catTopbar('Electronics', '#8E24AA')
      + H._catHeader('electronics', 'Electronics', '#8E24AA', f)
      + '<div id="cl_electronics" style="padding-bottom:88px">'
      + (ls.length ? '<div class="listing-list">' + ls.map(H.renderListCard).join('') + '</div>' : H.emptyState('No electronics listed', 'Buy & sell gadgets!', 'Post an Ad', "H.navTo('Post')"))
      + '</div></div>';
  };

  H.pages.Electronics_after = function () { H._applyFilters('electronics'); };

})(window.H);

;/* === www/js/fashion.js === */
'use strict';
(function (H) {

  H.pages.Fashion = function () {
    var ls = (H.state.listings || []).filter(function (l) { return l.status === 'active' && l.cat === 'fashion'; }).sort(function (a, b) { return b.createdAt - a.createdAt; });

    var f = H._sel('fashion', 'gender', 'Category', [['all', 'All'], ['women', 'Women'], ['men', 'Men'], ['kids', 'Kids'], ['unisex', 'Unisex']])
      + H._sel('fashion', 'subcat', 'Type', [['all', 'All'], ['clothes', 'Clothes'], ['shoes', 'Shoes'], ['bags', 'Bags & Purses'], ['accessories', 'Accessories'], ['watches', 'Watches & Jewellery'], ['sportswear', 'Sportswear'], ['traditional', 'Traditional Wear']])
      + H._sel('fashion', 'size', 'Size', [['all', 'Any Size'], ['xs', 'XS'], ['s', 'S'], ['m', 'M'], ['l', 'L'], ['xl', 'XL'], ['xxl', '2XL'], ['xxxl', '3XL+']])
      + H._txtInput('fashion', 'brand', 'Brand', 'e.g. Nike, Zara, H&M')
      + H._sel('fashion', 'condition', 'Condition', [['all', 'All'], ['new', 'Brand New'], ['like-new', 'Like New'], ['good', 'Good'], ['fair', 'Fair']])
      + H._citysel('fashion') + H._priceRange('fashion') + H._sortsel('fashion');

    return '<div class="page active">'
      + H._catTopbar('Fashion', '#F06292')
      + H._catHeader('fashion', 'Fashion', '#F06292', f)
      + '<div id="cl_fashion" style="padding-bottom:88px">'
      + (ls.length ? '<div class="listing-list">' + ls.map(H.renderListCard).join('') + '</div>' : H.emptyState('No fashion items listed', 'Style up Zimbabwe!', 'Post an Ad', "H.navTo('Post')"))
      + '</div></div>';
  };

  H.pages.Fashion_after = function () { H._applyFilters('fashion'); };

})(window.H);

;/* === www/js/furniture.js === */
'use strict';
(function (H) {

  H.pages.Furniture = function () {
    var ls = (H.state.listings || []).filter(function (l) { return l.status === 'active' && l.cat === 'furniture'; }).sort(function (a, b) { return b.createdAt - a.createdAt; });

    var f = H._sel('furniture', 'subcat', 'Furniture Type', [['all', 'All'], ['sofas', 'Sofas & Lounge'], ['bedroom', 'Bedroom Sets'], ['dining', 'Dining Room'], ['office', 'Office Furniture'], ['outdoor', 'Outdoor'], ['kitchen', 'Kitchen'], ['wardrobes', 'Wardrobes'], ['decor', 'Home Décor']])
      + H._sel('furniture', 'condition', 'Condition', [['all', 'All'], ['new', 'Brand New'], ['like-new', 'Like New'], ['good', 'Good'], ['fair', 'Fair']])
      + H._txtInput('furniture', 'brand', 'Material', 'e.g. Wood, Leather, Fabric')
      + H._citysel('furniture') + H._priceRange('furniture') + H._sortsel('furniture');

    return '<div class="page active">'
      + H._catTopbar('Furniture', '#6D4C41')
      + H._catHeader('furniture', 'Furniture', '#6D4C41', f)
      + '<div id="cl_furniture" style="padding-bottom:88px">'
      + (ls.length ? '<div class="listing-list">' + ls.map(H.renderListCard).join('') + '</div>' : H.emptyState('No furniture listed', 'Furnish your home!', 'Post an Ad', "H.navTo('Post')"))
      + '</div></div>';
  };

  H.pages.Furniture_after = function () { H._applyFilters('furniture'); };

})(window.H);

;/* === www/js/services.js === */
'use strict';
(function (H) {

  H.pages.Services = function () {
    var ls = (H.state.listings || []).filter(function (l) { return l.status === 'active' && l.cat === 'services'; }).sort(function (a, b) { return b.createdAt - a.createdAt; });

    var f = H._sel('services', 'subcat', 'Service Type', [['all', 'All Services'], ['cleaning', 'Cleaning'], ['construction', 'Construction & Building'], ['plumbing', 'Plumbing'], ['electrical', 'Electrical'], ['painting', 'Painting'], ['gardening', 'Gardening & Landscaping'], ['transport', 'Transport & Delivery'], ['photography', 'Photography & Video'], ['catering', 'Catering & Events'], ['it', 'IT & Tech Support'], ['tutoring', 'Tutoring & Education'], ['beauty', 'Beauty & Wellness'], ['security', 'Security'], ['legal', 'Legal & Finance']])
      + H._citysel('services') + H._priceRange('services') + H._sortsel('services');

    return '<div class="page active">'
      + H._catTopbar('Services', '#00897B')
      + H._catHeader('services', 'Services', '#00897B', f)
      + '<div id="cl_services" style="padding-bottom:88px">'
      + (ls.length ? '<div class="listing-list">' + ls.map(H.renderListCard).join('') + '</div>' : H.emptyState('No services listed', 'Offer your skills in Zimbabwe!', 'Post a Service', "H.navTo('Post')"))
      + '</div></div>';
  };

  H.pages.Services_after = function () { H._applyFilters('services'); };

})(window.H);

;/* === www/js/rooms.js === */
'use strict';
(function (H) {

  H.pages.Rooms = function () {
    var ls = (H.state.listings || []).filter(function (l) { return l.status === 'active' && l.cat === 'rooms'; }).sort(function (a, b) { return b.createdAt - a.createdAt; });

    var f = H._sel('rooms', 'subcat', 'Room Type', [['all', 'All'], ['single', 'Single Room'], ['double', 'Double Room'], ['self-contained', 'Self-Contained'], ['shared', 'Shared'], ['bachelor', 'Bachelor Flat'], ['cottage', 'Cottage']])
      + H._sel('rooms', 'furnishing', 'Furnishing', [['all', 'All'], ['furnished', 'Furnished'], ['unfurnished', 'Unfurnished'], ['semi-furnished', 'Semi-Furnished']])
      + H._sel('rooms', 'rentalType', 'Rental Type', [['all', 'All'], ['monthly', 'Monthly'], ['daily', 'Daily'], ['nightly', 'Nightly']])
      + H._citysel('rooms') + H._priceRange('rooms') + H._sortsel('rooms');

    return '<div class="page active">'
      + H._catTopbar('Rooms for Rent', '#00838F')
      + H._catHeader('rooms', 'Rooms', '#00838F', f)
      + '<div id="cl_rooms" style="padding-bottom:88px">'
      + (ls.length ? '<div class="listing-list">' + ls.map(H.renderListCard).join('') + '</div>' : H.emptyState('No rooms listed', 'Find the perfect room!', 'Post a Room', "H.navTo('Post')"))
      + '</div></div>';
  };

  H.pages.Rooms_after = function () { H._applyFilters('rooms'); };

})(window.H);

;/* === www/js/account.js === */
'use strict';
(function (H) {
  const pages = H.pages;

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
      </div>
    </div>`;
  };

})(window.H = window.H || {});

;/* === www/js/profile.js === */
'use strict';
(function (H) {
  const pages = H.pages;

  // ── Helpers ──────────────────────────────────────────────
  const activeCount = uid => (H.state.listings || []).filter(l => l.sellerId === uid && l.status === 'active').length;
  const soldCount   = uid => (H.state.listings || []).filter(l => l.sellerId === uid && l.status === 'sold').length;

  // ── Icons ────────────────────────────────────────────────
  const IC = {
    pencil: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/><line x1="15" y1="5" x2="19" y2="9"/></svg>',
    shield: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    star:   '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    phone:  '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 2.1.74 3.26a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.16.38 2.3.61 3.26.74a2 2 0 0 1 1.72 2.03z"/></svg>',
    idCard: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><path d="M10 14h4"/><circle cx="10" cy="17" r="1"/></svg>',
    check:  '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>',
    alert:  '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  };

  const starFill  = '<svg width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
  const starEmpty = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
  const stars = n => Array.from({length:5}, (_,i) => i < Math.round(n) ? starFill : starEmpty).join('');

  // ── Profile Page ─────────────────────────────────────────
  pages.Profile = function (params) {
    const viewId = params && params.id;
    const u = viewId
      ? (H.state.users || []).find(x => x.id === viewId)
      : H.currentUser();

    if (!u) return H.emptyState('Not logged in', 'Please sign in to continue', 'Sign In', "H.authPage()");

    const isOwn      = !viewId || (H.currentUser() && viewId === H.currentUser().id);
    const verified   = u.verified
      ? `<span class="verified">${IC.check} Verified</span>`
      : `<span class="unverified">${IC.alert} Not Verified</span>`;
    const avgRating  = (u.ratings && u.ratings.length)
      ? (u.ratings.reduce((a,b) => a+b, 0) / u.ratings.length).toFixed(1) : '0';
    const ratingCount = u.ratings ? u.ratings.length : 0;

    return `<div class="page active">
      ${H.innerTopbar(isOwn ? 'My Profile' : H.escHtml(u.name))}
      <div class="profile-hero">
        <div class="profile-pic">
          ${u.avatar
            ? `<img src="${u.avatar}" alt="${H.escHtml(u.name)}">`
            : `<div class="profile-initials">${H.initials(u.name)}</div>`}
        </div>
        <div class="profile-info">
          <div class="profile-name">${H.escHtml(u.name || 'User')}</div>
          <div class="profile-phone">${IC.phone} ${H.escHtml(u.phone || 'No phone')}</div>
          <div class="profile-status">${verified}</div>
        </div>
      </div>

      <div class="profile-stats">
        <div class="stat-box">
          <div class="stat-val">${activeCount(u.id)}</div>
          <div class="stat-label">Active Ads</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">${avgRating}</div>
          <div class="stat-label">Rating (${ratingCount})</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">${soldCount(u.id)}</div>
          <div class="stat-label">Sold</div>
        </div>
      </div>

      ${isOwn ? `
      <div class="form-wrap">
        <button class="btn-pri" onclick="H.openInner('EditProfile')">${IC.pencil} Edit Profile</button>
        <button class="btn-sec" onclick="H.openInner('ProfileVerify')">${IC.shield} Verify Identity</button>
        <button class="btn-sec" onclick="H.openInner('Reviews')">${IC.star} Reviews & Ratings</button>
      </div>` : `
      <div class="form-wrap">
        <button class="btn-pri" onclick="H.startChatWith('${u.id}', null)">Message ${H.escHtml(u.name)}</button>
        <button class="btn-sec" onclick="H.reportUser('${u.id}')">Report User</button>
      </div>`}

      <div class="section-box">
        <div class="section-title">Account Info</div>
        <div class="info-row"><span class="info-label">Email</span><span class="info-val">${H.escHtml(u.email || 'N/A')}</span></div>
        <div class="info-row"><span class="info-label">Joined</span><span class="info-val">${new Date(u.joinedAt || u.createdAt || Date.now()).toLocaleDateString()}</span></div>
        <div class="info-row"><span class="info-label">Status</span><span class="info-val">${H.escHtml(u.status || 'Active')}</span></div>
        ${u.bio ? `<div class="info-row"><span class="info-label">Bio</span><span class="info-val">${H.escHtml(u.bio)}</span></div>` : ''}
      </div>

      <div class="section-box">
        <div class="section-title">Active Listings</div>
        <div class="listing-list">
          ${(H.state.listings || []).filter(l => l.sellerId === u.id && l.status === 'active').slice(0,6).map(H.renderListCard).join('')
            || '<div style="color:var(--sub);padding:16px;font-size:13px">No active listings</div>'}
        </div>
      </div>
      <div style="height:24px"></div>
    </div>`;
  };

  // ── Edit Profile ─────────────────────────────────────────
  pages.EditProfile = function () {
    const u = H.currentUser();
    if (!u) return H.emptyState('Not logged in', 'Please sign in');

    return `<div class="page active">
      ${H.innerTopbar('Edit Profile')}
      <div class="form-wrap">
        <!-- Avatar picker -->
        <div style="display:flex;flex-direction:column;align-items:center;padding:8px 0 16px">
          <div style="width:80px;height:80px;border-radius:50%;overflow:hidden;background:#1A3A8F14;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:800;color:#1A3A8F;margin-bottom:10px;border:2.5px solid #1A3A8F22">
            ${u.avatar ? `<img id="avatarPreview" src="${H.escHtml(u.avatar)}" style="width:100%;height:100%;object-fit:cover">` : `<span id="avatarPreview">${H.initials(u.name)}</span>`}
          </div>
          <label for="profilePicFile" style="font-size:13px;font-weight:600;color:#1A3A8F;cursor:pointer;background:#1A3A8F14;padding:7px 16px;border-radius:20px">
            Change Photo
          </label>
          <input type="file" id="profilePicFile" accept="image/*" capture="user" style="display:none" onchange="H._editProfile.onPicChange(event)">
        </div>

        <div class="fg"><div class="fl">Full Name <span style="color:#EF4444">*</span></div>
          <input class="fi" id="editName" value="${H.escHtml(u.name || '')}" placeholder="Your full name" maxlength="60">
        </div>
        <div class="fg"><div class="fl">Phone Number</div>
          <input class="fi" id="editPhone" value="${H.escHtml(u.phone || '')}" placeholder="+263 77 123 4567" type="tel" maxlength="16">
          <div style="font-size:11px;color:var(--sub);margin-top:4px">International format, e.g. +263 77 123 4567</div>
        </div>
        <div class="fg"><div class="fl">Email</div>
          <input class="fi" value="${H.escHtml(u.email || '')}" disabled style="opacity:.6;cursor:not-allowed">
          <div style="font-size:11px;color:var(--sub);margin-top:4px">Email cannot be changed here</div>
        </div>
        <div class="fg"><div class="fl">Bio</div>
          <textarea class="fi" rows="3" id="editBio" placeholder="Tell buyers about yourself..." maxlength="200">${H.escHtml(u.bio || '')}</textarea>
        </div>

        <div id="editSaveMsg" style="display:none;font-size:13px;color:#16A34A;text-align:center;padding:8px 0;font-weight:600">✓ Saved!</div>
        <div id="editErrMsg"  style="display:none;font-size:13px;color:#EF4444;text-align:center;padding:8px 0"></div>

        <div class="btn-group">
          <button id="editSaveBtn" class="btn-pri" onclick="H._editProfile.save()">Save Changes</button>
          <button class="btn-sec" onclick="H.openInner('ChangePassword')">Change Password</button>
          <button class="btn-sec" onclick="H.goBack()">Cancel</button>
        </div>
      </div>
    </div>`;
  };

  pages.EditProfile_after = function () {
    H._editProfile = {
      onPicChange: async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        if (file.size > 3 * 1024 * 1024) { H.toast('Photo must be under 3 MB'); return; }
        const compressed = await H.compressImage(file, 400, 0.82);
        const u = H.currentUser();
        u.avatar = compressed;
        H.saveState();
        // Update preview in place without full re-render
        const prev = document.getElementById('avatarPreview');
        if (prev) { prev.outerHTML = `<img id="avatarPreview" src="${compressed}" style="width:100%;height:100%;object-fit:cover">`; }
      },
      save: async () => {
        const u = H.currentUser();
        const name  = (document.getElementById('editName')?.value || '').trim();
        const phone = (document.getElementById('editPhone')?.value || '').trim();
        const bio   = (document.getElementById('editBio')?.value || '').trim();
        const btn   = document.getElementById('editSaveBtn');
        const errEl = document.getElementById('editErrMsg');
        const okEl  = document.getElementById('editSaveMsg');

        const showErr = (msg) => { if(errEl){errEl.textContent=msg;errEl.style.display='';} H.toast(msg); };

        if (!name || name.length < 2) { showErr('Please enter your full name (min 2 characters)'); return; }

        // Optional phone validation — international format
        if (phone && !/^\+?[0-9\s\-]{7,16}$/.test(phone)) {
          showErr('Phone number looks invalid. Use format: +263 77 123 4567'); return;
        }

        if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
        if (errEl) errEl.style.display = 'none';

        u.name  = name;
        if (phone) u.phone = phone;
        u.bio   = bio;
        H.saveState();

        // Sync to Supabase profiles table
        const c = window.supabase && typeof window.supabase.from === 'function' ? window.supabase : null;
        if (c) {
          const res = await c.from('profiles').upsert({
            id: u.id, name: u.name, phone: u.phone || null,
            bio: u.bio || null, avatar: u.avatar || null,
            updated_at: new Date().toISOString()
          });
          if (res && res.error) {
            console.warn('Profile sync failed:', res.error.message);
          }
        }

        if (btn) { btn.disabled = false; btn.textContent = 'Save Changes'; }
        if (okEl) { okEl.style.display = ''; setTimeout(() => { if(okEl) okEl.style.display='none'; }, 2500); }
        H.toast('Profile updated!');
      }
    };
  };

  // ── My Listings ──────────────────────────────────────────
  pages.MyListings = function () {
    const u = H.currentUser();
    if (!u) return H.emptyState('Not logged in', 'Please sign in');

    const all      = (H.state.listings || []).filter(l => l.sellerId === u.id);
    const active   = all.filter(l => l.status === 'active');
    const pending  = all.filter(l => l.status === 'pending');
    const sold     = all.filter(l => l.status === 'sold');
    const rejected = all.filter(l => l.status === 'rejected');

    const btn = (label, fn, c, bg, bo) =>
      `<button onclick="${fn}" style="flex:1;padding:8px 2px;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;background:${bg};color:${c};border:1.5px solid ${bo};font-family:inherit;white-space:nowrap">${label}</button>`;

    const actionBars = {
      active:   (id) => btn('Edit',        `H._myListings.edit('${id}')`,       '#1A3A8F','#EFF6FF','#BFDBFE')
                      + btn('Mark Sold',   `H._myListings.markSold('${id}')`,   '#16a34a','#dcfce7','#bbf7d0')
                      + btn('Delete',      `H._myListings.del('${id}')`,        '#ef4444','#fef2f2','#fecaca'),
      pending:  (id) => btn('Edit',        `H._myListings.edit('${id}')`,       '#1A3A8F','#EFF6FF','#BFDBFE')
                      + btn('Delete',      `H._myListings.del('${id}')`,        '#ef4444','#fef2f2','#fecaca'),
      sold:     (id) => btn('Post Again',  `H._myListings.reactivate('${id}')`, '#1A3A8F','#EFF6FF','#BFDBFE')
                      + btn('Delete',      `H._myListings.del('${id}')`,        '#ef4444','#fef2f2','#fecaca'),
      rejected: (id) => btn('Edit & Resubmit', `H._myListings.edit('${id}')`,  '#D97706','#FFFBEB','#FDE68A')
                      + btn('Delete',      `H._myListings.del('${id}')`,        '#ef4444','#fef2f2','#fecaca'),
    };

    const myCard = (l, status) =>
      `<div style="margin-bottom:14px">
        ${H.renderListCard(l)}
        <div style="display:flex;gap:6px;margin-top:6px">
          ${(actionBars[status] || actionBars.active)(l.id)}
        </div>
      </div>`;

    const section = (list, label, status) => list.length
      ? `<div style="padding:12px">${list.map(l => myCard(l, status)).join('')}</div>`
      : `<div style="color:var(--sub);padding:32px 20px;text-align:center;font-size:13px">No ${label.toLowerCase()} listings</div>`;

    return `<div class="page active">
      ${H.innerTopbar('My Listings')}
      <div class="listing-tabs">
        <button class="tab active" data-tab="active">Active (${active.length})</button>
        <button class="tab" data-tab="pending">Pending (${pending.length})</button>
        <button class="tab" data-tab="sold">Sold (${sold.length})</button>
        <button class="tab" data-tab="rejected">Rejected (${rejected.length})</button>
      </div>
      <div class="tabs-content">
        <div class="tab-content active" data-tab="active">${section(active,'Active','active')}</div>
        <div class="tab-content" data-tab="pending">${section(pending,'Pending','pending')}</div>
        <div class="tab-content" data-tab="sold">${section(sold,'Sold','sold')}</div>
        <div class="tab-content" data-tab="rejected">${section(rejected,'Rejected','rejected')}</div>
      </div>
      <div style="height:24px"></div>
    </div>`;
  };

  pages.MyListings_after = function () {
    document.querySelectorAll('.listing-tabs .tab').forEach(btn => {
      btn.addEventListener('click', e => {
        document.querySelectorAll('.listing-tabs .tab').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        const el = document.querySelector(`.tab-content[data-tab="${e.target.dataset.tab}"]`);
        if (el) el.classList.add('active');
      });
    });

    H._myListings = {
      edit: (id) => H.openInner('EditListing', { listingId: id }),
      markSold: (id) => {
        const l = (H.state.listings || []).find(x => x.id === id);
        if (!l) return;
        l.status = 'sold';
        l.soldAt = Date.now();
        H.saveState();
        H.toast('Listing marked as sold');
        H.renderPage('MyListings');
      },
      del: (id) => {
        if (!window.confirm('Delete this listing permanently?')) return;
        H.state.listings = (H.state.listings || []).filter(x => x.id !== id);
        H.saveState();
        H.toast('Listing deleted');
        H.renderPage('MyListings');
      },
      reactivate: (id) => {
        const l = (H.state.listings || []).find(x => x.id === id);
        if (!l) return;
        l.status = 'active';
        delete l.soldAt;
        l.renewedAt = Date.now();
        H.saveState();
        H.toast('Listing reactivated!');
        H.renderPage('MyListings');
      },
    };
  };

  // ── Edit Listing ─────────────────────────────────────────
  pages.EditListing = function (params) {
    const id = params && params.listingId;
    const l  = id ? (H.state.listings || []).find(x => x.id === id) : null;
    if (!l) return `<div class="page active">${H.innerTopbar('Edit Listing')}${H.emptyState('Listing not found','')}</div>`;
    return `<div class="page active">
      ${H.innerTopbar('Edit Listing')}
      <div class="form-wrap">
        <div class="fg"><div class="fl">Title</div>
          <input class="fi" id="elTitle" value="${H.escHtml(l.title || '')}" placeholder="Listing title" maxlength="80">
        </div>
        <div class="fg"><div class="fl">Price (USD)</div>
          <input class="fi" id="elPrice" type="number" min="0" value="${H.escHtml(String(l.price || ''))}" placeholder="0">
        </div>
        <div class="fg"><div class="fl">Description</div>
          <textarea class="fi" id="elDesc" rows="5" placeholder="Describe your item...">${H.escHtml(l.description || '')}</textarea>
        </div>
        <div id="elErr" style="display:none;color:#ef4444;font-size:13px;font-weight:600;padding:6px 0"></div>
        <button id="elSaveBtn" class="btn-pri" onclick="H._editListing.save('${id}')">Save Changes</button>
        <button class="btn-sec" onclick="H.goBack()">Cancel</button>
      </div>
    </div>`;
  };

  pages.EditListing_after = function () {
    H._editListing = {
      save: (id) => {
        const title = document.getElementById('elTitle')?.value.trim();
        const price = parseFloat(document.getElementById('elPrice')?.value);
        const desc  = document.getElementById('elDesc')?.value.trim();
        const errEl = document.getElementById('elErr');
        const btn   = document.getElementById('elSaveBtn');
        const showErr = (m) => { if (errEl) { errEl.textContent = m; errEl.style.display = ''; } };

        if (!title) { showErr('Title is required'); return; }
        if (isNaN(price) || price < 0) { showErr('Enter a valid price'); return; }
        if (!desc) { showErr('Description is required'); return; }

        const l = (H.state.listings || []).find(x => x.id === id);
        if (!l) { showErr('Listing not found'); return; }

        l.title       = title;
        l.price       = price;
        l.description = desc;
        l.updatedAt   = Date.now();
        if (l.status === 'rejected') l.status = 'pending';

        if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
        H.saveState();
        H.toast('Listing updated!');
        H.goBack();
      }
    };
  };

  // ── Favorites ────────────────────────────────────────────
  pages.Favorites = function () {
    const u = H.currentUser();
    if (!u) return H.emptyState('Not logged in', 'Please sign in');

    const saved = (H.state.saves && H.state.saves[u.id]) || [];
    const list  = (H.state.listings || []).filter(l => saved.includes(l.id) && l.status === 'active');

    const savedCard = (l) =>
      `<div style="margin-bottom:14px">
        ${H.renderListCard(l)}
        <div style="display:flex;gap:6px;margin-top:6px">
          <button onclick="H._favorites.unsave('${l.id}')" style="flex:1;padding:9px 4px;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;background:#fef2f2;color:#ef4444;border:1.5px solid #fecaca;font-family:inherit">Remove</button>
          <button onclick="H.openListing('${l.id}')" style="flex:2;padding:9px 4px;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;background:#EFF6FF;color:#1A3A8F;border:1.5px solid #BFDBFE;font-family:inherit">View Listing</button>
        </div>
      </div>`;

    return `<div class="page active">
      ${H.innerTopbar(list.length ? `Saved & Favorites (${list.length})` : 'Saved & Favorites')}
      <div style="padding:14px">
        ${list.length
          ? list.map(savedCard).join('')
          : H.emptyState('No saved listings', 'Tap the heart on any listing to save it', 'Browse', "H.navTo('Browse')")}
      </div>
      <div style="height:24px"></div>
    </div>`;
  };

  pages.Favorites_after = function () {
    H._favorites = {
      unsave: (id) => {
        const u = H.currentUser();
        if (!u) return;
        H.state.saves = H.state.saves || {};
        H.state.saves[u.id] = (H.state.saves[u.id] || []).filter(sid => sid !== id);
        H.saveState();
        H.toast('Removed from saved');
        H.renderPage('Favorites');
      }
    };
  };

  // ── Identity Verification ────────────────────────────────
  pages.ProfileVerify = function () {
    const u = H.currentUser();
    if (!u) return H.emptyState('Not logged in', 'Please sign in');

    if (u.verified) return `<div class="page active">
      ${H.innerTopbar('Identity Verification')}
      <div class="section-box" style="text-align:center;padding:32px 20px">
        <div style="font-size:48px;margin-bottom:12px">✅</div>
        <div style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:8px">Identity Verified</div>
        <div style="font-size:14px;color:var(--sub)">You have a verified badge on all your listings.</div>
        <div style="font-size:12px;color:var(--sub);margin-top:8px">Verified on ${new Date(u.verifiedAt || Date.now()).toLocaleDateString()}</div>
      </div>
    </div>`;

    if (u.verificationPending) return `<div class="page active">
      ${H.innerTopbar('Identity Verification')}
      <div class="section-box" style="text-align:center;padding:32px 20px">
        <div style="font-size:48px;margin-bottom:12px">⏳</div>
        <div style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:8px">Verification Pending</div>
        <div style="font-size:14px;color:var(--sub)">Your request is under review. We will notify you within 24 hours.</div>
      </div>
    </div>`;

    return `<div class="page active">
      ${H.innerTopbar('Verify Identity')}
      <div class="section-box" style="text-align:center;padding:24px 20px">
        <div style="font-size:48px;margin-bottom:12px">🪪</div>
        <div style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:8px">Get Verified</div>
        <div style="font-size:14px;color:var(--sub)">Build trust with buyers by verifying your identity with a valid ID.</div>
      </div>
      <div class="form-wrap">
        <div class="fg"><div class="fl">ID Type</div>
          <select class="fi" id="idType">
            <option>National ID</option>
            <option>Passport</option>
            <option>Driver&#39;s License</option>
          </select>
        </div>
        <div class="fg"><div class="fl">ID Number</div>
          <input class="fi" id="idNum" placeholder="Enter your ID number">
        </div>
        <div class="fg"><div class="fl">ID Photo (Front)</div>
          <label class="img-upload-zone" for="idPhotoFront">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <div class="img-upload-title">Upload front of ID</div>
            <div class="img-upload-sub">JPG or PNG</div>
          </label>
          <input type="file" id="idPhotoFront" accept="image/*" capture style="display:none">
        </div>
        <button class="btn-pri" onclick="H._profileVerify.submit()">Submit for Verification</button>
      </div>
    </div>`;
  };

  pages.ProfileVerify_after = function () {
    H._profileVerify = {
      submit: () => {
        const idNum = document.getElementById('idNum')?.value.trim();
        if (!idNum) { H.toast('Please enter your ID number'); return; }
        const u = H.currentUser();
        u.verificationPending = true;
        H.saveState();
        H.toast('Verification submitted. We will review within 24h.');
        H.goBack();
      }
    };
  };

  // ── Reviews & Ratings ────────────────────────────────────
  pages.Reviews = function (params) {
    const viewId = params && params.id;
    const me = H.currentUser();
    const u  = viewId ? (H.state.users || []).find(x => x.id === viewId) : me;
    if (!u) return '<div class="page active">' + H.innerTopbar('Reviews') + H.emptyState('User not found', '', null, null) + '</div>';

    const isOwn = !viewId || (me && viewId === me.id);
    const reviews = u.reviews || [];
    const avg = reviews.length ? (reviews.reduce((a,r) => a + (r.rating||0), 0) / reviews.length).toFixed(1) : null;
    const dist = [5,4,3,2,1].map(n => ({ n, count: reviews.filter(r => Math.round(r.rating||0)===n).length }));
    const maxDist = Math.max(1, ...dist.map(d => d.count));

    const alreadyReviewed = me && reviews.some(r => r.reviewerId === me.id);

    return `<div class="page active">
      ${H.innerTopbar(isOwn ? 'My Reviews' : H.escHtml(u.name) + '\'s Reviews')}

      <div style="background:var(--card);padding:20px 16px;border-bottom:1px solid var(--border)">
        <div style="display:flex;gap:20px;align-items:center">
          <div style="text-align:center">
            <div style="font-size:52px;font-weight:900;color:var(--text);line-height:1">${avg || '–'}</div>
            <div style="display:flex;justify-content:center;gap:2px;margin:6px 0">${avg ? stars(parseFloat(avg)) : stars(0)}</div>
            <div style="font-size:12px;color:var(--sub)">${reviews.length} review${reviews.length===1?'':'s'}</div>
          </div>
          <div style="flex:1">
            ${dist.map(d => `<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
              <div style="font-size:11px;color:var(--sub);width:8px">${d.n}</div>
              <div style="flex:1;height:6px;background:var(--border);border-radius:3px;overflow:hidden">
                <div style="height:100%;background:#f59e0b;width:${Math.round((d.count/maxDist)*100)}%;border-radius:3px;transition:width .3s"></div>
              </div>
              <div style="font-size:11px;color:var(--sub);width:14px;text-align:right">${d.count}</div>
            </div>`).join('')}
          </div>
        </div>
        ${!isOwn && me && !alreadyReviewed ? `
        <button onclick="H.leaveReview('${u.id}')" style="width:100%;margin-top:16px;padding:12px;background:#1A3A8F;color:#fff;border:none;border-radius:12px;font-size:14px;font-weight:700;cursor:pointer">
          Leave a Review
        </button>` : ''}
        ${!isOwn && me && alreadyReviewed ? `<div style="text-align:center;margin-top:14px;font-size:13px;color:var(--sub)">You have already reviewed this seller</div>` : ''}
      </div>

      <div style="padding:12px 14px 88px">
        ${reviews.length ? reviews.slice().sort((a,b) => b.date - a.date).slice(0,20).map(r => `
          <div style="background:var(--card);border-radius:14px;padding:14px;margin-bottom:10px;border:1px solid var(--border)">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px">
              <div>
                <div style="font-size:14px;font-weight:700;color:var(--text)">${H.escHtml(r.reviewerName || 'Anonymous')}</div>
                <div style="display:flex;gap:2px;margin-top:3px">${stars(r.rating||0)}</div>
              </div>
              <div style="font-size:12px;color:var(--sub)">${H.timeAgo(r.date)}</div>
            </div>
            ${r.text ? `<div style="font-size:13px;color:var(--text);line-height:1.6;margin-top:8px">${H.escHtml(r.text)}</div>` : ''}
          </div>`).join('')
          : `<div style="text-align:center;padding:48px 20px">
            <div style="font-size:40px;margin-bottom:12px">⭐</div>
            <div style="font-size:17px;font-weight:700;color:var(--text);margin-bottom:6px">No reviews yet</div>
            <div style="font-size:13px;color:var(--sub)">Reviews from buyers will appear here after transactions</div>
          </div>`}
      </div>
    </div>`;
  };

  // ── Leave a Review ────────────────────────────────────────
  H.leaveReview = function (sellerId) {
    const me = H.currentUser();
    if (!me) { H.requireAuth('Sign in to leave a review'); return; }
    if (sellerId === me.id) { H.toast('You cannot review yourself'); return; }

    let selectedRating = 0;

    H.modal({
      title: 'Leave a Review',
      body: `<div style="text-align:center;margin-bottom:14px">
        <div style="font-size:13px;color:var(--sub);margin-bottom:10px">Tap to rate your experience</div>
        <div id="starPicker" style="display:flex;justify-content:center;gap:8px">
          ${[1,2,3,4,5].map(n => `<button data-star="${n}" onclick="H._pickStar(${n})" style="font-size:32px;background:none;border:none;cursor:pointer;padding:4px;line-height:1">☆</button>`).join('')}
        </div>
      </div>
      <textarea id="reviewText" rows="3" placeholder="Share your experience with this seller…" style="width:100%;padding:12px;border:1.5px solid var(--border);border-radius:12px;font-size:13px;background:var(--card);color:var(--text);outline:none;box-sizing:border-box;resize:vertical;font-family:Inter,sans-serif"></textarea>`,
      confirmText: 'Submit Review',
      onConfirm: () => {
        const rating = H._selectedStar || 0;
        const text   = (document.getElementById('reviewText') || {}).value || '';
        if (!rating) { H.toast('Please select a star rating'); return false; }
        H._submitReview(sellerId, rating, text);
      }
    });
  };

  H._selectedStar = 0;
  H._pickStar = function (n) {
    H._selectedStar = n;
    const btns = document.querySelectorAll('#starPicker button');
    btns.forEach(function(b) {
      const v = parseInt(b.getAttribute('data-star'));
      b.textContent = v <= n ? '★' : '☆';
      b.style.color = v <= n ? '#f59e0b' : 'var(--sub)';
    });
  };

  H._submitReview = function (sellerId, rating, text) {
    const me = H.currentUser(); if (!me) return;
    const seller = (H.state.users || []).find(x => x.id === sellerId); if (!seller) return;
    seller.reviews  = seller.reviews  || [];
    seller.ratings  = seller.ratings  || [];
    const dup = seller.reviews.find(r => r.reviewerId === me.id);
    if (dup) { H.toast('You have already reviewed this seller'); return; }
    const review = {
      id: H.uid(), reviewerId: me.id, reviewerName: me.name || 'User',
      rating, text, date: Date.now()
    };
    seller.reviews.unshift(review);
    seller.ratings.push(rating);
    H.saveState();
    H.pushNotif(sellerId, 'New Review', me.name + ' left you a ' + rating + '-star review', 'review');
    H.toast('Review submitted. Thank you!');
    H.renderPage('Reviews', {id: sellerId});
  };

  // ── Applied Jobs (candidate view) ─────────────────────────
  // Registered as pages.AppliedJobs in jobs.js — linked from account menu here
  H._openAppliedJobs = function () { H.openInner('AppliedJobs'); };

})(window.H = window.H || {});
;/* === www/js/wallet.js === */
'use strict';
(function (H) {
  const pages = H.pages;
  const { escHtml, uid, fmtPrice, pushNotif } = H;

  const I = {
    boost:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    down:   '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>',
    up:     '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
    copy:   '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    check:  '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>',
    plus:   '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    wallet: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
    info:   '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
  };

  // Payment method definitions — real Zimbabwean details
  const METHODS = {
    ecocash: {
      id: 'ecocash', label: 'EcoCash', network: 'Econet Wireless',
      color: '#00A651', bg: '#F0FDF4', border: '#86EFAC', textColor: '#15803d',
      number: '+263 77 734 1565', rawNumber: '+263777341565',
      name: 'Prince Chakusa',
      steps: ['Open EcoCash on your phone', 'Select "Send Money"', 'Enter number: +263 77 734 1565', 'Enter the USD amount', 'Use your name as the reference / reason', 'Note the EcoCash reference number from the confirmation SMS'],
    },
    onemoney: {
      id: 'onemoney', label: 'OneMoney', network: 'NetOne',
      color: '#E65C00', bg: '#FFF7F0', border: '#FDBA74', textColor: '#9a3412',
      number: '+263 77 734 1565', rawNumber: '+263777341565',
      name: 'Prince Chakusa',
      steps: ['Open OneMoney on your phone', 'Select "Send Money"', 'Enter number: +263 77 734 1565', 'Enter the USD amount', 'Use your name as the reference / reason', 'Note the OneMoney reference number from the confirmation SMS'],
    },
    bank: {
      id: 'bank', label: 'Bank Transfer', network: 'CBZ Bank Zimbabwe',
      color: '#1A3A8F', bg: '#EFF6FF', border: '#BFDBFE', textColor: '#1e40af',
      account: '05121050340078', rawAccount: '05121050340078',
      name: 'Prince Chakusa',
      bankName: 'CBZ Bank Zimbabwe',
      branch: 'Harare Main',
      steps: ['Log in to your CBZ online banking or visit a branch', 'Select "Transfer / Pay"', 'Enter account: 05121050340078', 'Account name: Prince Chakusa', 'Enter the USD amount', 'Use your name as reference', 'Note the transaction reference number'],
    },
  };

  let _boostState = { planId: 'standard', listingId: null };

  // ── BOOST ──────────────────────────────────────────────────
  pages.Boost = function ({ listingId }) {
    const u        = H.currentUser();
    const myActive = (H.state.listings || []).filter(l => l.sellerId === u.id && l.status === 'active');
    if (!myActive.length) {
      return `<div class="page active">${H.innerTopbar('Boost a Listing')}
        <div class="empty-H.state">
          <div class="empty-icon">${I.boost}</div>
          <div class="empty-title">No active listings</div>
          <div class="empty-sub">Post a listing first, then come back to boost it.</div>
          <button class="btn-pri" style="max-width:240px;margin-top:10px" onclick="H.navTo('Post',null)">Post an Ad</button>
        </div>
      </div>`;
    }

    _boostState.listingId = listingId || myActive[0].id;
    const sel = H.BOOST_PLANS.find(p => p.id === _boostState.planId) || H.BOOST_PLANS[0];

    return `<div class="page active">${H.innerTopbar('Boost a Listing')}
      <div class="boost-hero">
        <div class="boost-hero-title">${I.boost} Get More Eyes</div>
        <div class="boost-hero-sub">Boosted listings appear at the top of search results</div>
      </div>
      <div class="inner-content">
        <div class="fl">Select listing</div>
        <select class="fi" style="margin-bottom:14px" id="boostListing" onchange="H._boost.setListing(this.value)">
          ${myActive.map(l => `<option value="${l.id}" ${_boostState.listingId === l.id ? 'selected' : ''}>${escHtml(l.title)} · ${escHtml(fmtPrice(l.price, l.currency))}</option>`).join('')}
        </select>
        <div class="fl">Choose boost plan</div>
        ${H.BOOST_PLANS.map(p => `
          <div class="boost-plan ${_boostState.planId === p.id ? 'sel' : ''}" onclick="H._boost.selectPlan('${p.id}')">
            <div class="boost-plan-top">
              <div>
                <span class="boost-plan-name">${p.name}</span>
                ${p.badgeText ? `<span class="boost-plan-badge ${p.badge || ''}">${p.badgeText}</span>` : ''}
              </div>
              <div class="boost-plan-price">$${p.price}</div>
            </div>
            <div class="boost-plan-desc">${p.desc}</div>
          </div>`).join('')}

        <div style="background:var(--n4);border:1px solid var(--n5);padding:11px 14px;border-radius:12px;margin:12px 0;font-size:13px;color:var(--sub)">
          Wallet balance: <strong style="color:var(--n2)">$${(u.walletUSD || 0).toFixed(2)}</strong>
        </div>
        <button class="btn-submit" onclick="H._boost.activate()">
          Activate ${sel.name} · $${sel.price}
        </button>
        <div style="text-align:center;font-size:12px;color:var(--sub);margin-top:8px">Top up via EcoCash, OneMoney or bank transfer</div>
      </div>
    </div>`;
  };

  H._boost = {
    setListing(id) { _boostState.listingId = id; },
    selectPlan(pid) { _boostState.planId = pid; H.renderPage('Boost', { listingId: _boostState.listingId }); },
    activate() {
      const u    = H.currentUser();
      const plan = H.BOOST_PLANS.find(p => p.id === _boostState.planId);
      const l    = H.state.listings.find(x => x.id === _boostState.listingId);
      if (!l) return;
      if ((u.walletUSD || 0) < plan.price) {
        H.modal({
          title: 'Insufficient Balance',
          body: `<div style="font-size:14px;line-height:1.6">You need <strong>$${(plan.price - (u.walletUSD || 0)).toFixed(2)}</strong> more to activate this boost.<br><br>Top up via EcoCash, OneMoney or bank transfer.</div>`,
          confirmText: 'Top Up Now',
          onConfirm: () => { H.openInner('TopUp'); }
        });
        return;
      }
      u.walletUSD = +(u.walletUSD - plan.price).toFixed(2);
      l.boost = { plan: plan.id, until: Date.now() + plan.days * 86400000 };
      H.state.txns = H.state.txns || [];
      H.state.txns.unshift({ id: uid(), userId: u.id, type: 'boost', amt: -plan.price, t: Date.now(), note: `${plan.name} · ${l.title}` });
      pushNotif(u.id, 'Boost Activated!', `${l.title} is now boosted for ${plan.days} days.`);
      H.saveState();
      H.toast('Boost activated!');
      H.goBack();
    }
  };

  // ── WALLET ─────────────────────────────────────────────────
  pages.Wallet = function () {
    const u = H.currentUser();
    if (!u) return `<div class="page active">${H.innerTopbar('Wallet')}${H.emptyState('Not signed in', 'Sign in to access your wallet', 'Sign In', "H.authPage()")}</div>`;

    const txns    = (H.state.txns || []).filter(t => t.userId === u.id).slice(0, 50);
    const pending = (H.state.topupRequests || []).filter(r => r.userId === u.id && r.status === 'pending');
    const bal     = (u.walletUSD || 0).toFixed(2);

    const typeLabel = { topup: 'Wallet Top Up', boost: 'Listing Boost', fee: 'Platform Fee' };

    const txRow = (t) => {
      const isIn  = t.amt > 0;
      const label = H.escHtml(typeLabel[t.type] || t.note || 'Transaction');
      const bg    = isIn ? '#F0FDF4' : t.type === 'boost' ? '#FFF7ED' : '#FEF2F2';
      const ic    = isIn ? '#00A651' : t.type === 'boost' ? '#D97706' : '#ef4444';
      const icon  = isIn ? I.down : t.type === 'boost' ? I.boost : I.up;
      const dateStr = new Date(t.t || Date.now()).toLocaleDateString('en-ZW', { day:'numeric', month:'short', year:'numeric' });
      return `<div style="display:flex;align-items:center;gap:12px;padding:14px 0;border-bottom:1px solid var(--border)">
        <div style="width:40px;height:40px;border-radius:12px;background:${bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;color:${ic}">${icon}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:14px;font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${label}</div>
          <div style="font-size:11px;color:var(--sub);margin-top:2px">${dateStr}</div>
        </div>
        <div style="font-size:15px;font-weight:800;color:${isIn ? '#00A651' : '#ef4444'};flex-shrink:0">${isIn ? '+' : ''}$${Math.abs(t.amt).toFixed(2)}</div>
      </div>`;
    };

    const pendingRow = (r) => {
      const m = METHODS[r.methodId] || METHODS.ecocash;
      const dateStr = new Date(r.t || Date.now()).toLocaleDateString('en-ZW', { day:'numeric', month:'short' });
      return `<div style="display:flex;align-items:center;gap:12px;padding:14px 0;border-bottom:1px solid var(--border)">
        <div style="width:40px;height:40px;border-radius:12px;background:${m.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;color:${m.color}">${I.down}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:14px;font-weight:600;color:var(--text)">Top Up · ${H.escHtml(r.method)}</div>
          <div style="font-size:11px;color:var(--sub);margin-top:2px">$${r.amount.toFixed(2)} · Ref: ${H.escHtml(r.reference)} · ${dateStr}</div>
        </div>
        <span style="font-size:10px;font-weight:700;color:#D97706;background:#FFFBEB;border:1px solid #FDE68A;padding:3px 8px;border-radius:8px;flex-shrink:0">Verifying</span>
      </div>`;
    };

    const allRows = [...pending.map(pendingRow), ...txns.map(txRow)];

    // Spend options
    const spendItems = [
      { label: 'Boost a Listing', desc: 'From $2/day · appear at top of results', icon: I.boost, color: '#F5A623', action: "H.openInner('Boost')" },
    ];

    return `<div class="page active">
      ${H.innerTopbar('Wallet')}

      <!-- Balance Card -->
      <div style="background:linear-gradient(135deg,#1A3A8F 0%,#2952cc 100%);margin:16px;border-radius:22px;padding:26px 22px 22px">
        <div style="font-size:11px;font-weight:600;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:.8px;margin-bottom:8px">Hostly Wallet Balance</div>
        <div style="font-size:42px;font-weight:900;color:#fff;letter-spacing:-2px;line-height:1;margin-bottom:4px">$${bal}</div>
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-bottom:22px">United States Dollar (USD)</div>
        <button onclick="H.openInner('TopUp')"
          style="width:100%;padding:14px;background:rgba(255,255,255,.18);border:1.5px solid rgba(255,255,255,.4);border-radius:14px;color:#fff;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:8px">
          ${I.plus} Top Up via EcoCash / Bank
        </button>
      </div>

      <!-- How to spend -->
      <div style="margin:0 16px 16px">
        <div style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.6px;margin-bottom:10px">Use Your Balance</div>
        ${spendItems.map(s => `
          <div onclick="${s.action}" style="display:flex;align-items:center;gap:14px;background:var(--card);border:1px solid var(--border);border-radius:14px;padding:14px 16px;cursor:pointer;-webkit-tap-highlight-color:transparent;margin-bottom:8px">
            <div style="width:40px;height:40px;border-radius:12px;background:#FFF7ED;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:${s.color}">${s.icon}</div>
            <div style="flex:1">
              <div style="font-size:14px;font-weight:700;color:var(--text)">${s.label}</div>
              <div style="font-size:12px;color:var(--sub);margin-top:2px">${s.desc}</div>
            </div>
            <div style="color:var(--sub)">›</div>
          </div>`).join('')}
      </div>

      <!-- Accepted methods info -->
      <div style="margin:0 16px 16px">
        <div style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.6px;margin-bottom:10px">Accepted Payment Methods</div>
        <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;overflow:hidden">
          ${[
            { label: 'EcoCash', sub: 'Econet Wireless · +263 77 734 1565', color: '#00A651', bg: '#F0FDF4' },
            { label: 'OneMoney', sub: 'NetOne · +263 77 734 1565', color: '#E65C00', bg: '#FFF7F0' },
            { label: 'Bank Transfer', sub: 'CBZ Bank Zimbabwe', color: '#1A3A8F', bg: '#EFF6FF' },
          ].map((m, i, arr) => `
            <div style="display:flex;align-items:center;gap:12px;padding:13px 16px;${i < arr.length-1 ? 'border-bottom:1px solid var(--border)' : ''}">
              <div style="width:10px;height:10px;border-radius:50%;background:${m.color};flex-shrink:0"></div>
              <div style="flex:1">
                <div style="font-size:14px;font-weight:600;color:var(--text)">${m.label}</div>
                <div style="font-size:11px;color:var(--sub)">${m.sub}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>

      <!-- Transaction History -->
      <div style="margin:0 16px">
        <div style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.6px;margin-bottom:10px">
          Transaction History
          ${pending.length ? `<span style="background:#FFFBEB;color:#D97706;border:1px solid #FDE68A;font-size:10px;padding:2px 8px;border-radius:8px;margin-left:6px;font-weight:700">${pending.length} verifying</span>` : ''}
        </div>
        <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:0 14px">
          ${allRows.length
            ? allRows.join('')
            : `<div style="padding:36px 16px;text-align:center">
                <div style="font-size:32px;margin-bottom:8px">💳</div>
                <div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:4px">No transactions yet</div>
                <div style="font-size:12px;color:var(--sub)">Top up your wallet to get started</div>
              </div>`}
        </div>
      </div>

      <div style="height:36px"></div>
    </div>`;
  };

  pages.Payments = pages.Wallet;

  // ── TOP UP ─────────────────────────────────────────────────
  pages.TopUp = function (params) {
    const u = H.currentUser();
    if (!u) return `<div class="page active">${H.innerTopbar('Top Up')}${H.emptyState('Not signed in', '', 'Sign In', "H.authPage()")}</div>`;

    const reason = (params && params.reason) || '';
    const preset = (params && params.amount) ? String(params.amount) : '';

    const methodBtn = (m, active) =>
      `<button id="tuBtn_${m.id}" onclick="H._topup.setMethod('${m.id}')"
        style="flex:1;padding:12px 4px;border-radius:12px;border:2px solid ${active ? m.color : 'var(--border)'};background:${active ? m.bg : 'var(--card)'};cursor:pointer;font-family:inherit;transition:all .15s">
        <div style="font-size:13px;font-weight:700;color:${active ? m.color : 'var(--sub)'}">${m.label}</div>
        <div style="font-size:10px;color:${active ? m.textColor : 'var(--sub)'};margin-top:2px;opacity:.8">${m.network}</div>
      </button>`;

    const detailRow = (label, value, copyVal) =>
      `<div style="display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid rgba(0,0,0,.06)">
        <div style="font-size:12px;color:var(--sub);font-weight:500">${label}</div>
        <div style="display:flex;align-items:center;gap:8px">
          <div style="font-size:13px;font-weight:700;color:var(--text)">${H.escHtml(value)}</div>
          ${copyVal ? `<button onclick="H._topup.copy('${H.escHtml(copyVal)}','${label}')" style="background:none;border:none;color:var(--sub);cursor:pointer;padding:2px;line-height:1">${I.copy}</button>` : ''}
        </div>
      </div>`;

    const eco  = METHODS.ecocash;
    const one  = METHODS.onemoney;
    const bank = METHODS.bank;

    return `<div class="page active">
      ${H.innerTopbar('Top Up Wallet')}
      <div class="form-wrap">

        ${reason ? `<div style="background:#EFF6FF;border:1.5px solid #BFDBFE;border-radius:12px;padding:12px 14px;margin-bottom:4px;font-size:13px;color:#1e40af;font-weight:600">${I.info} Topping up for: ${H.escHtml(reason)}</div>` : ''}

        <!-- How it works -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:14px 16px;margin-bottom:4px">
          <div style="font-size:13px;font-weight:700;color:var(--text);margin-bottom:10px">How to top up</div>
          <div style="display:flex;flex-direction:column;gap:8px">
            ${['Send money to us using EcoCash, OneMoney, or bank transfer','Use your name as the payment reference','Copy the reference number from your confirmation SMS','Enter the reference below and submit — admin verifies within 24 hours'].map((s,i) =>
              `<div style="display:flex;gap:10px;align-items:flex-start">
                <div style="width:22px;height:22px;border-radius:50%;background:#1A3A8F;color:#fff;font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px">${i+1}</div>
                <div style="font-size:13px;color:var(--sub);line-height:1.5">${s}</div>
              </div>`
            ).join('')}
          </div>
        </div>

        <!-- Store compliance notice -->
        <div style="background:#FFFBEB;border:1.5px solid #FDE68A;border-radius:12px;padding:12px 14px;margin-bottom:4px;display:flex;gap:10px;align-items:flex-start">
          <div style="color:#D97706;flex-shrink:0;margin-top:1px">${I.info}</div>
          <div style="font-size:12px;color:#92400E;line-height:1.6">
            <strong>External Payment — Not an In-App Purchase.</strong> Advertising credits are purchased via mobile money or bank transfer directly to Hostly. This transaction is not processed by Google Play or the Apple App Store.
            Need help? <a href="https://wa.me/971589772645" style="color:#D97706;font-weight:700;text-decoration:none">WhatsApp us</a> or email <a href="mailto:chakusaprince@gmail.com" style="color:#D97706;font-weight:700;text-decoration:none">chakusaprince@gmail.com</a>
          </div>
        </div>

        <!-- Method Selector -->
        <div class="fg">
          <div class="fl">Select Payment Method</div>
          <div style="display:flex;gap:8px;margin-top:6px">
            ${methodBtn(eco, true)}
            ${methodBtn(one, false)}
            ${methodBtn(bank, false)}
          </div>
        </div>

        <!-- EcoCash Details -->
        <div id="tuDetails_ecocash" style="background:${eco.bg};border:1.5px solid ${eco.border};border-radius:14px;padding:16px">
          <div style="font-size:13px;font-weight:700;color:${eco.textColor};margin-bottom:12px">Send to this EcoCash number:</div>
          <div style="font-size:26px;font-weight:900;color:${eco.color};letter-spacing:2px;margin-bottom:4px">${eco.number}</div>
          <div style="font-size:12px;color:${eco.textColor};margin-bottom:12px">Account name: <strong>${eco.name}</strong></div>
          ${detailRow('Network', 'Econet Wireless (EcoCash)', null)}
          ${detailRow('Send to', eco.number, eco.rawNumber)}
          ${detailRow('Account name', eco.name, eco.name)}
          ${detailRow('Reference', H.currentUser()?.name || 'Your name', H.currentUser()?.name || '')}
        </div>

        <!-- OneMoney Details -->
        <div id="tuDetails_onemoney" style="display:none;background:${one.bg};border:1.5px solid ${one.border};border-radius:14px;padding:16px">
          <div style="font-size:13px;font-weight:700;color:${one.textColor};margin-bottom:12px">Send to this OneMoney number:</div>
          <div style="font-size:26px;font-weight:900;color:${one.color};letter-spacing:2px;margin-bottom:4px">${one.number}</div>
          <div style="font-size:12px;color:${one.textColor};margin-bottom:12px">Account name: <strong>${one.name}</strong></div>
          ${detailRow('Network', 'NetOne (OneMoney)', null)}
          ${detailRow('Send to', one.number, one.rawNumber)}
          ${detailRow('Account name', one.name, one.name)}
          ${detailRow('Reference', H.currentUser()?.name || 'Your name', H.currentUser()?.name || '')}
        </div>

        <!-- Bank Transfer Details -->
        <div id="tuDetails_bank" style="display:none;background:${bank.bg};border:1.5px solid ${bank.border};border-radius:14px;padding:16px">
          <div style="font-size:13px;font-weight:700;color:${bank.textColor};margin-bottom:12px">Bank Transfer Details:</div>
          ${detailRow('Bank', bank.bankName, null)}
          ${detailRow('Account Name', bank.name, bank.name)}
          ${detailRow('Account No.', bank.account, bank.rawAccount)}
          ${detailRow('Branch', bank.branch, null)}
          ${detailRow('Reference', H.currentUser()?.name || 'Your name', H.currentUser()?.name || '')}
        </div>

        <!-- Quick Amount Presets -->
        <div class="fg">
          <div class="fl">Select Amount (USD)</div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px">
            ${[2,5,10,20,50].map(amt =>
              `<button onclick="H._topup.setAmt(${amt})" id="tuPreset_${amt}"
                style="padding:10px 0;border-radius:10px;border:2px solid var(--border);background:var(--card);font-size:14px;font-weight:700;color:var(--text);cursor:pointer;font-family:inherit;flex:1;min-width:48px">
                $${amt}
              </button>`
            ).join('')}
          </div>
          <input class="fi" id="tuAmt" type="number" min="1" step="1" placeholder="Or enter custom amount"
            style="margin-top:8px" oninput="H._topup.clearPresets()"
            value="${preset}">
        </div>

        <!-- Reference -->
        <div class="fg">
          <div class="fl">Transaction Reference</div>
          <input class="fi" id="tuRef" placeholder="e.g. ECO123456789" autocapitalize="characters" autocomplete="off">
          <div style="font-size:12px;color:var(--sub);margin-top:5px;line-height:1.5">
            The reference / confirmation code from your EcoCash, OneMoney, or bank SMS after sending payment
          </div>
        </div>

        <div id="tuErr" style="display:none;background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;color:#ef4444;font-size:13px;font-weight:600;padding:10px 12px;margin-bottom:4px"></div>

        <button id="tuSubmitBtn" class="btn-pri" onclick="H._topup.submit()">
          I Have Paid — Submit for Verification
        </button>
        <div style="text-align:center;font-size:12px;color:var(--sub);margin-top:6px;line-height:1.5">
          Admin verifies within 24 hours · Your wallet will be credited automatically
        </div>
        <button class="btn-sec" onclick="H.goBack()">Cancel</button>
      </div>
    </div>`;
  };

  pages.TopUp_after = function (params) {
    const preset = params && params.amount ? String(params.amount) : null;

    H._topup = {
      method: 'ecocash',

      setMethod(m) {
        this.method = m;
        Object.keys(METHODS).forEach(id => {
          const panel = document.getElementById('tuDetails_' + id);
          const btn   = document.getElementById('tuBtn_' + id);
          const cfg   = METHODS[id];
          const active = id === m;
          if (panel) panel.style.display = active ? '' : 'none';
          if (btn) {
            btn.style.borderColor = active ? cfg.color : 'var(--border)';
            btn.style.background  = active ? cfg.bg : 'var(--card)';
            btn.querySelector('div').style.color = active ? cfg.color : 'var(--sub)';
          }
        });
      },

      setAmt(v) {
        const inp = document.getElementById('tuAmt');
        if (inp) inp.value = v;
        [2,5,10,20,50].forEach(a => {
          const b = document.getElementById('tuPreset_' + a);
          if (!b) return;
          const active = a === v;
          b.style.borderColor = active ? '#1A3A8F' : 'var(--border)';
          b.style.background  = active ? '#EFF6FF' : 'var(--card)';
          b.style.color       = active ? '#1A3A8F' : 'var(--text)';
        });
      },

      clearPresets() {
        [2,5,10,20,50].forEach(a => {
          const b = document.getElementById('tuPreset_' + a);
          if (b) { b.style.borderColor = 'var(--border)'; b.style.background = 'var(--card)'; b.style.color = 'var(--text)'; }
        });
      },

      copy(text, label) {
        const clean = text.replace(/\s/g, '');
        if (navigator.clipboard) {
          navigator.clipboard.writeText(clean).then(() => H.toast(`${label} copied!`)).catch(() => H.toast(clean));
        } else {
          H.toast(clean);
        }
      },

      submit() {
        const amt    = parseFloat(document.getElementById('tuAmt')?.value);
        const ref    = (document.getElementById('tuRef')?.value || '').trim().toUpperCase();
        const errEl  = document.getElementById('tuErr');
        const btn    = document.getElementById('tuSubmitBtn');
        const showErr = (msg) => { if (errEl) { errEl.textContent = msg; errEl.style.display = ''; } };
        if (errEl) errEl.style.display = 'none';

        if (!amt || amt < 1)   { showErr('Please enter an amount of at least $1.00'); return; }
        if (amt > 5000)        { showErr('Maximum single top-up is $5,000. Contact support for larger amounts.'); return; }
        if (!ref)              { showErr('Please enter the transaction reference from your SMS'); return; }
        if (ref.length < 6)    { showErr('Reference seems too short — double-check your SMS'); return; }

        const duplicate = (H.state.topupRequests || []).some(r => r.reference.toUpperCase() === ref);
        if (duplicate) { showErr('This reference has already been submitted. Contact support if this is an error.'); return; }

        if (btn) { btn.disabled = true; btn.textContent = 'Submitting…'; }

        const u   = H.currentUser();
        const cfg = METHODS[this.method] || METHODS.ecocash;
        H.state.topupRequests = H.state.topupRequests || [];
        H.state.topupRequests.push({
          id: H.uid(), userId: u.id, userName: u.name,
          amount: amt, method: cfg.label, methodId: this.method,
          reference: ref, status: 'pending', t: Date.now()
        });
        H.saveState();
        H.pushNotif && H.pushNotif(u.id, 'Top-up Submitted', `$${amt.toFixed(2)} via ${cfg.label} — reference ${ref}. Admin will verify within 24 hours.`, 'info');
        H.toast('Submitted! Admin will verify within 24 hours.');
        H.goBack();
      }
    };

    // Apply preset from params
    if (preset) H._topup.setAmt(Number(preset));
  };

  H._wallet   = {};
  H.showTopUp = () => H.openInner('TopUp');

  // Legacy copy helper used in other pages
  H._copyText = function (el) {
    const text = (el && el.dataset) ? el.dataset.v : String(el);
    if (navigator.clipboard) navigator.clipboard.writeText(text);
    H.toast('Copied: ' + text);
  };

})(window.H);

;/* === www/js/settings.js === */
'use strict';
(function (H) {
  const pages = H.pages;
  const I = {
    palette: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    bell:   '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
    lock:   '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    shield: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    globe:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none"/></svg>',
    ban:    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>',
    sun:    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    moon:   '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    settings:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    phone:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 2.1.74 3.26a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.16.38 2.3.61 3.26.74a2 2 0 0 1 1.72 2.03z"/></svg>',
    key:    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>',
    eye:    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    message:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    heart:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    clock:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    check:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
    star:   '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    alert:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    list:   '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
    smartphone:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
    trash:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>'
  };

  // --- Settings Page ----------------------------------------
  pages.Settings = function () {
    const u = H.currentUser();

    return `<div class="page active">
      ${H.innerTopbar('Settings')}
      
      <div class="settings-section">
        <div class="section-title">Appearance</div>
        <button class="settings-item" onclick="H.openInner('ThemeSettings')">
          <span class="item-icon">${I.palette}</span>
          <span class="item-label">Theme</span>
          <span class="item-value">${u.settings && u.settings.theme ? u.settings.theme.charAt(0).toUpperCase() + u.settings.theme.slice(1) : 'Light'}</span>
        </button>
      </div>

      <div class="settings-section">
        <div class="section-title">Notifications</div>
        <button class="settings-item" onclick="H.openInner('NotificationSettings')">
          <span class="item-icon">${I.bell}</span>
          <span class="item-label">Notification Preferences</span>
          <span class="item-arrow">›</span>
        </button>
      </div>

      <div class="settings-section">
        <div class="section-title">Account & Privacy</div>
        <button class="settings-item" onclick="H.openInner('PrivacySettings')">
          <span class="item-icon">${I.lock}</span>
          <span class="item-label">Privacy Settings</span>
          <span class="item-arrow">›</span>
        </button>
        <button class="settings-item" onclick="H.openInner('SecuritySettings')">
          <span class="item-icon">${I.shield}</span>
          <span class="item-label">Security</span>
          <span class="item-arrow">›</span>
        </button>
        <button class="settings-item" onclick="H.openInner('LanguageSettings')">
          <span class="item-icon">${I.globe}</span>
          <span class="item-label">Language</span>
          <span class="item-value">${u.language || 'English'}</span>
        </button>
      </div>

      <div class="settings-section">
        <div class="section-title">Actions</div>
        <button class="settings-item" onclick="H.openInner('BlockedUsers')">
          <span class="item-icon">${I.ban}</span>
          <span class="item-label">Blocked Users</span>
          <span class="item-arrow">›</span>
        </button>
      </div>

      <div style="height:20px"></div>
    </div>`;
  };

  // --- Theme Settings ---------------------------------------
  pages.ThemeSettings = function () {
    const u = H.currentUser();
    const currentTheme = (u.settings && u.settings.theme) || 'light';

    return `<div class="page active">
      ${H.innerTopbar('Theme Settings')}
      <div class="form-wrap">
        <div class="theme-selector">
          <label class="theme-option ${currentTheme === 'light' ? 'selected' : ''}">
            <input type="radio" name="theme" value="light" ${currentTheme === 'light' ? 'checked' : ''} onchange="H._themeSettings.setTheme('light')">
            <span class="theme-preview" style="background:#F4F1EA">${I.sun}</span>
            <span>Light Mode</span>
          </label>

          <label class="theme-option ${currentTheme === 'dark' ? 'selected' : ''}">
            <input type="radio" name="theme" value="dark" ${currentTheme === 'dark' ? 'checked' : ''} onchange="H._themeSettings.setTheme('dark')">
            <span class="theme-preview" style="background:#111315">${I.moon}</span>
            <span>Dark Mode</span>
          </label>

          <label class="theme-option ${currentTheme === 'system' ? 'selected' : ''}">
            <input type="radio" name="theme" value="system" ${currentTheme === 'system' ? 'checked' : ''} onchange="H._themeSettings.setTheme('system')">
            <span class="theme-preview">${I.settings}</span>
            <span>System Default</span>
          </label>
        </div>
      </div>
    </div>`;
  };

  pages.ThemeSettings_after = function () {
    H._themeSettings = {
      setTheme: (theme) => {
        const u = H.currentUser();
        if (!u.settings) u.settings = {};
        u.settings.theme = theme;
        H.applyTheme();
        H.saveState();
        H.toast('Theme updated');
      }
    };
  };

  // --- Notification Settings --------------------------------
  pages.NotificationSettings = function () {
    const u = H.currentUser();
    const prefs = u.notificationPrefs || {
      messages: true,
      listings: true,
      approvals: true,
      promotions: true,
      favorites: true,
      security: true
    };

    return `<div class="page active">
      ${H.innerTopbar('Notification Preferences')}
      <div class="form-wrap">
        <div class="notif-section">
          <div class="section-title">Alerts</div>
          
          <div class="toggle-item">
            <div class="toggle-label">
              <span class="toggle-icon">${I.message}</span>
              <span>Messages</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" ${prefs.messages ? 'checked' : ''} onchange="H._notifSettings.toggle('messages')">
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="toggle-item">
            <div class="toggle-label">
              <span class="toggle-icon">${I.list}</span>
              <span>Listing Updates</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" ${prefs.listings ? 'checked' : ''} onchange="H._notifSettings.toggle('listings')">
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="toggle-item">
            <div class="toggle-label">
              <span class="toggle-icon">${I.check}</span>
              <span>Approval Status</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" ${prefs.approvals ? 'checked' : ''} onchange="H._notifSettings.toggle('approvals')">
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="toggle-item">
            <div class="toggle-label">
              <span class="toggle-icon">${I.star}</span>
              <span>Promotions</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" ${prefs.promotions ? 'checked' : ''} onchange="H._notifSettings.toggle('promotions')">
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="toggle-item">
            <div class="toggle-label">
              <span class="toggle-icon">${I.heart}</span>
              <span>Favorites Alerts</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" ${prefs.favorites ? 'checked' : ''} onchange="H._notifSettings.toggle('favorites')">
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="toggle-item">
            <div class="toggle-label">
              <span class="toggle-icon">${I.lock}</span>
              <span>Security Alerts</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" ${prefs.security ? 'checked' : ''} onchange="H._notifSettings.toggle('security')">
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>`;
  };

  pages.NotificationSettings_after = function () {
    const DEFAULTS = { messages: true, listings: true, approvals: true, promotions: true, favorites: true, security: true };
    H._notifSettings = {
      toggle: (key) => {
        const u = H.currentUser();
        if (!u.notificationPrefs) u.notificationPrefs = Object.assign({}, DEFAULTS);
        // Seed with default if key was never explicitly set
        if (!(key in u.notificationPrefs)) u.notificationPrefs[key] = DEFAULTS[key] !== false;
        u.notificationPrefs[key] = !u.notificationPrefs[key];
        H.saveState();
        H.toast(u.notificationPrefs[key] ? 'Enabled' : 'Disabled');
      }
    };
  };

  // --- Privacy Settings --------------------------------------
  pages.PrivacySettings = function () {
    const u = H.currentUser();
    const privacy = u.privacySettings || {
      profilePublic: true,
      showPhoneInListings: false,
      allowMessages: true,
      showActivity: false
    };

    return `<div class="page active">
      ${H.innerTopbar('Privacy Settings')}
      <div class="form-wrap">
        <div class="privacy-section">
          <div class="section-title">Profile Visibility</div>
          
          <div class="toggle-item">
            <div class="toggle-label">
              <span class="toggle-icon">${I.eye}</span>
              <span>Public Profile</span>
              <span class="toggle-desc">Others can view your profile</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" ${privacy.profilePublic ? 'checked' : ''} onchange="H._privacySettings.toggle('profilePublic')">
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="toggle-item">
            <div class="toggle-label">
              <span class="toggle-icon">${I.phone}</span>
              <span>Show Phone in Listings</span>
              <span class="toggle-desc">Sellers can see your phone number</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" ${privacy.showPhoneInListings ? 'checked' : ''} onchange="H._privacySettings.toggle('showPhoneInListings')">
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="toggle-item">
            <div class="toggle-label">
              <span class="toggle-icon">${I.message}</span>
              <span>Allow Direct Messages</span>
              <span class="toggle-desc">Others can message you directly</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" ${privacy.allowMessages ? 'checked' : ''} onchange="H._privacySettings.toggle('allowMessages')">
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="toggle-item">
            <div class="toggle-label">
              <span class="toggle-icon">${I.clock}</span>
              <span>Show Activity Status</span>
              <span class="toggle-desc">Others can see when you're online</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" ${privacy.showActivity ? 'checked' : ''} onchange="H._privacySettings.toggle('showActivity')">
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>`;
  };

  pages.PrivacySettings_after = function () {
    H._privacySettings = {
      toggle: (key) => {
        const u = H.currentUser();
        if (!u.privacySettings) u.privacySettings = {};
        u.privacySettings[key] = !u.privacySettings[key];
        H.saveState();
      }
    };
  };

  // --- Security Settings ------------------------------------
  pages.SecuritySettings = function () {
    return `<div class="page active">
      ${H.innerTopbar('Security Settings')}
      <div class="form-wrap">
        <div class="security-section">
          <div class="section-title">Account Security</div>
          
          <button class="settings-item" onclick="H.openInner('ChangePassword')">
            <span class="item-icon">${I.key}</span>
            <span class="item-label">Change Password</span>
            <span class="item-arrow">›</span>
          </button>

          <button class="settings-item" onclick="H.openInner('TwoFactor')">
            <span class="item-icon">${I.lock}</span>
            <span class="item-label">Two-Factor Authentication</span>
            <span class="item-arrow">›</span>
          </button>

          <button class="settings-item" onclick="H.openInner('ActiveSessions')">
            <span class="item-icon">${I.smartphone}</span>
            <span class="item-label">Active Sessions</span>
            <span class="item-arrow">›</span>
          </button>

          <button class="settings-item danger" onclick="H.openInner('DeleteAccount')">
            <span class="item-icon">${I.alert}</span>
            <span class="item-label">Delete Account</span>
            <span class="item-arrow">›</span>
          </button>
        </div>
      </div>
    </div>`;
  };

  // --- Language Settings ------------------------------------
  pages.LanguageSettings = function () {
    const u = H.currentUser();
    const currentLang = u.language || 'English';

    return `<div class="page active">
      ${H.innerTopbar('Language Settings')}
      <div class="form-wrap">
        <div class="language-selector">
          ${['English', 'Shona', 'Ndebele'].map(lang => `
            <label class="lang-option ${currentLang === lang ? 'selected' : ''}">
              <input type="radio" name="language" value="${lang}" ${currentLang === lang ? 'checked' : ''} onchange="H._languageSettings.setLang('${lang}')">
              <span>${lang}</span>
            </label>
          `).join('')}
        </div>
      </div>
    </div>`;
  };

  pages.LanguageSettings_after = function () {
    H._languageSettings = {
      setLang: (lang) => {
        const u = H.currentUser();
        u.language = lang;
        H.applyLanguage();
        H.saveState();
        H.toast('Language updated');
      }
    };
  };

  // --- Blocked Users ----------------------------------------
  pages.BlockedUsers = function () {
    const u = H.currentUser();
    const blocked = u.blockedUsers || [];

    return `<div class="page active">
      ${H.innerTopbar('Blocked Users')}
      <div class="form-wrap">
        ${blocked.length
          ? blocked.map(userId => {
              const user = H.state.users.find(us => us.id === userId);
              return `
                <div class="blocked-user-item">
                  <div class="user-info">
                    <div class="user-name">${user ? H.escHtml(user.name) : 'Unknown User'}</div>
                    <div class="user-detail">${user ? H.escHtml(user.phone) : 'N/A'}</div>
                  </div>
                  <button class="btn-unblock" onclick="H._blockedUsers.unblock('${userId}')">Unblock</button>
                </div>
              `;
            }).join('')
          : H.emptyState('No blocked users', 'Users you block won\'t be able to contact you')}
      </div>
    </div>`;
  };

  pages.BlockedUsers_after = function () {
    H._blockedUsers = {
      unblock: (userId) => {
        const u = H.currentUser();
        if (!u.blockedUsers) u.blockedUsers = [];
        u.blockedUsers = u.blockedUsers.filter(id => id !== userId);
        H.saveState();
        H.toast('User unblocked');
        H.openInner('BlockedUsers');
      }
    };
  };

})(window.H = window.H || {});

;/* === www/js/security_pages.js === */
'use strict';
(function (H) {
  const pages = H.pages;

  // -- CHANGE PASSWORD ---------------------------------------
  pages.ChangePassword = function () {
    return `<div class="page active">
      ${H.innerTopbar('Change Password')}
      <div class="form-wrap">
        <div style="background:#EFF6FF;border:1px solid #BFDBFE;border-radius:12px;padding:14px 16px;margin-bottom:16px;font-size:13px;color:#1E40AF;line-height:1.5">
          Password must be at least 8 characters and include uppercase, lowercase, a number, and a symbol.
        </div>
        <div class="fg">
          <div class="fl">New Password</div>
          <div style="position:relative">
            <input class="fi" type="password" id="newPass" placeholder="Enter new password" style="padding-right:44px"
              oninput="H._changePassword.checkStrength(this.value)">
            <button type="button" onclick="H._changePassword.toggleVis('newPass',this)"
              style="position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--sub);cursor:pointer;padding:4px">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
          <div id="passStrength" style="margin-top:6px;font-size:12px;font-weight:600"></div>
        </div>
        <div class="fg">
          <div class="fl">Confirm New Password</div>
          <input class="fi" type="password" id="confPass" placeholder="Re-enter new password"
            onkeydown="if(event.key==='Enter')H._changePassword.save()">
        </div>
        <div id="cpErrMsg" style="display:none;font-size:13px;color:#EF4444;padding:6px 0;font-weight:600"></div>
        <button id="cpSaveBtn" class="btn-pri" onclick="H._changePassword.save()">Update Password</button>
        <button class="btn-sec" onclick="H.goBack()">Cancel</button>
      </div>
    </div>`;
  };

  pages.ChangePassword_after = function () {
    H._changePassword = {
      toggleVis: (id, btn) => {
        const inp = document.getElementById(id);
        if (!inp) return;
        inp.type = inp.type === 'password' ? 'text' : 'password';
      },
      checkStrength: (val) => {
        const el = document.getElementById('passStrength');
        if (!el) return;
        if (!val) { el.textContent = ''; return; }
        const checks = [val.length >= 8, /[A-Z]/.test(val), /[a-z]/.test(val), /[0-9]/.test(val), /[^A-Za-z0-9]/.test(val)];
        const score = checks.filter(Boolean).length;
        const labels = ['','Very weak','Weak','Fair','Strong','Very strong'];
        const colors = ['','#EF4444','#F59E0B','#EAB308','#22C55E','#16A34A'];
        el.textContent = labels[score] || '';
        el.style.color = colors[score] || '';
      },
      save: async () => {
        const nw   = (document.getElementById('newPass')?.value || '').trim();
        const conf = (document.getElementById('confPass')?.value || '').trim();
        const btn  = document.getElementById('cpSaveBtn');
        const errEl = document.getElementById('cpErrMsg');
        const showErr = (msg) => { if(errEl){errEl.textContent=msg;errEl.style.display='';} };

        if (!nw || !conf) { showErr('Please fill in both password fields'); return; }
        if (nw.length < 8) { showErr('Password must be at least 8 characters'); return; }
        if (!/[A-Z]/.test(nw)) { showErr('Password must include at least one uppercase letter'); return; }
        if (!/[a-z]/.test(nw)) { showErr('Password must include at least one lowercase letter'); return; }
        if (!/[0-9]/.test(nw)) { showErr('Password must include at least one number'); return; }
        if (!/[^A-Za-z0-9]/.test(nw)) { showErr('Password must include at least one symbol (e.g. !@#$)'); return; }
        if (nw !== conf) { showErr('Passwords do not match'); return; }

        if (errEl) errEl.style.display = 'none';
        if (btn) { btn.disabled = true; btn.textContent = 'Updating…'; }

        const c = window.supabase && typeof window.supabase.from === 'function' ? window.supabase : null;
        if (c && c.auth) {
          const res = await c.auth.updateUser({ password: nw });
          if (res && res.error) {
            if (btn) { btn.disabled = false; btn.textContent = 'Update Password'; }
            showErr(res.error.message || 'Password update failed. Try again.');
            return;
          }
        } else {
          // Fallback for local-only mode
          const u = H.currentUser();
          if (u) { u._localPassword = nw; H.saveState(); }
        }

        if (btn) { btn.disabled = false; btn.textContent = 'Update Password'; }
        H.toast('Password updated successfully!');
        H.goBack();
      }
    };
  };

  pages.TwoFactor = function () {
    const u = H.currentUser();
    const enabled = u.twoFactorEnabled || false;
    return `<div class="page active">
      ${H.innerTopbar('Two-Factor Authentication')}
      <div class="form-wrap">
        <div class="section-box">
          <div class="verify-title">${enabled ? '2FA Enabled' : '2FA Disabled'}</div>
          <div class="verify-sub">${enabled ? 'Your account is protected.' : 'Add an extra layer of security.'}</div>
        </div>
        <div class="section-box">
          <div class="section-title">How it works</div>
          <div class="info-row"><span class="info-label">Step 1</span><span class="info-val">Enter your password</span></div>
          <div class="info-row"><span class="info-label">Step 2</span><span class="info-val">Get a code via SMS</span></div>
          <div class="info-row"><span class="info-label">Step 3</span><span class="info-val">Enter code to log in</span></div>
        </div>
        <button class="btn-pri" onclick="H._twoFactor.toggle()">${enabled ? 'Disable 2FA' : 'Enable 2FA'}</button>
        <button class="btn-sec" onclick="H.goBack()">Back</button>
      </div>
    </div>`;
  };

  pages.TwoFactor_after = function () {
    H._twoFactor = {
      toggle: () => {
        const u = H.currentUser();
        u.twoFactorEnabled = !u.twoFactorEnabled;
        H.saveState();
        H.toast(u.twoFactorEnabled ? '2FA enabled' : '2FA disabled');
        H.renderPage('TwoFactor');
      }
    };
  };

  pages.ActiveSessions = function () {
    const u = H.currentUser();
    const sessions = u.sessions || [{ id: 'current', device: 'This device', location: 'Zimbabwe', time: Date.now(), current: true }];
    return `<div class="page active">
      ${H.innerTopbar('Active Sessions')}
      <div class="form-wrap">
        <div class="section-box">
          <div class="section-title">Logged-in Devices</div>
          ${sessions.map(s => `
            <div class="info-row">
              <div>
                <div style="font-size:13px;font-weight:600;color:var(--charcoal)">${H.escHtml(s.device)}</div>
                <div style="font-size:11px;color:var(--ash);margin-top:2px">${H.escHtml(s.location)} · ${new Date(s.time).toLocaleDateString()}</div>
              </div>
              ${s.current ? '<span style="font-size:11px;font-weight:700;color:#16a34a;background:#dcfce7;padding:3px 10px;border-radius:20px">Current</span>'
                : `<button class="btn-unblock" onclick="H._sessions.revoke('${s.id}')">Revoke</button>`}
            </div>`).join('')}
        </div>
        <button class="btn-sec" style="background:var(--red2);color:var(--red)" onclick="H._sessions.revokeAll()">Sign Out All Other Devices</button>
        <button class="btn-sec" onclick="H.goBack()">Back</button>
      </div>
    </div>`;
  };

  pages.ActiveSessions_after = function () {
    H._sessions = {
      revoke: (id) => {
        const u = H.currentUser();
        u.sessions = (u.sessions || []).filter(s => s.id !== id);
        H.saveState(); H.toast('Session revoked'); H.renderPage('ActiveSessions');
      },
      revokeAll: () => {
        const u = H.currentUser();
        u.sessions = (u.sessions || []).filter(s => s.current);
        H.saveState(); H.toast('All other sessions signed out'); H.renderPage('ActiveSessions');
      }
    };
  };

  pages.DeleteAccount = function () {
    return `<div class="page active">
      ${H.innerTopbar('Delete Account')}
      <div class="form-wrap">
        <div class="section-box" style="border:1.5px solid rgba(192,57,43,.2);text-align:center;padding:24px">
          <div class="verify-title" style="color:var(--red)">Delete Account</div>
          <div class="verify-sub">This permanently deletes your account, listings, messages and wallet. Cannot be undone.</div>
        </div>
        <div class="section-box">
          <div class="section-title">What will be deleted</div>
          <div class="info-row"><span class="info-label">Profile</span><span class="info-val" style="color:var(--red)">Permanently removed</span></div>
          <div class="info-row"><span class="info-label">Listings</span><span class="info-val" style="color:var(--red)">All deleted</span></div>
          <div class="info-row"><span class="info-label">Messages</span><span class="info-val" style="color:var(--red)">All deleted</span></div>
          <div class="info-row"><span class="info-label">Wallet</span><span class="info-val" style="color:var(--red)">Balance forfeited</span></div>
        </div>
        <div class="fg">
          <div class="fl">Type DELETE to confirm</div>
          <input class="fi" id="deleteConfirm" placeholder="Type DELETE">
        </div>
        <button class="btn-pri" style="background:var(--red)" onclick="H._deleteAccount.confirm()">Permanently Delete Account</button>
        <button class="btn-sec" onclick="H.goBack()">Cancel · Keep Account</button>
      </div>
    </div>`;
  };

  pages.DeleteAccount_after = function () {
    H._deleteAccount = {
      confirm: () => {
        const val = document.getElementById('deleteConfirm')?.value?.trim();
        if (val !== 'DELETE') { H.toast('Type DELETE to confirm'); return; }
        const u = H.currentUser();
        H.state.listings      = (H.state.listings || []).filter(l => l.sellerId !== u.id);
        H.state.conversations = (H.state.conversations || []).filter(c => !c.members.includes(u.id));
        H.state.users         = (H.state.users || []).filter(x => x.id !== u.id);
        H.state.currentUserId = null;
        H.saveState();
        H.toast('Account deleted');
        H.navTo('Home', null);
      }
    };
  };

})(window.H = window.H || {});

;/* === www/js/help.js === */
'use strict';
(function (H) {
  const pages = H.pages;

  // Icons (prefer H.ICONS, fallback set)
  const I = (window.H && H.ICONS) || {};
  const S = {
    help:       '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    doc:        '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
    lock:       '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    users:      '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    mail:       '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    bug:        '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2l1.88 1.88"/><path d="M14.12 3.88L16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-4a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4c0 3.3-2.7 6-6 6z"/><path d="M3 7h2"/><path d="M19 7h2"/><path d="M3 13h2"/><path d="M19 13h2"/><line x1="6" y1="7" x2="6" y2="12"/><line x1="18" y1="7" x2="18" y2="12"/></svg>',
    message:    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    phone:      '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 2.1.74 3.26a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.16.38 2.3.61 3.26.74a2 2 0 0 1 1.72 2.03z"/></svg>',
    chevron:    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>',
    chevronDown:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>',
  };

  // --- Help Center ------------------------------------------
  pages.Help = function () {
    return `<div class="page active">
      ${H.innerTopbar('Help & Support')}
      <div class="form-wrap">
        <div class="help-section">
          <div class="section-title">Common Questions</div>
          <button class="help-item" onclick="H.openInner('FAQs')">
            <span class="help-icon">${S.help}</span>
            <span class="help-label">FAQs</span>
            <span class="help-arrow">${S.chevron}</span>
          </button>
        </div>

        <div class="help-section">
          <div class="section-title">Documentation</div>
          <button class="help-item" onclick="H.openInner('HelpTerms')">
            <span class="help-icon">${S.doc}</span>
            <span class="help-label">Terms & Conditions</span>
            <span class="help-arrow">${S.chevron}</span>
          </button>
          <button class="help-item" onclick="H.openInner('HelpPrivacy')">
            <span class="help-icon">${S.lock}</span>
            <span class="help-label">Privacy Policy</span>
            <span class="help-arrow">${S.chevron}</span>
          </button>
          <button class="help-item" onclick="H.openInner('HelpCommunity')">
            <span class="help-icon">${S.users}</span>
            <span class="help-label">Community Guidelines</span>
            <span class="help-arrow">${S.chevron}</span>
          </button>
        </div>

        <div class="help-section">
          <div class="section-title">Support</div>
          <button class="help-item" onclick="H.openInner('ContactSupport')">
            <span class="help-icon">${S.mail}</span>
            <span class="help-label">Contact Support</span>
            <span class="help-arrow">${S.chevron}</span>
          </button>
          <button class="help-item" onclick="H.openInner('ReportProblem')">
            <span class="help-icon">${S.bug}</span>
            <span class="help-label">Report a Problem</span>
            <span class="help-arrow">${S.chevron}</span>
          </button>
        </div>

        <div style="background:var(--card);border:1.5px solid var(--border);border-radius:14px;padding:16px;margin-bottom:12px">
          <div style="font-size:13px;font-weight:700;color:var(--text);margin-bottom:12px">Quick Contact</div>
          <a href="mailto:chakusaprince@gmail.com" style="display:flex;align-items:center;gap:10px;padding:10px 0;text-decoration:none;border-bottom:1px solid var(--border)">
            <span style="color:#1A3A8F">${S.mail}</span>
            <span style="font-size:13px;font-weight:600;color:#1A3A8F">chakusaprince@gmail.com</span>
          </a>
          <a href="tel:+971589772645" style="display:flex;align-items:center;gap:10px;padding:10px 0;text-decoration:none;border-bottom:1px solid var(--border)">
            <span style="color:#16a34a">${S.phone}</span>
            <span style="font-size:13px;font-weight:600;color:#16a34a">+971 589 772 645</span>
          </a>
          <a href="https://wa.me/971589772645" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:10px;padding:10px 0;text-decoration:none">
            <span style="color:#25D366"><svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg></span>
            <span style="font-size:13px;font-weight:600;color:#25D366">Chat on WhatsApp</span>
          </a>
        </div>

        <div style="height:20px"></div>
      </div>
    </div>`;
  };

  // --- FAQs -------------------------------------------------
  pages.FAQs = function () {
    const faqs = [
      {
        q: 'How do I post an ad?',
        a: 'Tap the Post Ad button at the bottom of the screen. Follow the steps to add photos, title, description, price, and location. Your ad will be reviewed before going live.'
      },
      {
        q: 'How much does it cost to post?',
        a: 'Posting an ad is completely free! We only charge for optional premium features like boosting your listing or featured placement.'
      },
      {
        q: 'How long do listings stay active?',
        a: 'Listings remain active for 30 days. You can renew your listing anytime by tapping "Renew" on My Listings.'
      },
      {
        q: 'How do I get verified?',
        a: 'Go to your Profile > Verify Identity. Upload a valid ID and we\'ll verify it within 24 hours. Verified sellers get a blue badge!'
      },
      {
        q: 'Can I edit my listing?',
        a: 'Yes! Go to My Listings, tap the listing, then tap Edit. You can change photos, price, description, and other details.'
      },
      {
        q: 'Is my information safe?',
        a: 'We use industry-standard encryption to protect your data. Your phone number and email are never shared without your permission.'
      },
      {
        q: 'How do I report inappropriate content?',
        a: 'Tap the listing, scroll to the bottom, and tap "Report". Select the reason and submit. We review all reports within 24h.'
      },
      {
        q: 'How do I block a user?',
        a: 'Tap their profile > Block User. They won\'t be able to see your listings or contact you. Manage blocked users in Settings.'
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept mobile money (EcoCash, OneMoney), bank transfers, and card payments. All payments are secure and verified.'
      },
      {
        q: 'How do I delete my account?',
        a: 'Go to Settings > Security > Delete Account. Your account and all listings will be permanently removed after 30 days.'
      }
    ];

    return `<div class="page active">
      ${H.innerTopbar('FAQs')}
      <div class="faq-list">
        ${faqs.map((item, idx) => `
          <div class="faq-item" id="faq-${idx}">
            <button class="faq-question" onclick="H._faqs.toggleFaq(${idx})">
              <span>${H.escHtml(item.q)}</span>
              <span class="faq-toggle">${S.chevronDown}</span>
            </button>
            <div class="faq-answer">
              <div class="faq-text">${H.escHtml(item.a)}</div>
            </div>
          </div>
        `).join('')}
      </div>
      <div style="height:20px"></div>
    </div>`;
  };

  pages.FAQs_after = function () {
    H._faqs = {
      toggleFaq: (idx) => {
        const item = document.getElementById('faq-' + idx);
        if (!item) return;
        item.classList.toggle('open');
      }
    };
  };

  // --- Contact Support --------------------------------------
  pages.ContactSupport = function () {
    return `<div class="page active">
      ${H.innerTopbar('Contact Support')}
      <div class="form-wrap">

        <a href="mailto:chakusaprince@gmail.com" style="display:flex;align-items:center;gap:14px;background:var(--card);border:1.5px solid var(--border);border-radius:14px;padding:16px;margin-bottom:12px;text-decoration:none;-webkit-tap-highlight-color:transparent">
          <div style="width:42px;height:42px;border-radius:12px;background:#EFF6FF;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#1A3A8F">${S.mail}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:12px;color:var(--sub);font-weight:500;margin-bottom:2px">Email Support</div>
            <div style="font-size:14px;font-weight:700;color:#1A3A8F">chakusaprince@gmail.com</div>
          </div>
          <div style="color:var(--sub)">${S.chevron}</div>
        </a>

        <a href="tel:+971589772645" style="display:flex;align-items:center;gap:14px;background:var(--card);border:1.5px solid var(--border);border-radius:14px;padding:16px;margin-bottom:12px;text-decoration:none;-webkit-tap-highlight-color:transparent">
          <div style="width:42px;height:42px;border-radius:12px;background:#F0FDF4;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#16a34a">${S.phone}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:12px;color:var(--sub);font-weight:500;margin-bottom:2px">Call / WhatsApp</div>
            <div style="font-size:14px;font-weight:700;color:#16a34a">+971 589 772 645</div>
          </div>
          <div style="color:var(--sub)">${S.chevron}</div>
        </a>

        <a href="https://wa.me/971589772645" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:14px;background:var(--card);border:1.5px solid var(--border);border-radius:14px;padding:16px;margin-bottom:20px;text-decoration:none;-webkit-tap-highlight-color:transparent">
          <div style="width:42px;height:42px;border-radius:12px;background:#F0FDF4;display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:12px;color:var(--sub);font-weight:500;margin-bottom:2px">WhatsApp</div>
            <div style="font-size:14px;font-weight:700;color:#25D366">Chat on WhatsApp</div>
          </div>
          <div style="color:var(--sub)">${S.chevron}</div>
        </a>

        <div class="section-title">Send us a message</div>
        <div class="fg">
          <div class="fl">Subject</div>
          <input class="fi" id="supportSubject" placeholder="What's your issue?">
        </div>

        <div class="fg">
          <div class="fl">Message</div>
          <textarea class="fi" rows="5" id="supportMsg" placeholder="Describe your issue in detail..."></textarea>
        </div>

        <button class="btn-pri" onclick="H._support.send()">Send Message</button>
        <div style="text-align:center;font-size:12px;color:var(--sub);margin-top:8px">We respond within 24 hours</div>
      </div>
    </div>`;
  };

  pages.ContactSupport_after = function () {
    H._support = {
      send: () => {
        const subject = document.getElementById('supportSubject')?.value?.trim();
        const msg = document.getElementById('supportMsg')?.value?.trim();
        if (!subject || !msg) { H.toast('Please fill in all fields'); return; }
        
        H.state.supportTickets = H.state.supportTickets || [];
        H.state.supportTickets.push({
          id: H.uid(),
          userId: H.state.currentUserId,
          subject,
          message: msg,
          createdAt: Date.now(),
          status: 'open'
        });
        H.saveState();
        H.toast('Support ticket created! We\'ll respond within 24h.');
        H.goBack();
      }
    };
  };

  // --- Report Problem ---------------------------------------
  pages.ReportProblem = function () {
    return `<div class="page active">
      ${H.innerTopbar('Report a Problem')}
      <div class="form-wrap">
        <div class="fg">
          <div class="fl">Problem Type</div>
          <select class="fi" id="problemType">
            <option>-- Select --</option>
            <option>App Crash or Error</option>
            <option>Slow Performance</option>
            <option>Missing Features</option>
            <option>Payment Issues</option>
            <option>Other Technical Issue</option>
          </select>
        </div>

        <div class="fg">
          <div class="fl">Description</div>
          <textarea class="fi" rows="5" id="problemDesc" placeholder="Describe the issue and steps to reproduce..."></textarea>
        </div>

        <div class="fg">
          <div class="fl">Screenshots (optional)</div>
          <label class="img-upload-zone" for="problemScreenshot">
            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <div class="img-upload-title">Tap to add screenshot</div>
          </label>
          <input type="file" id="problemScreenshot" accept="image/*" capture style="display:none">
        </div>

        <button class="btn-pri" onclick="H._problems.report()">Report Issue</button>
      </div>
    </div>`;
  };

  pages.ReportProblem_after = function () {
    H._problems = {
      report: () => {
        const type = document.getElementById('problemType')?.value;
        const desc = document.getElementById('problemDesc')?.value?.trim();
        if (!type || type === '-- Select --' || !desc) { H.toast('Please fill in all fields'); return; }
        
        H.state.reports = H.state.reports || [];
        H.state.reports.push({
          id: H.uid(),
          reporterId: H.state.currentUserId,
          targetType: 'bug',
          problemType: type,
          description: desc,
          createdAt: Date.now(),
          status: 'open'
        });
        H.saveState();
        H.toast('Bug report submitted. Thank you for helping us improve!');
        H.goBack();
      }
    };
  };

  // --- Terms & Conditions ----------------------------------
  pages.HelpTerms = function () {
    return `<div class="page active">
      ${H.innerTopbar('Terms of Service')}
      <div class="doc-content">
        <div class="doc-section">
          <h2>Terms of Service</h2>
          <p style="color:var(--ash);font-size:12px">Last updated: May 2026 · Effective immediately</p>

          <h2>1. Agreement to Terms</h2>
          <p>By downloading, installing, or using the Hostly application ("App"), you agree to be legally bound by these Terms of Service. If you do not agree to these terms, you must not use the App. These terms govern all users: buyers, sellers, job seekers, employers, and visitors.</p>

          <h2>2. Who Can Use Hostly</h2>
          <p>You must be at least 18 years old to create an account or use Hostly. By registering, you confirm that you meet this age requirement and are legally competent to enter into contracts under Zimbabwean law. We reserve the right to terminate accounts where the minimum age requirement is not met.</p>

          <h2>3. Account Responsibility</h2>
          <p>You are responsible for keeping your account credentials confidential. All activity that occurs under your account is your responsibility. You must provide accurate and truthful information when registering. If you suspect unauthorized access to your account, contact us immediately at chakusaprince@gmail.com or WhatsApp +971 589 772 645.</p>

          <h2>4. What Hostly Is</h2>
          <p>Hostly is an online classifieds marketplace that connects buyers and sellers in Zimbabwe. We provide the platform — we are not a party to any transaction between users. We do not hold payments, guarantee delivery, or verify the condition of items unless stated. All transactions are conducted directly between users at their own risk.</p>

          <h2>5. Listing Rules</h2>
          <p>All listings must be honest, legal, and comply with Zimbabwean law. You must own or have explicit authority to sell any item listed. The following content is strictly prohibited and will result in immediate removal and account termination:</p>
          <ul>
            <li>Stolen, counterfeit, or fraudulent goods of any kind</li>
            <li>Weapons, firearms, ammunition, or explosive devices</li>
            <li>Illegal drugs, controlled substances, or drug paraphernalia</li>
            <li>Adult, sexually explicit, or pornographic content</li>
            <li>Protected wildlife, animal products, or endangered species</li>
            <li>Pyramid schemes, multi-level marketing, or investment fraud</li>
            <li>Fake, misleading, or non-existent job listings</li>
            <li>Fraudulent rental listings or advance deposit scams</li>
            <li>Human trafficking, exploitation, or domestic workers without consent</li>
          </ul>

          <h2>6. Advertising Credits (Boost Feature)</h2>
          <p>Hostly offers optional paid advertising credits ("Boost") to increase the visibility of your listings. These credits are purchased as a business service via external payment methods (EcoCash, OneMoney, or bank transfer). Advertising credits are not processed by Google Play or the Apple App Store. Credits are non-refundable once applied to a listing. Unused credits may be refunded at our discretion within 7 days of purchase — contact us to request a refund.</p>

          <h2>7. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Harass, threaten, abuse, or discriminate against other users</li>
            <li>Post false, misleading, or deceptive information or images</li>
            <li>Send unsolicited messages (spam) to other users</li>
            <li>Attempt to circumvent our moderation, security, or verification systems</li>
            <li>Create multiple accounts to evade a suspension or ban</li>
            <li>Impersonate another person, business, or official entity</li>
            <li>Use automated tools to scrape or access the platform</li>
          </ul>

          <h2>8. User Content License</h2>
          <p>By posting photos, text, or any content on Hostly, you grant us a non-exclusive, worldwide, royalty-free license to display, reproduce, and distribute that content within the App and for promotional purposes. You confirm that you own or have the rights to all content you post and that it does not infringe any third-party rights.</p>

          <h2>9. Intellectual Property</h2>
          <p>All design, branding, logos, code, and content created by Hostly are protected by copyright and intellectual property law. You may not copy, reproduce, reverse-engineer, or redistribute any part of the App without our written consent.</p>

          <h2>10. Moderation and Enforcement</h2>
          <p>We reserve the right to remove any listing, suspend, or permanently ban any account that violates these Terms at any time, with or without notice. Serious violations including fraud, scams, or illegal activity may be reported to relevant Zimbabwean authorities. Banned users may appeal by contacting chakusaprince@gmail.com within 14 days of the ban.</p>

          <h2>11. Disclaimer of Warranties</h2>
          <p>Hostly is provided "as is" and "as available" without any warranties, express or implied. We do not guarantee that the App will be uninterrupted, error-free, or that listings are accurate. We are not responsible for the quality, safety, legality, or availability of listed items.</p>

          <h2>12. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Hostly and its operators shall not be liable for any indirect, incidental, punitive, or consequential damages arising from your use of the App, including loss of money, data, or business opportunity resulting from transactions between users.</p>

          <h2>13. Governing Law</h2>
          <p>These Terms are governed exclusively by the laws of the Republic of Zimbabwe. Any legal disputes shall be subject to the jurisdiction of the courts of Zimbabwe.</p>

          <h2>14. Changes to These Terms</h2>
          <p>We may update these Terms from time to time. We will notify users of significant changes through the App. Continued use of the App after any update constitutes your acceptance of the revised Terms. You may stop using the App at any time if you disagree with the updated Terms.</p>

          <h2>15. Contact Us</h2>
          <p>For questions about these Terms, contact us at:</p>
          <ul>
            <li>Email: chakusaprince@gmail.com</li>
            <li>WhatsApp: +971 589 772 645</li>
          </ul>
        </div>
      </div>
    </div>`;
  };
pages.HelpPrivacy = function () {
    return `<div class="page active">
      ${H.innerTopbar('Privacy Policy')}
      <div class="doc-content">
        <div class="doc-section">
          <h2>Privacy Policy</h2>
          <p style="color:var(--ash);font-size:12px">Last updated: May 2026</p>

          <h2>1. Who We Are</h2>
          <p>Hostly is a Zimbabwean marketplace application. We are committed to protecting your privacy and handling your data responsibly. This policy explains what data we collect, why we collect it, and how we protect it.</p>

          <h2>2. Data We Collect</h2>
          <ul>
            <li><strong>Account data:</strong> Name, email address, phone number, encrypted password</li>
            <li><strong>Profile data:</strong> Profile photo, bio, city/province location</li>
            <li><strong>Listing data:</strong> Photos, descriptions, prices, and location of items you post</li>
            <li><strong>Messages:</strong> In-app conversations between buyers and sellers</li>
            <li><strong>Transaction data:</strong> Advertising credit balance and top-up reference history</li>
            <li><strong>Device data:</strong> Device type, operating system version, app version</li>
            <li><strong>Usage data:</strong> Pages viewed, search queries, and listing interactions</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <ul>
            <li>To create and manage your user account</li>
            <li>To display your listings to other users across Zimbabwe</li>
            <li>To facilitate secure in-app messaging between buyers and sellers</li>
            <li>To verify advertising credit purchases and apply boosts to listings</li>
            <li>To detect, investigate, and prevent fraud and policy violations</li>
            <li>To improve the App, fix bugs, and enhance user experience</li>
            <li>To send you important notifications about your account and listings</li>
          </ul>

          <h2>4. Data We Do Not Collect</h2>
          <ul>
            <li>We do not collect your precise GPS or real-time location</li>
            <li>We do not collect payment card numbers or banking credentials</li>
            <li>We do not access your camera or photo library without your explicit action</li>
            <li>We do not collect contacts, call logs, or SMS messages</li>
          </ul>

          <h2>5. Data Sharing</h2>
          <p>We do not sell your personal data to third parties. We may share data with:</p>
          <ul>
            <li><strong>Other users:</strong> Your public profile name, phone number (if provided), and listings are visible to all users</li>
            <li><strong>Supabase:</strong> Our secure database and authentication infrastructure provider</li>
            <li><strong>Legal authorities:</strong> When required by Zimbabwean law, court order, or to protect public safety</li>
          </ul>

          <h2>6. Data Security</h2>
          <p>We implement industry-standard security: HTTPS encryption for all data in transit, encrypted password storage (never stored in plain text), row-level security on our database, and access controls. While we take all reasonable precautions, no internet system is 100% secure and we cannot guarantee absolute security of your data.</p>

          <h2>7. Camera and Photo Permissions</h2>
          <p>We request camera and photo library access only when you choose to upload a photo for a listing or your profile. The App never accesses your camera or photos passively. You may deny this permission and still use the App without photo uploads.</p>

          <h2>8. Notifications Permission</h2>
          <p>We request permission to send push notifications to alert you about new messages, listing activity, and account updates. You may disable notifications at any time in your device settings. Turning off notifications will not affect your ability to use the App.</p>

          <h2>9. Data Retention</h2>
          <p>We retain your data for as long as your account is active. When you delete your account, all personal data, listings, messages, and transaction records are permanently deleted within 30 days. Backup copies are purged within 90 days of account deletion.</p>

          <h2>10. Your Rights</h2>
          <ul>
            <li>Access and review your personal data at any time via your Profile page</li>
            <li>Correct inaccurate information through your Profile Settings</li>
            <li>Delete your account and all associated data via Settings → Delete Account</li>
            <li>Opt out of promotional notifications via Settings → Notification Preferences</li>
            <li>Request a copy of all data we hold about you by emailing chakusaprince@gmail.com</li>
          </ul>

          <h2>11. Children's Privacy</h2>
          <p>Hostly is strictly for users aged 18 and over. We do not knowingly collect personal data from anyone under 18. If we discover that a minor has created an account, we will immediately delete their account and all associated data. If you believe a minor is using the App, please contact us.</p>

          <h2>12. Third-Party Links</h2>
          <p>Listings may include links to WhatsApp or external websites. We are not responsible for the privacy practices or content of any third-party services. We encourage you to review their privacy policies before sharing personal information.</p>

          <h2>13. Changes to This Policy</h2>
          <p>We will notify you of material changes to this Privacy Policy through the App at least 7 days before they take effect. Continued use of the App after changes constitute your acceptance of the updated policy.</p>

          <h2>14. Contact Us</h2>
          <p>For privacy concerns, data requests, or complaints, contact us at:</p>
          <ul>
            <li>Email: chakusaprince@gmail.com</li>
            <li>WhatsApp: +971 589 772 645</li>
          </ul>
        </div>
      </div>
    </div>`;
  };
pages.HelpCommunity = function () {
    return `<div class="page active">
      ${H.innerTopbar('Community Guidelines')}
      <div class="doc-content">
        <div class="doc-section">
          <h2>Community Guidelines</h2>
          <p style="color:var(--ash);font-size:12px">Last updated: May 2026</p>
          <p>Hostly is built on trust. These guidelines exist to keep our marketplace safe, fair, and beneficial for every Zimbabwean. Violations result in warnings, listing removal, suspension, or permanent bans.</p>

          <h2>1. Be Honest</h2>
          <p>Accuracy is everything in a marketplace. You must:</p>
          <ul>
            <li>Post accurate titles, descriptions, and photos of your actual item</li>
            <li>Disclose any defects, damage, or issues with items</li>
            <li>Only post items you genuinely have available for sale</li>
            <li>Set fair prices and honor agreed prices</li>
            <li>Never use misleading photos or stolen images</li>
          </ul>

          <h2>2. Be Safe</h2>
          <ul>
            <li>Meet buyers and sellers in safe, public locations</li>
            <li>Never send money before inspecting an item in person</li>
            <li>Be cautious of buyers who pressure you to accept unusual payment methods</li>
            <li>Never share your OTP, PIN, or banking passwords with anyone</li>
            <li>Trust your instincts — if something feels wrong, walk away</li>
          </ul>

          <h2>3. Be Respectful</h2>
          <ul>
            <li>Treat all users with dignity and respect</li>
            <li>No harassment, threats, bullying, or abusive language</li>
            <li>No discrimination based on race, gender, religion, tribe, or disability</li>
            <li>No unsolicited messages or spam to other users</li>
            <li>Respect others privacy — never share personal information without consent</li>
          </ul>

          <h2>4. No Fraud or Scams</h2>
          <p>Zero tolerance for fraud. The following will result in immediate permanent ban:</p>
          <ul>
            <li>Advance fee fraud ("send deposit first")</li>
            <li>Fake job listings designed to collect personal information</li>
            <li>Fake rental listings with non-existent properties</li>
            <li>Selling items you do not own or have no right to sell</li>
            <li>Creating multiple accounts to evade bans</li>
            <li>Any form of identity theft or impersonation</li>
          </ul>

          <h2>5. Prohibited Items</h2>
          <p>The following may never be listed on Hostly:</p>
          <ul>
            <li>Stolen goods of any kind</li>
            <li>Counterfeit or fake branded products</li>
            <li>Weapons, ammunition, or explosives</li>
            <li>Illegal drugs or controlled substances</li>
            <li>Adult or sexually explicit content</li>
            <li>Protected wildlife or animal products</li>
            <li>Pyramid schemes or investment fraud</li>
            <li>Human trafficking or exploitation</li>
          </ul>

          <h2>6. Jobs & Rentals</h2>
          <p>High-risk categories require extra responsibility:</p>
          <ul>
            <li>Job listings must be genuine with real contact details</li>
            <li>Never charge job seekers an application or registration fee</li>
            <li>Rental listings must describe real, available properties</li>
            <li>Never request rental deposits before viewing a property</li>
            <li>Salary and rent amounts must be realistic and accurate</li>
          </ul>

          <h2>7. Reporting Violations</h2>
          <p>If you see something suspicious:</p>
          <ul>
            <li>Use the Report button on any listing or user profile</li>
            <li>Email us at chakusaprince@gmail.com for urgent matters</li>
            <li>All reports are reviewed within 24 hours</li>
            <li>3 or more reports on a listing triggers automatic review</li>
            <li>False reports made in bad faith will result in action against the reporter</li>
          </ul>

          <h2>8. Enforcement</h2>
          <ul>
            <li><strong>Warning:</strong> First minor violation</li>
            <li><strong>Listing removal:</strong> Content that violates guidelines</li>
            <li><strong>Temporary suspension (24-72 hours):</strong> Repeated minor violations</li>
            <li><strong>7-day suspension:</strong> Serious violations</li>
            <li><strong>Permanent ban:</strong> Fraud, scams, or 3+ serious violations</li>
          </ul>
          <p>Banned users may appeal by emailing chakusaprince@gmail.com with evidence. We review all appeals within 7 days.</p>

          <h2>9. Our Commitment</h2>
          <p>We are committed to making Hostly Zimbabwe's most trusted marketplace. We review all reports, take action on violations, and continuously improve our safety systems. Together we can build a marketplace that works for everyone.</p>

          <h2>Contact Safety Team</h2>
          <p>chakusaprince@gmail.com</p>
        </div>
      </div>
    </div>`;
  };

  // --- About Hostly -----------------------------------------
  pages.About = function () {
    const year = new Date().getFullYear();
    return `<div class="page active">
      ${H.innerTopbar('About Hostly')}
      <div style="background:linear-gradient(135deg,#1A3A8F 0%,#2952cc 100%);padding:36px 20px 32px;text-align:center">
        <div style="width:72px;height:72px;background:rgba(255,255,255,.15);border-radius:20px;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:36px;font-weight:900;color:#fff;letter-spacing:-2px">H</div>
        <div style="font-size:26px;font-weight:900;color:#fff;letter-spacing:-0.5px">Hostly</div>
        <div style="font-size:13px;color:rgba(255,255,255,.75);margin-top:6px">Zimbabwe's Free Marketplace</div>
        <div style="font-size:11px;color:rgba(255,255,255,.5);margin-top:10px;font-weight:600">Version 1.0.0</div>
      </div>

      <div class="doc-content" style="padding-top:20px">
        <p style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:6px">Our Mission</p>
        <p>Hostly connects Zimbabweans to buy, sell, rent, and find jobs — for free. We believe commerce should be accessible to everyone, not just those who can afford platform fees.</p>

        <p style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:6px;margin-top:20px">What We Offer</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px">
          ${[['🛒','Buy & Sell','Post ads and find deals across Zimbabwe'],['💼','Jobs Board','Real job listings from real employers'],['🏠','Rentals','Houses, rooms, and commercial spaces'],['🔒','Safe & Trusted','Verified sellers and ID badges']].map(([icon, title, desc]) => `
          <div style="background:var(--card);border:1.5px solid var(--border);border-radius:14px;padding:14px;text-align:center">
            <div style="font-size:24px;margin-bottom:6px">${icon}</div>
            <div style="font-size:13px;font-weight:700;color:var(--text);margin-bottom:4px">${title}</div>
            <div style="font-size:11px;color:var(--sub);line-height:1.5">${desc}</div>
          </div>`).join('')}
        </div>

        <p style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:6px;margin-top:20px">Legal</p>
        <div style="background:var(--card);border:1.5px solid var(--border);border-radius:14px;overflow:hidden">
          <div onclick="H.openInner('HelpPrivacy')" style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid var(--border);cursor:pointer">
            <span style="font-size:14px;font-weight:600;color:var(--text)">Privacy Policy</span>
            <span style="color:var(--sub)">›</span>
          </div>
          <div onclick="H.openInner('HelpTerms')" style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid var(--border);cursor:pointer">
            <span style="font-size:14px;font-weight:600;color:var(--text)">Terms of Service</span>
            <span style="color:var(--sub)">›</span>
          </div>
          <div onclick="H.openInner('HelpCommunity')" style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;cursor:pointer">
            <span style="font-size:14px;font-weight:600;color:var(--text)">Community Guidelines</span>
            <span style="color:var(--sub)">›</span>
          </div>
        </div>

        <p style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:6px;margin-top:20px">Contact Us</p>
        <div style="background:var(--card);border:1.5px solid var(--border);border-radius:14px;overflow:hidden">
          <a href="mailto:chakusaprince@gmail.com" style="display:flex;align-items:center;gap:12px;padding:14px 16px;text-decoration:none;border-bottom:1px solid var(--border)">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1A3A8F" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span style="font-size:13px;font-weight:600;color:#1A3A8F">chakusaprince@gmail.com</span>
          </a>
          <a href="https://wa.me/971589772645" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:12px;padding:14px 16px;text-decoration:none">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
            <span style="font-size:13px;font-weight:600;color:#25D366">WhatsApp: +971 589 772 645</span>
          </a>
        </div>

        <div style="text-align:center;padding:28px 0 0;font-size:12px;color:var(--sub)">
          © ${year} Hostly · Made in Zimbabwe 🇿🇼
        </div>
      </div>
    </div>`;
  };

})(window.H = window.H || {});

H.pages.LegalHub = function() {
  var sections = [
    { title: 'Terms', items: ['Terms of Use','Acceptable Use Policy','Seller Terms','Buyer Protection','Boost Terms'] },
    { title: 'Privacy', items: ['Privacy Policy','Cookie Policy','Data Deletion','GDPR Compliance'] },
    { title: 'Platform Policies', items: ['Community Guidelines','Prohibited Items','Anti-Fraud Policy','Dispute Resolution'] }
  ];
  var emailLink = 'mailto:chakusaprince@gmail.com';
  var waLink = 'https://wa.me/971589772645';
  var html = '<div class="page active">' + H.innerTopbar('Legal Hub');
  html += '<div class="legal-hero"><div class="legal-hero-title">Welcome to<br><strong>Hostly Legal Hub</strong></div><div class="legal-hero-sub">Legal information for Hostly products and services</div></div>';
  sections.forEach(function(sec) {
    html += '<div class="legal-section-title">' + sec.title + '</div><div class="legal-list">';
    sec.items.forEach(function(item) { html += '<div class="legal-item"><div class="legal-item-title">' + item + '</div><div class="legal-item-arrow">&rsaquo;</div></div>'; });
    html += '</div>';
  });
  html += '<div class="legal-contact"><div class="legal-contact-title">Need to contact us?</div>';
  html += '<div class="legal-contact-body">Email: <span onclick="window.open(emailLink)" style="color:#1A3A8F;font-weight:600;cursor:pointer">chakusaprince@gmail.com</span></div>';
  html += '<div class="legal-contact-body" style="margin-top:6px">WhatsApp: <span onclick="window.open(waLink)" style="color:#25D366;font-weight:600;cursor:pointer">+971 589 772 645</span></div>';
  html += '</div>';
  html += '<div class="legal-footer"><div class="legal-footer-links">';
  ['About Us','Advertise','Terms of Use','Privacy Policy'].forEach(function(l) { html += '<span class="legal-footer-link" onclick="H.openInner(\x27About\x27)">' + l + '</span>'; });
  html += '</div><div class="legal-footer-copy">Hostly &copy; 2026 &middot; Zimbabwe\'s #1 Free Marketplace</div></div>';
  html += '</div></div>';
  return html;
};
;/* === www/js/moderation.js === */
'use strict';
(function (H) {

  // -- BANNED WORDS -------------------------------------------
  const BANNED = [
    'crypto','bitcoin','investment scheme','send money first',
    'western union','moneygram','wire transfer','advance fee',
    'nude','xxx','escort','adult only','whatsapp only no calls',
    'guaranteed returns','double your money','mlm','pyramid'
  ];

  // -- CATEGORY RISK ------------------------------------------
  const RISK = {
    jobs: 'high', rentals: 'high', property: 'high',
    vehicles: 'medium', services: 'medium',
    electronics: 'low', furniture: 'low',
    fashion: 'low', agriculture: 'low',
    pets: 'low', other: 'low'
  };

  // -- TRUST SCORE --------------------------------------------
  H.getTrustScore = function (user) {
    let score = 50;
    if (user.verified)                    score += 20;
    if (user.email)                       score += 10;
    const reports = (H.state.reports || []).filter(r => r.targetId === user.id).length;
    const rejected = (H.state.listings || []).filter(l => l.sellerId === user.id && l.status === 'rejected').length;
    score -= reports * 10;
    score -= rejected * 5;
    const approved = (H.state.listings || []).filter(l => l.sellerId === user.id && l.status === 'active').length;
    score += Math.min(approved * 3, 20);
    return Math.max(0, Math.min(100, score));
  };

  // -- MODERATION ENGINE --------------------------------------
  H.moderateListing = function (listing, user) {
    const text = (listing.title + ' ' + listing.desc).toLowerCase();

    // 1. Banned word check
    for (const w of BANNED) {
      if (text.includes(w)) {
        return { status: 'rejected', reason: 'Content violates community guidelines: banned terms detected.' };
      }
    }

    // 2. Duplicate check
    const duplicate = (H.state.listings || []).find(l =>
      l.sellerId === user.id &&
      l.title.toLowerCase() === listing.title.toLowerCase() &&
      l.status !== 'rejected' && l.id !== listing.id
    );
    if (duplicate) {
      return { status: 'rejected', reason: 'Duplicate listing detected. Please edit your existing ad instead.' };
    }

    // 3. Spam check — more than 5 posts in last 24h
    const last24h = Date.now() - 86400000;
    const recentPosts = (H.state.listings || []).filter(l =>
      l.sellerId === user.id && l.createdAt > last24h
    ).length;
    if (recentPosts >= 5) {
      return { status: 'rejected', reason: 'Too many listings posted today. Please wait 24 hours.' };
    }

    // 4. Risk scoring
    const risk = RISK[listing.cat] || 'low';
    const trust = H.getTrustScore(user);

    // High trust users skip review
    if (trust >= 70) {
      return { status: 'active', reason: null };
    }

    if (risk === 'high') {
      return { status: 'pending', reason: 'This category requires admin review before going live.' };
    }
    if (risk === 'medium') {
      listing.flaggedForReview = true;
      return { status: 'active', reason: null };
    }

    // low risk — publish immediately
    return { status: 'active', reason: null };
  };

  // -- REPORT THRESHOLD ---------------------------------------
  H.checkReportThreshold = function (listingId) {
    const count = (H.state.reports || []).filter(
      r => r.targetId === listingId && r.targetType === 'listing' && r.status === 'open'
    ).length;
    if (count >= 3) {
      const l = (H.state.listings || []).find(x => x.id === listingId);
      if (l && l.status === 'active') {
        l.status = 'flagged';
        H.saveState();
        return true;
      }
    }
    return false;
  };

  // -- CHAT SPAM DETECTION ------------------------------------
  H.isChatSpam = function (convoId, userId) {
    const c = (H.state.conversations || []).find(x => x.id === convoId);
    if (!c) return false;
    const last10s = Date.now() - 10000;
    const recent = c.messages.filter(m => m.from === userId && m.t > last10s).length;
    return recent >= 5;
  };

  H.containsLink = function (text) {
    return /https?:\/\/|www\.|\.com|\.net|\.org|bit\.ly|wa\.me/i.test(text);
  };

  // -- DAILY HEALTH CHECK -------------------------------------
  H.runDailyHealthCheck = function () {
    const listings = H.state.listings || [];

    // Auto-hide listings with 3+ reports
    listings.forEach(l => {
      if (l.status === 'active') H.checkReportThreshold(l.id);
    });

    // Remove expired boosts
    listings.forEach(l => {
      if (l.boost && l.boost.until < Date.now()) l.boost = null;
    });

    H.saveState();
  };

  // Run health check once on load
  window.addEventListener("load", () => setTimeout(() => { if (H.state) H.runDailyHealthCheck(); }, 3000));

})(window.H = window.H || {});



;/* === www/js/categories.js === */
'use strict';
// ── Shared filter infrastructure for all category pages ────
(function (H) {

  H._filters = {};
  H._currentTalentSector = 'All';

  function getF(id) { return H._filters[id] || (H._filters[id] = {}); }

  H._setFilter = function (catId, key, val) {
    getF(catId)[key] = val;
    H._applyFilters(catId);
  };

  H._toggleFilters = function (catId) {
    var fp = document.getElementById('fp_' + catId);
    if (fp) fp.style.display = fp.style.display === 'none' ? 'block' : 'none';
  };

  H._clearFilters = function (catId) {
    H._filters[catId] = {};
    var fp = document.getElementById('fp_' + catId);
    if (fp) {
      fp.querySelectorAll('select').forEach(function (s) { s.value = ''; });
      fp.querySelectorAll('input[type=number],input[type=text]').forEach(function (i) { i.value = ''; });
    }
    H._applyFilters(catId);
  };

  H._applyFilters = function (catId) {
    var el = document.getElementById('cl_' + catId);
    if (!el) return;
    var f = getF(catId);
    var baseCat = catId.replace('_sale', '').replace('_rent', '');
    var all = (H.state.listings || []).filter(function (l) {
      return l.status === 'active' && l.cat === baseCat;
    });
    if (catId === 'property_sale') all = all.filter(function (l) { return !l.rentalType; });
    if (catId === 'property_rent') all = all.filter(function (l) { return !!l.rentalType; });

    var inp = document.getElementById('cs_' + catId);
    var q = inp ? inp.value.toLowerCase().trim() : '';
    if (q) all = all.filter(function (l) {
      return (l.title + ' ' + (l.desc || '') + ' ' + (l.city || '') + ' ' + (l.suburb || '')).toLowerCase().includes(q);
    });

    if (f.priceMin) all = all.filter(function (l) { return (l.price || 0) >= +f.priceMin; });
    if (f.priceMax) all = all.filter(function (l) { return (l.price || 0) <= +f.priceMax; });
    if (f.city && f.city !== 'all') all = all.filter(function (l) { return (l.city + ' ' + (l.prov || '')).toLowerCase().includes(f.city.toLowerCase()); });
    if (f.condition && f.condition !== 'all') all = all.filter(function (l) { return (l.condition || '').toLowerCase() === f.condition; });
    if (f.furnishing && f.furnishing !== 'all') all = all.filter(function (l) { return (l.furnishing || '').toLowerCase() === f.furnishing; });
    if (f.propType && f.propType !== 'all') all = all.filter(function (l) { return (l.propType || '').toLowerCase() === f.propType; });
    if (f.rentalType && f.rentalType !== 'all') all = all.filter(function (l) { return (l.rentalType || '').toLowerCase() === f.rentalType; });
    if (f.beds && f.beds !== 'any') all = all.filter(function (l) { return +(l.beds || 0) >= +f.beds; });
    if (f.baths && f.baths !== 'any') all = all.filter(function (l) { return +(l.baths || 0) >= +f.baths; });
    if (f.subcat && f.subcat !== 'all') all = all.filter(function (l) { return (l.subcat || l.type || '').toLowerCase() === f.subcat; });
    if (f.brand) all = all.filter(function (l) { return (l.brand || l.make || '').toLowerCase().includes(f.brand.toLowerCase()); });
    if (f.gender && f.gender !== 'all') all = all.filter(function (l) { return (l.gender || '').toLowerCase() === f.gender; });
    if (f.size && f.size !== 'all') all = all.filter(function (l) { return (l.size || '').toLowerCase() === f.size; });
    if (f.fuelType && f.fuelType !== 'all') all = all.filter(function (l) { return (l.fuelType || '').toLowerCase() === f.fuelType; });
    if (f.yearMin) all = all.filter(function (l) { return +(l.year || 0) >= +f.yearMin; });
    if (f.yearMax) all = all.filter(function (l) { return +(l.year || 9999) <= +f.yearMax; });

    var sort = f.sort || 'newest';
    all.sort(function (a, b) {
      var ba = (a.boost && a.boost.until > Date.now()) ? 1 : 0;
      var bb = (b.boost && b.boost.until > Date.now()) ? 1 : 0;
      if (ba !== bb) return bb - ba;
      if (sort === 'price_asc') return (a.price || 0) - (b.price || 0);
      if (sort === 'price_desc') return (b.price || 0) - (a.price || 0);
      if (sort === 'oldest') return a.createdAt - b.createdAt;
      return b.createdAt - a.createdAt;
    });

    el.innerHTML = all.length
      ? '<div class="listing-list">' + all.map(H.renderListCard).join('') + '</div>'
      : H.emptyState('No listings match', 'Try adjusting your filters', null, null);

    var cnt = document.getElementById('cc_' + catId);
    if (cnt) cnt.textContent = all.length + ' listing' + (all.length !== 1 ? 's' : '');

    // update filter badge
    var n = Object.keys(getF(catId)).filter(function (k) {
      var v = getF(catId)[k]; return v && v !== '' && v !== 'all' && v !== 'any' && v !== 'newest';
    }).length;
    var b = document.getElementById('fb_' + catId);
    if (b) { b.textContent = n || ''; b.style.display = n ? 'flex' : 'none'; }
  };

  // ── UI builder helpers (attached to H so separate files can use them) ──
  var ZW_CITIES = ['Harare', 'Bulawayo', 'Mutare', 'Gweru', 'Kwekwe', 'Kadoma', 'Masvingo', 'Chinhoyi', 'Bindura', 'Marondera', 'Hwange', 'Victoria Falls', 'Zvishavane'];
  H._ZW_CITIES = ZW_CITIES;

  H._sel = function (id, key, label, opts) {
    var html = '<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.5px;margin-bottom:5px">' + label + '</div>';
    html += '<select onchange="H._setFilter(\'' + id + '\',\'' + key + '\',this.value)" style="width:100%;padding:9px 10px;border:1px solid var(--border);border-radius:9px;font-size:13px;background:var(--bg);color:var(--text);outline:none">';
    opts.forEach(function (o) {
      var v = Array.isArray(o) ? o[0] : o, t = Array.isArray(o) ? o[1] : o;
      html += '<option value="' + H.escHtml(v) + '">' + H.escHtml(t) + '</option>';
    });
    return html + '</select></div>';
  };

  H._priceRange = function (id) {
    return '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">'
      + '<div><div style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.5px;margin-bottom:5px">Min Price ($)</div>'
      + '<input type="number" min="0" placeholder="0" oninput="H._setFilter(\'' + id + '\',\'priceMin\',this.value)" style="width:100%;padding:9px 10px;border:1px solid var(--border);border-radius:9px;font-size:13px;background:var(--bg);color:var(--text);outline:none;box-sizing:border-box"></div>'
      + '<div><div style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.5px;margin-bottom:5px">Max Price ($)</div>'
      + '<input type="number" min="0" placeholder="Any" oninput="H._setFilter(\'' + id + '\',\'priceMax\',this.value)" style="width:100%;padding:9px 10px;border:1px solid var(--border);border-radius:9px;font-size:13px;background:var(--bg);color:var(--text);outline:none;box-sizing:border-box"></div>'
      + '</div>';
  };

  H._citysel = function (id) {
    return H._sel(id, 'city', 'Location', [['all', 'All Zimbabwe']].concat(ZW_CITIES.map(function (c) { return [c, c]; })));
  };

  H._sortsel = function (id) {
    return H._sel(id, 'sort', 'Sort By', [['newest', 'Newest First'], ['oldest', 'Oldest First'], ['price_asc', 'Price: Low → High'], ['price_desc', 'Price: High → Low']]);
  };

  H._txtInput = function (id, key, label, placeholder) {
    return '<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.5px;margin-bottom:5px">' + label + '</div>'
      + '<input type="text" placeholder="' + H.escHtml(placeholder) + '" oninput="H._setFilter(\'' + id + '\',\'' + key + '\',this.value)" style="width:100%;padding:9px 10px;border:1px solid var(--border);border-radius:9px;font-size:13px;background:var(--bg);color:var(--text);outline:none;box-sizing:border-box"></div>';
  };

  H._catHeader = function (id, name, color, filterHtml) {
    var dark = ['#1A3A8F','#e53935','#8E24AA','#00838F','#388E3C','#6D4C41','#FB8C00','#E91E63','#546E7A','#00897B','#F06292'].indexOf(color) > -1;
    var tc = dark ? '#fff' : '#1A3A8F', sc = dark ? 'rgba(255,255,255,.65)' : 'rgba(26,58,143,.7)';
    var sbg = dark ? 'rgba(255,255,255,.13)' : 'rgba(255,255,255,.9)', sclr = dark ? '#fff' : '#1A3A8F';
    return '<div style="background:' + color + ';padding:0 12px 12px">'
      + '<div style="display:flex;gap:8px;align-items:center">'
      + '<div style="background:' + sbg + ';border-radius:12px;display:flex;align-items:center;padding:0 12px;gap:8px;flex:1">'
      + '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="' + (dark ? 'rgba(255,255,255,.7)' : '#999') + '" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
      + '<input id="cs_' + id + '" placeholder="Search ' + H.escHtml(name) + '…" autocomplete="off" oninput="H._applyFilters(\'' + id + '\')" style="flex:1;border:none;outline:none;padding:12px 0;font-size:14px;background:transparent;color:' + sclr + ';font-family:Inter,sans-serif;caret-color:#F5A623"></div>'
      + '<button onclick="H._toggleFilters(\'' + id + '\')" style="background:rgba(255,255,255,.2);border:none;color:' + tc + ';padding:10px 12px;border-radius:12px;cursor:pointer;position:relative;display:flex;align-items:center;gap:5px;font-size:13px;font-weight:600">'
      + '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="4" y1="6" x2="20" y2="6"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="8" y1="18" x2="16" y2="18"/></svg>Filter'
      + '<span id="fb_' + id + '" style="display:none;background:#F5A623;color:#1A3A8F;font-size:10px;font-weight:800;min-width:16px;height:16px;border-radius:8px;align-items:center;justify-content:center;padding:0 4px"></span></button>'
      + '</div>'
      + '<div style="color:' + sc + ';font-size:12px;font-weight:600;margin-top:8px;padding:0 2px"><span id="cc_' + id + '">…</span></div>'
      + '</div>'
      + '<div id="fp_' + id + '" style="display:none;background:var(--card);border-bottom:2px solid ' + color + ';padding:16px 14px">'
      + filterHtml
      + '<div style="display:flex;gap:8px;margin-top:4px">'
      + '<button onclick="H._clearFilters(\'' + id + '\')" style="flex:1;padding:10px;background:var(--bg);border:1px solid var(--border);border-radius:10px;font-size:13px;font-weight:600;color:var(--sub);cursor:pointer">Clear</button>'
      + '<button onclick="H._toggleFilters(\'' + id + '\')" style="flex:2;padding:10px;background:' + color + ';border:none;border-radius:10px;font-size:13px;font-weight:700;color:' + tc + ';cursor:pointer">Apply Filters</button>'
      + '</div></div>';
  };

  H._catTopbar = function (title, color) {
    return '<div class="det-topbar" style="background:' + (color || '#1A3A8F') + '">'
      + '<button class="back" onclick="H.goBack()" style="color:#fff"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>'
      + '<div class="det-topbar-title" style="color:#fff">' + H.escHtml(title) + '</div>'
      + '<button onclick="H.navTo(\'Post\')" style="background:rgba(255,255,255,.15);border:none;color:#fff;font-size:12px;font-weight:700;cursor:pointer;padding:6px 12px;border-radius:8px;white-space:nowrap">+ Post</button>'
      + '</div>';
  };

  // ── Override filterByCat for all 12 categories ────────────
  H.filterByCat = function (cid) {
    var map = {
      property: 'Property', vehicles: 'Vehicles', rooms: 'Rooms',
      electronics: 'Electronics', furniture: 'Furniture', fashion: 'Fashion',
      services: 'Services', jobs: 'Jobs', agriculture: 'Agriculture',
      pets: 'Pets', kids: 'Kids', other: 'Other'
    };
    var page = map[cid];
    if (page) { H.openInner(page, { cid: cid }); }
    else { H.openInner('CategoryView', { cid: cid }); }
  };

  // legacy compat
  H._catSearch = function (q, catId) { H._applyFilters(catId); };

})(window.H);

;/* === www/js/agriculture.js === */
'use strict';
(function (H) {

  H.pages.Agriculture = function () {
    var ls = (H.state.listings || []).filter(function (l) { return l.status === 'active' && l.cat === 'agriculture'; }).sort(function (a, b) { return b.createdAt - a.createdAt; });

    var f = H._sel('agriculture', 'subcat', 'Category', [['all', 'All'], ['livestock', 'Livestock & Animals'], ['crops', 'Crops & Produce'], ['equipment', 'Farm Equipment & Tools'], ['seeds', 'Seeds & Seedlings'], ['land', 'Agricultural Land'], ['inputs', 'Fertilisers & Chemicals'], ['irrigation', 'Irrigation Systems'], ['poultry', 'Poultry'], ['dairy', 'Dairy Products'], ['other', 'Other']])
      + H._sel('agriculture', 'condition', 'Condition', [['all', 'All'], ['new', 'New'], ['used', 'Used'], ['good', 'Good Condition']])
      + H._citysel('agriculture') + H._priceRange('agriculture') + H._sortsel('agriculture');

    return '<div class="page active">'
      + H._catTopbar('Agriculture', '#388E3C')
      + H._catHeader('agriculture', 'Agriculture', '#388E3C', f)
      + '<div id="cl_agriculture" style="padding-bottom:88px">'
      + (ls.length ? '<div class="listing-list">' + ls.map(H.renderListCard).join('') + '</div>' : H.emptyState('No agriculture listings', 'Buy & sell farm products!', 'Post an Ad', "H.navTo('Post')"))
      + '</div></div>';
  };

  H.pages.Agriculture_after = function () { H._applyFilters('agriculture'); };

})(window.H);

;/* === www/js/kids.js === */
'use strict';
(function (H) {

  H.pages.Kids = function () {
    var ls = (H.state.listings || []).filter(function (l) { return l.status === 'active' && l.cat === 'kids'; }).sort(function (a, b) { return b.createdAt - a.createdAt; });

    var f = H._sel('kids', 'subcat', 'Category', [['all', 'All'], ['clothing', 'Clothing & Shoes'], ['toys', 'Toys & Games'], ['furniture', 'Baby Furniture & Gear'], ['feeding', 'Feeding & Nursing'], ['education', 'Books & Education'], ['strollers', 'Strollers & Car Seats'], ['electronics', 'Kids Electronics'], ['other', 'Other']])
      + H._sel('kids', 'gender', 'For', [['all', 'All'], ['boys', 'Boys'], ['girls', 'Girls'], ['unisex', 'Unisex'], ['baby', 'Baby (0-2yr)']])
      + H._sel('kids', 'condition', 'Condition', [['all', 'All'], ['new', 'Brand New'], ['like-new', 'Like New'], ['good', 'Good'], ['fair', 'Fair']])
      + H._citysel('kids') + H._priceRange('kids') + H._sortsel('kids');

    return '<div class="page active">'
      + H._catTopbar('Baby & Kids', '#E91E63')
      + H._catHeader('kids', 'Baby & Kids', '#E91E63', f)
      + '<div id="cl_kids" style="padding-bottom:88px">'
      + (ls.length ? '<div class="listing-list">' + ls.map(H.renderListCard).join('') + '</div>' : H.emptyState('No kids items listed', 'Great deals for little ones!', 'Post an Ad', "H.navTo('Post')"))
      + '</div></div>';
  };

  H.pages.Kids_after = function () { H._applyFilters('kids'); };

})(window.H);

;/* === www/js/pets.js === */
'use strict';
(function (H) {

  H.pages.Pets = function () {
    var ls = (H.state.listings || []).filter(function (l) { return l.status === 'active' && l.cat === 'pets'; }).sort(function (a, b) { return b.createdAt - a.createdAt; });

    var f = H._sel('pets', 'subcat', 'Pet Type', [['all', 'All'], ['dogs', 'Dogs'], ['cats', 'Cats'], ['birds', 'Birds'], ['fish', 'Fish & Aquatic'], ['rabbits', 'Rabbits & Small Animals'], ['reptiles', 'Reptiles'], ['livestock', 'Livestock'], ['other', 'Other']])
      + H._txtInput('pets', 'brand', 'Breed', 'e.g. German Shepherd, Persian Cat')
      + H._citysel('pets') + H._priceRange('pets') + H._sortsel('pets');

    return '<div class="page active">'
      + H._catTopbar('Pets', '#FB8C00')
      + H._catHeader('pets', 'Pets', '#FB8C00', f)
      + '<div id="cl_pets" style="padding-bottom:88px">'
      + (ls.length ? '<div class="listing-list">' + ls.map(H.renderListCard).join('') + '</div>' : H.emptyState('No pets listed', 'Find your perfect companion!', 'Post an Ad', "H.navTo('Post')"))
      + '</div></div>';
  };

  H.pages.Pets_after = function () { H._applyFilters('pets'); };

})(window.H);

;/* === www/js/other.js === */
'use strict';
(function (H) {

  H.pages.Other = function () {
    var ls = (H.state.listings || []).filter(function (l) { return l.status === 'active' && l.cat === 'other'; }).sort(function (a, b) { return b.createdAt - a.createdAt; });

    var f = H._sel('other', 'subcat', 'Category', [['all', 'All'], ['antiques', 'Antiques & Collectibles'], ['sports', 'Sports & Fitness'], ['music', 'Musical Instruments'], ['books', 'Books & Magazines'], ['art', 'Art & Crafts'], ['tools', 'Tools & DIY'], ['health', 'Health & Beauty'], ['office', 'Office Supplies'], ['food', 'Food & Beverages'], ['other', 'Miscellaneous']])
      + H._sel('other', 'condition', 'Condition', [['all', 'All'], ['new', 'New'], ['like-new', 'Like New'], ['good', 'Good'], ['fair', 'Fair']])
      + H._citysel('other') + H._priceRange('other') + H._sortsel('other');

    return '<div class="page active">'
      + H._catTopbar('Other', '#546E7A')
      + H._catHeader('other', 'Other', '#546E7A', f)
      + '<div id="cl_other" style="padding-bottom:88px">'
      + (ls.length ? '<div class="listing-list">' + ls.map(H.renderListCard).join('') + '</div>' : H.emptyState('No listings yet', 'Post anything for sale!', 'Post an Ad', "H.navTo('Post')"))
      + '</div></div>';
  };

  H.pages.Other_after = function () { H._applyFilters('other'); };

})(window.H);

;/* === www/js/supabase.js === */
// supabase.js "” safe Supabase client initialisation
(function () {
  // Make sure the CDN loaded
  if (!window.supabase) {
    console.warn('Supabase CDN not loaded · using mock client.');
    window.supabase = {
      createClient: function () {
        const noop = () => mockClient;
        const mockClient = {
          from: () => {
            console.warn('Supabase mock: operation skipped.');
            return mockClient;
          },
          select: noop,
          insert: noop,
          update: noop,
          delete: noop,
          eq: noop,
          order: noop,
          limit: noop,
          single: () => Promise.resolve({ data: null, error: new Error('Supabase not loaded') }),
          then: (fn) => fn({ data: null, error: new Error('Supabase not loaded') })
        };
        return mockClient;
      }
    };
  }

  const supabaseUrl = window.SUPABASE_URL;
  const supabaseAnonKey = window.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase credentials from supabase-config.js');
  }

  // Create the client instance and assign it to the global `supabase` variable
  // (overwrites the window.supabase object that held the SDK "” this is fine
  //  because other files expect `supabase` to be the client)
  window.supabase = window.supabase.createClient(supabaseUrl || '', supabaseAnonKey || '');
})();
