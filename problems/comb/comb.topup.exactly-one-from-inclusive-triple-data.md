# Isolate single-membership regions rather than the whole union

*Hard · [Combinatorics](index.md)*

Finite sets have sizes $|A|=18$, \|B\|=20, \|C\|=16, inclusive pairwise intersection sizes 7,6,5 for AB,AC,BC, and triple intersection size 2. How many objects lie in exactly one of the three sets?

```answer
{"answer":{"kind":"integer","expected":"24","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The sum of single-set sizes counts a two-set object twice and a three-set object three times.

</details>

<details>
<summary>Hint 2</summary>

Subtract twice each pairwise overlap, then restore the triple with the appropriate weight.

</details>

<details>
<summary>Worked solution</summary>

Region multiplicities determine the coefficients for exactly-one counting.

1. The sum of the three set sizes is fifty-four and the sum of pairwise intersection sizes is eighteen.
2. Subtracting twice the pairwise total removes all double-membership contributions but leaves each triple object with weight negative three.
3. Adding three times the triple count corrects that weight to zero, giving $54-36+6=24$.

</details>
