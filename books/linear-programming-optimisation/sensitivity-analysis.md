
# Sensitivity Analysis

An optimal solution belongs to one set of data. Sensitivity analysis asks which conclusions survive a change in those data and how the optimal value moves. The answer is often exactly linear within a region where one basis remains feasible and optimal. Outside that region, a different basis or a different feasibility status may be required.

Read [duality](duality-theory.md) and [complementarity](complementary-slackness-farkas.md). We use fixed $A$ and the standard maximisation convention unless stated otherwise. A change in a coefficient matrix requires an additional analysis; it cannot be treated as merely another change in the right-hand side.

## What an optimal basis supplies

For a basis matrix $B=A_B$, write
$$
\beta=B^{-1}b,\qquad y=B^{-T}c_B,\qquad
r_N=c_N-A_N^Ty.
$$
When $\beta\ge0$ and $r_N\le0$, the basis is primal feasible and its associated multiplier is dual feasible. Its primal and dual values coincide:
$c_B^TB^{-1}b=b^Ty$.

**Definition 9.1 (Optimal-basis region).** For a fixed basis and fixed matrix $A$, its optimal-basis region consists of the data $(b,c)$ satisfying
$$
B^{-1}b\ge0,\qquad c_N-A_N^TB^{-T}c_B\le0.
$$
The region is defined by linear inequalities in $b$ and $c$, although the value as both vary simultaneously is generally bilinear.

These are sufficient and necessary conditions for this basis to be both primal and dual feasible. They do not say that it is the only optimal basis. At degenerate points a different representation can be useful, and a primal-optimal point represented by a non-dual-feasible basis is not covered by these particular conditions.

## Right-hand-side changes with fixed costs

**Theorem 9.2 (Exact local resource sensitivity).** Suppose $B$ is primal and dual feasible for $(A,b,c)$. For new right-hand side $b+\Delta b$, if
$$
B^{-1}(b+\Delta b)\ge0,
$$
the same basis remains optimal and
$$
v(b+\Delta b)-v(b)=y^T\Delta b,\qquad y=B^{-T}c_B.
$$

*Proof.* The new basic vector is feasible by the hypothesis. The dual inequalities depend on $A,c$, not $b$, so the old $y$ remains dual feasible. Both new values equal
$c_B^TB^{-1}(b+\Delta b)=y^T(b+\Delta b)$. Subtract the old equal value $y^Tb$. $\square$

The formula is exact on the stated region, not merely a first-order approximation. Its limit is feasibility of the old basis. If a basic variable becomes negative, the old multiplier still gives an upper bound, but need not equal the new optimum.

**Example 9.3 (A full parameter interval).** Keep the running model's first capacity4 and change the second to $t$:
$$
\max(3x+2y),\quad x+y\le4,\quad2x+y\le t,\quad x,y\ge0.
$$
With basis $(x,y)$, the two tight equations give $x=t-4$, $y=8-t$. The basis is feasible exactly for $4\le t\le8$. Its multipliers remain $(1,1)$, so the value is $4+t$ on that entire interval. At the original $t=5$, the value is9 and each unit increase in $t$ changes it by one while this basis remains feasible.

For $0\le t\le4$, the solution $x=0,y=t$ has value $2t$. The inequality $3x+2y\le2(2x+y)\le2t$ proves optimality. For $t\ge8$, the solution $x=4,y=0$ has value12, and $3x+2y\le3(x+y)\le12$ proves optimality. For $t<0$, nonnegative $x,y$ make $2x+y\ge0$, so the model is infeasible. Thus
$$
v(t)=
\begin{cases}
2t,&0\le t\le4,\\
t+4,&4\le t\le8,\\
12,&t\ge8.
\end{cases}
$$
Extending the local slope one beyond $[4,8]$ would give an incorrect value.

At an interval endpoint, the old basis may still be feasible and optimal even though one basic value is zero. Its formula is valid up to that endpoint. A derivative across it, however, requires comparing adjacent regions.

## Cost changes with fixed resources

**Theorem 9.4 (Exact cost region).** With $A,b$ fixed and a feasible basis $B$, new costs $c+\Delta c$ keep that basis optimal whenever
$$
c_N+\Delta c_N-A_N^TB^{-T}(c_B+\Delta c_B)\le0.
$$
Within that region, the basic point is unchanged and the value changes by $x_*^T\Delta c$, where $x_*$ is its full basic vector.

