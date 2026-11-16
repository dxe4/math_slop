# Prove boundedness without assuming an infinite maximum

*Hard · [Real analysis](index.md)*

Prove every convergent real sequence $(a_n)$ is bounded. Your argument must control both its finite beginning and its tail.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Use one fixed convergence tolerance to bound the tail.

</details>

<details>
<summary>Hint 2</summary>

A finite collection of early absolute values has a maximum.

</details>

<details>
<summary>Model proof</summary>

A tail estimate plus finitely many exceptions gives a global bound.

1. If a\_n tends to L, choose N so that n&gt;=N implies \|a\_n-L\|&lt;1. Then \|a\_n\|&lt;=\|L\|+1 throughout that tail.
2. Take M as the maximum of \|L\|+1 and the finitely many absolute values with indices below N, omitting that finite list if N=1.
3. Every sequence term is in the controlled prefix or tail, so \|a\_n\|&lt;=M for all n.

**Self-assessment rubric**

- Derive a common tail bound from a fixed positive tolerance.
- Use a finite maximum to include all earlier terms.
- Explain why every index is covered, including an empty prefix.

</details>
