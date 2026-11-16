/* Neutral resampling: actual parents, initial-root labels, and exact moments. */
function rng(seed) {
  let state=seed>>>0;
  return () => {state=(state+0x6D2B79F5)>>>0;let t=state;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return ((t^(t>>>14))>>>0)/4294967296;};
}
function validate(particles,generations,refresh) {
  if(!Number.isInteger(particles)||particles<1||particles>200||!Number.isInteger(generations)||generations<0||generations>500||!Number.isFinite(refresh)||refresh<0||refresh>1)
    throw new RangeError('Require 1–200 particles, 0–500 completed rounds, and refresh probability in [0,1].');
}
function moments(particles,generations,refresh=0,initialMean=null) {
  validate(particles,generations,refresh);
  if(initialMean!==null&&(!Number.isFinite(initialMean)||initialMean<0||initialMean>1))throw new RangeError('Initial mean must be null or in [0,1].');
  let center=initialMean===null?.5:initialMean,variance=initialMean===null?.25/particles:0;
  const values=[];
  for(let g=0;g<=generations;g++) {
    values.push({generation:g,mean:center,variance,mse:variance+(center-.5)**2});
    const nextMean=(1-refresh)*center+refresh/2;
    variance=nextMean*(1-nextMean)/particles+(1-refresh)**2*(1-1/particles)*variance;
    center=nextMean;
  }
  return values;
}
function simulate(particles,generations,refresh,seed) {
  validate(particles,generations,refresh);
  if(!Number.isInteger(seed)||seed<0||seed>4294967295)throw new RangeError('Seed must be a uint32 integer.');
  const initialRng=rng(seed^0x13579BDF),parentRng=rng(seed^0x9E3779B9),refreshRng=rng(seed^0xA5A5A5A5);
  let values=Array.from({length:particles},()=>initialRng()<.5?1:0),roots=Array.from({length:particles},(_,i)=>i);
  const rows=[],initialMean=values.reduce((a,b)=>a+b,0)/particles;
  function record(g,parents,refreshed) {
    rows.push({generation:g,values:values.slice(),roots:roots.slice(),parents,refreshed,
      mean:values.reduce((a,b)=>a+b,0)/particles,distinct:new Set(roots).size});
  }
  record(0,null,Array(particles).fill(false));
  for(let g=1;g<=generations;g++) {
    const parents=Array.from({length:particles},()=>Math.floor(parentRng()*particles));
    const refreshed=[],next=parents.map(parent=>{
      // Consume both refresh draws even at epsilon=0 or 1. Changing epsilon
      // leaves parent draws and initial outcomes unchanged.
      const replace=refreshRng()<refresh,fresh=refreshRng()<.5?1:0;
      refreshed.push(replace);return replace?fresh:values[parent];
    });
    roots=parents.map(parent=>roots[parent]);values=next;record(g,parents,refreshed);
  }
  return {particles,generations,refresh,seed,initialMean,rows,
    unconditional:moments(particles,generations,refresh),
    conditional:moments(particles,generations,refresh,initialMean)};
}
export const api={rng,moments,simulate};

