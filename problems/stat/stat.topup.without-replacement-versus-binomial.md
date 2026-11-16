# Compare an urn model with an invalid independence shortcut

*Medium · [Statistics and probability](index.md)*

An urn has $4$ red and $3$ blue balls. Draw three without replacement. Return actual\_no\_red and independent\_formula, where independent\_formula means the comparison value (3/7)^3 from an independent replacement model, not the actual design.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"actual_no_red":"1/35","independent_formula":"27/343"},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Without replacement, the blue probability changes after each blue draw.

</details>

<details>
<summary>Hint 2</summary>

Keep the requested comparison model separate from the actual model.

</details>

<details>
<summary>Worked solution</summary>

Dependence changes the probability of repeated same-color draws.

1. The actual no-red probability is $(3/7)(2/6)(1/5)=1/35$.
2. The independent replacement comparison is $(3/7)^3=27/343$.
3. These are different because the actual draws deplete the urn; the comparison formula is not justified for the actual design.

</details>
