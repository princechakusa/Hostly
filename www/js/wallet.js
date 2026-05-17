'use strict';
(function (H) {
  const pages = H.pages;
  const state = H.state;
  const { saveState, fmtPrice, pushNotif, navTo, escHtml, uid, currentUser, toast, modal, innerTopbar, emptyState, initials, timeAgo } = H;

  // Icon fallback (prefer H.ICONS)
  const I = {
    boost: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    down: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>',
    up:   '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
    wallet: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
    plus: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    minus: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    card: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
  };

  let _boostState = { planId: 'standard', listingId: null };

  // ---------------------------------------------------
  // BOOST
  // ---------------------------------------------------
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
        <div style="text-align:center;font-size:12px;color:var(--sub);margin-top:8px">Top up via EcoCash, OneMoney or USD card</div>
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
          title: 'Insufficient balance',
          body: `You need $${(plan.price - (u.walletUSD || 0)).toFixed(2)} more. Top up your wallet first?`,
          confirmText: 'Top Up',
          onConfirm: () => { H.goBack(); H.openInner('Payments'); }
        });
        return;
      }
      u.walletUSD = +(u.walletUSD - plan.price).toFixed(2);
      l.boost = { plan: plan.id, until: Date.now() + plan.days * 86400000 };
      H.state.txns = H.state.txns || [];
      H.state.txns.unshift({
        id: uid(), userId: u.id, type: 'boost', amt: -plan.price,
        t: Date.now(), note: plan.name + ' … ' + l.title
      });
      pushNotif(u.id, 'Boost activated', `${l.title} is now boosted for ${plan.days} days.`);
      H.saveState();
      H.toast('Boost activated!');
      H.goBack();
    }
  };

  // ---------------------------------------------------
  // PAYMENTS / WALLET
  // ---------------------------------------------------
  pages.Payments = function () {
    const u    = H.currentUser();
    const txns = (H.state.txns || []).filter(t => t.userId === u.id).slice(0, 30);

    return `<div class="page active">${H.innerTopbar('Wallet & Payments')}
      <div class="inner-content">
        <div class="pay-balance">
          <div class="pay-bal-lbl">Wallet Balance</div>
          <div class="pay-bal-amt">$${(u.walletUSD || 0).toFixed(2)}</div>
          <div class="pay-actions">
            <button class="pay-act" onclick="H.showTopUp()">${I.plus} Top Up</button>
            <button class="pay-act" onclick="H._wallet.withdraw()">Withdraw</button>
          </div>
        </div>

        <div style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px">Transaction History</div>
        <div class="section-card">
          ${txns.length ? txns.map(t => {
            const sign = t.amt >= 0 ? 'plus' : 'minus';
            const ic   = t.type === 'topup' ? 'green' : t.type === 'withdraw' ? 'red' : 'amber';
            // Choose icon based on type
            let iconSvg;
            if (t.type === 'topup') iconSvg = I.down;
            else if (t.type === 'withdraw') iconSvg = I.up;
            else if (t.type === 'boost') iconSvg = I.boost;
            else iconSvg = I.wallet;
            return `<div class="tx-item">
              <div class="tx-icon ${ic}">${iconSvg}</div>
              <div class="tx-body">
                <div class="tx-title">${escHtml(t.note || t.type)}</div>
                <div class="tx-date">${new Date(t.t).toLocaleString()}</div>
              </div>
              <div class="tx-amount ${sign}">${t.amt >= 0 ? '+' : ''}$${Math.abs(t.amt).toFixed(2)}</div>
            </div>`;
          }).join('') : `<div style="padding:24px;text-align:center;color:var(--sub);font-size:13px">No transactions yet</div>`}
        </div>

        <div style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.6px;margin:16px 0 8px">Payment Methods</div>
        <div class="section-card">
          <div class="mi" onclick="H.toast('EcoCash linked to '+H.currentUser().phone)">
            <div class="mi-icon amber-ic">${I.card}</div>
            <div class="mi-label">EcoCash · ${escHtml(u.phone)}</div>
            <span style="font-size:11px;color:var(--n2);font-weight:700;background:var(--n4);padding:2px 8px;border-radius:10px">Primary</span>
          </div>
          <div class="mi" onclick="H.toast('Coming soon')">
            <div class="mi-icon blue-ic">${I.card}</div>
            <div class="mi-label">Add USD Card</div>
            <div class="mi-arrow">›</div>
          </div>
        </div>
      </div>
    </div>`;
  };

  H._wallet = {
    topUp() {
      H.modal({
        title: 'Top Up Wallet',
        body: `<div class="fl">Method</div>
          <select class="fi" id="tuMethod"><option>EcoCash</option><option>OneMoney</option><option>USD Card (Visa/Mastercard)</option></select>
          <div class="fl" style="margin-top:10px">Amount (USD)</div>
          <input class="fi" type="number" id="tuAmt" placeholder="5.00" min="1" step="0.50">`,
        confirmText: 'Top Up',
        onConfirm: () => {
          const amt = parseFloat(document.getElementById('tuAmt').value);
          if (!amt || amt < 1) { H.toast('Min $1.00'); return false; }
          const m = document.getElementById('tuMethod').value;
          const u = H.currentUser();
          u.walletUSD = +(u.walletUSD + amt).toFixed(2);
          H.state.txns = H.state.txns || [];
          H.state.txns.unshift({ id: uid(), userId: u.id, type: 'topup', amt, t: Date.now(), note: 'Top Up … ' + m });
          H.saveState(); H.toast('+$' + amt.toFixed(2) + ' added'); H.renderPage('Payments');
        }
      });
    },
    withdraw() {
      const u = H.currentUser();
      if ((u.walletUSD || 0) <= 0) { H.toast('Nothing to withdraw'); return; }
      H.modal({
        title: 'Withdraw to EcoCash',
        body: `<div class="fl" onclick="H._addPaymentMethod('ecocash')" style="cursor:pointer">Amount</div>
          <input class="fi" type="number" id="wdAmt" placeholder="${u.walletUSD.toFixed(2)}" max="${u.walletUSD}" step="0.50">
          <p style="margin-top:8px;font-size:13px;color:var(--sub)">Sent to ${escHtml(u.phone)} via EcoCash. Processing fee: 3%.</p>`,
        confirmText: 'Withdraw',
        onConfirm: () => {
          const amt = parseFloat(document.getElementById('wdAmt').value);
          if (!amt || amt <= 0 || amt > u.walletUSD) { H.toast('Invalid amount'); return false; }
          u.walletUSD = +(u.walletUSD - amt).toFixed(2);
          H.state.txns = H.state.txns || [];
          H.state.txns.unshift({ id: uid(), userId: u.id, type: 'withdraw', amt: -amt, t: Date.now(), note: 'Withdraw · EcoCash' });
          H.saveState(); H.toast('Withdrawal of $' + amt.toFixed(2) + ' processing'); H.renderPage('Payments');
        }
      });
    }
  };
