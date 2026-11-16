# Exactly one head from different coins

*Medium · [Probability problems](index.md)*

Two coins are tossed independently. Their head probabilities are $1/2$ and $1/3$, respectively. Find the probability of exactly one head.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the exact probability for the two independent nonidentical coins only."}}
```

<details>
<summary>Hint 1</summary>

Exactly one head has two disjoint ordered cases.

</details>

<details>
<summary>Hint 2</summary>

For each case, multiply the appropriate head and tail probabilities; add only after finding both case probabilities.

</details>

<details>
<summary>Worked solution</summary>

Independence applies within each ordered case, while disjointness allows adding the cases.

1. First head and second tail has probability $(1/2)(1-1/3)=1/3$.
2. First tail and second head has probability $(1-1/2)(1/3)=1/6$.
3. The cases are disjoint and exhaustive for exactly one head, so their sum is $1/3+1/6=1/2$.

The two disjoint ordered cases have probabilities $1/3$ and $1/6$, summing to $1/2$.

</details>
