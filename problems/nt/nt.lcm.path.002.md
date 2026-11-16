# Least common multiple: common multiple range

*Medium · [Number theory](index.md)*

List every integer from $1$ through $90$ that is divisible by both $6$ and $10$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[30,60,90],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

List the positive multiples of $10$ in the stated range.

</details>

<details>
<summary>Hint 2</summary>

Keep each listed multiple that is also divisible by $6$.

</details>

<details>
<summary>Worked solution</summary>

Common multiples form the multiples of the least positive common multiple.

1. The positive multiples of $10$ through $90$ are $10,20,30,40,50,60,70,80,90$.
2. Checking division by $6$ retains exactly $\{30,60,90\}$. The list was exhaustive for multiples of 10, so no common multiple in the range was missed.

</details>
