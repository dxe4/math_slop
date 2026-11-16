# A geometric waiting event

*Easy · [Probability problems](index.md)*

Independent trials each succeed with probability $1/4$. Find the probability that the first success occurs on trial $3$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":9,"denominator":64},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Specify the entire success-failure pattern forced by a first-success time.

</details>

<details>
<summary>Hint 2</summary>

The earlier trials must fail, not merely be unrestricted.

</details>

<details>
<summary>Worked solution</summary>

A first-success event consists of failures followed by one success.

1. The required pattern is failure, failure, success.
2. Its probability is $(3/4)^2(1/4)$ by independence.
3. This equals $9/64$.

</details>
