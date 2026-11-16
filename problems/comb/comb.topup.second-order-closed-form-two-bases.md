# Prove a closed form for a second-order recurrence

*Hard · [Combinatorics](index.md)*

Define $a_0=0$, a1=1 and a\_n=3a\_(n-1)-2a\_(n-2) for n&gt;=2. Prove a\_n=2^n-1 for every n&gt;=0.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Both initial indices must be checked before using the two-term recurrence.

</details>

<details>
<summary>Hint 2</summary>

Substitute the two induction hypotheses and collect the powers and constants separately.

</details>

<details>
<summary>Model proof</summary>

A second-order recurrence needs a two-index induction argument.

1. At n=0 and n=1 the proposed values are zero and one, agreeing with both initial conditions.
2. Assume the formula at n-1 and n-2. Substitution gives 3(2^(n-1)-1)-2(2^(n-2)-1)=2^n-1.
3. The two verified bases and the recurrence step therefore establish the formula for every nonnegative index.

**Self-assessment rubric**

- Verify each of the two specified initial indices.
- Use the formulas at both previous indices in the recurrence.
- Simplify correctly and conclude the full nonnegative-index domain.

</details>
