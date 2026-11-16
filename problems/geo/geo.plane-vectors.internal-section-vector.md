# Use a stated internal division ratio

*Medium · [Geometry and trigonometry problems](index.md)*

Point $P$ lies inside the segment from $A=(-2,1)$ to $B=(8,6)$ with $AP:PB=2:3$. Find $P$ as $(x,y)$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A segment joins A=(-2,1) to B=(8,6); P divides it internally with AP:PB=2:3." style="max-width:100%;height:auto"><line x1="70" y1="240" x2="400" y2="60" stroke="currentColor" stroke-width="2"/><circle cx="70" cy="240" r="3" fill="currentColor"/><text x="77" y="232" fill="currentColor" font-size="16">A</text><circle cx="400" cy="60" r="3" fill="currentColor"/><text x="407" y="52" fill="currentColor" font-size="16">B</text><text x="20" y="285" fill="currentColor" font-size="15">A=(-2,1); B=(8,6); AP:PB=2:3</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"vector","expected":["2","3"],"checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

The first subsegment occupies two of five equal shares of the whole.

</details>

<details>
<summary>Hint 2</summary>

Start at A and add that fraction of the vector from A to B.

</details>

<details>
<summary>Worked solution</summary>

The internal ratio determines an affine combination of endpoints.

1. The displacement $B-A$ is $(10,5)$.
2. Because $AP/AB=2/5$, $P=A+(2/5)(B-A)$.
3. This gives $P=(-2,1)+(4,2)=(2,3)$.

</details>
