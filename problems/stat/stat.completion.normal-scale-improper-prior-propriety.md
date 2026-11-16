# When a formal normal posterior can be normalized

*Hard · [Statistics and probability](index.md)*

For independent $N(\mu,\sigma^2)$ observations with $\mu\in\mathbb R$ and $\sigma>0$, use the improper prior density $\pi(\mu,\sigma)\propto1/\sigma$ with respect to $d\mu\,d\sigma$. Determine exactly which fixed datasets of size $n\ge1$ give a proper posterior. Prove necessity as well as sufficiency, including datasets with zero centered sum of squares.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Separate the location integral from the scale integral by completing the square around the sample mean.

</details>

<details>
<summary>Hint 2</summary>

Analyze both ends of the remaining scale integral; a positive residual sum of squares changes its behavior near zero.

</details>

<details>
<summary>Model proof</summary>

Normalizing the location coordinate leaves a scale integral with two distinct boundary conditions.

1. Put $S=\sum_i(x_i-\overline x)^2$. The unnormalized posterior is $\sigma^{-(n+1)}\exp\{-[S+n(\mu-\overline x)^2]/(2\sigma^2)\}$.
2. Integrating the nonnegative function over $\mu$ gives the positive constant $\sqrt{2\pi/n}$ times $\sigma^{-n}e^{-S/(2\sigma^2)}$. Thus propriety is equivalent to finiteness of its integral over $\sigma>0$.
3. At infinity, the exponential tends to one, so integrability requires and, at that end, is equivalent to $n>1$. If $S>0$, substituting $u=1/\sigma$ near zero gives a polynomial times a decaying Gaussian and the integral there is finite.
4. If $S=0$, the integrand is exactly $\sigma^{-n}$ and its integral near zero diverges for every integer $n\ge1$. Therefore propriety holds exactly when $n\ge2$ and $S>0$. A single observation always has $S=0$.
5. The prior itself has infinite mass. Calling the formal expression a posterior probability law is justified only after this normalization condition is met.

**Self-assessment rubric**

- Complete the square with the prior in the stated parameterization.
- Perform the location integration with the correct scale power.
- Analyze zero and infinity, including zero residual scatter.
- State the necessary and sufficient dataset condition.

</details>
