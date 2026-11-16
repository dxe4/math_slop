# Find a least threshold-crossing Pell solution using a supplied classification

*Medium · [Computational arithmetic problems](index.md)*

All positive solutions of $x^2-2y^2=1$ are given by (3+2sqrt(2))^k for positive integers k. Use the updates xnew=3x+4y,ynew=2x+3y. Find the least x&gt;100 occurring in such a solution.

```answer
{"answer":{"kind":"integer","expected":"577","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Generate successive pairs in increasing exponent order.

</details>

<details>
<summary>Hint 2</summary>

Both coordinates are positive, so the supplied x update strictly increases x.

</details>

<details>
<summary>Worked solution</summary>

An exhaustive unit-power classification turns a threshold search into a short monotone recurrence.

1. Starting at (3,2), the next two pairs are (17,12) and (99,70) from the given update.
2. The next pair is (3 times 99+4 times 70,2 times 99+3 times 70)=(577,408).
3. All positive solutions occur in this order by the supplied classification, and x increases strictly. Thus the first x exceeding one hundred is 577.

</details>
