
# Paths and Contour Integrals

A contour integral accumulates a complex-valued rate along an oriented path. Its value depends on the integrand, the path, and sometimes the way the path winds around excluded points. The construction uses ordinary real integration; the deeper theorems concern which path changes preserve its value.

Read the preceding chapters on domains, holomorphic functions, and branches. Until Cauchy's theorem is proved, holomorphy alone is not used as a reason to set a closed integral to zero. We first establish the definitions, estimates, primitive criterion, and winding number that make such a theorem meaningful.

## Paths with enough regularity to integrate

**Definition 5.1 (Piecewise smooth path).** A path \(\gamma:[a,b]\to\mathbb C\) is piecewise \(C^1\) if it is continuous and there is a finite partition such that it is continuously differentiable on each piece, using one-sided endpoint derivatives. Its length is
\[
 \ell(\gamma)=\sum\int |\gamma'(t)|dt.
\]
A contour means such a path, possibly assembled from several pieces. It is closed if its endpoints agree.

We do not require nonzero velocity everywhere. A pause contributes zero length and zero integral. A path can also retrace or cross itself; neither behavior prevents its integral from being defined. A simple closed curve, when required by a later region theorem, is a stronger condition and will be stated separately.

**Definition 5.2 (Complex contour integral).** For continuous \(f\) on the path image, define
\[
 \int_\gamma f(z)\,dz
 =\sum\int f(\gamma(t))\gamma'(t)\,dt,
\]
with each ordinary integral taken componentwise over the pieces.

If \(f=u+iv\) and \(z=x+iy\), multiplication gives
\[
 f\,dz=(u\,dx-v\,dy)+i(v\,dx+u\,dy).
\]
This identity connects complex integration with two real line integrals. The factor is \(dz\), not the nonnegative arc-length element \(ds\). Replacing \(\gamma'\) by \(|\gamma'|\) changes the quantity.

The image set alone is not the full contour data. Traveling twice around a circle doubles an integral that may be nonzero, and reversing travel negates it. A drawing without arrows or traversal count can therefore leave the question underspecified.

## Reparametrization, reversal, and addition

If \(\phi:[c,d]\to[a,b]\) is an increasing piecewise \(C^1\) change of parameter onto the whole interval, the chain rule and ordinary substitution give
\[
 \int_{\gamma\circ\phi}f\,dz=\int_\gamma f\,dz.
\]
For a decreasing onto change, the value is negated. One can apply substitution piece by piece at the finite break points. A change that does not cover the original parameter interval describes only part of the contour and is not this invariance statement.

Define the reverse contour by \(\gamma^-(t)=\gamma(a+b-t)\). Its derivative reverses direction, so \(\int_{\gamma^-}f=-\int_\gamma f\). If one contour ends where another begins, their concatenation has integral equal to the sum. Rescaling their parameter intervals to form a concatenation is harmless by the increasing reparametrization rule.

These identities also allow finite formal sums of contours with integer coefficients. Such a contour sum can describe a multiply connected region's full boundary, including negatively oriented inner loops. A coefficient records signed multiplicity. This notation will be useful for residues, but it does not grant permission to ignore the domain between the curves.

## The basic estimate

**Lemma 5.3 (Integral triangle inequality).** For a continuous complex function \(g\) on a finite real interval,
\[
 \left|\int g(t)dt\right|\le\int |g(t)|dt.
\]

**Proof.** If the integral \(I\) is zero, the claim is immediate. Otherwise multiply by \(\overline I/|I|\), a unit complex number, and take real parts:
\[
 |I|=\int\Re\!\left(\frac{\overline I}{|I|}g(t)\right)dt
 \le\int|g(t)|dt.
\]
Real integration commutes with the constant multiplier and real-part operation, proving the inequality. \(\square\)

**Theorem 5.4 (ML estimate).** If \(|f|\le M\) on a contour of length \(L\), then
\[
 \left|\int_\gamma f(z)dz\right|\le ML.
\]

