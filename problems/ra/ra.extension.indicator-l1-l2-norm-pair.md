# Keep the square root in an L2 norm

*Easy · [Real analysis](index.md)*

A measurable set E has measure 1/4 and $f=2\,1_E$. Enter \[\|\|f\|\|\_1,\|\|f\|\|\_2\].

```answer
{"answer":{"kind":"vector","expected":["1/2","1"],"checker_scope":"Exact requested norm, measure bound or iterated-integral observation only; no measure-theoretic proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The L1 integral uses the height, while the squared L2 norm uses its square.

</details>

<details>
<summary>Hint 2</summary>

Take the final square root for the second component.

</details>

<details>
<summary>Worked solution</summary>

Support measure and amplitude combine differently in different norms.

1. The L1 norm is 2\*mu(E)=2\*(1/4)=1/2.
2. The squared L2 norm is 4\*mu(E)=1.
3. Taking its square root gives the ordered pair \[1/2,1\].

</details>
