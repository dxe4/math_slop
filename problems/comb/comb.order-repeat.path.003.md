# Forget the order of two color records

*Easy · [Combinatorics](index.md)*

Two positions independently record R, G, or B, and repeated colors are allowed. The nine ordered records are RR, RG, RB, GR, GG, GB, BR, BG, BB. Count ordered records and unordered records obtained by identifying each record with its reversal. Enter ordered and unordered.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"ordered":9,"unordered":6},"checker_scope":"Exact finite structured answer for compare-ordered-and-unordered-records; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Same-color records stay single when reversed.

</details>

<details>
<summary>Hint 2</summary>

Each mixed-color record merges with its reverse.

</details>

<details>
<summary>Worked solution</summary>

Forgetting order need not merge every outcome in equally sized groups.

1. There are nine listed ordered records.
2. The unordered records are RR, GG, BB, RG/GR, RB/BR, GB/BG, giving six.

</details>
