# Include the unbounded face when counting dual vertices

*Easy · [Computational arithmetic problems](index.md)*

A connected plane graph has $8$ vertices and 12 edges. Use V-E+F=2. Its full plane dual has one vertex per face, including the unbounded face. Find the dual vertex count.

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Solve Euler for F rather than for E.

</details>

<details>
<summary>Hint 2</summary>

The plane dual uses all faces under the stated convention.

</details>

<details>
<summary>Worked solution</summary>

Dual vertices correspond to a face count governed by the embedding.

1. Euler gives F=2-V+E.
2. With the supplied counts this is two minus eight plus twelve, or six.
3. The full dual therefore has six vertices.

</details>
