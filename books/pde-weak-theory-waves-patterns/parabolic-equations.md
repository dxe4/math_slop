
# Parabolic Equations in Energy Spaces

A heat equation can start from a square-integrable state with no classical spatial derivative. Its solution acquires finite integrated gradient energy while retaining a meaningful initial trace in the square-integrable norm. This chapter proves that linear energy-space existence theorem, including the time-continuity lemma that justifies testing by the evolving solution. It separates that theorem from stronger smoothing conclusions that require additional operator structure.

Preparation is [Sobolev spaces](sobolev-spaces.md), [elliptic forms](elliptic-parabolic-weak-theory.md) and weak compactness in Hilbert spaces. For the Galerkin construction we use the standard Dirichlet spectral basis on a bounded Lipschitz domain: it is orthonormal in the square-integrable space, orthogonal for the gradient inner product and complete in the zero-boundary energy space. This follows from compact Sobolev embedding and the compact self-adjoint spectral theorem, which are explicit inputs here. The time-continuity and limit-passage arguments are supplied below.

## The evolution equation lives in a triple of spaces

Let $V=H_0^1(\Omega)$ with gradient norm, $H=L^2(\Omega)$, and let $V'$ be its continuous dual. The bounded domain gives the Poincaré estimate, so V embeds continuously and densely into H. Identify an H element with the functional taking its H inner product against a V test. This embeds H continuously into $V'$ and gives the nested triple $V\subset H\subset V'$.

Assume a measurable time-dependent bilinear form satisfies uniform boundedness and coercivity:

$$|a_t(v,w)|\le M\|v\|_V\|w\|_V,
\qquad a_t(v,v)\ge\alpha\|v\|_V^2,\quad\alpha>0.$$

