# Sylvester rank inequality

*Hard · [Original Putnam-style training](index.md)*

For $A\in\mathbb F^{m\times n}$ and $B\in\mathbb F^{n\times p}$, prove $\operatorname{rank}(AB)\ge\operatorname{rank}A+\operatorname{rank}B-n$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Restrict $A$ to the image of $B$.

</details>

<details>
<summary>Hint 2</summary>

The kernel of that restriction is contained in $\ker A$.

</details>

<details>
<summary>Model proof</summary>

As $\dim\ker A=n-\operatorname{rank}A$, the required inequality follows.

1. Let $W=\operatorname{im}B$, so $\dim W=\operatorname{rank}B$ and $\operatorname{im}(AB)=A(W)$.
2. Rank-nullity for $A|_W$ gives $\operatorname{rank}(AB)=\dim W-\dim(W\cap\ker A)\ge\operatorname{rank}B-\dim\ker A$.
3. As $\dim\ker A=n-\operatorname{rank}A$, the required inequality follows.

**Self-assessment rubric**

- Identify im(AB) with A applied to im(B).
- Apply rank-nullity to A restricted to im(B).
- Bound the intersection kernel and obtain the rank inequality.

</details>
