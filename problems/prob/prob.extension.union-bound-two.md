# Bound either bad event

*Easy · [Probability problems](index.md)*

Bad events $A,B$ satisfy $P(A)\le1/20$ and $P(B)\le1/10$. What upper bound does the union inequality give for $P(A\cup B)$?

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":20},"checker_scope":"Checks the bound supplied by the union inequality, not the exact union probability."}}
```

<details>
<summary>Hint 1</summary>

Either bad event means their union.

</details>

<details>
<summary>Hint 2</summary>

Add the supplied upper bounds; independence is not necessary for this inequality.

</details>

<details>
<summary>Worked solution</summary>

Subadditivity controls a union without dependence information.

1. The union inequality gives $P(A\cup B)\le P(A)+P(B)$.
2. Use the supplied individual bounds to obtain at most $1/20+1/10$.
3. A common denominator gives $1/20+2/20=3/20$. Possible overlap can reduce the actual probability, so this is an upper bound.

Their union has probability at most $3/20$.

</details>
