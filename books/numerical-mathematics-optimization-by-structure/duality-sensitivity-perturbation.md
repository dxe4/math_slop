
# Duality, Sensitivity, and Perturbation Functions {#section-1-duality-sensitivity-and-perturbation-functions}

An optimization answer is rarely just a point. We also want to know how much
the objective can improve, how strongly a constraint limits it, and how the
answer changes when data move. Duality organizes all three questions. A dual
feasible vector gives a bound, an optimal multiplier supports the value
function, and a primal--dual gap measures how far a candidate certificate is
from exactness.

This chapter assumes the preceding separation-and-conjugacy material, including
proper closed convex functions, subgradients, conjugates, and supporting
hyperplanes. It uses the Lagrangian sign convention developed below: inequalities are written \(g_i(x)\le0\), their multipliers
satisfy \(\lambda_i\ge0\), and equalities have unrestricted multipliers. All
spaces are finite-dimensional. These conventions are part of the mathematics,
not cosmetic notation; changing one sign changes every sensitivity formula.

<a id="section-15-foundational-duality-reading-retained-from-the-original"></a>
## Foundational duality reading retained from the original chapter {#section-17-foundational-duality-reading-retained-from-the-original}

<a id="section-17-lagrangian-and-weak-duality"></a>
## Lagrangian and weak duality {#section-19-lagrangian-and-weak-duality}

For a primal problem

\(\min f(x)\) subject to \(g_i(x)\le 0\) and \(h_j(x)=0\),

define

\(L(x,\lambda,\nu)=f(x)+\sum \lambda_i g_i(x)+\sum \nu_j h_j(x)\), with \(\lambda_i\ge 0\).

The dual function is \(q(\lambda,\nu)=\inf_x L(x,\lambda,\nu)\). For every primal-feasible \(x\) and dual-feasible multipliers,

\(q(\lambda,\nu)\le f(x)\).

**Reason.** The equality terms vanish, and \(\lambda_i g_i(x)\le 0\); therefore \(L(x,\lambda,\nu)\le f(x)\). Taking an infimum over all x can only decrease the left side. This is weak duality and needs no convexity.

For minimization, a dual value is a lower bound and a primal feasible value is an upper bound. Their difference is a certificate of suboptimality when both computations are trustworthy.

<a id="section-35-strong-duality-is-conditional"></a>
## Strong duality is conditional {#section-37-strong-duality-is-conditional}

Convexity plus an appropriate constraint qualification can make the best dual bound equal the primal optimum. A standard Slater condition requires a point satisfying convex inequalities strictly and affine equalities exactly. Boundary-only feasibility or nonconvex constraints can produce a duality gap.

Never write “by duality” without saying weak or strong and naming the hypotheses that license equality or multiplier existence.

<a id="section-41-exact-dual-example"></a>
### Exact dual example {#section-43-exact-dual-example}

Minimize \(x^{2}\) subject to \(x\ge 1\), written \(1-x\le 0\). The Lagrangian is

\(L=x^{2}+\lambda(1-x)\).

Minimizing over x gives \(x=\lambda/2\) and dual function \(q(\lambda)=\lambda-\lambda^{2}/4\) for \(\lambda\ge 0\). This concave quadratic is maximized at \(\lambda=2\), with value one. The primal optimum is \(x=1\), value one, so the gap is zero. Complementarity \(\lambda(1-x)=0\) holds.

<a id="section-49-sensitivity-interpretation"></a>
## Sensitivity interpretation {#section-51-sensitivity-interpretation}

Under regularity, a multiplier measures the first-order change in optimal value when a constraint bound changes. Its sign and units depend on the constraint convention. This is a local derivative statement, not permission to extrapolate a linear price across large changes or active-set transitions.

<a id="section-53-a-family-of-problems-not-one-isolated-problem"></a>
## A family of problems, not one isolated problem {#section-55-a-family-of-problems-not-one-isolated-problem}

Consider the convex problem

\[
\begin{aligned}
p(0,0)=\inf_x\quad & f(x)\\
\text{subject to}\quad &g_i(x)\le0,\quad i=1,\ldots,m,\\
&Ax=b,
\end{aligned} \tag{1}
\]

where \(f,g_1,\ldots,g_m\) are convex extended-real functions and the equality
map is affine. Introduce right-hand-side perturbations

