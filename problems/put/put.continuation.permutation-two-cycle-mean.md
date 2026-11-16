# Permutation two cycle mean

*Medium · [Original Putnam-style training](index.md)*

For a uniform permutation of $6$ labels, find the expected number of cycles of length exactly $2$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use one indicator for every unordered pair of labels.

</details>

<details>
<summary>Hint 2</summary>

Count permutations in which a specified pair forms a two-cycle.

</details>

<details>
<summary>Worked solution</summary>

Linearity gives expected two-cycles $15/30=1/2$.

1. There are $\binom62=15$ candidate unordered pairs.
2. A specified pair forms a two-cycle in $4!$ of the $6!$ permutations, probability $4!/6!=1/30$.
3. Linearity gives expected two-cycles $15/30=1/2$.

</details>
