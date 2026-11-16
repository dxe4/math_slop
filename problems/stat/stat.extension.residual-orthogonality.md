# Residual orthogonality

*Medium · [Statistics and probability](index.md)*

Let $X\in\mathbb R^{n\times p}$ have full column rank and $y\in\mathbb R^n$. Let $\widehat\beta$ minimize $\|y-Xb\|_2^2$ over $b\in\mathbb R^p$. Prove $X^{\mathsf T}(y-X\widehat\beta)=0$, and deduce that residuals sum to zero when an intercept column is present.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Expand the objective as a quadratic in the unconstrained coefficient vector.

</details>

<details>
<summary>Hint 2</summary>

Differentiate with respect to the coefficients; then interpret the equation corresponding to an all-ones design column.

</details>

<details>
<summary>Model proof</summary>

The first-order equation makes the residual orthogonal to every design column.

1. The objective is $f(b)=y^{\mathsf T}y-2b^{\mathsf T}X^{\mathsf T}y+b^{\mathsf T}X^{\mathsf T}Xb$, with gradient $\nabla f(b)=-2X^{\mathsf T}y+2X^{\mathsf T}Xb$.
2. Full column rank makes $X^{\mathsf T}X$ positive definite: for nonzero $v$, $v^{\mathsf T}X^{\mathsf T}Xv=\|Xv\|^2>0$. Thus the unique unconstrained minimum exists and equals $(X^{\mathsf T}X)^{-1}X^{\mathsf T}y$.
3. Its gradient vanishes, so with $e=y-X\widehat\beta$ we have $X^{\mathsf T}e=0$. Each column is therefore orthogonal to the residual.
4. If one column is $\mathbf1$, the corresponding equation is $\mathbf1^{\mathsf T}e=\sum_i e_i=0$. No stochastic error assumption is needed.

**Self-assessment rubric**

- Derive the gradient of the unconstrained quadratic.
- Explain existence and uniqueness from the positive-definite Gram matrix.
- Use the all-ones column to obtain the residual sum.

</details>
