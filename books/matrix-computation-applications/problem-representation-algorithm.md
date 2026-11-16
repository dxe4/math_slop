
# Problem, Representation, Algorithm

Every matrix computation has three layers: the mathematical problem, the data representation, and the algorithm that acts on that representation. Confusing these layers is a common source of wasted effort and incorrect conclusions. A million-by-million diagonal operator is trivial if stored by its diagonal, yet impossible if forced into a dense array. This chapter separates the layers, introduces the vocabulary needed to compare algorithms, and establishes the habit of asking what structure is present before choosing a method.

## The three layers

Consider the task "solve $Ax = b$." At first glance this is a single request, but it unpacks into distinct decisions.

**The mathematical problem** is the relationship we wish to satisfy. It might be:
- find $x$ such that $Ax = b$ for a given nonsingular $A$;
- find a vector $x$ that minimizes $\lVert Ax - b \rVert_{2}$ when no exact solution exists;
- find a rank-$k$ matrix $B$ that minimizes $\lVert A - B \rVert_{2}$;
- find an eigenvalue $\lambda$ and eigenvector $v$ with $Av = \lambda v$.

The problem statement includes hypotheses: $A$ is nonsingular, or $A$ has full column rank, or $A$ is symmetric positive definite. Violating a hypothesis without checking is a frequent source of error.

**The representation** is how $A$ is stored or accessed. Possibilities include:
- dense array: every entry $a_{ij}$ is stored explicitly;
- sparse structure: only nonzero entries and their indices are stored;
- implicit operator: a routine that computes $v \mapsto Av$ without exposing entries;
- streamed blocks: $A$ is too large for memory and arrives in chunks;
- structured form: Toeplitz, circulant, banded, or hierarchical low-rank.

The representation constrains which algorithms are feasible. A dense factorization that needs $\Theta(n^{3})$ operations and $\Theta(n^{2})$ memory is impossible for an implicit operator, and wasteful for a sparse matrix whose nonzeros are $\Theta(n)$.

**The algorithm** is the sequence of operations that produces an output. Examples include Gaussian elimination with partial pivoting, Householder QR, conjugate gradients, randomized range finding, or the Lanczos iteration. The same problem on the same representation may admit several algorithms with different costs, stability properties, and parallel scalability.

## Why the distinction matters

Consider solving a discretized partial differential equation with $n = 10^{6}$ using a dense LU factorization. The matrix was stored in sparse format, but the solver converted it to dense. The computation would have needed $8 \times 10^{12}$ bytes of memory, roughly eight terabytes, and $O(10^{18})$ floating-point operations. The correct approach was a sparse direct method or an iterative solver, because the representation carried structural information that the algorithm should have exploited.

Conversely, an algorithm that assumes sparsity can be catastrophically slow if the matrix fills in during factorization. Fill-in occurs when elimination creates nonzeros in positions that were zero in the original matrix. The choice of ordering can reduce fill-in, but for some matrices direct factorization is fundamentally expensive and an iterative method is preferable.

## A decision checklist

Before selecting an algorithm, answer the following questions:

1. What is the exact mathematical problem? Is it a linear system, least-squares fit, eigenvalue query, or matrix approximation?
2. What hypotheses does the problem impose? Symmetry? Definiteness? Nonsingularity? Full rank?
3. How is the matrix represented? Dense, sparse, implicit, structured, or distributed?
4. What is the size and the nonzero pattern? Does the pattern suggest fill-in or fast matrix-vector products?
5. What outputs are required? Only $x$, or also the factorization, condition estimate, residual, or error bound?
6. What accuracy is needed, and in what norm? A backward-stable solve may be sufficient, or a componentwise bound may be necessary.
7. Are there multiple right-hand sides? If so, factorization pays off; if not, an iterative method may be cheaper.
8. Is the problem part of a sequence, as in time-stepping or optimization? If $A$ changes slowly, updating a factorization can save work.

## Example: three representations of the same operator

**Example 1.1 (Worked calculation).**

Let $A$ be the tridiagonal matrix with $2$ on the diagonal and $-1$ on the sub- and super-diagonals, arising from a one-dimensional Laplacian. For $n = 5$,

$$
A = \begin{pmatrix}
2 & -1 & 0 & 0 & 0 \\
-1 & 2 & -1 & 0 & 0 \\
0 & -1 & 2 & -1 & 0 \\
0 & 0 & -1 & 2 & -1 \\
0 & 0 & 0 & -1 & 2
\end{pmatrix}.
$$

