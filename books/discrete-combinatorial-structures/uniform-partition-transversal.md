
# Uniform, Partition, and Transversal Families {#section-1-uniform-partition-and-transversal-families}

Uniform and partition matroids encode quotas. Transversal matroids encode distinct representatives: an element may be selected only if it can be assigned to a compatible slot, with no slot used twice. The third family contains the first two, but its exchange proof is subtler. A larger feasible selection need not reveal an immediately unused slot for a particular element; an alternating path may have to reassign several earlier choices before one new element fits.

This chapter builds all three families from explicit data, derives their rank and circuit behavior, and proves the transversal augmentation axiom from matching theory. It also separates three statements that are often conflated: Hall's criterion decides whether one specified set is independent, the deficiency formula computes the largest independent subset of a specified set, and a presentation describes the whole matroid but need not be unique.

<a id="section-5-prerequisites-and-conventions"></a>
## Prerequisites and conventions {#section-7-prerequisites-and-conventions}

We assume the independence axioms from [Independence, Augmentation, and Cryptomorphic Axioms](independence-augmentation-cryptomorphisms.md), rank and closure from [Rank, Submodularity, and Flats](rank-submodularity-flats.md), and finite bipartite matching, including alternating paths and Hall's theorem. All sets are finite.

A bipartite graph in this chapter has right vertex set $E$, which is the matroid ground set, and left vertex set $J$, whose vertices are called **slots**. For $X\subseteq E$, $N(X)\subseteq J$ is its set of neighboring slots. A matching **covers** $X$ if every element of $X$ is incident with a matching edge. Slots not used by that matching are free. Parallel edges are irrelevant, because feasibility records only which element-slot pairs are allowed.

<a id="section-11-1-uniform-matroids-forget-everything-except-size"></a>
## 1. Uniform matroids forget everything except size {#section-13-1-uniform-matroids-forget-everything-except-size}

For a finite set $E$ of size $n$ and $0\le r\le n$, the uniform matroid $U(r,E)$ declares

$I \text{independent} \Longleftrightarrow |I|\le r$.

Its rank function is

$r_U(X)=\min(|X|,r)$.

If $0<r<n$, its bases are the $r$-subsets, its circuits are the $(r+1)$-subsets, and its closure satisfies

$\operatorname{cl}(X)=X$ when $|X|<r$, and $\operatorname{cl}(X)=E$ when $|X|\ge r$.

The boundary cases deserve separate reading. In $U(0,E)$, every element is a loop and every singleton is a circuit. In $U(n,E)$, every element is a coloop, there are no circuits, and $\operatorname{cl}(X)=X$ for every $X$. The dual is $U(n-r,E)$: complements of $r$-element bases have size $n-r$, and every such complement occurs.

<a id="section-27-worked-example-the-first-failed-choice"></a>
### Worked example: the first failed choice {#section-29-worked-example-the-first-failed-choice}

In $U(3,\{a,b,c,d,e\})$, the set $\{a,c,e\}$ is a basis. Adding either $b$ or $d$ produces a four-element circuit. The set $\{a,c\}$ is independent but not spanning: its closure is itself. The set $\{a,c,e,d\}$ is dependent but spanning, and its closure is all of $E$. Dependence and spanning are therefore different properties even in the most symmetric matroid.

Uniformity is a strong assertion: it says every subset of a permitted size behaves identically. A rank-$r$ vector configuration is uniform only if every set of at most $r$ columns is independent. Ambient dimension alone does not establish that condition.

<a id="section-33-2-partition-matroids-express-disjoint-quotas"></a>
## 2. Partition matroids express disjoint quotas {#section-35-2-partition-matroids-express-disjoint-quotas}

Let

$E=E_1 ⊔ E_2 ⊔ \ldots ⊔ E_k$

be a genuine partition, and choose integer capacities $0\le c_i\le |E_i|$. Declare $I\subseteq E$ independent when

$|I\cap E_i|\le c_i$ for every $i$.

If independent $I,K$ satisfy $|I|<|K|$, then for some block $t$,

$|I\cap E_t|<|K\cap E_t|$.

Choose $e\in (K\cap E_t)\setminus I$. Since $K$ is feasible, $|K\cap E_t|\le c_t$; hence $I+e$ remains within capacity in block $t$ and changes no other block. This proves augmentation.

The rank formula separates by blocks:

$r(X)=\sum _i \min(|X\cap E_i|,c_i)$.

For the upper bound, no independent subset can take more than either $|X\cap E_i|$ or $c_i$ from block $i$. For equality, take exactly the smaller number from every block and unite the choices.

A nonempty set $C$ is a circuit exactly when, for one block $E_i$, it is a $(c_i+1)$-subset of that block. Indeed, such a set is minimally over capacity. A dependent set using several blocks contains one of these local violations and is not minimal unless it equals that violation. When $c_i=0$, the block elements are loops. When $c_i=|E_i|$, all of its elements are coloops relative to that direct summand.

