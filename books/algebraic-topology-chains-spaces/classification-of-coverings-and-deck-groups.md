
# Classification of Coverings and Deck Groups {#section-1-classification-of-coverings-and-deck-groups}

A loop can move a chosen sheet of a covering to another sheet. The resulting permutation action remembers far more than the number of sheets: it determines which lifted loops close, which covering maps factor through others, and which symmetries preserve the projection. This chapter proves the classification theorem with a fixed convention for composition and cosets. The hypotheses are part of the theorem, not optional restrictions on its examples.

Preparation is the preceding [covering and lifting chapter](coverings-and-monodromy.md), including unique path lifting, homotopy lifting and the loop-lifting criterion. We also use quotient groups, subgroups, cosets and group actions from [Abstract Algebra](#/books/algebra-patterns-structure). Throughout, paths concatenate from left to right: $\alpha*\beta$ follows $\alpha$ first. Homotopies of paths fix both endpoints. No covering in the classification is allowed an empty total space.

<a id="section-5-1-local-hypotheses-and-based-data"></a>
## 1. Local hypotheses and based data {#section-7-1-local-hypotheses-and-based-data}

Fix a path-connected, locally path-connected space $B$, a point $b_0\in B$, and $G=\pi_1(B,b_0)$. Assume $B$ is **semilocally simply connected**: every point has a neighborhood whose loops become trivial in $B$. Because $B$ is locally path-connected, we can shrink to path-connected open neighborhoods. On such a neighborhood, triviality for one basepoint implies triviality for every other basepoint by changing basepoint along a path inside it.

Call these neighborhoods **admissible**. They need not themselves be simply connected. Their loops need only contract in the whole space. An annular neighborhood sitting inside a disk illustrates the distinction: a loop can fail to contract in the annulus and still contract in the disk. The assumption required below is triviality of the inclusion-induced homomorphism, together with an admissible neighborhood basis obtained by shrinking within arbitrary open sets.

A **based connected covering** is a covering $p:E\to B$ with $E$ path-connected and a chosen $e_0\in p^{-1}(b_0)$. An isomorphism of based coverings is a homeomorphism over $B$ taking the chosen point to the chosen point. Since $B$ is locally path-connected, so is every covering space. Its connected components are open and path-connected; thus connected and path-connected are equivalent for the coverings considered here.

The subgroup associated with a based covering is

$$H=p_*\pi_1(E,e_0)\le G.$$

A base loop has class in $H$ exactly when its lift starting at $e_0$ closes. For the forward implication, lift a loop of the form $p\circ\eta$ using uniqueness. For the reverse implication, a closed lifted loop itself supplies $\eta$. Homotopy lifting makes this criterion depend only on the loop class. It will be the bridge between the algebraic and topological constructions.

<a id="section-19-2-constructing-the-universal-cover"></a>
## 2. Constructing the universal cover {#section-21-2-constructing-the-universal-cover}

**Theorem 1 (Path-class universal cover).** Under the stated hypotheses, there is a path-connected simply connected covering $q:\widetilde B\to B$ with a chosen point over $b_0$.

*Proof.* The points of $\widetilde B$ are endpoint-preserving homotopy classes $[\alpha]$ of paths beginning at $b_0$. Let $q([\alpha])=\alpha(1)$; this is well-defined because the endpoint is fixed in the equivalence relation. For an admissible neighborhood $U$ of $\alpha(1)$, put

$$V([\alpha],U)=\{[\alpha*\delta]:\delta\text{ lies in }U,\ \delta(0)=\alpha(1)\}.$$

Every point of $U$ is reached because $U$ is path-connected. Two paths $\delta_1,\delta_2$ ending at the same point give the same path class: the loop $\delta_1*\bar\delta_2$ lies in $U$ and is null-homotopic in $B$, so cancellation in endpoint-preserving path homotopy gives $[\alpha*\delta_1]=[\alpha*\delta_2]$. Thus $q$ restricts to a bijection from this set onto $U$.

These sets form a basis. They cover $\widetilde B$ by choosing an admissible neighborhood of each endpoint. If $[\beta]$ lies in the intersection of two such sets, choose an admissible path-connected $W$ about $q([\beta])$ inside the intersection of their base neighborhoods. Then $V([\beta],W)$ lies in both sets: append a path in $W$ to a representative reaching $[\beta]$. This proves the basis intersection condition.

For a fixed admissible $U$, two sets of the displayed kind lying over $U$ are equal or disjoint. If they share $[\beta]$, then extending paths from that common class to any endpoint of $U$ gives the same classes, by the same trivial-loop argument. Every point over $U$ belongs to one of these sets. On each, $q$ is a homeomorphism: basic refinements project to open subsets, and inverse images of smaller open subsets are unions of basic refinements. Consequently $q^{-1}(U)$ is a disjoint union of open sheets each mapped homeomorphically onto $U$; this is exactly the covering condition.

The distinguished point $\widetilde b_0$ is the constant path class. Every $[\alpha]$ is reached by the path of initial segments of $\alpha$. This path is continuous because, on a sufficiently short parameter interval, the endpoint path remains in one admissible neighborhood and its classes lie in one sheet. Hence $\widetilde B$ is path-connected.

To prove simple connectedness, let $\gamma$ be a loop at $\widetilde b_0$ and write $\ell=q\circ\gamma$. The initial-segment path of $\ell$ is a lift starting at $\widetilde b_0$, so by path-lifting uniqueness it equals $\gamma$. Since $\gamma$ closes, its endpoint class $[\ell]$ equals the constant class. By the definition of $\widetilde B$, $\ell$ is therefore null-homotopic relative endpoints. Lift such a null-homotopy using the preceding chapter's homotopy-lifting theorem. The endpoint lifts remain constant in their fibers: a continuous path into a discrete fiber is constant. The lifted homotopy thus contracts $\gamma$ as a based loop. A path-connected space with trivial based fundamental group is simply connected. ∎

The construction did not assume a global coordinate chart, a finite triangulation or a metric. Its local sheet argument is where local path connectivity and semilocal simple connectivity enter. Without them, the same set of path classes need not have this covering topology.

<a id="section-39-3-realising-any-subgroup"></a>
## 3. Realising any subgroup {#section-41-3-realising-any-subgroup}

Each $g\in G$ acts on the left of $\widetilde B$ by prepending a representative loop:

$$g\cdot[\alpha]=[g*\alpha].$$

This is independent of representatives and preserves $q$. It sends each basic sheet homeomorphically to another sheet. It is free: if $[g*\alpha]=[\alpha]$, append $\bar\alpha$ to obtain $g=1$ in $G$. It is transitive on every fiber: for paths $\alpha,\beta$ ending at the same point, the class of $\beta*\bar\alpha$ carries $[\alpha]$ to $[\beta]$.

For a subgroup $H\le G$, form the quotient $E_H=H\backslash\widetilde B$ by this left action. Write $q_H:E_H\to B$ for its endpoint projection and $e_H$ for the orbit of the constant path.

**Theorem 2 (Subgroup realisation).** The map $q_H$ is a connected covering, and $(q_H)_*\pi_1(E_H,e_H)=H$.

*Proof.* Over an admissible $U$, the group permutes the disjoint open sheets of $q$. No nonidentity element can carry one sheet onto itself: it would fix the unique point of that sheet over any chosen base point, contradicting freeness. The quotient therefore groups sheets into $H$-orbits. Each such orbit descends to one open sheet of $q_H$ homeomorphic to $U$. To see that the inverse chart is continuous, the preimage in $\widetilde B$ of an open subset of this quotient sheet is a union of its open translated sheets restricted to that subset of $U$. This verifies the quotient-topology condition, rather than merely counting fibers. Thus $q_H$ is a covering.

The quotient of path-connected $\widetilde B$ is path-connected. A based loop of class $g$ lifts to the path of its initial segments, now read in the quotient. Its endpoint is the orbit $H\cdot[g]$, which equals $e_H$ exactly when $g\in H$. The loop-closing criterion from Section 1 identifies the image subgroup as $H$. ∎

The fiber over $b_0$ is the set $H\backslash G=\{Hg:g\in G\}$ of right cosets. It has a right $G$-action by appending loops: $(Hg)\cdot k=Hgk$. The subgroup acts on the left in the universal-cover construction, while monodromy acts on the right of this fiber. These two positions are consistent and should not be interchanged in a formula without changing conventions.

<a id="section-57-4-uniqueness-and-change-of-basepoint"></a>
## 4. Uniqueness and change of basepoint {#section-59-4-uniqueness-and-change-of-basepoint}

**Theorem 3 (Based classification).** Based isomorphism classes of connected coverings correspond bijectively to subgroups of $G$, by $(E,e_0)\mapsto p_*\pi_1(E,e_0)$.

*Proof.* Realisation proves surjectivity. Given a based connected covering with subgroup $H$, define $F:E_H\to E$ by sending the orbit of $[\alpha]$ to the endpoint of the lift of $\alpha$ starting at $e_0$.

Two endpoint path classes represent the same $H$-orbit exactly when the class of $\alpha*\bar\beta$ lies in $H$. By the loop-closing criterion, this is exactly when their lifts have the same endpoint. Thus $F$ is well-defined and injective. It is surjective because a path in $E$ from $e_0$ to any desired point projects to a path whose lift is that chosen path. On admissible sheets it is the composition of one sheet chart inverse with another sheet chart, so it and its inverse are locally continuous. Hence it is a homeomorphism over $B$, taking $e_H$ to $e_0$. Uniqueness of a based covering isomorphism follows from unique lifting of every path starting at the basepoint. ∎

If the chosen point in the fiber changes from $e_0$ to $e_0\cdot g$, its stabilizer becomes $g^{-1}Hg$. Every fiber point is reached this way. Therefore forgetting the chosen point changes the classification from subgroups to **conjugacy classes** of subgroups. A subgroup equality is stronger data than an unbased covering isomorphism.

<a id="section-67-5-deck-groups-and-normality"></a>
## 5. Deck groups and normality {#section-69-5-deck-groups-and-normality}

A **deck transformation** is a homeomorphism $d:E\to E$ with $p\circ d=p$. It is determined by the image of one point when $E$ is connected: two such maps agreeing at that point agree along every path by unique lifting. Every deck transformation commutes with monodromy, since applying it to a lifted path gives the lift starting at its transformed initial point.

Conversely, a monodromy-equivariant permutation of the fiber extends uniquely to a deck transformation. To define the extension at a point, lift a base path from a fiber point to it and lift the same path from the prescribed image of that fiber point. Independence follows from equivariance applied to the loop made by two choices. In a local sheet chart this rule carries one sheet to another by the identity base coordinate, so it is a homeomorphism.

**Theorem 4 (Normalizer formula).** For the connected covering corresponding to $H$, the deck group is $N_G(H)/H$, where $N_G(H)=\{a:aHa^{-1}=H\}$.

*Proof.* An equivariant permutation of $H\backslash G$ is determined by its value $Ha$ at $H$ and must satisfy $f(Hg)=Hag$. This is well-defined and invertible exactly when $aHa^{-1}=H$: well-definedness gives the inclusion into $H$, and applying the inverse gives the reverse inclusion. Parameters differing by left multiplication by $H$ give the same map. For $a,b$ in the normalizer, composition is $f_a\circ f_b=f_{ab}$. Thus the equivariant permutation group, and hence the deck group, is $N_G(H)/H$. ∎

The covering is **regular** when the deck group is transitive on each fiber. The orbit of $H$ under the normalizer formula contains exactly the cosets represented in $N_G(H)$. It is the entire fiber precisely when $N_G(H)=G$, equivalently $H$ is normal. In that case the deck group is $G/H$. For a general subgroup, writing $G/H$ as a quotient group is meaningless.

**Worked example 1 (Circle covers).** For $B=S^1$, $G=\mathbb Z$. Its subgroups are $n\mathbb Z$ for $n\ge1$, plus the zero subgroup. The first give the degree-$n$ circle covers; the zero subgroup gives $\mathbb R\to S^1$. Every subgroup is normal, so the finite deck groups are $\mathbb Z/n\mathbb Z$, while the universal deck group is $\mathbb Z$. The zero subgroup has infinite index, not degree zero.

**Worked example 2 (A torus sublattice).** The subgroup $H=2\mathbb Z\times3\mathbb Z$ of $\pi_1(T^2)=\mathbb Z^2$ has six cosets, represented by pairs with first coordinate $0,1$ and second coordinate $0,1,2$. Its cover is $\mathbb R^2/H\to\mathbb R^2/\mathbb Z^2$. All subgroups of an abelian group are normal, so its deck group is $\mathbb Z/2\mathbb Z\times\mathbb Z/3\mathbb Z$. The total space is again a torus, not the grid graph drawn by its coordinate circles.

**Worked example 3 (A nonregular cover).** Let $G$ be the free group on $a,b$, realised by a two-circle wedge. Let it act on three letters by $a=(12)$ and $b=(123)$. This action is transitive. The corresponding stabilizer subgroup has index three, producing a connected three-sheeted graph cover. A deck permutation must commute with both displayed permutations. A permutation commuting with the 3-cycle is one of its three powers, and only the identity among those commutes with $(12)$. The deck group is trivial, despite the three sheets. Sheet count alone cannot determine the number of deck symmetries.

<a id="section-85-6-maps-between-covers-and-the-meaning-of-the-classifica"></a>
## 6. Maps between covers and the meaning of the classification {#section-87-6-maps-between-covers-and-the-meaning-of-the-classifica}

**Theorem 5 (Based maps over the base).** Under the hypotheses of this chapter, let $p_H:(E_H,e_H)\to(B,b_0)$ and $p_K:(E_K,e_K)\to(B,b_0)$ be connected based coverings corresponding to subgroups $H,K\le G$. A based continuous map $F:E_H\to E_K$ satisfying $p_KF=p_H$ exists if and only if $H\subseteq K$. When it exists, it is unique and is itself a covering map.

*Proof.* If such a map exists, functoriality gives $p_{H*}=p_{K*}F_*$, so the image subgroup $H$ is contained in $K$. Conversely work with the path-class quotient models already constructed. Send the $H$-orbit of a path class to its $K$-orbit. If two classes differ by prepending a loop in $H$, they also differ by a loop in $K$, so this rule is well-defined. It preserves endpoints and the chosen constant path class. In admissible sheet charts it is the identity on the base coordinate, hence continuous.

It is surjective: every $K$-orbit has a representative path class, and that same representative gives an $H$-orbit above it. To see that it is a covering, take one sheet of $E_K$ above an admissible base neighborhood. Its inverse image is a disjoint union of $E_H$ sheets, each mapped homeomorphically onto it. This is a covering neighborhood for every point in $E_K$. Finally two based maps over $B$ must agree along every path beginning at $e_H$, since their images are lifts of the same projected path beginning at $e_K$. Path connectedness makes them agree everywhere. ∎

The theorem distinguishes a map over the base from an arbitrary continuous map between the total spaces. Two circles admit many continuous maps, but only the ones satisfying the commuting projection equation belong to this classification problem. It also distinguishes a based map from an unbased map: without chosen fiber points, the subgroup criterion is conjugate containment rather than literal containment. The source and target basepoints specify which conjugate is meant.

For finite-index subgroups, the number of sheets of $E_H\to E_K$ is $[K:H]$, and $[G:H]=[G:K][K:H]$. This can be seen without a topology calculation: above the chosen point of $E_K$, the points are represented by the right cosets $Hk$ with $k\in K$. The product formula counts the $H$-cosets in each $K$-coset. If some indices are infinite, use the corresponding cardinal statement rather than canceling infinite numbers as if they were positive real numbers.

**Worked example 4 (Factoring circle covers).** Let $H=12\mathbb Z$ and $K=3\mathbb Z$ inside $G=\mathbb Z$. Inclusion gives a unique based map over the base from the twelve-sheeted circle cover to the three-sheeted cover. Identify both total spaces with circles so that their projection maps are $z\mapsto z^{12}$ and $w\mapsto w^3$. The intermediate map is $z\mapsto z^4$, since $(z^4)^3=z^{12}$ and it fixes one. Its degree is four, agreeing with $[3\mathbb Z:12\mathbb Z]=4$. There is no based map in the reverse direction over this same base: it would require $3\mathbb Z\subseteq12\mathbb Z$, which fails.

<a id="section-99-7-disconnected-coverings-and-independent-choices"></a>
## 7. Disconnected coverings and independent choices {#section-101-7-disconnected-coverings-and-independent-choices}

For a covering of this locally path-connected base, each connected component of the total space is open and path connected. Its image is all of $B$: starting from a point in that component, lift a path to any desired basepoint; the lifted path stays in the component. Therefore every component is a connected covering of the same base. The full fiber is a disjoint union of transitive monodromy orbits, one for each component.

Conversely any disjoint union of connected coverings is again a covering. Over a sufficiently small admissible neighborhood, all path-class models have sheets homeomorphic to that same neighborhood, so their union is evenly covered. Equivalently, start from any right $G$-set and decompose it into its orbits. Choose one point in each orbit, take its stabilizer, build the associated connected cover, and form the disjoint union. The use of an orbit representative is a choice; changing the representative conjugates the subgroup and yields an isomorphic unbased covering.

This formulation explains why a nonempty covering can have components with different sheet counts and different deck symmetries. A count of all fiber points discards the orbit decomposition. For example the disjoint union of a one-sheeted and a two-sheeted circle cover has three points in every fiber but is not isomorphic to the connected three-sheeted circle cover: their total spaces have different numbers of components. The monodromy actions distinguish them immediately, as an orbit of size three differs from two orbits of sizes one and two.

The classification used here includes the construction and uniqueness proof, not only a list of possible groups. The hypotheses are unchanged throughout: the base is path connected, locally path connected and semilocally simply connected; paths concatenate from left to right; coverings have nonempty fibers. No assertion about generalized coverings of wild spaces is needed, and no finite-dimensional or metric structure has entered the construction.

<a id="section-109-exercises"></a>
## Exercises {#section-111-exercises}

<a id="section-111-exercise-1"></a>
### Exercise 1 {#section-113-exercise-1}
<a id="classification-of-coverings-and-deck-groups-ex-1"></a>
List the based connected covers of $S^1$ having four sheets and compute their deck groups.
<details><summary>Hint 1</summary>
Translate sheet count into subgroup index.
</details>
<details><summary>Hint 2</summary>
Every subgroup of the infinite cyclic group has one nonnegative generator.
</details>
<details><summary>Full solution</summary>
The only index-four subgroup is $4\mathbb Z$. Thus there is one based isomorphism class, represented by $z\mapsto z^4$ with chosen point $1$. Normality gives deck group $\mathbb Z/4\mathbb Z$, realised by multiplying by fourth roots of unity.
</details>

<a id="section-124-exercise-2"></a>
### Exercise 2 {#section-126-exercise-2}
<a id="classification-of-coverings-and-deck-groups-ex-2"></a>
Does $\mathbb R\to S^1$ have zero sheets because its subgroup is $0$?
<details><summary>Hint 1</summary>
The number of sheets is an index, not the size of the subgroup.
</details>
<details><summary>Hint 2</summary>
Count the cosets of the zero subgroup in $\mathbb Z$.
</details>
<details><summary>Full solution</summary>
The cosets are the individual integers, so the index is countably infinite. Each fiber is an integer translate of a chosen lift. The covering has infinitely many sheets and a simply connected total space.
</details>

<a id="section-137-exercise-3"></a>
### Exercise 3 {#section-139-exercise-3}
<a id="classification-of-coverings-and-deck-groups-ex-3"></a>
Show that every connected cover of a simply connected, locally path-connected base is an isomorphism.
<details><summary>Hint 1</summary>
A simply connected base satisfies the semilocal condition.
</details>
<details><summary>Hint 2</summary>
Classify subgroups of its trivial fundamental group.
</details>
<details><summary>Full solution</summary>
The only subgroup of the trivial group is trivial and has index one. Classification therefore gives the identity covering up to isomorphism. Equivalently, the covering has one sheet and its local inverse charts combine into a global inverse.
</details>

<a id="section-150-exercise-4"></a>
### Exercise 4 {#section-152-exercise-4}
<a id="classification-of-coverings-and-deck-groups-ex-4"></a>
For $H=3\mathbb Z\times5\mathbb Z$ inside $\mathbb Z^2$, compute the sheet count and deck group.
<details><summary>Hint 1</summary>
Choose representatives independently in the two coordinates.
</details>
<details><summary>Hint 2</summary>
The ambient group is abelian.
</details>
<details><summary>Full solution</summary>
There are $3\cdot5=15$ cosets. Normality gives deck group $(\mathbb Z/3\mathbb Z)\times(\mathbb Z/5\mathbb Z)$, isomorphic also to $\mathbb Z/15\mathbb Z$ by the Chinese remainder theorem. The coset count establishes connected covering degree without identifying a preferred generator of that cyclic group.
</details>

<a id="section-163-exercise-5"></a>
### Exercise 5 {#section-165-exercise-5}
<a id="classification-of-coverings-and-deck-groups-ex-5"></a>
Prove that a deck transformation of a connected covering which fixes one point is the identity.
<details><summary>Hint 1</summary>
Connect the fixed point to an arbitrary point by a path upstairs.
</details>
<details><summary>Hint 2</summary>
The path and its deck image lift the same projected path.
</details>
<details><summary>Full solution</summary>
Local path connectivity of the total space makes connectedness equivalent to path connectedness. Choose a path from the fixed point to any $x$. Its image under the deck transformation has the same projection and initial point, so uniqueness of path lifting makes the paths equal. Their endpoints agree, proving $d(x)=x$ for every $x$.
</details>

<a id="section-176-exercise-6"></a>
### Exercise 6 {#section-178-exercise-6}
<a id="classification-of-coverings-and-deck-groups-ex-6"></a>
A connected finite covering has $n$ sheets. Prove that its deck group has at most $n$ elements.
<details><summary>Hint 1</summary>
Evaluate each transformation at one chosen fiber point.
</details>
<details><summary>Hint 2</summary>
Use Exercise 5 to prove injectivity of this evaluation map.
</details>
<details><summary>Full solution</summary>
Map $d$ to $d(e_0)$ in the $n$-point fiber. If $d(e_0)=d'(e_0)$, then $(d')^{-1}d$ fixes $e_0$ and is the identity by Exercise 5. Evaluation is injective, yielding the bound. Equality holds exactly when the deck action is transitive, namely for regular covers.
</details>

