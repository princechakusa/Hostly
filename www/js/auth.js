'use strict';
(function(H) {
  const state = H.state;
  let authBusy = false;

  function sb() { return window._sbClient || null; }
  function setAuthBusy(v) { authBusy = v; const r = document.getElementById('authCard'); if(r) r.querySelectorAll('button').forEach(function(b){b.disabled=v;}); }

  // ── LOGO TAP → ADMIN ─────────────────────────────
  H.authLogoTap = function() {
    H.logoTap && H.logoTap();
  };

  // ── MAIN AUTH PAGE ───────────────────────────────
  H.authStepEmail = function() {
    var card = document.getElementById('authCard');
    if (!card) return;
    card.innerHTML = ''
      + '<div style="text-align:center;margin-bottom:20px"><div style="font-size:22px;font-weight:700;color:var(--text)">Welcome</div><div style="font-size:14px;color:var(--sub);margin-top:4px">Sign in to buy and sell across Zimbabwe</div></div>'
      + '<button class="social-auth-btn google" onclick="H.authGoogle()"><svg viewBox="0 0 24 24" width="22" height="22"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>Continue with Google</button>'
      + '<button class="social-auth-btn facebook" onclick="H.authFacebook()"><svg viewBox="0 0 24 24" width="22" height="22" fill="#fff"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>Continue with Facebook</button>'
      + '<div class="auth-divider"><span>or</span></div>'
      + '<button class="social-auth-btn email" onclick="H.authShowEmailForm()"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#1A3A8F" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>Continue with Email</button>'
      + '<div style="text-align:center;margin-top:16px;font-size:13px;color:var(--sub)">Don\'t have an account? <span onclick="H.authShowRegister()" style="color:#F5A623;font-weight:600;cursor:pointer">Create one</span></div>';
  };

  H.authShowEmailForm = function() {
    var card = document.getElementById('authCard');
    if (!card) return;
    card.innerHTML = ''
      + '<div style="text-align:center;margin-bottom:16px"><div style="font-size:20px;font-weight:700;color:var(--text)">Sign In</div></div>'
      + '<div class="fg"><div class="fl">Email</div><input class="fi" id="emailIn" type="email" placeholder="you@example.com" autocomplete="email"></div>'
      + '<div class="fg"><div class="fl">Password</div><input class="fi" id="passIn" type="password" placeholder="Password" onkeydown="if(event.key===\'Enter\')H.authSignIn()"></div>'
      + '<button class="auth-btn" onclick="H.authSignIn()">Sign In</button>'
      + '<button class="auth-btn secondary" onclick="H.authStepEmail()">&larr; Back</button>';
    setTimeout(function(){ var e=document.getElementById('emailIn'); if(e) e.focus(); }, 100);
  };

  H.authShowRegister = function() { H.authStepSignUp(); };

  H.authStepSignUp = function() {
    var card = document.getElementById('authCard');
    if (!card) return;
    card.innerHTML = ''
      + '<div style="text-align:center;margin-bottom:16px"><div style="font-size:20px;font-weight:700;color:var(--text)">Create Account</div></div>'
      + '<div class="fg"><div class="fl">Full Name</div><input class="fi" id="newName" placeholder="e.g. Tendai Moyo"></div>'
      + '<div class="fg"><div class="fl">Email</div><input class="fi" id="newEmail" type="email" placeholder="you@example.com"></div>'
      + '<div class="fg"><div class="fl">Phone (optional)</div><input class="fi" id="newPhone" type="tel" placeholder="+263 77 123 4567"></div>'
      + '<div class="fg"><div class="fl">Password</div><input class="fi" id="newPass" type="password" placeholder="min 8 characters"></div>'
      + '<div class="fg"><div class="fl">Confirm Password</div><input class="fi" id="newPass2" type="password" placeholder="re-enter password"></div>'
      + '<label style="display:flex;gap:10px;align-items:flex-start;font-size:12px;color:rgba(255,255,255,.75);margin-bottom:10px;cursor:pointer"><input id="ageConsent" type="checkbox" style="margin-top:2px"><span>I am 18+ and agree to Terms &amp; Privacy Policy</span></label>'
      + '<button class="auth-btn" onclick="H.authSignUp()">Create Account</button>'
      + '<button class="auth-btn secondary" onclick="H.authStepEmail()">&larr; Back to Sign In</button>';
    setTimeout(function(){ var e=document.getElementById('newName'); if(e) e.focus(); }, 100);
  };

  // ── SIGN IN ──────────────────────────────────────
  H.authSignIn = async function() {
    if (authBusy) return;
    var email = document.getElementById('emailIn').value.trim();
    var password = document.getElementById('passIn').value.trim();
    if (!email||!password) { H.toast('Enter email and password'); return; }
    setAuthBusy(true);
    var c = sb();
    if (c) {
      var res = await c.auth.signInWithPassword({email:email, password:password});
      if (res.error) { H.toast(res.error.message==='Invalid login credentials'?'Wrong email or password':res.error.message); setAuthBusy(false); return; }
      state.currentUserId = res.data.user.id;
      await H.loadProfile(res.data.user.id);
      var cu = H.currentUser();
      if (cu && email === 'admin@hostly.co.zw') cu.role = 'admin';
      H.saveState();
      setAuthBusy(false);
      H.boot();
      return;
    }
    var user = (state.users||[]).find(function(u){ return (u.email||'').toLowerCase()===email.toLowerCase() && u._localPassword===password; });
    if (!user) { H.toast('Wrong email or password'); setAuthBusy(false); return; }
    state.currentUserId = user.id;
    H.saveState(); setAuthBusy(false); H.boot();
  };

  // ── SIGN UP ──────────────────────────────────────
  H.authSignUp = async function() {
    if (authBusy) return;
    var name = document.getElementById('newName').value.trim();
    var email = document.getElementById('newEmail').value.trim();
    var phone = document.getElementById('newPhone').value.trim();
    var password = document.getElementById('newPass').value.trim();
    var password2 = document.getElementById('newPass2').value.trim();
    var ageConsent = document.getElementById('ageConsent').checked;
    if (name.length<2) { H.toast('Enter your name'); return; }
    if (!email) { H.toast('Enter a valid email'); return; }
    if (password.length<8) { H.toast('Password must be at least 8 characters'); return; }
    if (password!==password2) { H.toast('Passwords do not match'); return; }
    if (!ageConsent) { H.toast('Please confirm age and policy agreement'); return; }
    setAuthBusy(true);
    var c = sb();
    if (c) {
      var res = await c.auth.signUp({email:email, password:password});
      if (res.error) { H.toast(res.error.message); setAuthBusy(false); return; }
      var userId = res.data.user.id;
      await c.from('profiles').upsert({id:userId, name:name, phone:phone||null, verified:false});
      var u = {id:userId,email:email,name:name,phone:phone||'',avatar:null,verified:false,walletUSD:0,language:'English',joinedAt:Date.now(),role:'user',status:'active',banReason:null,banUntil:null,blocked:[]};
      state.users.push(u);
      state.currentUserId = userId;
      H.saveState(); setAuthBusy(false);
      H.toast('Account created! Welcome to Hostly');
      H.boot();
      return;
    }
    var exists = (state.users||[]).some(function(u){ return (u.email||'').toLowerCase()===email.toLowerCase(); });
    if (exists) { H.toast('Email already registered'); setAuthBusy(false); return; }
    var uid2 = H.uid();
    state.users.push({id:uid2,email:email,name:name,phone:phone||'',avatar:null,verified:false,walletUSD:0,language:'English',joinedAt:Date.now(),role:'user',status:'active',banReason:null,banUntil:null,blocked:[],_localPassword:password});
    state.currentUserId = uid2;
    H.saveState(); setAuthBusy(false);
    H.toast('Account created! Welcome to Hostly');
    H.boot();
  };

  // ── ADMIN LOGIN ──────────────────────────────────
  H.authAdminPage = function() {
    var card = document.getElementById('authCard');
    if (!card) return;
    card.innerHTML = ''
      + '<div style="text-align:center;margin-bottom:16px"><div style="font-size:20px;font-weight:700;color:var(--text)">Admin Portal</div><div style="font-size:13px;color:var(--sub)">Restricted access</div></div>'
      + '<div class="fg"><div class="fl">Admin Email</div><input class="fi" id="admEmailPage" type="email" value="admin@hostly.co.zw"></div>'
      + '<div class="fg"><div class="fl">Password</div><input class="fi" id="admPassPage" type="password" placeholder="Password" onkeydown="if(event.key===\'Enter\')H.authAdminSignInPage()"></div>'
      + '<button class="auth-btn" onclick="H.authAdminSignInPage()">Admin Sign In</button>'
      + '<button class="auth-btn secondary" onclick="H.authStepEmail()">&larr; Back</button>';
    setTimeout(function(){ var p=document.getElementById('admPassPage'); if(p) p.focus(); }, 100);
  };

  H.authAdminSignInPage = async function() {
    var email = (document.getElementById('admEmailPage')||{}).value;
    var pass = (document.getElementById('admPassPage')||{}).value;
    if (!email||!pass) { H.toast('Enter credentials'); return; }
    email = email.trim(); pass = pass.trim();
    var c = sb();
    if (!c) { H.toast('Connection error - refresh page'); return; }
    H.toast('Signing in...');
    var res = await c.auth.signInWithPassword({email:email, password:pass});
    if (res.error) { H.toast('Invalid credentials'); return; }
    state.currentUserId = res.data.user.id;
    await H.loadProfile(res.data.user.id);
    var cu = H.currentUser();
    if (!cu) {
      cu = {id:res.data.user.id,email:email,name:'Admin',role:'admin',status:'active',verified:true,joinedAt:Date.now(),settings:{theme:'light'},walletUSD:0,language:'English',blocked:[]};
      state.users.push(cu);
      state.currentUserId = cu.id;
    }
    cu.role = 'admin';
    state.adminSession = {at:Date.now(),via:'supabase'};
    H.saveState();
    H.toast('Welcome Admin!');
    H.boot();
  };

  // ── LOAD PROFILE ─────────────────────────────────
  H.loadProfile = async function(userId) {
    var c = sb(); if (!c) return;
    var res = await c.from('profiles').select('*').eq('id',userId).single();
    if (res.error||!res.data) {
      var u = (state.users||[]).find(function(x){return x.id===userId;});
      if (!u) { u={id:userId,email:'',name:'User',phone:'',avatar:null,verified:false,walletUSD:0,language:'English',joinedAt:Date.now(),role:'user',status:'active',banReason:null,banUntil:null,blocked:[]}; state.users.push(u); }
      return;
    }
    var profile = res.data;
    var u = (state.users||[]).find(function(x){return x.id===userId;});
    if (!u) {
      u = {id:userId,email:'',name:profile.name||'User',phone:profile.phone||'',avatar:profile.avatar||null,verified:profile.verified||false,walletUSD:profile.wallet_usd||0,language:profile.language||'English',joinedAt:new Date(profile.created_at||Date.now()).getTime(),role:'user',status:'active',banReason:null,banUntil:null,blocked:[]};
      state.users.push(u);
    } else {
      u.name=profile.name||u.name; u.phone=profile.phone||u.phone; u.avatar=profile.avatar||u.avatar; u.verified=profile.verified||false;
    }
    H.saveState();
  };

  // ── LOGOUT ───────────────────────────────────────
  H.logout = async function() {
    var c = sb();
    if (c) { try { await c.auth.signOut(); } catch(e) {} }
    state.currentUserId = null;
    state.adminSession = null;
    H.saveState();
    var ban = document.getElementById('banScreen');
    if (ban) ban.classList.remove('show');
    H.pageStack = [];
    H.authPage();
  };

  // ── SOCIAL AUTH STUBS ─────────────────────────────
  H.authGoogle = async function() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google'
  });

  if (error) {
    H.toast(error.message || 'Google sign-in failed');
  }
};

