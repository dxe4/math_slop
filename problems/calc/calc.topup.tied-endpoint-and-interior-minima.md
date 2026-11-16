# Retain every location attaining a global minimum

*Medium · [Calculus](index.md)*

For $f(x)=x^3-3x$ on \[-2,2\], return the set of all locations attaining its global minimum.

```answer
{"answer":{"kind":"set","expected":["-2","1"],"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

List interior critical points and both endpoints.

</details>

<details>
<summary>Hint 2</summary>

Do not stop after finding only one point with the smallest value.

</details>

<details>
<summary>Worked solution</summary>

Endpoint and critical-point comparisons can produce ties across different location types.

1. The derivative is 3x^2-3, with critical points negative one and one.
2. At endpoints -2,2 and critical points -1,1, the function values are -2,2,2,-2 respectively.
3. The global minimum value negative two is attained at both x=-2 and x=1, so both belong in the answer set.

</details>