<a id="section-189-exercise-7"></a>
### Exercise 7 {#section-191-exercise-7}
<a id="classification-of-coverings-and-deck-groups-ex-7"></a>
For $H\le K\le G$, show that the based covering for $H$ factors through the based covering for $K$.
<details><summary>Hint 1</summary>
Use the two orbit spaces of the same universal cover.
</details>
<details><summary>Hint 2</summary>
Every $H$-orbit is contained in one $K$-orbit.
</details>
<details><summary>Full solution</summary>
Define $H[\alpha]\mapsto K[\alpha]$. Subgroup inclusion makes it well-defined. Quotient topology gives continuity, and admissible local sheets show it is itself a covering onto the path-connected $E_K$. Composing with $E_K\to B$ returns $E_H\to B$. The chosen constant-path orbits correspond, so the factorisation is based.
</details>

<a id="section-202-exercise-8"></a>
### Exercise 8 {#section-204-exercise-8}
<a id="classification-of-coverings-and-deck-groups-ex-8"></a>
If $H$ is normal, verify directly that the maps $Hg\mapsto Hag$ form a transitive deck action of $G/H$.
<details><summary>Hint 1</summary>
Normality makes every $a$ a normalizer element.
</details>
<details><summary>Hint 2</summary>
Track the image of $H$ and the composition of two such maps.
</details>
<details><summary>Full solution</summary>
Normality makes every formula well-defined on right cosets, and its inverse is the formula with $a^{-1}$. Composition has parameter $ab$, while replacing $a$ by an element of its $H$-coset changes no map. Every coset $Ha$ is the image of $H$, so the action is transitive. The extension argument of Section 5 identifies these permutations with actual deck homeomorphisms.
</details>

