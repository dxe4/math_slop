var e=`---
parent_id: book-automata-computability-complexity
chapter_id: words-monoids-and-congruences
title: "Words, Monoids, Quotients, and Right Congruences"
level: advanced-undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Words, Monoids, Quotients, and Right Congruences

A finite word can be stored as a list, printed as text, or transmitted as a signal. For proofs, its decisive feature is algebraic: words compose by concatenation, there is an empty word, and every map from letters into a monoid extends uniquely to all words. This chapter develops that free structure, then asks what information about a prefix is relevant to a language. The answer—right congruence—is the state space of the canonical automaton proved in Chapter 3.

The prerequisites are sets, functions, equivalence relations, induction, and elementary algebraic proofs. Every alphabet in this chapter is finite unless explicitly stated. Finiteness of the alphabet is not needed for the free-monoid construction, but it matters to the computational models that follow.

## Preparation and outcomes

The automata and residual constructions of [Chapter 3](/books/library-book-automata-computability-complexity/automata-equivalence-and-minimization/) are available, but the algebraic vocabulary is developed from its definitions here. Required preparation is equivalence relations, functions, induction and well-defined operations on quotient classes. You will distinguish right actions from quotient multiplication, prove recognition by a finite transition monoid, and see precisely which context information the syntactic monoid retains. Finite alphabets are used for computational descriptions; the free-monoid theorem itself does not need finiteness.

## 1. Words and the free monoid

An **alphabet** $\\Sigma$ is a set of symbols. A **word** over $\\Sigma$ is a finite sequence of symbols. The empty sequence is $\\varepsilon$; the set of all words is $\\Sigma^{\\ast} $. If $u=a_1...a_m$ and $v=b_1...b_n$, their concatenation is

$uv=a_1...a_mb_1...b_n$.

Concatenation is associative, $\\varepsilon$ is a two-sided identity, and length satisfies $|uv|=|u|+|v|$. Thus $(\\Sigma^{\\ast} , concatenation, \\varepsilon)$ is a **monoid**: a set with an associative binary operation and an identity.

The notation $\\Sigma^{+}$ means the nonempty words, and $\\Sigma^n$ means the words of length exactly $n$. Be careful: $\\Sigma^{\\ast} $ is a set of sequences, not a set of commutative products. Over $\\{a,b\\}$, $ab$ and $ba$ usually differ.

### Structural induction on words

To prove $P(w)$ for every word, it is enough to prove $P(\\varepsilon)$ and, for every word $w$ and letter $a$, prove $P(w) \\Rightarrow  P(wa)$. This is ordinary induction on length with the final letter exposed. A left-handed version uses $aw$. Either is valid; mixing them silently can break a recursive definition.

### The universal property

Let $M$ be a monoid with operation written multiplicatively and identity $1$. Given any function $f:\\Sigma\\to M$, there is a unique monoid homomorphism $\\widehat{f}:\\Sigma^{\\ast} \\to M$ extending $f$. It is

$\\widehat{f}(a_1...a_n)=f(a_1)...f(a_n)$ and $\\widehat{f}(\\varepsilon)=1$.

Existence follows from the formula and associativity. For uniqueness, a homomorphism $g$ extending $f$ must satisfy

$g(a_1...a_n)=g(a_1)...g(a_n)=f(a_1)...f(a_n)$.

This theorem says that $\\Sigma^{\\ast} $ is the **free monoid on $\\Sigma$**. A letter assignment determines every compositional interpretation of words. Length is the extension of the constant letter map into $(N,+,0)$. Letter counts extend into $(N^\\Sigma,+,0)$. A transition action extends letter transitions to whole-word transitions.

## 2. Languages and their operations

A **language** is a subset $L$ of $\\Sigma^{\\ast} $. The word “language” supplies no effectiveness assumption: an arbitrary subset need not be decidable or describable by a finite object.

Boolean operations are inherited from sets. Concatenation and star are

$KL=\\{uv : u \\in K \\land v \\in L\\}$,

$K^{\\ast}=\\bigcup_{n\\ge 0} K^n$, where $K^0=\\{\\varepsilon\\}$.

Language concatenation is associative and has identity $\\{\\varepsilon\\}$. It distributes over union but generally not over intersection. Star is a least fixed point: if $F(X)=\\{\\varepsilon\\} \\cup KX$, then $K^{\\ast} $ is a fixed point of $F$ and is the least language $X$ satisfying $F(X) \\subseteq X$.

**Proof.** The identity $\\{\\varepsilon\\}\\cup K K^{\\ast}=K^{\\ast}$ follows by separating the zero-factor products from the positive-factor products. If $\\{\\varepsilon\\} \\cup KX \\subseteq X$, induction gives $K^n \\subseteq X$ for every $n$: the base uses $\\varepsilon \\in X$, and $K^{n+1}=KK^n \\subseteq KX \\subseteq X$. Therefore $K^{\\ast}  \\subseteq X$.

This fixed-point view will reappear in grammar derivation, program semantics, and temporal verification.

## 3. Equivalence relations compatible with composition

An equivalence relation $\\equiv$ on a monoid $M$ is a **two-sided congruence** when

$x \\equiv y$ and $u \\equiv v$ imply $xu \\equiv yv$.

Equivalently, it is stable under multiplying on either side. The quotient set $M/\\equiv$ then inherits a well-defined monoid product $[x][y]=[xy]$. Well-definedness is an obligation: if representatives change, congruence proves the product class does not.

A **right congruence** on $\\Sigma^{\\ast} $ is an equivalence relation stable under appending the same suffix:

$x \\equiv y \\Rightarrow  xz \\equiv yz$ for every $z$.

Stability under a single appended letter is enough, by induction on $z$. A right congruence need not respect prefixes on the left, so its quotient need not be a quotient monoid. It does, however, support a right action $[x] \\cdot a=[xa]$. That is exactly the operation required for a deterministic automaton state.

### Kernel relations

For a function $h:X\\to Y$, define $x \\equiv_h y$ when $h(x)=h(y)$. This is always an equivalence relation. If $h$ is a monoid homomorphism, its kernel relation is a two-sided congruence. Conversely, every congruence is the kernel relation of the quotient homomorphism $x \\mapsto [x]$.

This statement concerns the relation “has the same image,” not merely the subset of elements mapped to the identity. For groups the identity fibre determines the relation; for general monoids it may not.

## 4. Residual languages are observable futures

For a language $L$ and word $x$, the **left residual** (or left quotient) of $L$ by $x$ is

$x^{-1}L=\\{z \\in \\Sigma^{\\ast}  : xz \\in L\\}$.

Despite the notation, no inverse word is assumed. The residual is the set of continuations that make the current prefix succeed. Two prefixes are observationally indistinguishable for $L$ precisely when they have the same residual.

Define the **Nerode relation**

$x ~_L y \\iff for every z, xz \\in L \\iff yz \\in L$.

Equivalently, $x^{-1}L=y^{-1}L$. It is an equivalence relation. It is a right congruence because if $x ~_L y$, then for every $z$,

$(xa)z \\in L \\iff x(az) \\in L \\iff y(az) \\in L \\iff (ya)z \\in L$.

The language is saturated by its classes: $x \\in L \\iff y \\in L$ whenever $x ~_L y$, by choosing $z=\\varepsilon$.

### Example: parity and a final symbol

Let $L$ contain binary words with an even number of $1$ symbols. There are exactly two residuals, determined by whether the prefix has even or odd parity. Appending a $1$ swaps them; appending a $0$ preserves them.

For the language of binary words ending in $01$, the residuals distinguish three relevant histories: no useful suffix, suffix $0$, and suffix $01$. The full prefix is irrelevant; only its continuation behavior survives.

## 5. The syntactic congruence remembers contexts on both sides

The Nerode relation is tailored to deterministic reading from left to right. Algebraic language theory often uses the finer **syntactic congruence**:

$x \\equiv_L y \\iff \\forall p,q\\in\\Sigma^{\\ast},\\; (pxq \\in L \\iff pyq \\in L)$.

It is a two-sided congruence. Its quotient is the **syntactic monoid** of $L$. Taking $p=\\varepsilon$ shows syntactic equivalence implies Nerode equivalence, but the converse can fail because a right congruence does not promise compatibility with arbitrary left contexts.

If a homomorphism $h:\\Sigma^{\\ast} \\to M$ and subset $S \\subseteq M$ recognize $L$ through $L=h^{-1}(S)$, then equality under $h$ implies syntactic equivalence: equal images remain equal after multiplication by $h(p)$ and $h(q)$. Hence a finite recognizing monoid yields finite syntactic index.

The converse also holds: the quotient map into the syntactic monoid recognizes $L$, using the set of classes contained in $L$. Thus finite syntactic monoids characterize regular languages, using the equivalent finite-state criterion proved in Chapter 3.

## 6. Index is a memory lower bound

The **index** of an equivalence relation is its number of classes. If a deterministic machine puts prefixes $x$ and $y$ in the same state, then every common suffix produces the same final acceptance decision. Therefore $x ~_L y$. Any machine recognizing $L$ must have at least as many reachable states as there are Nerode classes.

This is already a lower-bound method. To show infinitely many classes, give an infinite family $x_0,x_1,...$ and, for every unequal pair, a distinguishing suffix $z$ such that exactly one of $x_iz,x_jz$ belongs to $L$.

For $L=\\{0^n1^n:n\\ge 0\\}$, prefixes $0^i$ are pairwise distinguishable. If $i<j$, suffix $1^i$ completes $0^i1^i$ but not $0^j1^i$. Thus the language has infinite Nerode index and cannot be remembered by finitely many states.

The quantifiers matter: a different witness suffix may be used for each pair. A finite test set cannot prove infinite index unless an additional theorem makes it complete.

## 7. Computable representations and proof boundaries

Finite words have canonical finite encodings once symbols are encoded. Arbitrary languages do not. A proof may treat $L \\subseteq \\Sigma^{\\ast} $ extensionally while an algorithm requires a finite description: automaton, expression, grammar, circuit, formula, or program.

Keep three questions separate:

1. **Expressiveness:** which languages can a representation describe?
2. **Succinctness:** how large must a description be?
3. **Effectiveness:** can membership, equivalence, or transformation be computed, and at what cost?

Two representation systems may describe the same languages while incurring exponentially different sizes. An existence proof for a finite quotient does not by itself provide an efficient construction from the input representation.

## 8. Failure modes and retrieval map

- $\\Sigma^{\\ast} $ includes $\\varepsilon$; $\\Sigma^{+}$ does not.
- A language is a set of words, not one word and not automatically decidable.
- A right congruence supports suffix extension; only a two-sided congruence supports quotient multiplication.
- $x^{-1}L$ is a residual notation, not an appeal to inverse elements.
- Pairwise sample agreement is not equivalence; Nerode equivalence quantifies over every suffix.
- Finite alphabet, finite word, finite language, and finite-index congruence are four different claims.

Chapter 3 turns finite right-congruence classes into canonical states and proves that this construction is minimal.


## Actions and multiplication conventions

A word acts on a DFA state by reading its letters from left to right. Let $T_w(q)=\\delta^*(q,w)$. The action law gives $T_{uv}=T_v\\circ T_u$ under ordinary function composition. To make $w\\mapsto T_w$ a monoid homomorphism, define multiplication of these transformations by $f\\cdot g=g\\circ f$. Its identity is the identity function. Associativity follows from associativity of composition: both $(f\\cdot g)\\cdot h$ and $f\\cdot(g\\cdot h)$ are $h\\circ g\\circ f$.

This convention records “perform the left action, then the right action”. One could instead use ordinary composition and an opposite-monoid convention, but the two conventions must not be mixed in a proof. The letter assignment extends uniquely by the free-monoid property only after the target operation and identity have been fixed.

**Theorem 4.1 (Finite-monoid recognition).** Over a finite alphabet, a language is regular if and only if it has the form $h^{-1}(S)$ for a homomorphism into a finite monoid $M$ and a subset $S\\subseteq M$.

*Proof.* From a DFA with $n$ states, take the monoid of all transformations $T_w$ induced by words, with the multiplication just defined. It is closed under multiplication and contains the identity induced by the empty word. There are at most $n^n$ functions on the state set, hence this monoid is finite. Let $S$ contain those transformations sending the initial state into the accepting set. Then $w$ is accepted exactly when $T_w\\in S$.

Conversely, use $M$ as a DFA state set, its identity as start and $S$ as acceptance. Define the transition on $a$ from $m$ to $m h(a)$. Induction on the input word gives state $h(w)$, since $h(\\varepsilon)=1$ and $h(wa)=h(w)h(a)$. The machine therefore recognises $h^{-1}(S)$. Unreachable monoid elements may be discarded if a reachable-state statement is desired. ∎

The number of transition transformations need not equal the minimum number of DFA states. A state describes one prefix's future from the designated start. A transformation describes the effect of a word from every possible state. These are related summaries with different observational power.

## The syntactic quotient is the coarsest sufficient monoid

**Lemma 4.2 (Two-sided compatibility).** The syntactic relation is a two-sided congruence and saturates its language.

*Proof.* Equality of every two-context membership answer is reflexive, symmetric and transitive. If $x\\equiv_L y$, then for fixed words $u,v$ and arbitrary outside contexts $p,q$, membership of $p(uxv)q=(pu)x(vq)$ agrees with that of $(pu)y(vq)=p(uyv)q$. Thus $uxv\\equiv_L uyv$. Applying this twice changes both factors in a product, which is the required congruence property. Empty outside contexts give membership agreement and hence saturation. ∎

If $h$ recognises $L$ and $h(x)=h(y)$, then for every $p,q$ the images $h(p)h(x)h(q)$ and $h(p)h(y)h(q)$ coincide. Their membership in the recognizing subset coincides, so $x\\equiv_L y$. Consequently any recognizing homomorphism's kernel refines the syntactic relation. The rule sending an image $h(x)$ to the class $[x]_L$ is well defined on the image monoid: equal images give equal classes. It is surjective and preserves multiplication. Thus the syntactic monoid is a quotient of every image monoid recognizing the language.

In particular a regular language has a finite syntactic monoid by Theorem 4.1. Conversely, its quotient map recognises it, so a finite syntactic monoid implies regularity. This gives the precise algebraic counterpart of the finite Nerode criterion. One should not replace “finite syntactic monoid” by “some finite number of example products”: the quotient's defining relation still quantifies over all contexts.

## Residuals and the direction of extension

For every language $L$ and words $x,a$, where $a$ may be a letter, the residual satisfies

$$(xa)^{-1}L=a^{-1}(x^{-1}L).$$

Indeed, $z$ belongs to the right side exactly when $az\\in x^{-1}L$, exactly when $xaz\\in L$. Thus reading a new letter updates the current residual by another left quotient. Despite the name “left quotient”, the machine's history is extended on the right; the left side of the membership test is the fixed processed prefix.

A right congruence supports this state action but need not support $[x][y]=[xy]$. In that proposed product, both representatives can change. Right stability controls changing the left representative while holding the suffix fixed; it does not control changing the right representative after a fixed prefix. A two-sided congruence supplies both obligations.

## Worked example 1: a compositional checksum

Let $M$ be addition modulo three with identity zero. Send letter $a$ to one and letter $b$ to two. The unique homomorphism has $h(w)=\\#a(w)+2\\#b(w)\\pmod3$. For $abba$ the sum is $1+2+2+1=6$, so $h(abba)=0$. Splitting it as $ab$ followed by $ba$ gives image zero plus zero, agreeing with the full computation.

To recognize words whose checksum is zero, store the current residue. Reading $a$ adds one and reading $b$ adds two. Start at zero and accept zero. The homomorphism identity proves the state invariant for every prefix. This is a finite recognition example, not a cryptographic collision-resistance claim: many words, including $\\varepsilon$ and $abba$, intentionally have the same checksum.

## Worked example 2: right stability without left stability

Let $L$ be binary words ending in $01$. Prefixes $\\varepsilon$ and $1$ are Nerode equivalent. For an empty continuation both reject. For a one-letter continuation, neither combined word ends in $01$. For a continuation of length at least two, acceptance depends only on its last two letters, so the two prefixes again agree.

Prefixing both histories by $0$ gives $0$ and $01$. They are not Nerode equivalent, because the empty continuation rejects the first and accepts the second. Thus this right congruence is not left-stable, and its classes cannot automatically be multiplied as monoid elements. The example also explains why knowing only the current state of a minimal DFA is weaker than knowing a word's transition action from every state.

## Worked example 3: the parity syntactic monoid

Let $L$ contain the words over $\\{a,b\\}$ with an even number of $a$ symbols. Words with the same parity remain equal in parity after adding any left and right contexts, so they are syntactically equivalent. Words with different parities are already distinguished by empty contexts. There are therefore exactly two syntactic classes, even and odd.

Concatenation adds parities modulo two. The quotient multiplication is $E E=E$, $E O=O E=O$ and $O O=E$, with identity $E$. The checksum homomorphism sending $a$ to $O$ and $b$ to $E$ recognises $L$ by subset $\\{E\\}$. Here the syntactic monoid and minimum DFA both have two elements, but that equality is a feature of this example, not a general theorem about their sizes.

## Congruence proofs as interface proofs

A quotient statement has three distinct obligations. First establish that the relation is an equivalence, so classes really form a partition. Then show that the proposed operation does not depend on representatives. Finally prove that the quotient operation has the claimed algebraic laws. A well-defined multiplication on a monoid quotient inherits associativity because both bracketings are the class of the same original product, and inherits the identity from the original identity class.

For a right-action quotient, the analogous conclusion is weaker but sufficient for deterministic reading. The state after a word is independent of the chosen representative and obeys the action law. It is unnecessary and potentially false to attach a quotient-monoid claim merely because a transition rule can be written on equivalence classes.

Finite recognition also does not make arbitrary language input effective. The theorems characterise the existence of finite summaries. Computing a syntactic monoid from an explicitly supplied DFA is a finite procedure, while an arbitrary extensional subset of all words need not come with any membership algorithm. The representation question remains separate from the quotient's mathematical definition.

## Exercises with complete solutions

### Exercise 1 — Cancellation for words
<a id="words-monoids-and-congruences-ex-1"></a>

Prove that $ux=uy$ implies $x=y$, and that $xu=yu$ implies $x=y$.

<details>
<summary>Hint 1</summary>

Compare equal sequences after their common prefix or suffix.

</details>
<details>
<summary>Hint 2</summary>

First equality of lengths tells you how much identical material can be removed.

</details>
<details>
<summary>Solution</summary>

**Solution.** Equality of sequences gives equal lengths, so $|u|+|x|=|u|+|y|$ and $|x|=|y|$. Removing the identical first $|u|$ entries from $ux=uy$ leaves $x=y$. The suffix version removes the identical last $|u|$ entries. This uses the concrete free monoid; cancellation need not hold in an arbitrary monoid.

</details>

### Exercise 2 — Reversal is not a homomorphism
<a id="words-monoids-and-congruences-ex-2"></a>

Let $rev(a_1...a_n)=a_n...a_1$. State and prove its multiplication law.

<details>
<summary>Hint 1</summary>

Read a concatenation from its end.

</details>
<details>
<summary>Hint 2</summary>

The second factor is encountered before the first factor.

</details>
<details>
<summary>Solution</summary>

**Solution.** The law is $rev(uv)=rev(v)rev(u)$. Reading the concatenation backward encounters the letters of $v$ backward before those of $u$. Thus reversal is an antihomomorphism. It is a homomorphism only in degenerate situations where all relevant words commute.

</details>

### Exercise 3 — A universal extension
<a id="words-monoids-and-congruences-ex-3"></a>

Map each letter $a$ to the function $n \\mapsto  n+1$ under composition. What is the unique extension on a word $w$?

<details>
<summary>Hint 1</summary>

Compose the letter translations once per letter.

</details>
<details>
<summary>Hint 2</summary>

The empty word must give the identity translation.

</details>
<details>
<summary>Solution</summary>

**Solution.** Every letter contributes one composition, so the extension maps $w$ to $n \\mapsto  n+|w|$. The empty word maps to the identity function. This is the length homomorphism represented as an action on natural numbers.

</details>

### Exercise 4 — Star as a closure
<a id="words-monoids-and-congruences-ex-4"></a>

Prove $(K^{\\ast})^{\\ast}=K^{\\ast}$.

<details>
<summary>Hint 1</summary>

A star-of-star word has finitely many finite lists of factors.

</details>
<details>
<summary>Hint 2</summary>

Flatten the lists and use a one-factor list for the converse.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since every one-factor product from $K^{\\ast}$ lies in $(K^{\\ast})^{\\ast}$, we have $K^{\\ast}\\subseteq(K^{\\ast})^{\\ast}$. Conversely, every element of $(K^{\\ast})^{\\ast}$ is a concatenation of finitely many words, each itself a finite concatenation of members of $K$. Flattening the finite list yields a finite concatenation from $K$, hence an element of $K^{\\ast}$.

</details>

### Exercise 5 — A failed distributive law
<a id="words-monoids-and-congruences-ex-5"></a>

Give languages showing $K(L \\cap M)$ need not equal $KL \\cap KM$.

<details>
<summary>Hint 1</summary>

Two concatenations can have different split positions.

</details>
<details>
<summary>Hint 2</summary>

Let one left factor be empty and another be a single letter.

</details>
<details>
<summary>Solution</summary>

**Solution.** Over $\\{a,b\\}$, take $K=\\{\\varepsilon,a\\}$, $L=\\{b\\}$, and $M=\\{ab\\}$. Then $L \\cap M$ is empty, so the left side is empty. But $ab$ lies in $KL$ as $a$ followed by $b$, and in $KM$ as $\\varepsilon$ followed by $ab$. Thus the right side contains $ab$.

</details>

### Exercise 6 — Modular length congruence
<a id="words-monoids-and-congruences-ex-6"></a>

For $m\\ge 1$ and a nonempty alphabet $\\Sigma$, define $x \\equiv y$ when $|x|$ and $|y|$ have the same remainder modulo $m$. Prove this is a two-sided congruence and identify the quotient monoid.

<details>
<summary>Hint 1</summary>

Use additivity of word length.

</details>
<details>
<summary>Hint 2</summary>

A fixed letter realises every nonnegative length when the alphabet is nonempty.

</details>
<details>
<summary>Solution</summary>

**Solution.** Congruence modulo $m$ is an equivalence relation. If $|x| \\equiv |y|$ and $|u| \\equiv |v|$, then $|xu|=|x|+|u| \\equiv |y|+|v|=|yv|$. Every residue occurs because a fixed letter has words of every nonnegative length. The classes multiply by addition of remainders, so the quotient is the additive cyclic monoid $\\mathbb{Z}/m\\mathbb{Z}$. The nonempty-alphabet hypothesis matters: for $\\Sigma=\\varnothing$, $\\Sigma^{\\ast}=\\{\\varepsilon\\}$ and the quotient has one class.

</details>

### Exercise 7 — Last-letter right congruence
<a id="words-monoids-and-congruences-ex-7"></a>

Over $\\{a,b\\}$, partition words into $\\varepsilon$, words ending in $a$, and words ending in $b$. Prove this is a right congruence. Is it a two-sided congruence?

<details>
<summary>Hint 1</summary>

Separate the empty suffix from nonempty suffixes.

</details>
<details>
<summary>Hint 2</summary>

Also check what a common left prefix does to a nonempty final letter.

</details>
<details>
<summary>Solution</summary>

**Solution.** Appending a nonempty suffix makes the final class depend only on the suffix's last letter; appending $\\varepsilon$ preserves the class. Hence equivalent words remain equivalent under every common suffix. This particular relation is also left-stable: if two equivalent words are nonempty, prefixing either by the same word does not change their common last letter; if they are empty, both prefixed results are the same word. Therefore it is a two-sided congruence, not merely a right congruence.

</details>

### Exercise 8 — Residual of an ending language
<a id="words-monoids-and-congruences-ex-8"></a>

Let $L$ be binary words ending in $01$. Compute $\\varepsilon^{-1}L$, $0^{-1}L$, and $01^{-1}L$ descriptively.

<details>
<summary>Hint 1</summary>

Ask which continuations complete the suffix 01.

</details>
<details>
<summary>Hint 2</summary>

The empty continuation and the single letter one separate the three histories.

</details>
<details>
<summary>Solution</summary>

**Solution.** The first is $L$. For prefix $0$, a continuation succeeds when the combined word ends in $01$; this includes continuation $1$ and all continuations already ending in $01$. For prefix $01$, $\\varepsilon$ succeeds, and every nonempty continuation succeeds exactly when that continuation itself ends in $01$. These three residuals differ, witnessed respectively by suitable continuations $\\varepsilon$ and $1$.

</details>

### Exercise 9 — Nerode right stability
<a id="words-monoids-and-congruences-ex-9"></a>

Prove directly that equality of residuals is preserved after appending a word $u$, not just a letter.

<details>
<summary>Hint 1</summary>

Combine the appended word with an arbitrary later suffix.

</details>
<details>
<summary>Hint 2</summary>

Apply the original residual equality to that combined continuation.

</details>
<details>
<summary>Solution</summary>

**Solution.** If $x^{-1}L=y^{-1}L$, then for every $z$, $(xu)z=x(uz)$ belongs to $L$ exactly when $y(uz)=(yu)z$ does. Therefore $(xu)^{-1}L=(yu)^{-1}L$.

</details>

### Exercise 10 — A finite-index lower bound
<a id="words-monoids-and-congruences-ex-10"></a>

Show that the language of binary words whose length is $0 \\bmod 5$ has at least five Nerode classes.

<details>
<summary>Hint 1</summary>

Use prefixes of five distinct length remainders.

</details>
<details>
<summary>Hint 2</summary>

Complete one remainder to a multiple of five and compare the other.

</details>
<details>
<summary>Solution</summary>

**Solution.** Use prefixes $\\varepsilon,0,00,000,0000$. For lengths $i<j<5$, append $0^{5-i}$. The first resulting length is divisible by five, while the second has length $5+(j-i)$, not divisible by five. Hence all five prefixes are pairwise distinguishable.

</details>

### Exercise 11 — Syntactic versus Nerode
<a id="words-monoids-and-congruences-ex-11"></a>

Prove $x \\equiv_L y$ implies $x \\mathrel{\\sim_L} y$.

<details>
<summary>Hint 1</summary>

The syntactic definition permits every left context.

</details>
<details>
<summary>Hint 2</summary>

Choose the empty left context and retain arbitrary right contexts.

</details>
<details>
<summary>Solution</summary>

**Solution.** Syntactic equivalence quantifies over all left and right contexts. Choose the left context $p=\\varepsilon$; then for every suffix $q$, $xq \\in L$ exactly when $yq \\in L$. This is precisely Nerode equivalence.

</details>

### Exercise 12 — Infinite memory for equal counts
<a id="words-monoids-and-congruences-ex-12"></a>

Let $E=\\{w \\in \\{a,b\\}^{\\ast} : \\#a(w)=\\#b(w)\\}$. Prove $E$ has infinite Nerode index.

<details>
<summary>Hint 1</summary>

Use prefixes containing only a symbols.

</details>
<details>
<summary>Hint 2</summary>

A matching block of b symbols distinguishes each chosen shorter prefix.

</details>
<details>
<summary>Solution</summary>

**Solution.** Consider prefixes $a^i$. If $i<j$, append $b^i$. Then $a^ib^i$ has equal counts and belongs to $E$, whereas $a^jb^i$ has more $a$ symbols and does not. The prefixes are pairwise distinguishable, so there are infinitely many classes.

</details>

[Book overview](#/item/book-automata-computability-complexity)

## Sources

The CC BY-SA 4.0 Euler source of the same chapter name in *Formal Computation: Languages, Semantics, and Verification* supplies the retained mathematics and twelve original exercises. All additional proofs, concrete examples and staged hints are newly written. For primary companion teaching material see [Michael Sipser’s MIT lecture collection](https://www-math.mit.edu/~sipser/18404/Lectures_Fall_2020/index.html). Existing author code, where present, is an inert mathematical example; no code or tests have been executed here.

## Summary

Word concatenation is a free monoid operation, so letter assignments extend uniquely once the target multiplication is fixed. Right congruence is sufficient for an automaton action, while quotient multiplication needs two-sided compatibility. Finite transition monoids recognize exactly regular languages, and the syntactic quotient retains all two-sided context observations. The worked examples distinguish those summaries explicitly. These algebraic facts support the next chapter’s logical and aperiodic characterisations.
`;export{e as default};