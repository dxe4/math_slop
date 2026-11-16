
# Represent a finite operation safely

## Why representation matters

Before you can test a group axiom, enumerate a subgroup, or compute a quotient, you need a concrete, unambiguous way to store a finite binary operation in a computer or on paper. The representation you choose affects correctness, speed, and clarity. A poor representation invites off-by-one errors, silent relabelling bugs, and confusion between an element's name and its internal index.

This chapter introduces a disciplined representation, audits the group axioms against it, and shows how to generate subgroups by closure. Everything is constructive: every claim can be checked by exhaustive search on a finite structure, and every algorithm comes with a termination argument.

## Indexing and the operation table

Label the $n$ elements of a finite set by the indices $0, 1, \dots, n-1$. Store a binary operation as an $n \times n$ table $T$ whose entry $T[a][b]$ is the index of $a \cdot b$. This is the **Cayley table** of the operation.

The fundamental safety invariant is **closure**: every entry must be an integer between $0$ and $n-1$. If any entry falls outside this range, the table does not define a binary operation on the set.

```text
function product(a, b):
    require 0 <= a and a < n
    require 0 <= b and b < n
    return table[a][b]
```

Separating display names from indices is essential. Maintain a parallel array `names` where `names[i]` is the human-readable label of element $i$. This prevents a display name such as $r^{2}s$ from becoming part of the algorithm and makes relabelling explicit: changing names does not change the table.

For the cyclic group $C_{n}$ under addition modulo $n$, storing the full table is optional because

$$\operatorname{product}(a, b) = (a + b) \bmod n.$$

For an arbitrary presented table, storage costs $n^{2}$ integers; one lookup costs $O(1)$ time.

## Audit the group axioms

A group is a set $G$ with an associative binary operation, an identity element $e \in G$, and, for every $a \in G$, an inverse $a^{-1} \in G$ such that $a \cdot a^{-1} = e = a^{-1} \cdot a$.

Given a table, we can test each axiom exhaustively.

### Identity

Search for an element $e$ such that $T[e][a] = a$ and $T[a][e] = a$ for every $a$. A two-sided identity is unique: if e and f both satisfy the equations, e·f equals both e and f, forcing e=f. Distinct passing records would contradict those equations.

### Inverses

Once $e$ is known, search each row $a$ for an element $b$ with $T[a][b] = e$ and $T[b][a] = e$. In a group every element has a unique two-sided inverse.

### Associativity

Test every triple $(a, b, c)$:

```text
for a in elements:
  for b in elements:
    for c in elements:
      if product(product(a, b), c) != product(a, product(b, c)):
        return counterexample (a, b, c)
return associative
```

The cost is $O(n^{3})$ products. For a six-element table that is only $216$ triples---trivial for a modern processor. For an infinite family, no finite run proves the law; you must derive a formula or use a structural argument.

**Example: the dihedral group $D_{3}$.** Encode elements as pairs $(i, j)$ with $i \in \{0, 1, 2\}$ and $j \in \{0, 1\}$, representing $r^{i}s^{j}$ where $r$ is a rotation and $s$ is a reflection. Define

$$(i, j)(k, l) = \bigl(i + (-1)^{j} k \bmod 3,\; j + l \bmod 2\bigr).$$

Associativity follows because this multiplication comes from composition of symmetries, or can be proved from the semidirect-product rule. Exhaustive testing on the six-element instance then checks the implementation against the mathematical definition.

### The Latin-square condition

A necessary condition for a group table is that each row and each column is a permutation of $\{0, \dots, n-1\}$. This captures unique solvability of $ax = b$ and $ya = b$. However, it is **not sufficient**: a quasigroup satisfies the Latin-square condition without being associative. A program should report these properties separately.

## Generate subgroups by closure

Given a subset $S \subseteq G$, the subgroup $\langle S \rangle$ is the smallest subgroup containing $S$. In a finite group it can be computed by repeated multiplication and inversion.

```text
closure = {identity} union S
repeat:
  add inverse(x) for x in closure
  add product(x, y) for x, y in closure
until no new element appears
```

At least one element is added on every changing pass, and the group has only $n$ elements, so termination takes at most $n$ passes. A queue implementation avoids recomputing every old pair on every iteration: enqueue new elements and form products only with the queue front.

**Worked example.** In $\mathbb{Z}/12\mathbb{Z}$ under addition, start with $S = \{8\}$. The closure algorithm adds $0$ (the identity), $8$, and $4$ (because $8 + 8 = 16 \equiv 4 \pmod{12}$). Another pass adds nothing new. The generated subgroup has order three, matching the formula $12 / \gcd(8, 12) = 3$.

