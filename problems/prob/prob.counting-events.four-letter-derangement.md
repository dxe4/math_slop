# Avoid every fixed point

*Hard · [Probability problems](index.md)*

A permutation of four labelled objects is chosen uniformly from all $4!$ possibilities. Find the probability that no object remains in its original position.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":8},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use inclusion-exclusion on events that a specified position is fixed.

</details>

<details>
<summary>Hint 2</summary>

Fixing a chosen set of positions leaves an arbitrary permutation of the remaining positions.

</details>

<details>
<summary>Worked solution</summary>

Inclusion-exclusion counts permutations with no fixed positions.

1. There are $4!=24$ equally likely permutations.
2. The number with no fixed point is $4!-\binom41 3!+\binom42 2!-\binom43 1!+\binom44 0!$.
3. This equals $24-24+12-4+1=9$.
4. The required probability is $9/24=3/8$.

</details>
