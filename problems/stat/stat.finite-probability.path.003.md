# Check whether weights form a probability model

*Easy · [Statistics and probability](index.md)*

Three outcomes exhaust a sample space and are mutually exclusive. The first two probabilities are $1/2$ and $1/4$. Find the third probability so that the three form a valid probability distribution.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

Exhaustive mutually exclusive probabilities sum to one.

</details>

<details>
<summary>Hint 2</summary>

Check that the remaining probability also lies between zero and one.

</details>

<details>
<summary>Worked solution</summary>

Normalization and nonnegativity define a finite probability distribution.

1. The first two probabilities sum to $3/4$.
2. The remaining probability must be $1-3/4=1/4$.
3. All three are nonnegative and their sum is one, giving the valid list $(1/2,1/4,1/4)$.

</details>
