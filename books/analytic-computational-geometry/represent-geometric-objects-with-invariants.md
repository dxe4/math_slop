
# Represent Geometric Objects with Invariants

Why does the same geometric line appear in so many different algebraic costumes? A line can be described by two points, by a point and a direction, by an angle and a distance from the origin, or by the vanishing set of a linear equation. Each representation makes some questions easy and others hard. Computational geometry begins by choosing representations that keep the invariants visible---so that equality, incidence, and sidedness can be tested without hidden assumptions.

This L3 chapter distinguishes exact rational data, mathematical real objects and explicitly uncertain measurements. It assumes vectors, dot products and elementary linear algebra. Predicate statements below are proved algebraically; they do not certify unspecified floating-point evaluations. Input contracts distinguish a nondegenerate line from a point, an empty linear constraint or the whole plane.

## Points, vectors, and directions

A point in the Euclidean plane is an ordered pair $(x,y)$ of real numbers. We write $\mathbb{R}^{2}$ for the set of all such pairs. A **vector** is also a pair, but it represents displacement rather than position. The vector from point $P$ to point $Q$ is $Q-P=(Q_{x}-P_{x},Q_{y}-P_{y})$.

A **direction** is a nonzero vector. Two oriented directions are the same when one is a positive scalar multiple of the other. An unoriented line direction also identifies a vector with its negative. Which equivalence is intended depends on whether the object is a line or a forward ray; multiplying by a negative number cannot preserve both conventions at once.

## Parametric representation of a line

Given a point $P$ and a nonzero direction vector $v$, the **parametric line** is the set

$$L(t)=P+tv,\qquad t\in\mathbb{R}.$$

This form is ideal for construction. To find the point one-third of the way from $P$ toward $Q$, set $v=Q-P$ and $t=1/3$. To trace the line at uniform speed, increment $t$.

The parametric form does not, however, make it easy to test whether a given point $X$ lies on the line. One must solve $X=P+tv$ for $t$, which is a system of two equations in one unknown. When the components of $v$ are both nonzero, the two equations may give different values of $t$; if they do, $X$ is not on the line.

## Implicit representation of a line

A line can also be described as the set of points $X=(x,y)$ satisfying

$$n_{x}x+n_{y}y=c,$$

or in vector notation $n\cdot X=c$, where $n=(n_{x},n_{y})$ is a nonzero vector called the **normal**. The implicit form makes sidedness immediate: the sign of $n\cdot X-c$ tells which side of the line contains $X$. It also makes perpendicular distance easy, as we shall see.

The pair $(n,c)$ is not unique. If $\lambda\neq 0$, then $(\lambda n,\lambda c)$ describes exactly the same line. Geometric equality of lines is equivalence of $(n,c)$ up to nonzero scale, not coefficient-wise equality. The exact mathematical equality criterion is that the cross product of their nonzero homogeneous coefficient vectors vanishes. A floating-point cross product also needs an error or exact-sign policy; merely replacing one numerical equality operation by another does not certify it.

## Converting between representations

Given a parametric line $L(t)=P+tv$, an implicit normal is any nonzero vector perpendicular to $v$. If $v=(v_{x},v_{y})$, then $n=(v_{y},-v_{x})$ is one convenient choice. The constant $c$ is determined by requiring $P$ to satisfy the equation: $c=n\cdot P$.

Conversely, given $n\cdot X=c$, a direction vector is any nonzero vector perpendicular to $n$, such as $v=(-n_{y},n_{x})$. A point on the line can be found by solving for one coordinate after setting the other to zero, provided the corresponding component of $n$ is nonzero. If $n_{x}\neq 0$, then $P=(c/n_{x},0)$ lies on the line.

### Prove the parametric and implicit sets agree

For a nonzero normal n, the point $P_0=cn/|n|^2$ lies on the line. Let $v=(-n_y,n_x)$, a nonzero perpendicular direction. Every point $P_0+tv$ satisfies the implicit equation because the normal dot direction is zero. Conversely, if X satisfies it, X minus P-zero is perpendicular to n. In the plane that one-dimensional orthogonal complement is spanned by v, so there is a unique parameter

$$t=\frac{(X-P_0)\cdot v}{|v|^2}.$$

This proves both containment directions and uniqueness; no coordinate component was assumed nonzero. The point P-zero is also the closest line point to the origin, as the distance argument below shows. Choosing another base point on the line changes the parameter origin without changing its point set.

