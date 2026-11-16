# Build a weight witness from failed exchange

*Difficulty 5 of 5 · [Discrete mathematics: structure, counting, extremal reasoning, and matroids](index.md) · exercise 14 of 15*

Suppose a hereditary independence system has independent sets I,J with |I|<|J| and no element of J\I can augment I. Construct nonnegative weights for which descending greedy can become stuck at I while J has greater weight. State a deterministic tie order that forces the failure.

<details>
<summary>Hint 1</summary>

Give elements of I a slightly larger individual weight than elements of J\I

</details>

<details>
<summary>Hint 2</summary>

Choose the gap small enough that the larger cardinality of J wins in total

</details>

<details>
<summary>Worked solution</summary>

Let p=|I| and q=|J|, so q>p. Give every element of I weight 1+ε, every element of J\I weight 1, and all other elements weight 0. Break equal-weight ties so elements of I are processed first. Greedy accepts all of I, then rejects every element of J\I by the failed-exchange hypothesis, obtaining weight p(1+ε). The set J has weight at least q-p elements of weight 1 plus any elements in I∩J of weight 1+ε. In the worst comparison where I and J are disjoint, choose 0<ε<(q-p)/p, giving p(1+ε)<q. With overlap, the common high weights cancel and the same inequality based on |J\I|-|I\J| works. Thus J is heavier, so universal greedy correctness fails without exchange.

**Answer.** Weight I slightly above 1, J\I at 1, order I first, and choose ε smaller than the cardinality advantage ratio.

</details>

*Tags: matroid-theory, greedy, counterexample, proof*
