# The mean uniquely minimises square loss

*Medium · [Probability problems](index.md)*

For a real square-integrable random variable $X$, prove $\operatorname{Var}(X)=\inf_{a\in\mathbb R}E[(X-a)^2]$, with a unique minimising constant $a=E[X]$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Write $X-a=(X-E[X])+(E[X]-a)$.

</details>

<details>
<summary>Hint 2</summary>

Expand the square and use the zero mean of the centred variable. Identify exactly when the remaining deterministic square vanishes.

</details>

<details>
<summary>Model proof</summary>

A centred-square expansion isolates the cost of choosing the wrong constant.

1. Square integrability implies a finite mean $\mu=E[X]$ and finite $E[(X-a)^2]$ for every real $a$.
2. Expanding and taking expectations yields $E[(X-a)^2]=E[(X-\mu)^2]+2(\mu-a)E[X-\mu]+(\mu-a)^2=\operatorname{Var}(X)+(\mu-a)^2$.
3. The last term is nonnegative and is zero exactly when $a=\mu$. Therefore the infimum equals the variance, is attained at the mean, and has no other minimiser. This uniqueness remains true even if $X$ is almost surely constant.

The loss equals $\operatorname{Var}(X)+(E[X]-a)^2$, uniquely minimised at $a=E[X]$.

**Self-assessment rubric**

- Use square integrability to justify the mean and all expanded expectations.
- Derive the variance-plus-squared-bias decomposition with its zero cross term.
- Identify the nonnegative deterministic square and prove its unique zero gives the unique minimiser.

</details>
