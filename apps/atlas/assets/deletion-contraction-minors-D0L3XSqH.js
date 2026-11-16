var e=`---
parent_id: book-discrete-combinatorial-structures
chapter_id: deletion-contraction-minors
title: "Deletion, Contraction, and Minor Recurrences"
level: graduate
estimated_minutes: 280
license: CC BY-SA 4.0
---

# Deletion, Contraction, and Minor Recurrences {#section-1-deletion-contraction-and-minor-recurrences}

Deletion removes an element from consideration. Contraction treats an element as already absorbed into the chosen structure. For graphs, contracting a nonloop edge identifies its endpoints; for vectors, contracting a nonzero column quotients by its span. Matroid rank packages both operations without relying on either representation.

The distinction powers recursive proofs and computations. Every subset either contains a chosen element or does not, but the containing branch must be compared after that element's rank contribution has been removed. Loops and coloops are boundary cases: a loop contributes no rank, while a coloop contributes rank in every basis. Ignoring those cases produces plausible but false deletion–contraction formulas.

This chapter derives minors from rank, follows circuits and duality through them, proves that minor order is coherent, and develops basis and Tutte recurrences. Every recurrence states its invariant, hypotheses, and base case.

<a id="section-7-prerequisites-and-notation"></a>
## Prerequisites and notation {#section-9-prerequisites-and-notation}

We assume finite matroids, rank, closure, circuits, bases, and duality from [Rank, Submodularity, and Flats](./rank-submodularity-flats.md), [Circuits, Elimination, and Orthogonality](./circuits-elimination-orthogonality.md), and [Bases, Fundamental Circuits, and Strong Exchange](./bases-strong-exchange.md). Graphic and linear interpretations refer to [Graphic and Cographic Matroids](./graphic-cographic-matroids.md) and [Linear Representability and Field Dependence](./linear-representability-fields.md).

Write $M=(E,r)$. For disjoint sets $C,D\\subseteq E$, $M\\setminus D/C$ means delete $D$ and contract $C$. A **minor** is any matroid obtained this way, up to relabeling. The nullity of $X$ is $n_M(X)=|X|-r_M(X)$. An element $e$ is a loop when $r(\\{e\\})=0$ and a coloop when $r(E)-r(E-e)=1$.

<a id="section-13-1-restriction-and-deletion-retain-old-ranks"></a>
## 1. Restriction and deletion retain old ranks {#section-15-1-restriction-and-deletion-retain-old-ranks}

For $S\\subseteq E$, the restriction $M|S$ has ground set $S$ and independent sets exactly the independent subsets of $M$ contained in $S$. Therefore

$r_{M|S}(X)=r_M(X)$ for every $X\\subseteq S$.

Deletion is the complementary notation

$M\\setminus D=M|(E\\setminus D)$.

Its circuits are exactly the circuits of $M$ disjoint from $D$. One direction is immediate: an old circuit avoiding $D$ stays minimally dependent. Conversely, a minimally dependent set in the restriction has the same dependence and the same proper subsets as in $M$, so it was already an old circuit.

Deletion can lower total rank. It lowers rank by one when deleting a coloop and by zero when deleting a non-coloop. It does not “subtract the rank of the deleted set” in general; two elements may substitute for one another.

<a id="section-27-worked-example-deleting-from-a-square"></a>
### Worked example: deleting from a square {#section-29-worked-example-deleting-from-a-square}

Let $M$ be the cycle matroid of a square with diagonal $13$. Its rank is three. Deleting the diagonal leaves the four-cycle, still of rank three. Deleting edges $12$ and $34$ instead leaves the connected path with edge set $\\{23,41,13\\}$, whose rank is three. The original rank of $\\{12,34\\}$ was two, but total rank loss is $3-3=0$. Rank loss depends on what remains, not just on the deleted set in isolation.

<a id="section-31-2-contraction-subtracts-rank-already-absorbed"></a>
## 2. Contraction subtracts rank already absorbed {#section-33-2-contraction-subtracts-rank-already-absorbed}

For $C\\subseteq E$, define contraction on ground set $E\\setminus C$ by

$r_{M/C}(X)=r_M(X\\cup C)-r_M(C)$ for $X\\subseteq E\\setminus C$.

The right side satisfies the rank axioms. It is nonnegative by monotonicity. Also

$r(X\\cup C)-r(C)\\le |X\\cup C|-|C|=|X|$,

where the sharper inequality follows by adding elements of $X$ one at a time, each raising rank by at most one. Monotonicity is inherited. For submodularity, apply submodularity in $M$ to $X\\cup C$ and $Y\\cup C$, then subtract $2r(C)$:

$r_{M/C}(X)+r_{M/C}(Y)\\ge r_{M/C}(X\\cup Y)+r_{M/C}(X\\cap Y)$.

Thus contraction is a matroid, not merely notation motivated by graphs.

If $e$ is a nonloop, $r(\\{e\\})=1$, so

$r_{M/e}(X)=r_M(X+e)-1$.

If $e$ is a loop, $r(\\{e\\})=0$ and $r(X+e)=r(X)$, hence $M/e=M\\setminus e$. Contracting a set absorbs $r(C)$, not $|C|$; dependent contracted elements do not each consume another unit of rank.

<a id="section-53-worked-example-contract-a-parallel-element"></a>
### Worked example: contract a parallel element {#section-55-worked-example-contract-a-parallel-element}

In $U(1,\\{a,b,c\\})$, all nonempty sets have rank one. Contract $a$. For nonempty or empty $X\\subseteq \\{b,c\\}$,

$r_{M/a}(X)=r_M(X+a)-r_M(\\{a\\})=1-1=0$.

Thus both $b$ and $c$ become loops. Graphically, if $a,b,c$ are parallel edges joining two vertices, contracting one edge identifies the endpoints and turns the other parallel edges into graph loops. Merely deleting $a$ would leave $U(1,\\{b,c\\})$, so contraction and deletion differ.

<a id="section-61-3-independent-sets-and-bases-after-contraction"></a>
## 3. Independent sets and bases after contraction {#section-63-3-independent-sets-and-bases-after-contraction}

Choose a basis $B_C$ of $C$. A set $I\\subseteq E\\setminus C$ is independent in $M/C$ exactly when $B_C\\cup I$ is independent in $M$.

**Proof.** Since $r(C)=|B_C|$ and $B_C$ spans $C$,

$r_M(I\\cup C)=r_M(I\\cup B_C)$.

Now $I$ is independent in $M/C$ precisely when

$|I|=r_{M/C}(I)=r_M(I\\cup B_C)-|B_C|$,

which is equivalent to $r_M(I\\cup B_C)=|I|+|B_C|$, the independence of the union. ∎

Consequently, $B'\\subseteq E\\setminus C$ is a basis of $M/C$ exactly when $B_C\\cup B'$ is a basis of $M$. Different choices of $B_C$ give the same contracted matroid because the rank formula depends only on $C$.

For one nonloop $e$, bases of $M/e$ correspond to bases of $M$ that contain $e$, with $e$ removed. If $e$ is not a coloop, bases of $M\\setminus e$ are precisely bases of $M$ avoiding $e$. If $e$ is a coloop, every basis of $M$ contains it, and the deletion bases are the sets $B-e$ obtained from primal bases $B$.

<a id="section-79-worked-example-quotienting-a-vector-configuration"></a>
### Worked example: quotienting a vector configuration {#section-81-worked-example-quotienting-a-vector-configuration}

Take vectors $a=(1,0)$, $b=(0,1)$, and $c=(1,1)$ over any field. They represent $U(2,3)$. Contract $a$ by passing to the quotient by $\\operatorname{span}(a)$. The images of $b$ and $c$ are equal nonzero vectors, so they become parallel and represent $U(1,2)$. The rank formula agrees: for $X=\\{b,c\\}$, $r_{M/a}(X)=r_M(\\{a,b,c\\})-r_M(\\{a\\})=2-1=1$.

<a id="section-83-4-circuits-under-contraction-require-minimization"></a>
## 4. Circuits under contraction require minimization {#section-85-4-circuits-under-contraction-require-minimization}

Deletion simply discards circuits meeting the deleted set. Contraction is less literal.

**Theorem 14.1 (Circuit contraction).** The circuits of $M/C$ are the inclusion-minimal nonempty sets among

$\\{K\\setminus C : K\\text{ is a circuit of }M \\text{ and } K\\nsubseteq C\\}$.

For a single nonloop $e$, these candidates consist of old circuits avoiding $e$ and sets $K-e$ from old circuits containing $e$; some old circuit avoiding $e$ may cease to be minimal after contraction.

**Proof.** A set $X\\subseteq E\\setminus C$ is dependent in $M/C$ exactly when $r_M(X\\cup C)-r_M(C)<|X|$. Choose a basis $B_C$ of $C$. By the preceding section, this says $B_C\\cup X$ is dependent in $M$. It therefore contains a circuit $K$. Since $B_C$ is independent, $K$ meets $X$, and $K\\setminus C\\subseteq X$ is nonempty. Thus every contracted dependent set contains a candidate.

Conversely, let $K$ be an old circuit not contained in $C$, and set $T=K\\cap C$. Because $T$ is a proper subset of the circuit, $r(T)=|T|$; also $r(K)=|K|-1$. Submodularity applied to $C$ and $K$ gives

$r(C\\cup K)-r(C)\\le r(K)-r(T)=|K\\setminus C|-1$.

Therefore $K\\setminus C$ is dependent in $M/C$. We have shown that contracted dependent sets are exactly the sets containing a nonempty candidate. Their inclusion-minimal members are consequently the inclusion-minimal nonempty candidates, and those are the contracted circuits. ∎

<a id="section-101-worked-warning-an-old-circuit-may-stop-being-minimal"></a>
### Worked warning: an old circuit may stop being minimal {#section-103-worked-warning-an-old-circuit-may-stop-being-minimal}

Let a graph have vertices $1,2,3$ with two parallel edges $a,b$ between $1,2$, plus edges $c=23$ and $d=31$. Before contraction, $\\{a,b\\}$ and $\\{a,c,d\\}$ are circuits. Contract $a$. The candidate from $\\{a,b\\}$ is $\\{b\\}$, so $b$ becomes a loop. The old circuit $\\{b,c,d\\}$, if included via the other parallel choice, avoids $a$ but contains the new one-element circuit $\\{b\\}$; it is dependent but no longer a circuit. This is why the theorem says “inclusion-minimal,” not “all old circuits with $C$ removed.”

<a id="section-105-5-minor-operations-commute-on-disjoint-sets"></a>
## 5. Minor operations commute on disjoint sets {#section-107-5-minor-operations-commute-on-disjoint-sets}

For disjoint $C,D\\subseteq E$ and $X\\subseteq E\\setminus (C\\cup D)$,

$r_{(M\\setminus D)/C}(X)=r_M(X\\cup C)-r_M(C)$

because deletion does not alter ranks of subsets avoiding $D$. The same expression describes $(M/C)\\setminus D$. Therefore

$(M\\setminus D)/C=(M/C)\\setminus D$.

Contractions combine:

$(M/C_1)/C_2=M/(C_1\\cup C_2)$

for disjoint $C_1,C_2$. Substituting the rank formula twice makes the intermediate terms cancel. Deletions plainly combine by union. Hence every sequence of deletions and contractions can be normalized to $M\\setminus D/C$ with disjoint sets.

This is order independence of operations on distinct elements. It does not say deletion and contraction of the same element are equal. Nor does it say two different pairs $(C,D)$ always produce nonisomorphic minors; different sequences may coincidentally reach isomorphic outcomes.

<a id="section-123-worked-two-step-minor"></a>
### Worked two-step minor {#section-125-worked-two-step-minor}

In $U(3,6)$, delete one element and contract two distinct remaining elements. Deletion gives $U(3,5)$; contracting two independent elements gives $U(1,3)$. Reversing the distinct operations gives the same result: contracting two first yields $U(1,4)$, then deletion yields $U(1,3)$. The rank fell by two through contraction, not through deletion.

<a id="section-127-6-duality-interchanges-deletion-and-contraction"></a>
## 6. Duality interchanges deletion and contraction {#section-129-6-duality-interchanges-deletion-and-contraction}

For $e\\in E$,

$(M\\setminus e)^{*}=M^{*}/e$, and $(M/e)^{*}=M^{*}\\setminus e$.

The cleanest proof uses bases. Bases of $M\\setminus e$ are maximal independent sets avoiding $e$; taking complements within $E-e$ corresponds to taking complements of primal bases containing the appropriate rank behavior. A rank proof handles loop and coloop cases uniformly. Using

$r_{M^{*}}(X)=|X|-r_M(E)+r_M(E\\setminus X)$,

substitution into the deletion and contraction rank formulas yields the displayed identities.

For sets,

$(M\\setminus D/C)^{*}=M^{*}/D\\setminus C$.

Thus loops and coloops are dual: deleting a primal loop corresponds to contracting a dual coloop. Graphic cycle and bond calculations are two views of this identity.

The class of matroids representable over a fixed field is minor-closed. Deletion removes columns. To contract a nonloop represented column, row-reduce it to a unit vector, delete its pivot row and its column, and retain the other columns. Contracting a loop equals deleting its zero column. No field change is involved.

<a id="section-147-7-graphic-minors-retain-loops-and-parallel-edges"></a>
## 7. Graphic minors retain loops and parallel edges {#section-149-7-graphic-minors-retain-loops-and-parallel-edges}

For a multigraph $G$ and edge $e$,

$M(G)\\setminus e=M(G\\setminus e)$.

If $e$ is a nonloop graph edge, then

$M(G)/e=M(G/e)$,

where $G/e$ identifies the endpoints of $e$ and removes $e$ itself. Other edges are not simplified afterward. An edge parallel to $e$ becomes a graph loop, and distinct edges that acquire the same endpoints remain parallel. These features are necessary because the resulting one- and two-element matroid circuits must be preserved.

**Rank verification.** Let $e=uv$ be a nonloop and let $X$ avoid $e$. In the spanning subgraph $(V,X+e)$, adding $e$ either joins the $X$-components containing $u,v$ or lies within one component. Identifying $u,v$ in $G/e$ reduces both the vertex count and the relevant component count in exactly the way needed for

$|V(G/e)|-c_{G/e}(X)=|V(G)|-c_G(X+e)-1$.

The right side is $r_{M(G)}(X+e)-r(\\{e\\})$, the contracted rank. The equality of rank functions proves the matroid identity without relying on an informal picture.

For a graph loop $e$, graph contraction is best defined at the matroid level as deletion: identifying an endpoint with itself changes nothing, and the loop is removed. Some graph conventions leave “loop contraction” undefined. Any theorem mixing graph and matroid minors must state which convention is in force.

<a id="section-167-worked-graph-minor-with-new-loops"></a>
### Worked graph minor with new loops {#section-169-worked-graph-minor-with-new-loops}

Let $G$ have two vertices joined by three parallel edges $a,b,c$, and attach a bridge $d$ from the second vertex to a third. Contract $a$. The endpoints of $a$ merge, so $b,c$ become loops while $d$ remains an ordinary edge and a coloop. The resulting cycle matroid is $U(0,\\{b,c\\})\\oplus U(1,\\{d\\})$. Its rank is one. The contraction formula gives the same total: $r(M/a)=r(M)-r(\\{a\\})=2-1=1$.

<a id="section-171-8-basis-counting-has-a-deletion-contraction-recurrence"></a>
## 8. Basis counting has a deletion–contraction recurrence {#section-173-8-basis-counting-has-a-deletion-contraction-recurrence}

Let $b(M)$ be the number of bases of $M$, with $b$ of the empty matroid equal to one. Partition bases according to whether they contain $e$.

- Bases avoiding $e$ are bases of $M\\setminus e$ when $e$ is not a coloop.
- Bases containing a nonloop $e$, after removing it, are bases of $M/e$.

Therefore, if $e$ is neither a loop nor a coloop,

$b(M)=b(M\\setminus e)+b(M/e)$.

If $e$ is a loop, no basis contains it and $M/e=M\\setminus e$, but the correct recurrence is only $b(M)=b(M\\setminus e)$. Adding both branches would double-count. If $e$ is a coloop, every basis contains it and $b(M)=b(M/e)$; deletion has smaller rank and its bases are not complements of full-rank bases of $M$.

<a id="section-184-worked-basis-recurrence"></a>
### Worked basis recurrence {#section-186-worked-basis-recurrence}

For $U(2,4)$, choose any element $e$. It is neither loop nor coloop. Deletion is $U(2,3)$, with three bases; contraction is $U(1,3)$, also with three bases. Hence $b(U(2,4))=3+3=6$, agreeing with the six two-element subsets.

<a id="section-188-9-the-tutte-polynomial-packages-every-subset-branch"></a>
## 9. The Tutte polynomial packages every subset branch {#section-190-9-the-tutte-polynomial-packages-every-subset-branch}

Define

$T_M(x,y)=\\sum _{A\\subseteq E}(x-1)^{r(E)-r(A)}(y-1)^{|A|-r(A)}$.

The exponents are the corank $r(E)-r(A)$ and nullity $|A|-r(A)$, both nonnegative. The empty matroid has polynomial $1$.

Choose $e\\in E$ and split the subset sum into $A$ avoiding $e$ and $B+e$ containing it.

**Ordinary case.** If $e$ is neither a loop nor a coloop, $r_M(E)=r_{M\\setminus e}(E-e)=r_{M/e}(E-e)+1$. The avoiding terms reproduce $T_{M\\setminus e}$. For containing sets, contraction gives

$r_{M/e}(B)=r_M(B+e)-1$,

so both exponents reproduce those of $B$ in $M/e$. Hence

$T_M=T_{M\\setminus e}+T_{M/e}$.

**Loop case.** If $e$ is a loop, $r(B+e)=r(B)$ while cardinality rises by one. Pairing $B$ and $B+e$ multiplies each deletion term by

$1+(y-1)=y$,

so $T_M=yT_{M\\setminus e}$.

**Coloop case.** If $e$ is a coloop, every set containing it gains one rank and every set avoiding it has one extra unit of corank relative to the contraction. Pairing the two branches gives

$(x-1)+1=x$,

so $T_M=xT_{M/e}$.

These recurrences, together with $T_empty=1$, characterize the polynomial because each step reduces the ground-set size. The subset formula proves that the answer is independent of the order in which elements are processed.

<a id="section-220-worked-tutte-computation-a-parallel-pair-and-a-coloop"></a>
### Worked Tutte computation: a parallel pair and a coloop {#section-222-worked-tutte-computation-a-parallel-pair-and-a-coloop}

Let $M=U(1,\\{a,b\\})\\oplus U(1,\\{c\\})$. Element $c$ is a coloop, so $T_M=xT_{U(1,2)}$. In the parallel pair, choose $a$; it is ordinary, deletion leaves the one-element coloop with polynomial $x$, and contraction makes $b$ a loop with polynomial $y$. Thus

$T_M=x(x+y)=x^2+xy$.

Evaluating at $(1,1)$ gives $2$, the number of bases: choose one of $a,b$ and necessarily choose $c$.

<a id="section-228-10-what-tutte-evaluations-do-and-do-not-count"></a>
## 10. What Tutte evaluations do—and do not—count {#section-230-10-what-tutte-evaluations-do-and-do-not-count}

From the subset definition or the recurrence,

$T_M(1,1)=b(M)$.

At $(1,1)$, a term survives exactly when $r(A)=r(E)$ and $|A|=r(A)$, meaning $A$ is a basis. The other two basic evaluations are

$T_M(1,2)$ counts spanning sets, and $T_M(2,1)$ counts independent sets.

For $(1,2)$, positive corank is killed and nullity receives weight one. For $(2,1)$, positive nullity is killed and corank receives weight one. Stating the exponent check prevents the common reversal.

No single Tutte evaluation counts arbitrary weighted bases unless weights are incorporated into a multivariate invariant. Likewise, deletion–contraction may be exponentially large without memoization or structural decomposition; a recurrence is an identity, not by itself a polynomial-time algorithm.

<a id="section-242-11-direct-sums-multiply-the-tutte-polynomial"></a>
## 11. Direct sums multiply the Tutte polynomial {#section-244-11-direct-sums-multiply-the-tutte-polynomial}

Suppose $M=M_1\\oplus M_2$ on disjoint ground sets $E_1,E_2$. Every subset decomposes uniquely as $A=A_1⊔A_2$, and ranks add:

$r_M(A)=r_{M_1}(A_1)+r_{M_2}(A_2)$.

Both corank and nullity therefore split into a sum of the corresponding exponents. The subset sum factors:

$T_M(x,y)=T_{M_1}(x,y)T_{M_2}(x,y)$.

This explains the multiplication in the earlier parallel-pair-plus-coloop example. It also provides an exact acceleration: compute connected summands separately and multiply their polynomials. The identity is algebraic and does not require knowing a graph representation.

Repeated deletion–contraction reaches one-element summands at terminal branches. A terminal matroid with $p$ coloops and $q$ loops has polynomial $x^p y^q$. In an implementation, recognizing such a terminal state avoids branching further. More generally, isomorphic minors have the same polynomial and can share a cached result, but verifying isomorphism may itself be costly.

<a id="section-256-worked-direct-sum-factorization"></a>
### Worked direct-sum factorization {#section-258-worked-direct-sum-factorization}

The matroid $U(1,2)\\oplus U(1,3)$ has polynomial $(x+y)(x+y+y^2)$. For $U(1,3)$, deletion of an ordinary element gives $U(1,2)$ and contraction leaves two loops, so its polynomial is $(x+y)+y^2$. Evaluating the product at $(1,1)$ gives $2\\cdot 3=6$ bases, consistent with choosing one element independently from each parallel class.

<a id="section-260-12-rank-and-nullity-ledgers-verify-a-recurrence"></a>
## 12. Rank and nullity ledgers verify a recurrence {#section-262-12-rank-and-nullity-ledgers-verify-a-recurrence}

A reliable deletion–contraction computation records, for each state, the ground-set size, total rank, chosen element type, and resulting minors. These quantities catch branch errors:

- ordinary deletion preserves total rank, while ordinary contraction lowers it by one;
- loop deletion and contraction agree and preserve total rank;
- coloop contraction lowers both size and rank by one;
- dualizing swaps loop with coloop and deletion with contraction;
- every branch lowers ground-set size exactly one.

For the subset definition, a separate exact audit can enumerate all $2^{|E|}$ subsets for small $E$, record $(corank,nullity)$, and compare coefficient counts with a recursive result. The table is a proof aid only at bounded size; the symbolic recurrence proves the identity for arbitrary finite ground sets.

Minor closure is also a proof strategy. If a property is preserved by both deletion and contraction, then every minor of an object with that property inherits it. Fixed-field representability is one example. The converse direction is different: knowing that every proper minor has a property does not force the original matroid to have it. A **minor-minimal obstruction** is a matroid lacking the property while all of its proper minors possess it. Identifying such an obstruction requires checking every one-element deletion and contraction up to subsequent minors; checking a favorite sequence is insufficient.

Induction on $|E|$ often chooses an element and invokes both proper minors. The induction hypothesis applies only after verifying that each branch remains inside the claimed class. For loops or coloops, one branch may be redundant, but the ground set still shrinks. A minimal-counterexample argument should state whether it minimizes ground-set size, rank, nullity, or a lexicographic pair, because deletion and contraction change those measures differently.

<a id="section-276-worked-ledger-for-u-2-3"></a>
### Worked ledger for $U(2,3)$ {#section-278-worked-ledger-for-u-2-3}

Choose $e$. The original state has $(n,r)=(3,2)$ and $e$ is ordinary. Deletion gives $U(2,2)$ with $(2,2)$, two coloops, polynomial $x^2$. Contraction gives $U(1,2)$ with $(2,1)$, polynomial $x+y$. Hence $T=x^2+x+y$. Its eight subsets sort as one set of corank two, three singleton sets of corank one, three bases, and one spanning set of nullity one; expanding the defining powers produces the same polynomial.

<a id="section-280-13-common-errors"></a>
## 13. Common errors {#section-282-13-common-errors}

1. **Contraction subtracts $|C|$.** It subtracts $r(C)$; dependent contracted elements absorb no additional rank.
2. **All old circuits avoiding $e$ remain circuits after contraction.** They remain dependent, but a new smaller circuit may appear inside them.
3. **Deletion and contraction are interchanged in the dual incorrectly.** Duality swaps the operations.
4. **The ordinary two-branch recurrence is used for a loop.** That double-counts identical deletion and contraction behavior.
5. **A coloop deletion branch is counted as full-rank bases.** Every primal basis contains the coloop.
6. **Graph contraction silently discards loops or parallel edges.** Those edges encode matroid loops and parallel elements and must remain unless explicitly deleted.
7. **Minor order independence is applied to one element twice.** The commuting identity requires disjoint deletion and contraction sets.
8. **$T(1,2)$ and $T(2,1)$ are reversed.** Inspect corank and nullity exponents.

<a id="section-291-14-solved-exercises"></a>
## 14. Solved exercises {#section-293-14-solved-exercises}

<a id="section-293-exercise-1-contract-a-loop"></a>
### Exercise 1: contract a loop {#section-295-exercise-1-contract-a-loop}
<a id="deletion-contraction-minors-ex-1"></a>

Prove directly from rank that contracting a loop $e$ equals deleting it.

<details>
<summary>Hint 1</summary>

**Hint.** Use the contraction rank definition on an arbitrary subset avoiding $e$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A loop has $r(\\{e\\})=0$ and adds no rank to any subset.

</details>

<details>
<summary>Solution</summary>

**Solution.** Since $e$ is a loop, $r(\\{e\\})=0$ and $r(X+e)=r(X)$ for every $X\\subseteq E-e$. Therefore $r_{M/e}(X)=r_M(X+e)-r_M(\\{e\\})=r_M(X)$. This is exactly the rank of $M\\setminus e$ on every subset of the common ground set.

</details>

<a id="section-319-exercise-2-contract-a-uniform-matroid"></a>
### Exercise 2: contract a uniform matroid {#section-321-exercise-2-contract-a-uniform-matroid}
<a id="deletion-contraction-minors-ex-2"></a>

For a nonloop $e$ of $U(r,n)$ with $1\\le r\\le n$, identify deletion and contraction.

<details>
<summary>Hint 1</summary>

**Hint.** Start from the uniform rank formula $r(X)=\\min(|X|,r)$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Deletion keeps that rank on the smaller ground set; contraction evaluates $\\min(|X|+1,r)-1$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Deletion leaves all subsets of size at most $r$ independent on $n-1$ elements, so it is $U(\\min(r,n-1),n-1)$. Contraction has rank $\\min(|X|+1,r)-1=\\min(|X|,r-1)$, hence is $U(r-1,n-1)$. When $r=n$, deletion is $U(n-1,n-1)$ as the minimum formula records.

</details>

<a id="section-345-exercise-3-find-contracted-circuits"></a>
### Exercise 3: find contracted circuits {#section-347-exercise-3-find-contracted-circuits}
<a id="deletion-contraction-minors-ex-3"></a>

Let $M=U(2,\\{a,b,c,d\\})$ and contract $a$. List the circuits.

<details>
<summary>Hint 1</summary>

**Hint.** First identify the contracted uniform matroid, or remove $a$ from old circuits.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Keep only minimal nonempty remnants: the remaining triple contains smaller dependent pairs.

</details>

<details>
<summary>Solution</summary>

**Solution.** Old circuits are all three-subsets. Those containing $a$ yield all pairs among $\\{b,c,d\\}$; those avoiding $a$ yield the triple $\\{b,c,d\\}$, which is not minimal because it contains pairs. Thus the contracted circuits are $\\{b,c\\}$, $\\{b,d\\}$, and $\\{c,d\\}$. The result is $U(1,3)$.

</details>

<a id="section-371-exercise-4-normalize-a-minor-sequence"></a>
### Exercise 4: normalize a minor sequence {#section-373-exercise-4-normalize-a-minor-sequence}
<a id="deletion-contraction-minors-ex-4"></a>

Simplify $((M/a)\\setminus b)/c\\setminus d$ when $a,b,c,d$ are distinct.

<details>
<summary>Hint 1</summary>

**Hint.** The four element names are distinct, so the disjoint-operation commutation laws apply.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Collect the deletion names together and the contraction names together without reusing an element.

</details>

<details>
<summary>Solution</summary>

**Solution.** Contractions on distinct elements combine and commute past deletions on other elements. Thus the result is $M\\setminus \\{b,d\\}/\\{a,c\\}$. No claim is made if an element name repeats in both operation sets.

</details>

<a id="section-397-exercise-5-dual-minor"></a>
### Exercise 5: dual minor {#section-399-exercise-5-dual-minor}
<a id="deletion-contraction-minors-ex-5"></a>

Express $(M\\setminus \\{a,b\\}/c)^{*}$ as a minor of $M^{*}$.

<details>
<summary>Hint 1</summary>

**Hint.** Apply the identities interchanging deletion and contraction under duality.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Deletion of $a,b$ becomes contraction; contraction of $c$ becomes deletion.

</details>

<details>
<summary>Solution</summary>

**Solution.** Duality converts deletion of $a,b$ into contraction and contraction of $c$ into deletion. Hence $(M\\setminus \\{a,b\\}/c)^{*}=M^{*}/\\{a,b\\}\\setminus c$. The operations involve distinct elements, so their written order may be swapped.

</details>

<a id="section-423-exercise-6-count-bases-recursively"></a>
### Exercise 6: count bases recursively {#section-425-exercise-6-count-bases-recursively}
<a id="deletion-contraction-minors-ex-6"></a>

Use deletion–contraction to count bases of $U(3,5)$.

<details>
<summary>Hint 1</summary>

**Hint.** Split bases according to whether they contain one chosen element $e$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** That element is neither a loop nor a coloop; the two minors are $U(3,4)$ and $U(2,4)$.

</details>

<details>
<summary>Solution</summary>

**Solution.** For any $e$, deletion is $U(3,4)$ with four bases and contraction is $U(2,4)$ with six bases. The element is neither loop nor coloop, so $b(U(3,5))=4+6=10$, agreeing with the ten three-subsets.

</details>

<a id="section-449-exercise-7-compute-two-small-tutte-polynomials"></a>
### Exercise 7: compute two small Tutte polynomials {#section-451-exercise-7-compute-two-small-tutte-polynomials}
<a id="deletion-contraction-minors-ex-7"></a>

Compute the Tutte polynomial of a one-element loop and a one-element coloop.

<details>
<summary>Hint 1</summary>

**Hint.** Begin with the empty-matroid Tutte polynomial, then use the exceptional-element recurrences.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A loop contributes a factor $y$, whereas a coloop contributes a factor $x$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The empty matroid has polynomial one. The loop recurrence gives $y\\cdot 1=y$; the coloop recurrence gives $x\\cdot 1=x$. Directly, the loop's subsets contribute $1$ and $y-1$, while the coloop's subsets contribute $x-1$ and $1$.

</details>

<a id="section-475-exercise-8-evaluate-a-polynomial"></a>
### Exercise 8: evaluate a polynomial {#section-477-exercise-8-evaluate-a-polynomial}
<a id="deletion-contraction-minors-ex-8"></a>

If $T_M(x,y)=x^2+x+y$, determine the number of bases, independent sets, and spanning sets.

<details>
<summary>Hint 1</summary>

**Hint.** Use the three counting evaluations of the Tutte polynomial.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Substitute $(1,1),(2,1),(1,2)$ for bases, independent sets, and spanning sets respectively.

</details>

<details>
<summary>Solution</summary>

**Solution.** Bases number $T(1,1)=1+1+1=3$. Independent sets number $T(2,1)=4+2+1=7$. Spanning sets number $T(1,2)=1+1+2=4$. These counts are evaluations of the invariant; they do not identify the sets individually.

</details>

<a id="section-501-exercise-9-expose-the-rank-loss-fallacy"></a>
### Exercise 9: expose the rank-loss fallacy {#section-503-exercise-9-expose-the-rank-loss-fallacy}
<a id="deletion-contraction-minors-ex-9"></a>

In $U(2,4)$, delete a two-element set $D$. Compare $r(D)$ with the loss of total rank.

<details>
<summary>Hint 1</summary>

**Hint.** Deletion retains the rank available in the complement of $D$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The two undeleted elements still form a basis of $U(2,4)$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The set $D$ has rank two. The remaining two elements also form a basis, so $r(M\\setminus D)=2=r(M)$. Total rank loss is zero, not $r(D)=2$. Deletion asks what rank survives in the complement; contraction is the operation whose total rank is $r(M)-r(D)$.

</details>

<a id="section-527-exercise-10-contract-in-a-graph-without-simplifying"></a>
### Exercise 10: contract in a graph without simplifying {#section-529-exercise-10-contract-in-a-graph-without-simplifying}
<a id="deletion-contraction-minors-ex-10"></a>

A triangle has a second edge parallel to edge $12$. Contract one copy of $12$. Describe every remaining edge type.

<details>
<summary>Hint 1</summary>

**Hint.** Identify the endpoints merged by contraction, keeping all other edge labels.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The unused copy of $12$ has equal endpoints after merging; the other triangle edges then share their two endpoints.

</details>

<details>
<summary>Solution</summary>

**Solution.** The other copy of $12$ becomes a graph loop at the merged vertex. Edges $23$ and $31$ both join that merged vertex to vertex $3$, so they become a parallel pair and form a two-element circuit. Deleting the new loop or merging the parallel pair would change the labeled cycle matroid, so neither simplification is part of contraction.

</details>

<a id="section-553-chapter-summary-and-dependencies"></a>
## Chapter summary and dependencies {#section-555-chapter-summary-and-dependencies}

Restriction preserves old ranks on a smaller ground set. Contraction uses $r_{M/C}(X)=r_M(X\\cup C)-r_M(C)$, which treats $C$ as already spanned and subtracts rank rather than cardinality. Its circuits are minimal nonempty remnants of old circuits, so explicit minimization is essential. Disjoint deletions and contractions commute, duality swaps them, and fixed-field representability survives both operations. Basis counting and the Tutte polynomial split on ordinary elements but require separate loop and coloop branches.

The graphic and cographic realizations are in [Graphic and Cographic Matroids](./graphic-cographic-matroids.md); the matrix quotient model is in [Linear Representability and Field Dependence](./linear-representability-fields.md). The next structural dependency is dual sums and connectivity, which uses minors to detect separations. Weighted optimization instead returns to [Bases, Fundamental Circuits, and Strong Exchange](./bases-strong-exchange.md).

<a id="section-559-source-and-verification-note"></a>
## Sources {#section-561-source-and-verification-note}

Further reading includes James Oxley, *Matroid Theory*, 2nd ed. (2011), and D. J. A. Welsh, *Matroid Theory* (1976), as modern routes for the Tutte recurrence and invariance. This guide does not specify a theorem/page locator, so this note makes no textual-dependence or priority claim.


<a id="section-564-sources-for-the-expanded-teaching"></a>
## Sources for the expanded teaching {#section-566-sources-for-the-expanded-teaching}

The original proofs, statements, examples, solutions, and references above are retained. The new explanations and staged help are original. For a primary reference route, see James Oxley, [*Matroid Theory*](https://academic.oup.com/book/34846), and the [author's materials](https://www.math.lsu.edu/~oxley/). No additional theorem or page locator is asserted.

<a id="section-568-summary"></a>
## Summary {#section-570-summary}

Deletion restricts the available ground elements, while contraction subtracts the rank already supplied by contracted elements. Minimal circuit remnants, loop and coloop branches, and fixed-field quotient models make those operations precise. Their counting recurrences preserve distinct element labels. Duality exchanges deletion with contraction; the next chapter uses that symmetry to study sums, components, and low-order separations.

`;export{e as default};