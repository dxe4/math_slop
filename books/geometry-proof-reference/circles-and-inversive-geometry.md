
# Circles and Inversive Geometry

Circle theorems link distance, angle and intersection. Inversion reorganizes those links by sending a point to another point on the same radial ray with reciprocal distance. A circle may become a line, and a line may become a circle through the missing center. The exceptional points are part of the theorem, not details to remove from a drawing after the calculation.

This chapter works in the real Euclidean plane and uses the circle results of the [school geometry book](../euclidean-geometry-trigonometry/circles-chords-tangents-angles.md) as earlier preparation. We develop new coordinate proofs of power and inversion rather than repeating the full inscribed-angle case analysis. The [canonical transformation chapter](isometries-and-plane-transformation-groups.md) integrates the earlier transformation reading and its original exercises and solutions. Here ordinary circles and generalized circles will be explicitly distinguished.

## Tangency and power with signed parameters

**Definition 7.1 — Circle and power.** The circle with center C and radius $R>0$ is $\{x:\|x-C\|^2=R^2\}$. The power of P relative to it is $\operatorname{Pow}(P)=\|P-C\|^2-R^2$. It is positive outside, zero on the circle and negative inside.

**Theorem 7.2 — Line-intersection power.** Parametrize a line through P by $x=P+tu$, where u is unit. If its intersection parameters with the circle are $t_1,t_2$, counted with a repeated root at tangency, then $t_1t_2=\operatorname{Pow}(P)$.

**Proof.** Substituting the line into the circle equation gives the quadratic $t^2+2u\cdot(P-C)t+\|P-C\|^2-R^2=0$. Comparing its constant term with $(t-t_1)(t-t_2)$ gives the product. This proof applies when real intersections exist; a negative discriminant means there are no real parameters to interpret as intersection lengths. $\square$

For a point inside the circle the two parameters have opposite signs, because the line meets the circle on opposite sides of P. Their product is negative, whereas the product of their ordinary unsigned distances is positive. A secant-power formula using lengths must account for this sign. Outside, a secant ray meeting the circle twice has same-sign parameters and their positive product is the usual near-distance times far-distance.

**Theorem 7.3 — Tangent and radius.** A line through a circle point Q is tangent, in the sense of having just one intersection, exactly when it is perpendicular to CQ.

**Proof.** For a unit line direction u through Q, the circle equation reduces to $t(t+2u\cdot(Q-C))=0$. The second root equals the first exactly when $u\cdot(Q-C)=0$. Equivalently the squared distance along the perpendicular line is $R^2+t^2$, with equality to $R^2$ only at t=0. This proves both directions and the repeated-root interpretation. $\square$

At an external point, tangency gives a repeated parameter t, so tangent length squared is the positive power. Conversely the real discriminant condition identifies tangent directions. A point inside the circle has negative power and no real tangent length. Formal square roots of a negative power do not produce a Euclidean construction.

## Defining inversion on its actual domain

**Definition 7.4 — Circle inversion.** For fixed center O and positive inversion radius a, define

$$I(x)=O+\frac{a^2(x-O)}{\|x-O\|^2},\qquad x\ne O.$$

The domain is the punctured plane. The image point lies on the same ray and its distances satisfy $\|x-O\|\|I(x)-O\|=a^2$. The center has no finite image. Translating coordinates allows proofs to assume O=0 without changing any radial statement.

**Proposition 7.5 — Involution and fixed points.** Inversion is a bijection of the punctured plane with inverse itself. Its fixed points are exactly the radius-a circle.

**Proof.** If $y=a^2x/\|x\|^2$, then $\|y\|^2=a^4/\|x\|^2$, and substituting into the formula again gives x. Thus it is its own inverse. Equality y=x for nonzero x forces $\|x\|^2=a^2$, and every point with that norm is fixed. $\square$

The formula is continuous and smooth on its punctured domain but cannot extend continuously to a finite value at O, because $\|I(x)\|=a^2/\|x\|$ becomes unbounded there. It exchanges inside and outside its fixed circle. It does not preserve distances: points near the center can be sent very far away. Calling inversion a rigid motion because it preserves angles would confuse two different invariants.

## Complete circle and line image calculation

A generalized circle in the plane means an ordinary circle or a line. It is conveniently written

$$A\|x\|^2+b\cdot x+c=0,$$

with coefficients chosen to describe a nonempty ordinary circle or a line. For a line A=0 and b is nonzero. For a circle A is nonzero and its completed-square radius is positive.

**Theorem 7.6 — Generalized-circle images.** Under radius-a inversion about zero, the displayed equation transforms, on the punctured plane, to

$$c\|y\|^2+a^2b\cdot y+Aa^4=0.$$

