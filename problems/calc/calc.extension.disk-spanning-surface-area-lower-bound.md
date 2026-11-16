# Prove a disk area minimum without a minimal-surface equation

*Hard · [Calculus](index.md)*

Let S be any compact orientable piecewise-C¹ surface whose only boundary is the unit circle in z=0. Prove $\operatorname{area}(S)\ge\pi$ using an oriented projected-area identity, and show the bound is attained. S need not be a graph.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Choose the orientation whose induced circle is counterclockwise from above.

</details>

<details>
<summary>Hint 2</summary>

Stokes gives ∫\_S n\_z dS=π, while n\_z≤1 pointwise.

</details>

<details>
<summary>Model proof</summary>

A fixed boundary forces a projected area that cannot exceed total area.

1. Choose the orientation inducing counterclockwise traversal. For F=(−y/2,x/2,0), curl F=(0,0,1), and the boundary circulation on the unit circle is π. Stokes therefore gives ∫\_S n\_z dS=π.
2. Since n is unit wherever defined, n\_z≤1. Integrating gives π≤∫\_S1dS=area(S); equivalently one may use the absolute projected-area bound if the opposite orientation is chosen.
3. The flat unit disk with upward normal has area π and the specified boundary, so the lower bound is sharp and attained.
4. The argument does not assume a one-to-one vertical projection, nonnegative n\_z everywhere, or a graph representation. Negative oriented contributions can only require more scalar area, not reduce the bound.

**Self-assessment rubric**

- Uses a correct constant-curl field and the boundary circle to derive projected area π.
- Bounds oriented normal component by unit scalar area density.
- Exhibits the flat disk and explains why overhangs or non-graph geometry do not invalidate the bound.

</details>