**Proof.** Apply the lemma on each smooth piece to \(f(\gamma)\gamma'\), then sum and use \(|f(\gamma)\gamma'|\le M|\gamma'|\). \(\square\)

A useful consequence is a uniform-limit rule. If \(f_n\to f\) uniformly on the contour image, then
\[
 \left|\int_\gamma(f_n-f)dz\right|
 \le\ell(\gamma)\sup_{\gamma}|f_n-f|\to0.
\]
This is the exact justification for integrating a uniformly convergent power series along an interior circle. Pointwise convergence alone supplies no common supremum bound.

The estimate also explains why a small contour need not have a small integral if the integrand grows as its reciprocal radius. For \(1/z\) on a radius-\(r\) circle, \(M=1/r\) and \(L=2\pi r\), so the bound is \(2\pi\), independent of \(r\). In contrast, a bounded integrand on shrinking circles has integrals tending to zero.

## Primitives and path independence

**Definition 5.5 (Primitive).** A primitive of continuous \(f\) on an open set is a holomorphic \(F\) there with \(F'=f\).

**Proposition 5.6 (Endpoint formula).** If \(f\) has a primitive \(F\) on a domain containing the contour image, then
\[
 \int_\gamma f(z)dz=F(\gamma(b))-F(\gamma(a)).
\]

**Proof.** On every smooth parameter piece, the complex first-order expansion and the real chain rule give \((F\circ\gamma)'=F'(\gamma)\gamma'=f(\gamma)\gamma'\). This derivative is continuous because \(f\) and \(\gamma'\) are continuous there. Apply the real fundamental theorem to both components and add the pieces. Intermediate endpoint terms cancel. \(\square\)

In particular every closed contour integral of a function with a primitive is zero. The primitive must exist on the entire relevant domain, not merely in small neighborhoods of individual contour points.

**Theorem 5.7 (Primitive criterion).** For continuous \(f\) on a domain \(\Omega\), the following are equivalent: \(f\) has a primitive; its integral is independent of the piecewise smooth path joining fixed endpoints; every closed piecewise smooth contour in \(\Omega\) has integral zero.

**Proof.** A primitive gives path independence by the endpoint formula, and path independence gives zero on a closed contour by comparison with the constant path. Conversely suppose every closed contour integral is zero. Two joining paths differ by the closed concatenation of the first and the reverse of the second, so their integrals agree.

Fix \(a\in\Omega\), and define \(F(z)\) as the integral from \(a\) to \(z\) along a polygonal joining path, whose existence was proved in Chapter 1. This is well defined by path independence. In a small disk around \(z\), append the straight segment from \(z\) to \(z+h\). Then
\[
 \frac{F(z+h)-F(z)}h=\int_0^1 f(z+th)\,dt\to f(z)
\]
by continuity. Hence \(F\) is a primitive. \(\square\)

The criterion is an equivalence, not an assertion that every holomorphic function has a global primitive on every domain. The circle calculation below disproves that assertion for \(1/z\) on the punctured plane. Cauchy theory will supply a topological condition that does guarantee primitives.

## Winding number and its integer meaning

**Definition 5.8 (Index).** For a closed contour avoiding \(a\), define
\[
 \operatorname{Ind}(\gamma,a)=\frac1{2\pi i}\int_\gamma\frac{dz}{z-a}.
\]

**Theorem 5.9 (Integer index).** The index is an integer equal to the net change of a continuous argument of \(\gamma(t)-a\), divided by \(2\pi\).

**Proof.** A continuous nonzero path has a continuous argument along its parameter interval. To construct it, cover its compact image by small disks avoiding zero on which local argument branches exist. Uniform continuity allows a finite parameter subdivision with each subarc inside one such disk. Start with a chosen initial argument and add multiples of \(2\pi\) to successive local branches to match endpoint values. They agree on connected overlaps along the subarcs, giving a continuous lift \(\theta(t)\).

For a piecewise \(C^1\) path, this lift is piecewise \(C^1\), since each local argument is smooth. Write \(\gamma(t)-a=\rho(t)e^{i\theta(t)}\), with \(\rho>0\). On each piece,
\[
 \frac{\gamma'}{\gamma-a}=\frac{\rho'}{\rho}+i\theta'.
\]
Integrating and summing gives \(\log\rho(b)-\log\rho(a)+i(\theta(b)-\theta(a))\). Closedness makes the first difference zero and the second difference an integer multiple of \(2\pi\). This proves both assertions. \(\square\)

The lift need not return to its original real value even when the complex path closes. That discrepancy is precisely the winding number. A global argument function on the punctured plane would force every such discrepancy to vanish, contradicting a circle's value.

The same lift construction defines winding for continuous closed paths, without differentiability. Its agreement with the integral when the path is piecewise smooth permits a topological homotopy argument.

**Proposition 5.10 (Homotopy invariance).** A continuous family of closed paths avoiding \(a\) has constant winding number.

**Proof.** First compare two sufficiently close closed paths \(\gamma,\eta\), with \(\sup|\eta-\gamma|<\min|\gamma-a|\). Their quotient \(q=(\eta-a)/(\gamma-a)\) lies in the disk \(|q-1|<1\), where one continuous argument branch exists. The argument change of \(q\) is zero because its endpoints agree. Adding that argument to a lift for \(\gamma-a\) supplies a lift for \(\eta-a\), so both windings agree.

For a continuous homotopy \(H(s,t)\), fix \(s_0\). Its loop has a positive minimum distance from \(a\). Uniform continuity on the compact parameter rectangle makes nearby \(s\)-loops sufficiently close for the preceding comparison. The winding is therefore locally constant as a function of \(s\), and connectedness of the parameter interval makes it constant throughout. \(\square\)

A radius-\(R\) positive circle about \(a\) has winding one; a constant loop has winding zero. Thus the circle cannot contract in the punctured plane. This completes the promised proof that an annulus is not simply connected.

For fixed \(\gamma\), its index is locally constant as a function of \(a\) off the contour. If \(d=\min|\gamma-a|>0\) and \(|b-a|<d/2\), the difference of the reciprocal integrands is at most \(2|b-a|/d^2\). The ML bound proves continuity in \(a\), and integer values make the result locally constant. Far from the contour, the bound tends to zero, forcing the integer to be zero. These facts explain the familiar inside/outside values without assuming every contour is simple.

## Worked example 5.1: a polynomial needs only endpoints

For \(f(z)=z^2+2z\), a global primitive is \(F(z)=z^3/3+z^2\). Any piecewise smooth path from \(1\) to \(i\) has integral
\[
 F(i)-F(1)=(-1-i/3)-4/3=-7/3-i/3.
\]
A straight segment, a quarter-circle, or a path with harmless detours gives the same value. Reversing the path negates it.

The reason is the proved primitive identity, not a general claim that every complex integral depends only on endpoints. The next example has no global primitive on its stated domain and therefore behaves differently.

## Worked example 5.2: a circle detects the missing point

Let \(\gamma(t)=a+Re^{it}\), \(0\le t\le2\pi\), with \(R>0\). Then \(dz=iRe^{it}dt\), so
\[
 \int_\gamma\frac{dz}{z-a}=\int_0^{2\pi}i\,dt=2\pi i.
\]
The function is holomorphic on the punctured plane but has no primitive there by Theorem 5.7. Reversing the circle gives \(-2\pi i\); traversing it twice gives \(4\pi i\).

Its local logarithmic primitives are consistent with this conclusion. A branch can differentiate to \(1/(z-a)\) on a cut domain, but no one such branch exists around the whole circle. Local differentiation and global integration are measuring different obligations.

## Worked example 5.3: a length bound and an exact answer

On the upper unit semicircle from one to minus one, \(|e^z|=e^{\Re z}\le e\), and the length is \(\pi\). The ML estimate gives \(|\int e^zdz|\le\pi e\).

Because \(e^z\) is its own global primitive, the exact integral is \(e^{-1}-e\). Its magnitude \(e-e^{-1}\) satisfies the bound. The inequality is a guaranteed upper bound; it was not expected to recover the exact value or its real direction.

For a different continuous integrand without a known primitive, the same estimate would still apply. No holomorphy hypothesis was needed to prove ML.

## Worked example 5.4: the index of a circle from series

For the positive circle \(|z|=R\) and \(|a|<R\), expand uniformly on the circle
\[
 \frac1{z-a}=\sum_{n=0}^{\infty}\frac{a^n}{z^{n+1}}.
\]
Termwise integration is justified by the uniform geometric ratio \(|a|/R<1\). The \(n=0\) term integrates to \(2\pi i\), while every other term integrates to zero by its explicit exponential parameterization. The index is one.

If \(|a|>R\), expand instead \(-a^{-1}\sum_{n=0}^{\infty}(z/a)^n\). Every nonnegative power has zero circle integral, so the index is zero. When \(|a|=R\), the contour hits the pole and the index integral is not defined. This three-case distinction is a useful domain check in later residue problems.

## Exercises

### Exercise 5.1 {#paths-contour-integrals-ex-oriented-versus-length}

Integrate dz and ds around the positive unit circle and compare.

<details><summary>Hint 1</summary>

Parameterize by exp(it).

</details>
<details><summary>Hint 2</summary>

One integrand uses i exp(it), the other its modulus.

</details>
<details><summary>Solution</summary>

The integral of dz is the endpoint difference zero, or the direct integral of i exp(it). The arc-length integral of ds is 2π because the speed is one. They are distinct quantities; replacing dz by ds would erase orientation and change the answer.

</details>

### Exercise 5.2 {#paths-contour-integrals-ex-circle-powers}

Compute the integral of z^m around |z|=R positively for any integer m.

<details><summary>Hint 1</summary>

Use z=R exp(it).

</details>
<details><summary>Hint 2</summary>

Separate m=-1 from the other integer powers.

</details>
<details><summary>Solution</summary>

The pullback is iR^(m+1)exp(i(m+1)t)dt. For m≠-1 its integral is zero over a full period. For m=-1 it is i dt and the integral is 2πi. The contour avoids zero, so negative powers are defined on it.

</details>

### Exercise 5.3 {#paths-contour-integrals-ex-reverse-traversal}

A contour integral equals 3-2i. What is the value for the reversed contour traversed twice?

<details><summary>Hint 1</summary>

Reversal changes the sign.

</details>
<details><summary>Hint 2</summary>

Concatenation adds the two repeated contributions.

</details>
<details><summary>Solution</summary>

One reversed traversal gives -3+2i, so two give -6+4i. This follows directly from the reverse and concatenation rules. The image set may be unchanged even though its signed multiplicity differs.

</details>

### Exercise 5.4 {#paths-contour-integrals-ex-ml-distance}

If a length-five contour stays at distance at least two from a, bound the integral of 1/(z-a)^2.

<details><summary>Hint 1</summary>

Bound the integrand by the reciprocal squared distance.

</details>
<details><summary>Hint 2</summary>

Apply ML.

</details>
<details><summary>Solution</summary>

The integrand modulus is at most 1/4, so the integral modulus is at most 5/4. This is an upper bound, not an exact value. The positive distance guarantees the integrand is continuous and defined along the contour.

</details>

### Exercise 5.5 {#paths-contour-integrals-ex-primitive-rational}

Find the integral of 1/(z-2)^2 from 0 to i along any path avoiding 2.

<details><summary>Hint 1</summary>

Find a primitive defined on the whole punctured domain.

</details>
<details><summary>Hint 2</summary>

Differentiate -1/(z-2).

</details>
<details><summary>Solution</summary>

The primitive is -1/(z-2). Thus the integral is -1/(i-2)-1/2. This expression may be simplified, but it already gives the endpoint difference exactly. Unlike 1/(z-2), this reciprocal square has a global primitive on C excluding 2.

</details>

### Exercise 5.6 {#paths-contour-integrals-ex-nonholomorphic-circle}

Compute the positive radius-R circle integral of conjugate(z).

<details><summary>Hint 1</summary>

Use conjugate(z)=R exp(-it) on the circle.

</details>
<details><summary>Hint 2</summary>

The product with dz is constant in the parameter.

</details>
<details><summary>Solution</summary>

The pullback is R exp(-it)iR exp(it)dt=iR²dt. The integral is 2πiR². The integrand is smooth as a real map but is not holomorphic; there is no reason for its closed integral to vanish.

</details>

### Exercise 5.7 {#paths-contour-integrals-ex-path-criterion}

Explain why zero integrals on all closed contours produce a primitive for a continuous function on a domain.

<details><summary>Hint 1</summary>

Define its value by a joining-path integral.

</details>
<details><summary>Hint 2</summary>

Append a short segment to calculate the derivative.

</details>
<details><summary>Solution</summary>

Closed-integral cancellation makes the joining-path definition independent of choices. For a short displacement h in an interior disk, the difference quotient is the average integral of f(z+th) from zero to one, which tends to f(z) by continuity. Hence the constructed function is a primitive.

</details>

### Exercise 5.8 {#paths-contour-integrals-ex-uniform-limit-integrals}

If sup on γ of |f_n-f|≤1/n and γ has length L, bound the integral error.

<details><summary>Hint 1</summary>

Apply ML to the difference.

</details>
<details><summary>Hint 2</summary>

No derivative assumption is needed.

</details>
<details><summary>Solution</summary>

The error modulus is at most L/n, so the integrals converge to the integral of f. The common uniform bound controls every path point and is what permits passage to the limit. Pointwise convergence alone would not supply this estimate.

</details>

### Exercise 5.9 {#paths-contour-integrals-ex-circle-index}

Find the index of the positive circle |z|=2 about 0, 1, and 3.

<details><summary>Hint 1</summary>

Compare the point's modulus with the radius.

</details>
<details><summary>Hint 2</summary>

Use the inside/outside series calculation.

</details>
<details><summary>Solution</summary>

The indices are one, one, and zero. The first two points lie inside and the third outside. A point on |z|=2 would be excluded from the definition. The index is constant on each component of the contour complement.

</details>

### Exercise 5.10 {#paths-contour-integrals-ex-annulus-obstruction}

Prove a positive circle around zero cannot contract within an annulus containing it.

<details><summary>Hint 1</summary>

The contraction would also avoid zero.

</details>
<details><summary>Hint 2</summary>

Compare initial and final windings.

</details>
<details><summary>Solution</summary>

The initial circle has winding one about zero. A constant final path avoiding zero has winding zero. Homotopy invariance forbids this change, so no such contraction exists inside the annulus. The annulus is connected but not simply connected.

</details>

### Exercise 5.11 {#paths-contour-integrals-ex-sum-indices}

What is the index about zero of a radius-two positive circle followed by a radius-one negative circle?

<details><summary>Hint 1</summary>

Use additivity of integrals.

</details>
<details><summary>Hint 2</summary>

Each circle surrounds zero once with its own orientation.

</details>
<details><summary>Solution</summary>

The indices are one and minus one, so their sum is zero. This contour sum is the positive boundary of an annulus, whose inner component is clockwise. Omitting that component would change the index and the integral.

</details>

### Exercise 5.12 {#paths-contour-integrals-ex-shrinking-bound}

A continuous function is bounded by M near a. Show its integral around the radius-r circle about a tends to zero.

<details><summary>Hint 1</summary>

Its length is 2πr.

</details>
<details><summary>Hint 2</summary>

Contrast with a reciprocal singularity.

</details>
<details><summary>Solution</summary>

The ML estimate gives a modulus at most 2πMr, tending to zero. For 1/(z-a) the bound M would instead depend on r as 1/r and the circle integral remains 2πi. Boundedness near the center is the hypothesis producing the vanishing limit.

</details>

## Worked example: an integral that remembers orientation

Let \(\gamma_R(t)=Re^{it}\), \(0\le t\le2\pi\), with \(R>0\). Direct substitution, including \(dz=iRe^{it}dt\), gives
\[
 \int_{\gamma_R}\frac{dz}{z}=\int_0^{2\pi}i\,dt=2\pi i.
\]
If the same circle is traversed twice, its parametrization runs over an interval of length \(4\pi\), and the answer doubles. If traversal is reversed, substitution reverses the real integration limits and gives \(-2\pi i\). These calculations show why the trace of a path is insufficient data: the same set of points supports three different integrals.

For \(n\ne-1\), the calculation changes to \(\int_{\gamma_R}z^n dz=iR^{n+1}\int_0^{2\pi}e^{i(n+1)t}dt=0\). The exceptional exponent is exactly the one whose angular phase is constant. This elementary extraction of a Laurent coefficient is the model for the later residue calculation. It also explains why a length estimate alone cannot predict whether an integral vanishes: it controls the absolute size, whereas cancellation depends on the oriented phase.

## Uniform approximation along a fixed path

Suppose \(f_m\) and \(f\) are continuous on the trace of a rectifiable path \(\gamma\), and \(\sup_{z\in\gamma}|f_m(z)-f(z)|\to0\). Applying the basic estimate to their difference gives
\[
 \left|\int_\gamma f_m(z)\,dz-\int_\gamma f(z)\,dz\right|
 \le \operatorname{length}(\gamma)\sup_{z\in\gamma}|f_m(z)-f(z)|\to0.
\]
This is the precise limit passage used when a uniformly convergent power or Laurent series is integrated term by term on a circle. The path length is fixed. If the paths themselves change with \(m\), their lengths may grow and the conclusion need not follow from the displayed bound. Similarly, pointwise convergence of \(f_m\) along one path gives no uniform supremum estimate and does not justify the exchange without another argument.

The theorem applies especially cleanly to a circle contained strictly inside a convergence annulus. Compactness gives a uniform series tail on that circle, while its finite circumference converts that tail into an integral error. The requirement that the circle lie inside the annulus matters: convergence at isolated boundary points cannot be promoted to uniform convergence around the entire boundary by this argument.

## Path independence as a constructive recipe

Suppose every closed piecewise smooth path in a domain \(U\) has integral zero for a continuous \(f\). Fix \(a\in U\) and define \(F(z)=\int_{\gamma_{a,z}}f(w)dw\), using any allowed path from \(a\) to \(z\). Two choices give the same value: one followed by the reverse of the other is closed, and the difference of their integrals is its integral. To see \(F'(z)=f(z)\), choose a disk about \(z\) within \(U\) and extend the path by the straight segment from \(z\) to \(z+h\). Then
\[
 \frac{F(z+h)-F(z)}h-f(z)=\int_0^1\bigl(f(z+th)-f(z)\bigr)\,dt.
\]
Continuity makes the right side tend to zero uniformly in \(t\). This proves the primitive rather than merely naming one. It also identifies the actual global hypothesis: vanishing on all closed paths. Holomorphy by itself will later force local vanishing, but holes can retain nonzero periods.

## A path with corners and a valid integral

Let \(\gamma\) run from zero to one along the real segment and then from one to \(1+i\) along a vertical segment. It is piecewise smooth, though its tangent changes abruptly at one. For \(f(z)=z\), the first piece gives \(\int_0^1 t\,dt=1/2\). Parametrize the second as \(z=1+it\), \(0\le t\le1\), so \(dz=i\,dt\); its contribution is \(\int_0^1(1+it)i\,dt=i-1/2\). The total is \(i\), which also equals \(F(1+i)-F(0)\) for the primitive \(F(z)=z^2/2\). Corners are harmless because the integral is defined piecewise and the shared endpoint adds no extra term.

Now reverse the vertical piece alone and then traverse the horizontal piece backward. Each integral changes sign, giving \(-i\) for the full reversed path. If one merely redraws the same two segments in a different order without matching endpoints, there may be no continuous path at all. Parametrization and endpoint order are mathematical data, especially when applying additivity or a primitive formula.

## Sources

Original exposition and exercises. Primary references: Jiří Lebl, [Guide to Cultivating Complex Analysis](https://www.jirka.org/ca/), and Stein–Shakarchi, [Complex Analysis](https://press.princeton.edu/books/hardcover/9780691113852/complex-analysis). All integral and winding arguments used here are developed in the text, with real integration and metric compactness supplied by Real Analysis.

## Summary

A contour is an oriented parametrized path, and its integral uses the complex displacement dz. Length bounds control integral errors and uniform limits. A global primitive is equivalent to path independence and zero closed-contour integrals. Winding measures the argument change around excluded points and survives homotopies that avoid them. The next chapter proves when holomorphy makes those global contour obstructions disappear.
