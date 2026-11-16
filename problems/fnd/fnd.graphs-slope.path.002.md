# Read coordinates from a table row

*Easy · [Foundations bridge](index.md)*

An $x-y$ table contains the rows $(-1,4), (2,-5)$, and $(6,0)$. For the row whose x-coordinate is $2$, return its x and y coordinates.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"x":"2","y":"-5"},"checker_scope":"Checks only the exact stated structured result; explanation quality and general proof mastery are not assessed."}}
```

<details>
<summary>Hint 1</summary>

First find the row by its x entry.

</details>

<details>
<summary>Hint 2</summary>

Coordinate order is horizontal x, then vertical y.

</details>

<details>
<summary>Worked solution</summary>

Coordinate order preserves the meaning of an ordered pair.

1. The row with $x = 2$ is $(2,-5)$.
2. Thus return $x = 2$ and $y = -5$.

</details>
