# Exhibit distinct smooth invariant graphs with the same Taylor series

*Hard · [Differential equations problems](index.md)*

For $x'=-x^3$, y'=-y, prove that for any real C the graph h\_C(0)=0 and h\_C(x)=C\*exp(-1/(2x^2)) for x nonzero is a smooth invariant graph tangent to the x-axis. Explain why these give different smooth center manifolds with identical Taylor series at zero.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Derive the graph invariance equation -x^3\*h'=-h.

</details>

<details>
<summary>Hint 2</summary>

Use exponential flatness to control every derivative at zero.

</details>

<details>
<summary>Model proof</summary>

Beyond-all-orders terms can distinguish smooth invariant manifolds invisible to a power series.

1. For x nonzero, h\_Cprime=h\_C/x^3, so h\_Cprime\*(-x^3)=-h\_C. Thus the vector field is tangent to the graph. The function and all derivatives extend by zero at the origin because exp(-1/(2x^2)) dominates every inverse power; the invariance equation holds there too.
2. The graphs are smooth, pass through the origin and have derivative zero there. The linearization is diag(0,-1), whose center subspace is the x-axis, so each locally invariant graph is a smooth local center manifold tangent to that subspace.
3. For distinct constants the graphs differ off zero, yet every derivative of every h\_C at zero is zero. Their identical formal Taylor series therefore does not imply uniqueness of the smooth center manifold.

**Self-assessment rubric**

- Verify the exact tangency equation off and at the origin.
- Justify all-order smooth extension and center tangency.
- Distinguish actual graphs from their identical formal expansions.

</details>
