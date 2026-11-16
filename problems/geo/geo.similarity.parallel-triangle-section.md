# Use a parallel section of a triangle

*Medium · [Geometry and trigonometry problems](index.md)*

In triangle $ABC$, $D$ lies on $AB$ and $E$ on $AC$, with $DE\parallel BC$. Given $AB=12$, $AC=15$ and $AD=8$, find $AE$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Triangle ABC has D on AB, E on AC and DE parallel to BC. AB is 12, AC is 15 and AD is 8." style="max-width:100%;height:auto"><line x1="240" y1="40" x2="60" y2="250" stroke="currentColor" stroke-width="2"/><line x1="60" y1="250" x2="430" y2="250" stroke="currentColor" stroke-width="2"/><line x1="430" y1="250" x2="240" y2="40" stroke="currentColor" stroke-width="2"/><line x1="130" y1="165" x2="353" y2="165" stroke="currentColor" stroke-width="2"/><circle cx="240" cy="40" r="3" fill="currentColor"/><text x="247" y="32" fill="currentColor" font-size="16">A</text><circle cx="60" cy="250" r="3" fill="currentColor"/><text x="67" y="242" fill="currentColor" font-size="16">B</text><circle cx="430" cy="250" r="3" fill="currentColor"/><text x="437" y="242" fill="currentColor" font-size="16">C</text><circle cx="130" cy="165" r="3" fill="currentColor"/><text x="137" y="157" fill="currentColor" font-size="16">D</text><circle cx="353" cy="165" r="3" fill="currentColor"/><text x="360" y="157" fill="currentColor" font-size="16">E</text><text x="20" y="100" fill="currentColor" font-size="15">AB = 12; AD = 8</text><text x="290" y="100" fill="currentColor" font-size="15">AC = 15</text><text x="160" y="285" fill="currentColor" font-size="15">DE parallel to BC</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

The parallel segment produces a smaller triangle sharing vertex $A$.

</details>

<details>
<summary>Hint 2</summary>

Corresponding sides from $A$ have the same smaller-to-larger ratio.

</details>

<details>
<summary>Worked solution</summary>

The parallel-line angle equalities establish the needed similarity.

1. Triangles $ADE$ and $ABC$ are similar by their equal corresponding angles.
2. Their length ratio is $AD/AB=8/12=2/3$.
3. Therefore $AE=(2/3)AC=10$.

</details>
