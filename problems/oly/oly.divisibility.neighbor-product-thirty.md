# Count divisible products of consecutive integers

*Medium · [Original olympiad-style problems](index.md)*

How many integers $n$ with $1\leq n\leq1000$ satisfy $30\mid n(n+1)$?

```answer
{"answer":{"kind":"integer","expected":"266","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

The factor two is automatic for consecutive integers.

</details>

<details>
<summary>Hint 2</summary>

Combine the remaining restrictions modulo three and five, then count complete blocks.

</details>

<details>
<summary>Worked solution</summary>

Consecutive factors reduce the divisibility test to a small set of residue classes.

1. One of n and n+1 is even. Divisibility by three requires $n\equiv0,2\pmod3$, and divisibility by five requires $n\equiv0,4\pmod5$.
2. Together these give $n\equiv0,5,9,14\pmod{15}$. Each of the $66$ complete blocks through $990$ contains four solutions.
3. The remaining residues from $991$ through $1000$ include $5$ and $9$, adding two. The count is $66\cdot4+2=266$.

</details>
