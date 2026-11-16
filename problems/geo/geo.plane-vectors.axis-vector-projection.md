# Project onto a coordinate direction

*Medium · [Geometry and trigonometry problems](index.md)*

Find the orthogonal projection of $a=(3,4)$ onto the line spanned by $b=(1,0)$. Enter the projection vector.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Vector a=(3,4) is projected orthogonally onto the horizontal direction b=(1,0)." style="max-width:100%;height:auto"><line x1="100" y1="240" x2="250" y2="40" stroke="currentColor" stroke-width="2"/><line x1="100" y1="240" x2="400" y2="240" stroke="currentColor" stroke-width="2"/><circle cx="100" cy="240" r="3" fill="currentColor"/><text x="107" y="232" fill="currentColor" font-size="16">O</text><circle cx="250" cy="40" r="3" fill="currentColor"/><text x="257" y="32" fill="currentColor" font-size="16">a</text><circle cx="400" cy="240" r="3" fill="currentColor"/><text x="407" y="232" fill="currentColor" font-size="16">b</text><text x="20" y="285" fill="currentColor" font-size="15">a=(3,4); b=(1,0)</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"vector","expected":["3","0"],"checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Projection onto a nonzero direction uses its dot-product coefficient.

</details>

<details>
<summary>Hint 2</summary>

The requested result is a vector, not just its scalar coefficient.

</details>

<details>
<summary>Worked solution</summary>

The projection formula preserves only the component along the chosen line.

1. The coefficient is $(a\cdot b)/(b\cdot b)=3/1=3$.
2. Multiply this coefficient by $b=(1,0)$.
3. The projection vector is $(3,0)$.

</details>
