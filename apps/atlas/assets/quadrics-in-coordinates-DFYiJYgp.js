var e=`---
parent_id: book-conics-solids-projections
chapter_id: quadrics-in-coordinates
title: "Quadrics in Coordinates"
level: undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Quadrics in Coordinates

This L2 chapter extends the matrix methods of Conics in Coordinates to three dimensions, classifying quadric surfaces by the eigenvalues of their associated symmetric matrices. We derive standard forms, identify cross-sections, and connect the algebraic classification to the geometric surfaces introduced earlier in the book.

## The general quadric equation

The general second-degree equation in three variables is

$$Ax^{2}+By^{2}+Cz^{2}+Dxy+Exz+Fyz+Gx+Hy+Iz+J=0.$$

The quadratic part defines a symmetric $3\\times 3$ matrix

$$Q=\\begin{pmatrix}A&D/2&E/2\\\\D/2&B&F/2\\\\E/2&F/2&C\\end{pmatrix}.$$

Since $Q$ is symmetric, it has real eigenvalues $\\lambda_{1},\\lambda_{2},\\lambda_{3}$ and an orthonormal basis of eigenvectors. After translation and rotation, the equation reduces to one of the standard forms.

## Why orthogonal reduction works

Write the equation as $f(X)=X^TQX+2b^TX+c=0$. Thus b is half the vector of coefficients of the linear terms, not that whole vector. Coordinates change by $X=RY+a$, where R is orthogonal. The transformed quadratic matrix is $R^TQR$, the linear coefficient vector is $R^T(Qa+b)$, and the new constant is $f(a)$. A translation can therefore remove all linear terms exactly when $Qa=-b$ has a solution.

For completeness, the spectral theorem needed here has a short finite-dimensional proof. The continuous function $v\\mapsto v^TQv$ attains its maximum on the unit sphere. At a maximizing unit vector u, vary toward any perpendicular vector w using $(u+tw)/|u+tw|$. The derivative at zero is $2w^TQu$, so it vanishes for every such w. Consequently Qu is parallel to u, giving a real eigenvector and eigenvalue. Its perpendicular complement is Q-invariant because $u^TQw=(Qu)^Tw=0$. Repeating in that complement, then in its one-dimensional complement, produces an orthonormal eigenbasis. This proof uses compactness of the unit sphere and elementary differentiation; it does not assume that a general nonsymmetric matrix has real eigenvalues.

Orthogonal diagonalization preserves Euclidean lengths and angles. Rescaling principal coordinates subsequently changes semiaxis lengths and is generally not an isometry. The signs of nonzero eigenvalues nevertheless survive any invertible linear coordinate change. To see why, for a diagonal form with p positive, q negative and remaining zero squares, the largest dimension of a subspace on which the form is positive definite is p. The positive coordinate subspace realizes p. Any larger subspace intersects the subspace of nonpositive coordinates nontrivially by the dimension formula, and so cannot be positive definite. The same argument determines q by negative-definite subspaces. An invertible map preserves these maximal dimensions. This proves the inertia statement required for affine classification, rather than confusing invariant signs with invariant eigenvalue magnitudes.

## Classification by eigenvalues

The signs of the eigenvalues determine the type of quadric surface. Let $p$ be the number of positive eigenvalues and $q$ the number of negative eigenvalues (Sylvester's law of inertia).

### Central quadrics with invertible quadratic part ($\\det Q\\neq 0$)

After translation to the center and rotation to principal axes:

$$\\lambda_{1}x^{2}+\\lambda_{2}y^{2}+\\lambda_{3}z^{2}=K.$$

- $(+,+,+)$, $K>0$: ellipsoid.
- $(+,+,+)$, $K=0$: a single point at the center.
- $(+,+,+)$, $K<0$: empty.
- $(+,+,-)$, $K\\neq 0$: hyperboloid of one sheet ($K>0$) or two sheets ($K<0$).
- $(+,+,-)$, $K=0$: elliptic cone, which has a singular vertex and is degenerate as an affine quadric despite $Q$ being invertible.

### Singular quadratic part ($\\det Q=0$)

A singular $Q$ does not by itself mean that the locus has no center: cylinders can have a line of centers. Rank, linear terms in the null directions, and the constant term must all be checked. Representative singular cases include:

- $(+,+,0)$: elliptic paraboloid or elliptic cylinder.
- $(+,-,0)$: hyperbolic paraboloid or hyperbolic cylinder.
- $(+,0,0)$: parabolic cylinder, pairs of planes, or other rank-one degeneracies.

Rank-zero equations are linear, constant, empty, or all space. The distinction between a paraboloid and a cylinder depends on whether a nonzero linear term remains in a null direction; a cylinder has no such dependence.

## Completing the classification, including null directions

Choose principal coordinates and separate the nonzero-eigenvalue coordinates u from the null coordinates v. Completing squares in u removes their linear terms and gives

$$\\sum_{i=1}^{r}\\lambda_i u_i^2+2\\beta\\cdot v=K,$$

where r is the rank and beta is the projection of the original linear coefficient onto the kernel, expressed in the new basis. The alternatives beta zero and beta nonzero are invariant under choices within that kernel. They decide whether a center exists: the equation $Qa=-b$ is solvable exactly when b is perpendicular to the kernel. When solvable, all its solutions differ by kernel vectors. This explains a cylinder's line of centers without calling it a paraboloid merely because its quadratic matrix is singular.

If beta is nonzero, rotate within the kernel so its only surviving component is along one coordinate w. Solving for w makes the surface a graph of the remaining squares. At rank two, equal signs give an elliptic paraboloid and opposite signs a hyperbolic paraboloid. At rank one, the unused null coordinate is free and the result is a parabolic cylinder. At rank zero, the original equation is a nonconstant affine equation, hence a plane. None of these conclusions follows from eigenvalues alone: the null-direction linear coefficient does essential work.

If beta is zero, all null coordinates are free. At rank two with equal signs, compare K with that common sign. A matching nonzero K gives an elliptic cylinder; zero gives a line; the opposite sign gives the empty set. At rank two with opposite signs, a nonzero K gives a hyperbolic cylinder, while zero factors into two intersecting planes. At rank one, a matching nonzero K gives two parallel planes, zero gives one repeated plane, and opposite sign gives the empty set. At rank zero, a nonzero constant gives the empty set and zero gives all space. Thus rank and inertia organize the reduction, but the constant and null-linear terms complete it.

For invertible Q the earlier central table is exhaustive after multiplying the whole equation by minus one if necessary. A negative-definite form is thereby reduced to the positive-definite case. An indefinite form can be arranged to have two positive squares and one negative square. For positive K, a horizontal slice exists at every height and forms an ellipse, giving one sheet; for negative K, heights between the two vertices are absent and the two signs of the axial coordinate give disconnected sheets. At zero the equation is a cone. These are statements about the real zero set, not merely a list of formal signatures.

### Two meanings of degeneracy

The homogeneous matrix of the polynomial is

$$M=\\begin{pmatrix}Q&b\\\\b^T&c\\end{pmatrix},\\qquad
f(X)=(X,1)^TM(X,1).$$

An invertible affine change acts on M by congruence with an invertible four-by-four matrix, so its rank and whether its determinant vanishes are invariant. If Q is invertible, translation to the center changes M to the block matrix with blocks Q and minus K. Thus a central cone has singular M even though Q is invertible. Conversely an elliptic paraboloid has singular Q but nonsingular M. Calling Q singular is not a reliable definition of projective quadric degeneracy.

For an affine level set, the gradient is $2(QX+b)$. The implicit-function criterion guarantees a smooth surface wherever this gradient is nonzero. A homogeneous degeneracy and failure of smoothness at a real affine point are different questions: a circular cylinder is smooth everywhere despite its singular M. A repeated-plane equation has zero gradient along its zero set even though the underlying plane is itself a smooth set; the chosen defining polynomial fails the regular-level criterion. A cone genuinely has a nonsmooth vertex. Keeping matrix rank, polynomial regularity and set geometry separate prevents misleading conclusions from the word “degenerate.”

### Worked example 1: translate before reading semiaxes

Consider $2x^2+2y^2+2xy+z^2-6x-6y+2=0$. The center equations give $x=y=1$, $z=0$. In coordinates

$$u=\\frac{x+y-2}{\\sqrt2},\\qquad v=\\frac{x-y}{\\sqrt2},\\qquad w=z,$$

the equation becomes $3u^2+v^2+w^2=4$. The semiaxes are $2/\\sqrt3$, two and two, along the corresponding orthonormal directions. The positive eigenvalues alone identify an ellipsoidal quadratic part; evaluating the translated constant establishes that a real ellipsoid actually exists. Replacing the original constant two by six changes the right side to zero, giving a point; increasing it beyond six gives the empty set, with exactly the same quadratic matrix.

### Worked example 2: a null-linear term changes the type

The polynomial $(x+y)^2-2z$ has quadratic rank one. Set $u=(x+y)/\\sqrt2$ and $v=(x-y)/\\sqrt2$. Its equation is $z=u^2$, with v free: a parabolic cylinder. Remove the linear z term and subtract two instead. The equation becomes $u^2=1$, a pair of parallel planes. Remove that constant as well, and the locus is the single plane u zero, described with multiplicity two. All three have the same quadratic matrix and eigenvalues. A classification that stops after diagonalizing would give the same answer for three different geometries.

### Worked example 3: a tangent plane can give two lines

On $x^2+y^2-z^2=1$, the point $(1,0,0)$ has normal vector $(2,0,0)$, so its tangent plane is x equal to one. Substitution gives $y^2-z^2=0$, namely the distinct lines $y=z$ and $y=-z$. A tangent-plane section of an ellipsoid instead consists of one point: after scaling its defining positive quadratic form, Cauchy–Schwarz makes equality occur only at the tangency point. Tangency therefore does not prescribe a universal degenerate conic type. The signature of the restricted form still matters.

## Standard forms and cross-sections

### Ellipsoid

$$\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}+\\frac{z^{2}}{c^{2}}=1.$$

Nonempty non-tangent cross-sections by planes parallel to coordinate planes are ellipses (circles in the equal-axis cases); farther planes give the empty set and tangent planes give a point. The volume is $V=4\\pi abc/3$. Indeed, the diagonal map from the unit ball multiplies volume by its positive determinant $abc$, and the previous chapter derived the unit-ball volume by slicing.

### Hyperboloid of one sheet

$$\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}-\\frac{z^{2}}{c^{2}}=1.$$

Cross-sections $z=k$ are ellipses. Cross-sections $x=0$ or $y=0$ are hyperbolas. The surface is ruled: it contains two families of straight lines.

### Hyperboloid of two sheets

$$\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}-\\frac{z^{2}}{c^{2}}=-1.$$

Cross-sections $\\lvert z\\rvert>c$ are ellipses. The surface has two disconnected components.

### Elliptic paraboloid

$$\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}=\\frac{z}{c}.$$

Cross-sections $z=k>0$ are ellipses. Cross-sections $x=0$ or $y=0$ are parabolas.

### Hyperbolic paraboloid

$$\\frac{x^{2}}{a^{2}}-\\frac{y^{2}}{b^{2}}=\\frac{z}{c}.$$

For $k\\ne0$, cross-sections $z=k$ are hyperbolas; at $z=0$ the section is the pair of lines $x/a=\\pm y/b$. Cross-sections $x=0$ or $y=0$ are parabolas. The surface is a saddle and is doubly ruled.

## Ruled surfaces

A ruled surface is one that can be generated by moving a straight line. The hyperboloid of one sheet and the hyperbolic paraboloid are both doubly ruled: through every point on the surface pass two distinct straight lines lying entirely on the surface.

For the hyperboloid $\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}-\\frac{z^{2}}{c^{2}}=1$, factor the equation as
$$\\left(\\frac{x}{a}+\\frac{z}{c}\\right)\\left(\\frac{x}{a}-\\frac{z}{c}\\right)=\\left(1+\\frac{y}{b}\\right)\\left(1-\\frac{y}{b}\\right).$$
Using a homogeneous parameter $[s:t]\\in\\mathbb P^1$, one ruling is
$$t\\left(\\frac{x}{a}+\\frac{z}{c}\\right)=s\\left(1+\\frac{y}{b}\\right),\\qquad s\\left(\\frac{x}{a}-\\frac{z}{c}\\right)=t\\left(1-\\frac{y}{b}\\right).$$
The other interchanges $1+y/b$ and $1-y/b$. Homogeneous parameters include the generators corresponding to zero and infinite affine parameter, which formulas with $1/\\lambda$ omit.

The ruling claim can also be justified without losing exceptional lines. In normalized coordinates write the equation as the determinant-zero condition for

$$\\begin{pmatrix}X+Z&1+Y\\\\1-Y&X-Z\\end{pmatrix}.$$

This matrix is never zero because its off-diagonal entries sum to two. Every point therefore gives a rank-one matrix, expressible as a nonzero column times a nonzero row. Fixing the column direction and varying the row subject to the off-diagonal-sum condition gives an affine straight line; fixing the row direction gives the other line. Through each point the two choices are distinct. Their homogeneous parameters are precisely why the formulas above include apparent infinite-parameter cases. For the hyperbolic paraboloid the coordinates $U=X+Y$, $V=X-Y$ instead give $Z=UV$. Holding U fixed or V fixed gives its two ruling lines through each point. In contrast, the positive-definite ellipsoid cannot contain any full line, since substitution along a nonzero line direction has a strictly positive quadratic coefficient.

## Common errors

- **Confusing one sheet with two sheets.** The sign of the right-hand side determines whether the surface is connected.
- **Assuming every section is a regular conic.** Restriction gives a polynomial of degree at most two; the locus can also be empty, a point, lines, or the whole cutting plane.
- **Equating a singular quadratic part with a singular real surface.** An elliptic cylinder has one zero eigenvalue but is smooth; a paraboloid can have a nonsingular homogeneous matrix despite its singular quadratic part.
- **Misidentifying ruled surfaces.** Only the hyperboloid of one sheet and the hyperbolic paraboloid are doubly ruled among nondegenerate quadrics.

## Practice exercises with solutions

### Exercise 1

<span id="conics-quadrics-ex-1"></span>
Classify the quadric $x^{2}+2y^{2}+3z^{2}+2xy+2xz+2yz=4$.

<details><summary>Hint 1</summary>

Identify the symmetric quadratic matrix, taking half the mixed coefficients.

</details>

<details><summary>Hint 2</summary>

Complete a sum of squares to establish definiteness exactly.

</details>

<details><summary>Full solution</summary>

**Solution.** The matrix is $Q=\\begin{pmatrix}1&1&1\\\\1&2&1\\\\1&1&3\\end{pmatrix}$. Its eigenvalues are approximately $0.3249$, $1.4608$, and $4.2143$ (all positive). An exact sign justification avoids depending on the decimal approximations: its quadratic form is $(x+y+z)^2+y^2+2z^2$, strictly positive for every nonzero vector. The positive level four is therefore an ellipsoid.

</details>

### Exercise 2

<span id="conics-quadrics-ex-2"></span>
Find the cross-sections of $x^{2}-y^{2}+z^{2}=1$ by the planes $x=0$, $y=0$, and $z=0$.

<details><summary>Hint 1</summary>

Set the stated coordinate to zero before interpreting the equation.

</details>

<details><summary>Hint 2</summary>

The negative square determines the axial direction.

</details>

<details><summary>Full solution</summary>

**Solution.** $x=0$: $z^{2}-y^{2}=1$, a hyperbola. $y=0$: $x^{2}+z^{2}=1$, a circle. $z=0$: $x^{2}-y^{2}=1$, a hyperbola. This is a hyperboloid of one sheet.

</details>

### Exercise 3

<span id="conics-quadrics-ex-3"></span>
Show that the hyperbolic paraboloid $z=x^{2}-y^{2}$ contains the line $x=y$, $z=0$.

<details><summary>Hint 1</summary>

Parametrize the proposed line by one real parameter.

</details>

<details><summary>Hint 2</summary>

Substitute the parametrization into the surface equation for every parameter.

</details>

<details><summary>Full solution</summary>

**Solution.** If $x=y$, then $z=x^{2}-x^{2}=0$. So every point $(t,t,0)$ lies on the surface. This is one line from one ruling family.

</details>

### Exercise 4

<span id="conics-quadrics-ex-4"></span>
Find the volume of the ellipsoid $\\frac{x^{2}}{4}+\\frac{y^{2}}{9}+\\frac{z^{2}}{16}=1$.

<details><summary>Hint 1</summary>

Read each semiaxis from a squared denominator.

</details>

<details><summary>Hint 2</summary>

A linear image of the unit ball scales volume by the product of its three axis scales.

</details>

<details><summary>Full solution</summary>

**Solution.** $a=2$, $b=3$, $c=4$. The volume is $V=4\\pi abc/3=4\\pi\\cdot 24/3=32\\pi$.

</details>

### Exercise 5

<span id="conics-quadrics-ex-5"></span>
A quadric has matrix $Q=\\operatorname{diag}(1,-1,0)$ and linear terms $G=(0,0,1)$. Identify the surface.

<details><summary>Hint 1</summary>

The linear coefficient lies in the null direction of Q.

</details>

<details><summary>Hint 2</summary>

Solve for z and compare the two remaining square signs.

</details>

<details><summary>Full solution</summary>

**Solution.** The equation is $x^{2}-y^{2}+z=0$, or $z=y^{2}-x^{2}$. This is a hyperbolic paraboloid.

</details>

### Exercise 6

<span id="conics-quadrics-ex-6"></span>
Show that a nonempty regular central quadric invariant under every rotation about every axis through its center is a sphere.

<details><summary>Hint 1</summary>

Use the rotation orbit of one nonzero point on the level.

</details>

<details><summary>Hint 2</summary>

Every point of that sphere has the same quadratic value; compare eigenvector directions.

</details>

<details><summary>Full solution</summary>

**Solution.** Translate the center to the origin, so the equation is $X^TQX=K$. Choose a point on the nonempty regular level. Its radius is positive, since a central zero level contains the origin where the gradient vanishes. Rotating that point fills its sphere, so $u^TQu=K/r^2$ for every unit vector $u$. Evaluating on an orthonormal eigenbasis forces all eigenvalues equal; equivalently $R^TQR=Q$ for all rotations. Thus $Q=\\lambda I$. Regularity and nonemptiness exclude $\\lambda=0$, $K=0$, and opposite-sign empty levels. Hence $\\lVert X\\rVert^2=K/\\lambda$ with $K/\\lambda>0$, a sphere. The hypotheses exclude the empty set and singleton, which would otherwise have excessive symmetry.

</details>


### Exercise 7

<span id="conics-quadrics-ex-7"></span>

Classify the four real loci $x^2+y^2=1$, $x^2+y^2=0$, $x^2+y^2=-1$, and $x^2+y^2=2z$. Explain why the quadratic rank alone cannot distinguish them.

<details><summary>Hint 1</summary>

All four quadratic matrices are the same diagonal matrix with entries one, one and zero.

</details>

<details><summary>Hint 2</summary>

Check the remaining constant or the linear coefficient in the null z direction.

</details>

<details><summary>Full solution</summary>

The first locus is a circular cylinder with z free. The second forces x and y both zero, leaving the entire z-axis. The third is empty since a sum of real squares cannot be negative. The fourth is an elliptic paraboloid opening in the positive z direction. Its nonzero null-direction linear coefficient prevents a center, whereas the first three have such a center equation. The rank is two in all four cases, and the positive inertia is also identical. The constant and null-linear terms complete the classification. In particular the line in the second case is a real locus of smaller dimension, not a regular two-dimensional surface.

</details>

### Exercise 8

<span id="conics-quadrics-ex-8"></span>

Find all centers of $(x-1)^2+4(y+2)^2=9$, and show that $(x-1)^2+4(y+2)^2=z$ has no center.

<details><summary>Hint 1</summary>

The center equation is $Qa=-b$ after writing linear terms as twice b.

</details>

<details><summary>Hint 2</summary>

A translation cannot remove a nonzero linear term in a coordinate absent from the quadratic part.

</details>

<details><summary>Full solution</summary>

For the cylinder, the center equation gives $a_x=1$, $a_y=-2$, and no condition on $a_z$. Every point on the line $(1,-2,t)$ is a center: reflection in that point preserves the equation because the first two shifted coordinates change sign and z is unrestricted. For the second equation, the z component of Q times any vector is zero but the required z component of minus b is one half. The center equation is therefore inconsistent. Geometrically reflection in a hypothetical center would turn an upward-opening paraboloid into a downward-opening set, so it could not preserve the locus. The algebraic null-direction obstruction makes that intuition exact.

</details>

### Exercise 9

<span id="conics-quadrics-ex-9"></span>

For $x^2+y^2-z=0$, show that Q is singular while its homogeneous matrix M is invertible. Compare this with $x^2+y^2-z^2=0$.

<details><summary>Hint 1</summary>

For the paraboloid, the z and homogeneous coordinates form a two-by-two block with off-diagonal entries minus one half.

</details>

<details><summary>Hint 2</summary>

For the cone, the final row and column of M vanish, despite Q having no zero eigenvalue.

</details>

<details><summary>Full solution</summary>

The paraboloid has $Q=\\operatorname{diag}(1,1,0)$ and $b=(0,0,-1/2)$. Its homogeneous matrix splits into two identity directions and the block

$$\\begin{pmatrix}0&-1/2\\\\-1/2&0\\end{pmatrix},$$

whose determinant is minus one quarter. Thus M is invertible. The cone instead has invertible $Q=\\operatorname{diag}(1,1,-1)$ but b and c both zero, so M has a zero homogeneous row and column and rank three. Its origin is genuinely singular because the gradient vanishes and its vertex has the cone geometry. These examples disprove both implications that might be inferred by confusing singularity of Q with singularity of M. The two matrices encode different classification questions.

</details>

### Exercise 10

<span id="conics-quadrics-ex-10"></span>

Let a, b and c be positive. Find the full tangent-plane intersection of $x^2/a^2+y^2/b^2-z^2/c^2=1$ at $(a,0,0)$. Identify its two ruling lines, including their directions.

<details><summary>Hint 1</summary>

Compute the gradient at the point before writing the tangent plane.

</details>

<details><summary>Hint 2</summary>

In the plane x equal to a the remaining equation is a difference of squares.

</details>

<details><summary>Full solution</summary>

The gradient at the point is $(2/a,0,0)$, so the tangent plane is x equal to a. Its intersection equation is $y^2/b^2-z^2/c^2=0$, factoring into the two alternatives $y/b=z/c$ and $y/b=-z/c$. The complete lines are therefore $(a,bt,ct)$ and $(a,bt,-ct)$ for real t, with directions $(0,b,c)$ and $(0,b,-c)$. Positivity of the semiaxes makes these directions nonproportional. Both lines pass through the tangency point, and substituting their parametrizations proves that every one of their points lies on the surface. This is a degenerate plane conic on a regular quadric; no singularity of the ambient surface follows from the crossing in that particular plane section.

</details>

## Looking backward and forward

This chapter classified quadric surfaces using eigenvalue methods and identified their cross-sections and ruled structures. The matrix approach unifies the treatment and extends naturally to higher dimensions.

The next chapter, **Transformation Geometry**, studies the groups of transformations that preserve geometric structures: Euclidean isometries, similarities, affine transformations, and projective collineations. These transformations provide the language for understanding when two geometric figures are \`\`the same.''

## Source and scope

This chapter preserves and expands the earlier coordinate-quadric source, including its six exercise identities and mathematical answers. The spectral and inertia proofs, exhaustive null-direction analysis and further exercises are newly written for the L2 commission. Compactness and elementary differentiation support the spectral proof; the implicit-function criterion and volume change of variables are named analytic inputs. The classification concerns real affine loci, with projective degeneracy used only in the explicitly defined homogeneous-matrix sense.
`;export{e as default};