*Proof.* Feasibility depends only on $A,b$, so the point stays feasible. The displayed inequalities make $y'=B^{-T}(c_B+\Delta c_B)$ dual feasible for the new objective. Matching values prove optimality. Since the same vector is used, its new objective is $c^Tx_*+\Delta c^Tx_*$. $\square$

**Example 9.5 (Two changing objective coefficients).** Keep capacities4 and5, but maximise $(3+\alpha)x+(2+\beta)y$. At the old point $(1,3)$, the associated dual equalities give
$$
u=1+2\beta-\alpha,\qquad v=1+\alpha-\beta.
$$
The slack-variable dual inequalities require $u,v\ge0$. Thus the point stays certified optimal when
$\alpha-2\beta\le1$ and $\alpha-\beta\ge-1$. Its value there is $9+\alpha+3\beta$.

For instance,$\alpha=1/2,\beta=0$ gives $u=1/2,v=3/2$, both positive, and value $19/2$. In contrast,$\alpha=2,\beta=0$ gives $u=-1$, so this certificate fails. The feasible point $(5/2,0)$ then has value $25/2$, exceeding the old point's value11. The changed optimum is a mathematical consequence of the objective change, not evidence that the earlier solution was wrong.

A coefficient change on a nonbasic variable matters even if that variable was zero. Its reduced cost can cross zero and create an improving direction. A report that considers only positive variables' coefficients can therefore miss the boundary of the optimal-basis region.

## Global value geometry

**Theorem 9.6 (Concavity in resources).** Fix $A,c$ and assume the dual feasible set is nonempty. On the feasible right-hand-side domain, the finite optimal value $v(b)$ is concave. If $y_*$ is dual optimal at $b$, then for every other feasible $b'$,
$$
v(b')\le v(b)+y_*^T(b'-b).
$$

*Proof.* A dual feasible point bounds every primal objective at every right-hand side, so each feasible problem has a finite maximum and the attainment theorem applies. Let $x_0,x_1$ be optimisers for $b_0,b_1$. Their convex combination is feasible for $b_\theta=\theta b_0+(1-\theta)b_1$. Its objective is $\theta v(b_0)+(1-\theta)v(b_1)$, so $v(b_\theta)$ is at least that amount. This is concavity. Finally,$y_*$ remains dual feasible at $b'$, giving $v(b')\le b'^Ty_*$. Since $v(b)=b^Ty_*$, subtraction proves the bound. $\square$

The multiplier is called a supergradient of this concave value function. It supplies a global upper supporting plane, while the exact local equality requires a compatible basis region. Confusing the two roles is a common source of overconfident predictions.

For fixed feasible $P$ and changing costs, the function $w(c)=\max_{x\in P}c^Tx$ is instead convex wherever finite. Indeed,
$w(\theta c_0+(1-\theta)c_1)\le\theta w(c_0)+(1-\theta)w(c_1)$ because every feasible point obeys both separate upper bounds. An optimiser $x_*$ at $c$ gives the lower supporting inequality
$w(c')\ge w(c)+x_*^T(c'-c)$, simply by evaluating $c'$ at $x_*$. Resources and objective coefficients have opposite value-function curvature in this maximisation convention.

## Breakpoints and nonunique marginal values

**Example 9.7 (Prices at a kink).** In Example 9.3 at $t=4$, the primal optimum is $(0,4)$. Its dual has $u+v\ge2$, $u+2v\ge3$, $u,v\ge0$, and objective $4u+4v$. Optimality requires $u+v=2$, so $u=2-v$ and the second inequality gives $v\ge1$. Nonnegativity gives $v\le2$. Thus every $v\in[1,2]$ is an optimal multiplier on the second resource.

The value's left slope at $t=4$ is2 and right slope is1. It is not differentiable there, and the full interval $[1,2]$ supplies supergradients. An arbitrary solver's chosen dual multiplier need not be the derivative because no two-sided derivative exists. At $t=8$, the corresponding second-resource multiplier interval is $[0,1]$, agreeing with adjacent slopes one and zero.

A degenerate basis can also occur where a particular value function is differentiable, so degeneracy alone is not a proof of a kink. Identify the actual parameter direction and compare valid value formulas or multiplier sets.

## Simultaneous data changes

**Proposition 9.8 (The cross term).** If the same basis remains primal and dual feasible after both $b$ and $c$ change, then
$$
v(b+\Delta b,c+\Delta c)
=(c_B+\Delta c_B)^TB^{-1}(b+\Delta b).
$$
Its change includes the term $\Delta c_B^TB^{-1}\Delta b$.

