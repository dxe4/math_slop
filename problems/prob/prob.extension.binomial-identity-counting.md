# Count all subsets in two ways

*Medium · [Probability problems](index.md)*

For every integer $n\ge0$, prove $\sum_{k=0}^n\binom nk=2^n$ by counting the subsets of an $n$-element set in two ways.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Partition the collection of all subsets according to subset size.

</details>

<details>
<summary>Hint 2</summary>

For the second count, encode each subset by one include-or-exclude decision for each element, including the empty-set case.

</details>

<details>
<summary>Model proof</summary>

Identify two exact counts of the same finite collection.

1. Let $S$ have $n$ elements. For each $k$ there are $\binom nk$ subsets of size $k$. The size classes are disjoint and exhaustive, so the total number of subsets is $\sum_{k=0}^n\binom nk$.
2. Each subset corresponds bijectively to a length-$n$ binary membership word: entry one means include the corresponding element. There are two choices for each entry, giving $2^n$ words by the product rule.
3. Equating the counts proves the identity. When $n=0$, the sole subset is the empty set and the empty membership word is unique, so both counts are one. This is a combinatorial choice count, with no probabilistic independence assumption needed.

The size partition gives $\sum_k\binom nk$ subsets; binary membership gives $2^n$; these count the same collection.

**Self-assessment rubric**

- Count subsets using disjoint and exhaustive size classes, including sizes zero and $n$.
- Explain the bijection between subsets and binary membership words.
- Equate the two counts and retain the $n=0$ case.

</details>
