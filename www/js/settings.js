'use strict';
(function (H) {
  const pages = H.pages;
  const I = {
    palette: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    bell:   '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
    lock:   '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    shield: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    globe:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none"/></svg>',
    ban:    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>',
    sun:    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    moon:   '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    settings:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    phone:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 2.1.74 3.26a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.16.38 2.3.61 3.26.74a2 2 0 0 1 1.72 2.03z"/></svg>',
    key:    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>',
    eye:    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    message:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    heart:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    clock:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    check:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
    star:   '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    alert:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    list:   '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
    smartphone:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
    trash:  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>'
  };

  // --- Settings Page ----------------------------------------
  pages.Settings = function () {
    const u = H.currentUser();

    return `<div class="page active">
      ${H.innerTopbar('Settings')}
      
      <div class="settings-section">
        <div class="section-title">Appearance</div>
        <button class="settings-item" onclick="H.openInner('ThemeSettings')">
          <span class="item-icon">${I.palette}</span>
          <span class="item-label">Theme</span>
          <span class="item-value">${u.settings && u.settings.theme ? u.settings.theme.charAt(0).toUpperCase() + u.settings.theme.slice(1) : 'Light'}</span>
        </button>
      </div>

      <div class="settings-section">
        <div class="section-title">Notifications</div>
        <button class="settings-item" onclick="H.openInner('NotificationSettings')">
          <span class="item-icon">${I.bell}</span>
          <span class="item-label">Notification Preferences</span>
          <span class="item-arrow">›</span>
        </button>
      </div>

      <div class="settings-section">
        <div class="section-title">Account & Privacy</div>
        <button class="settings-item" onclick="H.openInner('PrivacySettings')">
          <span class="item-icon">${I.lock}</span>
          <span class="item-label">Privacy Settings</span>
          <span class="item-arrow">›</span>
        </button>
        <button class="settings-item" onclick="H.openInner('SecuritySettings')">
          <span class="item-icon">${I.shield}</span>
          <span class="item-label">Security</span>
          <span class="item-arrow">›</span>
        </button>
        <button class="settings-item" onclick="H.openInner('LanguageSettings')">
          <span class="item-icon">${I.globe}</span>
          <span class="item-label">Language</span>
          <span class="item-value">${u.language || 'English'}</span>
        </button>
      </div>

      <div class="settings-section">
        <div class="section-title">Actions</div>
        <button class="settings-item" onclick="H.openInner('BlockedUsers')">
          <span class="item-icon">${I.ban}</span>
          <span class="item-label">Blocked Users</span>
          <span class="item-arrow">›</span>
        </button>
      </div>

      <div style="height:20px"></div>
    </div>`;
  };

  // --- Theme Settings ---------------------------------------
  pages.ThemeSettings = function () {
    const u = H.currentUser();
    const currentTheme = (u.settings && u.settings.theme) || 'light';

    return `<div class="page active">
      ${H.innerTopbar('Theme Settings')}
      <div class="form-wrap">
        <div class="theme-selector">
          <label class="theme-option ${currentTheme === 'light' ? 'selected' : ''}">
            <input type="radio" name="theme" value="light" ${currentTheme === 'light' ? 'checked' : ''} onchange="H._themeSettings.setTheme('light')">
            <span class="theme-preview" style="background:#F4F1EA">${I.sun}</span>
            <span>Light Mode</span>
          </label>

          <label class="theme-option ${currentTheme === 'dark' ? 'selected' : ''}">
            <input type="radio" name="theme" value="dark" ${currentTheme === 'dark' ? 'checked' : ''} onchange="H._themeSettings.setTheme('dark')">
            <span class="theme-preview" style="background:#111315">${I.moon}</span>
            <span>Dark Mode</span>
          </label>

          <label class="theme-option ${currentTheme === 'system' ? 'selected' : ''}">
            <input type="radio" name="theme" value="system" ${currentTheme === 'system' ? 'checked' : ''} onchange="H._themeSettings.setTheme('system')">
            <span class="theme-preview">${I.settings}</span>
            <span>System Default</span>
          </label>
        </div>
      </div>
    </div>`;
  };

  pages.ThemeSettings_after = function () {
    H._themeSettings = {
      setTheme: (theme) => {
        const u = H.currentUser();
        if (!u.settings) u.settings = {};
        u.settings.theme = theme;
        H.applyTheme();
        H.saveState();
        H.toast('Theme updated');
      }
    };
  };

  // --- Notification Settings --------------------------------
  pages.NotificationSettings = function () {
    const u = H.currentUser();
    const prefs = u.notificationPrefs || {
      messages: true,
      listings: true,
      approvals: true,
      promotions: true,
      favorites: true,
      security: true
    };

    return `<div class="page active">
      ${H.innerTopbar('Notification Preferences')}
      <div class="form-wrap">
        <div class="notif-section">
          <div class="section-title">Alerts</div>
          
          <div class="toggle-item">
            <div class="toggle-label">
              <span class="toggle-icon">${I.message}</span>
              <span>Messages</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" ${prefs.messages ? 'checked' : ''} onchange="H._notifSettings.toggle('messages')">
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="toggle-item">
            <div class="toggle-label">
              <span class="toggle-icon">${I.list}</span>
              <span>Listing Updates</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" ${prefs.listings ? 'checked' : ''} onchange="H._notifSettings.toggle('listings')">
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="toggle-item">
            <div class="toggle-label">
              <span class="toggle-icon">${I.check}</span>
              <span>Approval Status</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" ${prefs.approvals ? 'checked' : ''} onchange="H._notifSettings.toggle('approvals')">
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="toggle-item">
            <div class="toggle-label">
              <span class="toggle-icon">${I.star}</span>
              <span>Promotions</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" ${prefs.promotions ? 'checked' : ''} onchange="H._notifSettings.toggle('promotions')">
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="toggle-item">
            <div class="toggle-label">
              <span class="toggle-icon">${I.heart}</span>
              <span>Favorites Alerts</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" ${prefs.favorites ? 'checked' : ''} onchange="H._notifSettings.toggle('favorites')">
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="toggle-item">
            <div class="toggle-label">
              <span class="toggle-icon">${I.lock}</span>
              <span>Security Alerts</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" ${prefs.security ? 'checked' : ''} onchange="H._notifSettings.toggle('security')">
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>`;
  };

  pages.NotificationSettings_after = function () {
    const DEFAULTS = { messages: true, listings: true, approvals: true, promotions: true, favorites: true, security: true };
    H._notifSettings = {
      toggle: (key) => {
        const u = H.currentUser();
        if (!u.notificationPrefs) u.notificationPrefs = Object.assign({}, DEFAULTS);
        // Seed with default if key was never explicitly set
        if (!(key in u.notificationPrefs)) u.notificationPrefs[key] = DEFAULTS[key] !== false;
        u.notificationPrefs[key] = !u.notificationPrefs[key];
        H.saveState();
        H.toast(u.notificationPrefs[key] ? 'Enabled' : 'Disabled');
      }
    };
  };

  // --- Privacy Settings --------------------------------------
  pages.PrivacySettings = function () {
    const u = H.currentUser();
    const privacy = u.privacySettings || {
      profilePublic: true,
      showPhoneInListings: false,
      allowMessages: true,
      showActivity: false
    };

    return `<div class="page active">
      ${H.innerTopbar('Privacy Settings')}
      <div class="form-wrap">
        <div class="privacy-section">
          <div class="section-title">Profile Visibility</div>
          
          <div class="toggle-item">
            <div class="toggle-label">
              <span class="toggle-icon">${I.eye}</span>
              <span>Public Profile</span>
              <span class="toggle-desc">Others can view your profile</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" ${privacy.profilePublic ? 'checked' : ''} onchange="H._privacySettings.toggle('profilePublic')">
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="toggle-item">
            <div class="toggle-label">
              <span class="toggle-icon">${I.phone}</span>
              <span>Show Phone in Listings</span>
              <span class="toggle-desc">Sellers can see your phone number</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" ${privacy.showPhoneInListings ? 'checked' : ''} onchange="H._privacySettings.toggle('showPhoneInListings')">
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="toggle-item">
            <div class="toggle-label">
              <span class="toggle-icon">${I.message}</span>
              <span>Allow Direct Messages</span>
              <span class="toggle-desc">Others can message you directly</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" ${privacy.allowMessages ? 'checked' : ''} onchange="H._privacySettings.toggle('allowMessages')">
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="toggle-item">
            <div class="toggle-label">
              <span class="toggle-icon">${I.clock}</span>
              <span>Show Activity Status</span>
              <span class="toggle-desc">Others can see when you're online</span>
            </div>
            <label class="toggle-switch">
              <input type="checkbox" ${privacy.showActivity ? 'checked' : ''} onchange="H._privacySettings.toggle('showActivity')">
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>`;
  };

  pages.PrivacySettings_after = function () {
    H._privacySettings = {
      toggle: (key) => {
        const u = H.currentUser();
        if (!u.privacySettings) u.privacySettings = {};
        u.privacySettings[key] = !u.privacySettings[key];
        H.saveState();
      }
    };
  };

  // --- Security Settings ------------------------------------
  pages.SecuritySettings = function () {
    return `<div class="page active">
      ${H.innerTopbar('Security Settings')}
      <div class="form-wrap">
        <div class="security-section">
          <div class="section-title">Account Security</div>
          
          <button class="settings-item" onclick="H.openInner('ChangePassword')">
            <span class="item-icon">${I.key}</span>
            <span class="item-label">Change Password</span>
            <span class="item-arrow">›</span>
          </button>

          <button class="settings-item" onclick="H.openInner('TwoFactor')">
            <span class="item-icon">${I.lock}</span>
            <span class="item-label">Two-Factor Authentication</span>
            <span class="item-arrow">›</span>
          </button>

          <button class="settings-item" onclick="H.openInner('ActiveSessions')">
            <span class="item-icon">${I.smartphone}</span>
            <span class="item-label">Active Sessions</span>
            <span class="item-arrow">›</span>
          </button>

          <button class="settings-item danger" onclick="H.openInner('DeleteAccount')">
            <span class="item-icon">${I.alert}</span>
            <span class="item-label">Delete Account</span>
            <span class="item-arrow">›</span>
          </button>
        </div>
      </div>
    </div>`;
  };

  // --- Language Settings ------------------------------------
  pages.LanguageSettings = function () {
    return `<div class="page active">
      ${H.innerTopbar('Language')}
      <div class="form-wrap">
        <div class="section-box">
          <label class="lang-option selected" style="display:flex;align-items:center;gap:12px;padding:14px 0;border-bottom:1px solid var(--border,#e5e0d6)">
            <input type="radio" name="language" checked disabled>
            <div style="flex:1">
              <div style="font-weight:700;color:var(--text)">English</div>
              <div style="font-size:12px;color:var(--muted)">Current language</div>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent,#1A3A8F)" stroke-width="2.5" width="20" height="20"><polyline points="20 6 9 17 4 12"/></svg>
          </label>
          <div style="display:flex;align-items:center;gap:12px;padding:14px 0;border-bottom:1px solid var(--border,#e5e0d6);opacity:.5">
            <input type="radio" name="language" disabled>
            <div style="flex:1">
              <div style="font-weight:700;color:var(--text)">Shona · ChiShona</div>
              <div style="font-size:12px;color:var(--muted)">Not available in this version</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:12px;padding:14px 0;opacity:.5">
            <input type="radio" name="language" disabled>
            <div style="flex:1">
              <div style="font-weight:700;color:var(--text)">Ndebele · IsiNdebele</div>
              <div style="font-size:12px;color:var(--muted)">Not available in this version</div>
            </div>
          </div>
        </div>
        <p style="font-size:13px;color:var(--muted);text-align:center;margin-top:8px">PaMarket uses English for app screens and account communication.</p>
      </div>
    </div>`;
  };

  pages.LanguageSettings = function () {
    const current = H.getLanguage ? H.getLanguage() : ((H.currentUser() && H.currentUser().language) || H.state.language || 'English');
    return `<div class="page active">
      ${H.innerTopbar('Language')}
      <div class="form-wrap">
        <div class="section-box" style="padding:0">
          <button onclick="H.setLanguage('English')" style="display:flex;align-items:center;gap:12px;width:100%;padding:16px;background:var(--card);border:none;text-align:left;cursor:pointer">
            <span style="width:22px;height:22px;border-radius:50%;border:2px solid #1A3A8F;display:flex;align-items:center;justify-content:center;flex-shrink:0">
              ${current === 'English' ? '<span style="width:10px;height:10px;border-radius:50%;background:#1A3A8F"></span>' : ''}
            </span>
            <div style="flex:1">
              <div style="font-size:15px;font-weight:700;color:var(--text-primary)">English</div>
              <div style="font-size:12px;color:var(--text-sub);margin-top:2px">App display language</div>
            </div>
            ${current === 'English' ? '<svg viewBox="0 0 24 24" fill="none" stroke="#1A3A8F" stroke-width="2.5" width="20" height="20"><polyline points="20 6 9 17 4 12"/></svg>' : ''}
          </button>
        </div>
        <div class="section-box" style="margin-top:12px">
          <div style="font-size:13px;line-height:1.55;color:var(--text-sub)">PaMarket uses English for app screens and account communication.</div>
        </div>
      </div>
    </div>`;
  };

  pages.LanguageSettings_after = function () {};

  // --- Blocked Users ----------------------------------------
  pages.BlockedUsers = function () {
    const u = H.currentUser();
    const blocked = u.blockedUsers || [];

    return `<div class="page active">
      ${H.innerTopbar('Blocked Users')}
      <div class="form-wrap">
        ${blocked.length
          ? blocked.map(userId => {
              const user = H.state.users.find(us => us.id === userId);
              return `
                <div class="blocked-user-item">
                  <div class="user-info">
                    <div class="user-name">${user ? H.escHtml(user.name) : 'Unknown User'}</div>
                    <div class="user-detail">${user ? H.escHtml(user.phone) : 'N/A'}</div>
                  </div>
                  <button class="btn-unblock" onclick="H._blockedUsers.unblock('${userId}')">Unblock</button>
                </div>
              `;
            }).join('')
          : H.emptyState('No blocked users', 'Users you block won\'t be able to contact you')}
      </div>
    </div>`;
  };

  pages.BlockedUsers_after = function () {
    H._blockedUsers = {
      unblock: (userId) => {
        const u = H.currentUser();
        if (!u.blockedUsers) u.blockedUsers = [];
        u.blockedUsers = u.blockedUsers.filter(id => id !== userId);
        H.saveState();
        H.toast('User unblocked');
        H.openInner('BlockedUsers');
      }
    };
  };

})(window.H = window.H || {});
