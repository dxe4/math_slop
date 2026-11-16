
# Fourier Inversion and Plancherel

The transform's basic rules do not yet reconstruct a function. An inverse formula needs a convergence argument, and a mean-square extension needs completeness and surjectivity. This chapter proves both. A Gaussian factor first makes every frequency integral absolutely manageable; removing it gives exact inversion for rapidly decreasing functions and a useful integrable class. The resulting identity preserves inner products up to the normalization factor, permitting a unitary extension to a completed square-norm space.

The convention remains fhat(ξ)=∫f(x)e^−ixξdx. Its inverse uses (2π)^−1∫fhat(ξ)e^ixξdξ. The normalized transform U=(2π)^−1/2 times the forward transform is the isometry. Writing merely “the transform preserves energy” without stating that factor would be incorrect in this convention.

The principal pointwise class is the Schwartz class S: smooth functions for which every derivative times every nonnegative integer power of |x| is bounded. The next chapter develops its convolution and topology in detail. Only elementary consequences needed here are proved now. The completed Hilbert space is defined explicitly, so the logical argument does not depend on an unproved identification with Lebesgue L2. After Measure and Integration supplies that identification, this is the usual Plancherel transform.

## 1. The rapidly decreasing class is stable under transform

A Schwartz function and each of its derivatives are absolutely integrable, since multiplying by 1+x² makes them bounded. All moments of each derivative are also integrable. The previous chapter's differentiation and integration-by-parts rules therefore apply repeatedly, giving

\[
 \partial_\xi^b\widehat f(\xi)
 =\widehat{(-ix)^bf}(\xi),\qquad
 (i\xi)^a\widehat h(\xi)=\widehat{h^{(a)}}(\xi).
\]

Apply the second identity to h=(−ix)^bf. Its derivative is a finite sum of polynomial multiples of derivatives of f, hence absolutely integrable. The transform bound makes ξ^a∂ξ^b fhat bounded for every a,b. Thus fhat belongs to S. This proof uses the closure of S under polynomial multiplication and differentiation, immediate from the defining bounds, and establishes all needed frequency decay.

In particular both f and fhat are absolutely integrable and square integrable as improper integrals. Their inverse and inner-product integrals below are therefore genuine absolutely convergent integrals. The issue is proving their values, not assigning a formal meaning to an otherwise divergent expression.

## 2. Gaussian-regularized inversion

For ε>0 define

\[
 I_\varepsilon f(x)=\frac1{2\pi}\int
 \widehat f(\xi)e^{-\varepsilon\xi^2}e^{ix\xi}\,d\xi.
\]

Substitute the defining integral for fhat. The absolute double integral is bounded by ||f||1∫e^−εξ²dξ, which is finite. One can interchange integrals by first using compact rectangles and then bounding their omitted tails by the product of the corresponding one-dimensional absolute tails. The Gaussian calculation gives

\[
 \frac1{2\pi}\int e^{-\varepsilon\xi^2}e^{i(x-y)\xi}\,d\xi
 =(4\pi\varepsilon)^{-1/2}e^{-(x-y)^2/(4\varepsilon)}
 =H_\varepsilon(x-y).
\]

Hence Iεf=Hε*f. The previous chapter proves that this tends uniformly to f for a Schwartz function; its derivative estimate even gives error at most 2sqrt(ε/π)||f'||∞. Meanwhile the absolute-integrability of fhat gives

\[
 I_\varepsilon f(x)\longrightarrow
 \frac1{2\pi}\int\widehat f(\xi)e^{ix\xi}\,d\xi
\]

uniformly in x: split the frequency line into a fixed compact interval and a small absolute tail, use uniform convergence of e^−εξ² to one on the compact interval, and bound the tail by twice the absolute transform tail. Equating the two uniform limits proves inversion on S.

Consequently the double transform satisfies fhat-hat(x)=2πf(−x). Reflection and the factor are essential. Applying a forward transform twice is not the identity in the convention used here. This formula also proves that the transform maps S onto S: for h∈S, the function f(x)=(2π)^−1 hhat(−x) belongs to S and has transform h.