H.authFacebook = async function() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'facebook'
  });

  if (error) {
    H.toast(error.message || 'Facebook sign-in failed');
  }
};

  // ── LEGAL DOCS ───────────────────────────────────
  H.authShowDoc = function(which) {
    H.modal({
      title: which==='terms' ? 'Terms & Conditions' : 'Privacy Policy',
      body: which==='terms' ? H._termsText() : H._privacyText(),
      confirmText: 'Got it', cancelText: null
    });
  };

  H._termsText = function() {
    return '<div class="doc-content"><h2>Terms and Conditions</h2><p><strong>Effective Date: May 2026</strong></p><p>Welcome to Hostly. By using the app you agree to these terms.</p><h2>1. Eligibility</h2><p>You must be 18+ to use Hostly.</p><h2>2. Listings</h2><p>You must own or have rights to sell listed items. All info must be accurate.</p><h2>3. Prohibited</h2><p>No stolen goods, drugs, weapons, adult content, or hate speech.</p><h2>4. Transactions</h2><p>Hostly is a listing platform only. We do not process payments.</p><h2>5. Contact</h2><p>Email: chakusaprince@gmail.com | WhatsApp: +971 589 772 645</p></div>';
  };

  H._privacyText = function() {
    return '<div class="doc-content"><h2>Privacy Policy</h2><p><strong>Effective Date: May 2026</strong></p><p>We collect name, email, and listing data to operate the platform. We do not sell your data.</p><h2>Data Storage</h2><p>Data stored securely via Supabase with encryption.</p><h2>Your Rights</h2><p>Delete your account anytime via Settings.</p><h2>Contact</h2><p>Email: chakusaprince@gmail.com | WhatsApp: +971 589 772 645</p></div>';
  };

})(window.H);