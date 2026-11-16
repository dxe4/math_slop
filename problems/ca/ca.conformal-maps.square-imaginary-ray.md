# Image of an imaginary ray under squaring

*Medium · [Complex analysis problems](index.md)*

Under $T(z)=z^2$, the positive imaginary ray is parameterized by $z=it$, $t>0$. Find the set of real coordinates of its image, entered as an interval.

```answer
{"answer":{"kind":"interval","expected":"(-infinity, 0)","checker_scope":"Exact requested complex value, polynomial, coefficient, radius or domain only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Substitute the given ray parameter into the map.

</details>

<details>
<summary>Hint 2</summary>

Determine exactly which sign and endpoint values are attained as the positive parameter varies.

</details>

<details>
<summary>Worked solution</summary>

Squaring rotates and stretches the ray into a real half-line.

1. The image is $(it)^2=-t^2$.
2. For $t>0$ these are all negative real numbers: every $s<0$ is obtained at $t=\sqrt{-s}$.
3. Zero is not attained, so the interval is $(-\infty,0)$.

</details>
