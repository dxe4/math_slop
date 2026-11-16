
# Bases, Fundamental Circuits, and Strong Exchange {#section-1-bases-fundamental-circuits-and-strong-exchange}

A basis is a complete independent choice, but completeness is not uniqueness. A connected graph can have many spanning trees; a vector configuration can have many coordinate bases; a partition matroid can have many capacity-saturating selections. Exchange explains how those complete choices fit together. The ordinary basis axiom replaces one element in one basis. Strong exchange finds a replacement that repairs both bases simultaneously.

This chapter develops the mechanism behind that stronger conclusion. Fundamental circuits record exactly why an outside element cannot enter a basis without a deletion. Fundamental cocircuits record exactly which outside elements can replace a chosen basis element. Their intersection produces symmetric exchange.

<a id="section-5-prerequisites-and-local-language"></a>
## Prerequisites and local language {#section-7-prerequisites-and-local-language}

We assume the independence and basis cryptomorphisms from the preceding chapter. We use finite matroids $M=(E,I)$ of rank $r=r(E)$. A **basis** without a qualifier means a basis of the whole ground set. A basis of $A\subseteq E$ belongs to the restriction to $A$.

Circuits are introduced here only as minimal dependent sets. Their complete axiom system and elimination theory are deferred to the circuit chapter. Duality is used in its basis form: complements of bases are declared to be bases of the dual, and the needed exchange check is given below.

<a id="section-11-1-ordinary-exchange-compares-complete-choices"></a>
## 1. Ordinary exchange compares complete choices {#section-13-1-ordinary-exchange-compares-complete-choices}

**Theorem 8.3 (Basis exchange).** If $B_1,B_2$ are bases and $x\in B_1\setminus B_2$, then some $y\in B_2\setminus B_1$ makes

$B_1-x+y=(B_1\setminus \{x\})\cup \{y\}$

a basis.

**Proof.** The set $B_1-x$ is independent and has size $r-1$, while $B_2$ is independent of size $r$. Augmentation supplies $y\in B_2\setminus (B_1-x)$ such that $B_1-x+y$ is independent. Since $x\notin B_2$, the candidate lies in $B_2\setminus B_1$. The new independent set has size $r$, so it is a basis. ∎

The theorem is directional. It guarantees that $B_1$ can trade $x$ for some $y$; it does not yet say that $B_2-y+x$ is a basis. Strong exchange will supply one $y$ satisfying both requirements.

<a id="section-23-worked-example-spanning-trees-of-a-square"></a>
### Worked example: spanning trees of a square {#section-25-worked-example-spanning-trees-of-a-square}

Let the graph be the square $1-2-3-4-1$ with diagonal $13$. Take

$B_1=\{12,23,34\}$ and $B_2=\{12,34,41\}$.

Both are spanning trees. For $x=23$, the only element of $B_2\setminus B_1$ is $41$, and $B_1-23+41=\{12,34,41\}$ is again a tree. In a larger graph there may be several valid replacements; the cycle created by adding a candidate exposes them exactly.

<a id="section-31-2-the-fundamental-circuit-is-a-local-dependence-certifi"></a>
## 2. The fundamental circuit is a local dependence certificate {#section-33-2-the-fundamental-circuit-is-a-local-dependence-certifi}

Let $B$ be a basis and $e\in E\setminus B$. The set $B+e$ is dependent because a basis is maximal. Since the ground set is finite, $B+e$ contains a minimal dependent subset. Any such circuit must contain $e$, because $B$ itself is independent.

**Theorem 8.4 (Fundamental-circuit).** There is a unique circuit $C(e,B)$ contained in $B+e$. Moreover, for $b\in B$,

$b\in C(e,B) \Longleftrightarrow B-b+e\text{ is }a basis$.

**Proof.** Let $C\subseteq B+e$ be a circuit. If $b\in C-e$, then $C-b$ is independent. Extend it toward the basis $B$ using augmentation. The element $b$ can never be added, because it would recreate the dependent set $C$. Thus the extension uses only $B-b$, and it reaches the $r$-element set $B-b+e$; this set is a basis.

If $b\notin C$ and $B-b+e$ were a basis, it would contain the dependent set $C$, impossible by heredity. Hence the displayed equivalence holds.

