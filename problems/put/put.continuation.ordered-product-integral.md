# Ordered product integral

*Hard · [Original Putnam-style training](index.md)*

For integrable real $f$ on $[0,1]$, prove $\int_0^1 f(x)\int_0^x f(y)dy\,dx=\frac12(\int_0^1f)^2$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Interpret the iterated integral over the triangle $0\le y\le x\le1$.

</details>

<details>
<summary>Hint 2</summary>

Swap coordinates to compare with the opposite triangle.

</details>

<details>
<summary>Model proof</summary>

Fubini factors that square integral as $(\int_0^1f)^2$, so each triangular contribution is half of it.

1. The product $f(x)f(y)$ is absolutely integrable on the unit square because $f\in L^1$ and $\int\!\int|f(x)f(y)|=(\int|f|)^2<\infty$.
2. The two triangles $y<x$ and $x<y$ contribute equally after swapping $x,y$; the diagonal has area zero. Their sum is the square integral $\int_0^1\int_0^1f(x)f(y)dxdy$.
3. Fubini factors that square integral as $(\int_0^1f)^2$, so each triangular contribution is half of it.

**Self-assessment rubric**

- Justify Fubini by absolute integrability of f(x)f(y).
- Relate the two triangular domains by swapping coordinates and ignore the null diagonal.
- Factor the full square integral and divide equally between triangles.

</details>
