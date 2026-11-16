# Variance inside a two-point cell

*Medium · [Probability problems](index.md)*

Given an observed positive-probability cell $C$, a variable $X$ takes $1$ and $5$ with conditional probability $1/2$ each. Find $\operatorname{Var}(X\mid C)$.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Checks the variance under the stated conditional two-point law only."}}
```

<details>
<summary>Hint 1</summary>

First find the mean within the observed cell.

</details>

<details>
<summary>Hint 2</summary>

Average the squared deviations under that same conditional law.

</details>

<details>
<summary>Worked solution</summary>

Use ordinary variance for the specified conditional distribution.

1. The conditional mean is $E[X\mid C]=(1+5)/2=3$.
2. The squared deviations are $(1-3)^2=4$ and $(5-3)^2=4$.
3. Their conditional weighted average is $(1/2)4+(1/2)4=4$. No unconditional law outside $C$ is needed for this calculation.

The cell mean is three and each squared deviation is four, giving conditional variance four.

</details>
