# Cyclic permutation eigenvectors

*Hard · [Original Putnam-style training](index.md)*

For the cyclic shift $C$ on $\mathbb C^n$, $C(x_0,\ldots,x_{n-1})=(x_{n-1},x_0,\ldots,x_{n-2})$, prove its eigenvalues are exactly the $n$th roots of unity, each once.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Use $C^n=I$ for a necessary eigenvalue condition.

</details>

<details>
<summary>Hint 2</summary>

Construct one eigenvector for each $n$th root.

</details>

<details>
<summary>Model proof</summary>

The $n$ roots are distinct and eigenvectors for distinct eigenvalues are linearly independent, filling the $n$-dimensional space. Thus each has multiplicity one.

1. If $Cv=\lambda v$ and $v\ne0$, $C^n=I$ gives $\lambda^n=1$.
2. For any $\lambda$ with $\lambda^n=1$, set $v=(1,\lambda^{-1},\ldots,\lambda^{-(n-1)})$; coordinate comparison shows $Cv=\lambda v$.
3. The $n$ roots are distinct and eigenvectors for distinct eigenvalues are linearly independent, filling the $n$-dimensional space. Thus each has multiplicity one.

**Self-assessment rubric**

- Use Cⁿ=I to restrict eigenvalues to nth roots of unity.
- Construct and verify an eigenvector for each root.
- Use distinct eigenvalues and dimension to establish the complete simple spectrum.

</details>
