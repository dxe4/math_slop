
# Circuits, Elimination, and Orthogonality Patterns

Dependence is often easier to understand through its smallest witnesses. A graph cycle is a minimal obstruction to being a forest. A minimally dependent list of columns has a dependence whose support shrinks no further. Matroid circuits abstract those witnesses. Their elimination law says that two overlapping minimal obstructions can cancel a shared element and reveal another obstruction inside their union.

Elimination is strong enough to reconstruct the entire matroid, but it is also easy to overstate. The general law guarantees a circuit contained in a union with one element removed. It does not say that the symmetric difference is always a circuit, nor that circuits and cocircuits meet evenly. Those stronger patterns belong to binary matroids.

## Prerequisites and conventions

We assume finite matroids, fundamental circuits, rank closure, hyperplanes, and basis duality. A **proper subset** may remove more than one element. In a verified hereditary family, a dependent set is minimal exactly when every one-element deletion is independent; before heredity is known, testing only immediate deletions is not sufficient.

Graph examples allow loops and parallel edges when explicitly stated: a graph loop is a one-edge cycle, and two parallel links form a two-edge cycle.

## 1. Circuits are minimal dependence certificates

A **circuit** is a minimal dependent subset $C\subseteq E$:

- $C$ is dependent;
- every proper subset of $C$ is independent.

Every dependent set in a finite matroid contains a circuit: choose a dependent subset of minimum cardinality. An element is a **loop** exactly when its singleton is a circuit. Distinct nonloops $e,f$ are **parallel** exactly when $\{e,f\}$ is a circuit.

For a circuit $C$ and any $e\in C$,

$r(C)=r(C-e)=|C|-1$.

The deletion is independent of size $|C|-1$, while the dependent whole set cannot have rank $|C|$.

### Linear interpretation

If indexed columns form a circuit, there is a nonzero linear relation among them, and every coefficient in that relation is nonzero. A zero coefficient would exhibit dependence on a proper subset. The relation is unique up to nonzero scalar: deleting any one column leaves a basis for the span, so the omitted column has unique coordinates in that basis.

## 2. Fundamental uniqueness drives elimination

Recall that for a basis $B$ and $e\notin B$, $B+e$ contains a unique circuit $C(e,B)$. This gives a short route to ordinary circuit elimination.

**Theorem 10.2 (Circuit elimination).** If distinct circuits $C_1,C_2$ share $e\in C_1\cap C_2$, then there exists a circuit

$C_3\subseteq (C_1\cup C_2)\setminus \{e\}$.

**Proof.** Suppose $(C_1\cup C_2)-e$ were independent. Extend it to a basis $B$. Then both $C_1$ and $C_2$ are circuits contained in $B+e$, contradicting uniqueness of the fundamental circuit. Hence $(C_1\cup C_2)-e$ is dependent. A minimal dependent subset of it is the required $C_3$. ∎

The theorem says “there exists.” There may be several possible $C_3$, and the entire set $(C_1\cup C_2)-e$ need not be a circuit because it may contain a smaller obstruction.

### Graphic example

Let two triangles $abc$ and $acd$ share edge $ac$. Deleting the shared edge from their union leaves the four-cycle $a-b-c-d-a$, itself a circuit. If the cycles share a longer path or have chords in the ambient graph, the remaining union may contain several cycles; elimination chooses at least one.

## 3. Strong elimination protects another element

Ordinary elimination has a useful refinement.

**Strong circuit elimination.** If distinct circuits $C_1,C_2$ share $e$ and $f\in C_1\setminus C_2$, then some circuit $C_3$ satisfies

$f\in C_3\subseteq (C_1\cup C_2)\setminus \{e\}$.

**Proof.** Put $X=(C_1\cup C_2)\setminus \{e,f\}$. Circuit minimality gives $e\in \operatorname{cl}(C_2-e)\subseteq \operatorname{cl}(X)$, and it gives $f\in \operatorname{cl}(C_1-f)$. Since $C_1-f\subseteq X+e$ and $e\in \operatorname{cl}(X)$, we have

