# A variance-based deviation bound at one index

*Easy · [Probability problems](index.md)*

For each $n\ge1$, a square-integrable variable $X_n$ has mean zero and variance $1/n$. What Chebyshev upper bound applies to $P(|X_n|\ge1/2)$ at $n=16$?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks this Chebyshev bound at index sixteen only; convergence reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The stated zero mean makes the absolute value a centred deviation.

</details>

<details>
<summary>Hint 2</summary>

Divide the given variance at the requested index by the squared threshold.

</details>

<details>
<summary>Worked solution</summary>

Insert the index-dependent variance into Chebyshev's inequality.

1. At $n=16$, the variance is $1/16$ and the centred threshold is $1/2$.
2. Chebyshev gives $P(|X_{16}|\ge1/2)\le(1/16)/(1/2)^2$.
3. The upper bound is $(1/16)/(1/4)=1/4$. It is a bound, not an assertion that the probability equals this number.

Chebyshev gives the upper bound $1/4$.

</details>
