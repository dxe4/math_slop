
# Exercise and Project Solutions

This retains the earlier edition's collected exercise statements and solutions with their original headings. The current fifteen main chapters contain their own expanded exercise sets, staged hints and complete solutions; use those inline sets for the current reading order. The two earlier conic chapters and Worked Exercises and Synthesis also remain available as companions, with their original resource identities. This collection is not a synchronized substitute for the new inline solutions.

---

## Chapter 1: Represent Geometric Objects with Invariants

### Exercise 1
Find the implicit equation $n\cdot X=c$ for the line through $(1,1)$ with normal $(2,-1)$. Which side contains $(0,0)$?

**Solution.** With $n=(2,-1)$ and $P=(1,1)$, we have $c=2\cdot 1+(-1)\cdot 1=1$. The line is $2x-y=1$. For $X=(0,0)$, the signed numerator is $0-0-1=-1<0$, so the origin lies on the negative side.

### Exercise 2
Convert the parametric line $(1,2)+t(3,1)$ to implicit form.

**Solution.** The direction is $v=(3,1)$. A normal is $n=(1,-3)$. Then $c=n\cdot(1,2)=1-6=-5$. The implicit form is $x-3y=-5$, or equivalently $x-3y+5=0$.

### Exercise 3
Find the perpendicular distance from $(4,5)$ to the line $3x+4y=10$.

**Solution.** The signed numerator is $3\cdot 4+4\cdot 5-10=12+20-10=22$. The normal norm is $\lVert(3,4)\rVert=5$. The distance is $\lvert 22\rvert/5=22/5=4.4$.

### Exercise 4
Show that the point $P=(c/n_{x},0)$ lies on $n\cdot X=c$ whenever $n_{x}\neq 0$.

**Solution.** Substitute: $n_{x}\cdot(c/n_{x})+n_{y}\cdot 0=c+0=c$. The equation is satisfied.

### Exercise 5
Two lines are given by $(n_{1},c_{1})=(1,2,3)$ and $(n_{2},c_{2})=(2,4,6)$. Are they the same line? Find a point on the line and a direction vector.

**Solution.** The coefficients are proportional: $(2,4,6)=2\cdot(1,2,3)$. Hence the lines are identical. Since $n_{x}=1\neq 0$, the point $(c/n_{x},0)=(3,0)$ lies on the line. A direction vector perpendicular to $n=(1,2)$ is $v=(-2,1)$.

---

## Chapter 2: Orientation Is the Central Planar Predicate

### Exercise 1
Compute $\operatorname{orient}((0,0),(1,0),(0,1))$ and state the geometric meaning.

**Solution.** $B-A=(1,0)$, $C-A=(0,1)$. The determinant is $1\cdot 1-0\cdot 0=1>0$. The turn is counterclockwise, and the triangle area is $1/2$.

### Exercise 2
Show that $\operatorname{orient}(A,B,C)=\operatorname{orient}(B,C,A)$.

**Solution.** Both expressions expand to $A_{x}B_{y}-A_{y}B_{x}+B_{x}C_{y}-B_{y}C_{x}+C_{x}A_{y}-C_{y}A_{x}$. The terms are the same; only the order changes.

### Exercise 3
Three points have coordinates $A=(0,0)$, $B=(8193,8192)$, and $C=(8192,8191)$. Compare the exact orientation with a direct binary32 evaluation.

**Solution.** All six coordinates are exactly representable in binary32. Exact arithmetic gives
$$8193\cdot8191-8192\cdot8192=(8192+1)(8192-1)-8192^{2}=-1.$$
The two products are near $2^{26}$, where binary32 spacing exceeds one, so direct binary32 multiplication rounds them to the same value and their subtraction returns zero. This is arithmetic cancellation rather than input rounding. An error-bounded adaptive predicate would detect that the floating result is uncertain and recompute the sign exactly.

### Exercise 4
A convex-hull algorithm needs to reject points that lie on the interior of an edge. Should it use $\operatorname{orient}\leq 0$ or $\operatorname{orient}<0$ as the pop condition? What are the consequences of each choice?

**Solution.** Using $\leq 0$ removes collinear boundary points, keeping only the extreme vertices. Using $<0$ retains them. Neither is universally correct; the API must declare which hull representation it returns. The choice affects downstream algorithms that may assume strict convexity or need the full collinear boundary.

