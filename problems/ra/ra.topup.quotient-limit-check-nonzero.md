# Evaluate a composite limit with a checked denominator

*Medium · [Real analysis](index.md)*

If $a_n\to2$ and b\_n tends to -1, find the limit of (a\_n^2+3b\_n)/(2a\_n-b\_n), on its eventual domain.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":5},"checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Calculate the denominator limit before dividing.

</details>

<details>
<summary>Hint 2</summary>

A nonzero denominator limit ensures the quotient is defined eventually.

</details>

<details>
<summary>Worked solution</summary>

Limit laws apply after the denominator hypothesis is verified.

1. The numerator tends to four minus three, or one.
2. The denominator tends to four plus one, or five; it is therefore nonzero for all sufficiently large indices.
3. The quotient limit is one fifth.

</details>
