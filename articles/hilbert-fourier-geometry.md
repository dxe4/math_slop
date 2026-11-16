
# From Least Squares to Fourier: Geometry in Function Space

**Before reading.** Read [Outer Measure and Measurability](../books/measure-and-integration/outer-measure-and-measurability.md), [Inner Products and Orthogonal Decomposition](../books/linear-algebra-structure-proofs/inner-products-orthogonal-decomposition.md) and [Sequences, Series, and the Binomial Theorem](../books/algebra-and-functions/sequences-series-binomial-theorem.md). These are preparation for the ideas used below.

The shortest route from elementary least squares to Fourier analysis is a geometric one. Vectors become functions, dot products become integrals, orthogonal coordinates become frequency coefficients, and matrices become operators. Functional analysis asks which finite-dimensional intuitions survive this transition and which require completeness, boundedness, or compactness.

This deep dive assumes inner products, rigorous convergence, and Lebesgue integration. Its central claim is that Fourier approximation is orthogonal projection in a Hilbert space—not merely a formal trigonometric trick.

## Normed spaces, completeness, and Hilbert geometry

A **normed vector space** is a vector space $X$ with a function $\lVert \cdot \rVert$ satisfying positivity, absolute homogeneity, and the triangle inequality. The norm defines a metric $d(x,y)=\lVert x-y\rVert$, so sequences, continuity, and Cauchy completeness become available.

A complete normed space is a **Banach space**. Completeness means a sequence whose terms eventually become mutually close converges to an element still inside the space. It is what permits infinite sums of vectors and successive approximations to define solutions.

An **inner product** adds angle. Over the complex numbers it is conjugate symmetric, positive definite, and linear in one slot (conventions differ about which). Its norm is $\lVert x\rVert=\sqrt{\langle x,x\rangle}$. A complete inner-product space is a **Hilbert space**.

Examples include:

- Euclidean space $R^{n}$ with the dot product;
- $\ell^{2}$, the square-summable sequences, with $\langle x,y\rangle =\sum x_{k} \overline{y_{k}}$;
- $L^{2}([a,b])$, equivalence classes of square-integrable functions, with $\langle f,g\rangle =\int f \overline{g}$.

The phrase “equivalence classes” matters. Functions differing only on a null set are the same $L^{2}$ vector. Consequently, ordinary point evaluation is not even well-defined on $L^{2}$ without choosing representatives.

Not every norm comes from an inner product. A norm does exactly when it satisfies the parallelogram identity

$$\lVert x+y\rVert^{2}+\lVert x-y\rVert^{2}=2\lVert x\rVert^{2}+2\lVert y\rVert^{2}$$

Thus $L^{1}$ and $L\infty$ are Banach spaces but generally not Hilbert spaces.

## Orthogonal projection is best approximation

For a closed linear subspace $M$ of a Hilbert space $H$, the **projection theorem** states that every $x\in H$ has a unique decomposition

$$x=P_{M} x + r$$

where $P_{M} x\in M$ and $r$ is orthogonal to every vector in $M$. The projected vector is the unique closest point in $M$ to $x$.

The Pythagorean identity proves optimality. For any $m\in M$,

$$\lVert x-m\rVert^{2} = \lVert r+(P_{M}x-m)\rVert^{2} = \lVert r\rVert^{2}+\lVert P_{M}x-m\rVert^{2} \ge \lVert r\rVert^{2}$$

Closedness is essential: if the best candidate lies only in the closure of a nonclosed subspace, the distance infimum need not be attained within the subspace.

**Worked example.** **Worked finite-dimensional projection.** Approximate $v=(2,1)$ by a vector on the line spanned by $u=(1,1)$. The coefficient is

$$\langle v,u\rangle /\langle u,u\rangle =3/2$$

Thus $P_{M}v=(3/2,3/2)$. The residual $(1/2,-1/2)$ has dot product zero with $(1,1)$. Its norm is the smallest error achievable by any point on the line.