### Exercise 5
Prove that the absolute value of the orientation equals the area of the parallelogram spanned by $B-A$ and $C-A$.

**Solution.** The determinant of a $2\times 2$ matrix gives the signed area of the parallelogram spanned by its columns. The absolute value removes the sign, leaving the geometric area.

---

## Chapter 3: Segment Intersection Needs Boundary Cases

### Exercise 1
Find the intersection of the segments from $(0,0)$ to $(2,2)$ and from $(0,2)$ to $(2,0)$.

**Solution.** $P=(0,0)$, $u=(2,2)$, $Q=(0,2)$, $v=(2,-2)$. The denominator is $\operatorname{cross}(u,v)=2\cdot(-2)-2\cdot 2=-4-4=-8$. Then $t=\operatorname{cross}((0,2),(2,-2))/(-8)=(0\cdot(-2)-2\cdot 2)/(-8)=(-4)/(-8)=1/2$. The intersection is $(0,0)+(1/2)(2,2)=(1,1)$. Both parameters are in $[0,1]$, so the segments intersect at their interiors.

### Exercise 2
Show that the segments from $(0,0)$ to $(1,1)$ and from $(2,2)$ to $(3,3)$ are collinear but disjoint.

**Solution.** Both segments lie on the line $y=x$. Projecting onto the $x$-axis, the first interval is $[0,1]$ and the second is $[2,3]$. Their intersection is empty, so the segments do not meet.

### Exercise 3
The segments $(0,0)$-$(2,0)$ and $(2,0)$-$(4,0)$ touch at $(2,0)$. Under what boundary policies does this count as an intersection?

**Solution.** If the policy includes endpoints, the contact counts. If the policy requires interior intersection of both segments, it does not count because $(2,0)$ is an endpoint of both segments. The API must document which policy it implements.

### Exercise 4
Explain why the orientation-based test is division-free.

**Solution.** The orientation predicate uses only addition, subtraction, and multiplication. It never divides. This makes it compatible with arbitrary-precision integer arithmetic and with adaptive floating-point libraries that compute the sign without rounding error; fixed-width integer arithmetic still needs an overflow bound.

### Exercise 5
Two noncollinear segments share a common endpoint, so two of the four orientations in the inclusive intersection test vanish. How should the code proceed, and what changes if the segments are collinear?

**Solution.** For a generic shared endpoint, exactly the two orientation triples containing that endpoint twice vanish. The code checks whether the endpoint lies in the coordinate bounding box of each segment and then applies its inclusive or proper-crossing policy. If the segments are collinear, all four orientations vanish and the code instead intersects their one-dimensional projected intervals. Exactly three vanishing orientations cannot occur for two segments sharing an endpoint: the third forces the remaining endpoints onto the same line, making the fourth vanish too.

---

## Chapter 4: Projection, Distance, and Closest Points

### Exercise 1
Find the closest point on the segment from $(1,1)$ to $(4,1)$ to the point $(3,5)$.

**Solution.** $P=(1,1)$, $v=(3,0)$. Then $t^{*}=((3,5)-(1,1))\cdot(3,0)/(3^{2})=(2,4)\cdot(3,0)/9=6/9=2/3$. Since $0\leq 2/3\leq 1$, the closest point is $(1,1)+(2/3)(3,0)=(3,1)$. The distance is $\lvert 5-1\rvert=4$.

### Exercise 2
A query point is at $(-1,2)$. The segment runs from $(0,0)$ to $(1,0)$. Find the closest point and distance.

**Solution.** $t^{*}=((-1,2)-(0,0))\cdot(1,0)/1=-1$. Clamp to $0$. Closest point is $(0,0)$. Distance is $\sqrt{(-1)^{2}+2^{2}}=\sqrt{5}$.

### Exercise 3
Under what arithmetic assumptions does comparing squared distances preserve their exact order, and what can happen in floating point?

**Solution.** For nonnegative exact values $a$ and $b$, monotonicity of the square root gives $a<b$ exactly when $\sqrt a<\sqrt b$. Thus exact integer or rational squared computations preserve the order without evaluating roots. Floating-point subtractions, multiplications, and sums can already round, overflow, or underflow; correctly rounded square roots are monotone, so they cannot reverse the order of their rounded nonnegative inputs, but two distinct exact distances can tie after rounding. Comparing floating squared values avoids an extra operation but is not exact arithmetic.

