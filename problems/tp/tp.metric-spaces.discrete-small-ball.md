# A small ball in a discrete metric

*Easy · [Topology problems](index.md)*

On $X=\{0,1,2\}$ use the discrete metric, equal to $0$ on equal points and $1$ on different points. Find $B(0,1/2)$.

```answer
{"answer":{"kind":"set","expected":[0],"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Check the distance from the center to itself and to each other point.

</details>

<details>
<summary>Hint 2</summary>

Only distances strictly less than the radius are allowed.

</details>

<details>
<summary>Worked solution</summary>

A radius below one isolates its center in the discrete metric.

1. The center has distance zero, which is less than $1/2$.
2. The other two points have distance one, exceeding the radius.
3. The ball is $\{0\}$.

</details>
