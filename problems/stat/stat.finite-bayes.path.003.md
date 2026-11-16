# Recognize evidence that leaves relative weights unchanged

*Medium · [Statistics and probability](index.md)*

Mutually exclusive, exhaustive hypotheses have positive priors summing to $1$. The observed evidence has the same likelihood $1/4$ under every hypothesis. What is the posterior-to-prior probability ratio for each hypothesis? Enter the exact common ratio.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":1},"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

Compute the evidence probability by summing prior times likelihood.

</details>

<details>
<summary>Hint 2</summary>

Bayes normalization divides each weighted prior by that same evidence probability.

</details>

<details>
<summary>Worked solution</summary>

A common positive likelihood cancels during normalization.

1. The evidence probability is $(1/4)\sum_iP(H_i)=1/4$.
2. For each hypothesis, Bayes gives $P(H_i\mid E)=P(H_i)(1/4)/(1/4)=P(H_i)$.
3. Each prior is positive, so its posterior-to-prior ratio is $1$.

</details>
