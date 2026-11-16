# Evaluate a circle-kernel normalization after checking its positivity condition

*Easy · [Complex analysis problems](index.md)*

For real a&gt;\|b\|, use $\int_0^{2\pi}d\theta/(a+b\cos\theta)=2\pi/\sqrt{a^2-b^2}$. Find the integral with a=5,b=3, divided by pi.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested normalized rational scalar only. Convergence, contour choices and branch or parameter arguments are supplied as a worked model, not automatically certified as a proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Check the strict a&gt;\|b\| condition before using the formula.

</details>

<details>
<summary>Hint 2</summary>

Compute the positive square root in the denominator.

</details>

<details>
<summary>Worked solution</summary>

The supplied circle-kernel identity has a domain condition and a positive root convention.

1. Five is strictly larger than the absolute value of three, so the formula applies.
2. The square root is sqrt(25-9)=4, giving the integral pi/2.
3. The requested ratio is one half.

</details>
