# Recover the index from a canceled factorial ratio

*Medium · [Combinatorics](index.md)*

For a nonnegative integer n, $\frac{(n+1)!}{n!}=8$. Find n.

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Write the extra factor in the numerator before canceling.

</details>

<details>
<summary>Hint 2</summary>

The cancellation is valid also when n is zero.

</details>

<details>
<summary>Worked solution</summary>

Consecutive factorial ratios expose the newly appended factor.

1. The factorial identity is $(n+1)!=(n+1)n!$ for every nonnegative n.
2. The quotient therefore equals n+1, so n+1=8.
3. Thus n=7, which satisfies the original factorial equation.

</details>
