# Show one circular image forces an affine similarity

*Hard · [Geometry and trigonometry problems](index.md)*

Let $F(x)=Mx+b$ be an invertible affine map of the plane. Prove that if it maps the unit circle onto a circle, then it multiplies every distance by the same positive factor and maps every circle onto a circle. Prove the converse as well.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

The image of the unit circle is centrally symmetric about $b$; show its circle center must therefore be $b$.

</details>

<details>
<summary>Hint 2</summary>

Apply equal image radii to $e_1,e_2,(e_1+e_2)/\sqrt2$ to compare the two columns of $M$.

</details>

<details>
<summary>Model proof</summary>

Recover a uniform metric scale from three unit directions.

1. Suppose the image circle has center $c$. For every unit $u$, both $b+Mu$ and $b-Mu$ lie on it. Equality of their squared distances from $c$ gives $(b-c)\cdot Mu=0$. Since $M$ is invertible and unit directions span the plane, $b=c$.
2. Let the image radius be $r>0$. Writing the columns of $M$ as $v,w$, the unit vectors $e_1,e_2$ give $|v|=|w|=r$.
3. The unit vector $(e_1+e_2)/\sqrt2$ gives $|v+w|^2/2=r^2$. Expanding with the equal column norms yields $v\cdot w=0$.
4. For any vector $(s,t)$, $|M(s,t)|^2=|sv+tw|^2=r^2(s^2+t^2)$. Thus $|F(P)-F(Q)|=r|P-Q|$ for every pair.
5. A circle of center $P$ and radius $R$ therefore maps into the circle of center $F(P)$ and radius $rR$. Invertibility and the same norm law for the inverse give the reverse inclusion. Conversely a distance-scaling affine bijection maps every circle onto such a circle, including the unit circle.

**Self-assessment rubric**

- Prove the image circle center rather than assume it.
- Obtain equal nonzero column lengths.
- Use a mixed unit direction to force perpendicular columns.
- Establish all distance scaling and both directions of the circle statement.

</details>
