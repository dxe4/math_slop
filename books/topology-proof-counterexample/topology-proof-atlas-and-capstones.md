
# Topology Proof Atlas and Construction Capstones

The twenty original questions, solutions and project below remain available with their original identities. Each question now links to its current chapter home with the same full mathematical support. The complete [proof-and-construction dossier](canonical-counterexample-spaces.md#topology-current-dossier) and a worked circle model are also integrated in Canonical Counterexample Spaces.

Topology becomes usable when definitions, proof mechanisms, constructions, and counterexamples form one system. A theorem is not a slogan such as “compact spaces behave like finite spaces.” It is a map from named hypotheses to a conclusion, mediated by a proof whose critical moves can be identified. A construction is not just a familiar picture of gluing or compactifying. It consists of an underlying set, a declared topology, canonical maps, a universal property, and a list of properties that do or do not survive.

This chapter is an atlas for navigating that system. It collects the most reusable theorem dependencies, isolates recurring proof mechanisms, and organizes counterexamples by the hypothesis they remove. It then gives a protocol for auditing products, subspaces, quotients, compactifications, completions, mapping spaces, and covering constructions. The closing capstone asks for one complete topological dossier in which every positive claim is proved and every boundary claim is witnessed.

The governing discipline is simple:

> State the ambient category, type every map, name every hypothesis at the line where it is used, and test the nearest false statement.

A diagram may help discovery, but the text alternative must list the same objects, arrows, and logical dependencies. A picture of a quotient is not a proof that its proposed map is well defined. A sequence is not a universal convergence test unless the space is known to have the relevant countability property. A continuous bijection is not automatically a homeomorphism. These are not technical cautions appended to topology; they are its working method.

## 1. How to read the atlas

Write a theorem in the form

$H_{1}+H_{2}+\cdots+H_{r}\xrightarrow{\text{mechanism}} C$.

The hypotheses include ambient assumptions that are often suppressed: Hausdorffness, local compactness, first or second countability, compact generation, a specified base point, or a statement that a map is surjective. The mechanism is the finite-subcover argument, net extraction, quotient universal property, separation construction, or lifting argument that actually produces the conclusion. The conclusion must retain its quantifiers.

There are four distinct dependency relations.

- A **definitional dependency** supplies the language: an embedding is a homeomorphism onto its image with the subspace topology.
- A **logical dependency** is a previously proved result invoked in a proof: compact subsets of a Hausdorff space are closed.
- A **construction dependency** guarantees an object exists and has the claimed topology: the quotient topology makes a surjection a quotient map.
- A **category dependency** says where a universal property is asserted: the raw compact-open topology and its k-ification need not play the same categorical role.

An atlas entry is complete only when these types are separated. Circular reasoning often hides by treating a construction dependency as if it were a definition or by using the desired theorem to verify its own hypotheses.

## 2. The theorem dependency atlas

The following table is a text-readable dependency graph. Each row names a destination theorem, its incoming hypotheses, the central proof move, and a boundary witness. “Earlier input” means a result that must already be available; it is not an extra hypothesis on the objects.

| Destination | Object hypotheses | Earlier input | Central mechanism | Boundary witness |
|---|---|---|---|---|
| continuity from basis preimages | a basis $B$ for the codomain | basis representation of open sets | preimages commute with unions | testing an arbitrary cover that is not a basis |
| product mapping test | map $f:Z\to\prod_i X_{i}$ | initial topology of the product | test every coordinate $\pi_{i} f$ | box topology for an infinite product |
| quotient factorization | quotient map $q:X\to Y$; continuous $f:X\to Z$ constant on fibers | quotient topology | define $g([x])=f(x)$ and test via $gq=f$ | omit fiber constancy |
| compact image theorem | compact $K$; continuous $f:K\to Y$ | pull back an open cover | finite subcover | remove compactness |
| compact-to-Hausdorff criterion | compact domain, Hausdorff codomain, continuous bijection | compact images and closedness | show the map is closed | identity from discrete to indiscrete two-point space |
| finite-intersection characterization | compact space | complements exchange covers and closed families | De Morgan plus finite subcover | a nested closed family in a noncompact space |
| net characterization of closure | arbitrary topological space | directed neighborhood set | choose one point in each neighborhood | sequences in a non-first-countable space |
| Tychonoff product compactness | compact factors | AC for arbitrary compact factors; ultrafilter lemma suffices for compact Hausdorff factors | coordinate convergence plus product test; select coordinate limits, uniquely determined in the Hausdorff case | box topology on infinitely many factors |
| connected image theorem | connected domain, continuous map | separation pulls back | inverse images create a separation | discontinuous image map |
| path components refine components | paths have connected images | connectedness of $[0,1]$ | union connected sets meeting at a point | topologist's sine curve for converse |
| compact subset closed | compact subset of a Hausdorff space | finite separation of a compact set from a point | choose neighborhoods pointwise, then finite subcover | compact subsets in a non-Hausdorff space |
| Urysohn-type separation | normal space, disjoint closed sets | nested open-set construction | encode nested closures by rational levels | a nonnormal Hausdorff space |
| second countable implies Lindelof | countable base | select one cover member per useful basis element | countable bookkeeping | uncountable discrete space |
| second countable implies separable | countable base | choose a point from each nonempty basic open | dense choice set | no converse without added hypotheses |
| metric compactness equivalences | metric space | countable scales and completeness | finite epsilon-nets plus diagonal/Cauchy control | total boundedness without completeness |
| compact-open evaluation theorem | locally compact Hausdorff source, compact-open mapping topology | tube-style compact-neighborhood argument | control maps on one compact neighborhood | omit local compactness in raw $Top$ |
| one-point compactification | noncompact locally compact Hausdorff $X$ | compact neighborhoods and Hausdorff separation | neighborhoods of infinity are complements of compact closed sets | omit local compactness or Hausdorffness |
| metrization by countable functions | regularity plus countable control | separating continuous functions or locally finite refinements | assemble bounded pseudometrics | countability or separation failure |
| covering path lifting | covering map and initial lift point | evenly covered neighborhoods | subdivide the compact interval finitely | map lacking local sheet structure |
| homotopy lifting | covering map and lifted initial slice | local lifts plus uniqueness | extend across small rectangles and glue | quotient maps in general |
| exponential law in a convenient category | compactly generated setting with declared mapping spaces | k-ified product and compact-open topology | curry/uncurry and compact probes | use raw products and raw mapping spaces silently |

The table is not a list of interchangeable recipes. For example, finite subcovers occur in both compact-image proofs and path lifting, but they solve different problems. In the first they reduce infinitely many cover elements to finitely many. In the second they turn local lift data along an interval into finitely many compatible stages. The proof must say which role compactness plays. For the Tychonoff row, work over ZF: the general compact-factor theorem is equivalent to AC, whereas the ultrafilter lemma suffices when every factor is compact Hausdorff. In the ultrafilter proof, each coordinate ultrafilter has a nonempty limit set; Hausdorffness makes that set a singleton, so its limit is uniquely determined instead of requiring an arbitrary selection. These implications are imported here; see [the full filter proof](https://pi.math.cornell.edu/~zbnorwood/ucla/files/tychultrafilters.pdf) and [the converse proof](https://pi.math.cornell.edu/~zbnorwood/ucla/files/tychonoffimpliesac.pdf). This online dependency clarification leaves the retained draft PDF unchanged.

### Dependency chains worth memorizing

Several chains recur throughout the subject.

**Compact-Hausdorff chain.** If $X$ is compact, $Y$ is Hausdorff, and $f:X\to Y$ is a continuous bijection, then a closed $A \subseteq X$ is compact; $f(A)$ is compact; compact subsets of $Y$ are closed; hence $f$ is closed; therefore $f^{-1}$ is continuous. Every arrow has a different hypothesis. Compactness of $X$ enters at the first arrow, continuity at the second, Hausdorffness of $Y$ at the third, and bijectivity when the inverse is discussed.

**Metric compactness chain.** Total boundedness lets one cover the space by finitely many balls at scale $2^{-n}$. Repeatedly selecting an infinite subfamily inside one ball produces a Cauchy subsequence. Completeness puts its limit inside the space. Thus complete plus totally bounded implies sequentially compact. In metric spaces, sequential compactness yields open-cover compactness by a Lebesgue-number or contradiction argument. Removing total boundedness leaves bounded-looking sequences that remain separated; removing completeness lets Cauchy sequences escape.

**Quotient chain.** Start with a surjection $q:X\to Y$ and put the quotient topology on $Y$. A set $U \subseteq Y$ is open exactly when $q^{-1}(U)$ is open. If $f:X\to Z$ is constant on fibers, the set function $g:Y\to Z$ defined by $g(q(x))=f(x)$ is well defined. Since $(gq)^{-1}(V)=q^{-1}(g^{-1}(V))$ and $gq=f$, the quotient test converts continuity of $f$ into continuity of $g$. Surjectivity provides uniqueness.

**Compactification chain.** Local compactness supplies, near each $x \in X$, an open set whose closure is compact. In the one-point compactification, this compact closure can be kept away from infinity, separating $x$ from the new point. Hausdorffness also ensures compact subsets of $X$ are closed, so complements of compact sets form valid neighborhoods at infinity. The result is compact and Hausdorff. Both hypotheses have identifiable jobs.

**Covering chain.** An evenly covered neighborhood gives a local inverse on each sheet. The compact image of a path is controlled by finitely many such neighborhoods after subdivision. Adjacent local lifts agree at their common endpoint, and uniqueness propagates agreement. Loops then act on fibers, and lifting behavior becomes an invariant of homotopy classes once homotopy lifting has been proved.

## 3. The proof-mechanism atlas

### 3.1 Pull back structure

Continuity is designed so that open structure can be pulled backward. To show the continuous image of a connected space is connected, assume the image has a separation $U \cup V$; then $f^{-1}(U)$ and $f^{-1}(V)$ separate the domain after empty pieces are excluded using surjectivity onto the image. To prove compact images are compact, pull an open cover of the image back to the domain, choose finitely many members there, and push only the index set—not the open sets—forward.

The common error is to push open sets forward. A continuous map need not be open or closed. Inverse images, not images, are what continuity controls without further assumptions.

### 3.2 Refine locally, then make the control finite

Compactness converts pointwise or local choices into finite data. To separate a point $y$ from compact $K$ in a Hausdorff space, choose for every $x \in K$ disjoint neighborhoods $U_{x}$ of $x$ and $V_{x}$ of $y$. Compactness chooses $x_{1},...,x_{n}$ with $K \subseteq \cup U_{x_{i}}$. Then $\cup U_{x_{i}}$ and $\cap V_{x_{i}}$ are disjoint neighborhoods of $K$ and $y$.

This union/intersection asymmetry matters. Intersecting the $U_{x}$ need not contain all of $K$; unioning the $V_{x}$ can destroy disjointness. A finite choice is what makes the intersection around $y$ open.

### 3.3 Direct a family of approximations

Sequences index approximation by the natural numbers. Nets allow the indices to be neighborhoods, finite subsets, finite portions of a cover, or several accuracy demands at once. If $x$ lies in $\operatorname{cl}(A)$, direct the neighborhoods of $x$ by reverse inclusion and choose $a_{U} \in A \cap U$. The net converges to $x$. Conversely, a net in $A$ converging to $x$ must eventually enter every neighborhood, so every neighborhood meets $A$.

The mechanism is not “nets are longer sequences.” It is that a directed order records finitely many simultaneous demands. When a proof requires satisfying an arbitrary finite list of coordinates or neighborhoods, a directed set is often the natural index.

### 3.4 Pass to a subnet, then use uniqueness

Compactness often supplies a convergent subnet rather than a limit of the original net. If every convergent subnet has the same limit and some additional compactness argument says nonconvergence would create a subnet avoiding a neighborhood, then the whole net converges. Hausdorffness supplies uniqueness of limits, but uniqueness alone never creates a limit.

Keep the two jobs separate:

- compactness or completeness gives existence;
- Hausdorffness or a contraction estimate gives uniqueness.

### 3.5 Build with an initial or final topology

An **initial topology** on $X$ generated by maps $f_{i}:X\to Y_{i}$ is the coarsest topology making every $f_{i}$ continuous. A map $g:Z\to X$ is continuous exactly when every $f_{i} g$ is continuous. Products and subspace topologies are initial constructions.

A **final topology** on $Y$ generated by maps $q_{i}:X_{i}\to Y$ is the finest topology making every $q_{i}$ continuous. A map $h:Y\to Z$ is continuous exactly when every $h q_{i}$ is continuous. Quotients and disjoint unions are final constructions.

The direction of the test is a reliable memory device. For an initial topology, test maps **into** the constructed space by composing forward with its structure maps. For a final topology, test maps **out of** the constructed space by composing backward with its structure maps.

### 3.6 Separate by neighborhoods or by functions

Separation proofs either construct open neighborhoods directly or construct a continuous function with prescribed values. Hausdorffness separates two points. Regularity separates a point and a closed set. Normality separates two closed sets. Function separation is stronger data: a continuous $u:X\to[0,1]$ with $u(A)=0$ and $u(B)=1$ automatically gives disjoint neighborhoods by inverse images of disjoint intervals.

The usual nested-closure construction consumes normality repeatedly. If a theorem assumes only Hausdorffness, importing such a function without proof silently strengthens the hypotheses.

### 3.7 Glue local data

Suppose $X=\cup U_{i}$ and maps $f_{i}:U_{i}\to Y$ agree on overlaps. If the $U_{i}$ are open, the set function $f:X\to Y$ obtained by gluing is continuous because

$f^{-1}(V)=\bigcup_{i} f_{i}^{-1}(V)$

is open. Closed gluing works for a finite closed cover because a finite union of closed inverse-image pieces is closed; it can fail for an infinite closed cover.

Uniqueness of a glued map is set-theoretic once the pieces cover. Existence requires overlap agreement. Continuity requires the cover condition. Those are three different proof obligations.

### 3.8 Replace the object while preserving probes

Completion, compactification, and k-ification modify an object while preserving selected observations.

- Completion preserves the original metric distances and makes Cauchy processes converge.
- Compactification embeds the original space densely in a compact one.
- k-ification preserves maps from compact Hausdorff probes while possibly refining the topology.

No replacement is harmless in every category. State the comparison map, prove the preservation claim, and record what changes. A completion is unique up to the unique isometry fixing the dense subspace, not by literal equality of point sets. A compactification depends on the category and on the embedding, not only on the remainder set.

## 4. Hypothesis-removal counterexample atlas

A counterexample certificate has five fields:

1. the proposed implication;
2. the retained hypotheses;
3. the deleted hypothesis;
4. verification that the witness has the retained hypotheses;
5. a calculation or open-set argument proving the conclusion fails.

The following witnesses should be known as mechanisms, not merely names.

### 4.1 Compact need not mean closed without Hausdorffness

Let $X=\{0,1\}$ have the indiscrete topology. Every finite space is compact, so $\{0\}$ is compact. It is not closed because its complement $\{1\}$ is not open. Thus the implication “compact subset implies closed” uses Hausdorffness of the ambient space.

The same space shows limits need not be unique: every net converges to both points because the only neighborhood of either point is $X$.

### 4.2 A continuous bijection need not be a homeomorphism

Let $X=\{0,1\}$ be discrete and $Y=\{0,1\}$ indiscrete. The identity set map $f:X\to Y$ is continuous and bijective, but its inverse is not continuous because $\{0\}$ is open in $X$ and not in $Y$. Compactness of the domain alone is present; Hausdorffness of the codomain is absent. Alternatively, continuous bijectivity alone gives no control on images of open or closed sets.

### 4.3 First countability is sufficient for sequence-only closure tests

In the ordinal space $[0,\omega_{1}]$ with its order topology, $\omega_{1}$ lies in the closure of $[0,\omega_{1})$: every basic neighborhood of $\omega_{1}$ contains a final interval and therefore contains countable ordinals. But every sequence of countable ordinals has a countable supremum below $\omega_{1}$. The neighborhood above that supremum contains $\omega_{1}$ and no terms of the sequence, so no sequence from $[0,\omega_{1})$ converges to $\omega_{1}$.

Nets do detect this closure point: direct the countable ordinals by their usual order, and the identity net converges to $\omega_{1}$.

### 4.4 Product and box topology diverge in infinite dimension

In $\mathbb{R}^{\mathbb{N}}$, let $e_{n}$ have value one in coordinate $n$ and zero elsewhere. In the product topology, $e_{n}\to 0$ because every fixed coordinate is eventually zero. In the box topology, the neighborhood $\prod_{k} (-1/2,1/2)$ of zero contains no $e_{n}$, so convergence fails. Coordinatewise convergence characterizes product convergence, not box convergence.

### 4.5 Connected need not mean path connected

Let

$S=\{(x,\sin(1/x)):0<x\le 1\} \cup (\{0\} \times [-1,1])$.

The graph part is connected as the continuous image of $(0,1]$, and $S$ is its closure, so $S$ is connected. There is no path in $S$ from a point on the vertical segment to a point on the graph. Any proposed path would force the first coordinate to leave zero while the second coordinate tracks infinitely rapid oscillations; a continuity argument using successive levels of $\sin(1/x)$ yields a contradiction. Thus path connectedness is strictly stronger.

### 4.6 Product projections need a compact-factor hypothesis

Projection $\pi_{1}:\mathbb{R}^{2}\to \mathbb{R}$ has closed fibers, each homeomorphic to $\mathbb{R}$, but it need not carry closed sets to closed sets: the hyperbola $F=\{(x,y):xy=1\}$ is closed, while $\pi_{1}(F)=\mathbb{R}\setminus \{0\}$ is not closed. Compactness of the omitted factor is what makes projection from $X \times K$ closed when $K$ is compact.

### 4.7 Total boundedness without completeness does not give compactness

The metric subspace $\mathbb{Q} \cap [0,1]$ is totally bounded because the same finite epsilon-nets used for $[0,1]$ can be approximated by rationals. It is not complete: rational sequences can converge in $\mathbb{R}$ to an irrational point. Hence it is not compact. Completion is the missing mechanism that keeps Cauchy limits inside.

### 4.8 Completeness without total boundedness does not give compactness

An infinite set with the discrete metric $d(x,y)=1$ for $x\ne y$ is complete: every Cauchy sequence is eventually constant. It is not totally bounded, since balls of radius $1/2$ are singletons and no finite collection covers the space. The singleton cover has no finite subcover, so the space is not compact.

### 4.9 Separability need not imply second countability

The Sorgenfrey line has basis intervals $[a,b)$. The rationals are dense because every nonempty basic interval contains a rational, so the space is separable. It is not second countable. If $B$ were a countable basis, choose for each real $x$ a basis element $B_{x}$ with $x \in B_{x} \subseteq [x,x+1)$. If $x<y$, then $B_{x}$ cannot equal $B_{y}$, because $B_{y} \subseteq [y,y+1)$ while $x$ belongs to $B_{x}$. This injects the uncountable reals into $B$, a contradiction.

### 4.10 Lindelof need not be compact

The real line with its usual topology is second countable and hence Lindelof. It is not compact: the cover $\{(-n,n):n\ge 1\}$ has no finite subcover. Lindelof gives a countable subcover, not a finite one.

### 4.11 A quotient can destroy Hausdorffness

Take $X=\mathbb{R} \times \{0,1\}$ and identify $(x,0)$ with $(x,1)$ for every $x\ne 0$, leaving the two origins distinct. The quotient is the line with two origins. Any neighborhoods of the two origins have images meeting through points with nonzero first coordinate, so the quotient is not Hausdorff, although $X$ is Hausdorff.

### 4.12 Local compactness conventions cannot be suppressed

The line with two origins is locally Euclidean and locally compact but non-Hausdorff. It warns that “locally compact” has competing conventions: some authors include Hausdorffness and some do not. A compactification theorem must state which convention it uses. Under the convention “every point has a compact neighborhood,” the example qualifies; under “locally compact Hausdorff,” it does not.

### 4.13 Pointwise limits do not preserve continuity

On $[0,1]$, $f_{n}(x)=x^n$ is continuous and converges pointwise to the function that is zero on $[0,1)$ and one at $1$. The limit is discontinuous. Uniform convergence would preserve continuity. This analytical example belongs in a topology atlas because function-space topologies encode exactly which family-level control is present.

### 4.14 Homotopy equivalence need not mean homeomorphism

The interval $[0,1]$ and a one-point space are homotopy equivalent because the interval contracts to a point. They are not homeomorphic: deleting the interior point $1/2$ disconnects the interval, whereas deleting the only point from a singleton leaves the empty space rather than two nonempty components. Homotopy preserves homotopy invariants, not point-set structure.

## 5. Map audits

Every important map should carry a six-line certificate.

### 5.1 The map certificate

For $f:X\to Y$, record:

- **formula and types:** what are $X$, $Y$, and $f(x)$?
- **well-definedness:** does the formula land in $Y$, and is it independent of representatives?
- **continuity test:** open preimages, closed preimages, basis elements, coordinates, or a universal property?
- **set behavior:** injective, surjective, bijective, or neither?
- **topological strength:** open, closed, quotient, embedding, local homeomorphism, covering map, or homeomorphism?
- **preserved invariant:** which property is being transported, and under which hypotheses?

These labels are not nested automatically. An embedding is injective and continuous, but an injective continuous map need not be an embedding. A quotient map is surjective and continuous by the usual definition, but a surjective continuous map need not be quotient. A covering map is a local homeomorphism with an evenly covered condition, not merely a surjective local homeomorphism under every convention.

### 5.2 Representative audit for quotient-defined maps

Suppose $q:X\to X/{\sim}$ and a formula proposes $g([x])$. Before continuity, prove

$x\sim x' \implies g([x])=g([x'])$.

