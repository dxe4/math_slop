# Infer height from simultaneous shadows

*Medium · [Geometry and trigonometry problems](index.md)*

On level ground, a vertical $1.5$ metre stick casts a $2$ metre shadow. At the same instant a vertical pole casts a $6$ metre shadow. Assuming parallel sunlight rays, find the pole height in metres.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Vertical stick ST of height 1.5 metres has a 2 metre shadow; parallel rays give a pole PQ with a 6 metre ground shadow." style="max-width:100%;height:auto"><line x1="50" y1="240" x2="50" y2="160" stroke="currentColor" stroke-width="2"/><line x1="50" y1="160" x2="150" y2="240" stroke="currentColor" stroke-width="2"/><line x1="150" y1="240" x2="50" y2="240" stroke="currentColor" stroke-width="2"/><line x1="240" y1="240" x2="240" y2="60" stroke="currentColor" stroke-width="2"/><line x1="240" y1="60" x2="450" y2="240" stroke="currentColor" stroke-width="2"/><line x1="450" y1="240" x2="240" y2="240" stroke="currentColor" stroke-width="2"/><circle cx="50" cy="240" r="3" fill="currentColor"/><text x="57" y="232" fill="currentColor" font-size="16">S</text><circle cx="50" cy="160" r="3" fill="currentColor"/><text x="57" y="152" fill="currentColor" font-size="16">T</text><circle cx="150" cy="240" r="3" fill="currentColor"/><text x="157" y="232" fill="currentColor" font-size="16">U</text><circle cx="240" cy="240" r="3" fill="currentColor"/><text x="247" y="232" fill="currentColor" font-size="16">P</text><circle cx="240" cy="60" r="3" fill="currentColor"/><text x="247" y="52" fill="currentColor" font-size="16">Q</text><circle cx="450" cy="240" r="3" fill="currentColor"/><text x="457" y="232" fill="currentColor" font-size="16">R</text><text x="15" y="130" fill="currentColor" font-size="15">ST = 1.5 m</text><text x="55" y="275" fill="currentColor" font-size="15">SU = 2 m</text><text x="285" y="275" fill="currentColor" font-size="15">PR = 6 m</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"rational","expected":{"numerator":9,"denominator":2},"checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

The vertical objects and level ground form right triangles.

</details>

<details>
<summary>Hint 2</summary>

Parallel rays make the acute sunlight angles equal in the two triangles.

</details>

<details>
<summary>Worked solution</summary>

The two right triangles have equal angles and therefore proportional corresponding sides.

1. The height-to-shadow ratio is the same for both objects.
2. For the stick this ratio is $1.5/2=3/4$.
3. The pole height is $6\cdot3/4=9/2$ metres.

</details>
