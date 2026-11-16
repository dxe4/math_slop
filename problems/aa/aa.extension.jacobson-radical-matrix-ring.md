# Lift the unit criterion to the full matrix Jacobson radical

*Hard · [Abstract algebra problems](index.md)*

Let R be a nonzero commutative unital ring. Prove $J(M_n(R))=M_n(J(R))$. You may use the unital-ring criterion a in J(S) exactly when1-b\*a is a unit for every b in S. Derive the commutative criterion through maximal ideals, then use determinants for both matrix inclusions.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A matrix whose entries lie in J(R) makes det(I-B\*A) congruent to one modulo J(R).

</details>

<details>
<summary>Hint 2</summary>

For the reverse direction choose B=r\*E\_ji and use det(I-r\*E\_ji\*A)=1-r\*a\_ij.

</details>

<details>
<summary>Model proof</summary>

Entrywise radical structure follows from a universal matrix-unit test.

1. For commutative R, a belongs to every maximal ideal exactly when1-r\*a is a unit for every r. In the forward direction a maximal ideal containing a nonunit1-r\*a would contain one. In the reverse direction if a is nonzero modulo a maximal ideal, choose r as its inverse in the field quotient, making1-r\*a a nonunit.
2. If all entries of A lie in J(R), so do all entries of B\*A. The determinant of I-B\*A is1+j with j in J(R), hence a unit by that criterion. The adjugate identity makes I-B\*A invertible for every B. The stated general criterion gives A in J(M\_n(R)).
3. Conversely let A lie in that matrix radical. For any entry a\_ij and r in R, take B=r\*E\_ji. The matrix I-B\*A differs from identity only in row j; expansion gives determinant1-r\*a\_ij. It is a unit because the matrix is invertible. The commutative criterion then forces each a\_ij into J(R), proving the reverse inclusion.

**Self-assessment rubric**

- Prove both directions of the commutative unit test with legitimate residue-field inverses.
- Turn the radical determinant into a genuine inverse for every multiplier.
- Choose the correct matrix unit and isolate every scalar entry.

</details>
