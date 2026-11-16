# Invert a shifted simple transform

*Easy · [Differential equations problems](index.md)*

A causal function has Laplace transform $1/(s+3)$. Find its value at $t=\log2$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":8},"checker_scope":"Requested bounded solution observation, spectrum or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A shift in the linear denominator gives an exponential decay.

</details>

<details>
<summary>Hint 2</summary>

Use the exact exponential value at the logarithmic time.

</details>

<details>
<summary>Worked solution</summary>

The elementary exponential transform identifies the causal inverse.

1. The inverse transform is $f(t)=e^{-3t}$ for $t\ge0$, since its transform integral is $1/(s+3)$.
2. At $t=\log2$, the value is $2^{-3}$.
3. Thus the answer is $1/8$.

</details>
