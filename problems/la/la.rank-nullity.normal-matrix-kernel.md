# Find a normal matrix nullity without multiplying

*Medium · [Linear algebra problems](index.md)*

Let $A=\begin{pmatrix}1&0&1&2\\0&1&1&1\\1&1&2&3\end{pmatrix}$. Find the nullity of $A^TA$ over $\mathbb R$ without forming that product.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Compare the kernel of the product with the kernel of the original matrix using a squared Euclidean norm.

</details>

<details>
<summary>Hint 2</summary>

The last row of the original matrix is dependent, but the first two are independent.

</details>

<details>
<summary>Worked solution</summary>

The identity $x^TA^TAx=\|Ax\|^2$ identifies the relevant kernel exactly.

1. If $A^TAx=0$, multiplication by $x^T$ gives $\|Ax\|^2=0$, hence $Ax=0$. The converse is immediate, so $\ker(A^TA)=\ker A$.
2. The third row of $A$ is the sum of the first two, and those first two rows are independent. Thus $\operatorname{rank}A=2$.
3. The domain has dimension $4$, so rank-nullity gives $\dim\ker(A^TA)=4-2=2$.

</details>
