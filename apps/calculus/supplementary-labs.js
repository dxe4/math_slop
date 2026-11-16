// Curated sidecar experiments. Each code string runs independently in the isolated reader worker.
const make=(id,chapterId,lesson,title,description,inputs,tasks,expected,fixtures,code,relatedLessonHrefs=[])=>({id,chapterId,lessonHref:`#chapter/${chapterId}/lesson/${lesson}`,relatedLessonHrefs,title,description,inputs,tasks:['Predict','Manipulate','Explain','Transfer'].map((label,i)=>`${label}: ${tasks[i]}`),expected,fixtures,code});
export const supplementaryLabs=[
make('hyperbolic-branches','02',7,'Hyperbolic identities and real inverse branches','Compare the hyperbola identity with the real inverse branches; every value is dimensionless.',[['t','1','ln 2','−4 to 4'],['q','1','0.6','−1 < q < 1']],['Predict signs and branches before running.','Change t and q, including negative values.','Explain why acosh(cosh t) loses the sign.','Derive the logarithmic atanh formula and its open domain.'],'cosh²t−sinh²t=1; asinh(sinh t)=t; acosh(cosh t)=|t|; atanh q=log((1+q)/(1−q))/2 for |q|<1. Samples cannot prove the identity.',[{t:'Math.LN2',q:.6,result:{sinh:.75,cosh:1.25,tanh:.6,identity:1,asinh:Math.LN2,acosh:Math.LN2,atanh:Math.LN2}},{t:'-Math.LN2',q:-.6,result:{sinh:-.75,cosh:1.25,tanh:-.6,acosh:Math.LN2,atanh:-Math.LN2}},{t:0,q:0,result:{sinh:0,cosh:1,tanh:0,atanh:0}}],String.raw`const t=Math.LN2, q=0.6;
const report = (value) => {
  const check = (v) => {
    if (typeof v === 'number' && !Number.isFinite(v))
      throw Error(
        'Numeric output is outside binary64 representability; use symbolic mathematics or representable inputs.',
      );
    if (v && typeof v === 'object') Object.values(v).forEach(check);
  };
  check(value);
  console.log(JSON.stringify(value));
};
if (
  !Number.isFinite(t) ||
  t < -4 ||
  t > 4 ||
  !Number.isFinite(q) ||
  Math.abs(q) >= 1
)
  throw Error('Require −4 ≤ t ≤ 4 and −1 < q < 1.');
const sinh = Math.sinh(t),
  cosh = Math.cosh(t),
  tanh = Math.tanh(t);
const result = {
  sinh,
  cosh,
  tanh,
  identity: cosh * cosh - sinh * sinh,
  asinh: Math.asinh(sinh),
  acosh: Math.abs(t),
  directAcoshCosh: Math.acosh(cosh),
  atanh: Math.atanh(q),
  logAtanh: (Math.log1p(q) - Math.log1p(-q)) / 2,
  directLogAtanh: Math.log((1 + q) / (1 - q)) / 2,
  branch: 'acosh is nonnegative',
};
report({
  experiment: 'hyperbolic-branches',
  units: 'dimensionless',
  input: { t, q },
  result,
});
plot(
  Array.from({ length: 101 }, (_, i) => {
    const u = -2 + (4 * i) / 100;
    return [Math.cosh(u), Math.sinh(u)];
  }),
  'Right hyperbola branch: world x,y, dimensionless',
);
`),
make('inverse-endpoints','06',6,'Derivative endpoints and inverse branches','Inspect a cusp at an inverse-function domain endpoint.',[['x','1','0.5','−4 to 4']],['Predict the slope sign on either side of zero.','Move x across zero.','Explain why an inverse derivative rule fails at equality.','Compare the corner in acosh(cosh x).'],'For x≠0, g=acosh(1+x²) and g′=2 sign(x)/sqrt(x²+2). At x=0 one-sided slopes are −sqrt2 and sqrt2, so no derivative; a symmetric difference of zero is not its derivative.',[{x:.5,result:{value:Math.LN2,derivative:4/3}},{x:-.5,result:{value:Math.LN2,derivative:-4/3}},{x:1,result:{value:Math.acosh(2),derivative:2/Math.sqrt(3)}}],String.raw`const x=0.5;
const report = (value) => {
  const check = (v) => {
    if (typeof v === 'number' && !Number.isFinite(v))
      throw Error(
        'Numeric output is outside binary64 representability; use symbolic mathematics or representable inputs.',
      );
    if (v && typeof v === 'object') Object.values(v).forEach(check);
  };
  check(value);
  console.log(JSON.stringify(value));
};
if (!Number.isFinite(x) || Math.abs(x) > 4)
  throw Error('Require finite −4 ≤ x ≤ 4.');
const value = 2 * Math.asinh(Math.abs(x) / Math.SQRT2),
  derivative = x === 0 ? null : (2 * Math.sign(x)) / Math.sqrt(x * x + 2);
report({
  experiment: 'inverse-endpoints',
  units: 'dimensionless',
  input: { x },
  result: {
    value,
    derivative,
    acoshCosh: Math.abs(x),
    atZero: x === 0 ? 'No derivative; left −sqrt(2), right sqrt(2)' : null,
  },
});
plot(
  Array.from({ length: 101 }, (_, i) => {
    const u = -2 + (4 * i) / 100;
    return [u, Math.acosh(1 + u * u)];
  }),
  'g(x), dimensionless world coordinates',
);
`),
make('hyperbolic-substitution','12',7,'Verified hyperbolic substitution','Transform a dimensioned definite integral and certify the midpoint comparison.',[['a','m','1','0 < a ≤ 10'],['L','m','0','−10 ≤ L ≤ U'],['U','m','1','L ≤ U ≤ 10']],['Predict transformed bounds and units.','Change scale and interval.','Explain both cosh factors and the positive square root.','Differentiate F to check the antiderivative.'],'x=a sinh t gives dx=a cosh t dt and sqrt(a²+x²)=a cosh t for a>0. F(x)=[x sqrt(a²+x²)+a²asinh(x/a)]/2. Real-arithmetic midpoint error ≤(U−L)³/(24·400²a) m² since |f″|≤1/a; binary64 roundoff is reported separately.',[{a:1,L:0,U:1,result:{exact:(Math.SQRT2+Math.asinh(1))/2}},{a:3,L:0,U:4,result:{exact:10+4.5*Math.log(3)}},{a:1,L:-1,U:0,result:{exact:(Math.SQRT2+Math.asinh(1))/2}}],String.raw`const a=1,L=0,U=1,N=400;
const report = (value) => {
  const check = (v) => {
    if (typeof v === 'number' && !Number.isFinite(v))
      throw Error(
        'Numeric output is outside binary64 representability; use symbolic mathematics or representable inputs.',
      );
    if (v && typeof v === 'object') Object.values(v).forEach(check);
  };
  check(value);
  console.log(JSON.stringify(value));
};
if (
  ![a, L, U].every(Number.isFinite) ||
  a <= 0 ||
  a > 10 ||
  L < -10 ||
  U > 10 ||
  L > U ||
  !Number.isInteger(N) ||
  N !== 400
)
  throw Error('Require 0<a≤10 m, −10≤L≤U≤10 m, and 400 midpoint panels.');
const f = (x) => Math.hypot(a, x);
const h = (U - L) / N,
  width = U - L,
  sL = f(L),
  sU = f(U);
// Width factoring avoids subtracting nearly equal primitive values.
const transformedBound = (x) =>
  Number.isFinite(x / a)
    ? Math.asinh(x / a)
    : Math.sign(x) * (Math.log(Math.abs(x)) - Math.log(a) + Math.LN2);
const ratio = width / (sU + sL),
  deltaT =
    ratio < 1 ? 2 * Math.atanh(ratio) : transformedBound(U) - transformedBound(L);
const exact =
  width === 0
    ? 0
    : (width * (sU + (L * (U + L)) / (sU + sL))) / 2 +
      (a * a === 0 ? 0 : (a * a * deltaT) / 2);
let midpoint = 0;
for (let i = 0; i < N; i++) midpoint += h * f(L + (i + 0.5) * h);
const certificate = Math.min(width ** 3 / (24 * N * N * a), width ** 2 / (4 * N)),
  roundoffAllowance =
    64 * Number.EPSILON * width * Math.max(a, Math.abs(L), Math.abs(U));
report({
  experiment: 'hyperbolic-substitution',
  units: 'm²',
  input: { a, L, U },
  transformedBounds: [transformedBound(L), transformedBound(U)],
  transformedIntegrand: 'a² cosh²(t)',
  result: {
    exact,
    midpoint,
    absoluteError: Math.abs(midpoint - exact),
    certificate: Number.isFinite(certificate) ? certificate : null,
    certificateStatus: Number.isFinite(certificate)
      ? 'finite binary64 value'
      : 'above binary64 range',
    roundoffAllowance,
    roundoffStatus:
      'Heuristic precision diagnostic, not a rigorous floating-point bound',
  },
});
`),
make('formal-series','17',7,'Formal coefficients versus a convergent function','Separate an algebraic ODE residual, value error, and convergence claim.',[['N','integer','4','0 to 20'],['t','1','0.5','−1 to 0.95, t≠1']],['Predict residual and signed error.','Change degree and point.','Explain formal recurrence versus convergence.','Use the flat function to disprove smooth Taylor equality.'],'For (1−t)y′=y, a_n=1 and P_N=Σt^k. Residual =−(N+1)t^N. For |t|<1, rational minus polynomial =t^(N+1)/(1−t). At t=−1 the rational value exists but the centered series diverges. exp(−1/t²), extended by zero at zero, has every Taylor coefficient zero.',[{N:4,t:.5,result:{polynomial:1.9375,rational:2,signedError:.0625,residual:-.3125}},{N:3,t:-.5,result:{polynomial:.625,rational:2/3,signedError:1/24,residual:.5}},{N:4,t:.8,result:{polynomial:3.3616,rational:5,signedError:1.6384,residual:-2.048}}],String.raw`const N=4,t=0.5;
const report = (value) => {
  const check = (v) => {
    if (typeof v === 'number' && !Number.isFinite(v))
      throw Error(
        'Numeric output is outside binary64 representability; use symbolic mathematics or representable inputs.',
      );
    if (v && typeof v === 'object') Object.values(v).forEach(check);
  };
  check(value);
  console.log(JSON.stringify(value));
};
if (
  !Number.isInteger(N) ||
  N < 0 ||
  N > 20 ||
  !Number.isFinite(t) ||
  t < -1 ||
  t > 0.95 ||
  t === 1
)
  throw Error('Require integer 0≤N≤20 and −1≤t≤0.95.');
let polynomial = 0;
for (let k = 0; k <= N; k++) polynomial += t ** k;
const rational = 1 / (1 - t),
  residual = -(N + 1) * t ** N;
report({
  experiment: 'formal-series',
  units: 'dimensionless',
  input: { N, t },
  result: {
    polynomial,
    rational,
    residual,
    signedError: rational - polynomial,
    analyticSignedError: Math.abs(t) < 1 ? t ** (N + 1) / (1 - t) : null,
    seriesConverges: Math.abs(t) < 1,
    flatValue: t === 0 ? 0 : Math.exp(-1 / (t * t)),
    flatTaylorCoefficients: 'all zero',
  },
});
`),
make('focus-directrix-conics','18',9,'Focus/directrix ratios and separate conic branches','Sample only positive-radius branches of a focus/directrix conic.',[['e','1','2','0 < e ≤ 3'],['d','m','3','0 < d ≤ 10']],['Predict one or two branches.','Vary e through 1.','Explain the distance ratio and positive radius convention.','Derive both vertices from the original distance relation.'],'sqrt(x²+y²)=e|x−d|. For e>1 left R=ed/(1+e cosθ), |θ|<acos(−1/e); right R=ed/(e cosφ−1), |φ|<acos(1/e). Vertices ed/(1+e) and ed/(e−1). Denominator limits have no finite point; clipped samples cannot establish the global locus.',[{e:2,d:3,result:{vertices:[2,6],leftLimit:2*Math.PI/3,rightLimit:Math.PI/3}},{e:.5,d:4,result:{vertices:[-4,4/3]}},{e:1,d:4,result:{vertices:[2]}}],String.raw`const e=2,d=3;
const report = (value) => {
  const check = (v) => {
    if (typeof v === 'number' && !Number.isFinite(v))
      throw Error(
        'Numeric output is outside binary64 representability; use symbolic mathematics or representable inputs.',
      );
    if (v && typeof v === 'object') Object.values(v).forEach(check);
  };
  check(value);
  console.log(JSON.stringify(value));
};
if (
  !Number.isFinite(e) ||
  !Number.isFinite(d) ||
  e <= 0 ||
  e > 3 ||
  d <= 0 ||
  d > 10
)
  throw Error('Require 0<e≤3 and 0<d≤10 m.');
const leftLimit = e > 1 ? Math.acos(-1 / e) : Math.PI,
  vertices = (
    e < 1
      ? [(e * d) / (1 + e), (-e * d) / (1 - e)]
      : [(e * d) / (1 + e), ...(e > 1 ? [(e * d) / (e - 1)] : [])]
  ).sort((u, v) => u - v);
const sample = (limit, denominator) =>
  Array.from({ length: 121 }, (_, i) => {
    const angle = (-0.98 + (1.96 * i) / 120) * limit,
      r = (e * d) / denominator(angle);
    return [r * Math.cos(angle), r * Math.sin(angle)];
  });
const left = sample(leftLimit, (a) => 1 + e * Math.cos(a));
plot(left, 'Left positive-radius branch: world x,y (m)');
let right = [];
if (e > 1) {
  right = sample(Math.acos(1 / e), (a) => e * Math.cos(a) - 1);
  plot(right, 'Right positive-radius branch: world x,y (m)');
}
const ratio = ([x, y]) => Math.hypot(x, y) / Math.abs(x - d);
report({
  experiment: 'focus-directrix-conics',
  units: 'm',
  input: { e, d },
  result: {
    kind: e < 1 ? 'ellipse' : e === 1 ? 'parabola' : 'hyperbola',
    vertices,
    leftLimit,
    rightLimit: e > 1 ? Math.acos(1 / e) : null,
    focusDirectrixRatios: [
      ratio(left[60]),
      ...(right.length ? [ratio(right[60])] : []),
    ],
  },
});
`),
make('helix-world','19',7,'Helix world tangent and curvature','Compute three-dimensional geometry before drawing its xy projection.',[['R','m','2','0 < R ≤ 10'],['h','m/parameter','0.5','−5 to 5'],['t','1','π/2','−2π to 2π']],['Predict turn separation in world space.','Vary radius and rise.','Explain tangent and curvature using world triples.','Compare equal xy positions at different heights.'],'r=(R cos t,R sin t,ht) m; speed=sqrt(R²+h²) m per parameter; curvature=R/(R²+h²) m⁻¹; one turn rises 2πh m. An xy plot is a projection only.',[{R:2,h:.5,t:Math.PI/2,result:{speed:Math.sqrt(17)/2,curvature:8/17,turnRise:Math.PI}},{R:3,h:0,t:0,result:{speed:3,curvature:1/3,turnRise:0}},{R:1,h:1,t:Math.PI,result:{speed:Math.SQRT2,curvature:.5,turnRise:2*Math.PI}}],String.raw`const R=2,h=0.5,t=Math.PI/2;
const report = (value) => {
  const check = (v) => {
    if (typeof v === 'number' && !Number.isFinite(v))
      throw Error(
        'Numeric output is outside binary64 representability; use symbolic mathematics or representable inputs.',
      );
    if (v && typeof v === 'object') Object.values(v).forEach(check);
  };
  check(value);
  console.log(JSON.stringify(value));
};
if (
  ![R, h, t].every(Number.isFinite) ||
  R <= 0 ||
  R > 10 ||
  Math.abs(h) > 5 ||
  Math.abs(t) > 2 * Math.PI
)
  throw Error('Require 0<R≤10 m, |h|≤5 m/parameter, |t|≤2π.');
const point = [R * Math.cos(t), R * Math.sin(t), h * t],
  velocity = [-R * Math.sin(t), R * Math.cos(t), h],
  acceleration = [-R * Math.cos(t), -R * Math.sin(t), 0],
  speed = Math.hypot(R, h);
report({
  experiment: 'helix-world',
  units: { point: 'm', speed: 'm/parameter', curvature: 'm⁻¹' },
  input: { R, h, t },
  result: {
    point,
    velocity,
    acceleration,
    speed,
    unitTangent: velocity.map((v) => v / speed),
    curvature: R / speed / speed,
    turnRise: 2 * Math.PI * h,
  },
});
plot(
  Array.from({ length: 121 }, (_, i) => {
    const u = -Math.PI + (2 * Math.PI * i) / 120;
    return [R * Math.cos(u), R * Math.sin(u)];
  }),
  'xy projection of world helix (m); height omitted',
);
`),
make('quadric-traces','20',8,'Quadric world traces and relation/graph distinction','Intersect a quadric relation with a fixed world plane.',[['a,b,c','m','2,1,3','each 0 to 10'],['k','1','1','−1,0,1'],['z0','m','0','−10 to 10']],['Predict empty, point, or ellipse.','Vary world height and sign class.','Explain height branches and vacant slab.','Distinguish the world intersection from its planar drawing.'],'At z=z0, Q=k+(z0/c)². Q<0: empty; Q=0: point; Q>0: ellipse semiaxes a sqrtQ,b sqrtQ. k=1 is one-sheet; −1 two-sheet; 0 cone. The whole relation is not one global height graph.',[{a:2,b:1,c:3,k:1,z0:0,result:{Q:1,semiaxes:[2,1]}},{a:2,b:1,c:3,k:1,z0:3,result:{Q:2,semiaxes:[2*Math.SQRT2,Math.SQRT2]}},{a:2,b:1,c:3,k:-1,z0:4,result:{Q:7/9,semiaxes:[2*Math.sqrt(7)/3,Math.sqrt(7)/3]}}],String.raw`const a=2,b=1,c=3,k=1,z0=0;
const report = (value) => {
  const check = (v) => {
    if (typeof v === 'number' && !Number.isFinite(v))
      throw Error(
        'Numeric output is outside binary64 representability; use symbolic mathematics or representable inputs.',
      );
    if (v && typeof v === 'object') Object.values(v).forEach(check);
  };
  check(value);
  console.log(JSON.stringify(value));
};
if (
  ![a, b, c, k, z0].every(Number.isFinite) ||
  [a, b, c].some((v) => v <= 0 || v > 10) ||
  ![-1, 0, 1].includes(k) ||
  Math.abs(z0) > 10
)
  throw Error('Require 0<a,b,c≤10 m, k∈{−1,0,1}, |z0|≤10 m.');
const Q = k + (z0 / c) ** 2,
  kind = Q < 0 ? 'empty' : Q === 0 ? 'point' : 'ellipse',
  semiaxes = Q > 0 ? [a * Math.sqrt(Q), b * Math.sqrt(Q)] : null;
report({
  experiment: 'quadric-traces',
  units: 'm',
  input: { a, b, c, k, z0 },
  worldPlane: 'z=z0',
  relation: 'x²/a²+y²/b²−z²/c²=k; not one global height graph',
  result: {
    Q,
    kind,
    semiaxes,
    surface: k === 1 ? 'one-sheet' : k === -1 ? 'two-sheet' : 'cone',
    pointRegular: Q === 0 && k === -1,
    coneApexSingular: Q === 0 && k === 0,
  },
});
if (Q > 0)
  plot(
    Array.from({ length: 121 }, (_, i) => {
      const angle = (2 * Math.PI * i) / 120;
      return [semiaxes[0] * Math.cos(angle), semiaxes[1] * Math.sin(angle)];
    }),
    'World-plane trace at fixed z0, x,y in m',
  );
`),
make('level-tangents','21',6,'Regular and singular level-set tangent evidence','Test tangent evidence on a cone in world coordinates.',[['x,y,z','m','1,0,1','each −5 to 5']],['Predict regularity.','Vary signs and scale.','Explain the chain-rule tangent condition.','Transfer to the apex and its generators.'],'For F=x²+y²−z²=0, at a regular point the tangent plane has normal ∇F=(2x,2y,−2z). Angular direction yields F(P+δv)=δ² with δ=0.1 m; generator direction yields zero. At the apex this cone has no unique tangent plane, but zero gradient does not imply this for arbitrary level sets.',[{x:1,y:0,z:1,result:{angularResidual:.01}},{x:0,y:2,z:2,result:{angularResidual:.01}},{x:0,y:1,z:-1,result:{angularResidual:.01}}],String.raw`const x=1,y=0,z=1,delta=0.1;
const report = (value) => {
  const check = (v) => {
    if (typeof v === 'number' && !Number.isFinite(v))
      throw Error(
        'Numeric output is outside binary64 representability; use symbolic mathematics or representable inputs.',
      );
    if (v && typeof v === 'object') Object.values(v).forEach(check);
  };
  check(value);
  console.log(JSON.stringify(value));
};
if (
  ![x, y, z].every(Number.isFinite) ||
  Math.max(Math.abs(x), Math.abs(y), Math.abs(z)) > 5
)
  throw Error('Require finite world coordinates within ±5 m.');
const F = (u, v, w) => u * u + v * v - w * w,
  maxComponent = Math.max(Math.abs(x), Math.abs(y), Math.abs(z));
const scaled =
    maxComponent === 0
      ? [0, 0, 0]
      : [x / maxComponent, y / maxComponent, z / maxComponent],
  norm = Math.hypot(...scaled);
if (norm !== 0 && Math.abs(F(...scaled.map((v) => v / norm))) > 1e-12)
  throw Error('Point is off F=0; choose a point on the cone.');
const gradient = [2 * x, 2 * y, -2 * z],
  radius = Math.hypot(scaled[0], scaled[1]);
if (norm === 0) {
  report({
    experiment: 'level-tangents',
    units: 'm',
    input: { x, y, z },
    result: {
      status: 'singular—no unique tangent plane for this cone',
      generators: [
        [1, 0, 1],
        [0, 1, 1],
        [-1, 0, 1],
      ],
    },
  });
} else {
  const angular = [-scaled[1] / radius, scaled[0] / radius, 0],
    generator = scaled.map((v) => v / norm),
    probe = (v) => F(x + delta * v[0], y + delta * v[1], z + delta * v[2]);
  report({
    experiment: 'level-tangents',
    units: { gradient: 'm', residual: 'm²' },
    input: { x, y, z },
    result: {
      gradient,
      tangentEquation: '∇F(P)·(X−P)=0',
      angular,
      generator,
      gradientDots: [
        gradient.reduce((s, g, i) => s + g * angular[i], 0),
        gradient.reduce((s, g, i) => s + g * generator[i], 0),
      ],
      angularResidual: probe(angular),
      generatorResidual: probe(generator),
    },
  });
}
`),
make('forced-response','27',7,'Forced responses and independent zero-data checks','Compare exact particular responses with a convolution quadrature.',[['forcing','choice','constant','constant, linear, resonant'],['A','model units','2','|A|≤5'],['t','dimensionless','π/2','0 to 4'],['y0,v0','model units; model units per unit t','1,−0.5','each −5 to 5']],['Predict particular and homogeneous contributions.','Change forcing and initial data.','Differentiate p twice and check p″+p=f and both zero data.','State continuity and Wronskian conditions for other forcing.'],'With dimensionless t, p=∫₀ᵗ sin(t−s)f(s)ds. Constant: A(1−cos t); linear: A(t−sin t); resonant: A(sin t−t cos t)/2. Composite Simpson error ≤t⁵ M4/(180·200⁴) in model units. These families illustrate variation of parameters, not arbitrary edited forcing.',[{forcing:'constant',A:2,t:Math.PI/2,y0:1,v0:-.5,result:{particular:2,full:1.5}},{forcing:'linear',A:1,t:1,y0:0,v0:0,result:{particular:1-Math.sin(1)}},{forcing:'resonant',A:2,t:Math.PI,y0:0,v0:0,result:{particular:Math.PI}}],String.raw`const forcing='constant',A=2,t=Math.PI/2,y0=1,v0=-0.5,N=200;
const report = (value) => {
  const check = (v) => {
    if (typeof v === 'number' && !Number.isFinite(v))
      throw Error(
        'Numeric output is outside binary64 representability; use symbolic mathematics or representable inputs.',
      );
    if (v && typeof v === 'object') Object.values(v).forEach(check);
  };
  check(value);
  console.log(JSON.stringify(value));
};
if (
  !['constant', 'linear', 'resonant'].includes(forcing) ||
  ![A, t, y0, v0].every(Number.isFinite) ||
  Math.abs(A) > 5 ||
  t < 0 ||
  t > 4 ||
  Math.abs(y0) > 5 ||
  Math.abs(v0) > 5 ||
  !Number.isInteger(N) ||
  N !== 200
)
  throw Error(
    'Require a listed forcing, |A|≤5, 0≤t≤4, |initial data|≤5, and 200 Simpson panels.',
  );
const f = (s) =>
  forcing === 'constant' ? A : forcing === 'linear' ? A * s : A * Math.sin(s);
const p = (u) => {
  if (forcing === 'constant') {
    const s = Math.sin(u / 2);
    return 2 * A * s * s;
  }
  if (u <= 0.1) {
    const q = u * u;
    const polynomial =
      forcing === 'linear'
        ? 1 / 6 +
          q * (-1 / 120 + q * (1 / 5040 + q * (-1 / 362880 + q / 39916800)))
        : 1 / 6 + q * (-1 / 60 + q * (1 / 1680 + q * (-1 / 90720 + q / 7983360)));
    return A * u * u * u * polynomial;
  }
  return forcing === 'linear'
    ? A * (u - Math.sin(u))
    : (A * (Math.sin(u) - u * Math.cos(u))) / 2;
};
const pprime = (u) =>
  forcing === 'constant'
    ? A * Math.sin(u)
    : forcing === 'linear'
      ? 2 * A * Math.sin(u / 2) * Math.sin(u / 2)
      : (A * u * Math.sin(u)) / 2;
const psecond = (u) =>
  forcing === 'constant'
    ? A * Math.cos(u)
    : forcing === 'linear'
      ? A * Math.sin(u)
      : (A * (Math.sin(u) + u * Math.cos(u))) / 2;
const particular = p(t),
  seriesEvaluation = forcing !== 'constant' && t <= 0.1;
const referenceEvaluationBound = seriesEvaluation
  ? (Math.abs(A) * t ** 13 * (forcing === 'linear' ? 1 : 6)) / 6227020800
  : 0;
const integrand = (s) => Math.sin(t - s) * f(s),
  h = t / N;
let sum = integrand(0) + integrand(t);
for (let i = 1; i < N; i++) sum += (i % 2 ? 4 : 2) * integrand(i * h);
const simpson = (sum * h) / 3;
const M4 =
    Math.abs(A) * (forcing === 'constant' ? 1 : forcing === 'linear' ? t + 4 : 8),
  certificate = (t ** 5 * M4) / (180 * N ** 4);
report({
  experiment: 'forced-response',
  units: {
    t: 'dimensionless',
    response: 'model units',
    derivatives: 'model units per unit dimensionless t',
  },
  input: { forcing, A, t, y0, v0 },
  result: {
    particular,
    particularDerivative: pprime(t),
    equationResidual: psecond(t) + particular - f(t),
    convolutionSimpson: simpson,
    quadratureError: Math.abs(particular - simpson),
    certificate,
    referenceEvaluationBound,
    referenceEvaluationMethod:
      forcing === 'constant'
        ? 'Stable half-angle identity'
        : seriesEvaluation
          ? 'Taylor value through t^11 for small time'
          : 'Analytic trigonometric family',
    precision:
      'Bounds concern real arithmetic and exclude reference/Simpson roundoff; unrepresentably small bounds may round to zero',
    homogeneous: y0 * Math.cos(t) + v0 * Math.sin(t),
    full: y0 * Math.cos(t) + v0 * Math.sin(t) + particular,
    particularInitialValue: p(0),
    particularInitialDerivative: pprime(0),
  },
});
`,'#chapter/27/lesson/8'.split(' ')),
make('ode-series-error','27',9,'ODE series residual and certified actual error','Keep equation defect, value error, and uniform certificate separate.',[['m','integer','3','0 to 12'],['t,T','1','1,1','|t|≤T≤3']],['Predict degree effects on residual and error.','Change degree and interval.','Explain equation residual versus value error.','Derive the factorial bound with its interval hypothesis.'],'P₂ₘ=Σ(t²/2)^k/k!, exact solution exp(t²/2), residual −t^(2m+1)/(2^m m!). Uniform value error ≤exp(T²/2)(T²/2)^(m+1)/(m+1)! for |t|≤T. Factorial ratios and termwise differentiation justify the series.',[{m:3,t:1,T:1,result:{polynomial:1.6458333333333333,residual:-1/48}},{m:2,t:.5,T:.5,result:{polynomial:1.1328125,residual:-.00390625}},{m:4,t:2,T:2,result:{polynomial:7,residual:-4/3}}],String.raw`const m=3,t=1,T=1;
const report = (value) => {
  const check = (v) => {
    if (typeof v === 'number' && !Number.isFinite(v))
      throw Error(
        'Numeric output is outside binary64 representability; use symbolic mathematics or representable inputs.',
      );
    if (v && typeof v === 'object') Object.values(v).forEach(check);
  };
  check(value);
  console.log(JSON.stringify(value));
};
if (
  !Number.isInteger(m) ||
  m < 0 ||
  m > 12 ||
  ![t, T].every(Number.isFinite) ||
  T < 0 ||
  T > 3 ||
  Math.abs(t) > T
)
  throw Error('Require integer 0≤m≤12 and |t|≤T≤3.');
const fact = (n) => {
  let v = 1;
  for (let i = 2; i <= n; i++) v *= i;
  return v;
};
let polynomial = 0;
for (let k = 0; k <= m; k++) polynomial += ((t * t) / 2) ** k / fact(k);
const exact = Math.exp((t * t) / 2),
  residual = -(t ** (2 * m + 1)) / (2 ** m * fact(m)),
  certificate = (Math.exp((T * T) / 2) * ((T * T) / 2) ** (m + 1)) / fact(m + 1);
report({
  experiment: 'ode-series-error',
  units: 'dimensionless',
  input: { m, t, T },
  result: {
    polynomial,
    exact,
    residual,
    actualError: Math.abs(exact - polynomial),
    certificate,
  },
});
`),
make('implicit-decay','28',6,'Implicit-step accuracy versus positivity and stability','Separate step stability and strict positivity from numerical accuracy.',[['lambda','s⁻¹','10','0 < lambda ≤ 20'],['h','s','0.3','0 < h ≤ 1'],['n','integer','1','n≥1, nh≤5 s'],['y0','model units','1','0 < y0 ≤ 10']],['Predict signs before running.','Change step size at a common endpoint.','Explain why positivity does not certify accuracy.','Pick a tolerance and compare observed error with bound.'],'For z=lambda h, exact=y0 exp(−nz), forward=y0(1−z)^n, implicit=y0/(1+z)^n. Implicit multiplier lies in (0,1); forward magnitude decays for 0<z<2 and is strictly positive for 0<z<1. 0≤implicit−exact≤exact(exp(nz²/2)−1). The reported certificate also uses the tighter trivial bound implicit−exact≤implicit to stay finite in binary64. z=2 is neutral for forward Euler.',[{lambda:10,h:.3,n:1,y0:1,result:{forward:-2,implicit:.25,exact:Math.exp(-3)}},{lambda:10,h:.05,n:2,y0:1,result:{implicit:4/9,exact:Math.exp(-1)}},{lambda:10,h:.01,n:10,y0:1,result:{implicit:1/1.1**10,exact:Math.exp(-1)}}],String.raw`const lambda=10,h=0.3,n=1,y0=1;
const report = (value) => {
  const check = (v) => {
    if (typeof v === 'number' && !Number.isFinite(v))
      throw Error(
        'Numeric output is outside binary64 representability; use symbolic mathematics or representable inputs.',
      );
    if (v && typeof v === 'object') Object.values(v).forEach(check);
  };
  check(value);
  console.log(JSON.stringify(value));
};
if (
  ![lambda, h, n, y0].every(Number.isFinite) ||
  lambda <= 0 ||
  lambda > 20 ||
  h <= 0 ||
  h > 1 ||
  !Number.isInteger(n) ||
  n < 1 ||
  n * h > 5 ||
  y0 <= 0 ||
  y0 > 10
)
  throw Error('Require 0<lambda≤20/s, 0<h≤1 s, integer n≥1, nh≤5 s, 0<y0≤10.');
const z = lambda * h,
  cumulative = n * z,
  exact = y0 * Math.exp(-cumulative),
  implicit = y0 * Math.exp(-n * Math.log1p(z));
const forwardMagnitude =
  z < 1
    ? y0 * Math.exp(n * Math.log1p(-z))
    : z === 1
      ? 0
      : y0 * Math.exp(n * Math.log(z - 1));
const forward = z > 1 && n % 2 === 1 ? -forwardMagnitude : forwardMagnitude;
const exponent = (cumulative * z) / 2;
const implicitErrorCertificate =
  exponent > 700 ? implicit : Math.min(implicit, exact * Math.expm1(exponent));
report({
  experiment: 'implicit-decay',
  units: { time: 's', state: 'model units' },
  input: { lambda, h, n, y0 },
  result: {
    z,
    exact,
    forward,
    implicit,
    forwardError: Math.abs(forward - exact),
    implicitError: Math.abs(implicit - exact),
    implicitErrorCertificate,
    forwardStrictlyPositive: z < 1,
    forwardMagnitudeDecays: z < 2,
    forwardNeutral: z === 2,
    implicitStrictlyPositive: true,
    implicitMagnitudeDecays: true,
  },
});
`)
];
const boundaryNotes={
  'hyperbolic-branches':'Boundary: q=1 or −1 is outside the real atanh domain and is rejected. acosh uses its nonnegative branch; tanh never reaches ±1 at finite t.',
  'inverse-endpoints':'Boundary: at x=0 the value is zero, but one-sided slopes −sqrt(2) and sqrt(2) differ. A centered difference of zero is not a derivative.',
  'hyperbolic-substitution':'Boundary: a=0 is rejected by this substitution contract; L=U returns zero. The midpoint certificate needs a>0.',
  'formal-series':'Boundary: t=−1 has a rational IVP value but the centered geometric series does not converge there. t=1 is singular and rejected.',
  'focus-directrix-conics':'Boundary: e=0 is rejected. At either hyperbolic angular limit the radius diverges, so no finite plotted point exists. At e=1 only the left positive-radius branch remains.',
  'helix-world':'Boundary: R=0 is excluded by the helix contract. h=0 gives a circle and zero rise; equal xy projections need not be equal world points when h is nonzero.',
  'quadric-traces':'Boundary: k=−1,z0=c gives a regular two-sheet vertex point; k=0,z0=0 gives a singular cone apex point. Q<0 is empty.',
  'level-tangents':'Boundary: P=(0,0,0) has zero gradient and no unique tangent plane for this cone; three noncoplanar generators show why. Off-level P=(1,0,0) is rejected.',
  'forced-response':'Boundary: t=0 gives particular value and derivative zero and full initial data y0,v0. The convolution comparison requires continuous forcing and nonzero Wronskian.',
  'ode-series-error':'Boundary: m=t=T=0 gives polynomial and exact value 1, zero residual and error. Reject T<|t|.',
  'implicit-decay':'Boundary: z=1 makes forward Euler zero, not strictly positive; z=2 gives multiplier −1, neutral rather than decaying. The implicit multiplier remains in (0,1) for z>0.'
};
for(const lab of supplementaryLabs)lab.boundary=boundaryNotes[lab.id];
const caseExplanations={
  'hyperbolic-branches':['Default t=ln 2, q=0.6: sinh=0.75, cosh=1.25, tanh=0.6, identity=1, both inverse checks and atanh(q)=ln 2.','Changed t=−ln 2, q=−0.6: sinh=−0.75, cosh=1.25, tanh=−0.6; asinh(sinh t)=−ln 2, acosh(cosh t)=ln 2, atanh(q)=−ln 2.','Changed t=0, q=0: sinh=tanh=atanh=0, cosh=1, and both inverse checks give zero.'],
  'inverse-endpoints':['Default x=0.5: g=ln 2 and g′=4/3.','Changed x=−0.5: g=ln 2 and g′=−4/3.','Changed x=1: g=acosh 2≈1.316957897 and g′=2/sqrt(3)≈1.154700538.'],
  'hyperbolic-substitution':['Default a=1 m, [L,U]=[0,1] m: transformed bounds 0 and asinh 1; exact area=(sqrt(2)+ln(1+sqrt(2)))/2≈1.147793575 m².','Changed a=3 m, [0,4] m: bounds 0 and asinh(4/3)=ln 3; exact area=10+(9/2)ln 3≈14.943755299 m².','Changed a=1 m, [−1,0] m: bounds −asinh 1 and 0; the exact area equals the default by evenness.'],
  'formal-series':['Default N=4,t=0.5: P=1.9375, rational=2, signed rational-minus-polynomial error=0.0625, residual=−0.3125; flat value=e⁻⁴.','Changed N=3,t=−0.5: P=0.625, rational=2/3, signed error=1/24, residual=0.5.','Changed N=4,t=0.8: P=3.3616, rational=5, signed error=1.6384, residual=−2.048.'],
  'focus-directrix-conics':['Default e=2,d=3 m: left and right vertices x=2 and 6 m, center x=4 m, left angular limit 2π/3, right limit π/3; each sampled focus/directrix ratio is 2.','Changed e=0.5,d=4 m: one ellipse with vertices x=−4 and 4/3 m; the distance ratio is 0.5.','Changed e=1,d=4 m: a left-opening parabola with vertex x=2 m and no right positive-radius branch.'],
  'helix-world':['Default R=2 m,h=0.5 m/parameter,t=π/2: world point (0,2,π/4) m, velocity (−2,0,0.5) m/parameter, unit tangent (−4,0,1)/sqrt(17), curvature 8/17 m⁻¹.','Changed R=3 m,h=0,t=0: world point (3,0,0) m, speed 3 m/parameter, curvature 1/3 m⁻¹, turn rise zero; the world positions one turn apart coincide.','Changed R=1 m,h=1 m/parameter,t=π: world point (−1,0,π) m, speed sqrt(2) m/parameter, curvature 1/2 m⁻¹, turn rise 2π m.'],
  'quadric-traces':['Default (a,b,c,k,z0)=(2,1,3,1,0): world plane z=0 m cuts an ellipse with semiaxes (2,1) m; the relation is a one-sheet hyperboloid.','Changed z0=3 m, otherwise default: Q=2 and world trace semiaxes (2sqrt(2),sqrt(2)) m.','Changed k=−1,z0=4 m, default scales: Q=7/9 and world trace semiaxes (2sqrt(7)/3,sqrt(7)/3) m on a two-sheet hyperboloid.'],
  'level-tangents':['Default P=(1,0,1) m: ∇F=(2,0,−2) m, tangent plane x−z=0, angular probe residual 0.01 m² and generator residual zero.','Changed P=(0,2,2) m: ∇F=(0,4,−4) m, tangent plane y−z=0, angular probe residual 0.01 m².','Changed P=(0,1,−1) m: ∇F=(0,2,2) m, tangent plane y+z=0, angular probe residual 0.01 m².'],
  'forced-response':['Default constant forcing A=2, t=π/2, y0=1, v0=−0.5: zero-data particular=2 output units, homogeneous=−0.5, full response=1.5.','Changed linear forcing A=1, t=1, zero initial data: particular and full response=1−sin 1≈0.158529015.','Changed resonant forcing A=2, t=π, zero initial data: particular and full response=π; the stated 200-panel Simpson bound is about 1.70×10⁻⁸.'],
  'ode-series-error':['Default m=3,t=T=1: P=1.645833333, residual=−1/48, actual value error≈0.002887937, uniform certificate≈0.004293545.','Changed m=2,t=T=0.5: P=1.1328125, residual=−0.00390625, actual error≈0.000335953, certificate≈0.000368863.','Changed m=4,t=T=2: P=7, residual=−4/3, actual error≈0.389056099, certificate≈1.970414960.'],
  'implicit-decay':['Default λ=10 s⁻¹,h=0.3 s,n=1,y0=1: z=3, forward=−2, implicit=0.25, exact≈0.049787068, implicit absolute error≈0.200212932.','Changed h=0.05 s,n=2 at the common 0.1 s endpoint: implicit=4/9≈0.444444444, exact=e⁻¹≈0.367879441, implicit error≈0.076565003.','Changed h=0.01 s,n=10 at the same endpoint: implicit≈0.385543289, exact=e⁻¹, implicit error≈0.017663848.']
};
for(const lab of supplementaryLabs)lab.caseExplanations=caseExplanations[lab.id];

