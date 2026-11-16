# Derive the solvability condition at a resonant boundary length

*Hard · [Differential equations problems](index.md)*

For continuous f on \[0,pi\], prove $y''+y=f$, y(0)=y(pi)=0, has a solution if and only if the integral of f(t)\*sin(t) from 0 to pi is zero. Describe all solutions when it is solvable.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Multiply by the homogeneous Dirichlet mode for necessity.

</details>

<details>
<summary>Hint 2</summary>

For sufficiency, use the causal convolution and retain the free initial slope.

</details>

<details>
<summary>Model proof</summary>

A resonant homogeneous mode creates a compatibility condition and a one-dimensional freedom.

1. If y solves the problem, integration by parts twice gives integral\_0^pi (ydoubleprime+y)\*sin(t) dt=\[yprime\*sin(t)-y\*cos(t)\]\_0^pi=0. Thus the stated integral of f must vanish.
2. For any constant a, set y(t)=a\*sin(t)+integral\_0^t sin(t-s)\*f(s) ds. Differentiation shows ydoubleprime+y=f and y(0)=0. At pi, the convolution is integral\_0^pi sin(s)\*f(s) ds, so the compatibility condition supplies the other endpoint.
3. Every solution has some initial slope a. Uniqueness for that initial-value problem gives exactly the displayed family. Equivalently, any two boundary solutions differ by a multiple of sin(t).

**Self-assessment rubric**

- Perform the endpoint integration by parts with the resonant mode.
- Build a solution and verify the second boundary value using the condition.
- Explain the free homogeneous parameter and prove completeness.

</details>
