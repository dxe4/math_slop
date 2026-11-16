
# Glossary and Theorem Finder

**Fourier coefficient:** a normalized inner product with a periodic exponential. Finite orthogonality determines the best approximation in a chosen band.

**Bessel inequality:** coefficient-square energy cannot exceed the input energy. **Parseval:** equality after a separate completeness/density theorem; orthogonality alone is insufficient.

**Dirichlet kernel:** the signed kernel of raw symmetric partial sums. Its normalized mass is one but its absolute mass grows logarithmically.

**Jump-average theorem:** for the stated piecewise C1 class, a fixed-point Fourier sum tends to the mean of the two side values. Uniform convergence holds on fixed closed arcs away from jumps.

**Gibbs profile:** at distance y/(N+1/2) from an isolated jump, the local limit is midpoint plus jump divided by pi times the sine integral. The limiting excess is approximately 0.08949 of the full jump magnitude.

**DFT:** an invertible finite coordinate transform. **FFT:** an algorithm for that transform; the proved radix-two version requires a power-of-two length.

**Aliasing:** different integer frequencies become identical after reduction modulo the sample count. Exact DFT inversion does not undo information lost by that sampling map.

**Fejér averaging:** chapter4 proves positive mass, approximate identities, range preservation, rates and repeated-filter bias. **Mean-square completion:** chapter5 proves completeness, Riesz–Fischer, Parseval and compact weighted-tail classes.

**Whole-line transform/inversion:** chapters7–8 prove decay, moments, Gaussian regularization and a unitary completed transform. **Schwartz space:** chapter9 proves its topology, convolution bounds and controlled approximation.

**Poisson/sampling:** chapter10 proves reciprocal-lattice identities and completed-band sinc reconstruction, with explicit aliasing instability. **Uncertainty:** chapter12 proves variance/covariance, support, concentration and finite sparsity bounds.

**Tempered distribution:** chapter13 defines continuous test measurements, proves point-support structure and retains singular Fourier constants. **Finite characters/Dirichlet:** chapter14 proves residue selectors and nonvanishing at one through a nonnegative product. **Heat/equidistribution:** chapter15 proves positive circle heat and linear/quadratic/torus averaging, including arithmetic rate hypotheses.

## Counterexample comparison retained from Real Analysis

Gibbs overshoot follows a related geometry: error amplitude persists near a jump, while the region carrying the large error shrinks. Mean-square convergence and visual overshoot can coexist.

The precise claim here concerns symmetric Dirichlet sums of the finite-piece C1 jump class proved in [the Gibbs chapter](gibbs-phenomenon.md). Fejér averaging has a different positive kernel and no overshoot beyond the input range. A shrinking defect can retain its height while its mean-square contribution tends to zero; the chapter gives exact local profiles and a proved norm bound.

The original compact hypothesis-ledger entry is retained here:

| Tempting claim | Missing hypothesis | Stress test |
|---|---|---|
| Fourier convergence is uniform | regularity/summation method | jump plus Gibbs |

### Capstone C: verified approximation pipeline

Select a function and approximate it by Taylor polynomials, a numerical interpolant, and Fourier or Fejér sums where appropriate. Separate truncation, discretization, quadrature, rounding, and sampling errors. State the norm or region for every bound. Include an adversarial function that exposes one method's failure boundary.

This capstone continues the original ANA-CH22-P001 portfolio. Its Taylor and interpolation components use their own hypotheses; the Fourier part must specify symmetric partial sums or Fejér means, the periodic input class and the norm. The original exercise bank remains in the [Real Analysis atlas](../proof-safe-real-analysis/counterexample-atlas-and-capstones.md).
