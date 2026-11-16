# Recover area without finding the legs

*Hard · [Original olympiad-style problems](index.md)*

A right triangle has hypotenuse $15$ and inradius $3$. Find its area.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A right triangle has hypotenuse 15 and inradius 3; the area is requested." style="max-width:100%;height:auto"><line x1="100" y1="250" x2="100" y2="50" stroke="currentColor" stroke-width="2"/><line x1="100" y1="50" x2="400" y2="250" stroke="currentColor" stroke-width="2"/><line x1="400" y1="250" x2="100" y2="250" stroke="currentColor" stroke-width="2"/><circle cx="100" cy="250" r="3" fill="currentColor"/><text x="107" y="242" fill="currentColor" font-size="16">A</text><circle cx="100" cy="50" r="3" fill="currentColor"/><text x="107" y="42" fill="currentColor" font-size="16">B</text><circle cx="400" cy="250" r="3" fill="currentColor"/><text x="407" y="242" fill="currentColor" font-size="16">C</text><text x="180" y="60" fill="currentColor" font-size="15">Hypotenuse 15</text><text x="170" y="280" fill="currentColor" font-size="15">Inradius 3</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"54","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

For a right triangle, the inradius is half the sum of the legs minus the hypotenuse.

</details>

<details>
<summary>Hint 2</summary>

Use area equal to inradius times semiperimeter.

</details>

<details>
<summary>Worked solution</summary>

The hypotenuse and inradius determine the semiperimeter.

1. If the legs are a,b and hypotenuse c, then $r=(a+b-c)/2$, so the semiperimeter is $s=c+r=18$.
2. The incircle decomposition gives area $rs$.
3. The area is $3\cdot18=54$. The 9-12-15 triangle realizes the data.

</details>
