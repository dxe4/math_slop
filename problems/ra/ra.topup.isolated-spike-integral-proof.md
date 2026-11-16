# Localize a bounded spike in a Darboux partition

*Hard · [Real analysis](index.md)*

On $[0,1]$, let f(1/3)=7 and f(x)=0 elsewhere. Prove directly with Darboux sums that f is Riemann integrable with integral zero. Keep the spike as its actual endpoint-inclusive value.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A partition that uses the spike point itself still has two adjacent intervals whose supremum sees the spike.

</details>

<details>
<summary>Hint 2</summary>

Control the combined widths of both adjacent intervals.

</details>

<details>
<summary>Model proof</summary>

A single exceptional value can be enclosed in an arbitrarily small total width.

1. All lower sums are zero because every nondegenerate subinterval contains points other than the spike.
2. For epsilon&gt;0 choose positive delta=min(1/6,epsilon/28) and partition at 0,1/3-delta,1/3,1/3+delta,1. Only the two intervals adjacent to the spike have supremum seven.
3. The upper sum is 14delta&lt;=epsilon/2&lt;epsilon. Thus the Darboux gap can be arbitrarily small and both integral bounds approach zero, proving integrability and integral zero without deleting the spike value.

**Self-assessment rubric**

- Justify zero infima on every nondegenerate partition interval.
- Use a valid ordered partition and include both endpoint-adjacent spike contributions.
- Give the strict small-gap estimate and deduce the integral value.

</details>
