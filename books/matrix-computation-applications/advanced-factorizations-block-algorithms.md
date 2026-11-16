
# Advanced Factorizations and Block Algorithms

Modern processors achieve peak performance only when computation is organized into blocks that fit in cache. This chapter introduces block LU, block Cholesky, and recursive factorizations, explains how they improve memory locality, and discusses the trade-offs between block size, parallelism, and numerical stability.

## Block LU factorization

Partition $A$ into $b \times b$ blocks:

$$
A = \begin{pmatrix}
A_{11} & A_{12} \\
A_{21} & A_{22}
\end{pmatrix}.
$$

In the simple unpivoted derivation, assume the leading block $A_{11}$ is nonsingular. Block LU factors $A_{11}=L_{11}U_{11}$, solves for $L_{21}=A_{21}U_{11}^{-1}$ and $U_{12}=L_{11}^{-1}A_{12}$, and updates the Schur complement $A_{22}-L_{21}U_{12}$. A nonsingular $A$ need not have nonsingular $A_{11}$—the $2\times2$ exchange matrix is the smallest counterexample. Production LU therefore uses row permutations and panel pivoting that modify this clean block identity. The operations on trailing blocks are matrix-matrix multiplications (level-3 BLAS), which can achieve high flop rates.

The choice of block size $b$ balances cache reuse against the overhead of factoring many small blocks. Values such as $32$ through $256$ are useful experimental candidates, but the effective choice depends on scalar type, kernels, cache hierarchy, matrix shape, and hardware.

## Block Cholesky

For SPD $A$, block Cholesky factors each diagonal block $A_{ii} = L_{ii}L_{ii}^{T}$, solves triangular systems for the subdiagonal blocks, and updates the trailing submatrix by a symmetric rank-$b$ update. The dominant trailing updates and triangular solves use level-3 BLAS; diagonal-block factorizations still have their own internal operations. SPD Schur complements prove exact-arithmetic success. Finite-precision backward stability additionally requires the standard rounding-error analysis, cited below.

## Recursive factorizations

Recursive algorithms divide the matrix in half, factor each half, and combine the results. The recursion continues until the subproblems fit in cache, at which point a standard dense algorithm is used. Recursive Cholesky and LU can achieve better cache locality than fixed-block algorithms, especially for deep memory hierarchies.

## Parallelism and communication

Block algorithms expose parallelism at two levels:
- **Task parallelism:** independent block updates can be executed on different cores.
- **Data parallelism:** matrix-matrix multiplications within each block can use SIMD instructions.

Communication-avoiding algorithms reduce the number of messages between processors by reorganizing the computation. For example, the CA-LU algorithm factors a panel of $b$ columns, communicates the factors, and updates $b$ rows and columns in parallel, reducing latency costs.

## Example: block size impact

**Example 4.1 (Worked calculation).**

For a hypothetical $4000\times4000$ matrix on a processor with an $8$ MB L3 cache, each $128\times128$ binary64 block occupies about $131$ KB, so three such blocks occupy about $393$ KB before workspace and competing data. This capacity calculation makes $b=128$ a candidate, not a performance conclusion. Values such as $16$, $128$, and $1024$ should be profiled because kernel efficiency, associativity, packing, and the rest of the working set determine traffic.

## Common errors and misconceptions

**Error: choosing block size without reference to hardware.** The optimal block size depends on cache size, memory bandwidth, and the number of cores. Profile on the target hardware rather than guessing.

**Error: ignoring pivoting in block LU.** Block LU without pivoting can fail even for a nonsingular matrix. A production algorithm applies row permutations while factoring panels and propagates them to the remaining blocks; stability still depends on the resulting growth factor. Restricting pivot searches to a block or panel may change stability and needs its own analysis.

**Error: assuming recursion is always better.** Recursive algorithms have overhead from function calls and stack management. For small matrices, iterative block algorithms are usually faster.

## Block algebra before block performance

