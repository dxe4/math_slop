# Count a coupled remainder condition across a partial final period

*Medium · [Computational arithmetic problems](index.md)*

How many integers $0\le n<100000$ satisfy $(n\bmod7)+(n\bmod11)=6$, where each remainder is least nonnegative?

```answer
{"answer":{"kind":"integer","expected":"9091","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

List the possible remainder pairs and combine each pair into one residue modulo $77$.

</details>

<details>
<summary>Hint 2</summary>

Count complete periods first, then compare the surviving residues with the length of the final incomplete block.

</details>

<details>
<summary>Worked solution</summary>

A two-remainder constraint becomes a short periodic residue filter with a boundary correction.

1. The remainder pairs are $(r,6-r)$ for $r=0,\ldots,6$. Writing $n=r+7k$ gives $k\equiv4-5r\pmod{11}$.
2. The seven residues modulo $77$, in increasing order, are $3,12,28,37,46,55,71$.
3. The interval length is $100000=1298\cdot77+54$. Each complete block contributes seven solutions.
4. The final block includes the five residues below $54$, so the total is $1298\cdot7+5=9091$.

</details>
