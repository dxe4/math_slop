# No successes in three trials

*Easy · [Probability problems](index.md)*

Three mutually independent Bernoulli trials each succeed with probability $1/2$. Find the probability of zero successes.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":8},"checker_scope":"Checks the zero-success probability under the stated trial model only."}}
```

<details>
<summary>Hint 1</summary>

Zero successes requires failure at every trial.

</details>

<details>
<summary>Hint 2</summary>

Use mutual independence to multiply the failure probabilities for the complete trial sequence.

</details>

<details>
<summary>Worked solution</summary>

There is a single all-failure path.

1. Each failure has probability $1-1/2=1/2$.
2. The requested event is the intersection of all three failure events. Mutual independence allows its probability to factor.
3. The result is $(1/2)^3=1/8$. No additional binomial coefficient is needed because only one success-position set, the empty set, is permitted.

The all-failure path has probability $(1/2)^3=1/8$.

</details>
