# Differentiate a root product twice with the correct sign

*Hard · [Complex analysis problems](index.md)*

For a primitive eleventh root zeta, find the exact sum $\sum_{k=1}^{10}(1-\zeta^k)^{-2}$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":-5,"denominator":1},"checker_scope":"Exact requested integer or rational from the stated finite complex-root computation only. Fourier, product and convergence arguments are worked models rather than automatically certified proofs; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the logarithmic derivative of 1+z+...+z to the tenth.

</details>

<details>
<summary>Hint 2</summary>

The derivative of a reciprocal factor introduces a negative sign.

</details>

<details>
<summary>Worked solution</summary>

A second reciprocal-root moment depends on both the first logarithmic derivative and the second polynomial derivative.

1. Set P(z)=1+z+...+z^10. At one, P=11, Pprime=55 and Psecond=330, so Pprime/P=5 and Psecond/P=30.
2. Differentiating Pprime/P=sum of 1/(z-zeta^k) gives negative the desired squared-reciprocal sum at z=1. Thus that sum is (Pprime/P)^2-Psecond/P.
3. The value is 25-30=-5. A negative real result is compatible with summing complex squared reciprocals.

</details>
