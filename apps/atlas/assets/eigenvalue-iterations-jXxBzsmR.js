var e=`---
parent_id: book-matrix-computation-applications
chapter_id: eigenvalue-iterations
status: draft
title: "Eigenvalue Iterations"
level: advanced-undergraduate
estimated_minutes: 200
license: CC BY-SA 4.0
---

# Eigenvalue Iterations

For large matrices, computing the full spectrum by dense methods is prohibitively expensive. This chapter develops iterative eigenvalue algorithms that target a subset of the spectrum using only matrix-vector products. We revisit power iteration, introduce the Lanczos and Arnoldi methods, and explain the shift-and-invert spectral transformation that turns an interior eigenvalue problem into a dominant one.

## Subspace iteration

Subspace iteration generalizes power iteration to compute several dominant eigenvalues simultaneously. Starting from an $n \\times p$ matrix $X_{0}$ with orthonormal columns, iterate:

$$
Y_{k} = AX_{k},
\\qquad
Y_{k} = X_{k+1}R_{k+1}\\;\\text{(QR factorization)}.
$$

For a normal matrix, if $|\\lambda_p|>|\\lambda_{p+1}|$ and the starting block has full-rank projection onto the target invariant subspace, the columns converge to that subspace with an asymptotic factor governed by $|\\lambda_{p+1}/\\lambda_p|$. Analogous diagonalizable nonnormal results require control of the eigenvector basis and the same overlap condition; a magnitude gap alone is not a complete convergence theorem.

## The Lanczos method

For symmetric $A$, the Lanczos process builds an orthonormal basis $Q_{k}$ of $\\mathcal{K}_{k}(A, q_{1})$ and a tridiagonal matrix $T_{k} = Q_{k}^{T}AQ_{k}$. The recurrence is

$$
\\beta_{j+1}q_{j+1} = Aq_{j} - \\alpha_{j}q_{j} - \\beta_{j}q_{j-1},
$$

with $\\alpha_{j} = q_{j}^{T}Aq_{j}$. The eigenvalues of $T_{k}$ (Ritz values) approximate extreme eigenvalues of $A$ with increasing accuracy as $k$ grows.

**Convergence (cited, with overlap and gap hypotheses).** Polynomial approximation theory bounds selected Ritz-value errors for symmetric problems when the starting overlap and spectral separation are specified. Extreme targets are often favorable, while an interior target may benefit from a spectral transformation. There is no universal ordering of every computed Ritz value's convergence for every start; the full quantitative theory is cited in Sources.

**Loss of orthogonality.** In finite precision, Lanczos vectors lose orthogonality. Full reorthogonalization against all previous vectors restores accuracy but costs $O(kn)$ per step. Selective reorthogonalization is a practical compromise.

## The Arnoldi method

For nonsymmetric $A$, Arnoldi reduces $A$ to upper Hessenberg form $H_{k}$ over the Krylov subspace. The eigenvalues of $H_{k}$ approximate eigenvalues of $A$. Restarted Arnoldi (ARPACK, implicitly restarted Arnoldi) limits storage by discarding unwanted parts of the Krylov space and retaining only a few vectors.

## Shift-and-invert spectral transformation

To find eigenvalues near a target $\\sigma$, apply the Lanczos or Arnoldi method to $(A - \\sigma I)^{-1}$. The spectrum is transformed:

$$
\\lambda \\mapsto \\frac{1}{\\lambda - \\sigma}.
$$

Eigenvalues near $\\sigma$ become dominant and converge rapidly. Each iteration requires solving a linear system with $A - \\sigma I$, so a factorization or preconditioned iterative solver is needed. The solve adds work per iteration. The transformed gap can reduce the iteration count, but no universal cost improvement is asserted without the original residual and solve cost.

## Verification and residuals

For a Ritz pair $(\\theta, v)$ with $\\lVert v \\rVert_{2} = 1$, the relative residual

$$
\\frac{\\lVert Av - \\theta v \\rVert_{2}}{\\lVert A \\rVert_{2}}
$$

is compared with a declared tolerance and uncertainty scale. A unit-roundoff target is not uniformly attainable or necessary, and the zero-matrix case uses an absolute residual. For shift-and-invert, report the residual with respect to the original matrix $A$, not the transformed operator.

## Example: Lanczos on a tridiagonal matrix

**Example 7.1 (Lanczos on a tridiagonal matrix).**

Let $A$ be the $100 \\times 100$ 1D Laplacian with eigenvalues

$$
\\lambda_{j} = 2 - 2\\cos\\left(\\frac{j\\pi}{101}\\right),
\\qquad j = 1, \\dots, 100.
$$

The smallest eigenvalue is $\\lambda_{1}\\approx0.001$ and the largest is $\\lambda_{100}\\approx4$. These exact eigenvalues locate the targets, but they do not determine how many Lanczos steps reach a specified Ritz-value or residual accuracy. That count also depends on the starting vector, the desired eigenpairs, finite precision, and the stopping test. A reproducible numerical claim must therefore state the start (or random seed) and report Ritz residuals from the run.

## Common errors and misconceptions

**Error: using power iteration for clustered dominant eigenvalues.** If $|\\lambda_{1}| \\approx |\\lambda_{2}|$, convergence is slow or fails. Subspace iteration or Lanczos should be used instead.

**Error: ignoring orthogonality loss in Lanczos.** Without reorthogonalization, spurious eigenvalues can appear and genuine ones can be missed. Always monitor orthogonality or use a robust implementation.

**Error: applying shift-and-invert without a good linear solver.** If $(A - \\sigma I)^{-1}v$ is computed inaccurately, the transformed operator is corrupted and convergence is unpredictable.

## Preparation and the object that converges

Required preparation is the [eigenvalue-computation chapter](eigenvalue-computations.md), orthogonal projection and a first course in matrix norms. A vector's sign or complex phase is arbitrary, so the natural target is an eigenline or invariant subspace. We use exact arithmetic for the recurrences below, then identify the additional finite-precision questions.

**Definition 7.2 (Ritz pair).** For an orthonormal basis $Q_k$ of a trial subspace, let $H_k=Q_k^*AQ_k$. If $H_ky=\\theta y$ and $\\|y\\|_2=1$, then $(\\theta,Q_ky)$ is a Ritz pair. Its residual is orthogonal to the trial subspace because $Q_k^*(AQ_ky-\\theta Q_ky)=0$. This orthogonality does not assert that the residual is small.

**Theorem 7.3 (A block power convergence bound).** Suppose $A=U\\operatorname{diag}(\\Lambda_1,\\Lambda_2)U^*$ is normal, the first block has dimension $p$, and
$|\\lambda_p|>|\\lambda_{p+1}|$ with $|\\lambda_p|>0$. Write
$U^*X_0=(C_1^{\\mathsf T},C_2^{\\mathsf T})^{\\mathsf T}$ with square invertible $C_1$. Then the range of $A^kX_0$ has a graph representation over the target subspace with
$$F_k=\\Lambda_2^k C_2C_1^{-1}\\Lambda_1^{-k},\\qquad
\\|F_k\\|_2\\le
\\left|\\frac{\\lambda_{p+1}}{\\lambda_p}\\right|^k\\|C_2C_1^{-1}\\|_2.$$

*Proof.* In eigen-coordinates the iterated block is
$(\\Lambda_1^kC_1,\\Lambda_2^kC_2)^{\\mathsf T}$. Right multiplication by the invertible matrix $C_1^{-1}\\Lambda_1^{-k}$ leaves its column space unchanged and produces $(I,F_k)^{\\mathsf T}$. Normality makes the diagonal block norms equal to their largest diagonal moduli, yielding the bound. QR only changes the basis of this same range while it has full column rank. Each unit vector in the graph has unwanted component at most $\\|F_k\\|$, so the graph bound implies convergence of the subspace. ∎

The starting overlap appears through $C_1^{-1}$. A tiny but nonzero overlap may delay the asymptotic regime. A zero overlap prevents the graph construction and can permanently exclude a desired direction. Reorthogonalization keeps a basis well-conditioned; it cannot manufacture an exactly absent invariant direction in exact arithmetic.

**Example 7.4 (A two-dimensional target with a declared overlap).** Let $A=\\operatorname{diag}(5,3,1)$ and start with columns $(e_1+e_3,e_2)$. The target is $\\operatorname{span}(e_1,e_2)$, $C_1=I$, $C_2=(1,0)$. After $k$ products, rescaling columns gives the range of $(e_1+5^{-k}e_3,e_2)$. The actual unwanted graph norm is $5^{-k}$; the general bound gives $(1/3)^k$. Both tend to zero, with the theorem conservative because the contamination couples to the first, faster direction. Starting instead from $(e_1,e_3)$ excludes $e_2$ and cannot recover the intended two-dimensional dominant space.

## Arnoldi and Lanczos identities

At step $j$, orthogonalize $Aq_j$ against all existing vectors:
$$h_{ij}=q_i^*Aq_j,\\qquad
w=Aq_j-\\sum_{i=1}^jh_{ij}q_i,\\qquad
h_{j+1,j}=\\|w\\|_2.$$
If this norm is nonzero, set $q_{j+1}=w/h_{j+1,j}$. If it is zero, the current subspace is invariant and the exact process stops without dividing by zero.

**Proposition 7.5 (Arnoldi residual identity).** The generated orthonormal basis obeys
$$AQ_k=Q_kH_k+h_{k+1,k}q_{k+1}e_k^{\\mathsf T}.$$
For a Ritz pair its residual norm is
$$\\|AQ_ky-\\theta Q_ky\\|_2
=|h_{k+1,k}|\\,|e_k^{\\mathsf T}y|.$$

*Proof.* The orthogonalization equation is exactly the $j$th column of the first identity. For columns before the last, the added vector is already in $Q_k$, leaving only the last outside term. Multiply by $y$ and use $H_ky=\\theta y$. Unit norm of $q_{k+1}$ gives the second statement. At invariant breakdown the outside term is zero and every eigenpair of the projected matrix is an exact eigenpair of the restricted original operator. ∎

For Hermitian $A$, $H_k=Q_k^*AQ_k$ is Hermitian and upper Hessenberg. Hermitian symmetry forces entries above the first superdiagonal to vanish because the corresponding lower entries already vanish. This proves tridiagonality and the exact three-term Lanczos recurrence. Finite precision no longer supplies exact orthogonality, so a short recurrence alone does not reproduce all these identities exactly.

**Example 7.6 (Two exact Lanczos steps).** Take
$A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ and $q_1=e_1$.
The first diagonal coefficient is two, residual $e_2$ and subdiagonal coefficient one, so $q_2=e_2$. The next product is $(1,2)$; subtract $q_1+2q_2$ to obtain zero. Thus
$$T_2=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$$
is the exact restricted matrix and its Ritz values are one and three. At step one, the sole Ritz value two has residual norm one; it lies exactly one from either eigenvalue. The breakdown after two steps means the subspace is invariant, not that the computation failed.

**Example 7.7 (An exact Ritz value with a large residual).** Let
$$A=\\begin{pmatrix}1&3&0\\\\0&2&4\\\\0&0&5\\end{pmatrix},\\qquad q_1=e_3.$$
Arnoldi gives $q_2=e_2$, $q_3=e_1$ and
$H_2=\\begin{pmatrix}5&0\\\\4&2\\end{pmatrix}$, with $h_{3,2}=3$.
For Ritz value five, use normalized $y=(3/5,4/5)$. Its lifted vector is $(0,4/5,3/5)$, and its residual is $(12/5,0,0)$, of norm $12/5$. The scalar Ritz value equals a true eigenvalue, yet this vector is a poor eigenvector. The residual formula exposes that distinction without an additional large matrix product.

## Transformed residuals and inner solves

Let $B=(A-\\sigma I)^{-1}$ with a shift outside the spectrum. If a unit vector has transformed residual $s=Bv-\\mu v$ and $\\mu\\ne0$, its associated original scalar is $\\theta=\\sigma+1/\\mu$. Multiplication by $A-\\sigma I$ yields
$$Av-\\theta v=-\\frac1\\mu(A-\\sigma I)s.$$
Thus a small transformed residual requires a norm-transfer factor before implying a small original residual. Directly recomputing $Av-\\theta v$ avoids hiding that factor.

An inexact inner solve changes the effective matrix action from one step to another. If the error is not controlled, standard Arnoldi orthogonalizes vectors from varying operators and its exact recurrence no longer describes one fixed inverse. Record inner residuals, solve tolerances and whether they depend on the current outer residual. The source's ARPACK mention identifies an algorithm family, not a verified claim about an installed package version.

Restarting has a similar semantic cost. A smaller basis saves memory but discards part of the accumulated polynomial space. An implicitly restarted scheme applies a designed filter and retains selected directions; the detailed convergence and rounding analysis is a cited dependency. No fixed basis size guarantees recovery of every requested interior cluster.

For a useful final report state the requested eigenpairs, normalization, residual norm, starting block, dimension limit, orthogonality defect, shifts, inner tolerances, restarts and stopping reason. A cluster output should include the whole subspace and its separation scale. A count of successful iterations or a small change in Ritz values alone does not establish that the intended eigenspace has been found.

**Proposition 7.8 (What a normal-matrix residual certifies).** Suppose $A$ is normal, $\\|v\\|_2=1$, and $r=Av-\\theta v$. Then some eigenvalue $\\lambda$ satisfies $|\\lambda-\\theta|\\le\\|r\\|_2$.

*Proof.* Write $A=U\\Lambda U^*$ with unitary $U$ and put $c=U^*v$. Then
$$
\\|r\\|_2^2=\\sum_j|\\lambda_j-\\theta|^2|c_j|^2
\\ge\\min_j|\\lambda_j-\\theta|^2\\sum_j|c_j|^2.
$$
The final sum is one, proving the claim. $\\square$

This certificate locates an eigenvalue, but does not identify which requested eigenvalue was found or bound the angle to a chosen eigenvector without separation assumptions. Repeated eigenvalues naturally require a subspace statement. For an arbitrary nonnormal matrix, the universally valid conclusion is instead a backward certificate: $A-rv^*$ has the exact eigenpair $(\\theta,v)$ and perturbation norm $\\|r\\|_2$. Transferring that statement to a nearby eigenvalue of the original matrix requires further conditioning information. If the residual is itself evaluated approximately, include its evaluation-error bound before using either certificate.

## A small residual can identify the wrong target

Let A=diag(2,1) and start with x_0=(ε,1), where ε>0. After k raw power steps the coordinates are (2^kε,1). Their second-to-first ratio is 2^(−k)/ε, unchanged by normalizing the whole vector. To make this ratio at most τ requires k at least log₂(1/(ετ)). With ε=2^(−20) and τ=2^(−10), thirty steps are needed; after twenty the direction still lies halfway between the axes.

The starting vector is already close to the subdominant eigenvector. Its Rayleigh quotient is one plus ε² divided by one plus ε². Direct diagonal multiplication shows its unit-vector eigenpair residual has norm ε divided by one plus ε², which can be arbitrarily small. That residual certifies a good approximate eigenpair near one, not proximity to the requested largest eigenvalue two.

Thus a stopping rule needs the target identity as well as a residual. The missing component at ε=0 prevents convergence entirely; a tiny nonzero component produces a quantitatively long delay. The strict spectral gap is unchanged throughout this family, so it cannot by itself bound the iteration count uniformly over starts.

A tie in dominant magnitudes can prevent convergence without any rounding error. The diagonal matrix with entries one and minus one sends the starting vector (1,1) alternately to (1,−1) and back. After unit normalization these remain two different directions. The Rayleigh quotient stays zero and the residual norm stays one. Inverse iteration with shift zero repeats the same action because this matrix is its own inverse, so the chosen shift has not removed the tie. A nonzero shift nearer one eigenvalue than the other gives a unique dominant inverse magnitude, provided the shift is not itself an eigenvalue and the start has a nonzero component in the target direction. These are genuine spectral hypotheses, rather than consequences of merely performing a shifted solve.

## Practice exercises with solutions

### Exercise 9.1
<a id="eigenvalue-iterations-ex-9-1"></a>

A symmetric matrix has eigenvalues $1,2,\\dots,100$. Explain why these eigenvalues alone do not determine how many Lanczos steps are needed to approximate the largest eigenvalue, then give two starting vectors that illustrate the dependence.

<details>
<summary>Hint 1</summary>

**Hint.** Track which invariant directions occur in the start.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** An exactly missing component stays missing.

</details>

<details>
<summary>Solution</summary>

**Solution.**  Lanczos also depends on the starting vector and on the declared error measure. If the normalized start is an eigenvector for $100$, the largest Ritz value is exact after one step. If the start lies in the span of eigenvectors for $1,\\dots,99$, its component in the $100$-eigenspace is zero and no Lanczos step can recover that missing eigendirection in exact arithmetic. Quantitative step bounds must therefore state at least the starting overlap, the target Ritz value, and whether error means eigenvalue error or residual.

</details>

### Exercise 9.2
<a id="eigenvalue-iterations-ex-9-2"></a>

Explain why the eigenvalues of $(A - \\sigma I)^{-1}$ are $1/(\\lambda_{i} - \\sigma)$.

<details>
<summary>Hint 1</summary>

**Hint.** Apply the shifted inverse to an eigenvector.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The shift must avoid the spectrum.

</details>

<details>
<summary>Solution</summary>

**Solution.**  If $Av = \\lambda v$, then $(A - \\sigma I)v = (\\lambda - \\sigma)v$, so $(A - \\sigma I)^{-1}v = (\\lambda - \\sigma)^{-1}v$. The eigenvectors are unchanged and the eigenvalues are transformed as claimed.

</details>

### Exercise 9.3
<a id="eigenvalue-iterations-ex-9-3"></a>

A restarted Arnoldi method with basis size $m = 30$ is applied to a $10^{5} \\times 10^{5}$ matrix. Estimate the memory cost.

<details>
<summary>Hint 1</summary>

**Hint.** Count stored basis entries.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Then multiply by bytes per scalar.

</details>

<details>
<summary>Solution</summary>

**Solution.**  The Arnoldi basis stores $m$ vectors of length $n$, requiring $30 \\times 10^{5} \\times 8$ bytes $\\approx 24$ MB in double precision. The Hessenberg matrix is negligible. This is easily manageable, whereas storing the full matrix may require gigabytes.

</details>

### Exercise 9.4
<a id="eigenvalue-iterations-ex-9-4"></a>

Why is full reorthogonalization in Lanczos expensive for large $k$?

<details>
<summary>Hint 1</summary>

**Hint.** Count all inner products through step k.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Separate basis work from matrix actions.

</details>

<details>
<summary>Solution</summary>

**Solution.**  Full reorthogonalization computes $q_{j+1}^{T}q_i$ and orthogonalizes against all $i\\le j$ at each step. Its total cost through step $k$ is $O(k^2n)$, in addition to $k$ applications of $A$. It can dominate when $Av$ is a cheap sparse or matrix-free operation and $k$ grows; for a dense unstructured $A$, the $O(kn^2)$ matrix-vector work can instead dominate while $k\\ll n$.

</details>

## Further exercises

### Exercise 5: Ritz residual
<a id="eigenvalue-iterations-ex-5"></a>

If $h_{k+1,k}=0.02$ and the last Ritz-vector component is $0.3$, find the residual norm.

<details>
<summary>Hint 1</summary>

**Hint.** Use the Arnoldi identity.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The outside vector has unit norm.

</details>

<details>
<summary>Solution</summary>

**Solution.** The norm is $0.02(0.3)=0.006$ in exact arithmetic. A computed relation also needs allowance for orthogonality and operator-action errors.

</details>

### Exercise 6: Invariant breakdown
<a id="eigenvalue-iterations-ex-6"></a>

What does an exactly zero Arnoldi normalization coefficient mean?

<details>
<summary>Hint 1</summary>

**Hint.** Read the orthogonalization residual.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Ask whether A maps the current subspace into itself.

</details>

<details>
<summary>Solution</summary>

**Solution.** The new product already lies in the current subspace, so it is invariant under A. The exact process stops before division by zero, and the projected eigenpairs are exact for that invariant restriction. The subspace can still omit eigenpairs outside it.

</details>

### Exercise 7: Transformed scalar
<a id="eigenvalue-iterations-ex-7"></a>

For shift $\\sigma=2$ and transformed Ritz value $\\mu=4$, find the associated original value.

<details>
<summary>Hint 1</summary>

**Hint.** Invert the spectral transformation.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Add the shift.

</details>

<details>
<summary>Solution</summary>

**Solution.** The associated scalar is $2+1/4=2.25$. Its accuracy needs an original residual; a scalar transformation alone supplies no eigenpair certificate.

</details>

### Exercise 8: Block overlap
<a id="eigenvalue-iterations-ex-8"></a>

Why is a magnitude gap insufficient if $C_1$ is singular in the block theorem?

<details>
<summary>Hint 1</summary>

**Hint.** Inspect the inverse used in the graph representation.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A missing target direction may never appear.

</details>

<details>
<summary>Solution</summary>

**Solution.** The normalization $C_1^{-1}$ does not exist, and the start fails to span every desired direction. For a diagonal matrix a block supported only on other coordinates remains in that invariant coordinate space forever, even with a strict spectral gap.

</details>

### Exercise 9: Lanczos first step
<a id="eigenvalue-iterations-ex-9"></a>

For the two-by-two worked matrix, compute the one-step Ritz pair and residual.

<details>
<summary>Hint 1</summary>

**Hint.** Project onto the initial coordinate.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Subtract its scalar multiple.

</details>

<details>
<summary>Solution</summary>

**Solution.** The Ritz pair is $(2,e_1)$. The residual is $Ae_1-2e_1=e_2$, of norm one. This is consistent with eigenvalues one and three, neither of which is yet resolved by a single-vector subspace.

</details>

### Exercise 10: Memory convention
<a id="eigenvalue-iterations-ex-10"></a>

What extra storage is omitted when a basis count uses exactly k length-n vectors?

<details>
<summary>Hint 1</summary>

**Hint.** List temporary vectors and the new outside vector.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Include operator and preconditioner storage.

</details>

<details>
<summary>Solution</summary>

**Solution.** An implementation may retain an additional Arnoldi vector, work arrays, the projected matrix, residual histories and shifted factors or preconditioner data. A basis-only figure is a lower-level storage component, not a full process memory guarantee.

</details>

## Sources

Saad, [Numerical Methods for Large Eigenvalue Problems](https://epubs.siam.org/doi/10.1137/1.9781611970739.ch8), develops spectral transformations and preconditioning; the full Ritz-value polynomial convergence and restarted-method analyses are external dependencies. Kelley, [Iterative Methods for Linear and Nonlinear Equations](https://epubs.siam.org/doi/book/10.1137/1.9781611970944), supplies related Krylov foundations. The graph convergence, Arnoldi residual and Hermitian tridiagonality statements used directly here are proved above. No specific installed ARPACK behavior or unreported iteration count is asserted.

<a id="looking-backward-and-forward"></a>

## Summary

Eigenvalue iterations approximate a specified eigenline or invariant subspace, with starting overlap and gaps governing what they can reach. Arnoldi supplies a projected problem and a computable residual; symmetry reduces it to Lanczos. Exact breakdown identifies an invariant space, while finite arithmetic and inexact solves require additional diagnostics. Shift-and-invert improves a selected separation at the cost of linear solves and original-residual verification.
`;export{e as default};