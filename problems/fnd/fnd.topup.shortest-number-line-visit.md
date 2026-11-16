# Choose the shorter order for a signed route

*Hard · [Foundations bridge](index.md)*

A robot starts at coordinate $-2$ on a number line. It must visit both $-7$ and $5$ and finish at $0$. Each unit move costs one step. What is the smallest possible number of steps?

```answer
{"answer":{"kind":"integer","expected":"22","checker_scope":"Exact requested bounded result only. The worked reasoning is not automatically certified, and this draft adds no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

There are two possible orders for the first visits to the required points.

</details>

<details>
<summary>Hint 2</summary>

For each order, add the nonnegative distances between successive required coordinates. Extra backtracking cannot shorten that order.

</details>

<details>
<summary>Worked solution</summary>

Comparing both visit orders gives an exhaustive shortest-route argument.

1. Visiting -7 first gives distances $5$, $12$ and $5$, totaling $22$.
2. Visiting 5 first gives distances $7$, $12$ and $7$, totaling $26$. Any route with the same first-visit order is at least its direct-distance total.
3. The direct route $-2\to-7\to5\to0$ attains $22$, so this is the minimum.

</details>
