# Use a right triangle circumcenter

*Medium · [Geometry and trigonometry problems](index.md)*

A right triangle has hypotenuse length $26$. Find the median length from the right-angle vertex to the hypotenuse.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A right triangle has hypotenuse 26. The median from the right-angle vertex to the hypotenuse is requested." style="max-width:100%;height:auto"><line x1="100" y1="240" x2="100" y2="60" stroke="currentColor" stroke-width="2"/><line x1="100" y1="60" x2="400" y2="240" stroke="currentColor" stroke-width="2"/><line x1="400" y1="240" x2="100" y2="240" stroke="currentColor" stroke-width="2"/><line x1="100" y1="240" x2="250" y2="150" stroke="currentColor" stroke-width="2"/><circle cx="100" cy="240" r="3" fill="currentColor"/><text x="107" y="232" fill="currentColor" font-size="16">A</text><circle cx="100" cy="60" r="3" fill="currentColor"/><text x="107" y="52" fill="currentColor" font-size="16">B</text><circle cx="400" cy="240" r="3" fill="currentColor"/><text x="407" y="232" fill="currentColor" font-size="16">C</text><circle cx="250" cy="150" r="3" fill="currentColor"/><text x="257" y="142" fill="currentColor" font-size="16">M</text><text x="170" y="45" fill="currentColor" font-size="15">BC = 26; M is midpoint of BC</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"13","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

The hypotenuse midpoint is equidistant from all three vertices.

</details>

<details>
<summary>Hint 2</summary>

The distance from that midpoint to an endpoint is half the hypotenuse.

</details>

<details>
<summary>Worked solution</summary>

The right triangle circumcenter lies at the hypotenuse midpoint.

1. By the converse geometric form of the diameter theorem, the midpoint of the hypotenuse is the circumcenter.
2. The median from the right-angle vertex is therefore a circumradius.
3. Its length is half the hypotenuse, $26/2=13$.

</details>
