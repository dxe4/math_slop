# Derive the uncertainty cost of repeated cluster errors

*Hard · [Statistics and probability](index.md)*

There are $4$ independent clusters, each with five observations. All errors within cluster j equal one shared Uj, with E(Uj)=0 and Var(Uj)=1. Derive the actual variance of the mean of all twenty errors. Compare it with the variance obtained by incorrectly treating all twenty as independent, and explain the discrepancy.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Collect the five identical errors from each cluster before averaging.

</details>

<details>
<summary>Hint 2</summary>

Only the four distinct cluster errors have independent contributions.

</details>

<details>
<summary>Model proof</summary>

Repeated identical errors do not create additional independent information.

1. The overall mean is $(5/20)\sum_{j=1}^4U_j=(1/4)\sum_{j=1}^4U_j$.
2. Independence across clusters gives actual variance $4/16=1/4$. Treating twenty unit-variance errors as independent would instead give $1/20$.
3. The true variance is five times the naive value. Perfect within-cluster dependence invalidates the independent-row standard-error calculation; no slope or causal conclusion follows.

**Self-assessment rubric**

- Rewrite the twenty-error mean using the four independent cluster variables.
- Apply independence only across the four clusters to obtain one quarter.
- Derive one twentieth under the false independence model and explain the factor five.

</details>
