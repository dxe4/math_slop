
# Pseudospectra

Eigenvalues are a powerful diagnostic for normal matrices, but for nonnormal operators they can be misleading. A matrix can have all eigenvalues inside the unit disk yet exhibit large transient growth in its powers or exponentials. Pseudospectra quantify this behavior by showing how far eigenvalues move under small perturbations. This chapter defines pseudospectra, explains how to compute them, and illustrates their use in stability analysis.

## Definition and basic properties

For $\varepsilon > 0$, the $\varepsilon$-pseudospectrum of $A \in \mathbb{C}^{n \times n}$ is

$$
\sigma_{\varepsilon}(A)
= \{z \in \mathbb{C} : \lVert (zI - A)^{-1} \rVert_{2} \ge \varepsilon^{-1}\}.
$$

Here the resolvent norm is defined to be $+\infty$ for $z\in\sigma(A)$. This convention includes the spectrum and makes the definition agree with the perturbation-union characterization below.

Equivalently,

$$
\sigma_{\varepsilon}(A)
= \bigcup_{\lVert E \rVert_{2} \le \varepsilon} \sigma(A + E),
$$

the union of spectra of all matrices within distance $\varepsilon$ of $A$. For normal matrices, $\sigma_{\varepsilon}(A)$ is the union of disks of radius $\varepsilon$ around the eigenvalues. For nonnormal matrices, it can be much larger.

## Resolvent norm and nonnormality

The resolvent $(zI - A)^{-1}$ measures sensitivity at points $z$ not necessarily near an eigenvalue. Its 2-norm is the reciprocal of the smallest singular value of $zI - A$:

$$
\lVert (zI - A)^{-1} \rVert_{2} = \frac{1}{\sigma_{\min}(zI - A)}.
$$

Thus the boundary of $\sigma_{\varepsilon}(A)$ is a level curve of $\sigma_{\min}(zI - A)$. Computing pseudospectra requires evaluating this quantity on a grid in the complex plane.

## Transient behavior

For a linear dynamical system $\dot{x} = Ax$, the spectral abscissa $\alpha(A) = \max \operatorname{Re}\lambda$ determines asymptotic stability. However, the norm of the matrix exponential can grow transiently before decay sets in. For $t\ge0$, let $\Gamma$ be a rectifiable positively oriented contour avoiding the spectrum and enclosing every spectral point with winding number one; a simple closed piecewise-smooth contour is sufficient. The Cauchy formula gives

$$
e^{At}=\frac{1}{2\pi i}\int_{\Gamma}e^{zt}(zI-A)^{-1}\,dz,
$$

and therefore

$$
\lVert e^{At}\rVert_2\le \frac{L(\Gamma)}{2\pi}
e^{t\max_{z\in\Gamma}\operatorname{Re}z}
\max_{z\in\Gamma}\lVert(zI-A)^{-1}\rVert_2.
$$

Here $L(\Gamma)$ is the contour length. Pseudospectral contours extending into the right half-plane demonstrate sensitivity to destabilizing perturbations. Quantitative transient growth requires an additional lower bound or a direct computation; the contour picture alone is not a proof of a specified overshoot.

## Computation

The standard algorithm computes $\sigma_{\min}(zI - A)$ on a rectangular grid in the complex plane. For dense $A$, an SVD of $zI - A$ at each grid point is $O(n^{3})$; for a $100 \times 100$ grid this is prohibitive for large $n$. Faster methods include:
- **Projection onto a Krylov subspace:** compute pseudospectra of the projected Hessenberg or tridiagonal matrix.
- **Contour integration:** evaluate integrals of the resolvent to estimate pseudospectral measures without a full grid.
- **Randomized sampling:** estimate $\sigma_{\min}$ by randomized algorithms.

For modest dense problems, direct singular-value evaluation is a transparent baseline, but its feasibility depends on the grid, requested accuracy and implementation. It is still a sampled picture unless an error and coverage argument is added.

## Example: a nonnormal $2 \times 2$ matrix

**Example 13.1 (a nonnormal $2 \times 2$ matrix).**

Let

$$
A = \begin{pmatrix}
-1 & 10 \\
0 & -2
\end{pmatrix}.
$$

