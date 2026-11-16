# Recover a real Fourier integral from an exponentially decaying contour

*Medium · [Complex analysis problems](index.md)*

Find e^2/pi times $\int_{-\infty}^{\infty}\cos(2x)/(x^2+1)\,dx$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":1},"checker_scope":"Exact requested normalized rational scalar only. Convergence, contour choices and branch or parameter arguments are supplied as a worked model, not automatically certified as a proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Use exp(2iz) in the upper half-plane.

</details>

<details>
<summary>Hint 2</summary>

Take the real part only after evaluating the complex integral.

</details>

<details>
<summary>Worked solution</summary>

The exponential value at the upper pole determines the Fourier decay.

1. Use exp(2iz)/(z^2+1). In the upper half-plane its exponential modulus is at most one, so the semicircle contribution vanishes.
2. The residue at i is exp(-2)/(2i), giving complex integral pi exp(-2). Its imaginary part is zero by oddness.
3. Thus the cosine integral is pi exp(-2), and the specified ratio is one.

</details>
