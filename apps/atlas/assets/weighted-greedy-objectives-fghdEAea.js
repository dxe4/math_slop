var e=`---
parent_id: book-discrete-combinatorial-structures
chapter_id: weighted-greedy-objectives
title: "Weighted Greedy Theorems and Objective Contracts"
level: graduate
estimated_minutes: 260
license: CC BY-SA 4.0
---

# Weighted Greedy Theorems and Objective Contracts

Greedy algorithms are often described by a slogan: take the best available
element that keeps the partial choice feasible. For matroids, that slogan is a
theorem—but only after “best,” “feasible,” and the final objective have been
specified. A maximum-weight basis is not the same problem as a maximum-weight
independent set when weights may be negative. Minimization is not obtained by
silently reversing an inequality while retaining the same stopping rule. A
cardinality cap is not the same as an exact-cardinality requirement.

This chapter proves the weighted greedy theorem and treats those distinctions
as formal contracts. It also gives an exchange certificate that can verify an
answer without replaying the algorithm, and proves the converse: among finite
hereditary systems, universal correctness of the standard greedy scan for
nonnegative weights characterizes matroids.

## Prerequisites and notation

We use finite matroids $M=(E,I)$. The chapter **Bases, Fundamental Circuits,
and Strong Exchange** supplies basis exchange, fundamental circuits, and the
exchange-bijection lemma. The chapter **Rank, Submodularity, Closure, and
Flats** supplies the rank function $r$ and its restriction behavior.

A weight is an arbitrary function $w:E\\to \\mathbb{R}$, and

$w(A)=\\sum_{e\\in A} w(e)$.

The **descending greedy scan** fixes an order

$e_1,e_2,\\ldots ,e_n$ with $w(e_1)\\ge w(e_2)\\ge \\ldots \\ge w(e_n)$.

Starting with $G_0=\\varnothing$, it sets $G_i=G_{i-1}+e_i$ if that set is
independent, and otherwise sets $G_i=G_{i-1}$. Ties may be ordered in any
fixed way. The algorithm scans every element; it does not stop merely because
the next weight is negative.

## 1. What the scan produces

After a complete scan, $G=G_n$ is a basis of $M$. It is independent by
construction. If some $e\\notin G$ could be added to $G$, then it could also have
been added to the smaller set present when $e$ was scanned, contradicting its
rejection. Thus $G$ is maximal independent, hence a basis.

That argument does not use the numerical values of the weights. Ordering by
weight is needed for optimality, while scanning all elements is what forces a
basis.

**Weighted greedy theorem for bases.** For arbitrary real weights, every
descending greedy scan returns a maximum-weight basis.

**Proof.** Let $G=\\{g_1,\\ldots ,g_r\\}$ in the order in which its elements were
accepted, and let $B$ be any basis. We construct bases

$B=B_0,B_1,\\ldots ,B_r=G$

such that $\\{g_1,\\ldots ,g_i\\}\\subseteq B_i$ and $w(B_i)\\ge w(B_{i-1})$.

Suppose $B_{i-1}$ already contains the first $i-1$ greedy elements. If it
contains $g_i$, take $B_i=B_{i-1}$. Otherwise, consider the fundamental
circuit $C(g_i,B_{i-1})$. This circuit cannot be contained in
$\\{g_1,\\ldots ,g_i\\}$, because that greedy prefix is independent. It therefore
contains some

$b\\in B_{i-1}\\setminus \\{g_1,\\ldots ,g_{i-1}\\}$

for which $B_i=B_{i-1}-b+g_i$ is a basis. To see why $w(g_i)\\ge w(b)$, suppose
instead that $b$ appeared earlier in the descending order. At the moment $b$
was scanned, all already accepted elements were among
$\\{g_1,\\ldots ,g_{i-1}\\}$. Because that set plus $b$ lies in the independent basis
$B_{i-1}$, greedy would have accepted $b$, contrary to the fact that $b$ is
not one of the first $i-1$ accepted elements. Thus $b$ is no earlier than
$g_i$, so its weight is no greater. The replacement cannot decrease total
weight.

At $i=r$, the basis $B_r$ contains the $r$-element basis $G$, so it equals
$G$. Hence $w(G)\\ge w(B)$ for every basis $B$. ∎

The proof allows negative weights. If the rank is $r$, every basis has $r$
elements, and greedy must eventually accept $r$ elements even when its last
choices are costly. This is correct for the basis contract.

### Worked example 1: a negative edge is compulsory

Consider the graphic matroid of a triangle with edge weights $8,3,-5$. Every
spanning tree has two edges. Descending greedy accepts the edges of weights
$8$ and $3$, obtaining weight $11$, which is the maximum-weight basis. If the
weights were $8,-3,-5$, it would accept $8$ and then $-3$, obtaining weight
$5$. Stopping at the first negative edge would return a one-edge forest, not
a basis. The forest is preferable only under the optional independent-set
contract discussed next.

## 2. Maximum-weight independent sets are optional selections

For the problem

$maximize w(I) subject to I\\in I$,

an element of negative weight is never useful: deleting it preserves
independence and increases the objective. Let $P=\\{e:w(e)>0\\}$. Run descending
greedy only while weights are positive, or equivalently run greedy in the
restriction $M|P$. The result is a basis of $M|P$ and maximizes weight there
by the basis theorem. It therefore maximizes weight over all independent
subsets of $E$.

Zero-weight elements do not change the optimum value. They may be skipped, or
they may be appended whenever independence permits. Consequently:

- scanning only $w(e)>0$ gives an inclusion-minimal convention among the
  outputs generated after the positive choices;
- scanning $w(e)\\ge 0$ and accepting feasible zeros gives a maximal extension
  inside the nonnegative restriction;
- scanning all elements gives a basis, but negative additions can destroy
  optimality for the optional objective.

These conventions can return different sets with the same optimum value.
An implementation should state which convention it uses.

### Worked example 2: basis versus optional set

In the uniform matroid $U(2,4)$, give elements $a,b,c,d$ weights
$4,0,-1,-7$. The maximum-weight bases have size two; $\\{a,b\\}$ is best with
weight $4$. For the optional independent-set problem, $\\{a\\}$ and $\\{a,b\\}$ are
both optimal with value $4$. A positive-only scan returns $\\{a\\}$. A
nonnegative scan returns $\\{a,b\\}$. A full basis scan also returns $\\{a,b\\}$ in
this example, but that coincidence depends on the available zero: if $b$ had
weight $-1/2$, the best basis would weigh $7/2$, while $\\{a\\}$ would remain the
best optional selection with weight $4$.

## 3. Ties change witnesses, not the optimum value

Any order consistent with nonincreasing weights satisfies the proof of the
weighted greedy theorem. Different tie orders may therefore produce different
optimal bases.

There is also an order-free description. Let the distinct weights be
$\\alpha _1>\\alpha _2>\\ldots >\\alpha _m$, set $S_j=\\{e:w(e)\\ge \\alpha _j\\}$, and put $S_0=\\varnothing$. Every greedy
basis contains exactly

$r(S_j)-r(S_{j-1})$

elements of weight $\\alpha _j$.

Indeed, immediately after scanning $S_j$, the accepted set is maximal
independent in $S_j$, so it has $r(S_j)$ elements. Subtracting consecutive
prefix ranks gives the count from each layer. The identity proves directly
that all tie orders have the same total weight, even when the selected
elements differ.

### Worked example 3: tie-dependent spanning trees

Give every edge of a four-cycle weight $1$. Its graphic matroid has rank
three. Any ordering accepts the first three edges and rejects the fourth,
producing one of four spanning trees. With $S_1=E$, the rank-layer formula
says every output contains $r(E)=3$ elements of weight $1$, hence has weight
$3$. Greedy does not canonically choose a tree unless a secondary tie-breaking
order is declared.

## 4. Minimization needs both reversed order and a stopping contract

To find a **minimum-weight basis**, apply the maximum theorem to $-w$.
Equivalently, scan in nondecreasing order and accept every feasible element
until a basis is obtained. Arbitrary positive and negative weights are
allowed.

For a **minimum-weight independent set**, the empty set is feasible. If all
weights are nonnegative, the empty set is optimal. With arbitrary weights,
only negative elements can improve on it. Scan elements in increasing order,
accept feasible elements while their weights are negative, and treat zeros by
a declared convention. This is the maximum-independent-set rule applied to
weights $-w$.

It is therefore wrong to say simply “reverse the sorting order for
minimization.” The reversal solves a minimum-basis problem only if the scan
continues to full rank. For an optional independent set, it must stop before
positive weights.

### Worked example 4: minimization contracts

In $U(2,3)$, let the weights be $-6,2,9$. The minimum-weight basis is the
two-set with weights $-6$ and $2$, totaling $-4$. The minimum-weight optional
independent set is the singleton of weight $-6$. Continuing to rank two is
required in the first problem and harmful in the second. The empty set would
be optimal if the weights were instead $6,2,9$.

## 5. Truncation turns a cap into a matroid

For an integer $k\\ge 0$, the $k$-truncation of $M$ has independent sets

$I^{k}=\\{I\\in I:|I|\\le k\\}$.

This is a matroid. Heredity is immediate. If $I,J\\in I^{k}$ and $|I|<|J|$, then
$|I|<k$, and augmentation in $M$ supplies $e\\in J\\setminus I$ with $I+e\\in I$; its size is
at most $k$, so it belongs to $I^{k}$. Its rank function is

$r_k(A)=\\min(r(A),k)$.

Thus, when $0\\le k\\le r(E)$, descending greedy stopped after $k$ acceptances solves
the **maximum-weight independent set of exact size $k$**. This remains true
with negative weights, because exact size makes those positions compulsory.
The same algorithm also solves a maximum-weight basis problem in the
truncation.

For the **at-most-$k$** objective, stop after $k$ acceptances but skip negative
weights; zero handling is optional. Exact size $k$ is infeasible if $k>r(E)$.
If one speaks instead of a basis of the truncation with $k>r(E)$, its size is
$r(E)$, not $k$.

### Worked example 5: exact and capped cardinality

In $U(3,5)$, suppose weights are $10,7,-1,-2,-8$ and $k=3$. The best
exactly-three independent set has weights $10,7,-1$ and total $16$.
The best independent set of size at most three is the two-set with weights
$10,7$, totaling $17$. Both are greedy outcomes, but the exact problem
continues through the least harmful negative weight while the capped problem
stops before it.

## 6. Fundamental circuits give an exchange certificate

Let $B$ be a basis. For each $e\\notin B$, the fundamental circuit $C(e,B)$ lists
exactly those $b\\in B$ for which $B-b+e$ remains a basis.

**Theorem 16.1 (Exchange-certificate).** A basis $B$ is maximum weight if and only if

$w(b)\\ge w(e)$ for every $e\\notin B$ and every $b\\in C(e,B)\\setminus \\{e\\}$.

**Proof.** Necessity is immediate: if $w(e)>w(b)$, the valid replacement
$B-b+e$ has greater weight.

For sufficiency, compare $B$ with any basis $B'$. The exchange-bijection lemma
provides a bijection $\\varphi:B\\setminus B'\\to B'\\setminus B$ such that $B-b+\\varphi (b)$ is a basis for each
$b$. Hence $b\\in C(\\varphi(b),B)$, and the assumed inequalities give
$w(b)\\ge w(\\varphi(b))$. Summing over $B\\setminus B'$ and canceling the common elements yields
$w(B)\\ge w(B')$. ∎

A descending greedy output automatically has this certificate. If $e\\notin B$, it
was rejected when scanned. Let $A$ be the accepted set at that moment. The
dependent set $A+e$ contains a circuit $D$. Since $A\\subseteq B$, this circuit lies in
$B+e$; uniqueness of the fundamental circuit forces $D=C(e,B)$. Therefore
every $b\\in C(e,B)-e$ had already been accepted, and $w(b)\\ge w(e)$.

The certificate is objective-specific. It verifies maximum weight among
bases. To verify an optional independent set, one must additionally certify
that no selected element has negative weight and handle the positive-weight
restriction; a basis containing a compulsory negative element can pass every
exchange inequality while losing to a smaller independent set.

## 7. Prefix ranks are a second optimality certificate

The weight-layer counts can be strengthened into a useful comparison
principle. For a threshold $t$, write

$E_t=\\{e\\in E:w(e)\\ge t\\}$.

Immediately after greedy has scanned $E_t$, it has selected a basis of the
restriction $M|E_t$, and therefore exactly $r(E_t)$ threshold-qualified
elements. No independent set—not even an optimal one chosen by another
method—can contain more than $r(E_t)$ elements from $E_t$.

For a basis objective, this gives an order-free certificate: a basis $B$ is
maximum weight if it satisfies

$|B\\cap E_t|=r(E_t)$

at every distinct weight threshold $t$. To prove this, list the distinct
weights as $\\alpha _1>\\ldots >\\alpha _m$. The threshold equalities determine that $B$ has
$r(S_j)-r(S_{j-1})$ elements in layer $\\alpha _j$, exactly the greedy layer counts.
Consequently $B$ and a greedy basis have the same total weight.

This criterion is equivalent in conclusion, but not in format, to the
fundamental-circuit certificate. Circuit inequalities are local: they inspect
one outside element and its possible replacements. Prefix ranks are global:
they count how much high-weight structure can fit above every threshold. In a
graphic matroid, the latter asks for the maximum size of a forest among edges
whose weight exceeds the threshold. In a partition matroid, it sums the
available capacities across blocks at that threshold.

The equality is not a certificate for the optional objective at negative
thresholds. An optional optimizer should saturate every positive threshold,
but it need not—and generally should not—saturate ranks once the threshold is
negative. Again, the stopping contract is mathematical data rather than an
implementation detail.

## 8. Oracle cost and deterministic output

In the independence-oracle model, sorting takes $O(|E| \\log |E|)$ comparisons
and the scan makes exactly one independence query per element. This is a query
bound, not a promise about wall-clock time: a graphic independence query can
be implemented with disjoint-set data structures, while independence of
columns may require linear-algebra work.

If reproducible output is required, augment each element with a fixed unique
key and sort lexicographically by $(-w(e),key(e))$. This does not perturb the
mathematical weights and therefore avoids fragile “tiny epsilon” arithmetic.
The chosen basis is then deterministic. It remains maximum for the original
weights because the key only orders equal-weight elements. A secondary
objective may also be optimized lexicographically, but it should be declared
as such; silently adding numerical perturbations can change comparisons
between unequal floating-point inputs.

### Worked example 6: certify without enumerating trees

Take a square with diagonal $13$. Let

$w(12)=9, w(23)=8, w(34)=6, w(41)=5, w(13)=4$

and $T=\\{12,23,34\\}$. Adding $41$ creates the four-cycle, and its removable tree
edges have weights $9,8,6$, all at least $5$. Adding $13$ creates the triangle
$\\{12,23,13\\}$, whose removable tree edges weigh $9,8$, both at least $4$.
The exchange-certificate theorem proves $T$ is a maximum-weight spanning tree.
No list of all spanning trees is required.

## 9. Universal greedy correctness characterizes matroids

A finite **hereditary system** is a pair $(E,F)$ with $\\varnothing \\in F$ and
$A\\subseteq B\\in F\\Longrightarrow A\\in F$. Run the same descending scan, accepting an element exactly when
feasibility remains in $F$.

**Theorem 16.2 (Greedy characterization).** A finite hereditary system is a matroid
if and only if, for every nonnegative weight function and every compatible
tie order, the descending greedy scan returns a maximum-weight member of
$F$.

**Proof.** If the system is a matroid, nonnegative weights make the full greedy
basis also optimal among all independent sets: deleting elements cannot
increase a competitor's value, and every independent competitor extends to a
basis without decreasing weight.

Conversely, suppose augmentation fails. Then there are $I,J\\in F$ with
$|I|<|J|$ but $I+e\\notin F$ for every $e\\in J\\setminus I$. Put $a=|I\\setminus J|$ and $b=|J\\setminus I|$.
The size inequality gives $b>a$. Choose $\\varepsilon >0$ so small that
$(1+\\varepsilon )a<b$. Assign weight $1+\\varepsilon$ to elements of $I$, weight $1$ to elements
of $J\\setminus I$, and weight $0$ to all remaining elements. Order all elements of
$I$ first. Heredity ensures greedy accepts all of $I$; it then rejects every
element of $J\\setminus I$ by the failed augmentation condition. Later zero-weight
acceptances do not alter its value, which is $(1+\\varepsilon )|I|$.

The feasible competitor $J$ has value

$(1+\\varepsilon )|I\\cap J|+|J\\setminus I|$.

Subtracting the greedy value leaves $b-(1+\\varepsilon )a>0$. Thus greedy is not optimal,
contradicting universal correctness. Augmentation must hold, so the hereditary
system is a matroid. ∎

The quantifiers matter. Correctness for one chosen weight vector proves
nothing about whether a system is a matroid. Correctness for a restricted
family of weights may also be too weak. The theorem concerns the standard
element-by-element feasibility scan for every nonnegative weight assignment.
It does not claim that every algorithm informally called greedy characterizes
matroids, nor that greedy solves nonlinear objectives such as
$w(I)^2$, pairwise interaction rewards, or general submodular maximization.

## 10. Failure boundaries and diagnostics

1. **The objective omits “basis” or “independent set.”** Ask whether full rank
   is compulsory. Negative weights make the distinction observable.
2. **A basis scan stops at zero.** It may return a nonbasis. Continue to rank
   for a basis or exact-cardinality contract.
3. **An optional scan accepts negatives.** Delete any negative selected
   element to improve the objective.
4. **Tie order is treated as canonical.** Every compatible tie order is
   optimal, but the selected basis can differ.
5. **Minimization reverses order but not stopping.** State whether the target
   is a minimum basis, an exact-size set, or an optional set.
6. **A cap is confused with equality.** Truncation has rank
   $\\min(r(E),k)$; at-most $k$ may optimally use fewer than $k$ elements.
7. **One exchange inequality is checked per outside element.** The certificate
   requires comparison with every removable member of its fundamental
   circuit, not merely a convenient one.
8. **The converse is applied to arbitrary set systems.** Heredity and finiteness
   are hypotheses, and the universal quantifier over weights is essential.
9. **Linearity is silently lost.** Matroid greedy optimizes additive element
   weights. Complementarity or interference between chosen elements changes
   the problem.

## 11. Solved exercises

### Exercise 1: arbitrary weights in a uniform matroid
<a id="weighted-greedy-objectives-ex-1"></a>

Run descending greedy for the maximum-weight basis and for the maximum-weight
independent set in $U(3,5)$ with weights $5,2,0,-1,-4$.

<details>
<summary>Hint 1</summary>

**Hint.** Separate the basis scan from the optional scan before summing any weights.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The rank is three; an optional solution may omit zero weights and must not accept negative weights.

</details>

<details>
<summary>Solution</summary>

**Solution.** The basis scan accepts the first three elements, because every
set of size at most three is independent. Its basis has weights $5,2,0$ and
total $7$. The optional scan accepts the positive elements of weights $5,2$
and may either skip or include the zero, depending on the declared zero
convention. Both optional outputs have value $7$. It rejects the negative
weights. Here the two optimum values coincide, although the inclusion-minimal
outputs differ.

</details>

### Exercise 2: negative compulsory rank
<a id="weighted-greedy-objectives-ex-2"></a>

In $U(2,4)$ the weights are $6,-1,-2,-3$. Prove the greedy basis is optimal
and explain why the positive-only output does not solve that problem.

<details>
<summary>Hint 1</summary>

**Hint.** List the possible largest companion of the element of weight six.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Every basis must have two elements; the positive-only singleton is therefore outside the feasible basis family.

</details>

<details>
<summary>Solution</summary>

**Solution.** Descending greedy selects weights $6$ and $-1$, totaling $5$.
Every basis is a two-set. Any basis omitting the weight-$6$ element has total
at most $-3$; among bases containing it, pairing it with $-1$ is best. Thus
the greedy basis is optimal. The positive-only output is the singleton of
weight $6$; it is independent and solves the optional problem, but its size is
one rather than the rank two, so it is not feasible for the basis problem.

</details>

### Exercise 3: rank layers and ties
<a id="weighted-greedy-objectives-ex-3"></a>

Let $M=U(2,4)$ and weights be $3,3,1,1$. Use rank layers to determine the
number of elements of each weight in every greedy basis.

<details>
<summary>Hint 1</summary>

**Hint.** Group the elements into the two weight thresholds.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The rank already reaches two in the weight-three layer, so the lower layer adds no rank.

</details>

<details>
<summary>Solution</summary>

**Solution.** For $S_1$, the two elements of weight at least $3$, we have
$r(S_1)=2$. For $S_2=E$, $r(S_2)=2$. Hence every greedy basis takes
$r(S_1)-r(\\varnothing )=2$ elements of weight $3$ and $r(S_2)-r(S_1)=0$ elements of
weight $1$. The basis is the pair of weight-$3$ elements and has value $6$.

</details>

### Exercise 4: minimum basis and minimum optional set
<a id="weighted-greedy-objectives-ex-4"></a>

In the partition matroid with blocks $\\{a,b\\}$ and $\\{c,d\\}$, each of capacity
one, let weights be $w(a)=-4,w(b)=2,w(c)=1,w(d)=7$. Find a minimum-weight
basis and a minimum-weight independent set.

<details>
<summary>Hint 1</summary>

**Hint.** A basis fills both partition capacities, while an optional set need not.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Minimize separately within each block for the basis, then decide whether a positive element helps the optional objective.

</details>

<details>
<summary>Solution</summary>

**Solution.** A basis must choose one element from each block. Increasing
greedy chooses $a$ from the first block and $c$ from the second, giving
$\\{a,c\\}$ of weight $-3$; independently minimizing within each block confirms
optimality. For the optional problem, the negative-only increasing scan
chooses $\\{a\\}$ of weight $-4$ and stops before positive weights. Adding $c$
would worsen the objective, so the two contracts differ.

</details>

### Exercise 5: an exact-cardinality truncation
<a id="weighted-greedy-objectives-ex-5"></a>

Let $M$ be the graphic matroid of a connected graph of rank five, and set
$k=3$. Why does greedy stopped after three acceptances solve the maximum-weight
three-edge forest problem even with negative weights?

<details>
<summary>Hint 1</summary>

**Hint.** Translate exact size three into a basis problem in a truncation.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The truncation has rank three even though the original graphic matroid has rank five.

</details>

<details>
<summary>Solution</summary>

**Solution.** The three-truncation has independent sets equal to forests with
at most three edges and rank $\\min(5,3)=3$. Its bases are exactly the
three-edge forests. The arbitrary-weight basis theorem applied to this
truncation says descending greedy returns a maximum-weight basis of it. The
algorithm is precisely the ordinary forest scan stopped after three accepted
edges. Negative weights do not invalidate the claim because every feasible
solution under the exact-size contract contains three edges.

</details>

### Exercise 6: infeasible exact size
<a id="weighted-greedy-objectives-ex-6"></a>

In a matroid of rank four, a specification asks for an independent set of
exactly six elements and proposes using the six-truncation. Diagnose the
error.

<details>
<summary>Hint 1</summary>

**Hint.** Compare the requested size with the original rank before applying an algorithm.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A cap greater than the rank removes no independent sets; it cannot create a six-element one.

</details>

<details>
<summary>Solution</summary>

**Solution.** No independent set can have more than the rank, so the exact-size
problem is infeasible. The six-truncation has rank $\\min(4,6)=4$ and is actually
the original matroid: the cap of six removes no independent sets. Its bases
have four elements, not six. Calling such a basis an exact six-element answer
confuses a cap with an equality constraint.

</details>

### Exercise 7: a failed exchange certificate
<a id="weighted-greedy-objectives-ex-7"></a>

Let $B$ be a basis, $e\\notin B$, and suppose
$C(e,B)=\\{e,b_1,b_2\\}$ with weights $w(e)=7$, $w(b_1)=9$, and $w(b_2)=5$.
What can be concluded?

<details>
<summary>Hint 1</summary>

**Hint.** Every element of the fundamental circuit other than $e$ is a legal removal.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare the weight of $e$ to both $b_1$ and $b_2$, rather than checking only one exchange.

</details>

<details>
<summary>Solution</summary>

**Solution.** Both $B-b_1+e$ and $B-b_2+e$ are bases. The second has weight
$w(B)-5+7=w(B)+2$, so $B$ is not maximum weight. It is irrelevant that the
first exchange would lose weight. The certificate demands $w(b)\\ge w(e)$ for
every removable $b$; one favorable comparison cannot hide another improving
exchange.

</details>

### Exercise 8: certify a partition-matroid basis
<a id="weighted-greedy-objectives-ex-8"></a>

A partition matroid has blocks $P_1,\\ldots ,P_m$ with capacities
$q_1,\\ldots ,q_m$, and enough elements in each block to fill every capacity.
Show that a basis containing the $q_i$ largest-weight elements of each block
passes the fundamental-circuit certificate.

<details>
<summary>Hint 1</summary>

**Hint.** For an outside element, identify exactly which block exceeds capacity when it is added.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Its fundamental circuit is that element together with the selected elements in the same block; compare their weights.

</details>

<details>
<summary>Solution</summary>

**Solution.** Let $B$ contain the $q_i$ largest weights in block $P_i$. For an
outside element $e\\in P_i$, its fundamental circuit with respect to $B$ is
$\\{e\\}\\cup (B\\cap P_i)$: capacity is violated in exactly that block, and deleting any
selected member of the block restores independence. By construction every
$b\\in B\\cap P_i$ has $w(b)\\ge w(e)$. Thus every required fundamental-circuit inequality
holds, and the exchange-certificate theorem proves that $B$ is a
maximum-weight basis.

</details>

### Exercise 9: build the converse counterweight
<a id="weighted-greedy-objectives-ex-9"></a>

Let a hereditary system contain $I=\\{a,b\\}$ and $J=\\{c,d,e\\}$, but suppose none
of $I+c,I+d,I+e$ is feasible. Give explicit nonnegative weights for which a
tie order placing $a,b$ first makes greedy suboptimal.

<details>
<summary>Hint 1</summary>

**Hint.** Give the two elements of $I$ a slightly larger weight than the three elements of $J$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Choose a weight strictly between one and $3/2$ for the elements of $I$, so their combined value stays below three.

</details>

<details>
<summary>Solution</summary>

**Solution.** Assign weight $3/2$ to $a,b$, weight $1$ to $c,d,e$, and zero to
all other elements. Greedy first accepts $a,b$, then rejects $c,d,e$ by the
stated failure. Its positive-weight value is $3$. The feasible set $J$ also
has value $3$, so this choice does not yet make the failure strict. Instead
use weight $4/3$ on $a,b$; greedy has value $8/3$, while $J$ has value $3$.
Thus greedy is strictly suboptimal. This instantiates the converse proof with
$a=2$, $b=3$, and $\\varepsilon =1/3$, for which $(1+\\varepsilon )a=8/3<3$.

</details>

### Exercise 10: a nonlinear boundary
<a id="weighted-greedy-objectives-ex-10"></a>

In $U(2,3)$, elements $a,b,c$ have individual scores $4,3,2$, but selecting
both $a$ and $b$ incurs a penalty of $10$. The objective is
$f(S)=\\sum_{e\\in S}w(e)-10$ if $\\{a,b\\}\\subseteq S$, and otherwise the sum of weights.
Show why the additive greedy theorem does not solve maximum $f$ over bases.

<details>
<summary>Hint 1</summary>

**Hint.** Compute the actual objective on all three two-element bases.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The penalty affects exactly the basis $\\{a,b\\}$; fixed additive scores alone do not include that interaction.

</details>

<details>
<summary>Solution</summary>

**Solution.** Additive descending greedy selects $\\{a,b\\}$ and would predict
score $4+3=7$, but the actual nonlinear objective is $f(\\{a,b\\})=-3$ after the
penalty. The other bases have $f(\\{a,c\\})=6$ and $f(\\{b,c\\})=5$, so $\\{a,c\\}$ is
optimal. The feasible family is still a matroid; what failed is the additive
weight hypothesis. Pairwise interaction cannot be represented by fixed
element weights in this instance.

</details>

## Chapter summary and connections

Descending greedy solves maximum-weight basis for every real weight function,
including negative weights, because rank completion is part of the contract.
For optional independent sets, negative elements are skipped and zero elements
require a stated convention. Negating weights gives minimization, while
truncation converts exact or capped cardinality questions into carefully
distinguished matroid problems. Ties can change the witness but not its value;
rank increments across weight layers explain why.

Fundamental-circuit inequalities provide a complete certificate for basis
optimality, turning a procedural result into a checkable proof. Finally,
universal correctness of the standard nonnegative greedy scan characterizes
finite matroids among hereditary systems. The next geometric chapters use
these exchange inequalities as edges and normal directions of basis
polytopes; later extremal chapters contrast exact matroid greedy optimization
with approximation guarantees for genuinely nonlinear objectives.


## Sources for the expanded teaching

The original proofs, statements, examples, solutions, and references above are retained. The new explanations and staged help are original. For a primary reference route, see James Oxley, [*Matroid Theory*](https://academic.oup.com/book/34846), and the [author's materials](https://www.math.lsu.edu/~oxley/). No additional theorem or page locator is asserted.

## Summary

Greedy optimality depends on the feasible family and on the stated objective. Arbitrary real weights are allowed for bases; optional choices omit detrimental elements. Truncation treats cardinality carefully, and fundamental circuits or prefix ranks provide complete optimality certificates. The converse detects failed augmentation with explicit weights. Basis-exchange geometry turns these comparison arguments into paths and orientations.

`;export{e as default};