$f\in \operatorname{cl}(C_1-f)\subseteq \operatorname{cl}(X+e)=\operatorname{cl}(X)$.

Choose a basis $B$ of $X$. The membership $f\in \operatorname{cl}(X)=\operatorname{cl}(B)$ says $B+f$ is dependent. Its unique fundamental circuit contains $f$ and lies in $B+f\subseteq X+f=(C_1\cup C_2)-e$. This is the required circuit. ∎

The protected-element conclusion is the form needed to prove that circuit axioms reconstruct augmentation. It should be cited explicitly when an elimination proof must retain a named element.

## 4. Circuit axioms reconstruct the matroid

Let $C$ be a family of subsets of finite $E$ satisfying:

1. $\varnothing \notin C$;
2. no member of $C$ properly contains another;
3. if distinct $C_1,C_2\in C$, $e\in C_1\cap C_2$, and $f\in C_1\setminus C_2$, some $C_3\in C$ contains $f$ and lies in $(C_1\cup C_2)-e$.

This is the strong elimination version of the circuit axioms. It immediately implies ordinary elimination. For finite antichain families the ordinary and strong versions are equivalent; the standard finite proof repeatedly applies ordinary elimination to a counterexample minimal under union inclusion. We use the strong version here so the protected element in the reconstruction below is an explicit hypothesis rather than a hidden strengthening.

Declare a set independent when it contains no member of $C$. Empty-set membership and heredity are immediate. The hard step is augmentation.

We isolate the needed finite lemma.

**Lemma 10.3 (Circuit-bound).** Let $I$ contain no circuit. Let $X\subseteq E\setminus I$, and suppose that for every $x\in X$, the set $I+x$ contains a circuit $C_x$ with $x\in C_x$. Then every circuit-free $J\subseteq I\cup X$ has $|J|\le |I|$.

**Proof.** Induct on $|X|$. The claim is clear for $X=\varnothing$. Choose $x\in X$. If $x\notin J$, remove $x$ from $X$ and apply induction.

Suppose $x\in J$. Since $J$ is circuit-free, it cannot contain all of $C_x$; choose $i\in (C_x-x)\setminus J$. Set $I'=I-i+x$. This set is circuit-free. Otherwise a circuit $D\subseteq I'$ must contain $x$; strong elimination applied to $D$ and $C_x$ at $x$, protecting $i\in C_x\setminus D$, would create a circuit inside $I$, contradiction.

For each $y\in X-x$, we need a circuit in $I'+y$. If the old $C_y$ avoids $i$, it remains. If it contains $i$, strongly eliminate $C_y$ and $C_x$ at $i$, protecting $y$ (which belongs to $C_y$ but not $C_x$); the resulting circuit lies in $I-i+x+y=I'+y$ and contains $y$. Thus the induction hypotheses hold for $I'$ and $X-x$. Because $i\notin J$, we still have $J\subseteq I'\cup (X-x)$, and induction gives $|J|\le |I'|=|I|$. ∎

Now suppose independent $I,J$ satisfy $|I|<|J|$ but no element of $J\setminus I$ augments $I$. For each $x\in J\setminus I$, the dependent set $I+x$ contains a circuit $C_x$, necessarily containing $x$. Apply the circuit-bound lemma with $X=J\setminus I$. Since $J\subseteq I\cup X$ is circuit-free, it would give $|J|\le |I|$, a contradiction. Augmentation holds.

Thus the three circuit axioms are cryptomorphic with the independence axioms.

## 5. Cocircuits, hyperplanes, and bonds

A **cocircuit** is a circuit of the dual matroid. Equivalently, cocircuits are complements of hyperplanes. This equivalence is useful in both directions:

- deleting a cocircuit leaves a rank-$r-1$ flat;
- adding any member of the cocircuit to that hyperplane restores full rank.

In a graphic matroid, cocircuits are **bonds**, the inclusion-minimal nonempty edge cuts. A cut containing redundant edges need not be a cocircuit. For a spanning tree $T$ and tree edge $t$, the fundamental cocircuit is the cut between the two components of $T-t$.

