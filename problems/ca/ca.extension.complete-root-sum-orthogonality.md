# Use a complete nontrivial geometric orbit

*Easy · [Complex analysis problems](index.md)*

Let zeta be a primitive $17$th root of unity. Find the sum of zeta^k for k=0,...,16.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested integer or rational from the stated finite complex-root computation only. Fourier, product and convergence arguments are worked models rather than automatically certified proofs; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

The ratio is not one, but its seventeenth power is one.

</details>

<details>
<summary>Hint 2</summary>

Use the finite geometric sum before making any real-imaginary decomposition.

</details>

<details>
<summary>Worked solution</summary>

A complete nontrivial root orbit cancels by a finite geometric identity.

1. The sum is (1-zeta^17)/(1-zeta).
2. Its numerator is zero while its denominator is nonzero because zeta is primitive of order seventeen.
3. Thus the exact sum is zero.

</details>
