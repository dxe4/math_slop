
# The Discrete Fourier Transform and the Radix-Two FFT

A discrete Fourier transform is an invertible change of coordinates on a finite vector. A fast Fourier transform is an efficient algorithm for that same map. Neither statement says that a finite sample vector uniquely identifies an arbitrary continuous function. Keeping the finite algebra separate from sampling assumptions makes normalization, aliasing, convolution and computational complexity much easier to understand.

Preparation is finite complex arithmetic, geometric sums, and [Fourier Coefficients and Orthogonal Projection](fourier-approximation-and-density.md). The finite transform and radix-two proof require no measure theory. The later sampling identity explicitly assumes an absolutely convergent continuous Fourier expansion before interchanging its sum with the finite transform.

We use a negative exponential in the forward transform, no forward scaling, and a factor one over the length in the inverse. The radix-two algorithm assumes the length is a power of two. Other sign conventions and transform algorithms are possible, but every formula below follows these stated choices.

## Finite roots of unity and normalization

Let \(N\ge1\) be an integer and \(\omega_N=e^{-2\pi i/N}\).

**Definition 11.1 (Forward and inverse transforms).** For a vector \(x=(x_0,\ldots,x_{N-1})\), its forward DFT is
\[
 X_k=\sum_{j=0}^{N-1}x_j\omega_N^{jk},\quad0\le k<N.
\]
The proposed inverse is
\[
 x_j=\frac1N\sum_{k=0}^{N-1}X_k\omega_N^{-jk}.
\]
Indices are interpreted modulo N when used in periodic identities. The negative sign belongs to the forward root and the positive sign to the inverse power.

**Lemma 11.2 (Finite orthogonality).** For integer m,
\[
 \sum_{j=0}^{N-1}\omega_N^{jm}
 =\begin{cases}N,&N\text{ divides }m,\\0,&\text{otherwise}.\end{cases}
\]

*Proof.* If the ratio is one, every term is one. Otherwise the finite geometric sum is \((1-\omega_N^{mN})/(1-\omega_N^m)=0\), since the numerator vanishes and the denominator does not. The ratio is one exactly when N divides m. ∎

**Theorem 11.3 (Inversion and discrete Parseval).** The inverse formula is exact, and
\[
 \sum_{j=0}^{N-1}|x_j|^2=\frac1N\sum_{k=0}^{N-1}|X_k|^2.
\]

*Proof.* Insert the forward formula in the inverse and interchange the two finite sums. The coefficient of each input is its root sum from Lemma 11.2 divided by N, equal to one for the matching index and zero otherwise. For Parseval, expand \(\sum_k|X_k|^2\); the sum over k kills all cross-coordinate terms and multiplies each matching squared modulus by N. Rearranging proves the identity. ∎

Equivalently the matrix of the transform divided by \(\sqrt N\) is unitary. If the discrete input inner product is normalized as \(N^{-1}\sum x_j\overline{y_j}\), its orthonormal modes are \(e^{2\pi i jk/N}\) and its projection coefficients are \(a_k=X_k/N\). Then \(N^{-1}\sum|x_j|^2=\sum|a_k|^2\), matching the continuous normalized Fourier convention. The symbol X denotes the unscaled DFT, not those normalized coefficients.

**Worked example 11.4 (A four-point transform).** For \(x=(1,2,3,4)\), use \(\omega_4=-i\). Direct substitution gives
\[
 X=(10,-2+2i,-2,-2-2i).
\]
Its squared moduli sum to \(100+8+4+8=120\), while the input sum is thirty, agreeing with Parseval's factor one quarter. The negative-frequency bin is the conjugate of its positive-frequency partner because the data are real. This symmetry does not mean every transform value is real.

## The radix-two butterfly identity

Assume \(N=2M\). Split the input into even and odd positions, and compute their length-M unscaled transforms E and O. For \(0\le k<M\),
\[
 X_k=E_k+\omega_N^kO_k,\qquad
 X_{k+M}=E_k-\omega_N^kO_k.
\]

**Theorem 11.5 (Radix-two correctness).** If \(N=2^m\), recursively applying this identity, with length one as the base case, computes the exact DFT.