**Definition 4.2 (Conforming block partition).** In a two-by-two partition of a square matrix, let $A_{11}$ be $p\times p$, $A_{22}$ be $q\times q$, $A_{12}$ be $p\times q$, and $A_{21}$ be $q\times p$, with $p,q\ge1$. Products and sums in a block identity are valid only when these dimensions agree. A block is a matrix, so the order of multiplication cannot be reversed without a reason.

**Theorem 4.3 (Schur factorization).** If $A_{11}$ is nonsingular and
$S=A_{22}-A_{21}A_{11}^{-1}A_{12}$, then
$$
A=
\begin{pmatrix}I&0\\A_{21}A_{11}^{-1}&I\end{pmatrix}
\begin{pmatrix}A_{11}&A_{12}\\0&S\end{pmatrix}.
$$
Consequently $A$ is nonsingular if and only if $S$ is nonsingular, and
$\det A=\det A_{11}\det S$.

*Proof.* Block multiplication gives the first row $(A_{11},A_{12})$ and second row $(A_{21},A_{21}A_{11}^{-1}A_{12}+S)$, which is the original second row. The left factor is invertible, with the negative of its off-diagonal block in its inverse. The right factor is block upper triangular; its null space is zero exactly when both diagonal blocks are nonsingular. Its determinant is the product of their determinants, while the left factor has determinant1. $\square$

The notation $A_{11}^{-1}$ expresses the identity. An implementation obtains $A_{11}^{-1}A_{12}$ by solving systems, or computes $A_{21}A_{11}^{-1}$ by a right-side solve. These are different orientations. Replacing a right-side solve by left multiplication in the wrong order produces a different matrix. Forming a dense inverse also spends extra work and introduces an unnecessary error pathway.

For a right-hand side partitioned as $(b_1,b_2)^T$, solve the reduced system
$$
Sx_2=b_2-A_{21}A_{11}^{-1}b_1,\qquad
A_{11}x_1=b_1-A_{12}x_2.
$$
This is exact elimination. It can be efficient when a large block is already factored, and it also exposes why a poor leading block may be harmful. Nonsingularity of the full matrix does not protect an arbitrary leading block from singularity or extreme ill conditioning.

**Example 4.4 (A reduced scalar system).** Take
$$
A_{11}=\begin{pmatrix}2&0\\0&3\end{pmatrix},\quad
A_{12}=\binom13,\quad A_{21}=(4,6),\quad A_{22}=10,
\quad b=(3,6,20)^T.
$$
The block solve gives $A_{11}^{-1}A_{12}=(1/2,1)^T$, so
$S=10-(4/2+6)=2$. Also $A_{11}^{-1}b_1=(3/2,2)^T$, giving reduced right-hand side $20-4(3/2)-6(2)=2$. Hence $x_2=1$, and
$A_{11}x_1=(2,3)^T$, so $x_1=(1,1)^T$. The full answer is the all-ones vector. Its residual is zero by direct row multiplication, and $\det A=(2\cdot3)\cdot2=12$. The matrix is nonsymmetric, so Cholesky is not applicable.

## Positive definiteness passes to the correct complement

**Theorem 4.5 (SPD block complement).** Suppose $A$ is real symmetric positive definite. Then $A_{11}$ and $S=A_{22}-A_{21}A_{11}^{-1}A_{12}$ are SPD. If $A_{11}=L_{11}L_{11}^T$ and $S=L_{22}L_{22}^T$, the block Cholesky factor is
$$
L=\begin{pmatrix}L_{11}&0\\L_{21}&L_{22}\end{pmatrix},
\qquad L_{21}L_{11}^T=A_{21}.
$$

*Proof.* For nonzero $y$, the vector $(y,0)$ gives
$y^TA_{11}y>0$, proving the first claim. For nonzero $z$, put
$w=(-A_{11}^{-1}A_{12}z,z)$. Symmetry of $A$ and $A_{11}^{-1}$ gives
$w^TAw=z^TSz>0$. Thus $S$ is SPD. The equation for $L_{21}$ implies
$L_{21}=A_{21}L_{11}^{-T}$, so
$L_{21}L_{21}^T=A_{21}A_{11}^{-1}A_{12}$. Multiplying $LL^T$ now reproduces every block of $A$. $\square$

