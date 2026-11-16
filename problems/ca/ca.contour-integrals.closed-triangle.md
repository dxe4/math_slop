# Integrate an entire derivative around a triangle

*Easy · [Complex analysis problems](index.md)*

Let $\gamma$ follow the triangle $0\to1\to i\to0$ along straight edges. Compute $\int_\gamma z^2\,dz$.

```answer
{"answer":{"kind":"complex","expected":"0","checker_scope":"Exact requested complex value, polynomial, set or normalized contour value only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A polynomial integrand has a primitive on the entire plane.

</details>

<details>
<summary>Hint 2</summary>

For a closed path, the starting and ending primitive values coincide.

</details>

<details>
<summary>Worked solution</summary>

The integral of an entire derivative vanishes on every closed path.

1. A primitive of $z^2$ is $z^3/3$, defined on the whole plane.
2. The triangle is a closed piecewise smooth path.
3. The endpoint difference of the primitive is zero, so the integral is $0$.

</details>
