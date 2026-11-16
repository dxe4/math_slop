# Prove a product limit with boundedness instead of a factor limit

*Hard · [Real analysis](index.md)*

Let $a_n\to0$ and suppose \|b\_n\|&lt;=B for a fixed B&gt;=0. Prove a\_n b\_n tends to zero without assuming b\_n converges.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Treat B=0 before dividing by it.

</details>

<details>
<summary>Hint 2</summary>

For positive B, make the a-error smaller than epsilon/B.

</details>

<details>
<summary>Model proof</summary>

A uniform factor bound is enough when the other factor tends to zero.

1. If B=0, every b\_n is zero, so every product is zero.
2. If B&gt;0 and epsilon&gt;0, convergence supplies N such that n&gt;=N implies \|a\_n\|&lt;epsilon/B.
3. Then \|a\_n b\_n\|&lt;=B\|a\_n\|&lt;epsilon, proving the required limit with no convergence assumption on b\_n.

**Self-assessment rubric**

- Handle B=0 separately.
- Choose the tail using the given positive bound and tolerance.
- Apply the common bound without adding an unsupported factor limit.

</details>
