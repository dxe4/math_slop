# Track parts through a transfer between ratio mixtures

*Hard · [Foundations bridge](index.md)*

Each of two boxes contains $25$ counters. In the first box red:blue is $2:3$; in the second it is $3:2$. Move every red counter from the first box into the second. What fraction of the counters now in the second box are red?

```answer
{"answer":{"kind":"rational","expected":{"numerator":5,"denominator":7},"checker_scope":"Exact requested bounded result only. The worked reasoning is not automatically certified, and this draft adds no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

Use each original ratio with its own box total.

</details>

<details>
<summary>Hint 2</summary>

After the transfer, update both the red count and the total count of the receiving box.

</details>

<details>
<summary>Worked solution</summary>

A transfer changes the receiving total as well as its color count.

1. The first box has $25\cdot2/5=10$ red counters. The second originally has $25\cdot3/5=15$ red and $10$ blue.
2. After the transfer the second has $25$ red and $10$ blue, totaling $35$.
3. The red fraction is $25/35=5/7$.

</details>
