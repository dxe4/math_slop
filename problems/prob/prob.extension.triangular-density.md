# Normalise a linear density

*Easy · [Probability problems](index.md)*

A probability density is $f(x)=cx$ for $0\le x\le2$ and zero otherwise. Find $c$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the normalising constant for the given density support only."}}
```

<details>
<summary>Hint 1</summary>

A probability density must integrate to one over its full support.

</details>

<details>
<summary>Hint 2</summary>

Integrate the linear function on the stated support and solve for its constant; retain nonnegativity.

</details>

<details>
<summary>Worked solution</summary>

Use total probability one.

1. The total density integral is $\int_0^2cx\,dx=c[x^2/2]_0^2=2c$.
2. Normalisation requires $2c=1$, so $c=1/2$.
3. This value makes $f$ nonnegative on its support and gives unit integral, satisfying both density requirements.

Its total integral is $2c$, so $c=1/2$.

</details>
