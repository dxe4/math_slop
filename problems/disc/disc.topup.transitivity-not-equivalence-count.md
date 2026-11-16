# Count assignments where a sufficient condition is stronger

*Hard · [Discrete mathematics](index.md)*

For Boolean variables p,q,r, let $F=(p\Rightarrow q)\land(q\Rightarrow r)$ and $G=(p\Rightarrow r)$. How many of the eight truth assignments give F and G different values?

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact finite truth-assignment count only; not a verdict on arbitrary logical arguments or a new checkpoint objective."}}
```

<details>
<summary>Hint 1</summary>

Split the assignments according to whether p is false or true.

</details>

<details>
<summary>Hint 2</summary>

F implies G, but G can still be true when one of the two implications in F fails.

</details>

<details>
<summary>Worked solution</summary>

Two cases reduce the truth-table count and distinguish implication from equivalence.

1. When p is false, G is true and F equals q implies r. They disagree only when q is true and r false.
2. When p is true, G equals r and F equals q and r. They disagree only when q is false and r true.
3. The two disjoint cases give exactly $2$ assignments.

</details>
