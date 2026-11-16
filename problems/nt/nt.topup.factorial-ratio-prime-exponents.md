# Cancel a factorial ratio before factoring

*Medium · [Number theory](index.md)*

Write $10!/8!=2^a3^b5^c$. Return a,b,c as an ordered vector.

```answer
{"answer":{"kind":"vector","expected":["1","2","1"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Cancel the common factorial factors first.

</details>

<details>
<summary>Hint 2</summary>

Factor only the two uncancelled factors.

</details>

<details>
<summary>Worked solution</summary>

Symbolic cancellation reduces the size of the arithmetic.

1. The ratio is $10\cdot9=90$.
2. Since ten is two times five and nine is three squared, $90=2\cdot3^2\cdot5$.
3. Thus the exponents in the specified order are $(1,2,1)$.

</details>
