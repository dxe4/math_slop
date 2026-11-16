
# Glossary and Index

This is a retrieval aid. Compact entries cannot replace the full definitions or hypotheses in their chapters. Chapter titles follow chapter order.

## Glossary

**Affine map.** A map $X \mapsto AX + b$; when $A$ is nonsingular it preserves lines, parallelism, and ratios along lines, while a singular map may collapse a line to a point. Chapter 5 (Transformations and Homogeneous Coordinates).

**Antipodal points.** Points on a sphere with spherical distance $\pi$. Chapter 13 (Curved Metric Computation).

**Boundary policy.** Explicit convention for endpoint touching, collinear overlap, and zero-length segments in intersection tests. Chapter 3 (Segment Intersection Needs Boundary Cases).

**Clamping.** Restricting a parameter to a closed interval, e.g., $t_{\text{seg}} = \max(0, \min(1, t^{*}))$. Chapter 4 (Projection, Distance, and Closest Points); Chapter 13 (Curved Metric Computation).

**Collinear.** Three or more points lying on a single line; detected by $\operatorname{orient} = 0$. Chapter 2 (Orientation Is the Central Planar Predicate).

**Convex hull.** The smallest convex set containing a given point set; computed by the monotone-chain algorithm in $O(n \log n)$ time. Chapter 8 (Convex Hull as an Orientation Algorithm).

**Convex set.** A set containing the entire segment between any two of its points. Chapter 8 (Convex Hull as an Orientation Algorithm).

**Cross product.** In $\mathbb{R}^{2}$, the scalar $u_{x} v_{y} - u_{y} v_{x}$. In $\mathbb{R}^{3}$, the vector perpendicular to both $u$ and $v$ with magnitude equal to the parallelogram area. Chapter 3 (Segment Intersection Needs Boundary Cases); Chapter 7 (Three-Dimensional Predicates).

**Determinant.** For a $2 \times 2$ matrix, $ad - bc$; gives the signed area of the parallelogram spanned by the columns. Chapter 2 (Orientation Is the Central Planar Predicate); Chapter 5 (Transformations and Homogeneous Coordinates).

**Directrix.** A fixed line used in the focus--directrix definition of a conic. Chapter 6 (Conic Predicates), with the earlier focus–directrix companion retained.

**Eccentricity ($e$).** The ratio $PF / \operatorname{dist}(P, D)$ defining a conic; $e < 1$ ellipse, $e = 1$ parabola, $e > 1$ hyperbola. Chapter 6 (Conic Predicates), with the earlier focus–directrix companion retained.

**Eigenvalue ($\lambda$).** Scalar for which $A v = \lambda v$ for some nonzero eigenvector $v$; used to diagonalize the quadratic part of a conic. Chapter 6 (Conic Predicates), with the earlier quadratic-form companion retained.

**Focus.** A fixed point used in the focus--directrix definition of a conic. Chapter 6 (Conic Predicates), with the earlier focus–directrix companion retained.

**Homogeneous coordinates.** Embedding of $\mathbb{R}^{2}$ into $\mathbb{R}^{3}$ via $(x, y) \mapsto [x, y, 1]^{T}$, unifying affine and projective transformations into matrix multiplication. Chapter 5 (Transformations and Homogeneous Coordinates).

**Hyperbolic distance ($d_{H}$).** Distance in the Poincaré disk model satisfying $\cosh d_{H} = 1 + 2 \|u - v\|^{2} / ((1 - \|u\|^{2})(1 - \|v\|^{2}))$. Chapter 13 (Curved Metric Computation).

**Implicit representation.** Description of a line or plane as $n \cdot X = c$; makes sidedness and distance immediate. Chapter 1 (Represent Geometric Objects with Invariants); Chapter 7 (Three-Dimensional Predicates).

**Invariant.** A geometric property unchanged by a class of transformations, e.g., cross-ratio under projective maps. Chapter 1 (Represent Geometric Objects with Invariants); Chapter 5 (Transformations and Homogeneous Coordinates).

**Monotone-chain algorithm.** Convex hull algorithm sorting points lexicographically and building lower and upper chains with orientation tests. Chapter 8 (Convex Hull as an Orientation Algorithm).

**Normal vector ($n$).** Nonzero vector perpendicular to a line or plane; $(n, c)$ and $(\lambda n, \lambda c)$ describe the same line. Chapter 1 (Represent Geometric Objects with Invariants); Chapter 7 (Three-Dimensional Predicates).

**Orientation predicate ($\operatorname{orient}$).** Signed test $(B_{x} - A_{x})(C_{y} - A_{y}) - (B_{y} - A_{y})(C_{x} - A_{x})$ classifying left turn, right turn, or collinearity. Chapter 2 (Orientation Is the Central Planar Predicate).

**Parametric representation.** Description of a line as $L(t) = P + t v$; ideal for construction and tracing. Chapter 1 (Represent Geometric Objects with Invariants).

**Perpendicular distance.** $|n \cdot X - c| / \|n\|$ from a point to a line or plane. Chapter 1 (Represent Geometric Objects with Invariants); Chapter 7 (Three-Dimensional Predicates).

**Point at infinity.** Projective point with homogeneous coordinate $w = 0$; represents a direction. Chapter 5 (Transformations and Homogeneous Coordinates).

**Projective transformation.** An invertible $3 \times 3$ matrix up to nonzero scale, preserving lines and cross-ratio but not lengths or angles. Chapter 5 (Transformations and Homogeneous Coordinates).

