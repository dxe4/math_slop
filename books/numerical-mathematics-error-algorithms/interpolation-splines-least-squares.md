
# Interpolation, Splines, and Least Squares

## Three questions that look alike

Given values \((x_i,y_i)\), we might ask for a function that passes through every point, one that approximates an underlying function uniformly, or one that balances noisy discrepancies. These are different mathematical problems:

- **interpolation:** require \(p(x_i)=y_i\);
- **approximation:** minimize a stated norm of \(f-p\);
- **regression or smoothing:** optimize a data-loss plus assumptions or penalties.

This chapter assumes polynomials, derivatives, and elementary inner products. It treats the data as specified numbers; statistical uncertainty requires an additional sampling model.

## Polynomial interpolation and uniqueness

**Theorem 4.2.** At \(n+1\) distinct nodes, exactly one polynomial of degree at most \(n\) interpolates arbitrary prescribed values.

**Proof.** Existence follows from the Lagrange formula

\(p(x)=\sum_{i=0}^n y_i L_i(x)\),

where \(L_i(x)=\prod_{j\ne i} (x-x_j)/(x_i-x_j)\). Each basis polynomial is one at its own node and zero at every other node. For uniqueness, the difference of two interpolants has \(n+1\) distinct zeros but degree at most \(n\); therefore it is the zero polynomial.

The theorem is exact. It says nothing about stable evaluation or small error between nodes.

### Worked quadratic

**Example 4.0 (Newton-form quadratic interpolation).**

Interpolate \((0,1)\), \((1,2)\), \((2,5)\). Newton divided differences are

\(f[0]=1\), \(f[0,1]=1\), and \(f[0,1,2]=1\).

Thus \(p(x)=1+x+x(x-1)=x^{2}+1\). The intermediate form is useful because a new node can extend it without rebuilding every coefficient.

## Error has a geometric factor

**Interpolation remainder.** If \(f\) has \(n+1\) continuous derivatives on an interval containing the nodes and evaluation point \(x\), then for some \(\xi\) in the interval,

\(f(x)-p(x)=f^{(n+1)}(\xi)/(n+1)! \prod_{i=0}^n (x-x_i)\).

The hypotheses include smoothness and distinct nodes. The bound separates a function factor from a node-geometry factor. Increasing degree can increase both the derivative magnitude and the product near interval ends.

The **Runge phenomenon** is not the statement that high-degree polynomials are intrinsically bad. It is that global interpolation at equally spaced nodes can diverge near endpoints even for a smooth function such as \(1/(1+25x^{2})\). Clustered Chebyshev-like nodes control the maximum node product and reduce the growth of the interpolation operator.

## Stable evaluation matters

Expanding an interpolant in monomials can create enormous coefficients that cancel at evaluation. The barycentric formula evaluates the same interpolating polynomial as

\(p(x)= [\sum w_i y_i/(x-x_i)]/[\sum w_i/(x-x_i)]\),

where \(w_i=1/\prod_{j\ne i}(x_i-x_j)\).

At a node, return the stored datum directly rather than divide by zero. Scaling all weights by a common nonzero factor changes neither result. For common node families, specialized weights avoid avoidable overflow.

The **Lebesgue function** \(\Lambda(x)=\sum_i \lvert \ell_i(x)\rvert\) measures how perturbations in data values can be amplified at \(x\); its maximum is a condition number for interpolation in the uniform norm. Node choice changes the problem conditioning, while barycentric evaluation addresses algorithmic stability.

## Piecewise polynomials and splines

A cubic spline uses a cubic on each interval, joins function values, and usually matches first and second derivatives at internal knots. Two additional boundary conditions are needed. A **natural spline** sets endpoint second derivatives to zero; a **clamped spline** specifies endpoint slopes; a not-a-knot convention removes a break in the third derivative near each end.

These choices are not interchangeable formatting details. They encode different boundary behavior. Cubic splines are local: changing one datum typically has much less global effect than changing a coefficient of a high-degree global interpolant.

**Shape warning.** Ordinary cubic splines can overshoot positive or monotone data. Shape-preserving piecewise cubics modify slopes to preserve selected monotonicity. Smoothness alone does not preserve scientific constraints.

## Least squares as orthogonal projection

