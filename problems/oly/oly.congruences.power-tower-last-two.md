# Reduce the exponent of a power tower

*Medium · [Original olympiad-style problems](index.md)*

Find the least nonnegative residue of $7^{\,7^7}$ modulo $100$.

```answer
{"answer":{"kind":"integer","expected":"43","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Look for a small verified power-one relation for the outer base.

</details>

<details>
<summary>Hint 2</summary>

Reduce the inner exponent only modulo that verified exponent period.

</details>

<details>
<summary>Worked solution</summary>

Nested exponents can be reduced after establishing an appropriate outer period.

1. Since $7^4=2401\equiv1\pmod{100}$, only the outer exponent modulo four matters.
2. The inner exponent is $7^7\equiv(-1)^7\equiv3\pmod4$.
3. Thus the residue is $7^3\equiv343\equiv43\pmod{100}$.

</details>
