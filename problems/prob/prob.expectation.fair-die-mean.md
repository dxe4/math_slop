# Mean of a fair die

*Easy · [Probability problems](index.md)*

Find the expected value of the result of a fair die with faces $1,\ldots,6$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":7,"denominator":2},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the probability-weighted sum of all possible results.

</details>

<details>
<summary>Hint 2</summary>

Every face has the same weight.

</details>

<details>
<summary>Worked solution</summary>

The expectation is the arithmetic mean in a finite uniform model.

1. Each result has probability $1/6$.
2. The expected value is $(1+2+3+4+5+6)/6=21/6$.
3. Thus $E[X]=7/2$. An expected value need not be a possible individual result.

</details>
