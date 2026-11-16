# Combine accumulation with a moving endpoint rate

*Easy · [Calculus](index.md)*

Let $H(x)=\int_0^{g(x)}f(t)\,dt$, with f continuous and g differentiable. At a, f(g(a))=2 and g′(a)=3. Find H′(a).

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The upper-endpoint value is multiplied by its rate of motion.

</details>

<details>
<summary>Hint 2</summary>

Use the supplied value at g(a), not an unspecified value at a.

</details>

<details>
<summary>Worked solution</summary>

The chain rule multiplies the fundamental-theorem derivative by endpoint speed.

1. The derivative is H′(a)=f(g(a))g′(a).
2. Substitution gives 2×3.
3. Thus H′(a)=6.

</details>
