
# Nonsmooth and Composite Constrained Methods

A corner is not numerical noise. It can encode a norm, a maximum of competing
criteria, contact with a feasible boundary, or an exact penalty for violation.
At such a point there is no single gradient to set to zero. The replacement is
not one universal algorithm but a collection of related objects: subgradient
inclusions state optimality, projections and proximal maps enforce simple
structure, bundle models retain cutting planes, and primal--dual iterations
balance coupled terms.

This chapter assumes convex sets and functions, normal cones, Lagrange
multipliers, and the proximal constructions of the previous chapter. All
spaces are finite-dimensional. Rates below require the hypotheses stated next
to them; “nonsmooth method” by itself implies neither a rate nor global
convergence.

## Subgradients replace one tangent by all supporting slopes

For a proper convex function \(f\), a vector \(s\) is a subgradient at a point
\(x\in\operatorname{dom}f\) when

\[
f(y)\ge f(x)+\langle s,y-x\rangle
\quad\text{for every }y. \tag{1}
\]

The set of all such vectors is \(\partial f(x)\). If \(f\) is differentiable,
it reduces to \(\{\nabla f(x)\}\). For
\(f(x)=|x|\),

\[
\partial f(x)=
\begin{cases}
\{1\},&x>0,\\
[-1,1],&x=0,\\
\{-1\},&x<0.
\end{cases} \tag{2}
\]

The interval at zero is information: any slope between the left and right
derivatives supports the graph.

Let \(C\) be nonempty, closed, and convex. Minimizing \(f\) over \(C\) is the
extended-value problem \(\min_x f(x)+\delta_C(x)\). If

\[
\operatorname{ri}(\operatorname{dom}f)\cap\operatorname{ri}(C)\ne\varnothing,
\tag{3}
\]

the convex subdifferential sum rule gives

\[
\partial(f+\delta_C)(x)=\partial f(x)+N_C(x).
\]

Consequently, a feasible \(x_*\) is globally optimal exactly when

\[
0\in\partial f(x_*)+N_C(x_*). \tag{4}
\]

The inclusion means that there is an \(s\in\partial f(x_*)\) with
\(-s\in N_C(x_*)\). Condition (3) is a convenient exact qualification for the
split formula. Without it, \(0\in\partial(f+\delta_C)(x_*)\) still characterizes
optimality, but decomposing that subgradient into the two displayed pieces may
fail.

### Worked example 1: a boundary optimum with many slopes

Minimize \(f(x)=|x+1|\) over \(C=[0,\infty)\). The unconstrained minimizer
\(-1\) is infeasible, so the constrained solution is \(x_*=0\). Since
\(x_*+1>0\), \(\partial f(0)=\{1\}\). The normal cone of the half-line at zero
is

\[
N_C(0)=(-\infty,0].
\]

Choosing normal \(-1\) gives \(0=1+(-1)\), which verifies (4). At an interior
point \(x>0\), the normal cone is \(\{0\}\) and the subgradient is \(\{1\}\),
so the inclusion cannot hold. The certificate identifies not only the point
but the force balance between objective slope and boundary normal.

## Projected subgradient descent and what its rate measures

Choose a feasible start \(x_0\in C\), choose
\(s_k\in\partial f(x_k)\), and update

\[
x_{k+1}=P_C(x_k-\alpha_k s_k),\qquad\alpha_k>0. \tag{5}
\]

Projection nonexpansiveness and feasibility of an optimizer \(x_*\) imply

\[
\begin{aligned}
\|x_{k+1}-x_*\|^2
&\le\|x_k-\alpha_ks_k-x_*\|^2\\
&=\|x_k-x_*\|^2-2\alpha_k\langle s_k,x_k-x_*\rangle
+\alpha_k^2\|s_k\|^2.
\end{aligned}
\]

The subgradient inequality gives
\(\langle s_k,x_k-x_*\rangle\ge f(x_k)-f(x_*)\). Therefore

\[
2\alpha_k(f(x_k)-f_*)
\le \|x_k-x_*\|^2-\|x_{k+1}-x_*\|^2
+\alpha_k^2\|s_k\|^2. \tag{6}
\]

Suppose \(\|x_0-x_*\|\le R\) and every selected subgradient has norm at most
\(G\). Summing (6) for \(k=0,\ldots,N-1\) yields

