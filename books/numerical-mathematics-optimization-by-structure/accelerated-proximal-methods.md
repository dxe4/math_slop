
# Accelerated and Proximal Methods {#section-1-accelerated-and-proximal-methods}

Gradient descent treats every objective term as though it should be
differentiated. That is often the wrong interface. Absolute values encode
sparsity but have corners. Indicator functions encode constraints but take the
value \(+\infty\). Norms, support functions, and piecewise-linear penalties
have simple geometry even when they have no ordinary gradient. Proximal
methods preserve that structure rather than smoothing it away prematurely.

This chapter assumes convexity, subgradients, Lipschitz gradients, and the basic
gradient-descent analysis from earlier chapters. Conjugacy and normal cones are
helpful but not required for the first pass. We work in finite-dimensional
Euclidean space. Unless a theorem explicitly says otherwise, the objective has
the composite form

\[
F(x)=f(x)+g(x), \tag{1}
\]

where \(f:\mathbb R^n\to\mathbb R\) is convex and differentiable with an
\(L\)-Lipschitz gradient, and
\(g:\mathbb R^n\to(-\infty,+\infty]\) is proper, closed, and convex. We assume
the minimum is attained whenever a rate is stated. The split is algorithmic:
\(f\) is accessed through its gradient and \(g\) through its proximal map.

<a id="section-24-the-proximal-map-is-an-implicit-structure-step"></a>
## The proximal map is an implicit structure step {#section-26-the-proximal-map-is-an-implicit-structure-step}

For \(\alpha>0\), define

\[
\operatorname{prox}_{\alpha g}(z)
=\mathop{\arg\min}_x
\left\{g(x)+\frac{1}{2\alpha}\|x-z\|_2^2\right\}. \tag{2}
\]

The quadratic makes the objective strongly convex, so the minimizer is unique.
It is also coercive relative to every proper affine lower bound of a closed
convex function, which gives existence in finite dimensions. If
\(p=\operatorname{prox}_{\alpha g}(z)\), first-order optimality is

\[
0\in\partial g(p)+\frac1\alpha(p-z),
\quad\text{or equivalently}\quad
\frac{z-p}{\alpha}\in\partial g(p). \tag{3}
\]

Thus the proximal map is an implicit subgradient step. An explicit step would
choose a subgradient at the old point; (3) chooses one at the new point and
balances it against displacement.

The map is **firmly nonexpansive**. If
\(p=\operatorname{prox}_{\alpha g}(z)\) and
\(q=\operatorname{prox}_{\alpha g}(w)\), then

\[
\|p-q\|_2^2\le\langle p-q,z-w\rangle. \tag{4}
\]

To prove it, equation (3) gives
\((z-p)/\alpha\in\partial g(p)\) and
\((w-q)/\alpha\in\partial g(q)\). Convex subdifferentials are monotone:

\[
\left\langle
\frac{z-p}{\alpha}-\frac{w-q}{\alpha},p-q
\right\rangle\ge0.
\]

Multiply by \(\alpha\) and rearrange to obtain (4). Cauchy--Schwarz then gives
\(\|p-q\|\le\|z-w\|\). A proximal map cannot amplify input distance, a fact
that supports both stability analysis and fixed-point algorithms.

<a id="section-71-worked-example-1-soft-thresholding"></a>
### Worked example 1: soft thresholding {#section-73-worked-example-1-soft-thresholding}

For \(g(x)=\lambda|x|\) in one dimension, solve

\[
\min_x\left\{\lambda|x|+\frac1{2\alpha}(x-z)^2\right\}.
\]

If \(x>0\), stationarity gives
\(\lambda+(x-z)/\alpha=0\), hence \(x=z-\alpha\lambda\), consistent with
\(x>0\) only when \(z>\alpha\lambda\). If \(x<0\), stationarity gives
\(-\lambda+(x-z)/\alpha=0\), hence \(x=z+\alpha\lambda<0\) only when
\(z<-\alpha\lambda\). At \(x=0\), condition (3) becomes
\(z/\alpha\in[-\lambda,\lambda]\). Therefore

