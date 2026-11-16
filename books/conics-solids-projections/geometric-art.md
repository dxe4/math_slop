
# Geometric Art

This earlier companion keeps its original mathematics, exercises and learner identity. The current main reading is [Applications and Synthesis](applications-and-synthesis.md).

Mathematics and visual art have been intertwined since antiquity. The same geometric constructions that classify conics and project the sphere also generate the symmetries of Islamic tilings, the perspective of Renaissance painting, and the algorithmic patterns of contemporary digital art. This chapter surveys the mathematical foundations of geometric art: symmetry groups, tessellations, the golden ratio, and perspective constructions. It shows how to move from mathematical principle to visual execution.

## Symmetry and symmetry groups

A symmetry of a figure is a rigid motion that maps the figure onto itself. In the plane, the possible symmetries are:

- **Translations:** shifting by a fixed vector.
- **Rotations:** turning about a fixed point by an arbitrary angle; a finite rotation subgroup restricts the angles to multiples of $2\pi/n$.
- **Reflections:** flipping across a line.
- **Glide reflections:** reflecting across a line and then translating parallel to it.

The set of all symmetries of a figure forms a group under composition. For periodic patterns in the plane, there are exactly 17 wallpaper groups, classified by their combinations of translations, rotations, reflections, and glide reflections. Every finite subgroup of planar rigid motions fixing a point is cyclic $C_n$ or dihedral $D_n$. A bounded figure itself can have an infinite compact symmetry group---a disk has all rotations and reflections---so the finite-group qualification is essential.

## Tessellations

A tessellation (or tiling) is a covering of the plane by tiles with disjoint interiors, without gaps. General tilings need not use congruent tiles; regular and semiregular classes impose the congruence and polygon conditions stated below. The regular tessellations use only one regular polygon:

- Triangles: $6$ meeting at each vertex (interior angle $2\pi/6=\pi/3$).
- Squares: $4$ meeting at each vertex (interior angle $2\pi/4=\pi/2$).
- Hexagons: $3$ meeting at each vertex (interior angle $2\pi/3$).

These are the only regular tessellations because the interior angle of a regular $n$-gon is $(n-2)\pi/n$, and $k$ copies must sum to $2\pi$:

$$k\cdot\frac{(n-2)\pi}{n}=2\pi\implies k=\frac{2n}{n-2}.$$

For $n=3$, $k=6$; for $n=4$, $k=4$; for $n=6$, $k=3$. For $n>6$, $k<3$, which is impossible.

### Semiregular tessellations

Semiregular (Archimedean) tessellations use more than one regular polygon, with the same arrangement of polygons at every vertex. There are 8 semiregular tessellations in the plane, including the familiar pattern of octagons and squares.

### Hyperbolic tessellations

In the hyperbolic plane, the angle sum of a polygon is less than the Euclidean value, so more polygons can meet at a vertex. There are infinitely many regular tessellations $\{p,q\}$ in the hyperbolic plane, where $p$ is the number of sides and $q$ is the number meeting at each vertex, provided $(p-2)(q-2)>4$. For example, $\{7,3\}$ (heptagons, three at each vertex) is a regular hyperbolic tessellation.

## The golden ratio

The golden ratio $\phi=(1+\sqrt{5})/2\approx 1.618$ appears throughout art and architecture. It satisfies $\phi^{2}=\phi+1$ and has the continued fraction expansion $[1;1,1,1,\dots]$. A golden rectangle has sides in ratio $\phi:1$; removing a square leaves a smaller golden rectangle.

The golden ratio is closely related to the regular pentagon. In a regular pentagon with side length $1$, the diagonal has length $\phi$. The pentagram (five-pointed star) formed by the diagonals contains numerous similar triangles with ratio $\phi$.

## Perspective in art

Renaissance artists developed mathematical perspective to create the illusion of depth on a flat surface. The key idea is the picture plane and the vanishing point:

- Parallel lines in space that are not parallel to the picture plane converge to a vanishing point.
- Lines parallel to the picture plane remain parallel in the image.
- The horizon line contains the vanishing points for all horizontal directions.

One-point perspective uses a single vanishing point on the horizon. Two-point perspective uses two vanishing points for horizontal lines in perpendicular directions. Three-point perspective adds a third vanishing point for vertical lines, useful for aerial views of tall buildings.

### Constructing a perspective grid

To construct a tiled floor in one-point perspective:

1. Draw the horizon line and the central vanishing point $V$.
2. Draw the front edge of the floor as a horizontal line segment.
3. Draw lines from the endpoints of this segment to $V$.
4. Mark equally spaced points on the front edge.
5. Choose a calibrated depth mark or measuring point, then use its diagonal transversal to propagate depth spacing. A vanishing point and front-edge spacing alone do not determine the depth scale.

This construction is equivalent to the perspective projection formula $(X,Y,Z)\mapsto(fX/Z,fY/Z)$ with the picture plane at $z=f$.

## Algorithmic art

Contemporary geometric art often uses algorithms to generate patterns. Key techniques include:

