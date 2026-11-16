# Distinguish Takagi values from ordinary eigenvalues

*Medium · [Linear algebra problems](index.md)*

For $S=\begin{pmatrix}1&i\\i&-1\end{pmatrix}$ over $\mathbb C$, use Takagi factorization as prior L3 preparation: $S=UDU^T$ with U unitary and D nonnegative diagonal. Return the diagonal entries of D in nonincreasing order.

```answer
{"answer":{"kind":"vector","expected":["2","0"],"checker_scope":"Only the requested finite invariant or rational coordinate result is checked; form classification and reasoning are not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Takagi values are singular values, not the eigenvalues of the complex symmetric matrix.

</details>

<details>
<summary>Hint 2</summary>

The matrix has rank one and squared Frobenius norm four.

</details>

<details>
<summary>Worked solution</summary>

Complex symmetric congruence uses singular magnitudes even for a nilpotent-looking spectrum.

1. The determinant is zero but S is nonzero, so its rank is one and one singular value is zero.
2. The sum of squared singular values is the squared Frobenius norm, which is four because all four entries have modulus one.
3. The remaining singular value is two. Takagi factorization therefore has ordered nonnegative diagonal $[2,0]$, although the ordinary eigenvalues of S are both zero.

</details>
