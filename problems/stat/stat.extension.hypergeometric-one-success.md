# Hypergeometric one success

*Medium · [Statistics and probability](index.md)*

A box contains $2$ red and $2$ blue labelled cards. Choose a uniformly random $2$-subset without replacement. What is the probability of exactly one red card?

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":3},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Count mixed-colour subsets by choosing one card of each colour.

</details>

<details>
<summary>Hint 2</summary>

Use the number of all unordered two-card subsets as the denominator.

</details>

<details>
<summary>Worked solution</summary>

The hypergeometric count compares one-red-one-blue samples with all possible samples.

1. There are $\binom21\binom21=4$ mixed-colour samples.
2. There are $\binom42=6$ equally likely samples in total.
3. The probability is $4/6=2/3$. Treating the draws as independent would instead use the wrong sampling model.

</details>
