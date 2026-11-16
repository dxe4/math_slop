var e=`---
parent_id: book-fourier-analysis
chapter_id: poisson-summation-sampling
title: "Poisson Summation and Sampling"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Poisson Summation and Sampling

A lattice in space creates a reciprocal lattice in frequency. Poisson summation makes that statement exact for rapidly decreasing smooth functions. Sampling then becomes a uniqueness question: which frequency support assumptions let a discrete sequence determine a continuous signal? Without such assumptions, distinct smooth signals can have identical samples.

We use fhat(ξ)=∫f(x)e^−ixξdx and inverse factor 1/(2π). A spatial spacing a>0 gives frequency period 2π/a and baseband [−π/a,π/a]. Angular frequency, ordinary frequency and an integer grid index are different quantities. The theorem below fixes their units before invoking a sampling rate.

Preparation is [Schwartz space](schwartz-space-convolution.md), [inversion and Plancherel](inversion-plancherel.md), and [periodic mean-square completeness](mean-square-parseval.md). The initial Poisson theorem is proved on S, where both lattice sums converge absolutely. Extensions to rougher functions need additional hypotheses; pointwise decay alone or a formal periodization does not establish the identity.

## 1. Periodization of a Schwartz function

Fix T>0 and define PTf(x)=Σ_{n∈Z}f(x+nT). On a compact x interval, rapid decrease bounds each derivative of the summand by a constant times (1+|n|)^−M for any chosen M. Taking M>1 gives uniform absolute convergence of the series and all fixed derivative series. Therefore PTf is a smooth T-periodic function, with derivatives found termwise.

Its kth periodic Fourier coefficient is

\\[
 c_k=\\frac1T\\int_0^T\\sum_nf(x+nT)e^{-2\\pi ikx/T}dx
 =\\frac1T\\widehat f(2\\pi k/T).
\\]

Uniform absolute convergence allows the first interchange. Substitution y=x+nT tiles the line, and the exponential is unchanged by an integer-period shift. Its absolute integral is finite, justifying the combined improper integral. The transform is Schwartz, so the coefficient sequence decreases faster than any inverse power. The resulting Fourier series converges uniformly with all fixed derivatives and has exactly these coefficients. Fourier uniqueness for continuous periodic functions identifies its sum with PTf.

We have proved the shifted Poisson identity

\\[
 \\sum_{n\\in\\mathbb Z}f(x+nT)
 =\\frac1T\\sum_{k\\in\\mathbb Z}
 \\widehat f(2\\pi k/T)e^{2\\pi ikx/T}.
\\]

At x=0 this is ordinary Poisson summation. Both sides are absolutely convergent; their equality is not a rule for assigning a sum to arbitrary divergent series.

## 2. A Gaussian reciprocal-lattice identity

**Worked example 10.1: theta symmetry.** Put T=1 and f(x)=e^−πb x², b>0. Its transform is b^−1/2e^−ξ²/(4πb). Poisson summation gives

\\[
 \\sum_{n\\in\\mathbb Z}e^{-\\pi b n^2}
 =b^{-1/2}\\sum_{k\\in\\mathbb Z}e^{-\\pi k^2/b}.
\\]

When b is large the left sum converges rapidly; when b is small the right sum does. The factor b^−1/2 is forced by the Gaussian integral. This is an exact identity for every positive b. It is not derived by replacing a sum with an integral and ignoring a remainder.

At a shifted x, the same calculation relates a periodic train of positive Gaussians to a cosine series with rapidly decreasing coefficients. The spatial periodic profile and the discrete frequency spectrum are two descriptions of one smooth function. This example also checks the reciprocal scale 2π/T under the angular convention.

## 3. Sampling produces spectral replicas

Apply Poisson summation to g(x)=f(x)e^−iξx with spacing a. For each fixed ξ, g belongs to S and ghat(η)=fhat(η+ξ). Hence

\\[
 \\sum_{n\\in\\mathbb Z}f(na)e^{-ina\\xi}
 =\\frac1a\\sum_{k\\in\\mathbb Z}
 \\widehat f(\\xi+2\\pi k/a).
\\]

The left side is the continuous frequency transform of the discrete sample sequence. It is periodic with period 2π/a. The right side displays copies of the original spectrum separated by that same period. The rapidly decreasing samples make the left series uniformly convergent; on a compact frequency interval the Schwartz bounds make the right series uniformly absolutely convergent too.

If the original spectrum lies strictly inside one baseband, the replicas do not overlap there. If it extends beyond that interval, different replicas can contribute to the same observed frequency. This is aliasing. The identity is an exact theorem in the stated class, whereas a finite DFT adds a finite observation window and a finite frequency grid. The two operations should not be conflated.

Multiplying f by e^{2πix/a} leaves all its samples unchanged and shifts its spectrum by 2π/a. Thus sampling cannot distinguish those two generally different Schwartz signals without a support restriction. This is already an injectivity obstruction inside a very smooth rapidly decreasing class.

## 4. A pointwise sampling theorem on a safe subclass

Suppose f∈S and fhat is supported in [−Ω,Ω], with Ω<π/a. Regard fhat as a smooth periodic function on [−π/a,π/a]; it vanishes near the endpoints, so the periodic extension is smooth. Its nth Fourier coefficient is

\\[
 d_n=\\frac a{2\\pi}\\int_{-\\pi/a}^{\\pi/a}
 \\widehat f(\\xi)e^{-ina\\xi}d\\xi=a f(-na).
\\]

The last step is inversion. Reindexing its Fourier series gives fhat(ξ)=aΣ_n f(na)e^−inaξ on this frequency interval. Because f is Schwartz, Σ|f(na)| is finite, so the series converges uniformly absolutely. Invert it termwise over the finite interval to obtain

\\[
 f(x)=\\sum_{n\\in\\mathbb Z}f(na)
 \\operatorname{sinc}\\left(\\frac{x-na}{a}\\right),
 \\qquad \\operatorname{sinc}(z)=\\frac{\\sin(\\pi z)}{\\pi z},
 \\quad\\operatorname{sinc}(0)=1.
\\]

The finite integral producing the nth kernel is a/(2π) times ∫e^{i(x−na)ξ}dξ, which gives exactly the displayed normalized sinc. Its magnitude is at most one, so absolute summability of the samples also makes the reconstruction uniform in x. All fixed derivatives converge uniformly by differentiating the finite-band kernel's integral, whose derivative bound is finite and independent of n.

This theorem proves exact reconstruction, not just interpolation at the grid. At x=ma, the sinc terms vanish except n=m, so interpolation is a useful check. Without the bandlimit, the same grid interpolation property alone would not prove that the reconstructed function equals the original signal between samples.

## 5. Energy and stability of bandlimited sampling

Periodic Parseval applied to the frequency interval gives ∫|fhat|²=2πaΣ|f(na)|². Whole-line Plancherel therefore yields

\\[
 \\|f\\|_2^2=a\\sum_{n\\in\\mathbb Z}|f(na)|^2.
\\]

For this bandlimited class, sample energy and continuous energy agree with an exact factor a. A perturbed square-summable sample sequence reconstructs a baseband signal with square norm sqrt a times its sequence norm. This is an energy stability statement, not a claim that arbitrary bounded sample errors are square summable or have small total energy.

The sinc functions centered at na have squared norm a and are mutually orthogonal. Their frequency transforms are a e^−inaξ times the indicator of the baseband. Orthogonality follows by integrating those exponentials over one frequency period and applying Plancherel. Thus normalized shifted sincs form the coordinate family for the bandlimited space, just as exponentials did on the circle.

**Worked example 10.2: finite sample data.** If the sample sequence is one at n=0 and zero elsewhere, its reconstruction is sinc(x/a). Its square norm is sqrt a, consistent with the energy identity. This function is continuous and square integrable but is not Schwartz: it has only an inverse-first-power envelope. It belongs to the completed bandlimited space developed next. The example also shows that a reconstruction kernel can be useful without belonging to the original rapidly decreasing subclass.

## 6. Extending to the completed bandlimited space

Let B_a be the closed subspace of the Plancherel completion whose frequency elements vanish outside [−π/a,π/a]. The indicator multiplier defines an orthogonal projection, as proved in the inversion chapter. A frequency element in that finite interval is absolutely integrable by Cauchy–Schwarz. Its inverse has a continuous representative, with

\\[
 |f(x)|\\le a^{-1/2}\\|f\\|_2.
\\]

Indeed the inverse absolute integral is bounded by (2π)^−1sqrt(2π/a)||fhat||2, and Plancherel gives the displayed constant. Smooth compactly supported frequency approximations inside the baseband converge in square norm. The same inequality makes their inverse functions converge uniformly, giving a well-defined continuous representative. Their endpoint modifications have no effect in the completed norm.

Sampling is an isometry up to sqrt a on the dense smooth subclass, so it extends continuously into the sequence space ℓ2. The point-evaluation bound makes the extended coordinates equal the actual values of the continuous representative at na. Conversely periodic Fourier completeness of the finite frequency interval gives all ℓ2 sequences through the sinc family. The reconstruction series converges in square norm. Its tails are themselves bandlimited, so the evaluation bound upgrades that norm convergence to uniform convergence as well.

Thus exact sampling and reconstruction hold in this completed baseband space, not merely for the initial Schwartz subclass. Point evaluation was unbounded on unrestricted square-norm functions, but it becomes bounded after a fixed bandlimit. The support restriction supplies the missing control. A pure sine at the Nyquist frequency is not square integrable on the line, so its zero samples do not contradict this completed-space theorem; its absence from the class is essential.

## 7. Missing information without a bandlimit

**Worked example 10.3: a smooth invisible signal.** The function e^−x² sin(πx/a) is nonzero and Schwartz, yet is zero at every sample na. Both it and the zero signal produce exactly the same sequence. No reconstruction procedure can distinguish them from those samples alone. The sampling theorem avoids the obstruction by restricting frequency support, not by using a more elaborate interpolation formula.

A prefilter can enforce a bandlimit. Choose a smooth compactly supported frequency multiplier χ inside the baseband and define g by ghat=χfhat. Then g is Schwartz and is recoverable from its samples. But the recovered function is g, with the filtered-out frequency content removed, rather than the original unrestricted f. If χ equals one only on a smaller pass region, it preserves that portion exactly while changing the rest. The Schwartz chapter explains why a smooth flat-pass compact frequency filter generally has a signed spatial kernel.

A real sampling instrument also has a finite observation window and measurement uncertainty. The exact infinite-sequence theorem supplies one mathematical component, not a certificate that a finite record contains all original information. Truncating the reconstruction, estimating tails and identifying a physical bandlimit are additional tasks. More interpolation points invented from an existing record do not add independent measurements.

## 8. Poisson summation as a quadrature estimate

Set T=a in the ordinary Poisson formula and multiply by a. Then

\\[
 a\\sum_{n\\in\\mathbb Z}f(na)-\\int f
 =\\sum_{k\\ne0}\\widehat f(2\\pi k/a).
\\]

This identifies the infinite uniform-grid quadrature error with nonzero reciprocal-lattice samples. If |fhat(ξ)|≤CM(1+|ξ|)^−M with M>1, its magnitude is at most 2CM(a/(2π))^MΣ_{k≥1}k^−M. Schwartz functions permit every fixed M. Hence the infinite-grid error decreases faster than each fixed power of a as a tends to zero, with constants depending on the corresponding decay seminorm.

A finite sum has another error: omitting |n|>N. If |f(x)|≤Cp(1+|x|)^−p, p>1, monotone integral comparison gives

\\[
 a\\sum_{|n|>N}|f(na)|
 \\le\\frac{2C_p}{p-1}(1+Na)^{1-p}.
\\]

The complete quadrature bound adds reciprocal-lattice alias error and spatial truncation error. Decreasing a while holding N fixed shortens the observed interval Na, so it need not reduce the total error. Both the spacing and the physical window must be recorded. This analytic distinction is useful even when no computation is performed.

The Gaussian identity provides exponentially decaying lattice terms and particularly sharp bounds, but one must still estimate the omitted terms rather than infer a guarantee from a stable printed decimal. Poisson summation explains the structure of the error; a particular numerical budget follows only after bounding the relevant tails.

## 9. Sample perturbations and finite reconstruction

Let εn be a square-summable perturbation of the exact sample sequence. Its sinc reconstruction e has ||e||2=sqrt a||ε||ℓ2, and the bandlimited evaluation bound gives ||e||∞≤||ε||ℓ2. Thus sample noise controlled in sequence energy has both an energy and a uniform effect bound. These estimates are deterministic; no random cancellation is assumed.

If errors of magnitude at most δ occur at M specified sample locations and vanish elsewhere, the sequence norm is at most δsqrt M. One obtains ||e||∞≤δsqrt M and ||e||2≤δsqrt(aM). A uniform error bound at infinitely many samples does not by itself give a finite ℓ2 bound. Constant nonzero errors, for example, are not square summable. The finite-energy sampling theorem cannot silently replace that hypothesis by a different noise model.

Truncating exact samples outside |n|≤N is the same kind of perturbation, with error sequence equal to the omitted tail. This proves both the exact energy tail identity and the uniform bound in the exercise above. On a fixed smaller observation region there is an additional sinc-tail estimate. Put t=x/a and suppose |t|≤R<N. Since |sinc(t−n)|≤1/(π|t−n|),

\\[
 \\sum_{|n|>N}|\\operatorname{sinc}(t-n)|^2
 \\le\\frac{2}{\\pi^2(N-R)}.
\\]

Compare the positive decreasing tail with the integral of (s−R)^−2 from N to infinity. Cauchy–Schwarz then bounds the pointwise omitted reconstruction by the sample-tail norm times sqrt2/(πsqrt(N−R)). This is a local observation-window improvement, not a bound on the unseen sample-tail norm itself. A finite record needs an additional decay or energy assumption to estimate that unknown tail.

The exact norm theorem also clarifies oversampling. A signal supported in a smaller frequency band still lies in the larger baseband associated with a finer spacing, so the formula remains valid. The samples then have redundancy relative to the smaller support model. Their finer spacing does not justify pretending independent measurement errors or averaging them statistically unless a noise model supplies that information.

## 10. Separating missing frequencies from folded frequencies

For a general Schwartz f, its samples are absolutely summable and define a square-summable sequence. Their baseband sinc reconstruction has frequency function

\\[
 R(\\xi)=\\sum_{k\\in\\mathbb Z}\\widehat f(\\xi+2\\pi k/a)
 \\quad (|\\xi|<\\pi/a),
\\]

and zero outside. This follows from the proved sampled-spectrum identity and the sinc frequency coefficients. The sum is uniformly convergent on the baseband. Plancherel gives the exact squared reconstruction error

\\[
 \\frac1{2\\pi}\\int_{|\\xi|<\\pi/a}
 \\left|\\sum_{k\\ne0}\\widehat f(\\xi+2\\pi k/a)\\right|^2d\\xi
 +\\frac1{2\\pi}\\int_{|\\xi|>\\pi/a}|\\widehat f(\\xi)|^2d\\xi.
\\]

The second term is discarded out-of-band energy. The first is extra error folded into the retained band. They occupy disjoint frequency regions and therefore add orthogonally. Merely projecting fhat onto the baseband would have only the second error; sampling before an adequate filter can add the first.

Out-of-band energy alone does not uniformly bound that folded term, because many replicas can reinforce. Choose a nonzero smooth bump φ supported strictly inside half the baseband, and let

\\[
 \\widehat f_M(\\xi)=\\frac1M\\sum_{j=1}^M
 \\phi(\\xi-2\\pi j/a).
\\]

These disjoint bumps all lie outside the baseband. Their total squared frequency norm is ||φ||2²/M, tending to zero. Each fM is Schwartz by inversion. Yet on the baseband all M replicas fold onto φ/M each, giving R=φ exactly. Their sampled reconstructions are therefore the same nonzero baseband function for every M, even though ||fM||2 tends to zero. Equivalently, in space fM is an average of reciprocal-frequency modulations of one fixed Schwartz function, and all those modulations equal one on the sample lattice.

This finite explicit family proves the instability of unrestricted sampling in the square norm. It does not contradict the bandlimited isometry, whose support hypothesis excludes every shifted bump in the construction. It also explains why an anti-aliasing condition must control actual spectral content before the samples are taken; a small global energy number without a support or replica estimate is insufficient.

## Exercises

### FOURIER-SAMP-E001 — Reciprocal period
For spatial spacing a=1/4, what is the frequency period of the sample transform?
<details><summary>Hint 1</summary>Use 2π/a in angular units.</details>
<details><summary>Hint 2</summary>Distinguish it from the baseband half-width.</details>
<details><summary>Full solution</summary>The period is 8π. A standard baseband is [−4π,4π], whose half-width is 4π. Ordinary frequency would divide these angular quantities by 2π.</details>

### FOURIER-SAMP-E002 — Gaussian symmetry
Write the theta identity at b=4.
<details><summary>Hint 1</summary>The prefactor is b^−1/2.</details>
<details><summary>Hint 2</summary>The reciprocal Gaussian parameter is 1/b.</details>
<details><summary>Full solution</summary>Σ_ne^−4πn²=(1/2)Σ_ke^−πk²/4. Both sums are absolutely convergent. Their equality includes all terms, so truncating either side needs a separate tail estimate.</details>

### FOURIER-SAMP-E003 — Sampling condition
For a Schwartz signal with transform supported in [−3,3], give a sufficient spacing condition for the proved strict-band sampling formula.
<details><summary>Hint 1</summary>Require Ω<π/a.</details>
<details><summary>Hint 2</summary>Solve for positive a.</details>
<details><summary>Full solution</summary>It suffices that a<π/3. This is an angular-frequency condition. Replacing three by a cycles-per-unit frequency without converting 2π would give a different and incorrect threshold.</details>

### FOURIER-SAMP-E004 — Sinc samples
Evaluate sinc((ma−na)/a) for integers m,n.
<details><summary>Hint 1</summary>The argument is an integer.</details>
<details><summary>Hint 2</summary>Use the limiting value at zero.</details>
<details><summary>Full solution</summary>It equals one when m=n and zero otherwise. This proves interpolation of the sample sequence, but equality with an original continuous signal additionally needs the theorem's support and space hypotheses.</details>

### FOURIER-SAMP-E005 — Sample energy
If a=1/2 and Σ|f(na)|²=8 for a baseband signal, find its square norm.
<details><summary>Hint 1</summary>The continuous squared norm is a times the sum.</details>
<details><summary>Hint 2</summary>Take the square root last.</details>
<details><summary>Full solution</summary>The squared norm is four and the norm is two. The factor a expresses integration scale and cannot be omitted when changing sampling spacing.</details>

### FOURIER-SAMP-E006 — Invisible Schwartz data
Construct a nonzero Schwartz function vanishing at all integer samples.
<details><summary>Hint 1</summary>Multiply a Gaussian by sinπx.</details>
<details><summary>Hint 2</summary>The sine and all derivatives are bounded.</details>
<details><summary>Full solution</summary>f=e^−x²sinπx is Schwartz by Leibniz's rule and Gaussian decay, vanishes at every integer and is not zero, for example at x=1/2. Sampling without a bandlimit is therefore not injective even on S.</details>

### FOURIER-SAMP-E007 — Modulation alias
Why do f(x) and e^{2πix/a}f(x) have identical samples?
<details><summary>Hint 1</summary>Set x=na.</details>
<details><summary>Hint 2</summary>The phase is an integer multiple of 2π.</details>
<details><summary>Full solution</summary>The multiplier at na is e^{2πin}=1. Their spectra differ by a shift of 2π/a, precisely one reciprocal period, so the sampled spectral replicas agree.</details>

### FOURIER-SAMP-E008 — Point evaluation bound
For a=1/4, bound |f(x)| in terms of ||f||2 on the completed baseband space.
<details><summary>Hint 1</summary>The constant is a^−1/2.</details>
<details><summary>Hint 2</summary>Use the finite frequency interval's length.</details>
<details><summary>Full solution</summary>|f(x)|≤2||f||2. This holds for the continuous representative determined by bandlimited inversion. It does not extend to all unrestricted square-norm functions.</details>

### FOURIER-SAMP-E009 — Fixed window trap
What happens to the physical half-window Na if spacing decreases with N fixed?
<details><summary>Hint 1</summary>N is the number of retained steps from the center.</details>
<details><summary>Hint 2</summary>Multiply it by the new spacing.</details>
<details><summary>Full solution</summary>The window shrinks. The infinite-grid alias error may improve while the omitted spatial tail worsens. A finite quadrature refinement must control both spacing and window rather than reporting only a smaller a.</details>

### FOURIER-SAMP-E010 — Filtering claim
If a prefilter removes frequencies outside a baseband, which function do exact samples reconstruct?
<details><summary>Hint 1</summary>The samples belong to the filtered output.</details>
<details><summary>Hint 2</summary>Removed spectral content is absent from that output.</details>
<details><summary>Full solution</summary>They reconstruct the filtered function g with ghat=χfhat, under the sampling hypotheses. They do not restore the discarded portion of the original f. The support restriction was achieved by changing the signal.</details>

### FOURIER-SAMP-E011 — Smooth periodization
Why can all fixed derivatives be taken termwise in the periodization of a Schwartz function?
<details><summary>Hint 1</summary>Work on one compact period interval.</details>
<details><summary>Hint 2</summary>Each derivative has an arbitrarily summable lattice bound.</details>
<details><summary>Full solution</summary>Rapid decrease gives a uniform bound C(1+|n|)^−M on that interval for any chosen derivative and M>1. The derivative series converges uniformly absolutely. Repeated uniform-derivative convergence therefore proves the claimed smoothness and termwise formulas.</details>

### FOURIER-SAMP-E012 — Orthogonal tail
For a baseband sinc expansion, express the squared error from omitting sample indices outside |n|≤N.
<details><summary>Hint 1</summary>The shifted sincs are orthogonal with squared norm a.</details>
<details><summary>Hint 2</summary>Apply Pythagoras to the omitted coefficients.</details>
<details><summary>Full solution</summary>The squared error is aΣ_{|n|>N}|f(na)|². This is an exact norm identity for the completed bandlimited expansion. The point-evaluation bound also gives a uniform error no larger than the square root of the omitted sequence square sum.</details>

## Sources and scope

This original exposition follows the Stein–Shakarchi/Folland Poisson and sampling syllabus. Absolute convergence proves Poisson summation on S; the sampling extension is stated in the completed baseband space with its continuous representatives. Arbitrary rough periodization, finite-record recovery and noisy inverse guarantees require their own additional hypotheses.

## Summary

Smooth periodization yields Poisson summation and exact reciprocal-lattice aliases. A bandlimit turns sampling into an invertible energy-stable coordinate map with sinc reconstruction, while an explicit invisible Schwartz signal shows why the restriction matters. Infinite-grid quadrature error is a reciprocal tail, and finite records add a spatial tail. Frequency spacing, function class and observation window remain visible in every conclusion.
`;export{e as default};