'use strict';
(function(H) {
  const state = H.state;
  let authBusy = false;

  // Rate limiting — max 5 failed attempts then 30s lockout
  var _failCount  = 0;
  var _lockUntil  = 0;

  function sb() { return (window.supabase && window.supabase.auth) ? window.supabase : null; }

  function setAuthBusy(v) {
    authBusy = v;
    const r = document.getElementById('authCard');
    if (r) r.querySelectorAll('button').forEach(function(b){ b.disabled = v; });
  }

  function isLocked() {
    if (Date.now() < _lockUntil) {
      var secs = Math.ceil((_lockUntil - Date.now()) / 1000);
      H.toast('Too many attempts. Try again in ' + secs + 's');
      return true;
    }
    return false;
  }

  function recordFailure() {
    _failCount++;
    if (_failCount >= 5) {
      _lockUntil  = Date.now() + 30000;
      _failCount  = 0;
      H.toast('Too many failed attempts. Locked for 30 seconds.');
    }
  }

  function recordSuccess() {
    _failCount = 0;
    _lockUntil = 0;
  }

  function validateEmail(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
  }

  function validatePhone(p) {
    if (!p) return true;
    return /^(\+263|0)[0-9]{9}$/.test(p.replace(/\s/g,''));
  }

  function passwordStrength(p) {
    var s = 0;
    if (p.length >= 8) s++;
    if (p.length >= 12) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    if (s <= 1) return { label:'Weak',   color:'#ef4444', width:'25%'  };
    if (s <= 2) return { label:'Fair',   color:'#f97316', width:'50%'  };
    if (s <= 3) return { label:'Good',   color:'#eab308', width:'75%'  };
    return          { label:'Strong', color:'#22c55e', width:'100%' };
  }

  function updatePassStrength() {
    var p   = document.getElementById('newPass');
    var bar = document.getElementById('passStrengthBar');
    var lbl = document.getElementById('passStrengthLabel');
    if (!p || !bar || !lbl) return;
    if (!p.value) { bar.style.width='0'; lbl.textContent=''; return; }
    var s = passwordStrength(p.value);
    bar.style.width      = s.width;
    bar.style.background = s.color;
    lbl.textContent      = s.label;
    lbl.style.color      = s.color;
  }
  H._updatePassStrength = updatePassStrength;

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
      + '<div class="fg"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span class="fl" style="margin-bottom:0">Password</span><span onclick="H.authForgotPassword()" style="font-size:12px;color:#F5A623;cursor:pointer;font-weight:500">Forgot password?</span></div><input class="fi" id="passIn" type="password" placeholder="Password" onkeydown="if(event.key===\'Enter\')H.authSignIn()" autocomplete="current-password"></div>'
      + '<button class="auth-btn" onclick="H.authSignIn()">Sign In</button>'
      + '<button class="auth-btn secondary" onclick="H.authStepEmail()">&larr; Back</button>';
    setTimeout(function(){ var e=document.getElementById('emailIn'); if(e) e.focus(); }, 100);
  };

  H.authShowRegister = function() { H.authStepSignUp(); };

  H.authStepSignUp = function() {
    var card = document.getElementById('authCard');
    if (!card) return;
    card.innerHTML = ''
      + '<div style="text-align:center;margin-bottom:16px"><div style="font-size:20px;font-weight:700;color:var(--text)">Create Account</div><div style="font-size:13px;color:var(--sub);margin-top:2px">Join Zimbabwe\'s marketplace</div></div>'
      + '<div class="fg"><div class="fl">Full Name</div><input class="fi" id="newName" placeholder="e.g. Tendai Moyo" autocomplete="name"></div>'
      + '<div class="fg"><div class="fl">Email</div><input class="fi" id="newEmail" type="email" placeholder="you@example.com" autocomplete="email"></div>'
      + '<div class="fg"><div class="fl">Phone (optional)</div><input class="fi" id="newPhone" type="tel" placeholder="+263 77 123 4567" autocomplete="tel"></div>'
      + '<div class="fg"><div class="fl">Password</div><input class="fi" id="newPass" type="password" placeholder="8+ chars, uppercase &amp; number" oninput="H._updatePassStrength()" autocomplete="new-password"><div style="height:4px;background:rgba(255,255,255,.12);border-radius:2px;margin-top:6px"><div id="passStrengthBar" style="height:100%;border-radius:2px;transition:all .3s;width:0"></div></div><div id="passStrengthLabel" style="font-size:11px;margin-top:3px;text-align:right;height:14px"></div></div>'
      + '<div class="fg"><div class="fl">Confirm Password</div><input class="fi" id="newPass2" type="password" placeholder="re-enter password" autocomplete="new-password"></div>'
      + '<label style="display:flex;gap:10px;align-items:flex-start;font-size:12px;color:rgba(255,255,255,.75);margin-bottom:10px;cursor:pointer"><input id="ageConsent" type="checkbox" style="margin-top:2px"><span>I am 18+ and agree to <span onclick="event.stopPropagation();H.authShowDoc(\'terms\')" style="color:#F5A623;text-decoration:underline;cursor:pointer">Terms</span> &amp; <span onclick="event.stopPropagation();H.authShowDoc(\'privacy\')" style="color:#F5A623;text-decoration:underline;cursor:pointer">Privacy Policy</span></span></label>'
      + '<button class="auth-btn" onclick="H.authSignUp()">Create Account</button>'
      + '<button class="auth-btn secondary" onclick="H.authStepEmail()">&larr; Back to Sign In</button>';
    setTimeout(function(){ var e=document.getElementById('newName'); if(e) e.focus(); }, 100);
  };

  // ── OTP VERIFICATION ─────────────────────────────
  H.authShowOtp = function(email) {
    var card = document.getElementById('authCard');
    if (!card) return;
    H._otpEmail = email;
    card.innerHTML = ''
      + '<div style="text-align:center;margin-bottom:20px">'
      + '<div style="font-size:42px;margin-bottom:10px">📧</div>'
      + '<div style="font-size:20px;font-weight:700;color:var(--text)">Verify Your Email</div>'
      + '<div style="font-size:13px;color:var(--sub);margin-top:8px;line-height:1.6">We sent a 6-digit code to<br><strong style="color:var(--text)">' + H.escHtml(email) + '</strong></div>'
      + '</div>'
      + '<div class="fg"><div class="fl" style="text-align:center">Verification Code</div><input class="fi" id="otpIn" type="text" inputmode="numeric" maxlength="6" placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" style="letter-spacing:10px;text-align:center;font-size:24px;font-weight:700" onkeydown="if(event.key===\'Enter\')H.authVerifyOtp()"></div>'
      + '<button class="auth-btn" onclick="H.authVerifyOtp()">Verify &amp; Continue</button>'
      + '<div style="text-align:center;margin-top:12px;font-size:13px;color:var(--sub)">Didn\'t get the code? <span onclick="H.authResendOtp()" style="color:#F5A623;font-weight:600;cursor:pointer">Resend</span></div>'
      + '<div style="text-align:center;margin-top:6px;font-size:12px;color:var(--sub)">Check spam if not received within 2 minutes</div>'
      + '<button class="auth-btn secondary" style="margin-top:16px" onclick="H.authStepEmail()">&larr; Back to Sign In</button>';
    setTimeout(function(){ var e=document.getElementById('otpIn'); if(e) e.focus(); }, 100);
  };

  H.authVerifyOtp = async function() {
    var otp = ((document.getElementById('otpIn')||{}).value||'').trim().replace(/\s/g,'');
    if (otp.length !== 6 || !/^\d{6}$/.test(otp)) { H.toast('Enter the 6-digit code from your email'); return; }
    var c = sb();
    if (!c) { H.toast('Connection error — try again'); return; }
    setAuthBusy(true);
    var res = await c.auth.verifyOtp({ email: H._otpEmail, token: otp, type: 'signup' });
    if (res.error) { H.toast('Invalid or expired code. Try resending.'); setAuthBusy(false); return; }
    state.currentUserId = res.data.user.id;
    await H.loadProfile(res.data.user.id);
    H.saveState();
    setAuthBusy(false);
    H.toast('Email verified! Welcome to Hostly');
    H.boot();
  };

  H.authResendOtp = async function() {
    if (!H._otpEmail) return;
    var c = sb();
    if (!c) { H.toast('Connection error'); return; }
    var res = await c.auth.resend({ type: 'signup', email: H._otpEmail });
    H.toast(res.error ? res.error.message : 'Code resent — check your inbox');
  };

  // ── FORGOT PASSWORD ──────────────────────────────
  H.authForgotPassword = function() {
    var card = document.getElementById('authCard');
    if (!card) return;
    card.innerHTML = ''
      + '<div style="text-align:center;margin-bottom:16px"><div style="font-size:20px;font-weight:700;color:var(--text)">Reset Password</div><div style="font-size:13px;color:var(--sub);margin-top:4px">Enter your email to receive a reset link</div></div>'
      + '<div class="fg"><div class="fl">Email</div><input class="fi" id="resetEmail" type="email" placeholder="you@example.com" autocomplete="email" onkeydown="if(event.key===\'Enter\')H.authSendReset()"></div>'
      + '<button class="auth-btn" onclick="H.authSendReset()">Send Reset Link</button>'
      + '<button class="auth-btn secondary" onclick="H.authShowEmailForm()">&larr; Back to Sign In</button>';
    setTimeout(function(){ var e=document.getElementById('resetEmail'); if(e) e.focus(); }, 100);
  };

  H.authSendReset = async function() {
    var email = ((document.getElementById('resetEmail')||{}).value||'').trim();
    if (!validateEmail(email)) { H.toast('Enter a valid email address'); return; }
    var c = sb();
    if (!c) { H.toast('Connection error — try again'); return; }
    setAuthBusy(true);
    var res = await c.auth.resetPasswordForEmail(email);
    setAuthBusy(false);
    if (res.error) { H.toast(res.error.message); return; }
    var card = document.getElementById('authCard');
    if (!card) return;
    card.innerHTML = ''
      + '<div style="text-align:center;padding:24px 0">'
      + '<div style="font-size:42px;margin-bottom:12px">✉️</div>'
      + '<div style="font-size:18px;font-weight:700;color:var(--text)">Check Your Email</div>'
      + '<div style="font-size:14px;color:var(--sub);margin-top:10px;line-height:1.6">A reset link was sent to<br><strong style="color:var(--text)">' + H.escHtml(email) + '</strong><br><br>Click the link in the email to set a new password. Check your spam folder if you don\'t see it.</div>'
      + '</div>'
      + '<button class="auth-btn secondary" onclick="H.authShowEmailForm()">&larr; Back to Sign In</button>';
  };

  // ── SIGN IN ──────────────────────────────────────
  H.authSignIn = async function() {
    if (authBusy) return;
    if (isLocked()) return;
    var email    = document.getElementById('emailIn').value.trim();
    var password = document.getElementById('passIn').value;
    if (!validateEmail(email)) { H.toast('Enter a valid email address'); return; }
    if (!password) { H.toast('Enter your password'); return; }
    setAuthBusy(true);
    var c = sb();
    if (c) {
      var res = await c.auth.signInWithPassword({email:email, password:password});
      if (res.error) {
        var msg = res.error.message;
        if (msg==='Invalid login credentials') msg = 'Wrong email or password';
        if (msg.includes('Email not confirmed')) msg = 'Please verify your email first';
        recordFailure();
        H.toast(msg); setAuthBusy(false); return;
      }
      state.currentUserId = res.data.user.id;
      await H.loadProfile(res.data.user.id);
      recordSuccess();
      H.saveState();
      setAuthBusy(false);
      H.boot();
      return;
    }
    var user = (state.users||[]).find(function(u){ return (u.email||'').toLowerCase()===email.toLowerCase() && u._localPassword===password; });
    if (!user) { recordFailure(); H.toast('Wrong email or password'); setAuthBusy(false); return; }
    recordSuccess();
    state.currentUserId = user.id;
    H.saveState(); setAuthBusy(false); H.boot();
  };

  // ── SIGN UP ──────────────────────────────────────
  H.authSignUp = async function() {
    if (authBusy) return;
    var name      = document.getElementById('newName').value.trim();
    var email     = document.getElementById('newEmail').value.trim();
    var phone     = document.getElementById('newPhone').value.trim();
    var password  = document.getElementById('newPass').value;
    var password2 = document.getElementById('newPass2').value;
    var consent   = document.getElementById('ageConsent').checked;

    if (name.length < 2)           { H.toast('Enter your full name'); return; }
    if (!validateEmail(email))     { H.toast('Enter a valid email address'); return; }
    if (!validatePhone(phone))     { H.toast('Enter a valid Zimbabwe phone number (+263 or 07X)'); return; }
    if (password.length < 8)       { H.toast('Password must be at least 8 characters'); return; }
    if (!/[A-Z]/.test(password))   { H.toast('Password must include at least one uppercase letter'); return; }
    if (!/[0-9]/.test(password) && !/[^A-Za-z0-9]/.test(password)) {
      H.toast('Password must include a number or special character'); return;
    }
    if (password !== password2)    { H.toast('Passwords do not match'); return; }
    if (!consent)                  { H.toast('Please confirm you are 18+ and agree to our policies'); return; }

    setAuthBusy(true);
    var c = sb();
    if (c) {
      var redirectTo = 'https://princechakusa.github.io/Hostly/';
      var res = await c.auth.signUp({email:email, password:password, options:{data:{full_name:name}, emailRedirectTo:redirectTo}});
      if (res.error) {
        var msg = res.error.message;
        if (msg.includes('already registered') || msg.includes('already exists') || msg.includes('unique constraint')) {
          msg = 'Email already registered. Sign in instead.';
        }
        H.toast(msg); setAuthBusy(false); return;
      }
      var userId = res.data.user.id;
      await c.from('profiles').upsert({id:userId, name:name, phone:phone||null, verified:false});
      var u = {id:userId,email:email,name:name,phone:phone||'',avatar:null,verified:false,walletUSD:0,language:'English',joinedAt:Date.now(),role:'user',status:'active',banReason:null,banUntil:null,blocked:[]};
      (state.users = state.users||[]).push(u);
      state.currentUserId = userId;
      H.saveState();
      setAuthBusy(false);
      if (res.data.session) {
        H.toast('Account created! Welcome to Hostly');
        H.boot();
      } else {
        H.authShowOtp(email);
      }
      return;
    }
    var exists = (state.users||[]).some(function(u){ return (u.email||'').toLowerCase()===email.toLowerCase(); });
    if (exists) { H.toast('Email already registered. Sign in instead.'); setAuthBusy(false); return; }
    var uid2 = H.uid();
    (state.users = state.users||[]).push({id:uid2,email:email,name:name,phone:phone||'',avatar:null,verified:false,walletUSD:0,language:'English',joinedAt:Date.now(),role:'user',status:'active',banReason:null,banUntil:null,blocked:[],_localPassword:password});
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
      + '<div class="fg"><div class="fl">Admin Email</div><input class="fi" id="admEmailPage" type="email" autocomplete="username"></div>'
      + '<div class="fg"><div class="fl">Password</div><input class="fi" id="admPassPage" type="password" placeholder="Password" onkeydown="if(event.key===\'Enter\')H.authAdminSignInPage()" autocomplete="current-password"></div>'
      + '<button class="auth-btn" onclick="H.authAdminSignInPage()">Admin Sign In</button>'
      + '<button class="auth-btn secondary" onclick="H.authStepEmail()">&larr; Back</button>';
    setTimeout(function(){ var p=document.getElementById('admEmailPage'); if(p) p.focus(); }, 100);
  };

  H.authAdminSignInPage = async function() {
    if (isLocked()) return;
    var email = ((document.getElementById('admEmailPage')||{}).value||'').trim();
    var pass  = ((document.getElementById('admPassPage')||{}).value||'').trim();
    if (!email||!pass) { H.toast('Enter credentials'); return; }
    var c = sb();
    if (!c) { H.toast('Connection error - refresh page'); return; }
    H.toast('Signing in...');
    var res = await c.auth.signInWithPassword({email:email, password:pass});
    if (res.error) { recordFailure(); H.toast('Invalid credentials'); return; }
    state.currentUserId = res.data.user.id;
    await H.loadProfile(res.data.user.id);
    var cu = H.currentUser();
    if (!cu || cu.role !== 'admin') {
      if (c) { try { await c.auth.signOut(); } catch(e) {} }
      state.currentUserId = null;
      recordFailure();
      H.toast('Access denied. Not an admin account.');
      return;
    }
    recordSuccess();
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
      u = {id:userId,email:'',name:profile.name||'User',phone:profile.phone||'',avatar:profile.avatar||null,verified:profile.verified||false,walletUSD:profile.wallet_usd||0,language:profile.language||'English',joinedAt:new Date(profile.created_at||Date.now()).getTime(),role:profile.role||'user',status:'active',banReason:null,banUntil:null,blocked:[]};
      state.users.push(u);
    } else {
      u.name=profile.name||u.name; u.phone=profile.phone||u.phone; u.avatar=profile.avatar||u.avatar; u.verified=profile.verified||false; u.role=profile.role||u.role||'user';
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

  // ── SOCIAL AUTH ───────────────────────────────────
  var OAUTH_REDIRECT = 'https://princechakusa.github.io/Hostly/www/';

  H.authGoogle = async function() {
    const c = sb();
    if (!c) { H.toast('Sign-in service unavailable'); return; }
    const { error } = await c.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: OAUTH_REDIRECT }
    });
    if (error) H.toast(error.message || 'Google sign-in failed');
  };

  H.authFacebook = async function() {
    const c = sb();
    if (!c) { H.toast('Sign-in service unavailable'); return; }
    const { error } = await c.auth.signInWithOAuth({
      provider: 'facebook',
      options: { redirectTo: OAUTH_REDIRECT }
    });
    if (error) H.toast(error.message || 'Facebook sign-in failed');
  };

  // ── LEGAL DOCS ───────────────────────────────────
  // Opens a full-screen slide-up sheet with the actual legal document content.
  // Uses the same content as HelpTerms / HelpPrivacy pages so it's always in sync.
  H.authShowDoc = function(which) {
    ['legalDocSheet','ldsFooterFixed'].forEach(function(id){
      var el = document.getElementById(id); if (el) el.remove();
    });

    var isTerms = which === 'terms';
    var title   = isTerms ? 'Terms of Service' : 'Privacy Policy';
    var content = isTerms ? H._fullTermsHTML() : H._fullPrivacyHTML();

    function closeSheet() {
      // Restore body scroll lock before removing sheet
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      ['legalDocSheet','ldsFooterFixed'].forEach(function(id){
        var el = document.getElementById(id); if (el) el.remove();
      });
    }

    // Lift the global overflow:hidden so iOS Safari allows scroll inside the sheet
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';

    // The sheet IS the scroll container — most reliable on iOS Safari
    var sheet = document.createElement('div');
    sheet.id = 'legalDocSheet';
    sheet.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;z-index:9990;overflow-y:scroll;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;touch-action:pan-y;background:var(--bg,#F4F1EA);animation:slideUp .28s ease';

    sheet.innerHTML = ''
      // Sticky header — stays at top as content scrolls beneath it
      + '<div style="position:sticky;top:0;z-index:2;display:flex;align-items:center;justify-content:space-between;padding:calc(env(safe-area-inset-top,0px) + 14px) 16px 14px;background:linear-gradient(135deg,#1A3A8F,#2952cc)">'
      +   '<div style="font-size:18px;font-weight:800;color:#fff;letter-spacing:-.3px">' + title + '</div>'
      +   '<button id="ldsCloseBtn" style="background:rgba(255,255,255,.18);border:none;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0">'
      +     '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" width="18" height="18"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
      +   '</button>'
      + '</div>'
      // Content — extra bottom padding so nothing hides behind the fixed footer
      + '<div class="doc-content" style="padding-bottom:calc(env(safe-area-inset-bottom,0px) + 96px)">' + content + '</div>';

    // Footer as separate fixed element so it never interferes with scroll
    var footer = document.createElement('div');
    footer.id = 'ldsFooterFixed';
    footer.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:9991;padding:12px 16px calc(env(safe-area-inset-bottom,0px) + 12px);background:var(--card,#fff);border-top:1px solid var(--border,#e5e0d6)';
    footer.innerHTML = '<button id="ldsGotItBtn" style="width:100%;padding:14px;background:#1A3A8F;color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;font-family:inherit">Got it</button>';

    document.body.appendChild(sheet);
    document.body.appendChild(footer);

    document.getElementById('ldsCloseBtn').onclick = closeSheet;
    document.getElementById('ldsGotItBtn').onclick = closeSheet;
  };

  H._fullTermsHTML = function() {
    return ''
      + '<h2>1. Agreement to Terms</h2>'
      + '<p>By downloading, installing, or using the Hostly application ("App"), you agree to be legally bound by these Terms of Service. If you do not agree to these terms, you must not use the App. These terms govern all users: buyers, sellers, job seekers, employers, and visitors.</p>'
      + '<h2>2. Who Can Use Hostly</h2>'
      + '<p>You must be at least 18 years old to create an account or use Hostly. By registering, you confirm that you meet this age requirement and are legally competent to enter into contracts under Zimbabwean law.</p>'
      + '<h2>3. Account Responsibility</h2>'
      + '<p>You are responsible for keeping your account credentials confidential. All activity that occurs under your account is your responsibility. You must provide accurate and truthful information when registering.</p>'
      + '<h2>4. What Hostly Is</h2>'
      + '<p>Hostly is an online classifieds marketplace that connects buyers and sellers in Zimbabwe. We provide the platform — we are not a party to any transaction between users. We do not hold payments, guarantee delivery, or verify the condition of items unless stated.</p>'
      + '<h2>5. Listing Rules</h2>'
      + '<p>All listings must be honest, legal, and comply with Zimbabwean law. The following content is strictly prohibited:</p>'
      + '<ul><li>Stolen, counterfeit, or fraudulent goods of any kind</li><li>Weapons, firearms, ammunition, or explosive devices</li><li>Illegal drugs, controlled substances, or drug paraphernalia</li><li>Adult, sexually explicit, or pornographic content</li><li>Protected wildlife, animal products, or endangered species</li><li>Pyramid schemes, multi-level marketing, or investment fraud</li><li>Fake, misleading, or non-existent job listings</li><li>Fraudulent rental listings or advance deposit scams</li><li>Human trafficking, exploitation, or domestic workers without consent</li></ul>'
      + '<h2>6. Advertising Credits (Boost Feature)</h2>'
      + '<p>Hostly offers optional paid advertising credits ("Boost") to increase listing visibility. These credits are purchased via external payment methods (EcoCash, OneMoney, or bank transfer) and are not processed by Google Play or the Apple App Store. Credits are non-refundable once applied. Unused credits may be refunded at our discretion within 7 days — contact us to request a refund.</p>'
      + '<h2>7. User Conduct</h2>'
      + '<p>You agree not to harass or threaten other users, post false or deceptive information, send unsolicited messages, create multiple accounts to evade bans, impersonate any person or entity, or use automated tools to access the platform.</p>'
      + '<h2>8. User Content License</h2>'
      + '<p>By posting content on Hostly, you grant us a non-exclusive, worldwide, royalty-free license to display, reproduce, and distribute that content within the App and for promotional purposes. You confirm you own or have rights to all content posted.</p>'
      + '<h2>9. Intellectual Property</h2>'
      + '<p>All design, branding, logos, code, and content created by Hostly are protected by copyright. You may not copy, reproduce, or redistribute any part of the App without our written consent.</p>'
      + '<h2>10. Moderation and Enforcement</h2>'
      + '<p>We reserve the right to remove any listing, suspend, or permanently ban any account that violates these Terms at any time. Banned users may appeal by contacting chakusaprince@gmail.com within 14 days of the ban.</p>'
      + '<h2>11. Disclaimer of Warranties</h2>'
      + '<p>Hostly is provided "as is" and "as available" without any warranties, express or implied. We are not responsible for the quality, safety, legality, or availability of listed items.</p>'
      + '<h2>12. Limitation of Liability</h2>'
      + '<p>To the maximum extent permitted by law, Hostly and its operators shall not be liable for any indirect, incidental, punitive, or consequential damages arising from your use of the App.</p>'
      + '<h2>13. Governing Law</h2>'
      + '<p>These Terms are governed exclusively by the laws of the Republic of Zimbabwe. Any legal disputes shall be subject to the jurisdiction of the courts of Zimbabwe.</p>'
      + '<h2>14. Changes to These Terms</h2>'
      + '<p>We may update these Terms from time to time. Continued use of the App after any update constitutes your acceptance of the revised Terms.</p>'
      + '<h2>15. Contact Us</h2>'
      + '<p>Email: chakusaprince@gmail.com<br>WhatsApp: +971 589 772 645</p>';
  };

  H._fullPrivacyHTML = function() {
    return ''
      + '<h2>1. Who We Are</h2>'
      + '<p>Hostly is a Zimbabwean marketplace application. We are committed to protecting your privacy and handling your data responsibly. This policy explains what data we collect, why we collect it, and how we protect it.</p>'
      + '<h2>2. Data We Collect</h2>'
      + '<ul><li><strong>Account data:</strong> Name, email address, phone number, encrypted password</li><li><strong>Profile data:</strong> Profile photo, bio, city/province location</li><li><strong>Listing data:</strong> Photos, descriptions, prices, and location of items you post</li><li><strong>Messages:</strong> In-app conversations between buyers and sellers</li><li><strong>Transaction data:</strong> Advertising credit balance and top-up reference history</li><li><strong>Device data:</strong> Device type, operating system version, app version</li><li><strong>Usage data:</strong> Pages viewed, search queries, and listing interactions</li></ul>'
      + '<h2>3. How We Use Your Data</h2>'
      + '<ul><li>To create and manage your user account</li><li>To display your listings to other users across Zimbabwe</li><li>To facilitate secure in-app messaging between buyers and sellers</li><li>To detect, investigate, and prevent fraud and policy violations</li><li>To improve the App, fix bugs, and enhance user experience</li><li>To send you important notifications about your account and listings</li></ul>'
      + '<h2>4. Data We Do Not Collect</h2>'
      + '<ul><li>We do not collect your precise GPS or real-time location</li><li>We do not collect payment card numbers or banking credentials</li><li>We do not access your camera or photo library without your explicit action</li><li>We do not collect contacts, call logs, or SMS messages</li></ul>'
      + '<h2>5. Data Sharing</h2>'
      + '<p>We do not sell your personal data to third parties. We may share data with:</p>'
      + '<ul><li><strong>Other users:</strong> Your public profile name, phone number (if provided), and listings are visible to all users</li><li><strong>Supabase:</strong> Our secure database and authentication infrastructure provider</li><li><strong>Legal authorities:</strong> When required by Zimbabwean law, court order, or to protect public safety</li></ul>'
      + '<h2>6. Data Security</h2>'
      + '<p>We implement industry-standard security: HTTPS encryption for all data in transit, encrypted password storage (never stored in plain text), row-level security on our database, and access controls.</p>'
      + '<h2>7. Camera and Photo Permissions</h2>'
      + '<p>We request camera and photo library access only when you choose to upload a photo for a listing or your profile. The App never accesses your camera or photos passively.</p>'
      + '<h2>8. Notifications Permission</h2>'
      + '<p>We request permission to send push notifications to alert you about new messages, listing activity, and account updates. You may disable notifications at any time in your device settings.</p>'
      + '<h2>9. Data Retention</h2>'
      + '<p>We retain your data for as long as your account is active. When you delete your account, all personal data, listings, messages, and transaction records are permanently deleted within 30 days.</p>'
      + '<h2>10. Your Rights</h2>'
      + '<ul><li>Access and review your personal data at any time via your Profile page</li><li>Correct inaccurate information through your Profile Settings</li><li>Delete your account and all associated data via Settings → Delete Account</li><li>Opt out of promotional notifications via Settings → Notification Preferences</li><li>Request a copy of all data we hold about you by emailing chakusaprince@gmail.com</li></ul>'
      + '<h2>11. Children\'s Privacy</h2>'
      + '<p>Hostly is strictly for users aged 18 and over. We do not knowingly collect personal data from anyone under 18. If we discover that a minor has created an account, we will immediately delete their account and all associated data.</p>'
      + '<h2>12. Third-Party Links</h2>'
      + '<p>Listings may include links to WhatsApp or external websites. We are not responsible for the privacy practices or content of any third-party services.</p>'
      + '<h2>13. Changes to This Policy</h2>'
      + '<p>We will notify you of material changes to this Privacy Policy through the App at least 7 days before they take effect.</p>'
      + '<h2>14. Contact Us</h2>'
      + '<p>Email: chakusaprince@gmail.com<br>WhatsApp: +971 589 772 645</p>';
  };

})(window.H);
