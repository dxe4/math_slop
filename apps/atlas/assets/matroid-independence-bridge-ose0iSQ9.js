var e=`---
parent_id: book-discrete-mathematics-proof-counting-structure
chapter_id: matroid-independence-bridge
title: "Matroid Independence and the Greedy Exchange Bridge"
level: advanced-undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Matroid Independence and the Greedy Exchange Bridge {#section-1-matroid-independence-and-the-greedy-exchange-bridge}

Many finite selection problems share a tempting algorithm: repeatedly take the most valuable available element that preserves feasibility. The algorithm succeeds for spanning forests and linearly independent columns, yet fails for many superficially similar constraints. A matroid isolates the exchange property that makes this greedy rule reliable.

This chapter assumes finite sets, induction, weighted graphs, spanning trees, and elementary vector-space independence. It builds a bridge from those examples to the independence axioms and proves the weighted greedy theorem. It does not redevelop the deeper Book B theory of strong basis exchange, circuits and cocircuits, duality, rank and flats, or representability across fields. Those topics begin after this chapter’s recognition-and-algorithm viewpoint.

<a id="section-5-1-independence-systems"></a>
## 1. Independence systems {#section-7-1-independence-systems}

An **independence system** is a pair $(E,I)$ consisting of a finite ground set $E$ and a family $I$ of subsets, called **independent sets**, such that:

1. the empty set belongs to $I$;
2. if $A \\in I$ and $B \\subseteq A$, then $B \\in I$.

The second property is **heredity**. A set not in $I$ is dependent. An independent subset maximal under inclusion is a **basis** of the whole system. In an arbitrary independence system, different bases may have different sizes.

<a id="section-14-worked-example-1-heredity-does-not-guarantee-greedy-beh"></a>
### Worked example 1: heredity does not guarantee greedy behavior {#section-16-worked-example-1-heredity-does-not-guarantee-greedy-beh}

Let $E=\\{a,b,c\\}$ and

$$I=\\{\\varnothing,\\{a\\},\\{b\\},\\{c\\},\\{b,c\\}\\}$$

This is hereditary. Its bases are $\\{a\\}$ and $\\{b,c\\}$, of sizes one and two. Give weights $w(a)=3$, $w(b)=w(c)=2$. A descending greedy scan takes $a$ first, after which neither $b$ nor $c$ can be added; its weight is $3$. But $\\{b,c\\}$ has weight $4$. The missing condition must prevent a smaller maximal feasible set from blocking a larger one.

<a id="section-22-2-the-augmentation-axiom"></a>
## 2. The augmentation axiom {#section-24-2-the-augmentation-axiom}

A **matroid** is an independence system $(E,I)$ satisfying:

3. if $A,B \\in I$ and $|A|<|B|$, then some $e \\in B\\setminus A$ makes $A \\cup \\{e\\}$ independent.

This is the **augmentation axiom**. It does not say every element of $B\\setminus A$ works, nor that $A \\cup B$ is independent.

**Theorem 17.1.** Every basis of a finite matroid has the same size.

**Proof.** Let $P$ and $Q$ be bases. If $|P|<|Q|$, augmentation supplies $e \\in Q\\setminus P$ for which $P \\cup \\{e\\}$ is independent, contradicting maximality of $P$. Thus $|P|\\ge |Q|$. Interchanging $P,Q$ gives $|Q|\\ge |P|$, so their sizes are equal. ∎

The common size is the **rank of the matroid**. This chapter uses only the rank of the whole ground set; Book B develops a rank function on every subset and its submodularity.

**Lemma 17.2 (Extension).** Every independent set in a finite matroid is contained in a basis.

**Proof.** Starting from independent $A$, add any element that preserves independence while one exists. The finite ground set makes the process terminate. Its result is independent and inclusion-maximal, hence a basis. ∎

The lemma also holds for arbitrary finite independence systems. What augmentation adds is equal final size, independent of the legal choices made during extension.

<a id="section-42-3-graphic-independence"></a>
## 3. Graphic independence {#section-44-3-graphic-independence}

Let $G=(V,E)$ be a finite undirected graph. Declare an edge set independent when it contains no cycle—that is, when it is a forest. The empty edge set is a forest, and every subset of a forest is a forest. We must prove augmentation.

**Theorem 17.3.** The forests of $G$ form a matroid on $E$.

**Proof.** Let forests $A,B$ satisfy $|A|<|B|$. Consider the spanning subgraphs $(V,A)$ and $(V,B)$. A forest with $c$ connected components has $|V|-c$ edges, because each component is a tree. Thus

$$c_{A}=|V|-|A| > |V|-|B|=c_{B}$$

If every edge of $B$ had both endpoints in a single component of $(V,A)$, then every path in $(V,B)$ would remain inside an $A$-component. Consequently $(V,B)$ would have at least $c_{A}$ components, contradicting $c_{B}<c_{A}$. Therefore some edge $e \\in B$ joins two different components of $(V,A)$. Such an edge is not in $A$, and adding it cannot create a cycle. Hence $A \\cup \\{e\\}$ is a forest. ∎

If $G$ is connected, the bases are precisely its spanning trees: a maximal forest must connect all vertices, because an edge along a graph path between two forest components could be added. If $G$ has several components, bases are spanning forests containing a tree in each component.

<a id="section-56-worked-example-2-greedy-on-a-weighted-graph"></a>
### Worked example 2: greedy on a weighted graph {#section-58-worked-example-2-greedy-on-a-weighted-graph}

Let a graph have vertices $\\{1,2,3,4\\}$ and weighted edges

$$12:1, 23:2, 13:3, 34:4, 24:5$$

For a minimum-weight spanning tree, scan edges in increasing order. Take $12$, take $23$, skip $13$ because it closes triangle $123$, then take $34$. The selected tree has weight $1+2+4=7$.

Why is the cycle rejection local? In a forest there is at most one path between two vertices. Adding edge $uv$ creates a cycle exactly when a path from $u$ to $v$ already exists. Thus the feasibility oracle only needs a connectivity test.

<a id="section-66-4-linear-independence"></a>
## 4. Linear independence {#section-68-4-linear-independence}

Let $E$ be a finite indexed collection of vectors over a fixed field. A subset of indices is independent when the corresponding vectors are linearly independent.

**Theorem 17.4.** Linearly independent index sets form a matroid.

**Proof.** The empty family is independent, and a subfamily of a linearly independent family is independent. Let independent families $A,B$ satisfy $|A|<|B|$. If every vector indexed by $B\\setminus A$ lay in $\\operatorname{span}(A)$, then all vectors of $B$ would lie in $\\operatorname{span}(A)$: elements of $B \\cap A$ already do. Hence

$$\\dim(\\operatorname{span}(B))\\le \\dim(\\operatorname{span}(A))=|A|$$

But $B$ is independent, so $\\dim(\\operatorname{span}(B))=|B|>|A|$, a contradiction. Some $e \\in B\\setminus A$ is outside $\\operatorname{span}(A)$, and appending it to $A$ preserves independence. ∎

The field is part of the data. A matrix with integer entries may have different dependence relations when interpreted modulo a prime. This bridge fixes one field at a time and does not make field-independent representability claims.

<a id="section-80-worked-example-3-columns-over-two-fields"></a>
### Worked example 3: columns over two fields {#section-82-worked-example-3-columns-over-two-fields}

Consider columns

$u=(1,0)$, $v=(0,1)$, $z=(1,1)$.

Over the real numbers, every pair is independent and the triple is dependent because $z=u+v$. Over the two-element field, the same equation holds, so the independent index sets happen to be the same.

Now add $q=(1,-1)$. Over the reals, $\\{z,q\\}$ is independent because the determinant of $\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$ is $-2$, nonzero. Over the two-element field, $-1=1$, so $q=z$ and the pair is dependent. Specifying the field changes the independence oracle.

<a id="section-90-5-uniform-and-partition-examples"></a>
## 5. Uniform and partition examples {#section-92-5-uniform-and-partition-examples}

For integers $0\\le r\\le |E|$, declare a set independent exactly when its size is at most $r$. Heredity is immediate. If $|A|<|B|\\le r$, every element of $B\\setminus A$ can be added to $A$, so this is a matroid. Its bases are all $r$-subsets. This **cardinality matroid** shows pure capacity without geometry.

More generally, partition $E$ into disjoint classes $E_{1},\\ldots,E_{m}$ and choose capacities $c_{i}$ with $0\\le c_{i}\\le |E_{i}|$. Declare $A$ independent when

$|A \\cap E_{i}|\\le c_{i}$ for every $i$.

**Proposition 17.5.** These feasible sets form a matroid.

**Proof.** Heredity is clear. Suppose $A,B$ are feasible and $|A|<|B|$. If $|A \\cap E_{i}|\\ge |B \\cap E_{i}|$ for every $i$, summing over the partition would give $|A|\\ge |B|$, contradiction. Hence some class $E_{j}$ has fewer elements of $A$ than of $B$. Choose $e \\in (B\\setminus A) \\cap E_{j}$. Adding $e$ leaves all other class counts unchanged and raises the $j$ count to at most $|B \\cap E_{j}|\\le c_{j}$. ∎

<a id="section-102-worked-example-4-scheduling-with-category-caps"></a>
### Worked example 4: scheduling with category caps {#section-104-worked-example-4-scheduling-with-category-caps}

A program may accept at most two algebra talks, one geometry talk, and two applied talks. Assign values

$$A1:9, A2:7, A3:6, G1:8, G2:4, P1:5, P2:3, P3:2$$

Descending greedy accepts $A1$, $G1$, $A2$, $P1$, rejects $A3$ because the algebra cap is full, rejects $G2$, then accepts $P2$. The value is $9+8+7+5+3=32$. Because the constraint is a partition matroid, the greedy theorem below certifies optimality. Indeed it has simply selected the top $c_{i}$ positive-valued items in each class.

Overlapping quotas need not form a partition matroid. If categories overlap, heredity may remain true while augmentation fails. The proof above uses disjointness when it sums class counts and changes exactly one constraint.

<a id="section-112-6-restrictions-and-deletions"></a>
## 6. Restrictions and deletions {#section-114-6-restrictions-and-deletions}

Given a matroid $(E,I)$ and a subset $S \\subseteq E$, define

$$I|S=\\{A \\in I:A \\subseteq S\\}$$

Then $(S,I|S)$ is a matroid, called the **restriction** to $S$.

**Proof.** The empty set and heredity are inherited. If $A,B \\in I|S$ with $|A|<|B|$, augmentation in the original matroid gives $e \\in B\\setminus A$. Since $B \\subseteq S$, the augmented set remains inside $S$ and belongs to $I|S$. ∎

Removing elements is the special case of restricting to their complement. For a graph, restriction to selected edges preserves exactly the forests in the edge-deleted graph. For vectors, it discards columns. This operation is safe because it changes available elements, not the feasibility rule on retained subsets.

Contraction is a different operation and needs more care, especially when the contracted set is dependent. It belongs with the deeper structural treatment rather than this first bridge.

<a id="section-126-7-the-weighted-greedy-algorithm"></a>
## 7. The weighted greedy algorithm {#section-128-7-the-weighted-greedy-algorithm}

Let $(E,I)$ be a matroid and let $w:E\\to R$ assign weights. To obtain a maximum-weight basis:

1. order the elements $e_{1},\\ldots,e_{n}$ so $w(e_{1})\\ge \\ldots\\ge w(e_{n})$;
2. start with $G=\\varnothing$;
3. scan in order, adding $e_{i}$ exactly when $G \\cup \\{e_{i}\\}$ is independent.

Ties may be broken arbitrarily. Since the scan considers every element, the final $G$ is maximal independent and therefore a basis. We now prove its optimality without assuming weights are distinct or nonnegative.

**Theorem 17.6 (Greedy).** For every real weight function on a finite matroid, the descending greedy algorithm returns a maximum-weight basis.

**Proof.** Let greedy choose, in order, $g_{1},\\ldots,g_{r}$, and let $G_{i}=\\{g_{1},\\ldots,g_{i}\\}$. Begin with any maximum-weight basis $O_{0}$. We construct maximum-weight bases $O_{i}$ satisfying $G_{i} \\subseteq O_{i}$.

Suppose $O_{i-1}$ has been constructed. If $g_{i} \\in O_{i-1}$, set $O_{i}=O_{i-1}$. Otherwise, extend the independent set $G_{i}$ to some basis $B$. We need an exchange that inserts $g_{i}$ into $O_{i-1}$ while removing no heavier element. A direct augmentation argument supplies it as follows.

Consider $O_{i-1}$ and the independent set $G_{i}$. Because $G_{i-1} \\subseteq O_{i-1}$ and both $O_{i-1}$ and $B$ are bases, there exists $o \\in O_{i-1}\\setminus G_{i-1}$ such that

$$(O_{i-1}-\\{o\\}) \\cup \\{g_{i}\\}$$

is a basis. To justify this single exchange, augment the independent set $O_{i-1}-\\{g_{i}\\}$ is impossible because $g_{i}$ is not in it; instead use the following elementary basis-exchange lemma: for bases $P,Q$ and $q \\in Q\\setminus P$, there is $p \\in P\\setminus Q$ with $(P-\\{p\\}) \\cup \\{q\\}$ a basis. Its proof appears immediately below. Apply it with $P=O_{i-1}$, $Q=B$, $q=g_{i}$. Because $G_{i-1}$ lies in both bases, the removed $o$ cannot lie in $G_{i-1}$.

When greedy examined $o$, either that happened no earlier than $g_{i}$, giving $w(o)\\le w(g_{i})$, or it happened earlier. The earlier case cannot occur: at that time all elements of $G_{i-1}$ already chosen before $o$ formed a subset of $G_{i-1}$, and since $G_{i-1} \\cup \\{o\\}$ is a subset of independent $O_{i-1}$, $o$ would have been accepted. Thus $w(o)\\le w(g_{i})$.

Set $O_{i}=(O_{i-1}-\\{o\\}) \\cup \\{g_{i}\\}$. It is a basis, contains $G_{i}$, and has weight at least that of $O_{i-1}$. Since $O_{i-1}$ was already maximum, $O_{i}$ is maximum as well. At $i=r$, a maximum-weight basis contains the basis $G_{r}$; equal sizes force equality. Therefore greedy is optimal. ∎

The proof invoked a lemma, which we now establish from augmentation.

**Lemma 17.7 (Basis-exchange).** If $P,Q$ are bases and $q \\in Q\\setminus P$, then some $p \\in P\\setminus Q$ makes $(P-\\{p\\}) \\cup \\{q\\}$ a basis.

**Proof.** Extend the independent singleton $\\{q\\}$ while considering elements of $P$ one by one, accepting an element whenever independence remains. The result $H$ is an independent subset of $P \\cup \\{q\\}$ maximal within that restriction. The restriction is a matroid, so all its bases have equal size. Since $P$ is a basis of the restriction, $|H|=|P|$. The set $H$ contains $q$ and therefore contains exactly $|P|-1$ elements of $P$; write it $(P-\\{p\\}) \\cup \\{q\\}$. Because $Q$ contains $q$, any omitted element can be selected so the construction retains common elements $P \\cap Q$ first; equivalently start from $(P \\cap Q) \\cup \\{q\\}$, which is a subset of independent $Q$, then extend using $P\\setminus Q$. Thus $p \\in P\\setminus Q$. The resulting independent set has full matroid rank and is a basis. ∎

This proof is more elaborate than the algorithm. Its role is to certify that each greedy choice can be installed into an optimum without lowering value.

<a id="section-160-8-maximum-weight-independent-sets-versus-bases"></a>
## 8. Maximum-weight independent sets versus bases {#section-162-8-maximum-weight-independent-sets-versus-bases}

If weights can be negative, a maximum-weight independent set need not be a basis. A one-element set of weight $5$ may be preferable to a basis that must add an element of weight $-100$.

For maximum-weight **independent set**, scan only elements of positive weight, adding feasible ones. Zero-weight elements may be added or omitted without changing value. This works because the greedy theorem can be applied after assigning a sufficiently large common positive shift only when comparing bases, not arbitrary sizes; it is clearer to restrict to positive elements and find a maximum-weight basis of that restriction, then observe that adding any accepted positive element helps.

**Proposition 17.8.** Descending greedy restricted to elements of positive weight returns a maximum-weight independent set.

**Proof.** Let $P=\\{e:w(e)>0\\}$ and restrict the matroid to $P$. Greedy produces a maximum-weight basis $G$ of that restriction. Any independent set $A$ in the original system gains no value from its nonpositive elements, so $A \\cap P$ is independent and has weight at least $w(A)$. Extend $A \\cap P$ to a basis $B$ of the restriction. Every added element has positive weight, hence $w(B)\\ge w(A \\cap P)\\ge w(A)$. The greedy basis has $w(G)\\ge w(B)$, proving optimality. ∎

<a id="section-170-worked-example-5-negative-weights"></a>
### Worked example 5: negative weights {#section-172-worked-example-5-negative-weights}

In the cardinality matroid $|A|\\le 2$ on $\\{p,q,r\\}$, let weights be $4,-1,-3$. Greedy for a basis selects $p,q$, weight $3$; that is the best two-element basis. Greedy for an arbitrary independent set ignores nonpositive elements and returns $\\{p\\}$, weight $4$. Neither answer contradicts the other because the optimization domains differ.

<a id="section-174-9-minimum-weight-ties-and-deterministic-output"></a>
## 9. Minimum weight, ties, and deterministic output {#section-176-9-minimum-weight-ties-and-deterministic-output}

To find a minimum-weight basis, scan in nondecreasing order and add feasible elements, or apply the maximum theorem to weights $-w$. The proof permits negative weights because every candidate is a basis of the same size.

With tied weights, different scans may produce different optimal bases. If reproducible output matters, specify a secondary total order on element identifiers. The optimization value is independent of that tie-breaking, but the chosen witness need not be.

<a id="section-180-worked-example-6-two-optimal-spanning-trees"></a>
### Worked example 6: two optimal spanning trees {#section-182-worked-example-6-two-optimal-spanning-trees}

In a four-cycle with all four edge weights equal to one, every three-edge subset is a spanning tree and has weight three. A fixed lexicographic order chooses a predictable tree by accepting the first three cycle edges and rejecting the fourth. Greedy certifies the value, not uniqueness.

<a id="section-184-10-why-a-local-rule-can-fail-outside-matroids"></a>
## 10. Why a local rule can fail outside matroids {#section-186-10-why-a-local-rule-can-fail-outside-matroids}

Return to the independence system with feasible sets $\\varnothing,\\{a\\},\\{b\\},\\{c\\},\\{b,c\\}$. It violates augmentation for $A=\\{a\\}$, $B=\\{b,c\\}$: neither $b$ nor $c$ can be added to $A$. The weights from Worked example 1 then make greedy fail.

This is not an accident. If a hereditary system violates augmentation, choose independent $A,B$ with $|A|<|B|$ and no element of $B\\setminus A$ augmenting $A$. Assign very large equal weights to $A$, somewhat smaller positive weights to $B\\setminus A$, and zero or negative weights elsewhere, with magnitudes chosen so greedy first builds $A$ while the total alternative $B$ is better. A fully quantified converse requires careful handling of $A \\cap B$ and weight scales; Book B treats equivalent axiom systems. For this bridge the concrete lesson is sufficient: heredity alone does not certify greedy choice.

Likewise, the intersection of two matroid independence families need not be a matroid. Scheduling under two overlapping partitions can destroy augmentation even though each quota system separately admits greedy optimization. More advanced algorithms handle some such intersections, but ordinary one-pass greedy is no longer automatically correct.

<a id="section-192-11-independence-oracles-and-running-time"></a>
## 11. Independence oracles and running time {#section-194-11-independence-oracles-and-running-time}

The abstract algorithm asks an **independence oracle** whether $G \\cup \\{e\\}$ belongs to $I$. With $n=|E|$, it makes exactly $n$ oracle calls after sorting. Comparison sorting costs $O(n \\log n)$ comparisons; the overall running time also depends on the oracle.

- For a graphic matroid, a disjoint-set structure supports cycle tests efficiently during a fixed scan.
- For vectors, incremental elimination can test whether a column lies in the current span.
- For a partition matroid, an array of class counts gives a constant-time test after preprocessing.

An exponential-time oracle would make the abstract greedy algorithm expensive despite its small number of calls. A correctness theorem and a complexity bound answer different questions.

<a id="section-202-12-proof-interface-to-the-deeper-theory"></a>
## 12. Proof interface to the deeper theory {#section-204-12-proof-interface-to-the-deeper-theory}

This chapter has established a compact interface:

- **recognize:** empty set, heredity, augmentation;
- **extend:** every independent set reaches a basis;
- **compare:** all bases have one size;
- **optimize:** ordered acceptance maximizes basis weight;
- **instantiate:** forests, vector independence, cardinality caps, and partition caps.

The next layer asks other questions. Which minimal dependent sets explain failed insertions? How do deletion and contraction interact? What does a dual independence theory mean? How does rank behave on subsets, and which matroids arise from matrices over a chosen field? Those are precisely the topics reserved for the Discrete and Combinatorial Structures shelf. The bridge is meant to make their motivation and prerequisites visible, not reproduce their proofs.

<a id="section-214-13-common-errors"></a>
## 13. Common errors {#section-216-13-common-errors}

- Checking heredity and declaring an independence system a matroid without augmentation.
- Reading augmentation as “every element of the larger set can be added.”
- Assuming inclusion-maximal means maximum weight or maximum cardinality in an arbitrary hereditary family.
- Running descending greedy for an arbitrary independent set while retaining negative weights.
- Forgetting to specify the field for vector independence.
- Claiming a maximal forest is a spanning tree when the original graph is disconnected.
- Using the greedy theorem for overlapping constraints without proving their feasible sets form a matroid.
- Treating a tie-broken greedy witness as the unique optimum.
- Reporting $O(n \\log n)$ while ignoring the cost of independence tests.
- Invoking circuits, duality, or contraction laws before defining and proving the needed facts.

<a id="section-227-14-exercises-with-worked-solutions"></a>
## 14. Exercises with worked solutions {#section-229-14-exercises-with-worked-solutions}

<a id="section-229-dm-ch14-e001-identify-an-augmentation-failure"></a>
### DM-CH14-E001 — identify an augmentation failure {#section-231-dm-ch14-e001-identify-an-augmentation-failure}

Let $E=\\{1,2,3,4\\}$ and let independent sets be all subsets of $\\{1,2,3\\}$ of size at most two, together with $\\varnothing$ and $\\{4\\}$. Show heredity and find an augmentation failure.

<a id="section-233-dm-ch14-e001-solution"></a>
#### DM-CH14-E001 — Solution {#section-235-dm-ch14-e001-solution}

Every subset of an allowed set is again allowed, so heredity holds. Take $A=\\{4\\}$ and $B=\\{1,2\\}$. Both are independent and $|A|<|B|$, but neither $\\{4,1\\}$ nor $\\{4,2\\}$ is allowed. Thus augmentation fails.

<a id="section-237-dm-ch14-e002-bases-in-a-disconnected-graph"></a>
### DM-CH14-E002 — bases in a disconnected graph {#section-239-dm-ch14-e002-bases-in-a-disconnected-graph}

A graph has connected components with $4,3,1$ vertices. How many edges does every basis of its forest matroid contain?

<a id="section-241-dm-ch14-e002-solution"></a>
#### DM-CH14-E002 — Solution {#section-243-dm-ch14-e002-solution}

A basis contains a spanning tree in each nontrivial component and no edge in the isolated component. Its size is $(4-1)+(3-1)+(1-1)=5$. Equivalently, with eight vertices and three components the size is $8-3=5$.

<a id="section-245-dm-ch14-e003-verify-uniform-augmentation"></a>
### DM-CH14-E003 — verify uniform augmentation {#section-247-dm-ch14-e003-verify-uniform-augmentation}

For $I=\\{A \\subseteq E:|A|\\le r\\}$, prove augmentation including the boundary cases $r=0$ and $r=|E|$.

<a id="section-249-dm-ch14-e003-solution"></a>
#### DM-CH14-E003 — Solution {#section-251-dm-ch14-e003-solution}

If independent $A,B$ satisfy $|A|<|B|$, then $B\\setminus A$ is nonempty. Choose any $e$ there. Since $|A|+1\\le |B|\\le r$, the augmented set is independent. When $r=0$, no pair $A,B$ satisfies the strict size premise, so the axiom holds vacuously. When $r=|E|$, the same argument applies to all subsets.

<a id="section-253-dm-ch14-e004-a-partition-optimum"></a>
### DM-CH14-E004 — a partition optimum {#section-255-dm-ch14-e004-a-partition-optimum}

Classes are $\\{a,b,c\\}$ with cap two and $\\{d,e\\}$ with cap one. Weights are $a=5,b=5,c=4,d=-1,e=-2$. Find a maximum-weight basis and a maximum-weight independent set.

<a id="section-257-dm-ch14-e004-solution"></a>
#### DM-CH14-E004 — Solution {#section-259-dm-ch14-e004-solution}

Every basis must take two from the first class and one from the second. The maximum basis is $\\{a,b,d\\}$ with weight $9$; ties between $a,b$ require no choice because both fit. For an arbitrary independent set, omit nonpositive elements, giving $\\{a,b\\}$ with weight $10$.

<a id="section-261-dm-ch14-e005-restriction"></a>
### DM-CH14-E005 — restriction {#section-263-dm-ch14-e005-restriction}

Prove that restricting the forest matroid of $G=(V,E)$ to $S \\subseteq E$ gives the forest matroid of the spanning subgraph $(V,S)$.

<a id="section-265-dm-ch14-e005-solution"></a>
#### DM-CH14-E005 — Solution {#section-267-dm-ch14-e005-solution}

A subset $A \\subseteq S$ is independent in the restriction exactly when it contains no cycle as an edge set of $G$. Cycles using only edges of $A$ are identical in $G$ and $(V,S)$. Hence the independent families coincide.

<a id="section-269-dm-ch14-e006-a-linear-augmentation-witness"></a>
### DM-CH14-E006 — a linear augmentation witness {#section-271-dm-ch14-e006-a-linear-augmentation-witness}

Over the real numbers let $A=\\{(1,0,0)\\}$ and $B=\\{(1,1,0),(0,0,1)\\}$. Find every vector in $B\\setminus A$ that augments $A$.

<a id="section-273-dm-ch14-e006-solution"></a>
#### DM-CH14-E006 — Solution {#section-275-dm-ch14-e006-solution}

Neither vector is a scalar multiple of $(1,0,0)$. Therefore each lies outside $\\operatorname{span}(A)$ and either may be added. Augmentation promises at least one; this example has two.

<a id="section-277-dm-ch14-e007-perform-graphic-greedy"></a>
### DM-CH14-E007 — perform graphic greedy {#section-279-dm-ch14-e007-perform-graphic-greedy}

On vertices $\\{a,b,c,d\\}$, use edges $ab:2, ac:1, bc:3, bd:4, cd:2$. Find a minimum-weight spanning tree by greedy scanning and show every rejection.

<a id="section-281-dm-ch14-e007-solution"></a>
#### DM-CH14-E007 — Solution {#section-283-dm-ch14-e007-solution}

Scan $ac:1$, then the weight-two edges in a declared order, say $ab$ before $cd$. Accept $ac$, accept $ab$, accept $cd$. These three edges connect all four vertices without a cycle, so they form a spanning tree of weight $5$. The later $bc$ would close cycle $b-a-c-b$; $bd$ is unnecessary and would also close a cycle in the completed tree. By the minimum-weight version of the greedy theorem, weight $5$ is optimal.

<a id="section-285-dm-ch14-e008-zero-weights"></a>
### DM-CH14-E008 — zero weights {#section-287-dm-ch14-e008-zero-weights}

In a rank-two cardinality matroid, weights are $3,0,0,-4$. Describe all maximum-weight independent-set values and possible sizes.

<a id="section-289-dm-ch14-e008-solution"></a>
#### DM-CH14-E008 — Solution {#section-291-dm-ch14-e008-solution}

Every optimum includes the weight-three element and excludes the negative element. It may include neither or one of the zero-weight elements, because the capacity is two. Thus every optimum has value $3$, and optimum sizes can be one or two. A deterministic rule must say how it treats zeros.

<a id="section-293-dm-ch14-e009-diagnose-a-false-proof"></a>
### DM-CH14-E009 — diagnose a false proof {#section-295-dm-ch14-e009-diagnose-a-false-proof}

A student says: “All maximal feasible sets have equal size, so descending greedy is optimal.” Explain the gap.

<a id="section-297-dm-ch14-e009-solution"></a>
#### DM-CH14-E009 — Solution {#section-299-dm-ch14-e009-solution}

Equal basis size controls cardinality, not which weights can be exchanged. A proof of weighted optimality needs an exchange property strong enough to replace an element of an optimum by each greedy choice without decreasing weight. Merely knowing equal sizes does not exhibit such exchanges. The matroid augmentation axiom yields the basis-exchange lemma used in the theorem.

<a id="section-301-dm-ch14-e010-oracle-accounting"></a>
### DM-CH14-E010 — oracle accounting {#section-303-dm-ch14-e010-oracle-accounting}

A ground set has $n$ elements. Sorting takes at most $C n \\log n$ comparisons and each independence query costs $T(n)$. Give a valid upper bound for the greedy phase, excluding input parsing.

<a id="section-305-dm-ch14-e010-solution"></a>
#### DM-CH14-E010 — Solution {#section-307-dm-ch14-e010-solution}

The scan makes one query per element, so its oracle cost is $nT(n)$. Including sorting gives $O(n \\log n+nT(n))$. If weights arrive already in order, the sorting term disappears. This is an upper bound; a particular oracle may exploit incremental state to have a smaller amortized cost.

<a id="section-309-chapter-summary-and-connections"></a>
## Chapter summary and connections {#section-311-chapter-summary-and-connections}

A matroid is a hereditary finite feasibility system with augmentation. That extra axiom equalizes basis sizes and enables an exchange proof for weighted greedy optimization. Forests, vector independence, cardinality limits, and disjoint category caps all satisfy the axioms; arbitrary hereditary or overlapping quota systems may not. Negative weights distinguish optimizing a basis from optimizing an arbitrary independent set, and an oracle’s implementation distinguishes correctness from efficiency.

The earlier graph and extremal chapters provide spanning forests, weighted choices, and counterexample habits. This bridge now supplies the precise doorway to the companion structural book, where bases, circuits, rank, closure, duality, minors, and field-dependent representations are developed at full scale.

<a id="section-315-source-and-verification-note"></a>
## Sources {#section-317-source-and-verification-note}

Further reading includes Oxley, *Matroid Theory*, 2nd ed. (2011), and Schrijver, *Combinatorial Optimization: Polyhedra and Efficiency*, 3 vols. (2003), as modern routes for the finite matroid greedy characterization. This guide does not specify a matching theorem/page locator, so none is asserted.
`;export{e as default};