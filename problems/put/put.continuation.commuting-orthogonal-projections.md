# Commuting orthogonal projections

*Hard · [Original Putnam-style training](index.md)*

If real matrices $P,Q$ are symmetric idempotents and commute, prove $PQ$ is the orthogonal projection onto $\operatorname{im}P\cap\operatorname{im}Q$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Check symmetry and idempotence of $PQ$ using commutation.

</details>

<details>
<summary>Hint 2</summary>

Identify its image by applying both $P$ and $Q$.

</details>

<details>
<summary>Model proof</summary>

Conversely, if $w$ lies in both images, $Pw=Qw=w$, hence $PQw=w$; it belongs to the image of $PQ$. The images coincide.

1. Commutation and symmetry give $(PQ)^T=QP=PQ$; idempotence gives $(PQ)^2=P^2Q^2=PQ$. Thus $PQ$ is an orthogonal projection.
2. For any $v$, $P(PQv)=PQv$ and $Q(PQv)=PQv$, so $\operatorname{im}(PQ)$ lies in both images.
3. Conversely, if $w$ lies in both images, $Pw=Qw=w$, hence $PQw=w$; it belongs to the image of $PQ$. The images coincide.

**Self-assessment rubric**

- Check PQ is symmetric and idempotent using commutation.
- Show its image lies in both projection images.
- Show every vector in the intersection is fixed by PQ.

</details>
