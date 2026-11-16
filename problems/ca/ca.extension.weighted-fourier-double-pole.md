# Extract the imaginary part after a derivative cancellation at a repeated pole

*Hard · [Complex analysis problems](index.md)*

Find e/pi times $\int_{-\infty}^{\infty}x\sin x/(x^2+1)^2\,dx$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested normalized rational scalar only. Convergence, contour choices and branch or parameter arguments are supplied as a worked model, not automatically certified as a proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Close the integral with z exp(iz)/(z squared plus one) squared.

</details>

<details>
<summary>Hint 2</summary>

The desired real integral comes from the imaginary part, not the real part, of that contour evaluation.

</details>

<details>
<summary>Worked solution</summary>

A weighted Fourier numerator and a double pole require both a local derivative and a parity decision.

1. For the upper pole i, differentiate g(z)=z exp(iz)/(z+i)^2. Its derivative is exp(iz)\[(1+iz)/(z+i)^2-2z/(z+i)^3\].
2. At i the first bracket term vanishes and the second is one quarter, so the residue is exp(-1)/4. The upper arc tends to zero by the rational decay and bounded upper-half-plane exponential.
3. The whole-line complex integral is therefore i pi/(2e). Its real part vanishes by oddness of x cos x/(x^2+1)^2; the desired sine integral is its imaginary part pi/(2e).
4. Multiplying by the stated e/pi factor gives one half.

</details>
