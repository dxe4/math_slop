
# Rank, Submodularity, Closure, and Flats

Independence is a yes/no property of a subset. Rank measures how much independent structure the subset contains. That numerical change of language makes comparisons possible: overlap produces a submodular inequality, zero rank gain produces closure, and closed sets assemble into a lattice. In a vector configuration these ideas are dimension and span. In a graph they are forest size and connectivity. Matroid rank proves exactly which parts of those analogies survive without coordinates.

## Prerequisites and scope

We assume finite matroids, basis extension, and ordinary basis exchange. Familiarity with vector-space dimension and graph components is helpful but not required. All closures in this chapter are matroid closures. A general hereditary family can have a maximum-size function, but that function need not be submodular and its rank-neutral additions need not define this closure geometry.

For $A\subseteq E$, write $M|A$ for the restriction whose independent sets are the independent subsets of $A$.

## 1. Rank is the size of a basis of a restriction

For a finite matroid $M=(E,I)$, define

$r(A)=\max\{|I|:I\subseteq A \text{ and } I\in I\}$.

Equivalently, $r(A)$ is the common size of all bases of $A$. The maximum exists because $A$ is finite. Three basic properties follow:

1. $0\le r(A)\le |A|$;
2. if $A\subseteq B$, then $r(A)\le r(B)$;
3. if $e\notin A$, then $r(A+e)-r(A)$ is either zero or one.

For the third property, a basis of $A$ remains independent in $A+e$, so rank cannot fall. A basis of $A+e$ loses at most one element when intersected with $A$, so its size is at most $r(A)+1$.

### Worked graphic example

Let $G$ be a graph with vertex set $V$, and let $A\subseteq E(G)$. If $c(A)$ is the number of connected components of the spanning subgraph $(V,A)$, including isolated vertices, then

$r(A)=|V|-c(A)$.

Indeed, a spanning forest of each component uses $|V_i|-1$ edges. Summing gives $|V|-c(A)$, and no acyclic subset inside those components can be larger. An edge raises rank exactly when its endpoints lie in different components of $(V,A)$.

## 2. Submodularity is diminishing structural return

**Theorem 9.3 (Rank submodularity).** For all $A,B\subseteq E$,

$r(A\cup B)+r(A\cap B)\le r(A)+r(B)$.

**Proof.** Choose a basis $K$ of $A\cap B$. Extend it to a basis $K\cup X$ of $A$, then extend that independent set to a basis $K\cup X\cup Y$ of $A\cup B$. Every element of $Y$ lies in $(A\cup B)\setminus A\subseteq B$. The set $K\cup Y$ is an independent subset of $B$, so

$|K|+|Y|\le r(B)$.

Now $|K|=r(A\cap B)$, $|K|+|X|=r(A)$, and $|K|+|X|+|Y|=r(A\cup B)$. Rearranging the displayed inequality gives the result. ∎

Submodularity is equivalent to a **diminishing-returns** rule. If $A\subseteq B$ and $e\notin B$, then

$r(A+e)-r(A)\ge r(B+e)-r(B)$.

Apply submodularity to $A+e$ and $B$: their union is $B+e$ and their intersection is $A$. Conversely, adding elements one at a time recovers the two-set submodular inequality from diminishing returns.

The marginal gains are only zero or one, so the statement has a sharp interpretation: once $e$ has become redundant over $A$, it remains redundant over every larger set.

### Strictness and equality

Submodularity can be strict. In the graphic matroid of a triangle, take $A=\{12,23\}$ and $B=\{23,31\}$. Both ranks are two, their intersection has rank one, and their union has rank two. Thus $2+1<2+2$. Equality marks a **modular pair**; not every pair of flats is modular.

## 3. The rank axioms reconstruct a matroid

Suppose instead that an integer-valued function $r:\mathcal{P}(E)\to \mathbb{Z}$ is given and satisfies bounds, monotonicity, and submodularity. Declare $A$ independent exactly when $r(A)=|A|$. We now give the complete reconstruction.

Submodularity with $\{e\}$ gives $r(A+e)\le r(A)+1$. Iterating yields

$r(X)\le r(Y)+|X\setminus Y|$ for $Y\subseteq X$.

