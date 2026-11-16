
# Weierstrass and Stone–Weierstrass Approximation

Taylor polynomials approximate a function by using its derivatives at one point. Continuous functions may have no derivatives at all, so Taylor theory cannot answer a more basic question: can every continuous function on a closed interval be approximated uniformly by polynomials? The answer is yes. The approximating polynomials need not be Taylor polynomials, and their coefficients may encode information from many points.

We first construct Bernstein polynomials and prove that their worst error tends to zero. We then identify why polynomials work well enough to generalize the result. An algebra of real continuous functions that contains constants and distinguishes any two points is dense on a compact space. The proof turns multiplication into absolute values, absolute values into maxima and minima, and local two-point interpolation into one global approximation.

**Preparation.** Read [Uniform Convergence and Limit Interchange](uniform-convergence.md) for uniform limits and integral estimates, [Families of Functions and Equicontinuity](function-spaces-and-equicontinuity.md) for \(C(K)\) and its uniform norm, and [Sequences, Subsequences, and Compactness](sequences-compactness.md) for finite subcovers. Finite binomial identities are proved below where needed. [Taylor Theory and Convexity](taylor-theory-and-convexity.md) supplies a useful comparison but is not an assumption in the main approximation theorem.

## 1. What density means

**Definition 1 (uniform density).** For nonempty compact \(K\), let \(C(K,\mathbb R)\) be the continuous real-valued functions with norm
\[
\|f\|_\infty=\max_{x\in K}|f(x)|.
\]
A subset \(A\) is uniformly dense if for every \(f\in C(K,\mathbb R)\) and every \(\varepsilon>0\), some \(g\in A\) satisfies \(\|f-g\|_\infty<\varepsilon\).

One function \(g\) must work for every \(x\). Choosing a separate approximant for each point proves something much weaker. Equivalently, every continuous \(f\) is the uniform limit of a sequence from \(A\): choose errors below \(1/n\). Conversely, a uniform approximating sequence provides an element within every prescribed positive tolerance.

The degree may depend on \(f\) and on the tolerance. A single fixed finite-dimensional polynomial space cannot approximate every continuous function arbitrarily well. Nor does the theorem say that a familiar interpolation scheme at equally spaced nodes converges. Bernstein polynomials use those nodes as samples in a weighted average, rather than requiring agreement at every node.

## 2. Bernstein's positive averages

For \(n\ge1\), \(0\le k\le n\), and \(x\in[0,1]\), write
\[
w_{n,k}(x)=\binom nk x^k(1-x)^{n-k},
\qquad
B_nf(x)=\sum_{k=0}^n f(k/n)w_{n,k}(x).
\]
At endpoints interpret the polynomial factors by their polynomial values, including \(x^0=1\). All weights are nonnegative and their sum is one by the binomial theorem. Thus \(B_nf(x)\) is a convex average of finitely many sampled values, and is a polynomial of degree at most \(n\).

**Lemma 2 (moments).** The weights satisfy
\[
\sum_k\frac{k}{n}w_{n,k}(x)=x,\qquad
\sum_k\left(\frac{k}{n}-x\right)^2w_{n,k}(x)
=\frac{x(1-x)}n\le\frac1{4n}.
\]

**Proof.** For \(k\ge1\), \(k\binom nk=n\binom{n-1}{k-1}\). Multiplying by the polynomial factors, summing, and shifting the index gives \(\sum k w_{n,k}=nx\). For \(n\ge2\), the analogous identity \(k(k-1)\binom nk=n(n-1)\binom{n-2}{k-2}\) gives \(\sum k(k-1)w_{n,k}=n(n-1)x^2\). For \(n=1\) the latter equality holds directly with both sides zero. Since \(k^2=k(k-1)+k\),
\[
\sum(k/n)^2w_{n,k}=(1-1/n)x^2+x/n.
\]
Expand the squared deviation, use this formula, the first moment and the total weight one, and simplify to \(x(1-x)/n\). Finally \(x(1-x)=1/4-(x-1/2)^2\le1/4\). \(\square\)

