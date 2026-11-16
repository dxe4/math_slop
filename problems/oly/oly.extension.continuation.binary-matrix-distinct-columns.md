# Recognize a forced collection of column types

*Medium · [Original olympiad-style problems](index.md)*

How many $2\times4$ zero-one matrices have two ones in each row and no two identical columns? Positions of rows and columns are labeled.

```answer
{"answer":{"kind":"integer","expected":"24","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

There are exactly four possible binary column types of height two.

</details>

<details>
<summary>Hint 2</summary>

Four distinct columns must use each type exactly once.

</details>

<details>
<summary>Worked solution</summary>

Exploit the exhausted column alphabet before imposing row counts.

1. The column types are 00,01,10,11. Distinctness with four columns forces all four.
2. Each row then automatically has two ones, so no additional choices are excluded.
3. The four types can be ordered in $4!=24$ labeled columns.

</details>
