# Use orthogonality before taking a Hilbert norm

*Easy · [Real analysis](index.md)*

Real L2 functions satisfy integral f\*g=0, $||f||_2=3$ and \|\|g\|\|\_2=4. Find \|\|f+g\|\|\_2.

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Exact requested norm, measure bound or iterated-integral observation only; no measure-theoretic proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Expand the squared norm.

</details>

<details>
<summary>Hint 2</summary>

The cross integral vanishes by the stated orthogonality.

</details>

<details>
<summary>Worked solution</summary>

Orthogonality converts a norm sum into a sum of squared norms.

1. The squared norm is integral (f+g)^2=\|\|f\|\|\_2^2+2\*integral f\*g+\|\|g\|\|\_2^2.
2. The middle term is zero, leaving 9+16=25.
3. Thus \|\|f+g\|\|\_2=5.

</details>
