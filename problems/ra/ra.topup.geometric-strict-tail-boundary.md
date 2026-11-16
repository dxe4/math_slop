# Handle equality in a dyadic convergence threshold

*Medium · [Real analysis](index.md)*

For $a_n=3-2(1/2)^n$, n&gt;=1, find the least positive N with \|a\_n-3\|&lt;1/64 for every n&gt;=N.

```answer
{"answer":{"kind":"integer","expected":"8","checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Write the error as one power of two.

</details>

<details>
<summary>Hint 2</summary>

At the equality exponent, the required strict inequality still fails.

</details>

<details>
<summary>Worked solution</summary>

Monotonic dyadic decay makes the strict threshold exact.

1. The error is 2^(1-n). It equals 1/64 at n=7.
2. For every n&gt;=8 the error is at most 1/128, hence strictly below 1/64.
3. Since every earlier tail includes the failing index seven, the least threshold is eight.

</details>