*Proof.* Separate the defining sum into \(j=2r\) and \(j=2r+1\). Since \(\omega_N^2=\omega_M\), the even contribution is E and the odd contribution is \(\omega_N^kO\). The subtransforms are periodic in k modulo M. Replacing k by k+M multiplies the odd factor by \(\omega_N^M=-1\) and leaves the even contribution unchanged, giving the two outputs. If the length is a power of two, repeated halving ends at one. The length-one transform is the input itself. Induction through the identity therefore proves every recursive level computes the same defining transform. ∎

The two outputs sharing one twiddle product form a butterfly. That term describes a data dependency, not a different mathematical transform. An in-place implementation may need a digit-reversal permutation, but the algebraic proof does not depend on a particular storage layout. Any such permutation must preserve the meaning of input indices rather than silently changing frequency labels.

**Proposition 11.6 (Arithmetic count).** This recursion uses at most \((N/2)\log_2N\) complex twiddle multiplications and \(N\log_2N\) complex additions/subtractions, excluding preparation of the roots.

*Proof.* Each level has N/2 butterflies, one product and two additions each. There are m levels because the length halves from \(2^m\) to one. Multiplying these counts gives the bounds. Some twiddles are one or special simple roots, so an optimized count can be smaller. ∎

The direct defining sum uses order N squared arithmetic, while this recurrence uses order N log N. This is an operation count in exact arithmetic, not an observed timing or a floating-point error guarantee. Root evaluation, memory access and bounded arithmetic require their own implementation analysis.

If N is even but not a power of two, splitting eventually reaches an odd length greater than one, so this particular radix-two recursion has no further two-way base reduction. A different factorization algorithm can handle it. Padding to another length changes the transform grid and is not the same N-point DFT, even when padding is useful for a separate convolution problem.

**Worked example 11.7 (A mode on the four-point grid).** The samples \(x_j=\cos(\pi j/2)\) are \((1,0,-1,0)\). Even entries are \((1,-1)\), with two-point transform \((0,2)\); odd entries vanish. The butterfly gives X equal to \((0,2,0,2)\). Normalized coefficients are one half in bins one and three, representing the two conjugate modes. The unscaled values two are not continuous amplitude-two cosine coefficients; dividing by N is part of comparing conventions.

## Circular convolution and zero padding

**Definition 11.8 (Circular convolution).** For length-N vectors set
\[
 (x*_Ny)_j=\sum_{r=0}^{N-1}x_r y_{j-r\bmod N}.
\]

**Theorem 11.9 (Finite convolution theorem).** With the forward convention above, the DFT of circular convolution is \(X_kY_k\).

*Proof.* Insert the convolution into the forward sum. For fixed r substitute \(s=j-r\) modulo N. The root factor splits as \(\omega_N^{(s+r)k}=\omega_N^{sk}\omega_N^{rk}\). The two finite sums separate into the defining transforms X and Y. There is no extra factor because the forward transform was unscaled. ∎

Ordinary linear convolution of sequences supported on indices zero through p minus one and zero through q minus one has support through p+q minus two. If both are padded with zeros to length \(N\ge p+q-1\), circular folding cannot overlap nonzero output indices, so inverse-transforming the product gives their linear convolution followed by zeros. A shorter length folds coefficients whose indices differ by N together. Padding for this purpose is a mathematical anti-wrap condition, not a claim that the original shorter transform values have remained unchanged.

**Worked example 11.10 (Padding prevents wrap).** For \(x=(1,2)\), \(y=(1,1)\), linear convolution is \((1,3,2)\). With length four, the padded transforms are
\[
 X=(3,1-2i,-1,1+2i),\quad
 Y=(2,1-i,0,1+i).
\]
Their pointwise product is \((6,-1-3i,0,-1+3i)\); the inverse gives \((1,3,2,0)\). At length two, circular convolution would instead be \((3,3)\), because the final coefficient two wraps into the first coefficient one. The length requirement is what separates the two operations.

The same forward algorithm can implement the inverse using conjugation:
\[
 x=\frac1N\overline{\operatorname{DFT}(\overline X)}.
\]
Conjugating the negative forward exponent produces the positive inverse exponent. The factor one over N remains; forgetting it gives an output scaled by N even if every butterfly was otherwise correct.

## Sampling continuous functions introduces a second problem

For samples \(x_j=f(2\pi j/N)\), different integer modes separated by N agree at every sample. Indeed \(e^{i(k+rN)2\pi j/N}=e^{ik2\pi j/N}\). This is aliasing and follows before any algorithm is chosen.

