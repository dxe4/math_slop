
# Fejér Means and Approximate Identities

A Fourier partial sum uses a signed Dirichlet kernel whose absolute mass grows. Averaging the first partial sums changes that kernel into a nonnegative one with mass one, concentrating near the origin. This proves uniform reconstruction of every continuous periodic function, including functions for which the raw partial sums are not controlled by a piecewise differentiability argument. Positivity also preserves real upper and lower bounds.

Preparation is [Fourier Coefficients](fourier-approximation-and-density.md), finite geometric sums, and uniform continuity on compact sets. The Dirichlet convergence theorem is useful for comparison but is not needed to prove the continuous Fejér theorem. All integrals in this chapter may be Riemann integrals of continuous or bounded piecewise continuous functions.

The main idea is an approximate identity: a family of normalized positive kernels whose mass outside every fixed neighbourhood tends to zero. We prove this mechanism, derive the Fejér kernel, establish quantitative bounds and obtain a density theorem without assuming Parseval or completeness of a Fourier basis.

## Averaging partial sums gives triangular coefficient weights

**Definition 4.1 (Fejér mean).** Set
\[
 \sigma_Nf=\frac1{N+1}\sum_{k=0}^NS_kf.
\]
A frequency n occurs in the sums with k at least its absolute value. Therefore
\[
 \sigma_Nf(x)=\sum_{|n|\le N}
 \left(1-\frac{|n|}{N+1}\right)\widehat f(n)e^{inx}.
\]
This is still a finite trigonometric polynomial but is generally not the orthogonal projection S_N. It attenuates retained high modes rather than keeping their coefficients unchanged.

**Theorem 4.2 (Fejér kernel).** One has normalized convolution \(\sigma_Nf=f*F_N\), where
\[
 F_N(t)=\frac1{N+1}\left|\sum_{j=0}^Ne^{ijt}\right|^2
 =\frac1{N+1}\frac{\sin^2((N+1)t/2)}{\sin^2(t/2)}
\]
away from multiples of 2pi. Its continuous value at zero is N+1. It is nonnegative, even and has normalized integral one.

*Proof.* Expanding the finite squared modulus counts N+1 minus absolute n pairs with index difference n. Division by N+1 gives exactly the triangular weights above, hence the average Dirichlet kernel and convolution formula. Positivity is immediate from the square; swapping the sign of t conjugates the inner sum and proves evenness. Only equal-index terms survive the period integral, giving normalized mass one. The geometric-sum identity supplies the sine quotient and the finite sum supplies its removable zero value. ∎

For fixed \(0<\delta\le\pi\),
\[
 \sup_{\delta\le|t|\le\pi}F_N(t)
 \le\frac1{(N+1)\sin^2(\delta/2)}.
\]
Thus the normalized mass outside that neighbourhood is at most the same quantity and tends to zero. Near zero the peak grows, but the total mass remains one. A plot's growing central height is therefore compatible with normalization rather than evidence of divergence of the reconstructed function.

## The approximate-identity proof

**Theorem 4.3 (Positive approximate identities).** Let K_N be nonnegative periodic kernels with normalized mass one, and suppose their normalized mass outside every fixed neighbourhood of zero tends to zero. For every continuous periodic f, the convolutions \(K_N*f\) converge uniformly to f.

*Proof.* Write the error as
\[
 \frac1{2\pi}\int K_N(t)[f(x-t)-f(x)]dt.
\]
Given a tolerance, uniform continuity supplies a radius delta making the bracket small for all x when \(|t|<\delta\). Positivity and mass one bound that near contribution by the same small quantity. On the complement bound the bracket by \(2\|f\|_\infty\); the assumed tail mass makes this contribution uniformly small for large N. The estimates are independent of x, proving uniform convergence. ∎