\[
p(u,v)=\inf_x\{f(x):g(x)\le u,\ Ax-b=v\}. \tag{2}
\]

The value is \(+\infty\) if the perturbed constraints are infeasible and may
be \(-\infty\) if the objective is unbounded below. A useful local sensitivity
claim therefore requires the value to be proper near the parameter of
interest.

The value function \(p\) is convex. To see why, let \(x_1,x_2\) be feasible
for parameters \((u_1,v_1)\) and \((u_2,v_2)\). For \(0\le t\le1\), convexity
gives

\[
g(tx_1+(1-t)x_2)
\le t g(x_1)+(1-t)g(x_2)
\le tu_1+(1-t)u_2,
\]

and the affine equality has the combined right-hand side
\(tv_1+(1-t)v_2\). The objective at the combined point is at most the
corresponding convex combination. Taking infima, with arbitrarily accurate
near-minimizers if minima are not attained, proves convexity.

Monotonicity is more specialized. Increasing a component of \(u\) relaxes an
inequality, so \(p\) is nonincreasing in each component of \(u\). No analogous
monotonicity holds for the equality perturbation \(v\).

<a id="section-96-the-dual-as-a-supporting-affine-bound"></a>
## The dual as a supporting affine bound {#section-98-the-dual-as-a-supporting-affine-bound}

For \(\lambda\ge0\) and unrestricted \(\nu\), define the unperturbed
Lagrangian and dual function

\[
L_0(x,\lambda,\nu)
=f(x)+\lambda^Tg(x)+\nu^T(Ax-b),
\qquad
q(\lambda,\nu)=\inf_x L_0(x,\lambda,\nu). \tag{3}
\]

If \(x\) is feasible for the perturbed problem, then
\(g(x)-u\le0\) and \(Ax-b-v=0\). Consequently,

\[
\begin{aligned}
f(x)
&\ge f(x)+\lambda^T(g(x)-u)+\nu^T(Ax-b-v)\\
&\ge q(\lambda,\nu)-\lambda^Tu-\nu^Tv.
\end{aligned}
\]

Taking the infimum over feasible \(x\) yields the global affine lower bound

\[
p(u,v)\ge q(\lambda,\nu)-\lambda^Tu-\nu^Tv. \tag{4}
\]

At \((u,v)=(0,0)\), maximizing this lower bound produces the Lagrange dual:

\[
d^*=\sup_{\lambda\ge0,\nu}q(\lambda,\nu)\le p^*. \tag{5}
\]

The inequality is **weak duality** and needs no convexity. Convexity becomes
decisive when asking whether the best affine lower bound touches the value
function.

Suppose \((\lambda_*,\nu_*)\) attains the dual optimum and strong duality holds,
so \(q(\lambda_*,\nu_*)=p(0,0)\). Equation (4) becomes

\[
p(u,v)\ge p(0,0)-\lambda_*^Tu-\nu_*^Tv. \tag{6}
\]

Therefore

\[
(-\lambda_*,-\nu_*)\in\partial p(0,0). \tag{7}
\]

The minus signs follow from the chosen relaxation coordinates. A positive
\(u_i\) relaxes constraint \(i\), so its local value slope is nonpositive. If
instead a parameter appears on the left as \(a_i-g_i(x)\le0\), its multiplier
appears with a positive parameter slope. Sensitivity formulas should always be
derived from the parameterized Lagrangian rather than recalled by slogan.

<a id="section-154-a-precise-strong-duality-guarantee"></a>
### A precise strong-duality guarantee {#section-156-a-precise-strong-duality-guarantee}

A clean finite-valued version of Slater's theorem is the following. Suppose
\(f,g_1,\ldots,g_m:\mathbb R^n\to\mathbb R\) are convex, hence continuous,
the primal value in (1) is finite, and there exists \(\bar x\) such that

\[
A\bar x=b,\qquad g_i(\bar x)<0\quad\text{for every }i. \tag{8}
\]

Then \(d^*=p^*\), and a dual optimal pair exists. For extended-real functions,
the appropriate statement replaces global finiteness by a relative-interior
qualification: the strict feasible point must lie in the relative interior of
the common effective domain, with redundant equality directions handled in
their affine hull.

