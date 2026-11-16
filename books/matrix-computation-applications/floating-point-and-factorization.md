
# Floating-Point and Factorization

Floating-point arithmetic is not real arithmetic. Addition is not associative, subtraction of nearby numbers cancels digits, and overflow and underflow can occur even when the final exact result is moderate. This chapter reviews the IEEE-754 model, introduces stable summation and norm computation, and then develops LU and Cholesky factorizations with an eye toward what can go wrong and how to detect it.

## The floating-point model

In IEEE-754 binary64 (double precision), a normalized floating-point number has the form

$$
\pm (1.m_{1}m_{2}\dots m_{52})_{2} \times 2^{e},
\qquad -1022 \le e \le 1023.
$$

In this book, $\varepsilon_{\text{mach}}$ means the binary64 **unit roundoff**, $u=2^{-53}\approx 1.11\times10^{-16}$. The spacing from $1$ to the next larger binary64 number is $2^{-52}=2u$. The model of arithmetic is

$$
\text{fl}(a \circ b) = (a \circ b)(1 + \delta),
\qquad |\delta| \le \varepsilon_{\text{mach}},
$$

for $\circ \in \{+, -, \times, /\}$, barring overflow or underflow. This simple model is enough to derive rigorous error bounds for most factorizations.

## Stable vector operations

**Naive norm computation.** To compute $\lVert x \rVert_{2} = \sqrt{\sum_{i} x_{i}^{2}}$, the naive loop can overflow even when the norm is moderate. If $s=\max_i|x_i|$ is positive, scale before squaring:

$$
\lVert x \rVert_{2} = s \sqrt{\sum_{i} (x_{i}/s)^{2}}.
$$

If $s=0$, the vector is zero and its norm is returned as zero without forming $x_i/s$.

All scaled summands lie in $[0,1]$, avoiding overflow in the individual squares. The final rescaling still overflows if the true norm exceeds the format's range, and underflow of very small scaled terms must be assessed against the required accuracy. An implementation must also accumulate the sum safely.

