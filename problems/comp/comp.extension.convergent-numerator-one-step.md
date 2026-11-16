# Advance a convergent numerator using the supplied recurrence

*Easy · [Computational arithmetic problems](index.md)*

Convergent numerators obey $p_n=a_n p_{n-1}+p_{n-2}$. If a5=2,p4=99 and p3=41, find p5.

```answer
{"answer":{"kind":"integer","expected":"239","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Use the two preceding numerators in their specified order.

</details>

<details>
<summary>Hint 2</summary>

The partial quotient multiplies only the immediately preceding numerator.

</details>

<details>
<summary>Worked solution</summary>

A continued-fraction numerator step is determined by two earlier values.

1. The supplied recurrence at index five is p5=2p4+p3.
2. Substitution gives 2 times 99 plus 41.
3. Thus p5=239.

</details>
