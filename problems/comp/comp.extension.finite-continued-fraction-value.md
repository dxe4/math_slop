# Evaluate a finite continued fraction from its innermost term

*Easy · [Computational arithmetic problems](index.md)*

Evaluate the simple continued fraction $[2;3,4]$, defined as 2+1/(3+1/4), as a reduced rational.

```answer
{"answer":{"kind":"rational","expected":{"numerator":30,"denominator":13},"checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Start with the innermost addition.

</details>

<details>
<summary>Hint 2</summary>

Invert that result before adding the initial integer.

</details>

<details>
<summary>Worked solution</summary>

The finite continued-fraction convention fixes the order of reciprocal operations.

1. The inner expression is 3+1/4=13/4.
2. Its reciprocal is four thirteenths, so the full value is 2+4/13.
3. This is 30/13, already reduced.

</details>
