# Separate a fixed fee from a distance rate

*Medium · [Foundations bridge](index.md)*

A fare is $F+rd$ pounds for distance d kilometres, with constant F,r. A 2 km trip costs £9 and a 5 km trip costs £18. Find the fixed fee F in pounds.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Subtract the two fare equations to remove F.

</details>

<details>
<summary>Hint 2</summary>

Substitute the resulting rate into either original equation.

</details>

<details>
<summary>Worked solution</summary>

A difference of measurements isolates an affine rate.

1. The equations are F+2r=9 and F+5r=18.
2. Subtracting gives 3r=9 and r=3 pounds per kilometre.
3. Then F=9−2×3=3 pounds.

</details>