The eigenvalues are $-1$ and $-2$, both in the left half-plane, so the system is asymptotically stable. However, the resolvent norm at $z = 0$ is

$$
\lVert (0I - A)^{-1} \rVert_{2}
= \lVert A^{-1} \rVert_{2}
= \frac{1}{\sigma_{\min}(A)}.
$$

The singular values of $A$ are the square roots of the eigenvalues of $A^{T}A = \begin{pmatrix} 1 & -10 \\ -10 & 104 \end{pmatrix}$. The characteristic polynomial is $\lambda^{2} - 105\lambda + 4 = 0$, so the eigenvalues are approximately $104.96$ and $0.038$. Thus $\sigma_{\min}(A) \approx \sqrt{0.038} \approx 0.195$, and $\lVert A^{-1} \rVert_{2} \approx 5.13$. The $0.2$-pseudospectrum therefore reaches the origin and, by continuity of the strict inequality nearby, crosses the stability boundary. Thus perturbations of this size can destroy asymptotic stability. Transient growth for the unperturbed matrix follows separately from

$$
e^{At}=\begin{pmatrix}e^{-t}&10(e^{-t}-e^{-2t})\\0&e^{-2t}\end{pmatrix}.
$$

At $t=\log 2$, the upper-right entry is $2.5$, so $\lVert e^{At}\rVert_2\ge\lVert e^{At}(0,1)^T\rVert_2>2.5>1$ before eventual decay.

## Common errors and misconceptions

**Error: equating eigenvalue stability with robust stability.** A system with eigenvalues in the left half-plane can lose robust stability when its pseudospectrum at an allowed perturbation scale reaches the stability boundary. Always check the resolvent norm for physically relevant perturbation sizes.

**Error: computing pseudospectra at too coarse a resolution.** Sharp features of pseudospectra require fine grids. A coarse grid can miss narrow protrusions that are critical for stability assessment.

**Error: ignoring the norm used.** The definition above uses the 2-norm. Pseudospectra in other norms have different shapes and different interpretations. State the norm explicitly.

## Preparation and a closed-set convention

Required preparation is [singular values and perturbation bounds](eigenvalue-computations.md), complex numbers and matrix norms. The discussion of semigroups also uses the exponential developed in [Matrix Functions](matrix-functions.md). We use complex unstructured perturbations and the Euclidean operator norm. Real-only, sparse, symmetric or otherwise constrained perturbations define different structured questions.

**Definition 13.2 (Closed pseudospectrum).** For $\epsilon>0$, define the closed $\epsilon$-pseudospectrum by
$$\sigma_\epsilon(A)=\{z:\sigma_{\min}(zI-A)\le\epsilon\}.$$
This includes the exact spectrum. Using strict inequality instead produces an open convention; keep the choice consistent when claiming that a contour or boundary point belongs.

**Theorem 13.3 (Three equivalent pseudospectral descriptions).** For a fixed $z$, the following are equivalent: its smallest shifted singular value is at most $\epsilon$; there is a unit vector $v$ with $\|(A-zI)v\|_2\le\epsilon$; and $z$ is an eigenvalue of $A+E$ for some $\|E\|_2\le\epsilon$. Outside the spectrum these are also equivalent to $\|(zI-A)^{-1}\|_2\ge1/\epsilon$.

*Proof.* The minimum over unit vectors is attained by a singular vector, so the first two statements are equivalent. If $(A+E)v=zv$, then $(zI-A)v=Ev$ and the residual norm is at most $\epsilon$. Conversely choose unit $v$ with $(zI-A)v=r$ and set $E=rv^*$. Then $(A+E)v=zv$ and $\|E\|_2=\|r\|_2\le\epsilon$. For an invertible shifted matrix, the SVD gives inverse norm $1/\sigma_{\min}$; at a spectral point the declared infinite-resolvent convention completes the equivalence. ∎

The perturbation is allowed to depend on $z$ and on its minimizing singular direction. The union of perturbed spectra does not mean one single perturbation realizes every point at once. It also does not identify the probability of a perturbation: a norm ball is a set-valued uncertainty model, not a distribution.

