
# Glossary and Theorem–Algorithm Finder

Chapter numbers below follow the historical eighteen-chapter manuscript order, not the current twelve-chapter convex route; resolve them using the [retained chapter key](subject-index.md) and use the [current reader guide](reader-guide.md) for present route positions. This component is a retrieval aid, not permission to omit hypotheses. Return to the chapter before applying a result, especially when moving between smooth, convex, integer, and verified-global settings.

## Glossary

### A

**Active constraint.** An inequality satisfied at equality at the point under discussion. Activity does not alone imply a positive multiplier or a necessary role in defining the solution. Chapters 8 and 15.

**Adjoint solve.** A transposed linearized system used to propagate sensitivity from a scalar output to many inputs or parameters. Its residual and conditioning belong to the derivative certificate. Chapter 7.

**Affine minorant.** An affine function lying below an objective on a declared domain. It can contribute a valid lower bound for minimization. Chapters 2, 3, 14, and 16.

**Automatic differentiation.** Chain-rule differentiation of the executed elementary program, up to the arithmetic used. It is distinct from symbolic manipulation and finite differences. Chapter 7.

### B

**Barrier.** A function that diverges near a constraint boundary and produces interior subproblems. A finite barrier parameter generally changes the problem; convergence statements require a parameter path and regularity assumptions. Chapter 8.

**Basis bound.** A bound derived from the active basis or relaxation solution of a linear subproblem. Its validity depends on the exact relaxation and numerical certification. Chapters 11–13.

**Biconjugate.** The conjugate of the conjugate. For a proper lower-semicontinuous convex function in the standard finite-dimensional setting, it recovers the function; without closure it recovers a closed convex envelope. Chapter 3.

**Branch-and-bound.** A finite-search framework that partitions alternatives, computes valid bounds, maintains an incumbent, and closes every node for a checkable reason. Chapters 12–14 and 16.

**Branching disjunction.** A collection of child domains whose union covers the parent’s admissible alternatives. Coverage is part of the certificate. Chapters 12, 13, and 16.

### C

**Certificate.** Independently checkable evidence for a precisely stated claim. It includes enough mathematical and arithmetic context to validate the claim without trusting the producer. Chapters 15, 17, and 18.

**Complementarity.** For convention \(g_i(x)\le 0\), the relation \(\lambda_i g_i(x)=0\) with \(\lambda_i\ge 0\). It couples dual weight to constraint activity. Chapters 4, 8, and 15.

**Constraint qualification.** A regularity condition under which multiplier or strong-duality conclusions are justified. Different theorems use different qualifications; “KKT applies” is incomplete without naming one. Chapters 4 and 8.

**Convex conjugate.** \(f^{\star}(y)=\sup_x(y^{\mathsf T} x-f(x))\). It translates a function into supporting-slope coordinates and underlies Fenchel duality. Chapters 2–4.

**Convex relaxation.** A convex feasible superset or convex underestimating formulation used to bound a harder problem. It must preserve the lower-bound direction for minimization. Chapters 10, 11, 14, and 16.

**Cut.** A valid inequality added to a relaxation. A cut must retain every intended feasible integer point; numerical separation is not itself a validity proof. Chapters 11–14.

### D

**Descent direction.** A direction with negative directional derivative for a differentiable objective. A descent direction needs a step rule; it is not itself a convergence guarantee. Chapter 5.

**Directed rounding.** Arithmetic that rounds lower endpoints downward and upper endpoints upward, preserving enclosure under controlled operations. Chapters 16 and 17.

**Dual bound.** An objective value from a feasible dual point that bounds the primal value by weak duality. Direction depends on the primal convention. Chapters 2–4 and 15.

**Duality gap.** The difference between compatible primal and dual feasible values. In convex settings it can certify suboptimality; its interpretation requires both feasibilities and a shared convention. Chapters 2, 4, and 15.

### E

**Epigraph.** \(\{(x,t): f(x)\le t\}\). Convexity of a function is equivalent to convexity of its epigraph, and epigraph formulations expose objectives as constraints. Chapters 1–3 and 10.

**Exact reformulation.** A new formulation whose feasible solutions and objective values correspond under a declared mapping. Adding variables is allowed, but projection equivalence must be proved. Chapters 1, 10, and 14.

**Extended formulation.** A formulation in a higher-dimensional space whose projection represents the original feasible set. Strength and size are both relevant. Chapters 10 and 11.

### F

**Facet.** A face of dimension \(\dim(P)-1\) for a nonempty polyhedron \(P\); only when \(P\) is full-dimensional in its ambient \(\mathbb{R}^{n}\) does this equal \(n-1\). Calling a valid inequality facet-defining requires dimension and nonredundancy evidence. Chapter 11.

