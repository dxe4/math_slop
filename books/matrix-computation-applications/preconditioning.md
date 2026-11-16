
# Preconditioning

A preconditioner transforms a linear system into an equivalent one that is easier for an iterative solver. The ideal preconditioner would be $M = A$, making $M^{-1}A = I$ and yielding convergence in one iteration, but applying $M^{-1}$ would then be as expensive as solving the original system. The art of preconditioning is to approximate $A$ closely enough to cluster the spectrum while keeping the application of $M^{-1}$ cheap. This chapter surveys classical preconditioners, their construction, and their interaction with Krylov methods.

## The preconditioned system

For a linear system $Ax = b$, a preconditioner $M$ yields three common formulations:

- **Left preconditioning:** $M^{-1}Ax = M^{-1}b$.
- **Right preconditioning:** $AM^{-1}y = b$, $x = M^{-1}y$.
- **Split preconditioning:** $M_{1}^{-1}AM_{2}^{-1}y = M_{1}^{-1}b$, $x = M_{2}^{-1}y$.

For CG, the preconditioner must be symmetric positive definite, and the standard formulation is the split form with $M = LL^{T}$ so that $M^{-1}A$ is self-adjoint in the $M$-inner product. For GMRES, left and right preconditioning are both valid, but only right preconditioning preserves the original residual norm for stopping criteria.

## Jacobi and Gauss–Seidel preconditioners

The simplest preconditioners are based on stationary iterations.

**Jacobi.** $M = D$, where $D$ is the diagonal of $A$. Application of $M^{-1}$ is trivial: $M^{-1}v = D^{-1}v$. Jacobi removes unequal diagonal scales. Its effectiveness also depends on the remaining off-diagonal coupling; a sufficient dominance or spectral-equivalence estimate is more informative than the diagonal values alone.

**Gauss–Seidel.** $M = D + L$, where $L$ is the strictly lower triangular part of $A$. Solving $My = v$ requires forward substitution. Gauss–Seidel can outperform Jacobi for suitable matrices and orderings; there is no universal comparison, and its standard sweep is sequential. Symmetric Gauss–Seidel uses a forward sweep followed by a backward sweep and preserves symmetry for CG.

**Successive over-relaxation (SOR).** $M = (1/\omega)D + L$ with relaxation parameter $\omega \in (0, 2)$. The optimal $\omega$ is problem-dependent and often estimated empirically.

## Incomplete factorizations

**Incomplete LU (ILU).** Compute an approximate LU factorization of $A$ while restricting fill-in to a prescribed sparsity pattern. ILU(0) allows fill only in positions where $A$ is already nonzero. ILU($k$) allows $k$ levels of fill. Restricting fill can reduce setup and application work, but the actual cost and quality depend on the matrix, ordering, allowed pattern and pivot behavior.

**Incomplete Cholesky (IC).** For SPD $A$, compute an approximate $LL^{T}$ factorization with fill restrictions. IC(0) is widely used as a preconditioner for CG. If the factorization breaks down due to a nonpositive pivot, a shifted IC($\alpha$) adds $\alpha I$ to the diagonal before factoring.

## Domain decomposition and multigrid

**Domain decomposition.** Split the computational domain into subdomains, solve local problems, and combine the results. Additive Schwarz preconditioners solve subdomain problems in parallel; multiplicative Schwarz solves them sequentially. Coarse-grid correction accelerates convergence by propagating information globally.

**Multigrid.** Exploit the fact that smooth error modes are reduced slowly by relaxation but are well represented on a coarser grid. A multigrid cycle combines fine-grid smoothing with coarse-grid correction, supporting linear-work solves for specified elliptic mesh families when smoothing, coarse approximation, uniform contraction and hierarchy-complexity hypotheses hold. Those assumptions are not consequences of the word multigrid. Algebraic multigrid (AMG) constructs the hierarchy from the matrix alone, without requiring a geometric grid.

## Preconditioner quality metrics