### Exercise 4
For a triangle with vertices $(0,0)$, $(2,0)$, $(0,2)$, find the closest point to $(1,1)$.

**Solution.** The point $(1,1)$ lies on the edge from $(2,0)$ to $(0,2)$, which has equation $x+y=2$. Its barycentric coordinates relative to $((0,0),(2,0),(0,2))$ are $(0,1/2,1/2)$, so it lies on the boundary of the closed triangle. The closest point is $(1,1)$ itself, and the distance is $0$.

### Exercise 5
A convex polygon has vertices $(0,0)$, $(3,0)$, $(3,3)$, $(0,3)$. Find the closest point on the polygon to $(4,2)$.

**Solution.** The point is outside the polygon. Project onto each edge:
- Edge $(0,0)$-$(3,0)$: closest is $(3,0)$, distance $\sqrt{1^{2}+2^{2}}=\sqrt{5}$.
- Edge $(3,0)$-$(3,3)$: $t^{*}=((4,2)-(3,0))\cdot(0,3)/9=6/9=2/3$. Closest is $(3,2)$, distance $1$.
- Edge $(3,3)$-$(0,3)$: closest is $(3,3)$, distance $\sqrt{1^{2}+1^{2}}=\sqrt{2}$.
- Edge $(0,3)$-$(0,0)$: closest is $(0,2)$, distance $4$.

The minimum distance is $1$, achieved at $(3,2)$ on the right edge.

---

## Chapter 5: Transformations and Homogeneous Coordinates

### Exercise 1
Find the $3\times 3$ homogeneous matrix for a rotation by $180^{\circ}$ about the origin followed by a translation by $(3,1)$.

**Solution.** The rotation matrix is $\operatorname{diag}(-1,-1)$. The homogeneous matrix is

$$M=\begin{pmatrix}-1&0&3\\0&-1&1\\0&0&1\end{pmatrix}.$$

### Exercise 2
Show that the reflection across the line $x=0$ (the $y$-axis) sends $(a,b)$ to $(-a,b)$.

**Solution.** The line passes through $M=(0,0)$ with normal $n=(1,0)$. Then

$$R(P)=P-2\,\frac{(a,b)\cdot(1,0)}{1}\,(1,0)=(a,b)-2a(1,0)=(-a,b).$$

### Exercise 3
A projective transformation maps the point at infinity in direction $(1,1)$ to a finite point. What is the image of $[1,1,0]^{T}$ under

$$M=\begin{pmatrix}1&0&1\\0&1&1\\1&0&0\end{pmatrix}?$$

**Solution.** $M[1,1,0]^{T}=[1,1,1]^{T}$, which corresponds to the finite point $(1,1)$. The direction has been mapped to a finite point; this is valid in projective geometry.

### Exercise 4
Verify that the composition of two reflections is a translation when the mirror lines are parallel.

**Solution.** Let the first mirror be $n\cdot X=c_{1}$ and the second be $n\cdot X=c_{2}$. Reflecting across the first sends $P$ to $P-2\frac{n\cdot P-c_{1}}{\lVert n\rVert^{2}}n$. Reflecting the result across the second adds another term. The point-dependent terms cancel, leaving a pure translation by $2\frac{c_{2}-c_{1}}{\lVert n\rVert^{2}}n$. For example, reflecting first in $x=0$ and then in $x=a$ sends $x$ to $x+2a$.

### Exercise 5
Find the unique affine map sending $(0,0)\mapsto(1,1)$, $(1,0)\mapsto(2,1)$, and $(0,1)\mapsto(1,2)$. Explain what the three data alone would say about a map not already assumed affine.

**Solution.** An affine map has the form $X\mapsto AX+b$. From the first condition, $b=(1,1)$. From the second, the first column of $A$ is $(1,0)$; from the third, the second column is $(0,1)$. Thus the unique affine interpolant has $A=I$ and is translation by $(1,1)$. Three point images do not prove that an otherwise unspecified map is affine; many nonaffine maps can agree on those three points.

---

## Chapter 6: Circles and Conics as Quadratic Forms

### Exercise 1
Classify the conic $x^{2}-4xy+4y^{2}-3x+6y+2=0$.

**Solution.** Put $u=x-2y$. Then the equation is $u^{2}-3u+2=(u-1)(u-2)=0$. The real locus is the pair of parallel lines $x-2y=1$ and $x-2y=2$, so this is a degenerate conic rather than a parabola.