The second identity expresses concentration near the input. The weights at distant nodes cannot have much total mass, because those nodes contribute a large squared deviation. This elementary finite-sum statement is the mechanism of the proof. A probability interpretation is available, but no probabilistic limit theorem is being imported.

**Worked example 1 (a quadratic is not interpolated).** For the source function \(f(t)=t^2\), the moment calculation gives
\[
B_nf(x)=x^2+\frac{x(1-x)}n.
\]
Therefore \(\|B_nf-f\|_\infty=1/(4n)\), attained at \(x=1/2\). At degree two the source value there is \(1/4\) while the polynomial value is \(3/8\). The sampled midpoint is not interpolated. To certify error strictly below \(10^{-3}\) in this family one needs \(n>250\), so \(n=251\) suffices; \(n=250\) certifies only the non-strict tolerance.

Linearity follows from the finite formula. Positivity implies order preservation: \(f\le g\) at all sample points gives \(B_nf\le B_ng\). Since the weights sum to one, \(\|B_nf\|_\infty\le\|f\|_\infty\), and constants are reproduced exactly. The first moment shows that every affine function is reproduced exactly as well. These properties concern the operator, not only its limiting behavior.

## 3. A complete uniform approximation proof

**Theorem 3 (Bernstein–Weierstrass).** Every continuous real function \(f\) on \([0,1]\) satisfies \(\|B_nf-f\|_\infty\to0\).

**Proof.** Let \(M=\|f\|_\infty\). If \(M=0\), the assertion is immediate. Define
\[
\omega_f(\delta)=\sup\{|f(u)-f(v)|:u,v\in[0,1],\,|u-v|\le\delta\}.
\]
Compact-domain uniform continuity gives \(\omega_f(\delta)\to0\) as \(\delta\downarrow0\). For any fixed \(x\),
\[
|B_nf(x)-f(x)|
\le\sum_k w_{n,k}(x)|f(k/n)-f(x)|.
\]
Split the indices into near nodes with \(|k/n-x|\le\delta\) and far nodes with larger distance. The near contribution is at most \(\omega_f(\delta)\), because its weights sum to at most one. The far function differences are bounded by \(2M\). Moreover
\[
\sum_{\mathrm{far}}w_{n,k}(x)
\le\delta^{-2}\sum_k(k/n-x)^2w_{n,k}(x)
\le\frac1{4n\delta^2}.
\]
Hence, for every \(x\),
\[
|B_nf(x)-f(x)|
\le\omega_f(\delta)+\frac{M}{2n\delta^2}.
\]
Given \(\varepsilon>0\), first choose \(\delta>0\) so the first term is below \(\varepsilon/2\), then choose \(N\) so the second term is below \(\varepsilon/2\) for every \(n\ge N\). Neither choice depends on \(x\). Taking a supremum proves uniform convergence. \(\square\)

The order of choices is essential. Uniform continuity makes near-node errors small but says nothing useful about a far node by itself. The moment estimate makes far-node weight small but does not bound differences between nearby function values. Together they cover the entire finite sum.

One may instead choose \(\delta_n=n^{-1/4}\): the bound becomes \(\omega_f(n^{-1/4})+M/(2\sqrt n)\), which tends to zero. Choosing \(n^{-1/2}\) in this particular estimate leaves its second term fixed. That failure is a limitation of the estimate at that scale, rather than a disproof of Bernstein convergence.

**Corollary 4 (Weierstrass on an interval).** For finite \(a<b\), real polynomials are uniformly dense in \(C([a,b],\mathbb R)\).

**Proof.** Put \(g(t)=f(a+(b-a)t)\). Bernstein approximation gives polynomials \(q_n(t)\to g(t)\) uniformly on \([0,1]\). Then \(p_n(x)=q_n((x-a)/(b-a))\) is a polynomial in \(x\), and the affine bijection gives exactly \(\|p_n-f\|_{[a,b]}=\|q_n-g\|_{[0,1]}\to0\). On a singleton interval a constant already matches \(f\). \(\square\)

