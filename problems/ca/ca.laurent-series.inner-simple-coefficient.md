# A Laurent coefficient inside the nearest pole

*Medium · [Complex analysis problems](index.md)*

In the annulus $0<|z|<1$, find the coefficient of $z^{-1}$ in the Laurent expansion of $1/(z(z-1))$ about zero.

```answer
{"answer":{"kind":"integer","expected":-1,"checker_scope":"Exact requested complex value, polynomial, coefficient, radius or domain only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Rewrite the factor involving the outer pole as a geometric denominator valid inside its modulus.

</details>

<details>
<summary>Hint 2</summary>

Keep the extra inverse power outside the geometric series.

</details>

<details>
<summary>Worked solution</summary>

The chosen annulus determines which geometric expansion is valid.

1. Write $1/(z(z-1))=-z^{-1}/(1-z)$.
2. For $|z|<1$, this is $-z^{-1}(1+z+z^2+\cdots)$.
3. The coefficient of $z^{-1}$ is $-1$.

</details>
