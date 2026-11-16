# Turn a cube sum into a square

*Easy · [Computational arithmetic problems](index.md)*

Compute $\sum_{k=1}^{100}k^3$ exactly.

```answer
{"answer":{"kind":"integer","expected":"25502500","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

The sum of the first $n$ cubes is the square of a familiar arithmetic sum.

</details>

<details>
<summary>Hint 2</summary>

Compute the inner sum before squaring.

</details>

<details>
<summary>Worked solution</summary>

The cubic sum identity reduces the problem to a triangular number.

1. The identity is $\sum_{k=1}^n k^3=[n(n+1)/2]^2$.
2. Here the triangular number is $100\cdot101/2=5050$.
3. Squaring gives $5050^2=25502500$.

</details>
