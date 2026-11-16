# Prove Gaussian normalization using only finite planar regions

*Hard · [Calculus](index.md)*

Prove $\int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt\pi$ by comparing a square with its inscribed and circumscribed disks. Establish the improper limit rather than assuming an unbounded Fubini interchange.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

On \[−R,R\]², finite Fubini gives the square of a truncated one-dimensional integral.

</details>

<details>
<summary>Hint 2</summary>

The disk radii are R and √2R, and each radial integral is explicit.

</details>

<details>
<summary>Model proof</summary>

Nonnegative finite-region inclusions determine the infinite normalization by squeeze.

1. Let J\_R=∫\_{−R}^Re^{−x²}dx. By finite Fubini, J\_R² is the integral of e^{−(x²+y²)} over \[−R,R\]².
2. The radius-R disk is contained in this square, which is contained in the radius-√2R disk. Their Gaussian integrals are 2π∫₀^s r e^{−r²}dr=π(1−e^{−s²}).
3. Thus π(1−e^{−R²})≤J\_R²≤π(1−e^{−2R²}). Both bounds tend to π. Since J\_R≥0, J\_R→√π.
4. The integrand is even, so its two one-sided improper integrals each equal half this limit and converge. Hence the ordinary whole-line improper integral is √π, justified without assuming its finiteness in advance.

**Self-assessment rubric**

- Uses finite Fubini to identify J\_R² on the square.
- Gets the correct inclusion radii and exact polar disk integrals.
- Derives the two-sided bound and takes the positive square root.
- Explains why the symmetric limit gives the two convergent one-sided integrals here.

</details>