**Dot products.** The error in a length-$n$ dot product computed by straightforward accumulation is bounded by $n \varepsilon_{\text{mach}} |x|^{T} |y|$ in first-order analysis. Pairwise summation or compensated summation (Kahan's algorithm) can reduce the constant but cannot restore information absent from the inputs.

## LU factorization with partial pivoting

Gaussian elimination factors a nonsingular matrix $A$ as $PA = LU$, where $P$ is a permutation matrix, $L$ is unit lower triangular, and $U$ is upper triangular. Partial pivoting selects the largest entry in the current column as the pivot, ensuring that all multipliers satisfy $|l_{ij}| \le 1$.

The factorization costs approximately $(2/3)n^{3}$ floating-point operations. Once computed, solving $Ly = Pb$ and $Ux = y$ by forward and backward substitution costs $2n^{2}$ operations per right-hand side. Reusing the factors is therefore essential when multiple systems must be solved.

**Growth factor.** The stability of LU depends on the growth factor

$$
\rho = \frac{\max_{i,j} |u_{ij}|}{\max_{i,j} |a_{ij}|}.
$$

For partial pivoting, $\rho \le 2^{n-1}$ in the worst case, while observed growth is often modest. No uniform linear worst-case bound is asserted. Complete pivoting has stronger worst-case growth bounds at the cost of more pivot searching. These general growth results are cited from Higham's elimination analysis rather than proved here.

**Do not form $A^{-1}$.** Computing the explicit inverse costs $2n^{3}$ operations and generally worsens the error pathway. Solve $Ax = b$ by forward and backward substitution instead. The inverse is appropriate only when the inverse itself is the requested object.

## Cholesky factorization

If $A$ is real symmetric positive definite (SPD), there exists a unique lower triangular $L$ with positive diagonal entries such that $A = LL^{T}$. Over $\mathbb{C}$, the hypothesis is Hermitian positive definite and the factorization is $A = LL^{*}$.

The algorithm is a specialization of Gaussian elimination. For each $j$,

$$
l_{jj} = \sqrt{a_{jj} - \sum_{k=1}^{j-1} l_{jk}^{2}},
\qquad
l_{ij} = \frac{1}{l_{jj}}\left(a_{ij} - \sum_{k=1}^{j-1} l_{ik} l_{jk}\right),
\quad i > j.
$$

Positive definiteness guarantees that every radicand is positive in exact arithmetic. The cost is approximately $(1/3)n^{3}$ operations, half that of LU.

**Symmetry is insufficient.** The matrix $\operatorname{diag}(1, -1)$ is symmetric but indefinite. No real $L$ satisfies $A = LL^{T}$ because $x^{T}LL^{T}x = \lVert L^{T}x \rVert_{2}^{2} \ge 0$ for all $x$. Indefinite symmetric systems require a pivoted $LDL^{T}$ factorization or another specialized solver.

## Example: LU with partial pivoting

**Example 2.1 (Worked calculation).**

Let

$$
A = \begin{pmatrix}
2 & 1 & 1 \\
4 & 3 & 3 \\
8 & 7 & 9
\end{pmatrix},
\quad
b = \begin{pmatrix} 4 \\ 10 \\ 24 \end{pmatrix}.
$$

Step 1: the largest entry in column 1 is $8$ in row 3, so swap rows 1 and 3:

$$
P_{1}A = \begin{pmatrix}
8 & 7 & 9 \\
4 & 3 & 3 \\
2 & 1 & 1
\end{pmatrix}.
$$

Eliminate below the pivot: multipliers $l_{21} = 4/8 = 1/2$, $l_{31} = 2/8 = 1/4$.

$$
A^{(1)} = \begin{pmatrix}
8 & 7 & 9 \\
0 & -1/2 & -3/2 \\
0 & -3/4 & -5/4
\end{pmatrix}.
$$

Step 2: in column 2 below the diagonal, the largest entry is $-3/4$ in row 3, so swap rows 2 and 3:

$$
P_{2}A^{(1)} = \begin{pmatrix}
8 & 7 & 9 \\
0 & -3/4 & -5/4 \\
0 & -1/2 & -3/2
\end{pmatrix}.
$$

Multiplier $l_{32} = (-1/2)/(-3/4) = 2/3$.

$$
U = \begin{pmatrix}
8 & 7 & 9 \\
0 & -3/4 & -5/4 \\
0 & 0 & -2/3
\end{pmatrix}.
$$

The unit lower triangular factor is

$$
L = \begin{pmatrix}
1 & 0 & 0 \\
1/4 & 1 & 0 \\
1/2 & 2/3 & 1
\end{pmatrix},
$$

and $P = P_{2}P_{1}$ swaps rows 1 and 3, then rows 2 and 3. Solving $Ly = Pb$ gives $y = (24, -2, -2/3)^{T}$, and solving $Ux = y$ gives $x = (1, 1, 1)^{T}$.

## Common errors and misconceptions

**Error: testing a determinant for exact zero.** A computed determinant of a nonsingular matrix can underflow, overflow, or round to zero after cancellation. Use a rank-revealing factorization or a condition estimate with a tolerance tied to the norm and problem scale.

**Error: ignoring pivot growth.** If the entries of $U$ are vastly larger than those of $A$, the factorization may be unstable even with partial pivoting. Monitor the growth factor and switch to complete pivoting or iterative refinement if necessary.

**Error: assuming Cholesky succeeds on any symmetric matrix.** Exact Cholesky requires positive definiteness. A nonpositive computed pivot means the input is not numerically certified SPD at the working precision; investigate symmetry, scaling, near-singularity, and rounding before deciding whether the mathematical matrix is indefinite or the computation needs a more robust method.

## What the rounding model does and does not say

**Definition 2.2 (Unit roundoff and a rounding budget).** For round-to-nearest arithmetic, $u$ bounds the relative rounding of an exactly representable-range normal result. Set
$$
\gamma_k=\frac{ku}{1-ku}\qquad(ku<1).
$$
We use this quantity to track accumulated elementary rounding. It depends on both precision and operation count. A statement that an algorithm has error “of order $u$” hides constants, dimensions, and possible growth factors.

The relative model requires a finite exact result in its valid range. Gradual underflow supports a useful absolute-error bound for subnormal results, but not the same uniform relative bound near zero. Overflow returns a nonfinite result or raises an exception under the relevant environment. Neither behavior can be repaired by a proof that assumed the relative model throughout. Input conversion, including decimal-to-binary conversion, is another perturbation and must be included when the mathematical data are intended to be exact decimal values.

**Lemma 2.3 (Products of rounding factors).** If $|\delta_j|\le u$ for $j=1,\ldots,k$ and $ku<1$, then
$$
\left|\prod_{j=1}^k(1+\delta_j)-1\right|\le\gamma_k.
$$

*Proof.* The product is at most $(1+u)^k$. By induction,
$(1+u)^k\le1/(1-ku)$: multiplication of the induction bound by $1+u$ is bounded by $1/(1-(k+1)u)$ because
$(1+u)(1-(k+1)u)\le1-ku$.
The product is at least $(1-u)^k\ge1-ku$, by Bernoulli's inequality, which itself follows by induction. Its deviation below one is at most $ku\le\gamma_k$, and its deviation above one is at most $1/(1-ku)-1=\gamma_k$. $\square$

For sequential summation, expand each rounded partial sum into the original inputs multiplied by the rounding factors encountered afterward. Each input passes through at most $n-1$ additions. The lemma therefore yields
$$
|\widehat s-\textstyle\sum_i x_i|
\le\gamma_{n-1}\sum_i|x_i|.
$$
This is a backward interpretation: the computed sum is the exact sum of independently perturbed terms, each with relative perturbation bounded by $\gamma_{n-1}$. The relative error in the sum also involves $\sum|x_i|/|\sum x_i|$ when the exact sum is nonzero. Cancellation makes that condition number large; it does not invalidate the absolute bound.

The same expansion for a dot product includes the product rounding and subsequent additions. A safe bound under the elementary model is
$$
|\operatorname{fl}(x^Ty)-x^Ty|
\le\gamma_n |x|^T|y|,\qquad nu<1.
$$
Each term meets at most $n$ factors, which proves the inequality by the lemma. Pairwise summation shortens the addition path to logarithmic depth, but the products still round. Compensated algorithms require their own analysis; their purpose is to reduce accumulation error rather than change the conditioning of the mathematical dot product.

## A complete backward-error proof for substitution

**Theorem 2.4 (Triangular substitution).** Let $T\in\mathbb R^{n\times n}$ be upper triangular with nonzero diagonal. Compute backward substitution by ordinary products, sequential subtraction, and division. Assume all operations obey the relative model and $nu<1$. Then the computed vector $\widehat x$ satisfies
$$
(T+E)\widehat x=b,\qquad |E|\le\gamma_n|T|.
$$
The inequality is entrywise, and $E$ is upper triangular.

*Proof.* Fix a row $i$. Start an accumulator at $b_i$, subtract the products $t_{ij}\widehat x_j$ for $j>i$, and divide the final accumulator by $t_{ii}$. In the expanded expression each product has its own multiplication factor and the later subtraction factors. Divide through by the accumulator factors multiplying $b_i$, and move the other terms to the opposite side. The resulting exact row equation has the form
$$
b_i=t_{ii}\widehat x_i(1+\theta_{ii})
+\sum_{j>i}t_{ij}\widehat x_j(1+\theta_{ij}).
$$
Each coefficient is a product of at most $n$ elementary factors, some reciprocal. A reciprocal factor $1/(1+\delta)$ may be bounded together with the other factors by the standard signed-product bound
$|\prod_{\ell=1}^{k}(1+\delta_\ell)^{s_\ell}-1|\le\gamma_k$ for $s_\ell=\pm1$, $ku<1$.
To justify that bound directly, the product lies between $(1-u)^k$ and $(1-u)^{-k}$ after enclosing each factor by $[1-u,(1-u)^{-1}]$. Bernoulli gives $(1-u)^k\ge1-ku$, so the endpoints deviate from one by at most $\gamma_k$. Thus $|\theta_{ij}|\le\gamma_n$. Put $E_{ij}=t_{ij}\theta_{ij}$ for $j\ge i$, and zero below the diagonal. These row equations are exactly the asserted perturbed system. $\square$

The theorem concerns the triangular matrix actually supplied to substitution. To analyze an LU solve, one must also account for the error in the factors and the propagation through the two solves. The classical componentwise factorization result bounds the matrix perturbation by a multiple of $u|\widehat L||\widehat U|$, with dimension-dependent constants, provided the algorithm completes and the arithmetic model applies. Higham gives the full general factorization analysis. We cite that result rather than treating the short substitution proof as a proof of every pivoted LU implementation.

Partial pivoting bounds multipliers, but it does not uniformly bound the size of the later entries by a small constant independent of dimension. Large growth can therefore make the final perturbation appreciable. A backward-error theorem conditional on growth and a measured small residual for one solve are both useful evidence; neither is a universal assertion that all Gaussian elimination runs are equally accurate.

## Why Cholesky exists

**Theorem 2.5 (Positive Schur complements and Cholesky).** Every real SPD matrix has a unique lower triangular factor $L$ with positive diagonal such that $A=LL^T$.

*Proof.* The statement is immediate in dimension one. Partition an SPD matrix as
$$
A=\begin{pmatrix}a&c^T\\c&B\end{pmatrix}.
$$
The first principal entry $a$ is positive. For nonzero $z$, choose $w=(-c^Tz/a,z)^T$. Direct multiplication gives
$$
w^TAw=z^T(B-cc^T/a)z>0.
$$
Thus the Schur complement $S=B-cc^T/a$ is SPD. By induction $S=GG^T$ with positive diagonal in $G$, and
$$
L=\begin{pmatrix}\sqrt a&0\\c/\sqrt a&G\end{pmatrix}
$$
satisfies $LL^T=A$. For uniqueness, the first equation forces $l_{11}=\sqrt a$ and the first-column equations force the remaining first-column entries. The rest is the unique factor of $S$ by induction. $\square$

Subtracting a positive semidefinite matrix from an SPD matrix does not generally preserve positive definiteness: $I-2I=-I$. The Schur-complement proof succeeds because the subtracted term and the original blocks come from the same SPD matrix. This dependence is the substantive hypothesis behind block Cholesky as well.

The theorem is an existence and exact-arithmetic correctness proof. A finite-precision Cholesky routine can encounter a nonpositive computed pivot for an SPD matrix sufficiently close to singularity relative to rounding and data uncertainty. A stable successful factorization can certify that a nearby matrix is positive definite. Whether that nearby statement proves definiteness of the intended exact input requires an error margin, not merely the absence of a software exception.

**Example 2.6 (A norm whose squares overflow).** Take $x=(3\times10^{200},4\times10^{200})^T$ in a format with binary64's approximate exponent range. The exact norm is $5\times10^{200}$, which is within that range, but the individual squares have magnitude around $10^{401}$ and overflow. Scaling by $s=4\times10^{200}$ gives
$$
\|x\|_2=s\sqrt{(3/4)^2+1}
=(4\times10^{200})(5/4)=5\times10^{200}.
$$
The argument establishes range safety of the displayed intermediate values; actual final digits still depend on rounding. An algorithm that first forms the overflowing squares has already lost the information that later addition and square root would need.

**Example 2.7 (Factor once, solve with evidence).** For
$$
A=\begin{pmatrix}1&2\\2&5\end{pmatrix},\qquad b=(3,7)^T,
$$
the Schur complement is $5-2^2=1>0$, so
$L=\begin{pmatrix}1&0\\2&1\end{pmatrix}$. Forward substitution gives $y=(3,1)^T$, and solving $L^Tx=y$ gives $x=(1,1)^T$. Recompute $Ax=(3,7)^T$ to obtain residual zero in exact arithmetic. The eigenvalues are $3\pm2\sqrt2$, so $\kappa_2(A)=(3+2\sqrt2)/(3-2\sqrt2)\approx33.97$. A small computed backward error therefore has a finite amplification scale that should be included in a forward-error assessment.

These examples show why arithmetic range, accumulated rounding, and problem conditioning deserve separate checks. Increasing precision can reduce $u$ and enlarge an exponent range, but changing an algorithm can avoid a bad intermediate entirely. Factorization reuse reduces work without weakening the obligation to recompute a residual for each new right-hand side.

The small-pivot example in the exercises is not intrinsically an ill-conditioned family. For the matrix with rows (ε,1) and (1,1), with ε positive and at most one-half, the infinity norm is two. Its inverse has rows (1,−1) and (−1,ε), divided by ε−1. The inverse infinity norm is therefore at most four, so the condition number is at most eight throughout this range. Nevertheless no-pivot elimination creates a multiplier of size one over ε and unbounded element growth. This separates a problem's uniformly bounded sensitivity from an algorithm's growing intermediate values using explicit bounds on the same matrix family.

## Practice exercises with solutions

### Exercise 3.1
<a id="floating-point-and-factorization-ex-1"></a>

Compute the Cholesky factorization of

$$
A = \begin{pmatrix}
4 & 2 & 4 \\
2 & 5 & 6 \\
4 & 6 & 14
\end{pmatrix}.
$$

<details>
<summary>Hint 1</summary>

**Hint.** Use the Cholesky formulas in column order.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** After determining the first two columns, compute the final diagonal radicand.

</details>
<details>
<summary>Solution</summary>

**Solution.** $l_{11} = \sqrt{4} = 2$.

$l_{21} = 2/2 = 1$, $l_{31} = 4/2 = 2$.

$l_{22} = \sqrt{5 - 1^{2}} = \sqrt{4} = 2$.

$l_{32} = (6 - 2 \cdot 1)/2 = 4/2 = 2$.

$l_{33} = \sqrt{14 - (2^{2} + 2^{2})} = \sqrt{14 - 8} = \sqrt{6}$.

Thus

$$
L = \begin{pmatrix}
2 & 0 & 0 \\
1 & 2 & 0 \\
2 & 2 & \sqrt{6}
\end{pmatrix},
\qquad
A = LL^{T}.
$$

</details>

### Exercise 3.2
<a id="floating-point-and-factorization-ex-2"></a>

Explain why the growth factor for the matrix

$$
A = \begin{pmatrix}
\varepsilon & 1 \\
1 & 1
\end{pmatrix},
\qquad 0 < \varepsilon \ll 1,
$$

can be large without pivoting, and how partial pivoting fixes it.

<details>
<summary>Hint 1</summary>

**Hint.** Write the first multiplier and trailing update.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare the magnitudes before and after swapping rows.

</details>
<details>
<summary>Solution</summary>

**Solution.** Without pivoting, the pivot is $\varepsilon$, the multiplier is $1/\varepsilon$, and the updated entry is $1 - 1/\varepsilon \approx -1/\varepsilon$, so the growth factor is $\approx 1/\varepsilon$. With partial pivoting, rows are swapped so the pivot is $1$, the multiplier is $\varepsilon$, and the updated entry is $1 - \varepsilon$, so the growth factor is $O(1)$.

</details>

### Exercise 3.3
<a id="floating-point-and-factorization-ex-3"></a>

A symmetric matrix has eigenvalues $-2$, $1$, and $5$. Can Cholesky factorization be applied?

<details>
<summary>Hint 1</summary>

**Hint.** Use the quadratic-form characterization of positive definiteness.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A negative eigenvector gives a negative quadratic form.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. The presence of a negative eigenvalue means the matrix is indefinite, not positive definite. Exact unpivoted Cholesky cannot complete with positive pivots; it encounters a nonpositive radicand or an earlier zero-pivot breakdown. A pivoted $LDL^{T}$ factorization is the appropriate alternative.

</details>

### Exercise 3.4
<a id="floating-point-and-factorization-ex-4"></a>

Count the floating-point operations required to solve $Ax = b$ for $k$ right-hand sides using LU factorization.

<details>
<summary>Hint 1</summary>

**Hint.** Separate factorization cost from the two triangular solves.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Multiply the solve cost by the number of right-hand sides.

</details>
<details>
<summary>Solution</summary>

**Solution.** Factorization costs $(2/3)n^{3} + O(n^{2})$. Each forward and backward substitution costs $2n^{2}$. For $k$ right-hand sides the total is $(2/3)n^{3} + 2kn^{2} + O(n^{2})$. For large $k$, the factorization cost is amortized.

</details>

### Exercise 2.5 — Accumulation budget
<a id="floating-point-and-factorization-ex-5"></a>

For $u=10^{-7}$ and $n=1000$, compute $\gamma_n$ and bound a dot-product error when $|x|^T|y|=20$.

<details>
<summary>Hint 1</summary>

**Hint.** Substitute into the definition without dropping the denominator.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Multiply the resulting bound by20.

</details>
<details>
<summary>Solution</summary>

**Solution.** Here $nu=10^{-4}$, so $\gamma_n=10^{-4}/0.9999\approx1.00010001\times10^{-4}$. The absolute dot-product error is at most about $0.00200020002$, under the stated arithmetic hypotheses. A relative dot-product bound would additionally divide by the magnitude of the exact dot product.

</details>

### Exercise 2.6 — Cancellation in a sum
<a id="floating-point-and-factorization-ex-6"></a>

The exact sum of $(1,-1+10^{-8})$ is $10^{-8}$. Find the summation condition number and explain the difference between small input-relative perturbations and small sum-relative error.

<details>
<summary>Hint 1</summary>

**Hint.** Compute the sum of absolute input magnitudes.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Divide by the exact sum magnitude.

</details>
<details>
<summary>Solution</summary>

**Solution.** The condition number is $(2-10^{-8})/10^{-8}=2\times10^8-1$. Small relative changes in the two order-one inputs can cause much larger relative changes in their tiny sum. The backward bound controls perturbations to those inputs, not a uniformly tiny relative error in every cancellation-dominated result.

</details>

### Exercise 2.7 — A Schur-complement nonexample
<a id="floating-point-and-factorization-ex-7"></a>

Give SPD $B$ and positive semidefinite $H$ for which $B-H$ is not SPD. Explain why this does not contradict Cholesky.

<details>
<summary>Hint 1</summary>

**Hint.** Use scalar multiples of the identity.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Identify the missing relationship to an SPD block matrix.

</details>
<details>
<summary>Solution</summary>

**Solution.** Take $B=I$ and $H=2I$. Then $B-H=-I$ is negative definite. Cholesky uses the special complement of a single SPD block matrix, for which the quadratic-form proof applies; arbitrary subtraction has no such guarantee.

</details>

### Exercise 2.8 — A backward substitution certificate
<a id="floating-point-and-factorization-ex-8"></a>

Let $T=\begin{pmatrix}2&1\\0&4\end{pmatrix}$, $b=(3,4)^T$, and $\widehat x=(0.9,1)^T$. Find a diagonal perturbation $E$ with $(T+E)\widehat x=b$.

<details>
<summary>Hint 1</summary>

**Hint.** The second equation is already exact.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Change only the first diagonal entry.

</details>
<details>
<summary>Solution</summary>

**Solution.** The first row requires $(2+E_{11})0.9+1=3$, so $E_{11}=2/0.9-2=2/9$. Set $E_{22}=0$. This is a backward certificate for this output, but its size is far larger than a binary64 rounding budget; it does not demonstrate a stable run.

</details>

### Exercise 2.9 — Growth without pivoting
<a id="floating-point-and-factorization-ex-9"></a>

For $A=\begin{pmatrix}\epsilon&1\\1&1\end{pmatrix}$, $0<\epsilon<1/2$, compute exact no-pivot $L,U$ and bound the growth factor from below.

<details>
<summary>Hint 1</summary>

**Hint.** The multiplier is $1/\epsilon$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The last pivot is $1-1/\epsilon$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The factors are $L=\begin{pmatrix}1&0\\1/\epsilon&1\end{pmatrix}$ and $U=\begin{pmatrix}\epsilon&1\\0&1-1/\epsilon\end{pmatrix}$. Since the maximum original entry is1, $\rho\ge1/\epsilon-1>1/(2\epsilon)$. The small leading pivot creates large intermediate values despite moderate original entries.

</details>

### Exercise 2.10 — Hermitian Cholesky
<a id="floating-point-and-factorization-ex-10"></a>

Factor $A=\begin{pmatrix}2&i\\-i&2\end{pmatrix}$ as $LL^*$ with positive real diagonal.

<details>
<summary>Hint 1</summary>

**Hint.** Conjugation changes the sign of the off-diagonal imaginary entry.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compute the Schur complement $2-|l_{21}|^2$.

</details>
<details>
<summary>Solution</summary>

**Solution.** Take $l_{11}=\sqrt2$, $l_{21}=-i/\sqrt2$, and $l_{22}=\sqrt{3/2}$. Then $L=\begin{pmatrix}\sqrt2&0\\-i/\sqrt2&\sqrt{3/2}\end{pmatrix}$ gives $LL^*=A$. The positive complement $3/2$ also proves this Hermitian matrix is positive definite by the same block argument.

</details>

<a id="looking-backward-and-forward"></a>

## Connections

This chapter connected floating-point behavior to the stability of LU and Cholesky factorizations. The next chapter, *Conditioning and Stability*, connects the arithmetic perturbations to problem sensitivity; QR, least squares, and SVD follow the block-factorization chapter.

## Sources

- Lloyd N. Trefethen and David Bau III, [Numerical Linear Algebra](https://doi.org/10.1137/1.9780898719574), SIAM, 1997.
- Gene H. Golub and Charles F. Van Loan, [Matrix Computations](https://doi.org/10.56021/9781421407944), fourth edition, Johns Hopkins University Press, 2013.
- Nicholas J. Higham, [Accuracy and Stability of Numerical Algorithms](https://doi.org/10.1137/1.9780898718027), second edition, SIAM, 2002.

The exposition, proofs, and worked calculations in this chapter are original to Euler; these references provide further reading and the stated specialist results.

## Summary

The rounding model gives useful results only with explicit range assumptions and operation counts. Gamma bounds explain stable accumulation and triangular substitution; pivot growth enters a full LU analysis. Positive Schur complements establish Cholesky's exact correctness, while computed success and failure require error margins. The next chapter turns these backward perturbations into statements about the accuracy of a solution.
