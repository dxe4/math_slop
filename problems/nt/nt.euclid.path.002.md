# Euclidean algorithm: last nonzero remainder

*Easy · [Number theory](index.md)*

A Euclidean calculation gives $252 = 2 \times  105 + 42, 105 = 2 \times  42 + 21, 42 = 2 \times  21 + 0$. What is $\gcd (252,105)$?

```answer
{"answer":{"kind":"integer","expected":21,"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Read the final nonzero remainder, not the final zero.

</details>

<details>
<summary>Hint 2</summary>

The last division says exactly that $21$ divides $42$.

</details>

<details>
<summary>Worked solution</summary>

The zero remainder ends the chain; the preceding nonzero value is the gcd.

1. The gcd is unchanged along $(252,105), (105,42), (42,21), (21,0)$.
2. The positive divisors common to $21$ and $0$ have greatest member $21$.

</details>
