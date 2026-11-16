var e=`---
parent_id: book-precalculus
chapter_id: vectors-plane
title: "Vectors in the Plane"
level: secondary
license: CC BY-SA 4.0
---

# Vectors in the Plane

## A movement is different from a location

A point tells us where something is. A displacement tells us how its position changes. Moving three units east and two units north describes the same displacement whether the journey begins at the origin or at a point across the page. Vectors make this distinction precise: a vector records a directed change, without requiring a particular starting point.

This distinction matters in geometry and in models of motion. Distances alone cannot describe the result of combining two movements. Walking three kilometres east and then three kilometres west returns to the starting point, although the total distance walked is six kilometres. Adding displacement vectors records the return correctly. Likewise, two forces of the same size can reinforce each other, oppose each other, or act in different directions.

In this chapter you will calculate with plane vectors, distinguish them from points and scalars, use the dot product to measure directional agreement, and resolve a vector into components along and perpendicular to a chosen line. We will prove two important length inequalities directly from coordinate algebra. Preparation includes [trigonometric identities](trigonometric-identities.md), especially the cosine subtraction formula, and ordinary coordinate geometry. The preceding chapter on [complex numbers and polar form](complex-numbers-polar-form.md) provides another setting for magnitude and direction, but complex multiplication will not be needed here.

## Components, points and scalars

**Definition 10.1 (Plane vector).** A plane vector is an ordered pair of real components, written $\\mathbf v=\\langle v_1,v_2\\rangle$. Geometrically, it is represented by any directed segment whose horizontal and vertical changes are $v_1$ and $v_2$. Directed segments represent the same vector when their component changes agree.

If $P=(p_1,p_2)$ and $Q=(q_1,q_2)$ are points, then

$$
\\overrightarrow{PQ}=\\langle q_1-p_1,q_2-p_2\\rangle.
$$

The reverse displacement is $\\overrightarrow{QP}=-\\overrightarrow{PQ}$. A point has a position; a vector describes a change of position. After choosing an origin $O$, the position vector $\\overrightarrow{OP}$ identifies a point with its coordinates, but that identification depends on the origin. Translating the origin changes point coordinates while leaving the components of a displacement between fixed points unchanged.

A scalar is a real number used to multiply a vector. The scalar $3$ and the vector $\\langle3,0\\rangle$ are different kinds of object. The first has no direction; the second describes a horizontal change. We will use bold symbols for vectors to keep these roles visible. The symbol $\\mathbf0=\\langle0,0\\rangle$ denotes the zero vector, whereas $0$ without bold type is a scalar. Context sometimes makes the distinction harmless, but it remains mathematically useful.

**Definition 10.2 (Addition and scalar multiplication).** For vectors $\\mathbf u=\\langle u_1,u_2\\rangle$, $\\mathbf v=\\langle v_1,v_2\\rangle$ and a scalar $t\\in\\mathbb R$, define

$$
\\mathbf u+\\mathbf v=\\langle u_1+v_1,u_2+v_2\\rangle,
\\qquad
 t\\mathbf v=\\langle tv_1,tv_2\\rangle.
$$

Vector subtraction means $\\mathbf u-\\mathbf v=\\mathbf u+(-\\mathbf v)$. For successive movements, place the second directed segment at the end of the first. Their sum goes from the first starting point to the final endpoint. This is the head-to-tail rule. Placing both vectors at a common starting point instead gives the same sum as the diagonal of the parallelogram they determine.

Componentwise real arithmetic proves familiar rules such as $\\mathbf u+\\mathbf v=\\mathbf v+\\mathbf u$, $(s+t)\\mathbf v=s\\mathbf v+t\\mathbf v$, and $t(\\mathbf u+\\mathbf v)=t\\mathbf u+t\\mathbf v$. These rules do not define a product of two vectors. The dot product introduced later is a particular operation with a scalar output; ordinary juxtaposition of two vectors has no meaning assigned in this chapter.

**Example 10.3 (Displacements and a final point).** Let $P=(2,-1)$, $Q=(-1,3)$ and $R=(4,5)$. Then

$$
\\overrightarrow{PQ}=\\langle-3,4\\rangle,
\\qquad \\overrightarrow{QR}=\\langle5,2\\rangle.
$$

Their sum is $\\langle2,6\\rangle$, which equals $\\overrightarrow{PR}=\\langle4-2,5-(-1)\\rangle$. The intermediate point cancels when the changes are added. If a traveller starts at $S=(10,10)$ and makes the same combined displacement, the final point is $(12,16)$. That is a point obtained by applying a vector to a starting point, rather than a new interpretation of the vector's components as its unique location.

## Length, direction and unit vectors

**Definition 10.4 (Norm).** The norm, or magnitude, of $\\mathbf v=\\langle a,b\\rangle$ is

$$
\\|\\mathbf v\\|=\\sqrt{a^2+b^2}.
$$

It is the length of a representing directed segment, independent of its starting point. It is nonnegative and equals zero exactly when $\\mathbf v=\\mathbf0$. Moreover, for any real scalar $t$,

$$
\\|t\\mathbf v\\|=|t|\\|\\mathbf v\\|,
$$

because the squared components sum to $t^2(a^2+b^2)$ and the nonnegative square root of $t^2$ is $|t|$. In particular, $\\| -\\mathbf v\\|=\\|\\mathbf v\\|$: reversing a displacement changes its direction but not its length.

For a nonzero vector, its direction angle $\\theta$ measured anticlockwise from the positive horizontal axis satisfies

$$
\\mathbf v=\\|\\mathbf v\\|\\langle\\cos\\theta,\\sin\\theta\\rangle.
$$

As with complex arguments, angles differing by $2k\\pi$ represent the same direction. The zero vector has no direction angle: there is no segment pointing one way rather than another, and division by its length would be impossible. The zero vector must not be assigned an angle merely to make a calculator expression return a number.

**Definition 10.5 (Unit vector).** A unit vector has norm $1$. If $\\mathbf v\\ne\\mathbf0$, the unit vector in its direction is $\\mathbf v/\\|\\mathbf v\\|$.

The definition is justified by norm homogeneity: its length is $\\|\\mathbf v\\|/\\|\\mathbf v\\|=1$, and the positive divisor preserves direction. A negative scalar would reverse the direction. Standard coordinate unit vectors are $\\mathbf e_1=\\langle1,0\\rangle$ and $\\mathbf e_2=\\langle0,1\\rangle$, so $\\langle a,b\\rangle=a\\mathbf e_1+b\\mathbf e_2$. Using $\\mathbf e_1,\\mathbf e_2$ avoids confusing a coordinate vector with the complex number $i$.

**Example 10.6 (Length and prescribed magnitude).** Let $\\mathbf v=\\langle-6,8\\rangle$. Its norm is $\\sqrt{36+64}=10$, so its unit direction is $\\langle-3/5,4/5\\rangle$. A vector of length $7$ in the same direction is therefore $\\langle-21/5,28/5\\rangle$. A vector of length $7$ in the opposite direction is its negative, $\\langle21/5,-28/5\\rangle$.

The direction lies in the second quadrant, since its horizontal component is negative and its vertical component positive. A tangent calculation alone would not distinguish that direction from the opposite one. The exact unit components already describe the direction completely, without requiring a decimal angle.

## The dot product and an algebraic bound

**Definition 10.7 (Dot product).** For plane vectors $\\mathbf u=\\langle a,b\\rangle$ and $\\mathbf v=\\langle c,d\\rangle$, define the scalar

$$
\\mathbf u\\cdot\\mathbf v=ac+bd.
$$

In particular, $\\mathbf v\\cdot\\mathbf v=\\|\\mathbf v\\|^2$. The operation is symmetric and distributes over vector addition, and a scalar can be taken outside either input. For example,

$$
\\mathbf u\\cdot(\\mathbf v+\\mathbf w)
=\\mathbf u\\cdot\\mathbf v+\\mathbf u\\cdot\\mathbf w,
\\qquad
(t\\mathbf u)\\cdot\\mathbf v=t(\\mathbf u\\cdot\\mathbf v).
$$

Each identity follows by expanding the two coordinates. A dot product can be negative, zero or positive, even though a norm is always nonnegative. It is a signed measure of agreement between directions, not a distance by itself.

**Theorem 10.8 (Cauchy–Schwarz inequality in the plane).** For all plane vectors $\\mathbf u,\\mathbf v$,

$$
|\\mathbf u\\cdot\\mathbf v|\\le\\|\\mathbf u\\|\\|\\mathbf v\\|.
$$

*Proof.* Write $\\mathbf u=\\langle a,b\\rangle$ and $\\mathbf v=\\langle c,d\\rangle$. Direct expansion gives the identity

$$
(a^2+b^2)(c^2+d^2)-(ac+bd)^2=(ad-bc)^2.
$$

The right side is nonnegative. Therefore $(\\mathbf u\\cdot\\mathbf v)^2\\le\\|\\mathbf u\\|^2\\|\\mathbf v\\|^2$. Taking nonnegative square roots gives the claimed inequality, including cases where either vector is zero. ∎

Equality holds precisely when $ad-bc=0$. If $\\mathbf u\\ne\\mathbf0$ and $a\\ne0$, this condition gives $d=(b/a)c$, so $\\mathbf v=(c/a)\\mathbf u$. If instead $a=0$, then $b\\ne0$ and the condition gives $c=0$, so $\\mathbf v=(d/b)\\mathbf u$. Thus for a nonzero first vector, equality means the other vector is a scalar multiple of it. If either vector is zero, equality also holds. Both matching and opposite directions can give equality because the inequality contains an absolute value.

The square $(ad-bc)^2$ is useful beyond this proof: it measures exactly the gap between the two squared sides. The inequality is therefore a consequence of a concrete identity in two coordinates, rather than an estimate inferred from a drawing.

## Angles and orthogonality

**Proposition 10.9 (Angle formula).** For nonzero plane vectors $\\mathbf u,\\mathbf v$, the angle $\\theta$ between them is the unique angle in $[0,\\pi]$ satisfying

$$
\\cos\\theta=\\frac{\\mathbf u\\cdot\\mathbf v}{\\|\\mathbf u\\|\\|\\mathbf v\\|}.
$$

*Justification.* Cauchy–Schwarz places the right side in $[-1,1]$, so the inverse cosine supplies exactly one angle in $[0,\\pi]$. To connect it with geometry, write the two unit directions as $\\langle\\cos\\alpha,\\sin\\alpha\\rangle$ and $\\langle\\cos\\beta,\\sin\\beta\\rangle$. Their dot product is $\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta=\\cos(\\alpha-\\beta)$. The undirected angle between the rays is the representative in $[0,\\pi]$ with this cosine, giving the formula. ∎

For nonzero vectors, a positive dot product means $0\\le\\theta<\\pi/2$, a zero dot product means $\\theta=\\pi/2$, and a negative dot product means $\\pi/2<\\theta\\le\\pi$. The endpoints include coincident directions at angle zero and opposite directions at angle $\\pi$; angles strictly between those endpoints and a right angle are acute or obtuse respectively. A zero vector has no angle with another vector: the formula's denominator would be zero. The norm-zero exception is essential even when a program or diagram tempts us to assign an angle.

**Definition 10.10 (Orthogonality).** Two vectors are orthogonal when their dot product is zero.

For nonzero vectors this means their directions are perpendicular. Algebraically, the zero vector is orthogonal to every vector because $\\mathbf0\\cdot\\mathbf v=0$. This convention is useful and consistent, but it does not assign a right angle to the zero vector. “Orthogonal” includes that algebraic zero case; a statement about the angle between vectors must still require nonzero inputs.

**Example 10.11 (An exact angle).** Let $\\mathbf u=\\langle1,1\\rangle$ and $\\mathbf v=\\langle0,2\\rangle$. Their dot product is $2$, and their norms are $\\sqrt2$ and $2$. Thus

$$
\\cos\\theta=\\frac{2}{2\\sqrt2}=\\frac1{\\sqrt2},
$$

so $\\theta=\\pi/4$. Both vectors are nonzero and the angle lies in the required interval. In contrast, $\\langle1,-1\\rangle$ is orthogonal to $\\mathbf u$ because $1-1=0$; their two nonzero directions make a right angle. These conclusions use the dot product's sign and value, rather than comparing the vectors' lengths alone.

## The triangle inequality

**Theorem 10.12 (Triangle inequality).** For all plane vectors $\\mathbf u,\\mathbf v$,

$$
\\|\\mathbf u+\\mathbf v\\|\\le\\|\\mathbf u\\|+\\|\\mathbf v\\|.
$$

*Proof.* Expand the square of the norm using the dot product:

$$
\\|\\mathbf u+\\mathbf v\\|^2
=\\|\\mathbf u\\|^2+2\\mathbf u\\cdot\\mathbf v+\\|\\mathbf v\\|^2.
$$

By Cauchy–Schwarz, $\\mathbf u\\cdot\\mathbf v\\le|\\mathbf u\\cdot\\mathbf v|\\le\\|\\mathbf u\\|\\|\\mathbf v\\|$. Consequently,

$$
\\|\\mathbf u+\\mathbf v\\|^2
\\le\\|\\mathbf u\\|^2+2\\|\\mathbf u\\|\\|\\mathbf v\\|+\\|\\mathbf v\\|^2
=(\\|\\mathbf u\\|+\\|\\mathbf v\\|)^2.
$$

Both proposed sides of the original inequality are nonnegative, so comparing their squares gives the result. ∎

Geometrically, the straight displacement to the final point is no longer than a route made of two segments. The proof includes the zero cases automatically. For nonzero inputs, equality requires equality in Cauchy–Schwarz and a nonnegative dot product. The vectors must therefore be positive scalar multiples of each other: they point in the same direction. Opposite directions can make the sum shorter, or even zero, despite giving equality in the absolute-value form of Cauchy–Schwarz.

For example, $\\mathbf u=\\langle3,0\\rangle$ and $\\mathbf v=\\langle0,4\\rangle$ have lengths $3$ and $4$, but their sum has length $5$, not $7$. Norms cannot generally be added as though every movement followed the same straight direction. This distinction is exactly what the triangle inequality quantifies.

## Projection onto a chosen direction

**Definition 10.13 (Vector projection).** For a vector $\\mathbf u$ and a nonzero vector $\\mathbf v$, define the projection of $\\mathbf u$ onto the line in direction $\\mathbf v$ by

$$
\\operatorname{proj}_{\\mathbf v}\\mathbf u
=\\frac{\\mathbf u\\cdot\\mathbf v}{\\|\\mathbf v\\|^2}\\mathbf v.
$$

The denominator is positive because the target direction is nonzero. The formula is undefined for $\\mathbf v=\\mathbf0$. The scalar coefficient may be negative: then the projection points opposite to $\\mathbf v$. Its signed scalar component along the unit direction $\\mathbf v/\\|\\mathbf v\\|$ is $(\\mathbf u\\cdot\\mathbf v)/\\|\\mathbf v\\|$. This scalar and the projection vector are related, but are different objects.

**Proposition 10.14 (Perpendicular decomposition and closest point).** Put $\\alpha=(\\mathbf u\\cdot\\mathbf v)/\\|\\mathbf v\\|^2$ and $\\mathbf r=\\mathbf u-\\alpha\\mathbf v$, with $\\mathbf v\\ne\\mathbf0$. Then $\\mathbf r$ is orthogonal to $\\mathbf v$. Moreover, among all vectors $t\\mathbf v$ on that line, $\\alpha\\mathbf v$ uniquely minimises the distance to $\\mathbf u$.

*Proof.* Distributivity gives

$$
\\mathbf r\\cdot\\mathbf v
=\\mathbf u\\cdot\\mathbf v-\\alpha\\|\\mathbf v\\|^2=0.
$$

For any real $t$, write $\\mathbf u-t\\mathbf v=\\mathbf r+(\\alpha-t)\\mathbf v$. Expanding its squared norm, the cross term vanishes because $\\mathbf r\\cdot\\mathbf v=0$. Hence

$$
\\|\\mathbf u-t\\mathbf v\\|^2
=\\|\\mathbf r\\|^2+(\\alpha-t)^2\\|\\mathbf v\\|^2
\\ge\\|\\mathbf r\\|^2.
$$

Since $\\|\\mathbf v\\|^2>0$, equality holds exactly when $t=\\alpha$. Taking square roots proves the distance claim and uniqueness. ∎

**Example 10.15 (Resolving a vector).** Project $\\mathbf u=\\langle4,1\\rangle$ onto $\\mathbf v=\\langle1,2\\rangle$. The dot product is $6$, and $\\|\\mathbf v\\|^2=5$, so the projection is

$$
\\mathbf p=\\frac65\\langle1,2\\rangle=\\left\\langle\\frac65,\\frac{12}5\\right\\rangle.
$$

The perpendicular remainder is $\\mathbf r=\\mathbf u-\\mathbf p=\\langle14/5,-7/5\\rangle$. Its dot product with $\\mathbf v$ is $14/5-14/5=0$, verifying the decomposition. The original squared length is $17$; the two squared component lengths are $36/5$ and $49/5$, which sum to $17$. This is Pythagoras for the two orthogonal pieces, not an assertion that their lengths add.

## A model and its interpretation

**Example 10.16 (Combining velocities).** In an idealised model with east and north as coordinate directions, a boat's velocity relative to water is $\\langle4,0\\rangle$ kilometres per hour, and the water's velocity relative to land is $\\langle0,3\\rangle$ kilometres per hour. Assuming the model adds these velocities, the boat's velocity relative to land is $\\langle4,3\\rangle$ kilometres per hour.

Its speed relative to land is the norm, $5$ kilometres per hour. Over two hours of constant velocities the displacement is $\\langle8,6\\rangle$ kilometres, with length $10$ kilometres. The direction satisfies $\\tan\\theta=3/4$ in the first quadrant. The speed is not $4+3=7$, because the two velocities have different directions. The stated reference frames and units are part of the model; adding a position measured in kilometres to a velocity measured in kilometres per hour would have no such interpretation.

Keep three distinctions in mind. A component may be negative even though a length cannot. Equal norms do not make vectors equal, because direction also matters. Finally, a dot product yields a scalar, while a projection yields a vector. Writing the units and object types beside a calculation often reveals a mistaken operation before any numerical work begins.

## Exercises

### Exercise 10.1
<a id="vectors-plane-ex-1"></a>

Let $P=(-2,3)$, $Q=(4,-1)$ and $R=(1,5)$. Find $\\overrightarrow{PQ}$, $\\overrightarrow{QR}$ and their sum. Check the sum using $\\overrightarrow{PR}$.

<details>
<summary>Hint 1</summary>

For each displacement, subtract the starting coordinates from the ending coordinates.

</details>
<details>
<summary>Hint 2</summary>

Add the two component changes, observing the cancellation of the intermediate point's coordinates.

</details>
<details>
<summary>Solution</summary>

The vectors are $\\overrightarrow{PQ}=\\langle6,-4\\rangle$ and $\\overrightarrow{QR}=\\langle-3,6\\rangle$. Their sum is $\\langle3,2\\rangle$. Directly, $\\overrightarrow{PR}=\\langle1-(-2),5-3\\rangle=\\langle3,2\\rangle$, as required. The vectors record changes; their components do not describe unique starting points. A translated journey with the same two changes has the same combined displacement.

</details>

### Exercise 10.2
<a id="vectors-plane-ex-2"></a>

For $\\mathbf u=\\langle2,-3\\rangle$ and $\\mathbf v=\\langle-1,4\\rangle$, calculate $3\\mathbf u-2\\mathbf v$ and its norm.

<details>
<summary>Hint 1</summary>

Multiply both components of each vector by its scalar before subtracting.

</details>
<details>
<summary>Hint 2</summary>

The norm is the nonnegative square root of the sum of the two resulting squared components.

</details>
<details>
<summary>Solution</summary>

We have $3\\mathbf u=\\langle6,-9\\rangle$ and $2\\mathbf v=\\langle-2,8\\rangle$, giving $3\\mathbf u-2\\mathbf v=\\langle8,-17\\rangle$. Its norm is $\\sqrt{8^2+(-17)^2}=\\sqrt{353}$. The second component remains negative, but the norm is nonnegative. The squared sum is not $(8-17)^2$; the coordinate length formula squares each component separately.

</details>

### Exercise 10.3
<a id="vectors-plane-ex-3"></a>

Find a unit vector in the direction of $\\langle5,12\\rangle$, then a vector of length $6$ in the opposite direction. Explain why the same procedure cannot normalise $\\mathbf0$.

<details>
<summary>Hint 1</summary>

Calculate the norm before dividing the vector by it.

</details>
<details>
<summary>Hint 2</summary>

Multiply a unit vector by a negative scalar to reverse direction while prescribing its new length.

</details>
<details>
<summary>Solution</summary>

The norm is $13$, so the required unit vector is $\\langle5/13,12/13\\rangle$. Multiplying it by $-6$ gives $\\langle-30/13,-72/13\\rangle$, which has length $6$ and the opposite direction. The zero vector has norm zero, so division by its norm would divide by zero. It also has no direction for a unit vector to preserve.

</details>

### Exercise 10.4
<a id="vectors-plane-ex-4"></a>

Find the angle in $[0,\\pi]$ between $\\langle1,0\\rangle$ and $\\langle-1,\\sqrt3\\rangle$. Classify it as acute, right or obtuse.

<details>
<summary>Hint 1</summary>

The angle formula requires a dot product and two norms, all of which can be found exactly here.

</details>
<details>
<summary>Hint 2</summary>

A negative dot product indicates an obtuse angle for nonzero vectors.

</details>
<details>
<summary>Solution</summary>

The dot product is $-1$. The norms are $1$ and $2$, so $\\cos\\theta=-1/2$. The unique angle in $[0,\\pi]$ with that cosine is $2\\pi/3$, or $120$ degrees, which is obtuse. Both vectors are nonzero, so the denominator in the angle formula is valid. Choosing an angle outside the specified interval would describe an oriented turn rather than the angle requested.

</details>

### Exercise 10.5
<a id="vectors-plane-ex-5"></a>

Find every real $t$ for which $\\langle t,2\\rangle$ is orthogonal to $\\langle3,-6\\rangle$. Explain separately why $\\mathbf0$ is orthogonal to the second vector but has no angle with it.

<details>
<summary>Hint 1</summary>

Orthogonality is defined by the equation that the dot product is zero.

</details>
<details>
<summary>Hint 2</summary>

The dot product in the first question is $3t-12$. In the zero-vector question, examine the denominator of the angle formula.

</details>
<details>
<summary>Solution</summary>

We require $3t-12=0$, so $t=4$. The resulting vectors are nonzero and have a right angle. Independently, $\\mathbf0\\cdot\\langle3,-6\\rangle=0$, so the algebraic definition makes them orthogonal. However, the zero vector's norm is zero and its direction is undefined. There is therefore no angle between those two vectors, despite their zero dot product.

</details>

### Exercise 10.6
<a id="vectors-plane-ex-6"></a>

For $\\mathbf u=\\langle2,1\\rangle$ and $\\mathbf v=\\langle-4,-2\\rangle$, check equality in Cauchy–Schwarz. Does equality also hold in the triangle inequality for their sum?

<details>
<summary>Hint 1</summary>

Observe that one vector is a negative scalar multiple of the other.

</details>
<details>
<summary>Hint 2</summary>

Cauchy–Schwarz uses the absolute value of a dot product. The triangle inequality distinguishes matching directions from opposite directions.

</details>
<details>
<summary>Solution</summary>

The norms are $\\sqrt5$ and $2\\sqrt5$, and the dot product is $-10$. Thus $|\\mathbf u\\cdot\\mathbf v|=10=\\|\\mathbf u\\|\\|\\mathbf v\\|$, giving equality in Cauchy–Schwarz. Their sum is $\\langle-2,-1\\rangle$, with norm $\\sqrt5$, whereas the sum of their norms is $3\\sqrt5$. The triangle inequality is strict. Opposite directions produce cancellation, so equality in the first inequality does not imply equality in the second.

</details>

### Exercise 10.7
<a id="vectors-plane-ex-7"></a>

Project $\\mathbf u=\\langle3,4\\rangle$ onto $\\mathbf v=\\langle1,0\\rangle$. Find the perpendicular remainder and verify the squared-length relation.

<details>
<summary>Hint 1</summary>

The target vector is already a unit vector, so its squared norm is one.

</details>
<details>
<summary>Hint 2</summary>

Subtract the projection from $\\mathbf u$. Its dot product with the target should vanish.

</details>
<details>
<summary>Solution</summary>

The dot product is $3$, so the projection is $3\\langle1,0\\rangle=\\langle3,0\\rangle$. The remainder is $\\langle0,4\\rangle$, whose dot product with $\\mathbf v$ is zero. Their squared lengths are $9$ and $16$, summing to $25=\\|\\mathbf u\\|^2$. Thus the original vector is decomposed into orthogonal horizontal and vertical pieces. The lengths themselves are $3$ and $4$ and do not sum to the original length $5$.

</details>

### Exercise 10.8
<a id="vectors-plane-ex-8"></a>

Find the point on the line through the origin in direction $\\langle1,1\\rangle$ that is closest to $P=(4,0)$. Give the minimum distance and justify that it is minimal.

<details>
<summary>Hint 1</summary>

Project the position vector of $P$ onto the nonzero direction vector of the line.

</details>
<details>
<summary>Hint 2</summary>

For a general point $(t,t)$, expand the squared distance to $P$ and complete the square.

</details>
<details>
<summary>Solution</summary>

The projection coefficient is $\\langle4,0\\rangle\\cdot\\langle1,1\\rangle/2=2$, giving point $(2,2)$. Its displacement from $P$ is $\\langle-2,2\\rangle$, so the distance is $\\sqrt8=2\\sqrt2$. For any line point $(t,t)$, the squared distance is $(4-t)^2+t^2=2(t-2)^2+8$. This is at least $8$, with equality only at $t=2$. Hence the displayed point is uniquely closest.

</details>

### Exercise 10.9
<a id="vectors-plane-ex-9"></a>

A model gives two constant velocities $\\langle6,0\\rangle$ and $\\langle0,-8\\rangle$ metres per second whose sum is the total velocity. Find the total speed and the displacement after five seconds. Compare the displacement's length with the sum of the lengths of the two component displacements.

<details>
<summary>Hint 1</summary>

Add vectors first, then take the norm for speed. Multiply velocity by the elapsed time for displacement.

</details>
<details>
<summary>Hint 2</summary>

The two component displacements point in perpendicular directions, so adding their lengths describes a different route.

</details>
<details>
<summary>Solution</summary>

The total velocity is $\\langle6,-8\\rangle$ metres per second, with speed $10$ metres per second. Over five seconds its displacement is $\\langle30,-40\\rangle$ metres, with length $50$ metres. The component displacements have lengths $30$ and $40$ metres, whose sum is $70$ metres. The strict comparison $50<70$ illustrates the triangle inequality. A simultaneous resultant displacement differs from following the component displacements as two successive route segments.

</details>

### Exercise 10.10
<a id="vectors-plane-ex-10"></a>

Let $\\mathbf u$ and $\\mathbf v$ be plane vectors. Prove the reverse triangle inequality $\\bigl|\\|\\mathbf u\\|-\\|\\mathbf v\\|\\bigr|\\le\\|\\mathbf u-\\mathbf v\\|$, including the zero cases.

<details>
<summary>Hint 1</summary>

Apply the triangle inequality to $\\mathbf u=(\\mathbf u-\\mathbf v)+\\mathbf v$.

</details>
<details>
<summary>Hint 2</summary>

Obtain a second inequality by exchanging the two vectors, and use $\\|\\mathbf v-\\mathbf u\\|=\\|\\mathbf u-\\mathbf v\\|$.

</details>
<details>
<summary>Solution</summary>

The first decomposition gives $\\|\\mathbf u\\|\\le\\|\\mathbf u-\\mathbf v\\|+\\|\\mathbf v\\|$, so $\\|\\mathbf u\\|-\\|\\mathbf v\\|\\le\\|\\mathbf u-\\mathbf v\\|$. Exchanging the vectors gives $\\|\\mathbf v\\|-\\|\\mathbf u\\|\\le\\|\\mathbf v-\\mathbf u\\|=\\|\\mathbf u-\\mathbf v\\|$. Both a real difference and its negative are bounded by the same nonnegative number, which is exactly the absolute-value inequality claimed. No division was used, and the triangle inequality covers zero vectors, so all zero cases are included.

</details>

## Summary

A plane vector describes a directed change and can be represented at any starting point. Components support addition and scalar multiplication; the norm measures length. Nonzero vectors can be normalised and have direction angles. The dot product gives a scalar and determines angles only when both vectors are nonzero. Orthogonality includes zero vectors algebraically without assigning them directions.

The two-dimensional identity behind Cauchy–Schwarz proves a bound on dot products, and that bound proves the triangle inequality. Projection onto a nonzero direction splits a vector into parallel and orthogonal parts and identifies the closest point on a line. These tools prepare us for [parametric and polar curves](parametric-polar-curves.md), where coordinates and directions vary with a parameter rather than describing a single fixed displacement.

## Sources

The exposition, coordinate proofs, examples and exercises in this chapter are newly written. A complementary introduction to components, norms, directions and dot products is OpenStax, *Algebra and Trigonometry 2e*, [§10.8, Vectors](https://openstax.org/books/algebra-and-trigonometry-2e/pages/10-8-vectors), consulted 13 November 2026. Its geometric viewpoint is used here with explicit distinctions between points, vectors and scalars and explicit nonzero hypotheses for direction, angle and projection formulas.
`;export{e as default};