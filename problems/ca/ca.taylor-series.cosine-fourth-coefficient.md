# A cosine Taylor coefficient

*Easy · [Complex analysis problems](index.md)*

Find the coefficient of $z^4$ in the Taylor expansion of $\cos z$ at zero.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":24},"checker_scope":"Exact requested complex value, polynomial, coefficient, radius or domain only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The cosine series uses only even powers.

</details>

<details>
<summary>Hint 2</summary>

Track both the alternating sign and the appropriate factorial.

</details>

<details>
<summary>Worked solution</summary>

The even exponential pattern fixes the cosine coefficient.

1. $\cos z=1-z^2/2!+z^4/4!-\cdots$.
2. The fourth-power coefficient has positive sign.
3. Its value is $1/4!=1/24$.

</details>