## 3. A wider pointwise inversion statement

Suppose f is bounded, absolutely improper-integrable and locally piecewise continuous as in the preceding chapter, and additionally fhat is absolutely integrable. The same Gaussian calculation still gives Iεf=Hε*f, because its absolute double bound is unchanged. At a continuity point x, this convolution tends to f(x).

To prove the last assertion, write Hε*f(x)−f(x)=∫Hε(y)(f(x−y)−f(x))dy. On |y|<δ continuity makes the difference small. On the complement use boundedness and the Gaussian tail, which tends to zero as ε decreases to zero after y=sqrtε z. The inverse frequency integral converges by the same compact/tail argument as before. Therefore the inverse formula recovers f at every continuity point. If f is continuous everywhere, it is recovered everywhere and is uniquely determined by its transform.

Finite reassignment of point values is invisible to the transform, so no claim of pointwise injectivity is made for arbitrary discontinuous representatives. The absolute inverse integral is continuous, and the theorem identifies its values where the original f is continuous. Symmetric inversion at a genuine jump when fhat is not absolutely integrable requires a different convergence theorem; it does not follow from this absolute-integral statement.

This also proves continuous-class uniqueness without requiring fhat∈L1 as an extra assumption when fhat=0: the zero transform is integrable, so the theorem applies. In the measure route, uniqueness for general L1 concerns almost-everywhere equivalence and uses its corresponding approximate-identity theorem.

## 4. Parseval for rapidly decreasing functions

For f,g∈S, substitute the inverse formula for g into ∫f conjugate g. Its absolute double integral is bounded by ||f||1||ghat||1, so the rearrangement is justified. The inner x integral is fhat. Thus

\[
 \int f(x)\overline{g(x)}\,dx
 =\frac1{2\pi}\int
 \widehat f(\xi)\overline{\widehat g(\xi)}\,d\xi.
\]

In particular ||fhat||2=sqrt(2π)||f||2. This is the Parseval identity in our normalization. It is an equality for the full inner product, not just a statement about individual amplitudes. The transform U=(2π)^−1/2 fhat preserves the inner product exactly.

**Worked example 8.1: Gaussian energy.** For f=e^−ax², the physical squared norm is sqrt(π/(2a)). Its transform has squared magnitude (π/a)e^−ξ²/(2a). The integral of that quantity divided by 2π is again sqrt(π/(2a)). Every factor can be checked from the Gaussian integral. Using a symmetric prefactor on the forward transform while retaining the same inverse prefactor would fail this check.

**Worked example 8.2: a derivative.** For f∈S, the derivative rule and Parseval give

\[
 \int|f'(x)|^2dx
 =\frac1{2\pi}\int\xi^2|\widehat f(\xi)|^2d\xi.
\]

Spatial variation is therefore a frequency-weighted energy. It need not be bounded by the unweighted energy: modulating a fixed profile by exp(iKx) moves its frequency mass toward K and can make derivative energy arbitrarily large while preserving its ordinary square norm. This explains why an amplitude-energy estimate alone does not control gradients.

## 5. Completion and the unitary extension

Let H be the Hilbert completion of S in the norm ||f||2²=∫|f|². Its elements are equivalence classes of norm-Cauchy sequences, with two sequences equivalent when their difference tends to zero in norm. The inner product extends by the Cauchy–Schwarz estimate. The same standard diagonal construction used for the periodic completion proves completeness: choose an original S element within 1/n of each member of a Cauchy sequence in the completion and use those approximants to represent its limit.

For an H element represented by fj∈S, Parseval makes Ufj Cauchy. Define Uh to be its completed limit. The isometry identity makes this definition independent of representative and gives ||Uh||H=||h||H. The map is linear, injective and preserves inner products. Its range is closed, because an isometric image of a complete space is complete. Its range contains S, since U maps S onto S. As S is dense in H by construction, the range is all H. Thus U is unitary.

