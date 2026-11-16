
# Duality Theory

An optimal decision is easier to trust when accompanied by a bound that every feasible decision must obey. Linear-programming duality constructs those bounds systematically. Its central theorem says that a feasible linear programme with a bounded objective has a matching bound, so no positive gap remains between the best decision and the best certificate.

We use the standard maximisation convention from chapter 3. Required preparation is finite-dimensional linear algebra, convex combinations, Euclidean norms, and the attained-vertex theorem already proved. The separation argument below is proved explicitly; strong duality will not be assumed as a consequence of Farkas' lemma and then used to prove that same lemma.

## Constructing the dual bound

**Definition 7.1 (Primal and dual pair).** For real finite data, the pair is
$$
(P)\quad\max\{c^Tx:Ax=b,\ x\ge0\},
$$
$$
(D)\quad\min\{b^Ty:A^Ty\ge c,\ y\in\mathbb R^m\}.
$$
The dual vector $y$ is unrestricted in sign because the primal rows are equalities. Its inequalities are componentwise, one for each nonnegative primal variable.

If $x$ is primal feasible, multiplying $Ax=b$ by $y^T$ gives $x^TA^Ty=b^Ty$. If also $A^Ty\ge c$, nonnegativity gives $c^Tx\le b^Ty$. This is the basic certificate: a dual feasible vector supplies an upper bound for every primal feasible value.

**Theorem 7.2 (Weak duality).** For every feasible pair $x,y$,
$$
c^Tx\le b^Ty.
$$
Consequently, a feasible pair with equal values is optimal for both problems. If the primal objective is unbounded above, the dual is infeasible. If the dual objective is unbounded below, the primal is infeasible.

*Proof.* The preceding multiplication proves the inequality. Equality traps both optimal values between the same number. A single dual feasible point would give a finite primal upper bound, contradicting primal unboundedness; the other implication follows symmetrically. $\square$

For a maximisation problem $Gx\le h,x\ge0$, adding slacks gives equality form. The slack columns are the identity and have zero objective coefficients, so their dual inequalities require $y\ge0$. The remaining inequalities are $G^Ty\ge c$, and the dual minimises $h^Ty$. Thus multiplier signs follow from variable domains, rather than from a memorised pattern detached from a formulation.

**Example 7.3 (A matching bound).** For the resource model
$$
\max(3x+2y),\quad x+y\le4,\quad2x+y\le5,\quad x,y\ge0,
$$
the dual is
$$
\min(4u+5v),\quad u+2v\ge3,\quad u+v\ge2,\quad u,v\ge0.
$$
The primal point $(1,3)$ is feasible. The dual point $(1,1)$ satisfies both inequalities as equalities and has value9, equal to the primal value. Weak duality alone therefore proves optimality. The algebraic bound is exactly the sum of the two original resource inequalities.

The dual variables are coefficients in a mathematical inequality. Interpreting them as marginal resource values requires an optimal-basis region or another sensitivity theorem; they are not unrestricted predictions for arbitrary changes in the data.

## Finite cones are closed

We now prove the finite-dimensional geometric facts needed for a matching certificate. A convex cone is closed under addition and multiplication by nonnegative scalars.

**Lemma 7.4 (Independent conic representation).** If $z=\sum_{j=1}^k\lambda_j g_j$ with $\lambda_j\ge0$, then $z$ has such a representation using a linearly independent subset of the listed generators.

*Proof.* Discard zero coefficients. If the remaining generators are dependent, choose nonzero coefficients $\alpha_j$ with $\sum_j\alpha_jg_j=0$, orienting their signs so at least one $\alpha_j>0$. Set
$t=\min_{\alpha_j>0}\lambda_j/\alpha_j>0$ and replace $\lambda_j$ by $\lambda_j-t\alpha_j$. Coefficients with positive $\alpha_j$ remain nonnegative and at least one becomes zero; those with nonpositive $\alpha_j$ do not decrease. The represented vector is unchanged. Repeat until the remaining generators are independent. Each step removes at least one positive coefficient, so the process is finite. $\square$

