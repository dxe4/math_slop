var e=`---
id: book-matrix-computation-applications
title: "Matrix Computation in Practice: Structure, Error, and Scale"
level: advanced-undergraduate
status: draft
production_state: drafting
planned_chapters: 18
estimated_minutes: 450
license: CC BY-SA 4.0
---

# Matrix Computation in Practice: Structure, Error, and Scale

This book is about choosing and auditing matrix algorithms. Exact algebra says two expressions are equal; computation asks which expression preserves information in finite precision, exploits structure, and finishes at the required scale. The intended reader knows systems, eigenvalues, projections, and basic programming.

## Preparation and reading route

This L3–L4 book assumes a first course in linear algebra, basic proof, and elementary programming. [Finite-Dimensional Linear Algebra: Structure and Proof](/atlas/#/item/book-linear-algebra-structure-proofs) supplies exact systems, inner products, orthogonal projections, eigenvalues, and singular values; the required core is reviewed where used. The advanced tensor and pseudospectral chapters state their additional preparation locally. General differential-equation discretization and verified arithmetic are optional continuations in [Numerical Mathematics: From Error to Algorithms](/atlas/#/item/book-numerical-mathematics-error-algorithms).

The reading route consists of seventeen substantive chapters and a short cross-book bridge. Follow the displayed order; the bridge after tensors introduces no additional matrix prerequisites.

1. [Problem, Representation, Algorithm](matrix-computation-applications/problem-representation-algorithm.md)
2. [Floating-Point and Factorization](matrix-computation-applications/floating-point-and-factorization.md)
3. [Conditioning and Stability](matrix-computation-applications/conditioning-and-stability.md)
4. [Advanced Factorizations and Block Algorithms](matrix-computation-applications/advanced-factorizations-block-algorithms.md)
5. [QR, Least Squares, and SVD](matrix-computation-applications/qr-least-squares-svd.md)
6. [Eigenvalue Computations](matrix-computation-applications/eigenvalue-computations.md)
7. [Eigenvalue Iterations](matrix-computation-applications/eigenvalue-iterations.md)
8. [Sparse and Iterative Methods](matrix-computation-applications/sparse-and-iterative-methods.md)
9. [Krylov Subspace Methods](matrix-computation-applications/krylov-subspace-methods.md)
10. [Preconditioning](matrix-computation-applications/preconditioning.md)
11. [Structured Matrices](matrix-computation-applications/structured-matrices.md)
12. [Matrix Functions](matrix-computation-applications/matrix-functions.md)
13. [Pseudospectra](matrix-computation-applications/pseudospectra.md)
14. [Randomized Numerical Linear Algebra](matrix-computation-applications/randomized-numerical-linear-algebra.md)
15. [Tensor Decompositions](matrix-computation-applications/tensor-decompositions.md)
16. [Mixed-Precision and Verified Computing](matrix-computation-applications/mixed-precision-verified-computing.md) — short bridge to verified computation.
17. [Synthesis and Open Directions](matrix-computation-applications/synthesis-open-directions.md)
18. [Project: Scale to Large Data](matrix-computation-applications/project-scale-to-large-data.md)

The numerical matrix readings now have full treatments here: [Direct and Iterative Linear Algebra](numerical-mathematics-error-algorithms/direct-iterative-linear-algebra.md) continues in [Sparse and Iterative Methods](matrix-computation-applications/sparse-and-iterative-methods.md), with QR and least-squares preparation in chapter5; [Eigenvalue, Singular-Value, and Rank Problems](numerical-mathematics-error-algorithms/eigenvalue-singular-problems.md) continues in [Eigenvalue Computations](matrix-computation-applications/eigenvalue-computations.md); and [Randomized and Mixed-Precision Linear Algebra](numerical-mathematics-error-algorithms/randomized-mixed-precision-linear-algebra.md) continues in [Randomized Numerical Linear Algebra](matrix-computation-applications/randomized-numerical-linear-algebra.md). Their worked calculations, proofs, and exercise identities remain available.

The additional [block-factorization reading](matrix-computation-applications/chapter-12.md), [mixed-precision reading](matrix-computation-applications/chapter-13.md), and [synthesis reading](matrix-computation-applications/chapter-14.md) preserve the earlier examples and exercise solutions. The substantive chapters below supply staged hints and full solution reveals. A result supported by a cited specialist theorem is distinguished from a result proved in the chapter.

## 1. Problem, representation, algorithm

Separate three layers:

1. the mathematical problem, such as solve $Ax=b$ or find a rank-$k$ approximation;
2. the representation, such as dense array, sparse row structure, implicit operator, or streamed blocks;
3. the algorithm, such as LU, QR, conjugate gradients, or randomized range finding.

A million-by-million diagonal operator is easy if represented by its diagonal and impossible if forced into a dense array. “Matrix size” is not enough; nonzero pattern, symmetry, definiteness, conditioning, and required outputs drive the decision.

## 2. Conditioning precedes stability

For nonsingular $A$, the 2-norm condition number is

$\\kappa_{2}(A)=\\lVert A \\rVert_{2}\\lVert A^{-1} \\rVert_{2}=\\sigma_{\\max}/\\sigma_{\\min}$.

It bounds worst-case relative sensitivity of a solve. Roughly, relative perturbations in data can be amplified by $\\kappa$, subject to the precise perturbation model. If $\\kappa \\approx 10^{12}$ in decimal arithmetic with about 16 digits, expecting 15 trustworthy digits is unreasonable. A condition number is a worst-case sensitivity measure, not a promise that exactly 12 digits will be lost on every right-hand side.

Conditioning belongs to the problem. **Backward stability** belongs to an algorithm: a computed result is the exact answer to nearby input. Forward error is then controlled by backward error times conditioning, while the product remains small enough for a first-order estimate to be meaningful. A tiny residual $\\lVert b-A\\widehat{x} \\rVert$ alone is not a universal guarantee; scaling by $\\lVert A \\rVert\\lVert \\widehat{x} \\rVert+\\lVert b \\rVert$ gives a normwise backward-error measure, and an ill-conditioned problem can have small residual but large forward error.

## 3. Floating-point traps

Floating-point addition is not associative. Subtracting nearby numbers loses relative information. Overflow and underflow can occur even when the final mathematical result is moderate.

For vector norms, computing $\\sqrt{\\sum x_{i}^{2}}$ naively may overflow. Scale by the largest magnitude or use a stable hypot update. For dot products, pairwise or compensated summation can reduce accumulation error, but cannot restore information absent from the inputs.

Never test a computed determinant for exact equality to zero. In fact, determinant is usually the wrong numerical singularity diagnostic: it mixes all singular values and can underflow or overflow. Estimate rank using singular values or a rank-revealing factorization relative to a documented tolerance and scale.

## 4. LU and pivoting

Elimination factors a square matrix as $PA=LU$, where permutation $P$ records row pivoting. Partial pivoting selects a large entry in the current column to avoid dividing by a tiny pivot. For most practical dense problems it is effective, though worst-case growth examples exist.

Once factored, solve $Ly=Pb$ and $Ux=y$ by forward and backward substitution. Factorization costs approximately $(2/3)n^{3}$ floating-point operations; each additional right-hand side costs order $n^{2}$. Reusing the factors is therefore essential.

Do not form $A^{-1}b$ to solve a system. Computing the full inverse does more work, stores more information than needed, and generally worsens the error pathway. An explicit inverse is appropriate only when the inverse itself is the requested object and its computation is audited.

## 5. Symmetry and definiteness

If $A$ is real symmetric positive definite, Cholesky factorization $A=LL^{T}$ uses about half the work of general LU and preserves structure. Over $\\mathbb{C}$, the corresponding hypothesis is Hermitian positive definiteness and the factorization is $A=LL^{*}$. In either case, positive definiteness means $x^{*}Ax>0$ for every nonzero $x$ and implies positive pivots in exact Cholesky.

Symmetry alone is insufficient. The matrix $\\operatorname{diag}(1,-1)$ is symmetric but indefinite, so no real $LL^{T}$ exists because $x^{T}LL^{T}x=\\lVert L^{T}x \\rVert_{2}^{2}\\ge 0$. Indefinite symmetric or Hermitian systems need a suitably pivoted $LDL^{*}$ factorization or another specialized solver.

Structure is a contract. If measured data produce a matrix that should be symmetric or Hermitian, replacing it by $(A+A^{*})/2$ may be reasonable only after explaining whether asymmetry is noise, a bug, or genuine model information.

## 6. QR for least squares

For $A\\in\\mathbb{K}^{m\\times n}$, where $\\mathbb{K}$ is $\\mathbb{R}$ or $\\mathbb{C}$, suppose $m\\ge n$ and $A$ has full column rank. Compute the reduced factorization $A=QR$, where $Q\\in\\mathbb{K}^{m\\times n}$ has orthonormal columns and $R\\in\\mathbb{K}^{n\\times n}$ is upper triangular. Then

$\\lVert Ax-b \\rVert_{2}^{2}=\\lVert Rx-Q^{*}b \\rVert_{2}^{2}+\\lVert (I_m-QQ^{*})b \\rVert_{2}^{2}$,

so solve $Rx=Q^{*}b$. Householder reflections are the standard dense choice because they introduce zeros with unitary transformations, which preserve the 2-norm.

Classical Gram–Schmidt can lose orthogonality when columns are nearly dependent. Modified Gram–Schmidt improves it; reorthogonalization may be required. The normal equations $A^{*}Ax=A^{*}b$ square the 2-norm condition number because $\\kappa_{2}(A^{*}A)=\\kappa_{2}(A)^{2}$ for full-column-rank $A$. They can be acceptable for well-conditioned small problems but should not be the unexamined default.

## 7. SVD as a diagnostic and approximation engine

The singular value decomposition $A=U\\Sigma V^{*}$ orders nonnegative singular values. It gives

- $\\lVert A \\rVert_{2}=\\sigma_{1}$;
- rank as the count of nonzero singular values in exact arithmetic;
- pseudoinverse $A^{+}=V\\Sigma^{+}U^{*}$;
- condition number $\\sigma_{1}/\\sigma_{r}$ on the resolved range;
- best rank-$k$ approximation $A_{k}=\\sum_{i\\le k}\\sigma_{i} u_{i} v_{i}^{*}$.

The Eckart–Young result follows from any rank-$k$ map having a nonzero null vector in the span of the first $k+1$ right singular vectors. Along some such unit vector, the error is at least $\\sigma_{k+1}$; truncated SVD attains that bound in 2-norm.

Numerical rank is not an intrinsic integer without a tolerance, units, and noise model. A singular value of $10^{-9}$ may be signal in one experiment and meaningless in another.

## 8. Eigenproblems: ask for the part you need

Computing all eigenvectors of a large matrix is expensive and often unnecessary. For a diagonalizable matrix with a unique eigenvalue of largest magnitude, power iteration targets its eigenline when the starting vector has a nonzero component in that direction. In the normal case, the asymptotic linear factor is $\\lvert \\lambda_{2}/\\lambda_{1}\\rvert$. Defective or strongly nonnormal matrices can introduce polynomial factors and large transients, while equal dominant magnitudes can prevent selection of one eigenline.

Shifted inverse iteration targets eigenvalues near a shift $\\mu$ by repeatedly solving $(A-\\mu I)y=x$. The expensive work is a factorization reused across steps. Rayleigh quotient iteration can converge rapidly for symmetric problems.

For dense nonsymmetric eigenproblems, reduction to Hessenberg form followed by QR iteration is standard. Forming the characteristic polynomial and finding its roots is generally a poor numerical route: coefficients can be highly sensitive and throw away matrix structure.

## 9. Sparse and matrix-free iteration

A sparse matrix stores only nonzeros and indices. Fill-in during direct factorization can destroy sparsity, so ordering matters. Matrix-free methods require only a routine computing $v\\mapsto Av$, enabling problems where entries are generated by a differential operator, graph, or simulation.

For symmetric positive-definite $A$, conjugate gradients minimizes the quadratic energy over affine Krylov spaces $x_0+\\mathcal K_k(A,r_0)$, where

$\\mathcal{K}_{k}(A,r_{0})=\\operatorname{span}\\{r_{0},Ar_{0},\\ldots,A^{k-1}r_{0}\\}$.

In exact arithmetic it terminates in at most $n$ steps, but practical convergence depends on clustered eigenvalues and condition number. A **preconditioner** replaces the system by an equivalent left-, right-, or symmetrically preconditioned formulation that is cheap to apply and better conditioned or spectrally clustered. The formulation must preserve the structural hypotheses required by the chosen method; conjugate gradients, for example, needs an SPD-compatible preconditioner.

For nonsymmetric systems, GMRES minimizes residual norm over a Krylov space but storage grows with iteration unless restarted. Restarting saves memory and can harm convergence. There is no solver named merely “iterative method” that is best for every structure.

## 10. Verification as part of the algorithm

Every computation should return evidence:

- dimensions, units, and representation;
- factorization or iteration chosen and why;
- residual and scaled backward error;
- condition or rank estimate with method and tolerance;
- orthogonality loss for $Q$, singular vectors, or Ritz vectors;
- iteration history and stop reason;
- comparison with an exact small case or independent method;
- behavior after a controlled perturbation.

For $A\\approx QR$, report $\\lVert A-QR \\rVert/\\lVert A \\rVert$ and $\\lVert I-Q^{*}Q \\rVert$. For a nonzero matrix and nonzero proposed eigenvector, report $\\lVert Av-\\lambda v \\rVert/(\\lVert A \\rVert\\lVert v \\rVert)$. State the norm and handle the zero-matrix case separately. A displayed eigenvalue without a residual is an unsupported claim.

## 11. Worked workflow: an ill-scaled line fit

Suppose a design matrix has columns $1$ and timestamps near $10^{9}$, differing only by hundreds. The columns are nearly collinear after finite-precision effects, and normal equations magnify the problem.

1. Center time by subtracting a meaningful origin and scale it to days.
2. Inspect singular values of the scaled design.
3. Use QR with pivoting or SVD if rank is doubtful.
4. Transform coefficients back with units recorded.
5. Verify predictions and residuals in original units.

Centering is not cosmetic; it changes coordinate conditioning while preserving the fitted affine subspace when done exactly. If uncertainty in time or response dominates, ordinary least squares may still be the wrong model—numerical stability does not repair statistical assumptions.

## Exercises with worked answers

### 1. Residual versus error

Let $A=\\operatorname{diag}(1,10^{-8})$, $b=(1,10^{-8})$, and $\\widehat{x}=(1,0)$. Find the residual and solution error relative to $x=(1,1)$.

**Answer.** $b-A\\widehat{x}=(0,10^{-8})$, a tiny absolute residual. But $x-\\widehat{x}=(0,1)$, a substantial solution error. The small singular value hides error in the second direction. In the 2-norm, the relative solution error is $1/\\sqrt{2}$ even though the relative residual is about $10^{-8}$.

### 2. Choose a factorization

Match each task: repeated solves with a general dense square matrix; least squares with a tall matrix; solve with symmetric positive-definite matrix; diagnose numerical rank.

**Answer.** Pivoted LU; QR; Cholesky; SVD or rank-revealing QR, respectively. The choice depends on verified structure.

### 3. Power-method boundary

Why can power iteration fail for $\\operatorname{diag}(2,-2)$?

**Answer.** The two eigenvalues have equal magnitude, so neither component decays relative to the other. Depending on the start, normalized iterates can alternate instead of selecting one eigenline.

### 4. Backward-error check

For a computed solve, propose a dimensionless residual.

**Answer.** One standard normwise choice is $\\lVert b-A\\widehat{x} \\rVert/(\\lVert A \\rVert\\lVert \\widehat{x} \\rVert+\\lVert b \\rVert)$, with a stated norm. Under a compatible perturbation model it is a scaled normwise backward-error measure for perturbations to $A$ and $b$. Componentwise analysis may be more informative for differently scaled entries.

### 5. Sparse transfer

A graph Laplacian has a known zero eigenvalue. Should a solver treat it as an accidental numerical defect?

**Answer.** No. The null space reflects constant vectors on connected components. The mathematical problem must impose a gauge, work on the orthogonal complement, or request a pseudoinverse-compatible solution. Blind regularization changes the problem.

## Continuation and boundaries

Proceed to the stable-workflow recipe for a concise decision tree, the programming course for inspectable implementations, or specialist texts on sparse direct methods, Krylov methods, randomized linear algebra, parallel communication, mixed precision, and verified numerics. This book does not endorse one tolerance or solver universally: a trustworthy choice is conditional on scale, structure, hardware, and the question being answered.
`;export{e as default};