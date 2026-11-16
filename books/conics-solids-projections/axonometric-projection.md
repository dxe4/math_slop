
# Axonometric Projection

Axonometric projection is a pictorial representation of a three-dimensional object in a single view, obtained by projecting the object onto a plane along lines perpendicular to that plane. Unlike perspective projection, axonometric projection preserves parallelism: parallel lines have parallel or coincident images, with normal directions collapsing to points. This makes it ideal for technical illustration, architecture, and engineering graphics where known axis scales support coordinate constructions; arbitrary spatial distances still cannot be read directly from one image. This chapter classifies axonometric projections, derives their scaling properties, and explains how to construct them from orthographic data.

This is an L2 Euclidean projection chapter. It assumes orthogonal vectors and dot products, with the exact area/length arguments from Descriptive Geometry available as preparation. The picture axes below represent the three named spatial unit vectors. Their lengths and angles are constrained by a common orthographic projection, rather than chosen independently for visual effect.

## Definition and classification

An axonometric projection is an orthographic projection onto a single picture plane. The object is oriented so that three mutually perpendicular edges are visible, and these edges project to three axes in the picture plane. The angles between the projected axes and the scale factors along them determine the type of axonometric projection.

Let the three perpendicular spatial axes be $Ox$, $Oy$, $Oz$. Their projections on the picture plane make angles $\alpha$, $\beta$, $\gamma$ with each other and have scale factors (foreshortening ratios) $p$, $q$, $r$. The classification is:

- **Isometric:** $p=q=r$ (equal foreshortening along all three axes). The angles between axes are all $120^{\circ}$ in the standard orientation.
- **Dimetric:** two of $p,q,r$ are equal and the third is different. Typically $p=q\neq r$.
- **Trimetric:** $p$, $q$, $r$ are all different.

In practice, isometric projection is most common because it requires only one scale and one set of angles.

### A complete projection model

Let n be a unit normal to the picture plane through the origin. The orthogonal projection of a vector w is $w-(w\cdot n)n$. If n has components $n_1,n_2,n_3$, the projected unit axes are $v_i=e_i-n_in$. Their Gram matrix is

$$v_i\cdot v_j=\delta_{ij}-n_in_j.$$

In particular the squared axis scales are $p_i^2=1-n_i^2$, and their sum is two. If both scales are nonzero, the angle between two directed picture axes satisfies

$$\cos\theta_{ij}=\frac{-n_in_j}{p_ip_j}\quad(i\ne j).$$

This derives the angles from the same normal that produced the scales. A proposed drawing with the right scale sum but arbitrary axis angles need not be orthographic. Reversing one chosen spatial axis changes some directed angles without changing the three scales; standard isometric angles assume the displayed orientation of all three positive directions.

There is also a converse for the scales alone. Numbers between zero and one whose squared sum is two can always be realized: choose signed components $n_i=\pm\sqrt{1-p_i^2}$. Their squared sum is one, so they define a unit projection normal and give precisely those scales. The signs then determine the angle possibilities. If a scale is zero an axis collapses. If a component of n is zero, the corresponding axis retains full length and the other two can align in projection. Ordinary three-axis pictorial views avoid such limiting coincidences by taking all normal components nonzero and all scales positive. The formulas still explain their limits without pretending that a collapsed axis has a defined picture angle.

## Isometric projection

In isometric projection, the picture plane is equally inclined to the three coordinate axes. This means the direction of projection makes equal angles with all three axes. The foreshortening ratio along each axis is

$$p=q=r=\sqrt{\frac{2}{3}}\approx 0.8165.$$

The projected axes make $120^{\circ}$ angles with each other. One axis (usually the vertical) is drawn vertically, and the other two are drawn at $30^{\circ}$ to the horizontal.

### Derivation of the foreshortening ratio

Consider a unit cube with edges along the coordinate axes. The direction of projection is along the vector $(1,1,1)$, which makes equal angles with all three axes. The angle $\theta$ between $(1,1,1)$ and any axis satisfies $\cos\theta=1/\sqrt{3}$. The picture plane is perpendicular to $(1,1,1)$. The foreshortening of a unit segment along the x-axis is the length of its projection onto the picture plane, which is $\sin\theta=\sqrt{1-1/3}=\sqrt{2/3}$.

