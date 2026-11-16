# Recover two signed positions from distances

*Hard · [Foundations bridge](index.md)*

Two integers lie on opposite sides of zero and are $14$ units apart. The positive integer is $4$ units farther from zero than the negative integer. Find the negative integer.

```answer
{"answer":{"kind":"integer","expected":"-5","checker_scope":"Exact requested bounded result only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

The two nonnegative distances from zero add to the total separation.

</details>

<details>
<summary>Hint 2</summary>

Remove the extra four units from the larger distance; the remaining separation consists of two equal smaller distances.

</details>

<details>
<summary>Worked solution</summary>

Opposite signs turn endpoint separation into a sum of two distances.

1. Let the negative integer have distance p from zero. The positive one then has distance p+4.
2. The separation gives $p+(p+4)=14$, so $2p=10$ and p=5.
3. The negative integer is $-5$; the other is nine, and their separation is fourteen.

</details>