Closure is also local. If $|X\cap E_i|<c_i$, no omitted member of $E_i$ is spanned by $X$. If $|X\cap E_i|\ge c_i$, every member of $E_i$ is in $\operatorname{cl}(X)$. Thus a saturated block closes all at once.

<a id="section-59-worked-example-admissions-by-category"></a>
### Worked example: admissions by category {#section-61-worked-example-admissions-by-category}

Let $E=P⊔Q⊔R$ with capacities $(2,1,2)$. Suppose

$P=\{p1,p2,p3\}$, $Q=\{q1,q2\}$, and $R=\{r1,r2\}$.

For $X=\{p1,p2,p3,q1,r1\}$, rank is

$\min(3,2)+\min(1,1)+\min(1,2)=4$.

The unique circuit contained in its $P$-part is $\{p1,p2,p3\}$. Since $P$ and $Q$ are saturated by $X$, closure adds $q2$ but adds no new $R$ element; explicitly, $\operatorname{cl}(X)=P\cup Q\cup \{r1\}$. A maximum independent subset of $X$ deletes one $p$ and retains all other elements.

The disjointness hypothesis matters. Imposing quotas on overlapping sets defines a hereditary family, but it need not satisfy augmentation. Transversal systems accommodate overlapping compatibility sets by a different mechanism: elements compete for distinct slots rather than independently consuming every quota they belong to.

<a id="section-73-3-partial-transversals-are-matchable-element-sets"></a>
## 3. Partial transversals are matchable element sets {#section-75-3-partial-transversals-are-matchable-element-sets}

Fix a family $(A_j)_{j\in J}$ of subsets of $E$. Think of slot $j$ as accepting precisely the elements in $A_j$. The associated bipartite graph has edge $j e$ when $e\in A_j$.

A set $I\subseteq E$ is a **partial transversal** if there is an injection $f:I\to J$ such that $e\in A_{f(e)}$ for every $e\in I$. Equivalently, the bipartite graph has a matching covering $I$. The partial transversals will be the independent sets of the **transversal matroid** presented by $(A_j)$.

The empty matching covers $\varnothing$, and restricting a matching proves heredity. Augmentation is the substantive point.

**Theorem 13.1 (Transversal augmentation).** If matchings $P$ and $Q$ cover sets $I$ and $K$, respectively, and $|I|<|K|$, then some $e\in K\setminus I$ can be added to $I$ and covered by a matching.

**Proof.** Restrict $P$ and $Q$ so that their right endpoints are exactly $I$ and $K$; thus $|P|=|I|<|K|=|Q|$. In the graph with edge set $P\cup Q$, every vertex has degree at most two. After common edges are removed from both matchings, each nontrivial component is an alternating path or an even alternating cycle. Cycles and paths with the same number of $P$- and $Q$-edges contribute zero to $|Q|-|P|$. Therefore some path has one more $Q$-edge than $P$-edge.

Such a path begins and ends with $Q$-edges. Its right-side endpoint is covered by $Q$ but not by $P$, hence belongs to $K\setminus I$; its left-side endpoint is a slot unused by $P$. Starting at that element and following the path reaches a free slot while alternating between $Q$ and $P$ edges. Flip membership along the path: delete its $P$-edges and insert its $Q$-edges. Internal vertices retain one matched edge, the terminal slot becomes used, and the starting element becomes covered. Every element of $I$ on the path loses one $P$-edge but gains one $Q$-edge; elements of $I$ off the path are unchanged. The new matching therefore covers $I+e$ for the starting $e\in K\setminus I$. ∎

The union-of-matchings formulation makes the count precise. Each component of $P\cup Q$ is an even cycle, an even path, or an alternating path with one matching contributing one extra edge. More $Q$-edges globally guarantees a component of the last type favoring $Q$.

<a id="section-89-worked-example-reassignment-is-necessary"></a>
### Worked example: reassignment is necessary {#section-91-worked-example-reassignment-is-necessary}

Let slots be $J=\{1,2,3\}$ with

$A_1=\{a,b\}$, $A_2=\{b,c\}$, and $A_3=\{c,d\}$.

The set $I=\{b\}$ may be stored with assignment $b\to 1$. To augment it by $a$, a direct attempt fails because $a$ accepts only the occupied slot $1$. The alternating path

$a-1-b-2$

ends at free slot $2$. Flipping the path moves $b$ from slot $1$ to slot $2$ and assigns $a\to 1$, producing a matching of $\{a,b\}$. The selected old element remains covered even though its certificate edge changes. By contrast, no four-element set can be independent because only three slots exist; reassignment repairs a poor certificate but cannot defeat a rank bound.

