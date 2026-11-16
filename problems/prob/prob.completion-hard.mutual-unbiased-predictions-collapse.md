# Prove mutual unbiased predictions coincide without second moments

*Hard · [Probability problems](index.md)*

Let $X,Y$ be integrable $\mathbb R^d$-valued random vectors satisfying $E[Y\mid\sigma(X)]=X$ and $E[X\mid\sigma(Y)]=Y$. Prove $X=Y$ almost surely without assuming finite second moments. Also prove that the second conditional identity can be replaced by equality in distribution of $X$ and $Y$. Your argument must justify every expectation used for a strictly convex comparison.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

A squared norm may have infinite expectation. Seek a strictly convex function with linear growth and bounded gradient.

</details>

<details>
<summary>Hint 2</summary>

Use the nonnegative gap between that function and its tangent plane; conditional unbiasedness removes the linear term.

</details>

<details>
<summary>Model proof</summary>

A linear-growth strictly convex loss detects equality while remaining integrable.

1. Take $\phi(x)=\sqrt{1+\|x\|^2}$. It has linear growth and gradient $x/\sqrt{1+\|x\|^2}$ of norm at most one. Its Hessian is positive definite: for $v\ne0$, the numerator of $v^T\nabla^2\phi(x)v$ is $(1+\|x\|^2)\|v\|^2-(x\cdot v)^2>0$. Thus it is strictly convex.
2. The tangent gap $D=\phi(Y)-\phi(X)-\nabla\phi(X)\cdot(Y-X)$ is nonnegative and vanishes only when $X=Y$. Linear growth and the bounded gradient make all terms integrable. Conditioning the linear term on $X$ gives expectation zero, so $ED=E\phi(Y)-E\phi(X)\ge0$.
3. Applying the same argument in reverse using $E[X\mid Y]=Y$ gives $E\phi(X)\ge E\phi(Y)$. Thus $ED=0$, and the nonnegative strictly convex gap must vanish almost surely. This proves $X=Y$.
4. If instead $X,Y$ have the same law, integrability gives $E\phi(X)=E\phi(Y)$ immediately. The first tangent-gap argument again has $ED=0$, giving the same conclusion with only the first conditional identity.

**Self-assessment rubric**

- Exhibit a strictly convex linear-growth function and justify its needed properties.
- Prove the tangent gap is integrable and its linear term has mean zero.
- Obtain zero gap using either reverse prediction or equality of laws and conclude equality.

</details>
