# An exponential Markov bound

*Medium · [Probability problems](index.md)*

A real variable $X$ satisfies $E[e^X]=4$. With natural logarithm, what upper bound does exponential Markov give for $P(X\ge\log8)$?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the exponential Markov bound for the supplied exponential moment only."}}
```

<details>
<summary>Hint 1</summary>

Apply Markov's inequality to the nonnegative variable $e^X$.

</details>

<details>
<summary>Hint 2</summary>

Exponentiation is increasing, so translate the event threshold before inserting the given moment.

</details>

<details>
<summary>Worked solution</summary>

Transform the event into an exponential threshold event.

1. The variable $Y=e^X$ is nonnegative and integrable, with mean four.
2. Monotonicity gives $\{X\ge\log8\}=\{Y\ge8\}$.
3. Markov gives probability at most $E[Y]/8=4/8=1/2$. This is a bound and does not determine the exact tail probability.

The transformed threshold is eight, giving upper bound $1/2$.

</details>
