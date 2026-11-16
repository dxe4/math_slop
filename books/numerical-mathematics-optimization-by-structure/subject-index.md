
# Stable Subject Index {#section-1-stable-subject-index}

<a id="section-1-how-to-use-this-index"></a>
## How to use this index {#section-3-how-to-use-this-index}

This retained index uses the historical C01–C18 keys below, not positions in the current twelve-chapter convex route; consult the [current reader guide](reader-guide.md) for that route and [Discrete and Global Optimisation](#/books/discrete-global-optimisation) for the moved integer/global material. The keys point to stable chapter identifiers rather than provisional page numbers. A locator such as `C08` refers to a whole chapter; a locator followed by a cue, such as `C08—constraint qualifications`, identifies the relevant subsection or worked discussion. Use the chapter identifier and cue together to locate the relevant discussion.

Cross-references use **see** for synonyms and **see also** for a neighboring concept. Algorithm names do not imply historical priority; they are conventional retrieval terms. Definitions and theorem hypotheses remain authoritative only in their chapters.

<a id="section-7-chapter-key"></a>
## Chapter key {#section-9-chapter-key}

| Key | Stable chapter identifier | Title |
|---|---|---|
| C01 | `formulations-and-claim-boundaries` | Formulations and Claim Boundaries |
| C02 | `convexity-optimality-duality` | Convexity, Optimality, and Duality |
| C03 | `separation-and-conjugacy` | Separation, Conjugacy, and Supporting Geometry |
| C04 | `duality-sensitivity-perturbation` | Duality, Sensitivity, and Perturbation Functions |
| C05 | `gradient-newton-quasi-newton` | Gradient, Newton, and Quasi-Newton Methods |
| C06 | `accelerated-proximal-methods` | Accelerated and Proximal Methods |
| C07 | `automatic-differentiation-systems` | Automatic Differentiation and Linearized Systems |
| C08 | `constraints-kkt-globalization` | Constraints, KKT Systems, and Globalization |
| C09 | `nonsmooth-constrained-methods` | Nonsmooth and Composite Constrained Methods |
| C10 | `integer-formulations-relaxations` | Integer Formulations and Relaxations |
| C11 | `polyhedral-integrality` | Polyhedral Integrality and Valid Inequalities |
| C12 | `branch-and-bound-cuts` | Branch-and-Bound and Cutting Ideas |
| C13 | `separation-branching-strategies` | Separation and Branching Strategies |
| C14 | `mixed-integer-convex-methods` | Mixed-Integer Convex Methods |
| C15 | `certificates-diagnostics` | Certificates, Diagnostics, and Honest Stopping |
| C16 | `nonconvex-global-bounds` | Nonconvex Global Bounds and Spatial Branching |
| C17 | `verified-optimization-software` | Verified Optimization Software and Proof Logs |
| C18 | `optimization-capstone-proof-logs` | Optimization Proof-Log Capstones |

<a id="section-30-a"></a>
## A {#section-32-a}

**accelerated proximal gradient**, C06—estimate sequence and composite rate; restart, C06; claim boundary, C15

**active constraint**, C04—multiplier interpretation; C08—KKT systems; C15—scaled residuals

**active set**, C08—local models; C13—branching and separation state

**adjoint**, C07—reverse accumulation; linear solve residual, C07 and C15

**affine function**, C01—model classification; support, C02–C03

**affine minorant**, C03—supporting geometry; C16—global lower bound

**algorithm audit**, C07—derivatives; C15—stopping; C17—implementation; C18—capstones

**arithmetic model**, C15—evidence boundary; C17—exact, floating, interval, mixed

**attainment**, C01—infimum versus optimizer; C02—convex existence boundary

**automatic differentiation**, C07; directional check, C07; implicit derivative, C07

<a id="section-52-b"></a>
## B {#section-54-b}

**backward error**, C15—diagnostic interpretation; see also **residual**

**barrier method**, C08—interior steps and parameter path; finite-parameter boundary, C01 and C08

**basis**, C11—polyhedral vertices; C12—relaxation record

**BFGS update**, C05—secant and curvature safeguard; see also **quasi-Newton method**

**biconjugate**, C03—closure and convex envelope

**bilinear term**, C10—linearization choices; C14—indicator coupling; C16—McCormick bounds

**binary variable**, C10—encodings and logic; C12—branching; C14—mixed-integer convexity

**bound**, direction for minimization, C01 and C15; continuous relaxation, C10; node, C12; verified, C17

**bound propagation**, C13—domain tightening; C16—interval contractors

**branch-and-bound**, C12; branching strategy, C13; convex nodes, C14; spatial form, C16; replay, C17–C18

**branching disjunction**, C12—coverage; C13—selection; C16—box partition

<a id="section-76-c"></a>
## C {#section-78-c}

**certificate**, claim levels, C15; exact and interval, C17; integrated audit, C18

**closure reason**, C12—leaf ledger; C14—mixed-integer tree; C17—proof-log schema

**coercivity**, C01—attainment; C02—existence examples

**complementarity**, C04—duality; C08—KKT; C15—residual scaling

**composite objective**, C06—proximal methods; C09—nonsmooth constraints

**condition number**, C05—Newton systems; C07—linearized systems; C15—residual versus error

**constraint qualification**, C04—strong duality; C08—KKT necessity; C15—certificate boundary

**constraint scaling**, C08—globalization; C15—residual interpretation

**contract**, optimization, C01; evidence, C15; software, C17

**convex conjugate**, C02—definition; C03—support; C04—duality

**convex envelope**, C03—biconjugacy; C16—relaxation

**convex function**, C02; first-order inequality, C02; strong, C02 and C05; composite, C06

**convex relaxation**, C10–C11; mixed-integer, C14; nonconvex global, C16

**coordinate scaling**, C05—conditioning; C08—constraints; C15—tolerances

**cut**, validity, C11; branch-and-cut ledger, C12; separation, C13; mixed-integer convex, C14

**cutting plane**, C11–C13; claim boundary, C15

<a id="section-110-d"></a>
## D {#section-112-d}

**derivative audit**, C07—JVP/VJP and finite differences; C18—capstone evidence

**descent lemma**, C05; accelerated use, C06

**descent direction**, C05; constrained, C08; nonsmooth limitation, C09

**determinism**, C17—tie breaking and serialization; C18—replay

**directed rounding**, C16—bounds; C17—implementation; see also **outward rounding**

**domain**, mathematical, C01; conjugate, C03; integer, C10; interval box, C16

**dual feasibility**, C02 and C04; residual, C15; verified witness, C17

**dual function**, C02 and C04

**duality gap**, C02—weak duality; C04—sensitivity; C15—stopping

<a id="section-130-e"></a>
## E {#section-132-e}

**epsilon-global optimality**, C15—gap convention; C16—spatial search; C17–C18—verified replay

**epigraph**, C01—reformulation; C02—convexity; C10—mixed formulations

**exact arithmetic**, C11—validity; C15—certificate type; C17—proof checker

**exact reformulation**, C01—claim boundary; C10—binary/integer models; C14—perspective models

**exercise solutions**, all chapters; cumulative proof logs, C18

**extended formulation**, C10–C11; projection equivalence, C01 and C10

**extreme point**, see **vertex**

<a id="section-146-f"></a>
## F {#section-148-f}

**facet**, C11—dimension and validity; C13—separation

**failure report**, C15—honest stopping; C17—software boundary; C18—unresolved states

**Fenchel–Young inequality**, C02–C03; dual certificate, C04

**feasibility**, C01—problem contract; primal, C08 and C15; integer, C10–C14; interval verified, C16–C18

**feasibility pump**, not a certificate by itself, C13—heuristic boundary

**filter globalization**, C08

**finite differences**, C07—derivative audit; rounding boundary, C15

**floating-point bound**, C15—claim boundary; C17—repair or verification

**Frank–Wolfe gap**, C09—constrained stationarity; C15—diagnostic

<a id="section-166-g"></a>
## G {#section-168-g}

**gap**, primal–dual, C02 and C15; integrality, C10; absolute/relative, C15; verified global, C16–C18

**global minimizer**, C01—claim meaning; convex certificate, C02; nonconvex verification, C16

**globalization**, C05—line search/trust region; C08—constrained methods

**gradient**, metric convention, C02 and C05; mapping, C06 and C09; verification, C07

**gradient descent**, C05—descent and rates; acceleration contrast, C06

**gradient mapping**, C06; constrained/composite, C09; stopping, C15

<a id="section-180-h"></a>
## H {#section-182-h}

**Hessian**, C05—Newton model; product, C07; interval enclosure, C16

**heuristic**, label and limitation, C13—branch choices; C15—evidence ladder

**hyperplane separation**, C03; oracle, C11 and C13

<a id="section-188-i"></a>
## I {#section-190-i}

**implicit derivative**, C07—linearized solve; residual certificate, C15

**infeasibility certificate**, C04—duality orientation; C12—node closure; C17—verified replay

**infimum**, C01; see also **attainment**

**integer hull**, C11; separation, C13

**integer variable**, C10; branch-and-bound, C12

**integrality gap**, C10; formulation strength, C11 and C14

**interval arithmetic**, C16—global bounds; C17—implementation; dependency overestimation, C16

**interval extension**, C16; inclusion audit, C17

**invariant**, algorithmic, C05–C09; tree, C12–C14; proof-log, C17–C18

<a id="section-208-j"></a>
## J {#section-210-j}

**Jacobian**, C07; KKT Jacobian, C08; interval enclosure, C16

**Jacobian-vector product**, C07

**JVP**, see **Jacobian-vector product**

<a id="section-216-k"></a>
## K {#section-218-k}

**KKT conditions**, C04—duality; C08—derivation and qualification; C15—residuals and sufficiency boundary

<a id="section-220-l"></a>
## L {#section-222-l}

**Lagrangian**, C02; perturbations, C04; constrained algorithms, C08

**leaf**, branch tree closure, C12; spatial tree, C16; proof log, C17

**line search**, C05; merit function, C08

**linear relaxation**, C10; polyhedral strength, C11; node bound, C12–C14

**Lipschitz gradient**, C05; proximal and accelerated rates, C06

**local minimum**, C01 and C05; constrained, C08; global distinction, C15–C16

**lower bound**, dual, C02–C04; relaxation, C10–C14; interval, C16–C18

**lower semicontinuity**, C02–C03; attainment boundary, C01

<a id="section-238-m"></a>
## M {#section-240-m}

**McCormick inequalities**, C16—bilinear envelopes

**merit function**, C08

**mixed-integer convex optimization**, C14; certificates, C15; verified software, C17

**model function**, C05—trust regions; C06—proximal upper model; C16—underestimator

**multiplier**, C02 and C04; sign, C08; sensitivity, C04; residual, C15

<a id="section-250-n"></a>
## N {#section-252-n}

**Newton method**, C05; automatic differentiation systems, C07; constrained KKT step, C08

**node**, bound and closure, C12; branching selection, C13; convex relaxation, C14; spatial domain, C16

**nonconvex optimization**, local boundary, C05 and C08; global bounds, C16; verification, C17–C18

**nonsmooth optimization**, proximal, C06; constrained/composite, C09

**normal cone**, C02–C03; constrained stationarity, C08–C09

<a id="section-262-o"></a>
## O {#section-264-o}

**objective scaling**, C01; algorithm effect, C05; stopping, C15

**optimal value**, C01; dual bound, C02–C04; integer relaxation, C10

**optimal-value function**, C04—perturbation and sensitivity

**oracle**, derivative, C05–C07; separation, C11 and C13; interval, C16

**outward rounding**, C16–C17; see also **directed rounding**

<a id="section-274-p"></a>
## P {#section-276-p}

**penalty method**, C08; exact-penalty boundary, C09

**perspective function**, C14—closure and strengthening

**polyhedron**, C11; relaxation, C10–C14

**preconditioner**, C05; KKT system, C08; diagnostic boundary, C15

**primal feasibility**, C02, C08, C15

**primal–dual gap**, C02, C04, C15

**projection**, C08–C09; uniqueness hypotheses, C02

**proof log**, C17; capstone replay, C18; branch tree, C12 and C16

**proper convex function**, C02–C03

**proximal map**, C06; constrained/composite, C09

<a id="section-296-q"></a>
## Q {#section-298-q}

**quadratic model**, C05; constrained, C08; verified enclosure, C16

**qualification**, see **constraint qualification**

**quasi-Newton method**, C05

<a id="section-304-r"></a>
## R {#section-306-r}

**reduced cost**, C11–C13

**regularization**, numerical, C05 and C08; exact reformulation boundary, C01

**relaxation**, definition, C01; integer, C10–C14; global, C16

**relative gap**, C15

**replay**, deterministic, C17; capstone, C18

**residual**, linear solve, C05 and C07; KKT, C08 and C15; interval/proof checker, C17

**restart**, accelerated method, C06

**rounding heuristic**, C10; feasibility audit, C13 and C15

<a id="section-322-s"></a>
## S {#section-324-s}

**scaling**, variables/objective, C01 and C05; constraints, C08; residuals/gaps, C15

**secant equation**, C05—quasi-Newton update

**separation oracle**, C03; polyhedral, C11; algorithmic, C13

**Slater condition**, C02 and C04; exact relative-interior statement, C08

**spatial branch-and-bound**, C16; proof logs, C17–C18

**stationarity**, smooth, C05; constrained, C08; nonsmooth, C09; diagnostic, C15

**stopping rule**, continuous, C05–C09; discrete, C12–C14; honest interpretation, C15; verified, C16–C18

**strong convexity**, C02; rates, C05–C06

**strong duality**, C02 and C04; qualification boundary, C08

**subgradient**, C02–C03; proximal methods, C06; constrained, C09

**subject index stability**, this component—chapter identifiers rather than draft pagination

<a id="section-346-t"></a>
## T {#section-348-t}

**tangent cone**, C08–C09

**tolerance**, step/linear solve, C05–C08; global gap, C15–C16; proof log, C17

**total unimodularity**, C11; formulation consequence, C10

**trust region**, C05; constrained variant, C08

<a id="section-356-u"></a>
## U {#section-358-u}

**underestimator**, C03—support; C14—convex relaxation; C16—global bound

**upper bound**, incumbent, C12–C18

<a id="section-362-v"></a>
## V {#section-364-v}

**valid inequality**, C11; separation, C13; mixed-integer convex, C14

**value function**, see **optimal-value function**

**variable bound**, C10—formulation; C13—propagation; C16—global envelope

**vector-Jacobian product**, C07

**verified computation**, C17; global bounds, C16; capstone, C18

**vertex**, C11—polyhedral geometry and integrality

**VJP**, see **vector-Jacobian product**

<a id="section-378-w"></a>
## W {#section-380-w}

**weak duality**, C02 and C04; certificate use, C15

**witness**, dual, C04; feasible incumbent, C12; cut validity, C11; proof log, C17

<a id="section-384-z"></a>
## Z {#section-386-z}

**zero duality gap**, C02 and C04; attainment distinction, C01; numerical interpretation, C15

<a id="section-388-claim-boundary-cross-index"></a>
## Claim-boundary cross-index {#section-390-claim-boundary-cross-index}

| If you need to distinguish… | Read first | Then audit with |
|---|---|---|
| infimum from attained minimum | C01 | C02 |
| stationary from globally optimal | C02 and C05 | C15 |
| KKT necessity from convex sufficiency | C08 | C04 and C15 |
| reformulation from relaxation | C01 and C10 | C11 |
| feasible incumbent from lower bound | C12 | C15 |
| useful cut from valid cut | C11 and C13 | C17 |
| local nonlinear solution from global solution | C05 and C08 | C16 |
| floating evidence from verified enclosure | C15 | C17 |
| search completion from proof-log completion | C12 and C16 | C17–C18 |
| epsilon-optimality from exact optimality | C15–C16 | C17 |

<a id="section-403-index-production-status"></a>
<a id="section-405-index-production-status"></a>

