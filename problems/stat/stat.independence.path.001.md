# Compare a conditional probability to its marginal

*Medium · [Statistics and probability](index.md)*

Forty equally likely cases have counts: $A\cap B$: $24$; $A\cap B^c$: $6$; $A^c\cap B$: $8$; neither: $2$. Return $P(B\mid A)$ in conditional and $P(B)$ in marginal. Compare them to decide independence.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"conditional":"4/5","marginal":"4/5"},"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

For the conditional probability, restrict the denominator to cases in the conditioning event.

</details>

<details>
<summary>Hint 2</summary>

For the marginal probability, count all cases in the requested event and use the full population.

</details>

<details>
<summary>Worked solution</summary>

Independence means conditioning on the event does not change the probability.

1. There are $24+6=30$ cases in $A$, giving $P(B\mid A)=24/30=4/5$.
2. There are $24+8=32$ cases in $B$, giving $P(B)=32/40=4/5$.
3. The probabilities agree and $P(A)>0$, so the conditional criterion gives independence.

</details>