// Numerical evaluation and mathematical error are distinct learning outcomes.
const numericalEvaluationNotes={
  "inverse-endpoints": "The equivalent evaluation 2 asinh(|x|/sqrt(2)) avoids rounding 1+x² to 1 near zero; acosh(cosh x)=|x| uses the exact real branch identity.",
  "hyperbolic-substitution": "For stable definite evaluation, write sL=sqrt(a²+L²), sU=sqrt(a²+U²), width=U−L. The identity tanh((tU−tL)/2)=width/(sU+sL) avoids cancellation in the inverse difference; when that ratio rounds to 1, use logarithmic inverse bounds. The factored primitive keeps narrow interval accuracy. Also |f′|≤1 gives a midpoint error bound width²/(4N): integrate the Lipschitz estimate |f(x)−f(midpoint)|≤|x−midpoint| over each panel. Report the smaller real-arithmetic bound. Computed certificates may underflow at unrepresentably small scales; they exclude roundoff. The 64-epsilon allowance is a heuristic diagnostic, not a proved floating-point error bound.",
  "helix-world": "Evaluate curvature as (R/speed)/speed to avoid underflow from first squaring a tiny radius; this equals R/(R²+h²).",
  "level-tangents": "Normalize by the largest coordinate before forming unit directions and the relative level check. This avoids an absolute tolerance floor and tiny-norm underflow. Numerical membership tolerance does not prove an exact cone identity.",
  "forced-response": "For a physical oscillator with angular frequency omega>0, t=omega times physical time. Divide acceleration forcing by omega² and use v0=physical initial velocity/omega. All displayed derivatives are with respect to dimensionless t.",
  "implicit-decay": "Closed multiplier iterates use log1p so tiny z is retained instead of rounding 1±z to 1. The finite certificate preserves the smaller of the implicit-value bound and logarithmic bound; it avoids evaluating an overflowing exponential. Certificates concern real-arithmetic discretization, not roundoff. Positivity statements concern mathematical multipliers; an unrepresentably small computed value may round to zero."
};
for(const lab of supplementaryLabs){if(numericalEvaluationNotes[lab.id])lab.expected+=' '+numericalEvaluationNotes[lab.id];lab.expected+=' Non-finite numeric output raises an explicit precision error; null is reserved for a deliberately absent derivative.';}

