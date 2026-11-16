# Use nilpotent paths to truncate a matrix power exactly

*Medium · [Computational arithmetic problems](index.md)*

For $A=\begin{pmatrix}1&1&2&0\\0&1&1&1\\0&0&1&1\\0&0&0&1\end{pmatrix}$, find the entry $(A^{20})_{14}$.

```answer
{"answer":{"kind":"integer","expected":"1710","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Write $A=I+N$ and determine when powers of the strictly upper-triangular $N$ vanish.

</details>

<details>
<summary>Hint 2</summary>

Count the weighted two-step and three-step index paths from $1$ to $4$ before applying binomial coefficients.

</details>

<details>
<summary>Worked solution</summary>

Nilpotency converts a long power into finitely many weighted path contributions.

1. Here $N^4=0$, so $A^{20}=I+20N+\binom{20}{2}N^2+\binom{20}{3}N^3$.
2. The direct entry $N_{14}$ is zero. The two-step contributions are $N_{12}N_{24}+N_{13}N_{34}=1+2=3$.
3. The only three-step contribution is $N_{12}N_{23}N_{34}=1$.
4. Therefore $(A^{20})_{14}=3\cdot190+1140=1710$.

</details>
