# Pair alternating recurrence increments

*Medium · [Computational arithmetic problems](index.md)*

Let $c_0=0$ and $c_n=c_{n-1}+(-1)^n n$ for $n\geq1$. Find $c_{1000}$.

```answer
{"answer":{"kind":"integer","expected":"500","checker_scope":"Exact requested integer or rational only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Expand the recurrence into a sum of increments.

</details>

<details>
<summary>Hint 2</summary>

Pair each odd-indexed increment with the following even-indexed increment.

</details>

<details>
<summary>Worked solution</summary>

Adjacent signed increments have a constant pair sum.

1. Telescoping gives $c_{1000}=-1+2-3+4-\cdots-999+1000$.
2. Each pair $-(2j-1)+2j$ equals $1$.
3. There are $500$ pairs, so $c_{1000}=500$.

</details>
