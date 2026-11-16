# Use two forbidden-event corrections for required symbols

*Medium · [Combinatorics](index.md)*

How many length-five words over $\{A,B,C\}$ contain A at least once and B at least once?

```answer
{"answer":{"kind":"integer","expected":"180","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Subtract words missing A and words missing B.

</details>

<details>
<summary>Hint 2</summary>

Restore words missing both, which were subtracted twice.

</details>

<details>
<summary>Worked solution</summary>

A complement with two missing-symbol events needs an overlap correction.

1. There are 243 unrestricted words, and thirty-two words missing each specified symbol.
2. Exactly one word, CCCCC, misses both.
3. The count is $243-32-32+1=180$.

</details>