Consequently a circle through zero becomes a line not through zero, a circle avoiding zero becomes a circle avoiding zero, a line through zero remains the same punctured line, and a line avoiding zero becomes a circle through zero with zero omitted.

**Proof.** Involution permits the substitution $x=a^2y/\|y\|^2$. Multiplying the resulting equation by the positive quantity $\|y\|^2$ gives the transformed equation. This operation is equivalent only for nonzero y. For a circle through zero, c=0, A is nonzero, and b cannot vanish for a positive-radius circle through zero; the result is a genuine line with nonzero constant term. For a circle avoiding zero, c is nonzero and the resulting circle avoids zero since its constant term is $Aa^4\ne0$. Completing the square, or using bijectivity and the original nondegeneracy, gives positive radius. For a line, A=0. If c=0 it remains the same line minus zero. If c is nonzero, the completed-square equation is a circle through zero; nonzero b makes its radius positive. The punctured-domain restriction deletes that one point. $\square$

For an ordinary circle with center C and radius R, the quantity $q=\|C\|^2-R^2$ is its constant term after making A=1. If q is nonzero, its image center and radius are

$$C'=\frac{a^2C}{q},\qquad R'=\frac{a^2R}{|q|}.$$

The sign of q can move the center to the opposite radial ray, even though every individual point remains on its own radial ray. These are different statements: the center of an image circle is not generally the image of the original center.

## Angles and orthogonal circles

**Proposition 7.7 — Differential angle certificate.** At a nonzero point p, inversion has linear derivative

$$DI_p=\frac{a^2}{\|p\|^2}(I_2-2uu^T),\qquad u=p/\|p\|.$$

The parenthesized matrix is reflection in the line perpendicular to u. Hence inversion preserves unsigned angles between regular differentiable curves, while reversing orientation locally.

**Proof.** Expanding $\|p+h\|^{-2}$ to first order gives $\|p\|^{-2}-2(p\cdot h)\|p\|^{-4}$, with a remainder bounded by a constant times $\|h\|^2$ for small h. Multiplying by $a^2(p+h)$ gives the derivative formula. This elementary expansion follows directly from $1/(r+\delta)=1/r-\delta/r^2+\delta^2/(r^2(r+\delta))$, so its denominator is bounded away from zero near p. The reflection matrix preserves dot products and has determinant minus one; multiplication by a positive scalar changes all tangent norms equally. The cosine formula therefore preserves the unsigned angle of two nonzero tangent vectors. $\square$

This is a pointwise differentiable statement away from the center. If a curve passes through the center, its image has an end escaping to infinity and the theorem cannot be applied there as if the missing point were ordinary. Directed angles acquire an orientation sign, which is why the statement carefully says unsigned.

**Proposition 7.8 — An invariant orthogonal circle.** An ordinary circle of radius R and center C is orthogonal to the inversion circle exactly when $\|C\|^2=R^2+a^2$. In that case inversion maps that circle onto itself, generally not pointwise.

**Proof.** At a common point Q the radius vectors Q and Q-C must be perpendicular. With $\|Q\|^2=a^2$ and $\|Q-C\|^2=R^2$, the perpendicularity equation is $a^2-Q\cdot C=0$. Expanding the second squared norm then gives the stated center-distance equation, and the algebra reverses. That equation also places the two positive-radius circles in a genuine two-intersection configuration. It makes q equal to $a^2$ in the center/radius formulas, so $C'=C$ and $R'=R$. Only the common points on the inversion circle are necessarily fixed individually. $\square$

## Worked examples

### Worked example 1 — A line becomes a punctured circle

Invert in the unit circle and take the line $y=3$. Substitution in the general line formula gives $3(u^2+v^2)-v=0$, or $u^2+(v-1/6)^2=1/36$. The image is the radius-one-sixth circle centered at $(0,1/6)$ with the origin omitted. A parametrized point $(t,3)$ maps to $(t/(t^2+9),3/(t^2+9))$, which approaches zero as $|t|$ grows but never equals it. The missing point is visible both in the domain theorem and in the exact formula.

### Worked example 2 — A circle through the center becomes a line

The circle centered at $(2,0)$ of radius two has equation $x^2+y^2-4x=0$. Unit inversion gives $1-4u=0$, hence the line $u=1/4$. The original origin is deleted before inversion. Every point of the target line is nonzero and has a unique inverse point on the punctured original circle, so no further point must be deleted from the line. By contrast the circle centered at $(3,0)$ of radius one has q=8 and maps to center $(3/8,0)$ and radius 1/8, avoiding the origin entirely.

### Worked example 3 — Tangent length and tangent points

