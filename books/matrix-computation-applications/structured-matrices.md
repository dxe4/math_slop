
# Structured Matrices

Many matrices in applications are not generic: their entries follow a pattern that reduces the degrees of freedom from $n^{2}$ to $O(n)$ or $O(n \log n)$. This chapter studies Toeplitz, Hankel, circulant, and banded matrices, develops fast algorithms that exploit their structure, and explains how displacement rank generalizes these ideas to broader matrix classes.

## Toeplitz and Hankel matrices

A **Toeplitz** matrix $T$ is constant along diagonals: $t_{ij} = t_{i-j}$. It is determined by $2n-1$ parameters. A **Hankel** matrix $H$ is constant along anti-diagonals: $h_{ij} = h_{i+j}$. Both arise in signal processing, time-series analysis, and convolution.

Classical Levinson-type recurrences solve Toeplitz systems in $O(n^2)$ arithmetic operations when their intermediate principal systems are nonsingular, for example for an SPD Toeplitz matrix in exact arithmetic. Numerical stability depends on the variant and matrix class; generic Toeplitz structure alone supplies no unconditional backward-stability guarantee. Embedding $T$ in a larger circulant matrix gives $O(n\log n)$ matrix-vector products by FFT; obtaining an $O(n\log n)$ total solve additionally requires an iteration count bounded independently of $n$ or a specialized fast direct algorithm with its own hypotheses.

## Circulant matrices

A **circulant** matrix $C$ has each row shifted one place to the right relative to the row above:

$$
C = \begin{pmatrix}
c_{0} & c_{n-1} & \dots & c_{1} \\
c_{1} & c_{0} & \dots & c_{2} \\
\vdots & \vdots & \ddots & \vdots \\
c_{n-1} & c_{n-2} & \dots & c_{0}
\end{pmatrix}.
$$

Circulant matrices are diagonalized by the Fourier matrix $F$:

$$
C = F^{*} \Lambda F,
$$

where $\Lambda = \operatorname{diag}(\lambda_{0}, \dots, \lambda_{n-1})$ and $\lambda_{k} = \sum_{j=0}^{n-1} c_{j} \omega^{jk}$ with $\omega = e^{-2\pi i/n}$. Thus matrix-vector products $Cx$ cost $O(n \log n)$ by the FFT. If every $\lambda_k\ne0$, a linear system is solved by componentwise division in Fourier space. If some $\lambda_k=0$, solvability requires the matching Fourier component of $b$ to vanish; one may then impose a null-space constraint or compute the pseudoinverse solution by dividing only the nonzero modes.

## Banded matrices

A matrix is **banded** with lower bandwidth $p$ and upper bandwidth $q$ if $a_{ij} = 0$ for $i > j + p$ or $j > i + q$. Provided all required pivots are nonzero, LU factorization without pivoting preserves bandwidth: $L$ has bandwidth $p$ and $U$ has bandwidth $q$. With partial pivoting, the upper bandwidth grows to $p + q$.

For an SPD matrix with common half-bandwidth $w=p=q$, Cholesky preserves that bandwidth and costs $O(nw^2)$ operations with $O(nw)$ factor storage. The Thomas algorithm solves a tridiagonal system in $O(n)$ when its elimination pivots are nonzero and the no-pivot process is stable—for example under strict row diagonal dominance or SPD hypotheses. General tridiagonal systems may require pivoting.

## Displacement rank

The **displacement** of $A$ with respect to Toeplitz structure is

$$\nabla(A) = Z_{1}A - AZ_{0},$$

where the exact shift convention must be supplied; we define $Z_0,Z_1$ below. Low displacement rank means that this rank is small relative to $n$ for the stated operator pair. Toeplitz, Hankel, and inverse structures require appropriate, sometimes different, pairs. Specialized algorithms exploit small generators, but their complexity and stability require the particular representation and algorithm assumptions in the cited references.

## Example: FFT-based circulant spectral diagnosis

**Example 11.1 (Worked calculation).**

Let $C$ be the $4 \times 4$ circulant matrix with first row $(2, -1, 0, -1)$. The eigenvalues are the DFT of the first row:

$$
\lambda_{k} = 2 - \omega^{k} - \omega^{3k},
\qquad k = 0, 1, 2, 3,
$$

