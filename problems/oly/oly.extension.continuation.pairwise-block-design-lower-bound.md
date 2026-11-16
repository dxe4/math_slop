# At least as many blocks as points

*Hard · [Original olympiad-style problems](index.md)*

A finite set has $n\ge3$ points and $m$ blocks, each a subset of size between $2$ and $n-1$. Every pair of distinct points belongs to exactly one block. Prove $m\ge n$. You may use elementary real matrix rank facts, but must justify the needed positive definiteness.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Let $A$ be the point-by-block zero-one incidence matrix. Its row inner products are one off the diagonal.

</details>

<details>
<summary>Hint 2</summary>

Every point lies in at least two blocks. Thus $AA^T=J+\operatorname{diag}(r_i-1)$ is positive definite.

</details>

<details>
<summary>Model proof</summary>

The pair condition makes a Gram matrix whose rank cannot fit into fewer columns than points.

1. Let $r_i$ count blocks containing point $i$. If $r_i=1$, its unique block must contain every other point to cover all pairs with $i$, contradicting the maximum block size $n-1$. Hence $r_i\ge2$.
2. For incidence matrix $A$ of size $n\times m$, the diagonal entry of $AA^T$ is $r_i$ and every off-diagonal entry is one by the unique-pair hypothesis. Therefore $AA^T=J+\operatorname{diag}(r_i-1)$.
3. For any nonzero real vector $x$, $x^TAA^Tx=(\sum x_i)^2+\sum(r_i-1)x_i^2>0$, since each coefficient in the latter sum is at least one. Thus $AA^T$ has zero kernel and rank $n$.
4. But $\operatorname{rank}(AA^T)\le\operatorname{rank}(A)\le m$. Consequently $n\le m$. The argument depends on excluding a full-set block, which would give a one-block counterexample.

**Self-assessment rubric**

- Show every point lies in at least two blocks using the forbidden full block.
- Compute all diagonal and off-diagonal entries.
- Evaluate the quadratic form and prove strict positivity.
- Infer n at most m from the actual matrix dimensions.

</details>
