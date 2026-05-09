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
        <div class="contact-methods">
          <div class="contact-method">
            <div class="contact-icon">${S.mail}</div>
            <div class="contact-label">Email</div>
            <div class="contact-value">support@hostly.co.zw</div>
          </div>

          <div class="contact-method">
            <div class="contact-icon">${S.message}</div>
            <div class="contact-label">Live Chat</div>
            <div class="contact-value">9 AM - 5 PM (Mon-Fri)</div>
          </div>

          <div class="contact-method">
            <div class="contact-icon">${S.phone}</div>
            <div class="contact-label">Call Us</div>
            <div class="contact-value">+263 77 0000 000</div>
          </div>
        </div>

        <div class="section-title" style="margin-top:24px">Send us a message</div>
        <div class="fg">
          <div class="fl">Subject</div>
          <input class="fi" id="supportSubject" placeholder="What's your issue?">
        </div>

        <div class="fg">
          <div class="fl">Message</div>
          <textarea class="fi" rows="5" id="supportMsg" placeholder="Describe your issue in detail..."></textarea>
        </div>

        <button class="btn-pri" onclick="H._support.send()">Send Message</button>
      </div>
    </div>`;
  };

  pages.ContactSupport_after = function () {
    H._support = {
      send: () => {
        const subject = document.getElementById('supportSubject')?.value?.trim();
        const msg = document.getElementById('supportMsg')?.value?.trim();
        if (!subject || !msg) { H.toast('Please fill in all fields'); return; }
        
        H.state.supportTickets = H.state.supportTickets || [];
        H.state.supportTickets.push({
          id: H.uid(),
          userId: H.state.currentUserId,
          subject,
          message: msg,
          createdAt: Date.now(),
          status: 'open'
        });
        H.saveState();
        H.toast('Support ticket created! We\'ll respond within 24h.');
        H.goBack();
      }
    };
  };

  // --- Report Problem ---------------------------------------
  pages.ReportProblem = function () {
    return `<div class="page active">
      ${H.innerTopbar('Report a Problem')}
      <div class="form-wrap">
        <div class="fg">
          <div class="fl">Problem Type</div>
          <select class="fi" id="problemType">
            <option>-- Select --</option>
            <option>App Crash or Error</option>
            <option>Slow Performance</option>
            <option>Missing Features</option>
            <option>Payment Issues</option>
            <option>Other Technical Issue</option>
          </select>
        </div>

        <div class="fg">
          <div class="fl">Description</div>
          <textarea class="fi" rows="5" id="problemDesc" placeholder="Describe the issue and steps to reproduce..."></textarea>
        </div>

        <div class="fg">
          <div class="fl">Screenshots (optional)</div>
          <label class="img-upload-zone" for="problemScreenshot">
            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <div class="img-upload-title">Tap to add screenshot</div>
          </label>
          <input type="file" id="problemScreenshot" accept="image/*" capture style="display:none">
        </div>

        <button class="btn-pri" onclick="H._problems.report()">Report Issue</button>
      </div>
    </div>`;
  };

  pages.ReportProblem_after = function () {
    H._problems = {
      report: () => {
        const type = document.getElementById('problemType')?.value;
        const desc = document.getElementById('problemDesc')?.value?.trim();
        if (!type || type === '-- Select --' || !desc) { H.toast('Please fill in all fields'); return; }
        
        H.state.reports = H.state.reports || [];
        H.state.reports.push({
          id: H.uid(),
          reporterId: H.state.currentUserId,
          targetType: 'bug',
          problemType: type,
          description: desc,
          createdAt: Date.now(),
          status: 'open'
        });
        H.saveState();
        H.toast('Bug report submitted. Thank you for helping us improve!');
        H.goBack();
      }
    };
  };

  // --- Terms & Conditions ----------------------------------
  pages.HelpTerms = function () {
    return `<div class="page active">
      ${H.innerTopbar('Terms & Conditions')}
      <div class="doc-content">
        <div class="doc-section">
          <h2>Terms & Conditions</h2>
          <p style="color:var(--ash);font-size:12px">Last updated: May 2026 · Effective immediately</p>

          <h2>1. Acceptance</h2>
          <p>By downloading, installing, or using Hostly ("the App"), you agree to be bound by these Terms and Conditions. If you do not agree, do not use the App. These terms apply to all users including buyers, sellers, and visitors.</p>

          <h2>2. Eligibility</h2>
          <p>You must be at least 18 years old to use Hostly. By using the App you confirm that you are 18 or older and legally capable of entering into binding contracts under Zimbabwean law.</p>

          <h2>3. Account Registration</h2>
          <p>You must provide accurate, current, and complete information when creating an account. You are responsible for maintaining the confidentiality of your password and for all activity under your account. Notify us immediately at support@hostly.co.zw if you suspect unauthorized access.</p>

          <h2>4. Listing Rules</h2>
          <p>All listings must be accurate, legal, and comply with Zimbabwean law. You must own or have the right to sell any item you list. The following are strictly prohibited:</p>
          <ul>
            <li>Stolen, counterfeit, or fraudulent goods</li>
            <li>Weapons, ammunition, or explosive devices</li>
            <li>Illegal drugs or controlled substances</li>
            <li>Adult or sexually explicit content</li>
            <li>Wildlife or protected animal products</li>
            <li>Pyramid schemes, MLM, or investment fraud</li>
            <li>Fake job listings or recruitment scams</li>
            <li>Misleading rental listings or deposit scams</li>
          </ul>

          <h2>5. Transactions</h2>
          <p>Hostly is a marketplace platform. All transactions are directly between buyers and sellers. Hostly is not a party to any transaction and accepts no liability for disputes, non-delivery, fraud, or any loss arising from transactions. We strongly recommend meeting in safe public places and verifying items before payment.</p>

          <h2>6. Fees</h2>
          <p>Basic listing is free. Optional paid features including listing boosts are available. All fees are clearly displayed before purchase. All payments are final and non-refundable unless required by law.</p>

          <h2>7. Intellectual Property</h2>
          <p>All content, design, logos, and technology in Hostly are owned by Hostly and protected by copyright law. You may not copy, reproduce, or distribute any part of the App without written permission.</p>

          <h2>8. User Content</h2>
          <p>By posting content on Hostly you grant us a non-exclusive, royalty-free license to display and distribute that content within the App. You confirm that you own or have rights to all content you post.</p>

          <h2>9. Prohibited Conduct</h2>
          <ul>
            <li>Harassment, threats, or abuse of other users</li>
            <li>Posting false or misleading information</li>
            <li>Spamming or posting duplicate listings</li>
            <li>Attempting to bypass our security systems</li>
            <li>Using the App for any illegal purpose</li>
            <li>Impersonating another person or business</li>
          </ul>

          <h2>10. Moderation & Enforcement</h2>
          <p>We reserve the right to remove any listing, suspend, or permanently ban any account that violates these terms without notice. Repeated violations will result in permanent account termination and may be reported to relevant authorities.</p>

          <h2>11. Limitation of Liability</h2>
          <p>Hostly is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the App, including loss of data, money, or business opportunities.</p>

          <h2>12. Governing Law</h2>
          <p>These Terms are governed by the laws of Zimbabwe. Any disputes shall be subject to the exclusive jurisdiction of the courts of Zimbabwe.</p>

          <h2>13. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. Continued use of the App after changes constitutes acceptance of the new Terms.</p>

          <h2>14. Contact</h2>
          <p>For legal queries: legal@hostly.co.zw</p>
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
          <p>Hostly is a Zimbabwean marketplace application. We are committed to protecting your privacy and handling your data responsibly. This policy explains what data we collect, why we collect it, and how we protect it.</p>

          <h2>2. Data We Collect</h2>
          <ul>
            <li><strong>Account data:</strong> Name, email, phone number, password (encrypted)</li>
            <li><strong>Profile data:</strong> Profile photo, bio, location (city/province)</li>
            <li><strong>Listing data:</strong> Photos, descriptions, prices, location</li>
            <li><strong>Messages:</strong> Conversations between users on our platform</li>
            <li><strong>Payment data:</strong> Wallet balance and transaction history</li>
            <li><strong>Device data:</strong> Device type, OS version, app version</li>
            <li><strong>Usage data:</strong> Pages viewed, searches, listing interactions</li>
          </ul>

          <h2>3. Why We Collect It</h2>
          <ul>
            <li>To create and manage your account</li>
            <li>To display your listings to potential buyers</li>
            <li>To facilitate communication between buyers and sellers</li>
            <li>To process wallet transactions and payments</li>
            <li>To detect and prevent fraud and policy violations</li>
            <li>To improve the App and user experience</li>
            <li>To send important notifications about your account</li>
          </ul>

          <h2>4. Data Sharing</h2>
          <p>We do not sell your personal data. We may share data with:</p>
          <ul>
            <li><strong>Other users:</strong> Your public profile and listings are visible to all users</li>
            <li><strong>Supabase:</strong> Our database and authentication provider</li>
            <li><strong>Payment processors:</strong> EcoCash, OneMoney for transaction processing</li>
            <li><strong>Legal authorities:</strong> When required by Zimbabwean law or court order</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>We use industry-standard security measures including encrypted storage, secure HTTPS connections, and access controls. Your password is never stored in plain text. However no system is 100% secure and we cannot guarantee absolute security.</p>

          <h2>6. Camera & Photos</h2>
          <p>We request camera and photo library access only when you choose to upload photos for listings or your profile. We never access your camera or photos without your explicit action. Photos are compressed and stored securely.</p>

          <h2>7. Location Data</h2>
          <p>We collect your general location (city/province) for listing purposes. We do not track your precise GPS location without your permission.</p>

          <h2>8. Data Retention</h2>
          <p>We retain your data for as long as your account is active. When you delete your account all your personal data, listings, and messages are permanently deleted within 30 days.</p>

          <h2>9. Your Rights</h2>
          <ul>
            <li>Access your personal data at any time via your profile</li>
            <li>Correct inaccurate information in your profile settings</li>
            <li>Delete your account and all associated data</li>
            <li>Opt out of promotional notifications in settings</li>
            <li>Request a copy of your data by emailing privacy@hostly.co.zw</li>
          </ul>

          <h2>10. Children</h2>
          <p>Hostly is strictly for users 18 and older. We do not knowingly collect data from minors. If we discover a minor has registered we will immediately delete their account and data.</p>

          <h2>11. Changes</h2>
          <p>We will notify you of significant changes to this policy through the App. Continued use after changes constitutes acceptance.</p>

          <h2>12. Contact</h2>
          <p>Privacy concerns: privacy@hostly.co.zw</p>
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
          <p>Hostly is built on trust. These guidelines exist to keep our marketplace safe, fair, and beneficial for every Zimbabwean. Violations result in warnings, listing removal, suspension, or permanent bans.</p>

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
          <p>The following may never be listed on Hostly:</p>
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
            <li>Email us at safety@hostly.co.zw for urgent matters</li>
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
          <p>Banned users may appeal by emailing appeals@hostly.co.zw with evidence. We review all appeals within 7 days.</p>

          <h2>9. Our Commitment</h2>
          <p>We are committed to making Hostly Zimbabwe's most trusted marketplace. We review all reports, take action on violations, and continuously improve our safety systems. Together we can build a marketplace that works for everyone.</p>

          <h2>Contact Safety Team</h2>
          <p>safety@hostly.co.zw</p>
        </div>
      </div>
    </div>`;
  };

})(window.H = window.H || {});
