
# Sets

A set is a way to collect objects without imposing an order on them. When a problem asks whether two collections are the same, the useful question is not whether their descriptions look alike. It is whether every object that satisfies one description also satisfies the other. That shift from descriptions to individual members turns set identities into proofs.

This chapter assumes familiarity with statements, implication and quantifiers. We will use those ideas to define inclusion, prove equality, and count some finite collections. Pay particular attention to what kind of object occurs on each side of a symbol: a number, a set of numbers, and a set whose elements are sets need not be interchangeable. The methods here will later support proofs about functions and relations.

## Membership, equality, and the empty set

**Definition 5.1 (membership).** We write $x\in A$ when $x$ is an element of the set $A$, and $x\notin A$ when it is not. A set is determined by its members: sets with exactly the same members are equal.

For a finite set, braces can list members: $A=\{2,5,7\}$. The list $\{7,2,5,2\}$ describes the same set. Order does not matter, and listing an element twice does not create a second copy. By contrast, the ordered pair $(2,5)$ remembers which entry comes first. Thus $(2,5)\ne(5,2)$, while $\{2,5\}=\{5,2\}$.

The **empty set**, written $\varnothing$, has no members. It is a set in its own right. The set $\{\varnothing\}$ is different: it has one member, namely the empty set. Similarly, if $1\in A$, then $1$ and $\{1\}$ have different roles: the former is a number, whereas the latter is a set containing a number. Whether $\{1\}$ itself belongs to $A$ requires separate information.

We will write a set by restricted comprehension as $\{x\in U:P(x)\}$: its members are those objects already in the specified set $U$ for which $P(x)$ holds. For example, $\{x\in\mathbb Z:x^2<10\}=\{-3,-2,-1,0,1,2,3\}$. The restriction matters. We are not assuming that an arbitrary property describes a set of all objects, or that there is a universal set containing every set. Those assumptions cause difficulties in standard set theory and are unnecessary for the arguments in this chapter.

**Definition 5.2 (subset).** $A\subseteq B$ means that every member of $A$ belongs to $B$:

$$\forall x\,(x\in A\Rightarrow x\in B).$$

To prove this, take an arbitrary $x\in A$ and show $x\in B$. To disprove it, produce a particular $x\in A$ with $x\notin B$. The hypothesis $x\in A$ is the starting information for the proof, not the conclusion. We write $A\subsetneq B$ when $A\subseteq B$ and $A\ne B$.

Every set is a subset of itself. The empty set is a subset of every set: there is no element of $\varnothing$ that could violate the required implication. This is a vacuous statement, not a claim that $\varnothing$ is an element of every set. For instance, $\varnothing\subseteq\{1\}$ but $\varnothing\notin\{1\}$.

**Theorem 5.1 (two inclusions).** For sets $A,B$, $A=B$ if and only if $A\subseteq B$ and $B\subseteq A$.

**Proof.** If $A=B$, a member of either set is a member of the other, so both inclusions hold. Conversely, suppose the two inclusions hold. For an arbitrary object $x$, the first gives $x\in A\Rightarrow x\in B$ and the second gives $x\in B\Rightarrow x\in A$. Thus $x\in A$ exactly when $x\in B$. The sets have the same members, so $A=B$. ∎

The two arrows have distinct jobs. A proof of $A\subseteq B$ alone allows $B$ to contain additional members. For example, $\{1\}\subseteq\{1,2\}$, but the two sets are not equal. If the descriptions are simple, one may instead write a chain of reversible membership equivalences; that establishes both implications at once. Every step in such a chain must actually work in both directions.

### Worked example 5.1: a set defined by parity

Let $E=\{n\in\mathbb Z:n=2k\text{ for some }k\in\mathbb Z\}$ and $M=\{n\in\mathbb Z:n+1\text{ is odd}\}$. We prove $E=M$. If $n\in E$, choose an integer $k$ with $n=2k$. Then $n+1=2k+1$ is odd, so $n\in M$. Conversely, if $n\in M$, then $n+1=2k+1$ for some integer $k$, hence $n=2k$ and $n\in E$. Both inclusions have been proved. The existential integer $k$ may depend on $n$; no single $k$ is asserted to work for all members.

## Operations and membership arguments

