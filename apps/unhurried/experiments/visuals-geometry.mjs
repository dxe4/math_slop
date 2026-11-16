import {evaluateSquare} from '../square-model.mjs';
// State-responsive SVGs for five geometry/algebra labs. No DOM or external assets.
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const fmt = (value, digits = 3) => Math.abs(value) < 1e-10 ? '0' : Number(value.toFixed(digits)).toString();
const fmtSmall = value => value === 0 ? '0' : Math.abs(value) < 0.001 ? Number(value.toPrecision(3)).toString() : fmt(value);
const bounded = (state, key, fallback, lo, hi) => {
  const value = Number(state?.[key] ?? fallback);
  return Number.isFinite(value) ? Math.max(lo, Math.min(hi, value)) : fallback;
};
const selected = (state, key, values, fallback) => values.includes(state?.[key]) ? state[key] : fallback;
const svg = (id, title, desc, width, height, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="${id}-title ${id}-desc"><title id="${id}-title">${esc(title)}</title><desc id="${id}-desc">${esc(desc)}</desc>${body}</svg>`;
const line = (x1,y1,x2,y2,stroke='#8794a5',width=2,extra='') => `<line x1="${fmt(x1)}" y1="${fmt(y1)}" x2="${fmt(x2)}" y2="${fmt(y2)}" stroke="${stroke}" stroke-width="${width}" ${extra}/>`;
const text = (x,y,value,size=14,fill='#253448',anchor='middle',extra='') => `<text x="${fmt(x)}" y="${fmt(y)}" font-family="system-ui,sans-serif" font-size="${size}" fill="${fill}" text-anchor="${anchor}" ${extra}>${esc(value)}</text>`;
const circle = (x,y,r,fill,stroke='#253448',width=1.5,extra='') => `<circle cx="${fmt(x)}" cy="${fmt(y)}" r="${fmt(r)}" fill="${fill}" stroke="${stroke}" stroke-width="${width}" ${extra}/>`;

const setIntervals = {
  open: [[-1,1,false,false]],
  closed: [[-1,1,true,true]],
  punctured: [[-Infinity,0,false,false],[0,Infinity,false,false]],
  singleton: [[0,0,true,true]],
  positive: [[0,1,false,false]],
};
const setLabels = {open:'(−1, 1)',closed:'[−1, 1]',punctured:'ℝ ∖ {0}',singleton:'{0}',positive:'(0, 1)'};
function setContains(intervals,x) {
  return intervals.some(([a,b,ac,bc]) => (x>a || ac && x===a) && (x<b || bc && x===b));
}
function setWitness(intervals,x,eps) {
  if (!setContains(intervals,x)) return x;
  const [a,b] = intervals.find(([lo,hi,lc,rc]) => (x>lo || lc && x===lo) && (x<hi || rc && x===hi));
  if (a===b) return x+eps/2;
  if (Number.isFinite(a) && x-eps<a-1e-10) return setContains(intervals,a) ? (a+x-eps)/2 : a;
  if (Number.isFinite(b) && x+eps>b+1e-10) return setContains(intervals,b) ? (b+x+eps)/2 : b;
  return null;
}

export function openSetsSvg(state = {}) {
  const name=selected(state,'set',Object.keys(setIntervals),'open');
  const view=selected(state,'view',['direct','preimage'],'direct');
  const x=bounded(state,'x',0,-2,2), eps=bounded(state,'epsilon',0.5,0.05,1);
  const intervals=view==='preimage' && name==='positive' ? [[-1,0,false,false],[0,1,false,false]] : setIntervals[name];
  const witness=setWitness(intervals,x,eps), inside=witness===null;
  const left=42,right=598,axisY=126,ballY=216;
  const px=value=>left+(value+3.15)/6.3*(right-left);
  let body=`<rect x="0" y="0" width="640" height="320" fill="#f9fbfd"/>`;
  body+=text(320,29,view==='preimage'?`f⁻¹(${setLabels[name]}) under f(x)=x²`:`S = ${setLabels[name]}`,18,'#22364e');
  body+=text(54,87,'SET',12,'#205a95','start')+text(54,178,'BALL',12,'#a34c31','start');
  body+=line(left,axisY,right,axisY,'#627386',1.5)+line(left,ballY,right,ballY,'#627386',1.5);
  for(let k=-3;k<=3;k++) body+=line(px(k),axisY-6,px(k),axisY+6,'#627386',1)+text(px(k),axisY+23,k,11);
  for(const [a,b,ac,bc] of intervals){
    if(a===b){body+=circle(px(a),axisY,6,'#205a95','#205a95');continue;}
    const aPx=Number.isFinite(a)?px(a):left,bPx=Number.isFinite(b)?px(b):right;
    body+=line(aPx,axisY,bPx,axisY,'#205a95',9);
    if(Number.isFinite(a))body+=circle(aPx,axisY,6,ac?'#205a95':'#f9fbfd','#205a95',2.5);
    else body+=`<path d="M ${fmt(left)} ${axisY} l 11 -7 v 14 z" fill="#205a95"/>`;
    if(Number.isFinite(b))body+=circle(bPx,axisY,6,bc?'#205a95':'#f9fbfd','#205a95',2.5);
    else body+=`<path d="M ${fmt(right)} ${axisY} l -11 -7 v 14 z" fill="#205a95"/>`;
  }
  body+=line(px(x-eps),ballY,px(x+eps),ballY,'#b45b37',9);
  body+=circle(px(x-eps),ballY,5,'#f9fbfd','#b45b37',2)+circle(px(x+eps),ballY,5,'#f9fbfd','#b45b37',2);
  body+=line(px(x),axisY-18,px(x),ballY+19,'#627386',1,'stroke-dasharray="4 4"');
  body+=circle(px(x),ballY,6,'#22364e','#22364e')+text(px(x),ballY+28,`x=${fmt(x)}`,12);
  if(witness!==null){body+=circle(px(witness),ballY,5,'#db3d37','#fff',1.5)+text(px(witness),ballY-17,`w=${fmt(witness)}`,12,'#a12728');}
  body+=text(320,291,inside?'Bε(x) ⊆ set':`Bε(x) ⊄ set; witness ${fmt(witness)} is outside`,15,inside?'#176b54':'#a12728');
  const label=view==='preimage'&&name==='positive'?'(−1, 0) ∪ (0, 1)':setLabels[name];
  const desc=`Blue is ${label}, with filled endpoints included and hollow endpoints excluded. Rust is the open ball (${fmt(x-eps)}, ${fmt(x+eps)}). x=${fmt(x)}. ${inside?'The ball is contained.':`The red witness ${fmt(witness)} lies in the ball outside the set.`}`;
  return svg('open-sets',`Interval membership and epsilon ball: ${label}`,desc,640,320,body);
}

function polygon(points,fill,stroke='#455d77',width=1.3){return `<polygon points="${points.map(([x,y])=>`${fmt(x)},${fmt(y)}`).join(' ')}" fill="${fill}" stroke="${stroke}" stroke-width="${width}"/>`;}
function triangleArea(vertices, face){const [a,b,c]=face.map(i=>vertices[i]);return Math.abs((b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]))/2;}
function subdivide(vertices,faces,steps){
  let latest=null;
  for(let step=0;step<steps;step++){
    let index=0,best=-1;
    faces.forEach((face,i)=>{const area=triangleArea(vertices,face);if(area>best){best=area;index=i;}});
    const [a,b,c]=faces[index], center=[0,1].map(k=>(vertices[a][k]+vertices[b][k]+vertices[c][k])/3);
    const m=vertices.push(center)-1;
    faces.splice(index,1,[a,b,m],[b,c,m],[c,a,m]);
    latest=m;
  }
  return latest;
}
export function eulerSvg(state = {}) {
  const surface=selected(state,'surface',['sphere','torus'],'sphere');
  const steps=Math.round(bounded(state,'steps',0,0,8));
  let vertices,faces,baseV,baseE,baseF,extra='';
  if(surface==='sphere'){
    vertices=[[220,47],[380,321],[60,321],[220,205]];
    // The fourth tetrahedron face, ABC, is the outside face in this planar K4 drawing.
    faces=[[0,1,3],[1,2,3],[2,0,3]];
    baseV=4;baseE=6;baseF=4;
    extra=polygon([vertices[0],vertices[1],vertices[2]],'#e8eff8','#455d77',2);
  } else {
    vertices=[];
    for(let j=0;j<=3;j++)for(let i=0;i<=3;i++)vertices.push([70+100*i,55+100*j]);
    faces=[];
    for(let j=0;j<3;j++)for(let i=0;i<3;i++){
      const a=j*4+i,b=a+1,c=a+4,d=c+1;
      faces.push([a,b,d],[a,d,c]);
    }
    baseV=9;baseE=27;baseF=18;
    extra=polygon([[70,55],[370,55],[370,355],[70,355]],'#e8eff8','#455d77',2);
  }
  const latest=subdivide(vertices,faces,steps);
  let body=`<rect x="0" y="0" width="650" height="410" fill="#f9fbfd"/>`;
  body+=text(325,28,surface==='sphere'?'Tetrahedron boundary (K₄)':'3 × 3 periodic torus triangulation',17,'#22364e');
  body+=extra;
  faces.forEach((face,i)=>{body+=polygon(face.map(v=>vertices[v]),i%2?'#dce8f7':'#cbdff2','#6380a2',1.3);});
  if(surface==='sphere'){
    body+=polygon([vertices[0],vertices[1],vertices[2]],'none','#344a68',3);
    ['A','B','C','D'].forEach((label,i)=>{body+=circle(...vertices[i],6,'#205a95','#fff',1)+text(vertices[i][0]+(i===2?-18:12),vertices[i][1]-10,label,13,'#22364e');});
    body+=text(218,379,'Outside face ABC completes the tetrahedron',12,'#475d75');
  } else {
    body+=polygon([[70,55],[370,55],[370,355],[70,355]],'none','#2a547f',3);
    body+=text(220,48,'top ↔ bottom',12,'#205a95');
    body+=text(220,374,'bottom ↔ top',12,'#205a95');
    body+=text(45,210,'L',13,'#205a95')+text(395,210,'R',13,'#205a95');
    body+=text(220,393,`Boundary copies identified: ${16+steps} drawn nodes = ${9+steps} vertices`,11,'#475d75');
  }
  if(latest!==null)body+=circle(...vertices[latest],7,'#d05a35','#fff',2)+text(vertices[latest][0]+13,vertices[latest][1]-10,'new',11,'#a33d27','start');
  const V=baseV+steps,E=baseE+3*steps,F=baseF+2*steps,chi=V-E+F;
  body+=text(445,91,`${steps} face ${steps===1?'split':'splits'}`,17,'#22364e','start');
  body+=text(445,143,`V = ${V}`,18,'#205a95','start');
  body+=text(445,181,`E = ${E}`,18,'#205a95','start');
  body+=text(445,219,`F = ${F}`,18,'#205a95','start');
  body+=text(445,273,`χ = ${chi}`,23,'#176b54','start');
  body+=text(445,309,'Each split: +1 V',12,'#475d75','start');
  body+=text(445,327,'+3 E, +2 F',12,'#475d75','start');
  const desc=`${surface==='sphere'?'Tetrahedron boundary shown as planar K4, with ABC as outside face.':'Nine distinct vertices in a periodic 3 by 3 square grid; opposite boundary edges are identified.'} ${steps} triangular face subdivisions are drawn. V=${V}, E=${E}, F=${F}, and Euler characteristic ${chi}. Orange dot marks the newest vertex.`;
  return svg('euler',`Triangulation after ${steps} face subdivisions`,desc,650,410,body);
}

function squarePanel(cx,cy,perm,caption){
  const slots=[[-48,-48],[48,-48],[48,48],[-48,48]];
  let out=polygon(slots.map(([x,y])=>[cx+x,cy+y]),'#e8eff8','#46607d',2);
  out+=line(cx,cy-63,cx,cy+63,'#627386',1,'stroke-dasharray="4 4"');
  for(let src=0;src<4;src++){
    const [dx,dy]=slots[perm[src]-1], color=['#205a95','#b35a37','#176b54','#7e59a2'][src];
    out+=circle(cx+dx,cy+dy,14,color,'#fff',2)+text(cx+dx,cy+dy+5,src+1,14,'#fff')
      +(src===0?circle(cx+dx,cy+dy,18,'none','#253448',2):'');
  }
  out+=text(cx,cy+83,caption,13,'#253448');
  out+=text(cx,cy+105,perm.map((position,i)=>`${i+1}→${position}`).join('  '),10,'#475d75');
  return out;
}
export function squareSymmetrySvg(state = {}) {
  const result=evaluateSquare(state);
  const a=result.first,b=result.second,afterA=result.firstDestinations,final=result.destinations,product=result.product;
  let body=`<rect x="0" y="0" width="680" height="310" fill="#f9fbfd"/>`;
  body+=text(340,29,`Apply ${a}, then ${b}: ${b}∘${a} = ${product}`,18,'#22364e');
  body+=text(340,52,'Dashed line: fixed vertical mirror for F. Positions 1–4: clockwise from top left.',12,'#475d75');
  body+=squarePanel(120,133,[1,2,3,4],'Original');
  body+=squarePanel(340,133,afterA,`After ${a}`);
  body+=squarePanel(560,133,final,`After ${b}`);
  body+=line(184,133,264,133,'#8290a3',2)+`<path d="M 264 133 l -9 -5 v 10 z" fill="#8290a3"/>`;
  body+=line(404,133,484,133,'#8290a3',2)+`<path d="M 484 133 l -9 -5 v 10 z" fill="#8290a3"/>`;
  body+=text(340,291,`Composite action: ${final.map((position,i)=>`${i+1}→${position}`).join(', ')}`,14,'#205a95');
  return svg('d4',`Square symmetry composition ${b} after ${a}`,`Positions 1 through 4 run clockwise from top left. Labels move with the square; the vertical mirror stays fixed. Corner 1 has an extra outline. Apply ${a} first, then ${b}. The result is ${product}. ${final.map((position,i)=>`Original corner ${i+1} maps to position ${position}`).join('; ')}.`,680,310,body);
}

function gcd(a,b){while(b)[a,b]=[b,a%b];return a;}
export function modularSvg(state = {}) {
  const n=Math.round(bounded(state,'n',12,2,24));
  const input=Math.round(bounded(state,'a',5,0,23));
  const a=input%n,operation=selected(state,'operation',['add','multiply'],'multiply');
  const target=operation==='add'?0:1;
  const map=b=>operation==='add'?(a+b)%n:(a*b)%n;
  const hits=Array.from({length:n},(_,b)=>b).filter(b=>map(b)===target);
  const columns=12,rows=Math.ceil(n/columns),height=rows===1?280:405;
  let body=`<rect x="0" y="0" width="650" height="${height}" fill="#f9fbfd"/>`;
  body+=text(325,30,`${input} ≡ ${a} (mod ${n}); b ↦ (${a} ${operation==='add'?'+':'×'} b) mod ${n}`,17,'#22364e');
  body+=text(325,52,`Residue map on ℤ/${n}ℤ; ${operation==='add'?'zero':'one'} is highlighted in green`,12,'#475d75');
  for(let b=0;b<n;b++){
    const col=b%columns,row=Math.floor(b/columns),x=39+col*48,y=68+row*122,result=map(b);
    body+=`<rect x="${x}" y="${y}" width="42" height="103" rx="5" fill="${result===target?'#e1f3e9':'#e8eff8'}" stroke="${result===target?'#23805c':'#a1b6ce'}" stroke-width="1.3"/>`;
    body+=text(x+21,y+24,`b=${b}`,12,'#253448');
    body+=line(x+21,y+34,x+21,y+64,'#7e90a4',2)+`<path d="M ${x+21} ${y+68} l -4 -7 h 8 z" fill="#7e90a4"/>`;
    body+=text(x+21,y+88,result,17,result===target?'#176b54':'#205a95');
  }
  const footY=rows===1?230:353;
  body+=text(325,footY,`gcd(${a}, ${n}) = ${gcd(a,n)}; ${operation==='add'?'additive':'multiplicative'} inverse ${hits.length===1?`b = ${hits[0]}`:'does not exist'}`,15,hits.length===1?'#176b54':'#a12728');
  body+=text(325,footY+24,`${hits.length} input${hits.length===1?'':'s'} map to ${target}`,12,'#475d75');
  const desc=`Each tile shows a residue b in 0 through ${n-1} mapping to ${map(0)} through the selected ${operation} operation. Specifically, ${Array.from({length:n},(_,b)=>`${b} maps to ${map(b)}`).join('; ')}. Green tiles map to ${target}. gcd of ${a} and ${n} is ${gcd(a,n)}.`;
  return svg('modular',`Residue map modulo ${n}`,desc,650,height,body);
}

export function curvatureSvg(state = {}) {
  const curve=selected(state,'curve',['circle','parabola','cusp'],'circle');
  const t=bounded(state,'t',0.8,-2,2),s=bounded(state,'s',1,0.5,3),u=s*t;
  const evaluate=v=>curve==='circle'?[2*Math.cos(v),2*Math.sin(v)]:curve==='parabola'?[v,v*v/2]:[v*v,v*v*v];
  const derivative=v=>curve==='circle'?[-2*Math.sin(v),2*Math.cos(v)]:curve==='parabola'?[1,v]:[2*v,3*v*v];
  const second=v=>curve==='circle'?[-2*Math.cos(v),-2*Math.sin(v)]:curve==='parabola'?[0,1]:[2,6*v];
  const p=evaluate(u),d=derivative(u),dd=second(u),speed=Math.hypot(...d),regular=speed>1e-12;
  const tangent=regular?d.map(v=>v/speed):null;
  const normal=regular?[-tangent[1],tangent[0]]:null;
  const kappa=regular?(d[0]*dd[1]-d[1]*dd[0])/speed**3:null;
  const radius=regular && Math.abs(kappa)>1e-12?1/Math.abs(kappa):null;
  const center=radius!==null?[p[0]+normal[0]/kappa,p[1]+normal[1]/kappa]:null;
  const range=curve==='circle'?[0,2*Math.PI]:[u-(curve==='cusp'?1.2:1.5),u+(curve==='cusp'?1.2:1.5)];
  const samples=Array.from({length:161},(_,i)=>evaluate(range[0]+(range[1]-range[0])*i/160));
  let xs=samples.map(q=>q[0]),ys=samples.map(q=>q[1]);
  const showCircle=radius!==null && radius<=3.5;
  if(showCircle){xs.push(center[0]-radius,center[0]+radius);ys.push(center[1]-radius,center[1]+radius);}
  let minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys);
  const pad=Math.max(0.2,0.1*Math.max(maxX-minX,maxY-minY));
  minX-=pad;maxX+=pad;minY-=pad;maxY+=pad;
  const scale=Math.min(410/(maxX-minX),300/(maxY-minY));
  const mx=(minX+maxX)/2,my=(minY+maxY)/2;
  const screen=([x,y])=>[230+(x-mx)*scale,193-(y-my)*scale];
  const [px,py]=screen(p);
  let body=`<rect x="0" y="0" width="700" height="390" fill="#f9fbfd"/><rect x="20" y="35" width="420" height="320" fill="#fff" stroke="#d8e0e9" stroke-width="1"/>`;
  if(showCircle){const [cx,cy]=screen(center);body+=circle(cx,cy,radius*scale,'none','#d89152',1.8,'stroke-dasharray="5 4"');}
  const points=samples.map(q=>screen(q).map(v=>fmt(v,2)).join(',')).join(' ');
  body+=`<polyline points="${points}" fill="none" stroke="#205a95" stroke-width="3"/>`;
  if(regular){
    const arrow=(vec,color,label)=>{
      const dx=vec[0],dy=-vec[1],angle=Math.atan2(dy,dx),wing=8;
      const roomX=dx>1e-9?(430-px)/dx:dx< -1e-9?(px-30)/-dx:Infinity;
      const roomY=dy>1e-9?(345-py)/dy:dy< -1e-9?(py-45)/-dy:Infinity;
      const length=Math.max(0,Math.min(63,roomX-10,roomY-10));
      const tx=px+dx*length,ty=py+dy*length;
      const labelX=Math.max(36,Math.min(424,tx+dx*13));
      const labelY=Math.max(55,Math.min(340,ty+dy*13));
      return line(px,py,tx,ty,color,2.5)+`<path d="M ${fmt(tx)} ${fmt(ty)} L ${fmt(tx-wing*Math.cos(angle-0.5))} ${fmt(ty-wing*Math.sin(angle-0.5))} L ${fmt(tx-wing*Math.cos(angle+0.5))} ${fmt(ty-wing*Math.sin(angle+0.5))} Z" fill="${color}"/>`+text(labelX,labelY,label,12,color);};
    body+=arrow(tangent,'#ad4f37','T')+arrow(normal,'#198368','N');
  }
  body+=circle(px,py,7,'#243447','#fff',2);
  if(!regular)body+=text(px+18,py-15,'singular',12,'#a12728','start');
  body+=text(465,58,curve==='circle'?'Radius 2 circle':curve==='parabola'?'Parabola':'Stationary cusp',17,'#22364e','start');
  body+=text(465,95,`u = st = ${fmt(u)}`,14,'#475d75','start');
  body+=text(465,129,`γ = (${fmt(p[0])}, ${fmt(p[1])})`,13,'#253448','start');
  body+=text(465,164,regular?`κ ≈ ${fmtSmall(kappa)}`:'κ undefined',16,regular?'#176b54':'#a12728','start');
  body+=text(465,191,regular?`speed = ${fmt(s*speed)}`:'speed = 0',13,'#475d75','start');
  body+=text(465,227,showCircle?`osculating R = ${fmt(radius)}`:regular?'R beyond local frame':'no tangent or circle',12,'#9a622e','start');
  body+=text(465,281,'Blue: curve',12,'#205a95','start');
  body+=text(465,302,'Rust: tangent T',12,'#ad4f37','start');
  body+=text(465,323,'Green: left normal N',12,'#198368','start');
  body+=text(465,345,'T, N: unit directions',11,'#475d75','start');
  body+=text(465,362,'Arrow lengths illustrative',11,'#475d75','start');
  body+=text(230,376,'Auto-fit local frame · equal x/y scale',12,'#475d75');
  const desc=`${curve} at u=${fmt(u)} and speed scale s=${fmt(s)}. Position (${fmt(p[0])}, ${fmt(p[1])}). ${regular?`The unit tangent is (${fmt(tangent[0])}, ${fmt(tangent[1])}), left normal is (${fmt(normal[0])}, ${fmt(normal[1])}), and signed curvature is approximately ${fmtSmall(kappa)}. ${showCircle?`The dashed osculating circle has radius ${fmt(radius)}.`:'The osculating circle exceeds the local frame.'}`:'The cusp has zero speed; tangent and curvature are undefined.'} The local frame auto-fits the shown curve and uses equal x/y scale within this view. Tangent and normal arrow lengths are illustrative.`;
  return svg('curvature',`Curve curvature microscope: ${curve}`,desc,700,390,body);
}

const laterVisuals = (() => {
// SVG-only visualizations for five geometry/algebra labs.
// Each renderer accepts the fully populated control state and its evaluate(state)
// result. All plotted coordinates are data, never executable markup.
const esc = value => String(value).replace(/[&<>"']/g, c => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'
}[c]));
const f = value => Number(value.toFixed(2));
const asNum = (state, key, fallback) => {
  const number = Number(state?.[key] ?? fallback);
  return Number.isFinite(number) ? number : fallback;
};
const named = (state, key, values, fallback) => values.includes(state?.[key]) ? state[key] : fallback;
const svg = (viewBox, title, desc, body) => {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const [, , width, height] = viewBox.split(' ').map(Number);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img" aria-labelledby="${id}-title ${id}-desc"><title id="${id}-title">${esc(title)}</title><desc id="${id}-desc">${esc(desc)}</desc><rect x="0" y="0" width="${width}" height="${height}" fill="#fff"/>${body}</svg>`;
};
const text = (x, y, value, extra = '') => `<text x="${f(x)}" y="${f(y)}" ${extra.includes('fill=') ? '' : 'fill="#26384c"'} font-family="system-ui, sans-serif" ${extra.includes('font-size=') ? '' : 'font-size="13"'} ${extra}>${esc(value)}</text>`;
const polyline = (points, color, width = 3, extra = '') => `<polyline points="${points.map(([x, y]) => `${f(x)},${f(y)}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" ${extra}/>`;