If $X$ is independent and $Y\subseteq X$, then

$|X|=r(X)\le r(Y)+|X\setminus Y|\le |Y|+|X\setminus Y|=|X|$,

so equality throughout forces $r(Y)=|Y|$. Heredity holds.

Let independent $I,J$ satisfy $|I|<|J|$. If every $e\in J\setminus I$ had zero marginal gain over $I$, diminishing returns would make every such element have zero gain after the previous ones were added. Hence $r(I\cup J)=r(I)=|I|$. Monotonicity would then give

$|J|=r(J)\le r(I\cup J)=|I|$,

a contradiction. Some element augments $I$, and the reconstructed family is a matroid.

Finally, the rank of the reconstructed matroid is the original function. A maximal reconstructed-independent subset $I\subseteq A$ has $|I|\le r(A)$. If strict inequality remained, the augmentation argument encoded in the rank increments would find another element of $A$ raising rank, contradicting maximality. Thus $|I|=r(A)$.

This establishes rank as a genuine cryptomorphism, not merely a list of necessary conditions.

## 4. Closure records zero rank gain

Define the **closure** or **span** of $A$ by

$\operatorname{cl}(A)=\{e\in E:r(A+e)=r(A)\}$.

Elements already in $A$ belong automatically. A loop lies in $\operatorname{cl}(\varnothing )$. Two nonloops are parallel exactly when each lies in the closure of the other singleton.

**Theorem 9.4 (Closure).** Matroid closure is:

1. extensive: $A\subseteq \operatorname{cl}(A)$;
2. monotone: $A\subseteq B$ implies $\operatorname{cl}(A)\subseteq \operatorname{cl}(B)$;
3. idempotent: $\operatorname{cl}(\operatorname{cl}(A))=\operatorname{cl}(A)$;
4. exchange-bearing: if $y\in \operatorname{cl}(A+x)\setminus \operatorname{cl}(A)$, then $x\in \operatorname{cl}(A+y)$.

**Proof.** Extensivity is immediate. For monotonicity, an element with zero marginal gain over $A$ has zero gain over the larger set $B$ by diminishing returns.

Add the members of $\operatorname{cl}(A)$ one at a time. Each has zero gain over $A$, hence also over the growing set, so $r(\operatorname{cl}(A))=r(A)$. If $e\in \operatorname{cl}(\operatorname{cl}(A))$, then

$r(A+e)\le r(\operatorname{cl}(A)+e)=r(\operatorname{cl}(A))=r(A)$,

and monotonicity gives equality. Thus $e\in \operatorname{cl}(A)$, proving idempotence.

For exchange, suppose $y\in \operatorname{cl}(A+x)\setminus \operatorname{cl}(A)$. Because $y$ raises rank over $A$, $r(A+y)=r(A)+1$. Also $x$ cannot already be in $\operatorname{cl}(A)$, or idempotence would make $\operatorname{cl}(A+x)=\operatorname{cl}(A)$. Hence $r(A+x)=r(A)+1$. The first membership gives

$r(A+x+y)=r(A+x)=r(A)+1=r(A+y)$,

so adding $x$ to $A+y$ has zero gain. ∎

The fourth property is the closure exchange law. Ordinary topological closure satisfies the first three properties but not generally this exchange law; the two notions should not be conflated.

### Linear and graphic interpretations

For indexed vectors, $\operatorname{cl}(A)$ consists of all indexed columns lying in the linear span of the columns indexed by $A$. For a graphic matroid, $\operatorname{cl}(A)$ consists of $A$ together with every edge whose endpoints already lie in the same component of $(V,A)$. The latter statement remains correct when $A$ contains cycles; $A$ need not be a forest.

## 5. Flats form a lattice of closed information

A **flat** is a set $F$ satisfying $\operatorname{cl}(F)=F$. Equivalently, every $e\notin F$ raises rank:

$r(F+e)=r(F)+1$.

Intersections of flats are flats. If $F_i$ are flats and $e\in \operatorname{cl}(\cap F_i)$, monotonicity places $e$ in every $\operatorname{cl}(F_i)=F_i$, hence in their intersection. The empty intersection is $E$, also a flat.

