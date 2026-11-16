# Check a binomial assumption before calculating

*Medium · [Statistics and probability](index.md)*

A box has two red and two blue balls. Draw two balls without replacement. Return the probability the second ball is red given a red first ball in after\_red, and the probability it is red given a blue first ball in after\_blue. Compare them when considering a common independent-trial success probability.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"after_red":"1/3","after_blue":"2/3"},"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

After a draw, remove that physical ball from the box.

</details>

<details>
<summary>Hint 2</summary>

For each condition, count the remaining red balls and the remaining total separately.

</details>

<details>
<summary>Worked solution</summary>

Sampling without replacement changes the conditional composition.

1. After a red first draw, one of the three remaining balls is red, giving $1/3$.
2. After a blue first draw, two of the three remaining balls are red, giving $2/3$.
3. The success probability changes with the first outcome. Thus the exact count is not a binomial count with independent trials of common success probability $1/2$.

</details>
