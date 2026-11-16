# Read a power kernel from a chain action

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. Let $N$ send $e_3$ to $e_2$, $e_2$ to $e_1$ and $e_1$ to zero in $\mathbb R^3$. Find $\dim\ker(N^2)$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Apply the shift twice to each input basis vector.

</details>

<details>
<summary>Hint 2</summary>

Only one basis vector survives both applications.

</details>

<details>
<summary>Worked solution</summary>

Compute the action of the power before counting its kernel.

1. $N^2e_1=N^2e_2=0$, while $N^2e_3=e_1$.
2. Hence $N^2(ae_1+be_2+ce_3)=ce_1$.
3. The kernel consists of the vectors with $c=0$, a two-dimensional space.

</details>
