var e=`---
parent_id: book-matrix-computation-applications
chapter_id: chapter-12
title: "Advanced Factorizations and Block Algorithms"
level: advanced-undergraduate
estimated_minutes: 200
license: CC BY-SA 4.0
---

# Advanced Factorizations and Block Algorithms

Modern processors achieve peak performance only when computation is organized into blocks that fit in cache. This chapter introduces block LU, block Cholesky, and recursive factorizations, explains how they improve memory locality, and discusses the trade-offs between block size, parallelism, and numerical stability.

## Block LU factorization

Partition $A$ into $b \\times b$ blocks:

$$
A = \\begin{pmatrix}
A_{11} & A_{12} \\\\
A_{21} & A_{22}
\\end{pmatrix}.
$$

In the simple unpivoted derivation, assume the leading block $A_{11}$ is nonsingular. Block LU factors $A_{11}=L_{11}U_{11}$, solves for $L_{21}=A_{21}U_{11}^{-1}$ and $U_{12}=L_{11}^{-1}A_{12}$, and updates the Schur complement $A_{22}-L_{21}U_{12}$. A nonsingular $A$ need not have nonsingular $A_{11}$—the $2\\times2$ exchange matrix is the smallest counterexample. Production LU therefore uses row permutations and panel pivoting that modify this clean block identity. The operations on trailing blocks are matrix-matrix multiplications (level-3 BLAS), which can achieve high flop rates.

The choice of block size $b$ balances cache reuse against the overhead of factoring many small blocks. Values such as $32$ through $256$ are useful experimental candidates, but the effective choice depends on scalar type, kernels, cache hierarchy, matrix shape, and hardware.

## Block Cholesky

For SPD $A$, block Cholesky factors each diagonal block $A_{ii} = L_{ii}L_{ii}^{T}$, solves triangular systems for the subdiagonal blocks, and updates the trailing submatrix by a symmetric rank-$b$ update. The block triangular solves and trailing updates use level-3 BLAS; the diagonal blocks still require Cholesky factorizations. In exact arithmetic each trailing Schur complement is SPD by the Schur-complement theorem. This fact ensures positive pivots, but does not by itself prove a finite-precision backward-error bound.

## Recursive factorizations

Recursive algorithms divide the matrix in half, factor each half, and combine the results. The recursion continues until the subproblems fit in cache, at which point a standard dense algorithm is used. Recursive Cholesky and LU can achieve better cache locality than fixed-block algorithms, especially for deep memory hierarchies.

## Parallelism and communication

Block algorithms expose parallelism at two levels:
- **Task parallelism:** independent block updates can be executed on different cores.
- **Data parallelism:** matrix-matrix multiplications within each block can use SIMD instructions.

Communication-avoiding algorithms reduce the number of messages between processors by reorganizing the computation. For example, the CA-LU algorithm factors a panel of $b$ columns, communicates the factors, and updates $b$ rows and columns in parallel, reducing latency costs.

## Example: block size impact

For a hypothetical $4000\\times4000$ matrix on a processor with an $8$ MB L3 cache, each $128\\times128$ binary64 block occupies about $131$ KB, so three such blocks occupy about $393$ KB before workspace and competing data. This capacity calculation makes $b=128$ a candidate, not a performance conclusion. Values such as $16$, $128$, and $1024$ should be profiled because kernel efficiency, associativity, packing, and the rest of the working set determine traffic.

## Common errors and misconceptions

**Error: choosing block size without reference to hardware.** The optimal block size depends on cache size, memory bandwidth, and the number of cores. Profile on the target hardware rather than guessing.

**Error: ignoring pivoting in block LU.** Block LU without pivoting can fail even for a nonsingular matrix. A production algorithm applies row permutations while factoring panels and propagates them to the remaining blocks; stability still depends on the resulting growth factor. Restricting pivot searches to a block or panel may change stability and needs its own analysis.

**Error: assuming recursion is always better.** Recursive algorithms have overhead from function calls and stack management. For small matrices, iterative block algorithms are usually faster.

## Practice exercises with solutions

### Exercise 16.1

A block LU algorithm with block size $b$ factors an $n \\times n$ matrix. Assume $b$ divides $n$. How many block factorizations of size $b \\times b$ are performed?

**Solution.** There are $n/b$ block columns. Each step factors one $b \\times b$ diagonal block, so the total number of small factorizations is $n/b$.

### Exercise 16.2

Why does block Cholesky preserve positive definiteness of the trailing submatrix?

**Solution.** The trailing submatrix is updated by subtracting $L_{21}L_{21}^{T}$, a symmetric positive semidefinite matrix. For a nonzero trailing vector $z$, choose $x=-A_{11}^{-1}A_{12}z$. Then $z^T(A_{22}-A_{21}A_{11}^{-1}A_{12})z=(x,z)^TA(x,z)>0$. Thus this particular update is the SPD Schur complement of the original SPD block matrix; arbitrary subtraction of a positive semidefinite matrix would not suffice. Repeating the argument ensures positive exact-arithmetic pivots.

### Exercise 16.3

Explain what must be specified before comparing the communication costs of standard LU and a communication-avoiding LU (CA-LU), and state the qualitative goal of CA-LU.

**Solution.** A message count cannot be inferred from $P$ alone. It depends on matrix size, block size, processor-grid shape, memory available per processor, pivoting scheme, and whether the model counts latency, words moved, or both. CA-LU reorganizes panel work and reductions to approach communication lower bounds for the declared model, often trading extra arithmetic or storage for fewer synchronizations. Any asymptotic comparison must state that model and the particular algorithm variant.

### Exercise 16.4

A recursive Cholesky algorithm splits an $n \\times n$ matrix into two $n/2 \\times n/2$ submatrices. Write the recurrence for the number of flops and solve it.

**Solution.** With $m=n/2$, one recursive factorization handles $A_{11}$, a triangular block solve forms $L_{21}$, a symmetric rank-$m$ update forms the Schur complement, and a second recursive factorization handles that complement. The solve and update together contribute $2m^3+O(n^2)$ flops in the usual leading-order count, so

$$T(n)=2T(n/2)+2(n/2)^3+O(n^2).$$

Writing $T(n)\\sim cn^3$ gives $c=c/4+1/4$, hence $c=1/3$. Thus $T(n)=(1/3)n^3+O(n^2)$, the standard Cholesky leading cost, with a cache-friendly ordering of the work.

## Looking backward and forward

This chapter advanced from pointwise factorizations to block and recursive algorithms that exploit modern hardware. The next chapter, *Mixed-Precision and Verified Computing*, examines how reduced-precision arithmetic and interval methods can accelerate computation while maintaining correctness guarantees.
`;export{e as default};