**Lemma 7.5 (Closedness of a finitely generated cone).** The set
$$
C=\left\{\sum_{j=1}^k\lambda_jg_j:\lambda_j\ge0\right\}
\subseteq\mathbb R^d
$$
is closed.

*Proof.* Let $z_\ell\in C$ converge to $z$. By Lemma 7.4 choose an independent support for each representation. There are finitely many supports, so a subsequence has the same support $J$. If $J$ is empty, the subsequence is zero and $z=0\in C$. Otherwise let $G_J$ be the independent-column matrix. Its coefficient vector is uniquely
$$
\lambda_\ell=(G_J^TG_J)^{-1}G_J^Tz_\ell.
$$
The inverse exists by independence. The displayed linear map is continuous, so $\lambda_\ell$ converges to the same expression with $z$ in place of $z_\ell$. The limit is componentwise nonnegative, and taking limits in $G_J\lambda_\ell=z_\ell$ gives a conic representation of $z$. Thus every convergent sequence in $C$ has its limit in $C$. $\square$

Finite generation is substantive. An arbitrary linear image of a closed unbounded set need not be closed; the lemma proves the particular property rather than assuming it. Zero generators and redundant generators cause no problem because the support-reduction argument removes them when necessary.

## A separation certificate from nearest points

**Lemma 7.6 (Separation from a finite cone).** If $b\notin C$ for a finitely generated cone $C$, there exists $q$ such that
$$
q^Tz\ge0\ \text{for all }z\in C,\qquad q^Tb<0.
$$

*Proof.* Because $C$ is nonempty, closed, and contains zero, choose a point $p\in C$ minimising $\|b-p\|_2$. Existence follows by taking a distance-minimising sequence: it may be confined to the bounded ball $\|z\|\le2\|b\|+1$, and a convergent subsequence has its limit in $C$. For every $z\in C$, the segment $p+t(z-p)$ is in $C$ for $0\le t\le1$. Expanding its squared distance from $b$ and comparing with the minimum at $t=0$ gives
$(b-p)^T(z-p)\le0$.

Use $z=0$ and $z=2p$ to deduce $(b-p)^Tp=0$. Set $q=p-b$. Then $q^Tz\ge q^Tp=0$ for all $z\in C$, while
$q^Tb=-\|b-p\|_2^2<0$ because $b\notin C$. $\square$

This proof uses only finite-dimensional compactness and elementary quadratic expansion. The separation is strict at the exterior point and non-strict on the cone. That exact sign pattern is what makes it an infeasibility certificate later.

## Strong duality without a circular argument

**Theorem 7.7 (Strong duality and attainment).** If the primal is feasible and $c^Tx$ is bounded above on its feasible set, there are feasible $x_*,y_*$ with
$$
c^Tx_*=b^Ty_*.
$$
Thus both optima are attained and equal.

*Proof.* The standard-form attainment theorem gives a primal optimiser $x_*$. Let $Z=\{i:(x_*)_i=0\}$ and form
$$
K=\{A^Ty-s:y\in\mathbb R^m,\ s_i\ge0\text{ for }i\in Z,\
s_i=0\text{ for }i\notin Z\}.
$$
This is a finitely generated cone: use both signs of each column of $A^T$, together with $-e_i$ for $i\in Z$. Suppose $c\notin K$. By Lemma 7.6, with its separating vector negated, there is $d$ such that $d^Tk\le0$ for every $k\in K$ and $c^Td>0$.

Both $A^Ty$ and $-A^Ty$ belong to $K$, so $d^TA^Ty=0$ for every $y$, hence $Ad=0$. Since $-e_i\in K$ for $i\in Z$, we have $d_i\ge0$ there. On positive components of $x_*$, choose $t>0$ sufficiently small that $(x_*)_i+t d_i\ge0$ even when $d_i<0$. There are finitely many coordinates, so one common positive $t$ works. Therefore $x_*+td$ is primal feasible and has strictly larger objective, a contradiction.

