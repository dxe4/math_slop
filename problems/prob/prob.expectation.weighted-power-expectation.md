# Average a polynomial statistic

*Medium · [Probability problems](index.md)*

A random variable $X$ takes values $0,1,2$ with probabilities $1/4,1/2,1/4$ respectively. Find $E[x^X]$ as a polynomial in the real variable $x$, with no excluded inputs.

```answer
{"answer":{"kind":"expression","expected":"(1+2*x+x^2)/4","domain":{"variable":"x","excluded":[]},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the expectation definition for the function of the random variable that appears in the question.

</details>

<details>
<summary>Hint 2</summary>

Each support value selects the exponent of one term.

</details>

<details>
<summary>Worked solution</summary>

Expectation can average a function of a random variable, not just the variable itself.

1. The three contributions are $(1/4)x^0$, $(1/2)x^1$ and $(1/4)x^2$.
2. Adding and using a common denominator gives $(1+2x+x^2)/4$.
3. This is a finite polynomial and therefore has no excluded real inputs.

</details>
