# Combine two triangle edge vectors

*Medium · [Geometry and trigonometry problems](index.md)*

Let $A=(0,0)$, $B=(4,0)$ and $C=(1,3)$. A point $P$ satisfies $\overrightarrow{AP}=\frac14\overrightarrow{AB}+\frac12\overrightarrow{AC}$. Find $P$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Triangle vertices are A=(0,0), B=(4,0), C=(1,3); AP is one-quarter AB plus one-half AC." style="max-width:100%;height:auto"><line x1="70" y1="240" x2="390" y2="240" stroke="currentColor" stroke-width="2"/><line x1="390" y1="240" x2="150" y2="40" stroke="currentColor" stroke-width="2"/><line x1="150" y1="40" x2="70" y2="240" stroke="currentColor" stroke-width="2"/><circle cx="70" cy="240" r="3" fill="currentColor"/><text x="77" y="232" fill="currentColor" font-size="16">A</text><circle cx="390" cy="240" r="3" fill="currentColor"/><text x="397" y="232" fill="currentColor" font-size="16">B</text><circle cx="150" cy="40" r="3" fill="currentColor"/><text x="157" y="32" fill="currentColor" font-size="16">C</text><text x="20" y="285" fill="currentColor" font-size="15">A=(0,0); B=(4,0); C=(1,3)</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"vector","expected":["3/2","3/2"],"checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Both edge vectors begin at A.

</details>

<details>
<summary>Hint 2</summary>

Scale the two vectors separately before adding them.

</details>

<details>
<summary>Worked solution</summary>

The supplied affine relation directly determines the position vector from A.

1. The vectors are $\overrightarrow{AB}=(4,0)$ and $\overrightarrow{AC}=(1,3)$.
2. Their weighted sum is $(1,0)+(1/2,3/2)=(3/2,3/2)$.
3. Since A is the origin, $P=(3/2,3/2)$.

</details>
