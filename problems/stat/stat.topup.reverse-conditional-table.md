# Calculate both directions of a conditional probability

*Medium · [Statistics and probability](index.md)*

A finite collection contains $6$ blue-striped, $9$ blue-plain, $4$ red-striped and $1$ red-plain tile. Choose one uniformly. Return blue\_given\_striped and striped\_given\_blue.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"blue_given_striped":"3/5","striped_given_blue":"2/5"},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Each conditioning event gets its own denominator.

</details>

<details>
<summary>Hint 2</summary>

The overlap count is six in both fractions.

</details>

<details>
<summary>Worked solution</summary>

Reversing a condition keeps the intersection but changes the reference group.

1. There are ten striped tiles, of which six are blue, giving $6/10=3/5$.
2. There are fifteen blue tiles, of which six are striped, giving $6/15=2/5$.
3. The two conditional probabilities differ because the conditioned group sizes differ.

</details>
