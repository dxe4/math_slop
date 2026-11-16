# Locate two triangle centers in coordinates

*Hard · [Original olympiad-style problems](index.md)*

An isosceles triangle has equal sides $10$ and base $12$. Find the squared distance between its incenter and circumcenter.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="An isosceles triangle has equal sides 10 and base 12. Its incenter and circumcenter have not been marked." style="max-width:100%;height:auto"><line x1="240" y1="50" x2="80" y2="250" stroke="currentColor" stroke-width="2"/><line x1="80" y1="250" x2="400" y2="250" stroke="currentColor" stroke-width="2"/><line x1="400" y1="250" x2="240" y2="50" stroke="currentColor" stroke-width="2"/><circle cx="240" cy="50" r="3" fill="currentColor"/><text x="247" y="42" fill="currentColor" font-size="16">A</text><circle cx="80" cy="250" r="3" fill="currentColor"/><text x="87" y="242" fill="currentColor" font-size="16">B</text><circle cx="400" cy="250" r="3" fill="currentColor"/><text x="407" y="242" fill="currentColor" font-size="16">C</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"rational","expected":{"numerator":25,"denominator":16},"checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Use coordinates with the base centered on the horizontal axis.

</details>

<details>
<summary>Hint 2</summary>

The symmetry axis contains both centers; determine each vertical coordinate separately.

</details>

<details>
<summary>Worked solution</summary>

Area and equal-distance conditions locate the two centers without invoking an unproved center-distance formula.

1. Take B=(-6,0), C=(6,0), A=(0,8). The area is 48 and semiperimeter 16, so the incenter is I=(0,3).
2. Write the circumcenter O=(0,k). Equality of distances to A and B gives $(8-k)^2=36+k^2$, hence k=7/4.
3. The center distance is $3-7/4=5/4$, whose square is $25/16$.

</details>
