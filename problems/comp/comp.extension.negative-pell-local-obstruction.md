# Rule out a large finite search using a local square obstruction

*Easy · [Computational arithmetic problems](index.md)*

How many integer pairs satisfy $0\le x,y\le1000000$ and x^2-3y^2=-1? Use that square residues modulo three are only zero and one.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Reduce the equation before considering the search bounds.

</details>

<details>
<summary>Hint 2</summary>

The y term disappears modulo three.

</details>

<details>
<summary>Worked solution</summary>

A local obstruction can exclude every candidate in an enormous finite region.

1. The equation would require x^2 congruent to negative one, or two, modulo three.
2. The supplied square-residue list excludes that congruence for every integer x.
3. No integer pair exists at all, so the bounded count is zero.

</details>
