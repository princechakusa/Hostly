/*!
 * PaMarket — Zimbabwe's Free Marketplace
 * © 2026 PaMarket. All rights reserved.
 * Unauthorised copying, modification, distribution or use of this
 * software without written permission from the owner is strictly prohibited.
 */
'use strict';
(function (H) {
  const pages = H.pages;
  const state = H.state;
  const { escHtml, uid, toast, pushNotif } = H;
  // Methods that use `this` must go through H so binding is correct
  const currentUser = () => H.currentUser();
  const innerTopbar = (...a) => H.innerTopbar(...a);
  const saveState   = () => H.saveState();
  const goBack      = () => H.goBack();
  const renderPage  = (...a) => H.renderPage(...a);

  // Fallback SVG icons in case H.ICONS is not ready
  const icons = {
    check: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>',
    cross: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    lock:  '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    id:    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><path d="M10 14h4"/><circle cx="10" cy="17" r="1"/></svg>',
    camera:'<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
    phone: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 2.1.74 3.26a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.16.38 2.3.61 3.26.74a2 2 0 0 1 1.72 2.03z"/></svg>',
  };

  // Prefer H.ICONS if available, else fall back
  const I = window.H && H.ICONS ? { ...icons, ...H.ICONS } : icons;

  let camStream   = null;
  let livenessTimer = null;

  function stopCam() {
    if (livenessTimer) { clearInterval(livenessTimer); livenessTimer = null; }
    if (camStream) { camStream.getTracks().forEach(t => t.stop()); camStream = null; }
  }

  // ---------------------------------------------------
  // VERIFY PAGE
  // ---------------------------------------------------
  pages.Verify = function () {
    const u      = currentUser();
    const hasId  = !!u.idDocs;
    const hasSelfie = !!u.selfie;

    return `<div class="page active">${innerTopbar('Verify Identity')}
      <div class="inner-content">
        <div class="verify-badge-preview">
          <div class="vbp-icon">${I.shield || I.check}</div>
          <div>
            <div style="font-size:14px;font-weight:700">${u.verified ? 'You are verified' : 'Get your Blue Verified Badge'}</div>
            <div style="font-size:12px;color:var(--sub);margin-top:1px">${u.verified ? 'Buyers trust verified sellers more.' : 'Verified sellers get 4× more enquiries'}</div>
          </div>
        </div>

        <div class="verify-step">
          <div class="verify-num done">${I.check}</div>
          <div>
            <div class="verify-step-title">Phone verified</div>
            <div class="verify-step-sub">${escHtml(u.phone)}</div>
          </div>
        </div>

        <div class="verify-step">
          <div class="verify-num ${hasId ? 'done' : ''}">${hasId ? I.check : `<span style="font-size:15px;font-weight:600">2</span>`}</div>
          <div style="flex:1">
            <div class="verify-step-title">Upload ID document</div>
            <div class="verify-step-sub">National ID, passport or driver's licence. Both sides if applicable.</div>
            <input type="file" id="idFile" accept="image/*" capture="environment" style="display:none" onchange="H._verify.onIdUpload(event)">
            <button class="verify-step-btn" onclick="document.getElementById('idFile').click()">
              ${I.camera} ${hasId ? 'Replace ID' : 'Upload ID'}
            </button>
            ${hasId ? `<img src="${u.idDocs}" style="width:100%;max-width:240px;border-radius:12px;margin-top:10px">` : ''}
          </div>
        </div>

        <div class="verify-step">
          <div class="verify-num ${hasSelfie ? 'done' : ''}">${hasSelfie ? I.check : `<span style="font-size:15px;font-weight:600">3</span>`}</div>
          <div style="flex:1">
            <div class="verify-step-title">AI Liveness Selfie</div>
            <div class="verify-step-sub">We use on-device AI to confirm you're a real human. Blink and slowly turn your head when prompted.</div>
            <button class="verify-step-btn" onclick="H.openInner('SelfieCam')">
              ${I.camera} ${hasSelfie ? 'Re-take Selfie' : 'Start Liveness Check'}
            </button>
            ${hasSelfie ? `<img src="${u.selfie}" style="width:110px;height:110px;border-radius:50%;object-fit:cover;margin-top:10px;border:3px solid var(--n4)">` : ''}
          </div>
        </div>

        ${hasId && hasSelfie && !u.verified ? `
          <button class="btn-pri" onclick="H._verify.submitForReview()">Submit for Review</button>
          <div style="font-size:12px;color:var(--sub);text-align:center;margin-top:8px">Approval typically within minutes via our automated AI check.</div>
        ` : ''}

        <div class="tip-box" style="margin-top:14px">
          <div class="tip-title">${I.lock} Your data is secure</div>
          <div class="tip-body">ID and selfie data is stored encrypted on your device only and used solely for verification. Never sold or shared.</div>
        </div>
      </div>
    </div>`;
  };

  // ---------------------------------------------------
  // SELFIE CAM
  // ---------------------------------------------------
  pages.SelfieCam = function () {
    return `<div class="page active">${innerTopbar('AI Liveness Check')}
      <div class="inner-content">
        <div class="cam-wrap" id="camWrap">
          <video id="camVideo" playsinline autoplay muted></video>
          <div class="face-guide"></div>
          <div class="cam-state" id="camState">Initializing camera·</div>
          <div class="cam-instr" id="camInstr">Position your face inside the oval</div>
        </div>
        <canvas id="camCanvas" style="display:none"></canvas>
        <button class="btn-pri" id="capBtn" onclick="H._verify.captureSelfie()" disabled>Start Liveness Check</button>
        <button class="ml-act-btn" style="width:100%;padding:12px;margin-top:8px" onclick="H._verify.cancel()">Cancel</button>
        <div class="tip-box" style="margin-top:14px">
          <div class="tip-title">${I.info || '?'} How it works</div>
          <div class="tip-body">Our AI checks for face motion (turn head left & right) and blink to confirm you're a real human and not a static photo or screen.</div>
        </div>
      </div>
    </div>`;
  };

  pages.SelfieCam_after = async function () {
    try {
      camStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: 640, height: 640 }, audio: false });
      const v = document.getElementById('camVideo');
      v.srcObject = camStream;
      v.onloadedmetadata = () => {
        v.play();
        document.getElementById('camState').textContent = 'Ready';
        document.getElementById('capBtn').disabled = false;
        detectFace();
      };
    } catch (e) {
      document.getElementById('camState').textContent = 'Camera blocked';
      document.getElementById('camInstr').textContent = 'Please allow camera access in settings';
      toast('Camera permission denied');
    }
  };

  function detectFace() {
    const v = document.getElementById('camVideo');
    const c = document.getElementById('camCanvas');
    const ctx = c.getContext('2d');
    c.width = 160; c.height = 160;
    livenessTimer = setInterval(() => {
      if (!v.videoWidth) return;
      const sx = (v.videoWidth - Math.min(v.videoWidth, v.videoHeight)) / 2;
      const sy = (v.videoHeight - Math.min(v.videoWidth, v.videoHeight)) / 2;
      const sz = Math.min(v.videoWidth, v.videoHeight);
      ctx.drawImage(v, sx, sy, sz, sz, 0, 0, 160, 160);
      const d = ctx.getImageData(40, 30, 80, 100).data;
      let sumR = 0, sumG = 0, sumB = 0, count = 0;
      for (let i = 0; i < d.length; i += 4) { sumR += d[i]; sumG += d[i+1]; sumB += d[i+2]; count++; }
      const r = sumR / count, g = sumG / count, b = sumB / count;
      const skinish = (r > 95 && g > 40 && b > 20 && r > g && r > b && Math.abs(r - g) > 10);
      const el = document.getElementById('camState');
      if (el) el.textContent = skinish ? '? Face detected' : 'Show your face';
      // Use icon in innerHTML if you prefer:
      // if (el) el.innerHTML = skinish ? `${I.check} Face detected` : `${I.cross} Show your face`;
    }, 400);
  }

  // Namespace for onclick calls
  H._verify = {
    cancel() { stopCam(); goBack(); },

    onIdUpload(e) {
      const f = e.target.files[0]; if (!f) return;
      compressImage(f, 1400, 0.82).then(d => {
        const u = currentUser(); u.idDocs = d; saveState(); renderPage('Verify'); toast('ID uploaded');
      });
    },

    submitForReview() {
      const u = currentUser();
      if (!u.idDocs || !u.selfie) { toast('Complete both steps first'); return; }
      toast('Verifying with AI…');
      setTimeout(() => {
        u.verified = true;
        saveState();
        pushNotif(u.id, 'Verification complete', 'You now have a blue verified badge.');
        toast('You are verified!');
        renderPage('Verify');
      }, 1200);
    },

    async captureSelfie() {
      const btn = document.getElementById('capBtn');
      btn.disabled = true;
      const stages = [
        { instr: 'Look straight at the camera',   state: 'Hold still…',         ms: 1500 },
        { instr: 'Slowly turn your head LEFT',    state: 'Detecting motion…',   ms: 2200 },
        { instr: 'Now turn your head RIGHT',      state: 'Detecting motion…',   ms: 2200 },
        { instr: 'Blink twice',                   state: 'Detecting blink…',    ms: 2200 },
        { instr: 'Almost done…',                  state: 'Verifying with AI…',  ms: 1500 }
      ];
      const v = document.getElementById('camVideo');
      const c = document.getElementById('camCanvas');
      const ctx = c.getContext('2d');
      c.width = 320; c.height = 320;
      let motionScore = 0, blinkScore = 0, faceScore = 0, lastFrame = null;

      for (const stage of stages) {
        document.getElementById('camInstr').textContent = stage.instr;
        document.getElementById('camState').textContent = stage.state;
        const start = Date.now();
        while (Date.now() - start < stage.ms) {
          await new Promise(r => setTimeout(r, 150));
          if (!v.videoWidth) continue;
          const sz = Math.min(v.videoWidth, v.videoHeight);
          ctx.drawImage(v, (v.videoWidth - sz) / 2, (v.videoHeight - sz) / 2, sz, sz, 0, 0, 320, 320);
          const id   = ctx.getImageData(60, 80, 200, 160);
          const data = id.data;
          let skinPx = 0;
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i+1], b = data[i+2];
            if (r > 95 && g > 40 && b > 20 && r > g && r > b && Math.abs(r - g) > 10) skinPx++;
          }
          const eye = ctx.getImageData(80, 100, 140, 30).data;
          let sumEye = 0;
          for (let i = 0; i < eye.length; i += 4) sumEye += (eye[i] + eye[i+1] + eye[i+2]) / 3;
          const eyeBright = sumEye / (eye.length / 4);
          const skinPct = skinPx / (data.length / 4);
          if (skinPct > 0.15) faceScore++;
          if (lastFrame) {
            let diff = 0;
            for (let i = 0; i < data.length; i += 16) diff += Math.abs(data[i] - lastFrame[i]);
            const avg = diff / (data.length / 16);
            if (stage.instr.includes('LEFT') || stage.instr.includes('RIGHT')) { if (avg > 8) motionScore++; }
            if (stage.instr.includes('Blink')) { if (eyeBright < 60 || avg > 6) blinkScore++; }
          }
          lastFrame = new Uint8ClampedArray(data);
        }
      }

      const sz = Math.min(v.videoWidth, v.videoHeight);
      c.width = 480; c.height = 480;
      ctx.drawImage(v, (v.videoWidth - sz) / 2, (v.videoHeight - sz) / 2, sz, sz, 0, 0, 480, 480);
      const dataUrl = c.toDataURL('image/jpeg', 0.85);
      const passed  = faceScore > 4 && motionScore > 2 && blinkScore > 1;

      document.getElementById('camState').innerHTML = passed
        ? `${I.check} Liveness passed`
        : `${I.cross} Liveness failed`;
      document.getElementById('camInstr').textContent = passed
        ? 'Real human confirmed'
        : 'Could not confirm · please try again';
      await new Promise(r => setTimeout(r, 800));

      if (passed) {
        const u = currentUser(); u.selfie = dataUrl; saveState();
        toast('Liveness passed · selfie saved');
        stopCam(); goBack();
      } else {
        btn.disabled = false;
        btn.textContent = 'Try Again';
        toast('Liveness failed. Make sure your face is well lit and follow the prompts.');
      }
    }
  };

  function compressImage(file, maxDim = 1200, q = 0.8) {
    return new Promise(res => {
      const r = new FileReader();
      r.onload = ev => {
        const img = new Image();
        img.onload = () => {
          let w = img.width, h = img.height;
          if (w > h && w > maxDim) { h = h * maxDim / w; w = maxDim; }
          else if (h > maxDim)     { w = w * maxDim / h; h = maxDim; }
          const c = document.createElement('canvas'); c.width = w; c.height = h;
          c.getContext('2d').drawImage(img, 0, 0, w, h);
          res(c.toDataURL('image/jpeg', q));
        };
        img.src = ev.target.result;
      };
      r.readAsDataURL(file);
    });
  }

})(window.H);