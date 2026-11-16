
# Cardinality

How can two infinite sets have the same size when one is a proper subset of the other? The even nonnegative integers are only some of the nonnegative integers, yet the rule $n\mapsto2n$ pairs every nonnegative integer with exactly one even nonnegative integer. For finite sets this cannot happen. For infinite sets it is an invitation to replace the vague idea of counting all the elements by the precise idea of matching them.

We use $\mathbb N=\{0,1,2,\ldots\}$, $\mathbb Z$ for the integers, and $\mathbb Q$ for the rationals. A function has a specified domain and codomain. It is *injective* if equal outputs require equal inputs, *surjective* if every element of its codomain is an output, and *bijective* if it is both. A proof of bijectivity must establish both properties; a formula by itself does not show that the claimed codomain is covered. We assume the well-ordering principle for $\mathbb N$ and ordinary induction. The constructions below make their choices explicit, rather than relying on an unexplained ability to choose infinitely many representatives.

## Finite cardinality and bijections

**Definition 10.1.** Sets $A$ and $B$ have the same cardinality if there is a bijection $f:A\to B$. For $n\in\mathbb N$, write $[n]=\{0,1,\ldots,n-1\}$, with $[0]=\varnothing$. A set has cardinality $n$ when it is in bijection with $[n]$; it is *finite* if this holds for some $n$. A set is *infinite* if it is not finite. The direction of a displayed bijection is unimportant: its inverse is a bijection in the opposite direction.

The definition works for zero elements as well as positive numbers. The empty function is a bijection from $\varnothing$ to itself. A function from a nonempty set to the empty set cannot exist, because there would be nowhere to send an input. These boundary cases are not exceptions added later; they follow from the definitions.

**Theorem 10.2: finite pigeonhole principle.** If $n>m$, no injection $[n]\to[m]$ exists. In particular, if $[n]$ and $[m]$ are bijective then $n=m$.

**Proof.** Use induction on $m$. For $m=0$ there is no function from nonempty $[n]$ to $[0]$. Suppose the claim holds for $m$, and suppose for contradiction that $f:[n]\to[m+1]$ is injective with $n>m+1$. If $m$ is not in the image, $f$ is already an injection into $[m]$, contradicting the induction hypothesis. Otherwise exactly one input $j$ maps to $m$. Delete $j$ from the domain and $m$ from the codomain. The remaining domain can be listed in increasing order and is bijective with $[n-1]$, while the restricted function injects it into $[m]$. Since $n-1>m$, this contradicts the induction hypothesis. Therefore no such injection exists. If there were a bijection between $[n]$ and $[m]$ with unequal indices, either it or its inverse would be an injection from the larger to the smaller, a contradiction. $\square$

This theorem makes the number in the definition of a finite cardinality unique. It also explains why a finite set cannot be bijective with a proper subset: delete one element from the set and enumerate the remaining at most $n-1$ elements. The proof relies on the ordered finite sets $[n]$, not on imagining a physical collection of objects.

**Example 1: a finite matching.** The sets $A=\{a,b,c,d\}$ and $B=\{1,3,5,7\}$ have the same cardinality. Define $f(a)=1$, $f(b)=3$, $f(c)=5$, $f(d)=7$. The four outputs are distinct, so $f$ is injective; they exhaust $B$, so it is surjective. The words “both have four elements” summarize exactly this kind of matching. If the codomain were instead $\{1,3,5,7,9\}$, the same rule would remain injective but would not be surjective.

Equal cardinality is an equivalence relation on any specified collection of sets. The identity map witnesses reflexivity. If $f:A\to B$ is bijective, its inverse witnesses symmetry. If $f:A\to B$ and $g:B\to C$ are bijective, their composition $g\circ f$ is injective and surjective, witnessing transitivity. The codomain of $f$ must match the domain of $g$ for this composition to have the claimed meaning.

## Countable sets and explicit enumeration

**Definition 10.3.** A set is *countably infinite* if it is in bijection with $\mathbb N$. It is *countable* if it is finite or countably infinite. A set that is not countable is *uncountable*. Some authors use “countable” only for countably infinite sets; our convention includes finite sets and makes the empty set countable.

A sequence $x_0,x_1,\ldots$ whose range is $A$ can contain repetitions. It is therefore a surjection $\mathbb N\to A$ when $A$ is nonempty, but it is not automatically a bijection. The following theorem shows why such a listing still proves countability. It also explains how to remove duplicates without making arbitrary choices.

**Theorem 10.4: subsets and lists.** Every subset of $\mathbb N$ is finite or countably infinite. If a nonempty set $A$ is the range of a sequence indexed by $\mathbb N$, then $A$ is countable.

