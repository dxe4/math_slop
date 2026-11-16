# Evaluate a reciprocal sum without constructing individual roots

*Medium · [Complex analysis problems](index.md)*

For primitive seventh root zeta, find $\sum_{k=0}^{6}1/(2-\zeta^k)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":448,"denominator":127},"checker_scope":"Exact requested integer or rational from the stated finite complex-root computation only. Fourier, product and convergence arguments are worked models rather than automatically certified proofs; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Use the polynomial whose roots are the full seventh-root set.

</details>

<details>
<summary>Hint 2</summary>

Its logarithmic derivative at two gives the desired sum with the displayed denominator orientation.

</details>

<details>
<summary>Worked solution</summary>

A root resolvent is a polynomial derivative ratio at a nonroot input.

1. For P(z)=z^7-1, factorization gives Pprime(z)/P(z)=the sum of 1/(z-zeta^k) over all seven roots.
2. At z=2 the numerator is seven times sixty-four, or 448, and the denominator is 128-1=127.
3. Thus the requested sum is 448/127; all denominators are nonzero because two is outside the unit circle.

</details>