For normal $A=U\Lambda U^*$, the shifted singular values are the distances $|z-\lambda_i|$. The definition therefore gives precisely the closed disks stated earlier. For nonnormal $A$, a unitary change of basis preserves the pseudospectrum, whereas an arbitrary similarity can distort it. Conditioning of eigenvectors is the missing scale in the latter transformation.

## Two exact geometric examples

**Example 13.4 (A normal reference).** Let $A=\operatorname{diag}(-1,-3)$ and $\epsilon=1/2$. Its pseudospectrum consists of the two disks centered at minus one and minus three with radius one half. Both stay strictly in the left half-plane, so every complex unstructured perturbation of spectral norm at most one half leaves all eigenvalues with negative real part. At $\epsilon=1$, the first disk reaches zero: the perturbation $\operatorname{diag}(1,0)$ makes an eigenvalue exactly zero. That loses strict asymptotic stability but does not itself create positive exponential growth.

**Example 13.5 (An exact Jordan pseudospectral radius).** Let
$$A=\begin{pmatrix}-1&K\\0&-1\end{pmatrix},\qquad K>0.$$
Write $w=z+1$, $r=|w|$. The shifted matrix is
$B=\begin{pmatrix}w&-K\\0&w\end{pmatrix}$.
The trace of $B^*B$ is $2r^2+K^2$ and its determinant is $r^4$, giving
$$\sigma_{\min}(B)=\frac{\sqrt{K^2+4r^2}-K}{2}.$$
Consequently $\sigma_{\min}(B)\le\epsilon$ is equivalent, after adding $K$ and squaring positive sides, to
$$r^2\le K\epsilon+\epsilon^2.$$
Thus the entire pseudospectrum is a disk of radius $\sqrt{K\epsilon+\epsilon^2}$ around minus one. With $K=10$ and $\epsilon=0.1$, its radius is $\sqrt{1.01}>1$, so it reaches the open right half-plane. The corresponding eigenvalue sensitivity scales like the square root of the perturbation for small $\epsilon$, rather than linearly with a fixed eigenvector condition number. This matrix is defective, so a diagonalizable Bauer–Fike formula does not apply.

For this same matrix, $N=A+I$ has $N^2=0$, hence
$e^{At}=e^{-t}(I+tN)$.
Starting from $e_2$ gives $(Kt e^{-t},e^{-t})$, whose norm at $t=1$ is $e^{-1}\sqrt{K^2+1}$. With $K=10$ it exceeds three, despite eventual exponential decay. This is a direct lower bound for the unperturbed transient, separate from the perturbation-union argument.

## A quantitative bridge to transient amplification

For stable finite-dimensional $A$, let $K_A=\sup_{t\ge0}\|e^{At}\|_2$, which is finite because the Jordan-form polynomial factors are dominated by decay. For $\operatorname{Re}z>0$,
$$(zI-A)^{-1}=\int_0^\infty e^{-zt}e^{At}\,dt.$$
To prove it, integrate the derivative of $e^{-zt}e^{At}$ on a finite interval. Its boundary term tends to zero, leaving $(zI-A)$ times the integral equal to the identity. The norm bound is therefore
$$\|(zI-A)^{-1}\|_2\le\frac{K_A}{\operatorname{Re}z},\qquad
K_A\ge(\operatorname{Re}z)\|(zI-A)^{-1}\|_2.$$
If the last product exceeds one at a point, it proves some transient amplification above one. A contour crossing the right half-plane alone does not automatically supply a particular amplification factor or its time.

The earlier Cauchy contour formula gives an upper bound from a contour enclosing the spectrum, with $f(z)=e^{zt}$ analytic inside. Its complex-analysis functional-calculus proof is a cited dependency. It must avoid spectral points on the contour, state its orientation, and bound its full length and resolvent maximum. Sampling a few favorable contour nodes does not prove the integral bound for every point between them.

## Turning a grid into a controlled statement

Let $g(z)=\sigma_{\min}(zI-A)$. The minimum singular-value characterization proves
$$|g(z)-g(w)|\le|z-w|.$$
Indeed for every unit vector, the two shifted actions differ by $(z-w)v$, of norm $|z-w|$; taking minima gives one direction of the inequality and interchanging $z,w$ gives the other.

