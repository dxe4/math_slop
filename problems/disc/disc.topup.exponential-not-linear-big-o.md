# Refute all fixed linear upper-bound witnesses

*Hard · [Discrete mathematics](index.md)*

Without calculus or logarithmic limits, prove that $2^n$ is not O(n) on the positive integers.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

To refute Big O, handle an arbitrary proposed positive C and threshold N.

</details>

<details>
<summary>Hint 2</summary>

The positive binomial expansion of (1+1) to the nth power gives a quadratic lower bound.

</details>

<details>
<summary>Model proof</summary>

A quadratic binomial term eventually exceeds every fixed linear comparison.

1. For every integer n&gt;=2, the binomial expansion gives $2^n\geq\binom n2=n(n-1)/2$.
2. Given any C&gt;0 and any proposed threshold N, choose an integer n&gt;=max(N,2) with n&gt;2C+1.
3. Then $2^n\geq n(n-1)/2>Cn$. Thus every proposed fixed pair fails somewhere on its required tail, proving the negation of O(n).

**Self-assessment rubric**

- Begin with arbitrary proposed C and N and choose a later input in response.
- Justify the quadratic binomial lower bound for the chosen indices.
- Make the lower bound exceed Cn at an index beyond the proposed threshold.

</details>
