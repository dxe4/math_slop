var e=`---
parent_id: book-conics-solids-projections
chapter_id: transformations-of-conics
title: "Transformation Geometry"
level: undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Transformation Geometry

When are two geometric figures \`\`the same''? The answer depends on which transformations are allowed. Euclidean geometry allows only rigid motions; similarity geometry adds scaling; affine geometry adds shearing; projective geometry adds perspective. This L2 chapter studies their action on conics: how an equation transforms, which conic types can change, and which geometric measurements survive. The general classification of plane isometries and transformation groups is developed in [Geometry](../../geometry-proof-reference/isometries-and-plane-transformation-groups.md); the brief group descriptions below recall that preparation. Homogeneous coordinates are introduced where needed and developed further in the following projective chapter.

## Euclidean transformations

A Euclidean transformation (isometry) of the plane preserves distances. Every isometry is a composition of:

- translations: $(x,y)\\mapsto(x+a,y+b)$;
- rotations: $(x,y)\\mapsto(x\\cos\\theta-y\\sin\\theta,x\\sin\\theta+y\\cos\\theta)$;
- reflections: $(x,y)\\mapsto(x,-y)$ (in the x-axis).

In matrix form, a direct isometry (translation, rotation, or composition thereof) is

$$\\begin{pmatrix}x'\\\\y'\\end{pmatrix}=\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}+\\begin{pmatrix}a\\\\b\\end{pmatrix}.$$

An opposite isometry includes a reflection and has determinant $-1$.

### Invariants

Euclidean geometry preserves: distances, angles, areas, parallelism, and betweenness.

## Similarity transformations

A similarity transformation preserves angles and ratios of distances. It is a composition of an isometry and a uniform scaling $(x,y)\\mapsto(kx,ky)$ with $k>0$. In complex notation, direct similarities have $z\\mapsto ke^{i\\theta}z+w$; indirect similarities include conjugation, $z\\mapsto ke^{i\\theta}\\overline z+w$.

### Invariants

Similarity geometry preserves: angles, ratios of lengths, ratios of areas, and parallelism. It does not preserve absolute distances or areas.

## Affine transformations

An affine transformation has the form

$$\\begin{pmatrix}x'\\\\y'\\end{pmatrix}=M\\begin{pmatrix}x\\\\y\\end{pmatrix}+\\mathbf{v},$$

where $M$ is an invertible $2\\times 2$ matrix and $\\mathbf{v}$ is a translation vector. Affine transformations map lines to lines, preserve parallelism, and preserve ratios of lengths along parallel lines.

### Invariants

Affine geometry preserves: collinearity, parallelism, ratios of lengths along a line, and the center of mass of a system of points. It does not preserve angles, distances, or areas (though it preserves ratios of areas).

### The affine group and conics

Under affine transformations, ellipses remain ellipses, parabolas remain parabolas, and hyperbolas remain hyperbolas. However, circles can be mapped to ellipses, and rectangles to parallelograms. The affine classification of conics is therefore coarser than the Euclidean classification.

## Projective transformations

A projective transformation of the plane is induced by an invertible linear transformation of $\\mathbb{R}^{3}$ acting on homogeneous coordinates:

$$[x':y':z']=[ax+by+cz:dx+ey+fz:gx+hy+iz].$$

Projective transformations map lines to lines, preserve incidence and cross-ratio, but do not preserve parallelism, angles, distances, or ratios of lengths.

### Invariants

Projective geometry preserves: collinearity, incidence, and cross-ratio. It does not preserve any metric properties.

### Projective frame theorem

Given any four ordered points in general position (no three collinear) and any other four points in general position, there exists a unique projective transformation mapping the first set to the second. This theorem shows that projective geometry has no \`\`shape'' in the Euclidean sense: any quadrilateral can be mapped to any other.

### Proof of the frame assertion

Choose nonzero representative vectors $p_1,p_2,p_3$ for the first three points. No three collinear means these vectors form a basis. Write a representative of the fourth point as $a_1p_1+a_2p_2+a_3p_3$. Every coefficient is nonzero: a zero coefficient would put the fourth point on a line through two of the first three. Replacing the basis vectors by $a_ip_i$ gives representatives whose sum represents the fourth point. Do the same for the target frame, obtaining a basis $q'_1,q'_2,q'_3$ whose sum represents its fourth point.

The unique linear map taking the three adjusted source basis vectors to the three adjusted target basis vectors is invertible and also takes their sum to the target sum. It induces the desired projective transformation. For uniqueness, a projective transformation fixing the three coordinate points must have diagonal matrix. Fixing the sum point forces its three diagonal entries equal. Such a matrix is a nonzero scalar multiple of the identity and induces the identity projective transformation. This proves uniqueness as a projective map, rather than as a specific matrix: multiplying every matrix entry by the same nonzero scalar changes no projective point.

## Transform the equation, not only its plotted points

A plane conic has homogeneous equation $P^TMP=0$, where $P=(x,y,z)^T$ and M is a symmetric three-by-three matrix. It is nonsingular when M is invertible. If the active point transformation is $P'=HP$, substitution of $P=H^{-1}P'$ gives the image matrix

$$M'=H^{-T}MH^{-1}.$$

Both inverse factors are necessary. The formula $H^TMH$ instead belongs to substituting old coordinates as H times new coordinates. Mixing these conventions can send the equation in the opposite direction even though the point calculations look plausible. Congruence preserves rank and multiplies the determinant by the nonzero square of the inverse determinant. Thus a projective transformation cannot turn a nonsingular conic into intersecting lines or a doubled line.

For an affine map $Y=LX+t$, its homogeneous matrix has last row $(0,0,1)$. Substitution gives quadratic part $Q'=L^{-T}QL^{-1}$. Its inertia is preserved, as proved in the previous chapter. An ellipse, parabola or hyperbola therefore retains its affine type, although axis lengths, orthogonality and eccentricity can change. A center maps to a center: if X and its reflection $2a-X$ both lie on a conic, their images are Y and $2(La+t)-Y$. A parabola has no center, so no invertible affine map can turn an ellipse into a parabola.

A tangent also transforms correctly. At a point P of a nonsingular conic its projective tangent has equation $P^TMV=0$. This follows by taking the linear term of $(P+\\epsilon V)^TM(P+\\epsilon V)$ and using $P^TMP=0$. Substituting the two transformed vectors and M' preserves that equation. Thus tangent incidence survives a projective transformation, while a numerical angle between the tangent and another line generally does not. The same distinction underlies perspective drawings: a visible contact can be exact even when apparent lengths are misleading.

### Worked example 1: a shear changes eccentricity

Apply $x'=x+y$, $y'=y$ to the unit circle. Its image equation is

$$(x'-y')^2+y'^2=1.$$

The quadratic matrix is $\\begin{pmatrix}1&-1\\\\-1&2\\end{pmatrix}$, with positive eigenvalues $(3+\\sqrt5)/2$ and $(3-\\sqrt5)/2$. The semiaxes are their reciprocal square roots. They are unequal, so the image has positive eccentricity, whereas the source circle has zero eccentricity. Its center is still the origin and its area is still pi, since the shear determinant is one. The images of the original perpendicular coordinate directions are $(1,0)$ and $(1,1)$, whose angle is forty-five degrees, directly displaying the loss of orthogonality.

The center and tangent incidences have survived, but a transported focus-directrix picture has not retained its metric meaning. A similarity scales every distance by the same positive factor, so a focus-directrix ratio remains unchanged. A shear scales different directions differently and need not send a perpendicular foot to a perpendicular foot. An affine image of a circle is an ellipse, but its foci must be computed from the new Euclidean semiaxes, not assigned by shearing an imagined pair of coincident circle foci.

## Why projective maps change the affine type

An affine plane is the chart z nonzero in the projective plane, with the line z zero omitted. The projective conic is larger than its visible part in that chart. The homogeneous circle $x^2+y^2-z^2=0$ has no real points on z zero. The parabola $x^2-yz=0$ has one such point, counted twice by the restricted quadratic. The hyperbola $xy-z^2=0$ has two distinct real points on that line. These are the three possibilities for a nonsingular real conic relative to a chosen real line at infinity: no real intersection, tangency, or two intersections.

An affine transformation preserves the omitted line, so it preserves those alternatives. A general projective transformation can move it. The underlying nonsingular projective conic remains of the same type, while the part seen in the new affine chart becomes an ellipse, parabola or hyperbola. The “missing” points have not vanished from projective space. They moved onto the line excluded from that particular coordinate picture.

### Worked example 2: a circle becomes a parabola

Use $[X:Y:Z]=[x:z+y:z-y]$. The map is invertible since its inverse is represented by $x=X$, $y=(Y-Z)/2$, $z=(Y+Z)/2$. The circle equation becomes $X^2=YZ$. In the affine chart Z one this is $Y=X^2$, a parabola. The source circle point $[0:1:1]$ maps to $[0:2:0]$, the new point at infinity. Its source tangent z minus y zero is precisely the line that becomes the new infinity line.

For a finite source point $(x,y)$ the formulas read $X=x/(1-y)$ and $Y=(1+y)/(1-y)$. They are undefined at the top point of the circle. This is a coordinate failure at one finite source point, not failure of invertibility of the projective map. Removing that point from the source circle supplies exactly the affine parabola; keeping it gives the full projective conic. An algorithm using the fractions must identify the zero denominator rather than draw an enormous finite coordinate and label it exact.

### Worked example 3: a circle becomes a hyperbola

Instead use $[X:Y:Z]=[x:z:y]$. The circle equation becomes $X^2+Z^2-Y^2=0$. In the chart Z one this reads $Y^2-X^2=1$. The two circle points with y zero map to two distinct points at infinity, leaving the two affine branches. The source circle is connected projectively, but a chart deleting two points need not leave a connected affine curve. Connectivity of the complete projective locus and connectivity of a selected affine part answer different questions.

More generally, all nonempty nonsingular real projective conics are equivalent. Their homogeneous symmetric matrices are invertible and indefinite: a definite matrix has no nonzero real null vector. In dimension three an indefinite nonsingular matrix has inertia two-positive/one-negative or its overall negative. The spectral reduction and coordinate scalings reduce either, after harmless multiplication of the equation by minus one, to $x^2+y^2-z^2$. Composing the reductions gives an invertible real projective map. The nonempty hypothesis excludes imaginary ellipses, and nonsingularity excludes pairs of lines. Without those qualifications the equivalence assertion is false.

## Choosing the right invariant for a conic question

Under similarities the distance-ratio definition of eccentricity is unchanged, axis-length ratios stay fixed, and circles remain circles. Under general affine maps every ellipse is equivalent to a unit circle: translate to its center, rotate to principal axes and divide coordinates by the two semiaxes. This construction preserves midpoint and parallel-chord relations but need not preserve circular tangency angles or focal distances. Areas all scale by the same positive determinant factor, so ratios of finite areas remain invariant. Weighted point centroids are preserved because an affine map distributes over a weighted sum whose normalized weights total one.

A projective map can even change midpoints. On a line take $h(t)=t/(t+1)$. The points zero and two map to zero and two thirds. Their midpoint one maps to one half, whereas the midpoint of their images is one third. This example stays away from the pole and already disproves midpoint invariance. Cross-ratio, rather than ordinary segment ratio, survives. When comparing drawings, first decide whether a metric, affine or projective question is intended; then retain the corresponding hypotheses and invariant. Calling two conics “the same” without specifying the allowed group conceals the entire problem.

## Transformation groups and the Erlangen program

Felix Klein's Erlangen program proposed that a geometry is determined by its group of transformations, and that the theorems of the geometry are precisely the statements invariant under that group. The hierarchy is:

- Projective group (largest): projective geometry.
- Affine group: affine geometry.
- Similarity group: similarity geometry.
- Euclidean group (smallest): Euclidean geometry.

Passing to a smaller transformation group preserves more quantities, so more statements can be invariant and meaningful in the resulting geometry.

## Common errors

- **Assuming affine transformations preserve angles.** They preserve parallelism but not angles; only similarities and isometries preserve angles.
- **Confusing projective with affine equivalence.** All nonempty nondegenerate real conics are projectively equivalent over the reals, but their ellipse/parabola/hyperbola affine types are not affinely equivalent.
- **Forgetting that translations are not linear.** In homogeneous coordinates, translations are represented by matrices, but in Cartesian coordinates they are affine, not linear.
- **Using the wrong invariant.** A statement about angles is not meaningful in affine or projective geometry.

## Practice exercises with solutions

### Exercise 1

<span id="conics-transformations-ex-1"></span>
Find the Euclidean isometry that maps $(0,0)\\mapsto(1,1)$, $(1,0)\\mapsto(1,2)$, and $(0,1)\\mapsto(0,1)$.

<details><summary>Hint 1</summary>

Subtract the image of the origin from the other two images.

</details>

<details><summary>Hint 2</summary>

Use those two difference vectors as matrix columns, then find the fixed point.

</details>

<details><summary>Full solution</summary>

**Solution.** The vectors $(1,0)$ and $(0,1)$ map to $(0,1)$ and $(-1,0)$. This is a rotation by $\\pi/2$ about its fixed point $(0,1)$. The transformation is $(x,y)\\mapsto(1-y,1+x)$.

</details>

### Exercise 2

<span id="conics-transformations-ex-2"></span>
Show that the affine map $(x,y)\\mapsto(2x,y)$ maps the unit circle to an ellipse.

<details><summary>Hint 1</summary>

Write the inverse transformation before substituting into the circle equation.

</details>

<details><summary>Hint 2</summary>

Replace x by half the new first coordinate.

</details>

<details><summary>Full solution</summary>

**Solution.** If $x^{2}+y^{2}=1$, then $(x'/2)^{2}+y'^{2}=1$, so $x'^{2}/4+y'^{2}=1$. This is an ellipse with semiaxes $2$ and $1$.

</details>

### Exercise 3

<span id="conics-transformations-ex-3"></span>
Find the projective transformation that sends $[1:0:0]\\mapsto[0:1:0]$, $[0:1:0]\\mapsto[0:0:1]$, $[0:0:1]\\mapsto[1:0:0]$, and $[1:1:1]\\mapsto[1:1:1]$.

<details><summary>Hint 1</summary>

The images of the first three coordinate points determine the columns up to scale.

</details>

<details><summary>Hint 2</summary>

The fourth point requires those three column scales to agree.

</details>

<details><summary>Full solution</summary>

**Solution.** As in an earlier exercise, this is $[x:y:z]\\mapsto[z:x:y]$.

</details>

### Exercise 4

<span id="conics-transformations-ex-4"></span>
Show that the cross-ratio is preserved under affine transformations.

<details><summary>Hint 1</summary>

Use an affine coordinate along the common line.

</details>

<details><summary>Hint 2</summary>

All four differences acquire the same nonzero scale.

</details>

<details><summary>Full solution</summary>

**Solution.** An affine transformation has the form $x\\mapsto ax+b$ with $a\\neq 0$. For four collinear points with coordinates $x_{1},x_{2},x_{3},x_{4}$, the cross-ratio is

$$\\frac{(x_{3}-x_{1})(x_{4}-x_{2})}{(x_{3}-x_{2})(x_{4}-x_{1})}.$$

Under $x\\mapsto ax+b$, each difference $x_{i}-x_{j}$ becomes $a(x_{i}-x_{j})$. The factors $a$ cancel in the cross-ratio, so it is preserved.

</details>

### Exercise 5

<span id="conics-transformations-ex-5"></span>
A similarity transformation maps a triangle with sides $3,4,5$ to a triangle with longest side $15$. Find the other two sides.

<details><summary>Hint 1</summary>

The longest side remains longest under a positive uniform scale.

</details>

<details><summary>Hint 2</summary>

Compare fifteen with five to get the common factor.

</details>

<details><summary>Full solution</summary>

**Solution.** The scale factor is $k=15/5=3$. The other sides are $3\\cdot 3=9$ and $3\\cdot 4=12$.

</details>

### Exercise 6

<span id="conics-transformations-ex-6"></span>
Explain why area is not a projective invariant.

<details><summary>Hint 1</summary>

A counterexample from a subgroup is enough.

</details>

<details><summary>Hint 2</summary>

A nonunit dilation belongs to the projective group and changes the area of a unit square.

</details>

<details><summary>Full solution</summary>

**Solution.** It is enough to use the affine dilation $(x,y)\\mapsto(kx,ky)$, which is also projective. It multiplies every finite area by $k^2$, so the numerical area of a square changes whenever $k\\ne1$. Therefore area itself is not invariant under the projective group. Constant functions of area are trivially invariant, so the stronger claim that no function of area can be invariant would be false.

</details>


### Exercise 7

<span id="conics-transformations-ex-7"></span>

Map the unit circle by $(x,y)\\mapsto(2x+1,3y-2)$. Find the image equation, center, semiaxes, area and eccentricity. Which of these quantities illustrates a failure of similarity equivalence with the circle?

<details><summary>Hint 1</summary>

Express the old coordinates using the new ones before substituting.

</details>

<details><summary>Hint 2</summary>

The determinant scales area, while eccentricity uses the ratio of the shorter and longer semiaxes.

</details>

<details><summary>Full solution</summary>

The equation is $(X-1)^2/4+(Y+2)^2/9=1$. Its center is $(1,-2)$ and semiaxes are two horizontally and three vertically. The determinant is six, so area is six pi. Its eccentricity is $\\sqrt{1-4/9}=\\sqrt5/3$. The positive eccentricity, or equivalently the unequal axis ratio, prevents similarity equivalence to the circle. Different absolute area alone would not do so, since similarities are allowed to scale area. This map is affine but its two directional scale factors differ, so it is not a similarity.

</details>

### Exercise 8

<span id="conics-transformations-ex-8"></span>

For real a, apply $[X:Y:Z]=[x:y:z+ax]$ to the circle $x^2+y^2-z^2=0$. Determine the affine conic type in the chart Z one as a varies. Explain the transitions geometrically.

<details><summary>Hint 1</summary>

The inverse has z equal to Z minus aX. Substitute it into the source equation.

</details>

<details><summary>Hint 2</summary>

Compare one minus the square of a with zero. The new line at infinity pulls back to z plus ax zero.

</details>

<details><summary>Full solution</summary>

Substitution gives $(1-a^2)X^2+Y^2+2aX-1=0$. If $|a|<1$, completing the square yields a positive-definite quadratic with a positive level, hence an ellipse. If $|a|=1$, the X quadratic term vanishes but its linear coefficient is nonzero, giving a parabola. If $|a|>1$, the quadratic part is indefinite and its centered level is nonzero, giving a hyperbola. The pulled-back infinity line has respectively zero, one tangent, or two real intersections with the source circle. The homogeneous transformation remains invertible for every a; none of these transitions makes the projective conic singular. Only the selected affine chart changes its visible type.

</details>

### Exercise 9

<span id="conics-transformations-ex-9"></span>

For ordered collinear points with coordinates zero, one, two and three, compute the cross-ratio in the convention of Exercise 4. Apply $h(t)=t/(t+1)$ and compute it again. Compare this with the midpoint calculation above.

<details><summary>Hint 1</summary>

Keep the order of the four points fixed in both substitutions.

</details>

<details><summary>Hint 2</summary>

Their images are zero, one half, two thirds and three quarters.

</details>

<details><summary>Full solution</summary>

The original cross-ratio is $(2\\cdot2)/(1\\cdot3)=4/3$. After transformation it is

$$\\frac{(2/3)(3/4-1/2)}{(2/3-1/2)(3/4)}
=\\frac{1/6}{1/8}=\\frac43.$$

All four image points are finite and distinct. Cross-ratio is preserved even though the midpoint of zero and two does not map to their image midpoint. The calculation does not claim that every ratio of differences survives a projective map; the paired numerator and denominator are crucial. Reordering points can change the cross-ratio convention, so comparing values requires matching the ordering as well as the point set.

</details>

### Exercise 10

<span id="conics-transformations-ex-10"></span>

Can an invertible real projective transformation take a nonsingular real circle to a pair of intersecting lines? Can it take that circle to the real locus of $x^2+y^2+z^2=0$? Give different obstructions for the two proposals.

<details><summary>Hint 1</summary>

A pair of lines has a singular homogeneous matrix.

</details>

<details><summary>Hint 2</summary>

A projective transformation is a bijection on real projective points; the second proposed locus has none.

</details>

<details><summary>Full solution</summary>

The first proposal is impossible because the image matrix is obtained by invertible congruence and therefore retains rank three. A pair of lines has rank at most two, including the intersection singularity. The second proposal has an invertible but positive-definite matrix, so every real nonzero vector gives a strictly positive quadratic value and its real projective locus is empty. The circle has real points, whose images under an invertible real matrix remain real nonzero points. Thus nonemptiness obstructs the second proposal, independently of rank. This is why the projective equivalence statement requires both nonsingularity and a nonempty real locus.

</details>

## Looking backward and forward

This chapter organized geometry by transformation group, from the rigid motions of Euclidean geometry to the collineations of projective geometry. Each level preserves fewer invariants and allows more freedom.

The next chapter, **Projective Geometry**, develops homogeneous coordinates, cross-ratio and incidence as a focused study of conics. The projection chapters then use that language in spatial pictures and maps.

## Source and scope

This expansion preserves the original six exercises and their solutions and retains the earlier group summaries as preparation. The new writing develops their specific action on conics, matrix conventions, tangent incidence and real affine-chart changes. Spectral reduction and inertia are proved in the preceding coordinate chapter. General plane transformation classification belongs to the linked Geometry chapter rather than being counted as a new proof here.
`;export{e as default};