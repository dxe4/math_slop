# Use absolute determinant for area

*Medium · [Multivariable calculus problems](index.md)*

Let $D$ be the image of $[0,1]^2$ under $T(u,v)=(u+v,u-v)$. Find $\operatorname{area}(D)$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact requested value, vector or matrix only; a numerical answer does not automatically certify the accompanying extremum or integration argument."}}
```

<details>
<summary>Hint 1</summary>

The linear map is invertible, so it covers the image exactly once.

</details>

<details>
<summary>Hint 2</summary>

Area uses the magnitude of its determinant, even if orientation is reversed.

</details>

<details>
<summary>Worked solution</summary>

A signed Jacobian and an area scale play different roles.

1. The derivative determinant is $-2$, which is nonzero, so the map is one-to-one.
2. The area scale is $|\det DT|=2$.
3. Integrating that constant over the unit square gives image area $2$.

</details>
