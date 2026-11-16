# Identify every possible subsequential limit

*Hard · [Real analysis](index.md)*

For $a_n=2+(-1)^n+1/n$, return the set of all real subsequential limits.

```answer
{"answer":{"kind":"set","expected":["1","3"],"checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Separate even and odd indices.

</details>

<details>
<summary>Hint 2</summary>

To exclude other limits, use that the reciprocal error tends to zero and parity values stay separated.

</details>

<details>
<summary>Worked solution</summary>

A vanishing perturbation preserves the two separated parity cluster values.

1. Along even indices the values tend to three, and along odd indices they tend to one.
2. If a subsequence converged to a different value, its distance from both one and three would be positive; sufficiently small reciprocal errors would keep all its terms away from that proposed limit.
3. Thus there are no other subsequential limits, and the set is {1,3}.

</details>
