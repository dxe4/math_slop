
# Duality, Sums, and Matroid Connectivity

A matroid can fall apart even when its ground set is written as one set. If every circuit stays entirely on one side of a partition, the two sides carry independent pieces of structure. At the opposite extreme, circuits cross every proposed boundary. Between those extremes, a single virtual element can join two matroids so that circuits pass through a narrow interface.

Duality must see the same boundaries. A decomposition that is natural only for independence but disappears when circuits and cocircuits trade places is not a satisfactory connectivity theory. The rank expression

$\lambda_M(X)=r_M(X)+r_M(E\setminus X)-r_M(E)$

solves this problem: it is symmetric in the two shores and unchanged by duality. This chapter develops that expression from the dual rank formula, treats direct sums and two-sums precisely, and ends with a bounded exact project that can expose every certificate on a small ground set.

## Prerequisites and conventions

We assume finite matroids, bases, rank, closure, circuits, cocircuits, deletion, and contraction. The preceding minor chapter supplies deletion and contraction from independence and rank. The basis-dual $M^{*}$ is defined by

$B\text{ is a basis of }M^{*}\iff E\setminus B\text{ is a basis of }M.$

All ground sets are finite. A partition $(X,Y)$ always means $X\cap Y=\varnothing$ and $X\cup Y=E$. We allow loops and coloops unless a theorem excludes them.

The word **connected** has a matroid meaning in this chapter: a nonempty matroid is connected when it is not a direct sum of two matroids on nonempty ground sets. This is not graph vertex-connectivity. For a one-element matroid the definition declares both a loop and a coloop connected, although some applications exclude these degenerate components by convention. We will always state size conditions when discussing higher connectivity.

## 1. Dual rank is a complementary accounting identity

**Theorem 15.1 (Dual rank).** For every $X\subseteq E$,

$r_{M^{*}}(X)=|X|-r_M(E)+r_M(E\setminus X).$

**Proof.** Choose a basis $I$ of the restriction $M|(E\setminus X)$ and extend it to a basis $B$ of $M$. Because $I$ is maximal inside $E\setminus X$, every element of $B\setminus I$ lies in $X$. The complement $E\setminus B$ is a dual basis and its part in $X$ is $X\setminus B$, of size

$|X|-|B\setminus I|=|X|-(r_M(E)-r_M(E\setminus X)).$

Thus the dual rank of $X$ is at least the displayed quantity.

Conversely, let $J\subseteq X$ be independent in $M^{*}$ and extend it to a dual basis $D$. Then $E\setminus D$ is a basis of $M$. Its part outside $X$ has size at most $r_M(E\setminus X)$, so

$r_M(E)=|E\setminus D|\le |X\setminus J|+r_M(E\setminus X).$

Rearranging gives $|J|\le |X|-r_M(E)+r_M(E\setminus X)$. Applying this to a largest dual-independent $J$ proves equality. ∎

Putting $X=E$ gives $r(M^{*})=|E|-r(M)$. Applying the formula twice returns the original rank, hence $(M^{*})^{*}=M$. Loops of $M$ are coloops of $M^{*}$, because an element belongs to no primal basis exactly when it belongs to every complementary dual basis.

### Worked example 1: dual rank in a uniform matroid

Let $M=U(2,5)$ and $|X|=3$. Then $r_M(E)=2$ and $r_M(E\setminus X)=2$, so

$r_{M^{*}}(X)=3-2+2=3.$

Indeed $M^{*}=U(3,5)$, and a three-set is a dual basis. For a four-set $Z$, the formula gives $4-2+1=3$, agreeing with the rank cap in $U(3,5)$. The complementary term is essential: $|Z|-r(M)=2$ alone would be wrong.

## 2. Duality exchanges deletion and contraction

For $e\in E$,

$(M\setminus e)^{*}=M^{*}/e, \text{ and } (M/e)^{*}=M^{*}\setminus e.$

These identities compare matroids on $E\setminus \{e\}$.

**Proof from bases.** A basis of $M\setminus e$ is a largest independent set avoiding $e$. If $e$ is not a coloop, these are exactly primal bases avoiding $e$; their complements within $E\setminus \{e\}$ are obtained from dual bases containing $e$ by removing $e$, which are the bases of $M^{*}/e$. If $e$ is a coloop, $M\setminus e$ has rank one less, while $e$ is a loop of $M^{*}$ and contracting that loop equals deleting it; the same complementary basis description still holds. The second identity follows by dualizing the first and using $(M^{*})^{*}=M$. ∎

