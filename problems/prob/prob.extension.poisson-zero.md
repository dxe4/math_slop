# A Poisson zero count

*Easy · [Probability problems](index.md)*

Let $X$ have the Poisson law $P(X=k)=e^{-\lambda}\lambda^k/k!$ for integers $k\ge0$, with $\lambda=\log 2$ and natural logarithm $\log$. Find $P(X=0)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the zero mass for the displayed Poisson law only."}}
```

<details>
<summary>Hint 1</summary>

Substitute zero into the given probability mass function.

</details>

<details>
<summary>Hint 2</summary>

Use $0!=1$ and the inverse relationship between the natural logarithm and the exponential.

</details>

<details>
<summary>Worked solution</summary>

Evaluate the supplied mass function at its zero atom.

1. For $k=0$, the factor $\lambda^0/0!$ equals one.
2. Thus $P(X=0)=e^{-\lambda}=e^{-\log2}$.
3. Since $e^{\log2}=2$, the probability is $1/2$. The positive parameter $\log2$ defines a valid Poisson law.

Its zero mass is $e^{-\log2}=1/2$.

</details>
