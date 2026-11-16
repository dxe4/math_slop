
# Laurent Series and Singularities

Taylor series describe holomorphic functions on disks. On an annulus, negative powers are also needed, and their coefficients record what happens at a missing center. Laurent theory gives a complete classification of isolated singularities and supplies the residue coefficient used in the next chapter.

Read the preceding Cauchy, identity, and zero-factorization chapters. A two-sided Laurent series means the sum of its nonnegative-power series and its negative-power series, each converging separately; it is not an unspecified symmetric principal-value sum.

## An annular integral identity without a hidden interior hypothesis

First translate the center to zero. Suppose \(f\) is holomorphic on an annulus \(r<|w|<R\), and choose
\[
 r<\rho<|z|<\sigma<R.
\]
We claim
\[
 f(z)=\frac1{2\pi i}
 \left(\int_{|w|=\sigma}\frac{f(w)}{w-z}dw
       -\int_{|w|=\rho}\frac{f(w)}{w-z}dw\right),
\]
with both displayed circles individually counterclockwise. The minus sign makes the inner boundary clockwise in the complete annular boundary.

Here is a proof using the already established convex Cauchy theorem, rather than an unproved multiply connected region theorem. Choose an angle \(\theta_0\) not equal to an argument of \(z\), and use \(w=e^t\) on the rectangle
\[
 \log\rho\le\Re t\le\log\sigma,\qquad
 \theta_0\le\Im t\le\theta_0+2\pi.
\]
The pulled-back kernel is
\(h(t)=f(e^t)e^t/(e^t-z)\).
Exactly one exponential preimage \(t_0\) of \(z\) lies inside this rectangle, and none lies on its boundary.

Near \(t_0\), write \(e^t-z=(t-t_0)u(t)\), where \(u\) is holomorphic and \(u(t_0)=z\ne0\). Then \(h=A(t)/(t-t_0)\), with \(A(t_0)=f(z)\). Taylor expansion makes
\(h(t)-f(z)/(t-t_0)\) holomorphic across \(t_0\), and it is holomorphic on a neighborhood of the whole closed rectangle. Its boundary integral is zero. The integral of \(1/(t-t_0)\) around the positive rectangle is \(2\pi i\): its boundary can be parameterized radially from the interior point with one positive argument turn, giving index one by Chapter 5.

The horizontal rectangle edges map to the same radial segment in opposite directions, so their contributions cancel. Its right vertical edge maps to the positive outer circle and its left to the negative inner circle. The resulting boundary equality is precisely the annular formula above.

The same rectangle argument without a kernel pole proves a useful companion: for any holomorphic \(g\) on an annulus, the integrals of \(g\) around two positive concentric interior circles agree. The pulled-back function \(g(e^t)e^t\) is holomorphic throughout the rectangle, so its complete boundary integral is zero and the radial terms cancel. No primitive on the whole annulus was assumed.

## Laurent expansion and coefficient uniqueness

**Theorem 9.1 (Laurent theorem).** If \(f\) is holomorphic on
\(A=\{z:r<|z-a|<R\}\), where \(0\le r<R\le\infty\), then there is a unique expansion
\[
 f(z)=\sum_{n=-\infty}^{\infty}c_n(z-a)^n
\]
converging absolutely and uniformly on every compact subannulus. For every allowed radius \(t\),
\[
 c_n=\frac1{2\pi i}\int_{|w-a|=t}
 \frac{f(w)}{(w-a)^{n+1}}dw.
\]

**Proof.** Use the annular formula after translation. For the outer circle, \(|z-a|<\sigma\) gives
\[
 \frac1{w-z}=\sum_{n=0}^{\infty}
 \frac{(z-a)^n}{(w-a)^{n+1}}.
\]
For the inner circle, \(\rho<|z-a|\) gives
\[
 \frac1{w-z}=-\sum_{m=1}^{\infty}
 \frac{(w-a)^{m-1}}{(z-a)^m}.
\]
Both are uniformly convergent geometric expansions on their respective integration circles, so they may be integrated termwise. The sign from the inner kernel cancels the minus sign in the annular formula, giving the positive and negative Laurent series with the stated coefficients.

