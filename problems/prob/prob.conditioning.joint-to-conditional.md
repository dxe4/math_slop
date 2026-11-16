# Compute a conditional probability from an overlap

*Easy · [Probability problems](index.md)*

Events satisfy $P(A)=2/5$, $P(B)=1/2$ and $P(A\cap B)=3/10$. Find $P(A\mid B)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":5},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the probability of the conditioning event as denominator.

</details>

<details>
<summary>Hint 2</summary>

Only outcomes in the intersection satisfy both the observation and the requested event.

</details>

<details>
<summary>Worked solution</summary>

Conditional probability normalizes the intersection by the observed event.

1. The conditioning probability $P(B)=1/2$ is positive.
2. By definition, $P(A\mid B)=P(A\cap B)/P(B)$.
3. The ratio is $(3/10)/(1/2)=3/5$.

</details>