*Proof.* The new basic point and its matching dual vector have the displayed common value. Expanding the product gives the old value, the two separate linear terms, and the cross term. $\square$

**Example 9.9 (A first-order sum is not an exact joint prediction).** For a one-variable problem $x=b$, $x\ge0$, maximise $cx$. At $b=3,c=2$, the value is6. Changing both by one gives $b'=4,c'=3$ and value12. Adding only the separate effects gives $6+2(1)+3(1)=11$. The missing cross term is1. The formula is not erroneous as a first-order expansion for small changes, but it must not be advertised as an exact finite joint change.

Changes in $A$ are more demanding. The basis inverse, nonbasic columns, and reduced costs all move. A bound on $\|B^{-1}\Delta B\|<1$ can ensure the changed basis remains nonsingular, but its basic signs and reduced-cost signs still require bounds. The [matrix-conditioning treatment](../matrix-computation-applications/conditioning-and-stability.md) supplies the relevant inverse-perturbation argument.

## Stability margins and reporting

If every basic value is strictly positive, let $\mu=\min_i\beta_i$. Any right-hand-side change satisfying $\|B^{-1}\Delta b\|_\infty<\mu$ keeps that basis strictly feasible. This follows coordinatewise from $|\Delta\beta_i|<\mu$. If every nonbasic reduced cost is strictly negative, a perturbation smaller than their minimum negative margin preserves dual feasibility. These are sufficient local margins, not necessary conditions for the whole problem to remain solvable.

At a zero margin, an arbitrarily small change can leave the current basis region, but another basis may remain feasible and optimal. Losing one certificate is not the same as losing feasibility or boundedness of the programme. Warm-start algorithms exploit the old basis and repair its defects rather than assuming its original status persists.

A useful sensitivity report states the changed data, the basis or multiplier used, the region where equality holds, and what happens at its boundaries. It distinguishes exact interval formulas from numerical finite differences and records units. Shadow values from differently scaled constraints must be transformed before comparison. If the data are uncertain rather than deliberately changed, report a range or robust bound appropriate to that uncertainty set rather than presenting one local slope as an unconditional forecast.

## A continuous value can accompany a jumping decision

If a fixed nonempty feasible polyhedron $P$ is bounded with $\|x\|\le R$ for all $x\in P$, its value $w(c)=\max_{x\in P}c^Tx$ obeys
$$
|w(c+\Delta c)-w(c)|\le R\|\Delta c\|_*,
$$
where $\|d\|_*=\sup_{\|x\|\le1}|d^Tx|$ is the dual norm. To prove the upper difference, evaluate the perturbed objective at its optimiser and bound
$\Delta c^Tx\le\|\Delta c\|_*\|x\|\le R\|\Delta c\|_*$, while the old objective at that point is at most $w(c)$. Interchanging the two cost vectors gives the opposite difference. Existence of both optimisers follows from the bounded-polyhedron theorem.

This Lipschitz bound concerns values. It does not imply that a selected optimiser varies continuously. For maximise $t x$ on $0\le x\le1$, the value is $\max\{0,t\}$, a continuous function. Every negative $t$ has unique optimiser0 and every positive $t$ has unique optimiser1. At $t=0$, every point of the interval is optimal. No selection matching both unique sides can be continuous across zero.

Thus a small change in the best value can coincide with a large change in the recommended decision. A practical report should distinguish objective robustness from decision robustness. Proving the latter needs extra information, such as uniqueness with a quantitative gap, a regularisation criterion, or a controlled selection rule; it does not follow from a small marginal value alone.

## Global cost sensitivity on a bounded decision set

There is a useful sensitivity theorem that requires no fixed optimal basis. Let the feasible set be nonempty and compact, and suppose every feasible decision has norm at most $R$ in a chosen norm. Define the optimal value as a function of the objective coefficients, while holding all constraints fixed. Then its change is at most $R$ times the change in those coefficients measured in the dual norm.

For proof, choose an optimiser for the changed objective; compactness ensures that one exists. Its old objective is bounded by the old optimum. Its additional objective is the coefficient perturbation paired with that feasible point, bounded by the dual-norm inequality. This gives an upper bound on the new value minus the old value. Exchange the two cost vectors to obtain the reverse bound. Together they give

$$
|V(c+\Delta c)-V(c)|\le R\|\Delta c\|_*.
$$

