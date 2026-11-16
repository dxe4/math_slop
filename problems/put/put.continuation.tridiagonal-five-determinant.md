# Tridiagonal five determinant

*Medium · [Original Putnam-style training](index.md)*

Let $T_n$ be the $n\times n$ tridiagonal matrix with $2$ on the diagonal and $-1$ immediately above and below it. Find $\det T_5$.

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Expand the determinant along the first row.

</details>

<details>
<summary>Hint 2</summary>

The resulting recurrence has two initial values.

</details>

<details>
<summary>Worked solution</summary>

One more step gives $D_5=2\cdot5-4=6$.

1. Laplace expansion along the first row gives $D_n=2D_{n-1}-D_{n-2}$ for $n\ge2$, with $D_0=1$ and $D_1=2$.
2. The recurrence produces $D_2=3$, $D_3=4$, $D_4=5$.
3. One more step gives $D_5=2\cdot5-4=6$.

</details>
