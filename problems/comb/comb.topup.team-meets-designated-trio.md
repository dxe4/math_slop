# Subtract committees entirely outside a designated trio

*Medium · [Combinatorics](index.md)*

A group of $8$ people includes three designated people. How many four-person committees contain at least one designated person?

```answer
{"answer":{"kind":"integer","expected":"65","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

It is simpler to count committees with no designated member.

</details>

<details>
<summary>Hint 2</summary>

The complement selects all four people from the five undesignated people.

</details>

<details>
<summary>Worked solution</summary>

A single complementary family avoids overlapping positive cases.

1. The unrestricted number of four-person committees is seventy.
2. Exactly five committees choose all four members from the five undesignated people.
3. Subtracting gives sixty-five committees meeting the designated trio.

</details>
