# Evaluate a union bound

*Easy · [Probability problems](index.md)*

Events have probabilities $P(E_1)=1/10$, $P(E_2)=1/5$ and $P(E_3)=1/4$. Using the union bound $P(\bigcup_{i=1}^3E_i)\le\sum_{i=1}^3P(E_i)$, find its numerical upper bound.

```answer
{"answer":{"kind":"rational","expected":{"numerator":11,"denominator":20},"checker_scope":"Checks the stated union-bound value, not an exact probability or a claim of independence."}}
```

<details>
<summary>Hint 1</summary>

The requested number is the right-hand side of the supplied inequality.

</details>

<details>
<summary>Hint 2</summary>

Add the supplied probabilities using a common denominator; no intersection probabilities are required.

</details>

<details>
<summary>Worked solution</summary>

A union bound is an upper estimate that needs no independence.

1. The supplied inequality bounds the union by the sum of the three event probabilities.
2. That sum is $1/10+1/5+1/4=2/20+4/20+5/20$.
3. Hence $P(E_1\cup E_2\cup E_3)\le11/20$. Equality need not hold when events overlap.

The sum $1/10+1/5+1/4=11/20$ is an upper bound, not an exact union probability in general.

</details>
