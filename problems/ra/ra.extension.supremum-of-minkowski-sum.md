# Prove the additive supremum rule with two independent approximations

*Medium · [Real analysis](index.md)*

Let A,B be nonempty real sets bounded above. Prove $\sup(A+B)=\sup A+\sup B$, where A+B={a+b:a in A,b in B}. Do not assume either supremum is attained.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

First prove the proposed number is an upper bound.

</details>

<details>
<summary>Hint 2</summary>

For any positive tolerance, approximate each separate supremum within half that tolerance.

</details>

<details>
<summary>Model proof</summary>

Separate near-maximizers combine without requiring actual maxima.

1. Put s=sup A and t=sup B. Every a+b is at most s+t, so s+t is an upper bound on A+B.
2. For epsilon&gt;0, the supremum characterization gives a in A with a&gt;s-epsilon/2 and b in B with b&gt;t-epsilon/2.
3. Then a+b&gt;s+t-epsilon. Hence every number below s+t fails to be an upper bound, proving the claimed supremum even when neither original bound is attained.

**Self-assessment rubric**

- Show every sum lies below the proposed upper bound.
- Choose legitimate independent near-maximizers without assuming attainment.
- Use the combined tolerance to prove leastness.

</details>
