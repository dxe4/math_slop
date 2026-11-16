# Ht unbiasedness

*Easy · [Statistics and probability](index.md)*

A finite population has fixed real outcomes $y_1,\ldots,y_N$ and inclusion indicators $I_i$ with $P(I_i=1)=\pi_i>0$. Prove that $\widehat T=\sum_{i=1}^N I_i y_i/\pi_i$ is design-unbiased for $T=\sum_i y_i$. Do not assume independence of the indicators.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The outcomes and inclusion probabilities are fixed constants under the sampling design.

</details>

<details>
<summary>Hint 2</summary>

Apply linearity to the finite sum and use the marginal expectation of one indicator; no product of indicators is needed.

</details>

<details>
<summary>Model proof</summary>

Inverse marginal-inclusion weighting cancels the marginal selection chance in expectation.

1. Because the population sum is finite and $\pi_i>0$, every term is integrable and $E\widehat T=\sum_i(y_i/\pi_i)E I_i$.
2. For a zero-one inclusion indicator, $E I_i=\pi_i$.
3. Thus $E\widehat T=\sum_i y_i=T$. Dependence affects variance through joint probabilities, but it does not enter this expectation calculation.

**Self-assessment rubric**

- Keep population outcomes and positive inclusion probabilities fixed.
- Apply finite linearity and the marginal indicator expectation.
- Conclude the total expectation and explain why no independence is required.

</details>