For uniqueness, suppose $C_1,C_2\subseteq B+e$ are distinct circuits. Both contain $e$, so choose $b\in C_1\setminus C_2$; this element lies in $B$. The equivalence for $C_1$ says $B-b+e$ is a basis. But that basis contains $C_2$, since $b\notin C_2$, a contradiction. ∎

Thus one finite set answers every one-element replacement question for $e$. In a graphic matroid, $C(e,B)$ is the unique graph cycle created by adding non-tree edge $e$ to a spanning tree. In a linear matroid, it is the support of the unique dependence of $e$ on the basis columns.

<a id="section-47-3-basis-graphs-are-connected-by-exchanges"></a>
## 3. Basis graphs are connected by exchanges {#section-49-3-basis-graphs-are-connected-by-exchanges}

The **basis graph** of $M$ has one vertex for each basis and an edge between bases whose symmetric difference has size two. Ordinary exchange makes this graph connected.

**Theorem 8.1.** For bases $B_1,B_2$, there is an exchange path of length $|B_1\setminus B_2|$ from $B_1$ to $B_2$, and no shorter path is possible.

**Proof.** If the bases differ, choose $x\in B_1\setminus B_2$. Basis exchange supplies $y\in B_2\setminus B_1$ such that $B_1'=B_1-x+y$ is a basis. Now $|B_1'\setminus B_2|=|B_1\setminus B_2|-1$. Repeating reaches $B_2$ in exactly the displayed number of steps. One exchange can remove at most one element outside $B_2$, so no path can be shorter. ∎

Connectivity is a structural theorem, not an algorithmic performance claim. Finding a valid exchange may require an independence oracle, and a long sequence of locally valid exchanges need not optimize a nonlinear objective.

<a id="section-57-4-dual-bases-and-fundamental-cocircuits"></a>
## 4. Dual bases and fundamental cocircuits {#section-59-4-dual-bases-and-fundamental-cocircuits}

Define $M^{*}$ by declaring $E\setminus B$ to be a basis of $M^{*}$ exactly when $B$ is a basis of $M$. This really satisfies basis exchange. Given dual bases $E\setminus B_1,E\setminus B_2$ and

$x\in (E\setminus B_1)\setminus (E\setminus B_2)=B_2\setminus B_1$,

consider the fundamental circuit $C(x,B_1)\subseteq B_1+x$. It must contain some $y\in B_1\setminus B_2$: otherwise the whole circuit would lie in the independent basis $B_2$, because $x\in B_2$ and every other member would lie in $B_1\cap B_2$. For such $y$, the fundamental-circuit replacement theorem gives $B_1-y+x$ as a basis. Taking its complement gives

$(E\setminus B_1)-x+y$,

which is exactly the required exchange of the first dual basis toward the second.

A **cocircuit** of $M$ is a circuit of $M^{*}$. If $B$ is a basis and $b\in B$, the **fundamental cocircuit** $D(b,B)$ is the unique cocircuit contained in $(E\setminus B)+b$.

The dual of the fundamental-circuit replacement formula gives

$e\in D(b,B)\setminus \{b\} \Longleftrightarrow B-b+e\text{ is }a basis$.

So $D(b,B)$ consists of $b$ together with every outside element capable of replacing it.

<a id="section-77-graphic-interpretation"></a>
### Graphic interpretation {#section-79-graphic-interpretation}

For a spanning tree $T$ and tree edge $b$, deleting $b$ splits the tree into two vertex components. The edges of the ambient graph crossing that cut form $D(b,T)$. Any such edge reconnects the two components, so it can replace $b$. This cut is a minimal nonempty edge cut, also called a bond.

<a id="section-81-5-circuit-cocircuit-orthogonality"></a>
## 5. Circuit–cocircuit orthogonality {#section-83-5-circuit-cocircuit-orthogonality}

Circuits and cocircuits cannot meet in exactly one element.

**Theorem 8.5 (Orthogonality).** If $C$ is a circuit and $D$ is a cocircuit of a matroid, then $|C\cap D|\ne 1$.

