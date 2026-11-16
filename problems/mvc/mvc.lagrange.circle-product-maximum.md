# Maximize a product on a circle

*Medium · [Multivariable calculus problems](index.md)*

Find the maximum of $xy$ subject to $x^2+y^2=2$, with real $x,y$.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact requested value, vector or matrix only; a numerical answer does not automatically certify the accompanying extremum or integration argument."}}
```

<details>
<summary>Hint 1</summary>

The square of a difference provides an upper bound for the product.

</details>

<details>
<summary>Hint 2</summary>

Check which signs permit equality while meeting the constraint.

</details>

<details>
<summary>Worked solution</summary>

A sharp inequality and an attaining pair establish the constrained maximum.

1. From $(x-y)^2\geq0$, $2xy\leq x^2+y^2=2$.
2. Thus $xy\leq1$.
3. Both $(1,1)$ and $(-1,-1)$ meet the constraint and attain $1$, so the maximum is $1$.

</details>
