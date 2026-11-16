# Components of a closed oscillating graph

*Hard · [Topology problems](index.md)*

Let $S=\{(x,\sin(1/x)):0<x\le1\}\subseteq\mathbb R^2$ and let $T=\overline S$ in the usual plane. How many connected components does $T$ have?

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

View the graph as an image of a connected parameter interval.

</details>

<details>
<summary>Hint 2</summary>

Taking a closure preserves connectedness, even though it may add many points.

</details>

<details>
<summary>Worked solution</summary>

Connectedness survives both continuous parameterization and closure.

1. The interval $(0,1]$ is connected, and $x\mapsto(x,\sin(1/x))$ is continuous on that domain.
2. Thus its image $S$ is connected. The closure of a connected set is connected, so $T$ is connected as well.
3. It is nonempty, and hence has exactly $1$ connected component. No assertion of path connectedness is needed.

</details>
