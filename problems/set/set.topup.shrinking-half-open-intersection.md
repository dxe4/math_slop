# Prove an infinite intersection with a retained endpoint

*Hard · [Set theory](index.md)*

For positive integers n let $A_n=[0,1/n)$. Prove $\bigcap_{n\geq1}A_n=\{0\}$, paying attention to the half-open endpoint.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

First check that zero survives every member set.

</details>

<details>
<summary>Hint 2</summary>

To exclude a fixed positive number, choose an index after that number has been fixed.

</details>

<details>
<summary>Model proof</summary>

The order of choosing a point and then an index identifies the intersection exactly.

1. Zero belongs to every A\_n because 0&lt;=0&lt;1/n for positive n.
2. No negative number belongs to any A\_n. For a fixed x&gt;0, choose a positive integer n&gt;1/x, giving 1/n&lt;x.
3. Then x fails the strict upper bound for A\_n and cannot be in the intersection. Only zero remains.

**Self-assessment rubric**

- Verify zero belongs to every half-open interval.
- For arbitrary positive x, choose a valid index that excludes it.
- Exclude negative reals and conclude both inclusions.

</details>
