# One book from either shelf

*Easy · [Combinatorics](index.md)*

Choose exactly one book. Five distinct books are on shelf L and two other distinct books are on shelf R. No book occurs on both shelves. How many choices are there?

```answer
{"answer":{"kind":"integer","expected":7,"checker_scope":"Exact finite structured answer for add-disjoint-alternatives; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

A choice is a single book, not a pair.

</details>

<details>
<summary>Hint 2</summary>

The two lists are disjoint.

</details>

<details>
<summary>Worked solution</summary>

Add disjoint single-choice alternatives.

1. There are five choices from L and two from R.
2. The disjoint alternatives total $5+2=7$.

</details>
