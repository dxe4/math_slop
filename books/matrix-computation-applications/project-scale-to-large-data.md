
# Project: Scale to Large Data

This capstone chapter integrates the algorithms and diagnostics developed throughout the book into a coherent workflow for large-scale matrix computation. The project is not a single exercise but a structured investigation: choose a problem, select a representation and algorithm, implement with verification, and report evidence. The goal is to practice the decision-making process that distinguishes reliable numerical computation from hopeful guessing.

## Project structure

Each project should address the following components:

1. **Problem definition.** State the mathematical problem precisely: linear system, least squares, eigenvalue query, matrix function, or approximation. List all hypotheses and verify them for the chosen data.
2. **Data and representation.** Describe the source, size, sparsity pattern, symmetry, definiteness, and conditioning of the matrix. Choose a representation (dense, sparse, implicit, structured) and justify it.
3. **Algorithm selection.** Choose an algorithm based on the problem, representation, and required accuracy. Discuss alternatives and explain why the chosen method is appropriate.
4. **Implementation and verification.** Implement the algorithm with residual checks, backward error estimates, condition estimates, and orthogonality checks where relevant. Compare with an independent method on a small test case.
5. **Performance analysis.** Report setup time, iteration count, time per iteration, memory usage, and parallel scalability if applicable.
6. **Limitations and extensions.** Identify cases where the chosen method would fail or become inefficient, and propose alternatives.

## Example project: large sparse linear system

**Example 18.1 (Worked calculation).**

**Problem.** Solve $Ax = b$ where $A$ is the standard seven-point finite-difference discretization of a 3D Poisson equation on a $100 \times 100 \times 100$ grid ($n = 10^{6}$), with homogeneous Dirichlet boundary conditions.

**Representation.** $A$ is sparse, symmetric positive definite, with at most $7$ nonzeros per row; boundary-adjacent rows have fewer. Store in CSR format.

**Algorithm.** Preconditioned conjugate gradients with an algebraic multigrid (AMG) preconditioner. For suitable elliptic hierarchies and effective coarsening, AMG often gives near-linear setup and solve scaling; this is a property to measure, not an automatic guarantee for every discretization.

**Verification.**
- Check symmetry by verifying $\max_{ij} |a_{ij} - a_{ji}| = 0$.
- Establish positive definiteness from the discrete energy identity for the seven-point Dirichlet Poisson operator, and check the assembled full operator for symmetry and positive Rayleigh quotients during iteration. Cholesky on a small principal submatrix is only a local assembly sanity check, not proof that the full matrix is SPD.
- Monitor relative residual $\lVert r_{k} \rVert_{2}/\lVert b \rVert_{2}$ at each iteration.
- After convergence, compute the scaled backward error $\eta = \lVert b - A\widehat{x} \rVert_{2}/(\lVert A \rVert_{2}\lVert \widehat{x} \rVert_{2} + \lVert b \rVert_{2})$.
- Compare with a direct sparse solver (e.g., Cholesky with nested dissection) on a $20 \times 20 \times 20$ subproblem.

**Illustrative reporting format (hypothetical numbers).** AMG setup: $2$ seconds. CG iterations: $12$. Time per iteration: $0.05$ seconds. Total solve time: $2.6$ seconds. With about $7\times10^6$ nonzeros, float64 values and 32-bit CSR indices occupy about $88$ MB decimal; three CG vectors add about $24$ MB. If the AMG hierarchy occupies $120$ MB, the illustrated total is therefore about $232$ MB before library overhead. These values show what to record and are not results from a registered benchmark.

**Limitations.** For strongly anisotropic or highly heterogeneous coefficients, AMG may need custom coarsening. For nonsymmetric problems, switch to GMRES with an appropriate preconditioner.

## Example project: randomized low-rank approximation

**Example 18.2 (Worked calculation).**

**Problem.** Approximate a $10^{5} \times 10^{4}$ data matrix $A$ by a rank-$50$ factorization for downstream clustering.

**Representation.** A row-major dense binary64 array occupies $8$ GB decimal. The project therefore assumes a machine with at least $32$ GB available so the matrix, the $Q$ and $B$ factors, power-iteration work arrays, and library workspace fit with margin; actual peak memory must be measured.

**Algorithm.** Randomized SVD with power iteration ($q = 2$) and oversampling $p = 10$.

