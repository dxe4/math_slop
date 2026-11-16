var e=`---
parent_id: book-linear-programming-optimisation
chapter_id: dual-simplex-parametric-programming
title: "Dual Simplex and Parametric Programming"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Dual Simplex and Parametric Programming

A changed right-hand side can make an old optimal basis infeasible without changing its reduced costs. Restarting from scratch discards useful information: the old multiplier still supplies an upper bound. Dual simplex preserves that dual feasibility while repairing negative basic values. It is the natural companion to primal simplex, which preserves primal feasibility while repairing improving reduced costs.

Read [simplex](simplex-method.md), [Farkas' lemma](complementary-slackness-farkas.md), and [sensitivity analysis](sensitivity-analysis.md). We use exact real arithmetic and maximisation standard form $Ax=b,x\\ge0$. Every sign in the ratio test below follows from that convention.

## Two complementary invariants

For an ordered basis $B=A_B$, write
$$
x_B=\\beta-Dx_N,\\qquad z=z_0+r_N^Tx_N,
$$
where $\\beta=B^{-1}b$, $D=B^{-1}A_N$, and
$r_N=c_N-A_N^TB^{-T}c_B$.

**Definition 10.1 (Dual-feasible dictionary).** A basis dictionary is dual feasible when $r_N\\le0$. Its associated vector $y=B^{-T}c_B$ then satisfies $A^Ty\\ge c$, including equality on basic columns. Its constant $z_0=b^Ty$ is an upper bound for every primal-feasible objective, even if some components of $\\beta$ are negative.

Primal simplex starts with $\\beta\\ge0$ and adjusts the basis until $r_N\\le0$, or finds an improving ray. Dual simplex starts with $r_N\\le0$ and adjusts until $\\beta\\ge0$, or finds infeasibility. If both inequalities hold, the matching primal and dual values certify optimality immediately.

The basic vector of a dual-feasible but primal-infeasible dictionary is not an admissible decision. Its objective constant is meaningful as a dual bound, not as an achieved primal value. Keeping that distinction explicit prevents a misleading iteration history.

## Deriving the dual ratio test

Choose a row $\\ell$ with $\\beta_\\ell<0$. Its equation is
$$
x_{B_\\ell}=\\beta_\\ell-\\sum_{j\\in N}d_{\\ell j}x_j.
$$
To make its right-hand side less negative by increasing a nonbasic variable, an eligible column must have $d_{\\ell j}<0$. A positive coefficient would decrease it further.

**Theorem 10.2 (A dual-feasible pivot).** Suppose $r_N\\le0$ and $\\beta_\\ell<0$. If some $d_{\\ell j}<0$, choose an entering index $e$ minimising
$$
\\theta=\\frac{r_e}{d_{\\ell e}}
\\quad\\text{among }d_{\\ell j}<0.
$$
Then $\\theta\\ge0$. Pivoting on $d_{\\ell e}$ gives a nonsingular new basis and keeps every reduced cost nonpositive. The entering basic value is $\\beta_\\ell/d_{\\ell e}>0$, and the objective constant changes by $\\theta\\beta_\\ell\\le0$.

*Proof.* Solve the leaving row for $x_e$:
$$
x_e=\\frac{\\beta_\\ell}{d_{\\ell e}}
-\\frac{x_{B_\\ell}}{d_{\\ell e}}
-\\sum_{j\\ne e}\\frac{d_{\\ell j}}{d_{\\ell e}}x_j.
$$
Substitute in the objective. The new reduced cost of the leaving variable is $-\\theta\\le0$, while for any other old nonbasic $j$ it is
$r'_j=r_j-\\theta d_{\\ell j}$. If $d_{\\ell j}\\ge0$, this is nonpositive because $r_j\\le0$ and $\\theta\\ge0$. If $d_{\\ell j}<0$, minimality gives $\\theta\\le r_j/d_{\\ell j}$; multiplication by the negative denominator gives $r_j-\\theta d_{\\ell j}\\le0$. Thus dual feasibility is preserved.

The pivot coefficient is nonzero, so the replacement-column determinant formula from chapter 4 gives a nonsingular basis. Setting new nonbasic variables to zero gives the stated positive entering value. The new constant is $z_0+r_e\\beta_\\ell/d_{\\ell e}=z_0+\\theta\\beta_\\ell$. $\\square$

Other basic values can remain negative or become negative. The theorem repairs the selected coordinate within the new basis, not every feasibility defect at once. A zero reduced cost can give $\\theta=0$, leaving the dual bound unchanged even though the basis changes. Those cases require care about cycling.

## A complete resource-change calculation

**Example 10.3 (Repairing the old optimal basis).** Start from the running model's optimum, then reduce the second capacity from5 to2:
$$
x+y+s_1=4,\\qquad2x+y+s_2=2,
\\qquad \\max(3x+2y).
$$
The old basis $(x,y)$ now gives
$$
x=-2+s_1-s_2,\\qquad
y=6-2s_1+s_2,\\qquad z=6-s_1-s_2.
$$
Both reduced costs remain $-1$, so the dictionary is dual feasible, but $x=-2$ is inadmissible. In the negative $x$ row, the transformed coefficient of $s_1$ is $-1$ and of $s_2$ is $1$. Thus $s_1$ is the only eligible entering variable, with ratio $(-1)/(-1)=1$.

Pivoting gives
$$
s_1=2+x+s_2,\\qquad y=2-2x-s_2,\\qquad
z=4-x-2s_2.
$$
The new basis $(s_1,y)$ has values $(2,2)$, both nonnegative, and reduced costs $-1,-2$. Therefore the optimum is $x=0,y=2$, value4. The old multiplier $(1,1)$ supplied upper bound6; the new multiplier $(0,2)$ supplies the attained upper bound4. The bound decreased without ever interpreting the infeasible old basic point as an achieved value.

Substitution into the original rows gives slack $s_1=2,s_2=0$, checking the meaning of every variable after the basis exchange. A tableau update alone would not detect a mislabeled reconstructed variable.

## When no eligible column exists

**Theorem 10.4 (Infeasibility from a negative row).** Suppose $\\beta_\\ell<0$ and $d_{\\ell j}\\ge0$ for every nonbasic $j$. Then the primal system is infeasible. More precisely,
$$
f=B^{-T}e_\\ell
$$
satisfies $A^Tf\\ge0$ and $b^Tf=\\beta_\\ell<0$, giving a Farkas certificate.

*Proof.* Multiplication gives $f^TA_B=e_\\ell^T\\ge0$ and $f^TA_N=e_\\ell^TB^{-1}A_N$, the nonnegative selected row. Thus $A^Tf\\ge0$. Also $f^Tb=e_\\ell^TB^{-1}b=\\beta_\\ell<0$. Farkas' lemma proves infeasibility. Directly, the dictionary row would require a nonnegative basic variable to equal a negative constant minus a nonnegative sum, which is impossible. $\\square$

**Example 10.5 (An impossible row).** Let $x_1+x_2=-1$, $x_1,x_2\\ge0$, with objective maximise $-x_2$. Basis $x_1$ gives $x_1=-1-x_2$ and $z=-x_2$. It is dual feasible, but the negative row has transformed coefficient1, so no eligible negative column exists. The certificate is $f=1$: its column products are $(1,1)$ and its right-hand-side product is $-1$. No pivot is needed to prove infeasibility.

A floating-point row with all small entries rounded to zero does not automatically meet the theorem. The certificate products must be checked in the original system with a meaningful sign margin or a verified error bound. Incorrectly excluding one genuinely negative coefficient can produce a false infeasibility claim.

## Termination, degeneracy, and implementation

**Proposition 10.6 (Strict dual improvement prevents repeats).** If every performed dual-simplex pivot has $\\theta>0$, the exact method cannot visit the same basis twice and must stop after finitely many pivots.

*Proof.* Since $\\beta_\\ell<0$, Theorem 10.2 gives a strict decrease in the dual objective constant. A fixed basis has a fixed constant for the fixed problem data. It therefore cannot recur. There are finitely many bases, so an infinite sequence is impossible. $\\square$

This does not prove finite termination when zero ratios occur. An anti-cycling rule, obtained for example by applying an appropriate finite pivoting rule to the dual formulation, is needed for a complete general termination guarantee. Arbitrary tie choices do not inherit the strict-decrease argument. Chapter5 states the cited finite-rule theorem and distinguishes it from the elementary progress results.

Revised dual simplex need not form $B^{-1}$. Solve $B^Tf=e_\\ell$ to obtain the selected transformed row through $f^Ta_j$, and solve $B^Ty=c_B$ for reduced costs. Factor updates make repeated solves cheaper, but should be checked for residual and conditioning problems. A practical method also needs a policy for nearly zero ratios, pivot magnitudes, and perturbations.

A reported stopping status should distinguish a feasible optimal basis, an exact or reliably verified infeasibility certificate, a numerical failure, and an iteration limit. These are different outputs. A work limit supplies no mathematical statement that the underlying problem is infeasible.

## Adding a constraint as a warm start

**Proposition 10.7 (One-row extension).** Suppose an optimal basis is available for a problem. Add a new inequality $g^Tx\\le\\gamma$ with slack $s\\ge0$ and zero objective coefficient. Retaining the old basic variables and adding $s$ gives a nonsingular augmented basis. Its old basic values stay unchanged, its new basic value is $\\gamma-g^Tx_*$, and it is dual feasible.

*Proof.* In the augmented equality system the basis matrix is
$$
\\widetilde B=
\\begin{pmatrix}B&0\\\\g_B^T&1\\end{pmatrix},
$$
whose determinant is $\\det B\\ne0$. The first equations give the old basic values, and the new row gives the stated slack. Extend the old dual vector by zero. It satisfies all old column inequalities and the new slack inequality, with the same reduced costs. Hence the augmented basis is dual feasible. $\\square$

If the new inequality is violated by $x_*$, the new slack is negative. Dual simplex can then repair primal feasibility or find a contradiction. The old optimum remains a valid upper bound for the restricted maximisation problem because adding a constraint only removes feasible choices. This is one reason dual simplex is useful in cutting-plane and integer-optimisation algorithms, although their additional search logic is beyond the present method.

## Parametric intervals and their events

**Definition 10.8 (One-parameter basis interval).** Let $b(t)=b_0+t d$ and $c(t)=c_0+t e$, with $A$ fixed. A basis remains primal and dual feasible on the intersection of the scalar intervals defined by
$$
B^{-1}(b_0+t d)\\ge0,
$$
$$
c_N(t)-A_N^TB^{-T}c_B(t)\\le0.
$$
Each component is affine in $t$. Their finite intersection is an interval, possibly empty, a singleton, unbounded, or all of $\\mathbb R$.

The endpoints occur when a basic value or reduced cost reaches zero, unless the interval is unbounded in that direction. At a boundary, several events can coincide. Continuing a parametric algorithm requires a justified pivot choice and attention to degeneracy; a single generic event formula does not cover every tied case.

**Example 10.9 (A feasibility boundary).** Maximise $x$ subject to $x+s=t$, $x,s\\ge0$. Basis $x$ gives $x=t-s$, $z=t-s$. Its reduced cost is always $-1$, and primal feasibility holds exactly for $t\\ge0$. Thus the optimum is $x=t,s=0$, value $t$ throughout that half-line. For $t<0$, the negative row has no eligible coefficient and proves infeasibility. At $t=0$ the basis is degenerate, but the one-sided value formula remains exact.

For a cost-parameter contrast, maximise $t x_1+x_2$ over $x_1+x_2\\le1,x\\ge0$. The optimum value is $\\max\\{t,1\\}$. The second-coordinate solution is optimal for $t\\le1$, the first-coordinate solution for $t\\ge1$, and the whole joining edge is optimal at $t=1$. Here primal feasibility never changes; reduced-cost signs identify the event, so primal simplex is the natural repair.

Parametric programming therefore studies a sequence of regions and certificates, not a promise that one old basis or one marginal value works forever. Record the parameter domain, the inequalities defining each valid region, the event at its boundary, and any exceptional tied cases.

## Joint parameter changes need not give affine values

Within a fixed optimal-basis interval, a right-hand-side-only or cost-only parameter gives an affine value. If both change, the exact formula can be quadratic. Write
$c_B(t)=p+tq$ and $B^{-1}b(t)=u+tv$. Then
$$
v_B(t)=(p+tq)^T(u+tv)
=p^Tu+t(p^Tv+q^Tu)+t^2q^Tv.
$$
This is an exact expansion while that basis remains primal and dual feasible. It follows directly from multiplying the two affine expressions, so no differentiability theorem is needed.

For example, let $x=t+1$, $x\\ge0$, and maximise $(t+2)x$. The problem is feasible exactly for $t\\ge-1$, and its sole feasible point is $x=t+1$. The value is $t^2+3t+2$ on that whole interval. The basis never changes, yet the value is not affine.

It is therefore inaccurate to describe every parametric LP value as piecewise linear without naming which data vary. The familiar piecewise-affine resource picture holds for a fixed objective and matrix, and the cost picture holds for a fixed feasible set. Simultaneous data movement can have a different form even before any breakpoint occurs.

A parametric report should retain the exact parameterisation alongside its basis conditions. Otherwise a correct local calculation can be mistaken for a theorem about a different family, or its quadratic term silently discarded as if it were a finite exact prediction.

## A certified bound can remain useful before feasibility is repaired

Dual simplex keeps an upper bound throughout its exact iterations. At a dictionary with nonpositive reduced costs, the associated equality multiplier is dual feasible even when some basic values are negative. Consequently the basic objective is an upper bound on every feasible original decision. It need not itself be attainable because the basic point is not yet primal feasible. This explains why an iteration log can contain a sequence of valid bounds before it contains a valid incumbent decision.

The direction of bound movement follows from the dual ratio test. Let the chosen basic row have negative right-hand side, and let the eligible pivot coefficient be negative in the convention $x_B=\\beta-Dx_N$. Increasing the entering variable to remove that negative basic value requires the positive quantity obtained by dividing two negative numbers. The old objective changes by its nonpositive reduced cost times that positive quantity, so the new basic objective cannot increase. Dual simplex thus tightens a maximisation upper bound downward while restoring primal feasibility. Zero reduced cost can leave the bound unchanged, just as primal degeneracy can leave a primal bound unchanged.

**Worked application: an added capacity cut.** Suppose the current optimal decision violates a newly added resource inequality. Introduce its slack as a new basic variable. At the old decision, that slack is negative, so primal feasibility fails. The new slack has zero original objective coefficient. Keeping the previous dual multipliers and assigning multiplier zero to the added row gives a feasible dual vector for the enlarged problem, with the old upper bound unchanged. This constructs the dual-feasible starting point for reoptimisation. The old decision must not be retained as a feasible incumbent under the new constraint.

If a separately known feasible plan for the enlarged problem has value $L$, and the current dual bound is $U$, the new optimum lies between them. The gap is a valid stopping quantity even before an optimal basis is obtained, provided both certificates concern the same enlarged model. If the added row makes the problem infeasible, no such feasible lower plan exists. The no-eligible-column alternative then produces a contradiction certificate instead of an optimum.

This viewpoint is especially useful in parametric work. At an event where one basic value reaches zero, the old basis can be both primal and dual feasible at the exact breakpoint. Immediately beyond it, the same multiplier may still provide a valid bound although the basic point has become infeasible. A dual pivot repairs the representation for the adjacent interval. The event does not imply a discontinuity of the optimal value; often it marks a change of slope or a change of optimal basis at a continuous join.

All these statements rely on exact sign conventions. If a rounded implementation reports a small positive reduced cost while claiming dual feasibility, the upper-bound argument needs a correction using variable bounds or a verified multiplier repair. The word warm start describes reuse of useful algebraic information; it does not waive any requirement for the final mathematical certificate.

## Exercises

### Exercise 10.1 — A dual ratio
<a id="dual-simplex-parametric-programming-ex-1"></a>

A negative basic row has transformed coefficients(-2,-1,3) and reduced costs(-4,-3,-1). Choose an eligible entering variable.

<details>
<summary>Hint 1</summary>

**Hint.** Only negative row coefficients qualify.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare the nonnegative ratios.

</details>
<details>
<summary>Solution</summary>

**Solution.** The eligible ratios are(-4)/(-2)=2 and(-3)/(-1)=3. The first variable enters with θ=2. The third coefficient is positive and is excluded from the dual ratio test.

</details>

### Exercise 10.2 — New reduced costs
<a id="dual-simplex-parametric-programming-ex-2"></a>

Using θ=2 in the preceding data, compute the new reduced cost of the second variable and of the leaving variable.

<details>
<summary>Hint 1</summary>

**Hint.** Use r'_j=r_j-θd_lj.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The leaving variable has cost -θ.

</details>
<details>
<summary>Solution</summary>

**Solution.** The second reduced cost is -3-2(-1)=-1. The leaving variable has reduced cost -2. Both are nonpositive, as required for dual feasibility.

</details>

### Exercise 10.3 — A dual-bound change
<a id="dual-simplex-parametric-programming-ex-3"></a>

A selected negative basic value is -3 and the minimum dual ratio is0.5. Find the new bound constant from z0=10.

<details>
<summary>Hint 1</summary>

**Hint.** Use the exact constant-change formula.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** This is a bound, not necessarily an achieved primal value.

</details>
<details>
<summary>Solution</summary>

**Solution.** The new constant is10+0.5(-3)=8.5. It is a smaller valid dual upper bound. Other basic values may remain infeasible, so it cannot yet be called an attained primal objective.

</details>

### Exercise 10.4 — No eligible column
<a id="dual-simplex-parametric-programming-ex-4"></a>

A dual-feasible dictionary has $x_2=-2-3x_4-x_5$ with all variables nonnegative. Prove infeasibility.

<details>
<summary>Hint 1</summary>

**Hint.** The right-hand side is always negative.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Relate the row to the Farkas multiplier.

</details>
<details>
<summary>Solution</summary>

**Solution.** For x4,x5≥0, the right-hand side is at most -2, contradicting x2≥0. In a basis dictionary the corresponding row fᵀ=e_lᵀB⁻¹ has fᵀA≥0 and fᵀb=-2, an explicit Farkas certificate.

</details>

### Exercise 10.5 — A one-row extension
<a id="dual-simplex-parametric-programming-ex-5"></a>

Explain why an added violated inequality creates a negative new basic slack but preserves the old dual feasibility.

<details>
<summary>Hint 1</summary>

**Hint.** Use multiplier zero on the added row.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Write the slack at the old point.

</details>
<details>
<summary>Solution</summary>

**Solution.** The augmented basic slack is γ-gᵀx*, negative when the new inequality is violated. Extending the old multiplier by zero preserves every old dual inequality and gives zero for the new slack constraint. Thus the new basis is dual feasible but not primal feasible.

</details>

### Exercise 10.6 — A parameter interval
<a id="dual-simplex-parametric-programming-ex-6"></a>

A basis has β(t)=(2+t,3-2t) and fixed nonpositive reduced costs. Find its optimality interval.

<details>
<summary>Hint 1</summary>

**Hint.** Impose componentwise nonnegativity.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Intersect the two inequalities.

</details>
<details>
<summary>Solution</summary>

**Solution.** We need t≥-2 and t≤3/2. Hence the same basis certifies optimality on[-2,3/2], including endpoints where it may become degenerate. Outside this interval the old basis is infeasible, not necessarily the entire problem.

</details>

### Exercise 10.7 — Cost and RHS events
<a id="dual-simplex-parametric-programming-ex-7"></a>

Why does a cost-only change preserve primal feasibility of a fixed basis, while an RHS-only change preserves its reduced costs?

<details>
<summary>Hint 1</summary>

**Hint.** Inspect the formulas for β and r.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Hold A fixed throughout.

</details>
<details>
<summary>Solution</summary>

**Solution.** The basic vector β=B⁻¹b does not depend on c, and the reduced costs cN-A_NᵀB⁻ᵀcB do not depend on b. Therefore the respective properties persist, though the other feasibility condition may fail.

</details>

### Exercise 10.8 — A zero dual ratio
<a id="dual-simplex-parametric-programming-ex-8"></a>

If an eligible entering variable has reduced cost zero, what happens to the bound and the finite-termination proof?

<details>
<summary>Hint 1</summary>

**Hint.** Its ratio has numerator zero.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Strict decrease was the key hypothesis.

</details>
<details>
<summary>Solution</summary>

**Solution.** The ratio θ is zero and the bound constant does not decrease in that pivot. The basis may change, but the strict-decrease argument cannot exclude a repeated basis. An appropriate anti-cycling policy is required for a general finite guarantee.

</details>

### Exercise 10.9 — The resource repair
<a id="dual-simplex-parametric-programming-ex-9"></a>

Verify the final point x=0,y=2 for Example 10.3 and its dual upper bound.

<details>
<summary>Hint 1</summary>

**Hint.** Compute both original resource slacks.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use multipliers(0,2).

</details>
<details>
<summary>Solution</summary>

**Solution.** The resource values are2≤4 and2≤2, giving slacks2 and0. The objective is4. Dual multipliers(0,2) satisfy u+2v=4≥3 and u+v=2≥2, with value4u+2v=4. Matching feasibility proves optimality.

</details>

### Exercise 10.10 — A cost breakpoint
<a id="dual-simplex-parametric-programming-ex-10"></a>

For maximise tx1+x2 over x1+x2≤1,x≥0, prove the claimed value for every real t.

<details>
<summary>Hint 1</summary>

**Hint.** Compare each coefficient with max(t,1).

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Exhibit a point attaining that bound.

</details>
<details>
<summary>Solution</summary>

**Solution.** If t≤1, the objective is at most x1+x2≤1 and (0,1) attains1. If t≥1, it is at most t(x1+x2)≤t and (1,0) attains t. At t=1 the whole edge is optimal. Thus the value is max(t,1).

</details>

## Sources

- Dimitris Bertsimas and John N. Tsitsiklis, *Introduction to Linear Optimization*, Athena Scientific, 1997. [Author book listing](https://web.mit.edu/jnt/www/home.html) and [MIT course reading guide](https://ocw.mit.edu/courses/15-093j-optimization-methods-fall-2009/pages/readings/).
- Jiří Matoušek and Bernd Gärtner, [Understanding and Using Linear Programming](https://doi.org/10.1007/978-3-540-30717-4), Springer, 2007.

The exposition, proofs, and examples are original to Euler. The references provide further reading; no external text or exercise collection is reproduced.

## Summary

Dual simplex preserves reduced-cost feasibility and repairs negative basic values through a derived ratio test. A negative row without an eligible column supplies a Farkas infeasibility certificate. Strict dual progress prevents repeated bases, while zero ratios require anti-cycling care. Parametric intervals identify where one basis remains valid and which feasibility condition fails at a boundary.
`;export{e as default};