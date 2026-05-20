/*!
 * PaMarket — Zimbabwe's Free Marketplace
 * © 2026 PaMarket. All rights reserved.
 * Unauthorised copying, modification, distribution or use of this
 * software without written permission from the owner is strictly prohibited.
 */
'use strict';
(function (H) {

  // -- BANNED WORDS -------------------------------------------
  const BANNED = [
    'crypto','bitcoin','investment scheme','send money first',
    'western union','moneygram','wire transfer','advance fee',
    'nude','xxx','escort','adult only','whatsapp only no calls',
    'guaranteed returns','double your money','mlm','pyramid'
  ];

  // -- CATEGORY RISK ------------------------------------------
  const RISK = {
    jobs: 'high', rentals: 'high', property: 'high',
    vehicles: 'medium', services: 'medium',
    electronics: 'low', furniture: 'low',
    fashion: 'low', agriculture: 'low',
    pets: 'low', other: 'low'
  };

  // -- TRUST SCORE --------------------------------------------
  H.getTrustScore = function (user) {
    let score = 50;
    if (user.verified)                    score += 20;
    if (user.email)                       score += 10;
    const reports = (H.state.reports || []).filter(r => r.targetId === user.id).length;
    const rejected = (H.state.listings || []).filter(l => l.sellerId === user.id && l.status === 'rejected').length;
    score -= reports * 10;
    score -= rejected * 5;
    const approved = (H.state.listings || []).filter(l => l.sellerId === user.id && l.status === 'active').length;
    score += Math.min(approved * 3, 20);
    return Math.max(0, Math.min(100, score));
  };

  // -- MODERATION ENGINE --------------------------------------
  H.moderateListing = function (listing, user) {
    const text = (listing.title + ' ' + listing.desc).toLowerCase();

    // 1. Banned word check
    for (const w of BANNED) {
      if (text.includes(w)) {
        return { status: 'rejected', reason: 'Content violates community guidelines: banned terms detected.' };
      }
    }

    // 2. Duplicate check
    const duplicate = (H.state.listings || []).find(l =>
      l.sellerId === user.id &&
      l.title.toLowerCase() === listing.title.toLowerCase() &&
      l.status !== 'rejected' && l.id !== listing.id
    );
    if (duplicate) {
      return { status: 'rejected', reason: 'Duplicate listing detected. Please edit your existing ad instead.' };
    }

    // 3. Spam check — more than 5 posts in last 24h
    const last24h = Date.now() - 86400000;
    const recentPosts = (H.state.listings || []).filter(l =>
      l.sellerId === user.id && l.createdAt > last24h
    ).length;
    if (recentPosts >= 5) {
      return { status: 'rejected', reason: 'Too many listings posted today. Please wait 24 hours.' };
    }

    // 4. Risk scoring
    const risk = RISK[listing.cat] || 'low';
    const trust = H.getTrustScore(user);

    // High trust users skip review
    if (trust >= 70) {
      return { status: 'active', reason: null };
    }

    if (risk === 'high') {
      return { status: 'pending', reason: 'This category requires admin review before going live.' };
    }
    if (risk === 'medium') {
      listing.flaggedForReview = true;
      return { status: 'active', reason: null };
    }

    // low risk — publish immediately
    return { status: 'active', reason: null };
  };

  // -- REPORT THRESHOLD ---------------------------------------
  H.checkReportThreshold = function (listingId) {
    const count = (H.state.reports || []).filter(
      r => r.targetId === listingId && r.targetType === 'listing' && r.status === 'open'
    ).length;
    if (count >= 3) {
      const l = (H.state.listings || []).find(x => x.id === listingId);
      if (l && l.status === 'active') {
        l.status = 'flagged';
        H.saveState();
        return true;
      }
    }
    return false;
  };

  // -- CHAT SPAM DETECTION ------------------------------------
  H.isChatSpam = function (convoId, userId) {
    const c = (H.state.conversations || []).find(x => x.id === convoId);
    if (!c) return false;
    const last10s = Date.now() - 10000;
    const recent = c.messages.filter(m => m.from === userId && m.t > last10s).length;
    return recent >= 5;
  };

  H.containsLink = function (text) {
    return /https?:\/\/|www\.|\.com|\.net|\.org|bit\.ly|wa\.me/i.test(text);
  };

  // -- DAILY HEALTH CHECK -------------------------------------
  H.runDailyHealthCheck = function () {
    const listings = H.state.listings || [];

    // Auto-hide listings with 3+ reports
    listings.forEach(l => {
      if (l.status === 'active') H.checkReportThreshold(l.id);
    });

    // Remove expired boosts
    listings.forEach(l => {
      if (l.boost && l.boost.until < Date.now()) l.boost = null;
    });

    H.saveState();
  };

  // Run health check once on load
  window.addEventListener("load", () => setTimeout(() => { if (H.state) H.runDailyHealthCheck(); }, 3000));

})(window.H = window.H || {});


