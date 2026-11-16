# Combine two interlaced convergent subsequences

*Hard · [Real analysis](index.md)*

Assume $a_{2k}\to L$ and a\_(2k-1) tends to the same L. Prove a\_n tends to L, giving one full-sequence threshold from the two parity thresholds.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Choose both parity thresholds for the same tolerance.

</details>

<details>
<summary>Hint 2</summary>

A sufficiently large original index belongs to a sufficiently late term in its own parity subsequence.

</details>

<details>
<summary>Model proof</summary>

A finite partition of the index set can be recombined when all parts share one limit.

1. For epsilon&gt;0 choose K\_even and K\_odd so the corresponding parity terms are within epsilon of L whenever k exceeds the respective threshold.
2. Let K be their maximum and use full threshold N=2K. If n&gt;=N is even, n=2k with k&gt;=K; if it is odd, n=2k-1 with k&gt;=K+1.
3. In either case the correct parity estimate holds, proving full convergence.

**Self-assessment rubric**

- Choose both subsequence thresholds for one supplied tolerance.
- Give and verify a threshold for every original index.
- Check both parity cases explicitly.

</details>
