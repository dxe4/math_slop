# Justify parameter differentiation of a branch contour identity

*Hard · [Complex analysis problems](index.md)*

Find (1/pi^3) times $\int_0^{\infty}(\log x)^2/(1+x^2)\,dx$, where log is the real natural logarithm.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":8},"checker_scope":"Exact requested normalized rational scalar only. Convergence, contour choices and branch or parameter arguments are supplied as a worked model, not automatically certified as a proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Introduce an exponent parameter before trying to insert logarithms into the contour.

</details>

<details>
<summary>Hint 2</summary>

Differentiate twice only on a parameter interval with an integrable logarithmic majorant at both ends.

</details>

<details>
<summary>Worked solution</summary>

A branch-contour Mellin identity gives the logarithmic moment after a justified parameter step.

1. For 0&lt;a&lt;2 set F(a)=the integral of x^(a-1)/(1+x^2) over the positive half-line. An upper-half-plane branch with argument between zero and pi gives (1-exp(i pi a))F(a)=pi exp(i pi(a-1)/2) from the pole at i; the small and large arcs vanish as their radii approach zero and infinity.
2. Solving yields F(a)=(pi/2)csc(pi a/2). Near a=1, two parameter derivatives are dominated by constant multiples of x^(-1/2)\|log x\|^2 near zero and x^(-3/2)(log x)^2 near infinity, both integrable, so differentiation under the improper integral is valid.
3. The second derivative at one is pi^3/8, since the second derivative of csc u at u=pi/2 is one and the chain factor is (pi/2)^2.
4. The normalized logarithmic integral is therefore one eighth.

</details>
