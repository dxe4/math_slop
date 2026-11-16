# Prove a factorial prime-factor statement without overclaiming primality

*Hard · [Number theory](index.md)*

For an integer $n\ge2$, prove that every prime divisor of n!+1 exceeds n. Show with n=5 that n!+1 need not itself be prime.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A prime at most n divides the factorial.

</details>

<details>
<summary>Hint 2</summary>

If it also divided one more than the factorial, it would divide one.

</details>

<details>
<summary>Model proof</summary>

Excluding small factors does not establish that a number is prime.

1. If a prime p&lt;=n divided n!+1, then p would also divide n!, so it would divide their difference one, a contradiction.
2. Hence every prime divisor of n!+1 is greater than n.
3. For n=5, $5!+1=121=11^2$ is composite, though its only prime factor eleven is indeed greater than five.

**Self-assessment rubric**

- Explain why a prime at most n divides n factorial.
- Use the difference one to exclude such a prime factor.
- Verify the composite factorial-plus-one example and the limited conclusion.

</details>