supplementaryLabs.find(lab=>lab.id==='forced-response').expected+=' '+ "For small time, direct subtraction in 1−cos(t), t−sin(t), and sin(t)−t cos(t) can lose a representable response. The constant family uses 2A sin²(t/2), with multiplication ordered to reduce intermediate underflow. For 0≤t≤0.1, the linear value uses A[t³/6−t⁵/120+t⁷/5040−t⁹/362880+t¹¹/39916800], and the resonant value uses A[t³/6−t⁵/60+t⁷/1680−t⁹/90720+t¹¹/7983360]. Alternating decreasing terms give next-term bounds |A|t¹³/13! and 6|A|t¹³/13! respectively. The program reports this real Taylor evaluation bound separately from the real Simpson quadrature bound. Derivatives evaluate the analytic family; the displayed equation check also includes the reference approximation. Neither bound certifies binary64 roundoff, and tiny positive bounds may underflow. At A=1,t=10⁻⁸ the constant response is about 5×10⁻¹⁷, while the linear and resonant responses are about 1.666666667×10⁻²⁵; the stable formulas retain these values.";

supplementaryLabs.find(lab=>lab.id==='hyperbolic-branches').expected+=' '+ "The real identity acosh(cosh(t))=|t| is evaluated as |t|; the separate directAcoshCosh field shows what happens after cosh has rounded to binary64. Near zero that direct composition can give zero because cosh(t) rounds to 1. The logarithmic atanh comparison uses [log1p(q)−log1p(−q)]/2 to retain small q; directLogAtanh shows cancellation in the unmodified quotient formula. Algebraic identities and rounded numerical compositions are different comparisons.";
