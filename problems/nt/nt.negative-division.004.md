# Use the lower multiple for a negative dividend

*Easy · [Number theory](index.md)*

Find integers q and r such that $-38 = 9q + r$ and $0 \leq  r < 9$.

```answer
{"answer":{"kind":"integer_pair","expected":{"q":-5,"r":7},"checker_scope":"Checks both exact integer entries; the authored result satisfies the stated division equality and remainder bounds."}}
```

<details>
<summary>Hint 1</summary>

A canonical remainder is nonnegative even for a negative dividend.

</details>

<details>
<summary>Hint 2</summary>

Locate $-38$ between two consecutive multiples of $9$.

</details>

<details>
<summary>Worked solution</summary>

The lower multiple, rather than truncation toward zero, produces a nonnegative remainder.

1. We have −45 ≤ −38 &lt; −36, so the lower multiple is −45 = 9 × (−5).
2. The gap is −38 − (−45) = 7. Thus $q = -5$ and $r = 7$, satisfying the required bounds.

</details>