### Exercise 2
Reduce $9x^{2}+4y^{2}-18x+16y-11=0$ to standard form and identify the center and semiaxes.

**Solution.** $9(x^{2}-2x)+4(y^{2}+4y)=11$, so $9(x-1)^{2}+4(y+2)^{2}=36$, giving

$$\frac{(x-1)^{2}}{4}+\frac{(y+2)^{2}}{9}=1.$$

This is an ellipse centered at $(1,-2)$ with semiaxes $a=3$ (vertical) and $b=2$ (horizontal).

### Exercise 3
Find the intersection of the ray from $(0,0)$ in direction $(1,1)$ with the circle $x^{2}+y^{2}=4$.

**Solution.** Substitute $x=t$, $y=t$: $2t^{2}=4$, so $t=\sqrt{2}$ (taking the positive root for the ray). The intersection is $(\sqrt{2},\sqrt{2})$.

### Exercise 4
Explain why $x^{2}+y^{2}+1=0$ has no real points despite having ellipse-like quadratic part.

**Solution.** The left side is always at least $1$ for real $x$ and $y$, so it can never equal zero. The quadratic part is positive definite, but the constant term shifts the locus away from the origin.

### Exercise 5
For the conic $x^{2}-y^{2}=0$, find the real locus and explain why it is not a hyperbola.

**Solution.** The equation factors as $(x-y)(x+y)=0$. The real locus is the union of the two lines $y=x$ and $y=-x$. A hyperbola is a smooth curve; this is a degenerate conic consisting of two intersecting lines.

---

## Chapter 7: Conic Focus–Directrix Computation

### Exercise 1
For focus $(0,0)$, directrix $x=1$, and $e=1/2$, find the center, semiaxes, and vertices of the ellipse.

**Solution.** $h=-(1/4)/(3/4)=-1/3$. $a=(1/2)/(3/4)=2/3$. $b=(1/2)/\sqrt{3/4}=1/\sqrt{3}$. The vertices are at $(h\pm a,0)=(-1,0)$ and $(1/3,0)$.

### Exercise 2
Show that the vertex of the parabola with focus $(0,0)$ and directrix $x=1$ is equidistant from the focus and the directrix.

**Solution.** The vertex is at $(1/2,0)$. Its distance to the focus is $1/2$, and its distance to the directrix $x=1$ is also $1/2$.

### Exercise 3
For $e=2$, find the center and asymptotes of the hyperbola with focus $(0,0)$ and directrix $x=1$.

**Solution.** $h=4/3$, $a=2/3$, $b=2/\sqrt{3}$. The standard form is

$$\frac{(x-4/3)^{2}}{4/9}-\frac{y^{2}}{4/3}=1.$$

The asymptotes are $y=\pm\frac{b}{a}(x-h)=\pm\sqrt{3}(x-4/3)$.

### Exercise 4
Drop the standard hypothesis $F\notin D$. For $F=(0,0)$ and $D$ the line $x=0$, classify the locus $PF=e\,\operatorname{dist}(P,D)$.

**Solution.** Squaring gives $x^{2}+y^{2}=e^{2}x^{2}$, or $y^{2}=(e^{2}-1)x^{2}$. If $0<e<1$, the only point is the focus. If $e=1$, the locus is the entire $x$-axis. If $e>1$, it is the union of the two lines $y=\pm\sqrt{e^{2}-1}x$. Thus the excluded case produces degenerate loci, not a contradiction.

### Exercise 5
A comet trajectory is modeled as a conic with focus at the Sun and eccentricity $e=1.1$. Is the orbit bound or unbound? What is the sign of the energy?

**Solution.** In the ideal Newtonian attractive two-body inverse-square model, with potential energy normalized to zero at infinity, $e>1$ describes a hyperbolic unbound orbit and its total specific orbital energy is positive. The sign conclusion depends on that dynamical model; eccentricity alone is only a geometric parameter.

---

## Chapter 8: Three-Dimensional Predicates

### Exercise 1
Find the intersection of the line $(1,2,3)+t(0,1,1)$ with the plane $x+y+z=6$.

**Solution.** $n=(1,1,1)$, $c=6$, $P=(1,2,3)$, $v=(0,1,1)$. The denominator is $n\cdot v=0+1+1=2$. The numerator is $6-(1+2+3)=0$. Thus $t=0$ and the intersection is $P=(1,2,3)$. The point lies in the plane.

