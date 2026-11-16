# Reaching the second stage

*Easy · [Probability problems](index.md)*

A procedure stops after stage $1$ with probability $1/3$. Otherwise it reaches stage $2$ and stops there. Find the probability that it reaches stage $2$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":3},"checker_scope":"Checks the exact continuation probability for this two-stage procedure only."}}
```

<details>
<summary>Hint 1</summary>

There are only two stopping possibilities in the stated model.

</details>

<details>
<summary>Hint 2</summary>

Reaching the second stage is the complement of stopping at the first stage.

</details>

<details>
<summary>Worked solution</summary>

This finite procedure uses a complement, not an infinite geometric waiting-time formula.

1. Stopping after stage $1$ and reaching stage $2$ are disjoint events.
2. The procedure follows exactly one of those possibilities, so their probabilities sum to $1$.
3. The continuation probability is $1-1/3=2/3$.

The two possibilities exhaust the procedure, so reaching stage $2$ has probability $1-1/3=2/3$.

</details>