### Isometric scale

Because the foreshortening ratio is $\sqrt{2/3}$, measurements along isometric axes must be multiplied by this factor. In practice, drafters often use an isometric scale where true lengths are drawn at approximately $82\%$ of actual size. Alternatively, an **isometric drawing** (as opposed to a true isometric projection) uses full scale along the axes for convenience, accepting the resulting distortion.

### Worked example 1: actual isometric picture coordinates

Choose orthonormal picture directions $a=(1,-1,0)/\sqrt2$ and $b=(-1,-1,2)/\sqrt6$, both perpendicular to $(1,1,1)$. Taking dot products gives the two-dimensional coordinate map

$$P(x,y,z)=\left(\frac{x-y}{\sqrt2},\frac{-x-y+2z}{\sqrt6}\right).$$

The three coordinate unit vectors map to $(1/\sqrt2,-1/\sqrt6)$, $(-1/\sqrt2,-1/\sqrt6)$ and $(0,2/\sqrt6)$. Each has squared length two thirds; each distinct pair has dot product minus one third. Their directed pairwise cosines are therefore minus one half, proving the standard one-hundred-twenty-degree arrangement as well as the common scale.

A spatial point $(2,1,3)$ maps to $(1/\sqrt2,3/\sqrt6)$. Its image distance from the origin is the square root of two, whereas its spatial distance is the square root of fourteen. The missing component lies along the normal: its scalar size is twice the square root of three, whose square accounts for the difference of twelve. This example illustrates why applying the common axis scale to an arbitrary spatial segment is wrong. Equal axis foreshortening does not mean equal foreshortening in every spatial direction.

Multiplying the whole picture by $\sqrt{3/2}$ makes every projected unit axis have drawn length one. That is the usual full-scale isometric drawing. It is a uniform enlargement of this picture, preserving all picture angles but changing every picture area by three halves. It does not make the map an isometry of three-dimensional space or restore the missing depth. The projection still has a kernel: all points differing by a multiple of $(1,1,1)$ have the same image.

## Dimetric projection

In dimetric projection, two axes are foreshortened equally and the third differently. A realizable example is $p=q=\sqrt{7/8}$ and $r=1/2$. It satisfies the necessary orthographic relation $p^2+q^2+r^2=2$. The corresponding projection direction can have direction cosines $(1/(2\sqrt2),1/(2\sqrt2),\sqrt3/2)$; projected-axis angles then follow from the projected dot products $e_i\cdot e_j-l_i l_j=-l_i l_j$ for $i\ne j$.

### Worked example 2: recover the dimetric axis angles

For the stated dimetric normal, the squared first and second components are each one eighth and the third is three quarters. Subtracting from one gives squared scales seven eighths, seven eighths and one quarter, agreeing with the proposed values. The cosine between the first two projected positive axes is minus one seventh. Between either of those and the third axis it is minus the square root of three sevenths. These are the angles that accompany these scales when all three normal components are positive.

The equal first two scales follow from symmetry of the first two normal components, but the first-to-second picture angle need not equal the other angles. A different sign choice can reverse some of the directed angles. A technical drawing must therefore specify both its axis directions and its scale convention. Copying familiar thirty-degree isometric axis slopes while substituting these dimetric lengths does not automatically describe the intended orthographic view.

## Trimetric projection

Trimetric projection has three different foreshortening ratios. It offers the most freedom in choosing the orientation but requires three separate scales. The angles between the projected axes are determined by the condition that the three axes were originally perpendicular in space.

If the direction cosines of the projection direction with respect to the coordinate axes are $(l,m,n)$, then the foreshortening ratios are

$$p=\sqrt{1-l^{2}},\qquad q=\sqrt{1-m^{2}},\qquad r=\sqrt{1-n^{2}},$$

and the angles between the projected axes satisfy relations derived from the orthogonality of the original axes.

## Why a coordinate-plane circle becomes an ellipse

