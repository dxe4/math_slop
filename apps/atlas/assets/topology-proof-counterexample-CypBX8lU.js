var e=`---
id: book-topology-proof-counterexample
title: "Topology Through Proof and Counterexample"
level: advanced-undergraduate
estimated_minutes: 540
license: CC BY-SA 4.0
---

# Topology Through Proof and Counterexample

Topology is where quantifiers become visible. “Every cover has a finite subcover,” “each pair of points has disjoint neighborhoods,” and “there exists a basis element inside an intersection” are not slogans: changing one quantifier changes the space. This proof-oriented volume pairs each construction with the counterexample that limits it and connects point-set foundations to manifolds, homotopy, covering spaces, and modern function-space conventions.

Prerequisites are sets, functions, metric spaces, and a proof course. The [explorer encounter](#/item/deep-dive-shape-before-distance) supplies intuition; the [standard course](#/item/course-topology-manifolds-standard) connects the material to manifolds and homology.

## Current reading route and preparation

The main point-set route has twenty-two chapters. It requires a first proof course and metric-space analysis: use [Introduction to Proof](introduction-to-proof.md), [Metric Spaces, Open Sets, and Closed Sets](proof-safe-real-analysis/metric-spaces-open-and-closed.md), and [Sequences and Cauchy Control](proof-safe-real-analysis/sequences-cauchy-and-limsup.md) for the exact preparation. General topology is taught here.

After the first ten chapters, read Urysohn–Tietze extension, countability, metrization, uniform spaces, complete metric spaces and Baire category, function spaces, Arzela–Ascoli and Stone–Weierstrass, local compactness, paracompactness, manifolds and surfaces, optional compactly generated spaces, and canonical counterexamples. The historical homotopy, coverings, and capstone chapters remain registered retained readings with their original identities and mathematics.

The compactness chapter supplies full Heine–Borel and Tychonoff proofs, the latter explicitly assuming choice and Zorn's lemma. Deep surface classification and Euclidean invariance results are identified as imported where their complete proofs are not supplied.

## Full architecture

**Part I — Open sets and maps** develops topological spaces, bases and subbases, continuity, relative topology and embeddings, products, and quotient gluing.

**Part II — Convergence, size, and shape** replaces metric sequences with nets and filters, then studies compactness, connectedness, separation axioms, and countability properties with hypothesis-removal examples.

**Part III — Metric and functional structure** treats metrization, uniform spaces and completion, compact-open function spaces, local compactness and compactifications, paracompact refinements, and partitions of unity.

**Part IV — Geometric bridges** makes the prerequisites of topological manifolds explicit before an optional compactly generated continuation. Homotopy and covering-space lifting remain available as retained readings.

**Part V — Counterexamples and synthesis** organizes canonical pathological spaces by the implication they refute and ends with construction, comparison, and proof-audit capstones.

The main dependency spine is

$\\text{open-set axioms} \\to \\text{bases} \\to \\text{continuity} \\to \\text{subspaces, products, and quotients} \\to \\text{convergence} \\to \\text{compactness and separation} \\to \\text{metrization} \\to \\text{geometric constructions}$.

## Orientation atlas

The compact sections below provide a whole-book preview. Each states a mechanism and a boundary case; the tracked chapters expand these into local proofs, exercises, and investigations, while explicitly labeled orientation theorems remain imported.

## 1. Building and comparing topologies

A topology $T$ on $X$ is partially ordered by inclusion. If $T_{1}\\subseteq T_{2}$, then $T_{1}$ is **coarser** and $T_{2}$ is **finer**. For $f:(X,T_{X})\\to(Y,T_{Y})$, refining the domain can only make continuity easier: every inverse image that was open remains open. Refining the codomain can make continuity harder because it adds open sets whose inverse images must pass the test.

Given a family $S\\subseteq P(X)$, the topology it generates is the intersection of all topologies containing $S$. A **subbasis** description is constructive: take finite intersections of subbasic sets to make a basis, then arbitrary unions.

**Worked finite case.** Let $X=\\{a,b,c\\}$ and generate a topology from $S=\\{\\{a,b\\},\\{b,c\\}\\}$. Finite intersections add $\\{b\\}$, while unions add $X$; together with $\\varnothing$, the topology is

$\\{\\varnothing,\\{b\\},\\{a,b\\},\\{b,c\\},X\\}$.

Neither $\\{a\\}$ nor $\\{c\\}$ is open. Listing arbitrary unions verifies that no set is missing.

## 2. Interior, closure, boundary, and density

For $A\\subseteq X$, the interior $\\operatorname{int}(A)$ is the union of all open subsets contained in $A$. The closure $\\operatorname{cl}(A)$ is the intersection of all closed supersets of $A$. A point $x$ lies in $\\operatorname{cl}(A)$ exactly when every neighborhood of $x$ meets $A$. The boundary is

$\\partial A = \\operatorname{cl}(A) \\cap \\operatorname{cl}(X\\setminus A) = \\operatorname{cl}(A) \\setminus \\operatorname{int}(A)$.

The derived set $A'$ contains those points $x$ for which every neighborhood of $x$ meets $A\\setminus \\{x\\}$. With this definition,

$\\operatorname{cl}(A)=A\\cup A'$

in every topological space; no separation axiom is needed. Other texts sometimes use “limit point” to mean that every neighborhood contains infinitely many points of $A$, and that different convention does require additional hypotheses before it agrees with this one.

A subset is dense when its closure is all of $X$. The rationals are dense in $\\mathbb{R}$ because every nonempty open interval contains a rational. They are not open and not closed. Dense means “touches every nonempty open set,” not “contains almost every point” in a measure-theoretic sense.

**Counterexample discipline.** In the discrete topology, $\\operatorname{cl}(A)=A$ for every set. In the indiscrete topology on a nonempty $X$, every nonempty subset is dense. Closure depends on the topology, not just the underlying set.

## 3. Continuity in equivalent forms

For $f:X\\to Y$, the following are equivalent:

1. inverse images of open sets are open;
2. inverse images of closed sets are closed;
3. $f(\\operatorname{cl}(A))\\subseteq \\operatorname{cl}(f(A))$ for every $A\\subseteq X$;
4. for every $x$ and every neighborhood $V$ of $f(x)$, some neighborhood $U$ of $x$ satisfies $f(U)\\subseteq V$.

For (1) to (3), if $C$ is closed and contains $f(A)$, then $f^{-1}(C)$ is closed and contains $A$, so it contains $\\operatorname{cl}(A)$; hence $f(\\operatorname{cl}(A))\\subseteq C$. Intersect over all such $C$.

The inclusion can be strict. For $f:\\mathbb{R}\\to \\mathbb{R}$, $f(x)=\\arctan x$, take $A=\\mathbb{R}$. Then $f(\\operatorname{cl}(A))=(-\\pi/2,\\pi/2)$ while $\\operatorname{cl}(f(A))=[-\\pi/2,\\pi/2]$.

A continuous bijection need not be a homeomorphism. The identity from a discrete set with at least two points to the same set with the indiscrete topology is continuous and bijective, but its inverse is not continuous. Compact-to-Hausdorff supplies a powerful sufficient condition.

## 4. Initial and final constructions

The subspace and product topologies are **initial**: they are the coarsest topologies making specified maps into other spaces continuous. The quotient topology is **final**: it is the finest topology making the quotient map continuous.

For a product $\\prod_i X_{i}$, basis elements restrict only finitely many coordinates. The box topology instead allows every coordinate to be restricted at once. On a finite product the two agree; on $\\mathbb{R}^{\\mathbb{N}}$ they differ. The sequence of points $x^{m}=(1/m,1/m,\\ldots)$ converges to zero in the product topology, but it fails to enter the box neighborhood $\\prod_{n}(-1/n,1/n)$ for every $m$: a coordinate with $n>m$ would require $1/m<1/n$. Thus it does not converge in the box topology.

Quotients can destroy separation. Collapse the open interval $(0,1)$ within $\\mathbb{R}$ to one point while leaving all other points separate. The singleton consisting of the collapsed point is not closed in the quotient: its inverse image $(0,1)$ is not closed in $\\mathbb{R}$, whereas closed subsets of a quotient have closed inverse image under the quotient map. Thus the quotient is not even $T_{1}$, and hence is not Hausdorff. General warning: a quotient of a Hausdorff space need not be Hausdorff. By contrast, collapsing a suitably well-behaved closed subset can preserve Hausdorffness, so “a set was collapsed” alone proves nothing.

## 5. Connectedness and local connectedness

A separation of $X$ is a pair of disjoint nonempty open sets whose union is $X$. Equivalently, $X$ has no nontrivial subset that is both open and closed. The continuous-image proof is reusable: pull a proposed separation backward.

The closure of a connected subset is connected. Suppose $\\operatorname{cl}(A)$ had a separation. The connected set $A$ must lie entirely in one piece; density of $A$ in $\\operatorname{cl}(A)$ forces the other relatively open piece to meet $A$, a contradiction.

The **topologist’s sine curve** is the closure in $\\mathbb{R}^{2}$ of $\\{(x,\\sin(1/x)):x>0\\}$. It is connected as the closure of a connected graph but is not path-connected: its vertical limiting segment cannot be joined by a path to the oscillating graph. This separates connectedness from path-connectedness.

Local connectedness asks for a neighborhood basis of connected sets; local path-connectedness asks for path-connected ones. In locally path-connected spaces, components of open sets are open, and connected open sets are path-connected. Those local hypotheses are central in covering-space theory.

## 6. Compactness and its relatives

Compactness is an open-cover property. In an arbitrary topological space it is not equivalent to sequential compactness. In metric spaces the equivalence holds, via total boundedness and completeness or a nested-ball argument.

**Lemma 1 (Tube).** If $Y$ is compact and an open $N\\subseteq X\\times Y$ contains $\\{x_{0}\\}\\times Y$, then some neighborhood $W$ of $x_{0}$ satisfies $W\\times Y\\subseteq N$. For every $y$, select a basic rectangle $U_{y}\\times V_{y}\\subseteq N$ around $(x_{0},y)$. Finitely many $V_{y}$ cover $Y$; intersect the corresponding finitely many $U_{y}$ to obtain $W$. The finiteness is exactly where compactness enters.

The tube lemma proves a finite product of compact spaces is compact. The arbitrary-product theorem is much deeper. Do not extrapolate a finite induction across infinitely many factors.

**Metric boundary case.** A closed bounded set in an infinite-dimensional normed space need not be compact. In $\\ell^{2}$, the standard unit vectors all lie in the closed unit ball and remain distance $\\sqrt{2}$ apart, so no subsequence converges. Heine–Borel is a finite-dimensional theorem.

Local compactness has several definitions outside Hausdorff spaces. In a Hausdorff space it usually means every point has a neighborhood with compact closure. The one-point compactification of a noncompact locally compact Hausdorff space is Hausdorff; omit local compactness and Hausdorffness can fail.

## 7. Separation axioms and countability

The hierarchy needs names because different theorems stop at different rungs:

- $T_{0}$: distinct points are topologically distinguishable;
- $T_{1}$: singletons are closed;
- Hausdorff ($T_{2}$): distinct points have disjoint neighborhoods;
- regular: points and disjoint closed sets can be separated; this book does not build $T_{1}$ into the word;
- normal: disjoint closed sets can be separated; this book again keeps $T_{1}$ separate.

Metric spaces are normal. If $A,B$ are nonempty disjoint closed sets, the function

$f(x)=d(x,A)/(d(x,A)+d(x,B))$

is continuous and takes values $0$ on $A$ and $1$ on $B$; denominators are positive because no point lies in both closed sets. This gives disjoint inverse-image neighborhoods. If either closed set is empty, separation is immediate and no distance-to-empty-set convention is needed.

First countability supplies a countable local basis at each point. Second countability supplies one countable basis for the entire space. Second countable implies first countable and separable. In metric spaces separable implies second countable: take rational-radius balls centered at a countable dense set. These reverse implications fail in general spaces.

The long line is locally like $\\mathbb{R}$ and Hausdorff but not second-countable. This is why second countability appears in the standard definition of a manifold: it prevents locally Euclidean objects too large for ordinary analysis.

## 8. Metrization and completion boundaries

Not every topology arises from a metric. Every metric space is Hausdorff and first-countable, so failure of either property obstructs metrizability. Urysohn’s metrization theorem states that every regular second-countable $T_{1}$ space is metrizable. Each hypothesis participates; the proof builds countably many continuous functions that separate points and closed sets.

Completeness is not a topological invariant of a particular metric: $(0,1)$ with the Euclidean metric is incomplete but is homeomorphic to $\\mathbb{R}$, which has a complete Euclidean metric. Complete metrizability—the existence of some compatible complete metric—is topological. Compact metrizable spaces are completely metrizable.

The completion of a metric space is unique up to an isometry fixing a dense copy of the original. This is a metric universal property, not simply a topological closure in an unspecified larger space.

## 9. Function spaces and uniformity

Pointwise convergence of functions is convergence in the product topology on $Y^X$. Uniform convergence uses a stronger structure, often the sup metric when functions are bounded. The sequence $f_{n}(x)=x^n$ on $[0,1]$ converges pointwise to a discontinuous limit ($0$ on $[0,1)$ and $1$ at $1$), so convergence is not uniform. Uniform limits of continuous maps into a metric space are continuous.

Compact-open topology uses subbasic sets $[K,U]=\\{f:f(K)\\subseteq U\\}$ for compact $K\\subseteq X$ and open $U\\subseteq Y$. Under suitable local compactness hypotheses it makes evaluation and adjunction behave well. Naming the topology on a function space is essential; “the maps converge” is incomplete without it.

## 10. Proof laboratory

### Problem A — Closure and products

Prove $\\operatorname{cl}(A\\times B)=\\operatorname{cl}(A)\\times \\operatorname{cl}(B)$ in $X\\times Y$.

**Solution.** A point $(x,y)$ lies in $\\operatorname{cl}(A\\times B)$ exactly when every basic neighborhood $U\\times V$ meets $A\\times B$, equivalent to both $U\\cap A$ and $V\\cap B$ being nonempty. This holds for every $U,V$ exactly when $x\\in \\operatorname{cl}(A)$ and $y\\in \\operatorname{cl}(B)$. Empty-set cases obey the same equivalence.

### Problem B — Compact image and closed graph

Let $X$ be compact, $Y$ Hausdorff, and $f:X\\to Y$ continuous. Prove its graph is compact and closed in $X\\times Y$.

**Solution.** The map $x\\mapsto(x,f(x))$ is continuous, so its image—the graph—is compact. To prove it closed, take $(x,y)$ outside the graph, so $y\\ne f(x)$. Hausdorffness of $Y$ gives disjoint open neighborhoods $V$ of $f(x)$ and $W$ of $y$. Then $f^{-1}(V)\\times W$ is an open neighborhood of $(x,y)$ disjoint from the graph. Every exterior point has such a neighborhood, so the graph is closed. This direct argument does not require $X$ to be Hausdorff; compactness supplied the separate compactness conclusion.

### Problem C — A finite topology

On $X=\\{0,1,2\\}$, use $T=\\{\\varnothing,\\{0\\},\\{0,1\\},X\\}$. Find closures of all singletons and decide $T_{0}$, $T_{1}$, Hausdorff.

**Solution.** Closed sets are $X,\\{1,2\\},\\{2\\},\\varnothing$. Thus $\\operatorname{cl}(\\{0\\})=X$, $\\operatorname{cl}(\\{1\\})=\\{1,2\\}$, and $\\operatorname{cl}(\\{2\\})=\\{2\\}$. Distinct points have distinct neighborhood behavior, so the space is $T_{0}$. Singleton $\\{0\\}$ is not closed, so it is not $T_{1}$, hence not Hausdorff.

### Problem D — Why Hausdorff matters

Find a compact subset that is not closed.

**Solution.** In an indiscrete space with at least two points every subset is compact: any cover of a nonempty subset must contain the only nonempty open set $X$, giving a one-set subcover. A proper nonempty subset is not closed because its complement is a proper nonempty set and therefore not open. This directly locates the missing Hausdorff hypothesis.

## Continuation

Proceed to [Chains, Spaces, and Invariants](#/item/book-algebraic-topology-chains-spaces) when quotient constructions and compactness arguments are comfortable. For smooth geometry, take the manifold half of the [standard course](#/item/course-topology-manifolds-standard). Keep a counterexample ledger: for every theorem, record which conclusion can fail when each material hypothesis is removed.
`;export{e as default};