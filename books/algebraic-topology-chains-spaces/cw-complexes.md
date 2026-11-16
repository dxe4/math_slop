
# CW Complexes

A space can have a useful finite description even when its points form an uncountable set. A circle is obtained by joining the two endpoints of an interval; a torus is obtained by attaching the boundary of a disk to a pair of loops with a specified word. The topology of the attachment matters as much as the number of pieces. CW complexes organize these constructions so that homotopies can be extended across cells and homology can later be computed from attaching maps.

This chapter develops the attachment language, proves the homotopy-extension property and the contractible-subcomplex collapse theorem, and distinguishes finite from infinite complexes. A general geometric approximation theorem is stated as an explicit imported theorem, with its precise role identified. The subsequent cellular computations do not assume that a cell count by itself determines a homotopy type.

## Definition 7.1: cells, skeleta and the weak topology

An open **n-cell** is a space homeomorphic to the open unit ball in real n-dimensional space. A CW complex begins with a discrete set of vertices, its zero-skeleton. To form the n-skeleton from the preceding skeleton, attach a family of closed disks by maps from their boundary spheres into the preceding skeleton. More precisely, take the disjoint union of the old skeleton and the disks, then identify each boundary point with its specified image. The resulting map from a disk is a **characteristic map**. Its restriction to the interior is a homeomorphism onto the associated open cell, but it need not be injective on the boundary.

The skeleta are written $X^{(n)}$. The full space is their union, with the weak topology determined by the characteristic disks: a subset is closed exactly when its inverse image under each characteristic map is closed. Equivalently a function out of the complex is continuous if and only if its composite with every characteristic map is continuous. The complex is Hausdorff and **closure finite**: the closure of each cell is contained in a finite subcomplex. These are the usual closure-finiteness and weak-topology conventions behind the name CW. Standard inductive disk attachments with this topology give the equivalent customary definition.

A **subcomplex** is a union of cells that contains the boundary images of its cells. A pair consisting of a complex and a subcomplex is a CW pair. Every subcomplex is closed: in each characteristic disk, the inverse image of the subcomplex is closed, as follows inductively through the skeleta and the attaching description. In the finite case the whole space is compact, since it is the continuous image of finitely many compact disks. It is important that compactness of a finite complex is not a claim that every infinite complex is noncompact or locally finite without further discussion.

A complex is **finite** when it has finitely many cells, **finite dimensional** when their dimensions have a common finite upper bound, and **locally finite** when every point has a neighborhood meeting only finitely many cells. These conditions are different. A countable wedge of circles is one dimensional but not finite and not locally finite at the common vertex. The standard CW topology on that wedge is stronger than the subspace topology of a Hawaiian earring of shrinking circles. Replacing one by the other changes which maps are continuous.

## Worked example 1: spheres, disks and characteristic maps

Construct a circle from one vertex and one interval whose two endpoints both attach to the vertex. The open interval is the open one-cell, while its closure in the quotient is the whole circle. Thus the closed cell is not homeomorphic to a closed interval. This is allowed: the characteristic map, rather than its image with an invented parametrisation, is the actual disk data.

Similarly attach one n-disk to a vertex by the constant map on its boundary. For $n\ge1$, the quotient $D^n/S^{n-1}$ is a sphere. It has one zero-cell and one n-cell. The absence of intermediate cells does not mean that its points have no neighborhoods in intermediate dimensions; cells describe a decomposition, not a local dimension for every subset drawn in the space. A closed disk itself instead has the boundary sphere as a subcomplex together with an interior cell. That structure is the useful one when extending a homotopy from the boundary.

For $n=1$ the quotient construction gives the circle just described. For $n=0$, the usual sphere $S^0$ has two vertices rather than the positive-dimensional one-vertex construction. Keeping this endpoint case separate prevents incorrect reduced-homology formulas from entering later computations.

## Definition 7.2: a cofibration as a homotopy-extension property

An inclusion $A\subseteq X$ has the **homotopy-extension property** if every continuous $f:X\to Y$ and every homotopy $h:A\times I\to Y$ with $h(a,0)=f(a)$ extend to a homotopy $H:X\times I\to Y$ satisfying $H(-,0)=f$ and $H|_{A\times I}=h$. Such an inclusion is called a cofibration in the sense used here. The target space is arbitrary. The property says that a specified deformation on the subspace can be carried along by a compatible deformation of the whole space.

