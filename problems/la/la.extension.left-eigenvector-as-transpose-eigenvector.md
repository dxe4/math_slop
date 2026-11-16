# Translate a left eigenvector statement

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. Let $w=(1,2)^T$ satisfy $w^TA=-w^T$. Compute $A^Tw$.

```answer
{"answer":{"kind":"vector","expected":["-1","-2"],"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Transpose the supplied row-vector equality.

</details>

<details>
<summary>Hint 2</summary>

Transposition reverses the order of multiplication.

</details>

<details>
<summary>Worked solution</summary>

A left eigenvector becomes a right eigenvector of the transpose.

1. Transposing gives $(w^TA)^T=A^Tw$.
2. The transpose of the right-hand side is $-w$.
3. Thus the requested vector is $(-1,-2)^T$.

</details>
