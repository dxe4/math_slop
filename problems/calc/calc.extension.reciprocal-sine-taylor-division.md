# Determine a reciprocal series coefficient by multiplication

*Medium · [Calculus](index.md)*

Extend x/sin x continuously at zero. Find its x⁴ Maclaurin coefficient, using $\sin x/x=1-x^2/6+x^4/120+O(x^6)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":7,"denominator":360},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Write the reciprocal as 1+Ax²+Bx⁴+O(x⁶).

</details>

<details>
<summary>Hint 2</summary>

Multiply by the supplied expansion and set nonconstant product coefficients to zero.

</details>

<details>
<summary>Worked solution</summary>

Series division can be done by enforcing the exact reciprocal product order by order.

1. The x² product coefficient gives A−1/6=0, so A=1/6.
2. The x⁴ coefficient gives B−A/6+1/120=0.
3. Thus B=1/36−1/120=7/360. The nonzero local denominator justifies the reciprocal expansion.

</details>
