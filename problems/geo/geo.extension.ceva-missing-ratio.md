# Close a concurrent cevian product

*Medium · [Geometry and trigonometry problems](index.md)*

$D,E,F$ lie strictly inside $BC,CA,AB$. The lines $AD,BE,CF$ concur. Given $BD/DC=2$ and $CE/EA=3$, find $AF/FB$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":6},"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Ceva uses the cyclic product $BD/DC\cdot CE/EA\cdot AF/FB$.

</details>

<details>
<summary>Hint 2</summary>

Internal concurrence makes that product equal to $1$.

</details>

<details>
<summary>Worked solution</summary>

Use Ceva in consistent cyclic order.

1. Ceva gives $(BD/DC)(CE/EA)(AF/FB)=1$.
2. Substitution gives $6(AF/FB)=1$.
3. Thus $AF/FB=1/6$, positive as required for an internal division.

</details>
