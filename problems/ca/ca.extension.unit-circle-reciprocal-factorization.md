# Handle a boundary-root polynomial before trying an argument count

*Hard · [Complex analysis problems](index.md)*

How many zeros of $P(z)=z^4-3z^3+4z^2-3z+1$ lie strictly inside the unit disk, counted with multiplicity?

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested zero, winding or normalized scalar count only. The analytic argument and its hypotheses are a worked model rather than an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

The coefficient symmetry suggests using z+1/z or a reciprocal quadratic factorization.

</details>

<details>
<summary>Hint 2</summary>

Check whether a boundary zero prevents direct use of an argument integral on that circle.

</details>

<details>
<summary>Worked solution</summary>

A hidden factorization identifies every root location, including boundary multiplicities.

1. The exact factorization is P(z)=(z^2-z+1)(z-1)^2. It can be found by dividing by z squared and writing a quadratic in z+1/z.
2. The quadratic roots are exp(i pi/3) and exp(-i pi/3), both of modulus one, and the other root is one with multiplicity two.
3. All four zeros are on the boundary, so the strict interior zero count is zero. An unqualified argument-principle integral on that boundary would be invalid.

</details>
