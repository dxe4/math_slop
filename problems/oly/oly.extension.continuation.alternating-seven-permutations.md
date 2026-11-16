# Split an alternating permutation at its maximum

*Hard · [Original olympiad-style problems](index.md)*

How many permutations $a_1,\ldots,a_7$ satisfy $a_1<a_2>a_3<a_4>a_5<a_6>a_7$?

```answer
{"answer":{"kind":"integer","expected":"272","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The maximum can occur only at an even position.

</details>

<details>
<summary>Hint 2</summary>

The two remaining odd-length pieces are independently alternating after their label sets are chosen.

</details>

<details>
<summary>Worked solution</summary>

Build a short exact recurrence from the maximum location.

1. Let $E_j$ count alternating permutations of odd length j, with $E_1=1$. For length three the maximum is central, giving $E_3=2$.
2. For length five, the maximum at position two or four gives $E_5=\binom41E_1E_3+\binom43E_3E_1=16$.
3. For length seven, maximum positions two, four and six yield $\binom61E_1E_5$, $\binom63E_3E_3$, and $\binom65E_5E_1$.
4. The values are ninety-six, eighty and ninety-six, totaling 272. Choosing the left label set and both standardized pieces determines exactly one permutation, so no overcount remains.

</details>
