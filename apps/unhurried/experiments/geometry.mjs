// Catalog geometry/algebra experiments. Evaluations use only their supplied state.
import { openSetsSvg, eulerSvg, squareSymmetrySvg, modularSvg, curvatureSvg,
  sphereMetricSvg, polynomialLociSvg, projectiveIntersectionSvg, commutingSvg,
  pullbackSvg } from './visuals-geometry.mjs';
import {SQUARE_NAMES, SQUARE_OPTIONS, evaluateSquare, squareDestinations, composeSquareMoves, squareOrder} from '../square-model.mjs';
const bounded = (state, key, fallback, min, max) => {
  const value = Number(state?.[key] ?? fallback);
  if (!Number.isFinite(value)) throw new RangeError(`${key} must be a finite number.`);
  return Math.min(max, Math.max(min, value));
};
const choice = (state, key, options, fallback) => {
  const value = state?.[key] ?? fallback;
  if (!options.includes(value)) throw new RangeError(`${key} is not a supported choice.`);
  return value;
};
const fmt = (x, digits = 4) => Math.abs(x) < 1e-10 ? '0' : Number(x.toFixed(digits)).toString();
const deg = x => x * Math.PI / 180;

const euler = {
  id: 'ga-lab-euler',
  title: 'Triangulation counter',
  question: 'What happens to V − E + F when one triangular face is subdivided?',
  prediction: 'A face subdivision adds one vertex, three edges and two net faces, so χ stays fixed.',
  explanation: 'The sphere preset is the tetrahedron boundary. The torus preset is a 3 × 3 periodic square grid, each square cut along the same diagonal. Opposite square-grid edges are identified. Inserting one vertex inside a triangular face replaces that face by three triangles.',
  limitations: 'These are closed triangulated surfaces with specified edge identifications. Missing faces, boundary or nonmanifold gluing change the setting; χ by itself does not classify every space.',
  controls: [
    {key: 'surface', label: 'Closed surface', type: 'select', value: 'sphere', options: [{value: 'sphere', label: 'Sphere: tetrahedron boundary'}, {value: 'torus', label: 'Torus: periodic 3 × 3 grid'}]},
    {key: 'steps', label: 'Face subdivisions', type: 'range', min: 0, max: 8, step: 1, value: 0},
  ],
  evaluate(state) {
    const surface = choice(state, 'surface', ['sphere', 'torus'], 'sphere');
    const steps = Math.round(bounded(state, 'steps', 0, 0, 8));
    const [v, e, f, label] = surface === 'sphere' ? [4, 6, 4, 'tetrahedron boundary'] : [9, 27, 18, '3 × 3 periodic square grid'];
    const rows = Array.from({length: steps + 1}, (_, i) => [i, v + i, e + 3 * i, f + 2 * i, v - e + f]);
    rows.push(['Δ per face split', '+1', '+3', '+2', 'Δχ = 0']);
    return {
      summary: `${label}: after ${steps} face ${steps === 1 ? 'subdivision' : 'subdivisions'}, V = ${v + steps}, E = ${e + 3 * steps}, F = ${f + 2 * steps}, χ = ${v - e + f}. ${surface === 'torus' ? 'Edge identifications: left ↔ right and bottom ↔ top, preserving orientation.' : 'Each tetrahedron edge is shared by two faces.'}`,
      formula: `χ = V − E + F = ${v + steps} − ${e + 3 * steps} + ${f + 2 * steps} = ${v - e + f}`,
      headers: ['Subdivisions', 'Vertices V', 'Edges E', 'Faces F', 'χ'], rows,
      svg: eulerSvg({surface, steps}),
    };
  },
};

const curvature = {
  id: 'ga-lab-curvature',
  title: 'Curve curvature microscope',
  question: 'Which parts of a curve calculation change when it is traced faster?',
  prediction: 'For a positive speed scale, velocity and acceleration change, while signed curvature at the same geometric point does not.',
  explanation: 'Set u = st with s > 0. The circle is γ(u)=(2 cos u,2 sin u), the parabola is γ(u)=(u,u²/2), and the cusp is γ(u)=(u²,u³). Derivatives are with respect to t; the displayed arc length is accumulated from t=0 along the branch.',
  limitations: 'The cusp is not regular at u=0, so neither unit tangent nor curvature is defined there. Values are rounded; appearance on a stretched screen cannot determine curvature.',
  controls: [
    {key: 'curve', label: 'Curve', type: 'select', value: 'circle', options: [{value: 'circle', label: 'Radius 2 circle'}, {value: 'parabola', label: 'Parabola'}, {value: 'cusp', label: 'Stationary cusp'}]},
    {key: 't', label: 'Parameter t', type: 'range', min: -2, max: 2, step: 0.1, value: 0.8},
    {key: 's', label: 'Positive speed scale s', type: 'range', min: 0.5, max: 3, step: 0.25, value: 1},
  ],
  evaluate(state) {
    const curve = choice(state, 'curve', ['circle', 'parabola', 'cusp'], 'circle');
    const t = bounded(state, 't', 0.8, -2, 2);
    const s = bounded(state, 's', 1, 0.5, 3);
    const u = s * t;
    let p, du, ddu, length, equation;
    if (curve === 'circle') {
      p = [2 * Math.cos(u), 2 * Math.sin(u)];
      du = [-2 * Math.sin(u), 2 * Math.cos(u)];
      ddu = [-2 * Math.cos(u), -2 * Math.sin(u)];
      length = 2 * Math.abs(u);
      equation = 'γ(u) = (2 cos u, 2 sin u)';
    } else if (curve === 'parabola') {
      p = [u, u * u / 2]; du = [1, u]; ddu = [0, 1];
      length = Math.abs((u * Math.hypot(1, u) + Math.asinh(u)) / 2);
      equation = 'γ(u) = (u, u²/2)';
    } else {
      p = [u * u, u ** 3]; du = [2 * u, 3 * u * u]; ddu = [2, 6 * u];
      length = (Math.pow(4 + 9 * u * u, 1.5) - 8) / 27;
      equation = 'γ(u) = (u², u³)';
    }
    const velocity = du.map(x => s * x);
    const acceleration = ddu.map(x => s * s * x);
    const speed = Math.hypot(...velocity);
    const regular = speed > 1e-12;
    const det = velocity[0] * acceleration[1] - velocity[1] * acceleration[0];
    const kappa = regular ? det / speed ** 3 : null;
    const tangent = regular ? velocity.map(x => x / speed) : null;
    const pair = a => a ? `(${fmt(a[0])}, ${fmt(a[1])})` : 'undefined';
    return {
      summary: `${equation}, u = st = ${fmt(u)}. ${regular ? `Signed curvature κ ≈ ${fmt(kappa,6)}; arc length from t=0 is ≈ ${fmt(length,6)}.` : 'Speed is zero: unit tangent and curvature are undefined.'}`,
      formula: 'For regular C² curves, κ = det(γ′, γ″)/||γ′||³; path length from 0 to t is |∫₀ᵗ ||γ′(τ)|| dτ|. Decimal values are rounded.',
      headers: ['Quantity', 'Value', 'Calculation / condition'],
      rows: [
        ['Position γ(t)', pair(p), equation],
        ['Velocity γ′(t)', pair(velocity), `s γᵤ = ${fmt(s)}γᵤ`],
        ['Acceleration γ″(t)', pair(acceleration), `s² γᵤᵤ = ${fmt(s * s)}γᵤᵤ`],
        ['Speed ||γ′||', fmt(speed), regular ? 'regular at this parameter' : 'zero: nonregular'],
        ['Unit tangent', pair(tangent), regular ? 'γ′/||γ′||' : 'undefined at zero speed'],
        ['det(γ′,γ″)', fmt(det), 'signed numerator'],
        ['Signed curvature κ', kappa === null ? 'undefined' : fmt(kappa,6), regular ? 'det/||γ′||³ (rounded)' : 'division by zero'],
        ['Arc length from 0', fmt(length), 'nonnegative integral of speed'],
      ],
      svg: curvatureSvg({curve, t, s}),
    };
  },
};