**Proof.** A cocircuit is the complement of a hyperplane: $H=E\setminus D$ is a maximal set of rank $r-1$. Suppose $C\cap D=\{e\}$. Then $C-e\subseteq H$. Because $C$ is a circuit, $e$ lies in the closure of $C-e$, hence in the closure of $H$. But a hyperplane is closed, so $e\in H$, contradicting $e\in D$. ∎

The hyperplane characterization follows from dual bases: deleting a cocircuit leaves rank $r-1$, while adding any member of the cocircuit restores rank $r$. The rank-and-flat chapter develops this language fully.

The conclusion is only “not exactly one.” General matroids may have a circuit and cocircuit meeting in three elements. Even-cardinality intersection is a stronger property of binary matroids, not a universal orthogonality law.

<a id="section-93-6-strong-symmetric-basis-exchange"></a>
## 6. Strong symmetric basis exchange {#section-95-6-strong-symmetric-basis-exchange}

**Theorem 8.6 (Strong basis exchange).** Let $B_1,B_2$ be bases and let $b\in B_1\setminus B_2$. There exists $e\in B_2\setminus B_1$ such that both

$B_1-b+e$ and $B_2-e+b$

are bases.

**Proof.** Form the fundamental circuit $C=C(b,B_2)$ and the fundamental cocircuit $D=D(b,B_1)$. Both contain $b$. Circuit–cocircuit orthogonality says their intersection cannot be $\{b\}$ alone, so choose $e\in (C\cap D)\setminus \{b\}$. Because $C-b\subseteq B_2$, this element belongs to $B_2$. Because $D-b\subseteq E\setminus B_1$, it does not belong to $B_1$; hence $e\in B_2\setminus B_1$.

Membership $e\in D(b,B_1)$ gives that $B_1-b+e$ is a basis. Membership $e\in C(b,B_2)$ gives that $B_2-e+b$ is a basis. ∎

This proof explains the theorem rather than merely iterating ordinary exchange. One certificate lists candidates that repair the first basis; the other lists candidates that repair the second; orthogonality guarantees a common candidate.

<a id="section-107-strong-does-not-mean-arbitrary"></a>
### Strong does not mean arbitrary {#section-109-strong-does-not-mean-arbitrary}

It is false that every $e\in B_2\setminus B_1$ works. In the graphic example, adding a non-tree edge creates a specific cycle, and only tree edges on that cycle can be removed. Strong exchange asserts existence after one element $b$ is fixed; it does not license every pairwise swap.

<a id="section-111-7-multiple-exchange-and-protected-subsets"></a>
## 7. Multiple exchange and protected subsets {#section-113-7-multiple-exchange-and-protected-subsets}

A useful extension is the **multiple symmetric exchange theorem**:

> If $B_1,B_2$ are bases and $X\subseteq B_1$, there exists $Y\subseteq B_2$ with $|Y|=|X|$ such that both $(B_1\setminus X)\cup Y$ and $(B_2\setminus Y)\cup X$ are bases.

The proof is substantially stronger than matching individually valid symmetric
swaps. In particular, a static graph whose edges record single-element
symmetric exchanges does not by itself certify that all matched swaps may be
performed simultaneously: earlier swaps change the fundamental circuits and
cocircuits governing later ones. A complete proof can be obtained from the
matroid-intersection or rank-submodularity machinery developed in a later
volume. We therefore record the theorem here as a forward result, but do not
pretend that the single-element proof above establishes it. The proved strong
single exchange theorem and the one-way exchange-bijection result below are
the only forms used in this chapter.

The distinctness is essential. Reusing one replacement for two deleted elements would produce a set of the wrong cardinality. The theorem also protects the complement $B_1\setminus X$, a feature that naive repeated exchange does not automatically preserve.

<a id="section-130-8-weighted-exchange-without-conflating-objectives"></a>
## 8. Weighted exchange without conflating objectives {#section-132-8-weighted-exchange-without-conflating-objectives}

Let $B$ be a maximum-weight basis under arbitrary real weights. For every $e\notin B$ and every $b\in C(e,B)-e$, the replacement basis $B-b+e$ cannot have greater weight. Therefore

$w(b)\ge w(e)$.

This is a local optimality certificate. The converse needs a simultaneous comparison with the original basis; changing the basis after each exchange would invalidate inequalities stated only for its original fundamental circuits.

