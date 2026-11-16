# Use degree symmetry to extract a bounded product coefficient

*Medium · [Combinatorics](index.md)*

Find the coefficient of $x^5$ in (1+x+x^2)^3.

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Each chosen exponent lies between zero and two.

</details>

<details>
<summary>Hint 2</summary>

A sum of five is one below the maximal total six.

</details>

<details>
<summary>Worked solution</summary>

Coefficient extraction counts bounded exponent allocations.

1. The exponent triple must lie in {0,1,2} cubed and sum to five.
2. Starting from (2,2,2), exactly one coordinate must be reduced by one.
3. There are three choices of that coordinate, so the coefficient is three.

</details>