A good preconditioner should:
- reduce the condition number or cluster the eigenvalues of the preconditioned operator;
- be cheap to set up and apply;
- be robust across problem instances;
- preserve the structural hypotheses of the solver (symmetry, positive definiteness).

Measure quality by:
- iteration count for a fixed tolerance;
- total wall-clock time (setup + solve);
- eigenvalue distribution of $M^{-1}A$;
- scalability with problem size.

## Example: ILU(0) preconditioner

**Example 10.1 (ILU(0) preconditioner).**

Let

$$
A = \begin{pmatrix}
4 & -1 & 0 \\
-1 & 4 & -1 \\
0 & -1 & 4
\end{pmatrix}.
$$

ILU(0) computes $L$ and $U$ with the same nonzero pattern as $A$:

$$
L = \begin{pmatrix}
1 & 0 & 0 \\
-1/4 & 1 & 0 \\
0 & -4/15 & 1
\end{pmatrix},
\qquad
U = \begin{pmatrix}
4 & -1 & 0 \\
0 & 15/4 & -1 \\
0 & 0 & 56/15
\end{pmatrix}.
$$

Here the displayed factors multiply to $LU=A$ exactly: this tridiagonal elimination creates no dropped fill. Thus $M^{-1}A=I$, with all eigenvalues exactly $1$; the Jacobi spectrum is $1-\sqrt2/4,1,1+\sqrt2/4$. Exact-preconditioned CG with a nonzero initial residual terminates in one exact-arithmetic step for this SPD example. This is an exact special case, not a general ILU(0) clustering theorem. 

## Common errors and misconceptions

**Error: using an indefinite preconditioner with CG.** CG requires an SPD preconditioner in the standard formulation. If the incomplete Cholesky factorization encounters a negative pivot, shift the diagonal or switch to a robust preconditioner.

**Error: ignoring setup cost.** A preconditioner that halves the iteration count but takes ten times as long to build may increase total time. Measure end-to-end performance.

**Error: assuming one preconditioner fits all.** The optimal preconditioner depends on the PDE, the discretization, the mesh size, and the hardware. Benchmark several options for your problem class.

## Preparation and the correct inner product

Required preparation is the [Krylov chapter](krylov-subspace-methods.md), SPD matrices and Rayleigh quotients. Applying a preconditioner means solving a subsidiary problem. It does not mean explicitly assembling a dense inverse, and a variable or nonlinear subsidiary solve need not define the fixed matrix assumed by ordinary preconditioned CG.

**Definition 10.2 (Spectral equivalence).** SPD matrices $A,M$ are spectrally equivalent with constants $0<\alpha\le\beta$ when
$$\alpha x^*Mx\le x^*Ax\le\beta x^*Mx
\quad\text{for every vector }x.$$
A family is uniformly equivalent if the same constants work across all problem sizes in the family. Constants that grow with mesh refinement do not give a mesh-independent iteration guarantee.

**Theorem 10.3 (Preconditioned condition-number bound).** Under spectral equivalence, the SPD matrix $S=M^{-1/2}AM^{-1/2}$ has every eigenvalue in $[\alpha,\beta]$ and
$$\kappa_2(S)\le\beta/\alpha.$$
The product $M^{-1}A$ has the same eigenvalues, is self-adjoint in the $M$ inner product, and is positive definite there. Its Euclidean singular-value condition number need not satisfy this same ratio.

*Proof.* For any vector $y$, set $x=M^{-1/2}y$. The equivalence inequalities become
$\alpha\|y\|_2^2\le y^*Sy\le\beta\|y\|_2^2$.
Apply them to an eigenvector of Hermitian $S$ to locate its eigenvalue. Its spectral condition number is the largest eigenvalue divided by the smallest, giving the ratio. Similarity follows from
$M^{-1}A=M^{-1/2}SM^{1/2}$.
For the inner-product assertion,
$\langle u,M^{-1}Av\rangle_M=u^*Av=
\langle M^{-1}Au,v\rangle_M$, and
$\langle v,M^{-1}Av\rangle_M=v^*Av>0$ for $v\ne0$.
A nonunitary similarity preserves eigenvalues without preserving Euclidean singular values, proving why the last distinction is needed. ∎