\[
\min_{0\le k<N}\{f(x_k)-f_*\}
\le
\frac{R^2+G^2\sum_{k=0}^{N-1}\alpha_k^2}
{2\sum_{k=0}^{N-1}\alpha_k}. \tag{7}
\]

If \(R,G>0\) and the horizon \(N\) is known, the constant choice
\(\alpha_k=R/(G\sqrt N)\) gives the bound \(RG/\sqrt N\). This is a guarantee
for the best objective value seen, not necessarily the last iterate. The
sequence can zigzag indefinitely with a constant step. A classical diminishing
schedule with \(\sum_k\alpha_k=\infty\) and
\(\sum_k\alpha_k^2<\infty\) supports asymptotic convergence under bounded-
subgradient and solution assumptions, but does not provide the same finite-
horizon constant automatically.

### Worked example 2: constant-step oscillation

Minimize \(|x|\) on \(\mathbb R\) with constant step \(\alpha=0.3\). Starting
at \(x_0=0.2\), the unique subgradient away from zero gives

\[
x_1=0.2-0.3(1)=-0.1,
\qquad
x_2=-0.1-0.3(-1)=0.2.
\]

The two-cycle repeats. The best objective value is \(0.1\), but neither
iterate is optimal. Reducing the step controls the neighborhood size; it does
not turn the constant-step method into an exact convergent scheme. If an
implementation happens to land at zero, choosing subgradient zero keeps it
there, while choosing another member of \([-1,1]\) can move it away. A
subgradient oracle's selection rule is therefore part of the reproducible
algorithm.

## Composite constraints through proximal structure

For

\[
\min_x f(x)+g(x)+\delta_C(x), \tag{8}
\]

one may try to compute
\(\operatorname{prox}_{\alpha(g+\delta_C)}\). It is not generally equal to
first applying \(\operatorname{prox}_{\alpha g}\) and then projecting onto
\(C\), nor to applying them in the reverse order. Proximal maps do not commute
without special structure. If \(g\) is separable and \(C\) is a compatible
box, the combined proximal map may still have a closed form; otherwise a
splitting or inner solve is required.

A fixed-point form of constrained optimality is especially useful. For convex
differentiable \(f\), a feasible point \(x_*\) minimizes \(f\) on \(C\) if and
only if, for any \(\alpha>0\),

\[
x_*=P_C(x_*-\alpha\nabla f(x_*)). \tag{9}
\]

Indeed, the projection condition says
\(-\alpha\nabla f(x_*)\in N_C(x_*)\), which is precisely gradient--normal
balance. The residual of (9) is informative only relative to \(\alpha\); a
tiny step makes the unscaled displacement tiny even far from stationarity.

## Nonsmooth KKT conditions

Consider

\[
\begin{aligned}
\min_{x\in C}\quad&f_0(x)\\
\text{subject to}\quad&f_i(x)\le0,\quad i=1,\ldots,m,\\
&Ax=b,
\end{aligned} \tag{10}
\]

where \(C\) is closed convex and all \(f_i\) are proper convex functions. Retain the common domain \(D=C\cap\bigcap_{i=0}^m\operatorname{dom}f_i\).
Assume some \(\bar x\in\operatorname{ri}D\) satisfies \(A\bar x=b\) and \(f_i(\bar x)<0\) for every inequality, and the optimal value is finite. Then KKT
conditions are necessary at an attained optimum. Feasibility and the conditions below are sufficient for
global optimality even without this qualification. There must be \(\lambda_i\ge0\) and an unrestricted
\(\nu\). Define the active Lagrangian objective

\[
h(x)=f_0(x)+\sum_{i:\lambda_i>0}\lambda_i f_i(x).
\]

Set \(\Phi=h+\delta_D\); even an inactive constraint still restricts this common effective domain.
Then KKT uses the aggregate subdifferential, without requiring an inactive constraint's separate subgradient:

\[
\begin{aligned}
0&\in \partial\Phi(x_*)+A^T\nu,\qquad x_*\in D,\\
f_i(x_*)&\le0,\qquad Ax_*=b,\\
\lambda_i f_i(x_*)&=0\quad(i=1,\ldots,m).
\end{aligned} \tag{11}
\]

