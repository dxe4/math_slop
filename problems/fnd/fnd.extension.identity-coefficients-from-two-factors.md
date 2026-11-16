# Determine coefficients by an identity expansion

*Medium · [Foundations bridge](index.md)*

For every real x, $(x+2)(x-3)=x^2+px+q$. Return \[p,q\].

```answer
{"answer":{"kind":"vector","expected":["-1","-6"],"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Expand all four products.

</details>

<details>
<summary>Hint 2</summary>

Combine the two degree-one terms before reading the coefficients.

</details>

<details>
<summary>Worked solution</summary>

An identity fixes both coefficients independently of x.

1. Expanding gives x²−3x+2x−6.
2. Combining the linear terms gives x²−x−6.
3. Hence p=−1 and q=−6, yielding \[−1,−6\].

</details>