Let basis functions \(\phi_0,\ldots,\phi_m\) span a subspace \(V\) of an inner-product space. The best approximation \(p\) minimizes \(\lVert f-p\rVert\) exactly when the residual is orthogonal to every basis direction:

\(\langle f-p,\phi_j\rangle=0\) for every \(j\).

**Theorem 4.4 (Projection).** In a finite-dimensional subspace of an inner-product space, a unique closest point exists, and its residual is orthogonal to the subspace.

**Proof sketch.** If \(f=p+r\) with \(r\) orthogonal to \(V\), then for any \(v\) in \(V\),

\(\lVert f-v\rVert^{2}=\lVert r+(p-v)\rVert^{2}=\lVert r\rVert^{2}+\lVert p-v\rVert^{2}\).

The minimum is uniquely attained at \(v=p\).

For discrete data, a design matrix \(A\) gives \(\min \lVert Ac-y\rVert_2\). The normal equations \(A^{\mathsf T} A c=A^{\mathsf T} y\) express residual orthogonality but square the 2-norm condition number. QR or SVD is generally safer when conditioning matters.

### Worked line fit

**Example 4.5 (A line fitted by least squares).**

Fit \(a+bx\) to \((0,1),(1,2),(2,2)\). The normal equations are

\(3a+3b=5\), \(3a+5b=6\).

Subtracting gives \(2b=1\), so \(b=1/2\) and \(a=7/6\). Residuals are \(-1/6, 1/3, -1/6\); they sum to zero and their dot product with the x-coordinates is zero, verifying orthogonality to both design columns.

## Approximation norms change the answer

Least squares minimizes energy-like average squared error. Uniform approximation minimizes the maximum absolute deviation. The minimax polynomial has an equioscillation characterization under suitable conditions; it need not equal an interpolant or a least-squares solution. \(L^1\) approximation emphasizes total absolute deviation and may be nonunique.

Before selecting an algorithm, state which norm represents the decision. A curve with smaller mean-square error can have a worse peak error near a safety boundary.

## Common errors

- Treating exact interpolation as recovery of a true law from noisy data.
- Blaming evaluation code for a badly conditioned node set, or vice versa.
- Assuming more degree always improves an interpolant.
- Using normal equations without checking rank and conditioning.
- Claiming that a smooth spline preserves monotonicity, positivity, or convexity automatically.

## Why the interpolation remainder has its stated form

**Theorem 4.1 (Remainder, with proof).** Let $x_0,\ldots,x_n$ be distinct real nodes in a nondegenerate closed interval, let the evaluation point $x$ belong to that interval, and suppose $f\in C^{n+1}$ there. For the degree-at-most-$n$ interpolant $p$, there is a point $\xi$ in the interval such that
\[
f(x)-p(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}\omega(x),
\qquad \omega(t)=\prod_{j=0}^n(t-x_j).
\]

*Proof.* If $x$ is a node, both sides vanish. Otherwise choose $K=[f(x)-p(x)]/\omega(x)$ and define $F(t)=f(t)-p(t)-K\omega(t)$. It vanishes at the $n+1$ distinct nodes and at the additional point $x$. Repeated application of Rolle's theorem gives a point $\xi$ between the smallest and largest of those points where $F^{(n+1)}(\xi)=0$. Since $p^{(n+1)}=0$ and the monic degree-$n+1$ polynomial $\omega$ has derivative $(n+1)!$ at that order, this equality says $K=f^{(n+1)}(\xi)/(n+1)!$. Substitute the definition of $K$. ∎

The intermediate point can depend on $x$. The theorem does not allow a single computed derivative sample to replace a uniform derivative bound. If $|f^{(n+1)}|\le M$ throughout the interval, then the absolute error is at most $M|\omega(x)|/(n+1)!$. Distinct nodes give a unique interpolant regardless of their geometry, but the size of this node product and the amplification of data errors still depend on the geometry.

**Example 4.2 (A proved one-point bound).** Interpolate $f(t)=e^t$ at zero and one by the secant $p(t)=1+(e-1)t$. At $t=1/2$, the node product is $-1/4$ and the second derivative is positive and bounded by $e$ on $[0,1]$. Thus
\[
0<p(1/2)-e^{1/2}\le e/8.
\]
The sign follows from the remainder, not from rounded decimal comparisons. This is an interpolation bound for exact node values; uncertainty in those values contributes a separate term.