**Example 4.6 (A block Cholesky calculation).** Let
$$
A=\begin{pmatrix}4&2&2\\2&3&1\\2&1&5\end{pmatrix}
$$
and choose its leading scalar block4. Then $L_{11}=2$ and
$L_{21}=(1,1)^T$. The complement is
$$
\begin{pmatrix}3&1\\1&5\end{pmatrix}
-\begin{pmatrix}1&1\\1&1\end{pmatrix}
=\begin{pmatrix}2&0\\0&4\end{pmatrix}.
$$
Its Cholesky factor is $\operatorname{diag}(\sqrt2,2)$, hence
$$
L=\begin{pmatrix}2&0&0\\1&\sqrt2&0\\1&0&2\end{pmatrix}.
$$
Multiplication checks all six independent entries. This also proves $A$ is SPD because $L$ is nonsingular and $v^TAv=\|L^Tv\|_2^2>0$ for every nonzero $v$. A block factor can therefore supply a structural proof when computed exactly; in floating point a residual and a definiteness margin must accompany it.

## Rounding in a trailing update

The exact trailing update is a matrix product and subtraction. Let $U\in\mathbb R^{q\times p}$ and $V\in\mathbb R^{p\times q}$. Under the standard arithmetic model, straightforward dot products give
$$
|\widehat P-UV|\le\gamma_p|U||V|.
$$
The proof applies the scalar dot-product result to each output entry. If $\widehat S=\operatorname{fl}(B-\widehat P)$, then entrywise
$$
|\widehat S-(B-UV)|
\le u|B|+\bigl(\gamma_p+u(1+\gamma_p)\bigr)|U||V|.
$$
Indeed, subtraction contributes at most $u(|B|+|\widehat P|)$, and
$|\widehat P|\le(1+\gamma_p)|U||V|$. Combining the two bounds proves the displayed result.

This is an absolute update-error bound. If $B$ and $UV$ nearly cancel, its size relative to the small Schur complement may be large. A matrix multiplication kernel that is fast does not remove this conditioning issue. Conversely, an update with a small absolute perturbation can be entirely adequate when the full factorization has a controlled backward error. Higham's factorization analysis gives that global interpretation for standard blocked implementations under stated hypotheses; different pivoting strategies require their own bounds.

A fused multiply-add, parallel reduction, or changed block size alters the sequence of roundings. It may improve error or reproducibility in a particular environment, but identical formulas do not guarantee bitwise identical answers. Mathematical evidence should use a tolerance derived from an error budget rather than exact equality of two floating-point execution orders.

## A proved block iteration

Blocks can organize an iterative method as well as a direct factorization. Partition the coordinates into nonempty disjoint groups. In cyclic block Gauss–Seidel, hold all other coordinates fixed and solve exactly for the selected group to minimize
$\phi(x)=\frac12x^TAx-b^Tx$.

**Theorem 4.7 (Cyclic block Gauss–Seidel for SPD matrices).** For SPD $A$, exact cyclic block minimization converges to $x_*=A^{-1}b$ from every initial vector. One complete sweep contracts the error in the $A$-norm by a constant $q<1$ depending on $A$ and the partition.

*Proof.* Completing the square gives
$\phi(x)-\phi(x_*)=\frac12\|x-x_*\|_A^2$. Let $E_j$ be the matrix that inserts coordinates of block $j$. Its principal matrix $E_j^TAE_j$ is SPD, so the minimizing correction to an error $e$ is
$$
d=-E_j(E_j^TAE_j)^{-1}E_j^TAe.
$$
The updated error $e+d$ is $A$-orthogonal to every vector supported on that block. In particular $(e+d)^TAd=0$, and
$\|e\|_A^2=\|e+d\|_A^2+\|d\|_A^2$.
Thus each step cannot increase the error norm and equality holds only if its correction is zero.

