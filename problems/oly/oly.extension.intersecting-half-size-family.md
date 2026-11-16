# Use complementary pairs for a sharp intersecting-family bound

*Hard · [Original olympiad-style problems](index.md)*

What is the largest size of a pairwise-intersecting family of three-element subsets of a fixed $6$-element set?

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Exact requested finite count, sharp bound or declared move vector only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Pair every three-element subset with its complement.

</details>

<details>
<summary>Hint 2</summary>

For attainment, force every chosen subset to contain one common designated element.

</details>

<details>
<summary>Worked solution</summary>

A complementary-pair obstruction and a common-element construction give the same sharp bound.

1. The twenty three-element subsets form ten complementary pairs. Both members of any such pair are disjoint, so an intersecting family contains at most one from each pair.
2. This gives an upper bound of ten.
3. The family of all three-element subsets containing one fixed element has binomial(5,2)=10 members and is pairwise intersecting, proving sharpness.

</details>
