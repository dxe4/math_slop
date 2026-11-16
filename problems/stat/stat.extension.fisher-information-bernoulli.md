# Fisher information bernoulli

*Easy · [Statistics and probability](index.md)*

For one $\operatorname{Bernoulli}(p)$ observation, the Fisher information in $p$ is $I(p)=1/[p(1-p)]$ for $0<p<1$. What is $I(1/4)$?

```answer
{"answer":{"kind":"rational","expected":{"numerator":16,"denominator":3},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Compute the product in the denominator before taking its reciprocal.

</details>

<details>
<summary>Hint 2</summary>

The information formula is supplied; no differentiation is required.

</details>

<details>
<summary>Worked solution</summary>

Evaluate the supplied one-observation information formula.

1. At $p=1/4$, the failure probability is $1-p=3/4$.
2. The denominator is $p(1-p)=(1/4)(3/4)=3/16$.
3. Hence $I(1/4)=16/3$. This is for one observation and this parameterization; independent replication multiplies information by sample size.

</details>
