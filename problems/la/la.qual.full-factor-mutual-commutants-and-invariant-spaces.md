# Classify a full tensor-factor action over any field

*Hard · [Linear algebra problems](index.md)*

On $F^m\otimes F^n$ with $m,n\ge1$, prove the commutant of $M_m(F)\otimes I_n$ is $I_m\otimes M_n(F)$. Prove its invariant subspaces are exactly $F^m\otimes W_0$ for subspaces $W_0\subseteq F^n$. Preparation: matrix units and algebraic tensor products. No algebraic closure is assumed.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict, demonstration or checkpoint evidence is awarded."}}
```

<details>
<summary>Hint 1</summary>

Commuting with coordinate projections kills off-diagonal operator blocks; transfer units equate the diagonal blocks.

</details>

<details>
<summary>Hint 2</summary>

For an invariant vector, use a transfer unit to isolate any one of its second-factor components in the first coordinate.

</details>

<details>
<summary>Model proof</summary>

Matrix units determine both commuting operators and every invariant subspace.

1. Write an operator as an m-by-m array of n-by-n blocks. Commutation with each $E_{ii}\otimes I$ forces block diagonality, and with each $E_{ij}\otimes I$ makes every diagonal block equal. Thus precisely the maps $I_m\otimes B$ commute. Conversely those maps commute by the tensor multiplication rule.
2. For an invariant U define $W_0=\{w:e_1\otimes w\in U\}$. If $z=\sum_i e_i\otimes w_i\in U$, applying $E_{1i}\otimes I$ gives $w_i\in W_0$, so $U\subseteq F^m\otimes W_0$.
3. For every w in $W_0$, applying $E_{i1}\otimes I$ gives $e_i\otimes w\in U$ for all i. These vectors span $F^m\otimes W_0$, proving the opposite containment.
4. Every subspace of the stated form is visibly invariant. Interchanging the factors also gives the reverse mutual-commutant statement, with all arguments over F itself.

**Self-assessment rubric**

- Use projections and transfer units to prove exactly the repeated-block commutant.
- Define the common coefficient space and isolate every component of an invariant vector.
- Recover all tensor coordinates from that coefficient space.
- Verify the converses and avoid any unnecessary algebraic closure hypothesis.

</details>
