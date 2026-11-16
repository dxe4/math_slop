# Reduce a high power through an annihilating quadratic

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. A real square matrix satisfies $A^2=A+I$. Find $[a,b]$ such that the polynomial reduction gives $A^{10}=aI+bA$ modulo $x^2-x-1$.

```answer
{"answer":{"kind":"vector","expected":["34","55"],"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Multiplying $aI+bA$ by $A$ changes the coefficient pair to $[b,a+b]$.

</details>

<details>
<summary>Hint 2</summary>

Start from the coefficient pair for $A$ and iterate the short recurrence.

</details>

<details>
<summary>Worked solution</summary>

Use a quadratic relation to reduce all higher powers.

1. The pairs for $A,A^2,A^3,A^4,A^5$ are $[0,1],[1,1],[1,2],[2,3],[3,5]$.
2. The same recurrence gives $[5,8],[8,13],[13,21],[21,34],[34,55]$ for powers six through ten.
3. Thus the uniquely specified remainder polynomial is $34+55x$, and substitution yields the asserted matrix identity without assuming diagonalizability.

</details>
