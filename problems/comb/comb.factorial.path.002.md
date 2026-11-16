# The empty ordering

*Easy · [Combinatorics](index.md)*

A shelf contains no books. An ordering records the full left-to-right sequence of all books. How many complete orderings exist?

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact finite structured answer for recognize-single-empty-order; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

An empty sequence is still a sequence.

</details>

<details>
<summary>Hint 2</summary>

Count possible sequences, rather than the number of objects in a sequence.

</details>

<details>
<summary>Worked solution</summary>

The empty structure can be a single valid outcome.

1. There is exactly one record with no entries: the empty sequence.
2. Thus the count is $1$, agreeing with $0!=1$.

</details>