Let a circle of radius R lie in a plane with unit normal m. Suppose first that the object and picture planes are neither parallel nor perpendicular. A unit vector e along their intersection is perpendicular to both normals, so it retains unit length under projection. Choose the perpendicular unit vector f in the circle's plane. The vector n lies in the plane spanned by m and f. Hence $(f\cdot n)^2=1-(m\cdot n)^2$, giving projected f length $|m\cdot n|$. Its projected direction remains perpendicular to e because e is perpendicular to both f and n.

Parametrize the circle as its center plus $R(e\cos t+f\sin t)$. The projected perpendicular components have amplitudes R and $R|m\cdot n|$, proving the ellipse semiaxes. If the planes are parallel, every in-plane direction is preserved and the image is a circle. If they are perpendicular, the second amplitude vanishes and the image is a segment traced twice. Those limiting cases should not be reported as a regular ellipse with two positive axes.

### Worked example 3: the isometric ellipse's axes are not the picture axes

For a circle in the xy-plane, m is the vertical unit vector and the isometric normal is $(1,1,1)/\sqrt3$. The semiaxes are R and $R/\sqrt3$. The unchanged direction in the source plane is $(1,-1,0)/\sqrt2$, along the intersection of the source and picture planes. The perpendicular source direction is $(1,1,0)/\sqrt2$. Their projected directions are the ellipse's principal directions.

Neither principal direction is simply the projected x or y unit axis. Those individual axes both shorten by $\sqrt{2/3}$, but they are not perpendicular in the image. Treating their two equal scale lengths as ellipse semiaxes would falsely draw a circle. A radius-five source circle therefore has semiaxes five and five divided by the square root of three in the true projection, agreeing with the exercise below. An ellipse construction must account for the oblique conjugate diameters or use these principal directions.

## Constructing an axonometric view from orthographic views

Given the front and top views of an object, an axonometric view can be constructed by:

1. Choosing the axonometric axes in the picture plane.
2. Transferring coordinates from the orthographic views along the axonometric axes using the appropriate scale factors.
3. Connecting the points to form the axonometric image.

Matched point identities and a declared common origin are required when transferring coordinates from the two views. Two views with inconsistent shared coordinates cannot be repaired by choosing new picture slopes. Connecting vertices also requires actual edge or face data; the projected points do not determine all connectivity. Hidden-line choices belong to the declared object and viewing direction, rather than being an automatic consequence of its coordinate list.

## Common errors

- **Confusing isometric projection with isometric drawing.** True isometric projection uses foreshortening $\sqrt{2/3}$; a full-scale isometric drawing is a uniformly enlarged image and requires that different scale convention.
- **Measuring angles in the axonometric view as true angles.** Planes parallel to the picture plane guarantee true measure for all their angles. An individual angle in an oblique plane may also agree, so measuring a projected angle still requires checking its spatial geometry.
- **Using the wrong scale on different axes.** In dimetric and trimetric projections, each axis has its own scale factor.
- **Drawing circles as circles.** A coordinate-plane circle generally projects as an ellipse, with a circle or segment in limiting plane orientations. The projected coordinate diameters need not be its perpendicular principal axes.

## Practice exercises with solutions

### Exercise 1

<span id="conics-axonometric-ex-1"></span>
Find the foreshortening ratio in isometric projection and show that it equals $\sqrt{2/3}$.

<details><summary>Hint 1</summary>

Use the unit normal with three equal positive components.

</details>

<details><summary>Hint 2</summary>

The retained squared length is one minus the squared normal component.

</details>

<details><summary>Full solution</summary>

**Solution.** The projection direction $(1,1,1)$ makes angle $\theta$ with each axis, where $\cos\theta=1/\sqrt{3}$. The foreshortening is $\sin\theta=\sqrt{1-\cos^{2}\theta}=\sqrt{1-1/3}=\sqrt{2/3}\approx 0.8165$.

</details>

### Exercise 2

<span id="conics-axonometric-ex-2"></span>
An isometric drawing shows a cube with edge length $10$ cm measured along the isometric axes. What is the true edge length of the cube if the drawing is a true isometric projection?

<details><summary>Hint 1</summary>

Clarify whether ten is a projected length or a full-scale drawing length.

</details>

<details><summary>Hint 2</summary>

For the true projection divide by the common foreshortening.

</details>

