'use strict';
(function (H) {
  const state = H.state;
  const { uid, toast, modal, saveState } = H;
  let authBusy = false;
let signupCooldown = false;
let signinCooldown = false;
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

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // AUTH FLOW
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  H.authStepEmail = function() {
    document.getElementById('authCard').innerHTML = `
      <div style="text-align:center;margin-bottom:20px">
        <div style="font-size:22px;font-weight:700;color:var(--text)">Welcome</div>
        <div style="font-size:14px;color:var(--sub);margin-top:4px">Sign in to buy and sell across Zimbabwe</div>
      </div>
      <button class="social-auth-btn google" onclick="H.authGoogle()">
        <svg viewBox="0 0 24 24" width="22" height="22"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        Continue with Google
      </button>
      <button class="social-auth-btn facebook" onclick="H.authFacebook()">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        Continue with Facebook
      </button>
      <div class="auth-divider"><span>or</span></div>
      <button class="social-auth-btn email" onclick="H.authShowEmailForm()">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        Continue with Email
      </button>
      <div style="text-align:center;margin-top:16px;font-size:13px;color:var(--sub)">
        Don't have an account? <span onclick="H.authShowRegister()" style="color:#F5A623;font-weight:600;cursor:pointer">Create one</span>
      </div>
    `;
  };
  H.authShowEmailForm = function() {
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
      if (error) {
    if (error.status === 429) {
    const retryAfter = (error.headers?.['retry-after'] || 60) * 1000;
    signinCooldown = true;
    setTimeout(() => { signinCooldown = false; }, retryAfter);
    toast(`Too many attempts. Wait ${Math.round(retryAfter/1000)} seconds.`);
    setAuthBusy(false);
    return;
}
    toast(error.message);
    setAuthBusy(false);
    return;
}
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
      if (error) {
    if (error.status === 429) {
    const retryAfter = (error.headers?.['retry-after'] || 60) * 1000;
    signinCooldown = true;
    setTimeout(() => { signinCooldown = false; }, retryAfter);
    toast(`Too many attempts. Wait ${Math.round(retryAfter/1000)} seconds.`);
    setAuthBusy(false);
    return;
}
    toast(error.message);
    setAuthBusy(false);
    return;
}

      const userId = data.user.id;
      const { error: profileError } = await window.supabase
        .from('profiles')
        .insert({ id: userId, name, phone: phone || null });
      if (profileError) { console.warn(`Profile insert skipped: ${profileError.message}`); }

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

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // LEGAL TEXTS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  const TERMS_TEXT = `<div class="doc-content">
    <h2>Terms and Conditions</h2>
    <p><strong>Effective Date: May 12, 2026</strong></p>
    <p>Welcome to Hostly. By downloading, accessing, or using the Hostly application, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the app.</p>
    <h2>1. About Hostly</h2>
    <p>Hostly is an online marketplace platform that connects buyers and sellers across Zimbabwe. Contact: chakusaprince@gmail.com</p>
    <h2>2. Eligibility</h2>
    <p>You must be at least 18 years old to use Hostly. By creating an account, you confirm you have the legal capacity to enter into a binding agreement.</p>
    <h2>3. Account Registration</h2>
    <p>You agree to provide accurate and complete information. You are responsible for all activities under your account. Notify us immediately of any unauthorized use.</p>
    <h2>4. User Content and Listings</h2>
    <ul>
      <li>You own or have the right to sell the item or service listed</li>
      <li>All information is accurate and not misleading</li>
      <li>The listing complies with all applicable Zimbabwean laws</li>
      <li>Prices are clearly stated in USD or ZiG</li>
      <li>Photos accurately represent the item being sold</li>
    </ul>
    <h2>5. Prohibited Content</h2>
    <ul>
      <li>Stolen, counterfeit, or fraudulent goods</li>
      <li>Illegal firearms, ammunition, or explosives</li>
      <li>Illegal drugs or controlled substances</li>
      <li>Protected wildlife or animal products</li>
      <li>Adult or sexually explicit content</li>
      <li>Hate speech or harassing content</li>
      <li>Any item prohibited under Zimbabwean law</li>
    </ul>
    <h2>6. Transactions</h2>
    <p>Hostly is a listing platform only. We do not process payments or guarantee any transaction. All transactions are conducted directly between buyers and sellers.</p>
    <h2>7. Intellectual Property</h2>
    <p>All content, trademarks, and logos belonging to Hostly may not be reproduced without written permission.</p>
    <h2>8. Disclaimer of Warranties</h2>
    <p>Hostly is provided on an as-is basis without warranties of any kind. We do not guarantee uninterrupted or error-free service.</p>
    <h2>9. Limitation of Liability</h2>
    <p>To the maximum extent permitted by law, Hostly shall not be liable for any indirect or consequential damages arising from your use of the platform.</p>
    <h2>10. Account Termination</h2>
    <p>We may suspend or terminate accounts for violations of these Terms or fraudulent activity. You may delete your account at any time via Settings.</p>
    <h2>11. Changes to Terms</h2>
    <p>We may update these Terms from time to time. Continued use of Hostly after changes constitutes acceptance.</p>
    <h2>12. Governing Law</h2>
    <p>These Terms are governed by the laws of Zimbabwe.</p>
    <h2>13. Contact Us</h2>
    <p>Email: chakusaprince@gmail.com | WhatsApp: +971 589 772 645</p>
  </div>`

  const PRIVACY_TEXT = `<div class="doc-content">
    <h2>Privacy Policy</h2>
    <p><strong>Effective Date: May 12, 2026</strong></p>
    <p>Hostly is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.</p>
    <h2>1. Information We Collect</h2>
    <ul>
      <li>Full name and email address (for account registration)</li>
      <li>Profile photo (optional)</li>
      <li>Listing content, descriptions, and photos</li>
      <li>Messages sent through the platform</li>
      <li>Location (city/province only - no GPS tracking)</li>
      <li>Device type and app usage data</li>
    </ul>
    <h2>2. How We Use Your Information</h2>
    <ul>
      <li>Create and manage your account</li>
      <li>Display your listings to other users</li>
      <li>Enable communication between buyers and sellers</li>
      <li>Improve and maintain the platform</li>
      <li>Send important service notifications</li>
      <li>Enforce our Terms and Conditions</li>
    </ul>
    <h2>3. How We Share Your Information</h2>
    <p>We do not sell your personal information. We may share data only with service providers operating the platform (e.g. Supabase for database hosting) or when required by law.</p>
    <h2>4. Data Storage and Security</h2>
    <p>Your data is stored securely using Supabase cloud infrastructure with encryption in transit and at rest.</p>
    <h2>5. Your Rights</h2>
    <ul>
      <li>Access and correct your data via Profile settings</li>
      <li>Delete your account and data via Settings</li>
      <li>Request a copy of your data by contacting us</li>
    </ul>
    <p>We will respond to all requests within 30 days.</p>
    <h2>6. Data Retention</h2>
    <p>We retain your data while your account is active. When you delete your account, we delete your personal data within 30 days.</p>
    <h2>7. Children Privacy</h2>
    <p>Hostly is not intended for anyone under 18. We do not knowingly collect data from children.</p>
    <h2>8. Third-Party Services</h2>
    <ul>
      <li>Supabase (database and authentication)</li>
      <li>Google Sign-In (optional authentication)</li>
    </ul>
    <h2>9. Changes to This Policy</h2>
    <p>We may update this Privacy Policy from time to time. Continued use of Hostly after changes constitutes acceptance.</p>
    <h2>10. Contact Us</h2>
    <p>Email: chakusaprince@gmail.com | WhatsApp: +971 589 772 645</p>
  </div>`

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
    H.saveState(); if(typeof H.saveProfileToCloud==="function") H.saveProfileToCloud(H.currentUser()).catch(function(){}); H.boot();
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
    H.saveState(); if(typeof H.saveProfileToCloud==="function") H.saveProfileToCloud(H.currentUser()).catch(function(){}); H.boot();
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