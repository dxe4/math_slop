var e=`---
parent_id: book-linear-programming-optimisation
chapter_id: simplex-method
title: "The Simplex Method"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# The Simplex Method

The simplex method replaces one basis column at a time. Each step has an algebraic meaning, a feasibility test, and an objective calculation. Its usefulness comes from the certificates produced at its stopping conditions: a nonpositive reduced-cost row proves a global upper bound, and a suitable direction proves objective unboundedness.

Read the [standard-form and BFS chapter](standard-form-basic-feasible-solutions.md) first. We use maximisation with $Ax=b,x\\ge0$ and assume $A$ has full row rank. The method in this chapter starts from a feasible basis. Finding such a start is a separate problem, solved by the two-phase method in chapter 6.

## A dictionary is an identity

Let $B$ be an ordered basis and $N$ its complement. Define
$$
\\beta=A_B^{-1}b,\\qquad D=A_B^{-1}A_N,\\qquad
r_N^T=c_N^T-c_B^TA_B^{-1}A_N.
$$
Then every point satisfying the equalities obeys
$$
x_B=\\beta-Dx_N,\\qquad
c^Tx=z_0+r_N^Tx_N,\\quad z_0=c_B^T\\beta.
$$
The current basic point has $x_N=0,x_B=\\beta$. Primal feasibility means $\\beta\\ge0$.

**Definition 4.1 (Reduced cost and entering column).** A nonbasic variable $j$ has reduced cost $r_j=c_j-c_B^TA_B^{-1}a_j$. For our maximisation convention, a positive reduced cost is a potential improving variable. If it is increased from zero while other nonbasic variables stay zero, its equality-feasible direction is
$$
x_j(t)=t,\\qquad x_B(t)=\\beta-t d,\\qquad d=A_B^{-1}a_j.
$$

The word “potential” matters: a degenerate basis may permit no positive step, even when $r_j>0$. The objective identity says its value changes by $t r_j$ along the direction; feasibility determines which $t$ are permitted.

**Theorem 4.2 (Optimality certificate).** If $\\beta\\ge0$ and every nonbasic reduced cost is nonpositive, the current BFS is globally optimal.

*Proof.* For any feasible $x$, its nonbasic coordinates satisfy $x_N\\ge0$. The identity gives $c^Tx=z_0+r_N^Tx_N\\le z_0$. The current point is feasible and attains $z_0$, proving the maximum. $\\square$

No claim about local derivatives is needed. This is a global inequality valid for every feasible point. A basis can therefore certify optimality even when the feasible set is unbounded. The reduced costs encode a weighted combination of equations and nonnegativity constraints; chapter 7 interprets the associated weights as a dual solution.

## A complete two-pivot calculation

**Example 4.3 (Solving the running resource model).** Introduce slacks in
$$
x+y+s_1=4,\\qquad 2x+y+s_2=5,
\\qquad x,y,s_1,s_2\\ge0,
$$
and maximise $z=3x+2y$. Start with the slack basis $(s_1,s_2)$:
$$
s_1=4-x-y,\\quad s_2=5-2x-y,\\quad z=3x+2y.
$$
Both reduced costs are positive. Choose $x$ to enter. Its basic-column direction is $(1,2)^T$, so nonnegativity permits
$t\\le4$ from $s_1$ and $t\\le5/2$ from $s_2$. Thus $s_2$ leaves at $t=5/2$.

Solve the second equation for $x$ and substitute:
$$
x=\\tfrac52-\\tfrac12y-\\tfrac12s_2,\\qquad
s_1=\\tfrac32-\\tfrac12y+\\tfrac12s_2,\\qquad
z=\\tfrac{15}2+\\tfrac12y-\\tfrac32s_2.
$$
The new BFS is $x=5/2,s_1=3/2,y=s_2=0$. The objective is $15/2$.

Now $y$ has positive reduced cost $1/2$. Increasing it decreases $x$ and $s_1$ at rate $1/2$. Their blocking ratios are5 and3, so $s_1$ leaves at $y=3$. Pivoting gives
$$
y=3-2s_1+s_2,\\qquad x=1+s_1-s_2,\\qquad
z=9-s_1-s_2.
$$
The basis is $(x,y)$, with basic values $(1,3)$. Both nonbasic reduced costs are $-1$, so Theorem 4.2 certifies global optimality. Reconstructing the original point verifies both resource equalities and objective9.

Every displayed dictionary is an identity, not just a list of current values. This is why it supports both the next pivot and the eventual certificate. Losing a variable label during a tableau update can preserve plausible arithmetic while destroying that meaning.

## The ratio test and basis exchange

**Theorem 4.4 (Feasible pivot).** Suppose $\\beta\\ge0$, $r_j>0$, and $d=A_B^{-1}a_j$ has at least one positive entry. The largest feasible step with other nonbasic variables held at zero is
$$
\\theta=\\min_{d_i>0}\\frac{\\beta_i}{d_i}.
$$
Choose a row $\\ell$ attaining the minimum. Replacing its basis column by $a_j$ gives a nonsingular new basis, a feasible new basic point, and objective change $\\theta r_j$.

*Proof.* Each row requires $\\beta_i-t d_i\\ge0$. For $d_i>0$ this is $t\\le\\beta_i/d_i$; for $d_i=0$ it imposes no new bound, and for $d_i<0$ it becomes easier as $t$ increases. Thus the minimum gives exactly the feasible interval $0\\le t\\le\\theta$. At the endpoint, component $\\ell$ is zero.

Because $a_j=A_Bd$, the new basis is $A_B E$, where $E$ is the identity with column $\\ell$ replaced by $d$. Expanding its determinant along the unchanged columns gives $\\det E=d_\\ell>0$. Thus the new basis is nonsingular. The endpoint has all its complementary coordinates zero, including the leaving variable, so it is precisely the new basic solution. Feasibility was proved by the row inequalities. The objective identity gives the change. $\\square$

Only positive entries of $d$ belong in the ratio test. Dividing by a negative entry produces a bound in the opposite direction, and a zero entry cannot be divided into. A tie can permit several leaving choices. If the minimum is zero, the pivot changes the basis but not the point or objective. The next chapter examines why those degenerate steps can cycle.

A pivot can be implemented with row operations or with factor solves. The latter avoids storing a dense tableau when the original matrix is large or sparse. Both implementations must represent the same algebraic basis exchange; their arithmetic costs and numerical behaviour differ.

## Detecting unboundedness

**Theorem 4.5 (Improving-ray certificate).** Suppose the current basis is feasible, $r_j>0$, and $d=A_B^{-1}a_j\\le0$. Then the objective is unbounded above.

*Proof.* For every $t\\ge0$, set $x_j=t$, keep other nonbasic variables zero, and set $x_B=\\beta-t d$. Since $\\beta\\ge0$ and $-d\\ge0$, all components remain nonnegative. The equations are preserved by construction. The objective is $z_0+t r_j$, which tends to infinity. $\\square$

This is an exact certificate consisting of a feasible point and an improving feasible direction. A numerical failure to find a leaving row is not automatically such a certificate: a tiny positive entry of $d$ could have been discarded by an unjustified tolerance, and an inaccurate solve could have the wrong signs. Verify the direction against the original matrix and domains.

**Example 4.6 (No blocking row).** Maximise $x_2$ subject to
$$
x_1-x_2=1,\\qquad x_1,x_2\\ge0.
$$
Basis column1 gives $x_1=1+x_2$ and objective $z=x_2$. The entering column for $x_2$ has $d=-1$ and reduced cost1. There is no positive ratio-test coefficient. The ray $(x_1,x_2)=(1+t,t)$ is feasible for all $t\\ge0$ and its value $t$ is unbounded.

The same constraint with objective maximise $-x_2$ would instead stop immediately at $(1,0)$, with reduced cost $-1$. An unbounded feasible set does not force an unbounded optimum.

## Exact termination and its hypotheses

**Theorem 4.7 (Finite termination without degenerate BFSs).** Suppose every feasible basis of the problem is nondegenerate. Starting from a feasible basis, repeatedly choose a positive reduced cost and apply the ratio test. The exact-arithmetic method terminates after finitely many pivots, either with an optimality certificate or an improving ray.

*Proof.* At every feasible basis all basic values are strictly positive. Therefore a finite ratio-test minimum is strictly positive, and Theorem 4.4 gives a strict objective increase. A previously visited BFS cannot recur, because its objective value is fixed. There are finitely many bases, at most $\\binom nm$, so infinitely many pivots are impossible. At a stopping state either no reduced cost is positive, giving Theorem 4.2, or a positive reduced cost has no blocker, giving Theorem 4.5. $\\square$

This theorem is not a proof for degenerate problems. At a zero step, the strict increase argument fails. An anti-cycling rule such as Bland's rule restores finite termination under its stated exact assumptions; its precise statement and primary reference appear in chapter 5. Arbitrary choices among positive reduced costs and tied leaving variables do not inherit that theorem.

The finite number of possible bases is not a practical efficiency guarantee. A large finite number can still be enormous, and simplex pivot rules have very different behaviour. This chapter proves correctness of transitions and certificates, not a universal polynomial bound.

**Example 4.8 (A flat edge and a zero reduced cost).** Maximise $x_1+x_2$ subject to $x_1+x_2+s=2$, with all variables nonnegative. Basis $x_1$ gives
$$
x_1=2-x_2-s,\\qquad z=2-s.
$$
The reduced cost of $x_2$ is zero. Setting $s=0$ and varying $0\\le x_2\\le2$ gives an entire optimal segment. The positive maximum step2 reaches the different optimum $(0,2,0)$.

A zero reduced cost alone does not prove a different optimal point exists. For $x_1+x_2=0$ with nonnegative variables and zero objective, every feasible direction from the unique point zero is blocked immediately. There can be a zero reduced cost at a degenerate basis with no nontrivial optimal edge.

## A mathematical algorithm outline

~~~text
start with a verified feasible basis B
solve for beta, reduced costs, and the objective constant
if every reduced cost is nonpositive: return the basic point and bound
choose an entering variable with positive reduced cost
solve B d = entering_column
if d has no positive component: return the basic point and improving ray
choose a minimum nonnegative ratio among positive components
exchange the chosen leaving column with the entering column
repeat with an appropriate anti-cycling policy if degeneracy is possible
~~~

This is pseudocode for the exact mathematical method. A finite-precision solver also needs scaling, factorization updates, pivot thresholds, residual checks, and a documented status policy. A reported “optimal” point should be accompanied by primal feasibility and the reduced-cost or dual-feasibility evidence used to support it.

Near-zero reduced costs and basic values are particularly sensitive. An arbitrary absolute threshold can hide a genuine improving direction or misclassify a feasible point. Componentwise feasibility residuals should be compared with the magnitudes and uncertainty of their rows. Increasing precision or reconstructing a small rational certificate can be appropriate when a formal conclusion is needed.

The following two chapters address two distinct missing pieces. Degeneracy concerns progress after a feasible basis is available. Phase I concerns obtaining that basis in the first place, or certifying that none exists. Neither problem is solved by simply running the ratio test on an arbitrary initial tableau.

## A strict reduced-cost margin controls near-optimal points

**Proposition 4.9 (Gap and distance).** Suppose a feasible basis has every nonbasic reduced cost $r_j\\le-\\eta$ for some $\\eta>0$. Its BFS $x_*$ is the unique optimiser. For every feasible $x$,
$$
\\|x_N\\|_1\\le\\frac{z_0-c^Tx}{\\eta},
\\qquad
\\|x-x_*\\|_1\\le
\\frac{1+\\|D\\|_1}{\\eta}(z_0-c^Tx).
$$
If there are no nonbasic variables, the sole equality-feasible point is already unique.

*Proof.* The objective identity gives
$z_0-c^Tx=-r_N^Tx_N\\ge\\eta\\sum_jx_j=\\eta\\|x_N\\|_1$.
The dictionary gives $x_B-\\beta=-Dx_N$, so
$\\|x-x_*\\|_1\\le\\|Dx_N\\|_1+\\|x_N\\|_1
\\le(1+\\|D\\|_1)\\|x_N\\|_1$.
Combining proves both bounds. At zero gap, the first forces $x_N=0$, and the nonsingular basis equations force $x_B=\\beta$. $\\square$

This supplies more than a value certificate: a strict margin and a controlled transformed matrix turn a small objective gap into a distance bound. If the margin is tiny or $\\|D\\|_1$ large, the bound can be weak, reflecting a nearly flat objective or a sensitive representation.

The hypotheses concern exact feasible points. A small reported objective gap at an infeasible iterate does not satisfy this theorem. A solver must first justify feasibility or supply additional residual terms; the geometric distance estimate cannot bypass that obligation.

**Example 4.10 (A zero step can expose an existing optimum).** Maximise $x_2$ subject to
$$
x_1+x_2=0,\\qquad x_2+x_3=1,\\qquad x\\ge0.
$$
The basis $(x_1,x_3)$ gives $x_1=-x_2$, $x_3=1-x_2$, and $z=x_2$. Its basic point is $(0,0,1)$ and the entering reduced cost is positive. Nevertheless the ratio test gives step zero because the first basic value is already zero. Pivoting replaces $x_1$ by $x_2$ and gives $x_2=-x_1$, $x_3=1+x_1$, and $z=-x_1$. The new reduced cost is nonpositive, certifying optimality without changing the point.

Indeed, nonnegativity and the first equality force $x_1=x_2=0$, so the original point was already the sole feasible decision. A positive reduced cost at a degenerate representation therefore does not by itself prove that its point is suboptimal. The zero pivot changes the algebraic certificate rather than improving the decision.

## Reading the entire optimal face from a dictionary

At a certified optimal dictionary, every nonbasic reduced cost is nonpositive. The objective identity provides more information than the value alone. A feasible point has the same objective as the basic optimum exactly when every nonbasic coordinate with strictly negative reduced cost is zero. To prove necessity, move all terms to obtain a sum of nonnegative products: each minus reduced cost times its nonnegative coordinate. A zero sum forces every positive coefficient's coordinate to vanish. Sufficiency follows by substitution into the same identity.

Thus the optimal face can be described without another optimisation: retain the dictionary equalities and nonnegativity, and set those strictly penalised nonbasic variables to zero. Coordinates with zero reduced cost may vary only as far as the basic-variable inequalities permit. They are candidates for alternate optimal decisions, rather than automatic evidence that a distinct decision exists.

**Worked example: a complete optimal segment.** Maximise the sum of two nonnegative variables subject to their sum being at most one. With a nonnegative slack, choose the first variable as basic. Its dictionary is one minus the second variable minus the slack, and the objective is one minus the slack. The slack has strictly negative reduced cost, while the second variable has zero reduced cost. Every optimum therefore has zero slack and can be written as the first variable equal to one minus the second, with the second between zero and one. The whole segment is optimal, including its two endpoint basic solutions.

By contrast, in the equations $x_1+x_2=0$ with both variables nonnegative and zero objective, the dictionary for basic $x_1$ is $x_1=-x_2$. The nonbasic reduced cost is zero, yet feasibility forces the second variable to zero too. There is only one feasible point. A zero reduced cost did not create a feasible positive direction.

This also distinguishes three useful questions. Does the optimal objective have another basic representation? Does a different optimal decision exist? Is there a whole positive-dimensional optimal face? Degeneracy can make the first answer yes while the other two are no. When an eligible zero-cost direction has a positive allowable step, it directly exhibits distinct optima. When it has only a zero step, further basis changes or the face description are needed.

The face description is exact for the declared dictionary and exact signs. With rounded reduced costs, treating a small negative number as zero can enlarge the claimed face incorrectly. A numerical report should instead give objective bounds or explicitly describe a tolerance-defined near-optimal region. This preserves the distinction between algebraic equality and a practical decision whose objective is merely close to best.

## Exercises

### Exercise 4.1 — An optimal dictionary
<a id="simplex-method-ex-1"></a>

A feasible dictionary has $z=12-2x_4-5x_5$. Prove an upper bound and state what is still needed to identify the original optimiser.

<details>
<summary>Hint 1</summary>

**Hint.** Use nonnegativity.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A dictionary constant is attained at its verified basic point.

</details>
<details>
<summary>Solution</summary>

**Solution.** Every feasible point has $z\\le12$. The current verified basic point has $x_4=x_5=0$ and attains12, so it is optimal. Its original coordinates must still be reconstructed from the basic dictionary and checked against the stated model.

</details>

### Exercise 4.2 — A ratio test
<a id="simplex-method-ex-2"></a>

Let $\\beta=(6,2,5)^T$ and $d=(2,-1,1)^T$. Find the largest feasible entering step and leaving row.

<details>
<summary>Hint 1</summary>

**Hint.** Use only positive entries of d.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare6/2 and5/1.

</details>
<details>
<summary>Solution</summary>

**Solution.** The positive-entry ratios are3 and5; the negative second entry gives no upper bound. Thus $\\theta=3$ and row1 leaves. The new old-basic values are $(0,5,2)^T$, all nonnegative.

</details>

### Exercise 4.3 — A zero step
<a id="simplex-method-ex-3"></a>

Repeat the ratio test with $\\beta=(0,2)^T$ and $d=(1,1)^T$. What changes?

<details>
<summary>Hint 1</summary>

**Hint.** The first ratio is zero.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Distinguish the basis from its point.

</details>
<details>
<summary>Solution</summary>

**Solution.** The minimum is zero, so row1 may leave with no movement in the full feasible vector and no objective increase. The entering column still gives a nonsingular basis exchange because the pivot coefficient is positive. This is a degenerate pivot.

</details>

### Exercise 4.4 — Unbounded certificate
<a id="simplex-method-ex-4"></a>

A feasible basis has $\\beta=(1,3)^T$, entering direction $d=(-2,0)^T$, and reduced cost4. Prove unboundedness.

<details>
<summary>Hint 1</summary>

**Hint.** Write the old-basic variables as functions of t.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Check all signs for t≥0.

</details>
<details>
<summary>Solution</summary>

**Solution.** The old basics become $(1+2t,3)^T$ and the entering variable is t, so the point stays feasible for all $t\\ge0$. Its objective is $z_0+4t\\to\\infty$, giving an improving-ray certificate.

</details>

### Exercise 4.5 — Checking a pivot identity
<a id="simplex-method-ex-5"></a>

Starting with $s_1=4-x-y$, $s_2=5-2x-y$, solve for x and obtain the first pivot dictionary.

<details>
<summary>Hint 1</summary>

**Hint.** Use the second row.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Substitute into both the first row and objective.

</details>
<details>
<summary>Solution</summary>

**Solution.** From the second row, $x=5/2-y/2-s_2/2$. Substitution gives $s_1=3/2-y/2+s_2/2$ and $3x+2y=15/2+y/2-3s_2/2$. These are identities, not only values at the new BFS.

</details>

### Exercise 4.6 — Basis nonsingularity
<a id="simplex-method-ex-6"></a>

Explain why replacing basis columnℓ by $A_Bd$ is nonsingular when $d_\\ell\\ne0$.

<details>
<summary>Hint 1</summary>

**Hint.** Factor the new matrix as $A_BE$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Expand the determinant of the replacement-column identity matrix.

</details>
<details>
<summary>Solution</summary>

**Solution.** The replacement matrix is $A_BE$, where E equals the identity except columnℓ is d. Its determinant is $\\det(A_B)d_\\ell$, nonzero under the hypotheses. Thus a nonzero pivot coefficient is exactly the algebraic requirement.

</details>

### Exercise 4.7 — Alternative optima
<a id="simplex-method-ex-7"></a>

For $x_1+x_2+s=2$, maximise $x_1+x_2$. Give every optimal point and a certificate.

<details>
<summary>Hint 1</summary>

**Hint.** The objective equals2-s.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the remaining equality when s=0.

</details>
<details>
<summary>Solution</summary>

**Solution.** The upper bound is2, attained exactly when s=0. Then $x_1+x_2=2$ with both nonnegative, giving $(t,2-t,0)$ for $0\\le t\\le2$. The zero reduced cost supports an actual feasible edge here.

</details>

### Exercise 4.8 — A zero-cost warning
<a id="simplex-method-ex-8"></a>

Give a standard-form example with a unique feasible point and a zero reduced cost.

<details>
<summary>Hint 1</summary>

**Hint.** Use a zero right-hand side and nonnegative variables.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Let the objective be constant.

</details>
<details>
<summary>Solution</summary>

**Solution.** For $x_1+x_2=0$, $x\\ge0$, the only point is zero. With zero objective, basis1 has reduced cost0 for x2, but every positive step is infeasible. Thus zero reduced cost need not imply a distinct optimal point.

</details>

### Exercise 4.9 — Finite versus efficient
<a id="simplex-method-ex-9"></a>

Why does the finite-bases argument not establish polynomial runtime?

<details>
<summary>Hint 1</summary>

**Hint.** Estimate how many subsets can be bases.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The input includes dimensions and bit lengths.

</details>
<details>
<summary>Solution</summary>

**Solution.** There can be up to $\\binom nm$ basis index sets, which grows exponentially for suitable dimension families. Strict improvement prevents repeats but does not bound the visited count by a polynomial. Arithmetic size and numerical work also require separate analysis.

</details>

### Exercise 4.10 — A certificate audit
<a id="simplex-method-ex-10"></a>

A routine reports a positive reduced cost and no eligible blocker after discarding all $d_i<10^{-8}$. What must be checked before claiming unboundedness?

<details>
<summary>Hint 1</summary>

**Hint.** A small positive coefficient is still a blocker exactly.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Verify the original direction equations and domains.

</details>
<details>
<summary>Solution</summary>

**Solution.** Check whether any discarded coefficient is actually positive, whether the basis solve is accurate, and whether the reconstructed full direction preserves Ax=b and every sign restriction. Exact unboundedness requires a genuine feasible ray with positive objective slope; a thresholded search result alone does not establish it.

</details>

## Sources

- Dimitris Bertsimas and John N. Tsitsiklis, *Introduction to Linear Optimization*, Athena Scientific, 1997. [Author book listing](https://web.mit.edu/jnt/www/home.html) and [MIT course reading guide](https://ocw.mit.edu/courses/15-093j-optimization-methods-fall-2009/pages/readings/).
- Jiří Matoušek and Bernd Gärtner, [Understanding and Using Linear Programming](https://doi.org/10.1007/978-3-540-30717-4), Springer, 2007.

The exposition, proofs, and examples are original to Euler. The references provide further reading; no external text or exercise collection is reproduced.

## Summary

A simplex dictionary separates feasibility from objective improvement. The ratio test gives a valid basis exchange, nonpositive reduced costs certify optimality, and an unblocked positive reduced cost certifies an improving ray. Strict improvement proves finite termination for nondegenerate problems; degeneracy and feasible initialisation require the next two chapters' additional methods.
`;export{e as default};