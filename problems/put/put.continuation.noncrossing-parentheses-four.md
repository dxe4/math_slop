# Noncrossing parentheses four

*Medium · [Original Putnam-style training](index.md)*

How many words with four $($ and four $)$ symbols have every prefix containing at least as many $($ as $)$?

```answer
{"answer":{"kind":"integer","expected":"14","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Count all balanced words, then reflect the first prefix that falls below zero.

</details>

<details>
<summary>Hint 2</summary>

Reflect the prefix through the first negative height; this produces five opening and three closing symbols.

</details>

<details>
<summary>Worked solution</summary>

The valid count is $70-56=14$.

1. All words with four of each symbol number $\binom84=70$.
2. Reflection of the prefix through the first negative height bijects bad balanced words with words having five opening and three closing symbols, counted by $\binom85=56$.
3. The valid count is $70-56=14$.

</details>