<a id="section-215-exercise-9"></a>
### Exercise 9 {#section-217-exercise-9}
<a id="classification-of-coverings-and-deck-groups-ex-9"></a>
Explain why a single connected three-sheeted cover cannot have a deck transformation fixing exactly one sheet and exchanging the other two.
<details><summary>Hint 1</summary>
A fixed sheet in one fiber means a fixed point upstairs.
</details>
<details><summary>Hint 2</summary>
Distinguish a monodromy permutation from a deck permutation.
</details>
<details><summary>Full solution</summary>
Such a deck permutation would fix a fiber point, forcing the entire transformation to be the identity by Exercise 5. It therefore cannot exchange the other points. A loop's monodromy may be a transposition, as in Worked example 3; monodromy and deck transformations are different actions and obey different constraints.
</details>

<a id="section-228-exercise-10"></a>
### Exercise 10 {#section-230-exercise-10}
<a id="classification-of-coverings-and-deck-groups-ex-10"></a>
Why does this proof not classify the covers of an arbitrary path-connected space by every subgroup of its fundamental group?
<details><summary>Hint 1</summary>
Locate the neighborhoods used in the path-class topology.
</details>
<details><summary>Hint 2</summary>
Explain what can fail if loops in those neighborhoods remain nontrivial in the whole base.
</details>
<details><summary>Full solution</summary>
The proof needs path-connected admissible neighborhoods whose loops die in the base, at every point and inside smaller open neighborhoods. Without them, different paths in one neighborhood can give distinct path classes with the same endpoint; the proposed basic set need not map bijectively onto that neighborhood. The universal path-class construction is then not established as a covering, and subgroup realisation and the resulting bijection do not follow. Nothing here proves either an arbitrary-space classification or its negation in each special case.
</details>

