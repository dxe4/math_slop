var e=`---
parent_id: book-kernels-and-gaussian-processes
matter_id: prerequisite-diagnostic
title: "Prerequisite Diagnostic"
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic

## Positive versus strictly positive covariance

Can two repeated evaluations of one latent function have an invertible two-by-two covariance? Without independent record noise they are the same random variable and their contrast variance is zero. Positive measurement noise can make their observed covariance invertible while the latent covariance remains singular. Review semidefinite matrices before the conditioning chapters.

## Conditional Gaussian residual

Why does subtracting the linear prediction from a Gaussian test vector derive its conditional law? The residual is jointly Gaussian with the observations and has zero cross covariance, hence is independent of them. Its covariance is the Schur subtraction. Only the observed covariance block must be invertible; the full joint covariance can be singular.

## Orthogonal projection

If a function is orthogonal to every data kernel section, what are its values at those inputs? Reproduction makes each value that inner product, hence zero. Projecting onto the finite section span therefore preserves training evaluations while reducing norm. This is the representer argument used in Chapter 4.

## Relative entropy and lower bounds

An ELBO differs from exact log evidence by which term? The divergence from the approximate posterior to the true posterior. It is nonnegative and vanishes only when those distributions agree. A converged optimiser in a restricted family does not automatically remove it.

## A condition number and a residual

Does a small solve residual imply small coefficient error? The error is inverse matrix times residual. A small eigenvalue can amplify the residual strongly, while a query orthogonal to that direction may remain insensitive. Review spectral norms and the distinction between absolute and relative error before Chapter 10.

## Distribution identification

Do two probability laws with the same ordinary mean have to be equal? No: the symmetric law on minus one and plus one and the point mass at zero share mean zero. A linear-kernel embedding misses their difference. Chapter 13 proves why a Gaussian kernel distinguishes all Borel laws instead, using characteristic-function uniqueness as a named input.
`;export{e as default};