**Definition 5.3 (operations).** For sets $A,B$, their union, intersection and difference are defined by

$$\begin{aligned}
A\cup B&=\{x:x\in A\text{ or }x\in B\},\\
A\cap B&=\{x:x\in A\text{ and }x\in B\},\\
A\setminus B&=\{x\in A:x\notin B\}.
\end{aligned}$$

Here “or” is inclusive: a member of both sets is in their union. These familiar definitions can be understood as restricted comprehension inside suitable containing sets, such as $A\cup B$ for the first two expressions; they do not require a universal set. For a fixed universe $U$ and $A\subseteq U$, the **relative complement** is $A^c=U\setminus A$. The universe is part of the notation. If it changes, the complement can change even when $A$ does not.

For example, let $U=\{1,2,3,4,5\}$, $A=\{1,2,4\}$ and $B=\{2,3\}$. Then $A\cup B=\{1,2,3,4\}$, $A\cap B=\{2\}$, $A\setminus B=\{1,4\}$ and $A^c=\{3,5\}$. If the universe were $\{1,2,3,4,5,6\}$, the complement of $A$ would also contain $6$. A picture can help check these computations, but it does not replace the quantified argument for arbitrary sets.

**Theorem 5.2 (distributive law).** For all sets $A,B,C$,

$$A\cap(B\cup C)=(A\cap B)\cup(A\cap C).$$

**Proof.** Let $x$ be arbitrary. If $x\in A\cap(B\cup C)$, then $x\in A$ and either $x\in B$ or $x\in C$. In the first case $x\in A\cap B$; in the second $x\in A\cap C$. Thus $x$ is in the right-hand union. Conversely, if $x$ is in that union, it belongs to $A\cap B$ or $A\cap C$. In either case it belongs to $A$ and to $B\cup C$, hence belongs to the left-hand intersection. Two inclusions prove the equality. ∎

**Theorem 5.3 (De Morgan).** If $A,B\subseteq U$, then

$$(A\cup B)^c=A^c\cap B^c,\qquad (A\cap B)^c=A^c\cup B^c.$$

**Proof.** Let $x$ be arbitrary. Since both sides are subsets of $U$, we may consider $x\in U$; an object outside $U$ belongs to neither side. Now $x\in(A\cup B)^c$ exactly when $x\notin A\cup B$. This means that $x$ is in neither $A$ nor $B$, equivalently $x\in A^c$ and $x\in B^c$. This is membership in $A^c\cap B^c$. Similarly, $x\in(A\cap B)^c$ exactly when it is not true that $x$ belongs to both $A$ and $B$. That means $x\notin A$ or $x\notin B$, equivalently $x\in A^c\cup B^c$. Each equivalence applies to every object, proving both equalities. ∎

The word “not” changes “and” to “or” in the second proof. It does not say that $x$ must be outside both sets. When checking a set identity, translate each side into a precise logical condition before manipulating symbols.

### Worked example 5.2: a difference identity

We show $A\setminus(B\cup C)=(A\setminus B)\cap(A\setminus C)$. If $x$ is on the left, then $x\in A$ and $x$ belongs to neither $B$ nor $C$. It is therefore in each of $A\setminus B$ and $A\setminus C$. Conversely, if $x$ is in the intersection on the right, it is in $A$, outside $B$, and outside $C$. Thus it is outside $B\cup C$ and is in the left side. Nothing in the proof requires the sets to be finite or disjoint.

## Products, power sets, and finite choices

**Definition 5.4 (product).** The Cartesian product $A\times B$ is the set of ordered pairs $(a,b)$ with $a\in A$ and $b\in B$. Ordered pairs satisfy $(a,b)=(a',b')$ exactly when $a=a'$ and $b=b'$.

If $A=\{r,s\}$ and $B=\{0,1,2\}$, then $A\times B$ contains six pairs: $(r,0),(r,1),(r,2),(s,0),(s,1),(s,2)$. In $B\times A$ the coordinates are reversed, so its members are different ordered pairs. If either factor is empty, the product is empty: a pair cannot be formed without an entry from each factor.

**Theorem 5.4 (finite product count).** If $A$ and $B$ are finite with $|A|=m$ and $|B|=n$, then $|A\times B|=mn$.