**Dense representation.** Store all $25$ entries and use a generic dense LU implementation, which costs $\sim (2/3)n^{3}$ operations because it does not exploit the zero pattern. For this tridiagonal matrix, elimination itself preserves bandwidth: the mathematical factors are lower and upper bidiagonal, even if a dense implementation stores them in dense arrays.

**Sparse representation.** Store only $3n - 2$ nonzeros. A sparse LU with a good ordering preserves the band structure and costs $O(n)$ operations.

**Implicit representation.** Provide a routine that computes $Av$ for any vector $v$ by the formula $(Av)_{i} = 2v_{i} - v_{i-1} - v_{i+1}$, with $v_{0} = v_{n+1} = 0$. No matrix entries are stored at all. The conjugate gradients algorithm can solve $Ax = b$ using only matrix-vector products. Its standard worst-case energy-norm bound requires $O\!\left(\sqrt{\kappa}\log(1/\epsilon)\right)$ iterations to reduce the relative error to a declared tolerance $\epsilon$, where $\kappa$ is the condition number; observed convergence can be faster because the full eigenvalue distribution matters.

For $n = 10^{6}$, the dense approach is infeasible, the sparse direct method is practical, and the relative cost of the implicit iterative method depends on its iteration count, preconditioner, and requested accuracy.

## Common errors and misconceptions

**Error: confusing size with difficulty.** A $100 \times 100$ dense matrix with a condition number of $10^{16}$ can be harder to solve accurately than a $10^{6} \times 10^{6}$ well-conditioned sparse system.

**Error: ignoring representation cost.** An algorithm with fewer floating-point operations may be slower if it accesses memory irregularly. Cache-friendly dense BLAS routines can outperform theoretically superior sparse methods on small or medium problems.

**Error: solving the wrong problem.** Computing all eigenvalues of a matrix when only the spectral radius is needed wastes effort. Computing the full SVD when a rank-$k$ approximation suffices is similarly inefficient.

**Error: assuming structure without verification.** If measured data produce a matrix that should be symmetric, replacing it by $(A + A^{T})/2$ may be reasonable, but only after deciding whether asymmetry is noise, a bug, or genuine model information. Structure is a contract between the data and the algorithm.

## An access contract is part of the problem

**Definition 1.2 (Operator access).** For a fixed matrix $A\in\mathbb C^{m\times n}$, a forward-product oracle accepts a vector $v\in\mathbb C^n$ and returns $Av\in\mathbb C^m$. An adjoint-product oracle accepts $w\in\mathbb C^m$ and returns $A^*w\in\mathbb C^n$. These are different promises. Storage for the input and output vectors is still required even when no entries of $A$ are stored.

This distinction matters in least squares. The gradient of $\frac12\|Ax-b\|_2^2$ is $A^*(Ax-b)$, so the usual gradient method needs both products. CG for an SPD square matrix needs only the forward product because the adjoint equals the operator. An arbitrary forward oracle does not certify symmetry, and testing finitely many random pairs cannot establish an exact identity for every vector. In a discretization, symmetry and definiteness should follow from its construction; numerical checks can expose assembly mistakes.

Entry access is theoretically recoverable from an exact oracle by querying every coordinate vector. That requires $n$ products and storage for $mn$ answers if the full matrix is retained. Consequently, saying that dense LU is infeasible from an implicit representation means that it is unavailable within the intended matrix-free cost and storage contract. It does not mean that a finite-dimensional linear map contains less mathematical information than its entries. A cost statement must say which operations are inexpensive.

**Definition 1.3 (Work, storage, and communication).** Arithmetic work counts specified scalar operations. Storage counts simultaneously retained scalars and indices. Communication counts words moved or messages between stated memory levels. These are separate functions of dimension, sparsity, block size, processor count, and requested accuracy. An $O(n)$ product does not imply an $O(n)$ solve unless the number of products is also controlled.

For example, storing $s$ nonzeros in compressed sparse row form needs $s$ values, $s$ column indices, and $m+1$ row offsets. In binary64 with 32-bit indices, the nominal byte count is $12s+4(m+1)$, before alignment, metadata, and working vectors. The index type must be wide enough for both column labels and offsets. An array that is sparse mathematically can still exceed the indexing limit of a particular representation.

## A representation-aware convergence theorem