The coefficient formula is independent of the chosen radius because \(f(w)/(w-a)^{n+1}\) is holomorphic on the annulus, and the companion circle identity just proved applies. For a compact band \(\alpha\le|z-a|\le\beta\), choose \(r<\rho<\alpha\le\beta<\sigma<R\). ML gives
\[
 |c_n|\le M_\sigma/\sigma^n\quad(n\ge0),\qquad
 |c_{-m}|\le M_\rho\rho^m\quad(m\ge1).
\]
The resulting term bounds are geometric ratios \(\beta/\sigma<1\) and \(\rho/\alpha<1\), proving absolute and uniform convergence.

Finally integrate any such expansion termwise on an interior circle after multiplying by \((z-a)^{-k-1}\). The circle-power calculation makes every term vanish except index \(k\), whose integral is \(2\pi i c_k\). Thus every coefficient is forced, proving uniqueness. \(\square\)

Negative powers are controlled from an inner circle, and positive powers from an outer circle. One boundary estimate cannot in general control both tails. The annulus is part of the representation: another annulus separated by a singularity can have different coefficients about the same center.

## Isolated singularities and removable points

**Definition 9.2 (Isolated singularity).** A point \(a\) is an isolated singular point of \(f\) if \(f\) is holomorphic on a deleted disk \(0<|z-a|<R\). We ask whether it can be extended holomorphically to the center. The function need not originally have any assigned value there.

**Theorem 9.3 (Removable singularity criterion).** Such a singularity is removable exactly when every negative Laurent coefficient is zero. It is removable whenever \(f\) is bounded in some deleted neighborhood of \(a\).

**Proof.** If the negative coefficients vanish, the remaining power series is holomorphic on the full disk and agrees with \(f\) away from the center. Conversely a holomorphic extension has a Taylor series there, and Laurent uniqueness forces all negative coefficients to vanish.

If \(|f|\le M\) near \(a\), the coefficient estimate gives \(|c_{-m}|\le M\rho^m\) on sufficiently small circles. Let \(\rho\downarrow0\) for each fixed \(m\ge1\); then \(c_{-m}=0\). The first part proves removability. \(\square\)

A finite limit supplies boundedness and identifies the extension value. Conversely a holomorphic extension is continuous and gives a finite limit. Assigning a wrong value at the center may make the originally displayed function discontinuous, but the deleted-disk singularity still has a unique removable extension.

The hypothesis is boundedness throughout a deleted neighborhood. Bounded values along one selected approach are insufficient, as \(e^{1/z}\) demonstrates on a negative real approach.

## Poles and essential singularities

**Definition 9.4 (Pole of order \(m\)).** A pole of order \(m\ge1\) has a representation
\(f(z)=(z-a)^{-m}h(z)\), where \(h\) is holomorphic near \(a\) and \(h(a)\ne0\).

**Theorem 9.5 (Pole criteria).** A singularity is a pole of order \(m\) exactly when its Laurent series has finitely many negative terms, with lowest nonzero index \(-m\). A singularity is a pole of some order exactly when \(|f(z)|\to\infty\) as \(z\to a\).

**Proof.** Multiplying the finite principal part and the analytic tail by \((z-a)^m\) produces a power series with nonzero constant \(c_{-m}\). Conversely the Taylor series of \(h\) gives exactly that Laurent pattern.

For a pole, continuity and \(h(a)\ne0\) bound \(|h|\) below by a positive number near the center, so \(|f|\to\infty\). Conversely if \(|f|\to\infty\), restrict to a deleted disk where \(f\ne0\). The reciprocal \(g=1/f\) is holomorphic there, bounded, and tends to zero. It has a removable extension with \(g(a)=0\). It is not identically zero, so its zero has a finite positive order by Chapter 8. Taking its reciprocal gives a pole of that order. \(\square\)

**Definition 9.6 (Essential singularity).** An isolated singularity that is neither removable nor a pole is essential. Equivalently its Laurent series has infinitely many nonzero negative coefficients.

This definition and the preceding theorems exhaust the isolated possibilities. A point on a whole curve of singularities, or a limit point of distinct poles, is not automatically an isolated singularity to which this classification applies.

**Theorem 9.7 (Casorati–Weierstrass).** Near an isolated essential singularity, the image of every sufficiently small deleted disk is dense in \(\mathbb C\).

