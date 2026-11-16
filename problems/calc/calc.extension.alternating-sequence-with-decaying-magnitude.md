# Squeeze a sign-alternating sequence

*Easy · [Calculus](index.md)*

Find the limit of $a_n=(-1)^n/n$ for integers n≥1, using \|a\_n\|=1/n.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The absolute values tend to zero.

</details>

<details>
<summary>Hint 2</summary>

Both signs remain between the same shrinking positive and negative bounds.

</details>

<details>
<summary>Worked solution</summary>

Vanishing magnitude, rather than cancellation of signs, proves convergence.

1. For every n, −1/n≤a\_n≤1/n.
2. Both bounding sequences tend to zero.
3. Hence a\_n→0 by squeeze.

</details>