## Deriving the barycentric expression

For $x$ different from all nodes, the Lagrange polynomial satisfies $\ell_i(x)=\omega(x)w_i/(x-x_i)$ with $w_i=1/\prod_{j\ne i}(x_i-x_j)$. Interpolating the constant function one gives $\sum_i\ell_i(x)=1$, so $\sum_iw_i/(x-x_i)=1/\omega(x)$. Dividing the data expansion by that identity gives the barycentric quotient stated earlier. Its exact denominator is nonzero away from the nodes. At a node the quotient expression is undefined, although the polynomial is defined, so returning the corresponding datum is part of the evaluation rule.

This derivation separates exact equality from a stability theorem. Computed weights may overflow, underflow, or contain relative error; a near cancellation in a sum can magnify those errors. A common nonzero rescaling of weights is harmless in exact arithmetic and often helpful for range, but is not an unconditional proof that every floating-point evaluation is backward stable.

For fixed nodes, data perturbations obey
\[
\Delta p(x)=\sum_i\Delta y_i\ell_i(x),\qquad
|\Delta p(x)|\le\|\Delta y\|_\infty\Lambda(x).
\]
The bound is attained for a fixed evaluation point by choosing perturbation signs to agree with the signs of its basis values. Thus the Lebesgue function is an exact absolute amplification factor from the maximum data perturbation to that point's value. It measures the interpolation problem with fixed nodes; uncertainty in the nodes is another problem.

## Node families with explicit indexing

| Degree $n$ | Roots of $T_{n+1}$ | Lobatto nodes |
| --- | --- | --- |
| 2 | $\sqrt3/2,0,-\sqrt3/2$ | $1,0,-1$ |
| 3 | $\cos(\pi/8),\cos(3\pi/8),-\cos(3\pi/8),-\cos(\pi/8)$ | $1,1/2,-1/2,-1$ |
| 4 | $\cos(\pi/10),\cos(3\pi/10),0,-\cos(3\pi/10),-\cos(\pi/10)$ | $1,\sqrt2/2,0,-\sqrt2/2,-1$ |

The general root formula is $\cos((2j+1)\pi/(2n+2))$ for $0\le j\le n$; the Lobatto formula is $\cos(j\pi/n)$ for $0\le j\le n$, with $n\ge1$. Both lists run from right to left. An affine mapping takes them from $[-1,1]$ to another finite interval, and its orientation must match the data order.

Chebyshev geometry has a specific polynomial minimax explanation in the next chapter. It should not be read as a guarantee of uniform convergence for every continuous target. Smoothness, singularities, node perturbations, and data noise remain relevant. A node table supplies a design, not a theorem about an unspecified function.

## Natural cubic splines from a linear system

Let $x_0<\cdots<x_N$, set $h_i=x_{i+1}-x_i>0$, and let $M_i=S''(x_i)$. On interval $[x_i,x_{i+1}]$, requiring the second derivative to be linear and the values to match the data gives
\[
\begin{aligned}
S_i(x)={}&\frac{M_i(x_{i+1}-x)^3+M_{i+1}(x-x_i)^3}{6h_i}\\
&+\left(y_i-\frac{M_ih_i^2}{6}\right)\frac{x_{i+1}-x}{h_i}
+\left(y_{i+1}-\frac{M_{i+1}h_i^2}{6}\right)\frac{x-x_i}{h_i}.
\end{aligned}
\]
This formula follows by integrating the linear second derivative twice and choosing the two integration constants from the endpoint values. It directly reproduces both endpoint values and both prescribed second derivatives.

Write $\Delta_i=(y_{i+1}-y_i)/h_i$. Differentiating the formula gives left slope $\Delta_i-h_i(2M_i+M_{i+1})/6$ and right slope $\Delta_i+h_i(M_i+2M_{i+1})/6$. Matching the two slopes at each interior knot therefore gives
\[
h_{i-1}M_{i-1}+2(h_{i-1}+h_i)M_i+h_iM_{i+1}
=6(\Delta_i-\Delta_{i-1}),\quad 1\le i<N.
\]

**Theorem 4.3 (Existence and uniqueness of the natural interpolating spline).** For distinct ordered knots and arbitrary real data, the conditions $M_0=M_N=0$ determine one $C^2$ piecewise-cubic interpolating spline.

