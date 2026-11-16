# Compute coupled Schur corrections in an exact block determinant

*Hard · [Computational arithmetic problems](index.md)*

Compute the determinant of $A=\begin{pmatrix}2&0&0&0&1&1\\0&3&0&0&1&-1\\0&0&4&0&1&1\\0&0&0&5&1&-1\\1&1&1&1&6&2\\1&-1&1&-1&2&7\end{pmatrix}$.

```answer
{"answer":{"kind":"integer","expected":"2854","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Use the first four diagonal pivots to clear both lower rows, retaining the resulting $2\times2$ block.

</details>

<details>
<summary>Hint 2</summary>

The two lower diagonal corrections use squares of the coupling signs, while the off-diagonal correction uses their signed products.

</details>

<details>
<summary>Worked solution</summary>

Two coupled Schur directions require separate diagonal and cross corrections before the final determinant.

1. The first diagonal block is $D=\operatorname{diag}(2,3,4,5)$, of determinant $120$. Clearing the first four columns of both lower rows leaves their $2\times2$ Schur complement.
2. The two diagonal corrections are both $1/2+1/3+1/4+1/5=77/60$, but the cross correction is $1/2-1/3+1/4-1/5=13/60$.
3. The remaining block is $\frac1{60}\begin{pmatrix}283&107\\107&343\end{pmatrix}$. Row additions used in clearing do not change the determinant.
4. Therefore $\det A=120(283\cdot343-107^2)/3600=(97069-11449)/30=2854$.

</details>
