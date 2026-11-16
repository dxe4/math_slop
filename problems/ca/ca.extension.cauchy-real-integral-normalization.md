# Apply a supplied whole-line kernel integral with its scale

*Easy · [Complex analysis problems](index.md)*

Use the formula $\int_{-\infty}^{\infty}(x^2+a^2)^{-1}dx=\pi/a$ for a&gt;0. Find (1/pi) times the integral of 1/(x^2+9) over the real line.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Exact requested normalized rational scalar only. Convergence, contour choices and branch or parameter arguments are supplied as a worked model, not automatically certified as a proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

The parameter is the positive square root of the constant in the denominator.

</details>

<details>
<summary>Hint 2</summary>

The requested normalization removes the common factor pi.

</details>

<details>
<summary>Worked solution</summary>

The scale parameter enters linearly after the contour kernel formula.

1. Here a=3, since the denominator is x squared plus nine.
2. The supplied whole-line integral is pi divided by three.
3. After division by pi, the answer is one third.

</details>
