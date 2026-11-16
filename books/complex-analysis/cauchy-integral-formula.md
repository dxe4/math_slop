
# Cauchy's Integral Formula

A boundary integral can recover every value of a holomorphic function inside a disk. More surprisingly, the same formula supplies every derivative. Thus higher regularity is a theorem, not an extra assumption hidden in the definition of holomorphy. This chapter completes the equivalence between holomorphic and analytic functions and gives the estimates behind many later compactness and existence arguments.

Read [The Cauchy–Goursat Theorem](cauchy-goursat.md). All positively oriented circles are traversed once counterclockwise. A hypothesis of holomorphy near a closed disk includes a neighborhood of its boundary; when a function is known only inside an open disk, use a smaller circle.

## Recovering an interior value

**Theorem 7.1 (Cauchy formula on a disk).** Suppose \(f\) is holomorphic on an open set containing \(\overline{D(a,R)}\), where \(R>0\). If \(|z-a|<R\), then
\[
 f(z)=\frac1{2\pi i}\int_{|w-a|=R}\frac{f(w)}{w-z}\,dw.
\]

**Proof.** The compact disk has an interior margin in the open holomorphy set, so \(f\) is holomorphic on a slightly larger concentric disk. On that convex disk, define
\[
 q(w)=\frac{f(w)-f(z)}{w-z}\quad(w\ne z),\qquad q(z)=f'(z).
\]
It is continuous at \(z\) by the derivative definition and holomorphic elsewhere. The continuous-exception lemma from Chapter 6 supplies a primitive for \(q\), hence its circle integral is zero. Therefore
\[
 \int\frac{f(w)}{w-z}dw
 =f(z)\int\frac{dw}{w-z}.
\]
The index calculation of Chapter 5 gives the last integral as \(2\pi i\), because \(z\) lies inside the positively oriented circle. Division proves the formula. \(\square\)

The proof did not assume a second derivative or a Taylor expansion of \(f\). Its exceptional quotient was used only through the limited lemma already proved. This order matters: using smoothness of the derivative to prove the theorem that first establishes that smoothness would be circular.

The variable \(w\) moves along the boundary, while \(z\) is the interior point recovered. Their roles cannot be exchanged in the denominator. The formula is not a prescription for evaluating \(f\) at a boundary point where \(w-z\) can vanish. A separate boundary-limit theorem would be needed there.

## Taylor representation and all derivatives

For \(|z-a|\le r<R\), expand the Cauchy kernel as a uniformly convergent geometric series:
\[
 \frac1{w-z}=\sum_{n=0}^{\infty}
 \frac{(z-a)^n}{(w-a)^{n+1}},
 \qquad |w-a|=R.
\]
The ratio has modulus at most \(r/R<1\), so the uniform-limit integral rule applies.

**Theorem 7.2 (Holomorphic implies analytic).** Under the preceding hypotheses,
\[
 f(z)=\sum_{n=0}^{\infty}c_n(z-a)^n,\qquad
 c_n=\frac1{2\pi i}\int_{|w-a|=R}
 \frac{f(w)}{(w-a)^{n+1}}dw,
\]
for \(|z-a|<R\), with uniform convergence on each smaller closed disk. In particular \(f\) has derivatives of every order and \(c_n=f^{(n)}(a)/n!\).

**Proof.** Substitute the uniform geometric expansion into Theorem 7.1 and pass the integral through its partial-sum limit. If \(M=\max_{|w-a|=R}|f(w)|\), the ML estimate gives \(|c_n|\le M/R^n\). This bounds the resulting power series uniformly on every radius \(r<R\). The power-series differentiation theorem now supplies all derivatives and the coefficient identity. \(\square\)

Every holomorphic function is therefore analytic locally, and Chapter 3 already proved the converse. The equivalence holds on open sets. Differentiability at one isolated point still does not imply any such expansion on a neighborhood.