Preconditioned CG can therefore be interpreted as ordinary CG on $Sy=M^{-1/2}b$, $x=M^{-1/2}y$. Its energy error equals the original energy error because
$\|y-y_*\|_S^2=(x-x_*)^*A(x-x_*)$.
The cited CG polynomial theorem then bounds it with a condition number no larger than $\beta/\alpha$. A faster spectrum is useful only when applying $M^{-1}$ remains affordable and sufficiently accurate.

**Example 10.4 (Unequal scales removed exactly).** For $A=\operatorname{diag}(1,10^4)$ choose $M=A$. Then $S=I$, $\alpha=\beta=1$, and one exact CG step solves any nonzero residual. With $M=10^2I$, the transformed matrix is $\operatorname{diag}(10^{-2},10^2)$ and its condition number remains $10^4$. Multiplying the identity by a scalar changes eigenvalue magnitudes without changing their ratio. The exact diagonal choice is cheap here because diagonal inversion is componentwise; for a dense matrix the same choice would simply hide the original solve inside each application.

## A perturbation criterion for a useful preconditioner

**Proposition 10.5 (A relative energy perturbation).** Suppose $M$ is SPD and
$$\|M^{-1/2}(A-M)M^{-1/2}\|_2\le\delta<1,$$
with $A$ Hermitian. Then $A$ is SPD and
$$\kappa_2(M^{-1/2}AM^{-1/2})
\le\frac{1+\delta}{1-\delta}.$$

*Proof.* Write the transformed matrix as $I+E$. The Hermitian $E$ has every eigenvalue in $[-\delta,\delta]$, or directly $|y^*Ey|\le\delta\|y\|^2$. Thus its Rayleigh quotient lies between $1-\delta>0$ and $1+\delta$. Apply the previous theorem. ∎

An unscaled entrywise error or small $\|A-M\|$ does not imply this relative estimate when $M$ has a weak direction. The preconditioner must approximate the directions that matter in its own energy metric. The criterion is sufficient; a failed norm bound can be inconclusive rather than proof of poor actual convergence.

**Example 10.6 (A quantitative nontrivial equivalence).** Let
$$M=\begin{pmatrix}4&0\\0&1\end{pmatrix},\qquad
A=\begin{pmatrix}4&1\\1&1\end{pmatrix}.$$
Then
$$S=M^{-1/2}AM^{-1/2}
=\begin{pmatrix}1&1/2\\1/2&1\end{pmatrix}.$$
Its eigenvalues are $1/2$ and $3/2$, so the exact transformed condition number is three. The energy perturbation norm is $\delta=1/2$, and the proposition gives $(1+1/2)/(1-1/2)=3$, attained here. The nonsymmetric-looking product $M^{-1}A=\begin{pmatrix}1&1/4\\1&1\end{pmatrix}$ shares these eigenvalues but is interpreted through the $M$ inner product.

## Residuals and error with compatible scales

For $Ax_*=b$, write $e=x_*-x$ and $r=b-Ax=Ae$. The natural preconditioned residual norm is $\|r\|_{M^{-1}}=(r^*M^{-1}r)^{1/2}$, computed by one preconditioner application when meaningful. Spectral equivalence gives
$$
\frac{\|r\|_{M^{-1}}}{\sqrt\beta}
\le\|e\|_A
\le\frac{\|r\|_{M^{-1}}}{\sqrt\alpha}.
$$

*Proof.* Put $z=M^{1/2}e$. Then $\|e\|_A^2=z^*Sz$ while
$\|r\|_{M^{-1}}^2=z^*S^2z$. In the orthonormal eigenbasis of $S$, each term $\lambda_i^2|z_i|^2$ lies between $\alpha\lambda_i|z_i|^2$ and $\beta\lambda_i|z_i|^2$. Summing and taking roots proves the claim. ∎

