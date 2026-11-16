# Keep both roots of a square equation

*Easy · [Foundations bridge](index.md)*

Find every real solution of $x^{2} = 9$. Return a set.

```answer
{"answer":{"kind":"finite_integer_set","expected":[-3,3],"checker_scope":"Checks only the exact stated structured result; explanation quality and general proof mastery are not assessed."}}
```

<details>
<summary>Hint 1</summary>

The equation asks for all real solutions, rather than a principal root.

</details>

<details>
<summary>Hint 2</summary>

Both signs of a number can have the same square.

</details>

<details>
<summary>Worked solution</summary>

The square-root symbol and a quadratic solution set use different conventions.

1. Rewrite as $x^{2} - 9 = (x - 3) (x + 3) = 0$.
2. Either factor can vanish, so the solution set is $\{-3,3\}$.

</details>
