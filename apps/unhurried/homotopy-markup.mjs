const esc = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num = value => Number(value.toFixed(4)).toString();
export function homotopyVerdict(m) {
  if (!m.familyBased) return 'This whole family fails the based-loop conditions: H(s,1) moves away from (1,0) for 0 < s < 1. A final constant slice does not repair the intermediate open paths.';
  if (!m.familyInSpace) return `This whole family leaves the punctured plane at s = 1/2, t = ${m.loop === 'once' ? '1/2' : '1/4 and 3/4'}. Even a valid current slice cannot make the entire family a homotopy in that space.`;
  return `This is a valid based contraction in the ${m.space === 'disk' ? 'closed unit disk' : 'punctured plane'}: the formula is continuous, stays in the space, fixes both endpoints, and finishes constantly at (1,0).`;
}
export function homotopyFormula(m) {
  const angle = m.loop === 'once' ? 'θ(t) = 2πt' : 'θ(t) = 4π min(t, 1−t)';
  return `${angle}; γ(t) = (cos θ(t), sin θ(t)). ${m.method === 'linear' ? 'H(s,t) = (1−s)γ(t) + s(1,0)' : 'H(s,t) = (cos((1−s)θ(t)), sin((1−s)θ(t)))'}.`;
}
export function homotopyPosition(m) {
  return `At t = ${num(m.position/100)}, H(s,t) ≈ (${num(m.point[0])}, ${num(m.point[1])}), with coordinates rounded to four decimal places.`;
}
export function homotopySummary(m) {
  return `At s = ${num(m.s)}, ${m.sliceBased ? 'both endpoints equal (1,0)' : 'the start remains (1,0), but the end does not'}; this slice ${m.sliceInSpace ? 'stays in the chosen space' : 'hits the deleted origin'}. Minimum distance to 0 = ${num(m.minimumDistance)}. Winding about 0: ${m.winding === null ? m.windingReason : m.winding + '.'} ${homotopyPosition(m)}`;
}
export function homotopyDiagram(m,prefix) {
  if (!/^[a-z][a-z0-9-]*$/.test(prefix)) throw new Error('Invalid homotopy diagram identifier.');
  const x = v => 260+130*v, y = v => 172-130*v;
  const path = m.points.map(([px,py],i)=>`${i?'L':'M'}${x(px).toFixed(2)} ${y(py).toFixed(2)}`).join(' ');
  const [px,py] = m.point;
  const description = `${homotopySummary(m)} The dashed unit circle is a reference. The solid curve is the current parametrized path; a square marks position t = ${num(m.position/100)}. The double ring is the basepoint (1,0).`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="90 8 340 320" width="340" height="320" role="img" aria-labelledby="${prefix}-title ${prefix}-desc"><title id="${prefix}-title">A candidate based-loop contraction</title><desc id="${prefix}-desc">${esc(description)}</desc><circle cx="260" cy="172" r="130" fill="${m.space==='disk'?'#edf1e6':'none'}" stroke="#7b786c" stroke-dasharray="5 4"/><path d="M100 172H420M260 16V324" stroke="#c8c9c0"/><path d="${path}" fill="none" stroke="#236b5a" stroke-width="4" stroke-linecap="round"/><circle cx="390" cy="172" r="7" fill="none" stroke="#25362e" stroke-width="2"/><circle cx="390" cy="172" r="11" fill="none" stroke="#25362e" stroke-width="2"/><text x="375" y="148" text-anchor="end" font-size="14" fill="#25362e">x₀ = (1,0)</text>${m.space==='punctured'?'<circle cx="260" cy="172" r="6" fill="#f8f6ef" stroke="#bd603b" stroke-width="2"/><path d="M255 167l10 10m0-10l-10 10" stroke="#bd603b" stroke-width="2"/>':'<circle cx="260" cy="172" r="3" fill="#7b786c"/>'}<text x="270" y="194" font-size="13" fill="#444">${m.space==='punctured'?'0 is deleted':'0 is allowed'}</text><rect x="${x(px)-5}" y="${y(py)-5}" width="10" height="10" fill="#655589" stroke="#fff" stroke-width="1.5"/>${!m.sliceBased?`<circle cx="${x(m.end[0])}" cy="${y(m.end[1])}" r="7" fill="none" stroke="#bd603b" stroke-width="3"/>`:''}</svg>`;
}
export function homotopyOutput(m,prefix) {
  const rows = [['Start', 0, m.start], ['Selected position', m.position/100, m.point], ['End', 1, m.end]];
  const table = `<details><summary>See path coordinates</summary><table><caption>Current path coordinates, rounded to four decimal places</caption><thead><tr><th scope="col">Point</th><th scope="col">t</th><th scope="col">x</th><th scope="col">y</th></tr></thead><tbody>${rows.map(([label,t,point]) => `<tr><th scope="row">${label}</th><td>${num(t)}</td><td>${num(point[0])}</td><td>${num(point[1])}</td></tr>`).join('')}</tbody></table></details>`;
  return `<p class="homotopy-formula">${esc(homotopyFormula(m))}</p><div class="homotopy-figure">${homotopyDiagram(m,prefix)}</div><p class="homotopy-key">Dashed circle: unit circle. Solid curve: current path. Square: position t. Double ring: basepoint.${!m.sliceBased?' Orange ring: moving endpoint at t = 1.':''}</p><p>${esc(homotopySummary(m))}</p><p class="homotopy-verdict">${esc(homotopyVerdict(m))}</p>${table}`;
}
export function homotopyWorkedExample(m) {
  return `<div data-homotopy-fallback><p><strong>Worked setting:</strong> one counterclockwise turn, straight-line formula, closed unit disk, s = 1/4.</p>${homotopyOutput(m,'homotopy-worked')}<p>On paper, set s = 1/2 and t = 1/2: H = (0,0). That is permitted in the disk and forbidden in the punctured plane.</p></div>`;
}
