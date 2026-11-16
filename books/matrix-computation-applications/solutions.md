
# Exercise and Project Solutions

These solutions show decisive reasoning for exercises across the chapters. They are organized by chapter and preserve the claim-status conventions used throughout the book. Where chapters contain inline solutions, these entries restate them compactly.

---

## Problem, Representation, Algorithm

**Exercise 1.1.** An implicit operator permits matrix-vector products but not entry access. Power iteration is feasible from this access alone. Conjugate gradients is feasible only if the implicit operator is also verified symmetric positive definite. Dense LU factorization and Gaussian elimination with partial pivoting are infeasible because they require entry access.

**Exercise 1.2.** For $n = 10^{4}$ and $10^{5}$ nonzeros:
- Dense LU needs $n^{2} = 10^{8}$ storage entries and $(2/3)n^{3} \approx 6.7 \times 10^{11}$ operations.
- The given $n$ and nonzero count do not determine sparse-Cholesky fill or work; graph structure and ordering do. For a regular two-dimensional mesh, nested dissection conditionally gives $O(n\log n)$ factor storage and $O(n^{3/2})$ work.
- Because the prompt states SPD, conjugate gradients is applicable and needs $O(n)$ vector storage and $O(\operatorname{nnz}(A))=O(n)$ work per iteration. Its iteration count depends on the spectrum and preconditioner.

**Exercise 1.3.** The normal equations $A^{T}Ax = A^{T}b$ with Cholesky are reasonable when $A^{T}A$ is well conditioned and $n$ is small enough that $O(n^{3})$ cost is acceptable. The risk is $\kappa_{2}(A^{T}A) = \kappa_{2}(A)^{2}$; moderate ill conditioning in $A$ is squared. QR or SVD controls backward error directly on $A$ and is safer when conditioning is uncertain.

**Exercise 1.4.** If $A(t_{k+1}) \approx A(t_{k})$, reuse the previous factorization as a preconditioner for an iterative solver, or update by low-rank corrections. If the change is slow, refactor only every few steps and use the stale factorization as a preconditioner in between.

---

## Conditioning and Stability

**Exercise 2.1.** For $A = \operatorname{diag}(1, 10^{-6}, 10^{3})$, the singular values are $10^{3}$, $1$, $10^{-6}$, so $\kappa_{2}(A)=10^9$. The formal first-order scale in single precision is $\kappa_2(A)\varepsilon_{\text{mach}}=10^2$, outside the certified small-perturbation regime. In double precision the scale is $10^{-7}$, suggesting about $7$ decimal digits only for backward errors of order $\varepsilon_{\text{mach}}$ with modest constants and sufficiently accurate data. With measured relative errors $\epsilon_A,\epsilon_b$, use the finite bound $\kappa(A)(\epsilon_A+\epsilon_b)/(1-\kappa(A)\epsilon_A)$ only when $\kappa(A)\epsilon_A<1$.

**Exercise 2.2.** The singular values of $A^{T}A$ are $\sigma_{i}(A)^{2}$. Hence
$$
\kappa_{2}(A^{T}A) = \frac{\sigma_{\max}(A)^{2}}{\sigma_{\min}(A)^{2}} = \kappa_{2}(A)^{2}.
$$
This is why the normal equations square the condition number.

**Exercise 2.3.** With $\lVert r \rVert_{2} = 10^{-10}$, $\lVert A \rVert_{2} = 10^{3}$, $\lVert \widehat{x} \rVert_{2} = 1$, and $\lVert b \rVert_{2} = 10^{3}$,
$$
\eta = \frac{10^{-10}}{10^{3} \cdot 1 + 10^{3}} = 5 \times 10^{-14}.
$$
With $\varepsilon_{\text{mach}}=2^{-53}$ as binary64 unit roundoff, this is about $450\,\varepsilon_{\text{mach}}$. It is a small scaled backward error, but does not by itself prove algorithmic backward stability and does not diagnose $\kappa(A)$; both require separate analysis.

**Exercise 2.4.** Take $A = \operatorname{diag}(10^{6}, 10^{-6})$. Then $\det(A) = 1$ but $\kappa_{2}(A) = 10^{12}$. Determinant magnitude is unrelated to conditioning.

---

## Floating-Point and Factorization

**Exercise 3.1.** For
$$
A = \begin{pmatrix} 4 & 2 & 4 \\ 2 & 5 & 6 \\ 4 & 6 & 14 \end{pmatrix},
$$
$l_{11} = 2$, $l_{21} = 1$, $l_{31} = 2$, $l_{22} = 2$, $l_{32} = 2$, $l_{33} = \sqrt{6}$. Thus
$$
L = \begin{pmatrix} 2 & 0 & 0 \\ 1 & 2 & 0 \\ 2 & 2 & \sqrt{6} \end{pmatrix}.
$$

**Exercise 3.2.** Without pivoting, the pivot is $\varepsilon$, the multiplier is $1/\varepsilon$, and the updated entry is $1 - 1/\varepsilon \approx -1/\varepsilon$, so the growth factor is $\approx 1/\varepsilon$. With partial pivoting, the pivot becomes $1$, the multiplier is $\varepsilon$, and the updated entry is $1 - \varepsilon$, so the growth factor is $O(1)$.

**Exercise 3.3.** No. A negative eigenvalue means the matrix is indefinite, not positive definite. Cholesky would encounter a negative radicand and fail. Use a pivoted $LDL^{T}$ factorization instead.

