# Keep the norm visible when coordinates vanish separately

*Easy · [Real analysis](index.md)*

In real ell-2 let $e_n$ have a one in coordinate n and zeros elsewhere. Find \|\|e\_n\|\|\_2 for every n. Explain in the model why each fixed coordinate tending to zero does not imply norm convergence to zero.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested norm, measure bound or iterated-integral observation only; no measure-theoretic proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

There is always exactly one nonzero coordinate, even though its location changes.

</details>

<details>
<summary>Hint 2</summary>

The norm sums over all coordinates for each fixed n.

</details>

<details>
<summary>Worked solution</summary>

A moving unit direction escapes coordinatewise observation without losing norm.

1. For each n, the sum of squared coordinates of e\_n is one, so \|\|e\_n\|\|\_2=1.
2. For any fixed coordinate k, its value is zero for all n greater than k; thus every fixed coordinate tends to zero.
3. The whole norm nevertheless stays one. In fact e\_n converges weakly to zero because its inner product with any ell-2 vector y is y\_n, which tends to zero, but it does not converge in norm.

</details>
