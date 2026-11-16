# Separate a termination measure from a correctness invariant

*Medium · [Discrete mathematics](index.md)*

For positive integers a&gt;=b, repeatedly replace $(a,b)$ by (b,r), where r is the remainder on dividing a by b, and stop when the second entry is zero. Prove termination and explain why gcd preservation alone would not prove it.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

While a step is permitted, the remainder is a nonnegative integer strictly below b.

</details>

<details>
<summary>Hint 2</summary>

A preserved quantity need not measure progress toward the stopping condition.

</details>

<details>
<summary>Model proof</summary>

A decreasing nonnegative integer component proves the process cannot continue forever.

1. At every step with b&gt;0, Euclidean division gives $0\leq r<b$.
2. The second coordinate is therefore a strictly decreasing sequence of nonnegative integers until it reaches zero; an infinite such sequence cannot exist.
3. At second coordinate zero the stated procedure stops. Preserving a gcd is useful for correctness, but a constant gcd by itself rules out neither repetitions nor an infinite process.

**Self-assessment rubric**

- Use the exact remainder bounds at each permitted step.
- Identify a strictly decreasing nonnegative integer measure.
- Relate zero to the stopping rule and distinguish decrease from preservation.

</details>
