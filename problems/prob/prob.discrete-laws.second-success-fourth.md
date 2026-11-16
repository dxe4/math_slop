# A second-success waiting event

*Medium · [Probability problems](index.md)*

Independent fair Bernoulli trials are observed. Find the probability that the second success occurs on trial $4$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":16},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The last specified trial must be a success.

</details>

<details>
<summary>Hint 2</summary>

Among the earlier trials, exactly one success is needed; count its possible locations.

</details>

<details>
<summary>Worked solution</summary>

A negative-binomial event separates the final success from the earlier success positions.

1. Trial $4$ must succeed, and exactly one of the first three trials must succeed.
2. There are $\binom31=3$ possible earlier success locations. Each resulting four-trial pattern has probability $1/16$.
3. The probability is $3/16$.

</details>
