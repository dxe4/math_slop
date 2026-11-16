# Compute revolution area rather than enclosed volume

*Medium · [Calculus](index.md)*

Rotate y=x for 1≤x≤2 around the x-axis, including only the lateral surface. If its area is S, find $(S/\pi)^2$.

```answer
{"answer":{"kind":"integer","expected":18,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The area element is circumference 2πy times curve arc length.

</details>

<details>
<summary>Hint 2</summary>

Here ds=√2 dx, not merely dx.

</details>

<details>
<summary>Worked solution</summary>

A surface of revolution includes a slant factor absent from a washer-volume formula.

1. The lateral area is S=2π∫₁²x√(1+1²)dx.
2. This equals 2π√2·(4−1)/2=3π√2.
3. Thus (S/π)²=18. End caps are not part of the stated surface.

</details>
