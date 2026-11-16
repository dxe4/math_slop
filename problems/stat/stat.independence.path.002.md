# Distinguish disjointness from independence

*Medium · [Statistics and probability](index.md)*

Events $A,B$ are disjoint, with $P(A)=1/4$ and $P(B)=1/2$. Return $P(A\cap B)$ in intersection and $P(A)P(B)$ in product. Compare the values to decide independence.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"intersection":"0","product":"1/8"},"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

Disjointness determines the intersection event.

</details>

<details>
<summary>Hint 2</summary>

Independence would require its probability to equal the product of the marginals.

</details>

<details>
<summary>Worked solution</summary>

Disjoint positive-probability events fail the product criterion for independence.

1. Disjointness gives $P(A\cap B)=0$.
2. The product of the given probabilities is $(1/4)(1/2)=1/8$.
3. These values differ, so the events are dependent.

</details>
