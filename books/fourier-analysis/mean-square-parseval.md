
# Mean-Square Completion and Parseval

Orthogonality gave a finite energy identity, and Fejér averaging gave density. We now combine them to prove full mean-square reconstruction. The construction makes the meaning of the space explicit: complete continuous periodic functions in their square-integral norm. This produces a Hilbert space without presuming a prior measure-theory course, and proves a precise Parseval theorem on that space.

Preparation is [finite Fourier projection](fourier-approximation-and-density.md), [Fejér density](fejer-means-approximate-identities.md), and completeness of scalar sequences. The later Measure and Integration route identifies this completion with the usual Lebesgue L2 space on the circle. That identification needs a measure-based density theorem; it is not a definition of pointwise values for every completion element in the present chapter.

We prove the completion, embed bounded finite-piece functions, establish Parseval and Riesz–Fischer, and explain why norm convergence need not control values at a point. The same framework gives exact truncation errors and derivative-based approximation rates.

## Completing the square-integral geometry

Let V be the continuous complex periodic functions, with normalized inner product \(\langle f,g\rangle=(2\pi)^{-1}\int f\overline g\). Its square-integral norm is definite: a continuous nonzero function has modulus bounded away from zero on a small interval, so its squared integral is positive.

**Definition 5.1 (Mean-square completion).** Consider norm-Cauchy sequences in V. Identify two sequences when the norm of their termwise difference tends to zero. An element of H is such an equivalence class. Define its norm as the limit of the representative norms, and its inner product with another class as the limit of their inner products.

**Theorem 5.2 (Hilbert completion).** These definitions are well defined, H is Hilbert, and constant sequences embed V isometrically as a dense subspace.

*Proof.* The triangle inequality proves reflexivity, symmetry and transitivity of the equivalence relation and makes componentwise linear operations independent of representatives. Reverse triangle inequality makes representative norms scalar Cauchy sequences. Inner products are Cauchy because
\[
 |\langle f_n,g_n\rangle-\langle f_m,g_m\rangle|
 \le\|f_n-f_m\|_2\|g_n\|_2+\|f_m\|_2\|g_n-g_m\|_2,
\]
and Cauchy norms are bounded. The same estimate proves independence from representatives. Inner-product axioms pass to limits, and zero norm is exactly equivalence to the zero sequence.

For a class represented by f_n, the constant classes f_n converge to it: their distances are the limits of ||f_n-f_m|| as m grows, small by the Cauchy property. This proves density and the isometric embedding. Finally let h_n be Cauchy in H and choose v_n in V within 1/n of h_n. The v_n are Cauchy in V's norm, so their class h exists by the construction. Distances of constant v_n from that class tend to zero by their Cauchy property. The triangle inequality then gives h_n tending to h. Thus H is complete. ∎

No pointwise limit of the representatives was used. A class records reliable mean-square limits, not an automatically defined value at every spatial point. Its equivalence relation concerns norm distance, and different approximating sequences can represent the same element.

## Piecewise functions have a canonical mean-square class

**Proposition 5.3 (Embedding finite-piece functions).** Every bounded periodic function continuous except at finitely many points determines an element of H, with norm and coefficients equal to its Riemann square integral and coefficient integrals. Changing finitely many isolated values has no effect.

*Proof.* Surround the breakpoints by short intervals of total length tending to zero, interpreted on the circle. Interpolate continuously inside those intervals and keep the function unchanged outside. The approximants can be chosen bounded by the original bound M. Their squared error is at most \(4M^2\) times the removed length divided by 2pi, so it tends to zero. Triangle inequality makes these approximants Cauchy and gives a class. Any other such construction has the same class by the same error comparison. Reverse triangle inequality identifies its norm with the original square-integral norm. Coefficient errors are at most the mean-square error by Cauchy–Schwarz against a unit exponential, proving the coefficient assertion. Finite-point changes have zero Riemann square distance. ∎