This supplies a genuine error meaning for a preconditioned residual under a theorem with known constants. A raw norm of $M^{-1}r$ is a different quantity. Left-preconditioned GMRES minimizes that transformed Euclidean residual, while right-preconditioned GMRES minimizes the original residual. Either can be monitored with an additional physical residual; only the latter retains it as the direct minimization objective.

## Symmetry and incomplete factors

For real SPD $A=D+L+L^{\mathsf T}$, let $B=D+L$. The symmetric Gauss–Seidel preconditioner is $M=BD^{-1}B^{\mathsf T}$. Since $D$ has positive diagonal and $B$ is nonsingular triangular,
$$x^{\mathsf T}Mx=(B^{\mathsf T}x)^{\mathsf T}D^{-1}(B^{\mathsf T}x)>0$$
for nonzero $x$. This proves SPD. One ordinary forward Gauss–Seidel sweep uses the nonsymmetric matrix $B$ alone and lacks that CG guarantee. SOR's interval for its parameter is not a theorem that every nonsymmetric SOR preconditioner is suitable for CG.

Incomplete Cholesky inherits SPD only if its computed factor has nonzero real positive pivots and is applied consistently with its transpose. Dropping fill changes the factorization; even an SPD input can cause an unmodified incomplete algorithm to fail. A diagonal shift or pivot modification changes the preconditioner, not the original target, when the outer residual remains $b-Ax$. Such modifications require recorded scales and failure handling, rather than an assurance that any small shift must succeed.

ILU can be effective for nonsymmetric problems but is not automatically symmetric or positive definite. Ordering, fill allowance and pivoting govern both stability and cost. The exact tridiagonal example above has no dropped fill, so its perfect spectrum is a special identity that cannot be extrapolated to a general ILU(0) family.

## Work, robustness and the role of a coarse space

A useful preconditioner addresses error modes that the iteration otherwise reduces slowly. Local relaxation can remove oscillatory components while leaving smooth global components. A coarse space represents those remaining directions with fewer variables. The intuition becomes a theorem only after approximation and smoothing estimates and a bounded-cost hierarchy are supplied. Multigrid and domain-decomposition theory provide such results for specified operator and mesh classes; their complete proofs are cited, not inferred from a picture of smooth error.

Setup reuse can change the preferred method. One expensive factor may be worthwhile for many right-hand sides and wasteful for one. Report setup, each matrix action, each subsidiary solve, communication and stopping work separately. If the preconditioner changes with iteration or the inner solve is nonlinear, use a method and theorem that permit that variation; ordinary fixed-preconditioner recurrences may no longer apply.

A failure report should distinguish an invalid factor, a poor spectrum, an expensive application and a wrong stopping scale. Tightening outer tolerances cannot repair a zero pivot inside the preconditioner, and an apparently tiny scaled residual can hide the original equations. Return the target solution with evidence in its original units and retain the exact subsidiary rule that was actually applied.

## A concrete similarity with a bad Euclidean condition number

Let M=diag(K²,1) for K>0, and let S=[[2,1],[1,2]]. Set A=M^(1/2)SM^(1/2). Both A and M are SPD and their spectral-equivalence constants are one and three. The split operator therefore has condition number three.

Yet M^(−1)A=[[2,1/K],[K,2]]. Its norm is at least K from its first column. Its inverse is one third of [[2,−1/K],[−K,2]], with norm at least K/3. Thus the Euclidean singular-value condition number of the unsplit product is at least K²/3, arbitrarily large.

The example realises the inner-product distinction explicitly. Eigenvalues and the CG energy argument stay uniformly controlled, while a nonorthogonal similarity distorts ordinary Euclidean lengths.

## Practice exercises with solutions

### Exercise 8.1
<a id="preconditioning-ex-8-1"></a>

For $A = \operatorname{diag}(2, 3, 4)$, compare the spectra of $D^{-1}A$ and $(LU)^{-1}A$ where $L = I$ and $U = A$ (exact LU).

