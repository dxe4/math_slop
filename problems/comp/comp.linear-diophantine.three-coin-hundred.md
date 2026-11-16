# Count nonnegative three-denomination representations

*Hard · [Computational arithmetic problems](index.md)*

How many ordered triples of nonnegative integers $(a,b,c)$ satisfy $a+2b+5c=100$?

```answer
{"answer":{"kind":"integer","expected":"541","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Fix $c$; each allowed $b$ determines exactly one $a$.

</details>

<details>
<summary>Hint 2</summary>

Separate even and odd $c$ to remove the floor.

</details>

<details>
<summary>Worked solution</summary>

Parity splits a floor sum into two arithmetic progressions.

1. For fixed $0\leq c\leq20$, there are $\lfloor(100-5c)/2\rfloor+1$ choices.
2. For $c=2j$, $0\leq j\leq10$, the counts are $51-5j$, summing to $286$. For $c=2j+1$, $0\leq j\leq9$, they are $48-5j$, summing to $255$.
3. The total is $286+255=541$.

</details>
