# Compare the first nonconstant coefficient of a normal product

*Easy · [Complex analysis problems](index.md)*

You may use Euler's locally uniformly convergent product $\sin(\pi z)/(\pi z)=\prod_{n=1}^{\infty}(1-z^2/n^2)$ and coefficientwise differentiation near zero. Find (sum over n&gt;=1 of 1/n^2)/pi^2.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":6},"checker_scope":"Exact requested normalized series value only; no analytic proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Compare the quadratic coefficients on the two sides.

</details>

<details>
<summary>Hint 2</summary>

At quadratic order only one product factor contributes at a time.

</details>

<details>
<summary>Worked solution</summary>

A product coefficient converts a trigonometric Taylor value into a series sum.

1. The left-hand expansion is 1-pi^2\*z^2/6+O(z^4).
2. The quadratic coefficient of the right-hand product is minus sum 1/n^2; the given normal-product hypothesis permits the comparison.
3. Therefore sum 1/n^2=pi^2/6, giving normalized answer 1/6.

</details>
