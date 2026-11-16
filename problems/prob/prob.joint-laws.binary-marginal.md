# Sum a joint law into a marginal

*Easy · [Probability problems](index.md)*

For $X,Y\in\{0,1\}$, the joint masses at $(0,0),(0,1),(1,0),(1,1)$ are respectively $1/2,1/4,1/8,1/8$. Find $P(X=1)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The requested event allows both possible values of the other coordinate.

</details>

<details>
<summary>Hint 2</summary>

Add the relevant joint masses rather than multiplying marginals.

</details>

<details>
<summary>Worked solution</summary>

Marginalization sums over the unobserved coordinate.

1. The event $X=1$ consists of $(1,0)$ and $(1,1)$.
2. Their masses are $1/8$ and $1/8$.
3. The marginal probability is $1/4$.

</details>
