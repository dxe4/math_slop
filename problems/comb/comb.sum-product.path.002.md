# Workshops under unequal sessions

*Easy · [Combinatorics](index.md)*

Select one session and one workshop offered in that session. Session P offers one workshop, Q offers four, and R offers two. How many session–workshop choices exist?

```answer
{"answer":{"kind":"integer","expected":7,"checker_scope":"Exact finite structured answer for sum-nonuniform-extensions; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Count complete choices under each session.

</details>

<details>
<summary>Hint 2</summary>

Every workshop belongs only to its named session.

</details>

<details>
<summary>Worked solution</summary>

Use actual branch counts when extensions are nonuniform.

1. The three session branches have $1,4,2$ outcomes.
2. Add their sizes: $1+4+2=7$.

</details>