Inversion extends continuously as its inverse on H. The double normalized transform is reflection, first on S and then everywhere by density. This is Plancherel's theorem for the explicitly constructed completion. Calling it the usual Lebesgue L2(R) transform additionally uses the theorem that S is dense in that space and that the integral norm agrees on S. Those measure-theoretic facts identify the two completions; they are not assumptions concealed in this proof.

For a general H element, the frequency transform is an H element, not necessarily an absolutely convergent integral at each ξ. A norm-Cauchy approximation can have poorly behaved individual point values. The extension is defined by norm continuity; writing the original defining integral again without additional integrability does not define the same map automatically.

## 6. Frequency truncation and mean-square reconstruction

For a Schwartz f, form the finite-band inverse

\[
 f_R(x)=\frac1{2\pi}\int_{-R}^R
 \widehat f(\xi)e^{ix\xi}\,d\xi.
\]

The inverse formula already gives uniform convergence fR→f, since the absolute transform tail tends to zero. In H it also converges, with exact squared error

\[
 \|f-f_R\|_H^2
 =\frac1{2\pi}\int_{|\xi|>R}|\widehat f(\xi)|^2d\xi.
\]

To justify using a sharp indicator in H, approximate its product with a Schwartz frequency function by smooth cutoffs that change only on short intervals about ±R. The square-norm difference tends to zero by boundedness on those intervals. This defines the truncation as an H element; inversion by unitary continuity agrees with the displayed integral, using compact frequency integrals and the same approximation. The identity is then Parseval applied to that multiplier.

The sharp frequency multipliers extend as contractions to H, because their norm is at most one on the dense class. They converge strongly to the identity: approximate any H element by an S element, control the two approximation errors by the contraction bound, and let R grow on the S element. Consequently every H element has mean-square recovery by increasing frequency bands. Pointwise or uniform recovery for arbitrary H data is not part of that conclusion.

For S data, substituting fhat and interchanging the finite frequency integral with the absolutely integrable spatial integral gives

\[
 f_R(x)=\int f(y)\frac{\sin(R(x-y))}{\pi(x-y)}\,dy,
\]

with the kernel value R/π at y=x. This kernel changes sign. Unlike Gaussian averaging, sharp band truncation does not preserve the range of real data and can create ringing near transitions. Norm convergence and positivity are different properties of an approximation method.

## 7. A pulse and a nonabsolute inverse

The indicator p of [−1,1] can be approximated by smooth compactly supported functions pj between zero and one, differing only in intervals of total length tending to zero around the two endpoints. Choose each with total variation at most two. Then pj→p both in absolute integral and square norm. Their transforms converge uniformly to 2sinξ/ξ. Integration by parts gives |pjhat(ξ)|≤2/|ξ|, while their absolute-integral bound is uniformly finite. Thus the squared frequency tails have a common O(1/R) bound.

Uniform convergence on compact frequency intervals and this common tail estimate imply convergence in frequency square norm to 2sinξ/ξ. Plancherel therefore identifies this classical transform with the completed transform of the pulse and gives

\[
 \int_{\mathbb R}\left(\frac{\sin\xi}{\xi}\right)^2d\xi=\pi.
\]

This is a third worked example. The transform itself is not absolutely integrable: on a fixed-length subinterval of each half-period, |sinξ| is bounded below, and summing the resulting reciprocal-frequency contributions diverges. Hence the absolute inverse theorem in section 3 does not apply to this pulse. The square-norm theorem does apply. Assignments at the two jump points are invisible in that norm. Recovering their midpoint values by a specified symmetric inverse is a further pointwise statement, just as for periodic Gibbs analysis.

## 8. Which conclusions travel through completion?

A bounded operator identity valid on a dense class extends to the completion. Translation and modulation preserve the square norm on S, so they extend to unitary operators on H. The Fourier phase and frequency-shift rules then extend in the H sense. Convolution by a fixed Schwartz kernel is bounded on H: in frequency space it multiplies by a bounded transform, and Parseval bounds its norm by that transform's supremum. The spatial convolution agrees on S, so this defines its completed extension.

