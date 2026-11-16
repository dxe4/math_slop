var e=`---
parent_id: book-geometry-proof-reference
chapter_id: isometries-and-plane-transformation-groups
title: "Isometries, Similarities, Affine and Projective Transformations"
level: undergraduate
license: CC BY-SA 4.0
---

# Isometries, Similarities, Affine and Projective Transformations

A transformation theorem must specify what is preserved. Distance preservation is stronger than angle preservation, and affine collinearity is different from projective collinearity. This chapter gives a structural account of plane transformation groups and proves the frame-matching and real-coordinate classification results used in later geometry. Inversion joins the comparison with its punctured domain kept visible.

We work in the real affine plane and its projective completion, using elementary matrix algebra. Projective points are nonzero real triples up to a common nonzero scalar. A projectivity is the map induced by an invertible three-by-three matrix; two scalar-multiple matrices induce the same projectivity. A collineation means a bijection carrying lines onto lines. These definitions separate a map's formula from its geometric preservation property, which is exactly what a classification theorem must connect.

## All Euclidean isometries are rigid motions

**Theorem 8.1 — Isometry classification by linear algebra.** Every distance-preserving map $f:\\mathbb R^2\\to\\mathbb R^2$ has the form $f(x)=Qx+b$ with Q orthogonal. Conversely every such formula preserves distance.

**Proof.** Subtract $f(0)$ so that the new map g fixes zero. The identity $2x\\cdot y=\\|x\\|^2+\\|y\\|^2-\\|x-y\\|^2$ and distance preservation give $g(x)\\cdot g(y)=x\\cdot y$. In particular the images $q_1,q_2$ of the standard coordinate unit vectors form an orthonormal basis. For arbitrary x, its dot products with these images are its original coordinates, so $g(x)=x_1q_1+x_2q_2$. Thus g is the linear map Q with those columns, and $Q^TQ=I$. Restoring the translation proves the formula. The converse follows by expanding squared distance. No unproved assumption of linearity or surjectivity was made; the formula establishes both. $\\square$

**Proposition 8.2 — The familiar plane types.** An orientation-preserving isometry is the identity, a translation, or a rotation about one point. An orientation-reversing isometry is a reflection or a glide reflection.

**Proof.** If $\\det Q=1$, its orthonormal columns give the usual rotation matrix. If Q=I, the map is a translation, including the zero translation. Otherwise $I-Q$ is invertible, since a nontrivial plane rotation fixes no nonzero vector. The equation $(I-Q)c=b$ gives a unique center c, and $f(x)=c+Q(x-c)$ is rotation about it.

If $\\det Q=-1$, its eigenvalues are one and minus one with perpendicular eigendirections; this can also be read directly from the two orthonormal columns. In coordinates along those directions the map is $(x,y)\\mapsto(x+a,-y+b)$. It is reflection in $y=b/2$ followed by translation a along that line. For a=0 it is a reflection. For nonzero a it is a glide reflection and has no fixed point, since its first coordinate could not remain unchanged. $\\square$

A similarity with positive length ratio r becomes an isometry after dividing its output positions by r. Therefore every similarity has formula $rQx+b$. Its area multiplier is $r^2$, and its orientation depends on Q rather than on the positive scale. The isometry and similarity groups are closed under composition and inverse by direct substitution of these formulas.

## Affine frames and preserved ratios

**Definition 8.3 — Affine transformation.** An invertible affine transformation is $x\\mapsto Ax+b$ with $A\\in GL(2,\\mathbb R)$. It preserves lines, parallelism, and the directed ratio along any fixed line. It need not preserve Euclidean distances or angles.

For a line $p+tu$, its image is $Ap+b+tAu$ and Au is nonzero. Thus the same affine parameter t is retained. Midpoints and barycentric combinations whose coefficients sum to one are preserved for the same reason. Ordinary area is multiplied by $|\\det A|$; an affine map with determinant magnitude one may still stretch one direction and compress another.

**Theorem 8.4 — Affine frame matching.** Two ordered noncollinear triples $p_0,p_1,p_2$ and $q_0,q_1,q_2$ determine a unique invertible affine map taking each p to its corresponding q.

**Proof.** The matrices $P=(p_1-p_0\\ p_2-p_0)$ and $Q=(q_1-q_0\\ q_2-q_0)$ are invertible by noncollinearity. Set $A=QP^{-1}$ and $b=q_0-Ap_0$. This gives the required three images and an invertible A. Conversely any such map must satisfy AP=Q and the displayed translation equation, forcing exactly these values. $\\square$

The correspondence must be labeled, and both triples must be noncollinear. A collinear source triple does not give two independent direction vectors and can leave an affine map underdetermined. A noncollinear triple cannot be sent to a collinear one by an invertible affine map at all.

## Why every real affine collineation is affine

The frame theorem does not by itself classify every line-preserving bijection. The following argument supplies that additional real-coordinate result.

**Theorem 8.5 — Real affine collineations.** Every collineation of the real affine plane is an invertible affine transformation.

**Proof.** A collineation preserves parallelism: images of disjoint lines cannot intersect, because taking the preimage of an intersection would put one point on both original lines. Its inverse also carries lines onto lines: choose two points on a target line, take their preimages, and use their joining line. Use Theorem 8.4 to normalize the given map so it fixes $0,e_1,e_2$.

The coordinate axes are then fixed as sets. Write its axis actions as $(x,0)\\mapsto(\\phi(x),0)$ and $(0,y)\\mapsto(0,\\psi(y))$. Parallel vertical and horizontal lines show that its full action is $(x,y)\\mapsto(\\phi(x),\\psi(y))$. The diagonal through zero and $(1,1)$ is fixed, so $\\phi(t)=\\psi(t)$ for every real t. The common function fixes zero and one and is bijective.

The line $y=ax$ maps to the line through zero and $(1,\\phi(a))$. Evaluating an arbitrary point on it gives $\\phi(at)=\\phi(a)\\phi(t)$. The line $y=x+b$, parallel to the fixed diagonal, maps to $y=x+\\phi(b)$, giving $\\phi(t+b)=\\phi(t)+\\phi(b)$. Thus it is a real field automorphism. If $r>0$, write $r=s^2$ with s nonzero. Then $\\phi(r)=\\phi(s)^2>0$, so additivity makes it strictly order preserving. It fixes every rational number, and density of rationals forces $\\phi(x)=x$ for every real x: a strict inequality between the two values would admit a rational separating them and violate order preservation. The normalized map is the identity; undoing the affine normalization proves the claim. $\\square$

Over a field admitting nontrivial automorphisms, the last argument need not collapse the coordinate function to the identity. That is why the general fundamental theorem uses semiaffine or semilinear language. The proof above states the actual real-plane hypothesis rather than silently exporting its conclusion to every coordinate field.

## Projective frames and classification

**Definition 8.6 — Projective frame.** Four ordered points of the real projective plane form a frame when no three are collinear. Representatives of the first three are then a basis $v_0,v_1,v_2$ of $\\mathbb R^3$, and a representative of the fourth is $a_0v_0+a_1v_1+a_2v_2$ with every coefficient nonzero.

**Theorem 8.7 — Projective frame matching.** Two ordered projective frames determine one unique projectivity taking corresponding points to corresponding points.

**Proof.** Rescale the first three basis representatives to $a_iv_i$ so their sum represents the fourth point. Do the same for the target frame, obtaining basis representatives $b_iw_i$. There is a unique invertible linear map sending each of the first rescaled basis vectors to its corresponding target vector. It sends their sum correctly as well, so it induces the required projectivity.

For uniqueness, compare any two candidate matrices after taking the first frame to coordinate points and their sum. Their relative matrix fixes the three coordinate projective points and must therefore be diagonal, with nonzero entries $\\lambda_0,\\lambda_1,\\lambda_2$. Fixing the sum point forces these entries equal. Hence that relative matrix is scalar and its induced projectivity is the identity. $\\square$

**Theorem 8.8 — Real projective collineations.** Every collineation of the real projective plane is a projectivity.

**Proof.** Normalize its action on one projective frame by Theorem 8.7. The normalized collineation fixes the coordinate points and the sum point. It fixes the line through the first two coordinate points, which we take as the line at infinity, and restricts to a collineation of the complementary affine plane. Its affine origin is the third coordinate point. The unit affine points are intersections obtained by drawing through the sum point the lines parallel to the coordinate axes, whose infinite points are fixed. Thus both unit affine points are fixed. Theorem 8.5 makes the normalized map the identity on the affine chart. Every infinite point is the intersection of the line at infinity with a line through two affine points, so it too is fixed. Undo the original normalization to obtain a projectivity. $\\square$

This is a real-coordinate theorem, not a statement that arbitrary abstract projective planes have real coordinates. The later projective-plane chapter distinguishes abstract incidence from division-ring and commutative-field models, including their Desargues and Pappus conditions.

## Cross-ratio and inversion in the comparison

Four distinct points on a projective line have cross-ratio

$$(A,B;C,D)=\\frac{\\det(v_C,v_A)\\det(v_D,v_B)}{\\det(v_C,v_B)\\det(v_D,v_A)},$$

where their representatives are nonzero vectors in its two-dimensional coordinate space. Distinctness makes the denominator nonzero. Rescaling any representative cancels its factors, so the quantity is well-defined. An invertible two-by-two coordinate transformation multiplies every determinant by its own determinant, which also cancels. Cross-ratio is therefore a projective invariant even when one of the points lies at infinity; ordinary Euclidean ratios are not.

Inversion preserves generalized circles and unsigned angles on its punctured domain, as proved in the preceding chapter. It is usually not affine or projective as a transformation of the same plane incidence structure: a line avoiding its center maps to a circle rather than a line. Compositions can have simpler behavior, such as the dilation obtained from two concentric inversions. A transformation group must specify its underlying space as well as its invariants; the punctured plane, Euclidean plane and projective completion are not interchangeable domains.

## Worked examples

### Worked example 1 — An affine frame calculation

Send $(0,0),(1,0),(0,1)$ to $(2,-1),(4,-1),(3,2)$. The difference columns give $A=\\begin{pmatrix}2&1\\\\0&3\\end{pmatrix}$ and b=(2,-1). Thus $f(x,y)=(2x+y+2,3y-1)$. Its determinant is six, so it is invertible and multiplies ordinary areas by six. The source frame triangle has area one-half and its image has area three. Its unequal direction stretches show that the map need not be a similarity despite being uniquely specified by the frame.

### Worked example 2 — Recognizing a glide reflection

For $f(x,y)=(x+3,-y+2)$, the linear part reflects the vertical coordinate. The equation for a fixed point would require $x+3=x$, impossible. The map is reflection in line y=1 followed by translation three units along that line. Composing it with itself gives $(x+6,y)$, a nontrivial translation. The square of an orientation-reversing map can therefore preserve orientation without being the identity. Fixed-point information distinguishes a reflection from its glide version.

### Worked example 3 — A projectivity moves the affine infinity line

The invertible homogeneous map $[x:y:z]\\mapsto[x:y:z+x]$ has determinant one. In the affine chart z=1 it has formula $(x,y)\\mapsto(x/(1+x),y/(1+x))$ where $x\\ne-1$. The omitted affine line maps to the new line at infinity. The old parallel lines y=0 and y=1 map to the intersecting projective lines Y=0 and Y=Z-X, which meet at $[1:0:1]$. That point is the image of their common old infinite direction. Projective line incidence is preserved; affine parallelism is not.

## Exercises

### Exercise 8.1
<a id="isometries-and-plane-transformation-groups-ex-1"></a>
Show that a distance-preserving map fixing zero preserves dot products.
<details><summary>Hint 1</summary>
Expand the square of a difference.
</details>
<details><summary>Hint 2</summary>
Express the dot product using three distances.
</details>
<details><summary>Full solution</summary>
Use $2x\\cdot y=\\|x\\|^2+\\|y\\|^2-\\|x-y\\|^2$. A map fixing zero and preserving pairwise distances preserves all three quantities on the right, hence the dot product on the left. This does not assume the map is linear; the following basis argument in the theorem proves linearity from that preserved information.
</details>

### Exercise 8.2
<a id="isometries-and-plane-transformation-groups-ex-2"></a>
Classify $f(x,y)=(-x+2,-y+4)$ and find its fixed point.
<details><summary>Hint 1</summary>
Its linear part is minus the identity.
</details>
<details><summary>Hint 2</summary>
Solve $f(x,y)=(x,y)$.
</details>
<details><summary>Full solution</summary>
The fixed point is $(1,2)$. The formula is $(1,2)-(x-1,y-2)$, so it is rotation through pi about that point. Its determinant is positive, not negative; reversing both coordinates in the plane preserves orientation. Confusing minus the identity with a reflection would give the wrong classification.
</details>

### Exercise 8.3
<a id="isometries-and-plane-transformation-groups-ex-3"></a>
Why must both triples in the affine frame theorem be noncollinear?
<details><summary>Hint 1</summary>
The difference columns must form invertible matrices.
</details>
<details><summary>Hint 2</summary>
An invertible affine map preserves dependence of direction vectors.
</details>
<details><summary>Full solution</summary>
Noncollinearity makes the source difference vectors a basis, so their two prescribed images determine a unique linear map. It also makes the target difference vectors independent, ensuring that map is invertible. A collinear source can leave transverse behavior undetermined, while an independent source cannot be sent to a collinear target by an invertible map. The hypotheses supply uniqueness and existence of the required invertible transformation.
</details>

### Exercise 8.4
<a id="isometries-and-plane-transformation-groups-ex-4"></a>
Prove an affine map preserves the midpoint of two points.
<details><summary>Hint 1</summary>
Substitute the average into $Ax+b$.
</details>
<details><summary>Hint 2</summary>
The two translation coefficients add to one.
</details>
<details><summary>Full solution</summary>
The image of $(p+q)/2$ is $A(p+q)/2+b=(Ap+b+Aq+b)/2$, the midpoint of the two images. This uses the affine coefficients summing to one. It does not say the map preserves the midpoint's distances from its endpoints; those distances can change, although they remain equal to each other.
</details>

### Exercise 8.5
<a id="isometries-and-plane-transformation-groups-ex-5"></a>
Show a real field automorphism is order preserving and hence the identity.
<details><summary>Hint 1</summary>
Every positive real number is a nonzero square.
</details>
<details><summary>Hint 2</summary>
It fixes rationals and cannot cross a rational separating two real numbers.
</details>
<details><summary>Full solution</summary>
Multiplicativity sends a nonzero square to a nonzero square, so positivity is preserved. Additivity then preserves strict order by applying positivity to differences. The automorphism fixes one, integers and rational quotients. If its value at x differed from x, a rational between the two would violate order preservation and its fixed rational value. Hence every real is fixed. This is the real-field-specific step in the collineation theorem.
</details>

### Exercise 8.6
<a id="isometries-and-plane-transformation-groups-ex-6"></a>
Explain why four projective-frame points, rather than just three noncollinear points, give unique projectivity.
<details><summary>Hint 1</summary>
Fixing coordinate projective points permits separate rescalings of basis representatives.
</details>
<details><summary>Hint 2</summary>
The sum point makes those diagonal scalars equal.
</details>
<details><summary>Full solution</summary>
A matrix fixing three independent projective points may be any invertible diagonal matrix in their representative basis, so its diagonal entries need not agree. A fourth frame point has all three basis coefficients nonzero. Fixing that point forces all diagonal multipliers to be the same scalar, which has no projective effect. Thus the fourth point removes the remaining freedom and produces uniqueness.
</details>

### Exercise 8.7
<a id="isometries-and-plane-transformation-groups-ex-7"></a>
Compute $(\\infty,0;1,t)$ on the real projective line for finite t distinct from zero and one.
<details><summary>Hint 1</summary>
Use representatives $(1,0),(0,1),(1,1),(t,1)$.
</details>
<details><summary>Hint 2</summary>
Apply the determinant formula rather than subtracting infinity.
</details>
<details><summary>Full solution</summary>
The four determinants in the numerator and denominator are respectively minus one, t, one and minus one. Their quotient is t. All required denominators are nonzero, and the distinctness restrictions keep the four points different. An expression involving ordinary subtraction of infinity would not be real arithmetic; homogeneous representatives give the exact finite answer.
</details>

### Exercise 8.8
<a id="isometries-and-plane-transformation-groups-ex-8"></a>
Give an affine map that preserves lines but changes a right angle.
<details><summary>Hint 1</summary>
Use a nontrivial shear.
</details>
<details><summary>Hint 2</summary>
Compare the images of the two coordinate unit directions.
</details>
<details><summary>Full solution</summary>
The shear $(x,y)\\mapsto(x+y,y)$ is invertible and affine, so it maps every line onto a line. The original perpendicular unit directions become $(1,0)$ and $(1,1)$, whose dot product is one and angle is pi/4. Thus line preservation does not imply angle preservation. Its determinant is one as well, so even adding area preservation would not repair that inference.
</details>

### Exercise 8.9
<a id="isometries-and-plane-transformation-groups-ex-9"></a>
Why is inversion generally not a projective collineation of the ordinary projective plane?
<details><summary>Hint 1</summary>
Projective collineations send projective lines to projective lines.
</details>
<details><summary>Hint 2</summary>
Invert an affine line avoiding the inversion center.
</details>
<details><summary>Full solution</summary>
Such a line becomes an ordinary circle through the missing center, not an affine line plus its projective infinite point. It therefore fails the projective line-image requirement. Inversive geometry instead treats generalized circles as its preserved family and uses a different one-point extension if desired. The underlying spaces and incidence objects differ, so sharing some circle or angle formulas does not identify the transformation groups.
</details>

### Exercise 8.10
<a id="isometries-and-plane-transformation-groups-ex-10"></a>
For $[x:y:z]\\mapsto[x:y:z+x]$, find which affine points map to infinity and the affine inverse formula on its ordinary domain.
<details><summary>Hint 1</summary>
The new last coordinate is $1+x$ in the source affine chart.
</details>
<details><summary>Hint 2</summary>
Solve $u=x/(1+x)$ and $v=y/(1+x)$.
</details>
<details><summary>Full solution</summary>
Points with x=-1 have new last coordinate zero and map to infinity. For target affine coordinates with u not equal to one, solving gives $x=u/(1-u)$ and $y=v/(1-u)$. The omitted target line corresponds to source infinite points. The homogeneous map is globally invertible; the apparent missing lines arise from choosing an affine chart, not from a singular projective matrix.
</details>

## Earlier transformation material and original exercise identities

The native alias for the former chapter now resolves to this canonical chapter. The earlier mathematical text and four original exercise headings and complete solutions are retained below, with staged help added. The full frame and real-collineation proofs above replace the earlier sketches as the current proof route. The older worked conic example is preserved for its original scope; coordinate conic classification continues in the conics companion. The original source is recorded as \`chapter-12.md\`, not presented as a separately registered current reading.


## Transformation Geometries: Affine, Projective, and Inversive

## Learning purpose

This chapter synthesizes the geometric tools developed so far by studying transformations that preserve structure: affine, projective, and inversive transformations. We compute their effects on geometric objects and prove affine and projective frame-matching theorems. The broader fundamental theorems classify incidence-preserving bijections and require additional hypotheses; they are distinguished from the frame results here.

## Affine transformations

An **affine transformation** of $\\mathbb{R}^{n}$ is a map $T(x) = Ax + b$, where $A \\in GL(n,\\mathbb{R})$ and $b \\in \\mathbb{R}^{n}$.

**Properties:**
- Affinity preserves collinearity, ratios of lengths along a line, and parallelism.
- It does not preserve angles, distances, or areas in general (unless $A$ is orthogonal, in which case $T$ is a Euclidean isometry).
- The set of all affine transformations forms a group, the **affine group** $\\operatorname{Aff}(n,\\mathbb{R})$.

**Theorem 8.9 (Affine frame).** Let $P_{0},\\dots,P_{n}$ be $n+1$ points in $\\mathbb{R}^{n}$ whose differences $P_{i}-P_{0}$ form a basis. Let $Q_{0},\\dots,Q_{n}$ be another such set. Then there exists a unique affine transformation $T$ with $T(P_{i}) = Q_{i}$ for all $i$.

**Proof sketch.** Write $T(x) = A(x-P_{0}) + Q_{0}$. The condition $T(P_{i}) = Q_{i}$ forces $A(P_{i}-P_{0}) = Q_{i}-Q_{0}$. Since the $P_{i}-P_{0}$ form a basis, $A$ is uniquely determined, and $A \\in GL(n,\\mathbb{R})$ because the $Q_{i}-Q_{0}$ also form a basis.

The name **fundamental theorem of affine geometry** is usually reserved for a classification of suitable bijections that map lines to lines as semiaffine transformations. The displayed theorem instead matches two specified affine frames.

**Common error:** assuming that an affine transformation preserves perpendicularity. It does not; only similarities (where $A$ is a scalar multiple of an orthogonal matrix) preserve angles.

## Projective transformations

A **projective transformation** of $\\mathbb{P}^{n}(\\mathbb{R})$ is induced by a linear automorphism of $\\mathbb{R}^{n+1}$. In homogeneous coordinates, it is represented by an invertible $(n+1)\\times(n+1)$ matrix, defined up to scalar multiple.

**Properties:**
- Projective transformations preserve collinearity and cross-ratio.
- They do not preserve parallelism (parallel lines meet at infinity, and projective transformations can move infinity).
- The group $PGL(n+1,\\mathbb{R})$ acts transitively on ordered tuples of $n+2$ points in general position.

**Theorem 8.10 (Projective frame).** Given two ordered sets of $n+2$ points in $\\mathbb{P}^{n}(\\mathbb{R})$, each forming a projective frame, there exists a unique projective transformation mapping one set to the other.

**Proof sketch.** In $\\mathbb{P}^{n}$, $n+2$ points in general position can be normalized to a standard projective frame. A linear map of $\\mathbb{R}^{n+1}$ is determined by its action on $n+1$ basis vectors; the $(n+2)$-nd point fixes the scalar ambiguity.

The broader **fundamental theorem of projective geometry** classifies suitable incidence-preserving bijections as semilinear projective maps; it is not merely this finite frame-matching statement.

## Inversive geometry

An **inversion** in a circle of radius $r$ centered at $O$ in $\\mathbb{R}^{2}$ maps a point $P \\neq O$ to $P'$ on ray $OP^{\\rightarrow}$ such that $OP \\cdot OP' = r^{2}$.

**Properties:**
- Inversion is involutive: $(P')' = P$.
- Circles not through $O$ invert to circles not through $O$.
- Circles through $O$ invert, after removing $O$, to lines not through $O$, and conversely; in the one-point compactification, the missing center corresponds to the point at infinity.
- Angles between curves are preserved (inversion is conformal).

**Common error:** forgetting that lines are regarded as circles through infinity in inversive geometry. The statement "inversion sends circles to circles" is true only if lines are included as generalized circles.

## Worked example: affine image of a conic

**Problem.** Show that every nonempty real nondegenerate conic in $\\mathbb{R}^{2}$ is affinely equivalent to either $x^{2}+y^{2}=1$ (ellipse), $x^{2}-y^{2}=1$ (hyperbola), or $y=x^{2}$ (parabola).

**Solution.** A general conic has equation $ax^{2}+bxy+cy^{2}+dx+ey+f=0$; nondegeneracy means that its homogenized quadratic form has an invertible three-by-three matrix. A rotation diagonalizes the quadratic part. If both diagonal coefficients $\\lambda,\\mu$ are nonzero, completing squares and translating gives $\\lambda X^{2}+\\mu Y^{2}=k$. Nondegeneracy forces $k\\ne0$. If $\\lambda,\\mu$ have the same sign, nonemptiness forces $k$ to have that sign, and rescaling the two coordinates gives $x^{2}+y^{2}=1$. If their signs differ, rescaling and, if needed, swapping coordinates gives $x^{2}-y^{2}=1$. In the rank-one case, completing the one square gives $\\lambda X^{2}+eY+g=0$ with $\\lambda\\ne0$. Its homogenized determinant is $-\\lambda e^{2}/4$, so nondegeneracy forces $e\\ne0$; translating and rescaling $Y$ gives $y=x^{2}$. A zero quadratic part has singular homogenized matrix and is excluded. Every change used is invertible affine. Quadratic rank and, in rank two, definite versus indefinite signature distinguish the three types.

## Practice exercises

### Exercise 1
<a id="chapter-12-ex-1"></a>
Find the affine transformation of $\\mathbb{R}^{2}$ that sends $(0,0) \\mapsto (1,2)$, $(1,0) \\mapsto (3,4)$, and $(0,1) \\mapsto (2,5)$.


<details><summary>Hint 1</summary>

The translation is the image of the origin.

</details>
<details><summary>Hint 2</summary>

The two matrix columns are the images of the coordinate unit points minus that translation.

</details>
<details><summary>Full solution</summary>

**Solution.**
Write $T(x,y) = (ax+by+c,\\; dx+ey+f)$. From $T(0,0)=(1,2)$ we get $c=1$, $f=2$. From $T(1,0)=(3,4)$ we get $a+c=3$, $d+f=4$, so $a=2$, $d=2$. From $T(0,1)=(2,5)$ we get $b+c=2$, $e+f=5$, so $b=1$, $e=3$. Hence
$$T(x,y) = (2x+y+1,\\; 2x+3y+2).$$

</details>

### Exercise 2
<a id="chapter-12-ex-2"></a>
Prove that the cross-ratio of four collinear points is invariant under projective transformations.


<details><summary>Hint 1</summary>

Use the homogeneous determinant definition of cross-ratio.

</details>
<details><summary>Hint 2</summary>

Every transformed determinant has one common matrix determinant factor, which cancels.

</details>
<details><summary>Full solution</summary>

**Solution.**
Let the points be represented by vectors $v_{1},v_{2},v_{3},v_{4}$ in $\\mathbb{R}^{2}$ (for the projective line $\\mathbb{P}^{1}$). A projective transformation is multiplication by $A \\in GL(2,\\mathbb{R})$. The cross-ratio is
$$(v_{1},v_{2};v_{3},v_{4}) = \\frac{\\det(v_{3},v_{1})}{\\det(v_{3},v_{2})} \\bigg/ \\frac{\\det(v_{4},v_{1})}{\\det(v_{4},v_{2})}.$$
Since $\\det(Av_{i},Av_{j}) = \\det(A)\\det(v_{i},v_{j})$, the factor $\\det(A)$ cancels in every ratio, leaving the cross-ratio unchanged.

</details>

### Exercise 3
<a id="chapter-12-ex-3"></a>
Under inversion in the unit circle, find the image of the line $x=2$.


<details><summary>Hint 1</summary>

Use the unit-inversion formula before eliminating the line parameter.

</details>
<details><summary>Hint 2</summary>

The completed circle contains the origin algebraically, but inversion never maps a finite point to its center.

</details>
<details><summary>Full solution</summary>

**Solution.**
The line $x=2$ does not pass through the origin. Parametrize it as $(2,t)$. Inversion sends $(x,y)$ to $(x/(x^{2}+y^{2}),\\; y/(x^{2}+y^{2}))$. For $(2,t)$, the image is
$$\\left(\\frac{2}{4+t^{2}},\\; \\frac{t}{4+t^{2}}\\right).$$
Let $(u,v)$ be the image coordinates. Then $u^{2}+v^{2} = (4+t^{2})/(4+t^{2})^{2} = 1/(4+t^{2})$, so $u = 2(u^{2}+v^{2})$, or equivalently
$$u^{2}+v^{2} - \\frac{u}{2} = 0.$$
Completing the square: $(u-1/4)^{2} + v^{2} = (1/4)^{2}$. The image is this circle with the origin omitted, since no finite point of the original line maps to the inversion center. It becomes the full generalized circle only after adjoining the point at infinity.

</details>

### Exercise 4
<a id="chapter-12-ex-4"></a>
Show that the composition of two inversions in concentric circles is a dilation.


<details><summary>Hint 1</summary>

Track the radial distance through the two inversions in order.

</details>
<details><summary>Hint 2</summary>

The resulting positive scale extends to the center, even though the individual inversions do not.

</details>
<details><summary>Full solution</summary>

**Solution.**
The first inversion gives $OP_1=r_1^2/OP$. Applying the second gives

$$OP_2=\\frac{r_2^2}{OP_1}=\\frac{r_2^2}{r_1^2}OP.$$

Both inversions preserve the ray from $O$, so on the punctured plane $P_2$ is obtained by the dilation of factor $r_2^2/r_1^2$ centered at $O$. This dilation extends continuously to fix $O$, although inversion itself is undefined there.

</details>

## Forward and backward connections

This chapter unifies the transformation groups that appear throughout the book: Euclidean isometries in **Neutral Geometry**, hyperbolic isometries in **Hyperbolic Geometry**, spherical isometries in **Elliptic Geometry**, and projective collineations in **Projective Planes**. The classification of conics up to affine equivalence connects to the locus definitions in the flat-file overview. The next chapter, **Chapter 13**, explores discrete transformation groups and tessellations.

## Sources

Original Euler prose and exercises, CC BY-SA 4.0. The earlier Transformation Geometries material and its complete solutions are integrated above; its old resource identity resolves here through the native alias. David Hilbert's [Foundations of Geometry](https://www.gutenberg.org/ebooks/17384) is a primary historical reference for the foundations context; Neil Donaldson's [Math 161 notes](https://www.math.uci.edu/~ndonalds/math161/notes.pdf) provide a primary-author modern course reference. The real affine and projective collineation proofs and frame normalizations are supplied above; their real-field restriction is essential.

## Summary

Distance preservation forces an orthogonal linear part and translation; fixed-point analysis gives rotations, reflections and glide reflections. Affine frames determine unique affine maps, and real affine collineations are affine because the induced real field automorphism must be trivial. Four projective-frame points similarly determine a unique projectivity, and the real projective collineation theorem follows through an affine chart. Cross-ratio survives projective changes, while inversion preserves a different family on a different domain. The next chapters compare these ideas with hyperbolic, spherical, projective and finite models.
`;export{e as default};