Only when the relevant convex sum rules hold may one split \(\partial\Phi(x_*)\) into
\(\partial h(x_*)+N_D(x_*)\), and then decompose the active terms using
\(s_0\in\partial f_0(x_*)\) and \(s_i\in\partial f_i(x_*)\) for \(\lambda_i>0\).
For example, \(\operatorname{ri}(\operatorname{dom}h)\cap\operatorname{ri}D\ne\varnothing\) suffices for the first split; no split is assumed above. Sufficiency
follows from the aggregate subgradient inequality for \(\Phi\). Every feasible \(x\) lies in \(D\), so
the affine equality cancels the linear term. Nonnegative multipliers, feasibility and complementarity give
\(f_0(x)\ge h(x)\ge h(x_*)=f_0(x_*)\); inactive domains have not disappeared.
For \(C=\mathbb R,\ f_0(x)=x,\ f_1(x)=\delta_{[0,\infty)}(x)-1\), Slater holds and \(x_*=0,\lambda_1=0\),
but the missing-domain formula would require \(0\in\{1\}\). Retaining \(D=[0,\infty)\) gives \(0\in\partial(x+\delta_D)(0)\).
This remains a convex global argument; a nonconvex generalized stationarity notion needs its own hypotheses.

## Exact penalties and their threshold

Suppose the inequality-only convex problem has finite optimum \(p_*\), an
optimal point, strong duality, and an optimal multiplier \(\lambda_*\ge0\).
Consider the \(\ell_1\)-style penalty

\[
P_\rho(x)=f(x)+\rho\sum_{i=1}^m[g_i(x)]_+,
\qquad [t]_+=\max\{t,0\}. \tag{12}
\]

If \(\rho\ge\|\lambda_*\|_\infty\), every primal optimum minimizes
\(P_\rho\). If \(\rho>\|\lambda_*\|_\infty\), every global minimizer of
\(P_\rho\) is feasible and primal-optimal, provided a penalty minimizer exists.

The proof exposes the threshold. Dual optimality gives

\[
f(x)+\lambda_*^Tg(x)\ge p_*\quad\text{for every }x.
\]

For each component with \(g_i(x)>0\), the penalty contributes
\(\rho g_i(x)\), at least \(\lambda_{*,i}g_i(x)\). For a satisfied component,
the penalty contributes zero, at least \(\lambda_{*,i}g_i(x)\), which is
nonpositive. Hence \(P_\rho(x)\ge p_*\). At a primal optimum the penalty is
zero and equality holds. With strict \(\rho>\|\lambda_*\|_\infty\), any
positive violation creates a strict surplus after the same comparison, ruling
out infeasible global minimizers.

### Worked example 3: equality at the penalty threshold can be ambiguous

Minimize \(-x\) subject to \(x\le0\). The solution is \(x_*=0\) with value
zero. For constraint \(g(x)=x\), stationarity gives \(-1+\lambda=0\), so the
optimal multiplier is \(\lambda_*=1\). The exact penalty is

\[
P_\rho(x)=-x+\rho[x]_+.
\]

At the threshold \(\rho=1\), every \(x\ge0\) has \(P_1(x)=0\). Thus infeasible
points minimize the penalty even though the primal optimum also does. For any
\(\rho>1\), positive \(x\) has value \((\rho-1)x>0\), while negative \(x\)
has value \(-x>0\); only \(x=0\) minimizes. This is why the strict inequality
is needed for the converse feasibility statement.

Quadratic penalties such as \(\rho[g(x)]_+^2\) are generally not exact for a
finite \(\rho\): their derivative with respect to a small violation vanishes
at feasibility, so a nonzero multiplier cannot be balanced there. They can
drive violation toward zero as \(\rho\to\infty\), at the cost of worsening
conditioning. An augmented Lagrangian adds multiplier estimates to avoid
relying on penalty growth alone; its convergence claims require a specified
update rule and subproblem accuracy.

## Cutting-plane and bundle models for a nonsmooth objective

At queried points \(x_j\), subgradients \(s_j\in\partial f(x_j)\) give global
minorants. Their maximum

\[
m_k(x)=\max_{0\le j\le k}
\{f(x_j)+\langle s_j,x-x_j\rangle\} \tag{13}
\]