**Verification.**
- Estimate $\lVert A-QQ^TA\rVert_2$ using independent full-operator probes or a second randomized norm estimator, and compare against an independently computed full-data partial SVD when resources permit. A $1000\times1000$ submatrix SVD is only a separate local sanity study and does not bound the residual of the full matrix.
- Check orthogonality of $Q$: $\lVert I - Q^{T}Q \rVert_{2}$.
- Verify that the singular values of the approximation decay similarly to those of $A$.

**Illustrative reporting format (hypothetical numbers).** Sample matrix formation: $5$ seconds. Orthogonalization and small SVD: $1$ second. Total: $6$ seconds. A dense-SVD comparison must be measured or derived for the declared hardware and implementation; “hours” is not asserted here as a benchmark result.

**Limitations.** Slow singular-value decay can make $q=2$ insufficient, but distinguish algorithmic error from the best rank-$k$ tail: increasing $k$ is necessary only when the desired tolerance lies below that fixed-rank optimum. For a stream that cannot be replayed, use an algorithm compatible with one-pass access or provide declared storage; repeated power steps require additional passes.

## Common errors in large-scale projects

**Error: trusting wall-clock time without checking correctness.** A fast wrong answer is worse than a slow right one. Always verify residuals and backward errors.

**Error: using a single test case.** Algorithm behavior can change dramatically with problem size, conditioning, or structure. Test on a sequence of sizes and report scaling.

**Error: ignoring memory hierarchy.** An algorithm with fewer flops may be slower if it accesses memory irregularly. Report cache misses or memory bandwidth if possible.

**Error: reporting averages without variance.** Iterative methods can have variable iteration counts. Report min, max, and mean, or use a box plot.

## A stated dataset with an exact reference solution

**Definition 18.3 (Manufactured Dirichlet cube).** Fix an integer $N\ge1$, set $n=N^3$, and index unknowns by triples $(i,j,k)\in\{1,\ldots,N\}^3$. Define the unscaled seven-point matrix $A_N$ by
$$
(A_Nv)_{ijk}=6v_{ijk}-v_{i-1,j,k}-v_{i+1,j,k}
-v_{i,j-1,k}-v_{i,j+1,k}-v_{i,j,k-1}-v_{i,j,k+1},
$$
where any value with a coordinate0 or $N+1$ is zero. Define
$s_i=i(N+1-i)$, the reference vector $u_{ijk}=s_is_js_k$, and
$$
b_{ijk}=2(s_js_k+s_is_k+s_is_j).
$$
The project solves $A_Nx=b$, with $N=8,16,32,64,100$ as a declared sequence, stopping earlier when the measured memory or time budget is reached.

The definition specifies the matrix mathematically and needs no external download. To flatten indices, use the explicit bijection
$\ell(i,j,k)=(i-1)+N(j-1)+N^2(k-1)$, taking values0 through$n-1$. This storage convention is a computational index, not a learner-record identity. The same formula must be used by the matrix product, sparse assembler, reference generator, and checker.

The right-hand side formula follows from
$2s_i-s_{i-1}-s_{i+1}=2$, including the endpoint convention $s_0=s_{N+1}=0$. Applying that identity in the three directions gives $A_Nu=b$. For the stated maximum $N=100$, all reference components and these integer expressions remain below binary64's exact-integer limit $2^{53}$. A careless implementation can nevertheless overflow an intermediate in a narrower integer type; state the generator's arithmetic type and evaluation order.

**Theorem 18.4 (Structure and an a posteriori checker).** The matrix $A_N$ is SPD and has
$$
\operatorname{nnz}(A_N)=7N^3-6N^2.
$$
Its eigenvalues are
$$
\lambda_{abc}=4\left[
\sin^2\frac{a\pi}{2(N+1)}+
\sin^2\frac{b\pi}{2(N+1)}+
\sin^2\frac{c\pi}{2(N+1)}
\right],
\quad1\le a,b,c\le N.
$$
In particular,
$\lambda_{\min}=12\sin^2(\pi/[2(N+1)])$ and
$\lambda_{\max}=12\cos^2(\pi/[2(N+1)])$.
For every approximation $\widehat x$,
$$
\|u-\widehat x\|_2\le
\frac{\|b-A_N\widehat x\|_2}{\lambda_{\min}}.
$$

