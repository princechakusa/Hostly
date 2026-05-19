'use strict';
window.H = {
  KEY:          'pamarket.v2',
  ADMIN_PHONES: ['+263770000000', '+971589772645'],

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
    saves:{}, notifs:{}, currentUserId:null, cityFilter:'All Zimbabwe',
    _sortMode:'newest', _priceMin:'', _priceMax:'',
    adminLogs:[], supportTickets:[], adminSession:null, topupRequests:[]
  },

  loadState() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return JSON.parse(JSON.stringify(this.defaultState));
      return Object.assign(JSON.parse(JSON.stringify(this.defaultState)), JSON.parse(raw));
    } catch { return JSON.parse(JSON.stringify(this.defaultState)); }
  },

  saveState() {
    try {
      const safe = JSON.parse(JSON.stringify(this.state));
      if (safe.users) safe.users.forEach(u => { delete u._localPassword; });
      localStorage.setItem(this.KEY, JSON.stringify(safe));
    }
    catch(e) { if(e.name==='QuotaExceededError') this.toast('Storage full — try deleting old listings'); }
  },

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

  stopCam() {
    if (this.camStream)     { this.camStream.getTracks().forEach(t=>t.stop()); this.camStream=null; }
    if (this.livenessTimer) { clearInterval(this.livenessTimer); this.livenessTimer=null; }
  },

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
    if(typeof H.startRealtime==='function') H.startRealtime();
    this._initPullToRefresh();
  },

  authPage() {
    document.getElementById('bottomNav').style.display='none';
    document.getElementById('mainArea').innerHTML=`
      <div class="auth-wrap">
        <div class="auth-logo">
          <img src="img/icon-192.png" alt="PaMarket" onclick="H.logoTap()" style="width:90px;height:90px;border-radius:22px;margin-bottom:16px;box-shadow:0 8px 24px rgba(0,0,0,.3);cursor:pointer">
          <div>Pa<em>Market</em></div>
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
      if(this.currentPageName!==name) return;
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
    const rv=JSON.parse(localStorage.getItem('pamarket_rv')||'[]');
    const filtered=[...new Set([id,...rv.filter(x=>x!==id)])].slice(0,10);
    localStorage.setItem('pamarket_rv',JSON.stringify(filtered));
    this.saveState();
    this.openInner('Detail',{id});
  },

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

  applyTheme() {
    const u=this.currentUser();
    const theme=(u&&u.settings&&u.settings.theme)||'light';
    document.documentElement.setAttribute('data-theme', theme);
  },
  applyLanguage() {
    const u=this.currentUser();
    if(u&&u.language) document.querySelectorAll('.current-lang').forEach(el=>el.textContent=u.language);
  },

  logoTap() {
    this.logoTaps++;
    clearTimeout(this.logoTapsTimer);
    this.logoTapsTimer=setTimeout(()=>{this.logoTaps=0;},4000);
    if(this.logoTaps>=7){this.logoTaps=0;window.location.href='admin.html';}
  },

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
        created_at:listing.createdAt?new Date(listing.createdAt).toISOString():new Date().toISOString()
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
        createdAt:r.created_at?new Date(r.created_at).getTime():Date.now()
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

  _registerExtraPages() {
    H.pages.About=function(){
      return '<div class="page active">'+H.innerTopbar('About PaMarket')
        +'<div class="about-wrap">'
        +'<div class="about-hero"><div class="about-brand">Pa<em>Market</em></div><div class="about-tag">Free Zimbabwean Online Marketplace</div></div>'
        +'<div class="about-card"><div class="about-sec-title">What is PaMarket?</div><div class="about-body">PaMarket is a free Zimbabwean online marketplace connecting buyers and sellers. Whether you are looking for goods, services, vehicles, property, or jobs, PaMarket makes it easy to post, browse, and connect with people in your province and across Zimbabwe.</div></div>'
        +'<div class="about-card"><div class="about-sec-title">Who is it for?</div><div class="about-body">PaMarket is for anyone in Zimbabwe — individuals selling personal items, small businesses promoting services, employers posting vacancies, and buyers searching for the best local deals. The app is free to download and free to use.</div></div>'
        +'<div class="about-card"><div class="about-sec-title">Key Features</div><div class="about-grid">'
        +['Free Listings','Secure Messaging','WhatsApp Connect','All Categories','Province Filters','Boost Your Ads','Job Board','Photo Uploads'].map(f=>'<div class="about-feat">'+f+'</div>').join('')
        +'</div></div>'
        +'<div class="about-card"><div class="about-sec-title">Legal &amp; Compliance</div><div class="about-body">PaMarket operates as a platform for user-generated listings. We do not own, sell, or warrant any items listed. Users are responsible for ensuring their listings comply with applicable Zimbabwean law. Prohibited content (counterfeit goods, illegal services, misleading listings) will be removed and accounts suspended. By using PaMarket you agree to our Terms of Service and Privacy Policy.</div></div>'
        +'<div class="about-card"><div class="about-sec-title">Contact Us</div>'
        +'<div class="about-contact-row" onclick="window.location.href=\'mailto:chakusaprince@gmail.com\'"><div class="about-contact-ic email-ic"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div><div class="about-contact-label">Support Email</div><div class="about-contact-val">chakusaprince@gmail.com</div></div></div>'
        +'<div class="about-contact-row" onclick="window.open(\'https://wa.me/971589772645\')"><div class="about-contact-ic wa-ic"><svg viewBox="0 0 24 24" width="20" height="20" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg></div><div><div class="about-contact-label">WhatsApp Support</div><div class="about-contact-val">+971 589 772 645</div></div></div>'
        +'</div>'
        +'<div class="about-ads-banner"><div class="about-ads-title">Advertise with PaMarket</div><div class="about-ads-sub">Reach active buyers across all provinces of Zimbabwe</div><button class="about-ads-btn" onclick="H.openInner(\'Ads\')">Get in Touch</button></div>'
        +'<div style="text-align:center;font-size:12px;color:var(--text-muted,#999);padding:16px 0 4px">PaMarket © 2026 · Made in Zimbabwe</div>'
        +'</div></div>';
    };

    H.pages.Ads=function(){
      return '<div class="page active">'+H.innerTopbar('Advertise with PaMarket')
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
        +'<button onclick="window.open(\'https://wa.me/971589772645?text=Hi%2C%20I\'m%20interested%20in%20advertising%20on%20PaMarket\')" style="display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:#25D366;color:#fff;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer"><svg viewBox="0 0 24 24" width="18" height="18" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>Chat on WhatsApp</button>'
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
      const subject=encodeURIComponent('PaMarket Advertising Enquiry – '+type);
      const body=encodeURIComponent('Business: '+biz+'\nContact Email: '+email+'\nAd Type: '+type+'\n\nMessage:\n'+msg);
      window.location.href='mailto:chakusaprince@gmail.com?subject='+subject+'&body='+body;
    };
  },

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
      ${item('About PaMarket','<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>','About','')}
      ${item('Advertise with Us','<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>','Ads','')}
      <button class="sheet-item danger" onclick="H.closeSheet();setTimeout(()=>H.logout(),50)">
        <span class="sheet-icon">${I.logout}</span>
        <span class="sheet-label">Sign Out</span>
      </button>
      <button class="sheet-close" onclick="H.closeSheet()">${I.close} Close</button>`;
    sheet.classList.add('open'); bg.classList.add('open');
  },

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

  _showOnboarding() {
    if(localStorage.getItem('pamarket_onboarded')) return;
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
    window._onboardSkip=()=>{localStorage.setItem('pamarket_onboarded','1');ov.remove();};
    document.body.appendChild(ov);
    render();
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

  init() {
    this.state=this.loadState();
    var hadDemo = (this.state.listings||[]).some(l=>String(l.id).startsWith('demo')) ||
                  (this.state.users||[]).some(u=>String(u.id).startsWith('demo'));
    this.state.listings=(this.state.listings||[]).filter(l=>!String(l.id).startsWith('demo'));
    this.state.users=(this.state.users||[]).filter(u=>!String(u.id).startsWith('demo'));
    if (hadDemo) this.saveState();
    window.onerror = function(msg, src, line, col, err) {
      try {
        var sb = window.supabase;
        if (sb && typeof sb.from === 'function') {
          sb.from('error_logs').insert({ message: String(msg), source: src+':'+line, stack: err ? String(err.stack||'').slice(0,500) : null, created_at: new Date().toISOString() }).then(function(){});
        }
      } catch(e) {}
    };
    this._registerCategoryView();
    this._registerJobPage();
    this._registerExtraPages();
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

['navTo','openInner','goBack','toast','closeModal','closeSheet'].forEach(fn=>{
  window[fn]=(...a)=>H[fn](...a);
});
window.pushNotif=(uid,title,body)=>H.pushNotif&&H.pushNotif(uid,title,body);
window.openListing=id=>H.openListing(id);

H.init();
