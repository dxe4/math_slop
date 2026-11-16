# An upper-bounded set may be unbounded below

*Easy · [Real analysis](index.md)*

For $S=\{x\in R:x<7/2\}$, give sup S. The set is nonempty and bounded above; it is not bounded below.

```answer
{"answer":{"kind":"rational","expected":{"numerator":7,"denominator":2},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

A lower bound is not required for the least-upper-bound property.

</details>

<details>
<summary>Hint 2</summary>

Any number smaller than $7/2$ is exceeded by its midpoint with $7/2$.

</details>

<details>
<summary>Worked solution</summary>

Completeness for a supremum needs an upper bound, not a lower bound.

1. The number $7/2$ is an upper bound.
2. For any $b<7/2$, the midpoint $(b+7/2)/2$ lies in S and exceeds b, so b is not an upper bound. Hence sup $S=7/2$.

</details>