*Proof.* In each coordinate direction, summing squared successive differences with zero endpoint values yields the corresponding one-dimensional quadratic form. Summing over all parallel lines and all three directions gives $v^TA_Nv$ as a sum of squares. If it vanishes, every line is constant and its zero endpoint forces all entries to vanish; thus $A_N$ is SPD. There are $N^3$ diagonal entries. In each direction there are $(N-1)N^2$ undirected neighboring pairs, contributing twice that many off-diagonal entries. This proves the nonzero count.

For the one-dimensional tridiagonal matrix, the vector with entries $\sin(ia\pi/(N+1))$ satisfies the endpoint values and the sine addition identity gives eigenvalue
$2-2\cos(a\pi/(N+1))=4\sin^2(a\pi/[2(N+1)])$.
These $N$ eigenvalues are distinct, and the symmetric matrix's eigenvectors form a basis. Taking products of three such vectors gives a basis for the cube. The three directional operators add their eigenvalues, proving the formula and its extrema. Finally, $u-\widehat x=A_N^{-1}(b-A_N\widehat x)$ and
$\|A_N^{-1}\|_2=1/\lambda_{\min}$. $\square$

This supplies a proved convergence input and a checker rather than a conjecture that a few random Rayleigh quotients establish SPD. Unpreconditioned CG obeys the earlier interval theorem with
$\kappa_2(A_N)=\cot^2(\pi/[2(N+1)])$. The condition number grows with $N$, so a dimension-independent iteration count has not been proved. An AMG comparison must establish that the chosen application is a fixed SPD preconditioner for ordinary PCG, or use a method appropriate to its actual changing or nonsymmetric action.

**Example 18.5 (The two-by-two-by-two cube).** For $N=2$, every $s_i=2$, so $u$ has eight entries equal to8 and $b$ has eight entries equal to24. Each grid point has three interior neighbors, so $A_Nu=6(8)-3(8)=24$ in every row. There are $7(8)-6(4)=32$ stored nonzeros. The extreme eigenvalues are3 and9, so the condition number is3. If $\widehat x$ has every entry equal to7, its residual has every entry equal to3. The forward error is exactly $\sqrt8$, and the a posteriori bound is $\|r\|_2/3=\sqrt8$, attaining equality. Its relative forward error is $1/8$, demonstrating what the checker measures.

## A checker contract and stopping rule

For this dataset a numerical checker should return the true-system residual, reference error, scaled backward error, and the reason for stopping. The following pseudocode describes the mathematical operations; it is not a claim that a particular implementation has been run.

~~~text
input: N, approximate vector x, declared arithmetic
construct b from the integer formula in Definition 18.3
compute y = stencil_product(N, x) with zero exterior values
compute r = b - y using the declared residual precision
report ||r||2 / ||b||2
report ||x - u||2 / ||u||2 using the manufactured reference
report ||r||2 / (lambda_max ||x||2 + ||b||2)
report ||r||2 / lambda_min as an absolute-error bound
report iteration count, stopping reason, and arithmetic formats
~~~

In exact arithmetic, the input $N=2$, $x=u$ returns zero for the two residual measures and the reference error. For the all-sevens approximation in Example 18.5, the relative residual is $1/8$, the relative reference error is $1/8$, and the scaled backward error is
$3/(9\cdot7+24)=1/29$. These are expected mathematical outputs, not benchmark observations.

Ordinary floating-point evaluation makes this an informative numerical checker. To call its final error bound rigorous, enclose residual-evaluation error and the trigonometric eigenvalue constants with directed bounds, as taught in the numerical verified-computation chapter. A residual computed by the same faulty indexing code as the solver can repeat the same mistake. On small cubes, compare a separately assembled matrix and a separately written stencil; also verify the manufactured identity against the explicit formula for $b$.

The known reference error is especially valuable when studying stopping rules. Compare the recursively updated CG residual with a recomputed residual and the actual reference error. A sharp-looking iteration history based only on recursive quantities can hide a residual gap. Retain the stopping reason when a memory limit, maximum iteration count, nonfinite operation, or failed structural check ends the run. Do not label every termination as convergence.

## A second dataset with a known singular spectrum

