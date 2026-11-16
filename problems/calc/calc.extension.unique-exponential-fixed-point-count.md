# Combine a sign change with strict derivative monotonicity

*Medium · [Calculus](index.md)*

How many real x in \[0,1\] satisfy $e^{-x}=x$? Justify existence and uniqueness in your personal calculation.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Subtract the right side to form one continuous function.

</details>

<details>
<summary>Hint 2</summary>

Check endpoint signs and then the sign of its derivative.

</details>

<details>
<summary>Worked solution</summary>

An endpoint crossing gives existence while a strictly negative derivative gives uniqueness.

1. Let h(x)=e^{−x}−x. It is continuous, with h(0)=1&gt;0 and h(1)=e⁻¹−1&lt;0. IVT gives a root in (0,1).
2. Its derivative is −e^{−x}−1&lt;0, so the mean value theorem makes h strictly decreasing.
3. A strictly decreasing function has at most one zero. Thus the root count is exactly 1.

</details>
