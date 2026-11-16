# A deletion rule with an order-independent endpoint

*Medium · [Original olympiad-style problems](index.md)*

A finite binary word contains $17$ zeros and $12$ ones, in any order. A move deletes two adjacent unequal digits, either $01$ or $10$. Prove that every maximal deletion sequence has the same final word, and give its length.

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The difference between the number of zeros and ones is unchanged.

</details>

<details>
<summary>Hint 2</summary>

A nonempty word with no adjacent unequal pair consists of one repeated digit.

</details>

<details>
<summary>Worked solution</summary>

A conserved signed count identifies the only possible irreducible word.

1. Each deletion removes one zero and one one, so the difference $\#0-\#1=5$ remains unchanged. Word length drops by two, so every move sequence is finite.
2. A terminal word has no adjacent unequal pair. If it contained both digit types, some first transition between types would give an available deletion. Thus it is either empty or constant.
3. The positive invariant excludes the empty word and an all-one word. The final word must therefore be five zeros, of length $5$, independently of the initial ordering and deletion choices.

</details>
