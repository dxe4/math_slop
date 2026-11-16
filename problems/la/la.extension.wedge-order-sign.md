# Reverse two factors of an exterior product

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. In $\Lambda^2(\mathbb R^3)$ use $e_1\wedge e_2$ as the ordered coordinate wedge. Find the coefficient of that wedge in $e_2\wedge e_1$.

```answer
{"answer":{"kind":"integer","expected":-1,"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The exterior product is alternating.

</details>

<details>
<summary>Hint 2</summary>

Interchanging two factors reverses the sign.

</details>

<details>
<summary>Worked solution</summary>

Orientation is encoded in wedge order.

1. Alternation gives $e_2\wedge e_1=-e_1\wedge e_2$.
2. No other coordinate wedge occurs in this expression.
3. The requested coefficient is minus one.

</details>
