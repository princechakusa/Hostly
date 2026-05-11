'use strict';
(function (H) {
  const state = H.state;
  const { uid, toast, modal, saveState } = H;
  let authBusy = false;
  let adminLogoTaps = 0;
  let adminTapTimer = null;

  // Icons for auth page (fallback set)
  const A = {
    wave: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9l3-3 3 3"/><path d="M5 5v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5"/></svg>',
    user: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    lock: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>',
    back: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>'
  };

  function setAuthBusy(busy) {
    authBusy = busy;
    const root = document.getElementById('authCard');
    if (!root) return;
    root.querySelectorAll('button').forEach(btn => { btn.disabled = busy; });
  }

  H.authLogoTap = function () {
    adminLogoTaps++;
    clearTimeout(adminTapTimer);
    adminTapTimer = setTimeout(() => { adminLogoTaps = 0; }, 3500);
    if (adminLogoTaps >= 7) {
      adminLogoTaps = 0;
      H.authAdminPage();
    }
  };

  H.authAdminPage = function () {
    const card = document.getElementById('authCard');
    if (!card) return;
    card.innerHTML = `
      <h2>${A.lock} Admin Portal</h2>
      <p>Restricted access. Authorized administrators only.</p>
      <div class="fg"><div class="fl">Admin Email</div><input class="fi" id="admEmailPage" type="email" placeholder="admin@hostly.co.zw"></div>
      <div class="fg"><div class="fl">Password</div><input class="fi" id="admPassPage" type="password" placeholder="••••••••" onkeydown="if(event.key==='Enter')H.authAdminSignInPage()"></div>
      <button class="auth-btn" onclick="H.authAdminSignInPage()">Admin Sign In</button>
      <button class="auth-btn secondary" onclick="H.authStepEmail()">${A.back} Back to customer login</button>`;
  };

  H.authAdminSignInPage = async function () {
    const email = document.getElementById('admEmailPage')?.value.trim();
    const pass = document.getElementById('admPassPage')?.value.trim();
    if (!email || !pass) { toast('Enter admin credentials'); return; }
    await H._adminCredentialLogin(email, pass);
  };

  H._adminCredentialLogin = async function (email, pass) {
    if (window.supabase && window.supabase.auth) {
      const { data, error } = await window.supabase.auth.signInWithPassword({ email, password: pass });
      if (error) { toast(error.message); return false; }
      state.currentUserId = data.user.id;
      await H.loadProfile(data.user.id);
      const u = H.currentUser();
      if (!u || u.role !== 'admin') {
        if (window.supabase?.auth) await window.supabase.auth.signOut();
        state.currentUserId = null;
        saveState();
        toast('Access denied: not an admin account');
        return false;
      }
      state.adminSession = { at: Date.now(), via: 'supabase' };
      saveState();
      H.boot();
      return true;
    }
    const u = (state.users || []).find(x => (x.email || '').toLowerCase() === email.toLowerCase() && x._localPassword === pass && x.role === 'admin');
    if (!u) { toast('Invalid admin credentials'); return false; }
    state.currentUserId = u.id;
    state.adminSession = { at: Date.now(), via: 'local' };
    saveState();
    H.boot();
    return true;
  };

  H.authAdminSignIn = async function () {
    modal({
      title: 'Admin Sign In',
      body: `<div class="fl">Admin Email</div><input class="fi" id="admEmail" type="email" placeholder="admin@hostly.co.zw">
        <div class="fl" style="margin-top:10px">Password</div><input class="fi" id="admPass" type="password" placeholder="••••••••">`,
      confirmText: 'Sign In',
      onConfirm: async () => {
        const email = document.getElementById('admEmail')?.value.trim();
        const pass = document.getElementById('admPass')?.value.trim();
        if (!email || !pass) { toast('Enter admin credentials'); return false; }
        const ok = await H._adminCredentialLogin(email, pass);
        if (!ok) return false;
      }
    });
  };

  // ═══════════════════════════════════════════════════
  // AUTH FLOW
  // ═══════════════════════════════════════════════════
  H.authStepEmail = function () {
    const card = document.getElementById('authCard');
    if (!card) return;
    card.innerHTML = `
      <h2>${A.wave} Welcome</h2>
      <p>Sign in to buy and sell across Zimbabwe.</p>
      <div class="fg">
        <div class="fl">Email</div>
        <input class="fi" id="emailIn" type="email" placeholder="you@example.com" autocomplete="email">
      </div>
      <div class="fg">
        <div class="fl">Password</div>
        <input class="fi" id="passIn" type="password" placeholder="········" onkeydown="if(event.key==='Enter')H.authSignIn()">
      </div>
      <div style="font-size:12px;color:rgba(255,255,255,.58);margin:-4px 0 12px">
        By signing in, you agree to our Terms and Privacy Policy.
      </div>
      <button class="auth-btn" onclick="H.authSignIn()">Sign In</button>
      <button class="auth-btn secondary" onclick="H.authStepSignUp()">Create an account</button>`;
    setTimeout(() => document.getElementById('emailIn')?.focus(), 100);
  };

  H.authStepSignUp = function () {
    const card = document.getElementById('authCard');
    if (!card) return;
    card.innerHTML = `
      <h2>${A.user} Create your account</h2>
      <p>Fill in your details to join Hostly.</p>
      <div class="fg">
        <div class="fl">Full Name</div>
        <input class="fi" id="newName" placeholder="e.g. Tendai Moyo" autocomplete="name">
      </div>
      <div class="fg">
        <div class="fl">Email</div>
        <input class="fi" id="newEmail" type="email" placeholder="you@example.com">
      </div>
      <div class="fg">
        <div class="fl">Password</div>
        <input class="fi" id="newPass" type="password" placeholder="min 8 characters">
      </div>
      <div class="fg">
        <div class="fl">Confirm Password</div>
        <input class="fi" id="newPass2" type="password" placeholder="re-enter password">
      </div>
      <div class="fg">
        <div class="fl">Phone (optional)</div>
        <input class="fi" id="newPhone" type="tel" placeholder="+263 77 123 4567">
      </div>
      <label style="display:flex;gap:10px;align-items:flex-start;font-size:12px;color:rgba(255,255,255,.75);line-height:1.5;margin-bottom:10px;cursor:pointer">
        <input id="ageConsent" type="checkbox" style="margin-top:2px">
        <span>I confirm I am 18+ years old and agree to the <a href="#" onclick="event.preventDefault();H.authShowDoc('terms')" style="color:var(--sunset-mid)">Terms</a> and <a href="#" onclick="event.preventDefault();H.authShowDoc('privacy')" style="color:var(--sunset-mid)">Privacy Policy</a>.</span>
      </label>
      <button class="auth-btn" onclick="H.authSignUp()">Create Account</button>
      <button class="auth-btn secondary" onclick="H.authStepEmail()">${A.back} Back to sign in</button>
      <div class="auth-foot">
        By signing up you agree to our
        <a href="#" onclick="H.authShowDoc('terms')">Terms</a> &amp;
        <a href="#" onclick="H.authShowDoc('privacy')">Privacy Policy</a>
      </div>`;
    setTimeout(() => document.getElementById('newName')?.focus(), 100);
  };

  H.authSignIn = async function () {
    if (authBusy) return;
    const email    = document.getElementById('emailIn').value.trim();
    const password = document.getElementById('passIn').value.trim();
    if (!email || !password) { toast('Enter email and password'); return; }
    setAuthBusy(true);

    if (window.supabase && window.supabase.auth) {
      const { data, error } = await window.supabase.auth.signInWithPassword({ email, password });
      if (error) { toast(error.message); setAuthBusy(false); return; }
      state.currentUserId = data.user.id;
      await H.loadProfile(data.user.id);
      saveState();
      setAuthBusy(false);
      H.boot();
      return;
    }

    const user = (state.users || []).find(u => (u.email || '').toLowerCase() === email.toLowerCase());
    if (!user || !user._localPassword || user._localPassword !== password) {
      toast('Invalid email or password');
      setAuthBusy(false);
      return;
    }
    state.currentUserId = user.id;
    saveState();
    setAuthBusy(false);
    H.boot();
  };

  H.authSignUp = async function () {
    if (authBusy) return;
    if (state.signupPaused) { toast('Registrations are temporarily disabled'); return; }
    const name     = document.getElementById('newName').value.trim();
    const email    = document.getElementById('newEmail').value.trim();
    const password = document.getElementById('newPass').value.trim();
    const password2 = document.getElementById('newPass2').value.trim();
    const phone    = document.getElementById('newPhone').value.trim();
    const ageConsent = !!document.getElementById('ageConsent')?.checked;

    if (name.length < 2)       { toast('Enter your name'); return; }
    if (!email)                 { toast('Enter a valid email'); return; }
    if (password.length < 8)   { toast('Password must be at least 8 characters'); return; }
    if (password !== password2){ toast('Passwords do not match'); return; }
    if (!ageConsent)           { toast('Please confirm age and policy agreement'); return; }
    setAuthBusy(true);

    if (window.supabase && window.supabase.auth) {
      const { data, error } = await window.supabase.auth.signUp({ email, password });
      if (error) { toast(error.message); setAuthBusy(false); return; }

      const userId = data.user.id;
      const { error: profileError } = await window.supabase
        .from('profiles')
        .insert({ id: userId, name, phone: phone || null });
      if (profileError) { toast('Could not create profile: ' + profileError.message); setAuthBusy(false); return; }

      const u = {
        id: userId, email, name, phone: phone || '', avatar: null,
        verified: false, walletUSD: 0, language: 'English',
        joinedAt: Date.now(), role: 'user', status: 'active',
        banReason: null, banUntil: null, blocked: []
      };
      state.users.push(u);
      state.currentUserId = userId;
      saveState();
      toast('Account created! Welcome to Hostly');
      setAuthBusy(false);
      H.boot();
      return;
    }

    const exists = (state.users || []).some(u => (u.email || '').toLowerCase() === email.toLowerCase());
    if (exists) { toast('An account with this email already exists'); setAuthBusy(false); return; }

    const userId = uid();
    state.users.push({
      id: userId, email, name, phone: phone || '', avatar: null,
      verified: false, walletUSD: 0, language: 'English',
      joinedAt: Date.now(), role: 'user', status: 'active',
      banReason: null, banUntil: null, blocked: [],
      _localPassword: password
    });
    state.currentUserId = userId;
    saveState();
    toast('Account created! Welcome to Hostly');
    setAuthBusy(false);
    H.boot();
  };

  H.loadProfile = async function (userId) {
    if (!window.supabase) return;
    const { data: profile, error } = await window.supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error || !profile) {
      // Fallback: keep whatever is in local state
      let u = state.users.find(x => x.id === userId);
      if (!u) {
        u = {
          id: userId, email: '', name: 'User', phone: '', avatar: null,
          verified: false, walletUSD: 0, language: 'English',
          joinedAt: Date.now(), role: 'user', status: 'active',
          banReason: null, banUntil: null, blocked: []
        };
        state.users.push(u);
      }
      return;
    }

    let u = state.users.find(x => x.id === userId);
    if (!u) {
      u = {
        id: userId, email: '',
        name:      profile.name,
        phone:     profile.phone || '',
        avatar:    profile.avatar || null,
        verified:  profile.verified || false,
        walletUSD: profile.wallet_usd || 0,
        language:  profile.language || 'English',
        joinedAt:  new Date(profile.created_at).getTime(),
        role:      profile.role || 'user',
        status:    profile.status || 'active',
        banReason: null, banUntil: null, blocked: []
      };
      state.users.push(u);
    } else {
      u.name      = profile.name;
      u.phone     = profile.phone || '';
      u.avatar    = profile.avatar || null;
      u.verified  = profile.verified || false;
      u.walletUSD = profile.wallet_usd || 0;
      u.language  = profile.language || 'English';
      if (profile.role)   u.role   = profile.role;
      if (profile.status) u.status = profile.status;
    }
    saveState();
  };

  // Sign out
  H.logout = async function () {
    if (window.supabase) await window.supabase.auth.signOut();
    state.currentUserId = null;
    state.adminSession = null;
    saveState();
    const banScreen = document.getElementById('banScreen');
    if (banScreen) banScreen.classList.remove('show');
    H.pageStack = [];
    H.authPage();
  };

  H.authShowDoc = function (which) {
    modal({
      title:       which === 'terms' ? 'Terms & Conditions' : 'Privacy Policy',
      body:        which === 'terms' ? TERMS_TEXT : PRIVACY_TEXT,
      confirmText: 'Got it',
      cancelText:  null
    });
  };

  // ═══════════════════════════════════════════════════
  // LEGAL TEXTS
  // ═══════════════════════════════════════════════════
  const TERMS_TEXT = `<div class="doc-content">
    <h2>Welcome to Hostly</h2>
    <p>By using Hostly, you agree to these Terms. Please read them carefully before posting or responding to any listing.</p>
    <h2>1. Eligibility</h2>
    <p>You must be at least 18 and a resident of Zimbabwe.</p>
    <h2>2. Listing Rules</h2>
    <ul>
      <li>All listings must be legal under Zimbabwean law.</li>
      <li>Prices must be clearly stated in USD or ZiG.</li>
      <li>Photos must accurately represent the item.</li>
      <li>Duplicate listings are not permitted.</li>
      <li>Scam listings result in immediate suspension.</li>
    </ul>
    <h2>3. Prohibited Items</h2>
    <p>Stolen goods, counterfeit items, illegal firearms or drugs, wildlife, and any item violating Zimbabwean law.</p>
    <h2>4. Verification</h2>
    <p>Verified users get a blue badge. Verification does not guarantee listing accuracy.</p>
    <h2>5. WhatsApp & Chat</h2>
    <p>Hostly connects buyers and sellers. We are not responsible for transactions made outside the platform.</p>
    <h2>6. Bans</h2>
    <p>Hostly may temporarily or permanently suspend accounts that violate these Terms or are reported for fraud.</p>
    <h2>7. Privacy</h2>
    <p>We collect only what we need. See our Privacy Policy.</p>
    <h2>8. Changes</h2>
    <p>We may update these terms. Continued use means acceptance. Last updated: Jan 2025.</p>
  </div>`;

  const PRIVACY_TEXT = `<div class="doc-content">
    <h2>Your Privacy Matters</h2>
    <p>Hostly protects your personal information.</p>
    <h2>1. What We Collect</h2>
    <ul>
      <li>Email address (authentication)</li>
      <li>Name and optional avatar</li>
      <li>Listing content and photos</li>
      <li>City/province only (no GPS tracking)</li>
    </ul>
    <h2>2. What We Don't Do</h2>
    <p>We never sell your data. ID and selfie data stays on your device only.</p>
    <h2>3. Your Rights</h2>
    <ul>
      <li>Access, correct, or delete your data via Profile → Settings</li>
      <li>Request full data deletion by emailing us</li>
    </ul>
    <h2>4. Contact</h2>
    <p>privacy@hostly.co.zw — Last updated: Jan 2025</p>
  </div>`;

})(window.H);


