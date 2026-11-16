
# Independence, Augmentation, and Cryptomorphic Axioms

Many finite structures come with a notion of a feasible partial choice. A set of vectors may be linearly independent, a set of graph edges may be acyclic, and a selection from partitioned categories may obey a capacity in every category. Each property survives deletion. Only some of them support a reliable exchange: when one feasible choice is smaller than another, an element of the larger choice can enlarge the smaller one. That single comparison is the dividing line between a general independence system and a matroid.

This chapter builds matroids from independence axioms and then reconstructs the same objects from bases and rank. These descriptions are **cryptomorphic**: they use different primitive data, yet determine exactly the same structures. The point is not terminological variety. One description can make construction obvious, another can shorten a proof, and a third can expose an invalid inference.

## Prerequisites and conventions

We assume finite sets, functions, elementary graph theory, and the linear-algebra exchange lemma. All ground sets are finite. This matters: maximal independent subsets then exist by repeated addition, and every maximum in a rank definition is attained. $P(E)$ denotes the power set of $E$. Cardinality is written $|A|$.

A family is never called a matroid merely because its members have been named “independent.” Every use of matroid rank, closure, circuit elimination, or greedy optimality must be backed by an axiom system already verified.

## Entry examples from the first-course bridge

The [matroid independence bridge](#/books/discrete-mathematics-proof-counting-structure/matroid-independence-bridge) begins with recognition and greedy choice. Its original examples, proofs, and solutions remain available. Here the same recognition questions lead into cryptomorphic axioms. The ground elements are records with labels: coincident vectors, parallel graph edges, or talks with equal values need not be the same element. Before comparing two independent sets, identify that common ground set and the exact feasibility test.

### Worked example 7.1: partitioned choices and the existential quantifier

Let the ground set consist of algebra talks $a_1,a_2,a_3$ and geometry talks $b_1,b_2$. Permit at most two algebra talks and one geometry talk. Take $I=\{a_1,b_1\}$ and $J=\{a_2,a_3,b_2\}$. Both are feasible and $|I|=2<3=|J|$. Either $a_2$ or $a_3$ augments $I$, because the algebra count rises from one to two while the geometry count stays one. The element $b_2$ does not augment it: the geometry count would become two. Thus the example satisfies augmentation even though one candidate fails. The theorem promises the existence of an augmenting element, not that every candidate works.

These capacities concern disjoint blocks. If a talk belonged simultaneously to overlapping quota groups, the block-count proof would no longer apply. The original overlapping-quota exercise below gives an explicit failure; one should not repair that proof by silently assigning an overlapping object to a different block.

### Worked example 7.2: labels, zero columns, and parallel columns

Over $\mathbb Q$, take indexed vectors $a=(1,0)$, $b=(2,0)$, $c=(0,1)$, and $\ell=(0,0)$. The singleton $\{\ell\}$ is dependent, so no independent set contains $\ell$. Every other singleton is independent. Of the pairs, $\{a,b\}$ is dependent because $b=2a$, whereas $\{a,c\}$ and $\{b,c\}$ have nonzero determinants and are independent. Every three-set is dependent in a two-dimensional space. Consequently the bases are exactly $\{a,c\}$ and $\{b,c\}$, both of size two.

Replacing the indexed family by a set of directions would identify $a,b$ and change the ground set. Matroid representation keeps their distinct labels, recording the two-element circuit instead. This matters when bases are counted or a particular element is deleted. The zero vector likewise remains a ground element even though it contributes no rank.

### Worked example 7.3: forest edges and matching edges on one graph

Let a triangle have edges $a=12,b=23,c=31$, with a tail $d=34$. Under forest independence, the bases are $\{a,b,d\}$, $\{a,c,d\}$, and $\{b,c,d\}$. Each spans all four vertices with three edges and no cycle. Any independent set missing the tail can add it, while a forest using all three triangle edges is impossible. This is the graphic matroid described above.

Now use the same four edge labels but require a matching. The set $\{b\}$ is maximal: every other edge shares endpoint two or three with $b$. Yet $\{a,d\}$ is a matching of size two. No element of that larger set augments $\{b\}$. The matching family therefore fails augmentation although the forest family on the same ground set satisfies it. A graph picture does not select an independence notion automatically.

An equally important warning is that equal sizes of the maximal sets of the whole ground set do not by themselves establish a matroid. Augmentation must hold on every pair of independent sets, equivalently equal basis sizes must hold inside every restriction. The new four-element exercise makes that local failure visible even when the global maximal sets both have size two.


## 1. Independence systems record deletion-safe feasibility

An **independence system** is a pair $(E,I)$ in which $E$ is a finite ground set and $I\subseteq P(E)$ satisfies:

1. $\varnothing \in I$;
2. if $J\in I$ and $I'\subseteq J$, then $I'\in I$.

The second condition is **heredity**. Members of $I$ are independent, and all other subsets of $E$ are dependent. Some authors replace the first axiom by “$I$ is nonempty”; heredity then forces $\varnothing \in I$. Stating the empty-set condition explicitly makes invalid input easier to diagnose.

For $A\subseteq E$, an independent set $B\subseteq A$ is a **basis of $A$** if it is inclusion-maximal among independent subsets of $A$. At this point, “basis” means maximal, not maximum-cardinality. Different bases of one set can have different sizes.

### Worked nonexample: stable vertices of a path

Let $E=\{a,b,c\}$ be the vertices of the path $a-b-c$, and declare a vertex set independent when it contains no adjacent pair. The family is hereditary:

$I=\{\varnothing ,\{a\},\{b\},\{c\},\{a,c\}\}$.

The sets $\{b\}$ and $\{a,c\}$ are both bases of $E$. The first has size one and the second size two. This is not a defect in the definition of an independence system; it is evidence that heredity alone does not coordinate different maximal choices.

Matchings give the analogous failure. In a path of three edges, the middle edge alone is a maximal matching, while the two outer edges form a larger matching.

## 2. Augmentation is the missing coordination law

A **matroid** is an independence system $(E,I)$ satisfying the augmentation axiom:

> If $I,J\in I$ and $|I|<|J|$, there exists $e\in J\setminus I$ such that $I\cup \{e\}\in I$.

The hypotheses are all load-bearing. Both sets must be independent; the inequality must be strict; and the augmenting element must come from $J\setminus I$. The conclusion does not say that every element of $J\setminus I$ works.

### Equal-size basis theorem

**Theorem 7.1.** In a finite matroid, all bases of a fixed subset $A\subseteq E$ have the same cardinality.

**Proof.** Let $B_1,B_2$ be bases of $A$. If $|B_1|<|B_2|$, augmentation supplies $e\in B_2\setminus B_1$ for which $B_1\cup \{e\}$ is independent. This set lies in $A$, contradicting maximality of $B_1$ there. Thus $|B_1|\ge |B_2|$. Interchanging the two bases gives the reverse inequality. ∎

The common size is the **rank of $A$**. Notice the order of logic: augmentation proves that maximal size is well defined; one must not silently use equal-size bases while trying to establish augmentation.

### Extension lemma

**Lemma 7.2.** If $I$ is independent and $I\subseteq A\subseteq E$, then $I$ extends to a basis of $A$.

**Proof.** If $I$ is not maximal in $A$, add an element of $A\setminus I$ that preserves independence. Each addition strictly increases cardinality, and at most $|A|-|I|$ additions are possible. The final set is independent and maximal in $A$. ∎

Finiteness makes this proof constructive. No choice principle is hidden in it.

## 3. Four families and two boundaries

The axiom is easiest to trust after seeing why it holds in structurally different examples.

### Uniform matroids

For integers $0\le r\le n$, the uniform matroid $U(r,n)$ has an $n$-element ground set and declares $I$ independent exactly when $|I|\le r$. If $|I|<|J|\le r$, every element of $J\setminus I$ augments $I$. Its bases are all $r$-subsets when $r\le n$.

### Partition matroids

Let $E=E_1⊔⋯⊔E_k$ be a genuine partition and let $0\le c_i\le |E_i|$ be integer capacities. A set $I$ is independent when $|I\cap E_i|\le c_i$ for every block. If $|I|<|J|$, summing block counts shows that some block has $|I\cap E_t|<|J\cap E_t|$. Choose $e\in (J\cap E_t)\setminus I$. Because $J$ respects the capacity, adding $e$ to $I$ does too.

The disjointness of the blocks matters. Overlapping capacity constraints can define useful hereditary families, but their intersection need not be a matroid.

### Graphic matroids

Let $G=(V,E)$ be a finite graph and call an edge set independent when it contains no cycle. For forests $F_1,F_2$, suppose $|F_1|<|F_2|$. On the full vertex set, a forest with $c$ connected components has $|V|-c$ edges. Hence $F_1$ has more components than $F_2$. Some edge of $F_2$ joins two distinct components of $(V,F_1)$; otherwise every component of $F_2$ would lie inside a component of $F_1$, contradicting the component count. Adding that edge to $F_1$ cannot create a cycle.

### Linear matroids

Index a finite list of vectors over a specified field by $E$. Declare a set independent when its indexed vectors are linearly independent. If $I$ and $J$ are independent and $|I|<|J|$, then $\operatorname{span}(I)$ has smaller dimension than $\operatorname{span}(J)$. At least one vector indexed by $J$ lies outside $\operatorname{span}(I)$; adding it preserves linear independence.

The field is part of the data. Reading the same integer matrix over two fields can change which indexed columns are dependent.

### What the examples do not imply

Stable vertex sets and matchings are hereditary but fail augmentation. Intersections of two matroids on the same ground set can also fail augmentation: common independent sets may be trapped by two different constraints. The name of a construction is never a substitute for an exchange proof.

## 4. Bases as primitive data

Let $B$ be a nonempty family of subsets of $E$. The **basis exchange axiom** says:

> If $B_1,B_2\in B$ and $x\in B_1\setminus B_2$, then some $y\in B_2\setminus B_1$ makes $(B_1\setminus \{x\})\cup \{y\}$ a member of $B$.

For matroid bases this follows from independence augmentation. Remove $x$ from $B_1$. Its size is one less than $B_2$, so augmentation supplies $y\in B_2\setminus (B_1\setminus \{x\})$. Since $x\notin B_2$, this is precisely an element of $B_2\setminus B_1$. The augmented set has the full basis size, so it is a basis.

The converse is less immediate because basis data do not list all independent sets. We give the finite transport argument in full.

First, the basis exchange axiom forces all members of $B$ to have the same size. Starting with $B_1,B_2$, if $B_1\setminus B_2$ is nonempty, exchange an element of it for an element of $B_2\setminus B_1$. The new basis has one more element in common with $B_2$. Repeating this finite step produces a basis $C\subseteq B_2$ with $|C|=|B_1|$. If the inclusion were proper, applying basis exchange from $B_2$ toward $C$ would demand an element of $C\setminus B_2=\varnothing$, impossible. Hence $C=B_2$ and $|B_1|=|B_2|$.

We next need a protected one-sided exchange.

**Lemma 7.3 (Multiple transport).** If $B_1,B_2\in B$ and $X\subseteq B_1$, there is $Y\subseteq B_2$ with $|Y|=|X|$ such that

$(B_1\setminus X)\cup Y\in B$.

**Proof.** Begin with $C=B_1$. For each $x\in X\setminus B_2$, apply basis exchange from the current $C$ toward $B_2$. The element $x$ is still in $C\setminus B_2$: earlier steps delete only earlier members of $X\setminus B_2$, and insert elements of $B_2$. Exchange it for some $y\in B_2\setminus C$. No element of $B_1\setminus X$ is ever deleted. After all such steps, $C$ is a basis, contains $B_1\setminus X$, and lies inside $(B_1\setminus X)\cup B_2$. Set $Y=C\setminus (B_1\setminus X)$. Then $Y\subseteq B_2$, the displayed union equals $C$, and equal basis sizes give $|Y|=|X|$. ∎

Now define a set to be independent when it is contained in some member of $B$. Heredity is automatic. Let independent $I,J$ satisfy $|I|<|J|$, and choose bases $B_1\supseteq I$ and $B_2\supseteq J$. Apply the lemma with $X=B_1\setminus I$. It gives a basis $I\cup Y$, where $Y\subseteq B_2\setminus I$ and

$|Y|=|B_1|-|I|$.

The set $B_2\setminus J$ has size $|B_2|-|J|$, which is strictly smaller because the bases have equal size and $|I|<|J|$. Therefore $Y$ cannot lie entirely in $B_2\setminus J$; choose $e\in Y\cap (J\setminus I)$. Then $I+e\subseteq I\cup Y$, so $I+e$ is independent. This is augmentation.

Thus subsets of the basis family form a matroid. Conversely, the maximal independent sets of a matroid are exactly its bases, so no information is lost. Every protected element and every termination step is visible in the proof; no unproved “exchange until agreement” remains.

## 5. Rank as primitive data

A function $r:P(E)\to Z$ is a **matroid rank function** when, for all $A,B\subseteq E$,

1. $0\le r(A)\le |A|$;
2. $A\subseteq B$ implies $r(A)\le r(B)$;
3. $r(A\cup B)+r(A\cap B)\le r(A)+r(B)$.

The third axiom is submodularity. It says that the rank gained from combining two regions is discounted by what they already share.

Given a matroid, define

$r(A)=\max\{|I|: I\subseteq A \text{ and } I\text{ is }\text{independent}\}$.

The first two rank axioms are immediate. Submodularity receives a full proof in the rank chapter. Conversely, start from a function satisfying the three displayed axioms and declare

$I=\{A\subseteq E:r(A)=|A|\}$.

We verify that this really produces a matroid.

First, submodularity with $B=\{e\}$ gives the one-element bound

$r(A\cup \{e\})\le r(A)+1$.

Adding the elements of $X\setminus Y$ one at a time yields

$r(X)\le r(Y)+|X\setminus Y|$ whenever $Y\subseteq X$.

If $r(X)=|X|$ and $Y\subseteq X$, then

$|X|=r(X)\le r(Y)+|X\setminus Y|\le |Y|+|X\setminus Y|=|X|$.

Every inequality is equality, so $r(Y)=|Y|$; heredity holds.

For augmentation, let $I,J$ satisfy $r(I)=|I|$, $r(J)=|J|$, and $|I|<|J|$. Suppose no $e\in J\setminus I$ augments $I$. Then $r(I\cup \{e\})=r(I)$ for each such $e$. Submodularity gives diminishing returns: once an element has zero rank gain over $I$, it has zero gain over every larger set containing $I$. Adding all elements of $J\setminus I$ therefore gives

$r(I\cup J)=r(I)=|I|$.

But monotonicity gives $|J|=r(J)\le r(I\cup J)=|I|$, a contradiction. Thus one element augments $I$.

Rank data and independence data therefore determine one another exactly.

## 6. A cryptomorphism is a translation contract

Independence, bases, and rank emphasize different questions:

- independence axioms are best for verifying deletion-safe constructions;
- basis exchange is best for comparing complete feasible choices;
- rank is best for inequalities, closure, and minors.

Cryptomorphism does not mean that any formula resembling rank is valid. To translate a proposed function into a matroid, all rank axioms must be checked. Nor does it mean proofs may mix primitives without translation. If a proof begins with only circuit axioms, it must first establish the independence or rank facts it later uses.

### Small rank-table audit

On $E=\{a,b,c\}$, define $r(\varnothing )=0$, every singleton to have rank one, every pair rank two, and $r(E)=1$. The bounds and monotonicity already fail because a pair has rank two while its superset has rank one. This is not a “strange matroid”; it is not a rank function.

Now define $r(A)=\min(|A|,2)$. Bounds and monotonicity hold, and diminishing returns is immediate: an added element raises rank exactly until size two. This is the rank of $U(2,3)$.

## 7. Common proof failures

1. **Maximal becomes maximum.** Heredity alone does not equalize maximal sets; the path stable-set system is the smallest warning.
2. **The wrong exchange quantifier appears.** Augmentation promises at least one element, not every element.
3. **A basis proof assumes equal sizes too early.** Equal size is a consequence of augmentation or a verified basis cryptomorphism.
4. **A rank-shaped function is accepted after checking only bounds.** Monotonicity and submodularity are independent obligations.
5. **Finite extension is treated as invisible.** State why the addition process ends and where the final maximal set lives.
6. **A familiar noun imports a theorem.** “Matching independence” and “stable-set independence” do not inherit matroid exchange.

## 8. Solved exercises

### Exercise 1: locate the failed quantifier
<a id="independence-augmentation-cryptomorphisms-ex-1"></a>

For stable sets of the path $a-b-c$, list all independent sets and give every ordered augmentation failure $(I,J)$ with $|I|<|J|$.

<details>
<summary>Hint 1</summary>

**Hint.** List feasible singletons and pairs; only compare sets with strictly different sizes.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The only feasible pair is $\{a,c\}$. Test each singleton against that pair.

</details>

<details>
<summary>Solution</summary>

**Solution.** The independent sets are $\varnothing ,\{a\},\{b\},\{c\},\{a,c\}$. The only larger set of size two is $J=\{a,c\}$. The empty set augments by either endpoint. The singleton $\{a\}$ is already contained in $J$, so $c$ augments it; similarly $a$ augments $\{c\}$. For $I=\{b\}$, both candidates $a,c$ create an edge, so neither augments. Thus the only ordered failure is $(\{b\},\{a,c\})$. Reversing the order does not meet the strict size hypothesis.

</details>

### Exercise 2: truncation preserves matroids
<a id="independence-augmentation-cryptomorphisms-ex-2"></a>

Let $M=(E,I)$ be a matroid of rank $r$, and choose $0\le k\le r$. Define $I_k=\{I\in I:|I|\le k\}$. Prove $(E,I_k)$ is a matroid and identify its rank function.

<details>
<summary>Hint 1</summary>

**Hint.** Check the empty set and heredity before considering augmentation.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** An augmenting set $I+e$ has size at most $|J|\le k$. For rank, extend independent sets inside the subset under consideration.

</details>

<details>
<summary>Solution</summary>

**Solution.** The empty set belongs to $I_k$, and subsets of a member remain independent in $M$ and have size at most $k$, so heredity holds. If $I,J\in I_k$ and $|I|<|J|$, augmentation in $M$ supplies $e\in J\setminus I$ with $I+e\in I$. Its size is at most $|J|\le k$, so it lies in $I_k$. Hence the truncation is a matroid. Inside $A$, the largest allowed independent size is the smaller of the old rank and $k$, so $r_k(A)=\min(r_M(A),k)$.

</details>

### Exercise 3: overlapping quotas can fail
<a id="independence-augmentation-cryptomorphisms-ex-3"></a>

On $E=\{a,b,c\}$, impose the two constraints $|I\cap \{a,b\}|\le 1$ and $|I\cap \{b,c\}|\le 1$. Show the feasible family is hereditary but not a matroid.

<details>
<summary>Hint 1</summary>

**Hint.** Deletion preserves both upper quotas, so concentrate on augmentation.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare $\{b\}$ with $\{a,c\}$, then test the two possible augmentations separately.

</details>

<details>
<summary>Solution</summary>

**Solution.** Removing elements cannot increase either constrained count, so the family is hereditary. The sets $\{b\}$ and $\{a,c\}$ are feasible. The first has smaller size, but adding $a$ violates the first quota and adding $c$ violates the second. Augmentation fails. Each quota alone defines a partition-type matroid after adding a complementary block, but the intersection of their feasible families need not be a matroid.

</details>

### Exercise 4: reconstruct independence from rank
<a id="independence-augmentation-cryptomorphisms-ex-4"></a>

Let $E=\{1,2,3,4\}$ and $r(A)=\min(|A|,2)$. Determine the independent sets, bases, and rank of every three-element subset.

<details>
<summary>Hint 1</summary>

**Hint.** A subset is independent exactly when its rank equals its cardinality.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Solve $\min(|A|,2)=|A|$; maximal such sets have size two.

</details>

<details>
<summary>Solution</summary>

**Solution.** A set is independent exactly when $r(A)=|A|$, which holds for sizes zero, one, and two. Thus the independent sets are all subsets of size at most two. Every maximal independent set has size two, so the bases are the six pairs. Any three-element set $T$ has $r(T)=\min(3,2)=2$. The resulting matroid is $U(2,4)$.

</details>

### Exercise 5: direct-sum augmentation
<a id="independence-augmentation-cryptomorphisms-ex-5"></a>

Suppose $M_1=(E_1,I_1)$ and $M_2=(E_2,I_2)$ are matroids on disjoint ground sets. Declare $I\subseteq E_1\cup E_2$ independent when $I\cap E_i\in I_i$ for $i=1,2$. Prove this is a matroid and compute its rank on $A\subseteq E_1\cup E_2$.

<details>
<summary>Hint 1</summary>

**Hint.** Split the two independent sets over the two disjoint ground sets.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The strict inequality of total sizes forces a strict inequality in one component; use its augmentation axiom.

</details>

<details>
<summary>Solution</summary>

**Solution.** Empty membership and heredity hold componentwise. If independent $I,J$ satisfy $|I|<|J|$, then for some component $t$, $|I\cap E_t|<|J\cap E_t|$; otherwise summing two opposite inequalities would give $|I|\ge |J|$. Augmentation in $M_t$ supplies $e\in (J\cap E_t)\setminus I$ that augments the $t$-component. The other component is unchanged, so $I+e$ is independent. A maximum independent subset of $A$ is obtained by choosing a basis independently in each component, hence $r(A)=r_1(A\cap E_1)+r_2(A\cap E_2)$.

</details>

## Chapter summary

An independence system supplies empty-set membership and heredity. Augmentation is the additional comparison law that equalizes bases and creates a matroid. Uniform, partition, graphic, and linear families satisfy it for different structural reasons; stable sets, matchings, overlapping quotas, and matroid intersections warn against inference by analogy. Bases and rank are cryptomorphic descriptions: basis exchange reconstructs all independent sets, while normalized monotone submodular rank reconstructs augmentation. Every translation has hypotheses, and verifying those hypotheses is part of the proof rather than bookkeeping.


## Further supported exercises

### Exercise 6: further structure
<a id="independence-augmentation-cryptomorphisms-ex-6"></a>

On \(E=\{a,b,c,d\}\), let the feasible sets be all subsets of either \(\{a,b\}\) or \(\{c,d\}\). Show that all globally maximal feasible sets have equal size, but augmentation fails.

<details>
<summary>Hint 1</summary>

**Hint.** Identify the two maximal feasible sets, then try a singleton from one against the pair from the other.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use $I=\{a\}$, $J=\{c,d\}$; neither mixed pair is feasible.

</details>

<details>
<summary>Solution</summary>

**Solution.** The family is hereditary and its maximal members are exactly $\{a,b\}$ and $\{c,d\}$, both of size two. But $I=\{a\}$ and $J=\{c,d\}$ are feasible with sizes one and two, while $\{a,c\}$ and $\{a,d\}$ lie in neither listed maximal set. Thus neither candidate augments $I$. Equal global maximal sizes are insufficient; inside $\{a,c,d\}$, maximal feasible sets already have unequal sizes.

</details>

### Exercise 7: further structure
<a id="independence-augmentation-cryptomorphisms-ex-7"></a>

For the indexed vectors \(a=(1,0),b=(2,0),c=(0,1),\ell=(0,0)\) over \(\mathbb Q\), list every independent set and every basis. What information is lost by discarding \(\ell\)?

<details>
<summary>Hint 1</summary>

**Hint.** Check singletons and determinants of pairs; there are no independent triples in a two-dimensional space.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The pair $\{a,b\}$ is dependent. The zero vector cannot belong to an independent set.

</details>

<details>
<summary>Solution</summary>

**Solution.** The independent sets are $\varnothing,\{a\},\{b\},\{c\},\{a,c\},\{b,c\}$. The last two are the bases. Discarding $\ell$ leaves the independent sets on the other labels unchanged, but removes a ground element and its singleton circuit. It therefore changes the labeled matroid rather than providing an identical representation of the original indexed object.

</details>

### Exercise 8: further structure
<a id="independence-augmentation-cryptomorphisms-ex-8"></a>

For the hereditary family in Exercise 6, define \(r(X)\) as the maximum feasible cardinality inside \(X\). Find explicit \(A,B\) violating submodularity.

<details>
<summary>Hint 1</summary>

**Hint.** Use two mixed pairs sharing the same singleton from the first maximal block.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Take $A=\{a,c\}$, $B=\{a,d\}$. Their union contains the feasible pair $\{c,d\}$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Both mixed pairs have rank one. Their intersection $\{a\}$ also has rank one, while their union $\{a,c,d\}$ has rank two because it contains $\{c,d\}$. Hence $r(A)+r(B)=2<3=r(A\cup B)+r(A\cap B)$. The maximum-feasible-size function of an arbitrary hereditary family is bounded and monotone but need not be submodular.

</details>

### Exercise 9: further structure
<a id="independence-augmentation-cryptomorphisms-ex-9"></a>

In the triangle-with-tail graph of Worked example 7.3, find the graphic rank of \(A=\{a,b,c\}\) and \(B=\{d\}\), then of \(A\cup B\). Contrast this with maximum matching sizes.

<details>
<summary>Hint 1</summary>

**Hint.** Graphic rank asks for a largest forest, whereas matching size asks for pairwise disjoint endpoints.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Two triangle edges form a forest, and the tail can be added. A triangle matching has just one edge.

</details>

<details>
<summary>Solution</summary>

**Solution.** The graphic ranks are $r(A)=2$, $r(B)=1$, and $r(A\cup B)=3$. The maximum matching sizes are one, one, and two respectively; a matching of size two is $\{a,d\}$. The same edge subsets therefore carry different optimization functions under the two feasibility definitions. Only the forest family supplies the matroid rank used in the chapter.

</details>

### Exercise 10: further structure
<a id="independence-augmentation-cryptomorphisms-ex-10"></a>

Does the family \(\mathcal B=\{\{a,b\},\{a,c\},\{c,d\}\}\) satisfy basis exchange? Give a complete failing ordered choice of two members and a deleted element if it does not.

<details>
<summary>Hint 1</summary>

**Hint.** Compare the first and last listed members.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Delete $a$ from $\{a,b\}$, and test both candidates $c,d$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Take $B_1=\{a,b\}$, $B_2=\{c,d\}$, and $a\in B_1\setminus B_2$. Replacing $a$ by $c$ gives $\{b,c\}$, and replacing it by $d$ gives $\{b,d\}$. Neither belongs to $\mathcal B$. This supplies the entire failed existential choice, so the family does not satisfy basis exchange even though every listed member has cardinality two.

</details>

## Sources for the expanded teaching

The original proofs, statements, examples, solutions, and references above are retained. The new explanations and staged help are original. For a primary reference route, see James Oxley, [*Matroid Theory*](https://academic.oup.com/book/34846), and the [author's materials](https://www.math.lsu.edu/~oxley/). No additional theorem or page locator is asserted.

## Summary

Heredity permits deletion, while augmentation coordinates different feasible choices. Equal-size bases, basis transport, and submodular rank follow through explicit finite translations. The worked entry models retain labels and distinguish forest, matching, vector, and partition feasibility. Global maximal sizes alone do not establish a matroid. The next chapter develops the fundamental circuits and strong exchange statements that refine these existence arguments.

