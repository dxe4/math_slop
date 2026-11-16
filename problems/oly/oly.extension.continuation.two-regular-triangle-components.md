# Maximize triangle components under a fixed component count

*Medium · [Original olympiad-style problems](index.md)*

A simple graph on $12$ vertices is $2$-regular and has exactly three connected components. What is the maximum number of its components that can be triangles?

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

A finite connected two-regular simple graph is a cycle of length at least three.

</details>

<details>
<summary>Hint 2</summary>

Three triangle components would use only nine vertices, while two leave a feasible cycle.

</details>

<details>
<summary>Worked solution</summary>

Use the exact component structure and attain the count.

1. Every component is a simple cycle, so a triangle component uses exactly three vertices.
2. All three components cannot be triangles because that would account for only nine rather than twelve vertices.
3. Two triangles and a six-cycle satisfy every condition, attaining two.

</details>
