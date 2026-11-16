# Normalize a continuous density

*Easy · [Probability problems](index.md)*

A proposed density is $f(x)=cx$ for $0\le x\le2$ and zero elsewhere. Find the constant $c$ making it a probability density.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A density must integrate to one over its support.

</details>

<details>
<summary>Hint 2</summary>

Check that the resulting constant also makes the density nonnegative.

</details>

<details>
<summary>Worked solution</summary>

Normalization fixes the single scale parameter.

1. The integral is $\int_0^2cx\,dx=2c$.
2. Setting this equal to one gives $c=1/2$.
3. The resulting density is nonnegative throughout its support, so the normalization is valid.

</details>
