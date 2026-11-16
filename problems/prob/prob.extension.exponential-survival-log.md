# An exponential survival probability

*Easy · [Probability problems](index.md)*

Let $T$ have exponential density $f(t)=\lambda e^{-\lambda t}$ for $t\ge0$, with rate $\lambda=\log2$ and natural logarithm. Find $P(T>1)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the stated exponential tail at time one only."}}
```

<details>
<summary>Hint 1</summary>

Integrate the density from the threshold to infinity, or use the exponential survival formula.

</details>

<details>
<summary>Hint 2</summary>

Substitute the rate and use that exponentiation and the natural logarithm are inverse functions.

</details>

<details>
<summary>Worked solution</summary>

Evaluate the exponential tail.

1. For positive rate $\lambda$, integrating the density gives $P(T>t)=e^{-\lambda t}$ for $t\ge0$.
2. At $t=1$ and $\lambda=\log2>0$, this is $e^{-\log2}$.
3. Since $e^{\log2}=2$, the required probability is $1/2$. The parameter is a rate, not the mean waiting time.

The survival probability is $e^{-\log2}=1/2$.

</details>
