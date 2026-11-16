# A Markov upper bound

*Easy · [Probability problems](index.md)*

A nonnegative integrable variable $X$ satisfies $E[X]=3$. What numerical upper bound does Markov's inequality give for $P(X\ge12)$?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks the requested Markov bound only, not the unknown exact event probability."}}
```

<details>
<summary>Hint 1</summary>

Check nonnegativity and the positive threshold required by Markov's inequality.

</details>

<details>
<summary>Hint 2</summary>

The inequality divides the mean by the threshold; the result bounds rather than determines the probability.

</details>

<details>
<summary>Worked solution</summary>

Apply the moment bound at the stated threshold.

1. Markov's inequality applies because $X\ge0$ and the threshold twelve is positive.
2. It gives $P(X\ge12)\le E[X]/12$.
3. Substitution yields the upper bound $3/12=1/4$. The actual probability may be smaller.

Markov gives the bound $1/4$.

</details>
