# Use a difference of squared radii

*Medium · [Calculus](index.md)*

Rotate the region $0\le x\le1$, $x^2\le y\le x$ about the x-axis. Find its volume divided by π.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":15},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

A vertical slice gives a washer, not a disk.

</details>

<details>
<summary>Hint 2</summary>

The outer radius is x and the inner radius x².

</details>

<details>
<summary>Worked solution</summary>

A washer subtracts inner squared radius from outer squared radius.

1. The volume is π∫₀¹\[x²−x⁴\]dx.
2. The integral equals 1/3−1/5=2/15.
3. Thus V/π=2/15.

</details>