<details><summary>Full solution</summary>

**Solution.** In a true isometric projection, the drawn length is the true length times $\sqrt{2/3}$. So the true length is $10/\sqrt{2/3}=10\sqrt{3/2}=5\sqrt{6}\approx 12.25$ cm. If it is an isometric drawing (full scale), the true edge length is $10$ cm.

</details>

### Exercise 3

<span id="conics-axonometric-ex-3"></span>
A circle of radius $5$ lies in the $xy$-plane. Find the lengths of the semiaxes of its isometric projection.

<details><summary>Hint 1</summary>

Use the unchanged intersection direction and its perpendicular in the source plane.

</details>

<details><summary>Hint 2</summary>

The shorter scale is the absolute dot product of the two plane normals.

</details>

<details><summary>Full solution</summary>

**Solution.** Orthogonal projection restricted to the $xy$-plane has singular values $1$ and $|e_z\cdot(1,1,1)/\sqrt3|=1/\sqrt3$: the direction in the intersection of the two planes is unchanged, while its perpendicular in the source plane is shortened by the cosine of the planes' angle. Therefore the projected circle is an ellipse with semiaxes $5$ and $5/\sqrt3\approx2.887$.

</details>

### Exercise 4

<span id="conics-axonometric-ex-4"></span>
In a dimetric projection with $p=q=\sqrt{7/8}$ and $r=1/2$, a line segment of true length $8$ lies along the $z$-axis. What is its projected length?

<details><summary>Hint 1</summary>

This segment lies along exactly the named third axis.

</details>

<details><summary>Hint 2</summary>

Multiply its true length by r, not by either equal first-axis scale.

</details>

<details><summary>Full solution</summary>

**Solution.** The projected length is $8\cdot r=8\cdot(1/2)=4$.

</details>

### Exercise 5

<span id="conics-axonometric-ex-5"></span>
Show that in any axonometric projection, the sum of the squares of the foreshortening ratios satisfies $p^{2}+q^{2}+r^{2}=2$.

<details><summary>Hint 1</summary>

The squared normal components sum to one.

</details>

<details><summary>Hint 2</summary>

Each projected squared scale is one minus one of those components.

</details>

<details><summary>Full solution</summary>

**Solution.** Let the direction cosines of the projection direction be $(l,m,n)$ with $l^{2}+m^{2}+n^{2}=1$. The foreshortening ratios are $p=\sqrt{1-l^{2}}$, $q=\sqrt{1-m^{2}}$, $r=\sqrt{1-n^{2}}$. Then

$$p^{2}+q^{2}+r^{2}=(1-l^{2})+(1-m^{2})+(1-n^{2})=3-(l^{2}+m^{2}+n^{2})=3-1=2.$$

For isometric projection, $p=q=r=\sqrt{2/3}$, and $3\cdot(2/3)=2$, confirming the formula.

</details>

### Exercise 6

<span id="conics-axonometric-ex-6"></span>
A trimetric projection has foreshortening ratios $p=0.9$ and $q=0.8$. Find $r$.

<details><summary>Hint 1</summary>

Use the squared-scale sum, then check that each proposed scale lies between zero and one.

</details>

<details><summary>Hint 2</summary>

The remaining squared value is two minus the two given squares.

</details>

<details><summary>Full solution</summary>

**Solution.** Using $p^{2}+q^{2}+r^{2}=2$:

$$r^{2}=2-0.9^{2}-0.8^{2}=2-0.81-0.64=0.55,$$

so $r=\sqrt{0.55}\approx 0.7416$.

</details>


### Exercise 7

<span id="conics-axonometric-ex-7"></span>

A proposed orthographic view has first and second axis scales both one half and third scale the square root of three halves. The squared scales sum to two. Is it realizable? State the missing condition.

<details><summary>Hint 1</summary>

Orthogonal projection cannot increase the length of a unit vector.

</details>

<details><summary>Hint 2</summary>

Every individual scale must lie between zero and one, in addition to the sum condition.

</details>

<details><summary>Full solution</summary>

