# At least one 1

*Medium · [Combinatorics](index.md)*

A length-four binary word uses $0$ or $1$ independently in each position. How many words contain at least one $1$?

```answer
{"answer":{"kind":"integer","expected":15,"checker_scope":"Exact finite structured answer for subtract-words-avoiding-a-symbol; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Count all words, then count those with no $1$.

</details>

<details>
<summary>Hint 2</summary>

There is only one all-zero word.

</details>

<details>
<summary>Worked solution</summary>

Subtract the simpler no-occurrence family.

1. There are $2^4=16$ words in the universe.
2. Only $0000$ is forbidden, leaving $16-1=15$.

</details>