Only then does a set map exist. To prove continuity, it is usually enough to show $gq$ is continuous, because $q$ is quotient. To prove $g$ is a homeomorphism, a continuous bijection is still insufficient unless one adds a compact-Hausdorff argument, proves openness or closedness, or constructs a continuous inverse.

For example, the map $\mathbb{R}/\mathbb{Z} \to S^{1}$, $[t] \mapsto \exp(2 \pi i t)$, is well defined because integer shifts do not change the exponential. Its composite with $q:\mathbb{R}\to \mathbb{R}/\mathbb{Z}$ is continuous, so the quotient test gives continuity. It is bijective. The domain is compact as a continuous image of $[0,1]$, and $S^{1}$ is Hausdorff, so the compact-to-Hausdorff criterion proves it is a homeomorphism.

### 5.3 Embedding audit

To prove $f:X\to Y$ is an embedding:

1. prove injectivity;
2. prove continuity;
3. give $f(X)$ the subspace topology;
4. prove the inverse $f(X)\to X$ is continuous.

The last step can be replaced by proving $f$ is open onto its image or closed onto its image. The phrase “has no self-intersections” addresses only injectivity and often only pictorially.

### 5.4 Homotopy and lifting audit

A homotopy has type $H:X \times I\to Y$ and endpoint equations $H(x,0)=f(x)$, $H(x,1)=g(x)$. A based homotopy also fixes the base point throughout. When using a covering $p:E\to B$, a lift $\widetilde{H}$ must satisfy $p \widetilde{H}=H$ and match prescribed initial data. Existence and uniqueness are separate theorem outputs.

