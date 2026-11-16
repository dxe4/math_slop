# Subtract concentric disk areas

*Easy · [Geometry and trigonometry problems](index.md)*

An annulus lies between concentric circles of radii $5$ and $3$. Find its area divided by $\pi$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Two concentric circles have common center O, inner radius 3 and outer radius 5." style="max-width:100%;height:auto"><circle cx="240" cy="150" r="110" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="240" cy="150" r="65" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="240" cy="150" r="3" fill="currentColor"/><text x="247" y="142" fill="currentColor" font-size="16">O</text><text x="255" y="145" fill="currentColor" font-size="15">Inner radius 3</text><text x="255" y="265" fill="currentColor" font-size="15">Outer radius 5</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"16","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Subtract the smaller disk area from the larger.

</details>

<details>
<summary>Hint 2</summary>

Square the radii separately before subtracting.

</details>

<details>
<summary>Worked solution</summary>

The annular region is the set difference of two nested disks.

1. The outer disk area is $25\pi$.
2. The inner disk area is $9\pi$.
3. The annulus area is $16\pi$, giving ratio $16$.

</details>