For example a bounded measurable diffusion matrix with a uniformly positive symmetric part, together with bounded nonnegative reaction, defines such a form. Its time dependence need not be differentiable. For each fixed pair of tests the coefficient integral must be measurable. Let $f\in L^2(0,T;V')$ and initial value $u_0\in H$.

Seek $u\in L^2(0,T;V)$ with distributional time derivative in $L^2(0,T;V')$, satisfying $u'+\mathcal A(t)u=f$ in the dual space almost everywhere, where $\langle\mathcal A(t)v,w\rangle=a_t(v,w)$. The derivative is not assumed square integrable in H. The initial condition will be interpreted through a continuous H-valued representative, whose existence is part of the theorem rather than an additional guess.

The distinction between the three spaces is essential. Diffusion sends a one-derivative state naturally into a negative-order dual space. Requiring its time derivative to belong to H from the outset would exclude legitimate rough-data energy solutions. Conversely, writing only a distributional equation without the energy bounds would lose the uniqueness estimate proved here.

## The energy-space time lemma justifies the calculation

Let $W$ consist of the functions in $L^2(0,T;V)$ whose distributional derivative belongs to $L^2(0,T;V')$. Every member has a unique representative continuous from the closed time interval into H, and

$$\|u(t)\|_H^2-\|u(s)\|_H^2
=2\int_s^t\langle u'(r),u(r)\rangle\,dr.$$

Here is a proof that also explains the endpoints. For a smooth V-valued function, differentiate its H inner product by the ordinary product rule. Choose one time whose H norm is no larger than its time-average squared norm, integrate the derivative identity in either direction, and apply Cauchy–Schwarz in the V/dual pairing. This gives a uniform estimate

$$\sup_t\|u(t)\|_H^2\le
C_T\|u\|_{L^2(V)}^2+
2\|u'\|_{L^2(V')}\|u\|_{L^2(V)}.$$

To approximate a general W function, first observe that it belongs to the ordinary Hilbert-valued first-Sobolev space with values in $V'$, since both it and its derivative are square integrable there. It consequently has a continuous $V'$ representative by the interval integral argument. Reflect that representative across each endpoint over a small time interval. Reflection preserves the two energy norms, and its derivative changes sign on the reflected part. There is no jump distribution at the endpoints because the $V'$ values match.

Convolve this extension in time with smooth approximate identities. The resulting functions are smooth with values in V, and converge in both the $L^2(V)$ and derivative $L^2(V')$ norms on the original interval. Apply the uniform estimate to differences of these approximations. They form a Cauchy sequence in the continuous H-valued supremum norm, so converge to a continuous representative of the original function. Passing to the limit in the integrated product identity is justified by the two energy-norm convergences and dual Cauchy–Schwarz. This proves both the endpoint identity and uniqueness of the continuous representative.

The same argument applied to the sum and difference of two functions yields an integration-by-parts identity for their H inner product. Smooth time tests therefore carry initial and final H values through a weak limit. Merely observing that u is square integrable in time would not define its value at a selected endpoint; the derivative control is what supplies that trace.

## Energy estimates are uniform before the limit is taken

Suppose for the moment a finite-dimensional approximate solution is available. Test its equation by itself. Coercivity and Young's inequality give

$$\frac12\frac d{dt}\|u_m\|_H^2+
\frac\alpha2\|u_m\|_V^2
\le\frac1{2\alpha}\|f\|_{V'}^2.$$

After integration this bounds the supremum of its H norm and its integrated V norm in terms of the initial H norm and forcing norm, with constants independent of the dimension. The original equality remains available when needed; Young's inequality is used only for a convenient upper bound. A nonnegative reaction term can be retained as additional dissipation instead of being discarded.

For two solutions, subtract their equations and use the time lemma on their difference. The same estimate controls the solution difference by the difference in initial states and loads. In particular zero difference data imply identical solutions. This proof works for nonsymmetric time-dependent diffusion because it uses only boundedness and the diagonal coercive estimate, not a fixed eigenfunction expansion of that diffusion operator.

If coercivity is weakened to a Gårding inequality with a negative multiple of the H norm, the energy estimate acquires that H term and Gronwall supplies a finite-horizon bound. Equivalently an exponential change of unknown can shift the form into a coercive one. Such a modification changes constants and possible long-time decay; it should be stated explicitly rather than silently used to claim unforced contraction.

## A spectral trial basis controls the time derivative as well

Choose the Dirichlet Laplacian basis mentioned above and let $P_m$ be the H-orthogonal projection onto its first m vectors. Because those vectors are also orthogonal in the gradient inner product, the projection is a contraction in V. Its H contraction is immediate. The projections converge strongly to the identity in both spaces on their respective elements.

Seek $u_m$ in that span with initial value $P_mu_0$, satisfying the equation against every basis vector in the span. This is a finite system of linear ODEs with bounded measurable coefficients and square-integrable forcing coordinates. The integrating-factor or linear Carathéodory construction gives a unique absolutely continuous solution on the finite interval. The preceding energy bound is uniform in m.

There is also a uniform derivative bound in the dual space. For an arbitrary V test, H orthogonality gives $\langle u_m',v\rangle=\langle u_m',P_mv\rangle$. The projected equation bounds its absolute value by $(\|f\|_{V'}+M\|u_m\|_V)\|P_mv\|_V$. The projection contraction then gives a square-integrable dual bound for the derivative independent of m.

This projection property is why one cannot choose an arbitrary basis and assume the derivative estimate follows. An H-orthogonal projection onto poorly chosen trial spaces need not be uniformly bounded in V. Other Galerkin constructions are possible, but they must prove an equivalent stability property or use a different compactness argument.

## The weak limit solves the equation and the initial condition

Weak compactness yields a subsequence converging weakly in $L^2(V)$, with derivatives converging weakly in $L^2(V')$. Distributional integration by parts identifies the second limit as the derivative of the first. For any fixed finite span of basis functions and a smooth time test, the Galerkin equation holds for all sufficiently large m. The form's boundedness makes its time integral a continuous linear functional of the weakly convergent sequence, so every term passes to the limit.

Density of the union of trial spans and the uniform form bound extend the resulting identity to all V tests. The equation holds in $L^2(V')$. To recover initial data, choose a smooth time test that vanishes at T but not at zero, integrate the approximate equation by parts, and retain the term $P_mu_0$ paired with the spatial test. Strong H convergence of those projected initial values and the weak limits give the same integrated identity with $u_0$.

The time lemma supplies the limit's continuous H representative. Its own integration-by-parts identity has the same boundary term with u at zero. Comparing the two identities against a dense set of spatial tests forces $u(0)=u_0$ in H. Thus no pointwise convergence of approximate trajectories at time zero was assumed. Uniqueness identifies every subsequential weak limit with this solution, establishing the full existence and uniqueness theorem.

The limiting energy inequality follows by lower semicontinuity, or directly by using the time lemma to test the already established equation with u. The latter gives the exact integrated energy identity. Weak convergence alone would not pass a squared norm as an equality; the equation and time regularity provide the stronger conclusion.

## Unforced decay has an explicit norm and rate

If the load vanishes and the form controls the gradient, Poincaré gives

$$\frac d{dt}\|u(t)\|_H^2\le
-\frac{2\alpha}{C_P^2}\|u(t)\|_H^2.$$

The resulting exponential estimate holds for the squared norm with that rate; the norm itself has half the exponent. The solution may start outside V, but the H initial trace and integrated energy identity still make the estimate valid from zero. A forcing that persists in time changes the conclusion to a driven bound rather than exact convergence to zero.

### Worked example: a single heat mode

On $(0,\pi)$ solve the zero-boundary heat equation with initial value $\sin(nx)$. The solution is $e^{-n^2t}\sin(nx)$. Its squared H norm is its initial squared norm times $e^{-2n^2t}$, while its integrated squared gradient from zero to T is half the initial squared norm times $1-e^{-2n^2T}$. These expressions satisfy the exact energy balance.

The first eigenmode is the slowest. Higher spatial frequencies dissipate faster, so one uniform decay estimate can be sharp at the first mode while being conservative for all the others. The example also keeps the factor two visible: confusing the decay rate of the norm and its square produces an incorrect stated constant even when qualitative decay is right.

### Worked example: convergence to a forced equilibrium

Let the form be time independent and the load a fixed dual functional. The elliptic theorem gives a stationary state w in V with $a(w,v)=F(v)$. Subtracting it from the parabolic equation yields an unforced equation for $u-w$. The same energy argument proves exponential convergence in H towards w.

On the unit interval with scalar unit diffusion and constant load two, the equilibrium is $x(1-x)$. Starting from zero does not converge back to zero: it approaches this nonzero profile. The explicit equilibrium and difference estimate explain the effect without requiring a full heat-kernel formula. If the form itself varies with time, a fixed elliptic equilibrium need not solve the evolution equation, so this subtraction argument must be changed.

## Smoothing requires more than the basic energy theorem

For the time-independent Dirichlet Laplacian, expand arbitrary H initial data in its orthonormal eigenbasis. Multiplying each coefficient by $e^{-\lambda_jt}$ defines the heat solution. For every positive time, factors $\lambda_j^k e^{-\lambda_jt}$ are uniformly bounded over the nonnegative eigenvalues. Thus the solution belongs to every spectral operator-power domain at positive times, with bounds that grow as time approaches zero.

Interpreting those domains as ordinary higher Sobolev spaces requires the corresponding elliptic boundary regularity theorem. On a smooth domain this yields the familiar smoothing result. On a corner domain, powers of the operator and unrestricted classical derivative spaces need not coincide as naively expected. For merely measurable time-dependent coefficients, there is no fixed spectral basis diagonalizing the evolution, so this particular proof does not apply.

### Worked example: rough initial data and the initial layer

Take a square-integrable step function as initial data on an interval, with zero Dirichlet boundary condition for positive times. It need not lie in the zero-boundary first-Sobolev space. Its sine coefficients are square summable, so the heat expansion converges to it in H as time tends to zero. For each positive time the exponential factors make the differentiated series converge in every finite operator-power norm.

The gradient can therefore become large near the initial time while remaining square integrable over time. There is no contradiction with the existence theorem: it asks for integrated gradient energy and H continuity, not a bounded gradient at zero or pointwise matching at the initial jump. A discontinuity at a single spatial point also has no distinguished H value, so demanding pointwise attainment there is the wrong initial-data contract.

## Further conclusions need their own hypotheses

Positivity can be proved by negative-part energy tests when the forcing, boundary data and reaction signs support it. The required time chain rule follows by approximating a convex negative-part-square function and using the energy-space smoothing argument. This is stronger than linear well-posedness: changing a reaction sign or a boundary term can invalidate the same order conclusion while leaving finite-horizon existence intact.

Nonlinear diffusion or reaction requires more than weak compactness of the linear sequence. A nonlinear product need not pass through weak convergence. Monotonicity can identify some limits, and compactness in time and space can provide strong convergence for others. Those are additional arguments, not automatic consequences of the Galerkin construction just proved.

A conforming spatial discretization inherits a finite-dimensional energy inequality when its mass and stiffness forms match the weak equation. A time discretization needs its own discrete energy estimate; forward Euler can impose a severe step restriction on high spatial frequencies. An arbitrarily accurate linear solve does not repair an unstable time-stepping rule. The continuous energy theorem identifies the target property, while numerical mathematics owns its discrete approximation and error analysis.

## Exercises with staged help

### 1. The dual embedding

Show that an H function defines a bounded functional on V and identify a bound using Poincaré.

<details><summary>Hint 1</summary>

Pair the function and the test in the H inner product.

</details>
<details><summary>Hint 2</summary>

Control the test's H norm by its gradient norm.

</details>
<details><summary>Full solution</summary>

For $h\in H$, $|(h,v)_H|\le\|h\|_H\|v\|_H\le C_P\|h\|_H\|v\|_V$. Thus h defines an element of $V'$ with norm at most $C_P\|h\|_H$. Density of V in H makes this embedding injective. It does not identify every dual functional with an H function; negative-order loads can be more singular.

</details>

### 2. A forcing estimate

Derive the integrated bound from the energy inequality using Young's inequality with the coercivity constant.

<details><summary>Hint 1</summary>

Bound the load pairing by the product of dual and energy norms.

</details>
<details><summary>Hint 2</summary>

Absorb half the coercive term into the left side before integrating.

</details>
<details><summary>Full solution</summary>

The load is at most $\alpha\|u\|_V^2/2+\|f\|_{V'}^2/(2\alpha)$. Hence $\|u(t)\|_H^2+\alpha\int_0^t\|u\|_V^2\le\|u_0\|_H^2+\alpha^{-1}\int_0^t\|f\|_{V'}^2$. The estimate is uniform in a conforming Galerkin dimension and depends only on the stated data and constants.

</details>

### 3. A difference theorem

Prove uniqueness and continuous dependence for the same form with two initial states and two loads.

<details><summary>Hint 1</summary>

The difference satisfies the same linear form equation.

</details>
<details><summary>Hint 2</summary>

Apply the preceding estimate with difference data.

</details>
<details><summary>Full solution</summary>

For $z=u-\widetilde u$, the initial value is $u_0-\widetilde u_0$ and the load is $f-\widetilde f$. The same integrated inequality bounds the H supremum and integrated V norm of z by those difference norms. With identical data its right side is zero, forcing z to vanish. The time lemma turns almost-everywhere equality into equality of the continuous H representatives at every time.

</details>

### 4. Norm versus squared norm

If the squared norm satisfies the decay rate $2\alpha/C_P^2$, what is the corresponding bound for the norm?

<details><summary>Hint 1</summary>

First write the integrated squared-norm inequality.

</details>
<details><summary>Hint 2</summary>

Take square roots of both sides.

</details>
<details><summary>Full solution</summary>

The squared bound is $\|u(t)\|_H^2\le e^{-2\alpha t/C_P^2}\|u_0\|_H^2$. Thus $\|u(t)\|_H\le e^{-\alpha t/C_P^2}\|u_0\|_H$. Applying the squared exponent directly to the norm would claim an unjustifiably faster rate.

</details>

### 5. A projection requirement

Explain why H orthogonality of a Galerkin projection alone does not complete the dual derivative estimate.

<details><summary>Hint 1</summary>

The form is bounded using V norms.

</details>
<details><summary>Hint 2</summary>

The arbitrary dual test is projected before the finite equation can be used.

</details>
<details><summary>Full solution</summary>

The estimate contains $\|P_mv\|_V$, so it requires a bound by a constant times $\|v\|_V$ uniform in m. H orthogonality only bounds the H norm. The chosen Dirichlet spectral projection is also V orthogonal and therefore V contractive, which supplies the missing uniform factor. Other trial families must justify their own stability property.

</details>

### 6. A rough initial state

Why is a step initial value allowed by the linear existence theorem even though it is not in the interval first-Sobolev space?

<details><summary>Hint 1</summary>

Identify the space required at time zero.

</details>
<details><summary>Hint 2</summary>

Integrated energy regularity need not hold at every selected time.

</details>
<details><summary>Full solution</summary>

The initial requirement is membership in H, which the bounded step satisfies. The solution belongs to $L^2(0,T;V)$ and is continuous into H; it need not belong to V at zero. Its gradient can become large near zero while its squared norm remains time integrable. Pointwise attainment at the jump is neither required nor canonically defined by the H class.

</details>

### 7. A stationary source

For unit diffusion on $(0,1)$ with source two and initial zero, identify the stationary state and prove convergence towards it without summing a Fourier series.

<details><summary>Hint 1</summary>

Solve the zero-boundary elliptic equation for the stationary profile.

</details>
<details><summary>Hint 2</summary>

Subtract it from the evolution and use unforced decay.

</details>
<details><summary>Full solution</summary>

The profile is $w=x(1-x)$, satisfying $-w''=2$. The difference $u-w$ solves unforced heat flow with initial value minus w. Its H norm decays exponentially by Poincaré and the energy identity. The limit is nonzero, so unforced zero-decay language cannot be used for the original forced state.

</details>

### 8. Initial data in a weak limit

Describe how the Galerkin proof recovers the initial condition without assuming pointwise trajectory convergence at zero.

<details><summary>Hint 1</summary>

Use a smooth time test that vanishes only at the final endpoint.

</details>
<details><summary>Hint 2</summary>

Compare the surviving initial boundary term with the time lemma for the limit.

</details>
<details><summary>Full solution</summary>

Integrating each projected equation by parts produces its projected initial value paired with the spatial test. Those initial values converge strongly in H, while the other terms pass through the energy-space weak limits. The limit's continuous H representative has its own integrated identity. Equality of the two initial boundary terms on a dense spatial set gives $u(0)=u_0$ in H.

</details>

### 9. What a spectral smoothing bound says

Show that $\lambda^ke^{-\lambda t}$ is bounded over nonnegative $\lambda$ for each positive t, and explain why the bound can grow as t tends to zero.

<details><summary>Hint 1</summary>

Differentiate in the scalar frequency parameter for positive integer k.

</details>
<details><summary>Hint 2</summary>

The maximizing frequency scales inversely with time.

</details>
<details><summary>Full solution</summary>

For positive k the maximum is at $\lambda=k/t$, with value $(k/(et))^k$; for k zero the bound is one. Thus positive time controls every fixed operator power, but the constants diverge near zero when k is positive. Higher spatial Sobolev interpretations additionally require elliptic domain regularity and cannot be inferred solely from this scalar multiplier bound.

</details>

### 10. A nonlinear limit gap

Why does the linear Galerkin argument not by itself justify replacing a weakly convergent sequence's quadratic reaction by the square of its weak limit?

<details><summary>Hint 1</summary>

The linear form is a continuous linear functional of the sequence.

</details>
<details><summary>Hint 2</summary>

Oscillations can keep nonzero squared mass even when their weak mean vanishes.

</details>
<details><summary>Full solution</summary>

Weak convergence passes continuous linear pairings but not arbitrary nonlinear products. A bounded oscillatory sequence may converge weakly to zero while its square has a nonzero weak limit. A nonlinear reaction therefore needs strong compactness, monotonicity or another structure establishing the limit passage. The linear energy theorem supplies useful bounds but does not complete that separate argument.

</details>

## Sources and continuation

Lions and Magenes, *Non-Homogeneous Boundary Value Problems and Applications*, develops the evolution triple and time traces; Evans and Brezis present energy and Galerkin methods. Here the time lemma, finite approximation, derivative estimate, limit identification and uniqueness are proved for the stated bounded coercive forms. The semigroup viewpoint specializes autonomous evolution into a family of bounded solution operators and clarifies which additional spectral smoothing statements apply.
