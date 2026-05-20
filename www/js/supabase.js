/*!
 * PaMarket — Zimbabwe's Free Marketplace
 * © 2026 PaMarket. All rights reserved.
 * Unauthorised copying, modification, distribution or use of this
 * software without written permission from the owner is strictly prohibited.
 */
// supabase.js "” safe Supabase client initialisation
(function () {
  // Make sure the CDN loaded
  if (!window.supabase) {
    console.warn('Supabase CDN not loaded · using mock client.');
    window.supabase = {
      createClient: function () {
        const noop = () => mockClient;
        const mockClient = {
          from: () => {
            console.warn('Supabase mock: operation skipped.');
            return mockClient;
          },
          select: noop,
          insert: noop,
          update: noop,
          delete: noop,
          eq: noop,
          order: noop,
          limit: noop,
          single: () => Promise.resolve({ data: null, error: new Error('Supabase not loaded') }),
          then: (fn) => fn({ data: null, error: new Error('Supabase not loaded') })
        };
        return mockClient;
      }
    };
  }

  const supabaseUrl = window.SUPABASE_URL;
  const supabaseAnonKey = window.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase credentials from supabase-config.js');
  }

  window.supabase = window.supabase.createClient(supabaseUrl || '', supabaseAnonKey || '');

  // Only handle OAuth callbacks — NOT regular page loads with stored sessions.
  // The app restores login state from H.loadState() (localStorage), not from here.
  var _isOAuthCallback = window.location.search.includes('code=') || window.location.hash.includes('access_token=');
  var _isPasswordReset = window.location.hash.includes('type=recovery') || window.location.search.includes('type=recovery');
  var _oauthHandled = false;

  async function handleOAuthSession(session) {
    if (_oauthHandled) return;
    _oauthHandled = true;
    var user   = session.user;
    var userId = user.id;
    var meta   = user.user_metadata || {};
    var name   = meta.full_name || meta.name || user.email || 'User';
    var avatar = meta.avatar_url || meta.picture || null;
    var email  = user.email || '';
    try {
      var pr = await window.supabase.from('profiles').select('*').eq('id', userId).single();
      var profile = pr.data;
      if (!profile) {
        await window.supabase.from('profiles').upsert({ id: userId, name: name, avatar: avatar });
        profile = { id: userId, name: name, avatar: avatar, role: 'user', status: 'active', wallet_usd: 0, verified: false };
      }
      var attempts = 0;
      var trySetup = function() {
        if (!window.H || !window.H.state || typeof window.H.navTo !== 'function') {
          if (++attempts < 40) { setTimeout(trySetup, 200); return; }
          return;
        }
        var users = window.H.state.users = window.H.state.users || [];
        var existing = users.find(function(u){ return u.id === userId; });
        if (!existing) {
          users.push({ id: userId, email: email, name: profile.name || name, phone: profile.phone || '', avatar: profile.avatar || avatar, verified: !!profile.verified, walletUSD: parseFloat(profile.wallet_usd) || 0, language: 'English', joinedAt: new Date(profile.created_at || Date.now()).getTime(), role: profile.role || 'user', status: profile.status || 'active', banReason: null, banUntil: null, blocked: [] });
        } else {
          existing.name = profile.name || existing.name;
          existing.avatar = profile.avatar || existing.avatar;
          existing.role = profile.role || existing.role;
          existing.verified = !!profile.verified;
          existing.walletUSD = parseFloat(profile.wallet_usd) || existing.walletUSD || 0;
        }
        window.H.state.currentUserId = userId;
        if (typeof window.H.saveState === 'function') window.H.saveState();
        if (typeof window.H.closeLoginModal === 'function') window.H.closeLoginModal();
        var nav = document.getElementById('bottomNav');
        if (nav) nav.style.display = 'flex';
        window.H.navTo('Home');
        window.H.toast('Welcome, ' + (profile.name || name) + '!');
        if (typeof window.H.startRealtime === 'function') window.H.startRealtime();
      };
      trySetup();
    } catch(e) { console.warn('OAuth login handler:', e); }
  }

  window.supabase.auth.onAuthStateChange(async function(event, session) {
    // Password reset link clicked — show the set-new-password form
    if (event === 'PASSWORD_RECOVERY') {
      var waitH = function(attempts) {
        if (!window.H || typeof window.H.authShowSetPassword !== 'function') {
          if (attempts < 40) setTimeout(function(){ waitH(attempts + 1); }, 200);
          return;
        }
        window.H.authShowSetPassword();
      };
      waitH(0);
      return;
    }
    if (event !== 'SIGNED_IN' || !session || !session.user) return;
    if (!_isOAuthCallback) return;
    handleOAuthSession(session);
  });

  // Fallback getSession() only on actual OAuth callback pages
  if (_isOAuthCallback) {
    window.supabase.auth.getSession().then(function(result) {
      var session = result && result.data && result.data.session;
      if (session && session.user) handleOAuthSession(session);
    });
  }

  // Real-time sync — subscribes to live database changes
  window.H = window.H || {};
  window.H.startRealtime = function() {
    var sb = window.supabase;
    if (!sb || !sb.channel) return;
    if (window._realtimeStarted) return;
    window._realtimeStarted = true;

    // Listings channel
    sb.channel('rt-listings')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'listings' }, function(payload) {
        var row = payload.new;
        if (!row || !window.H || !window.H.state) return;
        var existing = (window.H.state.listings || []).find(function(l){ return l.id === row.id; });
        if (!existing) {
          window.H.state.listings = window.H.state.listings || [];
          window.H.state.listings.unshift({
            id: row.id, title: row.title || '', desc: row.description || '',
            price: row.price || 0, currency: row.currency || 'USD',
            cat: row.category || '', photos: row.photos || [],
            sellerId: row.seller_id || '', sellerName: row.seller_name || '',
            province: row.province || '', status: row.status || 'active',
            createdAt: new Date(row.created_at || Date.now()).getTime(),
            views: 0, company: row.company || null
          });
          if (typeof window.H.saveState === 'function') window.H.saveState();
        }
      })
      .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'listings' }, function(payload) {
        var id = payload.old && payload.old.id;
        if (!id || !window.H || !window.H.state) return;
        window.H.state.listings = (window.H.state.listings || []).filter(function(l){ return l.id !== id; });
        if (typeof window.H.saveState === 'function') window.H.saveState();
      })
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'listings' }, function(payload) {
        var row = payload.new;
        if (!row || !window.H || !window.H.state) return;
        var l = (window.H.state.listings || []).find(function(x){ return x.id === row.id; });
        if (l) {
          l.status = row.status || l.status;
          l.title  = row.title  || l.title;
          l.price  = row.price  != null ? row.price : l.price;
          if (typeof window.H.saveState === 'function') window.H.saveState();
        }
      })
      .subscribe();

    // Wallet top-up approvals channel
    sb.channel('rt-topup')
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'topup_requests' }, function(payload) {
        var row = payload.new;
        if (!row || !window.H || !window.H.state) return;
        var req = (window.H.state.topupRequests || []).find(function(r){ return r.reference === row.reference; });
        if (req && row.status === 'approved') {
          req.status = 'approved';
          var u = window.H.currentUser && window.H.currentUser();
          if (u && u.id === req.userId) {
            u.walletUSD = +((u.walletUSD || 0) + (req.amount || 0)).toFixed(2);
            window.H.state.txns = window.H.state.txns || [];
            window.H.state.txns.unshift({ id: window.H.uid(), userId: u.id, type: 'topup', amt: req.amount, t: Date.now(), note: 'Wallet Top Up · ' + req.method });
            if (typeof window.H.saveState === 'function') window.H.saveState();
            if (typeof window.H.toast === 'function') window.H.toast('Wallet credited $' + req.amount.toFixed(2) + '!');
          }
        }
      })
      .subscribe();

    // Profile verification approvals
    sb.channel('rt-profiles')
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'profiles' }, function(payload) {
        var row = payload.new;
        if (!row || !window.H || !window.H.state) return;
        var u = (window.H.state.users || []).find(function(x){ return x.id === row.id; });
        if (u) {
          var wasUnverified = !u.verified;
          u.verified = !!row.verified;
          u.role     = row.role || u.role;
          u.walletUSD = row.wallet_usd != null ? parseFloat(row.wallet_usd) : u.walletUSD;
          if (typeof window.H.saveState === 'function') window.H.saveState();
          if (wasUnverified && u.verified && u.id === (window.H.state.currentUserId)) {
            if (typeof window.H.toast === 'function') window.H.toast('Your identity has been verified!');
          }
        }
      })
      .subscribe();
  };
})();
