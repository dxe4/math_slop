# Find the directed cycle

*Medium · [Discrete mathematics](index.md)*

Arrows are $1\to 2,2\to 3,3\to 1,3\to 4$. Which sequence certifies a directed cycle? Select the mathematically correct statement from the four alternatives.

**Options**

1. $1,3,2,1$.
2. $1,2,3,1$.
3. $1,2,3,4,1$.
4. $2,1,3,2$.

```answer
{"answer":{"kind":"multiple_choice","expected":"value_1_2_3_1","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["value_1_3_2_1","value_1_2_3_1","value_1_2_3_4","value_2_1_3_2"]}
```

<details>
<summary>Hint 1</summary>

Follow every arrow in its stated direction.

</details>

<details>
<summary>Hint 2</summary>

Check the closing arrow as well.

</details>

<details>
<summary>Worked solution</summary>

Topological orders place each arrow source before its target. A directed cycle certifies that no such order can exist.

1. The supplied arrows include $1\to2$, $2\to3$, and $3\to1$.
2. The sequence $1,2,3,1$ therefore follows directed edges and returns to its start, certifying a directed cycle.
3. A topological order would have to put $1$ before $2$, $2$ before $3$, and $3$ before $1$, which is impossible.

</details>
