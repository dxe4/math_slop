# List all attaining points

*Medium · [Multivariable calculus problems](index.md)*

Find all global minimizers of $f(x,y)=(x^2-1)^2+y^2$ on $\mathbb R^2$. Enter their coordinates as two matrix rows, ordered by increasing $x$.

```answer
{"answer":{"kind":"matrix","rows":2,"columns":2,"expected":[["-1","0"],["1","0"]],"checker_scope":"Exact requested value, polynomial, vector or matrix only; the explanatory argument is supplied as a worked solution, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Each square is nonnegative.

</details>

<details>
<summary>Hint 2</summary>

To attain the lower bound, both squares must vanish simultaneously.

</details>

<details>
<summary>Worked solution</summary>

A sum of squares attains zero exactly at the common zero set.

1. The expression is nonnegative everywhere.
2. It equals zero exactly when $x^2=1$ and $y=0$.
3. The required ordered rows are $(-1,0)$ and $(1,0)$, and these are all global minimizers.

</details>
