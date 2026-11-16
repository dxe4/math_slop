# Select one circle from a pencil

*Medium · [Original olympiad-style problems](index.md)*

A circle passes through $(-1,0)$ and $(1,0)$ and is tangent to the line $y=3$. Give the ordered pair $[k,r]$, where its center is $(0,k)$ and its radius is $r>0$.

```answer
{"answer":{"kind":"vector","expected":["4/3","5/3"],"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Equal distances to the two fixed points place the center on their perpendicular bisector.

</details>

<details>
<summary>Hint 2</summary>

Use $r^2=1+k^2$ and $r=|3-k|$, without dropping the absolute value before squaring.

</details>

<details>
<summary>Worked solution</summary>

The tangent condition becomes linear after the squared radius terms cancel.

1. The two passage conditions imply center $(0,k)$ and $r^2=1+k^2$. Tangency to the horizontal line requires the nonnegative distance $|3-k|$ to equal $r$.
2. Squaring gives $9-6k+k^2=1+k^2$, hence $k=4/3$. Its radius is $r=\sqrt{1+16/9}=5/3$.
3. The unsquared condition holds: $|3-4/3|=5/3$. The center-to-line foot is $(0,3)$ and the radius is positive. The linear equation also proves uniqueness.

</details>