- **Recursion:** subdividing shapes repeatedly, as in the Sierpinski triangle or the Koch snowflake.
- **L-systems:** string-rewriting systems that model plant growth and generate organic-looking forms.
- **Reaction-diffusion:** simulating chemical processes to create spotted and striped patterns.
- **Voronoi diagrams:** partitioning space into regions closest to a set of seed points, creating cell-like patterns.

## Common errors

- **Assuming all Islamic patterns use the golden ratio.** Many do, but many others are based on square or hexagonal grids.
- **Applying a regular-tiling rule to every tessellation.** Regular and semiregular tilings use congruent regular polygons under their stated definitions, but a general tessellation can mix noncongruent tiles and need not have a scaling symmetry.
- **Ignoring the curvature of space.** A pattern designed for the Euclidean plane cannot be directly transferred to the sphere or hyperbolic plane without distortion.
- **Using approximate values for $\phi$ in exact constructions.** The algebraic property $\phi^{2}=\phi+1$ is often more useful than the decimal approximation.

## Practice exercises with solutions

### Exercise 1
Show that the diagonal of a regular pentagon with side length $1$ has length $\phi$.

**Solution.** Let every side be $1$ and every diagonal have length $d$. The vertices $A,B,C,D$ lie on the circumcircle, so Ptolemy's theorem applied to cyclic quadrilateral $ABCD$ gives
$$AC\cdot BD=AB\cdot CD+BC\cdot AD,$$
that is, $d^2=1+d$. The positive solution is $d=(1+\sqrt5)/2=\phi$. (A proof from diagonal-intersection similarities gives the same equation; the non-similar triangles $ABC$ and $ACD$ alone do not.)

### Exercise 2
Find the symmetry group of a regular hexagon.

**Solution.** A regular hexagon has $6$ rotational symmetries (including the identity) and $6$ reflection symmetries. Its symmetry group is the dihedral group $D_{6}$, of order $12$.

### Exercise 3
Construct a golden rectangle with short side $1$ using compass and straightedge.

**Solution.**
1. Draw a square $ABCD$ with side $1$.
2. Find the midpoint $M$ of side $AB$.
3. Draw a circle centered at $M$ with radius $MC$.
4. Extend $AB$ to meet this circle at $E$.
5. The rectangle $AEFD$ with $AE=\phi$ is a golden rectangle.

Verification: $MC=\sqrt{(1/2)^{2}+1^{2}}=\sqrt{5}/2$. So $AE=AM+ME=1/2+\sqrt{5}/2=\phi$.

### Exercise 4
Show that the Koch snowflake has finite area but infinite perimeter.

**Solution.** Starting with an equilateral triangle of side $1$, each iteration replaces the middle third of every edge with two sides of an equilateral triangle. The number of edges multiplies by $4$ and the length of each edge divides by $3$. After $n$ iterations, the perimeter is $3\cdot(4/3)^{n}$, which tends to infinity. The area added at step $n$ is $3\cdot 4^{n-1}$ triangles of side $1/3^{n}$, each with area $\sqrt{3}/4\cdot(1/3^{n})^{2}$. The total added area forms a geometric series with ratio $4/9<1$, so the total area is finite.

### Exercise 5
Find the vanishing point for lines parallel to the vector $(1,2,3)$ in a perspective projection with picture plane $z=1$ and camera at the origin.

**Solution.** The perspective projection is $(X,Y,Z)\mapsto(X/Z,Y/Z)$ for $Z>0$. A line in direction $(1,2,3)$ through a point $(x_{0},y_{0},z_{0})$ is $(x_{0}+t,y_{0}+2t,z_{0}+3t)$. Its image is $((x_{0}+t)/(z_{0}+3t),(y_{0}+2t)/(z_{0}+3t))$. As $t\to\infty$, this approaches $(1/3,2/3)$. So the vanishing point is $(1/3,2/3)$.

### Exercise 6
A hyperbolic tessellation $\{p,q\}$ has $p=5$ and $q=4$. Verify that it exists in the hyperbolic plane but not in the Euclidean plane.

**Solution.** The condition for a regular tessellation is $(p-2)(q-2)<4$ for the sphere, $=4$ for the Euclidean plane, and $>4$ for the hyperbolic plane. Here $(5-2)(4-2)=3\cdot 2=6>4$, so the tessellation exists in the hyperbolic plane but not in the Euclidean plane. (In the Euclidean plane, $4$ pentagons would have total angle sum $4\cdot 3\pi/5=12\pi/5>2\pi$, which is impossible.)

## Looking backward and forward

This chapter surveyed the mathematical structures underlying geometric art: symmetry groups, tessellations, the golden ratio, perspective, and algorithmic generation. These ideas connect the abstract geometry of earlier chapters to concrete visual practice.

The next chapter, **Project: Build a Model**, is a hands-on project that asks you to construct a physical or digital model illustrating one of the geometric principles from this book. The project integrates conic sections, surfaces of revolution, and projection into a single coherent artifact.