**Proof.** For each of the $m$ possible first coordinates, pair it with each of the $n$ possible second coordinates. Equality of ordered pairs guarantees that no two different choices produce the same pair, and every pair in the product arises from such a choice. The $m$ groups have $n$ pairs each, giving $mn$ in total. The argument includes an empty factor: then there are no pairs and the product is zero. ∎

**Definition 5.5 (power set).** The power set $\mathcal P(A)$ consists of every subset of $A$:

$$\mathcal P(A)=\{S:S\subseteq A\}.$$

For $A=\{p,q\}$, the four members are $\varnothing,\{p\},\{q\},\{p,q\}$. In particular, $p\in A$, $\{p\}\subseteq A$, and $\{p\}\in\mathcal P(A)$ are three different assertions. The empty set and the entire set are always included in the power set. For $A=\varnothing$, its only subset is $\varnothing$, so $\mathcal P(\varnothing)=\{\varnothing\}$.

**Theorem 5.5 (finite power-set count).** If $A$ has $n$ elements, then $|\mathcal P(A)|=2^n$.

**Proof.** List the elements as $a_1,\ldots,a_n$. For each element make one of two choices: include it or exclude it. Every sequence of these choices specifies one subset, and every subset gives exactly one such sequence. The product rule gives $2^n$ sequences, including the single empty sequence when $n=0$. Hence there are $2^n$ subsets. ∎

### Worked example 5.3: choosing a menu

Suppose a menu offers four distinct optional toppings. A selection is a subset of the four toppings, so there are $2^4=16$ selections, including choosing none. If a customer must choose exactly two, the count is not $2^4$: that total also includes selections of other sizes. There are six pairs, which can be listed as $\{a,b\},\{a,c\},\{a,d\},\{b,c\},\{b,d\},\{c,d\}$. The distinction is between an unrestricted binary decision for every topping and a condition coupling the decisions.

## Reading a statement before proving it

The same notation can express a general assertion, a conditional assertion, or a claim about one particular object. The sentence $A\subseteq B$ has a hidden universal quantifier. Its negation is therefore an existence statement: there is an $x$ in $A$ that is not in $B$. To refute inclusion it is enough to display that one witness, but the witness must really be in the proposed smaller set. An element outside both sets does not refute the inclusion, because it fails the premise of the implication.

Consider the claim $A\cup B=A$ if and only if $B\subseteq A$. For the forward direction, suppose the equality holds and take $x\in B$. By the definition of union, $x\in A\cup B$, and the assumed equality gives $x\in A$. This proves $B\subseteq A$. For the reverse direction, suppose $B\subseteq A$. Every member of $A$ is in $A\cup B$. If $x\in A\cup B$, then either $x\in A$ or $x\in B$; in the latter case the hypothesis also gives $x\in A$. Thus the union is contained in $A$, and two inclusions give equality. Notice that the reverse direction is the place where the inclusion hypothesis is needed.

One can also inspect boundary cases before writing a general argument. If $A$ is empty in the preceding claim, the condition $B\subseteq A$ forces $B$ to be empty, and the equality holds. If $B$ is empty, the condition and equality hold for every $A$. Neither case proves the general theorem, but each can reveal a mistaken formula. The general argument does not count members, so the same proof applies to infinite sets.

There is another useful distinction between two ways of comparing sets of sets. If $A\subseteq B$, every subset of $A$ is also a subset of $B$, so $\mathcal P(A)\subseteq\mathcal P(B)$. The converse holds too: if the power-set inclusion holds, then $A\in\mathcal P(A)$ because $A\subseteq A$. It follows that $A\in\mathcal P(B)$, which means $A\subseteq B$. Here $A$ is used as an element of a power set, not as an element of itself. This small proof is a good check that the levels of membership are being tracked correctly.

For a final finite example, suppose $A$ has five elements and $B$ has three. The product $A\times B$ has fifteen pairs. Its power set has $2^{15}$ elements, because a subset of the product makes a yes-or-no choice for each *pair*. This is not generally the same as $\mathcal P(A)\times\mathcal P(B)$, whose members are ordered pairs of subsets and whose size is $2^5\cdot2^3=2^8$. The difference in counts reflects a difference in what is being chosen, not a contradiction between two counting rules.

