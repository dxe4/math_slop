# Prove existence without deciding an intermediate number’s arithmetic type

*Hard · [Foundations bridge](index.md)*

Prove there exist positive irrational real numbers a,b such that aᵇ is rational. You may use that √2 is irrational and the positive-real exponent identity $(u^v)^w=u^{vw}$. Do not assert that an undecided intermediate number is irrational without a case distinction.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Consider t=(√2)^{√2}.

</details>

<details>
<summary>Hint 2</summary>

If t is rational it already gives one pair; otherwise use t as the new base and √2 again as exponent.

</details>

<details>
<summary>Model proof</summary>

A complete case split can establish existence without identifying which branch holds.

1. Let t=(√2)^{√2}, a positive real number. Either t is rational or t is irrational; these cases exhaust all possibilities.
2. If t is rational, take a=b=√2. Both numbers are positive irrational and aᵇ=t is rational.
3. If t is irrational, take a=t and b=√2. Both are again positive irrational, and aᵇ=((√2)^{√2})^{√2}=(√2)²=2 by the supplied exponent law.
4. Thus an admissible pair exists in either case. The proof does not need to decide the arithmetic type of t and does not claim that both proposed pairs qualify simultaneously.

**Self-assessment rubric**

- Defines the positive intermediate t and explicitly separates rational and irrational possibilities.
- Supplies positive irrational a,b with rational power in the rational case.
- Supplies the second admissible pair and evaluates its power as 2 using the stated exponent law.

</details>
