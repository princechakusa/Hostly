'use strict';
(function (H) {
  const { escHtml, timeAgo, uid, toast, innerTopbar, emptyState, openInner, saveState, ICONS } = H;
  const pages = H.pages;

  // --- Push helper (called from anywhere) -------------------
  H.pushNotif = function (uid_, title, body) {
    H.state.notifs[uid_] = H.state.notifs[uid_] || [];
    H.state.notifs[uid_].unshift({ id: uid(), t: Date.now(), read: false, title, body });
    if (H.state.notifs[uid_].length > 50) H.state.notifs[uid_].length = 50;
    saveState();
    H._updateNotifBadge();
  };

  H._updateNotifBadge = function () {
    const u = H.currentUser(); if (!u) return;
    const count = (H.state.notifs[u.id] || []).filter(n => !n.read).length;
    const badge = document.querySelector('[data-nav="Notifications"] .badge') || document.querySelector('.hdr-ic .badge');
    if (badge) {
      badge.textContent = count > 9 ? '9+' : count;
      badge.style.display = count ? '' : 'none';
    }
  };

  // --- Notification icon mapper -----------------------------
  function _notifIcon(title) {
    const t = (title || '').toLowerCase();
    // Use dedicated mini SVG icons (inline, consistent 18px size)
    const iconStyle = 'width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round';
    if (t.includes('boost') || t.includes('featured')) {
      // lightning bolt (boost/featured)
      return `<svg viewBox="0 0 24 24" style="${iconStyle}"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
    }
    if (t.includes('verif')) {
      // shield check (verified)
      return `<svg viewBox="0 0 24 24" style="${iconStyle}"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`;
    }
    if (t.includes('message')) {
      // mail / message
      return `<svg viewBox="0 0 24 24" style="${iconStyle}"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;
    }
    if (t.includes('ban') || t.includes('suspend')) {
      // slash / ban
      return `<svg viewBox="0 0 24 24" style="${iconStyle}"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`;
    }
    if (t.includes('report')) {
      // flag
      return `<svg viewBox="0 0 24 24" style="${iconStyle}"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`;
    }
    if (t.includes('sold')) {
      // dollar / sold
      return `<svg viewBox="0 0 24 24" style="${iconStyle}"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`;
    }
    if (t.includes('review') || t.includes('appeal')) {
      // file-text
      return `<svg viewBox="0 0 24 24" style="${iconStyle}"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="9" y2="9"/></svg>`;
    }
    // default: bell
    return `<svg viewBox="0 0 24 24" style="${iconStyle}"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`;
  }

  // --- Notifications page -----------------------------------
  pages.Notifications = function () {
    const u    = H.currentUser();
    const list = (H.state.notifs[u.id] || []);
    // Mark all as read
    list.forEach(n => { n.read = true; });
    saveState();
    H._updateNotifBadge();

    return `<div class="page active">${innerTopbar('Notifications')}
      <div style="padding-bottom:90px">
        ${list.length ? list.map(n => {
          const isNew = false; // all already marked read
          return `<div style="background:var(--card);border-bottom:1px solid var(--border);padding:14px 16px;display:flex;gap:12px;align-items:flex-start;${isNew ? 'border-left:3px solid var(--o)' : ''}">
            <div style="width:36px;height:36px;border-radius:50%;background:${_notifBg(n.title)};display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--text);font-size:16px">
              ${_notifIcon(n.title)}
            </div>
            <div style="flex:1;min-width:0">
              <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:3px;line-height:1.3">${escHtml(n.title)}</div>
              <div style="font-size:13px;color:var(--sub);line-height:1.5;margin-bottom:4px">${escHtml(n.body)}</div>
              <div style="font-size:11px;color:var(--sub2);font-weight:500">${timeAgo(n.t)}</div>
            </div>
          </div>`;
        }).join('') : emptyState('All caught up', 'New notifications about your listings and messages will appear here.', null, null)}
      </div>

      <div class="menu-group-label">Notification Settings</div>
      <div class="menu-items" style="padding-bottom:90px">
        <div class="mi" onclick="H.openInner('NotifSettings')">
          <div class="mi-icon blue-ic">
            <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          </div>
          <div class="mi-label">Notification Preferences</div>
          <div class="mi-arrow">›</div>
        </div>
      </div>
    </div>`;
  };

  function _notifBg(title) {
    const t = (title || '').toLowerCase();
    // subtle background colour based on type
    if (t.includes('boost') || t.includes('featured')) return 'rgba(200,80,26,.1)';
    if (t.includes('verif')) return 'rgba(29,155,240,.1)';
    if (t.includes('message')) return 'rgba(34,197,94,.1)';
    if (t.includes('ban') || t.includes('suspend')) return 'rgba(255,59,48,.1)';
    if (t.includes('report')) return 'rgba(255,149,0,.1)';
    if (t.includes('sold')) return 'rgba(0,122,255,.1)';
    return 'var(--bg2)';
  }

  // --- Notification settings --------------------------------
  pages.NotifSettings = function () {
    const u = H.currentUser();
    u.settings = u.settings || {};

    const rows = [
      ['newEnq',    'New Enquiries',         'When someone messages you about a listing',     'message'],
      ['priceDrop', 'Price Drops',           'When a saved ad drops in price',                'dollar'],
      ['boostExp',  'Boost Expiry Reminders', '2 days before your boost ends',                'clock'],
      ['sec',       'Security Alerts',       'New sign-in or suspicious account activity',     'shield'],
      ['promo',     'Tips & Promotions',     'Selling tips, platform updates, discounts',      'star'],
      ['sms',       'SMS Alerts',           'Critical alerts via SMS (carrier rates may apply)','smartphone']
    ];

    // Helper to return mini icon for setting row
    const settingsIcon = (iconKey) => {
      const style = 'width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;vertical-align:middle;margin-right:4px';
      const icons = {
        message: `<svg viewBox="0 0 24 24" style="${style}"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        dollar: `<svg viewBox="0 0 24 24" style="${style}"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
        clock: `<svg viewBox="0 0 24 24" style="${style}"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
        shield: `<svg viewBox="0 0 24 24" style="${style}"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        star: `<svg viewBox="0 0 24 24" style="${style}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
        smartphone: `<svg viewBox="0 0 24 24" style="${style}"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`
      };
      return icons[iconKey] || '';
    };

    return `<div class="page active">${innerTopbar('Notification Preferences')}
      <div style="padding:12px 12px 100px">
        <div style="font-size:13px;color:var(--sub);padding:4px 2px 12px;line-height:1.5">
          Choose which notifications you receive. Push notifications require app permissions.
        </div>
        <div class="section-card">
          ${rows.map(([k, t, s, iconName]) => `
            <div class="notif-toggle-row">
              <div class="notif-toggle-info">
                <div class="notif-toggle-title">${settingsIcon(iconName)} ${t}</div>
                <div class="notif-toggle-sub">${s}</div>
              </div>
              <button class="toggle-sw ${u.settings[k] !== false ? 'on' : ''}"
                onclick="H.toggleSetting('${k}',this)"
                role="switch"
                aria-checked="${u.settings[k] !== false ? 'true' : 'false'}"
                aria-label="${t}">
              </button>
            </div>`).join('')}
        </div>

        <div style="background:var(--n4);border-radius:14px;padding:14px;margin-top:14px;border:1px solid var(--n5)">
          <div style="font-size:13px;font-weight:700;color:var(--n2);margin-bottom:4px">
            <svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;vertical-align:middle;margin-right:6px;"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Privacy Note
          </div>
          <div style="font-size:12px;color:var(--sub);line-height:1.6">
            Hostly never sells your notification preferences or contact details to third parties.
            You can turn off all notifications at any time from your device settings.
          </div>
        </div>
      </div>
    </div>`;
  };

  H.toggleSetting = function (k, btn) {
    const u = H.currentUser();
    u.settings = u.settings || {};
    u.settings[k] = !(u.settings[k] !== false);
    btn.classList.toggle('on', u.settings[k]);
    btn.setAttribute('aria-checked', u.settings[k] ? 'true' : 'false');
    saveState();
    toast(u.settings[k] ? 'Enabled' : 'Disabled');
  };

})(window.H);