(function () {
  'use strict';
  const M = window.HomotopyMath;
  const $ = id => document.getElementById(id);
  const svgNS = 'http://www.w3.org/2000/svg';
  for (const grid of document.querySelectorAll('.plot-grid')) {
    for (let k = -3; k <= 3; k++) {
      const line = document.createElementNS(svgNS, 'line');
      line.setAttribute('x1', 280 + k * 90); line.setAttribute('x2', 280 + k * 90);
      line.setAttribute('y1', 14); line.setAttribute('y2', 346); line.setAttribute('class', k ? 'gridline' : 'axis');
      grid.appendChild(line);
    }
    for (let k = -1; k <= 1; k++) {
      const line = document.createElementNS(svgNS, 'line');
      line.setAttribute('x1', 10); line.setAttribute('x2', 550);
      line.setAttribute('y1', 180 + k * 90); line.setAttribute('y2', 180 + k * 90); line.setAttribute('class', k ? 'gridline' : 'axis');
      grid.appendChild(line);
    }
  }
  function marker(id, p) { $(id).setAttribute('cx', 280 + 90 * p[0]); $(id).setAttribute('cy', 180 - 90 * p[1]); }
  function value(id) { return Number($(id).value); }
  function plane() {
    const t = value('plane-t'), s = value('plane-s');
    $('plane-t-value').textContent = t.toFixed(2); $('plane-s-value').textContent = s.toFixed(2);
    $('plane-curve').setAttribute('d', M.pathData(u => M.plane(u, t)));
    const p = M.plane(s, t); marker('plane-traveler', p);
    $('plane-readout').textContent = 'H(s, t) ≈ (' + p[0].toFixed(2) + ', ' + p[1].toFixed(2) + '), rounded to two decimal places. Both inputs vary continuously.';
    $('plane-print-settings').textContent = 'Shown setting: deformation t = ' + t.toFixed(2) + '; traveler s = ' + s.toFixed(2) + '. Endpoints stay fixed at a and b.';
  }
  function hole() {
    const t = value('hole-t'), info = M.contractionInfo(t);
    $('hole-t-value').textContent = t.toFixed(2);
    $('hole-curve').setAttribute('d', M.pathData(s => M.contraction(s, t)));
    marker('hole-witness', M.contraction(0.5, t));
    $('hole-clearance').textContent = info.clearance.toFixed(2);
    $('hole-winding').textContent = info.winding === null ? 'undefined' : String(info.winding);
    $('hole-print-settings').textContent = 'Shown setting: t = ' + t.toFixed(2) + '; minimum distance to 0 is ' + info.clearance.toFixed(2) + '; winding is ' + (info.winding === null ? 'undefined (the curve hits 0)' : info.winding) + '.';
    $('hole-readout').textContent = t === 0.5
      ? 'Exact failure: C(½, ½) = 0. This slice leaves the target.'
      : t < 0.5 ? 'This slice avoids 0 and surrounds it. The proposed full family will hit 0 at t = ½.'
      : 'This slice avoids 0 but no longer surrounds it. The proposed family already crossed 0 at t = ½.';
  }
  function retraction() {
    const t = value('retract-t'), n = value('loop-n'), s = value('loop-s');
    $('retract-t-value').textContent = t.toFixed(2);
    $('loop-s-value').textContent = s.toFixed(2);
    $('retract-source').setAttribute('d', M.pathData(s => M.loop(s, 0, n)));
    $('retract-curve').setAttribute('d', M.pathData(s => M.loop(s, t, n)));
    marker('retract-traveler', M.loop(s, t, n));
    $('retract-winding').textContent = String(n);
    $('retract-print-settings').textContent = 'Shown setting: n = ' + n + '; deformation t = ' + t.toFixed(2) + '; traveler s = ' + s.toFixed(2) + '; fixed basepoint (1, 0). Winding stays ' + n + '.';
    $('retract-readout').textContent = n === 0
      ? (t === 1 ? 'The zero-winding out-and-back loop has become the constant loop at p.' : 'Zero winding: travel out and back along a ray. The loop is not yet constant.')
      : 'Unwrapped angle at this traveler: ' + (2 * n * s).toFixed(2) + 'π. In total: ' + Math.abs(n) + (Math.abs(n) === 1 ? ' turn ' : ' turns ') + (n > 0 ? 'counterclockwise' : 'clockwise') + ', with the same fixed basepoint.';
  }
  function clinic() {
    const level = value('clinic-level'), zero = $('clinic-zero').checked, repaired = $('clinic-repair').checked;
    const t = zero ? 0 : 10 ** (-level);
    $('clinic-level').disabled = zero;
    $('clinic-zoom').disabled = zero || repaired;
    const extent = $('clinic-zoom').checked && !zero && !repaired ? Math.min(1, 4 * t) : 1;
    const info = M.continuityInfo(t, repaired);
    const name = repaired ? 'K' : 'F';
    const precise = number => number === 0 ? '0' : number < 0.001 ? number.toExponential(4) : number.toFixed(6);
    const drawing = points => points.map((p, i) => (i ? 'L' : 'M') + (50 + 460 * p[0] / extent).toFixed(3) + ',' + (300 - 450 * p[1]).toFixed(3)).join(' ');
    $('clinic-level-value').textContent = String(level);
    $('clinic-time').textContent = zero ? '0 exactly' : '10^−' + level;
    $('clinic-extent').textContent = precise(extent);
    $('clinic-maximum').textContent = precise(info.maximum);
    $('clinic-sampled').textContent = precise(info.sampledMaximum);
    $('clinic-curve-label').textContent = name + '(·, t)';
    $('clinic-curve').setAttribute('d', drawing(M.continuityCurve(t, extent, repaired)));
    $('clinic-grid-curve').setAttribute('d', drawing(info.grid));
    $('clinic-grid-points').replaceChildren(...info.grid.map(([s, y]) => {
      const point = document.createElementNS(svgNS, 'circle');
      point.setAttribute('cx', 50 + 460 * s / extent); point.setAttribute('cy', 300 - 450 * y);
      point.setAttribute('r', 3.5); point.setAttribute('fill', '#75878b');
      return point;
    }));
    $('clinic-peak').style.display = info.peakS === null ? 'none' : '';
    if (info.peakS !== null) {
      $('clinic-peak').setAttribute('cx', 50 + 460 * info.peakS / extent);
      $('clinic-peak').setAttribute('cy', 300 - 450 * info.maximum);
    }
    $('clinic-witness').textContent = name + '(t,t) ≈ ' + precise(info.witness) + '. Input distance from (0,0) ≈ ' + precise(info.inputDistance) + '.';
    $('clinic-verdict').textContent = repaired
      ? 'K is a valid homotopy of based loops in ℝ: target, endpoint values, boundary maps, and joint continuity all pass.'
      : 'Every F slice is continuous with both endpoint values 0. The whole F family fails joint continuity at (0,0), even when the selected slice is the zero slice.';
    const snapshot = 'Shown: ' + name + ' at t = ' + (zero ? '0 exactly' : '10^−' + level) + ', horizontal window [0,' + precise(extent) + ']. Full maximum ≈ ' + precise(info.maximum) + '; eleven-point grid maximum ≈ ' + precise(info.sampledMaximum) + '.';
    $('clinic-print-settings').textContent = snapshot;
    $('clinic-desc').textContent = 'Graph of the scalar output ' + name + '(s,t), with s horizontal and fixed vertical scale [0,0.6]. ' + snapshot + ' The graph is not a planar picture of the target-space loop.';
  }
  $('plane-source').setAttribute('d', M.pathData(s => M.plane(s, 0)));
  $('plane-target').setAttribute('d', M.pathData(s => M.plane(s, 1)));
  const renderers = { 'plane-t': plane, 'plane-s': plane, 'hole-t': hole, 'retract-t': retraction, 'loop-n': retraction, 'loop-s': retraction };
  let animation = null;
  const motionPreference = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  const playButtons = [...document.querySelectorAll('[data-play]')];
  const originalPlayStates = new Map(playButtons.map(button => [button, { disabled: button.disabled, title: button.getAttribute('title'), label: button.getAttribute('aria-label') }]));
  function stop() {
    if (!animation) return;
    cancelAnimationFrame(animation.frame);
    animation.button.textContent = animation.label;
    animation.button.setAttribute('aria-pressed', 'false');
    animation = null;
  }
  for (const [id, render] of Object.entries(renderers)) {
    $(id).addEventListener('input', () => { stop(); render(); });
  }
  for (const button of playButtons) {
    const label = button.textContent;
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      if (motionPreference?.matches) return;
      const wasThis = animation && animation.button === button;
      stop();
      if (wasThis) return;
      const id = button.dataset.play, input = $(id);
      // A traversal must begin at s=0 to show all n signed turns. Deformation
      // playback instead continues from the selected time.
      if (Number(input.value) >= 1 || id === 'loop-s') input.value = '0';
      const from = Number(input.value);
      // The failed contraction pauses at the analytic witness; no skipped frame
      // can make it look as though winding changed inside a valid homotopy.
      const to = id === 'hole-t' && from < 0.5 ? 0.5 : 1;
      button.textContent = 'Pause'; button.setAttribute('aria-pressed', 'true');
      const active = { button, label, frame: 0, start: null };
      animation = active;
      const tick = time => {
        if (animation !== active) return;
        if (active.start === null) active.start = time;
        const fraction = Math.min(1, (time - active.start) / (7000 * (to - from)));
        input.value = (from + fraction * (to - from)).toFixed(2);
        renderers[id]();
        if (fraction < 1) active.frame = requestAnimationFrame(tick);
        else { input.value = String(to); renderers[id](); stop(); }
      };
      active.frame = requestAnimationFrame(tick);
    });
  }
  $('show-obstruction').addEventListener('click', () => { stop(); $('hole-t').value = '0.5'; hole(); });
  for (const id of ['clinic-level', 'clinic-zero', 'clinic-zoom', 'clinic-repair']) {
    $(id).addEventListener('input', clinic);
  }
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
  const syncMotionPreference = () => {
    if (motionPreference?.matches) stop();
    for (const button of playButtons) {
      const original = originalPlayStates.get(button);
      button.disabled = original.disabled || Boolean(motionPreference?.matches);
      if (motionPreference?.matches) {
        button.title = 'Reduced motion is active; use the slider to explore.';
        button.setAttribute('aria-label', (original.label || button.textContent) + ' unavailable while reduced motion is active; use the slider');
      } else {
        if (original.title === null) button.removeAttribute('title'); else button.setAttribute('title', original.title);
        if (original.label === null) button.removeAttribute('aria-label'); else button.setAttribute('aria-label', original.label);
      }
    }
  };
  motionPreference?.addEventListener?.('change', syncMotionPreference);
  syncMotionPreference();
  plane(); hole(); retraction(); clinic();

  const answers = {
    convex: {
      correct: 'convex',
      convex: 'Yes. Convexity keeps each line segment in the target. Shared endpoints then stay fixed by direct substitution.',
      smooth: 'Smoothness does not keep a line segment inside a target with a hole. The target condition is separate; convexity guarantees it here.',
      ends: 'Shared endpoints fix a and b, but interior points can leave the target. The next experiment gives an exact counterexample.'
    },
    continuous: {
      correct: 'joint',
      joint: 'Yes. Slice continuity alone does not give joint continuity. A homotopy also needs the target, endpoint-map, and any relative conditions.',
      nothing: 'Each slice can be continuous while the whole family is not continuous in the pair (x, t). Check the entire product, then the target and boundary conditions.',
      injective: 'A homotopy can change length and develop self-intersections. Neither injectivity nor equal length is required.'
    },
    radius: {
      correct: 'positive',
      positive: 'Yes. A positive analytic bound covers every input, including points and times the display never samples.',
      samples: 'Finitely many safe samples cannot certify an entire continuous curve or family. Use the positive radius formula for all inputs.',
      basepoint: 'Fixing one point does not constrain the rest of the path. The failed contraction fixes p and still crosses 0.'
    },
    equivalence: {
      correct: 'no',
      no: 'Yes. A contraction gives homotopy equivalence with a point. A homeomorphism would require a bijection, which is impossible for a nondegenerate interval and a one-point set.',
      yes: 'Homotopy equivalence allows composites homotopic to identities. A homeomorphism requires actual inverse bijections; these are stronger conditions.',
      circle: 'An interval is contractible. It has no obstruction like the circle’s nonzero winding. The reason it is not homeomorphic to a point is already the lack of a bijection.'
    }
  };
  for (const form of document.querySelectorAll('[data-quiz]')) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const checked = form.querySelector('input:checked'), feedback = form.querySelector('.feedback');
      const question = answers[form.dataset.quiz];
      feedback.className = 'feedback';
      if (!checked) { feedback.textContent = 'Choose an explanation, then check your reasoning.'; return; }
      feedback.textContent = question[checked.value];
      feedback.classList.add(checked.value === question.correct ? 'correct' : 'repair');
    });
  }

  const storageKey = 'euler-homotopy-notes-v1';
  const fields = [...document.querySelectorAll('[data-note]')];
  const status = $('notes-status');
  const notes = Object.create(null);
  let storageAvailable = true;
  try {
    const raw = JSON.parse(localStorage.getItem(storageKey) || '{}');
    if (raw && typeof raw === 'object' && !Array.isArray(raw)) {
      for (const field of fields) if (typeof raw[field.dataset.note] === 'string') {
        field.value = raw[field.dataset.note].slice(0, 8000); notes[field.dataset.note] = field.value;
      }
    }
  } catch (_) { storageAvailable = false; status.textContent = 'Browser storage unavailable. Download notes to keep them.'; }
  for (const field of fields) {
    field.maxLength = 8000;
    field.addEventListener('input', () => {
      notes[field.dataset.note] = field.value.slice(0, 8000);
      try {
        localStorage.setItem(storageKey, JSON.stringify(notes)); storageAvailable = true;
        status.textContent = 'Notes saved in this browser.';
      } catch (_) { storageAvailable = false; status.textContent = 'Notes kept for this visit. Download a copy before leaving.'; }
    });
  }
  $('export-notes').addEventListener('click', () => {
    const lines = ['Homotopy study notes', 'Saved ' + new Date().toISOString(), ''];
    for (const field of fields) {
      const label = document.querySelector('label[for="' + field.id + '"]');
      lines.push('## ' + field.dataset.note, label ? label.textContent : '', field.value || '(No note yet)', '');
    }
    const url = URL.createObjectURL(new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a'); link.href = url; link.download = 'homotopy-study-notes.txt';
    document.body.appendChild(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    status.textContent = 'Download prepared.' + (storageAvailable ? '' : ' Browser storage is unavailable.');
  });
  $('print-lecture').addEventListener('click', () => { stop(); window.print(); });
  // Keep each reader's reveal choices unchanged after printing. Solutions that
  // remain closed are intentionally omitted from the learner's printed copy.
  document.addEventListener('keydown', event => { if (event.key === 'Escape') stop(); });
  if ('IntersectionObserver' in window) {
    const links = [...document.querySelectorAll('.sidebar a[href^="#"]')];
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        for (const link of links) link.classList.toggle('active', link.hash === '#' + entry.target.id);
      }
    }, { rootMargin: '-10% 0px -65% 0px' });
    for (const section of document.querySelectorAll('.lecture-section')) observer.observe(section);
  }
})();
