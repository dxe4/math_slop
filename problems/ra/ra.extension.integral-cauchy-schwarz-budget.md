# Translate two L2 norms into an absolute-product bound

*Easy · [Real analysis](index.md)*

Real measurable f,g have $||f||_2=3$ and \|\|g\|\|\_2=2. Using the integral Cauchy-Schwarz inequality, find the bound on integral \|f\*g\|.

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact requested norm, measure bound or iterated-integral observation only; no measure-theoretic proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Apply the inequality to absolute values.

</details>

<details>
<summary>Hint 2</summary>

Multiply the two supplied norms.

</details>

<details>
<summary>Worked solution</summary>

The product integral is controlled without knowing pointwise maxima.

1. Integral Cauchy-Schwarz gives integral \|f\*g\| &lt;= (integral \|f\|^2)^(1/2)\*(integral \|g\|^2)^(1/2).
2. These square roots are the stated L2 norms three and two.
3. Thus the upper bound is six.

</details>
