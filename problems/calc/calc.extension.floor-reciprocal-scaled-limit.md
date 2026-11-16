# Bound a rounded reciprocal before taking its limit

*Medium · [Calculus](index.md)*

Find $\lim_{x\to0^+}x\operatorname{floor}(1/x)$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Use u−1&lt;floor(u)≤u.

</details>

<details>
<summary>Hint 2</summary>

Multiply by positive x so the inequality direction stays unchanged.

</details>

<details>
<summary>Worked solution</summary>

The floor error remains bounded by one before a vanishing rescaling.

1. For u=1/x the floor bounds are 1/x−1&lt;floor(1/x)≤1/x.
2. Multiplying by x&gt;0 gives 1−x&lt;x floor(1/x)≤1.
3. Both outer expressions tend to 1, so squeeze gives the limit 1.

</details>
