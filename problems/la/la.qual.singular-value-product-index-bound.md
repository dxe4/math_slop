# Prove a singular-value product inequality by codimension

*Hard · [Linear algebra problems](index.md)*

For real square A,B and indices i,j with $i+j-1\le n$, prove $\sigma_{i+j-1}(AB)\le\sigma_i(A)\sigma_j(B)$, with singular values nonincreasing. Preparation: the singular-value min-max principle. Include rank-deficient matrices.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Choose trailing right-singular subspaces on which the individual operator bounds hold.

</details>

<details>
<summary>Hint 2</summary>

Intersect the subspace for B with the inverse image under B of the subspace for A, and count codimensions.

</details>

<details>
<summary>Model proof</summary>

A product is controlled on a sufficiently large common input subspace.

1. Choose E of codimension $i-1$ where $\|Ay\|\le\sigma_i(A)\|y\|$, and F of codimension $j-1$ where $\|Bx\|\le\sigma_j(B)\|x\|$. The SVD gives such subspaces even at zero singular values.
2. The preimage $B^{-1}E$ has codimension at most $i-1$, since the map into the quotient by E has rank at most that quotient dimension. Thus $L=F\cap B^{-1}E$ has codimension at most $i+j-2$.
3. On L the two bounds combine to $\|ABx\|\le\sigma_i(A)\sigma_j(B)\|x\|$. If necessary restrict further to the exact codimension $i+j-2$, permitted by the index hypothesis.
4. The min-max characterization on such subspaces gives the required bound for the indexed singular value of the product. No inverse of A or B was used, so singular cases are included.

**Self-assessment rubric**

- Choose the right trailing subspaces with their exact norm bounds.
- Prove the preimage and intersection codimension estimates without invertibility.
- Apply the two estimates in the correct operator order.
- Use the index hypothesis and min-max principle with the correct singular-value number.

</details>