where $\omega = e^{-\pi i/2} = -i$. Thus $\lambda_{0} = 0$, $\lambda_{1} = 2 - (-i) - i = 2$, $\lambda_{2} = 2 - (-1) - (-1) = 4$, $\lambda_{3} = 2 - i - (-i) = 2$. The zero eigenvalue confirms that $C$ is singular, consistent with the fact that the row sums vanish. Accordingly, $Cx=b$ is compatible only when the constant Fourier component of $b$ vanishes; fixing the mean of $x$ then selects a solution, or Fourier-space pseudoinversion gives the minimum-norm one.

## Common errors and misconceptions

**Error: assuming banded LU preserves bandwidth with pivoting.** Partial pivoting can increase the upper bandwidth to $p + q$. If bandwidth preservation is essential, use a specialized banded solver without pivoting only when the matrix is diagonally dominant or SPD.

**Error: ignoring the wrap-around in circulant matrices.** Circulant matrices assume periodic boundary conditions. Using them for nonperiodic problems introduces artifacts at the boundaries.

**Error: applying Toeplitz solvers to non-Toeplitz matrices.** The Levinson algorithm assumes the Toeplitz structure. Applying it to a general matrix gives meaningless results.

## Exact Fourier conventions

**Definition 11.2 (Normalized Fourier transform).** Use indices $0,\ldots,n-1$, let $\omega=e^{-2\pi i/n}$, and define
$$
F_{kj}=n^{-1/2}\omega^{kj}.
$$
For first-column data $c_0,\ldots,c_{n-1}$, the circulant matrix has
$C_{ij}=c_{(i-j)\bmod n}$. The first row is therefore
$(c_0,c_{n-1},\ldots,c_1)$, which is generally different from the first column.

**Theorem 11.3 (Unitary diagonalization of a circulant).** The matrix $F$ is unitary, and
$$
FC=\Lambda F,\quad C=F^*\Lambda F,\quad
\lambda_k=\sum_{\ell=0}^{n-1}c_\ell\omega^{k\ell}.
$$

*Proof.* The inner product of rows $k$ and $s$ is
$n^{-1}\sum_{j=0}^{n-1}\omega^{(k-s)j}$. If $k=s$, this equals1. Otherwise its ratio is a nontrivial $n$th root of unity, and the finite geometric sum is zero. Thus $FF^*=I$, and because $F$ is square, $F^*F=I$ as well. Next,
$$
(FC)_{kj}
=n^{-1/2}\sum_i\omega^{ki}c_{(i-j)\bmod n}
=n^{-1/2}\omega^{kj}\sum_\ell c_\ell\omega^{k\ell}
=\lambda_kF_{kj}.
$$
The change of variable $i=j+\ell$ is valid modulo $n$ because $\omega^{kn}=1$. Multiplying by $F^*$ proves the result. $\square$

The normalized Fourier transform is unitary, whereas some software uses an unnormalized forward transform and a $1/n$ inverse. Both conventions are legitimate, but their scaling factors must be consistent. The columns of $F^*$ have entries with positive exponential sign and correspond to the displayed eigenvalues $\lambda_k$. Vectors with negative exponential sign correspond to the reversed mode label; Exercise 14.2 retains that distinction.

**Corollary 11.4 (Circulant solve and condition number).** A circulant is nonsingular exactly when every $\lambda_k\ne0$. In that case
$$
x=F^*\operatorname{diag}(1/\lambda_k)Fb,\qquad
\kappa_2(C)=\frac{\max_k|\lambda_k|}{\min_k|\lambda_k|}.
$$
If it is singular, $Cx=b$ is solvable exactly when $(Fb)_k=0$ at every zero mode, and the minimum2-norm solution divides the nonzero modes and sets the remaining solution modes to zero.

*Proof.* The unitary change of coordinates turns the equations into
$\lambda_k(Fx)_k=(Fb)_k$. This proves solvability and the inverse formula. Unitary matrices preserve the 2-norm, so the singular values of $C$ are the magnitudes of its diagonal eigenvalues. In a zero mode any solution coefficient is free, and setting it to zero uniquely minimizes the sum of squared coefficient magnitudes. $\square$

