# Recover an annular area from one chord

*Medium · [Original olympiad-style problems](index.md)*

Two concentric circles have radii $R>r>0$. A chord of the larger circle is tangent to the smaller circle and has length $14$. If the area between the circles is $k\pi$, find $k$.

```answer
{"answer":{"kind":"integer","expected":"49","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The common center projects to the midpoint of the chord, at distance $r$ from it.

</details>

<details>
<summary>Hint 2</summary>

Use the right triangle with hypotenuse $R$ and legs $r,7$.

</details>

<details>
<summary>Worked solution</summary>

The difference of the squared radii is fixed even though neither radius is determined.

1. The perpendicular from the common center to the chord bisects it. Because the chord line is tangent to the smaller circle, the perpendicular distance is exactly $r$.
2. Pythagoras gives $R^2=r^2+7^2$, hence $R^2-r^2=49$.
3. The annular area is $\pi(R^2-r^2)=49\pi$, so $k=49$. Every positive $r$ with $R=\sqrt{r^2+49}$ realizes the givens; no unique individual radius is implied.

</details>