**Proof.** If the image were not dense, some disk \(D(b,\varepsilon)\) would be omitted on a deleted neighborhood. Then \(g=1/(f-b)\) is holomorphic and bounded there by \(1/\varepsilon\), so it extends holomorphically across the center. If its center value is nonzero, \(f=b+1/g\) has a removable extension. If its center value is zero, \(g\) has a finite-order zero and \(f\) has a pole. Both contradict essentiality. \(\square\)

Density means every target disk is met. It does not mean every target value is taken. The stronger Picard theorem is not proved or invoked here. The exponential example omits zero despite having image values arbitrarily near it.

## The residue coefficient

**Definition 9.8 (Residue).** At an isolated singularity, the residue is the Laurent coefficient \(c_{-1}\), denoted \(\operatorname{Res}(f,a)\). The coefficient formula gives
\[
 \int_{|z-a|=t}f(z)dz=2\pi i\,\operatorname{Res}(f,a)
\]
for every sufficiently small positive circle containing no other singularity.

For a pole of order \(m\), write \(h=(z-a)^mf\), extended holomorphically at \(a\). Then
\[
 \operatorname{Res}(f,a)=\frac{h^{(m-1)}(a)}{(m-1)!}.
\]
This follows by selecting the coefficient of \((z-a)^{m-1}\) in the Taylor series of \(h\). It is not a claim that a residue is necessarily the leading pole coefficient: for order above one those coefficients differ.

The next chapter will combine these local circle integrals into a full residue theorem for a specified complete boundary. At present the formula is local and has been proved directly from Laurent coefficients.

## The point at infinity

If \(f\) is holomorphic for \(|z|>R\), define its singularity at infinity through \(g(\zeta)=f(1/\zeta)\) near zero. A removable infinity means a finite limit as \(|z|\to\infty\); a pole of order \(m\) means \(g\) has that pole order; other isolated behavior is essential.

An entire function with removable infinity is bounded outside a disk and on its compact interior, so Liouville makes it constant. An entire function with a pole at infinity has polynomial growth of some finite degree and is a polynomial by Chapter 7. Conversely a nonconstant degree-\(m\) polynomial has a pole of order \(m\) at infinity. Thus the exponential, which is entire and not a polynomial, has an essential singularity there.

This classification uses the reciprocal coordinate and does not assign a finite complex value called infinity. A separate residue-at-infinity convention includes the coordinate differential's Jacobian; that convention is introduced with the residue theorem rather than guessed from a function substitution alone.

## Worked example 9.1: one rational function, two annuli

For \(f(z)=1/[z(z-1)]\), partial fractions give
\[
 f(z)=-1/z+1/(z-1).
\]
On \(0<|z|<1\), expand the second term as a negative geometric series:
\[
 f(z)=-z^{-1}-\sum_{n=0}^{\infty}z^n.
\]
The local residue at zero is \(-1\).

On \(|z|>1\), instead write
\[
 f(z)=z^{-2}/(1-z^{-1})
 =\sum_{n=0}^{\infty}z^{-n-2}.
\]
Its coefficient of \(z^{-1}\) is zero. There is no contradiction with Laurent uniqueness: the two annuli are separated by the singular point one, and no holomorphic annulus connects their integration circles. An outer circle surrounds both poles, not only the local deleted neighborhood at zero.

## Worked example 9.2: removable and pole cases from known series

For \(f(z)=\sin z/z\), the sine series gives
\(1-z^2/6+z^4/120-\cdots\) on the deleted plane. There are no negative terms, so zero is removable with extension value one.

For \(g(z)=e^z/z^3\), the series begins
\[
 z^{-3}+z^{-2}+\tfrac12z^{-1}+\tfrac16+\cdots.
\]
It has a pole of order three and residue \(1/2\). Its leading pole coefficient is one, illustrating why residue and leading coefficient must not be confused. The small positive-circle integral is therefore \(\pi i\).

## Worked example 9.3: an essential singularity with an omitted value

The expansion \(e^{1/z}=\sum_{n=0}^{\infty}z^{-n}/n!\) has infinitely many negative terms, converging on every compact annulus away from zero. Thus zero is essential.

The function never equals zero. Nevertheless along negative real \(z\to0\), its values tend to zero, so omission of zero is consistent with a dense image. More explicitly, for any \(w\ne0\), solve \(1/z=L+2\pi ik\), where \(e^L=w\). Choosing large integers \(k\) gives nonzero solutions \(z\to0\). Every nonzero value is taken arbitrarily close to the singularity in this particular example.

