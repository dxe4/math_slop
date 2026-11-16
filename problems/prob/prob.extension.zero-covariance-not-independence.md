# Uncorrelated but dependent

*Medium · [Probability problems](index.md)*

Let $X$ be uniform on $\{-1,0,1\}$ and set $Y=X^2$. Prove $\operatorname{Cov}(X,Y)=0$ but $X,Y$ are dependent.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Use symmetry to compute $E[X]$ and $E[XY]=E[X^3]$.

</details>

<details>
<summary>Hint 2</summary>

Compare the joint probability of both variables being zero with the product of those two zero-event probabilities.

</details>

<details>
<summary>Model proof</summary>

Moment cancellation does not force the joint law to factor.

1. The three equally likely values give $E[X]=(-1+0+1)/3=0$, $E[Y]=2/3$, and $E[XY]=E[X^3]=(-1+0+1)/3=0$.
2. All variables are bounded, so covariance is defined and equals $E[XY]-E[X]E[Y]=0-0(2/3)=0$.
3. However $Y=0$ exactly when $X=0$. Thus $P(X=0,Y=0)=1/3$, whereas $P(X=0)P(Y=0)=1/9$. The failed event factorisation proves dependence despite zero covariance.

Symmetry makes covariance zero, but the joint zero-event mass $1/3$ differs from its marginal product $1/9$.

**Self-assessment rubric**

- Compute the first and mixed moments from the three-point law.
- Apply the covariance identity to establish zero covariance.
- Exhibit an explicit pair of variable events whose joint probability differs from the marginal product.

</details>
