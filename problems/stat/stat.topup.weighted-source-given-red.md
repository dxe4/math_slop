# Condition after a weighted source selection

*Medium · [Statistics and probability](index.md)*

Choose source A with probability $2/3$ and B with probability $1/3$. A produces red with probability $1/4$; B always produces red. Given a red outcome, find the probability its source was A.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Multiply each source probability by its conditional red probability.

</details>

<details>
<summary>Hint 2</summary>

Normalize the A-red weight by the combined red weight.

</details>

<details>
<summary>Worked solution</summary>

Conditioning reweights sources according to their contributions to the observed event.

1. The A-red probability is $(2/3)(1/4)=1/6$ and the B-red probability is one third.
2. The red probability is $1/6+1/3=1/2$.
3. Thus the conditional A probability is $(1/6)/(1/2)=1/3$.

</details>