Hence $c\in K$: write $c=A^Ty_*-s$ with the stated signs and support. Then $A^Ty_*\ge c$, so $y_*$ is dual feasible. Also $x_*^Ts=0$, because $s$ vanishes wherever $x_*$ is positive. Thus
$c^Tx_*=y_*^TAx_*-s^Tx_*=b^Ty_*$.
Weak duality proves both optimal. $\square$

The theorem does not assume a nondegenerate optimum, a strictly feasible point, or a simplex pivot sequence. The separation proof works when some variables are forced to zero and when several optimal bases describe the same point. Such qualifications are one advantage of a geometric proof over an argument that silently assumes every optimal basis is already dual feasible.

An arbitrary basis representing an optimal degenerate point can have positive reduced costs. Zero-length pivots can hide those apparent improvements. Strong duality guarantees a matching vector, but not that every chosen representation of the optimal point immediately exposes it.

## How the two problems can fail

**Example 7.8 (An unbounded primal has no dual feasible point).** Maximise $x_1$ subject to $x_1-x_2=1$, $x\ge0$. The ray $(1+t,t)$ has objective $1+t$, so the primal is unbounded. The dual would minimise $y$ subject to $y\ge1$ and $-y\ge0$. These inequalities are incompatible. The infeasible dual agrees with weak duality; no finite multiplier bound can exist for an unbounded primal.

**Example 7.9 (Both problems can be infeasible).** Maximise $x_2$ subject to $x_1=-1$, $x_1,x_2\ge0$. The primal is infeasible. With $A=(1,0)$ and $c=(0,1)$, the dual requires $y\ge0$ and $0\ge1$, so it too is infeasible. Thus “dual infeasible” does not by itself imply “primal unbounded”: primal feasibility is missing.

For another distinct case, maximise zero subject to $x_1=-1$, $x_1\ge0$. Its dual minimises $-y$ subject to $y\ge0$, so the dual is feasible and unbounded below. The primal remains infeasible. A report should distinguish these cases instead of using one ambiguous “no solution” label.

Duality also clarifies boundedness evidence. A primal feasible point supplies a lower bound on the maximum; a dual feasible point supplies an upper bound. If both are available, their gap quantifies the remaining objective uncertainty, even before exact optimality is established. A small gap is meaningful only after feasibility is justified in the chosen arithmetic and data model.

## Numerical certificates and units

For approximate vectors, primal and dual residuals matter separately. A nearly feasible dual vector is not automatically an upper certificate: one negative slack can invalidate the inequality for arbitrarily large nonnegative primal components. Repairing that defect requires bounds on the feasible variables or a verified perturbation argument.

In a bounded box $0\le x_i\le U_i$, an approximate dual inequality $A^Ty-c\ge-\delta$ gives
$c^Tx\le b^Ty+\sum_i\delta_iU_i$ for exact primal-feasible $x$. This follows by writing $c=A^Ty-s$ and bounding $-s_i x_i$ when $s_i$ is slightly negative. Without finite $U_i$, the same correction is unavailable.

Multiplier units make the certificate interpretable. Multiplying a resource row by a positive factor rescales its multiplier inversely; the weighted inequality and objective bound stay the same. Numerical multiplier values without the row convention and units are incomplete data. The next chapter develops exact complementary-slackness and infeasibility certificates from these dual relationships.

## Finite variable bounds give another family of certificates

Suppose the model has equalities $Ax=b$ and finite component bounds $l_j\le x_j\le u_j$. For any real multiplier $y$, without requiring the usual one-sided dual inequalities, define $d=c-A^Ty$. Then every feasible point satisfies
$$
c^Tx=b^Ty+d^Tx
\le b^Ty+\sum_j\max\{d_jl_j,d_ju_j\}.
$$
The bound follows because a linear function of one bounded coordinate is maximised at an endpoint. Thus each $y$ supplies a valid global upper certificate for this boxed domain.

