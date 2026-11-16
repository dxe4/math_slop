# Extract covariance from a binary joint law

*Medium · [Probability problems](index.md)*

For binary $X,Y$, suppose $P(0,0)=P(1,1)=3/8$ and $P(0,1)=P(1,0)=1/8$. Find $\operatorname{Cov}(X,Y)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":8},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Find the two marginal means and the product mean separately.

</details>

<details>
<summary>Hint 2</summary>

For binary coordinates the product is one only at the pair with both coordinates one.

</details>

<details>
<summary>Worked solution</summary>

Covariance compares the joint product mean with the product of marginal means.

1. Each coordinate has probability $1/2$ of being one, so $E[X]=E[Y]=1/2$.
2. The product mean is $E[XY]=P(1,1)=3/8$.
3. Therefore the covariance is $3/8-(1/2)(1/2)=1/8$.

</details>
