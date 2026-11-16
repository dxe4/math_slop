# Infer the number of regular-polygon sides

*Medium · [Geometry and trigonometry problems](index.md)*

Every interior angle of a regular convex polygon is $156^\circ$. How many sides does it have?

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A regular convex polygon has interior angle 156 degrees at every vertex." style="max-width:100%;height:auto"><line x1="70" y1="220" x2="240" y2="140" stroke="currentColor" stroke-width="2"/><line x1="240" y1="140" x2="420" y2="150" stroke="currentColor" stroke-width="2"/><circle cx="70" cy="220" r="3" fill="currentColor"/><text x="77" y="212" fill="currentColor" font-size="16">A</text><circle cx="240" cy="140" r="3" fill="currentColor"/><text x="247" y="132" fill="currentColor" font-size="16">B</text><circle cx="420" cy="150" r="3" fill="currentColor"/><text x="427" y="142" fill="currentColor" font-size="16">C</text><text x="180" y="100" fill="currentColor" font-size="15">Interior angle 156 degrees</text><text x="40" y="275" fill="currentColor" font-size="15">Adjacent edges; other sides omitted</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"15","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Its exterior turning angle is the supplement of the interior angle.

</details>

<details>
<summary>Hint 2</summary>

The equal exterior turns add to a full turn.

</details>

<details>
<summary>Worked solution</summary>

Regularity converts the total turning angle into a side count.

1. The exterior angle is $180-156=24^\circ$.
2. For n sides the total turn is $24n=360^\circ$.
3. Thus $n=15$.

</details>