An element is a **coloop** when its singleton is a cocircuit, equivalently when it belongs to every basis. In a graph, a bridge is a coloop of the cycle matroid.

## 6. General orthogonality means “not exactly one”

**Circuit–cocircuit orthogonality.** A circuit $C$ and cocircuit $D$ never satisfy $|C\cap D|=1$.

**Proof.** Write $H=E\setminus D$, a hyperplane. If $C\cap D=\{e\}$, then $C-e\subseteq H$. Circuit minimality gives $e\in \operatorname{cl}(C-e)$, so monotonicity puts $e\in \operatorname{cl}(H)=H$, contradicting $e\in D$. ∎

For graphs this says a cycle crosses every cut an even number of times, hence never once. The even statement uses the special parity structure of graphs; the abstract theorem itself guarantees only that the intersection size is not one.

### A nonbinary warning

In $U(2,4)$, every three-element set is a circuit. The dual is again $U(2,4)$, so every three-element set is also a cocircuit. Choosing the same three-set as both gives intersection size three. General matroid orthogonality therefore does not mean even intersection.

## 7. Binary matroids have a parity law

A matroid is **binary** if it is representable by a matrix over the two-element field $F_2$. Dependence coefficients are then zeros and ones, so the support of a dependence can be identified with its incidence vector.

**Theorem 10.4 (Binary orthogonality).** In a binary matroid, every circuit and cocircuit meet in an even number of elements.

One representation proof chooses a matrix for $M$ and a matrix for $M^{*}$ whose row spaces are orthogonal complements in $F_2^E$. Circuit and cocircuit incidence vectors lie in the corresponding null/row spaces, so their dot product is zero. Over $F_2$, that dot product is $|C\cap D| \bmod 2$.

Binary matroids also satisfy a stronger circuit pattern:

> The symmetric difference of any two circuits is a disjoint union of circuits, possibly empty.

Indeed, adding their incidence dependencies over $F_2$ cancels the intersection and produces another dependence. Any dependent support decomposes by repeatedly removing a contained circuit. In a general matroid, ordinary elimination supplies some circuit inside the difference-related union but does not guarantee this full decomposition.

Conversely, the even circuit–cocircuit intersection property characterizes binary matroids. Proving the converse requires constructing a binary representation from a basis and its fundamental circuits; it is a representation theorem, not a consequence of parity notation alone.

## 8. Circuit signatures over other fields

For a matroid represented over an arbitrary field, a circuit has a coefficient vector unique up to nonzero scalar, not merely a zero-one support. Oriented matroids retain signs over ordered fields; representable matroids over other fields retain field-valued ratios. Plain matroid circuits deliberately forget those coefficients.

This loss explains a boundary. Two representations can have the same circuit supports while assigning different dependence coefficients. Support elimination remains, but vector addition need not make intersections cancel element by element. Characteristic two is exactly where “add” and “subtract” coincide, producing the clean symmetric-difference law.

## 9. Circuits under deletion and contraction

Minors transform circuit certificates in a controlled way. If $S\subseteq E$, the circuits of the deletion $M\setminus S$ are exactly the circuits of $M$ that avoid $S$: deletion neither changes dependence among retained elements nor creates a smaller witness.

Contraction can shrink a circuit. The circuits of $M/S$ are the inclusion-minimal nonempty sets among

$\{C\setminus S : C\text{ is a circuit of }M\}$.

To see the mechanism, choose a basis $B_S$ of $S$. A retained set $X$ is dependent after contraction exactly when $B_S\cup X$ is dependent in $M$. A minimal such $X$ contains a circuit $C$ whose elements outside $S$ lie in $X$; minimality forces $X=C\setminus S$ after redundant candidates are removed. Conversely, a nonempty minimal difference $C\setminus S$ cannot be independent in the contraction, because joining it to $B_S$ recovers the dependence represented by $C$ after elements of $C\cap S$ are spanned inside $S$.

