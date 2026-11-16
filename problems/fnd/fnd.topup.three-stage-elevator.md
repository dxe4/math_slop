# Track several signed changes

*Medium · [Foundations bridge](index.md)*

An elevator starts on level $-3$. It moves up $7$ levels, down $12$ and up $4$. What is its final level?

```answer
{"answer":{"kind":"integer","expected":"-4","checker_scope":"Exact requested bounded result only. The worked reasoning is not automatically certified, and this draft adds no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

Upward changes are positive and downward changes are negative.

</details>

<details>
<summary>Hint 2</summary>

Keep the starting coordinate when combining the three changes.

</details>

<details>
<summary>Worked solution</summary>

Signed addition tracks the endpoint through each change.

1. After the first move the level is $-3+7=4$.
2. The downward move reaches $4-12=-8$.
3. The last move reaches $-8+4=-4$.

</details>
