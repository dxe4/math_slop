# Find an outer-product spectrum

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. For $u=(1,1,1)^T$, $v=(1,0,2)^T$ and $A=uv^T$, return the set of distinct eigenvalues.

```answer
{"answer":{"kind":"set","expected":["0","3"],"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Apply $A$ to $u$ and compute the scalar $v^Tu$.

</details>

<details>
<summary>Hint 2</summary>

The kernel contains every vector annihilated by $v^T$.

</details>

<details>
<summary>Worked solution</summary>

Separate the image line from its kernel hyperplane.

1. $Au=u(v^Tu)=3u$, so three is an eigenvalue.
2. The nonzero functional $v^T$ has a two-dimensional kernel on which $A$ vanishes, giving eigenvalue zero.
3. These spaces have dimensions one and two and intersect trivially, so they fill the space and the distinct spectrum is $\{0,3\}$.

</details>
