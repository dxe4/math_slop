# Minimize the perimeter of a triangle containing a disk

*Hard · [Geometry and trigonometry problems](index.md)*

A nondegenerate closed triangle contains a closed disk of radius $r>0$. Prove its perimeter is at least $6\sqrt3\,r$, and determine every equality case. Do not assume the disk is initially tangent to all sides.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Join the disk center to the vertices. Its distances to all three supporting side lines are at least $r$.

</details>

<details>
<summary>Hint 2</summary>

Use Heron with positive quantities $s-a,s-b,s-c$ and AM-GM to bound area above in terms of semiperimeter $s$.

</details>

<details>
<summary>Model proof</summary>

Trap the area between a disk-based lower bound and a sharp perimeter-based upper bound.

1. The disk center lies strictly inside the triangle. If side lengths are $a,b,c$ and its distances to their lines are $d_a,d_b,d_c$, containment gives each $d_i\ge r$. The three area pieces yield $\Delta=(ad_a+bd_b+cd_c)/2\ge rs$, where $s=(a+b+c)/2$.
2. Set $x=s-a$, $y=s-b$, $z=s-c$. They are positive and sum to $s$. Heron gives $\Delta^2=sxyz\le s(s/3)^3=s^4/27$ by AM-GM.
3. Thus $rs\le\Delta\le s^2/(3\sqrt3)$. Dividing by $s>0$ gives $s\ge3\sqrt3r$, hence perimeter $2s\ge6\sqrt3r$.
4. Equality requires all $d_i=r$ and $x=y=z$, the latter forcing $a=b=c$. The disk is then the incircle of that equilateral triangle.
5. Conversely an equilateral triangle circumscribed about the disk has inradius $r$ and perimeter $6\sqrt3r$, so every stated equality condition is sufficient.

**Self-assessment rubric**

- Use all three center-to-side distances without assuming tangency.
- Obtain the correct sharp area upper bound from Heron and positive semiperimeter differences.
- Combine and divide only by positive quantities.
- Trace equality in both bounds and verify the equilateral circumscribed case.

</details>
