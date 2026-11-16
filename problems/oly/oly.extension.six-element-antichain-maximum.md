# Bound an antichain by counting permutation chains

*Hard · [Original olympiad-style problems](index.md)*

What is the largest size of a family of subsets of a fixed $6$-element set in which no member is a proper subset of another?

```answer
{"answer":{"kind":"integer","expected":"20","checker_scope":"Exact requested finite count, sharp bound or declared move vector only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

A permutation gives a chain of its successive initial subsets.

</details>

<details>
<summary>Hint 2</summary>

An antichain can meet any one such chain at most once.

</details>

<details>
<summary>Worked solution</summary>

A chain-counting inequality gives the sharp central-binomial bound.

1. A k-element subset occurs as an initial segment set in k! times (6-k)! of the 6! permutations. Since an antichain meets each resulting chain at most once, its members satisfy the sum of 1/binomial(6,k) at most one.
2. Every binomial coefficient in row six is at most twenty, so each summand is at least one twentieth and the family has at most twenty members.
3. All twenty three-element subsets form an antichain, attaining the bound.

</details>