Differentiation is different: its multiplier iξ is unbounded, so it does not extend to every H element as a bounded operator. Its domain can be defined by requiring the frequency-weighted element to have finite square norm, a subject developed with weak derivatives in the later distribution chapter. Similarly evaluation at one point is not bounded. For a fixed smooth bump φ with φ(0)=1, the functions φ((x−x0)/ε) have square norms sqrtε||φ||2 but value one at x0. Therefore no uniform estimate |f(x0)|≤C||f||2 can hold on S, and no continuous point-evaluation map on H extends the classical one.

These examples explain why some integral identities transfer immediately while a pointwise formula or derivative claim needs an additional domain. Completeness guarantees a norm limit, not every possible stronger limit. A proof that ends with “by density” should identify the bounded maps and norms that make that passage valid.

## 9. Compatibility with classical integrable functions

The completion is not a collection of arbitrary pointwise assignments, but its local integral behavior is unambiguous. For every finite interval, restriction has norm at most one from the full square norm to the interval square norm, and therefore extends continuously from S to H. If a sequence converges in H and also uniformly on every compact interval to a continuous function v with finite square integral, its H limit is the element represented by v. On each compact interval the two limits agree in its completed norm. These local restrictions determine an H element uniquely: approximate it by one Schwartz function with a small global error, choose a large interval containing all but a small tail of that approximant, and use the zero local restriction to bound the remaining interior norm. Letting these errors vanish proves uniqueness.

This observation fills a useful detail in the sharp-band construction. Smooth frequency cutoffs converge to the indicator-cut frequency function in square norm. Their inverse integrals converge uniformly on every compact spatial interval to the displayed finite-band inverse, because their frequency differences have compact support and small absolute integral. The local-limit principle identifies that integral with the unitary inverse element. Thus no unjustified point-evaluation continuity is required.

It also identifies the integral transform on a larger class. Let f be bounded, locally piecewise continuous and absolutely integrable. Then it is square integrable, since ∫|f|²≤||f||∞∫|f|. Truncate its tails and smooth its finitely many pieces on each resulting compact interval, choosing the smoothed transitions in short neighborhoods of jumps. One obtains fj∈S tending to f in both absolute integral and square norm. The transforms converge uniformly to the classical integral fhat, while their normalized transforms converge in H by the unitary theorem.

For each finite frequency interval, uniform convergence gives convergence of its square integral. Parseval for fj bounds these integrals by 2π||fj||2². Hence every such interval integral of |fhat|² is bounded by 2π||f||2². Increasing the interval shows that the continuous fhat has finite square integral. A continuous square-integrable function belongs to H: truncate its square tails, then approximate the compact portion by smooth compactly supported functions. The local-limit argument now identifies the integral transform with the completed transform. Therefore Parseval and Plancherel hold for this larger elementary class, even when neither transform inversion integral is absolutely convergent.

The two-norm approximation is a crucial part of that proof. Square-norm approximation alone would not imply uniform convergence of the defining integral transforms, and absolute-integral approximation alone would not supply the unitary norm limit. The pulse construction is a concrete instance where both are available.

## 10. Four exact eigenpatterns of the normalized transform

Let γ(x)=e^−x²/2. The Gaussian calculation gives Uγ=γ. Polynomial multiplication becomes frequency differentiation: U(xf)=i(Uf)' on S. Consequently

\[
 U(x\gamma)=-i\,x\gamma,\qquad
 U((x^2-\tfrac12)\gamma)=-(x^2-\tfrac12)\gamma.
\]

A third differentiation similarly gives

\[
 U((x^3-\tfrac32x)\gamma)
 =i(x^3-\tfrac32x)\gamma.
\]

