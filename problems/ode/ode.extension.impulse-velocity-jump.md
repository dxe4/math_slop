# Read a state jump from a concentrated forcing

*Easy · [Differential equations problems](index.md)*

A scalar oscillator satisfies $y''+y=3\delta(t-1)$ in the distributional sense, with y continuous and piecewise C^2. Find y'(1+)-y'(1-).

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact requested invariant or response only; the differential-equation argument is a worked model, not an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

Integrate across a shrinking interval around the impulse.

</details>

<details>
<summary>Hint 2</summary>

The integral of the continuous displacement term tends to zero.

</details>

<details>
<summary>Worked solution</summary>

A force impulse changes velocity by its mass.

1. Integrate the equation from 1-epsilon to 1+epsilon.
2. The integral of ydoubleprime is the velocity jump, while the integral of y tends to zero by continuity.
3. The delta term has integral three, so the velocity jump is three.

</details>
