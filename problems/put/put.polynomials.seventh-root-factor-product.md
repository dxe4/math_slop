# Use a permutation of roots of unity

*Hard · [Original Putnam-style training](index.md)*

Find $\prod_{\zeta^7=1}(1+\zeta+\zeta^2)$, where the product runs over all seven complex seventh roots of unity once.

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

Treat the root one separately.

</details>

<details>
<summary>Hint 2</summary>

For the other roots, write each factor as a quotient of two differences of powers and use that cubing permutes the roots.

</details>

<details>
<summary>Worked solution</summary>

A coprime power permutes the nontrivial root set and cancels two products.

1. The root zeta=1 contributes three.
2. For every other seventh root, $1+\zeta+\zeta^2=(\zeta^3-1)/(\zeta-1)$, and neither denominator nor numerator is zero.
3. Since gcd(3,7)=1, cubing permutes the six nontrivial seventh roots. Their numerator and denominator products cancel, leaving total product $3$.

</details>
