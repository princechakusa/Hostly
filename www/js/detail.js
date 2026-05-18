'use strict';
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
          ? `<img src="${photos[0]}" id="dPhotoImg" data-photos="${H.escHtml(JSON.stringify(photos))}" onclick="H.openPhotoViewer(JSON.parse(this.dataset.photos),0)" style="cursor:zoom-in">`
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
          <button class="call-btn" onclick="H.callSeller('${sellerPhone}')">
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
    const removing = i >= 0;
    if (removing) { H.state.saves[u.id].splice(i,1); H.toast('Removed from saved'); }
    else { H.state.saves[u.id].push(id); H.toast('Saved'); }
    H.saveState();
    var _sb = window.supabase;
    if (_sb && typeof _sb.from === 'function') {
      if (removing) {
        _sb.from('user_saves').delete().eq('user_id', u.id).eq('listing_id', id)
          .then(function(res) { if (res && res.error) console.warn('Save sync failed:', res.error.message); });
      } else {
        _sb.from('user_saves').upsert({ user_id: u.id, listing_id: id, saved_at: new Date().toISOString() })
          .then(function(res) { if (res && res.error) console.warn('Save sync failed:', res.error.message); });
      }
    }
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
    const clean = phone.replace(/\s+/g,'');
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
      location.href = 'tel:'+clean;
    } else {
      if (navigator.clipboard) navigator.clipboard.writeText(clean);
      H.toast('Number copied: '+clean);
    }
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
        H.saveState();
        var _sb = window.supabase;
        if (_sb) _sb.from('reports').insert({target_type:'listing', target_id:id, reason:reason+(note?' - '+note:''), reported_by:H.currentUser().id, status:'open'}).then(function(r){ if(r&&r.error) console.warn('report save:',r.error.message); });
        H.toast('Report submitted. Thank you.');
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
        H.saveState();
        var _sb = window.supabase;
        if (_sb) _sb.from('reports').insert({target_type:'user', target_id:id, reason:reason+(note?' - '+note:''), reported_by:H.currentUser().id, status:'open'}).then(function(r){ if(r&&r.error) console.warn('report save:',r.error.message); });
        H.toast('Report submitted');
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
