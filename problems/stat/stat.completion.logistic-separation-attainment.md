# The exact separation boundary for logistic attainment

*Hard · [Statistics and probability](index.md)*

Let $p\ge1$ and let fixed rows $x_i^{\mathsf T}\in\mathbb R^p$ span $\mathbb R^p$, let $y_i\in\{0,1\}$, and put $z_i=(2y_i-1)x_i$. Prove that the logistic log likelihood $\ell(\beta)=-\sum_i\log(1+e^{-z_i^{\mathsf T}\beta})$ has a unique finite maximizer if and only if there is no nonzero $b$ with $z_i^{\mathsf T}b\ge0$ for every $i$. Treat directions with some zero inner products, as well as strict separation.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

For a separating direction, compare the loss along a ray starting at an arbitrary finite coefficient.

</details>

<details>
<summary>Hint 2</summary>

For the converse, use the unit sphere to obtain a uniform negative margin in at least one row, then establish coercivity.

</details>

<details>
<summary>Model proof</summary>

Absence of a recession direction forces coercivity, while full rank gives strict concavity.

1. Consider the negative log likelihood $L=-\ell$. If nonzero $b$ satisfies all the stated inequalities, at least one is strict because the rows span the space. For any finite $\beta$, moving to $\beta+tb$ strictly decreases at least one summand of $L$ and increases none. No finite point minimizes $L$. This includes quasi-separation, where the infimum need not be zero.
2. Conversely, assume no such direction exists. For every unit vector $u$, $f(u)=\max_i(-z_i^{\mathsf T}u)>0$. The function is continuous on the compact unit sphere, so $c=\min_{\|u\|=1}f(u)>0$.
3. For any nonzero $\beta$, at least one row has $-z_i^{\mathsf T}\beta\ge c\|\beta\|$. Since $\log(1+e^v)\ge\max(0,v)$, $L(\beta)\ge c\|\beta\|$. Thus the continuous loss is coercive and attains a finite minimum.
4. At every finite coefficient, its Hessian is $\sum_iw_i z_i z_i^{\mathsf T}$ with $w_i=e^{z_i^{\mathsf T}\beta}/(1+e^{z_i^{\mathsf T}\beta})^2>0$. Spanning makes this matrix positive definite, so the loss is strictly convex and its minimum is unique.

**Self-assessment rubric**

- Treat both strict and zero-margin separating rows correctly.
- Obtain a positive uniform margin from absence of separation.
- Prove finite attainment of the continuous loss.
- Use the positive Hessian to prove uniqueness.

</details>