For $D_{3}$, closing $\{r, s\}$ yields all six elements, while closing $\{r\}$ yields the three rotations $\{e, r, r^{2}\}$.

## Common errors and how to catch them

- **Off-by-one indexing.** Using indices $1, \dots, n$ instead of $0, \dots, n-1$ causes array overflows or silent wrapping. Always validate inputs with `require 0 <= a < n`.
- **Confusing left and right inverses.** In a group they coincide, but in a general operation table they need not. Test both $T[a][b] = e$ and $T[b][a] = e$.
- **Assuming Latin square implies group.** The operation $a*b=a-b\pmod 4$ has table

  $$\begin{array}{c|cccc}
  * & 0 & 1 & 2 & 3 \\
  0 & 0 & 3 & 2 & 1 \\
  1 & 1 & 0 & 3 & 2 \\
  2 & 2 & 1 & 0 & 3 \\
  3 & 3 & 2 & 1 & 0
  \end{array}$$

  Every row and column is a permutation, but $(0*0)*1=3$ whereas $0*(0*1)=1$. Always run the associativity test.
- **Forgetting why inverses appear during closure.** In a finite group, $a^{-1}=a^{\operatorname{ord}(a)-1}$, so repeated products already produce inverses. An explicit inverse step is still useful: it exposes the subgroup invariant and can shorten the computation.

## Representation contracts and failure witnesses

**Definition 1.1 (A finite operation record).** A record consists of a positive integer n, a list of n display names and an n-by-n array of integer indices. The names identify the presentation; the indices identify the elements used by the operation. Every row has length n and every entry lies in {0,…,n−1}. A missing entry, a fractional entry or an out-of-range entry is malformed data, not a counterexample to associativity of a defined operation.

These checks precede every nested product lookup. In the associativity expression T[T[a][b]][c], the inner table entry becomes an index. Bounds that have not been established can therefore make the expression meaningless before any group law is considered. The mathematical carrier is nonempty because a group must have an identity. An empty array is not a zero-element group.

**Proposition 1.2 (Sound finite group decision).** On a well-formed nonempty operation table, exhaustive identity, inverse and associativity searches return a group exactly when the table defines a group. A failing search supplies an exact witness or an explicitly exhausted finite list of possibilities.

*Proof.* If all three searches succeed, their quantified checks are precisely the group axioms: one identity works for every carrier element, every element has a two-sided inverse relative to it, and every triple satisfies associativity. Conversely a group satisfies those statements, so every search succeeds. A failed associativity check returns its three indices and two unequal products. Failure to find an identity means every index has a displayed failed identity equation. After fixing an identity, failure of an inverse search for one element means every possible partner fails at least one required equation. All searches have finite domains, so no candidate lies beyond the exhausted loops. ∎

Identity uniqueness does not require associativity. If e and f are both two-sided identities, ef=f by the left identity property of e, and ef=e by the right identity property of f, hence e=f. Thus two genuinely passing identity records cannot coexist in any operation. If an implementation reports two distinct ones, its recorded claims are inconsistent with its own equations. Inverse uniqueness, in contrast, uses associativity: if b and c are inverses of a, then b=b(ac)=(ba)c=c.

A returned witness should name the same element labels as the input presentation and include the index-to-name mapping. A transcript using a reordered label list with an old table no longer describes the same operation. This is a mathematical identity issue, not a formatting difference.

## A proof for the dihedral encoding

**Theorem 1.3 (The six-element dihedral rule).** On pairs (i,j) with i modulo three and j modulo two, the rule
$$(i,j)(k,l)=(i+(-1)^j k,\ j+l)$$
with the indicated modular reductions defines a group. Its identity is (0,0) and the inverse of (i,j) is ((−1)^(j+1)i,j).

*Proof.* Both output coordinates remain in their respective residue classes, proving closure. For three pairs, left association gives first coordinate
$$i+(-1)^j k+(-1)^{j+l}m,$$
while right association gives
$$i+(-1)^j k+(-1)^j(-1)^l m.$$
They agree because (−1)^(j+l)=(−1)^j(−1)^l, an identity compatible with reduction modulo two in the parity coordinate. The second coordinates both equal j+l+n modulo two. This proves associativity for the whole rule rather than only for an enumerated collection of examples.

