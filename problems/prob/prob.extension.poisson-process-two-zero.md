# No arrivals over two time units

*Easy · [Probability problems](index.md)*

A homogeneous Poisson process has rate $\log2$ per unit time, with natural logarithm. Find the probability of no arrivals in a deterministic interval of length $2$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks the zero-arrival probability for the stated homogeneous rate and deterministic interval length only."}}
```

<details>
<summary>Hint 1</summary>

The Poisson count parameter is rate multiplied by interval length.

</details>

<details>
<summary>Hint 2</summary>

A Poisson variable of parameter $\lambda$ has zero mass $e^{-\lambda}$.

</details>

<details>
<summary>Worked solution</summary>

Use the increment law of a homogeneous Poisson process.

1. Over any deterministic length-two interval, the count has Poisson parameter $2\log2$ by stationary Poisson increments.
2. The zero-count mass is $e^{-2\log2}$.
3. Since $2\log2=\log4$, this probability is $1/4$. The statement concerns a deterministic interval, not a window chosen after inspecting arrivals.

The count parameter is $2\log2$ and its zero mass is $1/4$.

</details>