The proof uses separation. The set of simultaneously attainable constraint
residuals and objective upper bounds is convex. Strict feasibility gives it
enough relative interior that a supporting hyperplane at the optimal boundary
has a nonzero objective coefficient. Normalizing that coefficient to one
produces \(\lambda\ge0\) and \(\nu\); the supporting inequality is precisely
the Lagrangian lower bound. Without the qualification, the separating
hyperplane may be vertical, so this normalization and multiplier conclusion
can fail.

Slater's condition is sufficient, not necessary. Its failure does not itself
prove a duality gap. Conversely, convexity alone does not authorize strong
duality or multiplier attainment. A careful result records separately: primal
feasibility, finite value, attainment of each side, equality of values, and any
constraint qualification used.

<a id="section-185-worked-example-1-one-active-lower-bound"></a>
### Worked example 1: one active lower bound {#section-187-worked-example-1-one-active-lower-bound}

For a parameter \(a\), consider

\[
w(a)=\min_x\left\{\frac12x^2:x\ge a\right\}. \tag{9}
\]

Write the constraint as \(a-x\le0\). If \(a>0\), the minimizer is \(x_*=a\)
and \(w(a)=a^2/2\). The Lagrangian is

\[
L(x,\lambda;a)=\frac12x^2+\lambda(a-x),\qquad\lambda\ge0.
\]

