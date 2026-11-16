# Translate a dataset from its minimum and range

*Medium · [Statistics and probability](index.md)*

A dataset has minimum $-4$ and range $11$. Add 5 to every observation. Return the ordered vector (new\_minimum,new\_maximum,new\_range).

```answer
{"answer":{"kind":"vector","expected":["1","12","11"],"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Recover the old maximum before translating.

</details>

<details>
<summary>Hint 2</summary>

Translation changes both extremes by the same amount.

</details>

<details>
<summary>Worked solution</summary>

A common translation preserves differences.

1. The original maximum is $-4+11=7$.
2. The translated minimum and maximum are one and twelve.
3. Their difference is eleven, so the requested vector is $(1,12,11)$.

</details>