**Proof.** Let $S\subseteq\mathbb N$. If $S$ is finite there is nothing further to prove. Suppose it is infinite. Define $s_0$ to be its least member, and after defining $s_0,\ldots,s_n$, define $s_{n+1}$ to be the least element of $S$ greater than $s_n$. Such an element exists: otherwise $S\subseteq\{0,\ldots,s_n\}$, which is finite. Well-ordering supplies the least one. The resulting sequence is strictly increasing, so it is injective. It is also onto $S$: if $t\in S$ never occurred, then every $s_n<t$; otherwise, when the construction first reached or passed $t$, the least-unused rule would select $t$. There are only finitely many natural numbers below $t$, contradicting the existence of infinitely many distinct $s_n$. Thus $n\mapsto s_n$ is a bijection.

Now let $x:\mathbb N\to A$ be onto. Let $I$ be the set of first occurrence indices: $n\in I$ if $x_n\ne x_j$ for every $j<n$. Every element of $A$ has a least occurrence index by well-ordering, and restricting $x$ to $I$ gives a bijection $I\to A$. The first part says $I$ is finite or countably infinite, so the same is true of $A$. No selection is needed beyond taking least indices in $\mathbb N$. $\square$

The construction for subsets depends on their inherited order. One cannot write “choose the next element” of an arbitrary set without explaining what next means. For a sequence, first occurrence indices provide the needed order, even when the elements themselves have no order. A finite range is allowed: its first-occurrence set is finite, although the original sequence has infinitely many entries.

**Example 2: the integers.** Define $f:\mathbb N\to\mathbb Z$ by $f(0)=0$, $f(2n-1)=n$ and $f(2n)=-n$ for $n\ge1$. The list begins $0,1,-1,2,-2,3,-3,\ldots$. Every positive integer $n$ appears at $2n-1$, every negative integer $-n$ appears at $2n$, and zero appears at $0$. These cases are disjoint and each appears only once. Thus $f$ is a bijection, and $\mathbb Z$ is countably infinite. The explicit inverse positions supply a proof of coverage; displaying the first six entries alone would not.

## Pairs and rational numbers

**Theorem 10.5: ordered pairs are countable.** The set $\mathbb N\times\mathbb N$ is countably infinite.

**Proof.** List the pairs by increasing coordinate sum. At sum $s$ list $(0,s),(1,s-1),\ldots,(s,0)$. Every stage is finite and nonempty, and the number of pairs in all earlier stages is finite, so each listed pair has a natural-number position. Every pair $(i,j)$ appears at stage $i+j$, and it occurs exactly once because its sum and first coordinate determine its place. This gives a bijection from $\mathbb N$ to the set of pairs. $\square$

The increasing-sum order prevents a common failure: listing an entire infinite first row before moving to the second would never reach any entry in the second row. In a legitimate enumeration every element must have a finite position. The diagonal arrangement is not the same as Cantor's diagonal argument below: here we list finite diagonals to cover a grid; later we alter one entry in each row to escape a proposed list.

**Theorem 10.6: the rationals are countably infinite.**

**Proof.** Use the integer enumeration $f$ from Example 2. For each pair $(i,j)\in\mathbb N^2$, output the rational $f(i)/(j+1)$. Listing pairs by increasing sum gives a sequence of rational numbers. Every rational has a representation $p/q$ with $p\in\mathbb Z$ and positive integer $q$, and therefore appears when $f(i)=p$ and $j=q-1$. The list has repetitions, for example $1/2=2/4$, but the first-occurrence theorem removes them. Thus $\mathbb Q$ is countable. It is infinite because it contains the distinct integers $0,1,2,\ldots$; a finite set cannot contain arbitrarily many distinct elements by the finite pigeonhole principle. Hence it is countably infinite. $\square$

The denominator is $j+1$, never zero. We did not need lowest terms or a theorem about their uniqueness: duplicates are handled after the list is constructed. Likewise, showing that the rationals are dense on the number line does not show that they are uncountable. Density describes points between two given points; cardinality concerns the existence of a matching.

**Example 3: a finite union of countable sets.** Suppose $A$ and $B$ are nonempty and each has a sequence listing all its elements, say $a_0,a_1,\ldots$ and $b_0,b_1,\ldots$. Interleave the lists as $a_0,b_0,a_1,b_1,\ldots$. Every element of $A\cup B$ appears at a finite position. Repetitions, including overlap between $A$ and $B$, can be removed by first occurrence. If either set is empty, use the other list; if a nonempty set is finite, repeat its last element. Consequently the union is countable. This reasoning generalizes to any fixed finite number of sets by cycling through their lists.