These four functions exhibit the eigenvalues one, minus i, minus one and i. They are compatible with U to the fourth power being the identity. Distinct eigenvalues here yield orthogonality: if Uf=αf and Ug=βg, unitary inner-product preservation gives <f,g>=α conjugate β<f,g>; if α differs from β on the unit circle, the inner product must be zero. This proves their pairwise orthogonality without evaluating each polynomial Gaussian integral separately.

This calculation does not assert completeness of the entire Hermite family or a spectral expansion theorem for it. It is a finite exact example showing that normalized Fourier transformation is a rotation of information rather than a positive averaging operator. In particular applying it twice reflects odd functions and applying it four times restores every H element. Gaussian smoothing, by contrast, suppresses frequencies and is not unitary for positive time.

## Exercises

### FOURIER-INV-E001 — Inverse constant
State the inverse factor for the negative-forward transform without a prefactor.
<details><summary>Hint 1</summary>Use the Gaussian integral normalization.</details>
<details><summary>Hint 2</summary>The double forward transform has factor 2π.</details>
<details><summary>Full solution</summary>The inverse is f(x)=(2π)^−1∫fhat(ξ)e^ixξdξ in the proven pointwise classes. The normalized unitary forward transform instead has factor (2π)^−1/2.</details>

### FOURIER-INV-E002 — Double transform
Compute the double forward transform of an odd Schwartz function.
<details><summary>Hint 1</summary>It is 2π times reflection.</details>
<details><summary>Hint 2</summary>Oddness makes reflection change sign.</details>
<details><summary>Full solution</summary>The result is −2πf. A double normalized transform U² gives −f for this odd function, not f. Four normalized transforms give the identity.</details>

### FOURIER-INV-E003 — Gaussian regularization
Why can the double integral defining Iε be rearranged?
<details><summary>Hint 1</summary>Take the absolute value before the oscillating factors.</details>
<details><summary>Hint 2</summary>The remaining bound is a product of two finite integrals.</details>
<details><summary>Full solution</summary>Its absolute bound is ∫|f(y)|dy times ∫e^−εξ²dξ, finite for f in the stated integrable class. Compact-rectangle rearrangement followed by the product tail bound therefore justifies the full interchange.</details>

### FOURIER-INV-E004 — Energy normalization
If ||f||2=3, find ||fhat||2 and ||Uf||2.
<details><summary>Hint 1</summary>Use Parseval's factor.</details>
<details><summary>Hint 2</summary>U divides the transform by sqrt(2π).</details>
<details><summary>Full solution</summary>The unnormalized transform norm is 3sqrt(2π), while the normalized transform norm is three. Both statements refer to the completed square norms when a pointwise integral is unavailable.</details>

### FOURIER-INV-E005 — Surjectivity
Why does an isometric extension with dense range have full range here?
<details><summary>Hint 1</summary>The domain H is complete.</details>
<details><summary>Hint 2</summary>An isometric image of a complete space is closed.</details>
<details><summary>Full solution</summary>A convergent sequence in the range has preimages that are Cauchy by isometry, hence have a limit in H whose image is the target limit. The range is therefore closed. It contains the dense class S, so it must equal all H.</details>

### FOURIER-INV-E006 — Tail error
If ∫_{|ξ|>R}|fhat|²≤0.02π, bound the square-norm reconstruction error.
<details><summary>Hint 1</summary>Divide the integral by 2π.</details>
<details><summary>Hint 2</summary>Then take its square root.</details>
<details><summary>Full solution</summary>The squared error is at most 0.01, so the norm error is at most 0.1. This is a mean-square estimate and does not give an error bound at every individual point.</details>

### FOURIER-INV-E007 — Point evaluation
For φε(x)=φ(x/ε), compute its square norm and value at zero when φ(0)=1.
<details><summary>Hint 1</summary>Substitute x=εy in the squared integral.</details>
<details><summary>Hint 2</summary>The norm, rather than its square, has a square-root factor.</details>
<details><summary>Full solution</summary>For ε>0, ||φε||2=sqrtε||φ||2, while φε(0)=1. As ε decreases to zero the norm vanishes but the point value does not, proving evaluation is not bounded in this norm.</details>

