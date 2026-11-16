# Evaluate an area from three side lengths

*Medium · [Geometry and trigonometry problems](index.md)*

A triangle has sides $9,10,17$. Find its area.

```answer
{"answer":{"kind":"integer","expected":"36","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

All triangle inequalities are strict; use the semiperimeter.

</details>

<details>
<summary>Hint 2</summary>

Heron gives the squared area $s(s-9)(s-10)(s-17)$.

</details>

<details>
<summary>Worked solution</summary>

Use Heron to obtain an exact positive area.

1. The semiperimeter is $(9+10+17)/2=18$.
2. Heron gives $\Delta^2=18\cdot9\cdot8\cdot1=1296$.
3. The positive square root is $\Delta=36$.

</details>