**Property-based test.** A finite investigation of instances of a universal law; agreement alone does not prove the universal claim. Chapter 15 (Property-Based Test Catalogue).

**Quadratic form.** The homogeneous quadratic polynomial $X^{T}QX$, represented by a symmetric matrix $Q$. It is the quadratic part of the conic equation $X^{T} Q X + q^{T} X + f = 0$. Chapter 6 (Conic Predicates), with the earlier quadratic-form companion retained.

**Reflection.** An isometry reversing orientation, with determinant $-1$; an involution fixing the mirror line pointwise. Chapter 5 (Transformations and Homogeneous Coordinates).

**Scalar triple product.** $u \cdot (v \times w)$; equals the determinant of the matrix with columns $u, v, w$ and gives the signed volume of the parallelepiped. Chapter 7 (Three-Dimensional Predicates).

**Signed area.** $\frac{1}{2} \operatorname{orient}(A, B, C)$; positive for counterclockwise triples, negative for clockwise. Chapter 2 (Orientation Is the Central Planar Predicate).

**Signed numerator.** $n \cdot X - c$; its sign determines which side of a line or plane contains $X$. Chapter 1 (Represent Geometric Objects with Invariants).

**Spherical distance ($d_{S}$).** Angle between unit vectors, $\arccos(\hat{u} \cdot \hat{v})$, always in $[0, \pi]$. Chapter 13 (Curved Metric Computation).

**Standard form.** A conic equation simplified by rigid coordinate changes; when $Q$ is invertible it can be centered as $\lambda_{1} z_{1}^{2}+\lambda_{2} z_{2}^{2}+f'=0$, while rank-one parabolas retain a linear term in the null direction. Chapter 6 (Conic Predicates), with the earlier quadratic-form companion retained.

**Translation invariance.** The property that $\operatorname{orient}(A + t, B + t, C + t) = \operatorname{orient}(A, B, C)$. Chapter 2 (Orientation Is the Central Planar Predicate).

**Triangulation.** A conforming decomposition of a filled simple polygon into nondegenerate triangles, using the stated vertices. Chapter 9 proves diagonal existence and the no-hole vertex-guard upper bound.

**Arrangement.** The vertices, split edge pieces and embedding determined by a segment union. Chapter 10 distinguishes general-position sweep reporting, complete degenerate subdivision and global grouping of face boundary walks.

**Voronoi cell.** The closed set of locations at least as near one site as any competitor. Chapter 11 derives its half-plane inequalities and the general-position Delaunay dual.

**Delaunay triangle.** A site triangle with empty open circumdisk, forming a unique triangulation under the chapter's no-collinear-triple/no-cocircular-quadruple assumptions. Chapter 11.

**k-d tree.** A balanced alternating-coordinate decomposition. Chapter 12 proves planar range-reporting cost under exact disjoint-cell ownership; its nearest search may still take linear time.

**Curvature estimator.** A declared discrete quotient rather than ordinary smooth curvature at a polygon corner. Chapter 14 distinguishes outgoing-chord and mean-adjacent-chord conventions with their different circle bounds.

**Sign enclosure.** An interval proved to contain a determinant. Chapter 15 distinguishes exclusion of zero, exact zero and an unresolved interval containing zero.

## Claim finder with status guards

### Theorems

**Orientation predicate properties (Chapter 2).** Translation invariance, swap sign reversal, cyclic invariance, and area relation are consequences of the determinant definition.

**Convex hull optimality (Chapter 8).** The monotone-chain algorithm runs in $O(n \log n)$ time, which is optimal in the stated comparison model for ordered-boundary output because sorting reduces to that output.

**Scalar triple product cyclicity (Chapter 7).** $u \cdot (v \times w) = v \cdot (w \times u) = w \cdot (u \times v)$ because each equals the determinant of the matrix with columns $u, v, w$.

### Computations

**Line conversion (Chapter 1).** Given parametric $L(t) = P + t v$, an implicit normal is $n = (v_{y}, -v_{x})$ and $c = n \cdot P$.

**Segment intersection parameters (Chapter 3).** For $L_{1}(t) = P + t u$ and $L_{2}(s) = Q + s v$, the parameters are $t = \operatorname{cross}(Q - P, v) / \operatorname{cross}(u, v)$ and $s = \operatorname{cross}(Q - P, u) / \operatorname{cross}(u, v)$ when the cross product is nonzero.

**Projection parameter (Chapter 4).** The closest point on an infinite line has parameter $t^{*} = (X - P) \cdot v / (v \cdot v)$.

**Conic classification (Chapter 6).** The signs and rank of $Q$ classify the quadratic part: same nonzero sign is ellipse-like, opposite signs hyperbola-like, exactly one zero eigenvalue parabola-like, and $Q=0$ linear or constant. The full real locus still needs rank and existence checks.

**Focus--directrix standard forms (Chapter 6 and retained companion).** For focus $(0,0)$ and directrix $x=1$, completing the square gives exact algebraic formulas in $e$ for the center, semiaxes, and asymptotes; square roots occur in the semiaxes.

### Approximations

**Floating-point orientation (Chapter 2).** Near collinearity, the computed sign may be wrong due to cancellation; a certified enclosure or exact fallback is needed to settle a sign; a tolerance must name any changed geometric policy.

**Spherical distance clamping (Chapter 13).** The argument to $\arccos$ must be clamped to $[-1, 1]$ to prevent `NaN` from roundoff errors slightly outside the interval.