**Definition 18.6 (Orthogonally mixed diagonal data).** Choose integers $m\ge n\ge1$ and positive singular values $\sigma_1\ge\cdots\ge\sigma_n$. Let $D\in\mathbb R^{m\times n}$ have $D_{jj}=\sigma_j$ and all other entries zero. Put
$$
H_d=I_d-\frac{2}{d}\mathbf1_d\mathbf1_d^T,\qquad
B=H_mDH_n.
$$
Use either $\sigma_j=j^{-2}$ or a stated plateau-and-tail spectrum. Specify the dimensions, spectrum, and whether $B$ is stored densely or accessed through products.

Since $(\mathbf1\mathbf1^T)^2=d\mathbf1\mathbf1^T$, direct multiplication gives $H_d^TH_d=H_d^2=I_d$. Hence $B$ has exactly the supplied singular values. Its products and adjoint products can be applied through two rank-one reflectors and a diagonal multiplication, with $O(m+n)$ arithmetic. Materializing the dense matrix changes storage and access cost without changing the mathematical problem.

This dataset separates algorithmic subspace error from the best rank-$k$ approximation error. The latter is $\sigma_{k+1}$ in spectral norm for $k<n$. An oversampled range $Q$ with more than$k$ columns is not itself a rank-$k$ final output. Form the small matrix $Q^*B$, truncate its SVD to rank$k$, and verify the final reconstructed approximation. Independent probes can assess its residual under an explicitly stated probabilistic theorem; deterministic small cases can use a full SVD.

**Example 18.7 (An achievable tolerance and an impossible one).** Let $m=8$, $n=4$, and take singular values $(1,1/4,1/9,1/16)$. Orthogonal mixing preserves those values. Every rank-two approximation has spectral error at least $\sigma_3=1/9$, and the truncated SVD attains that value. Thus a target0.12 is achievable at rank 2, while a target0.1 is not, irrespective of oversampling or power steps. At rank 3 the optimum is $1/16=0.0625$, so0.1 becomes achievable. This comparison identifies a rank limitation before benchmarking any randomized implementation.

## Work, storage, and a fair experiment

For the cube dataset, CSR storage with binary64 values and 32-bit indices has nominal size
$12(7N^3-6N^2)+4(N^3+1)$ bytes, provided its offsets fit the index type. Matrix-free storage removes that matrix array but retains input, output, Krylov, preconditioner, and work vectors. Record peak memory rather than only the input matrix. A preconditioner hierarchy can exceed the matrix itself.

**Example 18.8 (A storage calculation at the stated large size).** At $N=100$, $n=10^6$ and $\operatorname{nnz}=6,940,000$. The CSR arrays occupy
$12(6,940,000)+4(1,000,001)=87,280,004$ bytes, about 87.28 MB decimal. Six binary64 vectors occupy another48 MB. Thus these arrays alone total about 135.28 MB; preconditioner levels, alignment, library workspaces, and copies add more. Dense storage would require $8n^2=8\times10^{12}$ bytes. These counts explain feasibility but do not predict runtime.

For each stated size, report setup separately from solve time. A reused factorization or preconditioner should have its reuse count stated. For randomized runs, state the random distribution, seed policy, and number of repetitions. Report variation in accuracy and work, not only the quickest successful realization. Do not silently omit failed runs.

A performance comparison must request comparable outputs. A full SVD and an approximate rank 50 factorization solve different tasks. Likewise, a relative residual tolerance of $10^{-6}$ and a relative forward-error tolerance of $10^{-6}$ are not equivalent for a growing-condition-number cube. If methods use different precision, include conversion, data transfer, and refinement work in the relevant total.

The two illustrative projects earlier in this chapter remain useful alternative investigations. Their hypothetical timings describe a reporting format; the datasets and checkers here supply reproducible mathematical baselines. No timing claim follows from a flop count alone. A completed report states what was actually executed, what is proved analytically, what is measured, and what remains uncertain.

## Practice exercises with solutions

### Exercise 15.1
<a id="project-scale-to-large-data-ex-1"></a>

You have a $10^{7} \times 10^{7}$ sparse matrix with $10^{8}$ nonzeros. Estimate the memory for CSR storage and compare with dense storage.

<details>
<summary>Hint 1</summary>

**Hint.** Count values, column indices, and row offsets separately.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare the result with $8n^2$ dense bytes.

</details>
<details>
<summary>Solution</summary>

