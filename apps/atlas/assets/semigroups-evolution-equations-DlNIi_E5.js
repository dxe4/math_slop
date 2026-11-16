var e=`---
parent_id: book-pde-weak-theory-waves-patterns
chapter_id: semigroups-evolution-equations
title: "Semigroups and Evolution Equations"
level: graduate
estimated_minutes: 460
license: CC BY-SA 4.0
---

# Semigroups and Evolution Equations

An autonomous linear evolution can be described by its solution operators without differentiating every initial state. The generator then identifies precisely which states admit a strong derivative at the initial time. This chapter proves the basic generator and resolvent identities, constructs heat and transport examples, and proves the bounded-perturbation theorem through a convergent Volterra series. Abstract generation criteria are stated as named inputs, with their range conditions visible.

Preparation is [parabolic energy theory](parabolic-equations.md), bounded operators, complete normed spaces and Bochner integration of continuous vector-valued functions. We use square-integrable Fourier or spectral expansions only where an explicit basis is named. A solution semigroup is not assumed to be a matrix exponential: the generator of a PDE is usually unbounded and has a proper domain.

## Strong continuity is a statement about each initial state

A strongly continuous semigroup on a Banach space X is a family of bounded linear operators $T(t)$ for nonnegative t with $T(0)=I$, $T(t+s)=T(t)T(s)$ and $T(t)x\\to x$ in X for every x as t decreases to zero. The semigroup identity then gives continuity of every orbit at every time. Strong continuity does not require the operator norm of $T(t)-I$ to tend to zero.

On a finite time interval, the uniform boundedness principle turns pointwise orbit boundedness into a common operator bound. Repeatedly applying the semigroup identity extends such a bound to $\\|T(t)\\|\\le Me^{\\omega t}$ for suitable M and real omega. We take an explicit bound of that form when proving integral estimates. The growth exponent is an upper bound, not necessarily the exact asymptotic rate.

The state space is part of the assertion. Translation is strongly continuous in square-integrable norm but need not be strongly continuous in the essential-supremum norm on all bounded functions. A jump shifted by a small distance retains a unit essential-supremum difference. Changing the state norm can therefore change whether the same pointwise formula defines a strongly continuous evolution.

Define the generator by the strong limit

$$Ax=\\lim_{h\\downarrow0}\\frac{T(h)x-x}{h},\\qquad
D(A)=\\{x:\\text{this limit exists in }X\\}.$$

The domain is a linear subspace. For a domain element, the semigroup identity shows that $T(t)x$ is again in the domain and $AT(t)x=T(t)Ax$. The orbit is continuously differentiable with derivative $T(t)Ax$, including its right derivative at zero. Integrating gives $T(t)x-x=\\int_0^tT(s)Ax\\,ds$.

## The generator is dense and closed

For arbitrary x define its short orbit average $x_h=h^{-1}\\int_0^hT(s)x\\,ds$. Strong continuity gives $x_h\\to x$. A change of variables in $[T(k)x_h-x_h]/k$ leaves integrals over the short end intervals. Taking k to zero proves $x_h\\in D(A)$ with $Ax_h=[T(h)x-x]/h$. Thus the generator domain is dense even when x itself has no initial derivative.

To prove closedness, suppose $x_n\\in D(A)$ converge to x and $Ax_n$ converge to y. Pass to the limit in the integrated orbit identity using the uniform operator bound on a finite interval. It gives $T(t)x-x=\\int_0^tT(s)y\\,ds$. Divide by t and use strong continuity at zero. The quotient tends to y, proving x belongs to the generator domain and Ax equals y. This is closedness of the graph, not boundedness of the operator on all of X.

The graph norm $\\|x\\|+\\|Ax\\|$ consequently makes the domain a Banach space. A sequence can converge in the state norm while its generator images diverge; then it need not converge in the graph norm or have a domain limit. This distinction is the operator version of keeping derivative control when passing from smooth functions to a Sobolev function.

If a strong classical solution of $u'=Au$ starts in the domain, it is unique and equals $T(t)u_0$. One proof differentiates $T(t-s)u(s)$ on an interval where the domain derivatives are defined; the two contributions cancel, so its endpoints agree. The argument uses both generator-domain membership and the equation. It is not valid for an arbitrary merely continuous trajectory without a mild-solution interpretation.

## The resolvent is a Laplace integral of the evolution

For real $\\lambda>\\omega$ define

$$R_\\lambda x=\\int_0^\\infty e^{-\\lambda t}T(t)x\\,dt.$$

The exponential bound makes the integral converge in X and gives $\\|R_\\lambda\\|\\le M/(\\lambda-\\omega)$. To identify it, apply $T(h)$ inside the integral and shift the integration variable. The difference quotient tends to $\\lambda R_\\lambda x-x$: the exponential factor contributes the first term and the short omitted initial interval contributes the second. Thus $R_\\lambda x\\in D(A)$ and $(\\lambda I-A)R_\\lambda x=x$.

For a domain element y, integrate the derivative of $e^{-\\lambda t}T(t)y$. The terminal term tends to zero by the growth bound. The resulting identity gives $R_\\lambda(\\lambda I-A)y=y$. Hence the resolvent is a two-sided inverse with its range in the domain. Surjectivity and injectivity have both been proved; a norm estimate alone would not establish either one.

For a contraction semigroup, M is one and omega can be zero. The resolvent bound then takes the particularly simple form $\\|R_\\lambda\\|\\le1/\\lambda$. Conversely, a densely defined closed operator with the appropriate resolvent range and power bounds generates a semigroup by the Hille–Yosida theorem. That generation theorem is a named input here, not a consequence of the single integral formula in the reverse direction.

On a Hilbert space the Lumer–Phillips criterion is a useful contraction version: a densely defined dissipative operator with $\\operatorname{Re}(Ax,x)\\le0$ and range of $\\lambda_0I-A$ equal to the whole space for some positive $\\lambda_0$ generates a contraction semigroup. The range hypothesis is essential. A formal negative energy derivative on a small operator domain does not by itself prove the existence of an evolution for every state.

## Heat is a strongly continuous evolution with an unbounded generator

### Worked example: zero-boundary heat on an interval

On $(0,\\pi)$ use the normalized sine basis of H. Define $T(t)$ by multiplying the nth coefficient by $e^{-n^2t}$. Parseval gives a contraction bound, and the scalar exponential identity gives the semigroup property. To prove strong continuity, first approximate an arbitrary square-summable coefficient sequence by a finite one. Continuity of each finite collection handles the finite part, and the contraction bound controls the tail uniformly in time. This is a direct proof for every H initial state.

The generator multiplies the nth coefficient by $-n^2$, with domain consisting of sequences for which the sum of $n^4$ times squared coefficient magnitude is finite. Sufficiency follows by dominated convergence of the difference quotients. Necessity follows by taking coefficients of any alleged H limit, which must have those values and be square summable. On this smooth interval the domain is the second-Sobolev space with zero endpoint trace, by the elementary sine-series derivative characterization.

The generator is unbounded: normalized nth sine vectors have generator norms $n^2$. The semigroup is not continuous in operator norm at zero, since the supremum over n of $|e^{-n^2t}-1|$ is one for every positive t. Nonetheless it is strongly continuous, so rough initial data have continuous H trajectories. There is no conflict between these statements because their quantifiers differ: strong continuity fixes the initial state before taking the limit.

For positive time every fixed generator power is bounded on the image, since polynomial spectral factors are dominated by the exponential. This is genuine smoothing in this model. The [regularity chapter](regularity.md) explains why translating operator powers into ordinary global derivative norms on a nonsmooth domain requires additional boundary theory.

## Transport can be a group without smoothing

### Worked example: translation on the real line

On $L^2(\\mathbb R)$ let $T(t)f(x)=f(x+t)$. Translation preserves the norm and has inverse translation by minus t, so it extends to a group for all real times. Strong continuity follows first for compactly supported smooth functions, then for all square-integrable functions by density and the isometry bound. The generator is the weak first derivative with domain $H^1(\\mathbb R)$.

For sufficiency use the interval integral formula along each translation: the quotient is the average of translates of the derivative. Strong continuity of derivative translations makes it converge in square-integrable norm. Conversely, if the quotient converges in that norm, pairing with compact smooth tests and shifting the quotient to the test identifies its limit as the weak derivative. These two arguments give the exact domain, rather than only a convenient smooth core.

A translated jump remains a jump, so transport does not have the heat semigroup's smoothing property. Both examples are contraction semigroups, and both have densely defined closed generators; those common properties alone therefore do not imply analytic smoothing. Their spectra and higher regularity structures differ.

For transport on a bounded interval or half-line, boundary conditions enter the generator domain. An inflow condition is not an arbitrary extra value imposed on every H representative; it is part of the domain where a derivative trace exists. Different inflow and outflow choices can define different operators or fail to generate the desired evolution. Identifying only the formal differential expression leaves that essential information unresolved.

## Variation of constants defines a mild solution

For $u'=Au+f$ with continuous H-valued forcing, define

$$u(t)=T(t)u_0+\\int_0^tT(t-s)f(s)\\,ds.$$

This is the mild solution. Strong continuity and the local operator bound give a continuous H trajectory, with the specified initial value. Integrable forcing gives the analogous Bochner integral and the corresponding continuous convolution under the same local bound. The estimate is the free evolution bound plus the integral of the propagated forcing norm.

For a classical solution, differentiate $T(t-s)u(s)$ and integrate to recover this formula, proving uniqueness in the classical class. Conversely, if the initial value belongs to the generator domain and f is continuously differentiable in H, the mild expression is classical. One way to justify differentiation is to use the already proved identity that $\\int_0^tT(s)x\\,ds$ belongs to the generator domain, with generator image $T(t)x-x$, and integrate the varying forcing by parts. The resulting generator expression is

$$A\\int_0^tT(t-s)f(s)ds
=T(t)f(0)-f(t)+\\int_0^tT(t-s)f'(s)ds.$$

The right side is continuous, and the ordinary time derivative then equals Au plus f. These assumptions are sufficient, not necessary. Without them the mild solution can remain perfectly meaningful while failing to have a strong derivative at the initial time.

The energy theorem allowed forcing in a negative-order dual space, which may not be an H-valued integrable function. The displayed H-valued convolution cannot simply accept every such load. Extrapolation spaces or the variational evolution formulation extend the theory to that setting. For the heat equation where both formulations apply, their uniqueness statements identify the same solution; the larger variational forcing class should not be silently narrowed or inserted into an undefined integral.

## A bounded perturbation has a convergent construction

Let A generate a strongly continuous semigroup with the exponential bound, and let B be a bounded operator on X. Define $S_0(t)=T(t)$ and recursively

$$S_{n+1}(t)x=\\int_0^tT(t-s)B S_n(s)x\\,ds.$$

Induction gives $\\|S_n(t)\\|\\le M^{n+1}\\|B\\|^n t^n e^{\\omega t}/n!$. The series of these operators therefore converges uniformly in operator norm on each bounded time interval. Its sum S is strongly continuous and satisfies the Volterra equation $S(t)x=T(t)x+\\int_0^tT(t-s)BS(s)x\\,ds$, with bound $Me^{(\\omega+M\\|B\\|)t}$.

Uniqueness of this Volterra equation follows by iterating its difference estimate: on a fixed finite interval, successive iterations produce the factorial denominator, forcing a zero difference. Splitting the integral at an intermediate time and using that uniqueness shows $S(t+s)=S(t)S(s)$. Thus S is a semigroup rather than just a family of individually defined response operators.

The integral term divided by t tends to Bx as t decreases to zero, by strong continuity. Hence a state has a generator derivative for S exactly when it has one for T, and the new generator is $A+B$ on the same domain. This proves the bounded-perturbation theorem directly. No commutation between A and B was assumed; in general the answer cannot be factorized into two exponentials.

Unbounded perturbations are different. A derivative term, a singular potential or a changed boundary condition is not covered just because it appears as an added expression in the PDE. Relative operator bounds, form methods or a separate generation theorem can treat some such cases, but the uniform norm estimate used in this proof would otherwise be absent.

### Worked example: reaction competing with diffusion

Add a constant reaction q to zero-boundary interval heat flow: $u_t=u_{xx}+qu$. Multiplication by q is bounded and commutes with the heat evolution, so the nth mode has factor $e^{(q-n^2)t}$. If q is less than one every mode decays uniformly; at q equal to one the first mode is stationary; above one it grows. Dissipation and a bounded perturbation guarantee a well-defined evolution for every finite q, but do not guarantee asymptotic decay.

For a bounded spatially varying reaction, the perturbation theorem still gives an evolution, though the simple mode factors no longer apply because the multiplication need not commute with diffusion. An energy upper bound on the reaction gives a sufficient decay condition via Poincaré. Failure of that sufficient bound does not classify every spectrum. This parallels the distinction between generation, norm bounds and exact stability thresholds throughout the chapter.

## Exercises with staged help

### 1. Density of the generator domain

Show that the short orbit averages converge to x and compute their generator images.

<details><summary>Hint 1</summary>

Bound the average's difference from x using strong continuity.

</details>
<details><summary>Hint 2</summary>

Apply a short shift to the integral and compare its two end intervals.

</details>
<details><summary>Full solution</summary>

The difference norm is at most the average of $\\|T(s)x-x\\|$, which tends to zero. A shifted average minus the original average leaves its upper and lower end integrals. Dividing by the new step and taking its limit gives $(T(h)x-x)/h$ for the generator image of the fixed h average. Thus the averages belong to the domain and approximate every state.

</details>

### 2. Closedness

Prove generator closedness from the integrated orbit identity.

<details><summary>Hint 1</summary>

Pass to the limit assuming both the states and their generator images converge.

</details>
<details><summary>Hint 2</summary>

Divide the limiting integral identity by time near zero.

</details>
<details><summary>Full solution</summary>

If $x_n\\to x$ and $Ax_n\\to y$, local uniform operator bounds pass the identity to $T(t)x-x=\\int_0^tT(s)y\\,ds$. The divided right side tends to y by strong continuity. Hence x is a domain element with generator image y. The argument proves a closed graph, not that the domain is the whole state space.

</details>

### 3. Heat norm continuity

Prove that the interval heat semigroup is strongly continuous but not continuous in operator norm at zero.

<details><summary>Hint 1</summary>

For a fixed state split its sine coefficients into a finite head and a small tail.

</details>
<details><summary>Hint 2</summary>

For the operator norm, high-frequency normalized sine states can depend on time.

</details>
<details><summary>Full solution</summary>

Each finite head converges under the scalar exponential factors, while the contraction bound controls the fixed small tail, proving strong continuity. For every positive t, $|e^{-n^2t}-1|$ tends to one as n increases, so $\\|T(t)-I\\|=1$. The initial state is fixed in the first limit and optimized over in the second, explaining their compatibility.

</details>

### 4. A generator domain

For the heat sine expansion, determine whether coefficients $c_n=1/n^2$ define an H state and whether that state belongs to the generator domain.

<details><summary>Hint 1</summary>

Compare the unweighted and generator-weighted squared series.

</details>
<details><summary>Hint 2</summary>

The generator multiplies the nth coefficient by $-n^2$.

</details>
<details><summary>Full solution</summary>

The coefficient squares sum as $\\sum n^{-4}$, so the state belongs to H. The generator-weighted series is $\\sum n^4n^{-4}=\\sum1$, divergent. Thus it has a continuous mild heat orbit but no strong H derivative at time zero. At every positive time the exponential factors put it in the generator domain.

</details>

### 5. Translation preserves a jump

Use an indicator of a bounded interval to explain why a contraction semigroup need not smooth its initial states.

<details><summary>Hint 1</summary>

Write the translated indicator's support.

</details>
<details><summary>Hint 2</summary>

Its jumps remain, although its square-integrable distance from a small translate tends to zero.

</details>
<details><summary>Full solution</summary>

Translation moves the two endpoints of the indicator interval but leaves discontinuities of the same size. The square-integrable difference from a small translate is the square root of the symmetric-difference measure and tends to zero. This proves strong continuity on that example without any smoothing. Contraction and strong continuity alone are therefore weaker than heat-type regularization.

</details>

### 6. A resolvent bound

Given $\\|T(t)\\|\\le3e^{2t}$, state a resolvent range and bound supplied by the Laplace construction.

<details><summary>Hint 1</summary>

The exponential integral must decay at infinity.

</details>
<details><summary>Hint 2</summary>

Integrate the scalar upper bound after multiplying by the Laplace weight.

</details>
<details><summary>Full solution</summary>

For real $\\lambda>2$, the inverse of $\\lambda I-A$ exists and has norm at most $3/(\\lambda-2)$. The two-sided inverse identities follow from the generator calculation, not merely the bound. The estimate gives a sufficient resolvent region; it does not assert singularity at every smaller real parameter.

</details>

### 7. Constant forcing

For a fixed H vector f and zero initial state, show the mild solution belongs to the generator domain and compute Au.

<details><summary>Hint 1</summary>

Change variables to write the convolution as an orbit integral.

</details>
<details><summary>Hint 2</summary>

Use the same end-interval calculation as for orbit averages.

</details>
<details><summary>Full solution</summary>

The solution is $u(t)=\\int_0^tT(s)f\\,ds$. Its generator image is $T(t)f-f$, obtained by a shifted integral quotient. Its time derivative is $T(t)f$, so it satisfies $u'=Au+f$ in H. No domain assumption on f itself is needed for this integrated response.

</details>

### 8. Noncommuting perturbations

Why does the bounded-perturbation theorem not generally give $S(t)=T(t)e^{tB}$?

<details><summary>Hint 1</summary>

Differentiate that product on a suitable common domain.

</details>
<details><summary>Hint 2</summary>

The two operators must be rearranged to match the desired generator.

</details>
<details><summary>Full solution</summary>

Product differentiation gives an added term $T(t)Be^{tB}$, whereas the desired equation contains $BT(t)e^{tB}$. They agree when the relevant operators commute, but boundedness alone does not imply commutation. The Volterra series retains their order and proves the result without that additional assumption.

</details>

### 9. Reaction threshold

For interval heat with constant reaction q, classify decay, neutrality and growth according to the first sine mode.

<details><summary>Hint 1</summary>

The first Laplacian eigenvalue on this interval is one.

</details>
<details><summary>Hint 2</summary>

Every higher mode has a larger squared frequency.

</details>
<details><summary>Full solution</summary>

For $q<1$ all exponents $q-n^2$ are negative with uniform largest value $q-1$, giving exponential decay. At $q=1$ the first mode is stationary and the rest decay. For $q>1$ the first mode grows, proving instability of zero. The semigroup exists in every case; generation is a different conclusion from stability.

</details>

### 10. A forcing-space mismatch

Explain why an energy-dual forcing cannot automatically be inserted into the displayed H-valued Duhamel formula.

<details><summary>Hint 1</summary>

Identify the space on which the semigroup was defined.

</details>
<details><summary>Hint 2</summary>

Some dual functionals are not H vectors at all.

</details>
<details><summary>Full solution</summary>

The formula applies T to an H-valued integrable forcing. A general negative-order energy-dual functional lies outside that state space, so the integrand has not been defined by this theorem. An extrapolated semigroup or the variational evolution formulation can treat such loads with additional mapping estimates. Writing the same symbol without that extension does not prove the integral exists or that the solution has the stated H continuity.

</details>

## Sources and continuation

Pazy, *Semigroups of Linear Operators and Applications to Partial Differential Equations*, and Engel and Nagel, *One-Parameter Semigroups for Linear Evolution Equations*, give the general generation theory. Hille–Yosida and Lumer–Phillips are named inputs here. Density, closedness, the Laplace resolvent, explicit heat/transport generators and bounded perturbations have direct proofs. Nonlinear waves next require additional entropy or energy structure beyond a linear solution-operator family.
`;export{e as default};