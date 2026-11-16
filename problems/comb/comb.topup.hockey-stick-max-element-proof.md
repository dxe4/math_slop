# Prove a binomial sum by the largest selected element

*Hard · [Combinatorics](index.md)*

For integers $n\ge k\ge0$, prove the identity sum from j=k to n of binomial(j,k) equals binomial(n+1,k+1), by classifying subsets by their largest element.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Count (k+1)-element subsets of {1,...,n+1}.

</details>

<details>
<summary>Hint 2</summary>

If the largest element is j+1, all other k elements lie among the first j positions.

</details>

<details>
<summary>Model proof</summary>

Largest-element classes give disjoint Pascal-type cases without algebraic cancellation.

1. Consider all (k+1)-element subsets of the set one through n+1. Their total count is the right-hand binomial coefficient.
2. For each possible largest element j+1, where k&lt;=j&lt;=n, choose the remaining k elements from the first j elements, giving binomial(j,k) possibilities.
3. Every subset has exactly one largest element, so adding these disjoint classes proves the identity, including k=0 when each class is a singleton subset.

**Self-assessment rubric**

- Specify the family counted by the right side.
- Identify the allowed largest elements and each case count.
- Justify disjointness, exhaustion and the boundary k=0.

</details>
