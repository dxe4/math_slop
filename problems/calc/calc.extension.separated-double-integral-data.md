# Factor a separated rectangle integrand

*Easy · [Calculus](index.md)*

Continuous functions satisfy ∫₀¹g(x)dx=2 and ∫₀¹h(y)dy=3. Find $\int_0^1\int_0^1g(x)h(y)\,dy\,dx$.

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Within the inner integral g(x) is constant.

</details>

<details>
<summary>Hint 2</summary>

Then the outer integral supplies the other known factor.

</details>

<details>
<summary>Worked solution</summary>

Separated variables factor on a product region.

1. The inner integral is 3g(x).
2. Its outer integral is 3×2.
3. The value is 6.

</details>
