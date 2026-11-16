# Use an auxiliary simple pole without introducing a principal value into the final answer

*Hard · [Complex analysis problems](index.md)*

Define sin(x)/x at zero by its continuous value. Find (1/pi) times $\int_{-\infty}^{\infty}(\sin x/x)^2dx$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":1},"checker_scope":"Exact requested normalized rational scalar only. Convergence, contour choices and branch or parameter arguments are supplied as a worked model, not automatically certified as a proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Use the holomorphic numerator 1-exp(2iz), divided by z squared.

</details>

<details>
<summary>Hint 2</summary>

Its auxiliary simple pole at zero needs a small upper indentation; the original real integrand itself is continuous there.

</details>

<details>
<summary>Worked solution</summary>

An indented exponential contour computes a convergent real integral through a singular auxiliary function.

1. Let g(z)=(1-exp(2iz))/z^2. Its local expansion is -2i/z+2+O(z). Integrate over an upper semicircle with a clockwise upper indentation around zero; there are no enclosed poles after the indentation.
2. The large arc tends to zero. The small clockwise arc contributes (-2i)(-i pi)=-2pi, with its bounded remainder tending to zero. Thus the symmetric real-axis integral of g has real part 2pi.
3. That real part is the integral of (1-cos(2x))/x^2, equal to twice the integral of (sin x/x)^2. The latter is an ordinary convergent integral: its center is removable and its tails are bounded by 1/x^2.
4. Consequently the desired integral is pi and its normalized value is one.

</details>
