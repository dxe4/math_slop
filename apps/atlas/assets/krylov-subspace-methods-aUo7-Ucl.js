var e=`---
parent_id: book-matrix-computation-applications
chapter_id: krylov-subspace-methods
title: "Krylov Subspace Methods"
level: advanced-undergraduate
status: draft
estimated_minutes: 200
license: CC BY-SA 4.0
---

# Krylov Subspace Methods

Krylov subspaces are the natural search spaces for large-scale linear algebra. They require only matrix-vector products, they adapt to the spectrum of $A$, and they underpin the most widely used iterative solvers. This chapter analyzes the conjugate gradients and GMRES methods in depth, derives their convergence properties from polynomial approximation, and explains how preconditioning transforms the Krylov space without changing the solution.

## Krylov subspaces and polynomial connections

For $A \\in \\mathbb{C}^{n \\times n}$, $r_{0} = b - Ax_{0}$ and an integer $k \\ge 1$, the $k$th Krylov subspace has dimension at most $\\min\\{k,n\\}$; its dimension equals $k$ exactly when the $k$ displayed generators are linearly independent:

$$
\\mathcal{K}_{k}(A, r_{0}) = \\operatorname{span}\\{r_{0}, Ar_{0}, A^{2}r_{0}, \\dots, A^{k-1}r_{0}\\}.
$$

Every vector $x_{k} \\in x_{0} + \\mathcal{K}_{k}$ can be written as $x_{k} = x_{0} + q_{k-1}(A)r_{0}$ for some polynomial $q_{k-1}$ of degree at most $k-1$. The residual is

$$
r_{k} = b - Ax_{k} = p_{k}(A)r_{0},
\\qquad p_{k}(z) = 1 - zq_{k-1}(z).
$$

Thus Krylov methods seek a polynomial $p_{k}$ with $p_{k}(0) = 1$ that minimizes an appropriate norm of $p_{k}(A)r_{0}$.

## Conjugate gradients revisited

For symmetric positive-definite $A$, CG minimizes the $A$-norm of the error $e_{k} = x_{*} - x_{k}$ over $x_{0} + \\mathcal{K}_{k}$. Equivalently, it minimizes $\\lVert p_{k}(A)r_{0} \\rVert_{A^{-1}}$ over polynomials $p_{k}$ with $p_{k}(0) = 1$.

Because $A$ is diagonalizable by an orthogonal matrix, the bound reduces to a scalar polynomial approximation problem on the spectrum of $A$. If the eigenvalues lie in $[\\lambda_{\\min}, \\lambda_{\\max}]$, the Chebyshev polynomial gives the worst-case bound quoted in the previous chapter. Eigenvalue clusters may permit smaller polynomial values than an interval-only estimate predicts; their influence also depends on the starting residual. Clustering is useful information, rather than an unconditional iteration count.

**Finite termination.** In exact arithmetic, CG terminates in at most the degree of the minimal polynomial of $A$ on $r_0$, hence at most the number of distinct eigenvalues of SPD $A$, and at most $n$. The Krylov space need not equal the entire ambient space. The complete active-spectrum proof appears below. Rounding errors remove this exact finite-termination guarantee.

## GMRES and the Arnoldi process

GMRES for nonsymmetric $A$ minimizes $\\lVert r_{k} \\rVert_{2}$ over $x_{0} + \\mathcal{K}_{k}$. The Arnoldi process builds an orthonormal basis $Q_{k}$ of $\\mathcal{K}_{k}$ and a $(k+1) \\times k$ upper Hessenberg matrix $H_{k}$ such that

$$
AQ_{k} = Q_{k+1}H_{k}.
$$

If $r_0=0$, stop immediately. Before Arnoldi breakdown, the displayed basis relation holds with orthonormal columns. At an exact breakdown, the current Krylov space is invariant under $A$. For nonsingular $A$, its restriction to that finite-dimensional space is injective and hence invertible; because $r_0$ belongs to the space, the exact correction $A^{-1}r_0$ also belongs to it. The least-squares problem therefore attains residual zero, and the method stops without constructing another basis vector.

The least-squares problem

$$
\\min_{y} \\lVert \\beta e_{1} - H_{k}y \\rVert_{2},
\\qquad \\beta = \\lVert r_{0} \\rVert_{2},
$$

is solved by QR factorization of $H_{k}$ at each step. The residual norm is available without forming $x_{k}$, allowing cheap stopping tests.

**Restarted GMRES.** To limit storage to $O(mn)$, GMRES($m$) restarts every $m$ iterations with the current iterate as the new initial guess. If the spectrum is unfavorable, restarting can stall convergence. Increasing $m$ helps but raises memory cost.

## Preconditioning in the Krylov framework

A preconditioner $M \\approx A$ is chosen so that $M^{-1}A$ (or $AM^{-1}$) has a clustered spectrum and $M^{-1}v$ is cheap to compute. Preconditioned CG solves $M^{-1}Ax = M^{-1}b$ while preserving symmetry and positive definiteness. The requirement is that $M$ itself be SPD and that $M^{-1}A$ be self-adjoint in the $M$-inner product.

For GMRES, left preconditioning solves $M^{-1}Ax = M^{-1}b$, and right preconditioning solves $AM^{-1}y = b$ with $x = M^{-1}y$. Right preconditioning preserves the residual norm of the original system, which is convenient for stopping criteria.

## Example: polynomial convergence

**Example 9.1 (Worked calculation).**

Let $A = \\operatorname{diag}(1, 2, 10)$ and $r_{0} = (1, 1, 1)^{T}$. After two CG iterations, the error polynomial $p_{2}(z)$ must satisfy $p_{2}(0) = 1$ and minimize $\\lVert p_{2}(A)r_{0} \\rVert_{A^{-1}}$. Because the spectrum has only three points, CG terminates in at most three steps. The third iteration yields the exact solution (in exact arithmetic), illustrating finite termination.

## Common errors and misconceptions

**Error: using a non-SPD preconditioner with CG.** If $M$ is indefinite, the $M$-inner product is not a norm and CG can break down. For a symmetric indefinite system, unpreconditioned MINRES or MINRES with an appropriate SPD preconditioner is an alternative. An indefinite preconditioner does not automatically become legitimate merely by changing the solver name. GMRES can handle a nonsymmetric preconditioned operator when its access and nonsingularity hypotheses hold.

**Error: assuming GMRES($m$) always converges.** There exist matrices for which restarted GMRES cycles indefinitely without reducing the residual. Monitoring stagnation and increasing $m$ or switching to a different method is essential.

**Error: ignoring the cost of preconditioner application.** A preconditioner that is expensive to apply can dominate the iteration cost. The total cost is iteration count times cost per iteration, and the preconditioner application is part of that cost.

## The variational meaning of CG

**Definition 9.2 (Energy norm and trial space).** For a real SPD matrix $A$, put $\\|v\\|_A=(v^TAv)^{1/2}$. Define $\\mathcal K_0=\\{0\\}$. In exact arithmetic, the CG approximation $x_k$ is the unique minimizer of $\\|x_*-x\\|_A$ over $x_0+\\mathcal K_k(A,r_0)$, until the exact solution is reached. This definition makes the mathematical method precise before choosing a recurrence to compute it.

Existence and uniqueness follow by minimizing a strictly convex quadratic over a finite-dimensional affine space. Expanding the squared norm under a variation $x_k+tv$ gives its derivative $-2v^TA(x_*-x_k)$. Therefore the minimizer is characterized by
$$
v^Tr_k=0\\quad\\text{for all }v\\in\\mathcal K_k.
$$
This is the Galerkin condition. Conversely, if this orthogonality holds, the Pythagorean identity
$$
\\|x_*-(x_k+v)\\|_A^2=\\|x_*-x_k\\|_A^2+\\|v\\|_A^2
$$
proves minimality and uniqueness.

The familiar short recurrence starts with $p_0=r_0$ and uses
$$
\\alpha_k=\\frac{r_k^Tr_k}{p_k^TAp_k},\\qquad
x_{k+1}=x_k+\\alpha_kp_k,\\qquad
r_{k+1}=r_k-\\alpha_kAp_k,
$$
$$
\\beta_{k+1}=\\frac{r_{k+1}^Tr_{k+1}}{r_k^Tr_k},
\\qquad p_{k+1}=r_{k+1}+\\beta_{k+1}p_k.
$$
Stop if $r_k=0$. SPD ensures a positive curvature denominator for every nonzero direction. The conjugacy argument in Exercise 7.1 proves that the nonzero directions are $A$-orthogonal. Their span is the Krylov trial space before termination, so minimization along successive conjugate directions enforces the Galerkin conditions. Thus the recurrence realizes the variational method in exact arithmetic.

Finite precision changes this equivalence quantitatively: stored directions need not remain exactly conjugate, recursively updated residuals may drift from $b-Ax_k$, and some spectral components can reappear. Periodic reliable residual evaluation diagnoses that drift, but changing a recurrence requires an analysis of the implemented method rather than an appeal to exact finite termination.

## The minimal polynomial on the starting residual

**Definition 9.3 (Active eigenvalues and relative minimal polynomial).** Write the SPD spectral decomposition using distinct eigenvalues:
$A=\\sum_{j=1}^s\\lambda_jP_j$, where the $P_j$ are orthogonal spectral projectors and $\\lambda_j>0$. An eigenvalue is active for $r_0$ if $P_jr_0\\ne0$. If $r_0\\ne0$, its relative minimal polynomial is the monic polynomial of least degree $m$ such that $m(A)r_0=0$.

**Theorem 9.4 (Finite termination without a full Krylov space).** If $d$ distinct eigenvalues are active for nonzero $r_0$, then
$$
m(z)=\\prod_{\\lambda_j\\text{ active}}(z-\\lambda_j)
$$
is the relative minimal polynomial and CG reaches $x_*$ in at most $d$ exact steps.

*Proof.* For any polynomial $p$,
$p(A)r_0=\\sum_jp(\\lambda_j)P_jr_0$. The terms are orthogonal, so this vector is zero if and only if $p(\\lambda_j)=0$ at every active eigenvalue. A nonzero polynomial with $d$ distinct roots has degree at least $d$, and the displayed monic product attains that degree. Because every active eigenvalue is nonzero, $m(0)\\ne0$. Set $p(z)=m(z)/m(0)$. Then $p(0)=1$ and $p(A)r_0=0$. The polynomial $q(z)=(1-p(z))/z$ is well defined, since its numerator has zero constant term, and has degree at most $d-1$. Thus $x_0+q(A)r_0$ lies in $x_0+\\mathcal K_d$ and has residual zero. The unique energy minimizer over that space must also have zero error. $\\square$

If $r_0=0$, the starting point is already exact and no polynomial argument is needed. The theorem is stronger than an $n$-step bound, and it does not assume that $\\mathcal K_n=\\mathbb R^n$. Repeated eigenvalues or an initial residual confined to a small invariant subspace are common cases in which the Krylov space remains proper.

**Example 9.5 (A proper subspace can be enough).** Let $A=\\operatorname{diag}(1,1,9)$, $b=(1,2,0)^T$, and $x_0=0$. Only eigenvalue1 is active. Hence $m(z)=z-1$ and $p(z)=1-z$. The recurrence gives $\\alpha_0=(1+4)/(1+4)=1$, so $x_1=b$ and $r_1=0$. The entire Krylov space is the one-dimensional span of $b$, although the ambient dimension is3. If the third component of $b$ is changed to1, the two active eigenvalues1 and9 give termination in at most two exact steps, still without a full three-dimensional space.

## A complete CG interval bound

**Theorem 9.6 (CG energy and residual bounds).** Suppose the eigenvalues of SPD $A$ lie in $[a,b]$ with $0<a<b$, and set $\\kappa=b/a$ and
$q=(\\sqrt\\kappa-1)/(\\sqrt\\kappa+1)$. Then exact CG satisfies
$$
\\frac{\\|e_k\\|_A}{\\|e_0\\|_A}\\le2q^k,\\qquad
\\frac{\\|r_k\\|_{A^{-1}}}{\\|r_0\\|_{A^{-1}}}\\le2q^k.
$$
In the ordinary2-norm,
$$
\\frac{\\|r_k\\|_2}{\\|r_0\\|_2}\\le2\\sqrt\\kappa\\,q^k.
$$
If $a=b$, CG terminates in one step for a nonzero initial residual.

*Proof.* Every admissible error is $p(A)e_0$ with $\\deg p\\le k$ and $p(0)=1$, because $r_0=Ae_0$ and $A$ commutes with its polynomials. Orthogonal diagonalization therefore gives
$$
\\|e_k\\|_A\\le
\\min_p\\max_{\\lambda\\in[a,b]}|p(\\lambda)|\\,\\|e_0\\|_A.
$$
Choose
$$
p(\\lambda)=\\frac{T_k((a+b-2\\lambda)/(b-a))}
{T_k((a+b)/(b-a))},
$$
where $T_k(\\cos\\theta)=\\cos(k\\theta)$. The numerator has magnitude at most1 on the interval. For $c=(a+b)/(b-a)>1$ and $\\rho=c+\\sqrt{c^2-1}$, the recurrence $T_{k+1}(c)=2cT_k(c)-T_{k-1}(c)$ and the initial values show
$T_k(c)=(\\rho^k+\\rho^{-k})/2$. Algebra gives
$\\rho=(\\sqrt\\kappa+1)/(\\sqrt\\kappa-1)=q^{-1}$, so $1/T_k(c)\\le2q^k$. This proves the energy bound.

Since $r_k=Ae_k$, $\\|r_k\\|_{A^{-1}}=\\|e_k\\|_A$. Also
$\\|r_k\\|_2\\le\\sqrt b\\,\\|r_k\\|_{A^{-1}}$ and
$\\|r_0\\|_{A^{-1}}\\le\\|r_0\\|_2/\\sqrt a$. Combining proves the Euclidean residual bound. If $a=b$, the spectral theorem gives $A=aI$, and a single step with $\\alpha_0=1/a$ solves the system. $\\square$

A small energy error and a small relative Euclidean residual therefore have related but different bounds. Using the factor $2q^k$ for every norm without the conversion factor is unjustified. The interval estimate also ignores actual spectral gaps, clusters, and active components; a better polynomial on the discrete spectrum can give a sharper result.

## GMRES bounds and their limitations

**Theorem 9.7 (Residual polynomial bounds).** Let $A$ be nonsingular and use full, unrestarted GMRES in exact arithmetic. Then
$$
\\|r_k\\|_2=\\min_{\\deg p\\le k,\\ p(0)=1}\\|p(A)r_0\\|_2.
$$
If $A=V\\Lambda V^{-1}$ is diagonalizable, this implies
$$
\\|r_k\\|_2\\le\\kappa_2(V)
\\min_{\\deg p\\le k,\\ p(0)=1}\\max_j|p(\\lambda_j)|\\,\\|r_0\\|_2.
$$

*Proof.* The residual-polynomial correspondence at the start of the chapter is two-sided: for every $p(0)=1$, $(1-p(z))/z$ is a polynomial of one lower degree and defines an allowed correction. GMRES minimizes over precisely those corrections, proving equality. Diagonalization gives
$p(A)=Vp(\\Lambda)V^{-1}$, hence
$\\|p(A)\\|_2\\le\\|V\\|_2\\|V^{-1}\\|_2\\max_j|p(\\lambda_j)|$.
Apply this inequality to every admissible polynomial and minimize. $\\square$

For normal $A$, $V$ can be unitary and the prefactor is1. For a highly nonnormal diagonalization the prefactor may be large; for a defective matrix such a diagonalization does not exist. Eigenvalues alone cannot then determine the norm of a matrix polynomial.

A different useful bound requires a positive Hermitian part. If
$\\operatorname{Re}(v^*Av)\\ge\\alpha\\|v\\|_2^2$ for all $v$, with $\\alpha>0$, and $\\|A\\|_2\\le\\beta$, choose $t=\\alpha/\\beta^2$. Direct expansion gives
$$
\\|(I-tA)v\\|_2^2
\\le(1-2t\\alpha+t^2\\beta^2)\\|v\\|_2^2
=(1-\\alpha^2/\\beta^2)\\|v\\|_2^2.
$$
Using $p(z)=(1-tz)^k$ in Theorem 9.7 proves
$$
\\|r_k\\|_2\\le(1-\\alpha^2/\\beta^2)^{k/2}\\|r_0\\|_2.
$$
This is a proved sufficient convergence bound, not a necessary condition for convergence. Restarting discards the full trial space and therefore does not inherit every full-GMRES estimate.

**Example 9.8 (Restarting can stagnate).** Let
$A=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$, $b=e_1$, and $x_0=0$. A one-dimensional correction is $x=\\tau e_1$, giving residual $e_1-\\tau e_2$ and squared norm $1+|\\tau|^2$. GMRES therefore chooses $\\tau=0$ and makes no progress. GMRES(1) repeats the same state forever. Full GMRES at step2 has $\\mathcal K_2=\\operatorname{span}(e_1,e_2)$ and finds $x=-e_2$, whose residual is zero. The matrix is nonsingular and normal; its Hermitian part is zero, so the positive-part bound does not apply.

Arnoldi's small least-squares residual equals the true residual in exact arithmetic because multiplication by an orthonormal basis preserves the 2-norm. In finite precision this identity is perturbed by loss of orthogonality and the Arnoldi relation error. A stopping rule should periodically check the original residual with a declared evaluation budget, especially after restarting or preconditioning.

## A CG residual need not shrink in the Euclidean norm

Take A=diag(1,100), x_0=0 and r_0=(1,0.1). The first CG step length is 1.01 divided by two, so the new residual is (0.495,−4.95). Its Euclidean norm is greater than four, while the starting residual norm is only slightly greater than one.

The energy-compatible residual squared norm, however, drops from 1.0001 to 0.49005. These values follow by weighting the second squared coordinate by the inverse eigenvalue one hundred. Hence the energy error decreased exactly as the minimisation theorem requires.

This calculation refutes an unconditional monotonicity claim for ordinary residual norms without questioning CG's proved objective. Monitoring that norm remains useful for the original equations; its occasional increase does not alone diagnose a failed SPD algorithm.

Large dimension does not force a large exact Krylov iteration count. Suppose a diagonal matrix has only the values one and one hundred, each repeated arbitrarily many times. The degree-two polynomial with factors one minus t and one minus t divided by one hundred vanishes at both spectral values and has constant term one. It therefore annihilates every residual vector when evaluated at the matrix. The exact GMRES minimisation can choose this polynomial, giving zero residual by step two, regardless of the multiplicities. Conjugate gradients has the same finite-termination conclusion here because the matrix is SPD. The generic condition-number bound remains valid but does not describe this early termination: the active minimal polynomial retains spectral information that the two extreme eigenvalues alone discard.

## Practice exercises with solutions

### Exercise 7.1
<a id="krylov-subspace-methods-ex-1"></a>

Show that the CG search directions $p_{k}$ are $A$-conjugate: $p_{i}^{T}Ap_{j} = 0$ for $i \\neq j$.

<details>
<summary>Hint 1</summary>

**Hint.** Use the Galerkin orthogonality condition and the residual update.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Express $Ap_j$ through two successive residuals, then treat the neighboring direction separately.

</details>
<details>
<summary>Solution</summary>

**Solution.** Exact-arithmetic CG satisfies the Galerkin condition $r_k\\perp\\mathcal K_k$, so the residuals are mutually orthogonal and $\\operatorname{span}\\{p_0,\\ldots,p_{k-1}\\}=\\mathcal K_k$. From $r_{j+1}=r_j-\\alpha_jAp_j$, we have $Ap_j=(r_j-r_{j+1})/\\alpha_j$. Hence for $j<k-1$, $p_j^TAr_k=(Ap_j)^Tr_k=0$ by residual orthogonality. In $p_k=r_k+\\beta_kp_{k-1}$, the choice $\\beta_k=r_k^Tr_k/(r_{k-1}^Tr_{k-1})$ makes $p_{k-1}^TAp_k=0$ after substituting the residual update; the earlier directions remain conjugate by the preceding identity and induction. Thus $p_i^TAp_j=0$ whenever $i\\ne j$.

</details>

### Exercise 7.2
<a id="krylov-subspace-methods-ex-2"></a>

A symmetrically preconditioned SPD matrix has eigenvalues $1, 1.1, 1.2, \\dots, 2$. Use the standard CG theorem to estimate an iteration count for reducing the energy-norm error by a factor of $10^{-8}$.

<details>
<summary>Hint 1</summary>

**Hint.** Compute the interval condition number.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Solve the inequality including the leading factor2.

</details>
<details>
<summary>Solution</summary>

**Solution.** The effective condition number is $2$. The convergence factor is $q=(\\sqrt{2}-1)/(\\sqrt{2}+1)\\approx0.1716$. The theorem requires $2q^k\\le10^{-8}$, whose first integer solution is $k=11$. This is an energy-norm error bound; converting it to a relative residual bound requires the relevant norm and condition-number factors. The clustered eigenvalues may make actual convergence faster than this interval bound.

</details>

### Exercise 7.3
<a id="krylov-subspace-methods-ex-3"></a>

Explain why the storage cost of GMRES($m$) is $O(mn)$ rather than $O(n^{2})$.

<details>
<summary>Hint 1</summary>

**Hint.** Count basis vectors and the small Hessenberg matrix.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use $m\\le n$ for the combined asymptotic bound.

</details>
<details>
<summary>Solution</summary>

**Solution.** GMRES($m$) keeps only $m$ orthonormal basis vectors of length $n$, plus a few auxiliary vectors. The Hessenberg matrix $H_m$ is $(m+1)\\times m$, adding $O(m^2)$ scalars. For $m\\le n$, this fits within the total $O(mn)$ bound; it is relatively small when $m\\ll n$. Full GMRES without restart would need $O(n^{2})$ storage, which is prohibitive for large $n$.

</details>

### Exercise 7.4
<a id="krylov-subspace-methods-ex-4"></a>

For a symmetric indefinite matrix, why is MINRES preferable to CG?

<details>
<summary>Hint 1</summary>

**Hint.** Identify where positivity enters the CG recurrence.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Residual minimization does not require an SPD energy norm.

</details>
<details>
<summary>Solution</summary>

**Solution.** MINRES minimizes the residual norm over the Krylov subspace without requiring positive definiteness. It uses a three-term recurrence based on the Lanczos process, so storage is $O(n)$ per iteration. CG has no general guarantee for an indefinite matrix: a curvature denominator can vanish or become negative, and the SPD energy-minimization theory no longer applies. CG may still converge on particular indefinite systems, so indefiniteness alone does not imply breakdown.

</details>

### Exercise 9.5 — Active eigenvalues
<a id="krylov-subspace-methods-ex-5"></a>

For $A=\\operatorname{diag}(2,2,5,7)$ and $r_0=(1,3,0,0)^T$, find the relative minimal polynomial and an exact-arithmetic termination bound.

<details>
<summary>Hint 1</summary>

**Hint.** Determine which eigenspace projections are nonzero.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Normalize the polynomial to have value1 at zero.

</details>
<details>
<summary>Solution</summary>

**Solution.** Only eigenvalue2 is active, so $m(z)=z-2$. The normalized residual polynomial is $1-z/2$, and CG terminates in one step. The Krylov space is one-dimensional, not all of $\\mathbb R^4$.

</details>

### Exercise 9.6 — An ordinary residual bound
<a id="krylov-subspace-methods-ex-6"></a>

For an SPD matrix with spectrum in $[1,9]$, state the CG Euclidean relative residual bound after $k$ steps. Give a sufficient $k$ for a bound of $10^{-4}$.

<details>
<summary>Hint 1</summary>

**Hint.** Include the square-root condition-number factor.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use $q=(3-1)/(3+1)$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The bound is $2\\sqrt9(1/2)^k=6\\cdot2^{-k}$. We need $2^k\\ge60000$, so $k=16$ suffices because $2^{15}=32768$ and $2^{16}=65536$. Exact finite termination may occur earlier in a small-dimensional problem.

</details>

### Exercise 9.7 — One CG step
<a id="krylov-subspace-methods-ex-7"></a>

For $A=\\operatorname{diag}(1,4)$, $b=(1,1)^T$, and $x_0=0$, compute $x_1,r_1$, and the squared energy errors.

<details>
<summary>Hint 1</summary>

**Hint.** The first direction is $b$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use $x_*=(1,1/4)^T$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The step length is $2/5$, so $x_1=(2/5,2/5)^T$ and $r_1=(3/5,-3/5)^T$. Initially $\\|e_0\\|_A^2=1+4/16=5/4$. Afterward $e_1=(3/5,-3/20)^T$, so $\\|e_1\\|_A^2=9/25+9/100=9/20$. The energy-error ratio is $\\sqrt{(9/20)/(5/4)}=3/5$.

</details>

### Exercise 9.8 — A normal GMRES estimate
<a id="krylov-subspace-methods-ex-8"></a>

Let $A$ be unitary diagonalizable with spectrum in $\\{1,2\\}$. Construct a residual polynomial proving exact GMRES termination in at most two steps.

<details>
<summary>Hint 1</summary>

**Hint.** Use a polynomial vanishing at both eigenvalues.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Normalize its constant term.

</details>
<details>
<summary>Solution</summary>

**Solution.** Take $p(z)=(1-z)(1-z/2)$. It has degree2, $p(0)=1$, and vanishes at both eigenvalues. Hence $p(A)=0$, and the residual minimum is zero at step2. The argument applies to the full exact-arithmetic method.

</details>

### Exercise 9.9 — A positive-part estimate
<a id="krylov-subspace-methods-ex-9"></a>

Suppose $\\operatorname{Re}(v^*Av)\\ge2\\|v\\|_2^2$ and $\\|A\\|_2\\le4$. Derive a full-GMRES residual bound.

<details>
<summary>Hint 1</summary>

**Hint.** Use $\\alpha=2$, $\\beta=4$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Substitute into the contraction factor.

</details>
<details>
<summary>Solution</summary>

**Solution.** The admissible polynomial uses $t=2/16=1/8$. The bound is $\\|r_k\\|_2\\le(1-4/16)^{k/2}\\|r_0\\|_2=(\\sqrt3/2)^k\\|r_0\\|_2$. It supplies sufficient convergence without computing individual eigenvectors.

</details>

### Exercise 9.10 — Left versus right residuals
<a id="krylov-subspace-methods-ex-10"></a>

For $A=I_2$, $M=\\operatorname{diag}(1,10^6)$ and residual $r=e_2$, compare the left-preconditioned residual norm with the original norm. What must a stopping report specify?

<details>
<summary>Hint 1</summary>

**Hint.** Apply $M^{-1}$ to the residual.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A small transformed norm need not mean the original residual is small.

</details>
<details>
<summary>Solution</summary>

**Solution.** The original norm is1, but $\\|M^{-1}r\\|_2=10^{-6}$. A stopping rule must state which residual and scaling it monitors, and should recompute the original residual when original-system accuracy is required. Right preconditioning minimizes the original residual over its transformed trial space.

</details>

<a id="looking-backward-and-forward"></a>

## Connections

This chapter analyzed Krylov methods through polynomial approximation and preconditioning. The next chapter, *Preconditioning*, turns from the solver to the preconditioner itself: how to construct it, how to balance setup cost against iteration reduction, and how to diagnose when a preconditioner is failing.

## Sources

- Yousef Saad, [Iterative Methods for Sparse Linear Systems](https://doi.org/10.1137/1.9780898718003), second edition, SIAM, 2003, chapters6–9.
- Lloyd N. Trefethen and David Bau III, [Numerical Linear Algebra](https://doi.org/10.1137/1.9780898719574), SIAM, 1997.
- Gene H. Golub and Charles F. Van Loan, [Matrix Computations](https://doi.org/10.56021/9781421407944), fourth edition, Johns Hopkins University Press, 2013.

The exposition, proofs, and worked calculations in this chapter are original to Euler; these references provide further reading and the stated specialist results.

## Summary

CG minimizes energy error for SPD systems; GMRES minimizes the Euclidean residual over a Krylov space. Active minimal polynomials prove exact termination without assuming the space fills the ambient dimension. Polynomial estimates give CG energy and residual bounds and conditional GMRES bounds. Restarting, nonnormality, preconditioning, and rounding change the applicable evidence. The next chapter constructs preconditioners with explicit spectral guarantees.
`;export{e as default};