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
