# Vandermonde determinant

*Hard · [Original Putnam-style training](index.md)*

For pairwise distinct scalars $x_1,\ldots,x_n$, prove $\det[x_i^{j-1}]_{i,j=1}^n=\prod_{1\le i<j\le n}(x_j-x_i)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Treat the determinant as an alternating polynomial in the row variables.

</details>

<details>
<summary>Hint 2</summary>

Compare its total degree and leading coefficient with the product of pairwise differences.

</details>

<details>
<summary>Model proof</summary>

The coefficient of $x_1^0x_2^1\cdots x_n^{n-1}$ in the determinant is $1$ from the identity permutation, and the product has the same coefficient; hence the constant is one.

1. Swapping two $x_i$ swaps two rows, so the determinant is alternating; setting $x_i=x_j$ makes two rows equal. Thus every factor $x_j-x_i$ divides it.
2. Both determinant and product have total degree $n(n-1)/2$, so the quotient is a constant.
3. The coefficient of $x_1^0x_2^1\cdots x_n^{n-1}$ in the determinant is $1$ from the identity permutation, and the product has the same coefficient; hence the constant is one.

**Self-assessment rubric**

- Show all pairwise differences divide the alternating determinant.
- Compare total degrees to reduce to a constant factor.
- Identify a monomial coefficient to show the constant is one.

</details>