function sphereMetricSvg(state, result) {
  const lat1 = asNum(state, 'lat1', 0), lon1 = asNum(state, 'lon1', 0);
  const lat2 = asNum(state, 'lat2', 45), lon2 = asNum(state, 'lon2', 90);
  const radius = asNum(state, 'R', 1);
  const path = named(state, 'path', ['great', 'route'], 'great');
  const rad = Math.PI / 180;
  const vector = (lat, lon) => [Math.cos(lat * rad) * Math.cos(lon * rad), Math.cos(lat * rad) * Math.sin(lon * rad), Math.sin(lat * rad)];
  const a = vector(lat1, lon1), b = vector(lat2, lon2);
  const dot = Math.max(-1, Math.min(1, a.reduce((sum, v, i) => sum + v * b[i], 0)));
  const theta = Math.acos(dot);
  const normalize = v => { const n = Math.hypot(...v); return v.map(x => x / n); };
  // At antipodes there are infinitely many minimizing arcs. Pick one fixed
  // orthogonal direction solely to render a representative.
  const base = Math.abs(a[2]) < 0.9 ? [0, 0, 1] : [0, 1, 0];
  const tangent = normalize([base[0] - dot3(base, a) * a[0], base[1] - dot3(base, a) * a[1], base[2] - dot3(base, a) * a[2]]);
  const samples = [];
  if (path === 'great') {
    for (let i = 0; i <= 180; i++) {
      const t = i / 180;
      let v;
      if (theta < 1e-9) v = a;
      else if (Math.abs(Math.PI - theta) < 1e-8) v = a.map((x, j) => Math.cos(Math.PI * t) * x + Math.sin(Math.PI * t) * tangent[j]);
      else v = normalize(a.map((x, j) => Math.sin((1 - t) * theta) / Math.sin(theta) * x + Math.sin(t * theta) / Math.sin(theta) * b[j]));
      let lat = Math.asin(Math.max(-1, Math.min(1, v[2]))) / rad;
      let lon = Math.atan2(v[1], v[0]) / rad;
      if (i === 0) { lat = lat1; lon = lon1; }
      if (i === 180) { lat = lat2; lon = lon2; }
      samples.push([lat, lon]);
    }
    // A pole is one point for every longitude. Keep the endpoint on the
    // incoming/outgoing path instead of drawing an artificial top-edge arc.
    if (Math.abs(lat1) === 90) samples[0][1] = samples[1][1];
    if (Math.abs(lat2) === 90) samples[samples.length - 1][1] = samples[samples.length - 2][1];
  } else {
    for (let i = 0; i <= 90; i++) samples.push([lat1 + (lat2 - lat1) * i / 90, lon1]);
    const delta = Math.atan2(Math.sin((lon2 - lon1) * rad), Math.cos((lon2 - lon1) * rad)) / rad;
    if (Math.abs(lat2) !== 90) {
      for (let i = 1; i <= 90; i++) samples.push([lat2, lon1 + delta * i / 90]);
    }
  }
  const project = ([lat, lon]) => [230 + lon, 155 - lat * (105 / 90)];
  const wrapLon = raw => {
    let lon = ((raw + 180) % 360 + 360) % 360 - 180;
    if (lon === -180 && raw > 0) lon = 180;
    return lon;
  };
  const pathParts = [];
  let current = [];
  for (let i = 0; i < samples.length; i++) {
    const point = samples[i];
    const lon = wrapLon(point[1]);
    if (current.length && Math.abs(lon - current[current.length - 1][1]) > 180) {
      pathParts.push(current.map(([lat, lng]) => project([lat, lng])));
      current = [];
    }
    current.push([point[0], lon]);
  }
  if (current.length) pathParts.push(current.map(([lat, lng]) => project([lat, lng])));
  const grid = [-90, -45, 0, 45, 90].map(lat => `<path d="M 50 ${f(155 - lat * 105 / 90)} H 410" stroke="#d2dbe5" stroke-width="1"/>`).join('')
    + [-180, -90, 0, 90, 180].map(lon => `<path d="M ${f(230 + lon)} 50 V 260" stroke="#d2dbe5" stroke-width="1"/>`).join('');
  const endpoint = (lat, lon, label, color) => {
    const [x, y] = project([lat, lon]);
    const labelY = lat >= 85 ? y + 18 : y - 7;
    if (Math.abs(Math.abs(lon) - 180) < 1e-9) {
      return [50, 410].map((edge, i) =>
        `<circle cx="${edge}" cy="${f(y)}" r="5" fill="${color}" stroke="#fff" stroke-width="1.5"/>`
        + text(i === 0 ? 58 : 402, labelY, `${label} (${i === 0 ? '−180°' : '+180°'})`, i === 0 ? 'font-size="11"' : 'font-size="11" text-anchor="end"')
      ).join('');
    }
    return `<circle cx="${f(x)}" cy="${f(y)}" r="5" fill="${color}" stroke="#fff" stroke-width="1.5"/>${text(x + 8, labelY, label)}`;
  };
  const measured = result?.rows?.find(row => row[0] === 'Measured path')?.[1];
  const caption = `${path === 'great' ? 'Shorter great-circle arc' : 'Meridian then latitude'}${measured === undefined ? '' : ` · length ≈ ${measured} at R=${radius}`}`;
  const polar = Math.abs(lat1) === 90 || Math.abs(lat2) === 90;
  const antipodal = Math.abs(Math.PI - theta) < 1e-8;
  const desc = `Equirectangular latitude-longitude projection of a sphere. Start ${lat1} degrees latitude, ${lon1} degrees longitude; end ${lat2} degrees latitude, ${lon2} degrees longitude. ${caption}. The drawn map distorts spherical lengths and angles; consult the metric and segment table for measurements.${polar ? ' Longitude is undefined at the pole; the displayed coordinate is a chosen label.' : ''}${antipodal ? ' Antipodal endpoints have many minimizing great-circle arcs; one representative is drawn.' : ''}`;
  const coordinateLabels = text(50, 18, 'Latitude φ (degrees)', 'font-size="11"')
    + text(277, 18, 'Longitude λ (degrees)', 'font-size="11"')
    + [[90, '90°N'], [45, '45°N'], [0, '0°'], [-45, '45°S'], [-90, '90°S']]
      .map(([lat, label]) => text(6, 159 - lat * 105 / 90, label, 'font-size="10"')).join('')
    + [-180, -90, 0, 90, 180].map(lon => text(230 + lon, 42, `${lon}°`, 'font-size="10" text-anchor="middle"')).join('');
  return svg('0 0 460 365', 'Spherical path in latitude-longitude coordinates', desc,
    `<rect x="50" y="50" width="360" height="210" fill="#f2f8fc" stroke="#70869b" stroke-width="1.5"/>${grid}${coordinateLabels}`
    + pathParts.filter(part => part.length > 1).map(part => polyline(part, path === 'great' ? '#195b94' : '#bc593a', 3.5)).join('')
    + endpoint(lat1, wrapLon(samples[0][1]), 'A', '#195b94')
    + endpoint(lat2, wrapLon(samples[samples.length - 1][1]), 'B', '#bc593a')
    + text(50, 283, caption)
    + text(50, 305, `A (${lat1}°, ${lon1}°)  B (${lat2}°, ${lon2}°)`, 'font-size="11"')
    + text(50, 327, 'Equirectangular map: ±180° edges match; distances distorted', 'font-size="11"')
    + (polar ? text(50, 348, 'At a pole longitude is arbitrary; marker follows the path', 'font-size="11"') : '')
  );
}
const dot3 = (a, b) => a.reduce((sum, v, i) => sum + v * b[i], 0);

