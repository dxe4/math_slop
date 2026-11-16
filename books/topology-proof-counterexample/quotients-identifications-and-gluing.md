
# Quotients, Identifications, and Gluing

Quotient topology turns an instruction to identify points into a space. It builds circles from intervals, tori from rectangles, and orbit spaces from symmetries. It can also destroy separation, so every geometric picture needs an open-set audit.

## 1. Surjections and saturated sets

Let $q:X\to Y$ be a surjection. A set $A \subseteq X$ is **saturated** when it is a union of fibers, equivalently $A=q^{-1}(q(A))$. The **quotient topology** on $Y$ declares

$U\subseteq Y\text{ open}\iff q^{-1}(U)\subseteq X\text{ open}$.

The axioms follow because inverse images preserve arbitrary unions and finite intersections. This is the finest topology on $Y$ making $q$ continuous: continuity demands every open $U$ have open inverse image, and the definition admits every such $U$.

A quotient map is a surjective continuous map satisfying the displayed biconditional. A surjective continuous map need not be quotient; the reverse implication is extra.

## 2. Equivalence relations

For an equivalence relation $\sim$ on $X$, let $X/{\sim}$ be the set of classes and $q(x)=[x]$. Its quotient topology is the canonical topology induced by the identification. A subset of classes is open precisely when its union in $X$ is open.

The topology depends on both $\sim$ and the topology of $X$. The set of classes alone does not remember which families have open saturated preimage.

Collapsing $A \subseteq X$ to one point identifies all points of $A$ and leaves other points separate. If $A$ is not closed, the collapsed point need not be closed: its inverse image is $A$. Thus a quotient of a Hausdorff space can fail even $T_{1}$.

## 3. Universal property

Suppose $q:X\to Y$ is quotient. A function $g:Y\to Z$ is continuous exactly when $g \circ q:X\to Z$ is continuous.

The forward direction is composition. Conversely, if $g \circ q$ is continuous and $V$ is open in $Z$, then

$q^{-1}(g^{-1}(V))=(g \circ q)^{-1}(V)$

is open. The quotient test implies $g^{-1}(V)$ is open.

Therefore any continuous $f:X\to Z$ constant on every fiber of $q$ factors uniquely through a continuous $g:Y\to Z$. Set theory supplies the unique factor; the quotient topology supplies continuity. This is the main proof tool for maps out of glued spaces.

## 4. Open and closed quotient maps

Every surjective continuous open map is quotient. If $q^{-1}(U)$ is open, then $U=q(q^{-1}(U))$ is open. The same argument shows every surjective continuous closed map is quotient by applying it to complements.

Quotient maps are not generally open or closed. What is always true is: if $A$ is open and saturated, then $q(A)$ is open, because its inverse image is $A$; similarly for closed saturated sets.

Composition of quotient maps is quotient. Saturation alone does not make an arbitrary restriction quotient. Two useful sufficient results are precise: if $B\subseteq Y$ is open or closed, then $q:q^{-1}(B)\to B$ is quotient; and if $q$ is open or closed, its restriction to any saturated subspace $A\subseteq X$ is quotient onto $q(A)$.

## 5. Standard gluing models

Identify endpoints of $[0,1]$. The map $q(t)=(\cos(2 \pi t),\sin(2 \pi t))$ is continuous and surjective onto $S^{1}$, constant exactly on the identified endpoints. Since $[0,1]$ is compact and $S^{1}$ Hausdorff, this map is closed and hence quotient. The induced continuous bijection $[0,1]/(0\sim1)\to S^{1}$ is a homeomorphism.

Identifying opposite edges of a square in matching directions produces a torus. Reversing one edge direction produces a Klein bottle. A picture indicates the relation; a proof specifies the equivalence classes and verifies a map through the universal property.

The wedge $X\vee Y$ is obtained from the disjoint union by identifying chosen basepoints. Its maps into $Z$ correspond to pairs of continuous maps from $X,Y$ agreeing at the basepoints.

## 6. Separation boundaries

