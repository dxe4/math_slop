# Compare second and fourth moments sharply

*Medium · [Original Putnam-style training](index.md)*

Real numbers $a_1,a_2,a_3,a_4$ satisfy $\sum_{i=1}^4a_i^2=1$. Find the minimum of $\sum_{i=1}^4a_i^4$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

Apply Cauchy-Schwarz to the four squared coordinates and four ones.

</details>

<details>
<summary>Hint 2</summary>

The equality condition concerns equal squared coordinates, not necessarily equal signs.

</details>

<details>
<summary>Worked solution</summary>

A finite moment inequality gives the sharp lower bound.

1. Cauchy-Schwarz gives $(\sum a_i^2)^2\leq4\sum a_i^4$.
2. Thus the fourth-power sum is at least 1/4.
3. Choosing every a\_i=1/2 meets the squared-sum constraint and attains $1/4$.

</details>
