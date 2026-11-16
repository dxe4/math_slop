# Count restricted ternary words by their final state

*Hard · [Combinatorics](index.md)*

How many length-$4$ words over {A,B,C} contain no adjacent pair AA?

```answer
{"answer":{"kind":"integer","expected":"60","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Split words by whether the last symbol is A or is B/C.

</details>

<details>
<summary>Hint 2</summary>

Appending A to a shorter word requires that shorter word to end in B or C.

</details>

<details>
<summary>Worked solution</summary>

A final-symbol classification derives the recurrence before its numerical use.

1. Let a\_n count valid words, with a\_0=1 and a\_1=3. For n&gt;=2, words ending in B or C number 2a\_(n-1).
2. Words ending in A have their previous symbol in {B,C}, giving 2a\_(n-2) possibilities. Thus a\_n=2a\_(n-1)+2a\_(n-2).
3. This gives a\_2=8, a\_3=22 and a\_4=60.

</details>