**Exercise 3.4.** Factorization costs $(2/3)n^{3} + O(n^{2})$. Each forward and backward substitution costs $2n^{2}$. For $k$ right-hand sides the total is $(2/3)n^{3} + 2kn^{2} + O(n^{2})$. For large $k$, the factorization cost is amortized.

---

## QR, Least Squares, and SVD

**Exercise 4.1.** For $A = \begin{pmatrix} 3 & 0 \\ 0 & 1 \\ 0 & 0 \end{pmatrix}$, the singular values are $3$ and $1$. The best rank-$1$ approximation is $A_{1} = 3\,u_{1}v_{1}^{T} = \begin{pmatrix} 3 & 0 \\ 0 & 0 \\ 0 & 0 \end{pmatrix}$. The error is $\sigma_{2} = 1$ in both the 2-norm and the Frobenius norm.

**Exercise 4.2.** From $A = QR$, the normal equations give $R^{T}Q^{T}QRx = R^{T}Q^{T}b$. Since $Q^{T}Q = I$ and $R$ is invertible, this reduces to $Rx = Q^{T}b$, which is exactly the QR least-squares condition.

**Exercise 4.3.** $\kappa_{2}(A^{T}A)=\kappa_{2}(A)^2\approx10^8$. The double-precision scale $10^{-8}$ is a first-order sensitivity estimate, suggesting about $8$ decimal digits only for sufficiently accurate data and backward errors of order $\varepsilon_{\text{mach}}\approx10^{-16}$ with modest constants. Forming $A^TA$ and $A^Tb$, dimension, scaling, and the least-squares residual also affect accuracy; this is not an unconditional guarantee. QR or SVD is safer.

**Exercise 4.4.** For $r>0$, the nonzero singular values of the pseudoinverse are $1/\sigma_1,\dots,1/\sigma_r$, so $\lVert A^+\rVert_2=1/\sigma_r$. For $A=0$, $A^+=0$ and its norm is $0$; no $\sigma_r$ exists to invert.

---

## Eigenvalue Computations

**Exercise 5.1.** For $A = \operatorname{diag}(5, -5, 1)$, the dominant eigenvalues have equal magnitude $5$. The iteration alternates between components in the first and second eigenvectors and does not settle on a single eigenline.

**Exercise 5.2.** For $A = \begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}$, a right eigenvector for $\lambda = 3$ is $v = (1, 0)^{T}$ and a left eigenvector is $y = (1, 1)^{T}$. After normalization, $|y^{*}x| = 1/\sqrt{2}$, so the condition number is $\sqrt{2} \approx 1.41$.

**Exercise 5.3.** Assume $A$ is symmetric, $\lambda_i$ is simple, and the normalized iterate lies sufficiently near $v_i$. Writing $x=\cos\theta\,v_i+\sin\theta\,w$ gives $\rho(x)-\lambda_i=O(\sin^2\theta)$. In the eigenbasis, shifted inverse iteration multiplies each unwanted-to-target component ratio by $(\lambda_i-\rho)/(\lambda_j-\rho)$; the local spectral gap bounds the denominator. Hence the next angle is $O(\sin^3\theta)$ when shifted solves are accurate.

**Exercise 5.4.** Reduce to upper Hessenberg form ($O(n^{3})$), then apply the implicitly shifted QR algorithm (also $O(n^{3})$ overall under the standard convergence model). The rough scale at $n=500$ is hundreds of millions of floating-point operations; wall time depends on hardware, library, convergence, and whether eigenvectors are requested.

---

## Sparse and Iterative Methods

**Exercise 6.1.** With eigenvalues $1,2,\dots,100$, $\kappa=100$ and $q=9/11$. The bound requires $2q^k\le10^{-6}$; $k=72$ fails while $k=73$ succeeds. Thus 73 iterations give the stated worst-case guarantee, though actual convergence may be faster.

**Exercise 6.2.** For symmetric $A$, the Hessenberg matrix $H_{k} = Q_{k}^{T}AQ_{k}$ is symmetric and upper Hessenberg, hence tridiagonal. The three-term recurrence of Lanczos follows, reducing storage and operation costs.

**Exercise 6.3.** Assuming one such matrix-vector product per iteration, the quoted work is $200 \times 10^{6} = 2 \times 10^{8}$ operations. Dense LU factorization costs $(2/3)n^{3} \approx 6.7 \times 10^{11}$ operations. The quoted LU count is roughly $3000$ times the quoted matrix-vector count. This excludes iterative vector/reduction/preconditioner work and LU triangular solves; a wall-clock speedup needs measured costs and comparable verified accuracy.

**Exercise 6.4.** Binary64 unit roundoff is about $1.11\times10^{-16}$. Rounding can create a gap between recursive and true residuals at a scale involving $\varepsilon_{\text{mach}}\lVert A\rVert\lVert x_k\rVert$ and accumulated operations. Attainability depends on scaling, conditioning, sparsity, data, and residual replacement; simple systems can reach exact zero. A target near unit roundoff therefore needs a measured true residual and problem-specific error budget.

---

