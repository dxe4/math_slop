# Count face incidences with every edge counted twice

*Easy · [Computational arithmetic problems](index.md)*

A connected plane graph has $20$ vertices, all degree three, and all face boundary lengths five. Each edge is counted twice among face boundaries. Find its number of faces.

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Use the handshake identity to find the edge count.

</details>

<details>
<summary>Hint 2</summary>

Then apply the stated face-incidence multiplicity.

</details>

<details>
<summary>Worked solution</summary>

Vertex and face incidences count the same edges with different multiplicities.

1. The total degree is sixty, so there are thirty edges.
2. The sum of face boundary lengths is twice thirty, or sixty.
3. With length five per face, there are twelve faces, agreeing with Euler count 20-30+12=2.

</details>
