var e=`---
parent_id: book-introduction-to-probability
chapter_id: sample-spaces-events
title: "Sample Spaces and Events"
level: undergraduate
license: CC BY-SA 4.0
---

# Sample Spaces and Events

## Turning words into sets

The sentence “the journey is delayed or cancelled” can include journeys that satisfy both descriptions. The sentence “exactly one service fails” excludes the case where both fail. Probability calculations depend on these distinctions, so we need a language that records them without ambiguity. Sets provide that language.

An outcome is a complete record of the experiment at the level we choose. An event is a condition on that record, represented by the set of outcomes satisfying it. Two events can overlap, contain one another or be disjoint. Once those relationships are clear, many probability formulas become bookkeeping identities rather than rules to memorise.

This chapter builds on [chance, models and simulation](chance-models-simulation.md). You need elementary set notation and fractions. The main setting is a finite sample space; a short extension explains countable outcomes so that later waiting-time distributions fit the same framework. We do not assume that every list of outcome categories is equally likely, and we do not use a counting formula for continuous outcomes.

## Sample spaces and probability masses

**Definition 2.1 (Elementary outcome and event).** A sample space $\\Omega$ is a nonempty set of elementary outcomes. An event is a subset of the sample space. For the finite models here, all subsets are allowed events. The empty event $\\varnothing$ contains no outcome, and the whole event $\\Omega$ contains every outcome.

For a finite space, specify numbers $p_\\omega\\ge0$ with $\\sum_{\\omega\\in\\Omega}p_\\omega=1$ and define $P(A)=\\sum_{\\omega\\in A}p_\\omega$. A singleton event $\\{\\omega\\}$ can be identified with the occurrence of that particular outcome, but a general event may contain many outcomes.

The outcome record must be detailed enough for every question we want to ask. If $\\Omega$ records only the sum of two dice, it cannot answer which die was larger. If it records the ordered pair, both questions can be represented. A coarser record loses information even when its own probability law is correct.

**Example 2.2 (A nonuniform finite law).** A printer's next job has one of four categories: short monochrome $M$, long monochrome $L$, short colour $C$ and long colour $D$. In a hypothetical model, their probabilities are $0.45,0.25,0.20,0.10$. These nonnegative values sum to one, so they define a valid law.

The event “colour” is $\\{C,D\\}$ and has probability $0.30$. The event “long” is $\\{L,D\\}$ and has probability $0.35$. Their intersection is $\\{D\\}$ with probability $0.10$, while their union is $\\{L,C,D\\}$ with probability $0.55$. Counting event members and dividing by four would instead give $1/2$ for colour, which is wrong under the stated law. The category labels remain useful even though their probabilities are unequal.

## Set operations describe event operations

**Definition 2.3 (Complement, intersection and union).** For events $A,B\\subseteq\\Omega$:
$$
A^c=\\{\\omega:\\omega\\notin A\\},\\quad
A\\cap B=\\{\\omega:\\omega\\in A\\text{ and }\\omega\\in B\\},
$$
$$
A\\cup B=\\{\\omega:\\omega\\in A\\text{ or }\\omega\\in B\\}.
$$
The word or in a union is inclusive: an outcome in both events is included.

The difference $A\\setminus B=A\\cap B^c$ means $A$ occurs but $B$ does not. Exactly one of $A,B$ is the union $(A\\setminus B)\\cup(B\\setminus A)$. Neither event is $A^c\\cap B^c=(A\\cup B)^c$. Both events occur in $A\\cap B$.

De Morgan's identities are
$$
(A\\cup B)^c=A^c\\cap B^c,\\qquad
(A\\cap B)^c=A^c\\cup B^c.
$$
They can be proved outcome by outcome. An outcome fails to belong to the union precisely when it belongs to neither event. It fails to belong to the intersection precisely when at least one membership fails. These equivalences are often the safest way to translate “at least one failure” or “not all succeed”.

**Definition 2.4 (Disjoint events and partitions).** Events are disjoint when their intersection is empty. A finite collection $B_1,\\ldots,B_m$ is a partition of $\\Omega$ when its sets are pairwise disjoint and their union is $\\Omega$.

A partition classifies every outcome exactly once. It might separate all possible sums, all possible numbers of successes, or all mutually exclusive operating states. A collection that omits some outcomes is not a partition of the whole space. A collection that counts an outcome twice is not disjoint.

Disjointness is a set statement. Independence, introduced carefully in Chapter 5, is a probability statement. Positive-probability disjoint events cannot be independent, because observing one makes the other impossible. Similar-looking words such as separate, unrelated and different do not settle either mathematical property.

## Deriving the basic probability laws

**Proposition 2.5 (Finite event calculus).** In a finite probability model:
1. $P(\\varnothing)=0$ and $P(\\Omega)=1$;
2. disjoint events satisfy $P(A\\cup B)=P(A)+P(B)$;
3. $P(A^c)=1-P(A)$;
4. if $A\\subseteq B$, then $P(A)\\le P(B)$;
5. for arbitrary events,
$$
P(A\\cup B)=P(A)+P(B)-P(A\\cap B).
$$

*Proof.* The empty sum is zero, and the sum over $\\Omega$ is one by the model's normalisation. For disjoint events, every included mass appears once when the two sums are added, proving the second statement. Since $A,A^c$ partition $\\Omega$, the complement rule follows.

If $A\\subseteq B$, write $B=A\\cup(B\\setminus A)$ as a disjoint union. The second contribution is nonnegative, so $P(B)\\ge P(A)$. Finally, split $B$ into disjoint parts $B\\setminus A$ and $A\\cap B$. Then $P(B\\setminus A)=P(B)-P(A\\cap B)$, while $A$ and $B\\setminus A$ are disjoint with union $A\\cup B$. Combining these equalities proves the addition formula. ∎

This proof also gives $0\\le P(A)\\le1$, since $\\varnothing\\subseteq A\\subseteq\\Omega$. Bounds are a useful diagnostic: a computed probability outside that interval signals an invalid model, a misidentified event or an arithmetic error.

**Example 2.6 (An overlap calculation).** In a hypothetical group of forty people, eighteen have a bus pass, fifteen have a rail pass and seven have both. Select one person uniformly. Let $B$ and $R$ denote the pass events. The chance of at least one pass is
$$
P(B\\cup R)=\\frac{18+15-7}{40}=\\frac{13}{20}.
$$
Exactly one pass occurs for $(18-7)+(15-7)=19$ people, giving probability $19/40$. Neither occurs for $40-26=14$ people, giving $7/20$.

The statements at least one, exactly one and neither therefore produce three different events. The seven overlap people are subtracted once for a union and twice when starting from the sum of the two counts to find exactly one.

**Proposition 2.7 (Union bound).** For events $A_1,\\ldots,A_m$,
$$
P\\left(\\bigcup_{i=1}^m A_i\\right)\\le\\sum_{i=1}^mP(A_i).
$$

*Proof.* Make disjoint pieces $C_1=A_1$ and $C_i=A_i\\setminus\\bigcup_{j<i}A_j$ for $i>1$. Their union equals the original union, and each $C_i\\subseteq A_i$. Finite additivity and monotonicity give $P(\\bigcup_iA_i)=\\sum_iP(C_i)\\le\\sum_iP(A_i)$. ∎

The bound is useful when exact overlaps are complicated. It can exceed one without becoming a contradiction: it is then a valid but uninformative upper bound. It should not be reported as an exact probability.

## Three events and exact counting of overlap

For three events, the addition formula becomes
$$
P(A\\cup B\\cup C)=P(A)+P(B)+P(C)
-P(A\\cap B)-P(A\\cap C)-P(B\\cap C)
+P(A\\cap B\\cap C).
$$
To justify it, examine an individual outcome. If it lies in one event it is counted once. If it lies in two, it is counted twice and subtracted once. If it lies in all three, it is counted three times, subtracted three times and restored once. Every outcome in the union receives coefficient one.

**Example 2.8 (Three success positions).** Toss three independent fair coins, and let $A_i$ mean that position $i$ is heads. There are eight equally likely histories. Each $P(A_i)=1/2$, every pair intersection has probability $1/4$, and the triple intersection has probability $1/8$. Thus
$$
P(A_1\\cup A_2\\cup A_3)
=\\frac32-\\frac34+\\frac18=\\frac78.
$$
The complement gives the same result because only $TTT$ has no heads. The union bound would give $3/2$, which conveys no improvement over the universal upper bound one. It remains mathematically correct as an inequality, but overlap matters for an exact answer.

## Countably many outcomes

A waiting experiment may need outcomes $1,2,3,\\ldots$ rather than a fixed finite list. For example, the first head of independent fair tosses can appear at any positive toss number. Set $p_k=2^{-k}$ for $k\\ge1$. The geometric series sums to one, so this gives a probability distribution on the positive integers. It models a first head occurring eventually; a separate argument about the infinite tossing experiment can justify the absence of a positive-probability never-head outcome.

For a countable space, assign nonnegative masses summing to one and define event probabilities by the corresponding subseries. Disjoint countable events add because each nonnegative mass belongs to at most one component; nonnegative series can be regrouped without changing their sum. The same complement and union identities continue to hold.

Infinite lists do not admit a uniform positive mass on every positive integer. If each integer had the same mass $c>0$, sufficiently many terms would sum above one. If $c=0$, the total sum would be zero. Thus “choose a positive integer uniformly” is not a probability law of this kind. A uniform choice from one through $N$ is different and perfectly valid.

For continuous laws later in the book, we specify probabilities of intervals and events obtained from ordinary inequalities. We do not assign equal point masses or assume every subset of the real line can be handled by a counting rule. The advanced measure-theoretic treatment makes the permitted event family explicit; that machinery is a continuation, not an entry prerequisite.

## Exercises

### Exercise 2.1
<a id="sample-spaces-events-ex-1"></a>

Let $\\Omega=\\{a,b,c,d\\}$ have masses $0.1,0.2,0.3,0.4$. For $A=\\{a,c\\}$ and $B=\\{c,d\\}$, calculate the intersection, union and their probabilities.

<details><summary>Hint 1</summary>

Find set membership before summing weights.

</details>
<details><summary>Hint 2</summary>

The overlap outcome belongs in the union only once.

</details>
<details><summary>Solution</summary>

The intersection is $\\{c\\}$ with probability $0.3$. The union is $\\{a,c,d\\}$ with probability $0.8$. Also $P(A)=0.4$ and $P(B)=0.7$, so $P(A)+P(B)-P(A\\cap B)=0.4+0.7-0.3=0.8$, checking the addition rule. Counting members uniformly would ignore the unequal masses.

</details>

### Exercise 2.2
<a id="sample-spaces-events-ex-2"></a>

On a fair six-sided die, let $A$ mean even and $B$ mean at most three. List the events exactly one of $A,B$, neither and both, and calculate their probabilities.

<details><summary>Hint 1</summary>

The overlap is the even face no larger than three.

</details>
<details><summary>Hint 2</summary>

Exactly one discards the overlap from each event.

</details>
<details><summary>Solution</summary>

Here $A=\\{2,4,6\\}$ and $B=\\{1,2,3\\}$. Both is $\\{2\\}$, probability $1/6$. Exactly one is $\\{1,3,4,6\\}$, probability $2/3$. Neither is $\\{5\\}$, probability $1/6$. These three events partition the six outcomes, and their probabilities sum to one.

</details>

### Exercise 2.3
<a id="sample-spaces-events-ex-3"></a>

Suppose $P(A)=0.6$, $P(B)=0.5$ and $P(A\\cap B)=0.25$. Find the union, neither and exactly-one probabilities.

<details><summary>Hint 1</summary>

Subtract the overlap once when forming the union.

</details>
<details><summary>Hint 2</summary>

For exactly one, remove the overlap from both individual probabilities.

</details>
<details><summary>Solution</summary>

The union probability is $0.6+0.5-0.25=0.85$. Neither has probability $1-0.85=0.15$. Exactly one has probability $0.6+0.5-2(0.25)=0.60$. Together with the both probability $0.25$ and neither probability $0.15$, the latter categories sum to one.

</details>

### Exercise 2.4
<a id="sample-spaces-events-ex-4"></a>

Can events satisfy $P(A)=0.8$, $P(B)=0.7$ and $P(A\\cap B)=0.2$? Justify your answer using probability laws.

<details><summary>Hint 1</summary>

Calculate the implied union probability.

</details>
<details><summary>Hint 2</summary>

Every event probability is at most one.

</details>
<details><summary>Solution</summary>

The addition formula would give union probability $0.8+0.7-0.2=1.3$, which is impossible. In general the union bound $P(A\\cup B)\\le1$ requires $P(A\\cap B)\\ge P(A)+P(B)-1$, so the overlap here must be at least $0.5$. Each supplied number being between zero and one does not guarantee their joint consistency.

</details>

### Exercise 2.5
<a id="sample-spaces-events-ex-5"></a>

Prove $P(A\\setminus B)=P(A)-P(A\\cap B)$ and use it to show that if $A\\subseteq B$ and $P(A)=P(B)$, then $P(B\\setminus A)=0$.

<details><summary>Hint 1</summary>

Partition $A$ into its part inside $B$ and its part outside.

</details>
<details><summary>Hint 2</summary>

For the second claim, the intersection is $A$.

</details>
<details><summary>Solution</summary>

The disjoint decomposition $A=(A\\setminus B)\\cup(A\\cap B)$ gives $P(A)=P(A\\setminus B)+P(A\\cap B)$, proving the formula. If $A\\subseteq B$, then $B\\cap A=A$, so $P(B\\setminus A)=P(B)-P(A)=0$. This does not necessarily make the set difference empty if the model permits zero-mass outcomes.

</details>

### Exercise 2.6
<a id="sample-spaces-events-ex-6"></a>

Three failure events each have probability $0.04$. Without independence assumptions, give an upper bound for at least one failure and a lower bound for no failure.

<details><summary>Hint 1</summary>

The union bound does not require independence.

</details>
<details><summary>Hint 2</summary>

No failure is the complement of the union.

</details>
<details><summary>Solution</summary>

The union probability is at most $3(0.04)=0.12$. Hence the probability of no failure is at least $0.88$. These bounds use no information about overlaps or dependence. Multiplying three success probabilities would require additional independence assumptions and cannot replace the valid bound from the supplied data alone.

</details>

### Exercise 2.7
<a id="sample-spaces-events-ex-7"></a>

Suppose three events have probabilities $0.4,0.3,0.2$, their three pair intersections each have probability $0.1$, and the triple intersection has probability $0.05$. Calculate their union probability.

<details><summary>Hint 1</summary>

Use all three pair corrections, not just one.

</details>
<details><summary>Hint 2</summary>

The triple intersection must be restored after pairwise subtraction.

</details>
<details><summary>Solution</summary>

The probability is $0.4+0.3+0.2-0.1-0.1-0.1+0.05=0.65$. An outcome in all three events was added three times and subtracted three times, so adding the triple probability once restores its required single count. The resulting number lies in the permitted interval and is at least every individual event probability.

</details>

### Exercise 2.8
<a id="sample-spaces-events-ex-8"></a>

A countable law has $P(\\{k\\})=2^{-k}$ for integers $k\\ge1$. Find the probability of an even integer and of an integer at least four.

<details><summary>Hint 1</summary>

Both events are sums of geometric subseries.

</details>
<details><summary>Hint 2</summary>

Even masses begin $1/4,1/16,\\ldots$, while the tail begins $1/16,1/32,\\ldots$.

</details>
<details><summary>Solution</summary>

The even probability is $(1/4)/(1-1/4)=1/3$. The probability of an integer at least four is $(1/16)/(1-1/2)=1/8$. Nonnegative masses justify summing these subseries. The law is not uniform on the positive integers: smaller integers have larger masses.

</details>

### Exercise 2.9
<a id="sample-spaces-events-ex-9"></a>

Explain why a uniform law on all positive integers cannot assign the same probability to each singleton while retaining total probability one.

<details><summary>Hint 1</summary>

Separate the case of a positive common mass from a zero common mass.

</details>
<details><summary>Hint 2</summary>

Probabilities cannot be negative, and countable singleton masses must sum to one.

</details>
<details><summary>Solution</summary>

If the common mass is $c>0$, the first $N$ integers have probability $Nc$, exceeding one for a sufficiently large integer $N$. If the common mass is zero, the sum of all singleton masses is zero, not one. Negative masses are forbidden. Hence no common mass works. Finite uniform laws do exist, but extending their endpoint without specifying a limiting distribution does not produce the requested infinite uniform law.

</details>

### Exercise 2.10
<a id="sample-spaces-events-ex-10"></a>

A record gives only the sum of two dice. Explain why “the first die exceeds the second” is not an event determined by that record, and give a more informative sample space.

<details><summary>Hint 1</summary>

Find two face pairs with the same sum but different truth values for the proposed event.

</details>
<details><summary>Hint 2</summary>

Ordered face pairs preserve which die contributed each value.

</details>
<details><summary>Solution</summary>

The pairs $(5,2)$ and $(2,5)$ both give sum seven, but the first-die comparison is true for the first and false for the second. Therefore the sum record cannot determine membership in that event. Use the thirty-six ordered pairs as the sample space instead. Their probabilities must then be specified; independent fair dice give equal mass $1/36$ to every pair.

</details>

## Sources

This exposition and its exercises are original. For a complementary primary account of sample spaces, event laws and countable masses, see Grinstead and Snell, [*Introduction to Probability*](https://math.dartmouth.edu/~prob/prob/prob.pdf), §1.2, official CHANCE Project text, consulted 13 November 2026. The introductory model-and-events ideas also connect with Euler's retained [Probability: Models Before Formulas](../../courses/probability-models.md).

## Summary

Events are sets of outcomes, and set operations distinguish inclusive or, both, neither and exactly one. Summing masses proves complement, monotonicity and overlap formulas. A union bound gives a safe upper estimate when exact intersections are unavailable.

Uniform counting is a special law, not a property of every finite list. Countable masses extend the framework to waiting outcomes, while a uniform distribution on all positive integers does not exist. [Counting](counting.md) next develops systematic ways to count equally weighted outcomes without losing order, repetition or overlap.
`;export{e as default};