This includes step functions and sawtooths used earlier, while distinguishing their isolated assignments from their square-integral class. General measurable functions require the separate measure construction and density identification. The present completion is already enough to make the periodic orthogonal-basis argument fully rigorous.

## Density supplies the missing hypothesis for Parseval

The exponentials are orthonormal in H because they already were in V. For h in H define \(c_n=\langle h,e_n\rangle\) and \(S_Nh=\sum_{|n|\le N}c_ne_n\). The same finite Pythagorean calculation gives
\[
 \|h\|_2^2=\|h-S_Nh\|_2^2+\sum_{|n|\le N}|c_n|^2.
\]

**Theorem 5.4 (Mean-square convergence and Parseval).** For every h in H,
\[
 S_Nh\longrightarrow h\text{ in mean-square norm},\qquad
 \|h\|_2^2=\sum_{n\in\mathbb Z}|c_n|^2.
\]

*Proof.* Fejér's theorem makes trigonometric polynomials dense in V in uniform norm and hence in mean-square norm. Since V is dense in H, those polynomials are dense in H too. Given epsilon, choose a polynomial p with ||h-p|| below epsilon. Once N contains its frequencies, projection minimality gives \(\|h-S_Nh\|_2\le\|h-p\|_2<\varepsilon\). Thus the residual tends to zero. Passing to the limit in the finite identity gives Parseval. ∎

The numerical coefficient-square sum is the increasing limit of sums on symmetric finite bands; nonnegativity also makes it independent of enumeration. Parseval now proves uniqueness of completion elements from all their coefficients. It does not assign otherwise unspecified point values. Polarizing, or passing to limits of finite inner products, also gives
\[
 \langle h,g\rangle=\sum_n c_n\overline{d_n}.
\]
The series is absolutely convergent by sequence Cauchy–Schwarz, so this identity has no hidden conditional rearrangement.

**Theorem 5.5 (Riesz–Fischer synthesis).** Every square-summable sequence indexed by the integers is the coefficient sequence of one unique element of H, with norm equal to its sequence norm.

*Proof.* Form its symmetric finite exponential sums. Differences have squared norms equal to the corresponding finite coefficient-square tails, tending to zero. Completeness of H supplies a limit. Continuity of each coefficient functional identifies its coefficient with the prescribed value. Parseval gives the norm, and coefficient uniqueness gives uniqueness of the element. ∎

Thus the coefficient map is an isometric bijection from the mean-square Hilbert space to square-summable frequency sequences. Surjectivity is a theorem supplied by completeness and synthesis, not by writing an infinite formal expansion.

## Worked energies and a pointwise warning

**Worked example 5.6 (The sawtooth and the reciprocal-square sum).** The periodic function f(x)=x on the open symmetric period has squared norm \(\pi^2/3\), by integrating x squared. Its positive-frequency coefficients have modulus 1/n and the negative frequencies contribute the same squares. Parseval gives
\[
 \frac{\pi^2}3=2\sum_{n=1}^\infty\frac1{n^2},
\]
so the reciprocal-square sum is \(\pi^2/6\). Endpoint assignments disappear from the mean-square class. The calculation is justified only now that completeness and Parseval have been proved; Bessel alone would have given an inequality.

**Worked example 5.7 (Pulse energy).** For the indicator of (-a,a), with 0<a<pi, the norm square is a/pi, the mean coefficient is a/pi and the other coefficients are sin(na)/(pi n). Therefore
\[
 \sum_{n=1}^\infty\frac{\sin^2(na)}{n^2}
 =\frac{\pi a-a^2}{2}.
\]
For a=pi/2 only odd indices remain, giving the odd reciprocal-square sum pi squared over eight. These identities use the full energy, including the nonzero mean term; omitting that term would give the wrong right-hand side.

**Worked example 5.8 (Finite energy with divergent values at zero).** Let the coefficients be \(a_n=1/(1+|n|)\). Their squares are summable, so synthesis gives a valid h in H. But the finite exponential sums at zero are sums of those positive coefficients, which diverge like a harmonic sum. There is no contradiction: h was constructed as a mean-square element, and evaluation at zero is not a bounded functional on H. The Fourier norm theorem did not promise pointwise convergence at every location.

