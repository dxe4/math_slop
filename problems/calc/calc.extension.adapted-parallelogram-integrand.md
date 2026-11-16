# Pull back a nonconstant integrand under a linear map

*Medium · [Calculus](index.md)*

Let D be the image of \[0,1\]×\[0,2\] under T(u,v)=(2u+v,u+v). Evaluate $\iint_D(x-y)\,dA$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The integrand simplifies to u.

</details>

<details>
<summary>Hint 2</summary>

Compute the absolute determinant separately before integrating.

</details>

<details>
<summary>Worked solution</summary>

A coordinate map changes both the area element and the integrand.

1. The derivative determinant is 2·1−1·1=1, so the map is one-to-one and has area factor 1.
2. The pullback x−y equals u. Thus the integral is ∫₀¹∫₀²u dv du.
3. This is 2∫₀¹u du=1.

</details>