*Proof.* For $N=1$ the formula with both second derivatives zero is the unique line. For $N\ge2$, the displayed interior system has diagonal entry $2(h_{i-1}+h_i)$, while the sum of magnitudes of its remaining off-diagonal entries is at most $h_{i-1}+h_i$. It is strictly diagonally dominant. To see nonsingularity directly, suppose a nonzero homogeneous solution existed and choose a coordinate with largest absolute value. The row equation would imply its diagonal magnitude times that value is at most the smaller off-diagonal row sum times the same value, a contradiction. Thus the second derivatives exist uniquely. The interval formulas then match values and second derivatives, while the system matches first derivatives. Conversely every natural interpolating cubic must satisfy these same equations and formulas, so it is the constructed one. ∎

| Endpoint choice | Conditions beyond interpolation and interior $C^2$ matching | What must be supplied |
| --- | --- | --- |
| Natural | $S''(x_0)=S''(x_N)=0$ | No endpoint slopes |
| Clamped | $S'(x_0)=d_0,\ S'(x_N)=d_N$ | Two endpoint slopes |
| Not-a-knot | Third derivatives match at $x_1,x_{N-1}$ | At least three intervals for these two distinct conditions |
| Periodic | First and second derivatives match across the endpoints | Compatible endpoint values $y_0=y_N$ |

These conditions describe different mathematical interpolation problems. Special small-knot conventions for not-a-knot splines must be declared rather than inferred from two coincident constraints. Piecewise support of the formula does not mean that natural-spline data have strictly local influence: the second derivatives come from a coupled global linear solve.

**Example 4.4 (A natural spline with one interior knot).** For $(0,0),(1,1),(2,0)$, the natural conditions give $M_0=M_2=0$, and the single interior equation is $4M_1=6(-1-1)=-12$. Thus $M_1=-3$. On $[0,1]$,
\[
S(x)=\tfrac32x-\tfrac12x^3,
\]
and on $[1,2]$ use the reflected formula $S(2-x)$. At the middle knot the value is one, the first derivative is zero, and the second derivative is $-3$ from both sides. At $x=1/2$, the value is $3/4-1/16=11/16$. A piecewise-linear interpolant instead gives $1/2$ there: matching the same data does not make different interpolation spaces identical.

For completeness, existence in the earlier projection theorem can be supplied by choosing a linearly independent basis of its finite-dimensional subspace. Its Gram matrix satisfies $c^{\mathsf T}Gc=\|\sum_i c_i\phi_i\|^2>0$ for nonzero $c$, so the orthogonality equations have a unique solution. The earlier Pythagorean argument then proves its unique optimality. The next chapter develops that construction, discrete least squares, and the distinct uniform objective further.
## Interpolation stability is the norm of a reconstruction map

Fix distinct nodes on a compact interval and let the data be perturbed by at most an absolute amount $\eta$ at each node. The interpolating polynomial changes by the sum of each perturbation times its cardinal polynomial. Taking absolute values proves the uniform bound

$$
\|\widetilde p-p\|_\infty\le\eta\max_x\sum_i|\ell_i(x)|.
$$

The factor on the right is the Lebesgue constant for the chosen interval and nodes. This bound is sharp for scalar data at a point attaining the maximum: choose each perturbation with the sign of the corresponding cardinal polynomial there. Thus it measures intrinsic sensitivity of polynomial reconstruction in these norms, before rounding in an evaluation algorithm is considered.

There are consequently two distinct choices when an interpolant behaves badly. A better evaluation formula, such as a carefully implemented barycentric formula, can reduce avoidable arithmetic error. Changing the nodes or replacing a global high-degree polynomial by local splines changes the reconstruction problem and may reduce its intrinsic sensitivity. Neither operation establishes that the sampled function has been approximated accurately between nodes without regularity information. Keeping data error, reconstruction sensitivity, and approximation error separate gives a useful explanation of why exact interpolation of the supplied values can coexist with poor prediction elsewhere.

## Practice with solutions

### Exercise 4.1
<a id="interpolation-splines-least-squares-ex-1"></a>

**Uniqueness boundary.**

Why must interpolation nodes be distinct?

<details>
<summary>Hint 1</summary>

Compare the constraints associated with a repeated input.

</details>
<details>
<summary>Hint 2</summary>

Decide whether the repeated values conflict or merely repeat the same information.

