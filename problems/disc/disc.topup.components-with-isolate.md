# Include an isolated vertex in the component partition

*Medium · [Discrete mathematics](index.md)*

An undirected graph has vertex set $\{A,B,C,D,E,F\}$ and edges AB,BC,CA,DE. How many connected components does it have?

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Exact requested finite observation or declared representation only. The worked explanation is not automatically certified; no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

Connectivity groups vertices connected by a path.

</details>

<details>
<summary>Hint 2</summary>

A vertex with no incident edge still forms a component.

</details>

<details>
<summary>Worked solution</summary>

The declared vertex set includes components not represented by any edge.

1. A,B,C form one connected triangle component.
2. D,E form a second component, and F is isolated and forms a third.
3. The component count is $3$.

</details>
