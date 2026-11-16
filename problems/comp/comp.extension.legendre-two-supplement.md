# Use a prime residue class modulo eight to evaluate a character

*Easy · [Computational arithmetic problems](index.md)*

For an odd prime p, the supplementary law says $(2/p)=1$ when p is 1 or 7 modulo 8 and -1 when p is 3 or 5 modulo 8. Find (2/41).

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Reduce forty-one modulo eight.

</details>

<details>
<summary>Hint 2</summary>

Use the branch corresponding to that residue class.

</details>

<details>
<summary>Worked solution</summary>

A small prime residue class determines the quadratic character of two.

1. Forty-one is congruent to one modulo eight.
2. That is one of the positive-character cases in the supplied law.
3. The Legendre symbol is therefore one.

</details>
