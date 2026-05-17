'use strict';
(function (H) {
  const pages = H.pages;

  // --- Profile Page -----------------------------------------
  pages.Profile = function () {
    const u = H.currentUser();
    if (!u) return H.emptyState('Not logged in', 'Please sign in to continue', 'Go Home', "H.navTo('Home')");

    const verified = u.verified ? '? Verified' : '? Not Verified';
    const verifiedClass = u.verified ? 'verified' : 'unverified';
    const avgRating = u.ratings && u.ratings.length > 0 
      ? (u.ratings.reduce((a,b) => a+b, 0) / u.ratings.length).toFixed(1) 
      : 'N/A';
    const ratingCount = u.ratings ? u.ratings.length : 0;

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
          <div class="profile-phone">?? ${H.escHtml(u.phone || 'N/A')}</div>
          <div class="profile-status ${verifiedClass}">
            ${u.verified ? '?' : '?'} ${verified}
          </div>
        </div>
      </div>

      <div class="profile-stats">
        <div class="stat-box">
          <div class="stat-val">${u.listings ? u.listings.length : 0}</div>
          <div class="stat-label">Active Listings</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">${avgRating}</div>
          <div class="stat-label">Rating (${ratingCount})</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">${u.totalSold || 0}</div>
          <div class="stat-label">Sold Items</div>
        </div>
      </div>

      <div class="form-wrap">
        <button class="btn-pri" onclick="H.openInner('EditProfile')">?? Edit Profile</button>
        <button class="btn-sec" onclick="H.openInner('ProfileVerify')">?? Verify Identity</button>
        <button class="btn-sec" onclick="H.openInner('Reviews')">? Reviews & Ratings</button>
      </div>

      <div class="section-box">
        <div class="section-title">Account Info</div>
        <div class="info-row">
          <span class="info-label">Email</span>
          <span class="info-val">${H.escHtml(u.email || 'N/A')}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Joined</span>
          <span class="info-val">${new Date(u.joinedAt || u.createdAt || Date.now()).toLocaleDateString()}</span>
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
          <input class="fi" id="editName" value="${H.escHtml(u.name || '')}" placeholder="Your full name">
        </div>
        
        <div class="fg">
          <div class="fl">Phone Number</div>
          <input class="fi" id="editPhone" value="${H.escHtml(u.phone || '')}" placeholder="+263 77..." type="tel">
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
      },
      save: () => {
        const u = H.currentUser();
        u.name = document.getElementById('editName').value.trim();
        u.phone = document.getElementById('editPhone').value.trim();
        u.bio = document.getElementById('editBio').value.trim();
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

    const renderListings = (list, label) => {
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
        <div class="tab-content active" data-tab="active">
          ${renderListings(active, 'Active')}
        </div>
        <div class="tab-content" data-tab="pending">
          ${renderListings(pending, 'Pending')}
        </div>
        <div class="tab-content" data-tab="sold">
          ${renderListings(sold, 'Sold')}
        </div>
        <div class="tab-content" data-tab="rejected">
          ${renderListings(rejected, 'Rejected')}
        </div>
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
        document.querySelector(`[data-tab="${tab}"].tab-content`).classList.add('active');
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
          <div class="verify-icon">?</div>
          <div class="verify-title">Identity Verified</div>
          <div class="verify-sub">Your identity has been verified. You get a blue badge on your listings!</div>
          <div class="verify-date">Verified on ${new Date(u.verifiedAt).toLocaleDateString()}</div>
        </div>
      </div>`;
    }

    return `<div class="page active">
      ${H.innerTopbar('Verify Identity')}
      <div class="section-box">
        <div class="verify-icon">??</div>
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
        const idType = document.getElementById('idType')?.value;
        const idNum = document.getElementById('idNum')?.value?.trim();
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
    const avgRating = u.ratings && u.ratings.length > 0 
      ? (u.ratings.reduce((a,b) => a+b, 0) / u.ratings.length).toFixed(1) 
      : 0;

    return `<div class="page active">
      ${H.innerTopbar('Reviews & Ratings')}
      <div class="rating-summary">
        <div class="rating-big">${avgRating}</div>
        <div class="rating-stars">
          ${'?'.repeat(Math.round(avgRating))}${'?'.repeat(5 - Math.round(avgRating))}
        </div>
        <div class="rating-count">Based on ${u.ratings ? u.ratings.length : 0} reviews</div>
      </div>

      <div class="section-box">
        <div class="section-title">Recent Reviews</div>
        ${u.reviews && u.reviews.length
          ? u.reviews.slice(0, 10).map(r => `
              <div class="review-item">
                <div class="review-header">
                  <div class="review-name">${H.escHtml(r.reviewerName || 'Anonymous')}</div>
                  <div class="review-rating">? ${r.rating}</div>
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
