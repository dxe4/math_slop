
# Sets, Functions, Relations, Orders, and Closure

A box of index cards can be organized in many ways. We may group cards by color, assign each card a shelf, record which cards cite which others, or say that one card should appear no later than another. These are not cosmetic descriptions. They lead to different mathematical objects—sets, functions, equivalence relations, directed relations, and partial orders—and each object licenses different conclusions.

This chapter assumes only careful reading and finite examples. Its central habit is: **state the kind of structure before using properties of that structure**.

## 1. Sets record membership

A **set** is determined by which objects belong to it, not by their order or repetition in a list. Thus $\{2,5\}$ and $\{5,2,2\}$ describe the same set. We write $x\in A$ when $x$ is an element of $A$, and $x\notin A$ otherwise.

The statement $A\subseteq B$ means

> for every object $x$, if $x\in A$, then $x\in B$.

This quantified definition immediately supplies two proof patterns. To prove $A\subseteq B$, begin with an arbitrary $x\in A$ and derive $x\in B$. To disprove it, produce one $x\in A$ with $x\notin B$.

Two sets are equal exactly when they have the same members.

**Theorem 21.1 (double inclusion).** For sets $A$ and $B$, $A=B$ if and only if both $A\subseteq B$ and $B\subseteq A$.

**Proof.** If $A=B$, then every member of either set belongs to the other, giving both inclusions. Conversely, suppose both inclusions hold. An arbitrary object belongs to $A$ exactly when it belongs to $B$: the forward direction uses $A\subseteq B$, and the reverse uses $B\subseteq A$. Therefore the membership conditions agree, so the sets are equal. ∎

This proof may look obvious, but it prevents a frequent error: proving only that everything in $A$ lies in $B$ and then announcing equality. That establishes at most $A\subseteq B$.

For sets $A$ and $B$:

- $A\cup B=\{x:x\in A\text{ or }x\in B\}$ is their **union**;
- $A\cap B=\{x:x\in A \land x\in B\}$ is their **intersection**;
- $A\setminus B=\{x:x\in A \land x\notin B\}$ is their **difference**;
- $A\times B=\{(a,b):a\in A \land b\in B\}$ is their **Cartesian product**.

The word “or” in a union is inclusive. An object in both sets still belongs to the union once. Ordered pairs do remember position, so usually $A\times B\ne B\times A$ even though $A\cup B=B\cup A$.

### Worked membership proof: a distributive law

We prove

$$A\cap (B\cup C)=(A\cap B)\cup (A\cap C)$$

Let $x$ be arbitrary. Then

$$x\in A\cap (B\cup C)$$

means $x\in A$ and ($x\in B$ or $x\in C$). Distributing “and” over “or,” this is equivalent to ($x\in A$ and $x\in B$) or ($x\in A$ and $x\in C$). That is exactly the condition $x\in (A\cap B)\cup (A\cap C)$. Because the equivalence holds for every $x$, the sets are equal.

A Venn diagram may suggest the identity. The membership argument proves it without relying on a picture or on the sets being finite.

## 2. Power sets turn choices into elements

The **power set** $P(A)$ is the set of all subsets of $A$. If $A=\{p,q\}$, then

$$P(A)=\{\varnothing,\{p\},\{q\},\{p,q\}\}$$

Notice the levels: $p\in A$, $\{p\}\subseteq A$, and $\{p\}\in P(A)$. Confusing an element with the singleton containing it changes the statement.

**Theorem 21.2.** If $A$ is finite with $|A|=n$, then $|P(A)|=2^{n}$.

**Proof.** List the elements as $a_{1},\ldots,a_{n}$. A subset makes one of two independent decisions for each $a_{i}$: exclude or include it. Every sequence of $n$ binary decisions produces exactly one subset, and every subset produces exactly one sequence. By the product rule there are $2\cdot \ldots\cdot 2=2^{n}$ subsets. ∎

The proof is a bijection between subsets and binary strings. That connection will reappear in counting and in exact finite computation.

## 3. Functions assign, images collect, inverse images test

A **function** $f:A\to B$ assigns to every $a\in A$ exactly one value $f(a)\in B$. The set $A$ is the domain and $B$ is the codomain. The codomain is part of the function’s specification: the same formula with a different codomain can have a different surjectivity claim.

For $S\subseteq A$, its **image** is

$$f(S)=\{f(s):s\in S\}$$

For $T\subseteq B$, its **inverse image** is

$$f^{-1}(T)=\{a\in A:f(a)\in T\}$$

