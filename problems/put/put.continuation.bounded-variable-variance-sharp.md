# Bounded variable variance sharp

*Hard · [Original Putnam-style training](index.md)*

If a real random variable $X$ is supported on $[a,b]$, prove $\operatorname{Var}X\le(b-a)^2/4$ and characterize equality for $a<b$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Expand the nonnegative product $(X-a)(b-X)$.

</details>

<details>
<summary>Hint 2</summary>

Express the resulting inequality using $\mu=EX$, then optimize a quadratic in $\mu$.

</details>

<details>
<summary>Model proof</summary>

Equality requires $(X-a)(b-X)=0$ almost surely and $\mu=(a+b)/2$, so $X$ places equal mass at $a$ and $b$; that law attains the bound.

1. Because $(X-a)(b-X)\ge0$, expectation gives $EX^2\le(a+b)\mu-ab$. Therefore $\operatorname{Var}X\le(\mu-a)(b-\mu)$.
2. The product is at most $[(b-a)/2]^2$ by completing the square in $\mu\in[a,b]$.
3. Equality requires $(X-a)(b-X)=0$ almost surely and $\mu=(a+b)/2$, so $X$ places equal mass at $a$ and $b$; that law attains the bound.

**Self-assessment rubric**

- Use nonnegativity of (X−a)(b−X) to bound the second moment.
- Optimize the induced variance bound over the mean in \[a,b\].
- Derive and verify the equal-mass endpoint equality law.

</details>