The algebra gives $O(n\log n)$ arithmetic when FFTs compute the transforms, but a precise error budget must also include the FFT and the computed eigenvalues. Small nonzero modes can amplify data uncertainty and transform error. Treating a numerically small mode as zero changes the problem to a regularized or rank-truncated one, so the threshold must be reported.

**Proposition 11.5 (Backward error of modal division).** Suppose the transforms and the nonzero modal coefficients $\lambda_k$ are exact, and the computed divisions obey
$\widehat y_k=((Fb)_k/\lambda_k)(1+\delta_k)$ with
$|\delta_k|\le u<1$. Then the reconstructed vector
$\widehat x=F^*\widehat y$ solves $(C+E)\widehat x=b$ for a circulant perturbation satisfying
$$
\|E\|_2\le\frac{u}{1-u}\|C\|_2.
$$

*Proof.* Set $\widetilde\lambda_k=\lambda_k/(1+\delta_k)$ and
$E=F^*\operatorname{diag}(\widetilde\lambda_k-\lambda_k)F$.
Then $(\Lambda+\operatorname{diag}(\widetilde\lambda-\lambda))\widehat y=Fb$. Transforming back proves the perturbed equation. The componentwise bound
$|\widetilde\lambda_k-\lambda_k|\le u|\lambda_k|/(1-u)$ and unitarity prove the norm estimate. The Fourier inverse of any diagonal matrix is circulant by the same entry formula, so the structure is preserved. $\square$

This proposition isolates one kernel's backward stability. It is not a complete rounding proof for a real FFT-based solver, because its exact-transform assumptions intentionally omit transform and coefficient errors. Higham and Golub–Van Loan analyze those additional steps. The distinction prevents a valid small theorem from being stretched into a claim about every software implementation.

**Example 11.6 (A compatible singular circulant).** Use the four-by-four periodic Laplacian from the earlier example. Its eigenvalues are $0,2,4,2$. Let $b=(1,0,-1,0)^T$. Its entries sum to zero, so the constant mode vanishes. Direct multiplication gives $Cb=2b$; thus $x=b/2=(1/2,0,-1/2,0)^T$ solves $Cx=b$. This vector has zero mean and is the minimum-norm solution. Every other solution is $x+t(1,1,1,1)^T$. The two terms are orthogonal, so its squared norm is $\|x\|_2^2+4|t|^2$, minimized at $t=0$. For $b=(1,0,0,0)^T$, the sum is1 and no solution exists.

## Toeplitz products by a larger convolution

An embedding accelerates a product without asserting that the embedded system has the same inverse. Let $T_{ij}=t_{i-j}$ for indices $0\le i,j<n$. Construct a circulant of size $2n$ with first column
$$
c=(t_0,t_1,\ldots,t_{n-1},0,t_{-(n-1)},\ldots,t_{-1})^T.
$$
Pad $v\in\mathbb C^n$ with $n$ zeros. The first $n$ entries of the resulting circulant product are $Tv$.

*Proof.* In the first $n$ output coordinates only input columns $0,\ldots,n-1$ contribute. For $i\ge j$, the circulant coefficient is $c_{i-j}=t_{i-j}$. For $i<j$, its index is $2n+i-j$, which is one of the final entries and again equals $t_{i-j}$. Thus the leading $n$-by-$n$ block is exactly $T$, proving the product identity. $\square$

**Example 11.7 (An embedding checked entry by entry).** Take
$$
T=\begin{pmatrix}2&3&4\\1&2&3\\0&1&2\end{pmatrix},
\qquad v=(1,2,-1)^T.
$$
The six-entry circulant column is $(2,1,0,0,4,3)^T$, and the padded vector is $(1,2,-1,0,0,0)^T$. Its first three output entries are respectively
$2+3(2)-4=4$, $1+2(2)-3=2$, and $0+2-2=0$.
These match the direct product $Tv=(4,2,0)^T$. The other three circulant outputs are discarded. Dividing by the circulant spectrum instead would solve a different six-dimensional system and is not an exact Toeplitz solve in general.

A Krylov solve using these fast products costs $O(k n\log n)$ for $k$ products, plus preconditioner setup, orthogonalization, and other vector work. For GMRES, the orthogonalization can become significant as $k$ grows. A statement of near-linear solve cost must therefore control both convergence and basis-management costs, rather than quoting the FFT product cost alone.

## A displacement identity with declared shifts

