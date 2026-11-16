# Median breakdown five

*Medium · [Statistics and probability](index.md)*

Five real observations initially all equal $0$. Prove that replacing any two observations by arbitrary real values leaves the median $0$, whereas replacing three observations by the same value $M>0$ makes the median arbitrarily large as $M\to\infty$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Express the median as the third order statistic and count how many entries can lie strictly below or above zero after two replacements.

</details>

<details>
<summary>Hint 2</summary>

For the second case, order the two unchanged zeros and the three equal replacements.

</details>

<details>
<summary>Model proof</summary>

The median can leave the original value without bound only when replacements control the middle order position.

1. After two replacements at least three zeros remain. There can be at most two values below $0$ and at most two above $0$, so the third order statistic is $0$.
2. After three replacements by $M>0$, the ordered list is $0,0,M,M,M$.
3. Its third order statistic is $M$, which has no finite upper bound as $M\to\infty$. This proves the stated replacement threshold for the all-zero starting sample.

**Self-assessment rubric**

- Identify the median as the third order statistic.
- Bound the numbers strictly above and below zero for all two-replacement values.
- Construct the ordered sample with three equal replacements and let their value grow.

</details>
