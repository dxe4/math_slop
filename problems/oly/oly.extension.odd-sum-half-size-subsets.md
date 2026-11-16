# Pair subsets by reflecting their labels

*Medium · [Original olympiad-style problems](index.md)*

How many five-element subsets of $\{1,2,\ldots,10\}$ have odd element sum?

```answer
{"answer":{"kind":"integer","expected":"126","checker_scope":"Exact requested finite count, sharp bound or declared move vector only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Reflect every label x to 11-x.

</details>

<details>
<summary>Hint 2</summary>

For a five-element set, compare its old sum with its reflected sum.

</details>

<details>
<summary>Worked solution</summary>

A size-preserving involution pairs the two sum parities.

1. There are binomial(10,5)=252 five-element subsets. Reflection x to 11-x sends a subset of sum s to one of sum 55-s, which has the opposite parity.
2. The reflection is its own inverse, giving a bijection between odd-sum and even-sum families.
3. They therefore have equal size, so the requested count is 126.

</details>