**Solution.** CSR needs $nnz$ values ($8 \times 10^{8}$ bytes), $nnz$ column indices ($4 \times 10^{8}$ bytes), and $n+1$ row pointers ($4 \times 10^{7}$ bytes), totaling $1.24$ GB decimal before overhead. Dense storage needs $8 \times 10^{14}$ bytes ($800$ TB), impossible.

</details>

### Exercise 15.2
<a id="project-scale-to-large-data-ex-2"></a>

A direct sparse solver reports $10^{12}$ nonzeros in the factor. Should you use an iterative method?

<details>
<summary>Hint 1</summary>

**Hint.** Estimate factor memory before assuming the direct solver is viable.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Iterative convergence still needs structural and preconditioning evidence.

</details>
<details>
<summary>Solution</summary>

**Solution.** The reported fill makes this direct factorization infeasible on ordinary hardware and motivates testing alternatives, but it does not prove that an iterative method will converge efficiently. Examine ordering or out-of-core direct options, verify the operator structure, and test a justified preconditioner with memory and convergence measurements before switching.

</details>

### Exercise 15.3
<a id="project-scale-to-large-data-ex-3"></a>

Your CG solver stalls at relative residual $10^{-4}$. List three diagnostic steps.

<details>
<summary>Hint 1</summary>

**Hint.** Distinguish the recomputed residual from a recursive estimate.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Check structural hypotheses and the preconditioner as well as conditioning.

</details>
<details>
<summary>Solution</summary>

**Solution.** 1. Check the condition number estimate or the eigenvalue distribution of $A$.
2. Inspect the preconditioner: is it spectrally equivalent to $A$?
3. Verify that $A$ is actually SPD; a hidden indefiniteness can cause stagnation.

</details>

### Exercise 15.4
<a id="project-scale-to-large-data-ex-4"></a>

A randomized SVD with $k = 50$ achieves residual $10^{-3}$ but the target is $10^{-6}$. What are two remedies?

<details>
<summary>Hint 1</summary>

**Hint.** Compare the target with the best rank 50 tail.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Oversampling can reduce subspace error but does not change final output rank.

</details>
<details>
<summary>Solution</summary>

**Solution.** For a spectral-norm residual, every rank-$k$ output has error at least $\sigma_{k+1}$. The observed $10^{-3}$ alone does not determine whether $10^{-6}$ is attainable at rank $50$.
1. If the fixed-rank tail permits the target, increase $q$ or oversampling to reduce algorithmic subspace error, then verify the final rank-$50$ residual; neither changes the rank-$50$ lower bound.
2. If $\sigma_{51}>10^{-6}$, increase the output rank if resources permit or revise the tolerance. For $A=\operatorname{diag}(1,\ldots,1,10^{-3})$ with $50$ leading ones, every rank-$50$ approximation has error at least $10^{-3}$, while rank $51$ can be exact. Increasing oversampling alone does not raise an output still truncated to rank $50$.

</details>

### Exercise 18.5 — A manufactured right-hand side
<a id="project-scale-to-large-data-ex-5"></a>

Derive $2s_i-s_{i-1}-s_{i+1}=2$ for $s_i=i(N+1-i)$ and use it to verify $A_Nu=b$.

<details>
<summary>Hint 1</summary>

**Hint.** Expand the quadratic polynomial.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Apply the one-dimensional identity in each coordinate direction.

</details>
<details>
<summary>Solution</summary>

**Solution.** Writing $s_i=(N+1)i-i^2$, the linear terms cancel in the second difference, while $-2i^2+(i-1)^2+(i+1)^2=2$. Multiplying by the two unchanged coordinate factors gives each directional contribution. Summing yields $2(s_js_k+s_is_k+s_is_j)$, exactly the declared $b$.

</details>

### Exercise 18.6 — Cube nonzeros
<a id="project-scale-to-large-data-ex-6"></a>

Find the nonzero count for $N=3$ and explain why saying exactly seven nonzeros per row is incorrect.

<details>
<summary>Hint 1</summary>

**Hint.** Count undirected neighboring pairs.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Boundary-adjacent grid points have missing exterior neighbors.

</details>
<details>
<summary>Solution</summary>

**Solution.** There are27 diagonal entries and $3(3-1)3^2=54$ undirected interior edges, giving $27+2(54)=135$ nonzeros. Equivalently $7(27)-6(9)=135$. Some rows have fewer than six interior neighbors, so their stored off-diagonal counts are smaller.

</details>