For the circle centered at zero of radius three and the external point P=(5,0), power is sixteen, so both tangent lengths are four. A tangency point Q also satisfies $Q\cdot P=9$, since Q is perpendicular to P-Q. Thus its first coordinate is 9/5 and its second is plus or minus 12/5. Substituting gives $\|Q\|=3$ and $\|P-Q\|=4$. The calculation verifies the point locations, the radius-perpendicular condition and the equal tangent lengths with no appeal to visual symmetry alone.

### Worked example 4 — A collinear ratio that survives inversion

Choose an oriented line through the inversion center and write its signed coordinate as $t$. Inversion of radius $R>0$ sends each nonzero coordinate to $R^2/t$, including negative coordinates on the opposite ray. For four distinct nonzero coordinates define their cross-ratio by

$$[a,b;c,d]=\frac{(a-c)(b-d)}{(a-d)(b-c)}.$$

Every denominator in this expression is nonzero. Subtracting two inverted coordinates gives $R^2(c-a)/(ac)$. Substituting the four corresponding differences into the cross-ratio cancels all radius factors and all coordinate factors, leaving precisely the original cross-ratio. Thus this particular signed combination of distances survives, although individual lengths and ordinary ratios of adjacent lengths generally change.

For example, the four coordinates one, two, three and four have cross-ratio four thirds. Their reciprocals have the same value by the calculation, without any need to measure a picture. The ordering of the four entries is essential: interchanging entries can replace the value by its reciprocal or another related expression. A point at the inversion center is excluded throughout this ordinary coordinate calculation. Introducing an ideal point at infinity would require the extended inversive plane and its separate conventions; it is not accomplished by dividing by zero.

## Exercises

### Exercise 7.1
<a id="circles-and-inversive-geometry-ex-1"></a>
For a radius-five circle and point distance three from its center, find its power and explain the sign in a secant product.
<details><summary>Hint 1</summary>
Power is squared center distance minus squared radius.
</details>
<details><summary>Hint 2</summary>
An interior point has intersections on opposite sides along every secant line.
</details>
<details><summary>Full solution</summary>
The power is $9-25=-16$. With a unit directed line parameter based at the point, the intersection parameters have opposite signs and product minus sixteen. The product of their ordinary distances is sixteen instead. Forgetting that distinction would incorrectly make the same quadratic constant term positive for an interior point.
</details>

### Exercise 7.2
<a id="circles-and-inversive-geometry-ex-2"></a>
Prove inversion has no finite continuous extension at its center.
<details><summary>Hint 1</summary>
Approach along any radial sequence.
</details>
<details><summary>Hint 2</summary>
The image norm is reciprocal to the input norm.
</details>
<details><summary>Full solution</summary>
For $x_n=(1/n,0)$ about center zero, the image norm is $a^2n$, which tends to infinity. A finite continuous extension at zero would force these images to converge to its finite value, impossible. The center may be paired with an added point at infinity in another space, but that is an explicitly different domain and codomain, not a finite extension in the plane.
</details>

### Exercise 7.3
<a id="circles-and-inversive-geometry-ex-3"></a>
Find the image of $(2,0)$ under inversion of radius three about zero and verify involution there.
<details><summary>Hint 1</summary>
Use $a^2/\|x\|^2$ as the scalar multiplier.
</details>
<details><summary>Hint 2</summary>
The two radial distances must have product nine.
</details>
<details><summary>Full solution</summary>
The first image is $(9/2,0)$. Its squared norm is 81/4, so applying inversion again multiplies it by $9/(81/4)=4/9$, giving $(2,0)$. The distances two and 9/2 have product nine. Neither point is the origin, so both substitutions respect the domain; no exceptional value has been cancelled.
</details>

### Exercise 7.4
<a id="circles-and-inversive-geometry-ex-4"></a>
Under unit inversion find the image of the line $x=-1$.
<details><summary>Hint 1</summary>
Use $x+1=0$ in the generalized-circle equation.
</details>
<details><summary>Hint 2</summary>
Complete the square after substitution.
</details>
<details><summary>Full solution</summary>
The transformed equation is $u^2+v^2+u=0$, or $(u+1/2)^2+v^2=1/4$. The image is that circle with the origin omitted. Its center is on the negative horizontal ray, consistent with the original line's location. The origin belongs to the completed algebraic equation but is absent from the actual inversion image because the map is a bijection only on the punctured plane.
</details>

### Exercise 7.5
<a id="circles-and-inversive-geometry-ex-5"></a>
Find the unit-inversion image of the circle centered at zero with radius two.
<details><summary>Hint 1</summary>
Every point has the same radial distance.
</details>
<details><summary>Hint 2</summary>
The reciprocal image radius is one-half.
</details>
<details><summary>Full solution</summary>
Each radius-two point maps along its ray to distance one-half, so the image is the radius-one-half circle. The general formula agrees: q=-4, so the image center remains zero and the radius is $2/4=1/2$. Neither circle contains the inversion center, so this time there is no deleted point on either ordinary circle.
</details>

