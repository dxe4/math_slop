# Count only aperiodic necklaces before dividing by rotation length

*Medium · [Computational arithmetic problems](index.md)*

How many binary necklaces of length $6$ have minimal period exactly six? Only rotations identify words. Derive the full-period word count using Mobius inversion on period-dividing counts, then pass to necklaces.

```answer
{"answer":{"kind":"integer","expected":"9","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

There are 2^d binary words whose period divides a given divisor d of six.

</details>

<details>
<summary>Hint 2</summary>

Only after restricting to full period does every rotation orbit have size six.

</details>

<details>
<summary>Worked solution</summary>

Inversion separates exact period from shorter repeating blocks before orbit counting.

1. Let P(n) count binary words with minimal period n. The period-dividing identity gives 2^n=sum of P(d) over d dividing n.
2. Mobius inversion yields P(6)=2^6-2^3-2^2+2=54.
3. Every full-period word has six distinct rotations, so these give 54/6=9 necklaces. Shorter-period necklaces are deliberately excluded.

</details>