// Alias: make "Wallet" open the Payments page
pages.Wallet = pages.Payments;

  H.showTopUp = function() {
    var u = H.currentUser();
    if (!u) { H.requireAuth('Sign in to top up'); return; }
    H.modal({
      title: 'Top Up Wallet',
      body: '<div style="font-size:14px;line-height:1.6">'
        + '<div style="background:#e8f5e9;border-radius:10px;padding:14px;margin-bottom:14px">'
        + '<div style="font-weight:700;margin-bottom:6px">How to Top Up:</div>'
        + '<div>1. Send payment via EcoCash or Bank Transfer</div>'
        + '<div>2. Use your name <strong>' + H.escHtml(u.name) + '</strong> as reference</div>'
        + '<div>3. Submit this form - admin will verify and credit your wallet</div>'
        + '</div>'
        + '<div style="background:#f5f5f5;border-radius:10px;padding:14px;margin-bottom:14px">'
        + '<div style="font-weight:700;margin-bottom:8px">Payment Details:</div>'
        + '<div style="margin-bottom:6px">&#128242; <strong>EcoCash:</strong> +263 777 341 565</div>'
        + '<div style="font-size:12px;color:#666">Reference: ' + H.escHtml(u.name) + '</div>'
        + '</div>'
        + '<div class="fg"><div class="fl">Amount (USD)</div><input class="fi" id="topupAmt" type="number" min="1" placeholder="Enter amount e.g. 10" style="margin-top:6px"></div>'
        + '<div class="fg" style="margin-top:10px"><div class="fl">Payment Method</div><select class="fi" id="topupMethod" style="margin-top:6px"><option>EcoCash</option><option>Bank Transfer</option></select></div>'
        + '<div class="fg" style="margin-top:10px"><div class="fl">Transaction Reference / ID</div><input class="fi" id="topupRef" placeholder="e.g. ECO1234567" style="margin-top:6px"></div>'
        + '</div>',
      confirmText: 'Submit for Verification',
      onConfirm: function() {
        var amt = parseFloat(document.getElementById('topupAmt').value);
        var method = document.getElementById('topupMethod').value;
        var ref = document.getElementById('topupRef').value.trim();
        if (!amt || amt < 1) { H.toast('Enter a valid amount'); return false; }
        if (!ref) { H.toast('Enter transaction reference'); return false; }
        var request = {
          id: H.uid(),
          userId: u.id,
          userName: u.name,
          amount: amt,
          method: method,
          reference: ref,
          status: 'pending',
          t: Date.now()
        };
        H.state.topupRequests = H.state.topupRequests || [];
        H.state.topupRequests.push(request);
        H.saveState();
        H.toast('Top-up request submitted! Admin will verify within 24hrs.');
      }
    });
  };

})(window.H);


