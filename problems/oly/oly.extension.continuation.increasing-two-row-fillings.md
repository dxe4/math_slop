# Count increasing two-row fillings by a word bijection

*Hard · [Original olympiad-style problems](index.md)*

Fill a two-by-five rectangular array with $1,\ldots,10$, each used once, increasing along each row and down each column. How many fillings are possible?

```answer
{"answer":{"kind":"integer","expected":"42","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Record whether each successive label lies in the upper or lower row.

</details>

<details>
<summary>Hint 2</summary>

Column increase is equivalent to the upper count never falling below the lower count in a prefix; reflect the first violating prefix.

</details>

<details>
<summary>Worked solution</summary>

Translate the array constraint into a balanced word and subtract its bad words.

1. Choosing the five upper-row labels fixes both sorted rows. The column condition holds exactly when each initial label prefix has at least as many upper entries as lower entries.
2. There are $\binom{10}5=252$ balanced row words before this condition.
3. For a bad word, reflect upper and lower in the first prefix where lower exceeds upper by one. The result has six upper and four lower entries. Conversely such a word first reaches upper excess one, and reflecting that prefix recovers one unique bad balanced word.
4. The bad count is $\binom{10}6=210$. Subtracting leaves forty-two, with the word-array correspondence proving every count is a valid filling.

</details>
