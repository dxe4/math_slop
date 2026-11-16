# A Markov tail bound

*Easy · [Probability problems](index.md)*

A nonnegative random variable has expectation $3$. What upper bound does Markov inequality give for $P(X\ge12)$?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Nonnegativity is essential to the stated inequality.

</details>

<details>
<summary>Hint 2</summary>

Divide the expectation by the positive threshold.

</details>

<details>
<summary>Worked solution</summary>

Markov bounds a nonnegative tail by its first moment.

1. For a nonnegative variable, $P(X\ge a)\le E[X]/a$ for $a>0$.
2. Here the expectation is $3$ and the threshold is $12$.
3. The bound is $3/12=1/4$.

</details>
