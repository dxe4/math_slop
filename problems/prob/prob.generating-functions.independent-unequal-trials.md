# Generate a sum of unequal Bernoulli trials

*Medium · [Probability problems](index.md)*

Independent indicators $U,V$ have success probabilities $1/2$ and $1/3$. Find the polynomial $E[x^{U+V}]$, with no excluded real inputs.

```answer
{"answer":{"kind":"expression","expected":"(2+3*x+x^2)/6","domain":{"variable":"x","excluded":[]},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Independence separates the expectation of the product of the two powers.

</details>

<details>
<summary>Hint 2</summary>

Write one generating polynomial for each indicator before multiplying.

</details>

<details>
<summary>Worked solution</summary>

Independent sums multiply their probability generating polynomials.

1. The individual polynomials are $(1+x)/2$ and $(2+x)/3$.
2. Since $x^{U+V}=x^Ux^V$ and the variables are independent, the required polynomial is their product.
3. Expanding gives $(2+3x+x^2)/6$, valid for every real input.

</details>
