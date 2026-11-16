# Invert a strictly increasing distribution function

*Medium · [Probability problems](index.md)*

A distribution has CDF $F(t)=t^3$ for $0\le t\le1$, with values $0$ below that interval and $1$ above it. Find the unique $q\in[0,1]$ with $P(X\le q)=1/8$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Translate the desired cumulative probability into an equation for the distribution function.

</details>

<details>
<summary>Hint 2</summary>

Use the increasing branch within the specified support.

</details>

<details>
<summary>Worked solution</summary>

A quantile inverts the cumulative distribution on its increasing interval.

1. The condition is $F(q)=q^3=1/8$.
2. The solution within $[0,1]$ is $q=1/2$.
3. Strict monotonicity of the cube on this interval guarantees uniqueness.

</details>
