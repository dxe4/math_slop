# Use the coordinatewise maximum metric

*Easy · [Real analysis](index.md)*

In R^3 use $d_\infty(x,y)=\max_j|x_j-y_j|$. Find the distance between (1,-2,4) and (-1,1,0).

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact requested metric observation or finite covering count only; no completeness proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Compute each coordinate difference first.

</details>

<details>
<summary>Hint 2</summary>

The metric takes the largest absolute difference, not their sum.

</details>

<details>
<summary>Worked solution</summary>

Different norms combine the same coordinate differences differently.

1. The coordinate differences are 2,-3,4.
2. Their absolute values are 2,3,4.
3. The maximum is four, so the distance is four.

</details>
