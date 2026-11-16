# Count a finite subset-sum coefficient and audit its size cases

*Medium · [Computational arithmetic problems](index.md)*

How many subsets of $\{1,2,3,4,5,6\}$ have sum $10$?

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

The coefficient of $x^{10}$ in a product of factors $1+x^j$ records the count without repeated elements.

</details>

<details>
<summary>Hint 2</summary>

An independent check can classify solutions by subset cardinality and rule out cardinalities whose minimum sum is too large.

</details>

<details>
<summary>Worked solution</summary>

A zero-one generating product gives the same finite count as a cardinality-partitioned search.

1. Each element contributes a choice of $1$ or $x^j$, so the target is $[x^{10}]\prod_{j=1}^6(1+x^j)$.
2. The sole two-element solution is $\{4,6\}$; the three-element solutions are $\{1,3,6\}$, $\{1,4,5\}$ and $\{2,3,5\}$.
3. The sole four-element solution is $\{1,2,3,4\}$, since that is already the minimum four-element sum. Five elements have sum at least $15$, and singleton sums cannot reach $10$.
4. The total is $1+3+1=5$, matching the zero-one coefficient recurrence.

</details>
