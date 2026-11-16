var e=`---
parent_id: book-algorithms-computation-proof-desk
chapter_id: computational-geometry-graphics
title: "Computational Geometry and the Graphics Pipeline"
level: undergraduate
estimated_minutes: 150
license: CC BY-SA 4.0
---

# Computational Geometry and the Graphics Pipeline

A geometric program turns coordinates into decisions: left or right, inside or
outside, visible or hidden, covered or uncovered. A graphics program then turns
many such decisions into samples on a finite display. The picture is useful
evidence, but it is not the specification. Two nearly identical pictures can
come from algorithms with very different behavior on collinear points, clipped
triangles, or shared pixel edges.

This chapter develops one accountable route from predicates to pixels. It
separates exact mathematical statements, finite-precision implementations, and
sampling choices. The recurring discipline is simple: specify the sign or
inequality on which control flow depends, name every degeneracy, and make a
nonvisual checker available.

## 1. Points, vectors, and orientation

A point in the Euclidean plane is represented by a coordinate pair
$p=(p_{x},p_{y})$. Subtracting points produces a vector. For vectors $u$ and $v$,
the two-dimensional determinant is

$\\det(u,v)=u_{x} v_{y}-u_{y} v_{x}$.

For three points define the orientation value

$\\operatorname{orient}(a,b,c)=\\det(b-a,c-a)$.

Its sign is positive when the turn from directed line $ab$ to $ac$ is
counterclockwise, negative when clockwise, and zero when the points are
collinear. Its absolute value is twice the area of triangle $abc$. Translation
does not change it because only differences occur. A rotation preserves its
value; a reflection reverses its sign.

This one predicate supports hulls, segment intersection, polygon area,
point-in-triangle tests, and back-face classification. The mathematical
contract is a sign, not an approximate area. That distinction matters near
zero: a floating result of \`1e-16\` may encode a genuine small turn or accumulated
roundoff.

## 2. Segment intersection includes boundary policy

Let closed segments have endpoints $a,b$ and $c,d$. In the generic case, with
no three endpoints collinear, the segments cross precisely when $c,d$ lie on
opposite sides of line $ab$ and $a,b$ lie on opposite sides of line $cd$:

$\\operatorname{orient}(a,b,c) \\operatorname{orient}(a,b,d)<0$ and
$\\operatorname{orient}(c,d,a) \\operatorname{orient}(c,d,b)<0$.

That test deliberately omits endpoint contact and collinear overlap. A complete
closed-segment contract must also test whether a collinear point lies in the
axis-aligned bounding box of the other segment. An application may instead use
half-open segments to assign a shared endpoint to exactly one edge. Neither
policy is universally correct; leaving the policy unstated is incorrect.

Degenerate inputs include zero-length segments, repeated endpoints, and
overlapping intervals on a common line. They should be classified before
division. Solving two parametric line equations by dividing through a
determinant is unsafe when the determinant is zero and unnecessary when only a
yes-or-no intersection answer is required.

## 3. Convexity and the convex hull

A set $C$ is convex when $(1-t)x+ty$ belongs to $C$ for all $x,y$ in $C$ and
$0\\le t\\le 1$. The convex hull of a finite set $P$ is the smallest convex set
containing $P$; equivalently, it is the set of all convex combinations of
points of $P$. In the plane its boundary is a convex polygon unless every point
is collinear or fewer than three distinct points are supplied.

Andrew's monotone-chain algorithm first sorts distinct points
lexicographically. It builds a lower chain from left to right. Before appending
point $p$, it removes the last chain vertex while the last two vertices with
$p$ fail the chosen turn policy. With the test $\\operatorname{orient}\\le 0$, interior collinear
points are removed and only extreme endpoints remain.

The invariant is stronger than “the chain looks convex.” After processing a
sorted prefix, the chain has strictly counterclockwise consecutive turns, its
vertices occur in lexicographic order, and every processed point lies on or
above each directed chain edge. If the final turn is not counterclockwise, the
middle of the last three points cannot be an extreme lower-hull vertex, so
removing it restores the only possible violation. The upper chain is symmetric.
Sorting costs $\\mathcal{O}(n \\log n)$ comparisons. Each point is pushed once and popped at
most once per chain, so the scan is $\\mathcal{O}(n)$.

## 4. A dependency-free predicate and hull audit

The following implementation uses integer coordinates, for which Python's
integers make the determinant exact. The tests check expected examples and
structural properties: convex turns, containment in hull half-planes, and
invariance under permutation. Those finite tests do not replace the invariant
proof, but they exercise the implementation against its contract.

\`\`\`python
from itertools import permutations

def orient(a, b, c):
    return ((b[0] - a[0]) * (c[1] - a[1])
            - (b[1] - a[1]) * (c[0] - a[0]))

def convex_hull(points):
    pts = sorted(set(points))
    if len(pts) <= 1:
        return pts

    def chain(sequence):
        result = []
        for p in sequence:
            while len(result) >= 2 and orient(result[-2], result[-1], p) <= 0:
                result.pop()
            result.append(p)
        return result

    lower = chain(pts)
    upper = chain(reversed(pts))
    return lower[:-1] + upper[:-1]

def audit_hull(points, hull):
    unique = set(points)
    assert set(hull) <= unique
    assert len(hull) == len(set(hull))
    if not unique:
        assert hull == []
        return
    ordered = sorted(unique)
    if len(unique) == 1:
        assert hull == ordered
        return
    if all(orient(ordered[0], ordered[-1], p) == 0 for p in unique):
        assert hull == [ordered[0], ordered[-1]]
        return
    assert len(hull) >= 3
    for i in range(len(hull)):
        a, b = hull[i], hull[(i + 1) % len(hull)]
        assert orient(hull[i - 1], a, b) > 0
        assert all(orient(a, b, p) >= 0 for p in unique)

if __name__ == "__main__":
    cloud = [(0, 0), (2, 0), (2, 2), (0, 2),
             (1, 1), (1, 0), (0, 0)]
    expected = [(0, 0), (2, 0), (2, 2), (0, 2)]
    assert orient((0, 0), (1, 0), (1, 1)) > 0
    assert orient((0, 0), (1, 1), (2, 2)) == 0
    assert convex_hull([]) == []
    assert convex_hull([(3, 4)]) == [(3, 4)]
    assert convex_hull(cloud) == expected
    audit_hull(cloud, expected)
    for ordering in permutations([(0, 0), (2, 0), (0, 2), (1, 1)]):
        candidate = convex_hull(ordering)
        audit_hull(ordering, candidate)
        assert set(candidate) == {(0, 0), (2, 0), (0, 2)}
\`\`\`

The last loop exhausts all $4!$ orderings of one small input, proving
permutation invariance for that input after the loop bounds are inspected. The
general claim follows because \`sorted(set(points))\` is independent of input
order.

## 5. Robust predicates and numerical scope

Fixed-width integer arithmetic can overflow even when every input coordinate
fits. Floating arithmetic can round a small determinant to the wrong sign.
Three responses serve different contracts:

- exact integers or rationals establish exact signs within an explicitly
  unbounded arithmetic model;
- filtered predicates first compute quickly, then recompute uncertain cases at
  higher or exact precision;
- tolerances deliberately replace equality with an application-scale band.

An arbitrary epsilon is not a proof of robustness. Scaling a scene changes the
meaning of a fixed threshold, and nontransitive “approximately equal” tests can
break sorting. A robust system distinguishes construction—computing a new
intersection coordinate—from predicates—choosing a branch by a sign. Exact
predicates alone do not make constructed floating coordinates exact.

## 6. Affine transformations and coordinates

An affine transformation has form $f(x)=Ax+t$. Every such map preserves affine
and convex combinations and maps a line into a line or a point. When $A$ is
nonsingular, it maps lines to lines and preserves ratios along a line and
parallelism in the literal nondegenerate sense. A singular map may collapse a
line or an entire direction. Affine maps do not necessarily preserve lengths
or angles. Translation is not a linear map on ordinary coordinate vectors
because it does not fix the origin.

Homogeneous coordinates encode a plane point $(x,y)$ as $(x,y,1)$. Then a
translation is a $3 x 3$ matrix, and affine transformations compose by matrix
multiplication. In three-dimensional graphics, points become $(x,y,z,1)$ and
directions use $(x,y,z,0)$. The zero final coordinate is why translations move
points but do not move direction vectors such as tangents.

If column vectors are used and an object is transformed first by $M$, then by
$V$, then by $P$, the composite is $PVMp$. Reversing this order generally gives
a different result. Every implementation should state its vector convention,
matrix storage convention, handedness, and clip-space rules; “multiply the
matrices” is otherwise ambiguous.

## 7. Camera and perspective projection

The model transform places object coordinates in world space. The view
transform expresses world points in camera coordinates. A projection transform
maps the camera frustum to clip coordinates. Only after clipping does the
perspective divide map $(x_{c},y_{c},z_{c},w_{c})$ to normalized device coordinates
$(x_{c}/w_{c},y_{c}/w_{c},z_{c}/w_{c})$.

In an ideal pinhole camera looking along positive depth, a simplified image
coordinate is $x'=f x/z$, $y'=f y/z$. Thus distant objects appear smaller.
The division is nonlinear in Euclidean coordinates, even though a projective
matrix produces the homogeneous numerator and denominator. A point with zero
camera depth does not have a finite pinhole image.

Clipping must occur in homogeneous clip space before division. A primitive
straddling the camera plane can have vertices with incompatible signs of $w$;
dividing first may produce enormous or reversed coordinates. Frustum clipping
intersects edges with half-spaces such as $-w\\le x\\le w$, with exact conventions
depending on the graphics interface.

## 8. Triangles, barycentric coordinates, and coverage

For a nondegenerate triangle with vertices $a,b,c$, every point in its affine
plane has unique barycentric coordinates

$p=\\lambda_{a} a+\\lambda_{b} b+\\lambda_{c} c$, where
$\\lambda_{a}+\\lambda_{b}+\\lambda_{c}=1$.

The point lies in the closed triangle exactly when all three coefficients are
nonnegative. Oriented edge functions compute these coefficients up to a common
signed area denominator. They therefore provide both a coverage predicate and
interpolation weights.

Shared edges create a discrete ownership problem. If both adjacent triangles
include every boundary sample, an edge can be shaded twice; if both exclude it,
a crack appears. A top-left or another half-open rule assigns boundary samples
consistently. The rule is part of rasterizer correctness, not merely a visual
preference.

Attributes that are affine in screen space can be interpolated with screen
barycentric weights. Texture coordinates attached before perspective are not
generally affine after division. Perspective-correct interpolation first
interpolates $u_{i}/w_{i}$ and $1/w_{i}$, then divides:

$u(p) = (\\sum_{i} \\lambda_{i} u_{i}/w_{i})/(\\sum_{i} \\lambda_{i}/w_{i})$.

Skipping this correction makes textures visibly swim or bend on receding
surfaces.

## 9. Visibility and depth

A depth buffer stores the nearest accepted depth for each sample. For each
covered fragment, the rasterizer compares its depth with the stored value,
updates on success, and shades according to a specified equality rule. The
method resolves visibility only at sampled locations and within its numerical
depth representation.

Finite depth precision can cause two nearby surfaces to alternate ownership,
known as z-fighting. Near and far clipping choices influence how depth precision
is distributed. Back-face culling can reduce work for consistently oriented,
closed surfaces, but it is not a visibility theorem for arbitrary two-sided or
open geometry.

Painter's algorithm, which draws farther objects first, fails on cyclic overlap
and intersecting polygons unless geometry is split. That counterexample shows
why a plausible ordering heuristic is not a universal occlusion algorithm.

## 10. Sampling, aliasing, and reconstruction

A pixel is best modeled as a sample location or a finite footprint, not a tiny
geometric square automatically equal to scene coverage. A continuous image may
contain variation faster than the sampling grid can distinguish. Distinct
signals can then produce the same samples; this is aliasing. Jagged edges,
moiré patterns, and flicker are common geometric manifestations.

Supersampling estimates a pixel-footprint integral from several subpixel
samples and then filters down. Multisampling shares some shading work among
coverage samples. Texture prefiltering stores summaries at several scales.
These are approximation strategies with filter and sample assumptions, not
ways to recover arbitrary information lost before sampling.

A reproducible rendering report names viewport dimensions, sample positions,
boundary convention, color space, random seed if any, and comparison metric.
Alongside the image, report numerical alternatives such as transformed vertex
tables, triangle counts, rejected/clipped counts, coverage masks, and checksums.

## 11. Claim ledger

The geometric specification describes real points and exact signs. An integer
implementation may realize those signs exactly, provided arithmetic does not
overflow. A floating implementation needs a numerical-error argument or an
explicit uncertainty policy. The graphics pipeline then adds camera,
clipping, coverage, interpolation, visibility, shading, and sampling models.

Accordingly, a rendered image can demonstrate that one run produced certain
samples. It does not by itself prove a hull contains every input, that no crack
exists at every shared edge, or that the scene matches physical optics. Those
claims need invariants, predicate audits, exhaustive finite checks, error
bounds, or validated comparisons appropriate to their quantifiers.

## Practice with fully explained solutions

1. **Compute $\\operatorname{orient}((0,0),(3,0),(1,2))$.** Substitution gives
   $3*2-0*1=6>0$, so the third point is left of the directed horizontal edge.
   The triangle's area is $\\lvert 6\\rvert/2=3$ square units.
2. **Why is orientation translation invariant?** Replacing every point $p$ by
   $p+t$ leaves $(b+t)-(a+t)=b-a$ and $(c+t)-(a+t)=c-a$. Both determinant
   arguments are unchanged, so its value and sign are unchanged.
3. **Do segments from $(0,0)$ to $(2,2)$ and $(0,2)$ to $(2,0)$ cross?** The
   second segment's endpoints give opposite orientation signs relative to the
   first, and conversely. Both strict products are negative, so the segments
   cross in their interiors, at $(1,1)$.
4. **Why is a bounding-box test needed for a collinear endpoint?** Orientation
   zero proves membership in the infinite supporting line, not in the finite
   segment. For example $(3,0)$ is collinear with the segment from $(0,0)$ to
   $(2,0)$ but lies outside its coordinate interval.
5. **What hull does the strict-turn monotone chain return for three distinct
   collinear points?** It removes the middle point from both chains and returns
   the two extreme endpoints. This follows from the $\\operatorname{orient}\\le 0$ pop policy;
   retaining all boundary points would require a different stated policy.
6. **Why is the hull scan linear after sorting?** Each point is appended once
   to a chain. A point removed by a pop never returns to that chain, so there
   are at most as many pops as pushes. The total stack work is therefore
   $\\mathcal{O}(n)$, not one full rescan per point.
7. **Can a fixed epsilon define a scale-independent collinearity test?** No.
   Scaling all coordinates by $s$ scales an orientation determinant by $s^{2}$.
   The same geometric configuration can cross a fixed numerical threshold
   merely by changing units.
8. **Which affine properties can a shear destroy and preserve?** A nonsingular
   shear can destroy lengths and angles, but preserves lines, parallelism,
   ratios along a line, and convex combinations because it is affine and
   invertible.
9. **Why is a direction represented with homogeneous coordinate zero?** For a
   translation matrix, the translation column is multiplied by the final
   coordinate. It contributes to $(x,y,z,1)$ but vanishes for $(x,y,z,0)$, as a
   direction should not depend on the choice of origin.
10. **In what order does a column-vector pipeline apply model $M$, view $V$, and
    projection $P$?** It computes $P(V(Mp))=(PVM)p$. The rightmost matrix acts
    first; changing the product order changes the transformation in general.
11. **Why clip before perspective division?** Clip inequalities are linear and
    meaningful in homogeneous coordinates, including for edges crossing a
    $w$ boundary. Early division can divide by zero or turn a finite crossing
    primitive into unbounded screen coordinates.
12. **Find barycentric coordinates of the centroid of a triangle.** They are
    $(1/3,1/3,1/3)$: the coefficients sum to one and give the average of the
    three vertices. All are positive, so the centroid lies inside every
    nondegenerate triangle.
13. **Why does a half-open edge rule prevent both cracks and double coverage?**
    For a shared edge, the rule makes exactly one of its two orientations
    inclusive. Thus a sample on the edge is owned by one adjacent triangle,
    neither zero nor two.
14. **When does ordinary screen-linear attribute interpolation happen to match
    perspective-correct interpolation?** For $\\sum_i\\lambda_i=1$, nonzero $w_i$ and $\\sum_i\\lambda_i/w_i\\ne0$, equal $w_i$ suffice: the common reciprocal cancels. Constant vertex attributes also suffice. These conditions are sufficient, not necessary.
    A declared screen-affine attribute should use ordinary interpolation, but this does not make the formulas equal: on screen vertices $(0,0),(1,0),(0,1)$ take $u=x$, so $u_i=(0,1,0)$, $w_i=(1,2,1)$ and $\\lambda=(1/2,1/2,0)$.
    Ordinary interpolation gives $1/2$; perspective correction gives $(1/4)/(3/4)=1/3$. The declared attribute semantics determine which interpolation is appropriate.
15. **Give a failure of painter's ordering.** Three polygons can overlap
    cyclically: part of $A$ lies behind $B$, part of $B$ behind $C$, and part of
    $C$ behind $A$. No single whole-polygon back-to-front order satisfies all
    three relations, so splitting or a per-sample method is required.
16. **Why does a sharper rendered image not prove a more accurate algorithm?**
    Sharpness can result from a reconstruction filter that amplifies edges or
    aliases high frequencies. Accuracy must be evaluated against a stated
    continuous scene, sampling model, and metric; appearance alone supplies no
    universal error bound.

## Project: predicates-to-pixels audit

Build a dependency-free miniature geometry pipeline. Accept integer planar
points, compute their convex hull, triangulate the hull as a fan, transform the
vertices by an explicitly documented homogeneous matrix, and rasterize coverage
into an ASCII grid using oriented edge functions and one stated half-open rule.
Provide a text table of input, transformed, clipped, and covered quantities so
the result remains accessible without the image.

Write independent checks that every input lies in all hull half-planes, every
reported hull vertex is an input, every emitted triangle has the intended
orientation, and every covered sample satisfies your edge policy. Test empty,
singleton, duplicate, collinear, near-boundary, and permuted inputs. State which
claims rely on exact integer predicates, which transformations introduce
floating arithmetic, what happens at zero homogeneous coordinate, and why the
tests do not prove correctness for all inputs. Report input size, sort
comparisons or an honest proxy, predicate calls, clipped primitives, covered
samples, and a deterministic checksum of the ASCII output.

[Previous chapter](#/item/book-algorithms-computation-proof-desk?chapter=cryptographic-definitions-adversaries) · [Next chapter](#/item/book-algorithms-computation-proof-desk?chapter=quantum-states-algorithms) · [Book overview](#/item/book-algorithms-computation-proof-desk)
`;export{e as default};