Least squares uses exactly this condition. If the columns of a matrix span $M$, minimizing $\lVert Ax-b\rVert^{2}$ makes the residual orthogonal to every column, producing the normal equations $A*Ax=A*b$. Numerically one usually prefers QR or singular-value methods over explicitly forming $A*A$, because the normal equations square the condition number.

## Orthonormal coordinates and infinite series

A sequence $(e_{k})$ is orthonormal if $\langle e_{j},e_{k}\rangle $ is 1 when $j=k$ and 0 otherwise. For any finite set of indices, the closest approximation to $f$ in their span is

$$\sum \langle f,e_{k}\rangle  e_{k}$$

Bessel’s inequality says

$$\sum|\langle f,e_{k}\rangle |^{2}\le \lVert f\rVert^{2}$$

If the orthonormal system is complete—its linear span is dense—then Parseval’s identity gives equality, and the orthogonal series converges to $f$ in norm:

$f=\sum\langle f,e_{k}\rangle e_{k}$, with $\lVert f\rVert^{2}=\sum|\langle f,e_{k}\rangle |^{2}$.

Completeness of the system is different from completeness of the space. The former says no nonzero vector is orthogonal to every $e_{k}$; the latter says Cauchy sequences have limits.

## Fourier series as projection

Work in complex $L^{2}([-\pi,\pi])$ with normalized inner product

$$\langle f,g\rangle =(1/(2\pi))\int_{-\pi}^{\pi} f(x)\overline{g(x)} dx$$

The functions $e_{k}(x)=e^{ikx}$ for integers $k$ form an orthonormal basis. The Fourier coefficient is

$$\widehat{f}(k)=\langle f,e_{k}\rangle =(1/(2\pi))\int_{-\pi}^{\pi}f(x)e^{-ikx}dx$$

The partial sum

$$S_{N} f=\sum_{k=-N}^{N} \widehat{f}(k)e^{ikx}$$

is the orthogonal projection of $f$ onto trigonometric polynomials using frequencies from $-N$ through $N$. Therefore it is the unique best $L^{2}$ approximation in that finite-dimensional subspace, and

$$\lVert f-S_{N}f\rVert^{2} = \lVert f\rVert^{2}-\sum_{k=-N}^{N}|\widehat{f}(k)|^{2}$$

Because the trigonometric system is complete, $S_{N}f\to f$ in $L^{2}$ for every $f\in L^{2}$.

This statement is precise but limited: $L^{2}$ convergence does not imply pointwise convergence at every point, uniform convergence, or a visually artifact-free approximation. Two functions equal almost everywhere have zero $L^{2}$ distance even if chosen representatives differ at particular points.

**Worked coefficients.** Let $f(x)=x$ on $(-\pi,\pi)$, extended periodically. It is odd, so its cosine coefficients and mean vanish. With the real sine-series convention,

$$b_{n}=(1/\pi)\int_{-\pi}^{\pi}x \sin(nx)dx=2(-1)^{n+1}/n$$

Hence its Fourier series is

$$2\sum_{n=1}^{\infty}(-1)^{n+1}\sin(nx)/n$$

It converges to $x$ inside $(-\pi,\pi)$ and to the midpoint 0 at the jump points of the periodic extension. In $L^{2}$, the partial sums converge to the equivalence class of $f$ regardless of values assigned at endpoints.

## Convolution turns translation into multiplication of coefficients

For integrable periodic functions on the circle, define normalized convolution

$$(f*g)(x)=(1/(2\pi))\int_{-\pi}^{\pi} f(x-y)g(y)dy$$

Under the standard integrability hypotheses, its Fourier coefficients satisfy

$$\widehat{(f*g)}(k)=\widehat{f}(k)\widehat{g}(k)$$

Convolution averages translated copies of one function using weights from the other. In frequency coordinates, that averaging becomes coordinatewise multiplication. Smooth averaging kernels suppress high-frequency coefficients; approximate identities concentrate near zero while recovering the original function in an appropriate norm.

Ordinary Fourier partial sums can oscillate near jumps. **Fejér means**, the arithmetic averages of the first partial sums, equal convolution with nonnegative Fejér kernels. For every continuous periodic function, these means converge uniformly to the function. For $L^{p}$ functions with $1\le p<\infty$, they converge in $L^{p}$. Averaging improves convergence because the kernels form a positive approximate identity.

