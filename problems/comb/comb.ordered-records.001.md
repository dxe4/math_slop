# Compare a string with an unordered pair

*Easy · [Combinatorics](index.md)*

Using the symbols A and B, make a length-two record with repetition allowed. Count the ordered strings. Then treat two records as the same whenever one is obtained by swapping their positions; count these unordered records. Enter ordered and unordered.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"ordered":4,"unordered":3},"checker_scope":"Exact finite count for the explicitly stated outcome model; no general proof claim."}}
```

<details>
<summary>Hint 1</summary>

Write all two-position strings first.

</details>

<details>
<summary>Hint 2</summary>

Only AB and BA become the same after order is forgotten.

</details>

<details>
<summary>Worked solution</summary>

Forgetting order groups outcomes, and the group sizes need not be equal.

1. The ordered strings are AA, AB, BA, BB: four.
2. Forgetting position identifies AB with BA but leaves AA and BB separate, giving AA, {A,B}, BB: three.

</details>