Stationarity gives \(x=\lambda\). Complementarity at the active constraint
then gives \(\lambda_*=a\). Differentiating the exact value yields
\(w'(a)=a=\lambda_*\), as expected because \(a\) entered the Lagrangian with
the positive coefficient \(\lambda a\).

For \(a<0\), the unconstrained minimizer \(x=0\) is feasible,
\(w(a)=0\), and \(\lambda_*=0\). At \(a=0\), both formulas give derivative
zero, although the second derivative changes. An active constraint need not
have a positive multiplier: at \(a=0\), the constraint is active but locally
has zero first-order price.

<a id="section-211-differentiability-subgradients-and-changing-active-sets"></a>
## Differentiability, subgradients, and changing active sets {#section-213-differentiability-subgradients-and-changing-active-sets}

Equation (7) is a subgradient statement and remains meaningful when \(p\) is
nondifferentiable. If \(p\) is differentiable at the origin and strong duality
holds, every dual optimum must have the same parameter slope:

\[
\nabla_u p(0,0)=-\lambda_*,
\qquad
\nabla_v p(0,0)=-\nu_*.
\]

For the full independent perturbation coordinates in (2), this identifies the
entire multiplier pair. If \(p\) is differentiable, any two attained dual
optima produce the same \((-\lambda_*,-\nu_*)\), so the represented
\((\lambda_*,\nu_*)\) is unique. A different conclusion is possible under a
reduced or tied parameterization. If one parameter \(h\) perturbs several
constraints through a linear map, sensitivity observes only the adjoint image
of the multipliers; distinct multiplier vectors can then produce the same
reduced slope. Duplicating constraints while retaining the independent
\(u_i\)-coordinates of (2) does not create that invisibility and commonly
produces multiple subgradients instead.

When \(p\) has several subgradients, a multiplier supplies a one-sided global
affine bound, not a single exact derivative in every direction. Its directional
prediction for a small perturbation \(h\) is

\[
p(th)\ge p(0)+t\langle s,h\rangle,
\qquad s=(-\lambda_*,-\nu_*),\quad t>0.
\]

Equality to first order requires additional regularity and the appropriate
directional derivative. Active-set changes often create kinks.

<a id="section-246-worked-example-2-a-kink-and-nonunique-multipliers"></a>
### Worked example 2: a kink and nonunique multipliers {#section-248-worked-example-2-a-kink-and-nonunique-multipliers}

Let \(a,b>0\) and solve

\[
\min_x\frac12x^2
\quad\text{subject to}\quad x\ge a,\quad x\ge b. \tag{10}
\]

The solution is \(x_*=\max\{a,b\}\), so

\[
w(a,b)=\frac12\max\{a,b\}^2.
\]

At \(a>b\), only the first constraint controls the answer and
\(\nabla w=(a,0)\). At \(b>a\), \(\nabla w=(0,b)\). At \(a=b=c\), the
Lagrangian

\[
L=\frac12x^2+\lambda_1(a-x)+\lambda_2(b-x)
\]

has stationarity \(x=\lambda_1+\lambda_2\). Every pair
\(\lambda_1,\lambda_2\ge0\) with \(\lambda_1+\lambda_2=c\) is optimal. These
vectors form exactly the subdifferential

\[
\partial w(c,c)=\operatorname{conv}\{(c,0),(0,c)\}.
\]

Reporting either multiplier as “the derivative” at the kink would discard the
direction dependence. Reporting the whole subdifferential is correct.

<a id="section-280-fenchel-duality-for-composite-structure"></a>
## Fenchel duality for composite structure {#section-282-fenchel-duality-for-composite-structure}

Conjugacy derives duals without manufacturing inequality constraints. Consider

\[
\inf_x\{f(x)+g(Ax)\}, \tag{11}
\]

with proper closed convex \(f\) and \(g\). Introduce \(z=Ax\) and multiplier
\(y\):

\[
\inf_{x,z}\sup_y\{f(x)+g(z)+\langle y,Ax-z\rangle\}.
\]

For fixed \(y\), minimizing in \(x\) gives
\(-f^*(-A^Ty)\), while minimizing in \(z\) gives \(-g^*(y)\). The Fenchel dual
is therefore

\[
\sup_y\{-f^*(-A^Ty)-g^*(y)\}. \tag{12}
\]

Weak duality follows directly from two Fenchel--Young inequalities. A standard
finite-dimensional qualification for equality of optimal values is the
existence of an \(x\in\operatorname{ri}(\operatorname{dom}f)\) such that
\(Ax\in\operatorname{ri}(\operatorname{dom}g)\), together with a finite primal
value. Attainment statements require the corresponding closedness conditions;
one should not infer them solely from the displayed algebra.

Primal and dual candidates \(x,y\) are optimal when

\[
-A^Ty\in\partial f(x),
\qquad
y\in\partial g(Ax). \tag{13}
\]

Each inclusion is an equality case of Fenchel--Young. The primal--dual gap
splits into two nonnegative terms:

\[
\begin{aligned}
G(x,y)
={}&f(x)+f^*(-A^Ty)+\langle A^Ty,x\rangle\\
&+g(Ax)+g^*(y)-\langle y,Ax\rangle\ge0. \tag{14}
\end{aligned}
\]

The two inner products cancel, leaving primal value minus dual value. This
decomposition diagnoses which constitutive relation in (13) is inaccurate.

<a id="section-332-worked-example-3-soft-thresholding-from-a-dual-interval"></a>
### Worked example 3: soft thresholding from a dual interval {#section-334-worked-example-3-soft-thresholding-from-a-dual-interval}

Take the scalar problem

\[
\min_x\left\{\frac12(x-b)^2+\lambda|x|\right\},\qquad\lambda>0. \tag{15}
\]

Here \(f(x)=\tfrac12(x-b)^2\), \(g(z)=\lambda|z|\), and \(A=1\). Direct
calculation gives

\[
f^*(s)=bs+\frac12s^2,
\qquad
g^*(y)=\delta_{[-\lambda,\lambda]}(y).
\]

Thus the dual is

\[
\max_{|y|\le\lambda}\left\{by-\frac12y^2\right\}.
\]

Its solution is the Euclidean projection
\(y_*=\operatorname{clip}(b,-\lambda,\lambda)\). Relation (13) gives
\(x_*=b-y_*\), or

\[
x_*=\operatorname{sign}(b)\max\{|b|-\lambda,0\}.
\]

For \(b=3\) and \(\lambda=1\), the dual solution is \(y_*=1\) and the primal
solution is \(x_*=2\). The primal value is
\(\tfrac12(2-3)^2+|2|=2.5\), while the dual value is
\(3(1)-\tfrac12(1)^2=2.5\). The matching values and the relations
\(-y_*=x_*-b\), \(y_*\in\partial|x_*|\) provide independent checks.

<a id="section-369-certificates-approximate-answers-and-scaling"></a>
## Certificates, approximate answers, and scaling {#section-371-certificates-approximate-answers-and-scaling}

For a minimization problem, any primal-feasible point gives an upper bound and
any dual-feasible point gives a lower bound. If their objective values are
\(P\) and \(D\), then

\[
D\le p^*\le P,
\qquad P-D\ge0. \tag{16}
\]

The interval is a certificate only when feasibility and objective evaluations
are themselves trustworthy. A tiny algebraic duality gap attached to a
constraint-violating primal point is not a bound on the original problem.
Likewise, an unrestricted numerical vector used where \(\lambda\ge0\) is not
dual feasible.

Absolute gap, relative gap, feasibility residual, and stationarity residual
answer different questions. A robust report states a scale convention, for
example

\[
\frac{P-D}{1+|P|+|D|},
\]

and lists feasibility separately. Constraint scaling changes multiplier
magnitudes: replacing \(g_i(x)\le0\) by \(c g_i(x)\le0\), \(c>0\), divides its
multiplier by \(c\). The product that enters the Lagrangian is invariant, but a
bare multiplier is not comparable across arbitrary scalings.

Finite-difference sensitivity checks also need care. If a value solve at each
perturbed parameter is inaccurate by \(\varepsilon\), dividing a difference by
a very small step \(h\) can amplify optimization error to order
\(\varepsilon/h\). At a kink, left and right differences legitimately disagree.
Use several step sizes, solve tolerances tighter than the predicted value
change, and compare against the correct subgradient or directional derivative.

<a id="section-406-worked-example-4-an-exact-equality-constraint-certifica"></a>
### Worked example 4: an exact equality-constraint certificate {#section-408-worked-example-4-an-exact-equality-constraint-certifica}

Solve

\[
\min_{x\in\mathbb R^n}\frac12\|x\|_2^2
\quad\text{subject to}\quad a^Tx=b,\qquad a\ne0. \tag{17}
\]

The Lagrangian is
\(L(x,\nu)=\tfrac12\|x\|^2+\nu(a^Tx-b)\). Minimizing in \(x\) gives
\(x=-\nu a\), hence

\[
q(\nu)=-\frac12\nu^2\|a\|_2^2-\nu b.
\]

The maximizing multiplier is
\(\nu_*=-b/\|a\|_2^2\), and

\[
x_*=-\nu_*a=\frac{b}{\|a\|_2^2}a,\qquad
p^*=q(\nu_*)=\frac{b^2}{2\|a\|_2^2}.
\]

If the equality is parameterized as \(a^Tx-b=v\), formula (7) says the value
slope at \(v=0\) is \(-\nu_*=b/\|a\|^2\). Directly replacing \(b\) by \(b+v\)
in the exact value confirms that derivative. This sign check is safer than
calling \(\nu_*\) a shadow price without naming the perturbation convention.

<a id="section-436-failure-diagnostics-and-claim-boundaries"></a>
## Failure diagnostics and claim boundaries {#section-438-failure-diagnostics-and-claim-boundaries}

1. **A dual derivation is not a strong-duality proof.** Algebraically taking an
   infimum produces a valid lower bound. Equality needs a theorem whose
   hypotheses have been checked.
2. **Zero gap does not imply attained solutions.** Supremal or infimal values
   may agree while one side only has a sequence approaching its value.
3. **A multiplier is a local value slope only for its declared parameter.**
   Reversing a right-hand-side sign reverses the slope.
4. **Nonunique multipliers signal a subdifferential, redundancy, or
   degeneracy.** Selecting one vector does not make the value differentiable.
5. **Sensitivity of optimal value is not sensitivity of the optimizer.** The
   value may be smooth while the optimizer is nonunique or discontinuous.
6. **A computed gap inherits arithmetic and feasibility error.** For rigorous
   bounds, use outward error control or independently certified evaluations.

These boundaries make duality more useful, not less: they identify exactly
what a numerical certificate proves.

<a id="section-455-practice-with-complete-solutions"></a>
## Practice with complete solutions {#section-457-practice-with-complete-solutions}

<a id="section-457-exercise-1-derive-and-interpret-an-equality-dual"></a>
### Exercise 1: derive and interpret an equality dual {#section-459-exercise-1-derive-and-interpret-an-equality-dual}

For problem (17), derive the dual, primal optimizer, and optimal value without
using the worked result. Then differentiate the value with respect to \(b\) and
reconcile the derivative with the multiplier sign.

<details>
<summary>Hint 1</summary>

Minimize the equality Lagrangian over x first.
</details>
<details>
<summary>Hint 2</summary>

Stationarity gives x=−νa; maximize the resulting concave quadratic in ν.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Stationarity of
\(L=\tfrac12\|x\|^2+\nu(a^Tx-b)\) gives \(x=-\nu a\). Substitution yields
\(q(\nu)=-\tfrac12\nu^2\|a\|^2-\nu b\). Its derivative is
\(-\nu\|a\|^2-b\), so
\(\nu_*=-b/\|a\|^2\). Therefore
\(x_*=ba/\|a\|^2\) and
\(p(b)=b^2/(2\|a\|^2)\). Direct differentiation gives
\(p'(b)=b/\|a\|^2=-\nu_*\). The negative sign occurs because the Lagrangian
contains \(-\nu b\). Had the equality been written \(b-a^Tx=0\), both the
multiplier sign and its formula would reverse while the derivative would not.
</details>


<a id="section-489-exercise-2-relaxation-coordinates-and-a-global-bound"></a>
### Exercise 2: relaxation coordinates and a global bound {#section-491-exercise-2-relaxation-coordinates-and-a-global-bound}

Suppose \(p(u)=\inf\{f(x):g(x)\le u\}\), and at \(u=0\) strong duality holds
with optimal multiplier \(\lambda_*\ge0\). Prove that
\(p(u)\ge p(0)-\lambda_*^Tu\). What does it say for \(u\ge0\)?

<details>
<summary>Hint 1</summary>

Keep the unperturbed optimal multipliers fixed.
</details>
<details>
<summary>Hint 2</summary>

The perturbed Lagrangian subtracts λᵀu from its unperturbed infimum.
</details>
<details>
<summary>Full solution</summary>

**Solution.** For any point feasible at \(u\),

\[
f(x)\ge f(x)+\lambda_*^T(g(x)-u)
\ge \inf_z\{f(z)+\lambda_*^Tg(z)\}-\lambda_*^Tu.
\]

Strong duality makes the infimum on the right equal to \(p(0)\). Infimizing
the left over perturbed-feasible points proves the claim. For \(u\ge0\), the
constraints are relaxed and monotonicity gives \(p(u)\le p(0)\), while the
multiplier bound gives

\[
p(0)-\lambda_*^Tu\le p(u)\le p(0).
\]

Thus \(\lambda_*^Tu\) bounds the possible improvement globally, although it
need not equal the improvement for a finite perturbation.
</details>


<a id="section-529-exercise-3-a-fenchel-dual-for-distance-plus-an-absolute"></a>
### Exercise 3: a Fenchel dual for distance plus an absolute value {#section-531-exercise-3-a-fenchel-dual-for-distance-plus-an-absolute}

Derive and solve the dual of
\(\min_x\tfrac12(x-4)^2+2|x|\), and give a zero-gap certificate.

<details>
<summary>Hint 1</summary>

Use the conjugate of a shifted square and of twice the absolute value.
</details>
<details>
<summary>Hint 2</summary>

Project the unconstrained dual maximizer 4 onto [−2,2].
</details>
<details>
<summary>Full solution</summary>

**Solution.** With \(f(x)=\tfrac12(x-4)^2\),
\(f^*(s)=4s+\tfrac12s^2\). For \(g(x)=2|x|\),
\(g^*(y)=\delta_{[-2,2]}(y)\). Formula (12) gives

\[
\max_{|y|\le2}\left\{4y-\frac12y^2\right\}.
\]

The unconstrained maximizer is \(y=4\), so the interval projection is
\(y_*=2\). The primal relation gives \(x_*=4-y_*=2\). Its value is
\(\tfrac12(2-4)^2+2|2|=6\); the dual value is \(4(2)-\tfrac12(2)^2=6\).
Moreover, \(-y_*=x_*-4=-2\) and \(y_*=2\in2\partial|2|=\{2\}\). Feasibility,
matching values, and both subgradient relations form the certificate.
</details>


<a id="section-563-exercise-4-slater-failure-without-a-value-gap"></a>
### Exercise 4: Slater failure without a value gap {#section-565-exercise-4-slater-failure-without-a-value-gap}

Consider \(\min_x x\) subject to \(x^2\le0\). Compute primal and dual values,
and determine whether the dual optimum is attained.

<details>
<summary>Hint 1</summary>

Find the feasible set before forming the dual.
</details>
<details>
<summary>Hint 2</summary>

For λ>0 complete the square in x+λx²; compare with λ=0.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The only feasible point is \(x=0\), so the primal optimum and
value are \(x_*=0\), \(p^*=0\). The Lagrangian is

\[
L(x,\lambda)=x+\lambda x^2,\qquad\lambda\ge0.
\]

For \(\lambda=0\), its infimum is \(-\infty\). For \(\lambda>0\), completing
the square or setting \(1+2\lambda x=0\) gives
\(q(\lambda)=-1/(4\lambda)\). Hence

\[
d^*=\sup_{\lambda>0}-\frac1{4\lambda}=0=p^*,
\]

but no finite \(\lambda\) attains zero. There is no strictly feasible point,
because \(x^2<0\) is impossible. This example shows that failure of Slater's
condition does not force a gap, but the theorem's multiplier-attainment
conclusion can indeed fail.
</details>


<a id="section-603-exercise-5-certify-an-approximate-interval"></a>
### Exercise 5: certify an approximate interval {#section-605-exercise-5-certify-an-approximate-interval}

Suppose a convex minimization computation produces a genuinely primal-feasible
point of value \(12.04\) and a genuinely dual-feasible point of value
\(11.97\). State everything that follows about \(p^*\), the absolute gap, and
the relative gap \((P-D)/(1+|P|+|D|)\). Explain what would change if primal
feasibility were only suspected.

<details>
<summary>Hint 1</summary>

Put the genuinely dual-feasible value below the optimum and the primal value above.
</details>
<details>
<summary>Hint 2</summary>

Subtract the bounds, then divide by the specified denominator; feasibility is separate.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Weak duality gives

\[
11.97\le p^*\le12.04.
\]

The absolute certified gap is \(0.07\). The declared relative gap is

\[
\frac{0.07}{1+12.04+11.97}=\frac{0.07}{25.01}\approx0.002799,
\]

or about \(0.28\%\). If primal feasibility were not certified, \(12.04\) would
not necessarily be an upper bound for the constrained optimum, so neither the
interval nor the stated gap would be certified. The dual lower bound could
remain valid if dual feasibility and its arithmetic evaluation were still
rigorous.
</details>

<a id="section-643-exercise-6-the-original-dual-gap-question"></a>
### Exercise 6: the original dual-gap question {#section-645-exercise-6-the-original-dual-gap-question}

A feasible point has value 12.4 and a valid dual point has value 12.1 in a minimization problem. What follows?

<details>
<summary>Hint 1</summary>

Weak duality orders both values around the same optimum.
</details>
<details>
<summary>Hint 2</summary>

Subtract the lower bound from the feasible upper value; do not infer a distance without curvature.
</details>
<details>
<summary>Full solution</summary>

The optimum lies in $[12.1,12.4]$, so the feasible point is at most 0.3 above optimum in absolute objective value. A relative claim needs a safe scale and sign handling. This is the original exercise from the earlier combined convexity–duality reading, retained with its numerical data and conclusion.
</details>

<a id="section-663-exercise-7-constraint-units-and-multipliers"></a>
### Exercise 7: constraint units and multipliers {#section-665-exercise-7-constraint-units-and-multipliers}

Replace g(x)≤0 by cg(x)≤0 for c>0. Given a primal-dual KKT certificate,
determine the new multiplier and explain which Lagrangian quantity is invariant.

<details>
<summary>Hint 1</summary>

Require the old and new multiplier terms to be the same function of x.
</details>
<details>
<summary>Hint 2</summary>

Solve $\widetilde\lambda c=\lambda$ and inspect complementarity and sign.
</details>
<details>
<summary>Full solution</summary>

Set $\widetilde\lambda=\lambda/c$. It remains nonnegative, has the same
complementarity product $\widetilde\lambda cg=\lambda g$, and supplies the
same stationarity term $\widetilde\lambda c\nabla g=\lambda\nabla g$.
The entire Lagrangian and its infimum therefore remain unchanged. Bare
multiplier magnitude depends on units; the product and physical sensitivity
after converting the parameter units do not. A negative scaling would reverse
the inequality and cannot be handled by this positive-rescaling argument.
</details>

<a id="section-690-exercise-8-a-tied-perturbation"></a>
### Exercise 8: a tied perturbation {#section-692-exercise-8-a-tied-perturbation}

At the duplicate-bound example a=b=c>0, perturb both bounds together by h.
Compute the value derivative and compare it with the nonunique multiplier pair.

<details>
<summary>Hint 1</summary>

For sufficiently small h the optimal x is c+h.
</details>
<details>
<summary>Hint 2</summary>

Differentiate $(c+h)^2/2$; all optimal multiplier pairs sum to c.
</details>
<details>
<summary>Full solution</summary>

The reduced value is $(c+h)^2/2$ near zero, so its derivative at zero is c.
The Lagrangian parameter term is h(λ₁+λ₂), and every optimal pair has
λ₁+λ₂=c. Thus this tied one-dimensional perturbation has a unique derivative
despite nonunique individual multipliers. The independently perturbed value
w(a,b) remains nondifferentiable at (c,c). Sensitivity uniqueness depends on
the represented parameter space, not just on the primal solution.
</details>

<a id="section-716-exercise-9-approximate-finite-differences"></a>
### Exercise 9: approximate finite differences {#section-718-exercise-9-approximate-finite-differences}

Suppose each evaluation of a scalar optimal-value function has absolute error
at most ε. Bound the computational error in its central difference with step h>0.

<details>
<summary>Hint 1</summary>

Subtract the computed difference from the exact central difference.
</details>
<details>
<summary>Hint 2</summary>

There are two value errors and a denominator 2h.
</details>
<details>
<summary>Full solution</summary>

If the two errors are e₊ and e₋, the difference error is
$(e_+-e_-)/(2h)$, whose magnitude is at most ε/h. This bound concerns only
optimization/evaluation error, before truncation error in approximating a
derivative. If the value function has a bounded third derivative locally,
central-difference truncation is of order h²; reducing h indefinitely can
therefore worsen the total error. At a kink no unique ordinary derivative is
available for this procedure to recover.
</details>

<a id="section-743-exercise-10-fenchel-gaps-diagnose-different-relations"></a>
### Exercise 10: Fenchel gaps diagnose different relations {#section-745-exercise-10-fenchel-gaps-diagnose-different-relations}

For $\min_x (x-3)^2/2+|x|$, evaluate the two Fenchel gaps at x=0,y=1.
Which primal-dual relation is satisfied and which fails?

<details>
<summary>Hint 1</summary>

Use f*(s)=3s+s²/2 and g*(y)=0 for |y|≤1.
</details>
<details>
<summary>Hint 2</summary>

The f gap pairs x with −y; the g gap pairs x with y.
</details>
<details>
<summary>Full solution</summary>

The f gap is $f(0)+f^*(-1)+y x=9/2-3+1/2=2$.
The g gap is $|0|+g^*(1)-1(0)=0$. Thus y=1 belongs to ∂|0|=[−1,1],
but −y=−1 differs from f′(0)=−3. The candidate dual value is
$-f^*(-1)-g^*(1)=5/2$, below the primal value 9/2 by two. The optimum
x=2,y=1 has value 5/2 and both gaps zero. A dual-feasible vector can already
be optimal while its paired primal vector still violates a constitutive relation.
</details>

<a id="section-769-summary-and-connections"></a>
## Summary and connections {#section-771-summary-and-connections}

The perturbation function turns a model into a convex family. Every dual
feasible pair supplies an affine lower bound on that family; under strong
duality an optimal pair supplies a supporting subgradient. Slater-type
conditions explain when the bound touches, while Fenchel conjugacy derives
duals and decomposes gaps for composite objectives. Multipliers quantify a
declared parameterization, not an invariant notion of price.

Backward, these results rest on separating hyperplanes and Fenchel--Young
equality. Forward, proximal and primal--dual algorithms will try to satisfy the
subgradient relations in (13), while constrained and integer chapters will use
lower or upper bounds as explicit certificates. In every setting, the durable
habit is the same: state feasibility, sign conventions, qualifications,
attainment, and gap claims separately.

<a id="section-785-source-and-verification-note"></a>
## Sources {#section-787-source-and-verification-note}

For Slater strong duality and the KKT conditions under the chapter’s finite-dimensional assumptions, see Boyd and Vandenberghe, *Convex Optimization* (2004), Sections 5.2.3 and 5.5.3; [edition record](https://doi.org/10.1017/CBO9780511804441).
