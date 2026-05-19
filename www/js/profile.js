'use strict';
(function (H) {
  const pages = H.pages;

  const activeCount = uid => (H.state.listings || []).filter(l => l.sellerId === uid && l.status === 'active').length;
  const soldCount   = uid => (H.state.listings || []).filter(l => l.sellerId === uid && l.status === 'sold').length;

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
        <div class="stat-box"><div class="stat-val">${activeCount(u.id)}</div><div class="stat-label">Active Ads</div></div>
        <div class="stat-box"><div class="stat-val">${avgRating}</div><div class="stat-label">Rating (${ratingCount})</div></div>
        <div class="stat-box"><div class="stat-val">${soldCount(u.id)}</div><div class="stat-label">Sold</div></div>
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

  pages.EditProfile = function () {
    const u = H.currentUser();
    if (!u) return H.emptyState('Not logged in', 'Please sign in');

    return `<div class="page active">
      ${H.innerTopbar('Edit Profile')}
      <div class="form-wrap">
        <div style="display:flex;flex-direction:column;align-items:center;padding:8px 0 16px">
          <div style="width:80px;height:80px;border-radius:50%;overflow:hidden;background:#1A3A8F14;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:800;color:#1A3A8F;margin-bottom:10px;border:2.5px solid #1A3A8F22">
            ${u.avatar ? `<img id="avatarPreview" src="${H.escHtml(u.avatar)}" style="width:100%;height:100%;object-fit:cover">` : `<span id="avatarPreview">${H.initials(u.name)}</span>`}
          </div>
          <label for="profilePicFile" style="font-size:13px;font-weight:600;color:#1A3A8F;cursor:pointer;background:#1A3A8F14;padding:7px 16px;border-radius:20px">Change Photo</label>
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
        if (phone && !/^\+?[0-9\s\-]{7,16}$/.test(phone)) { showErr('Phone number looks invalid. Use format: +263 77 123 4567'); return; }
        if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
        if (errEl) errEl.style.display = 'none';
        u.name  = name;
        if (phone) u.phone = phone;
        u.bio   = bio;
        H.saveState();
        const c = window.supabase && typeof window.supabase.from === 'function' ? window.supabase : null;
        if (c) {
          const res = await c.from('profiles').upsert({ id: u.id, name: u.name, phone: u.phone || null, bio: u.bio || null, avatar: u.avatar || null, updated_at: new Date().toISOString() });
          if (res && res.error) console.warn('Profile sync failed:', res.error.message);
        }
        if (btn) { btn.disabled = false; btn.textContent = 'Save Changes'; }
        if (okEl) { okEl.style.display = ''; setTimeout(() => { if(okEl) okEl.style.display='none'; }, 2500); }
        H.toast('Profile updated!');
      }
    };
  };

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
      active:   (id) => btn('Edit',`H._myListings.edit('${id}')`,'#1A3A8F','#EFF6FF','#BFDBFE')+btn('Mark Sold',`H._myListings.markSold('${id}')`,'#16a34a','#dcfce7','#bbf7d0')+btn('Delete',`H._myListings.del('${id}')`,'#ef4444','#fef2f2','#fecaca'),
      pending:  (id) => btn('Edit',`H._myListings.edit('${id}')`,'#1A3A8F','#EFF6FF','#BFDBFE')+btn('Delete',`H._myListings.del('${id}')`,'#ef4444','#fef2f2','#fecaca'),
      sold:     (id) => btn('Post Again',`H._myListings.reactivate('${id}')`,'#1A3A8F','#EFF6FF','#BFDBFE')+btn('Delete',`H._myListings.del('${id}')`,'#ef4444','#fef2f2','#fecaca'),
      rejected: (id) => btn('Edit & Resubmit',`H._myListings.edit('${id}')`,'#D97706','#FFFBEB','#FDE68A')+btn('Delete',`H._myListings.del('${id}')`,'#ef4444','#fef2f2','#fecaca'),
    };
    const myCard = (l, status) => `<div style="margin-bottom:14px">${H.renderListCard(l)}<div style="display:flex;gap:6px;margin-top:6px">${(actionBars[status]||actionBars.active)(l.id)}</div></div>`;
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
      markSold: (id) => { const l=(H.state.listings||[]).find(x=>x.id===id); if(!l)return; l.status='sold'; l.soldAt=Date.now(); H.saveState(); H.toast('Listing marked as sold'); H.renderPage('MyListings'); },
      del: (id) => { if(!window.confirm('Delete this listing permanently?'))return; H.state.listings=(H.state.listings||[]).filter(x=>x.id!==id); H.saveState(); H.toast('Listing deleted'); H.renderPage('MyListings'); },
      reactivate: (id) => { const l=(H.state.listings||[]).find(x=>x.id===id); if(!l)return; l.status='active'; delete l.soldAt; l.renewedAt=Date.now(); H.saveState(); H.toast('Listing reactivated!'); H.renderPage('MyListings'); },
    };
  };

  pages.EditListing = function (params) {
    const id = params && params.listingId;
    const l  = id ? (H.state.listings || []).find(x => x.id === id) : null;
    if (!l) return `<div class="page active">${H.innerTopbar('Edit Listing')}${H.emptyState('Listing not found','')}</div>`;
    return `<div class="page active">
      ${H.innerTopbar('Edit Listing')}
      <div class="form-wrap">
        <div class="fg"><div class="fl">Title</div><input class="fi" id="elTitle" value="${H.escHtml(l.title || '')}" placeholder="Listing title" maxlength="80"></div>
        <div class="fg"><div class="fl">Price (USD)</div><input class="fi" id="elPrice" type="number" min="0" value="${H.escHtml(String(l.price || ''))}" placeholder="0"></div>
        <div class="fg"><div class="fl">Description</div><textarea class="fi" id="elDesc" rows="5" placeholder="Describe your item...">${H.escHtml(l.description || '')}</textarea></div>
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
        const showErr = (m) => { if(errEl){errEl.textContent=m;errEl.style.display='';} };
        if (!title) { showErr('Title is required'); return; }
        if (isNaN(price) || price < 0) { showErr('Enter a valid price'); return; }
        if (!desc) { showErr('Description is required'); return; }
        const l = (H.state.listings || []).find(x => x.id === id);
        if (!l) { showErr('Listing not found'); return; }
        l.title=title; l.price=price; l.description=desc; l.updatedAt=Date.now();
        if (l.status === 'rejected') l.status = 'pending';
        if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
        H.saveState();
        H.toast('Listing updated!');
        H.goBack();
      }
    };
  };

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
        ${list.length ? list.map(savedCard).join('') : H.emptyState('No saved listings', 'Tap the heart on any listing to save it', 'Browse', "H.navTo('Browse')")}
      </div>
      <div style="height:24px"></div>
    </div>`;
  };

  pages.Favorites_after = function () {
    H._favorites = {
      unsave: (id) => {
        const u = H.currentUser(); if (!u) return;
        H.state.saves = H.state.saves || {};
        H.state.saves[u.id] = (H.state.saves[u.id] || []).filter(sid => sid !== id);
        H.saveState();
        H.toast('Removed from saved');
        H.renderPage('Favorites');
      }
    };
  };

  pages.ProfileVerify = function () {
    const u = H.currentUser();
    if (!u) return H.emptyState('Not logged in', 'Please sign in');
    if (u.verified) return `<div class="page active">${H.innerTopbar('Identity Verification')}<div class="section-box" style="text-align:center;padding:32px 20px"><div style="font-size:48px;margin-bottom:12px">✅</div><div style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:8px">Identity Verified</div><div style="font-size:14px;color:var(--sub)">You have a verified badge on all your listings.</div><div style="font-size:12px;color:var(--sub);margin-top:8px">Verified on ${new Date(u.verifiedAt || Date.now()).toLocaleDateString()}</div></div></div>`;
    if (u.verificationPending) return `<div class="page active">${H.innerTopbar('Identity Verification')}<div class="section-box" style="text-align:center;padding:32px 20px"><div style="font-size:48px;margin-bottom:12px">⏳</div><div style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:8px">Verification Pending</div><div style="font-size:14px;color:var(--sub)">Your request is under review. We will notify you within 24 hours.</div></div></div>`;
    return `<div class="page active">
      ${H.innerTopbar('Verify Identity')}
      <div class="section-box" style="text-align:center;padding:24px 20px">
        <div style="font-size:48px;margin-bottom:12px">🢻</div>
        <div style="font-size:18px;font-weight:700;color:var(--text);margin-bottom:8px">Get Verified</div>
        <div style="font-size:14px;color:var(--sub)">Build trust with buyers by verifying your identity with a valid ID.</div>
      </div>
      <div class="form-wrap">
        <div class="fg"><div class="fl">ID Type</div><select class="fi" id="idType"><option>National ID</option><option>Passport</option><option>Driver&#39;s License</option></select></div>
        <div class="fg"><div class="fl">ID Number</div><input class="fi" id="idNum" placeholder="Enter your ID number"></div>
        <div class="fg"><div class="fl">ID Photo (Front)</div>
          <label class="img-upload-zone" for="idPhotoFront"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><div class="img-upload-title">Upload front of ID</div><div class="img-upload-sub">JPG or PNG</div></label>
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
            ${dist.map(d => `<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px"><div style="font-size:11px;color:var(--sub);width:8px">${d.n}</div><div style="flex:1;height:6px;background:var(--border);border-radius:3px;overflow:hidden"><div style="height:100%;background:#f59e0b;width:${Math.round((d.count/maxDist)*100)}%;border-radius:3px;transition:width .3s"></div></div><div style="font-size:11px;color:var(--sub);width:14px;text-align:right">${d.count}</div></div>`).join('')}
          </div>
        </div>
        ${!isOwn && me && !alreadyReviewed ? `<button onclick="H.leaveReview('${u.id}')" style="width:100%;margin-top:16px;padding:12px;background:#1A3A8F;color:#fff;border:none;border-radius:12px;font-size:14px;font-weight:700;cursor:pointer">Leave a Review</button>` : ''}
        ${!isOwn && me && alreadyReviewed ? `<div style="text-align:center;margin-top:14px;font-size:13px;color:var(--sub)">You have already reviewed this seller</div>` : ''}
      </div>
      <div style="padding:12px 14px 88px">
        ${reviews.length ? reviews.slice().sort((a,b) => b.date - a.date).slice(0,20).map(r => `
          <div style="background:var(--card);border-radius:14px;padding:14px;margin-bottom:10px;border:1px solid var(--border)">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px">
              <div><div style="font-size:14px;font-weight:700;color:var(--text)">${H.escHtml(r.reviewerName || 'Anonymous')}</div><div style="display:flex;gap:2px;margin-top:3px">${stars(r.rating||0)}</div></div>
              <div style="font-size:12px;color:var(--sub)">${H.timeAgo(r.date)}</div>
            </div>
            ${r.text ? `<div style="font-size:13px;color:var(--text);line-height:1.6;margin-top:8px">${H.escHtml(r.text)}</div>` : ''}
          </div>`).join('') : `<div style="text-align:center;padding:48px 20px"><div style="font-size:40px;margin-bottom:12px">⭐</div><div style="font-size:17px;font-weight:700;color:var(--text);margin-bottom:6px">No reviews yet</div><div style="font-size:13px;color:var(--sub)">Reviews from buyers will appear here after transactions</div></div>`}
      </div>
    </div>`;
  };

  H.leaveReview = function (sellerId) {
    const me = H.currentUser();
    if (!me) { H.requireAuth('Sign in to leave a review'); return; }
    if (sellerId === me.id) { H.toast('You cannot review yourself'); return; }
    H.modal({
      title: 'Leave a Review',
      body: `<div style="text-align:center;margin-bottom:14px"><div style="font-size:13px;color:var(--sub);margin-bottom:10px">Tap to rate your experience</div><div id="starPicker" style="display:flex;justify-content:center;gap:8px">${[1,2,3,4,5].map(n => `<button data-star="${n}" onclick="H._pickStar(${n})" style="font-size:32px;background:none;border:none;cursor:pointer;padding:4px;line-height:1">☆</button>`).join('')}</div></div><textarea id="reviewText" rows="3" placeholder="Share your experience with this seller…" style="width:100%;padding:12px;border:1.5px solid var(--border);border-radius:12px;font-size:13px;background:var(--card);color:var(--text);outline:none;box-sizing:border-box;resize:vertical;font-family:Inter,sans-serif"></textarea>`,
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
    const review = { id: H.uid(), reviewerId: me.id, reviewerName: me.name || 'User', rating, text, date: Date.now() };
    seller.reviews.unshift(review);
    seller.ratings.push(rating);
    H.saveState();
    var _sb = window.supabase;
    if (_sb && typeof _sb.from === 'function') {
      _sb.from('reviews').insert({
        seller_id: sellerId, reviewer_id: me.id,
        reviewer_name: me.name || 'User', rating: rating,
        body: text || null, created_at: new Date().toISOString()
      }).then(function(res) {
        if (res && res.error) console.warn('Review sync failed:', res.error.message);
      });
    }
    H.pushNotif(sellerId, 'New Review', me.name + ' left you a ' + rating + '-star review', 'review');
    H.toast('Review submitted. Thank you!');
    H.renderPage('Reviews', {id: sellerId});
  };

  H._openAppliedJobs = function () { H.openInner('AppliedJobs'); };

})(window.H = window.H || {});
