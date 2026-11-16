# Equality in a binary joint law

*Easy · [Probability problems](index.md)*

The joint law of binary variables $X,Y$ is $P(X=0,Y=0)=1/4$, $P(X=0,Y=1)=1/4$, $P(X=1,Y=0)=1/8$ and $P(X=1,Y=1)=3/8$. Find $P(X=Y)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":5,"denominator":8},"checker_scope":"Checks the equality-event probability from the given joint table only."}}
```

<details>
<summary>Hint 1</summary>

Identify which joint-table cells satisfy equality.

</details>

<details>
<summary>Hint 2</summary>

The corresponding joint outcomes are disjoint; add their supplied masses without multiplying marginals.

</details>

<details>
<summary>Worked solution</summary>

Sum the diagonal joint masses.

1. The four supplied nonnegative masses sum to one, so the joint table is a complete probability law.
2. Equality occurs precisely at $(0,0)$ and $(1,1)$.
3. The disjoint masses add to $1/4+3/8=2/8+3/8=5/8$. No independence is assumed or needed.

The two diagonal masses sum to $5/8$.

</details>
