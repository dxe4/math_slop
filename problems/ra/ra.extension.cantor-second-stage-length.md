# Add interval lengths while retaining removed gaps

*Easy · [Real analysis](index.md)*

The second middle-third Cantor stage is $[0,1/9]\cup[2/9,1/3]\cup[2/3,7/9]\cup[8/9,1]$. Find the sum of the lengths of these four intervals.

```answer
{"answer":{"kind":"rational","expected":{"numerator":4,"denominator":9},"checker_scope":"Exact requested order quantity or extremization observation only; no general argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Each retained interval has the same length.

</details>

<details>
<summary>Hint 2</summary>

Do not replace the separated union by its convex hull.

</details>

<details>
<summary>Worked solution</summary>

A set's total interval length differs from the length between its extreme points.

1. Each of the four displayed intervals has length 1/9.
2. Their interiors are disjoint, so the requested sum is four times that length.
3. The result is 4/9, although the extreme points of the union are zero and one.

</details>
