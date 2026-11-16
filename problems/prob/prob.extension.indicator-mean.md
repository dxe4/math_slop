# Mean of an event indicator

*Easy · [Probability problems](index.md)*

An event $A$ has probability $3/8$. Let $\mathbf1_A$ equal one on $A$ and zero outside it. Find $E[\mathbf1_A]$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":8},"checker_scope":"Checks this indicator mean only; written reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Identify the probabilities attached to the indicator's two possible values.

</details>

<details>
<summary>Hint 2</summary>

Use the definition of expectation as the probability-weighted sum of those values.

</details>

<details>
<summary>Worked solution</summary>

Only the value-one outcome contributes to the mean.

1. The indicator is one with probability $P(A)=3/8$ and zero with probability $5/8$.
2. Its expectation is $1\cdot P(A)+0\cdot P(A^c)$.
3. Consequently $E[\mathbf1_A]=3/8$. The indicator is bounded, so its expectation is well defined.

The probability-weighted mean is $1(3/8)+0(5/8)=3/8$.

</details>
