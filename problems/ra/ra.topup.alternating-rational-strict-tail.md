# Find the first tail meeting a strict error threshold

*Medium · [Real analysis](index.md)*

For $a_n=(-1)^n3/(2n+1)$, n&gt;=1, find the least positive N such that \|a\_n\|&lt;1/10 for every n&gt;=N.

```answer
{"answer":{"kind":"integer","expected":"15","checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The sign disappears in the absolute error.

</details>

<details>
<summary>Hint 2</summary>

Solve the strict denominator inequality before choosing an integer.

</details>

<details>
<summary>Worked solution</summary>

A decreasing error gives a whole-tail threshold once the first index is checked.

1. The error is 3/(2n+1), decreasing for positive n.
2. The strict condition is 30&lt;2n+1, or n&gt;29/2.
3. Thus N=15 works for the whole tail; at n=14 the error is 3/29&gt;1/10, proving minimality.

</details>
