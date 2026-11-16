# First success on trial two

*Easy · [Probability problems](index.md)*

Independent trials each succeed with probability $1/4$. Let $T$ count trials through the first success. Find $P(T=2)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":16},"checker_scope":"Checks the second-trial first-success probability, with the success trial included in the count."}}
```

<details>
<summary>Hint 1</summary>

Translate $T=2$ into a prescribed failure/success pattern.

</details>

<details>
<summary>Hint 2</summary>

The first trial must fail and the second succeed; use the probability of each specified outcome.

</details>

<details>
<summary>Worked solution</summary>

The first-success event specifies failure followed by success.

1. The event $T=2$ excludes a first-trial success and requires a second-trial success.
2. These specified outcomes have probabilities $3/4$ and $1/4$, and independence makes their joint probability the product.
3. Hence $P(T=2)=(3/4)(1/4)=3/16$. No restriction on hypothetical later trials is needed.

Failure then success has probability $(3/4)(1/4)=3/16$.

</details>