A full sweep is a fixed linear map $G$. If $\|Ge\|_A=\|e\|_A$, every block step must have had zero correction. The error consequently stayed equal to $e$, and $E_j^TAe=0$ for every group. Since the groups cover all coordinates, $Ae=0$, hence $e=0$. On the compact $A$-unit sphere the continuous function $\|Ge\|_A$ attains a maximum. It is strictly below1, because equality would require a zero unit vector. Call the maximum $q$. Then $\|G^ke_0\|_A\le q^k\|e_0\|_A\to0$. $\square$

This proves convergence, but not rapid convergence uniformly in dimension. The constant can approach1 for a family of matrices or partitions. Inexact block solves, asynchronous updates, and changing blocks are separate algorithms and need separate assumptions. A block iteration can become a useful preconditioner, but using a nonsymmetric one-sided sweep inside ordinary CG would violate CG's symmetry contract; symmetric constructions are discussed later.

## Performance claims need an explicit model

For a recursive Cholesky factorization with equal halves, the recurrence in the exercises counts arithmetic. It does not by itself measure traffic between main memory and cache. Reusing a packed block across many products can reduce traffic even though the leading flop count is unchanged. Extra workspace for packed panels, temporary blocks, and concurrent tasks belongs in the storage account.

Likewise, a panel factorization contains dependencies that a large trailing matrix multiplication does not. The critical path can limit parallel speedup even when total work is large. A communication-avoiding variant changes how information is exchanged and possibly how pivots are selected. Calling it a reordering of standard LU without checking those changes would hide relevant numerical hypotheses.

The practical report should identify dimensions, scalar formats, block partition, pivoting rule, memory limits, and the quantities measured. It should give residual or factorization error beside timing. A capacity calculation such as the existing cache example is a useful first screen, while a claim that one block size is fastest requires measurements in the stated environment.

## An explicit block-sweep rate

For A=[[1,ρ],[ρ,1]] with |ρ|<1 and the two scalar blocks, a Gauss–Seidel sweep maps an error to (−ρe_2,ρ²e_2). The initial energy is (e_1+ρe_2)²+(1−ρ²)e_2²; the final energy is ρ²(1−ρ²)e_2². Thus the sharp one-sweep energy-norm contraction factor is |ρ|, attained when e_1=−ρe_2. The iteration matrix has spectral radius ρ², describing its later asymptotic rate.

As |ρ| approaches one, the proved contraction approaches one as well. A valid fixed-problem convergence proof therefore supplies no uniform fast-sweep guarantee across this nearly singular family. The example gives the constant that compactness established abstractly above and distinguishes a one-step norm bound from an asymptotic eigenvalue rate.

A block permutation used with Cholesky must preserve the symmetric problem. Simultaneously permuting rows and columns replaces A by its permutation congruence. Its quadratic form at v is the old positive quadratic form at the correspondingly permuted nonzero vector, so positive definiteness survives. A row permutation alone need not preserve it. For the SPD matrix with rows (2,1) and (1,2), swapping only rows gives the symmetric matrix with rows (1,2) and (2,1), whose determinant is negative and whose eigenvalues are three and minus one. Thus even retaining visible symmetry in this example does not rescue positivity. The row-pivot freedom of an LU calculation cannot be transferred unchanged to an SPD Cholesky calculation.

## Practice exercises with solutions

### Exercise 16.1
<a id="advanced-factorizations-block-algorithms-ex-1"></a>

A block LU algorithm with block size $b$ factors an $n \times n$ matrix. How many block factorizations of size $b \times b$ are performed?

<details>
<summary>Hint 1</summary>

**Hint.** First ask whether the block size divides the dimension.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Allow a smaller final block when it does not.

</details>
<details>
<summary>Solution</summary>

**Solution.** If $b$ divides $n$, there are $n/b$ block columns and that many diagonal-block factorizations. Otherwise there are $\lceil n/b\rceil$ block columns, with the final diagonal block smaller than $b\times b$.

</details>

### Exercise 16.2
<a id="advanced-factorizations-block-algorithms-ex-2"></a>

Why does block Cholesky preserve positive definiteness of the trailing submatrix?