Consequently the dual of any minor of $M$ is a minor of $M^{*}$, with every deletion/contraction instruction reversed. One should not reverse their order unnecessarily: operations on distinct elements commute, but the clean statement pairs the same sequence with swapped operation types.

### Worked example 2: a loop–coloop boundary

Let $M$ have ground set $\{e,f\}$ and sole basis $\{e\}$. Thus $e$ is a coloop and $f$ a loop. The dual has sole basis $\{f\}$. Deleting $e$ from $M$ leaves the rank-zero loop $f$, whose dual is the rank-one coloop $f$. On the dual side, contracting the loop $e$ leaves the rank-one coloop $f$, also with sole basis $\{f\}$. The identity compares the dual of the deletion with the contraction of the dual. This example explains why a proof restricted to elements that are neither loops nor coloops is incomplete.

## 3. Direct sums are exact separations

Let $M_1$ and $M_2$ have disjoint ground sets $E_1,E_2$. Their **direct sum** $M_1\oplus M_2$ has independent sets

$I_1\cup I_2, \text{ where } I_i \text{ is independent in } M_i.$

Equivalently, its bases are unions of one basis from each summand. For $X\subseteq E_1\cup E_2$,

$r_{M_1\oplus M_2}(X)=r_{M_1}(X\cap E_1)+r_{M_2}(X\cap E_2).$

This rank formula proves the rank axioms term by term and shows that the construction is a matroid. Its circuits are exactly the circuits of the two summands.

To prove the circuit claim, a circuit cannot meet both shores: if $C_i=C\cap E_i$ is nonempty on each side, dependence of $C$ means at least one $C_i$ is dependent, and that side contains a proper dependent subset of $C$, contrary to minimality. Conversely, a circuit of one summand remains minimally dependent in the sum.

Duality distributes over direct sum:

$(M_1\oplus M_2)^{*}=M_{1}^{*}\oplus M_{2}^{*}.$

This follows immediately because the complement of $B_1\cup B_2$ is the union of the complementary bases $E_1\setminus B_1$ and $E_2\setminus B_2$.

### Worked example 3: rank and circuits in a direct sum

Take $M=U(1,\{a,b\})\oplus U(2,\{c,d,e\})$. Its rank is three. The circuits are $\{a,b\}$ and $\{c,d,e\}$; no circuit crosses the displayed partition. For $X=\{a,c,d,e\}$,

$r_M(X)=r_U(\{a\})+r_U(\{c,d,e\})=1+2=3.$

The set $\{a,c,d\}$ is a basis. So is $\{b,d,e\}$. Every basis selects one element from the first component and two from the second; no exchange theorem creates a dependency between the choices.

## 4. Separators and circuit components

A set $X\subseteq E$ is a **separator** when

$r(X)+r(E\setminus X)=r(E).$

Equivalently, $M=M|X\oplus M|(E\setminus X)$. One direction follows from the direct-sum rank formula. For the converse, choose bases $B_X$ and $B_Y$ of the two restrictions. Their union spans both shores: every element of $X$ is in $\operatorname{cl}(B_X)$ and every element of $E\setminus X$ is in $\operatorname{cl}(B_Y)$. Hence $B_X\cup B_Y$ spans $E$. Its size is $r(X)+r(E\setminus X)=r(E)$, so a spanning set of that size is a basis. The same argument applies after extending any independent sets on the two shores to restriction bases. Their union lies in a full basis and is therefore independent in $M$. That is exactly the direct-sum independence rule.

There is also a circuit test:

**Theorem 15.2 (Separator).** A set $X$ is a separator if and only if no circuit meets both $X$ and $E\setminus X$.

**Proof.** A direct sum has no crossing circuit by Section 3. Conversely, suppose there is no crossing circuit. If $I_X$ and $I_Y$ are independent on the two shores but $I_X\cup I_Y$ were dependent, it would contain a circuit. That circuit cannot lie within either independent part and therefore would cross, a contradiction. Hence all such unions are independent, giving the direct sum. ∎

