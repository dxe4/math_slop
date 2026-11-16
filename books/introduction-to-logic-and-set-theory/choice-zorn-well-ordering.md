
# Choice, Zorn's Lemma and Well-Ordering

Many existence arguments require selecting one object from each of a family of nonempty sets. A finite succession of existential choices is a theorem of ordinary logic. A simultaneous selection over an arbitrary set-indexed family is an additional principle. This chapter states that principle precisely and proves its equivalence with two forms used throughout mathematics: maximal elements in suitable partial orders, and well-orders of arbitrary sets.

Our base is ZF with classical logic. The theorems in the previous two chapters, including set-length transfinite recursion and Hartogs' nonembedding bound, were proved without Choice. They will now be used to establish the equivalences. In particular the proof of Zorn's lemma must not begin by well-ordering the very set whose well-orderability is one of the equivalent conclusions.

## What the three principles say

**Principle 10.1 (Axiom of Choice, AC).** For every family $(A_i)_{i\in I}$ of nonempty sets indexed by a set $I$, there exists a function $c$ on $I$ satisfying $c(i)\in A_i$ for every $i$.

The family itself is supplied as a set function. Repeated members are allowed, and different indices may receive the same chosen element. If $I$ is empty, the empty function is a choice function. An equivalent form says that every set $S$ of nonempty sets has a function choosing an element of each member: apply the indexed version with index set $S$, or apply that set version to the image of an indexed family and compose.

A partial order $(P,\le)$ is reflexive, transitive and antisymmetric. Write $x<y$ when $x\le y$ and $x\ne y$. A chain is a subset whose elements are pairwise comparable. An upper bound of a chain belongs to $P$ and is at least every chain element; it need not belong to the chain. A maximal element $m$ has no strictly larger element. A greatest element is at least every element of $P$; a maximal element need not have that stronger property.