To see that evaluation really is unbounded, take the continuous triangular pulse \(v_\varepsilon(x)=\max(1-|x|/\varepsilon,0)\), periodically continued for epsilon below pi. Its value at zero is one, but its normalized squared norm is \(\varepsilon/(3\pi)\), tending to zero. A bounded evaluation would have to send this norm-null sequence to a scalar-null sequence, impossible.

## Translation and positive means extend to the completion

Translation is an isometry on V by periodic substitution, so it extends uniquely to an isometry on H. Its coefficients are \(e^{-ina}c_n\). It is strongly continuous in a: approximate h by a continuous v, bound both translated approximation errors by ||h-v||, and use uniform continuity of v for the remaining translation difference. This argument states the common bound before passing from dense inputs to all inputs.

Fejér operators also extend contractively from V to H because of their proved mean-square bounds. They converge to h in mean square: approximate by a finite polynomial p, use contraction on the error, and note that its finitely many triangular weights tend to one. Alternatively raw projection has no larger mean-square error than the Fejér polynomial in the same band. These facts concern norm convergence, even when no pointwise representative has been selected.

A norm-convergent sequence of Fourier reconstructions can therefore have different pointwise behavior under different representatives. The later measure identification describes equivalence almost everywhere, but even there arbitrary isolated values remain invisible to the norm. Pointwise regularity is additional information, not a consequence of the coefficient-square sum alone.

## Exact tails and derivative-controlled approximation

**Proposition 5.9 (Spectral tail).** For h with coefficients c_n,
\[
 \|h-S_Nh\|_2^2=\sum_{|n|>N}|c_n|^2.
\]
If \(\sum |n|^{2s}|c_n|^2\le M^2\), for s>0, then the error norm is at most \(M/(N+1)^s\).

*Proof.* Subtract the finite coefficient energy from Parseval. On the omitted indices, \(|n|\ge N+1\), so each unweighted square is at most its weighted square divided by \((N+1)^{2s}\). Sum and take square roots. ∎

For a continuously differentiable periodic function, the derivative coefficient rule and Parseval applied to its continuous derivative give \(\sum n^2|c_n|^2=\|f'\|_2^2\). Thus the error is at most \(\|f'\|_2/(N+1)\). This aggregate square estimate can be stronger than bounding each coefficient separately by a reciprocal. Higher periodic derivatives give corresponding higher powers when their norm and endpoint hypotheses are satisfied.

The finite projection still uniquely minimizes the band error. If a reconstruction changes retained coefficients, its excess squared error is the sum of their squared discrepancies. This supports an exact tradeoff analysis for noise or filtering once a model supplies those discrepancies; it does not turn a personal study mark or an observed plot into an assessed accuracy statement.

## Which scalar measurements are continuous in mean square?

**Proposition 5.10 (Coefficient-weighted measurements).** For every square-summable sequence b, the formula
\[
 \Phi_b(h)=\sum_n c_n\overline{b_n}
\]
defines a bounded linear functional of norm ||b|| on H. Every bounded linear functional has this form.

*Proof.* Cauchy–Schwarz makes the series absolutely convergent and bounds it by ||h|| times ||b||. If b is nonzero, synthesis of coefficients b/||b|| supplies a unit vector attaining that bound; the zero case is immediate. Conversely, for a bounded functional Phi, test finite polynomials whose coefficients are the conjugates of Phi(e_n), divided by the square root of their finite square sum. The test gives \(\sum_{n\in F}|\Phi(e_n)|^2\le\|\Phi\|^2\) for every finite set F. Thus b_n=overline{Phi(e_n)} is square summable. Linearity proves the formula on finite polynomials, and density plus continuity extends it to H. ∎

Formal evaluation at a point would use weights b_n=e^{-inx_0}, which are not square summable. The proposition therefore explains structurally why evaluation is not a bounded measurement, agreeing with the triangular-pulse counterexample.