Build a graph on $E$ by joining two distinct elements when a circuit contains both. Its graph components are the **components** of $M$; loops appear as singleton components. A useful circuit-elimination lemma says more: any two elements in the same such component occur together in one circuit. The standard finite proof inducts on the length of a shortest chain of intersecting circuits and uses strong elimination to merge the final two links while protecting the first named endpoint; a secondary induction on the size of their union handles additional shared elements. Both measures decrease, so the process terminates with one circuit containing the two endpoints. The protected-element clause is essential because ordinary elimination alone might discard a named end.

A nonempty matroid is connected precisely when it has one component. Equivalently, every two distinct elements belong to a common circuit, except that a singleton ground set is connected by the direct-sum definition. In a connected matroid with at least two elements, there are no loops or coloops: either would be a singleton component.

### Worked example 4: graph connectivity is not matroid connectivity

Let $G$ be two triangles sharing exactly one vertex. The graph is connected, but its edge set splits into the two triangle edge sets. Every graph cycle stays in one triangle, so $M(G)$ is the direct sum of two three-element circuit matroids. Thus $M(G)$ is disconnected.

By contrast, if two triangles share one edge and that shared edge is retained, cycles overlap and all five edges lie in one circuit-connected class. Graph connectedness concerns vertex paths. Graphic-matroid connectedness concerns whether edges participate together through chains of cycles; for loopless graphs it corresponds to belonging to the same block without a cut vertex separating their cycles, not merely to the graph having one component.

## 5. The connectivity function measures rank overlap

Define

$\lambda_M(X)=r_M(X)+r_M(E\setminus X)-r_M(E).$

Submodularity applied to $X$ and $E\setminus X$ shows $\lambda_M(X)\ge 0$. It is integral and symmetric:

$\lambda_M(X)=\lambda_M(E\setminus X).$

Moreover, $\lambda_M(X)=0$ exactly when $X$ is a separator. The number therefore measures how far the partition is from a direct sum.

**Theorem 15.3 (Self-duality).** For all $X\subseteq E$,

$\lambda_{M^{*}}(X)=\lambda_M(X).$

**Proof.** Apply the dual rank formula to $X$, $E\setminus X$, and $E$:

$$
\lambda_{M^{*}}(X)
=\bigl(|X|-r(E)+r(E\setminus X)\bigr)
 +\bigl(|E\setminus X|-r(E)+r(X)\bigr)
 -\bigl(|E|-r(E)\bigr).
$$

The cardinalities cancel and the remainder is $r(X)+r(E\setminus X)-r(E)$. ∎

It follows at once that $M$ is connected exactly when $M^{*}$ is connected. More generally, duality preserves every separation defined solely by shore sizes and a bound on $\lambda$.

### Worked example 5: the connectivity profile of a uniform matroid

For $M=U(r,n)$ and $|X|=k$,

$\lambda(X)=\min(k,r)+\min(n-k,r)-r.$

In $U(2,5)$, a singleton has value $1+2-2=1$, a two-set has $2+2-2=2$, and a three-set has the same value two by symmetry. No nonempty proper set has value zero, so the matroid is connected. The numerical value does not by itself say how many graph vertices separate anything; this is a rank-overlap measure.

## 6. Separation terminology needs its convention attached

For an integer $k\ge 1$, we will call a partition $(X,E\setminus X)$ a **k-separation** when

$|X|\ge k, |E\setminus X|\ge k, \text{ and } \lambda(X)\le k-1.$

This convention is common but not universal. Some authors reserve “exact k-separation” for $\lambda(X)=k-1$, and some shift the parameter by one. A statement copied without its definition can therefore be off by one even if every calculation is correct.

Under our convention:

- a 1-separation is a nontrivial direct-sum partition;
- a 2-separation has both shores of size at least two and $\lambda\le 1$;
- a matroid with at least four elements is **3-connected** when it has no 1- or 2-separation.

The size clause prevents a singleton shore from making every ordinary element a “2-separation.” The ground-size clause prevents tiny uniform matroids from receiving a misleading higher-connectivity label. Some sources fold simplicity and cosimplicity into the definition; for matroids of adequate size these conditions follow from the absence of low-order separations, but small cases still need explicit treatment.

### Worked example 6: locate a two-separation

