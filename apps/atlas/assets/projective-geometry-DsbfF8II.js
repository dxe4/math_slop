var e=`---
parent_id: book-conics-solids-projections
chapter_id: projective-geometry
title: "Projective Geometry"
level: undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Projective Geometry

Euclidean geometry treats parallel lines as a special case: they never meet. Projective geometry removes this exception by adding points at infinity, so every pair of distinct lines intersects exactly once. The resulting framework unifies the treatment of conic sections, explains duality between points and lines, and provides the natural setting for perspective drawing and the classification of non-Euclidean geometries. This L2 chapter builds the real projective plane and proves the incidence, cross-ratio and tangent-duality tools needed to study conics. It assumes elementary vectors, determinants and the preceding conic-matrix chapter. The brief metric overview at the end points to the separate model readings; it does not purport to derive their distance or curvature theorems.

## The projective plane

The real projective plane $\\mathbb{P}^{2}$ can be defined in three equivalent ways:

1. **Lines through the origin in $\\mathbb{R}^{3}$.** A point of $\\mathbb{P}^{2}$ is a line through the origin in $\\mathbb{R}^{3}$. A line of $\\mathbb{P}^{2}$ is a plane through the origin in $\\mathbb{R}^{3}$.

2. **Equivalence classes in $\\mathbb{R}^{3}\\setminus\\{0\\}$.** Two nonzero vectors $(x,y,z)$ and $(x',y',z')$ represent the same projective point if $(x',y',z')=\\lambda(x,y,z)$ for some $\\lambda\\neq 0$. The equivalence class is written $[x:y:z]$.

3. **The Euclidean plane plus a line at infinity.** The points with $z\\neq 0$ correspond to Euclidean points $(x/z,y/z)$. The points with $z=0$ form the line at infinity, one point for each direction in the Euclidean plane.

The third description is most useful for drawing and intuition, but the first two are needed for rigorous computation.

## Homogeneous coordinates

A point in $\\mathbb{P}^{2}$ is represented by homogeneous coordinates $[x:y:z]$, not all zero. Scaling by a nonzero constant gives the same point: $[x:y:z]=[\\lambda x:\\lambda y:\\lambda z]$. The Euclidean point $(X,Y)$ corresponds to $[X:Y:1]$, and the point at infinity in direction $(u,v)$ corresponds to $[u:v:0]$.

A line in $\\mathbb{P}^{2}$ has equation

$$ax+by+cz=0,$$

where $(a,b,c)\\neq(0,0,0)$. The same line is represented by any nonzero scalar multiple of $(a,b,c)$. In Euclidean coordinates ($z=1$), this becomes $aX+bY+c=0$.

## Points at infinity and parallel lines

In the projective plane, two distinct lines always intersect. If their Euclidean slopes are different, they meet at a finite point. If they are parallel in the Euclidean sense, they meet at a point at infinity. For example, the lines $y=mx+b_{1}$ and $y=mx+b_{2}$ have homogeneous equations $mx-y+b_{1}z=0$ and $mx-y+b_{2}z=0$. Subtracting gives $(b_{1}-b_{2})z=0$, so $z=0$ and the intersection is $[1:m:0]$, the point at infinity in direction $(1,m)$.

The set of all points at infinity forms the line at infinity, with equation $z=0$.

### Incidence is ordinary linear algebra

Two distinct projective points have nonproportional representative vectors p and q. Their span is a unique two-dimensional vector plane, giving the unique projective line through them. A coefficient vector for its equation is the cross product $p\\times q$. Rescaling either representative only rescales that cross product, so the line does not depend on the chosen representatives.

Dually, two distinct line coefficient vectors are linearly independent. Their two equations have a one-dimensional common kernel by rank-nullity, giving precisely one projective point. Its representative is the cross product of their coefficient vectors. Parallel affine lines present no exception: their common kernel simply has final coordinate zero. Two coincident lines would instead give a two-dimensional kernel and do not determine a unique intersection. The distinctness hypothesis is indispensable.

A matrix H induces a projective bijection only when it is invertible. It sends a point vector p to Hp and a line coefficient vector l to $H^{-T}l$, since

$$(H^{-T}l)^T(Hp)=l^Tp.$$

This proves preservation of incidence and the line transformation law at once. The inverse transpose on lines differs from the direct action on points. Using the same matrix on both can destroy an otherwise correct drawing's incidence relations. An invertible map has no zero-vector image, whereas a singular matrix can send genuine point representatives to zero and therefore does not define a projective transformation on the entire plane.

### Worked example 1: a vanishing point without infinity arithmetic

The affine lines $x+y=1$ and $x+y=3$ have homogeneous coefficient vectors $(1,1,-1)$ and $(1,1,-3)$. Their cross product is $(-2,2,0)$, so they meet at $[1:-1:0]$. Both lines have direction $(1,-1)$, exactly the direction encoded by this point. The final zero coordinate means that the point is absent from the chart z one, not that its three-vector has an infinite entry.

For comparison, a vertical family $x=c$ has coefficients $(1,0,-c)$. Distinct members meet at $[0:1:0]$. No slope parameter is needed, so vertical lines require no exceptional formula. Switching to another affine chart can make either of these points finite; being “at infinity” is a relation to the chosen chart rather than an intrinsic property of a projective point.

## Projective transformations

A projective transformation (or collineation) of $\\mathbb{P}^{2}$ is induced by an invertible linear transformation of $\\mathbb{R}^{3}$. In homogeneous coordinates, it has the form

$$[x':y':z']=[ax+by+cz:dx+ey+fz:gx+hy+iz],$$

where the $3\\times 3$ matrix is nonsingular. Projective transformations map lines to lines, preserve incidence, and preserve the cross-ratio of four collinear points.

### Cross-ratio

For four distinct collinear points $A,B,C,D$, first choose an affine coordinate in which all four are finite. The cross-ratio is

$$(A,B;C,D)=\\frac{AC}{CB}\\bigg/\\frac{AD}{DB},$$

where directed distances are used. This ratio of directed lengths is independent of a common scale. To include points outside that affine chart, identify their projective line with one-dimensional subspaces of a two-dimensional vector space and choose representative columns a, b, c and d. The same convention is

$$(A,B;C,D)=\\frac{\\det(c,a)\\det(d,b)}{\\det(c,b)\\det(d,a)}.$$

The determinants in the denominator do not vanish because the four points are distinct. Each representative occurs once in numerator and denominator, so all rescalings cancel. Changing the two-vector basis multiplies each determinant by the same nonzero factor, which also cancels. A projective transformation restricted to the line is an invertible linear map between its two-dimensional representative spaces. Its determinant factors cancel in precisely the same way, proving invariance, including cases with a point at infinity. For columns $(t,1)$ the determinant is the directed coordinate difference, recovering the finite formula.

The ordering matters. Exchanging the last two points inverts the ratio; a value computed after reordering is not evidence against invariance. A projective line has no preferred Euclidean ruler, but this four-point quantity does not depend on such a ruler.

## Conics in projective geometry

In homogeneous coordinates, a conic is the set of points $[x:y:z]$ satisfying a homogeneous quadratic equation

$$Ax^{2}+Bxy+Cy^{2}+Dxz+Eyz+Fz^{2}=0.$$

In the Euclidean plane ($z=1$), this reduces to the familiar general conic equation. The projective viewpoint explains why all nonempty nondegenerate real conics are projectively equivalent over $\\mathbb R$: any real ellipse, parabola, or hyperbola can be mapped to any other by a suitable real projective transformation. The distinction between the three types is not intrinsic to the conic but depends on how the line at infinity intersects it:

- Ellipse: the line at infinity meets the conic in no real points;
- Parabola: the line at infinity is tangent to the conic;
- Hyperbola: the line at infinity meets the conic in two real points (the asymptotes' directions).

### Parametrize a conic without losing its infinite point

Consider $YZ=X^2$. The map

$$[s:t]\\longmapsto[st:s^2:t^2]$$

is well-defined: scaling s and t multiplies all three output coordinates by the same square, and they cannot all vanish. Every output satisfies the conic equation. Conversely a conic point with Z nonzero can be written $[u:u^2:1]$, obtained from $[u:1]$. If Z is zero, X must also be zero, leaving the unique point $[0:1:0]$, obtained from $[1:0]$. These descriptions prove surjectivity and uniqueness of the parameter. A polynomial parametrization using only finite u would have omitted one genuine conic point.

A line $aX+bY+cZ=0$ restricts under this parametrization to $bs^2+ast+ct^2=0$. It therefore has at most two intersections counted with algebraic multiplicity, unless all three coefficients vanish, which would not be a line. A double projective root represents tangency. This elementary substitution proves the intersection count for this nonsingular conic; real roots may be absent, while the projective complex count still includes them. For any nonempty nonsingular real conic, the preceding chapter's equivalence transfers the parametrization and intersection statement through an invertible projective map. No assumption that an arbitrary quadratic locus is nonsingular is hidden in this argument.

### Worked example 2: secants approach an actual tangent

Finite points on $YZ=X^2$ are $P(u)=[u:u^2:1]$. For distinct real s and t, their joining line is

$$Y-(s+t)X+stZ=0.$$

Substitution of either point verifies incidence, and distinct points determine a unique line. Substituting a general parameter u leaves $(u-s)(u-t)=0$. Taking equal parameters gives $Y-2tX+t^2Z=0$, whose restriction is $(u-t)^2=0$. It is the tangent at P(t), as also follows from the gradient of $X^2-YZ$. At the omitted parameter $[1:0]$, the point $[0:1:0]$ has tangent Z zero. The tangent at infinity exists as an ordinary projective line even though no finite slope graph represents that contact.

## Duality

In the projective plane, there is a perfect symmetry between points and lines. Every theorem expressed purely in the self-dual projective incidence axioms has a dual theorem obtained by interchanging the words \`\`point'' and \`\`line'' and adjusting the incidence relations. For example:

- Two distinct points determine a unique line. (Dual: two distinct lines determine a unique point.)
- A conic is a locus of points. (Dual: a conic is an envelope of tangent lines.)

This duality is not present in Euclidean geometry because parallel lines do not meet, so the dual of \`\`two lines determine a point'' fails.

### A conic supplies a specific polarity

Abstract interchange of points and lines is not a claim that there is a canonical way to identify a particular point with a particular line. A nonsingular conic matrix M supplies such a correspondence: the polar line of a point vector p has coefficient vector Mp. Since M is invertible, every line has a unique pole represented by $M^{-1}l$. Scaling the point or conic equation does not change the resulting projective line.

Symmetry proves reciprocity: q lies on the polar of p exactly when $p^TMq=0$, which is equivalent to p lying on the polar of q. If p lies on the conic, its polar is its tangent by the derivative calculation in the previous chapter. Conversely the tangent coefficient vectors form the dual conic

$$l^TM^{-1}l=0.$$

Indeed l equal to Mp gives that equality exactly when $p^TMp=0$; invertibility gives the converse by taking $p=M^{-1}l$. Thus the “envelope of tangents” statement has an explicit equation and a bijective explanation. Polarity preserves incidence in the reversed roles, not Euclidean lengths, and depends on which nonsingular conic was selected.

### Worked example 3: the polar of an external circle point

For the unit circle matrix $M=\\operatorname{diag}(1,1,-1)$, the point $P=[a:0:1]$ with $a>1$ has polar $ax-z=0$. In the finite chart this is x equal to one over a. It meets the circle at

$$T_\\pm=\\left(\\frac1a,\\ \\pm\\sqrt{1-\\frac1{a^2}}\\right).$$

The tangent at either contact has equation $T_xx+T_yy=1$ and contains P because $aT_x=1$. Hence the polar is the chord joining the two real tangent contacts. At a equal to one the contacts merge at the circle point and the polar is its tangent. At an interior point such as $[0:0:1]$, the polar is z zero and has no real circle intersections. Every point still has a polar, but not every point has two real tangent contacts. The algebraic correspondence must not be confused with the restricted external-point picture.

## The absolute conic and metric geometries

Projective geometry becomes metric geometry when an absolute conic is specified:

- **Elliptic geometry:** The absolute conic is a nondegenerate imaginary conic (no real points). The real projective plane carries elliptic geometry; it is the antipodal quotient of the sphere and is locally spherical, rather than the sphere itself.
- **Hyperbolic geometry:** The absolute conic is a nondegenerate real conic (a conic in the projective plane with real points). The interior of this conic is the hyperbolic plane, with constant negative curvature.
- **Euclidean geometry:** The degenerate absolute uses the line at infinity together with its two complex circular points. The circular points, not merely a doubled real infinity line, encode Euclidean angle and circle structure.

The projective structures alone do not specify a distance formula or its normalization. The [hyperbolic model chapter](../../geometry-proof-reference/hyperbolic-geometry.md) and [spherical/elliptic chapter](../../geometry-proof-reference/elliptic-geometry.md) develop the relevant metric assumptions and proofs. Here these descriptions serve only as a continuation map. No curvature computation or general classification of metric geometries is inferred from the incidence results above.

## Common errors

- **Treating homogeneous coordinates as ordinary coordinates.** The point $[1:2:3]$ is the same as $[2:4:6]$, but $(1,2,3)\\neq(2,4,6)$ in $\\mathbb{R}^{3}$.
- **Forgetting that $[0:0:0]$ is not a point.** Homogeneous coordinates must have at least one nonzero entry.
- **Applying Euclidean intuition to points at infinity.** A point at infinity is an ordinary projective point; it is not \`\`infinitely far away'' in any metric sense until a metric is imposed.
- **Confusing projective equivalence with affine equivalence.** All nonempty nondegenerate real conics are projectively equivalent over $\\mathbb R$, but ellipses, parabolas, and hyperbolas are not affinely equivalent.

## Practice exercises with solutions

### Exercise 1

<span id="conics-projective-ex-1"></span>
Find the intersection of the lines $2x+3y+z=0$ and $x-y+2z=0$ in $\\mathbb{P}^{2}$.

<details><summary>Hint 1</summary>

Eliminate one coordinate, or take the cross product of the line coefficients.

</details>

<details><summary>Hint 2</summary>

Homogeneous coordinates permit clearing all fractions by one common scale.

</details>

<details><summary>Full solution</summary>

**Solution.** Solve the system:

$$2x+3y+z=0,\\qquad x-y+2z=0.$$

From the second equation, $x=y-2z$. Substituting into the first:

$$2(y-2z)+3y+z=0\\implies 5y-3z=0\\implies y=\\frac{3}{5}z.$$

Then $x=\\frac{3}{5}z-2z=-\\frac{7}{5}z$. Taking $z=5$ gives $[-7:3:5]$. The intersection point is $[-7:3:5]$.

</details>

### Exercise 2

<span id="conics-projective-ex-2"></span>
Show that the points $[1:0:0]$, $[0:1:0]$, $[0:0:1]$, and $[1:1:1]$ are in general position (no three collinear) in $\\mathbb{P}^{2}$.

<details><summary>Hint 1</summary>

Three representative columns are collinear precisely when their determinant vanishes.

</details>

<details><summary>Hint 2</summary>

The fourth vector has a nonzero component along each of the first three basis directions.

</details>

<details><summary>Full solution</summary>

**Solution.** Three points are collinear if they satisfy a common linear equation. The line through $[1:0:0]$ and $[0:1:0]$ is $z=0$, which does not contain $[0:0:1]$ or $[1:1:1]$. The line through $[1:0:0]$ and $[0:0:1]$ is $y=0$, which does not contain $[0:1:0]$ or $[1:1:1]$. The line through $[0:1:0]$ and $[0:0:1]$ is $x=0$, which does not contain $[1:0:0]$ or $[1:1:1]$. The line through $[1:0:0]$ and $[1:1:1]$ is $y-z=0$, which does not contain $[0:1:0]$ or $[0:0:1]$. Thus no three are collinear.

</details>

### Exercise 3

<span id="conics-projective-ex-3"></span>
Compute the cross-ratio $(A,B;C,D)$ where $A=[1:0]$, $B=[0:1]$, $C=[1:1]$, $D=[2:1]$ on the projective line $\\mathbb{P}^{1}$.

<details><summary>Hint 1</summary>

Use the determinant definition to avoid assigning a finite value to infinity.

</details>

<details><summary>Hint 2</summary>

Equivalently take the finite-coordinate limit with A tending to infinity.

</details>

<details><summary>Full solution</summary>

**Solution.** Use affine parameter $t$ with $A$ at infinity, $B=0$, $C=1$, and $D=2$. With the chapter's convention,
$$(A,B;C,D)=\\frac{(t_C-t_A)(t_D-t_B)}{(t_C-t_B)(t_D-t_A)}.$$
Letting $t_A\\to\\infty$, the first and last factors have ratio tending to $1$, so
$$(A,B;C,D)=\\frac{t_D-t_B}{t_C-t_B}=\\frac{2}{1}=2.$$

</details>

### Exercise 4

<span id="conics-projective-ex-4"></span>
Find the projective transformation that sends $[1:0:0]\\mapsto[0:1:0]$, $[0:1:0]\\mapsto[0:0:1]$, $[0:0:1]\\mapsto[1:0:0]$, and $[1:1:1]\\mapsto[1:1:1]$.

<details><summary>Hint 1</summary>

The images of the coordinate points determine the columns up to individual scales.

</details>

<details><summary>Hint 2</summary>

The sum point forces those three scales equal, as in the preceding frame proof.

</details>

<details><summary>Full solution</summary>

**Solution.** A projective transformation is determined by its action on four points in general position. We seek a matrix $M$ such that $M[1:0:0]=[0:1:0]$, etc. The first three conditions say the columns of $M$ are scalar multiples of $[0:1:0]$, $[0:0:1]$, $[1:0:0]$. So $M=\\begin{pmatrix}0&0&\\lambda\\\\\\mu&0&0\\\\0&\\nu&0\\end{pmatrix}$. Applying to $[1:1:1]$ gives $[\\lambda:\\mu:\\nu]$, which must equal $[1:1:1]$. So $\\lambda=\\mu=\\nu$, and we can take $\\lambda=\\mu=\\nu=1$. The transformation is $[x:y:z]\\mapsto[z:x:y]$.

</details>

### Exercise 5

<span id="conics-projective-ex-5"></span>
Show that the conic $x^{2}+y^{2}-z^{2}=0$ is projectively equivalent to $XY-Z^{2}=0$ by giving an explicit invertible linear change of homogeneous coordinates.

<details><summary>Hint 1</summary>

Compare the product of the proposed X and Y coordinates with the square of Z.

</details>

<details><summary>Hint 2</summary>

An invertible three-by-three matrix is required, not merely a formal substitution.

</details>

<details><summary>Full solution</summary>

**Solution.** Define
$$[X:Y:Z]=[z+x:z-x:y].$$
The matrix $\\begin{pmatrix}1&0&1\\\\-1&0&1\\\\0&1&0\\end{pmatrix}$ has nonzero determinant, so this is a projective transformation. Moreover,
$$XY-Z^2=(z+x)(z-x)-y^2=z^2-x^2-y^2.$$
Therefore $x^2+y^2-z^2=0$ exactly when $XY-Z^2=0$, as required.

</details>

### Exercise 6

<span id="conics-projective-ex-6"></span>
Explain why the distinction between ellipse, parabola, and hyperbola is not projectively invariant.

<details><summary>Hint 1</summary>

The affine type is determined relative to a chosen infinity line.

</details>

<details><summary>Hint 2</summary>

Move a secant, tangent or disjoint real line onto that infinity line.

</details>

<details><summary>Full solution</summary>

**Solution.** In projective geometry, the line at infinity is not distinguished from other lines. An ellipse is a conic that does not meet the line at infinity; a parabola is tangent to it; a hyperbola meets it in two points. Under a general projective transformation, the line at infinity maps to some other line, and the intersection pattern changes accordingly. For example, choose a secant line meeting an ellipse in two real points and map that line to the line at infinity. The image conic then meets the new line at infinity in two points and is hyperbola-like in that affine chart. Thus the affine classification depends on the choice of line at infinity, which is not projectively invariant.

</details>


### Exercise 7

<span id="conics-projective-ex-7"></span>

Find the intersections of $YZ=X^2$ with Y equal to Z, and with Y zero. Include projective points and distinguish a secant from a tangent.

<details><summary>Hint 1</summary>

Use $[X:Y:Z]=[st:s^2:t^2]$ before dividing by any coordinate.

</details>

<details><summary>Hint 2</summary>

The two line restrictions become $s^2=t^2$ and $s^2=0$.

</details>

<details><summary>Full solution</summary>

For Y equal to Z the parameter equation factors as $(s-t)(s+t)=0$. The two points are $[1:1:1]$ and $[-1:1:1]$, so this is a secant. For Y zero the only projective parameter is $[0:1]$, giving $[0:0:1]$. Its root is double, and the tangent formula at finite parameter zero is exactly Y zero. Neither computation silently discards t zero: that parameter gives the infinite conic point $[0:1:0]$, which belongs to neither line. Counting multiplicity distinguishes one tangent contact from an accidental omission of a second root.

</details>

### Exercise 8

<span id="conics-projective-ex-8"></span>

For the unit circle, find the polar of the point $(2,1)$ and its two real tangent contacts. Verify both tangent incidences directly.

<details><summary>Hint 1</summary>

Multiply $[2:1:1]$ by the diagonal matrix with entries one, one and minus one.

</details>

<details><summary>Hint 2</summary>

Solve $2x+y=1$ together with $x^2+y^2=1$.

</details>

<details><summary>Full solution</summary>

The polar is $2x+y=1$. Substitute $y=1-2x$ into the circle equation to get $5x^2-4x=0$. Thus the contacts are $(0,1)$ and $(4/5,-3/5)$. The first tangent is y one and contains $(2,1)$. The second tangent is $4x-3y=5$, also containing that point since eight minus three is five. Each tangent arises from its circle contact by the same polar formula, so the computation verifies the reciprocal incidence rather than assuming the external-point diagram is accurate. The polar line itself need not pass through the original point: at $(2,1)$ its left side is five, not one.

</details>

### Exercise 9

<span id="conics-projective-ex-9"></span>

Let H send $[x:y:z]$ to $[x:y:x+z]$. Transform the point $[1:0:1]$ and its incident line x minus z zero. Explain why multiplying the line coefficients by H would give a wrong answer.

<details><summary>Hint 1</summary>

Points use H; line coefficients use its inverse transpose.

</details>

<details><summary>Hint 2</summary>

Solve x equal to X and z equal to Z minus X in the old line equation.

</details>

<details><summary>Full solution</summary>

The point maps to $[1:0:2]$. The old line equation becomes $X-(Z-X)=0$, so the image line has coefficients $(2,0,-1)$. It contains the image point because two minus two is zero. Directly multiplying the old coefficient vector $(1,0,-1)$ by H gives $(1,0,0)$, the line X zero, which fails that incidence. This single example exposes the error without relying on a picture. The inverse-transpose rule expresses the distinction between a vector representing a point and a linear functional whose kernel represents a line.

</details>

### Exercise 10

<span id="conics-projective-ex-10"></span>

On a projective line take $A=[1:0]$, $B=[0:1]$, $C=[1:1]$ and $D=[u:1]$, with u neither zero nor one. Compute their cross-ratio and determine D uniquely from that value. What do the excluded values mean?

<details><summary>Hint 1</summary>

Use the determinant formula with exactly this order of representatives.

</details>

<details><summary>Hint 2</summary>

Here A is the infinite point, B has coordinate zero and C has coordinate one.

</details>

<details><summary>Full solution</summary>

The four determinants in the formula are minus one, u, one and minus one, respectively, giving cross-ratio u. Thus the value determines D as $[u:1]$ once the ordered triple A, B, C is fixed. At u zero, D equals B; at u one, D equals C. If D were A, its final coordinate would be zero and the denominator determinant involving D and A would vanish. These are precisely the collisions excluded by four distinct points. This computation explains how cross-ratio acts as a projective coordinate relative to an ordered triple, while ordinary affine coordinates depend on a separately chosen infinity point.

</details>

## Looking backward and forward

This chapter constructed the projective plane, established homogeneous coordinates and cross-ratio as fundamental tools, and developed conic parametrization, tangency and polarity. Metric continuations require additional distance and regularity arguments, linked separately above.

The next chapter, **Stereographic Projection**, compares a concrete sphere-to-plane map with these projective tools. Descriptive and axonometric projection follow later, distinguishing perspective incidence from the measurements recoverable in a particular spatial drawing.

## Source and scope

The earlier Atlas projective chapter and all six original exercise statements/solutions are preserved in this revision. New proofs develop real homogeneous incidence, determinant cross-ratio, rational conic parametrization and nonsingular conic polarity, followed by four additional supported questions. The preceding chapter supplies the frame and real-conic equivalence proofs. The short absolute-conic overview is retained as a pointer to the actual model chapters; it is not counted as an independent metric construction or a proof of surface classification.
`;export{e as default};