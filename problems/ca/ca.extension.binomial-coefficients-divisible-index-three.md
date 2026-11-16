# Project a binomial row onto one residue class

*Medium · [Complex analysis problems](index.md)*

Find the sum of $\binom{12}{k}$ over k in {0,3,6,9,12}, using a third-root-of-unity filter.

```answer
{"answer":{"kind":"integer","expected":"1366","checker_scope":"Exact requested integer or rational from the stated finite complex-root computation only. Fourier, product and convergence arguments are worked models rather than automatically certified proofs; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Average the binomial expansion at all three third roots of unity.

</details>

<details>
<summary>Hint 2</summary>

For a nontrivial third root omega, use 1+omega=-omega squared.

</details>

<details>
<summary>Worked solution</summary>

A finite root average keeps exactly coefficients whose exponents are multiples of three.

1. For omega a primitive third root, the desired sum is \[2^12+(1+omega)^12+(1+omega^2)^12\]/3 by exponent orthogonality.
2. The two nonreal terms both equal one: 1+omega=-omega^2 and its conjugate give twelfth powers one.
3. The result is (4096+2)/3=1366.

</details>
