# Find a Neumann compatibility condition missed by a global cancellation

*Hard · [Calculus](index.md)*

If $\Delta u=f$ on a bounded region and ∂\_n u=g on its boundary, derive a necessary integral condition on each connected component. Show that checking only the total condition can fail on the union of two disjoint equal-radius balls by choosing smooth f and zero g. State the regularity needed for your argument.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Apply divergence to ∇u on one component at a time.

</details>

<details>
<summary>Hint 2</summary>

Give f opposite constant values on the two equal-volume components so the global integral cancels.

</details>

<details>
<summary>Model proof</summary>

Local conservation on separate components cannot be replaced by one global balance.

1. Assume u is C² up to each component closure and each boundary is piecewise C¹, with outward normals. Divergence gives ∫\_{Ω\_j}f dV=∫\_{∂Ω\_j}g dS separately for every component Ω\_j.
2. Let Ω be two disjoint unit balls. Set f=1 on the first and f=−1 on the second, with g=0 on both boundaries. These data are smooth on each component and its neighborhood.
3. The total source integral is zero because the two volumes agree, and the total boundary flux is also zero. Thus a single global condition would pass.
4. But on each ball the source integral is ±4π/3 while the prescribed boundary flux is zero. Each violates its own necessary condition, so no such classical u exists. The condition is necessary; no general existence theorem has been used.

**Self-assessment rubric**

- Derives the compatibility condition on each component with classical regularity.
- Chooses opposite smooth source data giving zero total integral.
- Shows the individual nonzero integrals rule out a solution despite the global balance.

</details>