## Krylov Subspace Methods
**Exercise 7.1.** Exact-arithmetic CG has $r_k\perp\mathcal K_k$ and 
$$\operatorname{span}\{p_0,\ldots,p_{k-1}\}=\mathcal K_k.$$
Since $Ap_j=(r_j-r_{j+1})/\alpha_j$, residual orthogonality gives $p_j^TAr_k=0$ for $j<k-1$. In $p_k=r_k+\beta_kp_{k-1}$, $\beta_k=r_k^Tr_k/(r_{k-1}^Tr_{k-1})$ cancels the remaining $p_{k-1}^TAp_k$ term. Induction gives $p_i^TAp_j=0$ for $i\ne j$.

**Exercise 7.2.** For the symmetrically preconditioned SPD problem, $\kappa=2$ and $q=(\sqrt2-1)/(\sqrt2+1)\approx0.1716$. The standard energy-norm theorem requires $2q^k\le10^{-8}$, first satisfied at $k=11$. A relative-residual conclusion would need additional norm and condition-number factors.

**Exercise 7.3.** GMRES($m$) keeps only $m$ orthonormal basis vectors of length $n$, plus a few auxiliary vectors. The Hessenberg matrix $H_{m}$ is $(m+1) \times m$, negligible in size. Thus storage is $O(mn)$. Full GMRES without restart would need $O(n^{2})$ storage.

**Exercise 7.4.** MINRES minimizes the residual norm over the Krylov subspace without requiring positive definiteness. It uses a three-term recurrence based on the Lanczos process, so storage is $O(n)$ per iteration. CG has no general guarantee for an indefinite matrix: a curvature denominator can vanish or become negative, and the SPD energy-minimization theory no longer applies. CG may still converge on particular indefinite systems, so indefiniteness alone does not imply breakdown.

---
## Preconditioning

**Exercise 8.1.** For $A = \operatorname{diag}(2, 3, 4)$, $D^{-1}A = I$, so all eigenvalues are $1$. Exact LU gives $M^{-1}A = I$ as well. General ILU(0) has no universal clustering or convergence guarantee; dropped-fill and pivot behavior must be checked. The nonsingular matrix $\begin{pmatrix}0&1\\1&1\end{pmatrix}$ has determinant $-1$ but a zero first pivot for no-pivot ILU(0).

**Exercise 8.2.** Symmetric Gauss--Seidel applies a forward sweep with $M_{1} = D + L$ and a backward sweep with $M_{2} = D + L^{T}$. The combined preconditioner $M = M_{1}D^{-1}M_{2}$ is symmetric positive definite when $A$ is SPD, so $M^{-1}A$ is self-adjoint in the $M$-inner product and CG remains valid.

**Exercise 8.3.** Let one multigrid cycle cost $c$ matrix-vector-product equivalents. The preconditioned cost is $50+20(1+c)$, so the idealized speedup is $1000/[50+20(1+c)]$. Because $c$ and communication costs are not given, no numerical speedup or yes/no decision follows. Reusing setup across right-hand sides can improve the comparison.

**Exercise 8.4.** Two remedies: (1) shift $A+\alpha I$ and increase $\alpha$ until the chosen incomplete-factorization scheme has acceptably positive pivots—an arbitrary small shift is not a guarantee; (2) use a documented pivot-modification rule that replaces a nonpositive pivot and records the perturbation.

---

## Eigenvalue Iterations

**Exercise 9.1.** Eigenvalues alone do not determine the count. Starting at the top eigenvector gives the largest Ritz value exactly after one step, while a start orthogonal to that eigenspace never recovers it in exact arithmetic. A quantitative count must specify starting overlap, target error or residual, and finite-precision stopping rule.

**Exercise 9.2.** If $Av = \lambda v$, then $(A - \sigma I)v = (\lambda - \sigma)v$, so $(A - \sigma I)^{-1}v = (\lambda - \sigma)^{-1}v$. The eigenvectors are unchanged and the eigenvalues are transformed as claimed.

**Exercise 9.3.** The Arnoldi basis stores $m$ vectors of length $n$, requiring $30 \times 10^{5} \times 8$ bytes $\approx 24$ MB in double precision. The Hessenberg matrix is negligible. This is easily manageable, whereas storing the full matrix may require gigabytes.

**Exercise 9.4.** Full reorthogonalization costs $O(jn)$ at step $j$ and $O(k^2n)$ through step $k$, in addition to $k$ applications of $A$. It may dominate for cheap sparse or matrix-free products; dense unstructured products cost $O(kn^2)$ and can dominate while $k\ll n$.

---

## Pseudospectra

**Exercise 10.1.** For normal $A$, the Schur decomposition gives $A = U\Lambda U^{*}$. Then $(zI - A)^{-1} = U(zI - \Lambda)^{-1}U^{*}$, so $\lVert (zI - A)^{-1} \rVert_{2} = \max_{i} |z - \lambda_{i}|^{-1}$. The condition $\lVert (zI - A)^{-1} \rVert_{2} \ge \varepsilon^{-1}$ becomes $\min_{i} |z - \lambda_{i}| \le \varepsilon$, which is exactly the union of disks.

**Exercise 10.2.** At $z = 0$, $zI - A = \begin{pmatrix} 0 & -1 \\ 0 & 0 \end{pmatrix}$. The singular values are $1$ and $0$, so $\sigma_{\min} = 0$. At $z = 1$, $zI - A = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$. The eigenvalues of $(zI - A)^{T}(zI - A)$ are $(3 \pm \sqrt{5})/2$, so $\sigma_{\min} = \sqrt{(3 - \sqrt{5})/2} \approx 0.618$.

