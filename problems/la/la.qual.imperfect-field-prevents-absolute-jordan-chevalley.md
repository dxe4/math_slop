# Prove an imperfect-field decomposition obstruction

*Hard · [Linear algebra problems](index.md)*

Let p be prime, $F=\mathbb F_p(s)$ and T be multiplication by t on $F[t]/(t^p-s)$. Prove T admits no decomposition $T=S+N$ into commuting F-linear parts with N nilpotent and S diagonalizable over an algebraic closure of F. Preparation: Eisenstein, Gauss lemma and cyclic operator modules.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The operator algebra $F[T]$ is a field because its defining polynomial is irreducible.

</details>

<details>
<summary>Hint 2</summary>

Every commuting endomorphism of this cyclic module is multiplication by one residue class. Apply that to a proposed nilpotent part.

</details>

<details>
<summary>Model proof</summary>

A field-valued commutant cannot contain the nilpotent correction required by inseparability.

1. The polynomial $t^p-s$ is Eisenstein at s in $\mathbb F_p[s][t]$, hence irreducible over F by Gauss lemma. Thus $F[T]\cong F[t]/(t^p-s)$ is a field.
2. Any F-linear endomorphism commuting with T is determined by its value at the cyclic vector one, and on every polynomial class acts by multiplication by that value. Therefore the full commutant is this field.
3. In a commuting decomposition, N commutes with $T=S+N$, so it belongs to that field. A nilpotent element of a field is zero, forcing $S=T$.
4. Over an algebraic closure, $t^p-s=(t-\alpha)^p$. The extended cyclic module retains a length-p Jordan block, so T is not diagonalizable for prime p at least two. This contradicts the required property of S.

**Self-assessment rubric**

- Establish irreducibility over the rational-function field with the stated algebraic tools.
- Prove the commuting algebra consists of multiplication by module elements.
- Use the field property to force a proposed commuting nilpotent correction to vanish.
- Explain the nontrivial Jordan block after scalar extension and finish the contradiction.

</details>