**Corollary 4.4 (Fejér's theorem).** Every continuous periodic function is the uniform limit of its Fejér means. If a bounded piecewise continuous function has finite one-sided limits at a point, its Fejér means there tend to their average.

*Proof.* The kernel estimates verify Theorem 4.3. At a jump, pair positive and negative t using evenness. Near zero the two function values approach the two side limits, whose sum approaches twice their average. Positivity bounds the resulting local error, and the remote error is bounded times the vanishing tail mass. Half of the symmetric kernel mass lies on each side, so their limits have equal weight. ∎

This jump proof does not need one-sided derivatives. It is a different convergence mechanism from the oscillatory Dirichlet proof: concentration and positivity replace signed cancellation. On continuous inputs it therefore covers a broader class, while changing the finite approximation operator.

**Worked example 4.5 (Positive mass alone is insufficient).** The constant kernel K_N(t)=1 is nonnegative and has normalized mass one for every N. Its convolution with f is always the period average, not a reconstruction of f. For f=cos x it gives zero at every degree. The missing hypothesis is concentration: its mass outside a fixed small neighbourhood does not decrease. An approximate identity needs all its defining properties.

## Range preservation and norm contraction

**Proposition 4.6 (Stable averaging).** If real f takes values in [a,b], so does every Fejér mean. For continuous complex functions, \(\|\sigma_Nf\|_\infty\le\|f\|_\infty\). The normalized integral and mean coefficient are preserved.

*Proof.* A nonnegative normalized weighted integral preserves any real interval containing its input values. The complex modulus inequality gives the norm bound. Integrating the convolution and exchanging continuous finite-period integrals gives the original mean times the kernel's normalized mass, which is one. The same mean fact follows directly from the zero-frequency triangular weight, which equals one. ∎

For continuous inputs the operators also contract the normalized one-norm and mean-square norm. The first follows by applying the integral triangle inequality, integrating over x and substituting periodic translates. For the second, weighted Cauchy–Schwarz gives
\[
 |\sigma_Nf(x)|^2\le\frac1{2\pi}\int F_N(t)|f(x-t)|^2dt.
\]
Integrating and using the mass-one property gives \(\|\sigma_Nf\|_2\le\|f\|_2\). These exchanges concern continuous functions on a compact rectangle, so ordinary repeated Riemann integration suffices.

**Worked example 4.7 (A mode illustrates the tradeoff).** If f=e^{imx}, then its Fejér mean is zero when N is below absolute m, and otherwise equals \((1-|m|/(N+1))e^{imx}\). Its uniform and mean-square norm errors for N at least absolute m are both \(|m|/(N+1)\). Raw projection would already be exact in that band. Positive averaging protects ranges for jumps but does not claim the smallest finite-degree square error for every smooth input.

## Quantitative bounds from a modulus of continuity

Define \(\omega_f(\delta)=\sup_{|h|\le\delta,x}|f(x-h)-f(x)|\), with periodic distance understood. The approximate-identity proof gives the explicit estimate
\[
 \|\sigma_Nf-f\|_\infty\le\omega_f(\delta)+
 \frac{2\|f\|_\infty}{(N+1)\sin^2(\delta/2)}.
\]
One first chooses a small radius from the function's continuity, then a degree controlling the tail. The formula is an estimate for this kernel and function, not a fixed convergence rate for every continuous function.

For Hölder or Lipschitz data a first-moment bound is sharper. The finite sum and the denominator estimate give, for 0<t<=pi,
\[
 F_N(t)\le\min\left(N+1,\frac{\pi^2}{(N+1)t^2}\right).
\]
The first bound follows because the inner sum has modulus at most N+1; the second uses sine in the denominator bounded below by t/pi. If \(|f(x-t)-f(x)|\le L|t|^\alpha\), integrate this majorant after splitting at 1/(N+1). For 0<alpha<1, the near integral is bounded by a constant times \(L(N+1)^{-\alpha}\); the far integral uses \(\int t^{\alpha-2}dt\) and has the same order, with a constant depending on alpha. At alpha=1 the far integral is logarithmic, giving a constant times \(L\log(N+1)/(N+1)\), with a harmless additional 1/(N+1) term.

These are proved class bounds. Particular functions can converge faster, as the single-mode calculation shows. Derivative discontinuities and function discontinuities also differ: the periodic absolute-value corner is continuous and Lipschitz, so Fejér reconstruction is uniform even though a Taylor expansion cannot describe the corner's tangent smoothly.

**Worked example 4.8 (A corner reconstructed by positive means).** For f(x)=|x| on one symmetric period, the coefficient chapter gives only odd cosine terms with reciprocal-square amplitudes and mean pi/2. Fejér keeps each such coefficient multiplied by its triangular weight. Every finite result remains between zero and pi because of positivity, and the theorem proves uniform convergence. No raw-sum Gibbs jump profile is asserted, because the function itself has no jump; its derivative's discontinuity is a separate reconstruction question.

## Density and uniqueness without circular Parseval

**Theorem 4.9 (Trigonometric density and coefficient uniqueness).** Trigonometric polynomials are uniformly dense in continuous periodic functions. A continuous periodic function with all Fourier coefficients zero is identically zero. A bounded finite-piece continuous function with all coefficients zero vanishes at every continuity point.

*Proof.* Each Fejér mean is a trigonometric polynomial and converges uniformly for continuous inputs, proving density directly. If all coefficients vanish, every Fejér mean is zero, so the uniform limit is zero. For the piecewise statement the jump theorem gives convergence to f at every continuity point, with the same zero means. It does not recover separately assigned values at breakpoints. ∎

This order is deliberate. Orthogonality first gave finite projection and Bessel. Positive kernels now give density. The next chapter uses that density to prove mean-square completeness and Parseval. Using Parseval to prove density here would reverse the logical dependence and make the argument circular.

**Corollary 4.10 (An alternative Weierstrass construction).** Algebraic polynomials are uniformly dense in continuous functions on [-1,1].

*Proof.* Given continuous f there, lift it to the even periodic function F(theta)=f(cos theta). Its Fejér means are even trigonometric polynomials, hence finite cosine sums. The identities cos(n theta)=T_n(cos theta) define algebraic polynomials through T_0=1, T_1=x and T_{n+1}=2xT_n-T_{n-1}, by the cosine addition formula. Thus every mean is P_N(cos theta). Uniform convergence to F and coverage of [-1,1] by cos theta give uniform convergence P_N to f. ∎

The Real Analysis primary supplies a different approximation proof. This Fourier construction illustrates how a periodic positive kernel can solve an interval approximation problem after a carefully chosen change of variables. It does not claim that an arbitrary nonlinear change of variables preserves the same Fourier coefficients or frequencies.

## Convex averaging and strict finite-degree smoothing

**Proposition 4.11 (Jensen bound).** For a continuous real input f and a continuous convex scalar function Phi on its range interval,
\[
 \Phi(\sigma_Nf(x))\le\sigma_N(\Phi\circ f)(x).
\]
Consequently the normalized integral of Phi after averaging is at most its original normalized integral.

*Proof.* Partition the kernel integration interval and use weights equal to the normalized integrals of F_N on the partition pieces. They are nonnegative and sum exactly to one. Choose one input value on each piece. Finite convexity, extended to finitely many weights by induction, bounds Phi of their weighted average by the weighted average of their Phi values. Uniform continuity of the input makes these weighted approximations converge to their integrals as the mesh tends to zero; continuity of Phi on the compact range allows passage to the limit. Integrate the resulting inequality in x and use preservation of period averages on the right. ∎

Taking Phi(s)=|s|^p for p at least one gives contraction in the corresponding normalized p-norm for continuous real inputs. A convex function of two real coordinates gives the analogous complex modulus estimate. Thus square-energy contraction is one instance of a general averaging principle, proved here with finite weighted sums and ordinary integrals rather than an unstated measure-theoretic conditional-expectation theorem.

**Proposition 4.12 (Strict range improvement).** If f is continuous, real and nonconstant, every finite Fejér mean takes values strictly between its global minimum and maximum.

*Proof.* Let M be the maximum. Nonconstancy gives an open interval where M-f is strictly positive. For each fixed evaluation point, the kernel is positive except at finitely many points, since its finite sine numerator has only finitely many zeros on one period after the removable center is filled in. A smaller subinterval avoids those zeros, so the normalized integral of F_N times M-f is strictly positive. Therefore the reconstructed value is below M. Apply the same argument to f minus its minimum for the opposite strict inequality. ∎

This does not prevent the uniform limiting function from attaining its own maximum: the finite-degree deficit can tend to zero. It also does not apply to a constant input, whose value is preserved exactly. The statements separate smoothing at a fixed finite stage from the target recovered as degree grows. In a real probability-density interpretation, nonnegativity and preserved mean keep a normalized continuous density normalized; in a signal interpretation, the same facts prevent creation of values outside the original global range. The algebra is identical, while any statistical interpretation would need a separately specified probability model.

## Repeating an averaging step changes its bias

For a fixed N, applying the Fejér operator m times multiplies the nth retained coefficient by (1−|n|/(N+1))^m. The constant coefficient remains unchanged and all indices outside the band remain zero. Every iteration preserves the range of bounded real data because it composes positive unit-mass averaging operators. Positivity alone therefore does not determine how accurately the result retains each frequency.

In the mean-square completion developed next, the squared error is the sum of |1−wn^m|²|cn|², with wn the triangular weight and zero outside the band. Since 0≤wn≤1, repeating at fixed N increases or preserves each error contribution compared with one averaging step. It decreases the reconstruction's own high-frequency energy while increasing this particular bias toward the original target. The statement follows directly from orthogonal coordinates, rather than an assumption that repeated smoothing always improves every criterion.

For each fixed m, uniform convergence on continuous inputs still holds as N grows. The operator is a supremum contraction, so the telescoping identity for its mth power gives ||σN^m f−f||∞≤m||σNf−f||∞. The right side tends to zero by Fejér's theorem. But if m grows with N the conclusion can change. On the single mode e^{ix}, taking m=N+1 multiplies its coefficient by (1−1/(N+1))^{N+1}, tending to e^−1 rather than one. The target is then not recovered even though each individual averaging kernel has mass one and preserves constants.

This explicit example records the order of limits: raising the bandwidth and repeatedly smoothing are separate operations. A convergence theorem for a fixed number of averaging steps is not a theorem for every jointly growing iteration count. The same distinction appears in iterative filtering and time-stepping limits, where a relation between discretization and repeated application must be part of the statement.

## Transferred measure-based companion

The following original sections have moved from the Real Analysis Fourier continuation. Their Lebesgue L2 and null-equivalence formulation assumes the measure and density inputs stated in the retained text; the main elementary/completion proofs above retain their own preparation. Original section numbers are preserved.

## 7. Fejér means average the partial sums

Define the Cesàro mean

\(\sigma_Nf=(1/(N+1))\sum_{k=0}^N S_kf\).

It is convolution with the Fejér kernel

\(F_N(t)=(1/(N+1))[\sin((N+1)t/2)/\sin(t/2)]^2\).

This kernel has three crucial properties:

1. \(F_N(t)\ge 0\);
2. its normalized integral is one;
3. for every fixed \(\delta>0\), the mass outside \(|t|<\delta\) tends to zero.

It is an **approximate identity**: positive mass of total one concentrates near zero.

These properties can be proved without assuming the theorem they support. Averaging the finite sums gives

\(F_N(t)=\sum_{|n|\le N}(1-|n|/(N+1))e^{\mathrm{i} n t}\),

so its normalized integral is its constant coefficient, one. Positivity follows from the square formula. If \(\delta\le |t|\le \pi\), then \(|\sin(t/2)|\ge \sin(\delta/2)\) and

\(F_N(t)\le 1/[(N+1)\sin^2(\delta/2)]\).

Integrating this far-region bound proves concentration. It is deliberately crude but sufficient: an approximate identity needs its mass to concentrate, not a sharp bound at every scale.

At \(t=0\) the quotient is interpreted by continuity, giving \(F_N(0)=N+1\). Thus the kernel grows taller as it becomes narrower, while retaining normalized mass one. Positivity prevents large positive and negative lobes from concealing instability through cancellation.

The coefficient formula shows what averaging does spectrally:

\(\sigma_Nf=\sum_{|n|\le N}(1-|n|/(N+1))\widehat{f}(n)e^{\mathrm{i} n x}\).

Modes near the cutoff are tapered rather than abruptly discarded. This is the spectral counterpart of replacing the sign-changing Dirichlet kernel with a positive averaging kernel.

## 8. Fejér's theorem

**Fejér.** If \(f\) is continuous and periodic, then \(\sigma_Nf\to f\) uniformly.

Write

\(\sigma_Nf(x)-f(x)=(1/(2\pi))\int F_N(t)[f(x-t)-f(x)]dt\).

Given \(\varepsilon>0\), uniform continuity of \(f\) provides \(\delta\) such that \(|t|<\delta\) makes the bracket smaller than \(\varepsilon/2\). Positivity and unit mass control the near contribution. On the far region, bound the bracket by \(2\lVert f\rVert_\infty\); concentration of \(F_N\) makes that contribution smaller than \(\varepsilon/2\) uniformly in \(x\).

Fejér's theorem proves that trigonometric polynomials are uniformly dense in continuous periodic functions: each \(\sigma_Nf\) is a trigonometric polynomial.

To expose the uniform quantifier, first dispatch \(f=0\), for which the claim is
immediate. Otherwise choose \(\delta\) so the near-region difference is below
\(\varepsilon/2\); positivity and unit mass make that contribution at most
\(\varepsilon/2\). On the complement use \(|f(x-t)-f(x)|\le 2\lVert f\rVert_\infty\), then choose \(N\) so the normalized far mass is below \(\varepsilon/(4\lVert f\rVert_\infty)\). Both choices are independent of \(x\). That independence is exactly where compactness and uniform continuity enter.

Positivity also gives the stability estimate \(\lVert \sigma_Nf\rVert_\infty\le \lVert f\rVert_\infty\). Raw partial sums have no corresponding uniform contraction estimate. For merely integrable functions the same kernels give norm convergence after one proves continuity of translation in \(L^1\), but there is no pointwise modulus available for this uniform proof.

The proof is an instance of a general approximate-identity argument. If periodic kernels \(K_N\) are nonnegative, have normalized integral one, and concentrate their mass at zero, then \(f*K_N\to f\) uniformly for every continuous periodic \(f\). Positivity permits the absolute value to pass inside without an additional \(L^1\) growth factor.

For \(1\le p<\infty\), translation is continuous in \(L^p\) and the same splitting argument gives \(\lVert f*F_N-f\rVert_p\to 0\) for every \(f\in L^p\). This is full-sequence norm convergence of the Fejér means. It makes no general full-sequence pointwise assertion for arbitrary \(L^p\) functions.

### A quantitative Fejér estimate

Let the periodic modulus of continuity be

\(ω_f(\delta)=\sup\{|f(x)-f(y)|: \text{periodic distance between } x \text{ and } y\le \delta\}\).

Splitting the convolution at \(\delta\in (0,\pi]\) gives

\(\lVert \sigma_Nf-f\rVert_\infty\le ω_f(\delta)+2\lVert f\rVert_\infty (1/(2\pi))\int _{\delta\le |t|\le \pi}F_N(t)dt\).

The far-mass estimate above makes the second term explicit. One may then choose \(\delta\) as a function of \(N\). The result is not always the sharpest rate, but it separates approximation error due to the function's continuity from concentration error due to the kernel.

## Exercises

### Exercise 4.1 {#fejer-means-approximate-identities-ex-1}

Derive the triangular coefficient weight by counting partial sums.

<details><summary>Hint 1</summary>
A frequency n first appears at degree |n|.
</details>
<details><summary>Hint 2</summary>
Count degrees from |n| through N inclusive, then divide by N+1.
</details>
<details><summary>Solution</summary>
There are N+1-|n| such sums when |n|<=N, so the averaged coefficient is \((1-|n|/(N+1))\widehat f(n)\). Frequencies outside the band appear in none and have zero weight. The zero mode has weight one, explaining preservation of the period average.
</details>

### Exercise 4.2 {#fejer-means-approximate-identities-ex-2}

Compute F_1(t) and verify its positivity and mass.

<details><summary>Hint 1</summary>
It is the average of D_0 and D_1.
</details>
<details><summary>Hint 2</summary>
Use D_0=1 and D_1=1+2cos t.
</details>
<details><summary>Solution</summary>
The result is 1+cos t, nonnegative because cosine is at least minus one. Its period integral is 2pi and its normalized mass one. Its zero value at pi is compatible with positivity; nonnegative does not mean strictly positive everywhere.
</details>

### Exercise 4.3 {#fejer-means-approximate-identities-ex-3}

Why does the kernel tail bound tend to zero for fixed delta but not uniformly as delta also tends to zero arbitrarily fast?

<details><summary>Hint 1</summary>
Inspect the denominator (N+1)sin^2(delta/2).
</details>
<details><summary>Hint 2</summary>
The theorem chooses the radius before choosing degree.
</details>
<details><summary>Solution</summary>
For a fixed positive delta, its sine-square factor is positive and the denominator grows linearly in degree. If delta shrinks with degree, that factor may cancel or dominate the growth; the displayed bound need not vanish. The approximate-identity definition fixes each neighbourhood before taking the limit, which is exactly the quantifier order used in the uniform continuity proof.
</details>

### Exercise 4.4 {#fejer-means-approximate-identities-ex-4}

Show positivity and mass one preserve a real interval of values.

<details><summary>Hint 1</summary>
Multiply a<=f<=b by the nonnegative kernel.
</details>
<details><summary>Hint 2</summary>
Integrate the two bounding constants using total mass one.
</details>
<details><summary>Solution</summary>
The inequalities remain ordered under multiplication by F_N and integration. The lower integral is a and the upper one is b after normalization. Thus every reconstructed value lies in [a,b]. This argument would fail for the signed Dirichlet kernel because multiplying by negative weights reverses local inequalities.
</details>

### Exercise 4.5 {#fejer-means-approximate-identities-ex-5}

For f=cos(3x) and N=5, find the Fejér mean and its norm error.

<details><summary>Hint 1</summary>
Both conjugate frequency-three coefficients have the same triangular weight.
</details>
<details><summary>Hint 2</summary>
The weight is 1 minus 3/6.
</details>
<details><summary>Solution</summary>
The mean is one half of cos(3x). Its uniform error is one half. Its normalized mean-square norm error is \(1/(2\sqrt2)\), because a unit-amplitude cosine has squared norm one half. The single complex-mode norm formula must not be copied without accounting for the real cosine's two half-amplitude coefficients.
</details>

### Exercise 4.6 {#fejer-means-approximate-identities-ex-6}

Why does concentration plus positivity prove uniform rather than just pointwise convergence for continuous periodic data?

<details><summary>Hint 1</summary>
Compactness gives a modulus of continuity independent of location.
</details>
<details><summary>Hint 2</summary>
The tail mass estimate also has no location parameter.
</details>
<details><summary>Solution</summary>
One radius controls every local difference f(x-t)-f(x), and the same degree controls the tail contribution at every x. The resulting error bound is therefore common to the whole circle. Pointwise continuity without a common radius on a noncompact setting would not by itself yield this uniform conclusion.
</details>

### Exercise 4.7 {#fejer-means-approximate-identities-ex-7}

Prove that averaging a convergent numerical sequence preserves its limit.

<details><summary>Hint 1</summary>
Split the average error into a fixed finite initial block and the later tail.
</details>
<details><summary>Hint 2</summary>
The initial block is divided by an increasing number of terms.
</details>
<details><summary>Solution</summary>
After a sufficiently large fixed index, all errors are below epsilon. Their averaged contribution is at most epsilon. The finitely many earlier errors have a fixed total modulus, whose quotient by N+1 tends to zero. Thus the average error tends to zero. Applied pointwise, this confirms compatibility of Fejér and Dirichlet limits whenever the latter exists.
</details>

### Exercise 4.8 {#fejer-means-approximate-identities-ex-8}

Use Fejér convergence to prove uniqueness of continuous functions from all their coefficients.

<details><summary>Hint 1</summary>
Subtract two functions with the same coefficients.
</details>
<details><summary>Hint 2</summary>
Every Fejér polynomial of the difference is zero.
</details>
<details><summary>Solution</summary>
The continuous difference has all coefficients zero, so its finite Fejér means vanish identically. Uniform convergence makes their limit equal to that difference, hence it is zero everywhere. The proof uses the established approximation theorem, not Parseval. A piecewise function may still differ at finitely many isolated assignments invisible to integrals.
</details>

### Exercise 4.9 {#fejer-means-approximate-identities-ex-9}

Explain the logarithm in the Lipschitz first-moment estimate.

<details><summary>Hint 1</summary>
Away from the central scale, multiply the kernel bound by |t|.
</details>
<details><summary>Hint 2</summary>
The remaining integral is proportional to the integral of 1/t.
</details>
<details><summary>Solution</summary>
The far-field kernel bound is a constant times 1/[(N+1)t^2]. A Lipschitz increment contributes a factor |t|, leaving 1/[(N+1)t]. Its integral from scale 1/(N+1) to a fixed period radius is logarithmic. The near field has only order 1/(N+1), so the combined class bound is order log(N+1)/(N+1).
</details>

### Exercise 4.10 {#fejer-means-approximate-identities-ex-10}

Why does the Weierstrass corollary produce algebraic polynomials rather than merely functions of arccos x?

<details><summary>Hint 1</summary>
The even Fejér polynomial contains only cos(n theta).
</details>
<details><summary>Hint 2</summary>
Use the finite Chebyshev recurrence from the cosine addition identity.
</details>
<details><summary>Solution</summary>
Each cos(n theta) equals T_n(cos theta), where the recurrence constructs T_n as an algebraic polynomial. Therefore replacing cos theta by x converts the finite sum into an actual algebraic polynomial P_N(x). No branch choice of arccos is needed, and surjectivity of cosine onto [-1,1] transfers the uniform error bound.
</details>

### Exercise 4.11 {#fejer-means-approximate-identities-ex-11}

Can positivity alone prove that the ordinary Fourier partial sums converge for every continuous function?

<details><summary>Hint 1</summary>
The positive kernel belongs to a different operator.
</details>
<details><summary>Hint 2</summary>
Raw sums retain all band coefficients without triangular damping.
</details>
<details><summary>Solution</summary>
No. The positivity theorem controls the averaged operator sigma_N, whose weights differ from those of S_N. The raw Dirichlet kernel is signed and has growing absolute mass. A proof for one reconstruction cannot be transferred to another by ignoring its coefficient weights. Additional regularity or another argument is needed for raw pointwise convergence.
</details>

### Exercise 4.12 {#fejer-means-approximate-identities-ex-12}

Show trigonometric polynomials are dense in continuous periodic functions in mean-square norm as a consequence of their uniform density.

<details><summary>Hint 1</summary>
The normalized period integral has total mass one.
</details>
<details><summary>Hint 2</summary>
The mean-square norm is at most the uniform norm.
</details>
<details><summary>Solution</summary>
For a continuous error h, its normalized square integral is at most its squared uniform bound, so ||h||_2<=||h||_infinity. Uniform polynomial approximants therefore also converge in mean square. The next chapter combines this with a completion argument to make the trigonometric family a complete Hilbert basis, supplying the missing hypothesis for Parseval.
</details>

## Sources and scope

This is original exposition and supported exercise development, with retained Real Analysis Fejér sections as local lineage and Stein–Shakarchi/Folland as benchmarks. Density and continuous coefficient uniqueness are proved without invoking the Parseval theorem they will later support. Positivity, concentration and the exact finite weights are kept distinct from raw projection and from sample-based transforms.

## Summary

Averaging Dirichlet sums produces a positive mass-one kernel with vanishing remote mass. Uniform continuity then gives Fejér's theorem for every continuous periodic function, while symmetry recovers jump averages. Quantitative moment bounds connect regularity with error, and the polynomials give density and uniqueness without circularity. The next chapter completes the mean-square space and turns that density into Parseval and full orthogonal reconstruction.
