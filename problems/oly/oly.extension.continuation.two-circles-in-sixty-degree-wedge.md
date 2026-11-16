# A ratio forced by a wedge and a contact

*Medium · [Original olympiad-style problems](index.md)*

Two circles lie inside a $60^\circ$ angle and are tangent to both of its rays. Their centers lie on the internal bisector, the larger circle is farther from the vertex, and the two circles are externally tangent. Find the ratio of the larger radius to the smaller radius.

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

A circle of radius $t$ tangent to the two rays has center distance $t/\sin30^\circ=2t$ from the vertex.

</details>

<details>
<summary>Hint 2</summary>

The center separation is both $2(R-r)$ and $R+r$.

</details>

<details>
<summary>Worked solution</summary>

The wedge converts radius differences into center distances.

1. The center must lie on the internal bisector, since it has equal positive distances from the two side lines inside the angle. A perpendicular to either ray forms a right triangle giving center distance $2t$.
2. The stipulated ordering gives center separation $2R-2r$. External tangency makes this equal $R+r$.
3. Thus $2R-2r=R+r$, giving $R=3r$. Conversely any $r>0$ with this ratio places both contact points on the positive rays and makes the circles externally tangent, so the ratio is realizable.

</details>
