# Draw both special cards

*Medium · [Probability problems](index.md)*

Among $5$ distinct cards, exactly two are special. Draw one card uniformly and then draw a second uniformly from the four remaining cards. Find the probability that both are special.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":10},"checker_scope":"Checks the exact probability under sequential uniform sampling without replacement only."}}
```

<details>
<summary>Hint 1</summary>

An unordered two-card hand is a useful sample outcome.

</details>

<details>
<summary>Hint 2</summary>

Explain why every hand has the same probability, then compare the favourable hands with all hands.

</details>

<details>
<summary>Worked solution</summary>

Uniform sequential sampling induces a uniform distribution on unordered pairs.

1. Each ordered pair of distinct cards has probability $1/(5\cdot4)$. Every unordered pair has two possible orders, so all such pairs are equally likely.
2. There are $\binom52=10$ unordered hands, and exactly one consists of the two special cards.
3. The probability is therefore $1/10$. Equivalently, the conditional product is $(2/5)(1/4)$, not $(2/5)^2$, because there is no replacement.

One of the ten equally likely two-card hands contains both special cards, giving probability $1/10$.

</details>