A square grid cell of side length $h$, sampled at its center, has every point within $\rho=h/\sqrt2$. Thus a center value $g_c>\epsilon+\rho$ excludes the entire cell from the closed pseudospectrum. A value $g_c\le\epsilon-\rho$ includes the entire cell. Cells between these thresholds remain unresolved and can be subdivided. If a computed singular value has a proved error allowance $\eta$, use $g_c-\eta$ for exclusion and $g_c+\eta$ for inclusion. This makes approximation and coverage margins visible rather than trusting a visually smooth contour interpolation.

**Example 13.6 (A certified grid decision).** Let $\epsilon=0.2$, $h=0.1$, so $\rho\approx0.07071$. Suppose a singular-value evaluator encloses the center value in $[0.31,0.32]$. Since $0.31>0.27071$, every point in the cell has $g(z)>\epsilon$ and is excluded. An enclosed center value $[0.16,0.17]$ would not settle the cell: the entire-cell inclusion threshold is about $0.12929$, while exclusion needs a lower bound above $0.27071$. Reporting the latter cell unresolved preserves the mathematical claim.

Projected pseudospectra can be useful discovery tools, but the projection may miss directions important in another region of the complex plane. A small projected singular value can guide refinement; a large one does not automatically exclude the full operator. Report the basis, region, projection residual and any theorem transferring the result. Similarly, randomized singular-value estimates are probability statements unless a deterministic or verified bound is supplied.

Finally, robust stability depends on the permissible perturbations and units. An arbitrary complex entry perturbation may not represent a physical change in masses, rates or boundary conditions. Rescaling state variables changes a Euclidean norm ball under nonunitary coordinates. Name the perturbation model before interpreting a pseudospectral plot as an application conclusion.

**Proposition 13.7 (Scaling the perturbation radius).** For nonzero scalar $\alpha$,
$$
\sigma_\epsilon(\alpha A)=
\alpha\,\sigma_{\epsilon/|\alpha|}(A).
$$

*Proof.* Write $z=\alpha w$. Then
$\sigma_{\min}(zI-\alpha A)=|\alpha|\sigma_{\min}(wI-A)$, and apply the closed-set definition. $\square$

Thus an absolute perturbation radius has the same scale and units as the matrix entries. For a nonzero matrix, a relative radius $\eta$ means the absolute choice $\epsilon=\eta\|A\|_2$; keeping the numerical value of $\epsilon$ fixed while changing units describes a different uncertainty set. For the zero matrix this relative convention gives radius zero, so a positive absolute uncertainty must be specified separately. State which convention is used before comparing two plots.

## Structured perturbations change the uncertainty set

Return to A=[[-1,K],[0,−1]]. If perturbations are restricted to the strictly upper-right entry, every permitted matrix remains upper triangular with both diagonal entries minus one. Its spectrum is unchanged for every perturbation size, although the off-diagonal entry still changes transient amplification.

If all upper-triangular perturbations of spectral norm at most ε are allowed, the two diagonal changes each have modulus at most ε. Therefore every perturbed eigenvalue stays in the disk of radius ε about minus one. Conversely every point of that disk is attained by changing one diagonal entry by the corresponding scalar; that perturbation has exactly the required norm. Thus this structured union is precisely that radius-ε disk.

The unstructured pseudospectrum proved earlier has the larger radius given by the square root of Kε plus ε². Perturbations with a below-diagonal component create feedback between the two coordinates and can move eigenvalues far beyond what triangular perturbations allow. Both calculations are exact, but they answer different uncertainty questions.

Consequently an engineering interpretation must specify which entries or symmetries may change before adopting an unstructured disk as a physical robustness claim. A norm bound quantifies the size of the permitted changes; it does not determine their structural pattern.

Pseudospectral tolerances carry the same scale as the matrix. Multiplying A by a nonzero scalar c and adding d times identity sends its epsilon-pseudospectrum to the affine image of the epsilon divided by absolute c pseudospectrum of A. Indeed a perturbation of norm at most epsilon in the transformed matrix becomes a perturbation divided by c in A, with norm at most epsilon divided by absolute c; eigenvalues transform by the same affine rule. The reverse construction multiplies the perturbation by c, proving equality rather than just containment. Thus a plot at a fixed numerical tolerance must be rescaled when the matrix's physical units or normalization change.