A simple iteration provides a complete example of the connection between an access model and a theorem. Suppose $A$ is square, $M$ is a fixed linear map that can be applied inexpensively, and we iterate
$$
x_{k+1}=x_k+M(b-Ax_k).
$$
The map $M$ approximates the action of an inverse; constructing an explicit inverse is unnecessary. A diagonal reciprocal, a triangular solve, or a few multigrid operations can define such a map. For the following theorem the same linear $M$ must be used at every step.

**Theorem 1.4 (Contraction of a fixed correction).** In an induced matrix norm, suppose
$$
\|I-MA\|\le q<1.
$$
Then $A$ is nonsingular, the iteration converges from every $x_0$ to the unique solution $x_*=A^{-1}b$, and
$$
\|x_*-x_k\|\le q^k\|x_*-x_0\|.
$$
Moreover, the computable correction gives
$$
\|x_*-x_k\|\le\frac{\|M(b-Ax_k)\|}{1-q}.
$$

*Proof.* If $Az=0$, then $z=(I-MA)z$, hence $\|z\|\le q\|z\|$. Since $q<1$, $z=0$. A square matrix with zero null space is nonsingular. Subtracting the iteration from $x_*=x_*+M(b-Ax_*)$ gives $e_{k+1}=(I-MA)e_k$. Induction and submultiplicativity give the geometric bound. Write $c_k=M(b-Ax_k)=MAe_k$. Thus $e_k=c_k+(I-MA)e_k$, and $(1-q)\|e_k\|\le\|c_k\|$. This proves the final estimate. $\square$

The theorem is exact arithmetic. In a computed iteration, suppose the implementation adds an error $d_k$ to the update, with $\|d_k\|\le\delta$. The same subtraction yields
$$
\|e_k\|\le q^k\|e_0\|+
\delta\sum_{j=0}^{k-1}q^j
\le q^k\|e_0\|+\frac{\delta}{1-q}.
$$
This follows by induction on the recurrence $\|e_{k+1}\|\le q\|e_k\|+\delta$. It explains a rounding or inexact-product floor without promising that every implementation attains it. If the oracle returns approximate products, their errors belong in $d_k$. If $M$ changes, this fixed-operator proof must be replaced by a theorem for the actual sequence.

A spectral radius below one can also characterize convergence of a stationary finite-dimensional iteration, but a small spectral radius is not the same as a small induced norm. Nonnormal powers can grow before decaying. We use the stronger norm assumption here because it supplies a direct quantitative bound and a reliable stopping certificate.

**Example 1.5 (An inexpensive correction with an explicit rate).** Let
$$
A=\begin{pmatrix}2&-1\\-1&2\end{pmatrix},\qquad
b=\binom10,\qquad M=\tfrac12I,\qquad x_0=0.
$$
Then $I-MA=\begin{pmatrix}0&1/2\\1/2&0\end{pmatrix}$ has infinity norm $q=1/2$. The first three iterates are
$$
x_1=(1/2,0)^T,\quad x_2=(1/2,1/4)^T,\quad
x_3=(5/8,1/4)^T.
$$
Solving the two equations exactly gives $x_*=(2/3,1/3)^T$. At $x_3$, the residual is $(0,1/8)^T$, so $\|Mr_3\|_\infty=1/16$. The theorem certifies error at most $1/8$. The actual infinity-norm error is $1/12$, consistent with that bound. No entrywise inverse was used in the iteration. The exact solution was computed separately to interpret this small example.

## A small backward-stability proof

For a diagonal problem the arithmetic analysis is short enough to do completely. Let $D=\operatorname{diag}(a_1,\ldots,a_n)$ with every $a_i\ne0$. The representation stores the $n$ entries, and the algorithm performs $n$ divisions.

**Proposition 1.6 (Diagonal solve).** Assume each computed division satisfies
$$
\widehat x_i=(b_i/a_i)(1+\delta_i),\qquad
|\delta_i|\le u<1,
$$
with no overflow or underflow invalidating this relative model. Then there is a diagonal perturbation $E$ such that
$$
(D+E)\widehat x=b,\qquad
|E_{ii}|\le\frac{u}{1-u}|a_i|.
$$
Consequently the algorithm has componentwise small matrix backward error.

*Proof.* Set $E_{ii}=a_i/(1+\delta_i)-a_i$. Since $1+\delta_i\ne0$, substitution gives $(a_i+E_{ii})\widehat x_i=b_i$. Also
$$
|E_{ii}|=|a_i|\frac{|\delta_i|}{|1+\delta_i|}
\le |a_i|\frac{u}{1-u}.
$$
If $b_i=0$, an exact zero quotient permits $\delta_i=0$ and the same construction. All off-diagonal entries of $E$ are zero. $\square$

