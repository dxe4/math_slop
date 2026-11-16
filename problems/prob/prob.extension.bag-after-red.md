# Observe a red draw

*Easy · [Probability problems](index.md)*

A bag contains $2$ red tokens and one blue token. Draw successively, uniformly from the tokens remaining, without replacement. Given that the first draw was red, what is the probability that the second is blue?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the conditional probability under uniform sampling without replacement only."}}
```

<details>
<summary>Hint 1</summary>

Use the observation to update which tokens remain.

</details>

<details>
<summary>Hint 2</summary>

Compare the number of blue tokens remaining with the total number remaining; do not use the original bag total.

</details>

<details>
<summary>Worked solution</summary>

Condition on the observed first colour and use the remaining bag.

1. A red first draw removes exactly one red token and no blue token.
2. The remaining bag has one red and one blue token. Under the sampling rule, either remaining token is equally likely next, regardless of which red token was removed.
3. Consequently the conditional probability of blue is $1/2$. This differs from the unconditional first-draw blue probability $1/3$.

After the observed red draw, the remaining red and blue tokens are equally likely, giving blue probability $1/2$.

</details>
