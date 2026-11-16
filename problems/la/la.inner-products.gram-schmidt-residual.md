# Remove an existing orthogonal component

*Medium · [Linear algebra problems](index.md)*

Apply one Gram-Schmidt step to $v_1=(1,1,0)$, $v_2=(1,0,1)$, retaining $u_1=v_1$. Find $u_2=v_2-\frac{v_2\cdot u_1}{u_1\cdot u_1}u_1$. Do not normalize its length.

```answer
{"answer":{"kind":"vector","expected":["1/2","-1/2",1],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Compute the two inner products in the displayed coefficient separately.

</details>

<details>
<summary>Hint 2</summary>

Subtract the resulting multiple coordinate by coordinate.

</details>

<details>
<summary>Worked solution</summary>

Subtract the projection onto the already chosen direction.

1. $v_2\cdot u_1=1$ and $u_1\cdot u_1=2$, so the coefficient is $1/2$.
2. Hence $u_2=(1,0,1)-(1/2)(1,1,0)=(1/2,-1/2,1)$.
3. The result is nonzero and satisfies $u_1\cdot u_2=1/2-1/2=0$. Enter $[1/2,-1/2,1]$.

</details>