**Lemma 7.3 (Disk-pair extension).** The inclusion $S^{n-1}\subset D^n$ has the homotopy-extension property. For $n=0$ interpret the boundary as empty.

*Proof.* Write $D^n=\{x:\|x\|\le1\}$ and define

$$\lambda(x,t)=\frac1{\max\{\|x\|,1-t/2\}},\qquad R(x,t)=(\lambda x,2-\lambda(2-t)).$$

The denominator is at least one half, so these formulas are continuous. They describe the ray from the point $(0,2)$ through $(x,t)$, continued until it first reaches the bottom or the side of the cylinder. The chosen parameter is the smaller of the bottom-intersection parameter and the side-intersection parameter. Therefore the image lies in $(D^n\times\{0\})\cup(S^{n-1}\times I)$. The second coordinate is between zero and one: when the bottom is reached it is zero; when a side is reached first, the inequality selecting that side makes it nonnegative, and extending from a height at most one towards the bottom cannot increase it. If $t=0$ or $\|x\|=1$, the maximum is one and $R(x,t)=(x,t)$. Thus $R$ is a retraction onto the bottom and side.

The map defined by $f$ on the bottom and $h$ on the side is continuous by the finite closed-set pasting lemma; the maps agree on their common boundary. Composing it with $R$ supplies the required extension. In dimension zero the same formula sends the interval to its bottom point and gives the empty-boundary case. ∎

**Theorem 7.4 (CW-pair extension).** Every CW-subcomplex inclusion has the homotopy-extension property.

*Proof.* Starting with the prescribed homotopy on $A$, extend over each cell not in $A$ in increasing dimension. On a characteristic disk the original map specifies the bottom and the already constructed lower-skeleton homotopy specifies the side. They agree on the bottom boundary because both restrict to the original map there. The disk-pair lemma extends over the whole cylinder. The extension descends through the attaching quotient because its side values were defined by the attaching map. Do this simultaneously on all cells of one dimension, then continue to the next dimension.

For an infinite complex one must check joint continuity, not just continuity on every cylinder considered separately. Give the function space $C(I,Y)$ its compact-open topology. A continuous map $D^n\times I\to Y$ has a continuous adjoint $D^n\to C(I,Y)$; the tube lemma for compact subsets of the interval proves this assertion. Thus the constructed map $X\to C(I,Y)$ is continuous on every characteristic disk and hence continuous by the weak topology of $X$. Evaluation $C(I,Y)\times I\to Y$ is continuous because the interval is locally compact Hausdorff. Composing evaluation with this adjoint proves continuity of the assembled $X\times I\to Y$. The construction extends the original data exactly, establishing the theorem for arbitrary CW pairs. ∎

This proof uses ordinary choices of extensions across a family of cells. It does not assume that an infinite CW complex is locally compact, nor that its product with the interval automatically has an unspecified weak topology. The compact-open argument is included to isolate that often suppressed continuity issue.

## Theorem 7.5: collapsing a contractible subcomplex

Let $A$ be a nonempty contractible subcomplex of $X$. Then the quotient map $q:X\to X/A$ collapsing $A$ to a point is a homotopy equivalence.

*Proof.* Choose a contraction $h:A\times I\to A$ from the identity to the constant map with value $a_0\in A$. View it as a homotopy in $X$ and extend it, using the homotopy-extension property, from the identity of $X$ to a map $F_1:X\to X$. This last map is constant on $A$, so it factors as $gq$ for a continuous $g:X/A\to X$. Thus $gq$ is homotopic to the identity of $X$.

For each time, $F_t(A)$ is contained in $A$. Consequently $qF_t$ is constant on $A$ and descends to a homotopy on $X/A$ from its identity to $qg$. Joint continuity follows because the product of a quotient map with the interval is a quotient map. One can justify that product fact here by the same compact-open adjunction used in the preceding proof: a map on the quotient times the interval is continuous when its adjoint is continuous after composition with the quotient map. Hence $qg$ is homotopic to the identity as well, proving the result. ∎

The subcomplex condition is doing work. A general contractible subset need not have the extension property, so this theorem is not a license to collapse an arbitrary contractible-looking part of a wild space. Even for a legitimate subcomplex the quotient map need not be a homeomorphism. Its claim is precisely a homotopy equivalence.

