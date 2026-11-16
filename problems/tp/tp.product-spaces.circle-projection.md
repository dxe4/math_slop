# Image of a compact circle under a coordinate map

*Easy · [Topology problems](index.md)*

Find the image of $\{(x,y)\in\mathbb R^2:x^2+y^2=1\}$ under the coordinate projection $(x,y)\mapsto x$. Enter an interval.

```answer
{"answer":{"kind":"interval","expected":"[-1, 1]","checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The circle equation bounds the first coordinate.

</details>

<details>
<summary>Hint 2</summary>

For every coordinate within that bound, exhibit a compatible second coordinate.

</details>

<details>
<summary>Worked solution</summary>

The circle attains every horizontal coordinate between its two extremes.

1. From $x^2+y^2=1$ we have $x^2\le1$, so $-1\le x\le1$.
2. For any such $x$, the choice $y=\sqrt{1-x^2}$ gives a point of the circle.
3. Both extremes occur, so the image is exactly $[-1,1]$.

</details>