</details>
<details>
<summary>Solution</summary>

**Solution.** Repeated x-values with conflicting y-values make interpolation impossible; repeated x-values with identical y-values do not supply independent conditions, so uniqueness at the advertised degree can fail unless derivative data are deliberately introduced as Hermite conditions.

</details>

### Exercise 4.2
<a id="interpolation-splines-least-squares-ex-2"></a>

**Node perturbation.**

If each datum changes by at most \(\epsilon\), bound the interpolant change at \(x\).

<details>
<summary>Hint 1</summary>

Write the perturbed polynomial in the Lagrange basis.

</details>
<details>
<summary>Hint 2</summary>

Apply the triangle inequality and the maximum data-error bound.

</details>
<details>
<summary>Solution</summary>

**Solution.** The change is \(\sum \Delta y_i \ell_i(x)\), whose magnitude is at most \(\epsilon \sum \lvert \ell_i(x)\rvert=\epsilon \Lambda(x)\). This explains the Lebesgue function as a condition indicator.

</details>

### Exercise 4.3
<a id="interpolation-splines-least-squares-ex-3"></a>

**Projection check.**

Why is a least-squares residual orthogonal to every fitted column?

<details>
<summary>Hint 1</summary>

Differentiate the squared residual norm with respect to the coefficients.

</details>
<details>
<summary>Hint 2</summary>

A stationary unconstrained minimum has zero normal-equation residual.

</details>
<details>
<summary>Solution</summary>

**Solution.** Differentiating \(\lVert Ac-y\rVert^{2}\) gives \(2A^{\mathsf T}(Ac-y)\). At an unconstrained minimizer this gradient vanishes, so each column has zero dot product with the residual. If \(A\) lacks full rank, fitted values remain unique while coefficients may not.

</details>

### Exercise 4.4
<a id="interpolation-splines-least-squares-ex-4"></a>

**A linear interpolant.**

Find the degree-at-most-one interpolant through $(0,1)$ and $(2,5)$, and evaluate it at one.

<details>
<summary>Hint 1</summary>

Compute the slope between the two nodes.

</details>
<details>
<summary>Hint 2</summary>

The value at zero fixes the constant coefficient.

</details>
<details>
<summary>Solution</summary>

**Solution.** The slope is $(5-1)/(2-0)=2$, so $p(x)=1+2x$ and $p(1)=3$. The two nodes are distinct, so the uniqueness theorem identifies this as the only interpolant in the stated degree class.

</details>

### Exercise 4.5
<a id="interpolation-splines-least-squares-ex-5"></a>

**A remainder bound.**

Interpolate $\cos x$ at $0$ and $\pi/2$. Bound the absolute error at $\pi/4$ using the second-derivative bound one.

<details>
<summary>Hint 1</summary>

The remainder is a second derivative divided by two times the two-node product.

</details>
<details>
<summary>Hint 2</summary>

At the midpoint the product has magnitude $\pi^2/16$.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since $|f''|=|\cos x|\le1$, the error is at most $(1/2)| (\pi/4)(-\pi/4)|=\pi^2/32$. This is an exact-data bound, not an estimate from a plotted curve.

</details>

### Exercise 4.6
<a id="interpolation-splines-least-squares-ex-6"></a>

**Barycentric weights.**

Find weights for nodes $0,1,2$ and evaluate the interpolant to values $1,2,5$ at $x=1/2$.

<details>
<summary>Hint 1</summary>

Each weight is the reciprocal of the product of differences from its own node.

</details>
<details>
<summary>Hint 2</summary>

Weights $1,-2,1$ are an equivalent common rescaling.

</details>
<details>
<summary>Solution</summary>

**Solution.** The product-definition weights are $1/2,-1,1/2$. Using $1,-2,1$, the numerator at $1/2$ is $2+8-10/3=20/3$, and the denominator is $2+4-2/3=16/3$. Their quotient is $5/4$, agreeing with the exact polynomial $x^2+1$.

</details>

### Exercise 4.7
<a id="interpolation-splines-least-squares-ex-7"></a>

**Extrapolation amplification.**

For interpolation at nodes zero and one, find the Lebesgue function at $x=2$ and compare it with points inside $[0,1]$.

<details>
<summary>Hint 1</summary>

The Lagrange functions are $1-x$ and $x$.

