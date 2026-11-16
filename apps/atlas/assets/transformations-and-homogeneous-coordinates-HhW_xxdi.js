var e=`---
parent_id: book-analytic-computational-geometry
chapter_id: transformations-and-homogeneous-coordinates
title: "Transformations and Homogeneous Coordinates"
level: advanced-undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Transformations and Homogeneous Coordinates

Geometry is not only about measuring what is, but also about moving things while preserving structure. A transformation that sends lines to lines, preserves incidence, and behaves predictably under composition is the natural next step after coordinates and distances. This chapter defines planar affine maps, studies their invariants, introduces homogeneous coordinates as a unifying matrix formalism, and extends to projective transformations that preserve lines but not parallelism.

This L3 chapter assumes matrices, determinants and the preceding representation/predicate contracts. Exact affine and projective actions are proved before any affine-chart division is performed. Homogeneous points are equivalence classes of nonzero vectors, whereas ordinary displacements remain vectors; using the same notation does not make those roles interchangeable.

## Affine maps

A **planar affine map** has the form

$$X\\mapsto AX+b,$$

where $A$ is a $2\\times 2$ real matrix and $b$ is a vector in $\\mathbb{R}^{2}$. Every affine map sends lines to lines or collapses them to points. The classification of $A$ determines which geometric properties survive:

- If $A$ is nonsingular, the map preserves lines, parallelism, collinearity, and ratios along a line.
- If $A^{T}A=I$, the map is a **Euclidean isometry**: it preserves distances exactly.
- If $\\det A>0$, the map preserves orientation; if $\\det A<0$, it reverses orientation.
- If $\\det A=0$, the map collapses all oriented areas to zero and is not invertible.

### Prove the affine invariants

An affine map takes $P+tv$ to $(AP+b)+tAv$. This is a whole carrier line if Av is nonzero and a point otherwise. When A is invertible, nonzero directions stay nonzero and parallel directions stay proportional. The parameter t is retained, proving preservation of ratios along a common line and of segments with their parameter intervals. More generally the image of an affine combination whose weights sum to one is the same combination of the image points. Nonnegative such weights give convex combinations, so affine maps preserve convex hulls, even when singular maps collapse their dimension.

Distance preservation is equivalent to $A^TA=I$. Sufficiency follows by computing the squared norm of each transformed displacement. For necessity, if every squared displacement length is preserved, the symmetric matrix $A^TA-I$ has quadratic value zero on every vector. Evaluating on the two coordinate unit vectors gives zero diagonal entries, and on their sum gives zero off-diagonal entries. Thus the matrix is zero. Likewise a similarity with a fixed positive length scale has $A^TA$ equal to that scale squared times the identity. Determinant alone does not characterize either metric property: a shear can have determinant one and still change angles and lengths.

The orientation rule is the determinant identity proved in the previous chapter. Invertibility is equivalent to a nonzero determinant, with inverse affine map $Y\\mapsto A^{-1}Y-A^{-1}b$. This is a statement about the given affine formula, not a proof that an unspecified function agreeing at three samples is affine.

## Worked example 1: rotation and translation {#worked-example-rotation-and-translation}

Rotate the plane by $90^{\\circ}$ counterclockwise about the origin, then translate by $(1,2)$.

The rotation matrix is

$$A=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}.$$

The map is $X\\mapsto AX+(1,2)$. Applied to $(3,4)$:

$$\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}\\begin{pmatrix}3\\\\4\\end{pmatrix}+\\begin{pmatrix}1\\\\2\\end{pmatrix}=\\begin{pmatrix}-4\\\\3\\end{pmatrix}+\\begin{pmatrix}1\\\\2\\end{pmatrix}=\\begin{pmatrix}-3\\\\5\\end{pmatrix}.$$

The determinant is $\\det A=0\\cdot 0-(-1)\\cdot 1=1>0$, so orientation is preserved.

## Homogeneous coordinates

Affine maps mix linear transformation and translation, which complicates composition. **Homogeneous coordinates** solve this by embedding $\\mathbb{R}^{2}$ into $\\mathbb{R}^{3}$ via $(x,y)\\mapsto[x,y,1]^{T}$. An affine map $X\\mapsto AX+b$ becomes a single $3\\times 3$ matrix:

$$M=\\begin{pmatrix}A&b\\\\0^T&1\\end{pmatrix}.$$

Matrix multiplication composes transformations in a declared order. For column vectors, $M_{2}M_{1}X$ applies $M_{1}$ first and then $M_{2}$.

### Prove the block composition law

The lower-left block is a zero row with two entries. Multiplication by the embedded point gives $(AX+b,1)$, proving the affine formula is represented exactly. For two affine actions with parameters $(A,b)$ followed by $(B,d)$, block multiplication gives

$$\\begin{pmatrix}B&d\\\\0^T&1\\end{pmatrix}
\\begin{pmatrix}A&b\\\\0^T&1\\end{pmatrix}
=\\begin{pmatrix}BA&Bb+d\\\\0^T&1\\end{pmatrix}.$$

This agrees with applying the two affine formulas directly. Translation vectors participate in the second map's linear part; they cannot be added without that transformation. If A is invertible, the block matrix with upper row blocks $A^{-1}$ and $-A^{-1}b$ is its inverse, as multiplication in either order shows. Singular affine maps still have a valid homogeneous action on finite points with last coordinate one, but their singular three-by-three matrix is not an invertible projective transformation on every projective point.

## Worked example 2: composition order changes the map

Let R be the ninety-degree counterclockwise rotation and T translation by $(1,0)$. Applying R then T sends the origin to $(1,0)$, whereas T then R sends it to $(0,1)$. Both maps preserve lengths and orientation, but they are different actions. The block law identifies the first as TR and the second as RT for column vectors. A common right-to-left convention is therefore a mathematical part of the input, not just a display preference. The earlier capstone below retains the longer rotation/translation/dilation example, where the final dilation also multiplies the translation vector.

## Reflection

For a line through $M$ with nonzero normal $n$, the reflection of a point $P$ is

$$R(P)=P-2\\,\\frac{(P-M)\\cdot n}{n\\cdot n}\\,n.$$

Put $Q=nn^T/(n\\cdot n)$. It is symmetric and satisfies $Q^2=Q$, by multiplying the middle scalar $n^Tn$. The linear part of reflection is $H=I-2Q$, and $H^TH=H^2=I$. Consequently pairwise displacement lengths are preserved and applying the reflection twice gives the identity. Vectors along n have eigenvalue minus one; perpendicular vectors have eigenvalue one, so the determinant is minus one. A point is fixed precisely when its displacement from M has zero normal component, exactly the mirror line. These calculations prove involution, fixed locus, isometry and orientation reversal rather than listing desired properties as unperformed checks.

The nonzero-normal hypothesis is essential before forming Q. Scaling n by any nonzero scalar leaves Q unchanged, so reflection is independent of the chosen normal magnitude and sign. Choosing another M on the same mirror line also leaves the formula unchanged, because the new base-point difference is perpendicular to n. Thus the formula depends on the geometric mirror, not an arbitrary representative.

An approximate-nearness relation is different from equality. A policy may combine absolute and relative length bounds, but it must declare units, origin behavior and intended meaning. Distance at most a fixed tolerance is generally not transitive: nearby pairs can chain into a far-apart pair. It cannot be used as an equivalence relation for geometric identity without an additional declared clustering or quantization rule. Such a rule changes the represented object rather than proving two exact points equal.

## Projective transformations

A **projective transformation** first acts by an invertible three-by-three matrix on nonzero point representatives, up to nonzero scalar. If the output third coordinate is nonzero, it can then be displayed in the finite affine chart:

$$[x,y,w]^{T}\\mapsto\\left[\\frac{x'}{w'},\\frac{y'}{w'},1\\right]^{T},\\qquad\\begin{pmatrix}x'\\\\y'\\\\w'\\end{pmatrix}=M\\begin{pmatrix}x\\\\y\\\\w\\end{pmatrix}.$$

Projective transformations preserve lines and cross-ratio, but not lengths, angles, or parallelism. Points with final homogeneous coordinate $w=0$ represent directions or points at infinity. Blindly dividing by $w$ produces infinities or \`NaN\` instead of a meaningful projective boundary case.

### Prove that the projective action is well defined and preserves incidence

If a representative p is multiplied by a nonzero scalar, its matrix image is multiplied by the same scalar. Multiplying the entire action matrix by another nonzero scalar also leaves the image class unchanged. Invertibility prevents an image from being the zero vector, and the inverse matrix supplies a bijection on all projective points. A singular matrix has a nonzero kernel vector and therefore fails to define a global projective point map, even if many ordinary finite inputs still have meaningful images.

A projective line has a nonzero coefficient covector l and equation $l^Tp=0$. Under point action by a matrix H, its coefficient vector transforms by $H^{-T}$ because

$$(H^{-T}l)^T(Hp)=l^Tp.$$

The covector stays nonzero, and applying the inverse proves that the whole original line maps onto the whole image line. This is the complete incidence argument. Applying H directly to both point and line coefficient vectors would generally fail it. A conic matrix C similarly transforms by inverse congruence, $H^{-T}CH^{-1}$, obtained by substituting the inverse point action into its quadratic equation. The next conic chapter uses this representation distinction for actual predicates.

Cross-ratio is preserved on each projective line because its four two-dimensional determinant factors acquire matching determinant multipliers that cancel between numerator and denominator. The full representative-independent proof and conic consequences are given in [Projective Geometry](../conics-solids-projections/projective-geometry.md). No metric ruler or preferred infinity line is required for that four-point quantity.

### Affine chart and local orientation

Write H in blocks with top row blocks A,b and last row c-transpose,d. At a finite source point X, put $w=c^TX+d$. Only where w is nonzero does the finite formula $F(X)=(AX+b)/w$ apply. Differentiating yields $DF=(A-Fc^T)/w$. Its determinant is

$$\\det DF(X)=\\frac{\\det H}{w^3}.$$

Here is a proof of the determinant step. Translate the source origin to X, multiply by H, then translate the finite target value F(X) back to zero. The resulting block matrix has upper-right block zero, upper-left block $A-Fc^T$ and lower-right entry w. The two translation matrices have determinant one, so its determinant is still det H and is w times the upper-left determinant. Dividing each derivative row by w supplies the remaining factor w squared. The formula follows and is nonzero on the chart domain.

Scaling H by a nonzero scalar multiplies both its determinant and w cubed by that scalar cubed, so this chart Jacobian is representation independent. Its sign can differ on opposite sides of the excluded horizon w zero. Thus invertible projective action does not carry one global affine orientation or finite-distance bound across a chart boundary. A camera convention may additionally clip negative-depth points, but negative last coordinate alone is not an invalid projective point.

## Worked example 3: a finite point and a direction exchange chart roles

Use the matrix with rows $(1,0,0)$, $(0,1,0)$ and $(1,0,1)$. It has determinant one and finite-chart action $F(x,y)=(x/(x+1),y/(x+1))$. The point $(-1,2)$ maps to $[-1:2:0]$, a valid point at infinity; the original direction $[1:0:0]$ maps to finite point $(1,0)$. The inverse projective matrix remains defined on both, even where the finite fraction formula does not.

The chart Jacobian is $1/(x+1)^3$, positive for x greater than minus one and negative for x less than minus one; the excluded horizon is x equal to minus one. Horizontal source lines y constant have finite images lying on lines $Y=y(1-X)$. Their complete projective image lines meet at $(1,0)$, the transformed common direction point. Finite source points on those lines approach but do not attain that vanishing point; it is supplied by their source infinity point. This distinction prevents a missing finite point from being confused with failure of projective incidence.

## Common errors

- **Wrong composition order.** For column vectors, $M_{2}M_{1}$ applies $M_{1}$ first. A common mistake is to read $M_{1}M_{2}$ as \`\`$M_{1}$ then $M_{2}$.''
- **Dividing by zero homogeneous coordinate.** A point with $w=0$ is a valid projective point (a direction). Code that unconditionally divides by $w$ crashes or produces garbage.
- **Using a fixed tolerance for approximate equality.** After a scaling transformation, distances change. A tolerance of $10^{-6}$ may be too strict for large coordinates and too loose for small ones.
- **Confusing affine and projective invariants.** Parallelism is preserved by affine maps but not by general projective maps. An algorithm that assumes parallel lines stay parallel will fail under perspective projection.

## Practice exercises with solutions

### Exercise 1
Find the $3\\times 3$ homogeneous matrix for a rotation by $180^{\\circ}$ about the origin followed by a translation by $(3,1)$.

<details><summary>Hint 1</summary>

The final translation is the last column of the affine block matrix.

</details>

<details><summary>Hint 2</summary>

Apply the rotation first with the column-vector convention.

</details>

<details><summary>Full solution</summary>

**Solution.** The rotation matrix is $\\operatorname{diag}(-1,-1)$. The homogeneous matrix is

$$M=\\begin{pmatrix}-1&0&3\\\\0&-1&1\\\\0&0&1\\end{pmatrix}.$$

</details>

### Exercise 2
Show that the reflection across the line $x=0$ (the $y$-axis) sends $(a,b)$ to $(-a,b)$.

<details><summary>Hint 1</summary>

Use the mirror normal and base point in the reflection formula.

</details>

<details><summary>Hint 2</summary>

Only the first coordinate has a nonzero normal component.

</details>

<details><summary>Full solution</summary>

**Solution.** The line passes through $M=(0,0)$ with normal $n=(1,0)$. Then

$$R(P)=P-2\\,\\frac{(a,b)\\cdot(1,0)}{1}\\,(1,0)=(a,b)-2a(1,0)=(-a,b).$$

</details>

### Exercise 3
A projective transformation maps the point at infinity in direction $(1,1)$ to a finite point. What is the image of $[1,1,0]^{T}$ under

$$M=\\begin{pmatrix}1&0&1\\\\0&1&1\\\\1&0&0\\end{pmatrix}?$$

<details><summary>Hint 1</summary>

Apply the full matrix before considering affine division.

</details>

<details><summary>Hint 2</summary>

The image last coordinate is one, so the direction becomes finite.

</details>

<details><summary>Full solution</summary>

**Solution.** $M[1,1,0]^{T}=[1,1,1]^{T}$, which corresponds to the finite point $(1,1)$. The direction has been mapped to a finite point; this is valid in projective geometry.

</details>

### Exercise 4
Verify that the composition of two reflections is a translation when the mirror lines are parallel.

<details><summary>Hint 1</summary>

Use one common nonzero normal for both parallel mirrors.

</details>

<details><summary>Hint 2</summary>

Expand both reflection terms; the point-dependent normal parts cancel.

</details>

<details><summary>Full solution</summary>

**Solution.** Let the first mirror be $n\\cdot X=c_{1}$ and the second be $n\\cdot X=c_{2}$. Reflecting across the first sends $P$ to $P-2\\frac{n\\cdot P-c_{1}}{\\lVert n\\rVert^{2}}n$. Reflecting the result across the second adds another term. The point-dependent terms cancel, leaving a pure translation by $2\\frac{c_{2}-c_{1}}{\\lVert n\\rVert^{2}}n$. For example, reflecting first in $x=0$ and then in $x=a$ sends $x$ to $x+2a$.

</details>

### Exercise 5
Find the unique affine map sending $(0,0)\\mapsto(1,1)$, $(1,0)\\mapsto(2,1)$, and $(0,1)\\mapsto(1,2)$. Explain what the three data alone would say about a map not already assumed affine.

<details><summary>Hint 1</summary>

Images of the origin and two independent unit displacements determine an affine formula.

</details>

<details><summary>Hint 2</summary>

Agreement at those points is unique only within the already-assumed affine class.

</details>

<details><summary>Full solution</summary>

**Solution.** An affine map has the form $X\\mapsto AX+b$. From the first condition, $b=(1,1)$. From the second, the first column of $A$ is $(1,0)$; from the third, the second column is $(0,1)$. Thus the unique affine interpolant has $A=I$ and is translation by $(1,1)$. Three point images do not prove that an otherwise unspecified map is affine; many nonaffine maps can agree on those three points.

</details>


### Exercise 6

Consider the singular affine map $(x,y)\\mapsto(x,0)$. Explain why it is a valid map on every finite plane point but its three-by-three homogeneous matrix is not a projective transformation on every projective point.

<details><summary>Hint 1</summary>

The lower row keeps the final coordinate one on finite inputs.

</details>

<details><summary>Hint 2</summary>

Apply the matrix to the nonzero representative of the vertical direction point.

</details>

<details><summary>Full solution</summary>

The finite formula is defined everywhere and collapses each vertical carrier to a point. Its homogeneous matrix has diagonal entries one, zero and one. The nonzero point representative $(0,1,0)$ is in its kernel, so its image is the forbidden zero vector. Thus the matrix does not define a global projective point action. A singular affine map can still be a total map of the affine chart; invertible projective action has the stronger nonzero-image requirement on all representatives.

</details>

### Exercise 7

Find the affine inverse of $(x,y)\\mapsto(2x+y+1,y-2)$ and its homogeneous matrix. Verify it by substitution rather than guessing an inverse translation.

<details><summary>Hint 1</summary>

The target second coordinate determines y first.

</details>

<details><summary>Hint 2</summary>

The inverse translation is minus the inverse linear matrix times the old translation, not simply its negative.

</details>

<details><summary>Full solution</summary>

Writing target coordinates as U,V gives $y=V+2$ and $x=(U-V-3)/2$. The inverse homogeneous matrix has rows $(1/2,-1/2,-3/2)$, $(0,1,2)$ and $(0,0,1)$. Substitution into the forward map returns U,V, and substituting the forward expressions in these inverse formulas returns x,y. The constant minus three halves in the first inverse coordinate includes the interaction of the original linear shear with its translation. Negating the old translation alone would not give this inverse.

</details>

### Exercise 8

Transform the line $x-y=0$ by $(X,Y)=(2x+1,y)$. Find the image line using the inverse-transpose rule, and check the image of the source point $(1,1)$.

<details><summary>Hint 1</summary>

Substitute $x=(X-1)/2$ and y equal to Y in the original equation.

</details>

<details><summary>Hint 2</summary>

The transformed normal is $(1/2,-1)$ before clearing a scalar factor.

</details>

<details><summary>Full solution</summary>

The equation is $(X-1)/2-Y=0$, or $X-2Y=1$. The transformed point is $(3,1)$ and satisfies it exactly. In affine notation the new normal is the inverse transpose of the linear part applied to the old normal, and its constant includes the new normal dotted with the translation. Multiplying the normal by the forward linear part would give a different line and generally fail point incidence. The check illustrates the proved covector law rather than assuming normals transform like displacements.

</details>

### Exercise 9

Replace a projective action matrix H by minus H. What happens to its determinant, finite denominator w and the chart-Jacobian formula? Can the sign of det H alone define a representative-independent affine orientation rule?

<details><summary>Hint 1</summary>

A three-by-three determinant changes by the cube of the matrix scale.

</details>

<details><summary>Hint 2</summary>

The chart denominator cubed changes by the same factor.

</details>

<details><summary>Full solution</summary>

Both det H and w cubed change sign, so their ratio is unchanged. The projective map and its finite local Jacobian therefore remain the same. Determinant sign alone would reverse under an irrelevant representative change and cannot supply the stated orientation rule. In an affine-normalized block matrix the last row convention fixes w one, making det A the usual rule; a general projective matrix needs its actual chart denominator as well.

</details>

### Exercise 10

For a positive tolerance tau, exhibit three collinear points such that each successive pair is within tau but the first and last are not. Explain why a nearness predicate cannot silently replace exact equality in a geometric identity relation.

<details><summary>Hint 1</summary>

Use coordinates zero, three quarters tau and three halves tau.

</details>

<details><summary>Hint 2</summary>

An equivalence relation must be transitive.

</details>

<details><summary>Full solution</summary>

The two successive distances are three quarters tau, while the endpoint distance is three halves tau. Thus the first is near the second and the second near the third, but the first is not near the third. The relation fails transitivity. Using it as if it were geometric equality can make merges depend on processing order. A specified clustering or quantization equivalence can be a legitimate approximation policy, but it changes the object and requires its own semantics. It is not a theorem that these distinct exact points are equal.

</details>

## Transferred capstone: Transformation composition {#computational-legacy-capstone-5}

Find the $3\\times 3$ homogeneous matrix for: rotate by $45^{\\circ}$ about the origin, then translate by $(1,0)$, then scale by $2$ in both directions. Apply the result to $(1,0)$.

This retains the earlier [Worked Exercises and Synthesis](worked-exercises-and-synthesis.md) problem and full solution with its original source still available.

<details><summary>Hint 1</summary>

Column-vector actions compose from right to left.

</details>

<details><summary>Hint 2</summary>

Translation is scaled if the final operation is a dilation.

</details>

<details><summary>Full solution</summary>

**Solution.** The rotation matrix is

$$R=\\begin{pmatrix}\\cos 45^{\\circ}&-\\sin 45^{\\circ}\\\\\\sin 45^{\\circ}&\\cos 45^{\\circ}\\end{pmatrix}=\\frac{1}{\\sqrt{2}}\\begin{pmatrix}1&-1\\\\1&1\\end{pmatrix}.$$

The translation is $T=(1,0)$. The scale is $S=2I$. In homogeneous coordinates:

$$M_{R}=\\begin{pmatrix}1/\\sqrt{2}&-1/\\sqrt{2}&0\\\\1/\\sqrt{2}&1/\\sqrt{2}&0\\\\0&0&1\\end{pmatrix},\\quad M_{T}=\\begin{pmatrix}1&0&1\\\\0&1&0\\\\0&0&1\\end{pmatrix},\\quad M_{S}=\\begin{pmatrix}2&0&0\\\\0&2&0\\\\0&0&1\\end{pmatrix}.$$

For column vectors, the composition is
$$M=M_{S}M_{T}M_{R}=\\begin{pmatrix}\\sqrt2&-\\sqrt2&2\\\\\\sqrt2&\\sqrt2&0\\\\0&0&1\\end{pmatrix}.$$
Applied to $[1,0,1]^{T}$:

$$M_{R}[1,0,1]^{T}=[1/\\sqrt{2},1/\\sqrt{2},1]^{T},$$

$$M_{T}[1/\\sqrt{2},1/\\sqrt{2},1]^{T}=[1/\\sqrt{2}+1,1/\\sqrt{2},1]^{T},$$

$$M_{S}[1/\\sqrt{2}+1,1/\\sqrt{2},1]^{T}=[2/\\sqrt{2}+2,2/\\sqrt{2},1]^{T}=[\\sqrt{2}+2,\\sqrt{2},1]^{T}.$$

The image is $(\\sqrt{2}+2,\\sqrt{2})$.

</details>

## Looking backward and forward

This chapter introduced affine and projective transformations, showed how homogeneous coordinates unify them into matrix multiplication, and derived the reflection formula. The invariants---determinant for orientation, $A^{T}A=I$ for isometry, and cross-ratio for projective maps---will appear again when we classify conics and study curved metrics.

The next chapter, **Conic Predicates**, applies these representation and chart distinctions to membership, classification, exact algebraic intersections and parameter intervals. Full geometric conic theory has its home in the separate Conics book; the earlier two computational conic readings remain companions.

## Summary and source

Affine combination and block-matrix laws prove the coordinate action and composition order. Orthogonal matrices characterize distance preservation, and the reflection projector proves its full isometric involution. Invertible homogeneous actions are well defined on projective classes; lines transform by inverse transpose and conics by inverse congruence. Finite chart division has an explicit nonzero-denominator domain and a derived local Jacobian, so chart orientation and clipping are distinguished from global incidence.

The earlier five questions and full solutions plus the transferred capstone remain with staged support; five new exercises give eleven supported questions. New affine, reflection and projective-action proofs develop the L3 commission. The separate Conics projective chapter supplies the complete cross-ratio and conic geometry continuation. No implementation, numerical example execution or independent review is claimed.
`;export{e as default};