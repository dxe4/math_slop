# The first marked card is third

*Medium · [Probability problems](index.md)*

$5$ distinct cards, exactly two marked, are placed in a uniformly random order. Find the probability that the first marked card appears in position three.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":5},"checker_scope":"Checks the exact first-mark position probability under a uniform random ordering only."}}
```

<details>
<summary>Hint 1</summary>

Describe the event in terms of the two marked positions.

</details>

<details>
<summary>Hint 2</summary>

All two-position subsets are equally likely. Require their smaller member to be the prescribed first marked position.

</details>

<details>
<summary>Worked solution</summary>

Count possible marked-position subsets.

1. The two marked cards occupy a uniformly distributed two-element subset of the five positions: each subset has $2!3!$ compatible permutations.
2. There are $\binom52=10$ such subsets. The first marked position is three exactly for $\{3,4\}$ or $\{3,5\}$.
3. The probability is $2/10=1/5$. Sequentially this is also $(3/5)(2/4)(2/3)$, since the first two cards must be unmarked and the third marked.

Two of the ten equally likely marked-position subsets have minimum three, so the probability is $1/5$.

</details>
