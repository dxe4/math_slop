# Track squared powers before combining an exponent

*Medium · [Number theory](index.md)*

Modulo $19$, return the canonical residue vector (7^2,7^4,7^8,7^13). Use repeated squaring and the decomposition 13=8+4+1.

```answer
{"answer":{"kind":"vector","expected":["11","7","11","7"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Reduce each square before squaring again.

</details>

<details>
<summary>Hint 2</summary>

Multiply only the reduced powers whose exponents add to thirteen.

</details>

<details>
<summary>Worked solution</summary>

A compact square table avoids expansion of the full power.

1. The first residues are $7^2\equiv49\equiv11$ and $7^4\equiv11^2\equiv7$ modulo nineteen.
2. Squaring again gives $7^8\equiv7^2\equiv11$.
3. Then $7^{13}\equiv11\cdot7\cdot7\equiv11\cdot11\equiv7$, yielding $(11,7,11,7)$.

</details>