<details>
<summary>Hint 1</summary>

**Hint.** Use a quadratic form of the full block matrix.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Choose its first block to cancel the cross terms.

</details>
<details>
<summary>Solution</summary>

**Solution.** The trailing matrix is the Schur complement of a principal block in the same SPD matrix. For any nonzero trailing vector $z$, evaluate the original quadratic form at $(-A_{11}^{-1}A_{12}z,z)$ to obtain $z^TSz>0$. Subtracting an arbitrary positive semidefinite matrix would not by itself preserve positive definiteness.

</details>

### Exercise 16.3
<a id="advanced-factorizations-block-algorithms-ex-3"></a>

Explain what must be specified before comparing the communication costs of standard LU and a communication-avoiding LU (CA-LU), and state the qualitative goal of CA-LU.

<details>
<summary>Hint 1</summary>

**Hint.** Specify what counts as communication.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Processor count alone omits the data distribution and algorithm.

</details>
<details>
<summary>Solution</summary>

**Solution.** A message count cannot be inferred from $P$ alone. It depends on matrix size, block size, processor-grid shape, memory available per processor, pivoting scheme, and whether the model counts latency, words moved, or both. CA-LU reorganizes panel work and reductions to approach communication lower bounds for the declared model, often trading extra arithmetic or storage for fewer synchronizations. Any asymptotic comparison must state that model and the particular algorithm variant.

</details>

### Exercise 16.4
<a id="advanced-factorizations-block-algorithms-ex-4"></a>

A recursive Cholesky algorithm splits an $n \times n$ matrix into two $n/2 \times n/2$ submatrices. Write the recurrence for the number of flops and solve it.

<details>
<summary>Hint 1</summary>

**Hint.** Count both recursive calls and the solve/update work.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Substitute a leading term $cn^3$ into the recurrence.

</details>
<details>
<summary>Solution</summary>

**Solution.** With $m=n/2$, one recursive factorization handles $A_{11}$, a triangular block solve forms $L_{21}$, a symmetric rank-$m$ update forms the Schur complement, and a second recursive factorization handles that complement. The solve and update together contribute $2m^3+O(n^2)$ flops in the usual leading-order count, so

$$T(n)=2T(n/2)+2(n/2)^3+O(n^2).$$

Writing $T(n)\sim cn^3$ gives $c=c/4+1/4$, hence $c=1/3$. Thus $T(n)=(1/3)n^3+O(n^2)$, the standard Cholesky leading cost, with a cache-friendly ordering of the work.

</details>

### Exercise 4.5 — A singular leading block
<a id="advanced-factorizations-block-algorithms-ex-5"></a>

Give a nonsingular2-by-2 matrix whose leading1-by-1 block is singular. Explain why the block identity cannot be applied as written.

<details>
<summary>Hint 1</summary>

**Hint.** Use a permutation matrix.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The leading-block inverse is a hypothesis.

</details>
<details>
<summary>Solution</summary>

**Solution.** The exchange matrix $A=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ has determinant $-1$ but leading entry0. The expression $A_{11}^{-1}$ is undefined. A row or column permutation, or a different partition, is required before that elimination step.

</details>

### Exercise 4.6 — A Schur determinant
<a id="advanced-factorizations-block-algorithms-ex-6"></a>

For $A=\begin{pmatrix}3&1\\2&4\end{pmatrix}$, compute the scalar Schur complement and determinant by block elimination.

<details>
<summary>Hint 1</summary>

**Hint.** Use leading block3.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Multiply its determinant by that of the complement.

</details>
<details>
<summary>Solution</summary>

**Solution.** The complement is $4-2(1/3)1=10/3$. Therefore $\det A=3(10/3)=10$, agreeing with $12-2$. The nonsymmetry prevents an SPD interpretation but not the algebraic factorization.

</details>

### Exercise 4.7 — Right-side triangular solve
<a id="advanced-factorizations-block-algorithms-ex-7"></a>

If $L_{21}L_{11}^T=A_{21}$, derive $L_{21}$. Why is $L_{11}^{-T}A_{21}$ generally invalid?

