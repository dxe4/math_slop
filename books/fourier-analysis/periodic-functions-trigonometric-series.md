
# Periodic Functions and Trigonometric Series

A periodic signal repeats in physical space or time. A Fourier expansion describes that repetition with elementary oscillations. Before asking whether an infinite expansion converges, one must specify the period, the frequency unit, the allowed endpoint values and the meaning of a proposed equality. These choices affect every coefficient and every differential equation that follows.

This chapter establishes that language using continuous functions and bounded functions with finitely many smooth pieces. Its integrals are Riemann integrals. Later chapters construct mean-square completion explicitly; no measure-space theorem is needed for the finite calculations here. The objectives are to normalize an arbitrary period, recognize the elementary modes, calculate with finite trigonometric polynomials and justify a useful class of infinite series. The chapter also distinguishes a genuine fundamental period from an arbitrary convenient period.

The Fourier synthesis lab lets you vary finitely many modes and observe phase and amplitude. Its plots illustrate finite identities; the convergence conclusions below come from the stated estimates.

## 1. Periods and the circle

A function f on the real line is T-periodic when T>0 and f(t+T)=f(t) for every real t. A periodic function can be specified on any half-open interval of length T. The values at the two ends of a closed interval must agree if both represent the same point. Writing a function on [0,T] without considering this identification can manufacture a discontinuity at the seam.

For a 2π-periodic function we regard angles differing by an integer multiple of 2π as the same point. This quotient is the circle R/(2πZ). A continuous periodic function on R is exactly a continuous function on this circle. Its supremum is attained because a single closed period interval is compact. Its uniform continuity on the whole line follows from uniform continuity on a slightly longer compact interval and periodicity.

**Proposition 1.1: translation of a period integral.** If f is Riemann integrable on every compact interval and T-periodic, then its integral over [a,a+T] is independent of a.

For 0≤a≤T split the integral at T. Substitute u=t−T in the part from T to T+a, obtaining the integral from zero to a. The two remaining pieces sum to the integral from zero to T. For general a subtract an integer multiple of T. This proof applies to complex functions through their real and imaginary parts. Endpoint values at finitely many points do not affect any of these integrals.

The mean of f is therefore the well-defined number T^−1 times its integral over one period. A mean is a constant component of the signal; it is independent of the origin used to describe a cycle.

## 2. Fundamental periods require hypotheses

If T is a period then every positive integer multiple is also a period. A constant function has every positive real number as a period, so it has no smallest positive period. A discontinuous function can exhibit still stranger behavior: the indicator of the rational numbers has every positive rational period and no smallest positive period. Continuity rules out that example.

**Theorem 1.2.** Every continuous nonconstant periodic function has a smallest positive period T0. Its full set of periods, including negative and zero periods, is T0Z.

Let P={h:f(t+h)=f(t) for all t}. It is an additive subgroup of R: sums and negatives preserve the defining equality. It is closed, because if h_j tends to h, continuity gives f(t+h)=lim f(t+h_j)=f(t). If P contained positive h_j tending to zero, choose for any s,t integers k_j with |k_jh_j−(t−s)|≤h_j/2. Then f(s+k_jh_j)=f(s), while continuity makes the left side tend to f(t). The function would be constant. Thus positive periods are bounded away from zero. Their infimum T0 is positive and belongs to P by closedness. For any h in P, division by T0 gives h=kT0+r with 0≤r<T0. The remainder belongs to P and must be zero by minimality. This proves the assertion.

For a finite trigonometric polynomial a fundamental period is often shorter than the period first written down. If its nonzero frequencies are integers 4 and 6, the polynomial is π-periodic. Whether it has an even shorter period can be decided from independence of the exponential modes. One should not infer fundamental period by inspecting a single summand and ignoring possible cancellations.

## 3. Normalizing physical frequency

For physical period T put θ=2πt/T and g(θ)=f(Tθ/(2π)). Then g is 2π-periodic. The nth angular frequency is nω0 with ω0=2π/T. Ordinary frequency, measured in cycles per unit time, is n/T. A coefficient indexed by n does not itself specify either physical unit.

The elementary complex modes are e_n(θ)=exp(inθ), for integers n. Integer indices are forced by single-valuedness on the circle: exp(iλ(θ+2π))=exp(iλθ) precisely when λ is an integer. On the real line arbitrary real frequencies are allowed; they need not share a common period.