**Definition 11.8 (Shift pair).** On coordinate vectors numbered1 through$n$, define $Z_f e_j=e_{j+1}$ for $j<n$ and $Z_f e_n=f e_1$. Thus $Z_0$ is a nilpotent down-shift and $Z_1$ is a cyclic down-shift. For this pair, the Toeplitz displacement is
$\mathcal D(T)=Z_1T-TZ_0$.

**Proposition 11.9 (Toeplitz displacement rank).** Every square Toeplitz matrix satisfies $\operatorname{rank}\mathcal D(T)\le2$.

*Proof.* For $i\ge2$ and $j\le n-1$,
$(Z_1T)_{ij}=T_{i-1,j}$ and $(TZ_0)_{ij}=T_{i,j+1}$. Toeplitz structure makes these entries equal because both differences of indices are $i-j-1$. Therefore the displacement is supported only in its first row and last column. A matrix with that support is the sum of a first-row matrix and a last-column matrix, each of rank at most1. The rank of their sum is at most2. The conclusion also holds for $n=1$. $\square$

For a nonsingular $T$, multiply the displacement identity on both sides by $T^{-1}$:
$$
T^{-1}(Z_1T-TZ_0)T^{-1}
=T^{-1}Z_1-Z_0T^{-1}.
$$
The inverse therefore has a low-rank displacement with the operator roles exchanged and a sign change if written in the usual left-minus-right order. This is not the assertion that its original pair is unchanged. For a Hankel matrix $H_{ij}=h_{i+j}$, the pair $Z_0H-HZ_0^T$ is supported in its first row and first column by the same index calculation, so its rank is also at most2. The operator pair is part of the definition.

Low-rank generators offer a compact representation and suggest fast algorithms. They do not guarantee that every generator is numerically well scaled or that every recurrence is stable. Intermediate growth and cancellations can occur even when the original matrix is well conditioned. Specialized algorithms and the cited literature specify the additional assumptions.

## Boundary conditions are mathematical data

A banded nonperiodic Laplacian and a circulant periodic Laplacian differ in only a few corner entries, but those entries change the null space and the compatible right-hand sides. In the nonperiodic Dirichlet case, boundary values anchor the energy identity and give SPD. In the periodic case, constant vectors have zero energy, so a mean constraint or a quotient space is needed. Replacing one by the other is a modeling choice, not a harmless storage optimization.

Similarly, symmetrizing a nearly Toeplitz or nearly circulant data matrix changes the problem. It may be an appropriate denoising model, but its error must be separated from arithmetic error. Structure is useful because it restricts the mathematical problem; an algorithm must preserve the particular restriction that the application justifies.

The periodic-versus-Dirichlet boundary distinction also depends on the error norm. For the n-point periodic second-difference matrix, with n at least four, removing the two corner entries gives the Dirichlet matrix. Their difference is supported at the opposite corners and has operator norm one, because it exchanges the two endpoint coordinate directions. Its Frobenius norm is the square root of two. The periodic matrix has Frobenius norm the square root of six n, so the relative Frobenius difference tends to zero as n grows. Yet the periodic matrix has a constant null vector and the Dirichlet matrix is positive definite. A small relative Frobenius discrepancy can therefore coexist with a changed null space. The discrepancy has not become small in the operator sense that governs the smallest singular value. Counting altered entries or using a global entry norm alone would miss the boundary condition's effect on solvability.

## Practice exercises with solutions

### Exercise 14.1
<a id="structured-matrices-ex-1"></a>

A tridiagonal matrix $T$ has diagonal entries $2$ and off-diagonal entries $-1$. Show that $T$ is SPD and count the operations for Cholesky factorization.

<details>
<summary>Hint 1</summary>

**Hint.** Expand a sum of squared successive differences with zero endpoint values.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the tridiagonal Cholesky recurrence to count work.

</details>
<details>
<summary>Solution</summary>

**Solution.** $T$ is the 1D Laplacian. For a real vector $v$ with $v_0=v_{n+1}=0$, $v^{T}Tv=\sum_{i=0}^{n}(v_{i+1}-v_i)^2>0$ unless $v=0$, so symmetry gives SPD. Cholesky of a tridiagonal matrix produces a bidiagonal $L$. Each nonterminal column uses a square root, a division and a constant number of scalar arithmetic operations, and the final column uses a square root, so the total cost is $O(n)$ operations.

