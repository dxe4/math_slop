# Recover a degree using a complement first

*Hard · [Discrete mathematics](index.md)*

A simple graph G on $6$ vertices has complement with $8$ edges. Every vertex of G except A has degree $2$. Find the degree of A.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact requested finite observation or declared representation only. The worked explanation is not automatically certified; no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

G and its complement partition the edges of the complete graph on the same vertices.

</details>

<details>
<summary>Hint 2</summary>

After recovering G edge count, use the degree-sum identity.

</details>

<details>
<summary>Worked solution</summary>

Complement edge accounting supplies the total needed for the missing-degree calculation.

1. The complete graph has $6\cdot5/2=15$ edges, so G has $15-8=7$.
2. The degree sum in G is fourteen. The five non-A vertices contribute $5\cdot2=10$.
3. Therefore A has degree $14-10=4$.

</details>
