# Prove character completeness without assuming the class count

*Hard · [Abstract algebra problems](index.md)*

For a finite group $G$, prove that its irreducible complex characters form an orthonormal basis of the class functions. You may use Maschke's theorem and matrix-coefficient orthogonality, but do not assume beforehand that the number of irreducibles equals the number of conjugacy classes.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Orthogonality is known; show a class function orthogonal to every irreducible character must vanish.

</details>

<details>
<summary>Hint 2</summary>

Turn that class function into a central element of $mathbf C[G]$ and use its scalar action on every irreducible, then on the regular module.

</details>

<details>
<summary>Model proof</summary>

A central convolution operator detects the missing part of character space.

1. Matrix-coefficient orthogonality implies character orthonormality. Suppose a class function $f$ satisfies $\langle f,\chi\rangle=0$ for every irreducible character $\chi$. Define $z=\sum_g f(g)g^{-1}$; conjugacy invariance makes $z$ central.
2. On an irreducible of degree $d$ it acts as a scalar $\lambda$ by Schur's lemma. Its trace is $\sum_g f(g)\chi(g^{-1})=|G|\langle f,\chi\rangle=0$, so $d\lambda=0$ and $\lambda=0$.
3. By Maschke every summand of the regular module is irreducible, so left multiplication by $z$ vanishes on the entire regular module. Applying it to $1$ gives $z=0$, and every coefficient $f(g)$ vanishes. The orthogonal complement is zero, establishing completeness and then equality with the number of conjugacy classes.

**Self-assessment rubric**

- Establish orthogonality and build a central group-algebra element from an orthogonal class function.
- Use the character inner product to prove the central element acts as zero on each irreducible.
- Use complete reducibility and the regular module's faithfulness to force every coefficient to vanish.

</details>
