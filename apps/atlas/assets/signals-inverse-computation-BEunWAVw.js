var e=`---
parent_id: book-applied-modeling-proof-reference
chapter_id: signals-inverse-computation
title: "Signals, Sampling, and Computational Inversion"
level: advanced-undergraduate
estimated_minutes: 110
license: CC BY-SA 4.0
status: draft
---

# Signals, Sampling, and Computational Inversion

## Dependencies and aims

This chapter assumes Fourier analysis, linear algebra, and numerical methods. It connects sampling to an observation map, then audits reconstruction, aliasing, conditioning, and regularization.

## Ideal sampling

A signal band-limited to frequencies $|f|≤B$ can be reconstructed from uniform samples at frequency greater than $2B$ under the sampling theorem's integrability and convention hypotheses. Sampling multiplies by an impulse train in time, which replicates the Fourier spectrum. If copies do not overlap, an ideal low-pass filter isolates one copy and sinc interpolation reconstructs the signal.

At or below the boundary, distinct continuous sinusoids can share the same samples. For integer sample times, $\\cos(2πft)$ and $\\cos(2π(f+k)t)$ agree for integer $k$; without a bandwidth restriction the inverse is non-identifiable.

## Real measurement boundary

Finite windows cause spectral leakage because multiplication by a window convolves spectra. Real anti-alias filters have transition bands. Clock jitter and quantization add errors. A discrete Fourier transform analyzes a finite sequence and periodic-extension convention; it is not automatically the continuous spectrum.

## Linear reconstruction

**Definition 14.1 (linear observation model).** Write $y=Ax+ε$. Rank deficiency means non-identification. Small singular values mean instability. The pseudoinverse gives minimum-norm least squares, a choice among possible solutions.

Tikhonov reconstruction minimizes

$\\lVert Ax-y\\rVert²+α\\lVert Lx\\rVert²$.

With $L=I$, singular component filter is $σ/(σ²+α)$. With difference $L$, smoothness rather than small amplitude is preferred. Always report data residual, penalty norm, and sensitivity across $α$.

## Resolution and uncertainty

For linear estimator $\\hat{x}=Ry$, resolution matrix $RA$ describes how true components blur into estimates. Identity resolution is impossible in nonidentified directions. Noise covariance propagates as $RΣ_εR^{\\mathsf T}$ under a correct covariance model, but this excludes model discrepancy and regularization bias.

### Worked two-frequency alias

Sampling $x(t)=\\cos(2π·0.2t)$ at integer times gives the same sequence as frequency $0.8$, because $\\cos(2π(1-0.2)n)=\\cos(2πn-0.4πn)=\\cos(0.4πn)$. A declared band below 0.5 cycles/sample selects 0.2. The samples alone do not.

## Numerical audits

Use unitary or declared DFT normalization, specify frequency units, and test Parseval's identity under that normalization. Zero padding interpolates a displayed discrete spectrum; it does not add measurement resolution. Window choice trades main-lobe width against sidelobes.

## The observation operator is the model

It is useful to separate three objects that are often collapsed into the word
"signal": a physical field $x$, the instrument map $A$, and the recorded array
$y$. Even noiseless data obey $y=Ax$, not $y=x$. A camera integrates over a
pixel area, a spectrometer convolves with a line-spread function, and a sensor
may average over an exposure interval. Discretizing first and pretending that
the resulting matrix is exact hides both approximation error and the units of
its columns.

For a continuous kernel $k_i$, a typical measurement is

$y_i = \\int k_i(t)x(t) dt + \\epsilon_i$.

Choosing basis functions $\\phi_j$ and writing $x=\\sum_{j} \\theta_j \\phi_j$ gives
$A_{ij}=\\int k_i \\phi_j$. Thus changing the basis changes both the parameter
coordinates and the regularizer. A penalty $\\lVert \\theta\\rVert^2$ is not
coordinate-free: rescaling a basis function changes its apparent cost.

### Worked singular-value audit

Let $A=\\operatorname{diag}(1,0.01)$ and suppose $y=(1,0.01)$. The exact inverse returns
$x=(1,1)$. If only the second measurement changes by $0.002$, then the inverse
returns $(1,1.2)$: a two-tenths-percent change relative to the first datum has
created a twenty-percent error in the second component. With identity
Tikhonov regularization and $\\alpha=0.01$, the filter factors are
$1/1.01$ and $0.01/0.0101$; the estimate is approximately $(0.990,0.0099)$.
Variance is controlled, but the second component is now strongly biased. The
right conclusion is not that regularization recovered the hidden component;
it declared that this component would be suppressed unless the data were much
more informative.

## Discrete Fourier conventions

For $N$ samples, use

$X_k=\\sum_{n=0}^{N-1} x_n \\exp\\left(-2 \\pi i kn/N\\right)$,

with inverse $x_n=N^{-1}\\sum_{k} X_k \\exp\\left(2 \\pi i kn/N\\right)$. Under this convention,
Parseval reads $\\sum_{n} |x_n|^2=N^{-1}\\sum_{k} |X_k|^2$. The bin $k$ corresponds to
$k f_s/N$ before the usual wrap of bins above $N/2$ to negative frequencies.
For even $N$, the Nyquist bin is its own negative-frequency partner. These
details matter when constructing one-sided power summaries: doubling both the
DC and Nyquist bins is an error.

### Worked leakage calculation

For $x_n=\\exp\\left(2 \\pi i \\nu n/N\\right)$, the DFT at bin $k$ is a geometric sum

$X_k=(1-\\exp(2 \\pi i(\\nu-k)))/(1-\\exp(2 \\pi i(\\nu-k)/N))$.

If $\\nu$ is an integer, all energy lies in one bin. Otherwise its magnitude is
a sampled Dirichlet kernel and is nonzero across many bins. Leakage is not
random noise; it is the exact consequence of observing a non-bin-centered
sinusoid through a rectangular window. A taper changes the kernel, reducing
distant sidelobes at the price of widening the central lobe.

## Choosing and checking regularization

If $A=U \\Sigma V^{\\mathsf T}$ and $L=I$, the Tikhonov estimate is

$x_\\alpha=\\sum_{j} [\\sigma_j/(\\sigma_j^2+\\alpha)] (u_j^{\\mathsf T} y) v_j$.

The residual generally grows with $\\alpha$, while the solution norm shrinks.
An L-curve, cross-validation score, discrepancy principle, or Bayesian model
can help choose $\\alpha$, but each adds assumptions. In the discrepancy
principle, for example, the noise scale must already be credible. Trying many
values on the final evaluation data and reporting only the most attractive
reconstruction is unrecorded model selection.

An audit should include at least one exact case, one null-space perturbation,
one noise perturbation, and one resolution calculation. If $z \\in \\operatorname{ker} A$, then
$x$ and $x+z$ produce identical ideal data. No optimizer, neural network, or
plot removes that fact; recovery can only come from a restriction that rules
out one of the candidates.

## Common failure modes

- **Nyquist without a model:** a sample rate alone does not prove the unknown
  signal was band-limited before measurement.
- **Bin spacing as physical resolution:** zero padding creates more plotted
  points but does not lengthen the observation window.
- **Regularization as discovery:** a smooth answer may be useful, but the
  smoothness comes partly from the penalty.
- **Residual worship:** an interpolating solution can fit noise or occupy an
  unstable inverse direction.
- **Normalization drift:** mixing DFT conventions silently changes energy and
  amplitude claims.
- **Circular validation:** tuning and assessing on the same synthetic truth
  understates uncertainty.

## Some summaries are identifiable even when the whole signal is not

Failure to recover every component does not imply that every question about the signal is unanswerable. In the noiseless finite-dimensional model, a linear summary $\\ell^Tx$ is determined by the data exactly when $\\ell$ belongs to the range of $A^T$. If $\\ell=A^Tz$, the summary equals $z^Ty$ for every compatible signal. Conversely, if the summary is constant over every pair of compatible signals, it must vanish on every null-space difference. Thus $\\ell$ is orthogonal to $\\ker A$, which is the range of $A^T$ by the fundamental subspace theorem.

This proves an exact identification criterion for a specified summary. With additive error bounded in Euclidean norm, the estimator $z^Ty$ has error at most $\\|z\\|$ times that bound. Different representing vectors can have different noise sensitivity; choosing a small-norm representation improves this particular worst-case guarantee. If the summary direction is only approximately in the row space, its remaining component requires a bound on the unknown signal. It cannot be discarded merely because it looks small in coefficient coordinates.

**Worked example: one sum and two unknowns.** A sensor records the sum of two concentrations. Neither concentration is individually identified: adding any amount to one and subtracting it from the other leaves the reading unchanged. Their total is exactly identified, and their difference is not. If both concentrations are known nonnegative, a positive sum bounds each between zero and the total but still does not determine either one. The domain restriction converts non-identification into an interval, rather than creating a unique answer.

## Instrument blur can make sampling assumptions false

A sensor averaging over an exposure interval applies a box kernel before sampling. A continuous sinusoid is multiplied by the kernel's frequency response, which has zeros at certain nonzero frequencies. At such a zero, the instrument erases that sinusoid completely even before any samples are stored. Increasing the sampling rate cannot recover a component removed by the instrument map. One must distinguish inadequate sampling from a measurement operator with its own null space.

Conversely, an analogue low-pass filter can deliberately suppress frequencies that would otherwise alias. Its transition band and calibration determine how closely the measured signal satisfies a band-limit approximation. The ideal sampling theorem applies to the filtered signal under its stated assumptions. Recovering the original unfiltered field is a further inverse problem that may amplify noise severely near frequencies where the filter response is small.

This distinction also matters for units. A recorded exposure integral and an exposure average differ by the exposure duration. Their observation rows have different scales, and a noise variance in one convention must be converted before it is used in a weighted residual. A visually similar array can therefore represent a different measurement contract.

## General regularisation has an exact uniqueness criterion

For a positive regularisation coefficient, consider the quadratic residual plus the squared norm of $Lx$. Its Hessian, up to a positive factor, is $A^TA+\\alpha L^TL$. Its quadratic form on a vector is the sum of two nonnegative squared norms. It vanishes exactly when that vector belongs to both null spaces. Hence the objective is strictly convex and has a unique minimiser precisely when those null spaces intersect only at zero. In that case the positive-definite normal matrix also proves existence by solving the stationary equations.

If the intersection contains a nonzero vector, moving along it changes neither the observations nor the penalty. No value of the positive coefficient resolves that ambiguity. For example, a first-difference penalty leaves constant signals unpenalised. If the observations also annihilate constants, an arbitrary constant offset remains unidentified and unregularised. Adding a mean observation, imposing a justified reference level, or penalising that mode changes the problem and can remove the ambiguity. Merely increasing the smoothness penalty cannot do so.

The appropriate output is consequently a statement about the identifiable quantities, the chosen representative, and the assumptions controlling unobserved directions. A low residual, a smooth picture, and a unique optimiser are three separate properties. The linear-algebra arguments above show exactly when they coincide and when they do not, without attributing information to the reconstruction method that the instrument never supplied.

## Exercises

<a id="answers"></a>

### Exercise 1
<a id="signals-inverse-computation-ex-1"></a>

Construct two distinct nonnegative frequencies below 10 Hz whose real
   cosines have identical samples at rate 10 Hz. State the additional band
   restriction that selects one.

<details>
<summary>Hint 1</summary>

Use the cosine identity relating a frequency to the sample-rate complement.

</details>
<details>
<summary>Hint 2</summary>

A strict Nyquist-band restriction removes this particular ambiguity.

</details>
<details>
<summary>Full solution</summary>

Frequencies 2 Hz and 8 Hz give $\\cos(2 \\pi(2)n/10)=\\cos(2 \\pi(8)n/10)$ because 8 is $10-2$. Declaring support in $[0,5)$ Hz selects 2 Hz; the samples do not establish that declaration.

</details>

### Exercise 2
<a id="signals-inverse-computation-ex-2"></a>

Show directly that sampling a complex exponential at rate $f_s$ cannot
   distinguish frequencies $f$ and $f+k f_s$ for integer $k$.

<details>
<summary>Hint 1</summary>

Substitute sampled times n over the sample rate into the exponential.

</details>
<details>
<summary>Hint 2</summary>

The extra factor has an integer multiple of two pi in its phase.

</details>
<details>
<summary>Full solution</summary>

At times $n/f_s$, the ratio is $\\exp\\left(2 \\pi i k f_s n/f_s\\right)=\\exp\\left(2 \\pi i kn\\right)=1$, so every sample agrees.

</details>

### Exercise 3
<a id="signals-inverse-computation-ex-3"></a>

Under the stated DFT convention, compute the transform of $(1,1,1,1)$ and
   verify Parseval's identity.

<details>
<summary>Hint 1</summary>

Compute the zero-frequency coefficient first.

</details>
<details>
<summary>Hint 2</summary>

The remaining roots-of-unity sums vanish under the declared normalization.

</details>
<details>
<summary>Full solution</summary>

Only $X_0=4$ is nonzero. Hence $\\sum|x_n|^2=4$ and $N^{-1}\\sum|X_k|^2=16/4=4$.

</details>

### Exercise 4
<a id="signals-inverse-computation-ex-4"></a>

Compute the DFT of $(1,-1,1,-1)$. Identify the physical frequency when the
   sample rate is 8 Hz.

<details>
<summary>Hint 1</summary>

Recognise the alternating sign sequence as a bin-centred sinusoid.

</details>
<details>
<summary>Hint 2</summary>

Translate its bin index using the sample interval rather than a unitless index alone.

</details>
<details>
<summary>Full solution</summary>

Only $X_2=4$ is nonzero. Bin 2 represents $2(8/4)=4$ Hz, the Nyquist frequency.

</details>

### Exercise 5
<a id="signals-inverse-computation-ex-5"></a>

For a bin-centered complex sinusoid, use the geometric-series formula to
   prove that every other DFT bin vanishes.

<details>
<summary>Hint 1</summary>

Factor the DFT sum into a finite geometric progression.

</details>
<details>
<summary>Hint 2</summary>

A nontrivial root of unity sums to zero across a full record.

</details>
<details>
<summary>Full solution</summary>

For bin $k \\neq \\nu mod N$, the ratio $r=\\exp(2 \\pi i(\\nu-k)/N)$ satisfies $r^N=1$ but $r\\neq1$; therefore $(1-r^N)/(1-r)=0$.

</details>

### Exercise 6
<a id="signals-inverse-computation-ex-6"></a>

Explain why a finite rectangular observation window produces leakage for a
   non-bin-centered sinusoid even in exact arithmetic.

<details>
<summary>Hint 1</summary>

A noninteger number of cycles does not match the periodic extension at the endpoints.

</details>
<details>
<summary>Hint 2</summary>

The same finite geometric sum then spreads amplitude across several bins.

</details>
<details>
<summary>Full solution</summary>

Windowing multiplies the infinite signal by a rectangle, so its spectrum is convolved with the rectangle's Dirichlet/sinc-like spectrum. Unless the tone lands on a bin, that kernel is sampled away from its zeros.

</details>

### Exercise 7
<a id="signals-inverse-computation-ex-7"></a>

Let $A=\\begin{pmatrix}1&1\\\\2&2\\end{pmatrix}$. Find its rank, null space, and all exact solutions to
   $Ax=(3,6)^{\\mathsf T}$.

<details>
<summary>Hint 1</summary>

The two columns are equal.

</details>
<details>
<summary>Hint 2</summary>

Parameterise the observed coordinate sum and its invisible difference.

</details>
<details>
<summary>Full solution</summary>

Rank is one and $\\operatorname{ker} A=\\operatorname{span}{(1,-1)}$. The equation is $x_1+x_2=3$, so all solutions are $(t,3-t)$.

</details>

### Exercise 8
<a id="signals-inverse-computation-ex-8"></a>

For $A=\\operatorname{diag}(1,0.01)$, find the operator norm of $A^{-1}$ and compare the
   amplification of errors parallel to the two coordinate axes.

<details>
<summary>Hint 1</summary>

Inspect the two diagonal singular values.

</details>
<details>
<summary>Hint 2</summary>

The inverse norm is governed by the smaller singular value.

</details>
<details>
<summary>Full solution</summary>

$\\lVert A^{-1}\\rVert_2=100$. First-axis errors are unchanged; second-axis errors are multiplied by 100.

</details>

### Exercise 9
<a id="signals-inverse-computation-ex-9"></a>

Derive the Tikhonov normal equations and state the exact condition for a
   unique minimizer when $\\alpha>0$.

<details>
<summary>Hint 1</summary>

Differentiate the squared residual and squared penalty.

</details>
<details>
<summary>Hint 2</summary>

Uniqueness requires that no nonzero vector evade both the observation and penalty operators.

</details>
<details>
<summary>Full solution</summary>

Differentiation gives $(A^{\\mathsf T} A+\\alpha L^{\\mathsf T} L)x=A^{\\mathsf T} y$. The Hessian is positive definite exactly when $\\operatorname{ker} A intersect \\operatorname{ker} L={0}$.

</details>

### Exercise 10
<a id="signals-inverse-computation-ex-10"></a>

With $A=\\operatorname{diag}(2,0.5)$, $L=I$, $\\alpha=1$, and $y=(2,1)$, compute the
    regularized estimate using filter factors.

<details>
<summary>Hint 1</summary>

Apply the scalar formula sigma over sigma squared plus alpha to each data coordinate.

</details>
<details>
<summary>Hint 2</summary>

Do not confuse the estimate filter with the resolution filter acting on the true state.

</details>
<details>
<summary>Full solution</summary>

The filter factors are $2/(4+1)=0.4$ and $0.5/(0.25+1)=0.4$, giving $x_\\alpha=(0.8,0.4)$.

</details>

### Exercise 11
<a id="signals-inverse-computation-ex-11"></a>

For the setting of Exercise 10, compute the residual vector and penalty
    norm. Explain why reporting only one is incomplete.

<details>
<summary>Hint 1</summary>

Apply A to the regularised estimate before subtracting y.

</details>
<details>
<summary>Hint 2</summary>

The penalty and residual measure different sides of the regularisation compromise.

</details>
<details>
<summary>Full solution</summary>

$Ax-y=(-0.4,-0.8)$ and its squared norm is $0.8$; $\\lVert x\\rVert=\\sqrt{0.8}$. One measures fit and the other the imposed preference, so neither alone describes the tradeoff.

</details>

### Exercise 12
<a id="signals-inverse-computation-ex-12"></a>

Prove that $R=A^+$ gives resolution matrix $RA$ equal to the orthogonal
    projector onto the row space of $A$.

<details>
<summary>Hint 1</summary>

Write the pseudoinverse with the nonzero singular vectors.

</details>
<details>
<summary>Hint 2</summary>

Multiplication leaves a sum of orthogonal projectors onto right singular directions.

</details>
<details>
<summary>Full solution</summary>

From $A=U_r \\Sigma_r V_r^{\\mathsf T}$, $A^+=V_r \\Sigma_r^{-1}U_r^{\\mathsf T}$, hence $A^+A=V_rV_r^{\\mathsf T}$, the projector onto the row space.

</details>

### Exercise 13
<a id="signals-inverse-computation-ex-13"></a>

If $y=Ax+\\epsilon$, $E \\epsilon=0$, and $Cov(\\epsilon)=\\Sigma$, derive the mean
    and covariance of a fixed linear reconstruction $Ry$.

<details>
<summary>Hint 1</summary>

Use linearity of expectation and the covariance transformation rule.

</details>
<details>
<summary>Hint 2</summary>

Treat R as fixed; data-dependent selection of R needs another analysis.

</details>
<details>
<summary>Full solution</summary>

$E[Ry]=RAx$ and $Cov(Ry)=R \\Sigma R^{\\mathsf T}$. Bias relative to $x$ is $(RA-I)x$.

</details>

### Exercise 14
<a id="signals-inverse-computation-ex-14"></a>

Give a two-dimensional example in which the estimator of Exercise 13 has
    low variance but large regularization bias.

<details>
<summary>Hint 1</summary>

Suppress one coordinate almost completely despite a large true signal there.

</details>
<details>
<summary>Hint 2</summary>

Small estimator variance can then coexist with a large mean error.

</details>
<details>
<summary>Full solution</summary>

Take $R=0$. Its variance is zero but its estimate is always zero, so any nonzero $x$ has bias $-x$. Strong Tikhonov shrinkage gives a less extreme version.

</details>

### Exercise 15
<a id="signals-inverse-computation-ex-15"></a>

A length-100 record sampled at 50 Hz is zero-padded to length 1000. Find the
    original observation duration, original Fourier-bin spacing, and plotted
    spacing after padding. Which is the physical resolution scale?

<details>
<summary>Hint 1</summary>

Distinguish record length from the padded display length.

</details>
<details>
<summary>Hint 2</summary>

Padding samples the same finite-window Fourier transform more densely without observing for longer.

</details>
<details>
<summary>Full solution</summary>

Duration is $100/50=2$ seconds and physical bin spacing is $1/2=0.5$ Hz. Padding plots at $50/1000=0.05$ Hz, but 0.5 Hz remains the observation-limited scale.

</details>

### Exercise 16
<a id="signals-inverse-computation-ex-16"></a>

Explain why pasting a continuous-time frequency axis onto a DFT is invalid
    unless the sample interval and periodic-extension convention are declared.

<details>
<summary>Hint 1</summary>

Attach physical time units to the sample index.

</details>
<details>
<summary>Hint 2</summary>

The periodic extension and normalization determine how frequency bins are interpreted.

</details>
<details>
<summary>Full solution</summary>

Bin indices are dimensionless. Their conversion uses $f_s$, while the DFT treats the finite record as one period; omitting either changes the meaning of a peak.

</details>

### Exercise 17
<a id="signals-inverse-computation-ex-17"></a>

Diagnose this claim: "The residual is machine zero, so the recovered image
    is accurate to machine precision." Give two logically distinct failures.

<details>
<summary>Hint 1</summary>

Separate null-space ambiguity from amplification by small singular values.

</details>
<details>
<summary>Hint 2</summary>

Either can make a tiny residual coexist with substantial reconstruction error.

</details>
<details>
<summary>Full solution</summary>

A null-space component may be arbitrarily wrong without changing the residual, and an ill-conditioned inverse may amplify tiny data error. Model discrepancy supplies a third failure.

</details>

### Exercise 18
<a id="signals-inverse-computation-ex-18"></a>

Design a four-case numerical audit for an inverse solver: name the inputs,
    invariants, and expected failure or success in each case.

<details>
<summary>Hint 1</summary>

Choose exact, rank-deficient, noisy and badly conditioned inputs.

</details>
<details>
<summary>Hint 2</summary>

Give each case a known invariant or a controlled failure criterion rather than only a plausible image.

</details>
<details>
<summary>Full solution</summary>

Use (i) a noiseless identified exact case and check recovery, (ii) add a null-space vector and check identical data, (iii) perturb data along a small-singular-value direction and check predicted amplification, and (iv) add modeled noise and check residual/coverage over repeated fixed-seed trials.

</details>

## Project

Create a synthetic signal with two declared spectral components and a fixed
observation interval. Sample it once above and once below the justified Nyquist
rate, then reconstruct by an unregularized and a Tikhonov method. Your report
must include the DFT normalization, physical frequency table, singular values,
residual and penalty norms over at least five $\\alpha$ values, resolution
diagonals, and one seeded noise experiment. Include a null-space or alias pair
that no algorithm can distinguish. Separate theorem-backed conclusions from
empirical observations, give text tables as alternatives to plots, and record
software/version/seed provenance.

## Summary

Sampling, null spaces, conditioning and regularisation constrain what a reconstruction can mean. Report resolution and uncertainty alongside residuals. Financial models next apply the same claim discipline to replication, probabilities and risk.
`;export{e as default};