# Count tree extensions of a prescribed forest

*Hard · [Original olympiad-style problems](index.md)*

A fixed labeled forest on $12$ vertices has three components of sizes $2,3,7$. How many labeled trees on the same vertices contain every forest edge?

```answer
{"answer":{"kind":"integer","expected":"504","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Contract the forest components; any extension adds a tree on the three component labels.

</details>

<details>
<summary>Hint 2</summary>

An edge between component labels has as many endpoint choices as the product of the two component sizes.

</details>

<details>
<summary>Worked solution</summary>

Use a weighted small-tree count with fixed internal edges.

1. An extension must add exactly two edges joining the three components in a tree. No added edge can stay inside one component without creating a cycle.
2. For a component-tree path whose middle component has size s, endpoint choices multiply to the product of all three sizes times s, because its middle component supplies two endpoints.
3. The three possible middle sizes are two, three and seven. Hence the count is $(2\cdot3\cdot7)(2+3+7)=42\cdot12=504$.
4. Every choice gives a distinct labeled tree, since contraction and the added endpoints recover it uniquely. This is an exact forest-extension count rather than a free-tree formula applied to uncontracted vertices.

</details>