For example, maximise $2x_1+x_2$ subject to $x_1+x_2=1$ and $0\le x_1,x_2\le1$. Choosing $y=1$ gives $d=(1,0)$ and upper bound $1+1=2$, attained at $(1,0)$. Choosing $y=0$ instead gives bound3, valid but loose. Finding a useful certificate is a separate optimisation task; validity alone does not ensure sharpness.

This calculation explains the familiar dual sign restrictions from another direction. If a variable has only the lower bound zero and no upper bound, its contribution $\sup_{x_j\ge0}d_jx_j$ is finite only when $d_j\le0$, which is $(A^Ty)_j\ge c_j$. If it is unrestricted on the whole real line, that supremum is finite only when $d_j=0$. Finite bounds permit either sign, but add the endpoint term to the certificate.

The domain is therefore an essential ingredient of duality. Dropping a bound while retaining a certificate that depended on its endpoint contribution can invalidate the claimed upper value.

## A free variable requires exact coefficient matching

If a primal variable is unrestricted, its dual coefficient condition is equality. To see why, write the weighted objective identity as
$c^Tx=b^Ty+(c-A^Ty)^Tx$. For a free coordinate $x_j$, a nonzero coefficient $c_j-(A^Ty)_j$ can make that coordinate contribution arbitrarily positive by choosing the appropriate sign. It supplies no finite upper bound from the domain alone. Requiring $(A^Ty)_j=c_j$ removes that term exactly.

For example, maximise $2x$ subject to $x=-3$, with $x$ free. The correct dual has $y=2$ and value $-3y=-6$, matching the primal. Incorrectly imposing only $y\ge2$ would make the alleged dual unbounded below as $y\to\infty$, despite the primal having a feasible optimum. That inequality corresponds to a nonnegative variable, which is a different and here infeasible primal domain. Variable declarations must therefore survive every dual transformation.

## Optimal certificates survive equivalent resource descriptions

Suppose the equality rows are replaced by an invertible linear combination: $Ax=b$ becomes $RAx=Rb$, where $R$ is nonsingular. The feasible decisions are identical. A dual multiplier $z$ for the new rows gives the weighted coefficient vector $A^TR^Tz$ and objective $b^TR^Tz$. Setting $y=R^Tz$ shows a bijection between the two dual feasible sets that preserves all certificate values. Thus a multiplier vector is a coordinate representation of a weighted inequality, rather than an invariant list of prices independent of the row description.

For a diagonal positive scaling, this reduces to the familiar inverse unit conversion. If a resource is recorded in kilograms instead of grams, its numerical right-hand side and coefficient row change together, while its multiplier changes inversely. The product representing a value bound stays fixed. Mixing a multiplier from one convention with a right-hand side from the other destroys the certificate even though each individual number may look plausible.

Redundant rows are more subtle because the map is no longer invertible. Add a row that is an exact linear combination of the equality rows, with the matching right-hand side. If its combination vector is $r$, a multiplier pair $(y,\alpha)$ in the enlarged system represents the original multiplier $y+\alpha r$. Many enlarged multiplier lists can therefore represent the same weighted inequality and the same upper value. Nonuniqueness of the enlarged dual vector may reflect nothing beyond the redundant description.

**Worked application: duplicated capacity.** In a nonnegative resource-inequality model, duplicate one upper-capacity row with the same right-hand side. Any nonnegative split of that row's old multiplier between its two copies gives the same bound. A solver may return all weight on one copy, the reverse split, or an intermediate split. The separate numbers have no unique economic meaning. Their sum is the multiplier on the underlying capacity statement. Perturbing only one duplicate, however, changes the model by making the smaller capacity the effective one, so individual one-sided sensitivity questions must still specify the actual changed data.

