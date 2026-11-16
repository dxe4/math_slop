# Extend boundary Fourier modes into the disk

*Easy · [Complex analysis problems](index.md)*

Use the harmonic Fourier extension rule: boundary cos(n\*theta) and sin(n\*theta) acquire factors r^n. If $u(e^{i\theta})=2+3\cos\theta-4\sin(2\theta)$, find u(1/2).

```answer
{"answer":{"kind":"rational","expected":{"numerator":7,"denominator":2},"checker_scope":"Exact requested invariant or sharp bound only; the analytic justification remains a worked model rather than an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

The point is on the positive real radius.

</details>

<details>
<summary>Hint 2</summary>

Each mode uses its own radial power.

</details>

<details>
<summary>Worked solution</summary>

The boundary harmonics extend without mixing their frequencies.

1. The extension is u(r\*e^(i\*theta))=2+3r\*cos(theta)-4r^2\*sin(2theta).
2. At r=1/2 and theta=0, the sine term vanishes.
3. The result is 2+3/2=7/2.

</details>
