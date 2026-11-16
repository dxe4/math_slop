# Prove the modulus for simultaneous equal congruences

*Hard · [Number theory](index.md)*

For positive integers m,n and arbitrary integers a,b, prove $a\equiv b\pmod m$ and a congruent to b modulo n if and only if a is congruent to b modulo lcm(m,n).

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Translate each congruence into divisibility of the same difference.

</details>

<details>
<summary>Hint 2</summary>

Use the fact that a common multiple is divisible by the least common multiple, including for signed differences.

</details>

<details>
<summary>Model proof</summary>

The least common multiple combines two divisibility requirements on one difference.

1. Let d=a-b. The two congruences mean m divides d and n divides d. If d is zero the conclusion is immediate; otherwise its absolute value is a positive common multiple and is divisible by lcm(m,n).
2. Thus the simultaneous conditions imply lcm(m,n) divides d. Conversely, each of m,n divides their lcm, so a difference divisible by the lcm is divisible by both.
3. Applying the definition of congruence in both directions proves the equivalence without any coprimality assumption.

**Self-assessment rubric**

- Reduce both congruences to divisibility of one signed difference.
- Handle zero or signed differences and justify divisibility by the lcm.
- Prove the reverse direction and state that coprimality is unnecessary.

</details>