<a id="section-101-4-hall-s-inequalities-characterize-one-independent-set"></a>
## 4. Hall's inequalities characterize one independent set {#section-103-4-hall-s-inequalities-characterize-one-independent-set}

For a fixed $X\subseteq E$, Hall's theorem gives

$X\text{ is }\text{independent} \Longleftrightarrow |Y|\le |N(Y)| \text{ for every } Y\subseteq X$.

Necessity is immediate: a matching covering $X$ maps distinct elements of $Y$ to distinct members of $N(Y)$. Sufficiency is precisely Hall's theorem applied to the bipartite subgraph induced by $X\cup J$.

The quantifier over **every** subset $Y\subseteq X$ cannot be replaced by the single test $|X|\le |N(X)|$. A large union of neighborhoods may hide a deficient subfamily.

<a id="section-111-worked-counterexample-the-whole-set-count-passes"></a>
### Worked counterexample: the whole-set count passes {#section-113-worked-counterexample-the-whole-set-count-passes}

Take elements $X=\{a,b,c,d\}$ and slots $\{1,2,3,4\}$ with

$N(a)=N(b)=N(c)=\{1,2\}$, and $N(d)=\{3,4\}$.

Then $|N(X)|=4=|X|$, yet $Y=\{a,b,c\}$ has only two neighbors. No matching covers $X$; at most two of $a,b,c$ can be selected. The failed witness $Y$ is a certificate of dependence, not merely evidence that one greedy matching order was unfortunate.

A circuit of a transversal matroid is consequently a minimal nonempty set $C$ with $|N(C)|<|C|$. Minimality forces a sharper equality:

$|N(C)|=|C|-1$.

Indeed, removing any $e\in C$ gives an independent set, so $|C|-1\le |N(C-e)|\le |N(C)|$; dependence gives $|N(C)|\le |C|-1$.

<a id="section-125-5-the-deficiency-formula-computes-rank"></a>
## 5. The deficiency formula computes rank {#section-127-5-the-deficiency-formula-computes-rank}

For $S\subseteq E$, define its deficiency

$\operatorname{def}(S)=\max_{X\subseteq S} (|X|-|N(X)|)$.

The maximum includes $X=\varnothing$, so it is nonnegative. The matching deficiency theorem yields

$r(S)=|S|-\operatorname{def}(S)=\min_{X\subseteq S} (|S\setminus X|+|N(X)|)$.

Here is the upper bound without any black box. Fix $X\subseteq S$. Any matching covering an independent $I\subseteq S$ matches at most $|N(X)|$ elements of $I\cap X$; it also uses at most all $|S\setminus X|$ elements outside $X$. Hence

$|I|\le |S\setminus X|+|N(X)|$.

Taking the minimum over $X$ bounds rank. Equality follows by applying Hall's theorem after adjoining $\operatorname{def}(S)$ dummy slots adjacent to every element of $S$. For every $X\subseteq S$, the enlarged neighborhood has size

$|N(X)|+\operatorname{def}(S)\ge |X|$

for every nonempty $X$; the empty-set Hall inequality is automatic. Thus a matching covers all of $S$ in the enlarged graph. At most $\operatorname{def}(S)$ elements use dummy slots; deleting those matching edges leaves at least $|S|-\operatorname{def}(S)$ elements matched to original slots. The upper bound with a deficiency-maximizing $X$ shows that no more are possible. ∎

<a id="section-145-worked-rank-certificate"></a>
### Worked rank certificate {#section-147-worked-rank-certificate}

In the preceding counterexample, take $S=\{a,b,c,d\}$. For $X=\{a,b,c\}$, deficiency is $3-2=1$; no subset has larger deficiency. Therefore $r(S)=4-1=3$. One matching of size three is $a\to 1$, $b\to 2$, $d\to 3$. The deficient set proves optimality, while the matching proves attainability. Together they are a primal-dual rank certificate.

<a id="section-149-6-uniform-and-partition-matroids-are-transversal"></a>
## 6. Uniform and partition matroids are transversal {#section-151-6-uniform-and-partition-matroids-are-transversal}

To present $U(r,E)$, create $r$ slots, each adjacent to every element of $E$. A set can be matched exactly when its size is at most $r$.

To present a partition matroid with blocks $E_i$ and capacities $c_i$, create $c_i$ cloned slots for block $i$, each adjacent to every element of $E_i$ and to no element outside that block. Matchability is then equivalent to all block quotas.

The converse fails: transversal matroids need not be partition matroids. Small chain presentations can disguise that boundary—for example, $A_1=\{a,b\}$, $A_2=\{b,c\}$ presents the uniform matroid $U(2,3)$. A decisive certificate must use invariant circuit data rather than the mere appearance of overlapping acceptance sets. Transversal presentations can create intersecting circuits of different sizes, which no partition decomposition can realize: intersecting partition-matroid circuits lie in the same block and therefore have the same size.

