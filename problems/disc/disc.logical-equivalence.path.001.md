# Compare converse implications

*Medium · [Discrete mathematics](index.md)*

For p,q, how many of the four truth assignments make p→q and q→p differ? An implication is false exactly when its premise is true and its conclusion false.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Checks only this authored count-disagreeing-assignments task. Does not certify unrestricted proof validity, general construction ability or full mastery of logical equivalence."}}
```

<details>
<summary>Hint 1</summary>

List all four assignments.

</details>

<details>
<summary>Hint 2</summary>

Check each mixed assignment separately.

</details>

<details>
<summary>Worked solution</summary>

Compare all truth assignments or recognize one authored equivalence. These finite checks do not certify arbitrary symbolic proofs.

1. Both implications are true at (true,true) and (false,false).
2. They differ at (true,false) and (false,true), giving $2$ disagreements.

</details>