</details>

### Exercise 14.2
<a id="structured-matrices-ex-2"></a>

Explain why the FFT diagonalizes any circulant matrix.

<details>
<summary>Hint 1</summary>

**Hint.** Write the circulant as a polynomial in the cyclic shift.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Keep the exponential sign and eigenvalue index consistent.

</details>
<details>
<summary>Solution</summary>

**Solution.** The cyclic shift matrix $Z$ satisfies $Z^{k}e_{j} = e_{j+k \bmod n}$. For $(v_m)_j=\omega^{jm}$, indices are read modulo $n$ and $(Zv_m)_j=(v_m)_{j-1}=\omega^{-m}(v_m)_j$, so the eigenvalue is $\omega^{-m}$. For $n=4$, $m=1$ and $\omega=-i$, $v_1=(1,-i,-1,i)$ gives $Zv_1=(i,1,-i,-1)=iv_1$, not $-iv_1$. Every circulant is a polynomial in $Z$ and shares this eigenbasis; with the first-column/DFT convention above, $Cv_m=\lambda_{-m\bmod n}v_m$. This corrects the mode label without changing the surrounding Fourier convention.

</details>

### Exercise 14.3
<a id="structured-matrices-ex-3"></a>

A Toeplitz matrix $T$ is embedded in a $2n \times 2n$ circulant matrix $C$. What operation does this accelerate, and when can an iterative solve have $O(n\log n)$ total cost?

<details>
<summary>Hint 1</summary>

**Hint.** Distinguish one product from a complete solve.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Include the number of iterations and any additional basis work.

</details>
<details>
<summary>Solution</summary>

**Solution.** The circulant extension computes each product $Tv$ via FFT in $O(n\log n)$. An iterative method taking $k$ iterations therefore costs $O(kn\log n)$ plus setup and vector operations. A total $O(n\log n)$ bound needs $k=O(1)$ under a stated convergence theorem, usually through an effective preconditioner; the word “well-conditioned” alone does not supply an iteration bound for every method and tolerance.

</details>

### Exercise 14.4
<a id="structured-matrices-ex-4"></a>

What is the displacement rank of a Toeplitz matrix?

<details>
<summary>Hint 1</summary>

**Hint.** Compute an interior displacement entry.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Only a first row and final column can remain.

</details>
<details>
<summary>Solution</summary>

**Solution.** For a Toeplitz matrix $T$, the displacement $\nabla(T) = Z_{1}T - TZ_{0}$ has rank at most $2$. Indeed, the interior displacement entries vanish, leaving only a first row and last column, whose sum has rank at most two. The Toeplitz matrix itself is determined by its first row and first column; parameter count alone would not prove the displacement-rank bound.

</details>

### Exercise 11.5 — A circulant spectrum
<a id="structured-matrices-ex-5"></a>

Find the eigenvalues of the3-by-3 circulant with first column $(3,1,1)^T$, and solve $Cx=(1,1,1)^T$.

<details>
<summary>Hint 1</summary>

**Hint.** The constant mode has the row-sum eigenvalue.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the sum of the two nontrivial cube roots.

</details>
<details>
<summary>Solution</summary>

**Solution.** The eigenvalues are5,2,2 because $1+\omega+\omega^2=0$. The right-hand side is the constant eigenvector, so $x=(1/5,1/5,1/5)^T$. All eigenvalues are nonzero, hence the solution is unique and $\kappa_2(C)=5/2$.

</details>

### Exercise 11.6 — A nonperiodic energy proof
<a id="structured-matrices-ex-6"></a>

For $T$ with diagonal2 and adjacent entries $-1$, prove $v^TTv=\sum_{i=0}^{n}(v_{i+1}-v_i)^2$ with $v_0=v_{n+1}=0$, and deduce nonsingularity.

<details>
<summary>Hint 1</summary>

**Hint.** Expand the squares.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Equality requires all consecutive differences to vanish.

</details>
<details>
<summary>Solution</summary>

**Solution.** Expansion gives $2\sum_{i=1}^nv_i^2-2\sum_{i=1}^{n-1}v_iv_{i+1}$, the quadratic form of $T$. If it is zero, all consecutive values coincide; the zero endpoint forces every entry to be zero. Thus the form is positive for nonzero vectors and $T$ is SPD, hence nonsingular.

