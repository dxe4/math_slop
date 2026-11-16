var e=`---
parent_id: book-topology-proof-counterexample
chapter_id: covering-spaces-and-lifting
title: "Covering Spaces and Lifting"
level: advanced-undergraduate
estimated_minutes: 300
license: CC BY-SA 4.0
---

# Covering Spaces and Lifting

A covering map replaces a space by locally identical sheets that may be assembled globally in a different way. On a sufficiently small neighborhood, nothing mysterious happens: every sheet maps homeomorphically to the neighborhood. The global information appears when paths move from sheet to sheet, loops permute a fiber, and homotopy determines which permutations are genuine invariants.

Covering theory has two layers that must be separated. Lifting theorems follow directly from the evenly covered neighborhood condition. Classification by fundamental-group subgroups needs additional local hypotheses on the base. This chapter proves the lifting mechanisms and labels the classification theorem as orientation.

## 1. Covering maps and evenly covered neighborhoods

A continuous surjection $p:E\\to B$ is a **covering map** if every $b \\in B$ has an open neighborhood $U$ such that

$p^{-1}(U)=\\bigsqcup_{\\lambda\\in L} V_{\\lambda}$,

where every $V_{\\lambda}$ is open in $E$ and each restriction $p|V_{\\lambda}:V_{\\lambda}\\to U$ is a homeomorphism. Such a $U$ is **evenly covered**, and the sets $V_{\\lambda}$ are its **sheets**.

Surjectivity is part of our convention. Some authors permit coverings of unions of components by omitting it. No connectedness, Hausdorffness, or local path connectedness is included in the definition.

Every covering map is a local homeomorphism: around $e \\in E$, choose an evenly covered neighborhood of $p(e)$ and use the unique sheet containing $e$. It is also open, because an open subset of $E$ can be intersected with sheets, and each sheet restriction is open. Every fiber $p^{-1}(b)$ is discrete: within a sheet, it contains exactly one point.

A local homeomorphism need not be a covering. Consider

$p:(0,2)\\to S^{1}$, $p(t)=\\exp(2 \\pi i t)$.

It is surjective and locally a homeomorphism. Near $1 \\in S^{1}$, however, the inverse image contains pieces near both missing endpoints $0,2$; those pieces map only onto one-sided arcs and cannot be sheets over any full neighborhood of $1$. Uniform coverage of one base neighborhood by all inverse branches is the missing condition.

## 2. Standard examples and nonexamples

The exponential map

$p:\\mathbb{R}\\to S^{1}$, $p(t)=\\exp(2 \\pi i t)$

is a covering. Any arc shorter than a full circle is evenly covered by translates of one interval. Every fiber is $\\{t_{0}+n:n \\in \\mathbb{Z}\\}$. The total space is simply connected, so this will be the universal cover of the circle.

For $n\\ge 1$, the map $p_{n}:S^{1}\\to S^{1}$, $p_{n}(z)=z^n$, is an $n$-sheeted covering. A sufficiently short arc has $n$ disjoint inverse arcs, one for each $n$th-root branch.

If $F$ is a nonempty discrete space, the projection $B \\times F\\to B$ is a covering; these are the **trivial coverings**. Nonemptiness is required by this chapter's surjectivity convention when $B\\ne\\varnothing$. A general covering looks trivial over each evenly covered neighborhood but need not be a product globally.

The map $q:\\mathbb{C}\\to\\mathbb{C}$, $q(z)=z^{2}$, is not a covering. Every neighborhood of $0$ contains points with two preimages while $0$ has one preimage, and no neighborhood of $0$ admits homeomorphic sheets. Removing the branch points repairs the example: $q:\\mathbb{C}\\setminus\\{0\\}\\to \\mathbb{C}\\setminus\\{0\\}$ is a two-sheeted covering.

The cardinality of a fiber is locally constant. Over a single evenly covered $U$, each sheet contributes exactly one point to every fiber. Therefore a covering over a connected base has a constant number of sheets, possibly infinite.

## 3. Path lifting

Let $I=[0,1]$. The **path lifting theorem** states:

> If $p:E\\to B$ is a covering, $\\gamma:I\\to B$ is a path, and $e_{0} \\in p^{-1}(\\gamma(0))$, there is a unique path $\\widetilde{\\gamma}:I\\to E$ with $\\widetilde{\\gamma}(0)=e_{0}$ and $p \\circ \\widetilde{\\gamma}=\\gamma$.

No local path connectedness of $B$ is required. Covering neighborhoods already supply the local inverse maps.

For existence, cover the compact set $\\gamma(I)$ indirectly by inverse images $\\gamma^{-1}(U)$ of evenly covered neighborhoods. The Lebesgue number lemma gives a partition

$0=t_{0}<t_{1}<...<t_{m}=1$

such that $\\gamma([t_{j-1},t_{j}])$ lies in one evenly covered $U_{j}$. Suppose the lift has been defined through $t_{j-1}$. Exactly one sheet over $U_{j}$ contains its current endpoint. Compose $\\gamma$ on the next subinterval with the inverse of that sheet homeomorphism. Induction constructs a continuous lift; adjacent pieces agree at their shared endpoint.

For uniqueness, suppose $\\lambda$ and $\\mu$ are lifts with the same initial point. The set of times at which they agree is open: an evenly covered neighborhood at a common value forces both nearby lifts into the same sheet and then through the same inverse branch. Its complement is also open: at a time when the lifts differ, they occupy distinct sheets over a common evenly covered neighborhood and remain distinct nearby. Since $I$ is connected and the agreement set is nonempty, the lifts agree everywhere.

Lifting respects reversal and concatenation. Once starting points are matched, both proposed formulas are lifts of the same base path, so uniqueness proves equality. This simple uniqueness argument is safer than repeating coordinate calculations.

## 4. Homotopy lifting

The **homotopy lifting theorem** states:

> Let $p:E\\to B$ be a covering, let $H:Y \\times I\\to B$ be continuous, and let $g:Y\\to E$ be continuous with $p \\circ g=H(-,0)$. There is a unique continuous $\\widetilde{H}:Y \\times I\\to E$ with $\\widetilde{H}(-,0)=g$ and $p \\circ \\widetilde{H}=H$.

This theorem also needs no local path connectedness hypothesis on $B$ or $Y$. For each $y$, path lifting gives a candidate on $\\{y\\} \\times I$. Continuity is proved locally: subdivide the compact time interval so the track of $y$ crosses finitely many evenly covered neighborhoods; continuity of $H$ supplies a neighborhood of $y$ whose nearby tracks cross the same neighborhoods, and the same inverse branches define $\\widetilde{H}$ there. Uniqueness on overlaps follows from path-lift uniqueness, so the local definitions glue.

The most used case is a path homotopy $H:I \\times I\\to B$. If each $H(s,-)$ is a path from $b_{0}$ to $b_{1}$, lift the family from one chosen point over $b_{0}$. The lifted endpoint lies in the discrete fiber over $b_{1}$ and varies continuously with $s$. Since $I$ is connected, that endpoint is constant. Consequently, paths homotopic relative to endpoints have lifts with the same endpoint.

That conclusion can fail if one changes the starting lift during the homotopy. A lifting statement must name the base map, the initial lift, and which boundary values the homotopy fixes.

## 5. Monodromy

Fix a basepoint $b_{0} \\in B$ and write $F=p^{-1}(b_{0})$. Given a loop $\\gamma$ at $b_{0}$ and $e \\in F$, lift $\\gamma$ starting at $e$. Its endpoint is again in $F$. Homotopy lifting shows that this endpoint depends only on $[\\gamma] \\in \\pi_{1}(B,b_{0})$.

We use a right-action convention:

$e\\cdot[\\gamma]=\\operatorname{end}(\\widetilde{\\gamma}_e)$.

If $\\gamma*\\delta$ means first traverse $\\gamma$, then $\\delta$, uniqueness of lifts gives

$(e \\cdot [\\gamma]) \\cdot [\\delta] = e \\cdot [\\gamma*\\delta]$.

The constant loop acts as the identity, and reversed loops act inversely. Thus every loop class permutes the fiber. This permutation action is **monodromy**. It can be written as an ordinary homomorphism after passing from the displayed right action to the corresponding left-action convention; with the opposite convention for path multiplication, an inverse appears. One must declare conventions before computing.

For $p_{n}(z)=z^n$, label the fiber over $1$ by the $n$th roots $e_{k}=\\exp(2 \\pi i k/n)$. The positive generator of $\\pi_{1}(S^{1},1)$ sends $e_{k}$ to $e_{k+1\\pmod{n}}$. Monodromy is the cyclic permutation of the sheets.

If $B$ is path-connected, then $E$ is path-connected exactly when this action on $F$ is transitive. One direction lifts a path in $E$ between fiber points and projects it to a loop. For the other, lift paths in $B$ to bring arbitrary points of $E$ to the chosen fiber, then use a lifted loop supplied by transitivity.

## 6. Fundamental groups under a covering

Choose $e_{0} \\in E$ over $b_{0}$. The induced homomorphism

$p_*:\\pi_{1}(E,e_{0})\\to \\pi_{1}(B,b_{0})$

is injective. If a loop $\\lambda$ in $E$ projects to a null-homotopic loop, lift a null-homotopy of $p \\circ \\lambda$ beginning with $\\lambda$. The other boundary path is the lift of a constant loop and is constant. Hence $\\lambda$ is null-homotopic.

The image subgroup has a direct monodromy meaning:

$p_*(\\pi_{1}(E,e_{0})) = stabilizer of e_{0}$.

Indeed, a loop in $E$ projects to a base loop whose lift at $e_{0}$ closes. Conversely, if a base loop fixes $e_{0}$, its lift is itself a loop in $E$ and its projection represents the original class.

There is also a lifting criterion. Let $Y$ be path-connected and locally path-connected, choose $y_{0} \\in Y$, and let $f:(Y,y_{0})\\to(B,b_{0})$ be continuous. A lift $\\widetilde{f}:Y\\to E$ with $\\widetilde{f}(y_{0})=e_{0}$ exists exactly when

$f_*(\\pi_{1}(Y,y_{0})) \\subseteq p_*(\\pi_{1}(E,e_{0}))$.

Necessity follows by applying fundamental groups to $p \\circ \\widetilde{f}=f$. For sufficiency, define $\\widetilde{f}(y)$ by lifting $f \\circ \\gamma$, where $\\gamma$ is a path from $y_{0}$ to $y$. The subgroup condition makes the endpoint independent of the chosen path. Local path connectedness lets one choose paths locally inside a small inverse image of an evenly covered neighborhood, proving continuity.

## 7. Classification orientation

A space is **semilocally simply connected at $b$** if some neighborhood $U$ of $b$ has the property that every loop in $U$ based at $b$ becomes null-homotopic in $B$. Under local path connectedness, equivalent formulations may move the loop basepoint within a smaller path-connected neighborhood.

**Classification theorem for covering spaces (orientation; full construction not proved here).** Let $B$ be path-connected, locally path-connected, and semilocally simply connected. Then:

- based isomorphism classes of path-connected coverings $(E,e_{0})\\to(B,b_{0})$ correspond to subgroups $H\\le \\pi_{1}(B,b_{0})$;
- unbased isomorphism classes of connected coverings correspond to conjugacy classes of subgroups;
- the subgroup attached to a based covering is $p_*(\\pi_{1}(E,e_{0}))$;
- the fiber, as a right $\\pi_{1}(B,b_{0})$-set, is modeled by the right cosets $H\\backslash\\pi_{1}(B,b_{0})$;
- the number of sheets is the index $[\\pi_{1}(B,b_{0}):H]$;
- the covering is regular when $H$ is normal, and then its deck group is isomorphic to the quotient $\\pi_{1}(B,b_{0})/H$;
- the trivial subgroup produces a simply connected universal covering.

The construction starts with path classes beginning at $b_{0}$, identifies two paths when they end at the same point and their difference loop lies in $H$, and uses sufficiently small neighborhoods to define charts. Semilocal simple connectivity supplies neighborhoods on which these charts are genuinely disjoint sheets. Local path connectedness controls endpoints and continuity. These hypotheses belong to the existence and classification mechanism, not to path lifting for a covering already given.

## 8. The semilocal boundary

The **Hawaiian earring** is the union in the plane of circles with center $(1/n,0)$ and radius $1/n$, all tangent at the origin. It is path-connected and locally path-connected, but it is not semilocally simply connected at the origin. Every neighborhood of the origin contains all sufficiently small circles, and a loop once around any one of them is nontrivial in the whole earring: collapsing all other circles to the origin gives a retraction onto that circle.

It follows that the Hawaiian earring has no simply connected covering space. If $p:E\\to B$ were such a covering and $U$ were evenly covered at the origin, choose a sheet $V$ over $U$. Every loop in $U$ lifts to a loop in $V$ when started at its point over the origin. Because $E$ is simply connected, that lifted loop is null-homotopic upstairs; composing its null-homotopy with $p$ makes the original loop null-homotopic in $B$. This would make $B$ semilocally simply connected at the origin, contradicting the small-circle loops.

Coverings may still exist over spaces that fail the standard classification hypotheses. What fails is the promise of a universal cover and a simple correspondence with every subgroup. Modern generalized covering theories address this boundary, but their lifting objects need not be classical evenly sheeted coverings.

## 9. Proof and counterexample workflow

To prove that a map is a covering, produce one neighborhood and all its sheets, checking disjointness, exhaustiveness, and the homeomorphism restriction. Showing only that each source point has a local inverse proves local homeomorphism, not covering. To disprove covering behavior, look for changing fiber cardinality, branching, or inverse branches that run into a missing endpoint.

For lifting, state the starting point or initial lift. Use compactness of the parameter interval to reduce to finitely many evenly covered neighborhoods, then use uniqueness to glue. For classification, audit path connectedness, local path connectedness, and semilocal simple connectivity before invoking the subgroup dictionary.

## Exercises with complete solutions

### TOP-CH19-E001 — Exercise 1
Prove that the projection $B \\times F\\to B$ is a covering when $F$ is nonempty and discrete.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the discrete points as sheet labels.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For an open base neighborhood, examine its products with singleton fiber points.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH19-E001 — Solution 1
For any open $U \\subseteq B$, its inverse image is the disjoint union of open sets $U \\times \\{a\\}$ over $a \\in F$. Projection restricts on each such set to a homeomorphism onto $U$. Taking any neighborhood $U$ of each basepoint proves the covering condition.

</details>

### TOP-CH19-E002 — Exercise 2
Verify that $p:\\mathbb{R}\\to S^{1}$, $p(t)=\\exp(2 \\pi i t)$, is a covering.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Choose a short circle arc admitting a continuous argument.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Translate one real inverse branch by integers and check that the translated intervals exhaust the preimage.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH19-E002 — Solution 2
For $z \\in S^{1}$, choose an open arc $U$ containing $z$ but not the antipodal point. A continuous argument $\\theta:U\\to(a,a+1)$ gives one inverse branch. Then $p^{-1}(U)$ is the disjoint union of intervals obtained by adding each integer to $\\theta(U)$, and $t\\to p(t)$ restricts to a homeomorphism from every interval onto $U$.

</details>

### TOP-CH19-E003 — Exercise 3
Prove that $p_{n}:S^{1}\\to S^{1}$, $p_{n}(z)=z^n$, is an $n$-sheeted covering.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Take a short argument interval in the target circle.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Divide the argument and add the possible full-turn offsets before checking the disjoint branches.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH19-E003 — Solution 3
Choose a short open arc $U$ with a continuous argument interval of length less than $2 \\pi$. Dividing that argument by $n$ and adding $2 \\pi k/n$, for $k=0,...,n-1$, gives $n$ continuous root branches. Their image arcs are disjoint, exhaust $p_{n}^{-1}(U)$, and each restriction of $p_{n}$ is a homeomorphism onto $U$.

</details>

### TOP-CH19-E004 — Exercise 4
Prove that a covering map is open and that every fiber is discrete.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Work separately on every sheet over one evenly covered neighborhood.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For a fiber point, its sheet isolates it from all other points in that fiber.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH19-E004 — Solution 4
Let $O \\subseteq E$ be open. Over an evenly covered $U$, the set $p(O) \\cap U$ is the union over sheets $V$ of the open sets $p(O \\cap V)$, so it is open in $U$ and hence locally open in $B$. Therefore $p(O)$ is open. If $e \\in p^{-1}(b)$, its sheet over an evenly covered neighborhood contains no other point of the fiber, so the fiber is discrete in its subspace topology.

</details>

### TOP-CH19-E005 — Exercise 5
Show that the number of sheets is constant on each connected component of the base.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compare the fibers over points of one evenly covered neighborhood.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A locally constant quantity cannot have two different values on a connected set.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH19-E005 — Solution 5
Over an evenly covered neighborhood $U$, every sheet contributes exactly one point to every fiber, so the fiber cardinality is constant on $U$. Thus the cardinal-valued function $b\\to|p^{-1}(b)|$ is locally constant. A locally constant function on a connected space is constant; applying this to each component proves the claim.

</details>

### TOP-CH19-E006 — Exercise 6
Show carefully that $p:(0,2)\\to S^{1}$, $p(t)=\\exp(2 \\pi i t)$, is a surjective local homeomorphism but not a covering.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Local inverse branches exist at each input point.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Examine the two sides of the target value one and the missing endpoint zero in the proposed source.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH19-E006 — Solution 6
Every $t \\in (0,2)$ has a short interval on which the exponential is injective, so $p$ is a local homeomorphism; two turns make it surjective. If a neighborhood $U$ of $1$ were evenly covered, it would contain a short arc on both sides of $1$. The component of $p^{-1}(U)$ near $0$ has no points mapping to the side approached by parameters just below an integer, because $0$ is absent. Hence that component cannot map onto $U$, contradicting the sheet condition.

</details>

### TOP-CH19-E007 — Exercise 7
Prove that $q:\\mathbb{C}\\to\\mathbb{C}$, $q(z)=z^{2}$, is not a covering, but its restriction over $\\mathbb{C}\\setminus\\{0\\}$ is.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compare fiber sizes at zero and nearby nonzero values.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Away from zero, choose a sufficiently small argument neighborhood and its two root branches.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH19-E007 — Solution 7
The fiber over $0$ has one point, while every nonzero fiber has two. Fiber cardinality would be locally constant for a covering, so $q$ is not a covering at $0$. On $\\mathbb{C}\\setminus\\{0\\}$, every point has a small disk avoiding $0$ on which two continuous square-root branches exist; their disjoint images are the two sheets.

</details>

### TOP-CH19-E008 — Exercise 8
Construct a lift of a path by a finite subdivision and justify continuity at subdivision points.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Pull the evenly covered neighborhoods back to the compact parameter interval.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Choose a finite subdivision and select successive inverse branches by their common endpoint values.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH19-E008 — Solution 8
Pull back an evenly covered neighborhood cover along the path and use a Lebesgue number to choose a partition whose subinterval images lie in single covering neighborhoods. Starting at the prescribed lift, choose on each subinterval the inverse branch belonging to the sheet containing the preceding endpoint. Adjacent formulas have the same value at their common endpoint. The pasting lemma for a finite closed subdivision then makes the assembled lift continuous.

</details>

### TOP-CH19-E009 — Exercise 9
Prove uniqueness of path lifts with a common starting point.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Consider the times when the two lifts agree.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Show both the agreement set and its complement are open using common or distinct sheets.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH19-E009 — Solution 9
For lifts $\\lambda,\\mu$, let $A=\\{t:\\lambda(t)=\\mu(t)\\}$. Around a time in $A$, both lifts lie in the same sheet over a sufficiently small interval and equal the same inverse branch, so $A$ is open. Around a time outside $A$, the lifts lie in distinct sheets and remain distinct, so the complement is open. The connected interval $I$ cannot be partitioned into two nonempty open sets. Since $0 \\in A$, we have $A=I$.

</details>

### TOP-CH19-E010 — Exercise 10
If $\\gamma*\\delta$ traverses $\\gamma$ first, prove that its lift is the concatenation of the lift of $\\gamma$ with the lift of $\\delta$ starting at the first lift's endpoint.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Concatenate the two specified lifted paths.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Check its starting point, continuity and projection, then invoke uniqueness rather than rebuilding the lift.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH19-E010 — Solution 10
The stated concatenation is continuous, starts at the required point, and projects piecewise to $\\gamma$ and $\\delta$, hence to $\\gamma*\\delta$. The path lifting theorem gives a unique lift with that starting point, so the concatenation must be it.

</details>

### TOP-CH19-E011 — Exercise 11
Prove that paths homotopic relative to endpoints have lifts with the same endpoint when the lifts start at the same point.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Lift the endpoint-relative path homotopy.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Its terminal edge stays in one discrete fiber and is parametrized by a connected interval.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH19-E011 — Solution 11
Lift the path homotopy using the constant initial lift at the common starting point. Along the terminal edge, the lifted values lie in the discrete fiber over the fixed terminal basepoint. This edge is a continuous map from connected $I$ to a discrete space, so it is constant. Its values at the two ends are the endpoints of the two path lifts, hence those endpoints agree.

</details>

### TOP-CH19-E012 — Exercise 12
Prove that $p_*:\\pi_{1}(E,e_{0})\\to \\pi_{1}(B,b_{0})$ is injective for a covering.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Start with an upstairs loop whose image is null-homotopic.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Lift a based null-homotopy, keeping its endpoint edges fixed in discrete fibers.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH19-E012 — Solution 12
Suppose a loop $\\lambda$ at $e_{0}$ projects to a null-homotopic loop. Lift a based null-homotopy of $p \\circ \\lambda$, using $\\lambda$ as the lift along its initial edge. The opposite edge projects to the constant loop at $b_{0}$ and begins at $e_{0}$; uniqueness makes it the constant lift. The lifted homotopy therefore contracts $\\lambda$, so the kernel of $p_*$ is trivial.

</details>

### TOP-CH19-E013 — Exercise 13
Prove the necessity in the lifting criterion for a map $f:(Y,y_{0})\\to(B,b_{0})$.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Express the assumed lift through the projection.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Apply functoriality to that factorisation and compare the resulting images of fundamental groups.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH19-E013 — Solution 13
If $\\widetilde{f}$ is a lift with $\\widetilde{f}(y_{0})=e_{0}$, then $f=p \\circ \\widetilde{f}$. Applying fundamental groups gives $f_*=p_* \\circ (\\widetilde{f})_*$. Therefore every element of the image of $f_*$ lies in the image of $p_*$, which is the required subgroup inclusion.

</details>

### TOP-CH19-E014 — Exercise 14
Verify directly that endpoint lifting defines a right action of $\\pi_{1}(B,b_{0})$ on the fiber.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Check independence of representatives, identity and multiplication separately.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use homotopy lifting for independence and the successive-lift rule for the product order.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH19-E014 — Solution 14
Homotopy lifting makes the endpoint depend only on the loop class. A constant loop lifts constantly, so the identity class fixes every fiber point. By Exercise 10, lifting $\\gamma*\\delta$ first lifts $\\gamma$ and then lifts $\\delta$ from the new endpoint, giving $e \\cdot ([\\gamma][\\delta])=(e \\cdot [\\gamma]) \\cdot [\\delta]$. Reversal supplies inverses. These are the right-action axioms.

</details>

### TOP-CH19-E015 — Exercise 15
Compute the monodromy of $p_{n}(z)=z^n$ over basepoint $1$.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Label the roots of unity in cyclic order.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Lift one positive turn from an arbitrary root and compare its endpoint with the labels.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH19-E015 — Solution 15
Label the fiber by $e_{k}=\\exp(2 \\pi i k/n)$. Lift the generator $\\gamma(t)=\\exp(2 \\pi i t)$ starting at $e_{k}$; the lift is $\\widetilde{\\gamma}(t)=\\exp(2 \\pi i(k+t)/n)$. Its endpoint is $e_{k+1\\pmod{n}}$. Thus the generator acts by one $n$-cycle.

</details>

### TOP-CH19-E016 — Exercise 16
Assume $B$ is path-connected. Prove that path-connected $E$ implies the monodromy action on a fiber is transitive.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Join two selected points of the same fiber by a path upstairs.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Project that path to a loop and apply unique path lifting from its chosen starting point.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH19-E016 — Solution 16
For $e,e'$ in the same fiber, choose a path $\\lambda$ in $E$ from $e$ to $e'$. Its projection is a loop $\\gamma$ at the basepoint. The unique lift of $\\gamma$ starting at $e$ is $\\lambda$, so $e \\cdot [\\gamma]=e'$. Hence every fiber point lies in one orbit.

</details>

### TOP-CH19-E017 — Exercise 17
For $p_{n}:S^{1}\\to S^{1}$, compute $p_*(\\pi_{1}(S^{1}))$ and relate its index to the number of sheets.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use winding number on the upstairs and downstairs circles.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Compare the image subgroup with the cosets indexing the fiber.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH19-E017 — Solution 17
Under $\\pi_{1}(S^{1})=\\mathbb{Z}$, a loop of winding number $k$ upstairs projects to one of winding number $nk$. Thus $p_*$ is multiplication by $n$, with image $n\\mathbb{Z}$. Its index in $\\mathbb{Z}$ is $n$, equal to the $n$ points in each fiber.

</details>

### TOP-CH19-E018 — Exercise 18
Show that for $n>1$, the covering $p_{n}:S^{1}\\to S^{1}$ has no continuous section.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Assume a section and compose it with the covering projection.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Apply fundamental groups and ask whether an integer homomorphism can undo multiplication by n.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH19-E018 — Solution 18
If $s$ were a section, then $p_{n} \\circ s=\\operatorname{id}$. On fundamental groups this gives $(p_{n})_* \\circ s_*=\\operatorname{id}_{\\mathbb{Z}}$. But $(p_{n})_*$ is multiplication by $n$, so the left side has image contained in $n\\mathbb{Z}$ and cannot equal the identity when $n>1$. Therefore no section exists.

</details>

### TOP-CH19-E019 — Exercise 19
Let $p:E\\to B$ be a finite-sheeted covering with compact Hausdorff base. Prove that $E$ is compact.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Shrink finitely many evenly covered base neighborhoods using compact Hausdorff regularity.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Lift the compact closures; finiteness of the sheet count is what makes each lifted closure compact.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH19-E019 — Solution 19
Choose finitely many evenly covered open sets $U_{j}$ covering $B$. By regularity and compactness, refine to finitely many open $W_{j}$ whose closures are compact and lie in corresponding $U_{j}$, still covering $B$. Over $U_{j}$, the inverse image of $\\operatorname{cl}(W_{j})$ is a finite disjoint union of copies of $\\operatorname{cl}(W_{j})$, hence compact. These finitely many compact inverse images cover $E$, so $E$ is compact.

</details>

### TOP-CH19-E020 — Exercise 20
Explain why the Hawaiian earring has no simply connected classical covering space.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Every neighborhood of the common origin contains a sufficiently small circle.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Compare that circle loop with what a simply connected covering would force for loops in one evenly covered neighborhood.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH19-E020 — Solution 20
Every neighborhood of the common origin contains an entire sufficiently small constituent circle. Its once-around loop is nontrivial because retraction onto that circle sends it to a generator of $\\pi_{1}(S^{1})$. If a simply connected covering existed, choose an evenly covered neighborhood $U$ of the origin. Every loop in $U$ lifts, in a chosen sheet, to a loop. That lifted loop is null-homotopic because the total space is simply connected, and composing its null-homotopy with the covering map makes the original loop null-homotopic in the earring. This contradicts the small-circle loop, so no such covering exists.

</details>

## Chapter checkpoint

An evenly covered neighborhood supplies simultaneous inverse branches, stronger than pointwise local homeomorphism. Compactness of the path parameter turns those branches into existence of lifts, and sheet separation gives uniqueness. Homotopy lifting makes endpoints depend only on homotopy classes, producing the monodromy action and the stabilizer subgroup $p_*(\\pi_{1}(E))$. Under path connectedness, local path connectedness, and semilocal simple connectivity, these subgroups classify connected coverings. The Hawaiian earring marks the boundary: classical lifting remains valid for any covering that exists, but a universal covering and the full subgroup classification need not exist.
`;export{e as default};