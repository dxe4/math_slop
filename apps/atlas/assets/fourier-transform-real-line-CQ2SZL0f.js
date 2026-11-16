var e=`---
parent_id: book-fourier-analysis
chapter_id: fourier-transform-real-line
title: "The Fourier Transform on the Real Line"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# The Fourier Transform on the Real Line

A periodic expansion uses integer modes because the circle identifies angles separated by one period. A function on the whole line has no imposed period, so its natural frequency variable is continuous. The Fourier transform extracts its oscillatory integral at each real frequency. The resulting integral identities resemble coefficient algebra, but convergence at infinity and normalization now require their own attention.

Our convention is

\\[
 \\widehat f(\\xi)=\\int_{\\mathbb R}f(x)e^{-ix\\xi}\\,dx.
\\]

The negative sign is in the forward transform, which has no prefactor. The inverse, proved in the next chapter under stated hypotheses, has positive sign and factor 1/(2π). Ordinary cycles-per-unit frequency is ξ/(2π); ξ itself is angular frequency. The finite DFT chapter uses the corresponding negative-forward, unscaled convention but has a discrete inverse factor 1/N.

The elementary route here uses bounded functions continuous except at finitely many points on each compact interval, Riemann integrable there, with finite absolute improper integral. In proofs of approximation we restrict to functions with the stated piecewise regularity. This includes smooth rapidly decreasing functions and all the worked signals. The measure route extends the definition to Lebesgue L1 functions using its convergence theorems. We do not infer almost-everywhere assertions or Lebesgue Fubini solely from an improper integral calculation. The transform's injectivity and inverse formula are established later, not assumed while deriving its basic bounds.

## 1. Existence and uniform continuity

Absolute integrability gives existence at every frequency and the bound |fhat(ξ)|≤||f||1, where ||f||1=∫|f|. The tails outside [−R,R] are bounded uniformly in ξ by ∫_{|x|>R}|f|, so compact-interval transforms converge uniformly to fhat. Since each compact transform is continuous, fhat is continuous.

There is also direct uniform continuity. For an increment h,

\\[
 |\\widehat f(\\xi+h)-\\widehat f(\\xi)|
 \\le\\int|f(x)|\\min(2,|hx|)\\,dx.
\\]

Split the line into |x|≤R and its complement. The first part is at most |h|R||f||1; the second at most twice the absolute tail. First choose R to make that tail small and then h to control the finite part. Neither choice depends on ξ. Thus fhat is uniformly continuous on the whole frequency line.

The estimate is stable: ||fhat−ghat||∞≤||f−g||1. An error small in absolute integral gives a uniformly small transform error. A small pointwise error on an infinite interval need not have small absolute integral, so those norms cannot be interchanged casually.

## 2. Decay at high frequency

**Theorem 7.1: Riemann–Lebesgue decay in the elementary class.** Under the integrability and local piecewise regularity above, fhat(ξ) tends to zero as |ξ| tends to infinity.

First truncate f to a large compact interval, making the absolute tail small. On that interval, Riemann integrability lets one approximate f in absolute integral by a finite step function. For a complex function do this for real and imaginary parts; Darboux upper/lower sums, or uniform approximation on its continuous pieces with short intervals around jumps, provide the required estimate. The transform bound makes both approximation errors uniformly small in ξ.

For the indicator of [a,b], direct integration at ξ≠0 gives (e^−iaξ−e^−ibξ)/(iξ), which tends to zero. Every finite step combination therefore has transform tending to zero. The uniform approximation estimate transfers this decay to f. The proof gives no universal decay rate for all integrable functions: its step approximation can require finer and finer structure depending on f.

Smoothness gives quantitative decay when integration by parts is justified. Suppose f∈C1, both f and f' have finite absolute integrals. Since f' is absolutely integrable, f has finite limits at both infinities by the integral Cauchy criterion. Integrability of f forces both limits to be zero. Integrating by parts on [−R,R] and passing to infinity yields

\\[
 \\widehat{f'}(\\xi)=i\\xi\\widehat f(\\xi).
\\]

Thus |fhat(ξ)|≤||f'||1/|ξ| when ξ≠0. Repeating under the corresponding derivative and endpoint hypotheses gives higher inverse-power bounds. A corner or jump can contribute boundary terms and change that rate; one must not apply a smooth whole-line formula across a discontinuity without including them.

## 3. Translation, modulation, reflection and scale

For a translation τaf(x)=f(x−a), substitution gives its transform e^−iaξfhat(ξ). A spatial shift changes phase, not transform magnitude. Multiplication by exp(ibx) shifts frequency: the transform is fhat(ξ−b). For reflection f(−x), it is fhat(−ξ). For conjugation it is the conjugate of fhat(−ξ). In particular a real f has conjugate-symmetric transform, and a real even f has a real even transform.

For a nonzero real a, set fa(x)=f(ax). Changing variables, including reversed orientation when a<0, gives

\\[
 \\widehat{f_a}(\\xi)=\\frac1{|a|}\\widehat f(\\xi/a).
\\]

A narrow spatial profile therefore has a wider frequency profile. If one instead uses the mass-preserving dilation |a|f(ax), the prefactor disappears. These two scaling conventions answer different questions: preserving height and preserving total integral are not the same normalization.

**Worked example 7.2: a rectangular pulse.** For f the indicator of [−A,A], A>0,

\\[
 \\widehat f(\\xi)=\\frac{2\\sin(A\\xi)}\\xi,
 \\qquad \\widehat f(0)=2A.
\\]

The value at zero follows either by continuity or by integrating f. A shifted pulse centered at a has an additional phase e^−iaξ. Its transform changes sign, showing that a nonnegative spatial function need not have a nonnegative transform. The 1/|ξ| envelope reflects its jumps; the transform is not absolutely integrable merely because f is.

## 4. Moments and frequency derivatives

If xf(x) has finite absolute integral, difference quotients and a finite/tail split justify

\\[
 \\frac d{d\\xi}\\widehat f(\\xi)
 =-i\\int xf(x)e^{-ix\\xi}\\,dx.
\\]

For completeness, the difference quotient of the exponential is bounded by |x|. On a compact spatial interval it converges uniformly to its derivative, while on the tail its integral is controlled uniformly by the absolute tail of |xf|. This proves differentiation without an unnamed convergence theorem. Higher finite moments give higher continuous frequency derivatives in exactly the same way.

At zero, fhat(0)=∫f, fhat'(0)=−i∫xf and fhat''(0)=−∫x²f when the moments exist. For a nonnegative function of integral one, the first two moments therefore appear as derivatives of its transform. The interpretation connects with probability, but the present identities are ordinary integration formulas. Vanishing moments force derivatives at zero to vanish and are useful in constructing filters that suppress low frequencies.

Spatial smoothness and spatial moments control different aspects of the transform. Integrable derivatives make the transform decay at infinity; integrable moments make it differentiable in frequency. One condition does not automatically provide the other. A compactly supported function with jumps has all moments but may have only inverse-first-power transform decay.

## 5. The Gaussian calculation

The Gaussian integral is ∫e^−x²/2dx=sqrt(2π). To verify its constant, square the positive integral over increasingly large squares, use polar coordinates to squeeze between disk integrals, and evaluate ∫_0^∞e^−r²/2r dr=1. The resulting plane integral is 2π, so the positive one-dimensional integral has the stated value.

Let F(ξ) be the transform of e^−x²/2. Its moments and derivatives are absolutely integrable, so differentiation and integration by parts apply. Since f'=−xf,

\\[
 F'(\\xi)=-i\\int xf(x)e^{-ix\\xi}dx
 =i\\widehat{f'}(\\xi)=-\\xi F(\\xi).
\\]

With F(0)=sqrt(2π), the scalar ODE gives F(ξ)=sqrt(2π)e^−ξ²/2. Scaling yields

\\[
 \\widehat{e^{-ax^2}}(\\xi)
 =\\sqrt{\\frac\\pi a}\\,e^{-\\xi^2/(4a)},\\qquad a>0.
\\]

**Worked example 7.3: the heat kernel.** For t>0, Ht(x)=(4πt)^−1/2e^−x²/(4t) has transform e^−tξ². Its integral is one. The widening spatial scale sqrt t corresponds to a narrowing frequency width 1/sqrt t. The heat equation's frequency multiplier is therefore a Gaussian damping factor, consistent with the earlier periodic factor e^−κn²t after rescaling frequency and diffusivity.

**Worked example 7.4: an exponential profile.** For a>0, f(x)=e^−a|x| has transform 1/(a+iξ)+1/(a−iξ)=2a/(a²+ξ²), obtained by integrating on the two half-lines. This decays quadratically even though f has a corner at zero. The first integration by parts is legitimate after accounting for its two pieces; a second whole-line smooth-derivative argument would need the derivative jump. The explicit answer is a reliable check on that distinction.

## 6. Convolution in a safely justified subclass

For smooth rapidly decreasing f,g, define (f*g)(x)=∫f(x−y)g(y)dy. “Rapidly decreasing” here means every derivative multiplied by every fixed nonnegative power of |x| is bounded. The next chapter devoted to Schwartz space develops this class systematically. All the integrals and double integrals below have absolute bounds from these decay estimates.

Changing variables x=z+y in the transform integral gives

\\[
 \\widehat{f*g}(\\xi)
 =\\int\\!\\int f(z)g(y)e^{-i(z+y)\\xi}\\,dz\\,dy
 =\\widehat f(\\xi)\\widehat g(\\xi).
\\]

One may justify the rearrangement first on compact rectangles, then use the product absolute bound |f(z)g(y)| and its integrable tails to pass to the full plane. The invertible linear substitution has Jacobian one. This proves the convolution theorem in this subclass without asserting that every convolution of two improper-integrable functions is defined pointwise everywhere. The more general Lebesgue L1 theorem uses its own almost-everywhere statement.

For Gaussians, completing the square gives Hs*Ht=H(s+t). The integral is again Gaussian, and the constants multiply to (4π(s+t))^−1/2. The transform product e^−sξ²e^−tξ² agrees. At this stage the direct integral proves the convolution identity; the agreement of transforms is a check, since injectivity is not yet being used.

The common inequality ||f*g||1≤||f||1||g||1 follows in this rapidly decreasing setting by the same absolute double-integral calculation. Also ||f*g||∞≤||f||∞||g||1. These bounds extend constructions by approximation once the function spaces and their completeness have been supplied. An extension is a further argument, not an automatic consequence of the formal symbol *.

## 7. From a long period to a frequency continuum

Suppose f is continuous and supported in a fixed compact interval. For a sufficiently large period T, place that support strictly inside (−T/2,T/2) and extend periodically. Its nth periodic coefficient is

\\[
 c_n(T)=\\frac1T\\widehat f(2\\pi n/T).
\\]

The frequency spacing is Δξ=2π/T, so c_n=(Δξ/(2π))fhat(ξn). A periodic synthesis sum therefore resembles the Riemann sum for an inverse integral as T tends to infinity. This explains the inverse factor 1/(2π) geometrically. It does not prove inversion: the number of terms, convergence of periodic sums and infinite-frequency tails all change together and need estimates. The next chapter supplies a Gaussian-regularized proof rather than exchanging those limits without control.

In particular a finite sampled vector, a periodic function and a whole-line signal are three different objects. Their forward transforms share exponential algebra, but their inverse normalizations and convergence hypotheses reflect different domains. Sampling a nonperiodic signal in a finite window also introduces truncation and periodization. The exact finite DFT theorem alone does not guarantee recovery of the original continuous signal.

## 8. Jumps, corners and exact high-frequency terms

A finite jump contributes an explicit leading frequency term. Suppose f has compact support, is C1 on finitely many closed pieces up to their one-sided limits, and has jumps Jj=f(aj+)−f(aj−). Include jumps to zero at the ends of the support. Integration by parts on every open piece gives

\\[
 i\\xi\\widehat f(\\xi)
 =\\widehat{f'_{\\mathrm{piece}}}(\\xi)
 +\\sum_jJ_je^{-ia_j\\xi}.
\\]

At an internal endpoint the boundary terms from its adjacent pieces combine to the negative of the jump in the integral of the derivative; moving that term to the other side produces the displayed positive sign. The derivative on the pieces is integrable. Its transform tends to zero, so ξfhat has a finite oscillatory leading term given by the jumps, up to an error tending to zero. There need not be a limit for ξfhat, because different jumps carry different phases.

For the rectangular pulse, the jumps are plus one at −A and minus one at A. Their contribution is (e^iAξ−e^−iAξ)/(iξ), exactly its transform. No piecewise derivative remains. This recovers the earlier result and checks the sign in the general formula.

For e^−a|x|, there is no value jump, but the derivative jumps by −2a at zero. The same integration calculation applies on the two infinite pieces because all endpoint tails vanish exponentially. On each piece the second derivative is a²f. Thus iξ times the transform of the piecewise first derivative equals a²fhat−2a. Since the first derivative transform is iξfhat, this gives (ξ²+a²)fhat=2a, reproducing the exact rational transform. A corner has supplied a second-order frequency denominator. Repeating this reasoning for higher derivative jumps explains many algebraic decay formulas, provided every integration by parts and tail condition is actually available.

## 9. Autocorrelation and frequency positivity

For a smooth rapidly decreasing complex f define its autocorrelation r(t)=∫f(x+t)conjugate f(x)dx. The absolute decay estimates justify its transform's double integral. Substitute z=x+t to obtain

\\[
 \\widehat r(\\xi)
 =\\left(\\int f(z)e^{-iz\\xi}dz\\right)
 \\left(\\int\\overline{f(x)}e^{ix\\xi}dx\\right)
 =|\\widehat f(\\xi)|^2.
\\]

This is a direct transform identity; it does not depend on Parseval. Also r(0)=∫|f|², r(−t)=conjugate r(t), and Cauchy–Schwarz gives |r(t)|≤r(0). Translating the variable in a square integral preserves its value, which supplies the equal norms in that estimate.

For any finite complex numbers αj and shifts tj,

\\[
 \\sum_{j,k}\\alpha_j\\overline{\\alpha_k}r(t_j-t_k)
 =\\int\\left|\\sum_j\\alpha_jf(x+t_j)\\right|^2dx\\ge0.
\\]

This is positive definiteness, an inequality for every finite set of translates. It is different from pointwise nonnegativity of r. The transform is nonnegative because r has this particular autocorrelation construction. The earlier nonnegative rectangular pulse shows why pointwise positivity alone would not have been enough.

For f(x)=e^−ax², completing the square gives r(t)=sqrt(π/(2a))e^−at²/2. Its transform is (π/a)e^−ξ²/(2a), exactly the squared magnitude of fhat. The constants offer another check on the chosen angular-frequency convention. Autocorrelation is useful when phase information is unavailable: its transform retains squared frequency magnitudes, while losing the phase of the original f. Distinct translated signals have the same autocorrelation, so recovering f from this magnitude data alone is a different and generally ambiguous problem.

## 10. Point values and what an integral can recover

An integral ignores changing a function at finitely many points. For example let f be zero except that f(0)=1. It is bounded, Riemann integrable on compact intervals and has absolute integral zero. Its transform is zero at every frequency, although the literal pointwise function is not identically zero. Thus a whole-line transform cannot be injective on arbitrary assigned point values in the piecewise class. The absolute-integral quantity is a seminorm on those pointwise functions; it becomes a norm after identifying functions whose difference has zero absolute integral.

For continuous functions, zero absolute-integral difference forces equality everywhere, because a nonzero continuous difference would remain nonzero on an interval of positive length. Accordingly the next chapter's continuous-function injectivity statement is a meaningful pointwise conclusion. For more general integrable functions the correct assertion concerns an equivalence class, or recovery at points where the stated inversion theorem applies. At a jump, a symmetric inversion procedure can select an average of one-sided limits, just as a periodic Fourier series does; this requires its own convergence theorem.

These distinctions are not cosmetic. A detector measuring integrals cannot determine an isolated reassignment of one point, while a classical differential equation can depend on differentiability at every point. The intended function class and solution notion therefore accompany any statement that a transform “determines the signal.” In what follows, continuous rapidly decreasing representatives provide a particularly safe class for exact inversion, before completion extends the transform to mean-square data.

## 11. Gaussian averaging approaches the original function

For a smooth rapidly decreasing f, convolution with Ht approaches f both uniformly and in absolute integral. The fundamental theorem gives |f(x−y)−f(x)|≤|y|||f'||∞. Integrating this against the positive unit-mass Ht and evaluating its first absolute moment gives

\\[
 \\|H_t*f-f\\|_\\infty
 \\le2\\sqrt{t/\\pi}\\,\\|f'\\|_\\infty.
\\]

The moment calculation is direct: twice the integral from zero to infinity of y(4πt)^−1/2e^−y²/(4t) equals 2sqrt(t/π). The derivative bound is convenient, not a necessary hypothesis for approximate-identity convergence.

The analogous absolute-integral estimate follows from ||f(·−y)−f||1≤|y|||f'||1. To prove that inequality, express the difference as an integral of f' along a segment of length |y|, take absolute values and integrate in x; the translation leaves the absolute integral of f' unchanged. In this rapidly decreasing class every relevant iterated integral has the absolute bound |y|||f'||1, so the rearrangement is justified. Consequently

\\[
 \\|H_t*f-f\\|_1
 \\le2\\sqrt{t/\\pi}\\,\\|f'\\|_1.
\\]

Thus the averaging operator tends to the identity with an explicit estimate in two different norms. For a fixed positive t it suppresses high frequencies by e^−tξ²; as t decreases to zero the suppression disappears, but the norm estimates keep the recovery controlled for this class. This is the mechanism behind Gaussian-regularized inversion in the next chapter.

The limits t→0 and |ξ|→∞ should still be distinguished. For every t>0 the multiplier tends to zero at high frequency, whereas for every fixed ξ it tends to one as t→0. No uniform convergence of the multiplier to one over the whole frequency line occurs. The approximation theorem works because it is applied to a specified function with controlled tails, not because those two limits are interchangeable.

## Transferred measure-based companion

The following original sections have moved from the Real Analysis Fourier continuation. Their Lebesgue L2 and null-equivalence formulation assumes the measure and density inputs stated in the retained text; the main elementary/completion proofs above retain their own preparation. Original section numbers are preserved.

## 13. Fourier transform preview

On the real line, periodic discrete frequencies are replaced by a continuous frequency variable:

\\(\\widehat{f}(\\xi)=\\int _R f(x)e^{-\\mathrm{i}\\xi x}dx\\).

Translation becomes phase multiplication, differentiation becomes multiplication by \\(\\mathrm{i}\\xi\\), and convolution becomes multiplication of transforms under appropriate hypotheses. With the displayed forward transform and inverse factor \\(1/(2\\pi)\\), Plancherel states

\\(\\int _R|\\widehat{f}(\\xi)|^2d\\xi=2\\pi\\int _R|f(x)|^2dx\\).

Thus the transform is unitary from \\(L^2(dx)\\) to \\(L^2(d\\xi/(2\\pi))\\), or equivalently becomes unitary on the usual unweighted \\(L^2\\) spaces after placing a factor \\(1/\\sqrt{2\\pi}\\) in the transform. Saying merely “unitary” without naming the measures would hide a normalization error.

The same audit persists: pointwise formulas, \\(L^2\\) identities, and inversion theorems have different hypotheses.

Transform normalizations vary: factors of \\(2\\pi\\) may appear in the forward transform, inverse transform, or symmetrically in both. With the convention above, the formal inverse carries \\(1/(2\\pi)\\). Plancherel is first proved on a convenient dense class and then extended continuously to \\(L^2\\). For a general \\(L^2\\) function, the displayed integral need not converge absolutely at every frequency; the extended transform is an \\(L^2\\) object, not automatically a pointwise integral formula.

## Exercises

### FOURIER-LINE-E001 — Zero frequency
Find the transform at zero of the indicator of [a,b].
<details><summary>Hint 1</summary>The exponential is one at zero.</details>
<details><summary>Hint 2</summary>Integrate the signal itself.</details>
<details><summary>Full solution</summary>The value is b−a. This is its total integral, independent of the interval's center. The center contributes only a frequency-dependent phase away from zero.</details>

### FOURIER-LINE-E002 — Transform stability
If ||f−g||1≤0.01, give a uniform bound for their transform difference.
<details><summary>Hint 1</summary>Use the absolute integral bound.</details>
<details><summary>Hint 2</summary>The exponential has magnitude one.</details>
<details><summary>Full solution</summary>For every ξ, |fhat(ξ)−ghat(ξ)|≤∫|f−g|≤0.01. Hence the supremum frequency error has the same bound, with no restriction on ξ.</details>

### FOURIER-LINE-E003 — Translation
Find the transform of e^−(x−a)².
<details><summary>Hint 1</summary>Start from the Gaussian with parameter one.</details>
<details><summary>Hint 2</summary>Translate by a in physical space.</details>
<details><summary>Full solution</summary>The result is e^−iaξsqrtπ e^−ξ²/4. Its magnitude is unchanged by translation, while its phase varies linearly with frequency.</details>

### FOURIER-LINE-E004 — Modulation
Find the transform of e^ibx e^−x²/2.
<details><summary>Hint 1</summary>Combine the two exponential frequency factors.</details>
<details><summary>Hint 2</summary>The center shifts from zero to b.</details>
<details><summary>Full solution</summary>The transform is sqrt(2π)e^−(ξ−b)²/2. Multiplication by a complex oscillation translates the Gaussian frequency profile rather than translating the spatial envelope.</details>

### FOURIER-LINE-E005 — Scaling
Express the transform of 3f(3x) in terms of fhat.
<details><summary>Hint 1</summary>The factor from the variable substitution cancels the three.</details>
<details><summary>Hint 2</summary>The frequency argument is divided by three.</details>
<details><summary>Full solution</summary>It is fhat(ξ/3). The dilation preserves total integral, narrows the spatial scale by three and widens the frequency scale by three.</details>

### FOURIER-LINE-E006 — A moment
For the normalized Gaussian Ht, calculate its second moment from its transform.
<details><summary>Hint 1</summary>Differentiate e^−tξ² twice at zero.</details>
<details><summary>Hint 2</summary>The second transform derivative is minus the second moment.</details>
<details><summary>Full solution</summary>The second derivative at zero is −2t, so ∫x²Ht(x)dx=2t. Its mean is zero by evenness. This is the spatial variance of the unit-mass Gaussian.</details>

### FOURIER-LINE-E007 — Derivative decay
Under the chapter's integration-by-parts hypotheses with ||f'||1≤7, bound |fhat(ξ)| for ξ≠0.
<details><summary>Hint 1</summary>Use iξfhat=fprimehat.</details>
<details><summary>Hint 2</summary>Bound the transform of f' by its absolute integral.</details>
<details><summary>Full solution</summary>One obtains |fhat(ξ)|≤7/|ξ|. The zero-frequency value needs the separate bound ||f||1; the inverse-power estimate has no finite content there.</details>

### FOURIER-LINE-E008 — Positive does not imply positive
Give a nonnegative integrable signal whose transform takes negative values.
<details><summary>Hint 1</summary>Use a symmetric rectangular pulse.</details>
<details><summary>Hint 2</summary>Choose a frequency where its sine is negative.</details>
<details><summary>Full solution</summary>For f=1 on [−1,1] and zero elsewhere, fhat=2sinξ/ξ. At ξ=3π/2 this is negative. Spatial positivity alone therefore does not imply frequency positivity.</details>

### FOURIER-LINE-E009 — Heat composition
Prove Hs*Ht=H(s+t) by completing a square.
<details><summary>Hint 1</summary>Combine (x−y)²/(4s)+y²/(4t).</details>
<details><summary>Hint 2</summary>The remaining x term is x²/(4(s+t)).</details>
<details><summary>Full solution</summary>The combined exponent is (s+t)(y−tx/(s+t))²/(4st)+x²/(4(s+t)). The Gaussian y integral is sqrt(4πst/(s+t)). Multiplying by the original factors gives (4π(s+t))^−1/2e^−x²/(4(s+t)), as required.</details>

### FOURIER-LINE-E010 — Conjugate symmetry
If f is real, relate fhat(−ξ) to fhat(ξ).
<details><summary>Hint 1</summary>Conjugate the defining integral.</details>
<details><summary>Hint 2</summary>Conjugation changes the exponential's sign.</details>
<details><summary>Full solution</summary>One has fhat(−ξ)=conjugate fhat(ξ). If f is also even, reflection leaves the transform unchanged, so this conjugate equality forces the transform to be real and even.</details>

### FOURIER-LINE-E011 — Frequency grid
A compactly supported signal is periodized with period T. What are its coefficient sample locations and prefactor?
<details><summary>Hint 1</summary>The angular grid spacing is 2π/T.</details>
<details><summary>Hint 2</summary>Use the integral over one full period containing the support.</details>
<details><summary>Full solution</summary>The nth coefficient is T^−1 fhat(2πn/T). Thus the sample spacing is 2π/T and the coefficient prefactor is its spacing divided by 2π. This is an exact coefficient identity, not yet an inversion-limit theorem.</details>

### FOURIER-LINE-E012 — What is still missing?
Why do decay, continuity and the convolution theorem not yet prove that f is determined by fhat?
<details><summary>Hint 1</summary>None of those assertions rules out a nonzero function in the transform kernel.</details>
<details><summary>Hint 2</summary>One needs inversion, uniqueness or an equivalent density argument.</details>
<details><summary>Full solution</summary>The basic estimates are one-way implications about a transform already defined. They do not reconstruct f or show that zero transform forces zero signal. The following chapter's Gaussian regularization supplies an inversion and injectivity proof in a precise class, after which equality of transforms can be used to identify functions there.</details>

## Sources and scope

The retained [Functions and Equations Fourier reading](../functions-equations-proof/chapter-13.md) is a local predecessor for series, transform and inversion topics. Its forward exponent is −2πixν, whereas this book uses −ixξ. The conventions agree under ξ=2πν: its transform is fhat(2πν), its inverse has no prefactor in dν, and its unitary norm identity uses the corresponding frequency Jacobian. The old source and its identities remain intact; this expanded chapter supplies the proofs and exact scope rather than copying or silently renormalizing that reading.

This original exposition uses the Stein–Shakarchi and Folland Fourier syllabus as benchmarks. Improper-integral and rapidly decreasing subclasses keep elementary manipulations explicit. General Lebesgue L1, almost-everywhere convolution and completed L2 statements are extensions with additional integration input, not hidden consequences of these calculations.

## Summary

The whole-line transform is a bounded, uniformly continuous frequency function that decays at infinity. Shifts, dilations, derivatives and moments have exact algebra with stated convergence hypotheses. Pulses, exponentials and Gaussians show different decay and scale behavior. Rapidly decreasing convolution has a product transform. A long-period coefficient identity motivates the inverse normalization, while the next chapter supplies the missing reconstruction proof.
`;export{e as default};