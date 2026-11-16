var e=`---
parent_id: book-kernels-and-gaussian-processes
matter_id: glossary
title: "Glossary"
license: CC BY-SA 4.0
---

# Glossary

A positive-semidefinite kernel gives nonnegative quadratic forms on every finite input list. A feature map represents it as inner products. A Gram matrix is one such finite evaluation matrix, whose positivity alone does not establish a proposed function is a kernel on every list.

A reproducing-kernel Hilbert space is a deterministic function space with bounded evaluation and reproducing sections. Mercer eigenvalues describe a compact integral operator involving a reference measure. A representer lies in the span of data sections, and its finite coefficients can be nonunique even when the function is unique.

A support vector has a positive multiplier in a chosen dual optimum. Its score is not inherently a probability. A geometric margin uses the RKHS normal norm and differs from the functional margin constraint.

A Gaussian process is specified by jointly Gaussian finite evaluation laws. A modification agrees at each prescribed input almost surely; a common continuous version supplies stronger path assertions. Typical infinite-rank process paths need not belong to the associated RKHS.

Laplace replaces a posterior locally by a Gaussian at its mode and Hessian. An ELBO is a true lower bound under a declared variational family; a Laplace evidence expression is not generally such a bound. A hyperparameter mixture need not remain Gaussian after integration.

Backward error is a perturbation for which a computed answer is exact. Conditioning controls its possible forward amplification. Jitter modifies covariance, while a tracked coordinate rescaling can preserve the same mathematical system. A small numerical residual needs a scale-aware prediction bound before it certifies accuracy.

An inducing residual is prior covariance outside a finite section projection. A variational inducing family retains that conditional residual, whereas a low-rank prior can remove it. Random features approximate an integral kernel with a finite empirical feature map and separate approximation randomness.

A kernel mean element represents function expectations. MMD is the unit-RKHS expectation supremum. A characteristic kernel identifies laws from those means; a finite feature map can miss distinctions. Diagonal-free unbiased discrepancy estimates can be negative even though their squared population target is nonnegative.
`;export{e as default};