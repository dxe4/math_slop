var e=`---
parent_id: book-proof-safe-real-analysis
chapter_id: connectedness-and-the-real-line
title: "Connectedness and the Special Shape of the Real Line"
level: advanced-undergraduate
estimated_minutes: 175
license: CC BY-SA 4.0
---

# Connectedness and the Special Shape of the Real Line

Compactness prevents a sequence or open cover from escaping. Connectedness prevents a space from splitting into two noninteracting open regions. On the real line this abstract prohibition has a concrete consequence: connected sets are exactly intervals. The intermediate value theorem is therefore not an isolated fact about formulas; it says continuous maps cannot tear a connected domain apart.

This chapter develops connectedness in metric and topological language, then specializes to \\(R\\). It assumes open, closed, closure, subspace, and continuity concepts from [Metric Spaces, Open Sets, and Closed Sets](#/item/book-proof-safe-real-analysis?chapter=metric-spaces-open-and-closed). Compactness is not required for the main theory, although the two ideas work together later.

## 1. A separation is a genuine split

Let \\(X\\) be a topological space. A **separation** of \\(X\\) is a pair of nonempty disjoint open subsets \\(U,V\\) of \\(X\\) whose union is all of \\(X\\). The space is **disconnected** if it has a separation and **connected** otherwise.

**Worked example 1 (relative separation).**

The words “open in \\(X\\)” matter. If \\(X\\) is a subset of a larger space, relative openness is relevant. For

\\(X=[0,1]\\cup [2,3]\\subset R\\),

the sets \\([0,1]\\) and \\([2,3]\\) are not open in \\(R\\), but they are open in \\(X\\) because

\\([0,1]=X\\cap (-1,3/2)\\) and \\([2,3]=X\\cap (3/2,4)\\).

They form a separation, so \\(X\\) is disconnected.

Two disjoint sets do not automatically separate their union. In \\(X=[0,1]\\), the sets \\([0,1/2]\\) and \\((1/2,1]\\) are disjoint and cover \\(X\\), but the first is not open in \\(X\\); the point \\(1/2\\) touches the other side. A separation requires a topological gap, not an arbitrary partition.

## 2. Clopen sets provide an equivalent test

A subset is **clopen** when it is both open and closed in the ambient space. The empty set and whole space are always clopen.

**Clopen criterion.** A space \\(X\\) is connected exactly when its only clopen subsets are \\(\\varnothing\\) and \\(X\\).

If \\(U,V\\) separate \\(X\\), then \\(U=X\\setminus V\\), so each side is both open and closed. Conversely, if a nonempty proper subset \\(U\\) is clopen, then \\(U\\) and \\(X\\setminus U\\) are disjoint nonempty open sets covering \\(X\\).

Give \\(\\{0,1\\}\\) the discrete topology. A space \\(X\\) is connected exactly when every continuous map \\(f:X\\to \\{0,1\\}\\) is constant. A nonconstant map has two nonempty open inverse images that separate \\(X\\); a separation conversely defines a continuous indicator map. Connectedness is therefore an impossibility of continuous binary labeling. More generally, a continuous quantity taking values in a discrete set must remain constant on a connected domain.

## 3. Intervals cannot be separated

A subset \\(I\\subset R\\) is an **interval** if whenever \\(a,b\\in I\\) and \\(a<c<b\\), then \\(c\\in I\\). This includes bounded or unbounded, open or closed, half-open, one-point, and empty intervals.

**Theorem 7.2.** Every interval in \\(R\\) is connected.

Suppose an interval \\(I\\) had a separation \\(U,V\\). Choose \\(u\\in U\\) and \\(v\\in V\\); after relabelling, assume \\(u<v\\). Define \\(S=U\\cap [u,v]\\) and let \\(c=\\sup S\\). The interval property ensures \\([u,v]\\subset I\\). We derive a contradiction on either side.

If \\(c\\in U\\), relative openness supplies a small interval around \\(c\\) contained in \\(U\\). Since \\(c<v\\), this gives a member of \\(S\\) larger than \\(c\\), contradicting that \\(c\\) is an upper bound. If \\(c\\in V\\), relative openness supplies a left-neighborhood of \\(c\\) contained in \\(V\\). The approximation property of \\(\\sup S\\) puts a point of \\(S\\subset U\\) inside that neighborhood, contradicting disjointness.

Completeness enters through \\(c=\\sup S\\). The order of the real line turns a hypothetical topological split into a missing boundary, while completeness insists that the boundary exists.

The proof does not require compactness or included endpoints. Thus \\((0,1)\\), \\([0,1)\\), \\((-\\infty,4]\\), and \\(R\\) are connected. Removing one interior point is different: \\((0,1)\\setminus\\{1/2\\}\\) is separated by its two sides.

## 4. Connected subsets of the real line are intervals

**Theorem 7.3.** If \\(E\\subset R\\) is connected, then \\(E\\) is an interval.

Take \\(a,b\\in E\\) with \\(a<c<b\\). If \\(c\\notin E\\), then

\\(E\\cap (-\\infty,c)\\) and \\(E\\cap (c,\\infty)\\)

are disjoint relatively open sets. The first contains \\(a\\), the second contains \\(b\\), and together they cover \\(E\\), giving a separation. Therefore \\(c\\in E\\).

Combining both directions gives a classification special to one dimension:

\\(connected subsets of R = intervals\\).

This does not extend verbatim to \\(R^2\\). A circle, parabola, and many branching shapes are connected without being line segments or convex. The real line's total order is doing the classification work.

Connected also does not mean closed, bounded, or large. An interval can be open, unbounded, a singleton, or empty under the usual convention that the empty space is connected. Connectedness measures inability to split, not endpoint behavior.

## 5. Continuous images preserve connectedness

**Theorem 7.4 (Continuous image).** If \\(X\\) is connected and \\(f:X\\to Y\\) is continuous, then \\(f(X)\\) is connected.

Suppose \\(f(X)\\) had a separation \\(A,B\\). The inverse images \\(f^{-1}(A)\\) and \\(f^{-1}(B)\\) are disjoint open subsets of \\(X\\), both nonempty because \\(A,B\\) meet the image, and their union is \\(X\\). That would separate \\(X\\).

This proof shows why continuity is naturally phrased using inverse images of open sets: topological structure can be pulled back from the codomain. The converse is false. A discontinuous function may still have connected image; define \\(f:[-1,1]\\to [0,1]\\) by \\(f(x)=|x|\\) for \\(x\\ne 0\\) and \\(f(0)=1\\). Its image is \\((0,1]\\), still an interval, but it is discontinuous at zero.

## 6. The intermediate value theorem is an image theorem

Let \\(I\\) be an interval and \\(f:I\\to R\\) continuous. Since \\(I\\) is connected, \\(f(I)\\) is connected; since connected subsets of \\(R\\) are intervals, \\(f(I)\\) is an interval. To locate an intermediate value between the inputs, restrict \\(f\\) to the closed interval with endpoints \\(x_0,x_1\\), which lies in \\(I\\). Its image is an interval containing \\(f(x_0)\\) and \\(f(x_1)\\). Therefore, whenever \\(y\\) lies between those values, some \\(c\\) between \\(x_0\\) and \\(x_1\\) satisfies \\(f(c)=y\\).

This is the **intermediate value theorem**. It does not require differentiability or monotonicity, guarantee a unique \\(c\\), or locate \\(c\\) without additional work. It can fail when the domain is disconnected or the map is discontinuous.

**Worked example 2 (existence and uniqueness of a root).**

If \\(f:[a,b]\\to R\\) is continuous and \\(f(a)f(b)<0\\), zero lies between the endpoint values, so some \\(c\\in (a,b)\\) satisfies \\(f(c)=0\\). For \\(f(x)=x^3+x-1\\), \\(f(0)=-1\\) and \\(f(1)=1\\), so a root lies in \\((0,1)\\). Since \\(f'(x)=3x^2+1>0\\), it is strictly increasing and the root is unique. Intermediate value supplies existence; monotonicity supplies uniqueness.

On the disconnected domain \\([-1,0)\\cup (0,1]\\), the function equal to \\(-1\\) on the left and \\(1\\) on the right is continuous in the subspace topology but never takes zero. On \\([-1,1]\\), the analogous sign function is discontinuous. Either failure permits a jump.

## 7. Unions with a common point remain connected

**Theorem 7.1 (Union).** If \\(\\{C_\\alpha\\}\\) is a family of connected subsets of \\(X\\) and all share a point \\(p\\), then \\(\\bigcup C_\\alpha\\) is connected.

Suppose the union were separated by \\(U,V\\), with \\(p\\in U\\). Each connected \\(C_\\alpha\\) meets \\(U\\) at \\(p\\), so it cannot also meet \\(V\\); otherwise its intersections with the two sides would separate it. Hence every \\(C_\\alpha\\subset U\\), leaving \\(V\\) empty in the union.

A useful finite version says that if connected sets \\(C_1,\\ldots,C_n\\) can be ordered so that \\(C_k\\) intersects \\(C_1\\cup \\ldots\\cup C_{k-1}\\) for each \\(k>1\\), then their union is connected. This follows inductively.

The coordinate axes in \\(R^2\\) are connected lines sharing the origin, so their union is connected. Removing the origin produces four separated rays and destroys connectedness.

## 8. Path connectedness supplies explicit routes

A **path** from \\(x\\) to \\(y\\) in \\(X\\) is a continuous map \\(\\gamma:[0,1]\\to X\\) with \\(\\gamma(0)=x\\) and \\(\\gamma(1)=y\\). A space is **path connected** if every pair of points can be joined by a path.

Every path-connected space is connected. Fix a base point \\(p\\). For each \\(x\\), choose a path from \\(p\\) to \\(x\\). Its image is connected because \\([0,1]\\) is connected. All these images share \\(p\\), and their union is the whole space, so the union theorem applies.

The converse fails in general. The topologist's sine curve

\\[S=\\{(x,\\sin(1/x)):0<x\\le 1\\}\\cup (\\{0\\}\\times [-1,1])\\]

is connected but not path connected. The oscillating graph accumulates on the vertical segment too violently for a path to cross from the segment into the graph. A full proof needs careful continuity estimates, but the example prevents an unjustified substitution of “path connected” for “connected.”

Convex subsets of normed vector spaces are path connected: \\(\\gamma(t)=(1-t)x+ty\\) stays in the set. Thus balls, vector subspaces, and convex feasible regions are connected. Connectedness is weaker than convexity; a circle is path connected but not convex.

## 9. Components are maximal connected pieces

The **connected component** of \\(x\\in X\\) is the union of all connected subsets containing \\(x\\). The common-point theorem shows this union is connected, and it is maximal among connected subsets containing \\(x\\).

Components partition the space. If two components intersect, their union is connected, so maximality forces equality. Every point lies in its own component.

Components are always closed. The closure of a connected set is connected: if the closure split into two relatively open sides, the original connected set would lie entirely on one side, and density would keep the other from containing a closure point. A component therefore contains its closure by maximality.

**Worked example 3 (rational components).**

Components need not be open. In \\(Q\\) with its usual subspace topology, each connected component is a singleton, but no singleton is open. Any rational set containing \\(a<b\\) is separated by an irrational number between them. Thus \\(Q\\) is **totally disconnected** even though none of its points is isolated.

## 10. Local connectedness and component warnings

A space is **locally connected** if every point has a neighborhood basis of connected open sets. In a locally connected space, components of open sets are open. Euclidean spaces and their open subsets are locally connected because sufficiently small balls are convex.

Connectedness is global; local connectedness describes available connected neighborhoods. The topologist's sine curve is connected but not locally connected along its limiting segment. Conversely, a disjoint union of two open intervals is locally connected but disconnected. Local information still has to be joined globally.

## 11. A connectedness audit

Before accepting a connectedness argument, ask:

1. What is the ambient or subspace topology?
2. Are both sides of the alleged separation relatively open?
3. Could a nontrivial clopen set or continuous map to \\(\\{0,1\\}\\) expose the split?
4. On \\(R\\), is the interval classification used in the correct direction?
5. For an image argument, is the map continuous and is the set the actual image?
6. Does an intermediate-value conclusion establish only existence, with uniqueness still separate?
7. Is path connectedness being claimed when ordinary connectedness is all that was proved?
8. Are components assumed open without local connectedness?

## Continuous one-to-one maps preserve interval order

**Proposition 7.5.** A continuous injective real-valued function on an interval is strictly monotone and has a continuous inverse on its image.

First consider three inputs \\(a<b<c\\). The middle value must lie strictly between the endpoint values. If it were above both, choose a value strictly between the larger endpoint value and the middle value. The intermediate value theorem on both adjacent subintervals would supply two different preimages, contradicting injectivity. The case below both endpoints is identical. Equality with either endpoint is already excluded by injectivity.

Choose two inputs where the output increases. The between-values property forces every input to their left to have a smaller output, every input between them to have an intermediate output, and every input to their right to have a larger output. It also orders two inputs lying in the same one of those regions: include one of the fixed inputs as a third point and apply the same property. For example, two inputs on the left have the fixed right endpoint above both values, so the middle of that ordered triple must have the larger of the two left values. Thus the function is strictly increasing everywhere. If the originally chosen pair decreases, apply this argument to its negative, giving strict decrease instead.

The image is an interval by connectedness, so the inverse has an interval domain too. To prove its continuity at an image value, take a small input neighbourhood around its preimage. Choose legal inputs on either side within that neighbourhood when both sides are present. Strict monotonicity places their image values on either side of the selected image value. Every output between those image brackets has its preimage between the selected input brackets. This is precisely continuity of the inverse. At a domain endpoint use the single available bracket and the relative topology of the image; no nonexistent exterior inputs are required.

This result is topological and order based. It assumes no differentiability and gives no derivative formula for the inverse. The cubic map is strictly increasing with continuous inverse on the line, although its inverse cube root has no finite derivative at zero. Conversely a continuous map on an interval can have connected image while failing injectivity, as a parabola shows. Connectedness supplies intermediate values, while injectivity supplies a consistent ordering and a single-valued inverse. The two hypotheses have separate roles in the proof.

## 12. Exercises with complete solutions

### ANA-CH07-E001 — Exercise 1: A relative separation

Show \\(X=(-2,-1)\\cup [3,5]\\) is disconnected using sets open in \\(X\\).

<details><summary>Hint 1</summary>

Find an ambient open interval around each of the two separated pieces.

</details>

<details><summary>Hint 2</summary>

Intersect those intervals with X and verify every condition of a separation.

</details>

<details><summary>Solution</summary>

#### ANA-CH07-E001 — Solution

Let \\(U=X\\cap (-3,0)\\) and \\(V=X\\cap (0,6)\\). Both are relatively open, nonempty, disjoint, and cover \\(X\\), so they form a separation.

</details>

### ANA-CH07-E002 — Exercise 2: Not every partition separates

Why do \\([0,1/2]\\) and \\((1/2,1]\\) not separate \\([0,1]\\)?

<details><summary>Hint 1</summary>

Check relative openness at the proposed dividing point one half.

</details>

<details><summary>Hint 2</summary>

Every relative neighborhood of that point reaches into the other piece.

</details>

<details><summary>Solution</summary>

#### ANA-CH07-E002 — Solution

The first set is not relatively open: every relative neighborhood of \\(1/2\\) contains points greater than \\(1/2\\). A separation requires both sides to be open.

</details>

### ANA-CH07-E003 — Exercise 3: Find a clopen witness

In \\(X=\\{0\\}\\cup [1,2]\\), prove \\(\\{0\\}\\) is clopen.

<details><summary>Hint 1</summary>

Isolate zero by an ambient open interval.

</details>

<details><summary>Hint 2</summary>

Do the same for its relative complement to prove both openness and closedness.

</details>

<details><summary>Solution</summary>

#### ANA-CH07-E003 — Solution

It is relatively open since \\(\\{0\\}=X\\cap (-1,1/2)\\). Its complement \\([1,2]=X\\cap (1/2,3)\\) is relatively open, so \\(\\{0\\}\\) is also relatively closed. It is nontrivial, proving disconnection.

</details>

### ANA-CH07-E004 — Exercise 4: Continuous integer-valued functions

Let \\(X\\) be connected and \\(f:X\\to Z\\) continuous. Prove \\(f\\) is constant.

<details><summary>Hint 1</summary>

Apply preservation of connectedness under continuous images.

</details>

<details><summary>Hint 2</summary>

A connected subset of R containing two integers would have to contain the nonintegers between them.

</details>

<details><summary>Solution</summary>

#### ANA-CH07-E004 — Solution

The image is connected and hence an interval in \\(R\\). An interval contained in \\(Z\\) cannot contain two distinct integers, because a noninteger lies between them. Thus the image has at most one point: it is a singleton when \\(X\\ne\\varnothing\\) and empty when \\(X=\\varnothing\\). In either case, \\(f\\) is constant in the sense that \\(f(x)=f(x')\\) for all \\(x,x'\\in X\\).

</details>

### ANA-CH07-E005 — Exercise 5: Rational components

Prove any subset of \\(Q\\) containing two distinct points is disconnected.

<details><summary>Hint 1</summary>

Choose an irrational cut between the two given rational points.

</details>

<details><summary>Hint 2</summary>

Intersect E with the two open half-lines determined by that cut; no point of E lies on it.

</details>

<details><summary>Solution</summary>

#### ANA-CH07-E005 — Solution

For rational \\(a<b\\) in the set \\(E\\), choose irrational \\(c\\) between them. The sets \\(E\\cap (-\\infty,c)\\) and \\(E\\cap (c,\\infty)\\) are disjoint nonempty relatively open sets covering \\(E\\), since \\(c\\notin E\\).

</details>

### ANA-CH07-E006 — Exercise 6: Remove an interior point

For \\(a<c<b\\), find the components of \\([a,b]\\setminus\\{c\\}\\).

<details><summary>Hint 1</summary>

Each of the two remaining intervals is connected.

</details>

<details><summary>Hint 2</summary>

Any connected set meeting both sides would have to contain the deleted intermediate point.

</details>

<details><summary>Solution</summary>

#### ANA-CH07-E006 — Solution

The intervals \\([a,c)\\) and \\((c,b]\\) are connected and separated from each other. Any set meeting both would omit the intermediate point \\(c\\), so it would not be an interval and hence could not be connected. They are maximal.

</details>

### ANA-CH07-E007 — Exercise 7: Classify a connected subset

Suppose connected \\(E\\subset R\\) has \\(\\inf E=0\\), \\(\\sup E=1\\), and neither bound in \\(E\\). Determine \\(E\\).

<details><summary>Hint 1</summary>

Use the characterization of connected subsets of R as intervals.

</details>

<details><summary>Hint 2</summary>

The infimum and supremum place points of E on each side of every number strictly between zero and one.

</details>

<details><summary>Solution</summary>

#### ANA-CH07-E007 — Solution

Connectedness makes \\(E\\) an interval. Each \\(x\\in (0,1)\\) lies between elements of \\(E\\) below and above it; otherwise it would contradict the infimum or supremum. Thus \\((0,1)\\subset E\\), and the bounds exclude anything else. Hence \\(E=(0,1)\\).

</details>

### ANA-CH07-E008 — Exercise 8: Image of an interval

For continuous \\(f:(0,1)\\to R\\), must the image be open? Must it be an interval?

<details><summary>Hint 1</summary>

Separate preservation of connectedness from preservation of openness.

</details>

<details><summary>Hint 2</summary>

A constant function already disproves the openness claim.

</details>

<details><summary>Solution</summary>

#### ANA-CH07-E008 — Solution

It must be an interval by the continuous image theorem. It need not be open: a constant map has singleton image. Also \\(f(x)=(x-1/2)^2\\) has image \\([0,1/4)\\).

</details>

### ANA-CH07-E009 — Exercise 9: Root existence and uniqueness

Prove \\(x^5+x-3=0\\) has exactly one real solution.

<details><summary>Hint 1</summary>

Find a sign change between two integers.

</details>

<details><summary>Hint 2</summary>

For uniqueness show the polynomial is strictly increasing, for example by its positive derivative.

</details>

<details><summary>Solution</summary>

#### ANA-CH07-E009 — Solution

For \\(f(x)=x^5+x-3\\), \\(f(1)=-1\\) and \\(f(2)=31\\), so continuity gives a root in \\((1,2)\\). Since \\(f'(x)=5x^4+1>0\\), \\(f\\) is strictly increasing and has at most one root.

</details>

### ANA-CH07-E010 — Exercise 10: A failed intermediate-value claim

Give a continuous function on a disconnected subset of \\(R\\) whose image contains \\(-2\\) and \\(2\\) but not \\(0\\).

<details><summary>Hint 1</summary>

Give different constant values on two relatively clopen components.

</details>

<details><summary>Hint 2</summary>

Continuity can be checked separately on the two components, without filling the missing gap.

</details>

<details><summary>Solution</summary>

#### ANA-CH07-E010 — Solution

On \\(X=[-2,-1]\\cup [1,2]\\), take value \\(-2\\) on the first component and \\(2\\) on the second. Both pieces are clopen in \\(X\\), so the function is continuous. Its image is \\(\\{-2,2\\}\\).

</details>

### ANA-CH07-E011 — Exercise 11: Common-point unions

Prove the union of all lines through the origin in \\(R^2\\) with rational slope is connected.

<details><summary>Hint 1</summary>

Check that each individual line is connected.

</details>

<details><summary>Hint 2</summary>

All the lines contain the origin, so the common-point union theorem applies.

</details>

<details><summary>Solution</summary>

#### ANA-CH07-E011 — Solution

Each line is path connected and every line contains the origin. The common-point union theorem applies, even though the union is not all of \\(R^2\\).

</details>

### ANA-CH07-E012 — Exercise 12: A chain of overlaps

If \\(C_1,C_2,C_3\\) are connected, \\(C_1\\cap C_2\\ne \\varnothing\\), and \\(C_2\\cap C_3\\ne \\varnothing\\), prove their union is connected.

<details><summary>Hint 1</summary>

Combine the first two connected sets first.

</details>

<details><summary>Hint 2</summary>

Their connected union still meets the third set through the second.

</details>

<details><summary>Solution</summary>

#### ANA-CH07-E012 — Solution

The first two have connected union because they intersect. That union intersects \\(C_3\\), so adjoining \\(C_3\\) preserves connectedness.

</details>

### ANA-CH07-E013 — Exercise 13: A path in a star-shaped set

A set \\(S\\) is star-shaped about \\(p\\) if the segment from \\(p\\) to every \\(x\\in S\\) lies in \\(S\\). Prove \\(S\\) is path connected.

<details><summary>Hint 1</summary>

Connect each endpoint to the distinguished center p.

</details>

<details><summary>Hint 2</summary>

Concatenate the two segments on the two halves of the parameter interval.

</details>

<details><summary>Solution</summary>

#### ANA-CH07-E013 — Solution

Join \\(x\\) to \\(p\\) by \\((1-t)x+tp\\), then \\(p\\) to \\(y\\) by \\((1-t)p+ty\\). Reparameterize these paths onto the two halves of \\([0,1]\\). They agree at \\(p\\), so the pasting lemma gives a path in \\(S\\).

</details>

### ANA-CH07-E014 — Exercise 14: Circle versus convexity

Show the unit circle is path connected but not convex.

<details><summary>Hint 1</summary>

Describe an arc by interpolating angular parameters.

</details>

<details><summary>Hint 2</summary>

For nonconvexity join two antipodal points and inspect the midpoint of their straight segment.

</details>

<details><summary>Solution</summary>

#### ANA-CH07-E014 — Solution

Represent endpoints by angles and interpolate the angle to obtain a continuous arc. It is not convex because the segment joining \\((1,0)\\) and \\((-1,0)\\) contains \\((0,0)\\), outside the circle.

</details>

### ANA-CH07-E015 — Exercise 15: Closure preserves connectedness

Let \\(C\\) be connected. Prove any \\(E\\) with \\(C\\subset E\\subset \\overline{C}\\) is connected.

<details><summary>Hint 1</summary>

Suppose E admits a separation and place C on one side.

</details>

<details><summary>Hint 2</summary>

A point on the other side would have a relative neighborhood missing the dense subset C.

</details>

<details><summary>Solution</summary>

#### ANA-CH07-E015 — Solution

If \\(E\\) were separated, connectedness would put \\(C\\) entirely on one side. A point on the other side would have a relative neighborhood disjoint from \\(C\\), contradicting that it lies in \\(\\overline{C}\\).

</details>

### ANA-CH07-E016 — Exercise 16: Components are closed

Use the previous exercise to prove every component is closed.

<details><summary>Hint 1</summary>

Apply the preceding closure result to one component.

</details>

<details><summary>Hint 2</summary>

The connected closure cannot be strictly larger than a maximal connected subset.

</details>

<details><summary>Solution</summary>

#### ANA-CH07-E016 — Solution

The closure of a component is connected. Maximality of the component forces it to equal its closure, so it is closed.

</details>

### ANA-CH07-E017 — Exercise 17: Connected graph image

If \\(I\\) is an interval and \\(f:I\\to R\\) is continuous, prove its graph is connected.

<details><summary>Hint 1</summary>

Parameterize the graph by its horizontal coordinate.

</details>

<details><summary>Hint 2</summary>

Use continuity of x mapped to (x,f(x)) and preservation of connectedness under images.

</details>

<details><summary>Solution</summary>

#### ANA-CH07-E017 — Solution

The map \\(g(x)=(x,f(x))\\) from \\(I\\) to \\(R^2\\) is continuous. Its image is the graph, so the continuous image theorem applies.

</details>

### ANA-CH07-E018 — Exercise 18: A product path

If \\(X\\) and \\(Y\\) are path connected, prove \\(X\\times Y\\) is path connected.

<details><summary>Hint 1</summary>

Choose one path in each coordinate space.

</details>

<details><summary>Hint 2</summary>

Pair their values at the same parameter; continuity and the endpoints are checked coordinatewise.

</details>

<details><summary>Solution</summary>

#### ANA-CH07-E018 — Solution

Choose paths \\(\\alpha\\) from \\(x_0\\) to \\(x_1\\) and \\(\\beta\\) from \\(y_0\\) to \\(y_1\\). Then \\(\\gamma(t)=(\\alpha(t),\\beta(t))\\) is continuous in the product topology and joins the desired endpoints.

</details>

## ANA-CH07-I001 — Further investigations

1. Implement bisection for a continuous sign-changing function. Maintain a written invariant showing why the interval still contains a root, and separate existence from the numerical error bound.
2. Explore finite pixel approximations to connected planar sets. Explain why connectivity depends on whether diagonal pixels count as adjacent and why a raster cannot by itself prove topological connectedness.
3. Compare connected components and path components of the topologist's sine curve, identifying which closure and image theorems prove connectedness.

The next chapter, *Continuity, Uniform Control, and Extension*, combines connectedness with compactness to study global control and extension from dense subsets.

## Summary

Connectedness forbids a separation into two nonempty relatively open pieces. On the real line it is exactly the interval property, so continuity yields intermediate values by preserving connected images. Existence of a root and uniqueness of a root remain different conclusions. Common-point unions and continuous paths provide positive constructions; irrational cuts and nontrivial clopen sets provide obstructions. Components are maximal connected subsets and are closed, but need not be open.
`;export{e as default};