For an arbitrary countable family of countable sets, a diagonal list works once a sequence for each member has actually been supplied. Without such supplied enumerations, selecting one sequence for every set is an additional assumption in some foundations of set theory. We do not need that assumption for the explicit enumeration of $\mathbb Q$, where one formula defines every entry.

## Cantor's theorem and the power set

**Definition 10.7.** The *power set* $\mathcal P(A)$ is the set of all subsets of $A$. Its elements are themselves sets. For instance, $\mathcal P(\{0,1\})=\{\varnothing,\{0\},\{1\},\{0,1\}\}$ has four elements. The empty set is an element of every power set, since it is a subset of every set.

**Theorem 10.8: Cantor.** For every set $A$, no function $f:A\to\mathcal P(A)$ is surjective.

**Proof.** Given such a function, form the subset $D=\{a\in A:a\notin f(a)\}$. This is a subset of $A$, so $D\in\mathcal P(A)$. If $f$ were surjective, some $d\in A$ would satisfy $f(d)=D$. But then $d\in D$ if and only if $d\notin f(d)$, which is equivalent to $d\notin D$. Either possible truth value contradicts this equivalence. Thus $D$ is not an output and $f$ is not surjective. $\square$

The argument is valid for the empty set too: its power set contains $\varnothing$, whereas the empty function has no outputs. For a nonempty set, the decisive point is that $D$ is built *from the proposed function*. It differs from $f(a)$ at the particular element $a$ for every $a$. This is stronger than trying several subsets and observing that none appears near the start of a list.

**Corollary 10.9.** $\mathcal P(\mathbb N)$ is uncountable.

**Proof.** It is not countably infinite, because a bijection $\mathbb N\to\mathcal P(\mathbb N)$ would be a surjection, contrary to Cantor's theorem. It is not finite, since the singleton subsets $\{0\},\{1\},\ldots$ are distinct and therefore cannot all lie in a finite set. It is consequently not countable. $\square$

There is an injection $A\to\mathcal P(A)$, namely $a\mapsto\{a\}$. Cantor's theorem adds that no matching of $A$ with all its subsets is possible. It does not rely on a claim that every two infinite cardinalities can be compared, and we do not need the Cantor–Bernstein–Schröder theorem here.

## Real numbers and avoiding ambiguous expansions

We now show that the real interval $(0,1)$ is uncountable using decimal expansions without relying on a uniqueness convention. Assume the standard decimal representation theorem: each real number in $(0,1)$ has at least one decimal expansion. A terminating decimal has another expansion ending in repeated nines, such as $0.5000\ldots=0.4999\ldots$. We choose, for each real, its canonical decimal expansion: the one that is not eventually all nines. The decimal representation theorem supplies this uniquely. Alternatively, in a proposed list we could choose any expansion for each displayed entry, because the construction below differs by more than the ambiguity can erase; we use canonical expansions to make the rule explicit.

**Theorem 10.10: uncountability of an interval.** There is no surjection $x:\mathbb N\to(0,1)$.

**Proof.** Suppose such a sequence exists. Write its $n$th entry in its canonical decimal expansion and call its $(n+1)$st digit $d_n$, counting digits after the decimal point from $1$. Define a new decimal $y=0.c_0c_1c_2\ldots$, where $c_n=2$ if $d_n=1$, and $c_n=1$ otherwise. The number $y$ lies in $(0,1)$ and has only digits $1$ and $2$; its expansion is not eventually all nines, nor eventually all zeroes. At digit $n+1$ it differs from the canonical expansion of $x_n$. Since both expansions are canonical, they represent different real numbers. Thus $y$ differs from every listed $x_n$, contradicting surjectivity. $\square$

There is also a direct numerical way to see the digit distinction: if two decimal expansions first differ by one or more at a place, equality can occur only in the boundary case where one tail is all nines and the other all zeroes. The constructed number has neither kind of eventual tail. The proof has therefore addressed the familiar $0.4999\ldots=0.5000\ldots$ ambiguity rather than silently treating all decimal strings as distinct real numbers.

Since $(0,1)$ is an infinite subset of $\mathbb R$, a countable $\mathbb R$ would give a countable subset $(0,1)$: a finite or countably infinite set can be transported by a bijection to a subset of $\mathbb N$, to which the subset theorem applies. This contradicts the theorem, so $\mathbb R$ is uncountable. This is a proof about all possible lists, not merely about one particular way of arranging decimal numbers.

## Reading a cardinality argument

