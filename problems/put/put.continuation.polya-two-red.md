# Polya two red

*Medium · [Original Putnam-style training](index.md)*

An urn starts with $1$ red and one blue ball. At each draw the selected ball is replaced together with one extra ball of its color. Find the probability the first two draws are red.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

After the first red draw, update the urn composition.

</details>

<details>
<summary>Hint 2</summary>

Multiply the two conditional probabilities.

</details>

<details>
<summary>Worked solution</summary>

The joint probability is $(1/2)(2/3)=1/3$.

1. The first red draw has probability $1/2$.
2. After that draw the urn contains two red and one blue, so the conditional second-red chance is $2/3$.
3. The joint probability is $(1/2)(2/3)=1/3$.

</details>