The theorem does not make a continuous function analytic. It does not say approximating derivatives converge, or even that the limiting function has a derivative. Polynomials may change their coefficients and degrees as accuracy increases. Their infinite sequence is different from one power series with fixed coefficients.

## 4. Rates and boundaries

If \(f\) is Lipschitz with constant \(L\), the same weighted error has a sharper estimate. Weighted Cauchy–Schwarz gives
\[
|B_nf(x)-f(x)|
\le L\sum_k w_{n,k}|k/n-x|
\le L\left(\sum_k w_{n,k}(k/n-x)^2\right)^{1/2}
\le\frac{L}{2\sqrt n}.
\]
The middle step uses total weight one. This bound provides a sufficient degree for a requested accuracy, although it need not be optimal for an individual function.

**Worked example 2 (approximating a corner).** Take \(f(t)=|t-1/2|\). It is 1-Lipschitz and not differentiable at \(1/2\). The bound nevertheless gives \(\|B_nf-f\|_\infty\le1/(2\sqrt n)\). Thus \(n>2500\) suffices for error strictly below \(0.01\). For \(n=2\), the weights at \(x=1/2\) are \(1/4,1/2,1/4\); combining source values \(1/2,0,1/2\) gives \(B_2f(1/2)=1/4\). The smooth polynomial fills in the corner while still approaching the source uniformly as the degree grows.

For a discontinuous step source the finite formula still defines a polynomial. The theorem's conclusion cannot hold uniformly, because a uniform limit of continuous functions is continuous. Continuity is therefore both an explicit hypothesis and a necessary property of any uniform limit of these approximants.

