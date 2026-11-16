# Keep the contour orientation

*Easy · [Complex analysis problems](index.md)*

Let $\gamma$ traverse $|z|=2$ once clockwise. Find $\frac{1}{2\pi i}\int_\gamma dz/z$.

```answer
{"answer":{"kind":"integer","expected":-1,"checker_scope":"Exact requested complex value, polynomial, set or normalized contour value only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use a decreasing-angle parameterization or reverse a counterclockwise contour.

</details>

<details>
<summary>Hint 2</summary>

Reversing a contour changes the sign of its integral.

</details>

<details>
<summary>Worked solution</summary>

The winding direction determines the sign of the simple-pole integral.

1. For one counterclockwise turn around zero, the integral of $1/z$ is $2\pi i$.
2. The specified clockwise turn reverses that orientation, giving $-2\pi i$.
3. The normalized value is $-1$.

</details>
