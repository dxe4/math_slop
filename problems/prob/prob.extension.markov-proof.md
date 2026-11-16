# Prove Markov's inequality

*Medium · [Probability problems](index.md)*

For a nonnegative integrable variable $X$ and real $a>0$, prove $P(X\ge a)\le E[X]/a$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Compare $X$ pointwise with a multiple of the indicator of the threshold event.

</details>

<details>
<summary>Hint 2</summary>

Check the comparison both on and off that event, then take expectations and use positivity of the threshold.

</details>

<details>
<summary>Model proof</summary>

A threshold-event indicator gives a pointwise lower bound on the variable.

1. On $\{X\ge a\}$, $X\ge a\mathbf1_{\{X\ge a\}}=a$. On its complement, the indicator is zero and the same inequality follows from $X\ge0$.
2. Monotonicity and linearity of expectation give $E[X]\ge aE[\mathbf1_{\{X\ge a\}}]=aP(X\ge a)$. The terms are finite because $X$ is integrable and the indicator is bounded.
3. Dividing by the positive number $a$ preserves the inequality and yields the result. No independence or distributional family is assumed.

The pointwise bound $X\ge a\mathbf1_{\{X\ge a\}}$ yields Markov's inequality after expectation and division.

**Self-assessment rubric**

- Prove the indicator comparison both inside and outside the threshold event.
- Take legitimate expectations and identify the indicator mean as the event probability.
- Divide by the positive threshold and state the resulting bound.

</details>
