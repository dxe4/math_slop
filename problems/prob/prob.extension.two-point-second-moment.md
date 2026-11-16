# A two-point mean square

*Easy · [Probability problems](index.md)*

A variable $X$ takes $-1$ and $2$ with probability $1/2$ each. Find $E[X^2]$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":5,"denominator":2},"checker_scope":"Checks the second raw moment, not the variance or squared mean."}}
```

<details>
<summary>Hint 1</summary>

Square each support value before averaging.

</details>

<details>
<summary>Hint 2</summary>

Weight those squared values using the probabilities of the original support points.

</details>

<details>
<summary>Worked solution</summary>

Transform the values and retain their probability weights.

1. At $X=-1$, the square is one; at $X=2$, the square is four.
2. Both cases have probability $1/2$, so $E[X^2]=(1/2)1+(1/2)4$.
3. This is $5/2$. It is a raw second moment; centring at the mean would calculate a different quantity.

The squared values are one and four, whose weighted mean is $5/2$.

</details>