Even when the limit is differentiable, convergence of values says little about derivatives. On \([0,1]\), \(p_n(x)=x^n/n\) tends uniformly to zero with norm \(1/n\), but \(p_n'(1)=1\) for every \(n\). The derivatives do not tend uniformly to the derivative of the limit. If derivatives or curvature matter, choose a stronger approximation problem and prove its additional estimates.

## 5. Algebras and their uniform closures

**Definition 5 (function algebra and separation).** A real subalgebra \(A\subset C(K,\mathbb R)\) is a real vector subspace closed under pointwise products. It contains constants if the constant function 1 belongs to it. It **separates points** if for every distinct \(x,y\in K\) some \(h\in A\) satisfies \(h(x)\ne h(y)\).

The assumptions express actual abilities. Constants allow an arbitrary baseline; linear combinations let us rescale; products let us form polynomial expressions; separation says no pair of locations is forced to look identical to every allowed function. A family missing separation cannot approximate all continuous functions on a compact metric space, since the distance from one of two points distinguishes that pair and uniform limits preserve equalities at them.

**Lemma 6 (closure is an algebra).** The uniform closure \(\overline A\) of a subalgebra is a subalgebra and contains the constants whenever \(A\) does.

**Proof.** If \(f_n,g_n\in A\) converge uniformly to \(f,g\), sums and scalar multiples converge by the norm triangle inequality. For products,
\[
\|f_ng_n-fg\|_\infty
\le\|f_n\|_\infty\|g_n-g\|_\infty
+\|g\|_\infty\|f_n-f\|_\infty\to0.
\]
Uniform convergence makes \(\|f_n\|_\infty\) bounded. Thus the limit product lies in the closure. Every element of the closure has such an approximating sequence, by choosing successive errors below \(1/n\). Constants already in \(A\) remain in its closure. \(\square\)

**Lemma 7 (absolute values and lattices).** If \(A\) contains constants, its uniform closure is closed under absolute values, pointwise maxima and pointwise minima.

**Proof.** For \(h\in\overline A\), choose \(R\ge\|h\|_\infty\), with \(R>0\). Weierstrass approximation on \([-R,R]\) provides polynomials \(q_n(t)\to|t|\) uniformly. Since \(\overline A\) is an algebra containing constants, every \(q_n(h)\) belongs to it. The range of \(h\) lies in \([-R,R]\), so \(q_n(h)\to|h|\) uniformly on \(K\). Closedness puts \(|h|\) in \(\overline A\). Finally
\[
\max(f,g)=\frac{f+g+|f-g|}{2},
\qquad
\min(f,g)=\frac{f+g-|f-g|}{2}.
\]
The right sides belong to the closure. \(\square\)

A set closed under these two pointwise operations is called a **lattice**. We have proved the lattice property for the closure, not necessarily for the original algebra. For example, the maximum of two polynomials need not itself be a polynomial. Confusing the algebra with its closure would invalidate the next proof.

## 6. The two finite covers

**Theorem 8 (real Stone–Weierstrass).** Let \(K\) be a nonempty compact Hausdorff space. If \(A\subset C(K,\mathbb R)\) is a subalgebra containing constants and separating points, then \(A\) is uniformly dense in \(C(K,\mathbb R)\).

The preceding compact metric preparation is sufficient for the main examples. In the stated generality, only the definition of compactness by open covers and continuity of real-valued functions are needed; no sequences of points or metric on \(K\) enter the proof. Continuous real functions are bounded on a compact space, so the uniform norm still makes sense. The scalar interval theorem used in Lemma 7 remains unchanged.

**Proof.** Put \(L=\overline A\). It is a closed lattice by the lemmas. Fix \(f\in C(K,\mathbb R)\) and \(\eta>0\). For each \(x,y\in K\) construct \(h_{x,y}\in A\) matching \(f\) at both points. If \(x=y\), use the constant \(f(x)\). If \(x\ne y\), choose \(u\in A\) with \(u(x)\ne u(y)\) and put
\[
h_{x,y}(z)=f(x)+
\frac{f(y)-f(x)}{u(y)-u(x)}(u(z)-u(x)).
\]
Constants and linear combinations keep this function in \(A\), and direct substitution verifies both values.

Fix \(x\). For every \(y\), continuity makes
\[
U_{x,y}=\{z:h_{x,y}(z)>f(z)-\eta\}
\]
open, and it contains \(y\). These sets cover \(K\). Choose a finite subcover corresponding to \(y_1,\ldots,y_m\), and define
\[
g_x=\max(h_{x,y_1},\ldots,h_{x,y_m})\in L.
\]
At every point at least one selected function exceeds \(f-\eta\), so \(g_x>f-\eta\) everywhere. At \(x\) all selected functions equal \(f(x)\), so \(g_x(x)=f(x)\).

Now let \(x\) vary. The open set
\[
V_x=\{z:g_x(z)<f(z)+\eta\}
\]
contains \(x\), hence the \(V_x\) cover \(K\). Choose finitely many \(x_1,\ldots,x_r\) covering it, and set
\[
g=\min(g_{x_1},\ldots,g_{x_r})\in L.
\]
Every term exceeds \(f-\eta\), so \(g>f-\eta\) everywhere. At every point one selected term is below \(f+\eta\), so the minimum is below \(f+\eta\). Thus \(\|g-f\|_\infty\le\eta\).

Apply this construction with \(\eta=1/n\). It gives \(g_n\in L\) converging uniformly to \(f\), so closedness yields \(f\in L\). Hence \(L=C(K,\mathbb R)\), exactly the density claim for \(A\). In particular, for a requested error \(\varepsilon\), membership in the closure supplies an element of the original algebra within \(\varepsilon\). \(\square\)

The two covers have different jobs. The first converts many two-point fits into a function that is globally above the lower barrier and exact at one fixed point. The second uses those exact points to impose the upper barrier everywhere. The first operation is a maximum, the second a minimum. Reversing just one inequality or using the same operation twice loses one barrier.

The compactness selections depend on the target function and the tolerance. There is no claim that one finite set of points controls every target in the entire function space. This distinction is one reason density is compatible with infinite-dimensionality and with failure of compactness of large bounded subsets of \(C(K)\).

## 7. Applying the hypotheses

**Worked example 3 (polynomials on a planar compact set).** Let \(K\) be any nonempty compact subset of \(\mathbb R^2\). Restrictions of real polynomials in two variables form an algebra and contain constants. If \((x_1,x_2)\ne(y_1,y_2)\), one coordinate differs; the corresponding coordinate polynomial separates them. Stone–Weierstrass therefore approximates every continuous real function on \(K\) uniformly by polynomial restrictions. The set need not be a rectangle, have an interior, or be connected. On the circle, the restrictions automatically respect \(x^2+y^2=1\); uniqueness of an ambient polynomial expression is neither expected nor needed.

**Worked example 4 (even polynomials on two different domains).** On \([-1,1]\), polynomials in \(x^2\) do not separate \(x\) from \(-x\). They cannot approximate \(f(x)=x\) arbitrarily well: for an even \(p\), if both endpoint errors were below one, \(p(1)=p(-1)\) would have to lie simultaneously in \((0,2)\) and \((-2,0)\). On \([0,1]\), however, \(x^2\) is injective, so the same algebra separates points and is dense. This can also be seen directly: for continuous \(f\), define \(g(t)=f(\sqrt t)\), approximate \(g\) by polynomials \(q\), and compose to obtain \(q(x^2)\). A separating family must always be assessed on its stated domain.

The real scalar field matters. Over complex values, separation and constants alone do not provide absolute-value closure. A complex version needs the additional hypothesis of closure under complex conjugation. We do not use that theorem here. The proof above depends on the order of real values when taking maxima and minima, and that exact step has no complex analogue.

Polynomial density is often used to prove uniqueness. If a continuous function has zero integral against every polynomial on an interval, approximate that same function uniformly by polynomials. Passing to the limit gives zero integral of its square, and continuity forces it to vanish. The exercise set develops this argument; it is a conclusion about continuous functions, rather than an unqualified assertion about arbitrary pointwise data.

## Approximation as a transfer principle

Density is useful even when no approximating polynomial needs to be written down. Suppose \(T,S:C([a,b],\mathbb R)\to\mathbb R\) are linear maps satisfying bounds \(|T(f)|\le C_T\|f\|_\infty\) and \(|S(f)|\le C_S\|f\|_\infty\). If they agree on every polynomial, then they agree everywhere. Indeed, choose polynomials \(p_n\to f\) uniformly. The difference satisfies
\[
|T(f)-S(f)|\le (C_T+C_S)\|f-p_n\|_\infty,
\]
because \(T(p_n)=S(p_n)\). The right side tends to zero.

For example, integration against a fixed BV integrator has exactly such a bound, established in the previous chapter. Consequently two such integration rules with the same polynomial integrals agree on all continuous integrands. The conclusion concerns integration rules, rather than pointwise equality of their cumulative integrators: adding a constant to an integrator changes none of its increments. Boundary conventions must still be stated before interpreting those rules as distributions of mass.

The boundedness assumptions in this transfer argument are essential. Knowing a linear map on a dense subset determines a continuous extension uniquely, but density alone does not prove continuity or create an extension. In each application first identify the norm, then establish the operator estimate, and only then pass from the dense family to arbitrary functions. This order prevents an approximation theorem from silently carrying a stronger conclusion than it proves.

## 8. Exercises

### ANA-CH24-E001 — Total weight

Prove that the Bernstein weights are nonnegative and sum to one on \([0,1]\). What changes outside this interval?

<details><summary>Hint 1</summary>

Use the binomial expansion of \((x+(1-x))^n\).

</details>
<details><summary>Hint 2</summary>

A negative base can produce negative weights, even though the polynomial identity for their sum survives.

</details>
<details><summary>Solution</summary>

On \([0,1]\) both factors are nonnegative, so each weight is nonnegative. Their sum is \((x+1-x)^n=1\). Outside the interval the sum identity still holds, but positivity fails: for \(n=1\), the weights \(1-x,x\) have opposite signs when \(x<0\) or \(x>1\). Consequently the convex-average bounds no longer follow.

</details>

### ANA-CH24-E002 — Affine reproduction

Prove \(B_n(a+bt)=a+bx\) for every \(n\ge1\).

<details><summary>Hint 1</summary>

Split the defining sum into constant and linear parts.

</details>
<details><summary>Hint 2</summary>

Use total weight one and the first-moment identity separately.

</details>
<details><summary>Solution</summary>

Linearity gives \(B_n(a+bt)=a\sum w_{n,k}+b\sum(k/n)w_{n,k}=a+bx\). This is an exact identity for every input in the interval, rather than just a limiting statement.

</details>

### ANA-CH24-E003 — A concave quadratic

Find \(B_n f-f\) and its uniform norm for \(f(t)=t(1-t)\).

<details><summary>Hint 1</summary>

Write \(f=t-t^2\).

</details>
<details><summary>Hint 2</summary>

Subtract the second-moment formula from the first-moment formula.

</details>
<details><summary>Solution</summary>

We obtain \(B_nf=x-x^2-x(1-x)/n=f-x(1-x)/n\). Thus the signed error is \(-x(1-x)/n\), and its uniform norm is \(1/(4n)\), attained at \(x=1/2\). Bernstein averaging lies below this particular concave source.

</details>

### ANA-CH24-E004 — Hölder data

If \(|f(u)-f(v)|\le L|u-v|^\alpha\), where \(0<\alpha\le1\), prove \(\|B_nf-f\|_\infty\le L(4n)^{-\alpha/2}\).

<details><summary>Hint 1</summary>

Bound the error by the weighted average of \(|k/n-x|^\alpha\).

</details>
<details><summary>Hint 2</summary>

Apply Jensen's inequality to the concave function \(s^{\alpha/2}\) of the squared deviations.

</details>
<details><summary>Solution</summary>

For \(D_k=k/n-x\), positivity yields error at most \(L\sum w_k(D_k^2)^{\alpha/2}\). Concavity and total weight one bound this by \(L(\sum w_kD_k^2)^{\alpha/2}\), at most \(L(1/(4n))^{\alpha/2}\). This bound is independent of x, so it bounds the uniform norm.

</details>

### ANA-CH24-E005 — Choosing a radius

For the near/far estimate, determine which positive exponents \(\beta\) make \(\delta_n=n^{-\beta}\) prove convergence for every continuous source.

<details><summary>Hint 1</summary>

Substitute into both terms, not just the modulus.

</details>
<details><summary>Hint 2</summary>

The far contribution becomes \((M/2)n^{2\beta-1}\).

</details>
<details><summary>Solution</summary>

The modulus term tends to zero for every \(\beta>0\). The second term tends to zero precisely when \(2\beta-1<0\), so this estimate proves convergence for \(0<\beta<1/2\). At or above one half the displayed bound alone does not prove convergence for a general nonzero source; the theorem itself remains valid.

</details>

### ANA-CH24-E006 — Transporting a quadratic

Transport Bernstein approximation of \(f(x)=x^2\) from \([-1,1]\) to \([0,1]\). Find the resulting polynomial and its exact error.

<details><summary>Hint 1</summary>

The transformed function is \(g(t)=(2t-1)^2\).

</details>
<details><summary>Hint 2</summary>

Use linearity and the first two moments before setting \(t=(x+1)/2\).

</details>
<details><summary>Solution</summary>

Since \(g=4t^2-4t+1\), \(B_ng=(2t-1)^2+4t(1-t)/n\). Returning to x gives \(p_n(x)=x^2+(1-x^2)/n\). The error is nonnegative and has maximum \(1/n\) at zero. The interval scaling changes the exact coefficient compared with the unit-interval square.

</details>

### ANA-CH24-E007 — The step boundary

Show that no sequence of real polynomials converges uniformly on \([0,1]\) to \(H_{1/2}\).

<details><summary>Hint 1</summary>

Every polynomial is continuous on the whole interval.

</details>
<details><summary>Hint 2</summary>

Invoke the uniform-limit theorem at the jump point.

</details>
<details><summary>Solution</summary>

A uniform limit of continuous functions is continuous. The step function has left-hand values zero and value one at \(1/2\), so it is discontinuous there. Therefore such uniform convergence is impossible. This does not prevent convergence away from the jump or in an integral norm.

</details>

### ANA-CH24-E008 — Values versus slopes

For \(p_n(x)=x^n/n\) on \([0,1]\), compute \(\|p_n\|_\infty\) and decide whether \(p_n'\) converges uniformly to zero.

<details><summary>Hint 1</summary>

The largest value occurs at one.

</details>
<details><summary>Hint 2</summary>

Evaluate the derivative at the same endpoint.

</details>
<details><summary>Solution</summary>

The uniform norm is \(1/n\), so the values converge uniformly to zero. But \(p_n'(x)=x^{n-1}\), whose value at one is always one. Its uniform norm is one, so the derivatives do not converge uniformly to the zero derivative of the limit.

</details>

### ANA-CH24-E009 — Two-point interpolation

Given a unital separating real algebra \(A\), explicitly construct a function matching prescribed values \(r,s\) at distinct points \(x,y\).

<details><summary>Hint 1</summary>

Choose \(u\in A\) with \(u(x)\ne u(y)\).

</details>
<details><summary>Hint 2</summary>

An affine expression in u can independently set the two values.

</details>
<details><summary>Solution</summary>

Take \(h=r+(s-r)(u-u(x))/(u(y)-u(x))\). The denominator is nonzero. Since constants and linear combinations lie in A, \(h\in A\). Evaluation gives \(h(x)=r\) and \(h(y)=s\), as required.

</details>

### ANA-CH24-E010 — A missing constant

Show that polynomials with zero constant term fail to be dense in \(C([0,1],\mathbb R)\), despite separating points.

<details><summary>Hint 1</summary>

The coordinate function itself separates any two points.

</details>
<details><summary>Hint 2</summary>

Evaluate every allowed polynomial and the target constant 1 at zero.

</details>
<details><summary>Solution</summary>

This family is an algebra and contains x, hence separates points. Every member vanishes at zero, however, so its uniform distance from 1 is at least one. Uniform limits also vanish at zero. The absent constant hypothesis has a concrete obstruction.

</details>

### ANA-CH24-E011 — Symmetry as an obstruction

Find the smallest possible uniform error in approximating \(f(x)=x\) on \([-1,1]\) by even polynomials.

<details><summary>Hint 1</summary>

Compare the two endpoint errors using \(p(1)=p(-1)\).

</details>
<details><summary>Hint 2</summary>

The errors cannot both be smaller than one, and the zero polynomial supplies an upper bound.

</details>
<details><summary>Solution</summary>

Writing \(c=p(1)=p(-1)\), the endpoint errors include \(|c-1|\) and \(|c+1|\). Their sum is at least 2, so their maximum is at least one. The polynomial zero has error exactly one throughout the interval in supremum norm. Hence the minimum achievable error is one.

</details>

### ANA-CH24-E012 — An injective generator

Let \(\phi:K\to\mathbb R\) be continuous and injective on nonempty compact Hausdorff K. Prove polynomials in \(\phi\) are uniformly dense in \(C(K,\mathbb R)\).

<details><summary>Hint 1</summary>

Check the algebra properties directly.

</details>
<details><summary>Hint 2</summary>

The single function \(\phi\) already separates every pair.

</details>
<details><summary>Solution</summary>

The family \(\{p\circ\phi:p\in\mathbb R[t]\}\) contains constants and is closed under scalar combinations and products by the corresponding operations on p. All members are continuous. Injectivity means \(\phi(x)\ne\phi(y)\) for distinct points, so the family separates them. Theorem 8 applies and proves density.

</details>

### ANA-CH24-E013 — A lattice but not an algebra

On \([0,1]\), show all continuous piecewise affine functions with finitely many pieces form a lattice containing constants and allowing two-point interpolation. Is this family closed under multiplication?

<details><summary>Hint 1</summary>

Refine the finitely many breakpoints of two functions.

</details>
<details><summary>Hint 2</summary>

Two affine functions cross at most once on each resulting interval unless they coincide; for multiplication test x times x.

</details>
<details><summary>Solution</summary>

After a common finite subdivision, both functions are affine on each piece. Their maximum and minimum remain affine after adding their finitely many crossing points, so the family is a lattice. Constants and all affine functions belong, and an affine function matches any two prescribed values at distinct points. It is not an algebra: x belongs, but x squared cannot be affine on any nondegenerate interval and hence is not piecewise affine with finitely many pieces. The two-cover portion of the proof still yields density for this family.

</details>

### ANA-CH24-E014 — Uniqueness from moments

If continuous \(f:[0,1]\to\mathbb R\) satisfies \(\int_0^1 f(x)x^k\,dx=0\) for every integer \(k\ge0\), prove \(f=0\).

<details><summary>Hint 1</summary>

Linearity gives zero integral against every polynomial.

</details>
<details><summary>Hint 2</summary>

Choose polynomials converging uniformly to f and estimate \(\int f(f-p_n)\).

</details>
<details><summary>Solution</summary>

Let \(p_n\to f\) uniformly by Weierstrass. Then \(\int fp_n=0\), so \(|\int f^2|=|\int f(f-p_n)|\le\|f\|_\infty\|f-p_n\|_\infty\to0\). Hence \(\int f^2=0\). If f were nonzero at some point, continuity would make \(f^2\) bounded below by a positive constant on a relative interval of positive length, giving a positive integral. This contradiction proves f vanishes everywhere.

</details>

### ANA-CH24-E015 — Passing through the closure

In the Stone–Weierstrass proof, suppose \(g\in\overline A\) satisfies \(\|f-g\|_\infty\le\varepsilon/3\). Explain explicitly how to obtain an element of A within \(\varepsilon\) of f, and why g itself need not belong to A.

<details><summary>Hint 1</summary>

Use the definition of closure with another error budget.

</details>
<details><summary>Hint 2</summary>

Approximate g within \(\varepsilon/3\) and apply the triangle inequality.

</details>
<details><summary>Solution</summary>

Choose \(h\in A\) with \(\|h-g\|_\infty<\varepsilon/3\). Then \(\|h-f\|_\infty<2\varepsilon/3<\varepsilon\). The maxima and minima used to construct g need only lie in the closed lattice \(\overline A\). For polynomial A, even the absolute value of the coordinate function on an interval crossing zero is continuous but not polynomial. Closure membership must not be replaced by algebra membership.

</details>

## Sources

The local read-only seed is Lucent's `modules/lucent/courses/analysis/37-polynomial-approximation.md`. A primary author exposition of Bernstein approximation and the lattice argument is Alexandre Freire's [The Weierstrass and Stone Approximation Theorems](https://web.math.utk.edu/~afreire/teaching/m562s26/Stone_Weierstrass_proof.pdf), consulted for theorem scope and proof organization. The proofs here establish the stated compact, unital, real version in full; no claim about the more general nonunital or complex versions is needed.

## Summary

Bernstein polynomials average sampled values with positive weights whose second moment concentrates near the input. Uniform continuity controls nearby samples, and the moment bound controls the total distant weight, proving Weierstrass approximation on every compact interval. In the real Stone–Weierstrass theorem, algebraic closure first supplies absolute values and hence a lattice. Separation and constants give two-point interpolation; two finite subcovers convert those local fits into global upper and lower error bounds. Density approximates values, without implying convergence of derivatives or a Taylor representation. These ideas prepare later function-space arguments in which proving a statement on a dense algebra determines it on every continuous function.
