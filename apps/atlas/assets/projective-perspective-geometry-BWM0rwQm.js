var e=`---
id: deep-dive-projective-perspective-geometry
title: "Perspective and Projective Geometry: What a Camera Keeps"
license: CC BY-SA 4.0
---

# Perspective and Projective Geometry: What a Camera Keeps

**Before reading.** Read [Coordinates: Lines, Distance and Circles](../books/euclidean-geometry-trigonometry/coordinates-lines-distance-circles.md), [Linear Maps, Isomorphism, and Rank–Nullity](../books/linear-algebra-structure-proofs/linear-maps-isomorphism-rank-nullity.md) and [Tiny Worlds, Precise Claims: Logic Before Formalism](../deep-dives/logic-worlds-before-symbols.md). These are preparation for the ideas used below.

A perspective image turns parallel railway tracks into lines meeting at a vanishing point. Euclidean length and angle have changed, but incidence remains: points on one spatial line still appear on one image line. Projective geometry studies exactly this larger family of transformations.

This deep dive assumes coordinate geometry, matrices, and proof fluency. It distinguishes an ideal pinhole projection from real lenses, calibrated cameras, and claims about an unknown three-dimensional scene.

## Entry check and route

Before continuing, verify that you can multiply a $3\\times3$ matrix by a vector, solve two simultaneous linear equations, and explain why the nonzero multiples of a normal vector describe the same Euclidean line. If any of these are unfamiliar, use [Linear Transformations as Geometry](#/item/course-linear-transformations) first.

Sections 1–4 build the homogeneous language and interpret vanishing points. Sections 5–7 isolate the invariants. Sections 8–10 explain construction and rectification, including what the model cannot recover. Work through the join-and-meet calculation in Section 2 before treating homogeneous coordinates as mere notation.

## 1. The pinhole map

Place a camera center at the origin and image plane at $Z=f>0$. A scene point $(X,Y,Z)$ with $Z>0$ lies on a ray

$$t(X,Y,Z)$$

It reaches the image plane when $tZ=f$, so image coordinates are

$x=fX/Z$, $y=fY/Z$.

Multiplying $(X,Y,Z)$ by any positive number leaves $(x,y)$ unchanged. The image records a direction ray, not distance along it. One view cannot recover depth without extra scene structure, multiple views, focus cues, or calibration assumptions.

Points with $Z=0$ have no finite image in this chart. Their directions correspond to points at infinity. Points with $Z<0$ lie behind the ideal camera; a rendering pipeline must clip or interpret them before division.

## 2. Homogeneous coordinates

A projective point in the plane is a nonzero triple

$$[x:y:w]$$

where multiplying all coordinates by a nonzero scalar gives the same point. When $w\\ne 0$, the affine point is $(x/w,y/w)$. When $w=0$, the point is an ideal direction.

A projective line is a nonzero triple $\\ell=[a:b:c]$ representing

$$ax+by+cw=0$$

also up to nonzero scale. Incidence is one dot product: $\\ell^{T}p=0$.

Two distinct points determine their joining line by cross product

$$\\ell=p\\times q$$

Two distinct lines meet at

$$p=\\ell\\times m$$

Parallel affine lines have an intersection with $w=0$. The exceptional cases remain visible instead of being reported as a failed division.

### Worked join and meet

**Worked example.**

Take affine points $P=(1,2)$ and $Q=(4,3)$, represented by

$$p=[1:2:1],\\qquad q=[4:3:1].$$

Their joining line is

$$p\\times q=[-1:3:-5],$$

which represents $-x+3y-5w=0$. Substituting either point verifies incidence.

Now consider the vertical affine line $x=2$, represented by $m=[1:0:-2]$. Its intersection with the first line is

$$[-1:3:-5]\\times[1:0:-2]=[-6:-7:-3].$$

Dividing by the last coordinate gives the affine point $(2,7/3)$. Indeed, $-2+3(7/3)-5=0$. The calculation uses the same cross product for ordinary and ideal intersections; only the final value of $w$ tells us which kind occurred.

The cross product is zero when the two input projective points are actually the same point, or when the two input lines are actually the same line. This is a geometric degeneracy, not a numerical answer.

## 3. Projective transformations

An invertible $3\\times 3$ matrix $H$ maps a point by

$$p\\mapsto Hp$$

Since overall scale does not matter, $H$ and $\\lambda H$ define the same map for nonzero $\\lambda$. Lines transform by

$$\\ell\\mapsto H^{-T}\\ell$$

because incidence must satisfy $(H^{-T}\\ell)^{T}(Hp)=\\ell^{T}p$.

A projective map preserves:

- incidence of points and lines;
- collinearity and concurrency;
- tangency and conic structure;
- cross-ratio of four collinear points.

It does not generally preserve length, angle, midpoint, area, parallelism, or ordinary ratios. Affine maps are the subgroup preserving the chosen line at infinity; Euclidean similarities preserve the additional circular structure needed for angles.

## 4. Vanishing points and horizons

Consider spatial parallel lines with direction vector $d=(d_{X},d_{Y},d_{Z})$. Their projected images meet at vanishing point

$$[f d_{X}:f d_{Y}:d_{Z}]$$

If $d_{Z}=0$, this point lies at infinity in the image and the projected lines remain parallel. All directions within one spatial plane produce vanishing points lying on one image line, the plane’s vanishing line. For a horizontal ground plane this is the horizon under the chosen camera frame.

A detected image convergence is not automatically evidence of physically parallel lines. It can also arise from unrelated lines meeting in space, distortion, or detection error. Projective reconstruction needs a declared scene and camera model.

### Reading a vanishing point

With focal length $f=2$, spatial direction $d=(3,1,2)$ has vanishing point

$$[6:2:2]=[3:1:1],$$

so the finite image location is $(3,1)$. Direction $(3,1,0)$ instead produces $[6:2:0]=[3:1:0]$, an ideal point. Changing $d$ by a nonzero scale does not change either answer because a direction has no preferred length.

## 5. Cross-ratio

For four distinct collinear affine coordinates $a,b,c,d$, define the directed cross-ratio

$$(a,b;c,d)=((c-a)/(c-b))/((d-a)/(d-b))$$

Equivalent sign conventions exist, so point order must be stated. Fractional-linear maps

$$x\\mapsto (\\alpha x+\\beta)/(\\gamma x+\\delta)$$

preserve cross-ratio wherever denominators are defined. This invariant makes projective measurement possible once enough reference points are known.

### Worked value

For $a=0,b=1,c=2,d=4$,

$$(0,1;2,4)=(2/1)/(4/3)=3/2$$

Ordinary spacings 1,1,2 need not survive a perspective map, but this directed combination does.

### Why the cross-ratio survives

Let

$$T(x)=\\frac{\\alpha x+\\beta}{\\gamma x+\\delta},
\\qquad \\alpha\\delta-\\beta\\gamma\\ne0.$$

For two finite inputs whose denominators do not vanish,

$$
T(u)-T(v)
=\\frac{(\\alpha\\delta-\\beta\\gamma)(u-v)}
{(\\gamma u+\\delta)(\\gamma v+\\delta)}.
$$

Insert this difference formula into

$$
\\frac{(T(c)-T(a))/(T(c)-T(b))}
{(T(d)-T(a))/(T(d)-T(b))}.
$$

The determinant factors and every denominator factor cancel, leaving

$$\\frac{(c-a)/(c-b)}{(d-a)/(d-b)}.$$

That is the original cross-ratio. Homogeneous coordinates extend the statement cleanly when one of the points is at infinity.

**Boundary.** A cross-ratio becomes a usable measurement only after four collinear scene points have been identified in the image and their order or reference values are known. The invariant does not label those correspondences for us.

## 6. Conics transform to conics

A projective conic is described by

$$p^{T}Cp=0$$

with symmetric $3\\times 3$ matrix $C$, up to nonzero scale. Under $p'=Hp$, its matrix becomes

$$C'=H^{-T}CH^{-1}$$

Thus a nondegenerate conic remains a nondegenerate conic. In an affine chart, a circle can appear as an ellipse. A parabola and hyperbola differ from an ellipse by how they meet the chosen line at infinity; changing the affine chart changes that classification while retaining the projective conic.

This explains why a photograph of a circular plate is usually an ellipse. It does not prove that every observed ellipse came from a circle: many scene conics project to the same image conic.

## 7. Duality

Projective-plane statements often remain true after swapping “point” with “line” and “join” with “meet.” For example:

- two distinct points determine a line;
- two distinct lines determine a point.

Matrix conics also have a dual description of tangent lines. If $C$ is invertible and point $p$ lies on the conic, its tangent line is proportional to $Cp$. The envelope of tangents is represented by $C^{-1}$ in dual coordinates.

Duality is a theorem inside a specified projective setting, not permission to swap arbitrary nouns in a Euclidean metric theorem.

### Tangent calculation

For the unit circle

$$x^{2}+y^{2}-w^{2}=0,$$

take $C=\\operatorname{diag}(1,1,-1)$. At $p=[3:4:5]$, which lies on the conic because $9+16-25=0$, the tangent line is

$$Cp=[3:4:-5].$$

Its equation $3x+4y-5w=0$ contains $p$ because $p^{T}Cp=0$. In the affine chart, this is the familiar tangent $3x+4y=5$ at $(3/5,4/5)$ after normalizing the point.

## 8. Perspective construction

To construct a one-point perspective grid:

1. choose a horizon and vanishing point $V$;
2. draw front-plane equally spaced marks;
3. join those marks to $V$;
4. use a diagonal construction or second calibrated direction to locate successive depth lines.

Guessing equal pixel gaps into depth is wrong because perspective spacing is fractional-linear, not linear. An artistic construction can be internally projective even without representing a measured camera.

Two-point perspective uses two horizontal vanishing points for two spatial direction families. Three-point perspective adds a vertical vanishing point. Whether a direction has a finite vanishing point depends on camera orientation and chosen image chart.

The construction controls incidence but does not by itself make an image physically calibrated. A chosen horizon says which image line represents directions in a plane. It does not supply focal length, camera position, or real-world units.

## 9. Rectification and calibration boundaries

If four image points correspond to four known noncollinear points on one physical plane, a homography can map between their projective coordinates, provided no three chosen reference points make the system degenerate in the required way. This can rectify a photographed page or floor tile.

Rectification does not recover objects off that plane. Lens distortion is not a homography and should be calibrated separately. Measurement in a rectified image inherits uncertainty from feature locations, reference coordinates, conditioning, and the assumption of planarity.

### Why four point pairs appear

A $3\\times3$ matrix has nine entries, but overall nonzero scale is irrelevant, leaving eight degrees of freedom. Each point correspondence supplies two independent scalar equations. Four correspondences therefore give eight equations. In general position—no three points of either projective frame collinear—they determine one homography.

Counting equations is only a first check. Nearly collinear reference points or a very narrow quadrilateral can make reconstruction numerically unstable. More than four noisy correspondences are normally fitted in a normalized least-squares procedure, often with a robust method when some proposed matches may be wrong.

### Exact four-corner example

Consider the matrix

$$
H=
\\begin{pmatrix}
6&0&0\\\\
0&2&0\\\\
0&-1&3
\\end{pmatrix}.
$$

It sends the unit-square corners

$$
(0,0),\\ (1,0),\\ (1,1),\\ (0,1)
$$

to the trapezoid corners

$$
(0,0),\\ (2,0),\\ (3,1),\\ (0,1),
$$

respectively. For example,

$$H[1:1:1]=[6:2:2]=[3:1:1].$$

The square centre $[1/2:1/2:1]$ maps to $[3:1:5/2]=[6/5:2/5:1]$, not to the arithmetic average $(5/4,1/2)$ of the four trapezoid vertices. It is, however, the intersection of the trapezoid’s diagonals because homographies preserve lines and their intersections. This separates an affine idea, arithmetic averaging, from a projective one, incidence.

## 10. Worked exercises

### 1. Image point

<a id="deep-dive-projective-perspective-geometry-ex-1"></a>

**Exercise 1.**

With $f=3$, project $(2,-1,6)$.


<details>
<summary>Hint 1</summary>

Pinhole projection divides the first two coordinates by depth.
</details>
<details>
<summary>Hint 2</summary>

Multiply those ratios by focal length three, retaining the sign of the second coordinate.
</details>
<details>
<summary>Solution</summary>

$(x,y)=(3\\cdot 2/6,3\\cdot (-1)/6)=(1,-1/2)$.

</details>

### 2. Ideal intersection

<a id="deep-dive-projective-perspective-geometry-ex-2"></a>

**Exercise 2.**

Find the homogeneous intersection of affine lines $y=0$ and $y=1$.


<details>
<summary>Hint 1</summary>

Write each affine line as a homogeneous line vector.
</details>
<details>
<summary>Hint 2</summary>

Take their cross product; a zero final coordinate signals their intersection at infinity.
</details>
<details>
<summary>Solution</summary>

Lines are $[0:1:0]$ and $[0:1:-1]$. Their cross product is proportional to $[1:0:0]$, an ideal point in the horizontal direction ($w=0$).

</details>

### 3. Incidence under a homography

Prove transformed point remains on transformed line.

**Answer.** If $\\ell^{T}p=0$, then $(H^{-T}\\ell)^{T}(Hp)=\\ell^{T}H^{-1}Hp=\\ell^{T}p=0$.

### 4. Circle nonclaim

An image curve is an ellipse. Can one conclude the scene curve was a circle?

**Answer.** No. A circle under generic perspective does project to a conic, often an ellipse in the image chart, but other planar conics and spatial configurations can produce the same image locus without additional calibration.

### 5. A transformed line

Let

$$
H=
\\begin{pmatrix}
2&0&0\\\\
0&1&0\\\\
0&0&1
\\end{pmatrix}
$$

and let $\\ell=[1:1:-1]$. Find the transformed line.

**Answer.** Since lines transform by $H^{-T}$,

$$
H^{-T}\\ell=
\\begin{pmatrix}
1/2&0&0\\\\
0&1&0\\\\
0&0&1
\\end{pmatrix}
\\begin{pmatrix}
1\\\\1\\\\-1
\\end{pmatrix}
=[1/2:1:-1].
$$

Thus the image line is $x/2+y-w=0$. A point such as $[0:1:1]$ on the original line remains incident after transformation.

### 6. Cross-ratio retrieval

Compute $(0,2;3,6)$ using this article’s convention.

**Answer.**

$$
(0,2;3,6)
=\\frac{(3-0)/(3-2)}{(6-0)/(6-2)}
=\\frac{3}{6/4}=2.
$$

If your value differs, first check the point order. Permuting the four points can produce related values such as $1/r$, $1-r$, or $r/(r-1)$.

### 7. Recovery boundary

A photograph shows a quadrilateral. List two claims that require additional information before they can be justified.

**Answer.** Examples include “the original object was a rectangle,” “these sides had equal physical length,” “this corner was a right angle,” and “this point was the Euclidean midpoint.” A homography preserves the quadrilateral’s incidences, but these are metric or affine claims. Calibration, scene constraints, or reference measurements are needed.

## Synthesis task: rectify and audit

Choose four corners of a photographed planar object or use the exact trapezoid above. State the source-plane coordinates assigned to them, compute or use a homography, and map at least three additional points. Your account must include:

1. the point correspondences and why they are plausible;
2. one incidence relation that survives the map;
3. one metric or affine relation that need not survive;
4. one source of measurement uncertainty;
5. one claim that the single planar homography cannot support.

For a proof-focused version, verify the corner images algebraically and show that the intersection of two source lines maps to the intersection of their image lines. For a computational version, report the residual error at all reference points and test sensitivity by perturbing each selected pixel location.

## Continue

Use [Analytic and Computational Geometry](#/item/book-analytic-computational-geometry) for robust homogeneous and intersection code, [Conics, Solids, and Projection](#/item/book-conics-solids-projections) for spatial sections, and the [measurement recipe](#/item/recipe-geometric-measurement-construction) for uncertainty and calibration. Projective geometry preserves a powerful skeleton of incidence precisely because it gives up Euclidean measurement; always name which structure a claim uses.
`;export{e as default};