<a id="section-157-worked-overlapping-circuits"></a>
### Worked overlapping circuits {#section-159-worked-overlapping-circuits}

Let slots be $\{1,2\}$ and take

$N(a)=N(b)=\{1\}$, $N(c)=\{1,2\}$, and $N(d)=\{2\}$.

The pair $\{a,b\}$ is a circuit: it has one neighbor and each singleton is matchable. The triple $\{a,c,d\}$ is also a circuit: its neighborhood has size two, while each pair is matchable ($a\to 1,d\to 2$; $a\to 1,c\to 2$; or $c\to 1,d\to 2$). These circuits share $a$ but have different sizes. They cannot be circuits of a partition matroid. In a partition matroid, intersecting nontrivial circuits lie in the same block and all have size $c_i+1$. Thus this transversal matroid is not a partition matroid.

That warning is important. Different families $(A_j)$ can present the same transversal matroid. Duplicating a slot can change the rank; deleting a redundant acceptance edge might change no independent set; and relabeling slots never changes the matroid. Claims about a transversal matroid must ultimately be phrased in terms of its independent sets, rank, circuits, or other invariant data—not in terms of one favored presentation unless that presentation remains part of the input.

<a id="section-167-7-duals-and-restrictions-of-the-quota-families"></a>
## 7. Duals and restrictions of the quota families {#section-169-7-duals-and-restrictions-of-the-quota-families}

The dual of a partition matroid is another partition matroid on the same blocks, with complementary capacities

$c_i^*=|E_i|-c_i$.

Indeed, a basis uses exactly $c_i$ elements of every block after blocks with redundant capacity have been normalized to $c_i\le |E_i|$. Its complement uses exactly $|E_i|-c_i$ elements there. Conversely, every choice at the complementary capacities is the complement of a primal basis. The uniform dual formula is the one-block special case.

Restriction also stays inside each family. Restricting $U(r,E)$ to $S$ gives $U(\min(r,|S|),S)$. Restricting a partition matroid intersects every block with $S$ and replaces $c_i$ by $\min(c_i,|E_i\cap S|)$. For a transversal presentation, restriction simply deletes the right-side vertices outside $S$; a matching covers a subset of $S$ before deletion exactly when it does afterward.

Contraction has a simple quota description but should be derived from rank rather than guessed. If an independent set $C$ is contracted in a partition matroid, block $i$ retains capacity $c_i-|C\cap E_i|$ on $E_i\setminus C$. If a dependent set is contracted, only its blockwise rank is absorbed, so the remaining capacity is $\max(0,c_i-|C\cap E_i|)$. The general contraction formula is proved in the next chapter. A transversal presentation after contraction may require changing more than one neighborhood; deleting a right vertex from one displayed presentation is restriction, not contraction.

<a id="section-179-worked-dual-quota"></a>
### Worked dual quota {#section-181-worked-dual-quota}

Take blocks of sizes four and three with capacities one and two. Primal bases choose one element from the first block and two from the second. Their complements choose three from the first and one from the second, so the dual capacities are $(3,1)$. An element in the first block is not a coloop in either matroid: the several choices within that block prevent any one element from belonging to every basis. The capacity numbers alone do not determine loops or coloops without the block sizes.

<a id="section-183-8-greedy-matching-is-not-the-matroid-greedy-theorem"></a>
## 8. Greedy matching is not the matroid greedy theorem {#section-185-8-greedy-matching-is-not-the-matroid-greedy-theorem}

A one-pass rule that assigns each arriving element to an arbitrary free compatible slot may fail to find a maximum matching. Alternating-path augmentation repairs earlier assignments. This is an algorithm for the independence oracle of a transversal matroid.

By contrast, the matroid greedy theorem sorts ground elements by weight and repeatedly asks whether the selected set remains independent. In a transversal matroid, answering that question may itself require a matching computation. The two uses of “greedy” operate at different layers.

<a id="section-189-worked-failure-of-irrevocable-slot-choice"></a>
### Worked failure of irrevocable slot choice {#section-191-worked-failure-of-irrevocable-slot-choice}

Let $N(x)=\{1,2\}$ and $N(y)=\{1\}$. If an irrevocable algorithm processes $x$ first and assigns it to slot $1$, it rejects $y$, obtaining size one. The maximum matching has size two: assign $x\to 2$ and $y\to 1$. An augmenting path from $y$ through occupied slot $1$ to $x$ and free slot $2$ corrects the initial choice.

The failure does not contradict matroid augmentation. The selected element set $\{x\}$ can be augmented by $y$; only the stored assignment must change. Independence belongs to the set, not to one certificate matching.

