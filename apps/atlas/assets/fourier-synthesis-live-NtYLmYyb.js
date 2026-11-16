var e=`---
id: visual-lab-fourier-synthesis
title: "Fourier Synthesis Studio"
level: undergraduate
estimated_minutes: 40
license: CC BY-SA 4.0
---

# Fourier Synthesis Studio

Compare a periodic target with a finite trigonometric reconstruction, its signed coefficient spectrum and a movable probe. Choose square, sawtooth or triangle data; select a Dirichlet sum or Fejér mean; then vary the maximum harmonic. The plot and tables show the same finite calculation. Optional motion sweeps the probe across the fixed reconstruction; it does not change the signal or add harmonics.

[Open the Fourier synthesis laboratory](#/labs?lab=visual-lab-fourier-synthesis).

The primary field is Fourier and harmonic analysis. Begin with [Periodic Functions and Trigonometric Series](../books/fourier-analysis/periodic-functions-trigonometric-series.md) for periods and real/complex notation. [Fourier Coefficients and Orthogonal Projection](../books/fourier-analysis/fourier-approximation-and-density.md) proves the coefficient and finite-energy identities. The convergence claims below come from the linked chapters and their hypotheses, rather than from the finite plotting grid.

## The three declared signals

All targets are real, odd and 2π-periodic, so their constant and cosine coefficients vanish.

- The square wave is sign(sin x), with value zero at its jumps. Its sine coefficients are 4/(πk) for odd k and zero for even k.
- The sawtooth is x/π for −π<x<π, with value zero at the identified endpoints. Its sine coefficients are 2(−1)^{k+1}/(πk).
- The triangle is (2/π)arcsin(sin x). Its sine coefficients are 8(−1)^{(k−1)/2}/(π²k²) for odd k and zero for even k.

At a jump, zero is the average of the two one-sided limits for these particular targets. Changing an isolated assigned value would not change the coefficients or any integral energy. The triangle is continuous and piecewise linear, with corners. That particular regularity explains its quadratic coefficient decay; continuity alone gives no universal 1/k² decay theorem for arbitrary periodic functions.

## N means maximum harmonic

The control N ranges from 1 to 63 and retains all harmonic indices 1 through N, including indices whose coefficient is zero. The Dirichlet reconstruction is

\\[
 S_N(x)=\\sum_{k=1}^{N}b_k\\sin(kx).
\\]

For the square wave this is equivalently

\\[
 S_N(x)=\\frac4\\pi\\sum_{\\substack{1\\le k\\le N\\\\k\\text{ odd}}}
 \\frac{\\sin(kx)}k.
\\]

Thus N=5 contains three nonzero square-wave terms, at frequencies 1, 3 and 5. It does not contain terms through frequency 11. The spectrum table lists the signed coefficient, its summation weight and the amplitude actually used. The plot displays the target, reconstruction and probe.

## Dirichlet convergence and Gibbs

The three targets have finitely many C1 pieces with finite one-sided limits. The [Dirichlet-kernel chapter](../books/fourier-analysis/dirichlet-kernel-pointwise-convergence.md) proves convergence to the one-sided average at jumps and to the value at continuity points under that scope. Away from jumps it also proves the local uniform conclusion stated there.

For square and sawtooth Dirichlet sums, a narrowing oscillation persists beside each jump. The [Gibbs chapter](../books/fourier-analysis/gibbs-phenomenon.md) proves the local sine-integral profile and its leading overshoot, approximately 0.08949 times the **full jump height**. A square wave going from −1 to 1 has jump height two, so the limiting excess above one is about 0.17898. This is an asymptotic profile statement; a finite sampled maximum is not the exact limiting constant.

More harmonics can reduce a mean-square error while leaving this nonzero relative peak. Continuous finite trigonometric sums cannot converge uniformly on the whole circle to a discontinuous target. The finite plot illustrates that distinction; it cannot prove a convergence theorem for an arbitrary unspecified signal.

## Fejér averaging changes the approximation

The Fejér method uses weights

\\[
 w_{N,k}=1-\\frac{k}{N+1},\\qquad
 \\sigma_N(x)=\\sum_{k=1}^{N}w_{N,k}b_k\\sin(kx)
 =\\frac1{N+1}\\sum_{j=0}^{N}S_j(x).
\\]

It averages partial sums of orders zero through N. The [Fejér chapter](../books/fourier-analysis/fejer-means-approximate-identities.md) proves that its convolution kernel is nonnegative and has unit mass. Consequently it preserves the range [−1,1] for these targets and has no square-wave overshoot. It converges uniformly for the continuous triangle; for the piecewise targets it converges to the one-sided average at jumps under the chapter's stated hypotheses.

The persistent Gibbs overshoot described above belongs to the Dirichlet method. Switching to Fejér changes the method and its positivity properties. It does not remove the fact that no sequence of continuous approximants can converge uniformly to a discontinuous square wave on the whole circle.

## Exact finite energy and sampled error

For the finite reconstruction pN=Σw_{N,k}b_k sin(kx), orthogonality gives

\\[
 E(p_N)=\\frac1{2\\pi}\\int_{-\\pi}^{\\pi}|p_N(x)|^2dx
 =\\frac12\\sum_{k=1}^{N}(w_{N,k}b_k)^2.
\\]

The target energies in this normalization are one for the square wave and one third for both sawtooth and triangle. The displayed energy percentage is the finite reconstruction energy divided by target energy. It comes from the coefficient identity, evaluated in floating arithmetic; it is not an integral estimated from the drawn curve.

For a Dirichlet projection, the squared mean-square residual equals target energy minus reconstruction energy. For a Fejér mean, the coefficients are attenuated, so that complement identity fails. Its squared residual instead is

\\[
 E(f)-\\sum_{k=1}^{N}w_{N,k}b_k^2
 +\\frac12\\sum_{k=1}^{N}w_{N,k}^2b_k^2.
\\]

The [Mean-Square Completion and Parseval chapter](../books/fourier-analysis/mean-square-parseval.md) proves the full energy and recovery framework. A reconstruction's own energy and its approximation error are different quantities.

The RMS error shown by the laboratory uses 4,096 equally spaced cell midpoints. It is a sampled approximation to the square-mean error, not its exact analytic value. The drawn curve uses 601 points; a separate table shows nine probe locations and the spectrum table shows up to twelve nonzero coefficients. None of these fixed grids certifies a continuous maximum or the exact Gibbs peak.

## Short investigations with answers

**1. How many nonzero square-wave terms are used at N=10?** Five: frequencies 1, 3, 5, 7 and 9. Frequency ten is included in the index range but has coefficient zero.

**2. Why can Fejér reconstruction energy be smaller without its error being the complementary fraction?** It attenuates retained coefficients. The difference from the target still has components along those same modes, so the orthogonal-projection Pythagorean complement does not apply.

**3. Does the triangle's faster coefficient decay prove every continuous signal behaves similarly?** No. Its explicit continuous piecewise-linear structure yields the displayed 1/k² coefficients. General continuity is a weaker hypothesis.

**4. Does a peak disappearing from a fixed plotting grid prove Gibbs overshoot vanished?** No. The peak moves toward the jump on a shrinking spatial scale. The Dirichlet theorem and local-profile proof, rather than a fixed grid, determine the limiting behavior.

## Controls and interpretation boundary

Native labelled controls select signal, summation method, maximum harmonic and probe position. Motion starts paused and is disabled under reduced-motion preferences. Arrow keys move the focused plot's probe, Home/End select −π/π, and Page Up/Down change N. Signed coefficients, summation weights, target values and errors remain available in text tables when Canvas is unavailable.

The studio evaluates declared finite formulas and sampled indicators. The linked primary chapters supply the exact hypotheses and proofs for projection, jump averages, positive averaging, mean-square convergence and Gibbs scaling.
`;export{e as default};