### Exercise 18.7 — Cube spectral condition
<a id="project-scale-to-large-data-ex-7"></a>

For $N=1$, compute the matrix, its only eigenvalue, and the formula for the condition number.

<details>
<summary>Hint 1</summary>

**Hint.** There is a single interior point.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Substitute the angle $\pi/4$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The matrix is $[6]$, with eigenvalue6 and condition number1. The formulas give $12\sin^2(\pi/4)=6$, $12\cos^2(\pi/4)=6$, and $\cot^2(\pi/4)=1$, consistent with the direct calculation.

</details>

### Exercise 18.8 — An independent residual
<a id="project-scale-to-large-data-ex-8"></a>

Why does computing a residual through exactly the solver's erroneous stencil not reliably detect an indexing error? Give a stronger small-case check.

<details>
<summary>Hint 1</summary>

**Hint.** A repeated bug can satisfy the same wrong equations.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare against an independently specified representation.

</details>
<details>
<summary>Solution</summary>

**Solution.** The solver and checker may both use the same incorrect operator, producing a small residual for the wrong system. On a small cube, assemble entries from the explicit index formula independently, compare products on coordinate vectors, and verify the manufactured identity against the analytic $b$. Agreement then supplies stronger evidence, although finite tests still do not replace the structural proof.

</details>

### Exercise 18.9 — A rank target
<a id="project-scale-to-large-data-ex-9"></a>

For mixed-diagonal data with $\sigma_j=j^{-2}$, find the smallest rank $k<n$ whose optimal spectral residual is at most $10^{-3}$, assuming $n\ge32$.

<details>
<summary>Hint 1</summary>

**Hint.** Use $\sigma_{k+1}=(k+1)^{-2}$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Take the square root before rounding the integer.

</details>
<details>
<summary>Solution</summary>

**Solution.** The condition is $(k+1)^2\ge1000$, hence $k+1\ge\lceil\sqrt{1000}\rceil=32$. Thus $k=31$ is the smallest rank, with tail $1/1024\le10^{-3}$; rank 30 has tail $1/961>10^{-3}$. An actual algorithm still has to attain an error sufficiently close to the optimum.

</details>

### Exercise 18.10 — A checker error margin
<a id="project-scale-to-large-data-ex-10"></a>

Suppose a rigorous residual upper bound is $2\times10^{-8}$ and a rigorous lower eigenvalue bound is0.02. Bound the absolute solution error. What changes if0.02 is only an unqualified estimate?

<details>
<summary>Hint 1</summary>

**Hint.** Use the a posteriori theorem with correctly directed bounds.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A denominator lower bound is needed for a rigorous ratio upper bound.

</details>
<details>
<summary>Solution</summary>

**Solution.** The error is at most $(2\times10^{-8})/0.02=10^{-6}$. If0.02 is merely an estimate, the same calculation is conditional and not a rigorous certificate; a valid lower bound on the smallest eigenvalue is required.

</details>

<a id="looking-backward-and-forward"></a>

## Connections

This project chapter synthesized the book's themes: problem clarity, representation awareness, algorithm selection, verification, and honest reporting of limitations. The preceding chapters—*Problem, Representation, Algorithm* through *Structured Matrices*—provided the individual tools; this chapter demands their integration. For further study, consult specialist texts on parallel numerical linear algebra, mixed-precision algorithms, and verified computing.

## Sources

- Lloyd N. Trefethen and David Bau III, [Numerical Linear Algebra](https://doi.org/10.1137/1.9780898719574), SIAM, 1997.
- Gene H. Golub and Charles F. Van Loan, [Matrix Computations](https://doi.org/10.56021/9781421407944), fourth edition, Johns Hopkins University Press, 2013.
- Nicholas J. Higham, [Accuracy and Stability of Numerical Algorithms](https://doi.org/10.1137/1.9780898718027), second edition, SIAM, 2002.

The exposition, proofs, and worked calculations in this chapter are original to Euler; these references provide further reading and the stated specialist results.

## Summary

The capstone fixes two reproducible matrix families, exact reference relationships, and explicit checkers. The Dirichlet cube has a proved energy identity, spectrum, and residual-to-error bound; mixed diagonal data have a known singular tail. Fair scaling studies separate setup, solve, memory, arithmetic, and probability assumptions. A completed investigation connects its reported accuracy and runtime to those mathematical contracts.