**Exercise 10.3.** The nominal system is asymptotically stable but is not robust at the $10^{-3}$ scale: a perturbation of that norm can put an eigenvalue in the closed right half-plane. The large resolvent flags a possible transient mechanism; a claim about actual transient growth requires a separate bound or computation of $\lVert e^{At}\rVert$.

**Exercise 10.4.** Each full grid SVD costs $O(n^3)$. Arnoldi projection costs $k$ matrix-vector products plus $O(k^2n)$ orthogonalization; dense matvecs specialize to $O(kn^2)$. The projected grid then costs $O(gk^3)$. Approximation quality depends on the subspace and target region.

---

## Tensor Decompositions

**Exercise 11.1.** The $2 \times 2 \times 2$ all-ones tensor is $\mathbf{1} \circ \mathbf{1} \circ \mathbf{1}$, so its CP rank is $1$.

**Exercise 11.2.** Let $u=e_1$, $v=e_2$, and $\mathcal A_\varepsilon=[(u+\varepsilon v)^{\circ3}-u^{\circ3}]/\varepsilon$. Each term is a difference of two rank-one tensors, so its rank is at most 2. The limit is $\mathcal A_0=v\circ u\circ u+u\circ v\circ u+u\circ u\circ v$. Its slice span is generated by $S_0=\left(\begin{smallmatrix}0&1\\1&0\end{smallmatrix}\right)$ and $S_1=\left(\begin{smallmatrix}1&0\\0&0\end{smallmatrix}\right)$, with $\det(aS_0+bS_1)=-a^2$. Hence the pencil has only one rank-one direction, while a rank-2 tensor of first-mode rank 2 would require two independent ones. Thus $\operatorname{rank}(\mathcal A_0)=3$ and the rank-at-most-2 set is not closed.

**Exercise 11.3.** The core tensor has $10^{3} = 1000$ entries. Each factor matrix has $100 \times 10 = 1000$ entries, and there are three factors, giving $3000$ entries. The total is $4000$ parameters, compared to $10^{6}$ for the original tensor: a compression ratio of $250$.

**Exercise 11.4.** The CP objective is nonconvex in all factors simultaneously. ALS solves convex subproblems but cycles through them, so it can converge to local minima or saddle points. Poor initialization can lead to suboptimal fits, slow convergence, or numerical breakdown.

---

## Randomized Numerical Linear Algebra

**Exercise 12.1.** Dense SVD has order $O(n^3)$, at a scale of $10^{15}$ before constants. A two-pass randomized method forms both $A\Omega$ and $Q^TA$, each at scale $mn\ell=6\times10^{11}$ for sample width $\ell=60$, plus orthogonalization and a small SVD. This compares $O(mn\ell)$ with $O(n^3)$; an exact speedup needs a benchmark and cannot be inferred from big-O terms.

**Exercise 12.2.** Power iteration replaces $A$ by $(AA^{T})^{q}A$, whose singular values are $\sigma_{i}^{2q+1}$. The relative gap between consecutive singular values grows as $(\sigma_{i}/\sigma_{i+1})^{2q}$, making the dominant subspace easier to capture with a small sample matrix.

**Exercise 12.3.** For a suitably normalized Gaussian sketch, a standard fixed-subspace bound has $s=O((d+\log(1/\delta))/\varepsilon^2)$ rows. The numerical constant depends on the exact embedding definition and tail bound.

**Exercise 12.4.** A Gaussian test matrix has full-rank overlap with a fixed $k$-subspace almost surely. Oversampling improves the conditioning of that restriction and the approximation-error tails. The precise bad-event probability as a function of $p$ depends on the theorem and threshold, so “failure to capture” and a universal exponential rate are too coarse.

---

## Matrix Functions

**Exercise 13.1.** For $A = \operatorname{diag}(1, 2, 3)$, 
$$e^{A} = \operatorname{diag}(e^{1}, e^{2}, e^{3}) \approx \operatorname{diag}(2.718, 7.389, 20.086).$$
**Exercise 13.2.** Since $A$ and $-A$ commute, $e^{A}e^{-A} = e^{A - A} = e^{0} = I$. Thus $e^{-A}$ is the inverse of $e^{A}$.

**Exercise 13.3.** The spectral abscissa is $-1$, but eigenvalues alone do not determine the norm. For normal $A$, $\lVert e^{At}\rVert_2=e^{-t}$; for diagonalizable $A=V\Lambda V^{-1}$ it is at most $\kappa_2(V)e^{-t}$; and defective Jordan blocks can add polynomial factors such as $t e^{-t}$. Only the asymptotic exponential rate follows generally.

**Exercise 13.4.** Fixed-degree exact Padé truncation is independent of unit roundoff $u$. For the scalar $r_1(x)=(1+x/2)/(1-x/2)$ with $|x|<2$, $\log r_1(x)-x=x^3/12+x^5/80+\cdots$. At $x=1/2$, $r_1(x)=5/3$ and $\log(5/3)-1/2>1/96$, even in exact arithmetic; this defect is not $O(u)$ as $u\to0$. For an induced norm with $x=\lVert X\rVert<2$, the same series gives $\lVert E_1(X)\rVert/\lVert X\rVert\le x^2/[12(1-x^2/4)]$ when $X\ne0$. For example, the analytic relative target $\tau=10^{-3}$ is met at $x=1/16$, since this upper bound is below $\tau$. For general degree, use its validated bound to select $m,s$ so that $\lVert E_m(X)\rVert\le\tau\lVert X\rVert$ for $X=2^{-s}A$ on the stated logarithm branch. Exact squaring then gives $\exp(A+2^sE_m(X))$ and an analytic backward bound $\tau\lVert A\rVert$. A floating-point implementation additionally needs controlled rational evaluation, solves and squaring; choosing a sufficiently small analytic defect does not itself prove an $O(u)$ rounding bound.

