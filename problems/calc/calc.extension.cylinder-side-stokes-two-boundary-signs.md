# Determine both induced orientations of a cylindrical side

*Medium · [Calculus](index.md)*

Let S be the unit-radius cylindrical side 0≤z≤1 with outward normal, and F=(−zy/2,zx/2,0). Find $\pi^{-1}\iint_S(\nabla\times F)\cdot n\,dS$, explaining the two boundary orientations.

```answer
{"answer":{"kind":"integer","expected":-1,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

For the outward side, the top boundary is clockwise viewed from above and the bottom counterclockwise.

</details>

<details>
<summary>Hint 2</summary>

The top counterclockwise circulation would be π, but the actual top traversal is reversed.

</details>

<details>
<summary>Worked solution</summary>

The induced orientations of an open cylindrical side differ from those of its closing caps.

1. The bottom circle has F=0 and contributes zero. On the top circle a counterclockwise traversal has circulation π, so the induced clockwise traversal contributes −π.
2. Stokes therefore gives side curl flux −π. Directly, curl F=(−x/2,−y/2,z) has dot product −1/2 with the radial unit normal on the side, confirming the sign.
3. The normalized value is −1. The top and bottom orientations here are those of the side surface, not of the closed solid’s separate caps.

</details>
