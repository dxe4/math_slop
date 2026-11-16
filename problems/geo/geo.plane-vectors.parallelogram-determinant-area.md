# Take determinant magnitude for area

*Medium · [Geometry and trigonometry problems](index.md)*

Find the area of the parallelogram spanned by $u=(2,1)$ and $v=(-1,3)$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A parallelogram is spanned by u=(2,1) and v=(-1,3)." style="max-width:100%;height:auto"><line x1="200" y1="240" x2="350" y2="170" stroke="currentColor" stroke-width="2"/><line x1="200" y1="240" x2="120" y2="40" stroke="currentColor" stroke-width="2"/><line x1="350" y1="170" x2="270" y2="10" stroke="currentColor" stroke-width="2"/><line x1="120" y1="40" x2="270" y2="10" stroke="currentColor" stroke-width="2"/><circle cx="200" cy="240" r="3" fill="currentColor"/><text x="207" y="232" fill="currentColor" font-size="16">O</text><circle cx="350" cy="170" r="3" fill="currentColor"/><text x="357" y="162" fill="currentColor" font-size="16">u</text><circle cx="120" cy="40" r="3" fill="currentColor"/><text x="127" y="32" fill="currentColor" font-size="16">v</text><text x="20" y="285" fill="currentColor" font-size="15">u=(2,1); v=(-1,3)</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Use the two-dimensional determinant.

</details>

<details>
<summary>Hint 2</summary>

Geometric area is the absolute value of the signed determinant.

</details>

<details>
<summary>Worked solution</summary>

The determinant measures the signed area scale of the spanning map.

1. The determinant is $2\cdot3-(-1)\cdot1=7$.
2. Its absolute value is the geometric parallelogram area.
3. Therefore the area is $7$.

</details>