The flats form a lattice ordered by inclusion:

- the meet is $F∧G=F\cap G$;
- the join is $F∨G=\operatorname{cl}(F\cup G)$.

Rank remains submodular on this lattice:

$r(F∨G)+r(F∧G)\le r(F)+r(G)$.

We used $r(\operatorname{cl}(X))=r(X)$ to replace the union by its closure. The abstract flat
lattice is a **geometric lattice**: it is finite, atomistic, and semimodular,
and it is unchanged up to lattice isomorphism when the matroid is simplified.
Simplicity is what makes the ground-set presentation faithful, not what creates
the lattice theorem. In a simple matroid, rank-one flats correspond one-to-one
with elements. In a nonsimple matroid the bottom flat contains all loops and an
atom may contain an entire parallel class.

### Hyperplanes

A **hyperplane** is a maximal proper flat. In a rank-$r$ matroid, every hyperplane has rank $r-1$.

To see this, a proper flat cannot have rank $r$, because a basis inside it would span all of $E$. If its rank were at most $r-2$, extend a basis of it by one element; the closure of the enlarged independent set would be a larger proper flat, contradicting maximality. Conversely, a flat of rank $r-1$ is maximal proper because adding any outside element raises rank to $r$ and therefore spans $E$.

Complements of hyperplanes are cocircuits. This turns rank geometry into the cut-like certificates used by strong basis exchange.

## 6. Restriction and contraction have transparent rank formulas

For $S\subseteq E$, restriction simply keeps the old ranks on subsets of $S$:

$r_{M|S}(A)=r_M(A)$ for $A\subseteq S$.

Contraction treats $S$ as already absorbed. For $A\subseteq E\setminus S$,

$r_{M/S}(A)=r_M(A\cup S)-r_M(S)$.

The formula does not require $S$ to be independent. Choose a basis $B_S$ of $S$; independent sets of the contraction are those sets that can be joined to $B_S$ without dependence. The rank difference measures the additional independent capacity beyond $S$.

### Worked contraction

**Worked example (Contraction in $U(3,5)$).**

In $U(3,5)$, contract a two-element independent set $S$. Then

$r_{M/S}(A)=\min(|A|+2,3)-2=\min(|A|,1)$.

The contraction is $U(1,3)$. If instead a set containing loops were contracted, the subtracted rank rather than the raw cardinality would handle them correctly.

### Nullity and local connectivity

The **nullity** of $A$ is $η(A)=|A|-r(A)$. It counts how many elements remain after a basis of $A$ is chosen. Adding one element either preserves nullity (when rank rises) or raises nullity by one (when the element is rank-redundant). Because cardinality is modular and rank is submodular, nullity is supermodular:

$η(A\cup B)+η(A\cap B)\ge η(A)+η(B)$.

For a graph, nullity is the cycle-space dimension $|A|-|V|+c(A)$. It is zero exactly for forests.

For a represented matroid, nullity is $\dim\ker(A_A)$ by rank–nullity, so it counts independent linear-dependence parameters rather than merely the number of displayed circuit supports.

The **local connectivity** between $A$ and $B$ is

$\sqcap(A,B)=r(A)+r(B)-r(A\cup B)$.

Submodularity gives $\sqcap(A,B)\ge r(A\cap B)$, and disjoint sets can still have positive local connectivity. For represented matroids it equals the dimension of $\operatorname{span}(A)\cap \operatorname{span}(B)$, even when the indexed sets themselves are disjoint. In a graphic matroid, two disjoint edge regions can share connectivity through their incident vertex structure. Local connectivity is therefore structural overlap, not merely set intersection.

## 7. Project investigation: an exact rank ledger

For a ground set of at most eight elements, enumerate every subset in a fixed code-unit order and record:

1. its maximum independent size;
2. each one-element marginal gain;
3. its closure;
4. whether it is a flat;
5. every submodularity slack
   $r(A)+r(B)-r(A\cup B)-r(A\cap B)$.

The investigation has two proof obligations. First, independently audit heredity and augmentation before labeling the ledger “matroid rank.” Second, use exact integers; no tolerance is relevant. A zero slack identifies a modular pair in that finite instance, not a theorem that the entire lattice is modular.