**Worked example 1.3: two frequencies.** The signal cos(6t)+sin(10t) has period π, since both angular frequencies are integer multiples of 2. It has fundamental period π. Indeed, writing it as a finite sum of the four exponentials at frequencies ±6 and ±10, translation invariance forces exp(6ih)=exp(10ih)=1 by linear independence. Thus 6h and 10h are multiples of 2π. Subtracting suitable integer combinations shows 2h is a multiple of 2π, and positive minimal h is π.

By contrast cos(t)+cos(√2t) is not periodic. A period would force h and √2h to be integer multiples of 2π, again by independence of distinct real exponential frequencies. Nonzero integers with ratio √2 do not exist. The independence fact follows, for any finite set of distinct frequencies, by differentiating a purported zero sum at zero and solving the resulting Vandermonde system. The determinant is a product of nonzero frequency differences.

**Worked example 1.4: a physical pulse.** A machine emits a pulse during the first quarter of each cycle of length T. Define f(t)=1 when the representative of t modulo T lies in [0,T/4), and zero otherwise. Its mean is 1/4. In normalized angle it is the indicator of [0,π/2), repeated every 2π. Moving the time origin changes the phase of later coefficients but changes neither the mean nor the pulse width. Values chosen exactly at switching times do not change its Riemann Fourier coefficients; they do matter to a literal pointwise equality at those times.

## 4. Finite polynomials and real notation

A trigonometric polynomial is a finite sum p(θ)=Σ c_n exp(inθ). Its coefficients are unique. Multiply an identity of two such expressions by exp(−imθ) and integrate over a period. Direct integration gives

\[
 \frac1{2\pi}\int_{-\pi}^{\pi}e^{i(n-m)\theta}\,d\theta
 =\begin{cases}1&n=m,\\0&n\ne m.\end{cases}
\]

Thus the integral extracts c_m. This elementary orthogonality is the starting point of the projection chapter; it is already enough to distinguish individual finite modes.

For real-valued polynomials c_−n is the complex conjugate of c_n. Conversely that symmetry makes the sum real. Combining a positive and negative pair gives the real form

\[
 p(\theta)=\frac{a_0}{2}+\sum_{n=1}^{N}
 \bigl(a_n\cos(n\theta)+b_n\sin(n\theta)\bigr),
 \qquad c_n=\frac{a_n-ib_n}{2},\quad c_0=\frac{a_0}{2}.
\]

In this convention the mean is a0/2, not a0. Confusing these two conventions doubles the constant component. An even real function has zero sine integrals because the integrand is odd; an odd real function has zero constant and cosine integrals. Symmetry is often more informative than evaluating every integral separately.

Translations change coefficients predictably. If q(θ)=p(θ−α), its nth coefficient is exp(−inα)c_n. Reflection p(−θ) exchanges the indices n and −n. Complex conjugation sends c_n to the conjugate of c_−n. These are direct finite identities, and they also hold for integral-defined coefficients by substitution.

**Worked example 1.5: phase and amplitude.** Write 3cosθ+4sinθ as Rcos(θ−φ). Comparing terms gives R=5, cosφ=3/5 and sinφ=4/5. Its complex coefficient c1 is (3−4i)/2, with magnitude 5/2 and phase −φ. The factor two reflects the pairing of positive and negative frequency. The signal has amplitude five even though each complex coefficient has magnitude five halves.

## 5. Piecewise regularity and periodic extension

Here “finite-piece C1 periodic” means there is a finite partition of one period on whose open subintervals the function extends C1 to each closed subinterval. One-sided values and one-sided derivatives at the partition points therefore exist and are finite. At a seam or internal division the two one-sided values may differ. Assignments at the finitely many division points are recorded separately. This is stronger than merely differentiable on the open pieces, which permits an unbounded derivative near an endpoint.

This class is bounded and Riemann integrable. A periodic extension of f(θ)=θ from (−π,π) has a jump at the circle point represented by π and −π. The right limit there is −π and the left limit is π. Assigning zero at that point does not remove the jump. The later Dirichlet theorem recovers the average zero there; it does not recover every possible assigned value.

