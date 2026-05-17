'use strict';
(function (H) {
  const { escHtml, timeAgo, uid, toast, saveState } = H;
  const pages = H.pages;

  function sb() {
    return (window.supabase && typeof window.supabase.from === 'function') ? window.supabase : null;
  }

  // ── Push helper (called from anywhere) ────────────────────
  H.pushNotif = function (uid_, title, body, type) {
    H.state.notifs = H.state.notifs || {};
    H.state.notifs[uid_] = H.state.notifs[uid_] || [];
    const n = { id: uid(), t: Date.now(), read: false, title, body, type: type || _inferType(title) };
    H.state.notifs[uid_].unshift(n);
    if (H.state.notifs[uid_].length > 100) H.state.notifs[uid_].length = 100;
    saveState();
    H._updateNotifBadge();

    // Persist to Supabase so the user gets it on other devices
    const c = sb();
    if (c) {
      c.from('notifications').insert({
        id: n.id, user_id: uid_, title: n.title, body: n.body,
        type: n.type, read: false, created_at: new Date(n.t).toISOString()
      }).then(r => { if (r && r.error) console.warn('notif insert failed:', r.error.message); });
    }
  };

  H._updateNotifBadge = function () {
    const u = H.currentUser(); if (!u) return;
    const count = (H.state.notifs[u.id] || []).filter(n => !n.read).length;
    // Update the home header bell badge (rendered as span inside the bell div)
    document.querySelectorAll('[data-notif-badge]').forEach(b => {
      b.textContent = count > 9 ? '9+' : count;
      b.style.display = count ? '' : 'none';
    });
    // Legacy selectors
    const legacy = document.querySelector('[data-nav="Notifications"] .badge') || document.querySelector('.hdr-ic .badge');
    if (legacy) {
      legacy.textContent = count > 9 ? '9+' : count;
      legacy.style.display = count ? '' : 'none';
    }
  };

  // ── Sync from Supabase ────────────────────────────────────
  H.syncNotifications = async function () {
    const c = sb(); if (!c) return;
    const u = H.currentUser(); if (!u) return;
    try {
      const res = await c.from('notifications')
        .select('*').eq('user_id', u.id)
        .order('created_at', { ascending: false }).limit(100);
      if (res.error || !res.data) return;
      H.state.notifs = H.state.notifs || {};
      const local = H.state.notifs[u.id] || [];
      const localIds = new Set(local.map(n => n.id));
      res.data.forEach(r => {
        const t = new Date(r.created_at).getTime();
        const existing = local.find(n => n.id === r.id);
        if (existing) {
          // Cloud read state wins if true (don't unread something the user read on another device)
          if (r.read && !existing.read) existing.read = true;
        } else if (!localIds.has(r.id)) {
          local.unshift({ id: r.id, t, read: !!r.read, title: r.title || '', body: r.body || '', type: r.type || _inferType(r.title) });
        }
      });
      // sort newest first, cap at 100
      local.sort((a, b) => b.t - a.t);
      if (local.length > 100) local.length = 100;
      H.state.notifs[u.id] = local;
      saveState();
      H._updateNotifBadge();
      // Re-render if user is currently looking at the notifications page
      if (H.currentPageName === 'Notifications') H.renderPage('Notifications');
    } catch (e) {
      console.warn('syncNotifications error:', e.message);
    }
  };

  // ── Real-time subscription ────────────────────────────────
  H._setupRealtimeNotifs = function () {
    const c = sb(); if (!c || typeof c.channel !== 'function') return;
    const u = H.currentUser(); if (!u) return;
    if (H._notifChannel) {
      try { c.removeChannel(H._notifChannel); } catch (e) {}
      H._notifChannel = null;
    }
    H._notifChannel = c.channel('notifications:' + u.id)
      .on('postgres_changes', {
        event: 'INSERT', schema: 'public', table: 'notifications',
        filter: 'user_id=eq.' + u.id
      }, payload => {
        const r = payload.new; if (!r) return;
        H.state.notifs = H.state.notifs || {};
        const list = H.state.notifs[u.id] = H.state.notifs[u.id] || [];
        if (!list.some(n => n.id === r.id)) {
          list.unshift({
            id: r.id, t: new Date(r.created_at).getTime(),
            read: !!r.read, title: r.title || '', body: r.body || '',
            type: r.type || _inferType(r.title)
          });
          if (list.length > 100) list.length = 100;
          saveState();
          H._updateNotifBadge();
          if (H.currentPageName === 'Notifications') H.renderPage('Notifications');
        }
      })
      .subscribe();
  };

  // ── Mark single notification as read (cloud-aware) ────────
  H.markNotifRead = async function (notifId) {
    const u = H.currentUser(); if (!u) return;
    const list = H.state.notifs[u.id] || [];
    const n = list.find(x => x.id === notifId);
    if (!n || n.read) return;
    n.read = true;
    saveState();
    H._updateNotifBadge();
    const c = sb();
    if (c) {
      c.from('notifications').update({ read: true }).eq('id', notifId)
        .then(r => { if (r && r.error) console.warn('notif read update failed:', r.error.message); });
    }
  };

  // ── Mark all as read ──────────────────────────────────────
  H.markAllNotifsRead = async function () {
    const u = H.currentUser(); if (!u) return;
    const list = H.state.notifs[u.id] || [];
    const unreadIds = list.filter(n => !n.read).map(n => n.id);
    if (!unreadIds.length) { toast('No unread notifications'); return; }
    list.forEach(n => { n.read = true; });
    saveState();
    H._updateNotifBadge();
    H.renderPage('Notifications');
    toast('Marked all as read');
    const c = sb();
    if (c) {
      c.from('notifications').update({ read: true }).eq('user_id', u.id).eq('read', false)
        .then(r => { if (r && r.error) console.warn('mark-all update failed:', r.error.message); });
    }
  };

  // ── Pull-to-refresh handler hook ──────────────────────────
  H._refreshNotifications = async function () {
    await H.syncNotifications();
    H.renderPage('Notifications');
  };

  // ── Type inference & visual mapping ───────────────────────
  function _inferType(title) {
    const t = (title || '').toLowerCase();
    if (t.includes('boost') || t.includes('featured')) return 'boost';
    if (t.includes('verif')) return 'verify';
    if (t.includes('message') || t.includes('reply')) return 'message';
    if (t.includes('ban') || t.includes('suspend')) return 'ban';
    if (t.includes('report')) return 'report';
    if (t.includes('sold') || t.includes('paid') || t.includes('payment')) return 'sale';
    if (t.includes('review') || t.includes('appeal')) return 'review';
    return 'info';
  }

  function _notifIcon(type) {
    const s = 'width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round';
    const map = {
      boost:   `<svg viewBox="0 0 24 24" style="${s}"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
      verify:  `<svg viewBox="0 0 24 24" style="${s}"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
      message: `<svg viewBox="0 0 24 24" style="${s}"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
      ban:     `<svg viewBox="0 0 24 24" style="${s}"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`,
      report:  `<svg viewBox="0 0 24 24" style="${s}"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`,
      sale:    `<svg viewBox="0 0 24 24" style="${s}"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
      review:  `<svg viewBox="0 0 24 24" style="${s}"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
      info:    `<svg viewBox="0 0 24 24" style="${s}"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`
    };
    return map[type] || map.info;
  }

  function _notifBg(type) {
    const map = {
      boost: 'rgba(245,166,35,.12)', verify: 'rgba(29,155,240,.12)',
      message: 'rgba(34,197,94,.12)', ban: 'rgba(255,59,48,.12)',
      report: 'rgba(255,149,0,.12)', sale: 'rgba(0,122,255,.12)',
      review: 'rgba(139,92,246,.12)', info: 'var(--bg2)'
    };
    return map[type] || 'var(--bg2)';
  }

  function _notifColor(type) {
    const map = {
      boost: '#F5A623', verify: '#1D9BF0', message: '#22C55E',
      ban: '#FF3B30', report: '#FF9500', sale: '#007AFF',
      review: '#8B5CF6', info: '#1A3A8F'
    };
    return map[type] || '#1A3A8F';
  }

  // ── Notifications page ────────────────────────────────────
  pages.Notifications = function () {
    const u = H.currentUser();
    if (!u) {
      return '<div class="page active">' + H.innerTopbar('Notifications')
        + H.emptyState('Sign in required', 'Sign in to view your notifications.', 'Sign In', "H.authPage()")
        + '</div>';
    }
    const list = (H.state.notifs[u.id] || []).slice().sort((a, b) => b.t - a.t);
    const unreadCount = list.filter(n => !n.read).length;

    const headerBar = `<div class="inner-topbar">
      <button class="back" onclick="H.goBack()" aria-label="Go back">
        <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="inner-topbar-title">Notifications${unreadCount ? ` <span style="background:#F5A623;color:#1A3A8F;border-radius:10px;padding:1px 8px;font-size:11px;font-weight:800;margin-left:6px">${unreadCount}</span>` : ''}</div>
      ${unreadCount ? '<button onclick="H.markAllNotifsRead()" style="background:none;border:none;color:#1A3A8F;font-size:13px;font-weight:600;cursor:pointer;padding:6px 10px">Mark all read</button>' : '<div style="width:34px"></div>'}
    </div>`;

    return `<div class="page active">${headerBar}
      <div id="notifList" style="padding-bottom:90px">
        ${list.length ? list.map(n => {
          const type = n.type || _inferType(n.title);
          const color = _notifColor(type);
          return `<div onclick="H.markNotifRead('${n.id}');this.querySelector('[data-unread-dot]')?.remove();this.style.background='var(--card)'"
              style="background:${n.read ? 'var(--card)' : 'rgba(26,58,143,.04)'};border-bottom:1px solid var(--border);padding:14px 16px;display:flex;gap:12px;align-items:flex-start;cursor:pointer;position:relative">
            <div style="width:38px;height:38px;border-radius:50%;background:${_notifBg(type)};display:flex;align-items:center;justify-content:center;flex-shrink:0;color:${color}">
              ${_notifIcon(type)}
            </div>
            <div style="flex:1;min-width:0">
              <div style="font-size:14px;font-weight:${n.read ? '600' : '800'};color:var(--text);margin-bottom:3px;line-height:1.3">${escHtml(n.title || '')}</div>
              <div style="font-size:13px;color:var(--sub);line-height:1.5;margin-bottom:4px">${escHtml(n.body || '')}</div>
              <div style="font-size:11px;color:var(--sub2);font-weight:500">${timeAgo(n.t)}</div>
            </div>
            ${n.read ? '' : `<span data-unread-dot style="width:9px;height:9px;border-radius:50%;background:${color};margin-top:6px;flex-shrink:0"></span>`}
          </div>`;
        }).join('') : H.emptyState('All caught up', 'New notifications about your listings and messages will appear here.', null, null)}
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

  pages.Notifications_after = function () {
    // Sync from Supabase whenever the page is opened
    if (typeof H.syncNotifications === 'function') H.syncNotifications();
    // Make sure real-time subscription is alive
    if (typeof H._setupRealtimeNotifs === 'function') H._setupRealtimeNotifs();
  };

  // ── Notification settings ─────────────────────────────────
  pages.NotifSettings = function () {
    const u = H.currentUser();
    if (!u) {
      return '<div class="page active">' + H.innerTopbar('Notification Preferences')
        + H.emptyState('Sign in required', 'Sign in to manage notification preferences.', null, null)
        + '</div>';
    }
    u.settings = u.settings || {};

    const rows = [
      ['newEnq',    'New Enquiries',          'When someone messages you about a listing',         'message'],
      ['priceDrop', 'Price Drops',            'When a saved ad drops in price',                    'dollar'],
      ['boostExp',  'Boost Expiry Reminders', '2 days before your boost ends',                     'clock'],
      ['sec',       'Security Alerts',        'New sign-in or suspicious account activity',        'shield'],
      ['promo',     'Tips & Promotions',      'Selling tips, platform updates, discounts',         'star'],
      ['sms',       'SMS Alerts',             'Critical alerts via SMS (carrier rates may apply)', 'smartphone']
    ];

    const settingsIcon = (iconKey) => {
      const style = 'width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;vertical-align:middle;margin-right:4px';
      const icons = {
        message:    `<svg viewBox="0 0 24 24" style="${style}"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        dollar:     `<svg viewBox="0 0 24 24" style="${style}"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
        clock:      `<svg viewBox="0 0 24 24" style="${style}"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
        shield:     `<svg viewBox="0 0 24 24" style="${style}"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        star:       `<svg viewBox="0 0 24 24" style="${style}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
        smartphone: `<svg viewBox="0 0 24 24" style="${style}"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`
      };
      return icons[iconKey] || '';
    };

    return `<div class="page active">${H.innerTopbar('Notification Preferences')}
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
            <svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;vertical-align:middle;margin-right:6px"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
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
    const u = H.currentUser(); if (!u) return;
    u.settings = u.settings || {};
    u.settings[k] = !(u.settings[k] !== false);
    btn.classList.toggle('on', u.settings[k]);
    btn.setAttribute('aria-checked', u.settings[k] ? 'true' : 'false');
    saveState();
    toast(u.settings[k] ? 'Enabled' : 'Disabled');
  };

})(window.H);
