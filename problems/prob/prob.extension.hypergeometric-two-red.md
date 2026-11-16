# Exactly two red balls

*Medium · [Probability problems](index.md)*

A box contains $3$ red and three blue distinct balls. Three balls are sampled successively, uniformly from those remaining after each draw, without replacement. Find the probability of exactly two red balls.

```answer
{"answer":{"kind":"rational","expected":{"numerator":9,"denominator":20},"checker_scope":"Checks the exact probability under uniform sampling without replacement only."}}
```

<details>
<summary>Hint 1</summary>

Ignore the order of the three sampled balls after establishing that all three-ball subsets are equally likely.

</details>

<details>
<summary>Hint 2</summary>

A favourable subset has a red pair and a blue singleton. Count those choices separately before dividing by the total subset count.

</details>

<details>
<summary>Worked solution</summary>

Use a hypergeometric count on equally likely subsets.

1. Every ordered sample has probability $1/(6\cdot5\cdot4)$; each three-ball subset has $3!$ orders. Thus all $\binom63=20$ subsets are equally likely.
2. Exactly two red balls can be selected in $\binom32$ ways, and the blue singleton in $\binom31$ ways, giving $3\cdot3=9$ favourable subsets.
3. The probability is $\binom32\binom31/\binom63=9/20$. The distinct colours do not make the successive draws independent.

Nine favourable subsets among twenty equally likely subsets give probability $9/20$.

</details>