For an even extension from [0,π], reflect f(θ) as f(|θ|) on [−π,π] and repeat. Continuity at zero is automatic if f is continuous there. Continuity at the periodic seam also holds because both seam limits equal f(π). Smoothness is stricter: a differentiable even extension requires f'(0)=0, and a continuously differentiable periodic seam also requires f'(π)=0. For an odd extension continuity requires f(0)=0 and, at the seam, f(π)=0. These endpoint conditions explain why cosine and sine expansions suit different boundary conditions.

**Worked example 1.6: choosing an extension.** The function f(t)=t on [0,π] has a continuous even periodic extension |θ| on [−π,π], with corners at zero and the seam. Its odd periodic extension is the sawtooth θ with a jump at the seam. Both agree with the original data inside (0,π), but their regularity and their expansions differ. Neither extension is a canonical description of the original interval problem until a boundary model is specified.

## 6. Infinite series with a safe convergence hypothesis

A formal trigonometric series is an expression Σ_{n∈Z}c_n exp(inθ). Until a summation procedure is specified this expression is not yet a function. Symmetric partial sums use −N≤n≤N. Other summation orders can matter for conditionally convergent expressions. Fejér means average symmetric partial sums and have different positivity properties.

**Theorem 1.7: absolute coefficient summability.** If Σ|c_n| is finite, the series converges absolutely and uniformly to a continuous periodic function f. Its integral-defined coefficients equal the prescribed c_n.

Every tail is bounded uniformly by the corresponding tail of Σ|c_n|, proving the uniform Cauchy criterion. Each finite sum is continuous and periodic, so its uniform limit has those properties. Multiplying by exp(−imθ) preserves uniform convergence. Integration therefore passes to the limit, and orthogonality leaves precisely c_m. This gives a sufficient construction theorem; continuous functions need not have absolutely summable coefficients.

If additionally Σ|n c_n| is finite, the derivative series converges uniformly. Let g be that limit. Integrate each derivative polynomial from zero to θ; uniform convergence gives f(θ)−f(0)=∫_0^θg(s)ds. Consequently f is C1 and f'=g. This proof supplies the needed differentiation justification rather than differentiating an arbitrary pointwise limit. Repetition yields Ck regularity when Σ|n|^k|c_n| is finite.

Uniform convergence alone permits integration but does not generally permit differentiation. For example sin(Nθ)/N tends uniformly to zero, whereas its derivative cos(Nθ) does not even converge at θ=0 to the derivative of zero. The example is a sequence of polynomials rather than partial sums of a single fixed series; it already disproves the proposed general principle about differentiating uniform limits.

**Worked example 1.8: a geometric harmonic family.** For 0<r<1 the series Σ_{n≥1}r^n cos(nθ) converges uniformly, as do all its termwise derivatives of fixed order. The geometric identity gives its sum as Re[re^{iθ}/(1−re^{iθ})]. Adding one and doubling the cosine terms yields

\[
 1+2\sum_{n\ge1}r^n\cos(n\theta)
 =\frac{1-r^2}{1-2r\cos\theta+r^2}.
\]

The right side is positive and has mean one. For each fixed r it is smooth. The estimates for convergence worsen as r approaches one; therefore smoothness for every r does not authorize an unexamined interchange of the limit r→1 with differentiation or pointwise evaluation. Later approximate-identity arguments describe that limiting concentration.

## 7. Oscillations, differential equations and resonance

The modes diagonalize constant-coefficient differentiation: e_n'=in e_n and −e_n''=n²e_n. This explains why Fourier methods help periodic differential equations. It does not by itself prove that a proposed infinite solution is differentiable. One first solves finite coefficient equations and then supplies convergence strong enough for the required derivatives.

