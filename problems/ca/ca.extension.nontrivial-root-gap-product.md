# Evaluate a cyclotomic quotient at the removable input one

*Easy · [Complex analysis problems](index.md)*

Let zeta be a primitive $11$th root of unity. Find the product of (1-zeta^k) for k=1,...,10.

```answer
{"answer":{"kind":"integer","expected":"11","checker_scope":"Exact requested integer or rational from the stated finite complex-root computation only. Fourier, product and convergence arguments are worked models rather than automatically certified proofs; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Factor z to the eleventh minus one and separate its root at one.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the remaining polynomial after removing that linear factor.

</details>

<details>
<summary>Worked solution</summary>

The product is the value of the all-nontrivial-root factor at one.

1. The polynomial (z^11-1)/(z-1)=1+z+...+z^10 factors as the product of z-zeta^k for k from one through ten.
2. At z=1 the polynomial sum has eleven terms, each equal to one.
3. Therefore the requested root-gap product is eleven.

</details>
