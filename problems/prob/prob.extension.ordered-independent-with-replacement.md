# Three draws with replacement

*Easy · [Probability problems](index.md)*

Draw $3$ times independently with replacement from four labels, each label having positive probability on each draw. How many ordered triples are possible?

```answer
{"answer":{"kind":"integer","expected":"64","checker_scope":"Checks the number of possible ordered outcomes only; uniform draw probabilities are not required."}}
```

<details>
<summary>Hint 1</summary>

Keep all three positions, including repeated labels.

</details>

<details>
<summary>Hint 2</summary>

Replacement leaves the same number of label choices at each position. Apply the product rule across positions.

</details>

<details>
<summary>Worked solution</summary>

Count words of length three over a four-label alphabet.

1. Each position can contain any of the four labels; replacement permits repetitions such as $(A,A,A)$.
2. The set of possible triples is the Cartesian product of three four-element sets. Positive probabilities and independence ensure that every such triple is possible.
3. Its cardinality is $4\cdot4\cdot4=4^3=64$. No division by a factorial is appropriate because order is retained.

The Cartesian product has cardinality $4^3=64$.

</details>