H.pages.TopUp = function(params) {
  var reason = (params && params.reason) || 'Boost Listing';
  var amount = (params && params.amount) || 5;
  var user = H.currentUser();
  var name = user ? user.name : 'Your Name';
  var html = '<div class="page active">' + H.innerTopbar('Top Up & Pay');
  html += '<div style="padding:16px">';
  html += '<div style="background:linear-gradient(135deg,#1A3A8F,#2d5be3);border-radius:20px;padding:24px;color:#fff;text-align:center;margin-bottom:20px"><div style="font-size:14px;opacity:.8;margin-bottom:4px">Amount Due</div><div style="font-size:36px;font-weight:800;margin-bottom:4px">$' + amount + '</div><div style="font-size:13px;opacity:.8">For: ' + reason + '</div></div>';
  html += '<div style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:12px">How to Pay</div>';
  html += '<div style="background:var(--surface2,#f5f8ff);border-radius:16px;padding:18px;margin-bottom:12px">';
  html += '<div style="font-size:14px;font-weight:700;color:#1A3A8F;margin-bottom:12px">Option 1: EcoCash</div>';
  html += '<div class="topup-row"><div class="topup-label">Send to</div><div class="topup-val" onclick="H._copyText(this)" data-v="0778977264">0778977264 <span style="color:#1A3A8F;font-size:12px">tap to copy</span></div></div>';
  html += '<div class="topup-row"><div class="topup-label">Account Name</div><div class="topup-val">Prince Chakusa</div></div>';
  html += '<div class="topup-row"><div class="topup-label">Amount</div><div class="topup-val">$' + amount + ' USD equivalent</div></div>';
  html += '<div class="topup-row"><div class="topup-label">Reference</div><div class="topup-val" style="color:#e67e00;font-weight:700">' + name + '</div></div>';
  html += '</div>';
  html += '<div style="background:var(--surface2,#f5f8ff);border-radius:16px;padding:18px;margin-bottom:20px">';
  html += '<div style="font-size:14px;font-weight:700;color:#1A3A8F;margin-bottom:12px">Option 2: Bank Transfer</div>';
  html += '<div class="topup-row"><div class="topup-label">Bank</div><div class="topup-val">CBZ Bank Zimbabwe</div></div>';
  html += '<div class="topup-row"><div class="topup-label">Account Name</div><div class="topup-val">Prince Chakusa</div></div>';
  html += '<div class="topup-row"><div class="topup-label">Account No.</div><div class="topup-val" onclick="H._copyText(this)" data-v="05121050340078">05121050340078 <span style="color:#1A3A8F;font-size:12px">tap to copy</span></div></div>';
  html += '<div class="topup-row"><div class="topup-label">Reference</div><div class="topup-val" style="color:#e67e00;font-weight:700">' + name + '</div></div>';
  html += '</div>';
  html += '<div style="background:#fff8e6;border:1.5px solid #F5A623;border-radius:14px;padding:14px;margin-bottom:20px;font-size:13px;color:#7a5800;line-height:1.6"><strong>Important:</strong> Use your name <strong>' + name + '</strong> as the payment reference. After payment tap the button below and we will verify within 2 hours.</div>';
  html += '<button onclick="H._submitPaymentProof()" id="payNotifyBtn" data-reason="' + H.escHtml(reason) + '" data-amount="' + amount + '" style="width:100%;padding:15px;background:#1A3A8F;color:#fff;border:none;border-radius:14px;font-size:15px;font-weight:700;font-family:Inter,sans-serif;cursor:pointer;margin-bottom:10px">I Have Paid - Notify Admin</button>';
  html += '<button onclick="H.goBack()" style="width:100%;padding:13px;background:transparent;color:var(--sub);border:1.5px solid var(--border,#ddd);border-radius:14px;font-size:14px;font-family:Inter,sans-serif;cursor:pointer">Cancel</button>';
  html += '</div></div>';
  return html;
};