For a triangle with edges $\{a,b,c\}$, contracting $c$ leaves $a$ and $b$ parallel: the circuit $\{a,b,c\}$ shrinks to $\{a,b\}$. Contracting an element is therefore not the same as merely deleting it. When $C\subseteq S$, the difference is empty and does not become a circuit; the dependence has been completely absorbed.

## 10. Exact circuit audits

For a candidate family on at most ten elements, a deterministic audit should:

1. verify that $\varnothing$ is independent;
2. verify heredity;
3. list every dependent subset;
4. call a set a circuit only if **every proper subset** is independent;
5. test elimination for every ordered pair of distinct circuits and each shared element;
6. if dual bases have been verified, list cocircuits and test singleton-intersection exclusion;
7. claim parity only after binary representability has been established.

When heredity is already proved, testing each one-element deletion is sufficient for circuit minimality because every smaller proper subset lies inside such a deletion. Without that prior theorem, immediate-deletion checks can misclassify a nonhereditary input.

## 11. Common errors

1. **Elimination returns the whole difference.** It returns at least one circuit contained in a specified union-minus-element.
2. **The two input circuits may be equal.** The axiom requires distinct circuits; eliminating a circuit with itself would force nonsense.
3. **A protected element vanishes.** Use strong elimination when the conclusion must retain a named element.
4. **Every cut is a cocircuit.** Only minimal nonempty cuts are bonds/cocircuits in a graph.
5. **Orthogonality is interpreted as disjointness.** Circuits and cocircuits may intersect; the general prohibition is intersection size one.
6. **Parity is claimed without a binary hypothesis.** $U(2,4)$ supplies a three-element intersection.

## Developed dependence certificates

### Worked example: elimination can leave redundant elements

Over $\mathbb Q$, take $a=(1,0)$, $b=(0,1)$, $c=(1,1)$ and $d=(1,-1)$. The triples $C_1=\{a,b,c\}$ and $C_2=\{a,b,d\}$ are circuits: each is dependent in a two-dimensional space, while all its pairs have nonzero determinants. Eliminating $a$ leaves the set $\{b,c,d\}$. Its three pairs again have nonzero determinants, so this entire three-set is a circuit.

Now interpret the same labeled array over $\mathbb F_2$. The two original triples remain circuits, but $c=d$. Eliminating $a$ still leaves $\{b,c,d\}$, which now contains the smaller circuit $\{c,d\}$. It is not itself minimal. The abstract elimination conclusion remains true in both cases: some circuit exists inside the specified union with $a$ removed. The stronger assertion that the whole remaining set is a circuit fails in the binary interpretation.

Strong elimination can protect $c$ in this example. Over $\mathbb Q$ the resulting three-circuit contains it, while over $\mathbb F_2$ the parallel pair contains it. A valid protected element must belong to $C_1\setminus C_2$, as $c$ does. Attempting to protect the eliminated shared element would contradict the requested containment before any theorem is applied.

### Worked example: loops, parallel links and a bridge together

Let a graph have vertices $1,2,3$, a loop $\ell$ at vertex one, two parallel links $p,q$ from one to two, and a link $t$ from two to three. Its graphic circuits are exactly $\{\ell\}$ and $\{p,q\}$. No circuit contains $t$, since that edge is a bridge. A full spanning tree must contain $t$ and exactly one of $p,q$, giving bases $\{p,t\}$ and $\{q,t\}$.

Complements of those bases are $\{\ell,q\}$ and $\{\ell,p\}$, so these are the dual bases. The dual loop is $t$, and its singleton is a dual circuit. The other dual circuit is $\{p,q\}$: neither dual basis can contain both, while each singleton occurs in a dual basis. Thus the primal cocircuits are $\{t\}$ and $\{p,q\}$.

Check orthogonality directly. The loop circuit meets both cocircuits in zero elements. The parallel-pair circuit meets $\{t\}$ in zero and $\{p,q\}$ in two. Every intersection avoids size one. The fact that a set can be both a circuit and a cocircuit here is harmless; neither definition asserts disjointness between the two classes. The example also exhibits loop–coloop exchange under duality without discarding any multigraph elements.

