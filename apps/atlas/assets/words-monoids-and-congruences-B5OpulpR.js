var e=`---
parent_id: book-formal-computation-proof-reference
chapter_id: words-monoids-and-congruences
title: "Words, Monoids, Quotients, and Right Congruences"
level: advanced-undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Words, Monoids, Quotients, and Right Congruences

A finite word can be stored as a list, printed as text, or transmitted as a signal. For proofs, its decisive feature is algebraic: words compose by concatenation, there is an empty word, and every map from letters into a monoid extends uniquely to all words. This chapter develops that free structure, then asks what information about a prefix is relevant to a language. The answer—right congruence—will become the state space of a canonical automaton in Chapter 2.

The prerequisites are sets, functions, equivalence relations, induction, and elementary algebraic proofs. Every alphabet in this chapter is finite unless explicitly stated. Finiteness of the alphabet is not needed for the free-monoid construction, but it matters to the computational models that follow.

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

The converse also holds: the quotient map into the syntactic monoid recognizes $L$, using the set of classes contained in $L$. Thus finite syntactic monoids characterize regular languages, once Chapter 2 establishes the equivalent finite-state criterion.

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

Chapter 2 turns finite right-congruence classes into canonical states and proves that this construction is minimal.

## Exercises with complete solutions

### 1. Cancellation for words

Prove that $ux=uy$ implies $x=y$, and that $xu=yu$ implies $x=y$.

**Solution.** Equality of sequences gives equal lengths, so $|u|+|x|=|u|+|y|$ and $|x|=|y|$. Removing the identical first $|u|$ entries from $ux=uy$ leaves $x=y$. The suffix version removes the identical last $|u|$ entries. This uses the concrete free monoid; cancellation need not hold in an arbitrary monoid.

### 2. Reversal is not a homomorphism

Let $rev(a_1...a_n)=a_n...a_1$. State and prove its multiplication law.

**Solution.** The law is $rev(uv)=rev(v)rev(u)$. Reading the concatenation backward encounters the letters of $v$ backward before those of $u$. Thus reversal is an antihomomorphism. It is a homomorphism only in degenerate situations where all relevant words commute.

### 3. A universal extension

Map each letter $a$ to the function $n \\mapsto  n+1$ under composition. What is the unique extension on a word $w$?

**Solution.** Every letter contributes one composition, so the extension maps $w$ to $n \\mapsto  n+|w|$. The empty word maps to the identity function. This is the length homomorphism represented as an action on natural numbers.

### 4. Star as a closure

Prove $(K^{\\ast})^{\\ast}=K^{\\ast}$.

**Solution.** Since every one-factor product from $K^{\\ast}$ lies in $(K^{\\ast})^{\\ast}$, we have $K^{\\ast}\\subseteq(K^{\\ast})^{\\ast}$. Conversely, every element of $(K^{\\ast})^{\\ast}$ is a concatenation of finitely many words, each itself a finite concatenation of members of $K$. Flattening the finite list yields a finite concatenation from $K$, hence an element of $K^{\\ast}$.

### 5. A failed distributive law

Give languages showing $K(L \\cap M)$ need not equal $KL \\cap KM$.

**Solution.** Over $\\{a,b\\}$, take $K=\\{\\varepsilon,a\\}$, $L=\\{b\\}$, and $M=\\{ab\\}$. Then $L \\cap M$ is empty, so the left side is empty. But $ab$ lies in $KL$ as $a$ followed by $b$, and in $KM$ as $\\varepsilon$ followed by $ab$. Thus the right side contains $ab$.

### 6. Modular length congruence

For $m\\ge 1$ and a nonempty alphabet $\\Sigma$, define $x \\equiv y$ when $|x|$ and $|y|$ have the same remainder modulo $m$. Prove this is a two-sided congruence and identify the quotient monoid.

**Solution.** Congruence modulo $m$ is an equivalence relation. If $|x| \\equiv |y|$ and $|u| \\equiv |v|$, then $|xu|=|x|+|u| \\equiv |y|+|v|=|yv|$. Every residue occurs because a fixed letter has words of every nonnegative length. The classes multiply by addition of remainders, so the quotient is the additive cyclic monoid $\\mathbb{Z}/m\\mathbb{Z}$. The nonempty-alphabet hypothesis matters: for $\\Sigma=\\varnothing$, $\\Sigma^{\\ast}=\\{\\varepsilon\\}$ and the quotient has one class.

### 7. Last-letter right congruence

Over $\\{a,b\\}$, partition words into $\\varepsilon$, words ending in $a$, and words ending in $b$. Prove this is a right congruence. Is it a two-sided congruence?

**Solution.** Appending a nonempty suffix makes the final class depend only on the suffix's last letter; appending $\\varepsilon$ preserves the class. Hence equivalent words remain equivalent under every common suffix. This particular relation is also left-stable: if two equivalent words are nonempty, prefixing either by the same word does not change their common last letter; if they are empty, both prefixed results are the same word. Therefore it is a two-sided congruence, not merely a right congruence.

### 8. Residual of an ending language

Let $L$ be binary words ending in $01$. Compute $\\varepsilon^{-1}L$, $0^{-1}L$, and $01^{-1}L$ descriptively.

**Solution.** The first is $L$. For prefix $0$, a continuation succeeds when the combined word ends in $01$; this includes continuation $1$ and all continuations already ending in $01$. For prefix $01$, $\\varepsilon$ succeeds, and every nonempty continuation succeeds exactly when that continuation itself ends in $01$. These three residuals differ, witnessed respectively by suitable continuations $\\varepsilon$ and $1$.

### 9. Nerode right stability

Prove directly that equality of residuals is preserved after appending a word $u$, not just a letter.

**Solution.** If $x^{-1}L=y^{-1}L$, then for every $z$, $(xu)z=x(uz)$ belongs to $L$ exactly when $y(uz)=(yu)z$ does. Therefore $(xu)^{-1}L=(yu)^{-1}L$.

### 10. A finite-index lower bound

Show that the language of binary words whose length is $0 \\bmod 5$ has at least five Nerode classes.

**Solution.** Use prefixes $\\varepsilon,0,00,000,0000$. For lengths $i<j<5$, append $0^{5-i}$. The first resulting length is divisible by five, while the second has length $5+(j-i)$, not divisible by five. Hence all five prefixes are pairwise distinguishable.

### 11. Syntactic versus Nerode

Prove $x \\equiv_L y$ implies $x \\mathrel{\\sim_L} y$.

**Solution.** Syntactic equivalence quantifies over all left and right contexts. Choose the left context $p=\\varepsilon$; then for every suffix $q$, $xq \\in L$ exactly when $yq \\in L$. This is precisely Nerode equivalence.

### 12. Infinite memory for equal counts

Let $E=\\{w \\in \\{a,b\\}^{\\ast} : \\#a(w)=\\#b(w)\\}$. Prove $E$ has infinite Nerode index.

**Solution.** Consider prefixes $a^i$. If $i<j$, append $b^i$. Then $a^ib^i$ has equal counts and belongs to $E$, whereas $a^jb^i$ has more $a$ symbols and does not. The prefixes are pairwise distinguishable, so there are infinitely many classes.

[Book overview](#/item/book-formal-computation-proof-reference)
`;export{e as default};