<details>
<summary>Hint 1</summary>

**Hint.** Multiply on the right by the inverse.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Check dimensions before considering commutativity.

</details>
<details>
<summary>Solution</summary>

**Solution.** The correct identity is $L_{21}=A_{21}L_{11}^{-T}$. If $A_{21}$ is $q\times p$, left multiplication by the $p\times p$ inverse is not even defined unless $q=p$; even then the two orders generally differ.

</details>

### Exercise 4.8 — An update error budget
<a id="advanced-factorizations-block-algorithms-ex-8"></a>

Suppose $u=10^{-8}$, $p=10$, and an entry has $|B_{ij}|\le2$ and $(|U||V|)_{ij}\le3$. State the proved bound for its update error.

<details>
<summary>Hint 1</summary>

**Hint.** Use the full gamma expression.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Retain the subtraction contribution.

</details>
<details>
<summary>Solution</summary>

**Solution.** With $\gamma_{10}=10^{-7}/(1-10^{-7})$, the error is at most $2\times10^{-8}+3[\gamma_{10}+10^{-8}(1+\gamma_{10})]$, about $3.50000033\times10^{-7}$. This controls absolute error; a relative bound also needs the exact complement entry to be bounded away from zero.

</details>

### Exercise 4.9 — One block sweep
<a id="advanced-factorizations-block-algorithms-ex-9"></a>

For $A=\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$, $b=(1,0)^T$ and $x_0=0$, perform a scalar-block Gauss–Seidel sweep in coordinate order1,2.

<details>
<summary>Hint 1</summary>

**Hint.** Minimize in the first coordinate with the second fixed.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the newly updated first coordinate in the second equation.

</details>
<details>
<summary>Solution</summary>

**Solution.** The first update solves $2x_1-x_2=1$ with $x_2=0$, giving $x_1=1/2$. The second solves $-x_1+2x_2=0$, giving $x_2=1/4$. The energy error decreases by the theorem, but one sweep does not give the exact solution $(2/3,1/3)^T$.

</details>

### Exercise 4.10 — Why an energy proof needs SPD
<a id="advanced-factorizations-block-algorithms-ex-10"></a>

Identify the point in the block convergence proof that fails for a symmetric indefinite matrix.

<details>
<summary>Hint 1</summary>

**Hint.** Examine the expression called an error norm.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Consider whether block minimizers exist.

</details>
<details>
<summary>Solution</summary>

**Solution.** For an indefinite matrix, $e^TAe$ is not a norm squared and the objective need not be bounded below. Principal block systems can be singular or have stationary points that are not minimizers. Therefore the Pythagorean decrease and compact-unit-sphere argument do not apply.

</details>

<a id="looking-backward-and-forward"></a>

## Connections

This chapter advanced from pointwise factorizations to block and recursive algorithms that exploit modern hardware. The next chapter, *QR, Least Squares, and SVD*, uses orthogonal transformations for fitting and rank information. Mixed-precision and verified-computation connections appear later in the reading route.

## Sources

- Lloyd N. Trefethen and David Bau III, [Numerical Linear Algebra](https://doi.org/10.1137/1.9780898719574), SIAM, 1997.
- Gene H. Golub and Charles F. Van Loan, [Matrix Computations](https://doi.org/10.56021/9781421407944), fourth edition, Johns Hopkins University Press, 2013.
- Nicholas J. Higham, [Accuracy and Stability of Numerical Algorithms](https://doi.org/10.1137/1.9780898718027), second edition, SIAM, 2002.

The exposition, proofs, and worked calculations in this chapter are original to Euler; these references provide further reading and the stated specialist results.

## Summary

Block identities are exact matrix algebra with nonsingularity and dimension hypotheses. SPD Schur complements justify block Cholesky, while rounding bounds quantify trailing updates and cyclic block minimization supplies a convergence theorem. Blocking changes data reuse and parallel dependencies rather than automatically improving numerical stability. QR next uses orthogonal transformations for least squares and rank information.
