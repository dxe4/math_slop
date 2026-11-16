# Four podium places

*Medium · [Combinatorics](index.md)*

Six distinct runners finish without ties. Count possible ordered lists of the first four finishers; each runner appears at most once.

```answer
{"answer":{"kind":"integer","expected":360,"checker_scope":"Exact finite structured answer for count-ordered-partial-selection; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

First through fourth are distinguished positions.

</details>

<details>
<summary>Hint 2</summary>

There are fewer remaining runners at every successive position.

</details>

<details>
<summary>Worked solution</summary>

Distinguished positions keep the order of a partial selection.

1. The choices for the positions are $6,5,4,3$.
2. There are $6\times 5\times 4\times 3=360$ ordered lists.

</details>