A damped version is bounded: for 0<r<1, use weights \(b_n=r^{|n|}e^{-inx_0}\). Its squared norm is
\[
 1+2\sum_{n\ge1}r^{2n}=\frac{1+r^2}{1-r^2}.
\]
So the damped coefficient evaluation exists for every H element, but its best norm bound grows without limit as r approaches one. Smoothing has made a valid continuous measurement; removing that smoothing loses the uniform bound. No assertion that its undamped point limit exists for every H element follows from boundedness at each fixed r.

This same distinction appears in applications: a finite-band or smoothly damped readout can be stable in mean square while a desired pointwise quantity remains unstable in that norm. The answer is to state the measurement and topology honestly, rather than interpreting coefficient energy as control of every conceivable output.

## Uniform recovery on compact sets and on regularity classes

The projections SN converge to the identity on each fixed H element, and their norms are at most one. This implies uniform convergence over a compact set K of H elements. For ε>0 choose a finite ε-net h1,…,hr in K. Choose one N large enough that all ||hi−SNhi|| are small. For h near hi, the remaining error is at most ||h−hi||+||SN(h−hi)||≤2ε. Combining those bounds proves the uniform-on-compact conclusion. Compactness has reduced infinitely many possible inputs to finitely many representatives with a stable tail.

There is no uniform recovery rate over the whole unit ball. The unit vector eN+1 has zero projection onto modes through N, so ||eN+1−SNeN+1||=1. Thus the operator norm of I−SN is exactly one for every finite N. Pointwise-in-input convergence has not become operator-norm convergence. A proposed global error guarantee must therefore restrict the input class or supply a tail model.

The weighted coefficient bound in Proposition 5.9 gives one such class. For s>0 and M fixed, consider all h with Σ(1+n²)^s|cn|²≤M². Their omitted square tail is at most M²(1+(N+1)²)^−s, uniformly over the class. The retained coefficient vectors lie in a bounded finite-dimensional set, which has finite ε-nets. Choose N making every tail small and then cover those retained vectors by finitely many balls. This constructs a finite ε-net for the entire class in H. Since H is complete, its closure is compact.

This is an elementary compact-embedding argument in coefficient coordinates. A bound on weighted high-frequency energy supplies exactly the uniform tail control missing from the unrestricted unit ball. No pointwise derivative interpretation has been assumed for a completed element; when a smooth periodic representative has the corresponding derivatives, the earlier derivative identity supplies the same bound concretely.

## Finite-band evaluation has a dimension-dependent norm

Although evaluation is unbounded on all H, it is bounded on the subspace of degree-N trigonometric polynomials. If p=Σ|n|≤Ncn e^{inx}, Cauchy–Schwarz gives |p(x0)|≤sqrt(2N+1)(Σ|cn|²)^1/2. The bound is exact: choose cn=e^−inx0/sqrt(2N+1). The resulting polynomial is the shifted Dirichlet kernel divided by sqrt(2N+1), has H norm one and value sqrt(2N+1) at x0.

Thus finite-dimensional evaluation constants grow as more frequencies are allowed. A stable point measurement on each chosen finite model does not yield one constant valid on their dense union. This explains concretely how complete mean-square reconstruction can coexist with unstable point values. The obstruction is not failure of orthogonality; it is the increasing norm of the evaluation functional.

For a derivative evaluation, the same argument replaces the constant coefficient magnitudes by |n|, giving norm sqrt(Σ|n|≤Nn²). It grows even faster. Derivative or pointwise error estimates consequently need regularity, frequency restrictions or another norm beyond unweighted square error. These finite estimates identify which extra information is being used instead of treating a visually accurate partial sum as a universal certificate.

## A family with an exact approximation order

For r>1/2 prescribe cn=(1+|n|)^−r. Riesz–Fischer gives a unique H element with those coefficients. Its squared projection error is twice the sum of (1+n)^−2r over n>N. Integral comparison bounds that sum above and below by fixed positive multiples of (N+1)^{1−2r}. Hence its error norm has order N^{1/2−r}, with both bounds justified rather than only an upper estimate.