For a quotient $q:X\to Y$, singleton $\{y\}$ is closed exactly when the fiber $q^{-1}(\{y\})$ is closed. Hence $Y$ is $T_{1}$ exactly when every equivalence class is closed.

Closed classes do not by themselves guarantee Hausdorffness. A useful sufficient pattern is a compact Hausdorff domain with a closed equivalence relation $R\subseteq X\times X$; then the quotient is Hausdorff. The full saturated-neighborhood proof appears in `separation-axioms-and-closed-set-control`; compactness and closedness of $R$ do real work.

The “line with two origins” glues two copies of $\mathbb{R}$ away from zero but keeps the origins distinct. Each origin has neighborhoods that meet through nonzero points, so they cannot be separated. This quotient is locally line-like yet non-Hausdorff.

## 7. Gluing lemma for spaces

Suppose a space is obtained from a disjoint union of pieces by specified identifications. To construct a map out, define continuous maps on each piece, verify agreement on identified points, and factor through the quotient. To prove a claimed homeomorphism, also establish bijectivity and continuity of the inverse—often compact-to-Hausdorff supplies the last step.

Confusing a continuous bijection with a homeomorphism is especially dangerous in quotient arguments. The quotient property controls maps *out of* the quotient, not arbitrary inverse maps into it.

## Worked examples and full restriction proofs

### Worked example 1 — Collapsing a whole interval without losing Hausdorffness

On $\mathbb R$ identify all points of $[0,1]$, leaving other points distinct. Define $f:\mathbb R\to\mathbb R$ by $f(x)=x$ for $x\le0$, $f(x)=0$ for $0\le x\le1$, and $f(x)=x-1$ for $x\ge1$. The formulas agree at the boundaries, so finite closed pasting proves continuity. Its fibers are exactly the declared equivalence classes and it is surjective. We must still prove it is quotient; continuity and surjectivity alone are insufficient.

The map is closed. If $C$ is closed, its intersections with the two closed tails $(-\infty,0]$ and $[1,\infty)$ have closed images under the corresponding translation homeomorphisms onto closed tails. The middle contribution is either empty or the closed singleton $\{0\}$. Their finite union is $f(C)$, so it is closed. Hence $f$ is quotient. The fiber-constant factor $\bar f:\mathbb R/[0,1]\to\mathbb R$ is bijective. For any open set $V$ of the quotient, $f^{-1}(\bar f(V))=q^{-1}(V)$ is open, and the quotient property of $f$ makes $\bar f(V)$ open. Thus the induced map and its inverse are continuous: this quotient is another copy of the line. A closed collapsed subset can behave very differently from the nonclosed interval in the earlier counterexample.

### Worked example 2 — An explicit cylinder gluing

Take the square $Q=[0,1]^2$ and identify $(0,t)$ with $(1,t)$ for each $t$, with no other distinct identifications. The continuous map $F(s,t)=(\cos 2\pi s,\sin 2\pi s,t)$ has image $S^1\times[0,1]$. Equal images force equal heights and equal angles modulo one, so the fibers are exactly the declared classes. It therefore descends to a continuous bijection $\bar F:Q/{\sim}\to S^1\times[0,1]$ by the quotient universal property.

The domain quotient is compact as a continuous image of the compact square. The target is Hausdorff as a subspace of $\mathbb R^3$. Compact-to-Hausdorff now proves that $\bar F$ is a homeomorphism. Each step has a separate role: the coordinate formula gives continuity; the fiber calculation gives well-definedness and injectivity; surjectivity identifies the entire target; compactness and Hausdorffness supply inverse continuity. Drawing opposite edges with arrows expresses the intended relation but proves none of these facts by itself.

### Worked example 3 — A continuous surjection that is not quotient

Let $D$ be the underlying real set with discrete topology, and let $R$ be the same set with usual topology. The identity $q:D\to R$ is continuous and onto because every target-open set has an open inverse image in the discrete domain. But $q^{-1}(\{0\})=\{0\}$ is open in $D$, whereas $\{0\}$ is not open in $R$. Hence the required reverse implication in the quotient biconditional fails.

