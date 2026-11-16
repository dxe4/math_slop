# Read an analytic value through Cauchy

*Easy · [Complex analysis problems](index.md)*

The unit circle is positively oriented. Find $\frac{1}{2\pi i}\oint_{|z|=1}e^z\,dz/z$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested complex value, polynomial, set or normalized contour value only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The numerator is entire and the denominator has one simple pole at the center.

</details>

<details>
<summary>Hint 2</summary>

Apply the value form of Cauchy integral formula.

</details>

<details>
<summary>Worked solution</summary>

Cauchy formula evaluates the analytic numerator at the enclosed point.

1. The function $e^z$ is analytic on and inside the circle.
2. Cauchy formula makes the normalized integral equal to $e^0$.
3. The value is $1$.

</details>