The pair (0,0) acts as identity on either side. Substituting the proposed inverse gives first coordinate i+(−1)^j(−1)^(j+1)i=0 in one order and (−1)^(j+1)i+(−1)^j i=0 in the other, and second coordinate 2j=0. Thus the inverses are two-sided. ∎

**Worked example 1.4 (One rotation and one reflection).** Put r=(1,0), s=(0,1). Then rs=(1,1), whereas sr=(2,1), so the group is nonabelian. A reflection (i,1) is its own inverse, while r has inverse (2,0). The product (2,1)(1,0)=(1,1) uses the sign reversal in the first coordinate. A routine using i+k for every product would compute (0,1) instead and would represent a different operation. This small by-hand calculation identifies exactly which coefficient the program must preserve.

## Queue closure with a membership certificate

The repeated-pass algorithm above is easy to state but recomputes old work. With an already established group and generator set S, a queue gives a finite word search. Form A=S∪S⁻¹, start with the identity and append every newly reached product h·a. Store a predecessor and the generator a for each new element.

```text
seen = {e}
queue = [e]
predecessor[e] = none
while queue is not empty:
    h = remove_front(queue)
    for a in generators_and_inverses:
        v = product(h, a)
        if v is not in seen:
            add v to seen
            predecessor[v] = (h, a)
            append v to queue
return seen, predecessor
```

**Theorem 1.5 (Queue correctness and cost).** For a group of size n and s supplied generators, the queue returns exactly the generated subgroup. It makes at most 2ns table-product lookups after inverses have been supplied, and each returned element has a word certificate in S∪S⁻¹.

*Proof.* Every inserted element is represented by a word: identity is the empty word, and a new predecessor step appends one generator or inverse. This proves soundness and the certificate claim inductively. Every element is enqueued at most once, so at most n vertices are processed and each has at most 2s outgoing labelled edges. This gives the lookup bound and termination.

At termination, every right product of a seen vertex by a member of A has been processed and is seen. Induction on word length therefore puts every word in A in the final set. Such words are exactly the generated subgroup, proving completeness. The argument needs the group interpretation and available generator inverses; it does not repair a malformed or nonassociative table. ∎

The bound counts table lookups under constant-time membership storage. Obtaining all inverses by a table search can itself cost O(n²); storing the entire table costs O(n²) indices. The queue's extra bookkeeping is O(n) records. Separating those costs avoids claiming that a closure routine makes the input table free.

**Worked example 1.6 (A word recovered from the queue).** In the dihedral group use generators r and s. The first processed identity reaches r,r²,s. Processing r can reach rs, and processing r² can reach r²s. A stored predecessor for rs is (r,s), so following predecessors back to identity recovers the word rs. Choosing a different generator order may give a different shortest or equally valid word; it does not change the generated set. Reconstructing the word and multiplying it in the declared convention certifies positive membership for that element.

## Relabelling transports the operation

**Proposition 1.7.** If π is a bijection of the index set, define the transported table by
$$T'[\pi(a)][\pi(b)]=\pi(T[a][b]).$$
Then π is an isomorphism between the two operations, and all group-law conclusions are preserved.

*Proof.* The defining equality says exactly that π preserves multiplication. Bijection transports each identity and inverse. Applying the equality twice sends each side of an associativity equation in T to the corresponding side in T′, so associativity is equivalent in both presentations. ∎

**Worked example 1.8 (A changed identity index).** Relabel C₃ by π(0)=2, π(1)=0, π(2)=1. The old identity zero becomes index two. The old equation 1+1=2 becomes T′[0][0]=1. Simply changing the display names while leaving the old index arithmetic unchanged would not implement this transported table. An operation can be renamed, but its coordinates must be transported consistently.

## Searching for an isomorphism, with a complete certificate

Relabelling provides a finite decision procedure once both tables have been proved to describe groups of the same order. Search bijections f between their carriers, requiring that the identity map to the identity. For each completed candidate require
$$f(T_G(a,b))=T_H(f(a),f(b))$$
for every ordered pair. An accepted bijection is a group isomorphism by the definition of a homomorphism. Conversely every isomorphism is one of the searched bijections and satisfies all these equations, so exhaustive failure proves nonisomorphism. This is a completeness argument for a factorial search, not an efficiency claim.

Partial assignments can be rejected as soon as a product equation involves only assigned elements and fails. If an element's order is known, its image must have that same order: applying the homomorphism to powers proves divisibility in one direction, and applying the inverse proves equality. These invariant restrictions are safe pruning rules. A list of matching element orders alone is not a sufficient acceptance condition, since it has not checked multiplication.

