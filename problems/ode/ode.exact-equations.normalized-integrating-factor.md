# Normalize an integrating factor

*Hard · [Differential equations problems](index.md)*

On $x>0$, seek a nonzero integrating factor $\mu(x)$ for $y\,dx+(x+x^2)\,dy=0$, depending only on $x$ and normalized by $\mu(1)=1$. Find $\mu(3)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Requested bounded solution observation or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

For a factor depending on the first coordinate only, compare the two mixed partial derivatives after multiplication.

</details>

<details>
<summary>Hint 2</summary>

The resulting logarithmic derivative depends only on the first coordinate; integrate and then normalize.

</details>

<details>
<summary>Worked solution</summary>

Exactness gives a scalar linear equation for the integrating factor.

1. Writing $M=y$ and $N=x+x^2$, exactness requires $\mu M_y=\mu^{\prime}N+\mu N_x$. Thus $\mu^{\prime}/\mu=(1-(1+2x))/(x+x^2)=-2/(1+x)$.
2. Integration gives $\mu=C/(1+x)^2$ on $x>0$. Normalization yields $C=4$.
3. The multiplied coefficients have equal mixed partials, both $4/(1+x)^2$, confirming exactness.
4. Therefore $\mu(3)=4/16=1/4$.

</details>
