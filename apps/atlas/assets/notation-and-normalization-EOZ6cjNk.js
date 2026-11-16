var e=`---
parent_id: book-fourier-analysis
matter_id: notation-and-normalization
title: "Notation and Normalization"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Notation and Normalization

The continuous periodic convention is c_n=(1/(2pi)) times the integral of f(x) exp(-inx) over one full period. Its inner product is normalized by the same factor and linear in the first slot. Symmetric raw sums retain integer frequencies from minus N through N.

The unscaled finite DFT is X_k=sum_j x_j exp(-2pi i jk/N). Its inverse has positive exponent and factor 1/N. The corresponding normalized discrete projection coefficient is X_k/N. Discrete Parseval therefore has factor 1/N on the sum of squared unscaled transform moduli.

Circular convolution uses indices modulo the vector length. Linear convolution requires enough zero padding to prevent support overlap after that reduction. Padding changes the grid; it does not turn finite samples into unique measurements of an unrestricted continuous function.

Piecewise C1 in the periodic convergence chapters means a finite partition with continuous first derivatives on pieces and finite one-sided limits of function and derivative. Jump average, local uniform convergence and moving Gibbs profiles have different quantifiers. A Gibbs fraction is measured against the full jump magnitude, not automatically against one plateau height.

On the real line the forward transform is fhat(ξ)=∫f(x)e^−ixξdx, with inverse1/(2π) and unitary normalization1/sqrt(2π). Sampling spacing a has reciprocal angular period2π/a. Finite group transforms are unscaled forward against conjugate characters and divide by group order on inversion. Tempered distributions use a complex-linear bilinear test pairing, so That(φ)=T(φhat).
`;export{e as default};