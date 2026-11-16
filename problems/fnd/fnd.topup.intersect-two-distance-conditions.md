# Combine a closed distance range with an exterior range

*Hard · [Foundations bridge](index.md)*

Find all real x satisfying both $|x-2|\leq3$ and $|2x+1|>5$. Enter the complete solution interval.

```answer
{"answer":{"kind":"interval","expected":"(2, 5]","checker_scope":"Exact requested bounded result or declared rule-and-domain pair only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

Solve each distance condition separately before intersecting.

</details>

<details>
<summary>Hint 2</summary>

The second condition gives two exterior intervals, and its endpoints are excluded.

</details>

<details>
<summary>Worked solution</summary>

Combining the ranges requires preserving both their logical connective and their endpoint types.

1. The first condition gives $-1\leq x\leq5$.
2. The second gives $2x+1>5$ or $2x+1<-5$, namely $x>2$ or $x<-3$.
3. Only the first exterior branch meets \[-1,5\], so the common solution is $(2,5]$.

</details>
