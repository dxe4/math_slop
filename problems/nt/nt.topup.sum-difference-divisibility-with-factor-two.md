# Prove a divisibility consequence and expose failed cancellation

*Hard · [Number theory](index.md)*

Let integers a,b,c have a nonzero and $a\mid b+c$, a divides b-c. Prove a divides 2b and 2c. Show why a need not divide b or c.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Add and subtract the two divisible expressions.

</details>

<details>
<summary>Hint 2</summary>

Use an even divisor to search for a cancellation counterexample.

</details>

<details>
<summary>Model proof</summary>

Linear combinations preserve divisibility, while cancellation may require a coprimality hypothesis.

1. Adding the two expressions gives 2b, and subtracting gives 2c; both are integer combinations of multiples of a.
2. Hence a divides both 2b and 2c.
3. For a=2,b=1,c=1, the original expressions are two and zero, divisible by two, while neither b nor c is divisible by two.

**Self-assessment rubric**

- Use both original hypotheses to derive divisibility of the sum and difference.
- Identify the exact conclusions as divisibility of twice b and twice c.
- Verify every condition in a concrete failed-cancellation example.

</details>
