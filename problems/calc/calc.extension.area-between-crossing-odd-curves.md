# Split geometric area where curve order switches

*Medium · [Calculus](index.md)*

Find the total area between y=x and y=x³ over $[-1,1]$. Use geometric area, not a signed difference.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The curves meet at −1,0,1.

</details>

<details>
<summary>Hint 2</summary>

Use symmetry and choose the upper curve on the positive half.

</details>

<details>
<summary>Worked solution</summary>

Crossing curves require absolute differences or interval splitting.

1. On \[0,1\], x≥x³; on \[−1,0\] the order reverses. The two geometric areas are equal by symmetry.
2. Thus the area is 2∫₀¹(x−x³)dx.
3. This equals 2(1/2−1/4)=1/2.

</details>