Take the four-edge cycle matroid $U(3,4)$ and split its ground set into two pairs $X,Y$. Then

$\lambda(X)=r(X)+r(Y)-r(E)=2+2-3=1.$

Both shores have size two, so this is a 2-separation. There is no 1-separation because every proper nonempty $X$ has positive $\lambda$. Thus the matroid is connected but not 3-connected. “Connected” does not mean “highly connected.”

## 7. Two-sums glue through one virtual element

Direct sums use no interface. A **two-sum** uses one interface element and then removes it.

Let $M_1,M_2$ have ground sets satisfying $E_1\cap E_2=\{p\}$. Assume $p$ is neither a loop nor a coloop of either matroid. The **two-sum construction theorem** says that there is a matroid $M_1\oplus _2M_2$ on

$E=(E_1\cup E_2)\setminus \{p\}$

whose circuits are:

1. circuits of $M_1$ not containing $p$;
2. circuits of $M_2$ not containing $p$;
3. sets $(C_1\cup C_2)\setminus \{p\}$ where each $C_i$ is a circuit of $M_i$ containing $p$.

The hypotheses prevent the interface from carrying no circuit information (a coloop) or being a circuit by itself (a loop). Here is why the circuit prescription is valid. Nonemptiness and minimality follow from minimality inside the summands. For elimination, two circuits confined to one summand use elimination there. If one circuit is confined and one crosses the seam, eliminate inside their common summand; a resulting circuit that avoids $p$ is already on the list, while one containing $p$ is combined across the seam with the unchanged circuit from the other summand. For two crossing circuits, perform the same elimination in a summand containing the element to be removed. If the result retains $p$, join it to either circuit through $p$ on the other side; if it avoids $p$, it is already an internal circuit. If the two same-side circuits coincide, eliminate the distinct other-side circuits at $p$ instead. Strong elimination protects any named surviving element needed in these cases. Thus the three circuit families satisfy elimination.

An equivalent basis description is particularly useful:

$(B_1\cup B_2)\setminus \{p\}$

is a two-sum basis exactly when $B_i$ is a basis of $M_i$ and $p$ belongs to exactly one of $B_1,B_2$. Hence

$r(M_1\oplus _2M_2)=r(M_1)+r(M_2)-1.$

The basis description follows by extending a circuit-free set on both sides and observing that exactly one side may spend a basis position on $p$. Conversely, a set contained in one of the displayed basis unions contains none of the three circuit types. This also recovers the same matroid from the basis and circuit descriptions.

**Two-sum duality.**

$(M_1\oplus _2M_2)^{*}=M_{1}^{*}\oplus _2M_{2}^{*}.$

Indeed, complementing a two-sum basis complements both $B_i$. Because $p$ occurs in exactly one primal basis, it occurs in exactly one complementary dual basis as well. The ground set after removing $p$ is unchanged.

### Worked example 7: two triangles make a four-cycle

Let $M_1$ have circuit $\{a,b,p\}$ and $M_2$ have circuit $\{c,d,p\}$; each is $U(2,3)$. Neither has a circuit avoiding $p$. The crossing circuit rule produces

$\{a,b,c,d\}.$

Thus the two-sum is $U(3,4)$, the cycle matroid of a four-cycle. Its rank is $2+2-1=3$. The visible ground set has no shared element: $p$ is a virtual seam, not a surviving edge.

The resulting pair partition $\{a,b\}|\{c,d\}$ has $\lambda=1$, recording that the pieces meet through a one-unit interface rather than a direct-sum interface.

## 8. What sums and connectivity do not say

Several attractive extrapolations are false or underspecified.

1. **A connected graph need not have a connected cycle matroid.** A cut vertex joining cyclic blocks is enough to separate the matroid.
2. **A bridge is not evidence of stronger connection.** A graph bridge is a matroid coloop and forms its own component.
3. **Two-sum is not union along an ordinary retained element.** The common element is deleted after it coordinates bases and circuits.
4. **A low value of $\lambda$ does not identify a unique decomposition.** Different shores can have the same value, and nested separations require a decomposition theorem to organize them.
5. **Minor operations need not preserve connectedness.** Deleting or contracting an element may reveal a separation.
6. **Pairwise circuit membership is not merely circuit-graph adjacency.** The component theorem uses its transitive closure; one circuit need not contain an entire component.
7. **“k-connected” without a convention is incomplete.** Shore-size requirements and the indexing of $\lambda$ must accompany the claim.
8. **A finite enumeration is not a general proof.** It can certify one encoded matroid and falsify a conjectured identity, but it cannot establish a theorem for all ground-set sizes.