**Lemma 8.7 (Exchange-bijection).** For bases $B,B'$, there is a bijection

$\varphi:B\setminus B'\to B'\setminus B$

such that $B-b+\varphi(b)$ is a basis for every $b\in B\setminus B'$.

**Proof.** Form a bipartite graph with left side $X=B\setminus B'$, right side $Y=B'\setminus B$, and edge $b e$ when $B-b+e$ is a basis. We verify Hall's condition. For $S\subseteq X$, let $N(S)$ be its neighbors. If $e\in Y\setminus N(S)$, then the fundamental circuit $C(e,B)$ avoids $S$; otherwise a member of $S$ could be exchanged for $e$. Hence $e\in \operatorname{cl}(B\setminus S)$. Also $B\cap B'\subseteq B\setminus S$. Therefore

$B'\setminus N(S)\subseteq \operatorname{cl}(B\setminus S)$.

The left side is independent, so

$r-|N(S)|=|B'\setminus N(S)|\le r(B\setminus S)=r-|S|$.

Thus $|N(S)|\ge |S|$. Hall's theorem gives a matching saturating $X$; equal basis sizes give $|X|=|Y|$, so the matching is a bijection. ∎

Now suppose the original basis $B$ satisfies $w(b)\ge w(e)$ whenever $e\notin B$ and $b\in C(e,B)-e$. For any basis $B'$, use the exchange bijection. Each valid swap gives

$w(b)\ge w(\varphi(b))$.

Summing over $B\setminus B'$ yields $w(B\setminus B')\ge w(B'\setminus B)$. The common intersection cancels, so $w(B)\ge w(B')$. Therefore $B$ is a maximum-weight basis.

For maximum weight over all independent sets, negative elements are optional and should be skipped. For a maximum-weight basis, rank must be filled even if every remaining weight is negative. Fundamental-circuit inequalities certify the second objective; they do not turn a negative basis into the best optional independent set.

<a id="section-162-9-common-errors-and-diagnostics"></a>
## 9. Common errors and diagnostics {#section-164-9-common-errors-and-diagnostics}

1. **The exchange is assumed symmetric.** Ordinary basis exchange repairs only the first basis; cite or prove strong exchange before claiming both swaps.
2. **A fundamental circuit is computed in an arbitrary dependent set.** Uniqueness is guaranteed specifically in $B+e$ with $B$ a basis and $e\notin B$.
3. **Every cycle edge is offered as a replacement.** Only edges of the unique fundamental cycle can be removed after a non-tree edge is added.
4. **Circuit–cocircuit intersection is declared even in every matroid.** “Not one” is general; parity requires binary representability.
5. **Repeated exchanges silently delete protected elements.** Use a protected-set or multiple-exchange theorem when a whole subset must remain.
6. **Local optimality ignores the objective.** Basis certificates and optional-independent-set certificates handle negative weights differently.

<a id="section-171-developed-examples-and-dependence-checks"></a>
## Developed examples and dependence checks {#section-173-developed-examples-and-dependence-checks}

<a id="section-173-worked-example-a-symmetric-exchange-in-coordinates"></a>
### Worked example: a symmetric exchange in coordinates {#section-175-worked-example-a-symmetric-exchange-in-coordinates}

Work over the rational field with indexed columns $a=(1,0)$, $b=(0,1)$, $c=(1,1)$ and $d=(1,-1)$. The sets $B_1=\{a,b\}$ and $B_2=\{c,d\}$ are bases: their determinants are respectively $1$ and $-2$. Fix the element $a$ in the first basis. Adding $a$ to $B_2$ creates the circuit $\{a,c,d\}$, since its rank is two and all its pairs are independent. Deleting $a$ from $B_1$ leaves $\{b\}$; either $c$ or $d$ can replace it because neither is a scalar multiple of $b$.

The fundamental cocircuit is therefore $D(a,B_1)=\{a,c,d\}$. Its intersection with $C(a,B_2)$ contains both $c$ and $d$ besides the fixed element. Choose $c$. The repaired first basis $\{b,c\}$ has determinant $-1$, and the repaired second basis $\{a,d\}$ has determinant $-1$. This verifies both conclusions rather than inferring the second from the first. The example has a genuine choice of replacements, which the square example did not have.

