# Construct an orthogonal change between nearby projection ranges

*Hard · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. Let $P,Q$ be real orthogonal projections with $\|P-Q\|_2<1$. Construct an orthogonal matrix $U$ with $UP=QU$ and prove it works, using a positive polar factor rather than choosing bases separately.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Try $S=QP+(I-Q)(I-P)$ and compare it with the identity.

</details>

<details>
<summary>Hint 2</summary>

Use the intertwining relation for $S$ to show its positive Gram matrix commutes with $P$.

</details>

<details>
<summary>Model proof</summary>

Normalize an invertible algebraic intertwiner by its positive polar factor.

1. Set $S=QP+(I-Q)(I-P)$. Then $SP=QS$, and $S-I=(Q-P)(2P-I)$. Since $2P-I$ is orthogonal, $\|S-I\|_2<1$, so the convergent Neumann series makes $S$ invertible.
2. Transposing the intertwining relation gives $PS^T=S^TQ$. Hence $S^TSP=S^TQS=PS^TS$, so the positive definite matrix $G=S^TS$ commutes with $P$.
3. Its positive inverse square root also commutes with $P$: the eigenspaces of $G$ are preserved by $P$, and the inverse square root is scalar on each of them.
4. Define $U=SG^{-1/2}$. Then $U^TU=I$, and $UP=SPG^{-1/2}=QSG^{-1/2}=QU$. This gives the required orthogonal intertwiner and, in particular, equal range dimensions.

**Self-assessment rubric**

- Verify the proposed S relation and prove its invertibility from the strict norm bound.
- Derive commutation of its positive Gram matrix with P.
- Justify that the inverse positive square root preserves the same commutation.
- Check both orthogonality and the final intertwining identity.

</details>
