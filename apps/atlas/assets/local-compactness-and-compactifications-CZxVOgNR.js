var e=`---
parent_id: book-topology-proof-counterexample
chapter_id: local-compactness-and-compactifications
title: "Local Compactness and Compactifications"
level: advanced-undergraduate
estimated_minutes: 300
license: CC BY-SA 4.0
---

# Local Compactness and Compactifications

Compactness is global: one finite subcover must control the whole space. **Local compactness** asks for compact control near each point. That modest change makes noncompact spaces such as $\\mathbb{R}^n$, manifolds, and infinite discrete spaces behave like compact spaces in bounded regions. It also determines exactly when a noncompact Hausdorff space can be compactified by adding one point.

The phrase “locally compact” is not used uniformly in the literature. This chapter begins by fixing conventions, because several familiar equivalences silently require separation axioms.

## 1. Convention discipline

A subset $N$ of $X$ is a **neighborhood** of $x$ if some open set $U$ satisfies $x \\in U \\subseteq N$; $N$ itself need not be open. In this chapter:

- $X$ is **locally compact at $x$** if $x$ has a compact neighborhood;
- $X$ is **locally compact** if it is locally compact at every point;
- **LCH** means locally compact and Hausdorff.

Some books define local compactness by demanding a base of open sets with compact closure. In a Hausdorff space the two definitions agree, but without Hausdorffness they can differ. Some authors also build Hausdorffness into the words “locally compact.” Every theorem below states the separation hypotheses it uses.

For an LCH space, the most useful form is the **shrinking property**:

> If $x \\in O$ and $O$ is open, there is an open $V$ with $x \\in V$, $\\operatorname{cl}(V)$ compact, and $\\operatorname{cl}(V) \\subseteq O$.

To prove it, first choose a compact neighborhood $N$ of $x$, with $x \\in W \\subseteq N$ and $W$ open. The compact Hausdorff subspace $N$ is regular. Inside $N$, choose relatively open $A$ with $x \\in A$ and $\\operatorname{cl}_{N}(A) \\subseteq O \\cap W$. Write $A=N \\cap G$ for ambient-open $G$, and put $V=G \\cap O \\cap W$. Then $V$ is ambient-open, contains $x$, and lies in $A$. Compact $N$ is closed in Hausdorff $X$, so $\\operatorname{cl}_{X}(V) \\subseteq \\operatorname{cl}_{X}(A)=\\operatorname{cl}_{N}(A) \\subseteq O$; this closure is compact. This also proves that every LCH space is regular.

Thus, under Hausdorffness, the following are equivalent at each point:

1. there is a compact neighborhood;
2. there is an open neighborhood with compact closure;
3. every neighborhood contains an open neighborhood with compact closure.

The third formulation is strongest in appearance but follows from the first only after using Hausdorff separation.

## 2. Examples and first boundaries

Every compact Hausdorff space is LCH: the whole space is a compact neighborhood of every point. Euclidean space is LCH because a sufficiently small open ball about a point has a compact closed-ball closure. More generally, every finite-dimensional normed space is LCH.

Every discrete space is LCH. A singleton is an open compact neighborhood, even when the space is uncountable. Hence local compactness neither implies compactness nor second countability.

The rational line $\\mathbb{Q}$ is not locally compact. Given $q \\in \\mathbb{Q}$ and a neighborhood $N$, choose real numbers $a<q<b$ with $\\mathbb{Q} \\cap (a,b) \\subseteq N$. Choose an irrational $r \\in (a,b)$ and a rational sequence $q_{n}\\to r$. Any compact neighborhood inside $N$ would contain a smaller rational interval around $q$, and that interval contains such a sequence after choosing $r$ in the smaller interval. The sequence has no convergent subsequence in $\\mathbb{Q}$, contradicting compactness in the metric subspace. This also shows that local compactness is not hereditary to arbitrary subspaces.

Infinite-dimensional normed spaces provide another important boundary: they are metrizable and homogeneous but not locally compact. Proving this requires the fact that a normed space has compact closed unit ball exactly in finite dimension.

## 3. Preservation and failure of preservation

Local compactness is invariant under homeomorphism. In the Hausdorff setting it passes to open and closed subspaces. If $A$ is open and $x \\in A$, use the shrinking property inside the open set $A$; the resulting compact closure lies in $A$. If $F$ is closed and $x \\in F$, intersect a compact ambient neighborhood with $F$.

Finite products of LCH spaces are LCH. For $(x,y) \\in X \\times Y$, choose neighborhoods with compact closures $K$ and $L$; their product is a neighborhood with compact closure contained in $K \\times L$, which is compact. The arbitrary-product boundary is sharp: for a nonempty product of Hausdorff spaces to be locally compact, all but finitely many factors must be compact, provided each factor is locally compact. Sufficiency uses a finite product of compact neighborhoods and compactness of the remaining product. Necessity follows because a basic open set restricts only finitely many coordinates; if its closure lies in a compact set, projection shows every unrestricted factor is compact.

Continuous images need not preserve local compactness. Put the discrete topology on the underlying set of $\\mathbb{Q}$. The identity from this LCH discrete space onto $\\mathbb{Q}$ with its usual topology is continuous and surjective, while the codomain is not locally compact. Extra hypotheses, often involving properness, are needed.

## 4. The Alexandroff one-point construction

Let $X$ be a noncompact LCH space. Add a new point $\\infty$ and write

$\\alpha X = X \\cup \\{\\infty\\}$.

Declare the open sets to be:

1. all open subsets of $X$; and
2. all sets of the form $(\\alpha X)\\setminus K$, where $K$ is a compact subset of $X$.

Equivalently, a neighborhood of $\\infty$ contains the complement of a compact subset of $X$. This is the **Alexandroff topology** or **one-point compactification topology**.

The Hausdorff hypothesis does real work. Compact subsets of a Hausdorff space are closed, so an open set of $X$ intersected with $(\\alpha X)\\setminus K$ remains open in $X$. Finite unions of compact sets are compact, giving finite intersections of neighborhoods of $\\infty$; arbitrary unions cause no difficulty after taking one member that contains $\\infty$. These facts verify the topology axioms.

The space $\\alpha X$ is compact. Given an open cover, choose a member containing $\\infty$; its complement lies in some compact $K \\subseteq X$. Finitely many more cover members cover $K$.

It is Hausdorff. Two points of $X$ are separated in $X$. To separate $x \\in X$ from $\\infty$, use the shrinking property to find an open $U$ containing $x$ with compact closure. Then $U$ and $(\\alpha X)\\setminus \\operatorname{cl}(U)$ are disjoint open neighborhoods of $x$ and $\\infty$.

Finally, $X$ is open and dense in $\\alpha X$. It is open by definition. If $\\infty$ were isolated, $\\{\\infty\\}$ would equal $(\\alpha X)\\setminus K$ for some compact $K$, forcing $K=X$, contrary to noncompactness. Thus every neighborhood of $\\infty$ meets $X$.

If $X$ is already compact, the same formula makes $\\infty$ isolated because $K=X$ is allowed. The result is a compact disjoint union, but $X$ is not dense, so it is not a compactification under the convention used here.

## 5. The theorem and its converse

A **compactification** of a Hausdorff space $X$ is an embedding $e:X\\to Y$ into a compact Hausdorff space $Y$ such that $e(X)$ is dense. We usually identify $X$ with its image. A **one-point compactification** has $Y\\setminus X$ equal to one point.

**Theorem 18.1 (One-point compactification).** A noncompact Hausdorff space has a Hausdorff one-point compactification if and only if it is locally compact. When it exists, it is unique up to a homeomorphism that fixes $X$ pointwise.

The forward construction is $\\alpha X$. For the converse, suppose $Y$ is compact Hausdorff, $X$ is a dense subspace, and $Y\\setminus X=\\{p\\}$. If $x \\in X$, choose disjoint open neighborhoods $U$ of $x$ and $V$ of $p$ in $Y$. The closure of a suitably shrunken $U$ avoids $p$, so it is a compact subset of $X$; its trace supplies a compact neighborhood of $x$ in $X$. Hence $X$ is LCH.

The topology is forced. If $O$ is an **open** neighborhood of $p$ in $Y$, then $Y\\setminus O$ is a closed subset of compact $Y$, hence compact, and it lies in $X$. Conversely, if $K \\subseteq X$ is compact, then $K$ is closed in Hausdorff $Y$, so $Y\\setminus K$ is an open neighborhood of $p$. Thus the open neighborhoods of the added point are exactly the complements of compact subsets of $X$; an arbitrary neighborhood merely contains one of these. This proves uniqueness: the identity on $X$, extended by sending one added point to the other, is a homeomorphism.

The hypotheses cannot be blurred. Noncompactness is required for density after adding a point. Hausdorffness makes compact subsets closed and makes the new compactification Hausdorff. Local compactness is not merely convenient: the converse proves it necessary.

## 6. What convergence to infinity means

A net $(x_{i})$ in $X$ converges to $\\infty$ in $\\alpha X$ exactly when it is **eventually outside every compact subset of $X$**. This is just the neighborhood definition rewritten: for each compact $K$, eventually $x_{i} \\in (\\alpha X)\\setminus K$.

For $X=\\mathbb{R}$, a sequence converges to the added point when its absolute value tends to infinity; it may alternate between the two ends. Thus the one-point compactification joins both ends of the line. In fact $\\alpha \\mathbb{R}$ is homeomorphic to the circle. More generally, $\\alpha \\mathbb{R}^n$ is homeomorphic to the sphere $S^n$ by inverse stereographic projection.

For an infinite discrete space $D$, compact subsets are precisely the finite subsets. Hence neighborhoods of $\\infty$ are cofinite. When $D=\\mathbb{N}$, $\\alpha\\mathbb{N}$ is homeomorphic to the convergent sequence $\\{0\\} \\cup \\{1/n:n\\ge 1\\}$, with $\\infty$ corresponding to $0$.

For $[0,1)$, the added point behaves like the missing endpoint and $\\alpha[0,1)$ is homeomorphic to $[0,1]$. These homeomorphisms depend on topology, not on interpreting $\\infty$ as a numerical value.

## 7. Proper maps

For LCH spaces, a continuous map $f:X\\to Y$ is **proper** if $f^{-1}(K)$ is compact for every compact $K \\subseteq Y$. This is sometimes called compact-proper. In broader categories, authors may instead define proper to mean closed with compact fibers; the definitions agree under standard locally compact Hausdorff hypotheses but should not be exchanged without checking assumptions.

Proper maps are designed for one-point compactification. For LCH spaces $X,Y$, define

$\\alpha f:\\alpha X\\to \\alpha Y$

by $\\alpha f(x)=f(x)$ on $X$ and $\\alpha f(\\infty_{X})=\\infty_{Y}$. At points of $X$, continuity is inherited. For a basic neighborhood $(\\alpha Y)\\setminus K$ of $\\infty_{Y}$, its inverse image is

$(\\alpha X)\\setminus f^{-1}(K)$,

a neighborhood of $\\infty_{X}$ exactly when $f^{-1}(K)$ is compact. Therefore $f$ is proper if and only if $\\alpha f$ is continuous and sends $\\infty_X$ to $\\infty_Y$. When both spaces are noncompact, these are their one-point compactifications. With the same adjoining-point convention for compact spaces, the equivalence also covers the edge cases: if $X$ is compact then every continuous $f:X\\to Y$ is proper and $\\infty_X$ is isolated; if $Y$ is compact and $X$ is noncompact, no proper map $X\\to Y$ exists because $f^{-1}(Y)=X$, and continuity at $\\infty_X$ likewise fails for the open singleton $\\{\\infty_Y\\}$.

This equivalence gives useful examples. A closed embedding of an LCH space is proper: the inverse image of a compact set is identified with a closed subset of that compact set. If $K$ is compact, the projection $X \\times K\\to X$ is proper because the inverse image of a compact $C$ is $C \\times K$. Compositions of proper maps are proper. A constant map $X\\to \\{\\ast\\}$ is proper exactly when $X$ is compact.

A proper continuous map between LCH spaces is closed. One proof uses compactification: $\\alpha f$ maps compact $\\alpha X$ into Hausdorff $\\alpha Y$, so it is closed. If $F$ is closed in $X$, then $F \\cup \\{\\infty_{X}\\}$ is closed in $\\alpha X$; its image is $f(F) \\cup \\{\\infty_{Y}\\}$, whose intersection with $Y$ is $f(F)$, closed in $Y$.

## 8. Compactification as boundary data

Different compactifications record different ways to approach a boundary. The one-point compactification deliberately identifies every route that eventually leaves compact subsets. It is economical, but it may discard distinctions between ends or oscillatory behavior.

Compactifications exist beyond the locally compact setting, but Hausdorff compactifications have their own exact separation boundary. A space is **completely regular** if points can be separated from closed sets by continuous real-valued functions. A completely regular Hausdorff space is often called **Tychonoff**.

**Stone-Cech compactification (orientation; construction not proved here).** Every Tychonoff space $X$ has a compact Hausdorff compactification $\\beta X$ such that every continuous map $f:X\\to K$ into a compact Hausdorff space extends uniquely to a continuous map $\\beta f:\\beta X\\to K$.

The universal property, rather than the size of the remainder, characterizes $\\beta X$. A standard construction embeds $X$ into a product of compact intervals using all bounded continuous real-valued functions and takes the closure. Its proof uses product compactness and careful function separation.

For $\\mathbb{N}$ discrete, $\\alpha\\mathbb{N}$ and $\\beta\\mathbb{N}$ are very different. The alternating map $n\\to(-1)^n$ into the compact discrete space $\\{-1,1\\}$ does not extend continuously over $\\alpha\\mathbb{N}$, because continuity at $\\infty$ would force the sequence eventually into one singleton. Stone-Cech guarantees an extension over $\\beta\\mathbb{N}$. Thus the one-point compactification solves a local-compactness problem, while Stone-Cech solves a universal extension problem.

## 9. Proof and counterexample workflow

When local compactness is claimed, first ask which convention is active and whether Hausdorffness is available. Under LCH hypotheses, aim for the shrinking property; it is the form needed for subspaces, Hausdorffness of $\\alpha X$, and most mapping arguments. To refute local compactness in a metric space, put a non-precompact or incomplete sequence inside every candidate neighborhood.

For a proposed one-point compactification, inspect the neighborhoods of the added point. Their complements must be precisely the compact subsets of $X$. For a proposed extension of a map, inverse images of those complements turn continuity at infinity into properness. For a larger compactification, state which universal property or boundary behavior is intended rather than assuming all compactifications are interchangeable.

## Worked examples: neighborhoods, infinity, and products

### Worked example 1 — The two ends of a line meet at one point

The one-point compactification of $\\mathbb R$ is a circle, not a closed interval. Define
$h(t)=(2t/(1+t^2),(t^2-1)/(1+t^2))$
and $h(\\infty)=(0,1)$. The sum of the squared coordinates equals one, so this map lands on the circle. Away from $(0,1)$ its inverse is $t=x/(1-y)$, proving a homeomorphism between the ordinary line and the punctured circle.

It remains to check the added point, because a formula on the dense old space alone is not enough. As $|t|\\to\\infty$, the first coordinate tends to zero and the second tends to one. For every neighborhood of $(0,1)$, continuity of these limits gives an $R$ such that its inverse image contains $\\{\\infty\\}\\cup(\\mathbb R\\setminus[-R,R])$. This is a neighborhood of infinity. Thus the extended map is continuous. It is bijective from a compact space to a Hausdorff space, so its inverse is continuous as well.

Both $n$ and $-n$ converge to the same infinity point. They are different ways of escaping compact sets, but this compactification deliberately identifies them. By contrast, the arctangent completion of a particular bounded metric adds two endpoints. Completion and one-point compactification answer different questions and need not give the same boundary.

### Worked example 2 — Properness decides whether infinity is respected

Consider $p:\\mathbb R\\to[0,\\infty)$ defined by $p(t)=t^2$. A compact subset $K$ of the target is closed and bounded, say $K\\subseteq[0,M]$. Its inverse image is closed in $\\mathbb R$ and contained in $[-\\sqrt M,\\sqrt M]$, hence compact. Thus $p$ is proper. The extension sends infinity to infinity and is continuous: a compact obstruction in the target has a compact inverse obstruction in the domain.

The continuous map $s:\\mathbb R\\to[-1,1]$, $s(t)=\\sin t$, is not proper. The inverse image of the compact set $\\{0\\}$ is $\\pi\\mathbb Z$, which is unbounded and noncompact. In the convention that adjoins an extra point even to a compact space, infinity is isolated in $\\alpha[-1,1]$. An extension carrying domain infinity to that target infinity would require the singleton infinity to have an open inverse image. Its inverse image would be just the domain infinity, which is not open because $\\mathbb R$ is noncompact. No such extension exists.

This target convention matters. A different question asks whether sine has any limit along escape to infinity in its original compact target. It does not: integer multiples of $2\\pi$ have image zero, while $\\pi/2+2\\pi n$ have image one. The two questions have related answers here, but their definitions should not be merged.

### Worked example 3 — Infinitely many noncompact factors block local compactness

The product $\\mathbb R^{\\mathbb N}$ is not locally compact. Suppose a compact neighborhood $K$ of zero existed. It would contain a basic open box $B$ restricting only finitely many coordinates. Choose an unrestricted coordinate $j$. The projection of $B$ onto that coordinate is all of $\\mathbb R$, so the projection of $K$ also contains all of $\\mathbb R$. A continuous image of a compact space is compact, a contradiction.

In contrast, $\\mathbb R^k\\times[0,1]^{\\mathbb N}$ is locally compact Hausdorff. Around a point choose a bounded open box in the finite-dimensional factor; its closure is compact. Its product with the entire cube is a compact neighborhood. Compactness of the infinite cube uses [Tychonoff's theorem with its choice hypothesis](compactness-covers-and-finite-control.md), not a repeated finite-product argument.

The distinction is that basic neighborhoods leave almost every factor entirely unrestricted. Those unrestricted factors must themselves be compact if the neighborhood is to have compact closure. A product may have infinitely many factors; what is restricted is the number of noncompact factors.

## Compactifications as comparison problems

A compactification is not merely a larger compact set containing a copy of the old points. It includes a specified dense embedding. Density rules out adding an unrelated compact component, and the embedding specifies which original open sets must be retained. Two pictures of a boundary can only be compared after these embeddings have been identified.

The one-point construction has a particularly rigid neighborhood rule: every neighborhood of infinity contains the complement of a compact closed subset of the old space. In a locally compact Hausdorff space this rule is compatible with the old topology and separates infinity from each old point. Local compactness is used exactly at that separation step. The rational line shows why Hausdorffness alone cannot replace it.

Stone-Cech compactification asks for a stronger extension property, involving all continuous maps into compact Hausdorff targets. One extra point often cannot accommodate all those limiting behaviors. On a discrete countably infinite space, the alternating zero-one function gives a direct obstruction: it takes both values infinitely often, and no single limit at infinity can serve both tails. This does not prevent the one-point compactification from existing; it prevents it from satisfying the stronger universal property.

The usual construction of Stone-Cech places a completely regular Hausdorff space into a cube indexed by continuous unit-interval-valued functions and then closes the image. The cube's compactness is precisely the arbitrary-product theorem. The embedding and extension arguments also require point-separating functions, not just Hausdorff disjoint neighborhoods. The separating-function construction is developed in [Urysohn and Tietze Extension](urysohn-tietze-extension.md). These dependencies explain why an informal appeal to “add enough limit points” does not constitute a compactification proof.

## Exercises with complete solutions

### TOP-CH15-E001 — Exercise 1
In an LCH space, prove that every point has a base of open neighborhoods with compact closure.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Start with a compact neighborhood and a prescribed open neighborhood.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use regularity inside the compact neighborhood to shrink its interior around the point.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH15-E001 — Solution 1
Let $x \\in O$ with $O$ open. Choose a compact neighborhood $N$ and open $W$ with $x \\in W \\subseteq N$. Regularity of compact Hausdorff $N$ gives relatively open $A$ with $x \\in A$ and $\\operatorname{cl}_{N}(A) \\subseteq O \\cap W$. Write $A=N \\cap G$ with $G$ ambient-open, and set $V=G \\cap O \\cap W$. Then $V$ is ambient-open, contains $x$, and is contained in $A$. Since compact $N$ is closed in $X$, $\\operatorname{cl}_{X}(V) \\subseteq \\operatorname{cl}_{X}(A)=\\operatorname{cl}_{N}(A) \\subseteq O$; it is compact.


</details>

### TOP-CH15-E002 — Exercise 2
Prove that every LCH space is regular.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Separate a point from a closed set inside a compact neighborhood.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A compact Hausdorff subspace is normal; shrink there, then use the neighborhood interior.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH15-E002 — Solution 2
Let $F$ be closed and $x \\notin F$. Exercise 1 applied to $O=X\\setminus F$ gives open $V$ with $x \\in V \\subseteq \\operatorname{cl}(V) \\subseteq X\\setminus F$. Then $V$ and $X\\setminus \\operatorname{cl}(V)$ are disjoint open sets containing $x$ and $F$. Hausdorffness already implies $T1$, so the chapter's definition of regularity is satisfied.


</details>

### TOP-CH15-E003 — Exercise 3
Prove that open and closed subspaces of an LCH space are LCH.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

For open subspaces shrink inside the given open set.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For closed subspaces intersect a compact neighborhood with the closed subspace.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH15-E003 — Solution 3
Let $A$ be open and $x \\in A$. Exercise 1 gives open $V$ with $x \\in V$, compact $\\operatorname{cl}_{X}(V)$, and $\\operatorname{cl}_{X}(V) \\subseteq A$. Then $V$ is a neighborhood in $A$ with compact relative closure. If $F$ is closed and $x \\in F$, choose a compact neighborhood $N$ of $x$ in $X$. The set $N \\cap F$ is a neighborhood of $x$ in $F$ and is closed in compact $N$, hence compact. Both subspaces are Hausdorff.


</details>

### TOP-CH15-E004 — Exercise 4
Prove that $\\mathbb{Q}$ with its usual topology is not locally compact.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A compact neighborhood in the rationals would contain a rational interval.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Choose an irrational inside that interval and rational points tending to it; compactness in the real line forces the missing limit.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH15-E004 — Solution 4
Suppose $q$ had a compact neighborhood $N$. Choose rational $a<q<b$ with $\\mathbb{Q} \\cap [a,b] \\subseteq N$ after shrinking inside an open set contained in $N$. Choose an irrational $r \\in (a,b)$ and rationals $q_{n} \\in (a,b)$ converging to $r$. The sequence lies in the closed subspace $\\mathbb{Q} \\cap [a,b]$ of $N$, which would be compact. It has no convergent subsequence in $\\mathbb{Q}$, since every real subsequence still converges to $r \\notin \\mathbb{Q}$. This contradicts sequential compactness of metric compact spaces.


</details>

### TOP-CH15-E005 — Exercise 5
Prove that a finite product of LCH spaces is LCH.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Take products of compact neighborhoods.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The finite product is compact and contains the product of their interiors.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH15-E005 — Solution 5
For two factors, choose open neighborhoods $U,V$ of the two coordinates with compact closures. Then $U \\times V$ is open, and its closure is $\\operatorname{cl}(U) \\times \\operatorname{cl}(V)$, compact by finite product compactness. The product is Hausdorff. Induction handles every finite number of factors.


</details>

### TOP-CH15-E006 — Exercise 6
Verify that the declared subsets of $\\alpha X$ form a topology when $X$ is LCH.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Check intersections involving a neighborhood of infinity.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Unions of compact obstructions are compact; closed subsets of compact obstructions remain compact.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH15-E006 — Solution 6
The empty set and whole space are included. Unions of open subsets of $X$ stay open. If a union contains a set $(\\alpha X)\\setminus K$, its complement is a closed subset of $K$ after intersecting complements; because compact sets are closed in Hausdorff $X$, the union again contains a basic complement-of-compact neighborhood of infinity. For finite intersections, two infinity-neighborhoods intersect as $(\\alpha X)\\setminus (K \\cup L)$, and $K \\cup L$ is compact. Intersecting $(\\alpha X)\\setminus K$ with open $U \\subseteq X$ gives $U\\setminus K$, open because compact $K$ is closed.


</details>

### TOP-CH15-E007 — Exercise 7
Prove directly that $\\alpha X$ is compact.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Choose a cover member containing infinity.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Only a compact subset of the old space remains to be covered.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH15-E007 — Solution 7
Given an open cover, choose a member $O$ containing infinity. Its complement $K=(\\alpha X)\\setminus O$ is a closed subset of some compact subset of $X$, hence compact. The other cover members cover $K$; finitely many do so. Together with $O$, they form a finite subcover of $\\alpha X$.


</details>

### TOP-CH15-E008 — Exercise 8
Prove directly that $\\alpha X$ is Hausdorff.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Separate two old points as before.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For infinity versus an old point use a compact neighborhood of that point.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH15-E008 — Solution 8
Two points of $X$ have disjoint neighborhoods because $X$ is Hausdorff. For $x \\in X$, choose open $U$ with $x \\in U$ and compact $\\operatorname{cl}(U)$. Then $U$ and $(\\alpha X)\\setminus \\operatorname{cl}(U)$ are disjoint open neighborhoods of $x$ and infinity.


</details>

### TOP-CH15-E009 — Exercise 9
Show that $X$ is dense in $\\alpha X$ exactly when $X$ is noncompact.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Test whether infinity belongs to the closure of the old space.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

It fails exactly when infinity has an empty-old-part neighborhood, which happens when the old space is compact.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH15-E009 — Solution 9
Every point of $X$ is already in $X$, so density only asks whether every neighborhood of infinity meets $X$. If a neighborhood missed $X$, then $\\{\\infty\\}$ would be open, so it would contain $(\\alpha X)\\setminus K$ for a compact $K$ and force $X \\subseteq K$, making $X$ compact. Conversely, if $X$ is compact, $(\\alpha X)\\setminus X=\\{\\infty\\}$ is open. Thus density is equivalent to noncompactness.


</details>

### TOP-CH15-E010 — Exercise 10
Suppose compact Hausdorff $Y$ contains dense $X$ and $Y\\setminus X=\\{p\\}$. Prove that the identity on $X$ extends to a homeomorphism $\\alpha X\\to Y$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the identity on the dense old space.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

In any compact Hausdorff compactification with one remainder point, neighborhoods of that point have compact complements in the old space.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH15-E010 — Solution 10
First the converse argument in the chapter shows $X$ is LCH. Define the extension by sending infinity to $p$. An open neighborhood of $p$ has compact complement contained in $X$; conversely, every compact $K \\subseteq X$ is compact and therefore closed in $Y$, so $Y\\setminus K$ is an open neighborhood of $p$. Hence the extension and its inverse preserve the neighborhood systems at the added points, while both restrict to the identity on $X$. It is a homeomorphism.


</details>

### TOP-CH15-E011 — Exercise 11
Identify $\\alpha\\mathbb{N}$, where $\\mathbb{N}$ is discrete, with a familiar compact subspace of $\\mathbb{R}$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Send the natural numbers to a sequence tending to zero.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Send infinity to zero and compare cofinite neighborhoods with tails.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH15-E011 — Solution 11
Map $n$ to $1/n$ and infinity to $0$. This is a bijection from $\\alpha\\mathbb{N}$ to $\\{0\\} \\cup \\{1/n:n\\ge 1\\}$. Points $1/n$ are isolated. A neighborhood of $0$ contains all but finitely many $1/n$, matching the fact that complements of compact subsets of discrete $\\mathbb{N}$ are cofinite because its compact subsets are finite. Thus the bijection is a homeomorphism.


</details>

### TOP-CH15-E012 — Exercise 12
Give an explicit homeomorphism from $\\alpha \\mathbb{R}$ to the circle $S^{1}$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the stated rational parametrization of the circle.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Its inverse is $x/(1-y)$ away from the north pole, and both infinite tails approach that pole.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH15-E012 — Solution 12
Define $h(t)=(2t/(1+t^{2}),(t^{2}-1)/(1+t^{2}))$. It maps $\\mathbb{R}$ homeomorphically onto $S^{1}\\setminus \\{(0,1)\\}$ by inverse stereographic projection. As $|t|\\to \\infty$, $h(t)\\to(0,1)$, exactly matching convergence to infinity in $\\alpha \\mathbb{R}$. Extend by $h(\\infty)=(0,1)$. The extension is a continuous bijection from compact $\\alpha \\mathbb{R}$ to Hausdorff $S^{1}$, hence a homeomorphism.


</details>

### TOP-CH15-E013 — Exercise 13
Characterize convergence of a net in $X$ to infinity in $\\alpha X$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Write out a basic neighborhood of infinity.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Eventual membership means eventual avoidance of its compact complement.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH15-E013 — Solution 13
The net converges to infinity iff it is eventually in every neighborhood $(\\alpha X)\\setminus K$ of infinity, with $K$ compact. This says exactly that for every compact $K \\subseteq X$, the net is eventually outside $K$.


</details>

### TOP-CH15-E014 — Exercise 14
Prove that a proper continuous map $f:X\\to Y$ between noncompact LCH spaces extends continuously to $\\alpha f:\\alpha X\\to \\alpha Y$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Test continuity at infinity only.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The inverse image of each compact target obstruction must be compact in the domain.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH15-E014 — Solution 14
Define $\\alpha f$ to equal $f$ on $X$ and to send infinity to infinity. Only continuity at infinity is new. For compact $K \\subseteq Y$, the inverse image of the basic neighborhood $(\\alpha Y)\\setminus K$ is $(\\alpha X)\\setminus f^{-1}(K)$. Properness makes $f^{-1}(K)$ compact, so this is a neighborhood of infinity in $\\alpha X$.


</details>

### TOP-CH15-E015 — Exercise 15
Prove the converse: if the extension $\\alpha f$ is continuous, then $f$ is proper.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use compact target obstructions as closed sets in the compactification.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Continuity of the extended map makes their inverse images compact and avoids the added domain point.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH15-E015 — Solution 15
Let $K \\subseteq Y$ be compact. It is closed in $\\alpha Y$, so $(\\alpha f)^{-1}(K)$ is closed in compact $\\alpha X$ and hence compact. Infinity is not in this inverse image, and its intersection with $X$ is exactly $f^{-1}(K)$. Therefore $f^{-1}(K)$ is compact, proving properness.


</details>

### TOP-CH15-E016 — Exercise 16
Prove that a closed embedding is proper and that the projection $X \\times K\\to X$ is proper when $K$ is compact.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

For a closed embedding pull back a compact intersection.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For projection, the inverse image of a compact set is its product with the compact factor.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH15-E016 — Solution 16
For a closed embedding $e:X\\to Y$ and compact $C \\subseteq Y$, the set $C \\cap e(X)$ is closed in compact $C$, hence compact; its inverse image under the homeomorphism onto $e(X)$ is compact. For the projection, the inverse image of compact $C \\subseteq X$ is $C \\times K$, compact by product compactness.


</details>

### TOP-CH15-E017 — Exercise 17
Give a continuous surjection from an LCH space onto a space that is not locally compact.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The discrete topology is finer.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Its identity map to ordinary rationals is continuous and surjective, but the target lacks compact neighborhoods.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH15-E017 — Solution 17
Let $Q_{d}$ be the set of rationals with the discrete topology, and let $\\mathbb{Q}$ have its usual topology. The identity $Q_{d}\\to Q$ is continuous because every inverse image is open in the discrete domain, and it is surjective. The domain is LCH because singletons are compact open neighborhoods, while Exercise 4 shows the codomain is not locally compact.


</details>

### TOP-CH15-E018 — Exercise 18
Prove the converse half of the one-point compactification theorem: if a noncompact Hausdorff $X$ has a Hausdorff one-point compactification, then $X$ is locally compact.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Separate the single remainder point from an old point.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The closure of a sufficiently small neighborhood misses the remainder and is compact inside the old space.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH15-E018 — Solution 18
Let compact Hausdorff $Y=X \\cup \\{p\\}$ be the compactification. For $x \\in X$, regularity of compact Hausdorff $Y$ gives open $U$ with $x \\in U$ and $\\operatorname{cl}_{Y}(U)$ avoiding $p$. Then $U \\cap X$ is a neighborhood of $x$ in $X$, and $\\operatorname{cl}_{Y}(U)$ is a compact subset lying entirely in $X$. Thus $x$ has a compact neighborhood in $X$. Since $x$ was arbitrary, $X$ is locally compact.


</details>

### TOP-CH15-E019 — Exercise 19
Show that $\\alpha\\mathbb{N}$ does not have the Stone-Cech extension property.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use a two-valued alternating function.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

No neighborhood of infinity makes that function stay in either singleton neighborhood of a proposed limiting value.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH15-E019 — Solution 19
Let $f:\\mathbb{N}\\to \\{-1,1\\}$ be $f(n)=(-1)^n$, where the codomain is compact and discrete. If $f$ extended continuously to $\\alpha\\mathbb{N}$, continuity at infinity would provide a neighborhood on which the extension lies in the singleton containing its value at infinity. Such a neighborhood contains all but finitely many natural numbers, forcing $f$ to be eventually constant. It is not, so no extension exists. By contrast, the defining property of $\\beta\\mathbb{N}$ guarantees an extension.


</details>

### TOP-CH15-E020 — Exercise 20
Let $X=\\prod_{i \\in I} X_{i}$ be a nonempty product of Hausdorff spaces. Prove that if $X$ is locally compact, then all but finitely many factors $X_{i}$ are compact.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A compact neighborhood contains a basic product neighborhood.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Every unrestricted factor is the continuous image of that compact neighborhood, so it must be compact.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH15-E020 — Solution 20
Choose $x \\in X$, an open neighborhood $U$ of $x$, and compact $K$ with $U \\subseteq K$. Choose a basic open set $B=\\prod_{i} B_{i}$ with $x \\in B \\subseteq U$; there is a finite set $F$ such that $B_{i}=X_{i}$ for $i \\notin F$. Since compact $K$ is closed in Hausdorff $X$, $\\operatorname{cl}_{X}(B) \\subseteq K$. For $i \\notin F$, the coordinate projection of $\\operatorname{cl}_{X}(B)$ is all of $X_{i}$: fix arbitrary $y_{i}$ and retain the other coordinates of $x$ to obtain a point of $B$. The projection of compact $\\operatorname{cl}_{X}(B)$ is compact, so $X_{i}$ is compact. Only the finitely many indices in $F$ can fail to be compact.


</details>

## Sources

The internal dependencies are [Compactness: Covers and Finite Control](compactness-covers-and-finite-control.md), including the full arbitrary-product theorem, and [Urysohn and Tietze Extension](urysohn-tietze-extension.md), for separating functions. The constructions and worked examples here are original expositions.

## Chapter checkpoint

Under Hausdorffness, local compactness is compact control that can be shrunk inside any prescribed neighborhood. It is preserved by open and closed subspaces and finite products, but not by arbitrary subspaces or continuous images. A noncompact Hausdorff space has a Hausdorff one-point compactification exactly when it is locally compact; its open neighborhoods of the added point are complements of compact sets. For LCH spaces, compact-proper maps are precisely the continuous maps whose extensions under the adjoining-point construction send $\\infty_X$ to $\\infty_Y$ continuously; for noncompact spaces these are extensions between one-point compactifications. Stone-Cech compactification has a different purpose and a stronger universal extension property, so it must not be identified with the Alexandroff construction.

One-point compactification records escape from compact sets; proper maps preserve that escape. Infinite products and universal compactifications additionally require their exact compactness and separation dependencies.

## Transferred capstone 19 {#topology-transferred-e019}

Original question identity: [TOP-CH22-E019](../topology-proof-counterexample/topology-proof-atlas-and-capstones.md). The earlier capstone remains available with its own notes; the complete question, staged hints and solution also belong here.

Suppose $X$ is locally compact Hausdorff and noncompact. Verify that the one-point compactification topology restricts to the original topology on $X$ and is Hausdorff.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compare ordinary open subsets with intersections of neighborhoods at infinity.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Separate infinity from a finite point using a relatively compact neighborhood and its compact closure.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Let $X^*=X \\cup \\{\\infty\\}$. Its open sets are the original opens of $X$, together with sets containing infinity whose complement in $X$ is compact and closed. Therefore the subspace opens on $X$ are exactly its original opens.

To separate $x,y \\in X$, use Hausdorffness of $X$. To separate $x \\in X$ from infinity, local compactness gives an open neighborhood $U$ of $x$ with compact closure $K$. Then $U$ and $\\{\\infty\\} \\cup (X\\setminus K)$ are disjoint open neighborhoods of $x$ and infinity. Hence $X^*$ is Hausdorff. Noncompactness ensures $X$ is dense: every neighborhood of infinity meets $X$, since an empty intersection would say its compact complement is all of noncompact $X$.

</details>
`;export{e as default};