</details>
<details>
<summary>Hint 2</summary>

Take absolute values before adding.

</details>
<details>
<summary>Solution</summary>

**Solution.** At two, the basis values are $-1,2$, giving $\Lambda(2)=3$. On $[0,1]$ both are nonnegative and sum to one, so $\Lambda(x)=1$. Fixed-node data uncertainty can therefore be amplified more strongly in extrapolation than within this interval.

</details>

### Exercise 4.8
<a id="interpolation-splines-least-squares-ex-8"></a>

**A spline system.**

For natural cubic interpolation of $(0,0),(1,1),(2,0)$, compute the interior second derivative and the value at $1/2$.

<details>
<summary>Hint 1</summary>

The endpoint second derivatives are zero.

</details>
<details>
<summary>Hint 2</summary>

The single interior equation is $4M_1=-12$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The equation gives $M_1=-3$. The first cubic is $S(x)=3x/2-x^3/2$, so $S(1/2)=3/4-1/16=11/16$. The value follows from the specified natural endpoint conditions; a different condition can give another spline.

</details>

### Exercise 4.9
<a id="interpolation-splines-least-squares-ex-9"></a>

**Endpoint conditions carry information.**

Why is the quadratic $S(x)=x^2$ on $[0,2]$ compatible with clamped endpoint slopes zero and four, but not with natural endpoint conditions?

<details>
<summary>Hint 1</summary>

Compare its first and second derivatives with the two sets of conditions.

</details>
<details>
<summary>Hint 2</summary>

Its second derivative is the constant two.

</details>
<details>
<summary>Solution</summary>

**Solution.** The first derivative is $2x$, so the endpoint slopes are zero and four, exactly the clamped data. But the second derivative equals two at both endpoints, violating the natural requirements of zero. Thus these endpoint models cannot be treated as interchangeable.

</details>

### Exercise 4.10
<a id="interpolation-splines-least-squares-ex-10"></a>

**Nearly coincident nodes.**

At nodes zero and $\delta$ with $0<\delta<1$, a perturbation changes data $(\delta,0)$ to $(\delta,\varepsilon)$, leaving the datum at zero unchanged. Compute the interpolant perturbation at $x=1$.

<details>
<summary>Hint 1</summary>

The perturbed interpolant is a line through zero.

</details>
<details>
<summary>Hint 2</summary>

Its slope is $\varepsilon/\delta$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The interpolant perturbation is $\Delta p(x)=\varepsilon x/\delta$, hence $\Delta p(1)=\varepsilon/\delta$. Small data changes can be strongly amplified at this extrapolation point as the nodes coalesce. Exact uniqueness at distinct nodes does not give a uniform conditioning bound as their separation tends to zero.

</details>


<a id="decision-summary"></a>
## Connections

Interpolate when exact passage through trusted constraints is the problem. Use splines when local control and smooth joins matter. Use least squares when a squared norm is justified. In all cases, audit nodes, basis, conditioning, evaluation, and the meaning of error separately.

<a id="source-and-verification-note"></a>
## Sources

The existing Euler chapter's interpolant, line fit, projection discussion, hypotheses, and exercise solutions are retained. Verified further reading: NIST [DLMF §3.3 Interpolation](https://dlmf.nist.gov/3.3) and [§3.11 Approximation Techniques](https://dlmf.nist.gov/3.11), together with Endre Süli and David F. Mayers, [An Introduction to Numerical Analysis](https://www.cambridge.org/core/books/an-introduction-to-numerical-analysis/FD8BCAD7FE68002E2179DFF68B8B7237), Cambridge University Press, 2003. The remainder, barycentric, and natural-spline arguments used here are proved in the text. Carl de Boor's *A Practical Guide to Splines*, revised edition, 2001, remains additional reading; no unverified locator is inferred. Links consulted 13 November 2026. Original Euler prose is licensed CC BY-SA 4.0.

## Summary

Distinct nodes determine one polynomial in the stated degree class, but error and conditioning require more information. Repeated Rolle arguments prove the interpolation remainder; the barycentric identity changes evaluation without changing the polynomial. The Lebesgue function measures fixed-node data amplification. Cubic splines require specified endpoint conditions, and the derived natural tridiagonal system proves their existence and uniqueness. Interpolation, least squares, and uniform approximation remain separate objectives even when they use related bases.
