# Recover a canonical continued fraction by Euclidean division

*Medium · [Computational arithmetic problems](index.md)*

Write $43/19$ as its finite simple continued fraction with final partial quotient at least two. Find the sum of all its partial quotients.

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Apply Euclidean division successively to numerator and denominator.

</details>

<details>
<summary>Hint 2</summary>

Use the final-quotient convention to avoid replacing the last entry by an extra terminal one.

</details>

<details>
<summary>Worked solution</summary>

Euclidean quotients determine the canonical finite expansion.

1. The divisions are 43=2(19)+5 and 19=3(5)+4.
2. Then 5=1(4)+1 and 4=4(1), so the canonical expansion is \[2;3,1,4\].
3. The final entry is at least two as required, and the quotient sum is ten.

</details>
