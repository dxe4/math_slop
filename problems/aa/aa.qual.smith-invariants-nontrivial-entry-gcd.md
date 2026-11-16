# Recover both invariant factors from a nonsingular presentation

*Medium · [Abstract algebra problems](index.md)*

For the integer matrix $M=\begin{pmatrix}6&9\\15&21\end{pmatrix}$, give the ordered nontrivial invariant factors of the Z-module Z^2/MZ^2.

```answer
{"answer":{"kind":"vector","expected":["3","3"],"checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Integer row and column operations preserve the quotient module type.

</details>

<details>
<summary>Hint 2</summary>

Use entry gcd and absolute determinant to recover the two Smith factors.

</details>

<details>
<summary>Worked solution</summary>

The determinant gives torsion size while the entry gcd distinguishes its internal type.

1. The entry gcd is three. The determinant is 126-135=-9, so the quotient is finite of order nine.
2. The first Smith factor is three and the second is nine divided by three, also three.
3. Thus the quotient is C3 times C3, with invariant-factor vector (3,3), rather than a cyclic group of order nine.

</details>