**Exercise 13.5.** **(a)** Choose an induced matrix norm, so $\|I\|=1$ and $\|XY\|\le\|X\|\|Y\|$. Finite dimension makes convergence independent of this choice of norm. Put $a=|t|\|A\|$ and $b=|t|\|B\|$. The product series satisfies

$$
\begin{aligned}
\sum_{j,k\ge0}\left\|\frac{t^{j+k}A^jB^k}{j!\,k!}\right\|
&\le\sum_{j,k\ge0}\frac{a^j b^k}{j!\,k!}\\
&=e^ae^b<\infty.
\end{aligned}
$$

Thus multiplying the exponential series and grouping by $j+k=n$ is justified by absolute convergence. If $AB=BA$, the binomial theorem gives

$$
\begin{aligned}
R(t)&=\sum_{n=0}^{\infty}\frac{t^n}{n!}
       \sum_{j=0}^n\binom nj A^jB^{n-j}\\
&=\sum_{n=0}^{\infty}\frac{t^n(A+B)^n}{n!}=L(t).
\end{aligned}
$$

This proves the product law for every real $t$.

For the converse, the tail after degree two for any fixed finite matrix $M$ obeys

$$
\left\|\sum_{j=3}^{\infty}\frac{t^jM^j}{j!}\right\|
\le\frac{|t|^3\|M\|^3}{6}e^{|t|\|M\|}.
$$

Indeed $(r+3)!\ge6r!$, so the absolute tail is bounded by the displayed scalar exponential. In particular, each tail is $O(t^3)$ in norm near zero. Multiplying the expansions, whose factors stay bounded there, yields

$$
\begin{aligned}
L(t)&=I+t(A+B)+\tfrac{t^2}{2}(A+B)^2+O(t^3),\\
R(t)&=I+t(A+B)\\
&\quad+t^2\bigl(\tfrac12A^2+AB+\tfrac12B^2\bigr)+O(t^3).
\end{aligned}
$$

Here $O(t^3)$ means a matrix remainder with norm at most $C|t|^3$ near zero, for a constant depending on the fixed matrices. Subtracting gives

$$
D(t)=\frac{t^2}{2}(BA-AB)+O(t^3).
$$

If $D(t)=0$ whenever $|t|<\varepsilon$, divide by $t^2$ for nonzero $t$ and let $t\to0$. The remainder tends to zero after division, so $BA-AB=0$. A single time, or common integer times without nonzero times approaching zero, supplies no such limiting argument.

**(b)** Direct multiplication gives $P^2=P$, $Q^2=Q$, $PQ=Q$, and $QP=P$. Hence

$$
S^2=\frac{P^2+PQ+QP+Q^2}{4}=\frac{P+Q}{2}=S.
$$

These are idempotents; $Q$ and $S$ are not Hermitian, so they are not orthogonal projectors for the standard inner product. Write

$$
E_{12}=Q-P=\begin{pmatrix}0&1\\0&0\end{pmatrix}.
$$

Then

$$
[A,B]=(2\pi i)^2(PQ-QP)=-4\pi^2E_{12}\ne0.
$$

For any idempotent $H$ and complex scalar $c$, $H^m=H$ for every $m\ge1$. Its absolutely convergent exponential series therefore gives

$$
e^{cH}=I+\left(\sum_{m=1}^{\infty}\frac{c^m}{m!}\right)H
=I+(e^c-1)H.
$$

Since $A+B=4\pi iS$ and $z=e^{2\pi it}$, applying this formula and multiplying the two factors yields

$$
\begin{aligned}
L(t)&=\begin{pmatrix}z^2&\frac{z^2-1}{2}\\0&1\end{pmatrix},\\
R(t)&=\begin{pmatrix}z^2&z(z-1)\\0&1\end{pmatrix}.
\end{aligned}
$$

Thus the left-minus-right defect is

$$
D(t)=-\frac{(z-1)^2}{2}E_{12}.
$$

It vanishes exactly when $z=1$. For real $t$, $e^{2\pi it}=1$ exactly when $t\in\mathbb Z$. Thus these noncommuting matrices agree at every common integer time and at no other real time. At $t=1$ both sides are $I$; at $t=1/2$, $z=-1$ gives

$$
L(1/2)=I,\qquad
R(1/2)=\begin{pmatrix}1&2\\0&1\end{pmatrix}.
$$

Their defect there is $-2E_{12}$. Integer-time agreement is therefore insufficient for the neighborhood hypothesis in (a).

**(c)** Common integer times use the same coefficient on both matrices. Two independent integers allow different coefficients. At $(k,\ell)=(1,-1)$,

$$
A-B=2\pi i(P-Q)=-2\pi iE_{12},\qquad E_{12}^2=0.
$$

Consequently

$$
\begin{aligned}
e^{A-B}&=I-2\pi iE_{12},\\
e^Ae^{-B}&=I.
\end{aligned}
$$

