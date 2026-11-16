# Evaluate an inverse derivative at the correct image point

*Medium · [Real analysis](index.md)*

Let $f(x)=x^3+x$ on the real line. Find the derivative of its inverse at the input 2.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Exact requested derivative quantity or guaranteed bound only; no full analytic argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Find which original input maps to two.

</details>

<details>
<summary>Hint 2</summary>

Use the inverse derivative at that original input, not at two itself.

</details>

<details>
<summary>Worked solution</summary>

Inverse differentiation exchanges the input and image roles.

1. The derivative fprime=3x^2+1 is positive, and f tends to opposite infinities at the two ends, so it is a bijection with differentiable inverse.
2. Since f(1)=2, the original point corresponding to inverse input two is one.
3. Thus (f inverse)prime(2)=1/fprime(1)=1/4.

</details>
