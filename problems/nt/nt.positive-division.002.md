# Separate full groups and the remainder

*Easy · [Number theory](index.md)*

Find integers q and r such that $47 = 8q + r$ and $0 \leq  r < 8$.

```answer
{"answer":{"kind":"integer_pair","expected":{"q":5,"r":7},"checker_scope":"Checks both exact integer entries; the authored result satisfies the stated division equality and remainder bounds."}}
```

<details>
<summary>Hint 1</summary>

Find consecutive multiples of $8$ that surround $47$.

</details>

<details>
<summary>Hint 2</summary>

The quotient uses the lower multiple; the remainder is the gap above it.

</details>

<details>
<summary>Worked solution</summary>

The remainder is what remains after the largest permitted whole multiple has been removed.

1. The surrounding multiples are $40 = 8 \times  5$ and $48 = 8 \times  6$.
2. Thus $q = 5$ and $r = 47 - 40 = 7$. Check $47 = 8 \times  5 + 7$ and $0 \leq  7 < 8$.

</details>
