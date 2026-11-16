# Change the probability denominator

*Medium · [Statistics and probability](index.md)*

Ten equally likely tokens comprise 2 blue triangles, 1 orange triangle, 2 blue circles and 5 orange circles. Given that the selected token is a triangle, what is the probability it is blue?

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":3},"checker_scope":"Exact conditional probability on the stated finite uniform model."}}
```

<details>
<summary>Hint 1</summary>

Restrict the possible outcomes to triangles.

</details>

<details>
<summary>Hint 2</summary>

There are three triangles, of which two are blue.

</details>

<details>
<summary>Worked solution</summary>

Conditioning changes the relevant set of possible outcomes.

1. Conditioning leaves the two blue triangles and one orange triangle.
2. Two of these three equally likely possibilities are blue, giving $2/3$.

A two-way count table plus a condition button shows the retained counts and their denominator.

</details>