If two nondegenerate implicit equations define the same line, their normals both annihilate its nonzero direction. They therefore differ by a nonzero scalar. Evaluating at any common point proves their constants have that same scalar relation. Conversely proportional normal/constant pairs clearly define the same locus. This proves the equality criterion instead of treating proportionality as an observed pattern in examples.

Use the homogeneous coefficient vector $(n_x,n_y,-c)$, since its dot product with $(x,y,1)$ is the implicit residual. Two such nonzero vectors have zero cross product exactly when they are proportional, proving the coordinate criterion. Their normal components must still be nonzero: the constant zero equation represents the entire plane, and a nonzero constant with zero normal represents the empty set. A constructor promising a line rejects those cases; a constructor for general linear constraints can return them as distinct types. Silently replacing them by a guessed direction changes the input object.

### Rational normalization keeps equality exact

For rational coefficients, clear all denominators using a positive common multiple. Divide the integer triple by the positive gcd of its entries and make the first nonzero entry positive. Proportional rational triples then have the same primitive integer representative. To prove uniqueness, write a proportionality scalar in reduced rational form. Its denominator must divide every entry of one primitive tuple, so is one; applying the same argument to the inverse scalar forces its numerator to be plus or minus one. The sign convention removes the final ambiguity.

Unit-normal normalization is geometrically attractive but can introduce an irrational square root even for integer input. It is unnecessary for incidence or squared-distance comparison. Exact rational normalization has its own integer bit cost, depending on coefficient sizes; calling the number of geometric operations constant does not imply constant running time for arbitrarily large integers. An implementation must also state how its input numbers were obtained. A floating-point measurement is not transformed into exact intended geometry merely by reading its stored bit pattern as a rational number.

## Signed distance and sidedness

For the implicit line $n\cdot X=c$, the **signed numerator** at $X$ is $n\cdot X-c$. Its sign is invariant under scaling $(n,c)\mapsto(\lambda n,\lambda c)$ provided $\lambda>0$; if $\lambda<0$, the sign flips. A library must therefore either fix an orientation convention for $n$ or document that sidedness depends on the sign choice.

The **perpendicular distance** from $X$ to the line is

$$d(X,L)=\frac{\lvert n\cdot X-c\rvert}{\lVert n\rVert}.$$

The denominator $\lVert n\rVert$ is essential: without it, the numerator scales with $\lVert n\rVert$ and does not measure distance. A zero normal must be rejected before any division; treating a zero normal as ``almost any direction'' produces undefined behavior.

### Prove the distance and its scale invariance

For a query point X put

$$Q=X-\frac{n\cdot X-c}{|n|^2}n.$$

Its normal dot product is c, so it lies on the line. The vector X minus Q is normal to the line, while Q minus any other line point is tangent. Pythagoras therefore gives $|X-Y|^2=|X-Q|^2+|Q-Y|^2$ for every line point Y. This proves Q uniquely minimizes the distance. Taking its normal component length yields the displayed formula, and squaring it gives the rational quantity

$$d(X,L)^2=\frac{(n\cdot X-c)^2}{n_x^2+n_y^2}.$$

Multiplying normal and constant by any nonzero scalar multiplies both numerator and denominator by its square, so squared and unsigned distance are unchanged. The signed version flips under negative scaling, precisely as the residual sign does. Distance comparisons can use these squared rational quantities without a square root, provided both candidate distances are nonnegative as they are here.

A tiny nonzero normal is not intrinsically an invalid line. The coefficients normal $(10^{-100},0)$ and constant $10^{-100}$ represent x equal to one, just as normal $(1,0)$ and constant one do. An absolute rule rejecting every normal below a fixed threshold can accept one representation and reject an equivalent one. Exact zero rejection, conditioning of a chosen normalization and uncertainty in measured coefficients are three different issues. Their policies must not be collapsed into one unscaled epsilon.

## Worked example 1: line through two points {#worked-example-line-through-two-points}

Find an implicit equation for the line through $A=(2,3)$ and $B=(5,1)$.

The direction is $v=B-A=(3,-2)$. A normal is $n=(2,3)$, since $(2,3)\cdot(3,-2)=6-6=0$. The constant is $c=n\cdot A=2\cdot 2+3\cdot 3=13$. The line is $2x+3y=13$.

Verification: $B$ gives $2\cdot 5+3\cdot 1=13$, so $B$ lies on the line. The point $(0,0)$ gives $0<13$, so the origin is on the side opposite to the direction of $n$.