It is not realizable as an unrescaled orthographic view because the third scale exceeds one. Its required squared normal component would be one minus three halves, a negative number. The squared-scale sum is necessary but is not sufficient without the three interval restrictions. When those restrictions do hold, the square-root normal construction proves sufficiency for the scales; compatible picture angles must then also be selected. A uniform enlargement of a drawing would be a different stated convention and cannot silently repair a claim about the true projection scales.

</details>

### Exercise 8

<span id="conics-axonometric-ex-8"></span>

For the explicit isometric map P, compare the images of $(2,1,3)$ and $(3,2,4)$. Can a single image determine the full spatial point without another depth constraint?

<details><summary>Hint 1</summary>

The two points differ by $(1,1,1)$.

</details>

<details><summary>Hint 2</summary>

Both rows of the picture matrix are perpendicular to that vector.

</details>

<details><summary>Full solution</summary>

Both image coordinates are $1/\sqrt2$ and $3/\sqrt6$. The added normal vector lies in the projection kernel, so it changes no picture coordinate. In fact every point obtained by adding any real multiple of that vector has the same image. A known surface, matched orthographic depth data or another independent constraint is needed to select a particular spatial point. Equal axis scales do not make the map invertible; a two-dimensional picture still discards one spatial direction.

</details>

### Exercise 9

<span id="conics-axonometric-ex-9"></span>

A radius-R circle in the xy-plane is shown in a full-scale isometric drawing obtained by uniformly enlarging the true projection until the spatial unit axes have drawn length one. Find the two drawn ellipse semiaxes and their ratio.

<details><summary>Hint 1</summary>

The true projection semiaxes are R and R divided by the square root of three.

</details>

<details><summary>Hint 2</summary>

Multiply both by the common enlargement factor, the square root of three halves.

</details>

<details><summary>Full solution</summary>

The drawn semiaxes are $R\sqrt{3/2}$ and $R/\sqrt2$, with ratio the square root of three. The common enlargement changes absolute lengths but preserves that ratio, so the image remains an ellipse. Its major semiaxis exceeds the source radius under this drawing convention, even though a true orthogonal projection could not increase a vector length. This is no contradiction: the additional picture enlargement is explicitly part of the drawing, not an orthographic foreshortening factor.

</details>

### Exercise 10

<span id="conics-axonometric-ex-10"></span>

For an arbitrary orthographic picture normal n and a source-circle plane normal m, explain exactly when the circle image is a circle, a nondegenerate unequal-axis ellipse, or a segment. Assume both normals are unit vectors.

<details><summary>Hint 1</summary>

Use the semiaxes R and R times the absolute dot product of the normals.

</details>

<details><summary>Hint 2</summary>

The absolute dot product lies between zero and one, with endpoint cases corresponding to perpendicular or parallel planes.

</details>

<details><summary>Full solution</summary>

When the absolute dot product equals one the planes are parallel, both semiaxes equal R and the image is a circle. When it lies strictly between zero and one, the image is an ellipse with distinct positive semiaxes. At zero the source plane is edge-on and the circle projects onto a segment of length twice R, traced twice as the source parameter goes once around. The circle itself never disappears, but the regular parametrized ellipse degenerates at this last case. These alternatives depend on the two plane orientations, not on whether the circle happens to be labeled horizontal or vertical in one coordinate system.

</details>

## Looking backward and forward

This chapter classified axonometric projections by their foreshortening ratios and derived the fundamental relation $p^{2}+q^{2}+r^{2}=2$. Isometric projection, with its single scale and symmetric axes, is the workhorse of technical illustration. Dimetric and trimetric projections offer more flexibility at the cost of additional scales.

The next chapter, **Map Projections**, compares several sphere-to-plane constructions. Their local distortion criteria differ from the fixed linear foreshortening of an axonometric view, so the appropriate measurement question must be stated afresh.

## Source and scope

The original Atlas axonometric chapter and its six exercise statements/solutions remain, with new proofs and four further questions. The normal/Gram model, realizability converse, explicit isometric matrix, dimetric angle calculation and circle-to-ellipse proof develop the commissioned L2 scope. All formulas use exact Euclidean unit-axis conventions. A full-scale drawing is explicitly distinguished from the true orthographic image; no engineering-standard compliance, hidden-surface reconstruction or executed numerical evidence is claimed.
