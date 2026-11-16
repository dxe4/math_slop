# Recover a large matrix power in its minimal polynomial basis

*Hard · [Computational arithmetic problems](index.md)*

Let $A=\begin{pmatrix}0&0&-2\\1&0&1\\0&1&2\end{pmatrix}$. Find the unique coefficients $[c_0,c_1,c_2]$ such that $A^{20}=c_0I+c_1A+c_2A^2$. You may use Cayley-Hamilton.

```answer
{"answer":{"kind":"vector","expected":["-349524","0","349525"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Compute and factor the characteristic polynomial before repeatedly multiplying full matrices.

</details>

<details>
<summary>Hint 2</summary>

Interpolate the remainder of $t^{20}$ at its distinct characteristic roots, then use Cayley-Hamilton to justify the matrix identity.

</details>

<details>
<summary>Worked solution</summary>

Polynomial remainder arithmetic compresses a matrix power while retaining a uniqueness certificate.

1. The characteristic polynomial is $t^3-2t^2-t+2=(t-2)(t-1)(t+1)$. Its roots are distinct, so a remainder of degree below three is determined by its values there.
2. At $1$ and $-1$, the power has value $1$, giving $c_1=0$ and $c_0+c_2=1$. At $2$, it has value $2^{20}=1048576$, giving $c_0+4c_2=1048576$.
3. Subtracting yields $c_2=349525$ and $c_0=-349524$. The interpolation difference is divisible by the characteristic polynomial, hence vanishes at $A$.
4. The three distinct eigenvalues also make $I,A,A^2$ independent, so the requested coefficient vector is unique.

</details>
