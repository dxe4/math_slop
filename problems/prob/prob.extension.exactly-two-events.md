# Count exactly two event memberships

*Medium · [Probability problems](index.md)*

A sample space has $16$ equally likely outcomes. Events satisfy $|A\cap B|=5$, $|A\cap C|=4$, $|B\cap C|=3$ and $|A\cap B\cap C|=2$. Find the probability that exactly two of $A,B,C$ occur.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":8},"checker_scope":"Checks the exact probability of exactly two memberships only."}}
```

<details>
<summary>Hint 1</summary>

Each pair count includes the triple intersection, which must be excluded from exactly-two membership.

</details>

<details>
<summary>Hint 2</summary>

Subtract the triple count from each pair separately; the remaining three pair-only sets are disjoint.

</details>

<details>
<summary>Worked solution</summary>

Pair-only regions form a disjoint decomposition of exactly two occurrences.

1. The pair-only region counts are $5-2=3$, $4-2=2$ and $3-2=1$.
2. They are disjoint and exhaust exactly-two membership, so the favourable count is $3+2+1=6$.
3. Uniformity gives $6/16=3/8$. Subtracting the triple just once from the sum of pairs would leave triple outcomes counted twice.

The three disjoint pair-only regions contain $3,2,1$ outcomes, giving probability $6/16=3/8$.

</details>