### Exercise 2
Compute the scalar triple product of $u=(1,0,0)$, $v=(0,1,0)$, $w=(1,1,0)$. What does the result mean geometrically?

**Solution.** $v\times w=(0,0,-1)$. Then $u\cdot(v\times w)=1\cdot 0+0\cdot 0+0\cdot(-1)=0$. The vectors are coplanar; they all lie in the $xy$-plane.

### Exercise 3
Find the area of the parallelogram spanned by $u=(2,0,0)$ and $v=(1,1,0)$.

**Solution.** $u\times v=(0,0,2)$. The magnitude is $2$, so the area is $2$.

### Exercise 4
A line is parallel to a plane. How do you distinguish the disjoint case from the contained case?

**Solution.** Compute $n\cdot v$. If it is zero, the line is parallel. Then evaluate $c-n\cdot P$. If this is also zero, the line lies in the plane. Otherwise, the line is parallel and disjoint.

### Exercise 5
Explain why the scalar triple product is invariant under cyclic permutation of its arguments.

**Solution.** The scalar triple product $u\cdot(v\times w)$ equals the determinant of the matrix with columns $u,v,w$. The determinant is invariant under cyclic permutation of columns and changes sign under transposition. Hence $u\cdot(v\times w)=v\cdot(w\times u)=w\cdot(u\times v)$.

---

## Chapter 9: Convex Hull as an Orientation Algorithm

### Exercise 1
Find the convex hull of $(0,0)$, $(1,0)$, $(1,1)$, $(0,1)$, $(0.5,0.5)$.

**Solution.** The interior point $(0.5,0.5)$ is discarded. The hull is the square with vertices $(0,0)$, $(1,0)$, $(1,1)$, $(0,1)$.

### Exercise 2
What is the convex hull of three collinear points $(0,0)$, $(1,1)$, $(2,2)$?

**Solution.** With the $\leq 0$ policy, only the extremes $(0,0)$ and $(2,2)$ are kept. The hull is the segment connecting them.

### Exercise 3
Explain why the monotone-chain algorithm is $O(n\log n)$ and not $O(n)$.

**Solution.** The sorting step requires $O(n\log n)$ comparisons. The chain-building phase is $O(n)$, but it does not dominate. No comparison-based algorithm can compute the convex hull in $o(n\log n)$ time in the worst case, because sorting reduces to convex hull.

### Exercise 4
A point set has $n$ distinct points on a circle. How many vertices does the convex hull have?

**Solution.** Every one of the $n$ distinct points on a circle is extreme, so the convex hull has $n$ vertices. The distinctness hypothesis avoids counting duplicate inputs as different vertices.

### Exercise 5
Prove the local lower-hull claim used by the pop step, and explain why it does not show that the popped point is absent from the full hull.

**Solution.** The scan order gives $A_x\leq B_x\leq C_x$. If $A_x<C_x$ and $\operatorname{orient}(A,B,C)\leq0$, then $B$ lies on or above the chord $AC$ and cannot be a lower-boundary vertex for the processed points. If $A_x=C_x$, all three $x$-coordinates agree and lexicographic order puts $B$ between $A$ and $C$ on the vertical line, so it is redundant. Repeating the pop restores the directed-edge invariant. This is only a lower-hull conclusion: a popped point can be an upper extreme point---the worked example pops $(0,2)$ from the lower chain and retains it on the upper chain.

---

## Chapter 10: Curved Metric Computation

### Exercise 1
Find the spherical distance between $(1,0,0)$ and $(0,0,1)$.

**Solution.** Both are unit vectors. Their dot product is $0$. The distance is $\arccos(0)=\pi/2$.

### Exercise 2
Find the hyperbolic distance between $(0,0)$ and $(0,0.5)$ in the Poincaré disk.

**Solution.** By symmetry, this is the same as the distance to $(0.5,0)$, which is $\ln 3\approx 1.0986$.

### Exercise 3
Show that as $r\to 1^{-}$, the hyperbolic distance from the origin to $(r,0)$ tends to infinity.

**Solution.** $\cosh d=1+2r^{2}/(1-r^{2})$. As $r\to 1^{-}$, the denominator $1-r^{2}\to 0^{+}$, so $\cosh d\to\infty$ and $d\to\infty$.

### Exercise 4
A binary64 routine computes the angle between $u=(1,10^{-8},0)$ and $v=(1,0,0)$ with `acos` of the normalized dot product. Explain the loss and give a more informative formula.

