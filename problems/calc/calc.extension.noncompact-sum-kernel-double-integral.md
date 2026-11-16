# Evaluate a positive double integral on an unbounded quadrant

*Medium · [Calculus](index.md)*

Evaluate $\int_0^\infty\int_0^\infty(1+x+y)^{-3}\,dy\,dx$, justifying the nonnegative order convention.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Integrate the shifted reciprocal cube with respect to y first.

</details>

<details>
<summary>Hint 2</summary>

The remaining x integral is a reciprocal square.

</details>

<details>
<summary>Worked solution</summary>

Nonnegative integrands permit extended iterated integration before finiteness is proved.

1. Tonelli permits this order for the nonnegative measurable integrand. The y integral is 1/\[2(1+x)²\].
2. Integrating over x≥0 gives \[−1/(2(1+x))\]₀∞=1/2.
3. The finite result also proves absolute integrability of this nonnegative function.

</details>
