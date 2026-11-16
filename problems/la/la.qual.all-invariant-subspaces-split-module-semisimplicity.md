# Characterize invariant-complement splitting over an arbitrary field

*Hard · [Linear algebra problems](index.md)*

For an endomorphism T over any field F, prove every T-invariant subspace has a T-invariant complement if and only if the minimal polynomial is a product of distinct monic irreducibles in $F[t]$. Explain why this does not assert diagonalizability over an algebraic closure of an imperfect field. Preparation: polynomial primary decomposition.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

When each primary exponent is one, a primary component is a vector space over the field $F[t]/(p)$.

</details>

<details>
<summary>Hint 2</summary>

For the converse examine the kernel of p(T) inside a primary component with exponent greater than one.

</details>

<details>
<summary>Model proof</summary>

Semisimplicity as an operator module must be separated from absolute splitting.

1. With a squarefree factorization, CRT projectors decompose V into primary components $V_p$ annihilated by p(T). Each is a vector space over $K_p=F[t]/(p)$, and every invariant U decomposes as the sum of its intersections with those components.
2. Each intersection is a $K_p$-subspace because it is preserved by all polynomials in T. Choose a $K_p$-linear complement on each component and add them. These complements are T-invariant and give the desired splitting.
3. Conversely suppose every invariant subspace splits. In a p-primary component, apply this to the kernel of p(T). A global invariant complement restricts to a complement on this primary component because CRT projectors preserve it. On that restricted complement p(T) is injective, yet nilpotent, so the complement must be zero. Thus the whole primary component is killed by p(T), forcing its exponent to be one.
4. Over an imperfect field an irreducible factor may be inseparable. The associated quotient field still gives the stated module splitting, but after scalar extension the polynomial can acquire repeated roots. The operator need not become diagonalizable; the $t^p-s$ example illustrates that distinction.

**Self-assessment rubric**

- Interpret exponent-one primary components as vector spaces over quotient fields.
- Decompose an invariant subspace and choose field-linear complements.
- Restrict a proposed complement to a repeated primary factor and derive an injective-nilpotent contradiction.
- Distinguish irreducible squarefreeness over F from separability over an algebraic closure.

</details>