### Worked example 5.4: a union count

Let $A$ and $B$ be finite. The familiar formula $|A\cup B|=|A|+|B|-|A\cap B|$ can be justified without assuming that the sets are disjoint. Split $A\cup B$ into three disjoint parts: $A\setminus B$, $A\cap B$, and $B\setminus A$. Every member of the union lies in exactly one of them, according to whether it belongs only to $A$, to both, or only to $B$. Adding their sizes counts every member once. By contrast, $|A|+|B|$ counts members of the intersection twice and all other members once. Subtracting $|A\cap B|$ removes exactly the extra counts.

For example, if a class has twelve students studying algebra, nine studying geometry, and four studying both, then seventeen study at least one of the two subjects. The information does not say how many students are in the entire class: there may be students in neither group. Nor does it imply four study only geometry; the geometry-only count is $9-4=5$. The calculation relies on finite sizes, while the earlier element proofs of set identities did not.

This finite decomposition also clarifies why $|A\cup B|=|A|+|B|$ needs disjointness. If the intersection is empty, the correction term is zero. If the intersection is nonempty, adding the sizes without correction counts some people or objects twice. The words “at least one” describe a union, while “exactly one” describes $(A\setminus B)\cup(B\setminus A)$. These two questions agree only when the two sets are disjoint.

## Exercises

For each proof, specify the arbitrary object you choose and the definition you use. Open the hints one at a time; compare your complete argument with the solution only after trying it.

<a id="sets-ex-1"></a>
### Exercise 5.1

Let $A=\{1,2\}$ and $B=\{2,3\}$. Find $A\cup B$, $A\cap B$ and $A\setminus B$.

<details><summary>Hint 1</summary>Union asks for membership in at least one set.</details>
<details><summary>Hint 2</summary>Difference keeps members of the first set that are absent from the second.</details>
<details><summary>Solution</summary>$A\cup B=\{1,2,3\}$, $A\cap B=\{2\}$, and $A\setminus B=\{1\}$. Each follows by checking the displayed members against the appropriate definition.</details>

<a id="sets-ex-2"></a>
### Exercise 5.2

Decide whether $\varnothing\in\{\varnothing\}$, $\varnothing\subseteq\{\varnothing\}$ and $\{\varnothing\}\subseteq\varnothing$.

<details><summary>Hint 1</summary>Separate the question of being a member from the question of all members belonging.</details>
<details><summary>Hint 2</summary>The singleton has one member; the empty set has none.</details>
<details><summary>Solution</summary>The first is true because the listed member is $\varnothing$. The second is true because the empty set is a subset of every set. The third is false: $\varnothing$ is a member of the left side but not of the right side.</details>

<a id="sets-ex-3"></a>
### Exercise 5.3

Prove that $A\subseteq B$ if and only if $A\cap B=A$.

<details><summary>Hint 1</summary>Prove each implication separately.</details>
<details><summary>Hint 2</summary>For the reverse implication, take $x\in A$ and use equality.</details>
<details><summary>Solution</summary>If $A\subseteq B$, every $x\in A$ is in both sets, so $A\subseteq A\cap B$. The reverse inclusion is immediate from intersection membership. Thus equality holds. Conversely, if $A\cap B=A$ and $x\in A$, then $x\in A\cap B$, so $x\in B$. Hence $A\subseteq B$.</details>

<a id="sets-ex-4"></a>
### Exercise 5.4

Prove $A\setminus(B\cap C)=(A\setminus B)\cup(A\setminus C)$.

<details><summary>Hint 1</summary>Translate the left side into a membership condition.</details>
<details><summary>Hint 2</summary>Not belonging to both sets means being outside at least one.</details>
<details><summary>Solution</summary>For arbitrary $x$, membership on the left means $x\in A$ and not both $x\in B$ and $x\in C$. Equivalently $x\in A$ and either $x\notin B$ or $x\notin C$. This is exactly membership in the right-hand union. Equality follows from the two implications.</details>

<a id="sets-ex-5"></a>
### Exercise 5.5

Give a counterexample to $A\setminus B=B\setminus A$ for all sets $A,B$.

