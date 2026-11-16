# Recover a population size from an updated proportion

*Hard · [Statistics and probability](index.md)*

Initially a group has $N$ people, with exactly $2/5$ answering yes. Six new people, all answering yes, join. The yes proportion becomes $1/2$. Find the original positive integer N.

```answer
{"answer":{"kind":"integer","expected":"30","checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Write the new yes count and new total using the same unknown N.

</details>

<details>
<summary>Hint 2</summary>

Cross-multiply the equation relating the updated fraction to one half.

</details>

<details>
<summary>Worked solution</summary>

The proportion update determines the original total.

1. The new yes count is $2N/5+6$ and the new total is $N+6$.
2. The equation $2(2N/5+6)=N+6$ simplifies to $N/5=6$.
3. Thus $N=30$; initially twelve say yes, and afterward eighteen of thirty-six do.

</details>
