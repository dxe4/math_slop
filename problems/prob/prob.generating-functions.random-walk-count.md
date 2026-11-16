# Generate a transformed random-walk endpoint

*Medium · [Probability problems](index.md)*

A walk starts at $0$ and makes three independent steps, each $+1$ or $-1$ with probability $1/2$. Let its endpoint be $S$ and put $X=(S+3)/2$. Find the polynomial $E[x^X]$, with no excluded real inputs.

```answer
{"answer":{"kind":"expression","expected":"(1+3*x+3*x^2+x^3)/8","domain":{"variable":"x","excluded":[]},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Relate the transformed endpoint to the number of positive steps.

</details>

<details>
<summary>Hint 2</summary>

Each step contributes either no increase or one increase to that count.

</details>

<details>
<summary>Worked solution</summary>

The affine endpoint transformation recovers a binomial count.

1. If there are $H$ positive steps, then $S=H-(3-H)=2H-3$, so $X=H$.
2. The three independent fair indicators give generating polynomial $((1+x)/2)^3$.
3. Expanding yields $(1+3x+3x^2+x^3)/8$.

</details>
