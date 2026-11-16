# Find a power trace without off-diagonal multiplication

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. A real upper-triangular $3\times3$ matrix has diagonal entries $1,2,-1$. Find $\operatorname{tr}(A^3)$.

```answer
{"answer":{"kind":"integer","expected":8,"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The diagonal of a product of triangular matrices is the product of their corresponding diagonal entries.

</details>

<details>
<summary>Hint 2</summary>

Cube the diagonal entries before summing.

</details>

<details>
<summary>Worked solution</summary>

Use triangular structure while retaining a trace quantity.

1. The third power remains upper triangular.
2. Its diagonal entries are $1^3$, $2^3$ and $(-1)^3$.
3. The trace is $1+8-1=8$, regardless of the entries strictly above the diagonal.

</details>
