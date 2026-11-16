# Invert a local exponential series before squaring

*Medium · [Complex analysis problems](index.md)*

Find the residue at zero of $1/(e^z-1)^2$.

```answer
{"answer":{"kind":"integer","expected":"-1","checker_scope":"Exact requested local residue only. The analytic argument and its hypotheses are a worked model, not an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Separate the leading factor z in the denominator.

</details>

<details>
<summary>Hint 2</summary>

For the residue, only the first regular correction after that factor is required.

</details>

<details>
<summary>Worked solution</summary>

A repeated transcendental denominator zero creates a simple Laurent term beside its leading double pole.

1. The exponential denominator is z(1+z/2+O(z^2)).
2. Its inverse square is z^(-2)(1-z+O(z^2)), using the reciprocal-square expansion.
3. The coefficient of z^(-1) is negative one.

</details>