**Solution.** In typical binary64 evaluation, the norm and normalized first coordinate round to $1$, so the dot product is exactly $1$ and `acos` returns $0$, losing the nonzero angle of about $10^{-8}$ radians. Clamping prevents out-of-domain `acos` inputs but cannot restore lost information. The formula $\operatorname{atan2}(\lVert u\times v\rVert,u\cdot v)$ returns about $10^{-8}$ here and is better conditioned for a small angle.

### Exercise 5
Two points on the sphere have spherical distance $\pi$. What is their geometric relationship?

**Solution.** A spherical distance of $\pi$ means the angle between the directions is $180^{\circ}$. The points are antipodal: they lie on opposite ends of a diameter.

---

## Chapter 11: Property-Based Test Catalogue

### Exercise 1
Write a test that verifies orientation swap sign for $10^{4}$ random triples of points in $[-1,1]^{2}$.

**Solution.** Generate random points $A,B,C$. Compute $o_{1}=\operatorname{orient}(A,B,C)$ and $o_{2}=\operatorname{orient}(A,C,B)$. Assert $o_{1}==-o_{2}$ within a scale-aware tolerance. Repeat $10^{4}$ times.

### Exercise 2
Design a test for the reflection involution property.

**Solution.** Choose a random line (point $M$ and normal $n$) and a random point $P$. Compute $R(P)$ and then $R(R(P))$. Assert that $R(R(P))$ equals $P$ within tolerance. Also assert that points on the line are fixed.

### Exercise 3
Why is it important to test with nearly collinear points?

**Solution.** Nearly collinear points stress the floating-point evaluation of the orientation predicate. The sign may be wrong due to cancellation, and algorithms that depend on orientation may fail or produce inconsistent results.

### Exercise 4
Write a test that verifies spherical distance symmetry.

**Solution.** Generate random nonzero vectors $u,v$. Compute $d_{1}=d_{S}(u,v)$ and $d_{2}=d_{S}(v,u)$. Assert $\lvert d_{1}-d_{2}\rvert<10^{-12}$. Also test with antipodal vectors, identical vectors, and orthogonal vectors.

### Exercise 5
A convex hull routine passes all tests with random points but fails on a grid of $100\times 100$ points. What is the likely cause?

**Solution.** A grid contains many collinear boundary points. With the documented boundary-retaining policy, a strict pop condition $<0$ deliberately retains those points; it does not discard the extreme vertices. Failure more likely indicates that downstream code expected a vertex-only hull, that duplicates or the all-collinear case were mishandled, or that the implementation's policy disagrees with its tests. Test both policies explicitly.

---

## Chapter 12: Worked Exercises and Synthesis

## Exercise 1: Line representations

Find the implicit equation $n\cdot X=c$ for the line through $(2,5)$ and $(7,3)$. Convert it to parametric form. Find the perpendicular distance from $(0,0)$ to the line.

**Solution.** The direction is $v=(5,-2)$. A normal is $n=(2,5)$. The constant is $c=n\cdot(2,5)=4+25=29$. The implicit form is $2x+5y=29$.

For parametric form, use $P=(2,5)$ and direction $v=(5,-2)$: $L(t)=(2,5)+t(5,-2)$.

The distance from $(0,0)$ is $\lvert 2\cdot 0+5\cdot 0-29\rvert/\sqrt{2^{2}+5^{2}}=29/\sqrt{29}=\sqrt{29}$.

*(Depends on Chapter 1: Represent Geometric Objects with Invariants.)*

## Exercise 2: Orientation and area

Four points are given: $A=(1,1)$, $B=(4,2)$, $C=(3,5)$, $D=(2,4)$. Compute the orientation of $(A,B,C)$ and $(A,C,D)$. Is the quadrilateral $ABCD$ convex? What is its area?

**Solution.** $\operatorname{orient}(A,B,C)=(3)(4)-(1)(2)=10>0$. $\operatorname{orient}(A,C,D)=(2)(3)-(4)(1)=2>0$. Two diagonal-based triangle orientations do not by themselves prove convexity. Check all four consecutive turns:
$$\operatorname{orient}(A,B,C)=10,\quad \operatorname{orient}(B,C,D)=4,$$
$$\operatorname{orient}(C,D,A)=2,\quad \operatorname{orient}(D,A,B)=8.$$
All are positive, so this ordered quadrilateral is convex.

