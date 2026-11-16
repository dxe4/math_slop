# Identify the cut hidden in repeated vertex switches

*Hard · [Original olympiad-style problems](index.md)*

All edges of $K_5$ initially have positive signs. A move selects a vertex and reverses every incident edge sign. What is the greatest attainable number of negative edges?

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact requested finite count, sharp bound or declared move vector only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Repeated switches at a vertex matter only modulo two.

</details>

<details>
<summary>Hint 2</summary>

Classify each edge by whether exactly one endpoint has been switched an odd number of times.

</details>

<details>
<summary>Worked solution</summary>

Vertex switching produces precisely the edge cut of the odd-switched vertex set.

1. Let S be the vertices switched an odd number of times. An edge is negative exactly when one endpoint lies in S and the other does not.
2. If \|S\|=s, the negative count is s(5-s), at most six for integer s between zero and five.
3. Switching exactly two vertices once makes the six cross edges negative and attains the bound.

</details>
