# Place a parameterized vector in a plane

*Medium · [Linear algebra problems](index.md)*

Find all real $t$ for which $(1,t,3)$ lies in the span of $(1,0,1)$ and $(0,1,1)$. Enter the complete set.

```answer
{"answer":{"kind":"set","expected":[2],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Write a general linear combination and compare its first two coordinates with the target.

</details>

<details>
<summary>Hint 2</summary>

The last coordinate must agree with the coefficients already forced by the earlier coordinates.

</details>

<details>
<summary>Worked solution</summary>

Every vector in a two-generator plane obeys a compatibility relation.

1. A general combination is $a(1,0,1)+b(0,1,1)=(a,b,a+b)$.
2. Matching $(1,t,3)$ forces $a=1$, $b=t$ and $1+t=3$.
3. Thus $t=2$, and this choice works with coefficients $1,2$. The answer is $\{2\}$.

</details>
