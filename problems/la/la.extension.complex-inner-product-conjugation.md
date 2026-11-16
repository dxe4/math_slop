# Track the conjugated argument

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb C$ with dimensionless column coordinates. The inner product is linear in its first argument: $\langle u,v\rangle=\sum_j u_j\overline{v_j}$. Compute $\langle(1,i),(i,2)\rangle$ in the stated convention.

```answer
{"answer":{"kind":"complex","expected":"i","checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Conjugate the coordinates of the second vector.

</details>

<details>
<summary>Hint 2</summary>

Combine the two imaginary contributions only after multiplying.

</details>

<details>
<summary>Worked solution</summary>

Use the declared complex convention literally.

1. The conjugated second coordinates are $(-i,2)$.
2. The product sum is $1(-i)+i\cdot2$.
3. The value is $i$. Conjugating the first argument instead would produce the opposite convention.

</details>
