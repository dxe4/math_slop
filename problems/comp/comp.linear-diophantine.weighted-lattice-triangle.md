# Count lattice points by complete residue blocks

*Hard · [Computational arithmetic problems](index.md)*

How many nonnegative integer pairs $(x,y)$ satisfy $7x+11y\leq1000$?

```answer
{"answer":{"kind":"integer","expected":"6617","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

For fixed $y$, count $x$ using a floor plus one.

</details>

<details>
<summary>Hint 2</summary>

The range for $y$ consists of complete seven-term residue blocks.

</details>

<details>
<summary>Worked solution</summary>

Residue blocks turn the weighted triangular lattice count into a short arithmetic sum.

1. The possible $y$ are $0$ through $90$. Write $y=7q+r$ with $0\leq q\leq12$ and $0\leq r\leq6$.
2. The floors $\lfloor(1000-11r)/7\rfloor$ are $142,141,139,138,136,135,133$, summing to $964$. Each block contributes $964+7-77q=971-77q$.
3. Summing over $q$ gives $13\cdot971-77\cdot78=6617$.

</details>
