'use strict';
(function (H) {
  const pages = H.pages;

  // -- CHANGE PASSWORD ---------------------------------------
  pages.ChangePassword = function () {
    return `<div class="page active">
      ${H.innerTopbar('Change Password')}
      <div class="form-wrap">
        <div style="background:#EFF6FF;border:1px solid #BFDBFE;border-radius:12px;padding:14px 16px;margin-bottom:16px;font-size:13px;color:#1E40AF;line-height:1.5">
          Password must be at least 8 characters and include uppercase, lowercase, a number, and a symbol.
        </div>
        <div class="fg">
          <div class="fl">New Password</div>
          <div style="position:relative">
            <input class="fi" type="password" id="newPass" placeholder="Enter new password" style="padding-right:44px"
              oninput="H._changePassword.checkStrength(this.value)">
            <button type="button" onclick="H._changePassword.toggleVis('newPass',this)"
              style="position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--sub);cursor:pointer;padding:4px">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
          <div id="passStrength" style="margin-top:6px;font-size:12px;font-weight:600"></div>
        </div>
        <div class="fg">
          <div class="fl">Confirm New Password</div>
          <input class="fi" type="password" id="confPass" placeholder="Re-enter new password"
            onkeydown="if(event.key==='Enter')H._changePassword.save()">
        </div>
        <div id="cpErrMsg" style="display:none;font-size:13px;color:#EF4444;padding:6px 0;font-weight:600"></div>
        <button id="cpSaveBtn" class="btn-pri" onclick="H._changePassword.save()">Update Password</button>
        <button class="btn-sec" onclick="H.goBack()">Cancel</button>
      </div>
    </div>`;
  };

  pages.ChangePassword_after = function () {
    H._changePassword = {
      toggleVis: (id, btn) => {
        const inp = document.getElementById(id);
        if (!inp) return;
        inp.type = inp.type === 'password' ? 'text' : 'password';
      },
      checkStrength: (val) => {
        const el = document.getElementById('passStrength');
        if (!el) return;
        if (!val) { el.textContent = ''; return; }
        const checks = [val.length >= 8, /[A-Z]/.test(val), /[a-z]/.test(val), /[0-9]/.test(val), /[^A-Za-z0-9]/.test(val)];
        const score = checks.filter(Boolean).length;
        const labels = ['','Very weak','Weak','Fair','Strong','Very strong'];
        const colors = ['','#EF4444','#F59E0B','#EAB308','#22C55E','#16A34A'];
        el.textContent = labels[score] || '';
        el.style.color = colors[score] || '';
      },
      save: async () => {
        const nw   = (document.getElementById('newPass')?.value || '').trim();
        const conf = (document.getElementById('confPass')?.value || '').trim();
        const btn  = document.getElementById('cpSaveBtn');
        const errEl = document.getElementById('cpErrMsg');
        const showErr = (msg) => { if(errEl){errEl.textContent=msg;errEl.style.display='';} };

        if (!nw || !conf) { showErr('Please fill in both password fields'); return; }
        if (nw.length < 8) { showErr('Password must be at least 8 characters'); return; }
        if (!/[A-Z]/.test(nw)) { showErr('Password must include at least one uppercase letter'); return; }
        if (!/[a-z]/.test(nw)) { showErr('Password must include at least one lowercase letter'); return; }
        if (!/[0-9]/.test(nw)) { showErr('Password must include at least one number'); return; }
        if (!/[^A-Za-z0-9]/.test(nw)) { showErr('Password must include at least one symbol (e.g. !@#$)'); return; }
        if (nw !== conf) { showErr('Passwords do not match'); return; }

        if (errEl) errEl.style.display = 'none';
        if (btn) { btn.disabled = true; btn.textContent = 'Updating…'; }

        const c = window.supabase && typeof window.supabase.from === 'function' ? window.supabase : null;
        if (c && c.auth) {
          const res = await c.auth.updateUser({ password: nw });
          if (res && res.error) {
            if (btn) { btn.disabled = false; btn.textContent = 'Update Password'; }
            showErr(res.error.message || 'Password update failed. Try again.');
            return;
          }
        } else {
          // Fallback for local-only mode
          const u = H.currentUser();
          if (u) { u._localPassword = nw; H.saveState(); }
        }

        if (btn) { btn.disabled = false; btn.textContent = 'Update Password'; }
        H.toast('Password updated successfully!');
        H.goBack();
      }
    };
  };

  pages.TwoFactor = function () {
    const u = H.currentUser();
    const enabled = u.twoFactorEnabled || false;
    return `<div class="page active">
      ${H.innerTopbar('Two-Factor Authentication')}
      <div class="form-wrap">
        <div class="section-box">
          <div class="verify-title">${enabled ? '2FA Enabled' : '2FA Disabled'}</div>
          <div class="verify-sub">${enabled ? 'Your account is protected.' : 'Add an extra layer of security.'}</div>
        </div>
        <div class="section-box">
          <div class="section-title">How it works</div>
          <div class="info-row"><span class="info-label">Step 1</span><span class="info-val">Enter your password</span></div>
          <div class="info-row"><span class="info-label">Step 2</span><span class="info-val">Get a code via SMS</span></div>
          <div class="info-row"><span class="info-label">Step 3</span><span class="info-val">Enter code to log in</span></div>
        </div>
        <button class="btn-pri" onclick="H._twoFactor.toggle()">${enabled ? 'Disable 2FA' : 'Enable 2FA'}</button>
        <button class="btn-sec" onclick="H.goBack()">Back</button>
      </div>
    </div>`;
  };

  pages.TwoFactor_after = function () {
    H._twoFactor = {
      toggle: () => {
        const u = H.currentUser();
        u.twoFactorEnabled = !u.twoFactorEnabled;
        H.saveState();
        H.toast(u.twoFactorEnabled ? '2FA enabled' : '2FA disabled');
        H.renderPage('TwoFactor');
      }
    };
  };

  pages.ActiveSessions = function () {
    const u = H.currentUser();
    const sessions = u.sessions || [{ id: 'current', device: 'This device', location: 'Zimbabwe', time: Date.now(), current: true }];
    return `<div class="page active">
      ${H.innerTopbar('Active Sessions')}
      <div class="form-wrap">
        <div class="section-box">
          <div class="section-title">Logged-in Devices</div>
          ${sessions.map(s => `
            <div class="info-row">
              <div>
                <div style="font-size:13px;font-weight:600;color:var(--charcoal)">${H.escHtml(s.device)}</div>
                <div style="font-size:11px;color:var(--ash);margin-top:2px">${H.escHtml(s.location)} · ${new Date(s.time).toLocaleDateString()}</div>
              </div>
              ${s.current ? '<span style="font-size:11px;font-weight:700;color:#16a34a;background:#dcfce7;padding:3px 10px;border-radius:20px">Current</span>'
                : `<button class="btn-unblock" onclick="H._sessions.revoke('${s.id}')">Revoke</button>`}
            </div>`).join('')}
        </div>
        <button class="btn-sec" style="background:var(--red2);color:var(--red)" onclick="H._sessions.revokeAll()">Sign Out All Other Devices</button>
        <button class="btn-sec" onclick="H.goBack()">Back</button>
      </div>
    </div>`;
  };

  pages.ActiveSessions_after = function () {
    H._sessions = {
      revoke: (id) => {
        const u = H.currentUser();
        u.sessions = (u.sessions || []).filter(s => s.id !== id);
        H.saveState(); H.toast('Session revoked'); H.renderPage('ActiveSessions');
      },
      revokeAll: () => {
        const u = H.currentUser();
        u.sessions = (u.sessions || []).filter(s => s.current);
        H.saveState(); H.toast('All other sessions signed out'); H.renderPage('ActiveSessions');
      }
    };
  };

  pages.DeleteAccount = function () {
    return `<div class="page active">
      ${H.innerTopbar('Delete Account')}
      <div class="form-wrap">
        <div class="section-box" style="border:1.5px solid rgba(192,57,43,.2);text-align:center;padding:24px">
          <div class="verify-title" style="color:var(--red)">Delete Account</div>
          <div class="verify-sub">This permanently deletes your account, listings, messages and wallet. Cannot be undone.</div>
        </div>
        <div class="section-box">
          <div class="section-title">What will be deleted</div>
          <div class="info-row"><span class="info-label">Profile</span><span class="info-val" style="color:var(--red)">Permanently removed</span></div>
          <div class="info-row"><span class="info-label">Listings</span><span class="info-val" style="color:var(--red)">All deleted</span></div>
          <div class="info-row"><span class="info-label">Messages</span><span class="info-val" style="color:var(--red)">All deleted</span></div>
          <div class="info-row"><span class="info-label">Wallet</span><span class="info-val" style="color:var(--red)">Balance forfeited</span></div>
        </div>
        <div class="fg">
          <div class="fl">Type DELETE to confirm</div>
          <input class="fi" id="deleteConfirm" placeholder="Type DELETE">
        </div>
        <button class="btn-pri" style="background:var(--red)" onclick="H._deleteAccount.confirm()">Permanently Delete Account</button>
        <button class="btn-sec" onclick="H.goBack()">Cancel · Keep Account</button>
      </div>
    </div>`;
  };

  pages.DeleteAccount_after = function () {
    H._deleteAccount = {
      confirm: async () => {
        const val = document.getElementById('deleteConfirm')?.value?.trim();
        if (val !== 'DELETE') { H.toast('Type DELETE to confirm'); return; }
        const btn = document.querySelector('.btn-pri[onclick*="confirm"]');
        if (btn) { btn.disabled = true; btn.textContent = 'Deleting…'; }
        try {
          const c = H.supabaseClient || (typeof sb === 'function' ? sb() : null);
          if (c) {
            await c.rpc('delete_my_account');
            await c.auth.signOut();
          }
        } catch(e) { console.warn('delete_my_account rpc:', e); }
        H.state.currentUserId = null;
        H.saveState();
        H.toast('Account deleted');
        setTimeout(() => H.navTo('Home', null), 800);
      }
    };
  };

})(window.H = window.H || {});