<details>
<summary>Hint 1</summary>

**Hint.** Both chosen preconditioners reproduce the diagonal matrix.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Do not infer a general incomplete-factorization theorem from an exact case.

</details>

<details>
<summary>Solution</summary>

**Solution.**  $D^{-1}A = I$, so all eigenvalues are $1$. Exact LU gives $M^{-1}A = I$ as well. General ILU(0) may improve clustering, but dropping entries supplies no universal spectral or convergence guarantee and can cause breakdown. For example, $\begin{pmatrix}0&1\\1&1\end{pmatrix}$ is nonsingular (determinant $-1$), yet a no-pivot ILU(0) step has a zero first pivot. Inspect the actual matrix, ordering and factorization.

</details>

### Exercise 8.2
<a id="preconditioning-ex-8-2"></a>

Explain why symmetric Gauss–Seidel preserves symmetry for CG preconditioning.

<details>
<summary>Hint 1</summary>

**Hint.** Write the combined factor with the diagonal inverse in the middle.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Express its quadratic form as a positive diagonal norm.

</details>

<details>
<summary>Solution</summary>

**Solution.**  Symmetric Gauss–Seidel applies a forward sweep with $M_{1} = D + L$ and a backward sweep with $M_{2} = D + L^{T}$. The combined preconditioner $M = M_{1}D^{-1}M_{2}$ is symmetric positive definite when $A$ is SPD, so $M^{-1}A$ is self-adjoint in the $M$-inner product and CG remains valid.

</details>

### Exercise 8.3
<a id="preconditioning-ex-8-3"></a>

A multigrid preconditioner reduces CG iterations from $1000$ to $20$ for a $10^{6}$-unknown problem, but the setup cost equals $50$ matrix-vector products. Is it worthwhile?

<details>
<summary>Hint 1</summary>

**Hint.** Include every multigrid-cycle application.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare total work rather than iteration numbers.

</details>

<details>
<summary>Solution</summary>

**Solution.**  The data are insufficient for a numerical speedup because every preconditioned iteration includes both one matrix-vector product and one multigrid-cycle application. If one cycle costs the equivalent of $c$ matrix-vector products, the preconditioned cost is $50+20(1+c)$ product-equivalents, and the idealized speedup is $1000/[50+20(1+c)]$. For example, $c=1$ gives about $11.1\times$, whereas $c=10$ gives about $3.7\times$. Setup reuse across multiple right-hand sides can improve the comparison. Measure $c$ and communication costs before deciding.

</details>

### Exercise 8.4
<a id="preconditioning-ex-8-4"></a>

An incomplete Cholesky factorization of an SPD matrix fails with a zero pivot. Propose two remedies.

<details>
<summary>Hint 1</summary>

**Hint.** Separate a changed subsidiary operator from the original target.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The shift needed for positive pivots depends on the dropping algorithm.

</details>

<details>
<summary>Solution</summary>

**Solution.** 
1. **Diagonal shift:** compute IC of $A + \alpha I$ and increase $\alpha$ until the chosen incomplete-factorization algorithm has acceptably positive pivots. An arbitrary small positive shift does not guarantee success; the needed size depends on the matrix, ordering, and dropping rule.
2. **Pivot modification:** replace the nonpositive pivot by a small positive number and continue. This is a heuristic but often effective in practice.

</details>

## Further exercises

### Exercise 5: Equivalence ratio
<a id="preconditioning-ex-5"></a>

If $\alpha=0.2$ and $\beta=1.8$, bound the transformed condition number.

<details>
<summary>Hint 1</summary>

**Hint.** Use spectral equivalence.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Take the upper-to-lower ratio.

</details>

<details>
<summary>Solution</summary>

**Solution.** The condition number is at most nine. This is for the SPD transformed operator, or the matching energy inner product, and not automatically the Euclidean singular-value condition number of $M^{-1}A$.

</details>

### Exercise 6: Relative perturbation
<a id="preconditioning-ex-6"></a>

