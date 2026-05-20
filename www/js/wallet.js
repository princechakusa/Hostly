/*!
 * PaMarket — Zimbabwe's Free Marketplace
 * © 2026 PaMarket. All rights reserved.
 * Unauthorised copying, modification, distribution or use of this
 * software without written permission from the owner is strictly prohibited.
 */
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
          <div style="font-size:11px;color:var(--sub);margin-top:2px">$${(+(r.amount||0)).toFixed(2)} · Ref: ${H.escHtml(r.reference||'')} · ${dateStr}</div>
        </div>
        <span style="font-size:10px;font-weight:700;color:#D97706;background:#FFFBEB;border:1px solid #FDE68A;padding:3px 8px;border-radius:8px;flex-shrink:0">Verifying</span>
      </div>`;
    };

    const allRows = [...pending.map(pendingRow), ...txns.map(txRow)];

    const spendItems = [
      { label: 'Boost a Listing', desc: 'From $2/day · appear at top of results', icon: I.boost, color: '#F5A623', action: "H.openInner('Boost')" },
    ];

    return `<div class="page active">
      ${H.innerTopbar('Wallet')}

      <div style="background:linear-gradient(135deg,#1A3A8F 0%,#2952cc 100%);margin:16px;border-radius:22px;padding:26px 22px 22px">
        <div style="font-size:11px;font-weight:600;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:.8px;margin-bottom:8px">PaMarket Wallet Balance</div>
        <div style="font-size:42px;font-weight:900;color:#fff;letter-spacing:-2px;line-height:1;margin-bottom:4px">$${bal}</div>
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-bottom:22px">United States Dollar (USD)</div>
        <button onclick="H.openInner('TopUp')"
          style="width:100%;padding:14px;background:rgba(255,255,255,.18);border:1.5px solid rgba(255,255,255,.4);border-radius:14px;color:#fff;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:8px">
          ${I.plus} Top Up via EcoCash / Bank
        </button>
      </div>

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

        <div style="background:#FFFBEB;border:1.5px solid #FDE68A;border-radius:12px;padding:12px 14px;margin-bottom:4px;display:flex;gap:10px;align-items:flex-start">
          <div style="color:#D97706;flex-shrink:0;margin-top:1px">${I.info}</div>
          <div style="font-size:12px;color:#92400E;line-height:1.6">
            <strong>External Payment — Not an In-App Purchase.</strong> Advertising credits are purchased via mobile money or bank transfer directly to PaMarket. This transaction is not processed by Google Play or the Apple App Store.
            Need help? <a href="https://wa.me/971589772645" style="color:#D97706;font-weight:700;text-decoration:none">WhatsApp us</a> or email <a href="mailto:chakusaprince@gmail.com" style="color:#D97706;font-weight:700;text-decoration:none">chakusaprince@gmail.com</a>
          </div>
        </div>

        <div class="fg">
          <div class="fl">Select Payment Method</div>
          <div style="display:flex;gap:8px;margin-top:6px">
            ${methodBtn(eco, true)}
            ${methodBtn(one, false)}
            ${methodBtn(bank, false)}
          </div>
        </div>

        <div id="tuDetails_ecocash" style="background:${eco.bg};border:1.5px solid ${eco.border};border-radius:14px;padding:16px">
          <div style="font-size:13px;font-weight:700;color:${eco.textColor};margin-bottom:12px">Send to this EcoCash number:</div>
          <div style="font-size:26px;font-weight:900;color:${eco.color};letter-spacing:2px;margin-bottom:4px">${eco.number}</div>
          <div style="font-size:12px;color:${eco.textColor};margin-bottom:12px">Account name: <strong>${eco.name}</strong></div>
          ${detailRow('Network', 'Econet Wireless (EcoCash)', null)}
          ${detailRow('Send to', eco.number, eco.rawNumber)}
          ${detailRow('Account name', eco.name, eco.name)}
          ${detailRow('Reference', H.currentUser()?.name || 'Your name', H.currentUser()?.name || '')}
        </div>

        <div id="tuDetails_onemoney" style="display:none;background:${one.bg};border:1.5px solid ${one.border};border-radius:14px;padding:16px">
          <div style="font-size:13px;font-weight:700;color:${one.textColor};margin-bottom:12px">Send to this OneMoney number:</div>
          <div style="font-size:26px;font-weight:900;color:${one.color};letter-spacing:2px;margin-bottom:4px">${one.number}</div>
          <div style="font-size:12px;color:${one.textColor};margin-bottom:12px">Account name: <strong>${one.name}</strong></div>
          ${detailRow('Network', 'NetOne (OneMoney)', null)}
          ${detailRow('Send to', one.number, one.rawNumber)}
          ${detailRow('Account name', one.name, one.name)}
          ${detailRow('Reference', H.currentUser()?.name || 'Your name', H.currentUser()?.name || '')}
        </div>

        <div id="tuDetails_bank" style="display:none;background:${bank.bg};border:1.5px solid ${bank.border};border-radius:14px;padding:16px">
          <div style="font-size:13px;font-weight:700;color:${bank.textColor};margin-bottom:12px">Bank Transfer Details:</div>
          ${detailRow('Bank', bank.bankName, null)}
          ${detailRow('Account Name', bank.name, bank.name)}
          ${detailRow('Account No.', bank.account, bank.rawAccount)}
          ${detailRow('Branch', bank.branch, null)}
          ${detailRow('Reference', H.currentUser()?.name || 'Your name', H.currentUser()?.name || '')}
        </div>

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

      async submit() {
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

        try {
          const c = window.supabase;
          if (c) {
            const { error } = await c.from('topup_requests').insert({
              user_id: u.id, user_name: u.name,
              amount: amt, method: cfg.label,
              reference: ref, status: 'pending'
            });
            if (error && error.code !== '23505') {
              console.warn('topup insert:', error.message);
            }
          }
        } catch(e) { console.warn('topup supabase:', e); }

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

    if (preset) H._topup.setAmt(Number(preset));
  };

  H._wallet   = {};
  H.showTopUp = () => H.openInner('TopUp');

  H._copyText = function (el) {
    const text = (el && el.dataset) ? el.dataset.v : String(el);
    if (navigator.clipboard) navigator.clipboard.writeText(text);
    H.toast('Copied: ' + text);
  };

})(window.H);
