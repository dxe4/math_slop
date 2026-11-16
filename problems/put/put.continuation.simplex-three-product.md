# Simplex three product

*Medium · [Original Putnam-style training](index.md)*

For $x,y,z\ge0$ with $x+y+z=1$, find the maximum of $xyz$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":27},"checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Compare the product with the cube of the arithmetic mean.

</details>

<details>
<summary>Hint 2</summary>

Check whether the equality point is feasible.

</details>

<details>
<summary>Worked solution</summary>

The feasible point $x=y=z=1/3$ attains equality, so the maximum is $1/27$.

1. AM–GM gives $(xyz)^{1/3}\le(x+y+z)/3=1/3$.
2. Cubing yields $xyz\le1/27$.
3. The feasible point $x=y=z=1/3$ attains equality, so the maximum is $1/27$.

</details>
