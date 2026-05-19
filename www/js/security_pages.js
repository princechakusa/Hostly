'use strict';
(function (H) {
  const pages = H.pages;
  const B32 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

  H._twoFactorCreateSecret = function () {
    const bytes = new Uint8Array(10);
    if (window.crypto && crypto.getRandomValues) crypto.getRandomValues(bytes);
    else for (let i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256);
    let bits = '', out = '';
    bytes.forEach(b => { bits += b.toString(2).padStart(8, '0'); });
    for (let i = 0; i < bits.length; i += 5) out += B32[parseInt(bits.slice(i, i + 5).padEnd(5, '0'), 2)];
    return out.replace(/(.{4})/g, '$1 ').trim();
  };

  function base32Bytes(secret) {
    let bits = '';
    String(secret || '').replace(/\s+/g, '').toUpperCase().split('').forEach(ch => {
      const v = B32.indexOf(ch);
      if (v >= 0) bits += v.toString(2).padStart(5, '0');
    });
    const bytes = [];
    for (let i = 0; i + 8 <= bits.length; i += 8) bytes.push(parseInt(bits.slice(i, i + 8), 2));
    return bytes;
  }

  async function hotp(secret, counter) {
    const keyData = new Uint8Array(base32Bytes(secret));
    const key = await crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-1' }, false, ['sign']);
    const buf = new ArrayBuffer(8);
    const view = new DataView(buf);
    const high = Math.floor(counter / 0x100000000);
    const low = counter >>> 0;
    view.setUint32(0, high);
    view.setUint32(4, low);
    const sig = new Uint8Array(await crypto.subtle.sign('HMAC', key, buf));
    const off = sig[sig.length - 1] & 15;
    const bin = ((sig[off] & 127) << 24) | (sig[off + 1] << 16) | (sig[off + 2] << 8) | sig[off + 3];
    return String(bin % 1000000).padStart(6, '0');
  }

  H._twoFactorCode = function (secret, offset) {
    return hotp(secret, Math.floor(Date.now() / 30000) + (offset || 0));
  };

  H._twoFactorVerify = async function (secret, code) {
    const c = String(code || '').replace(/\D/g, '');
    if (!secret || c.length !== 6) return false;
    for (const o of [-1, 0, 1]) {
      if (await H._twoFactorCode(secret, o) === c) return true;
    }
    return false;
  };

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
    const enabled = !!(u && u.twoFactorEnabled && u.twoFactorSecret);
    const setup = u._pendingTwoFactorSecret || H._twoFactorCreateSecret();
    if (!enabled && !u._pendingTwoFactorSecret) {
      u._pendingTwoFactorSecret = setup;
      H.saveState();
    }
    return `<div class="page active">
      ${H.innerTopbar('Two-Factor Authentication')}
      <div class="form-wrap">
        <div class="section-box" style="text-align:center">
          <div class="verify-title">${enabled ? '2FA Enabled' : 'Set Up Two-Factor Authentication'}</div>
          <div class="verify-sub">${enabled ? 'Your account requires an authenticator code at login.' : 'Use an authenticator app to generate a secure 6-digit login code.'}</div>
        </div>
        ${enabled ? `
          <div class="section-box">
            <div class="section-title">Disable 2FA</div>
            <div class="fg">
              <div class="fl">Authenticator code</div>
              <input class="fi" id="twoFactorCode" inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="123456" onkeydown="if(event.key==='Enter')H._twoFactor.disable()">
            </div>
            <button class="btn-pri" style="background:var(--red)" onclick="H._twoFactor.disable()">Disable 2FA</button>
          </div>
        ` : `
          <div class="section-box">
            <div class="section-title">Manual setup key</div>
            <div style="font-size:12px;color:var(--text-sub);line-height:1.55;margin-bottom:10px">Add a new account in Google Authenticator, Microsoft Authenticator, 1Password, or any TOTP app, then enter the 6-digit code below.</div>
            <div style="font-family:monospace;font-size:16px;font-weight:800;letter-spacing:1px;color:var(--blue);background:var(--blue-light);border:1.5px solid rgba(26,58,143,.18);border-radius:12px;padding:14px;text-align:center;word-break:break-all">${H.escHtml(setup)}</div>
          </div>
          <div class="section-box">
            <div class="section-title">Verify setup</div>
            <div class="fg">
              <div class="fl">Authenticator code</div>
              <input class="fi" id="twoFactorCode" inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="123456" onkeydown="if(event.key==='Enter')H._twoFactor.enable()">
            </div>
            <button class="btn-pri" onclick="H._twoFactor.enable()">Enable 2FA</button>
          </div>
        `}
        <button class="btn-sec" onclick="H.goBack()">Back</button>
      </div>
    </div>`;
  };

  pages.TwoFactor_after = function () {
    H._twoFactor = {
      enable: async () => {
        const u = H.currentUser();
        const code = (document.getElementById('twoFactorCode')?.value || '').trim();
        if (!await H._twoFactorVerify(u._pendingTwoFactorSecret, code)) {
          H.toast('Invalid authenticator code');
          return;
        }
        u.twoFactorSecret = u._pendingTwoFactorSecret;
        u.twoFactorEnabled = true;
        delete u._pendingTwoFactorSecret;
        H.saveState();
        H.toast('2FA enabled');
        H.renderPage('TwoFactor');
      },
      disable: async () => {
        const u = H.currentUser();
        const code = (document.getElementById('twoFactorCode')?.value || '').trim();
        if (!await H._twoFactorVerify(u.twoFactorSecret, code)) {
          H.toast('Invalid authenticator code');
          return;
        }
        u.twoFactorEnabled = false;
        u.twoFactorSecret = null;
        delete u._pendingTwoFactorSecret;
        H.saveState();
        H.toast('2FA disabled');
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