The field qualification is essential. Over characteristic two, the columns $c,d$ coincide, so the displayed $B_2$ would not be a basis. The exchange theorem holds over every field for the represented matroid, but its input hypotheses must first hold in that field. A coordinate calculation can illustrate a universal matroid theorem without making the chosen matrix a valid example in every characteristic.

<a id="section-181-worked-example-the-block-that-must-supply-a-replacement"></a>
### Worked example: the block that must supply a replacement {#section-183-worked-example-the-block-that-must-supply-a-replacement}

Take a partition matroid on blocks $P=\{p_1,p_2,p_3\}$ and $Q=\{q_1,q_2,q_3\}$ with capacities two and one. Let $B_1=\{p_1,p_2,q_1\}$ and $B_2=\{p_2,p_3,q_2\}$. Both saturate the two capacities and have full rank three. Fix $p_1\in B_1\setminus B_2$. Deleting it leaves one unit of unused capacity in block $P$ and none in block $Q$.

The two elements of $B_2\setminus B_1$ are $p_3$ and $q_2$. Only $p_3$ repairs the first basis. Inserting $q_2$ would leave two elements in $Q$ and violate its quota. Taking $p_3$ also repairs the second basis, since $B_2-p_3+p_1=\{p_1,p_2,q_2\}$ still has two elements in $P$ and one in $Q$. Here the strong replacement is forced by the block counts.

The circuit $C(p_1,B_2)$ is $\{p_1,p_2,p_3\}$, while the cocircuit $D(p_1,B_1)$ is $\{p_1,p_3\}$. Their intersection identifies the same forced replacement. Notice that an element in a different block is not a poor replacement merely because of its weight; it is infeasible before any objective is considered. This is why structural exchange and weighted comparison are best checked in that order.

<a id="section-189-a-full-bridge-from-cocircuits-to-hyperplanes"></a>
### A full bridge from cocircuits to hyperplanes {#section-191-a-full-bridge-from-cocircuits-to-hyperplanes}

The orthogonality proof above uses the hyperplane description of a cocircuit. The following argument makes that dependency explicit without strengthening orthogonality to a parity claim.

**Proposition 8.2 (Cocircuits meet every basis minimally).** A subset $D\subseteq E$ is a cocircuit exactly when it is an inclusion-minimal set meeting every primal basis. Consequently $E\setminus D$ is a hyperplane.

**Proof.** A set is independent in the dual exactly when it is contained in some dual basis, hence in the complement of some primal basis. Thus $D$ is dependent in the dual exactly when no primal basis avoids it. Taking inclusion-minimal dependent sets proves the first equivalence.

Write $H=E\setminus D$. Since $D$ meets every basis, $H$ is nonspanning. Minimality says that $H+e$ is spanning for every $e\in D$: otherwise the proper subset $D-e$ would still meet every basis. Its rank therefore rises from $r(H)$ to $r(E)$ on adding one element. Rank can rise by at most one, so $r(H)=r(E)-1$.

Moreover no element outside $H$ lies in its closure, since every such element raises rank. Thus $H$ is a flat. Every strictly larger set contains some $e\notin H$ and is spanning, so no strictly larger proper flat exists. Hence $H$ is a hyperplane. Conversely the complement of a hyperplane meets every basis; adding any outside element to that hyperplane gives a spanning set, so removing that element from its complement destroys the hitting property. The complement is therefore a minimal hitting set and a cocircuit. ∎

A rank-zero matroid has no hyperplanes and no cocircuits: its empty primal basis cannot be met by any set. This is consistent with the argument, since it never manufactures a nonspanning set when the full rank is zero. Loops, by contrast, can occur in circuits and belong to no primal basis. Distinguishing these boundary cases keeps the proof valid beyond simple connected examples.

<a id="section-203-10-solved-exercises"></a>
## 10. Solved exercises {#section-205-10-solved-exercises}

<a id="bases-strong-exchange-ex-1"></a>
<a id="section-206-exercise-1-compute-fundamental-circuits"></a>
### Exercise 1: compute fundamental circuits {#section-208-exercise-1-compute-fundamental-circuits}

