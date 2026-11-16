# Invert an image-vector permutation

*Easy · [Abstract algebra problems](index.md)*

A permutation of $\{1,2,3,4\}$ has image vector $[2,4,1,3]$. Find the image vector of its inverse.

```answer
{"answer":{"kind":"vector","expected":[3,1,4,2],"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The inverse sends each output back to its original input.

</details>

<details>
<summary>Hint 2</summary>

Locate the position where each desired output appears in the original vector.

</details>

<details>
<summary>Worked solution</summary>

Reverse the four input-output assignments.

1. The original map sends $1\mapsto2$, $2\mapsto4$, $3\mapsto1$ and $4\mapsto3$.
2. The inverse therefore sends $1\mapsto3$, $2\mapsto1$, $3\mapsto4$ and $4\mapsto2$.
3. Its image vector is $[3,1,4,2]$.

</details>