## Worked example 2: a spanning tree gives a wedge

Let a finite connected graph have five vertices and seven edges. Choose a spanning tree with four edges. It is a contractible subcomplex, as can be seen by repeatedly contracting an outermost edge or moving points along their unique tree paths to a chosen vertex. The collapse theorem therefore identifies the graph up to homotopy equivalence with the quotient that has one vertex and three remaining loop edges. Its fundamental group is free of rank three, and its first homology is free abelian of rank three.

The calculation has two distinct steps. The count $7-4=3$ identifies how many loop edges survive. The collapse theorem proves that the reduction preserves the relevant homotopy information. A quotient that merely leaves three visible curves, without a justified contractible CW subcomplex and extension argument, would not establish the same conclusion.

## Lemma 7.6: a compact subset meets only finitely many cells

**Lemma 7.6.** Every compact subset of a CW complex is contained in a finite subcomplex.

*Proof.* Suppose a compact set $K$ met infinitely many open cells. Choose one point of $K$ in each of a countably infinite sequence of distinct such cells, obtaining a set $D$. By closure finiteness, each closed cell contains only finitely many points of $D$. Every subset of $D$ therefore has closed inverse image in every characteristic disk: that inverse image is a finite union of inverse images of individual points, which are closed since the complex is Hausdorff. By the weak topology every subset of $D$ is closed in $X$.

In particular $D$ is closed in $K$, hence compact, and its subspace topology is discrete because every one of its subsets is closed. An infinite discrete space is not compact: its singleton open cover has no finite subcover. This contradiction proves that $K$ meets only finitely many cells. The union of the closures of those finitely many cells is contained in a finite subcomplex by closure finiteness, and contains $K$. ∎

The selection of a countable sequence from an infinite collection uses ordinary choice, as throughout the usual CW framework. The lemma is useful for maps from spheres, disks and finite complexes, since their images are compact. It does not identify an arbitrary infinite complex with any one of its finite subcomplexes. A family of maps can require larger and larger finite subcomplexes even though each individual map has a finite image support of this kind.

## Imported theorem 7.7: relative cellular approximation

