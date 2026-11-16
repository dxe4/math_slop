# Expand outside a pole circle

*Medium · [Complex analysis problems](index.md)*

In the annulus $|z|>1$, find the coefficient of $z^{-3}$ in the Laurent expansion of $1/(z-1)$ about zero.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested complex value, polynomial, coefficient, radius or domain only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the reciprocal variable as the small geometric parameter.

</details>

<details>
<summary>Hint 2</summary>

Factor out one inverse power before expanding.

</details>

<details>
<summary>Worked solution</summary>

An exterior Laurent expansion uses powers of the reciprocal coordinate.

1. $1/(z-1)=z^{-1}/(1-z^{-1})$.
2. For $|z|>1$, the expansion is $z^{-1}+z^{-2}+z^{-3}+\cdots$.
3. The coefficient of $z^{-3}$ is $1$.

</details>