**Proposition 11.11 (Alias formula under absolute convergence).** If \(f(x)=\sum_{n\in\mathbb Z}c_ne^{inx}\) with \(\sum|c_n|<\infty\), then its normalized sampled coefficients satisfy
\[
 \frac{X_k}{N}=\sum_{r\in\mathbb Z}c_{k+rN}.
\]

*Proof.* Absolute convergence permits inserting the expansion in the finite sample sum and moving the finite sum inside. The root average is one when n minus k is divisible by N and zero otherwise, by Lemma 11.2. Exactly those coefficient terms remain. Their subseries converges absolutely. ∎

The hypothesis matters. An arbitrary Fourier series cannot be exchanged with sampled evaluation merely because coefficients have been formally written. For a genuinely band-limited trigonometric polynomial with no two retained frequencies congruent modulo N, the formula recovers the selected coefficients exactly. For an unrestricted continuous function, many distinct functions have the same samples.

For even N the Nyquist mode has sample values \(e^{i\pi j}=(-1)^j\), identical to its negative-frequency version. A sine at that frequency vanishes on the grid. There is no unique sign information in those samples alone. Bins above N/2 are conventionally labeled by negative indices k minus N for a chosen frequency band; the arithmetic does not prove there were no higher aliased physical frequencies.

Sampling \(\cos(Nx)\) gives the same all-ones vector as a constant, whereas sampling \(\sin(Nx)\) gives the all-zero vector. Exact DFT inversion recovers those vectors perfectly and still cannot distinguish the underlying functions. Finite invertibility and continuum uniqueness concern different domains.

## Conditioning of the transform and of operations after it

**Proposition 11.12 (Exact Euclidean conditioning).** The unscaled DFT matrix has norm \(\sqrt N\), its inverse has norm \(1/\sqrt N\), and its Euclidean condition number is one.

*Proof.* Parseval states \(\|Fx\|_2=\sqrt N\|x\|_2\) for every vector, immediately giving the two norms. Their product is one. For a nonzero input and any perturbation, linearity gives
\[
 \frac{\|F(x+\delta x)-Fx\|_2}{\|Fx\|_2}
 =\frac{\|\delta x\|_2}{\|x\|_2}.
\]
Thus the map itself preserves relative Euclidean perturbation size exactly. If transformed data carry an error \(\delta X\), the inverse reconstruction error has norm \(\|\delta X\|_2/\sqrt N\). Relative errors at a zero input are undefined, so there the absolute statement is the appropriate one. ∎

A well-conditioned coordinate transform does not make every operation performed in those coordinates well conditioned. For example choose frequency representatives \(\nu_k\) for a particular complex trigonometric interpolant of physical period P. Differentiating that model multiplies its coefficient in bin k by \(2\pi i\nu_k/P\). In sample coordinates the derivative map is
\[
 D=F^{-1}\operatorname{diag}(2\pi i\nu_k/P)F.
\]
Because the scaled transform is unitary, its operator norm is exactly \(\max_k 2\pi|\nu_k|/P\): the diagonal upper bound is attained on the corresponding mode. High-frequency errors can therefore be amplified by differentiation even though changing Fourier coordinates has condition number one.

The frequency representatives are part of the interpolation model. On an even grid the Nyquist sign ambiguity must be resolved before an odd derivative is assigned; the finite samples alone do not decide it. Likewise dividing coefficients by small eigenvalues in a deconvolution can be unstable even though forward and inverse DFT are perfectly conditioned. These examples locate the source of amplification in the mathematical operation, rather than attributing every reconstruction error to the fast transform algorithm.

## What the fast algorithm does not change

The FFT computes the same finite coordinate map as the DFT. It does not remove Gibbs overshoot from a selected trigonometric reconstruction, resolve aliases already present in samples, or prove that a numerical PDE is stable. Zero padding can display an existing polynomial on a finer grid or prevent convolution wrap, depending on how it is used; it does not create missing information about an arbitrary original signal.

The exact arithmetic theorem also does not say that stored floating-point roots and operations are exact. A practical error statement must specify root approximation, arithmetic bounds and the norm in which input and output are compared. Parseval's scaled-unitary identity gives the finite map's conditioning in Euclidean norm, while rounding accumulated by a particular implementation is a separate analysis. These distinctions allow one to explain the algorithm without turning a timing result or a plausible spectrum plot into a correctness claim.

