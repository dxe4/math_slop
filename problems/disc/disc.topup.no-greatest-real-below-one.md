# Contradict a proposed greatest element by an explicit intermediate value

*Medium · [Discrete mathematics](index.md)*

Prove that the set $\{x\in\mathbb R:x<1\}$ has no greatest element.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Assume one candidate is greatest.

</details>

<details>
<summary>Hint 2</summary>

An average of that candidate and one stays below one but can exceed the candidate.

</details>

<details>
<summary>Model proof</summary>

Every proposed maximum has a strictly larger admissible competitor.

1. Suppose m&lt;1 were a greatest element of the set.
2. Let y=(m+1)/2. Then $y-m=(1-m)/2>0$, while $1-y=(1-m)/2>0$.
3. Thus m&lt;y&lt;1, contradicting that m was greatest. No maximum exists.

**Self-assessment rubric**

- Assume a greatest admissible element, not merely an upper bound.
- Construct a real value and verify both strict comparisons.
- Explain why the competitor violates the supposed greatest property.

</details>