For the five-cycle's stable vertex sets, the maximum-size function supplies an instructive negative control. The family is hereditary but not a matroid, so the ledger should not advertise matroid closure even if some rank-neutral additions can be computed.

## 8. Common errors and counterexamples

1. **Submodularity is reversed.** The union-plus-intersection rank is at most, not at least, the separate sum.
2. **A spanning subgraph is assumed to be a forest.** Graphic rank and closure use components of $(V,A)$ for arbitrary $A$.
3. **Closure is computed before exchange is verified.** Rank-neutral span in a nonmatroid system lacks the full closure-exchange contract.
4. **Every proper flat is called a hyperplane.** Hyperplanes are maximal proper flats and have corank one.
5. **Matroid closure is confused with topological closure.** Both are extensive, monotone, and idempotent; only matroid closure has the displayed exchange property.
6. **Contraction subtracts $|S|$.** The correct correction is $r(S)$, especially when $S$ is dependent.

## Completing the rank-to-geometry argument

### Worked example: parallel columns and the bottom flat

Over $\mathbb Q$, take labeled columns $\ell=(0,0)$, $a=(1,0)$, $a'=(2,0)$, $b=(0,1)$ and $c=(1,1)$. The full rank is two. The empty set has closure $\{\ell\}$, since the zero column is already in the span of no columns. Thus the bottom flat is not literally empty. A flat must contain every loop.

