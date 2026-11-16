# Ceva barycentric concurrency

*Hard · [Original Putnam-style training](index.md)*

In triangle $ABC$, points $D\in BC$, $E\in CA$, $F\in AB$ are interior. Prove $AD,BE,CF$ are concurrent iff $(BD/DC)(CE/EA)(AF/FB)=1$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Give a point $P$ positive barycentric weights $(\alpha,\beta,\gamma)$ relative to $A,B,C$.

</details>

<details>
<summary>Hint 2</summary>

Read each side ratio from the corresponding zero-coordinate intersection.

</details>

<details>
<summary>Model proof</summary>

Conversely, given positive side ratios with product one, choose positive weights satisfying $\gamma/\beta=BD/DC$ and $\alpha/\gamma=CE/EA$. The product condition forces $\beta/\alpha=AF/FB$; the resulting barycentric point lies on all three cevians.

1. If the cevians meet at interior $P=(\alpha A+\beta B+\gamma C)/(\alpha+\beta+\gamma)$ with positive weights, then $D=(\beta B+\gamma C)/(\beta+\gamma)$, $E=(\gamma C+\alpha A)/(\gamma+\alpha)$, and $F=(\alpha A+\beta B)/(\alpha+\beta)$.
2. Affine segment ratios give $BD/DC=\gamma/\beta$, $CE/EA=\alpha/\gamma$, and $AF/FB=\beta/\alpha$. Their product is one.
3. Conversely, given positive side ratios with product one, choose positive weights satisfying $\gamma/\beta=BD/DC$ and $\alpha/\gamma=CE/EA$. The product condition forces $\beta/\alpha=AF/FB$; the resulting barycentric point lies on all three cevians.

**Self-assessment rubric**

- Express each cevian side intersection using positive barycentric weights.
- Derive all three directed side ratios and multiply to one.
- Construct positive weights from ratios satisfying the product condition.

</details>
