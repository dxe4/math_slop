var e=`---
parent_id: book-numerical-mathematics-error-algorithms
chapter_id: direct-iterative-linear-algebra
status: draft
title: "Direct and Iterative Linear Algebra"
level: advanced-undergraduate
estimated_minutes: 115
license: CC BY-SA 4.0
---

# Direct and Iterative Linear Algebra

## Local prerequisites and purpose

Assume matrices, inner products, eigenvalues, and floating-point error. This chapter asks how representation, conditioning, factorization, sparsity, and stopping interact when solving linear systems.

## Residual is not forward error

For \\(Ax=b\\) and computed \\(\\widehat{x}\\), residual is \\(r=b-Ax_{hat}\\). The identity

\\(x-\\widehat{x}=A^{-1}r\\)

shows that error depends on inverse amplification. In a subordinate norm,

\\(\\lVert x-\\widehat{x}\\rVert/\\lVert x\\rVert \\le \\kappa(A) \\lVert r\\rVert/\\lVert b\\rVert\\)

under compatible nonzero quantities, where \\(\\kappa(A)=\\lVert A\\rVert\\lVert A^{-1}\\rVert\\). A small residual can coexist with large error when \\(A\\) is ill conditioned.

A normwise backward-error diagnostic is

\\(\\eta=\\lVert r\\rVert/(\\lVert A\\rVert\\lVert \\widehat{x}\\rVert+\\lVert b\\rVert)\\).

It asks how small a relative perturbation could make the computed vector exact. Componentwise diagnostics are preferable when rows and columns have very different scales.

<a id="worked-misleading-residual"></a>

### Worked example 1: misleading residual

Let \\(A=\\operatorname{diag}(1,10^{-8})\\), \\(b=(1,10^{-8})\\), and \\(\\widehat{x}=(1,0)\\). Residual is \\((0,10^{-8})\\), tiny in absolute terms, while exact solution is \\((1,1)\\) and the second component error is one. The matrix condition number is \\(10^{8}\\); the problem hides errors in its weak direction.

## Direct factorization by structure

- General dense square systems: pivoted \\(LU\\) is a standard choice.
- Symmetric positive-definite systems: \`Cholesky\` uses and preserves that structure.
- Tall least squares: Householder \\(QR\\) avoids squaring conditioning.
- Rank uncertainty: pivoted QR or \\(SVD\\) exposes small directions.

Do not form \\(A^{-1}b\\) merely to solve. Factor once and apply triangular solves, especially for multiple right-hand sides.

**Backward-stability statement (cited; Higham, chapter 9).** Under standard floating-point assumptions and controlled element growth, pivoted elimination computes factors corresponding to a nearby matrix. The caveat about growth is real; partial pivoting has pathological examples even though it performs well broadly.

## Sparsity is part of the problem representation

A sparse matrix stores nonzeros and indices. Direct elimination can create **fill-in** where zeros become nonzero factors. Reordering unknowns can change memory and work dramatically without changing the exact system.

Matrix-free methods require only an operation \\(v \\to Av\\). This supports discretized operators too large to store, but verification must then test the operator action, symmetry claims, and preconditioner separately.

## Stationary iteration

Split \\(A=M-N\\), and iterate

\\(x_{k+1}=M^{-1}(N x_k+b)\\).

Error obeys \\(e_{k+1}=G e_k\\) with \\(G=M^{-1}N\\). In finite dimension, convergence from every start occurs exactly when spectral radius \\(\\rho(G)<1\\). A norm bound \\(\\lVert G\\rVert<1\\) is sufficient and yields an explicit geometric estimate, but may be conservative.

Jacobi and Gauss–Seidel correspond to different splittings. Diagonal dominance or positive definiteness can give convergence under stated variants; neither method is universally safe merely because a diagonal is nonzero.

## Krylov methods

Starting from residual \\(r_0\\), the Krylov space is

\\(K_k(A,r_0)=\\operatorname{span}\\{r_0,Ar_0,\\ldots,A^{k-1}r_0\\}\\).

For symmetric positive-definite \\(A\\), conjugate gradients chooses the energy-minimizing correction in an expanding Krylov space. In exact arithmetic it terminates in at most \\(n\\) steps. A classic exact-arithmetic bound, used here as a cited theorem from Kelley, chapter 2, is

\\(\\lVert e_k\\rVert_A \\le 2[(\\sqrt{\\kappa}-1)/(\\sqrt{\\kappa}+1)]^k \\lVert e_0\\rVert_A\\),

where \\(\\kappa\\) is the 2-norm condition number for the SPD matrix. Eigenvalue clustering can make actual convergence faster than this worst-case bound.

For nonsymmetric systems, GMRES minimizes residual norm over a Krylov space. Full GMRES stores an expanding basis; restart limits memory but can discard useful information and stall.

Finite precision breaks exact orthogonality and finite termination. Algorithms monitor loss of orthogonality, residual replacement, and stagnation rather than blindly applying exact-arithmetic conclusions.

## Preconditioning changes coordinates, not the target

A preconditioner \\(M\\) should approximate \\(A\\) in a way that is cheap to apply. Left preconditioning solves \\(M^{-1}Ax=M^{-1}b\\); right preconditioning solves \\(AM^{-1}y=b\\), then \\(x=M^{-1}y\\). Their reported residuals differ, so the original residual must still be checked.

For conjugate gradients, preconditioning must preserve the required symmetric positive-definite structure in the appropriate inner product. “Makes the condition number smaller” is useful only when the relevant spectrum and application cost are considered. An exact \\(M=A\\) gives one-step convergence but costs as much as the original solve.

<a id="worked-diagonal-preconditioner"></a>

### Worked example 2: diagonal preconditioner

For \\(A=\\operatorname{diag}(1,1000)\\), unpreconditioned condition number is 1000. Choosing \\(M=\\operatorname{diag}(1,1000)\\) makes \\(M^{-1}A=I\\). Choosing only a scalar multiple of identity changes no condition number. The example is trivial but illustrates that preconditioning targets unequal directional scales.

## Stopping criteria

A defensible iterative stop includes:

- norm and scaling of the original residual;
- requested absolute and relative tolerances;
- estimate of conditioning or decision-relevant error;
- iteration and work limits;
- stagnation, breakdown, and nonfinite states;
- discretization or data error floor.

Oversolving below the discretization or measurement error wastes work. Stopping at a small preconditioned residual without checking the original system may be misleading.

## Eigenproblems and partial answers

For an approximate eigenpair \\((\\lambda_{hat},v_{hat})\\), report

\\(\\lVert Av_{hat}-\\lambda_{hat} v_{hat}\\rVert/(\\lVert A\\rVert\\lVert v_{hat}\\rVert)\\).

For symmetric matrices, residual plus spectral separation controls eigenvector error. For nonnormal matrices, small residual can coexist with sensitive eigenvalues; pseudospectral behavior matters. Power iteration needs a unique dominant magnitude and a start with a component in its direction.

## Common errors

- Selecting a method from matrix dimension without structure or storage information.
- Using normal equations automatically for least squares.
- Calling an iterative solve converged because an iteration limit was reached.
- Comparing iteration counts while ignoring preconditioner setup and application cost.
- Treating exact-arithmetic orthogonality as guaranteed in floating point.

## A contract for a stationary solver

The residual identity at the beginning is exact. A floating-point residual is another computed quantity and needs its own accumulation or enclosure allowance. The notation $x_{\\rm hat}$ there denotes the same vector as $\\widehat x$. In relative bounds we require a nonsingular square matrix and nonzero $b$, hence nonzero exact solution. When $b=0$, an absolute residual-to-error bound is meaningful but division by $\\|b\\|$ is not.

**Definition 1 (Fixed stationary iteration).** Given invertible $M$ and $A=M-N$, set $G=M^{-1}N$, $c=M^{-1}b$ and $x_{k+1}=Gx_k+c$. Applying $M^{-1}$ means solving with $M$, not forming its dense inverse. The exact fixed-point equation is equivalent to $Ax=b$.

**Theorem 2 (Contraction and an a posteriori bound).** If $\\|G\\|\\le q<1$ in a subordinate norm, the equation has exactly one solution $x_*$, every iteration converges, and
$$\\|x_k-x_*\\|\\le q^k\\|x_0-x_*\\|,\\qquad
\\|x_k-x_*\\|\\le\\frac{\\|x_{k+1}-x_k\\|}{1-q}.$$

*Proof.* The series $\\sum_{j\\ge0}G^j$ converges absolutely in operator norm and its product with $I-G$ telescopes to $I$. Thus $I-G$ is invertible and $x_*=(I-G)^{-1}c$ is the unique fixed point. Subtraction gives $x_{k+1}-x_*=G(x_k-x_*)$, whose iteration proves the first estimate. Future increments satisfy $x_{k+j+1}-x_{k+j}=G^j(x_{k+1}-x_k)$. Sum their norms as a geometric series and pass to the limit to obtain the second estimate. ∎

The final estimate can be evaluated without the unknown exact solution when $q$ is known. It is a theorem for the chosen norm and fixed iteration, not a general interpretation of any small correction. A nonlinear solver can take a tiny step because its Jacobian is wrong, and a floating-point iteration can stagnate when updates are rounded away.

**Theorem 3 (Jacobi under strict row dominance).** If
$$|a_{ii}|>\\sum_{j\\ne i}|a_{ij}|\\quad\\text{for every row }i,$$
Jacobi converges from every starting vector in exact arithmetic.

*Proof.* Every diagonal is nonzero, so $D=\\operatorname{diag}(a_{ii})$ is invertible. With $A=D+(L+U)$, Jacobi has $G=-D^{-1}(L+U)$. Its infinity norm is
$$q=\\max_i\\frac{\\sum_{j\\ne i}|a_{ij}|}{|a_{ii}|}<1.$$
Theorem 2 proves both nonsingularity and convergence, since $A=D(I-G)$. It also gives the displayed bounds with this explicit $q$. ∎

Strict dominance is sufficient, not necessary. A matrix that fails it may still permit convergent Jacobi iteration, or may favor another splitting. Symmetric positive definiteness by itself guarantees the standard Gauss–Seidel method's convergence, but does not guarantee ordinary Jacobi convergence; that distinction matters when choosing a parallel update.

**Worked example 3 (Jacobi with a certified contraction).** Solve
$$\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}
\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}1\\\\2\\end{pmatrix}.$$
Jacobi is $x^+=(1-y)/4$, $y^+=(2-2x)/3$. Its row ratios are $1/4$ and $2/3$, so $q=2/3$. Starting from $(0,0)$ gives
$$x_1=(1/4,2/3),\\quad x_2=(1/12,1/2),\\quad
x_3=(1/8,11/18).$$
Elimination gives the exact answer $(1/10,3/5)$. The second iterate's infinity error is $1/10$. Its next increment has norm $1/9$, so the a posteriori estimate is $(1/9)/(1-2/3)=1/3$, a valid conservative bound. Every displayed value is derived from the recurrence rather than from an unidentified software run.

## Spectral radius and transient growth

**Proposition 4 (Finite-dimensional spectral criterion).** A fixed iteration converges to its solution for every start if and only if $\\rho(G)<1$.

*Proof.* Convergence of all errors is equivalent to $G^ke\\to0$ for every vector. In a complex Jordan basis, each nonzero-eigenvalue block contributes a finite sum of terms that are polynomials in $k$ times powers of its eigenvalue. They tend to zero if its modulus is below one; a zero-eigenvalue block is nilpotent and vanishes after finitely many powers. Thus $\\rho(G)<1$ suffices. Conversely an eigenvector with eigenvalue of modulus at least one cannot decay under repeated multiplication. For a real matrix a complex eigenvector's real and imaginary parts show that at least one real starting error also fails to decay. ∎

A particular norm can have $\\|G\\|>1$ although its spectral radius is smaller than one. Then a short initial growth is possible before asymptotic decay. For example
$$G=\\begin{pmatrix}1/2&K\\\\0&1/2\\end{pmatrix},\\qquad
G^k=\\begin{pmatrix}2^{-k}&kK\\,2^{-(k-1)}\\\\0&2^{-k}\\end{pmatrix}.$$
Large $K$ can amplify an initial second-coordinate error substantially, although every term tends to zero. A convergence theorem and a practically useful finite-iteration bound are different levels of information.

Finite precision adds forcing to the error recurrence. If each iteration has perturbation at most $\\epsilon$ and $\\|G\\|\\le q<1$, then
$$\\|e_k\\|\\le q^k\\|e_0\\|+\\epsilon(1-q^k)/(1-q).$$
This follows by repeated substitution. A contraction close to one amplifies a small arithmetic floor; an iteration limit is a resource bound and must not be used as the mathematical stopping condition.

## Factorization as a sequence of exact questions

A direct solver first eliminates, then solves triangular systems. Pivoting selects a safer row or column ordering for the arithmetic; it does not change the represented exact solution when permutations are carried through correctly. For a nonsingular matrix, a zero or very small computed pivot may be caused by scale, rounding or unsuitable pivot selection. The returned status should identify the failure rather than treating a partial vector as the answer.

**Worked example 4 (Two triangular solves).** Let
$$A=\\begin{pmatrix}2&1\\\\1&3\\end{pmatrix}
=\\begin{pmatrix}1&0\\\\1/2&1\\end{pmatrix}
\\begin{pmatrix}2&1\\\\0&5/2\\end{pmatrix},\\qquad b=(1,2)^{\\mathsf T}.$$
Forward substitution gives $z_1=1$, $z_2=2-1/2=3/2$. Back substitution gives $x_2=(3/2)/(5/2)=3/5$ and $x_1=(1-3/5)/2=1/5$. Substitution in the original rows returns one and two. Reusing the factors for a second right-hand side requires two new triangular solves, whereas forming an inverse would compute additional data with no benefit for this single target.

The matrix is also positive definite: its first leading minor is two and its determinant is five. Cholesky instead factors it into a lower triangular matrix times its transpose. Its square roots and solve rounding have different implementation details, but exploit the same symmetry and positive energy. A general nonsymmetric matrix must not be passed to an SPD-specific algorithm solely because its diagonal entries are positive.

The backward-stability result stated earlier is a cited rounding-error theorem with an element-growth qualification. It does not follow from exact LU identities or from a small residual on one example. Higham's analysis tracks computed products and pivot growth. A factorization computed in low precision, a high-precision residual and a high-precision update form yet another algorithm, developed in the [mixed-precision chapter](randomized-mixed-precision-linear-algebra.md).

## Backward error with an explicit perturbation model

For the Euclidean operator norm, the displayed normwise $\\eta$ has a precise interpretation. Allow perturbations satisfying $\\|\\Delta A\\|_2\\le\\eta\\|A\\|_2$ and $\\|\\Delta b\\|_2\\le\\eta\\|b\\|_2$. A consistent perturbed system obeys $\\Delta A\\widehat x-\\Delta b=r$. The triangle inequality proves $\\|r\\|_2\\le\\eta(\\|A\\|_2\\|\\widehat x\\|_2+\\|b\\|_2)$, so the diagnostic is a lower bound on any admissible scale.

When $r\\ne0$ and $\\widehat x\\ne0$, equality is attained by
$$
\\Delta A=\\eta\\|A\\|_2\\frac r{\\|r\\|_2}
\\frac{\\widehat x^{\\mathsf T}}{\\|\\widehat x\\|_2},
\\qquad
\\Delta b=-\\eta\\|b\\|_2\\frac r{\\|r\\|_2}.
$$
Their combined action is exactly $r$. The zero-vector cases are handled by omitting the corresponding term; if both denominator and residual are zero, use $\\eta=0$. This proves the normwise interpretation for unstructured perturbations. Symmetry, sparsity, exact zeros or componentwise relative uncertainty impose different permissible perturbations and may yield a larger backward error.

For a fixed output $c^{\\mathsf T}x$, the adjoint equation $A^{\\mathsf T}z=c$ gives output error $z^{\\mathsf T}r$. It can reveal that one weak matrix direction does not matter to a particular output, or that a tiny residual component matters greatly. An error budget should use that decision-relevant information when it is available rather than oversolving every direction equally.

## Krylov claims and finite arithmetic

The conjugate-gradient energy-minimization theorem and the condition-number bound above are cited results under SPD and exact-arithmetic assumptions. Their full derivation uses residual polynomials, orthogonal directions and a Chebyshev minimax estimate. This chapter does not replace that proof by an observed residual curve. Kelley's chapter 2 supplies the analysis. Repeated eigenvalues can allow termination earlier than dimension; finite arithmetic can prevent exact termination altogether.

For GMRES, the relevant norm is the original residual norm before any separately declared preconditioning. Restart chooses a smaller memory budget but changes the space over which the next minimization occurs. It can lose a slowly learned direction. Left preconditioning changes the residual being minimized, while right preconditioning changes the parameterization of candidate corrections. Report both the minimized quantity and the physical residual.

An SPD preconditioner for CG is interpreted through a symmetric transformed operator, such as $M^{-1/2}AM^{-1/2}$, rather than by declaring the generally nonsymmetric-looking product $M^{-1}A$ symmetric in the ordinary Euclidean inner product. Its eigenvalues and energy are those of the transformed problem. Include preconditioner setup and application costs in a work comparison; reducing iterations while increasing total work is possible.

Finally, check the representation. A sparse matrix includes dimensions, index base, duplicate-entry policy and boundary elimination. A matrix-free operator includes the exact action and its transpose if the algorithm needs one. Symmetry must hold for the represented operation, not merely for the continuous differential equation from which it was derived.

## Practice with solutions

### Exercise 1: Residual scale
<a id="direct-iterative-linear-algebra-ex-1"></a>

If \\(A\\) and \\(b\\) are both multiplied by \\(10^{6}\\), does the exact solution change?

<details>
<summary>Hint 1</summary>

**Hint.** Scale the entire equation.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare absolute and relative residuals.

</details>

<details>
<summary>Solution</summary>

**Solution.** No, but an unscaled absolute residual changes by \\(10^{6}\\). A relative backward error remains comparable, illustrating why scaling belongs in the diagnostic.

</details>

### Exercise 2: CG eligibility
<a id="direct-iterative-linear-algebra-ex-2"></a>

Can ordinary conjugate gradients be applied safely to every invertible matrix?

<details>
<summary>Hint 1</summary>

**Hint.** Identify CG's quadratic energy.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Its positive-definite symmetry assumption is essential.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. Its standard minimization and recurrence require a symmetric positive-definite operator. Nonsymmetric or indefinite systems need methods designed for those structures or suitable transformations whose conditioning is audited.

</details>

### Exercise 3: Stopping floor
<a id="direct-iterative-linear-algebra-ex-3"></a>

A discretization error is estimated near \\(10^{-4}\\), while the linear residual has fallen from one to \\(10^{-10}\\). What should be questioned?

<details>
<summary>Hint 1</summary>

**Hint.** Compare error scales in a common norm.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** An algebraic tolerance far below field error may waste work.

</details>

<details>
<summary>Solution</summary>

**Solution.** Whether such a tight algebraic solve is useful. Unless the linear error affects a sensitive quantity differently, work below the discretization floor may not improve the final approximation. Confirm with a refinement and error-budget study.

</details>

<a id="decision-summary"></a>

## Choosing a solver

Choose a representation and method from verified structure. Pair residual with conditioning. Treat preconditioning and stopping as mathematical design, not tuning folklore. Return evidence with the vector.


## Further exercises

### Exercise 4: Jacobi contraction
<a id="direct-iterative-linear-algebra-ex-4"></a>

For $A=\\begin{pmatrix}5&1\\\\2&6\\end{pmatrix}$, compute the Jacobi infinity-norm contraction bound.

<details>
<summary>Hint 1</summary>

**Hint.** Divide off-diagonal row sums by diagonal magnitudes.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Take the largest ratio.

</details>

<details>
<summary>Solution</summary>

**Solution.** The ratios are $1/5$ and $2/6=1/3$, so $q=1/3<1$. The theorem proves nonsingularity and convergence from every start, with infinity error reduced by at most this factor per exact iteration.

</details>

### Exercise 5: An error from an increment
<a id="direct-iterative-linear-algebra-ex-5"></a>

If $q=0.4$ and $\\|x_{k+1}-x_k\\|\\le0.003$, bound the error at $x_k$.

<details>
<summary>Hint 1</summary>

**Hint.** Use the a posteriori theorem.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Divide by one minus the contraction bound.

</details>

<details>
<summary>Solution</summary>

**Solution.** The error is at most $0.003/0.6=0.005$. This bound assumes the stated fixed contraction and an exact or enclosed increment. A small step without the contraction theorem does not imply the same error conclusion.

</details>

### Exercise 6: Transient convergence
<a id="direct-iterative-linear-algebra-ex-6"></a>

For $G=\\begin{pmatrix}1/2&100\\\\0&1/2\\end{pmatrix}$, compare spectral radius and infinity norm.

<details>
<summary>Hint 1</summary>

**Hint.** Read the eigenvalues from the triangular diagonal.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compute the largest absolute row sum.

</details>

<details>
<summary>Solution</summary>

**Solution.** The spectral radius is $1/2$, so all exact fixed-iteration errors eventually vanish. The infinity norm is $100.5$, so a first-step contraction argument fails and substantial transient growth can occur. These facts are consistent.

</details>

### Exercise 7: SPD is insufficient for Jacobi
<a id="direct-iterative-linear-algebra-ex-7"></a>

Let $A$ be a three-by-three matrix with diagonal entries one and every off-diagonal entry $0.9$. Is it SPD, and does Jacobi converge?

<details>
<summary>Hint 1</summary>

**Hint.** Use the constant vector and its orthogonal complement.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Jacobi has diagonal zero and off-diagonal minus 0.9.

</details>

<details>
<summary>Solution</summary>

**Solution.** A has eigenvalues $2.8$ on constants and $0.1$ on the two-dimensional orthogonal complement, so it is SPD. Jacobi has eigenvalues $-1.8,0.9,0.9$, hence spectral radius $1.8>1$ and fails for some starts. SPD alone is not its convergence theorem.

</details>

### Exercise 8: Triangular solve
<a id="direct-iterative-linear-algebra-ex-8"></a>

Using the worked LU factors, solve the same matrix for right-hand side $(2,1)$.

<details>
<summary>Hint 1</summary>

**Hint.** First solve Lz=b.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Then solve Ux=z.

</details>

<details>
<summary>Solution</summary>

**Solution.** Forward substitution gives $z=(2,0)$. Back substitution gives $x_2=0$ and $x_1=1$, which indeed satisfies $A(1,0)^{\\mathsf T}=(2,1)^{\\mathsf T}$. The factors can be reused without forming an inverse.

</details>

### Exercise 9: Original residual
<a id="direct-iterative-linear-algebra-ex-9"></a>

A left preconditioner rescales the second row by $10^{-6}$. Why is a small preconditioned residual insufficient alone?

<details>
<summary>Hint 1</summary>

**Hint.** Compare the original and scaled second components.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A component can look small because of scaling.

</details>

<details>
<summary>Solution</summary>

**Solution.** The preconditioned residual's second entry is one millionth of the original. Its small norm can hide an important original equation discrepancy. Recompute $b-A\\widehat x$ and use the declared physical scale or a proved norm-transfer bound.

</details>

### Exercise 10: Arithmetic floor
<a id="direct-iterative-linear-algebra-ex-10"></a>

For $q=0.8$ and per-step perturbation bound $10^{-9}$, give the limiting contraction-model floor.

<details>
<summary>Hint 1</summary>

**Hint.** Sum the geometric perturbation series.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Divide by one minus q.

</details>

<details>
<summary>Solution</summary>

**Solution.** The limiting upper bound is $10^{-9}/0.2=5\\times10^{-9}$. The initial error contribution decays as $0.8^k$, but the worst-case perturbation contribution persists. More iterations alone do not improve this guaranteed floor.

</details>

## Sparsity, stopping and a replayable small case

The exact matrix represented by sparse storage can differ from a reader's first impression. Duplicate entries may be summed or overwritten, indices may start at zero or one, and an omitted diagonal may mean exact zero rather than an unknown value. Freeze those rules before comparing algorithms. Reordering both rows and columns consistently preserves an exact symmetric problem, while permuting only one side changes the displayed operator and can invalidate an SPD assumption.

For a matrix-free discretization, retain a tiny grid whose full matrix can be written down and compare its action with the operator routine. This is a finite verification fixture, not a proof for every grid. It nevertheless exercises boundary indexing, signs, scaling and the transpose action in a form a reader can inspect. Keep the mathematical norm distinct from a preconditioner's internal norm.

An iterative stop should state whether the numerator is a recomputed residual or a recursively updated estimate. In exact arithmetic they may coincide; rounding can make the recurrence drift away from the true residual. Residual replacement can improve diagnostics but changes the executed recurrence and its work count. Record the final original-system residual and the reason for stopping even when the internal estimate appears favorable.

## Sources

Kelley, [Iterative Methods for Linear and Nonlinear Equations](https://epubs.siam.org/doi/book/10.1137/1.9781611970944), chapters 1–3, supplies the general stationary, CG and GMRES analyses. The CG bound and minimization/finite-termination properties above are cited theorems, whose full polynomial proof is not reproduced. Higham, [Accuracy and Stability of Numerical Algorithms, second edition](https://epubs.siam.org/doi/book/10.1137/1.9780898718027), develops factorization rounding analysis and conditioning; the pivoted-LU backward-stability statement depends on that analysis and controlled element growth. The contraction, Jacobi, spectral-radius and Euclidean backward-error arguments used directly here are proved in the text.

## Summary

A linear solve has a representation, a target and an error contract. Direct factorizations exploit structure and reuse triangular solves; stationary methods need a propagation bound, with strict diagonal dominance giving an explicit Jacobi theorem. Krylov methods use expanding subspaces under their symmetry and arithmetic assumptions. Residuals become forward or output error only through sensitivity. The next chapter treats eigenvalues, singular vectors and rank decisions, where spectral separation adds another essential scale.
`;export{e as default};