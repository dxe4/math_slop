var e=`---
id: book-fourier-analysis
title: "Fourier Analysis"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Fourier Analysis {#section-1-fourier-analysis}

An L3–L4 route from periodic coefficients and convergence to transforms, algorithms and applications. The periodic core assumes [Real Analysis](proof-safe-real-analysis.md) through integration, series and uniform convergence. Measure-based extensions add the [Measure and Integration](measure-and-integration.md) preparation stated locally. The finite DFT and radix-two FFT are proved by finite algebra and need no measure theorem.

All fifteen linked chapters are authored manuscript drafts with proofs, at least three worked examples and twelve exercises with staged hints/full solutions each. The original Real Analysis Fourier material has been transferred into the corresponding chapters, with all twenty original exercises and its project retained in chapter 2.  The [source guide](fourier-analysis/back-matter/references-and-source-lineage.md) identifies benchmarks and the transferred original Fourier reading and its preserved identities.

<a id="section-5-reading-route"></a>
## Reading route {#section-7-reading-route}

1. [Periodic Functions and Trigonometric Series](fourier-analysis/periodic-functions-trigonometric-series.md)
2. [Fourier Coefficients and Orthogonal Projection](fourier-analysis/fourier-approximation-and-density.md)
3. [The Dirichlet Kernel and Pointwise Convergence](fourier-analysis/dirichlet-kernel-pointwise-convergence.md)
4. [Fejér Means and Approximate Identities](fourier-analysis/fejer-means-approximate-identities.md)
5. [Mean-Square Convergence and Parseval](fourier-analysis/mean-square-parseval.md)
6. [The Gibbs Phenomenon](fourier-analysis/gibbs-phenomenon.md)
7. [The Fourier Transform on the Real Line](fourier-analysis/fourier-transform-real-line.md)
8. [Inversion and Plancherel](fourier-analysis/inversion-plancherel.md)
9. [Schwartz Space and Convolution](fourier-analysis/schwartz-space-convolution.md)
10. [Poisson Summation and Sampling](fourier-analysis/poisson-summation-sampling.md)
11. [The Discrete Fourier Transform and the Radix-Two FFT](fourier-analysis/discrete-fourier-transform-fft.md)
12. [Uncertainty Principles](fourier-analysis/uncertainty-principles.md)
13. [Tempered Distributions](fourier-analysis/tempered-distributions.md)
14. [Finite Abelian Groups and Dirichlet’s Theorem](fourier-analysis/finite-groups-dirichlet.md)
15. [Heat on the Circle and Equidistribution](fourier-analysis/heat-equidistribution-applications.md)

The available finite/periodic unit begins with periodic functions and coefficients, continues through Dirichlet, Fejér, mean-square convergence and Gibbs, then reaches the discrete transform. Its preparation is stated within those chapters. The [normalization guide](fourier-analysis/front-matter/notation-and-normalization.md) distinguishes continuous coefficients from unscaled DFT outputs. A jump-average theorem, an overshoot profile and a sampling alias are separate conclusions.
`;export{e as default};