This result remains valid across basis changes, degenerate vertices, and entire optimal faces. Its price is conservatism: it uses the size of the whole feasible set instead of the more precise local geometry of an optimal basis. If the feasible set is unbounded, the assumed finite radius is unavailable. A finite optimum at one cost vector does not by itself guarantee finite optima at every nearby cost vector.

**Worked example: uncertain profit in a simplex.** Suppose two nonnegative production quantities have sum at most ten. If each profit coefficient changes by at most one hundredth, then every feasible plan's profit changes by at most one tenth, because its total production is at most ten. The optimal profit therefore changes by at most one tenth as well. This statement needs no knowledge of which product was initially optimal. When the two original profit coefficients tie, an arbitrarily small change can switch the selected vertex from all of one product to all of the other. The value bound survives that large change in the decision.

The same comparison argument explains the direction of global resource bounds from a dual optimiser. For a maximisation problem, the original optimal dual vector remains a feasible dual vector when only the right-hand side changes, because the dual coefficient inequalities are unchanged. It therefore gives an upper affine bound for every changed problem that is primal feasible. This is a supporting upper plane to the concave resource-value function on its feasible domain. The bound need not be attained after leaving the original basis region.

There is also a distinction between a data perturbation and a residual. Changing a capacity is an intentional new model. A computed point that violates the original capacity does not become a feasible original decision because it could be interpreted as feasible for a perturbed model. Backward error describes that interpretation precisely, but forward feasibility still requires repair or a separate bound. Reporting the two statements together is useful; replacing one by the other is not.

For a robust planning decision, a value interval alone may be insufficient. A plan optimal at one coefficient vector may perform poorly relative to alternatives at another, even when the absolute optimal-value variation is modest. The preceding uniform estimate gives a simple regret bound: a plan optimal for the nominal coefficients loses at most twice the uniform objective-change bound under the perturbed coefficients. Compare its perturbed value with its nominal value, insert nominal optimality, then compare the perturbed optimiser's nominal and perturbed values. This three-term comparison proves the factor two and states exactly which fixed constraints and uncertainty set it covers.

## Exercises

### Exercise 9.1 — An RHS interval
<a id="sensitivity-analysis-ex-1"></a>

For the running model, change only its first capacity to4+δ while keeping the second5. Find the old basis's feasible interval and value.

<details>
<summary>Hint 1</summary>

**Hint.** Solve both tight resource equations.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Require both basic variables nonnegative.

</details>
<details>
<summary>Solution</summary>

**Solution.** The equations give x=1-δ and y=3+2δ. Thus $-3/2\le\delta\le1$. The old multipliers(1,1) give value9+δ throughout that interval, including its endpoints.

</details>

### Exercise 9.2 — A resource prediction
<a id="sensitivity-analysis-ex-2"></a>

In Example 9.3, find the optimum values at t=3,6,10 and identify valid local slopes.

<details>
<summary>Hint 1</summary>

**Hint.** Use the piecewise certificate formulas.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Do not extrapolate the middle segment.

</details>
<details>
<summary>Solution</summary>

**Solution.** The values are6,10,12. The corresponding interior slopes are2,1,0. The middle basis is valid only for t between4 and8, so it cannot predict the other two regimes by slope one.

</details>

### Exercise 9.3 — A cost region
<a id="sensitivity-analysis-ex-3"></a>

In Example 9.5 with β=0, determine the interval of α certifying the old point.

<details>
<summary>Hint 1</summary>

**Hint.** Use both dual signs.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The feasible point itself does not change.

</details>
<details>
<summary>Solution</summary>

**Solution.** We require u=1-α≥0 and v=1+α≥0, hence $-1\le\alpha\le1$. On this interval the optimal value is9+α. Outside it the old certificate fails and a different optimiser may be needed.

</details>

### Exercise 9.4 — A supergradient bound
<a id="sensitivity-analysis-ex-4"></a>

At t=5 the second-resource multiplier is1. Give the resulting global upper bound on v(t) for t≥0 and compare it with v(0).

<details>
<summary>Hint 1</summary>

**Hint.** Use the supporting-line theorem.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The bound need not be attained outside the basis region.

</details>
<details>
<summary>Solution</summary>

**Solution.** The upper bound is v(t)≤v(5)+(t-5)=t+4. At t=0 it gives4, while the exact value is0. It remains a valid upper bound but is no longer an exact prediction.

</details>

### Exercise 9.5 — A kink's multipliers
<a id="sensitivity-analysis-ex-5"></a>

At t=4, verify that v=3/2,u=1/2 is dual optimal and explain why v is not a unique derivative.

