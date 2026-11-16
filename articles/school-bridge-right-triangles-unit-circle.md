
# Right triangles and the unit circle

A small ramp and a large ramp can have the same steepness. Their lengths differ, but the ratio of rise to horizontal run agrees. Trigonometry begins by recording ratios that depend on an angle rather than on the size of a particular triangle. The unit circle is a way to keep those ratios in one fixed picture.

This article is at **Pre-university (L1)**. Use the [fractions refresher](../apps/unhurried/refresh/fractions/index.html) for ratios and the [coordinates refresher](../apps/unhurried/refresh/coordinates/index.html) for ordered pairs. Preparation also includes the similarity idea developed in [Similarity and Proportion](#/books/euclidean-geometry-trigonometry/similarity-proportion): scaling a triangle multiplies all its side lengths by the same positive factor. We will connect acute-angle right-triangle ratios with circle coordinates, then explain what changes beyond acute angles.

## Name the sides relative to an angle

Take a nondegenerate right triangle and select one acute angle $\theta$, so $0^\circ<\theta<90^\circ$. The longest side, opposite the right angle, is the **hypotenuse**. Relative to $\theta$, one shorter side is opposite the angle and the other is adjacent to it. The hypotenuse is not called the adjacent side here, even though it touches the angle.

Write the opposite, adjacent and hypotenuse lengths as $a,b,c$, respectively. All three are positive. The definitions are

$$\sin\theta=\frac ac,\qquad \cos\theta=\frac bc,\qquad \tan\theta=\frac ab.$$

Two right triangles with the same acute angle have all corresponding angles equal, so they are similar. Scaling both numerator and denominator by the same positive factor leaves each ratio unchanged. That is why the definitions refer to the angle rather than to the particular triangle used to measure it.

Swapping the selected acute angle swaps the opposite and adjacent sides. It does not change the hypotenuse. Naming the angle before choosing a ratio prevents an ambiguity that a drawing alone cannot resolve.

## Rescale the hypotenuse to one

Place the selected angle at the origin, with the adjacent side along the positive horizontal axis and the opposite side pointing upwards. The other endpoint of the hypotenuse then has coordinates $(b,a)$. Divide every length by $c$. The rescaled endpoint is

$$\left(\frac bc,\frac ac\right)=(\cos\theta,\sin\theta).$$

Its distance from the origin is one because its hypotenuse is now one. Therefore it lies on the **unit circle**, the circle of radius one centred at the origin.

The circle did not introduce a different acute-angle trigonometry. It placed every scaled right triangle into a shared coordinate picture. Cosine is the horizontal coordinate, and sine is the vertical coordinate. The tangent ratio is the vertical coordinate divided by the horizontal coordinate, where the latter is nonzero.

Pythagoras supplies the same conclusion algebraically: $a^2+b^2=c^2$, so $(a/c)^2+(b/c)^2=1$. This is the coordinate equation of the unit circle. The [area and Pythagoras chapter](#/books/euclidean-geometry-trigonometry/area-pythagorean-theorem) gives the geometric proof of that theorem.

## Worked example: a three-four-five triangle

Choose the acute angle in a right triangle whose opposite side has length three and adjacent side has length four. The hypotenuse has length five because $3^2+4^2=9+16=25=5^2$. Thus

$$\sin\theta=\frac35,\qquad \cos\theta=\frac45,\qquad \tan\theta=\frac34.$$

The unit-circle point is $(4/5,3/5)$, not $(3/5,4/5)$. Its horizontal coordinate comes from the adjacent side. Its squared distance from the origin is $16/25+9/25=1$, as required.

Now enlarge the triangle by a factor of two. Its opposite, adjacent and hypotenuse lengths become six, eight and ten. The ratios are still $6/10=3/5$, $8/10=4/5$ and $6/8=3/4$. The unit-circle point has not moved because the angle has not changed. This separates the triangle's physical size from its trigonometric information.

## The circle continues where the triangle definition stops

Starting from the positive horizontal direction, measure an angle counterclockwise around the circle. For any resulting direction, define cosine and sine to be the horizontal and vertical coordinates of its unit-circle point. For acute first-quadrant angles, these agree with the right-triangle ratios just derived.

The extension also gives signs. Reflect the worked-example point across the vertical axis. The new point is $(-4/5,3/5)$, so its cosine is negative and its sine is positive. Its angle is $180^\circ-\theta$. Ordinary side lengths remain positive; the negative cosine is a signed coordinate, not a negative physical side length.

At $90^\circ$ the circle point is $(0,1)$. Sine is one and cosine zero. Tangent, defined as sine divided by cosine, has no real value there because division by zero is undefined. The circle extends sine and cosine without removing the restrictions on their ratio.

Angles can be measured in degrees or radians. This article uses degrees consistently; [Radians and the Unit Circle](#/books/precalculus/radians-unit-circle) develops the other convention. Changing the unit used to name an angle does not change its circle point.

## Exercises

### Exercise 1
<a id="deep-dive-school-bridge-right-triangles-unit-circle-ex-1"></a>
Relative to an acute angle, a right triangle has opposite side five, adjacent side twelve and hypotenuse thirteen. Find its sine, cosine and tangent, then give its unit-circle point.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Keep the selected angle fixed when labelling opposite and adjacent.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The circle point lists horizontal coordinate first and vertical coordinate second.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The ratios are $\sin\theta=5/13$, $\cos\theta=12/13$ and $\tan\theta=5/12$. The point is $(12/13,5/13)$. Its squared distance from the origin is $(144+25)/169=1$, confirming that it lies on the unit circle. Multiplying every side length by the same positive factor leaves all three ratios unchanged.
</details>

### Exercise 2
<a id="deep-dive-school-bridge-right-triangles-unit-circle-ex-2"></a>
A unit-circle point has coordinates $(-3/5,4/5)$. Find the sine, cosine and tangent of its angle. Explain why its negative coordinate is consistent with positive triangle side lengths.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use the coordinate definitions of sine and cosine before taking their ratio.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A coordinate records direction as well as distance from an axis.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Cosine is the horizontal coordinate $-3/5$ and sine the vertical coordinate $4/5$. Tangent is $(4/5)/(-3/5)=-4/3$, defined because cosine is nonzero. The associated right-triangle leg lengths are the positive magnitudes $3/5$ and $4/5$. The negative horizontal coordinate says that the point lies to the left of the vertical axis; it does not make a length negative.
</details>

## Continue into the book

Scaling a right triangle onto a unit hypotenuse turns adjacent and opposite ratios into circle coordinates. The coordinate description then supplies signs and angles that an acute right triangle alone cannot express. Continue with [Right-Triangle Trigonometry](#/books/euclidean-geometry-trigonometry/right-triangle-trigonometry) and [Sine, Cosine, and Tangent](#/books/precalculus/sine-cosine-tangent). The next article, [Identities from one picture](#/articles/school-bridge-identities-one-picture), extracts an equality valid at every angle from the same circle.