<details><summary>Hint 1</summary>Try one singleton and the empty set.</details>
<details><summary>Hint 2</summary>Compute each side with its own first operand.</details>
<details><summary>Solution</summary>Take $A=\{1\}$ and $B=\varnothing$. Then $A\setminus B=\{1\}$ but $B\setminus A=\varnothing$. The two sets differ because $1$ belongs to the first and not the second.</details>

<a id="sets-ex-6"></a>
### Exercise 5.6

Prove $A\cap(B\setminus C)=(A\cap B)\setminus C$.

<details><summary>Hint 1</summary>Write down all three membership conditions on each side.</details>
<details><summary>Hint 2</summary>Both sides require membership in $A$ and $B$, and nonmembership in $C$.</details>
<details><summary>Solution</summary>For any $x$, the left condition is $x\in A$, $x\in B$ and $x\notin C$. The right condition is precisely the same. Thus each side is included in the other and the sets are equal.</details>

<a id="sets-ex-7"></a>
### Exercise 5.7

List $\mathcal P(\{a,b,c\})$ and find its size.

<details><summary>Hint 1</summary>Group subsets by their number of members.</details>
<details><summary>Hint 2</summary>Include both the empty set and the whole set.</details>
<details><summary>Solution</summary>The subsets are $\varnothing$, $\{a\}$, $\{b\}$, $\{c\}$, $\{a,b\}$, $\{a,c\}$, $\{b,c\}$ and $\{a,b,c\}$. There are eight, agreeing with $2^3=8$.</details>

<a id="sets-ex-8"></a>
### Exercise 5.8

If $|A|=3$ and $|B|=4$, how many elements have $A\times B$ and $\mathcal P(A)$? Explain.

<details><summary>Hint 1</summary>For a pair, choose a coordinate from each set.</details>
<details><summary>Hint 2</summary>For a subset, independently include or exclude each element.</details>
<details><summary>Solution</summary>There are $3\cdot4=12$ ordered pairs: each of three first coordinates combines with four second coordinates. There are $2^3=8$ subsets, by the three independent inclusion choices.</details>

<a id="sets-ex-9"></a>
### Exercise 5.9

Prove $(A\times B)\cap(C\times D)=(A\cap C)\times(B\cap D)$.

<details><summary>Hint 1</summary>An element of either product is an ordered pair.</details>
<details><summary>Hint 2</summary>Compare the conditions on the first and second coordinates independently.</details>
<details><summary>Solution</summary>If $(x,y)$ is in the left intersection, then $x\in A$ and $x\in C$, while $y\in B$ and $y\in D$. Thus $(x,y)$ is in the right product. Conversely, a pair on the right satisfies all four conditions and is in each product on the left. Both inclusions hold, including when any factor is empty.</details>

<a id="sets-ex-10"></a>
### Exercise 5.10

Prove that $A\subseteq B$ implies $\mathcal P(A)\subseteq\mathcal P(B)$.

<details><summary>Hint 1</summary>Choose an arbitrary member $S$ of $\mathcal P(A)$.</details>
<details><summary>Hint 2</summary>Chain the inclusions $S\subseteq A$ and $A\subseteq B$.</details>
<details><summary>Solution</summary>Let $S\in\mathcal P(A)$. Then $S\subseteq A$. If $x\in S$, then $x\in A$, and the hypothesis gives $x\in B$. Thus $S\subseteq B$, so $S\in\mathcal P(B)$. Since $S$ was arbitrary, the desired inclusion follows.</details>

## Summary

Membership is the basic question behind set notation. Inclusion is a universally quantified implication; equality requires both inclusions. Union, intersection, difference and relative complement translate into logical operations, making element arguments possible even for infinite sets. Products retain coordinate order, while power sets turn subsets into elements. For finite sets, independent choices give the product and power-set counts. These methods prepare us to define functions as assignments and relations as sets of ordered pairs.

## Sources and further reading

Richard Hammack, [*Book of Proof*, third edition](https://richardhammack.github.io/BookOfProof/), Chapter 1, offers further examples of sets and set operations. The discussion above is independently written; that book retains its own licence. For related sets, functions, relations and closure, see Euler's [discrete mathematics chapter](../discrete-mathematics-proof-counting-structure/sets-functions-relations-orders.md).