Multiplying the coefficients by arbitrary unit complex phases leaves every one of these norm errors unchanged. It can change the actual values or convergence of pointwise series, which are not encoded by the coefficient magnitudes alone. At the threshold r=1/2 the square sum diverges, so the proposed coefficients do not represent an H element at all. This family illustrates exactly where a synthesis hypothesis enters and how a quantitative coefficient tail translates into a reconstruction rate.

## Transferred measure-based companion

The following original sections have moved from the Real Analysis Fourier continuation. Their Lebesgue L2 and null-equivalence formulation assumes the measure and density inputs stated in the retained text; the main elementary/completion proofs above retain their own preparation. Original section numbers are preserved.

The original reference to a preceding projection section points to the [transferred projection development](fourier-approximation-and-density.md). Its measure-space density and Tonelli inputs are separate from the main completion construction.

## 3. Bessel and Parseval

Apply the Pythagorean identity from the preceding section to \(p=0\):

\(\lVert f\rVert_2^2=\lVert f-S_Nf\rVert_2^2+\sum_{|n|\le N}|\widehat{f}(n)|^2\).

Hence

\(\sum_{|n|\le N}|\widehat{f}(n)|^2\le \lVert f\rVert_2^2\).

Letting \(N\to \infty\) gives **Bessel's inequality**

\(\sum_{n\in Z}|\widehat{f}(n)|^2\le \lVert f\rVert_2^2\).

In particular, \(\widehat{f}(n)\to 0\) as \(|n|\to \infty\).

The trigonometric system is complete in \(L^2\), so the stronger **Parseval identity** holds:

\(\sum_{n\in Z}|\widehat{f}(n)|^2=\lVert f\rVert_2^2\).

Equivalently, \(S_Nf\to f\) in \(L^2\). Completeness of the system is not a consequence of orthogonality alone; it requires a density theorem.

An equivalent formulation of completeness is useful. If \(f\in L^2\) satisfies \(\widehat{f}(n)=0\) for every integer \(n\), then \(f=0\) almost everywhere. This says that the orthogonal complement of the closed span of the exponentials is trivial. Once density is proved, Parseval follows from the finite Pythagorean identity by sending the residual norm to zero. This order prevents a circular argument: Parseval cannot first be used to prove the density statement needed to establish Parseval.

Polarization gives a companion identity. For \(f,g\in L^2\), completeness yields

\(\langle f,g\rangle =\sum_{n\in Z}\widehat{f}(n)\overline{\widehat{g}(n)}\).

The series converges absolutely by Cauchy–Schwarz in sequence space. Correlation in physical space is therefore an inner product of spectral coordinates.

Parseval also yields a uniqueness theorem. If two \(L^2\) functions have the same Fourier coefficients, their difference has every coefficient zero, so its squared norm is zero. They are equal almost everywhere. This does not recover values on a null set, and no coefficient-based method can do so without extra conventions.

## 9. Density gives mean-square reconstruction

Continuous periodic functions are dense in \(L^2\), and trigonometric polynomials are uniformly dense in continuous periodic functions. On a finite interval, uniform approximation implies \(L^2\) approximation. Therefore trigonometric polynomials are dense in \(L^2\).

Since \(S_Nf\) is the best approximation from the nested spaces \(V_N\), and their union is dense,

\(\lVert f-S_Nf\rVert_2\to 0\).

This proves Parseval and mean-square convergence. The argument connects measure regularity, continuous approximation, Fejér averaging, and Hilbert projection.

Here is the final epsilon argument. Given \(f\in L^2\) and \(\varepsilon>0\), choose continuous periodic \(g\) with \(\lVert f-g\rVert_2<\varepsilon/2\). Fejér supplies a trigonometric polynomial \(p\) with \(\lVert g-p\rVert_\infty<\varepsilon/2\), hence \(\lVert g-p\rVert_2\le \lVert g-p\rVert_\infty<\varepsilon/2\) under normalized measure. If \(p\in V_M\), best approximation gives

