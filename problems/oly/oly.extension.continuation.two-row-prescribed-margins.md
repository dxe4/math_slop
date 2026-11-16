# Count integer entries from one row only

*Medium · [Original olympiad-style problems](index.md)*

How many $2\times3$ matrices of nonnegative integers have row sums $2,2$ and column sums $1,1,2$ in that order?

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The first row determines the second through the column sums.

</details>

<details>
<summary>Hint 2</summary>

The first two entries of the first row are zero or one, and its third makes the row sum two.

</details>

<details>
<summary>Worked solution</summary>

Use bounded free coordinates instead of counting both rows independently.

1. Write the top row as $(a,b,c)$. Here a and b each lie in $\{0,1\}$ and c is $2-a-b$.
2. For all four choices of the first two entries, c lies between zero and two, and the complementary bottom row is nonnegative.
3. Its row sum is automatically total column sum four minus top sum two. Thus exactly four matrices work.

</details>