## Worked example 2: normalize rational data and keep the distance certificate

Take normal $(2/3,-4/9)$ and constant ten ninths. Clearing denominators gives the integer tuple $(6,-4,10)$, then dividing its gcd gives $(3,-2,5)$. Its first nonzero coefficient is positive, so this is the canonical representative. Negating the original tuple leads to the same normalized result. The point $(1,-1)$ has residual zero, proving incidence exactly.

The nearest point to the origin is $(15/13,-10/13)$ by the normal-point formula. Its squared distance is twenty-five thirteenths. Substitution into the normalized line equation gives five, while the position vector is parallel to the normal. These two algebraic properties certify the foot and its minimizing interpretation; a decimal drawing near the line would not establish exact incidence. The unsquared distance is five over the square root of thirteen, but constructing that irrational number is unnecessary to compare this distance with another rational squared distance.

## Worked example 3: a carrier line does not determine a ray or segment

Use base point the origin and direction $(2,0)$. The point $(-1,0)$ has parameter minus one half: it belongs to the line but not its forward ray. The point $(3,0)$ has parameter three halves: it belongs to the ray but not the closed segment with parameters zero through one. The latter segment ends at $(2,0)$.

Replacing the direction by $(1,0)$ preserves the carrier line and the forward ray, but changes that same unit-parameter segment to one ending at $(1,0)$. To preserve the former segment one must also change the interval. Negating the direction preserves only the unoriented carrier line and reverses the ray. Exchanging the two fixed endpoints of a segment preserves its point set by replacing the parameter with one minus itself. These distinctions belong to the representation contract before an intersection or nearest-point routine receives the data.

## Uncertain data describe families of objects

Suppose normal and constant coefficients are enclosed in intervals and a query point is exact. Interval arithmetic can enclose every possible residual by performing outward-rounded additions and multiplications under an explicitly stated arithmetic model. If the resulting interval is strictly positive, every admissible line representation places the point on its positive side. A strictly negative interval gives the opposite certificate. An interval containing zero gives no such certificate: enclosure overestimation or actual input variation may be responsible. It does not prove the query point lies on one exact line.

For distance bounds, a strictly positive lower bound on the normal norm is also necessary before dividing interval quantities. A coefficient box admitting a zero normal includes invalid line inputs unless they are excluded separately. Refining the intervals, obtaining more precise measurements or applying exact arithmetic to truly exact data are different remedies for different input models. This chapter specifies mathematical certificates rather than an unperformed error analysis of a particular machine implementation.

## Common errors

- **Confusing point equality with coefficient equality.** Two lines with coefficients $(n,c)$ and $(2n,2c)$ are the same line, but a naive `==` test on the tuples returns false.
- **Dividing by a zero or near-zero normal.** Always validate $\lVert n\rVert>0$ before computing distance. A tolerance should be scale-aware, not a fixed constant like $10^{-9}$.
- **Forgetting the sign convention.** The implicit form $n\cdot X=c$ and $-n\cdot X=-c$ describe the same geometric line, but the signed numerator has opposite sign. Sidedness tests must fix an orientation or document the ambiguity.
- **Using parametric $t$ outside its geometric meaning.** The parameter $t$ in $P+tv$ is not arc length unless $v$ is a unit vector. Distances along the line require $\lVert v\rVert$ in the conversion.

## Practice exercises with solutions

### Exercise 1
Find the implicit equation $n\cdot X=c$ for the line through $(1,1)$ with normal $(2,-1)$. Which side contains $(0,0)$?

<details><summary>Hint 1</summary>

Evaluate the normal dot product at the given line point.

</details>

<details><summary>Hint 2</summary>

Compare the query residual with zero under the stated normal orientation.

</details>

<details><summary>Full solution</summary>

**Solution.** With $n=(2,-1)$ and $P=(1,1)$, we have $c=2\cdot 1+(-1)\cdot 1=1$. The line is $2x-y=1$. For $X=(0,0)$, the signed numerator is $0-0-1=-1<0$, so the origin lies on the negative side.

</details>

### Exercise 2
Convert the parametric line $(1,2)+t(3,1)$ to implicit form.

<details><summary>Hint 1</summary>

Rotate the direction by a right angle to obtain a normal.

</details>

<details><summary>Hint 2</summary>

Evaluate the constant at the parametric base point.

</details>