**Worked example.** Write the Klein four-group as pairs (i,j) of binary coordinates with componentwise addition. The unit group modulo eight is {1,3,5,7}. Define f(i,j)=3^i5^j modulo eight. Both three and five square to one and commute. Hence multiplying two images adds their exponents modulo two, proving preservation of the operation. The four coordinate pairs give the four distinct residues 1,3,5,7, so the map is bijective. This proves an isomorphism without relying on the chosen table ordering.

By contrast the cyclic group of order four has an element of order four, whereas all three nonidentity units modulo eight square to one. The preserved-order condition already rejects every candidate isomorphism. The negative certificate can therefore be much shorter than the full search, while the general procedure remains available when simple invariants do not distinguish the inputs.

When a table is relabelled again, compose the displayed bijection with that relabelling. Keeping this composite map preserves the meaning of named generators and subgroup records. Merely reporting that two tables are isomorphic loses the correspondence needed to transport those additional mathematical objects.

The bijection itself is the transport certificate. Its inverse sends an image subgroup back to the original subgroup because it preserves products and inverses, so subgroup containment and generated-subgroup claims survive the conversion together with the element labels.

A generated-subgroup routine must distinguish a union, a set product and a subgroup closure. For subgroups H,K, the set product HK is a subgroup exactly when HK=KH. If it is a subgroup, taking inverses gives HK=KH because inverse fixes each subgroup. Conversely that equality lets a product of two terms h₁k₁ and h₂k₂ be rewritten with the middle k₁h₂ in HK, proving closure; it also puts the inverse of every term back in HK. In the permutation group on three letters, the subgroups generated by (12) and (23) have a set product with four elements. It is not a subgroup, since four does not divide six. Their generated subgroup is instead the whole symmetric group. A table operation returning only the set product has therefore not computed the requested subgroup closure.

## Practice exercises

### Exercise 1

Write the $5 \times 5$ addition table for $\mathbb{Z}/5\mathbb{Z}$. Verify that every row and every column is a permutation of $\{0, 1, 2, 3, 4\}$.

<details>
<summary>Hint</summary>

A fixed row adds a fixed residue, which is a bijection; compare columns too.

</details>

<details>
<summary>Solution</summary>

The entry in row $a$ and column $b$ is $(a + b) \bmod 5$. Row $0$ is $0, 1, 2, 3, 4$; row $1$ is $1, 2, 3, 4, 0$; and so on. Each row is a cyclic shift of the first, hence a permutation. The same holds for columns by symmetry of addition.

</details>

### Exercise 2

Consider the operation table on $\{0, 1, 2\}$ given by $T[a][b] = (a + b) \bmod 3$. Find the identity and the inverse of each element.

<details>
<summary>Hint</summary>

Solve a+b=0 modulo three after identifying the additive identity.

</details>

<details>
<summary>Solution</summary>

The identity is $0$ because $(0 + a) \bmod 3 = a = (a + 0) \bmod 3$ for all $a$. The inverse of $0$ is $0$, of $1$ is $2$ (since $1 + 2 \equiv 0 \pmod{3}$), and of $2$ is $1$.

</details>

### Exercise 3

Let $G$ be a group of order $6$ with table generated by the $D_{3}$ rule above. Starting from $S = \{r\}$ (element $(1, 0)$), apply the closure algorithm step by step and list the elements produced at each pass.

<details>
<summary>Hint</summary>

Use r³=e and r⁻¹=r²; record why no reflection can appear.

</details>

<details>
<summary>Solution</summary>

Pass 0: start with $\{e, r\}$ where $e = (0, 0)$. Pass 1: add inverses---$r^{-1} = r^{2}$; add products---$r \cdot r = r^{2}$. Now have $\{e, r, r^{2}\}$. Pass 2: inverses of all elements are already present; products such as $r \cdot r^{2} = e$ and $r^{2} \cdot r^{2} = r$ add nothing new. The algorithm terminates with $\langle r \rangle = \{e, r, r^{2}\}$, a subgroup of order $3$.

</details>

### Exercise 4

Construct a $4 \times 4$ table that is a Latin square but not associative. Prove non-associativity by exhibiting a triple $(a, b, c)$ with $(ab)c \neq a(bc)$.

<details>
<summary>Hint</summary>

Try subtraction modulo four and compare the two associations of (0,0,1).

</details>

<details>
<summary>Solution</summary>

On $\{0,1,2,3\}$ define $a*b=a-b\pmod 4$. Its table is

