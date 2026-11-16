# Condition a generating polynomial

*Medium · [Probability problems](index.md)*

A random variable $X$ is uniform on $\{0,1,2,3\}$. Find the polynomial $E[x^X\mid X\text{ is even}]$. It is a polynomial in the real variable $x$ with no excluded inputs.

```answer
{"answer":{"kind":"expression","expected":"(1+x^2)/2","domain":{"variable":"x","excluded":[]},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Determine the conditional distribution before computing the polynomial.

</details>

<details>
<summary>Hint 2</summary>

The conditioning keeps only even support values, with probabilities renormalized to sum to one.

</details>

<details>
<summary>Worked solution</summary>

Form the generating polynomial from the conditional mass function.

1. The observed event retains $X=0$ and $X=2$, each with conditional probability $1/2$.
2. The conditional expectation is therefore $(1/2)x^0+(1/2)x^2$.
3. The requested polynomial is $(1+x^2)/2$, defined at every real input.

</details>