A comparison argument has two distinct tasks: construct a function and prove the required properties. For example, the rule $n\mapsto n+1$ is an injection from $\mathbb N$ into itself, and it is a bijection from $\mathbb N$ onto $\mathbb N\setminus\{0\}$. It is not a bijection onto $\mathbb N$, because no input maps to zero. The formula is unchanged; changing the codomain changes the surjectivity question. This small example is the standard warning against treating a function's target as incidental notation.

A failed listing must also be distinguished from a proof that no listing exists. The increasing list $0,1,2,\ldots$ omits negative integers, but it does not show that $\mathbb Z$ is uncountable: Example 2 gives a different list that works. Cantor's theorem has a different logical shape. It starts with an arbitrary proposed function, constructs a set depending on that function, and proves that the constructed set is absent. Since the argument works for every proposed function, no replacement list can evade it.

A useful finite analogy is a hotel with finitely many rooms. If each room contains one guest, placing an additional guest in an occupied room violates the one-guest rule; the finite pigeonhole principle certifies the obstruction. With rooms numbered by $\mathbb N$, moving the guest in room $n$ to room $n+1$ frees room zero, while each original guest still has a distinct room. This describes an injection of the old occupancy into a proper subset, not a physical procedure that must be carried out in time. Its mathematical content is the explicit bijection above.

Finally, one should not infer that an infinite set is countable merely because it can be described by finite words. There are only countably many finite strings over a fixed finite alphabet, by the length-by-length enumeration in Exercise 9. Cantor's theorem shows there are uncountably many subsets of $\mathbb N$. Therefore no coding scheme assigning a finite binary description to every such subset can be surjective. This conclusion concerns a fixed finite alphabet and finite strings; it does not prohibit infinite binary sequences, which themselves form an uncountable set.

## Exercises

Give both directions of a claimed bijection and identify the set from which each variable is drawn. A displayed list needs a rule that reaches every element at a finite stage.

### Exercise 1
<a id="cardinality-ex-1"></a>
Give a bijection from $\mathbb N$ to the positive even integers.

<details><summary>Hint 1</summary>Adjust the usual doubling map because $0\in\mathbb N$.</details>
<details><summary>Hint 2</summary>Use $2(n+1)$.</details>
<details><summary>Solution</summary>Define $f(n)=2(n+1)$. If $f(n)=f(m)$ then $n=m$, so it is injective. Every positive even integer has the form $2k$ with $k\ge1$ and equals $f(k-1)$, so it is surjective.</details>

### Exercise 2
<a id="cardinality-ex-2"></a>
Show that the composition of bijections $f:A\to B$ and $g:B\to C$ is a bijection.

