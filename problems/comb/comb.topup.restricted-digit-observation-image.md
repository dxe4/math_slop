# List records only after enforcing the construction rules

*Medium · [Combinatorics](index.md)*

Form a two-digit integer from distinct digits in $\{0,1,2\}$, with no leading zero. Record only its digit sum. Return the set of possible records.

```answer
{"answer":{"kind":"set","expected":["1","2","3"],"checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Enforce the leading-digit rule before forgetting the digit order.

</details>

<details>
<summary>Hint 2</summary>

Different valid integers can produce the same recorded sum.

</details>

<details>
<summary>Worked solution</summary>

The image of the permitted outcome set gives the observation records.

1. The valid integers are ten, twelve, twenty and twenty-one.
2. Their digit sums are one, three, two and three respectively.
3. Removing the duplicate sum gives the record set $\{1,2,3\}$.

</details>
