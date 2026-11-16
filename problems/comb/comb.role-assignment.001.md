# Fill two different jobs

*Easy · [Combinatorics](index.md)*

Four distinct volunteers A, B, C, D are available. Choose one chair and one recorder. The same person may not fill both roles. How many role assignments are possible?

```answer
{"answer":{"kind":"integer","expected":12,"checker_scope":"Exact finite count for the explicitly stated outcome model; no general proof claim."}}
```

<details>
<summary>Hint 1</summary>

Choose the chair first.

</details>

<details>
<summary>Hint 2</summary>

After choosing a chair, only three volunteers remain for recorder.

</details>

<details>
<summary>Worked solution</summary>

Distinct roles produce ordered selections with a shrinking choice set.

1. There are four choices for chair.
2. Each chair choice has three recorder choices, giving $4 \times  3 = 12$ assignments.

</details>
