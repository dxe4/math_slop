# Update odds with a likelihood ratio

*Medium · [Probability problems](index.md)*

The prior odds of a hypothesis $H$ against its complement are $2:3$. An observation has likelihood ratio $P(E\mid H)/P(E\mid H^c)=5/2$, with both likelihoods positive. Find $P(H\mid E)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":5,"denominator":8},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Posterior odds equal prior odds multiplied by the likelihood ratio.

</details>

<details>
<summary>Hint 2</summary>

After updating the odds, convert back to a probability.

</details>

<details>
<summary>Worked solution</summary>

An odds calculation avoids carrying an unnecessary common likelihood scale.

1. The prior odds ratio is $2/3$. Multiplying by the likelihood ratio gives posterior odds $(2/3)(5/2)=5/3$.
2. Thus the posterior odds are $5:3$.
3. The posterior probability is $5/(5+3)=5/8$.

</details>
