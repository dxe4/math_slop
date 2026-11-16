# Find the separation of ellipse foci

*Medium · [Geometry and trigonometry problems](index.md)*

For the ellipse $x^2/25+y^2/9=1$, find the distance between its two foci.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="An ellipse is given by x squared over 25 plus y squared over 9 equals one; its foci are not marked." style="max-width:100%;height:auto"><ellipse cx="240" cy="150" rx="150" ry="90" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="240" cy="150" r="3" fill="currentColor"/><text x="247" y="142" fill="currentColor" font-size="16">O</text><text x="90" y="30" fill="currentColor" font-size="15">x^2/25 + y^2/9 = 1</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"8","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

The larger denominator determines the major semiaxis.

</details>

<details>
<summary>Hint 2</summary>

The focal distance from the center satisfies the difference-of-squares relation.

</details>

<details>
<summary>Worked solution</summary>

An ellipse has squared focal offset equal to the difference of the squared semiaxes.

1. The semiaxes have lengths $a=5$ and $b=3$.
2. The focal offset satisfies $c^2=a^2-b^2=25-9=16$, so $c=4$.
3. The foci are separated by $2c=8$.

</details>
