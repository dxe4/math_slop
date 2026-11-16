# Separate a failed proposed threshold from a corrected whole tail

*Medium · [Real analysis](index.md)*

For $a_n=1+1/(n-4)$, n&gt;=5, tolerance 1/8 is measured from limit 1. A proposed threshold is N=10. Return least\_valid\_N and first\_violating\_n\_at\_or\_after\_10 for the strict error condition.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"least_valid_N":"13","first_violating_n_at_or_after_10":"10"},"checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The error is a reciprocal with its own starting domain.

</details>

<details>
<summary>Hint 2</summary>

Strict inequality excludes equality at n=12.

</details>

<details>
<summary>Worked solution</summary>

A failed candidate and a valid universal tail are different witnesses.

1. The condition is 1/(n-4)&lt;1/8, equivalent to n&gt;12, so the least valid tail starts at thirteen.
2. At the proposed first index ten, the error is one sixth, which is larger than one eighth.
3. Thus ten is already the first violating index in the proposed tail; twelve also fails because equality is not permitted.

</details>
