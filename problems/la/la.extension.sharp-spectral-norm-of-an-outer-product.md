# Find an induced norm with an equality input

*Medium · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. For $A=uv^T$, $u=(1,2)^T$, $v=(2,0,1)^T$, find $\|A\|_2^2$, where the norm is induced by Euclidean vector norms.

```answer
{"answer":{"kind":"integer","expected":25,"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

For any input $x$, the output is $u$ times the scalar $v^Tx$.

</details>

<details>
<summary>Hint 2</summary>

Cauchy-Schwarz gives an upper bound, attained by an input parallel to $v$.

</details>

<details>
<summary>Worked solution</summary>

Prove sharpness of an operator bound rather than merely bounding entries.

1. $\|Ax\|=\|u\||v^Tx|\le\|u\|\|v\|\|x\|$.
2. Taking $x=v/\|v\|$ attains the bound, so the induced norm is $\|u\|\|v\|$.
3. Both squared vector lengths are five, giving squared operator norm twenty-five.

</details>
