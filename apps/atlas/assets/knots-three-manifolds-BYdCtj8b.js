var e=`---
id: deep-dive-knots-three-manifolds
title: "Knots and Three-Manifold Windows"
license: CC BY-SA 4.0
---

# Knots and Three-Manifold Windows

**Before reading.** Read [Topological Invariants: Measuring Shape Without Measuring Length](../deep-dives/topological-invariants.md) and [Groups, Subgroups, and Generated Structure](../books/algebra-patterns-structure/groups-subgroups-generated-structure.md). These are preparation for the ideas used below.

A knot is simple to make and hard to certify. Tie a loop of string, join its ends, and ask whether it can be moved into a round circle without passing through itself. A drawing can become complicated through harmless motion, so crossing count in one diagram is not an invariant. Knot theory succeeds by proving that particular calculations survive every allowed move.

This deep dive assumes groups and the fundamental group. It develops diagram moves, colorings, the knot group, Alexander data, spanning surfaces, and the bridge to three-manifolds. It does not claim these invariants classify all knots.

## 1. The object and the equivalence

A smooth knot is a smooth embedding $K:S^{1}\\to S^{3}$ or $R^{3}$. Two knots are equivalent when an **ambient isotopy** of the whole three-dimensional space carries one to the other. Requiring every intermediate map to remain an embedding forbids strands passing through one another.

Why use $S^{3}$? Adding one point at infinity compactifies $R^{3}$, and a compact knot avoids that point after choosing coordinates. The two settings agree for ordinary knots, while $S^{3}$ treats complements cleanly.

A **link** is an embedding of a disjoint union of circles. Components may be individually unknotted but linked, as in the Hopf link.

We usually restrict to tame—smooth or polygonal—knots. Wild embeddings exist and can have pathological local behavior. Diagram calculus silently assumes tameness.

## 2. Diagrams and Reidemeister moves

Project a knot generically to a plane. A generic projection has finitely many transverse double points and no triple points or tangencies. Mark which strand passes over at every crossing. The result is a knot diagram.

The three Reidemeister moves alter a diagram locally:

1. create or remove a twist with one crossing;
2. create or remove two opposite crossings;
3. slide a strand past a crossing.

Reidemeister’s theorem states that two tame oriented or unoriented knot diagrams describe ambient-isotopic knots exactly when planar isotopy and a finite sequence of these moves connect them. Therefore a diagram quantity is a knot invariant if it is unchanged by all three moves, or if its prescribed normalization compensates for their changes.

Raw crossing count fails Move I and Move II. The **crossing number** of a knot is instead the minimum crossing count over all its diagrams. This is invariant by definition but hard to compute: showing a diagram with three crossings proves an upper bound, not minimality.

## 3. Three-coloring: a finite certificate

A Fox three-coloring assigns one of three colors to each arc, subject to this rule at every crossing: either all three incident arc colors agree, or all three are distinct. A coloring using more than one color is nontrivial.

Each Reidemeister move preserves the existence and number of colorings. Algebraically label colors by $Z/3$; at a crossing the condition is

$$2(over) = under₁ + under₂ \\bmod 3$$

This one equation covers both “all same” and “all distinct.” The local linear systems before and after each move have corresponding solutions.

The standard trefoil diagram admits a nontrivial coloring: cycle three colors around its three arcs. The unknot has a crossing-free diagram consisting of one arc, so only the three constant colorings exist. Because nontrivial colorability survives Reidemeister moves, the trefoil is not the unknot.

Colorability is incomplete. Many nontrivial knots are not three-colorable, and many different knots are. A failed certificate says only that this instrument did not distinguish the pair.

## 4. The complement and knot group

The knot complement $X_{K}=S^{3}\\setminus K$ contains far more information than a diagram. Its fundamental group $G_{K}=\\pi₁(X_{K})$ is the **knot group**. Ambient isotopy gives homeomorphic complements and therefore isomorphic groups.

A Wirtinger presentation reads a generator from each diagram arc. At a crossing, conjugation by the over-arc relates the two under-arcs. Orientation conventions determine whether the relation is $z=xyx^{-1}$ or its inverse-shaped variant; inconsistent conventions create false groups.

For the unknot, the complement is a solid torus up to the appropriate open/closed distinction and its fundamental group is $Z$. For a trefoil one presentation simplifies to

$$<a,b | aba=bab>$$

isomorphic to $<x,y | x^{2}=y^{3}>$. This group is nonabelian, proving again that the trefoil is nontrivial.

An abstract group alone does not always record the full complement data in the way a classification argument needs. The **peripheral structure** identifies meridian and longitude conjugacy classes. For oriented knots in $S^{3}$, powerful theorems say the complement determines the knot up to the relevant equivalence, but using them requires the boundary torus and peripheral information carefully.

Every knot group abelianizes to $Z$, generated by a meridian. Thus first homology of the complement cannot distinguish knots. The noncommutativity and peripheral structure carry information discarded by abelianization.

## 5. Alexander polynomial with normalization stated

The infinite cyclic cover of a knot complement has first homology as a module over $Z[t,t^{-1}]$, where $t$ acts by a deck transformation. A presentation of this Alexander module leads to the **Alexander polynomial** $\\Delta_{K}(t)$, defined only up to multiplication by a unit $\\pm t^{n}$. One can normalize by symmetry and a sign convention, but comparisons must respect this ambiguity.

For a trefoil, one normalization is

$$\\Delta(t)=t^{2}-t+1$$

For the unknot, $\\Delta(t)=1$. Therefore the polynomial distinguishes this trefoil from the unknot. The converse fails: nontrivial knots with Alexander polynomial $1$ exist.

The determinant $\\det(K)=|\\Delta_{K}(-1)|$ is a positive odd integer for a knot. The trefoil has determinant $|1+1+1|=3$, explaining its nontrivial three-colorings: divisibility of the determinant by $3$ is linked to Fox three-colorability.

The Jones polynomial uses a skein relation and detects information different from the Alexander polynomial. It also fails to classify knots. Whether the Jones polynomial detects the unknot remains open as of August 2026; Baldwin and Sivek describe it as the best-known open detection question in their 2025 [peer-reviewed survey and research article](https://www.cambridge.org/core/journals/forum-of-mathematics-pi/article/floer-homology-and-nonfibered-knot-detection/3CE30C71E8F2454815BAB16E0BF75FF9). A responsible introduction dates that status rather than promising a solution from small computations.

## 6. Seifert surfaces and genus

An oriented **Seifert surface** for a knot is a connected compact oriented surface embedded in $S^{3}$ whose boundary is the knot. Seifert’s algorithm constructs one from an oriented diagram: smooth crossings coherently to obtain circles, cap them with disks at separated heights, and connect disks with twisted bands.

The knot genus $g(K)$ is the minimum genus among all Seifert surfaces for $K$. A surface produced from one diagram gives an upper bound. Proving minimality needs a lower bound, often from Alexander polynomial, signature, Floer or Khovanov invariants.

If a Seifert surface has genus $g$, a Seifert matrix records linking numbers between basis curves and pushed-off copies. It yields an Alexander polynomial through a determinant such as $\\det(V-tV^{T})$, again up to units and convention. Different surfaces and bases change the matrix while preserving the appropriate equivalence class.

The unknot bounds a disk and has genus zero. Conversely, a knot bounding an embedded disk in $S^{3}$ is the unknot. In four-dimensional topology, a **slice knot** bounds a smooth disk in $B^{4}$; it may be nontrivial in $S^{3}$. Do not confuse three-dimensional genus with smooth or topological slice genus.

## 7. Linking number and its limits

For an oriented two-component link, assign signs $\\pm1$ to crossings between distinct components and take half their sum. The result is the **linking number**. It is invariant under Reidemeister moves and changes sign when one component’s orientation reverses.

The Hopf link has linking number $\\pm1$, so it is not split. Linking number zero does not imply a link is split: the Whitehead link is a standard counterexample. Again, an invariant can prove difference when values disagree without classifying the equal-value case.

Linking number also has homological and geometric definitions: one component’s intersection number with a Seifert surface for the other, or the degree of a Gauss map. Agreement among these descriptions links diagram combinatorics, topology, and analysis.

## 8. Surgery opens the three-manifold window

Remove a tubular neighborhood of a knot. Its boundary is a torus with meridian and longitude slopes. **Dehn filling** glues back a solid torus so that its meridian follows a chosen slope on that boundary. Different slopes can create different closed three-manifolds. Surgery on links generalizes the construction, and every closed orientable three-manifold can be obtained by surgery on a link in $S^{3}$.

Knot complements may admit geometric structures. A finite-volume hyperbolic knot complement has a complete hyperbolic metric, and Mostow rigidity makes its volume a topological invariant. Torus knots are not hyperbolic; their complements are Seifert fibered. Satellite knots have essential tori. The broad trichotomy belongs to JSJ decomposition and geometrization, not to a glance at the diagram.

Three-manifold topology combines incompressible surfaces, group theory, normal-surface algorithms, geometric structures, Floer-type invariants, and quantum invariants. It is not merely “knot theory with more components.”

## 9. A worked invariant audit

**Worked example.**

Suppose a three-crossing diagram is claimed to be a trefoil.

1. **Upper bound:** it shows crossing number at most three.
2. **Three-coloring:** a nontrivial coloring proves the knot is not the unknot.
3. **Alexander data:** $t^{2}-t+1$ differs from $1$ up to every unit $\\pm t^{n}$, another proof of nontriviality.
4. **Determinant:** evaluating at $-1$ gives $3$, consistent with three-coloring.
5. **Genus:** Seifert’s algorithm gives a once-punctured torus, so genus is at most one; nontriviality rules out genus zero, hence genus one.

These conclusions reinforce one another, but none alone proves that an arbitrary unknown knot is this particular trefoil rather than every possible alternative. Identification requires enough complete data or a theorem tailored to the candidate class.

## Exercises

<a id="deep-dive-knots-three-manifolds-ex-1"></a>

**Exercise 1.**

**1. Reidemeister audit.** Why is diagram writhe—the signed sum of crossings—not an invariant of unframed oriented knots?
<details>
<summary>Hint 1</summary>

Check diagram writhe under each Reidemeister move, especially the one-crossing move.
</details>
<details>
<summary>Hint 2</summary>

A type-I move creates or removes one signed crossing without changing the knot.
</details>
<details>
<summary>Solution</summary>

Moves II and III preserve writhe, but Move I adds or removes one crossing of sign $+1$ or $-1$. A normalized polynomial may compensate for that change; raw writhe cannot.

</details>

<a id="deep-dive-knots-three-manifolds-ex-2"></a>

**Exercise 2.**

**2. Abelianization.** Abelianize $<a,b | aba=bab>$.
<details>
<summary>Hint 1</summary>

Abelianization turns the group relation into an equation among commuting generators.
</details>
<details>
<summary>Hint 2</summary>

Count appearances of a and b on both sides of aba equals bab, then identify the remaining free generator.
</details>
<details>
<summary>Solution</summary>

In an abelian group the relation becomes $2a+b=a+2b$, so $a=b$. One free generator remains, giving $Z$, as required for a knot group.

</details>

### Further practice

**3. Polynomial ambiguity.** Are $t^{2}-t+1$ and $t-1+t^{-1}$ different Alexander polynomials?

**Answer.** No. Multiplying the second by the unit $t$ gives the first. Alexander polynomials are compared up to $\\pm t^{n}$ unless a normalization has been fixed.

**4. Genus logic.** A nontrivial knot has a constructed genus-one Seifert surface. What is its genus?

**Answer.** At most one by construction. Genus zero would mean it bounds an embedded disk in $S^{3}$, hence is the unknot. Nontriviality rules that out, so genus is exactly one.

## Continue

Use [Chains, Spaces, and Invariants](#/item/book-algebraic-topology-chains-spaces) for homology and duality, [Topology Through Proof and Counterexample](#/item/book-topology-proof-counterexample) for quotient and compactness foundations, and the [standard course](#/item/course-topology-manifolds-standard) for manifolds and curvature. A computational next step is to implement Fox coloring as row reduction over a finite field and test invariance under all three Reidemeister moves.
`;export{e as default};