// Stable project and stage IDs are part of browser-local learning records.
export const projects = [
  {
    id: 'folded-tray', title: 'Folded-sheet specimen tray',
    summary: 'Choose a manufacturable corner cut that maximizes the capacity of an open tray.',
    concepts: ['constrained optimization', 'derivatives', 'endpoints', 'finite differences', 'units'],
    chapterIds: ['03', '09', '28'],
    prerequisites: [
      {label:'Numerical error',href:'#chapter/03/lesson/3'},
      {label:'Optimization objective and feasible set',href:'#chapter/09/lesson/1'},
      {label:'Global maximum certificate',href:'#chapter/09/lesson/2'},
      {label:'Boundary candidates',href:'#chapter/09/lesson/6'},
      {label:'Reproducible reporting',href:'#chapter/28/lesson/5'}
    ],
    scenario: 'A workshop cuts equal square corners from a $30\\,\\mathrm{cm}$ by $20\\,\\mathrm{cm}$ sheet and folds the sides to make an open specimen tray. The cutting tool permits a corner cut from $2\\,\\mathrm{cm}$ through $4\\,\\mathrm{cm}$. Recommend the cut that gives the greatest capacity within that permitted range.',
    data: {
      inputs: [['Sheet length','$30\\,\\mathrm{cm}$'],['Sheet width','$20\\,\\mathrm{cm}$'],['Permitted cut $x$','$2\\,\\mathrm{cm}\\leq x\\leq4\\,\\mathrm{cm}$']],
      assumptions: ['Cuts are equal squares; folds are perpendicular and lossless.','Ignore sheet thickness, seams, and variation in cut size.'],
      anchors: [
        'Let $x$ be a length in centimetres. Then $V(x)=x(30\\,\\mathrm{cm}-2x)(20\\,\\mathrm{cm}-2x)$ and $V\u0027(x)=600\\,\\mathrm{cm}^2-(200\\,\\mathrm{cm})x+12x^2$.',
        'The feasible stationary cut is $x_*=[(25-5\\sqrt7)/3]\\,\\mathrm{cm}\\approx3.923747815\\,\\mathrm{cm}$; the other root is about $12.742918852\\,\\mathrm{cm}$, outside the permitted interval.',
        '$V(2\\,\\mathrm{cm})=832\\,\\mathrm{cm}^3$; $V(4\\,\\mathrm{cm})=1056\\,\\mathrm{cm}^3$; $V(x_*)\\approx1056.305895\\,\\mathrm{cm}^3$. The advantage over the $4\\,\\mathrm{cm}$ endpoint is only about $0.305895461\\,\\mathrm{cm}^3$.',
        'At the unrounded stationary cut, $[V(x_*+h)-V(x_*-h)]/(2h)=4h^2$ for length steps $h$, because $V$ is cubic. It is $0.01\\,\\mathrm{cm}^2$ at $h=0.05\\,\\mathrm{cm}$ and $0.0004\\,\\mathrm{cm}^2$ at $h=0.01\\,\\mathrm{cm}$. Both offset pairs stay feasible.'
      ],
      anchorNote: 'These are exact-model comparison values, not measurements of a fabricated tray.'
    },
    stages: [
      {id:'model',title:'1. Model the geometry',prompt:'Draw the flat net and the folded tray. Label all three interior dimensions as functions of $x$, a length measured in centimetres. Explain the manufacturing interval and derive a capacity model with units.',evidence:'A labeled diagram, assumptions, feasible set, and derivation of $V(x)$.',support:'The height is $x$. Both sheet dimensions lose two corner widths. A critical point outside $2\\,\\mathrm{cm}\\leq x\\leq4\\,\\mathrm{cm}$ cannot be selected.'},
      {id:'analyze',title:'2. Certify the choice',prompt:'Differentiate the capacity, solve the stationary-point equation, and compare all feasible stationary points with both interval endpoints. Explain why your comparison proves a global maximum.',evidence:'Derivative, candidate table, and closed-interval maximum argument.',support:'Use $V\u0027(x)=600\\,\\mathrm{cm}^2-(200\\,\\mathrm{cm})x+12x^2$. Include both endpoints.'},
      {id:'validate',title:'3. Check the calculation',prompt:'Reproduce endpoint capacities and the central-difference derivative at the unrounded stationary cut using $h=0.05\\,\\mathrm{cm}$ and $h=0.01\\,\\mathrm{cm}$. Show formulas or short code, inputs, and outputs. Explain what this numerical check can and cannot establish.',evidence:'Reproducible computation, values with units, and a distinction between a numerical check and proof.',support:'For a cubic, symmetric differencing leaves a term proportional to $h^2$. Check that both offsets around the unrounded cut stay in the permitted interval $2\\,\\mathrm{cm}\\leq x\\leq4\\,\\mathrm{cm}$.'},
      {id:'interpret',title:'4. Recommend a manufactured cut',prompt:'Choose and state a cutting increment, round the optimal cut to a feasible cut at that increment, recompute its predicted capacity, and write a one-page decision memo. Discuss tool tolerance and material thickness without claiming a certified manufacturing advantage unless a tolerance is supplied.',evidence:'Rounded recommendation, recomputed capacity, and explicit model limitations.',support:'The mathematical optimum exceeds the $4\\,\\mathrm{cm}$ endpoint by only about $0.305895461\\,\\mathrm{cm}^3$. Recalculate capacity after rounding; a tolerance claim needs measured tool variation.'}
    ],
    deliverables: ['Labeled net and assumptions','Candidate and finite-difference tables','Reproducible calculation','One-page decision memo'],
    assessment: [
      {id:'setup',label:'Setup and units',criterion:'I justified all three dimensions, the interval $2\\,\\mathrm{cm}\\leq x\\leq4\\,\\mathrm{cm}$, and capacity units.'},
      {id:'derivation',label:'Derivation',criterion:'I derived $V\u0027(x)$ and compared feasible critical points with both endpoints to certify the global choice.'},
      {id:'validation',label:'Computation and validation',criterion:'I showed reproducible capacities and two finite differences and stated that they check arithmetic, not global optimality.'},
      {id:'interpretation',label:'Interpretation',criterion:'My rounded recommendation has a recomputed capacity and identifies tolerance and thickness effects.'},
      {id:'communication',label:'Communication',criterion:'My diagram, table, memo, assumptions, and units let another reader repeat the decision.'}
    ],
    limitations: ['The idealized volume ignores wall thickness and seam losses.','Tool tolerance can dominate the small advantage over a $4\\,\\mathrm{cm}$ cut; no tolerance is supplied.','Finite differences check the derivative calculation at sampled cuts; they do not prove a global maximum.']
  },
  {
    id:'sampled-shuttle', title:'Shuttle velocity trace',
    summary:'Estimate a velocity integral from samples, determine when it represents distance, and separate quadrature error from missing motion data.',
    concepts:['accumulation','distance and displacement','trapezoidal rule','Simpson rule','sampling error'],
    chapterIds:['03','10','11','14','28'],
    prerequisites:[
      {label:'Numerical error',href:'#chapter/03/lesson/3'},
      {label:'Distance and displacement',href:'#chapter/10/lesson/5'},
      {label:'Exact accumulation',href:'#chapter/11/lesson/3'},
      {label:'Quadrature',href:'#chapter/14/lesson/1'},
      {label:'Quadrature error',href:'#chapter/14/lesson/2'},
      {label:'Reproducible reporting',href:'#chapter/28/lesson/5'}
    ],
    scenario:'A shuttle calibration run records velocity at fixed times. Estimate the integral from samples. A generating law is disclosed only for this synthetic calibration case so that you can benchmark the methods and interpret its distance.',
    data:{
      inputs:[['Coarse times $t$ ($\\mathrm{s}$)','$(0,2,4,6,8)\\,\\mathrm{s}$'],['Coarse velocities $v$ ($\\mathrm{m/s}$)','$(4,7,8,7,4)\\,\\mathrm{m/s}$'],['Additional times $t$ ($\\mathrm{s}$)','$(1,3,5,7)\\,\\mathrm{s}$'],['Additional velocities $v$ ($\\mathrm{m/s}$)','$(5.75,7.75,7.75,5.75)\\,\\mathrm{m/s}$'],['Synthetic generating law','With $\\tau=t/(1\\,\\mathrm{s})$, $v(t)=(4+2\\tau-\\tau^2/4)\\,\\mathrm{m/s}$ for $0\\,\\mathrm{s}\\leq t\\leq8\\,\\mathrm{s}$']],
      assumptions:['The supplied times and velocities are exact for the synthetic benchmark.','The disclosed law applies only to this calibration case.'],
      anchors:['For the $2\\,\\mathrm{s}$ grid, the composite trapezoidal integral estimate is $52\\,\\mathrm{m}$ and the composite Simpson estimate is $160/3\\,\\mathrm{m}\\approx53.333333\\,\\mathrm{m}$. Relative to the disclosed law, their signed errors are $-4/3\\,\\mathrm{m}$ and $0\\,\\mathrm{m}$.','For the $1\\,\\mathrm{s}$ grid, the trapezoidal integral estimate is $53\\,\\mathrm{m}$ and the Simpson estimate is $160/3\\,\\mathrm{m}$; their signed errors are $-1/3\\,\\mathrm{m}$ and $0\\,\\mathrm{m}$.','The exact integral of the disclosed quadratic over $0\\,\\mathrm{s}\\leq t\\leq8\\,\\mathrm{s}$ is $160/3\\,\\mathrm{m}$. Its concave-down velocity has minimum $4\\,\\mathrm{m/s}$ at the endpoints, so displacement and distance both equal that integral for this benchmark.'],
      anchorNote:'Simpson is exact for this quadratic. Finite samples alone do not identify the path between samples.'
    },
    stages:[
      {id:'define',title:'1. Read the sensor record',prompt:'Make a time–velocity table, specify units and interval, and distinguish signed displacement from total distance. Explain which sign claim follows from the disclosed generating law and why the samples alone identify neither integral.',evidence:'Data table, assumptions, and a conditional distance and displacement statement.',support:'Positive sampled values do not rule out reverse motion between samples. Check that the disclosed quadratic is positive on the entire interval.'},
      {id:'estimate',title:'2. Estimate from coarse samples',prompt:'Use the $2\\,\\mathrm{s}$ grid to calculate composite trapezoidal and Simpson estimates of the velocity integral. Show the weighted sums and a reproducible spreadsheet formula or short program.',evidence:'Both weighted sums, units, formula or code, and conditional integral estimates.',support:'There are four coarse subintervals, so composite Simpson applies. Write its $1,4,2,4,1$ weights explicitly.'},
      {id:'validate',title:'3. Refine and benchmark',prompt:'Insert the additional $1\\,\\mathrm{s}$ samples, repeat both rules, then integrate the disclosed quadratic exactly. Report a two-grid table and signed errors against that calibration benchmark at the common endpoint.',evidence:'Refinement table with $h$, method, estimate, exact benchmark, and signed error.',support:'For the $1\\,\\mathrm{s}$ grid there are eight subintervals. Simpson exactness here is a polynomial property of the disclosed law.'},
      {id:'interpret',title:'4. Report the evidence',prompt:'If only coarse samples existed, state a conditional estimate of the velocity integral and the interpolation or smoothness assumption it needs. Explain when it estimates distance. Discuss unsampled motion, sensor error, and timestamp error separately; do not claim a finite error bound from the samples alone.',evidence:'Technical note with conditional estimate, stated assumption, uncertainty sources, and law-dependent claims.',support:'The disclosed law makes the benchmark a distance calculation because its velocity is positive. Coarse samples alone do not identify actual distance or displacement.'}
    ],
    deliverables:['Data and assumption table','Reproducible coarse and fine quadrature','Exact benchmark and error table','Technical note about uncertainty'],
    assessment:[
      {id:'setup',label:'Setup and units',criterion:'I distinguished velocity samples, displacement, and distance with correct time and length units.'},
      {id:'derivation',label:'Derivation',criterion:'I showed correct composite trapezoidal and Simpson weights and integrated the quadratic benchmark.'},
      {id:'validation',label:'Computation and validation',criterion:'I reproduced both grid estimates, compared signed errors at $8\\,\\mathrm{s}$ against the disclosed law, and explained why Simpson matches the quadratic.'},
      {id:'interpretation',label:'Interpretation',criterion:'I stated an interpolation or smoothness assumption for a coarse-only estimate and separated benchmark quadrature error from unsampled motion, sensor error, and timing error without claiming an actual distance or finite bound from samples alone.'},
      {id:'communication',label:'Communication',criterion:'My data table, formulas or code, results, units, and law-dependent claims can be audited.'}
    ],
    limitations:['Unknown between-sample motion can alter actual distance arbitrarily without further assumptions.','The benchmark ignores sensor and clock error.','Polynomial exactness does not transfer to arbitrary velocity traces.']
  },
  {
    id:'tracer-decay', title:'Tracer removal from a mixed tank',
    summary:'Compare exact decay with Euler and Heun updates while checking conservation, stability, and model validity.',
    concepts:['differential equations','equilibria','Euler method','Heun method','step refinement','conservation'],
    chapterIds:['27','28'],
    prerequisites:[
      {label:'Separation of variables',href:'#chapter/27/lesson/2'},
      {label:'Equilibria',href:'#chapter/27/lesson/4'},
      {label:'Euler and Heun methods',href:'#chapter/28/lesson/1'},
      {label:'Step refinement',href:'#chapter/28/lesson/2'},
      {label:'Stability',href:'#chapter/28/lesson/3'},
      {label:'Reproducible reporting',href:'#chapter/28/lesson/5'}
    ],
    scenario:'A well-mixed tank initially holds $100\\,\\mathrm{mg}$ of tracer. Its instantaneous fractional removal rate is the constant $a=0.5\\,\\mathrm{h}^{-1}$. Predict the tracer remaining and removed after $4\\,\\mathrm{h}$, and assess two time-stepping methods.',
    data:{
      inputs:[['Initial tracer $C(0)$','$100\\,\\mathrm{mg}$'],['Initially removed $A(0)$','$0\\,\\mathrm{mg}$'],['Removal rate $a$','$0.5\\,\\mathrm{h}^{-1}$'],['Common endpoint $T$','$4\\,\\mathrm{h}$'],['Refinement step counts','$N=4,8,16$']],
      assumptions:['No tracer enters the tank.','Mixing is instantaneous and the instantaneous fractional removal rate $a$ remains constant.'],
      anchors:['Model: $C\u0027=-aC$, $A\u0027=aC$, so $C+A=100\\,\\mathrm{mg}$. Exact solution: $C(t)=(100\\,\\mathrm{mg})e^{-at}$ and $A(t)=(100\\,\\mathrm{mg})(1-e^{-at})$, where $at$ is dimensionless. At $t=4\\,\\mathrm{h}$, $A(4\\,\\mathrm{h})\\approx86.466471676\\,\\mathrm{mg}$.','For $N=4,8,16$ and $h=(4/N)\\,\\mathrm{h}$, Euler remaining amounts are $(6.25,10.011291504,11.806708702)\\,\\mathrm{mg}$; their absolute errors against $C(4\\,\\mathrm{h})\\approx13.533528324\\,\\mathrm{mg}$ are $(7.283528324,3.522236820,1.726819622)\\,\\mathrm{mg}$.','For $N=4,8,16$, Heun remaining amounts are $(15.258789063,13.877787808,13.611173859)\\,\\mathrm{mg}$; absolute errors are $(1.725260739,0.344259484,0.077645535)\\,\\mathrm{mg}$. Euler uses $N$ vector-rate evaluations and Heun uses $2N$. Simultaneous component updates preserve $C+A$ up to rounding.','With $y_n=(C_n,A_n)$ and $f(y)=(-aC,aC)$, Euler is $y_{n+1}=y_n+hf(y_n)$; Heun predicts $\\widetilde y=y_n+hf(y_n)$ and sets $y_{n+1}=y_n+\\tfrac h2[f(y_n)+f(\\widetilde y)]$. For $z=ah$, the remaining-tracer multipliers are $1-z$ for Euler and $1-z+z^2/2$ for Heun. Euler stays nonnegative for $0<z\\leq1$ and decays in magnitude for $0<z<2$; Heun stays positive but decays only for $0<z<2$. A single $4\\,\\mathrm{h}$ Euler step has $z=2$, $C_1=-100\\,\\mathrm{mg}$ and $A_1=200\\,\\mathrm{mg}$: it conserves $100\\,\\mathrm{mg}$ but is neither physical nor asymptotically stable.'],
      anchorNote:'These endpoint values test the stated mathematical model and update rules. They do not validate the mixing or rate assumptions.'
    },
    stages:[
      {id:'model',title:'1. Define the state and invariant',prompt:'Derive differential equations for tracer remaining $C$ and amount removed $A$. Give initial conditions, parameter units, assumptions, and a proof that $C+A=100\\,\\mathrm{mg}$ stays constant.',evidence:'State equations, parameter table, unit check, and conservation derivation.',support:'Removal decreases $C$ and increases $A$ by the same instantaneous rate. Differentiate $C+A$.'},
      {id:'solve',title:'2. Solve and implement',prompt:'Solve the state equations exactly, with a dimensionless exponential argument. Implement simultaneous Euler and explicit trapezoidal Heun updates from the same old state for each step. Give both vector update formulas and runnable code or pseudocode.',evidence:'Closed-form $C(t)$ and $A(t)$ with units, both vector update rules, and reproducible implementation.',support:'For Heun, evaluate both component rates at the old state, predict both components, then average the old and predicted rates.'},
      {id:'validate',title:'3. Refine at one endpoint',prompt:'For $N=4,8,16$ steps, compare both methods at $T=4\\,\\mathrm{h}$. Report $h$, $C_N$, $A_N$, absolute endpoint error, vector-rate evaluations, and maximum $|C_n+A_n-100\\,\\mathrm{mg}|$ over each trajectory. Also run Euler with one $4\\,\\mathrm{h}$ step and discuss its sign.',evidence:'Reproducible table, exact remaining and removed benchmarks, invariant defects, and positivity failure case.',support:'Use $h=(4/N)\\,\\mathrm{h}$. Count one vector-rate evaluation per Euler step and two per Heun step; compare every run at $t=4\\,\\mathrm{h}$.'},
      {id:'interpret',title:'4. Recommend a numerical report',prompt:'Compare accuracy, work, asymptotic stability, positivity, and conservation as distinct properties. Use $z=ah$ to state the step-size conditions; recommend a method and step size for this case. Explain why convergence cannot prove that a real tank is well mixed or has constant instantaneous fractional removal rate.',evidence:'Reproducible report with source, output table, step-size recommendation, and model limits.',support:'Conservation can hold even when $C$ is inaccurate or negative. At $z=2$, Euler does not decay in magnitude; Heun also does not decay.'},
    ],
    deliverables:['State and assumption table','Exact solution and update rules','Common-endpoint refinement and invariant table','Reproducible recommendation report'],
    assessment:[
      {id:'setup',label:'Setup and units',criterion:'I stated both state variables, initial conditions, units, rate assumption, and conservation law.'},
      {id:'derivation',label:'Derivation',criterion:'I derived the exact solution and simultaneous Euler and Heun updates from the differential equations.'},
      {id:'validation',label:'Computation and validation',criterion:'I compared all three step counts at $4\\,\\mathrm{h}$ with exact remaining and removed amounts, maximum invariant defects, and vector-rate counts.'},
      {id:'interpretation',label:'Interpretation',criterion:'I distinguished accuracy, stability, positivity, conservation, and real-world model validity.'},
      {id:'communication',label:'Communication',criterion:'My source, inputs, output table, units, recommendation, and limits make the run reproducible.'}
    ],
    limitations:['Instant mixing and a constant instantaneous fractional removal rate may fail in a real tank.','Numerical refinement assesses the discretization of this model, not the model assumptions.','Conservation alone does not certify positive or accurate component values.']
  },
  {
    id:'cooling-certificate', title:'Cooling-bath Taylor certificate',
    summary:'Choose a Taylor degree that certifies a cooling-law approximation across a full time interval.',
    concepts:['cooling model','Taylor polynomial','Lagrange remainder','uniform error','model uncertainty'],
    chapterIds:['03','17','27','28'],
    prerequisites:[
      {label:'Numerical and approximation error',href:'#chapter/03/lesson/3'},
      {label:'Taylor polynomials',href:'#chapter/17/lesson/3'},
      {label:'Remainder certificate',href:'#chapter/17/lesson/4'},
      {label:'Separation of variables',href:'#chapter/27/lesson/2'},
      {label:'Reproducible reporting',href:'#chapter/28/lesson/5'}
    ],
    scenario:'A calibration bath cools toward a controlled ambient temperature. A technician needs a polynomial approximation to the disclosed cooling law for the first $2\\,\\mathrm{min}$, with a mathematical temperature error no greater than $0.02\\,^{\\circ}\\mathrm C$ anywhere in that interval. Choose and justify a degree before recommending its use.',
    data:{
      inputs:[['Ambient temperature','$20\\,^{\\circ}\\mathrm C$'],['Initial bath temperature','$100\\,^{\\circ}\\mathrm C$'],['Cooling time constant','$4\\,\\mathrm{min}$'],['Use interval','$0\\leq t\\leq2\\,\\mathrm{min}$'],['Maximum certified approximation error','$0.02\\,^{\\circ}\\mathrm C$']],
      assumptions:['Ambient temperature and cooling time constant remain fixed over the interval.','The ideal first-order cooling law describes the synthetic calibration case; sensor uncertainty is not supplied.'],
      anchors:[
        'With $T\u0027=-(T-20\\,^{\\circ}\\mathrm C)/(4\\,\\mathrm{min})$, separation gives $T(t)=20\\,^{\\circ}\\mathrm C+(80\\,^{\\circ}\\mathrm C)e^{-u}$, where $u=t/(4\\,\\mathrm{min})$ is dimensionless and $0\\leq u\\leq1/2$. The initial value is $T(0)=100\\,^{\\circ}\\mathrm C$.',
        'The degree-$N$ model is $T_N(t)=20\\,^{\\circ}\\mathrm C+(80\\,^{\\circ}\\mathrm C)\\sum_{k=0}^{N}(-u)^k/k!$. Since $|T^{(N+1)}(s)|=(80\\,^{\\circ}\\mathrm C)e^{-s/(4\\,\\mathrm{min})}/(4\\,\\mathrm{min})^{N+1}\\leq(80\\,^{\\circ}\\mathrm C)/(4\\,\\mathrm{min})^{N+1}$ for $0\\leq s\\leq2\\,\\mathrm{min}$, Lagrange’s theorem gives $|T(t)-T_N(t)|\\leq(80\\,^{\\circ}\\mathrm C)(1/2)^{N+1}/(N+1)!$ throughout $0\\leq t\\leq2\\,\\mathrm{min}$.',
        'The uniform bounds are $(1/48)\\,^{\\circ}\\mathrm C\\approx0.0208333333\\,^{\\circ}\\mathrm C$ for $N=4$ and $(1/576)\\,^{\\circ}\\mathrm C\\approx0.0017361111\\,^{\\circ}\\mathrm C$ for $N=5$. Each next bound is $1/[2(N+2)]$ times the preceding one, so no smaller degree is certified by this bound. Degree $5$ certifies the $0.02\\,^{\\circ}\\mathrm C$ requirement; the degree-$4$ bound missing it does not prove degree $4$ actually fails.',
        'At $t=0\\,\\mathrm{min}$, the law and both polynomials give exactly $100\\,^{\\circ}\\mathrm C$. At $t=1\\,\\mathrm{min}$, the law gives $82.3040626457\\,^{\\circ}\\mathrm C$, $T_4=82.3046875\\,^{\\circ}\\mathrm C$, and $T_5=82.3040364583\\,^{\\circ}\\mathrm C$; absolute differences are $0.0006248543\\,^{\\circ}\\mathrm C$ and $0.0000261874\\,^{\\circ}\\mathrm C$. At $t=2\\,\\mathrm{min}$, the law gives $68.5224527770\\,^{\\circ}\\mathrm C$, $T_4=68.5416666667\\,^{\\circ}\\mathrm C$, and $T_5=68.5208333333\\,^{\\circ}\\mathrm C$; absolute differences are $0.0192138897\\,^{\\circ}\\mathrm C$ and $0.0016194437\\,^{\\circ}\\mathrm C$.'
      ],
      anchorNote:'These comparisons and bounds concern truncation of the ideal mathematical law; they do not measure real bath, sensor, or floating-point error.'
    },
    stages:[
      {id:'model',title:'1. Derive the cooling model',prompt:'Separate the cooling differential equation, apply the initial condition, define dimensionless time $u$, and state its full domain. Show temperature and time units in a parameter table and state the physical assumptions.',evidence:'Parameter table, separated solution, dimensionless variable $u$ and interval $0\\leq t\\leq2\\,\\mathrm{min}$, and explicit assumptions.',support:'Write the excess temperature $T-20\\,^{\\circ}\\mathrm C$ first. Its initial value is $80\\,^{\\circ}\\mathrm C$; dividing time by $4\\,\\mathrm{min}$ makes the exponential argument unitless.'},
      {id:'certify',title:'2. Certify a Taylor degree',prompt:'Build the degree-$N$ Maclaurin polynomial for the bath temperature. Bound its Lagrange remainder uniformly for $0\\leq t\\leq2\\,\\mathrm{min}$, compare degrees $4$ and $5$ with the $0.02\\,^{\\circ}\\mathrm C$ target, and explain precisely what a failed bound means.',evidence:'Polynomial $T_N$, derivative maximum with units, uniform inequality, and degree decision.',support:'For a derivative of order $N+1$ the exponential factor never exceeds one on this nonnegative interval. Use the largest $u$, namely $1/2$, to cover every time.'},
      {id:'validate',title:'3. Reproduce comparison values',prompt:'Evaluate the disclosed exponential law and degrees $4$ and $5$ at $t=0,1,2\\,\\mathrm{min}$. Show a formula, spreadsheet, or short code; tabulate actual model differences and certified bounds with units. Check the initial-time boundary exactly.',evidence:'Reproducible evaluation method and three-time comparison table including $t=0$ and both bounds.',support:'Compute each polynomial from $u=t/(4\\,\\mathrm{min})$. The observed error at a sample time is distinct from the guaranteed worst-case bound.'},
      {id:'interpret',title:'4. Recommend and qualify',prompt:'Recommend the least degree certified by your comparison for the stated $0.02\\,^{\\circ}\\mathrm C$ tolerance. Explain why the certificate cannot establish actual bath or sensor accuracy, and identify any floating-point effect your calculation omits.',evidence:'Short recommendation with degree, domain $0\\leq t\\leq2\\,\\mathrm{min}$, tolerance $0.02\\,^{\\circ}\\mathrm C$, and separate approximation, model, measurement, and evaluation limitations.',support:'A mathematical truncation bound assumes the exponential cooling model and its parameters are exact. A small bound does not calibrate the sensor.'}
    ],
    deliverables:['Dimensioned cooling model and assumptions','Polynomial and uniform remainder derivation','Reproducible three-time comparison table','Qualified degree recommendation'],
    assessment:[
      {id:'model',label:'Dimensioned model',criterion:'I derived the exponential law from the differential equation, kept $u=t/(4\\,\\mathrm{min})$ dimensionless, and stated the full $0\\leq t\\leq2\\,\\mathrm{min}$ interval and assumptions.'},
      {id:'polynomial',label:'Taylor construction',criterion:'I constructed the degree-$N$ temperature polynomial with the ambient offset, initial excess, correct alternating coefficients, and temperature units.'},
      {id:'certificate',label:'Uniform certificate',criterion:'I justified the derivative maximum over $0\\leq t\\leq2\\,\\mathrm{min}$ and compared the degree-$4$ and degree-$5$ bounds with the tolerance without treating a failed bound as failure of the approximation.'},
      {id:'reproduction',label:'Reproducible checks',criterion:'I supplied a repeatable formula or code and a $t=0,1,2\\,\\mathrm{min}$ table with model differences, certified bounds, units, and the exact initial-time check.'},
      {id:'limitations',label:'Interpretation',criterion:'My recommendation distinguishes mathematical truncation from cooling-model, sensor, and floating-point errors and limits the claim to the stated interval.'}
    ],
    limitations:['Constant ambient temperature and time constant may not describe a real bath.','The ideal exponential law and sensor readings may differ even when its polynomial is certified.','The stated remainder bound does not include floating-point evaluation error.']
  },
  {
    id:'channel-circulation', title:'Rectangular channel circulation survey',
    summary:'Use Green’s theorem and four directed edges to cross-check circulation and orientation.',
    concepts:['vector line integral','Green’s theorem','orientation','curl','theorem hypotheses'],
    chapterIds:['25','26','28'],
    prerequisites:[
      {label:'Vector line integrals',href:'#chapter/25/lesson/2'},
      {label:'Green’s theorem and orientation',href:'#chapter/26/lesson/1'},
      {label:'Theorem choice and hypotheses',href:'#chapter/26/lesson/5'},
      {label:'Reproducible reporting',href:'#chapter/28/lesson/5'}
    ],
    scenario:'A planar calibration field is prescribed over a rectangular channel survey. Determine circulation around its boundary, verify the orientation and theorem conditions, then repeat the answer by direct edge integration before interpreting what a field measurement would require.',
    data:{
      inputs:[['Survey rectangle','$0\\leq x\\leq3\\,\\mathrm m$; $0\\leq y\\leq2\\,\\mathrm m$'],['Velocity field','$F=(P,Q)=(-ay,bx^2)$'],['Coefficient $a$','$0.2\\,\\mathrm s^{-1}$'],['Coefficient $b$','$0.1\\,(\\mathrm m\\cdot\\mathrm s)^{-1}$'],['Boundary traversal','Bottom, right, top, left in that order; region on the left']],
      assumptions:['The prescribed planar velocity field is steady and smooth on an open neighborhood of the rectangle.','The four directed edges form the complete simple survey boundary; values are a synthetic calibration model, not flow measurements.'],
      anchors:[
        'Counterclockwise Green circulation uses $Q_x-P_y=2bx+a=[0.2(x/(1\\,\\mathrm m))+0.2]\\,\\mathrm s^{-1}$. With physical length coordinates, $\\int_0^{2\\,\\mathrm m}\\int_0^{3\\,\\mathrm m}[0.2(x/(1\\,\\mathrm m))+0.2]\\,\\mathrm s^{-1}\\,dx\\,dy=3.0\\,\\mathrm m^2/\\mathrm s$.',
        'Let $s$ be a physical length. Parameterize bottom as $(s,0)$, $0\\leq s\\leq3\\,\\mathrm m$; right as $(3\\,\\mathrm m,s)$, $0\\leq s\\leq2\\,\\mathrm m$; top as $(3\\,\\mathrm m-s,2\\,\\mathrm m)$, $0\\leq s\\leq3\\,\\mathrm m$; and left as $(0,2\\,\\mathrm m-s)$, $0\\leq s\\leq2\\,\\mathrm m$. The route is complete and keeps the region on the left.',
        'Bottom contributes $0\\,\\mathrm m^2/\\mathrm s$; right contributes $\\int_0^{2\\,\\mathrm m}b(3\\,\\mathrm m)^2\\,ds=1.8\\,\\mathrm m^2/\\mathrm s$; top contributes $\\int_0^{3\\,\\mathrm m}(-a\\cdot2\\,\\mathrm m)(-ds)=1.2\\,\\mathrm m^2/\\mathrm s$; left contributes $0\\,\\mathrm m^2/\\mathrm s$. Direct sum is $3.0\\,\\mathrm m^2/\\mathrm s$ and the reverse route gives $-3.0\\,\\mathrm m^2/\\mathrm s$.',
        'For the anchored rectangle $0\\leq x\\leq w$ and $0\\leq y\\leq h$, where $w$ and $h$ are lengths, the same field gives $\\Gamma(w,h)=h(aw+bw^2)$, with units $\\mathrm m^2/\\mathrm s$. With fixed $h$ it tends to zero as $w\\to0^+$; the collapsed rectangle is a limiting check, not a region to which Green’s theorem is applied.'
      ],
      anchorNote:'The two integrals verify the prescribed smooth field and chosen route. They do not validate velocity observations in an actual channel.'
    },
    stages:[
      {id:'orient',title:'1. Map the boundary and hypotheses',prompt:'Draw and parameterize all four directed edges from bottom through right, top, and left. Before applying Green’s theorem, check the bounded region, complete simple piecewise-smooth boundary, counterclockwise orientation, and $C^1$ field on an open neighborhood.',evidence:'Labeled route, four edge parametrizations, orientation explanation, and explicit theorem-hypothesis checklist.',support:'The region must remain on your left as you walk the route. The polynomial field is continuously differentiable around and throughout this rectangle.'},
      {id:'calculate',title:'2. Integrate over the interior',prompt:'Calculate $Q_x-P_y$ with coefficient units and integrate it over the entire $3\\,\\mathrm m$ by $2\\,\\mathrm m$ rectangle. Show both physical length bounds and explain why the result has circulation units $\\mathrm m^2/\\mathrm s$.',evidence:'Both partial derivatives, area integral, evaluated result $3.0\\,\\mathrm m^2/\\mathrm s$, and dimensional check.',support:'Differentiate $Q=bx^2$ in $x$ and $P=-ay$ in $y$; Green’s positively oriented formula integrates $Q_x-P_y$.'},
      {id:'verify',title:'3. Verify every edge',prompt:'Compute the directed line integral on each of the four edges independently, tabulate the contributions, and compare their sum with Green’s value. Reverse the traversal for a sign check and evaluate the width-shrinking limit as a separate boundary check.',evidence:'Four-edge table with units $\\mathrm m^2/\\mathrm s$, matching sum, reversed sign, and width-limit calculation.',support:'On horizontal edges integrate $P\\,dx$; on vertical edges integrate $Q\\,dy$. A single midpoint on each edge happens to integrate the nonzero constant edge components exactly here.'},
      {id:'interpret',title:'4. Explain the survey result',prompt:'Write a field-survey note explaining the sign of circulation, what the integral measures, and why an incomplete route or an unmodeled interior singularity would invalidate the Green calculation. Separate the smooth calibration model from measured flow.',evidence:'Short interpretation stating orientation, units, regularity, boundary completeness, and model limits.',support:'Reversing direction changes the sign but not the geometry. Green’s theorem needs regularity across the enclosed region, not just along the sampled edges.'}
    ],
    deliverables:['Boundary sketch and hypothesis checklist','Green interior calculation','Four-edge and reversal table','Survey interpretation note'],
    assessment:[
      {id:'boundary',label:'Oriented boundary',criterion:'I parameterized every edge in a complete counterclockwise route and justified the region-on-the-left orientation.'},
      {id:'hypotheses',label:'Theorem conditions',criterion:'I checked the simple piecewise-smooth boundary, bounded enclosed region, and $C^1$ field on an open neighborhood before applying Green’s theorem.'},
      {id:'interior',label:'Interior calculation',criterion:'I derived $Q_x-P_y$ from the dimensioned field, used the full rectangle, and obtained circulation in $\\mathrm m^2/\\mathrm s$.'},
      {id:'crosscheck',label:'Independent checks',criterion:'I reproduced each directed edge contribution and the total, then checked the reversed sign and zero-width limit without applying Green to a degenerate region.'},
      {id:'interpretation',label:'Physical interpretation',criterion:'I explained the circulation sign and distinguished a smooth prescribed field from measured flow, including the effects of a missing edge or interior singularity.'}
    ],
    limitations:['The prescribed field may differ from measured channel velocities.','The model is planar and steady, so three-dimensional or changing flow is outside its scope.','Green’s theorem requires suitable regularity throughout the enclosed region and a complete oriented boundary.']
  },
  {
    id:'elliptical-lamina', title:'Mass of a nonuniform elliptical plate',
    summary:'Transform an elliptical density integral, cross-check its mass, and examine a smaller similar plate.',
    concepts:['areal density','double integral','Jacobian','domain transformation','mass scaling'],
    chapterIds:['13','23','24','28'],
    prerequisites:[
      {label:'Mass as weighted accumulation',href:'#chapter/13/lesson/5'},
      {label:'Planar mass',href:'#chapter/23/lesson/4'},
      {label:'Jacobian and transformed domain',href:'#chapter/24/lesson/1'},
      {label:'Polar coordinates',href:'#chapter/24/lesson/2'},
      {label:'Reproducible reporting',href:'#chapter/28/lesson/5'}
    ],
    scenario:'A flat elliptical plate is assigned a radially increasing areal density. Compute its ideal mass using a change of variables, verify the result by a separate Cartesian calculation and numerical midpoint sums, then assess a half-size similar interior plate.',
    data:{
      inputs:[['Plate domain','$(x/(3\\,\\mathrm m))^2+(y/(2\\,\\mathrm m))^2\\leq1$'],['Horizontal semiaxis','$3\\,\\mathrm m$'],['Vertical semiaxis','$2\\,\\mathrm m$'],['Areal density','$\\sigma(x,y)=[2+(x/(3\\,\\mathrm m))^2+(y/(2\\,\\mathrm m))^2]\\,\\mathrm{kg}/\\mathrm m^2$'],['Radial midpoint grids','$n=4,8$']],
      assumptions:['The plate is flat and the prescribed effective areal density applies exactly across its ideal elliptical domain.','No manufacturing variation, cut loss, or thickness change is included.'],
      anchors:[
        'Set $x=(3\\,\\mathrm m)r\\cos\\theta$ and $y=(2\\,\\mathrm m)r\\sin\\theta$. The ellipse maps to $0\\leq r\\leq1$, $0\\leq\\theta<2\\pi$, with $|J|=(6\\,\\mathrm m^2)r$. The half-open angular interval avoids seam duplication; only $r=0$ has multiple angle representations, a measure-zero exception to one-to-one coverage.',
        'The transformed density is $\\sigma(r,\\theta)=(2+r^2)\\,\\mathrm{kg}/\\mathrm m^2$. Thus $M=(6\\,\\mathrm{kg})\\int_0^{2\\pi}\\int_0^1(2+r^2)r\\,dr\\,d\\theta=15\\pi\\,\\mathrm{kg}\\approx47.1238898038\\,\\mathrm{kg}$.',
        'Independently set $s=x/(3\\,\\mathrm m)$ in Cartesian slices: $M=(3\\,\\mathrm{kg})\\int_{-1}^{1}[4\\sqrt{1-s^2}(2+s^2)+(4/3)(1-s^2)^{3/2}]\\,ds=15\\pi\\,\\mathrm{kg}$.',
        'With exact angular integration, radial midpoint sums use $r_i=(i+1/2)/n$ and $M_n=(12\\pi\\,\\mathrm{kg}/n)\\sum_{i=0}^{n-1}(2+r_i^2)r_i$. They give $M_4=46.8293654926\\,\\mathrm{kg}$ and $M_8=47.0502587260\\,\\mathrm{kg}$; their absolute errors are $(3\\pi/32)\\,\\mathrm{kg}$ and $(3\\pi/128)\\,\\mathrm{kg}$, respectively.',
        'For a similar ellipse with radius fraction $q$, $M(q)=(12\\pi q^2+3\\pi q^4)\\,\\mathrm{kg}$. Hence $M(1/2)=(51\\pi/16)\\,\\mathrm{kg}\\approx10.0138265833\\,\\mathrm{kg}$, $M(0)=0\\,\\mathrm{kg}$, and $M(1)=15\\pi\\,\\mathrm{kg}$.'
      ],
      anchorNote:'The exact, Cartesian, and midpoint results compare calculations for the prescribed ideal density; they do not estimate manufacturing uncertainty.'
    },
    stages:[
      {id:'map',title:'1. Map and cover the ellipse',prompt:'Draw the ellipse and transform with $x=(3\\,\\mathrm m)r\\cos\\theta$ and $y=(2\\,\\mathrm m)r\\sin\\theta$. Derive the $r$ and $\\theta$ bounds, compute the Jacobian determinant with units, and explain why the half-open angular interval avoids seam duplication while the origin has multiple angle representations.',evidence:'Sketch, transformed inequality and bounds $0\\leq r\\leq1$ and $0\\leq\\theta<2\\pi$, determinant, units, and explicit coverage check.',support:'After dividing coordinates by their semiaxes, the domain is the unit disk. The Jacobian combines a $3\\,\\mathrm m$ by $2\\,\\mathrm m$ scaling with the polar factor $r$.'},
      {id:'integrate',title:'2. Derive the ideal mass',prompt:'Transform the areal density and area element, set up the full mass integral, and evaluate it exactly. Explain why multiplying $\\mathrm{kg}/\\mathrm m^2$ by the Jacobian area element leaves kilograms.',evidence:'Transformed density, complete double integral, exact $15\\pi\\,\\mathrm{kg}$ result, and dimensional explanation.',support:'The density becomes $(2+r^2)\\,\\mathrm{kg}/\\mathrm m^2$. Integrate $(2+r^2)r$ in $r$ before multiplying by the angular range and $6\\,\\mathrm m^2$.'},
      {id:'validate',title:'3. Cross-check two ways',prompt:'Check the exact result independently by Cartesian vertical slices or known ellipse moments. Then calculate radial midpoint estimates for $n=4$ and $n=8$ with the angular integral exact; report both values and errors with a reproducible formula or code.',evidence:'Independent Cartesian or moment derivation plus two-grid midpoint and error table with units $\\mathrm{kg}$.',support:'For Cartesian slices use $s=x/(3\\,\\mathrm m)$, with $y$ from $-2\\,\\mathrm m\\sqrt{1-s^2}$ to $2\\,\\mathrm m\\sqrt{1-s^2}$. For midpoints use $r_i=(i+1/2)/n$ in the stated formula for $M_n$.'},
      {id:'interpret',title:'4. Scale and qualify the plate',prompt:'Integrate the density over the similar half-size ellipse $r\\leq1/2$, derive $M(q)$ for general $0\\leq q\\leq1$, and check the zero-radius and full-plate limits. Explain which conclusions would change if the real density or boundary varied.',evidence:'Scaled-domain mass formula $M(q)$, half-size value, both limiting checks, and manufacturing limitations.',support:'Use the same density law and stop the radial integral at $q$; the mass is not one quarter of the full plate because density grows outward.'}
    ],
    deliverables:['Domain sketch and Jacobian derivation','Exact transformed mass integral','Independent Cartesian and numerical checks','Scaled-plate interpretation'],
    assessment:[
      {id:'density',label:'Density and units',criterion:'I stated the ideal plate and physical areal-density law and kept dimensions of $\\mathrm{kg}/\\mathrm m^2$, $\\mathrm m^2$, and $\\mathrm{kg}$ consistent.'},
      {id:'mapping',label:'Map and coverage',criterion:'I derived the disk bounds and $|J|=(6\\,\\mathrm m^2)r$ Jacobian, explained the half-open seam convention, and identified the origin as the only measure-zero duplication.'},
      {id:'integral',label:'Exact mass',criterion:'I transformed both density and area, evaluated the full integral exactly as $15\\pi\\,\\mathrm{kg}$, and showed the radial algebra.'},
      {id:'checks',label:'Independent validation',criterion:'I supplied a Cartesian or moment derivation, reproduced both radial midpoint estimates and errors, and checked zero-radius and full-plate limits.'},
      {id:'interpretation',label:'Scaled interpretation',criterion:'I calculated the half-size mass from $M(q)$ and explained why ideal density and ellipse assumptions do not quantify manufacturing variation.'}
    ],
    limitations:['The boundary is an ideal ellipse, so cut variation can change its area and mass.','The prescribed areal density is assumed exact and may not describe a manufactured plate.','No material or thickness variation is included in the model.']
  },
  {
    id:'logistic-calibration',title:'Biomass growth: calibrate and challenge a logistic law',
    summary:'Fit a synthetic logistic biomass model, test withheld observations, and explain what the calibration identifies.',
    concepts:['logistic growth','parameter fitting','identifiability','equilibria','holdout validation','units'],
    chapterIds:['03','06','27','28'],
    prerequisites:[
      {label:'Numerical and approximation error',href:'#chapter/03/lesson/3'},
      {label:'Exponentials and logarithms',href:'#chapter/06/lesson/2'},
      {label:'Separation and growth',href:'#chapter/27/lesson/2'},
      {label:'Equilibria and stability',href:'#chapter/27/lesson/4'},
      {label:'Logistic solution and restored equilibria',href:'#chapter/27/lesson/6'},
      {label:'Reproducible reporting',href:'#chapter/28/lesson/5'}
    ],
    scenario:'A synthetic culture starts with $100\\,\\mathrm g$ of biomass. Its day 0, 2, and 4 calibration values were generated exactly by a constant-parameter logistic law. Two later, deliberately perturbed observations are withheld from fitting. Derive the law and physical conditions; infer capacity and rate; predict the holdouts; compare an exponential alternative; and explain which parameters the data identify.',
    data:{
      inputs:[['Time and biomass units','days; grams'],['Calibration $P(0)$','$100\\,\\mathrm g$'],['Calibration $P(2)$','$2000/11\\,\\mathrm g$'],['Calibration $P(4)$','$4000/13\\,\\mathrm g$'],['Withheld day 6','$469\\,\\mathrm g$'],['Withheld day 8','$638\\,\\mathrm g$'],['Changed case A','$P_0=100\\,\\mathrm g, K=800\\,\\mathrm g, e^{-2r}=1/2$'],['Changed case B','$P_0=100\\,\\mathrm g, K=1000\\,\\mathrm g, e^{-2r}=1/4$']],
      assumptions:['Biomass is continuous; the three calibration values are exact synthetic model values.','The two holdouts are synthetic observations with injected discrepancy, not field measurements.','Constant positive capacity and rate, a closed culture, and no observation-error distribution define the model. Fit only days 0, 2, and 4.'],
      anchors:[
        'For $0<P_0<K$, $P\u0027=rP(1-P/K)$ separates to $P(t)=K/[1+(K/P_0-1)e^{-rt}]$. Substitution verifies the ODE and initial value. The constant solutions $P=0,K$ must be restored after division. For $r>0$ and $0<P_0<K$, uniqueness keeps the solution in $(0,K)$ and it increases toward $K$.',
        'Set $y_n=1/P(2n)$, $q=e^{-2r}$, and $c=1/K$. Then $y_n=c+(y_0-c)q^n$, $q=(y_2-y_1)/(y_1-y_0)$, and $c=(y_1-qy_0)/(1-q)$. The supplied reciprocals are $1/100,11/2000,13/4000\\,\\mathrm g^{-1}$; differences are $-9/2000,-9/4000\\,\\mathrm g^{-1}$. Hence $q=1/2$, $K=1000\\,\\mathrm g$, and $r=(\\ln2)/2=0.346573590280\\,\\mathrm{day}^{-1}$.',
        'Without refitting, $P(6)=8000/17=470.588235294\\,\\mathrm g$ and $P(8)=640\\,\\mathrm g$. Observation-minus-prediction residuals are $-27/17=-1.588235294\\,\\mathrm g$ and $-2\\,\\mathrm g$. An exponential fit to days 0 and 2 has $g=\\ln(20/11)/2=0.298918500378\\,\\mathrm{day}^{-1}$; its day 6 and 8 predictions are $601.051840721$ and $1092.821528584\\,\\mathrm g$.',
        'With only $P_0=100\\,\\mathrm g$ and $P_2=2000/11\\,\\mathrm g$, every $K>P_2$ gives $q(K)=(K/P_2-1)/(K/P_0-1)$ and $r(K)=-\\ln q(K)/2$. At $K=800\\,\\mathrm g$, $r=0.361067358717\\,\\mathrm{day}^{-1}$ and $P_4=301.724137931\\,\\mathrm g$; at $K=1200\\,\\mathrm g$, $r=0.337564337529\\,\\mathrm{day}^{-1}$ and $P_4=311.614730878\\,\\mathrm g$. The third exact value distinguishes these fits under the assumed family.',
        'Changed case A: $P_2=1600/9=177.777777778$, $P_4=3200/11=290.909090909$, $P_6=1280/3=426.666666667\\,\\mathrm g$. Case B: $r=\\ln2=0.693147180560\\,\\mathrm{day}^{-1}$, $P_2=4000/13=307.692307692$, $P_4=640$, $P_6=64000/73=876.712328767\\,\\mathrm g$. Rounding the original calibration to $100,182,308\\,\\mathrm g$ gives $K=991.132530120\\,\\mathrm g$ and $r=0.347683468649\\,\\mathrm{day}^{-1}$; this is sensitivity, not an uncertainty interval.'
      ],
      anchorNote:'These exact and rounded calculations audit the synthetic model. Matching numbers does not certify reasoning or a real culture.'
    },
    stages:[
      {id:'model',title:'1. Define the growth law',prompt:'Derive $P\u0027=rP(1-P/K)$; state units, initial condition, equilibria, and why $0\\le P\\le K$ is forward invariant for $0<P_0<K,r>0$.',evidence:'Dimensioned parameter table, derivation, and direction sketch.',support:'Check $P=0,K$ in the original ODE before dividing. Rate has day inverse units; capacity and state have grams. Uniqueness prevents equilibrium crossing.'},
      {id:'fit',title:'2. Calibrate and test identifiability',prompt:'Derive the reciprocal fitting equations from days 0, 2, 4; calculate $K,r$. Then fit days 0 and 2 alone with two distinct capacities and show why one endpoint does not identify both parameters.',evidence:'Equations, fit table, and continuum argument.',support:'Use $y_n=1/P(2n)=c+(y_0-c)q^n$. Check $0<q<1$ and $K>\\max P_i$ before accepting a growth fit.'},
      {id:'challenge',title:'3. Predict and validate',prompt:'Predict days 6 and 8 without refitting; report signed observation-minus-prediction residuals. Compare the two-point exponential fit. Reproduce changed cases A and B. Address $P_0=0$, $P_0=K$, and no-growth fitting data.',evidence:'Auditable prediction table and reproducible formula or code.',support:'Separate calibration and holdouts. A model contrast does not prove the logistic law. No-growth data can make the reciprocal ratio undefined.'},
      {id:'report',title:'4. Write a qualified conclusion',prompt:'Explain exact three-value identifiability within the model, two-value nonidentifiability, rounded-data sensitivity, and the limits of two holdout residuals.',evidence:'Short memo with assumptions, source or formulas, prediction table, and limitations.',support:'If $y_1=y_0$, the fitting denominator vanishes. Without an error model, do not turn residual size into a statistical claim.'}
    ],
    deliverables:['Dimensioned model','Calibration and identifiability derivation','Holdout and changed-case tables','Qualified decision memo'],
    assessment:[
      {id:'setup',label:'Setup and units',criterion:'I stated the dimensioned model, assumptions, initial condition, equilibria, and physical interval.'},
      {id:'derivation',label:'Derivation',criterion:'I derived the solution and reciprocal fitting equations and checked parameter conditions.'},
      {id:'identifiability',label:'Identifiability',criterion:'I showed unique recovery from three exact equally spaced values under the model and a continuum from one later value.'},
      {id:'validation',label:'Validation',criterion:'I kept holdouts out of fitting, reproduced changed cases and the exponential comparison, and reported signed residuals with units.'},
      {id:'communication',label:'Communication',criterion:'My formulas or code, provenance, boundaries, and limitations make the result repeatable.'}
    ],
    limitations:['Exact synthetic calibration does not establish a biological law.','Two holdouts do not supply a noise distribution or uncertainty interval.','Time-varying resources and measurement error can change inferred parameters.'],
    referenceCode:"const P = [100, 2000 / 11, 4000 / 13],\n  y = P.map((v) => 1 / v);\nif (!P.every((v) => Number.isFinite(v) && v > 0))\n  throw Error('positive finite calibration required');\nconst q = (y[2] - y[1]) / (y[1] - y[0]),\n  c = (y[1] - q * y[0]) / (1 - q),\n  K = 1 / c,\n  r = -Math.log(q) / 2;\nif (!(\n  q > 0 &&\n  q < 1 &&\n  Number.isFinite(K) &&\n  Number.isFinite(r) &&\n  r > 0 &&\n  K > Math.max(...P)\n))\n  throw Error('not an identifiable positive growth fit');\nconst predict = (capacity, ratio, n, p0 = 100) =>\n  capacity / (1 + (capacity / p0 - 1) * ratio ** n);\nconst holdouts = [6, 8].map((day, i) => ({\n  day,\n  predicted: predict(K, q, day / 2),\n  observed: [469, 638][i],\n  residual: [469, 638][i] - predict(K, q, day / 2),\n}));\nconst alternatives = [800, 1200].map((capacity) => {\n  const ratio = (capacity / P[1] - 1) / (capacity / P[0] - 1);\n  return {\n    capacity,\n    rate: -Math.log(ratio) / 2,\n    day4: predict(capacity, ratio, 2),\n  };\n});\nconst changed = [\n  { capacity: 800, ratio: 0.5 },\n  { capacity: 1000, ratio: 0.25 },\n].map((item) => ({\n  ...item,\n  days: [2, 4, 6].map((day) => predict(item.capacity, item.ratio, day / 2)),\n}));\nconsole.log(\n  JSON.stringify({\n    K,\n    r,\n    q,\n    calibration: P,\n    holdouts,\n    exponential: [6, 8].map((day) => 100 * (P[1] / 100) ** (day / 2)),\n    alternatives,\n    changed,\n  }),\n);\n"
  },
  {
    id:'reproducible-investigation',title:'Final reproducible calculus investigation',
    summary:'Choose a bounded question, derive and implement a model, compare independent evidence, and publish a qualified conclusion.',
    concepts:['model choice','accumulation','differential equations','numerical error','reproducibility','limitations'],
    chapterIds:['03','11','14','27','28'],
    prerequisites:[{label:'Numerical and approximation error',href:'#chapter/03/lesson/3'},{label:'Definite integrals and endpoints',href:'#chapter/11/lesson/3'},{label:'Quadrature construction',href:'#chapter/14/lesson/1'},{label:'Quadrature error and refinement',href:'#chapter/14/lesson/2'},{label:'Separation and restored solutions',href:'#chapter/27/lesson/2'},{label:'Logistic model',href:'#chapter/27/lesson/6'},{label:'Reproducible capstone reporting',href:'#chapter/28/lesson/5'}],
    scenario:'Choose a bounded question in growth, motion, optimization, or accumulation. State domain, units, provenance, assumptions, and a prediction before computing. Derive the mathematics, implement a repeatable calculation, validate against an independently derived exact result, theorem bound, or withheld data, vary at least two inputs, and publish enough detail for another learner to reproduce and qualify the result. The time-varying growth case below is a complete worked reference, not a required topic or automatically graded answer.',
    data:{
      inputs:[['State and time','$P(t)$ grams; $t$ days; $0\\le t\\le3$'],['Capacity and initial value','$K=1000\\,\\mathrm g$, $P_0=100\\,\\mathrm g$'],['Rate','$r(t)=r_0[1+a\\cos(\\omega t)]$'],['Default','$r_0=0.4\\,\\mathrm{day}^{-1}$, $a=0.5$, $\\omega=\\pi/2\\,\\mathrm{rad/day}$'],['Endpoint grids','Composite midpoint $N=3,6,12$, $h=3/N$ days'],['Changed case A','$a=0$'],['Changed case B','$\\omega=\\pi/4\\,\\mathrm{rad/day}$']],
      assumptions:['Reference contract: finite $T>0$, $K>0$, $0\\le P_0\\le K$, $r_0>0$, $|a|\\le1$, and $\\omega>0$.','The rate is prescribed synthetic input, not inferred from observations. Its phase is dimensionless and its units are day inverse.','A different learner topic needs its own admissible inputs, outputs, boundary cases, benchmark, and limitation.'],
      anchors:[
        'For $0<P<K$, $d[\\log(P/(K-P))]/dt=r(t)$, so $R(t)=r_0[t+(a/\\omega)\\sin(\\omega t)]$ and $P(t)=K/[1+(K/P_0-1)e^{-R(t)}]$. $R$ is dimensionless; direct substitution checks the equation and initial value. $P=0,K$ separately solve the ODE. The formula stays strictly between them for finite time. With $|a|\\le1$, $r(t)\\ge0$ and $P$ is nondecreasing; $R(t)=r_0t$ plus a bounded term implies $P\\to K$.',
        'At $T=3\\,\\mathrm{days}$, $R(3)=1.2-0.4/\\pi=1.072676045526$ and $P(3)=1000/[1+9e^{-R(3)}]=245.168552645\\,\\mathrm g$. The default rate ranges from $0.2$ to $0.6\\,\\mathrm{day}^{-1}$; finite-time arrival at $K$ contradicts the exact formula.',
        'With $h=T/N$, $R_N=h\\sum_{j=0}^{N-1}r((j+1/2)h)$ and $P_N=K/[1+(K/P_0-1)e^{-R_N}]$. Composite midpoint gives $|R-R_N|\\le Th^2r_0|a|\\omega^2/24$. Since $dP/dR=P(1-P/K)\\le K/4$, $|P(T)-P_N|\\le KTh^2r_0|a|\\omega^2/96\\,\\mathrm g$. These bounds concern the specified law at grid times and exclude floating-point, parameter, and model error.',
        'Default $N=3,6,12$: $R_N=(1.058578643763,1.069343703512,1.071854227613)$; $P_N=(242.569055957,244.552390127,245.016498107)\\,\\mathrm g$; signed errors $(-2.599496687,-0.616162517,-0.152054538)\\,\\mathrm g$; certified bounds $(15.421256877,3.855314219,0.963828555)\\,\\mathrm g$. Halving-step error ratios are about $4.219,4.052$, consistent with second-order convergence; the derived bound gives the guarantee.',
        'Case A $a=0$: $R(3)=1.2$, $P(3)=269.487452397\\,\\mathrm g$ and midpoint is exact in real arithmetic. Case B $\\omega=\\pi/4$: $R(3)=1.2+0.4\\sqrt2/\\pi=1.380063263231$, $P(3)=306.366566141\\,\\mathrm g$. Its $N=3,6,12$ midpoint populations are $(307.368944392,306.613601822,306.428106207)\\,\\mathrm g$, signed errors $(1.002378251,0.247035682,0.061540067)\\,\\mathrm g$, and bounds $(3.855314219,0.963828555,0.240957139)\\,\\mathrm g$. At $P_0=0,K$ use constant solutions; as $\\omega\\to0$, $R\\to r_0(1+a)t$.'
      ],anchorNote:'The exact comparison and midpoint certificate concern the synthetic reference law. A numeric match is neither a proof nor an externally moderated grade.'
    },
    stages:[
      {id:'question',title:'1. Commit to a question',prompt:'Choose a topic and measurable output; specify finite domain, units, provenance, assumptions, and a prediction. For the reference, predict whether biomass reaches capacity by day 3 and whether midpoint refinement changes the estimate.',evidence:'One-page question and input/output contract.',support:'Require a finite endpoint, an independent benchmark, and a failure case before seeing results.'},
      {id:'derive',title:'2. Derive the model',prompt:'Derive governing equations and conditions, a comparison result, and invariants or theorem hypotheses. For the reference derive cumulative rate and both constant solutions.',evidence:'Unit-checked derivation with stated boundary cases and hypotheses.',support:'The invariant interval follows from uniqueness or the exact formula; $|a|\\le1$ also makes the reference rate nonnegative.'},
      {id:'compute',title:'3. Implement and check',prompt:'Supply code or unambiguous pseudocode, exact inputs, output for $N=3,6,12$, an independent benchmark, changed cases A and B, and a boundary or invalid-input test.',evidence:'Reproducible common-endpoint table.',support:'Integrate the rate by midpoint sums and map through exact logistic odds. Do not run saved source on page load.'},
      {id:'publish',title:'4. Bound and conclude',prompt:'Derive an applicable bound, compare observed errors and refinement ratios, distinguish numerical error from model and parameter uncertainty, and publish a report with citations if external data were chosen.',evidence:'Data, derivation, source, results, error argument, and qualified conclusion.',support:'A refinement ratio is evidence, not proof. The midpoint certificate applies to the smooth reference rate, not real biomass.'}
    ],
    deliverables:['Question and contract','Dimensioned derivation','Reproducible source and tables','Independent check and error argument','Qualified final report'],
    assessment:[{id:'question',label:'Question',criterion:'I stated a testable question, finite domain, units, provenance, assumptions, prediction, and input/output contract.'},{id:'derivation',label:'Derivation',criterion:'I derived the mathematics and checked boundaries, invariants, and hypotheses.'},{id:'implementation',label:'Implementation',criterion:'I supplied repeatable code or pseudocode, exact inputs, and default plus two changed cases.'},{id:'validation',label:'Validation',criterion:'I used an independent benchmark, common-endpoint errors, refinement, and an applicable error bound.'},{id:'conclusion',label:'Conclusion',criterion:'I separated numerical, parameter, measurement, and model limits without external grading claims.'}],
    limitations:['The reference periodic rate is synthetic.','Its numerical certificate does not quantify model uncertainty.','Other learner choices require their own benchmark and hypotheses.'],
    referenceCode:"const K = 1000,\n  P0 = 100,\n  r0 = 0.4,\n  a = 0.5,\n  omega = Math.PI / 2,\n  T = 3;\nif (\n  ![K, P0, r0, a, omega, T].every(Number.isFinite) ||\n  K <= 0 ||\n  P0 < 0 ||\n  P0 > K ||\n  r0 <= 0 ||\n  Math.abs(a) > 1 ||\n  omega <= 0 ||\n  T <= 0\n)\n  throw Error('invalid reference input');\nif (\n  !Number.isFinite(omega * T) ||\n  !Number.isFinite(r0 * T) ||\n  !Number.isFinite(K * T * T * T * r0 * Math.abs(a) * omega * omega)\n)\n  throw Error('reference calculation exceeds binary64 range');\nconst population = (R) =>\n  P0 === 0 ? 0 : P0 === K ? K : K / (1 + (K / P0 - 1) * Math.exp(-R));\nconst rate = (t) => r0 * (1 + a * Math.cos(omega * t));\nconst Rexact = r0 * (T + (a * Math.sin(omega * T)) / omega),\n  exact = population(Rexact);\nconst table = [3, 6, 12].map((N) => {\n  const h = T / N;\n  let Rmid = 0;\n  for (let j = 0; j < N; j++) Rmid += h * rate((j + 0.5) * h);\n  const Pmid = population(Rmid);\n  return {\n    N,\n    Rmid,\n    Pmid,\n    signedError: Pmid - exact,\n    Rbound: (T * h * h * r0 * Math.abs(a) * omega * omega) / 24,\n    Pbound: (K * T * h * h * r0 * Math.abs(a) * omega * omega) / 96,\n  };\n});\nconsole.log(JSON.stringify({ Rexact, exact, table }));\n"
  },
];
