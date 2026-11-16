
# Cardinals and Cardinal Arithmetic {#section-1-cardinals-and-cardinal-arithmetic}

An order remembers where an element stands; a cardinal comparison remembers only whether distinct elements can be matched. The infinite orders $\omega$ and $\omega+1$ are different, but a bijection identifies their sizes. This chapter studies those matches, the diagonal obstruction that creates strictly larger sizes, and the arithmetic of well-orderable infinite sets.

The background is ZF. Until Choice is introduced in the next chapter, an arbitrary set need not have an ordinal that measures its size. We therefore write $|A|\le |B|$ as an abbreviation for the existence of an injection $A\to B$, and $|A|=|B|$ for a bijection. These expressions do not assume a set of all equivalent sets or a chosen representative of each equivalence class. Write $|A|<|B|$ when there is an injection in the first direction but no bijection. Cantor–Bernstein, proved in [Introduction to Proof](#/books/introduction-to-proof), ensures that injections in both directions give equality, without Choice.

<a id="section-5-comparisons-that-do-not-require-choice"></a>
## Comparisons that do not require Choice {#section-7-comparisons-that-do-not-require-choice}

An injection distinguishes inputs; a surjection covers outputs. A bijection does both. An injection $i:A\to B$ identifies $A$ with the subset $i[A]$ of $B$. Its inverse is uniquely determined on that image and therefore needs no choice of representatives. By contrast, selecting one preimage under a general surjection is a family of choices and cannot be silently assumed in ZF.

If $A$ is nonempty and injects into $B$, there is a surjection $B\to A$: invert the injection on its image and send all remaining points to one fixed $a_0\in A$. This uses one witness, not a choice function for an arbitrary family. The empty-set qualification matters, since there is no function from a nonempty set onto the empty set.

Cardinal addition is represented by disjoint union, using tags so that overlapping input sets cause no identification. Cardinal multiplication is represented by Cartesian product. Exponentiation $|B|^{|A|}$ is represented by the set of functions $A\to B$. These operations on represented sizes make sense in ZF. The laws that collapse infinite sums and products to the larger operand need additional well-orderability hypotheses here.

**Theorem 9.1 (Cantor).** For every set $A$, there is an injection $A\to\mathcal P(A)$ but no surjection $A\to\mathcal P(A)$. In particular $|A|<|\mathcal P(A)|$.

*Proof.* The map $a\mapsto\{a\}$ is injective. Suppose $f:A\to\mathcal P(A)$ is surjective. Separation gives
$$D=\{a\in A:a\notin f(a)\}.$$
Since $D\subseteq A$, it is an element of the power set. Surjectivity supplies $d\in A$ with $f(d)=D$. The definition then gives $d\in D$ if and only if $d\notin D$, a contradiction. Thus no surjection exists, and in particular no bijection exists. This also covers $A=\varnothing$: a surjection would have to hit the existing subset $\varnothing$ with an input that does not exist. ∎

The proof does not claim that $D$ lies outside the power set. It lies outside the range of the proposed enumeration. Nor does it require deciding membership computationally. It is a set-theoretic definition with a parameter $f$. The contradiction appears only after assuming that this particular $f$ lists every subset.

**Worked example 9.2 (Binary sequences are uncountable).** Identify a function $s:\omega\to\{0,1\}$ with the subset $\{n:s(n)=1\}$; the reverse map is the characteristic function. This is a bijection between binary sequences and $\mathcal P(\omega)$. If $s_0,s_1,\ldots$ listed every sequence, the sequence $d(n)=1-s_n(n)$ would disagree with the $n$th listed sequence at coordinate $n$. Thus no such list exists. Binary sequences have no ambiguity from alternative decimal expansions: the argument concerns functions, not positional representations of real numbers.

<a id="section-23-countable-products-and-specified-enumerations"></a>
## Countable products and specified enumerations {#section-25-countable-products-and-specified-enumerations}

We call a set at most countable if it injects into $\omega$, and countably infinite if it is bijective with $\omega$. A subset of $\omega$ can be enumerated increasingly when infinite: recursively choose its least unused element. Leastness supplies the unique selection, so no Choice is hidden in this construction. Consequently an infinite at-most-countable set is countably infinite by transporting that order through an injection.

**Worked example 9.3 (A pairing function).** For $a,b\in\omega$, put
$$\pi(a,b)=\frac{(a+b)(a+b+1)}2+b.$$
For fixed $s=a+b$, the values are the consecutive integers from $s(s+1)/2$ through $s(s+1)/2+s$. The next block begins at $(s+1)(s+2)/2$, exactly one larger than the previous block's last value. These disjoint consecutive blocks start at zero and cover $\omega$. Each integer therefore determines one block $s$, then one $b$, then $a=s-b$. This proves bijectivity, not merely injectivity. The diagonal arrangement gives a concrete enumeration of pairs of natural numbers.

Suppose a sequence of sets $A_n$ is supplied together with injections $i_n:A_n\to\omega$. Their union is at most countable: for each element $x$ choose its least membership index $n(x)$, and map it to $\pi(n(x),i_{n(x)}(x))$. Equality of codes forces equality of indices and then equality of elements. The supplied family of injections is essential. The statement that every countable union of countable sets is countable is not available in bare ZF without a suitable additional choice principle. A proof that says “choose an enumeration of each set” has supplied exactly that missing step.

The rational numbers give a safe concrete application. Map an integer numerator to a natural-number code, keep a positive denominator, enumerate such pairs, and map each pair to its quotient. Repeated fractions are removed by least occurrence. No separate enumeration must be chosen for infinitely many unrelated sets: the one explicit coding already enumerates all rational descriptions.

<a id="section-35-initial-ordinals-and-well-orderable-cardinals"></a>
## Initial ordinals and well-orderable cardinals {#section-37-initial-ordinals-and-well-orderable-cardinals}

If a set admits a well-order, the previous chapter gives it an ordinal type. Among ordinals equinumerous with it there is a least one: start with any one witness ordinal and choose the least suitable ordinal in its successor. An ordinal not equinumerous with any smaller ordinal is called an initial ordinal or a well-orderable cardinal. Each well-orderable set has exactly one such representative. We identify its cardinal with that ordinal.

Finite initial ordinals are the finite ordinals. The first infinite initial ordinal is $\omega$, also written $\aleph_0$. The next initial ordinal is $\aleph_1$, and so on along ordinal indices. The existence of a larger initial ordinal will follow from Hartogs' theorem below. These symbols do not yet assert that every set is well-orderable. In particular the notation $2^{\aleph_0}$ denotes the size of a power set; identifying it with an initial ordinal requires knowing that power set is well-orderable.

For well-orderable cardinals, comparison is linear because their representatives are ordinals. If $\kappa<\lambda$ are initial ordinals, the inclusion is an injection and no bijection exists by initiality. This is a theorem for those sets; comparison of arbitrary sets is equivalent to Choice and belongs to the next chapter.

**Theorem 9.4 (Infinite well-ordered products).** Every infinite initial ordinal $\kappa$ satisfies $|\kappa\times\kappa|=\kappa$ in ZF.

*Proof.* Proceed by induction over infinite initial ordinals. Well-order the pairs $(\alpha,\beta)$ first by $\max(\alpha,\beta)$, then lexicographically among pairs with that maximum. This is a well-order: choose the least occurring maximum in a nonempty set of pairs, then the least first coordinate and the least second coordinate in that block.

The predecessors of a pair of maximum $\gamma<\kappa$ are contained in $(\gamma+1)\times(\gamma+1)$. The ordinal $\gamma+1$ has a cardinal $\mu<\kappa$ because $\kappa$ is initial. If $\mu$ is finite, that square is finite. If it is infinite, the induction hypothesis gives its square cardinal $\mu$. Either way each predecessor segment has cardinal strictly less than $\kappa$.

Let $\tau$ be the ordinal type of the pair order. If $\tau>\kappa$, the point at position $\kappa$ would have a predecessor segment of cardinal $\kappa$, contradicting the previous paragraph. Thus $\tau\le\kappa$, giving an injection $\kappa^2\to\kappa$. Conversely $\alpha\mapsto(\alpha,0)$ injects $\kappa$ into its square. Cantor–Bernstein gives equality. The induction is legitimate because any failure among initial ordinals has a least failure by the bounded-counterexample argument for ordinal induction. ∎

**Worked example 9.5 (Sums versus ordinal sums).** For infinite well-orderable $A,B$ of cardinals $\kappa\le\lambda$, inject their tagged union into $\lambda\times\{0,1\}\subseteq\lambda\times\lambda$, and inject their product into $\lambda\times\lambda$. The theorem bounds both above by $\lambda$, while a copy of $B$ bounds each below when $A$ is nonempty. Thus their cardinal sum and product are $\lambda$. In particular $\aleph_0+\aleph_0=\aleph_0$. This is compatible with the ordinal inequality $\omega+\omega>\omega$: the left-hand side now describes the size of tagged sets, not the order of two successive infinite blocks.

<a id="section-53-hartogs-bound-without-a-well-order-of-the-input"></a>
## Hartogs' bound without a well-order of the input {#section-55-hartogs-bound-without-a-well-order-of-the-input}

**Theorem 9.6 (Hartogs).** For every set $A$ there is an ordinal that does not inject into $A$.

*Proof.* All binary relations on subsets of $A$ can be represented by subsets of $A\times A$, together with their domains. Power Set and Separation therefore collect the set of all well-orders on subsets of $A$, including the empty order. Each has a unique ordinal type by the well-order type theorem. Replacement collects those types into a set $T$ of ordinals. Replacement and Union then form
$$\eta=\bigcup\{\alpha+1:\alpha\in T\}.$$
For each $\alpha\in T$, $\alpha<\eta$, since $\alpha+1\subseteq\eta$. If $\eta$ injected into $A$, its image would inherit a well-order of type $\eta$, putting $\eta$ itself in $T$. The preceding strict inequality would give $\eta<\eta$, impossible. Thus it does not inject. The least noninjecting ordinal exists by taking the least such ordinal in $\eta+1$; it is often called the Hartogs number of $A$. ∎

Representing an empty well-order requires retaining its domain in the coding, but this is routine set coding, not a choice of one order for each subset. The collection contains all available well-orders. Their order types are uniquely determined, so Replacement applies without Choice. Hartogs' theorem does not well-order $A$; it produces a well-ordered size that cannot fit inside it.

For an ordinal $\alpha$, its Hartogs number is an initial ordinal larger than its cardinal. If the least noninjecting ordinal were bijective with a smaller ordinal, that smaller ordinal would inject into $\alpha$ by minimality, and composition would give the forbidden injection. This proves existence of successive well-orderable cardinals. The distinction between a bound on embeddings and a well-ordering of the original arbitrary set will power the choice proof next.

<a id="section-65-exercises"></a>
## Exercises {#section-67-exercises}

<a id="cardinals-cardinal-arithmetic-ex1"></a>
**Exercise 9.1.** Prove that no set has the same cardinal as its power set, including the empty set.

<details>
<summary>Hint 1</summary>

A bijection would in particular be a surjection.

</details>
<details>
<summary>Hint 2</summary>

Use the subset that disagrees with the proposed enumeration at each input.

</details>
<details>
<summary>Solution</summary>

Given a proposed bijection $f:A\to\mathcal P(A)$, Separation gives $D=\{a\in A:a\notin f(a)\}$. Surjectivity supplies $d$ with $f(d)=D$, and substitution yields $d\in D\leftrightarrow d\notin D$, contradiction. For $A=\varnothing$, its power set is $\{\varnothing\}$ and no input can hit that element, so surjectivity already fails. This proves non-equality of size rather than a failure of Power Set. The singleton map supplies the forward injection, establishing strict increase in the injection comparison used here.

</details>

<a id="cardinals-cardinal-arithmetic-ex2"></a>
**Exercise 9.2.** Construct a bijection between subsets of $A$ and functions $A\to\{0,1\}$, and check the empty case.

<details>
<summary>Hint 1</summary>

Assign value one exactly on the subset.

</details>
<details>
<summary>Hint 2</summary>

Recover a subset by taking the inverse image of one.

</details>
<details>
<summary>Solution</summary>

Map $S\subseteq A$ to its characteristic function $\chi_S$, defined as one on $S$ and zero on $A\setminus S$. Separation and elementary function coding provide its graph. Map a function $f:A\to\{0,1\}$ back to $\{a\in A:f(a)=1\}$. These constructions are inverse pointwise, so they give a bijection. If $A$ is empty, the only subset is empty and the only function is the empty function; both collections are singletons. Thus the interpretation of exponentiation gives $2^0=1$, not zero, and the construction requires no choices among possible values.

</details>

<a id="cardinals-cardinal-arithmetic-ex3"></a>
**Exercise 9.3.** Enumerate $\mathbb Z\times\omega$ by a concrete natural-number coding.

<details>
<summary>Hint 1</summary>

Code nonnegative integers by even numbers and negative integers by odd numbers.

</details>
<details>
<summary>Hint 2</summary>

Compose that bijection with the pairing function.

</details>
<details>
<summary>Solution</summary>

Define $j(z)=2z$ for $z\ge0$, and $j(z)=-2z-1$ for $z<0$. Each even natural number has one nonnegative preimage and each odd natural number has one negative preimage, so $j$ is bijective. Then $(z,n)\mapsto\pi(j(z),n)$ is a bijection from $\mathbb Z\times\omega$ to $\omega$, because both its component coding and the pairing function have unique inverses. This is an explicit enumeration; there is no need to choose an enumeration separately for each vertical copy of the integers. An unproved assertion that the grid “can be listed diagonally” is replaced by a recoverable code.

</details>

<a id="cardinals-cardinal-arithmetic-ex4"></a>
**Exercise 9.4.** Given injections $i_n:A_n\to\omega$ as one supplied sequence, prove their union is at most countable, allowing overlaps between the sets.

<details>
<summary>Hint 1</summary>

An element may occur in several sets; choose its least occurrence index.

</details>
<details>
<summary>Hint 2</summary>

Code the occurrence index together with its image under that injection.

</details>
<details>
<summary>Solution</summary>

For $x$ in the union, the nonempty subset $\{n:x\in A_n\}$ of $\omega$ has a unique least element $n(x)$. Send $x$ to $\pi(n(x),i_{n(x)}(x))$. If two elements have the same code, the pairing function gives the same least index $n$ and the same injection value. Injectivity of $i_n$ then gives equality of the elements. Therefore the union injects into $\omega$. Overlaps cause no problem because the least index is canonical. Without a supplied sequence of injections, selecting such a sequence would be an additional choice step, not something proved by this argument.

</details>

<a id="cardinals-cardinal-arithmetic-ex5"></a>
**Exercise 9.5.** Explain why a surjection $B\to A$ does not immediately supply an injection $A\to B$ in ZF.

<details>
<summary>Hint 1</summary>

For each $a$, consider its nonempty fibre.

</details>
<details>
<summary>Hint 2</summary>

Choosing one member from every fibre is a family of choices.

</details>
<details>
<summary>Solution</summary>

A surjection $p$ makes each fibre $p^{-1}[\{a\}]$ nonempty. To define a right inverse, one would select a point from each fibre, and different fibres would automatically give different selected points. But the existence of all those nonempty fibres does not itself provide a simultaneous selection function in ZF. If $B$ is supplied with a well-order, least elements make the selection uniquely definable and the argument succeeds. For arbitrary $B$, asserting such right inverses for every surjection is a choice principle. The invalid step is the unexplained simultaneous selection, not the final injectivity argument.

</details>

<a id="cardinals-cardinal-arithmetic-ex6"></a>
**Exercise 9.6.** Show that an infinite initial ordinal cannot be a successor ordinal.

<details>
<summary>Hint 1</summary>

For any infinite ordinal $\alpha$, shift its finite initial segment to absorb one extra point.

</details>
<details>
<summary>Hint 2</summary>

Map the added last point to zero, each finite $n$ to $n+1$, and all points at least $\omega$ to themselves.

</details>
<details>
<summary>Solution</summary>

For infinite $\alpha$, the displayed rule defines a bijection $\alpha+1\to\alpha$: the last point maps to zero; the finite ordinals map bijectively onto the positive finite ordinals; every ordinal in $[\omega,\alpha)$ is fixed. These ranges are disjoint and exhaust $\alpha$. If an infinite initial ordinal were $\alpha+1$ with infinite $\alpha$, that bijection would contradict initiality. If $\alpha$ were finite, its successor would also be finite, contrary to the hypothesis. Hence every infinite initial ordinal is a limit ordinal. The argument concerns cardinality and is not an order isomorphism.

</details>

<a id="cardinals-cardinal-arithmetic-ex7"></a>
**Exercise 9.7.** Prove that the set of finite binary strings is countably infinite while the set of infinite binary sequences is uncountable.

<details>
<summary>Hint 1</summary>

Code a finite string of length $n$ by its binary value plus $2^n$.

</details>
<details>
<summary>Hint 2</summary>

For infinite sequences use the diagonal argument, not the finite-string coding.

</details>
<details>
<summary>Solution</summary>

A binary string of length $n$ and value $v<2^n$ receives code $2^n+v$. The disjoint intervals $[2^n,2^{n+1})$ make this injective into the positive integers, and every positive integer has exactly one such decoding. Thus finite binary strings are countably infinite. Infinite sequences correspond to subsets of $\omega$ by characteristic functions. Cantor's theorem prevents their enumeration by $\omega$. The finite code contains a length marker; no finite marker records an arbitrary infinite tail. Treating each infinite sequence as though it had one finite string description would assume the conclusion being disproved.

</details>

<a id="cardinals-cardinal-arithmetic-ex8"></a>
**Exercise 9.8.** If $\kappa\le\lambda$ are infinite well-orderable cardinals, prove their cardinal product is $\lambda$.

<details>
<summary>Hint 1</summary>

Inject the product into $\lambda\times\lambda$.

</details>
<details>
<summary>Hint 2</summary>

Fix one element of $\kappa$ for the reverse injection.

</details>
<details>
<summary>Solution</summary>

Ordinal inclusion gives an injection $\kappa\times\lambda\to\lambda\times\lambda$, and Theorem 9.4 gives a bijection of the latter with $\lambda$. Because $\kappa$ is infinite it contains zero, so $\beta\mapsto(0,\beta)$ injects $\lambda$ into the product. Cantor–Bernstein gives equality of cardinal sizes. The proof uses well-orderable cardinal representatives to apply the square theorem. It is therefore not a proof that arbitrary infinite sets have their square cardinality in bare ZF. Under Choice the restriction disappears because every set can then be well-ordered.

</details>

<a id="cardinals-cardinal-arithmetic-ex9"></a>
**Exercise 9.9.** In Hartogs' proof, explain why collecting order types uses Replacement rather than a choice of an ordinal representative for every well-order.

<details>
<summary>Hint 1</summary>

The well-order type theorem gives uniqueness, not merely existence of some equinumerous ordinal.

</details>
<details>
<summary>Hint 2</summary>

The input family of coded relations is a set.

</details>
<details>
<summary>Solution</summary>

The relations and their domains are coded in a fixed set constructed from $A$ by products and power sets. Separation selects the codes that actually describe well-orders. Each code has exactly one ordinal order type by the collapse theorem, so the formula relating a code to its order type is functional. Replacement therefore collects its image. No representative is chosen from several possible ordinal types, because there is only one. A given subset may carry many well-orders, but all of them are included as separate inputs. This avoids both a simultaneous choice of well-orders on subsets and an assumption that $A$ itself is well-orderable.

</details>

<a id="cardinals-cardinal-arithmetic-ex10"></a>
**Exercise 9.10.** Prove the Hartogs number $h(A)$ is an initial ordinal.

<details>
<summary>Hint 1</summary>

Every smaller ordinal injects into $A$ by its minimal definition.

</details>
<details>
<summary>Hint 2</summary>

A bijection from $h(A)$ to a smaller ordinal would compose with such an injection.

</details>
<details>
<summary>Solution</summary>

Suppose $h(A)$ were bijective with some $\beta<h(A)$. Minimality of $h(A)$ provides an injection $j:\beta\to A$. Composing the supposed bijection with $j$ gives an injection $h(A)\to A$, contradicting its definition. Thus it is equinumerous with no smaller ordinal and is initial. This conclusion does not put $A$ below $h(A)$ in the injection order: without Choice, the two sets might be incomparable. Hartogs supplies the forbidden direction unconditionally; obtaining the other direction from universal comparability would itself prove well-orderability and hence Choice.

</details>

<a id="section-287-summary"></a>
## Summary {#section-289-summary}

Injection comparisons and Cantor's diagonal theorem work in ZF. Power sets strictly increase size. Explicit pairings and supplied enumeration families support countability arguments without hidden selection. Well-orderable sets have initial-ordinal representatives, whose infinite squares have the same cardinality. Hartogs produces, for every set, an ordinal that cannot inject into it. The next chapter uses that bound to prove the equivalence of Choice, Zorn's lemma and well-ordering.

<a id="section-291-sources-and-further-reading"></a>
## Sources and further reading {#section-293-sources-and-further-reading}

The chapter expands the preserved Cantor and Cantor–Bernstein contracts in [Logic Foundations](#/books/logic-foundations-proof-reference); the latter theorem is available in [Introduction to Proof](#/books/introduction-to-proof). Herbert B. Enderton, *Elements of Set Theory*, is the benchmark. Martin Bays' [*B1.2 Set Theory*](https://people.maths.ox.ac.uk/~bays/teaching/b1set/B1.2.pdf) gives an author's account of cardinal comparisons and choice. All exercises here include complete model solutions.
