# A Chebyshev deviation bound

*Easy · [Probability problems](index.md)*

A square-integrable variable has $\operatorname{Var}(X)=4$. What upper bound does Chebyshev's inequality give for $P(|X-E[X]|\ge4)$?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks the numerical Chebyshev upper bound only; it does not assert equality."}}
```

<details>
<summary>Hint 1</summary>

Chebyshev uses variance divided by the squared deviation threshold.

</details>

<details>
<summary>Hint 2</summary>

Square the threshold before inserting the variance.

</details>

<details>
<summary>Worked solution</summary>

Apply Markov's inequality to the squared centred variable.

1. The nonnegative variable $(X-E[X])^2$ has expectation four.
2. The event $|X-E[X]|\ge4$ is equivalent to $(X-E[X])^2\ge16$.
3. Markov therefore gives a bound $4/16=1/4$, which is Chebyshev's inequality here.

The upper bound is $4/4^2=1/4$.

</details>
