// Exact source-field snapshot for presentation drift detection.
export const sourceFields={
  "hyperbolic-branches": {
    "description": "Compare the hyperbola identity with the real inverse branches; every value is dimensionless.",
    "inputs": [
      [
        "t",
        "1",
        "ln 2",
        "−4 to 4"
      ],
      [
        "q",
        "1",
        "0.6",
        "−1 < q < 1"
      ]
    ],
    "tasks": [
      "Predict: Predict signs and branches before running.",
      "Manipulate: Change t and q, including negative values.",
      "Explain: Explain why acosh(cosh t) loses the sign.",
      "Transfer: Derive the logarithmic atanh formula and its open domain."
    ],
    "expected": "cosh²t−sinh²t=1; asinh(sinh t)=t; acosh(cosh t)=|t|; atanh q=log((1+q)/(1−q))/2 for |q|<1. Samples cannot prove the identity. Non-finite numeric output raises an explicit precision error; null is reserved for a deliberately absent derivative. The real identity acosh(cosh(t))=|t| is evaluated as |t|; the separate directAcoshCosh field shows what happens after cosh has rounded to binary64. Near zero that direct composition can give zero because cosh(t) rounds to 1. The logarithmic atanh comparison uses [log1p(q)−log1p(−q)]/2 to retain small q; directLogAtanh shows cancellation in the unmodified quotient formula. Algebraic identities and rounded numerical compositions are different comparisons.",
    "caseExplanations": [
      "Default t=ln 2, q=0.6: sinh=0.75, cosh=1.25, tanh=0.6, identity=1, both inverse checks and atanh(q)=ln 2.",
      "Changed t=−ln 2, q=−0.6: sinh=−0.75, cosh=1.25, tanh=−0.6; asinh(sinh t)=−ln 2, acosh(cosh t)=ln 2, atanh(q)=−ln 2.",
      "Changed t=0, q=0: sinh=tanh=atanh=0, cosh=1, and both inverse checks give zero."
    ],
    "boundary": "Boundary: q=1 or −1 is outside the real atanh domain and is rejected. acosh uses its nonnegative branch; tanh never reaches ±1 at finite t."
  },
  "inverse-endpoints": {
    "description": "Inspect a cusp at an inverse-function domain endpoint.",
    "inputs": [
      [
        "x",
        "1",
        "0.5",
        "−4 to 4"
      ]
    ],
    "tasks": [
      "Predict: Predict the slope sign on either side of zero.",
      "Manipulate: Move x across zero.",
      "Explain: Explain why an inverse derivative rule fails at equality.",
      "Transfer: Compare the corner in acosh(cosh x)."
    ],
    "expected": "For x≠0, g=acosh(1+x²) and g′=2 sign(x)/sqrt(x²+2). At x=0 one-sided slopes are −sqrt2 and sqrt2, so no derivative; a symmetric difference of zero is not its derivative. The equivalent evaluation 2 asinh(|x|/sqrt(2)) avoids rounding 1+x² to 1 near zero; acosh(cosh x)=|x| uses the exact real branch identity. Non-finite numeric output raises an explicit precision error; null is reserved for a deliberately absent derivative.",
    "caseExplanations": [
      "Default x=0.5: g=ln 2 and g′=4/3.",
      "Changed x=−0.5: g=ln 2 and g′=−4/3.",
      "Changed x=1: g=acosh 2≈1.316957897 and g′=2/sqrt(3)≈1.154700538."
    ],
    "boundary": "Boundary: at x=0 the value is zero, but one-sided slopes −sqrt(2) and sqrt(2) differ. A centered difference of zero is not a derivative."
  },
  "hyperbolic-substitution": {
    "description": "Transform a dimensioned definite integral and certify the midpoint comparison.",
    "inputs": [
      [
        "a",
        "m",
        "1",
        "0 < a ≤ 10"
      ],
      [
        "L",
        "m",
        "0",
        "−10 ≤ L ≤ U"
      ],
      [
        "U",
        "m",
        "1",
        "L ≤ U ≤ 10"
      ]
    ],
    "tasks": [
      "Predict: Predict transformed bounds and units.",
      "Manipulate: Change scale and interval.",
      "Explain: Explain both cosh factors and the positive square root.",
      "Transfer: Differentiate F to check the antiderivative."
    ],
    "expected": "x=a sinh t gives dx=a cosh t dt and sqrt(a²+x²)=a cosh t for a>0. F(x)=[x sqrt(a²+x²)+a²asinh(x/a)]/2. Real-arithmetic midpoint error ≤(U−L)³/(24·400²a) m² since |f″|≤1/a; binary64 roundoff is reported separately. For stable definite evaluation, write sL=sqrt(a²+L²), sU=sqrt(a²+U²), width=U−L. The identity tanh((tU−tL)/2)=width/(sU+sL) avoids cancellation in the inverse difference; when that ratio rounds to 1, use logarithmic inverse bounds. The factored primitive keeps narrow interval accuracy. Also |f′|≤1 gives a midpoint error bound width²/(4N): integrate the Lipschitz estimate |f(x)−f(midpoint)|≤|x−midpoint| over each panel. Report the smaller real-arithmetic bound. Computed certificates may underflow at unrepresentably small scales; they exclude roundoff. The 64-epsilon allowance is a heuristic diagnostic, not a proved floating-point error bound. Non-finite numeric output raises an explicit precision error; null is reserved for a deliberately absent derivative.",
    "caseExplanations": [
      "Default a=1 m, [L,U]=[0,1] m: transformed bounds 0 and asinh 1; exact area=(sqrt(2)+ln(1+sqrt(2)))/2≈1.147793575 m².",
      "Changed a=3 m, [0,4] m: bounds 0 and asinh(4/3)=ln 3; exact area=10+(9/2)ln 3≈14.943755299 m².",
      "Changed a=1 m, [−1,0] m: bounds −asinh 1 and 0; the exact area equals the default by evenness."
    ],
    "boundary": "Boundary: a=0 is rejected by this substitution contract; L=U returns zero. The midpoint certificate needs a>0."
  },
  "formal-series": {
    "description": "Separate an algebraic ODE residual, value error, and convergence claim.",
    "inputs": [
      [
        "N",
        "integer",
        "4",
        "0 to 20"
      ],
      [
        "t",
        "1",
        "0.5",
        "−1 to 0.95, t≠1"
      ]
    ],
    "tasks": [
      "Predict: Predict residual and signed error.",
      "Manipulate: Change degree and point.",
      "Explain: Explain formal recurrence versus convergence.",
      "Transfer: Use the flat function to disprove smooth Taylor equality."
    ],
    "expected": "For (1−t)y′=y, a_n=1 and P_N=Σt^k. Residual =−(N+1)t^N. For |t|<1, rational minus polynomial =t^(N+1)/(1−t). At t=−1 the rational value exists but the centered series diverges. exp(−1/t²), extended by zero at zero, has every Taylor coefficient zero. Non-finite numeric output raises an explicit precision error; null is reserved for a deliberately absent derivative.",
    "caseExplanations": [
      "Default N=4,t=0.5: P=1.9375, rational=2, signed rational-minus-polynomial error=0.0625, residual=−0.3125; flat value=e⁻⁴.",
      "Changed N=3,t=−0.5: P=0.625, rational=2/3, signed error=1/24, residual=0.5.",
      "Changed N=4,t=0.8: P=3.3616, rational=5, signed error=1.6384, residual=−2.048."
    ],
    "boundary": "Boundary: t=−1 has a rational IVP value but the centered geometric series does not converge there. t=1 is singular and rejected."
  },
  "focus-directrix-conics": {
    "description": "Sample only positive-radius branches of a focus/directrix conic.",
    "inputs": [
      [
        "e",
        "1",
        "2",
        "0 < e ≤ 3"
      ],
      [
        "d",
        "m",
        "3",
        "0 < d ≤ 10"
      ]
    ],
    "tasks": [
      "Predict: Predict one or two branches.",
      "Manipulate: Vary e through 1.",
      "Explain: Explain the distance ratio and positive radius convention.",
      "Transfer: Derive both vertices from the original distance relation."
    ],
    "expected": "sqrt(x²+y²)=e|x−d|. For e>1 left R=ed/(1+e cosθ), |θ|<acos(−1/e); right R=ed/(e cosφ−1), |φ|<acos(1/e). Vertices ed/(1+e) and ed/(e−1). Denominator limits have no finite point; clipped samples cannot establish the global locus. Non-finite numeric output raises an explicit precision error; null is reserved for a deliberately absent derivative.",
    "caseExplanations": [
      "Default e=2,d=3 m: left and right vertices x=2 and 6 m, center x=4 m, left angular limit 2π/3, right limit π/3; each sampled focus/directrix ratio is 2.",
      "Changed e=0.5,d=4 m: one ellipse with vertices x=−4 and 4/3 m; the distance ratio is 0.5.",
      "Changed e=1,d=4 m: a left-opening parabola with vertex x=2 m and no right positive-radius branch."
    ],
    "boundary": "Boundary: e=0 is rejected. At either hyperbolic angular limit the radius diverges, so no finite plotted point exists. At e=1 only the left positive-radius branch remains."
  },
  "helix-world": {
    "description": "Compute three-dimensional geometry before drawing its xy projection.",
    "inputs": [
      [
        "R",
        "m",
        "2",
        "0 < R ≤ 10"
      ],
      [
        "h",
        "m/parameter",
        "0.5",
        "−5 to 5"
      ],
      [
        "t",
        "1",
        "π/2",
        "−2π to 2π"
      ]
    ],
    "tasks": [
      "Predict: Predict turn separation in world space.",
      "Manipulate: Vary radius and rise.",
      "Explain: Explain tangent and curvature using world triples.",
      "Transfer: Compare equal xy positions at different heights."
    ],
    "expected": "r=(R cos t,R sin t,ht) m; speed=sqrt(R²+h²) m per parameter; curvature=R/(R²+h²) m⁻¹; one turn rises 2πh m. An xy plot is a projection only. Evaluate curvature as (R/speed)/speed to avoid underflow from first squaring a tiny radius; this equals R/(R²+h²). Non-finite numeric output raises an explicit precision error; null is reserved for a deliberately absent derivative.",
    "caseExplanations": [
      "Default R=2 m,h=0.5 m/parameter,t=π/2: world point (0,2,π/4) m, velocity (−2,0,0.5) m/parameter, unit tangent (−4,0,1)/sqrt(17), curvature 8/17 m⁻¹.",
      "Changed R=3 m,h=0,t=0: world point (3,0,0) m, speed 3 m/parameter, curvature 1/3 m⁻¹, turn rise zero; the world positions one turn apart coincide.",
      "Changed R=1 m,h=1 m/parameter,t=π: world point (−1,0,π) m, speed sqrt(2) m/parameter, curvature 1/2 m⁻¹, turn rise 2π m."
    ],
    "boundary": "Boundary: R=0 is excluded by the helix contract. h=0 gives a circle and zero rise; equal xy projections need not be equal world points when h is nonzero."
  },
  "quadric-traces": {
    "description": "Intersect a quadric relation with a fixed world plane.",
    "inputs": [
      [
        "a,b,c",
        "m",
        "2,1,3",
        "each 0 to 10"
      ],
      [
        "k",
        "1",
        "1",
        "−1,0,1"
      ],
      [
        "z0",
        "m",
        "0",
        "−10 to 10"
      ]
    ],
    "tasks": [
      "Predict: Predict empty, point, or ellipse.",
      "Manipulate: Vary world height and sign class.",
      "Explain: Explain height branches and vacant slab.",
      "Transfer: Distinguish the world intersection from its planar drawing."
    ],
    "expected": "At z=z0, Q=k+(z0/c)². Q<0: empty; Q=0: point; Q>0: ellipse semiaxes a sqrtQ,b sqrtQ. k=1 is one-sheet; −1 two-sheet; 0 cone. The whole relation is not one global height graph. Non-finite numeric output raises an explicit precision error; null is reserved for a deliberately absent derivative.",
    "caseExplanations": [
      "Default (a,b,c,k,z0)=(2,1,3,1,0): world plane z=0 m cuts an ellipse with semiaxes (2,1) m; the relation is a one-sheet hyperboloid.",
      "Changed z0=3 m, otherwise default: Q=2 and world trace semiaxes (2sqrt(2),sqrt(2)) m.",
      "Changed k=−1,z0=4 m, default scales: Q=7/9 and world trace semiaxes (2sqrt(7)/3,sqrt(7)/3) m on a two-sheet hyperboloid."
    ],
    "boundary": "Boundary: k=−1,z0=c gives a regular two-sheet vertex point; k=0,z0=0 gives a singular cone apex point. Q<0 is empty."
  },
  "level-tangents": {
    "description": "Test tangent evidence on a cone in world coordinates.",
    "inputs": [
      [
        "x,y,z",
        "m",
        "1,0,1",
        "each −5 to 5"
      ]
    ],
    "tasks": [
      "Predict: Predict regularity.",
      "Manipulate: Vary signs and scale.",
      "Explain: Explain the chain-rule tangent condition.",
      "Transfer: Transfer to the apex and its generators."
    ],
    "expected": "For F=x²+y²−z²=0, at a regular point the tangent plane has normal ∇F=(2x,2y,−2z). Angular direction yields F(P+δv)=δ² with δ=0.1 m; generator direction yields zero. At the apex this cone has no unique tangent plane, but zero gradient does not imply this for arbitrary level sets. Normalize by the largest coordinate before forming unit directions and the relative level check. This avoids an absolute tolerance floor and tiny-norm underflow. Numerical membership tolerance does not prove an exact cone identity. Non-finite numeric output raises an explicit precision error; null is reserved for a deliberately absent derivative.",
    "caseExplanations": [
      "Default P=(1,0,1) m: ∇F=(2,0,−2) m, tangent plane x−z=0, angular probe residual 0.01 m² and generator residual zero.",
      "Changed P=(0,2,2) m: ∇F=(0,4,−4) m, tangent plane y−z=0, angular probe residual 0.01 m².",
      "Changed P=(0,1,−1) m: ∇F=(0,2,2) m, tangent plane y+z=0, angular probe residual 0.01 m²."
    ],
    "boundary": "Boundary: P=(0,0,0) has zero gradient and no unique tangent plane for this cone; three noncoplanar generators show why. Off-level P=(1,0,0) is rejected."
  },
  "forced-response": {
    "description": "Compare exact particular responses with a convolution quadrature.",
    "inputs": [
      [
        "forcing",
        "choice",
        "constant",
        "constant, linear, resonant"
      ],
      [
        "A",
        "model units",
        "2",
        "|A|≤5"
      ],
      [
        "t",
        "dimensionless",
        "π/2",
        "0 to 4"
      ],
      [
        "y0,v0",
        "model units; model units per unit t",
        "1,−0.5",
        "each −5 to 5"
      ]
    ],
    "tasks": [
      "Predict: Predict particular and homogeneous contributions.",
      "Manipulate: Change forcing and initial data.",
      "Explain: Differentiate p twice and check p″+p=f and both zero data.",
      "Transfer: State continuity and Wronskian conditions for other forcing."
    ],
    "expected": "With dimensionless t, p=∫₀ᵗ sin(t−s)f(s)ds. Constant: A(1−cos t); linear: A(t−sin t); resonant: A(sin t−t cos t)/2. Composite Simpson error ≤t⁵ M4/(180·200⁴) in model units. These families illustrate variation of parameters, not arbitrary edited forcing. For a physical oscillator with angular frequency omega>0, t=omega times physical time. Divide acceleration forcing by omega² and use v0=physical initial velocity/omega. All displayed derivatives are with respect to dimensionless t. Non-finite numeric output raises an explicit precision error; null is reserved for a deliberately absent derivative. For small time, direct subtraction in 1−cos(t), t−sin(t), and sin(t)−t cos(t) can lose a representable response. The constant family uses 2A sin²(t/2), with multiplication ordered to reduce intermediate underflow. For 0≤t≤0.1, the linear value uses A[t³/6−t⁵/120+t⁷/5040−t⁹/362880+t¹¹/39916800], and the resonant value uses A[t³/6−t⁵/60+t⁷/1680−t⁹/90720+t¹¹/7983360]. Alternating decreasing terms give next-term bounds |A|t¹³/13! and 6|A|t¹³/13! respectively. The program reports this real Taylor evaluation bound separately from the real Simpson quadrature bound. Derivatives evaluate the analytic family; the displayed equation check also includes the reference approximation. Neither bound certifies binary64 roundoff, and tiny positive bounds may underflow. At A=1,t=10⁻⁸ the constant response is about 5×10⁻¹⁷, while the linear and resonant responses are about 1.666666667×10⁻²⁵; the stable formulas retain these values.",
    "caseExplanations": [
      "Default constant forcing A=2, t=π/2, y0=1, v0=−0.5: zero-data particular=2 output units, homogeneous=−0.5, full response=1.5.",
      "Changed linear forcing A=1, t=1, zero initial data: particular and full response=1−sin 1≈0.158529015.",
      "Changed resonant forcing A=2, t=π, zero initial data: particular and full response=π; the stated 200-panel Simpson bound is about 1.70×10⁻⁸."
    ],
    "boundary": "Boundary: t=0 gives particular value and derivative zero and full initial data y0,v0. The convolution comparison requires continuous forcing and nonzero Wronskian."
  },
  "ode-series-error": {
    "description": "Keep equation defect, value error, and uniform certificate separate.",
    "inputs": [
      [
        "m",
        "integer",
        "3",
        "0 to 12"
      ],
      [
        "t,T",
        "1",
        "1,1",
        "|t|≤T≤3"
      ]
    ],
    "tasks": [
      "Predict: Predict degree effects on residual and error.",
      "Manipulate: Change degree and interval.",
      "Explain: Explain equation residual versus value error.",
      "Transfer: Derive the factorial bound with its interval hypothesis."
    ],
    "expected": "P₂ₘ=Σ(t²/2)^k/k!, exact solution exp(t²/2), residual −t^(2m+1)/(2^m m!). Uniform value error ≤exp(T²/2)(T²/2)^(m+1)/(m+1)! for |t|≤T. Factorial ratios and termwise differentiation justify the series. Non-finite numeric output raises an explicit precision error; null is reserved for a deliberately absent derivative.",
    "caseExplanations": [
      "Default m=3,t=T=1: P=1.645833333, residual=−1/48, actual value error≈0.002887937, uniform certificate≈0.004293545.",
      "Changed m=2,t=T=0.5: P=1.1328125, residual=−0.00390625, actual error≈0.000335953, certificate≈0.000368863.",
      "Changed m=4,t=T=2: P=7, residual=−4/3, actual error≈0.389056099, certificate≈1.970414960."
    ],
    "boundary": "Boundary: m=t=T=0 gives polynomial and exact value 1, zero residual and error. Reject T<|t|."
  },
  "implicit-decay": {
    "description": "Separate step stability and strict positivity from numerical accuracy.",
    "inputs": [
      [
        "lambda",
        "s⁻¹",
        "10",
        "0 < lambda ≤ 20"
      ],
      [
        "h",
        "s",
        "0.3",
        "0 < h ≤ 1"
      ],
      [
        "n",
        "integer",
        "1",
        "n≥1, nh≤5 s"
      ],
      [
        "y0",
        "model units",
        "1",
        "0 < y0 ≤ 10"
      ]
    ],
    "tasks": [
      "Predict: Predict signs before running.",
      "Manipulate: Change step size at a common endpoint.",
      "Explain: Explain why positivity does not certify accuracy.",
      "Transfer: Pick a tolerance and compare observed error with bound."
    ],
    "expected": "For z=lambda h, exact=y0 exp(−nz), forward=y0(1−z)^n, implicit=y0/(1+z)^n. Implicit multiplier lies in (0,1); forward magnitude decays for 0<z<2 and is strictly positive for 0<z<1. 0≤implicit−exact≤exact(exp(nz²/2)−1). The reported certificate also uses the tighter trivial bound implicit−exact≤implicit to stay finite in binary64. z=2 is neutral for forward Euler. Closed multiplier iterates use log1p so tiny z is retained instead of rounding 1±z to 1. The finite certificate preserves the smaller of the implicit-value bound and logarithmic bound; it avoids evaluating an overflowing exponential. Certificates concern real-arithmetic discretization, not roundoff. Positivity statements concern mathematical multipliers; an unrepresentably small computed value may round to zero. Non-finite numeric output raises an explicit precision error; null is reserved for a deliberately absent derivative.",
    "caseExplanations": [
      "Default λ=10 s⁻¹,h=0.3 s,n=1,y0=1: z=3, forward=−2, implicit=0.25, exact≈0.049787068, implicit absolute error≈0.200212932.",
      "Changed h=0.05 s,n=2 at the common 0.1 s endpoint: implicit=4/9≈0.444444444, exact=e⁻¹≈0.367879441, implicit error≈0.076565003.",
      "Changed h=0.01 s,n=10 at the same endpoint: implicit≈0.385543289, exact=e⁻¹, implicit error≈0.017663848."
    ],
    "boundary": "Boundary: z=1 makes forward Euler zero, not strictly positive; z=2 gives multiplier −1, neutral rather than decaying. The implicit multiplier remains in (0,1) for z>0."
  }
};
