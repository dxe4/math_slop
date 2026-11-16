# Exact rejection probability for a finite count

*Easy · [Statistics and probability](index.md)*

Under a specified null, a count $K$ takes values $0,1,2,3,4$ with respective probabilities $1/8,1/4,3/8,1/8,1/8$. A one-sided rule rejects when $K\in\{3,4\}$. What is its null rejection probability?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Write the rejection event as a disjoint union of count outcomes.

</details>

<details>
<summary>Hint 2</summary>

Use only the masses belonging to the rejection region.

</details>

<details>
<summary>Worked solution</summary>

Sum the null probabilities over the stated rejection region.

1. The five stated masses sum to $(1+2+3+1+1)/8=1$, so they define a probability distribution.
2. The rejection event is the disjoint union $\{K=3\}\cup\{K=4\}$.
3. Its probability is $1/8+1/8=1/4$. No approximation or additional binomial assumption is involved.

</details>
