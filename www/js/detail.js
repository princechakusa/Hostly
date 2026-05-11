'use strict';
(function (H) {
  const pages    = H.pages;
  const state    = H.state;
  const { currentUser, escHtml, timeAgo, uid, toast, modal,
          innerTopbar, emptyState, openInner, goBack, renderPage,
          saveState, fmtPrice, categoryIcon, renderListCard,
          initials, pushNotif, filterListings } = H;

  // Icons (prefer H.ICONS, fallback)
  const I = (window.H && H.ICONS) || {};
  const S = {
    crossCircle: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    location:    '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    eye:         '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    boost:       '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    message:     '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    phone:       '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 2.1.74 3.26a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.16.38 2.3.61 3.26.74a2 2 0 0 1 1.72 2.03z"/></svg>',
    flag:        '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
    heart:       '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    user:        '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  };

  // ---------------------------------------------------
  // LISTING DETAIL
  // ---------------------------------------------------
  pages.Detail = function ({ id }) {
    const l = state.listings.find(x => x.id === id);
    if (!l) return `<div class="page active">${innerTopbar('Listing')}<div class="empty-state"><div class="empty-icon">${S.crossCircle}</div><div class="empty-title">Listing not found</div></div></div>`;

    const seller = state.users.find(u => u.id === l.sellerId) || { name: 'Unknown', phone: '', verified: false };
    const u      = currentUser();
    const saved  = (state.saves[u.id] || []).includes(id);
    const isMine = seller.id === u.id;
    const photos = l.photos && l.photos.length ? l.photos : [];

    return `<div class="page active">
      <div class="det-topbar">
        <button class="back" onclick="H.goBack()">
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div class="det-topbar-title">${escHtml(l.title)}</div>
        <button class="share-btn" onclick="H.shareListing('${l.id}')">
          <svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        </button>
        <button class="fav-btn ${saved ? 'saved' : ''}" onclick="H.toggleSave('${l.id}')">
          ${S.heart}
        </button>
      </div>

      <div class="det-photo" id="dPhoto">
        ${photos.length ? `<img src="${photos[0]}" id="dPhotoImg">` : `<div class="ph">${categoryIcon(l.cat)}</div>`}
        ${photos.length > 1 ? `<div class="photo-dots">${photos.map((_, i) =>
          `<div class="pdot ${i === 0 ? 'on' : ''}" onclick="H.setPhoto('${l.id}',${i})"></div>`).join('')}</div>` : ''}
      </div>

      <div class="det-content">
        <div class="det-price-row">
          <div class="det-price">${escHtml(fmtPrice(l.price, l.currency))}</div>
          <div class="nego-pill">Negotiable</div>
        </div>
        <div class="det-listing-title">${escHtml(l.title)}</div>
        <div class="det-loc-row">${S.location} ${escHtml(l.suburb || l.city)}, ${escHtml(l.prov)} Â· ${timeAgo(l.createdAt)} Â· ${S.eye} ${l.views || 0}</div>

        <div class="seller-card" onclick="H.openUserProfile('${seller.id}')">
          ${seller.avatar
            ? `<div class="seller-av"><img src="${seller.avatar}" style="width:100%;height:100%;border-radius:50%;object-fit:cover"></div>`
            : `<div class="seller-av">${initials(seller.name)}</div>`}
          <div class="seller-info">
            <div class="seller-name-row">
              <div class="seller-name">${escHtml(seller.name)}</div>
              ${seller.verified ? `<div class="blue-check" style="width:16px;height:16px">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>` : ''}
            </div>
            <div class="seller-phone">${escHtml(seller.phone)}</div>
            <div class="seller-meta">Member since ${new Date(seller.joinedAt).toLocaleDateString()}${seller.verified ? ' Â· ID Verified' : ''}</div>
          </div>
          <div class="mi-arrow">â€º</div>
        </div>

        <div class="desc-text">${escHtml(l.desc || 'No description provided.')}</div>

        ${isMine ? `
          <button class="btn-pri" onclick="H.openBoostPage('${l.id}')">${S.boost} Boost this listing</button>
          <button class="ml-act-btn red" style="width:100%;padding:13px;margin-top:8px" onclick="H.deleteListing('${l.id}')">Delete Listing</button>
        ` : `
          <button class="wa-btn" onclick="H.openWA('${l.id}')">
            <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
            Chat on WhatsApp
          </button>
          <button class="msg-btn" onclick="H.startChatWith('${seller.id}','${l.id}')">${S.message} Message in App</button>
          <button class="call-btn" onclick="H.callSeller('${seller.phone}')">${S.phone} Call ${escHtml(seller.phone)}</button>
          <button class="report-btn" onclick="H.reportListing('${l.id}')">${S.flag} Report this listing</button>
        `}
      </div>
    </div>`;
  };

  // ---------------------------------------------------
  // DETAIL ACTIONS
  // ---------------------------------------------------
  H.setPhoto = function (id, i) {
    const l = state.listings.find(x => x.id === id);
    if (!l || !l.photos[i]) return;
    document.getElementById('dPhotoImg').src = l.photos[i];
    document.querySelectorAll('.pdot').forEach((d, j) => d.classList.toggle('on', j === i));
  };

  H.openUserProfile = async function (id) {
    await openInner('UserProfile', { id });
  };

  H.openBoostPage = async function (listingId) {
    await openInner('Boost', { listingId });
  };

  H.shareListing = function (id) {
    const l = state.listings.find(x => x.id === id); if (!l) return;
    const text = `${l.title} Â· ${fmtPrice(l.price, l.currency)} on Hostly`;
    if (navigator.share) {
      navigator.share({ title: l.title, text, url: location.href }).catch(() => {});
    } else {
      if (navigator.clipboard) navigator.clipboard.writeText(text + ' ' + location.href);
      toast('Link copied to clipboard');
    }
  };

  H.toggleSave = function (id) {
    const u = currentUser();
    state.saves[u.id] = state.saves[u.id] || [];
    const i = state.saves[u.id].indexOf(id);
    if (i >= 0) { state.saves[u.id].splice(i, 1); toast('Removed from saved'); }
    else { state.saves[u.id].push(id); toast('Saved'); }
    saveState();
    renderPage('Detail', { id });
  };

  H.deleteListing = function (id) {
    modal({
      title: 'Delete this listing?', body: 'This cannot be undone.',
      confirmText: 'Delete', danger: true,
      onConfirm: () => {
        state.listings = state.listings.filter(l => l.id !== id);
        saveState(); toast('Listing deleted'); goBack();
      }
    });
  };

  H.openWA = function (id) {
    const l = state.listings.find(x => x.id === id); if (!l) return;
    const seller = state.users.find(u => u.id === l.sellerId); if (!seller) return;
    const phone = seller.phone.replace(/[^\d]/g, '');
    const txt = encodeURIComponent(`Hi! I saw your "${l.title}" on Hostly. Is it still available?`);
    window.open(`https://wa.me/${phone}?text=${txt}`, '_blank');
  };

  H.callSeller = function (phone) {
    if (/Mobi|Android|iPhone/.test(navigator.userAgent)) location.href = 'tel:' + phone.replace(/\s+/g, '');
    else { if (navigator.clipboard) navigator.clipboard.writeText(phone); toast('Number copied: ' + phone); }
  };

  H.reportListing = function (id) {
    const reasons = ['Scam or fraud', 'Counterfeit / fake item', 'Wrong category', 'Prohibited item', 'Offensive content', 'Duplicate listing', 'Other'];
    modal({
      title: 'Report this listing',
      body: `<select class="fi" id="reportReason">${reasons.map(r => `<option>${r}</option>`).join('')}</select>
        <textarea class="fi" id="reportNote" rows="3" placeholder="Tell us more (optional)" style="margin-top:8px"></textarea>`,
      confirmText: 'Submit Report',
      onConfirm: () => {
        const reason = document.getElementById('reportReason').value;
        const note   = document.getElementById('reportNote').value;
        state.reports.push({ id: uid(), reporterId: state.currentUserId, targetType: 'listing', targetId: id, reason: reason + (note ? ' â€¦ ' + note : ''), t: Date.now(), status: 'open' });
        saveState(); toast('Report submitted. Thank you.');
      }
    });
  };

  H.reportUser = function (id) {
    const reasons = ['Scammer / fraudster', 'Harassment', 'Spam', 'Fake account', 'Impersonation', 'Other'];
    modal({
      title: 'Report this user',
      body: `<select class="fi" id="reportReason">${reasons.map(r => `<option>${r}</option>`).join('')}</select>
        <textarea class="fi" id="reportNote" rows="3" placeholder="More details (optional)" style="margin-top:8px"></textarea>`,
      confirmText: 'Submit Report',
      onConfirm: () => {
        const reason = document.getElementById('reportReason').value;
        const note   = document.getElementById('reportNote').value;
        state.reports.push({ id: uid(), reporterId: state.currentUserId, targetType: 'user', targetId: id, reason: reason + (note ? ' â€¦ ' + note : ''), t: Date.now(), status: 'open' });
        saveState(); toast('Report submitted');
      }
    });
  };

  H.openListing = window.openListing = async function (id) {
    const l = state.listings.find(x => x.id === id); if (!l) return;
    l.views = (l.views || 0) + 1; saveState();
    await H.openInner('Detail', { id });
  };

  // ---------------------------------------------------
  // PUBLIC USER PROFILE
  // ---------------------------------------------------
  pages.UserProfile = function ({ id }) {
    const u = state.users.find(x => x.id === id);
    if (!u) return `<div class="page active">${innerTopbar('User')}<div class="empty-state"><div class="empty-icon">${S.user}</div><div class="empty-title">User not found</div></div></div>`;
    const myListings = (state.listings || []).filter(l => l.sellerId === u.id && l.status === 'active');
    const me   = currentUser();
    const isMe = u.id === me.id;
    return `<div class="page active">
      <div class="det-topbar">
        <button class="back" onclick="H.goBack()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>
        <div class="det-topbar-title">${escHtml(u.name)}</div>
        ${!isMe ? `<button class="share-btn" onclick="H.reportUser('${u.id}')" title="Report">
          <svg viewBox="0 0 24 24"><line x1="4" y1="22" x2="4" y2="15"/><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/></svg>
        </button>` : ''}
      </div>
      <div class="prof-top">
        <div class="prof-av">${u.avatar ? `<img src="${u.avatar}">` : initials(u.name)}</div>
        <div class="prof-name">${escHtml(u.name)}</div>
        ${u.verified ? `<div class="prof-badges"><span class="pbadge pbadge-verified">
          <span class="blue-check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span>ID Verified</span></div>` : ''}
        <div style="font-size:12px;color:rgba(255,255,255,.6);margin-top:8px">Member since ${new Date(u.joinedAt).toLocaleDateString()}</div>
      </div>
      <div class="sec-head"><div class="sec-title">${myListings.length} active listing${myListings.length === 1 ? '' : 's'}</div></div>
      <div class="listing-list">
        ${myListings.length ? myListings.map(renderListCard).join('') : emptyState('No listings', 'This user has no active listings', null, null)}
      </div>
    </div>`;
  };

})(window.H);