## Practice exercises with solutions

### Exercise 10.1
<a id="pseudospectra-ex-10-1"></a>

For a normal matrix $A$, show that $\sigma_{\varepsilon}(A)$ is exactly the union of disks of radius $\varepsilon$ centered at the eigenvalues.

<details>
<summary>Hint 1</summary>

**Hint.** Unitarily diagonalize the normal matrix.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The inverse norm is the largest reciprocal distance.

</details>

<details>
<summary>Solution</summary>

**Solution.**  For normal $A$, the Schur decomposition is unitarily diagonalizable: $A = U\Lambda U^{*}$. Then $(zI - A)^{-1} = U(zI - \Lambda)^{-1}U^{*}$, so $\lVert (zI - A)^{-1} \rVert_{2} = \max_{i} |z - \lambda_{i}|^{-1}$. The condition $\lVert (zI - A)^{-1} \rVert_{2} \ge \varepsilon^{-1}$ becomes $\min_{i} |z - \lambda_{i}| \le \varepsilon$, which is exactly the union of disks.

</details>

### Exercise 10.2
<a id="pseudospectra-ex-10-2"></a>

Compute $\sigma_{\min}(zI - A)$ for $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ at $z = 0$ and $z = 1$.

<details>
<summary>Hint 1</summary>

**Hint.** Form the shifted Gram matrix.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use its two eigenvalues to obtain singular values.

</details>

<details>
<summary>Solution</summary>

**Solution.**  At $z = 0$, $zI - A = \begin{pmatrix} 0 & -1 \\ 0 & 0 \end{pmatrix}$. The singular values are $1$ and $0$, so $\sigma_{\min} = 0$. At $z = 1$, $zI - A = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$. The eigenvalues of $(zI - A)^{T}(zI - A) = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$ are $(3 \pm \sqrt{5})/2$, so $\sigma_{\min} = \sqrt{(3 - \sqrt{5})/2} \approx 0.618$.

</details>

### Exercise 10.3
<a id="pseudospectra-ex-10-3"></a>

A matrix has all eigenvalues with real part $-1$, but its $10^{-3}$-pseudospectrum extends into the right half-plane. What does this imply for a physical system governed by $\dot{x} = Ax$?

<details>
<summary>Hint 1</summary>

**Hint.** Apply the perturbation-union description.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Separate a perturbed instability from the original transient.

</details>

<details>
<summary>Solution</summary>

**Solution.**  The nominal system is asymptotically stable, but a perturbation of norm at most $10^{-3}$ can place an eigenvalue in the closed right half-plane, so stability is not robust at that scale. The large resolvent near the imaginary axis flags a possible transient-amplification mechanism, but a transient claim about the unperturbed system needs a separate lower bound or computation of $\lVert e^{At}\rVert$.

</details>

### Exercise 10.4
<a id="pseudospectra-ex-10-4"></a>

Why is the direct grid method for pseudospectra $O(gn^{3})$ for $g$ grid points, and how can Krylov projection reduce this?

<details>
<summary>Hint 1</summary>

**Hint.** Count an SVD at every point.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Include basis construction before projected grid work.

</details>

<details>
<summary>Solution</summary>

**Solution.**  Each grid point requires an SVD of $zI-A$, which is $O(n^3)$. Krylov projection reduces $A$ to a small Hessenberg or tridiagonal matrix $H_k$ with $k\ll n$. Building it costs $k$ matrix-vector products plus $O(k^2n)$ orthogonalization in unrestarted Arnoldi; for a dense unstructured matrix, the products specialize to $O(kn^2)$. Each projected SVD is $O(k^3)$, so the grid phase costs $O(gk^3)$ in addition to the projection cost. Approximation quality is region- and subspace-dependent.

</details>

## Further exercises

### Exercise 5: A residual perturbation
<a id="pseudospectra-ex-5"></a>

A unit vector v has residual $r=(zI-A)v$ of norm 0.03. Construct E giving z as a perturbed eigenvalue.

<details>
<summary>Hint 1</summary>

