# Remove duplicate words after forgetting labels

*Medium · [Combinatorics](index.md)*

Three labeled tokens $R_1,R_2,B$ are placed in a row. Then erase the subscripts and record only the color word. Return labeled\_orders and distinct\_color\_words.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"labeled_orders":"6","distinct_color_words":"3"},"checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Count all orders before erasing information.

</details>

<details>
<summary>Hint 2</summary>

Swapping the two red labels leaves the same recorded word.

</details>

<details>
<summary>Worked solution</summary>

Indistinguishable observations merge pairs of labeled outcomes.

1. There are six permutations of the three labeled tokens.
2. Every color word has two labeled preimages, from exchanging the two red labels.
3. The distinct color words are RRB, RBR and BRR, so the counts are six and three.

</details>