In the graph consisting of a square $12,23,34,41$ and diagonal $13$, take the spanning tree $T=\{12,23,34\}$. Find $C(41,T)$ and $C(13,T)$, and list every valid tree-edge deletion for each insertion.


<details><summary>Hint 1</summary>

Add each proposed edge to the fixed tree and identify its unique cycle.

</details>

<details><summary>Hint 2</summary>

The removable tree edges are exactly the old edges on that cycle; check separately which vertices the diagonal reaches.

</details>

<details><summary>Solution</summary>

**Solution.** Adding $41$ closes the cycle $1-2-3-4-1$, so $C(41,T)=\{12,23,34,41\}$. Deleting any of $12,23,34$ breaks that cycle and leaves a spanning tree. Adding $13$ closes the triangle $1-2-3-1$, so $C(13,T)=\{12,23,13\}$. Only $12$ or $23$ can be deleted; deleting $34$ would leave the triangle and isolate vertex $4$ from a full-rank tree.

</details>

<a id="bases-strong-exchange-ex-2"></a>
<a id="section-230-exercise-2-fundamental-cocircuit-of-a-tree-edge"></a>
### Exercise 2: fundamental cocircuit of a tree edge {#section-232-exercise-2-fundamental-cocircuit-of-a-tree-edge}

For the same graph and tree $T$, compute $D(23,T)$.


<details><summary>Hint 1</summary>

Delete the specified tree edge before inspecting replacement candidates.

</details>

<details><summary>Hint 2</summary>

List the two resulting vertex components, then include every ambient edge crossing between them, including the deleted edge itself.

</details>

<details><summary>Solution</summary>

**Solution.** Delete $23$ from $T$. The remaining tree edges $12,34$ create components $\{1,2\}$ and $\{3,4\}$. Ambient edges crossing between them are $23$, $41$, and $13$; edge $34$ stays inside the second component and $12$ stays inside the first. Thus $D(23,T)=\{23,41,13\}$. Replacing $23$ by either $41$ or $13$ reconnects the components and gives a spanning tree.

</details>

<a id="bases-strong-exchange-ex-3"></a>
<a id="section-254-exercise-3-exhibit-strong-exchange"></a>
### Exercise 3: exhibit strong exchange {#section-256-exercise-3-exhibit-strong-exchange}

Let $B_1=\{12,23,34\}$ and $B_2=\{12,34,41\}$ in the square graph above. Fix $b=23$. Find an element satisfying strong exchange and verify both bases directly.


<details><summary>Hint 1</summary>

Compute the two set differences before attempting a swap.

</details>

<details><summary>Hint 2</summary>

The candidate must both reconnect the cut of the first tree and lie on the insertion cycle in the second tree.

</details>

<details><summary>Solution</summary>

**Solution.** Here $B_2\setminus B_1=\{41\}$. The fundamental cocircuit $D(23,B_1)$ contains $41$, and the fundamental circuit $C(23,B_2)$ is the square cycle $\{12,23,34,41\}$, so their intersection beyond $23$ contains $41$. The swaps are $B_1-23+41=\{12,34,41\}=B_2$ and $B_2-41+23=\{12,23,34\}=B_1$, both spanning trees.

</details>

<a id="bases-strong-exchange-ex-4"></a>
<a id="section-278-exercise-4-a-basis-graph-distance"></a>
### Exercise 4: a basis-graph distance {#section-280-exercise-4-a-basis-graph-distance}

In $U(3,6)$, let $B_1=\{1,2,3\}$ and $B_2=\{4,5,6\}$. Determine their basis-graph distance and count the shortest exchange sequences if the order of inserted elements and deleted elements are both recorded.


<details><summary>Hint 1</summary>

Each exchange can remove only one element outside the target basis.

</details>

<details><summary>Hint 2</summary>

A shortest path records one permutation of the deleted elements and one permutation of the inserted elements.

</details>

<details><summary>Solution</summary>

**Solution.** The bases are disjoint, so $|B_1\setminus B_2|=3$; the distance theorem gives distance three. A shortest sequence chooses an order in which to delete $1,2,3$ and an order in which to insert $4,5,6$, pairing the two orders step by step. Every intermediate three-set is a basis in a uniform matroid. There are $3!$ deletion orders and $3!$ insertion orders, hence $36$ recorded shortest sequences.

</details>