const colors=['#007c91','#c14b24','#6941a5'];
const fmt=value=>Number(value.toPrecision(6)).toString();
const region=(label,svg)=>`<div class="ancestry-scroll" tabindex="0" role="region" aria-label="${label}; use arrow keys to scroll horizontally">${svg}</div>`;
function diagram(out,focus) {
  const first=Math.max(0,focus-5),rows=out.rows.slice(first,focus+1),w=Math.max(680,100+out.particles*27),h=65+rows.length*65;
  const x=i=>80+(i+.5)*(w-110)/out.particles,y=i=>45+i*65;
  let body='';
  rows.forEach((row,index)=>{
    if(index>0)row.parents.forEach((parent,i)=>{
      body+=`<line class="ancestry-edge" data-generation="${row.generation}" data-child="${i}" data-parent="${parent}" x1="${x(parent)}" y1="${y(index-1)+32}" x2="${x(i)}" y2="${y(index)}" stroke="hsl(${row.roots[i]*137.508%360} 55% 40%)" opacity=".6"/>`;
    });
    body+=`<g class="ancestry-generation" data-generation="${row.generation}"><text x="8" y="${y(index)+20}" fill="currentColor" font-size="12">g = ${row.generation}</text>`;
    row.values.forEach((value,i)=>{
      const label=`Generation ${row.generation}, position ${i+1}, initial root A${row.roots[i]+1}, outcome ${value}${row.refreshed[i]?', outcome refreshed':''}`;
      body+=`<g class="ancestry-cell" data-root="${row.roots[i]}" data-value="${value}" data-parent="${row.parents?row.parents[i]:''}" data-refreshed="${Number(row.refreshed[i])}"><title>${label}</title><rect x="${x(i)-11}" y="${y(index)}" width="22" height="32" rx="3" fill="hsl(${row.roots[i]*137.508%360} 55% 86%)" stroke="${row.refreshed[i]?'#b45309':'#546b64'}" stroke-width="${row.refreshed[i]?3:1}"/><text x="${x(i)}" y="${y(index)+11}" text-anchor="middle" fill="#17332c" font-size="8">A${row.roots[i]+1}</text><text x="${x(i)}" y="${y(index)+26}" text-anchor="middle" fill="#17332c" font-size="13" font-weight="bold">${value}</text></g>`;
    });
    body+='</g>';
  });
  return `<svg role="img" aria-label="Actual sampled parent links, generations ${first} through ${focus}; labels identify initial roots and binary outcomes" viewBox="0 0 ${w} ${h}" style="width:100%;min-width:${w}px"><title>Sampled ancestry, not independent particle draws</title><text x="8" y="20" fill="currentColor" font-size="12">Initial root label above; current outcome below. Orange outline: refreshed outcome.</text>${body}</svg>`;
}
function chart(series,labels,ymax,focus) {
  const w=680,h=260,pad=48,last=series[0].length-1;
  const x=g=>pad+g/Math.max(1,last)*(w-2*pad),y=value=>h-pad-value/ymax*(h-2*pad);
  let body=`<path d="M${pad},${pad}V${h-pad}H${w-pad}" fill="none" stroke="currentColor" opacity=".5"/><line x1="${x(focus)}" x2="${x(focus)}" y1="${pad}" y2="${h-pad}" stroke="currentColor" stroke-dasharray="3 4" opacity=".5"/>`;
  series.forEach((values,index)=>{
    body+=`<path data-series="${index}" d="${values.map((value,g)=>`${g?'L':'M'}${x(g)},${y(value)}`).join(' ')}" fill="none" stroke="${colors[index]}" stroke-width="2"/>`;
    if(last===0)body+=`<circle cx="${x(0)}" cy="${y(values[0])}" r="3" fill="${colors[index]}"/>`;
  });
  body+=`<g fill="currentColor" font-size="12"><text x="${pad}" y="22">${labels}</text><text x="${pad-8}" y="${pad+4}" text-anchor="end">${fmt(ymax)}</text><text x="${pad-8}" y="${h-pad}" text-anchor="end">0</text><text x="${pad}" y="${h-27}">0</text><text x="${w-pad}" y="${h-27}" text-anchor="end">${last}</text><text x="${w/2}" y="${h-6}" text-anchor="middle">Completed resampling rounds g (generation 0 is the initial cloud)</text></g>`;
  return `<svg role="img" aria-label="${labels} versus completed resampling rounds" viewBox="0 0 ${w} ${h}" style="width:100%;min-width:680px">${body}</svg>`;
}
function render(out,focus) {
  const row=out.rows[focus],unconditional=out.unconditional[focus],conditional=out.conditional[focus];
  let html=`<h4>Inspect generation ${focus}</h4><p>Only the last six consecutive generations ending here are shown. Each line is an actual sampled parent link. Repeated labels share an initial root; equal outcomes alone do not show common ancestry. Outcome refresh keeps the historical root label.</p>`;
  html+=region('Actual parent links and root labels',diagram(out,focus));
  const entries=[['Evidence estimate','1'],['Weight ESS',String(out.particles)],['Actual distinct initial roots',String(row.distinct)],['One realized particle mean',fmt(row.mean)],['Unconditional variance (fresh iid initial clouds)',fmt(unconditional.variance)],['Conditional expected mean (given displayed initial cloud)',fmt(conditional.mean)],['Conditional variance (given displayed initial cloud)',fmt(conditional.variance)],['Conditional MSE about target 1/2',fmt(conditional.mse)],['Iid particle-mean variance reference',fmt(.25/out.particles)]];
  html+='<table class="ancestry-results"><tbody>'+entries.map(([name,value],i)=>`<tr data-stat="${i}"><th scope="row">${name}</th><td>${value}</td></tr>`).join('')+'</tbody></table>';
  html+='<h4>One path and its conditional mean</h4><p>Teal: the realized mean in this one population. Orange: the exact expected mean conditional on its initial cloud. Purple: target mean 1/2. The trace is not a variance estimate.</p>';
  html+=region('Realized and conditional expected means',chart([out.rows.map(a=>a.mean),out.conditional.map(a=>a.mean),out.rows.map(()=>.5)],'Particle mean',1,focus));
  html+='<h4>Exact repeated-run variances</h4><p>Teal averages over fresh iid initial clouds and all later randomness. Orange holds the displayed initial cloud fixed and repeats only later randomness. Purple is the iid variance 1/(4M). These are analytic references, not estimates from the cells above. Zero conditional variance can coexist with a wrong conditional mean; compare conditional MSE as well.</p>';
  html+=region('Unconditional and conditional variance references',chart([out.unconditional.map(a=>a.variance),out.conditional.map(a=>a.variance),out.rows.map(()=>.25/out.particles)],'Variance of the particle mean',.25,focus));
  return {html,summary:`Generation ${focus}: ${row.distinct} actual initial roots remain among ${out.particles} particles; weight ESS ${out.particles}; evidence estimate 1. Initial mean ${fmt(out.initialMean)}; current mean ${fmt(row.mean)}. Refresh probability ${out.refresh}. Seed ${out.seed}.`};
}
let unique=0;
function mount(el) {
  if(el.dataset.mounted)return;
  el.dataset.mounted='ancestry';const id='ancestry-'+(++unique);
  el.innerHTML=`<section class="ancestry-lab"><h3>Neutral resampling and ancestry</h3><p>Start with iid Bernoulli(1/2) particles. Every likelihood is one, so the evidence estimate is exactly one and all weights stay equal. Uniformly resample parents, then independently refresh each child's outcome with probability ε. Refresh draws Bernoulli(1/2), while historical root labels remain inherited.</p><form class="ancestry-controls"><label for="${id}-m">Particles M<input id="${id}-m" name="parameter" type="number" min="2" max="40" step="1" value="16" required></label><label for="${id}-g">Completed resampling rounds<input id="${id}-g" name="count" type="number" min="0" max="80" step="1" value="24" required></label><label for="${id}-seed">Seed<input id="${id}-seed" name="seed" type="number" min="0" max="4294967295" step="1" value="2026" required></label><label for="${id}-refresh">Refresh probability ε<select id="${id}-refresh" name="refresh"><option value="0">0 (identity mutation)</option><option value="0.1">0.1</option><option value="0.5">0.5</option><option value="1">1 (fresh outcomes)</option></select></label><button type="submit">Run experiment</button><button type="reset">Reset</button></form><p class="lab-summary" role="status" aria-live="polite"></p><label class="ancestry-inspector" for="${id}-focus">Inspect generation <output id="${id}-value">24</output><input id="${id}-focus" type="range" min="0" max="24" step="1" value="24" aria-describedby="${id}-clock"></label><p id="${id}-clock">Generation 0 precedes every resampling round. Use arrow keys on the slider to inspect consecutive parent links. Focus a chart and use arrow keys to scroll sideways on narrow screens.</p><div class="lab-plots"></div><details><summary>What stays fixed when controls change</summary><p>Keeping M, completed rounds and seed fixed preserves the initial cloud and every parent draw as ε changes. Orange refresh outlines change current outcomes, not inherited root IDs. Changing the seed creates another population. One root count is a realized genealogy, not weight ESS or an estimate of the variance curve. Computation stays in this browser. No warmup, convergence test, or production sampler is implemented.</p></details></section>`;
  const form=el.querySelector('form'),summary=el.querySelector('.lab-summary'),plots=el.querySelector('.lab-plots'),slider=el.querySelector('input[type="range"]'),output=el.querySelector('output');let out;
  function inspect() {const focus=Number(slider.value),view=render(out,focus);output.value=String(focus);summary.textContent=view.summary;plots.innerHTML=view.html;}
  function run() {out=simulate(Number(form.elements.parameter.value),Number(form.elements.count.value),Number(form.elements.refresh.value),Number(form.elements.seed.value));slider.max=String(out.generations);slider.value=String(out.generations);inspect();}
  form.addEventListener('submit',event=>{event.preventDefault();if(form.reportValidity())run();});
  form.addEventListener('reset',()=>setTimeout(run,0));slider.addEventListener('input',inspect);run();
}
export { mount };
