# Sample covariance divisor

*Medium · [Statistics and probability](index.md)*

Two paired observations are $(0,0)$ and $(2,4)$. Using $s_{xy}=\sum_{i=1}^n(x_i-\overline x)(y_i-\overline y)/(n-1)$, what is their sample covariance?

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Calculate the two coordinate means separately, keeping the observed pairs together.

</details>

<details>
<summary>Hint 2</summary>

Multiply the centered coordinates within each pair, add those products, then use the stated divisor.

</details>

<details>
<summary>Worked solution</summary>

Keep the pairings and the divisor in the sample covariance formula.

1. The means are $\overline x=(0+2)/2=1$ and $\overline y=(0+4)/2=2$.
2. The centered pairs are $(-1,-2)$ and $(1,2)$, with cross-product sum $(-1)(-2)+(1)(2)=4$.
3. Since $n-1=1$, $s_{xy}=4/1=4$. Dividing by $n$ instead would define a different quantity, equal here to $2$.

</details>
