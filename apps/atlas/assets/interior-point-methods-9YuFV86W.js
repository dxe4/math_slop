var e=`---
parent_id: book-linear-programming-optimisation
chapter_id: interior-point-methods
status: draft
title: "Interior-Point Methods: A First Primal–Dual View"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Interior-Point Methods: A First Primal–Dual View


## Approaching an optimum from inside

Simplex represents a vertex and changes a basis. An interior-point method instead follows positive primal and dual quantities whose complementarity products gradually shrink. A small duality gap then measures progress towards the optimal objective. This chapter proves the central-path gap and a useful existence result, derives the Newton equations, and distinguishes those exact statements from a complete polynomial-time algorithm.

Required preparation is [duality](duality-theory.md), [complementary slackness](complementary-slackness-farkas.md), derivatives and positive-definite matrices. We keep the book's maximisation convention:
$$
\\max c^{\\mathsf T}x,\\quad Ax=b,\\ x\\ge0;
\\qquad
\\min b^{\\mathsf T}y,\\quad A^{\\mathsf T}y-s=c,\\ s\\ge0.
$$
A has full row rank. The dual equality introduces the slack s explicitly; y is unrestricted. Replacing c by minus c translates to a minimisation barrier formulation, but mixing those sign conventions in one Newton system is incorrect.

**Definition 13.1 (Strict primal–dual feasibility).** A primal point is strictly feasible when $Ax=b$ and every $x_i>0$. A dual pair is strictly feasible when $A^{\\mathsf T}y-s=c$ and every $s_i>0$. Positive components alone do not imply either equality, and ordinary feasibility does not imply strict feasibility.

The [existing barrier discussion](../numerical-mathematics-optimization-by-structure/constraints-kkt-globalization.md) in the convex-optimisation book is a further link on constrained Newton methods. Continue there for broader constrained Newton methods after the LP introduction here.

## The logarithmic barrier and its central equations

For $\\mu>0$, consider the equality-constrained concave problem
$$\\max_{Ax=b,\\ x>0}
\\Phi_\\mu(x)=c^{\\mathsf T}x+\\mu\\sum_{i=1}^n\\log x_i.$$
The logarithm tends to minus infinity at a coordinate boundary. Its Hessian is $-\\mu\\operatorname{diag}(x_i^{-2})$, negative definite. Thus at most one maximising x exists on an affine feasible set, although existence still requires an argument.

At an interior constrained maximiser the gradient is orthogonal to $\\ker A$, hence lies in the range of $A^{\\mathsf T}$. There is therefore y with
$$c+\\mu X^{-1}\\mathbf1=A^{\\mathsf T}y,$$
where $X=\\operatorname{diag}(x_i)$. Setting $s=\\mu X^{-1}\\mathbf1$ gives the central equations
$$Ax=b,\\quad A^{\\mathsf T}y-s=c,\\quad
Xs=\\mu\\mathbf1,\\quad x,s>0.$$
The same equations are stationarity and feasibility for the barrier. Strict concavity makes any such x its global maximiser.

**Theorem 13.2 (Barrier existence under strict primal–dual feasibility).** If there is at least one strict primal point and one strict dual pair, then for every $\\mu>0$ the barrier has a unique maximising x. Its central y and s are unique as well when A has full row rank.

*Proof.* Choose a strict dual pair $(y_0,s_0)$ and write $\\sigma=\\min_i(s_0)_i>0$. On the primal equality set,
$c^{\\mathsf T}x=b^{\\mathsf T}y_0-s_0^{\\mathsf T}x
\\le b^{\\mathsf T}y_0-\\sigma\\|x\\|_1$.
Meanwhile $\\sum_i\\log x_i\\le n\\log\\max(1,\\|x\\|_1)$ whenever x is positive. The linear negative term dominates this logarithm at infinity. Therefore every barrier superlevel above the value of one fixed strict primal point is bounded.

Within a bounded box, if any coordinate tends to zero, its logarithm tends to minus infinity while all other logarithms are bounded above and the linear objective is bounded. Such a superlevel is consequently bounded away from every coordinate boundary. It is a closed subset of a compact box inside the positive orthant, so continuity gives a maximiser. Strict concavity gives uniqueness. Stationarity gives s uniquely as $\\mu X^{-1}\\mathbf1$, and injectivity of $A^{\\mathsf T}$ gives unique y. ∎

This theorem has meaningful limitations. It assumes a strictly feasible point on each side, not merely a finite optimum. Redundant rows must be removed before the full-row-rank Newton argument, and problems confined to a coordinate face need a reduction or a more general initialization. Infeasible-start and homogeneous-embedding methods address such issues, but their full algorithms are outside this introduction.

## The exact gap supplies a stopping scale

**Theorem 13.3 (Central-path gap).** Every central triple has primal and dual feasible objectives satisfying
$$
0\\le b^{\\mathsf T}y-c^{\\mathsf T}x=x^{\\mathsf T}s=n\\mu.
$$
If $V_*$ is the LP optimum, then
$$c^{\\mathsf T}x\\le V_*\\le b^{\\mathsf T}y,\\qquad
V_*-c^{\\mathsf T}x\\le n\\mu.$$

*Proof.* Feasibility gives
$b^{\\mathsf T}y-c^{\\mathsf T}x
=x^{\\mathsf T}(A^{\\mathsf T}y-c)=x^{\\mathsf T}s$.
Sum the n complementarity equations for the stated gap. Weak duality supplies the bounds on $V_*$. Strict feasibility and the preceding existence theorem give a finite primal–dual pair; the book's LP theorem supplies attainment of the finite optimum. ∎

Thus choosing $\\mu\\le\\epsilon/n$ controls an absolute objective gap of epsilon at an exact central point. It does not control coefficient distance to a unique LP optimum. The LP can have an entire optimal face, and a nearly flat objective can allow far-apart near-optimal points.

As $\\mu\\downarrow0$, central primal values approach $V_*$. Strict dual feasibility also bounds the primal points uniformly for $\\mu$ in a bounded interval: $s_0^{\\mathsf T}x=b^{\\mathsf T}y_0-c^{\\mathsf T}x$ and the last term is bounded below by $V_*-n\\mu$. Since every component of $s_0$ is positive, the x values stay bounded. Any convergent subsequence has a nonnegative feasible limit with objective $V_*$ by continuity. This proves optimality of accumulation points, not a universal uniqueness or rate for the full vector path.

**Example 13.4 (An exact central triple).** Maximise $x_1$ subject to $x_1+x_2=1$, $x\\ge0$. The LP optimum is $(1,0)$, value one. For $\\mu=3/8$, take
$$x=(3/4,1/4),\\quad y=3/2,\\quad s=(1/2,3/2).$$
The primal equality holds, and $A^{\\mathsf T}y-s=(1,0)=c$. Both products $x_is_i$ equal $3/8$. Primal value is $3/4$, dual value $3/2$, with gap $3/4=2\\mu$. These feasible bounds are correct but conservative relative to the known exact optimum. A central point need not be close to a vertex at a moderately large parameter.

## Newton's equations and a positive-definite reduction

For a current positive triple define
$$r_p=b-Ax,\\qquad
r_d=c-A^{\\mathsf T}y+s,\\qquad
r_c=\\mu\\mathbf1-Xs.$$
Linearising the equations gives
$$
A\\Delta x=r_p,\\quad
A^{\\mathsf T}\\Delta y-\\Delta s=r_d,\\quad
S\\Delta x+X\\Delta s=r_c.
$$
The complementarity equation is nonlinear; Newton omits the product of the two increments.

Eliminate $\\Delta s=A^{\\mathsf T}\\Delta y-r_d$ and then $\\Delta x$:
$$
AS^{-1}XA^{\\mathsf T}\\Delta y
=AS^{-1}(r_c+Xr_d)-r_p,
$$
$$\\Delta x=S^{-1}(r_c+Xr_d-XA^{\\mathsf T}\\Delta y).$$
These are exact algebraic identities when x and s are positive.

**Proposition 13.5 (The normal matrix is SPD).** If A has full row rank and x,s are positive, then $AS^{-1}XA^{\\mathsf T}$ is symmetric positive definite.

*Proof.* The middle diagonal D has entries $x_i/s_i>0$. For nonzero z,
$z^{\\mathsf T}ADA^{\\mathsf T}z
=\\sum_i D_{ii}(a_i^{\\mathsf T}z)^2$.
Full row rank implies $A^{\\mathsf T}z\\ne0$, so at least one summand is positive. ∎

Positive definiteness gives a unique exact Newton solve. It does not guarantee good numerical conditioning: ratios $x_i/s_i$ can become very uneven near the boundary. A small linear residual also needs a sensitivity estimate before it implies an accurate direction. Indefinite augmented-system formulations may avoid some normal-equation conditioning at the cost of a different factorization.

**Example 13.6 (A Newton direction is not an exact central solution).** For the same one-row model, start at
$x=(1/2,1/2)$, $y=2$, $s=(1,2)$ and target $\\mu=1/4$.
Primal and dual residuals are zero, while
$r_c=(-1/4,-3/4)$. The normal coefficient is $3/4$, and its right-hand side is $-5/8$, giving $\\Delta y=-5/6$. Then
$$\\Delta s=(-5/6,-5/6),\\qquad
\\Delta x=(1/6,-1/6).$$
A full step remains positive and feasible, with
$x^+=(2/3,1/3)$ and $s^+=(1/6,7/6)$.
The new products are $1/9$ and $7/18$, not both $1/4$. Their discrepancies are exactly $\\Delta x_i\\Delta s_i=(-5/36,5/36)$, the terms omitted by linearisation. Newton usually requires repeated controlled steps, not one solution of its tangent equations.

## Staying inside the orthant

For each negative direction component, positivity requires
$\\alpha<-x_i/\\Delta x_i$; positive components impose no upper bound. A fraction-to-boundary rule chooses a fixed safety factor $0<\\tau<1$ times the smallest relevant bound, also capped at one. Apply the rule to both primal and slack variables. Equality residuals may prefer a different accepted step, so positivity and merit or neighbourhood tests remain separate conditions.

**Example 13.7 (A strict interior step).** Let
$$x=(0.3,0.8),\\quad \\Delta x=(-0.6,-0.1),\\qquad
s=(0.5,2),\\quad\\Delta s=(-0.2,-3).$$
The primal upper bounds are $1/2$ and eight; the slack bounds are $5/2$ and $2/3$. Their minimum is $1/2$. With safety factor $0.9$, use $\\alpha=0.45$. Then
$$x^+=(0.03,0.755),\\qquad s^+=(0.41,0.65),$$
both strictly positive. Taking the limiting alpha $1/2$ would make the first x component zero and invalidate a logarithmic evaluation. A safe step length alone does not prove a useful reduction in the central residual.

## What a full method must add

A complete path-following algorithm specifies how mu changes, how closely Newton iterates remain to the central neighbourhood, how initialization is obtained and when a step is accepted. Polynomial iteration theorems require a particular neighbourhood and step strategy, together with rational-data and arithmetic conventions if bit complexity is claimed. No such theorem follows merely from the phrase interior point or from positive-definite Newton equations.

For inexact triples retain separate primal, dual and complementarity residuals. With $e_p=b-Ax$ and $e_d=A^{\\mathsf T}y-s-c$, the exact algebraic identity is
$$b^{\\mathsf T}y-c^{\\mathsf T}x
=x^{\\mathsf T}s+x^{\\mathsf T}e_d+y^{\\mathsf T}e_p.$$
A displayed small $x^{\\mathsf T}s$ is therefore not necessarily a primal–dual objective gap when the equalities are unsolved. Moreover, infeasible x or y do not provide literal LP lower and upper bounds. Feasibility repair or a theorem with explicit residual terms is needed before reporting an optimum interval.

Record the target mu, positivity margins, all residual components, accepted step lengths, linear-solve conditioning and termination reason. Scaling must preserve the model's objective units and adjust the interpretation of dual variables. A resource limit is an outcome, not a convergence certificate. These practices connect the exact central-path argument to numerical linear algebra without attributing more to an approximate run than its arithmetic supports.

## Scaling and the meaning of a central residual

Logarithms should be applied to dimensionless quantities such as $x_i/\\bar x_i$ for fixed positive reference scales. Those references add a constant to the barrier objective, so they do not change its central equations. They still matter for reporting units and for constructing a numerically balanced system. Rescaling primal variables must be accompanied by the inverse scaling of dual slacks so the complementarity products keep their objective units.

A central neighbourhood compares individual products with their target, rather than only inspecting their sum. In the Newton example, the two product errors cancel in the sum but neither component is at its target. A method that monitors only total gap could miss that loss of centrality. The norm and normalisation of a neighbourhood condition are part of a specific algorithm's theorem.

Likewise a small Newton correction can mean successful local convergence, a poor direction caused by an inaccurate solve, or a step restricted by an almost vanishing component. Pair correction size with equality residuals, componentwise complementarity, positivity margins and the accepted parameter change. If the factorisation fails or positivity is lost, preserve that state and return the declared failure rather than reporting the last finite objective as an answer.

The introductory proofs establish existence and objective convergence of exact central points. They do not claim that every damped Newton sequence reaches those points or that every positive iterate lies on the path. That remaining algorithmic work is precisely why global path-following analysis is a separate theorem.

## A central path selects interior representatives, not sparse decisions

An LP may have several optimal vertices or an entire optimal face. The barrier's unique point for a positive parameter does not make the LP optimum unique. This distinction can be seen without any asymptotic theory. On the simplex with positive coordinates summing to one and zero objective, the barrier maximises the sum of logarithms. Its first-order equations require every coordinate to be equal. The unique central point is therefore the uniform vector for every positive parameter. The original LP, however, declares every point of the closed simplex optimal, including all its vertices.

The result follows either by stationarity and strict concavity or by the arithmetic–geometric mean inequality. Equal coordinates give a feasible positive point; any unequal coordinates can be averaged in pairs to increase the sum of logarithms. Thus an interior method naturally returns a dense optimal representative in this example. A later procedure that seeks a basic optimum is an additional selection step, not an improvement in the objective certificate.

Weights change that representative. With positive weights on the logarithms, stationarity gives each coordinate proportional to its weight. Summing the coordinates determines the normalising constant. All these points are still LP optimal in the zero-objective example. This shows directly that barrier-based selection is influenced by the chosen barrier and representation, whereas the original feasible set and objective determine the set of LP optima.

**Worked example: approaching a unique endpoint.** Return to maximising the first coordinate on the two-dimensional simplex. Eliminate the second coordinate as one minus the first. The stationary equation for the barrier is

$$
1+\\frac{\\mu}{x_1}-\\frac{\\mu}{1-x_1}=0,
\\qquad
x_1=\\frac{1-2\\mu+\\sqrt{1+4\\mu^2}}2.
$$

The other algebraic root is negative, so the displayed root is the feasible one. For small positive parameter, Taylor expansion of the square root gives $x_1=1-\\mu+\\mu^2+O(\\mu^4)$. Hence the primal objective deficit is approximately the parameter, while the exact primal–dual gap is twice the parameter. The gap is a correct bound, not necessarily the exact primal error.

At the limit the second coordinate vanishes, so the logarithmic objective itself is not defined there. The LP objective and constraints remain continuous at the limit, which is why the accumulation-point argument works. One should not substitute the boundary optimum into the barrier stationarity equations with a zero denominator. The appropriate limiting statement concerns feasibility, objective values, and complementary products.

These examples also explain why sparse modelling and sparse answers are separate notions. A sparse constraint matrix can make Newton linear algebra economical while its central decision remains dense. Conversely, a dense representation may describe an LP with a sparse basic optimum. Algorithmic storage, central-path geometry, and the desired interpretation of the final decision should be discussed separately when selecting or explaining a method.

## Exercises

### Exercise 1: Dual slack
<a id="interior-point-methods-ex-1"></a>

For max c transpose x with Ax=b, write the nonnegative dual slack convention used here.

<details>
<summary>Hint 1</summary>

**Hint.** The dual coefficient inequality is A transpose y at least c.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Subtract c.

</details>

<details>
<summary>Solution</summary>

**Solution.** Use $s=A^{\\mathsf T}y-c\\ge0$, equivalently $A^{\\mathsf T}y-s=c$. Changing the primal to minimisation requires translating the signs rather than reusing this equation unchanged.

</details>

### Exercise 2: Central gap
<a id="interior-point-methods-ex-2"></a>

A central point has n=20 and mu=10^-4. Bound its absolute primal objective suboptimality.

<details>
<summary>Hint 1</summary>

**Hint.** Sum the complementarity products.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Apply weak duality.

</details>

<details>
<summary>Solution</summary>

**Solution.** The gap is $n\\mu=0.002$, and the primal objective is at most 0.002 below the optimum. This requires exact primal and dual feasibility and does not bound strategy or coefficient distance.

</details>

### Exercise 3: Positive Newton matrix
<a id="interior-point-methods-ex-3"></a>

Why does full row rank matter for A D A transpose with positive diagonal D?

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate its quadratic form.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A nonzero vector in the transpose null space would defeat strict positivity.

</details>

<details>
<summary>Solution</summary>

**Solution.** Full row rank makes $A^{\\mathsf T}z$ nonzero for every nonzero z, so the sum of positive weighted squares is strictly positive. Without it, dependent rows produce a nontrivial null direction and the matrix is singular.

</details>

### Exercise 4: Central example
<a id="interior-point-methods-ex-4"></a>

Check the complementarity products for x=(3/4,1/4), s=(1/2,3/2).

<details>
<summary>Hint 1</summary>

**Hint.** Multiply matching components.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare their sum with the objective gap.

</details>

<details>
<summary>Solution</summary>

**Solution.** Both products are $3/8$ and their sum is $3/4$. The primal and dual feasible objectives differ by that amount, agreeing with $2\\mu$.

</details>

### Exercise 5: Linearisation remainder
<a id="interior-point-methods-ex-5"></a>

Expand $(x+\\Delta x)_i(s+\\Delta s)_i$ and identify Newton's omitted term.

<details>
<summary>Hint 1</summary>

**Hint.** Multiply the two factors fully.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Separate constant, linear and quadratic contributions.

</details>

<details>
<summary>Solution</summary>

**Solution.** The product is $x_is_i+s_i\\Delta x_i+x_i\\Delta s_i+\\Delta x_i\\Delta s_i$. Newton enforces the constant plus linear part; the increment product remains as the nonlinear residual after a full step.

</details>

### Exercise 6: Fraction to boundary
<a id="interior-point-methods-ex-6"></a>

For x=0.2 and direction -0.5, find the strict positivity limit and a 0.9-fraction step.

<details>
<summary>Hint 1</summary>

**Hint.** Solve x+alpha times direction greater than zero.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Multiply the limiting value by the safety factor.

</details>

<details>
<summary>Solution</summary>

**Solution.** Strict positivity requires $\\alpha<0.4$. The 0.9 fraction gives 0.36 and new value 0.02. Taking exactly 0.4 would reach zero and leave the barrier domain.

</details>

### Exercise 7: Barrier uniqueness
<a id="interior-point-methods-ex-7"></a>

Why can the barrier have a unique solution even if the LP has several optima?

<details>
<summary>Hint 1</summary>

**Hint.** The logarithmic term is strictly concave.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A finite-mu objective differs from the linear one.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its negative-definite Hessian makes the finite-mu objective strictly concave on the feasible affine set, yielding at most one maximiser. The limiting LP objective is merely linear and may be constant on an optimal face.

</details>

### Exercise 8: Inexact gap
<a id="interior-point-methods-ex-8"></a>

Why is a small x transpose s insufficient if the primal or dual equality residual is large?

<details>
<summary>Hint 1</summary>

**Hint.** Use the exact residual identity.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The additional inner products can change the objective difference.

</details>

<details>
<summary>Solution</summary>

**Solution.** The objective difference also contains $x^{\\mathsf T}e_d+y^{\\mathsf T}e_p$. Infeasible iterates do not supply literal LP bounds, even when complementarity is small. Keep and control all residuals separately.

</details>

### Exercise 9: Existence hypothesis
<a id="interior-point-methods-ex-9"></a>

Does one strictly feasible primal point alone prove every barrier problem has a finite maximiser?

<details>
<summary>Hint 1</summary>

**Hint.** An unbounded improving direction may remain.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The existence theorem also uses a strict dual bound.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. For example max x with only x>0 is unbounded even after adding a positive log term. The theorem uses strict dual feasibility to dominate the logarithm at infinity, together with a strict primal point to start a nonempty superlevel.

</details>

### Exercise 10: Polynomial claim
<a id="interior-point-methods-ex-10"></a>

What is missing from a proof that SPD Newton systems imply a polynomial-time interior-point method?

<details>
<summary>Hint 1</summary>

**Hint.** Solvability of one tangent equation is local algebra.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A full algorithm controls paths, steps, initialization and arithmetic.

</details>

<details>
<summary>Solution</summary>

**Solution.** It omits a prescribed central neighbourhood, parameter reduction and acceptance rules, a global iteration analysis, initialization, and numerical or bit-complexity assumptions. SPD alone establishes none of those complexity conclusions.

</details>


## Sources

Bertsimas and Tsitsiklis, *Introduction to Linear Optimization* ([author's book page](https://www.mit.edu/~dbertsim/books.html)), is a comparison reference for simplex, duality and network optimisation. Matoušek and Gärtner, [Understanding and Using Linear Programming](https://doi.org/10.1007/978-3-540-30717-4), gives a complementary geometric treatment. The exposition, calculations and exercise solutions here are original; external results are identified where their full proofs are not supplied. The barrier existence, exact gap and Newton-matrix proofs are given directly. General path-following complexity and infeasible-start embeddings are deeper cited topics, not proved here. The [convex interior-point chapter](../numerical-mathematics-optimization-by-structure/interior-point-methods.md) develops general convex barriers, proves the m/t gap under explicit existence hypotheses and derives equality-feasible Newton steps.

## Summary

Strict primal–dual feasibility gives a unique logarithmic-barrier point and an exact gap of n times mu. Its objective approaches the LP optimum under explicit existence hypotheses. Newton equations reduce to an SPD system when the constraint rows are independent, but positivity, conditioning and residuals still need separate control. A complete interior-point method adds a justified path strategy and global analysis.
`;export{e as default};