# Derangements four

*Medium · [Original Putnam-style training](index.md)*

How many permutations of $4$ labels have no fixed point?

```answer
{"answer":{"kind":"integer","expected":"9","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use inclusion–exclusion over the four fixed-point events.

</details>

<details>
<summary>Hint 2</summary>

For a specified set of $k$ fixed labels, permute the remaining $4-k$.

</details>

<details>
<summary>Worked solution</summary>

Their sum is $9$.

1. Inclusion–exclusion gives $D_4=\sum_{k=0}^4(-1)^k\binom4k(4-k)!$.
2. The terms are $24,-24,+12,-4,+1$.
3. Their sum is $9$.

</details>
