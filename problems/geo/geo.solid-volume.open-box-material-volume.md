# Subtract an interior void

*Medium · [Geometry and trigonometry problems](index.md)*

A solid rectangular block has outer dimensions $10\times8\times6$. An open rectangular cavity of dimensions $8\times6\times5$ is removed, with the whole cavity inside the block except its open top. Find the remaining material volume.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="An outer rectangular block of dimensions 10 by 8 by 6 has an open-top rectangular cavity of dimensions 8 by 6 by 5." style="max-width:100%;height:auto"><line x1="70" y1="240" x2="380" y2="240" stroke="currentColor" stroke-width="2"/><line x1="380" y1="240" x2="420" y2="180" stroke="currentColor" stroke-width="2"/><line x1="420" y1="180" x2="110" y2="180" stroke="currentColor" stroke-width="2"/><line x1="110" y1="180" x2="70" y2="240" stroke="currentColor" stroke-width="2"/><line x1="70" y1="100" x2="380" y2="100" stroke="currentColor" stroke-width="2"/><line x1="380" y1="100" x2="420" y2="40" stroke="currentColor" stroke-width="2"/><line x1="420" y1="40" x2="110" y2="40" stroke="currentColor" stroke-width="2"/><line x1="110" y1="40" x2="70" y2="100" stroke="currentColor" stroke-width="2"/><line x1="70" y1="240" x2="70" y2="100" stroke="currentColor" stroke-width="2"/><line x1="380" y1="240" x2="380" y2="100" stroke="currentColor" stroke-width="2"/><line x1="420" y1="180" x2="420" y2="40" stroke="currentColor" stroke-width="2"/><line x1="110" y1="180" x2="110" y2="40" stroke="currentColor" stroke-width="2"/><line x1="125" y1="95" x2="345" y2="95" stroke="currentColor" stroke-width="2"/><line x1="345" y1="95" x2="375" y2="55" stroke="currentColor" stroke-width="2"/><line x1="375" y1="55" x2="155" y2="55" stroke="currentColor" stroke-width="2"/><line x1="155" y1="55" x2="125" y2="95" stroke="currentColor" stroke-width="2"/><circle cx="70" cy="240" r="3" fill="currentColor"/><text x="77" y="232" fill="currentColor" font-size="16">A</text><circle cx="380" cy="240" r="3" fill="currentColor"/><text x="387" y="232" fill="currentColor" font-size="16">B</text><circle cx="420" cy="180" r="3" fill="currentColor"/><text x="427" y="172" fill="currentColor" font-size="16">C</text><circle cx="110" cy="180" r="3" fill="currentColor"/><text x="117" y="172" fill="currentColor" font-size="16">D</text><circle cx="70" cy="100" r="3" fill="currentColor"/><text x="77" y="92" fill="currentColor" font-size="16">E</text><circle cx="380" cy="100" r="3" fill="currentColor"/><text x="387" y="92" fill="currentColor" font-size="16">F</text><circle cx="420" cy="40" r="3" fill="currentColor"/><text x="427" y="32" fill="currentColor" font-size="16">G</text><circle cx="110" cy="40" r="3" fill="currentColor"/><text x="117" y="32" fill="currentColor" font-size="16">H</text><circle cx="125" cy="95" r="3" fill="currentColor"/><text x="132" y="87" fill="currentColor" font-size="16">I</text><circle cx="345" cy="95" r="3" fill="currentColor"/><text x="352" y="87" fill="currentColor" font-size="16">J</text><circle cx="375" cy="55" r="3" fill="currentColor"/><text x="382" y="47" fill="currentColor" font-size="16">K</text><circle cx="155" cy="55" r="3" fill="currentColor"/><text x="162" y="47" fill="currentColor" font-size="16">L</text><text x="90" y="280" fill="currentColor" font-size="15">Outer 10 x 8 x 6; cavity 8 x 6 x 5</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"240","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Use the outer volume minus the removed volume.

</details>

<details>
<summary>Hint 2</summary>

The cavity dimensions are already supplied; no wall thickness needs to be inferred.

</details>

<details>
<summary>Worked solution</summary>

Volume subtraction handles the open cavity without counting faces.

1. The outer block volume is $10\cdot8\cdot6=480$.
2. The removed cavity volume is $8\cdot6\cdot5=240$.
3. The remaining material has volume $480-240=240$.

</details>