**Fenchel–Young inequality.** \(f(x)+f^{\star}(y)\ge x^{\mathsf T} y\); equality characterizes compatible subgradients under the standard convex definitions. Chapters 2 and 3.

**Feasible incumbent.** The best verified feasible point currently known. In minimization its value is an upper bound; discovering it does not automatically close its node. Chapters 12–18.

**Frank–Wolfe gap.** A linear-minimization-based stationarity measure for a smooth objective over a convex set. Its global meaning relies on convexity. Chapter 9.

### G

**Globalization.** A safeguard—such as line search, trust region, merit function, or filter—that turns a local model step into a more reliable iterative method. It does not convert a nonconvex local method into a global optimizer. Chapters 5 and 8.

**Gradient mapping.** A scaled difference between a point and its proximal or projected update. It generalizes gradient norm as a composite stationarity diagnostic. Chapters 6, 9, and 15.

### I

**Incumbent.** See feasible incumbent.

**Integrality gap.** Difference or ratio between an integer optimum and a relaxation optimum under a declared convention. It may refer to one instance or a worst-case family. Chapter 10.

**Integer hull.** The convex hull of integer-feasible points in the designated integer coordinates. A complete linear description can be much larger than the original formulation. Chapter 11.

**Interval extension.** A set-valued computation \(F(X)\) enclosing all \(f(x)\) for \(x\) in interval box \(X\). Natural interval evaluation can overestimate because repeated dependencies are treated independently. Chapters 16 and 17.

### J

**Jacobian-vector product (JVP).** \(Jv\), the derivative response in an input direction, computed without necessarily forming \(J\). Chapter 7.

### K

**KKT conditions.** Primal feasibility, dual feasibility, stationarity, and complementarity for a constrained problem under fixed signs. Their necessity and sufficiency have different hypotheses. Chapters 4, 8, and 15.

### L

**Lagrangian.** Objective plus multiplier-weighted constraints under a declared sign convention. It organizes stationarity, dual functions, and sensitivity. Chapters 2, 4, and 8.

**Linear relaxation.** A linear-programming feasible superset of a discrete formulation. In minimization its optimum is a lower bound if solved and rounded safely. Chapters 10–13.

**Lipschitz gradient.** A gradient satisfying \(\lVert \nabla f(x)-\nabla f(y)\rVert\le L\lVert x-y\rVert\). It controls quadratic upper models and safe smooth steps. Chapters 5 and 6.

**Local minimizer.** A feasible point no worse than nearby feasible points. It need not be globally optimal. Chapters 1, 5, 8, 15, and 16.

**Lower bound.** A number no greater than the optimum in a minimization problem. Validity is logical, not typographical. Chapters 2–4 and 10–18.

### M

**McCormick envelope.** Convex and concave affine bounds for a bilinear term over a rectangle. It is exact at corners but generally a relaxation inside the box. Chapter 16.

**Merit function.** A scalar combining objective progress and constraint violation for globalization. Its finite parameters define algorithmic priorities and may introduce ill-conditioning. Chapter 8.

**Mixed-integer convex problem.** A problem convex in the continuous variables for each fixed integer assignment, under the chapter’s formulation assumptions. It joins convex bounding with discrete search. Chapter 14.

### N

**Node closure.** Proof that a branch-and-bound node need not be explored further: verified infeasibility, a valid noncompetitive bound, or complete resolution. Chapters 12–14 and 16–18.

**Normal cone.** Supporting directions of a convex feasible set at a point. It expresses constrained stationarity as a set inclusion. Chapters 2, 3, 8, and 9.

### O

**Optimal-value function.** The infimum as a function of a perturbation parameter. Under suitable convexity and duality hypotheses, multipliers provide sensitivity information or subgradients. Chapter 4.

**Outward rounding.** See directed rounding.

### P

**Penalty method.** A method adding constraint violation to the objective. At a finite parameter it may solve a different problem; exact-penalty claims need stated hypotheses. Chapter 8.

**Perspective formulation.** A convex construction coupling an indicator with a convex cost to strengthen mixed-integer relaxations. Domain closure at the zero indicator must be handled explicitly. Chapter 14.

**Polyhedron.** An intersection of finitely many affine halfspaces and hyperplanes. Bounded polyhedra are polytopes. Chapter 11.

**Primal–dual gap.** See duality gap.

**Projection.** A nearest feasible point in a named metric. For nonempty closed convex sets in Euclidean space, the projection is unique. Chapters 8 and 9.