This example has singleton fibers, so nothing is geometrically glued. Its failure comes entirely from the wrong target topology. The quotient topology induced by this set map would be discrete, because every subset has an open inverse image. A fiber description determines which points are identified; it does not by itself determine whether a previously chosen topology on the class set is the quotient topology. This is why a claimed parametrization onto a geometric model always needs a quotient argument.

### Theorem — Restrictions over open or closed target subspaces

Let $q:X\to Y$ be quotient and let $B\subseteq Y$ be open or closed. Then $q_B:q^{-1}(B)\to B$ is quotient.

**Proof for open $B$.** The map is continuous and surjective by restriction. Suppose $V\subseteq B$ has inverse image open in $q^{-1}(B)$. Since $B$ is open, its inverse image is open in $X$, so the relatively open inverse image of $V$ is also open in $X$. The original quotient condition makes $V$ open in $Y$, hence in $B$. The converse follows from continuity.

**Proof for closed $B$.** Use closed sets instead. If $F\subseteq B$ has closed inverse image in $q^{-1}(B)$, that inverse image is closed in $X$ because $q^{-1}(B)$ is closed. The original quotient map detects closed sets, so $F$ is closed in $Y$ and therefore in $B$. Conversely continuity preserves inverse images of relatively closed sets. The closed-set biconditional proves quotientness. $\square$

For an arbitrary saturated subspace this proof breaks: its relative open or closed inverse image need not be open or closed in the whole domain. If $q$ is itself open, however, write any relative open inverse image as $q^{-1}(B)\cap U$ with $U$ open. Its image is $B\cap q(U)$, open in $B$, giving the quotient test. If $q$ is closed, the parallel formula for a relatively closed inverse image uses $B\cap q(C)$ for closed $C$. These are genuine additional sufficient hypotheses, not automatic properties of every quotient map.

### Worked example — Collapse rational translates

Identify two real numbers when their difference is rational. Every nonempty open saturated subset of the real line is then the whole line. It contains an interval; density of the rationals gives, for any target point, a rational translate of that interval containing the point. Saturation keeps this translate inside the subset. Thus the quotient has only the empty set and the whole space as open sets.

There are nevertheless many distinct equivalence classes. The topology is indiscrete, and this is not a one-point space merely because open sets cannot distinguish its points. Every class is dense in the original line. The example shows how a set-theoretically rich quotient can retain very little separation information. The number of classes does not decide the topology. Only the actual open saturated preimages determine which distinctions remain visible, so drawing separate labels for classes is no substitute for applying the quotient definition.

## Exercises with complete solutions

### TOP-CH06-E001 — Exercise 1
Verify the quotient-open sets form a topology.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the inverse-image identities for unions and intersections.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The full and empty sets also have the required inverse images.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH06-E001 — Solution 1
Preimages of $\varnothing,Y$ are $\varnothing,X$; inverse images commute with arbitrary unions and finite intersections, so the corresponding operations preserve openness upstairs.


</details>

### TOP-CH06-E002 — Exercise 2
Prove the quotient topology is finest making $q$ continuous.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Continuity permits only target sets having open preimage.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The quotient topology includes all such permitted sets.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH06-E002 — Solution 2
It makes $q$ continuous by definition. Any topology making $q$ continuous may contain only sets whose inverse images are open, all of which the quotient topology includes.


</details>

### TOP-CH06-E003 — Exercise 3
Prove $A$ is saturated iff $A=q^{-1}(q(A))$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Expand the preimage of the image as a union of fibers.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

It consists of precisely the fibers that meet the original set.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH06-E003 — Solution 3
The right side is the union of all fibers meeting $A$. Equality therefore says exactly that whenever $A$ meets a fiber, it contains the whole fiber.


</details>

### TOP-CH06-E004 — Exercise 4
Prove the universal property.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

For the difficult direction start from an open set in the final target.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The quotient biconditional converts openness of its double preimage into openness downstairs.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH06-E004 — Solution 4
If $gq$ is continuous, then for open $V$, $q^{-1}(g^{-1}(V))$ is open. The quotient biconditional makes $g^{-1}(V)$ open. The converse is composition.