The general theorem proved above asserts density, not this stronger explicit value-by-value property. The formula supplies the extra information here.

## Worked example 9.4: classification at infinity

For \(p(z)=3z^4-z+2\), the reciprocal expression is \(3\zeta^{-4}-\zeta^{-1}+2\), so infinity is a pole of order four. For \(q(z)=1/(z-1)\), the reciprocal expression \(\zeta/(1-\zeta)\) extends to zero with value zero, so infinity is removable.

For \(e^z\), the reciprocal expression \(e^{1/\zeta}\) has the essential singularity just examined. The same definition therefore treats polynomial growth, decay to a finite limit, and essential behavior within one precise coordinate convention.

## Exercises

### Exercise 9.1 {#laurent-series-singularities-ex-annular-series-sign}

Why is the inner circle subtracted in the annular Cauchy formula?

<details><summary>Hint 1</summary>

Both displayed circles are individually counterclockwise.

</details>
<details><summary>Hint 2</summary>

The induced orientation of an inner boundary is clockwise.

</details>
<details><summary>Solution</summary>

The complete positive annular boundary consists of the outer positive circle and the inner negative circle. Writing both integrals with counterclockwise parametrizations therefore requires a minus sign before the inner one. This sign also cancels the negative geometric expansion of its kernel in the Laurent proof.

</details>

### Exercise 9.2 {#laurent-series-singularities-ex-laurent-negative}

Find the Laurent expansion of 1/[z(1-z)] on 0<|z|<1.

<details><summary>Hint 1</summary>

Multiply the geometric series by 1/z.

</details>
<details><summary>Hint 2</summary>

State the annulus as part of the answer.

</details>
<details><summary>Solution</summary>

The expansion is sum from n=0 of z^(n-1)=z^-1+1+z+…, valid on 0<|z|<1. The negative part consists only of z^-1, so zero is a simple pole with residue one.

</details>

### Exercise 9.3 {#laurent-series-singularities-ex-removable-value}

Classify (exp(z)-1)/z at zero and give its extension value.

<details><summary>Hint 1</summary>

Use the exponential series.

</details>
<details><summary>Hint 2</summary>

Divide after removing the zero constant difference.

</details>
<details><summary>Solution</summary>

The series is 1+z/2!+z²/3!+…, with no negative terms. Thus zero is removable and the unique holomorphic extension has value one. Assigning any other value there would break continuity.

</details>

### Exercise 9.4 {#laurent-series-singularities-ex-pole-residue}

Find the pole order and residue of (1+2z+3z²)/z³ at zero.

<details><summary>Hint 1</summary>

Read the negative powers separately.

</details>
<details><summary>Hint 2</summary>

The coefficient of z^-1 is not the most singular one.

</details>
<details><summary>Solution</summary>

The expansion is z^-3+2z^-2+3z^-1. It has pole order three and residue three. The leading pole coefficient is one, so identifying the leading coefficient with the residue would be incorrect.

</details>

### Exercise 9.5 {#laurent-series-singularities-ex-essential-sine}

Classify sin(1/z) at zero.

<details><summary>Hint 1</summary>

Substitute 1/z into its entire series.

</details>
<details><summary>Hint 2</summary>

There are infinitely many nonzero negative powers.

</details>
<details><summary>Solution</summary>

The Laurent series is z^-1-z^-3/3!+z^-5/5!-…, converging on compact annuli away from zero. Its principal part is infinite, so the isolated singularity is essential. Unboundedness alone would not distinguish this from a pole; the infinite negative part does.

</details>

### Exercise 9.6 {#laurent-series-singularities-ex-bounded-extension}

Prove boundedness near an isolated singularity forces each negative coefficient to vanish.

<details><summary>Hint 1</summary>

Use the inner-circle coefficient estimate.

</details>
<details><summary>Hint 2</summary>

Send the radius to zero for a fixed negative index.

</details>
<details><summary>Solution</summary>

For m≥1, |c_-m|≤Mρ^m on every sufficiently small circle. The common bound M is independent of ρ. Letting ρ decrease to zero gives c_-m=0. The remaining Taylor series gives the removable extension.

</details>

### Exercise 9.7 {#laurent-series-singularities-ex-reciprocal-pole}

If f has a pole of order m at a, describe 1/f near a.

