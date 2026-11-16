# Success through either route

*Medium · [Probability problems](index.md)*

Exactly one route is chosen: $A$ with probability $1/4$, and $B$ otherwise. Conditional success probabilities are $P(S\mid A)=1/2$ and $P(S\mid B)=1/6$. Find $P(S)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks the total success probability for the stated route mixture only."}}
```

<details>
<summary>Hint 1</summary>

Split success according to the chosen route.

</details>

<details>
<summary>Hint 2</summary>

Weight each route's conditional success probability by its route probability, then add the disjoint contributions.

</details>

<details>
<summary>Worked solution</summary>

Apply total probability to the route partition.

1. The routes are exhaustive and disjoint, with $P(B)=1-1/4=3/4$.
2. The two joint success masses are $P(S\cap A)=(1/4)(1/2)=1/8$ and $P(S\cap B)=(3/4)(1/6)=1/8$.
3. Since these two events partition $S$, $P(S)=1/8+1/8=1/4$. An unweighted average would ignore the unequal route probabilities.

The weighted contributions are $1/8$ each, giving total success probability $1/4$.

</details>