## 9. Bounded project: exact duality and connectivity audit

Choose a matroid on at most eight labeled elements. It may be supplied by a complete rank table, a binary matrix, a graph, or a direct/two-sum construction. The project must remain small enough that every subset can be inspected exactly.

Produce the following artifacts:

1. **Input contract.** List the ground order and representation. If using a matrix, name the field; if using a graph, preserve loops and parallel-edge IDs.
2. **Rank audit.** Emit $r(X)$ for all $2^{|E|}$ subsets and check rank bounds, monotonicity, and submodularity.
3. **Dual audit.** Compute $r^{*}(X)=|X|-r(E)+r(E\setminus X)$ and verify $r^{**}=r$ subset by subset.
4. **Circuit components.** Extract minimal dependent sets, join elements that occur in a common circuit, and report the resulting equivalence classes. Compare them with every zero of $\lambda$.
5. **Separation table.** For one representative of each complementary pair $X,E\setminus X$, list shore sizes and $\lambda(X)$. Mark 1- and 2-separations under this chapter’s convention.
6. **Minor check.** For each element $e$, compare rank tables for $(M\setminus e)^{*}$ and $M^{*}/e$, and for $(M/e)^{*}$ and $M^{*}\setminus e$.
7. **Sum witness.** Construct one direct sum and one valid two-sum from components of size at most five before the seam is removed. Recover their rank, circuit, and $\lambda$ signatures.

The textual fallback is the complete table, not a picture of it. Exact integers should be used throughout. A graph drawing or colored matrix may accompany the table, but labels and partition membership must also be stated in text. The report must identify malformed inputs—especially a proposed two-sum whose seam is a loop or coloop—instead of silently producing a different construction.

A strong submission includes at least one connected but not 3-connected example, such as the two-triangle construction, and one disconnected example with a loop or coloop. It ends by naming which observations are exhaustive facts about the chosen instances and which conclusions follow from the general theorems proved above.

## 10. Solved exercises

### Exercise 1: derive total dual rank
<a id="duality-sums-connectivity-ex-1"></a>

Let $M$ have eight elements and rank three. Find $r(M^{*})$. If $X$ has five elements and $r_M(E\setminus X)=2$, find $r_{M^{*}}(X)$.

<details>
<summary>Hint 1</summary>

**Hint.** Use the dual-rank formula first with the whole ground set and then with $X$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The formulas are $r(M^*)=|E|-r(M)$ and $r^*(X)=|X|-r(E)+r(E\setminus X)$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Total dual rank is $8-3=5$. The subset formula gives

$r_{M^{*}}(X)=5-3+2=4.$

It cannot be five because the complement already uses two of the three units of primal rank; only one additional primal rank unit can come from $X$, leaving four dual-independent positions there.

</details>

### Exercise 2: identify a direct-sum separator
<a id="duality-sums-connectivity-ex-2"></a>

In $M=U(1,\{a,b\})\oplus U(2,\{c,d,e\})$, calculate $\lambda(\{a,b\})$ and $\lambda(\{a,c\})$.

<details>
<summary>Hint 1</summary>

**Hint.** Rank in a direct sum is the sum of ranks in the two summands.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For each shore evaluate $\lambda(X)=r(X)+r(E\setminus X)-r(E)$.

</details>

<details>
<summary>Solution</summary>

**Solution.** For $X=\{a,b\}$, the ranks of the shores are one and two, while total rank is three. Hence $\lambda(X)=1+2-3=0$, so $X$ is a separator.

For $Z=\{a,c\}$, $r(Z)=2$. Its complement $\{b,d,e\}$ has rank $1+2=3$. Therefore $\lambda(Z)=2+3-3=2$. This mixed set is not a separator even though it contains one element from each summand.

</details>

### Exercise 3: circuits certify connectedness
<a id="duality-sums-connectivity-ex-3"></a>

Suppose a matroid on $\{1,2,3,4,5\}$ has circuits $\{1,2,3\}$ and $\{3,4,5\}$, together with any circuits forced by elimination. Show that all elements lie in one component.

