# Trap an integer quadratic between neighboring squares

*Medium · [Original olympiad-style problems](index.md)*

Find all integers $n$ for which $n^2+n+1$ is a perfect square. Enter the finite set.

```answer
{"answer":{"kind":"set","expected":["-1","0"],"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The expression is unchanged under $n\mapsto-n-1$.

</details>

<details>
<summary>Hint 2</summary>

For $n\ge1$, compare it with $n^2$ and $(n+1)^2$.

</details>

<details>
<summary>Worked solution</summary>

Use an integer gap and a symmetry to cover every sign.

1. For $n\ge1$, $n^2<n^2+n+1<(n+1)^2$, since $n+1<2n+1$. No square lies strictly between consecutive squares.
2. The cases $n=0,-1$ each give one, which is a square.
3. Every $n\le-2$ transforms to a positive integer by $-n-1$, preserving the expression. Thus no additional values work.

</details>