function polynomialLociSvg(state, result) {
  const preset = named(state, 'preset', ['circle', 'parabola', 'cusp', 'node'], 'cusp');
  const window = Math.max(1, Math.min(6, asNum(state, 'window', 3)));
  const sampleX = asNum(state, 'x', 0), sampleY = asNum(state, 'y', 0);
  const scale = 154 / window, px = x => 190 + scale * x, py = y => 190 - scale * y;
  const value = (x, y) => ({
    circle: x * x + y * y - 1,
    parabola: y - x * x,
    cusp: y * y - x * x * x,
    node: y * y - x * x * (x + 1)
  })[preset];
  const gradient = ({
    circle: [2 * sampleX, 2 * sampleY],
    parabola: [-2 * sampleX, 1],
    cusp: [-3 * sampleX * sampleX, 2 * sampleY],
    node: [-3 * sampleX * sampleX - 2 * sampleX, 2 * sampleY]
  })[preset];
  const residual = value(sampleX, sampleY);
  const sampleKind = residual !== 0 ? 'off the zero set' : gradient.every(v => v === 0) ? 'singular zero' : 'smooth zero';
  const tracks = [];
  if (preset === 'circle') {
    tracks.push(Array.from({length: 241}, (_, i) => [Math.cos(i * Math.PI / 120), Math.sin(i * Math.PI / 120)]));
  } else {
    const branches = preset === 'parabola' ? [1] : [1, -1];
    for (const sign of branches) {
      const xmin = preset === 'node' ? -1 : preset === 'cusp' ? 0 : -window;
      const xmax = window;
      const coords = [];
      for (let i = 0; i <= 600; i++) {
        const x = xmin + (xmax - xmin) * i / 600;
        const y = preset === 'parabola' ? x * x : preset === 'cusp' ? sign * Math.pow(x, 1.5) : sign * Math.abs(x) * Math.sqrt(x + 1);
        if (Math.abs(x) <= window + 1e-8 && Math.abs(y) <= window + 1e-8) coords.push([x, y]);
      }
      tracks.push(coords);
    }
  }
  const grid = Array.from({length: 2 * window + 1}, (_, i) => i - window).map(v =>
    `<path d="M ${f(px(v))} 36 V 344 M 36 ${f(py(v))} H 344" stroke="${v === 0 ? '#8799aa' : '#e0e6ec'}" stroke-width="${v === 0 ? 1.5 : 1}"/>`).join('');
  const curves = tracks.filter(track => track.length > 1).map(track => polyline(track.map(([x, y]) => [px(x), py(y)]), '#1a5a92', 2.6)).join('');
  const zeros = (result?.rows ?? []).map(row => {
    const [x, y] = row;
    return `<circle cx="${f(px(Number(x)))}" cy="${f(py(Number(y)))}" r="3" fill="${row[4] === 'singular' ? '#ad3d37' : '#1a5a92'}" stroke="#fff" stroke-width="1"/>`;
  }).join('');
  const sampleInside = Math.abs(sampleX) <= window && Math.abs(sampleY) <= window;
  const color = sampleKind === 'singular zero' ? '#ad3d37' : sampleKind === 'smooth zero' ? '#176f68' : '#b15d21';
  const sampleMark = sampleInside ? `<circle cx="${f(px(sampleX))}" cy="${f(py(sampleY))}" r="8" fill="none" stroke="${color}" stroke-width="2.5"/><circle cx="${f(px(sampleX))}" cy="${f(py(sampleY))}" r="2.8" fill="${color}"/>` : '';
  const equation = {circle: 'x² + y² − 1 = 0', parabola: 'y − x² = 0', cusp: 'y² − x³ = 0', node: 'y² − x²(x + 1) = 0'}[preset];
  const desc = `${equation}. Real curve drawn with equal horizontal and vertical scales over the selected integer window |x|, |y| ≤ ${window}. Blue dots are exact integer-lattice zeros from the table. Sample (${sampleX}, ${sampleY}) is ${sampleKind}, residual ${residual}, gradient (${gradient.join(', ')}).${sampleInside ? ' Ring marks sample.' : ' Sample is outside the plotted window.'} The smooth curve is a numerical visualization; the exact zero classification is in the table.`;
  const axisLabels = text(194, 28, 'y', 'font-size="12" font-weight="600"')
    + text(349, 195, 'x', 'font-size="12" font-weight="600"')
    + [-window, 0, window].map(v => text(px(v), 359, v, 'font-size="10" text-anchor="middle"')).join('')
    + [window, 0, -window].map(v => text(31, py(v) + 4, v, 'font-size="10" text-anchor="end"')).join('');
  return svg('0 0 500 400', 'Polynomial real zero set and sampled point', desc,
    `<rect x="36" y="36" width="308" height="308" fill="#fff" stroke="#8999a9"/>${grid}${curves}${zeros}${sampleMark}${axisLabels}`
    + text(360, 55, equation, 'font-size="12"')
    + text(360, 86, `sample (${sampleX}, ${sampleY})`, 'font-size="12"')
    + text(360, 108, `F = ${residual}`, 'font-size="12"')
    + text(360, 130, `∇F = (${gradient.join(', ')})`, 'font-size="12"')
    + text(360, 157, sampleKind, `font-size="12" fill="${color}"`)
    + (sampleInside ? '' : text(360, 181, 'outside plot', 'font-size="12"'))
    + text(36, 389, `Equal scale · integer window ±${window}`, 'font-size="11"')
  );
}

