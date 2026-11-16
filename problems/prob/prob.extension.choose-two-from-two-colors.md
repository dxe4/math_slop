# One card of each colour

*Easy · [Probability problems](index.md)*

Choose $1$ red card from three distinct red cards and one blue card from two distinct blue cards. How many two-card selections are possible?

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Checks the count of selections containing one card of each colour only."}}
```

<details>
<summary>Hint 1</summary>

Separate the red-card choice from the blue-card choice.

</details>

<details>
<summary>Hint 2</summary>

Each red choice can be paired with every blue choice; count those pairs without identifying different cards.

</details>

<details>
<summary>Worked solution</summary>

Colour distinguishes the two roles in each selection.

1. There are three possible red cards.
2. For each red card there are two possible blue partners. These are counts of choices, not a claim of probabilistic independence.
3. The product rule gives $3\cdot2=6$ selections. Each is counted once because its red and blue members have different colours.

Each of three red choices has two blue partners, giving $6$ selections.

</details>
