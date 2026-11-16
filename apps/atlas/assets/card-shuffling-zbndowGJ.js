var e=`---
parent_id: book-mathematical-recreations-reader
chapter_id: card-shuffling
title: "Card Shuffling"
level: secondary
estimated_minutes: 175
license: CC BY-SA 4.0
---

# Card Shuffling

Shuffling a deck of cards is a randomisation procedure, but it is also a permutation with rich mathematical structure. The **perfect shuffle**---splitting the deck exactly in half and interleaving the two halves---has algebraic properties that connect to modular arithmetic and group theory. The **riffle shuffle**---a more realistic model---connects to probability and Markov chains.

## Worked example 1: the perfect faro shuffle

In a **faro out-shuffle**, a deck of $2n$ cards is split into two halves of $n$ cards each, and the cards are interleaved so that the top card remains on top. In a **faro in-shuffle**, the top card moves to position $2$.

For a deck of $52$ cards, label positions $0,1,\\dots,51$. After an out-shuffle, the card at position $k$ moves to position $2k \\bmod 51$ for $k<51$, while the bottom card (position $51$) stays fixed. After an in-shuffle, the card at position $k$ moves to $2k+1 \\bmod 53$.

The out-shuffle is a permutation of order $8$ modulo $51$: the smallest positive integer $m$ such that $2^m \\equiv 1 \\pmod{51}$ is $m=8$. Thus eight perfect out-shuffles restore the deck to its original order. The in-shuffle has order $52$ modulo $53$, since $2$ is a primitive root modulo $53$.

Here is a short exact calculation rather than a reliance on a numerical order
finder. Modulo 51, $2^8=256\\equiv1$, while $2,4,16$ are not 1, excluding
the proper divisors 1,2,4 of 8. For the in-shuffle, shift to labels $j=k+1$.
The affine map becomes $j\\mapsto2j\\pmod{53}$ on the nonzero residues 1
through 52. Fermat's theorem gives $2^{52}\\equiv1$. Also
$2^{13}\\equiv30$ and $2^{26}\\equiv30^2\\equiv-1\\pmod{53}$, while
$2^4\\equiv16\\ne1$. Every proper divisor of 52 divides either 26 or 4,
so none can be the order. The order is exactly 52. Looking at $j=1$ shows
that the whole permutation cannot return earlier.

## Riffle shuffles and the GSR model

A realistic riffle shuffle, modelled by Gilbert, Shannon, and Reeds, proceeds as follows:

1. Cut the deck into piles of sizes $C$ and $52-C$, where
   $C\\sim\\operatorname{Binomial}(52,1/2)$.
2. Interleave while preserving the order within each pile: when the piles have
   $a$ and $b$ cards remaining, take the next card from the first pile with
   probability $a/(a+b)$ and otherwise from the second.

This is the forward Gilbert--Shannon--Reeds (GSR) model. Equivalently, for the
inverse shuffle, independently label each card $0$ or $1$ with equal probability
and stably sort by the labels. The equivalence is distributional; neither model
claims that every physical human riffle follows it exactly.

## How many shuffles?

Bayer and Diaconis computed how the distribution after repeated GSR riffles
approaches uniformity. In total variation distance for a $52$-card deck, the
values after five, six, seven, and eight shuffles are approximately
$0.924$, $0.614$, $0.334$, and $0.167$. The sharp drop is called a cutoff.
“Seven shuffles” is therefore a useful conventional landmark for this model and
this distance, not a statement that seven shuffles produce exact uniformity or
that one universal threshold defines “random enough.”

A diagnostic tool is the number of **rising sequences**. Label the cards
$1,\\ldots,N$ in their initial order and let $p(i)$ be the current position
of card $i$. Split the label sequence whenever $p(i+1)<p(i)$; between such
breaks, consecutive labels occur in increasing positional order, possibly with
other cards between them. Thus the count is one plus the number of these
inverse descents, rather than the number of contiguous sorted blocks on the
table. A new deck has one rising sequence. A forward riffle interleaves two
consecutive packets without changing order inside either; after $k$ riffles,
the deck is an interleaving of at most $2^k$ consecutive packets. It therefore
has at most $2^k$ rising sequences. For $k=7$, $128>52$, so that support
restriction is no longer binding, although probabilities can remain nonuniform.

### Worked example 2: read a rising sequence correctly

The six-card order $1,4,2,5,3,6$ is a possible single riffle of the packets
$1,2,3$ and $4,5,6$: it alternates between them while preserving each order.
Its position list is $(1,3,5,2,4,6)$, with just one descent, between labels
3 and 4, hence two rising sequences. In contrast, $1,3,5,2,4,6$ has position
list $(1,4,2,5,3,6)$ and three rising sequences, so no single cut-and-interleave
can produce it. In particular, its $4,5,6$ subsequence appears as $5,4,6$,
violating the proposed packet order. Checking packet orders prevents a
plausible-looking pattern from being mistaken for a legal riffle.

## The perfect shuffle as a group element

The set of all permutations reachable by perfect shuffles forms a subgroup of the symmetric group $S_{52}$. This subgroup is generated by the out-shuffle and in-shuffle permutations. Its structure has been studied extensively; it is related to the multiplicative group of integers modulo $51$ and $53$.

For a deck of $2^n$ cards, the out-shuffle corresponds to multiplication by $2$ in the ring $\\mathbb{Z}/(2^n-1)\\mathbb{Z}$. The order of $2$ in this ring determines how many shuffles restore the deck.

## Worked example 3: why inverse labelling gives convergence

After $k$ inverse binary shuffles, each card has acquired $k$ independent label
bits. Stable sorting successively is equivalent to stably sorting by the
combined bit word, with the most recent bit taking priority. Thus each card
has an independent uniform label among $a=2^k$ possibilities. On the event
that all $N$ labels differ, every card ordering is equally likely by symmetry:
renaming the cards preserves the joint label distribution and this event.
Conditional on distinct labels, the sorted order is therefore uniform.

The probability of any label collision is at most
$\\binom N2/a$, by summing the probability $1/a$ for each pair. Hence the
shuffle distribution is a mixture of uniformity and a distribution of total
weight at most that bound. Its total variation distance from uniform is at
most $\\min(1,\\binom N2/2^k)$, which tends to zero. Inversion of a permutation
preserves uniformity and total variation, so the same conclusion applies to
forward shuffles. This bound is deliberately elementary and much weaker than
the cited precise 52-card values; it proves eventual convergence without
establishing the sharp cutoff location.

## Common errors

- **Confusing in-shuffles and out-shuffles.** They have different orders and different effects on card positions.
- **Assuming a cutoff means exact uniformity.** Every finite number of GSR
  shuffles leaves a nonzero total variation distance; a practical threshold
  must be stated.
- **Using the perfect shuffle as a randomisation method.** It is deterministic and restores the deck after a small number of repetitions.
- **Ignoring the rising-sequence diagnostic.** A deck with few rising sequences is far from random.

## Worked example: random repetition need not randomise the deck

A perfect out-shuffle keeps the top card in its position. Repeating it any
fixed number of times preserves that fact. Choosing the number of repetitions
randomly also preserves it: every possible outcome of that procedure has the
same original top card. Randomness in an instruction is therefore insufficient
to make the resulting deck uniformly distributed.

For a uniformly ordered deck of fifty-two distinct cards, the original top
card would occupy the top position with probability one fifty-second. Under
the random-repetition procedure it does so with probability one. The difference
between those event probabilities is fifty-one fifty-seconds. Total variation
distance is at least the difference assigned to any one event, so this single
observable supplies a large lower bound on the procedure's distance from
uniformity. No examination of the other fifty-one positions is necessary.

An experimental record that only follows cards in the middle of the deck
could miss this obstruction. Conversely, finding one card with an apparently
balanced position distribution would not establish that all complete orderings
are equally likely. Uniformity is a statement about the whole permutation
law, not a few chosen marginals. This gives a useful first diagnostic for a
proposed shuffle: identify positions, relative orders or partitions that every
allowed move preserves. A nontrivial invariant can rule out the intended
randomisation before any mixing-time estimate becomes relevant.

## Exercises


### Exercise 1 {#card-shuffling-ex-1}

**Explorer.** Track the position of the top card through three consecutive out-shuffles of a $52$-card deck. Where does it end up?

<details>
<summary>Hint 1</summary>

Substitute zero into the position map.

</details>

<details>
<summary>Hint 2</summary>

Repeat the
   same substitution; the map is deterministic.

</details>

<details>
<summary>Solution</summary>

Position $0$ stays at $0$ after every out-shuffle, because $2 \\cdot 0 = 0$. The top card never moves.

</details>

### Exercise 2 {#card-shuffling-ex-2}

**Foundation.** Prove that after an out-shuffle of a $2n$-card deck, the card originally at position $k$ (0-indexed) moves to position $2k \\bmod (2n-1)$ for $k<2n-1$.

<details>
<summary>Hint 1</summary>

Treat the two halves separately.

</details>

<details>
<summary>Hint 2</summary>

For $k=n+j$,
   reduce $2n+2j$ modulo $2n-1$, except for the fixed bottom card.

</details>

<details>
<summary>Solution</summary>

The out-shuffle interleaves the two halves. Cards from the top half (positions $0$ to $n-1$) go to even positions $0,2,\\dots,2n-2$. Cards from the bottom half (positions $n$ to $2n-1$) go to odd positions $1,3,\\dots,2n-1$. The card at position $k$ in the top half goes to $2k$. The card at position $n+k$ in the bottom half goes to $2k+1$. The formula $2k \\bmod (2n-1)$ unifies both cases when $k$ is measured from the top.

</details>

### Exercise 3 {#card-shuffling-ex-3}

**Secondary.** Compute the order of the out-shuffle for a deck of $16$ cards. How many shuffles restore the original order?

<details>
<summary>Hint 1</summary>

Compute powers of 2 modulo 15.

</details>

<details>
<summary>Hint 2</summary>

Exclude the proper
   divisors of a proposed order, not merely show that one power is 1.

</details>

<details>
<summary>Solution</summary>

For $16$ cards, the out-shuffle order is the multiplicative order of $2$ modulo $15$. Since $2^4 = 16 \\equiv 1 \\pmod{15}$, the order is $4$. Four out-shuffles restore the deck.

</details>

### Exercise 4 {#card-shuffling-ex-4}

**Secondary.** Explain why the in-shuffle of a $52$-card deck has order $52$.

<details>
<summary>Hint 1</summary>

Shift zero-based position $k$ to $j=k+1$.

</details>

<details>
<summary>Hint 2</summary>

Use
   $2^{26}=-1$ and $2^4\\ne1$ modulo 53.

</details>

<details>
<summary>Solution</summary>

Put $j=k+1$. The new label is $2j\\pmod{53}$, so after $m$ shuffles it is
   $2^mj$. The modular calculation in worked example 1 proves that 2 has
   order 52. Thus 52 shuffles fix every label, and label 1 cannot return at
   any smaller positive time. This proves the full affine permutation's order.

</details>

### Exercise 5 {#card-shuffling-ex-5}

**Undergraduate.** Let $d(k)$ be the total variation distance from uniform after $k$ riffle shuffles. Explain why $d(k)$ cannot increase with $k$, and describe the qualitative behaviour of $d(k)$ as $k$ grows.

<details>
<summary>Hint 1</summary>

Uniformity is stationary under independently sampled
   permutations.

</details>

<details>
<summary>Hint 2</summary>

Apply the triangle inequality to the Markov transition sum.

</details>

<details>
<summary>Solution</summary>

The distance $d(k)$ is nonincreasing because applying the same Markov kernel
   to two distributions cannot increase their total variation distance, and
   uniformity is stationary for the GSR kernel. Repeated shuffles approach
   uniformity, so $d(k)\\to0$. For $52$ cards the displayed values show the sharp
   drop between five and eight shuffles; none of those finite-step values is
   zero.

</details>

<a id="section-139-complete-solutions"></a>
<a id="section-137-complete-solutions"></a>
## Complete solutions

[Exercise 1](#card-shuffling-ex-1) · [Exercise 2](#card-shuffling-ex-2) · [Exercise 3](#card-shuffling-ex-3) · [Exercise 4](#card-shuffling-ex-4) · [Exercise 5](#card-shuffling-ex-5)

<a id="section-159-hints-for-exercises-1-5"></a>
<a id="section-157-hints-for-exercises-1-5"></a>
### Hints for exercises 1–5


[Exercise 1](#card-shuffling-ex-1) · [Exercise 2](#card-shuffling-ex-2) · [Exercise 3](#card-shuffling-ex-3) · [Exercise 4](#card-shuffling-ex-4) · [Exercise 5](#card-shuffling-ex-5)

<a id="section-172-exercise-6-an-eight-card-out-shuffle-card-shuffling-ex-"></a>
<a id="section-170-exercise-6-an-eight-card-out-shuffle-card-shuffling-ex-"></a>
### Exercise 6: an eight-card out-shuffle {#card-shuffling-ex-6}

Find the cycles of the out-shuffle on positions 0 through 7 and its order.

<details><summary>Hint 1</summary> Double positions modulo 7, retaining 7 as a separate fixed point.
</details>
<details><summary>Hint 2</summary> Start cycles at 1 and at the first unused position.
</details>
<details><summary>Solution</summary> The cycles are $(0)$, $(7)$, $(1,2,4)$ and $(3,6,5)$.
Their lengths are 1,1,3,3, whose least common multiple is 3. Thus three
out-shuffles restore the deck. A deterministic cycle of length three is not
a distribution over all $8!$ possible orders.
</details>
<a id="section-185-exercise-7-one-legal-riffle-card-shuffling-ex-7"></a>
<a id="section-183-exercise-7-one-legal-riffle-card-shuffling-ex-7"></a>
### Exercise 7: one legal riffle {#card-shuffling-ex-7}

Starting with cards $1,2,3,4$, can a single forward riffle produce $2,1,4,3$?

<details><summary>Hint 1</summary> Compute the positions of consecutive labels.
</details>
<details><summary>Hint 2</summary> One riffle has at most two rising sequences.
</details>
<details><summary>Solution</summary> The position list is $(2,1,4,3)$. It has descents at 1 to 2
and at 3 to 4, giving three rising sequences. Therefore no single forward
riffle can produce it. This is an exact support obstruction, independent of
how likely the various legal cuts are.
</details>
<a id="section-198-exercise-8-transition-contraction-card-shuffling-ex-8"></a>
<a id="section-196-exercise-8-transition-contraction-card-shuffling-ex-8"></a>
### Exercise 8: transition contraction {#card-shuffling-ex-8}

For distributions $\\mu,\\nu$ on a finite state space and a transition matrix
$K$, prove $\\|\\mu K-\\nu K\\|_{\\rm TV}\\le\\|\\mu-\\nu\\|_{\\rm TV}$.

<details><summary>Hint 1</summary> Use $\\|\\mu-\\nu\\|_{\\rm TV}=\\frac12\\sum_x|\\mu(x)-\\nu(x)|$.
</details>
<details><summary>Hint 2</summary> Transition entries are nonnegative and each row sums to one.
</details>
<details><summary>Solution</summary> Expand the left side as
$\\frac12\\sum_y|\\sum_x(\\mu(x)-\\nu(x))K(x,y)|$.
The triangle inequality bounds this by
$\\frac12\\sum_x|\\mu(x)-\\nu(x)|\\sum_yK(x,y)$, which is exactly the right
side. When $\\nu$ is stationary, this gives nonincrease of distance to $\\nu$.
</details>
<a id="section-213-exercise-9-the-collision-bound-card-shuffling-ex-9"></a>
<a id="section-211-exercise-9-the-collision-bound-card-shuffling-ex-9"></a>
### Exercise 9: the collision bound {#card-shuffling-ex-9}

For four cards with independent uniform labels from 16 possibilities, bound
the probability of a repeated label and the resulting distance from uniform.

<details><summary>Hint 1</summary> There are six unordered card pairs.
</details>
<details><summary>Hint 2</summary> A particular pair agrees with probability $1/16$.
</details>
<details><summary>Solution</summary> The union bound gives probability at most $6/16=3/8$ of any
collision. Conditional on no collision the stable-sort order is uniform, so
its unconditional total variation distance from uniform is at most $3/8$.
Events involving different pairs need not be independent for this bound.
</details>
<a id="section-227-exercise-10-a-support-bound-can-become-silent-card-shuf"></a>
<a id="section-225-exercise-10-a-support-bound-can-become-silent-card-shuf"></a>
### Exercise 10: a support bound can become silent {#card-shuffling-ex-10}

For 52 cards, find the first $k$ for which $2^k\\ge52$. Does this prove exact
uniformity after $k$ riffles?

<details><summary>Hint 1</summary> Compare $2^5$ and $2^6$ with 52.
</details>
<details><summary>Hint 2</summary> Allowing every outcome is different from giving them equal probabilities.
</details>
<details><summary>Solution</summary> The first such integer is 6, since 32 is too small and 64 is
large enough. The rising-sequence obstruction no longer excludes permutations
by this bound alone. It does not specify their probabilities and therefore
does not prove uniformity. Indeed the displayed six-shuffle distance is about
0.614, showing how much information a support-only argument can miss.
</details>
<a id="section-242-project-analyse-a-false-shuffle"></a>
<a id="section-240-project-analyse-a-false-shuffle"></a>
## Project: analyse a false shuffle

Design a "false shuffle" that appears random but preserves some structure---for example, keeping the top card on top or maintaining a known card at a known position. Analyse how many times your false shuffle must be applied before the deck returns to its original order, and explain how a magician might exploit this periodicity.

<a id="section-246-summary"></a>
<a id="section-244-summary"></a>
## Summary

Perfect shuffles are explicit permutations whose periods follow from modular
orders. GSR riffles are a probability model with an equivalent inverse-label
description. Rising sequences provide a support obstruction, and total
variation measures probability imbalance. Contraction and a label-collision
bound prove eventual mixing, without interpreting a conventional shuffle count
as a guarantee of exact uniformity.
`;export{e as default};