An accessible visual is a three-panel description. The first panel is a jagged periodic signal. The second is a row of frequency slots whose heights are $|\widehat{f}(k)|$. The third rebuilds the signal from a symmetric finite set of slots. Adding slots lowers global $L^{2}$ error, though ripples can remain near a jump. A nonvisual equivalent lists $N$, captured energy $\sum|\widehat{f}(k)|^{2}$, residual energy, and the largest observed pointwise error; the last column need not decrease even when residual energy does.

## Bounded operators are the continuous linear maps

A linear map $T:X\to Y$ between normed spaces is **bounded** if some finite $C$ satisfies

$\lVert Tx\rVert\le C\lVert x\rVert$ for every $x$.

For linear maps, boundedness is equivalent to continuity. The smallest valid constant is the operator norm

$$\lVert T\rVert=\sup(\lVert x\rVert\le 1)\lVert Tx\rVert$$

Bounded operators preserve norm limits: if $x_{n}\to x$, then

$$\lVert Tx_{n}-Tx\rVert\le \lVert T\rVert \lVert x_{n}-x\rVert\to 0$$

This one inequality is an abstract limit-interchange theorem.

**Worked functional.** On $L^{2}([0,1])$, define $T(f)=\int_{0}^{1}f(x)dx$. Cauchy–Schwarz gives

$$|T(f)|=|\langle f,1\rangle |\le \lVert f\rVert₂\lVert 1\rVert₂=\lVert f\rVert₂$$

so $T$ is bounded with norm at most 1; equality on $f=1$ shows its norm is exactly 1.

By contrast, point evaluation cannot be a bounded functional on $L^{2}$. It is not well-defined on equivalence classes. Even on continuous representatives, narrow triangular spikes can have value 1 at a point while their $L^{2}$ norms approach zero, contradicting any bound $|f(x₀)|\le C\lVert f\rVert₂$.

The **Riesz representation theorem** for Hilbert spaces says every bounded linear functional $\phi$ has a unique representing vector $g$ such that $\phi(f)=\langle f,g\rangle $. This is a profound self-duality special to Hilbert space; general Banach-space duals can look very different from the original space.

## What infinite dimensions break

In finite-dimensional normed spaces, closed bounded sets are compact and all linear maps are bounded. Both statements fail in infinite dimensions.

In $\ell^{2}$, let $e_{n}$ be the sequence with a 1 in position $n$ and zeros elsewhere. Every $e_{n}$ lies in the closed unit ball, but $\lVert e_{n}-e_{m}\rVert=\sqrt{2}$ for $n\ne m$. No subsequence is Cauchy, so the closed unit ball is not compact.

Compact operators partially restore finite-dimensional behavior: they send bounded sequences to sequences with convergent subsequences. A standard spectral theorem says a compact self-adjoint operator on a Hilbert space has real nonzero eigenvalues and an orthonormal basis of eigenvectors for the closure of its range, together with its kernel. This underlies principal-component and integral-operator approximations, but the compactness and self-adjointness hypotheses cannot simply be omitted.

Completeness also powers the Neumann-series inverse. If $T$ is bounded and $\lVert T\rVert<1$, then

$$(I-T)^{-1}=I+T+T^{2}+\ldots$$

with convergence in operator norm. This is the geometric series reborn as a theorem about solving linear equations in Banach spaces.

## Misconceptions and counterexamples

- **Every Banach space has angles and orthogonal projections.** Inner products are extra structure; $L^{1}$ is not Hilbert.
- **An orthonormal sequence automatically spans the space.** Bessel’s inequality holds, but Parseval equality needs completeness of the system.
- **Fourier convergence in $L^{2}$ is pointwise convergence.** Norm convergence controls mean-square error, not every location.
- **Every linear operator is continuous.** Automatic boundedness holds in finite dimensions, not in arbitrary infinite-dimensional spaces.
- **Closed and bounded implies compact.** The orthonormal sequence in the $\ell^{2}$ unit ball disproves it.
- **Point values are harmless in $L^{2}$.** Elements are equivalence classes modulo null sets.
- **Normal equations are always the best computation.** They express the geometry but may worsen numerical conditioning.

