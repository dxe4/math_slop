# Eliminate a primitive seventh root through its inverse pair

*Medium · [Abstract algebra problems](index.md)*

Let $\zeta$ be a primitive seventh root of unity and $\alpha=\zeta+\zeta^{-1}$. Find the monic minimal polynomial of $\alpha$ over $\mathbf Q$, returning its coefficients in increasing powers.

```answer
{"answer":{"kind":"vector","expected":["-1","-2","1","1"],"checker_scope":"Only the requested exact invariant is checked; no written proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Divide $1+zeta+cdots+zeta^6=0$ by $zeta^3$ and pair inverse powers.

</details>

<details>
<summary>Hint 2</summary>

Express $zeta^2+zeta^{-2}$ and $zeta^3+zeta^{-3}$ in terms of $alpha$; then establish the degree.

</details>

<details>
<summary>Worked solution</summary>

Inverse pairs produce a real cubic, and the cyclotomic degree rules out a smaller one.

1. The paired relation is $1+\alpha+(\alpha^2-2)+(\alpha^3-3\alpha)=0$.
2. Thus $\alpha^3+\alpha^2-2\alpha-1=0$.
3. The field $\mathbf Q(\zeta)$ has degree $6$ and $\zeta$ solves $X^2-\alpha X+1$ over $\mathbf Q(\alpha)$. Since $\alpha$ is real and $\zeta$ is not, that relative degree is $2$, so $\alpha$ has degree $3$.

</details>