\[\lVert f-S_Nf\rVert_2\le \lVert f-p\rVert_2<\varepsilon\]

for every \(N\ge M\). This proves convergence of the full sequence, not only existence of a good polynomial subsequence.

Density of continuous periodic functions in \(L^2\) is a genuine measure-theoretic input. One route approximates by bounded measurable functions, then approximates indicators outside sets of small measure. Another uses periodic mollification. A self-contained proof must supply or explicitly import one of these routes rather than hide it under “clearly dense.”

The normalized measure causes no change in the density theorem; it merely rescales every squared norm by \(1/(2\pi)\). A convenient route begins with step functions, rounds their interval endpoints away from a set of small total length, and replaces each jump by a short linear transition. The resulting continuous periodic function differs from the step function only on a set of controlled measure and is uniformly bounded, so its \(L^2\) error is small. Together with approximation of \(L^2\) functions by bounded step functions, this proves the required density.

There is an instructive distinction between the two approximation sequences now available. Fejér means converge to continuous \(f\) uniformly, while orthogonal partial sums converge to every \(L^2\) function in mean square. For continuous \(f\), both statements apply, but only the Fejér assertion gives uniform convergence without additional smoothness.

## 11. Comparing convergence modes

- Uniform convergence implies \(L^2\) convergence on the finite interval and preserves continuity.
- \(L^2\) convergence implies convergence in measure and has an almost-everywhere convergent subsequence.
- \(L^2\) convergence need not imply pointwise convergence of the full sequence.
- Pointwise convergence need not imply \(L^2\) convergence without domination.
- Fourier partial sums converge in \(L^2\) for every \(L^2\) function, while pointwise behavior needs deeper hypotheses.
- Fejér means converge uniformly for continuous periodic functions even when raw partial sums are unreliable.

Every approximation report should name the norm or pointwise set on which error is controlled.

On this finite-measure domain, a useful implication chain is

\(\text{uniform} \Rightarrow L^2 \Rightarrow \text{convergence in measure}\).

Neither reverse implication holds in general. Almost-everywhere convergence implies convergence in measure on finite-measure spaces, while convergence in measure yields an almost-everywhere convergent subsequence. These are statements about arbitrary sequences. For Fourier partial sums, \(L^2\) convergence alone gives an almost-everywhere convergent subsequence, not almost-everywhere convergence of the full sequence. Stronger full-sequence theorems belong to deeper harmonic analysis and must not be silently inferred from Hilbert-space convergence.

The subsequence assertion has a short proof. From \(\lVert f_n-f\rVert_2\to 0\), choose indices \(n_j\) so that \(\lVert f_{n_j}-f\rVert_2^2\le 2^{-j}\). Tonelli's theorem gives

\((1/(2\pi))\int \sum_j|f_{n_j}(x)-f(x)|^2 dx=\sum_j\lVert f_{n_j}-f\rVert_2^2<\infty\).

Thus the nonnegative series is finite for almost every \(x\); its terms tend to zero there. Applied to \(f_n=S_nf\), this constructs an almost-everywhere convergent subsequence. It provides no information that forces the omitted partial sums to converge.

## Exercises

### Exercise 5.1 {#mean-square-parseval-ex-1}

Why is the completion relation transitive?

<details><summary>Hint 1</summary>
Compare the first and third representatives through the middle one.
</details>
<details><summary>Hint 2</summary>
Both termwise norm differences tend to zero.
</details>
<details><summary>Solution</summary>
If ||f_n-g_n|| tends to zero and ||g_n-h_n|| tends to zero, triangle inequality bounds ||f_n-h_n|| by their sum, which tends to zero. Symmetry and reflexivity follow directly from the norm. Thus the quotient construction uses an actual equivalence relation rather than choosing a preferred pointwise limit.
</details>

### Exercise 5.2 {#mean-square-parseval-ex-2}