An energy-scaled perturbation has norm at most $0.1$. Bound the condition number.

<details>
<summary>Hint 1</summary>

**Hint.** Use one minus delta and one plus delta.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Both endpoints are positive.

</details>

<details>
<summary>Solution</summary>

**Solution.** The bound is $1.1/0.9=11/9$. It also proves SPD because the transformed eigenvalues lie in $[0.9,1.1]$. An unscaled perturbation of the same norm would not necessarily imply this conclusion.

</details>

### Exercise 7: Residual-to-energy error
<a id="preconditioning-ex-7"></a>

Suppose $\alpha=1/4$, $\beta=4$ and $\|r\|_{M^{-1}}=0.01$. Bound the energy error above and below.

<details>
<summary>Hint 1</summary>

**Hint.** Divide by square roots of the opposite spectral endpoints.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Keep the two norm meanings distinct.

</details>

<details>
<summary>Solution</summary>

**Solution.** The energy error lies between $0.01/2=0.005$ and $0.01/(1/2)=0.02$. The conclusion depends on valid equivalence constants and an exact or enclosed preconditioned residual norm.

</details>

### Exercise 8: A scalar rescaling
<a id="preconditioning-ex-8"></a>

Does replacing M by $cM$, $c>0$, change the transformed spectral condition number?

<details>
<summary>Hint 1</summary>

**Hint.** Track both spectral endpoints.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Their common scale cancels.

</details>

<details>
<summary>Solution</summary>

**Solution.** The transformed operator becomes $S/c$, so every eigenvalue is divided by c and the largest-to-smallest ratio is unchanged. The individual equivalence constants and residual norm scaling do change.

</details>

### Exercise 9: Fixed versus variable
<a id="preconditioning-ex-9"></a>

Why can changing an inner stopping tolerance invalidate an ordinary fixed-preconditioner CG interpretation?

<details>
<summary>Hint 1</summary>

**Hint.** Ask whether each application is the same linear map.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** An adaptive iterative inner solve can vary with its input.

</details>

<details>
<summary>Solution</summary>

**Solution.** The resulting application may differ by iteration or be nonlinear, so it need not equal one fixed SPD matrix inverse. Standard PCG proofs assume a fixed compatible operator. Use a justified flexible or inexact method and record its inner-error contract.

</details>

### Exercise 10: Setup reuse
<a id="preconditioning-ex-10"></a>

Setup costs 100 work units and each preconditioned solve 10, versus 30 without setup. For how many right-hand sides is setup strictly cheaper?

<details>
<summary>Hint 1</summary>

**Hint.** Compare total costs for q right-hand sides.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Solve the strict inequality.

</details>

<details>
<summary>Solution</summary>

**Solution.** Require $100+10q<30q$, so $q>5$. Six or more right-hand sides make the preconditioned total smaller under these exact cost assumptions; five ties. Real comparisons must also include accuracy and storage.

</details>

## Sources

Saad, [Preconditioned Iterations](https://epubs.siam.org/doi/10.1137/1.9780898718003.ch9) and [Preconditioning Techniques](https://epubs.siam.org/doi/10.1137/1.9780898718003.ch10), gives the standard algorithmic framework. Multigrid and domain-decomposition uniform-convergence results require their full cited analyses and problem-specific hypotheses; they are not proved here. Kelley, [Iterative Methods for Linear and Nonlinear Equations](https://epubs.siam.org/doi/book/10.1137/1.9781611970944), supplies the CG theorem used after transformation. The spectral-equivalence, relative-perturbation, symmetric-sweep and residual-to-energy bounds needed in this chapter are proved explicitly.

<a id="looking-backward-and-forward"></a>

## Summary

A preconditioner changes coordinates and subsidiary work while the original linear target remains fixed. Spectral equivalence proves a condition-number bound for the symmetric transformed operator and relates a compatible residual to energy error. Symmetry, positivity, application accuracy and cost are part of the same contract. Incomplete factors and coarse spaces can help only under their actual construction and operator hypotheses.
