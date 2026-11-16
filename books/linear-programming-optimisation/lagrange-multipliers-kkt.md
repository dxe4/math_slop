
# Lagrange Multipliers and KKT Conditions


## From LP prices to smooth constrained problems

Linear-programming dual variables balance objective coefficients against constraint normals. Lagrange multipliers extend that idea to differentiable objectives and constraints. The extension retains a crucial distinction: stationarity is a local candidate condition, whereas a global certificate needs convexity or another complete argument.

Required preparation is [gradients and chain rules](#/books/lucent-calculus/gradient-chain-levels), [total differentiability](#/books/lucent-calculus/total-differentiability), convexity and [Farkas' lemma](complementary-slackness-farkas.md). The live calculus lesson [Extrema and constraints](#/books/lucent-calculus/extrema-constraints) supplies the geometric multiplier introduction and boundary search. The Quarto constrained-optimisation lesson is acknowledged as a source in Sources; this chapter reuses that foundation through the live reader and develops a new LP-to-KKT argument rather than copying its lesson or exercise set. The [constrained numerical methods reading](../numerical-mathematics-optimization-by-structure/constraints-kkt-globalization.md) is further study on algorithms and residuals.

We write a minimisation problem
$$\min f(x),\qquad g_i(x)\le0,\quad h_j(x)=0,$$
on an open domain where the displayed functions are continuously differentiable. Inequalities point towards nonpositive values; using the opposite sign changes multiplier equations. Variables can have different units, so scaling belongs to the model as well as the numerical calculation.

**Definition 15.1 (Active constraint and KKT tuple).** An inequality is active at x when $g_i(x)=0$. A KKT tuple consists of a feasible x, multipliers $\lambda_i\ge0$ and unrestricted $\nu_j$, satisfying
$$\nabla f(x)+\sum_i\lambda_i\nabla g_i(x)
+\sum_j\nu_j\nabla h_j(x)=0,\qquad
\lambda_i g_i(x)=0.$$
The equations are stationarity and complementary slackness; primal and dual feasibility are equally necessary parts of the tuple.

An inactive inequality has zero multiplier because its nonzero negative value cannot multiply a nonzero lambda to give zero. An active inequality can still have zero multiplier. Activity identifies which boundaries touch the point, not which ones necessarily have a strictly positive marginal price.

## Equality geometry and its regularity

For equalities $h(x)=0$ with independent gradients, the implicit-function theorem gives a local smooth feasible surface whose tangent space is $\ker Dh(x)$. At a local minimum, differentiating f along every feasible curve shows its gradient is orthogonal to that tangent space. Finite-dimensional orthogonality then gives
$$\nabla f(x)+Dh(x)^{\mathsf T}\nu=0.$$

This argument uses the local-surface theorem at the independent-gradient hypothesis; that calculus theorem is an explicit prerequisite, not something inferred from a diagram. It fails if the equations describe a singular set with fewer available directions than their first derivatives suggest. A point where the hypothesis fails must be examined directly instead of discarded.

**Example 15.2 (A constrained weighted quadratic).** Minimise
$$f(x,y)=(x-1)^2+2(y-2)^2,\qquad x+y=2.$$
Using $L=f+\nu(x+y-2)$ gives
$2(x-1)+\nu=0$ and $4(y-2)+\nu=0$.
Thus $x=1-\nu/2$, $y=2-\nu/4$, and the equality gives $\nu=4/3$. The point is $(1/3,5/3)$ with objective $2/3$.

To finish the argument without relying on stationarity alone, substitute $y=2-x$:
$$f(x,2-x)=3x^2-2x+1
=3(x-1/3)^2+2/3.$$
This proves a unique global minimum on the entire equality line. Its constraint gradient $(1,1)$ is nonzero, so the multiplier derivation was legitimate.

For several equalities, multipliers can be nonunique when their gradients are dependent even if the minimising x is unique. Removing redundant equations changes the list of multipliers without changing the feasible set. A price attached to an arbitrary redundant representation must therefore be interpreted cautiously.

## A complete necessary-condition proof for affine constraints

For nonlinear inequalities, replacing feasible motions by their linearisation requires a constraint qualification. Affine constraints admit a direct proof using the alternatives theorem already established in this book.

**Theorem 15.3 (KKT necessity for affine constraints).** Let f be differentiable near a local minimiser $x_*$ of
$$Ax\le b,\qquad Hx=d.$$
Then there are nonnegative multipliers for the inequalities and unrestricted equality multipliers satisfying the KKT equations. No linear independence of the active affine rows is required.

*Proof.* Let I be the active inequality rows and write $g=\nabla f(x_*)$. Suppose no multipliers solve
$-g=A_I^{\mathsf T}\lambda+H^{\mathsf T}\nu$, $\lambda\ge0$.
Express the free nu as a difference of two nonnegative vectors and apply Farkas to the columns of
$M=(A_I^{\mathsf T},H^{\mathsf T},-H^{\mathsf T})$
and target $-g$. The alternative gives a vector y with
$A_Iy\ge0$, $Hy=0$ and $(-g)^{\mathsf T}y<0$.
Set $v=-y$. Then $A_Iv\le0$, $Hv=0$, and $g^{\mathsf T}v<0$.

For each inactive row the slack at $x_*$ is positive. There are finitely many rows, so sufficiently small positive t preserves every inactive inequality at $x_*+tv$; the active affine rows and equalities are preserved by the displayed direction conditions. Differentiability gives
$f(x_*+tv)=f(x_*)+t g^{\mathsf T}v+o(t)<f(x_*)$
for small enough t, contradicting local minimality. Thus the multipliers exist. Set inactive multipliers to zero to obtain complementarity. ∎

This theorem explains why a degenerate LP can have valid dual multipliers even when active rows are dependent. The argument uses the exact affine feasible-direction property. For a nonlinear inequality, a direction with zero first derivative can leave the feasible set at second order, so the same proof cannot be reused without additional reasoning.

For general smooth constraints, linear independence of active inequality gradients together with equality gradients is a sufficient qualification for KKT necessity. Its full nonlinear proof is cited in Sources. Convex Slater theory supplies another route under its domain and strict-feasibility assumptions. Neither condition should be inferred merely because a nonlinear solver returned numbers.

## Convexity supplies a global certificate

**Theorem 15.4 (Convex KKT sufficiency).** Suppose f and all g functions are differentiable and convex on an open convex domain, and h is affine. Every feasible KKT tuple globally minimises f over that domain's feasible set. Strict convexity of f gives uniqueness of the primal point when a minimiser exists.

*Proof.* Let $x_*$ be the KKT point and z any feasible alternative. Supporting inequalities give
$$f(z)-f(x_*)\ge\nabla f(x_*)^{\mathsf T}(z-x_*).$$
Substitute stationarity. The affine equality term vanishes because both points are feasible. Convexity of each g gives
$-\lambda_i\nabla g_i(x_*)^{\mathsf T}(z-x_*)
\ge\lambda_i g_i(x_*)-\lambda_i g_i(z)$.
The first term is zero by complementarity and the second is nonnegative by signs and feasibility. Thus $f(z)\ge f(x_*)$. If two distinct feasible minimisers existed under strict convexity, their midpoint would have strictly smaller objective, a contradiction. ∎

Necessity and sufficiency use different hypotheses. A multiplier can certify a global convex minimum even if a particular constraint qualification is not known. Conversely a nonconvex local optimum may satisfy KKT under regularity, while other KKT points are maxima or saddles. A strict-convexity uniqueness statement does not establish existence; compactness, coercivity with closedness, or another attainment argument is still needed.

**Example 15.5 (An active bound with zero multiplier).** Minimise
$$f(x,y)=(x-4)^2+(y-1)^2$$
subject to $x+y\le3$, $x\ge0$, $y\ge0$.
At $(3,0)$ the resource constraint and y lower bound are active. With resource multiplier lambda and lower-bound multipliers eta and xi, stationarity is
$$2(x-4)+\lambda-\eta=0,\qquad
2(y-1)+\lambda-\xi=0.$$
Choose $(\lambda,\eta,\xi)=(2,0,0)$. All signs and complementarity hold, and strict convexity proves the unique global minimum. The y bound is active but its multiplier is zero.

Change the resource limit to b. For $0<b\le3$, the solution is $(b,0)$, with $\lambda=8-2b$ and $\xi=6-2b$. For $3\le b\le5$, it is
$((b+3)/2,(b-3)/2)$, with $\lambda=5-b$ and both bound multipliers zero. Above five, the unconstrained point is feasible and lambda is zero. These formulas can be checked by substitution into KKT and the convex theorem. The active set changes at three and five, while the value's derivative follows the corresponding resource price.

## The LP dual is a KKT system

Write the book's standard maximisation as minimising $-c^{\mathsf T}x$, with inequalities $-x_i\le0$ and equalities $Ax-b=0$. Its Lagrangian is
$$L=-c^{\mathsf T}x-\lambda^{\mathsf T}x+
y^{\mathsf T}(Ax-b).$$
Stationarity becomes $A^{\mathsf T}y-c=\lambda\ge0$, precisely the dual coefficient condition. Complementarity is $x_i\lambda_i=0$. Multiplying the dual slack by x recovers the gap
$$b^{\mathsf T}y-c^{\mathsf T}x=x^{\mathsf T}\lambda.$$
Thus LP optimality is a particularly transparent KKT certificate. Its general affine-constraint necessity comes from the theorem above and does not require strictly positive x. This matters for models forced onto a coordinate face, where a naive strict-interior assumption would fail.

Multipliers also reveal units. If the objective is measured in pounds and a constraint is kilograms minus a capacity, lambda has units pounds per kilogram. Multiplying the constraint by a positive alpha divides its multiplier by alpha to keep the same stationarity term. Raw multiplier magnitudes are not invariant under row scaling.

For an equality written $h(x)-b=0$, the Lagrangian term is $\nu^{\mathsf T}(h(x)-b)$. Along a differentiable stable solution branch, differentiating its value gives $V'(b)=-\nu$, with the sign determined by this convention. This local sensitivity conclusion needs branch and regularity assumptions. At an active-set switch, use the actual value curve or one-sided analysis rather than extending one multiplier indefinitely.

## Penalties and second-order information

**Example 15.6 (A finite penalty remains infeasible).** Minimise
$(x-2)^2+y^2$ subject to $x=0$. The exact constrained minimum is $(0,0)$, value four, with equality multiplier four. Replace the constraint by the quadratic penalty
$$F_\rho(x,y)=(x-2)^2+y^2+\frac\rho2x^2,\qquad\rho>0.$$
Its stationary equations give
$x_\rho=4/(\rho+2)$ and $y_\rho=0$. The violation is nonzero for every finite rho, and tends to zero only in the limit. The Hessian is $\operatorname{diag}(2+\rho,2)$, whose spectral condition number is $(2+\rho)/2$.

At $\rho=98$, the point has x equal to 0.04, original objective 3.8416 and penalised objective 3.92. The original objective is below four because the point is infeasible, not because it improves the constrained optimum. Increasing the penalty tightens feasibility while creating an increasingly uneven curvature scale. An augmented-Lagrangian method changes this tradeoff through multiplier updates; its full algorithm is further reading.

Second-order tests concern the Lagrangian Hessian along appropriate feasible or critical directions. A full Hessian test can be unnecessarily strong. For example $f(x,y)=x^2-y^2$ subject to $y=0$ has a unique minimum at zero because its feasible restriction is $x^2$, although the full Hessian is indefinite. General second-order sufficient theorems require regularity and a precise critical cone; they are cited rather than replaced by this example.

## Residuals and a trustworthy conclusion

A numerical KKT report lists primal equality residuals, positive inequality violations, negative multiplier components, stationarity and complementarity separately. A small product $\lambda_i g_i$ alone can result from poor scales or an invalid multiplier sign. A small stationarity residual without feasibility is not a candidate for the original constrained problem.

For a convex problem, an exactly feasible KKT tuple gives the theorem's global conclusion. For approximate data, a finite objective bound needs error control and conditioning or a valid dual construction. For a nonconvex problem, small KKT residuals remain local evidence and do not settle global optimality. This vocabulary preserves the difference between a model, a derivative-based candidate and a mathematical certificate.

The calculus prerequisite also explains why corners and singular constraints need direct examination. Here the affine alternative proof, convex support proof and LP correspondence show exactly which parts extend beyond that introductory picture. The final [case-study chapter](modelling-case-studies.md) combines those certificates with units, uncertainty and implementable decisions.

## Active-set changes and approximate derivatives

An active set is a local description of a candidate, not an immutable model property. Along the quadratic resource example it changes at a precise threshold, and a multiplier reaches zero at the transition. Solving the old active equations beyond that threshold can produce an infeasible variable or a multiplier with the wrong sign. Recheck all inequalities and multiplier signs after every parameter change instead of treating an old formula as universally valid.

Gradient accuracy is another independent assumption. Finite differences require a step scale and have both truncation and rounding error; automatic differentiation differentiates the implemented expression, which may differ from the intended objective. A small residual assembled from a wrong derivative can be internally consistent and mathematically irrelevant. Compare selected directional derivatives or exact small cases when auditing an implementation, and retain the analytic formula defining the model.

The equality-gradient rank condition also needs a scale. A Jacobian that is nearly rank deficient can yield very large or sensitive multipliers even when the primal point changes little. Report that conditioning rather than interpreting the multipliers as stable marginal prices. Redundant constraints can often be removed exactly, while nearly dependent measured constraints require an explicit uncertainty or regularisation decision.

These numerical qualifications do not weaken an exact KKT theorem. They identify the additional links needed to apply its hypotheses to computed data. The final conclusion should say whether a tuple was proved feasible and stationary, bounded within a stated residual tolerance, or merely observed to make the objective change small.

## Exercises

### Exercise 1: Inactive constraint
<a id="lagrange-multipliers-kkt-ex-1"></a>

At a KKT point, g_i(x)=-2. What must its multiplier be?

<details>
<summary>Hint 1</summary>

**Hint.** Use complementary slackness.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The constraint value is nonzero.

</details>

<details>
<summary>Solution</summary>

**Solution.** The multiplier is zero because $\lambda_i(-2)=0$. Its sign condition is also satisfied. Inactivity forces zero price, but activity does not force a positive price.

</details>

### Exercise 2: Weighted equality
<a id="lagrange-multipliers-kkt-ex-2"></a>

Verify the weighted quadratic's solution by completing the square after eliminating y.

<details>
<summary>Hint 1</summary>

**Hint.** Set y=2-x.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Expand and centre the quadratic.

</details>

<details>
<summary>Solution</summary>

**Solution.** The reduced function is $3x^2-2x+1=3(x-1/3)^2+2/3$. Its unique global minimum is at x=1/3 and y=5/3, agreeing with the multiplier equations.

</details>

### Exercise 3: Multiplier scaling
<a id="lagrange-multipliers-kkt-ex-3"></a>

Replace g<=0 by 5g<=0. How does a valid multiplier change?

<details>
<summary>Hint 1</summary>

**Hint.** Keep its gradient contribution unchanged.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Both signs describe the same inequality.

</details>

<details>
<summary>Solution</summary>

**Solution.** The new multiplier is the old one divided by five. Then $(\lambda/5)\nabla(5g)=\lambda\nabla g$, and feasibility and complementarity remain equivalent.

</details>

### Exercise 4: LP stationarity
<a id="lagrange-multipliers-kkt-ex-4"></a>

Derive the dual slack from KKT for max c transpose x with Ax=b,x>=0.

<details>
<summary>Hint 1</summary>

**Hint.** Minimise the negative objective.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use constraints minus x_i<=0.

</details>

<details>
<summary>Solution</summary>

**Solution.** Stationarity is $-c-\lambda+A^{\mathsf T}y=0$, so $\lambda=A^{\mathsf T}y-c\ge0$. Complementarity is $x_i\lambda_i=0$, and equality of objectives follows when primal feasibility holds.

</details>

### Exercise 5: Active zero multiplier
<a id="lagrange-multipliers-kkt-ex-5"></a>

At (3,0) in the inequality example, is the y lower bound inactive because its multiplier is zero?

<details>
<summary>Hint 1</summary>

**Hint.** Activity concerns the constraint value.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A zero product permits either factor to vanish.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. The bound y>=0 is active because y=0. Its multiplier can nevertheless be zero, as the displayed tuple shows. Only the implication from a strict inactive inequality to zero multiplier is automatic.

</details>

### Exercise 6: Penalty point
<a id="lagrange-multipliers-kkt-ex-6"></a>

For rho=18 in the penalty example, find x and the Hessian condition number.

<details>
<summary>Hint 1</summary>

**Hint.** Use the exact stationary formula.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare the diagonal curvatures.

</details>

<details>
<summary>Solution</summary>

**Solution.** The point is x=4/20=0.2 and y=0. The Hessian condition number is 20/2=10. The nonzero x violates the original equality, so its objective is not an attained constrained value.

</details>

### Exercise 7: A KKT maximum
<a id="lagrange-multipliers-kkt-ex-7"></a>

For minimising -x^2 on [-1,1], check KKT at x=0 and determine its actual type.

<details>
<summary>Hint 1</summary>

**Hint.** Both bound inequalities are inactive.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Examine nearby objective values.

</details>

<details>
<summary>Solution</summary>

**Solution.** At zero the gradient is zero and both multipliers can be zero, so KKT holds. Every nearby nonzero point has smaller objective, so zero is a strict local maximum, not a minimum. Convex sufficiency is unavailable.

</details>

### Exercise 8: Affine necessity
<a id="lagrange-multipliers-kkt-ex-8"></a>

Why does the affine KKT proof not require independent active rows?

<details>
<summary>Hint 1</summary>

**Hint.** Its contradiction uses Farkas rather than an inverse active Jacobian.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Redundant generators can still span the same cone.

</details>

<details>
<summary>Solution</summary>

**Solution.** Farkas supplies either nonnegative multipliers plus free equality multipliers or a feasible descent direction. The direction argument remains valid with dependent rows, so existence of some multipliers follows; uniqueness need not.

</details>

### Exercise 9: Tangent Hessian
<a id="lagrange-multipliers-kkt-ex-9"></a>

Why is the full indefinite Hessian of x^2-y^2 harmless under y=0?

<details>
<summary>Hint 1</summary>

**Hint.** Write the exact feasible restriction.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Only tangent directions with zero y component are available.

</details>

<details>
<summary>Solution</summary>

**Solution.** The restriction is x squared, nonnegative with unique minimum at zero. Along tangent directions $(d,0)$ its quadratic form is $2d^2>0$ for d nonzero; the negative curvature points outside the feasible line.

</details>

### Exercise 10: Global conclusion
<a id="lagrange-multipliers-kkt-ex-10"></a>

Which assumptions turn a feasible smooth KKT tuple into the global certificate proved here?

<details>
<summary>Hint 1</summary>

**Hint.** Identify convex and affine parts separately.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Necessity qualifications and sufficiency are different questions.

</details>

<details>
<summary>Solution</summary>

**Solution.** The objective and inequality functions must be convex and differentiable on an appropriate convex domain, and equalities affine. Then support inequalities, signs and complementarity prove global optimality. Strict convexity gives primal uniqueness if a minimiser exists; a constraint qualification is a separate necessity issue.

</details>


## Sources

Bertsimas and Tsitsiklis, *Introduction to Linear Optimization* ([author's book page](https://www.mit.edu/~dbertsim/books.html)), is a comparison reference for simplex, duality and network optimisation. Matoušek and Gärtner, [Understanding and Using Linear Programming](https://doi.org/10.1007/978-3-540-30717-4), gives a complementary geometric treatment. The exposition, calculations and exercise solutions here are original; external results are identified where their full proofs are not supplied. The live [calculus lesson](#/books/lucent-calculus/extrema-constraints) supplies the prerequisite geometric treatment. The Quarto seed is `modules/textbooks/calculus/chapters/20-constrained-optimization.qmd`; its source and exercises remain unchanged. Boyd and Vandenberghe, [Convex Optimization](https://web.stanford.edu/~boyd/cvxbook/), section 5.5.3, and Nocedal and Wright, [Numerical Optimization](https://doi.org/10.1007/978-0-387-40065-5), chapter 12, supply the general KKT and qualification theorems. Their nonlinear necessity and second-order proofs are external dependencies. Affine necessity via Farkas, convex sufficiency and the LP correspondence are proved here.

## Summary

Multipliers balance objective and constraint gradients under a stated sign convention. Affine constraints permit a complete Farkas-based necessity proof; nonlinear constraints need an appropriate qualification. Convexity makes a feasible KKT tuple a global certificate, while nonconvex stationarity remains local. LP duality is exactly this structure with linear functions, and penalties or approximate residuals must not be confused with exact feasibility.
