var e=`---
parent_id: book-matrix-computation-applications
chapter_id: qr-least-squares-svd
status: draft
title: "QR, Least Squares, and SVD"
level: advanced-undergraduate
estimated_minutes: 200
license: CC BY-SA 4.0
---

# QR, Least Squares, and SVD

When a linear system $Ax = b$ has no exact solution because $A$ is tall and the equations are inconsistent, the natural replacement is the least-squares problem: find $x$ that minimizes $\\lVert Ax - b \\rVert_{2}$. This chapter develops the QR factorization as the workhorse for full-rank least squares, then introduces the singular value decomposition as a diagnostic and approximation engine that handles rank deficiency and supplies condition estimates.

## The least-squares problem

Let $A \\in \\mathbb{K}^{m \\times n}$ with $m \\ge n$ and $\\operatorname{rank}(A) = n$. The least-squares problem is

$$
\\min_{x \\in \\mathbb{K}^{n}} \\lVert Ax - b \\rVert_{2}.
$$

Geometrically, we seek the orthogonal projection of $b$ onto the column space of $A$. The residual $r = b - Ax$ must be orthogonal to every column of $A$, giving the normal equations

$$
A^{*}Ax = A^{*}b.
$$

While correct in exact arithmetic, the normal equations square the condition number: $\\kappa_{2}(A^{*}A) = \\kappa_{2}(A)^{2}$. For moderately ill-conditioned $A$, this amplification can destroy accuracy. QR and SVD approaches avoid this risk.

## QR factorization

For full-column-rank $A$, the reduced QR factorization is

$$
A = QR,
\\qquad
Q \\in \\mathbb{K}^{m \\times n},\\; R \\in \\mathbb{K}^{n \\times n},
$$

where $Q$ has orthonormal columns ($Q^{*}Q = I_{n}$) and $R$ is upper triangular with nonzero diagonal entries. The signs (or complex phases) of corresponding columns of $Q$ and rows of $R$ may be chosen so that the diagonal of $R$ is positive; this normalization makes the reduced factorization unique. We retain the direct Householder signs in the worked example below. Substituting into the least-squares objective,

$$
\\lVert Ax - b \\rVert_{2}^{2}
= \\lVert QRx - b \\rVert_{2}^{2}
= \\lVert Rx - Q^{*}b \\rVert_{2}^{2}
+ \\lVert (I_{m} - QQ^{*})b \\rVert_{2}^{2}.
$$

The second term is independent of $x$, so the minimum is attained by solving the triangular system $Rx = Q^{*}b$.

### Householder reflections

The standard dense QR algorithm uses Householder reflections. A reflection $H$ is a unitary matrix of the form

$$
H = I - 2 \\frac{vv^{*}}{v^{*}v},
$$

chosen so that $Hx$ zeros all but the first component of $x$. Applying a sequence of such reflections from the left introduces zeros below the diagonal, producing $R$. The product of the reflections gives $Q$ implicitly, which is storage-efficient.

Householder QR has a normwise backward-stability theorem under the standard floating-point model, nonoverflow assumptions and dimension-dependent constants: the computed triangular factor is the exact factor of a nearby matrix with an exactly unitary comparison factor. Its perturbation is bounded by a factor of order $c(m,n)u\\|A\\|$ when that factor is small. The explicitly formed numerical Q additionally has an orthogonality error. The full rounding proof is cited in Sources; an unspecified constant depending only on the number of columns is not asserted for every implementation.

### Gram–Schmidt variants

Classical Gram–Schmidt orthogonalizes each column against all previous columns. In floating point, when columns are nearly dependent, orthogonality can be lost catastrophically. Modified Gram–Schmidt processes one column at a time and reorthogonalizes if necessary. It is adequate for many purposes but does not match the orthogonality guarantees of Householder QR.

## Singular value decomposition

Every matrix $A \\in \\mathbb{K}^{m \\times n}$ admits a singular value decomposition

$$
A = U \\Sigma V^{*},
$$

where $U \\in \\mathbb{K}^{m \\times m}$ and $V \\in \\mathbb{K}^{n \\times n}$ are unitary, and $\\Sigma \\in \\mathbb{R}^{m \\times n}$ is diagonal with nonnegative entries $\\sigma_{1} \\ge \\sigma_{2} \\ge \\dots \\ge \\sigma_{\\min(m,n)} \\ge 0$.

The SVD provides:
- $\\lVert A \\rVert_{2} = \\sigma_{1}$;
- $\\operatorname{rank}(A)$ equals the number of nonzero singular values in exact arithmetic;
- the pseudoinverse $A^{+} = V \\Sigma^{+} U^{*}$, where $\\Sigma^{+}$ inverts positive diagonal entries;
- for full-rank $A$, the standard 2-norm condition number; for a positive-rank, rank-deficient rank-$r$ matrix, $\\sigma_{1}/\\sigma_{r}$ is the effective condition number on the resolved range, while the standard solve condition number is infinite; for $A=0$ there is no positive singular value and this ratio is undefined;
- the best rank-$k$ approximation $A_{k} = \\sum_{i=1}^{k} \\sigma_{i} u_{i} v_{i}^{*}$.

### Eckart–Young theorem

For an integer $0\\le k<\\min(m,n)$ and any matrix $B$ of rank at most $k$,

$$
\\lVert A - B \\rVert_{2} \\ge \\sigma_{k+1},
$$

with equality for $B = A_{k}$. The proof uses the fact that any rank-$k$ matrix has a null space of dimension at least $n - k$, which must intersect the span of the first $k+1$ right singular vectors. Along a unit vector in this intersection, the error is at least $\\sigma_{k+1}$.

### Numerical rank

In floating point, "nonzero singular value" must be replaced by "singular value larger than a tolerance." A singular value of $10^{-9}$ may be signal in one context and noise in another. Report numerical rank with the tolerance and the method used to choose it.

## Example: least squares via QR and SVD

**Example 5.1 (least squares via QR and SVD).**

Let

$$
A = \\begin{pmatrix}
1 & 1 \\\\
1 & 2 \\\\
1 & 3
\\end{pmatrix},
\\qquad
b = \\begin{pmatrix} 2 \\\\ 3 \\\\ 5 \\end{pmatrix}.
$$

**QR approach.** The reduced QR factorization gives

$$
Q = \\begin{pmatrix}
-1/\\sqrt{3} & 1/\\sqrt{2} \\\\
-1/\\sqrt{3} & 0 \\\\
-1/\\sqrt{3} & -1/\\sqrt{2}
\\end{pmatrix},
\\qquad
R = \\begin{pmatrix}
-\\sqrt{3} & -2\\sqrt{3} \\\\
0 & -\\sqrt{2}
\\end{pmatrix}.
$$

Then $Q^{*}b = ( -10/\\sqrt{3},\\; -3/\\sqrt{2} )^{T}$. Solving $Rx = Q^{*}b$ gives $-\\sqrt{2}\\,x_{2} = -3/\\sqrt{2}$, so $x_{2} = 3/2$, and $-\\sqrt{3}\\,x_{1} - 2\\sqrt{3}\\,(3/2) = -10/\\sqrt{3}$, so $x_{1} = 1/3$. The solution is $x = (1/3,\\; 3/2)^{T}$.

**SVD approach.** The singular values are $\\sigma_{1} \\approx 4.08$, $\\sigma_{2} \\approx 0.60$. The pseudoinverse solution $x = A^{+}b$ gives the same $x$ because $A$ has full rank. If a column were nearly dependent, QR with column pivoting or the SVD would reveal it through a small singular value.

## Common errors and misconceptions

**Error: using normal equations by default.** They are acceptable only when $A$ is well conditioned and $n$ is small enough that the $O(n^{3})$ cost is negligible. For production code, prefer QR or SVD.

**Error: confusing exact rank with numerical rank.** Exact rank is the number of strictly positive singular values and needs no tolerance. A reported numerical rank, such as "rank 5 at cutoff $\\tau$," depends on the cutoff and data accuracy; report the tolerance, the norm used, and the noise model. For $A=\\operatorname{diag}(1,10^{-9})$, the exact rank is $2$, while cutoffs $10^{-8}$ and $10^{-10}$ give numerical ranks $1$ and $2$, respectively. 

**Error: computing the full SVD when only a few singular values are needed.** For large matrices, use iterative methods such as Lanczos or randomized algorithms to approximate the dominant singular values and vectors.

## Preparation and the exact minimization theorem

Required preparation is orthogonal projection, matrix norms and finite-precision arithmetic. We work over $\\mathbb K=\\mathbb R$ or $\\mathbb C$, use conjugate transpose throughout, and distinguish an exact factorization from its computed representation. Least squares chooses a fit in a specified norm; it does not by itself justify a statistical noise model.

**Definition 5.2 (Orthogonal projector and least-squares residual).** A matrix $P$ is an orthogonal projector if $P=P^*=P^2$. For a trial coefficient vector $x$, the residual is $r=b-Ax$. The normal-equation condition is $A^*r=0$, meaning this residual is orthogonal to the entire represented column space.

**Theorem 5.3 (Least-squares characterization).** A vector $x_*$ minimizes $\\|Ax-b\\|_2$ if and only if $A^*(b-Ax_*)=0$. It is unique when $A$ has full column rank.

*Proof.* Write $r_*=b-Ax_*$. If the orthogonality condition holds, then for every displacement $h$ the vectors $r_*$ and $Ah$ are orthogonal. Hence
$$\\|A(x_*+h)-b\\|_2^2=\\|r_*\\|_2^2+\\|Ah\\|_2^2\\ge\\|r_*\\|_2^2.$$
Conversely a minimum makes the directional derivative of the squared norm vanish in every real direction, giving the real part of $h^*A^*r_*$ equal to zero. Over $\\mathbb C$ also use direction $\\mathrm i h$ to get its imaginary part. Thus $A^*r_*=0$. If $A$ has full column rank, $\\|Ah\\|=0$ forces $h=0$, giving uniqueness. If it is rank deficient, every null vector can be added to a minimizer. ∎

For reduced QR, $QQ^*$ is the projector onto the columns of $A$. Decomposing $b$ into its projected and orthogonal components proves the displayed objective identity. It also proves existence without normal equations: solve the nonsingular triangular system. A residual can be nonzero even for the exact optimum, so a stopping condition based only on making $\\|r\\|$ small can be inappropriate. The stationarity residual $A^*r$ measures optimality, while the residual norm measures fit.

**Example 5.4 (Completing the line-fit audit).** For the original three-row example, $x=(1/3,3/2)$ predicts $(11/6,10/3,29/6)$. Thus
$$r=b-Ax=(1/6,-1/3,1/6),\\qquad \\|r\\|_2^2=1/6.$$
The residual components sum to zero, and their inner product with the time column $(1,2,3)$ is $1/6-2/3+1/2=0$. Both normal equations hold. For any other coefficients $x+h$, the squared fit error increases by $\\|Ah\\|^2$, so the optimum is proved without inspecting a rounded optimizer flag.

## Householder geometry before rounding

**Proposition 5.5 (A reflection is unitary).** For a nonzero vector $v$, let $P=vv^*/(v^*v)$ and $H=I-2P$. Then $H=H^*$ and $H^*H=I$.

*Proof.* Direct multiplication gives $P=P^*$ and $P^2=P$. Consequently $H^*H=(I-2P)^2=I-4P+4P=I$. ∎

For a real nonzero $x$, choose $\\alpha=-\\operatorname{sign}(x_1)\\|x\\|$ with sign zero defined as one, and $v=x-\\alpha e_1$. This sign choice avoids subtracting nearly equal large numbers in the first component. The identities $v^*x=\\|x\\|^2-\\overline\\alpha x_1$ and $v^*v=2(\\|x\\|^2-\\overline\\alpha x_1)$ give $Hx=\\alpha e_1$. In the complex case use the phase of $x_1$, with an arbitrary unit phase when that entry is zero. A zero input needs no reflection.

**Example 5.6 (A complete two-coordinate reflection).** For $x=(3,4)$ take $\\alpha=-5$ and $v=(8,4)$. Since $v^Tv=80$,
$$H=I-\\frac1{40}\\begin{pmatrix}64&32\\\\32&16\\end{pmatrix}
=\\begin{pmatrix}-3/5&-4/5\\\\-4/5&3/5\\end{pmatrix}.$$
Multiplication gives $Hx=(-5,0)$. Each column remains a unit vector and their inner product is zero. Applying such a reflection to the lower part of one column creates zeros while preserving the Euclidean norm of every transformed column. Subsequent reflections leave earlier triangular zeros intact by acting only on remaining rows.

Exact unitary transformations prevent geometric amplification, but their finite arithmetic still rounds products and norms. The backward theorem tracks those rounded operations and uses a safely evaluated vector norm. A naive square-and-sum norm can overflow even when the norm itself is representable; stable scaling is part of an implementation contract.


## A conditional backward-stability theorem for the solve kernels

The following theorem isolates two arithmetic kernels after an exact reduced factorization has been supplied. It does not assume that a computed Householder factorization is exact. Restrict this calculation to real matrices and ordinary real dot products, so the rounding constants below do not hide a separate complex-arithmetic analysis.

**Theorem 5.7 (Reduced-QR solve with supplied exact factors).** Let $m\\ge n\\ge1$, let $A=QR$ be an exact real thin QR factorization with $Q^{\\mathsf T}Q=I_n$ and nonsingular upper triangular R, and let $b\\in\\mathbb R^m$. Regard Q, R and b as the exact inputs to the following kernels, with any input-conversion error accounted for separately. Compute
$\\widehat c=\\operatorname{fl}(Q^{\\mathsf T}b)
=Q^{\\mathsf T}b+\\delta c$
using ordinary products and sequential additions in each length-m dot product. Compute $\\widehat x$ by ordinary backward substitution in $R\\widehat x=\\widehat c$. Assume every elementary operation obeys the relative rounding model with unit roundoff u, no exceptional range behavior invalidates that model, and $mu<1$, $nu<1$. Put $\\gamma_j=ju/(1-ju)$.

The [proved triangular-substitution result](floating-point-and-factorization.md) supplies an upper triangular $\\Delta R$ with
$(R+\\Delta R)\\widehat x=\\widehat c,\\qquad
|\\Delta R|\\le\\gamma_n|R|.$
Assume this particular $R+\\Delta R$ is nonsingular. Then there are real perturbations E and f such that $\\widehat x$ is the unique exact least-squares minimizer for
$\\min_x\\|(A+E)x-(b+f)\\|_2,$
with
$
\\|E\\|_2\\le\\gamma_n\\sqrt n\\,\\|A\\|_2,\\qquad
\\|f\\|_2\\le\\gamma_m\\sqrt n\\,\\|b\\|_2.
$
Absolute values in the componentwise bound mean entrywise magnitudes.

*Proof.* The real dot-product bound proved in the factorization chapter gives
$|\\delta c|\\le\\gamma_m|Q|^{\\mathsf T}|b|.$
Thus
$
\\|\\delta c\\|_2
\\le\\gamma_m\\||Q|^{\\mathsf T}\\|_2\\|b\\|_2
\\le\\gamma_m\\|Q\\|_F\\|b\\|_2
=\\gamma_m\\sqrt n\\,\\|b\\|_2.
$
Here the spectral norm is bounded by the Frobenius norm, taking entrywise magnitudes preserves the Frobenius norm, and Q has n orthonormal columns. The substitution bound similarly yields
$
\\|\\Delta R\\|_2\\le\\|\\Delta R\\|_F
\\le\\gamma_n\\|R\\|_F
\\le\\gamma_n\\sqrt n\\,\\|R\\|_2
=\\gamma_n\\sqrt n\\,\\|A\\|_2.
$
The last equality uses the isometry of multiplication by Q.

Set $E=Q\\Delta R$ and $f=Q\\delta c$. The isometry gives both asserted norm bounds. The perturbed residual is exactly
$
\\begin{aligned}
(b+f)-(A+E)\\widehat x
&=b+Q\\delta c-Q(R+\\Delta R)\\widehat x\\\\
&=b+Q\\delta c-Q(Q^{\\mathsf T}b+\\delta c)\\\\
&=(I-QQ^{\\mathsf T})b.
\\end{aligned}
$
It is orthogonal to the range of Q. Since $R+\\Delta R$ is nonsingular, $A+E=Q(R+\\Delta R)$ has full column rank and precisely that range. The least-squares characterization therefore proves that $\\widehat x$ is its unique minimizing coefficient vector. ∎

This is a proved backward-stability statement for the specified real projection and triangular-solve kernels. It includes the zero right-hand side through absolute inequalities, without dividing by its norm. The nonsingularity condition is explicit; a sufficient additional margin is $\\|R^{-1}\\|_2\\gamma_n\\sqrt n\\,\\|A\\|_2<1$, by the Neumann-series criterion. The theorem does not bound errors from forming Q and R, explicitly forming a nonorthogonal numerical Q, or replacing ordinary dot products and substitution by other arithmetic kernels. Combining it with computed Householder QR requires the separately cited full factorization analysis and its range and dimension hypotheses.

## Rank deficiency and the minimum-norm choice

With SVD coordinates $y=V^*x$ and $c=U^*b$, the squared objective is
$$\\sum_{i=1}^{r}|\\sigma_i y_i-c_i|^2+
\\sum_{i=r+1}^{m}|c_i|^2,$$
where omitted right-null coordinates do not enter the objective. A minimizer sets $y_i=c_i/\\sigma_i$ for positive singular values. Among these minimizers, setting every right-null coordinate to zero uniquely minimizes $\\|x\\|_2=\\|y\\|_2$. This derives $x=A^+b$ and states exactly what “the” rank-deficient solution means.

**Example 5.8 (One fit, infinitely many coefficients).** Let
$$A=\\begin{pmatrix}1&1\\\\2&2\\end{pmatrix},\\qquad b=(1,2).$$
The exact fit condition is $x_1+x_2=1$. Write $x=(1/2+t,1/2-t)$. Its squared norm is $1/2+2t^2$, uniquely minimized at $t=0$. Thus the pseudoinverse selects $(1/2,1/2)$, while $(1,0)$ also fits exactly. The singular values are $\\sqrt{10}$ and zero, so inverting both stored directions is not a legitimate full-rank solve.

Truncated SVD chooses a resolved subspace by a declared threshold. It changes the target from exact inversion on every nonzero stored direction to a regularized fit, often appropriate for uncertain data but requiring a documented bias–sensitivity tradeoff. An exact zero and a small uncertain singular value are different cases. Preserve coefficient units when choosing thresholds: rescaling a column changes singular values while leaving the possible fitted column space unchanged.

The direct-methods source's misleading residual, LU triangular solves, diagonal preconditioner and backward-error construction are retained in [Sparse and Iterative Methods](sparse-and-iterative-methods.md). For least squares, the residual need not vanish, so transfer its reasoning through the stationarity equation or an output sensitivity bound rather than applying a square-solve relative residual formula blindly.

## Practice exercises with solutions

### Exercise 4.1
<a id="qr-least-squares-svd-ex-4-1"></a>

For $A = \\begin{pmatrix} 3 & 0 \\\\ 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$, find the best rank-$1$ approximation in the 2-norm and the Frobenius norm.

<details>
<summary>Hint 1</summary>

**Hint.** Read the singular values from the columns.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Retain the largest singular term.

</details>

<details>
<summary>Solution</summary>

**Solution.**  The singular values are $3$ and $1$. The best rank-$1$ approximation is $A_{1} = 3 \\, u_{1} v_{1}^{T} = \\begin{pmatrix} 3 & 0 \\\\ 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$. The error is $\\sigma_{2} = 1$ in the 2-norm, and $\\sqrt{\\sigma_{2}^{2}} = 1$ in the Frobenius norm as well.

</details>

### Exercise 4.2
<a id="qr-least-squares-svd-ex-4-2"></a>

Show that the normal equations and the QR approach produce the same solution in exact arithmetic when $A$ has full column rank.

<details>
<summary>Hint 1</summary>

**Hint.** Substitute A=QR into the normal equations.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Cancel the invertible triangular transpose.

</details>

<details>
<summary>Solution</summary>

**Solution.**  From $A = QR$, the normal equations give $A^{T}Ax = A^{T}b$, so $R^{T}Q^{T}QRx = R^{T}Q^{T}b$. Since $Q^{T}Q = I$ and $R$ is invertible, this reduces to $Rx = Q^{T}b$, which is exactly the QR least-squares condition.

</details>

### Exercise 4.3
<a id="qr-least-squares-svd-ex-4-3"></a>

A $1000 \\times 10$ design matrix $A$ has $\\kappa_{2}(A) \\approx 10^{4}$. Estimate the condition number of $A^{T}A$ and discuss whether the normal equations are safe in double precision.

<details>
<summary>Hint 1</summary>

**Hint.** Square the original condition number.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The resulting sensitivity estimate is conditional on arithmetic and data accuracy.

</details>

<details>
<summary>Solution</summary>

**Solution.**  $\\kappa_{2}(A^{T}A) = \\kappa_{2}(A)^{2} \\approx 10^{8}$. In double precision ($\\varepsilon_{\\text{mach}} \\approx 10^{-16}$), $10^{8}\\cdot10^{-16}=10^{-8}$ is a first-order sensitivity estimate, suggesting about $8$ decimal digits only if forming and solving the normal equations introduces backward errors of order $\\varepsilon_{\\text{mach}}$ with modest constants and the data are sufficiently accurate. It is not an unconditional accuracy guarantee; rounding in $A^TA$ and $A^Tb$, dimension, scaling, and the least-squares residual also matter. QR or SVD is safer and should generally be preferred.

</details>

### Exercise 4.4
<a id="qr-least-squares-svd-ex-4-4"></a>

Prove that $\\lVert A^{+} \\rVert_{2} = 1/\\sigma_{r}$ for a matrix $A$ of rank $r>0$, and handle $A=0$ separately.

<details>
<summary>Hint 1</summary>

**Hint.** List the positive singular values of the pseudoinverse.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Treat the zero matrix separately.

</details>

<details>
<summary>Solution</summary>

**Solution.**  For $r>0$, the nonzero singular values of the pseudoinverse are $1/\\sigma_{1}, \\dots, 1/\\sigma_{r}$. The largest is $1/\\sigma_{r}$, so $\\lVert A^{+} \\rVert_{2} = 1/\\sigma_{r}$. If $A=0$, then $A^{+}=0$ and $\\lVert A^{+}\\rVert_2=0$; there is no $\\sigma_r$ to invert.

</details>

## Further exercises

### Exercise 5: Residual orthogonality
<a id="qr-least-squares-svd-ex-5"></a>

For the three-row line fit, check the residual against both columns.

<details>
<summary>Hint 1</summary>

**Hint.** Compute predictions from the exact coefficient vector.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Pair the residual with the constant and time columns.

</details>

<details>
<summary>Solution</summary>

**Solution.** The residual is $(1/6,-1/3,1/6)$. Its sum is zero and its weighted sum is $1/6-2/3+1/2=0$. Thus it is orthogonal to both columns and the characterization theorem proves optimality.

</details>

### Exercise 6: Reflection identity
<a id="qr-least-squares-svd-ex-6"></a>

Show $(I-2P)^2=I$ for an orthogonal projector P.

<details>
<summary>Hint 1</summary>

**Hint.** Expand the square.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use idempotence.

</details>

<details>
<summary>Solution</summary>

**Solution.** The square is $I-4P+4P^2=I$. Since $P=P^*$, the reflection is also Hermitian and therefore unitary. Idempotence alone without the adjoint condition would not prove unitarity.

</details>

### Exercise 7: Minimum-norm fit
<a id="qr-least-squares-svd-ex-7"></a>

For $x_1+x_2=2$, identify the unique coefficient vector of smallest Euclidean norm.

<details>
<summary>Hint 1</summary>

**Hint.** Parametrize about equal components.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Expand the squared norm.

</details>

<details>
<summary>Solution</summary>

**Solution.** Write $x=(1+t,1-t)$. Its squared norm is $2+2t^2$, minimized uniquely at $t=0$. The minimum-norm solution is $(1,1)$, although infinitely many other pairs satisfy the fit.

</details>

### Exercise 8: A rank cutoff
<a id="qr-least-squares-svd-ex-8"></a>

For singular values $(4,10^{-5},10^{-9})$, state ranks at strict cutoffs $10^{-6}$ and $10^{-4}$.

<details>
<summary>Hint 1</summary>

**Hint.** Count values larger than each cutoff.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Do not call either threshold an exact algebraic-rank theorem.

</details>

<details>
<summary>Solution</summary>

**Solution.** The ranks are two and one respectively. With all three singular values nonzero the exact algebraic rank is three. The numerical rank depends on the threshold and its noise and scaling justification.

</details>

### Exercise 9: Optimal residual need not vanish
<a id="qr-least-squares-svd-ex-9"></a>

For $A=(1,0)^{\\mathsf T}$ and $b=(2,3)^{\\mathsf T}$, solve least squares and compute stationarity.

<details>
<summary>Hint 1</summary>

**Hint.** Only the first output component can change.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Check A transpose times the residual.

</details>

<details>
<summary>Solution</summary>

**Solution.** The minimizer is $x=2$, with residual $(0,3)$ and norm three. Nevertheless $A^{\\mathsf T}r=0$, so it is exactly optimal. A demand for near-zero residual would reject the correct fit.

</details>

### Exercise 10: Squared conditioning
<a id="qr-least-squares-svd-ex-10"></a>

If full-column-rank A has singular values 3 and 0.01, compute the two condition numbers.

<details>
<summary>Hint 1</summary>

**Hint.** Use the singular-value ratio.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The normal matrix has squared singular values.

</details>

<details>
<summary>Solution</summary>

**Solution.** The original condition number is 300 and the normal-equation condition number is 90,000. This is a sensitivity comparison; an actual forward-error guarantee still needs a rounding and data perturbation bound.

</details>

## Sources

Higham, [Accuracy and Stability of Numerical Algorithms](https://epubs.siam.org/doi/book/10.1137/1.9780898718027), supplies the full Householder QR rounding analysis. Its dimension-dependent error constants and exceptional-value assumptions are external dependencies. Golub and Van Loan, *Matrix Computations*, fourth edition (2013), is further reading for QR and SVD; an exact theorem locator is not asserted. Orthogonal least-squares characterization, reflection unitarity, the conditional real reduced-QR kernel backward-stability theorem and the minimum-norm SVD solution are proved here. The kernel theorem uses the real dot-product and triangular-substitution bounds already proved in [Floating-Point and Factorization](floating-point-and-factorization.md), rather than assuming the full QR factorization theorem. The strengthened Numerical Mathematics direct-methods source is incorporated in [Sparse and Iterative Methods](sparse-and-iterative-methods.md), and the full Frobenius best-rank proof appears in [Eigenvalue Computations](eigenvalue-computations.md).

<a id="looking-backward-and-forward"></a>

## Summary

QR solves a full-rank least-squares problem through orthogonal projection and triangular solution. The residual measures fit while its orthogonality measures optimality. Householder geometry explains the construction. With supplied exact real QR factors, the proved kernel theorem gives explicit backward perturbations for projection and triangular solution; a full computed factorization still needs the cited arithmetic analysis. SVD separates resolved and null directions, supplies a minimum-norm convention and makes numerical rank an explicit threshold decision. The next chapter turns to square-matrix eigenvalues and their sensitivity.
`;export{e as default};