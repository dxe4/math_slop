# At least one zero in a ternary word

*Medium · [Combinatorics](index.md)*

A length-three word uses symbols $0,1,2$, with repetition allowed and positions recorded. How many words contain at least one $0$?

```answer
{"answer":{"kind":"integer","expected":19,"checker_scope":"Exact finite structured answer for subtract-words-avoiding-a-symbol; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Every position has three choices in the full universe.

</details>

<details>
<summary>Hint 2</summary>

A word with no $0$ uses only $1$ and $2$.

</details>

<details>
<summary>Worked solution</summary>

Avoidance is the complement of at least one occurrence.

1. All words number $3^{3}=27$; words avoiding $0$ number $2^{3}=8$.
2. Subtract to get $27-8=19$.

</details>
