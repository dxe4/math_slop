# Standardization two strata

*Easy · [Statistics and probability](index.md)*

Two stratum-specific probabilities are $r_1=1/10$ and $r_2=3/10$. A specified target population has weights $w_1=1/4$ and $w_2=3/4$. What is the standardized probability $w_1r_1+w_2r_2$?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

The target weights are supplied and add to one.

</details>

<details>
<summary>Hint 2</summary>

Weight each stratum-specific probability by its corresponding target share before adding.

</details>

<details>
<summary>Worked solution</summary>

Standardization averages stratum probabilities for the declared target composition.

1. The first weighted contribution is $(1/4)(1/10)=1/40$.
2. The second is $(3/4)(3/10)=9/40$.
3. The standardized probability is $10/40=1/4$. It describes the specified target weights, not an arbitrary sample composition.

</details>
