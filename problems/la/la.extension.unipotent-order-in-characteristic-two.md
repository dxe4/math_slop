# Find a unipotent matrix order over a binary field

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb F_2$, with arithmetic modulo two. Let $N=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}$ and $U=I+N$ over $\mathbb F_2$. Find the multiplicative order of $U$.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

In characteristic two the cross term in $(I+N)^2$ vanishes.

</details>

<details>
<summary>Hint 2</summary>

Check both the square and its square, using $N^2\ne0$ and $N^3=0$.

</details>

<details>
<summary>Worked solution</summary>

Characteristic changes the binomial coefficients, not the chain length.

1. $U^2=I+N^2\ne I$ because $N^2=E_{13}\ne0$.
2. Squaring again gives $U^4=I+N^4=I$.
3. The order divides four but is neither one nor two, so it equals four.

</details>