<a id="section-195-9-closure-can-be-tested-by-one-more-augmentation"></a>
## 9. Closure can be tested by one more augmentation {#section-197-9-closure-can-be-tested-by-one-more-augmentation}

Let $S\subseteq E$, let $P$ be a maximum matching from elements of $S$ to slots, and let $e\in E\setminus S$. By the rank definition,

$e\in \operatorname{cl}(S) \Longleftrightarrow r(S+e)=r(S)$.

In matching language, this says that no matching covering one more element exists after $e$ is admitted. Start an alternating search at $e$, traversing unused element-to-slot edges and then occupied slot-to-element edges of $P$. If the search reaches a free slot, flipping the path increases matching size, so $e\notin \operatorname{cl}(S)$. If it reaches no free slot, the reached vertices give an obstruction to augmentation and $e\in \operatorname{cl}(S)$. This remains valid when $P$ does not cover all of $S$, provided $P$ has maximum cardinality. Any augmenting path already present entirely inside $S$ would contradict maximality of $P$; consequently a new augmentation after admitting $e$ must start at $e$. Closure asks whether the maximum cardinality changes, not whether one arbitrary fixed assignment happens to cover $e$.

For a partition matroid the test collapses to block saturation. An omitted element is in the closure precisely when its block has already supplied its full capacity to a maximum independent subset of $S$. For a uniform matroid it collapses further: every omitted element is spanned once $S$ has rank $r$.

<a id="section-205-worked-closure-by-alternating-search"></a>
### Worked closure by alternating search {#section-207-worked-closure-by-alternating-search}

Let $N(a)=\{1\}$, $N(b)=\{1,2\}$, and $N(c)=\{2\}$. The set $S=\{a\}$ has matching $a\to 1$. Starting at $b$, path $b-2$ reaches a free slot, so $b\notin \operatorname{cl}(S)$ and rank rises from one to two. Starting at $c$ also reaches free slot $2$, so $c\notin \operatorname{cl}(S)$. But for $S=\{a,c\}$, both slots are occupied and the matching has maximum size two. Adding $b$ cannot raise rank beyond the number of slots; consequently $b\in \operatorname{cl}(\{a,c\})$. The conclusion concerns rank, although $\{a,c,b\}$ is dependent.

<a id="section-209-10-common-errors-and-diagnostic-certificates"></a>
## 10. Common errors and diagnostic certificates {#section-211-10-common-errors-and-diagnostic-certificates}

1. **Only the total neighborhood is checked.** Hall's condition quantifies over every subset; a deficient subset is the countercertificate.
2. **A stored matching is treated as immutable.** Alternating paths may reassign old elements while preserving the selected set.
3. **Slots and ground elements are interchanged silently.** The matroid here lives on $E$; slots certify independence but are not matroid elements.
4. **Overlapping quotas are called a partition matroid.** Partition blocks must be disjoint. A transversal presentation uses overlap through matching instead.
5. **Every minimal dependence is assumed to have arbitrary deficiency.** A circuit has deficiency exactly one, although a larger dependent set can have greater deficiency.
6. **A presentation is assumed unique.** Slot labels and even acceptance families can change without changing the presented independent sets.
7. **A failed sequential assignment is called dependence.** Only failure of every matching, certified by Hall deficiency, proves dependence.
8. **Uniformity is inferred from rank alone.** A rank-$r$ matroid need not contain every set of at most $r$ elements as an independent set.

<a id="section-220-comparing-matching-and-obstruction-certificates"></a>
## Comparing matching and obstruction certificates {#section-222-comparing-matching-and-obstruction-certificates}

<a id="section-222-worked-example-equal-total-rank-does-not-identify-a-pre"></a>
### Worked example: equal total rank does not identify a presentation {#section-224-worked-example-equal-total-rank-does-not-identify-a-pre}

Take ground set $\{a,b,c\}$ and two slots. In presentation $P$, let the first slot accept $a,b$ and the second accept $b,c$. Every singleton is matchable. The pairs $\{a,b\}$, $\{a,c\}$ and $\{b,c\}$ are matchable by using the two slots in the appropriate order. No three-set is matchable, so $P$ represents $U(2,3)$.

In presentation $Q$, let the first slot accept only $a,b$ and the second accept only $c$. The total rank is still two, witnessed by $\{a,c\}$. But $\{a,b\}$ is now a circuit: both elements compete for the first slot. Thus equal ground set, slot count and total rank do not prove that two presentations define the same matroid. One must compare all independent sets or an equivalent invariant such as the full rank function.

Conversely, giving both slots the entire ground set defines $U(2,3)$ again, despite looking different from $P$. The first presentation uses overlapping but unequal acceptance sets, while the complete presentation uses identical acceptance sets. These explicit comparisons separate three possibilities: different pictures can define the same matroid, the same total rank can hide different matroids, and individual assignment choices need not be part of the invariant at all.