<details>
<summary>Hint 1</summary>

**Hint.** Check both dual inequalities.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare the left and right slopes.

</details>
<details>
<summary>Solution</summary>

**Solution.** The values satisfy u+v=2 and u+2v=7/2≥3, with nonnegative multipliers. The dual value is8, matching the primal. But the one-sided slopes are2 and1, so no two-sided derivative exists;3/2 is one supergradient among an interval.

</details>

### Exercise 9.6 — A primal feasibility margin
<a id="sensitivity-analysis-ex-6"></a>

If β=(0.4,2,1) and $\|B^{-1}\Delta b\|_\infty\le0.1$, prove the changed basis is feasible.

<details>
<summary>Hint 1</summary>

**Hint.** Bound each changed basic coordinate.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the smallest original component.

</details>
<details>
<summary>Solution</summary>

**Solution.** Each new basic value is at least its old value minus0.1, so the minimum is at least0.3>0. Thus the same basis remains strictly primal feasible. Dual feasibility still depends on any cost or matrix changes.

</details>

### Exercise 9.7 — A reduced-cost margin
<a id="sensitivity-analysis-ex-7"></a>

If all nonbasic reduced costs are at most -0.2 and their perturbations have infinity norm at most0.05, prove dual feasibility persists.

<details>
<summary>Hint 1</summary>

**Hint.** Add the worst possible positive change.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Check the sign of every new reduced cost.

</details>
<details>
<summary>Solution</summary>

**Solution.** Every changed reduced cost is at most -0.2+0.05=-0.15<0. Therefore dual feasibility persists for the fixed basis. If primal feasibility also persists, the basis remains optimal.

</details>

### Exercise 9.8 — Joint changes
<a id="sensitivity-analysis-ex-8"></a>

For x=b≥0 and objective cx, use b=5,c=4 and changes Δb=2,Δc=-1. Compare exact and separate-linear predictions.

<details>
<summary>Hint 1</summary>

**Hint.** Expand the product.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Include the cross term.

</details>
<details>
<summary>Solution</summary>

**Solution.** The new value is7·3=21. The separate-linear prediction is20+4·2+5·(-1)=23. The cross term is(-1)·2=-2, restoring the exact21.

</details>

### Exercise 9.9 — Cost convexity
<a id="sensitivity-analysis-ex-9"></a>

Prove that the optimal value for fixed feasible P is convex in c whenever the compared values are finite.

<details>
<summary>Hint 1</summary>

**Hint.** Bound the objective at each feasible x.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Then take its maximum.

</details>
<details>
<summary>Solution</summary>

**Solution.** For every x∈P, $(\theta c_0+(1-\theta)c_1)^Tx\le\theta w(c_0)+(1-\theta)w(c_1)$. Taking the maximum over x yields the convexity inequality. This reverses the resource-concavity direction.

</details>

### Exercise 9.10 — A changed coefficient matrix
<a id="sensitivity-analysis-ex-10"></a>

Why does $y^T\Delta b$ not account for a change in A even when b is fixed?

<details>
<summary>Hint 1</summary>

**Hint.** The basis and reduced costs depend on A.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The equality-feasible point can move without a RHS change.

</details>
<details>
<summary>Solution</summary>

**Solution.** Changing A changes B, its inverse, nonbasic transformed columns, and the dual-feasibility inequalities. The old x may cease satisfying the equations and the old y may cease providing an upper bound. A matrix-perturbation and sign analysis is required; the fixed-A RHS theorem does not apply.

</details>

## Sources

- Dimitris Bertsimas and John N. Tsitsiklis, *Introduction to Linear Optimization*, Athena Scientific, 1997. [Author book listing](https://web.mit.edu/jnt/www/home.html) and [MIT course reading guide](https://ocw.mit.edu/courses/15-093j-optimization-methods-fall-2009/pages/readings/).
- Jiří Matoušek and Bernd Gärtner, [Understanding and Using Linear Programming](https://doi.org/10.1007/978-3-540-30717-4), Springer, 2007.

The exposition, proofs, and examples are original to Euler. The references provide further reading; no external text or exercise collection is reproduced.

## Summary

An optimal basis gives exact sensitivity formulas only inside its primal and dual feasibility region. Resource value is concave and dual multipliers give upper supporting bounds; cost value is convex and primal optimisers give lower supporting bounds. Breakpoints can have nonunique marginal values, and simultaneous changes include cross terms. Dual simplex next repairs a basis that keeps its dual certificate but loses primal feasibility.