</details>

### TOP-CH06-E005 — Exercise 5
Show a continuous fiber-constant map factors uniquely.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Define the factor map by choosing any representative of a fiber.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Fiber constancy ensures its value is independent of that representative.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH06-E005 — Solution 5
Define $g(y)=f(x)$ for any $x$ with $q(x)=y$; fiber constancy makes this well-defined and surjectivity makes it unique. Since $gq=f$ is continuous, the universal property makes $g$ continuous.


</details>

### TOP-CH06-E006 — Exercise 6
Prove a surjective continuous open map is quotient.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Apply openness to the full inverse image of a target set.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Surjectivity identifies the image of that inverse image with the target set.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH06-E006 — Solution 6
If $q^{-1}(U)$ is open, openness of $q$ gives $U=q(q^{-1}(U))$ open. Together with continuity this is the quotient biconditional.


</details>

### TOP-CH06-E007 — Exercise 7
Prove the analogous closed-map criterion.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the closed-set form of the quotient criterion.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Images of closed preimages recover the original set by surjectivity.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH06-E007 — Solution 7
If $q^{-1}(F)$ is closed, closedness and surjectivity give $F=q(q^{-1}(F))$ closed. Taking complements supplies the open-set criterion.


</details>

### TOP-CH06-E008 — Exercise 8
Prove a composite of quotient maps is quotient.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Apply the quotient biconditional twice.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Start with the inverse image under the composite.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH06-E008 — Solution 8
For $r q$, a set $U$ has open inverse image under the composite iff $q^{-1}(r^{-1}(U))$ is open, iff $r^{-1}(U)$ is open, iff $U$ is open.


</details>

### TOP-CH06-E009 — Exercise 9
When is the collapsed point in $X/A$ closed?


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The inverse image of the collapsed singleton is exactly the collapsed subset.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Quotient maps detect closed sets through their preimages.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH06-E009 — Solution 9
Exactly when its inverse image $A$ is closed, because the quotient map detects closed sets by complements for singleton preimages.


</details>

### TOP-CH06-E010 — Exercise 10
Give a Hausdorff space with a non-$T_{1}$ quotient.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Collapse a nonclosed subset of the real line.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The collapsed point then has a nonclosed fiber.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH06-E010 — Solution 10
Collapse $(0,1)$ in $\mathbb{R}$ to one point. Its singleton preimage is not closed, so the collapsed point is not closed and the quotient is not $T_{1}$.


</details>

### TOP-CH06-E011 — Exercise 11
Prove a quotient is $T_{1}$ iff every fiber is closed.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the closed-singleton characterization of T1.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A target singleton pulls back to exactly one fiber.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH06-E011 — Solution 11
$\{y\}$ is closed downstairs iff its inverse image, the fiber over $y$, is closed upstairs. Apply this to every $y$.


</details>

### TOP-CH06-E012 — Exercise 12
Show an open saturated set has open image.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Saturation identifies the preimage of the image with the original set.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Apply the defining quotient test to that image.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH06-E012 — Solution 12
For saturated $A$, $q^{-1}(q(A))=A$ is open. The quotient definition then makes $q(A)$ open.


</details>

### TOP-CH06-E013 — Exercise 13
Why is saturation needed in Exercise 12?


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A nonsaturated open set may acquire extra fiber points on saturation.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Those added points need not have neighborhoods inside the saturation.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH06-E013 — Solution 13
Without it, the preimage of the image may enlarge $A$ by whole fibers and need not be open. Quotient openness tests that enlarged preimage, not the original set.


</details>

### TOP-CH06-E014 — Exercise 14
Show $[0,1]/(0\sim1)$ is homeomorphic to $S^{1}$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the sine-cosine parametrization.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Check its fibers and apply compact-to-Hausdorff after factorization.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH06-E014 — Solution 14
The trigonometric map is continuous, surjective, and has precisely the declared fibers, so it induces a continuous bijection. The quotient is compact and the circle Hausdorff; compact-to-Hausdorff makes it a homeomorphism.


