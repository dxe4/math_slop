# Maintain minimal tails while preserving subsequence length

*Medium · [Computational arithmetic problems](index.md)*

Find the length of a strictly increasing subsequence of maximum length in $[3,1,5,2,6,4,9,7,8]$.

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Keep the smallest possible final value for an increasing subsequence of each length.

</details>

<details>
<summary>Hint 2</summary>

Replacing an existing tail does not reduce the attainable length; retain a separate attaining subsequence for the final certificate.

</details>

<details>
<summary>Worked solution</summary>

Minimal-tail replacement compresses a family of subsequences into one monotone frontier.

1. The tail lists after the first four entries are $[3]$, $[1]$, $[1,5]$, $[1,2]$.
2. The next entries give $[1,2,6]$, $[1,2,4]$, $[1,2,4,9]$, $[1,2,4,7]$, and $[1,2,4,7,8]$.
3. The invariant is that each position stores the minimum possible tail for that subsequence length, so no subsequence longer than the final five positions exists.
4. The actual subsequence $1,2,4,7,8$ attains length $5$, proving the result.

</details>