\[
\operatorname{prox}_{\alpha\lambda|\cdot|}(z)
=\operatorname{sign}(z)\max\{|z|-\alpha\lambda,0\}. \tag{5}
\]

For \(g(x)=\lambda\|x\|_1\), the squared Euclidean term separates by
coordinate, so (5) applies componentwise. Notice the exact zero region. A
smooth approximation to \(|x|\) generally replaces it by small nonzero values,
changing the structural answer as well as the algorithm.

<a id="section-96-worked-example-2-projections-are-proximal-maps"></a>
### Worked example 2: projections are proximal maps {#section-98-worked-example-2-projections-are-proximal-maps}

Let \(g=\delta_C\), the indicator of a nonempty closed convex set. Then (2)
becomes

\[
\operatorname{prox}_{\alpha\delta_C}(z)
=\mathop{\arg\min}_{x\in C}\frac1{2\alpha}\|x-z\|^2=P_C(z). \tag{6}
\]

The positive scale \(1/\alpha\) does not change the minimizer. Thus projected
gradient descent is proximal gradient descent with an indicator term. For the
box \(C=[\ell_1,u_1]\times\cdots\times[\ell_n,u_n]\), projection clips each
coordinate:

\[
[P_C(z)]_i=\min\{u_i,\max\{\ell_i,z_i\}\}.
\]

For example, projecting \((-2,0.4,5)\) onto \([0,1]^3\) gives
\((0,0.4,1)\). This formula is exact for Euclidean projection onto an axis-
aligned box; applying the same clipping rule after a change to a weighted norm
with coupled coordinates or to a rotated box would generally be incorrect. A positive diagonal metric retains coordinate clipping for an axis-aligned box.

<a id="section-120-proximal-gradient-from-a-quadratic-upper-model"></a>
## Proximal gradient from a quadratic upper model {#section-122-proximal-gradient-from-a-quadratic-upper-model}

The \(L\)-Lipschitz gradient hypothesis gives the descent lemma

\[
f(y)\le f(x)+\langle\nabla f(x),y-x\rangle
+\frac L2\|y-x\|^2. \tag{7}
\]

For \(0<\alpha\le1/L\), minimize the upper model

\[
Q_\alpha(y;x)=f(x)+\langle\nabla f(x),y-x\rangle
+\frac1{2\alpha}\|y-x\|^2+g(y). \tag{8}
\]

Completing the square shows that its minimizer is

\[
x^+=\operatorname{prox}_{\alpha g}
\bigl(x-\alpha\nabla f(x)\bigr). \tag{9}
\]

Because \(x^+\) minimizes (8), comparing it with \(y=x\) gives

\[
g(x^+)+\langle\nabla f(x),x^+-x\rangle
+\frac1{2\alpha}\|x^+-x\|^2\le g(x).
\]

Adding (7) yields the descent guarantee

\[
F(x^+)\le F(x)-
\left(\frac1{2\alpha}-\frac L2\right)\|x^+-x\|^2. \tag{10}
\]

At the endpoint \(\alpha=1/L\), this displayed bound proves nonincrease but
has zero coefficient. A sharper optimality comparison supplies useful
telescoping even there.

Define the **proximal-gradient mapping**

\[
G_\alpha(x)=\frac1\alpha\left[x-
\operatorname{prox}_{\alpha g}(x-\alpha\nabla f(x))\right]. \tag{11}
\]

Then \(G_\alpha(x)=0\) exactly when
\(0\in\nabla f(x)+\partial g(x)\), which for convex \(F\) is equivalent to
global optimality. When \(g=0\), it reduces to \(\nabla f(x)\). Its norm is a
stationarity residual, not automatically an objective-error estimate; turning
it into such an estimate needs an error bound, strong convexity, or a known
distance scale.

<a id="section-175-worked-example-3-a-complete-proximal-gradient-step"></a>
### Worked example 3: a complete proximal-gradient step {#section-177-worked-example-3-a-complete-proximal-gradient-step}