The area is the sum of the triangle areas: $\frac{1}{2}(10+2)=6$.

*(Depends on Chapter 2: Orientation Is the Central Planar Predicate.)*

## Exercise 3: Segment intersection with boundary cases

Determine whether the segments $P=(0,0)$ to $Q=(4,4)$ and $R=(2,2)$ to $S=(6,0)$ intersect. If they do, find the intersection point. State which boundary policy applies.

**Solution.** The first segment is $L_{1}(t)=(0,0)+t(4,4)$. The second is $L_{2}(s)=(2,2)+s(4,-2)$.

The cross denominator is $\operatorname{cross}((4,4),(4,-2))=4\cdot(-2)-4\cdot 4=-8-16=-24$.

With $R-P=(2,2)$, we get $t=\operatorname{cross}((2,2),(4,-2))/(-24)=(-4-8)/(-24)=12/24=1/2$.

The intersection is $(0,0)+(1/2)(4,4)=(2,2)$. This is the endpoint $R$ of the second segment and an interior point of the first. Under a policy that includes endpoints, the segments intersect at $(2,2)$.

*(Depends on Chapter 3: Segment Intersection Needs Boundary Cases.)*

## Exercise 4: Closest point on a polygon

Find the closest point on the triangle with vertices $(0,0)$, $(4,0)$, $(0,3)$ to the query point $(5,2)$.

**Solution.** The query point is outside the triangle. We project onto each edge:

- Edge $(0,0)$-$(4,0)$: $t^{*}=(5,2)\cdot(4,0)/16=20/16=5/4>1$. Closest point is $(4,0)$, distance $\sqrt{1^{2}+2^{2}}=\sqrt{5}$.
- Edge $(4,0)$-$(0,3)$: direction $(-4,3)$. $t^{*}=((5,2)-(4,0))\cdot(-4,3)/25=(1,2)\cdot(-4,3)/25=2/25\in[0,1]$. Closest point is $(4,0)+(2/25)(-4,3)=(92/25,6/25)$, distance $\sqrt{(5-92/25)^{2}+(2-6/25)^{2}}=\sqrt{(33/25)^{2}+(44/25)^{2}}=55/25=11/5=2.2$.
- Edge $(0,3)$-$(0,0)$: $t^{*}=((5,2)-(0,3))\cdot(0,-3)/9=3/9=1/3$. Closest point is $(0,2)$, distance $5$.

The minimum distance is $11/5$, achieved at $(92/25,6/25)$ on the edge $(4,0)$-$(0,3)$.

*(Depends on Chapter 4: Projection, Distance, and Closest Points.)*

## Exercise 5: Transformation composition

Find the $3\times 3$ homogeneous matrix for: rotate by $45^{\circ}$ about the origin, then translate by $(1,0)$, then scale by $2$ in both directions. Apply the result to $(1,0)$.

**Solution.** The rotation matrix is

$$R=\begin{pmatrix}\cos 45^{\circ}&-\sin 45^{\circ}\\\sin 45^{\circ}&\cos 45^{\circ}\end{pmatrix}=\frac{1}{\sqrt{2}}\begin{pmatrix}1&-1\\1&1\end{pmatrix}.$$

The translation is $T=(1,0)$. The scale is $S=2I$. In homogeneous coordinates:

$$M_{R}=\begin{pmatrix}1/\sqrt{2}&-1/\sqrt{2}&0\\1/\sqrt{2}&1/\sqrt{2}&0\\0&0&1\end{pmatrix},\quad M_{T}=\begin{pmatrix}1&0&1\\0&1&0\\0&0&1\end{pmatrix},\quad M_{S}=\begin{pmatrix}2&0&0\\0&2&0\\0&0&1\end{pmatrix}.$$

For column vectors, the composition is
$$M=M_{S}M_{T}M_{R}=\begin{pmatrix}\sqrt2&-\sqrt2&2\\\sqrt2&\sqrt2&0\\0&0&1\end{pmatrix}.$$
Applied to $[1,0,1]^{T}$:

$$M_{R}[1,0,1]^{T}=[1/\sqrt{2},1/\sqrt{2},1]^{T},$$

$$M_{T}[1/\sqrt{2},1/\sqrt{2},1]^{T}=[1/\sqrt{2}+1,1/\sqrt{2},1]^{T},$$