<details>
<summary>Hint 1</summary>

**Hint.** Each displayed circuit puts all its own elements into one circuit-connected class.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The two circuits share element three; use transitivity of the component relation, not an assertion about one giant circuit.

</details>

<details>
<summary>Solution</summary>

**Solution.** Elements $1,2,3$ occur in a common circuit, so they share a component. Elements $3,4,5$ also share a component. Since the two classes meet at $3$, transitivity of circuit-connectedness merges them. Thus there is one component. We do not need to assert that a single circuit contains all five elements.

</details>

### Exercise 4: dual separators
<a id="duality-sums-connectivity-ex-4"></a>

Prove directly from the rank formula that if $X$ is a separator of $M$, then it is a separator of $M^{*}$.

<details>
<summary>Hint 1</summary>

**Hint.** Expand both dual ranks in the definition of $\lambda_{M^*}(X)$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Complementary cardinalities add to $|E|$, so the extra size terms cancel.

</details>

<details>
<summary>Solution</summary>

**Solution.** Being a separator is equivalent to $\lambda_M(X)=0$. Expanding dual ranks gives

$\lambda_{M^{*}}(X)=\lambda_M(X)$

by cancellation of $|X|+|E\setminus X|=|E|$. Hence the dual value is also zero. Both shores are unchanged, so $X$ gives the corresponding direct-sum partition of the dual.

</details>

### Exercise 5: enumerate two-sum bases
<a id="duality-sums-connectivity-ex-5"></a>

Let each $M_i$ be a triangle matroid on $\{a,b,p\}$ and $\{c,d,p\}$. List the bases of their two-sum.

<details>
<summary>Hint 1</summary>

**Hint.** A triangle basis has two elements. The seam must occur in exactly one of the two chosen bases.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Separate the two cases according to which summand supplies the seam, then remove it.

</details>

<details>
<summary>Solution</summary>

**Solution.** A basis in each triangle is any pair. The seam $p$ must occur in exactly one chosen basis. If it occurs in $B_1$, choose one of $a,b$ with it, while $B_2=\{c,d\}$; after removing $p$ this gives $\{a,c,d\}$ or $\{b,c,d\}$. If it occurs in $B_2$, use $B_1=\{a,b\}$ and choose $p$ with one of $c,d$; this gives $\{a,b,c\}$ or $\{a,b,d\}$. These are all four three-subsets of $\{a,b,c,d\}$, the bases of $U(3,4)$.

</details>

### Exercise 6: reject an invalid seam
<a id="duality-sums-connectivity-ex-6"></a>

Why does the standard two-sum definition reject a seam $p$ that is a coloop of $M_1$?

<details>
<summary>Hint 1</summary>

**Hint.** Recall how a coloop meets circuits and bases.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Every basis on its side contains the seam, while no circuit on that side can contain it.

</details>

<details>
<summary>Solution</summary>

**Solution.** No circuit of $M_1$ contains a coloop. The crossing-circuit rule would then never send circuit information from $M_1-p$ through $M_2-p$. At the basis level, every basis of $M_1$ contains $p$, forcing every paired basis of $M_2$ to avoid $p$; the intended symmetric one-unit interface degenerates. This behavior is better described by deletion/contraction and direct-sum operations, not called a standard two-sum.

</details>

### Exercise 7: a uniform separation
<a id="duality-sums-connectivity-ex-7"></a>

For $U(3,6)$, calculate $\lambda(X)$ for $|X|=1,2,3$. Is the matroid 3-connected under this chapter’s convention?

<details>
<summary>Hint 1</summary>

**Hint.** Uniform rank depends only on cardinality.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Evaluate $\min(|X|,3)+\min(6-|X|,3)-3$, then check the shore-size restrictions for a two-separation.

</details>

<details>
<summary>Solution</summary>

**Solution.** The formula gives

- $|X|=1$: $\lambda=1+3-3=1$;
- $|X|=2$: $\lambda=2+3-3=2$;
- $|X|=3$: $\lambda=3+3-3=3$.

Complementary sizes give the remaining values. There is no 1-separation. A 2-separation requires both shores to have size at least two and $\lambda\le 1$; no such partition exists. Since the ground set has six elements, $U(3,6)$ is 3-connected under our convention.

