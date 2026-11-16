# Classify a critical family hidden from a fixed semidefinite Hessian

*Hard · [Calculus](index.md)*

For real a, classify the origin for $f_a(x,y)=x^2+2axy^2+y^4$ as a strict local minimum, a non-strict local minimum or a saddle. Include all parameter boundaries and show the Hessian at the origin cannot distinguish them.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Complete the square using x+ay².

</details>

<details>
<summary>Hint 2</summary>

When the remaining y⁴ coefficient is negative, approach along the curved path x=−ay² rather than only along fixed lines.

</details>

<details>
<summary>Model proof</summary>

A curved cancellation can reveal higher-order negative values invisible to the same semidefinite quadratic part.

1. The identity is f\_a=(x+ay²)²+(1−a²)y⁴. The origin is critical for every a, and its Hessian is diag(2,0), independent of a.
2. If \|a\|&lt;1 both displayed terms are nonnegative and can vanish simultaneously only at x=y=0. Hence the origin is a strict global, and therefore strict local, minimum.
3. If \|a\|=1, f\_a is a square and vanishes along the entire parabola x=−ay², giving a non-strict global minimum at the origin.
4. If \|a\|&gt;1, along that parabola the value is (1−a²)y⁴&lt;0 for nonzero y, while along y=0 it is x²&gt;0 for nonzero x. Both types occur arbitrarily near zero, so the origin is a saddle. The identical Hessian alone could not decide any of these regimes.

**Self-assessment rubric**

- Derives the exact square completion and parameter-independent critical Hessian.
- Proves strict positivity away from the origin for \|a\|&lt;1.
- Identifies the zero parabola and non-strict minima for \|a\|=1.
- Uses curved negative approaches and positive-axis approaches for \|a\|&gt;1.

</details>
