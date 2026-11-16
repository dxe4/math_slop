# Find the common point of two lines

*Medium · [Geometry and trigonometry problems](index.md)*

Find the intersection of the lines $2x+y=7$ and $x-y=2$. Enter $(x,y)$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Two lines have equations 2x+y=7 and x-y=2; their intersection is requested." style="max-width:100%;height:auto"><line x1="70" y1="50" x2="400" y2="240" stroke="currentColor" stroke-width="2"/><line x1="70" y1="240" x2="400" y2="50" stroke="currentColor" stroke-width="2"/><text x="70" y="35" fill="currentColor" font-size="15">2x + y = 7</text><text x="275" y="35" fill="currentColor" font-size="15">x - y = 2</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"vector","expected":["3","1"],"checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Add the two equations to eliminate one coordinate.

</details>

<details>
<summary>Hint 2</summary>

Then substitute the remaining coordinate into either equation.

</details>

<details>
<summary>Worked solution</summary>

The two independent linear equations have one common solution.

1. Adding yields $3x=9$, so $x=3$.
2. The second equation gives $y=x-2=1$.
3. The intersection is $(3,1)$, satisfying both equations.

</details>