### Worked example: minimality after contracting a set

In $U(3,\{1,2,3,4,5\})$, contract $S=\{1,2\}$. The rank difference gives $r_{M/S}(X)=\min(|X|,1)$ on $\{3,4,5\}$. Thus each singleton is independent and every pair is a circuit.

The original circuits are the four-element subsets. Removing $S$ from them gives the candidates $\{3,4\}$, $\{3,5\}$, $\{4,5\}$ and $\{3,4,5\}$. The last candidate occurs more than once, but multiplicity does not create a new circuit. It contains each of the three pairs, so inclusion-minimal nonempty candidates are exactly the pairs predicted by rank.

Two qualifications in the contraction rule are doing real work. “Nonempty” prevents an absorbed circuit from becoming an empty circuit. “Inclusion-minimal” removes candidates that contain smaller dependencies after contraction. Merely deleting contracted labels from every old circuit and calling every resulting set a circuit would fail this small example.

## A direct binary parity proof

The row-space argument above is concise once dual representations have been constructed. There is also a proof using the hyperplane definition, which makes the field-specific step particularly visible.

**Proposition 10.1 (Binary circuit–cocircuit parity).** Suppose a finite matroid is represented over $\mathbb F_2$. Every circuit and cocircuit have even intersection.

**Proof.** Let $V$ be the span of all representing columns, and let $D$ be a cocircuit. Its complementary hyperplane $H$ has span of codimension one in $V$. Choose a nonzero linear functional $\lambda:V\to\mathbb F_2$ whose kernel is that span. Because $H$ is a flat, a column lies in the kernel exactly when its label belongs to $H$. Therefore $\lambda$ is zero on columns in $H$ and one on columns in $D$.

A circuit has a dependence with every coefficient nonzero. Over $\mathbb F_2$ the only nonzero coefficient is one, so $\sum_{e\in C}v_e=0$. Applying $\lambda$ gives $\sum_{e\in C}\lambda(v_e)=0$, which says that $|C\cap D|$ is even. If there are no cocircuits, there is nothing to prove. ∎

This proof identifies the exact difference from the general orthogonality argument. Over a larger field the nonzero values of a functional on $D$ can vary, as can the nonzero circuit coefficients. Their weighted sum vanishes, but the number of summands need not be even. One cannot discard coefficients from a field-valued identity and retain a parity statement.

The binary symmetric-difference conclusion can likewise be made algorithmic. A dependence support $X$ over $\mathbb F_2$ means that summing its columns gives zero. Choose a contained circuit $C$. Its columns also sum to zero, so deleting $C$ from $X$ leaves another zero-sum support. Repeat on the strictly smaller remaining set. Finiteness guarantees termination and produces disjoint circuits whose union is $X$. Applying this to the sum of two circuit incidence vectors proves the stated symmetric-difference decomposition, including the empty case when the circuits are equal.

## 12. Solved exercises

<a id="circuits-elimination-orthogonality-ex-1"></a>
### Exercise 1: circuits of a triangle with a parallel edge

Let a graph have triangle edges $a,b,c$, and let $a'$ be parallel to $a$. List the circuits of its graphic matroid.


<details><summary>Hint 1</summary>

Remember both the one-edge-loop and two-parallel-edge cycle conventions.

</details>

<details><summary>Hint 2</summary>

A dependent set is a circuit only when no smaller listed cycle lies inside it.

</details>

<details><summary>Solution</summary>

**Solution.** The parallel pair $\{a,a'\}$ is a two-edge cycle. The original triangle $\{a,b,c\}$ is a circuit. Replacing $a$ by its parallel copy gives another triangle circuit $\{a',b,c\}$. No proper subset of either triangle is cyclic except that neither contains both parallel edges. The four-edge set is dependent but not minimal. Thus the circuits are exactly those three sets.

</details>

<a id="circuits-elimination-orthogonality-ex-2"></a>
### Exercise 2: eliminate explicitly