**Proof log.** A replayable record containing problem identity, arithmetic rules, witnesses, bounds, partitions, and closure reasons. Chapters 17 and 18.

**Proximal map.** \(\operatorname{prox}_{\alpha g}(v)=\operatorname{argmin}_x \{g(x)+\lVert x-v\rVert^{2}/(2\alpha)\}\) under the stated existence convention. Chapters 6 and 9.

### Q

**Quasi-Newton condition.** A secant relation used to update a curvature approximation. Positive-definiteness safeguards and scaling determine whether it defines a descent metric. Chapter 5.

### R

**Reduced cost.** A dual-derived marginal quantity in a linear relaxation. Its sign and use depend on primal/dual conventions and basis validity. Chapters 11–13.

**Relaxation.** A problem whose feasible set or objective bound is easier and whose optimum bounds the original in a proved direction. Chapters 1, 10–16.

**Relative gap.** A normalized difference between upper and lower bounds with an explicitly stated denominator. Near zero, the denominator policy matters. Chapter 15.

**Residual.** A computable defect in an equation or optimality system. It is not an error bound without stability information. Chapters 5, 7, 8, 15, and 17.

### S

**Separation oracle.** A procedure that either accepts membership or returns a valid separating inequality under a precise model. Approximate separation requires a correspondingly weaker claim. Chapters 3, 11, and 13.

**Slater-type condition.** Strict feasibility condition supporting strong duality and multiplier existence for a class of convex problems. The exact relative-interior formulation matters. Chapters 2 and 4.

**Spatial branching.** Partition of a continuous domain, often by variable intervals, to improve nonconvex relaxations. Chapter 16.

**Stationarity.** Vanishing or inclusion-based first-order defect. It is global only with additional structure. Chapters 5, 8, 9, and 15.

**Strong convexity.** Convexity with a positive quadratic lower-curvature term. It can imply uniqueness and faster rates when paired with smoothness. Chapters 2, 5, and 6.

**Subgradient.** A global affine-support slope for a convex function. It is set-valued at many nonsmooth points. Chapters 2, 3, 6, and 9.

### T

**Total unimodularity.** A matrix property in which every square subdeterminant is \(0\), \(1\), or \(-1\). With the required integral right-hand-side and bound hypotheses, it yields integral polyhedral vertices. Chapter 11.

**Trust region.** A bounded local-model subproblem whose radius is updated by comparing predicted and observed change. Chapter 5.

### U

**Upper bound.** For minimization, the objective value of a verified feasible point. Chapters 12–18.

### V

**Valid inequality.** An inequality satisfied by every point in the target feasible set. Validity is distinct from whether it cuts the current relaxation solution. Chapters 11–14.

**Vector-Jacobian product (VJP).** A reverse derivative product \(u^{\mathsf T} J\). Chapter 7.

**Verified bound.** A bound whose mathematical relaxation, witness feasibility, and arithmetic direction are independently checkable. Chapters 15–18.

**Vertex.** An extreme point of a convex set; for a polyhedron it can be characterized by sufficiently many independent active constraints. Chapter 11.

## Theorem finder

| Need | Result and indispensable hypotheses | Chapter |
|---|---|---|
| distinguish optimizer from infimum | attainment through compactness/coercivity or another stated existence theorem; feasibility nonempty | 1 |
| turn a first-order condition into global optimality | differentiable convex objective and convex feasible domain, or the corresponding subgradient inclusion | 2 |
| infer uniqueness | strict or strong convexity on the feasible set plus existence | 2 |
| construct a separating hyperplane | correct finite-dimensional separation theorem; disjointness and closedness/interiority hypotheses matched to strictness | 3 |
| use conjugacy equality | Fenchel–Young equality with compatible subgradient relation | 3 |
| claim strong duality | convex primal plus the chapter’s qualification, commonly a relative-interior/Slater condition | 2 and 4 |
| interpret multipliers as sensitivity | value-function regularity, strong duality/subgradient conditions, consistent perturbation signs | 4 |
| guarantee smooth descent | Lipschitz gradient and a step satisfying the descent lemma’s range | 5 |
| obtain local quadratic Newton behavior | sufficiently smooth Hessian, nonsingular solution Hessian, starting point in the local basin, accurately solved systems | 5 |
| claim an accelerated rate | convexity and the exact smooth/composite oracle hypotheses for the stated sequence | 6 |
| verify reverse derivatives | differentiable fixed trace, correct local VJPs, all dependency paths accumulated | 7 |
| use KKT as necessary conditions | differentiability/subdifferential assumptions plus an applicable constraint qualification | 8 |
| use KKT as a global certificate | convex problem, primal and dual feasibility, stationarity and complementarity under fixed signs | 8 and 15 |
| justify projection uniqueness | nonempty closed convex set in the declared Hilbert geometry | 8 and 9 |
| obtain an integral LP optimum | total-unimodular constraint structure with integral data and compatible bounds; nonempty attained relaxation | 11 |
| prune a branch node | valid node lower bound no smaller than verified incumbent for minimization, or verified infeasibility | 12 |
| validate a cut | proof it holds for every target-feasible integer point; arithmetic representation preserves that validity | 11–14 |
| certify mixed-integer convex optimality | valid convex node bounds, exhaustive branching coverage, verified feasible incumbent, all leaves closed | 14 and 15 |
| bound bilinear terms | finite box bounds and the stated McCormick inequalities | 16 |
| certify epsilon-global optimality | domain coverage, valid lower bounds, verified incumbent, and final \(U-L\le \varepsilon\) under declared arithmetic | 16–18 |
| claim interval enclosure | inclusion-isotonic/outward-rounded implementation for all operations and satisfied domain preconditions | 16 and 17 |

