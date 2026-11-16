# Prove when a diagonalizable power forces a diagonalizable operator

*Hard · [Linear algebra problems](index.md)*

Let A be invertible over a field F and let $k\ge1$ be nonzero in F. Prove that if $A^k$ is diagonalizable over an algebraic closure, then A is too. Give counterexamples when invertibility is dropped and when the characteristic divides k.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The minimal polynomial of the power is squarefree and nonzero at zero.

</details>

<details>
<summary>Hint 2</summary>

Compose that polynomial with $t^k$ and examine its derivative at every root.

</details>

<details>
<summary>Model proof</summary>

A separable annihilator of the power produces a separable annihilator of the original map.

1. Let q be the minimal polynomial of $A^k$. It has distinct roots over the algebraic closure, and $q(0)\ne0$ because A is invertible. The polynomial $q(t^k)$ annihilates A.
2. At any root alpha of this composite, alpha is nonzero and $q^{\prime}(\alpha^k)\ne0$. Its derivative is $k\alpha^{k-1}q^{\prime}(\alpha^k)\ne0$. Thus the composite is squarefree, and so is its divisor, the minimal polynomial of A. This proves absolute diagonalizability.
3. Without invertibility, a nonzero two-by-two square-zero Jordan block is not diagonalizable but its square is zero. In characteristic p, take $A=I+N$ for a nonzero square-zero block N. It is invertible and not diagonalizable, while $A^p=I$ by the characteristic-p binomial identity.

**Self-assessment rubric**

- Identify squarefreeness and the nonzero constant condition for the power annihilator.
- Show the composite derivative is nonzero at every root under both hypotheses.
- Transfer separability to the minimal polynomial of A.
- Give and verify distinct examples showing each hypothesis has a role.

</details>