<a id="section-230-a-certificate-for-the-rank-of-any-chosen-set"></a>
### A certificate for the rank of any chosen set {#section-232-a-certificate-for-the-rank-of-any-chosen-set}

The deficiency formula gives two finite objects that can be checked independently. A matching of size $m$ supplies a lower bound $r(S)\ge m$. A subset $X\subseteq S$ supplies the upper bound $r(S)\le |S\setminus X|+|N(X)|$. If these two integers agree, the rank is determined. Checking the matching means verifying distinct endpoints and allowed acceptance edges. Checking the obstruction means listing its neighborhood and counting it exactly.

For a dependent set, the obstruction need not be unique or equal to the whole set. The crowded-subfamily example illustrates this: the set $\{a,b,c\}$ controls the rank even though another element has additional neighbors. For a circuit, however, every proper subset is independent, so any Hall-deficient subset must be the circuit itself. This is the reason circuit deficiency is exactly one, rather than an unqualified consequence of failure to match an arbitrary set.

The distinction is useful algorithmically and mathematically. An unsuccessful attempt at one matching is neither object: it is not a maximum-size certificate and it does not necessarily exhibit a deficient subfamily. An alternating search repairs the assignment when possible and produces the reachable-set obstruction when no augmentation exists. The proof obligations concern the set of feasible assignments, rather than the history of one particular run.

<a id="section-238-11-solved-exercises"></a>
## 11. Solved exercises {#section-240-11-solved-exercises}

<a id="uniform-partition-transversal-ex-1"></a>
<a id="section-241-exercise-1-uniform-circuits-and-dual"></a>
### Exercise 1: uniform circuits and dual {#section-243-exercise-1-uniform-circuits-and-dual}

List the circuits of $U(2,\{1,2,3,4\})$ and identify its dual.


<details><summary>Hint 1</summary>

Uniform independence depends only on cardinality.

</details>

<details><summary>Hint 2</summary>

Take complements of every two-element basis to identify the dual bases.

</details>

<details><summary>Solution</summary>

**Solution.** Every set of size at most two is independent, and every three-set is minimally dependent. Thus the four circuits are $\{1,2,3\}$, $\{1,2,4\}$, $\{1,3,4\}$, and $\{2,3,4\}$. Bases have size two, and their complements also range over all two-subsets. Hence the dual is again $U(2,4)$.

</details>

<a id="uniform-partition-transversal-ex-2"></a>
<a id="section-265-exercise-2-partition-rank-and-closure"></a>
### Exercise 2: partition rank and closure {#section-267-exercise-2-partition-rank-and-closure}

Let blocks be $A=\{a1,a2,a3\}$ and $B=\{b1,b2\}$ with capacities $2$ and $1$. For $X=\{a1,a2,b1\}$, find rank and closure.


<details><summary>Hint 1</summary>

Apply the rank formula block by block.

</details>

<details><summary>Hint 2</summary>

A saturated block contributes every omitted member to closure, while an unsaturated block does not.

</details>

<details><summary>Solution</summary>

**Solution.** Both blocks are saturated, so $r(X)=\min(2,2)+\min(1,1)=3$. Adding $a3$ or $b2$ does not raise rank. Therefore $\operatorname{cl}(X)=E$. The circuits contained in $X+ a3$ and $X+b2$ are $\{a1,a2,a3\}$ and $\{b1,b2\}$, respectively.

</details>

<a id="uniform-partition-transversal-ex-3"></a>
<a id="section-289-exercise-3-disprove-an-overlapping-quota-matroid"></a>
### Exercise 3: disprove an overlapping-quota matroid {#section-291-exercise-3-disprove-an-overlapping-quota-matroid}

On $E=\{a,b,c\}$, impose capacities one on $\{a,b\}$ and on $\{b,c\}$. Show that the feasible family is not a matroid.


<details><summary>Hint 1</summary>

Compare the feasible singleton containing the overlap element with the feasible pair avoiding it.

</details>

<details><summary>Hint 2</summary>

Test each possible augmentation of the smaller set against both quotas.

</details>

<details><summary>Solution</summary>

**Solution.** Its feasible sets include $I=\{b\}$ and $K=\{a,c\}$. Both respect both quotas, and $|I|<|K|$. Adding $a$ to $I$ violates the first quota, while adding $c$ violates the second. No element of $K\setminus I$ augments $I$, so augmentation fails.

</details>

<a id="uniform-partition-transversal-ex-4"></a>
<a id="section-313-exercise-4-find-an-augmenting-path"></a>
### Exercise 4: find an augmenting path {#section-315-exercise-4-find-an-augmenting-path}

