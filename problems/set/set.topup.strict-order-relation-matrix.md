# Represent a strict relation in a fixed matrix order

*Medium · [Set theory](index.md)*

On $\{1,2,3\}$ let xRy mean x&lt;y. Enter its zero-one relation matrix with rows and columns both ordered 1,2,3; an entry is one exactly when its row element is related to its column element.

```answer
{"answer":{"kind":"matrix","rows":3,"columns":3,"expected":[["0","1","1"],["0","0","1"],["0","0","0"]],"checker_scope":"Exact declared bounded result, explicit interval description or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Rows specify the first coordinate and columns the second.

</details>

<details>
<summary>Hint 2</summary>

The strict inequality excludes every diagonal pair and every backward pair.

</details>

<details>
<summary>Worked solution</summary>

A relation matrix preserves ordered-pair direction.

1. The first row has related columns two and three, so it is (0,1,1).
2. The second row has only related column three, so it is (0,0,1).
3. The final row is (0,0,0), since three is less than none of the domain values.

</details>