satisfies \(m_k(x)\le f(x)\) everywhere. Minimizing \(m_k\) over \(C\) can
produce a lower bound on \(\min_C f\), but the piecewise-linear model can be
unbounded or propose huge unstable steps. A proximal bundle subproblem adds a
stabilizer around a center \(c_k\):

\[
\min_{x\in C}\left\{m_k(x)+\frac1{2t_k}\|x-c_k\|^2\right\}. \tag{14}
\]

The predicted reduction is compared with the actual reduction in \(f\). A
**serious step** moves the center after sufficient agreement; a **null step**
keeps the center but retains the new supporting plane. This memory distinguishes
bundle methods from a subgradient method that discards old information.

The lower-model property depends on true convex subgradients and sound function
values. Noisy slopes with unspecified error can cut above the graph, destroying
the bound. Inexact-oracle bundle theory uses declared error envelopes; it does
not treat arbitrary noise as exact support.

## A primal--dual splitting template

For the composite problem

\[
\min_x\{f(x)+g(Ax)\}, \tag{15}
\]

Fenchel duality gives the saddle function

\[
\mathcal L(x,y)=f(x)+\langle y,Ax\rangle-g^*(y).
\]

The saddle inclusions are

\[
0\in\partial f(x)+A^Ty,
\qquad
0\in\partial g^*(y)-Ax. \tag{16}
\]

When both proximal maps are tractable, one primal--dual scheme is

\[
\begin{aligned}
y_{k+1}&=\operatorname{prox}_{\sigma g^*}
(y_k+\sigma A\bar x_k),\\
x_{k+1}&=\operatorname{prox}_{\tau f}
(x_k-\tau A^Ty_{k+1}),\\
\bar x_{k+1}&=x_{k+1}+\theta(x_{k+1}-x_k),
\end{aligned} \tag{17}
\]

Use the standard extrapolated choice \(\theta=1\). For proper closed convex
\(f,g\), existence of a saddle point, and steps satisfying
\(\tau\sigma\|A\|_2^2<1\), standard finite-dimensional convergence results
apply to this stated scheme. Other extrapolation parameters require their own
convergence theorem; the interval \(0\le\theta\le1\) is not licensed by this
contract. Ergodic saddle-gap bounds of order \(1/k\) require specifying the
averaging and a bounded comparison set. They should not be restated as a
pointwise primal objective rate when intermediate \(x_k\) may not even make
\(g(Ax_k)\) finite.

### Worked example 4: one primal--dual step

Take \(f(x)=\delta_{[-1,1]}(x)\), \(g(z)=|z|\), and \(A=1\). Since
\(g^*(y)=\delta_{[-1,1]}(y)\), both proximal maps are interval projections.
Choose \(\tau=\sigma=1/2\), \(\theta=1\), \(x_0=1\), \(y_0=0\), and
\(\bar x_0=x_0\). Because \(\tau\sigma\|A\|^2=1/4<1\), the step condition
holds. Then

\[
y_1=P_{[-1,1]}(0+\tfrac12\cdot1)=0.5,
\]

and

\[
x_1=P_{[-1,1]}(1-\tfrac12\cdot0.5)=0.75.
\]

The step moves the primal point toward the minimizer \(x=0\) while building a
dual response. One iteration is not a certificate of convergence; the exact
arithmetic merely checks the proximal directions, domains, and step product.

## Moreau decomposition turns a conjugate proximal step into a primal one

Let g be proper, closed and convex and let p=prox₍αg₎(z), with
α>0. Its optimality condition says q=(z−p)/α belongs to ∂g(p).
Fenchel–Young equality is symmetric under conjugacy for closed
convex functions, so p belongs to ∂g*(q). Rearranging the definition
of q gives p=α(z/α−q). This is exactly the proximal optimality
condition for minimizing g*(y)+α‖y−z/α‖²/2. Uniqueness therefore
identifies q as prox₍g*/α₎(z/α), proving
$$z=\operatorname{prox}_{\alpha g}(z)
+\alpha\operatorname{prox}_{g^*/\alpha}(z/\alpha).$$
The reciprocal parameter on the conjugate proximal map is essential.
The identity uses the Euclidean metric on both sides; a weighted
version needs the paired dual metric rather than an unchanged
formula with arbitrary matrices inserted.

