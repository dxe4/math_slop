# Orient a composition of intersecting reflections

*Medium · [Geometry and trigonometry problems](index.md)*

Reflect first in the $x$-axis and then in the line through the origin making a counterclockwise angle $30^\circ$ with that axis. The composition is a rotation. Find its counterclockwise angle in $[0,360)$ degrees.

```answer
{"answer":{"kind":"integer","expected":"60","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

A ray of angle $\theta$ first becomes a ray of angle $-\theta$.

</details>

<details>
<summary>Hint 2</summary>

Reflection in a line at angle $\phi$ sends an angle $\psi$ to $2\phi-\psi$.

</details>

<details>
<summary>Worked solution</summary>

Track a general ray angle through both reflections.

1. The first reflection changes the direction from $\theta$ to $-\theta$.
2. The second changes it to $60^\circ-(-\theta)=\theta+60^\circ$.
3. Both maps fix the origin and preserve radii, so the net map is counterclockwise rotation by $60^\circ$.

</details>
