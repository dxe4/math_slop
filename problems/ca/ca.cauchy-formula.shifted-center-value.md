# Use a nonreal evaluation point

*Medium · [Complex analysis problems](index.md)*

The circle $|z-i|=1$ is traversed counterclockwise. Find $\frac{1}{2\pi i}\oint z^2\,dz/(z-i)$.

```answer
{"answer":{"kind":"integer","expected":-1,"checker_scope":"Exact requested complex value, polynomial, set or normalized contour value only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The enclosed simple-pole location is the nonreal center.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the entire numerator there, rather than on the real axis.

</details>

<details>
<summary>Worked solution</summary>

Cauchy formula applies at a complex interior point just as at a real one.

1. The numerator $f(z)=z^2$ is entire, and the contour surrounds $i$ once positively.
2. The normalized integral is $f(i)=i^2$.
3. The result is $-1$.

</details>
