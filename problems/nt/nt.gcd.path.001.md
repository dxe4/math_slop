# Greatest common divisor: greatest common divisor

*Easy · [Number theory](index.md)*

Find $\gcd (84,126)$, the greatest positive common divisor.

```answer
{"answer":{"kind":"integer","expected":42,"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

A common divisor divides their difference.

</details>

<details>
<summary>Hint 2</summary>

Their difference is $42$, and $42$ divides both original inputs.

</details>

<details>
<summary>Worked solution</summary>

Show both that a candidate is common and that no common divisor can exceed it.

1. Every common divisor of $84$ and $126$ divides $126 - 84 = 42$.
2. Since $42$ divides $84$ and 126, it is the greatest positive common divisor.

</details>
