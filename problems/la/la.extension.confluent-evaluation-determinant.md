# Combine value and derivative interpolation functionals

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. For $T:P_3(\mathbb R)\to\mathbb R^4$, $T(p)=(p(0),p^{\prime}(0),p(2),p^{\prime}(2))$, find the determinant of its matrix in the ordered input basis $(1,x,x^2,x^3)$ and standard output basis.

```answer
{"answer":{"kind":"integer","expected":16,"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The first two output rows select the constant and linear coefficients.

</details>

<details>
<summary>Hint 2</summary>

Eliminate those coordinates from the last two rows, leaving a two-by-two determinant.

</details>

<details>
<summary>Worked solution</summary>

Repeated nodes require derivative data rather than duplicate evaluation rows.

1. The matrix rows are $(1,0,0,0)$, $(0,1,0,0)$, $(1,2,4,8)$ and $(0,1,4,12)$.
2. Subtracting the first two coordinate rows appropriately leaves a lower block $\begin{pmatrix}4&8\\4&12\end{pmatrix}$ without changing the determinant.
3. The determinant is $48-32=16$, confirming unique cubic recovery from the four supplied functionals.

</details>
