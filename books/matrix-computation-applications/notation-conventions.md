
# Notation and Conventions

This guide is designed for repeated reference. It records notation used across chapters, the claim-status conventions that govern what kind of warrant a statement needs, and the structural conventions that keep arguments clean.

## Matrix and vector notation

- $\mathbb{R}$, $\mathbb{C}$: the real and complex numbers.
- $\mathbb{R}^{n}$, $\mathbb{C}^{n}$: real and complex $n$-dimensional column vectors.
- $\mathbb{R}^{m \times n}$, $\mathbb{C}^{m \times n}$: real and complex $m \times n$ matrices.
- $A^{T}$: transpose of $A$.
- $A^{*}$: conjugate transpose (Hermitian transpose) of $A$.
- $A^{-1}$: inverse of a nonsingular square matrix $A$.
- $A^{+}$: Moore--Penrose pseudoinverse of $A$.
- $I_{n}$: the $n \times n$ identity matrix; $I$ when the dimension is clear.
- $e_{i}$: the $i$-th standard basis vector.
- $\operatorname{diag}(d_{1}, \dots, d_{n})$: diagonal matrix with entries $d_{1}, \dots, d_{n}$.
- $\operatorname{tr}(A)$: trace of a square matrix $A$.
- $\det(A)$: determinant of a square matrix $A$.
- $\operatorname{rank}(A)$: rank of $A$.

## Norms and inner products

- $\lVert x \rVert_{2} = \sqrt{\sum_{i} |x_{i}|^{2}}$: the Euclidean (2-)norm of a vector.
- $\lVert x \rVert_{p} = (\sum_{i} |x_{i}|^{p})^{1/p}$: the $p$-norm for $p \ge 1$.
- $\lVert A \rVert_{2} = \sigma_{\max}(A)$: the spectral (operator 2-)norm of a matrix.
- $\lVert A \rVert_{F} = \sqrt{\sum_{i,j} |a_{ij}|^{2}}$: the Frobenius norm.
- $\langle x, y \rangle = x^{*}y$: the standard inner product on $\mathbb{C}^{n}$.
- $\kappa_{2}(A) = \lVert A \rVert_{2} \lVert A^{-1} \rVert_{2}$: the 2-norm condition number of a nonsingular matrix.

## Factorizations and decompositions

- $PA = LU$: LU factorization with partial pivoting, where $P$ is a permutation matrix, $L$ is unit lower triangular, and $U$ is upper triangular.
- $A = LL^{T}$ or $A = LL^{*}$: Cholesky factorization of a symmetric (or Hermitian) positive-definite matrix.
- $A = QR$: QR factorization, where $Q$ has orthonormal columns and $R$ is upper triangular.
- $A = U \Sigma V^{*}$: singular value decomposition (SVD), where $U$ and $V$ are unitary and $\Sigma$ is diagonal with nonnegative entries.
- $\sigma_{i}(A)$: the $i$-th singular value of $A$ in nonincreasing order.
- $A = V \Lambda V^{-1}$: diagonalization or Jordan decomposition.
- $T = U^{*}AU$: Schur decomposition, with $T$ upper triangular.

## Eigenvalues and spectra

- $\lambda_{i}(A)$: the $i$-th eigenvalue of $A$.
- $\sigma(A)$: the spectrum (set of eigenvalues) of $A$.
- $\rho(A) = \max_{i} |\lambda_{i}(A)|$: the spectral radius.
- $\alpha(A) = \max_{i} \operatorname{Re}\lambda_{i}(A)$: the spectral abscissa.
- $\sigma_{\varepsilon}(A)$: the $\varepsilon$-pseudospectrum.

## Iterative and Krylov notation

- $\mathcal{K}_{k}(A, r_{0}) = \operatorname{span}\{r_{0}, Ar_{0}, A^{2}r_{0}, \dots, A^{k-1}r_{0}\}$ for integer $k \ge 1$: the $k$th Krylov subspace, of dimension at most $\min\{k,n\}$; dimension $k$ holds exactly when its $k$ displayed generators are linearly independent.
- $r_{k} = b - Ax_{k}$: the residual at step $k$.
- $M$: preconditioner matrix.
- $\operatorname{fl}(a \circ b)$: floating-point result of operation $\circ$.
- $\varepsilon_{\text{mach}}$: binary floating-point unit roundoff; for binary64, $2^{-53}$. The spacing above $1$ is $2^{-52}=2\varepsilon_{\text{mach}}$.

## Structured matrices

- $T$ with $t_{ij} = t_{i-j}$: Toeplitz matrix.
- $H$ with $h_{ij} = h_{i+j}$: Hankel matrix.
- $C$ with cyclic shifts: circulant matrix.
- $\omega = e^{-2\pi i/n}$: primitive $n$-th root of unity.

## Tensor notation

- $\mathcal{A} \in \mathbb{R}^{I_{1} \times I_{2} \times \dots \times I_{N}}$: an $N$-way tensor.
- $\mathcal{A} \times_{n} U$: mode-$n$ product of $\mathcal{A}$ with matrix $U$.
- $A_{(n)}$: mode-$n$ unfolding (matricization) of $\mathcal{A}$.
- $\circ$: outer product (for rank-1 tensors).

## Asymptotic and complexity notation

- $O(f(n))$: upper bound on growth rate.
- $\Theta(f(n))$: tight bound.
- $\Omega(f(n))$: lower bound.
- $\operatorname{nnz}(A)$: number of nonzeros in $A$.
- $\text{flops}$: floating-point operations.

## Claim-status conventions

Before accepting or repeating a claim, check its status:

| Status | Warrant required | Typical sources |
| --- | --- | --- |
| Theorem | Proof from stated hypotheses | Definitions, lemmas, inference rules |
| Sketch | Recoverable proof outline; standard constructions suppressed | Textbook arguments, standard inductions |
| Empirical observation | Numerical experiments or widely reported practice | Benchmarks, literature surveys |
| Open problem | None; record current evidence and partial results | Research literature, expert consensus |

## Cross-reference conventions

- Chapters are cited by title in quotation marks: "QR, Least Squares, and SVD".
- Chapter IDs are used in internal links: `qr-least-squares-svd`, `eigenvalue-computations`.
- Definitions are numbered within chapters and referenced by name.
- Theorems are stated with every material hypothesis; the proof or proof sketch follows immediately.

## Accessibility and notation policy

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Tables and diagrams are accompanied by exact descriptions of rows, columns, or relations. Plain-source formulas use readable tokens such as $\le$, $\to$, and $\cong$ when a specialized glyph would otherwise be the only carrier of meaning.

## Citation policy

- Paraphrase sources and cite the job they perform.
- Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard.
- Direct quotations require exact locators and license or fair-use review.
- When sources disagree, record the disagreement.
- When provenance is unknown, label it unknown rather than inventing a clean lineage.