$$\begin{array}{c|cccc}
* & 0 & 1 & 2 & 3 \\
0 & 0 & 3 & 2 & 1 \\
1 & 1 & 0 & 3 & 2 \\
2 & 2 & 1 & 0 & 3 \\
3 & 3 & 2 & 1 & 0
\end{array}$$

Each row and column is a permutation because subtraction by a fixed residue is a bijection. It is not associative: $(0*0)*1=0*1=3$, while $0*(0*1)=0*3=1$.

</details>

### Exercise 5 — Identity uniqueness
<a id="finite-operation-ex-5"></a>

Prove a binary operation cannot have two distinct two-sided identities, without using associativity.

<details>
<summary>Hint</summary>

Evaluate the product of the two proposed identities in two ways.

</details>

<details>
<summary>Solution</summary>

If e and f are identities, e·f=f because e is a left identity, while e·f=e because f is a right identity. Hence e=f. The calculation does not change parentheses and uses no associativity. It applies to any operation with the two stated identity properties.

</details>

### Exercise 6 — A malformed carrier record
<a id="finite-operation-ex-6"></a>

A three-by-three table contains the entry 3. Explain why this is malformed rather than an associativity counterexample on {0,1,2}.

<details>
<summary>Hint</summary>

The table must first define a map from the carrier square to the carrier.

</details>

<details>
<summary>Solution</summary>

The index 3 is outside {0,1,2}, so the purported operation is not closed and does not define the advertised binary map. A nested lookup can therefore be undefined. The record must be rejected before checking associativity on that carrier. Calling it merely a failing associative operation would obscure that some products have no meaning in the specified set.

</details>

### Exercise 7 — A dihedral inverse
<a id="finite-operation-ex-7"></a>

Find the inverse of (2,1) and compute (2,1)(1,0) under the dihedral rule.

<details>
<summary>Hint</summary>

A reflection is self-inverse; its left action reverses the next rotation exponent.

</details>

<details>
<summary>Solution</summary>

The inverse is (2,1), since j=1 makes the inverse exponent unchanged. Its square is (2−2,0)=(0,0). Also (2,1)(1,0)=(2−1,1)=(1,1). These calculations use residues modulo three in the first coordinate and modulo two in the second.

</details>

### Exercise 8 — Empty generator set
<a id="finite-operation-ex-8"></a>

What does the queue algorithm return for an empty generator set in a nonempty group? Prove it is correct.

<details>
<summary>Hint</summary>

Identity is enqueued initially and no outgoing generator edges remain.

</details>

<details>
<summary>Solution</summary>

It returns {e}. Processing the identity adds no element, so the queue empties. The subgroup generated by the empty set consists of the empty word alone and is the trivial subgroup, so this output is correct. The ambient carrier is still nonempty; an empty generator set does not mean an empty group.

</details>

### Exercise 9 — A closure certificate
<a id="finite-operation-ex-9"></a>

Suppose a returned set H contains e, is closed under right multiplication by S and S⁻¹, and every member has a word in those generators. Prove H=⟨S⟩.

<details>
<summary>Hint</summary>

Prove each containment with a different part of the certificate.

</details>

<details>
<summary>Solution</summary>

Word certificates put every member of H in ⟨S⟩, giving H⊆⟨S⟩. Conversely e∈H and right-multiplication closure put every finite word in S∪S⁻¹ in H by induction on its length. These words fill ⟨S⟩, giving the other containment. Both conditions matter: one alone only proves one direction.

</details>

### Exercise 10 — Transporting a cyclic table
<a id="finite-operation-ex-10"></a>

For π(0)=2, π(1)=0, π(2)=1 on C₃, compute the transported identity and T′[0][1].

<details>
<summary>Hint</summary>

Pull the new indices back to old elements, add modulo three, then apply π.

</details>

<details>
<summary>Solution</summary>

The identity is π(0)=2. The new indices zero and one represent the old elements one and two, whose sum is zero. Thus T′[0][1]=π(0)=2. Adding the new indices directly modulo three would give one, which is wrong for this transported presentation. The bijection is an isomorphism only when the entire multiplication table is transported with it.

</details>

## Summary

A finite operation record must define every product on its declared carrier before algebraic claims are meaningful. Exhaustive finite group decisions have complete witnesses, while the dihedral formula has a proof for its whole family. Queue closure supplies both a termination bound and word certificates, and relabelling transports every table coordinate. Continue to finite-field construction with the same distinction between representation, algebraic hypotheses and exact algorithmic evidence.