The second equality follows from the idempotent formula and $e^{2\pi i}=e^{-2\pi i}=1$. Thus this pair fails the independent-integer hypothesis. [De Seguins Pazzis, §1.2 and Theorem 1](https://arxiv.org/pdf/1012.4420) uses every $(k,\ell)\in\mathbb Z^2$, a strictly stronger requirement than common integer times.

For a real-matrix version, define the block map

$$
\mathcal R(X)=\begin{pmatrix}\operatorname{Re}X&-\operatorname{Im}X\\
\operatorname{Im}X&\operatorname{Re}X\end{pmatrix}.
$$

Direct block multiplication shows that $\mathcal R$ is injective, real-linear, multiplicative, and sends $I_2$ to $I_4$. Its continuity lets us apply it to the exponential partial sums and take limits:

$$
e^{t\mathcal R(X)}=\mathcal R(e^{tX})\qquad(t\in\mathbb R).
$$

Hence the real $4\times4$ pair $\mathcal R(A),\mathcal R(B)$ has the same exact equality times and half-time failure; its commutator is the nonzero matrix $\mathcal R([A,B])$. This map is being used as a real-linear construction.

**(d)** Here $U^2=V^2=0$ and $(U+V)^2=I$. Thus $e^{tU}=I+tU$ and $e^{tV}=I+tV$, while even and odd powers of $U+V$ give

$$
\begin{aligned}
e^{tU}e^{tV}&=\begin{pmatrix}1+t^2&t\\t&1\end{pmatrix},\\
e^{t(U+V)}&=\begin{pmatrix}\cosh t&\sinh t\\\sinh t&\cosh t\end{pmatrix}.
\end{aligned}
$$

Equality forces $\cosh t=1$ from the bottom-right entry. For real $t$,

$$
\cosh t=1+\sum_{j=1}^{\infty}\frac{t^{2j}}{(2j)!}
\ge1+\frac{t^2}{2}.
$$

It equals 1 only at $t=0$, when both exponentials are $I$. The periodic scalar $e^{2\pi it}$ in (b) returns to 1 at every integer; this real hyperbolic cosine has no nonzero real return to 1. The changed pair therefore agrees exactly at zero.

**Exercise 13.6.** **(a)** Put $Z=CE$. Since $\|Z\|_2\le q<1$, the series
$T=\sum_{j=0}^{\infty}(-Z)^j$ converges in norm: its tail after $m$ has norm at most $q^{m+1}/(1-q)$. Finite dimension supplies completeness. The finite left and right products with $I+Z$ both equal $I-(-Z)^{m+1}$, which tends to $I$. Thus $T=(I+Z)^{-1}$ and $\|T\|_2\le(1-q)^{-1}$. The ordered factorization $A+E=A(I+CE)$ now gives

$$
B=(A+E)^{-1}=TC,\qquad
\|B\|_2\le\frac{c}{1-q}.
$$

From $B+CEB=C$, substitute $B=C-CEB$ once to obtain

$$
\begin{aligned}
B&=C-CEC+R(E),\\
R(E)&=CECEB,\\
\|R(E)\|_2&\le\frac{c^3e^2}{1-q}.
\end{aligned}
$$

For fixed $A$, the map $E\mapsto-CEC$ is linear over $\mathbb F$ and bounded by $c^2\|E\|_2$. If $q\le1/2$, the remainder is at most $2c^3e^2$. Dividing by $e>0$ gives a bound $2c^3e\to0$ for arbitrary $E\to0$, independent of its direction. Therefore

$$
L_{\mathrm{inv}}(A)[E]=-A^{-1}EA^{-1}.
$$

A derivative along one fixed path would not establish this all-perturbation remainder.

**(b)** Here $C_0=\operatorname{diag}(1,1/2)$, so

$$
-C_0HC_0=-\tfrac12H,\qquad
-C_0^2H=-H,\qquad
-HC_0^2=-\tfrac14H.
$$

Direct multiplication verifies, for every real or complex $t$,

$$
(A_0+tH)^{-1}
=\begin{pmatrix}1&-t/2\\0&1/2\end{pmatrix}
=C_0-\tfrac t2H.
$$

Its determinant before inversion is always $2$. This path has zero remainder, but inversion is not a linear map on a neighborhood of $A_0$. For example, a diagonal perturbation changes an inverse diagonal entry reciprocally. A particularly simple direction cannot replace part (a).

**(c)** Submultiplicativity gives $\|L_{\mathrm{inv}}(A)\|\le c^2$. To prove equality, choose unit singular vectors satisfying $Cv=cu$ and $C^{*}u=cv$, where $^{*}$ denotes conjugate transpose, or ordinary transpose over $\mathbb R$. For $E_\star=vu^{*}$,

$$
\|E_\star\|_2=1,\qquad
CE_\star C=(Cv)(u^{*}C)=c^2uv^{*}.
$$

The last rank-one matrix has norm $c^2$, so the derivative's operator norm is exactly $c^2$. The condition-estimation definition earlier in this chapter gives

$$
\operatorname{cond}_{\mathrm{abs}}(\mathrm{inv},A)=c^2,\qquad
\operatorname{cond}_{\mathrm{rel}}(\mathrm{inv},A)
=\frac{c^2\|A\|_2}{c}=\kappa_2(A).
$$

For $A_\delta$, $\|A_\delta\|_2=1$ and $c=1/\delta$. The absolute and relative numbers are therefore $\delta^{-2}$ and $\delta^{-1}$. Every $\|E\|_2<\delta$ is certified admissible, and $\|E\|_2\le\delta/2$ permits the uniform half-radius remainder bound. At the boundary, $E=-\delta E_{22}$ makes $A_\delta+E$ singular.

A finite bound needs its domain condition. With $\Delta=B-C=-CEB$ and $\epsilon=e/\|A\|_2$, we have $q=\kappa_2(A)\epsilon$, and

$$
\frac{\|(A+E)^{-1}-A^{-1}\|_2}{\|A^{-1}\|_2}
\le\frac{q}{1-q}
=\frac{\kappa_2(A)\epsilon}{1-\kappa_2(A)\epsilon},
\qquad \kappa_2(A)\epsilon<1.
$$

The local condition number alone does not supply this finite guarantee. At $A_0$, the absolute condition number is $1$ and the relative number is $2$. The unit perturbation $H$ samples only $\|L_{\mathrm{inv}}(A_0)[H]\|_2=1/2$, while $E_{11}$ attains $1$. This illustrates the existing distinction between a sampled direction and an operator norm.

**(d)** Write $B=C+\Delta$ and use $\Delta=-CEC+R$ from part (a). Expanding without reordering factors gives

$$
\begin{aligned}
B^2-C^2&=C\Delta+\Delta C+\Delta^2,\\
L_G(A)[E]&=-C^2EC-CEC^2,\\
R_G(E)&=CR+RC+\Delta^2.
\end{aligned}
$$

The proposed $L_G(A)$ is linear in arbitrary $E$. Since
$\|\Delta\|_2\le c^2e/(1-q)$, the remainder satisfies

$$
\begin{aligned}
\|R_G(E)\|_2
&\le c^4e^2\left(\frac2{1-q}+\frac1{(1-q)^2}\right)\\
&\le8c^4e^2\qquad(q\le1/2).
\end{aligned}
$$

Dividing by $e>0$ proves the full Fréchet remainder as arbitrary $E\to0$, not just a directional formula.

For the changed perturbation, $\det(A_0+tK)=2-t^2$. Multiplying its inverse numerator by itself yields

$$
\begin{aligned}
(A_0+tK)^{-1}
&=\frac1{2-t^2}\begin{pmatrix}2&-t\\-t&1\end{pmatrix},\\
G(A_0+tK)
&=\frac1{(2-t^2)^2}
  \begin{pmatrix}4+t^2&-3t\\-3t&1+t^2\end{pmatrix}.
\end{aligned}
$$

These formulas hold exactly when $t^2\ne2$. At zero,
$G(A_0)=\operatorname{diag}(1,1/4)$ and the linear term is $-3tK/4$, agreeing with $-C_0^2KC_0-C_0KC_0^2$. In contrast,

$$
-2A_0^{-3}K=\begin{pmatrix}0&-2\\-1/4&0\end{pmatrix}
$$

is wrong. The two diagonal remainder entries have respective quadratic coefficients $5/4$ and $1/2$, so this changed path does not inherit the zero-remainder shortcut in (b). Its exact real nonsingular domain excludes only $t=\pm\sqrt2$. Because $\|K\|_2=c=1$, the general certificate supplies the sufficient interval $|t|<1$; it does not claim this is the maximal domain. On $|t|\le1/2$, the arbitrary-perturbation theorem gives $\|R_G(tK)\|_2\le8t^2$.

The inversion derivative and its conditioning are classical; see [Higham and Relton, §5.2, equation (5.11)](https://eprints.maths.manchester.ac.uk/2160/01/130945259.pdf). [Higham's Fréchet-derivative exposition](https://nhigham.com/2020/06/23/what-is-a-frechet-derivative/) explains the all-perturbation requirement and ordered product rule. The finite certificates above establish the exercise's error bounds directly.

---

## Structured Matrices

**Exercise 14.1.** The tridiagonal matrix with diagonal $2$ and off-diagonals $-1$ is the 1D Laplacian. Its eigenvalues are positive, so it is SPD. Cholesky of a tridiagonal matrix produces a bidiagonal $L$. Each column requires one division and one multiplication, so the total cost is $O(n)$ operations.

**Exercise 14.2.** The cyclic shift matrix $Z$ satisfies $Z^{k}e_{j} = e_{j+k \bmod n}$. For $(v_m)_j=\omega^{jm}$, indices are read modulo $n$ and $(Zv_m)_j=(v_m)_{j-1}=\omega^{-m}(v_m)_j$, so the eigenvalue is $\omega^{-m}$. For $n=4$, $m=1$ and $\omega=-i$, $v_1=(1,-i,-1,i)$ gives $Zv_1=(i,1,-i,-1)=iv_1$, not $-iv_1$. Every circulant is a polynomial in $Z$ and shares this eigenbasis; with the first-column/DFT convention above, $Cv_m=\lambda_{-m\bmod n}v_m$. This corrects the mode label without changing the surrounding Fourier convention.

**Exercise 14.3.** The circulant extension gives $O(n\log n)$ Toeplitz matrix-vector products. An iterative method taking $k$ steps costs $O(kn\log n)$ plus setup and vector work. Total $O(n\log n)$ needs a stated argument that $k=O(1)$, typically through an effective preconditioner.

**Exercise 14.4.** For a Toeplitz matrix $T$, the displacement $\nabla(T) = Z_{1}T - TZ_{0}$ has rank at most $2$. The low rank reflects the fact that $T$ is determined by only two vectors (the first row and first column).

---

## Advanced Factorizations and Block Algorithms

**Exercise 16.1.** There are $n/b$ block columns. Each step factors one $b \times b$ diagonal block, so the total number of small factorizations is $n/b$.

**Exercise 16.2.** The trailing submatrix is updated by subtracting $L_{21}L_{21}^{T}$, a symmetric positive semidefinite matrix. Since $A$ is SPD, the Schur complement remains SPD, ensuring that all subsequent diagonal blocks have positive pivots.

**Exercise 16.3.** A comparison needs matrix size, block size, processor-grid shape, local memory, pivoting scheme, and a declared latency/bandwidth model; $P$ alone is insufficient. CA-LU reorganizes panels and reductions to approach communication lower bounds for that declared model, sometimes trading extra arithmetic or storage for fewer synchronizations.

**Exercise 16.4.** With $m=n/2$, the triangular block solve and symmetric update contribute $2m^3+O(n^2)$, so $T(n)=2T(n/2)+2(n/2)^3+O(n^2)$. Writing $T(n)\sim cn^3$ gives $c=c/4+1/4$, hence $T(n)=(1/3)n^3+O(n^2)$.

---

## Mixed-Precision and Verified Computing

**Exercise 17.1.** The value $10^5\varepsilon_{\text{single}}\ll1$ is compatible with the usual contraction condition, but it is not sufficient alone. Full double-precision accuracy additionally needs suitable scaling, a stable low-precision factorization without excessive pivot growth, accurate correction solves, and double-precision residuals and updates; verify the final scaled backward error.

**Exercise 17.2.** The set of endpoint products of $[1, 2]$ and $[-1, 3]$ is $\{-1, 3, -2, 6\}$, so the interval product is $[-2, 6]$.

**Exercise 17.3.** The exact range of $x-x$ for $x\in[0,1]$ is $[0,0]$, while direct interval subtraction gives $[-1,1]$. Recognizing the repeated variable and rewriting $x-x=x(1-1)$ gives $[0,1]\cdot[0,0]=[0,0]$; centered forms systematize this dependency reduction.

**Exercise 17.4.** If $0.9$ is a rigorous outward-rounded upper bound for $\lVert[I-RA]\rVert_\infty$, the Neumann series proves $A$ invertible. A solution enclosure then requires outward-rounded evaluation of $\widehat x+[I-[C]]^{-1}R[r]$; the norm check alone does not specify its width.

---

## Synthesis and Open Directions

**Exercise 18.1.** If dense storage fits, reused dense Cholesky is a reasonable baseline: about $3.3\times10^{11}$ factorization operations plus about $2\times10^{11}$ for all triangular-solve pairs. Blocked multiple-right-hand-side solves improve reuse. CG can still be preferable depending on memory, conditioning, preconditioning, and accuracy, so it is not categorically inferior.

**Exercise 18.2.** The data are insufficient. CG requires SPD; $\kappa(A)u$ concerns forward-error sensitivity, not attainable residual; and the unpreconditioned condition number does not determine the Jacobi-preconditioned spectrum. Check SPD, scaling, preconditioned convergence, and the true residual before deciding.

**Exercise 18.3.** Not in general from the stated $A$-only oracle. Random probes supply lower bounds $\lVert Av\rVert/\lVert v\rVert$. Power iteration on $A^TA$ additionally needs an $A^T$ oracle; if $A$ is known Hermitian, two $A$ applications provide $A^2v$. The access model must state the available case.

**Exercise 18.4.** The wide enclosure reflects the interval dependency problem or a loose approximate inverse $R$. The small residual of $\widehat{x}$ does not guarantee a tight enclosure; the verification step depends on the quality of $R$ and the conditioning of $A$. Tightening the enclosure requires a better $R$ or a splitting method.

---

## Project: Scale to Large Data

**Exercise 15.1.** CSR needs $nnz$ values ($8 \times 10^{8}$ bytes), $nnz$ column indices ($4 \times 10^{8}$ bytes), and $n+1$ row pointers ($4 \times 10^{7}$ bytes), totaling about $1.2$ GB. Dense storage needs $8 \times 10^{14}$ bytes ($800$ TB), impossible.

**Exercise 15.2.** The fill makes this factorization infeasible on ordinary hardware and motivates alternatives, but does not guarantee a good iterative solver. Compare improved ordering or out-of-core direct methods with a structure-compatible preconditioner and measure memory and convergence before switching.

**Exercise 15.3.** Three diagnostic steps: (1) check the condition number estimate or the eigenvalue distribution of $A$; (2) inspect the preconditioner---is it spectrally equivalent to $A$?; (3) verify that $A$ is actually SPD; a hidden indefiniteness can cause stagnation.

**Exercise 15.4.** For spectral-norm error, first check the rank-$50$ tail $\sigma_{51}$. If it permits $10^{-6}$, increasing $q$ or oversampling can reduce algorithmic error, followed by a measured final residual. If $\sigma_{51}>10^{-6}$, increase the output rank or revise the target; $q$ and oversampling cannot beat the rank-$50$ optimum. A diagonal matrix with $50$ ones followed by $10^{-3}$ has best rank-$50$ error $10^{-3}$, while rank $51$ is exact.
