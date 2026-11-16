# Use diagonal conjugation to find the whole unipotent derived subgroup

*Medium · [Abstract algebra problems](index.md)*

Let G be the invertible upper triangular two-by-two matrices over F3. Find $|[G,G]|$. Let U(t)=\[\[1,t\],\[0,1\]\] and use diagonal conjugation as well as the diagonal quotient.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact requested finite structural quantity only; no group-theoretic proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The homomorphism taking the two diagonal entries has an abelian image.

</details>

<details>
<summary>Hint 2</summary>

Conjugate U(1) by diag(2,1) and take the commutator.

</details>

<details>
<summary>Worked solution</summary>

A scaling action detects the lower inclusion in the unipotent kernel.

1. The diagonal map has abelian image (F3 units)^2 and kernel U={U(t):t in F3}, so the derived subgroup is contained in the order-three U.
2. For D=diag(2,1), one has D\*U(1)\*D inverse=U(2), and \[D,U(1)\]=U(2)\*U(-1)=U(1).
3. Since U(1) generates U, the derived subgroup equals U and has order three.

</details>