For the finite forced problem −u''+u=p with periodic boundary conditions, set u_n=c_n/(n²+1). The resulting finite polynomial u solves the equation. It is the unique twice continuously differentiable periodic solution: the difference v of two solutions satisfies −v''+v=0, and integration against the conjugate v gives ∫(|v'|²+|v|²)=0 after the periodic boundary term cancels. Hence v=0. If the forcing has absolutely summable coefficients, the same construction has uniformly summable second derivatives because n²/(n²+1)≤1, so it produces a classical solution for that forcing as well.

For −u''=p the zero mode is different. Integrating over a period shows the necessary condition that p have mean zero. For a finite mean-zero forcing the coefficients u_n=c_n/n² for n≠0 solve the equation, and an arbitrary constant remains. This is a first example of a compatibility condition paired with nonuniqueness. A denominator that vanishes should trigger an existence question, not division by zero.

More generally −u''−m²u=p, with positive integer m, requires c_m=c_−m=0: multiply by the corresponding conjugate mode and integrate twice by parts. These are the resonant components. For a finite forcing satisfying the conditions, divide all other coefficients by n²−m² and add an arbitrary combination of cos(mθ), sin(mθ). The algebra records both the obstruction and the freedom in the homogeneous solution.

## Exercises

### FOURIER-PER-E001 — Period integrals
Show that the mean of f(θ)=2+cos(3θ) over [a,a+2π] is two for every a.
<details><summary>Hint 1</summary>Integrate the constant and oscillating terms separately.</details>
<details><summary>Hint 2</summary>The sine primitive has equal values at endpoints separated by 2π.</details>
<details><summary>Full solution</summary>The constant integral is 4π. The remaining integral is [sin(3θ)/3] from a to a+2π, which is zero because its arguments differ by 6π. Division by 2π gives mean two, independently of the origin.</details>

### FOURIER-PER-E002 — Constant periods
Explain why the smallest-positive-period theorem excludes constants.
<details><summary>Hint 1</summary>List the periods of the zero function.</details>
<details><summary>Hint 2</summary>Given any candidate positive minimum, halve it.</details>
<details><summary>Full solution</summary>For a constant f, f(t+h)=f(t) for every real h. Every positive number is a period. If h were a smallest positive period, h/2 would be a smaller positive period, a contradiction. The period group is R rather than a discrete group T0Z.</details>

### FOURIER-PER-E003 — Frequency units
A signal has period 0.02 seconds. Find its fundamental ordinary and angular frequencies and its fifth angular harmonic.
<details><summary>Hint 1</summary>Ordinary frequency is the reciprocal period.</details>
<details><summary>Hint 2</summary>Multiply ordinary frequency by 2π for angular frequency.</details>
<details><summary>Full solution</summary>The fundamental ordinary frequency is 50 cycles per second. The fundamental angular frequency is 100π radians per second, and the fifth angular harmonic is 500π radians per second. The index five is dimensionless; the physical frequency needs the period.</details>

### FOURIER-PER-E004 — Reality condition
Find the real polynomial having c0=1, c1=2+i, c−1=2−i and all other coefficients zero.
<details><summary>Hint 1</summary>Combine the pair with Euler's identities.</details>
<details><summary>Hint 2</summary>Compare c1=(a1−ib1)/2.</details>
<details><summary>Full solution</summary>Here a1=4 and b1=−2, so p(θ)=1+4cosθ−2sinθ. The conjugate relation between the two coefficients makes p real. Its real constant parameter a0 is two, whereas its actual constant value and mean are one.</details>

### FOURIER-PER-E005 — Translation phase
Translate cos(2θ) to cos(2(θ−α)) and find its two complex coefficients.
<details><summary>Hint 1</summary>The original coefficients at ±2 are both one half.</details>
<details><summary>Hint 2</summary>A translation by α multiplies the nth coefficient by e^−inα.</details>
<details><summary>Full solution</summary>The coefficient at two is e^−2iα/2 and that at minus two is e^2iα/2. Their sum against the modes is cos(2θ−2α). In particular a shift α in the input induces phase 2α at frequency two.</details>

### FOURIER-PER-E006 — Even extension
For f(t)=t² on [0,π], identify its even extension and decide whether the periodic extension is C1.
<details><summary>Hint 1</summary>Reflection gives the same square on [−π,π].</details>
<details><summary>Hint 2</summary>Compare derivatives approaching the identified seam from both sides.</details>
<details><summary>Full solution</summary>The even extension is θ² on [−π,π], continuous at the seam because both endpoint values are π². Its left derivative at π is 2π, while its right derivative comes from −π and is −2π. Thus it is continuous and finite-piece C1 but not a C1 function on the circle.</details>

### FOURIER-PER-E007 — Absolute convergence
For c_n=2^−|n|, prove uniform convergence of the two-sided series and identify its mean.
<details><summary>Hint 1</summary>Sum the absolute coefficient bounds.</details>
<details><summary>Hint 2</summary>The mean extracts c0.</details>
<details><summary>Full solution</summary>The absolute sum is 1+2Σ_{n≥1}2^−n=3, so uniform convergence follows from Theorem 1.7. Its continuous periodic limit has precisely these coefficients, and therefore mean c0=1. The positive and negative nonconstant terms all integrate to zero.</details>

### FOURIER-PER-E008 — Differentiability criterion
Suppose |c_n|≤(1+|n|)^−4. Prove that the summed function is C2 using this chapter's criterion.
<details><summary>Hint 1</summary>Estimate |n|²|c_n| by a summable power.</details>
<details><summary>Hint 2</summary>The second derivative series has factors −n².</details>
<details><summary>Full solution</summary>For |n|≥1, |n|²|c_n|≤|n|^−2. Its two-sided sum is finite. The zeroth, first and second derivative series consequently converge uniformly, and the integration argument applied successively identifies their limits as f,f',f''. This proves C2 regularity; the same bound alone does not satisfy the sufficient C3 criterion because the corresponding bound is harmonic.</details>

### FOURIER-PER-E009 — Periodic Poisson equation
Solve −u''=3cos(2θ) among twice continuously differentiable periodic functions.
<details><summary>Hint 1</summary>Differentiate a multiple of cos(2θ) twice.</details>
<details><summary>Hint 2</summary>A homogeneous periodic solution of u''=0 is constant.</details>
<details><summary>Full solution</summary>A particular solution is (3/4)cos(2θ). Every homogeneous solution on the line is Aθ+B; periodicity forces A=0. Thus all periodic solutions are (3/4)cos(2θ)+B. Their arbitrary mean is the undetermined zero mode.</details>

### FOURIER-PER-E010 — An obstruction
Prove that −u''=1 has no twice continuously differentiable 2π-periodic solution.
<details><summary>Hint 1</summary>Integrate the equation over a full period.</details>
<details><summary>Hint 2</summary>The derivative of a differentiable periodic function is periodic.</details>
<details><summary>Full solution</summary>Integration yields −u'(2π)+u'(0)=2π. Differentiating u(θ+2π)=u(θ) gives u'(2π)=u'(0), so the left side is zero, a contradiction. The forcing violates the necessary zero-mean condition.</details>

### FOURIER-PER-E011 — Fundamental period
Prove that cos(4θ)+cos(6θ) has fundamental period π.
<details><summary>Hint 1</summary>Use finite coefficient uniqueness after translation.</details>
<details><summary>Hint 2</summary>If 4h and 6h are multiples of 2π, subtract them.</details>
<details><summary>Full solution</summary>Any period h forces e^4ih=e^6ih=1 because the four nonzero frequencies cannot cancel after translation. Their quotient gives e^2ih=1, hence h is an integer multiple of π. Conversely π is visibly a period of both terms. It is therefore the smallest positive period.</details>

### FOURIER-PER-E012 — Resonant forcing
Determine when −u''−u=A+Bcosθ+Csinθ has a periodic solution and describe all solutions when it does.
<details><summary>Hint 1</summary>The modes cosθ and sinθ belong to the homogeneous equation.</details>
<details><summary>Hint 2</summary>Test the equation against each resonant mode before solving the constant part.</details>
<details><summary>Full solution</summary>Periodic integration by parts against cosθ and sinθ gives respectively Bπ=0 and Cπ=0. Thus B=C=0 is necessary. When these vanish, u=−A solves the constant forcing, and every solution is −A+Dcosθ+Esinθ. These are periodic, and their difference exhausts the two-dimensional homogeneous solution space. The obstruction and nonuniqueness occur at the same pair of frequencies.</details>

## Sources and scope

This is original exposition for the Fourier shelf, with standard first-course Fourier analysis as its mathematical scope. The retained Real Analysis Fourier chapter is a local predecessor, not a substitute for this development. Complex exponentials, elementary Riemann integration and uniform-limit arguments provide all the machinery used here. General integrable functions, almost-everywhere claims and distributional derivatives are reserved for the appropriate later chapters.

## Summary

A Fourier description begins with a period and a normalization. Finite modes have unique coefficients, real symmetry and exact phase rules. Continuous nonconstant periodic functions have fundamental periods, while finite-piece extensions require careful seam conventions. Absolute coefficient bounds justify a useful family of infinite expansions and their derivatives. Periodic differential equations then expose frequency-by-frequency solvability, including compatibility conditions at resonances. The next chapter turns coefficient extraction into an orthogonal approximation theorem.
