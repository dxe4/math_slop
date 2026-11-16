# Prove attainment on a noncompact constraint

*Hard · [Multivariable calculus problems](index.md)*

Find the global minimum of $x^2+4y^2$ over real pairs with $xy=1$. The constraint is not compact, so justify attainment in the worked reasoning.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact requested value, vector or matrix only; a numerical answer does not automatically certify the accompanying extremum or integration argument."}}
```

<details>
<summary>Hint 1</summary>

Use the fixed product to compare the two nonnegative summands.

</details>

<details>
<summary>Hint 2</summary>

The square of $x-2y$ gives a lower bound; find a pair where it vanishes.

</details>

<details>
<summary>Worked solution</summary>

A sharp global bound avoids relying on compactness or multiplier candidates alone.

1. On $xy=1$, $x^2+4y^2=(x-2y)^2+4xy=(x-2y)^2+4\geq4$.
2. Equality requires $x=2y$ and $xy=1$, hence $y=\pm1/\sqrt2$ with the same-sign $x=\pm\sqrt2$.
3. These real pairs lie on the constraint and attain $4$, establishing the global minimum.

</details>