For g equal to a scaled absolute value, the primal proximal
step is soft thresholding and the conjugate step is interval
projection. The identity decomposes an input into its thresholded
part and its clipped remainder. It explains why a dual update
can be cheap even when the original expression seems nonsmooth,
without asserting that two arbitrary proximal maps commute.

## Declared oracle error enters the rate explicitly

An ε-subgradient satisfies f(y)≥f(x)+sᵀ(y−x)−ε for every y,
with ε≥0. This is a global allowance in the supporting inequality,
not merely an inaccurate derivative at one test direction.
Repeating the projected-distance calculation with such an oracle
adds 2αₖεₖ to the right side of inequality (6). Summation
therefore adds Σαₖεₖ divided by Σαₖ to the best-value bound.
If every error is bounded by a fixed positive tolerance, the
proof permits a corresponding error floor even when the step
terms otherwise vanish.

A claimed exact cutting-plane lower model cannot silently use
these inexact slopes at their uncorrected heights. Subtracting
the declared ε allowance gives a valid minorant under the
stated oracle contract. An arbitrary noisy gradient need not
have any known finite allowance over an unbounded domain.
This distinction connects an implementable stopping tolerance
to the mathematical lower bound that a bundle or primal–dual
certificate is allowed to report.

## Failure diagnostics and claim boundaries

1. **A subgradient need not be a descent direction.** Even an exact
   subgradient step can raise the objective; analysis uses distance inequalities
   and best or averaged values.
2. **Bounded subgradients are a hypothesis.** They can fail near the boundary
   of an extended-value domain. A quoted \(O(1/\sqrt{k})\) bound must name the
   region on which \(G\) is valid.
3. **Constraint qualifications govern decompositions.** Writing a sum of
   subgradients or KKT multipliers without a sum rule can invent a certificate
   that need not exist.
4. **Penalty success has a threshold and a global qualifier.** A stationary
   point of a penalized nonconvex problem is not automatically feasible or
   optimal for the constrained problem.
5. **Proximal maps generally do not commute.** Sequentially enforcing two
   structures is a new algorithm whose fixed points require analysis.
6. **Saddle residuals and objective gaps differ.** State which iterate,
   averaging rule, feasible domain, and comparison set define a reported gap.

## Practice with complete solutions

### Exercise 1: subdifferential of a maximum

Let \(f(x)=\max\{2x,-x+3\}\). Find its minimizer on \(\mathbb R\) and compute
the subdifferential there.

<details>
<summary>Hint 1</summary>

Find where the two affine branches agree.
</details>
<details>
<summary>Hint 2</summary>

The left slope is −1 and the right slope two; their convex hull contains zero.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The two affine pieces meet when
\(2x=-x+3\), so \(x=1\) and \(f(1)=2\). For \(x<1\), the active piece is
\(-x+3\), with slope \(-1\); for \(x>1\), the active piece is \(2x\), with
slope \(2\). The function decreases to the junction and increases afterward,
so \(x_*=1\). At a tie, the subdifferential is the convex hull of active
slopes:

\[
\partial f(1)=\operatorname{conv}\{-1,2\}=[-1,2].
\]

Because \(0\in[-1,2]\), the convex optimality condition holds.
</details>


### Exercise 2: derive the best-iterate bound

Starting from (6), assume \(\|x_0-x_*\|\le R\) and
\(\|s_k\|\le G\). Derive (7) and specialize it to
\(\alpha_k=R/(G\sqrt N)\).

<details>
<summary>Hint 1</summary>

Sum the distance inequality and discard the final negative distance.
</details>
<details>
<summary>Hint 2</summary>

The weighted average gap is at least its smallest term; substitute the constant step afterward.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Sum (6). The distance terms telescope, and the final negative
distance can be dropped:

\[
2\sum_{k=0}^{N-1}\alpha_k(f(x_k)-f_*)
\le R^2+G^2\sum_{k=0}^{N-1}\alpha_k^2.
\]

The weighted average gap is at least the smallest gap, so division by
\(2\sum\alpha_k\) gives (7). For the constant declared step,
\(\sum\alpha_k=R\sqrt N/G\) and
\(\sum\alpha_k^2=R^2/G^2\). Thus the numerator is \(2R^2\), the denominator
is \(2R\sqrt N/G\), and the ratio is \(RG/\sqrt N\).
</details>


