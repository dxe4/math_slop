# Use alternation on a summed column

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. For arbitrary vectors $a,b\in\mathbb R^3$, find $\det[a\ b\ a+b]$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Expand in the third column using linearity.

</details>

<details>
<summary>Hint 2</summary>

Each resulting determinant repeats one column.

</details>

<details>
<summary>Worked solution</summary>

Multilinearity exposes the dependent-column obstruction.

1. The determinant equals $\det[a\ b\ a]+\det[a\ b\ b]$.
2. Each summand is zero by alternation because two columns agree.
3. Therefore the result is zero for every choice of the two vectors.

</details>
