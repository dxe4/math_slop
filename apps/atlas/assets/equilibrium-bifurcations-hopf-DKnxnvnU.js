var e=`---
parent_id: book-dynamical-systems-first-course
chapter_id: equilibrium-bifurcations-hopf
title: "Bifurcations of Equilibria and the Hopf Bifurcation"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Bifurcations of Equilibria and the Hopf Bifurcation

A bifurcation is a change in a specified dynamical structure as a parameter moves. A zero eigenvalue, a sign change in trace, or a branching numerical diagram can indicate where to look, but each conclusion needs its own hypotheses. Equilibrium folds and Hopf bifurcations change different objects: one creates or destroys equilibria, while the other produces periodic solutions around a persisting equilibrium branch.

Read [scalar bifurcations](one-dimensional-flows-bifurcations.md), [linearisation](linearisation-hartman-grobman.md), and [periodic orbits](limit-cycles-poincare-bendixson.md). We use the [implicit-function theorem](../proof-safe-real-analysis/inverse-implicit-function-theorems.md) explicitly. The general Hopf theorem is cited; exact normal-form families are analysed completely rather than offered as a proof of every smooth system.

## What is changing, and where?

**Definition 8.1 (Local bifurcation setting).** A parameter family $z'=F(z,\\mu)$ consists of a vector field on a stated neighbourhood and parameter interval. A local equilibrium analysis tracks roots of $F$ and their nearby orbit structure. A local cycle analysis tracks periodic solutions and their orbital stability. The state domain and allowed coordinate or parameter changes are part of the claim.

A global event, such as a distant connection between invariant manifolds, need not be visible in one equilibrium's Jacobian. Conversely, a nonhyperbolic equilibrium can retain the same oriented local phase portrait on both sides of a parameter. The scalar family $-x^3-\\mu^2x$ already gave that counterexample.

**Proposition 8.2 (Persistence of an equilibrium branch).** If $F(a,\\mu_0)=0$ and $D_zF(a,\\mu_0)$ is invertible, then a unique nearby smooth equilibrium branch $a(\\mu)$ exists under the corresponding implicit-function regularity hypotheses.

*Proof.* Apply the implicit-function theorem to the equation $F(z,\\mu)=0$, solving for $z$ in terms of $\\mu$. Its state derivative is invertible by assumption, so the local graph exists and is unique. $\\square$

This proposition concerns roots, not their stability. A planar pair of nonzero imaginary eigenvalues makes the Jacobian invertible, so the equilibrium can persist through a Hopf bifurcation even while stability and nearby periodic orbits change.

## A scalar fold can be proved directly

**Theorem 8.3 (Local equilibrium fold).** Let $f$ be $C^2$ near $(0,0)$ and suppose
$$
f(0,0)=f_x(0,0)=0,\\qquad
f_\\mu(0,0)\\ne0,\\qquad f_{xx}(0,0)\\ne0.
$$
Nearby equilibria form a curve $\\mu=g(x)$ with $g'(0)=0$ and
$g''(0)=-f_{xx}(0,0)/f_\\mu(0,0)\\ne0$. On one side of $\\mu=0$ there are two nearby simple equilibria, on the other none, and at zero one merged equilibrium. The two simple equilibria have opposite scalar stability.

*Proof.* Since $f_\\mu\\ne0$, the implicit-function theorem solves $f(x,\\mu)=0$ as $\\mu=g(x)$. Differentiating gives $f_x+f_\\mu g'=0$, so $g'(0)=0$. A second derivative at zero gives $f_{xx}+f_\\mu g''=0$. Continuity makes $g'$ have opposite strict signs on the two small half-intervals adjacent to zero. Thus $g$ has a strict local minimum or maximum and is monotone on each side. For sufficiently small parameter values on the appropriate side, the intermediate-value theorem gives exactly one root on each half; on the opposite side there is none.

Along the root curve,$f_x=-f_\\mu g'$. The factor $f_\\mu$ keeps its nonzero sign while $g'$ changes sign, so the two simple roots have opposite signs of $f_x$. The scalar stability test proves one attracts and the other repels. $\\square$

This is a complete local root-and-stability result. It does not claim a global equilibrium count or a particular exact smooth normal form for the entire flow.

**Example 8.4 (A fold with a slow passage).** For $x'=\\mu-x^2$, the two roots at $\\mu>0$ are $\\pm\\sqrt\\mu$, with the positive root attracting. At zero they merge, and at negative parameter there is no root. All derivative hypotheses of Theorem 8.3 hold.

For a related no-equilibrium bottleneck, use $x'=\\nu+x^2$ with $\\nu>0$. The time to cross $[-a,a]$, $a>0$ fixed, is
$$
\\int_{-a}^a\\frac{dx}{\\nu+x^2}
=\\frac{2}{\\sqrt\\nu}\\arctan\\frac{a}{\\sqrt\\nu}.
$$
As $\\nu\\downarrow0$, this is asymptotic to $\\pi/\\sqrt\\nu$. A trajectory can therefore move very slowly near the vanished equilibrium even when none exists. The calculation is for a fixed autonomous parameter, not a theorem about a parameter drifting in time.

## Protected branches and transcritical exchange

If $f(0,\\mu)=0$ for every small $\\mu$, the zero branch is structurally imposed. The identity
$$
f(x,\\mu)=xg(x,\\mu),\\qquad
g(x,\\mu)=\\int_0^1f_x(tx,\\mu)\\,dt
$$
follows from the fundamental theorem of calculus. For $C^2$ data,$g$ is $C^1$.

**Proposition 8.5 (A transcritical branch calculation).** Suppose $g(0,0)=0$, $g_\\mu(0,0)\\ne0$, and $g_x(0,0)\\ne0$. Then a second root branch $x=h(\\mu)$ crosses zero with
$h'(0)=-g_\\mu/g_x\\ne0$. For small nonzero parameters the two branches have opposite stability and exchange it across zero.

*Proof.* Apply the implicit-function theorem to $g=0$, obtaining $h$. At zero,$f_x(0,\\mu)=g(0,\\mu)=g_\\mu(0,0)\\mu+o(\\mu)$. At the second branch,
$f_x(h(\\mu),\\mu)=h(\\mu)g_x(h(\\mu),\\mu)
=-g_\\mu(0,0)\\mu+o(\\mu)$.
Their signs are opposite for small nonzero $\\mu$ and reverse when $\\mu$ changes sign. The scalar test gives the claim. $\\square$

**Example 8.6 (A crossing lost after an imperfection).** The family $x'=\\mu x-x^2$ has branches0 and $\\mu$ and satisfies Proposition 8.5. Add a fixed $\\epsilon>0$. Its equilibria become
$$
x=\\frac{\\mu\\pm\\sqrt{\\mu^2+4\\epsilon}}2.
$$
They remain distinct for every real $\\mu$, and the zero branch disappears. The original transcritical structure depended on the invariant zero branch. Its exact crossing is not generic under arbitrary additive perturbations.

A nonnegative state domain can protect a meaningful boundary branch when the model enforces zero production at zero population. The mathematical analysis must still distinguish the full real-line family from its restricted physical domain.

## Symmetry and pitchfork examples

**Example 8.7 (Supercritical and subcritical cubic signs).** For $x'=\\mu x-x^3$, the zero equilibrium attracts when $\\mu<0$, while two attracting branches $\\pm\\sqrt\\mu$ exist when $\\mu>0$ and zero repels. At $\\mu=0$, $x'=-x^3$ is asymptotically stable with algebraic decay.

For $x'=\\mu x+x^3$, the nonzero roots are $\\pm\\sqrt{-\\mu}$ when $\\mu<0$. Their derivatives are $\\mu+3(-\\mu)=-2\\mu>0$, so both repel, while the zero root attracts on that side. At $\\mu>0$, only the repelling zero root remains. These are exact phase-line statements.

Both families are odd in $x$. That reflection symmetry produces paired branches and an exact central branch. A general pitchfork theorem requires the corresponding symmetry or structural assumptions and nondegenerate leading coefficients; a branching plot alone does not establish them. The cubic subcritical example also supplies no distant stable branch, so it cannot by itself prove bounded hysteretic motion.

## A precise Hopf statement and its scope

For a planar equilibrium branch shifted to zero, suppose the Jacobian eigenvalues are $\\alpha(\\mu)\\pm i\\omega(\\mu)$ near zero. At the critical parameter, $\\alpha(0)=0$ and $\\omega(0)=\\omega_0>0$.

**Theorem 8.8 (Generic planar Hopf bifurcation; cited).** For a sufficiently smooth planar family, a simple imaginary pair, nonzero crossing speed $\\alpha'(0)$, and nonzero first Lyapunov coefficient yield a local branch of small periodic orbits. In a radial normal-form convention
$$
r'=r\\bigl(\\alpha'(0)\\mu+\\ell_1r^2+\\text{higher-order terms}\\bigr),
$$
the branch has $r^2\\sim-\\alpha'(0)\\mu/\\ell_1$ and period tending to $2\\pi/\\omega_0$. With $\\alpha'(0)>0$, a negative $\\ell_1$ gives the attracting supercritical branch on $\\mu>0$; a positive $\\ell_1$ gives the repelling subcritical branch on $\\mu<0$.

The full normal-form and bifurcation proof is cited from the references, not reproduced here. The coefficient refers to the declared normalisation; changing conventions can change numerical factors, so a sign calculation must be matched to the chosen theorem. We assume at least $C^3$ regularity for this standard generic setting.

For a planar matrix, trace zero and positive determinant locate an imaginary pair, and the derivative of trace controls crossing speed. They say nothing by themselves about $\\ell_1$. A zero coefficient marks a degenerate case requiring further terms and another theorem. Higher-dimensional Hopf claims also need conditions on the remaining spectrum and stability directions; the planar statement above does not automatically settle those cases.

## An exact supercritical family

**Example 8.9 (Cycle amplitude, period and multiplier).** Let $a,\\omega>0$ and
$$
x'=\\mu x-\\omega y-a x(x^2+y^2),\\qquad
y'=\\omega x+\\mu y-a y(x^2+y^2).
$$
The eigenvalues at zero are $\\mu\\pm i\\omega$, so the crossing speed is1. For $r>0$, direct calculation gives
$$
r'=\\mu r-ar^3,\\qquad\\theta'=\\omega.
$$
When $\\mu>0$, the circle $r_*=\\sqrt{\\mu/a}$ is periodic with period $T=2\\pi/\\omega$. The derivative of the radial field at $r_*$ is $-2\\mu$, so its transverse multiplier is
$\\exp(-2\\mu T)=\\exp(-4\\pi\\mu/\\omega)<1$. The cycle attracts orbitally.

At $\\mu<0$, all positive radii decrease toward zero; at zero they obey $r'=-ar^3$ and decay algebraically. For positive $\\mu$, scalar signs show every positive radius approaches $r_*$, and the cubic term bounds large radii. Thus this exact family has a global nonzero basin for the cycle. That stronger global fact follows from its special radial equation, not from the local Hopf theorem.

The radial coefficient is $\\ell_1=-a$ in the displayed convention. Here every Hopf ingredient is visible analytically, including the nonlinear coefficient, so no numerical trace crossing is being mistaken for a full check.

## A bounded subcritical example has more structure

**Example 8.10 (Two cycles and a separate fold).** On $r>0$, take
$$
r'=r(\\mu+r^2-r^4),\\qquad\\theta'=1.
$$
This corresponds to a smooth polynomial Cartesian field with radial factor $\\mu+x^2+y^2-(x^2+y^2)^2$. Nonzero cycles have $s=r^2$ satisfying
$$
s_\\pm=\\frac{1\\pm\\sqrt{1+4\\mu}}2.
$$
For $-1/4<\\mu<0$, both are positive. The radial derivative at a cycle is $2s(1-2s)$, so the smaller cycle repels and the larger attracts. The origin also attracts because $\\mu<0$. Its basin and the outer cycle's basin are separated by the repelling inner circle.

At $\\mu=-1/4$, the two cycles meet at $s=1/2$, a fold of cycles. At $\\mu=0$, the small repelling cycle shrinks to the origin, giving the local subcritical Hopf pattern, while the large attracting cycle remains at radius1. For $\\mu>0$, only the positive outer branch remains and zero repels.

The quintic term creates bounded large-radius behaviour absent from the cubic subcritical normal form. Coexistence of two attractors is an exact static conclusion here. A quantitative claim about hysteresis during a time-dependent parameter sweep would require specifying the sweep and analysing delayed departure; it does not follow automatically from the static diagram.

## What a bifurcation calculation must record

State the equilibrium or periodic branch, parameter orientation, state domain, regularity, critical spectrum, and the nondegeneracy coefficients. A small coefficient under larger derivative uncertainty has unresolved sign. Refining a numerical parameter grid cannot repair an analytically missing symmetry or a violated theorem hypothesis.

A local theorem also cannot count remote equilibria or determine every basin. Continuation may reveal additional branches, but an apparent fold in a plot needs residual and tangent information. A constant parameter model and a slowly varying parameter model are different differential equations.

The next part of the book moves from flows to iterated maps. Their local stability test uses multiplier modulus rather than eigenvalue real part, and their global recurrence can be more complicated even in a one-dimensional state interval.

## A crossing can fail the nonlinear Hopf hypothesis

**Example 8.11 (A centre family without a generic cycle branch).** Consider the smooth linear family
$$
x'=\\mu x-y,\\qquad y'=x+\\mu y.
$$
The equilibrium at zero persists for every parameter. Its eigenvalues are $\\mu\\pm i$, its trace is $2\\mu$, and its determinant is $\\mu^2+1$. Thus the trace crosses zero with nonzero derivative and the imaginary pair has nonzero frequency at the crossing.

For a nonzero initial state, direct polar differentiation gives
$$
r'=\\mu r,\\qquad \\theta'=1,\\qquad r(t)=r(0)e^{\\mu t}.
$$
For negative parameter every radius tends to zero; for positive parameter every positive radius grows. There is no nonconstant periodic orbit at either nonzero sign: if a trajectory returned after a positive time $T$, equality of its radii would require $e^{\\mu T}=1$, which is impossible for real nonzero $\\mu$.

At the critical parameter every positive radius is constant, so every circle is periodic with period $2\\pi$. These circles form a continuous family rather than an isolated cycle selected by a nonlinear amplitude balance. The first Lyapunov coefficient is zero because the field has no nonlinear terms. The generic theorem therefore has a failed hypothesis even though its spectral crossing conditions hold.

The conclusion here follows from the exact radial solution, without a finite sampling argument. It shows why a trace crossing and a rotating phase portrait cannot replace calculation of the nonlinear nondegeneracy coefficient. Adding a cubic radial term changes this missing ingredient and produces the amplitude selection exhibited in Example 8.9.

## A degenerate saturation changes the amplitude law

An imaginary eigenvalue crossing does not determine the nonlinear amplitude
scale. Consider the smooth Cartesian family whose polar equations are
$r'=\\mu r-r^5$ and $\\theta'=1$. The Cartesian nonlinear term is the
polynomial radial factor minus the fourth power of the radius times each
coordinate, so the field extends smoothly through the origin. The linear
eigenvalues there are μ plus or minus the imaginary unit, crossing the
imaginary axis at nonzero speed.

For positive μ the nonzero stationary radius is the fourth root of μ.
It gives a periodic circle with period two pi. Differentiating the radial
rate at that radius gives minus four times μ, so the transverse multiplier
is the exponential of that negative rate times the period and lies strictly
between zero and one. The cycle attracts transversely. For nonpositive μ
there is no nonzero stationary radius, and at zero the remaining quintic
term still drives every positive radius inward, with algebraic rather than
exponential decay.

Thus the eigenvalue crossing and the existence of a stable small cycle
resemble the supercritical example, but the amplitude follows a fourth-root
law rather than the square-root law of the generic cubic normal form. Its
cubic radial coefficient vanishes, violating the nonzero first-Lyapunov-
coefficient hypothesis in the cited Hopf theorem. A plot of small circles
near a crossing cannot distinguish these scaling laws without quantitative
analysis. Computing the leading nonlinear coefficient, or solving the exact
radial equation when available, determines which theorem and amplitude
prediction are justified.

## Exercises

### Exercise 8.1 — Fold derivatives
<a id="equilibrium-bifurcations-hopf-ex-1"></a>

Check Theorem 8.3 for $f(x,\\mu)=\\mu-x^2$ and identify the branch curve μ=g(x).

<details>
<summary>Hint 1</summary>

**Hint.** Differentiate with respect to both variables.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Solve the equilibrium equation for μ.

</details>
<details>
<summary>Solution</summary>

**Solution.** At zero,$f=f_x=0,\\ f_\\mu=1,\\ f_{xx}=-2$. The branch is $\\mu=x^2$, with $g''=2=-f_{xx}/f_\\mu$. Positive μ has two nearby roots, negative μ none, and their scalar stability signs are opposite.

</details>

### Exercise 8.2 — A failed fold hypothesis
<a id="equilibrium-bifurcations-hopf-ex-2"></a>

Why does $f(x,\\mu)=\\mu^2-x^2$ not satisfy the generic fold theorem at zero?

<details>
<summary>Hint 1</summary>

**Hint.** Inspect fμ.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Count roots on both parameter sides.

</details>
<details>
<summary>Solution</summary>

**Solution.** Here $f_\\mu(0,0)=0$, violating the parameter transversality hypothesis. There are roots $x=\\pm|\\mu|$ on both sides, so the generic one-side creation description is not justified. Vanishing fx alone does not establish a fold.

</details>

### Exercise 8.3 — Bottleneck time
<a id="equilibrium-bifurcations-hopf-ex-3"></a>

For $x'=\\nu+x^2$, evaluate the crossing time from -1 to 1 and its leading small-ν scale.

<details>
<summary>Hint 1</summary>

**Hint.** Integrate $1/(\\nu+x^2)$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use $\\arctan(1/\\sqrt\\nu)\\to\\pi/2$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The time is $2\\arctan(1/\\sqrt\\nu)/\\sqrt\\nu$, asymptotic to $\\pi/\\sqrt\\nu$. It diverges as the parameter approaches the no-equilibrium threshold from above, despite every individual positive ν permitting passage.

</details>

### Exercise 8.4 — Transcritical signs
<a id="equilibrium-bifurcations-hopf-ex-4"></a>

For $f=x(\\mu-2x)$, find both branches and their stability for μ≠0.

<details>
<summary>Hint 1</summary>

**Hint.** Use $g=\\mu-2x$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Evaluate fx on each root.

</details>
<details>
<summary>Solution</summary>

**Solution.** The branches are 0 and μ/2. At 0,$f_x=\\mu$; at μ/2,$f_x=-\\mu$. Thus they exchange attraction and repulsion across zero. The invariant zero branch is part of the family structure.

</details>

### Exercise 8.5 — An imperfect crossing
<a id="equilibrium-bifurcations-hopf-ex-5"></a>

For $x'=\\mu x-x^2+0.01$, prove the two equilibrium branches never coincide.

<details>
<summary>Hint 1</summary>

**Hint.** Inspect the discriminant.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** It is strictly positive for every real μ.

</details>
<details>
<summary>Solution</summary>

**Solution.** The roots are $[\\mu\\pm\\sqrt{\\mu^2+0.04}]/2$. The discriminant is at least 0.04, so the roots remain distinct and zero is not a root. The transcritical crossing has been removed by breaking its protected branch.

</details>

### Exercise 8.6 — Pitchfork branch stability
<a id="equilibrium-bifurcations-hopf-ex-6"></a>

For $x'=\\mu x-x^3$ with μ=9, classify all equilibria.

<details>
<summary>Hint 1</summary>

**Hint.** The roots are 0,±3.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use $\\mu-3x^2$.

</details>
<details>
<summary>Solution</summary>

**Solution.** At zero the derivative is 9>0, so it repels. At±3 the derivative is 9-27=-18<0, so both attract. The symmetry accounts for the paired branches; their basins still require the scalar phase-line directions.

</details>

### Exercise 8.7 — A Hopf multiplier
<a id="equilibrium-bifurcations-hopf-ex-7"></a>

In Example 8.9 with $a=2$,ω=4,μ=0.5, find cycle radius, period and transverse multiplier.

<details>
<summary>Hint 1</summary>

**Hint.** Use the exact radial equation.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Keep the full period in the exponent.

</details>
<details>
<summary>Solution</summary>

**Solution.** The radius is√(0.5/2)=1/2, the period is 2π/4=π/2, and the multiplier is $\\exp(-2\\mu T)=e^{-\\pi/2}$. It is below 1, proving local orbital attraction for this cycle.

</details>

### Exercise 8.8 — Trace is insufficient
<a id="equilibrium-bifurcations-hopf-ex-8"></a>

Why do trace 0,determinant>0 and nonzero trace derivative not complete a Hopf claim?

<details>
<summary>Hint 1</summary>

**Hint.** They identify only linear information.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The nonlinear radial coefficient can vanish.

</details>
<details>
<summary>Solution</summary>

**Solution.** They locate an imaginary pair and its crossing, but do not establish a nonzero first Lyapunov coefficient. If that coefficient is zero, higher-order terms can change the local cycle picture. The generic Hopf theorem requires the additional nonlinear hypothesis.

</details>

### Exercise 8.9 — Two-cycle classification
<a id="equilibrium-bifurcations-hopf-ex-9"></a>

For Example 8.10 at μ=-3/16, compute the two values of $s=r^2$ and their transverse signs.

<details>
<summary>Hint 1</summary>

**Hint.** The discriminant is 1/4.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use $2s(1-2s)$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The values are $s_-=1/4$ and $s_+=3/4$. The radial derivatives are 1/4>0 and -3/4<0 respectively, so the inner circle repels and outer circle attracts. The origin is also attracting because μ<0.

</details>

### Exercise 8.10 — A local-global distinction
<a id="equilibrium-bifurcations-hopf-ex-10"></a>

Repair the claim: every supercritical Hopf cycle attracts every trajectory.

<details>
<summary>Hint 1</summary>

**Hint.** Identify the theorem's neighbourhood.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Only the special radial family had a global proof.

</details>
<details>
<summary>Solution</summary>

**Solution.** A generic Hopf theorem gives a small local periodic branch and its local orbital stability under the stated hypotheses. Other equilibria, cycles, basin boundaries or escape may occur elsewhere. Global attraction needs an additional argument such as the exact bounded radial dynamics in Example 8.9.

</details>

## Sources

- Steven H. Strogatz, [Nonlinear Dynamics and Chaos](https://www.routledge.com/Nonlinear-Dynamics-and-Chaos/Strogatz/p/book/9780367026509), third edition, Chapman & Hall, 2024.
- Morris W. Hirsch, Stephen Smale and Robert L. Devaney, [Differential Equations, Dynamical Systems, and an Introduction to Chaos](https://doi.org/10.1016/C2009-0-61160-0), third edition, Academic Press, 2013.
- Earlier Euler treatment: [Nonlinear Stability and Bifurcation](../differential-equations-verified-dynamics/nonlinear-stability-bifurcation.md). Additional original worked material and solved exercises remain available there.

The exposition, proofs, worked examples and exercises in this chapter are original to Euler. External references provide further reading and identify explicitly cited deeper results.

## Summary

Equilibrium persistence, folds, protected crossings and symmetry produce different parameter-dependent structures. The scalar fold and transcritical conclusions follow from explicit implicit-function arguments. Generic Hopf theory is clearly cited and requires crossing and nonlinear nondegeneracy; exact radial families prove amplitude, period and stability directly. Local branches do not determine global basins or a time-dependent sweep.
`;export{e as default};