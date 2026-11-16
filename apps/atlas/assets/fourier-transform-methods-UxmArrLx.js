var e=`---
parent_id: book-partial-differential-equations
chapter_id: fourier-transform-methods
title: "Fourier Transform Methods for Classical PDE"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Fourier Transform Methods for Classical PDE

A constant-coefficient spatial derivative becomes multiplication by frequency after Fourier transformation. A PDE can then become a family of ordinary differential equations or algebraic equations. The useful method has three stages: transform a stated function class, solve the frequency equation and prove that inversion produces a solution in the claimed class. A zero or unbounded multiplier can obstruct that final step.

This chapter assumes [whole-line transform calculus](../fourier-analysis/fourier-transform-real-line.md), [inversion and Plancherel](../fourier-analysis/inversion-plancherel.md), and [Schwartz convolution](../fourier-analysis/schwartz-space-convolution.md). We use the angular convention fhat(ξ)=∫f(x)e^−ixξdx, with inverse factor 1/(2π). Schwartz data provide a safe classical starting class. Mean-square statements are explicitly interpreted in the completed space proved in Fourier Analysis. No boundary condition is encoded by a whole-line transform unless the boundary geometry and extension are supplied separately.

The equations studied are heat and wave evolution, a positive elliptic resolvent, the zero-frequency Poisson obstruction and a half-plane harmonic extension. Each illustrates a different multiplier behavior. The next chapter treats time-dependent sources systematically through Duhamel's principle.

## 1. The spatial symbol and its scope

For f∈S, the transform of f' is iξfhat and that of f'' is −ξ²fhat. Thus the spatial operator P(∂x), with constant polynomial coefficients, has symbol P(iξ). This identity follows by repeated integration by parts with vanishing tails. Variable coefficients do not commute with the transform: multiplication by a nonconstant spatial coefficient becomes convolution or another frequency operation, rather than a scalar coefficient retained unchanged.

For example −u''+m²u=f has symbol ξ²+m². By contrast −u''−k²u=f has symbol ξ²−k² and vanishes at two real frequencies. These similar-looking ODEs have different inversion questions. The transform method does not authorize division by the symbol at its zeros.

Even a nonzero multiplier needs estimates. Multiplication by e^ξ² does not map arbitrary Schwartz functions to integrable functions, so reversing a heat multiplier is not a generally defined classical operation. A formal algebraic solution is therefore a candidate with conditions, not an existence theorem by itself.

## 2. Heat evolution constructed in Schwartz space

For u_t=κu_xx, κ>0, and u(0)=f∈S, transform in x. At every frequency the equation becomes ∂t uhat=−κξ²uhat, giving uhat(t,ξ)=e^−κtξ²fhat(ξ). For each t≥0 this product is Schwartz. On bounded time intervals its weighted derivatives are controlled by finitely many seminorms of fhat; each derivative of the multiplier contributes polynomial factors with bounded t coefficients.

The inverse transform defines u(t)∈S. For t>0, frequency differentiation and inversion give u_t=κu_xx. Continuity and differentiability at time zero in S follow from the Gaussian-semigroup proof in Fourier Analysis, or directly from the multiplier identity

\\[
 e^{-\\kappa t\\xi^2}-1
 =-\\kappa\\xi^2\\int_0^t e^{-\\kappa s\\xi^2}\\,ds
\\]

with its seminorm estimates. Hence the constructed solution is classical and has the prescribed initial data. Uniqueness in continuously differentiable Schwartz evolution follows by transforming the difference and solving its zero-data scalar ODE. The earlier maximum theorem gives uniqueness in a larger bounded classical class under its stated assumptions.

Inversion of the Gaussian multiplier identifies u=Hκt*f. Its positive kernel also proves order preservation and the amplitude bound ||u(t)||∞≤||f||∞. The transform at zero preserves ∫u=∫f. The zero frequency is a single value in this continuous-data calculation, while mean-square energy is an integral over frequency; those two observations should not be confused.

**Worked example 10.1: a Gaussian profile.** For f=e^−ax²,

\\[
 u(t,x)=\\frac1{\\sqrt{1+4a\\kappa t}}
 \\exp\\left(-\\frac{ax^2}{1+4a\\kappa t}\\right).
\\]

This follows by multiplying its Gaussian transform and completing the inverse square. The profile widens while its height decreases and total integral stays fixed. Direct differentiation checks the PDE, and t=0 recovers f. The formula also shows why pointwise decay can coexist with preserved nonzero mass on an expanding spatial scale.

## 3. Heat estimates and reverse instability

Plancherel gives

\\[
 \\|u(t)\\|_2^2=\\frac1{2\\pi}\\int
 e^{-2\\kappa t\\xi^2}|\\widehat f(\\xi)|^2d\\xi
 \\le\\|f\\|_2^2.
\\]

The Gaussian convolution separately gives ||u(t)||∞≤(4πκt)^−1/2||f||1 for t>0. The first estimate uses square-integrable information; the second uses absolute-integral information. Neither implies a uniform spectral gap on the whole line.

Indeed set f_r(x)=sqrt r f(rx), so its square norm is unchanged. Its transform is r^−1/2 fhat(ξ/r), concentrating near frequency zero as r decreases to zero. At a fixed t, substitution ξ=rη shows the norm ratio after heat evolution tends to one by a compact/tail argument in the integrable squared transform. Thus no bound ||u(t)||2≤e^−γt||f||2 with one γ>0 can hold for every Schwartz datum on the line. The bounded-interval Dirichlet problem had a positive first eigenvalue and therefore a different decay conclusion.

Reverse evolution is unstable in the ordinary square norm. Fix a smooth compactly supported frequency bump φ of norm one, and place it near a large frequency N. Forward heat evolution for time T multiplies it by at most e^−κT(N−1)² when its support lies in [N−1,N+1]. Its initial energy remains fixed while its observed final energy tends to zero. Recovering that initial state would amplify the small observed component without a uniform bound. Each finite-frequency example is smooth; instability is not caused by using an undefined initial function.

## 4. The line wave multiplier

For u_tt=c²u_xx with initial f,g∈S, the frequency ODE gives

\\[
 \\widehat u(t,\\xi)=\\cos(ct\\xi)\\widehat f(\\xi)
 +\\frac{\\sin(ct\\xi)}{c\\xi}\\widehat g(\\xi),
\\]

where the second multiplier has value t at ξ=0. This singularity is removable: its power series or the identity sin(ctξ)/(cξ)=∫_0^tcos(csξ)ds supplies a smooth extension. Every fixed frequency derivative has polynomial bounds on bounded time intervals, so the product is Schwartz. Inversion and termwise time differentiation yield a classical Schwartz solution with the required data.

The inverse of the first term is the average of f(x−ct) and f(x+ct), by the translation rule. The second is the integral of the corresponding translated g averages over time, giving (2c)^−1∫_{x−ct}^{x+ct}g. Thus the transform construction reproduces d'Alembert's formula and its finite propagation. The frequency multiplier alone does not make cone geometry obvious; inversion connects the algebra to that physical feature.

**Worked example 10.2: a one-way wave.** If g=−cf', then ghat=−ciξfhat. The bracket becomes cos(ctξ)−i sin(ctξ)=e^−ictξ. Translation inversion gives u=f(x−ct), a pure right-moving profile. The zero-frequency value matches automatically because the integral of f' is zero. This exact example checks both the forward sign and the velocity prefactor.

The frequency energy |uhat_t|²+c²ξ²|uhat|² is constant for each ξ by the scalar oscillator equation. Integrating and applying Plancherel gives physical wave energy conservation. Unlike heat, the wave multiplier does not suppress large frequencies in the energy norm; it rotates displacement and velocity information. Dispersive estimates in other norms are separate conclusions and are not obtained merely from this unitary energy calculation.

## 5. A positive elliptic resolvent

For m>0 and f∈S, define uhat=fhat/(ξ²+m²). The denominator never vanishes, and the multiplier with all its derivatives has polynomial bounds. Therefore uhat∈S and inversion gives a unique u∈S solving −u''+m²u=f. The known transform of e^−m|x| gives

\\[
 u(x)=\\frac1{2m}\\int e^{-m|x-y|}f(y)dy.
\\]

Absolute integral bounds justify convolution and its transform, while derivatives can be moved onto the Schwartz f. The kernel is positive, has integral 1/m² and decays at infinity. Hence nonnegative f gives nonnegative u and ||u||∞≤||f||∞/m². Plancherel also gives ||u||2≤||f||2/m². These are different norm estimates from the same positive denominator.

**Worked example 10.3: manufacturing a source.** Put u=e^−ax². Then f=((2a+m²)−4a²x²)e^−ax² satisfies −u''+m²u=f. The transform quotient reconstructs exactly that Gaussian. The source changes sign outside a bounded interval even though u is positive. Positivity of the inverse says a nonnegative source has a nonnegative response; it does not say every positive response requires a nonnegative source.

If m decreases toward zero, the bounds diverge. This reflects a real change in invertibility, not an artifact of the estimate. The next section identifies the two zero-frequency obstructions to a rapidly decreasing solution when m=0.

## 6. Poisson inversion and moment compatibility

Suppose −u''=f with both f and u Schwartz. Transforming gives ξ²uhat=fhat, so fhat(0)=fhat'(0)=0. By the moment identities, these necessary conditions are ∫f=0 and ∫xf=0. They encode the disappearance of the constant and linear tails that a general line Poisson solution can have.

They are also sufficient. If fhat and its first derivative vanish at zero, Taylor's integral identity gives

\\[
 \\frac{\\widehat f(\\xi)}{\\xi^2}
 =\\int_0^1(1-s)\\widehat f''(s\\xi)ds
\\]

near zero, defining a smooth quotient there. Its higher derivatives are obtained by differentiating the integral on a compact interval. Away from zero division by ξ² preserves rapid decrease of every derivative. Thus the quotient belongs to S, and inversion produces a unique Schwartz solution. A Schwartz homogeneous solution must have zero transform off zero and, by continuity, at zero too, so uniqueness follows.

For a concrete compatible source, choose any h∈S and f=−h''. Integration by parts gives both zero moments, and u=h solves the problem. A Gaussian source of positive integral violates the first condition, so it has no Schwartz solution even though classical solutions obtained by integrating twice exist and grow linearly at infinity. The function class is part of solvability.

For −u''−k²u=f with k>0, the analogous Schwartz compatibility conditions are fhat(k)=fhat(−k)=0. The denominator has simple zeros. Vanishing of a smooth numerator at a point makes its quotient by the corresponding linear factor smooth there, by the first-order integral Taylor formula. Factoring ξ²−k² then gives a Schwartz quotient. This establishes necessity and sufficiency in S. Oscillatory radiation solutions for more general sources use another class and additional conditions; they are not obtained by assigning arbitrary values to the singular quotient.

## 7. Harmonic extension and a multiplier cusp

For boundary data f∈S on the real axis, the bounded half-plane harmonic extension is

\\[
 u(y,x)=\\frac1{2\\pi}\\int e^{-y|\\xi|}\\widehat f(\\xi)e^{ix\\xi}d\\xi,
 \\qquad y>0.
\\]

The transform in x solves uhat_yy=ξ²uhat. The decaying branch selects e^−y|ξ|; the growing branch is excluded by the chosen bounded extension. All spatial and y derivatives of the inverse integral on positive y strips are justified by integrable polynomial times fhat, so u_yy+u_xx=0. The compact/tail argument proves uniform convergence to f as y decreases to zero.

Inverting e^−y|ξ| using the exponential transform gives the Poisson convolution kernel y/(π(x²+y²)), matching the earlier Green construction. This also proves positivity, unit mass and boundedness directly. Uniqueness among bounded half-plane harmonic extensions is a separate unbounded-domain statement; the present construction does not quote the bounded-domain theorem to establish it.

The cusp of |ξ| at zero matters. Multiplication by e^−y|ξ| need not preserve S. For a nonnegative nonzero Schwartz f, choose a finite interval on which its integral is positive. The Poisson convolution over that interval bounds u(y,x) below by a positive constant times 1/x² for all sufficiently large |x|. Thus u(y,·) is not rapidly decreasing. It is nevertheless smooth, bounded and square integrable. Declaring every bounded multiplier to map S into S would have led to a false regularity statement here.

## 8. Transform methods as a disciplined procedure

The preceding examples suggest a practical sequence. Specify the spatial domain, initial or boundary information and the intended function class. Transform only in coordinates where the operator and domain permit it. Solve the resulting scalar equation with every zero-frequency or resonant case retained. Establish multiplier estimates sufficient for the inverse and for the derivatives required by the PDE. Finally connect the constructed solution to uniqueness in the stated class by an independent ODE, energy or maximum argument.

For constant-coefficient equations on the line this procedure is especially efficient. On an interval, direct whole-line transformation usually needs an extension, a boundary lifting or a sine/cosine transform, each encoding different boundary information. On a variable-coefficient domain the spatial symbol is no longer just one scalar function of ξ. The classical transform method then provides local intuition and selected exact models, while broader weak and operator methods supply other routes.

## 9. Combining transport, diffusion and damping

Consider u_t+v u_x=κu_xx−αu on the line, with constant real v, κ>0 and α≥0. The frequency equation is ∂tuhat=(−κξ²−ivξ−α)uhat. Its solution is the product of the three commuting scalar factors

\\[
 \\widehat u(t,\\xi)=e^{-\\alpha t}e^{-ivt\\xi}
 e^{-\\kappa t\\xi^2}\\widehat f(\\xi).
\\]

For Schwartz data, the multiplier estimates already proved justify inversion and every required derivative. The translation and heat identities identify

\\[
 u(t,x)=e^{-\\alpha t}(H_{\\kappa t}*f)(x-vt).
\\]

This construction separates three mechanisms. Translation moves the profile without changing its square norm. Diffusion spreads it and decreases that norm. Damping multiplies every value by the same positive scalar. Their order is interchangeable because the coefficients are constant and all three operators commute on S. For a spatially varying velocity that commutation generally fails, so the same factorization is not available.

For nonnegative unit-mass data, the total mass is e^−αt. After removing that mass factor, the center shifts by vt and the Gaussian contribution to variance is 2κt when the necessary moments exist. A Gaussian initial datum gives an explicit shifted version of the worked heat profile. If α is allowed negative, the same classical construction remains valid on finite times but the scalar factor grows; a decay conclusion must then be changed accordingly.

A nonnegative nonzero compactly supported smooth f produces u(t,x)>0 at every x for t>0, because the Gaussian kernel is positive everywhere and integrates against a positive interval of f. Thus adding any positive diffusion destroys the strict finite-propagation property of pure transport, even though the largest visible part of the signal may remain near the transported center. A narrow positive tail and an exactly zero region are mathematically different claims.

The construction also extends to coefficients depending only on time. For continuous v(t), κ(t)≥0 and α(t), define V(t)=∫_0^tv, A(t)=∫_0^tκ and B(t)=∫_0^tα. The multiplier is e^−B(t)e^−iV(t)ξe^−A(t)ξ². Wherever A(t)>0 its inverse uses the heat kernel HA(t); when A(t)=0 the continuous limit is simply translated, damped f. Differentiating the multiplier verifies the PDE directly. This extension uses scalar time dependence, not general variable spatial coefficients.

## 10. An imaginary diffusion coefficient preserves energy

A useful comparison is the complex equation u_t=i u_xx. For Schwartz data its multiplier is e^−itξ², whose modulus is one. Its frequency derivatives have polynomial growth on bounded time intervals, so the product with fhat stays Schwartz. Inversion constructs a classical evolution, and time derivatives are justified by the same polynomial-weight estimates. Parseval gives ||u(t)||2=||f||2 for both positive and negative times.

Thus replacing positive real diffusion by this imaginary coefficient changes Gaussian damping into a phase rotation. The forward evolution is reversible in the completed square norm, whereas reversing real heat evolution was unbounded. This comparison follows directly from the multiplier magnitudes. It does not assert a positive convolution kernel or a maximum principle for the complex equation: complex values have no compatible real order, and a unit-modulus multiplier does not represent positive averaging.

The example is included to clarify what transform algebra can reveal before any kernel is evaluated. A second spatial derivative alone does not imply dissipative smoothing; its coefficient and the time equation determine the evolution. Explicit oscillatory kernels and dispersive decay estimates require additional improper-integral analysis and are outside the claims proved here.

## 11. Quantifying positive-time heat regularity

The same multiplier gives explicit derivative bounds. For m≥1, maximizing r^m e^−κtr² over r≥0 puts the maximum at r²=m/(2κt). Parseval therefore gives

\\[
 \\|\\partial_x^m u(t)\\|_2
 \\le\\left(\\frac{m}{2e\\kappa t}\\right)^{m/2}\\|f\\|_2.
\\]

The bound becomes large near initial time, as expected if the initial norm does not control derivatives. For t>0 it supplies every fixed derivative in square norm. From the kernel scaling Hκt^(m)(x)=(κt)^−(m+1)/2 H1^(m)(x/sqrt(κt)), one also obtains

\\[
 \\|\\partial_x^m u(t)\\|_\\infty
 \\le C_m(\\kappa t)^{-(m+1)/2}\\|f\\|_1,
\\]

where Cm is the finite supremum norm of the mth derivative of H1. These estimates use different initial norms and should not be substituted for one another.

For completed square-norm data, the heat multiplier still defines an evolution by its bounded frequency action. At positive time Cauchy–Schwarz makes ξ^m e^−κtξ²fhat absolutely integrable: its absolute integral is bounded by ||fhat||2 times the square root of ∫ξ^{2m}e^−2κtξ². Hence inverse integration defines continuous spatial derivatives of every order, and the corresponding time derivatives follow from multiplication by further powers of ξ². The resulting positive-time solution is smooth, while its initial recovery is in the completed norm. This argument proves actual regularity rather than inferring it from a schematic statement that high frequencies are damped.

It does not imply Schwartz spatial decay for arbitrary completed data. Frequency damping controls derivatives, but spatial weights correspond to frequency differentiation, which the initial data may not possess. Smoothness, decay and initial trace regularity remain separate conclusions even in this especially favorable model.

## Exercises

### PDE-TRANS-E001 — Symbol sign
Find the symbol of −3u''+2u.
<details><summary>Hint 1</summary>The transform of u'' is −ξ²uhat.</details>
<details><summary>Hint 2</summary>Keep both minus signs.</details>
<details><summary>Full solution</summary>The symbol is 3ξ²+2, which is strictly positive on the real line. Thus division preserves a Schwartz source's class and gives a unique Schwartz solution.</details>

### PDE-TRANS-E002 — Heat mass
Why is the whole-line heat solution's integral preserved for Schwartz data?
<details><summary>Hint 1</summary>Evaluate its transform at zero.</details>
<details><summary>Hint 2</summary>The Gaussian multiplier equals one there.</details>
<details><summary>Full solution</summary>uhat(t,0)=e^0 fhat(0)=∫f. Since u(t) is Schwartz, its zero-frequency transform is its ordinary integral, so ∫u(t)=∫f.</details>

### PDE-TRANS-E003 — Gaussian width
For initial e^−x² and diffusivity two, give the exact solution.
<details><summary>Hint 1</summary>Use a=1 and κ=2.</details>
<details><summary>Hint 2</summary>The denominator is 1+8t.</details>
<details><summary>Full solution</summary>u=(1+8t)^−1/2 exp(−x²/(1+8t)). It begins at the prescribed Gaussian, has conserved integral sqrtπ, and widens at the diffusion scale.</details>

### PDE-TRANS-E004 — Removable wave singularity
Find the value of sin(ctξ)/(cξ) at ξ=0 needed for a continuous multiplier.
<details><summary>Hint 1</summary>Use sinz/z→1.</details>
<details><summary>Hint 2</summary>Factor out t.</details>
<details><summary>Full solution</summary>The value is t. With that extension the multiplier is smooth and its derivative at t=0 is one, as required for the initial velocity term.</details>

### PDE-TRANS-E005 — Right-moving data
For a Schwartz f, find the velocity giving a pure right-moving wave.
<details><summary>Hint 1</summary>Differentiate f(x−ct) in time.</details>
<details><summary>Hint 2</summary>The transform phase should be e^−ictξ.</details>
<details><summary>Full solution</summary>The required velocity is g=−cf'. Then ghat=−ciξfhat and the oscillator combination becomes e^−ictξfhat, whose inverse is f(x−ct).</details>

### PDE-TRANS-E006 — Resolvent bound
For m=2 and ||f||∞≤12, bound the resolvent solution's supremum norm.
<details><summary>Hint 1</summary>The positive kernel has integral 1/m².</details>
<details><summary>Hint 2</summary>Multiply that mass by the source bound.</details>
<details><summary>Full solution</summary>||u||∞≤12/4=3. The estimate applies to the decaying convolution solution and follows directly from its positive kernel.</details>

### PDE-TRANS-E007 — Incompatible Poisson source
Can −u''=e^−x² have a Schwartz solution?
<details><summary>Hint 1</summary>Check the source's zeroth moment.</details>
<details><summary>Hint 2</summary>Its integral is sqrtπ.</details>
<details><summary>Full solution</summary>No. A Schwartz solution would require ∫f=0, but the Gaussian has positive integral sqrtπ. Classical growing solutions exist after two integrations; they lie outside the stated class.</details>

### PDE-TRANS-E008 — A compatible source
For h=e^−x², write a source f making h the Schwartz solution of −u''=f.
<details><summary>Hint 1</summary>Differentiate the Gaussian twice.</details>
<details><summary>Hint 2</summary>The sign is minus that second derivative.</details>
<details><summary>Full solution</summary>f=(2−4x²)e^−x². Its zeroth and first moments vanish by integration by parts, and u=h is the unique Schwartz solution.</details>

### PDE-TRANS-E009 — Real resonances
For −u''−9u=f, state the necessary and sufficient Schwartz compatibility conditions.
<details><summary>Hint 1</summary>Locate the symbol's two real zeros.</details>
<details><summary>Hint 2</summary>They are simple.</details>
<details><summary>Full solution</summary>One needs fhat(3)=fhat(−3)=0. Those conditions make division by ξ²−9 smooth at its two simple zeros, and rapid decrease is preserved away from them. They therefore give the Schwartz inverse.</details>

### PDE-TRANS-E010 — No uniform line gap
Why does concentrating initial frequency energy near zero obstruct one positive heat decay rate for all data?
<details><summary>Hint 1</summary>The multiplier is close to one near zero at any fixed time.</details>
<details><summary>Hint 2</summary>Mass-preserving energy dilation can concentrate there without changing the initial norm.</details>
<details><summary>Full solution</summary>The scaled data sqrt r f(rx) have fixed square norm and transform energy on frequencies of order r. For fixed t their heat norm ratio tends to one as r→0. Any proposed factor e^−γt<1 uniform over all data is contradicted by sufficiently small r.</details>

### PDE-TRANS-E011 — Poisson tails
Why can the harmonic extension of nonnegative Schwartz data fail to remain Schwartz in x?
<details><summary>Hint 1</summary>Its convolution kernel decays only quadratically.</details>
<details><summary>Hint 2</summary>Keep a fixed boundary interval with positive data integral.</details>
<details><summary>Full solution</summary>That interval contributes at least C/x² for large |x|, with C>0 at fixed y>0. Multiplying by |x|³ is then unbounded, so rapid decrease fails. Smoothness and boundedness still hold; the cusp of the frequency multiplier is consistent with the algebraic tail.</details>

### PDE-TRANS-E012 — Class-sensitive uniqueness
Does uniqueness in S prove uniqueness among all growing classical line solutions of an elliptic equation?
<details><summary>Hint 1</summary>Consider homogeneous exponential solutions of −u''+m²u=0.</details>
<details><summary>Hint 2</summary>They are excluded from S but are classical.</details>
<details><summary>Full solution</summary>No. The homogeneous functions Ae^mx+Be^−mx are classical and can be added to a particular solution outside the rapidly decreasing class. The transform uniqueness theorem excludes them through its function-space hypothesis, so changing that hypothesis changes the uniqueness question.</details>

## Sources and scope

This original chapter applies the proved Fourier transform and Schwartz machinery to constant-coefficient classical equations. Evans and Strauss provide the PDE syllabus benchmarks. Source regularity, zero multipliers, boundary geometry and inverse classes are recorded explicitly. General radiation, weak variable-coefficient and rough-data existence theories remain in their dedicated continuations.

## Summary

Fourier symbols turn selected line PDE into scalar frequency equations, but solvability depends on inverse estimates and zeros. Heat damps, waves rotate energy, positive resolvents have bounded inverses, and Poisson equations impose moment compatibility. Half-plane harmonic extension exposes how a bounded multiplier can still lose Schwartz regularity. Transform algebra becomes a classical proof only when the domain, class, reconstruction and uniqueness steps are all supplied.
`;export{e as default};