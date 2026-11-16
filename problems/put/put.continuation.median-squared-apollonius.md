# Median squared apollonius

*Medium · [Original Putnam-style training](index.md)*

A triangle has side lengths $AB=5$, $AC=7$, $BC=8$. If $M$ is the midpoint of $BC$, find $AM^2$.

```answer
{"answer":{"kind":"integer","expected":"21","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the median identity relating $AB^2+AC^2$ to $AM^2$ and $BM^2$.

</details>

<details>
<summary>Hint 2</summary>

Here $BM=4$.

</details>

<details>
<summary>Worked solution</summary>

Then $2AM^2=42$, so $AM^2=21$.

1. Apollonius’ identity gives $AB^2+AC^2=2AM^2+2BM^2$.
2. Substitute $25+49=2AM^2+2\cdot16$.
3. Then $2AM^2=42$, so $AM^2=21$.

</details>