Consider

\[
F(x)=\frac12(2x-3)^2+\frac12|x|. \tag{12}
\]

The smooth part has gradient \(f'(x)=4x-6\) and Lipschitz constant \(L=4\).
Take \(\alpha=1/4\) and start at \(x_0=0\). The forward point is

\[
z=x_0-\alpha f'(x_0)=0-\frac14(-6)=1.5.
\]

The proximal threshold is \(\alpha\lambda=(1/4)(1/2)=0.125\), so

\[
x_1=1.5-0.125=1.375.
\]

This is already the exact solution. On the positive branch, the optimality
equation is \(4x-6+1/2=0\), giving \(x=5.5/4=1.375\), consistent with the
assumed sign. The one-step convergence is special: the smooth term is a scalar
quadratic whose curvature exactly matches the model curvature \(L\). It is not
a generic finite-termination property of proximal gradient.

<a id="section-202-the-basic-sublinear-rate"></a>
## The basic sublinear rate {#section-204-the-basic-sublinear-rate}

Let \(x_{k+1}\) be given by (9), let \(0<\alpha\le1/L\), and let \(x_*\) be a
minimizer. A central three-point inequality is

\[
F(x_{k+1})-F(u)
\le\frac1{2\alpha}
\left(\|x_k-u\|^2-\|x_{k+1}-u\|^2\right) \tag{13}
\]

for any \(u\) with finite \(g(u)\). One derives it by combining the smooth
upper bound with the strong convexity of the quadratic model: since
\(x_{k+1}\) minimizes (8), its model value lies below the model at \(u\) by at
least \(\|u-x_{k+1}\|^2/(2\alpha)\). Expanding the two model quadratics and
using convexity
\(f(u)\ge f(x_k)+\langle\nabla f(x_k),u-x_k\rangle\) gives (13).

Set \(u=x_*\) and sum from \(k=0\) to \(N-1\). The squared distances telescope:

\[
\sum_{k=0}^{N-1}\bigl(F(x_{k+1})-F(x_*)\bigr)
\le\frac{\|x_0-x_*\|^2}{2\alpha}.
\]

The objective values are nonincreasing under the same hypotheses, so the last
gap is no greater than their average. Hence

\[
F(x_N)-F(x_*)
\le\frac{\|x_0-x_*\|^2}{2\alpha N}. \tag{14}
\]

This is an objective-value bound, not necessarily an iterate-distance bound.
If the minimizer is nonunique, iterates can approach the solution set without
selecting a point for reasons visible in (14) alone.

<a id="section-239-acceleration-and-its-potential"></a>
## Acceleration and its potential {#section-241-acceleration-and-its-potential}

Nesterov acceleration combines a proximal step with an extrapolated point.
One standard accelerated proximal-gradient scheme initializes
\(x_0=y_0\) and \(t_0=1\), then uses

\[
\begin{aligned}
x_{k+1}&=\operatorname{prox}_{g/L}
\left(y_k-\frac1L\nabla f(y_k)\right),\\
t_{k+1}&=\frac{1+\sqrt{1+4t_k^2}}2,\\
y_{k+1}&=x_{k+1}+\frac{t_k-1}{t_{k+1}}(x_{k+1}-x_k).
\end{aligned} \tag{15}
\]

The scalar recurrence is chosen so that

\[
t_{k+1}^2-t_{k+1}=t_k^2. \tag{16}
\]

Under the standing convexity and smoothness hypotheses, with an attained
minimum, the iterates satisfy

\[
F(x_k)-F(x_*)\le
\frac{2L\|x_0-x_*\|^2}{(k+1)^2},\qquad k\ge1. \tag{17}
\]

Here is the potential proof with the indices of (15). Put Δₖ=F(xₖ)−F(x*)
and, for k≥1, set
$$u_k=t_{k-1}x_k-(t_{k-1}-1)x_{k-1},\qquad
E_k=t_{k-1}^2\Delta_k+\frac L2\|u_k-x_*\|^2.$$
The three-point inequality (13) remains valid when its base point is the
extrapolated yₖ rather than xₖ: its derivation uses f and ∇f at that point
and finite comparison values g(u), not a finite g(yₖ). At the first step,
t₀=1 and u₁=x₁; inequality (13) at y₀=x₀ gives
$E_1\le L\|x_0-x_*\|^2/2$.

For k≥1 write a=tₖ. Apply the three-point inequality to the next step,
once with comparison xₖ and once with comparison x*. Multiply by the
nonnegative weights 1−1/a and 1/a, respectively, and add. Multiplication by
a² yields
$$a^2\Delta_{k+1}-(a^2-a)\Delta_k
\le\frac L2\left(\|a y_k-(a-1)x_k-x_*\|^2
-\|a x_{k+1}-(a-1)x_k-x_*\|^2\right).$$
The weighted squared-distance identity follows by expansion; the common
variance terms cancel. Formula (15) gives
$a y_k-(a-1)x_k=u_k$, and the second vector before subtracting x* is
uₖ₊₁. Identity (16) gives a²−a=tₖ₋₁². Rearrangement therefore proves
$E_{k+1}\le E_k$ with no monotonicity requirement on Δₖ individually.
The scalar recurrence also gives tₖ₊₁≥tₖ+1/2, so by induction
tₖ₋₁≥(k+1)/2. Since the norm term in Eₖ is nonnegative,
$$\Delta_k\le\frac{E_1}{t_{k-1}^2}
\le\frac{2L\|x_0-x_*\|^2}{(k+1)^2}.$$
This proves (17) for the exact recurrence, exact proximal maps and standing
convexity hypotheses, rather than transferring a rate from a differently
indexed momentum method.

The order improves from \(1/k\) to \(1/k^2\) for convex objective gaps, but
several qualifications matter. Acceleration can make objective values
oscillate. It need not improve early iterations. The displayed rate assumes an
exact proximal map, the correct smoothness bound, and the convex composite
model. Strong convexity permits geometric rates with a different tuned or
restarted schedule; using such a rate without establishing a positive strong-
convexity modulus is unjustified.

<a id="section-306-worked-example-4-why-extrapolation-may-raise-the-object"></a>
### Worked example 4: why extrapolation may raise the objective {#section-308-worked-example-4-why-extrapolation-may-raise-the-object}

Let \(f(x)=x^2/2\), \(g=0\), and suppose an accelerated implementation reaches
\(x_k=0.1\), \(x_{k-1}=1\) with momentum coefficient \(0.8\). Its next search
point is

\[
y_k=x_k+0.8(x_k-x_{k-1})=0.1+0.8(-0.9)=-0.62.
\]

Then \(f(y_k)=0.1922\), much larger than \(f(x_k)=0.005\). This does not by
itself violate the accelerated theorem: the gradient step is taken from
\(y_k\), and (17) controls the designated sequence globally rather than
requiring monotonic search points. If an application requires monotone accepted
values, a monotone variant compares candidates or a restart rule discards
momentum after a declared trigger. Such modifications need their own analysis;
one cannot combine arbitrary heuristics and inherit (17) automatically.

<a id="section-324-proximal-point-envelopes-and-inexact-inner-solves"></a>
## Proximal point, envelopes, and inexact inner solves {#section-326-proximal-point-envelopes-and-inexact-inner-solves}

Applying (2) to the entire objective gives the proximal-point iteration

\[
x_{k+1}=\operatorname{prox}_{\alpha F}(x_k). \tag{18}
\]

This is implicit and often more expensive per step, but it works without a
smooth part. The associated Moreau envelope

\[
F_\alpha(z)=\min_x\left\{F(x)+\frac1{2\alpha}\|x-z\|^2\right\}
\]

is differentiable for proper closed convex \(F\), with

\[
\nabla F_\alpha(z)=
\frac1\alpha\bigl(z-\operatorname{prox}_{\alpha F}(z)\bigr). \tag{19}
\]

Thus a nonsmooth function has a smooth envelope whose gradient is a proximal
residual. The envelope and the original objective share minimizers, but their
values away from the solution differ. Optimizing or plotting the envelope
should not be described as evaluating the original objective.

The differentiability claim in (19) can also be proved directly. Write p(z)
for the proximal point and d=w−z. Evaluating the minimum at p(z) supplies
$$F_\alpha(w)-F_\alpha(z)\le\alpha^{-1}(z-p(z))^Td+\|d\|^2/(2\alpha).$$
Interchanging z and w gives the matching lower comparison with w−p(w) in
place of z−p(z), and a negative quadratic remainder. Firm nonexpansiveness
implies the residual map z↦z−p(z) is nonexpansive too: expand the squared
norm of its difference and use $\|p(z)-p(w)\|^2\le(p(z)-p(w))^T(z-w)$.
The two affine slopes therefore differ by at most ‖d‖/α. Both comparisons
show that subtracting α⁻¹(z−p(z))ᵀd leaves a remainder bounded in magnitude
by a constant times ‖d‖²/α. This proves differentiability and (19), with
a 1/α-Lipschitz gradient. No ordinary derivative of the nonsmooth F was used.

In large problems, a proximal subproblem may itself be iterative. An inexact
method should expose an error condition, for example an approximate inclusion

\[
e_k\in\partial g(x_{k+1})+
\frac1\alpha\left(x_{k+1}-x_k+\alpha\nabla f(x_k)\right),
\]

with a norm bound or a function-value error. Convergence may follow when errors
are summable or decrease at a rate required by a particular theorem. Merely
labeling an inner solve “accurate” is not a transferable hypothesis.

<a id="section-375-failure-diagnostics-and-claim-boundaries"></a>
## Failure diagnostics and claim boundaries {#section-377-failure-diagnostics-and-claim-boundaries}

1. **Underestimating \(L\).** The model in (8) may cease to majorize \(f\), so
   descent and rates no longer follow. Backtracking can search for a locally
   verified model inequality without claiming a global \(L\).
2. **Using the wrong proximal metric.** Coordinate clipping is Euclidean box
   projection, not projection in every metric. A preconditioned quadratic
   changes the proximal formula.
3. **Stopping on step length alone.** A tiny step can result from a tiny
   \(\alpha\). Report \(G_\alpha\), feasibility where relevant, and scaling.
4. **Assuming acceleration is monotone.** The rate controls a potential and an
   objective gap, not every extrapolated value.
5. **Ignoring extended-value domains.** A proximal routine must return a point
   in \(\operatorname{dom}g\). A NaN or a large finite penalty is not the same
   mathematical object as \(+\infty\).
6. **Transferring convex conclusions to a nonconvex split.** Proximal steps can
   still be defined for some nonconvex functions, but uniqueness, firm
   nonexpansiveness, and global rates above need not survive.

<a id="section-394-practice-with-complete-solutions"></a>
## Practice with complete solutions {#section-396-practice-with-complete-solutions}

<a id="section-396-exercise-1-derive-vector-soft-thresholding"></a>
### Exercise 1: derive vector soft thresholding {#section-398-exercise-1-derive-vector-soft-thresholding}

Compute \(\operatorname{prox}_{\alpha\lambda\|\cdot\|_1}(z)\) for
\(z=(2,-0.3,-4)\), \(\alpha=1/2\), and \(\lambda=1\).

<details>
<summary>Hint 1</summary>

The ℓ₁ objective separates by coordinate.
</details>
<details>
<summary>Hint 2</summary>

The threshold is αλ=0.5; compare each absolute input with it.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The objective is a sum over coordinates, so each coordinate uses
threshold \(\alpha\lambda=0.5\). Formula (5) gives

\[
\begin{aligned}
p_1&=2-0.5=1.5,\\
p_2&=0\quad\text{because }|-0.3|\le0.5,\\
p_3&=-\bigl(4-0.5\bigr)=-3.5.
\end{aligned}
\]

Hence the proximal point is \((1.5,0,-3.5)\). At the zero coordinate,
condition (3) reads \((-0.3-0)/0.5=-0.6\in[-1,1]\), confirming optimality
without differentiating the absolute value at zero.
</details>


<a id="section-431-exercise-2-proximal-map-of-a-quadratic"></a>
### Exercise 2: proximal map of a quadratic {#section-433-exercise-2-proximal-map-of-a-quadratic}

For \(g(x)=\tfrac\mu2\|x-c\|_2^2\), \(\mu>0\), derive
\(\operatorname{prox}_{\alpha g}(z)\) and describe its limiting behavior as
\(\alpha\downarrow0\) and \(\alpha\to\infty\).

<details>
<summary>Hint 1</summary>

Differentiate the quadratic proximal objective.
</details>
<details>
<summary>Hint 2</summary>

Solve (1+αμ)x=z+αμc, then take the two parameter limits.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Differentiate the strongly convex proximal objective:

\[
\mu(x-c)+\frac1\alpha(x-z)=0.
\]

Multiplying by \(\alpha\) and collecting terms gives

\[
(1+\alpha\mu)x=z+\alpha\mu c,
\quad
\operatorname{prox}_{\alpha g}(z)
=\frac{z+\alpha\mu c}{1+\alpha\mu}.
\]

As \(\alpha\downarrow0\), this tends to \(z\): the displacement penalty
dominates. As \(\alpha\to\infty\), it tends to \(c\), the minimizer of \(g\).
For finite \(\alpha\), it is a convex combination of the input and \(c\), so
it is stable and lies on their segment.
</details>


<a id="section-472-exercise-3-prove-nonexpansiveness-from-firm-nonexpansiv"></a>
### Exercise 3: prove nonexpansiveness from firm nonexpansiveness {#section-474-exercise-3-prove-nonexpansiveness-from-firm-nonexpansiv}

Starting from (4), prove that every proximal map of a proper closed convex
function is \(1\)-Lipschitz. State when the argument is inconclusive about
strict contraction.

<details>
<summary>Hint 1</summary>

Apply Cauchy–Schwarz to the firm inequality.
</details>
<details>
<summary>Hint 2</summary>

Divide by ‖p−q‖ only if it is nonzero; the identity map gives an equality case.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Cauchy--Schwarz and (4) give

\[
\|p-q\|^2\le\langle p-q,z-w\rangle
\le\|p-q\|\,\|z-w\|.
\]

If \(p=q\), the desired inequality is immediate. Otherwise divide by
\(\|p-q\|\) to get \(\|p-q\|\le\|z-w\|\). This proves Lipschitz constant at
most one. It does not prove a constant strictly below one: for \(g=0\), the
proximal map is the identity and equality holds for every pair. Strict
contraction needs extra curvature such as strong convexity.
</details>


<a id="section-506-exercise-4-one-proximal-gradient-iteration-and-its-resi"></a>
### Exercise 4: one proximal-gradient iteration and its residual {#section-508-exercise-4-one-proximal-gradient-iteration-and-its-resi}

For \(F(x)=\tfrac12(x-5)^2+|x|\), use \(\alpha=1\) and \(x_0=0\). Compute
\(x_1\), \(G_1(x_0)\), and verify whether \(x_1\) is optimal.

<details>
<summary>Hint 1</summary>

Perform the gradient step first, then threshold at one.
</details>
<details>
<summary>Hint 2</summary>

At the resulting positive point, add the absolute-value subgradient one to the smooth derivative.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The smooth gradient is \(f'(x)=x-5\) with \(L=1\). The forward
point is \(z=0-(0-5)=5\). Soft thresholding at level one gives \(x_1=4\).
Therefore

\[
G_1(x_0)=x_0-x_1=-4.
\]

At \(x_1=4>0\), the composite optimality condition is
\(0=f'(4)+1=(4-5)+1=0\), so \(x_1\) is the global minimizer. Accordingly, a
second step would leave it fixed and \(G_1(x_1)=0\). The nonzero first residual
measured stationarity at \(x_0\), not at the newly accepted point.
</details>


<a id="section-539-exercise-5-verify-the-acceleration-weights"></a>
### Exercise 5: verify the acceleration weights {#section-541-exercise-5-verify-the-acceleration-weights}

Starting from \(t_0=1\), compute \(t_1\) and prove algebraically that the
recurrence in (15) satisfies (16). Why is the identity useful in a telescoping
proof?

<details>
<summary>Hint 1</summary>

Square 2tₖ₊₁−1=√(1+4tₖ²).
</details>
<details>
<summary>Hint 2</summary>

Cancel the ones and divide by four; this matches consecutive weighted gaps.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The first value is

\[
t_1=\frac{1+\sqrt5}{2}.
\]

From \(2t_{k+1}-1=\sqrt{1+4t_k^2}\), squaring gives

\[
4t_{k+1}^2-4t_{k+1}+1=1+4t_k^2.
\]

After cancellation and division by four,
\(t_{k+1}^2-t_{k+1}=t_k^2\). In the accelerated proof, the coefficient of an
old objective gap is \(t_k^2\), while expansion of the next weighted model
produces \(t_{k+1}^2-t_{k+1}\). The identity makes those coefficients match,
so intermediate terms cancel rather than accumulate.
</details>

<a id="section-577-exercise-6-a-radial-norm-threshold"></a>
### Exercise 6: a radial norm threshold {#section-579-exercise-6-a-radial-norm-threshold}

Compute prox₍αλ‖·‖₂₎(z) and evaluate it for z=(3,4) and αλ=2.

<details>
<summary>Hint 1</summary>

For a fixed candidate radius, aligning with z minimizes squared distance.
</details>
<details>
<summary>Hint 2</summary>

Minimize λr+(r−‖z‖)²/(2α) over r≥0.
</details>
<details>
<summary>Full solution</summary>

For nonzero z the optimizer is $p=(1-\alpha\lambda/\|z\|)_+z$; for z=0
it is zero. Cauchy–Schwarz proves alignment gives the smallest distance at a
fixed radius, and the remaining scalar quadratic has optimal radius
max(‖z‖−αλ,0). For the data the multiplier is 3/5, yielding (9/5,12/5).
This is group shrinkage, different from applying scalar soft thresholding
to each coordinate, which corresponds to the ℓ₁ norm.
</details>

<a id="section-602-exercise-7-the-sharper-endpoint-decrease"></a>
### Exercise 7: the sharper endpoint decrease {#section-604-exercise-7-the-sharper-endpoint-decrease}

Use strong convexity of the model Qα to strengthen (10), and state the
result when α=1/L.

<details>
<summary>Hint 1</summary>

The model minimizer x⁺ satisfies Qα(x⁺;x)≤Qα(x;x)−‖x⁺−x‖²/(2α).
</details>
<details>
<summary>Hint 2</summary>

Compare F(x⁺) with Qα(x⁺;x) using the smoothness remainder.
</details>
<details>
<summary>Full solution</summary>

Smoothness gives
$F(x^+)\le Q_\alpha(x^+;x)-(1/(2\alpha)-L/2)\|x^+-x\|^2$.
Combining the strong model comparison yields
$F(x^+)\le F(x)-(1/\alpha-L/2)\|x^+-x\|^2$.
At α=1/L the decrease is at least L‖x⁺−x‖²/2, equivalently
‖Gα(x)‖²/(2L). This needs x in dom g for the finite comparison F(x).
Extrapolated bases outside that domain are handled instead by the three-point
comparison against finite domain points, as in the acceleration proof.
</details>

<a id="section-630-exercise-8-coupled-metric-projection"></a>
### Exercise 8: coupled metric projection {#section-632-exercise-8-coupled-metric-projection}

Project z=(−1,1) onto the nonnegative orthant using the quadratic metric
M=$\begin{pmatrix}2&1\\1&2\end{pmatrix}$. Show coordinate clipping is incorrect.

<details>
<summary>Hint 1</summary>

Try p₁=0 and minimize the metric distance over p₂≥0.
</details>
<details>
<summary>Hint 2</summary>

At p=(0,1/2), the gradient M(p−z)=(3/2,0) gives the orthant condition.
</details>
<details>
<summary>Full solution</summary>

M has eigenvalues one and three, so the distance objective is strictly convex.
At p=(0,1/2), its gradient is (3/2,0), whose inner product with every
feasible displacement y−p is 3y₁/2≥0. Convexity proves p is the unique
metric projection. Clipping instead gives (0,1), where the second gradient
component is one and small negative changes in the second coordinate reduce
the objective. A metric with coupled coordinates changes the projection even
for this simple set; a positive diagonal metric would retain clipping.
</details>

<a id="section-657-exercise-9-a-nonconvex-proximal-ambiguity"></a>
### Exercise 9: a nonconvex proximal ambiguity {#section-659-exercise-9-a-nonconvex-proximal-ambiguity}

For the indicator of C={−1,1}, find all proximal minimizers at z=0 and
explain why the standing proximal theorem cannot apply.

<details>
<summary>Hint 1</summary>

Both feasible points have the same squared distance to zero.
</details>
<details>
<summary>Hint 2</summary>

The indicator is closed and proper, but its domain is not convex.
</details>
<details>
<summary>Full solution</summary>

Both −1 and one attain value 1/(2α); there are no other finite candidates.
Thus the argmin is set valued. C is closed and nonempty, but not convex,
and its indicator fails the convexity assumption. Adding a strictly convex
quadratic to a nonconvex extended-valued function need not produce a convex
objective. Selecting one minimizer arbitrarily does not recover the firm
nonexpansiveness theorem for convex proximal maps.
</details>

<a id="section-683-exercise-10-inexact-proximal-residual"></a>
### Exercise 10: inexact proximal residual {#section-685-exercise-10-inexact-proximal-residual}

For an approximate step z, suppose
$e\in\nabla f(x)+\partial g(z)+(z-x)/\alpha$ and ‖e‖≤ε.
Bound the distance from zero to ∇f(z)+∂g(z) using L-smoothness.

<details>
<summary>Hint 1</summary>

Select the subgradient of g(z) appearing in the inclusion.
</details>
<details>
<summary>Hint 2</summary>

Add and subtract ∇f(x), then bound the gradient difference by L‖z−x‖.
</details>
<details>
<summary>Full solution</summary>

There is v∈∂g(z) with v=e−∇f(x)−(z−x)/α. Hence
$\|\nabla f(z)+v\|\le\varepsilon+(L+1/\alpha)\|z-x\|$.
The distance to the whole subdifferential is at most this displayed norm.
This is a stationarity estimate at the new point z, conditional on a genuine
inclusion error bound. It supplies no automatic objective-gap or iterate-distance
certificate without further convex error-bound information.
</details>

<a id="section-710-summary-and-connections"></a>
## Summary and connections {#section-712-summary-and-connections}

The proximal map solves a strongly convex local subproblem and turns
subgradient balance into a stable operator. Indicators yield projections,
absolute values yield thresholding, and a smooth-plus-structured split yields
proximal gradient. A quadratic upper model gives descent and an
\(O(1/k)\) objective rate; a carefully coupled extrapolation improves the
convex rate to \(O(1/k^2)\) without guaranteeing monotone iterates.

Backward, proximal optimality is Fenchel--Young and normal-cone geometry in
algorithmic form. Forward, the next chapter combines subgradients, projections,
penalties, and saddle relations for nonsmooth constrained problems. Later
integer chapters use different discrete mechanisms; the shared discipline is
to expose the bound, residual, and hypotheses that make a computational step a
certificate rather than merely a plausible update.

<a id="section-726-source-and-verification-note"></a>
## Sources {#section-728-source-and-verification-note}

For further development see Nesterov, *Introductory Lectures on Convex Optimization* (2004), and Beck, *First-Order Methods in Optimization* (2017). The potential argument above proves the displayed recurrence and indexing directly.
