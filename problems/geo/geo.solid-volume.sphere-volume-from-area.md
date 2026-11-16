# Recover a radius from sphere area

*Medium · [Geometry and trigonometry problems](index.md)*

A sphere has surface area $36\pi$. Find its volume divided by $\pi$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A sphere, shown with an equatorial schematic, has surface area 36 pi." style="max-width:100%;height:auto"><circle cx="240" cy="150" r="100" fill="none" stroke="currentColor" stroke-width="2"/><ellipse cx="240" cy="150" rx="100" ry="25" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="240" cy="150" r="3" fill="currentColor"/><text x="247" y="142" fill="currentColor" font-size="16">O</text><text x="100" y="280" fill="currentColor" font-size="15">Sphere surface area: 36 pi</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"36","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

First use the sphere surface-area formula to find its positive radius.

</details>

<details>
<summary>Hint 2</summary>

Then apply the sphere volume formula to that radius.

</details>

<details>
<summary>Worked solution</summary>

The area determines the radius before the volume can be evaluated.

1. The area formula gives $4\pi r^2=36\pi$, hence $r^2=9$ and $r=3$.
2. The volume is $4\pi r^3/3=36\pi$.
3. The requested ratio is $36$.

</details>
