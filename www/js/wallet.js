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
  // WALLET (redesigned)
  // ---------------------------------------------------
  pages.Wallet = function () {
    const u       = H.currentUser();
    if (!u) return `<div class="page active">${H.innerTopbar('Wallet')}${H.emptyState('Not signed in', 'Sign in to access your wallet', 'Sign In', "H.authPage()")}</div>`;

    const txns    = (H.state.txns || []).filter(t => t.userId === u.id).slice(0, 40);
    const pending = (H.state.topupRequests || []).filter(r => r.userId === u.id && r.status === 'pending');

    const typeLabel = { topup: 'Top Up', withdraw: 'Withdrawal', boost: 'Listing Boost', fee: 'Fee' };

    const txRow = (t) => {
      const isIn  = t.amt > 0;
      const label = H.escHtml(typeLabel[t.type] || t.note || 'Transaction');
      const bg    = isIn ? '#dcfce7' : t.type === 'boost' ? '#FFF7ED' : '#fef2f2';
      const color = isIn ? '#16a34a' : t.type === 'boost' ? '#D97706' : '#ef4444';
      const icon  = isIn ? I.down : t.type === 'boost' ? I.boost : I.up;
      return `<div style="display:flex;align-items:center;gap:12px;padding:13px 0;border-bottom:1px solid var(--border)">
        <div style="width:36px;height:36px;border-radius:10px;background:${bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;color:${color}">${icon}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:14px;font-weight:600;color:var(--text)">${label}</div>
          <div style="font-size:11px;color:var(--sub);margin-top:1px">${new Date(t.t || Date.now()).toLocaleString()}</div>
        </div>
        <div style="font-size:15px;font-weight:800;color:${isIn ? '#16a34a' : '#ef4444'}">${isIn ? '+' : ''}$${Math.abs(t.amt).toFixed(2)}</div>
      </div>`;
    };

    const pendingRow = (r) =>
      `<div style="display:flex;align-items:center;gap:12px;padding:13px 0;border-bottom:1px solid var(--border)">
        <div style="width:36px;height:36px;border-radius:10px;background:#FFFBEB;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#D97706">${I.down}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:14px;font-weight:600;color:var(--text)">Top Up · ${H.escHtml(r.method)}</div>
          <div style="font-size:11px;color:var(--sub);margin-top:1px">Ref: ${H.escHtml(r.reference)} · $${r.amount.toFixed(2)}</div>
        </div>
        <span style="font-size:10px;font-weight:700;color:#D97706;background:#FFFBEB;border:1px solid #FDE68A;padding:3px 8px;border-radius:8px">Pending</span>
      </div>`;

    const allRows = [...pending.map(pendingRow), ...txns.map(txRow)];

    return `<div class="page active">
      ${H.innerTopbar('Wallet & Payments')}

      <!-- Balance Hero -->
      <div style="background:linear-gradient(135deg,#1A3A8F 0%,#2952cc 100%);margin:16px;border-radius:20px;padding:24px 20px">
        <div style="font-size:11px;font-weight:600;color:rgba(255,255,255,.65);text-transform:uppercase;letter-spacing:.7px;margin-bottom:6px">Available Balance</div>
        <div style="font-size:38px;font-weight:900;color:#fff;letter-spacing:-1.5px;line-height:1;margin-bottom:3px">$${(u.walletUSD || 0).toFixed(2)}</div>
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-bottom:20px">Used for boosting listings &amp; platform services</div>
        <button onclick="H.openInner('TopUp')" style="width:100%;padding:13px;background:rgba(255,255,255,.2);border:1.5px solid rgba(255,255,255,.45);border-radius:12px;color:#fff;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit">
          ${I.plus} Top Up Wallet
        </button>
      </div>

      <!-- Payment Methods -->
      <div style="margin:0 16px 16px">
        <div style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px">Payment Methods</div>
        <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;overflow:hidden">
          ${u.phone
            ? `<div style="display:flex;align-items:center;gap:12px;padding:14px;border-bottom:1px solid var(--border)">
                <div style="width:36px;height:36px;border-radius:10px;background:#FFF7ED;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#F5A623">${I.card}</div>
                <div style="flex:1">
                  <div style="font-size:14px;font-weight:600;color:var(--text)">EcoCash</div>
                  <div style="font-size:12px;color:var(--sub)">${H.escHtml(u.phone)}</div>
                </div>
                <span style="font-size:10px;font-weight:700;color:#16a34a;background:#dcfce7;padding:3px 8px;border-radius:8px">Primary</span>
              </div>`
            : ''}
          <div style="display:flex;align-items:center;gap:12px;padding:14px;opacity:.6">
            <div style="width:36px;height:36px;border-radius:10px;background:var(--bg);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--sub)">${I.plus}</div>
            <div style="font-size:14px;font-weight:500;color:var(--sub)">Add Bank / Card</div>
            <div style="margin-left:auto;color:var(--sub)">›</div>
          </div>
        </div>
      </div>

      <!-- Transaction History -->
      <div style="margin:0 16px">
        <div style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px">
          Transactions
          ${pending.length ? `<span style="background:#FFFBEB;color:#D97706;border:1px solid #FDE68A;font-size:10px;padding:2px 7px;border-radius:8px;margin-left:6px">${pending.length} pending</span>` : ''}
        </div>
        <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:0 14px">
          ${allRows.length
            ? allRows.join('')
            : `<div style="padding:32px 16px;text-align:center;color:var(--sub);font-size:13px">No transactions yet<br><span style="font-size:12px;margin-top:4px;display:block">Top up to get started</span></div>`}
        </div>
      </div>

      <div style="height:32px"></div>
    </div>`;
  };

  pages.Payments = pages.Wallet;

  // ---------------------------------------------------
  // TOP UP (dedicated page)
  // ---------------------------------------------------
  pages.TopUp = function () {
    const u = H.currentUser();
    if (!u) return `<div class="page active">${H.innerTopbar('Top Up')}${H.emptyState('Not signed in', '', 'Sign In', "H.authPage()")}</div>`;

    return `<div class="page active">
      ${H.innerTopbar('Top Up Wallet')}
      <div class="form-wrap">

        <!-- Method Selector -->
        <div class="fg">
          <div class="fl">Payment Method</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:6px">
            <button id="tuMethodEco" onclick="H._topup.setMethod('ecocash')"
              style="padding:14px 8px;border-radius:12px;border:2px solid #1A3A8F;background:#EFF6FF;font-size:13px;font-weight:700;color:#1A3A8F;cursor:pointer;font-family:inherit">
              EcoCash
            </button>
            <button id="tuMethodBank" onclick="H._topup.setMethod('bank')"
              style="padding:14px 8px;border-radius:12px;border:2px solid var(--border);background:var(--card);font-size:13px;font-weight:700;color:var(--sub);cursor:pointer;font-family:inherit">
              Bank Transfer
            </button>
          </div>
        </div>

        <!-- Payment Details (EcoCash) -->
        <div id="tuDetailsEco" style="background:#F0FDF4;border:1.5px solid #86EFAC;border-radius:14px;padding:16px;margin-bottom:4px">
          <div style="font-size:13px;font-weight:700;color:#15803d;margin-bottom:10px">Send to EcoCash Number:</div>
          <div style="font-size:22px;font-weight:900;color:#15803d;letter-spacing:1px;margin-bottom:6px">+263 777 341 565</div>
          <div style="font-size:12px;color:#16a34a;margin-bottom:10px">Use your name <strong>${H.escHtml(u.name)}</strong> as reference</div>
          <button onclick="H._topup.copyNumber('+263777341565')" style="background:#dcfce7;border:1px solid #86EFAC;border-radius:8px;padding:7px 14px;font-size:12px;font-weight:700;color:#15803d;cursor:pointer;font-family:inherit">
            Copy Number
          </button>
        </div>

        <!-- Payment Details (Bank) -->
        <div id="tuDetailsBank" style="display:none;background:#EFF6FF;border:1.5px solid #BFDBFE;border-radius:14px;padding:16px;margin-bottom:4px">
          <div style="font-size:13px;font-weight:700;color:#1e40af;margin-bottom:10px">Bank Transfer Details:</div>
          <div style="font-size:13px;color:#1e40af;line-height:1.8">
            <div><strong>Bank:</strong> CBZ Zimbabwe</div>
            <div><strong>Account Name:</strong> Hostly Marketplace</div>
            <div><strong>Account No:</strong> 03129840780054</div>
            <div><strong>Branch:</strong> Harare Main</div>
          </div>
          <div style="font-size:12px;color:#3b82f6;margin-top:8px">Use your name <strong>${H.escHtml(u.name)}</strong> as reference</div>
        </div>

        <div class="fg">
          <div class="fl">Amount (USD)</div>
          <input class="fi" id="tuAmt" type="number" min="1" step="1" placeholder="e.g. 10">
        </div>

        <div class="fg">
          <div class="fl">Transaction Reference / ID</div>
          <input class="fi" id="tuRef" placeholder="e.g. ECO1234567890" autocapitalize="characters">
          <div style="font-size:11px;color:var(--sub);margin-top:4px">The reference number from your EcoCash / bank SMS</div>
        </div>

        <div id="tuErr" style="display:none;color:#ef4444;font-size:13px;font-weight:600;padding:6px 0"></div>

        <button id="tuSubmitBtn" class="btn-pri" onclick="H._topup.submit()">Submit for Verification</button>
        <div style="text-align:center;font-size:12px;color:var(--sub);margin-top:6px">Admin verifies within 24 hours · You'll get a notification</div>
        <button class="btn-sec" onclick="H.goBack()">Cancel</button>
      </div>
    </div>`;
  };

  pages.TopUp_after = function () {
    H._topup = {
      method: 'ecocash',
      setMethod(m) {
        this.method = m;
        const eco  = document.getElementById('tuDetailsEco');
        const bank = document.getElementById('tuDetailsBank');
        const btnE = document.getElementById('tuMethodEco');
        const btnB = document.getElementById('tuMethodBank');
        if (m === 'ecocash') {
          if (eco)  { eco.style.display  = ''; }
          if (bank) { bank.style.display = 'none'; }
          if (btnE) { btnE.style.borderColor = '#1A3A8F'; btnE.style.background = '#EFF6FF'; btnE.style.color = '#1A3A8F'; }
          if (btnB) { btnB.style.borderColor = 'var(--border)'; btnB.style.background = 'var(--card)'; btnB.style.color = 'var(--sub)'; }
        } else {
          if (eco)  { eco.style.display  = 'none'; }
          if (bank) { bank.style.display = ''; }
          if (btnE) { btnE.style.borderColor = 'var(--border)'; btnE.style.background = 'var(--card)'; btnE.style.color = 'var(--sub)'; }
          if (btnB) { btnB.style.borderColor = '#1A3A8F'; btnB.style.background = '#EFF6FF'; btnB.style.color = '#1A3A8F'; }
        }
      },
      copyNumber(num) {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(num).then(() => H.toast('Number copied!')).catch(() => H.toast(num));
        } else {
          H.toast(num);
        }
      },
      submit() {
        const amt    = parseFloat(document.getElementById('tuAmt')?.value);
        const ref    = (document.getElementById('tuRef')?.value || '').trim();
        const errEl  = document.getElementById('tuErr');
        const btn    = document.getElementById('tuSubmitBtn');
        const showErr = (m) => { if (errEl) { errEl.textContent = m; errEl.style.display = ''; } };

        if (!amt || amt < 1)  { showErr('Enter an amount of at least $1.00'); return; }
        if (amt > 10000)      { showErr('Maximum top-up is $10,000 per request'); return; }
        if (!ref)             { showErr('Enter the transaction reference from your SMS'); return; }
        if (ref.length < 5)   { showErr('Reference too short — check your SMS'); return; }

        // Duplicate reference check
        const exists = (H.state.topupRequests || []).some(r => r.reference === ref);
        if (exists) { showErr('This reference has already been submitted'); return; }

        if (errEl) errEl.style.display = 'none';
        if (btn)   { btn.disabled = true; btn.textContent = 'Submitting…'; }

        const u = H.currentUser();
        H.state.topupRequests = H.state.topupRequests || [];
        H.state.topupRequests.push({
          id: H.uid(), userId: u.id, userName: u.name,
          amount: amt, method: this.method === 'ecocash' ? 'EcoCash' : 'Bank Transfer',
          reference: ref, status: 'pending', t: Date.now()
        });
        H.saveState();
        H.pushNotif && H.pushNotif(u.id, 'Top-up Submitted', `$${amt.toFixed(2)} top-up request received. Admin will verify within 24 hours.`, 'info');
        H.toast('Request submitted! Admin will verify within 24 hours.');
        H.goBack();
      }
    };
  };

  H._wallet = {};

  // Legacy alias
  H.showTopUp = () => H.openInner('TopUp');

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
