# Differentiate an exponential composition

*Easy · [Multivariable calculus problems](index.md)*

Let $f(x,y)=e^{xy}$ on $\mathbb R^2$. Find $f_y(0,3)$.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested value, polynomial, vector or matrix only; the explanatory argument is supplied as a worked solution, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Use the chain rule while fixing $x$.

</details>

<details>
<summary>Hint 2</summary>

The inner derivative is the coefficient of $y$ in $xy$.

</details>

<details>
<summary>Worked solution</summary>

The inner derivative remains a factor even when the exponential is nonzero.

1. The chain rule gives $f_y(x,y)=xe^{xy}$.
2. At $(0,3)$ the exponential is $e^0=1$.
3. The prefactor is zero, so $f_y(0,3)=0$.

</details>
