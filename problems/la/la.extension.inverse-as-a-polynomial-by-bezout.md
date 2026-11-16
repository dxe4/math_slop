# Derive an inverse from a nonzero constant term

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. A real square matrix obeys $A^2-3A+2I=0$. Find $[a,b]$ for the inverse formula $A^{-1}=aI+bA$ obtained from this relation.

```answer
{"answer":{"kind":"vector","expected":["3/2","-1/2"],"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Rearrange the identity to put a multiple of the identity on one side.

</details>

<details>
<summary>Hint 2</summary>

Factor the other side by $A$ and divide only by a nonzero scalar.

</details>

<details>
<summary>Worked solution</summary>

The annihilating relation itself constructs both sides of an inverse.

1. The equation gives $A(3I-A)=2I$.
2. Because $3I-A$ is a polynomial in $A$, it commutes with $A$, so the reversed product is also $2I$.
3. Thus $(3I-A)/2$ is a two-sided inverse, giving $[3/2,-1/2]$.

</details>