Let $N(a)=\{1\}$, $N(b)=\{1,2\}$, and $N(c)=\{2,3\}$. Starting from matching $a\to 1,b\to 2$, add $c$.


<details><summary>Hint 1</summary>

Inspect whether the newly arriving element has a free neighbouring slot.

</details>

<details><summary>Hint 2</summary>

If no direct insertion is available, search an alternating path through an occupied slot and its matched element.

</details>

<details><summary>Solution</summary>

**Solution.** Slot $3$ is free and adjacent to $c$, so the length-one augmenting path $c-3$ suffices; assign $c\to 3$. If $c$ had neighborhood $\{2\}$ and $b$ also had slot $3$, the path would be $c-2-b-3$, replacing $b\to 2$ by $b\to 3$ and inserting $c\to 2$.

</details>

<a id="uniform-partition-transversal-ex-5"></a>
<a id="section-337-exercise-5-use-a-hall-witness"></a>
### Exercise 5: use a Hall witness {#section-339-exercise-5-use-a-hall-witness}

Suppose $N(a)=N(b)=N(c)=\{1,2\}$ and $N(d)=\{2,3\}$. Is all of $\{a,b,c,d\}$ independent? Compute its rank.


<details><summary>Hint 1</summary>

The crowded three-element subset already supplies a Hall obstruction.

</details>

<details><summary>Hint 2</summary>

Exhibit a matching of size three and bound the deficiency of every possible subfamily.

</details>

<details><summary>Solution</summary>

**Solution.** The subset $\{a,b,c\}$ has three elements and only two neighbors, so the four-set is not independent. Its deficiency is at least one. No subset has deficiency two: the three crowded elements have deficiency one, and adding $d$ expands the neighborhood to three while increasing size to four, still deficiency one. Thus rank is $4-1=3$. For example, match $a\to 1$, $b\to 2$, and $d\to 3$.

</details>

<a id="uniform-partition-transversal-ex-6"></a>
<a id="section-361-exercise-6-prove-the-circuit-deficiency-equality"></a>
### Exercise 6: prove the circuit deficiency equality {#section-363-exercise-6-prove-the-circuit-deficiency-equality}

Let $C$ be a circuit in a transversal matroid. Prove $|N(C)|=|C|-1$.


<details><summary>Hint 1</summary>

Every proper subset of a circuit is matchable.

</details>

<details><summary>Hint 2</summary>

Hall's deficient subset cannot be proper, and deletion of one element supplies the opposite cardinality bound.

</details>

<details><summary>Solution</summary>

**Solution.** Dependence and Hall's condition give some deficient subset, but minimal dependence says every proper subset is matchable. In particular, for each $e\in C$, $C-e$ has a matching and therefore $|C|-1\le |N(C-e)|\le |N(C)|$. Since $C$ itself cannot be matched, Hall gives $|N(C)|<|C|$. Integer bounds force $|N(C)|=|C|-1$.

</details>

<a id="uniform-partition-transversal-ex-7"></a>
<a id="section-385-exercise-7-present-a-partition-matroid"></a>
### Exercise 7: present a partition matroid {#section-387-exercise-7-present-a-partition-matroid}

Give a transversal presentation for blocks $E_1=\{a,b,c\}$, $E_2=\{d,e\}$ with capacities $2,1$, and verify $\{a,c,e\}$ is a basis.


<details><summary>Hint 1</summary>

Create separate cloned slots for the two disjoint quota blocks.

</details>

<details><summary>Hint 2</summary>

Match each chosen element to a slot of its own block and compare its size with total capacity.

</details>

<details><summary>Solution</summary>

**Solution.** Create slots $1a,1b$ adjacent to all of $E_1$, and slot $2a$ adjacent to all of $E_2$. Match $a\to 1a$, $c\to 1b$, and $e\to 2a$. All three slots are used, so no fourth element can be added. The matroid rank is $2+1=3$, making the displayed independent three-set a basis.

</details>

<a id="uniform-partition-transversal-ex-8"></a>
<a id="section-409-exercise-8-distinguish-a-certificate-from-an-assignment"></a>
### Exercise 8: distinguish a certificate from an assignment {#section-411-exercise-8-distinguish-a-certificate-from-an-assignment}

For neighborhoods $N(x)=\{1,2\}$ and $N(y)=\{1\}$, an algorithm stores $x\to 1$ and reports that $y$ cannot be added. Diagnose and repair the report.


<details><summary>Hint 1</summary>

The report freezes a certificate that is allowed to change.

</details>

<details><summary>Hint 2</summary>

Trace an alternating path ending at the unused slot and flip its matching edges.

</details>

<details><summary>Solution</summary>