<a id="section-241-companion-exploration-and-provenance"></a>
## Companion exploration and provenance {#section-243-companion-exploration-and-provenance}

[Three sheets, how many symmetries?](../../apps/lectures/covering-graphs.html) illustrates the distinction between monodromy and deck symmetries; [Lift, return, choose a root](../../apps/lectures/lift-return-roots.html) illustrates the closing criterion. These finite models supply examples, not the general proof.

New Euler exposition and exercises, CC BY-SA 4.0, British English. The construction expands the preceding covering-space readings, retaining their original source and learner identities. Book-scale comparison references are Hatcher, *Algebraic Topology*, Chapter 1, and May, *A Concise Course in Algebraic Topology*, the chapters on fundamental groups and coverings. Path and homotopy lifting are explicit preceding inputs.

<a id="section-247-sources"></a>
## Sources {#section-249-sources}

This treatment includes maps between covers and orbit decompositions. Primary author comparison sources are Allen Hatcher, [*Algebraic Topology*, Section 1.3](https://pi.math.cornell.edu/~hatcher/AT/ATchapters.html), and J. P. May, [*A Concise Course in Algebraic Topology*, Chapter 3](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf). Path and homotopy lifting are proved in the preceding chapter.

<a id="section-251-summary"></a>
## Summary {#section-253-summary}

Local path connectivity and semilocal simple connectivity turn endpoint path classes into a universal covering. Quotienting by each subgroup realises that subgroup, and lifted endpoint data prove uniqueness. Based covers correspond to subgroups; unbased covers correspond to conjugacy classes. The normalizer quotient computes deck symmetries and identifies regular coverings exactly with normal subgroups. CW complexes next supply a way to build spaces whose cell data can be used in homological calculations.