<details><summary>Hint 1</summary>For injectivity, use the two hypotheses in succession.</details>
<details><summary>Hint 2</summary>For surjectivity, first find a preimage under $g$, then under $f$.</details>
<details><summary>Solution</summary>If $g(f(a))=g(f(a'))$, injectivity of $g$ gives $f(a)=f(a')$ and injectivity of $f$ gives $a=a'$. For $c\in C$, choose $b\in B$ with $g(b)=c$ and then $a\in A$ with $f(a)=b$. Then $g(f(a))=c$. Hence the composition is bijective.</details>

### Exercise 3
<a id="cardinality-ex-3"></a>
Prove that every subset of a finite set is finite.

<details><summary>Hint 1</summary>Transport the subset across a bijection with $[n]$.</details>
<details><summary>Hint 2</summary>List its elements in increasing order in $[n]$.</details>
<details><summary>Solution</summary>Let $f:A\to[n]$ be a bijection and $B\subseteq A$. The image $f(B)$ is a subset of $[n]$. Listing its elements in increasing order gives a bijection from $[k]$ to $f(B)$ for some $k\le n$. Restricting $f$ gives a bijection from $B$ to $f(B)$, so $B$ is finite.</details>

### Exercise 4
<a id="cardinality-ex-4"></a>
Show that the set of multiples of $3$ in $\mathbb Z$ is countably infinite.

<details><summary>Hint 1</summary>Use the enumeration of $\mathbb Z$ from the text.</details>
<details><summary>Hint 2</summary>Multiplication by $3$ gives a bijection from $\mathbb Z$ onto this set.</details>
<details><summary>Solution</summary>The map $z\mapsto3z$ is injective because $3z=3w$ implies $z=w$, and it is onto the multiples of $3$ by definition. Compose it with the explicit bijection $\mathbb N\to\mathbb Z$ to obtain a bijection from $\mathbb N$.</details>

### Exercise 5
<a id="cardinality-ex-5"></a>
Explain why listing $(0,0),(0,1),(0,2),\ldots$ and then listing $(1,0),(1,1),\ldots$ does not define an enumeration indexed by $\mathbb N$ of all pairs.

<details><summary>Hint 1</summary>Ask at which finite index $(1,0)$ occurs.</details>
<details><summary>Hint 2</summary>Every natural index already lies in the first infinite row.</details>
<details><summary>Solution</summary>The proposed first row assigns an entry to every natural index. There is no natural index after all natural indices at which to place $(1,0)$. Thus the description does not give a surjection from $\mathbb N$ onto the pairs. The increasing-sum listing avoids this because each preceding collection of diagonals is finite.</details>

### Exercise 6
<a id="cardinality-ex-6"></a>
Show that $\mathbb N^3$ is countably infinite using the pair enumeration.

<details><summary>Hint 1</summary>Treat the first two coordinates as a single object.</details>
<details><summary>Hint 2</summary>Compose the pair bijection twice.</details>
<details><summary>Solution</summary>Let $p:\mathbb N\to\mathbb N^2$ be the diagonal bijection. If $p(n)=(i,j)$ and $p(i)=(a,b)$, map $n$ to $(a,b,j)$. Its inverse maps $(a,b,j)$ to $p^{-1}(p^{-1}(a,b),j)$. Thus it is a bijection $\mathbb N\to\mathbb N^3$.</details>

### Exercise 7
<a id="cardinality-ex-7"></a>
Prove that the image of a countable set under a function is countable.

<details><summary>Hint 1</summary>Separate the finite and countably infinite cases.</details>
<details><summary>Hint 2</summary>Apply the function to an enumeration and remove repeated outputs.</details>
<details><summary>Solution</summary>If the domain is finite, its image is finite: enumerate the finitely many inputs and retain distinct outputs. If the domain is countably infinite, compose its bijection with the given function to obtain a sequence whose range is the image. The first-occurrence theorem makes that image countable.</details>

### Exercise 8
<a id="cardinality-ex-8"></a>
For $A=\{1,2\}$ and $f(1)=\{1\}$, $f(2)=\varnothing$, find Cantor's set $D$.

<details><summary>Hint 1</summary>Check whether each input belongs to its own output.</details>
<details><summary>Hint 2</summary>$1\in f(1)$ but $2\notin f(2)$.</details>
<details><summary>Solution</summary>$D=\{a\in A:a\notin f(a)\}=\{2\}$. It differs from $f(1)$ at $1$ and from $f(2)$ at $2$, so this particular function misses $D$.</details>

### Exercise 9
<a id="cardinality-ex-9"></a>
Prove that the set of all finite binary strings is countable.

<details><summary>Hint 1</summary>Group strings by length.</details>
<details><summary>Hint 2</summary>At each length list strings in lexicographic order.</details>
<details><summary>Solution</summary>First list the empty string, then the two strings of length one, then all strings of length two, and so on; within each length use lexicographic order. Each group is finite, and only finitely many groups precede a given finite length. Every string therefore appears at a finite position. There are infinitely many strings, for example one all-zero string of each length, so the set is countably infinite.</details>

### Exercise 10
<a id="cardinality-ex-10"></a>
Explain why the set of infinite binary sequences is uncountable.

<details><summary>Hint 1</summary>Associate a subset of $\mathbb N$ with each sequence.</details>
<details><summary>Hint 2</summary>Record the indices at which the digit is $1$.</details>
<details><summary>Solution</summary>Map a binary sequence $(b_n)$ to $\{n:b_n=1\}$. It is injective because different sequences differ at an index, and surjective because each subset has its characteristic sequence. Thus it is a bijection with $\mathcal P(\mathbb N)$, which is uncountable by Cantor's theorem.</details>

## Summary

Cardinality is defined by bijection, not by the apparent shape of a set. Finite sizes are unique by the pigeonhole principle. A subset of $\mathbb N$ has a canonical increasing enumeration when infinite; a sequence with repetitions can be reduced to its first occurrences. Explicit diagonal enumeration shows that integer pairs and rational numbers are countable. Cantor's diagonal subset escapes every proposed map onto a power set, and a decimal diagonal with controlled digits shows that the real interval $(0,1)$ is uncountable. The two diagonal methods have different aims: one reaches every pair, the other escapes every proposed list.

## Further reading

Richard Hammack, [*Book of Proof*, third edition](https://richardhammack.github.io/BookOfProof/), Chapter 14, “Cardinality of Sets,” gives another introduction to countability and diagonal arguments. The proofs and exercises above are written for this chapter.