**Solution.** The report checks only a fixed assignment, not independence of $\{x,y\}$. The alternating path $y-1-x-2$ ends at free slot $2$. Flipping it gives $y\to 1,x\to 2$, a matching covering both elements. A valid dependence report would need a Hall-deficient subset; none exists here because every singleton has a neighbor and $\{x,y\}$ has neighborhood $\{1,2\}$.

</details>

<a id="uniform-partition-transversal-ex-9"></a>
<a id="section-433-exercise-9-certify-rank-in-two-ways"></a>
### Exercise 9: certify rank in two ways {#section-435-exercise-9-certify-rank-in-two-ways}

Let $N(a)=N(b)=\{1\}$, $N(c)=\{1,2\}$ and $N(d)=\{2\}$. Find the rank of $\{a,b,c,d\}$ using both a matching and a deficiency witness, and list its circuits.

<details><summary>Hint 1</summary>

Only two slots are available, but the parallel pair gives a stronger obstruction than the total slot count for some subsets.

</details>
<details><summary>Hint 2</summary>

After listing the pair circuit, inspect triples that do not contain it and test all their proper subsets.

</details>
<details><summary>Solution</summary>

The matching $a\to1,d\to2$ has size two. The whole four-set has neighborhood $\{1,2\}$ and deficiency two, giving upper bound two; hence the rank is exactly two. The pair $\{a,b\}$ is a circuit. The triples $\{a,c,d\}$ and $\{b,c,d\}$ are circuits because each has three elements and two neighbors while all its pairs are matchable. The other triples contain $\{a,b\}$ and are not minimal. The four-set also contains smaller circuits. These are therefore all three circuits.

</details>

<a id="uniform-partition-transversal-ex-10"></a>
<a id="section-454-exercise-10-dependent-contraction-of-a-quota-block"></a>
### Exercise 10: dependent contraction of a quota block {#section-456-exercise-10-dependent-contraction-of-a-quota-block}

Let $P=\{p_1,p_2,p_3\}$ have capacity one and $Q=\{q_1,q_2,q_3\}$ have capacity two. Contract $C=\{p_1,p_2,q_1\}$. Give the remaining ground set, capacities, loops and bases.

<details><summary>Hint 1</summary>

The two contracted elements from $P$ absorb only one unit of rank.

</details>
<details><summary>Hint 2</summary>

Use the rank difference separately in each block; the surviving capacities are zero and one.

</details>
<details><summary>Solution</summary>

The remaining ground set is $\{p_3,q_2,q_3\}$. The contracted rank is $1+1=2$, even though $|C|=3$. The remaining capacity in $P$ is $\max(0,1-2)=0$, so $p_3$ is a loop. The remaining capacity in $Q$ is $2-1=1$, so the bases are $\{q_2\}$ and $\{q_3\}$. For any retained set $X$, the contraction rank is $\min(|X\cap\{q_2,q_3\}|,1)$, confirming that the extra dependent contracted $P$ element absorbs no additional rank.

</details>

<a id="section-474-chapter-summary-and-dependencies"></a>
## Chapter summary and dependencies {#section-476-chapter-summary-and-dependencies}

Uniform matroids impose one global cardinality bound. Partition matroids sum independent capacities over disjoint blocks, giving explicit rank, circuit, closure, and dual behavior. Transversal matroids replace disjoint quotas by matchability into compatible slots. Alternating paths prove augmentation, Hall inequalities characterize each independent set, and the deficiency formula computes rank with a matching and a deficient subset as complementary certificates. Uniform and partition matroids have direct transversal presentations, but a presentation is not canonical and a failed fixed assignment is not a proof of dependence.

The exchange vocabulary used here comes from [Bases, Fundamental Circuits, and Strong Exchange](bases-strong-exchange.md). Deletion and contraction of these families are developed next in [Deletion, Contraction, and Minor Recurrences](deletion-contraction-minors.md). Representability questions require the separate field-sensitive contract in [Linear Representability and Field Dependence](linear-representability-fields.md).

<a id="section-480-source-and-verification-note"></a>
## Sources {#section-482-source-and-verification-note}

For the finite bipartite Hall-type criterion used here, see J. H. van Lint and R. M. Wilson, *A Course in Combinatorics*, 2nd ed. (2001), Chapter 5; [edition record](https://doi.org/10.1017/CBO9780511987045). This modern locator makes no historical-priority claim.


<a id="uniform-partition-transversal-summary"></a>
<a id="section-486-summary"></a>
## Summary {#section-488-summary}

Uniform and partition matroids enforce cardinality capacities, while transversal matroids express assignability to distinct compatible slots. Alternating paths prove augmentation and repair certificates without discarding selected elements. A matching and a Hall-deficiency witness give matching rank bounds; for circuits the deficient set must be the circuit itself. Full independent-set or rank data, rather than total rank or presentation appearance, determine the matroid.