<details><summary>Hint 1</summary>

Use f=(z-a)^-m h with h(a)≠0.

</details>
<details><summary>Hint 2</summary>

The factor 1/h is holomorphic near a.

</details>
<details><summary>Solution</summary>

The reciprocal is (z-a)^m/h(z), which extends holomorphically with a zero of exact order m. The nonzero value of 1/h at a verifies the exact order. This is the pole-zero correspondence used in the classification theorem.

</details>

### Exercise 9.8 {#laurent-series-singularities-ex-casorati-omission}

Why does omission of a whole target disk contradict an essential singularity?

<details><summary>Hint 1</summary>

Invert f-b for the omitted disk's center.

</details>
<details><summary>Hint 2</summary>

Its reciprocal is bounded and hence removable.

</details>
<details><summary>Solution</summary>

The reciprocal 1/(f-b) extends holomorphically across the isolated point. A nonzero extension value makes f removable; a zero value gives a finite-order zero of the reciprocal and therefore a pole of f. Both contradict essentiality. Omission of one value alone does not supply a whole disk and does not give this contradiction.

</details>

### Exercise 9.9 {#laurent-series-singularities-ex-small-circle-integral}

Evaluate a small positive-circle integral of exp(z)/z² about zero.

<details><summary>Hint 1</summary>

Find its Laurent coefficient at index -1.

</details>
<details><summary>Hint 2</summary>

The exponential's linear coefficient is one.

</details>
<details><summary>Solution</summary>

The series is z^-2+z^-1+1/2+…, so the residue is one. The circle integral is 2πi, independent of the sufficiently small radius. The double pole order does not make the integral zero because a z^-1 term is present.

</details>

### Exercise 9.10 {#laurent-series-singularities-ex-laurent-uniqueness}

How does one recover coefficient c_k from a Laurent series uniformly convergent on an interior circle?

<details><summary>Hint 1</summary>

Multiply by (z-a)^(-k-1).

</details>
<details><summary>Hint 2</summary>

Use the circle integrals of integer powers.

</details>
<details><summary>Solution</summary>

Termwise integration leaves only the index-k term, whose integral is 2πi c_k. All other integer powers integrate to zero. Thus c_k equals the coefficient integral, proving uniqueness for the stated annulus.

</details>

### Exercise 9.11 {#laurent-series-singularities-ex-infinity-polynomial}

Classify infinity for z^5+2z and for 1/z, on their exterior domains.

<details><summary>Hint 1</summary>

Substitute z=1/ζ.

</details>
<details><summary>Hint 2</summary>

Inspect the resulting singularity at ζ=0.

</details>
<details><summary>Solution</summary>

The polynomial becomes ζ^-5+2ζ^-1, a pole of order five. The reciprocal function becomes ζ, so infinity is removable with value zero. This classification concerns behavior outside a disk, even if the original function has other finite singularities.

</details>

### Exercise 9.12 {#laurent-series-singularities-ex-isolated-hypothesis}

Why is zero not an isolated singularity of 1/sin(1/z)?

<details><summary>Hint 1</summary>

Find zeros of the denominator approaching zero.

</details>
<details><summary>Hint 2</summary>

An isolated singularity requires a whole deleted disk of holomorphy.

</details>
<details><summary>Solution</summary>

The denominator vanishes at z=1/(kπ) for nonzero integers k, producing poles accumulating at zero. Every deleted disk around zero contains such poles, so the function is not holomorphic on any complete deleted disk. The isolated removable/pole/essential trichotomy therefore does not apply at zero.

</details>

## Worked example: the same rational function on two annuli

Consider \(f(z)=1/[z(z-2)]\). Partial fractions give \(f(z)=-1/(2z)+1/[2(z-2)]\). On \(0<|z|<2\), expand the second term as
\[
 \frac1{2(z-2)}=-\frac14\sum_{n=0}^{\infty}(z/2)^n.
\]
Thus the Laurent series about zero has a single negative term, \(-1/(2z)\), and the point zero is a simple pole with residue \(-1/2\). The series is valid only before the second pole at two is reached. On \(|z|>2\), instead expand \(1/(z-2)=z^{-1}\sum_{n\ge0}(2/z)^n\). The \(z^{-1}\) contribution from that term is \(+1/(2z)\), which cancels the \(-1/(2z)\) from the other partial fraction. The outer Laurent series therefore has residue coefficient zero about zero.

