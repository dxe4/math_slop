# Collect a count described in grouped language

*Medium · [Foundations bridge](index.md)*

There are n identical kits. Each kit has $3$ bags containing $4$ counters each, plus $5$ loose counters. The total number of counters is cn for every whole number n. Find c.

```answer
{"answer":{"kind":"integer","expected":"17","checker_scope":"Exact requested bounded result only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

Find the number in one complete kit, keeping bags and counters distinct.

</details>

<details>
<summary>Hint 2</summary>

Every kit has the same contribution, which becomes the multiplier of n.

</details>

<details>
<summary>Worked solution</summary>

Equal grouped contributions produce one common coefficient.

1. The bagged counters per kit number $3\cdot4=12$.
2. Adding the five loose counters gives $17$ per kit.
3. The total is $12n+5n=17n$, so $c=17$.

</details>