The inverse-image notation does not require $f$ to possess an inverse function. It asks which inputs land in a set.

A function is:

- **injective** if $f(a)=f(a')$ implies $a=a'$;
- **surjective** if every $b\in B$ equals $f(a)$ for at least one $a\in A$;
- **bijective** if it is both.

### Worked finite example

Let $A=\{0,1,2,3\}$, $B=\{\text{even},\text{odd}\}$, and let $f$ send an integer to its parity. Then $f$ is surjective but not injective: $f(0)=f(2)=\text{even}$. For $T=\{\text{odd}\}$, the inverse image is $f^{-1}(T)=\{1,3\}$. The fibers of $f$—the inverse images of singleton outputs—partition $A$ into $\{0,2\}$ and $\{1,3\}$.

**Pigeonhole consequence.** If finite sets satisfy $|A|>|B|$, no function $A\to B$ is injective.

**Proof.** If the function were injective, distinct inputs would occupy distinct outputs, requiring at least $|A|$ outputs in $B$. But $B$ has fewer than $|A|$ elements. This contradiction proves that some two inputs share an output. ∎

## 4. Relations make selected pairs meaningful

A **binary relation** $R$ from $A$ to $B$ is a subset of $A\times B$. When $A=B$, we call it a relation on $A$ and write $aRb$ for $(a,b)\in R$.

This definition is deliberately broad. “Is equal to,” “is a divisor of,” “is within one unit of,” “sent a message to,” and “comes before” are all relations, but they obey different laws.

For a relation on $A$:

- **reflexive:** $aRa$ for every $a\in A$;
- **symmetric:** $aRb$ implies $bRa$;
- **antisymmetric:** $aRb$ and $bRa$ imply $a=b$;
- **transitive:** $aRb$ and $bRc$ imply $aRc$.

Symmetric and antisymmetric are not opposites. Equality is both: $a=b$ implies $b=a$, and having both $a=b$ and $b=a$ certainly implies $a=b$. The empty relation on a nonempty set is symmetric and transitive, but not reflexive. Properties must be checked from quantifiers, not from the everyday sound of the words.

### Relation audit

On integers, define $aRb$ when $a-b$ is even.

- Reflexive: $a-a=0$ is even.
- Symmetric: if $a-b$ is even, then $b-a=-(a-b)$ is even.
- Transitive: if $a-b$ and $b-c$ are even, their sum $a-c$ is even.

So $R$ has the three properties needed for an equivalence relation.

By contrast, “within distance 1” is reflexive and symmetric but not transitive: $0$ is within $1$ of $1$, and $1$ is within $1$ of $2$, but $0$ is not within $1$ of $2$.

## 5. Equivalence relations are exactly partitions

An **equivalence relation** is reflexive, symmetric, and transitive. The **equivalence class** of $a$ is

$$[a]=\{x\in A:xRa\}$$

**Theorem 21.3.** Equivalence classes of an equivalence relation on $A$ form a partition of $A$: every element lies in a class, no class is empty, and any two classes are equal or disjoint.

**Proof.** Reflexivity gives $aRa$, so $a\in [a]$; thus every element lies in a nonempty class. Suppose $[a]$ and $[b]$ overlap at $x$. Then $xRa$ and $xRb$. Symmetry turns $xRa$ into $aRx$, and transitivity with $xRb$ gives $aRb$. We now show the classes are equal. If $y\in [a]$, then $yRa$; combining $yRa$ with $aRb$ gives $yRb$, so $y\in [b]$. Hence $[a]\subseteq [b]$. Symmetry gives $bRa$, and the same argument yields $[b]\subseteq [a]$. Therefore the classes are equal. If two classes do not overlap, they are disjoint. ∎

The converse is also true. Given a partition of $A$, declare $aRb$ when $a$ and $b$ lie in the same block. Same-block membership is reflexive, symmetric, and transitive. Thus equivalence relations and partitions are two views of the same structure: pairwise comparison versus grouped classes.

### Why well-definedness matters

Suppose we define an operation on equivalence classes by choosing representatives. The output must not depend on that choice. For integers modulo $5$, define $[a]+[b]=[a+b]$. If $a\equiv a'$ and $b\equiv b' \pmod 5$, then $5$ divides both differences, hence divides $(a+b)-(a'+b')$; therefore $[a+b]=[a'+b']$. This proof is the well-definedness contract. Without it, notation on classes may conceal an ambiguous rule.

## 6. Partial orders organize compatible comparisons

A **partial order** $\le$ on $P$ is reflexive, antisymmetric, and transitive. A set with a partial order is a **poset**. The order is *partial* because two elements may be incomparable.

Examples:

- ordinary $\le$ on numbers is a total order;
- subset inclusion $\subseteq$ orders $P(A)$ but $\{p\}$ and $\{q\}$ are incomparable;
- divisibility orders the positive divisors of a fixed integer;
- the reflexive-transitive reachability closure of direct prerequisite edges becomes a partial order only after directed cycles are ruled out or their mutually reachable vertices are quotiented into equivalence classes.

For $S\subseteq P$, an element $m\in S$ is **maximal in $S$** if no distinct $s\in S$ satisfies $m\le s$. A **greatest element** $g\in S$ satisfies $s\le g$ for every $s\in S$. A greatest element is maximal and unique; a finite poset can have several maximal elements and no greatest element.

### Worked example: divisors of 12

Order $\{1,2,3,4,6,12\}$ by divisibility. The least element is $1$, and the greatest is $12$. Restrict to $\{2,3,4,6\}$. Then $4$ and $6$ are both maximal: neither divides the other, and neither has a larger member inside the restricted set. There is no greatest element, because no member is divisible by every other member.

**Theorem 21.4.** Every finite nonempty poset has a maximal element.

**Proof.** Choose any $x_{0}$. If it is maximal, stop. Otherwise choose $x_{1}$ strictly above it. If $x_{1}$ is not maximal, choose $x_{2}$ strictly above it, and continue. Antisymmetry and strict increase prevent repetition. Because the poset is finite, this process cannot continue forever; it stops at a maximal element. ∎

Finiteness is load-bearing. In the positive integers under ordinary $\le$, every integer has a larger one, so there is no maximal element.

## 7. Lattices provide best common bounds

In a poset, an **upper bound** of $x$ and $y$ lies above both. Their **join** $x\lor y$, when it exists, is the least such upper bound. Dually, their **meet** $x\land y$ is the greatest lower bound. A **lattice** is a poset in which every pair has both a meet and a join.

In $P(A)$ ordered by inclusion,

$S\land T=S\cap T$ and $S\lor T=S\cup T$.

In the positive divisors of $n$ ordered by divisibility,

$a\land b=\gcd(a,b)$ and $a\lor b=\operatorname{lcm}(a,b)$.

These formulas are not definitions pasted onto unrelated examples. Intersection is the greatest set contained in both; union is the least set containing both. The gcd is the greatest common divisor; the lcm is the least common multiple.

A bounded lattice has a least element $0$ and a greatest element $1$ (these symbols need not be numbers). A **complement** of $x$ is an element $y$ with $x\land y=0$ and $x\lor y=1$. In a power-set lattice, the complement is set complement. In an arbitrary lattice, complements may fail to exist or may not be unique.

## 8. Closure operations formalize “add everything forced”

A **closure operator** on $P(A)$ is a function $\operatorname{cl}:P(A)\to P(A)$ satisfying, for all $S,T\subseteq A$:

1. extensivity: $S\subseteq \operatorname{cl}(S)$;
2. monotonicity: if $S\subseteq T$, then $\operatorname{cl}(S)\subseteq \operatorname{cl}(T)$;
3. idempotence: $\operatorname{cl}(\operatorname{cl}(S))=\operatorname{cl}(S)$.

The shape of these axioms explains the word closure. We may add consequences, adding more starting information cannot remove consequences, and once all consequences are present another pass changes nothing.

### Worked closure: reachability

Let a directed graph have vertices $\{a,b,c,d\}$ and arrows $a\to b$, $b\to c$, $a\to d$. Define $\operatorname{cl}(S)$ as all vertices reachable from some vertex of $S$, including $S$ itself by a path of length zero. Then

$\operatorname{cl}(\{a\})=\{a,b,c,d\}$, $\operatorname{cl}(\{b\})=\{b,c\}$, and $\operatorname{cl}(\{c,d\})=\{c,d\}$.

Extensivity uses the length-zero path. Monotonicity holds because every path starting in $S$ also starts in the larger set $T$ when $S\subseteq T$. Idempotence holds because a path from a reachable vertex can be concatenated with the path that first reached it.

The family of closed sets—those satisfying $\operatorname{cl}(S)=S$—is closed under arbitrary intersections. Let $\{C_{i}\}$ be any nonempty family of closed sets and put $D=\cap _{i} C_{i}$. Because $D\subseteq C_{i}$ for each $i$, monotonicity gives $\operatorname{cl}(D)\subseteq \operatorname{cl}(C_{i})=C_{i}$ for every $i$; hence $\operatorname{cl}(D)\subseteq D$. Extensivity gives $D\subseteq \operatorname{cl}(D)$, so equality holds. Under the usual convention that the intersection of the empty family of subsets of $A$ is $A$, that case is closed too: extensivity gives $A\subseteq \operatorname{cl}(A)$, while the codomain $P(A)$ gives $\operatorname{cl}(A)\subseteq A$.

## 9. Common errors and boundary cases

1. **Element versus subset:** $x\in A$ and $\{x\}\subseteq A$ are related but differently typed statements.
2. **One inclusion mistaken for equality:** always account for both directions.
3. **Inverse image mistaken for inverse function:** $f^{-1}(T)$ exists for every subset $T$ of the codomain.
4. **Symmetric mistaken for antisymmetric:** write the quantifiers and test a two-element pair.
5. **Maximal mistaken for greatest:** maximal means “nothing strictly above it here,” not “above everything.”
6. **A diagram treated as the definition:** Hasse diagrams omit reflexive and transitive edges; the underlying order still contains them.
7. **A representative rule assumed well-defined:** change representatives and prove the output class stays fixed.
8. **Repeated closure until it looks stable:** idempotence is a property to prove, not a visual impression.

## 10. Exercises with worked solutions

### DM-CH01-E001 — inverse images preserve set operations

For a function $f:A\to B$ and subsets $U,V\subseteq B$, prove

$$f^{-1}(U\cap V)=f^{-1}(U)\cap f^{-1}(V)$$

#### DM-CH01-E001 — Solution

Let $a\in A$. Then $a\in f^{-1}(U\cap V)$ exactly when $f(a)\in U\cap V$, which means both $f(a)\in U$ and $f(a)\in V$. Those conditions say $a\in f^{-1}(U)$ and $a\in f^{-1}(V)$, equivalently $a\in f^{-1}(U)\cap f^{-1}(V)$. The membership conditions agree for every $a$, proving equality. No injectivity or surjectivity is needed.

### DM-CH01-E002 — classify a relation

On all finite words, let $uRv$ mean that $u$ and $v$ have the same length. Show that $R$ is an equivalence relation and identify its classes.

#### DM-CH01-E002 — Solution

Every word has the same length as itself, so $R$ is reflexive. Equality of lengths is symmetric. If $u$ and $v$ have equal length and $v$ and $w$ have equal length, then $u$ and $w$ have equal length, so $R$ is transitive. The class indexed by $n\ge 0$ consists of every word of length $n$; the empty word forms the $n=0$ class.

### DM-CH01-E003 — maximal is not maximum

In $P(\{1,2,3\})$ ordered by inclusion, consider $S=\{\{1\},\{2,3\}\}$. Find all maximal, minimal, greatest, and least elements of $S$.

#### DM-CH01-E003 — Solution

The two members are incomparable: $\{1\}$ is not contained in $\{2,3\}$, and $\{2,3\}$ is not contained in $\{1\}$. Therefore both are maximal and both are minimal within $S$. A greatest element would have to contain the other member, and a least element would have to be contained in the other, so neither exists. The fact that $\{2,3\}$ has larger cardinality is irrelevant to the inclusion comparison.

### DM-CH01-E004 — closure from an equivalence relation

For an equivalence relation $R$ on $A$, define $\operatorname{cl}(S)$ as the union of all equivalence classes that meet $S$. Prove that this is a closure operator.

#### DM-CH01-E004 — Solution

Every $s\in S$ lies in its own class, which meets $S$, so $S\subseteq \operatorname{cl}(S)$. If $S\subseteq T$, every class meeting $S$ also meets $T$, giving monotonicity. Finally, $\operatorname{cl}(S)$ is already a union of complete equivalence classes. The classes that meet $\operatorname{cl}(S)$ are exactly those already included, because distinct classes are disjoint. Taking closure again adds nothing, so $\operatorname{cl}(\operatorname{cl}(S))=\operatorname{cl}(S)$.

## Chapter summary

Sets turn questions into membership conditions. Functions separate assignment from image and inverse image. Relations are selected ordered pairs whose laws must be audited. Equivalence relations and partitions encode the same grouping structure. Partial orders permit incomparability; lattices supply best common bounds. Closure operators capture the disciplined act of adding every forced consequence. These objects become useful only when their hypotheses—not their names—drive the proof.