Explain why norm-Cauchy representative sequences have convergent numerical norms.

<details><summary>Hint 1</summary>
Use reverse triangle inequality.
</details>
<details><summary>Hint 2</summary>
The scalar field is complete.
</details>
<details><summary>Solution</summary>
The difference of their norms is at most the norm of their difference, so the numerical norms are Cauchy. They therefore have a finite scalar limit. Equivalent representatives have norm limits differing by at most a term tending to zero, giving a well-defined completion norm.
</details>

### Exercise 5.3 {#mean-square-parseval-ex-3}

Why does Fejér uniform density imply density of trigonometric polynomials in H?

<details><summary>Hint 1</summary>
First approximate an H element by a continuous function.
</details>
<details><summary>Hint 2</summary>
Then approximate that function uniformly, using norm2 at most norm-infinity.
</details>
<details><summary>Solution</summary>
Given h and a tolerance, choose v in V close in mean square by completion density. Choose a trigonometric polynomial close uniformly to v by Fejér's theorem. Its mean-square error from v is no larger than its uniform error. The triangle inequality makes the polynomial close to h. No Parseval identity is used in this density step.
</details>

### Exercise 5.4 {#mean-square-parseval-ex-4}

Prove coefficient uniqueness in H from Parseval.

<details><summary>Hint 1</summary>
Subtract two elements with equal coefficients.
</details>
<details><summary>Hint 2</summary>
Its total norm square is the sum of zero coefficient squares.
</details>
<details><summary>Solution</summary>
The difference has every coefficient zero. Parseval gives its norm square zero, hence it is the zero completion element. This proves equality in H. It does not prove equality of arbitrary isolated values in chosen pointwise representatives, since those values are not defined by the norm class.
</details>

### Exercise 5.5 {#mean-square-parseval-ex-5}

A coefficient sequence is 2^{-n} for positive n and zero otherwise. Find its H norm and truncation error after positive index N.

<details><summary>Hint 1</summary>
Sum the square-geometric series beginning at one.
</details>
<details><summary>Hint 2</summary>
The omitted tail starts at N+1.
</details>
<details><summary>Solution</summary>
The total squared norm is \(\sum_{n\ge1}4^{-n}=1/3\), so the norm is \(1/\sqrt3\). The omitted squared norm is \(4^{-N}/3\), giving error \(2^{-N}/\sqrt3\). Riesz–Fischer ensures an H element exists with these coefficients; the finite error follows exactly from Parseval's tail.
</details>

### Exercise 5.6 {#mean-square-parseval-ex-6}

Derive the reciprocal-square sum from the sawtooth's energy, including both signs of frequency.

<details><summary>Hint 1</summary>
Its normalized square integral is pi squared over three.
</details>
<details><summary>Hint 2</summary>
Positive and negative frequencies each contribute one over n squared.
</details>
<details><summary>Solution</summary>
Parseval gives \(\pi^2/3=2\sum_{n\ge1}1/n^2\), so the sum is \(\pi^2/6\). Keeping only positive frequencies would miss the factor two. The zero coefficient is zero because the sawtooth is odd, so no mean contribution remains in this particular energy calculation.
</details>

### Exercise 5.7 {#mean-square-parseval-ex-7}

Compute the triangular pulse's normalized squared norm and use it to refute bounded point evaluation.

<details><summary>Hint 1</summary>
Integrate (1-x/epsilon) squared on the positive half of its support.
</details>
<details><summary>Hint 2</summary>
Double and divide by 2pi; its central value remains one.
</details>
<details><summary>Solution</summary>
The integral on [0,epsilon] is epsilon/3, so the normalized squared norm is epsilon/(3pi). The norms tend to zero but evaluation at zero equals one. Therefore no fixed bound |f(0)|<=C||f||_2 can hold on these continuous inputs, and evaluation has no continuous extension to H.
</details>

### Exercise 5.8 {#mean-square-parseval-ex-8}

Why does square summability of coefficients not imply convergence of their Fourier sums at zero?