A componentwise bound respects the diagonal structure. It does not imply that the solution has small forward error for arbitrary inaccurate data. If a tiny diagonal coefficient is uncertain relative to its own size, division amplifies that uncertainty. Conversely, a huge normwise condition number can overstate sensitivity when the actual perturbation model is componentwise and the diagonal entries are independently known to high relative accuracy. The perturbation model should match the representation and the scientific question.

**Example 1.7 (A large normwise condition number with a structured solve).** Let $D=\operatorname{diag}(1,10^{-12})$ and $b=(1,10^{-12})^T$. The exact solution is $(1,1)^T$ and $\kappa_2(D)=10^{12}$. A diagonal solve performs two divisions and is covered by Proposition 1.6. If each input component is known to small relative error, both quotients can have small relative error: writing perturbed data as $a_i(1+\alpha_i)$ and $b_i(1+\beta_i)$ gives
$$
\widetilde x_i/x_i=(1+\beta_i)/(1+\alpha_i).
$$
For $|\alpha_i|,|\beta_i|\le\epsilon<1$, its deviation from one is at most $2\epsilon/(1-\epsilon)$. In contrast, a normwise perturbation of size $10^{-12}\|b\|_2$ may change the second component of $b$ by its entire value. These statements use different admissible data errors and therefore answer different questions.

## Structure must be proved before it is exploited

For the tridiagonal example above, positive definiteness is not an inference from a few successful iterations. With $v_0=v_{n+1}=0$,
$$
v^TAv=\sum_{i=0}^{n}(v_{i+1}-v_i)^2.
$$
Expanding the squares gives $2\sum_{i=1}^nv_i^2-2\sum_{i=1}^{n-1}v_iv_{i+1}$, exactly the quadratic form of $A$. If it is zero, every consecutive difference is zero, and the boundary values force $v=0$. Thus $A$ is SPD. This proof supplies the hypothesis for CG at every dimension; a positive Rayleigh quotient for one vector would not.

A good algorithm choice also separates setup from repeated application. If a factorization costs $F$ and each subsequent solve costs $S$, then $k$ right-hand sides cost $F+kS$. If an iterative competitor costs $P$ to set up and $I_j$ for right-hand side $j$, its total is $P+\sum I_j$. A comparison that reports only the fastest application omits setup. Reusing a preconditioner across related systems is legitimate when convergence is checked for those new systems; closeness in a vague descriptive sense is not a theorem about the new preconditioned spectrum.

The rest of this book develops algorithms that satisfy different contracts. Orthogonal factorizations protect Euclidean geometry; pivoted elimination manages small pivots; Krylov methods replace matrix storage by a growing subspace; structured transforms compress products; randomized methods trade deterministic work for specified probabilistic guarantees. Their common requirement is an explicit statement of what is given, what is computed, and what evidence supports the result.

## Practice exercises with solutions

### Exercise 1.1
<a id="problem-representation-algorithm-ex-1"></a>

A matrix $A \in \mathbb{R}^{n \times n}$ is given as an implicit operator: you can compute $Av$ for any $v$, but you cannot access individual entries $a_{ij}$. Which of the following algorithms are feasible?

- Dense LU factorization.
- Conjugate gradients (requires matrix-vector products and an SPD operator).
- Gaussian elimination with partial pivoting (needs entry examination).
- Power iteration for the dominant eigenvalue.

<details>
<summary>Hint 1</summary>

**Hint.** Separate entry access from product access.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For CG, check the operator hypothesis as well as the available operation.

</details>
<details>
<summary>Solution</summary>

**Solution.** Power iteration uses the stated oracle alone. Conjugate gradients additionally requires verified symmetry and positive definiteness; product access does not establish those hypotheses. Standard dense LU and pivoted elimination need an entry representation. It is mathematically possible to recover that representation using one query per coordinate vector, but doing so can violate the intended matrix-free storage and work budget. They are therefore unavailable as direct matrix-free methods; absolute feasibility depends on the declared resources.

</details>

### Exercise 1.2
<a id="problem-representation-algorithm-ex-2"></a>

A symmetric positive-definite matrix $A$ has $n = 10^{4}$ and approximately $10^{5}$ nonzeros. You must solve $Ax = b$ for a single right-hand side to a relative residual tolerance of $10^{-6}$. Compare the storage and operation counts of:

