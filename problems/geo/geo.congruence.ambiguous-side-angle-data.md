# Count triangles under ambiguous data

*Hard · [Geometry and trigonometry problems](index.md)*

In triangle notation, $a$ is opposite $A$ and $b$ opposite $B$. Given $a=5$, $b=8$ and $A=30^\circ$, how many noncongruent triangles satisfy these data?

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A triangle is constrained by opposite side a=5, side b=8 and angle A=30 degrees; the diagram represents the data rather than all possible solutions." style="max-width:100%;height:auto"><line x1="70" y1="240" x2="230" y2="60" stroke="currentColor" stroke-width="2"/><line x1="230" y1="60" x2="410" y2="240" stroke="currentColor" stroke-width="2"/><line x1="410" y1="240" x2="70" y2="240" stroke="currentColor" stroke-width="2"/><circle cx="70" cy="240" r="3" fill="currentColor"/><text x="77" y="232" fill="currentColor" font-size="16">A</text><circle cx="230" cy="60" r="3" fill="currentColor"/><text x="237" y="52" fill="currentColor" font-size="16">B</text><circle cx="410" cy="240" r="3" fill="currentColor"/><text x="417" y="232" fill="currentColor" font-size="16">C</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

The sine law gives a sine value for B, which may determine two angles.

</details>

<details>
<summary>Hint 2</summary>

Check that each possible B leaves a strictly positive third angle.

</details>

<details>
<summary>Worked solution</summary>

Side-side-angle data can have two distinct solutions and require an angle-sum check.

1. The sine law gives $\sin B=b\sin A/a=8(1/2)/5=4/5$.
2. Let $B_0$ be the acute solution. Since $\sin B_0>1/2$, $B_0>30^\circ$. Both $B_0$ and $180^\circ-B_0$ therefore leave a positive third angle after adding $A=30^\circ$.
3. The two resulting angle triples are different, and each determines a triangle with the specified side a. Hence there are $2$ noncongruent triangles.

</details>