function projectiveIntersectionSvg(state, result) {
  const line = named(state, 'line', ['ordinary', 'tangent', 'vertical'], 'ordinary');
  const m = asNum(state, 'm', 0);
  const b = line === 'tangent' ? -m * m / 4 : asNum(state, 'b', 1);
  const view = named(state, 'view', ['real', 'complex'], 'real');
  const discriminant = m * m + 4 * b;
  const roots = line === 'vertical' ? [m] : discriminant < 0 ? [] : discriminant === 0 ? [m / 2] : [(m - Math.sqrt(discriminant)) / 2, (m + Math.sqrt(discriminant)) / 2];
  const intersections = roots.map(x => [x, x * x]);
  const extent = Math.max(5, ...intersections.map(p => p[1] + 1));
  const scale = 167 / extent, px = x => 190 + x * scale, py = y => 190 - y * scale;
  const xmax = Math.sqrt(extent);
  const curve = Array.from({length: 241}, (_, i) => {
    const x = -xmax + 2 * xmax * i / 240;
    return [px(x), py(x * x)];
  });
  const linePoints = [];
  if (line === 'vertical') linePoints.push([px(m), py(-extent)], [px(m), py(extent)]);
  else {
    for (let i = 0; i <= 600; i++) {
      const x = -extent + 2 * extent * i / 600;
      const y = m * x + b;
      if (Math.abs(y) <= extent) linePoints.push([px(x), py(y)]);
    }
  }
  const dots = intersections.map(([x, y]) => {
    const double = line !== 'vertical' && discriminant === 0;
    return `<circle cx="${f(px(x))}" cy="${f(py(y))}" r="5" fill="#b84e37" stroke="#fff" stroke-width="1.5"/>${double ? `<circle cx="${f(px(x))}" cy="${f(py(y))}" r="10" fill="none" stroke="#b84e37" stroke-width="2"/>` : ''}`;
  }).join('');
  const pointStatements = line === 'vertical'
    ? [`Finite: (${m}, ${m * m}), mult. 1`, 'Infinity: [0:1:0], mult. 1']
    : discriminant < 0
      ? [`Δ = ${discriminant} < 0`, 'Two nonreal finite points', view === 'real' ? 'Hidden in real view' : 'No real-plane positions']
      : discriminant === 0
        ? [`Finite tangent: (${f(m / 2)}, ${f(m * m / 4)})`, 'Multiplicity 2', 'No intersection at infinity']
        : [`Finite: (${f(roots[0])}, ${f(roots[0] ** 2)})`, `Finite: (${f(roots[1])}, ${f(roots[1] ** 2)})`, 'Each multiplicity 1'];
  const side = pointStatements.map((statement, i) => text(393, 90 + 25 * i, statement, 'font-size="12"')).join('');
  const lineLabel = line === 'vertical' ? `X = ${m}Z` : `Y = ${m}X + (${b})Z`;
  const desc = `Affine real chart Z=1 with equal axis scales, autozoomed to x and y between ${-f(extent)} and ${f(extent)}; the zoom range varies with the selected line. Blue parabola y=x squared and rust line ${lineLabel}. ${pointStatements.join('. ')}. ${line === 'vertical' ? 'The infinity point is shown in a separate projective panel, not in the affine plot.' : discriminant < 0 ? 'Complex points are stated in a separate panel and not plotted as real points.' : 'Real finite intersections are marked on the plot.'} Total complex projective intersection multiplicity is two.`;
  const axisLabels = text(194, 38, 'y', 'font-size="12" font-weight="600"')
    + text(343, 184, 'x', 'font-size="12" font-weight="600"')
    + [-extent, 0, extent].map(v => text(px(v), 376, f(v), 'font-size="10" text-anchor="middle"')).join('')
    + text(28, 35, f(extent), 'font-size="10"')
    + text(28, 194, '0', 'font-size="10"')
    + text(28, 349, f(-extent), 'font-size="10"');
  return svg('0 0 680 425', 'Line and projective conic intersections', desc,
    `<rect x="23" y="23" width="334" height="334" fill="#fff" stroke="#8999a9"/>`
    + `<path d="M 190 23 V 357 M 23 190 H 357" stroke="#c5d0da" stroke-width="1.4"/>`
    + polyline(curve, '#195b94', 2.8)
    + (linePoints.length > 1 ? polyline(linePoints, '#b84e37', 2.6) : '')
    + dots + axisLabels
    + text(393, 42, 'YZ = X²', 'font-size="15" font-weight="600"')
    + text(393, 65, lineLabel, 'font-size="12"')
    + side
    + `<rect x="385" y="209" width="268" height="90" rx="5" fill="#eef3f8" stroke="#b5c4d2"/>`
    + text(396, 233, line === 'vertical' ? 'Projective boundary Z = 0' : 'Projective accounting', 'font-size="12" font-weight="600"')
    + text(396, 257, line === 'vertical' ? '[0:1:0] is real, at infinity' : 'No extra point at infinity', 'font-size="12"')
    + text(396, 281, 'Total multiplicity over ℂ: 2', 'font-size="12"')
    + text(23, 408, `Real plane · equal scales · autozoom ±${f(extent)} varies with line · ${view} view`, 'font-size="11"')
  );
}