- dense LU factorization;
- sparse Cholesky factorization;
- conjugate gradients with no preconditioner.

<details>
<summary>Hint 1</summary>

**Hint.** Compute dense storage first; do not infer sparse factor fill from input nonzeros.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Write CG work as the cost per product times an unknown iteration count.

</details>
<details>
<summary>Solution</summary>

**Solution.** Dense LU needs $n^{2}=10^{8}$ storage entries and $(2/3)n^{3}\approx6.7\times10^{11}$ operations. The values of $n$ and $\operatorname{nnz}(A)$ do not determine sparse-Cholesky fill or work; graph structure and ordering do. As a conditional example, a regular two-dimensional mesh with nested dissection typically needs $O(n\log n)$ factor storage and $O(n^{3/2})$ factorization work. CG is applicable because the prompt states that $A$ is SPD; it uses $O(n)$ vector storage and $O(\operatorname{nnz}(A))$ work per iteration, while its iteration count depends on the spectrum and any preconditioner. More structure is needed for a numerical total-cost comparison.

</details>

### Exercise 1.3
<a id="problem-representation-algorithm-ex-3"></a>

You are given a tall matrix $A \in \mathbb{R}^{m \times n}$ with $m \gg n$ and full column rank. The product $A^{T}A$ is small ($n \times n$) and well conditioned. A colleague proposes solving the least-squares problem $\min_{x} \lVert Ax - b \rVert_{2}$ by forming the normal equations $A^{T}Ax = A^{T}b$ and using dense Cholesky. Under what circumstances is this reasonable, and what risk remains?

<details>
<summary>Hint 1</summary>

**Hint.** Compare the condition number before and after forming the Gram matrix.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The issue is the perturbation to the original least-squares data.

</details>
<details>
<summary>Solution</summary>

**Solution.** The normal equations are reasonable when $A^{T}A$ is well conditioned and $n$ is small enough that the $O(n^{3})$ Cholesky cost is acceptable. The risk is that $\kappa_{2}(A^{T}A) = \kappa_{2}(A)^{2}$; if $A$ is even moderately ill conditioned, the normal equations amplify rounding errors. A QR or SVD approach controls backward error directly on $A$ and is safer when the conditioning of $A$ is uncertain.

</details>

### Exercise 1.4
<a id="problem-representation-algorithm-ex-4"></a>

A time-dependent simulation requires solving $A(t_{k})x_{k} = b_{k}$ at each step $k$, where $A(t)$ changes slowly. What algorithmic strategy can amortize factorization cost across steps?

<details>
<summary>Hint 1</summary>

**Hint.** Separate expensive setup from inexpensive reuse.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A previous factor may define a preconditioner even when it is no longer an exact factor.

</details>
<details>
<summary>Solution</summary>

**Solution.** If $A(t_{k+1}) \approx A(t_{k})$, reuse the previous factorization as a preconditioner for an iterative solver, or update the factorization by low-rank corrections. If the change is truly slow, refactor only every few steps and use the stale factorization as a preconditioner in between.

</details>

### Exercise 1.5 — Recovering entries from an oracle
<a id="problem-representation-algorithm-ex-5"></a>

Explain how an exact forward-product oracle could reveal all columns of an $m\times n$ matrix. Why is this usually inappropriate for a large matrix-free problem?

<details>
<summary>Hint 1</summary>

**Hint.** Apply the operator to coordinate vectors.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Count queries and stored outputs.

</details>
<details>
<summary>Solution</summary>

**Solution.** For coordinate vector $e_j$, $Ae_j$ is column $j$. Thus $n$ queries recover every entry. Retaining all answers needs $mn$ scalars, and the total work is $n$ product costs. This is mathematically possible but violates the storage and cost purpose of a matrix-free representation at large scale.

</details>

### Exercise 1.6 — A contraction certificate
<a id="problem-representation-algorithm-ex-6"></a>

For $A=\operatorname{diag}(2,3)$ and $M=\frac13I$, find $q=\|I-MA\|_2$ and a sufficient iteration count for $\|e_k\|_2\le10^{-6}\|e_0\|_2$.

<details>
<summary>Hint 1</summary>

**Hint.** The iteration matrix is diagonal.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Solve the geometric inequality.

</details>
<details>
<summary>Solution</summary>

**Solution.** Here $I-MA=\operatorname{diag}(1/3,0)$, so $q=1/3$. We need $3^{-k}\le10^{-6}$, or $k\ge6\log(10)/\log(3)\approx12.58$. Thus 13 steps suffice in exact arithmetic.