## Exercises with worked answers

### 1. Projection coefficient

<a id="deep-dive-hilbert-fourier-geometry-ex-1"></a>

**Exercise 1.**

Project $v=(1,2,3)$ onto the span of $u=(1,0,1)$.


<details>
<summary>Hint 1</summary>

Projection onto a line is a scalar multiple of its spanning vector.
</details>
<details>
<summary>Hint 2</summary>

Find the scalar by dividing the inner product with u by u’s squared norm; then subtract to check orthogonality.
</details>
<details>
<summary>Solution</summary>

The coefficient is $\langle v,u\rangle /\langle u,u\rangle =4/2=2$, so the projection is $(2,0,2)$. The residual $(-1,2,1)$ has dot product zero with $u$.

</details>

### 2. Bessel bound

<a id="deep-dive-hilbert-fourier-geometry-ex-2"></a>

**Exercise 2.**

If $(e_{k})$ is orthonormal and $\lVert f\rVert=3$, what can be said about $\sum_{k=1}^{20}|\langle f,e_{k}\rangle |^{2}$?


<details>
<summary>Hint 1</summary>

Bessel’s inequality controls the sum of squared coefficients for an orthonormal family.
</details>
<details>
<summary>Hint 2</summary>

Compare that sum with the square of the given norm; equality needs completeness in the relevant subspace.
</details>
<details>
<summary>Solution</summary>

Bessel’s inequality bounds it by $\lVert f\rVert^{2}=9$. No equality is guaranteed unless the chosen vectors capture all of $f$.

</details>

### 3. A bounded multiplication operator

On $L^{2}([0,1])$, let $(Tf)(x)=x f(x)$. Find $\lVert T\rVert$.

**Answer.** Since $|x|\le 1$, $\lVert Tf\rVert₂\le \lVert f\rVert₂$, so $\lVert T\rVert\le 1$. Functions concentrated near 1 make the ratio $\lVert Tf\rVert₂/\lVert f\rVert₂$ arbitrarily close to 1, so $\lVert T\rVert=1$; no single point value is needed.

### 4. Fourier energy

Under the normalized circle convention, suppose the only nonzero Fourier coefficients of $f$ are $\widehat{f}(0)=2$, $\widehat{f}(1)=1$, and $\widehat{f}(-1)=1$. Find $\lVert f\rVert₂^{2}$.

**Answer.** Parseval gives $\lVert f\rVert₂^{2}=|2|^{2}+|1|^{2}+|1|^{2}=6$.

### 5. Why closedness matters

Let $M$ be the finite-support sequences inside $\ell^{2}$. Is every $x\in \ell^{2}$ guaranteed a closest point in $M$?

**Answer.** No. The subspace $M$ is dense but not closed. If $x$ has infinitely many nonzero coordinates, truncations in $M$ approach it with distance tending to zero, but no element of $M$ equals it. The infimum distance zero is not attained.

### 6. Neumann series

If $\lVert T\rVert\le 1/3$, bound the operator-norm error after truncating $(I-T)^{-1}$ at $I+T+\ldots+T^{N}$.

**Answer.** The tail norm is at most $\sum_{k=N+1}^{\infty}\lVert T\rVert^{k}\le (1/3)^{N+1}/(1-1/3)=(3/2)(1/3)^{N+1}$.

## Connections and next steps

The entry ladder now branches by purpose. For approximation, continue to orthogonal polynomials, wavelets, and numerical least squares. For equations, study bounded, compact, and unbounded operators plus weak convergence. For signals and partial differential equations, continue from convolution and Fourier multipliers into harmonic analysis. For probability, view conditional expectation as an $L^{2}$ projection onto a closed subspace of measurable information.

The companion Fourier visual laboratory makes coefficients audible and visible. This chapter supplies its guarantee: adding orthogonal modes optimally reduces $L^{2}$ error, while pointwise artifacts require separate analysis.
