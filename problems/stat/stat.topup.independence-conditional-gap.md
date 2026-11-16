# Check a conditional independence equality

*Medium · [Statistics and probability](index.md)*

Events satisfy $P(A)=2/5$, P(B)=3/4 and P(A intersection B)=3/10. Find P(B\|A)-P(B).

```answer
{"answer":{"kind":"rational","expected":{"numerator":0,"denominator":1},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

The condition has positive probability, so divide by P(A).

</details>

<details>
<summary>Hint 2</summary>

Compare the resulting conditional value with the supplied marginal.

</details>

<details>
<summary>Worked solution</summary>

Independence in a two-event finite check appears as an unchanged conditional probability.

1. The conditional probability is $(3/10)/(2/5)=3/4$.
2. This equals the given marginal P(B).
3. Their difference is zero, and the equivalent product criterion also holds.

</details>