<a id="bases-strong-exchange-ex-5"></a>
<a id="section-302-exercise-5-certify-a-maximum-weight-basis"></a>
### Exercise 5: certify a maximum-weight basis {#section-304-exercise-5-certify-a-maximum-weight-basis}

In the graphic matroid of the square with diagonal $13$, let edge weights be $w(12)=8$, $w(23)=7$, $w(34)=6$, $w(41)=5$, and $w(13)=4$. Show that $T=\{12,23,34\}$ is a maximum-weight basis using fundamental circuits, not enumeration.


<details><summary>Hint 1</summary>

List the fundamental circuit of each edge outside the proposed tree.

</details>

<details><summary>Hint 2</summary>

Compare its weight only against the tree edges in that circuit, then apply the proved exchange-bijection certificate.

</details>

<details><summary>Solution</summary>

**Solution.** For outside edge $41$, the fundamental circuit is $\{12,23,34,41\}$. Every removable tree edge has weight at least $6>5=w(41)$. For outside edge $13$, the fundamental circuit is $\{12,23,13\}$, and both removable weights $8,7$ exceed $4$. Thus no one-edge exchange can increase weight. The fundamental-circuit optimality certificate for matroid bases implies that $T$ is maximum-weight. Its total is $21$. Notice that the certificate compares only valid exchanges; comparing $13$ with unrelated edge $34$ would contribute nothing.

</details>

<a id="bases-strong-exchange-ex-6"></a>
<a id="section-326-exercise-6-insertion-of-a-loop"></a>
### Exercise 6: insertion of a loop {#section-328-exercise-6-insertion-of-a-loop}

Let $\ell$ be a loop and $B$ a basis. Determine $C(\ell,B)$ and explain why no deletion from $B$ makes $B-b+\ell$ a basis.

<details><summary>Hint 1</summary>

The singleton containing a loop is already minimally dependent.

</details>
<details><summary>Hint 2</summary>

A basis cannot contain any dependent subset, regardless of its cardinality.

</details>
<details><summary>Solution</summary>

The fundamental circuit is $\{\ell\}$. Every set $B-b+\ell$ contains that circuit and is dependent, so no $b\in B$ is a valid deletion. This agrees with the replacement theorem because no element of $B$ lies in $C(\ell,B)$. If $B$ is empty there is no deletion to consider, and the same singleton circuit remains valid.

</details>

<a id="bases-strong-exchange-ex-7"></a>
<a id="section-347-exercise-7-symmetric-exchange-in-a-quota-block"></a>
### Exercise 7: symmetric exchange in a quota block {#section-349-exercise-7-symmetric-exchange-in-a-quota-block}

For the partition matroid in the developed example, fix $q_1\in B_1\setminus B_2$ instead of $p_1$. Find the strong replacement and verify its uniqueness.

<details><summary>Hint 1</summary>

After removing $q_1$, exactly one quota block has a vacant place.

</details>
<details><summary>Hint 2</summary>

Among $p_3,q_2$, only an element of $Q$ can fill the vacancy without exceeding the other quota.

</details>
<details><summary>Solution</summary>

The replacement is $q_2$. The sets $B_1-q_1+q_2=\{p_1,p_2,q_2\}$ and $B_2-q_2+q_1=\{p_2,p_3,q_1\}$ both have the required block counts and are bases. Replacing $q_1$ by $p_3$ would put three elements in $P$, exceeding capacity two. Thus $q_2$ is the unique feasible replacement even before the second basis is checked.

</details>

<a id="bases-strong-exchange-ex-8"></a>
<a id="section-368-exercise-8-distances-with-a-common-intersection"></a>
### Exercise 8: distances with a common intersection {#section-370-exercise-8-distances-with-a-common-intersection}

In $U(3,5)$ take $B=\{1,2,3\}$ and $B'=\{1,4,5\}$. Find their distance and count their shortest recorded exchange sequences.

<details><summary>Hint 1</summary>

The common element should remain throughout a shortest path.

</details>
<details><summary>Hint 2</summary>

Order the two deletions and the two insertions independently.

</details>
<details><summary>Solution</summary>

