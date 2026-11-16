# Close a directed triangle boundary

*Easy · [Geometry and trigonometry problems](index.md)*

Three directed edges traverse a triangle in order and return to their starting point. The first two edge vectors are $(2,1)$ and $(-3,4)$. Find the third as $[x,y]$.

```answer
{"answer":{"kind":"vector","expected":["1","-5"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

A closed traversal has total displacement zero.

</details>

<details>
<summary>Hint 2</summary>

Negate the sum of the two known edge vectors.

</details>

<details>
<summary>Worked solution</summary>

Use zero displacement around a closed path.

1. If the third edge is $w$, then $(2,1)+(-3,4)+w=(0,0)$.
2. The known sum is $(-1,5)$.
3. Thus $w=(1,-5)$, which closes the path.

</details>
