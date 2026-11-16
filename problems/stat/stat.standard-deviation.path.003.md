# Track units through squaring and taking a root

*Easy · [Statistics and probability](index.md)*

Travel times are measured in seconds. Write the variance unit as seconds raised to the power variance\_power, and the standard-deviation unit as seconds raised to the power sd\_power. Enter these two exponents as exact integers.

```answer
{"answer":{"kind":"integer_pair","expected":{"variance_power":2,"sd_power":1},"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

Variance averages squared deviations from the mean.

</details>

<details>
<summary>Hint 2</summary>

Standard deviation takes the square root of variance, so track what happens to the unit exponent.

</details>

<details>
<summary>Worked solution</summary>

Apply the same mathematical operations to the units and the values.

1. A deviation has units of seconds.
2. Squaring produces seconds squared, so variance\_power is $2$.
3. Taking the square root returns seconds, so sd\_power is $1$.

</details>