For loop lifting, record whether the lift ends where it began. A loop in the base can lift to a path with different endpoints. That endpoint records monodromy; silently calling the lift a loop destroys the information the construction was meant to capture.

## 6. Construction audits

### 6.1 Subspace

Given $A \subseteq X$, the topology is $\{A \cap U:U\subseteq X\text{ open}\}$. The inclusion $i:A\to X$ is an embedding and the topology is initial for $i$. Closedness, compactness, local compactness, connectedness, and countability properties have different inheritance rules; none should be transferred merely because the point set is contained in $X$.

Audit question: is a neighborhood in $A$ being mistaken for an open subset of $X$? It need only be the intersection of one with $A$.

### 6.2 Product

For $\prod_{i} X_{i}$, state whether the topology is product, box, or a k-ified product. In the product topology, basic opens restrict only finitely many coordinates, projections are continuous, and a map into the product is continuous iff all coordinates are. The box topology allows restrictions in every coordinate and does not share that convergence behavior.

Audit question: did a proof use a box-shaped set with infinitely many nontrivial factors while claiming it was product-basic?

### 6.3 Quotient and gluing

Specify the equivalence relation or attaching map, the quotient map, and the saturated sets. A subset of the quotient is open exactly when its full preimage is open. Individual open subsets of the source need not have open images unless they are suitably saturated or the quotient map is known to be open.

