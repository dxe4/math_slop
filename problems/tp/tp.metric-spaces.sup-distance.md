# Compute a maximum-coordinate distance

*Easy · [Topology problems](index.md)*

In $\mathbb R^2$ with metric $d_\infty((x_1,x_2),(y_1,y_2))=\max(|x_1-y_1|,|x_2-y_2|)$, find the distance between $(1,-2)$ and $(4,2)$.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Compute the absolute differences separately.

</details>

<details>
<summary>Hint 2</summary>

This metric takes the maximum, not the Euclidean square root or sum.

</details>

<details>
<summary>Worked solution</summary>

Use the metric stated in the problem.

1. The coordinate differences have absolute values $|1-4|=3$ and $|-2-2|=4$.
2. The specified distance is their maximum.
3. Therefore the distance is $4$.

</details>
