# Additive or multiplicative growth?

*Difficulty 2 of 5 · [Modeling and numerical judgment](index.md) · exercise 2 of 5*

Two models for a population $P$ are $P(t)=P_0+ct$ and $P(t)=P_0e^{rt}$. Give one diagnostic using equally spaced observations that distinguishes them, and state a limitation.

<details>
<summary>Hint 1</summary>

Compare successive differences and successive ratios

</details>

<details>
<summary>Hint 2</summary>

Noisy short data can mimic either pattern

</details>

<details>
<summary>Worked solution</summary>

For equally spaced times, the additive model has constant successive differences, while the exponential model has constant successive ratios (or constant differences in $\log P$). One can compare variation around these two patterns. The diagnostic is not decisive on short or noisy records: a small segment of an exponential can look nearly linear, measurement error affects ratios strongly near zero, and real mechanisms may change over time.

**Answer.** Check constant differences versus constant ratios; short noisy data may not distinguish them.

</details>

*Tags: model selection, growth, assumptions*
