# Use Cauchy-Schwarz and an attaining direction

*Easy · [Real analysis](index.md)*

On Euclidean R^3 let $L(x)=x_1+2x_2+2x_3$. Find its operator norm from the Euclidean norm to absolute value.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact requested norm observation only; no functional-analytic theorem is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The coefficient vector supplies the Cauchy-Schwarz bound.

</details>

<details>
<summary>Hint 2</summary>

Check that a unit vector in its direction attains that bound.

</details>

<details>
<summary>Worked solution</summary>

A Hilbert-space linear functional has the norm of its representing vector.

1. The coefficient vector is a=(1,2,2), with norm sqrt(1+4+4)=3.
2. Cauchy-Schwarz gives \|L(x)\|&lt;=3\*\|\|x\|\|.
3. At x=a/3 the input norm is one and L(x)=3, so the operator norm is exactly three.

</details>
