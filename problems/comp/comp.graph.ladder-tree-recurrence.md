# Advance a ladder spanning-tree recurrence

*Easy · [Computational arithmetic problems](index.md)*

Let Tn count spanning trees of the two-row n-column ladder graph. Use $T_1=1,T_2=4$ and Tn=4T\_(n-1)-T\_(n-2) for n&gt;=3. Find T3.

```answer
{"answer":{"kind":"integer","expected":"15","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Use the first index where the recurrence applies.

</details>

<details>
<summary>Hint 2</summary>

The second preceding term is subtracted.

</details>

<details>
<summary>Worked solution</summary>

The stated ladder recurrence gives the exact next tree count.

1. At n=3 the rule is T3=4T2-T1.
2. Substituting the initial values gives sixteen minus one.
3. Thus the three-column ladder has fifteen spanning trees.

</details>