The proof also shows \(f'\) is holomorphic and continuous, because it is a differentiated power-series sum locally. Thus the Cauchy–Riemann components are automatically smooth and harmonic, with no additional \(C^2\) hypothesis needed once holomorphy on a neighborhood is established.

**Theorem 7.3 (Derivative formula and estimates).** For every integer \(n\ge0\) and every interior \(z\),
\[
 f^{(n)}(z)=\frac{n!}{2\pi i}
 \int_{|w-a|=R}\frac{f(w)}{(w-z)^{n+1}}dw.
\]
In particular, at the center,
\[
 |f^{(n)}(a)|\le\frac{n!M}{R^n}.
\]

**Proof.** Differentiate the parameter \(z\) in Cauchy's formula. This operation is legitimate on any compact interior subdisk: the distance from \(z\) to the circle has a positive lower bound, so the kernel and every proposed derivative have uniformly convergent local geometric expansions in a small parameter increment. Their difference-quotient remainders tend uniformly to zero on the circle; ML permits their passage through the integral. Repeating gives the factor \(n!\) and the stated kernel. At \(z=a\), its modulus is \(R^{-n-1}\); multiply by circle length \(2\pi R\) to obtain the estimate. \(\square\)

The estimate has an important quantifier: \(M\) is a bound on the chosen circle, and \(R\) must be a legal radius. One cannot send \(R\) to infinity for a function holomorphic only on a fixed disk. One also cannot replace a global bound by a bound on the real diameter.

A Taylor-tail bound follows immediately:
\[
 \left|f(z)-\sum_{n=0}^Nc_n(z-a)^n\right|
 \le M\,\frac{(|z-a|/R)^{N+1}}{1-|z-a|/R}
 \quad(|z-a|<R).
\]
This is a geometric consequence of the coefficient estimate, valid when the same circle bound \(M\) is available. It supplies an explicit finite approximation guarantee.

## Morera's converse and compact limits

**Theorem 7.4 (Morera).** Let \(f\) be continuous on an open set. If its integral around every triangle whose closed set lies inside that open set is zero, then \(f\) is holomorphic.

**Proof.** Work in a disk contained in the open set. The segment construction used in Chapter 6, relying only on continuity and zero triangle integrals, gives a primitive \(F\) with \(F'=f\). The function \(F\) is holomorphic by that definition. Theorem 7.2 now makes its derivative holomorphic, so \(f\) is holomorphic on the disk. Each point has such a disk, proving the assertion throughout the open set. \(\square\)

Continuity is part of this theorem. Vanishing selected numerical triangle sums is not the hypothesis, which quantifies over every legal triangle. Nor does zero integral around just one fixed contour determine the function's differentiability.

**Theorem 7.5 (Compact-uniform limit theorem).** If holomorphic functions \(f_j\) on \(\Omega\) converge uniformly on every compact subset to \(f\), then \(f\) is holomorphic. Every fixed-order derivative converges uniformly on compact subsets as well.

**Proof.** Uniform convergence on small closed disks makes the limit continuous. For any triangle compactly contained in \(\Omega\), ML passes the limit through its boundary integral. Each integral is zero by Goursat, so the limit integral is zero. Morera proves holomorphy.

For derivative convergence, let \(K\Subset\Omega\). Choose \(r>0\) so that the closed \(r\)-neighborhood of \(K\) is still compactly inside \(\Omega\), using the interior-margin lemma. Apply the derivative formula on the radius-\(r\) circle about each point of \(K\) to \(f_j-f\). It gives
\[
 \sup_K|f_j^{(n)}-f^{(n)}|
 \le\frac{n!}{r^n}\sup_{K_r}|f_j-f|\to0.
\]
The same bound works for every center in \(K\), proving uniformity. \(\square\)

The hypotheses are compact-uniform rather than merely pointwise. A sequence can have pointwise behavior that does not preserve continuity. The theorem is especially strong because once convergence is controlled in values, all fixed derivative orders follow from the same surrounding compact bound.

## Liouville and polynomial growth

**Theorem 7.6 (Liouville).** A bounded entire function is constant.

**Proof.** Suppose \(|f|\le M\) on the plane. For any center \(a\) and every radius \(R>0\), the first derivative estimate gives \(|f'(a)|\le M/R\). Let \(R\to\infty\). Then \(f'(a)=0\) for every \(a\), and the connected-domain constancy theorem makes \(f\) constant. \(\square\)

An entire function bounded along one line need not be constant. The function \(e^z\) has modulus one on the imaginary axis, but grows along the positive real axis. The theorem's global boundedness supplies one bound that works on circles of arbitrarily large radius.

**Corollary 7.7 (Polynomial growth).** If \(f\) is entire and \(|f(z)|\le C(1+|z|)^m\) for an integer \(m\ge0\), then \(f\) is a polynomial of degree at most \(m\).

**Proof.** The Taylor coefficient about zero satisfies
\[
 |c_n|\le C(1+R)^m/R^n.
\]
For \(n>m\), let \(R\to\infty\) to obtain \(c_n=0\). The Taylor representation holds on every finite disk, with the same coefficients by uniqueness, so \(f\) equals the resulting polynomial throughout the plane. \(\square\)

The degree bound is an upper bound. Some top coefficients may vanish. A growth estimate is also not an identity: it does not determine the remaining coefficients without derivative or value data.

## The fundamental theorem of algebra

**Theorem 7.8 (Fundamental theorem of algebra).** Every nonconstant complex polynomial has a complex zero.

**Proof.** Suppose \(p(z)=a_nz^n+\cdots+a_0\), with \(n\ge1\), \(a_n\ne0\), has no zero. Then \(g=1/p\) is entire. For sufficiently large \(|z|\),
\[
 |p(z)|\ge |a_n||z|^n-\sum_{k<n}|a_k||z|^k
 \ge \tfrac12|a_n||z|^n.
\]
Indeed dividing the lower-order sum by \(|z|^n\) makes it tend to zero. Thus \(g\) is bounded outside a sufficiently large disk. On the closed disk it is continuous, since the denominator never vanishes, and compactness supplies a finite bound. Therefore \(g\) is bounded entire and constant by Liouville. Its constant is nonzero, so \(p\) is constant, a contradiction. \(\square\)

Polynomial division by a known factor \(z-a\) reduces the degree by one. Applying the theorem repeatedly therefore factors every degree-\(n\) polynomial into \(n\) linear factors, counted with multiplicity. The theorem proves existence; it does not provide a finite formula for finding all high-degree roots.

The proof relies on boundedness of a reciprocal and the absence of every zero. It would be invalid to declare \(1/p\) entire before checking that assumption. The contradiction is what establishes that the assumption cannot hold for a nonconstant polynomial.

## Worked example 7.1: a higher-order kernel integral

For the positive circle \(|w|=2\), compute
\[
 \int\frac{e^w}{(w-1)^3}dw.
\]
The function \(e^w\) is entire, the point one is strictly inside, and the denominator is a third power, corresponding to the second derivative formula. Hence the integral is
\[
 \frac{2\pi i}{2!}E''(1)=\pi i e.
\]
A clockwise traversal would negate it. The factorial and the derivative order are separate pieces of the formula; confusing the denominator power with the derivative order changes the answer.

## Worked example 7.2: a valid but conservative estimate

For \(f(z)=1/(1+z^2)\), choose the circle \(|z|=1/2\). The reverse triangle inequality gives \(|1+z^2|\ge3/4\), so \(M\le4/3\). Cauchy's estimate yields
\[
 |f''(0)|\le 2!(4/3)/(1/2)^2=32/3.
\]
The exact series is \(\sum_{n=0}^{\infty}(-1)^nz^{2n}\), so \(f''(0)=-2\). The estimate is correct but not sharp.

The available radius cannot be sent through one without encountering the zeros \(\pm i\) of the denominator. The estimate's usefulness depends on the legal circle and a proved bound there, not on an assumption that all derivatives are small.

## Worked example 7.3: finite derivative data plus global growth

Suppose \(g\) is entire, \(|g(z)|\le10(1+|z|^2)\), and \(g(0)=1\), \(g'(0)=-2\), \(g''(0)=6\). The growth corollary makes \(g\) a polynomial of degree at most two. The derivative data then identify
\[
 g(z)=1-2z+3z^2.
\]
These data would not determine a general entire function without the growth assumption: adding \(z^3\), for example, preserves the three initial derivatives but changes the function.

The displayed polynomial is consistent with the bound, since \(1+2r+3r^2\le10(1+r^2)\) for \(r\ge0\). Thus the conclusion is not based on contradictory hypotheses.

## Why boundary information is so rigid

A holomorphic function cannot be altered at one interior point while keeping the same surrounding values and remaining holomorphic: continuity alone already prohibits an isolated value change, and Cauchy's formula encodes the stronger analytic constraints throughout a disk. Values on a boundary circle determine all Taylor coefficients at its center.

This rigidity is local-to-global in a precise sense. Each interior circle supplies a local expansion, and connectedness will propagate identities in the next chapter. The result is not permission to reconstruct an arbitrary function from noisy samples: a finite numerical sampling problem needs separate stability and approximation estimates.

## Exercises

### Exercise 7.1 {#cauchy-integral-formula-ex-cauchy-simple}

Evaluate the positive unit-circle integral of exp(z)/z.

<details><summary>Hint 1</summary>

The numerator is entire.

</details>
<details><summary>Hint 2</summary>

Use Cauchy's value formula at zero.

</details>
<details><summary>Solution</summary>

The integral is 2πi exp(0)=2πi. The point zero lies strictly inside the circle, while the numerator is holomorphic on its whole neighborhood. The singular kernel is the one accounted for by the formula.

</details>

### Exercise 7.2 {#cauchy-integral-formula-ex-cauchy-derivative}

Evaluate the positive |z|=3 integral of z^4/(z-1)^2.

<details><summary>Hint 1</summary>

The denominator power corresponds to one derivative.

</details>
<details><summary>Hint 2</summary>

Differentiate the numerator at one.

</details>
<details><summary>Solution</summary>

Cauchy's first derivative formula gives 2πi times 4·1^3, hence 8πi. The numerator is entire and the selected point one is inside the radius-three circle.

</details>

### Exercise 7.3 {#cauchy-integral-formula-ex-factorial-kernel}

Evaluate the positive |z|=2 integral of sin(z)/z^4.

<details><summary>Hint 1</summary>

The derivative order is three.

</details>
<details><summary>Hint 2</summary>

The third derivative of sine at zero is -1.

</details>
<details><summary>Solution</summary>

The integral is (2πi/3!)sin'''(0)=-πi/3. The factorial is six, not four. All function and contour hypotheses hold because sine is entire and zero is strictly interior.

</details>

### Exercise 7.4 {#cauchy-integral-formula-ex-derivative-estimate}

If f is holomorphic near the closed radius-two disk and |f|≤5 on its circle, bound |f'''(0)|.

<details><summary>Hint 1</summary>

Use n!M/R^n.

</details>
<details><summary>Hint 2</summary>

Here n=3.

</details>
<details><summary>Solution</summary>

The estimate is 3!·5/2^3=15/4. This is a guaranteed upper bound under the stated surrounding-circle hypothesis. It does not assert that the derivative attains that value.

</details>

### Exercise 7.5 {#cauchy-integral-formula-ex-liouville-lines}

Why does |exp(iy)|=1 for real y not contradict Liouville?

<details><summary>Hint 1</summary>

The theorem requires boundedness throughout C.

</details>
<details><summary>Hint 2</summary>

Inspect the positive real axis.

</details>
<details><summary>Solution</summary>

The exponential is bounded on that line, but exp(x) grows without bound as real x→∞. Therefore there is no global finite M controlling every circle, and Liouville's hypothesis fails.

</details>

### Exercise 7.6 {#cauchy-integral-formula-ex-polynomial-growth-degree}

If an entire function satisfies |f(z)|≤7(1+|z|)^3, what can be concluded?

<details><summary>Hint 1</summary>

Apply the growth corollary.

</details>
<details><summary>Hint 2</summary>

The conclusion need not have exact degree three.

</details>
<details><summary>Solution</summary>

Every Taylor coefficient of degree above three vanishes by sending the Cauchy radius to infinity. Thus f is a polynomial of degree at most three, possibly lower or constant. The bound alone does not identify its remaining coefficients.

</details>

### Exercise 7.7 {#cauchy-integral-formula-ex-morera-continuity}

State the role of continuity in Morera's proof.

<details><summary>Hint 1</summary>

The segment-defined primitive needs a derivative.

</details>
<details><summary>Hint 2</summary>

Its difference quotient is an average of the original function.

</details>
<details><summary>Solution</summary>

Continuity makes the short-segment average tend to the function's value, proving the constructed primitive has derivative f. Then Cauchy's theorem about derivatives gives f holomorphic. Without the stated continuity one cannot make that inference from the same argument.

</details>

### Exercise 7.8 {#cauchy-integral-formula-ex-uniform-derivative-limit}

If f_n→f compact-uniformly and each f_n is holomorphic, explain why the derivatives converge compact-uniformly.

<details><summary>Hint 1</summary>

Choose surrounding circles with a common interior margin.

</details>
<details><summary>Hint 2</summary>

Apply the derivative estimate to f_n-f.

</details>
<details><summary>Solution</summary>

A compact set K has a common surrounding radius r inside the domain. The first derivative error on K is bounded by r^-1 times the uniform value error on the compact r-neighborhood. That value error tends to zero, so the derivative error does too. Higher orders use n!/r^n.

</details>

### Exercise 7.9 {#cauchy-integral-formula-ex-fta-reciprocal}

In the FTA proof, why is 1/p bounded on a closed disk under the no-zero assumption?

<details><summary>Hint 1</summary>

It is continuous there.

</details>
<details><summary>Hint 2</summary>

Use compactness, rather than a lower bound guessed from coefficients.

</details>
<details><summary>Solution</summary>

The no-zero assumption makes 1/p a continuous function on the entire closed disk. A continuous complex modulus attains a finite maximum on that compact set. This supplies the interior bound, while leading-term dominance supplies the exterior bound.

</details>

### Exercise 7.10 {#cauchy-integral-formula-ex-taylor-tail}

For |z|≤R/2 and circle bound M, bound the Taylor tail after degree N about the center.

<details><summary>Hint 1</summary>

Use the geometric tail estimate.

</details>
<details><summary>Hint 2</summary>

The ratio is at most one half.

</details>
<details><summary>Solution</summary>

The tail is at most M(1/2)^(N+1)/(1-1/2)=M/2^N. It is uniform on the half-radius disk. This is a sufficient bound and can be larger than the actual truncation error.

</details>

### Exercise 7.11 {#cauchy-integral-formula-ex-boundary-hypothesis}

Can Cauchy's formula on |z|=1 be invoked if f is known holomorphic only on |z|<1?

<details><summary>Hint 1</summary>

The boundary values may not even be defined.

</details>
<details><summary>Hint 2</summary>

Use a smaller circle instead.

</details>
<details><summary>Solution</summary>

No direct invocation on that boundary is justified. For every r<1, however, the function is holomorphic on a neighborhood of the closed radius-r disk, so the formula applies there. Reaching the original boundary requires additional extension or boundary-limit assumptions.

</details>

### Exercise 7.12 {#cauchy-integral-formula-ex-bounded-derivative}

Prove that an entire function with globally bounded derivative is affine.

<details><summary>Hint 1</summary>

Apply Liouville to the derivative.

</details>
<details><summary>Hint 2</summary>

Then subtract its constant multiple of z.

</details>
<details><summary>Solution</summary>

Cauchy theory makes f' entire. If it is globally bounded, Liouville gives f'=a constant. The derivative of f-az is zero on the connected plane, so f=az+b. Boundedness of f itself would force a=0, but bounded derivative alone allows nonconstant affine functions.

</details>

## Worked example: a radius chosen for an actual estimate

Let \(f(z)=1/(3-z)\) and estimate its derivatives at the origin using a circle \(|z|=r<3\). On that circle, \(|3-z|\ge3-r\), so \(M_r\le1/(3-r)\). Cauchy's derivative estimate gives
\[
 |f^{(n)}(0)|\le\frac{n!}{r^n(3-r)}.
\]
The formula is valid for every \(r\) strictly below three, but the bound is not equally sharp for every choice. For \(n\ge1\), minimizing the right side is equivalent to maximizing \(r^n(3-r)\); its derivative vanishes at \(r=3n/(n+1)\). This choice yields the explicit bound \(\frac{(n+1)^{n+1}}{n^n}\cdot\frac{n!}{3^{n+1}}\), which is about \(e(n+1)\,n!/3^{n+1}\). The exact derivative, obtained from the geometric series, is \(n!/3^{n+1}\). The comparison shows how Cauchy's estimate captures the correct factorial and geometric dependence even when the crude modulus bound loses a factor of about \(e(n+1)\).

Choosing \(r=3\) would be illegal: the pole lies on that circle and there is no finite \(M_r\). Choosing a radius beyond three would put the pole inside and violate the holomorphy hypothesis. The largest geometrically visible disk is useful as a limit of admissible radii, not as an automatically admissible contour itself. In less explicit examples, keeping the radius strictly inside the domain is the first step in a reliable derivative estimate.

## Uniform convergence and derivatives: where the margin enters

Suppose holomorphic \(f_m\) converge uniformly on compact subsets of an open set \(U\) to \(f\). Fix \(a\in U\), then choose \(R>0\) with the closed disk \(\overline{D(a,R)}\subset U\). For any \(0<r<R\), Cauchy's formula applied on the circle of radius \(R\) gives, for \(|z-a|\le r\),
\[
 f_m^{(k)}(z)-f_n^{(k)}(z)
 =\frac{k!}{2\pi i}\int_{|w-a|=R}\frac{f_m(w)-f_n(w)}{(w-z)^{k+1}}\,dw.
\]
Because \(|w-z|\ge R-r\), the modulus is at most \(k!R(R-r)^{-k-1}\) times the supremum of \(|f_m-f_n|\) on that circle. The latter tends to zero. Thus each derivative sequence is uniformly Cauchy on the smaller disk. The limit of the functions is holomorphic by the chapter's compact-limit theorem, and its derivatives are the limits just bounded. The gap \(R-r\) is the quantitative source of this stronger conclusion.

The result fails if only pointwise convergence is known. For instance, on a real interval sequences of differentiable functions may converge pointwise while their derivatives oscillate or blow up. In the holomorphic setting, compact-uniform convergence gives enough boundary control on every interior circle to avoid that failure. It is still an interior statement: without an enclosing circle, there is no reason for derivative convergence at a boundary point.

## Polynomial growth and the exact degree conclusion

Suppose an entire function satisfies \(|f(z)|\le C(1+|z|)^m\) for all \(z\), where \(m\) is a nonnegative integer. Cauchy's estimate on \(|z|=R\) gives \(|f^{(n)}(0)|\le n!C(1+R)^m/R^n\). For \(n>m\), the right side tends to zero as \(R\to\infty\); therefore \(f^{(n)}(0)=0\). Its global Taylor series terminates after degree at most \(m\), so \(f\) is a polynomial of that degree or less. The word global matters: the estimate holds on arbitrarily large circles because \(f\) is entire. A holomorphic function on a bounded disk can have the same type of bound there without being a polynomial.

This argument recovers Liouville when \(m=0\), and it gives more than a qualitative statement. If an entire function has growth slower than any fixed positive power, applying the estimate for \(n=1\) may already force a constant. But the exponent in a proposed bound must be kept explicit: an estimate with an unspecified constant depending on \(R\) cannot be sent to infinity in this way.

## The algebraic-root argument and its contradiction

Let \(p\) be a nonconstant polynomial. If it had no complex zero, \(1/p\) would be entire. Its leading term gives \(|p(z)|\to\infty\) as \(|z|\to\infty\): divide by the leading monomial and observe that every lower-degree ratio tends to zero. Thus \(1/p(z)\to0\) outside large disks. On the remaining compact disk it is continuous and bounded because the assumed absence of zeros gives a positive minimum of \(|p|\). It is therefore bounded on the whole plane. Liouville makes \(1/p\) constant, forcing \(p\) constant, a contradiction. The compact-disk step is essential; a statement that a function tends to zero at infinity alone does not rule out a pole or unbounded behavior inside.

After one root \(a\) is found, polynomial division gives \(p(z)=(z-a)q(z)\), with \(q\) of one lower degree. Repeating the argument factors the polynomial completely, counting multiplicities when a root recurs. The analytic theorem guarantees the first root; the remaining factorization is finite algebra. This separation of roles helps identify exactly where complex analysis enters the fundamental theorem of algebra.

## A circle formula with a visible denominator gap

For \(|z-a|\le r<R\), and \(|w-a|=R\), the reverse triangle inequality gives \(|w-z|\ge R-r\). Thus the Cauchy kernel \(1/(w-z)\) and every derivative kernel are uniformly bounded on the smaller disk. This simple geometric gap justifies differentiating the circle integral under its finite real parameter integral, and it underlies the derivative convergence bound used above. The argument does not extend to \(|z-a|=R\), where \(w=z\) can occur and the denominator bound collapses. A formula for interior values should not be read as a boundary formula without an additional limiting theorem.

## Sources

Original exposition and exercises. Primary references: Jiří Lebl, [Guide to Cultivating Complex Analysis](https://www.jirka.org/ca/), and Stein–Shakarchi, [Complex Analysis](https://press.princeton.edu/books/hardcover/9780691113852/complex-analysis). Cauchy's formula is proved here from the earlier continuous-exception lemma, keeping higher derivative regularity as a conclusion.

## Summary

Cauchy's formula reconstructs interior values and derivatives from a legal surrounding circle. It proves holomorphic functions are analytic, gives quantitative derivative and tail bounds, and preserves holomorphy under compact-uniform limits. Liouville and the fundamental theorem of algebra follow from those estimates. Next we use analytic expansions and the mean-value identity to understand zeros, uniqueness, and maximum modulus.