<details><summary>Full solution</summary>

**Solution.** The direction is $v=(3,1)$. A normal is $n=(1,-3)$. Then $c=n\cdot(1,2)=1-6=-5$. The implicit form is $x-3y=-5$, or equivalently $x-3y+5=0$.

</details>

### Exercise 3
Find the perpendicular distance from $(4,5)$ to the line $3x+4y=10$.

<details><summary>Hint 1</summary>

Keep both the residual numerator and normal length.

</details>

<details><summary>Hint 2</summary>

Use the closest-point proof rather than treating the numerator itself as distance.

</details>

<details><summary>Full solution</summary>

**Solution.** The signed numerator is $3\cdot 4+4\cdot 5-10=12+20-10=22$. The normal norm is $\lVert(3,4)\rVert=5$. The distance is $\lvert 22\rvert/5=22/5=4.4$.

</details>

### Exercise 4
Show that the point $P=(c/n_{x},0)$ lies on $n\cdot X=c$ whenever $n_{x}\neq 0$.

<details><summary>Hint 1</summary>

Only the first coordinate contributes after setting the second to zero.

</details>

<details><summary>Hint 2</summary>

The nonzero-component premise makes the displayed division legitimate.

</details>

<details><summary>Full solution</summary>

**Solution.** Substitute: $n_{x}\cdot(c/n_{x})+n_{y}\cdot 0=c+0=c$. The equation is satisfied.

</details>

### Exercise 5
Two lines are given by $(n_{1},c_{1})=(1,2,3)$ and $(n_{2},c_{2})=(2,4,6)$. Are they the same line? Find a point on the line and a direction vector.

<details><summary>Hint 1</summary>

Compare the coefficient triples up to a common nonzero scalar.

</details>

<details><summary>Hint 2</summary>

Use any perpendicular direction and verify one proposed point by substitution.

</details>

<details><summary>Full solution</summary>

**Solution.** The coefficients are proportional: $(2,4,6)=2\cdot(1,2,3)$. Hence the lines are identical. Since $n_{x}=1\neq 0$, the point $(c/n_{x},0)=(3,0)$ lies on the line. A direction vector perpendicular to $n=(1,2)$ is $v=(-2,1)$.

</details>


### Exercise 6

Classify the constraints with zero normal and constants zero or one. Compare these with the parametric set $P+t(0,0)$, and explain why none is an ordinary nondegenerate line.

<details><summary>Hint 1</summary>

A zero-normal implicit equation is either always true or always false.

</details>

<details><summary>Hint 2</summary>

A zero-direction parametrization is constant for every parameter.

</details>

<details><summary>Full solution</summary>

Constant zero gives the whole plane because every point satisfies the equation. Constant one gives the empty set because zero cannot equal one. The zero-direction parametric set is the singleton P. These are three different loci, and none has the one-dimensional carrier required of a line. A line constructor should reject the degenerate input, while a general constraint or parametric-object constructor can return an explicitly tagged whole-plane, empty or point result. Conflating these cases would turn a missing premise into an arbitrary geometric answer.

</details>

### Exercise 7

Normalize the rational line equation $-6x+9y=-12$ to a primitive integer coefficient tuple with first nonzero normal entry positive. Compare the residual signs at the origin before and after normalization.

<details><summary>Hint 1</summary>

Divide by the positive gcd, then reverse all three coefficient signs.

</details>

<details><summary>Hint 2</summary>

Unsigned incidence survives a negative rescaling, but oriented residual signs reverse.

</details>

<details><summary>Full solution</summary>

The normalized equation is $2x-3y=4$. The original residual at the origin is twelve, whereas the normalized residual is minus four. The equations differ by a negative scalar, so their zero sets coincide and their unsigned distances agree, but the designated positive sides reverse. Primitive normalization fixes a convention; it does not preserve a separately supplied oriented normal unless that orientation is stored independently. The point $(2,0)$ satisfies both equations exactly.

</details>

### Exercise 8

Find the perpendicular foot from $(1,2)$ to the line $2x-y=3$, and prove that it is the unique nearest line point.

<details><summary>Hint 1</summary>

The residual is minus three and the squared normal length is five.

</details>

<details><summary>Hint 2</summary>

Subtract residual divided by squared normal length times the normal, then apply the orthogonal decomposition.

</details>

<details><summary>Full solution</summary>

