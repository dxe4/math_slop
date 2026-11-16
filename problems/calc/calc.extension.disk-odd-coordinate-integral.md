# Use a planar reflection symmetry

*Easy · [Calculus](index.md)*

For the unit disk D centered at zero, evaluate $\iint_D x\,dA$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Reflect x to −x while leaving y fixed.

</details>

<details>
<summary>Hint 2</summary>

The disk and area element are unchanged, but the integrand changes sign.

</details>

<details>
<summary>Worked solution</summary>

A measure-preserving reflection cancels odd coordinate contributions.

1. The reflected integral equals the original because D is symmetric.
2. It also equals the negative original because the integrand is x.
3. Therefore the integral is zero.

</details>
