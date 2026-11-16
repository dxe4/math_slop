# Prove the exact reflection length of an orthogonal map

*Hard · [Linear algebra problems](index.md)*

For a real orthogonal matrix Q, prove the smallest number of Euclidean hyperplane reflections whose product is Q equals $\operatorname{rank}(I-Q)$. The identity uses zero reflections. Construct a product attaining the bound.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Rank subadditivity bounds the rank of I minus a product by the sum for its factors.

</details>

<details>
<summary>Hint 2</summary>

For a nonfixed vector v reflect Qv to v with normal Qv-v, and prove this reflection preserves every previously fixed vector.

</details>

<details>
<summary>Model proof</summary>

A reflection can remove exactly one nonfixed direction while retaining the fixed space.

1. A hyperplane reflection R has $\operatorname{rank}(I-R)=1$. The identity $I-XY=(I-X)+X(I-Y)$ gives the rank bound for a product, so any t reflections require $t\ge\operatorname{rank}(I-Q)$.
2. Let $m=\operatorname{rank}(I-Q)>0$, choose v outside the fixed space F and put $w=Qv-v\ne0$. Equality of the two vector lengths gives $2\langle Qv,w\rangle=\|w\|^2$, so reflection $R_w$ sends Qv to v.
3. For f fixed by Q, $\langle w,f\rangle=\langle v,Q^Tf\rangle-\langle v,f\rangle=0$. Thus the reflection fixes F and $R_wQ$ fixes both F and v, giving rank at most $m-1$ for its deviation from I.
4. The same product rank inequality gives $m\le1+\operatorname{rank}(I-R_wQ)$, so the decrease is exactly one. Induct on m to express $R_wQ$ by $m-1$ reflections; multiplication by $R_w$ produces m for Q. Together with the lower bound this proves optimality.

**Self-assessment rubric**

- Prove the product rank inequality and its reflection consequence.
- Construct the normal and verify the new fixed vector.
- Show the reflection retains every old fixed vector.
- Prove the rank drops exactly one and complete the optimal factorization.

</details>
