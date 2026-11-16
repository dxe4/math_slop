var e=`---
parent_id: book-mathematical-recreations-reader
chapter_id: constructive-challenges
title: "Constructive Challenges: Witnesses, Algorithms, and Certificates"
level: undergraduate
estimated_minutes: 175
license: CC BY-SA 4.0
---

# Constructive Challenges: Witnesses, Algorithms, and Certificates

“An arrangement exists” may be proved without exhibiting one. A **constructive
proof** supplies a witness or an algorithm that produces one. Recreational
problems are ideal for learning the difference among existence, construction,
verification, and impossibility.

## Pigeonholes create existence

If $n+1$ objects occupy $n$ boxes, some box contains at least two objects. More
generally, placing $N$ objects in $k$ boxes forces some box to contain at least
$\\left\\lceil N/k\\right\\rceil$ objects.

Among any 13 people, two have birthdays in the same month. The theorem identifies
no particular pair before the data are seen, but scanning by month constructs a
pair from actual data.

### Worked example 1: forcing a consecutive pair

Choose six distinct numbers from $\\{1,2,...,10\\}$. Then two chosen numbers are
consecutive. Pair the set into pigeonholes $\\{1,2\\},\\{3,4\\},...,\\{9,10\\}$. Six choices
enter five pairs, so one pair contains both its elements. This proof is stronger
than experimenting, and its boxes are tailored to the desired relation.

## Inductive construction

Even the target of a construction must be checkable. The phrase “partners
alternate with nonpartners” is not a predicate: partnership relates two people,
whereas alternation requires two declared classes. A precise version is “seat
$n$ labeled pairs so that no partners are adjacent.” For $n\\geq2$, list one
member of each pair as $A_1,A_2,\\ldots,A_n$ and then their partners as
$B_1,B_2,\\ldots,B_n$ around the circle, with $A_i$ paired with $B_i$. The two
members of each pair are $n$ steps apart (with $n-1$ intervening seats in either direction), so are not adjacent.
Induction is constructive only when the target predicate, executable step, and
maintained invariant are all explicit.

A classic example is the binary **Gray code**, a list of all $n$-bit strings in
which consecutive strings differ in one bit. For $n=1$, use $0,1$. Given an
$n$-bit list, prefix 0 to it in forward order, then prefix 1 to it in reverse
order. Within each half the induction hypothesis applies; at the join, the
suffixes agree and only the prefix changes. The cyclic endpoints also differ in
one bit.

### Worked example 2: reflected Gray codes

For 3 bits this gives $000,001,011,010,110,111,101,100$.
The construction's completeness deserves its own argument. Every word in the
first half has prefix 0 and every word in the second has prefix 1, so the halves
cannot overlap. In each half every possible suffix appears exactly once by
induction. Thus all $2^{n+1}$ words appear once. Reversal preserves the
one-bit adjacency property within the second half. The first and last words
have the same suffix and opposite prefixes because the second half reverses the
first half's suffix order. Consequently the list is cyclic, not merely a path.

For an application, imagine sensors reading a rotating wheel marked with binary
position labels. At a boundary between ordinary labels $011$ and $100$, several
bits change, and imperfectly synchronized readings can briefly mix old and new
bits. Gray neighbours change one bit, reducing that particular ambiguity. This
does not eliminate all physical sensor errors; it is an exact combinatorial
property of the labels, whose practical scope should be stated accurately.

## Greedy algorithms need proofs

A greedy rule makes the locally preferred choice. For coin denominations
$1,5,10,25$, repeatedly taking the largest coin not exceeding the remainder
gives an optimal number of coins, but for denominations $1,3,4$ and amount 6 it
gives $4+1+1$ (three coins) while $3+3$ uses two. “Greedy worked on familiar
money” is not a general theorem.

To justify greedy behaviour, use an exchange argument, a lower bound met by the
construction, or an invariant showing local choices can be repaired without
cost.

### Worked example 3: why the familiar coins permit greedy choice

Here is the promised proof for denominations $1,5,10,25$. Choose an optimal
representation of an integer amount $N\\ge0$. It cannot contain five pennies,
since a nickel replaces them using fewer coins. It cannot contain two nickels,
since a dime replaces them. It cannot contain three dimes, since a quarter and
a nickel replace them. Finally, it cannot contain two dimes and a nickel,
since one quarter replaces those three coins. Therefore there are at most four
pennies, at most one nickel and at most two dimes; if there are two dimes there
is no nickel.

These bounds show that the value contributed by nonquarters is at most 24:
with two dimes it is at most $20+4$, and with at most one dime it is at most
$10+5+4$. Thus every optimal representation uses exactly
$\\lfloor N/25\\rfloor$ quarters. After removing them, the same exchanges show
that pennies contribute less than 5 and nickels at most 5, so the number of
dimes is the quotient on dividing the remainder by 10. The nickel count and
then penny count are forced by successive division by 5 and 1. These are
exactly greedy's choices. Each exchange strictly reduces the coin count, so no
optimal representation can evade the argument by making a different local
choice. Amount zero is represented by no coins and fits the proof.

## Certificates and verification

A positive certificate for a Sudoku-like grid is the completed grid; checking
rows, columns, and regions is quick. A negative certificate may be a short
contradiction, an invariant mismatch, or—in computational work—a complete search
tree with independently checkable pruning. “My program found none” is not useful
unless state generation, coverage, and code are inspectable.

## Counting by bijection

A **bijection** pairs every object of one kind with exactly one object of another.
It is a reversible construction and therefore proves equal counts. Subsets of an
$n$-element set correspond to $n$-bit strings: record 1 when an element is in the
subset. Thus there are $2^n$ subsets. The inverse reads a bit string and selects
the 1-positions.

## Worked example 4: a construction with a matching lower bound

Suppose a task requires putting $N$ books into boxes holding at most $k$ books,
where $N\\ge0$ and $k\\ge1$ are integers. Any arrangement using $b$ boxes has
$bk\\ge N$, so $b\\ge\\lceil N/k\\rceil$. A construction fills boxes one by one,
putting $k$ books in each until fewer than $k$ remain, then using a final box
only if that remainder is positive. Write $N=qk+r$ with $0\\le r<k$. It uses
$q$ boxes if $r=0$ and $q+1$ otherwise, meeting the lower bound exactly.

This tiny example separates three obligations. A decreasing number of unpacked
books proves termination. Never putting more than $k$ in a box proves validity.
The lower bound proves optimality. A construction can satisfy the first two
without the third: putting each book in its own box always terminates and is
valid, but often wastes boxes. Recognizing which obligation a question asks for
makes longer construction problems more manageable.

## Common errors

- Proving at least one object exists but claiming to have an efficient algorithm.
- Giving an algorithm without proving termination or correctness.
- Assuming greedy is optimal because each step looks largest.
- Calling a many-to-one map a bijection.
- Reporting an exhaustive search without specifying the complete state space.

## Worked example: a witness and a lower bound answer different questions

Suppose twelve counters must be placed in rows containing at most five
counters each. Three rows suffice: use five, five and two. That arrangement
is a witness for existence. To show that three is best possible,
observe separately that two rows can hold at most ten counters. This
capacity bound rules out every two-row arrangement, including arrangements that
look different from the displayed witness.

Now change the instruction to exactly five counters in every nonempty row.
The earlier witness is no longer legal, because its final row has only
two. In fact the total in any legal arrangement must be a multiple
of five, and twelve is not. A small change in the target predicate
has changed an optimisation problem into an impossibility problem. Before
reusing a construction, write down whether a capacity is an upper bound,
a lower bound or an exact requirement. A picture that satisfied the
old wording cannot decide the new problem without checking that condition.

## Exercises


### Exercise 1 {#constructive-challenges-ex-1}

**Explorer.** Prove that among five integers, two have the same remainder when
   divided by 4.

<details>
<summary>Hint 1</summary>

Use remainder classes as boxes.

</details>

<details>
<summary>Hint 2</summary>

Include remainder
   zero, so there are exactly four boxes.

</details>

<details>
<summary>Solution</summary>

The four possible remainder boxes are 0, 1, 2, 3. Five integers placed in
   them force two into one box.

</details>

### Exercise 2 {#constructive-challenges-ex-2}

**Foundation.** Construct the 4-bit reflected Gray code from the 3-bit list in
   the chapter.

<details>
<summary>Hint 1</summary>

Make one forward and one reversed copy.

</details>

<details>
<summary>Hint 2</summary>

Prefix 0 to
   the first and 1 to the second, including every suffix only once per half.

</details>

<details>
<summary>Solution</summary>

Prefix 0 to the list forward and 1 to it backward:
   $0000,0001,0011,0010,0110,0111,0101,0100,1100,1101,1111,1110,1010,1011,1001,1000$.
   Adjacent words, including last-to-first, differ in one bit.

</details>

### Exercise 3 {#constructive-challenges-ex-3}

**Secondary.** Give a counterexample to “largest coin first is always optimal”
   using denominations $1,3,4$.

<details>
<summary>Hint 1</summary>

Try amount 6.

</details>

<details>
<summary>Hint 2</summary>

Compare the largest-first answer with
   two copies of the middle denomination.

</details>

<details>
<summary>Solution</summary>

For amount 6, greedy selects $4,1,1$, three coins. The representation $3,3$
   uses two, so greedy is not optimal.

</details>

### Exercise 4 {#constructive-challenges-ex-4}

**Secondary.** Prove there are equally many even-cardinality and odd-cardinality
   subsets of a nonempty finite set.

<details>
<summary>Hint 1</summary>

Fix one element of the nonempty ground set.

</details>

<details>
<summary>Hint 2</summary>

Toggle
   its membership and show that applying the map twice restores the subset.

</details>

<details>
<summary>Solution</summary>

Choose one distinguished element $x$. Toggle membership of $x$: every even
   subset is paired with one odd subset, and toggling again is the inverse. This
   is a bijection.

</details>

### Exercise 5 {#constructive-challenges-ex-5}

**Undergraduate.** Prove that every tournament (an orientation of every edge
   of a complete graph) has a directed Hamiltonian path, and make the proof an
   insertion algorithm.

<details>
<summary>Hint 1</summary>

Insert one vertex into an already constructed path.

</details>

<details>
<summary>Hint 2</summary>

   Find the first existing vertex beaten by the new vertex; check its predecessor.

</details>

<details>
<summary>Solution</summary>

Induct on the number of vertices. Maintain a directed path
   $v_1 \\to  ... \\to  v_k$. To insert a new vertex $x$, scan from the left for the
   first $v_i$ such that $x \\to  v_i$. If none exists, append $x$; otherwise insert
   $x$ immediately before $v_i$. By firstness, when $i>1$ we have
   $v_{i-1} \\to  x$, and by choice $x \\to  v_i$, so the result remains a directed
   path containing every processed vertex. The algorithm terminates after all
   vertices are inserted.

</details>

<a id="section-168-complete-solutions"></a>
<a id="section-166-complete-solutions"></a>
## Complete solutions

[Exercise 1](#constructive-challenges-ex-1) · [Exercise 2](#constructive-challenges-ex-2) · [Exercise 3](#constructive-challenges-ex-3) · [Exercise 4](#constructive-challenges-ex-4) · [Exercise 5](#constructive-challenges-ex-5)

<a id="section-188-hints-for-exercises-1-5"></a>
<a id="section-186-hints-for-exercises-1-5"></a>
### Hints for exercises 1–5


[Exercise 1](#constructive-challenges-ex-1) · [Exercise 2](#constructive-challenges-ex-2) · [Exercise 3](#constructive-challenges-ex-3) · [Exercise 4](#constructive-challenges-ex-4) · [Exercise 5](#constructive-challenges-ex-5)

<a id="section-201-exercise-6-pigeonhole-sharpness-constructive-challenges"></a>
<a id="section-199-exercise-6-pigeonhole-sharpness-constructive-challenges"></a>
### Exercise 6: pigeonhole sharpness {#constructive-challenges-ex-6}

Show that the consecutive-pair theorem for six selected integers in
$\\{1,\\ldots,10\\}$ cannot be improved to five selected integers.

<details><summary>Hint 1</summary> An impossibility of a stronger theorem needs one counterexample.
</details>
<details><summary>Hint 2</summary> Select only one parity class.
</details>
<details><summary>Solution</summary> The five integers $1,3,5,7,9$ contain no consecutive pair. This
does not contradict the six-element theorem: five objects can occupy five
pigeonholes without collision. It establishes the threshold's sharpness.
</details>
<a id="section-214-exercise-7-certify-an-optimum-constructive-challenges-e"></a>
<a id="section-212-exercise-7-certify-an-optimum-constructive-challenges-e"></a>
### Exercise 7: certify an optimum {#constructive-challenges-ex-7}

Pack 23 books into boxes of capacity 5 using as few boxes as possible, and
give both a construction and a lower-bound certificate.

<details><summary>Hint 1</summary> Four boxes hold at most 20.
</details>
<details><summary>Hint 2</summary> Fill as many boxes completely as possible.
</details>
<details><summary>Solution</summary> Four full boxes contain 20 books and a fifth contains the remaining
3. This is valid because each load is at most 5. Fewer than five boxes hold at
most 20 books, so no smaller arrangement works. The construction and obstruction
together prove the optimum is five.
</details>
<a id="section-228-exercise-8-failure-of-a-supposed-bijection-constructive"></a>
<a id="section-226-exercise-8-failure-of-a-supposed-bijection-constructive"></a>
### Exercise 8: failure of a supposed bijection {#constructive-challenges-ex-8}

Someone maps a subset of $\\{1,2,3\\}$ to its cardinality and calls this a bijection
with $\\{0,1,2,3\\}$. Identify the defect and replace the target by one giving a
genuine bijection.

<details><summary>Hint 1</summary> Compare the images of $\\{1\\}$ and $\\{2\\}$.
</details>
<details><summary>Hint 2</summary> A three-bit word can retain each membership decision separately.
</details>
<details><summary>Solution</summary> The map is not injective: those distinct singletons both map to 1.
Instead map a subset to $(b_1,b_2,b_3)$ with $b_i=1$ exactly when $i$ belongs
to it. Reading the 1-positions recovers the unique subset. This inverse proves
both injectivity and surjectivity, giving a bijection with all eight bit words.
</details>
<a id="section-243-exercise-9-constructive-partner-seating-constructive-ch"></a>
<a id="section-241-exercise-9-constructive-partner-seating-constructive-ch"></a>
### Exercise 9: constructive partner seating {#constructive-challenges-ex-9}

For three labelled pairs, write a circular seating with no partners adjacent.
Explain why the same construction works for every $n\\ge2$ but fails for $n=1$.

<details><summary>Hint 1</summary> Use the two blocks $A_1,\\ldots,A_n$ and $B_1,\\ldots,B_n$.
</details>
<details><summary>Hint 2</summary> Check the wrap-around edge as well as consecutive positions on the page.
</details>
<details><summary>Solution</summary> Use $A_1,A_2,A_3,B_1,B_2,B_3$ cyclically. In general the two
members of each pair are $n$ steps apart around a circle with $2n$ positions.
For $n\\ge2$ this is not a distance-one adjacency in either direction, including
across the final-to-first boundary. For $n=1$, the only two people are partners
and are adjacent, so the restriction on $n$ is necessary.
</details>
<a id="section-258-exercise-10-a-gray-code-parity-obstruction-constructive"></a>
<a id="section-256-exercise-10-a-gray-code-parity-obstruction-constructive"></a>
### Exercise 10: a Gray-code parity obstruction {#constructive-challenges-ex-10}

Prove that any closed walk that changes one bit at each step has even length.
Does this contradict the cyclic Gray code on $n\\ge1$ bits?

<details><summary>Hint 1</summary> Track the parity of the number of 1-bits.
</details>
<details><summary>Hint 2</summary> A closed walk ends with its starting parity.
</details>
<details><summary>Solution</summary> Each step toggles the 1-count parity, so an odd number of steps
cannot return to the initial word. Every closed walk therefore has even length.
A cyclic Gray code has $2^n$ steps when the final-to-first step is included,
and $2^n$ is even for $n\\ge1$. There is no contradiction; the construction
meets this necessary obstruction.
</details>
<a id="section-273-project-construction-versus-search"></a>
<a id="section-271-project-construction-versus-search"></a>
## Project: construction versus search

Pick a family of objects with at least one object for every size $n$: balanced
parenthesis strings, polyomino borders, magic labelings, or graph routes. Give a
direct generator and a brute-force filter. For small $n$, compare outputs. Prove
the generator is sound (every output is valid), discuss completeness (does it
produce every valid object?), and report growth using integer counts rather than
timings tied to one machine.

<a id="section-282-summary"></a>
<a id="section-280-summary"></a>
## Summary

An existence argument, an explicit witness, a terminating algorithm and an
optimality certificate answer different questions. Pigeonhole boxes should
encode the desired relation. Recursive generators need proofs of validity,
coverage and absence of duplicates. Greedy choice requires an exchange proof
or a matching bound, and a bijection requires a specified inverse.
`;export{e as default};