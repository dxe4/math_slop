# Within person effect

*Easy · [Statistics and probability](index.md)*

For $3$ people, the complete potential-outcome pairs $(Y_i(0),Y_i(1))$ are $(1,3),(4,5),(2,2)$. What is the finite-population average effect $3^{-1}\sum_{i=1}^3(Y_i(1)-Y_i(0))$?

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Compute treatment-minus-control within each supplied pair.

</details>

<details>
<summary>Hint 2</summary>

The finite-population target weights the three people equally.

</details>

<details>
<summary>Worked solution</summary>

Average within-person potential-outcome effects, keeping their direction consistent.

1. The individual effects are $3-1=2$, $5-4=1$ and $2-2=0$.
2. Their sum is $3$.
3. The average is $3/3=1$. Both potential outcomes are supplied hypothetically here; ordinary observed treatment data do not reveal both for each person.

</details>
