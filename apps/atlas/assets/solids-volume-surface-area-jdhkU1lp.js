var e=`---
parent_id: book-euclidean-geometry-trigonometry
chapter_id: solids-volume-surface-area
title: "Solids: Volume, Surface Area and Cross-Sections"
level: secondary
license: "CC BY-SA 4.0"
---

# Solids: Volume, Surface Area and Cross-Sections

A solid has several different measurements. Volume describes the space it occupies, surface area describes the area of its boundary, and a cross-section describes the planar figure made by a slice. They are related, but one cannot be substituted for another. A tall narrow container can have the same volume as a short wide one while using a different amount of material.

Required preparation is [Area and the Pythagorean Theorem](area-pythagorean-theorem.md), similarity, and circle area and circumference. We use ideal geometric solids with exact dimensions unless measurements are explicitly approximate. Lengths use one consistent unit; areas use its square and volumes its cube.

The question of this chapter is how two-dimensional geometry controls three-dimensional measurement. Nets turn some surfaces into plane figures. Slices compare volumes. Similarity determines how a cross-section changes with height. These tools explain the formulas rather than leaving them as an unrelated list.

## Bases, heights and units

**Definition 15.1 (Prism, cylinder, pyramid and cone).** A prism has two congruent parallel polygonal bases joined by parallel edges. A cylinder has two congruent parallel circular bases joined by parallel straight generators. A pyramid joins every point of a polygonal base to one apex outside its plane. A circular cone does the same with a circular base. The height is the perpendicular distance between the base planes, or from the apex to the base plane.

In this chapter, surface-area formulas for cylinders and cones refer to right circular solids: their axes meet the base perpendicularly at its centre. The volume formulas depend on base area and perpendicular height and extend more widely, but a slant edge cannot replace that height.

**Result 15.2 (Prism and cylinder volumes).** A prism or cylinder with base area $B$ and perpendicular height $h$ has volume $Bh$.

The rule agrees with counting unit cubes in a rectangular box. For general bases, subdividing the base into small pieces and extending each through the same height gives the same base-area-times-height relationship. We use the ordinary geometric volume principles: disjoint pieces add, congruent solids have equal volume, and stretching three perpendicular directions by factors $p,q,r$ multiplies volume by $pqr$.

Another useful principle is Cavalieri's: solids between the same two parallel planes have equal volumes if their cross-sectional areas agree at every height. It is a volume-comparison principle, not the claim that one convenient slice determines a whole solid. Its full analytical foundation belongs to later study; here we state the principle and use it explicitly.

## Surface area from a net

A right circular cylinder of radius $r$ and height $h$ unwraps into a rectangle of width $2\\pi r$ and height $h$. Its curved area is therefore $2\\pi rh$. A closed cylinder includes two circular bases, giving
$$
S=2\\pi rh+2\\pi r^2.
$$
An open container may include only one base. The word “surface” must be interpreted according to which pieces of material are actually present.

**Example 15.3 (An open cylindrical container).** An ideal cylindrical container has radius three centimetres, height eight centimetres and no lid. Its volume is
$$
V=\\pi(3)^2(8)=72\\pi\\text{ cm}^3.
$$
Its curved area is $2\\pi(3)(8)=48\\pi$ square centimetres. Adding its one base gives material area $48\\pi+9\\pi=57\\pi$ square centimetres. If a flat circular lid is added, total area becomes $66\\pi$ square centimetres, but capacity stays the same in the zero-thickness model.

The volume uses the height once and the radius twice. The surface terms each contain two length factors. These dimensional checks do not prove a formula, but they immediately expose an answer with area units attached to a cubic expression.

For a rectangular box of dimensions $a,b,c$, opposite faces pair up, so $S=2ab+2ac+2bc$ and $V=abc$. A net must count each exterior face once. Faces where two solids are glued together become internal and should not remain in the exterior surface total.

## Why pyramids have the factor one-third

**Theorem 15.4 (Pyramid and cone volumes).** A pyramid or circular cone with base area $B$ and perpendicular height $h$ has volume
$$
V=\\frac13Bh.
$$

*Proof.* First divide a cube of side $s$ into three pyramids with a common apex at one corner and bases on the three opposite faces. A ray from the chosen corner exits at one of those faces, so these pyramids fill the cube with disjoint interiors. They are congruent by permuting the three perpendicular coordinate directions. Each therefore has volume $s^3/3$, base area $s^2$ and height $s$.

Stretch the two horizontal directions of one pyramid equally to make its base area $B$, and stretch the vertical direction to make its height $h$. The volume multiplier is the product of the three directional factors, namely $Bh/s^3$. The resulting square-based pyramid consequently has volume $Bh/3$.

Now compare any pyramid or cone with that square-based pyramid of equal base area and height. At distance $t$ from the apex, a parallel cross-section is a copy of its base scaled by $t/h$, so its area is $B(t/h)^2$. This is the same in both solids at every height. Cavalieri's principle gives equal volumes, proving the formula. ∎

The proof uses perpendicular height, not the distance along a generator. It also explains the common factor for polygonal and circular bases: their section shapes differ, but the area at a given relative height follows the same square law.

For a right circular cone, $B=\\pi r^2$, so $V=\\pi r^2h/3$. Its slant height is $\\ell=\\sqrt{r^2+h^2}$. The curved surface unwraps into a sector of a circle of radius $\\ell$, whose arc length is the base circumference $2\\pi r$. That sector occupies fraction $r/\\ell$ of the full circle, so its area is $(r/\\ell)\\pi\\ell^2=\\pi r\\ell$. Including the base gives
$$
S=\\pi r\\ell+\\pi r^2.
$$

**Example 15.5 (Height and slant height do different jobs).** A right circular cone has radius five metres and perpendicular height twelve metres. Its slant height is thirteen metres by Pythagoras. Its volume is
$$
V=\\frac13\\pi(5)^2(12)=100\\pi\\text{ m}^3.
$$
Its curved area is $65\\pi$ square metres, and its closed total area is $65\\pi+25\\pi=90\\pi$ square metres. Using thirteen in the volume formula would confuse a sloping length with the spacing of parallel slices.

## Spheres and their circular slices

**Definition 15.6 (Sphere and ball).** A sphere is the surface of points at a fixed distance $r>0$ from a centre in space. The corresponding ball includes the interior. In ordinary measurement language, “volume of a sphere” means the volume of that ball.

A plane at distance $d$ from the centre meets the sphere in a circle when $0\\le d<r$, touches it at one point when $d=r$, and misses it when $d>r$. In the circular case the section radius $\\rho$ satisfies
$$
\\rho^2+d^2=r^2.
$$
This follows by joining the centre, the perpendicular foot on the slicing plane and a point of the section to form a right triangle. A central section has $d=0$ and is a great circle.

**Theorem 15.7 (Ball volume).** A ball of radius $r$ has volume $4\\pi r^3/3$.

*Proof.* Consider its upper half, with height coordinate $z$ measured upward from the equatorial plane, $0\\le z\\le r$. The section at height $z$ has area $\\pi(r^2-z^2)$ by the preceding right-triangle calculation.

Compare a cylinder of radius $r$ and height $r$, after removing a cone with apex at its bottom centre and base the top circle. At height $z$, the cone section has radius $z$, by similarity, and area $\\pi z^2$. The remaining cylinder section therefore has area $\\pi r^2-\\pi z^2$, exactly that of the hemisphere. Cavalieri gives hemisphere volume $\\pi r^3-\\pi r^3/3=2\\pi r^3/3$. Doubling yields the ball volume. ∎

The sphere's curved surface area is the classical formula $4\\pi r^2$. We use this as a stated standard result; deriving curved-surface area rigorously requires a limiting argument beyond the elementary slice comparison just given. It should not be claimed as a consequence of the volume comparison alone. A hemisphere has curved area $2\\pi r^2$, and including its flat circular base gives $3\\pi r^2$.

**Example 15.8 (A noncentral sphere section).** A sphere has radius five centimetres. A plane passes three centimetres from the centre. Its section radius is
$$
\\rho=\\sqrt{25-9}=4\\text{ centimetres},
$$
so the section area is $16\\pi$ square centimetres. The full sphere area is $100\\pi$ square centimetres and its ball volume is $500\\pi/3$ cubic centimetres. These are three different measurements. Treating the section circle as having radius five would ignore the plane's offset.

## Parallel sections and frusta

At halfway from a pyramid or cone apex to its base, a parallel section has half the linear size of the base and one-quarter its area. The small similar solid above that section has one-eighth the original volume. “Half the height” does not imply “half the volume” because the sections are not all the same size.

A frustum is what remains after cutting off the top of a pyramid or cone by a plane parallel to the base. Its volume can be found by subtracting two similar solids. The parallelism is essential because it supplies the similarity needed to recover missing heights.

**Example 15.9 (A conical frustum by subtraction).** A right conical frustum has end radii six and three units and height four units. Complete it to its original cone. The top small cone has half the original radius, hence half the original height. Since the frustum occupies the other half of the height, the full height is eight and the small cone height four.

The large cone volume is $(1/3)\\pi(6)^2(8)=96\\pi$. The removed cone volume is $(1/3)\\pi(3)^2(4)=12\\pi$. Therefore the frustum volume is $84\\pi$ cubic units. Using the average of the two base areas times the height would not be justified: the intermediate section area is quadratic in the changing radius, not linear.

For a polyhedron, a generic cutting plane crosses faces in line segments whose endpoints lie on edges. Connecting those endpoints in their face order constructs the section polygon. Special planes may pass through a vertex or contain an edge, so count distinct section points carefully. A drawing of a three-dimensional object is a projection, not an area-preserving view of each face.

## Scaling and measurement

When similar solids have linear scale factor $k>0$, their surface areas have factor $k^2$ and their volumes factor $k^3$. A model enlarged by two therefore needs four times the surface covering and occupies eight times the volume. The ratio of surface area to volume decreases by factor $1/k$, which helps explain why differently sized containers behave differently even when their shapes agree.

Convert length units before inserting dimensions into one formula. A metre contains one hundred centimetres, so a cubic metre contains one million cubic centimetres, not one hundred. A capacity of one litre is one thousand cubic centimetres. These conversions follow by scaling each of the three length directions.

Finally, keep the geometric model explicit. A hollow object may have material volume different from its capacity. A capped half-sphere includes a flat disc that an open half-sphere does not. A cone's height and slant height belong to different formulas. Stating what is being measured is the first step in choosing the correct expression.

## Exercises

### Exercise 15.1
<a id="solids-volume-surface-area-ex-1"></a>

A rectangular box has dimensions $3,4,10$ centimetres. Find its volume and closed surface area.

<details>
<summary>Hint 1</summary>

Volume multiplies three lengths.

</details>
<details>
<summary>Hint 2</summary>

Surface area adds three pairs of opposite rectangular faces.

</details>
<details>
<summary>Solution</summary>

The volume is $3\\cdot4\\cdot10=120$ cubic centimetres. The surface area is $2(3\\cdot4+3\\cdot10+4\\cdot10)=164$ square centimetres. The different units distinguish the two measurements.

</details>

### Exercise 15.2
<a id="solids-volume-surface-area-ex-2"></a>

Find the volume and open-top area of a right cylinder of radius two units and height seven units.

<details>
<summary>Hint 1</summary>

An open top means only one circular base is included.

</details>
<details>
<summary>Hint 2</summary>

The curved rectangle has width $2\\pi r$.

</details>
<details>
<summary>Solution</summary>

The volume is $\\pi(2)^2(7)=28\\pi$ cubic units. The curved area is $2\\pi(2)(7)=28\\pi$, and the one base contributes $4\\pi$, giving $32\\pi$ square units. Their numerical coefficients happen to be similar, but the dimensions remain different.

</details>

### Exercise 15.3
<a id="solids-volume-surface-area-ex-3"></a>

A right cone has radius eight and height fifteen. Find slant height, volume and closed area.

<details>
<summary>Hint 1</summary>

Use Pythagoras for slant height.

</details>
<details>
<summary>Hint 2</summary>

Volume uses perpendicular height; curved area uses slant height.

</details>
<details>
<summary>Solution</summary>

The slant height is $\\sqrt{64+225}=17$. Volume is $\\pi(8)^2(15)/3=320\\pi$. Curved area is $\\pi(8)(17)=136\\pi$, and the base is $64\\pi$, so closed area is $200\\pi$. Length, square and cubic units should be attached as appropriate.

</details>

### Exercise 15.4
<a id="solids-volume-surface-area-ex-4"></a>

A pyramid has base area $30$ square metres and height nine metres. Find its volume and compare it with a prism of the same base area and height.

<details>
<summary>Hint 1</summary>

The pyramid formula contains a factor one-third.

</details>
<details>
<summary>Hint 2</summary>

The prism has constant-area parallel sections.

</details>
<details>
<summary>Solution</summary>

The pyramid volume is $(1/3)(30)(9)=90$ cubic metres. The prism volume is $30\\cdot9=270$ cubic metres, three times as large. Equal base and height do not imply equal volumes because their cross-sectional areas differ at intermediate levels.

</details>

### Exercise 15.5
<a id="solids-volume-surface-area-ex-5"></a>

A ball has radius six centimetres. Find its volume and the sphere's curved area.

<details>
<summary>Hint 1</summary>

Use the separate cubic and quadratic formulas.

</details>
<details>
<summary>Hint 2</summary>

Keep exact multiples of pi.

</details>
<details>
<summary>Solution</summary>

The volume is $(4/3)\\pi6^3=288\\pi$ cubic centimetres. The curved surface area is $4\\pi6^2=144\\pi$ square centimetres. The first formula measures the interior and the second the boundary.

</details>

### Exercise 15.6
<a id="solids-volume-surface-area-ex-6"></a>

A plane cuts a sphere of radius thirteen units at distance five from its centre. Find the section area.

<details>
<summary>Hint 1</summary>

The centre-to-plane distance and section radius are perpendicular legs.

</details>
<details>
<summary>Hint 2</summary>

Use the sphere radius as the hypotenuse.

</details>
<details>
<summary>Solution</summary>

The section radius is $\\sqrt{13^2-5^2}=\\sqrt{144}=12$. Therefore its area is $144\\pi$ square units. A plane at the centre instead would give the larger great-circle area $169\\pi$.

</details>

### Exercise 15.7
<a id="solids-volume-surface-area-ex-7"></a>

A cone is cut halfway from apex to base by a plane parallel to the base. What fractions of the base area and total volume belong to the small top cone?

<details>
<summary>Hint 1</summary>

Similarity gives a linear factor one-half.

</details>
<details>
<summary>Hint 2</summary>

Square the factor for area and cube it for volume.

</details>
<details>
<summary>Solution</summary>

The section base of the small cone has one-quarter the original base area. The similar small cone has one-eighth the original volume. The remaining frustum therefore has seven-eighths of the total volume. Half height is not half volume because the section areas grow with distance from the apex.

</details>

### Exercise 15.8
<a id="solids-volume-surface-area-ex-8"></a>

Similar solids have volumes in the ratio $27:125$. Find their length and surface-area ratios.

<details>
<summary>Hint 1</summary>

Volumes use the cube of the linear scale.

</details>
<details>
<summary>Hint 2</summary>

Surface areas use the square of that linear scale.

</details>
<details>
<summary>Solution</summary>

The positive linear ratio is $3:5$, because $27=3^3$ and $125=5^3$. The surface-area ratio is therefore $9:25$. Taking the square root of the volume ratio would not give a length ratio in three dimensions.

</details>

### Exercise 15.9
<a id="solids-volume-surface-area-ex-9"></a>

Convert $0.004$ cubic metres to cubic centimetres and litres.

<details>
<summary>Hint 1</summary>

One cubic metre is one million cubic centimetres.

</details>
<details>
<summary>Hint 2</summary>

One litre is one thousand cubic centimetres.

</details>
<details>
<summary>Solution</summary>

The volume is $0.004\\cdot1{,}000{,}000=4000$ cubic centimetres, equal to four litres. The factor is cubed because all three length directions change from metres to centimetres.

</details>

### Exercise 15.10
<a id="solids-volume-surface-area-ex-10"></a>

A hollow hemisphere of radius four units is closed by a flat circular base. Find the exterior surface area, using the stated sphere-area result.

<details>
<summary>Hint 1</summary>

The curved hemisphere is half the sphere surface.

</details>
<details>
<summary>Hint 2</summary>

The closing disc adds one circle area.

</details>
<details>
<summary>Solution</summary>

The curved area is $2\\pi(4)^2=32\\pi$. The flat disc contributes $\\pi(4)^2=16\\pi$, so total exterior area is $48\\pi$ square units. An open hemisphere would omit that final disc. Its material thickness would be needed to compute material volume.

</details>

## Sources

This is original exposition and fresh exercises, expanding the solid-measurement outline in the local [Geometry and Trigonometry course](../../courses/euclidean-trigonometry-standard.md). Further primary textbook formulas and net explanations are OpenStax, [Volume and Surface Area](https://openstax.org/books/prealgebra-2e/pages/9-6-solve-geometry-applications-volume-and-surface-area) and [Geometric Formulas](https://openstax.org/books/prealgebra-2e/pages/c-geometric-formulas). Consulted on 13 November 2026; no passage or exercise has been copied.

## Summary

Volume, surface area and cross-sectional area measure different aspects of a solid. Nets explain cylinder and cone areas, while perpendicular heights govern volumes. A cube dissection and Cavalieri comparison give the pyramid and cone factor one-third; a further section comparison gives ball volume. Sphere surface area is a stated classical result here. Parallel sections change by similarity, so partial heights do not imply proportional volumes in tapered solids. Scaling and units provide useful checks, and open or hollow objects require a precise description of which surfaces or volumes are wanted. The next chapter describes plane displacements with vectors.
`;export{e as default};