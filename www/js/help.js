/*!
 * PaMarket — Zimbabwe's Free Marketplace
 * © 2026 PaMarket. All rights reserved.
 * Unauthorised copying, modification, distribution or use of this
 * software without written permission from the owner is strictly prohibited.
 */
'use strict';
(function (H) {
  const pages = H.pages;

  // Icons (prefer H.ICONS, fallback set)
  const I = (window.H && H.ICONS) || {};
  const S = {
    help:       '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    doc:        '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
    lock:       '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    users:      '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    mail:       '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    bug:        '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2l1.88 1.88"/><path d="M14.12 3.88L16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-4a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4c0 3.3-2.7 6-6 6z"/><path d="M3 7h2"/><path d="M19 7h2"/><path d="M3 13h2"/><path d="M19 13h2"/><line x1="6" y1="7" x2="6" y2="12"/><line x1="18" y1="7" x2="18" y2="12"/></svg>',
    message:    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    phone:      '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 2.1.74 3.26a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.16.38 2.3.61 3.26.74a2 2 0 0 1 1.72 2.03z"/></svg>',
    chevron:    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>',
    chevronDown:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>',
  };

  // --- Help Center ------------------------------------------
  pages.Help = function () {
    return `<div class="page active">
      ${H.innerTopbar('Help & Support')}
      <div class="form-wrap">
        <div class="help-section">
          <div class="section-title">Common Questions</div>
          <button class="help-item" onclick="H.openInner('FAQs')">
            <span class="help-icon">${S.help}</span>
            <span class="help-label">FAQs</span>
            <span class="help-arrow">${S.chevron}</span>
          </button>
        </div>

        <div class="help-section">
          <div class="section-title">Documentation</div>
          <button class="help-item" onclick="H.openInner('HelpTerms')">
            <span class="help-icon">${S.doc}</span>
            <span class="help-label">Terms & Conditions</span>
            <span class="help-arrow">${S.chevron}</span>
          </button>
          <button class="help-item" onclick="H.openInner('HelpPrivacy')">
            <span class="help-icon">${S.lock}</span>
            <span class="help-label">Privacy Policy</span>
            <span class="help-arrow">${S.chevron}</span>
          </button>
          <button class="help-item" onclick="H.openInner('HelpCommunity')">
            <span class="help-icon">${S.users}</span>
            <span class="help-label">Community Guidelines</span>
            <span class="help-arrow">${S.chevron}</span>
          </button>
        </div>

        <div class="help-section">
          <div class="section-title">Support</div>
          <button class="help-item" onclick="H.openInner('ContactSupport')">
            <span class="help-icon">${S.mail}</span>
            <span class="help-label">Contact Support</span>
            <span class="help-arrow">${S.chevron}</span>
          </button>
          <button class="help-item" onclick="H.openInner('ReportProblem')">
            <span class="help-icon">${S.bug}</span>
            <span class="help-label">Report a Problem</span>
            <span class="help-arrow">${S.chevron}</span>
          </button>
        </div>

        <div style="background:var(--card);border:1.5px solid var(--border);border-radius:14px;padding:16px;margin-bottom:12px">
          <div style="font-size:13px;font-weight:700;color:var(--text);margin-bottom:12px">Quick Contact</div>
          <a href="mailto:chakusaprince@gmail.com" style="display:flex;align-items:center;gap:10px;padding:10px 0;text-decoration:none;border-bottom:1px solid var(--border)">
            <span style="color:#1A3A8F">${S.mail}</span>
            <span style="font-size:13px;font-weight:600;color:#1A3A8F">chakusaprince@gmail.com</span>
          </a>
          <a href="tel:+971589772645" style="display:flex;align-items:center;gap:10px;padding:10px 0;text-decoration:none;border-bottom:1px solid var(--border)">
            <span style="color:#16a34a">${S.phone}</span>
            <span style="font-size:13px;font-weight:600;color:#16a34a">+971 589 772 645</span>
          </a>
          <a href="https://wa.me/971589772645" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:10px;padding:10px 0;text-decoration:none">
            <span style="color:#25D366"><svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg></span>
            <span style="font-size:13px;font-weight:600;color:#25D366">Chat on WhatsApp</span>
          </a>
        </div>

        <div style="height:20px"></div>
      </div>
    </div>`;
  };

  // --- FAQs -------------------------------------------------
  pages.FAQs = function () {
    const faqs = [
      {
        q: 'How do I post an ad?',
        a: 'Tap the Post Ad button at the bottom of the screen. Follow the steps to add photos, title, description, price, and location. Your ad will be reviewed before going live.'
      },
      {
        q: 'How much does it cost to post?',
        a: 'Posting an ad is completely free! We only charge for optional premium features like boosting your listing or featured placement.'
      },
      {
        q: 'How long do listings stay active?',
        a: 'Listings remain active for 30 days. You can renew your listing anytime by tapping "Renew" on My Listings.'
      },
      {
        q: 'How do I get verified?',
        a: 'Go to your Profile > Verify Identity. Upload a valid ID and we\'ll verify it within 24 hours. Verified sellers get a blue badge!'
      },
      {
        q: 'Can I edit my listing?',
        a: 'Yes! Go to My Listings, tap the listing, then tap Edit. You can change photos, price, description, and other details.'
      },
      {
        q: 'Is my information safe?',
        a: 'We use industry-standard encryption to protect your data. Your phone number and email are never shared without your permission.'
      },
      {
        q: 'How do I report inappropriate content?',
        a: 'Tap the listing, scroll to the bottom, and tap "Report". Select the reason and submit. We review all reports within 24h.'
      },
      {
        q: 'How do I block a user?',
        a: 'Tap their profile > Block User. They won\'t be able to see your listings or contact you. Manage blocked users in Settings.'
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept mobile money (EcoCash, OneMoney), bank transfers, and card payments. All payments are secure and verified.'
      },
      {
        q: 'How do I delete my account?',
        a: 'Go to Settings > Security > Delete Account. Your account and all listings will be permanently removed after 30 days.'
      }
    ];

    return `<div class="page active">
      ${H.innerTopbar('FAQs')}
      <div class="faq-list">
        ${faqs.map((item, idx) => `
          <div class="faq-item" id="faq-${idx}">
            <button class="faq-question" onclick="H._faqs.toggleFaq(${idx})">
              <span>${H.escHtml(item.q)}</span>
              <span class="faq-toggle">${S.chevronDown}</span>
            </button>
            <div class="faq-answer">
              <div class="faq-text">${H.escHtml(item.a)}</div>
            </div>
          </div>
        `).join('')}
      </div>
      <div style="height:20px"></div>
    </div>`;
  };

  pages.FAQs_after = function () {
    H._faqs = {
      toggleFaq: (idx) => {
        const item = document.getElementById('faq-' + idx);
        if (!item) return;
        item.classList.toggle('open');
      }
    };
  };

  // --- Contact Support --------------------------------------
  pages.ContactSupport = function () {
    return `<div class="page active">
      ${H.innerTopbar('Contact Support')}
      <div class="form-wrap">

        <a href="mailto:chakusaprince@gmail.com" style="display:flex;align-items:center;gap:14px;background:var(--card);border:1.5px solid var(--border);border-radius:14px;padding:16px;margin-bottom:12px;text-decoration:none;-webkit-tap-highlight-color:transparent">
          <div style="width:42px;height:42px;border-radius:12px;background:#EFF6FF;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#1A3A8F">${S.mail}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:12px;color:var(--sub);font-weight:500;margin-bottom:2px">Email Support</div>
            <div style="font-size:14px;font-weight:700;color:#1A3A8F">chakusaprince@gmail.com</div>
          </div>
          <div style="color:var(--sub)">${S.chevron}</div>
        </a>

        <a href="tel:+971589772645" style="display:flex;align-items:center;gap:14px;background:var(--card);border:1.5px solid var(--border);border-radius:14px;padding:16px;margin-bottom:12px;text-decoration:none;-webkit-tap-highlight-color:transparent">
          <div style="width:42px;height:42px;border-radius:12px;background:#F0FDF4;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#16a34a">${S.phone}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:12px;color:var(--sub);font-weight:500;margin-bottom:2px">Call / WhatsApp</div>
            <div style="font-size:14px;font-weight:700;color:#16a34a">+971 589 772 645</div>
          </div>
          <div style="color:var(--sub)">${S.chevron}</div>
        </a>

        <a href="https://wa.me/971589772645" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:14px;background:var(--card);border:1.5px solid var(--border);border-radius:14px;padding:16px;margin-bottom:20px;text-decoration:none;-webkit-tap-highlight-color:transparent">
          <div style="width:42px;height:42px;border-radius:12px;background:#F0FDF4;display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:12px;color:var(--sub);font-weight:500;margin-bottom:2px">WhatsApp</div>
            <div style="font-size:14px;font-weight:700;color:#25D366">Chat on WhatsApp</div>
          </div>
          <div style="color:var(--sub)">${S.chevron}</div>
        </a>

      </div>
    </div>`;
  };

  // --- Support Bot (Report a Problem) ----------------------
  pages.ReportProblem = function () {
    return `<div class="page active" style="display:flex;flex-direction:column;overflow:hidden;height:100%">
      ${H.innerTopbar('Support Chat')}
      <div id="botChat" style="flex:1;overflow-y:auto;padding:14px 14px 6px;display:flex;flex-direction:column;gap:12px;min-height:0"></div>
      <div id="botChips" style="padding:8px 14px 4px;min-height:46px;display:flex;flex-wrap:wrap;gap:6px;align-items:center;background:var(--bg);border-top:1px solid var(--border)"></div>
      <div style="padding:8px 14px 20px;background:var(--bg);display:flex;gap:8px;align-items:center">
        <input id="botInput" class="fi" style="flex:1;margin:0;font-size:14px" placeholder="Type your question..." onkeydown="if(event.key==='Enter')H._bot.send()">
        <button onclick="H._bot.send()" style="background:#1A3A8F;color:#fff;border:none;border-radius:10px;padding:10px 18px;font-size:14px;font-weight:600;cursor:pointer;flex-shrink:0">Send</button>
      </div>
    </div>`;
  };

  pages.ReportProblem_after = function () {
    /* ── inject animation styles once ── */
    if (!document.getElementById('bot-css')) {
      var st = document.createElement('style');
      st.id = 'bot-css';
      st.textContent =
        '@keyframes botIn{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:translateY(0)}}' +
        '@keyframes dotP{0%,80%,100%{transform:scale(.45);opacity:.3}40%{transform:scale(1);opacity:1}}' +
        '.bot-bbl{animation:botIn .22s ease}' +
        '.bot-dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:#9ca3af;margin:0 2px;animation:dotP 1.3s ease-in-out infinite}' +
        '.bot-dot:nth-child(2){animation-delay:.22s}.bot-dot:nth-child(3){animation-delay:.44s}' +
        '.bot-chip:hover{background:#1A3A8F!important;color:#fff!important;border-color:#1A3A8F!important}';
      document.head.appendChild(st);
    }

    var HKEY = 'pm_bot_h2';
    var WA   = 'https://wa.me/971589772645';
    var ML   = 'mailto:chakusaprince@gmail.com';
    var PH   = 'tel:+971589772645';
    var WASVG= '<svg viewBox="0 0 24 24" width="17" height="17" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>';

    /* ── knowledge base — 26 topics ── */
    var KB = [
      {
        tags:['sign in','login','log in','signin','forgot password','reset password','locked out','wrong password','account access','cant sign','cannot sign','email not found','not signing'],
        answer:'To sign in, tap "Sign In" on the home screen and enter your email and password.\n\nForgot your password?\n• Tap "Forgot Password" below the sign-in form\n• Check your inbox AND spam folder for the reset link\n\nIf your email isn\'t recognised, you may have registered with a different address.',
        chips:['Change Password','Delete Account','Contact Support']
      },
      {
        tags:['post','create listing','add listing','sell','post ad','how to post','new listing','list item','publish listing','upload item','add item'],
        answer:'To post a listing:\n1. Tap the blue ✚ Post button at the bottom of the screen\n2. Choose the right category (Electronics, Jobs, Rentals, etc.)\n3. Add 3–5 clear photos, a descriptive title, honest description, and price\n4. Set your location and tap Publish\n\nListings are reviewed and go live within minutes. Clear photos and honest descriptions get up to 3× more responses!',
        chips:['Edit a Listing','Boost a Listing','Mark as Sold']
      },
      {
        tags:['verify','verification','id','identity','badge','blue badge','verified seller','document','selfie','id document','get verified'],
        answer:'To earn your verified ✓ badge:\n1. Go to Profile (bottom nav)\n2. Tap "Verify Identity"\n3. Upload a clear photo of your national ID or passport\n4. Take a selfie — your face must match the ID\n5. Submit and wait up to 24 hours\n\nVerified sellers rank higher in search results and buyers trust them significantly more.',
        chips:['Edit Profile','Post a Listing','Contact Support']
      },
      {
        tags:['boost','promote','advertise','spotlight','feature','credits','ad credit','visibility','top of results','top listing','sponsored'],
        answer:'Boost puts your listing at the very top of search results and category pages!\n\nHow to boost:\n1. Open any of your active listings\n2. Tap "Boost Listing"\n3. Choose a package (duration/reach)\n4. Pay via EcoCash, OneMoney, or bank transfer\n\nNote: Credits are non-refundable once applied to a listing. Unused credits can be refunded within 7 days — contact us to request this.',
        chips:['Payment Methods','Post a Listing','Contact Support']
      },
      {
        tags:['message','chat','messaging','inbox','not receiving','send message','conversation','message seller','not syncing','not delivered','no reply','messages disappear'],
        answer:'Troubleshooting messages:\n\n• Make sure you\'re signed in\n• Check your internet connection\n• Close the app fully and reopen it — messages sync on reload\n• Wait 10–15 seconds after sending for delivery\n\nTo start a new chat:\n→ Open any listing → tap "Message Seller"\n\nIf the other person can\'t see your message, ask them to close and reopen the app.',
        chips:['Notification Issue','Block a User','Contact Support']
      },
      {
        tags:['scam','fraud','fake','suspicious','stolen','illegal','inappropriate','cheat','deceive','fake listing','advance fee','deposit scam','fake job','fake rental'],
        answer:'To report a scam or suspicious listing:\n1. Open the listing or user profile\n2. Tap the ⋯ menu → tap "Report"\n3. Select "Fraud / Scam" and describe what happened\n4. Submit — we review within 24 hours\n\n🛡 Safety rules:\n• NEVER pay any deposit before physically viewing an item\n• NEVER share your OTP, PIN, or bank password\n• Meet in a safe, busy public place\n• If it feels wrong, walk away immediately',
        chips:['Block a User','Report a User','Contact Support']
      },
      {
        tags:['report user','bad user','bad seller','bad buyer','harass','abusive','threatening','rude'],
        answer:'To report a user:\n1. Tap their name or profile picture to open their profile\n2. Scroll to the bottom\n3. Tap "Report User"\n4. Select the reason (Harassment, Fraud, Spam, etc.) and submit\n\nTo block them immediately:\n• On their profile, tap "Block User"\n• They can no longer message you, see your phone number, or view your listings\n• Manage all blocked users in Settings',
        chips:['Report a Scam','Contact Support','Ask Another Question']
      },
      {
        tags:['payment','pay','ecocash','onemoney','bank transfer','mobile money','zipit','rtgs','how to pay','transaction'],
        answer:'PaMarket uses direct peer-to-peer payments between buyers and sellers.\n\nAccepted methods:\n• EcoCash — send to seller\'s registered number\n• OneMoney — same process\n• Bank transfer (ZIPIT / RTGS)\n• Cash on delivery (meet in person)\n\n⚠️ PaMarket does NOT hold or process payments. Deal directly with sellers. Always inspect items before paying — never pay sight-unseen.',
        chips:['Boost a Listing','Report a Scam','Ask Another Question']
      },
      {
        tags:['job','apply','application','vacancy','hire','employer','employee','applied','apply for job','job not showing','job listing'],
        answer:'To apply for a job:\n1. Open the job listing\n2. Tap "Apply Now"\n3. Fill in your name, phone, email, and a short cover message\n4. Submit — the employer receives your application and contacts you directly\n\nFor employers:\n• Post in the "Jobs" category\n• Tap "Mark as Filled" once the position is taken\n\nTip: Complete your profile and upload your CV for one-tap applications!',
        chips:['Upload My CV','Post a Listing','Contact Support']
      },
      {
        tags:['cv','resume','upload cv','build cv','my cv','curriculum','work experience','open to work','job seeker'],
        answer:'To build and upload your CV:\n1. Go to Profile (bottom nav)\n2. Tap "Edit Profile"\n3. Scroll to the CV / Work Experience section\n4. Add your job history, skills, education, and sector\n5. Toggle "Open to Work" ON so employers can find you\n\nYour CV is shared automatically when you apply for any job listing.',
        chips:['Apply for a Job','Get Verified','Ask Another Question']
      },
      {
        tags:['delete account','remove account','close account','deactivate','leave pamarket','cancel account','erase account'],
        answer:'To permanently delete your account:\n1. Go to Settings (tap your profile icon → Settings)\n2. Scroll down to the Security section\n3. Tap "Delete Account"\n4. Enter your password to confirm\n\n⚠️ This cannot be undone. All your listings, messages, CV, and personal data are permanently deleted within 30 days.',
        chips:['Sign In Issue','Contact Support','Ask Another Question']
      },
      {
        tags:['crash','not loading','slow','freeze','stuck','error','blank screen','app not working','force close','bug','broken','won\'t open','not opening','keeps crashing','white screen'],
        answer:'Step-by-step fix for app issues:\n\n1. Close the app fully and reopen it\n2. Check your internet (try switching between WiFi and mobile data)\n3. Restart your phone\n4. Clear the app cache:\n   Android: Settings → Apps → PaMarket → Storage → Clear Cache\n   iPhone: Offload the app in Settings → General → iPhone Storage\n5. Uninstall and reinstall the latest version\n\nStill broken? Tell us your phone model and exactly what happens — we\'ll fix it quickly!',
        chips:['Contact Support','Ask Another Question']
      },
      {
        tags:['edit','update listing','change price','modify listing','update ad','change description','change photo','edit my listing'],
        answer:'To edit a listing:\n1. Tap the Profile icon (bottom nav) → My Listings\n2. Tap the listing you want to change\n3. Tap "Edit"\n4. Update the title, price, photos, description, or location\n5. Tap Save — changes appear live within seconds',
        chips:['Mark as Sold','Boost a Listing','Delete a Listing']
      },
      {
        tags:['delete listing','remove listing','take down','delete ad','remove ad'],
        answer:'To delete a listing:\n1. Go to My Listings (Profile icon)\n2. Tap the listing\n3. Tap "Delete" (or the trash icon)\n4. Confirm deletion\n\nThe listing is permanently removed from the marketplace.\n\nIf you just sold the item, use "Mark as Sold" instead — it hides the listing while keeping your record.',
        chips:['Post a Listing','Edit a Listing','Ask Another Question']
      },
      {
        tags:['sold','mark sold','mark filled','filled','listing sold','close listing','item sold','job filled','position filled'],
        answer:'To mark a listing as sold or filled:\n1. Go to My Listings\n2. Tap the listing\n3. Tap "Mark as Sold" (items / rentals) or "Mark as Filled" (job vacancies)\n\nThe listing is hidden from public search but kept in your account records. Tap "Delete" if you want it fully removed.',
        chips:['Post a Listing','Edit a Listing','Ask Another Question']
      },
      {
        tags:['notification','alert','push notification','not getting notification','no notification','enable notification','not notified'],
        answer:'To fix notifications:\n\nAndroid:\n  Settings → Apps → PaMarket → Notifications → Turn ON\n\niPhone:\n  Settings → PaMarket → Notifications → Allow Notifications\n\nAlso make sure you\'re signed in — notifications only work when logged in.\n\nYou\'ll receive alerts for: new messages, job applications on your listings, listing status changes, and admin updates.',
        chips:['Messages Issue','Contact Support','Ask Another Question']
      },
      {
        tags:['block','block user','blocked','unwanted messages','spam user'],
        answer:'To block a user:\n1. Tap their name or profile photo to open their profile\n2. Scroll to the bottom of their profile\n3. Tap "Block User"\n\nBlocked users cannot message you, call you, or see your contact details. You can view and manage all blocked users in Settings.',
        chips:['Report a User','Messages Issue','Ask Another Question']
      },
      {
        tags:['free','cost','price','fee','how much','charges','paid feature','subscription','pricing'],
        answer:'PaMarket is 100% free for buyers and sellers!\n\nAlways free:\n✓ Post unlimited listings\n✓ Message any seller or buyer\n✓ Apply for jobs\n✓ Browse all categories\n✓ Create your profile and CV\n✓ Get verified\n\nOptional paid upgrades:\n• Boost — pushes your listing to the top of search results\n• Spotlight Ad — featured placement on the home page\n\nNo subscription. No hidden fees. No commission on sales.',
        chips:['Boost a Listing','Post a Listing','Ask Another Question']
      },
      {
        tags:['profile','update profile','edit profile','change name','change photo','profile picture','bio','city','avatar'],
        answer:'To update your profile:\n1. Tap the Profile icon at the bottom\n2. Tap "Edit Profile"\n3. Change your name, profile photo, bio, city, phone number, or skills\n4. Tap Save\n\nA complete profile with a clear, friendly photo gets 3× more responses from buyers and employers.',
        chips:['Get Verified','Upload My CV','Ask Another Question']
      },
      {
        tags:['rental','rent','house','room','property','accommodation','commercial space','apartment','flat','lodge','bedsit'],
        answer:'To find a rental:\n• Select "Rentals" on the home screen or search by city\n• Filter by price range and province\n• Tap any listing to see full details and contact the landlord directly\n\nTo post a rental:\n• Tap ✚ Post → choose "Rentals"\n• Add real photos of the actual property, monthly rent, and exact location\n\n⚠️ NEVER pay a deposit before physically viewing a property.',
        chips:['Post a Listing','Report a Scam','Payment Methods']
      },
      {
        tags:['category','what can i sell','electronics','cars','vehicles','furniture','clothes','services','animals','farm','what can be sold'],
        answer:'PaMarket supports all legal categories:\n\n🛒 Buy & Sell\n   Electronics · Clothing · Furniture · Vehicles · Appliances · Farming equipment\n\n💼 Jobs\n   All sectors · Full-time · Part-time · Freelance · Domestic\n\n🏠 Rentals\n   Houses · Rooms · Commercial spaces · Farmland\n\n🔧 Services\n   Plumbing · Construction · Cleaning · Delivery · Tutoring\n\nAlways choose the most specific category — it gets your listing found faster.',
        chips:['Post a Listing','Get Verified','Ask Another Question']
      },
      {
        tags:['photo','image upload','add photo','photo not uploading','picture not loading','image not showing','photo failed'],
        answer:'Tips for uploading photos:\n• Use JPG or PNG files under 5 MB each\n• Make sure your internet connection is stable when uploading\n• Try a different photo if one specific image keeps failing\n• Clear app cache if photos won\'t display (Settings → Apps → PaMarket → Clear Cache)\n\nYou can add up to 5 photos per listing. The FIRST photo becomes your thumbnail — make it the best, clearest shot!',
        chips:['Post a Listing','Edit a Listing','Contact Support']
      },
      {
        tags:['renew','expired listing','30 days','listing expired','listing removed','disappeared','no longer showing','listing gone'],
        answer:'Listings stay active for 30 days, then automatically archive.\n\nTo renew an expired listing:\n1. Go to My Listings\n2. Find the expired listing (marked "Expired")\n3. Tap "Renew"\n\nThis re-publishes it free for another 30 days.\n\nIf your listing disappeared before 30 days, it may have been reported and removed. Check your notification inbox or contact us for details.',
        chips:['Edit a Listing','Boost a Listing','Contact Support']
      },
      {
        tags:['search','find listing','browse','can\'t find','not showing up','listing not found','search not working','search results'],
        answer:'How to find listings:\n• Use the search bar at the top — try specific keywords like "iPhone 13 Harare" or "2 bedroom Bulawayo"\n• Browse by category on the home screen\n• Filter by province, price range, or category\n\nIf YOUR listing isn\'t showing in search:\n• It may still be under review (allow a few minutes after posting)\n• Check it hasn\'t expired (30-day limit)\n• Try searching for the exact title you used',
        chips:['Post a Listing','Renew a Listing','Contact Support']
      },
      {
        tags:['banned','suspended','account suspended','account banned','why banned','appeal ban','unban','account disabled'],
        answer:'If your account has been suspended:\n\n1. Check your registered email — we send a notification explaining the reason\n2. Common reasons: policy violation, reported content, suspicious login activity\n\nTo appeal:\n• Email chakusaprince@gmail.com with:\n  — Your account email address\n  — Why you believe the suspension was an error\n  — Any supporting evidence\n• We review all appeals within 7 days\n\n⚠️ Creating a second account to bypass a ban results in permanent removal.',
        chips:['Contact Support','Ask Another Question']
      },
      {
        tags:['change phone','phone number','update phone','new number','change number'],
        answer:'To update your phone number:\n1. Go to Profile (bottom nav)\n2. Tap "Edit Profile"\n3. Update your phone number field\n4. Save changes\n\nYour phone number is visible to other users when they view your listings — make sure it\'s a number you actively use.',
        chips:['Edit Profile','Get Verified','Ask Another Question']
      },
    ];

    var chat     = document.getElementById('botChat');
    var chipsEl  = document.getElementById('botChips');
    var input    = document.getElementById('botInput');
    var history  = [];
    var msgCount = 0;

    var INIT_CHIPS = ['Sign In Issue','Post a Listing','Get Verified','Messaging Issue','Report a Scam','Boost a Listing','Job / CV Help','App Not Working','Pricing Info','Account Banned'];
    var CHIP_MAP   = {
      'Sign In Issue':    'sign in login forgot password',
      'Post a Listing':   'post create listing sell publish',
      'Get Verified':     'verify verification badge identity',
      'Messaging Issue':  'message chat not working inbox',
      'Report a Scam':    'scam fraud fake suspicious',
      'Boost a Listing':  'boost promote advertise credits',
      'Job / CV Help':    'job apply cv resume vacancy',
      'App Not Working':  'crash not loading freeze error bug',
      'Pricing Info':     'free cost price fee subscription',
      'Account Banned':   'banned suspended appeal account',
      'Edit a Listing':   'edit update listing change price',
      'Delete a Listing': 'delete remove listing',
      'Mark as Sold':     'sold filled close listing',
      'Upload My CV':     'cv resume upload build',
      'Apply for a Job':  'job apply application vacancy',
      'Payment Methods':  'payment pay ecocash onemoney bank transfer',
      'Block a User':     'block user blocked harass',
      'Report a User':    'report user bad seller harass',
      'Notification Issue':'notification alert push not getting',
      'Edit Profile':     'profile photo bio city update',
      'Renew a Listing':  'renew expired listing 30 days',
      'Change Password':  'sign in forgot password reset',
    };

    function timeStr() {
      return new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
    }

    function nl2br(s) {
      return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');
    }

    function scrollDown() {
      setTimeout(function(){ if (chat) chat.scrollTop = chat.scrollHeight; }, 70);
    }

    function saveHistory() {
      try { localStorage.setItem(HKEY, JSON.stringify(history.slice(-60))); } catch(e) {}
    }

    function loadHistory() {
      try { var s = localStorage.getItem(HKEY); return s ? JSON.parse(s) : null; } catch(e) { return null; }
    }

    function avatar() {
      var d = document.createElement('div');
      d.style.cssText = 'width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#1A3A8F,#2952cc);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;color:#fff;flex-shrink:0;box-shadow:0 1px 4px rgba(26,58,143,.3)';
      d.textContent = 'P';
      return d;
    }

    function addMsg(text, isUser, restored) {
      if (!restored) { history.push({t:text, u:isUser, ts:timeStr()}); saveHistory(); }

      var row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:flex-end;gap:8px;' + (isUser ? 'justify-content:flex-end' : 'justify-content:flex-start');

      if (!isUser) row.appendChild(avatar());

      var col = document.createElement('div');
      col.style.cssText = 'display:flex;flex-direction:column;align-items:' + (isUser ? 'flex-end' : 'flex-start') + ';max-width:80%;gap:3px';

      var bbl = document.createElement('div');
      if (!restored) bbl.className = 'bot-bbl';
      bbl.style.cssText = 'padding:10px 14px;border-radius:' + (isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px') + ';font-size:14px;line-height:1.55;word-break:break-word;' + (isUser ? 'background:#1A3A8F;color:#fff' : 'background:var(--card);color:var(--text);border:1.5px solid var(--border)');
      bbl.innerHTML = nl2br(text);
      col.appendChild(bbl);

      var ts = document.createElement('div');
      ts.style.cssText = 'font-size:10px;color:var(--sub);padding:0 4px';
      ts.textContent = restored && restored.ts ? restored.ts : timeStr();
      col.appendChild(ts);

      if (!isUser && !restored) {
        var fb = document.createElement('div');
        fb.style.cssText = 'display:flex;gap:6px;padding:0 2px;margin-top:1px';
        fb.innerHTML =
          '<button onclick="H._bot.helpful(this)" style="background:none;border:1.5px solid var(--border);border-radius:20px;padding:3px 10px;font-size:11px;font-weight:600;color:var(--sub);cursor:pointer">👍 Helpful</button>' +
          '<button onclick="H._bot.notHelpful(this)" style="background:none;border:1.5px solid var(--border);border-radius:20px;padding:3px 10px;font-size:11px;font-weight:600;color:var(--sub);cursor:pointer">👎 Not quite</button>';
        col.appendChild(fb);
      }

      row.appendChild(col);
      chat.appendChild(row);
      scrollDown();
    }

    function showTyping() {
      hideTyping();
      var row = document.createElement('div');
      row.id = 'bot-typing';
      row.style.cssText = 'display:flex;align-items:flex-end;gap:8px';
      row.appendChild(avatar());
      var bbl = document.createElement('div');
      bbl.style.cssText = 'background:var(--card);border:1.5px solid var(--border);border-radius:18px 18px 18px 4px;padding:12px 16px';
      bbl.innerHTML = '<span class="bot-dot"></span><span class="bot-dot"></span><span class="bot-dot"></span>';
      row.appendChild(bbl);
      chat.appendChild(row);
      scrollDown();
    }

    function hideTyping() {
      var el = document.getElementById('bot-typing');
      if (el) el.remove();
    }

    function addContactCard() {
      var row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:flex-end;gap:8px';
      row.appendChild(avatar());
      var card = document.createElement('div');
      card.style.cssText = 'display:flex;flex-direction:column;gap:8px;max-width:86%';
      card.innerHTML =
        '<div style="font-size:12px;color:var(--sub);padding:0 2px">Reach our team directly:</div>' +
        '<a href="'+WA+'" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:10px;background:#F0FDF4;border:1.5px solid #bbf7d0;border-radius:14px;padding:11px 14px;text-decoration:none">'+WASVG+'<div><div style="font-size:13px;font-weight:700;color:#16a34a">WhatsApp Chat</div><div style="font-size:11px;color:var(--sub)">+971 589 772 645 · Fastest reply</div></div></a>' +
        '<a href="'+ML+'" style="display:flex;align-items:center;gap:10px;background:#EFF6FF;border:1.5px solid #bfdbfe;border-radius:14px;padding:11px 14px;text-decoration:none"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#1A3A8F" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><div><div style="font-size:13px;font-weight:700;color:#1A3A8F">Email Support</div><div style="font-size:11px;color:var(--sub)">chakusaprince@gmail.com</div></div></a>' +
        '<a href="'+PH+'" style="display:flex;align-items:center;gap:10px;background:#F0FDF4;border:1.5px solid #bbf7d0;border-radius:14px;padding:11px 14px;text-decoration:none"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#16a34a" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 2.1.74 3.26a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.16.38 2.3.61 3.26.74a2 2 0 0 1 1.72 2.03z"/></svg><div><div style="font-size:13px;font-weight:700;color:#16a34a">Call Us</div><div style="font-size:11px;color:var(--sub)">+971 589 772 645</div></div></a>';
      row.appendChild(card);
      chat.appendChild(row);
      scrollDown();
    }

    function showChips(list) {
      if (!chipsEl) return;
      chipsEl.innerHTML = '';
      list.forEach(function(label) {
        var btn = document.createElement('button');
        btn.className = 'bot-chip';
        btn.style.cssText = 'background:var(--card);border:1.5px solid var(--border);border-radius:20px;padding:6px 13px;font-size:12px;font-weight:600;color:var(--text);cursor:pointer;white-space:nowrap;transition:background .15s,color .15s,border-color .15s';
        btn.textContent = label;
        btn.onclick = function(){ handleInput(label); };
        chipsEl.appendChild(btn);
      });
    }

    function bestMatch(text) {
      var lower = text.toLowerCase();
      var best = null, top = 0;
      KB.forEach(function(entry) {
        var hits = 0;
        entry.tags.forEach(function(tag){ if (lower.indexOf(tag) !== -1) hits++; });
        if (hits > top) { top = hits; best = entry; }
      });
      return top > 0 ? best : null;
    }

    function respond(query) {
      hideTyping();
      var match = bestMatch(query);
      if (match) {
        addMsg(match.answer, false);
        showChips((match.chips || []).concat(['Ask Another Question']));
      } else {
        addMsg("I couldn't find a specific answer for that. Let me connect you with our support team directly:", false);
        addContactCard();
        showChips(['Ask Another Question']);
      }
    }

    function handleInput(text) {
      if (!text || !text.trim()) return;
      if (input) input.value = '';

      if (text === 'Ask Another Question') {
        addMsg(text, true);
        addMsg('Of course! What can I help you with? 😊', false);
        showChips(INIT_CHIPS);
        return;
      }
      if (text === 'Contact Support') {
        addMsg(text, true);
        addMsg('Here are all the ways to reach us:', false);
        addContactCard();
        showChips(['Ask Another Question']);
        return;
      }

      addMsg(text, true);
      var query = CHIP_MAP[text] || text;
      showTyping();
      setTimeout(function(){ respond(query); }, 680);
    }

    H._bot = {
      send: function() {
        var val = input ? input.value.trim() : '';
        if (val) handleInput(val);
      },
      helpful: function(btn) {
        if (btn.parentElement) btn.parentElement.innerHTML = '<span style="font-size:11px;color:#16a34a;font-weight:700">✓ Great, glad that helped!</span>';
        showChips(INIT_CHIPS);
      },
      notHelpful: function(btn) {
        if (btn.parentElement) btn.parentElement.innerHTML = '<span style="font-size:11px;color:var(--sub)">Let me get our team to help...</span>';
        setTimeout(function(){ addContactCard(); showChips(['Ask Another Question']); }, 350);
      }
    };

    /* ── init: restore history or show greeting ── */
    var saved = loadHistory();
    if (saved && saved.length > 0) {
      history = saved;
      saved.forEach(function(m) { addMsg(m.t, m.u, m); });
      addMsg('Welcome back! 👋 How can I help you today?', false);
      showChips(INIT_CHIPS);
    } else {
      addMsg('Hi! 👋 I\'m the PaMarket Support Bot.\n\nI can answer your questions instantly — 26 topics covered. Tap a topic below or type anything.', false);
      showChips(INIT_CHIPS);
    }
  };

  // --- Terms & Conditions ----------------------------------
  pages.HelpTerms = function () {
    return `<div class="page active">
      ${H.innerTopbar('Terms of Service')}
      <div class="doc-content">
        <div class="doc-section">
          <h2>Terms of Service</h2>
          <p style="color:var(--ash);font-size:12px">Last updated: May 2026 · Effective immediately</p>

          <h2>1. Agreement to Terms</h2>
          <p>By downloading, installing, or using the PaMarket application ("App"), you agree to be legally bound by these Terms of Service. If you do not agree to these terms, you must not use the App. These terms govern all users: buyers, sellers, job seekers, employers, and visitors.</p>

          <h2>2. Who Can Use PaMarket</h2>
          <p>You must be at least 18 years old to create an account or use PaMarket. By registering, you confirm that you meet this age requirement and are legally competent to enter into contracts under Zimbabwean law. We reserve the right to terminate accounts where the minimum age requirement is not met.</p>

          <h2>3. Account Responsibility</h2>
          <p>You are responsible for keeping your account credentials confidential. All activity that occurs under your account is your responsibility. You must provide accurate and truthful information when registering. If you suspect unauthorized access to your account, contact us immediately at chakusaprince@gmail.com or WhatsApp +971 589 772 645.</p>

          <h2>4. What PaMarket Is</h2>
          <p>PaMarket is an online classifieds marketplace that connects buyers and sellers in Zimbabwe. We provide the platform — we are not a party to any transaction between users. We do not hold payments, guarantee delivery, or verify the condition of items unless stated. All transactions are conducted directly between users at their own risk.</p>

          <h2>5. Listing Rules</h2>
          <p>All listings must be honest, legal, and comply with Zimbabwean law. You must own or have explicit authority to sell any item listed. The following content is strictly prohibited and will result in immediate removal and account termination:</p>
          <ul>
            <li>Stolen, counterfeit, or fraudulent goods of any kind</li>
            <li>Weapons, firearms, ammunition, or explosive devices</li>
            <li>Illegal drugs, controlled substances, or drug paraphernalia</li>
            <li>Adult, sexually explicit, or pornographic content</li>
            <li>Protected wildlife, animal products, or endangered species</li>
            <li>Pyramid schemes, multi-level marketing, or investment fraud</li>
            <li>Fake, misleading, or non-existent job listings</li>
            <li>Fraudulent rental listings or advance deposit scams</li>
            <li>Human trafficking, exploitation, or domestic workers without consent</li>
          </ul>

          <h2>6. Advertising Credits (Boost Feature)</h2>
          <p>PaMarket offers optional paid advertising credits ("Boost") to increase the visibility of your listings. These credits are purchased as a business service via external payment methods (EcoCash, OneMoney, or bank transfer). Advertising credits are not processed by Google Play or the Apple App Store. Credits are non-refundable once applied to a listing. Unused credits may be refunded at our discretion within 7 days of purchase — contact us to request a refund.</p>

          <h2>7. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Harass, threaten, abuse, or discriminate against other users</li>
            <li>Post false, misleading, or deceptive information or images</li>
            <li>Send unsolicited messages (spam) to other users</li>
            <li>Attempt to circumvent our moderation, security, or verification systems</li>
            <li>Create multiple accounts to evade a suspension or ban</li>
            <li>Impersonate another person, business, or official entity</li>
            <li>Use automated tools to scrape or access the platform</li>
          </ul>

          <h2>8. User Content License</h2>
          <p>By posting photos, text, or any content on PaMarket, you grant us a non-exclusive, worldwide, royalty-free license to display, reproduce, and distribute that content within the App and for promotional purposes. You confirm that you own or have the rights to all content you post and that it does not infringe any third-party rights.</p>

          <h2>9. Intellectual Property</h2>
          <p>All design, branding, logos, code, and content created by PaMarket are protected by copyright and intellectual property law. You may not copy, reproduce, reverse-engineer, or redistribute any part of the App without our written consent.</p>

          <h2>10. Moderation and Enforcement</h2>
          <p>We reserve the right to remove any listing, suspend, or permanently ban any account that violates these Terms at any time, with or without notice. Serious violations including fraud, scams, or illegal activity may be reported to relevant Zimbabwean authorities. Banned users may appeal by contacting chakusaprince@gmail.com within 14 days of the ban.</p>

          <h2>11. Disclaimer of Warranties</h2>
          <p>PaMarket is provided "as is" and "as available" without any warranties, express or implied. We do not guarantee that the App will be uninterrupted, error-free, or that listings are accurate. We are not responsible for the quality, safety, legality, or availability of listed items.</p>

          <h2>12. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, PaMarket and its operators shall not be liable for any indirect, incidental, punitive, or consequential damages arising from your use of the App, including loss of money, data, or business opportunity resulting from transactions between users.</p>

          <h2>13. Governing Law</h2>
          <p>These Terms are governed exclusively by the laws of the Republic of Zimbabwe. Any legal disputes shall be subject to the jurisdiction of the courts of Zimbabwe.</p>

          <h2>14. Changes to These Terms</h2>
          <p>We may update these Terms from time to time. We will notify users of significant changes through the App. Continued use of the App after any update constitutes your acceptance of the revised Terms. You may stop using the App at any time if you disagree with the updated Terms.</p>

          <h2>15. Contact Us</h2>
          <p>For questions about these Terms, contact us at:</p>
          <ul>
            <li>Email: chakusaprince@gmail.com</li>
            <li>WhatsApp: +971 589 772 645</li>
          </ul>
        </div>
      </div>
    </div>`;
  };
pages.HelpPrivacy = function () {
    return `<div class="page active">
      ${H.innerTopbar('Privacy Policy')}
      <div class="doc-content">
        <div class="doc-section">
          <h2>Privacy Policy</h2>
          <p style="color:var(--ash);font-size:12px">Last updated: May 2026</p>

          <h2>1. Who We Are</h2>
          <p>PaMarket is a Zimbabwean marketplace application. We are committed to protecting your privacy and handling your data responsibly. This policy explains what data we collect, why we collect it, and how we protect it.</p>

          <h2>2. Data We Collect</h2>
          <ul>
            <li><strong>Account data:</strong> Name, email address, phone number, encrypted password</li>
            <li><strong>Profile data:</strong> Profile photo, bio, city/province location</li>
            <li><strong>Listing data:</strong> Photos, descriptions, prices, and location of items you post</li>
            <li><strong>Messages:</strong> In-app conversations between buyers and sellers</li>
            <li><strong>Transaction data:</strong> Advertising credit balance and top-up reference history</li>
            <li><strong>Device data:</strong> Device type, operating system version, app version</li>
            <li><strong>Usage data:</strong> Pages viewed, search queries, and listing interactions</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <ul>
            <li>To create and manage your user account</li>
            <li>To display your listings to other users across Zimbabwe</li>
            <li>To facilitate secure in-app messaging between buyers and sellers</li>
            <li>To verify advertising credit purchases and apply boosts to listings</li>
            <li>To detect, investigate, and prevent fraud and policy violations</li>
            <li>To improve the App, fix bugs, and enhance user experience</li>
            <li>To send you important notifications about your account and listings</li>
          </ul>

          <h2>4. Data We Do Not Collect</h2>
          <ul>
            <li>We do not collect your precise GPS or real-time location</li>
            <li>We do not collect payment card numbers or banking credentials</li>
            <li>We do not access your camera or photo library without your explicit action</li>
            <li>We do not collect contacts, call logs, or SMS messages</li>
          </ul>

          <h2>5. Data Sharing</h2>
          <p>We do not sell your personal data to third parties. We may share data with:</p>
          <ul>
            <li><strong>Other users:</strong> Your public profile name, phone number (if provided), and listings are visible to all users</li>
            <li><strong>Supabase:</strong> Our secure database and authentication infrastructure provider</li>
            <li><strong>Legal authorities:</strong> When required by Zimbabwean law, court order, or to protect public safety</li>
          </ul>

          <h2>6. Data Security</h2>
          <p>We implement industry-standard security: HTTPS encryption for all data in transit, encrypted password storage (never stored in plain text), row-level security on our database, and access controls. While we take all reasonable precautions, no internet system is 100% secure and we cannot guarantee absolute security of your data.</p>

          <h2>7. Camera and Photo Permissions</h2>
          <p>We request camera and photo library access only when you choose to upload a photo for a listing or your profile. The App never accesses your camera or photos passively. You may deny this permission and still use the App without photo uploads.</p>

          <h2>8. Notifications Permission</h2>
          <p>We request permission to send push notifications to alert you about new messages, listing activity, and account updates. You may disable notifications at any time in your device settings. Turning off notifications will not affect your ability to use the App.</p>

          <h2>9. Data Retention</h2>
          <p>We retain your data for as long as your account is active. When you delete your account, all personal data, listings, messages, and transaction records are permanently deleted within 30 days. Backup copies are purged within 90 days of account deletion.</p>

          <h2>10. Your Rights</h2>
          <ul>
            <li>Access and review your personal data at any time via your Profile page</li>
            <li>Correct inaccurate information through your Profile Settings</li>
            <li>Delete your account and all associated data via Settings → Delete Account</li>
            <li>Opt out of promotional notifications via Settings → Notification Preferences</li>
            <li>Request a copy of all data we hold about you by emailing chakusaprince@gmail.com</li>
          </ul>

          <h2>11. Children's Privacy</h2>
          <p>PaMarket is strictly for users aged 18 and over. We do not knowingly collect personal data from anyone under 18. If we discover that a minor has created an account, we will immediately delete their account and all associated data. If you believe a minor is using the App, please contact us.</p>

          <h2>12. Third-Party Links</h2>
          <p>Listings may include links to WhatsApp or external websites. We are not responsible for the privacy practices or content of any third-party services. We encourage you to review their privacy policies before sharing personal information.</p>

          <h2>13. Changes to This Policy</h2>
          <p>We will notify you of material changes to this Privacy Policy through the App at least 7 days before they take effect. Continued use of the App after changes constitute your acceptance of the updated policy.</p>

          <h2>14. Contact Us</h2>
          <p>For privacy concerns, data requests, or complaints, contact us at:</p>
          <ul>
            <li>Email: chakusaprince@gmail.com</li>
            <li>WhatsApp: +971 589 772 645</li>
          </ul>
        </div>
      </div>
    </div>`;
  };
pages.HelpCommunity = function () {
    return `<div class="page active">
      ${H.innerTopbar('Community Guidelines')}
      <div class="doc-content">
        <div class="doc-section">
          <h2>Community Guidelines</h2>
          <p style="color:var(--ash);font-size:12px">Last updated: May 2026</p>
          <p>PaMarket is built on trust. These guidelines exist to keep our marketplace safe, fair, and beneficial for every Zimbabwean. Violations result in warnings, listing removal, suspension, or permanent bans.</p>

          <h2>1. Be Honest</h2>
          <p>Accuracy is everything in a marketplace. You must:</p>
          <ul>
            <li>Post accurate titles, descriptions, and photos of your actual item</li>
            <li>Disclose any defects, damage, or issues with items</li>
            <li>Only post items you genuinely have available for sale</li>
            <li>Set fair prices and honor agreed prices</li>
            <li>Never use misleading photos or stolen images</li>
          </ul>

          <h2>2. Be Safe</h2>
          <ul>
            <li>Meet buyers and sellers in safe, public locations</li>
            <li>Never send money before inspecting an item in person</li>
            <li>Be cautious of buyers who pressure you to accept unusual payment methods</li>
            <li>Never share your OTP, PIN, or banking passwords with anyone</li>
            <li>Trust your instincts — if something feels wrong, walk away</li>
          </ul>

          <h2>3. Be Respectful</h2>
          <ul>
            <li>Treat all users with dignity and respect</li>
            <li>No harassment, threats, bullying, or abusive language</li>
            <li>No discrimination based on race, gender, religion, tribe, or disability</li>
            <li>No unsolicited messages or spam to other users</li>
            <li>Respect others privacy — never share personal information without consent</li>
          </ul>

          <h2>4. No Fraud or Scams</h2>
          <p>Zero tolerance for fraud. The following will result in immediate permanent ban:</p>
          <ul>
            <li>Advance fee fraud ("send deposit first")</li>
            <li>Fake job listings designed to collect personal information</li>
            <li>Fake rental listings with non-existent properties</li>
            <li>Selling items you do not own or have no right to sell</li>
            <li>Creating multiple accounts to evade bans</li>
            <li>Any form of identity theft or impersonation</li>
          </ul>

          <h2>5. Prohibited Items</h2>
          <p>The following may never be listed on PaMarket:</p>
          <ul>
            <li>Stolen goods of any kind</li>
            <li>Counterfeit or fake branded products</li>
            <li>Weapons, ammunition, or explosives</li>
            <li>Illegal drugs or controlled substances</li>
            <li>Adult or sexually explicit content</li>
            <li>Protected wildlife or animal products</li>
            <li>Pyramid schemes or investment fraud</li>
            <li>Human trafficking or exploitation</li>
          </ul>

          <h2>6. Jobs & Rentals</h2>
          <p>High-risk categories require extra responsibility:</p>
          <ul>
            <li>Job listings must be genuine with real contact details</li>
            <li>Never charge job seekers an application or registration fee</li>
            <li>Rental listings must describe real, available properties</li>
            <li>Never request rental deposits before viewing a property</li>
            <li>Salary and rent amounts must be realistic and accurate</li>
          </ul>

          <h2>7. Reporting Violations</h2>
          <p>If you see something suspicious:</p>
          <ul>
            <li>Use the Report button on any listing or user profile</li>
            <li>Email us at chakusaprince@gmail.com for urgent matters</li>
            <li>All reports are reviewed within 24 hours</li>
            <li>3 or more reports on a listing triggers automatic review</li>
            <li>False reports made in bad faith will result in action against the reporter</li>
          </ul>

          <h2>8. Enforcement</h2>
          <ul>
            <li><strong>Warning:</strong> First minor violation</li>
            <li><strong>Listing removal:</strong> Content that violates guidelines</li>
            <li><strong>Temporary suspension (24-72 hours):</strong> Repeated minor violations</li>
            <li><strong>7-day suspension:</strong> Serious violations</li>
            <li><strong>Permanent ban:</strong> Fraud, scams, or 3+ serious violations</li>
          </ul>
          <p>Banned users may appeal by emailing chakusaprince@gmail.com with evidence. We review all appeals within 7 days.</p>

          <h2>9. Our Commitment</h2>
          <p>We are committed to making PaMarket Zimbabwe's most trusted marketplace. We review all reports, take action on violations, and continuously improve our safety systems. Together we can build a marketplace that works for everyone.</p>

          <h2>Contact Safety Team</h2>
          <p>chakusaprince@gmail.com</p>
        </div>
      </div>
    </div>`;
  };

  // --- About PaMarket -----------------------------------------
  pages.About = function () {
    const year = new Date().getFullYear();
    return `<div class="page active">
      ${H.innerTopbar('About PaMarket')}
      <div style="background:linear-gradient(135deg,#1A3A8F 0%,#2952cc 100%);padding:36px 20px 32px;text-align:center">
        <div style="width:72px;height:72px;background:rgba(255,255,255,.15);border-radius:20px;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:36px;font-weight:900;color:#fff;letter-spacing:-2px">H</div>
        <div style="font-size:26px;font-weight:900;color:#fff;letter-spacing:-0.5px">PaMarket</div>
        <div style="font-size:13px;color:rgba(255,255,255,.75);margin-top:6px">Zimbabwe's Free Marketplace</div>
        <div style="font-size:11px;color:rgba(255,255,255,.5);margin-top:10px;font-weight:600">Version 1.0.0</div>
      </div>

      <div class="doc-content" style="padding-top:20px">
        <p style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:6px">Our Mission</p>
        <p>PaMarket connects Zimbabweans to buy, sell, rent, and find jobs — for free. We believe commerce should be accessible to everyone, not just those who can afford platform fees.</p>

        <p style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:6px;margin-top:20px">What We Offer</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px">
          ${[['🛒','Buy & Sell','Post ads and find deals across Zimbabwe'],['💼','Jobs Board','Real job listings from real employers'],['🏠','Rentals','Houses, rooms, and commercial spaces'],['🔒','Safe & Trusted','Verified sellers and ID badges']].map(([icon, title, desc]) => `
          <div style="background:var(--card);border:1.5px solid var(--border);border-radius:14px;padding:14px;text-align:center">
            <div style="font-size:24px;margin-bottom:6px">${icon}</div>
            <div style="font-size:13px;font-weight:700;color:var(--text);margin-bottom:4px">${title}</div>
            <div style="font-size:11px;color:var(--sub);line-height:1.5">${desc}</div>
          </div>`).join('')}
        </div>

        <p style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:6px;margin-top:20px">Legal</p>
        <div style="background:var(--card);border:1.5px solid var(--border);border-radius:14px;overflow:hidden">
          <div onclick="H.openInner('HelpPrivacy')" style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid var(--border);cursor:pointer">
            <span style="font-size:14px;font-weight:600;color:var(--text)">Privacy Policy</span>
            <span style="color:var(--sub)">›</span>
          </div>
          <div onclick="H.openInner('HelpTerms')" style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid var(--border);cursor:pointer">
            <span style="font-size:14px;font-weight:600;color:var(--text)">Terms of Service</span>
            <span style="color:var(--sub)">›</span>
          </div>
          <div onclick="H.openInner('HelpCommunity')" style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;cursor:pointer">
            <span style="font-size:14px;font-weight:600;color:var(--text)">Community Guidelines</span>
            <span style="color:var(--sub)">›</span>
          </div>
        </div>

        <p style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:6px;margin-top:20px">Contact Us</p>
        <div style="background:var(--card);border:1.5px solid var(--border);border-radius:14px;overflow:hidden">
          <a href="mailto:chakusaprince@gmail.com" style="display:flex;align-items:center;gap:12px;padding:14px 16px;text-decoration:none;border-bottom:1px solid var(--border)">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1A3A8F" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span style="font-size:13px;font-weight:600;color:#1A3A8F">chakusaprince@gmail.com</span>
          </a>
          <a href="https://wa.me/971589772645" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:12px;padding:14px 16px;text-decoration:none">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
            <span style="font-size:13px;font-weight:600;color:#25D366">WhatsApp: +971 589 772 645</span>
          </a>
        </div>

        <div style="text-align:center;padding:28px 0 0;font-size:12px;color:var(--sub)">
          © ${year} PaMarket · Made in Zimbabwe 🇿🇼
        </div>
      </div>
    </div>`;
  };

})(window.H = window.H || {});

H.pages.LegalHub = function() {
  var sections = [
    { title: 'Terms', items: ['Terms of Use','Acceptable Use Policy','Seller Terms','Buyer Protection','Boost Terms'] },
    { title: 'Privacy', items: ['Privacy Policy','Cookie Policy','Data Deletion','GDPR Compliance'] },
    { title: 'Platform Policies', items: ['Community Guidelines','Prohibited Items','Anti-Fraud Policy','Dispute Resolution'] }
  ];
  var emailLink = 'mailto:chakusaprince@gmail.com';
  var waLink = 'https://wa.me/971589772645';
  var html = '<div class="page active">' + H.innerTopbar('Legal Hub');
  html += '<div class="legal-hero"><div class="legal-hero-title">Welcome to<br><strong>PaMarket Legal Hub</strong></div><div class="legal-hero-sub">Legal information for PaMarket products and services</div></div>';
  sections.forEach(function(sec) {
    html += '<div class="legal-section-title">' + sec.title + '</div><div class="legal-list">';
    sec.items.forEach(function(item) { html += '<div class="legal-item"><div class="legal-item-title">' + item + '</div><div class="legal-item-arrow">&rsaquo;</div></div>'; });
    html += '</div>';
  });
  html += '<div class="legal-contact"><div class="legal-contact-title">Need to contact us?</div>';
  html += '<div class="legal-contact-body">Email: <span onclick="window.open(emailLink)" style="color:#1A3A8F;font-weight:600;cursor:pointer">chakusaprince@gmail.com</span></div>';
  html += '<div class="legal-contact-body" style="margin-top:6px">WhatsApp: <span onclick="window.open(waLink)" style="color:#25D366;font-weight:600;cursor:pointer">+971 589 772 645</span></div>';
  html += '</div>';
  html += '<div class="legal-footer"><div class="legal-footer-links">';
  ['About Us','Advertise','Terms of Use','Privacy Policy'].forEach(function(l) { html += '<span class="legal-footer-link" onclick="H.openInner(\x27About\x27)">' + l + '</span>'; });
  html += '</div><div class="legal-footer-copy">PaMarket &copy; 2026 &middot; Zimbabwe\'s #1 Free Marketplace</div></div>';
  html += '</div></div>';
  return html;
};