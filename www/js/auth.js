'use strict';
(function(H) {
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

  H.authLogoTap = function() {
    H.logoTap && H.logoTap();
  };

  H.authStepEmail = function() {
    var card = document.getElementById('authCard');
    if (!card) return;
    var ill = document.querySelector('.login-modal-illustration');
    if (ill) ill.style.display = '';
    card.innerHTML = ''
      + '<button class="social-auth-btn google" onclick="H.authGoogle()"><svg viewBox="0 0 24 24" width="22" height="22"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>Continue with Google</button>'
      + '<div class="auth-divider"><span>or</span></div>'
      + '<button class="social-auth-btn email" onclick="H.authShowEmailForm()"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#1A3A8F" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>Login with email</button>'
      + '<div style="text-align:center;margin-top:16px;font-size:13px;color:var(--text-sub)">Don\'t have an account? <span onclick="H.authShowRegister()" style="color:#1A3A8F;font-weight:700;cursor:pointer">Create one</span></div>';
  };

  H.authShowEmailForm = function() {
    var card = document.getElementById('authCard');
    if (!card) return;
    card.innerHTML = ''
      + '<div style="text-align:center;margin-bottom:16px"><div style="font-size:20px;font-weight:700;color:var(--text)">Sign In</div></div>'
      + '<div class="fg"><div class="fl">Email</div><input class="fi" id="emailIn" type="email" placeholder="you@example.com" autocomplete="email"></div>'
      + '<div class="fg"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span class="fl" style="margin-bottom:0">Password</span><span onclick="H.authForgotPassword()" style="font-size:12px;color:#F5A623;cursor:pointer;font-weight:500">Forgot password?</span></div><div style="position:relative"><input class="fi" id="passIn" type="password" placeholder="Password" onkeydown="if(event.key===\'Enter\')H.authSignIn()" autocomplete="current-password" style="padding-right:44px"><button type="button" onclick="H._togglePw(\'passIn\')" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--text-hint);padding:4px;line-height:1"><svg id="passIn_eye" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></div></div>'
      + '<button class="auth-btn" onclick="H.authSignIn()">Sign In</button>'
      + '<button class="auth-btn secondary" onclick="H.authStepEmail()">&larr; Back</button>';
    setTimeout(function(){ var e=document.getElementById('emailIn'); if(e) e.focus(); }, 100);
  };

  H.authShowRegister = function() { H.authStepSignUp(); };

  H.authShow2FA = function(userId) {
    H._pendingTwoFactorUserId = userId;
    var card = document.getElementById('authCard');
    if (!card) {
      H.requireAuth && H.requireAuth('Two-factor authentication');
      card = document.getElementById('authCard');
    }
    if (!card) return;
    card.innerHTML = ''
      + '<div style="text-align:center;margin-bottom:16px"><div style="font-size:20px;font-weight:800;color:var(--text-primary)">Enter authentication code</div><div style="font-size:13px;color:var(--text-sub);margin-top:6px;line-height:1.5">Open your authenticator app and enter the 6-digit code for PaMarket.</div></div>'
      + '<div class="fg"><div class="fl">6-digit code</div><input class="fi" id="twoFactorLoginCode" inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="123456"></div>'
      + '<button class="auth-btn" onclick="H.authVerify2FA()">Verify & Continue</button>'
      + '<button class="auth-btn secondary" onclick="H.authCancel2FA()">Cancel</button>';
    setTimeout(function(){ var e=document.getElementById('twoFactorLoginCode'); if(e) e.focus(); }, 100);
  };

  H.authCancel2FA = async function() {
    H._pendingTwoFactorUserId = null;
    H.state.currentUserId = null;
    H.saveState();
    try { if (window.supabase && window.supabase.auth) await window.supabase.auth.signOut(); } catch(e) {}
    if (H.closeLoginModal) H.closeLoginModal();
  };

  H.authVerify2FA = async function() {
    var userId = H._pendingTwoFactorUserId;
    var u = (H.state.users || []).find(function(x){ return x.id === userId; });
    var code = ((document.getElementById('twoFactorLoginCode') || {}).value || '').trim();
    if (!u || !u.twoFactorEnabled || !u.twoFactorSecret) { H.toast('2FA setup not found'); return; }
    if (!H._twoFactorVerify || !await H._twoFactorVerify(u.twoFactorSecret, code)) {
      H.toast('Invalid authentication code');
      return;
    }
    H._pendingTwoFactorUserId = null;
    H.state.currentUserId = userId;
    H.saveState();
    if (H.closeLoginModal) H.closeLoginModal();
    H.boot();
  };

  H.authStepSignUp = function() {
    var card = document.getElementById('authCard');
    if (!card) return;
    var ill = document.querySelector('.login-modal-illustration');
    if (ill) ill.style.display = 'none';
    card.innerHTML = ''
      + '<div class="fg"><div class="fl">Full Name</div><input class="fi" id="newName" placeholder="e.g. Tendai Moyo" autocomplete="name"></div>'
      + '<div class="fg"><div class="fl">Email</div><input class="fi" id="newEmail" type="email" placeholder="you@example.com" autocomplete="email"></div>'
      + '<div class="fg"><div class="fl">Phone (optional)</div><input class="fi" id="newPhone" type="tel" placeholder="+263 77 123 4567" autocomplete="tel"></div>'
      + '<div class="fg"><div class="fl">Password</div><div style="position:relative"><input class="fi" id="newPass" type="password" placeholder="8+ chars, uppercase &amp; number" oninput="H._updatePassStrength()" autocomplete="new-password" style="padding-right:44px"><button type="button" onclick="H._togglePw(\'newPass\')" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--text-hint);padding:4px;line-height:1"><svg id="newPass_eye" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></div><div style="height:4px;background:var(--border);border-radius:2px;margin-top:6px"><div id="passStrengthBar" style="height:100%;border-radius:2px;transition:all .3s;width:0"></div></div><div id="passStrengthLabel" style="font-size:11px;margin-top:3px;text-align:right;height:14px;color:var(--text-sub)"></div></div>'
      + '<div class="fg"><div class="fl">Confirm Password</div><div style="position:relative"><input class="fi" id="newPass2" type="password" placeholder="re-enter password" autocomplete="new-password" style="padding-right:44px"><button type="button" onclick="H._togglePw(\'newPass2\')" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--text-hint);padding:4px;line-height:1"><svg id="newPass2_eye" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></div></div>'
      + '<label style="display:flex;gap:10px;align-items:flex-start;font-size:12px;color:#667085;margin-bottom:10px;cursor:pointer"><input id="ageConsent" type="checkbox" style="margin-top:2px"><span>I am 18+ and agree to <span onclick="event.stopPropagation();H.authShowDoc(\'terms\')" style="color:#1A3A8F;text-decoration:underline;cursor:pointer">Terms &amp; Conditions</span> and <span onclick="event.stopPropagation();H.authShowDoc(\'privacy\')" style="color:#1A3A8F;text-decoration:underline;cursor:pointer">Privacy Policy</span></span></label>'
      + '<button class="auth-btn" onclick="H.authSignUp()">Create Account</button>'
      + '<button class="auth-btn secondary" onclick="H.authStepEmail()">&larr; Back to Sign In</button>';
    setTimeout(function(){ var e=document.getElementById('newName'); if(e) e.focus(); }, 100);
  };

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
    H.state.currentUserId = res.data.user.id;
    await H.loadProfile(res.data.user.id);
    H.saveState();
    setAuthBusy(false);
    H.toast('Email verified! Welcome to PaMarket');
    if (H.closeLoginModal) H.closeLoginModal();
    H.boot();
  };

  H.authResendOtp = async function() {
    if (!H._otpEmail) return;
    var c = sb();
    if (!c) { H.toast('Connection error'); return; }
    var res = await c.auth.resend({ type: 'signup', email: H._otpEmail });
    H.toast(res.error ? res.error.message : 'Code resent — check your inbox');
  };

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
      H.state.currentUserId = res.data.user.id;
      await H.loadProfile(res.data.user.id);
      var su = H.currentUser();
      if (su && su.twoFactorEnabled && su.twoFactorSecret) {
        H._pendingTwoFactorUserId = res.data.user.id;
        H.state.currentUserId = null;
        H.saveState();
        setAuthBusy(false);
        H.authShow2FA(res.data.user.id);
        return;
      }
      recordSuccess();
      H.saveState();
      setAuthBusy(false);
      if (H.closeLoginModal) H.closeLoginModal();
      H.boot();
      return;
    }
    var user = (H.state.users||[]).find(function(u){ return (u.email||'').toLowerCase()===email.toLowerCase() && u._localPassword===password; });
    if (!user) { recordFailure(); H.toast('Wrong email or password'); setAuthBusy(false); return; }
    recordSuccess();
    if (user.twoFactorEnabled && user.twoFactorSecret) {
      H._pendingTwoFactorUserId = user.id;
      H.state.currentUserId = null;
      H.saveState();
      setAuthBusy(false);
      H.authShow2FA(user.id);
      return;
    }
    H.state.currentUserId = user.id;
    H.saveState(); setAuthBusy(false); if (H.closeLoginModal) H.closeLoginModal(); H.boot();
  };

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
      var res = await c.auth.signUp({email:email, password:password, options:{data:{full_name:name}}});
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
      (H.state.users = H.state.users||[]).push(u);
      H.state.currentUserId = userId;
      H.saveState();
      setAuthBusy(false);
      if (res.data.session) {
        H.toast('Account created! Welcome to PaMarket');
        if (H.closeLoginModal) H.closeLoginModal();
        H.boot();
      } else {
        H.authShowOtp(email);
      }
      return;
    }
    var exists = (H.state.users||[]).some(function(u){ return (u.email||'').toLowerCase()===email.toLowerCase(); });
    if (exists) { H.toast('Email already registered. Sign in instead.'); setAuthBusy(false); return; }
    var uid2 = H.uid();
    (H.state.users = H.state.users||[]).push({id:uid2,email:email,name:name,phone:phone||'',avatar:null,verified:false,walletUSD:0,language:'English',joinedAt:Date.now(),role:'user',status:'active',banReason:null,banUntil:null,blocked:[],_localPassword:password});
    H.state.currentUserId = uid2;
    H.saveState(); setAuthBusy(false);
    H.toast('Account created! Welcome to PaMarket');
    if (H.closeLoginModal) H.closeLoginModal();
    H.boot();
  };

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
    H.state.currentUserId = res.data.user.id;
    await H.loadProfile(res.data.user.id);
    var cu = H.currentUser();
    if (!cu || cu.role !== 'admin') {
      if (c) { try { await c.auth.signOut(); } catch(e) {} }
      H.state.currentUserId = null;
      recordFailure();
      H.toast('Access denied. Not an admin account.');
      return;
    }
    recordSuccess();
    H.state.adminSession = {at:Date.now(),via:'supabase'};
    H.saveState();
    H.toast('Welcome Admin!');
    if (H.closeLoginModal) H.closeLoginModal();
    H.boot();
  };

  H.loadProfile = async function(userId) {
    var c = sb(); if (!c) return;
    var res = await c.from('profiles').select('*').eq('id',userId).single();
    if (res.error||!res.data) {
      var u = (H.state.users||[]).find(function(x){return x.id===userId;});
      if (!u) { u={id:userId,email:'',name:'User',phone:'',avatar:null,verified:false,walletUSD:0,language:'English',joinedAt:Date.now(),role:'user',status:'active',banReason:null,banUntil:null,blocked:[]}; H.state.users.push(u); }
      return;
    }
    var profile = res.data;
    var u = (H.state.users||[]).find(function(x){return x.id===userId;});
    if (!u) {
      u = {id:userId,email:'',name:profile.name||'User',phone:profile.phone||'',avatar:profile.avatar||null,verified:profile.verified||false,walletUSD:profile.wallet_usd||0,language:profile.language||'English',joinedAt:new Date(profile.created_at||Date.now()).getTime(),role:profile.role||'user',status:'active',banReason:null,banUntil:null,blocked:[]};
      H.state.users.push(u);
    } else {
      u.name=profile.name||u.name; u.phone=profile.phone||u.phone; u.avatar=profile.avatar||u.avatar; u.verified=profile.verified||false; u.role=profile.role||u.role||'user';
    }
    H.saveState();
  };

  H.logout = function() {
    H.modal({
      title: 'Sign Out',
      body: 'Are you sure you want to sign out?',
      confirmText: 'Sign Out',
      cancelText: 'Cancel',
      danger: true,
      onConfirm: function() {
        H.state.currentUserId = null;
        H.state.adminSession = null;
        H.saveState();
        try {
          var sc = window.supabase;
          if (sc) {
            if (window._msgChannel) { sc.removeChannel(window._msgChannel); window._msgChannel = null; }
            if (H._notifChannel)    { sc.removeChannel(H._notifChannel);    H._notifChannel    = null; }
            if (sc.auth) sc.auth.signOut().catch(function(){});
          }
        } catch(e) {}
        window.location.reload();
      }
    });
  };

  H.authGoogle = async function() {
    const c = sb();
    if (!c) { H.toast('Sign-in service unavailable'); return; }
    const redirectTo = window.location.origin + window.location.pathname;
    const { error } = await c.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo }
    });
    if (error) H.toast(error.message || 'Google sign-in failed');
  };

  H.authApple = async function() {
    const c = sb();
    if (!c) { H.toast('Sign-in service unavailable'); return; }
    const redirectTo = window.location.origin + window.location.pathname;
    const { error } = await c.auth.signInWithOAuth({
      provider: 'apple',
      options: { redirectTo }
    });
    if (error) H.toast(error.message || 'Apple sign-in failed');
  };

  H._togglePw = function(id) {
    var inp = document.getElementById(id);
    var eye = document.getElementById(id + '_eye');
    if (!inp) return;
    var show = inp.type === 'password';
    inp.type = show ? 'text' : 'password';
    if (eye) {
      eye.innerHTML = show
        ? '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>'
        : '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
    }
  };

  H.authShowDoc = function(which) {
    var sheet   = document.getElementById('docSheet');
    var titleEl = document.getElementById('docSheetTitle');
    var bodyEl  = document.getElementById('docSheetBody');
    if (!sheet || !titleEl || !bodyEl) return;
    titleEl.textContent = which === 'terms' ? 'Terms & Conditions' : 'Privacy Policy';
    bodyEl.innerHTML    = which === 'terms' ? H._termsText() : H._privacyText();
    bodyEl.scrollTop    = 0;
    sheet.classList.add('open');
  };

  H.closeDocSheet = function() {
    var sheet = document.getElementById('docSheet');
    if (sheet) sheet.classList.remove('open');
  };

  H._termsText = function() {
    return '<div class="doc-content">'
      + '<h2>Terms &amp; Conditions</h2>'
      + '<p><strong>Effective Date: 1 May 2026</strong></p>'
      + '<p>Welcome to PaMarket Zimbabwe. By downloading or using the PaMarket app you agree to be bound by these Terms and Conditions. Please read them carefully.</p>'
      + '<h3>1. Eligibility</h3>'
      + '<p>You must be at least 18 years old to create an account and use PaMarket. By registering you confirm that you meet this requirement. PaMarket reserves the right to terminate accounts of users found to be under 18.</p>'
      + '<h3>2. Account Responsibility</h3>'
      + '<p>You are responsible for keeping your login credentials secure. You are liable for all activity that occurs under your account. Notify us immediately at chakusaprince@gmail.com if you suspect unauthorised access.</p>'
      + '<h3>3. Listings</h3>'
      + '<p>You may only list items you own or have legal authority to sell. All listing information — including title, description, photos, and price — must be accurate and not misleading. PaMarket reserves the right to remove any listing without notice.</p>'
      + '<h3>4. Prohibited Content</h3>'
      + '<p>The following are strictly prohibited on PaMarket: stolen or counterfeit goods; illegal drugs, weapons, or firearms; adult or explicit content; hate speech or content that promotes discrimination; spam, pyramid schemes, or fraudulent offers; impersonation of any person or business.</p>'
      + '<h3>5. Transactions</h3>'
      + '<p>PaMarket is a listing and communication platform only. We do not process payments, hold funds, or guarantee the quality of any item. All transactions are solely between buyer and seller. PaMarket accepts no liability for disputes, losses, or damages arising from transactions.</p>'
      + '<h3>6. Wallet &amp; Top-Ups</h3>'
      + '<p>The in-app wallet is used exclusively for boosting listings. Top-up amounts that have not yet been used may be refunded upon written request to chakusaprince@gmail.com within 30 days of payment. Used credits are non-refundable. Wallet balances have no cash value and cannot be transferred.</p>'
      + '<h3>7. Intellectual Property</h3>'
      + '<p>All content you post on PaMarket (photos, descriptions, etc.) remains yours. By posting, you grant PaMarket a non-exclusive, royalty-free licence to display your content within the app. The PaMarket name, logo, and app design are our intellectual property and may not be copied or reused.</p>'
      + '<h3>8. Privacy</h3>'
      + '<p>Your use of the app is also governed by our Privacy Policy, which is incorporated into these Terms by reference.</p>'
      + '<h3>9. Termination</h3>'
      + '<p>We may suspend or permanently ban any account that violates these Terms, with or without notice. You may delete your account at any time via Settings → Security → Delete Account.</p>'
      + '<h3>10. Limitation of Liability</h3>'
      + '<p>PaMarket is provided "as is" without warranties of any kind. To the maximum extent permitted by law, PaMarket shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app.</p>'
      + '<h3>11. Changes to Terms</h3>'
      + '<p>We may update these Terms from time to time. Continued use of the app after changes are posted constitutes acceptance of the revised Terms.</p>'
      + '<h3>12. Governing Law</h3>'
      + '<p>These Terms are governed by the laws of Zimbabwe. Any disputes shall be resolved in the courts of Zimbabwe.</p>'
      + '<h3>13. Contact</h3>'
      + '<p>Email: chakusaprince@gmail.com<br>WhatsApp: +971 589 772 645</p>'
      + '</div>';
  };

  H._privacyText = function() {
    return '<div class="doc-content">'
      + '<h2>Privacy Policy</h2>'
      + '<p><strong>Effective Date: 1 May 2026</strong></p>'
      + '<p>PaMarket Zimbabwe ("we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights.</p>'
      + '<h3>1. Information We Collect</h3>'
      + '<p><strong>Account data:</strong> name, email address, phone number, and profile photo when you register.</p>'
      + '<p><strong>Listing data:</strong> photos, descriptions, prices, and location you provide when posting an ad.</p>'
      + '<p><strong>Usage data:</strong> pages viewed, searches performed, listings saved, and messages sent within the app.</p>'
      + '<p><strong>Device data:</strong> device type, operating system, and app version for crash reporting and performance monitoring.</p>'
      + '<h3>2. How We Use Your Information</h3>'
      + '<p>To operate and improve the PaMarket platform; to authenticate your account and keep it secure; to display your listings to other users; to send you notifications about messages, offers, and account activity; to investigate reports of abuse or policy violations.</p>'
      + '<h3>3. Data Sharing</h3>'
      + '<p>We do not sell your personal data. We share data only with: <strong>Supabase</strong> (our database and authentication provider, data stored in EU data centres with encryption at rest and in transit); <strong>Google</strong> (if you choose Sign in with Google); and law enforcement when required by law.</p>'
      + '<h3>4. Photos &amp; Camera</h3>'
      + '<p>The app requests access to your camera and photo library only to let you upload listing photos and a profile picture. We do not access your camera or photos for any other purpose.</p>'
      + '<h3>5. Data Retention</h3>'
      + '<p>Your data is retained for as long as your account is active. When you delete your account, your personal data, listings, and messages are permanently deleted within 30 days.</p>'
      + '<h3>6. Security</h3>'
      + '<p>All data is transmitted over HTTPS. Passwords are never stored — authentication is managed by Supabase using industry-standard bcrypt hashing.</p>'
      + '<h3>7. Your Rights</h3>'
      + '<p>You may access, correct, or delete your personal data at any time via Settings → Edit Profile or Settings → Security → Delete Account. You may also contact us directly to request a copy of your data.</p>'
      + '<h3>8. Children\'s Privacy</h3>'
      + '<p>PaMarket is not intended for users under 18. We do not knowingly collect data from children. If we become aware that a child has registered, we will delete the account immediately.</p>'
      + '<h3>9. Changes to This Policy</h3>'
      + '<p>We may update this Privacy Policy from time to time. We will notify you of significant changes via in-app notification. Continued use of the app constitutes acceptance of the updated policy.</p>'
      + '<h3>10. Contact</h3>'
      + '<p>Email: chakusaprince@gmail.com<br>WhatsApp: +971 589 772 645</p>'
      + '</div>';
  };

})(window.H);