H._copyText = function(el) {
  var text = el && el.dataset ? el.dataset.v : el;
  if (navigator.clipboard) navigator.clipboard.writeText(text);
  H.toast('Copied: ' + text);
};

H._submitPaymentProof = function() {
  var btn = document.getElementById('payNotifyBtn');
  var reason = btn ? btn.dataset.reason : 'Boost';
  var amount = btn ? btn.dataset.amount : 0;
  var user = H.currentUser();
  if (!user) { H.requireAuth('Sign in to submit payment'); return; }
  H.state.reports = H.state.reports || [];
  H.state.reports.push({id:H.uid(),type:'payment',userId:user.id,userName:user.name,reason:reason,amount:amount,t:Date.now(),status:'pending'});
  H.saveState();
  H.toast('Payment notification sent! We will verify within 2 hours.');
  H.goBack();
};

H._addPaymentMethod = function(type) {
  if (type === 'ecocash') {
    H.modal({
      title: 'EcoCash',
      body: '<div class="fl">EcoCash Number</div><input class="fi" id="ecoNum" type="tel" placeholder="+263 77 123 4567"><div style="font-size:12px;color:var(--sub);margin-top:8px">Your EcoCash number for payments and top-ups</div>',
      confirmText: 'Save',
      onConfirm: function() {
        var num = document.getElementById('ecoNum').value.trim();
        if (!num) { H.toast('Enter your EcoCash number'); return false; }
        var u = H.currentUser();
        if (u) { u.ecocash = num; H.saveState(); H.toast('EcoCash number saved'); }
      }
    });
  } else if (type === 'usd') {
    H.openInner('TopUp', {reason:'Wallet Top Up', amount:10});
  }
};

H._topUpWallet = function() {
  var sheet = document.getElementById('actionSheet');
  var bg = document.getElementById('sheetBg');
  var btns = [2,5,10,20,50].map(function(amt){
    var onclick = "H.closeSheet();H.openInner('TopUp',{reason:'Wallet Top Up',amount:" + amt + "})";
    return '<button onclick="' + onclick + '" style="display:flex;justify-content:space-between;align-items:center;width:100%;padding:14px;background:var(--surface2,#f5f8ff);border:1.5px solid var(--border,#eee);border-radius:12px;margin-bottom:8px;font-size:15px;font-weight:600;font-family:Inter,sans-serif;cursor:pointer;color:var(--text)"><span>$' + amt + '</span><span style="color:#1A3A8F">&rsaquo;</span></button>';
  }).join('');
  sheet.innerHTML = '<div class="sheet-header">Top Up Wallet</div><div style="padding:0 16px 16px"><div style="font-size:13px;color:var(--sub);margin-bottom:16px">Choose top-up amount</div>' + btns + '<button class="sheet-close" onclick="H.closeSheet()">Cancel</button></div>';
  sheet.classList.add('open');
  bg.classList.add('open');
};
