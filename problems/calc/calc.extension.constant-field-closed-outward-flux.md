# Use zero divergence of a constant field

*Easy · [Calculus](index.md)*

Let F be a constant vector field and Ω a bounded region with piecewise-C¹ closed boundary oriented outward. Find $\iint_{\partial\Omega}F\cdot n\,dS$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Each coordinate derivative of a constant field is zero.

</details>

<details>
<summary>Hint 2</summary>

Apply the divergence theorem on the full closed boundary.

</details>

<details>
<summary>Worked solution</summary>

Opposite-facing parts of a closed boundary cancel constant-field flux.

1. The divergence of F is zero throughout Ω.
2. The divergence theorem makes the outward flux ∭\_Ω0dV.
3. Thus the total flux is 0.

</details>
