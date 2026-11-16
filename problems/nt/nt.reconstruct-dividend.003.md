# Reconstruct a dividend from its division record

*Easy · [Number theory](index.md)*

A canonical division record has divisor $7$, quotient $-3$ and remainder $4$. What integer was divided?

```answer
{"answer":{"kind":"integer","expected":-17,"checker_scope":"Checks one exact integer in this explicitly bounded calculation; does not certify the explanation."}}
```

<details>
<summary>Hint 1</summary>

The division equality is dividend = divisor × quotient + remainder.

</details>

<details>
<summary>Hint 2</summary>

Keep the negative sign on the quotient when multiplying.

</details>

<details>
<summary>Worked solution</summary>

The quotient and remainder encode a single integer through a = dq + r.

1. Compute the multiple: $7 \times  (-3) = -21$.
2. Add the remainder: $-21 + 4 = -17$. Since $0 \leq  4 < 7$, the supplied record is canonical.

</details>
