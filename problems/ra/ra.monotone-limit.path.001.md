# Find the limit of an increasing bounded formula

*Easy · [Real analysis](index.md)*

For positive integer $n, a_{n}=5-2/n$. It is nondecreasing and bounded above. Give its real limit.

```answer
{"answer":{"kind":"rational","expected":{"numerator":5,"denominator":1},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

The positive reciprocal gap decreases toward zero.

</details>

<details>
<summary>Hint 2</summary>

Identify the least upper bound of the range, not just any upper bound.

</details>

<details>
<summary>Worked solution</summary>

An increasing bounded sequence approaches the supremum of its range.

1. Every term is below $5$, and for any $\varepsilon >0$ an integer $n>2/\varepsilon$ places the term above $5-\varepsilon$.
2. Thus the range has supremum $5$. Monotone convergence gives limit $5$.

</details>
