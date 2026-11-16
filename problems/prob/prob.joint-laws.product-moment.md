# Average a product under a nonrectangular law

*Medium · [Probability problems](index.md)*

The pair $(X,Y)$ is uniform on $\{(0,0),(0,1),(1,1)\}$. Find $E[XY]$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the stated joint support rather than assuming independence.

</details>

<details>
<summary>Hint 2</summary>

Compute the product at each possible pair.

</details>

<details>
<summary>Worked solution</summary>

Joint expectation weights the function value at each support pair.

1. At the three support pairs, the products are $0,0,1$.
2. Each pair has probability $1/3$.
3. The expected product is $(0+0+1)/3=1/3$.

</details>
