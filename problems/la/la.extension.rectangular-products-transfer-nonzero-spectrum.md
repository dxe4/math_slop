# Transfer two nonzero eigenvalues to a larger product

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. Let $A$ be $2\times3$ and $B$ be $3\times2$, with $AB=\operatorname{diag}(2,3)$. Return the set of distinct eigenvalues of $BA$.

```answer
{"answer":{"kind":"set","expected":["0","2","3"],"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

An eigenvector $u$ of $AB$ for a nonzero eigenvalue gives a nonzero vector $Bu$.

</details>

<details>
<summary>Hint 2</summary>

The larger product has rank at most two and therefore has a nontrivial kernel.

</details>

<details>
<summary>Worked solution</summary>

Combine lifted eigenvectors with the rectangular rank deficit.

1. If $ABu=\lambda u$ with $\lambda=2$ or three, then $Bu\ne0$ and $BA(Bu)=\lambda Bu$, giving both nonzero eigenvalues.
2. The three-by-three product $BA$ has rank at most two, so zero is also an eigenvalue.
3. These three distinct eigenvalues already supply a basis of independent eigenvectors in dimension three, leaving no other eigenvalues.

</details>
