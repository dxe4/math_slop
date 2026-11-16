# Find when the first fraction between Farey neighbors can appear

*Easy · [Computational arithmetic problems](index.md)*

The reduced fractions $2/5<3/7$ have determinant 3 times 5 minus 2 times 7 equal to one. Every fraction strictly between such neighbors has denominator at least the sum of their denominators, attained by the mediant. Find the least Farey order at which a fraction between them appears.

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Use the supplied denominator lower bound.

</details>

<details>
<summary>Hint 2</summary>

Check the mediant attains it in reduced form.

</details>

<details>
<summary>Worked solution</summary>

Farey adjacency persists until the denominator-sum threshold.

1. The denominator sum is five plus seven, or twelve.
2. The mediant is (2+3)/(5+7)=5/12, which is reduced and lies strictly between the given fractions.
3. No smaller denominator can intervene by the supplied neighbor theorem, so the least Farey order is twelve.

</details>