</details>

### Exercise 1.7 — An inexact iteration floor
<a id="problem-representation-algorithm-ex-7"></a>

Suppose $q=0.8$ and each update error has norm at most $10^{-12}$. Bound the limiting upper estimate supplied by the inexact recurrence.

<details>
<summary>Hint 1</summary>

**Hint.** Sum a geometric series.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Separate the initial-error term from the persistent-error term.

</details>
<details>
<summary>Solution</summary>

**Solution.** The recurrence gives $\|e_k\|\le0.8^k\|e_0\|+10^{-12}(1-0.8^k)/(1-0.8)$. The initial term tends to zero and the bound tends to $5\times10^{-12}$. This is an upper error estimate, not a claim that the actual error must equal that value.

</details>

### Exercise 1.8 — Sparse storage contract
<a id="problem-representation-algorithm-ex-8"></a>

Estimate nominal CSR bytes for an $n=10^6$ square matrix with $s=5\times10^6$ stored entries, binary64 values and 32-bit indices. Include six binary64 working vectors.

<details>
<summary>Hint 1</summary>

**Hint.** Use $12s+4(n+1)$ for the matrix.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Each vector needs $8n$ bytes.

</details>
<details>
<summary>Solution</summary>

**Solution.** The matrix needs $60,000,000+4,000,004=64,000,004$ bytes. Six vectors need $48,000,000$ bytes, giving $112,000,004$ bytes, about 112 MB decimal before workspace and object overhead. The offsets fit 32-bit signed integers for this stated $s$; larger problems require checking that limit.

</details>

### Exercise 1.9 — A structure nonexample
<a id="problem-representation-algorithm-ex-9"></a>

Change the tridiagonal matrix's first diagonal entry from $2$ to $0$, keeping its first off-diagonal entry $-1$ and assuming $n\ge2$. Show that symmetry survives but positive definiteness fails.

<details>
<summary>Hint 1</summary>

**Hint.** Use a vector supported on the first two coordinates.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Choose its second entry small and positive.

</details>
<details>
<summary>Solution</summary>

**Solution.** For $v=(1,t,0,\ldots)^T$, the quadratic form is $2t^2-2t$. It is negative whenever $0<t<1$. The matrix remains symmetric but is not positive definite, so the earlier CG contract no longer applies.

</details>

### Exercise 1.10 — Multiple right-hand sides
<a id="problem-representation-algorithm-ex-10"></a>

A direct method costs $F=10^9$ operations to factor and $S=2\times10^6$ per solve. A competing iteration costs $2\times10^7$ per right-hand side and negligible setup. For which positive integer $k$ does the direct total become smaller?

<details>
<summary>Hint 1</summary>

**Hint.** Compare $F+kS$ with the iterative total.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Solve the strict inequality before rounding.

</details>
<details>
<summary>Solution</summary>

**Solution.** We need $10^9+2\times10^6k<2\times10^7k$, hence $k>10^9/(1.8\times10^7)=55.\overline5$. The direct method is cheaper in this arithmetic model for $k\ge56$. Memory and communication may change a runtime comparison.

</details>

<a id="looking-backward-and-forward"></a>

## Connections

This chapter established the habit of separating problem, representation, and algorithm. The next chapter, *Floating-Point and Factorization*, develops the arithmetic model and direct algorithms; *Conditioning and Stability* then relates their error to sensitivity of the data.

## Sources

- Lloyd N. Trefethen and David Bau III, [Numerical Linear Algebra](https://doi.org/10.1137/1.9780898719574), SIAM, 1997.
- Gene H. Golub and Charles F. Van Loan, [Matrix Computations](https://doi.org/10.56021/9781421407944), fourth edition, Johns Hopkins University Press, 2013.
- Nicholas J. Higham, [Accuracy and Stability of Numerical Algorithms](https://doi.org/10.1137/1.9780898718027), second edition, SIAM, 2002.

The exposition, proofs, and worked calculations in this chapter are original to Euler; these references provide further reading and the stated specialist results.

## Summary

A matrix algorithm is selected for a precise problem and an explicit access contract. Work, storage, communication, conditioning, and numerical error answer different questions. The fixed-correction theorem supplies a convergence certificate, and the diagonal solve shows how a short rounding analysis can establish structured backward stability. The next chapter develops the arithmetic model behind larger factorizations.