function commutingSvg(state, result) {
  const rows = result?.rows ?? [];
  const input = named(state, 'input', ['a', 'b', 'c'], 'a');
  const row = rows.find(item => item[0] === input) ?? rows[0] ?? [input, '?', '?', '?', '?', 'different'];
  const allEqual = rows.length === 3 && rows.every(item => item[5] === 'equal');
  const map = (name, fallback) => named(state, name, ['zero', 'identity', 'swap', 'one'], fallback);
  const h = map('h', 'identity'), k = map('k', 'swap');
  const presets = {aligned: {f: [0, 1, 0], g: [0, 1, 0]}, flipped: {f: [0, 1, 0], g: [1, 0, 1]}, collision: {f: [0, 1, 0], g: [0, 0, 1]}};
  const preset = presets[named(state, 'preset', Object.keys(presets), 'flipped')];
  const arrows = [
    [170, 92, 360, 92, '#195b94', 'f'], [93, 126, 93, 258, '#b85a3c', 'g'],
    [433, 126, 433, 258, '#195b94', 'h'], [170, 290, 360, 290, '#b85a3c', 'k']
  ].map(([x1,y1,x2,y2,color,label]) => {
    const horizontal = y1 === y2;
    const tip = horizontal ? `${x2},${y2} ${x2 - 10},${y2 - 5} ${x2 - 10},${y2 + 5}` : `${x2},${y2} ${x2 - 5},${y2 - 10} ${x2 + 5},${y2 - 10}`;
    return `<path d="M ${x1} ${y1} L ${x2 - (horizontal ? 11 : 0)} ${y2 - (horizontal ? 0 : 11)}" stroke="${color}" stroke-width="3" fill="none"/><polygon points="${tip}" fill="${color}"/>${text(horizontal ? (x1+x2)/2 : x1+12, horizontal ? y1-10 : (y1+y2)/2, label, `font-size="15" fill="${color}"`)}`;
  }).join('');
  const box = (x, y, name, set, chosen, color) => `<rect x="${x}" y="${y}" width="78" height="66" rx="8" fill="#f4f8fc" stroke="${color}" stroke-width="2"/>${text(x+10,y+22, `${name} = ${set}`, 'font-size="13"')}${text(x+10,y+48, `${chosen}`, `font-size="20" font-weight="600" fill="${color}"`)}`;
  const rowNotes = rows.map((r,i) => text(24, 390+i*22, `${r[0]}: ${r[2]} ${r[5] === 'equal' ? '=' : '≠'} ${r[4]}`, `font-size="12" fill="${r[5] === 'equal' ? '#176f68' : '#ad3d37'}"`)).join('');
  const desc = `Square of finite-set maps. f: a to ${preset.f[0]}, b to ${preset.f[1]}, c to ${preset.f[2]}; g: a to ${preset.g[0]}, b to ${preset.g[1]}, c to ${preset.g[2]}; h is ${h}; k is ${k}. For selected ${input}, upper route h(f(${input})) is ${row[2]}, lower route k(g(${input})) is ${row[4]}. ${allEqual ? 'Both composites agree for all three inputs.' : 'The square does not commute because at least one input differs.'}`;
  return svg('0 0 540 480', 'Finite-set commuting square', desc,
    arrows
    + box(54, 59, 'A', '{a,b,c}', input, '#586c80')
    + box(360, 59, 'B', '{0,1}', row[1], '#195b94')
    + box(54, 257, 'C', '{0,1}', row[3], '#b85a3c')
    + box(360, 257, 'D', '{0,1}', `${row[2]} / ${row[4]}`, row[5] === 'equal' ? '#176f68' : '#ad3d37')
    + text(24, 356, `${input}: h∘f = ${row[2]}, k∘g = ${row[4]}`, 'font-size="13"')
    + rowNotes
    + text(280, 463, allEqual ? 'Square commutes' : 'Square does not commute', `font-size="14" font-weight="600" fill="${allEqual ? '#176f68' : '#ad3d37'}"`)
  );
}