const sphereMetric = {
  id: 'ga-lab-sphere-metric',
  title: 'Sphere path measurer',
  question: 'How much longer can a meridian and latitude route be than the shorter great-circle arc?',
  prediction: 'The shorter great-circle arc minimizes spherical path length; a latitude circle away from the equator is generally not a geodesic.',
  explanation: 'Latitude φ and longitude λ map to R(cosφ cosλ, cosφ sinλ, sinφ). The coordinate metric is ds² = R²dφ² + R²cos²φ dλ². The route preset follows a meridian to the target latitude, then the shorter longitude arc on that latitude.',
  limitations: 'Metric longitude coordinates are singular at the poles, though the sphere and coordinate-free central-angle formula are smooth there. For antipodal endpoints the minimizing great circle is not unique. Decimal lengths are approximations.',
  controls: [
    {key: 'R', label: 'Sphere radius R', type: 'range', min: 1, max: 10, step: 0.5, value: 1},
    {key: 'lat1', label: 'Start latitude (degrees)', type: 'range', min: -90, max: 90, step: 5, value: 0},
    {key: 'lon1', label: 'Start longitude (degrees)', type: 'range', min: -180, max: 180, step: 5, value: 0},
    {key: 'lat2', label: 'End latitude (degrees)', type: 'range', min: -90, max: 90, step: 5, value: 45},
    {key: 'lon2', label: 'End longitude (degrees)', type: 'range', min: -180, max: 180, step: 5, value: 90},
    {key: 'path', label: 'Measured path', type: 'select', value: 'great', options: [{value: 'great', label: 'Shorter great-circle arc'}, {value: 'route', label: 'Meridian then latitude'}]},
  ],
  evaluate(state) {
    const R = bounded(state, 'R', 1, 1, 10);
    const phi1 = deg(bounded(state, 'lat1', 0, -90, 90));
    const lambda1 = deg(bounded(state, 'lon1', 0, -180, 180));
    const phi2 = deg(bounded(state, 'lat2', 45, -90, 90));
    const lambda2 = deg(bounded(state, 'lon2', 90, -180, 180));
    const path = choice(state, 'path', ['great', 'route'], 'great');
    const delta = Math.atan2(Math.sin(lambda2 - lambda1), Math.cos(lambda2 - lambda1));
    const xyz = (phi, lambda) => [Math.cos(phi) * Math.cos(lambda), Math.cos(phi) * Math.sin(lambda), Math.sin(phi)];
    const a = xyz(phi1, lambda1), b = xyz(phi2, lambda2);
    const dot = Math.max(-1, Math.min(1, a.reduce((sum, x, i) => sum + x * b[i], 0)));
    const cross = [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
    const central = Math.atan2(Math.hypot(...cross), dot);
    const shortest = R * central;
    const meridian = R * Math.abs(phi2 - phi1);
    const parallel = R * Math.abs(Math.cos(phi2) * delta);
    const route = meridian + parallel;
    const measured = path === 'great' ? shortest : route;
    const targetPole = Math.abs(Math.cos(phi2)) < 1e-10;
    const polar = Math.abs(Math.cos(phi1)) < 1e-10 || targetPole;
    const antipodal = Math.abs(central - Math.PI) < 1e-10;
    return {
      summary: `${path === 'great' ? 'Shorter great-circle arc' : 'Meridian then latitude route'}: length ≈ ${fmt(measured)}. Central angle ≈ ${fmt(central)} rad; shortest length ≈ ${fmt(shortest)}.${polar ? ' A pole is a longitude-coordinate singularity.' : ''}${antipodal ? ' The shortest great-circle route is not unique.' : ''}`,
      formula: 'cos θ = sin φ₁ sin φ₂ + cos φ₁ cos φ₂ cos(λ₂−λ₁); shorter arc length = Rθ; ds² = R²dφ² + R²cos²φ dλ².',
      headers: ['Quantity / segment', 'Value', 'Exact defining expression or status'],
      rows: [
        ['gφφ', fmt(R * R), 'R²'],
        ['gλλ at target latitude', fmt(R * R * Math.cos(phi2) ** 2), targetPole ? 'Longitude coordinate degenerates at target pole' : 'R² cos²φ₂'],
        ['Central angle θ (rad)', fmt(central), 'atan2(||u×v||, u·v), unit position vectors'],
        ['Shorter great-circle arc', fmt(shortest), 'Rθ'],
        ['Meridian segment', fmt(meridian), 'R |φ₂−φ₁|'],
        ['Latitude segment', fmt(parallel), 'R |cosφ₂| |short Δλ|'],
        ['Two-segment route', fmt(route), 'sum of segment lengths'],
        ['Measured path', fmt(measured), path === 'great' ? 'shorter great-circle arc' : 'meridian then latitude'],
      ],
    };
  },
};

const ownExperiments = [euler, curvature, sphereMetric];

const firstExperiments = (() => {
// Five self-contained geometry/algebra experiments. All SVG coordinates use one
// scale on both axes; the tables carry the full mathematical readout.
const pi = Math.PI;
const fmt = (x, digits = 4) => Math.abs(x) < 5e-10 ? '0' : Number(x).toFixed(digits).replace(/\.?0+$/, '');
const num = (state, key, fallback, min, max) => {
  const raw = Number(state?.[key]);
  return Number.isFinite(raw) ? Math.min(max, Math.max(min, raw)) : fallback;
};
const choice = (state, key, allowed, fallback) => allowed.includes(state?.[key]) ? state[key] : fallback;
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const pt = (x, y, ox, oy, scale) => `${fmt(ox + scale*x, 2)},${fmt(oy - scale*y, 2)}`;
const dot = (a,b) => a[0]*b[0] + a[1]*b[1];
const clampUnit = x => Math.max(-1, Math.min(1, x));
const dist = (a,b) => Math.hypot(a[0]-b[0], a[1]-b[1]);
const matrixControls = [
  {key:'a',label:'Matrix a₁₁',type:'range',min:-3,max:3,step:0.25,value:1},
  {key:'b',label:'Matrix a₁₂',type:'range',min:-3,max:3,step:0.25,value:0},
  {key:'c',label:'Matrix a₂₁',type:'range',min:-3,max:3,step:0.25,value:0},
  {key:'d',label:'Matrix a₂₂',type:'range',min:-3,max:3,step:0.25,value:1},
];
const readMatrix = (s, bound = 3) => ['a','b','c','d'].map((k,i) => num(s,k,[1,0,0,1][i],-bound,bound));
const vstr = v => `(${fmt(v[0])}, ${fmt(v[1])})`;

function matrixGrid(state) {
  const [a,b,c,d] = readMatrix(state);
  const det = a*d-b*c;
  const samples = [[0,0],[1,0],[0,1],[1,1],[1,-1]];
  const map = ([x,y]) => [a*x+b*y,c*x+d*y];
  const rows = samples.map(v => [vstr(v),vstr(map(v)),v===samples[1]?'Ae₁':v===samples[2]?'Ae₂':'Linear combination of mapped basis']);
  rows.push(['det A',fmt(det),'Signed area of the mapped unit square']);
  rows.push(['|det A|',fmt(Math.abs(det)),'Area scale factor']);
  const ox=200,oy=200,k=28;
  const poly = [[0,0],[1,0],[1,1],[0,1]].map(v => pt(...map(v),ox,oy,k)).join(' ');
  const basis = [map([1,0]),map([0,1])];
  const grid = [-4,-3,-2,-1,0,1,2,3,4].map(i =>
    `<path d="M ${pt(i,-4,ox,oy,k)} L ${pt(i,4,ox,oy,k)} M ${pt(-4,i,ox,oy,k)} L ${pt(4,i,ox,oy,k)}" stroke="#d5dbe4" fill="none"/>`).join('');
  const mappedGrid = [-2,-1,0,1,2].map(i => {
    const vertical = [map([i,-3]), map([i,3])];
    const horizontal = [map([-3,i]), map([3,i])];
    return `<path d="M ${pt(...vertical[0],ox,oy,k)} L ${pt(...vertical[1],ox,oy,k)} M ${pt(...horizontal[0],ox,oy,k)} L ${pt(...horizontal[1],ox,oy,k)}" stroke="#b9a578" stroke-opacity=".65" fill="none"/>`;
  }).join('');
  const arrows = basis.map((v,i) => `<path d="M ${pt(0,0,ox,oy,k)} L ${pt(...v,ox,oy,k)}" stroke="${i?'#b44b36':'#205a95'}" stroke-width="3"/><circle cx="${fmt(ox+k*v[0],2)}" cy="${fmt(oy-k*v[1],2)}" r="4" fill="${i?'#b44b36':'#205a95'}"/>`).join('');
  return {
    summary: Math.abs(det)<1e-10 ? 'This singular map collapses the unit square to zero area.' : `The unit square maps to signed area ${fmt(det)} and ordinary area ${fmt(Math.abs(det))}.${det<0?' Orientation reverses.':''}`,
    formula: `A = [[${fmt(a)}, ${fmt(b)}], [${fmt(c)}, ${fmt(d)}]]; A(x,y) = xAe₁ + yAe₂; det A = ad − bc = ${fmt(det)}.`,
    headers:['Input or measure','Output or value','Interpretation'], rows,
    svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" role="img" aria-labelledby="grid-title grid-desc"><title id="grid-title">Mapped basis, grid and unit square</title><desc id="grid-desc">One equal scale on both axes. Grey is the input grid and tan is its mapped image. Blue is Ae1, rust is Ae2; the shaded polygon is the image of the unit square. Coordinates and determinant are in the table.</desc>${grid}${mappedGrid}<polygon points="${poly}" fill="#77a5d2" fill-opacity=".35" stroke="#305f92" stroke-width="2"/>${arrows}<text x="12" y="22" font-size="13" fill="#205a95">Blue: Ae₁</text><text x="12" y="40" font-size="13" fill="#8b3929">Rust: Ae₂</text><text x="12" y="386" font-size="12" fill="#4d565f">Grey input grid · tan image grid</text></svg>`
  };
}

function eigenLine(a,b,c,d,lambda) {
  const r1=[a-lambda,b],r2=[c,d-lambda];
  const r=dot(r1,r1)>=dot(r2,r2)?r1:r2;
  const n=Math.hypot(...r);
  return n<1e-9 ? null : [-r[1]/n,r[0]/n];
}
function eigenEllipse(state) {
  const [a,b,c,d]=readMatrix(state,2).map(x=>Math.max(-2,Math.min(2,x)));
  const theta=num(state,'angle',30,0,345)*pi/180;
  const show=choice(state,'lines',['show','hide'],'show');
  const trace=a+d,det=a*d-b*c,disc=trace*trace-4*det;
  const t=a*a+b*b+c*c+d*d;
  const q=Math.hypot(a*a+c*c-(b*b+d*d),2*(a*b+c*d));
  const s1=Math.sqrt(Math.max(0,(t+q)/2)),s2=Math.sqrt(Math.max(0,(t-q)/2));
  const u=[Math.cos(theta),Math.sin(theta)], au=[a*u[0]+b*u[1],c*u[0]+d*u[1]];
  let eigenText, lines=[];
  if(disc < -1e-9) eigenText='No real eigenlines: the characteristic discriminant is negative.';
  else if(Math.abs(disc)<1e-9) {
    const lambda=trace/2;
    const line=eigenLine(a,b,c,d,lambda);
    eigenText=line ? `One real eigenline, eigenvalue ${fmt(lambda)}.` : `Every direction is an eigenline, eigenvalue ${fmt(lambda)}.`;
    if(line) lines=[line];
  } else {
    const root=Math.sqrt(disc);
    const eig1=(trace+root)/2,eig2=(trace-root)/2;
    eigenText=`Two real eigenvalues: ${fmt(eig1)} and ${fmt(eig2)}.`;
    lines=[eigenLine(a,b,c,d,eig1),eigenLine(a,b,c,d,eig2)].filter(Boolean);
  }
  const rows=[
    ['Selected unit vector u',vstr(u),'Angle measured counterclockwise from x-axis'],
    ['Au',vstr(au),`Length ${fmt(Math.hypot(...au))}`],
    ['tr A; det A',`${fmt(trace)}; ${fmt(det)}`,'Characteristic polynomial λ² − (tr A)λ + det A'],
    ['Discriminant',fmt(disc),eigenText],
    ['Singular values',`${fmt(s1)}; ${fmt(s2)}`,'Lengths of semiaxes of the circle image'],
    ['Squared singular values',`${fmt(s1*s1)}; ${fmt(s2*s2)}`,'Eigenvalues of AᵀA (up to displayed rounding)']
  ];
  for(const degrees of [0,45,90,135,180,225,270,315]) {
    const v=[Math.cos(degrees*pi/180),Math.sin(degrees*pi/180)];
    rows.push([`Circle sample ${degrees}°`,vstr(v),`A sample = ${vstr([a*v[0]+b*v[1],c*v[0]+d*v[1]])}`]);
  }
  const ox=200,oy=200,k=55;
  const circle=Array.from({length:65},(_,i)=>{const t=i*2*pi/64;return pt(Math.cos(t),Math.sin(t),ox,oy,k)}).join(' ');
  const ellipse=Array.from({length:65},(_,i)=>{const x=Math.cos(i*2*pi/64),y=Math.sin(i*2*pi/64);return pt(a*x+b*y,c*x+d*y,ox,oy,k)}).join(' ');
  const lineSvg=show==='show'?lines.map((v,i)=>`<path d="M ${pt(-3*v[0],-3*v[1],ox,oy,k)} L ${pt(3*v[0],3*v[1],ox,oy,k)}" stroke="${i?'#a64e8a':'#94711d'}" stroke-width="1.5" stroke-dasharray="6 4"/>`).join(''):'';
  return {summary:`${eigenText} The image of the unit circle has semiaxis lengths ${fmt(s1)} and ${fmt(s2)}.`,
    formula:`AᵀA has eigenvalues σ₁² = ${fmt(s1*s1)} and σ₂² = ${fmt(s2*s2)}; σ₁σ₂ = |det A| = ${fmt(Math.abs(det))} (up to rounding).`,
    headers:['Quantity','Value','Meaning'],rows,
    svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" role="img" aria-labelledby="eigen-title eigen-desc"><title id="eigen-title">Unit circle and its linear image</title><desc id="eigen-desc">Equal axis scales. Grey dashed curve is the unit circle; blue curve is its image. Dashed straight lines, when shown, are real eigenlines. Numeric samples and singular values are in the table.</desc><path d="M 200 20 V 380 M 20 200 H 380" stroke="#b5bdc9"/><polyline points="${circle}" fill="none" stroke="#8d98a8" stroke-dasharray="5 4"/>${lineSvg}<polyline points="${ellipse}" fill="none" stroke="#205a95" stroke-width="3"/><path d="M ${pt(0,0,ox,oy,k)} L ${pt(...au,ox,oy,k)}" stroke="#b44b36" stroke-width="2"/><circle cx="${fmt(ox+k*au[0],2)}" cy="${fmt(oy-k*au[1],2)}" r="4" fill="#b44b36"/><text x="12" y="22" font-size="13" fill="#5e6874">Dashed: unit circle</text><text x="12" y="40" font-size="13" fill="#205a95">Blue: image ellipse</text><text x="12" y="58" font-size="13" fill="#8b3929">Rust: Au</text></svg>`};
}

function compass(state) {
  const angle=num(state,'angle',70,15,165);
  const stage=choice(state,'stage',['rays','marks','arcs','bisector'],'bisector');
  const radii=choice(state,'radii',['equal','unequal'],'equal');
  const half=angle*pi/360;
  const O=[0,0], A=[Math.cos(half),-Math.sin(half)], B=[Math.cos(half),Math.sin(half)];
  const D=dist(A,B), ra=.75*D, rb=(radii==='equal'?1:.85)*ra;
  const e=[(B[0]-A[0])/D,(B[1]-A[1])/D];
  const along=(ra*ra-rb*rb+D*D)/(2*D),h=Math.sqrt(Math.max(0,ra*ra-along*along));
  const mid=[A[0]+along*e[0],A[1]+along*e[1]];
  const p1=[mid[0]-h*e[1],mid[1]+h*e[0]],p2=[mid[0]+h*e[1],mid[1]-h*e[0]];
  const P=p1[0]>=p2[0]?p1:p2;
  const bearing=v=>Math.atan2(v[1],v[0]);
  const left=(bearing(P)-bearing(A))*180/pi,right=(bearing(B)-bearing(P))*180/pi;
  const valid=left>=-1e-8 && right>=-1e-8;
  const rows=[
    ['1. Equal marks on rays','OA = OB = 1','A and B lie on the angle arms'],
    ['2. Circle radius at A',fmt(ra),'Arc centered at A'],
    ['3. Circle radius at B',fmt(rb),'Arc centered at B'],
    ['4. Intersection sides',`AP = ${fmt(dist(A,P))}; BP = ${fmt(dist(B,P))}`,'P is the intersection farther along the interior direction'],
    ['5. Shared side',`OP = ${fmt(dist(O,P))}`,'Common to triangles OAP and OBP'],
    ['Final angles',`∠AOP = ${fmt(left,2)}°; ∠POB = ${fmt(right,2)}°`,radii==='equal'?'Equal by SSS congruence':'Unequal radii break the SSS premise']
  ];
  const ox=48,oy=160,k=128;
  const paths=`<path d="M ${pt(...O,ox,oy,k)} L ${pt(...A,ox,oy,k)} M ${pt(...O,ox,oy,k)} L ${pt(...B,ox,oy,k)}" stroke="#375a7a" stroke-width="2.5" fill="none"/>`;
  const marks=stage==='rays'?'':`<circle cx="${fmt(ox+k*A[0],2)}" cy="${fmt(oy-k*A[1],2)}" r="4" fill="#375a7a"/><circle cx="${fmt(ox+k*B[0],2)}" cy="${fmt(oy-k*B[1],2)}" r="4" fill="#375a7a"/>`;
  const arcs=['arcs','bisector'].includes(stage)?`<circle cx="${fmt(ox+k*A[0],2)}" cy="${fmt(oy-k*A[1],2)}" r="${fmt(k*ra,2)}" fill="none" stroke="#92a7ba" stroke-dasharray="4 5"/><circle cx="${fmt(ox+k*B[0],2)}" cy="${fmt(oy-k*B[1],2)}" r="${fmt(k*rb,2)}" fill="none" stroke="#b4a386" stroke-dasharray="4 5"/>`:'';
  const bisector=stage==='bisector'?`<path d="M ${pt(...O,ox,oy,k)} L ${pt(...P,ox,oy,k)}" stroke="#bc543e" stroke-width="3"/><circle cx="${fmt(ox+k*P[0],2)}" cy="${fmt(oy-k*P[1],2)}" r="4" fill="#bc543e"/>`:'';
  const labels=`<text x="${fmt(ox+8)}" y="${fmt(oy-6)}">O</text><text x="${fmt(ox+k*A[0]+7,2)}" y="${fmt(oy-k*A[1]+5,2)}">A</text><text x="${fmt(ox+k*B[0]+7,2)}" y="${fmt(oy-k*B[1]+5,2)}">B</text>${stage==='bisector'?`<text x="${fmt(ox+k*P[0]+6,2)}" y="${fmt(oy-k*P[1]-6,2)}">P</text>`:''}`;
  return {summary:radii==='equal'?`Equal arcs yield ${fmt(left,2)}° on each side of OP. The numeric construction illustrates the SSS proof.`:`The unequal arcs give ${fmt(left,2)}° and ${fmt(right,2)}°${valid?'':' (P is outside the angle)'}. Equal-radius SSS no longer applies.`,
    formula:`OA = OB = 1; AP = ${fmt(ra)}; BP = ${fmt(rb)}; OP is shared. ${radii==='equal'?'Thus △OAP ≅ △OBP by SSS, so the angle halves are equal.':'Since AP ≠ BP, these side equalities do not establish congruence.'}`,
    headers:['Construction fact','Value','Role'],rows,
    svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320" role="img" aria-labelledby="compass-title compass-desc"><title id="compass-title">Compass angle construction</title><desc id="compass-desc">Equal scale in both directions. O is the angle vertex, A and B are equal marks on its arms, and P is the chosen intersection of arcs about A and B. The table records side lengths and angles.</desc>${paths}${marks}${arcs}${bisector}${labels}</svg>`};
}

function acosh(x) {return Math.log(x+Math.sqrt(x*x-1));}
function sphericalOctantSvg() {
  const project = ([x,y,z]) => [175 + 130 * (x-y)/Math.SQRT2, 175 - 130 * (-x-y+2*z)/Math.sqrt(6)];
  const arcs = [
    t => [Math.cos(t),Math.sin(t),0],
    t => [0,Math.cos(t),Math.sin(t)],
    t => [Math.sin(t),0,Math.cos(t)]
  ];
  const points = arcs.flatMap(arc => Array.from({length: 17}, (_, i) => project(arc(i*Math.PI/32))));
  const boundary = points.map(([x,y]) => `${fmt(x,2)},${fmt(y,2)}`).join(' ');
  const vertices = [[1,0,0],[0,1,0],[0,0,1]].map(project);
  const dots = vertices.map(([x,y]) => `<circle cx="${fmt(x,2)}" cy="${fmt(y,2)}" r="4" fill="#205a95"/>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350" role="img" aria-labelledby="octant-title octant-desc"><title id="octant-title">Three great-circle sides of a spherical octant</title><desc id="octant-desc">Orthographic projection of the unit sphere looking toward its positive octant. The shaded region is one eighth of the sphere, bounded by great-circle arcs XY, YN and NX. Projection distorts displayed angles; the exact three right angles are verified in the table.</desc><circle cx="175" cy="175" r="130" fill="#f8fbfd" stroke="#778ca3" stroke-width="2"/><polygon points="${boundary}" fill="#cfe5f2" stroke="#205a95" stroke-width="3"/>${dots}<text x="275" y="235" font-size="16" fill="#172c42">X</text><text x="64" y="235" font-size="16" fill="#172c42">Y</text><text x="177" y="62" font-size="16" fill="#172c42">N</text><text x="96" y="315" font-size="13" fill="#172c42">Orthographic view:</text><text x="84" y="333" font-size="13" fill="#172c42">angles are in the table</text></svg>`;
}
function hyperbolicTriangle(state) {
  const model=choice(state,'model',['euclidean','sphere','hyperbolic'],'euclidean');
  const a=num(state,'a',0.6,0.2,0.8),b=num(state,'b',0.8,0.2,0.8);
  let rows,summary,formula,svg;
  if(model==='sphere') {
    rows=[
      ['Model','Unit sphere','Geodesics are shorter great-circle arcs'],
      ['Vertices','X=(1,0,0), Y=(0,1,0), N=(0,0,1)','One spherical octant'],
      ['Angles at X, Y, N','90°, 90°, 90°','Coordinate great circles meet at right angles'],
      ['Angle sum','270° = 3π/2','Excess over 180° is π/2'],
      ['Area','π/2 square units','One eighth of the unit sphere area 4π']
    ];
    summary='The unit-sphere octant has three right angles: sum 270° and area π/2.';
    formula='On the unit sphere, this octant has spherical excess (3π/2) − π = π/2, equal to its area.';
    svg=sphericalOctantSvg();
  } else if(model==='euclidean') {
    const alpha=Math.atan2(b,a)*180/pi,beta=90-alpha;
    rows=[
      ['Model','Euclidean plane','Geodesics are straight segments'],
      ['Vertices',`O=(0,0), A=(${fmt(a)},0), B=(0,${fmt(b)})`,'A right triangle'],
      ['Angles at O, A, B',`90°; ${fmt(alpha,3)}°; ${fmt(beta,3)}°`,'Acute angles complement one another'],
      ['Angle sum','180°','Exact Euclidean invariant'],
      ['Area',fmt(a*b/2),'ab/2 square units']
    ];
    summary=`The Euclidean triangle has angle sum 180° and area ${fmt(a*b/2)}.`;
    formula=`tan ∠A = b/a = ${fmt(b/a)}; ∠A + ∠B = 90°; area = ab/2 = ${fmt(a*b/2)}.`;
    const ox=175,oy=250,k=170;
    svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 310" role="img" aria-labelledby="tri-title tri-desc"><title id="tri-title">Euclidean right triangle</title><desc id="tri-desc">Equal axis scales; the table gives its three angles and area.</desc><path d="M ${pt(0,0,ox,oy,k)} L ${pt(a,0,ox,oy,k)} L ${pt(0,b,ox,oy,k)} Z" fill="#dce9f6" stroke="#205a95" stroke-width="3"/><text x="158" y="273" font-size="15" fill="#172c42">O</text><text x="${fmt(ox+k*a+5,2)}" y="273" font-size="15" fill="#172c42">A</text><text x="151" y="${fmt(oy-k*b-8,2)}" font-size="15" fill="#172c42">B</text><text x="180" y="244" font-size="13" fill="#172c42">90°</text></svg>`;
  } else {
    const u=2*Math.atanh(a),v=2*Math.atanh(b),c=acosh(Math.cosh(u)*Math.cosh(v));
    const alpha=Math.asin(clampUnit(Math.sinh(v)/Math.sinh(c)));
    const beta=Math.asin(clampUnit(Math.sinh(u)/Math.sinh(c)));
    const defect=pi/2-alpha-beta;
    const cx=(1+a*a)/(2*a),cy=(1+b*b)/(2*b),R=Math.sqrt(cx*cx+cy*cy-1);
    const start=Math.atan2(-cy,a-cx),end=Math.atan2(b-cy,-cx);
    let delta=end-start;if(delta>pi)delta-=2*pi;if(delta< -pi)delta+=2*pi;
    const ox=175,oy=175,k=140;
    const arc=Array.from({length:33},(_,i)=>{const t=start+delta*i/32;return pt(cx+R*Math.cos(t),cy+R*Math.sin(t),ox,oy,k)}).join(' ');
    rows=[
      ['Model','Poincaré unit disk; curvature −1','Geodesics are disk diameters or circular arcs orthogonal to boundary'],
      ['Vertices',`O=(0,0), A=(${fmt(a)},0), B=(0,${fmt(b)})`,'Disk coordinates, not hyperbolic distances'],
      ['Hyperbolic side lengths',`OA=${fmt(u)}; OB=${fmt(v)}; AB=${fmt(c)}`,'OA=2 artanh(a), OB=2 artanh(b)'],
      ['Angles at O, A, B',`90°; ${fmt(alpha*180/pi,3)}°; ${fmt(beta*180/pi,3)}°`,'Poincaré angles equal Euclidean tangent angles'],
      ['Angle sum',`${fmt((pi-defect)*180/pi,3)}°`,'Less than 180°'],
      ['Defect / area',`${fmt(defect)} radians / ${fmt(defect)} square units`,'Gauss–Bonnet area identity at curvature −1']
    ];
    summary=`The hyperbolic triangle has angle sum ${fmt((pi-defect)*180/pi,3)}° and defect/area ${fmt(defect)}.`;
    formula=`cosh(AB)=cosh(OA)cosh(OB); sin A=sinh(OB)/sinh(AB), sin B=sinh(OA)/sinh(AB); area=π−(O+A+B)=${fmt(defect)}.`;
    svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350" role="img" aria-labelledby="hyp-title hyp-desc"><title id="hyp-title">Hyperbolic right triangle in the Poincaré disk</title><desc id="hyp-desc">The boundary circle is infinitely far away in hyperbolic distance. Two sides are disk radii; the third is an arc orthogonal to the boundary. Disk coordinates have equal screen scale, but their lengths are not hyperbolic lengths.</desc><circle cx="175" cy="175" r="140" fill="none" stroke="#8895a3" stroke-width="2"/><path d="M ${pt(0,0,ox,oy,k)} L ${pt(a,0,ox,oy,k)} M ${pt(0,0,ox,oy,k)} L ${pt(0,b,ox,oy,k)}" fill="none" stroke="#205a95" stroke-width="3"/><polyline points="${arc}" fill="none" stroke="#b44b36" stroke-width="3"/><text x="155" y="194" font-size="15" fill="#172c42">O</text><text x="${fmt(ox+k*a+6,2)}" y="194" font-size="15" fill="#172c42">A</text><text x="155" y="${fmt(oy-k*b-7,2)}" font-size="15" fill="#172c42">B</text><text x="60" y="333" font-size="12" fill="#172c42">Disk size ≠ hyperbolic distance</text></svg>`;
  }
  return {summary,formula,headers:['Quantity','Value','Reason or interpretation'],rows,...(svg?{svg}:{})};
}

const setSpecs={
  open:{label:'(−1, 1)',open:true,direct:[[-1,1,false,false]],pre:[[-1,1,false,false]]},
  closed:{label:'[−1, 1]',open:false,direct:[[-1,1,true,true]],pre:[[-1,1,true,true]]},
  punctured:{label:'ℝ ∖ {0}',open:true,direct:[[-Infinity,0,false,false],[0,Infinity,false,false]],pre:[[-Infinity,0,false,false],[0,Infinity,false,false]]},
  singleton:{label:'{0}',open:false,direct:[[0,0,true,true]],pre:[[0,0,true,true]]},
  positive:{label:'(0, 1)',open:true,direct:[[0,1,false,false]],pre:[[-1,0,false,false],[0,1,false,false]]}
};
function contains(interval,x) {
  const [lo,hi,lc,rc]=interval;
  return (x>lo || lc&&x===lo) && (x<hi || rc&&x===hi);
}
const member=(intervals,x)=>intervals.some(i=>contains(i,x));
function neighborhood(intervals,x,eps) {
  if(!member(intervals,x))return {inside:false,witness:x,reason:'Center is outside the set'};
  const component=intervals.find(i=>contains(i,x));
  const [lo,hi]=component;
  if(lo===hi)return {inside:false,witness:x+eps/2,reason:'A singleton contains no positive-radius interval'};
  const tolerance=1e-10;
  if(Number.isFinite(lo)&&x-eps<lo-tolerance) {
    const y=!member(intervals,lo)?lo:lo-(lo-(x-eps))/2;
    return {inside:false,witness:y,reason:'The interval crosses the left boundary'};
  }
  if(Number.isFinite(hi)&&x+eps>hi+tolerance) {
    const y=!member(intervals,hi)?hi:hi+(x+eps-hi)/2;
    return {inside:false,witness:y,reason:'The interval crosses the right boundary'};
  }
  return {inside:true,witness:null,reason:'The whole open interval fits in one component'};
}
function openSets(state) {
  const selected=choice(state,'set',Object.keys(setSpecs),'open');
  const view=choice(state,'view',['direct','preimage'],'direct');
  const x=num(state,'x',0,-2,2),eps=num(state,'epsilon',0.5,0.05,1);
  const spec=setSpecs[selected],intervals=spec[view==='preimage'?'pre':'direct'];
  const label=view==='direct'?spec.label:`f⁻¹(${spec.label}) for f(x)=x²`;
  const derived=view==='preimage'&&selected==='positive'?'(−1, 0) ∪ (0, 1)':spec.label;
  const inSet=member(intervals,x),ball=neighborhood(intervals,x,eps);
  const rows=[
    ['Chosen set',label,view==='preimage'?`Its exact preimage is ${derived}`:'Exact interval/set notation'],
    ['Point x',fmt(x),inSet?'x belongs to the displayed set':'x does not belong to the displayed set'],
    ['Neighborhood',`(${fmt(x-eps)}, ${fmt(x+eps)})`,'Open interval Bε(x)'],
    ['Containment',ball.inside?'Yes':'No',ball.reason],
    ['Counterexample point',ball.inside?'None needed':fmt(ball.witness),ball.inside?'Every point of this interval lies in the set':`${fmt(ball.witness)} lies in Bε(x) outside the set`],
    ['Openness of displayed set',spec.open?'Open':'Not open',spec.open?'Every member has some positive distance to the excluded boundary':'A boundary member has no contained positive-radius neighborhood']
  ];
  const summary=`At x=${fmt(x)}, membership is ${inSet?'true':'false'} and Bε(x) ${ball.inside?'is':'is not'} contained in ${derived}. ${spec.open?'This set is open.':'This set is not open.'}`;
  const formula=`Bε(x)=(x−ε,x+ε), ε=${fmt(eps)}. ${view==='preimage'?`f(x)=x² and f⁻¹(${spec.label})=${derived}.`:`S=${spec.label}.`} A set is open iff every one of its members has some ε>0 with Bε(x)⊆S.`;
  return {summary,formula,headers:['Test','Result','Exact reason'],rows,svg:openSetsSvg({set:selected,view,x,epsilon:eps})};
}

const experiments = [
  {id:'ga-lab-matrix-grid',title:'Matrix grid studio',question:'How does a 2×2 matrix move basis vectors and area?',prediction:'The two matrix columns are Ae₁ and Ae₂; the signed unit-square area is det A.',explanation:'Linearity gives Av=xAe₁+yAe₂. The determinant gives the signed area of the parallelogram spanned by the columns.',limitations:'Finite samples and the drawing illustrate linearity; they do not prove it for every vector. A singular matrix collapses area, and a negative determinant reverses orientation.',controls:matrixControls,evaluate:matrixGrid},
  {id:'ga-lab-eigen-ellipse',title:'Eigenlines and ellipse',question:'How do eigenlines and singular values describe different features of a linear map?',prediction:'The image of the unit circle has semiaxis lengths equal to the singular values; some real matrices have no real eigenlines.',explanation:'The eigenvalues of AᵀA are the squared singular values. Real eigenlines are directions preserved by A, and need not coincide with the ellipse axes.',limitations:'Circle curves are sampled for display. Rounded singular values and eigenvalues are numerical; an eigenline is shown only when the real characteristic discriminant permits one.',controls:[...matrixControls.map((c,i)=>({...c,label:`Matrix ${['a₁₁','a₁₂','a₂₁','a₂₂'][i]}`,min:-2,max:2})),{key:'angle',label:'Unit-vector angle (degrees)',type:'range',min:0,max:345,step:15,value:30},{key:'lines',label:'Real eigenlines',type:'select',value:'show',options:[{value:'show',label:'Show'},{value:'hide',label:'Hide'}]}],evaluate:eigenEllipse},
  {id:'ga-lab-compass',title:'Compass construction bench',question:'Why do equal compass arcs bisect an angle?',prediction:'When OA=OB and AP=BP, triangles OAP and OBP are congruent by SSS.',explanation:'Choose equal marks A and B on the rays. Intersect two circles centered there, then join their intersection P to O. Equal radii supply AP=BP; OP is shared, so SSS proves equal angles.',limitations:'This model uses ideal Euclidean coordinates; drawn circles and measured angles are illustrations. Unequal arc radii remove the SSS premise. The degenerate zero angle is excluded.',controls:[{key:'angle',label:'Opening angle (degrees)',type:'range',min:15,max:165,step:5,value:70},{key:'stage',label:'Construction stage',type:'select',value:'bisector',options:[{value:'rays',label:'Angle rays'},{value:'marks',label:'Equal marks'},{value:'arcs',label:'Compass arcs'},{value:'bisector',label:'Join intersection'}]},{key:'radii',label:'Arc radii',type:'select',value:'equal',options:[{value:'equal',label:'Equal'},{value:'unequal',label:'Unequal (B is 85% of A)'}]}],evaluate:compass},
  {id:'ga-lab-hyperbolic-triangle',title:'Three triangle models',question:'How do triangle angle sums differ across three geometries?',prediction:'Euclidean: 180°; the sphere octant: 270°; curvature −1 hyperbolic triangle: less than 180°.',explanation:'The sphere preset is an exact octant. Euclidean and Poincaré disk coordinates define right triangles. Hyperbolic side lengths use the disk metric; area equals angular defect for curvature −1.',limitations:'The sphere uses a fixed exact example. Hyperbolic angles and the drawn disk arc are numerical illustrations; the disk boundary lies infinitely far away. The area identity is invoked, not proved by the simulation.',controls:[{key:'model',label:'Geometry',type:'select',value:'euclidean',options:[{value:'euclidean',label:'Euclidean plane'},{value:'sphere',label:'Unit sphere octant'},{value:'hyperbolic',label:'Hyperbolic disk (curvature −1)'}]},{key:'a',label:'First vertex coordinate a',type:'range',min:0.2,max:0.8,step:0.05,value:0.6},{key:'b',label:'Second vertex coordinate b',type:'range',min:0.2,max:0.8,step:0.05,value:0.8}],evaluate:hyperbolicTriangle},
  {id:'ga-lab-open-sets',title:'Epsilon-neighborhood tester',question:'When does a chosen neighborhood fit inside a set?',prediction:'An open set has a sufficiently small neighborhood around each member; a single failed radius does not make an open set closed.',explanation:'The tester uses exact interval descriptions, including a symbolic preimage under f(x)=x². It checks membership and whether the entire requested open interval lies in a component of the selected set.',limitations:'A neighborhood at one point and radius does not by itself establish global openness. The displayed classification follows exact endpoint definitions; decimal inputs are finite browser numbers.',controls:[{key:'set',label:'Set S',type:'select',value:'open',options:[{value:'open',label:'(−1, 1)'},{value:'closed',label:'[−1, 1]'},{value:'punctured',label:'ℝ ∖ {0}'},{value:'singleton',label:'{0}'},{value:'positive',label:'(0, 1)'}]},{key:'view',label:'Test',type:'select',value:'direct',options:[{value:'direct',label:'S itself'},{value:'preimage',label:'Preimage under f(x)=x²'}]},{key:'x',label:'Point x',type:'range',min:-2,max:2,step:0.05,value:0},{key:'epsilon',label:'Radius ε',type:'range',min:0.05,max:1,step:0.05,value:0.5}],evaluate:openSets}
];

return experiments;
})();

const laterExperiments = (() => {
// Finite, exact catalog laboratories for algebra, algebraic geometry, and category theory.
function integer(state, key, min, max) {
  const value = state[key];
  if (!Number.isInteger(value) || value < min || value > max) {
    throw new RangeError(`${key} must be an integer from ${min} to ${max}`);
  }
  return value;
}

function choice(state, key, values) {
  const value = state[key];
  if (!values.includes(value)) throw new RangeError(`${key} must be one of ${values.join(', ')}`);
  return value;
}

function gcd(a, b) {
  while (b) [a, b] = [b, a % b];
  return a;
}

function euclidTrace(n, a) {
  if (a === 0) return `gcd(${n}, 0) = ${n}`;
  const lines = [];
  let left = n;
  let right = a;
  while (right) {
    const quotient = Math.floor(left / right);
    const remainder = left % right;
    lines.push(`${left} = ${quotient}×${right} + ${remainder}`);
    [left, right] = [right, remainder];
  }
  return `${lines.join('; ')}; gcd = ${left}`;
}

const polynomialPresets = {
  circle: {
    name: 'unit circle', equation: 'F(x,y) = x² + y² − 1',
    value: (x, y) => x * x + y * y - 1,
    gradient: (x, y) => [2 * x, 2 * y],
    special: [1, 0], specialSubstitution: 'F(1,0) = 1² + 0² − 1 = 0'
  },
  parabola: {
    name: 'parabola', equation: 'F(x,y) = y − x²',
    value: (x, y) => y - x * x,
    gradient: (x, _y) => [-2 * x, 1],
    special: [0, 0], specialSubstitution: 'F(0,0) = 0 − 0² = 0'
  },
  cusp: {
    name: 'cusp', equation: 'F(x,y) = y² − x³',
    value: (x, y) => y * y - x * x * x,
    gradient: (x, y) => [-3 * x * x, 2 * y],
    special: [0, 0], specialSubstitution: 'F(0,0) = 0² − 0³ = 0'
  },
  node: {
    name: 'node', equation: 'F(x,y) = y² − x²(x + 1)',
    value: (x, y) => y * y - x * x * (x + 1),
    gradient: (x, y) => [-3 * x * x - 2 * x, 2 * y],
    special: [0, 0], specialSubstitution: 'F(0,0) = 0² − 0²(0 + 1) = 0'
  }
};

const binaryMaps = {
  zero: [0, 0],
  identity: [0, 1],
  swap: [1, 0],
  one: [1, 1]
};
const binaryOptions = [
  { value: 'zero', label: '0↦0, 1↦0' },
  { value: 'identity', label: '0↦0, 1↦1' },
  { value: 'swap', label: '0↦1, 1↦0' },
  { value: 'one', label: '0↦1, 1↦1' }
];
const squarePresets = {
  aligned: { f: [0, 1, 0], g: [0, 1, 0] },
  flipped: { f: [0, 1, 0], g: [1, 0, 1] },
  collision: { f: [0, 1, 0], g: [0, 0, 1] }
};

const pullbackPatterns = {
  constant: [0, 0, 0],
  split: [0, 0, 1],
  alternate: [0, 1, 0],
  increasing: [0, 1, 2]
};
function patternValues(name, size) { return pullbackPatterns[name].map(value => value % size); }
const patternOptions = [
  { value: 'constant', label: 'constant: 0, 0, 0' },
  { value: 'split', label: 'split: 0, 0, 1' },
  { value: 'alternate', label: 'alternate: 0, 1, 0' },
  { value: 'increasing', label: 'increasing: 0, 1, 2 (reduced into Z)' }
];

function half(n) { return n % 2 === 0 ? String(n / 2) : `${n}/2`; }
function affineRoots(m, b) {
  const discriminant = m * m + 4 * b;
  if (discriminant === 0) return { discriminant, roots: [{ x: half(m), multiplicity: 2, real: true }] };
  const absolute = Math.abs(discriminant);
  const squareRoot = Math.sqrt(absolute);
  if (Number.isInteger(squareRoot) && discriminant > 0) {
    return { discriminant, roots: [
      { x: half(m + squareRoot), multiplicity: 1, real: true },
      { x: half(m - squareRoot), multiplicity: 1, real: true }
    ] };
  }
  const radical = squareRoot % 1 === 0 ? String(squareRoot) : `√${absolute}`;
  const term = discriminant > 0 ? radical : `i${radical}`;
  return { discriminant, roots: [
    { x: `(${m} + ${term})/2`, multiplicity: 1, real: discriminant > 0 },
    { x: `(${m} − ${term})/2`, multiplicity: 1, real: discriminant > 0 }
  ] };
}

const experiments = [
  {
    id: 'ga-lab-square-symmetry', title: 'Square symmetry composer',
    question: 'Does applying two square symmetries always give another one, and does order matter?',
    prediction: 'Try R then F, and compare it with F then R. Follow original corner 1 before inspecting all four corners.',
    explanation: 'Positions 1–4 run clockwise from the top left. R is a clockwise quarter-turn; F reflects across the fixed vertical line; E does nothing. FR means R first, then F. A destination list says where each original corner goes; a diagram places its label in that destination. The eight rigid motions form the square symmetry group. Associativity follows from function composition, rather than from testing the table. Order is the first positive repeat count returning to E.',
    limitations: 'Only the eight rigid symmetries of a labelled square are modelled. The composition table is finite evidence; the general associative law is a fact about functions.',
    controls: [
      { key: 'first', label: 'First chosen symmetry', type: 'select', value: 'R', options: SQUARE_OPTIONS },
      { key: 'second', label: 'Second chosen symmetry', type: 'select', value: 'F', options: SQUARE_OPTIONS },
      { key: 'order', label: 'Application order', type: 'select', value: 'first-second', options: [
        { value: 'first-second', label: 'First, then second' },
        { value: 'second-first', label: 'Second, then first' }
      ] }
    ],
    evaluate(state) {
      const first = choice(state, 'first', SQUARE_NAMES, 'R');
      const second = choice(state, 'second', SQUARE_NAMES, 'F');
      const order = choice(state, 'order', ['first-second', 'second-first'], 'first-second');
      const result = evaluateSquare({first, second, order});
      const rows = SQUARE_NAMES.map(candidate => {
        const product = order === 'first-second' ? composeSquareMoves(candidate, first) : composeSquareMoves(first, candidate);
        return [candidate, product, ...squareDestinations(product), squareOrder(product)];
      });
      return {
        summary: `Selected: ${result.second}∘${result.first} = ${result.product}. Destinations of original corners: ${result.destinations.map((position,i) => `${i+1}→${position}`).join(', ')}. Inverse: ${result.inverse}; order: ${result.order}. ${result.same ? 'Swapping these moves gives the same result on all four corners.' : 'Swapping these moves changes the labelled result.'}`,
        formula: 'Apply the right-hand move first: FR means R then F. R is a clockwise quarter-turn; F is the fixed vertical flip. Positions 1–4 run clockwise from top left. The table varies the second chosen selector; the application-order control decides which move acts first.',
        headers: ['Second choice', 'Composite', 'Corner 1 goes to', 'Corner 2 goes to', 'Corner 3 goes to', 'Corner 4 goes to', 'Order'],
        rows,
        svg: squareSymmetrySvg({first, second, order})
      };
    }
  },
  {
    id: 'ga-lab-modular', title: 'Modular arithmetic workbench',
    question: 'When does a residue have a multiplicative inverse modulo n?',
    prediction: 'Compare a coprime residue with a nonzero divisor of a composite modulus.',
    explanation: 'Bézout’s identity gives a·u + n·v = gcd(a,n). Thus a has an inverse modulo n exactly when gcd(a,n)=1. Addition always has an inverse: −a modulo n. The entire ring Z/nZ is a field exactly when n is prime.',
    limitations: 'Moduli are 2–24. The input integer is reduced modulo n; an input at least n is not a separate residue. Modulus 1 is excluded from the field statement.',
    controls: [
      { key: 'n', label: 'Modulus n', type: 'range', min: 2, max: 24, step: 1, value: 12 },
      { key: 'operation', label: 'Table operation', type: 'select', value: 'multiply', options: [
        { value: 'add', label: 'Addition' }, { value: 'multiply', label: 'Multiplication' }
      ] },
      { key: 'a', label: 'Integer a, reduced modulo n', type: 'range', min: 0, max: 23, step: 1, value: 5 }
    ],
    evaluate(state) {
      const n = integer(state, 'n', 2, 24);
      const aInput = integer(state, 'a', 0, 23);
      const operation = choice(state, 'operation', ['add', 'multiply']);
      const a = aInput % n;
      const divisor = gcd(a, n);
      const additiveInverse = (n - a) % n;
      const multiplicativeInverse = divisor === 1 ? Array.from({ length: n }, (_, i) => i).find(b => a * b % n === 1) : null;
      const prime = Array.from({ length: n - 2 }, (_, i) => i + 2).every(d => d >= n || n % d !== 0);
      const zeroDivisor = a !== 0 && divisor !== 1 ? ` ${a}×${n / divisor} ≡ 0 (mod ${n}), so ${a} is a zero divisor.` : '';
      return {
        summary: `${aInput} represents ${a} in Z/${n}Z. gcd(${a},${n}) = ${divisor}; additive inverse = ${additiveInverse}; multiplicative inverse = ${multiplicativeInverse ?? 'none'}.${zeroDivisor} Z/${n}Z is ${prime ? 'a field because n is prime' : 'not a field because n is composite'}.`,
        formula: `${operation === 'add' ? 'a + b' : 'a × b'} is reduced to 0,…,${n - 1}. Euclidean trace: ${euclidTrace(n, a)}.`,
        headers: ['b', operation === 'add' ? '(a + b) mod n' : '(a × b) mod n', 'Equality in Z/nZ'],
        rows: Array.from({ length: n }, (_, b) => [b, operation === 'add' ? (a + b) % n : (a * b) % n,
          `${a} ${operation === 'add' ? '+' : '×'} ${b} ≡ ${operation === 'add' ? (a + b) % n : (a * b) % n} (mod ${n})`]),
        svg: modularSvg({n, a: aInput, operation})
      };
    }
  },
  {
    id: 'ga-lab-polynomial-loci', title: 'Polynomial zero-set explorer',
    question: 'Which plotted integer points lie exactly on a polynomial zero set, and where is it singular?',
    prediction: 'Check the origin on a cusp or node: what happens to both partial derivatives there?',
    explanation: 'An affine real zero set consists of all (x,y) with F(x,y)=0. For these polynomial presets the displayed residual and gradient are exact at integer inputs. A zero with nonzero gradient is smooth by the implicit-function criterion; a zero with gradient (0,0) is singular.',
    limitations: 'The coordinate table searches integer lattice points only in the selected window. It cannot certify absence of real noninteger points or describe the entire real or complex curve. A small numerical residual at an arbitrary decimal point would not by itself establish an exact zero.',
    controls: [
      { key: 'preset', label: 'Polynomial preset', type: 'select', value: 'cusp', options: [
        { value: 'circle', label: 'Unit circle' }, { value: 'parabola', label: 'Parabola' },
        { value: 'cusp', label: 'Cusp' }, { value: 'node', label: 'Node' }
      ] },
      { key: 'window', label: 'Integer window |x|, |y| ≤', type: 'range', min: 1, max: 6, step: 1, value: 3 },
      { key: 'x', label: 'Sample x coordinate', type: 'range', min: -6, max: 6, step: 1, value: 0 },
      { key: 'y', label: 'Sample y coordinate', type: 'range', min: -6, max: 6, step: 1, value: 0 }
    ],
    evaluate(state) {
      const presetName = choice(state, 'preset', Object.keys(polynomialPresets));
      const preset = polynomialPresets[presetName];
      const window = integer(state, 'window', 1, 6);
      const x = integer(state, 'x', -6, 6);
      const y = integer(state, 'y', -6, 6);
      const residual = preset.value(x, y);
      const gradient = preset.gradient(x, y);
      const rows = [];
      for (let px = -window; px <= window; px += 1) {
        for (let py = -window; py <= window; py += 1) {
          if (preset.value(px, py) === 0) {
            const [gx, gy] = preset.gradient(px, py);
            rows.push([px, py, 0, `(${gx}, ${gy})`, gx === 0 && gy === 0 ? 'singular' : 'smooth']);
          }
        }
      }
      const [sx, sy] = preset.special;
      const [sgx, sgy] = preset.gradient(sx, sy);
      return {
        summary: `${preset.name}: at sample (${x},${y}), F = ${residual} and ∇F = (${gradient.join(', ')}). The sample is ${residual !== 0 ? 'off the zero set' : gradient.every(v => v === 0) ? 'a singular zero' : 'a smooth zero'}. Exact named check: ${preset.specialSubstitution}; ∇F(${sx},${sy}) = (${sgx}, ${sgy}).`,
        formula: `${preset.equation}. The table lists every verified integer-lattice zero with |x|,|y| ≤ ${window}; zero tests use exact integer arithmetic.`,
        headers: ['x', 'y', 'Exact F(x,y)', 'Exact ∇F(x,y)', 'At this zero'],
        rows
      };
    }
  },
  {
    id: 'ga-lab-projective-intersection', title: 'Line and conic intersections',
    question: 'Where do the second intersection and its multiplicity go when an affine plot shows fewer than two points?',
    prediction: 'Try a tangent and a vertical line, then compare real and complex charts.',
    explanation: 'For the smooth projective conic YZ=X², a nonvertical line Y=mX+bZ gives x²−mx−b=0 in Z=1. Its discriminant is m²+4b. A vertical line X=cZ meets the conic at (c,c²) and at [0:1:0]. Parameterizing the conic by [st:s²:t²] gives the vertical intersection equation t(s−ct), confirming multiplicity one at each point. Every selected line has total intersection multiplicity two over the complex projective plane.',
    limitations: 'This checks one conic and a bounded family of lines. Negative discriminants have complex points invisible in a real affine plot. The model illustrates a degree-two case and does not prove the full Bézout theorem.',
    controls: [
      { key: 'line', label: 'Line form', type: 'select', value: 'ordinary', options: [
        { value: 'ordinary', label: 'Y = mX + bZ' },
        { value: 'tangent', label: 'Tangent Y = mX − m²Z/4' },
        { value: 'vertical', label: 'Vertical X = cZ' }
      ] },
      { key: 'm', label: 'Slope m (or vertical c)', type: 'range', min: -4, max: 4, step: 1, value: 0 },
      { key: 'b', label: 'Intercept b for ordinary line', type: 'range', min: -4, max: 4, step: 1, value: 1 },
      { key: 'view', label: 'Show solutions in', type: 'select', value: 'real', options: [
        { value: 'real', label: 'Real chart' }, { value: 'complex', label: 'Complex projective chart' }
      ] }
    ],
    evaluate(state) {
      const line = choice(state, 'line', ['ordinary', 'tangent', 'vertical']);
      const m = integer(state, 'm', -4, 4);
      const bInput = integer(state, 'b', -4, 4);
      const view = choice(state, 'view', ['real', 'complex']);
      if (line === 'vertical') {
        return {
          summary: `Vertical line X = ${m}Z: finite point [${m}:${m * m}:1] and point at infinity [0:1:0], each with multiplicity 1. Total complex projective multiplicity = 2. Both points are real.`,
          formula: `On [X:Y:Z]=[st:s²:t²], X−${m}Z = t(s−${m}t). The two linear factors give the two projective intersections.`,
          headers: ['Chart', 'Intersection point', 'Multiplicity', 'Real?'],
          rows: [['Z = 1', `[${m}:${m * m}:1]`, 1, 'yes'], ['Z = 0', '[0:1:0]', 1, 'yes']]
        };
      }
      const b = line === 'tangent' ? -m * m / 4 : bInput;
      const { discriminant, roots } = affineRoots(m, b);
      const visible = view === 'real' ? roots.filter(root => root.real) : roots;
      const rows = visible.map(root => ['Z = 1', `x = ${root.x}; y = ${m}x + ${b}`, root.multiplicity, root.real ? 'yes' : 'no']);
      if (rows.length === 0) rows.push(['Complex only', 'Two nonreal conjugate points (hidden in real view)', 2, 'no']);
      return {
        summary: `${line === 'tangent' ? 'Preset tangent' : 'Line'} Y = ${m}X + (${b})Z: discriminant Δ = ${discriminant}. ${discriminant === 0 ? 'One finite point has multiplicity 2.' : discriminant > 0 ? 'Two distinct real finite points, each multiplicity 1.' : 'No real point; two distinct nonreal finite points, each multiplicity 1.'} Total complex projective multiplicity = 2. The line has infinity point [1:${m}:0], which is not on YZ=X².`,
        formula: `In Z=1, solve x² − ${m}x − (${b}) = 0; y = ${m}x + (${b}). At [1:${m}:0], YZ−X² = −1, so there is no intersection at infinity for this line.`,
        headers: ['Chart', 'Intersection or visibility', 'Multiplicity shown', 'Real?'],
        rows
      };
    }
  },
  {
    id: 'ga-lab-commuting', title: 'Commuting diagram checker',
    question: 'Do the two routes around a square of functions agree for every input?',
    prediction: 'Make the selected input agree while another row differs, then test the whole function table.',
    explanation: 'The square has A={a,b,c}, B=C=D={0,1}; f:A→B and g:A→C come from the selected preset, while h:B→D and k:C→D are chosen function tables. It commutes precisely when h(f(t))=k(g(t)) for every t in A. One matching element cannot establish equality of functions.',
    limitations: 'These are finite sets and total functions with matching domains and codomains. The checker proves equality for this three-element input set only; it does not test arbitrary category-theoretic diagrams.',
    controls: [
      { key: 'preset', label: 'Finite-set square preset (f and g)', type: 'select', value: 'flipped', options: [
        { value: 'aligned', label: 'g matches f' }, { value: 'flipped', label: 'g flips f' },
        { value: 'collision', label: 'f and g have different collisions' }
      ] },
      { key: 'h', label: 'Arrow h: B → D', type: 'select', value: 'identity', options: binaryOptions },
      { key: 'k', label: 'Arrow k: C → D', type: 'select', value: 'swap', options: binaryOptions },
      { key: 'input', label: 'Inspect input', type: 'select', value: 'a', options: [
        { value: 'a', label: 'a' }, { value: 'b', label: 'b' }, { value: 'c', label: 'c' }
      ] }
    ],
    evaluate(state) {
      const presetName = choice(state, 'preset', Object.keys(squarePresets));
      const hName = choice(state, 'h', Object.keys(binaryMaps));
      const kName = choice(state, 'k', Object.keys(binaryMaps));
      const input = choice(state, 'input', ['a', 'b', 'c']);
      const { f, g } = squarePresets[presetName];
      const h = binaryMaps[hName];
      const k = binaryMaps[kName];
      const labels = ['a', 'b', 'c'];
      const rows = labels.map((t, i) => [t, f[i], h[f[i]], g[i], k[g[i]], h[f[i]] === k[g[i]] ? 'equal' : 'different']);
      const firstMismatch = rows.find(row => row[5] === 'different');
      const selected = rows[labels.indexOf(input)];
      return {
        summary: `At ${input}, h(f(${input})) = ${selected[2]} and k(g(${input})) = ${selected[4]}. ${firstMismatch ? `The square does not commute: first mismatch at ${firstMismatch[0]}.` : 'The square commutes: both composites agree on all three inputs.'}`,
        formula: `f: a↦${f[0]}, b↦${f[1]}, c↦${f[2]}; g: a↦${g[0]}, b↦${g[1]}, c↦${g[2]}; h: 0↦${h[0]}, 1↦${h[1]}; k: 0↦${k[0]}, 1↦${k[1]}.`,
        headers: ['t ∈ A', 'f(t) ∈ B', 'h(f(t)) ∈ D', 'g(t) ∈ C', 'k(g(t)) ∈ D', 'Paths'],
        rows
      };
    }
  },
  {
    id: 'ga-lab-pullback', title: 'Pullback matching table',
    question: 'Which pairs (x,y) have matching images in Z, and what makes a mediator unique?',
    prediction: 'Choose a pair whose two images disagree, then one whose images agree.',
    explanation: 'In Set, the pullback P is exactly {(x,y)∈X×Y : f(x)=g(y)}. Its projections send (x,y) to x and y. For any compatible cone p:T→X and q:T→Y, the mediator must send each t to (p(t),q(t)); this pair lies in P by compatibility, and the projection equations force uniqueness.',
    limitations: 'The table uses three-element X and Y and a two- or three-element Z. The selected pair models a cone from a singleton T. A database join can resemble this matching rule, but bag semantics and missing values are outside this Set model.',
    controls: [
      { key: 'sets', label: 'Finite sets X, Y, Z', type: 'select', value: 'binary', options: [
        { value: 'binary', label: 'X={a,b,c}, Y={u,v,w}, Z={0,1}' },
        { value: 'ternary', label: 'X={a,b,c}, Y={u,v,w}, Z={0,1,2}' }
      ] },
      { key: 'f', label: 'Function table f: X → Z', type: 'select', value: 'split', options: patternOptions },
      { key: 'g', label: 'Function table g: Y → Z', type: 'select', value: 'alternate', options: patternOptions },
      { key: 'pair', label: 'Candidate pair (x,y)', type: 'select', value: 'a-u', options: ['a', 'b', 'c'].flatMap(x => ['u', 'v', 'w'].map(y => ({ value: `${x}-${y}`, label: `(${x},${y})` }))) }
    ],
    evaluate(state) {
      const sets = choice(state, 'sets', ['binary', 'ternary']);
      const fName = choice(state, 'f', Object.keys(pullbackPatterns));
      const gName = choice(state, 'g', Object.keys(pullbackPatterns));
      const pair = choice(state, 'pair', ['a', 'b', 'c'].flatMap(x => ['u', 'v', 'w'].map(y => `${x}-${y}`)));
      const size = sets === 'binary' ? 2 : 3;
      const f = patternValues(fName, size);
      const g = patternValues(gName, size);
      const xs = ['a', 'b', 'c'];
      const ys = ['u', 'v', 'w'];
      const [x, y] = pair.split('-');
      const fx = f[xs.indexOf(x)];
      const gy = g[ys.indexOf(y)];
      const compatible = fx === gy;
      const rows = xs.flatMap((px, i) => ys.map((py, j) => [
        `(${px},${py})`, f[i], g[j], f[i] === g[j] ? 'yes' : 'no',
        f[i] === g[j] ? px : '—', f[i] === g[j] ? py : '—'
      ]));
      const count = rows.filter(row => row[3] === 'yes').length;
      return {
        summary: `P has exactly ${count} compatible pair${count === 1 ? '' : 's'}. For candidate (${x},${y}), f(${x})=${fx} and g(${y})=${gy}; ${compatible ? `the singleton cone is compatible, and its unique mediator sends t↦(${x},${y}).` : 'the singleton arrows are not a compatible cone, so no mediator can satisfy both projections.'}`,
        formula: `Z={${Array.from({ length: size }, (_, i) => i).join(',')}}; f: a↦${f[0]}, b↦${f[1]}, c↦${f[2]}; g: u↦${g[0]}, v↦${g[1]}, w↦${g[2]}. For every compatible cone p,q, m(t)=(p(t),q(t)).`,
        headers: ['Pair in X×Y', 'f(x)', 'g(y)', 'In P?', 'pX', 'pY'],
        rows
      };
    }
  }
];

return experiments;
})();

const byId = new Map([...ownExperiments, ...firstExperiments, ...laterExperiments].map(experiment => [experiment.id, experiment]));
const addedVisuals = {
  'ga-lab-sphere-metric': sphereMetricSvg,
  'ga-lab-polynomial-loci': polynomialLociSvg,
  'ga-lab-projective-intersection': projectiveIntersectionSvg,
  'ga-lab-commuting': commutingSvg,
  'ga-lab-pullback': pullbackSvg,
};
export const experiments = ["ga-lab-matrix-grid", "ga-lab-eigen-ellipse", "ga-lab-compass", "ga-lab-hyperbolic-triangle", "ga-lab-open-sets", "ga-lab-euler", "ga-lab-square-symmetry", "ga-lab-modular", "ga-lab-curvature", "ga-lab-sphere-metric", "ga-lab-polynomial-loci", "ga-lab-projective-intersection", "ga-lab-commuting", "ga-lab-pullback"].map(id => {
  const experiment = byId.get(id);
  const render = addedVisuals[id];
  if (!render) return experiment;
  return {...experiment, evaluate(state) {
    const result = experiment.evaluate(state);
    return {...result, svg: render(state, result)};
  }};
});
