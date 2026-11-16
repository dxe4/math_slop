# At least one component fails

*Medium · [Probability problems](index.md)*

Three components have mutually independent failure events, each of probability $1/4$. Find the probability that at least one component fails.

```answer
{"answer":{"kind":"rational","expected":{"numerator":37,"denominator":64},"checker_scope":"Checks the exact finite probability under mutual independence only."}}
```

<details>
<summary>Hint 1</summary>

The complement of at least one failure is that every component works.

</details>

<details>
<summary>Hint 2</summary>

Complement each component's failure probability, multiply for the all-working event, and then complement that event.

</details>

<details>
<summary>Worked solution</summary>

Complementing avoids double counting simultaneous failures.

1. Each component works with probability $1-1/4=3/4$.
2. Complements of mutually independent events are mutually independent, so the no-failure probability is $(3/4)^3=27/64$.
3. At least one failure has probability $1-27/64=37/64$; adding the three failure probabilities would overcount overlaps.

The all-working probability is $(3/4)^3=27/64$. Its complement is the requested $37/64$.

</details>
