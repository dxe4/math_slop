# Prove every matrix is similar to its transpose over its own field

*Hard · [Linear algebra problems](index.md)*

For a square matrix A over any field F, prove A is similar over F to $A^T$. Preparation: rational canonical form. Construct the nondegenerate pairing on each cyclic block rather than relying on complex Jordan form.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For a monic polynomial d of degree r, use the coefficient of $t^{r-1}$ in a product modulo d.

</details>

<details>
<summary>Hint 2</summary>

Multiplication by t is self-adjoint for this bilinear pairing; use the Gram matrix to obtain the block similarity.

</details>

<details>
<summary>Model proof</summary>

A cyclic quotient has an explicit symmetric Frobenius pairing.

1. On $F[t]/(d)$ define $B(f,g)$ to be the coefficient of $t^{r-1}$ in the reduced product fg. It is symmetric and bilinear. If nonzero f has degree k and leading coefficient a, choose $g=t^{r-1-k}$; no reduction is needed and $B(f,g)=a\ne0$. Thus the pairing is nondegenerate.
2. Associativity of quotient multiplication gives $B(tf,g)=B(f,tg)$. If C is the multiplication-by-t matrix and G the invertible Gram matrix, this is $C^TG=GC$, so $C^T=GCG^{-1}$.
3. Apply the construction to every companion block of a rational canonical form. The block transpose is similar to the original block matrix. Transporting through the original basis change proves that $A^T$ is similar to A over F, with no restriction on splitting or characteristic.

**Self-assessment rubric**

- Define the pairing and prove symmetry and bilinearity in the quotient.
- Detect every nonzero polynomial class with a suitable degree-complementary monomial.
- Derive the Gram matrix intertwining identity for multiplication by t.
- Combine cyclic blocks and basis changes over the original field.

</details>