Audit question: is the claimed target merely a bijective picture, or has the quotient topology been compared with the target topology?

### 6.4 Completion

For a metric completion, name the dense isometric embedding $j:X\to\widehat X$. If Cauchy sequences are used as points, state the equivalence relation and prove that distance between classes is well defined. Prove completeness of $\widehat{X}$ and density of $j(X)$. When extending a uniformly continuous map, verify that equivalent Cauchy sequences have image sequences with the same limit.

Audit question: does the map have enough uniform control to extend? Mere continuity need not send Cauchy sequences to Cauchy sequences.

### 6.5 Compactification

A compactification is a compact Hausdorff space $K$ with an embedding $e:X\to K$ having dense image, under the common Hausdorff convention. Record the remainder $K\setminus e(X)$ but do not classify compactifications by remainder cardinality alone. For a one-point compactification, verify compactness, Hausdorffness, the subspace topology on $X$, and density.

Audit question: are complements of compact subsets being used as neighborhoods of infinity without first showing they behave correctly under the chosen separation assumptions?

### 6.6 Function space

State the underlying set of maps and the topology: pointwise, uniform, compact-open, or k-ified compact-open. A subbasic compact-open set has the form

$[K,U]=\{f:f(K) \subseteq U\}$

with $K$ compact and $U$ open. Evaluation and currying theorems require declared hypotheses and sometimes a convenient category.

Audit question: is set-theoretic currying being mistaken for a homeomorphism of mapping spaces?

### 6.7 Covering construction

To verify $p:E\to B$ is a covering, for every $b \in B$ produce an open $U$ such that $p^{-1}(U)$ is a disjoint union of open sets, each mapped homeomorphically onto $U$. Surjectivity, local homeomorphism behavior, and disjoint sheet decomposition all belong in the certificate.

Audit question: has the argument checked the exceptional points where sheets meet, branch, or accumulate? For every integer $n\ge2$, the map $z \mapsto z^n$ is a covering on $\mathbb{C}\setminus\{0\}$ but not at zero.

### 6.8 Convenient-category construction

For compactly generated spaces, distinguish the raw product $X \times Y$ from $k(X \times Y)$ and the raw compact-open topology from its k-ification. Name weak Hausdorffness separately. A categorical identity is asserted inside a category, so the objects and morphisms of that category are part of the theorem statement.

Audit question: would forgetting k-ification change only notation, or could it change continuity of evaluation or currying? If the proof never asks, it has not established the claimed exponential law.

## 7. Classification by invariants and by obstructions

To prove spaces are homeomorphic, construct a map and complete the map certificate. To prove they are not homeomorphic, find a preserved property with different values. Useful point-set invariants include compactness, connectedness, path connectedness, number and structure of components, separation axioms, local compactness, first or second countability, and cut-point behavior. Homotopy invariants include contractibility, fundamental group, and lifting behavior.

