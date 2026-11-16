# Track the derivative dimensions of a composition

*Easy · [Calculus](index.md)*

Let F:R²→R³ and G:R³→R⁴ be differentiable. Return \[rows,columns\] of $D(G\circ F)$.

```answer
{"answer":{"kind":"vector","expected":["4","2"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The composition takes a two-dimensional input to a four-dimensional output.

</details>

<details>
<summary>Hint 2</summary>

The product DG·DF has the same input-output dimensions.

</details>

<details>
<summary>Worked solution</summary>

Intermediate coordinates disappear from the composite derivative’s matrix shape.

1. DG has shape 4×3 and DF has shape 3×2.
2. Their compatible product has shape 4×2.
3. Thus the answer is \[4,2\].

</details>
