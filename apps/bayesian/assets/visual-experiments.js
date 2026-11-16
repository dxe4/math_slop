/* Five independent committed forms. Intentionally no network or learner storage. */
(function () {
  'use strict';
  const M = window.BayesVisualMath;
  if (!M) return; // Static authored lessons remain available if this asset fails.
  const fmt = x => x === null ? 'undefined' : x === 0 ? '0' : Math.abs(x) < .0001 ? x.toExponential(6) : x.toFixed(6).replace(/\.?0+$/, '');
  const axisFmt = x => Number(x.toPrecision(3)).toString();
  const svgNS = 'http://www.w3.org/2000/svg';
  function node(tag, attrs = {}, text = '') {
    const element = document.createElementNS(svgNS, tag);
    for (const [key, value] of Object.entries(attrs)) element.setAttribute(key, String(value));
    if (text) element.textContent = text;
    return element;
  }
  function frame(title, xLabel, yLabel, xMin, xMax, yMax) {
    const svg = node('svg', {viewBox: '0 0 720 370', role: 'img', 'aria-label': title});
    svg.append(node('title', {}, title), node('desc', {}, 'Direct labels and numerical values are in the accompanying results table.'));
    const x = v => 75 + 605 * (v - xMin) / (xMax - xMin), y = v => 285 - 205 * v / yMax;
    svg.append(node('path', {d: 'M75 75V285H680', stroke: '#384e50', fill: 'none', 'stroke-width': 2}));
    for (let i = 0; i <= 4; i++) {
      const value = i * yMax / 4;
      svg.append(node('text', {x: 66, y: y(value) + 5, 'text-anchor': 'end'}, axisFmt(value)));
    }
    for (let i = 0; i <= 5; i++) {
      const value = xMin + (xMax - xMin) * i / 5;
      svg.append(node('text', {x: x(value), y: 311, 'text-anchor': 'middle'}, axisFmt(value)));
    }
    svg.append(node('text', {x: 75, y: 56}, yLabel), node('text', {x: 377, y: 353, 'text-anchor': 'middle'}, xLabel));
    return {svg, x, y};
  }
  function line(chart, points, color, dashed = false) {
    chart.svg.append(node('polyline', {points: points.map(([x, y]) => `${chart.x(x)},${chart.y(y)}`).join(' '),
      fill: 'none', stroke: color, 'stroke-width': 3, 'stroke-dasharray': dashed ? '8 5' : 'none'}));
  }
  function legend(chart, first, second) {
    chart.svg.append(node('text', {x: 75, y: 24, fill: '#005a70'}, first));
    if (second) chart.svg.append(node('text', {x: 380, y: 24, fill: '#8c3b0b'}, second));
  }
  function table(element, headers, rows) {
    const head = document.createElement('thead'), tr = document.createElement('tr');
    for (const label of headers) {const th = document.createElement('th'); th.scope = 'col'; th.textContent = label; tr.append(th);}
    head.append(tr);
    const body = document.createElement('tbody');
    for (const cells of rows) {
      const row = document.createElement('tr');
      cells.forEach((value, index) => {const cell = document.createElement(index === 0 ? 'th' : 'td');
        if (index === 0) cell.scope = 'row';
        cell.textContent = typeof value === 'number' ? fmt(value) : value; row.append(cell);});
      body.append(row);
    }
    element.replaceChildren(head, body);
  }
  const calculations = {
    conditioning(v) {
      const r = M.conditioning({...v, population: 2000}), c = r.expectedCells;
      const chart = frame('Expected counts in four disjoint cells', 'Cell number (see table)', 'Expected items', .5, 4.5, 2000);
      const counts = Object.values(c);
      counts.forEach((value, i) => chart.svg.append(node('rect', {x: chart.x(i + 1) - 25, y: chart.y(value), width: 50, height: chart.y(0) - chart.y(value), fill: '#005a70'})));
      // Cell indices, not a continuous measurement scale.
      chart.svg.querySelectorAll('text').forEach(t => {if (t.getAttribute('y') === '311') t.remove();});
      counts.forEach((_, i) => chart.svg.append(node('text', {x: chart.x(i + 1), y: 311, 'text-anchor': 'middle'}, String(i + 1))));
      return {chart: chart.svg, summary: `P(defect | alert): ${fmt(r.posterior)}. Expected alerts: ${fmt(c.defectAlert+c.soundAlert)}.`, headers: ['Cell / quantity', 'Expected count / probability'], rows: [
        ['1. Defect and alert', c.defectAlert], ['2. Defect and clear', c.defectClear], ['3. Sound and alert', c.soundAlert], ['4. Sound and clear', c.soundClear],
        ['Alert denominator (items)', c.defectAlert + c.soundAlert], ['P(alert | defect): stipulated rate', v.sensitivity], ['P(alert)', r.alertProbability],
        ['P(defect | alert)', r.posterior === null ? 'Undefined: zero-probability alert' : r.posterior]],
      explanation: r.posterior === null ? 'Undefined: the conditioning event has probability zero. There is no alert population to condition on.' :
        `Among ${fmt(c.defectAlert + c.soundAlert)} expected alerts, ${fmt(c.defectAlert)} are defects. The selected fraction is ${fmt(r.posterior)}; sensitivity is ${fmt(v.sensitivity)}. Counts use a fixed 0–2,000 scale.`};
    },
    prediction(v) {
      const r = M.predictive({alpha: v.mean * v.concentration, beta: (1 - v.mean) * v.concentration, trials: v.trials, tailAt: v.tailAt});
      const chart = frame('Exact future-count probability masses', 'Future count K (integer)', 'Probability mass', -.5, v.trials + .5, 1);
      legend(chart, 'Solid: full predictive', 'Dashed: plug-in');
      r.fullMass.forEach((mass, k) => {
        line(chart, [[k - .07, 0], [k - .07, mass]], '#005a70');
        line(chart, [[k + .07, 0], [k + .07, r.pluginMass[k]]], '#8c3b0b', true);
      });
      // Integer ticks for this discrete support.
      chart.svg.querySelectorAll('text').forEach(t => {if (t.getAttribute('y') === '311') t.remove();});
      const stride = Math.max(1, Math.ceil(v.trials / 8));
      for (let k = 0; k <= v.trials; k += stride) chart.svg.append(node('text', {x: chart.x(k), y: 311, 'text-anchor': 'middle'}, String(k)));
      return {chart: chart.svg, summary: `P(K ≥ ${v.tailAt}): full predictive ${fmt(r.fullTail)}, plug-in ${fmt(r.pluginTail)}.`, headers: ['Summary / count K', 'Full predictive', 'Plug-in'],
        rows: [['Mean', r.mean, r.mean], ['Variance', r.fullVariance, r.pluginVariance], [`P(K ≥ ${v.tailAt})`, r.fullTail, r.pluginTail],
          ...r.fullMass.map((mass, k) => [`K = ${k}`, mass, r.pluginMass[k]])],
        explanation: `Posterior Beta(${fmt(v.mean * v.concentration)}, ${fmt((1 - v.mean) * v.concentration)}). Both count means are ${fmt(r.mean)}. Full variance ${fmt(r.fullVariance)} includes the shared-parameter uncertainty; plug-in variance is ${fmt(r.pluginVariance)}. The entire integer support is tabulated. The vertical scale stays 0–1; the count axis changes with m.`};
    },
    pooling(v) {
      const r = M.pooling({mu: v.mu, tau: v.tau, sigma: v.sigma, groups: [{id: 'A', n: v.nA, sampleMean: v.meanA}, {id: 'B', n: v.nB, sampleMean: v.meanB}]});
      let lo = Math.min(v.mu, ...r.flatMap(g => [g.lower90, g.rawMean === null ? v.mu : g.rawMean]));
      let hi = Math.max(v.mu, ...r.flatMap(g => [g.upper90, g.rawMean === null ? v.mu : g.rawMean]));
      const pad = Math.max(1, (hi - lo) * .1); lo -= pad; hi += pad;
      const chart = frame('Conditional group means and central 90% intervals', 'Group mean (minutes)', '', lo, hi, 2);
      chart.svg.querySelectorAll('text').forEach(t => {if (t.getAttribute('text-anchor') === 'end') t.remove();});
      legend(chart, 'Circle: conditional mean', 'Diamond: raw mean');
      line(chart, [[v.mu, 0], [v.mu, 2]], '#777777', true);
      r.forEach((g, i) => {
        const y = 1.5 - i;
        chart.svg.append(node('text', {x: 30, y: chart.y(y) + 5}, g.id));
        line(chart, [[g.lower90, y], [g.upper90, y]], '#005a70');
        chart.svg.append(node('circle', {cx: chart.x(g.mean), cy: chart.y(y), r: 6, fill: '#005a70'}));
        if (g.rawMean !== null) {const x = chart.x(g.rawMean), cy = chart.y(y);
          chart.svg.append(node('polygon', {points: `${x},${cy - 8} ${x + 8},${cy} ${x},${cy + 8} ${x - 8},${cy}`, fill: 'white', stroke: '#8c3b0b', 'stroke-width': 2}));}
      });
      return {chart: chart.svg, summary: `Group A conditional mean: ${fmt(r[0].mean)}. Data weight: ${fmt(r[0].weight)}.`, headers: ['Group', 'Raw mean', 'Data weight', 'Conditional mean', 'Variance', '90% interval'],
        rows: r.map(g => [g.id, g.rawMean === null ? 'No observations' : g.rawMean, g.weight, g.mean, g.variance, `${fmt(g.lower90)} to ${fmt(g.upper90)}`]),
        explanation: `The dashed vertical line is fixed μ = ${fmt(v.mu)}. Intervals condition on μ, τ and σ; their uncertainty is omitted. ${v.tau === 0 ? 'At τ=0 both means are point masses at μ.' : 'More observations increase the weight on the observed group mean.'} With n=0 there is no raw mean. The horizontal scale adapts to include every mean and interval.`};
    },
    ppc(v) {
      const r = M.predictiveCheck(v), q = r.standardizedDiscrepancy;
      const chart = frame('Exact chi-square(6) reference for replicated spread', 'Standardized discrepancy Q = 6S²/σ²', 'Density per unit Q', 0, 30, .15);
      line(chart, Array.from({length: 151}, (_, i) => {const x = i / 5; return [x, x * x * Math.exp(-x / 2) / 16];}), '#005a70');
      const mark = Math.min(q, 30);
      line(chart, [[mark, 0], [mark, .145]], '#8c3b0b', true);
      legend(chart, 'Solid: replicated reference', q > 30 ? `Q=${fmt(q)} → beyond range` : `Dashed: observed Q=${fmt(q)}`);
      return {chart: chart.svg, summary: `Exact upper-tail probability: ${fmt(r.upperTailProbability)}. Observed discrepancy: ${fmt(q)}.`, headers: ['Quantity', 'Value'], rows: [
        ['Seven observed values', r.observations.map(fmt).join(', ')], ['Observed mean (minutes)', r.observedMean], ['Observed sample variance (minutes²)', r.observedVariance],
        ['Posterior mean of μ (minutes)', r.posteriorMean], ['Posterior variance of μ (minutes²)', r.posteriorVariance], ['Variance of replicated sample mean (minutes²)', r.replicateMeanVariance],
        ['Expected replicated sample variance (minutes²)', r.expectedReplicateVariance], ['Observed Q (unitless)', q], ['Exact upper-tail probability', r.upperTailProbability]],
        explanation: `P(Qrep ≥ Qobserved) = ${fmt(r.upperTailProbability)}. ${q === 0 ? 'All observations coincide: an upper tail of one signals extreme underdispersion, not a perfect fit.' : 'Increasing spread with σ fixed leaves the mean posterior unchanged but moves this discrepancy.'} The reference plot always shows 0–30; its omitted upper tail is 0.0000393084. ${q > 30 ? 'The marker at the right edge explicitly represents a statistic beyond the displayed range.' : ''} The reported probability uses the complete distribution, not only the displayed area. This is an exact predictive check, not a probability that the model is true.`};
    },
    decision(v) {
      const prediction = M.predictive({alpha: 3, beta: 2, trials: 8, tailAt: 7});
      const p = v.treatment === 'full' ? prediction.fullTail : prediction.pluginTail;
      const r = M.decision({eventProbability: p, reserveCost: v.reserveCost, disruptionLoss: v.disruptionLoss});
      const chart = frame('Expected losses across event probabilities', 'Probability of K ≥ 7', 'Expected loss (cost units)', 0, 1, Math.max(1, v.reserveCost, v.disruptionLoss));
      legend(chart, 'Solid: reserve', 'Dashed: no reserve');
      line(chart, [[0, r.reserveLoss], [1, r.reserveLoss]], '#005a70');
      line(chart, [[0, 0], [1, v.disruptionLoss]], '#8c3b0b', true);
      line(chart, [[p, 0], [p, Math.max(1, v.reserveCost, v.disruptionLoss)]], '#777777', true);
      const threshold = r.threshold === null ? 'None: disruption loss is zero' : r.threshold > 1 ? `${fmt(r.threshold)} (outside probability domain)` : fmt(r.threshold);
      return {chart: chart.svg, summary: `Minimizer(s): ${r.minimizers.join(' and ')}. Reserve loss ${fmt(r.reserveLoss)}; no-reserve loss ${fmt(r.noReserveLoss)}.`, headers: ['Quantity / action', 'Value / expected loss'], rows: [
        ['Predictive treatment', v.treatment === 'full' ? 'Full beta-binomial' : 'Plug-in binomial'], ['Event probability', p], ['Reserve', r.reserveLoss], ['No reserve', r.noReserveLoss],
        ['No reserve minus reserve', r.noReserveLoss - r.reserveLoss], ['Break-even event probability', threshold], ['Minimizer(s)', r.minimizers.join(' and ')]],
        explanation: `${r.minimizers.length === 2 ? 'Both actions have equal expected loss.' : `Lowest expected loss: ${r.minimizers[0]}.`} Event probability is ${fmt(p)}; the grey vertical line marks it. Reserve loss is constant, while no-reserve loss equals probability × disruption loss. The loss axis adapts to the costs. ${r.threshold === null ? 'With no disruption loss, no reserve is free; zero reserve cost makes both actions tie.' : 'At the break-even probability both actions tie.'}`};
    }
  };
  for (const [id, calculate] of Object.entries(calculations)) {
    const prefix = `visual-${id}`, form = document.getElementById(`${prefix}-form`);
    if (!form) continue;
    const get = name => document.getElementById(`${prefix}-${name}`);
    const status = get('status'), current = get('current');
    function update(announce = true) {
      try {
        const values = {}, errors = [];
        for (const input of form.querySelectorAll('input, select')) {
          const groupCount = {meanA: 'nA', meanB: 'nB'}[input.name];
          if (groupCount && form.elements[groupCount].valueAsNumber === 0) {
            values[input.name] = null; input.setAttribute('aria-invalid', 'false'); continue;
          }
          const invalid = input.value.trim() === '' || !input.validity.valid;
          input.setAttribute('aria-invalid', String(invalid));
          if (invalid) errors.push(`${input.labels[0].textContent}: enter a value from ${input.min} to ${input.max} in steps of ${input.step}.`);
          else values[input.name] = input.tagName === 'SELECT' ? input.value : Number(input.value);
        }
        if (errors.length) throw new RangeError(errors.join(' '));
        const result = calculate(values);
        get('plot').replaceChildren(result.chart);
        table(get('table'), result.headers, result.rows);
        get('explanation').textContent = result.explanation;
        current.hidden = false;
        status.textContent = announce ? `Updated. ${result.summary}` : '';
      } catch (error) {
        if (!(error instanceof RangeError)) throw error;
        current.hidden = true;
        status.textContent = `Cannot update: ${error.message}`;
      }
    }
    form.hidden = false; form.querySelector('fieldset').disabled = false;
    form.addEventListener('submit', event => {event.preventDefault(); update();});
    form.addEventListener('reset', event => {
      // Reset explicitly before computing: a microtask can precede the browser's default reset action.
      event.preventDefault();
      for (const input of form.querySelectorAll('input')) input.value = input.defaultValue;
      for (const select of form.querySelectorAll('select')) {
        for (const option of select.options) option.selected = option.defaultSelected;
        if (select.selectedIndex < 0) select.selectedIndex = 0;
      }
      update(); status.textContent = 'Default settings restored for this experiment.';
    });
    update(false);
    // No-JS defaults are expanded; interactive readers can open the same lesson.
    document.querySelector(`#${prefix} .visual-reference`).open = false;
  }
  const printState = new Map();
  window.addEventListener('beforeprint', () => document.querySelectorAll('.visual-reference').forEach(detail => {
    printState.set(detail, detail.open); detail.open = true;
  }));
  window.addEventListener('afterprint', () => {printState.forEach((open, detail) => {detail.open = open;}); printState.clear();});
})();
