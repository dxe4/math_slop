# Prove Ptolemy inequality with its cyclic equality case

*Hard · [Geometry and trigonometry problems](index.md)*

For four distinct points $A,B,C,D$ in the plane, prove $AC\cdot BD\le AB\cdot CD+AD\cdot BC$. Then, when $ABCD$ is a strictly convex quadrilateral in that boundary order, prove equality holds exactly when it is cyclic.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Invert about $A$ with unit radius and use $|U^*-V^*|=|U-V|/(AU\cdot AV)$.

</details>

<details>
<summary>Hint 2</summary>

The target becomes a triangle inequality among the three inverted points; examine their order for equality.

</details>

<details>
<summary>Model proof</summary>

Transform the product inequality into a triangle inequality.

1. Translate $A$ to the origin and invert every other point by $u^*=u/|u|^2$. Direct expansion gives $|u^*-v^*|^2=|u-v|^2/(|u|^2|v|^2)$, proving the distance identity.
2. Triangle inequality gives $B^*D^*\le B^*C^*+C^*D^*$. Multiply by the positive product $AB\cdot AC\cdot AD$ to obtain $AC\cdot BD\le AD\cdot BC+AB\cdot CD$.
3. Equality is equivalent to $B^*,C^*,D^*$ being collinear with $C^*$ between the other two.
4. A line not through the inversion center inverts to a circle through that center: its equation $n\cdot u^*=k$, $k\ne0$, becomes $n\cdot u=k|u|^2$. A line through the center stays a line. Strict convexity excludes all four original points being collinear, so equality implies a common circle.
5. Conversely, a circumcircle through $A$ inverts to a line. For a strictly convex cyclic quadrilateral in boundary order $A,B,C,D$, the arc $BCD$ not containing $A$ maps continuously along that line with $C^*$ between $B^*,D^*$. Hence equality in the triangle inequality, and therefore in the product inequality, holds.

**Self-assessment rubric**

- Establish the distance transformation with nonzero denominators.
- Multiply the transformed inequality by the correct positive product.
- Track the between-point condition for equality.
- Prove both cyclic equality implications and exclude the collinear case under strict convexity.

</details>