</details>

### Exercise 8: a minor disconnects
<a id="duality-sums-connectivity-ex-8"></a>

Let $M=U(2,3)$ on $\{a,b,c\}$. Delete $c$ and determine whether the result is connected.

<details>
<summary>Hint 1</summary>

**Hint.** First identify the deletion as a uniform matroid on two remaining elements.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A full-rank two-element free matroid has no circuit joining its two elements.

</details>

<details>
<summary>Solution</summary>

**Solution.** The deletion is $U(2,2)$, whose sole basis is $\{a,b\}$. Both elements are coloops and there is no circuit containing them. Its rank splits as

$r(\{a\})+r(\{b\})=1+1=2=r(\{a,b\}),$

so it is the direct sum of two one-element coloops and is disconnected. The original triangle matroid is connected because its circuit $\{a,b,c\}$ contains every pair. Thus deletion can destroy connectedness.

</details>

### Exercise 9: graphic interpretation
<a id="duality-sums-connectivity-ex-9"></a>

Let $G$ be a square with a pendant edge $e$ attached at one vertex. Describe the components of $M(G)$.

<details>
<summary>Hint 1</summary>

**Hint.** Matroid components are joined by circuits rather than arbitrary graph paths.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** All square edges lie on one cycle, while the pendant edge lies on none.

</details>

<details>
<summary>Solution</summary>

**Solution.** The four square edges form one circuit and hence one matroid component. The pendant edge is a graph bridge, so it is a matroid coloop and belongs to no circuit. It forms a singleton component. Although $G$ is connected as a graph, $M(G)$ is the direct sum of the four-edge cycle matroid and the one-element coloop matroid.

</details>

### Exercise 10: self-dual separation order
<a id="duality-sums-connectivity-ex-10"></a>

Suppose $(X,E\setminus X)$ is a 2-separation of a six-element matroid $M$ under this chapter’s convention. Prove it is a 2-separation of $M^{*}$.

<details>
<summary>Hint 1</summary>

**Hint.** A two-separation is specified by shore sizes and an upper bound on $\lambda$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Duality changes neither shore size and leaves the connectivity function unchanged.

</details>

<details>
<summary>Solution</summary>

**Solution.** The shore sizes are properties of the same ground-set partition, so both remain at least two. Self-duality gives $\lambda_{M^{*}}(X)=\lambda_M(X)\le 1$. These are precisely the three conditions in the definition of a 2-separation. No simplicity or representability hypothesis is required.

</details>

## 11. Summary and forward connections

Dual rank is determined by complementary primal rank:

$r^{*}(X)=|X|-r(E)+r(E\setminus X).$

It exchanges loops with coloops and deletion with contraction. Direct sums join independent pieces without interaction; their circuits never cross the summand boundary, and zeroes of $\lambda$ detect exactly those boundaries. Circuit-connected classes are the canonical direct-sum components.

The connectivity function $\lambda(X)=r(X)+r(E\setminus X)-r(E)$ is nonnegative, symmetric, integral, and self-dual. With explicit shore-size conventions it defines low-order separations. A two-sum glues two matroids through a single nonloop, noncoloop seam and then removes that seam; its crossing circuits and basis rule expose a one-unit interface. Neither graph connectedness nor a small experiment may be substituted for these rank and circuit statements.

The next chapter uses exchange to optimize linear weights. Later chapters use two-separations to organize basis-exchange geometry and exact enumeration. The bounded project here supplies their diagnostic foundation: full rank tables, dual checks, component certificates, and explicit failure reports for malformed sums.


## Sources for the expanded teaching

The original proofs, statements, examples, solutions, and references above are retained. The new explanations and staged help are original. For a primary reference route, see James Oxley, [*Matroid Theory*](https://academic.oup.com/book/34846), and the [author's materials](https://www.math.lsu.edu/~oxley/). No additional theorem or page locator is asserted.

## Summary

Complementary bases determine dual rank. Zeroes of the symmetric, self-dual connectivity function detect direct-sum separators, and circuit-connected classes identify the components. Two-sums require a seam that is neither a loop nor a coloop; their basis and circuit descriptions explain the one-unit interface. Connectivity can disappear under minors and differs from graph connectedness. Weighted optimization next uses exchange within these structures.

