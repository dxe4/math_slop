# Add branches of different sizes

*Easy · [Combinatorics](index.md)*

A festival ticket is one session together with one of that session’s workshops. Morning offers drawing and singing; afternoon offers clay, dance, and coding; evening offers poetry only. How many session–workshop tickets are available?

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact finite count for the explicitly stated outcome model; no general proof claim."}}
```

<details>
<summary>Hint 1</summary>

List the number of workshop choices under each session.

</details>

<details>
<summary>Hint 2</summary>

The branch sizes differ, so there is no single shared number of workshops to multiply by three.

</details>

<details>
<summary>Worked solution</summary>

For nonuniform branches, add each branch’s number of extensions.

1. Morning supplies $2$ tickets, afternoon supplies $3$, and evening supplies $1$.
2. Session labels keep these cases disjoint, so the total is $2 + 3 + 1 = 6$.

</details>