## Algorithm finder

| Algorithm or procedure | Required structure | Minimum verification obligations | Chapter |
|---|---|---|---|
| formulation audit | variables, domain, objective, constraints, requested claim | units, attainment status, exact-versus-relaxed mappings | 1 |
| supporting-hyperplane certificate | convex set/function and candidate support | inequality validity on full domain, closure hypotheses | 3 |
| primal–dual sensitivity calculation | compatible primal/dual pair and perturbation convention | both feasibilities, signs, gap, qualification | 4 |
| gradient descent | differentiable objective and gradient oracle | derivative check, scale, step rule, descent/residual ledger | 5 |
| Newton/trust-region method | local quadratic model and linear solver | Hessian/model audit, solve residual, acceptance ratio, safeguards | 5 |
| proximal gradient | smooth plus proximable composite structure | proximal convention, gradient mapping, step/rate assumptions | 6 |
| accelerated proximal method | convex composite problem and prescribed momentum sequence | initialization, estimate/rate hypotheses, restart changes logged | 6 |
| JVP/VJP system | differentiable computational trace | shapes, dot-product check, finite-difference sweep, branch state | 7 |
| projected or SQP-type method | constrained smooth structure | feasibility measure, KKT residual, qualification and globalization diagnostics | 8 |
| nonsmooth splitting | maximal-monotone/convex composite structure as required | proximal subproblem accuracy, primal/dual residual scaling | 9 |
| formulation relaxation | discrete formulation and continuous superset | mapping, bound direction, gap convention, adverse rounding example | 10 |
| valid-cut separation | integer-feasible target and relaxation point | exact validity proof, violation calculation, coefficient serialization | 11 and 13 |
| branch-and-bound | bounded or otherwise finitely resolvable search | coverage, valid bounds, incumbent feasibility, every leaf reason | 12 |
| branching strategy | valid disjunction and deterministic choice rule | child coverage, ties, infeasible branches, replay order | 13 |
| mixed-integer convex search | convex continuous nodes plus integers | node convexity, perspective closure, cut validity, complete tree ledger | 14 |
| certificate audit | claimed point/bound/status and problem identity | primal/dual residuals, gaps, arithmetic and tolerance interpretation | 15 |
| spatial branch-and-bound | bounded continuous domain and global relaxations | box coverage, outward bounds, incumbent feasibility, epsilon ledger | 16 |
| proof-log producer/checker | stable serialization and small independent checker | hashes, arithmetic modes, schema, adverse fixtures, deterministic replay | 17 |
| cumulative capstone audit | complete problem and evidence package | reconstruct result without producer trust; report unresolved nodes honestly | 18 |

## Boundary finder

| Claim heard | What it actually supports | Missing bridge |
|---|---|---|
| “the gradient is tiny” | approximate smooth stationarity in a named scale | convexity/globality, feasibility, conditioning |
| “KKT residuals are tiny” | approximate satisfaction of a chosen optimality system | qualification, convex sufficiency, error bound |
| “the relaxation solved” | a candidate bound from a larger feasible set | verified bound direction and arithmetic |
| “rounding found a solution” | perhaps a discrete candidate | exact feasibility and objective recomputation |
| “no nodes remain” | tree traversal ended | coverage and valid closure reason for every leaf |
| “two solvers agree” | finite cross-check evidence | proof of correctness or directed bound validity |
| “interval code ran” | an interval-shaped output was produced | outward rounding, inclusion property, domain coverage |
| “gap is below tolerance” | an approximate statement under the chosen gap formula | exact optimality, unless separately proved |