function pullbackSvg(state, result) {
  const rows = result?.rows ?? [];
  const xs = ['a', 'b', 'c'], ys = ['u', 'v', 'w'];
  const pair = named(state, 'pair', xs.flatMap(x => ys.map(y => `${x}-${y}`)), 'a-u');
  const selected = rows.find(row => row[0] === `(${pair.replace('-', ',')})`);
  const compatible = selected?.[3] === 'yes';
  const matches = rows.filter(row => row[3] === 'yes').length;
  const cells = rows.map((row, i) => {
    const x = 79 + (i % 3) * 90, y = 89 + Math.floor(i / 3) * 77;
    const hit = row[0] === `(${pair.replace('-', ',')})`;
    const yes = row[3] === 'yes';
    return `<rect x="${x}" y="${y}" width="80" height="68" rx="6" fill="${yes ? '#d8ede8' : '#f0f2f5'}" stroke="${hit ? '#b2562f' : yes ? '#2e776f' : '#b9c4ce'}" stroke-width="${hit ? 3 : 1.5}"/>`
      + text(x+11, y+24, row[0], 'font-size="13"')
      + text(x+11, y+46, `${row[1]} ${yes ? '=' : '≠'} ${row[2]}`, `font-size="13" fill="${yes ? '#176f68' : '#6d7884'}"`);
  }).join('');
  const fValues = xs.map(x => rows.find(row => row[0].startsWith(`(${x},`))?.[1] ?? '?');
  const gValues = ys.map(y => rows.find(row => row[0].endsWith(`,${y})`))?.[2] ?? '?');
  const sets = named(state, 'sets', ['binary', 'ternary'], 'binary');
  const desc = `Three by three product X times Y. Green cells are exactly the ${matches} pairs satisfying f(x)=g(y); gray cells are incompatible. Rust outline marks candidate (${pair.replace('-', ',')}); ${compatible ? 'it is compatible and is the unique image of the singleton mediator' : 'it is incompatible, so the candidate singleton cone has no mediator'}. Rows a,b,c map under f to ${fValues.join(',')}; columns u,v,w map under g to ${gValues.join(',')}. Z has ${sets === 'binary' ? 2 : 3} elements.`;
  return svg('0 0 570 370', 'Pullback matching grid', desc,
    `<rect x="72" y="82" width="278" height="231" fill="#fff" stroke="#a7b6c4"/>${cells}`
    + ys.map((y,i) => text(112+i*90, 72, `${y} → ${gValues[i]}`, 'font-size="13"')).join('')
    + xs.map((x,i) => text(8, 126+i*77, `${x} → ${fValues[i]}`, 'font-size="13"')).join('')
    + text(370, 61, `P has ${matches} pairs`, 'font-size="15" font-weight="600"')
    + text(370, 101, `candidate (${pair.replace('-', ',')})`, 'font-size="13"')
    + text(370, 126, compatible ? 'f(x) = g(y)' : 'f(x) ≠ g(y)', `font-size="13" fill="${compatible ? '#176f68' : '#ad3d37'}"`)
    + text(370, 165, compatible ? 'singleton mediator:' : 'no mediator for', 'font-size="12"')
    + text(370, 188, compatible ? `t ↦ (${pair.replace('-', ',')})` : 'this candidate pair', 'font-size="12"')
    + text(72, 344, 'green: in P · rust outline: selected pair', 'font-size="11"')
  );
}

return {sphereMetricSvg, polynomialLociSvg, projectiveIntersectionSvg, commutingSvg, pullbackSvg};
})();
export const sphereMetricSvg = laterVisuals.sphereMetricSvg;
export const polynomialLociSvg = laterVisuals.polynomialLociSvg;
export const projectiveIntersectionSvg = laterVisuals.projectiveIntersectionSvg;
export const commutingSvg = laterVisuals.commutingSvg;
export const pullbackSvg = laterVisuals.pullbackSvg;