## Real input, conjugate pairs and the Nyquist endpoint

If every xj is real, conjugating the forward sum gives XN−k=conjugate Xk, with indices read modulo N. The zero-frequency coefficient is real. When N is even, the coefficient at k=N/2 is also real because its exponential is (−1)^j. These are self-paired indices; every other nonzero frequency has a distinct conjugate partner.

For even N the real inverse can therefore be written

\[
 x_j=\frac1N\left[X_0+X_{N/2}(-1)^j+
 2\operatorname{Re}\sum_{k=1}^{N/2-1}X_ke^{2\pi ijk/N}\right].
\]

For odd N omit the Nyquist term and sum pairs through (N−1)/2. This accounts for exactly N real degrees of freedom: two for each complex pair and one for each self-paired real coefficient. It is a finite identity, independent of how the DFT was computed.

For a cosine of amplitude A at a nonzero non-Nyquist grid frequency, the two coefficients have magnitude NA/2. A one-sided amplitude display therefore uses 2|Xk|/N at those indices. At zero and the even-grid Nyquist index it uses |Xk|/N, because no second distinct partner exists. Doubling those endpoint amplitudes would double-count them.

The phase issue at Nyquist is genuine. The sampled signal Acos(πj+φ) equals Acosφ times (−1)^j because sinπj=0. Its DFT coefficient is NAcosφ, and the samples cannot recover the separate sine-phase component. This is not numerical roundoff or an FFT defect; it is information absent from that grid. The continuous sampling chapter states the function-class restrictions under which a bandlimited reconstruction is nevertheless unique.

Parseval has the same pairing weights: the sample energy is one over N times the zero and Nyquist squared coefficients plus twice the interior paired squared magnitudes. A real-signal spectrum can thus store one coefficient from each pair without discarding energy information, provided the pairing and endpoint conventions are retained. Such storage is a representation choice, not a new convergence theorem about a continuous underlying waveform.

These formulas explain common amplitude mistakes in comparing a continuous Fourier coefficient, an unscaled DFT output and a one-sided plotted spectrum. The forward normalization fixes Xk, the real pairing fixes the factor two, and the sample spacing fixes the physical frequency unit. Each factor has a separate mathematical source.

## Transferred measure-based companion

The following original sections have moved from the Real Analysis Fourier continuation. Their Lebesgue L2 and null-equivalence formulation assumes the measure and density inputs stated in the retained text; the main elementary/completion proofs above retain their own preparation. Original section numbers are preserved.

## 12. Sampling, aliasing, and the discrete transform

Sampling a periodic function at \(M\) equally spaced points cannot distinguish frequencies whose indices differ by a multiple of \(M\):

\(e^{\mathrm{i}(n+M)2\pi j/M}=e^{\mathrm{i}n2\pi j/M}\).

This is aliasing. The discrete Fourier transform returns coefficients in a finite frequency window, but high frequencies can fold into that window unless the signal is bandlimited or filtered before sampling.

Quadrature error, truncation error, and sampling aliasing are different. A graph of reconstructed samples may look exact at grid points while being wrong between them.

If a trigonometric polynomial is known in advance to contain only a sufficiently narrow window of modes, enough equally spaced samples determine it exactly. Without that bandlimit, the discrete coefficient at an index receives contributions from all continuous frequencies congruent to it modulo \(M\), whenever the necessary series interchange is valid. This **aliasing sum** precisely describes high-frequency folding.

For example, if the allowed indices are \(-N,\ldots,N\), then \(M\ge 2N+1\) equally spaced samples make these residue classes distinct modulo \(M\); finite discrete orthogonality recovers every coefficient exactly. If \(M\le 2N\), at least two allowed indices collide modulo \(M\), so uniqueness is impossible without extra information. This concerns exact samples of an exactly bandlimited trigonometric polynomial; noise and quadrature introduce separate questions.

Increasing the partial-sum degree \(N\) and increasing the sample count \(M\) address different errors. A high-degree reconstruction computed from too few points may be less reliable because its coefficient estimates have already aliased. Reproducible experiments should report both parameters and any antialiasing filter.

## Exercises

