# Prove the invariant behind Euclidean reduction

*Hard · [Number theory](index.md)*

For integers a,b,q,r with $a=bq+r$ and b&gt;0, prove that the positive common divisors of a,b are exactly those of b,r. Explain why the Euclidean algorithm can use this identity at every step.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Prove the two containments separately.

</details>

<details>
<summary>Hint 2</summary>

Use r=a-bq in one direction and a=bq+r in the other.

</details>

<details>
<summary>Model proof</summary>

The algorithm preserves an entire divisor set rather than merely guessing a common value.

1. If d divides a and b, it divides $r=a-bq$, so it is a common divisor of b and r.
2. If d divides b and r, it divides $a=bq+r$, giving the reverse implication.
3. The positive common-divisor sets and hence their greatest members agree. In canonical Euclidean steps the new positive remainder is smaller than b, so the preserved gcd is reached after finitely many reductions.

**Self-assessment rubric**

- Derive divisibility of the remainder from the original pair.
- Recover divisibility of the original dividend from the reduced pair.
- Connect the preserved divisor set with decreasing canonical remainders.

</details>
