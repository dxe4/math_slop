# Track outward normals on a punctured spatial region

*Medium · [Calculus](index.md)*

For Ω={1≤r≤2} in R³, r=√(x²+y²+z²), let $F=(x,y,z)/r^3$. Return \[outer flux/π, inner flux/π, total flux/π\] with both normals outward from Ω.

```answer
{"answer":{"kind":"vector","expected":["4","-4","0"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The inner outward normal points toward the origin.

</details>

<details>
<summary>Hint 2</summary>

On a radius-R sphere, radial field magnitude 1/R² cancels the area factor R².

</details>

<details>
<summary>Worked solution</summary>

A hole reverses the inner boundary’s normal even for an outward-radial field.

1. The outer sphere flux is (1/2²)·4π·2²=4π.
2. On the inner sphere the Ω-outward normal is inward-radial, giving −4π.
3. The total is zero, consistent with div F=0 on the shell. The vector is \[4,−4,0\].

</details>
