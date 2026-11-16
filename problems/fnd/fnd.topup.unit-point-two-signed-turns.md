# Track a unit-circle point through two turns

*Hard · [Foundations bridge](index.md)*

A point on the unit circle is $(-3/5,4/5)$. Rotate it $90^\circ$ counterclockwise, then $180^\circ$ clockwise. If the final point has angle phi from the positive x-axis, enter $(\sin\phi,\cos\phi)$ in that order.

```answer
{"answer":{"kind":"vector","expected":["3/5","4/5"],"checker_scope":"Exact requested bounded result only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

A counterclockwise quarter-turn sends (x,y) to (-y,x).

</details>

<details>
<summary>Hint 2</summary>

A half-turn negates both current coordinates; sine and cosine then come from different coordinate positions.

</details>

<details>
<summary>Worked solution</summary>

The rotation rules determine the final coordinates, and the requested answer reverses their usual x,y order.

1. The first turn sends $(-3/5,4/5)$ to $(-4/5,-3/5)$.
2. The clockwise half-turn gives $(4/5,3/5)$.
3. On the unit circle cosine is the x-coordinate and sine the y-coordinate, so the requested ordered pair is $(3/5,4/5)$.

</details>