</details>

### TOP-CH06-E015 — Exercise 15
Describe maps from a wedge $X\vee Y$ to $Z$.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Start from a map on the disjoint union.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

It descends precisely when the basepoint values agree.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH06-E015 — Solution 15
They correspond exactly to continuous $f:X\to Z$ and $g:Y\to Z$ whose values agree at the chosen basepoints. Agreement makes the disjoint-union map constant on the identified fiber, so it factors uniquely.


</details>

### TOP-CH06-E016 — Exercise 16
Show the line with two origins is not Hausdorff.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Lift neighborhoods of the two origins to their separate copies.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Both contain common nonzero points after identification.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH06-E016 — Solution 16
Any neighborhoods of the two origins contain images of punctured intervals. Those images overlap, so no disjoint neighborhood pair exists.


</details>

### TOP-CH06-E017 — Exercise 17
Can a quotient map fail to be open?


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Collapse all integers to one point.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A short interval about one integer has an image whose saturated preimage is not open near the other integers.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH06-E017 — Solution 17
Yes. Collapse the integers in $\mathbb{R}$ to one point. A small interval around one integer is open but not saturated; the preimage of its image includes all integers without neighborhoods around the others, so that image is not open.


</details>

### TOP-CH06-E018 — Exercise 18
Prove the quotient of a connected space is connected.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A quotient map is continuous and onto.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use preservation of connectedness under continuous images.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH06-E018 — Solution 18
The quotient map is continuous and surjective, and continuous images of connected spaces are connected.


</details>

### TOP-CH06-E019 — Exercise 19
Identify the flaw: “All equivalence classes are closed, so the quotient is Hausdorff.”


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Which separation axiom follows from closed singleton fibers?

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The line with two origins has closed fibers but inseparable origins.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH06-E019 — Solution 19
Closed classes establish only $T_{1}$. Hausdorffness requires simultaneous disjoint neighborhoods of distinct classes; the line-with-two-origins phenomenon shows local class closedness is insufficient.


</details>

### TOP-CH06-E020 — Exercise 20 — Gluing investigation

#### TOP-CH06-P001 — Project contract: gluing investigation
Specify an equivalence relation on the square producing a cylinder, construct a map to the standard cylinder, and list every step needed for a homeomorphism proof.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Keep the second square coordinate as height.

</details>

<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use the circle parametrization in the first coordinate, then compact-to-Hausdorff for the induced bijection.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH06-E020 — Solution 20
Identify $(0,t)\sim(1,t)$ and no other distinct points. Map $(s,t)$ to $(\cos(2 \pi s),\sin(2 \pi s),t)$. It is continuous and constant precisely on equivalence classes, hence induces a continuous bijection to $S^{1} \times [0,1]$. The square quotient is compact; the target is Hausdorff, so the bijection is a homeomorphism. The audit includes the exact fibers, factorization, bijectivity, compactness, and Hausdorffness.


</details>

## Sources and provenance