**Hint.** Use a rank-one matrix.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Its action on v must equal r.

</details>

<details>
<summary>Solution</summary>

**Solution.** Set $E=rv^*$. Then $(A+E)v=zv$ and $\|E\|_2=\|r\|_2=0.03$. This is an unstructured complex perturbation; additional physical constraints could rule it out.

</details>

### Exercise 6: Jordan radius
<a id="pseudospectra-ex-6"></a>

For K=4 and epsilon=0.01 in the Jordan example, find the radius.

<details>
<summary>Hint 1</summary>

**Hint.** Use the exact squared-radius formula.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Include the epsilon-squared term.

</details>

<details>
<summary>Solution</summary>

**Solution.** The radius is $\sqrt{0.04+0.0001}=\sqrt{0.0401}$, about 0.20025. Replacing it by $\sqrt{K\epsilon}$ is only a small-epsilon approximation, not the exact boundary.

</details>

### Exercise 7: Unitary coordinates
<a id="pseudospectra-ex-7"></a>

Show the pseudospectrum is unchanged by $A\mapsto U^*AU$ for unitary U.

<details>
<summary>Hint 1</summary>

**Hint.** Write the shifted matrix under the same conjugation.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use singular-value invariance.

</details>

<details>
<summary>Solution</summary>

**Solution.** The shifted matrix becomes $U^*(zI-A)U$, whose singular values are unchanged by unitary factors. The smallest-singular-value definition therefore gives the same set.

</details>

### Exercise 8: Grid exclusion
<a id="pseudospectra-ex-8"></a>

Let epsilon=0.1 and every point in a cell be within 0.02 of its center. Does center lower bound 0.13 exclude the cell?

<details>
<summary>Hint 1</summary>

**Hint.** Use the Lipschitz margin.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Subtract the cell radius.

</details>

<details>
<summary>Solution</summary>

**Solution.** Yes. Every point has $g(z)\ge0.13-0.02=0.11>0.1$, so the entire cell is outside the closed pseudospectrum. The conclusion needs a genuine center lower bound.

</details>

### Exercise 9: Transient lower bound
<a id="pseudospectra-ex-9"></a>

At real z=0.5, a verified resolvent norm is at least 8. Bound the stable semigroup's largest norm.

<details>
<summary>Hint 1</summary>

**Hint.** Multiply the resolvent lower bound by the real part.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use the Laplace-integral inequality.

</details>

<details>
<summary>Solution</summary>

**Solution.** The supremum is at least $0.5(8)=4$. This proves amplification somewhere in nonnegative time but does not locate the time or exact peak.

</details>

### Exercise 10: Open and closed conventions
<a id="pseudospectra-ex-10"></a>

Why does changing a non-strict inequality to a strict one matter at a stability boundary?

<details>
<summary>Hint 1</summary>

**Hint.** A spectral point can lie exactly on a contour.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Strict asymptotic stability requires negative real parts.

</details>

<details>
<summary>Solution</summary>

**Solution.** The closed convention includes equality points achieved by perturbations at the full permitted norm. A perturbation placing an eigenvalue exactly on the imaginary axis removes strict asymptotic stability, even if it produces no positive growth rate. State both the pseudospectral and stability conventions.

</details>

## Sources

Trefethen and Embree, [Spectra and Pseudospectra](https://press.princeton.edu/books/hardcover/9780691119465/spectra-and-pseudospectra), is the specialist reference for nonnormality and functional-calculus bounds. The complete contour-functional-calculus theorem is cited rather than proved here. The perturbation equivalence, normal disks, Jordan formula, Laplace lower bound and grid Lipschitz certificates used directly are proved above. [Matrix Functions](matrix-functions.md) develops the exponential and its finite-time perturbation estimates.

<a id="looking-backward-and-forward"></a>

## Summary

Pseudospectra describe the eigenvalues attainable under a specified norm-bounded perturbation, and equivalently the smallest shifted singular values. Normal disks provide a baseline; a Jordan example shows much larger sensitivity and direct transient growth. Resolvent bounds connect to semigroup amplification with explicit hypotheses. A sampled contour becomes a mathematical region only after approximation and coverage margins are accounted for.
