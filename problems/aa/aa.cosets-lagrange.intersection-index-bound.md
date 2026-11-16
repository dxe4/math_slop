# Maximize an intersection index

*Hard · [Abstract algebra problems](index.md)*

Suppose subgroups $H,K$ of a group $G$ have indices $3$ and $4$ respectively. What is the largest possible value of $[G:H\cap K]$? The group need not be finite.

```answer
{"answer":{"kind":"integer","expected":12,"checker_scope":"Exact stated finite group or ring answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Associate a coset of the intersection with a pair of cosets of the original subgroups.

</details>

<details>
<summary>Hint 2</summary>

Establish injectivity of that association, then seek an example with independent coordinate restrictions.

</details>

<details>
<summary>Worked solution</summary>

Coset pairs bound the index, while a direct product makes the restrictions independent.

1. The map $g(H\cap K)\mapsto(gH,gK)$ is well-defined on left cosets.
2. If two pairs agree, the corresponding quotient element belongs to both $H$ and $K$, so the original intersection cosets agree. The map is injective.
3. There are $3\cdot4=12$ possible coset pairs, hence $[G:H\cap K]\le12$.
4. Take $G=C_3\times C_4$, $H=\{e\}\times C_4$ and $K=C_3\times\{e\}$. Their indices are $3,4$, and their intersection is trivial.
5. This example has intersection index $12$, so the largest possible value is $12$.

</details>
