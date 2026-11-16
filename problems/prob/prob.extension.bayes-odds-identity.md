# Prove the odds update identity

*Medium · [Probability problems](index.md)*

Let $0<P(H)<1$ and suppose $P(E\mid H)>0$ and $P(E\mid H^c)>0$. Prove that $\frac{P(H\mid E)}{P(H^c\mid E)}=\frac{P(H)}{P(H^c)}\frac{P(E\mid H)}{P(E\mid H^c)}$, justifying all denominators.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Express each joint evidence-and-hypothesis mass using a prior and a likelihood.

</details>

<details>
<summary>Hint 2</summary>

Write both posteriors using their common evidence denominator. Establish positivity before taking their ratio.

</details>

<details>
<summary>Model proof</summary>

The common evidence normalisation cancels in posterior odds.

1. The assumptions give positive priors for $H,H^c$ and positive joint masses $P(E\cap H)=P(E\mid H)P(H)$ and $P(E\cap H^c)=P(E\mid H^c)P(H^c)$.
2. Their sum is $P(E)>0$. Bayes' rule thus gives $P(H\mid E)=P(E\mid H)P(H)/P(E)$ and the analogous expression for $H^c$. In particular $P(H^c\mid E)>0$.
3. Taking the ratio cancels the common positive $P(E)$ and yields the displayed prior-odds times likelihood-ratio identity. All remaining denominators are positive by the original assumptions.

Divide the two Bayes formulas; their common evidence probability cancels, leaving prior odds times likelihood ratio.

**Self-assessment rubric**

- Use the hypotheses to establish positive prior, likelihood, evidence and posterior denominators.
- Write both complementary posterior probabilities with the same evidence normalisation.
- Take the well-defined ratio and identify prior odds and likelihood ratio.

</details>