There is no contradiction: Laurent coefficients depend on the annulus of expansion. A circle of radius one encloses only the pole at zero and gives integral \(-\pi i\). A circle of radius three encloses both poles; their residues \(-1/2\) and \(+1/2\) cancel, giving integral zero. One need not invoke the later residue theorem to check the integral here, because each uniformly convergent Laurent series can be integrated term by term on its own circle. The calculation makes the annulus hypothesis visible in a way a formal series identity alone might hide.

## Essential behavior and what density does not say

The function \(e^{1/z}\) has an essential singularity at zero because the exponential series produces infinitely many negative powers in its Laurent expansion. Along positive real \(z\to0\), its modulus tends to infinity; along negative real \(z\to0\), it tends to zero. Neither path alone proves density of the image near the singularity. In fact \(e^{1/z}\) never equals zero. Casorati's theorem states that every punctured neighborhood has dense image in \(\mathbb C\), so zero is approached but not attained. Density is strictly weaker than surjectivity.

To see the approximation mechanism directly for a nonzero target \(w\), choose one logarithm value \(\lambda\) with \(e^\lambda=w\). The points \(z_k=1/(\lambda+2\pi i k)\) tend to zero as \(|k|\to\infty\), and \(e^{1/z_k}=w\) exactly whenever the denominator is nonzero. Thus every nonzero value occurs arbitrarily close to zero. The omitted value zero lies in the closure because choosing targets \(w_j\to0\) and then points sufficiently close to zero supplies a sequence of image values tending to it. This explicit example illustrates, but does not replace, the general Casorati proof given above.

At infinity the same function has a different classification. Put \(w=1/z\); then \(e^{1/z}=e^w\), holomorphic at \(w=0\) with value one. Hence infinity is removable for \(e^{1/z}\). A singularity classification always names both the function and the point; behavior at zero cannot be transferred to infinity by informal symmetry.

## A bounded puncture and its filled value

If \(f\) is holomorphic and bounded by \(M\) on \(0<|z-a|<R\), its negative Laurent coefficients vanish. Indeed, for each \(k\ge1\), the coefficient of \((z-a)^{-k}\) is \((2\pi i)^{-1}\int_{|z-a|=r} f(z)(z-a)^{k-1}dz\). Its modulus is at most \(Mr^k\), which tends to zero as \(r\downarrow0\). Every such coefficient is independent of the legal radius, so it must be zero. The remaining nonnegative series defines the extension at \(a\), with value equal to its constant coefficient. This proves removability from an explicit estimate. By contrast, \(1/(z-a)\) has size \(1/r\) on the circle, and the same estimate no longer tends to zero for its first negative coefficient; the boundedness hypothesis is doing real work.

## Local orders under multiplication

If \(f\) has a zero of order \(m\) at \(a\) and \(g\) has a pole of order \(n\) there, write \(f(z)=(z-a)^m u(z)\) and \(g(z)=(z-a)^{-n}v(z)\), where \(u,v\) are holomorphic and nonzero at \(a\). Their product is \((z-a)^{m-n}u(z)v(z)\). It has a zero if \(m>n\), a removable nonzero value if \(m=n\), and a pole if \(m<n\). This local factorization often classifies a rational expression faster than multiplying long Laurent series. It also shows why apparent singularities can cancel: the original quotient formula may be undefined at \(a\), while the simplified function extends holomorphically there. The classification concerns the resulting function on a punctured neighborhood, not the typography of its first formula.

## Sources

Original exposition and exercises. Primary references: Jiří Lebl, [Guide to Cultivating Complex Analysis](https://www.jirka.org/ca/), and Stein–Shakarchi, [Complex Analysis](https://press.princeton.edu/books/hardcover/9780691113852/complex-analysis). The annular formula is proved through a logarithmic rectangle and convex Cauchy theory, so Laurent theory does not depend on the later residue theorem. The full Picard theorem is neither asserted nor used.

## Summary

Laurent coefficients describe a holomorphic function on a specified annulus and are uniquely determined by interior circle integrals. Negative coefficients distinguish removable points, poles, and essential isolated singularities. Boundedness forces removability, while essential images are dense by the proved Casorati theorem. The residue is the z^-1 coefficient, whose local circle integral is now ready to be combined into the residue theorem.