<details><summary>Hint 1</summary>
At zero all exponential factors are one.
</details>
<details><summary>Hint 2</summary>
Use positive coefficients 1/(1+|n|).
</details>
<details><summary>Solution</summary>
Those coefficient squares are summable, so synthesis gives a legitimate H element. At zero the partial sums are sums of positive reciprocal-sized terms and diverge. Mean-square convergence occurs in a space where evaluation is unbounded, so it cannot force convergence under that evaluation. A pointwise theorem needs additional hypotheses beyond coefficient-square energy.
</details>

### Exercise 5.9 {#mean-square-parseval-ex-9}

If the weighted coefficient sum with weight n^4 is at most nine, bound the degree-N error.

<details><summary>Hint 1</summary>
Use the tail proposition with s=2.
</details>
<details><summary>Hint 2</summary>
Its parameter M is the square root of the weighted bound.
</details>
<details><summary>Solution</summary>
The norm error is at most \(3/(N+1)^2\). The corresponding squared error is at most \(9/(N+1)^4\). This estimate controls the actual mean-square tail from the stated weighted energy, not pointwise error or a universal rate without regularity information.
</details>

### Exercise 5.10 {#mean-square-parseval-ex-10}

Prove translations preserve the H norm and multiply coefficient phases by the stated factors.

<details><summary>Hint 1</summary>
First use substitution for continuous representatives.
</details>
<details><summary>Hint 2</summary>
Extend by density and continuity of the coefficient functionals.
</details>
<details><summary>Solution</summary>
Periodic substitution makes translation an isometry on V, and the earlier coefficient computation gives factor e^{-ina}. Applying the isometry termwise to Cauchy representatives gives a well-defined extension on H. Taking inner-product limits preserves the same coefficient rule and norm. The extension does not require selecting point values for an arbitrary completion element.
</details>

### Exercise 5.11 {#mean-square-parseval-ex-11}

Why do Fejér means converge in H even when raw pointwise values are unspecified?

<details><summary>Hint 1</summary>
The averaging operators contract the H norm.
</details>
<details><summary>Hint 2</summary>
Approximate by a fixed finite polynomial whose weights tend to one.
</details>
<details><summary>Solution</summary>
For h close to polynomial p, the error ||sigma_Nh-h|| is at most twice ||h-p|| plus ||sigma_Np-p||. The last term tends to zero because p has only finitely many coefficients and each weight tends to one. The first error is arbitrarily small by density. Every step concerns norm elements and bounded operators, not evaluation at a spatial point.
</details>

### Exercise 5.12 {#mean-square-parseval-ex-12}

State what extra theorem identifies this completion with ordinary Lebesgue L2 functions.

<details><summary>Hint 1</summary>
That space must first be constructed and proved complete.
</details>
<details><summary>Hint 2</summary>
Continuous periodic functions must be dense in its integral norm.
</details>
<details><summary>Solution</summary>
One needs Lebesgue measure and integration, completeness of the resulting L2 quotient, and density of continuous periodic functions there. Their normalized inner product agrees with the Riemann one on continuous functions. The universal completion construction then gives the canonical isometric identification. Until those facts are established in the measure route, the present Hilbert completion is the precise model proved here.
</details>

## Sources and scope

This is original exposition and supported exercise development, using the retained Real Analysis mean-square discussion as local lineage and Stein–Shakarchi/Folland as benchmarks. The completion and density proofs make Parseval's hypotheses explicit. The usual measure-based L2 identification is stated as an additional density/completeness theorem rather than assumed in a purportedly measure-free argument.

## Summary

Completing continuous periodic functions turns mean-square approximation into a Hilbert space. Fejér density makes exponentials complete there, yielding Parseval, coefficient uniqueness and Riesz–Fischer synthesis. Piecewise functions enter by controlled continuous approximation, while unbounded point evaluation explains why norm recovery does not force every pointwise value. Exact coefficient tails quantify truncation, preparing the jump comparison and the later transform and PDE applications.
