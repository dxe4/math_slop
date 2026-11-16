# Use a triple product to rule out a local integrating factor

*Hard · [Calculus](index.md)*

Prove a necessary condition for a C¹ field F to admit a nonvanishing C¹ scalar h with hF=∇φ for some C² φ is $F\cdot\operatorname{curl}F=0$. Apply it to F=(−y,x,1) to show no such integrating factor exists on any nonempty open set.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Take curl of hF and dot the result with F.

</details>

<details>
<summary>Hint 2</summary>

The cross product ∇h×F is perpendicular to F.

</details>

<details>
<summary>Model proof</summary>

A scalar multiplier cannot remove a rotational component parallel to the field itself.

1. If hF=∇φ, the product curl identity gives 0=curl(hF)=∇h×F+h curl F. The zero on the left uses C² regularity of φ.
2. Dotting with F eliminates F·(∇h×F), leaving h(F·curl F)=0. Because h is nowhere zero, the stated necessary condition follows.
3. For F=(−y,x,1), curl F=(0,0,2), so F·curl F=2 at every point. The necessary condition fails throughout every nonempty open subset.
4. Therefore no such nonvanishing integrating factor and potential exist locally anywhere. This is an obstruction only; no converse existence theorem for fields satisfying the scalar condition is asserted.

**Self-assessment rubric**

- Uses the full curl product identity and the gradient’s zero curl.
- Dots with F and justifies division by the nonvanishing multiplier.
- Computes curl and the constant nonzero helicity of the example.
- Keeps the result as a necessary condition and applies it on every possible local neighborhood.

</details>
