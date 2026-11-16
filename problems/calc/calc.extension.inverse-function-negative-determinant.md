# Separate orientation from inverse-function regularity

*Easy · [Calculus](index.md)*

A C¹ map R²→R² has $\det DF(p)=-2$. Does the inverse function theorem guarantee a C¹ local inverse near p? Return {yes} or {no}; no global conclusion is asked.

```answer
{"answer":{"kind":"set","expected":["yes"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The hypothesis needs a nonzero determinant, not a positive one.

</details>

<details>
<summary>Hint 2</summary>

A negative determinant changes orientation but remains invertible.

</details>

<details>
<summary>Worked solution</summary>

Local invertibility depends on nonsingularity.

1. The determinant −2 is nonzero.
2. Thus DF(p) is invertible and the inverse function theorem applies.
3. Return {yes}; the orientation is reversed locally.

</details>
