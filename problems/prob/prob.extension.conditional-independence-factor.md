# Conditioning on independent information

*Medium · [Probability problems](index.md)*

Let $X$ be integrable and suppose $\sigma(X)$ is independent of the sub-sigma-algebra $\mathcal G$. Prove $E[X\mid\mathcal G]=E[X]$ almost surely.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

The constant mean is a measurable and integrable candidate.

</details>

<details>
<summary>Hint 2</summary>

For a test event in $\mathcal G$, use independence to factor the integral of $X$ times its indicator; justify this for signed integrable $X$ by approximation.

</details>

<details>
<summary>Model proof</summary>

Independent observations leave the expectation unchanged.

1. The constant $c=E[X]$ is finite, integrable and $\mathcal G$-measurable.
2. For $A\in\mathcal G$, independence gives $E[X\mathbf1_A]=E[X]P(A)$. For completeness, this follows first for indicators of $\sigma(X)$ events, then nonnegative simple functions, then $X^+$ and $X^-$ by monotone approximation; their finite integrals permit subtraction.
3. Thus $E[X\mathbf1_A]=E[c\mathbf1_A]$ for every $A\in\mathcal G$. The constant candidate satisfies the defining conditional-expectation properties, so uniqueness proves the asserted almost-sure identity.

Independence factors every test-event integral, identifying the constant mean as the conditional expectation.

**Self-assessment rubric**

- Identify a finite measurable integrable constant candidate.
- Justify factorisation for integrable signed $X$ against every information-event indicator.
- Verify all defining integrals and conclude by almost-sure uniqueness.

</details>