### Exercise 3: projection fixed point on an interval

Minimize \(f(x)=(x-3)^2\) over \([0,1]\). Verify the projection fixed-point
condition (9) at the solution for every \(\alpha>0\).

<details>
<summary>Hint 1</summary>

Try the right endpoint, since the unconstrained minimum is outside the interval.
</details>
<details>
<summary>Hint 2</summary>

Its trial is 1+4α, which always clips back to one.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The closest feasible point to the unconstrained minimizer
\(3\) is \(x_*=1\). Its gradient is \(f'(1)=2(1-3)=-4\). Therefore

\[
x_*-\alpha f'(x_*)=1+4\alpha>1.
\]

Projection onto \([0,1]\) clips every number above one to one, so
\(P_{[0,1]}(1+4\alpha)=1=x_*\) for every \(\alpha>0\). Equivalently,
\(-f'(1)=4\in N_{[0,1]}(1)=[0,\infty)\), confirming gradient--normal balance.
</details>


### Exercise 4: an exact penalty threshold

Minimize \((x-2)^2\) subject to \(x\le1\). Find the optimal multiplier and
analyze minimizers of
\(P_\rho(x)=(x-2)^2+\rho[x-1]_+\) for \(\rho\ge0\).

<details>
<summary>Hint 1</summary>

Compute the constrained stationarity multiplier at x=1.
</details>
<details>
<summary>Hint 2</summary>

On the violated branch differentiate the penalized objective and check whether its zero lies above one.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The constrained solution is \(x_*=1\). With
\(g(x)=x-1\), stationarity is
\(2(x-2)+\lambda=0\), so \(\lambda_*=2\). For \(x\le1\), the penalty is
\((x-2)^2\), minimized on that half-line at \(x=1\). For \(x>1\), its
derivative is

\[
2(x-2)+\rho,
\]

whose unconstrained zero is \(x=2-\rho/2\). If \(0\le\rho<2\), this lies
above one and is the infeasible global penalty minimizer. If \(\rho\ge2\), the
right-hand branch is nondecreasing from \(x=1\), so \(x=1\) minimizes the
penalty. Here equality at the threshold happens to exclude other minimizers;
the earlier linear example shows that this is not guaranteed in general.
</details>


### Exercise 5: saddle inclusions for an absolute linear image

For \(\min_x\tfrac12\|x-b\|^2+\lambda\|Ax\|_1\), write the saddle inclusions
and the dual feasibility condition without solving the problem.

<details>
<summary>Hint 1</summary>

Conjugate the scaled ℓ₁ norm.
</details>
<details>
<summary>Hint 2</summary>

The dual belongs to the ℓ∞ ball, while the primal stationarity relation is x−b+Aᵀy=0.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Set \(f(x)=\tfrac12\|x-b\|^2\) and
\(g(z)=\lambda\|z\|_1\). Its conjugate is the indicator of the
\(\ell_\infty\) ball:

\[
g^*(y)=\delta_{\{y:\|y\|_\infty\le\lambda\}}(y).
\]

The first saddle inclusion is ordinary stationarity,

\[
0=x-b+A^Ty.
\]

The second is
\(0\in N_{\|\cdot\|_\infty\le\lambda}(y)-Ax\), equivalently
\(Ax\in N_{\|\cdot\|_\infty\le\lambda}(y)\). In subgradient form it is
\(y\in\lambda\partial\|Ax\|_1\). Dual feasibility is
\(\|y\|_\infty\le\lambda\). These relations, together with matching primal
and dual values when the qualification holds, form an optimality certificate.
</details>

### Exercise 6: Moreau decomposition numerically

For g(x)=2|x|, α=1/2 and z=3, evaluate both proximal terms
in the decomposition and verify their sum.

<details>
<summary>Hint 1</summary>

The primal threshold is α times two; the conjugate is an interval indicator.
</details>
<details>
<summary>Hint 2</summary>

Project z/α=6 onto [−2,2] and multiply that result by α.
</details>
<details>
<summary>Full solution</summary>

The primal proximal point is 3−1=2. The conjugate proximal point
is two, since the indicator's positive scale does not alter
its interval projection. Multiplication by α gives one, and
2+1=3 as required. Confusing the scaled conjugate input with
the original input can accidentally work for this saturated
example, so the full parameter identity should still be retained.
</details>

### Exercise 7: a non-descent subgradient

For f(x)=|x| at x=0, choose subgradient one and a positive
step α. What happens to the objective? Does this contradict (6)?

<details>
<summary>Hint 1</summary>

The new unconstrained point is −α, whose objective is α.
</details>
<details>
<summary>Hint 2</summary>

In (6), the old objective gap is zero and the distance terms cancel the quadratic step term.
</details>
<details>
<summary>Full solution</summary>

The objective rises from zero to α. The old point already
minimizes f, but its subdifferential contains nonzero vectors
as well as zero. With x*=0, the right side of (6) is
0−α²+α²=0, matching its zero left side. The inequality
controls weighted old gaps and distances, not descent at
every accepted subgradient update. An oracle choosing zero
at this optimum would instead leave it fixed.
</details>

### Exercise 8: best and averaged outputs

Under the projected-subgradient assumptions, define the α-weighted
average of the first N feasible iterates. Prove that its
objective gap obeys the same right side as (7).

<details>
<summary>Hint 1</summary>

Convexity of C keeps the weighted average feasible.
</details>
<details>
<summary>Hint 2</summary>

Apply Jensen's inequality to the objective and then use the summed distance inequality.
</details>
<details>
<summary>Full solution</summary>

Let a=Σαₖ and x̄=Σαₖxₖ/a. The positive normalized weights
make x̄ feasible. Convexity gives f(x̄)−f*≤Σαₖ(f(xₖ)−f*)/a.
The summed inequality bounds that numerator by
(R²+G²Σαₖ²)/2. Dividing yields the stated bound. This
provides an averaged output certificate; it does not
turn the same formula into a last-iterate guarantee.
</details>

### Exercise 9: an oracle error floor

Suppose every selected ε-subgradient has allowance at most
0.02. What extra term enters the best-value bound, and
can decreasing the steps alone remove it in this proof?

<details>
<summary>Hint 1</summary>

The extra contribution is a weighted average of the allowances.
</details>
<details>
<summary>Hint 2</summary>

All weights are positive, so that average is at most 0.02.
</details>
<details>
<summary>Full solution</summary>

The additional upper allowance is Σαₖεₖ/Σαₖ≤0.02.
Decreasing step lengths does not force this ratio
to zero if the allowances remain at that fixed
level. Smaller or appropriately vanishing oracle
errors are needed for a vanishing certificate
through this argument. Actual errors may be better,
but the stated information does not prove that.
</details>

### Exercise 10: a stabilized model value is not a lower bound

Let f(x)=(x−1)² on the real line. Suppose its exact lower
model is f itself, and stabilize it at zero with term x².
Compare the stabilized minimum with the true optimum.

<details>
<summary>Hint 1</summary>

Minimize (x−1)²+x² by differentiation.
</details>
<details>
<summary>Hint 2</summary>

The stabilized minimizer is one half, whereas the true objective can be zero.
</details>
<details>
<summary>Full solution</summary>

The stabilized minimum is one half at x=1/2.
The original minimum is zero at x=1. Thus the
stabilized subproblem value is above the optimum,
even when the unstabilized model is exact. The
quadratic promotes controlled steps but changes the
value being minimized. A bundle certificate must
extract a valid unstabilized bound or account for
the stabilizer; the step objective cannot be labeled
a global lower bound merely because its cutting
planes were valid.
</details>

## Summary and connections

Convex nonsmooth optimality is a balance of subgradients and normals.
Projected subgradient descent gives a transparent \(O(1/\sqrt{k})\) best-value
bound under boundedness assumptions, while proximal and primal--dual methods
exploit more structure. Exact penalties connect multiplier magnitudes to a
finite feasibility threshold, and bundle methods preserve global affine
minorants rather than discarding them.

Backward, the chapter uses separation, duality, and proximal fixed points.
Forward, these distinctions matter when continuous relaxations are embedded in
discrete reasoning: a relaxation bound must remain valid, an approximate solve
needs a declared certificate, and cutting information must be separated from
heuristic progress. The mathematical form of a residual determines what it can
prove.
