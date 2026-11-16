# Count distinct top-level objects

*Medium · [Set theory](index.md)*

Treat numerals as atomic labels, not ordinal encodings. Let $S=\{\varnothing,\{\varnothing\},\{1\},1,\{1\},\varnothing\}$. How many elements does S have?

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact declared finite result, ordered representation or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Repetitions do not add elements to a set.

</details>

<details>
<summary>Hint 2</summary>

Do not open inner braces when counting top-level objects.

</details>

<details>
<summary>Worked solution</summary>

Equality and nesting must be handled before counting.

1. The repeated empty-set entry contributes only one object, and the repeated singleton {1} also contributes only one.
2. The distinct objects are the empty set, its singleton, the singleton of the label one, and the label one itself.
3. They are four different top-level objects, so $|S|=4$.

</details>
