# Recognize compact real subsets

*Medium · [Topology problems](index.md)*

In the usual real line, which of these sets are compact? $K_1=[0,1]$, $K_2=(0,1)$, $K_3=\mathbb Z$, $K_4=\{0\}\cup\{1/n:n\ge1\}$. Enter the corresponding indices.

```answer
{"answer":{"kind":"set","expected":[1,4],"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

For subsets of the usual real line, compactness is equivalent to being closed and bounded.

</details>

<details>
<summary>Hint 2</summary>

Check whether each reciprocal-sequence accumulation point has been included.

</details>

<details>
<summary>Worked solution</summary>

Use the closed-and-bounded characterization with the specified ambient topology.

1. $K_1$ is closed and bounded. $K_2$ omits its endpoint limits, so it is not closed; $K_3$ is unbounded.
2. $K_4$ is bounded and contains its only accumulation point $0$, so it is closed.
3. Exactly $K_1,K_4$ are compact, giving $\{1,4\}$.

</details>
