# Convex transforms of a martingale

*Medium · [Probability problems](index.md)*

Let $(M_n,\mathcal F_n)$ be a real integrable martingale and let $\phi:\mathbb R\to\mathbb R$ be finite and convex, with $E[|\phi(M_n)|]<\infty$ for every $n$. Using conditional Jensen, prove that $(\phi(M_n),\mathcal F_n)$ is a submartingale.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Check adaptedness and integrability of the transformed process.

</details>

<details>
<summary>Hint 2</summary>

Conditional Jensen compares the expected future transform with the transform of the conditional future mean; then use the martingale identity.

</details>

<details>
<summary>Model proof</summary>

Convexity changes equality of conditional means into a submartingale inequality.

1. A finite convex function on the real line is continuous and hence Borel measurable, so $\phi(M_n)$ is $\mathcal F_n$-measurable. Its integrability is an explicit assumption.
2. Conditional Jensen gives $E[\phi(M_{n+1})\mid\mathcal F_n]\ge\phi(E[M_{n+1}\mid\mathcal F_n])$ almost surely.
3. The martingale property identifies the right side with $\phi(M_n)$. Together with adaptedness and integrability, this is exactly the submartingale definition. Convexity alone would not supply the assumed integrability of the transformed variables.

Conditional Jensen and the martingale identity give the required nondecreasing conditional-mean inequality.

**Self-assessment rubric**

- Verify measurability and the explicit transformed integrability condition.
- Apply conditional Jensen in the correct direction at the next time.
- Use the martingale identity and check the full submartingale definition.

</details>
