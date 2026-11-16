# Find a multiplicative order in an eight-element field

*Medium · [Abstract algebra problems](index.md)*

Let $\mathbb F_8=\mathbb F_2[\alpha]/(\alpha^3+\alpha+1)$. Find the multiplicative order of $\alpha$.

```answer
{"answer":{"kind":"integer","expected":7,"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The nonzero elements form a group whose order is one less than the field size.

</details>

<details>
<summary>Hint 2</summary>

Check whether the generator can be either zero or the multiplicative identity using its defining polynomial.

</details>

<details>
<summary>Worked solution</summary>

A prime group order leaves only the identity and full-order alternatives.

1. The defining polynomial is nonzero at both $0$ and $1$, so $\alpha$ is neither of those elements. The cubic has no binary root and is irreducible, so this quotient is indeed a field.
2. The multiplicative group has order $8-1=7$. By Lagrange, the nonidentity element $\alpha$ has order dividing the prime $7$.
3. The order cannot be one, so it is $7$.

</details>
