# Build three entries of the next row

*Easy · [Combinatorics](index.md)*

The $n=5$ row of Pascal’s triangle, indexed $r=0$ through 5, is $1,5,10,10,5,1$. Use adjacent sums to find the $n=6$ entries at $r=2,3,4$. Enter r2, r3, r4.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"r2":15,"r3":20,"r4":15},"checker_scope":"Exact numerical row construction; not a free proof of the identity."}}
```

<details>
<summary>Hint 1</summary>

At column r, add the previous row’s entries at $r-1$ and r.

</details>

<details>
<summary>Hint 2</summary>

Use neighboring entries, not entries at the same column twice.

</details>

<details>
<summary>Worked solution</summary>

The subset partition becomes an adjacent-sum rule.

1. At $r=2$, add $5+10=15$; at $r=3$, add $10+10=20$.
2. At $r=4$, add $10+5=15$. These are numerical applications of the partition identity.

</details>
