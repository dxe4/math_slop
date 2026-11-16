# Count words whose sorted order is forced

*Hard · [Combinatorics](index.md)*

How many nondecreasing length-four words use digits $0,1,2$, with repetition allowed and leading zero allowed?

```answer
{"answer":{"kind":"integer","expected":"15","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

A word is determined by its counts of the three digits.

</details>

<details>
<summary>Hint 2</summary>

Fix the number of twos, then count possibilities for the number of ones.

</details>

<details>
<summary>Worked solution</summary>

Nondecreasing order removes permutation multiplicities but still allows repeated digits.

1. If the number of twos is j, the remaining $4-j$ positions contain zeros and ones in forced sorted order.
2. For j=0,1,2,3,4 the numbers of possibilities are 5,4,3,2,1 respectively.
3. Adding gives fifteen words.

</details>
