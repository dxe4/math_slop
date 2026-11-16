# Floor divisor pairs twelve

*Medium · [Original Putnam-style training](index.md)*

Evaluate $\sum_{k=1}^{12}\lfloor12/k\rfloor$ by interpreting it as a count of ordered positive-integer pairs.

```answer
{"answer":{"kind":"integer","expected":"35","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Count pairs $(k,j)$ with $kj\le12$.

</details>

<details>
<summary>Hint 2</summary>

Group the contributions where $k=1,2,3,4$, then the remaining values.

</details>

<details>
<summary>Worked solution</summary>

Adding the four larger values, two twos, and six ones gives $25+4+6=35$.

1. For fixed $k$, $\lfloor12/k\rfloor$ counts positive $j$ with $kj\le12$, so the sum counts all such ordered pairs.
2. The values for $k=1,\ldots,12$ are $12,6,4,3,2,2,1,1,1,1,1,1$.
3. Adding the four larger values, two twos, and six ones gives $25+4+6=35$.

</details>