Using the circuits in Exercise 1, eliminate $a$ from $\{a,a'\}$ and $\{a,b,c\}$.


<details><summary>Hint 1</summary>

Form the union of the two specified circuits and remove the shared element.

</details>

<details><summary>Hint 2</summary>

The remaining three edges describe one of the circuits already listed.

</details>

<details><summary>Solution</summary>

**Solution.** Their union with $a$ removed is $\{a',b,c\}$. This is precisely the third circuit. The example shows why parallel edges must be included in multigraph cycle conventions: otherwise elimination would appear to fail.

</details>

<a id="circuits-elimination-orthogonality-ex-3"></a>
### Exercise 3: identify cocircuits of $U(2,4)$

Determine the cocircuits and exhibit an odd circuit–cocircuit intersection.


<details><summary>Hint 1</summary>

Take complements of bases to identify the dual uniform matroid.

</details>

<details><summary>Hint 2</summary>

Choose the same three-element set as both a circuit and a cocircuit.

</details>

<details><summary>Solution</summary>

**Solution.** The dual of $U(2,4)$ is $U(4-2,4)=U(2,4)$. Its circuits are all three-element subsets, so those are also the cocircuits of the original. Choose $C=D=\{1,2,3\}$. Their intersection has size three. This does not violate general orthogonality because the forbidden size is one; it proves the matroid is not binary.

</details>

<a id="circuits-elimination-orthogonality-ex-4"></a>
### Exercise 4: loops and coloops cannot share a circuit

Prove that a coloop belongs to no circuit.


<details><summary>Hint 1</summary>

Use the singleton cocircuit associated with a coloop.

</details>

<details><summary>Hint 2</summary>

A circuit containing that element would have a forbidden singleton intersection with its cocircuit.

</details>

<details><summary>Solution</summary>

**Solution.** Let $e$ be a coloop, so $\{e\}$ is a cocircuit. If a circuit $C$ contained $e$, then $C\cap \{e\}=\{e\}$ would have size one, contradicting circuit–cocircuit orthogonality. Conversely, if a nonloop belongs to no circuit, adding it to any independent set cannot create a circuit, so every basis must include it; it is a coloop.

</details>

<a id="circuits-elimination-orthogonality-ex-5"></a>
### Exercise 5: binary symmetric difference in a graph

In a graph, let cycles $C_1$ and $C_2$ share a path of two edges. Explain why their symmetric difference decomposes into cycles.


<details><summary>Hint 1</summary>

Track vertex degrees modulo two after cancelling common edges.

</details>

<details><summary>Hint 2</summary>

Find a cycle in the remaining even-degree graph, remove its edges, and repeat.

</details>

<details><summary>Solution</summary>

**Solution.** Regard edge sets as incidence vectors over $F_2$. At every vertex, a cycle has even degree. Adding the two incidence vectors cancels shared edges and preserves even degree at every vertex. Every finite nonempty even-degree graph contains a cycle; remove one cycle and repeat. The remaining edge sets are disjoint cycles whose union is $C_1\mathbin{\triangle}C_2$. The argument is binary: parity, not only ordinary circuit elimination, produces the entire decomposition.

</details>

<a id="circuits-elimination-orthogonality-ex-6"></a>
### Exercise 6: a circuit's nullity

Prove that every circuit has nullity one, and show that the converse is false.

<details><summary>Hint 1</summary>

Deleting any member of a circuit leaves an independent set.

</details>
<details><summary>Hint 2</summary>

For the converse, attach a bridge to a triangle and use all four edges.

</details>
<details><summary>Solution</summary>

For a circuit $C$, rank is $|C|-1$, so $\eta(C)=|C|-r(C)=1$. Conversely the triangle plus a bridge has four edges, rank three and nullity one, but is not a circuit: its triangle is a proper dependent subset. Nullity measures the rank deficit of a whole set; minimality is an additional requirement.

</details>

<a id="circuits-elimination-orthogonality-ex-7"></a>
### Exercise 7: strong elimination over two fields

For the four-column developed example, eliminate $a$ from $C_1=\{a,b,c\}$ and $C_2=\{a,b,d\}$ while protecting $c$. Give a valid resulting circuit over $\mathbb Q$ and over $\mathbb F_2$.

<details><summary>Hint 1</summary>

All candidates lie inside $\{b,c,d\}$.

</details>
<details><summary>Hint 2</summary>

Check whether $c,d$ become parallel in the named field.

</details>
<details><summary>Solution</summary>

Over $\mathbb Q$, the circuit is $\{b,c,d\}$, since every pair is independent and the three columns have rank two. Over $\mathbb F_2$, $c=d$, so $\{c,d\}$ is a circuit. Both contain the protected element $c$ and avoid $a$. The different answers are compatible with the same elimination theorem applied to different represented matroids.

</details>

<a id="circuits-elimination-orthogonality-ex-8"></a>
### Exercise 8: a loop cannot belong to a larger circuit

Show that if $\ell$ is a loop, the only circuit containing $\ell$ is $\{\ell\}$.

<details><summary>Hint 1</summary>

The singleton already witnesses dependence.

</details>
<details><summary>Hint 2</summary>

Use inclusion-minimality rather than elimination.

</details>
<details><summary>Solution</summary>

The set $\{\ell\}$ is a circuit by the loop definition. Any larger set containing it has a proper dependent subset and therefore cannot be minimally dependent. Thus no other circuit contains $\ell$. The conclusion also explains why loop circuits cannot be used as one member of a distinct overlapping-circuit elimination pair.

</details>

<a id="circuits-elimination-orthogonality-ex-9"></a>
### Exercise 9: a disjoint union need not be one circuit

Construct a binary graphic example in which the symmetric difference of two circuits is dependent but not itself a circuit.

<details><summary>Hint 1</summary>

Two edge-disjoint cycles already suffice.

</details>
<details><summary>Hint 2</summary>

Their symmetric difference is their union, which contains either cycle properly.

</details>
<details><summary>Solution</summary>

Take a graph consisting of two disjoint triangles and let $C_1,C_2$ be their edge sets. Their symmetric difference is the six-edge union. It is dependent but not minimal, since either three-edge triangle is a proper circuit inside it. The symmetric-difference theorem correctly promises a disjoint union of circuits, not a single circuit.

</details>

<a id="circuits-elimination-orthogonality-ex-10"></a>
### Exercise 10: contraction absorbs complete dependencies

Let $C$ be a circuit and contract all of $C$. Explain why the empty set is not a circuit of the contraction, and determine what happens in the graph consisting only of one triangle.

<details><summary>Hint 1</summary>

The contraction circuit rule explicitly excludes empty differences.

</details>
<details><summary>Hint 2</summary>

Every matroid has the empty set independent, including a matroid with empty ground set.

</details>
<details><summary>Solution</summary>

Although $C\setminus C=\varnothing$, this difference is discarded by the nonempty condition. Contraction never creates a dependent empty set. If the graph consists only of a triangle and all three edges are contracted as a matroid set, no ground elements remain. The resulting empty-ground-set matroid has its unique independent set and basis $\varnothing$, and has no circuits.

</details>

## Chapter summary

Circuits are the minimal witnesses of dependence. Fundamental-circuit uniqueness proves ordinary elimination, and strong elimination protects a chosen surviving element. The circuit axioms reconstruct augmentation through a finite circuit-bound lemma, so circuit data are cryptomorphic with independence. Cocircuits are dual circuits and complements of hyperplanes; in graphs they are bonds. General circuit–cocircuit orthogonality forbids a singleton intersection. Even intersection and symmetric-difference decomposition require binary representability, and $U(2,4)$ marks the boundary. Exact audits must establish heredity and duality before using their shortcuts.


<a id="circuits-elimination-orthogonality-summary"></a>
## Summary

Circuit minimality turns dependence into a finite certificate. Ordinary elimination finds a new circuit, while strong elimination preserves a specified surviving element. The developed examples show why union-minus-element, symmetric difference, and contraction differences require different minimality checks. General circuit–cocircuit orthogonality excludes one-point intersections; the binary representation hypothesis supplies the stronger parity and disjoint-circuit decomposition arguments.
