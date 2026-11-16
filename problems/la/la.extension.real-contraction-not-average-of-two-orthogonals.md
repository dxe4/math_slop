# Distinguish real and complex averages of isometries

*Hard · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. Prove $D=\operatorname{diag}(1/2,1)$ cannot be the average of two real $2\times2$ orthogonal matrices. Then realize the same D as the average of two complex unitary matrices.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Its action on $e_2$ is a unit vector equal to the average of two unit vectors.

</details>

<details>
<summary>Hint 2</summary>

Equality in that norm bound forces both real isometries to fix $e_2$; inspect their remaining one-dimensional action.

</details>

<details>
<summary>Model proof</summary>

A fixed extremal direction creates a real one-dimensional obstruction that complex phases avoid.

1. If $(Q+R)/2=D$, then $(Qe_2+Re_2)/2=e_2$ with both summands unit. Expanding the squared norm of their difference shows they must both equal $e_2$.
2. Real orthogonality then forces $Qe_1$ and $Re_1$ each to be either $e_1$ or $-e_1$. Their average coefficient can only be minus one, zero or one, never one half. This contradicts the action of $D$ on $e_1$.
3. Over the complex field choose $U=\operatorname{diag}(e^{i\pi/3},1)$ and $V=\operatorname{diag}(e^{-i\pi/3},1)$. Both are unitary and their average is $\operatorname{diag}(\cos(\pi/3),1)=D$.

**Self-assessment rubric**

- Show the two isometries must agree on the fixed unit output direction.
- Use the real one-dimensional orthogonal complement to obtain only two possible signs.
- Compare their possible averages with the required coefficient one half.
- Provide and verify a pair of unitary diagonal matrices attaining the complex average.

</details>
