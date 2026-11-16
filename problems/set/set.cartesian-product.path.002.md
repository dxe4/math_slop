# Every first choice gets every second choice

*Easy · [Set theory](index.md)*

Let $A=\{a,b,c\}$ and $B=\{x,y\}$, with the displayed objects distinct. How many ordered pairs are in $A\times B$?

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

For each first coordinate, both second coordinates are possible.

</details>

<details>
<summary>Hint 2</summary>

Count the disjoint pairs starting with a, b and c.

</details>

<details>
<summary>Worked solution</summary>

Cartesian-product choices multiply because every first choice permits all second choices.

1. The pairs are (a,x),(a,y),(b,x),(b,y),(c,x),(c,y).
2. There are $3\times 2=6$ pairs.

</details>
