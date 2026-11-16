# Compare or with and

*Medium · [Discrete mathematics](index.md)*

For p,q, how many of the four assignments make inclusive (p or q) differ from (p and q)?

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Checks only this authored count-disagreeing-assignments task. Does not certify unrestricted proof validity, general construction ability or full mastery of logical equivalence."}}
```

<details>
<summary>Hint 1</summary>

Check the equal-input rows first.

</details>

<details>
<summary>Hint 2</summary>

Then check exactly one true input.

</details>

<details>
<summary>Worked solution</summary>

Compare all truth assignments or recognize one authored equivalence. These finite checks do not certify arbitrary symbolic proofs.

1. Both formulas agree when both inputs are true or both false.
2. They differ on the two mixed assignments, so the count is $2$.

</details>
