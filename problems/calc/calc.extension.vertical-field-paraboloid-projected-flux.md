# Cancel graph-normal normalization in a flux integral

*Medium · [Calculus](index.md)*

Let S be z=x²+y² above the unit disk, oriented upward, and F=(0,0,1). Find $\pi^{-1}\iint_SF\cdot n\,dS$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The upward vector-area element is (−2x,−2y,1)dxdy.

</details>

<details>
<summary>Hint 2</summary>

Dot the field with that unnormalized vector before introducing scalar area factors.

</details>

<details>
<summary>Worked solution</summary>

Flux can equal projected area even when scalar surface area is larger.

1. The dot product F·(−2x,−2y,1) is 1.
2. The flux is therefore the base disk area π.
3. The normalized flux is 1; using scalar area alone would give a different quantity.

</details>