The foot is $(11/5,7/5)$, whose normal dot product is three. The vector from that point to the query is $(-6/5,3/5)$, parallel to the normal and perpendicular to the line direction $(1,2)$. Its length is three over the square root of five. For any other line point, Pythagoras adds the positive squared distance along the line to this squared perpendicular distance, so equality occurs only at the stated foot. Incidence and perpendicularity together provide the complete minimizing certificate.

</details>

### Exercise 9

Use first-nonzero-positive normal normalization on the line x zero and query $(1,0)$. Rotate both by pi and normalize the image line again. Does the residual sign remain unchanged? What invariant was actually preserved?

<details><summary>Hint 1</summary>

The original canonical normal is $(1,0)$, but rotation sends it to $(-1,0)$.

</details>

<details><summary>Hint 2</summary>

Canonical sign normalization reverses that rotated normal, while the rotated point is $(-1,0)$.

</details>

<details><summary>Full solution</summary>

The original residual is positive one. After rotating and canonically choosing the positive first normal component again, the residual is minus one. Rotation preserved line incidence and unsigned distance, but the coordinate-dependent normal convention changed the oriented side label. If a meaningful normal orientation is transported by the rotation instead of canonically reset, its residual remains positive. A canonical representation is useful for equality, yet need not be equivariant with every geometric action. The distinction prevents a data-normalization choice from being mistaken for a coordinate-free orientation theorem.

</details>

### Exercise 10

Which line is closer to the origin: $x+y=1$ or $2x+y=1$? Compare exact squared distances and explain why raw residual magnitudes cannot decide the question.

<details><summary>Hint 1</summary>

Both residual magnitudes at the origin are one.

</details>

<details><summary>Hint 2</summary>

Divide the squared residual by the squared normal length for each line.

</details>

<details><summary>Full solution</summary>

The squared distances are one half and one fifth respectively, so the second line is closer. Both raw residual magnitudes equal one, illustrating that a numerator without its normal scale is not a distance. The corresponding feet are $(1/2,1/2)$ and $(2/5,1/5)$, whose squared norms agree with those fractions. This comparison needs no decimal square-root calculation and remains invariant under any nonzero rescaling of either line equation.

</details>

## Transferred capstone: Line representations {#computational-legacy-capstone-1}

Find the implicit equation $n\cdot X=c$ for the line through $(2,5)$ and $(7,3)$. Convert it to parametric form. Find the perpendicular distance from $(0,0)$ to the line.

This retains the earlier [Worked Exercises and Synthesis](worked-exercises-and-synthesis.md) problem and full solution with its original source still available.

<details><summary>Hint 1</summary>

Use a perpendicular normal to the difference of the two points.

</details>

<details><summary>Hint 2</summary>

The line constant follows by substituting either given point.

</details>

<details><summary>Full solution</summary>

**Solution.** The direction is $v=(5,-2)$. A normal is $n=(2,5)$. The constant is $c=n\cdot(2,5)=4+25=29$. The implicit form is $2x+5y=29$.

For parametric form, use $P=(2,5)$ and direction $v=(5,-2)$: $L(t)=(2,5)+t(5,-2)$.

The distance from $(0,0)$ is $\lvert 2\cdot 0+5\cdot 0-29\rvert/\sqrt{2^{2}+5^{2}}=29/\sqrt{29}=\sqrt{29}$.

</details>

## Looking backward and forward

This chapter introduced the two fundamental line representations---parametric and implicit---and emphasized that geometric equality is invariant under scaling, not coefficient-wise identity. The signed numerator $n\cdot X-c$ and the perpendicular distance formula will be used in every subsequent chapter.

The next chapter, **Orientation Is the Central Planar Predicate**, builds on these representations to define the orientation test for triples of points. That test is the workhorse of convex hulls, polygon containment, and segment intersection, and it relies on the same careful attention to sign and scale that we established here.

## Summary and source

Nonzero normals and directions define equivalent line representations, while zero data describe different degenerate objects. Equality is proportionality; rational primitive normalization proves a canonical convention without introducing a square root. Perpendicular feet certify distance, interval domains distinguish lines from rays and segments, and oriented side labels require an explicit normal convention. Exact predicates and uncertainty enclosures answer different input questions.

This chapter preserves the earlier five exercises and their full solutions, adds five supported questions and retains the transferred capstone problem with its original source identity. New representation, equality, normalization and distance proofs and worked examples develop the L3 commission. No floating-point implementation, example execution or independent review is inferred from the exact algebra.
