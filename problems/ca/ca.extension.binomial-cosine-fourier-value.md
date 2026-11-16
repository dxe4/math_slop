# Take one real part after evaluating the whole binomial expansion

*Medium · [Complex analysis problems](index.md)*

Find the exact sum from k=0 to 12 of $\binom{12}{k}\cos(k\pi/3)$.

```answer
{"answer":{"kind":"integer","expected":"729","checker_scope":"Exact requested integer or rational from the stated finite complex-root computation only. Fourier, product and convergence arguments are worked models rather than automatically certified proofs; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

The sum is the real part of one binomial expression at a sixth root of unity.

</details>

<details>
<summary>Hint 2</summary>

Write one plus that root in polar form before raising it to the twelfth power.

</details>

<details>
<summary>Worked solution</summary>

A finite Fourier value of a binomial row is simpler than its separate trigonometric terms.

1. Let u=exp(i pi/3). The sum is the real part of (1+u)^12 by the binomial theorem.
2. Since 1+u=sqrt(3) exp(i pi/6), its twelfth power is 3^6 exp(2 pi i)=729.
3. Its real part, and hence the requested sum, is 729.

</details>
