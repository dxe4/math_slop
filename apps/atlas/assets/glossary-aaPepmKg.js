var e=`---
parent_id: book-matrix-computation-applications
matter_id: glossary
title: "Glossary and Index"
license: CC BY-SA 4.0
---

# Glossary and Index

This is a retrieval aid. Compact entries cannot replace the full definitions or hypotheses in their chapters. Chapter titles follow chapter order.

## Glossary

**Arnoldi process.** Orthogonalization procedure that builds an orthonormal basis of a Krylov subspace and an upper Hessenberg representation of the projected operator. "Krylov Subspace Methods"; "Eigenvalue Iterations".

**Backward stability.** An algorithm is backward stable if the computed result is the exact solution of a slightly perturbed problem. "Conditioning and Stability"; "Floating-Point and Factorization".

**Block algorithm.** Factorization organized into submatrix blocks to exploit cache locality and parallelism. "Advanced Factorizations and Block Algorithms".

**Cholesky factorization.** For SPD $A$, the unique factorization $A = LL^{T}$ (or $A = LL^{*}$) with lower triangular $L$ and positive diagonal entries. "Floating-Point and Factorization".

**Circulant matrix.** Matrix with each row cyclically shifted relative to the one above; diagonalized by the Fourier matrix. "Structured Matrices".

**Communication-avoiding algorithm.** Algorithm that reorganizes computation to reduce data movement between processors or memory levels. "Advanced Factorizations and Block Algorithms"; "Synthesis and Open Directions".

**Condition number.** $\\kappa(A) = \\lVert A \\rVert \\lVert A^{-1} \\rVert$; measures the sensitivity of $Ax = b$ to perturbations. "Conditioning and Stability".

**Conjugate gradients (CG).** Iterative method for SPD systems that minimizes the error over Krylov subspaces in the $A$-norm. "Sparse and Iterative Methods"; "Krylov Subspace Methods".

**CP decomposition.** CANDECOMP/PARAFAC tensor decomposition into a sum of rank-1 terms. "Tensor Decompositions".

**Displacement rank.** Rank of $\\nabla(A) = Z_{1}A - AZ_{0}$; measures deviation from Toeplitz structure. "Structured Matrices".

**Eckart--Young theorem.** The best rank-$k$ approximation of $A$ in the 2-norm and Frobenius norm is given by the truncated SVD, for integer $0\\le k<\\min(m,n)$, with 2-norm error $\\sigma_{k+1}$ and Frobenius error $(\\sum_{i>k}\\sigma_i^2)^{1/2}$. "QR, Least Squares, and SVD". The Frobenius optimality proof is in [Eigenvalue Computations, Proposition 6.9](../eigenvalue-computations.md).

**Eigenvalue condition number.** For a simple eigenvalue $\\lambda$, $1/|y^{*}x|$ where $y$ and $x$ are normalized left and right eigenvectors. "Eigenvalue Computations".

**Fill-in.** Nonzeros created in positions that were zero in the original matrix during factorization. "Sparse and Iterative Methods".

**Floating-point model.** $\\text{fl}(a \\circ b) = (a \\circ b)(1 + \\delta)$ with $|\\delta| \\le \\varepsilon_{\\text{mach}}$. "Floating-Point and Factorization".

**GMRES.** Generalized minimal residual method for nonsymmetric linear systems; minimizes the residual over Krylov subspaces. "Sparse and Iterative Methods"; "Krylov Subspace Methods".

**Growth factor.** $\\rho = \\max_{i,j} |u_{ij}| / \\max_{i,j} |a_{ij}|$; governs the stability of LU factorization. "Floating-Point and Factorization".

**Householder reflection.** Unitary matrix $H = I - 2vv^{*}/v^{*}v$ used to introduce zeros below the diagonal in QR factorization. "QR, Least Squares, and SVD".

**ILU(0).** Incomplete LU factorization restricting fill-in to the nonzero pattern of $A$. "Preconditioning".

**Krylov subspace.** $\\mathcal{K}_{k}(A, r_{0}) = \\operatorname{span}\\{r_{0}, Ar_{0}, \\dots, A^{k-1}r_{0}\\}$. "Krylov Subspace Methods".

**Lanczos method.** Symmetric analogue of Arnoldi; produces a tridiagonal projection using a three-term recurrence. "Eigenvalue Iterations".

**Matrix exponential.** $e^{A} = \\sum_{k=0}^{\\infty} A^{k}/k!$; solves $\\dot{x} = Ax$. "Matrix Functions".

**Matrix-free method.** Algorithm requiring only a subroutine for $v \\mapsto Av$, not explicit matrix entries. "Sparse and Iterative Methods".

**Mixed-precision iterative refinement.** Improves a low-precision factorization by correcting residuals in high precision. "Mixed-Precision and Verified Computing".

**Moore--Penrose pseudoinverse.** $A^{+} = V\\Sigma^{+}U^{*}$ from the SVD; generalizes the inverse to rectangular and rank-deficient matrices. "QR, Least Squares, and SVD".

**Multigrid.** Preconditioner or solver combining fine-grid smoothing with coarse-grid correction; suitable elliptic hierarchies can yield near-linear work, subject to approximation, smoothing, and coarsening assumptions. "Preconditioning".

**Normal equations.** $A^{T}Ax = A^{T}b$; correct in exact arithmetic but square the condition number. "QR, Least Squares, and SVD".

**Numerical rank.** Rank determined by counting singular values above a specified tolerance. "QR, Least Squares, and SVD".

**Oversampling parameter ($p$).** Extra random vectors beyond the target rank in randomized range finding; reduces failure probability. "Randomized Numerical Linear Algebra".

**Pad\\'{e} approximant.** Rational approximation used in the scaling-and-squaring algorithm for the matrix exponential. "Matrix Functions".

**Partial pivoting.** Row interchanges that select the largest column entry as the pivot in LU factorization. "Floating-Point and Factorization".

**Power iteration.** Iteration $x_{k+1} = Ax_{k}/\\lVert Ax_{k} \\rVert$ converging to the dominant eigenvector. "Eigenvalue Computations".

**Preconditioner.** Matrix $M \\approx A$ chosen so that $M^{-1}A$ has a clustered spectrum and $M^{-1}v$ is cheap to compute. "Preconditioning".

**Pseudospectrum.** $\\sigma_{\\varepsilon}(A) = \\{z : \\lVert (zI - A)^{-1} \\rVert_{2} \\ge \\varepsilon^{-1}\\}$, with resolvent norm $+\\infty$ on $\\sigma(A)$; quantifies nonnormality and perturbation sensitivity. "Pseudospectra".

**QR algorithm.** Iterative method for computing all eigenvalues of a dense matrix via unitary similarity transformations to Schur form. "Eigenvalue Computations".

**QR factorization.** $A = QR$ with $Q$ orthonormal and $R$ upper triangular. "QR, Least Squares, and SVD".

**Randomized SVD.** Approximate SVD computed by random sampling of the range followed by a small dense SVD. "Randomized Numerical Linear Algebra".

**Rayleigh quotient.** $\\rho(x) = x^{*}Ax / x^{*}x$; stationary at eigenvectors. "Eigenvalue Computations".

**Residual.** $r = b - A\\widehat{x}$; small residual is necessary but not sufficient for small forward error. "Conditioning and Stability".

**Scaling and squaring.** Algorithm for $e^{A}$ that scales $A$, approximates the exponential on the small-norm matrix, and squares the result. "Matrix Functions".

**Schur decomposition.** $T = U^{*}AU$ with $T$ upper triangular and $U$ unitary. "Eigenvalue Computations".

**Shift-and-invert spectral transformation.** Applies Lanczos or Arnoldi to $(A - \\sigma I)^{-1}$ to target eigenvalues near $\\sigma$. "Eigenvalue Iterations".

**Singular value decomposition (SVD).** $A = U\\Sigma V^{*}$ with $U$, $V$ unitary and $\\Sigma$ diagonal with nonnegative entries. "QR, Least Squares, and SVD".

**Sparse matrix.** Matrix stored by nonzero structure (e.g., CSR) rather than as a dense array. "Sparse and Iterative Methods".

**Spectral abscissa.** $\\alpha(A) = \\max_{i} \\operatorname{Re}\\lambda_{i}(A)$; determines asymptotic stability of $\\dot{x} = Ax$. "Pseudospectra".

**Spectral radius.** $\\rho(A) = \\max_{i} |\\lambda_{i}(A)|$. "Eigenvalue Computations".

**Subspace iteration.** Generalization of power iteration to compute several dominant eigenvalues simultaneously. "Eigenvalue Iterations".

**Symmetric positive definite (SPD).** $A = A^{T}$ and $x^{T}Ax > 0$ for all $x \\neq 0$; guarantees existence of Cholesky factorization. "Floating-Point and Factorization".

**Tensor rank.** Smallest $R$ for which a tensor equals a sum of $R$ rank-1 terms. CP rank is subadditive, but unlike matrix rank its rank-at-most-$R$ sets need not be closed, so rank can behave discontinuously under limits. "Tensor Decompositions".

**Thomas algorithm.** $O(n)$ solver for tridiagonal systems. "Structured Matrices".

**Toeplitz matrix.** Constant along diagonals: $t_{ij} = t_{i-j}$. "Structured Matrices".

**Tucker decomposition.** Tensor decomposition with a core tensor and orthonormal factor matrices in each mode. "Tensor Decompositions".

**Verified solver.** Computes an approximate solution and uses interval arithmetic to prove that a unique solution exists in a neighborhood. "Mixed-Precision and Verified Computing".

## Claim finder with status guards

### Theorems

**Eckart--Young ("QR, Least Squares, and SVD").** The best rank-$k$ approximation of $A$ in the 2-norm and Frobenius norm is $A_{k} = \\sum_{i=1}^{k} \\sigma_{i} u_{i} v_{i}^{*}$, for integer $0\\le k<\\min(m,n)$, with error $\\lVert A - A_{k} \\rVert_{2} = \\sigma_{k+1}$ and $\\lVert A-A_k\\rVert_F=(\\sum_{i>k}\\sigma_i^2)^{1/2}$. The Frobenius optimality proof is in [Eigenvalue Computations, Proposition 6.9](../eigenvalue-computations.md).

**CG convergence bound ("Sparse and Iterative Methods").** For SPD $A$ with eigenvalues in $[\\lambda_{\\min}, \\lambda_{\\max}]$, the $A$-norm error satisfies $\\lVert x_{k} - x_{*} \\rVert_{A} \\le 2\\left(\\frac{\\sqrt{\\kappa} - 1}{\\sqrt{\\kappa} + 1}\\right)^{k} \\lVert x_{0} - x_{*} \\rVert_{A}$.

### Empirical observations

**Practical LU growth factor ("Floating-Point and Factorization").** For partial pivoting, the worst-case growth factor is $2^{n-1}$, but in practice $\\rho$ is usually $O(n)$ or smaller.

**Lanczos extreme eigenvalue convergence ("Eigenvalue Iterations").** Extreme eigenvalues of symmetric matrices are approximated well by Ritz values after $k \\ll n$ Lanczos steps.

### Research-status questions

**Sparse-LU communication across graph families ("Synthesis and Open Directions").** General communication lower bounds apply to dense or sparse algorithms (Ballard, Demmel, Holtz, & Schwartz, 2011, https://doi.org/10.1137/090769156), while matching or near-matching results depend on the graph family and computational model; results include planar and certain nonplanar grids (2019, https://doi.org/10.1016/j.jpdc.2018.03.014). No universal 2026 open-status claim for arbitrary sparse patterns is made without a current specialist audit.

**Adaptive rank determination in streaming randomized SVD ("Synthesis and Open Directions").** Determining numerical rank from a single pass over a streaming matrix with rigorous guarantees remains an active research question.
`;export{e as default};