An invariant argument has its own ledger:

- state the property $P$ precisely;
- prove homeomorphisms, or the relevant equivalences, preserve $P$;
- compute $P$ for both spaces;
- show the computed values differ.

Cardinality is an invariant but often too weak. Both $[0,1]$ and $S^{1}$ have continuum cardinality, yet deleting a suitable point distinguishes them: $S^{1}$ minus one point remains connected, whereas $[0,1]$ minus an interior point is disconnected. The deletion must correspond under a hypothetical homeomorphism, so choose a property true for every point or carefully track the selected point.

Local and global invariants should not be confused. The line and circle are locally homeomorphic but globally different. The line with two origins is locally Euclidean but not Hausdorff. A contractible space can have complicated local structure. Classification is strongest when several independent invariants agree with an explicit construction rather than replacing it.

## 8. Exercises

### TOP-CH22-E001 — Exercise 1

Current reading home: [TOP-CH22-E001](continuity-open-closed-and-neighborhood-tests.md#topology-transferred-e001).

Give a complete dependency proof that a continuous bijection $f:X\to Y$ from a compact space to a Hausdorff space is a homeomorphism. Identify exactly where every hypothesis is used.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Prove the map is closed before examining its inverse.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Track closed-subset compactness, continuous images and closed compact subsets of Hausdorff spaces as distinct steps.

</details>

### TOP-CH22-E002 — Exercise 2

Current reading home: [TOP-CH22-E002](quotients-identifications-and-gluing.md#topology-transferred-e002).

Let $q:X\to Y$ be a quotient map and $f:X\to Z$ a continuous map constant on fibers of $q$. Construct the induced map and prove existence, uniqueness, and continuity separately.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Define the value downstairs using any representative in a fiber.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Surjectivity gives existence and uniqueness; the quotient topology gives the continuity criterion.

</details>

### TOP-CH22-E003 — Exercise 3

Current reading home: [TOP-CH22-E003](products-boxes-and-coordinate-maps.md#topology-transferred-e003).

Prove that a map $g:W\to \prod_{i} X_{i}$ with the product topology is continuous if and only if every coordinate $\pi_{i} g$ is continuous. Name the universal-property direction being used.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use coordinate projections for one implication.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For the other, inverse-image a product-basic set, which restricts only finitely many coordinates.

</details>

### TOP-CH22-E004 — Exercise 4

Current reading home: [TOP-CH22-E004](products-boxes-and-coordinate-maps.md#topology-transferred-e004).

In $\mathbb{R}^{\mathbb{N}}$, prove that the standard unit vectors converge to zero in the product topology but not in the box topology.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

A basic product neighborhood controls finitely many coordinates.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Choose a box neighborhood imposing a small bound in every coordinate to examine the other topology.

</details>

### TOP-CH22-E005 — Exercise 5

Current reading home: [TOP-CH22-E005](compactness-covers-and-finite-control.md#topology-transferred-e005).

Prove that compact subsets of Hausdorff spaces are closed using a finite-neighborhood argument. Explain why the analogous proof fails without compactness.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Separate an exterior point from each point of the compact subset.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A finite subcover lets you intersect only finitely many neighborhoods of the exterior point.

</details>

### TOP-CH22-E006 — Exercise 6

Current reading home: [TOP-CH22-E006](canonical-counterexample-spaces.md#topology-transferred-e006).

Show directly that the indiscrete two-point space has nonunique net limits and a compact subset that is not closed.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

List the neighborhoods in the indiscrete topology.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use a singleton subset for the compact-but-not-closed claim and a constant net for limits.

</details>

### TOP-CH22-E007 — Exercise 7

Current reading home: [TOP-CH22-E007](nets-filters-and-topological-convergence.md#topology-transferred-e007).

Let $A$ be a subset of an arbitrary space $X$. Construct a net in $A$ converging to each point of $\operatorname{cl}(A)$. Specify the directed set and order.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Order neighborhoods of the closure point by reverse inclusion.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Choose points in the corresponding intersections with A, recording enough indexing data to avoid ambiguous choices.

</details>

### TOP-CH22-E008 — Exercise 8

Current reading home: [TOP-CH22-E008](uniform-spaces-completion-and-total-boundedness.md#topology-transferred-e008).

Prove that $\mathbb{Q} \cap [0,1]$ is totally bounded but not compact in the Euclidean metric.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

For total boundedness, divide the ambient interval into finitely many short pieces.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For noncompactness, choose rationals approaching an omitted irrational and examine subsequences.

</details>

### TOP-CH22-E009 — Exercise 9

Current reading home: [TOP-CH22-E009](complete-metric-spaces-baire-category.md#topology-transferred-e009).

Equip an infinite set with the discrete $0$–$1$ metric. Prove it is complete but not compact. Which half of the “complete plus totally bounded” characterization fails?

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use an epsilon strictly below one in both arguments.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The Cauchy condition then severely restricts the tail, whereas a small ball covers very few points.

</details>

### TOP-CH22-E010 — Exercise 10

Current reading home: [TOP-CH22-E010](quotients-identifications-and-gluing.md#topology-transferred-e010).

Audit the map $\varphi:\mathbb{R}/\mathbb{Z}\to S^{1}$, $\varphi([t])=\exp(2 \pi i t)$, and prove it is a homeomorphism without writing an explicit inverse formula.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Descend the exponential map through the quotient.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Use a compact interval to prove compactness of the quotient, then apply the compact-to-Hausdorff theorem.

</details>

### TOP-CH22-E011 — Exercise 11

Current reading home: [TOP-CH22-E011](canonical-counterexample-spaces.md#topology-transferred-e011).

Let $X=\mathbb{R} \times \{0,1\}$ and identify $(x,0)$ with $(x,1)$ whenever $x\ne 0$. Prove that the resulting line with two origins is not Hausdorff.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Pull neighborhoods of the two distinct origins back to the two copies of the real line.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Every such pair contains nonzero coordinates close enough to zero that are identified in the quotient.

</details>

### TOP-CH22-E012 — Exercise 12

Current reading home: [TOP-CH22-E012](continuity-open-closed-and-neighborhood-tests.md#topology-transferred-e012).

Prove that a finite closed cover supports the gluing lemma. Then give an infinite closed cover for which piecewise continuous, overlap-compatible maps glue to a discontinuous function.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Prove continuity by inverse images of closed sets on each cover member.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For the failure, try the cover of the real line by all singletons and remember what subspace continuity means.

</details>

### TOP-CH22-E013 — Exercise 13

Current reading home: [TOP-CH22-E013](function-spaces-and-compact-open-topology.md#topology-transferred-e013).

Show that $f_{n}(x)=x^n$ converges pointwise on $[0,1]$ to a discontinuous function and use this to prove the convergence is not uniform.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compute the limit separately at one and below one.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

A uniform limit of continuous functions on this common domain would be continuous.

</details>

### TOP-CH22-E014 — Exercise 14

Current reading home: [TOP-CH22-E014](countability-separability-and-lindelof-properties.md#topology-transferred-e014).

Prove that the Sorgenfrey line is separable but not second countable.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use rational points in every nonempty half-open basic interval.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

For each real x, any basis must supply a set containing x but confined to a right half-neighborhood of x.

</details>

### TOP-CH22-E015 — Exercise 15

Current reading home: [TOP-CH22-E015](../algebraic-topology-chains-spaces/coverings-and-monodromy.md#topology-transferred-e015).

Let $n\in\mathbb{Z}$ and let $p:\mathbb{R}\to S^{1}$ be $p(t)=\exp(2 \pi i t)$. Describe the lift starting at $0$ of the loop $\gamma(s)=\exp(2 \pi i n s)$ and compute its endpoint. State exactly when the lift is a loop.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Lift the angle rather than choosing a discontinuous principal argument.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Compute its real endpoint and compare it with its starting point.

</details>

### TOP-CH22-E016 — Exercise 16

Current reading home: [TOP-CH22-E016](../algebraic-topology-chains-spaces/coverings-and-monodromy.md#topology-transferred-e016).

Show that the map $z \mapsto z^{2}$ from $\mathbb{C}$ to $\mathbb{C}$ is not a covering map, but its restriction from $\mathbb{C}\setminus\{0\}$ to $\mathbb{C}\setminus\{0\}$ is a covering map.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compare the exceptional fiber with nearby fibers.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

On the punctured target use a small neighborhood on which an argument and its two half-angle branches exist.

</details>

### TOP-CH22-E017 — Exercise 17

Current reading home: [TOP-CH22-E017](../algebraic-topology-chains-spaces/homotopy-loops-and-deformation.md#topology-transferred-e017).

Prove that the interval and a point are homotopy equivalent but not homeomorphic.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Construct maps to and from the point and compare their composites.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

One composite needs a contraction of the interval; distinguish this from the bijection required by homeomorphism.

</details>

### TOP-CH22-E018 — Exercise 18

Current reading home: [TOP-CH22-E018](uniform-spaces-completion-and-total-boundedness.md#topology-transferred-e018).

For a metric space $X$, prove that compactness implies total boundedness. Do not invoke the full equivalence theorem.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Use every open epsilon-ball as an open cover.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Compactness selects finitely many centers for each chosen positive epsilon.

</details>

### TOP-CH22-E019 — Exercise 19

Current reading home: [TOP-CH22-E019](local-compactness-and-compactifications.md#topology-transferred-e019).

Suppose $X$ is locally compact Hausdorff and noncompact. Verify that the one-point compactification topology restricts to the original topology on $X$ and is Hausdorff.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Compare ordinary open subsets with intersections of neighborhoods at infinity.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Separate infinity from a finite point using a relatively compact neighborhood and its compact closure.

</details>

### TOP-CH22-E020 — Exercise 20

Current reading home: [TOP-CH22-E020](quotients-identifications-and-gluing.md#topology-transferred-e020).

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

### TOP-CH22-E001 — Solution 1

Let $A$ be closed in $X$. A closed subset of a compact space is compact, so here compactness of $X$ implies $A$ is compact. Continuity of $f$ implies $f(A)$ is compact. Hausdorffness of $Y$ implies the compact subset $f(A)$ is closed. Thus $f$ is a closed map. Bijectivity makes the inverse set map $f^{-1}:Y\to X$ exist, and for closed $A \subseteq X$ its inverse preimage is $(f^{-1})^{-1}(A)=f(A)$, which is closed. Hence $f^{-1}$ is continuous. Therefore $f$ is a homeomorphism. Compactness, continuity, Hausdorffness, and bijectivity have been used at distinct steps.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH22-E002 — Solution 2

Define $g:Y\to Z$ by choosing $x$ with $q(x)=y$ and setting $g(y)=f(x)$. Surjectivity of $q$ makes a representative available. Fiber constancy makes the value independent of the representative, so $g$ is well defined. It satisfies $gq=f$, establishing existence. If $h q=f$ also, then for any $y=q(x)$, $h(y)=h(q(x))=f(x)=g(q(x))=g(y)$; hence surjectivity gives uniqueness. Finally $gq=f$ is continuous, and the defining test for the quotient topology says a map out of $Y$ is continuous exactly when its composite with $q$ is continuous. Therefore $g$ is continuous.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH22-E003 — Solution 3

If $g$ is continuous, each $\pi_{i} g$ is continuous as a composite of continuous maps. Conversely, assume all coordinates are continuous. A basic product-open set has the form $\prod_{i} U_{i}$, where $U_{i}=X_{i}$ except for finitely many indices $i$ in $F$. Its preimage is

$\bigcap_{i\in F} (\pi_{i} g)^{-1}(U_{i})$,

a finite intersection of open sets. Basic-open preimages are open, so $g$ is continuous. This is the mapping-into test for the initial topology generated by the projections.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH22-E004 — Solution 4

Fix a basic product neighborhood $U$ of zero. It restricts only finitely many coordinates, say those in $F$. For every $n$ outside $F$, $e_{n}$ is zero in all restricted coordinates, so $e_{n} \in U$. Thus $e_{n}\to 0$ in the product topology. In the box topology,

$V=\prod_{k \in \mathbb{N}}(-1/2,1/2)$

is an open neighborhood of zero. Each $e_{n}$ has one coordinate equal to one, so no $e_{n}$ belongs to $V$. Therefore the sequence does not converge to zero in the box topology.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH22-E005 — Solution 5

Let $K \subseteq X$ be compact and let $y \notin K$. For each $x \in K$, Hausdorffness gives disjoint open sets $U_{x}$ containing $x$ and $V_{x}$ containing $y$. The $U_{x}$ cover $K$; compactness gives $x_{1},...,x_{n}$ whose $U_{x_{i}}$ cover $K$. Put $U=\bigcup_{i} U_{x_{i}}$ and $V=\bigcap_{i} V_{x_{i}}$. Then $U$ is an open neighborhood of $K$, $V$ is an open neighborhood of $y$, and they are disjoint. Thus $V \subseteq X\setminus K$, so every point outside $K$ has an open neighborhood outside $K$; the complement is open and $K$ is closed. Without compactness there may be no finite subcover, and an infinite intersection of the $V_{x}$ need not be open.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH22-E006 — Solution 6

Let $X=\{0,1\}$ with topology $\{\varnothing,X\}$. Every open cover of any subset is finite after removing repetitions, so every subset is compact; in particular $\{0\}$ is compact. It is not closed because its complement $\{1\}$ is not open. For any net $(x_{d})$ and either proposed limit $a \in X$, the only neighborhood of $a$ is $X$. The net is always in $X$, hence eventually in every neighborhood of $a$. Thus every net converges to both $0$ and $1$, and limits are not unique.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH22-E007 — Solution 7

Fix $x \in \operatorname{cl}(A)$. Let $D$ be the set of neighborhoods of $x$, ordered by reverse inclusion: write $U \le V$ when $V \subseteq U$. Given $U,V$, the neighborhood $U \cap V$ is an upper bound, so $D$ is directed. Because $x \in \operatorname{cl}(A)$, each $U$ meets $A$; choose $a_{U} \in A \cap U$. For any neighborhood $N$ of $x$, if $U\ge N$, then $U \subseteq N$, so $a_{U} \in U \subseteq N$. Hence the net $(a_{U})_{U \in D}$ converges to $x$.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH22-E008 — Solution 8

Given $\varepsilon>0$, compactness of $[0,1]$ supplies finitely many intervals of radius $\varepsilon/2$ covering $[0,1]$. From the intersection of each such interval with $[0,1]$, choose a rational point; each center therefore lies in $\mathbb{Q}\cap[0,1]$. Enlarging the radius to $\varepsilon$ makes these centers a finite epsilon-net for $\mathbb{Q} \cap [0,1]$. Hence the rational subspace is totally bounded. Choose rationals $q_{n}$ converging in $\mathbb{R}$ to an irrational $\alpha \in [0,1]$. The sequence is Cauchy in the subspace but has no limit there, so the subspace is not complete. Every compact metric space is complete; therefore it is not compact.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH22-E009 — Solution 9

Let $X$ be infinite with $d(x,y)=1$ for distinct points. If a sequence is Cauchy, then beyond some index all pairwise distances are less than $1/2$, forcing all those terms to be equal. Thus every Cauchy sequence converges and $X$ is complete. Balls of radius $1/2$ are singletons, so no finite collection covers infinite $X$; it is not totally bounded. Equivalently, the cover by all singletons has no finite subcover, so $X$ is not compact. Total boundedness is the missing half.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH22-E010 — Solution 10

Let $q:\mathbb{R}\to \mathbb{R}/\mathbb{Z}$ be the quotient map. If $t-s$ is an integer, then $\exp(2 \pi i t)=\exp(2 \pi i s)$, so $\varphi$ is well defined. The composite $\varphi q(t)=\exp(2 \pi i t)$ is continuous, hence the quotient test makes $\varphi$ continuous. Equal exponentials differ by an integer in their parameters, proving injectivity, and every point of $S^{1}$ has an angular parameter, proving surjectivity. The restriction $q|_{[0,1]}:[0,1]\to \mathbb{R}/\mathbb{Z}$ is continuous and surjective, so $\mathbb{R}/\mathbb{Z}$ is compact. Since $S^{1}$ is Hausdorff, the compact-to-Hausdorff continuous-bijection theorem upgrades $\varphi$ to a homeomorphism. No explicit inverse continuity calculation is needed.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH22-E011 — Solution 11

Let $q:X\to L$ be the quotient and let $o_{0}=q(0,0)$, $o_{1}=q(0,1)$. These points are distinct. Suppose $U_{0},U_{1}$ were disjoint open neighborhoods of them. Then $q^{-1}(U_{i})$ is open and contains $(0,i)$, so for some $\varepsilon_{i}>0$ it contains $(-\varepsilon_{i},\varepsilon_{i}) \times \{i\}$. Choose nonzero $x$ with $|x|<\min(\varepsilon_{0},\varepsilon_{1})$. The points $(x,0)$ and $(x,1)$ are equivalent, so their common image belongs to both $U_{0}$ and $U_{1}$, contradicting disjointness. Thus the two origins cannot be separated and $L$ is not Hausdorff.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH22-E012 — Solution 12

Let $X=F_{1} \cup ... \cup F_{n}$ with each $F_{i}$ closed, and let continuous $f_{i}:F_{i}\to Y$ agree on overlaps. Agreement defines a unique set map $f:X\to Y$. For closed $C \subseteq Y$,

$f^{-1}(C)=\bigcup_{i=1}^n f_{i}^{-1}(C)$.

Each inverse image is closed in $F_{i}$, hence closed in $X$ because $F_{i}$ is closed. The finite union is closed, so $f$ is continuous.

For failure with an infinite closed cover, use

$F_{n}=\{0\} \cup [1/n,\infty)$, $G_{n}=(-\infty,-1/n]$ for $n\ge 1$,

together with the singleton $\{0\}$. These closed sets cover $\mathbb{R}$. Let $f(0)=1$ and $f(x)=0$ for $x\ne 0$. On every $F_{n}$, the point zero is isolated, so the restriction is continuous; on every $G_{n}$ it is constantly zero; and on $\{0\}$ it is constant. All restrictions agree on overlaps. Their glued function is nevertheless discontinuous at zero. Thus the finiteness condition cannot simply be dropped.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH22-E013 — Solution 13

For $0\le x<1$, $x^n\to 0$; at $x=1$, every term equals one. The pointwise limit is therefore $f(x)=0$ on $[0,1)$ and $f(1)=1$, which is discontinuous at one. If continuous functions on $[0,1]$ converged uniformly, their limit would be continuous: for a chosen point, combine uniform closeness of one sufficiently late function with continuity of that function. Since the actual limit is discontinuous, convergence cannot be uniform. Directly, for each $n$, values $x^n$ can be arbitrarily close to one with $x<1$, while $f(x)=0$, so the supremum error is one.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH22-E014 — Solution 14

The half-open intervals $[a,b)$ form a basis for the Sorgenfrey line. Every nonempty such interval contains a rational, so $\mathbb{Q}$ meets every nonempty open set and is dense; the space is separable. Suppose $B$ were a countable basis. For every real $x$, choose $B_{x} \in B$ with $x \in B_{x} \subseteq [x,x+1)$. If $x<y$ and $B_{x}=B_{y}$, then $x \in B_{y} \subseteq [y,y+1)$, impossible. Thus the map $x \mapsto B_{x}$ is injective from the uncountable reals into the countable set $B$, a contradiction. Hence the Sorgenfrey line is not second countable.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH22-E015 — Solution 15

Define $\widetilde{\gamma}(s)=ns$. Then $\widetilde{\gamma}(0)=0$ and

$p(\widetilde{\gamma}(s))=\exp(2 \pi i ns)=\gamma(s)$,

so it is a lift with the required initial point. Uniqueness of path lifting makes it the only such lift. Its endpoint is $n$. It is a loop in $\mathbb{R}$ exactly when its endpoint equals its starting point, which occurs exactly when $n=0$. For nonzero $n$, the base path is a loop but its chosen lift is not; the endpoint displacement records the winding number.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH22-E016 — Solution 16

At zero the map $p(z)=z^{2}$ cannot be locally a homeomorphism. Every neighborhood of zero contains distinct points $z$ and $-z$ with the same image, so no restriction over a neighborhood of zero can be injective on a sheet containing zero. Hence it is not a covering $\mathbb{C}\to\mathbb{C}$.

On $\mathbb{C}\setminus\{0\}$, fix $w$ and choose a small open disk $U$ around $w$ that avoids zero and admits a continuous choice of argument. It has two continuous square-root branches, whose images $V_+$ and $V_-$ are disjoint open sets. The inverse image of $U$ is the disjoint union $V_+\sqcup V_-$, and $p$ maps each branch homeomorphically onto $U$. Therefore the restriction is a two-sheeted covering.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH22-E017 — Solution 17

Let $c:[0,1]\to \{*\}$ be the unique map and let $i:\{*\}\to[0,1]$ send the point to zero. Then $ci$ is the identity on the singleton. The composite $ic$ is the constant-zero map on the interval, homotopic to the identity through $H(x,t)=(1-t)x$. Thus the spaces are homotopy equivalent. They are not homeomorphic because they have different cardinalities. A structural alternative is that deleting the single point from $\{*\}$ gives the empty space, while $[0,1]$ has more than one point and contains cut points.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH22-E018 — Solution 18

Let $\varepsilon>0$. The family of all open epsilon-balls $\{B(x,\varepsilon):x \in X\}$ is an open cover of compact $X$. Choose a finite subcover $B(x_{1},\varepsilon),...,B(x_{n},\varepsilon)$. The finite set $\{x_{1},...,x_{n}\}$ is an epsilon-net. Since this works at every positive scale, $X$ is totally bounded. Only the open-cover definition of compactness was used.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH22-E019 — Solution 19

Let $X^*=X \cup \{\infty\}$. Its open sets are the original opens of $X$, together with sets containing infinity whose complement in $X$ is compact and closed. Therefore the subspace opens on $X$ are exactly its original opens.

To separate $x,y \in X$, use Hausdorffness of $X$. To separate $x \in X$ from infinity, local compactness gives an open neighborhood $U$ of $x$ with compact closure $K$. Then $U$ and $\{\infty\} \cup (X\setminus K)$ are disjoint open neighborhoods of $x$ and infinity. Hence $X^*$ is Hausdorff. Noncompactness ensures $X$ is dense: every neighborhood of infinity meets $X$, since an empty intersection would say its compact complement is all of noncompact $X$.

</details>

<details data-euler-reveal="solution">
<summary>Full solution</summary>

### TOP-CH22-E020 — Solution 20

Define $s\sim t$ on $[0,1]$ when $s=t$ or $\{s,t\}=\{0,1\}$. Let $Y=[0,1]/{\sim}$ and let $q:[0,1]\to Y$ be the quotient map. Define $\varphi:Y\to S^{1}$ by $\varphi([t])=\exp(2 \pi i t)$. The only distinct equivalent representatives are zero and one, and both exponentiate to one, so the formula is well defined. Its composite with $q$ is continuous; the quotient property gives continuity of $\varphi$. Equality of exponentials for parameters in $[0,1]$ occurs only for equal parameters or the endpoint pair, proving injectivity, and angular parameterization gives surjectivity. The quotient $Y$ is compact as a continuous image of compact $[0,1]$, while $S^{1}$ is Hausdorff. Therefore the compact-to-Hausdorff criterion makes the continuous bijection $\varphi$ a homeomorphism. This completes the relation, map, topology, and theorem audit.

</details>

## TOP-CH22-P001 — Capstone: a proof-and-construction dossier

This is the chapter's one major capstone. Choose one of the following focal constructions:

- a quotient model of a circle, torus, projective space, or finite graph;
- a covering of a graph or a familiar manifold;
- a one-point compactification of a noncompact locally compact Hausdorff space;
- a completion of a concrete metric space;
- a compact-open or k-ified mapping-space comparison.

Submit a single dossier with all of the following artifacts.

**1. Typed construction record.** State every underlying set, topology, equivalence relation, metric, base point, and ambient category. Give every canonical map with domain and codomain. If points are equivalence classes, prove representative independence before making topological claims.

**2. Universal-property proof.** State the relevant initial, final, completion, compactification, lifting, or exponential property with quantifiers. Prove it in the chosen example, including uniqueness. If a general theorem is imported, state its hypotheses and verify them one by one.

**3. Theorem dependency ledger.** Present at least six nontrivial claims in a table with columns `claim`, `incoming hypotheses`, `earlier result`, `mechanism`, and `status`. At least one dependency chain must have three logical steps. Rewrite the chain in prose so the submission remains accessible without reading arrows or a diagram.

**4. Map audit.** Complete the six-line certificate for every map central to the construction. At least one map must require a genuine well-definedness proof, and at least one claimed homeomorphism must be established by more than “continuous and bijective.”

**5. Hypothesis-removal suite.** Select three theorems used in the dossier. For each, delete one hypothesis and give a certified counterexample: verify all retained hypotheses, prove the exact conclusion fails, and identify the proof line that breaks. The three witnesses must use different mechanisms, such as loss of separation, loss of compactness, sequence blindness, bad quotient behavior, or category mismatch.

**6. Invariant comparison.** Compare the focal space with one plausible nonhomeomorphic or nonequivalent space. State and prove preservation of the chosen invariant, compute it on both objects, and explain why a mere picture or cardinality count would not settle the comparison.

**7. Boundary and convention note.** List every convention on which the result depends: whether local compactness includes Hausdorffness, whether homotopies are based, whether products are ordinary or k-ified, and which choice principle is imported if relevant. Label unproved external results explicitly.

**8. Accessible presentation.** If the dossier includes a diagram, model, or computation, include a text or numerical alternative giving the objects, arrows, identifications, and conclusion. A computational sample may check a finite model or illustrate a lift, but the proof status of each output must be labeled as theorem, exact calculation, or experiment.

The dossier passes when an independent reader can reconstruct the object, replay every map and theorem audit, locate each hypothesis at its proof step, and distinguish certified conclusions from pictures or experiments. Decorative complexity earns nothing: one small construction with complete logical control is stronger than several impressive spaces described informally.

## 10. Final synthesis

The central results of point-set topology are powered by a small family of mechanisms. Initial topologies test maps into a construction; final topologies test maps out. Compactness turns local choices into finite control or convergent subnets. Completeness keeps approximations inside the space. Separation turns distinct points or closed sets into disjoint neighborhoods and gives uniqueness or closedness. Countability permits sequence arguments and countable bookkeeping. Local triviality lets local inverses glue into lifts. Compact generation changes the ambient category so compact probes control mapping-space behavior.

Counterexamples mark the boundary of each mechanism. The indiscrete space removes separation. An incomplete rational interval lets Cauchy limits escape. An infinite discrete space defeats total boundedness. The box topology defeats coordinatewise product reasoning. The ordinal $\omega_{1}$ defeats sequence-only closure tests. The topologist's sine curve separates connectedness from path connectedness. The line with two origins shows that a quotient of a Hausdorff space need not remain Hausdorff.

The lasting skill is therefore not theorem recitation. It is the ability to turn a claim into a dependency ledger, turn a construction into a map audit, and turn a missing hypothesis into a verified witness. Once those habits are automatic, unfamiliar topological spaces stop being collections of pathological names. They become test environments in which proof mechanisms can be selected, combined, and checked.
