# Normalise three atomic masses

*Easy · [Probability problems](index.md)*

A law supported on exactly three distinct points assigns them masses $k,2k,2k$. Find $k$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":5},"checker_scope":"Checks the normalising constant for these three masses only."}}
```

<details>
<summary>Hint 1</summary>

The masses of all support points must add to one.

</details>

<details>
<summary>Hint 2</summary>

Combine their coefficients of $k$ and solve the resulting linear equation; check nonnegativity.

</details>

<details>
<summary>Worked solution</summary>

Probability normalisation determines the common factor.

1. There is no probability outside the three support points, so their total mass is $k+2k+2k=5k$.
2. A probability law has total mass one, hence $5k=1$ and $k=1/5$.
3. The resulting masses $1/5,2/5,2/5$ are nonnegative and sum to one, so this normalisation is valid.

The equation $5k=1$ gives $k=1/5$.

</details>