### Exercise 11.1 {#discrete-fourier-transform-fft-ex-1}

Find the two-point forward and inverse transforms.

<details><summary>Hint 1</summary>
The primitive root is minus one.
</details>
<details><summary>Hint 2</summary>
The inverse divides the sum and difference by two.
</details>
<details><summary>Solution</summary>
For input \((a,b)\), the forward transform is \((a+b,a-b)\). Given outputs \((A,B)\), the inverse is \(((A+B)/2,(A-B)/2)\). This is the first butterfly and checks both the sign and scaling convention. At length one, both transforms are simply the original one-entry vector.
</details>

### Exercise 11.2 {#discrete-fourier-transform-fft-ex-2}

Compute the DFT of an all-ones length-N vector.

<details><summary>Hint 1</summary>
Each output is a geometric root sum.
</details>
<details><summary>Hint 2</summary>
Only the zero bin has ratio one throughout.
</details>
<details><summary>Solution</summary>
The zero bin is N and every other bin is zero by finite orthogonality. The normalized projection coefficient is therefore one at zero. This distinguishes the unscaled DFT output from the constant function's normalized Fourier coefficient and prevents an extra factor N from being introduced into inversion.
</details>

### Exercise 11.3 {#discrete-fourier-transform-fft-ex-3}

Find the transform of a vector equal to one at index r and zero elsewhere.

<details><summary>Hint 1</summary>
Only one summand survives in each output.
</details>
<details><summary>Hint 2</summary>
Its phase depends on both the input location and output bin.
</details>
<details><summary>Solution</summary>
The output is \(X_k=\omega_N^{rk}\) for every k, with modulus one. Thus moving a single impulse changes phases but leaves the magnitude spectrum unchanged. Parseval gives input energy one and output squared-modulus sum N, consistent with its factor one over N.
</details>

### Exercise 11.4 {#discrete-fourier-transform-fft-ex-4}

Why must the odd branch change sign in the second butterfly output?

<details><summary>Hint 1</summary>
Compare the twiddle at k and k+N/2.
</details>
<details><summary>Hint 2</summary>
The N-th root raised to N/2 equals minus one.
</details>
<details><summary>Solution</summary>
The subtransform indices agree modulo N/2, so E and O retain their values. But \(\omega_N^{k+N/2}=\omega_N^k\omega_N^{N/2}=-\omega_N^k\). Therefore the odd contribution is subtracted in the second output. Using the same plus sign twice would duplicate an output and destroy invertibility.
</details>

### Exercise 11.5 {#discrete-fourier-transform-fft-ex-5}

At length eight, how many recursion levels and butterflies per level occur in the stated radix-two count?

<details><summary>Hint 1</summary>
Eight equals two cubed.
</details>
<details><summary>Hint 2</summary>
Every level processes eight entries in pairs.
</details>
<details><summary>Solution</summary>
There are three levels and four butterflies per level. The displayed upper count is twelve complex twiddle multiplications and twenty-four complex additions/subtractions. Trivial twiddles can reduce a specialized arithmetic count, but these bounds establish the N log N recurrence without making any measured runtime claim.
</details>

### Exercise 11.6 {#discrete-fourier-transform-fft-ex-6}

Why is length twelve not covered by recursion down to one using only the stated radix-two rule?

<details><summary>Hint 1</summary>
Successive halvings reach six and then three.
</details>
<details><summary>Hint 2</summary>
The odd length three is not the base case one.
</details>
<details><summary>Solution</summary>
The recursion reaches an odd subtransform of length three, where an even/odd split does not produce two equal half-length transforms. Thus this particular proof and algorithm require a power of two. One can use another factorization or a direct length-three transform, but that is a different extended algorithm. Padding to sixteen changes the transform length and grid.
</details>

### Exercise 11.7 {#discrete-fourier-transform-fft-ex-7}

Find the smallest power-of-two padding length that avoids linear-convolution wrap for lengths five and four.

<details><summary>Hint 1</summary>
The output length is p+q minus one.
</details>
<details><summary>Hint 2</summary>
Choose a power of two at least that value.
</details>
<details><summary>Solution</summary>
The linear convolution length is eight, so padding each input to length eight suffices and is the smallest allowed power of two. A length-four transform would fold distinct output indices together. Padding is selected from support length, not from a claim that the original shorter sample grid has gained new measurements.
</details>