The distance is $|B\setminus B'|=2$. Each shortest path must delete $2,3$ and insert $4,5$, using one of each at every step. There are $2!\,2!=4$ recorded sequences, all valid because every three-set is a uniform-matroid basis. Removing the common element one would fail to reduce the difference from the target at that step and therefore could not occur on a length-two path.

</details>

<a id="bases-strong-exchange-ex-9"></a>
<a id="section-389-exercise-9-distinct-weights-give-a-unique-optimum"></a>
### Exercise 9: distinct weights give a unique optimum {#section-391-exercise-9-distinct-weights-give-a-unique-optimum}

Assume all ground-element weights are pairwise distinct. Prove that the maximum-weight basis is unique.

<details><summary>Hint 1</summary>

Fix a maximum basis and use its fundamental-circuit inequalities.

</details>
<details><summary>Hint 2</summary>

Apply the exchange-bijection lemma to any different basis; every paired inequality is then strict.

</details>
<details><summary>Solution</summary>

Let $B$ be maximum and $B'$ different. For the exchange bijection $\varphi:B\setminus B'\to B'\setminus B$, maximality gives $w(b)\ge w(\varphi(b))$ for every valid replacement. The elements are distinct and all weights are distinct, so each inequality is strict. The nonempty finite sum gives $w(B\setminus B')>w(B'\setminus B)$. Cancelling the common intersection proves $w(B)>w(B')$. Therefore no different basis has maximum weight.

</details>

<a id="bases-strong-exchange-ex-10"></a>
<a id="section-410-exercise-10-a-one-way-exchange-need-not-be-symmetric"></a>
### Exercise 10: a one-way exchange need not be symmetric {#section-412-exercise-10-a-one-way-exchange-need-not-be-symmetric}

In the square with diagonal $13$, let $B_1=\{12,23,34\}$ and $B_2=\{13,23,41\}$. Fix $b=12$. Show that replacing $b$ by $41$ repairs only the first basis, and find a replacement repairing both.

<details><summary>Hint 1</summary>

Check the second swapped edge set for a triangle and an isolated vertex.

</details>
<details><summary>Hint 2</summary>

The other candidate in $B_2\setminus B_1$ is the diagonal.

</details>
<details><summary>Solution</summary>

The first set $B_1-12+41=\{23,34,41\}$ is the path $2-3-4-1$. But $B_2-41+12=\{13,23,12\}$ is a triangle on $1,2,3$ and does not span vertex four, so it is not a basis. Taking $e=13$ gives $B_1-12+13=\{13,23,34\}$ and $B_2-13+12=\{12,23,41\}$, both trees. The example separates a valid directional exchange from the stronger simultaneous conclusion.

</details>

<a id="section-430-chapter-summary"></a>
## Chapter summary {#section-432-chapter-summary}

Ordinary basis exchange connects every pair of bases and determines exact basis-graph distance. Adding one outside element to a basis creates a unique fundamental circuit; its members are precisely the removable basis elements. Dually, a fundamental cocircuit lists every outside replacement for a fixed basis element. Circuit–cocircuit orthogonality guarantees that these lists intersect beyond the fixed element, proving strong symmetric exchange. Multiple exchange protects whole subsets, while fundamental-circuit inequalities turn exchange into a verifiable maximum-weight basis certificate. None of these conclusions licenses arbitrary swaps or erases the difference between a basis objective and optional independent-set optimization.

<a id="section-434-source-and-verification-note"></a>
## Sources {#section-436-source-and-verification-note}

For the strong basis-exchange result, see Neil White, ed., *Theory of Matroids* (Cambridge University Press, 1986), Chapter 4; [edition record](https://doi.org/10.1017/CBO9780511629563). The chapter author and theorem/page locator were not established by the accepted metadata audit, so this citation supports a modern source route rather than priority or exact textual dependence.


<a id="bases-strong-exchange-summary"></a>
<a id="section-440-summary"></a>
## Summary {#section-442-summary}

Fundamental circuits and cocircuits give exact local replacement lists. Orthogonality turns their intersection into a symmetric exchange, while an exchange bijection compares the weights of whole bases. The coordinate and quota examples show why candidate feasibility, field hypotheses, and the distinction between one-way and symmetric exchange must be checked explicitly. The next rank chapter supplies the closure and hyperplane geometry used by these certificates.
