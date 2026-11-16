# Integrate spherical shells

*Medium · [Multivariable calculus problems](index.md)*

Let $B=\{x^2+y^2+z^2\leq4\}$. Find $\operatorname{volume}(B)/\pi$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":32,"denominator":3},"checker_scope":"Exact requested value, vector or matrix only; a numerical answer does not automatically certify the accompanying extremum or integration argument."}}
```

<details>
<summary>Hint 1</summary>

The ball has radius two.

</details>

<details>
<summary>Hint 2</summary>

The area of a spherical shell of radius $r$ is $4\pi r^2$.

</details>

<details>
<summary>Worked solution</summary>

Spherical coordinates or shell integration account for the radial volume factor.

1. Spherical coordinates give volume $\int_0^2 4\pi r^2\,dr$.
2. This is $4\pi[ r^3/3 ]_0^2=32\pi/3$.
3. The requested ratio is $32/3$.

</details>