There is a useful practical conclusion. When two formulations return different multipliers, first reconstruct the weighted original constraints and compare the resulting bound. Equality of those aggregate certificates can explain the difference completely. If the aggregates differ, both may still be valid optimal certificates at a degenerate model, expressing different supporting bounds for nearby problems. Strong duality proves existence and equality of optimal objective values; it neither promises a unique multiplier vector nor makes its interpretation independent of the formulation.

## Exercises

### Exercise 7.1 — Deriving a dual
<a id="duality-theory-ex-1"></a>

Write the dual of maximise $2x_1+x_2$ subject to $x_1+x_2\le3$, $x_1\le2$, $x\ge0$.

<details>
<summary>Hint 1</summary>

**Hint.** Introduce two nonnegative slacks.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Their dual inequalities enforce multiplier nonnegativity.

</details>
<details>
<summary>Solution</summary>

**Solution.** The dual is minimise $3u+2v$ subject to $u+v\ge2$, $u\ge1$, $u,v\ge0$. The primal point $(2,1)$ and dual point $(1,1)$ both have value5, proving optimality.

</details>

### Exercise 7.2 — Weak-duality gap
<a id="duality-theory-ex-2"></a>

For a feasible standard-form pair, express $b^Ty-c^Tx$ as a nonnegative sum.

<details>
<summary>Hint 1</summary>

**Hint.** Use Ax=b.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Subtract c inside the product with x.

</details>
<details>
<summary>Solution</summary>

**Solution.** The gap is $x^T(A^Ty-c)=\sum_jx_j[(A^Ty)_j-c_j]$. Every factor is nonnegative, so the gap is nonnegative. Equality proves both solutions optimal.

</details>

### Exercise 7.3 — Constraint weights
<a id="duality-theory-ex-3"></a>

Why can multiplying an upper-bound resource inequality by a negative coefficient invalidate a proposed upper certificate?

<details>
<summary>Hint 1</summary>

**Hint.** Track the inequality direction.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Give a scalar example.

</details>
<details>
<summary>Solution</summary>

**Solution.** From $x\le1$, multiplication by $-1$ yields $-x\ge-1$, not $-x\le-1$. For $x=0$ the latter false upper inequality would read $0\le-1$. Multiplier signs must follow the required bound direction.

</details>

### Exercise 7.4 — A closed cone
<a id="duality-theory-ex-4"></a>

Describe the cone generated by $(1,0)$ and $(1,1)$ and give a separating vector for $b=(0,1)$.

<details>
<summary>Hint 1</summary>

**Hint.** A conic point is $(a+b,b)$ with a,b≥0.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Seek a functional nonnegative on both generators but negative at the exterior point.

</details>
<details>
<summary>Solution</summary>

**Solution.** The cone is $\{(u,v):u\ge v\ge0\}$. Vector $q=(1,-1)$ has values1 and0 on the generators and value $-1$ at $(0,1)$, giving the strict separation certificate.

</details>

### Exercise 7.5 — Support reduction
<a id="duality-theory-ex-5"></a>

Represent $(2,2)$ using generators $(1,0),(0,1),(1,1)$ with dependent support, then reduce to independent support.

<details>
<summary>Hint 1</summary>

**Hint.** Begin with three positive coefficients.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the relation g1+g2-g3=0.

</details>
<details>
<summary>Solution</summary>

**Solution.** The vector equals $g_1+g_2+g_3$. Subtracting the relation once leaves $2g_3$, a one-generator independent representation. Alternatively $2g_1+2g_2$ uses two independent generators.

</details>

### Exercise 7.6 — Both infeasible
<a id="duality-theory-ex-6"></a>

Verify primal and dual infeasibility in Example 7.9 without relying on a general theorem.

<details>
<summary>Hint 1</summary>