### Exercise 7.6
<a id="circles-and-inversive-geometry-ex-6"></a>
An external point has tangent length twelve to a radius-five circle. Find its center distance.
<details><summary>Hint 1</summary>
Tangent length squared equals power.
</details>
<details><summary>Hint 2</summary>
Solve the positive distance equation.
</details>
<details><summary>Full solution</summary>
If d is the center distance, $d^2-25=144$, so $d^2=169$ and d=13. The positive root is required for a distance, and 13 exceeds the radius as the external-point hypothesis requires. A negative root is not another geometric possibility. This is the right-triangle relation at the tangency point expressed through power.
</details>

### Exercise 7.7
<a id="circles-and-inversive-geometry-ex-7"></a>
Show that composing inversions of radii a then b about the same center gives a dilation and state its domain.
<details><summary>Hint 1</summary>
Track radial distance twice.
</details>
<details><summary>Hint 2</summary>
Both maps keep the same ray.
</details>
<details><summary>Full solution</summary>
A distance r becomes $a^2/r$ and then $b^2/(a^2/r)=(b^2/a^2)r$. Rays are unchanged, so the composition is the positive dilation of ratio $b^2/a^2$ on the punctured plane. That dilation extends continuously to fix the center, although neither individual inversion does. The extension is a property of the composition, not a license to apply either original map at its missing center.
</details>

### Exercise 7.8
<a id="circles-and-inversive-geometry-ex-8"></a>
Give an ordinary circle invariant under unit inversion but not pointwise fixed.
<details><summary>Hint 1</summary>
Its center distance squared should exceed its radius squared by one.
</details>
<details><summary>Hint 2</summary>
Use center $(\sqrt2,0)$ and radius one.
</details>
<details><summary>Full solution</summary>
That circle has q=2-1=1, so the image center and radius are unchanged. It intersects the unit inversion circle orthogonally. Most of its points have norms different from one and therefore move under inversion; only its two intersection points with the unit circle are fixed. Setwise invariance and pointwise invariance are different claims.
</details>

### Exercise 7.9
<a id="circles-and-inversive-geometry-ex-9"></a>
Why is “inversion preserves angles” not a statement that it preserves all distances?
<details><summary>Hint 1</summary>
Its derivative scale depends on the point.
</details>
<details><summary>Hint 2</summary>
Compare images of two positive radial distances.
</details>
<details><summary>Full solution</summary>
At p the derivative is a reflection times the positive scale $a^2/\|p\|^2$, preserving unsigned tangent angles while changing local lengths. The scale varies with p. Under unit inversion, radial points at distances one and two map to distances one and one-half, so their separation changes from one to one-half. Angle preservation therefore does not make the map a Euclidean rigid motion.
</details>

### Exercise 7.10
<a id="circles-and-inversive-geometry-ex-10"></a>
Explain why an image-circle equation may contain a point that the actual inversion image omits.
<details><summary>Hint 1</summary>
The substitution is valid only for nonzero target coordinates.
</details>
<details><summary>Hint 2</summary>
Multiplying by a squared norm does not restore the deleted domain point.
</details>
<details><summary>Full solution</summary>
The transformation replaces x by $a^2y/\|y\|^2$ and then multiplies by $\|y\|^2$, so every equivalence assumes y is nonzero. The final polynomial can also vanish at zero, particularly when a line avoiding the center becomes a circle through it. Zero must then be removed from the equation's solution set to recover the actual image. The algebraic completion and the set-theoretic image are not identical without that domain restriction.
</details>

## Sources

Original Euler prose and exercises, CC BY-SA 4.0. The [transformation chapter](isometries-and-plane-transformation-groups.md) now contains the earlier material and complete old solutions under the original resource alias. Euclid's [Elements, Book III](https://mathcs.clarku.edu/~djoyce/elements/bookIII/bookIII.html) is a primary classical circle reference. Neil Donaldson's [Math 161 notes](https://www.math.uci.edu/~ndonalds/math161/notes.pdf) provide a primary-author course comparison. The inversion image and differential certificates are proved directly above, with their punctured-plane domain retained.

## Summary

Circle power is a signed intersection-parameter product; tangency is its repeated-root case. Inversion is an involution of the punctured plane that exchanges certain circles and lines, with deleted points tracked explicitly. Its derivative is a reflection times a positive scale, so unsigned angles survive while orientation and distances behave differently. Orthogonal circles are setwise invariant, not generally pointwise fixed. The next chapter organizes Euclidean, affine, projective and inversive transformations by their actual preserved structures.