### FOURIER-INV-E008 — Derivative domain
Why does Parseval not make differentiation a bounded operator on all H?
<details><summary>Hint 1</summary>The frequency multiplier is iξ.</details>
<details><summary>Hint 2</summary>Translate a fixed frequency profile toward large frequencies.</details>
<details><summary>Full solution</summary>The multiplier has no finite supremum over the frequency line. Modulating a fixed Schwartz function moves its frequency energy outward while leaving its ordinary norm fixed, and its derivative norm grows. Thus no uniform bounded extension of differentiation to all H is possible.</details>

### FOURIER-INV-E009 — Pulse integral
Use the pulse example to evaluate ∫_0^∞(sinξ/ξ)²dξ.
<details><summary>Hint 1</summary>The whole-line integral is π.</details>
<details><summary>Hint 2</summary>The integrand is even.</details>
<details><summary>Full solution</summary>The half-line integral is π/2. Convergence at zero follows from the continuous limiting value one, and convergence at infinity follows from the 1/ξ² bound.</details>

### FOURIER-INV-E010 — Integral uniqueness
Suppose a bounded continuous absolutely integrable f has zero transform. Prove f=0.
<details><summary>Hint 1</summary>Its zero transform is absolutely integrable.</details>
<details><summary>Hint 2</summary>Apply pointwise inversion at every point.</details>
<details><summary>Full solution</summary>The wider inversion theorem applies, and its inverse integral is zero everywhere. Every point of f is a continuity point, so f equals that zero inverse everywhere. The analogous assertion for arbitrarily assigned discontinuous point values would be false.</details>

### FOURIER-INV-E011 — Fixed convolution
For a fixed Schwartz kernel k, bound the completed operator f↦k*f in H.
<details><summary>Hint 1</summary>Its frequency action is multiplication by khat.</details>
<details><summary>Hint 2</summary>Apply the supremum multiplier bound.</details>
<details><summary>Full solution</summary>||k*f||H≤||khat||∞||f||H. On S this follows from convolution and Parseval; the bound extends the operator to H. The elementary transform estimate further gives ||khat||∞≤||k||1.</details>

### FOURIER-INV-E012 — Limits and representatives
Does H convergence of inverse band truncations determine the value at an isolated jump point?
<details><summary>Hint 1</summary>A point reassignment has zero square integral.</details>
<details><summary>Hint 2</summary>Norm convergence concerns an equivalence class, not an evaluation map.</details>
<details><summary>Full solution</summary>No. The completed norm does not distinguish isolated point values, and evaluation is not a bounded operation on H. A midpoint value at a jump requires an additional pointwise convergence theorem for the chosen truncation procedure, with appropriate local hypotheses.</details>

## Sources and scope

The retained [Functions and Equations Fourier reading](../functions-equations-proof/chapter-13.md) is a local predecessor for series, transform and inversion topics. Its forward exponent is −2πixν, whereas this book uses −ixξ. The conventions agree under ξ=2πν: its transform is fhat(2πν), its inverse has no prefactor in dν, and its unitary norm identity uses the corresponding frequency Jacobian. The old source and its identities remain intact; this expanded chapter supplies the proofs and exact scope rather than copying or silently renormalizing that reading.

This is original exposition of Gaussian-regularized inversion and the completion proof of Plancherel, following the standard Stein–Shakarchi/Folland syllabus. All inverse normalizations and function classes are explicit. Lebesgue-space identification, almost-everywhere convergence of sharp truncations and weak derivative domains require their named additional theory.

## Summary

Gaussian regularization turns the inverse problem into positive spatial averaging, proving reconstruction and continuous-class uniqueness. Parseval makes the normalized transform an isometry, and onto behavior on Schwartz functions makes its completed extension unitary. Band truncations recover every completed element in square norm, while pulse and bump examples separate that conclusion from absolute inversion, pointwise recovery and differentiation. Density transfers bounded identities only in their stated norms.
