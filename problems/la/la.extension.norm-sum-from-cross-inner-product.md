# Recover a sum norm from cross information

*Easy · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. If $\|u\|^2=4$, $\|v\|^2=9$ and $\langle u,v\rangle=1$, find $\|u+v\|^2$.

```answer
{"answer":{"kind":"integer","expected":15,"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Expand the inner product of the sum with itself.

</details>

<details>
<summary>Hint 2</summary>

In a real inner product the two cross terms are equal.

</details>

<details>
<summary>Worked solution</summary>

Use bilinearity before taking any square root.

1. The expansion is $\|u\|^2+2\langle u,v\rangle+\|v\|^2$.
2. The supplied values give $4+2+9$.
3. Thus the squared sum norm is fifteen; the question does not ask for its square root.

</details>