**Hint.** The primal has a negative required coordinate.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The zero matrix column creates an impossible dual inequality.

</details>
<details>
<summary>Solution</summary>

**Solution.** Primal feasibility would require $x_1=-1$ and $x_1\ge0$. The second primal column is zero but has objective coefficient1, so dual feasibility requires $0\ge1$. Both are directly impossible.

</details>

### Exercise 7.7 — A perturbed upper bound
<a id="duality-theory-ex-7"></a>

Assume $0\le x_i\le U_i$, Ax=b, and $A^Ty-c\ge-\delta$ with δ≥0. Prove the corrected upper bound from the text.

<details>
<summary>Hint 1</summary>

**Hint.** Write the objective using the dual slack.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Bound each possible negative slack contribution.

</details>
<details>
<summary>Solution</summary>

**Solution.** Writing s=Aᵀy-c gives $c^Tx=b^Ty-s^Tx$. Since $s_i\ge-\delta_i$, we have $-s_i x_i\le\delta_iU_i$. Summing gives $c^Tx\le b^Ty+\delta^TU$. Finite component bounds are essential.

</details>

### Exercise 7.8 — No strict-feasibility assumption
<a id="duality-theory-ex-8"></a>

In the strong-duality proof, why is a sufficiently small step possible even when x* has zero coordinates?

<details>
<summary>Hint 1</summary>

**Hint.** Separate zero and positive coordinates.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The separating direction has a sign restriction on zeros.

</details>
<details>
<summary>Solution</summary>

**Solution.** For every zero coordinate, d_i≥0 prevents immediate negativity. For each positive coordinate with d_i<0, choose t≤x_i*/(-d_i). The minimum of finitely many positive bounds is positive. Thus a common small feasible step exists without requiring x*>0.

</details>

### Exercise 7.9 — Dual scaling
<a id="duality-theory-ex-9"></a>

If a resource row is multiplied by λ>0, how should its multiplier change to preserve the same certificate?

<details>
<summary>Hint 1</summary>

**Hint.** The product of row and multiplier must stay fixed.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Include the right-hand side contribution.

</details>
<details>
<summary>Solution</summary>

**Solution.** Replace its multiplier y_i by y_i/λ. The weighted coefficient row and the weighted right-hand side are unchanged. Thus the mathematical bound is invariant even though the reported multiplier number changes.

</details>

### Exercise 7.10 — A bounded primal conclusion
<a id="duality-theory-ex-10"></a>

A primal standard-form problem is feasible and has objective bounded above. State precisely what strong duality supplies, and what it does not say about uniqueness.

<details>
<summary>Hint 1</summary>

**Hint.** Include attainment on both sides.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Equality of values is weaker than uniqueness of decisions.

</details>
<details>
<summary>Solution</summary>

**Solution.** It supplies primal and dual feasible optimisers with equal finite values. It does not ensure a unique primal vector, unique dual vector, unique basis, strict complementarity for every pair, or nondegeneracy. Those require separate statements and hypotheses.

</details>

## Sources

- Dimitris Bertsimas and John N. Tsitsiklis, *Introduction to Linear Optimization*, Athena Scientific, 1997. [Author book listing](https://web.mit.edu/jnt/www/home.html) and [MIT course reading guide](https://ocw.mit.edu/courses/15-093j-optimization-methods-fall-2009/pages/readings/).
- Jiří Matoušek and Bernd Gärtner, [Understanding and Using Linear Programming](https://doi.org/10.1007/978-3-540-30717-4), Springer, 2007.

The exposition, proofs, and examples are original to Euler. The references provide further reading; no external text or exercise collection is reproduced.

## Summary

Dual feasible vectors certify global bounds, and weak duality validates matching feasible values. Closedness and separation of finite cones prove strong duality with attainment, including degenerate optima. Infeasibility and unboundedness must be distinguished on both sides. Complementary slackness and Farkas' lemma next make the equality and infeasibility certificates explicit.
