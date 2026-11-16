# Use a moment to bound a large-value set

*Easy · [Real analysis](index.md)*

A measurable real f satisfies $\int |f|^2\,d\mu=9$. Bound mu({\|f\|&gt;=6}) by integrating 36 times that set's indicator. Find the resulting upper bound.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Exact requested norm, measure bound or iterated-integral observation only; no measure-theoretic proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

On the stated set, \|f\|^2 is at least 36.

</details>

<details>
<summary>Hint 2</summary>

Integrate that pointwise lower bound.

</details>

<details>
<summary>Worked solution</summary>

A moment budget limits how much measure can carry a large magnitude.

1. The pointwise inequality is 36\*1\_(\|f\|&gt;=6)&lt;=\|f\|^2.
2. Integration gives 36\*mu({\|f\|&gt;=6})&lt;=9.
3. Hence the requested upper bound is 9/36=1/4.

</details>
