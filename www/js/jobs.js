'use strict';
(function (H) {

  var JOB_CATS = ['Accounting & Finance','Sales & Marketing','IT & Technology','Construction',
    'Healthcare','Education','Hospitality','Administration','Engineering','Driving & Logistics',
    'Legal','Media & Communications','Agriculture','Security','Domestic & Cleaning'];

  var EXP_LEVELS = [['any','Any Experience'],['entry','Entry Level (0-2 yrs)'],['mid','Mid Level (3-5 yrs)'],['senior','Senior (5-10 yrs)'],['expert','Expert (10+ yrs)']];
  var AVAIL_OPTS  = [['immediately','Immediately'],['2weeks','Within 2 weeks'],['1month','Within 1 month'],['negotiable','Negotiable']];
  var EDU_LEVELS  = [['any','Any'],['none','No formal qualification'],['certificate','Certificate / Diploma'],['degree','Bachelor\'s Degree'],['postgrad','Postgraduate']];

  // ── HELPERS ───────────────────────────────────────────────
  function parseLine(lines, key) {
    var found = lines.find(function(ln){ return ln.startsWith(key + ':'); });
    return found ? found.slice(key.length + 1).trim() : '';
  }

  function getJobData(l) {
    if (l.jobData) return l.jobData;
    var lines = (l.desc || '').split('\n');
    return {
      company:  l.company || l.sellerName || parseLine(lines,'COMPANY') || '',
      jobType:  parseLine(lines,'JOB TYPE') || '',
      industry: parseLine(lines,'INDUSTRY') || '',
      salary:   parseLine(lines,'SALARY')   || '',
      deadline: parseLine(lines,'DEADLINE') || '',
      exp:      '',  benefits: '',  positions: '1',  eduReq: '',
      applyEmail: '', applyPhone: '', applyUrl: '', applyMethod: 'inapp',
      description:     _extractSection(l.desc, 'DESCRIPTION',     ['RESPONSIBILITIES','REQUIREMENTS','HOW TO APPLY']),
      responsibilities: _extractSection(l.desc,'RESPONSIBILITIES', ['REQUIREMENTS','HOW TO APPLY']),
      requirements:    _extractSection(l.desc, 'REQUIREMENTS',    ['HOW TO APPLY'])
    };
  }

  function _extractSection(desc, key, ends) {
    if (!desc) return '';
    var start = desc.indexOf('\n' + key + ':\n');
    if (start < 0) return '';
    start += key.length + 3;
    var end = desc.length;
    ends.forEach(function(e){ var i = desc.indexOf('\n' + e + ':'); if (i > start) end = Math.min(end, i); });
    return desc.slice(start, end).trim();
  }

  function jobCard(l) {
    var jd = getJobData(l);
    var deadline = jd.deadline ? ' · Deadline: ' + jd.deadline : '';
    var daysLeft = '';
    if (jd.deadline) {
      var d = new Date(jd.deadline); var now = new Date();
      var days = Math.ceil((d - now) / 86400000);
      if (days >= 0 && days <= 7) daysLeft = '<span style="background:#fee2e2;color:#dc2626;font-size:10px;font-weight:700;padding:2px 6px;border-radius:6px;margin-left:4px">' + (days === 0 ? 'Today!' : days + 'd left') + '</span>';
    }
    var apps = (H.state.applications || []).filter(function(a){ return a.jobId === l.id; }).length;
    return '<div onclick="H.openInner(\'JobDetail\',{id:\'' + l.id + '\'})" style="background:var(--card);border-radius:14px;padding:16px;margin-bottom:10px;border:1px solid var(--border);cursor:pointer;box-shadow:0 1px 4px rgba(0,0,0,.06)">'
      + '<div style="display:flex;align-items:flex-start;gap:12px">'
      + '<div style="width:44px;height:44px;border-radius:12px;background:#F5A62320;display:flex;align-items:center;justify-content:center;flex-shrink:0">'
      + '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#c07800" stroke-width="2"><rect x="2" y="7" width="20" height="13" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg></div>'
      + '<div style="flex:1;min-width:0">'
      + '<div style="display:flex;align-items:center;flex-wrap:wrap;gap:4px;margin-bottom:2px">'
      + '<div style="font-size:15px;font-weight:700;color:var(--text-primary)">' + H.escHtml(l.title) + '</div>' + daysLeft + '</div>'
      + '<div style="font-size:13px;color:var(--text-sub);margin-bottom:8px">' + H.escHtml(jd.company || l.sellerName || '') + (jd.industry ? ' · ' + H.escHtml(jd.industry) : '') + '</div>'
      + '<div style="display:flex;flex-wrap:wrap;gap:5px">'
      + (jd.jobType ? '<span style="background:#1A3A8F18;color:#1A3A8F;font-size:11px;font-weight:700;padding:3px 8px;border-radius:6px">' + H.escHtml(jd.jobType) + '</span>' : '')
      + (jd.salary  ? '<span style="background:#F5A62318;color:#c07800;font-size:11px;font-weight:700;padding:3px 8px;border-radius:6px">' + H.escHtml(jd.salary) + '</span>' : '')
      + '<span style="background:var(--bg);color:var(--text-sub);font-size:11px;font-weight:600;padding:3px 8px;border-radius:6px">' + H.escHtml(l.city || 'Zimbabwe') + '</span>'
      + (apps > 0 ? '<span style="color:var(--text-sub);font-size:11px;padding:3px 0">' + apps + ' applied</span>' : '')
      + '<span style="color:var(--text-sub);font-size:11px;padding:3px 0">' + H.timeAgo(l.createdAt) + '</span>'
      + '</div></div></div></div>';
  }

  // ── JOBS LANDING ──────────────────────────────────────────
  H.pages.Jobs = function () {
    var u    = H.currentUser();
    var jobs = (H.state.listings || []).filter(function(l){ return l.status === 'active' && l.cat === 'jobs'; });
    var myApps = u ? (H.state.applications || []).filter(function(a){ return a.applicantId === u.id; }) : [];
    var candidates = (H.state.users || []).filter(function(u){ return u.openToWork; });
    var recent = jobs.slice().sort(function(a,b){ return b.createdAt - a.createdAt; }).slice(0,5);
    var myJobs = u ? jobs.filter(function(l){ return l.sellerId === u.id; }) : [];

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
      + '<input placeholder="Search job title, company, skills…" autocomplete="off" oninput="H.openInner(\'FindJobs\',{q:this.value})" style="flex:1;border:none;outline:none;padding:14px 0;font-size:14px;background:transparent;color:#1A3A8F;font-family:Inter,sans-serif">'
      + '</div></div>'
      + '<div style="padding:16px 14px;display:grid;grid-template-columns:1fr 1fr;gap:10px">'
      + '<div onclick="H.openInner(\'FindJobs\')" style="background:#1A3A8F;border-radius:16px;padding:18px 14px;cursor:pointer;box-shadow:0 4px 16px rgba(26,58,143,.25)">'
      + '<div style="font-size:26px;margin-bottom:8px">💼</div>'
      + '<div style="font-size:15px;font-weight:800;color:#fff;margin-bottom:2px">Find Jobs</div>'
      + '<div style="font-size:11px;color:rgba(255,255,255,.7)">' + jobs.length + ' openings</div></div>'
      + '<div onclick="H.openInner(\'HireTalent\')" style="background:#fff;border-radius:16px;padding:18px 14px;cursor:pointer;box-shadow:0 4px 16px rgba(0,0,0,.08);border:2px solid #F5A623">'
      + '<div style="font-size:26px;margin-bottom:8px">🔍</div>'
      + '<div style="font-size:15px;font-weight:800;color:#1A3A8F;margin-bottom:2px">Hire Talent</div>'
      + '<div style="font-size:11px;color:var(--text-sub)">' + candidates.length + ' candidate' + (candidates.length !== 1 ? 's' : '') + '</div></div>'
      + (u ? '<div onclick="H.openInner(\'AppliedJobs\')" style="background:var(--card);border-radius:16px;padding:18px 14px;cursor:pointer;border:1.5px solid var(--border)">'
        + '<div style="font-size:26px;margin-bottom:8px">📋</div>'
        + '<div style="font-size:15px;font-weight:800;color:var(--text-primary);margin-bottom:2px">My Applications</div>'
        + '<div style="font-size:11px;color:var(--text-sub)">' + myApps.length + ' submitted</div></div>' : '')
      + (u ? '<div onclick="H._toggleOpenToWork()" style="background:var(--card);border-radius:16px;padding:18px 14px;cursor:pointer;border:1.5px solid ' + (u.openToWork ? '#22c55e' : 'var(--border)') + '">'
        + '<div style="font-size:26px;margin-bottom:8px">' + (u.openToWork ? '🟢' : '⚪') + '</div>'
        + '<div style="font-size:15px;font-weight:800;color:var(--text-primary);margin-bottom:2px">Open to Work</div>'
        + '<div style="font-size:11px;color:' + (u.openToWork ? '#22c55e' : 'var(--text-sub)') + '">' + (u.openToWork ? 'Profile visible' : 'Tap to enable') + '</div></div>' : '')
      + '</div>'
      + (myJobs.length ? '<div style="padding:0 14px 12px"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px"><div style="font-size:15px;font-weight:800;color:var(--text-primary)">My Job Postings</div></div>'
        + myJobs.slice(0,3).map(function(l){
          var apps = (H.state.applications || []).filter(function(a){ return a.jobId === l.id; }).length;
          return '<div style="background:var(--card);border-radius:12px;padding:14px;margin-bottom:8px;border:1px solid var(--border);display:flex;align-items:center;gap:12px;cursor:pointer" onclick="H.openInner(\'JobApplications\',{jobId:\'' + l.id + '\'})">'
            + '<div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:700;color:var(--text-primary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + H.escHtml(l.title) + '</div>'
            + '<div style="font-size:12px;color:var(--text-sub);margin-top:2px">' + H.timeAgo(l.createdAt) + '</div></div>'
            + '<div style="text-align:center;flex-shrink:0"><div style="font-size:20px;font-weight:900;color:#1A3A8F">' + apps + '</div><div style="font-size:10px;color:var(--text-sub);font-weight:600">App' + (apps!==1?'s':'') + '</div></div></div>';
        }).join('') + '</div>' : '')
      + '<div style="padding:0 14px 12px">'
      + '<div style="font-size:15px;font-weight:800;color:var(--text-primary);margin-bottom:10px">Browse by Category</div>'
      + '<div style="display:flex;flex-wrap:wrap;gap:8px">'
      + JOB_CATS.map(function(cat){
        var cnt = jobs.filter(function(j){ return (j.title + ' ' + (j.desc || '') + ' ' + (j.jobData ? JSON.stringify(j.jobData) : '')).toLowerCase().includes(cat.split(' ')[0].toLowerCase()); }).length;
        return '<div onclick="H.openInner(\'FindJobs\',{cat:\'' + H.escHtml(cat) + '\'})" style="background:var(--card);border:1px solid var(--border);border-radius:20px;padding:7px 13px;cursor:pointer;font-size:12px;font-weight:600;color:var(--text-mid)">' + H.escHtml(cat) + '<span style="color:var(--text-sub);margin-left:4px">(' + cnt + ')</span></div>';
      }).join('') + '</div></div>'
      + (recent.length ? '<div style="padding:0 14px 16px"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px"><div style="font-size:15px;font-weight:800;color:var(--text-primary)">Recent Openings</div><button onclick="H.openInner(\'FindJobs\')" style="background:none;border:none;color:#1A3A8F;font-size:12px;font-weight:700;cursor:pointer;padding:0">View All →</button></div>' + recent.map(jobCard).join('') + '</div>' : '')
      + '<div style="margin:0 14px 88px;background:linear-gradient(135deg,#1A3A8F,#0f2460);border-radius:16px;padding:20px">'
      + '<div style="font-size:16px;font-weight:800;color:#fff;margin-bottom:6px">Hiring? Post a Job Free</div>'
      + '<div style="font-size:13px;color:rgba(255,255,255,.7);margin-bottom:14px">Reach thousands of qualified candidates across Zimbabwe</div>'
      + '<button onclick="H.openInner(\'PostJob\')" style="background:#F5A623;border:none;color:#1A3A8F;font-size:14px;font-weight:800;padding:12px 24px;border-radius:10px;cursor:pointer">Post a Job →</button>'
      + '</div></div>';
  };

  H._toggleOpenToWork = function() {
    var u = H.currentUser(); if (!u) { H.requireAuth('Sign in to set your availability'); return; }
    u.openToWork = !u.openToWork;
    H.saveState();
    H.toast(u.openToWork ? '🟢 You are now visible to employers' : 'Open to Work disabled');
    H.renderPage('Jobs');
  };

  // ── FIND JOBS ─────────────────────────────────────────────
  H.pages.FindJobs = function(params) {
    params = params || {};
    var jobs = (H.state.listings || []).filter(function(l){ return l.status === 'active' && l.cat === 'jobs'; })
      .sort(function(a,b){ return b.createdAt - a.createdAt; });

    var filterHtml = H._sel('findjobs','subcat','Category',[['all','All Categories']].concat(JOB_CATS.map(function(c){return [c,c];})))
      + H._sel('findjobs','fuelType','Job Type',[['all','All'],['full-time','Full-time'],['part-time','Part-time'],['contract','Contract'],['freelance','Freelance'],['internship','Internship']])
      + H._sel('findjobs','propType','Experience',EXP_LEVELS)
      + H._sel('findjobs','edu','Education',EDU_LEVELS)
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
      + '<div style="display:flex;gap:8px;margin-top:4px"><button onclick="H._clearFilters(\'findjobs\')" style="flex:1;padding:10px;background:var(--bg);border:1px solid var(--border);border-radius:10px;font-size:13px;font-weight:600;color:var(--text-sub);cursor:pointer">Clear</button>'
      + '<button onclick="H._toggleFilters(\'findjobs\')" style="flex:2;padding:10px;background:#F5A623;border:none;border-radius:10px;font-size:13px;font-weight:700;color:#1A3A8F;cursor:pointer">Apply Filters</button>'
      + '</div></div>'
      + '<div id="cl_findjobs" style="padding:12px 12px 88px">'
      + (jobs.length ? jobs.map(jobCard).join('') : H.emptyState('No jobs yet','Check back soon!','Post a Job',"H.openInner('PostJob')"))
      + '</div></div>';
  };

  H.pages.FindJobs_after = function(params) {
    params = params || {};
    H._filters['findjobs'] = {};
    if (params.cat) H._filters['findjobs'].subcat = params.cat;
    H._applyJobFilters();
  };

  H._applyJobFilters = function() {
    var el = document.getElementById('cl_findjobs'); if (!el) return;
    var f = H._filters['findjobs'] || {};
    var jobs = (H.state.listings || []).filter(function(l){ return l.status === 'active' && l.cat === 'jobs'; });
    var q = ((document.getElementById('cs_findjobs') || {}).value || '').toLowerCase().trim();
    if (q) jobs = jobs.filter(function(l){
      var jd = l.jobData || {};
      return (l.title + ' ' + (l.desc||'') + ' ' + (l.city||'') + ' ' + (jd.company||l.sellerName||'') + ' ' + (jd.industry||'')).toLowerCase().includes(q);
    });
    if (f.city && f.city !== 'all') jobs = jobs.filter(function(l){ return (l.city+' '+(l.prov||'')).toLowerCase().includes(f.city.toLowerCase()); });
    if (f.subcat && f.subcat !== 'all') jobs = jobs.filter(function(l){ return (l.title+' '+(l.desc||'')+' '+JSON.stringify(l.jobData||{})).toLowerCase().includes(f.subcat.split(' ')[0].toLowerCase()); });
    if (f.fuelType && f.fuelType !== 'all') jobs = jobs.filter(function(l){ var jd=l.jobData||{}; return (jd.jobType||'').toLowerCase().includes(f.fuelType.replace('-',' '))||(l.desc||'').toLowerCase().includes(f.fuelType.replace('-',' ')); });
    if (f.priceMin) jobs = jobs.filter(function(l){ return (l.price||0) >= +f.priceMin; });
    if (f.priceMax) jobs = jobs.filter(function(l){ return (l.price||0) <= +f.priceMax; });
    jobs.sort(function(a,b){ return b.createdAt - a.createdAt; });
    el.innerHTML = jobs.length ? jobs.map(jobCard).join('') : H.emptyState('No jobs match','Try adjusting your filters',null,null);
    var cnt = document.getElementById('cc_findjobs');
    if (cnt) cnt.textContent = jobs.length + ' job' + (jobs.length!==1?'s':'');
    var n = Object.keys(f).filter(function(k){ return f[k] && f[k]!=='all' && f[k]!=='' && f[k]!=='newest'; }).length;
    var badge = document.getElementById('fb_findjobs');
    if (badge){ badge.textContent = n||''; badge.style.display = n?'flex':'none'; }
  };

  // ── POST JOB (ENHANCED) ───────────────────────────────────
  H.pages.PostJob = function() {
    var u = H.currentUser();
    if (!u) return '<div class="page active">' + H.innerTopbar('Post a Job') + H.emptyState('Sign in required','You must sign in to post a job','Sign In',"H.requireAuth('Post a job')") + '</div>';
    var ZW = H._ZW_CITIES || [];
    return '<div class="page active">'
      + '<div class="det-topbar"><button class="back" onclick="H.goBack()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button><div class="det-topbar-title">Post a Job</div></div>'
      + '<div style="margin:12px 14px;background:#1A3A8F18;border-radius:12px;padding:12px 14px;display:flex;gap:10px">'
      + '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1A3A8F" stroke-width="2" style="flex-shrink:0;margin-top:1px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
      + '<div style="font-size:12px;color:#1A3A8F;font-weight:600;line-height:1.6">Jobs are reviewed before going live. Posting is free. Complete all required fields for faster approval.</div>'
      + '</div>'
      + '<div style="padding:0 14px 110px">'

      // Company info
      + _sec('Company Information')
      + _field('jCompany','Company Name *','text','Your company or organisation name',H.escHtml(u.company||u.name||''))
      + '<div style="margin-bottom:14px;background:var(--card);border-radius:12px;padding:14px;border:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">'
      + '<div><div style="font-size:14px;font-weight:600;color:var(--text-primary)">Post Anonymously</div><div style="font-size:12px;color:var(--text-sub);margin-top:2px">Company name visible. Your personal identity hidden.</div></div>'
      + '<div id="anonTog" onclick="this.dataset.on=this.dataset.on===\'1\'?\'0\':\'1\';this.style.background=this.dataset.on===\'1\'?\'#1A3A8F\':\'var(--border)\';this.querySelector(\'div\').style.left=this.dataset.on===\'1\'?\'23px\':\'3px\';document.getElementById(\'jAnon\').value=this.dataset.on" data-on="0" style="width:46px;height:26px;border-radius:13px;background:var(--border);position:relative;cursor:pointer;transition:background .2s;flex-shrink:0"><div style="position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;transition:left .2s;box-shadow:0 1px 4px rgba(0,0,0,.2)"></div></div>'
      + '<input type="hidden" id="jAnon" value="0">'
      + '</div>'

      // Job details
      + _sec('Job Details')
      + _field('jTitle','Job Title *','text','e.g. Accountant, Driver, Sales Representative','')
      + _select('jCat','Job Category *',[['','Select category…']].concat(JOB_CATS.map(function(c){return [c,c];})))
      + _select('jLocation','Location *',[['','Select city…']].concat(ZW.map(function(c){return [c,c];})).concat([['Remote','Remote'],['Multiple Locations','Multiple Locations']]))
      + '<div style="margin-bottom:14px"><label style="font-size:12px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Job Type</label>'
      + '<div style="display:flex;flex-wrap:wrap;gap:10px">' + ['Full-time','Part-time','Contract','Freelance','Internship'].map(function(t,i){
        return '<label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="radio" name="jType" value="' + t + '"' + (i===0?' checked':'') + ' style="accent-color:#1A3A8F"><span style="font-size:13px;font-weight:600;color:var(--text-primary)">' + t + '</span></label>';
      }).join('') + '</div></div>'
      + '<div style="margin-bottom:14px;display:grid;grid-template-columns:1fr 1fr;gap:8px">'
      + '<div><label style="font-size:12px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Min Salary (USD)</label><input id="jSalMin" type="number" placeholder="e.g. 500" style="width:100%;padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text-primary);outline:none;box-sizing:border-box"></div>'
      + '<div><label style="font-size:12px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">Max Salary (USD)</label><input id="jSalMax" type="number" placeholder="e.g. 1500" style="width:100%;padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text-primary);outline:none;box-sizing:border-box"></div>'
      + '</div>'
      + _select('jExpReq','Experience Required',EXP_LEVELS)
      + _select('jEdu','Minimum Education',EDU_LEVELS)
      + _field('jPositions','Number of Openings','number','1','1')
      + _field('jDeadline','Application Deadline','date','','')

      // Description
      + _sec('Job Description')
      + _textarea('jDesc','Job Description *','Describe the role, the company culture, what a typical day looks like…',6)
      + _textarea('jResp','Key Responsibilities','List the main duties and responsibilities…',4)
      + _textarea('jReqs','Requirements & Qualifications','Experience, education, skills, certifications required…',4)
      + _textarea('jBenefits','Benefits & Perks','Medical aid, leave days, transport, bonus, training…',3)

      // How to Apply
      + _sec('How to Apply')
      + '<div style="margin-bottom:14px"><label style="font-size:12px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:8px">Application Method</label>'
      + '<div style="display:flex;flex-direction:column;gap:8px">'
      + ['In-App (recommended)','Email','WhatsApp','External URL'].map(function(m,i){
        return '<label style="display:flex;align-items:center;gap:10px;background:var(--card);border-radius:10px;padding:12px 14px;border:1.5px solid var(--border);cursor:pointer">'
          + '<input type="radio" name="jApplyMethod" value="' + ['inapp','email','whatsapp','url'][i] + '"' + (i===0?' checked':'') + ' onclick="H._toggleApplyMethod(this.value)" style="accent-color:#1A3A8F">'
          + '<span style="font-size:13px;font-weight:600;color:var(--text-primary)">' + m + '</span></label>';
      }).join('') + '</div></div>'
      + '<div id="jApplyEmailWrap" style="display:none">' + _field('jEmail','Email to Receive Applications','email','e.g. hr@company.co.zw',H.escHtml(u.email||'')) + '</div>'
      + '<div id="jApplyPhoneWrap" style="display:none">' + _field('jPhone','WhatsApp Number','tel','e.g. +263771234567',H.escHtml(u.phone||'')) + '</div>'
      + '<div id="jApplyUrlWrap" style="display:none">' + _field('jApplyUrl','Application URL','url','https://company.com/apply','') + '</div>'
      + '</div>'

      + '<div style="position:fixed;bottom:0;left:0;right:0;background:var(--card);padding:12px 16px;padding-bottom:calc(12px + env(safe-area-inset-bottom));border-top:1px solid var(--border);z-index:200">'
      + '<button onclick="H._submitJob()" style="width:100%;padding:15px;background:linear-gradient(135deg,#1A3A8F,#0f2460);color:#fff;border:none;border-radius:14px;font-size:15px;font-weight:800;cursor:pointer">Submit Job for Review →</button>'
      + '</div></div>';
  };

  H._toggleApplyMethod = function(method) {
    ['Email','Phone','Url'].forEach(function(m){ var el = document.getElementById('jApply' + m + 'Wrap'); if (el) el.style.display = 'none'; });
    if (method === 'email')    { var e = document.getElementById('jApplyEmailWrap'); if (e) e.style.display = 'block'; }
    if (method === 'whatsapp') { var e = document.getElementById('jApplyPhoneWrap'); if (e) e.style.display = 'block'; }
    if (method === 'url')      { var e = document.getElementById('jApplyUrlWrap'); if (e) e.style.display = 'block'; }
  };

  function _sec(title) {
    return '<div style="font-size:11px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.6px;margin:18px 0 10px;padding-top:6px;border-top:1px solid var(--border)">' + title + '</div>';
  }

  function _field(id, label, type, placeholder, value) {
    return '<div style="margin-bottom:14px"><label style="font-size:12px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">' + label + '</label>'
      + '<input id="' + id + '" type="' + type + '" placeholder="' + H.escHtml(placeholder) + '" value="' + (value||'') + '" style="width:100%;padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text-primary);outline:none;box-sizing:border-box"></div>';
  }

  function _select(id, label, opts) {
    return '<div style="margin-bottom:14px"><label style="font-size:12px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">' + label + '</label>'
      + '<select id="' + id + '" style="width:100%;padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text-primary);outline:none">'
      + opts.map(function(o){ return '<option value="' + H.escHtml(o[0]) + '">' + H.escHtml(o[1]) + '</option>'; }).join('') + '</select></div>';
  }

  function _textarea(id, label, placeholder, rows) {
    return '<div style="margin-bottom:14px"><label style="font-size:12px;font-weight:700;color:var(--text-primary);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:6px">' + label + '</label>'
      + '<textarea id="' + id + '" placeholder="' + H.escHtml(placeholder) + '" rows="' + rows + '" style="width:100%;padding:13px;border:1.5px solid var(--border);border-radius:12px;font-size:14px;background:var(--card);color:var(--text-primary);outline:none;box-sizing:border-box;resize:vertical;font-family:Inter,sans-serif"></textarea></div>';
  }

  function _val(id){ return ((document.getElementById(id)||{}).value||'').trim(); }

  H._submitJob = function() {
    var company  = _val('jCompany');
    var title    = _val('jTitle');
    var cat      = _val('jCat');
    var location = _val('jLocation');
    var desc     = _val('jDesc');
    if (!company)            { H.toast('Company name is required'); return; }
    if (!title)              { H.toast('Job title is required'); return; }
    if (!cat)                { H.toast('Please select a job category'); return; }
    if (!location)           { H.toast('Please select a location'); return; }
    if (desc.length < 30)    { H.toast('Job description must be at least 30 characters'); return; }
    var u = H.currentUser(); if (!u) { H.toast('Please sign in first'); return; }
    var jobType = 'Full-time';
    document.querySelectorAll('input[name="jType"]').forEach(function(r){ if (r.checked) jobType = r.value; });
    var applyMethod = 'inapp';
    document.querySelectorAll('input[name="jApplyMethod"]').forEach(function(r){ if (r.checked) applyMethod = r.value; });
    var salMin  = _val('jSalMin');
    var salMax  = _val('jSalMax');
    var salary  = salMin && salMax ? '$' + salMin + ' – $' + salMax + '/mo' : salMin ? 'From $' + salMin + '/mo' : 'Negotiable';
    var anon    = (document.getElementById('jAnon')||{}).value === '1';
    var jobData = {
      company:   company,
      jobType:   jobType,
      industry:  cat,
      salary:    salary,
      exp:       _val('jExpReq'),
      eduReq:    _val('jEdu'),
      positions: _val('jPositions') || '1',
      deadline:  _val('jDeadline'),
      benefits:  _val('jBenefits'),
      description:      _val('jDesc'),
      responsibilities: _val('jResp'),
      requirements:     _val('jReqs'),
      applyMethod: applyMethod,
      applyEmail:  applyMethod === 'email'    ? _val('jEmail')    : '',
      applyPhone:  applyMethod === 'whatsapp' ? _val('jPhone')    : '',
      applyUrl:    applyMethod === 'url'      ? _val('jApplyUrl') : ''
    };
    // Keep desc as legacy plain text too for search compatibility
    var fullDesc = 'COMPANY: ' + company + '\nJOB TYPE: ' + jobType + '\nINDUSTRY: ' + cat + '\nSALARY: ' + salary
      + (jobData.deadline ? '\nDEADLINE: ' + jobData.deadline : '')
      + '\n\nDESCRIPTION:\n' + desc
      + (jobData.responsibilities ? '\n\nRESPONSIBILITIES:\n' + jobData.responsibilities : '')
      + (jobData.requirements     ? '\n\nREQUIREMENTS:\n' + jobData.requirements : '')
      + (jobData.benefits         ? '\n\nBENEFITS:\n' + jobData.benefits : '')
      + (jobData.applyEmail || jobData.applyPhone || jobData.applyUrl ? '\n\nHOW TO APPLY:\n'
          + (jobData.applyEmail ? 'Email: ' + jobData.applyEmail + '\n' : '')
          + (jobData.applyPhone ? 'WhatsApp: ' + jobData.applyPhone + '\n' : '')
          + (jobData.applyUrl   ? 'URL: ' + jobData.applyUrl : '') : '');
    var listing = {
      id: H.uid(), cat: 'jobs', title: title, desc: fullDesc, jobData: jobData,
      price: salMin ? +salMin : 0, currency: 'USD', city: location, prov: location,
      sellerId: u.id, sellerName: anon ? company : (u.name||company),
      company: company, createdAt: Date.now(), expiresAt: Date.now() + 60*24*60*60*1000,
      status: 'pending', photos: []
    };
    H.state.listings = H.state.listings || [];
    H.state.listings.push(listing);
    H.saveState();
    if (typeof H.saveListingToCloud === 'function') H.saveListingToCloud(listing);
    H.toast('Job submitted for review! It will go live once approved.');
    H.goBack();
  };

  // ── JOB DETAIL ────────────────────────────────────────────
  H.pages.JobDetail = function(params) {
    var id = params && params.id;
    var l  = (H.state.listings||[]).find(function(x){ return x.id === id; });
    if (!l) return '<div class="page active">' + H.innerTopbar('Job') + H.emptyState('Job not found','This posting may have been removed.','Browse Jobs',"H.filterByCat('jobs')") + '</div>';
    var jd = getJobData(l);
    var u       = H.currentUser();
    var isMine  = u && l.sellerId === u.id;
    var apps    = (H.state.applications||[]);
    var myApp   = u ? apps.find(function(a){ return a.jobId===id && a.applicantId===u.id; }) : null;
    var appCount = apps.filter(function(a){ return a.jobId===id; }).length;
    var newApps  = apps.filter(function(a){ return a.jobId===id && a.status==='pending'; }).length;
    var ci = (jd.company||l.sellerName||'C').split(' ').slice(0,2).map(function(w){return w[0]||'';}).join('').toUpperCase();
    var chip = 'display:inline-flex;align-items:center;gap:4px;padding:5px 10px;border-radius:20px;font-size:12px;font-weight:700;margin-right:6px;margin-bottom:6px';

    // Deadline countdown
    var deadlineHtml = '';
    if (jd.deadline) {
      var dDate = new Date(jd.deadline); var now = new Date();
      var dDays = Math.ceil((dDate - now) / 86400000);
      var dColor = dDays <= 3 ? '#dc2626' : dDays <= 7 ? '#f59e0b' : '#22c55e';
      deadlineHtml = '<div style="background:' + dColor + '15;border:1px solid ' + dColor + '40;border-radius:10px;padding:10px 14px;margin-bottom:12px;display:flex;align-items:center;gap:8px">'
        + '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="' + dColor + '" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
        + '<span style="font-size:13px;font-weight:700;color:' + dColor + '">'
        + (dDays < 0 ? 'Applications closed' : dDays === 0 ? 'Deadline: Today!' : 'Deadline: ' + dDays + ' day' + (dDays!==1?'s':'') + ' left (' + jd.deadline + ')')
        + '</span></div>';
    }

    var similar = (H.state.listings||[]).filter(function(x){ return x.id!==id && x.cat==='jobs' && x.status==='active'; }).slice(0,3);

    return '<div class="page active">'
      + '<div class="det-topbar" style="background:#0a2558"><button class="back" onclick="H.goBack()" style="color:#fff"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>'
      + '<div class="det-topbar-title" style="color:#fff;font-size:14px">' + H.escHtml(l.title) + '</div>'
      + (isMine
        ? '<button onclick="H.openInner(\'JobApplications\',{jobId:\'' + id + '\'})" style="background:' + (newApps?'#F5A623':'rgba(255,255,255,.18)') + ';border:none;color:' + (newApps?'#1A3A8F':'#fff') + ';font-size:11px;font-weight:800;cursor:pointer;padding:5px 10px;border-radius:8px">' + appCount + ' App' + (appCount===1?'':'s') + (newApps?' ('+newApps+' new)':'') + '</button>'
        : '<button onclick="H._saveJob(\'' + id + '\')" style="background:rgba(255,255,255,.18);border:none;color:#fff;padding:6px;border-radius:8px;display:flex;align-items:center;cursor:pointer"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg></button>')
      + '</div>'

      + '<div style="background:linear-gradient(160deg,#0a2558 0%,#1A3A8F 60%,#2952cc 100%);padding:20px 16px 24px">'
      + '<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">'
      + '<div style="width:56px;height:56px;border-radius:14px;background:rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#fff;flex-shrink:0;border:2px solid rgba(255,255,255,.2)">' + ci + '</div>'
      + '<div style="flex:1;min-width:0">'
      + '<div style="font-size:19px;font-weight:800;color:#fff;line-height:1.2;margin-bottom:4px">' + H.escHtml(l.title) + '</div>'
      + '<div style="font-size:14px;color:rgba(255,255,255,.8);font-weight:600">' + H.escHtml(jd.company||l.sellerName||'') + '</div>'
      + '</div></div>'
      + '<div style="display:flex;flex-wrap:wrap;margin-bottom:4px">'
      + (jd.jobType  ? '<span style="' + chip + ';background:rgba(255,255,255,.18);color:#fff">'    + H.escHtml(jd.jobType)  + '</span>' : '')
      + (jd.industry ? '<span style="' + chip + ';background:#F5A62330;color:#F5A623">'             + H.escHtml(jd.industry) + '</span>' : '')
      + '<span style="' + chip + ';background:rgba(255,255,255,.12);color:rgba(255,255,255,.8)"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' + H.escHtml(l.city||'Zimbabwe') + '</span>'
      + '</div></div>'

      + '<div style="padding:0 12px">'
      + deadlineHtml

      + '<div style="background:var(--card);border-radius:16px;margin-top:-14px;padding:16px;border:1px solid var(--border);display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:12px">'
      + _ji('Salary',    jd.salary || 'Negotiable')
      + _ji('Location',  l.city || 'Zimbabwe')
      + _ji('Experience',jd.exp ? (EXP_LEVELS.find(function(e){return e[0]===jd.exp;})||[,''])[1] : 'Not specified')
      + _ji('Positions', (jd.positions || '1') + ' opening' + ((jd.positions||'1')!=='1'?'s':''))
      + _ji('Posted',    H.timeAgo(l.createdAt))
      + _ji('Applicants',appCount + ' so far')
      + '</div>'

      + (jd.description     ? _jb('About the Role',        jd.description)      : '')
      + (jd.responsibilities ? _jb('Key Responsibilities',  jd.responsibilities) : '')
      + (jd.requirements     ? _jb('Requirements',          jd.requirements)     : '')
      + (jd.benefits         ? _jb('Benefits & Perks',      jd.benefits)         : '')

      // How to Apply (external methods)
      + (jd.applyEmail||jd.applyPhone||jd.applyUrl ? '<div style="background:var(--card);border-radius:14px;padding:16px;margin-bottom:12px;border:1px solid var(--border)">'
        + '<div style="font-size:14px;font-weight:800;color:var(--text-primary);margin-bottom:12px;display:flex;align-items:center;gap:8px"><div style="width:3px;height:16px;background:#1A3A8F;border-radius:2px"></div>Also Apply Via</div>'
        + (jd.applyEmail ? '<a href="mailto:' + H.escHtml(jd.applyEmail) + '?subject=' + encodeURIComponent('Application: ' + l.title) + '" style="display:flex;align-items:center;gap:10px;padding:11px 14px;background:#1A3A8F15;border-radius:10px;margin-bottom:8px;text-decoration:none"><span style="font-size:16px">📧</span><span style="font-size:13px;font-weight:600;color:#1A3A8F">' + H.escHtml(jd.applyEmail) + '</span></a>' : '')
        + (jd.applyPhone ? '<button onclick="window.open(\'https://wa.me/' + jd.applyPhone.replace(/[^\d+]/g,'') + '?text=' + encodeURIComponent('Hi, I am applying for the ' + l.title + ' position at ' + (jd.company||'')) + '\',\'_blank\')" style="display:flex;align-items:center;gap:10px;padding:11px 14px;background:#25D36615;border-radius:10px;width:100%;border:none;cursor:pointer;margin-bottom:8px"><span style="font-size:16px">💬</span><span style="font-size:13px;font-weight:600;color:#25D366">' + H.escHtml(jd.applyPhone) + '</span></button>' : '')
        + (jd.applyUrl   ? '<button onclick="window.open(\'' + H.escHtml(jd.applyUrl) + '\',\'_system\')" style="display:flex;align-items:center;gap:10px;padding:11px 14px;background:#1A3A8F10;border-radius:10px;width:100%;border:none;cursor:pointer"><span style="font-size:16px">🔗</span><span style="font-size:13px;font-weight:600;color:#1A3A8F">Apply on Website</span></button>' : '')
        + '</div>' : '')

      + (similar.length ? '<div style="margin-bottom:12px"><div style="font-size:14px;font-weight:800;color:var(--text-primary);margin-bottom:10px;display:flex;align-items:center;gap:8px"><div style="width:3px;height:16px;background:#F5A623;border-radius:2px"></div>Similar Jobs</div>' + similar.map(jobCard).join('') + '</div>' : '')
      + '<div style="height:90px"></div></div>'

      // Fixed apply bar
      + '<div style="position:fixed;bottom:0;left:0;right:0;background:var(--card);padding:12px 16px;padding-bottom:calc(12px + env(safe-area-inset-bottom));border-top:1px solid var(--border);z-index:200">'
      + (isMine
        ? '<button onclick="H.openInner(\'JobApplications\',{jobId:\'' + id + '\'})" style="width:100%;padding:14px;background:#1A3A8F;color:#fff;border:none;border-radius:13px;font-size:15px;font-weight:800;cursor:pointer">View Applications (' + appCount + ')' + (newApps?' · ' + newApps + ' NEW':'') + '</button>'
        : l.status !== 'active'
          ? '<div style="padding:14px;background:var(--bg);border-radius:13px;text-align:center;font-size:14px;font-weight:700;color:var(--text-sub)">This position is no longer accepting applications</div>'
          : myApp
            ? '<div style="display:flex;gap:8px"><div style="flex:1;padding:14px;background:#dcfce7;border-radius:13px;text-align:center;font-size:13px;font-weight:700;color:#15803d">✓ Applied ' + H.timeAgo(myApp.appliedAt) + '</div>'
              + '<button onclick="H._withdrawApplication(\'' + myApp.id + '\',\'' + id + '\')" style="padding:14px;background:#fee2e2;color:#dc2626;border:none;border-radius:13px;font-size:13px;font-weight:700;cursor:pointer">Withdraw</button></div>'
            : '<button onclick="H._applyToJob(\'' + id + '\')" style="width:100%;padding:14px;background:linear-gradient(135deg,#1A3A8F,#2952cc);color:#fff;border:none;border-radius:13px;font-size:15px;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 2 15 22 11 13 2 9 22 2"/></svg>Apply Now — It\'s Free</button>'
      )
      + '</div></div>';
  };

  H._saveJob = function(id) {
    var u = H.currentUser(); if (!u) { H.requireAuth('Sign in to save jobs'); return; }
    H.state.saves = H.state.saves || {};
    H.state.saves[u.id] = H.state.saves[u.id] || [];
    var i = H.state.saves[u.id].indexOf(id);
    if (i >= 0) { H.state.saves[u.id].splice(i,1); H.toast('Job removed from saved'); }
    else        { H.state.saves[u.id].push(id);    H.toast('Job saved'); }
    H.saveState();
  };

  // ── APPLY TO JOB (ENHANCED) ───────────────────────────────
  H._applyToJob = function(jobId) {
    if (!H.currentUser()) { H.requireAuth('Sign in to apply for jobs'); return; }
    var l = (H.state.listings||[]).find(function(x){ return x.id === jobId; });
    if (!l) { H.toast('Job not found'); return; }
    var u       = H.currentUser();
    var jd      = getJobData(l);
    var company = jd.company || l.sellerName || 'Company';
    var existing = (H.state.applications||[]).find(function(a){ return a.jobId===jobId && a.applicantId===u.id; });
    if (existing) { H.toast('You have already applied for this position'); return; }

    H.modal({
      title: 'Apply: ' + H.escHtml(l.title),
      body:
        '<div style="background:#1A3A8F08;border-radius:10px;padding:10px 12px;margin-bottom:14px;font-size:13px;color:var(--text-sub)">'
        + '📌 <strong>' + H.escHtml(company) + '</strong> · ' + H.escHtml(l.city||'Zimbabwe') + '</div>'

        + '<div style="margin-bottom:6px"><label style="font-size:11px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.5px">Cover Letter <span style="color:#dc2626">*</span></label></div>'
        + '<textarea id="applyMsg" rows="6" placeholder="Tell the employer about yourself — your relevant experience, why you\'re the right fit, and what you bring to the role. Be specific and professional." style="width:100%;padding:12px;border:1.5px solid var(--border);border-radius:12px;font-size:13px;background:var(--card);color:var(--text-primary);outline:none;box-sizing:border-box;resize:vertical;font-family:Inter,sans-serif" oninput="var n=this.value.length;var c=document.getElementById(\'applyCharCnt\');if(c){c.textContent=n+\'/50 min\';c.style.color=n>=50?\'#22c55e\':\'#dc2626\';}"></textarea>'
        + '<div id="applyCharCnt" style="font-size:11px;color:#dc2626;text-align:right;margin-bottom:12px;margin-top:3px">0/50 min</div>'

        + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">'
        + '<div><label style="font-size:11px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:4px">Expected Salary (USD/mo)</label>'
        + '<input id="applySalary" type="number" placeholder="e.g. 700" style="width:100%;padding:10px;border:1.5px solid var(--border);border-radius:10px;font-size:13px;background:var(--card);color:var(--text-primary);outline:none;box-sizing:border-box"></div>'
        + '<div><label style="font-size:11px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:4px">Availability</label>'
        + '<select id="applyAvail" style="width:100%;padding:10px;border:1.5px solid var(--border);border-radius:10px;font-size:13px;background:var(--card);color:var(--text-primary);outline:none">'
        + AVAIL_OPTS.map(function(o){ return '<option value="' + o[0] + '">' + o[1] + '</option>'; }).join('') + '</select></div>'
        + '</div>'

        + '<div style="margin-bottom:12px"><label style="font-size:11px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:4px">CV / Portfolio Link (optional)</label>'
        + '<input id="applyCvLink" type="url" placeholder="https://drive.google.com/… or LinkedIn URL" style="width:100%;padding:10px;border:1.5px solid var(--border);border-radius:10px;font-size:13px;background:var(--card);color:var(--text-primary);outline:none;box-sizing:border-box"></div>'

        + '<div style="background:#F5A62310;border-radius:10px;padding:10px 12px;font-size:12px;color:var(--text-sub)">'
        + '📤 Shared with employer: <strong>' + H.escHtml(u.name||'Your name') + '</strong>'
        + (u.phone ? ' · ' + H.escHtml(u.phone) : ' (no phone — add in Profile)')
        + (u.email ? ' · ' + H.escHtml(u.email) : ' (no email — add in Profile)')
        + '</div>',

      confirmText: 'Submit Application',
      onConfirm: function() {
        var msg   = (_val('applyMsg'));
        if (msg.length < 50) { H.toast('Cover letter must be at least 50 characters. Tell the employer why you\'re right for this role.'); return false; }
        var salary = _val('applySalary');
        var avail  = (_val('applyAvail')) || 'immediately';
        var cvLink = _val('applyCvLink');
        H._submitJobApplication(jobId, msg, { salary: salary, avail: avail, cvLink: cvLink });
      }
    });
  };

  H._submitJobApplication = function(jobId, message, extras) {
    extras = extras || {};
    var u = H.currentUser(); if (!u) return;
    var l = (H.state.listings||[]).find(function(x){ return x.id === jobId; }); if (!l) return;
    var jd = getJobData(l);
    var company = jd.company || l.sellerName || 'Company';
    H.state.applications = H.state.applications || [];
    var existing = H.state.applications.find(function(a){ return a.jobId===jobId && a.applicantId===u.id; });
    if (existing) { H.toast('You already applied for this job'); return; }
    var app = {
      id: H.uid(), jobId: jobId, jobTitle: l.title, company: company,
      applicantId: u.id, applicantName: u.name||'Applicant',
      applicantPhone: u.phone||'', applicantEmail: u.email||'',
      message: message,
      expectedSalary: extras.salary || '',
      availability:   extras.avail  || 'immediately',
      cvLink:         extras.cvLink || '',
      status: 'pending', appliedAt: Date.now(), employerId: l.sellerId,
      statusHistory: [{status:'pending', t: Date.now(), note: 'Application submitted'}]
    };
    H.state.applications.push(app);
    H.saveState();
    if (typeof H.saveApplicationToCloud === 'function') H.saveApplicationToCloud(app);
    if (l.sellerId) H.pushNotif(l.sellerId, 'New Application 📩', u.name + ' applied for ' + l.title);
    H.toast('✅ Application submitted! The employer will be in touch.');
    H.renderPage('JobDetail', {id: jobId});
    // Create a private conversation thread
    H.state.conversations = H.state.conversations || [];
    var convId = 'job_' + app.id.slice(-8);
    if (!H.state.conversations.find(function(c){ return c.id === convId; })) {
      H.state.conversations.push({
        id: convId, members: [u.id, l.sellerId], listingId: jobId,
        appId: app.id, isJobThread: true, messages: []
      });
      H.saveState();
    }
  };

  H._withdrawApplication = function(appId, jobId) {
    H.modal({
      title: 'Withdraw Application',
      body: 'Are you sure? The employer will no longer see your application and you can reapply later.',
      confirmText: 'Withdraw',
      onConfirm: function() {
        H.state.applications = (H.state.applications||[]).filter(function(a){ return a.id !== appId; });
        H.saveState();
        H.toast('Application withdrawn');
        H.renderPage('JobDetail', {id: jobId});
      }
    });
  };

  // ── EMPLOYER: JOB APPLICATIONS DASHBOARD (ENHANCED) ───────
  var _appTab = 'all';
  H.pages.JobApplications = function(params) {
    var jobId = params && params.jobId;
    var u = H.currentUser();
    if (!u) return '<div class="page active">' + H.innerTopbar('Applications') + H.emptyState('Sign in required','',null,null) + '</div>';
    var l = (H.state.listings||[]).find(function(x){ return x.id === jobId; });
    if (!l || l.sellerId !== u.id) return '<div class="page active">' + H.innerTopbar('Applications') + H.emptyState('Access denied','',null,null) + '</div>';
    var jd = getJobData(l);
    var allApps = (H.state.applications||[]).filter(function(a){ return a.jobId === jobId; }).sort(function(a,b){ return b.appliedAt - a.appliedAt; });
    var counts  = {all:allApps.length, pending:0, reviewed:0, shortlisted:0, interview:0, rejected:0};
    allApps.forEach(function(a){ if (counts[a.status]!==undefined) counts[a.status]++; else counts.pending++; });
    var filtered = _appTab==='all' ? allApps : allApps.filter(function(a){ return a.status === _appTab; });
    var STATUS_C = {pending:'#F5A623',reviewed:'#1A3A8F',shortlisted:'#22c55e',interview:'#7c3aed',rejected:'#ef4444'};
    var STATUS_L = {pending:'New',reviewed:'Reviewed',shortlisted:'Shortlisted',interview:'Interview',rejected:'Rejected'};

    return '<div class="page active">'
      + H.innerTopbar('Applications — ' + H.escHtml(l.title))
      + '<div style="padding:14px;background:var(--card);border-bottom:1px solid var(--border)">'
      + '<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:14px">'
      + [['all','Total'],['pending','New'],['shortlisted','Listed'],['interview','Interview'],['rejected','Declined']].map(function(s){
        var c = s[0]==='all' ? allApps.length : counts[s[0]]||0;
        var col = s[0]==='all'?'#1A3A8F':(STATUS_C[s[0]]||'#999');
        return '<div style="text-align:center;background:' + col + '10;border-radius:10px;padding:8px 4px">'
          + '<div style="font-size:20px;font-weight:900;color:' + col + '">' + c + '</div>'
          + '<div style="font-size:10px;font-weight:600;color:var(--text-sub)">' + s[1] + '</div></div>';
      }).join('')
      + '</div>'
      + '<div style="display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;padding-bottom:2px">'
      + ['all','pending','reviewed','shortlisted','interview','rejected'].map(function(s){
        var lbl = s==='all'?'All ('+allApps.length+')':(STATUS_L[s]||s)+' ('+(s==='all'?allApps.length:counts[s]||0)+')';
        return '<button onclick="H._appTabSwitch(\'' + jobId + '\',\'' + s + '\')" style="flex-shrink:0;padding:7px 12px;border-radius:20px;border:1.5px solid ' + (_appTab===s?'#1A3A8F':'var(--border)') + ';background:' + (_appTab===s?'#1A3A8F':'var(--bg)') + ';color:' + (_appTab===s?'#fff':'var(--text-mid)') + ';font-size:12px;font-weight:700;cursor:pointer">' + lbl + '</button>';
      }).join('')
      + '</div>'
      + (allApps.length ? '<div style="margin-top:12px;display:flex;gap:8px"><button onclick="H._exportAppsCSV(\'' + jobId + '\')" style="flex:1;padding:9px;background:var(--bg);border:1px solid var(--border);border-radius:10px;font-size:12px;font-weight:700;color:var(--text-mid);cursor:pointer">⬇ Export CSV</button>'
        + '<button onclick="H._broadcastToApplicants(\'' + jobId + '\')" style="flex:1;padding:9px;background:#1A3A8F18;border:1px solid #1A3A8F30;border-radius:10px;font-size:12px;font-weight:700;color:#1A3A8F;cursor:pointer">📢 Message All</button></div>' : '')
      + '</div>'
      + '<div style="padding:12px 14px 88px">'
      + (filtered.length ? filtered.map(function(app) {
          var sc = STATUS_C[app.status]||'#999';
          var sl = STATUS_L[app.status]||app.status;
          var ini = (app.applicantName||'A').split(' ').map(function(w){return w[0]||'';}).join('').toUpperCase().slice(0,2);
          var availLabel = (AVAIL_OPTS.find(function(o){return o[0]===app.availability;})||['',''])[1]||app.availability||'';
          return '<div id="appcard_' + app.id + '" style="background:var(--card);border-radius:14px;padding:16px;margin-bottom:10px;border:1.5px solid ' + (app.status==='pending'?'#F5A62340':'var(--border)') + '">'
            + '<div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:12px">'
            + '<div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#1A3A8F,#3a6fd8);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;color:#fff;flex-shrink:0">' + ini + '</div>'
            + '<div style="flex:1;min-width:0">'
            + '<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:4px">'
            + '<div style="font-size:15px;font-weight:700;color:var(--text-primary)">' + H.escHtml(app.applicantName||'Applicant') + '</div>'
            + '<span style="background:' + sc + '20;color:' + sc + ';font-size:11px;font-weight:700;padding:3px 9px;border-radius:20px">' + sl + '</span>'
            + '</div>'
            + '<div style="font-size:12px;color:var(--text-sub);margin-top:3px">' + H.timeAgo(app.appliedAt) + '</div>'
            + (app.applicantPhone ? '<div style="font-size:12px;color:var(--text-sub);margin-top:1px">📱 ' + H.escHtml(app.applicantPhone) + '</div>' : '')
            + (app.applicantEmail ? '<div style="font-size:12px;color:var(--text-sub);margin-top:1px">✉️ ' + H.escHtml(app.applicantEmail) + '</div>' : '')
            + (app.expectedSalary ? '<div style="font-size:12px;color:var(--text-sub);margin-top:1px">💰 Expects $' + H.escHtml(app.expectedSalary) + '/mo</div>' : '')
            + (availLabel ? '<div style="font-size:12px;color:var(--text-sub);margin-top:1px">📅 Available: ' + H.escHtml(availLabel) + '</div>' : '')
            + (app.cvLink ? '<a href="' + H.escHtml(app.cvLink) + '" target="_blank" style="font-size:12px;color:#1A3A8F;font-weight:600;margin-top:3px;display:block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap">📎 View CV / Portfolio</a>' : '')
            + '</div></div>'
            + (app.message ? '<div style="font-size:13px;color:var(--text-mid);line-height:1.65;padding:12px;background:var(--bg);border-radius:10px;margin-bottom:12px;border-left:3px solid #1A3A8F40">'
              + '<div style="font-size:11px;font-weight:700;color:var(--text-sub);margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px">Cover Letter</div>'
              + H.escHtml(app.message) + '</div>' : '')
            + '<div style="display:flex;flex-wrap:wrap;gap:6px">'
            + '<button onclick="H._setAppStatus(\'' + app.id + '\',\'shortlisted\')" style="padding:8px 12px;background:#22c55e15;color:#15803d;border:1.5px solid #22c55e40;border-radius:9px;font-size:12px;font-weight:700;cursor:pointer">✓ Shortlist</button>'
            + '<button onclick="H._setAppStatus(\'' + app.id + '\',\'interview\')" style="padding:8px 12px;background:#7c3aed15;color:#7c3aed;border:1.5px solid #7c3aed40;border-radius:9px;font-size:12px;font-weight:700;cursor:pointer">📅 Interview</button>'
            + '<button onclick="H._setAppStatus(\'' + app.id + '\',\'rejected\')" style="padding:8px 12px;background:#ef444415;color:#dc2626;border:1.5px solid #ef444440;border-radius:9px;font-size:12px;font-weight:700;cursor:pointer">✗ Decline</button>'
            + (app.applicantPhone ? '<button onclick="window.open(\'https://wa.me/' + app.applicantPhone.replace(/[^\d]/g,'') + '\',\'_blank\')" style="padding:8px 12px;background:#25D36615;color:#25D366;border:1.5px solid #25D36640;border-radius:9px;font-size:12px;font-weight:700;cursor:pointer">WhatsApp</button>' : '')
            + '<button onclick="H._messageApplicant(\'' + app.applicantId + '\',\'' + app.jobId + '\')" style="padding:8px 12px;background:#1A3A8F15;color:#1A3A8F;border:1.5px solid #1A3A8F30;border-radius:9px;font-size:12px;font-weight:700;cursor:pointer">💬 Message</button>'
            + '</div></div>';
        }).join('')
        : H.emptyState('No ' + (_appTab==='all'?'':''+_appTab+' ') + 'applications','',null,null))
      + '</div></div>';
  };

  H._appTabSwitch = function(jobId, tab) {
    _appTab = tab;
    H.renderPage('JobApplications', {jobId: jobId});
  };

  H._messageApplicant = function(applicantId, jobId) {
    if (!H.currentUser()) return;
    H.startChatWith(applicantId, jobId);
  };

  H._exportAppsCSV = function(jobId) {
    var apps = (H.state.applications||[]).filter(function(a){ return a.jobId === jobId; });
    var rows = [['Name','Phone','Email','Status','Expected Salary','Availability','CV Link','Applied At','Cover Letter']];
    apps.forEach(function(a){
      rows.push([a.applicantName||'',a.applicantPhone||'',a.applicantEmail||'',a.status||'',a.expectedSalary||'',a.availability||'',a.cvLink||'',new Date(a.appliedAt).toLocaleString(),(a.message||'').replace(/\n/g,' ')]);
    });
    var csv = rows.map(function(r){ return r.map(function(c){ return '"' + String(c).replace(/"/g,'""') + '"'; }).join(','); }).join('\n');
    var blob = new Blob([csv], {type:'text/csv'});
    var url  = URL.createObjectURL(blob);
    var a    = document.createElement('a');
    a.href   = url; a.download = 'applications-' + jobId.slice(-6) + '.csv'; a.click();
    URL.revokeObjectURL(url);
    H.toast('CSV downloaded');
  };

  H._broadcastToApplicants = function(jobId) {
    var l = (H.state.listings||[]).find(function(x){ return x.id===jobId; }); if (!l) return;
    H.modal({
      title: 'Message All Applicants',
      body: '<div style="font-size:13px;color:var(--text-sub);margin-bottom:10px">All applicants for "' + H.escHtml(l.title) + '" will receive this notification.</div>'
        + '<textarea id="broadcastMsg" rows="4" placeholder="e.g. Thank you for applying. We are reviewing applications and will be in touch by Friday." style="width:100%;padding:12px;border:1.5px solid var(--border);border-radius:12px;font-size:13px;background:var(--card);color:var(--text-primary);outline:none;box-sizing:border-box;resize:vertical;font-family:Inter,sans-serif"></textarea>',
      confirmText: 'Send to All',
      onConfirm: function() {
        var msg = _val('broadcastMsg');
        if (!msg) { H.toast('Enter a message'); return false; }
        var apps = (H.state.applications||[]).filter(function(a){ return a.jobId===jobId; });
        apps.forEach(function(a){
          if (a.applicantId) H.pushNotif(a.applicantId, 'Update on your application', msg);
        });
        H.toast('Message sent to ' + apps.length + ' applicant' + (apps.length!==1?'s':''));
      }
    });
  };

  H._setAppStatus = function(appId, status) {
    var app = (H.state.applications||[]).find(function(a){ return a.id===appId; }); if (!app) return;
    app.status = status;
    app.statusHistory = app.statusHistory || [];
    app.statusHistory.push({status: status, t: Date.now()});
    H.saveState();
    if (typeof H.updateApplicationStatusCloud === 'function') H.updateApplicationStatusCloud(appId, status);
    var msgs = {shortlisted:'🎉 Congratulations! Your application for {title} has been shortlisted.', interview:'📅 You have been invited to interview for {title}. The employer will contact you with details.', rejected:'Thank you for applying for {title}. Unfortunately you have not been selected at this time. We wish you all the best.'};
    if (app.applicantId && msgs[status]) {
      H.pushNotif(app.applicantId, status==='rejected'?'Application Update':'Great news!', (msgs[status]||'').replace('{title}', app.jobTitle||'the position'));
    }
    var labels = {shortlisted:'Shortlisted ✓', interview:'Marked for Interview 📅', rejected:'Declined'};
    H.toast(labels[status]||'Updated');
    H.renderPage('JobApplications', {jobId: app.jobId});
  };

  // ── CANDIDATE: APPLIED JOBS (ENHANCED) ───────────────────
  H.pages.AppliedJobs = function() {
    var u = H.currentUser();
    if (!u) return '<div class="page active">' + H.innerTopbar('My Applications') + H.emptyState('Sign in required','',null,null) + '</div>';
    var apps = (H.state.applications||[]).filter(function(a){ return a.applicantId===u.id; }).sort(function(a,b){ return b.appliedAt-a.appliedAt; });
    var STATUS_C = {pending:'#F5A623',reviewed:'#1A3A8F',shortlisted:'#22c55e',interview:'#7c3aed',rejected:'#ef4444'};
    var STATUS_L = {pending:'Under Review',reviewed:'Reviewed',shortlisted:'✓ Shortlisted',interview:'Interview Invited',rejected:'Not Selected'};

    var stats = { total:apps.length, shortlisted:apps.filter(function(a){return a.status==='shortlisted';}).length, interview:apps.filter(function(a){return a.status==='interview';}).length, pending:apps.filter(function(a){return a.status==='pending';}).length };

    return '<div class="page active">'
      + H.innerTopbar('My Applications')
      + '<div style="padding:12px 14px;background:var(--card);border-bottom:1px solid var(--border)">'
      + '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">'
      + [['total','Total','#1A3A8F'],['pending','Pending','#F5A623'],['shortlisted','Shortlisted','#22c55e'],['interview','Interview','#7c3aed']].map(function(s){
        return '<div style="text-align:center;background:' + s[2] + '10;border-radius:10px;padding:8px 4px">'
          + '<div style="font-size:18px;font-weight:900;color:' + s[2] + '">' + stats[s[0]] + '</div>'
          + '<div style="font-size:10px;font-weight:600;color:var(--text-sub)">' + s[1] + '</div></div>';
      }).join('')
      + '</div></div>'
      + '<div style="padding:12px 14px 88px">'
      + (apps.length ? apps.map(function(app) {
          var sc = STATUS_C[app.status]||'#999';
          var sl = STATUS_L[app.status]||app.status;
          return '<div style="background:var(--card);border-radius:14px;padding:16px;margin-bottom:10px;border:1.5px solid ' + (app.status==='shortlisted'||app.status==='interview'?sc+'40':'var(--border)') + '">'
            + '<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;gap:8px">'
            + '<div style="flex:1;min-width:0"><div style="font-size:15px;font-weight:700;color:var(--text-primary);margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + H.escHtml(app.jobTitle||'Job') + '</div>'
            + '<div style="font-size:13px;color:var(--text-sub)">' + H.escHtml(app.company||'') + '</div></div>'
            + '<span style="background:' + sc + '20;color:' + sc + ';font-size:11px;font-weight:700;padding:3px 9px;border-radius:20px;flex-shrink:0">' + sl + '</span>'
            + '</div>'
            + (app.message ? '<div style="font-size:12px;color:var(--text-sub);background:var(--bg);border-radius:8px;padding:8px 10px;margin-bottom:8px;line-height:1.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical">' + H.escHtml(app.message) + '</div>' : '')
            + '<div style="display:flex;align-items:center;justify-content:space-between">'
            + '<span style="font-size:12px;color:var(--text-sub)">Applied ' + H.timeAgo(app.appliedAt) + '</span>'
            + '<div style="display:flex;gap:6px">'
            + '<button onclick="H.openInner(\'JobDetail\',{id:\'' + app.jobId + '\'})" style="padding:7px 12px;background:#1A3A8F15;color:#1A3A8F;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer">View Job</button>'
            + '<button onclick="H._withdrawApplication(\'' + app.id + '\',\'' + app.jobId + '\')" style="padding:7px 10px;background:#fee2e2;color:#dc2626;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer">Withdraw</button>'
            + '</div></div>'
            + (app.status==='interview' ? '<div style="margin-top:10px;background:#7c3aed15;border-radius:10px;padding:10px 12px;font-size:13px;color:#7c3aed;font-weight:600">📅 You\'ve been invited to interview! Check your phone and email for details from the employer.</div>' : '')
            + (app.status==='shortlisted' ? '<div style="margin-top:10px;background:#22c55e15;border-radius:10px;padding:10px 12px;font-size:13px;color:#15803d;font-weight:600">🎉 Congratulations! You have been shortlisted. The employer will be in touch.</div>' : '')
            + '</div>';
        }).join('')
        : H.emptyState('No applications yet','Browse jobs and apply directly in the app.','Browse Jobs',"H.openInner('FindJobs')"))
      + '</div></div>';
  };

  // ── HIRE TALENT (ENHANCED) ────────────────────────────────
  H.pages.HireTalent = function() {
    var candidates = (H.state.users||[]).filter(function(u){ return u.openToWork; });
    var sectors    = ['All'].concat(JOB_CATS);
    var ZW = H._ZW_CITIES || [];
    return '<div class="page active">'
      + '<div class="det-topbar" style="background:#1A3A8F"><button class="back" onclick="H.goBack()"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button><div class="det-topbar-title">Hire Talent</div>'
      + '<button onclick="H.openInner(\'PostJob\')" style="background:rgba(255,255,255,.2);border:none;color:#fff;font-size:12px;font-weight:700;cursor:pointer;padding:6px 12px;border-radius:8px">+ Post Job</button></div>'
      + '<div style="background:#1A3A8F;padding:0 12px 14px">'
      + '<div style="background:rgba(255,255,255,.13);border-radius:12px;display:flex;align-items:center;padding:0 12px;gap:8px">'
      + '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
      + '<input id="talentQ" placeholder="Search by name, skill, title…" autocomplete="off" oninput="H._filterTalent()" style="flex:1;border:none;outline:none;padding:12px 0;font-size:14px;background:transparent;color:#fff;font-family:Inter,sans-serif"></div>'
      + '<div style="color:rgba(255,255,255,.65);font-size:12px;font-weight:600;margin-top:8px"><span id="talentCount">' + candidates.length + ' candidate' + (candidates.length!==1?'s':'') + ' open to work</span></div>'
      + '</div>'
      + '<div id="sectorTabs" style="background:var(--card);border-bottom:1px solid var(--border);overflow-x:auto;white-space:nowrap;padding:10px 14px;display:flex;gap:8px">'
      + sectors.map(function(s,i){ return '<button onclick="H._talentSector(\'' + H.escHtml(s) + '\')" style="flex-shrink:0;padding:7px 14px;border-radius:20px;border:1.5px solid ' + (i===0?'#1A3A8F':'var(--border)') + ';background:' + (i===0?'#1A3A8F':'var(--bg)') + ';color:' + (i===0?'#fff':'var(--text-mid)') + ';font-size:12px;font-weight:700;cursor:pointer">' + H.escHtml(s) + '</button>'; }).join('')
      + '</div>'
      + '<div style="padding:10px 14px;display:flex;gap:10px;border-bottom:1px solid var(--border);overflow-x:auto">'
      + '<div style="flex-shrink:0"><div style="font-size:10px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">City</div>'
      + '<select onchange="H._setFilter(\'talent\',\'city\',this.value);H._filterTalent()" style="padding:8px 10px;border:1px solid var(--border);border-radius:9px;font-size:13px;background:var(--bg);color:var(--text-primary);outline:none">'
      + '<option value="all">All Cities</option>' + ZW.map(function(c){ return '<option value="' + c + '">' + c + '</option>'; }).join('') + '</select></div>'
      + '<div style="flex-shrink:0"><div style="font-size:10px;font-weight:700;color:var(--text-sub);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Experience</div>'
      + '<select onchange="H._setFilter(\'talent\',\'exp\',this.value);H._filterTalent()" style="padding:8px 10px;border:1px solid var(--border);border-radius:9px;font-size:13px;background:var(--bg);color:var(--text-primary);outline:none">'
      + '<option value="all">Any</option>' + EXP_LEVELS.slice(1).map(function(e){ return '<option value="' + e[0] + '">' + e[1] + '</option>'; }).join('') + '</select></div>'
      + '</div>'
      + '<div id="talentList" style="padding:12px 14px 88px">'
      + (candidates.length ? candidates.map(_candidateCard).join('') : _emptyTalent())
      + '</div></div>';
  };

  H.pages.HireTalent_after = function(){ H._currentTalentSector = 'All'; };

  H._talentSector = function(sector) {
    H._currentTalentSector = sector;
    document.querySelectorAll('#sectorTabs button').forEach(function(btn){
      var active = btn.textContent.trim() === sector;
      btn.style.background   = active ? '#1A3A8F' : 'var(--bg)';
      btn.style.color        = active ? '#fff' : 'var(--text-mid)';
      btn.style.borderColor  = active ? '#1A3A8F' : 'var(--border)';
    });
    H._filterTalent();
  };

  H._filterTalent = function() {
    var el  = document.getElementById('talentList');
    var cnt = document.getElementById('talentCount');
    if (!el) return;
    var q      = ((document.getElementById('talentQ')||{}).value||'').toLowerCase();
    var sector = H._currentTalentSector || 'All';
    var f      = H._filters['talent'] || {};
    var list   = (H.state.users||[]).filter(function(u){ return u.openToWork; });
    if (q) list = list.filter(function(u){ return ((u.name||'')+(u.jobTitle||'')+(u.skills||'')+(u.city||'')+(u.bio||'')).toLowerCase().includes(q); });
    if (sector && sector !== 'All') list = list.filter(function(u){ return ((u.sector||u.jobTitle||'')).toLowerCase().includes(sector.split(' ')[0].toLowerCase()); });
    if (f.city && f.city !== 'all') list = list.filter(function(u){ return (u.city||'').toLowerCase().includes(f.city.toLowerCase()); });
    if (f.exp  && f.exp  !== 'all') list = list.filter(function(u){ return (u.experienceLevel||'') === f.exp; });
    if (cnt) cnt.textContent = list.length + ' candidate' + (list.length!==1?'s':'') + ' open to work';
    el.innerHTML = list.length ? list.map(_candidateCard).join('') : _emptyTalent();
  };

  function _candidateCard(u) {
    var ini    = H.initials(u.name||'U');
    var skills = (u.skills||'').split(',').slice(0,4).filter(Boolean);
    var expLabel = (EXP_LEVELS.find(function(e){return e[0]===u.experienceLevel;})||['',''])[1];
    return '<div style="background:var(--card);border-radius:14px;padding:16px;margin-bottom:10px;border:1px solid var(--border)">'
      + '<div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:10px">'
      + '<div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#1A3A8F,#3a6fd8);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:#fff;flex-shrink:0">' + ini + '</div>'
      + '<div style="flex:1;min-width:0">'
      + '<div style="display:flex;align-items:center;flex-wrap:wrap;gap:4px;margin-bottom:2px">'
      + '<div style="font-size:15px;font-weight:700;color:var(--text-primary)">' + H.escHtml(u.name||'Anonymous') + '</div>'
      + (u.verified ? '<span style="background:#1A3A8F;color:#fff;font-size:10px;font-weight:700;padding:2px 7px;border-radius:8px">✓ Verified</span>' : '')
      + '</div>'
      + '<div style="font-size:13px;color:#1A3A8F;font-weight:600;margin-bottom:2px">' + H.escHtml(u.jobTitle||'Open to Work') + '</div>'
      + '<div style="font-size:12px;color:var(--text-sub)">'
      + (u.city ? '📍 ' + H.escHtml(u.city) : '')
      + (expLabel ? ' · ' + H.escHtml(expLabel) : '')
      + '</div></div></div>'
      + (u.bio ? '<div style="font-size:13px;color:var(--text-mid);line-height:1.55;margin-bottom:10px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">' + H.escHtml(u.bio) + '</div>' : '')
      + (skills.length ? '<div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:12px">' + skills.map(function(s){ return '<span style="background:var(--bg);border:1px solid var(--border);font-size:11px;padding:3px 9px;border-radius:6px;color:var(--text-mid);font-weight:500">' + H.escHtml(s.trim()) + '</span>'; }).join('') + '</div>' : '')
      + '<div style="display:flex;gap:8px">'
      + '<button onclick="H.startChatWith(\'' + u.id + '\',null)" style="flex:1;padding:9px;background:#1A3A8F15;color:#1A3A8F;border:1.5px solid #1A3A8F30;border-radius:9px;font-size:12px;font-weight:700;cursor:pointer">💬 Message</button>'
      + (u.phone ? '<button onclick="window.open(\'https://wa.me/' + u.phone.replace(/[^\d+]/g,'') + '\',\'_blank\')" style="flex:1;padding:9px;background:#25D36615;color:#25D366;border:1.5px solid #25D36640;border-radius:9px;font-size:12px;font-weight:700;cursor:pointer">WhatsApp</button>' : '')
      + (u.email ? '<button onclick="window.location.href=\'mailto:' + H.escHtml(u.email) + '\'" style="flex:1;padding:9px;background:#F5A62315;color:#c07800;border:1.5px solid #F5A62330;border-radius:9px;font-size:12px;font-weight:700;cursor:pointer">Email</button>' : '')
      + '</div></div>';
  }

  function _emptyTalent() {
    return '<div style="text-align:center;padding:40px 20px">'
      + '<div style="font-size:48px;margin-bottom:12px">👥</div>'
      + '<div style="font-size:17px;font-weight:700;color:var(--text-primary);margin-bottom:6px">No candidates yet</div>'
      + '<div style="font-size:13px;color:var(--text-sub);margin-bottom:20px">Job seekers who enable "Open to Work" will appear here.</div>'
      + '<button onclick="H.toast(\'Share Hostly with job seekers!\')" style="padding:12px 24px;background:#1A3A8F;color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer">Invite Job Seekers</button>'
      + '</div>';
  }

  function _ji(label, value) {
    return '<div><div style="font-size:10px;color:var(--text-sub);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">' + label + '</div><div style="font-size:13px;font-weight:700;color:var(--text-primary)">' + H.escHtml(String(value||'—')) + '</div></div>';
  }

  function _jb(sectionTitle, text) {
    return '<div style="background:var(--card);border-radius:14px;padding:16px;margin-bottom:10px;border:1px solid var(--border)">'
      + '<div style="font-size:14px;font-weight:800;color:var(--text-primary);margin-bottom:10px;display:flex;align-items:center;gap:8px"><div style="width:3px;height:16px;background:#1A3A8F;border-radius:2px"></div>' + sectionTitle + '</div>'
      + '<div style="font-size:13px;color:var(--text-mid);line-height:1.8;white-space:pre-line">' + H.escHtml(text) + '</div></div>';
  }

})(window.H);
