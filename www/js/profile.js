'use strict';
(function (H) {
  const pages = H.pages;

  // Helper: count active & sold listings from global state
  const userActiveCount = (uid) =>
    (H.state.listings || []).filter(l => l.sellerId === uid && l.status === 'active').length;
  const userSoldCount = (uid) =>
    (H.state.listings || []).filter(l => l.sellerId === uid && l.status === 'sold').length;

  // Reusable SVG icons (Feather-style)
  const icons = {
    pencil: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/><line x1="15" y1="5" x2="19" y2="9"/></svg>`,
    shield: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    star:   `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    phone:  `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 2.1.74 3.26a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.16.38 2.3.61 3.26.74a2 2 0 0 1 1.72 2.03z"/></svg>`,
    idCard: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><path d="M10 14h4"/><circle cx="10" cy="17" r="1"/></svg>`,
    check: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`,
    alert: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  };

  // --- Profile Page -----------------------------------------
  pages.Profile = function (params) {
    const viewId = params && params.id;
    const u = viewId ? (H.state.users || []).find(function(x){ return x.id === viewId; }) : H.currentUser();
    const isOwnProfile = !viewId || (H.currentUser() && viewId === H.currentUser().id);

    const verifiedBadge = u.verified
      ? `<span class="verified">${icons.check} Verified</span>`
      : `<span class="unverified">${icons.alert} Not Verified</span>`;

    const avgRating = (u.ratings && u.ratings.length > 0)
      ? (u.ratings.reduce((a,b) => a+b, 0) / u.ratings.length).toFixed(1)
      : 'N/A';
    const ratingCount = u.ratings ? u.ratings.length : 0;

    const activeCount = userActiveCount(u.id);
    const soldCount   = userSoldCount(u.id);

    return `<div class="page active">
      ${H.innerTopbar('My Profile')}
      <div class="profile-hero">
        <div class="profile-pic">
          ${u.avatar
            ? `<img src="${u.avatar}" alt="${H.escHtml(u.name)}">`
            : `<div class="profile-initials">${H.initials(u.name)}</div>`}
        </div>
        <div class="profile-info">
          <div class="profile-name">${H.escHtml(u.name || 'User')}</div>
          <div class="profile-phone">${icons.phone} ${H.escHtml(u.phone || 'N/A')}</div>
          <div class="profile-status">${verifiedBadge}</div>
        </div>
      </div>

      <div class="profile-stats">
        <div class="stat-box">
          <div class="stat-val">${activeCount}</div>
          <div class="stat-label">Active Listings</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">${avgRating}</div>
          <div class="stat-label">Rating (${ratingCount})</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">${soldCount}</div>
          <div class="stat-label">Sold Items</div>
        </div>
      </div>

      <div class="form-wrap">
        <button class="btn-pri" onclick="H.openInner('EditProfile')">
          ${icons.pencil} Edit Profile
        </button>
        <button class="btn-sec" onclick="H.openInner('ProfileVerify')">
          ${icons.shield} Verify Identity
        </button>
        <button class="btn-sec" onclick="H.openInner('Reviews')">
          ${icons.star} Reviews & Ratings
        </button>
      </div>

      <div class="section-box">
        <div class="section-title">Account Info</div>
        <div class="info-row">
          <span class="info-label">Email</span>
          <span class="info-val">${H.escHtml(u.email || 'N/A')}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Joined</span>
          <span class="info-val">${new Date(u.createdAt || Date.now()).toLocaleDateString()}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Status</span>
          <span class="info-val">${H.escHtml(u.status || 'Active')}</span>
        </div>
      </div>

      <div style="height:20px"></div>
    </div>`;
  };

  // --- Edit Profile Page ------------------------------------
  pages.EditProfile = function () {
    const u = H.currentUser();
    if (!u) return H.emptyState('Not logged in', 'Please sign in to continue');

    return `<div class="page active">
      ${H.innerTopbar('Edit Profile')}
      <div class="form-wrap">
        <div class="fg">
          <div class="fl">Full Name</div>
          <input class="fi" id="editName" value="${H.escHtml(u.name || '')}" placeholder="Your full name" maxlength="60">
        </div>
        <div class="fg">
          <div class="fl">Phone Number</div>
          <input class="fi" id="editPhone" value="${H.escHtml(u.phone || '')}" placeholder="+263 77..." type="tel" maxlength="15">
        </div>
        <div class="fg">
          <div class="fl">Bio</div>
          <textarea class="fi" rows="3" id="editBio" placeholder="Tell buyers about yourself...">${H.escHtml(u.bio || '')}</textarea>
        </div>
        <div class="fg">
          <div class="fl">Profile Picture</div>
          <label class="img-upload-zone" for="profilePicFile">
            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <div class="img-upload-title">Tap to change</div>
            <div class="img-upload-sub">JPG, PNG · Max 2MB</div>
          </label>
          <input type="file" id="profilePicFile" accept="image/*" capture="user" style="display:none" onchange="H._editProfile.onPicChange(event)">
        </div>
        <div class="btn-group">
          <button class="btn-pri" onclick="H._editProfile.save()">Save Changes</button>
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
        const compressed = await H.compressImage(file, 300, 0.85);
        const u = H.currentUser();
        u.avatar = compressed;
        H.saveState();
        // Re-render the page to show updated avatar
        H.renderPage('EditProfile');
      },
      save: () => {
        const u = H.currentUser();
        const nameEl = document.getElementById('editName');
        const phoneEl = document.getElementById('editPhone');
        const bioEl = document.getElementById('editBio');
        if (nameEl) u.name = nameEl.value.trim();
        if (phoneEl) u.phone = phoneEl.value.trim();
        if (bioEl) u.bio = bioEl.value.trim();
        H.saveState();
        H.toast('Profile updated!');
        H.goBack();
      }
    };
  };

  // --- My Listings Page --------------------------------------
  pages.MyListings = function () {
    const u = H.currentUser();
    const myListings = (H.state.listings || []).filter(l => l.sellerId === u.id);
    const active = myListings.filter(l => l.status === 'active');
    const pending = myListings.filter(l => l.status === 'pending');
    const sold = myListings.filter(l => l.status === 'sold');
    const rejected = myListings.filter(l => l.status === 'rejected');

    const renderSection = (list, label) => {
      if (!list.length) return `<div class="empty-section">No ${label.toLowerCase()} listings</div>`;
      return `
        <div class="listing-section">
          <div class="section-title">${label}</div>
          <div class="listing-list">${list.map(H.renderListCard).join('')}</div>
        </div>`;
    };

    return `<div class="page active">
      ${H.innerTopbar('My Listings')}
      <div class="listing-tabs">
        <button class="tab active" data-tab="active">Active (${active.length})</button>
        <button class="tab" data-tab="pending">Pending (${pending.length})</button>
        <button class="tab" data-tab="sold">Sold (${sold.length})</button>
        <button class="tab" data-tab="rejected">Rejected (${rejected.length})</button>
      </div>
      <div class="tabs-content">
        <div class="tab-content active" data-tab="active">${renderSection(active, 'Active')}</div>
        <div class="tab-content" data-tab="pending">${renderSection(pending, 'Pending')}</div>
        <div class="tab-content" data-tab="sold">${renderSection(sold, 'Sold')}</div>
        <div class="tab-content" data-tab="rejected">${renderSection(rejected, 'Rejected')}</div>
      </div>
      <div style="height:20px"></div>
    </div>`;
  };

  pages.MyListings_after = function () {
    document.querySelectorAll('.listing-tabs .tab').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.listing-tabs .tab').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        const tab = e.target.dataset.tab;
        const target = document.querySelector(`.tab-content[data-tab="${tab}"]`);
        if (target) target.classList.add('active');
      });
    });
  };

  // --- Favorites / Saved Listings ----------------------------
  pages.Favorites = function () {
    const u = H.currentUser();
    const saved = (H.state.saves && H.state.saves[u.id]) || [];
    const savedListings = (H.state.listings || []).filter(l => saved.includes(l.id) && l.status === 'active');

    return `<div class="page active">
      ${H.innerTopbar('Saved & Favorites')}
      <div class="form-wrap">
        <div class="listing-list">
          ${savedListings.length
            ? savedListings.map(H.renderListCard).join('')
            : H.emptyState('No saved listings yet', 'Tap the heart icon on listings to save them', 'Browse Listings', "H.navTo('Browse')")}
        </div>
      </div>
      <div style="height:20px"></div>
    </div>`;
  };

  // --- Profile Verification ---------------------------------
  pages.ProfileVerify = function () {
    const u = H.currentUser();
    const isVerified = u.verified;

    if (isVerified) {
      return `<div class="page active">
        ${H.innerTopbar('Identity Verification')}
        <div class="section-box verified-box">
          <div class="verify-icon">${icons.check}</div>
          <div class="verify-title">Identity Verified</div>
          <div class="verify-sub">Your identity has been verified. You get a blue badge on your listings!</div>
          <div class="verify-date">Verified on ${new Date(u.verifiedAt).toLocaleDateString()}</div>
        </div>
      </div>`;
    }

    return `<div class="page active">
      ${H.innerTopbar('Verify Identity')}
      <div class="section-box">
        <div class="verify-icon">${icons.idCard}</div>
        <div class="verify-title">Get Verified</div>
        <div class="verify-sub">Build trust with buyers by verifying your identity with a valid ID</div>
      </div>
      <div class="form-wrap">
        <div class="fg">
          <div class="fl">ID Type</div>
          <select class="fi" id="idType">
            <option>National ID</option>
            <option>Passport</option>
            <option>Driver's License</option>
          </select>
        </div>
        <div class="fg">
          <div class="fl">ID Number</div>
          <input class="fi" id="idNum" placeholder="Enter ID number">
        </div>
        <div class="fg">
          <div class="fl">ID Photo (Front)</div>
          <label class="img-upload-zone" for="idPhotoFront">
            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <div class="img-upload-title">Upload front photo</div>
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
        const idNumEl = document.getElementById('idNum');
        const idNum = idNumEl ? idNumEl.value.trim() : '';
        if (!idNum) { H.toast('Please enter ID number'); return; }
        H.toast('Verification request submitted. We will review within 24h.');
        const u = H.currentUser();
        u.verificationPending = true;
        H.saveState();
        H.goBack();
      }
    };
  };

  // --- Reviews & Ratings ------------------------------------
  pages.Reviews = function () {
    const u = H.currentUser();
    const avgRating = (u.ratings && u.ratings.length > 0)
      ? (u.ratings.reduce((a,b) => a+b, 0) / u.ratings.length).toFixed(1)
      : 0;

    const filledStar = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    const emptyStar = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;

    const starsHtml = Array.from({length: 5}, (_, i) =>
      i < Math.round(avgRating) ? filledStar : emptyStar
    ).join('');

    return `<div class="page active">
      ${H.innerTopbar('Reviews & Ratings')}
      <div class="rating-summary">
        <div class="rating-big">${avgRating}</div>
        <div class="rating-stars" style="display:flex;align-items:center;justify-content:center;gap:4px">${starsHtml}</div>
        <div class="rating-count">Based on ${u.ratings ? u.ratings.length : 0} reviews</div>
      </div>

      <div class="section-box">
        <div class="section-title">Recent Reviews</div>
        ${u.reviews && u.reviews.length
          ? u.reviews.slice(0, 10).map(r => `
              <div class="review-item">
                <div class="review-header">
                  <div class="review-name">${H.escHtml(r.reviewerName || 'Anonymous')}</div>
                  <div class="review-rating">
                    ${Array.from({length: 5}, (_, i) => i < r.rating ? filledStar : emptyStar).join('')}
                  </div>
                </div>
                <div class="review-text">${H.escHtml(r.text)}</div>
                <div class="review-date">${H.timeAgo(r.date)}</div>
              </div>
            `).join('')
          : '<div style="color:var(--sub);padding:16px">No reviews yet</div>'}
      </div>
    </div>`;
  };

})(window.H = window.H || {});