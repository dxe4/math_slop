# Reflect after an arctangent substitution

*Hard · [Original Putnam-style training](index.md)*

Let $I=\int_0^1\frac{\log(1+x)}{1+x^2}\,dx$. Find $I/(\pi\log2)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":8},"checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

Use x=tan(t) to remove the rational weight.

</details>

<details>
<summary>Hint 2</summary>

Reflect t about half the resulting interval and use the tangent subtraction identity.

</details>

<details>
<summary>Worked solution</summary>

A transformed reflection makes the sum of two logarithmic integrands constant.

1. The substitution gives $I=\int_0^{\pi/4}\log(1+\tan t)\,dt$.
2. For the reflected argument, $1+\tan(\pi/4-t)=2/(1+\tan t)$, so the two logarithms add to log2.
3. Therefore $2I=(\pi/4)\log2$, and the normalized value is $1/8$.

</details>
