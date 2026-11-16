# Evaluate a resultant in the lower-degree root field

*Medium · [Abstract algebra problems](index.md)*

For monic f define Res(f,g) as the product of g(alpha) over its roots alpha, counted with multiplicity. Find $Res(x^3-2,x^2-3)$.

```answer
{"answer":{"kind":"integer","expected":-23,"checker_scope":"Exact requested polynomial invariant only; no irreducibility or algebraic-geometry proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Swapping polynomial orders contributes the sign (-1)^(3\*2).

</details>

<details>
<summary>Hint 2</summary>

The quadratic roots make a conjugate product with no radical in the result.

</details>

<details>
<summary>Worked solution</summary>

A resultant can be evaluated in whichever root field is simpler, retaining its sign convention.

1. The swap sign is(-1)^6=1, from exchanging each root-difference factor, so the resultant equals Res(x^2-3,x^3-2).
2. At the two quadratic roots, the cubic values are3\*sqrt(3)-2 and -3\*sqrt(3)-2.
3. Their product is4-27=-23, giving the stated resultant.

</details>
