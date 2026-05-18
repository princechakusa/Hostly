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

  // Handle OAuth callbacks (Google, Facebook) — fires when page loads after redirect
  window.supabase.auth.onAuthStateChange(async function(event, session) {
    if (event !== 'SIGNED_IN' || !session || !session.user) return;
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

      // Wait for H to be ready (OAuth redirect loads fresh page, H boots async)
      var attempts = 0;
      var trySetup = function() {
        if (!window.H || !window.H.state || typeof window.H.navTo !== 'function') {
          if (++attempts < 30) { setTimeout(trySetup, 200); return; }
          return;
        }
        var users = window.H.state.users = window.H.state.users || [];
        if (!users.find(function(u){ return u.id === userId; })) {
          users.push({
            id: userId, email: email,
            name: profile.name || name,
            phone: profile.phone || '',
            avatar: profile.avatar || avatar,
            verified: !!profile.verified,
            walletUSD: parseFloat(profile.wallet_usd) || 0,
            language: 'English',
            joinedAt: new Date(profile.created_at || Date.now()).getTime(),
            role: profile.role || 'user',
            status: profile.status || 'active',
            banReason: null, banUntil: null, blocked: []
          });
        }
        window.H.state.currentUserId = userId;
        if (typeof window.H.saveState === 'function') window.H.saveState();
        var nav = document.getElementById('bottomNav');
        if (nav) nav.style.display = 'flex';
        window.H.navTo('Home');
        window.H.toast('Welcome, ' + (profile.name || name) + '!');
      };
      trySetup();
    } catch(e) { console.warn('OAuth login handler:', e); }
  });
})();
