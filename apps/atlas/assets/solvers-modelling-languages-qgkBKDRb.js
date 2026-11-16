var e=`---
parent_id: book-numerical-mathematics-optimization-by-structure
chapter_id: solvers-modelling-languages
title: "Solvers and Modelling Languages"
level: graduate
estimated_minutes: 270
license: CC BY-SA 4.0
---

# Solvers and Modelling Languages {#section-1-solvers-and-modelling-languages}

An optimization system connects several mathematical objects: a written model, an expression graph, a canonical cone or matrix representation, a numerical iterate and a reported conclusion. A correct algorithm at the last stage cannot repair a changed objective at the first. This chapter follows the identities and certificates that make that translation reviewable.

The prerequisites are convexity, conic duality, KKT conditions and numerical conditioning. No particular software version or executed solver comparison is assumed. The objective is to understand a modeling interface's contract: which expressions it accepts, what reformulation it constructs, how variables and multipliers map back, and what evidence justifies its status. Software names do not replace these mathematical questions.

<a id="section-5-variables-parameters-and-a-preserved-problem-contract"></a>
## Variables, parameters and a preserved problem contract {#section-7-variables-parameters-and-a-preserved-problem-contract}

A variable is an unknown optimized by the model. A parameter is fixed for one solve but can change between solves. Multiplying a variable by a fixed data matrix is affine. Multiplying two optimization variables is generally bilinear and nonconvex. The same surface expression can therefore have different geometry depending on whether its arguments are variables or parameters.

Parameter domains matter too. A coefficient multiplying a convex penalty must be nonnegative for the usual convexity rule. Allowing that parameter to become negative changes the problem class. A model whose proof assumes positive variances, nonnegative capacities or positive-definite weights should expose those domains rather than letting an arbitrary numeric value silently invalidate its structure.

Keep stable names for variables, equality rows and cone blocks. Canonicalization may reorder or duplicate internal entries. The reported multiplier for a physical constraint must return through the declared map, not through a guessed array position. Record units and sign conventions with those names. This is useful both for scientific interpretation and for comparing two algebraically different representations of the same model.

An exact reformulation supplies forward and recovery maps preserving the requested objective and feasible outputs. A relaxation supplies a one-sided bound instead. A change of units supplies invertible coordinate maps and converted multipliers. These are different contracts, even if all three produce a convenient matrix problem.

<a id="section-15-a-composition-grammar-is-a-sufficient-convexity-proof"></a>
## A composition grammar is a sufficient convexity proof {#section-17-a-composition-grammar-is-a-sufficient-convexity-proof}

A disciplined convex modeling grammar starts from known atoms, their domains, curvature and monotonicity. Affine combinations remain affine. Nonnegative sums of convex expressions remain convex. A convex outer scalar function composed with convex inner functions is justified only in coordinates where it is nondecreasing, with analogous rules for decreasing coordinates and concave arguments. The expression's domain and sign information are part of that derivation.

For example, a norm is nonnegative, so squaring a norm is convex through the nondecreasing square function restricted to nonnegative inputs. Squaring an arbitrary signed convex expression is not licensed by the same argument. A grammar can reject a mathematically convex expression if its chosen syntax hides the needed structure. Rejection means the supplied composition proof failed; it is not a theorem that no convex reformulation exists.

<a id="section-21-worked-example-1-reveal-a-norm-instead-of-a-difficult-c"></a>
### Worked example 1: reveal a norm instead of a difficult composition {#section-23-worked-example-1-reveal-a-norm-instead-of-a-difficult-c}

The scalar function sqrt(1+x²) is convex, but a naive composition reads it as a concave square root of a convex expression. A sufficient composition rule does not accept that pattern. Writing it as the Euclidean norm of the vector (1,x) exposes an affine argument to a known convex atom. Its epigraph is a second-order-cone constraint, so the representation is exact.

Another expression, x²/x on x>0, equals x on its stated domain. Cancelling before modeling can reveal an affine function, but the strict positive domain must remain if it was part of the original problem. Extending the cancellation to zero changes an undefined expression into a defined one. Algebraic simplification is an exact reformulation only relative to the retained domain and requested outputs.

An atom library is therefore a collection of mathematical contracts. Each atom needs its domain, curvature, closed or open boundary conventions and a canonical representation. Adding an atom by a familiar name without these facts moves ambiguity into every model that uses it.

<a id="section-29-perspectives-and-extended-boundary-conventions"></a>
## Perspectives and extended boundary conventions {#section-31-perspectives-and-extended-boundary-conventions}

The quadratic-over-linear function ‖x‖²/t on t>0 is convex. One proof uses the perspective of a convex square norm. For two positive denominators, the normalized combined numerator divided by the combined denominator is a convex combination of the two normalized vectors, with weights proportional to their denominators. Applying convexity and multiplying by the combined denominator proves the perspective inequality.

A rotated-cone epigraph also proves the result and suggests a closed extension. At t=0, that closed extension is finite only when x=0; otherwise its value is positive infinity. This extension is useful in conic models, but it differs from a formulation that excludes t=0 entirely. A solver accepting the closed cone may therefore solve the closure of a strict-domain problem unless the author deliberately specifies the intended convention.

Similar issues arise for logarithms, entropy and reciprocals. Their formulas on the interior do not determine every extended boundary value. State whether the model uses an open domain, a lower-semicontinuous closure or an explicit positive lower bound. The last is a new constraint with a new scale, not an automatic numerical repair that preserves every optimizer.

<a id="section-37-auxiliary-variables-need-the-right-objective-direction"></a>
## Auxiliary variables need the right objective direction {#section-39-auxiliary-variables-need-the-right-objective-direction}

Epigraph substitutions are exact when minimizing a quantity that is nondecreasing in the auxiliary upper bound, or when the remaining model forces equality for another stated reason. Introducing t≥f(x) does not universally permit replacing every occurrence of f(x) by t.

<a id="section-41-worked-example-2-an-epigraph-substitution-that-relaxes-"></a>
### Worked example 2: an epigraph substitution that relaxes the problem {#section-43-worked-example-2-an-epigraph-substitution-that-relaxes-}

Fix x=0 and consider minimizing (x²−2)². Its only feasible objective is four. Introduce t≥x² and replace the objective by (t−2)². The new model can choose t=2, attaining zero. Both t and x satisfy the epigraph inequality, but the objective preferred an upper value rather than forcing t down to x².

The squared outer function is decreasing between zero and two, so the required monotonicity is absent. The proposed reformulation has changed the answer. Its accepted expression graph or a precise numerical minimizer would not fix that modeling error. Keep a recovery proof for each introduced variable, especially when nonlinear terms appear inside another objective or constraint.

Canonicalization may introduce many auxiliaries for one atom. Their values can be nonunique even when the original variable is unique. Report the recovered original variable and objective, and identify which internal quantities are merely representation choices. An arbitrary auxiliary value should not be interpreted as a new physical prediction.

<a id="section-49-infeasibility-and-unboundedness-have-different-certific"></a>
## Infeasibility and unboundedness have different certificates {#section-51-infeasibility-and-unboundedness-have-different-certific}

For the cone feasibility problem Ax=b, x∈K, a vector y satisfying A*y∈K* and bᵀy<0 proves infeasibility. Any feasible x would give bᵀy=⟨A*y,x⟩≥0, a contradiction. This is a strict separating certificate. In linear programming it becomes a Farkas alternative under the appropriate closed polyhedral assumptions.

For minimization, an unbounded ray requires a feasible starting point x₀ and a direction d in K with Ad=0 and ⟨c,d⟩<0. Cone convexity gives x₀+td∈K for nonnegative t, equality feasibility remains, and objective tends to minus infinity. A direction alone does not certify primal feasibility. If the original problem is infeasible, a purported improving direction does not make it an unbounded feasible optimization problem.

Approximate candidates need allowances in both statements. A tiny nonzero Ad can accumulate along a long ray. A slightly negative cone pairing from rounding may not be a rigorous separator. Scaling a certificate can improve readability, but should preserve the sign and normalization information needed to bound its error.

<a id="section-57-worked-example-3-an-infeasible-scalar-system"></a>
### Worked example 3: an infeasible scalar system {#section-59-worked-example-3-an-infeasible-scalar-system}

The equalities x=1 and x=2 cannot hold simultaneously. In the unrestricted-variable feasibility formulation, take y=(1,−1). The adjoint equality coefficient is zero, belonging to the dual of the full real-line cone, while the right-hand-side pairing is minus one. This is an exact separator. By contrast, an iterative routine failing to reduce both residuals within a budget supplies a process outcome, not this logical contradiction unless it also constructs or otherwise proves a certificate.

<a id="section-61-weak-conic-infeasibility-can-lack-a-strict-separator"></a>
## Weak conic infeasibility can lack a strict separator {#section-63-weak-conic-infeasibility-can-lack-a-strict-separator}

Semidefinite systems expose a limitation that polyhedral intuition can hide. Require a positive-semidefinite two-by-two matrix with first diagonal entry zero and off-diagonal entry one. Positivity forces that off-diagonal entry to vanish when its diagonal neighbour is zero, so the system is infeasible. Yet matrices with entries ε, one, one and 1/ε are positive semidefinite for every ε>0 and approach the required equality data as ε tends to zero. Their other diagonal entry escapes to infinity.

There is no strict separator of the preceding simple form. The equality adjoint has matrix entries y₁ on the first diagonal, y₂/2 off diagonal and zero on the second diagonal. Positive semidefiniteness forces y₂=0. Its pairing with the target data (0,1) is then zero, never negative. The equality-data image of the positive-semidefinite cone is not closed at that target.

This is called weak infeasibility in this conic setting: exact feasibility fails while residuals can approach zero. Facial reduction or another structural argument may establish the conclusion, but a small primal residual and a failure to obtain a strict dual ray are not contradictory. They describe the geometry just constructed.

The example also explains why large iterates deserve interpretation. Their growth may reflect an escaping approximation sequence rather than a finite feasible solution. An iteration limit should retain an unresolved status when the numerical method has not established which case applies. Conflating infeasibility, unboundedness and ill conditioning makes both mathematical and numerical reports less informative.

<a id="section-71-scaling-maps-must-return-multipliers-to-their-original-"></a>
## Scaling maps must return multipliers to their original units {#section-73-scaling-maps-must-return-multipliers-to-their-original-}

Suppose equality rows are multiplied by an invertible diagonal matrix D. The transformed system is DAx=Db. If z is its equality multiplier, the original multiplier is Dᵀz because (DA)*z=A*Dᵀz. The dual bound is unchanged: (Db)ᵀz=bᵀDᵀz. A multiplier reported without this conversion has different units and a different sensitivity interpretation.

Positive diagonal variable scaling x=Sz preserves an orthant domain, while changing the objective coefficient to Sᵀc and the equality matrix to AS. A dual slack transforms to Sᵀs, preserving the primal-dual pairing. For a general cone, an arbitrary invertible S changes the cone unless it is an automorphism of that cone. The transformed domain must be represented, not assumed unchanged.

<a id="section-77-worked-example-4-the-same-bound-with-different-row-scal"></a>
### Worked example 4: the same bound with different row scales {#section-79-worked-example-4-the-same-bound-with-different-row-scal}

Minimize x subject to 1000x≥2000 and x≥0. The optimum is two. The inequality-form dual uses y≥0 with 1000y≤1 and objective 2000y. Choosing y=1/1000 gives dual value two. Dividing the constraint row by 1000 produces x≥2, whose corresponding optimal multiplier is one. The two multipliers differ numerically but give the same Lagrangian contribution and objective bound after conversion.

A raw residual tolerance also changes units under that division. A physical tolerance for x must be converted consistently, rather than retaining an arbitrary identical number for the differently scaled row. Conditioning improvements should not silently change the feasible tolerance that an application actually accepts.

<a id="section-83-structure-linear-systems-and-arithmetic-evidence"></a>
## Structure, linear systems and arithmetic evidence {#section-85-structure-linear-systems-and-arithmetic-evidence}

Canonical forms can alter sparsity and conditioning even when exact mathematics is preserved. Forming AᵀA for least squares can square a condition ratio and introduce dense couplings. An augmented residual formulation or orthogonal factorization may retain a better numerical structure. A modeling interface should preserve enough information to choose such a representation deliberately rather than assuming the smallest written formula is the best numerical one.

For a semidefinite block, an eigenvalue allowance is different from exact membership. Adding a positive multiple of the identity can repair a proved small negative spectral bound, but changes affine measurements of the matrix. Those changes must be propagated to feasibility and objective bounds. A cone repair that is harmless for one inequality may violate an equality or invalidate a previously displayed gap.

For finite-dimensional convex minimization, a genuinely primal-feasible candidate supplies an upper value P and a genuinely dual-feasible candidate supplies lower value Q. Their difference is a certified suboptimality allowance when the evaluations are exact or rigorously bounded. A relative gap needs a declared positive objective scale, for example dividing by s₀+|P|+|Q| with s₀ expressed in objective units. Feasibility residuals remain separate; a small objective difference between infeasible candidates is not an optimum interval.

The [verified interval computation chapter](../numerical-mathematics-error-algorithms/verified-interval-computation.md) explains outward arithmetic and enclosure boundaries. The present chapter does not turn ordinary rounded solver output into such an enclosure. It identifies which inequalities would need preservation for a rigorous claim and which conditioning information translates residuals into the requested output allowance.

<a id="section-93-a-report-preserves-the-chain-of-meaning"></a>
## A report preserves the chain of meaning {#section-95-a-report-preserves-the-chain-of-meaning}

Record the original domains, objective normalization, data provenance and parameter values. State the canonicalization maps, including auxiliary recovery and multiplier conversions. Name the numerical method and stopping quantities, then provide original-scale feasibility, dual-domain membership and the objective interval actually supported. If an ambiguity remains, identify its first unresolved mathematical condition.

A status can distinguish a candidate optimum, a proved infeasibility certificate, a proved unbounded ray and an unresolved computational outcome. Different interfaces use different words, so retain the mathematical evidence rather than treating one word as a universal theorem. The same principle applies to a deterministic repeated solve: reproducible arithmetic output does not establish that the written model represents a real decision correctly.

Scientific interpretation comes after this translation chain. A shadow price belongs to a declared parameterization. A selected sparse feature can be nonunique. A conic relaxation bound may be exact for the relaxation while leaving a rank gap in the original model. These are properties a solver can help reveal when its report preserves the original identities and conditional conclusions.

<a id="section-101-exercises-with-staged-hints-and-full-solutions"></a>
## Exercises with staged hints and full solutions {#section-103-exercises-with-staged-hints-and-full-solutions}

<a id="section-103-exercise-1-variables-or-parameters"></a>
### Exercise 1: variables or parameters {#section-105-exercise-1-variables-or-parameters}

Explain why Ax is affine when A is data, but generally bilinear when both A and x are optimized.

<details>
<summary>Hint 1</summary>

Apply the definition of an affine map to its unknown arguments.
</details>
<details>
<summary>Hint 2</summary>

The scalar restriction is multiplication of two independent unknown numbers.
</details>
<details>
<summary>Full solution</summary>

With fixed A, multiplication preserves convex combinations in x. With both unknown, the scalar product ax has an indefinite Hessian and fails affine linearity jointly. Declaring one argument a parameter therefore changes the mathematical optimization variables. A changing parameter is still fixed during each individual solve and must satisfy the domains used by the convexity proof.
</details>

<a id="section-123-exercise-2-a-sufficient-grammar-can-reject-a-convex-fun"></a>
### Exercise 2: a sufficient grammar can reject a convex function {#section-125-exercise-2-a-sufficient-grammar-can-reject-a-convex-fun}

Give the norm representation of sqrt(1+x²) and explain why the naive concave-after-convex composition rule is insufficient.

<details>
<summary>Hint 1</summary>

Use a two-component affine vector.
</details>
<details>
<summary>Hint 2</summary>

Its Euclidean norm is the desired expression.
</details>
<details>
<summary>Full solution</summary>

It equals ‖(1,x)‖₂, a convex norm of an affine argument. A generic concave increasing outer function applied to a convex inner one is not a sufficient convexity rule. Rewriting exposes a valid atom contract; rejection of the first syntax does not establish nonconvexity of the mathematical function.
</details>

<a id="section-143-exercise-3-a-lost-domain-point"></a>
### Exercise 3: a lost domain point {#section-145-exercise-3-a-lost-domain-point}

On x>0, simplify x²/x. What changes if its replacement is allowed at x=0?

<details>
<summary>Hint 1</summary>

Cancellation divides by x and therefore uses the strict domain.
</details>
<details>
<summary>Hint 2</summary>

The simplified expression can be extended continuously, but that is another domain convention.
</details>
<details>
<summary>Full solution</summary>

The value is x for every positive x. Allowing zero adds a point where the original ratio was undefined. In a minimization of that quantity over positive x, the infimum is zero without attainment; including zero creates an attained optimum. A harmless-looking cancellation plus domain extension can therefore change an existence claim.
</details>

<a id="section-163-exercise-4-an-exact-unbounded-ray"></a>
### Exercise 4: an exact unbounded ray {#section-165-exercise-4-an-exact-unbounded-ray}

For min −x subject to x≥1, provide a feasible starting point and recession direction proving unboundedness.

<details>
<summary>Hint 1</summary>

Start at the boundary and move toward increasing x.
</details>
<details>
<summary>Hint 2</summary>

The objective along x=1+t is −1−t.
</details>
<details>
<summary>Full solution</summary>

Take x₀=1 and d=1. Every nonnegative t keeps x₀+td feasible and sends the objective to minus infinity. Both feasibility and the improving direction are present. Reporting only d=1 without a feasible base would omit part of the certificate for a general model.
</details>

<a id="section-183-exercise-5-prove-the-scalar-infeasibility-certificate"></a>
### Exercise 5: prove the scalar infeasibility certificate {#section-185-exercise-5-prove-the-scalar-infeasibility-certificate}

For x=1 and x=2, verify the adjoint and right-hand-side pairings of y=(1,−1).

<details>
<summary>Hint 1</summary>

The equality matrix has two identical rows.
</details>
<details>
<summary>Hint 2</summary>

Its transpose sums the two multiplier coordinates.
</details>
<details>
<summary>Full solution</summary>

Aᵀy=1−1=0 and bᵀy=1−2=−1. A feasible x would imply bᵀy=xAᵀy=0, a contradiction. This is an exact separating identity, distinct from a statement that an iteration failed to find a solution.
</details>

<a id="section-203-exercise-6-row-multiplier-conversion"></a>
### Exercise 6: row multiplier conversion {#section-205-exercise-6-row-multiplier-conversion}

A row is multiplied by five. Its transformed multiplier is three. What is the corresponding original multiplier and why?

<details>
<summary>Hint 1</summary>

Keep the Lagrangian row contribution unchanged.
</details>
<details>
<summary>Hint 2</summary>

The adjoint of the scalar row scaling is the same factor five.
</details>
<details>
<summary>Full solution</summary>

The original multiplier is fifteen. The transformed term is three times five times the original row residual, exactly fifteen times that residual. Bounds and sensitivities must be read in the original parameter units after this conversion. Retaining the numerical value three would describe a different row normalization.
</details>

<a id="section-223-exercise-7-identify-weak-infeasibility"></a>
### Exercise 7: identify weak infeasibility {#section-225-exercise-7-identify-weak-infeasibility}

Why do the positive-semidefinite matrices with entries ε,1,1,1/ε not prove feasibility of the zero-first-diagonal target?

<details>
<summary>Hint 1</summary>

Their equality residual tends to zero while another entry diverges.
</details>
<details>
<summary>Hint 2</summary>

There is no finite matrix limit satisfying all the required entries.
</details>
<details>
<summary>Full solution</summary>

Every approximant has first diagonal ε>0, not zero. Its second diagonal diverges as the residual decreases, so compactness supplies no feasible limit. At exact first diagonal zero, positivity forces the off-diagonal to vanish, contradicting the required one. Arbitrarily small equality residual and exact cone membership therefore coexist with infeasibility.
</details>

<a id="section-243-exercise-8-an-epigraph-recovery-failure"></a>
### Exercise 8: an epigraph recovery failure {#section-245-exercise-8-an-epigraph-recovery-failure}

For fixed x=0, compare (x²−2)² with the auxiliary model minimizing (t−2)² under t≥x².

<details>
<summary>Hint 1</summary>

The original value is forced, but the auxiliary variable can increase.
</details>
<details>
<summary>Hint 2</summary>

The auxiliary objective prefers t=2.
</details>
<details>
<summary>Full solution</summary>

The original value is four, while the auxiliary model has optimum zero at t=2. Its feasible x recovers the original x but not the same objective. The outer function is not nondecreasing over the relevant range, so the upper-bound variable is not forced tight. This is a relaxation, not an exact epigraph reformulation.
</details>

<a id="section-263-exercise-9-cone-repair-can-disturb-equalities"></a>
### Exercise 9: cone repair can disturb equalities {#section-265-exercise-9-cone-repair-can-disturb-equalities}

A symmetric matrix has a proved least eigenvalue at least −ε. What does adding εI ensure, and what happens to a trace equality?

<details>
<summary>Hint 1</summary>

All eigenvalues shift by ε.
</details>
<details>
<summary>Hint 2</summary>

The trace increases by the matrix dimension times ε.
</details>
<details>
<summary>Full solution</summary>

The repaired matrix is positive semidefinite. If the old trace equalled b, the new trace is b+nε for an n-by-n matrix. More generally an equality C•X=b changes by ε tr C. Cone repair therefore requires propagation of its equality and objective effects before a complete feasible certificate is claimed.
</details>

<a id="section-283-exercise-10-separate-an-unresolved-status"></a>
### Exercise 10: separate an unresolved status {#section-285-exercise-10-separate-an-unresolved-status}

A computation returns small stationarity residual and a time limit, with no established primal feasibility or dual bound. Which conclusion is justified?

<details>
<summary>Hint 1</summary>

State the observed process outcome and the proved mathematical quantities separately.
</details>
<details>
<summary>Hint 2</summary>

The missing feasibility and bound prevent an optimum interval.
</details>
<details>
<summary>Full solution</summary>

The returned point has the reported stationarity residual under its stated scaling, and the computation exhausted its budget. Neither global optimality nor infeasibility nor unboundedness follows. Preserve the candidate and unresolved obligations. A later certificate or structural proof may resolve them; relabelling the time limit as one of those conclusions would invent evidence.
</details>

<a id="section-303-summary-and-continuation"></a>
## Summary and continuation {#section-305-summary-and-continuation}

A modeling grammar supplies a sufficient structural proof; canonicalization supplies maps between mathematical representations; a numerical method supplies candidates; and primal–dual certificates support conclusions. Domains, auxiliary-variable recovery, scaling and cone closure determine whether those stages retain the original question. Discrete/global optimization adds further relaxation and search logic, in its [separate primary book](../discrete-global-optimisation.md).

Further reading: Boyd and Vandenberghe, *Convex Optimization* (2004), for disciplined modeling, conic forms and duality; Nocedal and Wright, *Numerical Optimization*, second edition (2006), for numerical algorithms and stopping analysis. These are reading references. The finite examples here are symbolic derivations.
`;export{e as default};