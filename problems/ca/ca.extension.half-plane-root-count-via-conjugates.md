# Use real monotonicity and Vieta to locate a nonreal pair

*Hard · [Complex analysis problems](index.md)*

How many zeros of $z^3+z+1$ lie in the open right half-plane, counted with multiplicity?

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact requested zero, winding or normalized scalar count only. The analytic argument and its hypotheses are a worked model rather than an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

First determine how many real roots there are and the sign of the real root.

</details>

<details>
<summary>Hint 2</summary>

The remaining roots are conjugates whose common real part is controlled by the sum of all roots.

</details>

<details>
<summary>Worked solution</summary>

A real-axis argument locates the complex pair without solving the cubic.

1. On the real line the derivative is 3x^2+1&gt;0, and the polynomial changes sign between negative one and zero. Hence it has exactly one real root r, with -1&lt;r&lt;0.
2. The other two roots are nonreal conjugates. Their sum is -r by Vieta, since the quadratic coefficient is zero.
3. Each therefore has real part -r/2&gt;0, while r is negative. Exactly two zeros lie in the open right half-plane.

</details>
