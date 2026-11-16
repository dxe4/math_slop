# Evaluate an infinite reciprocal telescope

*Medium · [Calculus](index.md)*

Evaluate $\sum_{n=1}^\infty1/[n(n+1)]$ through its finite partial sums.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Decompose each term as 1/n−1/(n+1).

</details>

<details>
<summary>Hint 2</summary>

Only after cancellation take the partial-sum limit.

</details>

<details>
<summary>Worked solution</summary>

An infinite sum is obtained from a finite identity plus a vanishing boundary term.

1. The decomposition is exact for every positive integer n.
2. The Nth partial sum is 1−1/(N+1), because all intermediate reciprocals cancel.
3. As N→∞ the remaining tail term vanishes, giving the sum 1.

</details>
