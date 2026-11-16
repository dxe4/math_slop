# Compute a trigonometric second moment by orthogonality

*Medium · [Complex analysis problems](index.md)*

Find the exact sum $\sum_{k=0}^{10}\cos^2(2\pi k/11)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":11,"denominator":2},"checker_scope":"Exact requested integer or rational from the stated finite complex-root computation only. Fourier, product and convergence arguments are worked models rather than automatically certified proofs; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Separate the constant term with the double-angle identity.

</details>

<details>
<summary>Hint 2</summary>

The doubled frequency still gives a complete nontrivial eleven-root orbit.

</details>

<details>
<summary>Worked solution</summary>

A constant contribution survives while the nonzero Fourier frequency cancels.

1. Use cos squared theta=(1+cos(2theta))/2.
2. The sum of cos(4 pi k/11) over k=0 through ten is zero, as the real part of the complete nontrivial root sum.
3. The eleven constant halves remain, giving eleven halves.

</details>
