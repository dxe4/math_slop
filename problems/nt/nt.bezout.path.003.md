# Bezout coefficients: trace coefficients

*Medium · [Number theory](index.md)*

Given $23 = 3 \times  7 + 2$ and $7 = 3 \times  2 + 1$, back-substitute to write $1 = A \times  23 + B \times  7$. Use the coefficients produced by substituting $2 = 23 - 3 \times  7$ into $1 = 7 - 3 \times  2$. Return A,B.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"A":-3,"B":10},"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Start with $1 = 7 - 3 \times  2$.

</details>

<details>
<summary>Hint 2</summary>

Distribute the $-3$ after replacing $2$.

</details>

<details>
<summary>Worked solution</summary>

Back substitution turns the Euclidean remainder chain into an integer linear combination.

1. $1 = 7 - 3$($23 - 3 \times  7$).
2. Collect terms: 1 = −3 × 23 + 10 × 7, so $A = -3$ and $B = 10$.

</details>
