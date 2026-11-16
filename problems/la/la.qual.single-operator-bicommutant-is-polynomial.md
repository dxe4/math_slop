# Identify a single operator bicommutant over an arbitrary field

*Hard · [Linear algebra problems](index.md)*

Let A be an endomorphism of a nonzero finite-dimensional space over a field F. Prove every endomorphism commuting with every map that commutes with A is a polynomial in A. Preparation: invariant-factor decomposition over $F[t]$. No algebraic closure hypothesis is allowed.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Use cyclic summands with divisibility-ordered invariant factors.

</details>

<details>
<summary>Hint 2</summary>

Commuting with summand projections forces block diagonal action; maps reducing the largest cyclic quotient onto the others force compatible residues.

</details>

<details>
<summary>Model proof</summary>

The largest invariant factor synchronizes all cyclic-summand actions.

1. Write the operator module as $M=\bigoplus_{j=1}^kF[t]/(d_j)$, with nonconstant $d_1\mid\cdots\mid d_k$. A map B in the bicommutant commutes with A itself and is therefore $F[t]$-linear.
2. The projections onto these summands commute with A. Commuting with them makes B block diagonal. On each cyclic summand, an $F[t]$-linear endomorphism is multiplication by a residue polynomial $b_j$.
3. For every j, reduction modulo $d_j$ is an $F[t]$-linear map from the largest summand to the j-th, and extends by zero on other summands to a commuting endomorphism of M. Commutation with it forces $b_j\equiv b_k\pmod{d_j}$.
4. Thus one polynomial representing $b_k$ gives B on every summand, so $B=b_k(A)$. Conversely every polynomial in A commutes with every map commuting with A, proving equality of the two algebras over the original field.

**Self-assessment rubric**

- Use the divisibility-ordered cyclic module decomposition over the original field.
- Explain why bicommutant membership gives module linearity and block diagonal actions.
- Construct the reduction intertwiners and derive the residue congruences.
- Identify one polynomial for all blocks and prove the converse containment.

</details>