A map between CW complexes is **cellular** when it takes each n-skeleton into the target n-skeleton. The relative cellular approximation theorem states: if $(X,A)$ is a CW pair, $Y$ is a CW complex, and $f:X\to Y$ restricts to a cellular map on $A$, then $f$ is homotopic relative to $A$ to a cellular map. The theorem also has a relative target-pair form. Its geometric approximation proof is not supplied here; it is a named input from [Hatcher, Chapter 4, Theorem 4.8, printed page 349](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf#page=13), which includes the relative formulation.

This import is stronger than the extension property proved above. Extension tells us how to propagate an already specified homotopy. Approximation tells us that a homotopy with a useful dimensional destination exists. Confusing these tasks would hide the essential geometry. The theorem may be applied to a loop domain with a vertex as its fixed subcomplex, and to a disk homotopy with its cellular boundary fixed. It follows that a CW complex and its two-skeleton have the same fundamental group: every loop can be moved into the one-skeleton and every null-homotopy can be moved into the two-skeleton.

For finite complexes the compact-support lemma makes approximation a finite geometric problem. It still requires the approximation theorem, rather than an inference that a continuous map is automatically piecewise linear. No triangulation of an arbitrary topological manifold is asserted by this chapter. A triangulated manifold, a smooth manifold equipped with a suitable triangulation, and a general topological manifold have different available structures. The duality chapter will specify which structure its local proof uses.

## Worked example 3: equal cell counts, different attaching maps

Start from a circle with generator $a$ and attach one two-cell by the degree-m map $z\mapsto z^m$. For $m\ge1$, van Kampen gives $\langle a\mid a^m=1\rangle\cong\mathbb Z/m$. For $m=0$, the attaching map is constant, so the resulting space is the wedge $S^1\vee S^2$ and its group remains infinite cyclic. All these complexes have one cell in each of dimensions zero, one and two. Their cellular boundary from dimension two to dimension one is multiplication by $m$, a calculation justified in the later cellular theorem.

For $m=2$, first homology is $\mathbb Z/2$ and second homology vanishes. For $m=0$, first and second homology are both $\mathbb Z$. The Euler characteristic is one in both cases because it records the alternating count rather than the differential. Thus neither the cell count nor Euler characteristic determines the attaching map, the group, or the torsion detected by homology. Characteristic maps carry precisely the information omitted by a list of cell numbers.

## Exercises

### Exercise 7.1
<a id="cw-complexes-ex-1"></a>

Describe a CW structure on the torus with one vertex. Specify the attaching word of its two-cell.

<details><summary>Hint 1</summary>

Use opposite-side identifications of a square.

</details>
<details><summary>Hint 2</summary>

Read the oriented boundary before applying the identifications.

</details>
<details><summary>Full solution</summary>

All four vertices become one vertex, and opposite edges give two one-cells $a,b$. The square interior is one two-cell. With coherent edge orientations its boundary reads $aba^{-1}b^{-1}$. The attaching map, not just the counts $(1,2,1)$, makes this the torus. Van Kampen gives the commuting relation and hence the group $\mathbb Z^2$.

</details>

### Exercise 7.2
<a id="cw-complexes-ex-2"></a>

Explain why the characteristic map of a circle's one-cell need not be injective on its closed disk.

<details><summary>Hint 1</summary>

The closed disk is an interval in this dimension.

</details>
<details><summary>Hint 2</summary>

Compare its two endpoints in the quotient.

</details>
<details><summary>Full solution</summary>

The characteristic interval maps its two endpoints to the same zero-cell. Its restriction to the open interval is a homeomorphism onto the open one-cell, which is all the CW definition requires. The whole characteristic map is not injective, and the image of the closed cell is a circle. Requiring every closed cell to be a disk would impose the stronger regular-CW condition.

</details>

### Exercise 7.3
<a id="cw-complexes-ex-3"></a>

Use the disk-pair retraction to extend a boundary homotopy over a disk, and identify the compatibility condition.

<details><summary>Hint 1</summary>

Define one map on the bottom and side of the cylinder.

</details>
<details><summary>Hint 2</summary>

Compose that map with $R$ from Lemma 7.3.

</details>
<details><summary>Full solution</summary>

The given disk map defines the bottom and the boundary homotopy defines the side. They must agree on $S^{n-1}\times\{0\}$. The closed-set pasting lemma then gives a continuous map on their union. Its composite with $R$ is continuous on the full cylinder and has both prescribed restrictions because $R$ fixes the bottom and side pointwise.

</details>

### Exercise 7.4
<a id="cw-complexes-ex-4"></a>

A connected finite graph has eight vertices and eleven edges. Compute its homotopy type after a spanning tree is collapsed and its fundamental group.

<details><summary>Hint 1</summary>

A spanning tree has one fewer edge than vertices.

</details>
<details><summary>Hint 2</summary>

Invoke the contractible-subcomplex theorem before counting the remaining loops.

</details>
<details><summary>Full solution</summary>

The tree has seven edges and is a contractible CW subcomplex. Its collapse is a homotopy equivalence. The quotient has one vertex and four loop edges, so it is a wedge of four circles. Its fundamental group is the free group on four generators. The count alone supplies four; the collapse theorem supplies preservation of homotopy type.

</details>

### Exercise 7.5
<a id="cw-complexes-ex-5"></a>

Give a finite-dimensional CW complex that is not finite and explain why these two conditions differ.

<details><summary>Hint 1</summary>

Keep all cells in dimension one.

</details>
<details><summary>Hint 2</summary>

Use infinitely many circles with the CW wedge topology.

</details>
<details><summary>Full solution</summary>

A countable CW wedge of circles has one zero-cell and countably many one-cells. Its dimension is one, but its number of cells is infinite. It is also not locally finite at the common vertex, because every neighborhood there meets every attached one-cell. Finite dimensionality bounds cell dimensions, not the number meeting a point.

</details>

### Exercise 7.6
<a id="cw-complexes-ex-6"></a>

Show that every continuous map from a sphere to a CW complex has image in a finite subcomplex. Explain what this does not say about an infinite family of sphere maps.

<details><summary>Hint 1</summary>

Use compactness of the sphere.

</details>
<details><summary>Hint 2</summary>

The finite subcomplex can depend on the map.

</details>
<details><summary>Full solution</summary>

The image of the compact sphere is compact and is therefore contained in a finite subcomplex by Lemma 7.6. For infinitely many maps, their images can occupy infinitely many different cells, so there need not be one finite subcomplex containing all of them. For example the successive inclusions of individual circles into an infinite CW wedge require arbitrarily many cells collectively.

</details>

### Exercise 7.7
<a id="cw-complexes-ex-7"></a>

Explain why collapsing an arbitrary contractible subset is not justified by Theorem 7.5.

<details><summary>Hint 1</summary>

List every hypothesis of that theorem.

</details>
<details><summary>Hint 2</summary>

Locate the step that extends a contraction of the subset.

</details>
<details><summary>Full solution</summary>

The theorem assumes a nonempty contractible CW subcomplex. Its proof uses the subcomplex homotopy-extension property to extend the contraction to the entire space. A general contractible subset may fail that property and may even fail to be closed. Contractibility alone therefore does not supply the required extension or the quotient homotopy inverse. The theorem leaves such subsets undecided.

</details>

### Exercise 7.8
<a id="cw-complexes-ex-8"></a>

Attach a disk to a circle by a degree-three map. Compute the fundamental group and compare it with constant attachment.

<details><summary>Hint 1</summary>

Translate the attaching map into a word in the circle generator.

</details>
<details><summary>Hint 2</summary>

A constant attachment kills no nontrivial loop class.

</details>
<details><summary>Full solution</summary>

The degree-three attachment imposes $a^3=1$, so the group is $\mathbb Z/3$. Constant attachment imposes the identity relation only, giving $\mathbb Z$; the space is $S^1\vee S^2$. Both decompositions have one cell in dimensions zero, one and two. Thus the attaching map is essential information.

</details>

### Exercise 7.9
<a id="cw-complexes-ex-9"></a>

Using relative cellular approximation, prove that inclusion of the two-skeleton induces an isomorphism on fundamental groups.

<details><summary>Hint 1</summary>

A loop has a one-dimensional CW domain.

</details>
<details><summary>Hint 2</summary>

For injectivity, apply the relative theorem to a disk filling whose boundary is already cellular.

</details>
<details><summary>Full solution</summary>

Every based loop is homotopic relative its basepoint to a cellular loop, hence one lying in the one-skeleton. This gives surjectivity from the two-skeleton. If a loop there becomes null-homotopic in the whole complex, first make its representative cellular in the two-skeleton. Its disk filling can then be made cellular relative the boundary, so lies in the two-skeleton. The class was already trivial there, giving injectivity. The geometric approximation theorem is an explicit input, not proved by this exercise.

</details>

### Exercise 7.10
<a id="cw-complexes-ex-10"></a>

Why does the homotopy-extension proof for an infinite CW pair include a compact-open function-space argument?

<details><summary>Hint 1</summary>

Continuity on each separate cell cylinder is not the final claim.

</details>
<details><summary>Hint 2</summary>

The interval is locally compact even when the full complex is not.

</details>
<details><summary>Full solution</summary>

The extensions give maps on every characteristic disk times the interval. Their adjoints into $C(I,Y)$ are continuous. The weak topology then gives a continuous map from the whole complex into that function space, and continuity of evaluation on the interval gives joint continuity on $X\times I$. This avoids assuming local compactness of the infinite complex or silently imposing a different product topology.

</details>

## Sources

Allen Hatcher, [*Algebraic Topology*, Chapter 0, Appendix A and Chapter 4](https://pi.math.cornell.edu/~hatcher/AT/ATchapters.html), is the primary author reference for CW conventions and the explicitly imported relative cellular approximation theorem, Theorem 4.8. J. P. May, [*A Concise Course in Algebraic Topology*, Chapters 6 and 10](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf), provides another treatment of cofibrations and CW structures. The project's unchanged Quarto chapter `modules/textbooks/topology/chapters/13-simplicial-cw-complexes.qmd` is an earlier companion reading. This new chapter supplies original proofs, examples and exercise support rather than replacing that source or its identities.

## Summary

A CW structure consists of characteristic disks, attaching maps and a topology compatible with them. Disk-pair extension proves the homotopy-extension property for CW pairs; that property justifies collapsing a contractible subcomplex. Compact subsets have finite cell support, while finite dimensionality alone does not imply finiteness or local finiteness. Relative cellular approximation is a separately identified geometric input. Together these tools justify reductions to skeleta before the next chapter introduces singular chains and their algebraic boundaries.
