# Characterize positive entrywise multipliers and strict Schur products

*Hard · [Linear algebra problems](index.md)*

For a complex n-by-n matrix A define $M_A(X)=A\circ X$ entrywise. Prove positivity of this map is equivalent to complete positivity and to $A\ge0$. Find its minimal Kraus count. If $A>0$ and $B\ge0$, prove $A\circ B>0$ exactly when every diagonal entry of B is positive. Preparation: Kraus/Choi theory and quadratic-form order.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict, demonstration or checkpoint evidence is awarded."}}
```

<details>
<summary>Hint 1</summary>

Apply the positive map to the all-ones rank-one matrix for necessity.

</details>

<details>
<summary>Hint 2</summary>

Factor A as a sum of vector outer products and use diagonal matrices as Kraus operators; for strictness compare A with a positive scalar identity.

</details>

<details>
<summary>Model proof</summary>

A structured tensor embedding makes positivity and complete positivity coincide in this family.

1. If $M_A$ is positive, apply it to the all-ones matrix $\mathbf1\mathbf1^*$ to obtain A itself, proving $A\ge0$.
2. Conversely write $A=\sum_a v_av_a^*$ and set $D_a=\operatorname{diag}(v_a)$. Then $A\circ X=\sum_aD_aXD_a^*$, a Kraus formula, proving complete positivity and hence positivity.
3. The Choi matrix is $\sum_{i,j}a_{ij}E_{ij}\otimes E_{ij}=WAW^*$ for the isometry $We_i=e_i\otimes e_i$. Its rank is exactly rank A, so the minimal Kraus count is rank A.
4. For $A>0$ choose $\lambda>0$ with $A\ge\lambda I$. Schur positivity applied to $(A-\lambda I)$ and B gives $A\circ B\ge\lambda\operatorname{diag}(b_{11},\ldots,b_{nn})$. Positive diagonal entries make this positive definite. Conversely positive definiteness of the product forces each diagonal $a_{ii}b_{ii}>0$; since $a_{ii}>0$, every $b_{ii}$ must be positive.

**Self-assessment rubric**

- Use the correct positive rank-one input to force coefficient positivity.
- Construct and verify the diagonal Kraus representation.
- Identify the isometric Choi embedding and deduce its rank.
- Prove both directions of the positive-diagonal criterion using order and diagonal necessity.

</details>
