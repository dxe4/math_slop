# A Bernoulli second moment

*Easy · [Probability problems](index.md)*

Let $X$ be Bernoulli with $P(X=1)=2/5$ and $P(X=0)=3/5$. Find $E[X^2]$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":5},"checker_scope":"Checks this second moment only; written reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Compare $x^2$ with $x$ at each possible value of $X$.

</details>

<details>
<summary>Hint 2</summary>

Use that pointwise identity before taking expectations, or sum the squared support values against their masses.

</details>

<details>
<summary>Worked solution</summary>

A zero-one variable equals its square.

1. The only possible values are zero and one, and both satisfy $x^2=x$.
2. Thus $X^2=X$ pointwise, so their expectations agree.
3. Directly, $E[X^2]=0^2(3/5)+1^2(2/5)=2/5$. This is not the square of $E[X]$, which would be $4/25$.

Since $X^2=X$, the second moment is $2/5$.

</details>
