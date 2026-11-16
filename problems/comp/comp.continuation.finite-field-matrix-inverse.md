# Invert a matrix over a prime field with canonical entries

*Medium · [Computational arithmetic problems](index.md)*

Find the inverse of $A=\begin{pmatrix}2&3\\1&4\end{pmatrix}$ over $\mathbb F_7$. Return a $2\times2$ matrix whose entries lie in $\{0,\ldots,6\}$.

```answer
{"answer":{"kind":"matrix","expected":[["5","5"],["4","6"]],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Compute the determinant in the field and invert that nonzero residue.

</details>

<details>
<summary>Hint 2</summary>

Apply the adjugate formula, reducing negative entries to the required canonical representatives.

</details>

<details>
<summary>Worked solution</summary>

Field inversion uses a modular scalar inverse, not division as a real-number matrix.

1. The determinant is $8-3=5\pmod7$, whose inverse is $3$ because $5\cdot3\equiv1$.
2. The adjugate is $\begin{pmatrix}4&-3\\-1&2\end{pmatrix}$, so multiplying by $3$ gives $\begin{pmatrix}12&-9\\-3&6\end{pmatrix}$.
3. Reducing entries modulo $7$ yields $\begin{pmatrix}5&5\\4&6\end{pmatrix}$.
4. The product with $A$ has integer entries $\begin{pmatrix}22&28\\21&29\end{pmatrix}$, which reduce to the identity.

</details>