### Exercise 11.8 {#discrete-fourier-transform-fft-ex-8}

Compare the linear and length-two circular convolutions of \((1,2)\) and \((1,1)\).

<details><summary>Hint 1</summary>
Multiply their coefficient polynomials for the linear result.
</details>
<details><summary>Hint 2</summary>
Reduce output indices modulo two for the circular result.
</details>
<details><summary>Solution</summary>
The polynomial product is \((1+2z)(1+z)=1+3z+2z^2\), giving linear output \((1,3,2)\). Modulo index two, the z-squared contribution returns to the constant bin, giving \((3,3)\). The DFT product theorem computes the circular version unless enough zero padding has first removed this folding.
</details>

### Exercise 11.9 {#discrete-fourier-transform-fft-ex-9}

For even N, explain why the positive and negative Nyquist modes cannot be distinguished on the sample grid.

<details><summary>Hint 1</summary>
Evaluate both exponentials at 2pi j/N.
</details>
<details><summary>Hint 2</summary>
Their values are the same alternating signs.
</details>
<details><summary>Solution</summary>
Both give \(e^{i\pi j}=e^{-i\pi j}=(-1)^j\). Their sine difference is zero at every sample, so those samples do not determine a unique sign or phase component for that boundary frequency. A chosen half-open frequency band resolves a representation convention, not information absent from the measurements.
</details>

### Exercise 11.10 {#discrete-fourier-transform-fft-ex-10}

Under the absolute-convergence hypothesis, derive the alias formula's surviving coefficient indices.

<details><summary>Hint 1</summary>
Insert the continuous expansion in X_k/N.
</details>
<details><summary>Hint 2</summary>
Use root orthogonality on n minus k.
</details>
<details><summary>Solution</summary>
The normalized sample average of each frequency is one exactly when n minus k is divisible by N and zero otherwise. Therefore only indices \(n=k+rN\), for integer r, remain. Absolute convergence justifies inserting the sum and gives convergence of the surviving subseries. Without it the formal substitution needs another theorem.
</details>

### Exercise 11.11 {#discrete-fourier-transform-fft-ex-11}

Show the inverse can be computed by conjugating a forward transform and dividing by N.

<details><summary>Hint 1</summary>
Conjugation reverses the forward exponential sign.
</details>
<details><summary>Hint 2</summary>
Retain the inverse's scaling factor after conjugation.
</details>
<details><summary>Solution</summary>
The j-th component of the conjugated forward transform of \(\overline X\) is \(\sum_kX_k\omega_N^{-jk}\). Dividing by N is exactly the inverse formula. Omitting that division produces N times the input, and changing only a twiddle sign without tracking the convention can instead compute a different transform.
</details>

### Exercise 11.12 {#discrete-fourier-transform-fft-ex-12}

Why does exact finite DFT inversion not prove unique reconstruction of a continuous function from those samples?

<details><summary>Hint 1</summary>
The invertible map's domain is a length-N vector space.
</details>
<details><summary>Hint 2</summary>
Different continuous functions can agree at all N sample points.
</details>
<details><summary>Solution</summary>
Inversion recovers the original finite vector exactly. Sampling is a separate map from an infinite function class to that vector, and it is not injective without restrictions: zero and \(\sin(Nx)\) have identical samples on the stated grid, while one and \(\cos(Nx)\) do too. A band limit or another model assumption is required before finite inversion becomes a continuum uniqueness theorem.
</details>

## Sources and scope

This is original exposition and supported exercise development, with the retained Quarto transform and Atlas sampling discussions as local lineage. Stein–Shakarchi and Folland are syllabus benchmarks. The radix-two power-of-two hypothesis, forward sign and inverse normalization are explicit. No executable implementation, runtime timing or floating-point error claim is supplied by the exact arithmetic proof.

## Summary

Finite root orthogonality gives DFT inversion, Parseval and circular convolution. Splitting even and odd inputs yields the radix-two butterfly and a proved N log N arithmetic count for power-of-two lengths. Padding prevents convolution wrap when support lengths justify it. Sampling introduces aliasing independently of the algorithm, while normalized discrete coefficients require an explicit factor one over N. FFT evaluation changes computational cost; it does not change Gibbs, missing sample information or the mathematical operator being computed.
