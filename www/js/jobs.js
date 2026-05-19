'use strict';
(function (H) {

  var JOB_CATS = ['Accounting & Finance', 'Sales & Marketing', 'IT & Technology', 'Construction', 'Healthcare', 'Education', 'Hospitality', 'Administration', 'Engineering', 'Driving & Logistics'];

  function parseLine(lines, key) {
    var found = lines.find(function (ln) { return ln.startsWith(key + ':'); });
    return found ? found.slice(key.length + 1).trim() : '';
  }

  function jobCard(l) {
    var lines = (l.desc || '').split('\n');
    var company  = l.company || l.sellerName || parseLine(lines, 'COMPANY') || 'Company';
    var jobType  = parseLine(lines, 'JOB TYPE') || '';
    var salary   = parseLine(lines, 'SALARY') || '';
    var industry = parseLine(lines, 'INDUSTRY') || '';
    var seller   = (H.state.users || []).find(function(u){ return u.id === l.sellerId; });
    var coVerified = seller && (seller.companyVerified || seller.verified);
    var verBadge = coVerified ? '<span style="background:#059669;color:#fff;font-size:10px;font-weight:700;padding:1px 6px;border-radius:6px;margin-left:4px">✓</span>' : '';
    return '<div onclick="H.openInner(\'JobDetail\',{id:\'' + l.id + '\'})" style="background:var(--card);border-radius:16px;padding:16px;margin-bottom:10px;border:1px solid var(--border);cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.05)">'
      + '<div style="display:flex;align-items:flex-start;gap:12px">'
      + '<div style="width:46px;height:46px;border-radius:12px;background:#1A3A8F14;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:17px;font-weight:800;color:#1A3A8F">'
      + (company.slice(0,2).toUpperCase()) + '</div>'
      + '<div style="flex:1;min-width:0">'
      + '<div style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + H.escHtml(l.title) + '</div>'
      + '<div style="font-size:13px;font-weight:600;color:#1A3A8F;margin-bottom:6px;display:flex;align-items:center">' + H.escHtml(company) + verBadge + (industry ? '<span style="color:var(--sub);font-weight:400;margin-left:4px">· ' + H.escHtml(industry) + '</span>' : '') + '</div>'
      + '<div style="display:flex;flex-wrap:wrap;gap:5px">'
      + (jobType ? '<span style="background:#1A3A8F14;color:#1A3A8F;font-size:11px;font-weight:700;padding:3px 8px;border-radius:6px">' + H.escHtml(jobType) + '</span>' : '')
      + (salary ? '<span style="background:#F5A62314;color:#c07800;font-size:11px;font-weight:700;padding:3px 8px;border-radius:6px">💰 ' + H.escHtml(salary) + '</span>' : '')
      + (l.city ? '<span style="background:var(--bg);color:var(--sub);font-size:11px;font-weight:600;padding:3px 8px;border-radius:6px">📍 ' + H.escHtml(l.city) + '</span>' : '')
      + '<span style="color:var(--sub);font-size:11px;padding:3px 0">' + H.timeAgo(l.createdAt) + '</span>'
      + '</div></div></div></div>';
  }

  H.pages.Jobs = function () {
    var jobs = (H.state.listings || []).filter(function (l) { return l.status === 'active' && l.cat === 'jobs'; });
    var candidates = (H.state.users || []).filter(function (u) { return u.openToWork; });
    var recent = jobs.slice().sort(function (a, b) { return b.createdAt - a.createdAt; }).slice(0, 5);

    return '<div class="page active">'
      + '<div class="det-topbar" style="background:#F5A623">'
      + '<button class="back" onclick="H.goBack()" style="color:#1A3A8F"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>'
      + '<div class="det-topbar-title" style="color:#1A3A8F">Jobs in Zimbabwe</div>'
      + '<button onclick="H.openInner(\'PostJob\')" style="background:#1A3A8F;border:none;color:#fff;font-size:12px;font-weight:700;cursor:pointer;padding:6px 12px;border-radius:8px">+ Post Job</button>'
      + '</div>'
      + '<div style="background:linear-gradient(135deg,#F5A623,#f07b00);padding:20px 16px 24px">'
      + '<div style="font-size:22px;font-weight:900;color:#1A3A8F;margin-bottom:4px">Find Your Dream Job</div>'
      + '<div style="font-size:13px;color:rgba(26,58,143,.75);margin-bottom:16px">' + jobs.length + ' opening' + (jobs.length !== 1 ? 's' : '') + ' across Zimbabwe</div>'
      + '<div style="background:rgba(255,255,255,.95);border-radius:14px;display:flex;align-items:center;padding:0 14px;gap:8px">'
      + '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#999" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
      + '<input placeholder="Search job title, company, skills…" autocomplete="off" oninput="H.openInner(\'FindJobs\',{q:this.value})" style="flex:1;border:none;outline:none;padding:14px 0;font-size:14px;background:transparent;color:#1A3A8F;font-family:Inter,sans-serif"></div>'
      + '</div>'
      + '<div style="padding:16px 14px;display:grid;grid-template-columns:1fr 1fr;gap:12px">'
      + '<div onclick="H.openInner(\'FindJobs\')" style="background:#1A3A8F;border-radius:16px;padding:20px 14px;cursor:pointer;box-shadow:0 4px 16px rgba(26,58,143,.25)">'
      + '<div style="font-size:28px;margin-bottom:8px">💼</div>'
      + '<div style="font-size:16px;font-weight:800;color:#fff;margin-bottom:4px">Find Jobs</div>'
      + '<div style="font-size:12px;color:rgba(255,255,255,.7)">' + jobs.length + ' openings</div></div>'
      + '<div onclick="H.openInner(\'HireTalent\')" style="background:#fff;border-radius:16px;padding:20px 14px;cursor:pointer;box-shadow:0 4px 16px rgba(0,0,0,.08);border:2px solid #F5A623">'
      + '<div style="font-size:28px;margin-bottom:8px">🔍</div>'
      + '<div style="font-size:16px;font-weight:800;color:#1A3A8F;margin-bottom:4px">Hire Talent</div>'
      + '<div style="font-size:12px;color:var(--sub)">' + candidates.length + ' candidate' + (candidates.length !== 1 ? 's' : '') + '</div></div>'
      + '</div>'
      + '<div onclick="H.openInner(\'JobSeekerProfile\')" style="margin:0 14px 12px;background:linear-gradient(135deg,#22c55e,#15803d);border-radius:16px;padding:16px 20px;cursor:pointer;display:flex;align-items:center;justify-content:space-between">'
      + '<div><div style="font-size:15px;font-weight:800;color:#fff;margin-bottom:2px">Looking for Work?</div><div style="font-size:12px;color:rgba(255,255,255,.8)">Build your CV profile and let employers find you</div></div>'
      + '<div style="font-size:28px">📋</div></div>'
      + '<div style="padding:0 14px 12px">'
      + '<div style="font-size:15px;font-weight:800;color:var(--text);margin-bottom:10px">Browse by Category</div>'
      + '<div style="display:flex;flex-wrap:wrap;gap:8px">'
      + JOB_CATS.map(function (cat) {
        var cnt = jobs.filter(function (j) { return (j.title + ' ' + (j.desc || '')).toLowerCase().includes(cat.split(' ')[0].toLowerCase()); }).length;
        return '<div onclick="H.openInner(\'FindJobs\',{cat:\'' + cat + '\'})" style="background:var(--card);border:1px solid var(--border);border-radius:20px;padding:8px 14px;cursor:pointer;font-size:12px;font-weight:600;color:var(--text)">' + H.escHtml(cat) + '<span style="color:var(--sub);margin-left:4px">(' + cnt + ')</span></div>';
      }).join('')
      + '</div></div>'
      + (recent.length ? '<div style="padding:0 14px 16px">'
        + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">'
        + '<div style="font-size:15px;font-weight:800;color:var(--text)">Recent Openings</div>'
        + '<button onclick="H.openInner(\'FindJobs\')" style="background:none;border:none;color:#1A3A8F;font-size:12px;font-weight:700;cursor:pointer;padding:0">View All →</button>'
        + '</div>' + recent.map(jobCard).join('') + '</div>' : '')
      + '<div style="margin:0 14px 88px;background:linear-gradient(135deg,#1A3A8F,#0f2460);border-radius:16px;padding:20px">'
      + '<div style="font-size:16px;font-weight:800;color:#fff;margin-bottom:6px">Hiring? Post a Job Free</div>'
      + '<div style="font-size:13px;color:rgba(255,255,255,.7);margin-bottom:14px">Reach thousands of qualified candidates across Zimbabwe</div>'
      + '<button onclick="H.openInner(\'PostJob\')" style="background:#F5A623;border:none;color:#1A3A8F;font-size:14px;font-weight:800;padding:12px 24px;border-radius:10px;cursor:pointer">Post a Job →</button>'
      + '</div></div>';
  };

  H.pages.FindJobs = function (params) {
    params = params || {};
    var jobs = (H.state.listings || []).filter(function (l) { return l.status === 'active' && l.cat === 'jobs'; })
      .sort(function (a, b) { return b.createdAt - a.createdAt; });

    var filterHtml = H._sel('findjobs', 'subcat', 'Job Category', [['all', 'All Categories']].concat(JOB_CATS.map(function (c) { return [c, c]; })).concat([['Other', 'Other']]))
      + H._sel('findjobs', 'fuelType', 'Job Type', [['all', 'All'], ['full-time', 'Full-time'], ['part-time', 'Part-time'], ['contract', 'Contract'], ['freelance', 'Freelance'], ['internship', 'Internship']])
      + H._sel('findjobs', 'propType', 'Qualification', [['all', 'All'], ['none', 'No formal qualification'], ['certificate', 'Certificate / Diploma'], ['degree', 'Degree'], ['postgrad', 'Postgraduate']])
      + H._citysel('findjobs') + H._priceRange('findjobs') + H._sortsel('findjobs');

    return '<div class="page active">'
      + '<div class="det-topbar" style="background:#F5A623">'
      + '<button class="back" onclick="H.goBack()" style="color:#1A3A8F"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>'
      + '<div class="det-topbar-title" style="color:#1A3A8F">Find Jobs</div>'
      + '<button onclick="H.openInner(\'PostJob\')" style="background:#1A3A8F;border:none;color:#fff;font-size:12px;font-weight:700;cursor:pointer;padding:6px 12px;border-radius:8px">+ Post</button>'
      + '</div>'
      + '<div style="background:#F5A623;padding:0 12px 12px">'
      + '<div style="display:flex;gap:8px;align-items:center">'
      + '<div style="background:rgba(255,255,255,.9);border-radius:12px;display:flex;align-items:center;padding:0 12px;gap:8px;flex:1">'
      + '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#999" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
      + '<input id="cs_findjobs" placeholder="Search jobs…" autocomplete="off" value="' + H.escHtml(params.q || '') + '" oninput="H._applyJobFilters()" style="flex:1;border:none;outline:none;padding:12px 0;font-size:14px;background:transparent;color:#1A3A8F;font-family:Inter,sans-serif"></div>'
      + '<button onclick="H._toggleFilters(\'findjobs\')" style="background:rgba(255,255,255,.25);border:none;color:#1A3A8F;padding:10px 12px;border-radius:12px;cursor:pointer;display:flex;align-items:center;gap:5px;font-size:13px;font-weight:700">'
      + '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="4" y1="6" x2="20" y2="6"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="8" y1="18" x2="16" y2="18"/></svg>Filter'
      + '<span id="fb_findjobs" style="display:none;background:#1A3A8F;color:#fff;font-size:10px;font-weight:800;min-width:16px;height:16px;border-radius:8px;align-items:center;justify-content:center;padding:0 4px"></span></button>'
      + '</div>'
      + '<div style="color:rgba(26,58,143,.75);font-size:12px;font-weight:600;margin-top:8px"><span id="cc_findjobs">' + jobs.length + ' jobs</span></div>'
      + '</div>'
      + '<div id="fp_findjobs" style="display:none;background:var(--card);border-bottom:2px solid #F5A623;padding:16px 14px">'
      + filterHtml
      + '<div style="display:flex;gap:8px;margin-top:4px">'
      + '<button onclick="H._clearFilters(\'findjobs\')" style="flex:1;padding:10px;background:var(--bg);border:1px solid var(--border);border-radius:10px;font-size:13px;font-weight:600;color:var(--sub);cursor:pointer">Clear</button>'
      + '<button onclick="H._toggleFilters(\'findjobs\')" style="flex:2;padding:10px;background:#F5A623;border:none;border-radius:10px;font-size:13px;font-weight:700;color:#1A3A8F;cursor:pointer">Apply Filters</button>'
      + '</div></div>'
      + '<div id="cl_findjobs" style="padding:12px 12px 88px">'
      + (jobs.length ? jobs.map(jobCard).join('') : H.emptyState('No jobs yet', 'Check back soon!', 'Post a Job', "H.openInner('PostJob')"))
      + '</div></div>';
  };

  H.pages.FindJobs_after = function (params) {
    params = params || {};
    H._filters['findjobs'] = {};
    if (params.cat) H._filters['findjobs'].subcat = params.cat;
    H._applyJobFilters();
  };

  H._applyJobFilters = function () {
    var el = document.getElementById('cl_findjobs');
    if (!el) return;
    var f = H._filters['findjobs'] || {};
    var jobs = (H.state.listings || []).filter(function (l) { return l.status === 'active' && l.cat === 'jobs'; });
    var q = ((document.getElementById('cs_findjobs') || {}).value || '').toLowerCase().trim();
    if (q) jobs = jobs.filter(function (l) { return (l.title + ' ' + (l.desc || '') + ' ' + (l.city || '') + ' ' + (l.sellerName || '')).toLowerCase().includes(q); });
    if (f.city && f.city !== 'all') jobs = jobs.filter(function (l) { return (l.city + ' ' + (l.prov || '')).toLowerCase().includes(f.city.toLowerCase()); });
    if (f.subcat && f.subcat !== 'all') jobs = jobs.filter(function (l) { return (l.title + ' ' + (l.desc || '')).toLowerCase().includes(f.subcat.split(' ')[0].toLowerCase()); });
    if (f.fuelType && f.fuelType !== 'all') jobs = jobs.filter(function (l) { return (l.desc || '').toLowerCase().includes(f.fuelType.replace('-', ' ')); });
    if (f.priceMin) jobs = jobs.filter(function (l) { return (l.price || 0) >= +f.priceMin; });
    if (f.priceMax) jobs = jobs.filter(function (l) { return (l.price || 0) <= +f.priceMax; });
    jobs.sort(function (a, b) { return b.createdAt - a.createdAt; });
    el.innerHTML = jobs.length ? jobs.map(jobCard).join('') : H.emptyState('No jobs match', 'Try adjusting your filters', null, null);
    var cnt = document.getElementById('cc_findjobs');
    if (cnt) cnt.textContent = jobs.length + ' job' + (jobs.length !== 1 ? 's' : '');
    var n = Object.keys(f).filter(function (k) { return f[k] && f[k] !== 'all' && f[k] !== '' && f[k] !== 'newest'; }).length;
    var badge = document.getElementById('fb_findjobs');
    if (badge) { badge.textContent = n || ''; badge.style.display = n ? 'flex' : 'none'; }
  };

  H.pages.HireTalent = function () {
    var candidates = (H.state.users || []).filter(function (u) { return u.openToWork; });
    var sectors = ['All'].concat(JOB_CATS);
    var ZW = H._ZW_CITIES || [];

    return '<div class="page active">'
      + '<div class="det-topbar" style="background:#1A3A8F"><button class="back" onclick="H.goBack()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button><div class="det-topbar-title">Hire Talent</div></div>'
      + '<div style="background:#1A3A8F;padding:0 12px 14px">'
      + '<div style="background:rgba(255,255,255,.13);border-radius:12px;display:flex;align-items:center;padding:0 12px;gap:8px">'
      + '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
      + '<input id="talentQ" placeholder="Search by name, skill, title…" autocomplete="off" oninput="H._filterTalent()" style="flex:1;border:none;outline:none;padding:12px 0;font-size:14px;background:transparent;color:#fff;font-family:Inter,sans-serif"></div>'
      + '<div style="color:rgba(255,255,255,.65);font-size:12px;font-weight:600;margin-top:8px"><span id="talentCount">' + candidates.length + ' candidate' + (candidates.length !== 1 ? 's' : '') + '</span></div>'
      + '</div>'
      + '<div id="sectorTabs" style="background:var(--card);border-bottom:1px solid var(--border);overflow-x:auto;white-space:nowrap;padding:10px 14px;display:flex;gap:8px">'
      + sectors.map(function (s, i) {
        return '<button onclick="H._talentSector(\'' + s + '\')" style="flex-shrink:0;padding:7px 14px;border-radius:20px;border:1.5px solid ' + (i === 0 ? '#1A3A8F' : 'var(--border)') + ';background:' + (i === 0 ? '#1A3A8F' : 'var(--bg)') + ';color:' + (i === 0 ? '#fff' : 'var(--text)') + ';font-size:12px;font-weight:700;cursor:pointer">' + H.escHtml(s) + '</button>';
      }).join('')
      + '</div>'
      + '<div style="padding:10px 14px;display:flex;gap:8px;overflow-x:auto;border-bottom:1px solid var(--border)">'
      + '<div style="flex-shrink:0"><div style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">City</div>'
      + '<select onchange="H._setFilter(\'talent\',\'city\',this.value);H._filterTalent()" style="padding:8px 10px;border:1px solid var(--border);border-radius:9px;font-size:13px;background:var(--bg);color:var(--text);outline:none">'
      + '<option value="all">All Cities</option>' + ZW.map(function (c) { return '<option value="' + c + '">' + c + '</option>'; }).join('') + '</select></div>'
      + '<div style="flex-shrink:0;margin-left:8px"><div style="font-size:11px;font-weight:700;color:var(--sub);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Experience</div>'
      + '<select onchange="H._setFilter(\'talent\',\'exp\',this.value);H._filterTalent()" style="padding:8px 10px;border:1px solid var(--border);border-radius:9px;font-size:13px;background:var(--bg);color:var(--text);outline:none">'
      + '<option value="all">Any</option><option value="entry">Entry Level</option><option value="mid">3-5 Years</option><option value="senior">5+ Years</option><option value="expert">10+ Years</option></select></div>'
      + '</div>'
      + '<div id="talentList" style="padding:12px 14px 88px">'
      + (candidates.length ? candidates.map(_candidateCard).join('') : _emptyTalent())
      + '</div></div>';
  };

  H.pages.HireTalent_after = function () {
    H._currentTalentSector = 'All';
    var _sb = window.supabase;
    if (!_sb || typeof _sb.from !== 'function') return;
    // Load profiles that are open to work OR have a CV set to visible
    _sb.from('profiles')
      .select('id,name,phone,email,avatar,verified,job_title,skills,sector,exp,city,open_to_work,cv')
      .or('open_to_work.eq.true,cv->visible.eq.true')
      .limit(200)
      .then(function (res) {
        if (res.error || !res.data || !res.data.length) return;
        res.data.forEach(function (p) {
          var ex = (H.state.users || []).find(function (u) { return u.id === p.id; });
          var cvData = typeof p.cv === 'string' ? JSON.parse(p.cv || '{}') : (p.cv || null);
          if (!ex) {
            (H.state.users = H.state.users || []).push({
              id: p.id, name: p.name || 'User', phone: p.phone || '',
              email: p.email || '', avatar: p.avatar || null,
              verified: p.verified || false, openToWork: p.open_to_work || false,
              jobTitle: p.job_title || '', skills: p.skills || '',
              sector: p.sector || '', exp: p.exp || '', city: p.city || '',
              cv: cvData || null
            });
          } else {
            ex.openToWork = p.open_to_work || ex.openToWork;
            ex.jobTitle   = p.job_title   || ex.jobTitle   || '';
            ex.skills     = p.skills      || ex.skills     || '';
            ex.sector     = p.sector      || ex.sector     || '';
            ex.exp        = p.exp         || ex.exp        || '';
            ex.city       = p.city        || ex.city       || '';
            if (cvData) ex.cv = cvData;
          }
        });
        H.saveState();
        H._filterTalent();
      });
  };

  H._talentSector = function (sector) {
    H._currentTalentSector = sector;
    document.querySelectorAll('#sectorTabs button').forEach(function (btn) {
      var active = btn.textContent.trim() === sector;
      btn.style.background = active ? '#1A3A8F' : 'var(--bg)';
      btn.style.color = active ? '#fff' : 'var(--text)';
      btn.style.borderColor = active ? '#1A3A8F' : 'var(--border)';
    });
    H._filterTalent();
  };

  H._filterTalent = function () {
    var el = document.getElementById('talentList');
    var cnt = document.getElementById('talentCount');
    if (!el) return;
    var q = ((document.getElementById('talentQ') || {}).value || '').toLowerCase();
    var sector = H._currentTalentSector || 'All';
    var f = H._filters['talent'] || {};
    var list = (H.state.users || []).filter(function (u) {
      return u.openToWork || (u.cv && u.cv.visible !== false && (u.cv.headline || (u.cv.experience && u.cv.experience.length)));
    });
    if (q) list = list.filter(function (u) {
      var cv = u.cv || {};
      var searchText = [u.name||'', u.jobTitle||'', cv.headline||'', cv.summary||'',
        (cv.skills||[]).join(' '), (cv.experience||[]).map(function(e){return (e.title||'')+(e.company||'');}).join(' '),
        u.city||'', cv.location||''].join(' ').toLowerCase();
      return searchText.includes(q);
    });
    if (sector && sector !== 'All') list = list.filter(function (u) {
      var cv = u.cv || {};
      var text = [(u.sector||''), (u.jobTitle||''), (cv.headline||''), (cv.skills||[]).join(' ')].join(' ').toLowerCase();
      return text.includes(sector.split(' ')[0].toLowerCase());
    });
    if (f.city && f.city !== 'all') list = list.filter(function (u) {
      return ((u.cv && u.cv.location || u.city) || '').toLowerCase().includes(f.city.toLowerCase());
    });
    if (cnt) cnt.textContent = list.length + ' candidate' + (list.length !== 1 ? 's' : '');
    el.innerHTML = list.length ? list.map(_candidateCard).join('') : _emptyTalent();
  };

  function _candidateCard(u) {
    var ini = H.initials(u.name || 'U');
    var cv  = u.cv || {};
    var verBadge = u.verified
      ? '<span style="background:#059669;color:#fff;font-size:10px;font-weight:700;padding:2px 7px;border-radius:8px;margin-left:6px">✓ Verified</span>'
      : '';
    var headline = cv.headline || u.jobTitle || 'Open to Work';
    var location = cv.location || u.city || '';
    var expCount = (cv.experience || []).length;
    var rawSkills = cv.skills && cv.skills.length ? cv.skills : (u.skills || '').split(',').filter(Boolean);
    var skills = rawSkills.slice(0, 4).map(function(s){ return s.trim(); }).filter(Boolean);
    var latestExp = cv.experience && cv.experience[0];
    var expectedSal = cv.expectedSalary ? '$' + cv.expectedSalary + '/mo' : '';

    return '<div style="background:var(--card);border-radius:16px;padding:16px;margin-bottom:12px;border:1px solid var(--border);box-shadow:0 2px 8px rgba(0,0,0,.05)">'
      + '<div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:10px">'
      + '<div style="width:50px;height:50px;border-radius:50%;overflow:hidden;flex-shrink:0">'
      + (u.avatar ? '<img src="' + u.avatar + '" style="width:100%;height:100%;object-fit:cover">' : '<div style="width:100%;height:100%;background:linear-gradient(135deg,#1A3A8F,#3a6fd8);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:#fff">' + ini + '</div>')
      + '</div>'
      + '<div style="flex:1;min-width:0">'
      + '<div style="display:flex;align-items:center;flex-wrap:wrap;gap:4px;margin-bottom:2px"><div style="font-size:15px;font-weight:700;color:var(--text)">' + H.escHtml(u.name || 'Anonymous') + '</div>' + verBadge + '</div>'
      + '<div style="font-size:13px;color:#1A3A8F;font-weight:600;margin-bottom:2px">' + H.escHtml(headline) + '</div>'
      + '<div style="display:flex;gap:8px;flex-wrap:wrap;font-size:11px;color:var(--sub)">'
      + (location ? '<span>📍 ' + H.escHtml(location) + '</span>' : '')
      + (expCount ? '<span>💼 ' + expCount + ' position' + (expCount!==1?'s':'') + '</span>' : '')
      + (expectedSal ? '<span>💰 ' + H.escHtml(expectedSal) + '</span>' : '')
      + '</div></div></div>'
      + (latestExp ? '<div style="background:var(--bg);border-radius:10px;padding:8px 10px;margin-bottom:8px;border-left:3px solid #1A3A8F">'
          + '<div style="font-size:12px;font-weight:700;color:var(--text)">' + H.escHtml(latestExp.title) + '</div>'
          + '<div style="font-size:11px;color:var(--sub);margin-top:1px">' + H.escHtml(latestExp.company) + (latestExp.duration ? ' · ' + H.escHtml(latestExp.duration) : '') + '</div>'
          + '</div>' : '')
      + (skills.length ? '<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:10px">' + skills.map(function (s) { return '<span style="background:#1A3A8F12;border:1px solid #1A3A8F22;font-size:11px;padding:2px 8px;border-radius:6px;color:#1A3A8F;font-weight:600">' + H.escHtml(s) + '</span>'; }).join('') + '</div>' : '')
      + (cv.summary ? '<div style="font-size:12px;color:var(--sub);line-height:1.5;margin-bottom:10px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">' + H.escHtml(cv.summary) + '</div>' : '')
      + '<div style="display:flex;gap:8px">'
      + (u.phone ? '<button onclick="window.open(\'https://wa.me/' + H.escHtml(u.phone.replace(/[^\d+]/g, '')) + '\',\'_blank\')" style="flex:1;padding:9px;background:#25D366;color:#fff;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer">WhatsApp</button>' : '')
      + (u.email ? '<button onclick="window.location.href=\'mailto:' + H.escHtml(u.email) + '\'" style="flex:1;padding:9px;background:#1A3A8F;color:#fff;border:none;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer">Email</button>' : '')
      + '<button onclick="H.openInner(\'Profile\',{id:\'' + u.id + '\'})" style="flex:1;padding:9px;background:var(--bg);color:var(--text);border:1px solid var(--border);border-radius:10px;font-size:12px;font-weight:700;cursor:pointer">View Profile</button>'
      + '</div></div>';
  }

  function _emptyTalent() {
    return '<div style="text-align:center;padding:40px 20px">'
      + '<div style="font-size:48px;margin-bottom:12px">👥</div>'
      + '<div style="font-size:17px;font-weight:700;color:var(--text);margin-bottom:6px">No candidates yet</div>'
      + '<div style="font-size:13px;color:var(--sub);margin-bottom:20px">Job seekers who mark themselves open to work will appear here.</div>'
      + '<button onclick="H.toast(\'Share PaMarket with job seekers!\')" style="padding:12px 24px;background:#1A3A8F;color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer">Invite Job Seekers</button>'
      + '</div>';
  }

  H.pages.PostJob = function () {
    var u = H.currentUser();
    if (!u) return '<div class="page active">' + H.innerTopbar('Post a Job') + H.emptyState('Sign in required', 'You must sign in to post a job', 'Sign In', "H.requireAuth('Post a job')") + '</div>';

    var ZW = (H._ZW_CITIES || []);
    return '<div class="page active">'
      + '<div class="det-topbar"><button class="back" onclick="H.goBack()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button><div class="det-topbar-title">Post a Job</div></div>'
      + '<div style="margin:12px 14px;background:#1A3A8F18;border-radius:12px;padding:12px 14px;display:flex;gap:10px">'
      + '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1A3A8F" stroke-width="2" style="flex-shrink:0;margin-top:1px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
      + '<div style="font-size:12px;color:#1A3A8F;font-weight:600;line-height:1.6">Jobs go live immediately. Company name is always visible. Posting is free.</div>'
      + '</div>'
      + '<div style="padding:0 14px 100px">'
      + _field('jCompany', 'Company Name *', 'text', 'Your company or organisation name', H.escHtml(u.company || u.name || ''))
      + '<div style="margin-bottom:14px;background:var(--card);border-radius:12px;padding:14px;border:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">'
      + '<div><div style="font-size:14px;font-weight:600;color:var(--text)">Post Anonymously</div><div style="font-size:12px;color:var(--sub);margin-top:2px">Company name visible. Your identity hidden.</div></div>'
      + '<div id="anonTog" onclick="this.dataset.on=this.dataset.on===\'1\'?\'0\':\'1\';this.style.background=this.dataset.on===\'1\'?\'#1A3A8F\':\'var(--border)\';this.querySelector(\'div\').style.left=this.dataset.on===\'1\'?\'23px\':\'3px\';document.getElementById(\'jAnon\').value=this.dataset.on" data-on="0" style="width:46px;height:26px;border-radius:13px;background:var(--border);position:relative;cursor:pointer;transition:background .2s;flex-shrink:0"><div style="position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;transition:left .2s;box-shadow:0 1px 4px rgba(0,0,0,.2)"></div></div>'
      + '<input type="hidden" id="jAnon" value="0">'
      + '</div>'
      + _field('jTitle', 'Job Title *', 'text', 'e.g. Accountant, Driver, Sales Representative', '')
      + '<div style="margin-bottom:14px"><label style="font-size:12px;font-weight:700;color:var(--text);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Job Category *</label>'
      + '<select id="jCat" style="width:100%;padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text);outline:none"><option value="">Select category…</option>'
      + JOB_CATS.map(function (c) { return '<option>' + H.escHtml(c) + '</option>'; }).join('') + '<option>Other</option></select></div>'
      + '<div style="margin-bottom:14px"><label style="font-size:12px;font-weight:700;color:var(--text);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Location *</label>'
      + '<select id="jLocation" style="width:100%;padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text);outline:none"><option value="">Select city…</option>'
      + ZW.map(function (c) { return '<option>' + c + '</option>'; }).join('') + '<option>Remote</option><option>Multiple Locations</option></select></div>'
      + '<div style="margin-bottom:14px"><label style="font-size:12px;font-weight:700;color:var(--text);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Job Type</label>'
      + '<div style="display:flex;flex-wrap:wrap;gap:10px">' + ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'].map(function (t, i) { return '<label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="radio" name="jType" value="' + t + '"' + (i === 0 ? ' checked' : '') + ' style="accent-color:#1A3A8F"><span style="font-size:13px;font-weight:600;color:var(--text)">' + t + '</span></label>'; }).join('') + '</div></div>'
      + '<div style="margin-bottom:14px"><label style="font-size:12px;font-weight:700;color:var(--text);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Salary Range (USD)</label>'
      + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><input id="jSalMin" type="number" placeholder="Min" style="padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text);outline:none;box-sizing:border-box"><input id="jSalMax" type="number" placeholder="Max" style="padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text);outline:none;box-sizing:border-box"></div></div>'
      + _textarea('jDesc', 'Job Description *', 'Describe the role, responsibilities, company culture…', 6)
      + _textarea('jReqs', 'Requirements & Qualifications', 'List qualifications, experience, skills required…', 4)
      + _textarea('jResp', 'Key Responsibilities', 'List the main duties and responsibilities…', 4)
      + _field('jEmail', 'Application Email', 'email', 'Email to receive applications', H.escHtml(u.email || ''))
      + _field('jPhone', 'WhatsApp Number', 'tel', 'e.g. +263771234567', H.escHtml(u.phone || ''))
      + '</div>'
      + '<div style="position:fixed;bottom:0;left:0;right:0;background:var(--card);padding:12px 16px;padding-bottom:calc(12px + env(safe-area-inset-bottom));border-top:1px solid var(--border);z-index:200">'
      + '<button onclick="H._submitJob()" style="width:100%;padding:15px;background:linear-gradient(135deg,#1A3A8F,#0f2460);color:#fff;border:none;border-radius:14px;font-size:15px;font-weight:800;cursor:pointer">Post Job Now →</button>'
      + '</div></div>';
  };

  function _field(id, label, type, placeholder, value) {
    return '<div style="margin-bottom:14px"><label style="font-size:12px;font-weight:700;color:var(--text);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">' + label + '</label>'
      + '<input id="' + id + '" type="' + type + '" placeholder="' + H.escHtml(placeholder) + '" value="' + (value || '') + '" style="width:100%;padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text);outline:none;box-sizing:border-box"></div>';
  }

  function _textarea(id, label, placeholder, rows) {
    return '<div style="margin-bottom:14px"><label style="font-size:12px;font-weight:700;color:var(--text);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">' + label + '</label>'
      + '<textarea id="' + id + '" placeholder="' + H.escHtml(placeholder) + '" rows="' + rows + '" style="width:100%;padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text);outline:none;box-sizing:border-box;resize:vertical;font-family:Inter,sans-serif"></textarea></div>';
  }

  H._submitJob = function () {
    var company = (document.getElementById('jCompany') || {}).value || '';
    var title = (document.getElementById('jTitle') || {}).value || '';
    var cat = (document.getElementById('jCat') || {}).value || '';
    var location = (document.getElementById('jLocation') || {}).value || '';
    var desc = (document.getElementById('jDesc') || {}).value || '';
    if (!company.trim()) { H.toast('Company name is required'); return; }
    if (!title.trim()) { H.toast('Job title is required'); return; }
    if (!cat) { H.toast('Please select a job category'); return; }
    if (!location) { H.toast('Please select a location'); return; }
    if (desc.trim().length < 30) { H.toast('Please write a job description (min 30 chars)'); return; }
    var u = H.currentUser();
    if (!u) { H.toast('Please sign in first'); return; }
    var jobType = 'Full-time';
    document.querySelectorAll('input[name="jType"]').forEach(function (r) { if (r.checked) jobType = r.value; });
    var salMin = (document.getElementById('jSalMin') || {}).value || '';
    var salMax = (document.getElementById('jSalMax') || {}).value || '';
    var salary = salMin && salMax ? '$' + salMin + ' - $' + salMax : salMin ? 'From $' + salMin : 'Negotiable';
    var reqs = (document.getElementById('jReqs') || {}).value || '';
    var resp = (document.getElementById('jResp') || {}).value || '';
    var email = (document.getElementById('jEmail') || {}).value || '';
    var phone = (document.getElementById('jPhone') || {}).value || '';
    var anon = (document.getElementById('jAnon') || {}).value === '1';
    var fullDesc = 'COMPANY: ' + company + '\nJOB TYPE: ' + jobType + '\nINDUSTRY: ' + cat + '\nSALARY: ' + salary
      + '\n\nDESCRIPTION:\n' + desc
      + (resp ? '\n\nRESPONSIBILITIES:\n' + resp : '')
      + (reqs ? '\n\nREQUIREMENTS:\n' + reqs : '')
      + ((email || phone) ? '\n\nHOW TO APPLY:\n' + (email ? 'Email: ' + email + '\n' : '') + (phone ? 'WhatsApp: ' + phone : '') : '');
    var listing = {
      id: H.uid(), cat: 'jobs', title: title.trim(), desc: fullDesc,
      price: salMin ? +salMin : 0, currency: 'USD', city: location, prov: location,
      sellerId: u.id, sellerName: anon ? company : (u.name || company),
      sellerPhone: u.phone || '', company: company,
      createdAt: Date.now(), status: 'active', photos: []
    };
    H.state.listings = H.state.listings || [];
    H.state.listings.push(listing);
    H.saveState();
    if (typeof H.saveListingToCloud === 'function') H.saveListingToCloud(listing);
    H.toast('Job posted! Candidates can now apply.');
    H.goBack();
  };

  H.pages.JobDetail = function (params) {
    var id = params && params.id;
    var l = (H.state.listings || []).find(function (x) { return x.id === id; });
    if (!l) return '<div class="page active">' + H.innerTopbar('Job') + H.emptyState('Job not found', 'This posting may have been removed.', 'Browse Jobs', "H.filterByCat('jobs')") + '</div>';

    var lines = (l.desc || '').split('\n');
    var company  = l.company || l.sellerName || parseLine(lines, 'COMPANY') || 'Company';
    var jobType  = parseLine(lines, 'JOB TYPE') || '';
    var industry = parseLine(lines, 'INDUSTRY') || '';
    var salary   = parseLine(lines, 'SALARY')   || 'Not disclosed';
    var deadline = parseLine(lines, 'DEADLINE') || '';
    var d = l.desc || '';
    var descS  = d.indexOf('\nDESCRIPTION:\n');
    var respS  = d.indexOf('\nRESPONSIBILITIES:\n');
    var reqS   = d.indexOf('\nREQUIREMENTS:\n');
    var applyS = d.indexOf('\nHOW TO APPLY:');
    function _next(from) { return [respS,reqS,applyS,d.length].filter(function(x){return x>from;}).sort(function(a,b){return a-b;})[0]; }
    var description      = descS  > -1 ? d.slice(descS  + 14, _next(descS)).trim()  : (d.split('\n').filter(function(ln){return !ln.includes(':');}).slice(0,4).join('\n') || '');
    var responsibilities = respS  > -1 ? d.slice(respS  + 19, _next(respS)).trim()  : '';
    var requirements     = reqS   > -1 ? d.slice(reqS   + 15, _next(reqS)).trim()   : '';
    var applySection     = applyS > -1 ? d.slice(applyS + 14).trim()                : '';
    var em = applySection.match(/Email:\s*(.+)/), ph = applySection.match(/WhatsApp:\s*(.+)/);
    var applyEmail = em ? em[1].trim() : '';
    var applyPhone = ph ? ph[1].trim().replace(/[^\d+]/g, '') : '';

    var u      = H.currentUser();
    var isMine = u && l.sellerId && l.sellerId === u.id;
    var apps   = (H.state.applications || []);
    var myApp  = u ? apps.find(function(a){ return a.jobId === id && a.applicantId === u.id; }) : null;
    var appCount = apps.filter(function(a){ return a.jobId === id; }).length;

    var companyInitials = (company || 'C').split(' ').slice(0,2).map(function(w){return w[0];}).join('').toUpperCase();

    var chipStyle = 'display:inline-flex;align-items:center;gap:4px;padding:5px 10px;border-radius:20px;font-size:12px;font-weight:700;margin-right:6px;margin-bottom:6px';

    return '<div class="page active">'
      + '<div class="det-topbar" style="background:#0a2558"><button class="back" onclick="H.goBack()" style="color:#fff"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>'
      + '<div class="det-topbar-title" style="color:#fff;font-size:14px">' + H.escHtml(l.title) + '</div>'
      + (isMine ? '<button onclick="H.openInner(\'JobApplications\',{jobId:\'' + id + '\'})" style="background:rgba(255,255,255,.18);border:none;color:#fff;font-size:11px;font-weight:700;cursor:pointer;padding:5px 10px;border-radius:8px">' + appCount + ' App' + (appCount===1?'':'s') + '</button>' : '<div style="width:40px"></div>')
      + '</div>'

      + '<div style="background:linear-gradient(160deg,#0a2558 0%,#1A3A8F 60%,#2952cc 100%);padding:20px 16px 24px">'
      + '<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">'
      + '<div style="width:56px;height:56px;border-radius:14px;background:rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#fff;flex-shrink:0;border:2px solid rgba(255,255,255,.2)">' + companyInitials + '</div>'
      + '<div style="flex:1;min-width:0">'
      + '<div style="font-size:19px;font-weight:800;color:#fff;line-height:1.2;margin-bottom:4px">' + H.escHtml(l.title) + '</div>'
      + '<div style="font-size:14px;color:rgba(255,255,255,.8);font-weight:600">' + H.escHtml(company) + '</div>'
      + '</div></div>'
      + '<div style="display:flex;flex-wrap:wrap;margin-bottom:4px">'
      + (jobType  ? '<span style="' + chipStyle + ';background:rgba(255,255,255,.18);color:#fff">' + H.escHtml(jobType)  + '</span>' : '')
      + (industry ? '<span style="' + chipStyle + ';background:#F5A62330;color:#F5A623">'         + H.escHtml(industry) + '</span>' : '')
      + '<span style="' + chipStyle + ';background:rgba(255,255,255,.12);color:rgba(255,255,255,.8)">'
      + '<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
      + H.escHtml(l.city || 'Zimbabwe') + '</span>'
      + '<span style="' + chipStyle + ';background:rgba(255,255,255,.12);color:rgba(255,255,255,.8)">'
      + '<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
      + H.timeAgo(l.createdAt) + '</span>'
      + '</div></div>'

      + '<div style="padding:0 12px">'
      + '<div style="background:var(--card);border-radius:16px;margin-top:-14px;padding:16px;border:1px solid var(--border);display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:12px">'
      + _ji('Salary', salary) + _ji('Location', l.city || 'Zimbabwe')
      + (deadline ? _ji('Deadline', deadline) : _ji('Status', l.status === 'active' ? 'Open' : 'Closed'))
      + _ji('Posted', H.timeAgo(l.createdAt))
      + '</div>'

      + (description      ? _jb('About the Role',       description)      : '')
      + (responsibilities ? _jb('Key Responsibilities', responsibilities) : '')
      + (requirements     ? _jb('Requirements',         requirements)     : '')

      + ((applyEmail || applyPhone) ? '<div style="background:var(--card);border-radius:14px;padding:16px;margin-bottom:12px;border:1px solid var(--border)">'
        + '<div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:12px">How to Apply</div>'
        + (applyEmail ? '<a href="mailto:' + H.escHtml(applyEmail) + '?subject=' + encodeURIComponent('Application: ' + l.title) + '" style="display:flex;align-items:center;gap:10px;padding:11px 14px;background:#1A3A8F15;border-radius:10px;margin-bottom:8px;text-decoration:none"><span style="font-size:16px">📧</span><span style="font-size:13px;font-weight:600;color:#1A3A8F">' + H.escHtml(applyEmail) + '</span></a>' : '')
        + (applyPhone ? '<button onclick="window.open(\'https://wa.me/' + H.escHtml(applyPhone) + '?text=' + encodeURIComponent('Hi, I am interested in the ' + l.title + ' position at ' + company) + '\',\'_blank\')" style="display:flex;align-items:center;gap:10px;padding:11px 14px;background:#25D36615;border-radius:10px;width:100%;border:none;cursor:pointer"><span style="font-size:16px">💬</span><span style="font-size:13px;font-weight:600;color:#25D366">WhatsApp: ' + H.escHtml(applyPhone) + '</span></button>' : '')
        + '</div>' : '')

      + '<div style="height:90px"></div></div>'

      + '<div style="position:fixed;bottom:0;left:0;right:0;background:var(--card);padding:12px 16px;padding-bottom:calc(12px + env(safe-area-inset-bottom));border-top:1px solid var(--border);z-index:200">'
      + (isMine
        ? '<button onclick="H.openInner(\'JobApplications\',{jobId:\'' + id + '\'})" style="width:100%;padding:14px;background:#1A3A8F;color:#fff;border:none;border-radius:13px;font-size:15px;font-weight:800;cursor:pointer">View Applications (' + appCount + ')</button>'
        : myApp
          ? '<div style="padding:14px;background:#dcfce7;border-radius:13px;text-align:center;font-size:14px;font-weight:700;color:#15803d">✓ Application Submitted · ' + H.timeAgo(myApp.appliedAt) + '</div>'
          : '<button onclick="H._applyToJob(\'' + id + '\')" style="width:100%;padding:14px;background:linear-gradient(135deg,#1A3A8F,#2952cc);color:#fff;border:none;border-radius:13px;font-size:15px;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 2 15 22 11 13 2 9 22 2"/></svg>Easy Apply in App</button>'
      )
      + '</div></div>';
  };

  H._applyToJob = function (jobId) {
    if (!H.currentUser()) { H.requireAuth('Sign in to apply for jobs'); return; }
    var l = (H.state.listings || []).find(function(x){ return x.id === jobId; });
    if (!l) { H.toast('Job not found'); return; }
    var company = l.company || l.sellerName || 'Company';
    H.modal({
      title: 'Apply: ' + l.title,
      body: '<div style="margin-bottom:10px;font-size:13px;color:var(--sub)">at <strong>' + H.escHtml(company) + '</strong> · ' + H.escHtml(l.city || 'Zimbabwe') + '</div>'
        + '<textarea id="applyMsg" rows="4" placeholder="Introduce yourself — your experience, why you\'re a great fit, and any relevant skills…" style="width:100%;padding:12px;border:1.5px solid var(--border);border-radius:12px;font-size:13px;background:var(--card);color:var(--text);outline:none;box-sizing:border-box;resize:vertical;font-family:Inter,sans-serif"></textarea>'
        + '<div style="font-size:11px;color:var(--sub);margin-top:6px">Your name and contact details from your profile will be shared with the employer.</div>',
      confirmText: 'Submit Application',
      onConfirm: function() {
        var msg = (document.getElementById('applyMsg') || {}).value || '';
        H._submitJobApplication(jobId, msg);
      }
    });
  };

  H._submitJobApplication = function (jobId, message) {
    var u = H.currentUser(); if (!u) return;
    var l = (H.state.listings || []).find(function(x){ return x.id === jobId; }); if (!l) return;
    var company = l.company || l.sellerName || 'Company';
    H.state.applications = H.state.applications || [];
    var existing = H.state.applications.find(function(a){ return a.jobId === jobId && a.applicantId === u.id; });
    if (existing) { H.toast('You already applied for this job'); return; }
    var app = {
      id: H.uid(), jobId: jobId, jobTitle: l.title, company: company,
      applicantId: u.id, applicantName: u.name || 'Applicant',
      applicantPhone: u.phone || '', applicantEmail: u.email || '',
      message: message, status: 'pending', appliedAt: Date.now(),
      employerId: l.sellerId
    };
    H.state.applications.push(app);
    H.saveState();
    if (typeof H.saveApplicationToCloud === 'function') H.saveApplicationToCloud(app);
    if (l.sellerId) H.pushNotif(l.sellerId, 'New Application', u.name + ' applied for ' + l.title, 'message');
    H.toast('Application submitted! The employer will be in touch.');
    H.renderPage('JobDetail', {id: jobId});
    H.state.conversations = H.state.conversations || [];
    var ids = [u.id, l.sellerId].sort();
    var convId = 'job_' + app.id.slice(-8);
    if (!H.state.conversations.find(function(c){ return c.id === convId; })) {
      H.state.conversations.push({
        id: convId, members: [u.id, l.sellerId], listingId: jobId,
        appId: app.id, isJobThread: true,
        messages: message ? [{id: H.uid(), senderId: u.id, text: message, t: Date.now()}] : []
      });
      H.saveState();
    }
  };

  H.pages.JobApplications = function (params) {
    var jobId = params && params.jobId;
    var u = H.currentUser();
    if (!u) return '<div class="page active">' + H.innerTopbar('Applications') + H.emptyState('Sign in required', '', null, null) + '</div>';
    var l = (H.state.listings || []).find(function(x){ return x.id === jobId; });
    var title = l ? l.title : 'Job';
    var apps = (H.state.applications || []).filter(function(a){ return a.jobId === jobId; })
      .sort(function(a,b){ return b.appliedAt - a.appliedAt; });

    var statusColors = { pending:'#F5A623', reviewed:'#1A3A8F', shortlisted:'#22c55e', rejected:'#ef4444' };
    var statusLabels = { pending:'New', reviewed:'Reviewed', shortlisted:'Shortlisted', rejected:'Rejected' };

    return '<div class="page active">'
      + H.innerTopbar('Applications for ' + H.escHtml(title))
      + '<div style="padding:12px 14px 16px;background:var(--card);border-bottom:1px solid var(--border)">'
      + '<div style="font-size:22px;font-weight:800;color:var(--text)">' + apps.length + ' Application' + (apps.length===1?'':'s') + '</div>'
      + '<div style="font-size:13px;color:var(--sub);margin-top:2px">' + H.escHtml(title) + '</div>'
      + '</div>'
      + '<div style="padding:12px 14px 88px">'
      + (apps.length ? apps.map(function(app) {
          var statusC = statusColors[app.status] || '#999';
          var statusL = statusLabels[app.status] || app.status;
          var ini = (app.applicantName||'A').split(' ').map(function(w){return w[0];}).join('').toUpperCase().slice(0,2);
          return '<div style="background:var(--card);border-radius:14px;padding:16px;margin-bottom:10px;border:1px solid var(--border)">'
            + '<div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:12px">'
            + '<div style="width:44px;height:44px;border-radius:50%;background:#1A3A8F;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;color:#fff;flex-shrink:0">' + ini + '</div>'
            + '<div style="flex:1;min-width:0">'
            + '<div style="display:flex;justify-content:space-between;align-items:flex-start">'
            + '<div style="font-size:15px;font-weight:700;color:var(--text)">' + H.escHtml(app.applicantName || 'Applicant') + '</div>'
            + '<span style="background:' + statusC + '20;color:' + statusC + ';font-size:11px;font-weight:700;padding:3px 8px;border-radius:20px">' + statusL + '</span>'
            + '</div>'
            + '<div style="font-size:12px;color:var(--sub);margin-top:2px">' + H.timeAgo(app.appliedAt) + '</div>'
            + (app.applicantPhone ? '<div style="font-size:12px;color:var(--sub);margin-top:2px">' + H.escHtml(app.applicantPhone) + '</div>' : '')
            + '</div></div>'
            + (app.message ? '<div style="font-size:13px;color:var(--text);line-height:1.6;padding:10px 12px;background:var(--bg);border-radius:10px;margin-bottom:12px">' + H.escHtml(app.message.slice(0,200)) + (app.message.length>200?'…':'') + '</div>' : '')
            + '<div style="display:flex;gap:8px">'
            + '<button onclick="H._setAppStatus(\'' + app.id + '\',\'shortlisted\')" style="flex:1;padding:8px;background:#22c55e15;color:#15803d;border:1.5px solid #22c55e40;border-radius:9px;font-size:12px;font-weight:700;cursor:pointer">Shortlist</button>'
            + '<button onclick="H._setAppStatus(\'' + app.id + '\',\'rejected\')" style="flex:1;padding:8px;background:#ef444415;color:#dc2626;border:1.5px solid #ef444440;border-radius:9px;font-size:12px;font-weight:700;cursor:pointer">Decline</button>'
            + (app.applicantPhone ? '<button onclick="window.open(\'https://wa.me/' + app.applicantPhone.replace(/[^\d]/g,'') + '\',\'_blank\')" style="flex:1;padding:8px;background:#25D36615;color:#25D366;border:1.5px solid #25D36640;border-radius:9px;font-size:12px;font-weight:700;cursor:pointer">WhatsApp</button>' : '')
            + '</div></div>';
        }).join('')
        : H.emptyState('No applications yet', 'Share your job posting to attract candidates.', null, null))
      + '</div></div>';
  };

  H._setAppStatus = function (appId, status) {
    var app = (H.state.applications || []).find(function(a){ return a.id === appId; });
    if (!app) return;
    app.status = status;
    H.saveState();
    if (typeof H.updateApplicationStatusCloud === 'function') H.updateApplicationStatusCloud(appId, status);
    var u = H.currentUser();
    var jobId = app.jobId;
    H.toast(status === 'shortlisted' ? 'Shortlisted!' : 'Declined');
    if (app.applicantId) {
      H.pushNotif(app.applicantId,
        status === 'shortlisted' ? 'Application Update' : 'Application Update',
        status === 'shortlisted'
          ? 'Congratulations! Your application for ' + app.jobTitle + ' has been shortlisted.'
          : 'Your application for ' + app.jobTitle + ' was not selected at this time.',
        status === 'shortlisted' ? 'verify' : 'info'
      );
    }
    H.renderPage('JobApplications', {jobId: jobId});
  };

  H.pages.AppliedJobs = function () {
    var u = H.currentUser();
    if (!u) return '<div class="page active">' + H.innerTopbar('My Applications') + H.emptyState('Sign in required', '', null, null) + '</div>';
    var apps = (H.state.applications || []).filter(function(a){ return a.applicantId === u.id; })
      .sort(function(a,b){ return b.appliedAt - a.appliedAt; });
    var statusColors = { pending:'#F5A623', reviewed:'#1A3A8F', shortlisted:'#22c55e', rejected:'#ef4444' };
    var statusLabels = { pending:'Pending', reviewed:'Reviewed', shortlisted:'✓ Shortlisted', rejected:'Not selected' };

    return '<div class="page active">'
      + H.innerTopbar('My Applications')
      + '<div style="padding:12px 14px 88px">'
      + (apps.length ? apps.map(function(app) {
          var statusC = statusColors[app.status] || '#999';
          var statusL = statusLabels[app.status] || app.status;
          return '<div onclick="H.openInner(\'JobDetail\',{id:\'' + app.jobId + '\'})" style="background:var(--card);border-radius:14px;padding:16px;margin-bottom:10px;border:1px solid var(--border);cursor:pointer">'
            + '<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px">'
            + '<div style="font-size:15px;font-weight:700;color:var(--text);flex:1;margin-right:10px">' + H.escHtml(app.jobTitle || 'Job') + '</div>'
            + '<span style="background:' + statusC + '20;color:' + statusC + ';font-size:11px;font-weight:700;padding:3px 8px;border-radius:20px;flex-shrink:0">' + statusL + '</span>'
            + '</div>'
            + '<div style="font-size:13px;color:var(--sub);margin-bottom:4px">' + H.escHtml(app.company || '') + '</div>'
            + '<div style="font-size:12px;color:var(--sub2)">Applied ' + H.timeAgo(app.appliedAt) + '</div>'
            + '</div>';
        }).join('')
        : H.emptyState('No applications yet', 'Browse jobs and apply directly in the app.', 'Browse Jobs', "H.openInner('FindJobs')"))
      + '</div></div>';
  };

  H.pages.CandidateProfile = function () {
    var u = H.currentUser();
    if (!u) return '<div class="page active">' + H.innerTopbar('Job Seeker Profile') + H.emptyState('Sign in required', 'Sign in to set up your job seeker profile', 'Sign In', "H.requireAuth('Job seeker profile')") + '</div>';
    var ZW = H._ZW_CITIES || [];
    var expLevels = [['entry','Entry Level (0-2 yrs)'],['mid','3-5 Years'],['senior','5-10 Years'],['expert','10+ Years']];
    var on = u.openToWork ? '1' : '0';
    var togBg = u.openToWork ? '#22c55e' : 'var(--border)';
    var togLeft = u.openToWork ? '23px' : '3px';

    return '<div class="page active">'
      + H.innerTopbar('Job Seeker Profile')
      + '<div style="margin:12px 14px;background:#22c55e18;border-radius:12px;padding:12px 14px;display:flex;gap:10px">'
      + '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#15803d" stroke-width="2" style="flex-shrink:0;margin-top:1px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
      + '<div style="font-size:12px;color:#15803d;font-weight:600;line-height:1.6">Employers in Hire Talent can find and contact you when you turn on Open to Work.</div>'
      + '</div>'
      + '<div style="padding:0 14px 100px">'
      + '<div style="margin-bottom:16px;background:var(--card);border-radius:12px;padding:16px;border:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">'
      + '<div><div style="font-size:15px;font-weight:700;color:var(--text)">Open to Work</div><div style="font-size:12px;color:var(--sub);margin-top:2px">Appear in employer searches</div></div>'
      + '<div id="otwTog" onclick="var o=this.dataset.on===\'1\'?\'0\':\'1\';this.dataset.on=o;this.style.background=o===\'1\'?\'#22c55e\':\'var(--border)\';this.querySelector(\'div\').style.left=o===\'1\'?\'23px\':\'3px\'" data-on="' + on + '" style="width:46px;height:26px;border-radius:13px;background:' + togBg + ';position:relative;cursor:pointer;transition:background .2s;flex-shrink:0">'
      + '<div style="position:absolute;top:3px;left:' + togLeft + ';width:20px;height:20px;border-radius:50%;background:#fff;transition:left .2s;box-shadow:0 1px 4px rgba(0,0,0,.2)"></div></div>'
      + '</div>'
      + '<div style="margin-bottom:14px"><label style="font-size:12px;font-weight:700;color:var(--text);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Current / Desired Job Title</label>'
      + '<input id="cpTitle" placeholder="e.g. Accountant, Driver, Teacher" value="' + H.escHtml(u.jobTitle || '') + '" style="width:100%;padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text);outline:none;box-sizing:border-box"></div>'
      + '<div style="margin-bottom:14px"><label style="font-size:12px;font-weight:700;color:var(--text);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Skills <span style="font-weight:400;text-transform:none">(comma-separated)</span></label>'
      + '<input id="cpSkills" placeholder="e.g. Excel, Driving, Sales, Customer Service" value="' + H.escHtml(u.skills || '') + '" style="width:100%;padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text);outline:none;box-sizing:border-box"></div>'
      + '<div style="margin-bottom:14px"><label style="font-size:12px;font-weight:700;color:var(--text);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Industry / Sector</label>'
      + '<select id="cpSector" style="width:100%;padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text);outline:none"><option value="">Select sector…</option>'
      + JOB_CATS.map(function (c) { return '<option value="' + H.escHtml(c) + '"' + (u.sector === c ? ' selected' : '') + '>' + H.escHtml(c) + '</option>'; }).join('')
      + '</select></div>'
      + '<div style="margin-bottom:14px"><label style="font-size:12px;font-weight:700;color:var(--text);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Experience Level</label>'
      + '<select id="cpExp" style="width:100%;padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text);outline:none"><option value="">Select level…</option>'
      + expLevels.map(function (e) { return '<option value="' + e[0] + '"' + (u.exp === e[0] ? ' selected' : '') + '>' + H.escHtml(e[1]) + '</option>'; }).join('')
      + '</select></div>'
      + '<div style="margin-bottom:20px"><label style="font-size:12px;font-weight:700;color:var(--text);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">City</label>'
      + '<select id="cpCity" style="width:100%;padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text);outline:none"><option value="">Select city…</option>'
      + ZW.map(function (c) { return '<option value="' + H.escHtml(c) + '"' + (u.city === c ? ' selected' : '') + '>' + H.escHtml(c) + '</option>'; }).join('')
      + '<option value="Remote"' + (u.city === 'Remote' ? ' selected' : '') + '>Remote / Any</option>'
      + '</select></div>'
      + '</div>'
      + '<div style="position:fixed;bottom:0;left:0;right:0;background:var(--card);padding:12px 16px;padding-bottom:calc(12px + env(safe-area-inset-bottom));border-top:1px solid var(--border);z-index:200">'
      + '<button id="cpSaveBtn" onclick="H._saveCandidateProfile()" style="width:100%;padding:15px;background:linear-gradient(135deg,#22c55e,#15803d);color:#fff;border:none;border-radius:14px;font-size:15px;font-weight:800;cursor:pointer">Save Profile</button>'
      + '</div></div>';
  };

  H._saveCandidateProfile = function () {
    var u = H.currentUser(); if (!u) return;
    var btn = document.getElementById('cpSaveBtn');
    if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
    u.openToWork = (document.getElementById('otwTog') || {}).dataset && document.getElementById('otwTog').dataset.on === '1';
    u.jobTitle   = ((document.getElementById('cpTitle')  || {}).value || '').trim();
    u.skills     = ((document.getElementById('cpSkills') || {}).value || '').trim();
    u.sector     = (document.getElementById('cpSector')  || {}).value || '';
    u.exp        = (document.getElementById('cpExp')     || {}).value || '';
    u.city       = (document.getElementById('cpCity')    || {}).value || '';
    H.saveState();
    var _sb = window.supabase;
    if (_sb && typeof _sb.from === 'function') {
      _sb.from('profiles').upsert({
        id: u.id, open_to_work: u.openToWork,
        job_title: u.jobTitle || null, skills: u.skills || null,
        sector: u.sector || null, exp: u.exp || null, city: u.city || null
      }).then(function (res) {
        if (res && res.error) console.warn('Candidate profile sync:', res.error.message);
      });
    }
    H.toast(u.openToWork ? 'Profile saved — employers can now find you!' : 'Profile saved — you are hidden from employer searches');
    H.goBack();
  };

  function _ji(label, value) {
    return '<div><div style="font-size:10px;color:var(--sub);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">' + label + '</div><div style="font-size:13px;font-weight:700;color:var(--text)">' + H.escHtml(String(value)) + '</div></div>';
  }

  function _jb(sectionTitle, text) {
    return '<div style="background:var(--card);border-radius:14px;padding:16px;margin-bottom:10px;border:1px solid var(--border)">'
      + '<div style="font-size:14px;font-weight:800;color:var(--text);margin-bottom:10px;display:flex;align-items:center;gap:8px">'
      + '<div style="width:3px;height:16px;background:#1A3A8F;border-radius:2px"></div>' + sectionTitle + '</div>'
      + '<div style="font-size:13px;color:var(--sub);line-height:1.8;white-space:pre-line">' + H.escHtml(text) + '</div></div>';
  }

})(window.H);
