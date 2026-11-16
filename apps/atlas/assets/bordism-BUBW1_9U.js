var e=`---
parent_id: book-advanced-algebraic-topology
chapter_id: bordism
title: "Bordism"
level: graduate
license: CC BY-SA 4.0
---

# Bordism

Two closed manifolds can be related by being the boundary pieces of one higher-dimensional compact manifold. Bordism turns that relation into groups and rings, then connects geometric constructions with characteristic numbers and spectra. This chapter proves the basic group laws, the low-dimensional point and circle calculations, and characteristic-number invariance. The general Thom and Pontryagin–Thom comparison theorems are named inputs, with the collapse construction developed separately from their full classification claims.

**L5 preparation.** Use [Smooth Manifolds](../smooth-manifolds.md), [Characteristic Classes](characteristic-classes.md), [Local Coefficients](sheaf-cohomology-local-systems.md) and [Spectra](generalised-cohomology-spectra.md). All manifolds here are smooth and compact; closed means without boundary. An orientation is additional data unless the unoriented theory is specified. Collar and tubular-neighborhood theorems are explicit differential-topology inputs. No general surface classification or complete calculation of a bordism ring is asserted.

## The relation and its gluing proof

Closed oriented $m$-manifolds $M_0,M_1$ are oriented bordant if a compact oriented $(m+1)$-manifold has boundary $(-M_0)\\sqcup M_1$, with the boundary orientation defined by putting the outward normal first. Boundary identifications are part of the data. The empty manifold is allowed. In the unoriented version drop all orientation choices and signs, but retain compactness and boundary identifications.

Reflexivity uses the cylinder $I\\times M$, with the interval orientation first: its initial boundary is minus $M$ and its final boundary is plus $M$. Reversing the orientation of a bordism proves symmetry. For transitivity take collars of the two copies of the shared intermediate boundary. One collar parameter increases toward that boundary and the other away from it. Glue their zero ends and use a signed parameter through zero as the coordinate normal to the glued boundary. Together with boundary charts this defines a smooth atlas across the seam. The opposing boundary orientations ensure the product orientations agree there. The glued manifold is compact and has exactly the two remaining boundary pieces, proving transitivity.

This argument uses the collar theorem, rather than pretending that an arbitrary topological identification is automatically smooth. Different choices are unnecessary for existence of the relation: any compatible collars supply a bordism. Corners from later products and handle attachments can be rounded within a collar chart; this is another use of the same local smooth model, leaving the designated boundary manifolds unchanged up to diffeomorphism.

Disjoint union descends to an abelian monoid of classes, because disjoint union of bordisms respects the relation. The cylinder shows that $M\\sqcup(-M)$ is a boundary, so reversing orientation is the inverse. Thus the monoid is already a group, denoted $\\Omega_m^{SO}$. For unoriented bordism the two ends of the cylinder are both copies of the same unoriented manifold, so every element satisfies twice its class equal to zero. The unoriented groups are naturally vector spaces over the two-element field. That does not make them zero; the projective-plane example below gives a nonzero element.

## Products and the graded ring

Cartesian product makes the direct sum over dimensions into a ring. If $M_0$ and $M_1$ bound a bordism $W$, then $W\\times N$ bounds the corresponding products for closed $N$. In the other factor, the product boundary orientation carries the sign $(-1)^{\\dim M}$; reversing the product bordism orientation if needed gives the same well-definedness conclusion. The empty manifold is additive zero and a positively oriented point is the unit.

Swapping two factors of dimensions $m,n$ permutes their tangent bases by $mn$ transpositions, so it changes orientation by $(-1)^{mn}$. Hence oriented bordism is graded commutative. Unoriented bordism is commutative without a sign distinction. This proof refers to geometric product orientation, not to a formal analogy with the cup-product sign rule.

Extra structures change the theory. A framing, a stable complex structure or a spin structure must extend across the proposed bordism, not merely exist separately on each boundary component. Forgetting such data gives a homomorphism to a less structured theory. Conversely, an oriented bordism does not automatically preserve a prescribed framing. The structure and its extension condition are part of the equivalence relation.

## Worked example 1: points, intervals and circles

A compact zero-manifold is a finite collection of points. An oriented point has a positive or negative sign. The signed sum of these points is invariant under oriented bordism: every oriented interval contributes one positive and one negative boundary point, and a circle contributes none. Conversely pair each positive point with a negative one and use oriented intervals. Any remaining points are detected by the signed sum. Thus $\\Omega_0^{SO}\\cong\\mathbb Z$, with one positive point as generator. Without orientation the invariant is parity, and pairing arbitrary points by intervals proves $\\Omega_0^O\\cong\\mathbb Z/2$.

Here is the elementary one-manifold fact used in that argument. For an oriented connected compact one-manifold without boundary, choose a metric and its positive unit vector field. Its flow has open orbits, so connectedness makes one orbit the whole manifold. The orbit map from the real line is a local diffeomorphism. Its stabilizer is discrete, and compactness forces it to be a nonzero cyclic subgroup; quotienting gives a circle. With boundary, a unit-speed trajectory cannot repeat, since a repeated trajectory would form an open periodic component without boundary. A finite coordinate cover gives finite total length, so its two maximal travel times reach boundary points. Boundary flow coordinates then give a closed interval covering the connected manifold.

For an unoriented connected compact one-manifold, pass to its orientation double cover and apply this classification there. If that cover were connected, its deck involution would reverse orientation freely. An orientation-reversing interval homeomorphism has a fixed point by the intermediate value theorem. An orientation-reversing circle homeomorphism also has a fixed point: its lifted decreasing degree-minus-one map changes its displacement by two periods across one period, forcing an integral-period displacement somewhere. Both contradict a free deck action. Thus the orientation cover splits, and the original manifold is orientable and has the stated classification.

Every closed compact one-manifold is consequently a finite union of circles. Each circle bounds a disk, with either prescribed orientation obtainable by orienting the disk accordingly. Hence both one-dimensional bordism groups vanish. This proves only the zero- and one-dimensional cases; it is not an argument that every closed higher-dimensional manifold bounds.

## Stable tangent information passes to the boundary

If $M=\\partial W$, a collar identifies the ambient tangent bundle on the boundary with $TM$ plus a trivial normal line. Thus stable characteristic classes of $TM$ are restrictions of the corresponding classes of $TW$. For unoriented manifolds use Stiefel–Whitney classes and mod-two coefficients. For oriented manifolds use integral Pontryagin classes, or other stable oriented characteristic classes in their stated coefficient setting. No direct-sum torsion simplification is needed here: adding a trivial line gives the identity directly from complexification and the Chern formula.

Let $P$ be a polynomial in those classes whose total cohomological degree equals $m$. Its characteristic number is the evaluation of $P(TM)$ on the appropriate fundamental class. For a boundary, write $i:M\\to W$. The relative fundamental class has boundary $[M]$, and exactness of the homology sequence gives $i_*[M]=0$. Therefore
$$\\langle P(TM),[M]\\rangle=\\langle i^*P(TW),[M]\\rangle=\\langle P(TW),i_*[M]\\rangle=0.$$
The same proof works modulo two without orientability. It proves every such number vanishes on a boundary and that numbers agree on bordant oriented manifolds after the boundary signs are included. Disjoint union adds the evaluations.

Only stable classes satisfy the restriction premise. The integral tangent Euler class changes rank when a normal line is added, so its top evaluation is not an oriented bordism invariant by this argument. Indeed an even sphere bounds a disk but has Euler number two, as computed earlier. Treating every familiar characteristic number as stable would immediately contradict that example. Mod-two top Stiefel–Whitney numbers have a different stability behavior and do fit the stated proof.

## Worked example 2: the projective plane has infinite oriented order

For the complex projective plane with complex orientation, the previous chapter computed $p_1(T\\mathbb{CP}^2)=3u^2$ and normalized its evaluation to three. That number cannot occur on an oriented boundary, so this manifold is not nullbordant. A disjoint union of $r$ positively oriented copies has Pontryagin number $3r$, and reversing orientation negates the evaluation. Thus its oriented bordism class has infinite order.

This detects an infinite cyclic subgroup in dimension four. It does not prove that this subgroup is the whole four-dimensional bordism group, or exclude other torsion classes. Such a classification needs additional theorems. The proof here deliberately uses an obstruction whose value is actually calculated, rather than deriving a complete group from one example.

## Worked example 3: a nonzero unoriented class of order two

On real projective two-space, the stable tangent formula gives $w(T\\mathbb{RP}^2)=(1+x)^3=1+x+x^2$, with the top mod-two generator evaluating to one. Hence the Stiefel–Whitney number $\\langle w_1^2,[\\mathbb{RP}^2]_2\\rangle$ is one. The boundary-vanishing theorem proves that this surface is not an unoriented boundary.

Its class nevertheless has order two, since two copies form the boundary of its unoriented cylinder. The point is not a contradiction: an exponent-two group can have many nonzero elements. This proves a particular order-two class, not a complete unoriented surface-bordism classification. An oriented calculation cannot be applied to the real projective plane without supplying an orientation that it does not possess.

## Constructed surfaces that do bound

Start with a three-ball and attach $g$ disjoint one-handles, each a product of an interval and a disk, along pairs of boundary disks. Rounding the corners produces an oriented compact handlebody. Its boundary is the explicit genus-$g$ surface obtained from a sphere by adding those $g$ tubes. It therefore gives a nullbordism of that constructed family, including the sphere when no handle is attached.

This construction is often combined with a separate classification theorem saying every connected closed orientable surface is of that form. No proof of that general surface classification is invented here. Without importing it, the demonstrated conclusion concerns precisely the boundaries just constructed. Even with it, higher-dimensional bordism remains a different problem. The distinction matters whenever a familiar drawing is used to justify an assertion about all manifolds.

## A framing and the collapse map

Embed a closed $m$-manifold in sufficiently high Euclidean space and choose a trivialization of its rank-$r$ normal bundle. The embedding and a tubular neighborhood identify a neighborhood with a disk normal bundle, here $M\\times D^r$. Collapse the complement of its interior in the ambient one-point compactification to the basepoint, and on the normal neighborhood keep only the framed disk coordinate modulo its boundary. This gives a continuous map
$$S^{m+r}\\longrightarrow D^r/S^{r-1}=S^r.$$
Continuity follows because the entire boundary of the closed tubular disk goes to the target basepoint, so the two definitions agree at the collapse seam. The normal framing, rather than an unrelated tangent frame, supplies the target coordinates. It induces an orientation once the ambient orientation and normal-first convention are fixed.

A framed bordism with compatible collars and tubular data gives the same collapse construction through a parameter interval, producing a homotopy of the endpoint maps. Adding one trivial normal direction suspends the map, so stable framed geometry naturally produces stable sphere classes. Conversely, a smooth map transverse to a target point has a compact inverse-image submanifold, and its differential identifies the normal directions with the target tangent space, giving a framing. Relative transversality for a homotopy gives a framed bordism of those inverse images.

These are the two geometric constructions behind the Pontryagin–Thom theorem. Its full assertion that they are inverse, independent of all embedding and stabilization choices, is imported here with its relative embedding, tubular and transversality machinery. We do not infer that global theorem merely from the local regular-value description. In precise form it identifies stable normal-framed bordism in dimension $m$ with the stable sphere stem of degree $m$.

For oriented, unoriented and stably complex normal structures, the corresponding general Thom theorems replace the sphere spectrum by $MSO$, $MO$ and $MU$. They identify the geometric bordism groups with the corresponding spectrum homotopy coefficients. Their cohomological coefficient degree is minus the geometric dimension, matching the convention in the generalized-cohomology chapter. These comparison theorems and the full coefficient-ring calculations are deep inputs; the ring laws and concrete nonbounding examples proved above do not supply them by themselves.

## Exercises with hints and full solutions

### Exercise 1

A zero-manifold has five positive and two negative points. Determine its oriented bordism class and its unoriented class.

<details><summary>Hint 1</summary>

Use signed count in one theory and parity in the other.

</details>

<details><summary>Hint 2</summary>

Intervals cancel pairs of opposite signs in the oriented theory.

</details>

<details><summary>Full solution</summary>

Its oriented class is three times the positive point generator. Two opposite pairs bound intervals, leaving three positives. Forgetting signs leaves seven points, so the unoriented class is the nonzero parity class. The forgetful map from the integer group in degree zero to the mod-two group is reduction modulo two, consistent with both descriptions.

</details>

### Exercise 2

Why does an unoriented cylinder prove twice every class is zero, while an oriented cylinder does not prove that conclusion?

<details><summary>Hint 1</summary>

Compare the two induced endpoint orientations.

</details>

<details><summary>Hint 2</summary>

In the oriented theory the inverse is the orientation-reversed manifold.

</details>

<details><summary>Full solution</summary>

Unoriented endpoint boundaries are two copies of the same object, so their disjoint union is nullbordant. In the oriented cylinder one endpoint has the reversed orientation, giving the relation $[M]+[-M]=0$. It proves that orientation reversal is the inverse, not that the inverse equals the original class. The infinite-order projective-plane example shows the latter equality can fail.

</details>

### Exercise 3

State the compactness and smoothness ingredients in the transitivity proof for bordism.

<details><summary>Hint 1</summary>

The common boundary must be glued using collars.

</details>

<details><summary>Hint 2</summary>

A signed collar coordinate passes through the seam.

</details>

<details><summary>Full solution</summary>

The two compact bordisms glue along their specified compact shared boundary. Collar charts identify neighborhoods there with boundary times a half-interval; joining the parameters with opposite signs gives a smooth full-interval chart across the seam. Opposite induced boundary orientations make the ambient orientations agree. Finite gluing of the compact pieces remains compact, and only the unglued boundary components survive. A bare arbitrary topological quotient would not supply that smooth atlas.

</details>

### Exercise 4

Prove a degree-four Pontryagin number is additive under oriented disjoint union and changes sign under orientation reversal.

<details><summary>Hint 1</summary>

The characteristic class restricts to the same class on each component.

</details>

<details><summary>Hint 2</summary>

The fundamental class is a sum, and reversal negates it.

</details>

<details><summary>Full solution</summary>

The fundamental class of a disjoint union is the sum of its component classes, and evaluation is linear, so the numbers add. Reversing orientation leaves the tangent Pontryagin class unchanged but negates the integral fundamental class, changing the number's sign. The same argument applies to any integral stable characteristic polynomial of the correct total degree, with its stated bundle structure.

</details>

### Exercise 5

Why is the nonzero first Pontryagin number of the complex projective plane enough to prove infinite order but insufficient to compute the whole dimension-four bordism group?

<details><summary>Hint 1</summary>

Every nonzero multiple has a nonzero evaluated number.

</details>

<details><summary>Hint 2</summary>

An obstruction map may have a kernel not detected by this one class.

</details>

<details><summary>Full solution</summary>

A nonzero multiple has Pontryagin number three times that integer and therefore cannot bound. Hence the generated cyclic subgroup is infinite. Other classes might have zero first Pontryagin number or represent independent information, so this argument does not prove surjectivity onto the whole bordism group or triviality of the evaluation map's kernel. A complete classification theorem would need additional input.

</details>

### Exercise 6

Explain why the integral Euler number of an even-dimensional sphere is not an oriented bordism invariant.

<details><summary>Hint 1</summary>

The sphere is the boundary of a disk.

</details>

<details><summary>Hint 2</summary>

The stable boundary restriction argument does not apply to the rank-dependent Euler class.

</details>

<details><summary>Full solution</summary>

The sphere is nullbordant yet has Euler number two, while the empty manifold has zero. Thus that number does not descend to oriented bordism classes. Its tangent rank changes when the boundary normal line is added, so the stable characteristic-polynomial proof has no premise covering it. This does not contradict the stable Stiefel–Whitney or Pontryagin number invariance actually proved.

</details>

### Exercise 7

Use the calculated Stiefel–Whitney number to prove the unoriented real projective plane has order exactly two.

<details><summary>Hint 1</summary>

The nonzero number excludes order one.

</details>

<details><summary>Hint 2</summary>

The cylinder gives an upper bound of two on its order.

</details>

<details><summary>Full solution</summary>

Its squared first Stiefel–Whitney class evaluates to one modulo two, so it cannot be a boundary and its class is nonzero. Two copies bound the cylinder in the unoriented theory. Therefore the order is exactly two. The conclusion identifies the order of this element only, without claiming the group has no other generators.

</details>

### Exercise 8

In the framed collapse construction, why does the target sphere dimension equal the normal rank rather than the manifold dimension?

<details><summary>Hint 1</summary>

The local map forgets the point of the manifold and retains a normal disk coordinate.

</details>

<details><summary>Hint 2</summary>

Collapsing the boundary of that disk produces the target.

</details>

<details><summary>Full solution</summary>

The tubular neighborhood is the product of the manifold with a framed normal disk of rank $r$. The map projects to that disk and then identifies its boundary, giving $S^r$. The ambient compactification is $S^{m+r}$, so the stable difference of source and target dimensions is the manifold dimension $m$. Confusing these two ranks would assign the framed class to the wrong stable stem.

</details>

### Exercise 9

What must extend across a framed bordism in addition to its underlying smooth manifold and orientation?

<details><summary>Hint 1</summary>

The boundary framing is part of the original data.

</details>

<details><summary>Hint 2</summary>

Stabilization may add trivial normal directions but cannot silently replace the boundary class.

</details>

<details><summary>Full solution</summary>

A compatible stable normal trivialization must extend over the bordism and restrict to the prescribed boundary framings with the collar conventions. An underlying oriented bordism need not admit that extension. Adding trivial normal directions is allowed in stable framed theory, but one must retain the resulting stable boundary framing class. Forgetting it gives a map to oriented bordism and generally loses information.

</details>

### Exercise 10

Why does constructing a genus-$g$ handlebody not by itself prove that every closed orientable surface bounds?

<details><summary>Hint 1</summary>

The construction begins with a specific ball-and-handles model.

</details>

<details><summary>Hint 2</summary>

Relating an arbitrary surface to that model is a separate classification assertion.

</details>

<details><summary>Full solution</summary>

It proves that the explicit boundary of that handlebody is nullbordant. To apply it to an arbitrary connected closed orientable surface one needs a theorem identifying that surface with one of those boundaries. The general surface classification supplies such an identification but was not proved by attaching the handles. Naming that additional input is essential; the construction alone does not justify the universal claim.

</details>

## Provenance and scope

The geometric arguments and examples are original exposition using the preceding actual chapters. The [Milnor–Stasheff publisher contents](https://api.pageplace.de/preview/DT0400.9781400881826_A27168759/preview-9781400881826_A27168759.pdf) places oriented cobordism, Thom spaces and transversality after characteristic classes, consistent with this continuation. The full Thom spectrum comparisons, complete characteristic-number classification and signature theorem remain imported or further material. The complete-book comparison is limited to the accessible contents and opening excerpts recorded in the reader guide, rather than an invented reading or review of those later proofs.
`;export{e as default};