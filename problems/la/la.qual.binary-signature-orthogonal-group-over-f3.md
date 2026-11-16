# Count isometries of an anisotropic finite-field plane

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb F_3$, use $q(x,y)=x^2+y^2$. Return \[order of its full orthogonal group, number of its isometries with determinant one\].

```answer
{"answer":{"kind":"vector","expected":["8","4"],"checker_scope":"Only the requested finite invariant or rational coordinate result is checked; form classification and reasoning are not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

The first column must have norm one; enumerate which coordinates can be nonzero.

</details>

<details>
<summary>Hint 2</summary>

For each first column, its perpendicular line has exactly two norm-one choices for the second column.

</details>

<details>
<summary>Worked solution</summary>

Count orthonormal ordered bases in the specified finite form.

1. A norm-one vector has exactly one nonzero coordinate, because both nonzero squares would sum to two rather than one. There are four such first columns.
2. Its perpendicular coordinate line has two possible norm-one second columns. Thus there are eight orthogonal matrices.
3. For each first column, negating the second column exchanges determinants one and minus one. Exactly half have determinant one, giving $[8,4]$.

</details>