The existing mathematical text, exercise identifiers and complete solutions are retained. New examples and staged hints are original Euler prose under CC BY-SA 4.0. For a primary university course reference and the standard progression of point-set topology, see James Munkres, [MIT 18.901, Introduction to Topology](https://ocw.mit.edu/courses/18-901-introduction-to-topology-fall-2004/pages/lecture-notes/). Its course materials are separately licensed by MIT; this chapter does not reproduce their text.


## Chapter checkpoint

Quotient topology is the finest topology compatible with a surjective identification map. Its universal property is the reliable way to construct maps out of glued spaces. Saturation controls images, compact-to-Hausdorff often upgrades induced bijections, and separation must be checked through fibers and the relation rather than trusted from a picture.

## Transferred capstone 2 {#topology-transferred-e002}

Original question identity: [TOP-CH22-E002](topology-proof-atlas-and-capstones.md). The earlier capstone remains available with its own notes; the complete question, staged hints and solution also belong here.

Let $q:X\to Y$ be a quotient map and $f:X\to Z$ a continuous map constant on fibers of $q$. Construct the induced map and prove existence, uniqueness, and continuity separately.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Define the value downstairs using any representative in a fiber.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Surjectivity gives existence and uniqueness; the quotient topology gives the continuity criterion.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Define $g:Y\to Z$ by choosing $x$ with $q(x)=y$ and setting $g(y)=f(x)$. Surjectivity of $q$ makes a representative available. Fiber constancy makes the value independent of the representative, so $g$ is well defined. It satisfies $gq=f$, establishing existence. If $h q=f$ also, then for any $y=q(x)$, $h(y)=h(q(x))=f(x)=g(q(x))=g(y)$; hence surjectivity gives uniqueness. Finally $gq=f$ is continuous, and the defining test for the quotient topology says a map out of $Y$ is continuous exactly when its composite with $q$ is continuous. Therefore $g$ is continuous.

</details>

## Transferred capstone 10 {#topology-transferred-e010}

Original question identity: [TOP-CH22-E010](topology-proof-atlas-and-capstones.md). The earlier capstone remains available with its own notes; the complete question, staged hints and solution also belong here.

Audit the map $\varphi:\mathbb{R}/\mathbb{Z}\to S^{1}$, $\varphi([t])=\exp(2 \pi i t)$, and prove it is a homeomorphism without writing an explicit inverse formula.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Descend the exponential map through the quotient.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use a compact interval to prove compactness of the quotient, then apply the compact-to-Hausdorff theorem.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

Let $q:\mathbb{R}\to \mathbb{R}/\mathbb{Z}$ be the quotient map. If $t-s$ is an integer, then $\exp(2 \pi i t)=\exp(2 \pi i s)$, so $\varphi$ is well defined. The composite $\varphi q(t)=\exp(2 \pi i t)$ is continuous, hence the quotient test makes $\varphi$ continuous. Equal exponentials differ by an integer in their parameters, proving injectivity, and every point of $S^{1}$ has an angular parameter, proving surjectivity. The restriction $q|_{[0,1]}:[0,1]\to \mathbb{R}/\mathbb{Z}$ is continuous and surjective, so $\mathbb{R}/\mathbb{Z}$ is compact. Since $S^{1}$ is Hausdorff, the compact-to-Hausdorff continuous-bijection theorem upgrades $\varphi$ to a homeomorphism. No explicit inverse continuity calculation is needed.

</details>

## Transferred capstone 20 {#topology-transferred-e020}

Original question identity: [TOP-CH22-E020](topology-proof-atlas-and-capstones.md). The earlier capstone remains available with its own notes; the complete question, staged hints and solution also belong here.

Write a construction audit for the quotient of $[0,1]$ obtained by identifying $0$ with $1$. Include the underlying relation, quotient map, a candidate map to $S^{1}$, well-definedness, continuity, bijectivity, and the theorem that upgrades it to a homeomorphism.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Check each quotient obligation independently.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

After continuity and bijectivity, use compactness of the interval image and Hausdorffness of the circle to obtain the inverse continuity.

</details>

## 9. Complete solutions

<details data-euler-reveal="solution">
<summary>Full solution</summary>




Define $s\sim t$ on $[0,1]$ when $s=t$ or $\{s,t\}=\{0,1\}$. Let $Y=[0,1]/{\sim}$ and let $q:[0,1]\to Y$ be the quotient map. Define $\varphi:Y\to S^{1}$ by $\varphi([t])=\exp(2 \pi i t)$. The only distinct equivalent representatives are zero and one, and both exponentiate to one, so the formula is well defined. Its composite with $q$ is continuous; the quotient property gives continuity of $\varphi$. Equality of exponentials for parameters in $[0,1]$ occurs only for equal parameters or the endpoint pair, proving injectivity, and angular parameterization gives surjectivity. The quotient $Y$ is compact as a continuous image of compact $[0,1]$, while $S^{1}$ is Hausdorff. Therefore the compact-to-Hausdorff criterion makes the continuous bijection $\varphi$ a homeomorphism. This completes the relation, map, topology, and theorem audit.

</details>
