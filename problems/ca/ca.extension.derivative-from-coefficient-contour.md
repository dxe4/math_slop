# Recover a derivative from a normalized coefficient contour

*Easy · [Complex analysis problems](index.md)*

Let f be holomorphic near the closed unit disk and suppose the counterclockwise integral $\oint_{|z|=1} f(z)z^{-5}\,dz=3\pi i$. Find the fourth derivative f^(4)(0).

```answer
{"answer":{"kind":"integer","expected":36,"checker_scope":"Exact requested coefficient or bound only; the analytic justification remains a worked model rather than an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

First divide by the standard contour normalization.

</details>

<details>
<summary>Hint 2</summary>

A Taylor coefficient is the derivative divided by its factorial.

</details>

<details>
<summary>Worked solution</summary>

Separate the contour normalization from the factorial.

1. Cauchy's coefficient formula identifies the integral divided by 2\*pi\*i with a\_4.
2. Thus a\_4=3/2.
3. Multiply by 4!=24 to obtain f^(4)(0)=36.

</details>
