var e=`---
parent_id: book-algebra-patterns-structure
chapter_id: permutations-cayley-presentations
title: "Permutations, Cayley's Theorem, and Presentations"
level: undergraduate
estimated_minutes: 250
status: draft
license: CC BY-SA 4.0
---

# Permutations, Cayley's Theorem, and Presentations

A permutation is a reversible relabeling. Every finite symmetry calculation
can therefore be written inside some symmetric group, and Cayley's theorem
says the same is true for every abstract group: multiplication itself creates
a faithful permutation model.

This chapter develops the language needed to use that model without ambiguity.
We compose right to left, decompose permutations into disjoint cycles, compute
orders and parity, and interpret conjugation as relabeling. The final sections
introduce generators and relations as a controlled way to specify a group.
Chapter 11 will use these tools to construct direct and semidirect products and
to prove presentation claims by normal forms.

The local prerequisites are groups, cyclic groups, element orders, and
homomorphisms. No group-action theorem is assumed; Chapter 8 will turn these
permutation maps into the general language of actions.

## 1. Symmetric groups and composition order

**Definition 7.1 (Symmetric group).**

For a set $X$, the **symmetric group** $\\operatorname{Sym}(X)$ consists of all bijections
$X\\to X$, with function composition as multiplication. If
$X=\\{1,...,n\\}$, write $S_n$.

This book composes right to left:

$(\\sigma \\tau)(i)=\\sigma(\\tau(i))$.

Thus in the product $\\sigma \\tau$, apply $\\tau$ first. The identity permutation
fixes every point, and the inverse $\\sigma^{-1}$ reverses every arrow.

A permutation can be displayed in two-line notation. For example,

$\\sigma: 1 2 3 4 5 \\to  3 5 1 4 2$

means $\\sigma(1)=3$, $\\sigma(2)=5$, and so on. Its inverse is found by reversing
the arrows:

$\\sigma^{-1}: 1 2 3 4 5 \\to  3 5 1 4 2$

in this particular example, so $\\sigma$ is its own inverse. A calculation,
not visual resemblance, establishes that claim.

### Worked composition

**Worked example 7.2 (Two composition orders).**

Let $\\sigma=(1 2 3)$ and $\\tau=(2 4)$ in $S_4$. Track each input under $\\tau$
then $\\sigma$:

- $1 \\to  1 \\to  2$;
- $2 \\to  4 \\to  4$;
- $4 \\to  2 \\to  3$;
- $3 \\to  3 \\to  1$.

Hence $\\sigma \\tau=(1 2 4 3)$. Reversing the product gives a different cycle,
$\\tau \\sigma=(1 4 2 3)$. Permutation multiplication is generally
noncommutative.

## 2. Cycles and disjoint-cycle form

The cycle

$(a_1 a_2 ... a_k)$

sends $a_1$ to $a_2$, ..., $a_k$ to $a_1$, and fixes every unlisted point.
The same cycle can be rotated:

$(1 4 3)=(4 3 1)=(3 1 4)$,

but reversing the entries usually gives its inverse, not the same cycle.

Cycles with disjoint supports commute. If $\\alpha$ moves only points in $A$
and $\\beta$ only points in disjoint $B$, then each map leaves the other's moved
points alone, so $\\alpha \\beta$ and $\\beta \\alpha$ agree everywhere.

**Theorem 7.3 (Disjoint-cycle decomposition).**

**Theorem 7.2 (Disjoint-cycle).** Every permutation of a finite set is a product of
pairwise disjoint cycles. The cycles are unique up to their order and cyclic
rotation; fixed points may be included as one-cycles or omitted.

To construct the decomposition, begin at $a$ and follow

$a, \\sigma(a), \\sigma^2(a), ...$.

Finiteness forces a repeat. Injectivity ensures the first repeated point is
$a$, producing one cycle. Start again at a point not yet used. The resulting
cycles are disjoint and cover the set. Any cycle decomposition must group
exactly the points lying in each forward orbit, proving uniqueness.

### Worked decomposition

**Worked example 7.4 (Following permutation arrows).**

Suppose

$\\sigma: 1 2 3 4 5 6 7 \\to  4 6 1 7 5 2 3$.

Following arrows gives

$1\\to 4\\to 7\\to 3\\to 1$, $2\\to 6\\to 2$, and $5\\to 5$.

Thus

$\\sigma=(1 4 7 3)(2 6)(5)$.

## 3. Powers and orders from cycle lengths

A $k$-cycle has order $k$. If disjoint cycles have lengths
$l_1,...,l_r$, then

$\\operatorname{ord}(\\sigma)=\\operatorname{lcm}(l_1,...,l_r)$.

Indeed, a power fixes every point exactly when it is a multiple of every cycle
length. The least positive such exponent is their least common multiple.

Powers of a cycle can split. The permutation $c=(1 2 ... n)$ raised to $k$
has $\\gcd(n,k)$ cycles, each of length $n/\\gcd(n,k)$. Starting at a point means
repeatedly adding $k$ modulo $n$; the first return occurs at the least positive
$m$ with $mk=0 \\bmod n$, namely $n/\\gcd(n,k)$.

### Worked order

**Worked example 7.5 (Simultaneous cycle returns).**

For $\\sigma=(1 2 3 4)(5 6 7)(8 9)$,

$\\operatorname{ord}(\\sigma)=\\operatorname{lcm}(4,3,2)=12$.

It is not the product $24$, because disjoint cycles advance simultaneously.

## 4. Transpositions and parity

A **transposition** swaps two points and fixes all others. Every cycle is a
product of transpositions:

$(a_1 a_2 ... a_k)=(a_1 a_k)(a_1 a_{k-1})...(a_1 a_2)$.

Therefore every permutation is a product of transpositions. The expression is
far from unique, but the parity of the number of factors is invariant.

One proof uses adjacent swaps. Write a permutation in one-line form
$\\sigma(1),...,\\sigma(n)$. An **inversion** is a pair $i<j$ with
$\\sigma(i)>\\sigma(j)$. Swapping adjacent entries changes the inversion count by
exactly one. Bubble sorting therefore expresses $\\sigma$ as a product of a
number of adjacent transpositions congruent modulo two to its inversion count.
Any transposition $(i j)$ is a product of $2(j-i)-1$ adjacent transpositions,
an odd number. Replacing every transposition in any expression by this adjacent
word shows that all transposition expressions have the same parity.

Define

$\\operatorname{sgn}(\\sigma)=(-1)^{\\text{number of inversions}}$.

The parity argument shows $\\operatorname{sgn}(\\sigma \\tau)=\\operatorname{sgn}(\\sigma)\\operatorname{sgn}(\\tau)$, so
$\\operatorname{sgn}:S_n\\to \\{1,-1\\}$ is a homomorphism. Even permutations form its kernel, the
**alternating group** $A_n$. For $n\\ge 2$, a transposition has sign $-1$, so the
map is onto and

$|A_n|=n!/2$.

A $k$-cycle has sign $(-1)^{k-1}$. Thus a permutation's sign can be read from
its disjoint-cycle lengths without expanding it again.

## 5. Conjugation relabels cycles

For $\\tau \\in S_n$,

$\\tau(a_1 ... a_k)\\tau^{-1}=(\\tau(a_1) ... \\tau(a_k))$.

Apply the left side to $\\tau(a_i)$: $\\tau^{-1}$ returns $a_i$, the cycle sends
it to $a_{i+1}$, and $\\tau$ relabels the result. Therefore conjugation preserves
cycle lengths.

Conversely, permutations with the same multiset of cycle lengths are
conjugate: choose $\\tau$ sending the entries of each cycle of the first
permutation, in cyclic order, to entries of the corresponding cycle of the
second. Hence conjugacy classes in $S_n$ are classified by partitions of $n$,
the possible cycle types. Chapter 9 will reinterpret this through conjugation
orbits and centralizers.

### Example in $S_4$

$(1 2)(3 4)$ and $(1 3)(2 4)$ are conjugate because they share cycle type
$2+2$. They are not conjugate to $(1 2 3 4)$: the first has order two and the
four-cycle has order four, already distinguishing them. Cycle type is the
complete invariant here.

## 6. Standard generating sets

A subset $S \\subseteq G$ **generates** $G$ if every element is a finite product
of elements of $S$ and their inverses. Write $G=\\langle S\\rangle$.

The adjacent transpositions

$s_i=(i i+1)$, $1\\le i<n$,

generate $S_n$: bubble sort any one-line permutation to the identity using
adjacent swaps, then reverse the swaps. The two permutations

$r=(1 2 ... n)$ and $s=(1 2)$

also generate $S_n$, because

$r^{i-1}s r^{-(i-1)}=(i i+1)$

with indices interpreted in the appropriate range. A small generating set can
therefore encode a very large group.

The alternating group $A_n$ is generated by three-cycles. A product of an even
number of transpositions can be paired. An identical pair cancels; every other
pair is one of the following types:

$(a b)(a c)=(a c b)$

when the transpositions share exactly one point (with $a,b,c$ distinct), or can be rewritten as two
three-cycles when their supports are disjoint, using
$(a b)(c d)=(a c b)(a c d)$. Thus every even permutation is a product of
three-cycles.

## 7. Cayley's theorem

Every group acts on its underlying set by left multiplication. We can state
the permutation representation directly, before the general action language.
For $g \\in G$, define

$L_g:G\\to G$, $L_g(x)=gx$.

The map $L_g$ is a bijection with inverse $L_{g^{-1}}$, and

$L_g \\circ L_h=L_{gh}$.

Therefore

$L:G\\to \\operatorname{Sym}(G)$, $g\\to L_g$,

is a homomorphism. It is injective: if $L_g=L_h$, evaluate at $e$ to get
$g=h$. This proves **Cayley's theorem**:

> Every group is isomorphic to a subgroup of a symmetric group.

If $|G|=n$, then $G$ embeds in $S_n$. The theorem is a faithful model, not an
efficient classification: $S_n$ is usually much larger than $G$.

Right multiplication needs order care. The rule $x\\to xg$ satisfies
$R_g \\circ R_h=R_{hg}$, so $g\\to R_g$ is an antihomomorphism. The corrected
rule $g\\to (x\\to xg^{-1})$ is a homomorphism.

### Worked regular model of $C_3$

Let $C_3=\\{e,a,a^2\\}$ and label these points $1,2,3$. Left multiplication by
$a$ cycles

$e\\to a\\to a^2\\to e$,

so $L_a=(1 2 3)$. The image is the three-element subgroup
$\\{id,(1 2 3),(1 3 2)\\}$ of $S_3$.

## 8. Presentations specify generators and relations

A **word** in symbols $S$ is a finite string of generators and formal inverses.
The free group $F(S)$ consists of reduced words under concatenation and
cancellation. A set of **relations** $R$ consists of words intended to equal
identity. The presentation

$\\langle S | R\\rangle$

means the quotient of $F(S)$ by the normal subgroup generated by those
relation words.

This definition gives the universal property: to define a homomorphism from
$\\langle S|R\\rangle$ to a group $H$, choose images of the generators in $H$ that satisfy
every relation. There is then a unique homomorphism extending those choices.

A presentation is not merely a list of true equations in a known group. To
prove a presented group is the intended group, one normally needs both:

1. a surjective homomorphism obtained from generators satisfying the
   relations;
2. an upper bound or normal form showing the presented group has no unnamed
   extra elements.

### Cyclic presentation

$\\langle a | a^n=e\\rangle$ presents $C_n$. The relation reduces every word to one of
$e,a,...,a^{n-1}$, so the presented group has at most $n$ elements. Sending
$a$ to a generator of the actual $C_n$ gives a surjection onto an $n$-element
group. Hence it has exactly $n$ elements and the map is an isomorphism.

### Dihedral presentation

For $n\\ge 3$, the symmetry group of a regular $n$-gon has presentation

$D_n=\\langle r,s | r^n=e, s^2=e, srs=r^{-1}\\rangle$.

The relation $sr=r^{-1}s$ moves every $s$ to the right, while $s^2=e$ removes
pairs. Every word reduces to $r^i$ or $r^i s$, with $0\\le i<n$, so there are at
most $2n$ elements. Actual rotation $r$ and reflection $s$ of the polygon
satisfy the relations and generate $2n$ distinct symmetries. The induced
surjection is therefore an isomorphism.

Chapter 11 will distinguish presentations that encode direct products from
those encoding nontrivial semidirect actions.

## 9. Common errors

- In $\\sigma \\tau$, this book applies $\\tau$ first.
- Disjoint cycles commute; overlapping cycles usually do not.
- Cycle notation is invariant under cyclic rotation, not arbitrary
  reordering.
- The order of a product of disjoint cycles is an lcm, not generally their
  product.
- A permutation has many transposition expressions, but all have the same
  parity.
- Equal order does not imply equal cycle type or conjugacy.
- Cayley's theorem gives an embedding, not a claim that $G=\\operatorname{Sym}(G)$.
- Right multiplication without an inverse reverses product order.
- Verifying proposed generators satisfy stated relations creates a
  homomorphism from the presented group; injectivity still needs proof.

## 10. Chapter summary and retrieval prompts

Permutations compose as functions and have unique disjoint-cycle structure.
Cycle lengths determine powers, orders, signs, and conjugacy type. Adjacent
transpositions generate $S_n$, while three-cycles generate $A_n$. Cayley's
theorem embeds every group faithfully by left multiplication. A presentation
is a free group modulo the normal closure of relations and must be audited by
both a concrete model and a normal-form or size argument.

Retrieve:

1. Which factor acts first in $\\sigma \\tau$?
2. Why is disjoint-cycle form unique?
3. How do cycle lengths determine order and sign?
4. What does conjugation do to cycle entries?
5. Why is the left regular representation injective?
6. What two obligations identify a presented group with a concrete one?

Disjoint support is a sufficient reason for permutations to commute, but it is not necessary. Let σ=(123)(456) and τ=(14)(25)(36). Conjugating σ by τ swaps its two three-cycles, producing (456)(123), which is the same permutation because those cycles are disjoint. Thus σ and τ commute although their supports both contain all six letters. This calculation describes a second source of commutation: a permutation can exchange whole cycles of equal length while preserving their cyclic action. Examining supports alone would miss this possibility, whereas the conjugation formula decides it exactly.

## Exercises with full solutions

### ALG-CH07-E001 — Exercise 1: Composition order

In $S_4$, compute $(1 2 3)(2 4)$ and $(2 4)(1 2 3)$.

<details>
<summary>Hint 1</summary>

Follow each point under the right factor first.

</details>

<details>
<summary>Hint 2</summary>

Close each resulting cycle before reversing the product order.

</details>

#### ALG-CH07-E001 — Solution

<details>
<summary>Solution</summary>

Applying rightmost first gives
$(1 2 3)(2 4)=(1 2 4 3)$. Reversing the order gives
$(2 4)(1 2 3)=(1 4 2 3)$. The unequal results exhibit
noncommutativity.


</details>

### ALG-CH07-E002 — Exercise 2: Inverse in cycle notation

Find the inverse of $(1 4 2 5)(3 6)$.

<details>
<summary>Hint 1</summary>

Reverse each cycle separately.

</details>

<details>
<summary>Hint 2</summary>

Disjoint cycles can be written in either order.

</details>

#### ALG-CH07-E002 — Solution

<details>
<summary>Solution</summary>

Reverse each cycle's direction; disjoint factors may remain in
either order. Thus the inverse is $(1 5 2 4)(3 6)$.


</details>

### ALG-CH07-E003 — Exercise 3: Disjoint-cycle decomposition

Decompose the permutation
$1 2 3 4 5 6 \\to  3 1 5 6 2 4$.

<details>
<summary>Hint 1</summary>

Start at a point and follow its successive images.

</details>

<details>
<summary>Hint 2</summary>

Repeat with points outside the cycles already found.

</details>

#### ALG-CH07-E003 — Solution

<details>
<summary>Solution</summary>

Following $1$ gives $1\\to 3\\to 5\\to 2\\to 1$, hence
$(1 3 5 2)$. Following the first unused point gives $4\\to 6\\to 4$, hence
$(4 6)$. The decomposition is $(1 3 5 2)(4 6)$.


</details>

### ALG-CH07-E004 — Exercise 4: Order from cycle lengths

Find the order of $(1 2 3 4 5 6)(7 8 9 10)(11 12 13)$.

<details>
<summary>Hint 1</summary>

Use the lcm of the disjoint cycle lengths.

</details>

<details>
<summary>Hint 2</summary>

Every return time must be divisible by each length.

</details>

#### ALG-CH07-E004 — Solution

<details>
<summary>Solution</summary>

The disjoint cycle lengths are six, four, and three. The order
is $\\operatorname{lcm}(6,4,3)=12$.


</details>

### ALG-CH07-E005 — Exercise 5: A power of a long cycle

Decompose $(1 2 3 4 5 6)^2$ and find its order.

<details>
<summary>Hint 1</summary>

Advance two places at a time around the six-cycle.

</details>

<details>
<summary>Hint 2</summary>

Count the new cycles and their common length.

</details>

#### ALG-CH07-E005 — Solution

<details>
<summary>Solution</summary>

Advancing by two gives the cycles $(1 3 5)$ and $(2 4 6)$.
Each has length three, so their product has order three. This matches
$6/\\gcd(6,2)=3$.


</details>

### ALG-CH07-E006 — Exercise 6: Cycle as transpositions

Write $(1 2 3 4 5)$ as transpositions and determine its sign.

<details>
<summary>Hint 1</summary>

Use k−1 transpositions to express a k-cycle.

</details>

<details>
<summary>Hint 2</summary>

Check the right-to-left convention and count the sign.

</details>

#### ALG-CH07-E006 — Solution

<details>
<summary>Solution</summary>

One expression is
$(1 5)(1 4)(1 3)(1 2)$. It has four transpositions, so the sign is
$(-1)^4=1$; a five-cycle is even.


</details>

### ALG-CH07-E007 — Exercise 7: Sign from disjoint cycles

Determine the sign of $(1 2 3 4)(5 6 7)(8 9)$.

<details>
<summary>Hint 1</summary>

Each cycle contributes sign (−1)^(length−1).

</details>

<details>
<summary>Hint 2</summary>

Multiply the three signs.

</details>

#### ALG-CH07-E007 — Solution

<details>
<summary>Solution</summary>

The signs are respectively $(-1)^3=-1$,
$(-1)^2=1$, and $(-1)^1=-1$. Their product is $1$, so the permutation is
even.


</details>

### ALG-CH07-E008 — Exercise 8: Size of the alternating group

Prove $|A_n|=n!/2$ for $n\\ge 2$.

<details>
<summary>Hint 1</summary>

The sign map is onto when n≥2.

</details>

<details>
<summary>Hint 2</summary>

Its kernel and other coset have the same size.

</details>

#### ALG-CH07-E008 — Solution

<details>
<summary>Solution</summary>

Sign is an onto homomorphism $S_n\\to \\{1,-1\\}$ because a
transposition maps to $-1$. Its kernel is $A_n$. The first isomorphism theorem
or the kernel-index formula gives $[S_n:A_n]=2$, hence
$|A_n|=|S_n|/2=n!/2$.


</details>

### ALG-CH07-E009 — Exercise 9: Conjugating a cycle

Let $\\tau=(1 4)(2 5)$ in $S_5$. Compute
$\\tau(1 2 3)\\tau^{-1}$.

<details>
<summary>Hint 1</summary>

Conjugation replaces each cycle entry by its image under τ.

</details>

<details>
<summary>Hint 2</summary>

Preserve the cyclic order of the entries.

</details>

#### ALG-CH07-E009 — Solution

<details>
<summary>Solution</summary>

Conjugation relabels entries, giving
$(\\tau(1) \\tau(2) \\tau(3))=(4 5 3)$. Since $\\tau$ is its own inverse, direct
composition gives the same result.


</details>

### ALG-CH07-E010 — Exercise 10: Conjugacy in $S_5$

Are $(1 2 3)(4 5)$ and $(1 4 2)(3 5)$ conjugate? Justify completely.

<details>
<summary>Hint 1</summary>

Compare complete cycle types.

</details>

<details>
<summary>Hint 2</summary>

Construct a relabelling matching corresponding cycle entries in order.

</details>

#### ALG-CH07-E010 — Solution

<details>
<summary>Solution</summary>

Both have cycle type $3+2$, so they are conjugate. For example,
choose a relabeling sending $1,2,3$ to $1,4,2$ in order and $4,5$ to $3,5$ in
order; conjugation by that permutation sends the first disjoint decomposition
to the second.


</details>

### ALG-CH07-E011 — Exercise 11: Adjacent generators

Express $(1 4)$ in $S_4$ using adjacent transpositions
$s_1=(1 2),s_2=(2 3),s_3=(3 4)$.

<details>
<summary>Hint 1</summary>

Conjugate one adjacent transposition by a short adjacent word.

</details>

<details>
<summary>Hint 2</summary>

Track how that word moves its two swapped labels.

</details>

#### ALG-CH07-E011 — Solution

<details>
<summary>Solution</summary>

Move $1$ to position four and undo the intermediate movement:
$(1 4)=s_1s_2s_3s_2s_1$ under right-to-left composition. Tracking the four
points verifies that only one and four are swapped.


</details>

### ALG-CH07-E012 — Exercise 12: Three-cycles are even

Prove every three-cycle lies in $A_n$.

<details>
<summary>Hint 1</summary>

Write a three-cycle as two transpositions.

</details>

<details>
<summary>Hint 2</summary>

Its sign is therefore positive.

</details>

#### ALG-CH07-E012 — Solution

<details>
<summary>Solution</summary>

$(a b c)=(a c)(a b)$ is a product of two transpositions, so its
sign is $(-1)^2=1$. Hence it is even and belongs to $A_n$.


</details>

### ALG-CH07-E013 — Exercise 13: Cayley for $C_4$

Write the image of the left regular representation of
$C_4=\\{e,a,a^2,a^3\\}$ inside $S_4$ using this order as labels.

<details>
<summary>Hint 1</summary>

Follow left multiplication by a on the four labeled elements.

</details>

<details>
<summary>Hint 2</summary>

Its powers give the full regular image.

</details>

#### ALG-CH07-E013 — Solution

<details>
<summary>Solution</summary>

Left multiplication by $a$ sends
$e\\to a\\to a^2\\to a^3\\to e$, so it is $(1 2 3 4)$. The image is
$\\langle  (1 2 3 4) \\rangle$, consisting of the identity, that cycle, $(1 3)(2 4)$, and
its inverse $(1 4 3 2)$.


</details>

### ALG-CH07-E014 — Exercise 14: Injectivity of the regular map

If $L_g=L_h$, prove $g=h$ without invoking a general kernel theorem.

<details>
<summary>Hint 1</summary>

Evaluate both functions at the source identity.

</details>

<details>
<summary>Hint 2</summary>

Their outputs recover g and h themselves.

</details>

#### ALG-CH07-E014 — Solution

<details>
<summary>Solution</summary>

Evaluate both permutations at the group identity:
$L_g(e)=ge=g$ and $L_h(e)=he=h$. Equality of the functions forces equality
of these values, so $g=h$.


</details>

### ALG-CH07-E015 — Exercise 15: Correcting right multiplication

Prove $\\rho(g)(x)=xg^{-1}$ defines a homomorphism $G\\to \\operatorname{Sym}(G)$.

<details>
<summary>Hint 1</summary>

Compose the two functions on an arbitrary x.

</details>

<details>
<summary>Hint 2</summary>

The inverse on g compensates for reversal in plain right multiplication.

</details>

#### ALG-CH07-E015 — Solution

<details>
<summary>Solution</summary>

Each $\\rho(g)$ is bijective. Moreover
$\\rho(g)(\\rho(h)(x))=(xh^{-1})g^{-1}=x(gh)^{-1}=\\rho(gh)(x)$. Thus
$\\rho(g) \\circ \\rho(h)=\\rho(gh)$, exactly the homomorphism law.


</details>

### ALG-CH07-E016 — Exercise 16: A cyclic presentation

Prove $\\langle a | a^6=e\\rangle$ has exactly six elements.

<details>
<summary>Hint 1</summary>

Reduce words modulo the defining power relation for an upper bound.

</details>

<details>
<summary>Hint 2</summary>

Map onto a concrete order-six cycle for the matching lower bound.

</details>

#### ALG-CH07-E016 — Solution

<details>
<summary>Solution</summary>

The relation reduces every word to one of
$e,a,a^2,a^3,a^4,a^5$, so there are at most six. Sending $a$ to $[1]$ in
$\\mathbb{Z}/6\\mathbb{Z}$ satisfies the relation and reaches all six elements, giving a
surjection. Hence the presented group has at least and at most six elements,
so the map is an isomorphism.


</details>

### ALG-CH07-E017 — Exercise 17: Dihedral normal forms

In the dihedral presentation $D_n=\\langle r,s\\mid r^n=e,s^2=e,srs=r^{-1}\\rangle$, prove every word in $r,s$ reduces to $r^i$ or $r^i s$.

<details>
<summary>Hint 1</summary>

Use sr=r⁻¹s to move reflections rightward.

</details>

<details>
<summary>Hint 2</summary>

Cancel pairs of reflections and reduce rotations modulo n.

</details>

#### ALG-CH07-E017 — Solution

<details>
<summary>Solution</summary>

The relation is equivalent to $sr=r^{-1}s$; by induction,
$sr^k=r^{-k}s$. Move every occurrence of $s$ rightward past powers of $r$.
Then cancel pairs with $s^2=e$. At most one $s$ remains, and $r^n=e$ reduces
the exponent to $0\\le i<n$.


</details>

### ALG-CH07-E018 — Exercise 18: A presentation of $S_3$

Show $S_3$ is presented by
$\\langle r,s | r^3=e,s^2=e,srs=r^{-1}\\rangle$.

<details>
<summary>Hint 1</summary>

Choose actual permutations satisfying the three relations.

</details>

<details>
<summary>Hint 2</summary>

Normal forms give at most six elements, and the model reaches six.

</details>

#### ALG-CH07-E018 — Solution

<details>
<summary>Solution</summary>

Take $r=(1 2 3)$ and $s=(2 3)$. They satisfy the relations and
generate $S_3$, so there is a surjection from the presented group. The
dihedral normal-form argument gives at most six words $r^i$ and $r^i s$, while
$S_3$ has six elements. The surjection is therefore an isomorphism.


</details>

### ALG-CH07-E019 — Exercise 19: Universal property of a presentation

Let $H$ contain elements $u,v$ with $u^4=e$, $v^2=e$, and
$vuv=u^{-1}$. Prove there is a unique homomorphism $D_4\\to H$ sending
$r\\to u,s\\to v$.

<details>
<summary>Hint 1</summary>

Assign free-group generators to the proposed elements.

</details>

<details>
<summary>Hint 2</summary>

Relations enter the kernel, so the map descends through their normal closure.

</details>

#### ALG-CH07-E019 — Solution

<details>
<summary>Solution</summary>

The chosen images satisfy every defining relation of
$D_4=\\langle r,s|r^4=e,s^2=e,srs=r^{-1}\\rangle$. The presentation's universal property
therefore supplies a homomorphism, and a homomorphism is determined on every
word by its values on the generators, proving uniqueness. It need not be
injective or onto without additional facts about $u,v$.


</details>

### ALG-CH07-E020 — Exercise 20: Relations versus exact orders

Explain why the relation $a^6=e$ alone initially proves only that the order of
$a$ divides six, then identify what makes $\\langle a|a^6=e\\rangle$ contain an element of
exact order six.

<details>
<summary>Hint 1</summary>

A power relation only bounds the generator order.

</details>

<details>
<summary>Hint 2</summary>

A surjection onto a genuine order-six cycle forces the missing lower bound.

</details>

#### ALG-CH07-E020 — Solution

<details>
<summary>Solution</summary>

In any target group satisfying the relation, Lagrange's
power-order criterion gives $\\operatorname{ord}(a)|6$; the image could have order one, two,
three, or six. For the presented group itself, the map to $C_6$ sending $a$
to a generator is onto, while the relation gives at most six normal forms.
If the presented $a$ had smaller order, its image could not have order six.
Thus the concrete quotient model plus the normal-form bound proves its order
is exactly six.

</details>


## Summary

Permutation composition remembers order, while disjoint cycles reveal return times, signs, and conjugacy types. Cayley's map provides a faithful model for every group. Presentations require both relations and control of normal forms to identify their concrete models. The next chapter studies compatible permutation models systematically as group actions.
`;export{e as default};