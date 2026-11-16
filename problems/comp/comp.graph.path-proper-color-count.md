# Count named-color assignments along a path

*Easy · [Computational arithmetic problems](index.md)*

For a path on $6$ labeled vertices, use P(q)=q(q-1)^5 for the number of proper colorings with q available named colors. Find P(4).

```answer
{"answer":{"kind":"integer","expected":"972","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The first vertex has every color available.

</details>

<details>
<summary>Hint 2</summary>

Each subsequent vertex excludes only its immediate predecessor color.

</details>

<details>
<summary>Worked solution</summary>

The path coloring product counts assignments of named colors, not colorings modulo renaming.

1. At q=4 the formula is four times three to the fifth power.
2. The fifth power is 243.
3. Thus there are 972 proper named-color assignments.

</details>
