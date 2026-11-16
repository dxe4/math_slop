# Update prior odds

*Easy · [Probability problems](index.md)*

Prior odds $P(H)/P(H^c)$ equal $1/2$. Evidence $E$ has positive likelihoods under both hypotheses, with $P(E\mid H)/P(E\mid H^c)=3$. Find the posterior odds $P(H\mid E)/P(H^c\mid E)$ as a reduced fraction.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":2},"checker_scope":"Checks posterior odds as a ratio, not posterior probability."}}
```

<details>
<summary>Hint 1</summary>

Use the odds form of Bayes' rule.

</details>

<details>
<summary>Hint 2</summary>

The common evidence normalisation cancels in the posterior ratio, leaving prior odds multiplied by the likelihood ratio.

</details>

<details>
<summary>Worked solution</summary>

Multiply odds by the likelihood ratio, keeping odds distinct from probability.

1. Positive prior odds ensure both prior masses are positive, and the positive likelihoods make both posterior masses positive.
2. Bayes' rule yields $P(H\mid E)/P(H^c\mid E)=[P(H)/P(H^c)][P(E\mid H)/P(E\mid H^c)]$.
3. Thus the posterior odds are $(1/2)3=3/2$. This ratio may exceed one; the corresponding posterior probability would instead be $3/5$, which is not the requested quantity.

Posterior odds equal $3:2$, represented by $3/2$.

</details>
