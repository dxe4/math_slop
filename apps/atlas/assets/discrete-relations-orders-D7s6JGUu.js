var e=`---
id: deep-dive-discrete-relations-orders
title: "Relations You Can Sort: Classes, Orders, Lattices, and Closure"
license: CC BY-SA 4.0
---

# Relations You Can Sort: Classes, Orders, Lattices, and Closure

**Before reading.** Read [A Letter Can Hold a Place](../books/algebra-from-stories/a-letter-can-hold-a-place.md). These are preparation for the ideas used below.

Imagine six cards labeled $1,2,3,4,5,6$. The same cards can support several structures:

- group them by odd/even;
- draw an arrow from $a$ to $b$ when $a$ divides $b$;
- place a card below another when its set of prime factors is contained in the other’s;
- begin with one card and repeatedly add everything forced by an arrow.

This low-prerequisite deep dive uses tables and verbal diagrams rather than requiring a drawn figure. Its purpose is to make relations feel like inspectable data while preserving exact definitions.

## 1. A relation is a yes/no table on pairs

For a finite set $A$, a relation $R$ is a selection of ordered pairs from $A\\times A$. Build a table with one row and column per element; mark row $a$, column $b$ when $aRb$.

Four properties become table audits:

- **reflexive:** every diagonal cell is marked;
- **symmetric:** reflection across the diagonal preserves marks;
- **antisymmetric:** no off-diagonal pair of reflected cells are both marked;
- **transitive:** whenever cells $(a,b)$ and $(b,c)$ are marked, $(a,c)$ is marked.

Symmetry and antisymmetry can both hold. Equality marks only the diagonal, which is symmetric and antisymmetric.

### Exact table: “has the same parity”

On $\\{1,2,3,4\\}$, relate numbers with the same parity.

| left \\ right | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| 1 | yes | no | yes | no |
| 2 | no | yes | no | yes |
| 3 | yes | no | yes | no |
| 4 | no | yes | no | yes |

The diagonal is marked, the table is symmetric, and following two yes-links never changes parity, so transitivity holds. The classes are $\\{1,3\\}$ and $\\{2,4\\}$.

## 2. Equivalence means “safe to treat together”

An equivalence relation is reflexive, symmetric, and transitive. These axioms make classes behave as nonoverlapping groups.

If class $[a]$ and class $[b]$ share an element $x$, then $xRa$ and $xRb$. Symmetry gives $aRx$, and transitivity gives $aRb$. Any element related to $a$ is then related to $b$, and conversely, so the classes are equal.

This is why classes cannot partly overlap. Reflexivity makes every object belong somewhere; symmetry and transitivity make overlap spread to equality.

### Nonexample: “shares a letter”

Among words, “shares at least one letter with” is reflexive for nonempty words and symmetric, but not transitive. $CAT$ shares $A$ with $HAT$; $HAT$ shares $H$ with $HEN$; $CAT$ and $HEN$ share no letter. The tempting groups overlap rather than partition.

## 3. Orders allow incomparability

A partial order is reflexive, antisymmetric, and transitive. Divisibility on positive integers is an order: $a|a$; if $a|b$ and $b|a$, positivity forces $a=b$; and divisibility chains compose.

On divisors of $12$, the order contains:

$1$ below $2$ and $3$; $2$ below $4$ and $6$; $3$ below $6$; and $4,6$ below $12$.

A text alternative to the Hasse diagram is the cover list

1–2, 1–3, 2–4, 2–6, 3–6, 4–12, 6–12.

Reflexive loops and transitive edges such as 1–12 are omitted from a Hasse diagram but remain part of the order.

$4$ and $6$ are incomparable: neither divides the other. Partial does not mean defective; it records that the comparison question has no answer for that pair.

## 4. Maximal does not mean biggest by another measure

Within divisors $\\{2,3,4,6\\}$, ordered by divisibility, $4$ and $6$ are maximal because neither has a strictly larger member inside the subset. There is no greatest member, since neither dominates the other.

Cardinality, numerical value, and order position are different notions. The number $6$ is numerically larger than $4$, but that fact does not make it greatest under divisibility.

## 5. Meet and join solve best-bound questions

For two elements in an order:

- their **meet** is the greatest element below both;
- their **join** is the least element above both.

Among divisors of $12$, meet is gcd and join is lcm. For $4$ and $6$, meet is $2$ and join is $12$.

For subsets ordered by inclusion, meet is intersection and join is union. These operations answer the same abstract questions in different concrete languages.

A lattice requires every pair to have both. Consider a poset with incomparable $a,b$ and no other elements. The pair has no common lower or upper bound, so this poset is not a lattice.

## 6. Closure is a “finish the consequences” button

Start with arrows $a\\to b$, $b\\to c$, $a\\to d$. From $\\{a\\}$, reachability closure adds $b,d$, then $c$, producing $\\{a,b,c,d\\}$. From $\\{b\\}$, it produces $\\{b,c\\}$.

A closure operator must be:

- **extensive:** it keeps every starting element;
- **monotone:** more starting elements cannot give fewer consequences;
- **idempotent:** once finished, pressing the button again changes nothing.

These words are a test, not decoration. A rule “add exactly one arrow-neighbor” is usually not idempotent; applying it twice can reach farther.

### Worked repair

**Worked example.**

Let $step(S)$ be $S$ plus all direct out-neighbors. With arrows $a\\to b$, $b\\to c$,

$step(\\{a\\})=\\{a,b\\}$ but $step(step(\\{a\\}))=\\{a,b,c\\}$.

So \`step\` is not closure. Repeating until no new vertex appears yields reachability closure, which is idempotent on a finite graph.

## 7. How the structures connect

A function $f:A\\to B$ creates an equivalence relation $a\\sim a'$ when $f(a)=f(a')$; its classes are fibers. A directed reachability relation is reflexive and transitive but may fail antisymmetry when cycles occur. Mutual reachability is an equivalence relation; collapsing its classes makes the remaining reachability order antisymmetric. Closed sets under an implication rule form an inclusion-ordered family and often a lattice under suitable operations.

The chain is not automatic. Each transition requires its axiom audit.

## 8. Common errors

- Treating any grouping rule as transitive.
- Calling an arrow relation an order before adding reflexive/transitive reachability and resolving cycles.
- Reading omitted Hasse edges as false relations.
- Confusing maximal with greatest.
- Assuming every poset is a lattice.
- Calling a one-step expansion “closure” without idempotence.

## 9. Practice with solutions

### 1. Audit “difference is even”

<a id="deep-dive-discrete-relations-orders-ex-1"></a>

**Exercise 1.**

On integers, $aRb$ when $a-b$ is even. Is this equivalence or order?


<details>
<summary>Hint 1</summary>

Check the relation against reflexivity, symmetry, transitivity and antisymmetry separately.
</details>
<details>
<summary>Hint 2</summary>

Even differences are symmetric and transitive; distinct odd numbers give a test for antisymmetry.
</details>
<details>
<summary>Solution</summary>

It is reflexive, symmetric, and transitive, so equivalence. It is not antisymmetric: $1R3$ and $3R1$ but $1\\ne 3$. Its classes are the even and odd integers.

</details>

### 2. Find bounds

<a id="deep-dive-discrete-relations-orders-ex-2"></a>

**Exercise 2.**

In the inclusion order on $P(\\{p,q,r\\})$, find meet and join of $\\{p,q\\}$ and $\\{q,r\\}$.


<details>
<summary>Hint 1</summary>

In a subset order, lower bounds are sets contained in both given sets.
</details>
<details>
<summary>Hint 2</summary>

The greatest lower bound is their intersection; the least upper bound is their union.
</details>
<details>
<summary>Solution</summary>

The greatest common subset is intersection $\\{q\\}$. The least common superset is union $\\{p,q,r\\}$.

</details>

### 3. Repair a nonclosure

On integers define $F(S)=S\\cup \\{s+1:s\\in S\\}$. Is $F$ a closure operator?

**Solution.** It is extensive and monotone. It is not idempotent: $F(\\{0\\})=\\{0,1\\}$, while $F(F(\\{0\\}))=\\{0,1,2\\}$. The closure generated by the rule would include every integer $s+k$ for $s\\in S$, $k\\ge 0$.

## Where to continue

The first-course book develops membership proofs, partition equivalence, finite maximal-element arguments, and arbitrary intersections of closed sets. The advanced reference revisits closure as matroid span, where rank decides whether adding an element creates new independence. The lab makes that distinction exact on small finite structures.

## Continue through the discrete shelf

This deep dive situates relations and orders inside the self-contained first course [Proof, Counting, and Structure](#/item/book-discrete-mathematics-proof-counting-structure), which develops the surrounding proof and counting machinery chapter by chapter.
`;export{e as default};