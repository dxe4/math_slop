var e=`---
parent_id: book-topology-proof-counterexample
chapter_id: countability-separability-and-lindelof-properties
title: "Countability, Separability, and Lindelof Properties"
level: advanced-undergraduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Countability, Separability, and Lindelof Properties

Countability axioms determine whether local topology can be controlled by sequences and whether global open covers can be reduced to countable data. They are not interchangeable: first countability is local, second countability is one global basis, separability concerns a countable dense set, and the Lindelof property concerns countable subcovers.

## 1. Local and global bases

A **local base** at $x$ is a family $B_{x}$ of neighborhoods such that every neighborhood of $x$ contains some $B \\in B_{x}$. A space is **first-countable** when every point has a countable local base.

A space is **second-countable** when its topology has one countable basis $B$. Second countability implies first countability: take all basis members containing $x$. The converse fails because choosing countably many neighborhoods at each of uncountably many points need not yield one countable family.

Every metric space is first-countable; balls $B_{1/n}(x)$ form a local base. A separable metric space is second-countable: if $D$ is countable dense, use balls centered in $D$ with positive rational radii.

## 2. Sequences under first countability

In a first-countable space, $x \\in \\operatorname{cl}(A)$ iff some sequence in $A$ converges to $x$. Choose a decreasing local base $U_{n}$ and points $a_{n} \\in A \\cap U_{n}$. Thus sequentially continuous maps from a first-countable domain are continuous.

Without first countability, sequences may miss closure points. In $[0,\\omega_{1}]$, no sequence of countable ordinals converges to $\\omega_{1}$, because its countable supremum remains below $\\omega_{1}$. Nets still detect the closure.

First countability is sufficient, not necessary, for a space to be sequential. The precise boundary belongs to a later specialist treatment; this chapter does not identify all sequential spaces with first-countable ones.

## 3. Separability

A space is **separable** if it has a countable dense subset. Second-countable spaces are separable when a mild choice of one point from each nonempty basis element is available. Given countable basis $\\{B_{n}\\}$, choose $x_{n} \\in B_{n}$ whenever nonempty. Every nonempty open set contains a basis element and hence one selected point.

Subspaces of separable spaces need not be separable in arbitrary topology. In metric spaces they are: use second countability of the ambient separable metric space, restrict the basis, then select points.

Continuous images of separable spaces are separable. If $D$ is dense and $f$ continuous, $f(D)$ is dense in $f(X)$ because $f(\\operatorname{cl}(D)) \\subseteq \\operatorname{cl}(f(D))$.

## 4. Lindelof spaces

A space is **Lindelof** if every open cover has a countable subcover. Compact spaces are Lindelof because finite is countable. Second-countable spaces are Lindelof: for each basis element contained in some cover member, select one such member; only countably many selections occur, and they cover.

Closed subspaces of Lindelof spaces are Lindelof: add the open complement to a cover. Continuous images preserve Lindelofness by the same pullback argument used for compactness.

In a regular Lindelof space, one can often upgrade local separation to normality. The Lindelof selection converts a pointwise family of neighborhoods into countably many whose closures remain controlled.

## 5. Metric equivalences

For metric spaces,

$second-countable \\iff separable \\iff Lindelof$.

We already proved separable implies second-countable and second-countable implies Lindelof. For Lindelof implies separable, cover by all $1/n$-balls for each $n$, choose a countable subcover, and collect the centers across $n$. Every nonempty open ball contains a chosen center at sufficiently fine scale.

These equivalences are metric, not universal. Counterexamples should name which direction fails and which hypothesis is absent.

## 6. Products and subspaces

A countable product of second-countable spaces is second-countable. Basic cylinders choose finitely many coordinates and one basis element in each; the set of all finite choices from countable data is countable.

Let $(x_i)$ be a point in an uncountable product such that, for uncountably many indices $i$, the point $x_i$ has a proper open neighborhood in $X_i$. Then the product is not first-countable at $(x_i)$. Every proposed countable family of product-basic neighborhoods collectively restricts only countably many coordinates. At an unrestricted coordinate $j$, pull back a proper neighborhood of $x_j$; no member of the proposed family is contained in that cylinder. In particular, an uncountable product of nontrivial $T_1$ spaces is not first-countable. Without a separation condition, “nontrivial” alone is insufficient: a product of indiscrete spaces is indiscrete and first-countable.

Second countability is hereditary: intersections of a countable basis with a subspace give a countable basis. First countability is also hereditary. Lindelofness is not hereditary to arbitrary subspaces, though it is hereditary to closed ones.

## 7. Canonical boundaries

An uncountable discrete space is first-countable but neither separable, second-countable, nor Lindelof. Its singleton cover has no countable subcover.

The lower-limit, or Sorgenfrey, line has basis $[a,b)$. It is first-countable and separable, but not second-countable. It is Lindelof, showing separability plus Lindelofness still need not yield second countability without metric structure. Its square has strikingly different covering behavior, warning that Lindelofness is not preserved by arbitrary finite products.

The long line is locally Euclidean and first-countable in common versions but not second-countable. This motivates the global countability axiom in the definition of a manifold.

## Quantifiers made explicit

**Proposition 11.1 (The rational-ball basis, with all inclusions).** Let $(X,d)$ be a metric space with countable dense set $D$. The balls $B_d(q,r)$ with $q\\in D$ and positive rational $r$ form a countable basis.

*Proof.* The family is indexed by the countable set $D\\times\\mathbb Q_{>0}$. Given $x\\in O$ with $O$ open, choose $\\varepsilon>0$ such that $B_d(x,\\varepsilon)\\subseteq O$. Density supplies $q\\in D$ with $d(x,q)<\\varepsilon/3$. Choose rational $r$ strictly between $d(x,q)$ and $\\varepsilon-d(x,q)$; the interval is nonempty. Then $x\\in B_d(q,r)$. For $y$ in that ball, the triangle inequality gives $d(y,x)<r+d(q,x)<\\varepsilon$, so the entire basis candidate lies in $O$. This proves the required point-and-open-set refinement. ∎

The centre must come from the fixed countable set, rather than being chosen arbitrarily at every point. That is where the global countability enters. The radius must also be selected from a fixed countable family, while density and the triangle inequality provide enough flexibility to do so.

**Proposition 11.2 (First countability and a continuity contradiction).** Suppose $X$ is first-countable and $f:X\\to Y$ is sequentially continuous. Then $f$ is continuous, without any separation assumption on $Y$.

*Proof.* If continuity failed at $x$, some open neighbourhood $V$ of $f(x)$ would have inverse image containing no neighbourhood of $x$. Let $U_n$ be decreasing open local-base members at $x$, obtained by refining a countable neighbourhood base and taking finite intersections. For every $n$, choose $x_n\\in U_n$ with $f(x_n)\\notin V$. The local-base property gives $x_n\\to x$, but the image sequence is never in the fixed neighbourhood $V$, contradicting sequential continuity. ∎

This proof uses one neighbourhood of the image and successively finer neighbourhoods of the domain point. It does not require a metric on the target or uniqueness of limits there. A sequence argument should identify exactly which first-countability hypothesis makes the choice of one sequence adequate.

### Worked example 1: a concrete countable basis in the plane

In $\\mathbb R^2$ with Euclidean distance, use centers in $\\mathbb Q^2$ and positive rational radii. The center set is countable because a finite product of countable sets is countable. Every open disc about a point contains a nearby rational center and a small rational-radius disc containing the original point, by Proposition 11.1.

For a particular neighbourhood $B((\\sqrt2,\\pi),1)$, it is not necessary that either coordinate of its center be rational. The basis does not require the original center to belong to the indexing set; it requires some indexed disc to contain the point and fit inside the neighbourhood. This distinguishes a basis from a list of all open balls.

### Worked example 2: separability does not force a countable basis

On the Sorgenfrey line, the sets $[x,x+1/n)$ form a countable local base at each $x$, and $\\mathbb Q$ meets every nonempty basic interval, so the space is first-countable and separable. Nevertheless no countable basis exists.

Indeed, from any basis choose for each real $x$ a member $B_x$ with $x\\in B_x\\subseteq[x,x+1)$. If $x<y$, then $x\\in B_x$ but $x\\notin B_y$, since $B_y\\subseteq[y,y+1)$. Thus $B_x\\ne B_y$, producing uncountably many distinct basis members. This proves the failure of second countability directly. The metric implication separable $\\Rightarrow$ second-countable therefore also shows that the Sorgenfrey topology is not metrizable. Its Lindelof property and the square's counterexample are developed in [Canonical Counterexample Spaces](canonical-counterexample-spaces.md); they are separate assertions from the argument here.

### Worked example 3: a dense set cannot simply be intersected with a subspace

The rationals are countable and dense in $\\mathbb R$, but intersecting them with the subspace $A=\\mathbb R\\setminus\\mathbb Q$ gives the empty set. That intersection is not dense in the nonempty subspace. Therefore the proof that metric separability is hereditary cannot merely restrict a chosen dense set.

There is nevertheless an explicit countable dense subset of $A$: take $\\{q+\\sqrt2:q\\in\\mathbb Q\\}$. Every member is irrational. Translation preserves density in the real line, so this set meets every real open interval and consequently every nonempty relatively open subset of $A$. In the general metric proof, the restricted countable basis plays the same role: choose points anew from nonempty basis traces instead of assuming old representatives lie in the subspace.

These examples expose three different quantifier patterns. First countability chooses one countable family separately at every point. Second countability chooses one family for the whole topology. Separability chooses one set of points meeting every nonempty open set. Their similarity in familiar metric spaces should not erase those distinctions.

## Exercises with complete solutions

### TOP-CH11-E001 — Exercise 1
Prove every metric space is first-countable.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Think of a decreasing list of metric radii tending to zero.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Given an arbitrary neighbourhood, first put a positive-radius open ball inside it.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH11-E001 — Solution 1
At $x$, the balls $B_{1/n}(x)$ form a countable family. Any neighborhood contains an epsilon-ball, and some $1/n<\\varepsilon$ gives a listed ball inside it.


</details>

### TOP-CH11-E002 — Exercise 2
Prove second countability implies first countability.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Start with the global basis and focus on one point.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Keep precisely the basis members containing that point, and check neighbourhood refinement.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH11-E002 — Solution 2
For each $x$, the subfamily of the countable global basis containing $x$ is a countable local base.


</details>

### TOP-CH11-E003 — Exercise 3
Prove first countability makes closure sequential.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Turn the local base into a decreasing one.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Choose a point of the set from each decreasing neighbourhood and test eventual membership.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH11-E003 — Solution 3
Replace a countable local base by decreasing finite intersections $U_{n}$. For $x \\in \\operatorname{cl}(A)$, choose $a_{n} \\in A \\cap U_{n}$; every neighborhood contains some $U_{N}$, so the sequence is eventually inside it.


</details>

### TOP-CH11-E004 — Exercise 4
Prove sequential continuity from a first-countable domain implies continuity.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Argue by failure of continuity at one point.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use one fixed image neighbourhood and a decreasing domain base to construct a contradictory sequence.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH11-E004 — Solution 4
If continuity failed at $x$, choose from each shrinking base neighborhood a point whose image stays outside a fixed neighborhood of $f(x)$. The chosen sequence converges to $x$, but its image does not.


</details>

### TOP-CH11-E005 — Exercise 5
Prove second countability implies separability.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use one representative from each nonempty basis element.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Show that every nonempty open set must contain one of those representatives.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH11-E005 — Solution 5
Select one point from each nonempty basis member. Every nonempty open set contains a basis member and therefore a selected point, so the countable selected set is dense.


</details>

### TOP-CH11-E006 — Exercise 6
Prove a continuous image of a separable space is separable.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Apply the map to a countable dense set.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use inverse images of relatively open subsets of the image to test density.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH11-E006 — Solution 6
If $D$ is countable dense, $f(D)$ is countable and $f(X)=f(\\operatorname{cl}(D)) \\subseteq \\operatorname{cl}(f(D))$, so it is dense in the image.


</details>

### TOP-CH11-E007 — Exercise 7
Prove second countability implies Lindelofness.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

An open cover can be inspected through basis members lying inside its sets.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Select one cover label for every eligible basis member.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH11-E007 — Solution 7
For every basis element lying in some cover member, select one such member. The countable selections cover because each point has a basis neighborhood inside a cover member.


</details>

### TOP-CH11-E008 — Exercise 8
Prove a compact space is Lindelof.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compare the requested subcover size with the definition of compactness.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Remember that finite families qualify as countable.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH11-E008 — Solution 8
Every cover has a finite subcover, and every finite family is countable.


</details>

### TOP-CH11-E009 — Exercise 9
Prove closed subspaces of Lindelof spaces are Lindelof.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Turn the subspace cover into a cover of the ambient space.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use closedness to add one open complement, then discard that extra label.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH11-E009 — Solution 9
Extend a cover of closed $F$ by adding $X\\setminus F$. A countable subcover of $X$, after discarding the complement, countably covers $F$.


</details>

### TOP-CH11-E010 — Exercise 10
Prove continuous images preserve Lindelofness.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Pull the image cover back along the continuous map.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

After choosing domain labels, use surjectivity onto the image.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH11-E010 — Solution 10
Pull an open cover of the image back to the domain, take a countable subcover, then use surjectivity onto the image to push the corresponding labels forward.


</details>

### TOP-CH11-E011 — Exercise 11
Prove a separable metric space is second-countable.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use centres from the given countable dense set and rational radii.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Choose the center sufficiently close that a rational radius can include the point without leaving its original neighbourhood.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH11-E011 — Solution 11
For countable dense $D$, rational-radius balls centered at $D$ are countable. Given $x \\in U$, choose epsilon with $B_{\\varepsilon}(x) \\subseteq U$, a center $d$ close to $x$, and a rational radius placing $x$ in $B_{r}(d) \\subseteq U$.


</details>

### TOP-CH11-E012 — Exercise 12
Prove a Lindelof metric space is separable.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

For each reciprocal-integer radius, consider all balls of that radius.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Collect centres from countable subcovers over every scale and test a nonempty open ball.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH11-E012 — Solution 12
For each $n$, choose a countable subcover from all radius $1/n$ balls and collect their centers. Given nonempty open $U$, choose a point and a fine enough scale so a selected covering center lies inside $U$.


</details>

### TOP-CH11-E013 — Exercise 13
Show an uncountable discrete space is first-countable.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A discrete point has the smallest possible open neighbourhood.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

One local-base member is enough at each point.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH11-E013 — Solution 13
At each point the one-element family containing its singleton is a local base.


</details>

### TOP-CH11-E014 — Exercise 14
Show it is not separable.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Determine the closure of an arbitrary subset in a discrete topology.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A dense set must have closure equal to the whole space.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH11-E014 — Solution 14
Closure is identity in a discrete space, so a dense subset must be the whole uncountable space.


</details>

### TOP-CH11-E015 — Exercise 15
Show it is not Lindelof.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use the cover that isolates every point separately.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A countable selection covers only the corresponding countably many points.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH11-E015 — Solution 15
The cover by all singletons has no countable subcover because a countable union of those singletons misses points.


</details>

### TOP-CH11-E016 — Exercise 16
Prove second countability is hereditary.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Intersect basis members with the subspace.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Check the point-and-relative-open-set basis condition.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH11-E016 — Solution 16
If $B$ is a countable basis for $X$, then $\\{B \\cap A:B \\in B\\}$ is a countable basis for the subspace $A$.


</details>

### TOP-CH11-E017 — Exercise 17
Prove a countable product of second-countable spaces is second-countable.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Product-basic sets restrict only finitely many coordinates.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Count finite coordinate sets and finite lists of basis choices, then take a countable union.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH11-E017 — Solution 17
Basic cylinders use finite coordinate subsets and finitely many choices from countable bases. There are countably many finite subsets of $N$, and a countable union of finite products of countable sets is countable.


</details>

### TOP-CH11-E018 — Exercise 18
Show $\\mathbb{R}^I$ is not first-countable for uncountable $I$ in product topology.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Refine each proposed local-base member to a basic cylinder.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Find a coordinate omitted from the countable union of their finite restriction sets.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH11-E018 — Solution 18
Any countable proposed local basis at zero can be refined to basic cylinders whose restricted coordinate sets have countable union $J$. Choose $i \\notin J$. The neighborhood $\\pi_{i}^{-1}((-1,1))$ contains zero but contains none of those cylinders, since each leaves coordinate $i$ unrestricted.


</details>

### TOP-CH11-E019 — Exercise 19
Which implications fail for an uncountable discrete space?


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Combine the three preceding discrete-space conclusions.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Separate the local property from the three global ones.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH11-E019 — Solution 19
It is first-countable but not second-countable, separable, or Lindelof. Thus first countability implies none of those global properties.


</details>

### TOP-CH11-E020 — Exercise 20
Explain why the metric equivalence cannot be used to prove the Sorgenfrey line second-countable.


<details data-euler-reveal="hint">
<summary>Hint 1</summary>

The equivalence theorem concerns the topology induced by some metric.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A familiar metric on the underlying set need not induce the lower-limit topology.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH11-E020 — Solution 20
The Sorgenfrey topology is not generated by the ordinary Euclidean metric, and the theorem assumes the active topology is metrizable. Its separability and Lindelofness therefore do not license the metric converse.


</details>

## Sources

The existing chapter and all its legacy exercises are retained. The expanded arguments use the book's [Notation and Topology Conventions](front-matter/notation-and-topology-conventions.md); the complementary Sorgenfrey and ordinal constructions are proved in [Canonical Counterexample Spaces](canonical-counterexample-spaces.md). References for the existing results remain in the maintained [References and Attribution Guide](back-matter/references-and-attribution-guide.md). The worked examples and staged hints added here are original.

## Chapter checkpoint

First countability turns nets into sequences locally. Second countability supplies one global countable language and implies separability and Lindelofness. In metric spaces these global properties coincide; outside metric spaces the uncountable discrete space, Sorgenfrey line, long line, and uncountable products separate them.

The rational-ball proof makes the metric hypothesis visible, while the Sorgenfrey line separates local and global countability. When taking a subspace, restrict a basis and choose new representatives rather than blindly intersecting a previously chosen dense set.

## Transferred capstone 14 {#topology-transferred-e014}

Original question identity: [TOP-CH22-E014](../topology-proof-counterexample/topology-proof-atlas-and-capstones.md). The earlier capstone remains available with its own notes; the complete question, staged hints and solution also belong here.

Prove that the Sorgenfrey line is separable but not second countable.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use rational points in every nonempty half-open basic interval.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For each real x, any basis must supply a set containing x but confined to a right half-neighborhood of x.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

The half-open intervals $[a,b)$ form a basis for the Sorgenfrey line. Every nonempty such interval contains a rational, so $\\mathbb{Q}$ meets every nonempty open set and is dense; the space is separable. Suppose $B$ were a countable basis. For every real $x$, choose $B_{x} \\in B$ with $x \\in B_{x} \\subseteq [x,x+1)$. If $x<y$ and $B_{x}=B_{y}$, then $x \\in B_{y} \\subseteq [y,y+1)$, impossible. Thus the map $x \\mapsto B_{x}$ is injective from the uncountable reals into the countable set $B$, a contradiction. Hence the Sorgenfrey line is not second countable.

</details>
`;export{e as default};