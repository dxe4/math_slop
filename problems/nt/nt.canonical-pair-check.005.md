# Check both conditions in a division record

*Easy · [Number theory](index.md)*

For $23$ divided by $5$, which numbered quotient/remainder pairs are canonical? Return the set of valid pair numbers. $1$: $(q,r) = (5,-2)$. $2$: $(q,r) = (4,3)$. $3$: $(q,r) = (3,8)$. A canonical pair must satisfy $23 = 5q + r$ and $0 \leq  r < 5$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[2],"checker_scope":"Checks the entire requested finite set, ignoring order and duplicates; does not certify a written proof."}}
```

<details>
<summary>Hint 1</summary>

An equality alone does not make a remainder canonical.

</details>

<details>
<summary>Hint 2</summary>

Check the lower bound $0$ and the strict upper bound $5$ for each proposed remainder.

</details>

<details>
<summary>Worked solution</summary>

Uniqueness of the canonical division record comes from the remainder bounds as well as the equality.

1. Each displayed pair satisfies $23 = 5q + r$.
2. Pair $1$ has negative remainder $-2$; pair $3$ has remainder $8$, which is not less than $5$.
3. Only pair $2$ has 0 ≤ 3 &lt; 5, so the answer is $\{2\}$.

</details>