$$M_{S}[1/\sqrt{2}+1,1/\sqrt{2},1]^{T}=[2/\sqrt{2}+2,2/\sqrt{2},1]^{T}=[\sqrt{2}+2,\sqrt{2},1]^{T}.$$

The image is $(\sqrt{2}+2,\sqrt{2})$.

*(Depends on Chapter 5: Transformations and Homogeneous Coordinates.)*

## Exercise 6: Conic classification

Classify the conic $x^{2}+6xy+9y^{2}-2x+4y+1=0$. Is it degenerate?

**Solution.** $A=1$, $B=6$, $C=9$. The discriminant is $B^{2}-4AC=36-36=0$, so the quadratic part is parabola-like. The quadratic matrix is

$$Q=\begin{pmatrix}1&3\\3&9\end{pmatrix}.$$

Its determinant is $9-9=0$, confirming rank $1$. The equation factors as $(x+3y)^{2}-2x+4y+1=0$. Setting $u=x+3y$ gives $u^{2}-2x+4y+1=0$. Since $x=u-3y$, this becomes $u^{2}-2(u-3y)+4y+1=u^{2}-2u+10y+1=0$. Solving for $y$ gives a parabola. The conic is nondegenerate.

*(Depends on Chapter 6: Circles and Conics as Quadratic Forms.)*

## Exercise 7: Focus--directrix parameters

For focus $(0,0)$, directrix $x=2$, and $e=1/3$, find the center, semiaxes, and eccentricity of the ellipse.

**Solution.** Shifting the directrix to $x=2$ is equivalent to scaling the standard formulas. The center is at $h=-e^{2}/(1-e^{2})\cdot 2=-(1/9)/(8/9)\cdot 2=-1/4$. The semiaxes are $a=e/(1-e^{2})\cdot 2=(1/3)/(8/9)\cdot 2=3/4$ and $b=e/\sqrt{1-e^{2}}\cdot 2=(1/3)/\sqrt{8/9}\cdot 2=1/\sqrt{2}$.

*(Depends on Chapter 7: Conic Focus--Directrix Computation.)*

## Exercise 8: Plane and line in 3D

Find the intersection of the line $(1,0,0)+t(1,1,1)$ with the plane $x+y+z=3$. Is the line parallel to the plane?

**Solution.** $n=(1,1,1)$, $c=3$, $P=(1,0,0)$, $v=(1,1,1)$. The denominator is $n\cdot v=3\neq 0$, so the line is not parallel. The parameter is $t=(3-(1+0+0))/3=2/3$. The intersection is $(1,0,0)+(2/3)(1,1,1)=(5/3,2/3,2/3)$.

*(Depends on Chapter 8: Three-Dimensional Predicates.)*

## Exercise 9: Convex hull verification

The points $(0,0)$, $(3,1)$, $(2,3)$, $(1,4)$, $(-1,2)$ are given. Find the convex hull and verify that every non-hull point is inside or on the boundary.

**Solution.** The extreme points are $(-1,2)$, $(0,0)$, $(3,1)$, $(2,3)$, $(1,4)$. The point $(1,4)$ is extreme; $(2,3)$ is extreme. Checking orientations confirms that $(-1,2)$-$(0,0)$-$(3,1)$-$(2,3)$-$(1,4)$ forms a convex polygon. No input point lies outside.

*(Depends on Chapter 9: Convex Hull as an Orientation Algorithm.)*

## Exercise 10: Curved distance comparison

On the unit sphere, find the distance from $(1,0,0)$ to $(1/\sqrt{2},1/\sqrt{2},0)$. In the Poincaré disk, find the distance from $(0,0)$ to $(1/2,1/2)$. Which distance is larger?

**Solution.** Spherical: dot product is $1/\sqrt{2}$, so distance is $\arccos(1/\sqrt{2})=\pi/4\approx 0.785$.

Hyperbolic: $\lVert u\rVert=0$, $\lVert v\rVert=\sqrt{1/4+1/4}=1/\sqrt{2}$. Then

$$\cosh d=1+\frac{2\cdot(1/2)}{(1-0)(1-1/2)}=1+\frac{1}{1/2}=3,$$

so $d=\operatorname{arccosh}(3)=\ln(3+\sqrt{8})=\ln(3+2\sqrt{2})\approx 1.763$.

The hyperbolic distance is larger.

*(Depends on Chapter 10: Curved Metric Computation.)*
