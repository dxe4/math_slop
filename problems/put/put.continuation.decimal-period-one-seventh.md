# Decimal period one seventh

*Medium · [Original Putnam-style training](index.md)*

Find the repeating period length of the base-ten expansion of $1/7$.

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

For a reduced fraction with denominator coprime to ten, the period is the order of $10$ modulo the denominator.

</details>

<details>
<summary>Hint 2</summary>

Reduce powers of $10\equiv3\pmod7$ until reaching one.

</details>

<details>
<summary>Worked solution</summary>

No earlier power is one, so the least period is $6$.

1. Long division repeats when the remainder returns to one, equivalently when $10^k\equiv1\pmod7$.
2. $10\equiv3$ and successive powers modulo $7$ are $3,2,6,4,5,1$.
3. No earlier power is one, so the least period is $6$.

</details>