**Principle 10.2 (Zorn's lemma).** If $P$ is a nonempty partially ordered set and every chain has an upper bound in $P$, then $P$ has a maximal element.

We include the empty chain. Its upper-bound requirement is automatic from nonemptiness of $P$, since every element bounds the empty subset. Stating nonemptiness separately prevents an empty poset from satisfying a vacuous version of the hypothesis but failing the conclusion.

**Principle 10.3 (Well-ordering).** Every set admits a well-order.

A well-order is extra structure, not necessarily a familiar order already on the set. The usual order on the real numbers is not a well-order. The principle says another order exists, without supplying a convenient expression for it. The empty set has its empty well-order, so there is no exceptional case there.

**Worked example 10.4 (Maximal need not mean greatest).** In the poset of proper subsets of $\{a,b\}$ ordered by inclusion, both singletons are maximal: adding the other point leaves the poset. Neither is greatest, because neither contains the other. Every chain has an upper bound: a nonempty chain has a largest member in this finite example, and the empty chain has any proper subset as upper bound. Zorn's conclusion is therefore true, but it does not identify a preferred singleton. The distinction matters when maximal ideals or bases are nonunique.

## From Choice to Zorn: a bounded recursive proof

**Theorem 10.5.** AC implies Zorn's lemma over ZF.

*Proof.* Let $P$ satisfy Zorn's hypotheses. Assume, for a contradiction, that it has no maximal element. By AC applied to the set of all nonempty subsets of $P$, fix a function $c$ choosing an element from each such subset. Also fix $p_0\in P$. Hartogs' theorem supplies an ordinal $\eta$ for which no injection $\eta\to P$ exists.

For an ordinal-domain function $h$ define
$$U_h=\{p\in P:\forall\beta\in\operatorname{dom}(h)\ h(\beta)<p\}$$
when $h$ takes values in $P$ and is strictly increasing. Define the recursive rule to return $c(U_h)$ when these conditions hold and $U_h$ is nonempty, and to return $p_0$ otherwise. This is a total, uniquely specified set-valued rule on ordinal-domain histories, so transfinite recursion gives $f$ with domain $\eta$.

We claim that $f$ is strictly increasing and never uses the default clause. Suppose its restriction to a stage $\alpha$ is strictly increasing with values in $P$. Its range is a chain, including the empty range when $\alpha=0$. By hypothesis there is an upper bound $u\in P$ for that chain. Since there is no maximal element, some $v\in P$ satisfies $u<v$. For every earlier value $f(\beta)$, transitivity gives $f(\beta)<v$: equality with $v$ is impossible because $f(\beta)\le u<v$. Thus $v\in U_{f\upharpoonright\alpha}$, making that set nonempty. The chosen output belongs to $P$ and is strictly above every earlier value. Transfinite induction proves the claim at every stage below $\eta$.

Consequently $f$ is an injection from $\eta$ into $P$, contradicting Hartogs' bound. The assumption of no maximal element was false. ∎

Every choice in this proof is accounted for. AC supplies one function on all nonempty subsets of $P$. We do not separately choose an upper bound for each chain and then choose a larger point for each bound. Those witnesses show a specified candidate set is nonempty; the already fixed choice function selects its actual output. Hartogs supplies a set-sized length at which indefinite strict growth is impossible. No proper-class recursion or mysterious termination assertion is needed.

The absence of maximal elements is used after taking an upper bound. A chain might itself have no largest element, and merely being above all its elements need not be strictly above them. Moving from the upper bound $u$ to $v>u$ is the step that guarantees strictness, including when $u$ happens to belong to the chain.

## From Zorn to a well-order

**Theorem 10.6.** Zorn's lemma implies that every set can be well-ordered.

*Proof.* Fix a set $A$. Consider pairs $(B,\prec)$ where $B\subseteq A$ and $\prec$ well-orders $B$. These pairs form a set: relations lie in $\mathcal P(A\times A)$, and domains lie in $\mathcal P(A)$. Order the pairs by end-extension: $(B,\prec)$ is below $(C,\triangleleft)$ when $B$ is an initial segment of $C$ and the latter order restricts to the former on $B$. In particular every new point of $C\setminus B$ lies after every point of $B$. This is a partial order. The empty well-order is a member.

Take any chain of these ordered sets. Union their domains and their relations. The union relation is a strict linear order: any finitely many points and comparisons under consideration occur together in one sufficiently large chain member, where the required order law holds. To prove it is a well-order, let $S$ be a nonempty subset of the union domain. Pick $s\in S$ and one chain member $B$ containing it. The nonempty set $S\cap B$ has a least point $m$ in that member. Any point of $S$ not in $B$ occurs in a later end-extension and is larger than every point of $B$, hence larger than $m$. Points in $B$ are already at least $m$. Therefore $m$ is least in all of $S$.

The union well-order end-extends each chain member, so it is an upper bound. For the empty chain the empty well-order is an upper bound. Zorn gives a maximal pair $(B,\prec)$. If $a\in A\setminus B$, append $a$ as a new last point. This is a well-order on $B\cup\{a\}$ and properly end-extends the old one, contradicting maximality. Thus $B=A$, as required. ∎

End-extension is essential. A chain of orders that merely agree on common points can add new predecessors forever and acquire no least point. For example, the finite sets $\{-n,\ldots,0\}$ with their usual orders form a chain under ordinary extension; their union has no least element. They are not end-extensions, because each new negative point appears before old points. The upper-bound proof above prevents exactly this failure.

**Worked example 10.7 (Checking the union argument).** Suppose one partial well-order lists $a,b$, and a later one lists $a,b,c,d$. A third may list $a,b,c,d,e$. Their union preserves the first block as an initial segment. If a subset contains $b$ and also points added later, its least point is found among the points of that subset already present in the $a,b$ stage. Later additions cannot move in front of it. This local least-point argument works even for an infinite chain with no final member; it does not require selecting one “largest” stage from the whole chain.

## From a well-order to Choice

**Theorem 10.8.** The well-ordering principle implies AC.

*Proof.* Given a set-indexed family of nonempty sets $(A_i)_{i\in I}$, its union $U$ exists by Replacement and Union. Well-order $U$. For each $i$, the subset $A_i$ has a unique least element in that order. Replacement on $I$ collects the ordered pairs assigning that element to its index, producing a choice function. For an empty index set use the empty function, with no least-element query required. ∎

Combining the three implications proves equivalence over ZF. Adding any one principle yields the same set-theoretic theory, conventionally called ZFC. A use of Zorn is therefore a use of Choice in an equivalent form. This does not mean every conclusion obtained with it requires the full strength of Choice: a particular theorem might admit a weaker or entirely choice-free proof.

Under AC every set has an initial-ordinal cardinal representative. Cardinal comparison becomes linear, and the infinite product laws from the preceding chapter apply to arbitrary infinite sets after transferring their well-orders. These consequences should not be inserted retroactively into the ZF arguments as unstated assumptions.

## A complete maximality application

**Worked example 10.9 (Existence of a vector-space basis).** Let $V$ be a vector space over a field $K$. Assume AC. Order the set of linearly independent subsets of $V$ by inclusion. It is a set by Power Set and Separation, and it is nonempty because it contains the empty set. For a chain of independent subsets, their union is independent: any finite proposed dependence uses finitely many vectors, all contained in one chain member, and independence there makes every coefficient zero. The empty chain has the empty independent set as an upper bound.

Zorn supplies a maximal independent subset $B$. If a vector $v$ were outside its span, then $B\cup\{v\}$ would remain independent. Indeed a dependence with coefficient of $v$ equal to zero is a dependence in $B$; if that coefficient is nonzero, solving for $v$ puts it in the span of finitely many elements of $B$, a contradiction. Thus maximality forces $B$ to span $V$, and it is a basis. This establishes existence, not uniqueness or an algorithm for choosing a basis. The finite-support argument is the full justification of the chain upper-bound condition.

The same pattern requires fresh verification in another application. One must name a set-sized poset, show nonemptiness, prove its chain upper bounds stay in that poset, and show maximality forces the desired property. Omitting the upper-bound verification is not a harmless abbreviation when unions can destroy the property under consideration.

## Exercises

<a id="choice-zorn-well-ordering-ex1"></a>
**Exercise 10.1.** Prove in ZF that a finite family of nonempty sets has a choice function. Explain why this is not a proof of AC.

<details>
<summary>Hint 1</summary>

Induct on the number of indices.

</details>
<details>
<summary>Hint 2</summary>

Adjoin one chosen pair to an existing finite function.

</details>
<details>
<summary>Solution</summary>

The empty family has the empty choice function. Suppose a choice function exists for a family on $n$ indices, and add one new index $i$ with nonempty set $A_i$. Choose one witness $a\in A_i$ by existential instantiation, and adjoin $(i,a)$ to the existing function. This gives the next finite case, and induction proves the assertion for every natural number. No one function for an arbitrary infinite family is produced by these separate finite assertions. Passing from “every finite restriction has some choice function” to “the whole family has one” requires an additional argument, not another finite induction step.

</details>

<a id="choice-zorn-well-ordering-ex2"></a>
**Exercise 10.2.** Give a poset with a maximal element that has no greatest element, and verify both claims.

<details>
<summary>Hint 1</summary>

Use two different incomparable points.

</details>
<details>
<summary>Hint 2</summary>

The equality relation is a partial order.

</details>
<details>
<summary>Solution</summary>

Take $P=\{a,b\}$ with $a\ne b$ and define $x\le y$ exactly when $x=y$. Reflexivity, transitivity and antisymmetry follow from equality. Neither point has a strictly larger point, so both are maximal. A greatest point would have to be at least both, which in this order would force it equal to both $a$ and $b$, impossible. Every nonempty chain is a singleton and has its own element as upper bound; the empty chain is bounded by either point. Thus the example also satisfies Zorn's hypotheses and illustrates precisely the weaker conclusion it supplies.

</details>

<a id="choice-zorn-well-ordering-ex3"></a>
**Exercise 10.3.** Locate the two different hypotheses used to prove the candidate set $U_h$ nonempty in Theorem 10.5.

<details>
<summary>Hint 1</summary>

First bound the existing chain.

</details>
<details>
<summary>Hint 2</summary>

Then move strictly beyond the bound.

</details>
<details>
<summary>Solution</summary>

The induction invariant makes the range of $h$ a chain. Zorn's upper-bound hypothesis gives $u$ with $h(\beta)\le u$ at every earlier index. The temporary assumption that no maximal element exists gives $v>u$. Transitivity yields $h(\beta)<v$, so $v\in U_h$. Without the first hypothesis there might be no common bound. Without the second, $u$ might be a last element of the chain and no strict upper bound would exist. The proof does not need a simultaneous choice of these witnesses because it uses them only to establish that the already defined choice function has a nonempty input set.

</details>

<a id="choice-zorn-well-ordering-ex4"></a>
**Exercise 10.4.** Explain why the default clause in the recursive proof is necessary even though it is never used by the constructed sequence.

<details>
<summary>Hint 1</summary>

The recursion theorem applies before the increasing invariant is proved.

</details>
<details>
<summary>Hint 2</summary>

Some possible input histories are not increasing chains.

</details>
<details>
<summary>Solution</summary>

The general recursion theorem assumes a unique output for every ordinal-domain history. A history may contain points outside $P$, fail to increase, or have no strict upper candidate. The rule $c(U_h)$ alone would then be undefined. Assigning $p_0$ in all such cases supplies a total functional rule and permits the recursion theorem to be applied. A separate induction proves that the actual solution always has an increasing history and nonempty candidate set, so the default is never reached. Inferring totality from an invariant of an as-yet unconstructed sequence would reverse the logical order of the existence argument.

</details>

<a id="choice-zorn-well-ordering-ex5"></a>
**Exercise 10.5.** Show by an example that a union of a chain of ordinary extensions of well-orders need not be a well-order.

<details>
<summary>Hint 1</summary>

Add one predecessor at each finite stage.

</details>
<details>
<summary>Hint 2</summary>

Use the usual orders on the finite sets $\{-n,\ldots,0\}$.

</details>
<details>
<summary>Solution</summary>

For each natural number $n$, the usual order on $B_n=\{-n,\ldots,0\}$ is a finite well-order. The orders agree on overlaps and extend one another as relations. Their union is the usual order on the nonpositive integers. This has no least element: for any $-n$ the point $-(n+1)$ is smaller. Hence the union is not a well-order. The family fails the stronger end-extension requirement, because each larger domain adds a point before the previous first point. Theorem 10.6 uses that stronger order on its poset, so the example does not contradict its upper-bound proof.

</details>

<a id="choice-zorn-well-ordering-ex6"></a>
**Exercise 10.6.** Explain why all partial well-orders of subsets of a fixed set form a set, whereas all well-orders on all sets do not provide the same bounded construction.

<details>
<summary>Hint 1</summary>

Relations on subsets of $A$ are subsets of $A\times A$.

</details>
<details>
<summary>Hint 2</summary>

Retain the domain to distinguish the empty relation on different singleton domains.

</details>
<details>
<summary>Solution</summary>

Every candidate is a pair $(B,R)$ with $B\in\mathcal P(A)$ and $R\in\mathcal P(A\times A)$. Their product is a set, and Separation selects the pairs satisfying the well-order conditions on $B$. Retaining $B$ avoids losing domain information when a strict order has no ordered pairs. Thus Zorn is applied to a genuine set-sized poset. Allowing arbitrary domains would remove this bounding product; in particular the resulting collection would include orders of every ordinal type. The absence of a set of all ordinals rules out treating all those types as one set-sized input.

</details>

<a id="choice-zorn-well-ordering-ex7"></a>
**Exercise 10.7.** Prove that a union of a chain of independent vector subsets is independent, including the empty chain.

<details>
<summary>Hint 1</summary>

A linear dependence uses only finitely many vectors.

</details>
<details>
<summary>Hint 2</summary>

Among finitely many members of an inclusion chain, one contains all the others.

</details>
<details>
<summary>Solution</summary>

For a nonempty chain, take any finite linear combination of distinct vectors from its union equal to zero. Each vector occurs in some member. Among these finitely many members choose an inclusion-largest one by repeatedly comparing two; it contains every vector in the combination. Independence in that member forces all coefficients zero. Therefore the union is independent. For the empty chain, the union is empty and is independent because it admits no nontrivial finite linear combination. This verifies an upper bound inside the same poset; merely knowing that a union of subsets is a subset of $V$ would not establish independence.

</details>

<a id="choice-zorn-well-ordering-ex8"></a>
**Exercise 10.8.** Given a well-order of $\bigcup_i A_i$, construct a choice function and explain why no further Choice is used.

<details>
<summary>Hint 1</summary>

Take the least member of each nonempty $A_i$.

</details>
<details>
<summary>Hint 2</summary>

Uniqueness makes the assignment functional for Replacement.

</details>
<details>
<summary>Solution</summary>

Each $A_i$ is a nonempty subset of the supplied well-ordered union, so it has exactly one least element $a_i$. The formula defining $a_i$ from $i$, the family and the order is functional. Replacement on the index set gives the graph $\{(i,a_i):i\in I\}$, and $a_i\in A_i$ verifies the choice condition. Nothing is selected arbitrarily among several equally acceptable outputs: leastness uniquely specifies one. If the index set is empty, the graph is the empty function. The additional principle was the existence of the well-order, not the subsequent uniquely defined selection.

</details>

<a id="choice-zorn-well-ordering-ex9"></a>
**Exercise 10.9.** Show that comparability by injections for every pair of sets implies the well-ordering principle.

<details>
<summary>Hint 1</summary>

Compare $A$ with its Hartogs number.

</details>
<details>
<summary>Hint 2</summary>

An injection into an ordinal transports a well-order to its domain.

</details>
<details>
<summary>Solution</summary>

For any set $A$, Hartogs gives an ordinal $h(A)$ that does not inject into $A$. Universal comparability therefore forces an injection $A\to h(A)$. Its image inherits the ordinal well-order, and pulling that order back along the injection well-orders $A$. This proves the well-ordering principle, hence AC by Theorem 10.8. Conversely AC well-orders both sets and their initial-ordinal representatives are comparable, giving injection comparability. Thus the familiar claim that any two cardinal sizes can be compared is a choice principle for arbitrary sets, rather than a consequence of the notation $|A|\le|B|$ alone.

</details>

<a id="choice-zorn-well-ordering-ex10"></a>
**Exercise 10.10.** A proposed Zorn argument uses finite subsets of an infinite set, ordered by inclusion. Identify the failed hypothesis and the missing conclusion.

<details>
<summary>Hint 1</summary>

Build a chain of larger and larger finite subsets of $\omega$.

</details>
<details>
<summary>Hint 2</summary>

The natural upper bound is not in the poset.

</details>
<details>
<summary>Solution</summary>

Take finite subsets of $\omega$ and the chain $F_n=\{0,\ldots,n\}$. Any upper bound by inclusion would contain every natural number and hence would be infinite, so it is not a member of this poset. Therefore the chain-upper-bound hypothesis fails. There is also no maximal finite subset, because adjoining a missing natural number strictly enlarges any finite subset. The absence of a maximal element is consistent with Zorn because its hypothesis is unmet. Saying “take the union of the chain” does not repair the proof: the union exists as a set, but it lies outside the designated finite-subset poset.

</details>

## Summary

Choice, Zorn's lemma and the well-ordering principle are equivalent over ZF. The proof from Choice uses a single selection function, totalised recursion and Hartogs' bound. The reverse maximality construction uses end-extension so that chain unions remain well-orders. A well-order then supplies uniquely determined least-element choices. Applications require a set-sized nonempty poset and upper bounds that preserve its defining property; maximality alone is neither uniqueness nor an algorithm.

## Sources and further reading

This is new exposition with complete equivalence proofs. Herbert B. Enderton, *Elements of Set Theory*, is the benchmark. Martin Bays, [*B1.2 Set Theory*](https://people.maths.ox.ac.uk/~bays/teaching/b1set/B1.2.pdf), provides an author's treatment of Choice and cardinal consequences. The preserved [Logic Foundations reference](#/books/logic-foundations-proof-reference) supplies the original motivation for separating ZF from ZFC. No exercise completion or mathematical review status is inferred from the existence of this chapter.
