# Extract one coefficient at an essential singularity

*Medium · [Complex analysis problems](index.md)*

Find the coefficient of $z^{-3}$ in the Laurent expansion of $e^{1/z}$ about zero, valid for $z\ne0$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":6},"checker_scope":"Exact requested complex value, polynomial, coefficient, radius or domain only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Substitute the reciprocal variable into the entire exponential series.

</details>

<details>
<summary>Hint 2</summary>

Match the desired inverse power to the original series index.

</details>

<details>
<summary>Worked solution</summary>

The exponential factorial coefficients survive the reciprocal substitution.

1. The expansion is $e^{1/z}=\sum_{n=0}^{\infty}z^{-n}/n!$.
2. The power $z^{-3}$ occurs at index $n=3$.
3. Its coefficient is $1/3!=1/6$.

</details>