</details>

### Exercise 11.7 — Wrong periodic data
<a id="structured-matrices-ex-7"></a>

For the four-by-four periodic Laplacian, explain why $b=(1,1,1,1)^T$ is incompatible.

<details>
<summary>Hint 1</summary>

**Hint.** Use the constant null vector.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Take its inner product with the system.

</details>
<details>
<summary>Solution</summary>

**Solution.** The vector $e=(1,1,1,1)^T$ satisfies $Ce=0$, and symmetry gives $e^TCx=0$ for every $x$. But $e^Tb=4$, a contradiction. No solution exists until the model or right-hand side is changed.

</details>

### Exercise 11.8 — Displacement of an inverse
<a id="structured-matrices-ex-8"></a>

Assume $T$ is nonsingular and $Z_1T-TZ_0$ has rank at most2. Prove the corresponding inverse displacement has rank at most2 and state its operator order.

<details>
<summary>Hint 1</summary>

**Hint.** Multiply by $T^{-1}$ on both sides.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Invertible multiplication preserves rank.

</details>
<details>
<summary>Solution</summary>

**Solution.** The identity is $T^{-1}Z_1-Z_0T^{-1}=T^{-1}(Z_1T-TZ_0)T^{-1}$. Both multipliers are invertible, so the ranks are equal and at most2. Reversing the terms yields $Z_0T^{-1}-T^{-1}Z_1$ with the same rank; the shifts have exchanged roles.

</details>

### Exercise 11.9 — A fast-product cost
<a id="structured-matrices-ex-9"></a>

An FFT Toeplitz product costs at most $c n\log_2n$ operations and a method uses $k(n)=\lceil\sqrt n\rceil$ products. Can its product work be called $O(n\log n)$?

<details>
<summary>Hint 1</summary>

**Hint.** Multiply the two costs.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The iteration count is not bounded independently of dimension.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. The product work is $O(n^{3/2}\log n)$ under this upper-bound model, with the displayed bound proportional to $\lceil\sqrt n\rceil n\log_2n$. Other iteration costs may increase the total further. A near-linear product does not imply a near-linear solve.

</details>

### Exercise 11.10 — A modal perturbation bound
<a id="structured-matrices-ex-10"></a>

A nonsingular circulant has $\max|\lambda_k|=10$ and $\min|\lambda_k|=10^{-3}$. Under exact transforms and division unit roundoff $u=10^{-8}$, bound the modal-division matrix perturbation and find the condition number.

<details>
<summary>Hint 1</summary>

**Hint.** Apply Proposition 11.5.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the ratio of the extreme modal magnitudes.

</details>
<details>
<summary>Solution</summary>

**Solution.** The perturbation norm is at most $10^{-7}/(1-10^{-8})$, approximately $1.00000001\times10^{-7}$. The condition number is $10^4$. A small structured backward perturbation may therefore be amplified in the forward solution; FFT and coefficient errors have not been included in this isolated-kernel bound.

</details>

<a id="looking-backward-and-forward"></a>

## Connections

This chapter surveyed structured matrices and fast algorithms. The next chapter, *Matrix Functions*, develops functions of operators; the final capstone later combines structure, accuracy, and scale.

## Sources

- Lloyd N. Trefethen and David Bau III, [Numerical Linear Algebra](https://doi.org/10.1137/1.9780898719574), SIAM, 1997.
- Gene H. Golub and Charles F. Van Loan, [Matrix Computations](https://doi.org/10.56021/9781421407944), fourth edition, Johns Hopkins University Press, 2013.
- Nicholas J. Higham, [Accuracy and Stability of Numerical Algorithms](https://doi.org/10.1137/1.9780898718027), second edition, SIAM, 2002.

The exposition, proofs, and worked calculations in this chapter are original to Euler; these references provide further reading and the stated specialist results.

## Summary

Toeplitz, circulant, banded, and displacement representations compress different structures. Explicit Fourier conventions prove circulant diagonalization and compatible singular solves; padding proves a fast Toeplitz product without claiming a fast inverse. Modal division has a conditional backward-error bound, while full solver cost and accuracy require convergence and transform analysis. Matrix functions next apply related spectral ideas to functions of an operator.