The closure of $\{a\}$ is $\{\ell,a,a'\}$, since both $a'$ and the loop are in its span, whereas $b,c$ are not. The other rank-one flats are $\{\ell,b\}$ and $\{\ell,c\}$. Any two columns from different nonloop directions span the whole space, so their closure is all five indexed elements. The complete flat list therefore consists of the bottom flat, these three rank-one flats, and $E$.

This example separates three counts: the ground set has five elements, the matroid has four nonloops, and the flat lattice has three atoms. Parallel labels count as distinct ground elements but contribute only one rank-one direction. Removing the loop and keeping one representative of $\{a,a'\}$ produces a simple rank-two matroid on three elements with the same abstract flat lattice. It does not produce the same labeled matroid, because two labels have been removed.

### Worked example: structural overlap without shared labels

Still over $\mathbb Q$, take $a=(1,0)$, $b=(0,1)$, $c=(1,1)$ and $d=(1,-1)$. Let $A=\{a,b\}$ and $B=\{c,d\}$. The two sets are disjoint, so $r(A\cap B)=0$. Both are bases of the same two-dimensional span, so $r(A)=r(B)=r(A\cup B)=2$. Their local connectivity is consequently $2+2-2=2$.

The submodularity slack is also two in this example. This is not a violation of the inequality: it measures information shared by the spans that cannot be read from the intersection of the indexed sets. In a vector space the dimension formula involves the intersection of spans, not necessarily the span of the shared columns. The latter can be strictly smaller, as it is here.

If the same array were read over characteristic two, $c$ and $d$ would be parallel and $r(B)$ would fall to one. Naming the field is therefore part of specifying the rank table. The abstract matroid calculations remain valid, but they must use the rank function of the actual represented matroid.

### Why the reconstructed rank is exactly the original function

The reconstruction in Section 3 can be made explicit at its last step. Let $I\subseteq A$ be maximal among subsets satisfying $r(I)=|I|$. If $r(I)<r(A)$, not every element of $A\setminus I$ can have zero marginal gain over $I$. Otherwise add those elements in any order. Diminishing returns keeps each gain zero after previous additions, forcing $r(A)=r(I)$, a contradiction.

Choose an element with positive gain. The gain is an integer and at most one, so $r(I+e)=r(I)+1=|I+e|$. This contradicts maximality. Hence $r(I)=r(A)$ and $|I|=r(A)$, establishing that the independent-set system reconstructed from rank really has that rank. The integrality hypothesis is used here; replacing integer rank by an arbitrary real-valued submodular function would describe a broader object.

### Covers and semimodularity of the flat lattice

**Proposition 9.1 (Covers raise rank by one).** For flats $F\subsetneq G$, the flat $G$ covers $F$ precisely when $r(G)=r(F)+1$.

**Proof.** If $G$ covers $F$, choose $e\in G\setminus F$. Since $F$ is closed, adding $e$ raises rank by one. The flat $\operatorname{cl}(F+e)$ lies between $F$ and $G$, is strictly larger than $F$, and must therefore equal $G$. Conversely suppose the ranks differ by one. A strictly intermediate flat would have rank strictly between them: a strict inclusion of flats raises rank, since any newly added element was outside the smaller flat's closure. No intermediate integer rank exists. ∎

**Proposition 9.2 (Finite atomistic semimodular geometry).** The flat lattice of a finite matroid is atomistic and upper semimodular. Here an atom covers the bottom flat, and upper semimodularity means that if $F$ covers $F\cap G$, then $F\vee G$ covers $G$.

**Proof.** The bottom flat is $L=\operatorname{cl}(\varnothing)$, the loop set. Each nonloop $e$ has $\operatorname{cl}(\{e\})$ of rank one, so the cover proposition makes it an atom. Conversely every atom has rank one and is the closure of any nonloop it contains.

Every flat $F$ is the join of the atoms $\operatorname{cl}(\{e\})$ for its nonloop members $e$. Their union contains those members, their closures lie inside $F$, and taking the closure of their union recovers all of $F$, including its loops. For $F=L$, the empty join gives the bottom. Thus the lattice is atomistic.

Suppose $F$ covers $F\cap G$. Then $r(F)=r(F\cap G)+1$, so rank submodularity gives $r(F\vee G)\le r(G)+1$. Moreover $F$ is not contained in $G$, because otherwise its meet with $G$ would be itself. Hence the join is strictly larger than $G$ and has rank at least $r(G)+1$. Equality and the cover proposition show that the join covers $G$. ∎

This proves the geometric-lattice properties asserted earlier. It also explains their exact scope. The lattice can fail to be modular, since submodularity can be strict; semimodularity is the stated one-sided cover implication. Nor does “geometric” imply that a field representation has been supplied. The proof used only finite matroid rank and closure.

### Why simplification preserves that lattice

Choose one representative from every nonloop parallel class and delete all loops, obtaining a restriction on a set $R$. For any flat $F$, the chosen representatives in $F$ span its entire nonloop part, and loops add no rank. Thus $F$ is recovered as $\operatorname{cl}_M(F\cap R)$. Conversely, if $X$ is a flat of the restriction to $R$, then $\operatorname{cl}_M(X)\cap R=X$. These two maps preserve inclusion and are inverse, giving a lattice isomorphism. Ground-set labels and parallel multiplicities are lost, but the order of closed information remains. This is the precise invariant meant by the simplification statement.

## 9. Solved exercises

<a id="rank-submodularity-flats-ex-1"></a>
### Exercise 1: submodularity slack in a triangle

In the graphic matroid of a triangle with edges $a,b,c$, let $A=\{a,b\}$ and $B=\{b,c\}$. Compute every term and the slack.


<details><summary>Hint 1</summary>

Interpret each edge set by whether it is a forest or contains the whole triangle.

</details>

<details><summary>Hint 2</summary>

The intersection has one edge, while completing the triangle does not increase rank beyond two.

</details>

<details><summary>Solution</summary>

**Solution.** Each two-edge set is a forest of rank two, so $r(A)=r(B)=2$. The intersection $\{b\}$ has rank one. The union is the full triangle, whose largest forest has two edges, so $r(A\cup B)=2$. The slack is $2+2-2-1=1$, strictly positive.

</details>

<a id="rank-submodularity-flats-ex-2"></a>
### Exercise 2: flats of $U(2,4)$

List every flat of $U(2,4)$ and identify the hyperplanes.


<details><summary>Hint 1</summary>

Use the uniform rank formula before computing closure.

</details>

<details><summary>Hint 2</summary>

Every set of size at least two has full rank and therefore spans the whole ground set.

</details>

<details><summary>Solution</summary>

**Solution.** If $|A|<2$, adding an outside element raises rank, so $\operatorname{cl}(A)=A$; thus $\varnothing$ and all four singletons are flats. Any set of size at least two has rank two, equal to full rank, so its closure is all of $E$. Therefore $E$ is the only flat of size at least two. The maximal proper flats are the singletons, each of rank one=$r(E)-1$, so they are the hyperplanes.

</details>

<a id="rank-submodularity-flats-ex-3"></a>
### Exercise 3: closure exchange

Suppose $x,y\notin \operatorname{cl}(A)$ and $y\in \operatorname{cl}(A+x)$. Prove $\operatorname{cl}(A+x)=\operatorname{cl}(A+y)$.


<details><summary>Hint 1</summary>

Apply the closure exchange law to obtain the reverse membership.

</details>

<details><summary>Hint 2</summary>

Turn each membership into a set inclusion and then use monotonicity and idempotence.

</details>

<details><summary>Solution</summary>

**Solution.** Closure exchange gives $x\in \operatorname{cl}(A+y)$. Hence $A+x\subseteq \operatorname{cl}(A+y)$, so monotonicity and idempotence yield $\operatorname{cl}(A+x)\subseteq \operatorname{cl}(A+y)$. The original membership gives $A+y\subseteq \operatorname{cl}(A+x)$, producing the reverse inclusion by the same argument. Thus the closures agree.

</details>

<a id="rank-submodularity-flats-ex-4"></a>
### Exercise 4: a contraction rank table

Let $M=U(3,5)$ and let $S$ have three elements. Determine $M/S$.


<details><summary>Hint 1</summary>

The contracted set already has full rank.

</details>

<details><summary>Hint 2</summary>

Evaluate the rank difference for an arbitrary subset of the two retained elements.

</details>

<details><summary>Solution</summary>

**Solution.** The set $S$ is a basis, so $r_M(S)=3$. For every $A\subseteq E\setminus S$, $r_M(A\cup S)=3$; therefore $r_{M/S}(A)=3-3=0$. The contraction has two ground elements and rank zero: both are loops. It is $U(0,2)$. Subtracting $|S|$ happens to agree here only because $S$ is independent.

</details>

<a id="rank-submodularity-flats-ex-5"></a>
### Exercise 5: detect an invalid rank function

On $E=\{a,b,c\}$, set $q(\varnothing )=0$, give each singleton rank one, each pair rank one, and the triple rank two. Which rank axiom fails?


<details><summary>Hint 1</summary>

Check the two overlapping pairs that share the middle element.

</details>

<details><summary>Hint 2</summary>

Their union has the assigned triple value and their intersection has the singleton value.

</details>

<details><summary>Solution</summary>

**Solution.** Bounds and monotonicity hold. Take $A=\{a,b\}$ and $B=\{b,c\}$. Then $q(A)=q(B)=1$, while $q(A\cup B)=q(E)=2$ and $q(A\cap B)=q(\{b\})=1$. Submodularity would require $2+1\le 1+1$, which is false. Therefore $q$ cannot be a matroid rank function, even though all one-step values look plausible.

</details>

<a id="rank-submodularity-flats-ex-6"></a>
### Exercise 6: recover submodularity from diminishing returns

Assume the one-element diminishing-returns inequality for a set function $r$. Derive the two-set submodular inequality by adding the elements of $A\setminus B$ in a fixed order.

<details><summary>Hint 1</summary>

Compare the additions starting at $A\cap B$ with the same additions starting at $B$.

</details>
<details><summary>Hint 2</summary>

At each step the smaller starting set remains contained in the larger one, so its marginal gain is at least as large.

</details>
<details><summary>Solution</summary>

List $A\setminus B=\{e_1,\ldots,e_t\}$. Before adding $e_i$, the set $(A\cap B)\cup\{e_1,\ldots,e_{i-1}\}$ is contained in $B\cup\{e_1,\ldots,e_{i-1}\}$, and neither contains $e_i$. Sum the diminishing-returns comparisons over $i$. The two sums telescope to $r(A)-r(A\cap B)\ge r(A\cup B)-r(B)$, which rearranges to submodularity. If $t=0$, the assertion is equality.

</details>

<a id="rank-submodularity-flats-ex-7"></a>
### Exercise 7: contract a dependent set

In $U(2,4)$ let $S$ be a three-element set. Determine the contraction and explain why subtracting $|S|$ would fail.

<details><summary>Hint 1</summary>

Compute the rank of $S$ rather than its cardinality.

</details>
<details><summary>Hint 2</summary>

Only one element remains, and the contracted set already spans full rank.

</details>
<details><summary>Solution</summary>

The set $S$ has rank two. For every $A\subseteq E\setminus S$, both $S$ and $A\cup S$ have rank two, so $r_{M/S}(A)=2-2=0$. The retained element is a loop, giving $U(0,1)$. Subtracting the cardinality three would produce the impossible value $-1$ even for the empty retained set. Contraction absorbs independent capacity, not raw element count.

</details>

<a id="rank-submodularity-flats-ex-8"></a>
### Exercise 8: a union of flats need not be a flat

Find two flats of $U(2,3)$ whose union is not a flat, and determine their join.

<details><summary>Hint 1</summary>

Individual nonloop elements are rank-one flats.

</details>
<details><summary>Hint 2</summary>

Any two elements already have full rank.

</details>
<details><summary>Solution</summary>

Let $E=\{a,b,c\}$ and take $F=\{a\}$ and $G=\{b\}$. Both are flats, but $F\cup G$ has rank two and closure $E$, so it is not closed. The lattice join is $\operatorname{cl}(F\cup G)=E$, whereas the meet is their empty intersection. This illustrates why the join formula uses closure rather than bare union.

</details>

<a id="rank-submodularity-flats-ex-9"></a>
### Exercise 9: compare two notions of intersection

Use the rational vector configuration $a,b,c,d$ in the developed example to compute $r(A\cap B)$, $\sqcap(A,B)$ and the dimension of the intersection of the two spans.

<details><summary>Hint 1</summary>

The indexed sets are disjoint, but both pairs are bases.

</details>
<details><summary>Hint 2</summary>

Both spans are the entire rational coordinate plane.

</details>
<details><summary>Solution</summary>

The set intersection is empty and has rank zero. Both $A$ and $B$ have rank two, as does their union, so local connectivity is two. Their spans coincide with $\mathbb Q^2$, whose intersection has dimension two. Thus local connectivity agrees with intersection-of-spans dimension, while rank of the shared indexed elements can be strictly smaller.

</details>

<a id="rank-submodularity-flats-ex-10"></a>
### Exercise 10: nullity is supermodular

Derive nullity supermodularity from rank submodularity and compute its slack for two overlapping two-edge paths in a triangle.

<details><summary>Hint 1</summary>

Expand every nullity as cardinality minus rank.

</details>
<details><summary>Hint 2</summary>

The cardinality terms cancel because cardinality is modular.

</details>
<details><summary>Solution</summary>

The difference $\eta(A\cup B)+\eta(A\cap B)-\eta(A)-\eta(B)$ equals $r(A)+r(B)-r(A\cup B)-r(A\cap B)$ after cancelling cardinalities. This is nonnegative by submodularity. For $A=\{a,b\}$ and $B=\{b,c\}$ in a triangle, the separate paths and the intersection have nullity zero, while their union has nullity one. The nullity inequality is therefore strict with slack one.

</details>

## Chapter summary

Matroid rank counts a basis of each restriction. Its bounds, monotonicity, and submodularity are both consequences and a complete cryptomorphic axiom system. Submodularity becomes diminishing returns for one-element additions. Zero gain defines closure, whose exchange law distinguishes matroid span from a generic closure operator. Closed sets form a semimodular lattice; maximal proper flats are hyperplanes, and their complements are cocircuits. Restriction preserves rank locally, while contraction subtracts the rank already absorbed. Exact rank ledgers are valuable only after the matroid axioms have been audited.


<a id="rank-submodularity-flats-summary"></a>
## Summary

Rank gives a numerical description of independence; diminishing returns makes rank-neutral additions into a closure operator with exchange. The added examples distinguish labeled overlap from overlap of spans and show how loops and parallel classes affect flats. Cover ranks prove semimodularity, while rank-one closures prove atomisticity. These results justify the geometric-lattice description without assuming coordinates or silently imposing simplicity.

