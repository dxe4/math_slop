# Hide continuous dependence from every conditional first moment

*Hard · [Probability problems](index.md)*

Construct an explicit polynomial density $f(x,y)$, strictly positive on $[0,1]^2$, such that $X$ and $Y$ both have uniform marginals, $E[Y\mid X]=1/2$ almost surely, but $X$ and $Y$ are not independent. Prove all four claims; a singular or discrete construction is not allowed.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Perturb the independent density by a product of two zero-integral functions.

</details>

<details>
<summary>Hint 2</summary>

The factor in $y$ must also have zero first moment; use a low-degree polynomial and bound the perturbation before normalising.

</details>

<details>
<summary>Model proof</summary>

An orthogonal polynomial perturbation can change a conditional second moment while leaving its first moment invisible.

1. Take $h(x)=2x-1$, $g(y)=6y^2-6y+1$, and $f(x,y)=1+\tfrac12h(x)g(y)$ on the square, zero outside.
2. We have $\int h=0$, $\int g=0$, $\int yg(y)\,dy=0$, and $|h|\le1$, $|g|\le1$. Thus $f\ge1/2$, and integrating either coordinate gives the constant density $1$. This proves positivity, normalisation and both uniform marginals.
3. The conditional density of $Y$ given $X=x$ is $f(x,\cdot)$ because the $X$ marginal is $1$. Its first moment is $1/2$ by the vanishing integral of $yg$.
4. But $\int_0^1y^2g(y)\,dy=1/30$, so $E[Y^2\mid X=x]=1/3+(2x-1)/60$, a nonconstant function on a set of positive measure. Independence would make that conditional second moment constant, proving dependence.

**Self-assessment rubric**

- Give a polynomial density with a justified strict positive lower bound and total integral one.
- Verify both marginal densities by integration.
- Derive the constant conditional first moment from the conditional density.
- Exhibit a nonconstant conditional statistic or another rigorous witness of dependence.

</details>
