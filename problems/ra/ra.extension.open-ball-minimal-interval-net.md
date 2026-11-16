# Handle strict ball boundaries in a finite covering problem

*Medium · [Real analysis](index.md)*

What is the smallest number of open real balls of radius 1/4, with arbitrary real centers, whose union covers $[0,1]$? Give both a lower-bound reason and an attaining cover in the worked solution.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact requested metric observation or finite covering count only; no completeness proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Two balls have total length one before any overlap or endpoint overhang.

</details>

<details>
<summary>Hint 2</summary>

A cover of the closed endpoints must overhang them strictly.

</details>

<details>
<summary>Worked solution</summary>

Open-ball strictness prevents a length-equality shortcut at the covering threshold.

1. One ball has length one half, so it cannot cover \[0,1\]. If two radius-one-quarter open intervals covered \[0,1\], their union would have to contain a neighborhood beyond each endpoint and all points between, hence have length strictly greater than one. But the sum of their lengths is only one, a contradiction.
2. Three balls centered at 1/8,1/2,7/8 have intervals (-1/8,3/8),(1/4,3/4),(5/8,9/8).
3. These intervals overlap successively and include both endpoints, giving a cover. Thus the minimum is three.

</details>
