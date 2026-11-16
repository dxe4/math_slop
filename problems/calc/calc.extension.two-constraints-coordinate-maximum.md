# Optimize one coordinate under a plane and sphere constraint

*Medium · [Calculus](index.md)*

For real x,y,z with $x+y+z=3$ and $x^2+y^2+z^2=5$, find and prove the maximum of x, including attainment. A personal proof is requested because the exact maximum is irrational.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Use y²+z²≥(y+z)²/2.

</details>

<details>
<summary>Hint 2</summary>

Substitute the two constraints and check equality by setting y=z.

</details>

<details>
<summary>Model proof</summary>

A coordinate maximum reduces to a sharp feasibility bound for the two remaining coordinates.

1. The constraints imply 5−x²=y²+z²≥(3−x)²/2. Rearranging gives 3(x−1)²≤4.
2. Thus x≤1+2/√3. Equality in the remaining-coordinate inequality requires y=z=(3−x)/2.
3. Choose x=1+2/√3 and these equal y,z. Their sum is 3, and equality in the derived quadratic ensures the sum of squares is 5.
4. The bound is therefore attained and is the maximum, rather than only an unattained supremum.

**Self-assessment rubric**

- Uses the two-coordinate square inequality to obtain 3(x−1)²≤4.
- Extracts the upper endpoint 1+2/√3 with the correct sign.
- Constructs equal y,z and checks both original constraints at the bound.

</details>
