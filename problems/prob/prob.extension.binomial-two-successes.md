# Exactly two successes in four trials

*Medium · [Probability problems](index.md)*

Four mutually independent trials each succeed with probability $1/3$. Find the probability of exactly two successes.

```answer
{"answer":{"kind":"rational","expected":{"numerator":8,"denominator":27},"checker_scope":"Checks the exactly-two probability for the stated binomial model only."}}
```

<details>
<summary>Hint 1</summary>

First choose which trial positions contain the successes.

</details>

<details>
<summary>Hint 2</summary>

Every permitted pattern has two success factors and two failure factors. Sum the equal probabilities of the disjoint patterns.

</details>

<details>
<summary>Worked solution</summary>

Combine a success-position count with a fixed-pattern probability.

1. There are $\binom42=6$ ways to choose the two success positions.
2. For any one such choice, independence gives probability $(1/3)^2(2/3)^2=4/81$.
3. The six patterns are disjoint and exhaustive for exactly two successes, giving $6(4/81)=24/81=8/27$.

The binomial mass is $\binom42(1/3)^2(2/3)^2=8/27$.

</details>
