# Prove boundedness using a tail anchor without a known limit

*Hard · [Real analysis](index.md)*

Prove every real Cauchy sequence $(a_n)$ is bounded, without invoking existence of its limit.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Use the Cauchy condition with tolerance one.

</details>

<details>
<summary>Hint 2</summary>

Hold one tail index fixed to turn pairwise control into an absolute bound.

</details>

<details>
<summary>Model proof</summary>

A fixed late term anchors a bounded Cauchy tail.

1. Choose N so that m,n&gt;=N implies \|a\_m-a\_n\|&lt;1. With n=N fixed, every m&gt;=N satisfies \|a\_m\|&lt;=\|a\_N\|+1.
2. Take the maximum of that tail bound and the finitely many earlier absolute values, omitting them if N=1.
3. The resulting finite number bounds every term, proving boundedness directly from the Cauchy condition.

**Self-assessment rubric**

- Choose the pairwise Cauchy threshold for a fixed tolerance.
- Fix an allowed late index and derive an absolute tail bound.
- Include the finite beginning without assuming convergence.

</details>