// FIXED ADMIN LOGIN - overrides the broken one above
H._adminCredentialLogin = async function (email, pass) {
  const u = (H.state.users || []).find(x =>
    (x.email || '').toLowerCase() === email.toLowerCase() &&
    x._localPassword === pass &&
    x.role === 'admin'
  );
  if (u) {
    H.state.currentUserId = u.id;
    H.state.adminSession = { at: Date.now(), via: 'local' };
    H.saveState();
    H.boot();
    return true;
  }
  H.toast('Invalid admin credentials');
  return false;
};

// OVERRIDE - bypass Supabase for admin login completely
H.authAdminSignInPage = async function () {
  const email = document.getElementById('admEmailPage')?.value.trim();
  const pass  = document.getElementById('admPassPage')?.value.trim();
  if (!email || !pass) { H.toast('Enter admin credentials'); return; }
  const u = (H.state.users || []).find(x =>
    (x.email || '').toLowerCase() === email.toLowerCase() &&
    x._localPassword === pass &&
    x.role === 'admin'
  );
  if (u) {
    H.state.currentUserId = u.id;
    H.state.adminSession = { at: Date.now(), via: 'local' };
    H.saveState();
    H.boot();
  } else {
    H.toast('Invalid admin credentials');
  }
};

// Email verification message override
H._checkEmailVerified = function(error) {
  if (error && error.message && error.message.toLowerCase().includes('email')) {
    H.toast('Please verify your email before signing in. Check your inbox.');
    return true;
  }
  return false;
};
