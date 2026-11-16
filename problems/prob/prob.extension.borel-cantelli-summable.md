# Recall the first Borel–Cantelli conclusion

*Easy · [Probability problems](index.md)*

Events $(E_n)_{n\ge1}$ satisfy $\sum_{n=1}^{\infty}P(E_n)<\infty$. According to the first Borel–Cantelli lemma, what is $P(E_n\text{ infinitely often})$?

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Checks the named lemma's probability conclusion only; recalling it does not automatically establish a proof."}}
```

<details>
<summary>Hint 1</summary>

The first Borel–Cantelli lemma is the summable-probability direction.

</details>

<details>
<summary>Hint 2</summary>

Infinitely many occurrences require an occurrence after every finite cutoff; use the tail sum to bound each such tail union.

</details>

<details>
<summary>Worked solution</summary>

Summable event probabilities force the infinitely-often event to be null.

1. For every $N$, $\limsup_n E_n\subseteq\bigcup_{n\ge N}E_n$.
2. Countable subadditivity bounds its probability by $\sum_{n\ge N}P(E_n)$.
3. The tail sum tends to zero because the series converges. Hence the probability of infinitely many occurrences is zero, with no independence required.

Every tail union is bounded by a vanishing probability tail sum, so the infinitely-often probability is zero.

</details>
