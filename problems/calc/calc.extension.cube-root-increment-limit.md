# Factor a difference of cubes in a root limit

*Medium · [Calculus](index.md)*

Find $\lim_{x\to0}[(8+x)^{1/3}-2]/x$, using the real cube root.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":12},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Let u=(8+x)^{1/3}, so x=u³−8.

</details>

<details>
<summary>Hint 2</summary>

Factor that difference of cubes and cancel only for nonzero x.

</details>

<details>
<summary>Worked solution</summary>

A cube-root increment has a quadratic companion factor.

1. With u³=8+x, x=(u−2)(u²+2u+4).
2. For nonzero x the quotient is 1/(u²+2u+4). As x→0, u→2.
3. The limit is 1/(4+4+4)=1/12.

</details>
